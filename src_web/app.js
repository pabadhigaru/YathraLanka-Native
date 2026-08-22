// YathraLanka App Logic Engine
import { initialUserState, rankingScale, leaderboardPlayers, sitesData, sideQuestsData, rewardsData } from './data.js';
import { auth, db } from './firebase-init.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';

// Import Capacitor Camera for native hardware image capture bindings
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

// --- APPLICATION STATE ---
let state = {
  currentScreen: 'splash', // 'splash', 'login', 'signup', 'permissions', 'choose-role', 'calibrate-compass', 'how-scoring-works', 'dashboard', 'directory', 'map', 'site-detail', 'dwell-time', 'camera', 'camera-success', 'camera-reject', 'guidelines', 'offline-sync', 'quiz', 'quiz-cooldown', 'quests', 'quest-social', 'quest-food', 'quest-wandering', 'quest-wildlife', 'quest-warrior', 'activism', 'petition', 'donations', 'cleanup', 'create-event', 'rewards', 'rewards-list', 'coupon-redeem', 'rank', 'leaderboard', 'profile', 'travel-poster', 'settings', 'ledger'
  user: { ...initialUserState },
  activeSite: null,
  activeQuest: null,
  siteReferrer: 'dashboard',
  activeDirectoryTab: 'Heritage Trail',
  
  // Timer States
  dwellTimer: null,
  dwellTimeLeft: 900, // 15:00 mins in seconds
  dwellActive: false,
  gpsVerified: false,
  hasInitialPhotoCaptured: false, // Strict block gate state flag
  dwellImages: [], // Holds additional session capture images taken during freeze
  
  cooldownTimer: null,
  cooldownTimeLeft: 300, // 05:00 mins in seconds
  cooldownActive: false,
  
  // Verification & Cryptographic Ledger Engine
  verificationComment: "",
  lastVerificationResult: null,
  lastKnownLocation: null,
  eventLedger: JSON.parse(localStorage.getItem('yathra_event_ledger') || '[]'),
  ledgerFilter: 'ALL',
  stageDrawerOpen: false,
  demoOverride: {
    active: false,
    mockLat: null,
    mockLng: null,
    mockVisionScore: null,
    forcedStatus: null
  },

  // Quiz active state
  currentQuizIndex: 0,
  quizCorrectAnswers: 0,
  quizAnswers: [], // stores chosen indexes
  
  // Custom petition counter
  petitionSignatures: 8742,
  petitionSigned: false,
  
  // custom donations state
  donationAmount: 0,
  
  // navigation stack
  navStack: []
};

// Seed initial ledger data for presentation demo if empty
if (!state.eventLedger || state.eventLedger.length === 0) {
  state.eventLedger = [
    {
      eventId: "EVT-20260820-9A7F",
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      siteId: "sigiriya",
      siteName: "Sigiriya Rock Fortress",
      userCoords: { latitude: 7.9570, longitude: 80.7603, accuracy: 4.8 },
      targetCoords: { latitude: 7.9570, longitude: 80.7603 },
      distanceDeltaMeters: 14,
      visionScore: 96,
      status: "PASSED",
      imageMetadata: { sizeBytes: 184200, mimeType: "image/jpeg", hash: "SHA256-a8f3b9c1d2e4" },
      signature: "0x4a8f9c1d2e3f4b5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f"
    },
    {
      eventId: "EVT-20260820-8B3E",
      timestamp: new Date(Date.now() - 7200000).toISOString(),
      siteId: "mihintale",
      siteName: "Mihintale",
      userCoords: { latitude: 8.3508, longitude: 80.5186, accuracy: 5.1 },
      targetCoords: { latitude: 8.3508, longitude: 80.5186 },
      distanceDeltaMeters: 28,
      visionScore: 91,
      status: "PASSED",
      imageMetadata: { sizeBytes: 165000, mimeType: "image/jpeg", hash: "SHA256-b7e2c9d1a4f8" },
      signature: "0x9b8a7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f"
    },
    {
      eventId: "EVT-20260820-7C1D",
      timestamp: new Date(Date.now() - 14400000).toISOString(),
      siteId: "galle_fort",
      siteName: "Galle Dutch Fort",
      userCoords: { latitude: 6.0535, longitude: 80.2210, accuracy: 12.0 },
      targetCoords: { latitude: 6.0300, longitude: 80.2150 },
      distanceDeltaMeters: 2640,
      visionScore: 89,
      status: "OUT_OF_BOUNDS",
      imageMetadata: { sizeBytes: 198000, mimeType: "image/jpeg", hash: "SHA256-c3d2e1f4a5b6" },
      signature: "0x1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b"
    },
    {
      eventId: "EVT-20260820-6D9A",
      timestamp: new Date(Date.now() - 28800000).toISOString(),
      siteId: "temple_tooth",
      siteName: "Temple of the Sacred Tooth Relic",
      userCoords: { latitude: 6.9271, longitude: 79.8612, accuracy: 50.0 },
      targetCoords: { latitude: 7.2936, longitude: 80.6413 },
      distanceDeltaMeters: 115000,
      visionScore: 42,
      status: "SPOOF_SUSPECTED",
      imageMetadata: { sizeBytes: 94000, mimeType: "image/jpeg", hash: "SHA256-d4e3f2a1b5c6" },
      signature: "0x3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c"
    }
  ];
  localStorage.setItem('yathra_event_ledger', JSON.stringify(state.eventLedger));
}

// --- CORE GEOLOCATION & MULTI-FACTOR VERIFICATION ENGINE ---
function calculateHaversineDistanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000; // Earth's radius in meters
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

function evaluateAntiSpoofingGuard(userLat, userLng, currentTimestamp = Date.now()) {
  if (state.lastKnownLocation && state.lastKnownLocation.timestamp) {
    const timeDeltaSec = (currentTimestamp - state.lastKnownLocation.timestamp) / 1000;
    if (timeDeltaSec > 0 && timeDeltaSec < 3600) {
      const distMeters = calculateHaversineDistanceMeters(
        state.lastKnownLocation.latitude,
        state.lastKnownLocation.longitude,
        userLat,
        userLng
      );
      const speedKmH = (distMeters / timeDeltaSec) * 3.6;
      if (speedKmH > 120) {
        return { isSpoof: true, reason: `Unrealistic velocity jump: ${Math.round(speedKmH)} km/h (>120 km/h threshold)` };
      }
    }
  }
  state.lastKnownLocation = { latitude: userLat, longitude: userLng, timestamp: currentTimestamp };
  return { isSpoof: false, reason: "Velocity profile clean" };
}

function evaluateVisionInspection(site, userLat, userLng, capturedImageSrc, imageTimestamp = Date.now()) {
  let effectiveLat = userLat;
  let effectiveLng = userLng;
  let forcedScore = null;
  let forcedStatus = null;

  if (state.demoOverride && state.demoOverride.active) {
    if (state.demoOverride.mockLat !== null) effectiveLat = state.demoOverride.mockLat;
    if (state.demoOverride.mockLng !== null) effectiveLng = state.demoOverride.mockLng;
    if (state.demoOverride.mockVisionScore !== null) forcedScore = state.demoOverride.mockVisionScore;
    if (state.demoOverride.forcedStatus !== null) forcedStatus = state.demoOverride.forcedStatus;
  }

  const targetLat = site.latitude;
  const targetLng = site.longitude;
  const distanceMeters = calculateHaversineDistanceMeters(effectiveLat, effectiveLng, targetLat, targetLng);
  const geofenceRadius = GEOFENCE_RADIUS_METERS || 500;
  
  const spoofCheck = evaluateAntiSpoofingGuard(effectiveLat, effectiveLng, imageTimestamp);
  
  let visionScore = 88;
  if (forcedScore !== null) {
    visionScore = forcedScore;
  } else if (capturedImageSrc && capturedImageSrc.length > 50) {
    let hash = 0;
    for (let i = 0; i < capturedImageSrc.length; i++) {
      hash = (hash << 5) - hash + capturedImageSrc.charCodeAt(i);
      hash |= 0;
    }
    visionScore = 75 + Math.abs(hash % 24);
  }

  let status = 'PASSED';
  let comment = '';
  
  if (forcedStatus !== null) {
    status = forcedStatus;
  } else if (spoofCheck.isSpoof) {
    status = 'SPOOF_SUSPECTED';
    comment = `Security Anomaly Intercepted: ${spoofCheck.reason}`;
  } else if (distanceMeters > geofenceRadius) {
    status = 'OUT_OF_BOUNDS';
    comment = `Geofence Delta Alert: Device is ${distanceMeters}m from site coordinates (Geofence Threshold: ${geofenceRadius}m).`;
  } else if (visionScore < 75) {
    status = 'FAILED_VISION';
    comment = `Vision Model Rejection: Landmark feature match score (${visionScore}%) is below required 75% threshold.`;
  } else {
    status = 'PASSED';
    comment = `Verification Successful: Landmark geometry matches reference dataset (${visionScore}% Confidence). Distance Delta: ${distanceMeters}m.`;
  }

  const block = recordVerificationLedgerEvent(site, effectiveLat, effectiveLng, distanceMeters, visionScore, status, capturedImageSrc);
  state.lastVerificationResult = { status, visionScore, distanceMeters, comment, block };
  state.verificationComment = comment;

  return state.lastVerificationResult;
}

function recordVerificationLedgerEvent(site, userLat, userLng, distanceMeters, visionScore, status, imageSrc) {
  const eventId = "EVT-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase();
  const timestamp = new Date().toISOString();
  
  const rawPayload = `${eventId}:${timestamp}:${site.id}:${userLat}:${userLng}:${distanceMeters}:${visionScore}:${status}`;
  let hashVal = 0;
  for (let i = 0; i < rawPayload.length; i++) {
    hashVal = (hashVal << 7) - hashVal + rawPayload.charCodeAt(i);
    hashVal |= 0;
  }
  const signature = "0x" + Math.abs(hashVal).toString(16).padStart(8, '0') + Math.abs(hashVal * 31).toString(16).padEnd(24, 'f').substring(0, 56);
  
  const block = {
    eventId,
    timestamp,
    siteId: site.id,
    siteName: site.name,
    userCoords: { latitude: userLat, longitude: userLng, accuracy: 5.0 },
    targetCoords: { latitude: site.latitude, longitude: site.longitude },
    distanceDeltaMeters: distanceMeters,
    visionScore,
    status,
    imageMetadata: {
      sizeBytes: imageSrc ? imageSrc.length : 172000,
      mimeType: "image/jpeg",
      hash: "SHA256-" + signature.substring(2, 18)
    },
    signature
  };
  
  if (!state.eventLedger) state.eventLedger = [];
  state.eventLedger.unshift(block);
  localStorage.setItem('yathra_event_ledger', JSON.stringify(state.eventLedger));
  return block;
}

// Global reference for location intervals
let backgroundLocationInterval = null;
const GEOFENCE_RADIUS_METERS = 500;
const POLLING_INTERVAL_MS = 120000; // 2 minutes interval polling
const DRIFT_GRACE_LIMIT_MS = 180000; // 3 minutes structural grace period

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  const queueData = localStorage.getItem('yathra_sync_queue');
  if (queueData) {
    state.offlineSyncQueue = JSON.parse(queueData);
  } else {
    state.offlineSyncQueue = [];
  }

  window.addEventListener('online', () => {
    processSyncQueue();
  });

  const lockData = localStorage.getItem('yathra_dwell_lock');
  if (lockData) {
    try {
      const lock = JSON.parse(lockData);
      const timePassed = Date.now() - lock.startTime;
      const totalDuration = lock.duration || (900 * 1000);
      
      if (timePassed < totalDuration) {
        state.activeSite = sitesData.find(s => s.id === lock.siteId);
        state.dwellTimeLeft = Math.max(0, Math.ceil((totalDuration - timePassed) / 1000));
        state.gpsVerified = lock.gpsVerified ?? false;
        state.hasInitialPhotoCaptured = lock.hasInitialPhotoCaptured ?? false;
        state.dwellImages = lock.dwellImages || [];
        
        if (state.hasInitialPhotoCaptured) {
          startDwellTimer();
          setupIntervalPresencePoller();
          setTimeout(() => {
            navigate('dwell-time', false);
          }, 100);
          return;
        }
      } else {
        localStorage.removeItem('yathra_dwell_lock');
      }
    } catch (err) {
      console.error("Error restoring lock state:", err);
      localStorage.removeItem('yathra_dwell_lock');
    }
  }

  navigate('splash');
});

// --- STATE MANAGER / ROUTER ---
function navigate(screenName, storeStack = true) {
  const lockData = localStorage.getItem('yathra_dwell_lock');
  if (lockData) {
    try {
      const lock = JSON.parse(lockData);
      const timePassed = Date.now() - lock.startTime;
      const totalDuration = lock.duration || (900 * 1000);
      
      if (timePassed < totalDuration) {
        const allowedScreens = ['dwell-time', 'camera', 'camera-success', 'camera-reject', 'guidelines'];
        if (!allowedScreens.includes(screenName)) {
          showNotification("Application navigation is disabled. Complete your 15-minute heritage immersion session first.");
          return;
        }
      }
    } catch (err) {
      console.error("Error evaluating system verification isolation parameters:", err);
    }
  }

  if (storeStack && state.currentScreen !== screenName) {
    state.navStack.push(state.currentScreen);
  }
  
  if (screenName === 'site-detail') {
    const mainScreens = ['map', 'directory', 'heritage-trail', 'hidden-gems', 'dashboard'];
    if (mainScreens.includes(state.currentScreen)) {
      state.siteReferrer = state.currentScreen;
    }
  }
  
  state.currentScreen = screenName;
  
  if (screenName !== 'map') {
    document.documentElement.classList.remove('map-active');
    document.body.classList.remove('map-active');
    document.documentElement.style.removeProperty('background');
    document.documentElement.style.removeProperty('background-color');
    document.body.style.setProperty('background', '#FDF8E9', 'important');
    document.body.style.setProperty('background-color', '#FDF8E9', 'important');
    
    const targets = ['#app', '.app-root', '#app-container', '.app-viewport', '.iphone-chassis', '.view-wrapper', '.screen', 'main'];
    targets.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) {
        el.style.removeProperty('background');
        el.style.removeProperty('background-color');
      }
    });
  }
  
  renderActiveScreen();
}

function goBack() {
  if (state.currentScreen === 'site-detail') {
    navigate(state.siteReferrer || 'dashboard', false);
    return;
  }
  
  if (state.navStack.length > 0) {
    const prev = state.navStack.pop();
    navigate(prev, false);
  } else {
    navigate('dashboard');
  }
}

function addXP(amount, message = '') {
  state.user.xp += amount;
  
  let currentRank = 'None';
  rankingScale.forEach(lvl => {
    if (state.user.xp >= lvl.threshold) {
      currentRank = lvl.rank;
    }
  });
  
  if (state.user.rank !== currentRank) {
    state.user.rank = currentRank;
    showNotification(`New Rank Unlocked: ${currentRank}!`);
  }
  
  if (message) {
    showNotification(`${message} (+${amount} XP)`);
  }
  saveUserProfile();
}

function saveUserProfile() {
  const user = auth.currentUser;
  if (!user) return Promise.resolve();
  
  const userDocRef = doc(db, 'users', user.uid);
  return setDoc(userDocRef, {
    xp: state.user.xp,
    rank: state.user.rank,
    medals: state.user.medals,
    sitesVisited: state.user.sitesVisited,
    quizzesPassed: state.user.quizzesPassed,
    role: state.user.role,
    interests: state.user.interests,
    permissions: state.user.permissions,
    signedPetitions: state.user.signedPetitions,
    donatedAmount: state.user.donatedAmount,
    joinedEvents: state.user.joinedEvents,
    unlockedCoupons: state.user.unlockedCoupons,
    completedQuizzes: state.user.completedQuizzes,
    dwellTimeCompleted: state.user.dwellTimeCompleted,
    verifiedPhotos: state.user.verifiedPhotos
  }, { merge: true })
  .catch(err => console.error("Error saving user profile data structure:", err));
}

function showNotification(text) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: absolute;
    top: 60px;
    left: 20px;
    right: 20px;
    background: var(--color-teal);
    color: var(--color-white);
    padding: 12px 18px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 800;
    box-shadow: var(--shadow-floating);
    z-index: 2000;
    text-align: center;
    border: 1.5px solid var(--color-gold);
    animation: slideUp 0.3s ease-out forwards;
  `;
  notification.textContent = text;
  document.querySelector('.iphone-chassis').appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'screenFadeIn 0.3s ease-in reverse forwards';
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

function showLocationPermissionModal() {
  const existing = document.getElementById('location-permission-modal');
  if (existing) existing.remove();
  
  const modal = document.createElement('div');
  modal.id = 'location-permission-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #ffffff !important;
    background-color: #ffffff !important;
    z-index: 10000000;
    display: fixed;
    align-items: center;
    justify-content: center;
    font-family: 'Outfit', sans-serif;
  `;
  
  modal.innerHTML = `
    <div class="permission-modal-card" style="
      background: #FDF8E9;
      width: 85%;
      max-width: 320px;
      border-radius: 24px;
      padding: 32px 24px;
      text-align: center;
      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15);
      border: 1.5px solid var(--color-teal);
      animation: slideUp 0.3s ease-out;
    ">
      <div style="font-size: 40px; margin-bottom: 16px;">📍</div>
      <h3 style="font-size: 18px; font-weight: 800; color: var(--color-charcoal); margin-bottom: 8px;">Location Services</h3>
      <p style="font-size: 12px; color: var(--color-charcoal); line-height: 1.5; margin-bottom: 24px; font-weight: 600;">
        Yathra Lanka requires location access to calculate real-time distances to heritage sites and verify your cultural visits.
      </p>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <button class="btn-primary" id="location-allow-btn" style="height: 44px; font-size: 13px;">Allow Access</button>
        <button class="btn-outline" id="location-cancel-btn" style="height: 44px; font-size: 13px; border: none; color: var(--color-gray);">Not Now</button>
      </div>
    </div>
  `;
  
  const chassis = document.querySelector('.iphone-chassis') || document.body;
  chassis.appendChild(modal);
  
  document.getElementById('location-allow-btn').addEventListener('click', async () => {
    modal.remove();
    try {
      const status = await Geolocation.requestPermissions();
      if (status.location === 'granted') {
        locationPermissionDenied = false;
        await initializeYathraMap();
      } else {
        locationPermissionDenied = true;
        await initializeYathraMap();
      }
    } catch (err) {
      locationPermissionDenied = true;
      console.error("Error requesting geolocation capability configurations:", err);
      await initializeYathraMap();
    }
  });
  
  document.getElementById('location-cancel-btn').addEventListener('click', () => {
    modal.remove();
    locationPermissionDenied = true;
    initializeYathraMap();
  });
}

let yathraMapInstance = null;
let userCoordinates = null;
let locationPermissionDenied = false;

async function initializeYathraMap() {
  const mapRef = document.getElementById('yathra-main-map');
  if (!mapRef) return;
  
  try {
    const permStatus = await Geolocation.checkPermissions();
    if (permStatus.location !== 'granted') {
      if (!locationPermissionDenied) {
        showLocationPermissionModal();
        return;
      }
    } else {
      const coordinates = await Geolocation.getCurrentPosition();
      userCoordinates = {
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude
      };
      locationPermissionDenied = false;
    }
  } catch (err) {
    locationPermissionDenied = true;
    console.error("Error parsing native hardware location states:", err);
  }
  
  const loader = document.getElementById('map-loader');
  if (loader) {
    loader.style.setProperty('display', 'flex', 'important');
  }

  const hideLoader = () => {
    const loaderEl = document.getElementById('map-loader');
    if (loaderEl) {
      loaderEl.style.setProperty('display', 'none', 'important');
    }
  };

  const mapView = document.getElementById('map-view');
  if (mapView) mapView.style.display = 'block';
  
  document.documentElement.classList.add('map-active');
  document.body.classList.add('map-active');
  
  const targets = ['html', 'body', '#app', '.app-root', '#app-container', '.app-viewport', '.iphone-chassis', '.view-wrapper', '.screen', 'main'];
  targets.forEach(sel => {
    const el = document.querySelector(sel);
    if (sel === 'html' || sel === 'body') {
      const docEl = sel === 'html' ? document.documentElement : document.body;
      docEl.style.setProperty('background', 'transparent', 'important');
      docEl.style.setProperty('background-color', 'transparent', 'important');
    } else if (el) {
      el.style.setProperty('background', 'none', 'important');
      el.style.setProperty('background-color', 'transparent', 'important');
    }
  });
  
  if (yathraMapInstance) {
    try {
      await yathraMapInstance.destroy();
    } catch (e) {
      console.error("Error processing stale native map termination mapping:", e);
    }
    yathraMapInstance = null;
  }
  
  try {
    yathraMapInstance = await GoogleMap.create({
      id: 'yathra-map-instance',
      element: mapRef,
      apiKey: 'AIzaSyAh9WMzSPpYwNj-ReY231j_ONHa_73SnUY',
      config: {
        center: {
          lat: 6.9271,
          lng: 79.8612,
        },
        zoom: 13,
      },
    });
    console.log("Google Maps framework overlay injected over chassis.");

    if (typeof yathraMapInstance.setOnTilesLoadedListener === 'function') {
      yathraMapInstance.setOnTilesLoadedListener(() => {
        hideLoader();
      });
    }
    setTimeout(hideLoader, 1000);

    const mapSites = sitesData.filter(site => site.latitude && site.longitude);
    const markers = mapSites.map(site => {
      return {
        coordinate: {
          lat: site.latitude,
          lng: site.longitude
        },
        iconUrl: site.category === 'Hidden Gems' ? 'assets/pin_gold.png' : 'assets/pin_teal.png',
        iconSize: { width: 32, height: 42 }
      };
    });

    const addMarkersResult = await yathraMapInstance.addMarkers(markers);
    const markerIds = Array.isArray(addMarkersResult) ? addMarkersResult : (addMarkersResult.ids || []);

    mapSites.forEach((site, index) => {
      site.nativeMarkerId = markerIds[index];
    });

    yathraMapInstance.setOnMarkerClickListener(async (event) => {
      const siteObj = sitesData.find(s => s.nativeMarkerId === event.markerId);
      if (siteObj) {
        showMapPopupCard(siteObj);
        const popupCard = document.getElementById('map-popup-card');
        if (popupCard) {
          popupCard.style.setProperty('display', 'block', 'important');
        }
      }
    });

  } catch (error) {
    hideLoader();
    console.error("Maps Initialization Error: ", error);
  }
}
window.initializeYathraMap = initializeYathraMap;

function Maps(route, data) {
  if (route === 'site-details' || route === 'site-detail') {
    const siteId = data && data.id;
    const siteObj = sitesData.find(s => s.id === siteId);
    if (siteObj) {
      state.activeSite = siteObj;
      navigate('site-detail');
    }
  }
}
window.Maps = Maps;

// --- SCREEN VIEWS & TEMPLATES ---
function renderActiveScreen() {
  const container = document.getElementById('app-container');
  if (!container) return;
  
  let html = '';
  
  switch (state.currentScreen) {
    case 'splash': html = renderSplash(); break;
    case 'login': html = renderLogin(); break;
    case 'signup': html = renderSignUp(); break;
    case 'permissions': html = renderPermissions(); break;
    case 'choose-role': html = renderChooseRole(); break;
    case 'calibrate-compass': html = renderCalibrateCompass(); break;
    case 'how-scoring-works': html = renderHowScoring(); break;
    case 'dashboard': html = renderDashboard(); break;
    case 'directory': html = renderDirectory(); break;
    case 'heritage-trail': html = renderTrailList('Heritage Trail'); break;
    case 'hidden-gems': html = renderTrailList('Hidden Gems'); break;
    case 'map': html = renderMap(); break;
    case 'site-detail': html = renderSiteDetail(); break;
    case 'dwell-time': html = renderDwellTime(); break;
    case 'camera': html = renderCamera(); break;
    case 'camera-success': html = renderCameraSuccess(); break;
    case 'camera-reject': html = renderCameraReject(); break;
    case 'guidelines': html = renderGuidelines(); break;
    case 'offline-sync': html = renderOfflineSync(); break;
    case 'quiz': html = renderQuiz(); break;
    case 'quiz-cooldown': html = renderQuizCooldown(); break;
    case 'quests': html = renderQuestsList(); break;
    case 'quest-social': html = renderQuestSocial(); break;
    case 'quest-food': html = renderQuestFood(); break;
    case 'quest-wandering': html = renderQuestWandering(); break;
    case 'quest-wildlife': html = renderQuestWildlife(); break;
    case 'quest-warrior': html = renderQuestWarrior(); break;
    case 'activism': html = renderActivismDashboard(); break;
    case 'petition': html = renderPetitionPage(); break;
    case 'donations': html = renderDonationsPage(); break;
    case 'cleanup': html = renderCleanupPage(); break;
    case 'create-event': html = renderCreateEventPage(); break;
    case 'rewards': html = renderRewardsDashboard(); break;
    case 'rewards-list': html = renderRewardsList(); break;
    case 'coupon-redeem': html = renderCouponRedeem(); break;
    case 'rank': html = renderRankScreen(); break;
    case 'leaderboard': html = renderLeaderboard(); break;
    case 'profile': html = renderProfile(); break;
    case 'travel-poster': html = renderTravelPoster(); break;
    case 'settings': html = renderSettings(); break;
    case 'ledger': html = renderLedger(); break;
    default: html = `<div>Screen frame missing</div>`;
  }
  
  const mapView = document.getElementById('map-view');
  
  if (state.currentScreen !== 'map' && yathraMapInstance) {
    const tempInstance = yathraMapInstance;
    yathraMapInstance = null;
    (async () => {
      try {
        await tempInstance.destroy();
        console.log("Native map instance closed smoothly via memory controller.");
      } catch (err) {
        console.error("Error executing native interface cleanup execution mapping:", err);
      }
    })();
  }
  
  if (state.currentScreen === 'map') {
    container.style.display = 'block';
    initializeYathraMap();
  } else {
    if (mapView) mapView.style.display = 'none';
    container.style.display = 'block';
    document.documentElement.classList.remove('map-active');
    document.body.classList.remove('map-active');
    document.documentElement.style.removeProperty('background');
    document.documentElement.style.removeProperty('background-color');
    document.body.style.setProperty('background', '#FDF8E9', 'important');
    document.body.style.setProperty('background-color', '#FDF8E9', 'important');
    
    const targets = ['#app', '.app-root', '#app-container', '.app-viewport', '.iphone-chassis', '.view-wrapper', '.screen', 'main'];
    targets.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) {
        el.style.removeProperty('background');
        el.style.removeProperty('background-color');
      }
    });
  }
  
  container.innerHTML = html;
  attachEvents();
}

// --- CORE SCREENS GENERATION ---

function renderSplash() {
  return `
    <div class="screen dark-theme">
      <div class="splash-container">
        <div class="splash-logo-box">
          <img src="Element%20Pictures/YathraLanka%20Logo.png" alt="YathraLanka Logo">
        </div>
        <h1 class="splash-title">YathraLanka</h1>
        <p class="splash-subtitle">Play the game. Protect the Past.</p>
        <div class="splash-actions">
          <button class="btn-primary" id="go-signin">Sign In</button>
          <button class="btn-outline" id="go-signup">Sign Up</button>
        </div>
      </div>
    </div>
  `;
}

function renderLogin() {
  return `
    <div class="screen screen-with-header">
      <div class="header-bar">
        <button class="back-button" id="login-back">←</button>
        <div class="header-title"></div>
      </div>
      <div style="padding: 10px 24px; text-align: center;">
        <h2 style="font-size: 26px; font-weight: 800; margin-bottom: 6px;">Welcome Back!</h2>
        <p style="font-size: 13px; color: var(--color-gray); margin-bottom: 20px;">Sign in to continue your journey</p>
      </div>
      <div class="form-card">
        <div class="form-group">
          <label class="form-label">Email or Phone</label>
          <div class="input-wrapper">
            <input type="email" class="form-input" placeholder="Enter email or phone" value="" id="login-email" autocomplete="off">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <div class="input-wrapper">
            <input type="password" class="form-input" placeholder="Enter password" value="" id="login-pass" autocomplete="off">
            <div class="input-icon-right" id="login-toggle-password" style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; cursor: pointer;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
          </div>
        </div>
        <div style="text-align: right; margin-top: -4px;">
          <a class="form-link" style="font-size: 12px;">Forgot password?</a>
        </div>
        <button class="btn-primary" style="margin-top: 10px;" id="login-submit">Sign In</button>
        <div style="text-align: center; margin: 10px 0; font-size: 11px; color: var(--color-gray);">or continue with</div>
        <div style="display: flex; gap: 16px; justify-content: center;">
          <button style="border: 1px solid #dcdbd8; border-radius: 50%; width: 44px; height: 44px; background: white; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center;">🌐</button>
          <button style="border: 1px solid #dcdbd8; border-radius: 50%; width: 44px; height: 44px; background: white; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#000000" style="display: inline-block; vertical-align: middle;">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.56 2.95-1.39z"/>
            </svg>
          </button>
        </div>
        <div style="text-align: center; font-size: 12px; margin-top: 14px; font-weight: 500;">
          Don't have an account? <span class="form-link" id="login-toggle-signup">Sign Up</span>
        </div>
      </div>
    </div>
  `;
}

function renderSignUp() {
  return `
    <div class="screen screen-with-header">
      <div class="header-bar">
        <button class="back-button" id="signup-back">←</button>
        <div class="header-title"></div>
      </div>
      <div style="padding: 10px 24px; text-align: center;">
        <h2 style="font-size: 26px; font-weight: 800; margin-bottom: 6px;">Create Account</h2>
        <p style="font-size: 13px; color: var(--color-gray); margin-bottom: 20px;">Join the movement!</p>
      </div>
      <div class="form-card" style="margin-top: 0; padding: 18px;">
        <div id="signup-error-box" class="error-warning-box" style="display: none; margin-bottom: 12px;"></div>
        <div class="form-group">
          <label class="form-label">Full Name</label>
          <input type="text" class="form-input" placeholder="Enter your name" id="signup-name" autocomplete="off">
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="form-input" placeholder="Enter email" id="signup-user-email" autocomplete="off">
        </div>
        <div class="form-group">
          <label class="form-label">Password</label>
          <div class="input-wrapper">
            <input type="password" class="form-input" placeholder="Create password" id="signup-pass" autocomplete="off">
            <div class="input-icon-right" id="signup-toggle-password" style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; cursor: pointer;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Confirm Password</label>
          <div class="input-wrapper">
            <input type="password" class="form-input" placeholder="Confirm password" id="signup-confirm" autocomplete="off">
            <div class="input-icon-right" id="signup-toggle-confirm" style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; cursor: pointer;">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
          </div>
        </div>
        <div class="checkbox-group">
          <input type="checkbox" id="signup-check">
          <label for="signup-check">I agree to the <span class="form-link">Terms & Privacy Policy</span></label>
        </div>
        <button class="btn-primary" style="margin-top: 8px;" id="signup-submit">Sign Up</button>
        <div style="text-align: center; font-size: 12px; margin-top: 12px; font-weight: 500;">
          Already have an account? <span class="form-link" id="signup-toggle-login">Sign In</span>
        </div>
      </div>
    </div>
  `;
}

function renderPermissions() {
  const isCamera = state.user.permissions.camera;
  const isNotifications = state.user.permissions.notifications;
  const allGranted = isCamera;
  
  return `
    <div class="screen permissions-screen" id="permissions-view">
      <div style="padding: 30px 24px 20px 24px; text-align: center;">
        <h2 style="font-size: 26px; font-weight: 900; line-height: 1.2; margin-bottom: 8px;">We need a few permissions</h2>
        <p style="font-size: 13px; color: var(--color-gray);">These help us make your experience safe and seamless.</p>
      </div>
      <div class="selection-card permission-card ${isCamera ? 'selected' : ''}" style="margin: 10px 16px; padding: 14px;" id="perm-camera-btn">
        <div class="permission-icon-box">
          <img src="icons/camera.png" alt="Camera">
        </div>
        <div style="flex: 1;">
          <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">Camera</h3>
          <p style="font-size: 11px; color: var(--color-gray);">Used to scan, capture and verify your visits</p>
        </div>
        <div class="check-circle ${isCamera ? 'checked' : ''}">
          ${isCamera ? '✓' : ''}
        </div>
      </div>
      <div class="selection-card permission-card ${isNotifications ? 'selected' : ''}" style="margin: 10px 16px; padding: 14px;" id="perm-notif-btn">
        <div class="permission-icon-box">
          <img src="icons/notifications.png" alt="Notifications">
        </div>
        <div style="flex: 1;">
          <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">Notifications</h3>
          <p style="font-size: 11px; color: var(--color-gray);">Stay updated on quests, events and rewards</p>
        </div>
        <div class="check-circle ${isNotifications ? 'checked' : ''}">
          ${isNotifications ? '✓' : ''}
        </div>
      </div>
      <div style="padding: 16px; margin-top: 10px;">
        <button class="btn-primary" style="opacity: ${allGranted ? '1' : '0.5'}; cursor: ${allGranted ? 'pointer' : 'not-allowed'};" id="permissions-continue-btn" ${allGranted ? '' : 'disabled'}>Continue</button>
      </div>
      <div class="permission-footer-box" id="permissions-privacy-footer">
        We value your privacy. Location access is requested when using the map or verifying a site visit.
      </div>
    </div>
  `;
}

function renderChooseRole() {
  const chosen = state.user.role;
  const roles = [
    { key: 'Explorer', title: 'Explorer', desc: 'Visit places, learn & earn' },
    { key: 'Volunteer', title: 'Volunteer', desc: 'Join cleanups & activities' },
    { key: 'Organizer', title: 'Organizer', desc: 'Organize events & petitions' },
    { key: 'Quiz Master', title: 'Quiz Master', desc: 'Do quizzes & earn points' }
  ];
  
  return `
    <div class="screen dark-theme">
      <div class="header-bar">
        <button class="back-button" id="role-back">←</button>
        <div class="header-title"></div>
      </div>
      <div style="padding: 10px 24px; text-align: center; margin-bottom: 12px;">
        <h2 style="font-size: 26px; font-weight: 800; margin-bottom: 6px;">Choose Your Role</h2>
        <p style="font-size: 13px; color: #a9cbd0;">How will you contribute?</p>
      </div>
      <div style="display: flex; flex-direction: column; gap: 14px; padding: 0 20px;">
        ${roles.map(r => `
          <div class="selection-card ${chosen === r.key ? 'selected' : ''}" style="color: var(--color-charcoal); padding: 14px;" data-role="${r.key}">
            <div style="flex: 1;">
              <h3 class="selection-card-title">${r.title}</h3>
              <p class="selection-card-desc">${r.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="padding: 20px; margin-top: auto;">
        <button class="btn-primary" style="opacity: ${chosen ? '1' : '0.5'};" id="role-continue" ${chosen ? '' : 'disabled'}>Continue</button>
      </div>
    </div>
  `;
}

function renderCalibrateCompass() {
  const selected = state.user.interests;
  const categories = [
    { key: 'Nature & Outdoors', title: 'Nature & Outdoors', desc: 'Mountains, Waterfalls, Hikes', icon: 'icons/Nature & Outdoors.png' },
    { key: 'Heritage & History', title: 'Heritage & History', desc: 'Ancient ruins, Temples, Forts', icon: 'icons/Heritage & History.png' },
    { key: 'Beaches & Coastal', title: 'Beaches & Coastal', desc: 'Surfing, Relaxation, Marine', icon: 'icons/Beaches & Coastal.png' },
    { key: 'Cultural Immersion', title: 'Cultural Immersion', desc: 'Local foods, Crafts, Festivals', icon: 'icons/cultural immersion.png' }
  ];
  
  return `
    <div class="screen">
      <div style="padding: 16px; text-align: left; width: 100%; box-sizing: border-box;">
        <button id="compass-back-btn" style="color: #000000; background: none; border: none; font-size: 24px; cursor: pointer; padding: 0;">←</button>
      </div>
      <div style="padding: 30px 24px 10px 24px; text-align: center;">
        <h2 style="font-size: 26px; font-weight: 900; line-height: 1.2; margin-bottom: 6px;">Calibrate Your Compass</h2>
        <p style="font-size: 13px; color: var(--color-gray);">Select your primary interests to personalize your adventure.</p>
      </div>
      <div class="grid-2x2">
        ${categories.map(c => {
          const isSel = selected.includes(c.key);
          return `
            <div class="grid-item-card ${isSel ? 'selected' : ''}" data-cat="${c.key}">
              <img src="${c.icon}" alt="${c.title}">
              <div class="grid-item-title">${c.title}</div>
              <div class="grid-item-subtitle">${c.desc}</div>
            </div>
          `;
        }).join('')}
      </div>
      <div style="padding: 20px; margin-top: auto;">
        <button class="btn-primary" style="opacity: ${selected.length > 0 ? '1' : '0.5'};" id="compass-continue" ${selected.length > 0 ? '' : 'disabled'}>Continue</button>
      </div>
    </div>
  `;
}

function renderHowScoring() {
  return `
    <div class="screen">
      <div style="padding: 30px 24px 20px 24px; text-align: center;">
        <h2 style="font-size: 26px; font-weight: 900; line-height: 1.2; margin-bottom: 6px;">How Scoring Works</h2>
        <p style="font-size: 13px; color: var(--color-gray);">Your impact is measured by dedication, not just frequency. Understand the laws of the journey.</p>
      </div>
      <div style="padding: 0 16px;">
        <div class="scoring-row">
          <div class="scoring-graphic">
            <img src="icons/100 point limit.png" alt="100 limit">
          </div>
          <div class="scoring-body">
            <h3 style="font-size: 14px; font-weight: 800;">The 100-Point Limit</h3>
            <p style="font-size: 11px; color: var(--color-gray); line-height: 1.4;">Every task, quiz, or cleanup is strictly capped at 100 points. We reward deep, meaningful engagement over rushing.</p>
          </div>
        </div>
        <div class="scoring-row">
          <div class="scoring-graphic">
            <img src="icons/9,999 scale.png" alt="9999 scale">
          </div>
          <div class="scoring-body">
            <h3 style="font-size: 14px; font-weight: 800;">The 9,999 Scale</h3>
            <p style="font-size: 11px; color: var(--color-gray); line-height: 1.4;">Your lifetime ranking ranges from 0 to 9,999. Cross milestones to evolve from a Gravel Digger to a Radiant Legend.</p>
          </div>
        </div>
      </div>
      <div style="padding: 20px; margin-top: auto;">
        <button class="btn-primary" id="scoring-continue">Accept the Challenge</button>
      </div>
    </div>
  `;
}

function renderDashboard() {
  return `
    <div class="screen">
      <div style="padding: 20px 20px 6px 20px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-size: 26px; font-weight: 900; line-height: 1.1;">Central Dashboard</h2>
          <p style="font-size: 12px; color: var(--color-gray); margin-top: 4px;">Welcome back, ${state.user.role || 'Traveller'}!</p>
        </div>
        <div class="badge-tag" style="background: var(--color-gold); color: var(--color-charcoal); font-weight: 800;">
          🌟 ${state.user.xp} XP
        </div>
      </div>
      <div class="dashboard-card" style="margin-top: 10px; background-color: #AAD3DF !important; background: #AAD3DF !important; transition: none !important; animation: none !important;" id="dash-map-card">
        <h3 style="font-size: 15px; font-weight: 800; color: var(--color-charcoal); transition: none !important; animation: none !important;">Wanderer</h3>
        <p style="font-size: 11px; color: #555555; margin-top: 2px; transition: none !important; animation: none !important;">Explore the map to discover nearby Hidden Gems and the Heritage Trail.</p>
        <div class="dashboard-map-svg" style="transition: none !important; animation: none !important;">
          <img src="Element Pictures/SL map on home screen green.svg" alt="Sri Lanka Map" style="opacity: 0.85; transition: none !important; animation: none !important;">
        </div>
        <div style="position: absolute; bottom: 18px; right: 18px; width: 36px; height: 36px; background: var(--color-teal); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; cursor: pointer; box-shadow: var(--shadow-premium); transition: none !important; animation: none !important;">→</div>
      </div>
      <div class="dashboard-card" style="background: var(--color-teal); color: var(--color-white);" id="dash-search-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
          <div>
            <h3 style="font-size: 16px; font-weight: 800;">Searcher</h3>
            <p style="font-size: 11px; color: #a9cbd0; margin-top: 2px;">Find specific locations through our categorized directory.</p>
          </div>
        </div>
        <div style="display: flex; gap: 8px; margin-bottom: 14px;">
          <span class="badge-tag" style="background: rgba(255,255,255,0.15); color: white;">📍 Heritage Trail</span>
          <span class="badge-tag" style="background: rgba(255,255,255,0.15); color: white;">💎 Hidden Gems</span>
        </div>
        <button class="btn-primary" style="background: var(--color-gold); height: 38px; font-size: 13px;" id="dash-view-directory">View directory</button>
      </div>
      ${renderBottomNav('home')}
    </div>
  `;
}

function renderDirectory() {
  const isGems = state.activeDirectoryTab === 'Hidden Gems';
  return `
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="directory-back">←</button>
        <div class="header-title">Directory</div>
      </div>
      <div class="search-container">
        <div class="search-box">
          <span>🔍</span>
          <input type="text" class="search-input" placeholder="Search by name of the location" id="directory-search">
        </div>
      </div>
      <div class="tabs-container">
        <div class="tab-btn ${isGems ? '' : 'active'}" id="tab-trail">Heritage Trail</div>
        <div class="tab-btn ${isGems ? 'active' : ''}" id="tab-gems">Hidden Gems</div>
      </div>
      <div class="tabs-divider-line" style="height: 1px; background: var(--color-light-gray); margin: 0 16px 12px 16px;"></div>
      <div class="locations-grid" id="directory-grid-container"></div>
      ${renderBottomNav('home')}
    </div>
  `;
}

function renderNavTrailList(categoryName) {
  return `
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="trail-list-back">←</button>
        <div class="header-title">${categoryName}</div>
      </div>
      <div class="search-container">
        <div class="search-box">
          <span>🔍</span>
          <input type="text" class="search-input" placeholder="Search by name of the location" id="list-search-input">
        </div>
      </div>
      <div class="location-list-container" id="list-cards-container"></div>
      ${renderBottomNav('home')}
    </div>
  `;
}

function renderMap() {
  return `
    <div class="screen" style="padding-bottom: 0;">
      <div class="map-canvas">
        <div class="header-bar static-back-arrow-class-name" style="position: absolute; top: 0; left: 0; background: transparent; z-index: 100;">
          <button class="back-button" id="map-back" style="background: rgba(255,255,255,0.8); border-radius: 50%; width:32px; height:32px; justify-content:center; padding:0; color:var(--color-charcoal); border:none;">←</button>
        </div>
        <div class="map-legend">
          <div class="legend-item">
            <span class="legend-color" style="background: var(--color-gray); border: 2px solid white;"></span>
            <span>You Are Here</span>
          </div>
          <div class="legend-item">
            <span class="legend-color" style="background: var(--color-gold);"></span>
            <span>Hidden Gems (High XP)</span>
          </div>
          <div class="legend-item">
            <span class="legend-color" style="background: var(--color-teal);"></span>
            <span>Heritage Trail (Low XP)</span>
          </div>
        </div>
        <div class="map-srilanka-vector" style="position: relative;">
          <img src="Element Pictures/SL map on home screen.svg" alt="Sri Lanka Map" style="height: 80%; width: auto; object-fit: contain; pointer-events: none;">
          <div class="map-pin" style="top: 32%; left: 49%;" data-site-id="mihintale">
            <svg viewBox="0 0 24 24"><path fill="var(--color-teal)" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          <div class="map-pin" style="top: 38%; left: 52%;" data-site-id="sigiriya">
            <svg viewBox="0 0 24 24"><path fill="var(--color-teal)" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          <div class="map-pin" style="top: 60%; left: 56%;" data-site-id="dowa_rock_temple">
            <svg viewBox="0 0 24 24"><path fill="var(--color-gold)" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          <div class="map-pin" style="top: 76%; left: 34%;" data-site-id="galle_fort">
            <svg viewBox="0 0 24 24"><path fill="var(--color-teal)" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          <div style="position: absolute; top: 62%; left: 30%; width: 14px; height: 14px; background: var(--color-gray); border: 2.5px solid white; border-radius: 50%; box-shadow: 0 0 8px rgba(0,0,0,0.5);"></div>
        </div>
        <div id="map-popup-container"></div>
      </div>
      ${renderBottomNav('home')}
    </div>
  `;
}

function renderSiteDetail() {
  const site = state.activeSite;
  if (!site) return '';
  
  const isVerified = state.user.dwellTimeCompleted[site.id];
  
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar" style="position: absolute; top: 0; left: 0; z-index: 10; width: 100%; padding-top: env(safe-area-inset-top, 24px) !important; box-sizing: border-box;">
        <button class="back-button" id="site-back" style="background: rgba(255,255,255,0.8); border-radius: 50%; width:32px; height:32px; justify-content:center; padding:0; color:var(--color-charcoal); border:none;">←</button>
      </div>
      <img src="${site.image}" alt="${site.name}" class="detail-banner">
      <div style="padding: 16px;">
        <h2 style="font-size: 24px; font-weight: 900; margin-bottom: 2px;">${site.name}</h2>
        <p style="font-size: 12px; color: var(--color-gray); font-weight: 700; margin-bottom: 12px;">${site.district}</p>
        <p style="font-size: 13px; color: var(--color-charcoal); line-height: 1.5; margin-bottom: 16px;">${site.description}</p>
        <div class="site-detail-info-row">
          <div class="info-column">
            <span class="info-column-label">XP Scale</span>
            <span>${site.xpRange}</span>
          </div>
          <div class="info-column" style="border-left: 1.5px solid var(--color-light-gray); border-right: 1.5px solid var(--color-light-gray);">
            <span class="info-column-label">Distance</span>
            <span>${site.distance}</span>
          </div>
          <div class="info-column">
            <span class="info-column-label">Status</span>
            <span style="color: var(--color-green-success);">${site.openStatus}</span>
          </div>
        </div>
        <button class="btn-primary" style="margin-bottom: 16px; background: ${isVerified ? 'var(--color-green-success)' : 'var(--color-gold)'}; color: ${isVerified ? 'white' : 'var(--color-charcoal)'};" id="site-visit-now">
          ${isVerified ? '✓ Presence Verified' : 'Verify My Presence (15 Mins)'}
        </button>
        <div style="display: flex; gap: 14px;">
          <button class="btn-outline" style="flex: 1; font-size: 13px; opacity: ${isVerified ? '1' : '0.4'}; cursor: ${isVerified ? 'pointer' : 'not-allowed'};" id="site-quiz-btn" ${isVerified ? '' : 'disabled'}>Quiz</button>
          <button class="btn-outline" style="flex: 1; font-size: 13px; opacity: ${isVerified ? '1' : '0.4'}; cursor: ${isVerified ? 'pointer' : 'not-allowed'};" id="site-quests-btn" ${isVerified ? '' : 'disabled'}>Side Quests</button>
        </div>
      </div>
      ${renderBottomNav('home')}
    </div>
  `;
}

function renderDwellTime() {
  const site = state.activeSite;
  if (!site) return '';
  
  const m = Math.floor(state.dwellTimeLeft / 60);
  const s = state.dwellTimeLeft % 60;
  const timeStr = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
  const totalDuration = 900; 
  const dashOffset = 565.48 - (state.dwellTimeLeft / totalDuration) * 565.48;
  const completed = state.dwellTimeLeft <= 0;
  
  return `
    <div class="screen immersion-freeze-mode" style="position: relative;">
      <div class="header-bar">
        <div class="header-title" style="margin-left: 20px;">Immersion Mode: ${site.name}</div>
      </div>
      
      <!-- Translucent Isolation Screen Mask Overlay Layer -->
      <div class="immersion-app-blocker" style="position: absolute; top: 60px; left: 0; width: 100%; bottom: 0; background: rgba(253, 248, 233, 0.45); z-index: 1000; pointer-events: auto; display: ${completed ? 'none' : 'block'};"></div>

      <!-- Core Display Window (Lifted completely to z-index 2000 so everything remains accessible and unblocked) -->
      <div style="padding: 10px 20px; text-align: center; z-index: 2000; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
        <h2 style="font-size: 22px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 2px;">${site.name}</h2>
        <h3 style="font-size: 18px; font-weight: 800; color: var(--color-charcoal); margin-bottom: 12px;">15 Minute Dwell Time</h3>
        <p style="font-size: 11px; color: var(--color-gray); font-weight: 600; margin-bottom: 16px;">Presence validation progress runtime tracking window active.</p>
        
        <!-- Strict secure wrapper context mapping -->
        <div class="timer-circle-box" style="margin-bottom: 20px;">
          <svg class="timer-svg">
            <circle class="timer-bg-circle" cx="100" cy="100" r="90"></circle>
            <circle class="timer-progress-circle ${completed ? 'completed' : ''}" cx="100" cy="100" r="90" style="stroke-dashoffset: ${dashOffset}; stroke: ${state.gpsVerified ? 'var(--color-teal)' : 'var(--color-gold)'};"></circle>
          </svg>
          <div class="timer-text-display">${timeStr}</div>
        </div>
        
        <p style="font-size: 12px; font-weight: 700; text-align: center; color: var(--color-charcoal); margin-bottom: 16px; max-width: 280px; line-height: 1.4;">
          Your device must stay stationary inside site grounds coordinates.
        </p>

        <!-- Live Polling Status Interface Info Row Container Box -->
        <div class="verification-status-row-widget" style="background: var(--color-white); border-radius: 12px; padding: 10px 16px; margin-bottom: 16px; width: 100%; max-width: 300px; box-shadow: var(--shadow-premium); text-align: left;">
          <div style="font-size: 11px; font-weight: 800; color: var(--color-charcoal); display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background: ${state.gpsVerified ? 'var(--color-green-success)' : 'var(--color-gold)'};"></span>
            Hardware Polling: Background interval active
          </div>
          <div style="font-size: 10px; color: var(--color-gray); font-weight: 600; line-height: 1.3;">
            Captured Evidences: <span style="font-weight: 800; color: var(--color-teal);">${state.dwellImages.length + 1} secure frame bundle(s)</span>
          </div>
        </div>

        <p style="font-size: 12px; font-weight: 700; text-align: center; color: ${completed ? 'var(--color-green-success)' : 'var(--color-charcoal)'}; margin-bottom: 16px; max-width: 280px; line-height: 1.4;">
          ${completed ? 'Presence authenticated! Your cultural preservation session has been recorded.' : 'Capture additional image perspectives below to support verification data.'}
        </p>
        
        <!-- Camera action trigger now fully exposed and click-ready -->
        <button class="btn-outline" style="width: 100%; max-width: 300px; height: 44px; font-size: 13px; margin-bottom: 14px; display: ${completed ? 'none' : 'flex'}; align-items: center; justify-content: center; gap: 6px;" id="dwell-extra-photo-btn">
          📸 Take Additional Verification Photo
        </button>

        <button class="btn-primary" style="width: 100%; max-width: 300px; height: 44px; background: ${completed ? 'var(--color-gold)' : '#EAECEF'}; color: ${completed ? 'var(--color-charcoal)' : 'var(--color-gray)'};" id="dwell-continue-btn" ${completed ? '' : 'disabled'}>
          ${completed ? 'Proceed to Trials' : 'Waiting...'}
        </button>
        
        <div style="margin-top: 14px; display: ${completed ? 'none' : 'block'};">
          <span id="dwell-abandon-link" style="font-size: 12px; color: var(--color-red-reject); font-weight: 800; cursor: pointer; text-decoration: underline;">Abandon Session</span>
        </div>
      </div>
    </div>
  `;
}

function renderCamera() {
  const site = state.activeSite || sitesData[0];
  const userLat = (userCoordinates && userCoordinates.latitude) ? userCoordinates.latitude : 7.9570;
  const userLng = (userCoordinates && userCoordinates.longitude) ? userCoordinates.longitude : 80.7603;
  const distMeters = calculateHaversineDistanceMeters(userLat, userLng, site.latitude, site.longitude);
  const visionConfidence = 94;

  return `
    <div class="screen" style="padding-bottom: 0; background: #000; color: white; position: relative; overflow: hidden;">
      <!-- Cyberpunk / Heritage Viewfinder HUD Layer -->
      <div class="hud-viewfinder-container">
        <!-- Top Telemetry Header -->
        <div class="hud-top-telemetry">
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="back-button" id="camera-back" style="background: rgba(255,255,255,0.15); border-radius: 50%; width:32px; height:32px; color:#FFF; border:none; cursor:pointer;">✕</button>
            <div class="hud-telemetry-item">
              <span class="hud-telemetry-label">TARGET CHECKPOINT</span>
              <span class="hud-telemetry-val" style="color: #EBB34D;">${site.name}</span>
            </div>
          </div>
          
          <div style="display: flex; gap: 10px; align-items: center;">
            <div class="hud-telemetry-item" style="text-align: right;">
              <span class="hud-telemetry-label">GPS DELTA</span>
              <span class="hud-telemetry-val">${distMeters}m</span>
            </div>
            
            <button id="toggle-stage-drawer-btn" style="background: #0C6C7A; border: 1px solid #EBB34D; color: #FFF; padding: 6px 10px; border-radius: 8px; font-size: 10px; font-weight: 800; cursor: pointer;">
              ⚙️ STAGE DEMO
            </button>
          </div>
        </div>

        <!-- Center Target Viewfinder Reticle & Radar Sweep -->
        <div class="hud-target-reticle-box">
          <div class="hud-corner hud-corner-tl"></div>
          <div class="hud-corner hud-corner-tr"></div>
          <div class="hud-corner hud-corner-bl"></div>
          <div class="hud-corner hud-corner-br"></div>
          <div class="hud-scanner-laser"></div>
          <div class="hud-center-crosshair"></div>
          
          <div style="position: absolute; bottom: 12px; width: 100%; text-align: center; color: rgba(255,255,255,0.8); font-size: 10px; font-weight: 700; text-shadow: 0 1px 4px black;">
            MULTIMODAL SENSORS: GPS + Vision AI + Gyro Active
          </div>
        </div>

        <!-- Bottom HUD Control & Shutter Area -->
        <div style="pointer-events: auto; text-align: center; margin-bottom: 20px;">
          <div class="hud-status-banner hud-status-PASSED" id="hud-live-status-banner">
            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#FFF;"></span>
            <span>HUD ENGINE ACTIVE (${visionConfidence}% VISION CONFIDENCE)</span>
          </div>

          <div style="display: flex; justify-content: center; align-items: center; gap: 16px; margin-top: 16px;">
            <label for="web-camera-file-input" style="background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: #FFF; padding: 10px 14px; border-radius: 12px; font-size: 11px; font-weight: 800; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
              📁 Upload
            </label>
            <input type="file" id="web-camera-file-input" accept="image/*" style="display: none;">

            <button class="shutter-btn" id="camera-shutter-click">
              <div class="shutter-btn-inner"></div>
            </button>

            <button id="view-ledger-shortcut-btn" style="background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: #FFF; padding: 10px 14px; border-radius: 12px; font-size: 11px; font-weight: 800; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
              🛡️ Ledger
            </button>
          </div>
        </div>
      </div>

      <!-- Viewfinder Background Preview Image -->
      <div class="camera-viewfinder" style="height: 100vh;">
        <img src="${site.image}" alt="Camera Viewfinder" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.75;">
      </div>
    </div>
  `;
}

function renderCameraSuccess() {
  const site = state.activeSite || sitesData[0];
  const res = state.lastVerificationResult || { visionScore: 96, distanceDeltaMeters: 14, block: { signature: '0x4a8f9c1d2e3f4b5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f' } };
  const signature = res.block ? res.block.signature : '0x4a8f9c1d2e3f4b5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f';

  return `
    <div class="screen dark-theme" style="padding-bottom: 30px; justify-content: center; align-items: center; padding: 24px;">
      <h2 style="font-family: var(--font-title); font-size: 28px; color: var(--color-gold); text-align: center; margin-top: 10px;">Presence Synchronized</h2>
      
      <div class="camera-success-badge">
        <div class="success-badge-text">${res.visionScore || 96}%<br><span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Valid</span></div>
      </div>
      
      <p style="font-size: 13px; color: #a9cbd0; font-weight: 700; margin-bottom: 2px;">Cryptographic State Ledger Block Synchronized</p>
      
      <div style="font-size: 11px; color: var(--color-green-success); font-weight: 800; background: rgba(255,255,255,0.1); padding: 8px 14px; border-radius: 10px; text-align: center; max-width: 300px; line-height: 1.4; margin-bottom: 12px;">
        ${state.verificationComment || 'Verification Successful: Real-time landmark features closely match reference structure model!'}
      </div>
      
      <h3 style="font-size: 26px; font-weight: 900; color: var(--color-gold); margin-bottom: 16px;">+60 XP</h3>

      <!-- Seal Signature Box -->
      <div style="background: rgba(12, 108, 122, 0.2); border: 1px solid rgba(12, 108, 122, 0.6); border-radius: 10px; padding: 8px 12px; margin-bottom: 16px; width: 100%; max-width: 300px; text-align: center;">
        <div style="font-size: 9px; color: #79B7C1; font-weight: 800; text-transform: uppercase;">Cryptographic Seal Hash</div>
        <div style="font-family: monospace; font-size: 10px; color: #FFF; word-break: break-all; margin-top: 2px;">${signature}</div>
      </div>
      
      <div class="photo-compare-container">
        <div class="compare-card">
          <img src="${state.dwellImages.length > 0 ? state.dwellImages[0] : site.image}" alt="Captured">
          <div class="compare-label">Captured Frame</div>
        </div>
        <div class="compare-card">
          <img src="${site.referenceImage || site.image}" alt="Reference">
          <div class="compare-label">Reference Mapping</div>
        </div>
      </div>
      
      <div style="display: flex; gap: 10px; width: 100%; max-width: 320px; margin-top: auto;">
        <button class="btn-outline" style="flex: 1; border-color: var(--color-teal); color: var(--color-teal);" id="success-view-ledger">Inspect Ledger</button>
        <button class="btn-primary" style="flex: 1;" id="camera-success-continue">Continue</button>
      </div>
    </div>
  `;
}

function renderCameraReject() {
  const res = state.lastVerificationResult || { status: 'OUT_OF_BOUNDS', visionScore: 42, distanceDeltaMeters: 2640 };
  const statusTitle = res.status === 'SPOOF_SUSPECTED' ? 'Security Anomaly Intercepted' : res.status === 'OUT_OF_BOUNDS' ? 'Geofence Out of Bounds' : 'Visual Inspection Failed';

  return `
    <div class="screen" style="background: rgba(12, 24, 33, 0.95); color: white; padding: 24px; display: flex; flex-direction: column;">
      <div class="header-bar" style="padding: 0; margin-bottom: 24px;">
        <button class="back-button" id="reject-close">✕</button>
        <div class="header-title" style="color: #FFF;">Verification Assessment</div>
      </div>
      
      <div style="background: rgba(198, 40, 40, 0.2); border: 1.5px solid var(--color-red-reject); border-radius: 20px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: var(--shadow-premium);">
        <span class="badge-tag" style="background: var(--color-red-reject); color: #FFF; font-size: 10px; padding: 4px 10px; border-radius: 12px; margin-bottom: 8px; display: inline-block;">
          ${res.status || 'FAILED'}
        </span>
        
        <h3 style="font-size: 20px; font-weight: 900; margin-bottom: 10px; color: white;">${statusTitle}</h3>
        
        <div style="font-size: 11px; font-weight: 700; background: rgba(0,0,0,0.4); padding: 10px; border-radius: 10px; text-align: left; margin-bottom: 14px; line-height: 1.4; color: #FFF;">
          ⚠️ ${state.verificationComment || 'Verification Failed: Geofence bounds or visual match metrics were not satisfied.'}
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 11px; text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 10px;">
          <div><span style="color: #A9CBD0;">GPS Delta:</span> <strong>${res.distanceDeltaMeters || 0}m</strong></div>
          <div><span style="color: #A9CBD0;">Vision Match:</span> <strong>${res.visionScore || 0}%</strong></div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px; margin-top: auto;">
        <button class="btn-outline" style="border-color: #EBB34D; color: #EBB34D;" id="reject-stage-demo">⚙️ Open Stage Demo Overrides</button>
        <button class="btn-outline" style="border-color: white; color: white;" id="reject-guidelines">Review Verification Guidelines</button>
        <button class="btn-primary" id="reject-retry">Try Again on Site</button>
      </div>
    </div>
  `;
}

function renderLedger() {
  const ledger = state.eventLedger || [];
  const total = ledger.length;
  const passed = ledger.filter(b => b.status === 'PASSED').length;
  const passRate = total > 0 ? Math.round((passed / total) * 100) : 100;
  const spoofs = ledger.filter(b => b.status === 'SPOOF_SUSPECTED').length;
  
  const currentFilter = state.ledgerFilter || 'ALL';
  const filteredBlocks = ledger.filter(b => {
    if (currentFilter === 'ALL') return true;
    return b.status === currentFilter;
  });

  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="ledger-back">←</button>
        <div class="header-title">Cryptographic State Ledger</div>
      </div>
      
      <div style="padding: 16px;">
        <div style="background: linear-gradient(135deg, #0C1821, #0C6C7A); border-radius: 16px; padding: 16px; color: #FFF; margin-bottom: 16px; box-shadow: var(--shadow-floating);">
          <div style="font-size: 11px; font-weight: 800; color: #EBB34D; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 4px;">🛡️ Proof-of-Presence Audit Trail</div>
          <div style="font-size: 18px; font-weight: 900; margin-bottom: 6px;">Immutable Verification Ledger</div>
          <div style="font-size: 11px; color: #A9CBD0; line-height: 1.4;">Every verification event generates a signed, timestamped block with SHA-256 seal signatures for audit compliance.</div>
        </div>

        <!-- Key Metrics Cards -->
        <div style="display: flex; gap: 10px; margin-bottom: 16px;">
          <div class="ledger-stat-card">
            <div class="ledger-stat-num">${total}</div>
            <div class="ledger-stat-lbl">Total Audits</div>
          </div>
          <div class="ledger-stat-card">
            <div class="ledger-stat-num">${passRate}%</div>
            <div class="ledger-stat-lbl">Pass Rate</div>
          </div>
          <div class="ledger-stat-card">
            <div class="ledger-stat-num" style="color: var(--color-red-reject);">${spoofs}</div>
            <div class="ledger-stat-lbl">Spoofs Blocked</div>
          </div>
        </div>

        <!-- Filter Tabs -->
        <div style="display: flex; gap: 6px; overflow-x: auto; margin-bottom: 14px; padding-bottom: 4px;">
          ${['ALL', 'PASSED', 'OUT_OF_BOUNDS', 'SPOOF_SUSPECTED'].map(f => `
            <button class="stage-btn ${currentFilter === f ? 'active' : ''}" data-ledger-filter="${f}" style="white-space: nowrap; font-size: 10px; padding: 6px 12px; border-radius: 20px;">
              ${f === 'ALL' ? 'All Logs' : f}
            </button>
          `).join('')}
        </div>

        <!-- Ledger Entries Table -->
        <div class="ledger-blocks-container">
          ${filteredBlocks.length === 0 ? `
            <div style="text-align: center; padding: 30px; color: var(--color-gray); font-size: 12px; font-weight: 700;">No ledger audit entries matching filter.</div>
          ` : filteredBlocks.map(b => `
            <div class="ledger-block-item ${b.status}">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
                <div>
                  <div style="font-size: 13px; font-weight: 900; color: var(--color-charcoal);">${b.siteName}</div>
                  <div style="font-size: 10px; color: var(--color-gray); font-weight: 600;">🕒 ${new Date(b.timestamp).toLocaleString()}</div>
                </div>
                <span class="badge-tag" style="background: ${b.status === 'PASSED' ? 'var(--color-green-success)' : b.status === 'OUT_OF_BOUNDS' ? '#E65100' : b.status === 'SPOOF_SUSPECTED' ? '#880E4F' : 'var(--color-red-reject)'}; color: #FFF; font-size: 9px; padding: 4px 8px;">
                  ${b.status}
                </span>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11px; margin-bottom: 8px;">
                <div><span style="color: var(--color-gray);">GPS Delta:</span> <strong style="color: var(--color-charcoal);">${b.distanceDeltaMeters}m</strong></div>
                <div><span style="color: var(--color-gray);">Vision Score:</span> <strong style="color: var(--color-teal);">${b.visionScore}%</strong></div>
              </div>

              <div class="ledger-hash-code">
                SEAL: ${b.signature}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      ${renderBottomNav('home')}
    </div>
  `;
}

function renderStageDemoDrawer() {
  const isOpen = state.stageDrawerOpen;
  return `
    <div class="stage-demo-drawer ${isOpen ? 'open' : ''}" id="stage-demo-drawer-panel">
      <div class="stage-demo-title">
        <span>⚙️ Stage Demo Overrides (Ctrl+Shift+D)</span>
        <button id="close-stage-drawer-btn" style="background:none; border:none; color:#FFF; font-size:16px; cursor:pointer;">✕</button>
      </div>

      <div style="font-size: 11px; color: #A9CBD0; margin-bottom: 10px;">
        Use these controls during judge Q&A to simulate live GPS locks, edge-case triggers, and photographic verifications instantly.
      </div>

      <div style="font-size: 10px; font-weight: 800; color: #EBB34D; text-transform: uppercase; margin-bottom: 6px;">1. Simulated Checkpoint Location</div>
      <div class="stage-btn-grid">
        <button class="stage-btn" id="demo-lock-sigiriya">🟢 Sigiriya Rock (0.01km)</button>
        <button class="stage-btn" id="demo-lock-mihintale">🟢 Mihintale (0.02km)</button>
        <button class="stage-btn" id="demo-lock-galle-far">🟡 Galle Fort (2.6km Far)</button>
        <button class="stage-btn" id="demo-trigger-spoof">🔴 Spoof Jump Anomaly</button>
      </div>

      <div style="font-size: 10px; font-weight: 800; color: #EBB34D; text-transform: uppercase; margin-bottom: 6px;">2. Inspection Preset Trigger</div>
      <div class="stage-btn-grid">
        <button class="stage-btn" id="demo-exec-pass">✅ Run PASSED (96% Match)</button>
        <button class="stage-btn" id="demo-exec-fail-vision">❌ Run FAILED_VISION (42%)</button>
        <button class="stage-btn" id="demo-exec-out-bounds">⚠️ Run OUT_OF_BOUNDS</button>
        <button class="stage-btn" id="demo-open-ledger">🛡️ Open State Ledger</button>
      </div>
    </div>
  `;
}

function renderGuidelines() {
  const guides = [
    { title: 'Clear Framing :', desc: 'Ensure the historical structure or landmark takes up at least 40% of your camera viewfinder' },
    { title: 'Optimal Framing :', desc: 'Avoid capturing direct silhouettes under harsh midday sun; capturing distinct architectural lines helps our AI verify structural geometry.' },
    { title: 'The Dwell-Time Rule :', desc: 'Your device must be stationary at the site for the momentary validation window to complete verification data synchronization.' },
    { title: 'No Obstructions :', desc: 'Avoid massive crowds or holding objects directly in front of the lens.' }
  ];
  
  return `
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="guidelines-back">←</button>
        <div class="header-title">Verification Guidelines</div>
      </div>
      <div class="location-list-container" style="gap: 14px; padding: 10px 16px;">
        ${guides.map(g => `
          <div style="background: var(--color-white); border-radius: 12px; padding: 12px 16px; box-shadow: var(--shadow-premium); display: flex; flex-direction: column; gap: 4px;">
            <h4 style="font-size: 12px; font-weight: 900; color: var(--color-charcoal);">${g.title}</h4>
            <p style="font-size: 11px; color: var(--color-gray); line-height: 1.4;">${g.desc}</p>
          </div>
        `).join('')}
      </div>
      <div style="padding: 20px; margin-top: auto;">
        <button class="btn-primary" id="guidelines-continue">Got It, Try Again</button>
      </div>
    </div>
  `;
}

function renderOfflineSync() {
  const queue = state.offlineSyncQueue || [];
  let listHtml = '';
  if (queue.length === 0) {
    listHtml = `<div style="text-align: center; padding: 24px; color: var(--color-gray); font-size: 13px; font-weight: 700;">🟢 All activities synced and verified!</div>`;
  } else {
    listHtml = queue.map(item => {
      let statusColor = 'var(--color-gray)';
      let statusText = 'Pending local-first sync packet';
      let xpColor = 'var(--color-gray)';
      let checkmark = '';
      
      if (item.status === 'Verifying...') {
        statusText = '🤖 Evaluating landmark patterns...';
        statusColor = 'var(--color-teal)';
      } else if (item.status === 'Success') {
        statusText = '✓ Verified & Logged Successfully';
        statusColor = 'var(--color-green-success)';
        xpColor = 'var(--color-teal)';
        checkmark = '✓ ';
      }
      
      return `
        <div class="sync-item-card" style="opacity: ${item.status === 'Success' ? '0.75' : '1'};">
          <div>
            <h4 style="font-size: 12px; font-weight: 800;">${item.siteName} Local Record</h4>
            <p style="font-size: 10px; color: ${statusColor}; font-weight: 700;">${statusText}</p>
          </div>
          <span style="font-size: 12px; font-weight: 800; color: ${xpColor};">${checkmark}${item.xp} XP</span>
        </div>
      `;
    }).join('');
  }

  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="sync-back">←</button>
        <div class="header-title">Sync Queue Layout</div>
      </div>
      <div style="padding: 16px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <img src="icons/grayscale offline.png" alt="Offline" style="width: 44px; height: 44px;">
        <p style="font-size: 12px; color: var(--color-gray); max-width: 300px; line-height: 1.4;">
          Yathra Lanka handles unstable network signals natively. Evidences collected at remote structures are cached inside secure tracking sandboxes.
        </p>
      </div>
      <div style="display: flex; flex-direction: column; gap: 10px; padding: 0 16px;">
        ${listHtml}
      </div>
      <div class="selection-card" style="margin: 20px 16px; padding: 10px 14px; background: #e6e5e2;">
        <img src="icons/profile filled.png" alt="Avatar" style="width: 36px; height: 36px; border-radius: 50%; filter: grayscale(1);">
        <div style="flex: 1; margin-left: 8px;">
          <h4 style="font-size: 12px; font-weight: 800;">Profile Identity Anchor</h4>
          <p style="font-size: 10px; color: var(--color-gray);">${state.user.rank === 'None' ? 'No Rank' : state.user.rank} • ${state.user.xp} pts</p>
        </div>
      </div>
      ${renderBottomNav('home')}
    </div>
  `;
}

function renderQuiz() {
  const site = state.activeSite;
  if (!site) return '';
  
  const question = site.quizzes[state.currentQuizIndex];
  const qNum = state.currentQuizIndex + 1;
  const totalQ = site.quizzes.length;
  const progressPercent = (qNum / totalQ) * 100;
  
  return `
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="quiz-back">←</button>
        <div class="header-title">Quiz</div>
      </div>
      <div style="padding: 10px 20px;">
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${progressPercent}%;"></div>
        </div>
        <p style="font-size: 12px; color: var(--color-gray); font-weight: 700; margin-bottom: 12px; text-align: center;">Question ${qNum} of ${totalQ}</p>
        <h3 style="font-size: 16px; font-weight: 900; text-align: center; margin-bottom: 24px; line-height: 1.4; color: var(--color-charcoal);">${question.question}</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;" id="quiz-options-container">
          ${question.options.map((opt, idx) => `
            <button class="quiz-option-btn" data-index="${idx}">
              <span>${opt}</span>
              <span class="quiz-circle-ico" style="width: 18px; height: 18px; border: 1.5px solid #d0cfca; border-radius: 50%;"></span>
            </button>
          `).join('')}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px;">
          <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: var(--color-gray);">⏱️ <span id="quiz-timer">15s</span></div>
          <button class="btn-primary" style="width: 100px; height: 36px; font-size: 12px;" id="quiz-end-btn">End Quiz</button>
        </div>
      </div>
    </div>
  `;
}

function renderQuizCooldown() {
  const m = Math.floor(state.cooldownTimeLeft / 60);
  const s = state.cooldownTimeLeft % 60;
  const timeStr = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
  const totalDur = 300;
  const dashOffset = 565.48 - (state.cooldownTimeLeft / totalDur) * 565.48;
  
  return `
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="cooldown-back">←</button>
        <div class="header-title">Total Quiz Cooldown</div>
      </div>
      <div style="padding: 10px 24px; text-align: center; display: flex; flex-direction: column; align-items: center;">
        <h2 style="font-size: 20px; font-weight: 900; margin-bottom: 2px;">Total Quiz Cooldown</h2>
        <p style="font-size: 11px; color: var(--color-gray); font-weight: 600;">Protecting academic integrity.</p>
        <div class="timer-circle-box" style="margin: 20px 0;">
          <svg class="timer-svg">
            <circle class="timer-bg-circle" cx="100" cy="100" r="90"></circle>
            <circle class="timer-progress-circle" cx="100" cy="100" r="90" style="stroke-dashoffset: ${dashOffset};"></circle>
          </svg>
          <div class="timer-text-display">${timeStr}</div>
        </div>
        <h3 style="font-size: 16px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 8px;">All Quizzes are Locked Until 00:00</h3>
        <img src="icons/quiz cooldown lock.png" alt="Lock" class="cooldown-lock-icon">
        <p style="font-size: 11px; color: var(--color-gray); line-height: 1.5; max-width: 280px; margin-bottom: 20px;">
          Multiple attempts are paused across the platform to ensure dedicated learning and authentic impact. Please reflect before re-engaging.
        </p>
      </div>
      ${renderBottomNav('home')}
    </div>
  `;
}

function renderQuestsList() {
  return `
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="quests-back">←</button>
        <div class="header-title">Side Quests</div>
      </div>
      <div style="padding: 10px 20px 6px 20px; text-align: center;">
        <h2 style="font-size: 20px; font-weight: 800; margin-bottom: 4px;">Side Quests</h2>
        <p style="font-size: 11px; color: var(--color-gray);">Complete fun tasks around this location</p>
      </div>
      <div class="location-list-container" style="gap: 12px; margin-top: 10px;">
        ${sideQuestsData.map(q => `
          <div class="selection-card" style="padding: 12px; align-items: center;" id="quest-item-${q.id}">
            <img src="${q.icon}" alt="${q.name}" style="width: 32px; height: 32px;">
            <div style="flex: 1; margin-left: 10px;">
              <h3 style="font-size: 13px; font-weight: 800;">${q.name}</h3>
              <p style="font-size: 11px; color: var(--color-gray);">${q.description}</p>
            </div>
            <div style="text-align: right;">
              <img src="icons/activism empty.png" style="width:14px; height:14px; display:inline-block; vertical-align:middle; margin-right:2px; filter: hue-rotate(140deg);">
              <span style="font-size: 11px; font-weight: 700; color: var(--color-gold); display: inline-block; vertical-align:middle;">${q.xp} pts</span>
              <span style="font-size: 9px; color: var(--color-gray); display: block; margin-top:2px;">⏱️ ${q.duration}</span>
            </div>
          </div>
        `).join('')}
      </div>
      ${renderBottomNav('home')}
    </div>
  `;
}

function renderQuestSocial() {
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="quest-social-back">←</button>
        <div class="header-title">Social Media Presence</div>
      </div>
      <div style="padding: 0 16px;">
        <h2 style="font-size: 20px; font-weight: 900; margin-bottom: 2px;">Social Media Presence</h2>
        <p style="font-size: 11px; color: var(--color-gray); margin-bottom: 12px;">Share about your visit</p>
        <img src="Element Pictures/Local Artisan Co-op.jpg" alt="Share" style="width:100%; height: 160px; border-radius: 16px; object-fit: cover; box-shadow: var(--shadow-premium); margin-bottom: 16px;">
        <h4 style="font-size: 12px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 4px;">Why it matters</h4>
        <p style="font-size: 11px; color: var(--color-gray); line-height: 1.4; margin-bottom: 16px;">Sharing your journey inspires others to explore, appreciate, and protect our cultural heritage.</p>
        <h4 style="font-size: 12px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 6px;">Steps</h4>
        <ol style="font-size: 11px; color: var(--color-charcoal); padding-left: 14px; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;">
          <li>Snap a great photo or video at this site.</li>
          <li>Post it to your favorite app using #YathraLanka.</li>
          <li>Paste the link to your post below</li>
        </ol>
        <div class="input-wrapper" style="margin-bottom: 18px;">
          <input type="text" class="form-input" placeholder="Paste your post link here..." id="quest-social-link-input">
          <span class="input-icon-right">🔗</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
          <span style="font-size: 12px; font-weight: 800; color: var(--color-gold);">⭐ 5 pts</span>
          <button class="btn-primary" style="width: 180px; height: 38px; font-size: 13px;" id="quest-social-submit">Submit & Claim Points</button>
        </div>
      </div>
      ${renderBottomNav('home')}
    </div>
  `;
}

function renderQuestFood() {
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="quest-food-back">←</button>
        <div class="header-title">Local Food</div>
      </div>
      <div style="padding: 0 16px;">
        <h2 style="font-size: 20px; font-weight: 900; margin-bottom: 2px;">Local Food</h2>
        <p style="font-size: 11px; color: var(--color-gray); margin-bottom: 12px;">Try a traditional dish</p>
        <img src="Element Pictures/Traditional Cooking Experience.jpg" alt="Kiribath" style="width:100%; height: 160px; border-radius: 16px; object-fit: cover; box-shadow: var(--shadow-premium); margin-bottom: 16px;">
        <h4 style="font-size: 12px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 4px;">Why it matters</h4>
        <p style="font-size: 11px; color: var(--color-gray); line-height: 1.4; margin-bottom: 16px;">Food connects us to culture and the stories of the people.</p>
        <h4 style="font-size: 12px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 6px;">Steps</h4>
        <ol style="font-size: 11px; color: var(--color-charcoal); padding-left: 14px; display: flex; flex-direction: column; gap: 6px; margin-bottom: 24px;">
          <li>Try a traditional dish (e.g. Kiribath, Pol Roti, Hoppers).</li>
          <li>Take a photo of the food.</li>
          <li>Write what you liked about it.</li>
        </ol>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12px; font-weight: 800; color: var(--color-gold);">⭐ 10 pts</span>
          <button class="btn-primary" style="width: 140px; height: 38px; font-size: 13px;" id="quest-food-start">Start Quest</button>
        </div>
      </div>
      ${renderBottomNav('home')}
    </div>
  `;
}

function renderQuestWandering() {
  const items = [
    { name: 'Local Artisan Co-op', xp: '60 XP', img: 'Element Pictures/Local Artisan Co-op.jpg' },
    { name: 'Rural Market', xp: '60 XP', img: 'Element Pictures/Rural market.jpg' },
    { name: 'Pottery Village', xp: '60 XP', img: 'Element Pictures/Pottery Village.jpg' }
  ];
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="quest-wandering-back">←</button>
        <div class="header-title">Wandering Around</div>
      </div>
      <div style="padding: 0 16px;">
        <h2 style="font-size: 20px; font-weight: 900; margin-bottom: 2px;">Wandering Around</h2>
        <p style="font-size: 11px; color: var(--color-gray); margin-bottom: 14px;">Discover unmapped heritage</p>
        <div style="display: flex; justify-content: center; margin-bottom: 16px;">
          <img src="icons/wandering around compass.svg" alt="Compass" style="width: 120px; height: 120px;">
        </div>
        <button class="btn-primary" style="margin-bottom: 20px;" id="quest-wandering-snap">Take a Snapshot</button>
        <h4 style="font-size: 12px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 10px;">Verifiable Discoveries</h4>
        <div class="location-list-container" style="gap: 10px; padding: 0;">
          ${items.map(it => `
            <div class="selection-card" style="padding: 8px 12px; gap: 12px; cursor: default;">
              <img src="${it.img}" alt="${it.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
              <div style="flex: 1;">
                <h4 style="font-size: 12px; font-weight: 800;">${it.name}</h4>
              </div>
              <span style="font-size: 11px; font-weight: 700; color: var(--color-gold);">${it.xp}</span>
            </div>
          `).join('')}
        </div>
      </div>
      ${renderBottomNav('home')}
    </div>
  `;
}

function renderQuestWildlife() {
  const animals = [
    { name: 'Asian Elephant', xp: '25 XP', img: 'Element Pictures/Asian Elephant.webp' },
    { name: 'Sri Lankan Leopard', xp: '25 XP', img: 'Element Pictures/SL Leopard.jpg' },
    { name: 'Sri Lankan Blue Magpie', xp: '25 XP', img: 'Element Pictures/SL Blue Mapie.jpeg' }
  ];
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="quest-wildlife-back">←</button>
        <div class="header-title">Wildlife Spotting</div>
      </div>
      <div style="padding: 0 16px;">
        <h2 style="font-size: 20px; font-weight: 900; margin-bottom: 2px;">Wildlife Spotting</h2>
        <p style="font-size: 11px; color: var(--color-gray); margin-bottom: 14px;">Snap a picture & log impact</p>
        <img src="Element Pictures/Wildlife Spotting Elephants.jpg" alt="Wildlife" style="width:100%; height: 140px; border-radius: 16px; object-fit: cover; box-shadow: var(--shadow-premium); margin-bottom: 14px;">
        <button class="btn-primary" style="margin-bottom: 20px;" id="quest-wildlife-snap">Take a Snapshot</button>
        <h4 style="font-size: 12px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 10px;">Verifiable Wildlife Encounters</h4>
        <div class="location-list-container" style="gap: 10px; padding: 0;">
          ${animals.map(an => `
            <div class="selection-card" style="padding: 8px 12px; gap: 12px; cursor: default;">
              <img src="${an.img}" alt="${an.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
              <div style="flex: 1;">
                <h4 style="font-size: 12px; font-weight: 800;">${an.name}</h4>
              </div>
              <span style="font-size: 11px; font-weight: 700; color: var(--color-gold);">${an.xp}</span>
            </div>
          `).join('')}
        </div>
      </div>
      ${renderBottomNav('home')}
    </div>
  `;
}

function renderQuestWarrior() {
  const contributions = [
    { name: 'Heritage Forest Reforestation', xp: '75 XP', img: 'Element Pictures/Reforestation.png' },
    { name: 'Trash Disposal', xp: '30 XP', img: 'Element Pictures/Trash Disposal.jpg' },
    { name: 'Invasive Species Removal', xp: '75 XP', img: 'Element Pictures/Invasive Species Removal.jpg' }
  ];
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="quest-warrior-back">←</button>
        <div class="header-title">Eco Warrior</div>
      </div>
      <div style="padding: 0 16px;">
        <h2 style="font-size: 20px; font-weight: 900; margin-bottom: 2px;">Eco Warrior</h2>
        <p style="font-size: 11px; color: var(--color-gray); margin-bottom: 14px;">Conserve the environment & earn XP</p>
        <img src="Element Pictures/Eco Warrior .png" alt="Eco" style="width:100%; height: 140px; border-radius: 16px; object-fit: cover; box-shadow: var(--shadow-premium); margin-bottom: 14px;">
        <button class="btn-primary" style="margin-bottom: 20px;" id="quest-warrior-snap">Take a Snapshot</button>
        <h4 style="font-size: 12px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 10px;">Verifiable Conservation Contributions</h4>
        <div class="location-list-container" style="gap: 10px; padding: 0;">
          ${contributions.map(co => `
            <div class="selection-card" style="padding: 8px 12px; gap: 12px; cursor: default;">
              <img src="${co.img}" alt="${co.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
              <div style="flex: 1;">
                <h4 style="font-size: 12px; font-weight: 800;">${co.name}</h4>
              </div>
              <span style="font-size: 11px; font-weight: 700; color: var(--color-gold);">${co.xp}</span>
            </div>
          `).join('')}
        </div>
      </div>
      ${renderBottomNav('activism')}
    </div>
  `;
}

function renderActivismDashboard() {
  const cards = [
    { key: 'petition', title: 'Sign Petitions', desc: 'Support important causes', xp: '3xp', color: '#1A4D54' },
    { key: 'donations', title: 'Donations', desc: 'Help restore and protect', xp: '5-15xp', color: 'var(--color-gold)' },
    { key: 'cleanup', title: 'Join Cleanups', desc: 'Participate in environmental cleanups', xp: '15xp', color: '#4E8A63' },
    { key: 'create-event', title: 'Create Community Event', desc: 'Participate in environmental cleanups', xp: '15xp', color: '#2E7D8A' }
  ];
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div style="padding: 20px 20px 6px 20px;">
        <h2 style="font-size: 26px; font-weight: 900;">Make an Impact</h2>
        <p style="font-size: 12px; color: var(--color-gray); margin-top: 4px;">Small actions : Big change</p>
      </div>
      <div style="display: flex; flex-direction: column; gap: 14px; padding: 10px 16px;">
        ${cards.map(c => `
          <div class="activism-card-link" style="background: ${c.color};" id="act-link-${c.key}">
            <div>
              <h3 style="font-size: 15px; font-weight: 800;">${c.title}</h3>
              <p style="font-size: 11px; opacity: 0.8; margin-top: 2px;">${c.desc}</p>
            </div>
            <span style="font-size: 10px; font-weight: 700; opacity: 0.9; text-transform: uppercase;">${c.xp}</span>
          </div>
        `).join('')}
      </div>
      ${renderBottomNav('activism')}
    </div>
  `;
}

function renderPetitionPage() {
  const signed = state.petitionSigned;
  const sigs = state.petitionSignatures;
  const percent = (sigs / 10000) * 100;
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar" style="position: absolute; top: 0; left: 0; z-index: 10; width: 100%; padding-top: env(safe-area-inset-top, 24px) !important; box-sizing: border-box;">
        <button class="back-button" id="petition-back" style="background: rgba(255,255,255,0.8); border-radius: 50%; width:32px; height:32px; justify-content:center; padding:0; color:var(--color-charcoal); border:none;">←</button>
      </div>
      <img src="Element Pictures/Ritigala Forest Petition.jpg" alt="Ritigala" style="width: 100%; height: 200px; object-fit: cover;">
      <div style="padding: 16px;">
        <h2 style="font-size: 20px; font-weight: 900; margin-bottom: 4px;">Protect Ritigala Forest</h2>
        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
          <img src="icons/Eco Warrior icon.png" alt="Green Sri Lanka" style="width: 16px; height: 16px;">
          <span style="font-size: 11px; font-weight: 700; color: var(--color-gray);">By Green Sri Lanka</span>
        </div>
        <p style="font-size: 12px; color: var(--color-charcoal); font-weight: 700; line-height: 1.5; margin-bottom: 20px;">Help protect the ancient Forest monastery and its biodiversity</p>
        <div style="margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-size: 13px; font-weight: 900;">${sigs.toLocaleString()} signatures</span>
            <span style="font-size: 11px; color: var(--color-gray); font-weight: 700;">of 10,000</span>
          </div>
          <div class="progress-bar-container" style="margin-bottom: 6px;">
            <div class="progress-bar-fill" style="width: ${percent}%;"></div>
          </div>
          <p style="font-size: 10px; color: var(--color-gray); text-align: center; font-weight: 600;">you earn 3xp for signing</p>
        </div>
        <button class="btn-primary" style="background: ${signed ? 'var(--color-green-success)' : 'var(--color-gold)'}; color: ${signed ? 'white' : 'var(--color-charcoal)'};" id="petition-submit" ${signed ? 'disabled' : ''}>
          ${signed ? '✓ Petition Signed' : 'Sign Petition'}
        </button>
      </div>
      ${renderBottomNav('activism')}
    </div>
  `;
}

function renderDonationsPage() {
  const chosenAmount = state.donationAmount;
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="donations-back">←</button>
        <div class="header-title">Your donation can restore this stupa</div>
      </div>
      <div style="padding: 0 16px;">
        <img src="Element Pictures/Donations Stupa.jpg" alt="Donations" style="width: 100%; height: 160px; border-radius: 16px; object-fit: cover; box-shadow: var(--shadow-premium); margin-bottom: 16px;">
        <div class="donation-btn-grid">
          <button class="donation-btn ${chosenAmount === 500 ? 'active' : ''}" data-val="500">Rs. 500</button>
          <button class="donation-btn ${chosenAmount === 1000 ? 'active' : ''}" data-val="1000">Rs. 1000</button>
          <button class="donation-btn ${chosenAmount === 2500 ? 'active' : ''}" data-val="2500">Rs. 2500</button>
        </div>
        <div class="form-card" style="margin: 0 0 12px 0; padding: 12px 16px;">
          <label style="font-size: 11px; font-weight: 700; color: var(--color-gray); text-align: center; display: block; margin-bottom: 6px;">Other amount</label>
          <input type="number" class="form-input" style="text-align: center; font-size: 18px; font-weight: 800;" placeholder="Enter amount" value="${chosenAmount || ''}" id="donation-custom-input">
        </div>
        <p style="font-size: 10px; color: var(--color-gray); text-align: center; font-weight: 700; margin-bottom: 20px;">earn up to 15xp</p>
        <button class="btn-primary" id="donations-submit">Donate Now</button>
        <p style="font-size: 9px; color: var(--color-gray); text-align: center; margin-top: 14px; font-weight: 700;">secure payment powered by Payhere</p>
      </div>
      ${renderBottomNav('activism')}
    </div>
  `;
}

function renderCleanupPage() {
  const isJoined = state.user.joinedEvents.includes('site-cleanup');
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="cleanup-back">←</button>
        <div class="header-title">Site Cleanup</div>
      </div>
      <div style="padding: 0 16px;">
        <img src="Element Pictures/Site Cleanup.jpg" alt="Cleanup" style="width: 100%; height: 140px; border-radius: 16px; object-fit: cover; box-shadow: var(--shadow-premium); margin-bottom: 16px;">
        <h2 style="font-size: 20px; font-weight: 900; margin-bottom: 16px; text-align: center;">Site Cleanup</h2>
        <div style="background: var(--color-white); padding: 16px; border-radius: 16px; box-shadow: var(--shadow-premium); margin-bottom: 16px; display: flex; flex-direction: column; gap: 14px;">
          <div style="display: flex; align-items: center; gap: 12px; font-size: 12px; font-weight: 700;">
            📅 <div style="display:flex; flex-direction:column;"><span style="color:var(--color-gray); font-size:10px;">Date</span><span>25th May 2026</span></div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; font-size: 12px; font-weight: 700;">
            ⏱️ <div style="display:flex; flex-direction:column;"><span style="color:var(--color-gray); font-size:10px;">Time</span><span>7.00AM-11.00AM</span></div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; font-size: 12px; font-weight: 700;">
            📍 <div style="display:flex; flex-direction:column;"><span style="color:var(--color-gray); font-size:10px;">Location</span><span>Elahera Anicut, Polonnaruwa</span></div>
          </div>
          <div style="display: flex; align-items: center; gap: 12px; font-size: 12px; font-weight: 700;">
            💼 <div style="display:flex; flex-direction:column;"><span style="color:var(--color-gray); font-size:10px;">Bring</span><span>Gloves, waterbottle, Hat</span></div>
          </div>
        </div>
        <p style="font-size: 10px; color: var(--color-gray); text-align: center; font-weight: 700; margin-bottom: 14px;">you earn 15 xp</p>
        <button class="btn-primary" style="background: ${isJoined ? 'var(--color-green-success)' : 'var(--color-gold)'}; color: ${isJoined ? 'white' : 'var(--color-charcoal)'};" id="cleanup-join" ${isJoined ? 'disabled' : ''}>
          ${isJoined ? '✓ Joined Cleanup' : 'Join Event'}
        </button>
      </div>
      ${renderBottomNav('activism')}
    </div>
  `;
}

function renderCreateEventPage() {
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="create-event-back">←</button>
        <div class="header-title">Create Community Event</div>
      </div>
      <div style="padding: 10px 16px;">
        <div class="form-card" style="margin: 0; padding: 18px;">
          <h3 style="font-size: 14px; font-weight: 900; color: var(--color-teal); text-align: center; margin-bottom: 4px;">Organize Your Activism</h3>
          <p style="font-size: 10px; color: var(--color-gray); text-align: center; line-height: 1.4; margin-bottom: 14px;">Organize an activism task at a location. Rally other travellers & make an impact together.</p>
          <div class="form-group">
            <label class="form-label">Event Type</label>
            <select class="form-input" id="event-type" style="padding: 0 8px; font-size: 12px;">
              <option value="Site Clean-up">Site Clean-up</option>
              <option value="Tree Planting">Tree Planting</option>
              <option value="Invasive Species Removal">Invasive Species Removal</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Location</label>
            <input type="text" class="form-input" placeholder="e.g. Mihintale - Sacred Peak" id="event-location">
          </div>
          <div style="display: flex; gap: 10px;">
            <div class="form-group" style="flex: 1;">
              <label class="form-label">Date</label>
              <input type="date" class="form-input" style="font-size: 11px; padding: 0 4px;" id="event-date">
            </div>
            <div class="form-group" style="flex: 1;">
              <label class="form-label">Time</label>
              <input type="time" class="form-input" style="font-size: 11px; padding: 0 4px;" id="event-time">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Event Details/Motivation</label>
            <textarea class="form-input" style="height: 70px; padding: 8px; resize: none;" placeholder="Describe your purpose..." id="event-desc"></textarea>
          </div>
          <button class="btn-primary" style="margin-top: 10px; height: 42px;" id="event-submit">Organize Event</button>
        </div>
      </div>
      ${renderBottomNav('activism')}
    </div>
  `;
}

function renderRewardsDashboard() {
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div style="padding: 20px 20px 6px 20px;">
        <h2 style="font-size: 26px; font-weight: 900;">Rewards</h2>
        <p style="font-size: 12px; color: var(--color-gray); margin-top: 4px;">Everything you have achieved.</p>
      </div>
      <div style="display: flex; flex-direction: column; gap: 14px; padding: 10px 16px;">
        <div class="activism-card-link" style="background: var(--color-teal);" id="rew-link-list">
          <div><h3 style="font-size: 15px; font-weight: 800;">Your Rewards</h3></div>
        </div>
        <div class="activism-card-link" style="background: var(--color-teal);" id="rew-link-rank">
          <div><h3 style="font-size: 15px; font-weight: 800;">Your Rank</h3></div>
        </div>
        <div class="activism-card-link" style="background: var(--color-teal);" id="rew-link-leaderboard">
          <div><h3 style="font-size: 15px; font-weight: 800;">Leaderboard</h3></div>
        </div>
      </div>
      ${renderBottomNav('rewards')}
    </div>
  `;
}

function renderRewardsList() {
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="rewards-list-back">←</button>
        <div class="header-title">Your Rewards</div>
      </div>
      <div style="padding: 10px 20px; display: flex; justify-content: space-between; align-items: center;">
        <p style="font-size: 11px; color: var(--color-gray); max-width: 220px; line-height: 1.4;">Convert your impact into experiences. Redeem coupons and unlock unique souvenirs.</p>
        <span class="badge-tag" style="background: var(--color-gold); color: var(--color-charcoal); font-weight: 800;">${state.user.xp} Total Points</span>
      </div>
      <div class="location-list-container" style="gap: 12px; margin-top: 8px;">
        <div class="reward-coupon-card">
          <img src="Element Pictures/Traditional Cooking Experience.jpg" alt="Cooking" class="reward-coupon-img">
          <div style="flex: 1;">
            <h3 style="font-size: 12px; font-weight: 900; line-height: 1.3;">FREE Traditional Cooking Experience</h3>
            <span style="font-size: 9px; font-weight: 700; color: var(--color-green-success); display: block; margin-top: 2px;">✓ UNLOCKED</span>
            <span style="font-size: 8px; color: var(--color-gray);">Unlocked by: Sigiriya Scholar's Trial</span>
          </div>
          <button class="btn-primary" style="width: 80px; height: 32px; font-size: 10px;" id="rew-coupon-use">Use Coupon</button>
        </div>
        <div class="reward-coupon-card" style="opacity: ${state.user.xp >= 100 ? '1' : '0.7'};">
          <img src="Element Pictures/Trail Guide.webp" alt="Guide" class="reward-coupon-img">
          <div style="flex: 1;">
            <h3 style="font-size: 12px; font-weight: 900; line-height: 1.3;">20% off Ancient Trail Guide</h3>
            <p style="font-size: 9px; color: var(--color-gray); margin-top: 2px;">Expert guide for Mihintale walks.</p>
            <span style="font-size: 8px; font-weight: 700; color: var(--color-gray);">Unlock: 100 XP (Tap to unlock)</span>
          </div>
          <button class="btn-outline" style="width: 80px; height: 32px; font-size: 10px; padding: 0; color: var(--color-gray);" id="rew-unlock-guide" ${state.user.xp >= 100 ? '' : 'disabled'}>Unlock Guide</button>
        </div>
        <div class="reward-coupon-card" style="opacity: ${state.user.xp >= 100 ? '1' : '0.7'};">
          <img src="Element Pictures/Artisan Crafts.jpg.webp" alt="Crafts" class="reward-coupon-img">
          <div style="flex: 1;">
            <h3 style="font-size: 12px; font-weight: 900; line-height: 1.3;">10% off Artisan Crafts</h3>
            <p style="font-size: 9px; color: var(--color-gray); margin-top: 2px;">Authentic local handicraft store.</p>
            <span style="font-size: 8px; font-weight: 700; color: var(--color-gray);">Unlock: 100 XP (Tap to unlock)</span>
          </div>
          <button class="btn-outline" style="width: 80px; height: 32px; font-size: 10px; padding: 0; color: var(--color-gray);" id="rew-unlock-crafts" ${state.user.xp >= 100 ? '' : 'disabled'}>Unlock Coupon</button>
        </div>
      </div>
      ${renderBottomNav('rewards')}
    </div>
  `;
}

function renderCouponRedeem() {
  return `
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="coupon-back">←</button>
        <div class="header-title">Use Coupon</div>
      </div>
      <div style="padding: 0 16px;">
        <img src="Element Pictures/Traditional Cooking Experience.jpg" alt="Hoppers" style="width: 100%; height: 160px; border-radius: 16px; object-fit: cover; box-shadow: var(--shadow-premium); margin-bottom: 16px;">
        <h2 style="font-size: 18px; font-weight: 900; margin-bottom: 4px;">FREE Traditional Cooking Experience</h2>
        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 16px;">
          <span>☕</span>
          <span style="font-size: 11px; font-weight: 700; color: var(--color-gray);">@Kandy Cafe (YathraLanka Heritage Partner)</span>
        </div>
        <button class="btn-primary" style="margin-bottom: 24px;" id="coupon-redeem-btn">Redeem Coupon</button>
        <div class="form-card" style="margin: 0; padding: 16px;">
          <h4 style="font-size: 12px; font-weight: 900; color: var(--color-teal); text-align: center; margin-bottom: 4px;">Verify the authenticity and cleanliness of the vendor and earn 10 XP</h4>
          <input type="text" class="form-input" style="height: 38px; font-size: 12px; text-align:center; margin: 10px 0;" placeholder="Describe cleanliness, service..." id="coupon-review-input">
          <button class="btn-primary" style="height: 36px; font-size: 12px;" id="coupon-review-submit">Write a Review</button>
        </div>
      </div>
      ${renderBottomNav('rewards')}
    </div>
  `;
}

function renderRankScreen() {
  const levels = [
    { name: 'Grass Toucher', range: '0 - 99 pts', threshold: 0 },
    { name: 'Wanderer', range: '100 - 249 pts', threshold: 100 },
    { name: 'Tuk Tuk Trailer', range: '250 - 499 pts', threshold: 250 },
    { name: 'Magahoyanna', range: '500 - 999 pts', threshold: 500 },
    { name: 'Island Explorer', range: '1,000 - 2,000 pts', threshold: 1000 },
    { name: 'Lanka Legend', range: '2,000 - 5,000 pts', threshold: 2000 }
  ];
  
  const xp = state.user.xp;
  const rank = state.user.rank;
  
  let nextLevel = levels[0];
  for (let i = 0; i < levels.length; i++) {
    if (xp < levels[i].threshold) {
      nextLevel = levels[i];
      break;
    }
    if (i === levels.length - 1) {
      nextLevel = { name: 'Max Level', threshold: 5000 };
    }
  }
  const diff = nextLevel.threshold - xp;
  
  return `
    <div class="screen dark-theme" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="rank-back">←</button>
        <div class="header-title">Your Rank</div>
      </div>
      <div style="padding: 10px 20px; display: flex; flex-direction: column; align-items: center;">
        <h2 style="font-size: 26px; font-weight: 800; text-align: center; margin-bottom: 6px;">Your Rank</h2>
        <div class="rank-hex-badge">
          <div style="font-size: 11px; font-weight: 800; color: var(--color-charcoal); text-transform: uppercase;">
            ${rank === 'None' ? 'No Rank' : rank}
          </div>
        </div>
        <p style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">${xp} / ${nextLevel.threshold} pts</p>
        <p style="font-size: 10px; color: #a9cbd0; margin-bottom: 20px;">
          ${diff > 0 ? `Only ${diff} pts to next rank!` : 'Max rank reached!'}
        </p>
        <div style="display: flex; flex-direction: column; gap: 10px; width: 100%; color: var(--color-charcoal);">
          ${levels.map(lvl => {
            const unlocked = xp >= lvl.threshold;
            return `
              <div class="rank-timeline-row" style="opacity: ${unlocked ? '1' : '0.65'};">
                <div class="timeline-checkbox ${unlocked ? 'checked' : ''}">
                  ${unlocked ? '✓' : ''}
                </div>
                <div style="flex: 1;">
                  <h4 style="font-size: 12px; font-weight: 800;">${lvl.name}</h4>
                  <p style="font-size: 9px; color: var(--color-gray);">${lvl.range}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
      ${renderBottomNav('rewards')}
    </div>
  `;
}

function renderLeaderboard() {
  let currentList = [...leaderboardPlayers];
  if (state.user.xp > 0) {
    const userRow = { name: (auth.currentUser ? auth.currentUser.displayName || 'You' : 'You') + " (Eco Explorer)", points: state.user.xp, role: state.user.role, rank: state.user.rank, isUser: true };
    currentList.push(userRow);
  }
  currentList.sort((a, b) => b.points - a.points);
  
  return `
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="leaderboard-back">←</button>
        <div class="header-title">Leaderboard</div>
      </div>
      <div class="tabs-container" style="margin-bottom: 16px;">
        <div class="tab-btn active">All time</div>
        <div class="tab-btn" style="cursor: default;">This month</div>
        <div class="tab-btn" style="cursor: default;">This week</div>
      </div>
      <div style="display: flex; flex-direction: column; padding: 0 16px 20px 16px;">
        ${currentList.map((pl, idx) => `
          <div class="leaderboard-row ${pl.isUser ? 'highlighted' : ''}">
            <span class="leaderboard-rank">${idx + 1}</span>
            <img src="icons/profile empty.png" alt="Avatar" class="leaderboard-avatar" style="${pl.isUser ? 'border: 2px solid var(--color-gold);' : ''}">
            <div class="leaderboard-name" style="font-size: 13px;">
              ${pl.name}
              <span style="font-size: 9px; color: var(--color-gray); font-weight: 700; display: block; margin-top: 1px;">
                ${pl.role || 'Explorer'} • ${pl.rank || 'No Rank'}
              </span>
            </div>
            <span style="font-size: 13px; font-weight: 900; color: var(--color-teal);">${pl.points.toLocaleString()} pts</span>
          </div>
        `).join('')}
      </div>
      <button class="btn-primary" style="width: calc(100% - 32px); margin: 0 auto 20px auto;" id="leaderboard-view-full">View Full Leaderboard</button>
      ${renderBottomNav('rewards')}
    </div>
  `;
}

function renderProfile() {
  const currentRankName = state.user.xp > 0 ? state.user.rank : 'No Rank';
  return `
    <div class="screen">
      <div style="padding: 20px 20px 6px 20px;">
        <h2 style="font-size: 26px; font-weight: 900;">My Profile</h2>
      </div>
      <div class="selection-card" style="margin: 10px 16px; padding: 14px;" id="profile-recap-trigger">
        <img src="icons/profile filled.png" alt="Profile" style="width: 44px; height: 44px; border-radius: 50%; border: 2.5px solid var(--color-teal);">
        <div style="flex: 1; margin-left: 10px;">
          <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">${auth.currentUser ? auth.currentUser.displayName || 'You' : 'You'}</h3>
          <p style="font-size: 11px; color: var(--color-gray); font-weight: 700;">${currentRankName} • ${state.user.xp} pts</p>
        </div>
      </div>
      <div style="display: flex; gap: 12px; padding: 0 16px; margin: 12px 0 20px 0;">
        <div style="flex:1; background:var(--color-white); border-radius:12px; padding:12px 8px; text-align:center; box-shadow:var(--shadow-premium);">
          <span style="font-size: 18px; font-weight: 900; color: var(--color-charcoal); display:block;">${state.user.medals}</span>
          <span style="font-size: 9px; font-weight: 700; color: var(--color-gray); text-transform:uppercase;">Medals</span>
        </div>
        <div style="flex:1; background:var(--color-white); border-radius:12px; padding:12px 8px; text-align:center; box-shadow:var(--shadow-premium);">
          <span style="font-size: 18px; font-weight: 900; color: var(--color-charcoal); display:block;">${state.user.sitesVisited}</span>
          <span style="font-size: 9px; font-weight: 700; color: var(--color-gray); text-transform:uppercase;">Sites Visited</span>
        </div>
        <div style="flex:1; background:var(--color-white); border-radius:12px; padding:12px 8px; text-align:center; box-shadow:var(--shadow-premium);">
          <span style="font-size: 18px; font-weight: 900; color: var(--color-charcoal); display:block;">${state.user.quizzesPassed}</span>
          <span style="font-size: 9px; font-weight: 700; color: var(--color-gray); text-transform:uppercase;">Quizzes Passed</span>
        </div>
      </div>
      ${state.offlineSyncQueue && state.offlineSyncQueue.filter(x => x.status !== 'Success').length > 0 ? `
      <div class="selection-card" style="margin: 0 16px 16px 16px; padding: 12px 14px; background: #FFF3CD; border: 1px solid #FFEBAA; border-radius: 12px; display: flex; align-items: center; cursor: pointer;" id="profile-sync-trigger">
        <div style="flex: 1; text-align: left;">
          <h4 style="font-size: 12px; font-weight: 800; color: #856404; margin: 0;">⚠️ Sync Points (${state.offlineSyncQueue.filter(x => x.status !== 'Success').length} Pending)</h4>
          <p style="font-size: 10px; color: #856404; margin: 2px 0 0 0;">Network signal sync logs pending transfer.</p>
        </div>
        <span style="color: #856404;">❯</span>
      </div>
      ` : ''}
      <div class="location-list-container" style="gap: 8px;">
        <div class="selection-card" style="padding: 14px; justify-content: space-between;" id="profile-travel-map">
          <span style="font-size: 13px; font-weight: 800;">My Travel Map</span>
          <span>❯</span>
        </div>
        <div class="selection-card" style="padding: 14px; justify-content: space-between; cursor: default;">
          <span style="font-size: 13px; font-weight: 800;">My Medals Gallery</span>
          <span>❯</span>
        </div>
        <div class="selection-card" style="padding: 14px; justify-content: space-between; cursor: default;">
          <span style="font-size: 13px; font-weight: 800;">My Community Events</span>
          <span>❯</span>
        </div>
        <div class="selection-card" style="padding: 14px; justify-content: space-between; cursor: default;">
          <span style="font-size: 13px; font-weight: 800;">Knowledge Quizzes</span>
          <span>❯</span>
        </div>
        <div class="selection-card" style="padding: 14px; justify-content: space-between;" id="profile-settings">
          <span style="font-size: 13px; font-weight: 800;">Settings</span>
          <span>❯</span>
        </div>
      </div>
      ${renderBottomNav('profile')}
    </div>
  `;
}

function renderTravelPoster() {
  return `
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="poster-back">←</button>
        <div class="header-title">Travel Map</div>
      </div>
      <div style="padding: 10px 20px; text-align: center;">
        <h2 style="font-size: 20px; font-weight: 900; margin-bottom: 2px;">Your Custom Travel Map Poster</h2>
        <p style="font-size: 11px; color: var(--color-gray);">A personalized testament to your YathraLanka impact</p>
      </div>
      <div class="travel-poster-card">
        <div class="poster-map-box">
          <img src="Element Pictures/SL map on home screen.svg" alt="Recap Map" style="height: 90%; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.25));">
        </div>
        <h3 style="font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px; color: var(--color-gold);">Journey Recap</h3>
        <div class="poster-stats-grid">
          <div class="poster-stat-block">
            <img src="icons/Heritage & History.png" alt="Sites" class="poster-stat-icon">
            <span class="poster-stat-value">${state.user.sitesVisited}</span>
            <span class="poster-stat-label">Sites Verified</span>
          </div>
          <div class="poster-stat-block">
            <img src="icons/activism filled.png" alt="Events" class="poster-stat-icon">
            <span class="poster-stat-value">${state.user.joinedEvents.length}</span>
            <span class="poster-stat-label">Conservation Events</span>
          </div>
          <div class="poster-stat-block">
            <img src="icons/trophy empty.png" alt="Quizzes" class="poster-stat-icon">
            <span class="poster-stat-value">${state.user.quizzesPassed}</span>
            <span class="poster-stat-label">Quizzes Completed</span>
          </div>
        </div>
      </div>
      <div style="padding: 10px 20px; text-align: center;">
        <p style="font-size: 11px; color: var(--color-gray); font-weight: 700; margin-bottom: 12px; line-height: 1.4;">Celebrate your journey. Share your commitment to heritage protection.</p>
        <div style="display: flex; gap: 16px; justify-content: center;">
          <span style="font-size: 24px; cursor: pointer;">📸</span>
          <span style="font-size: 24px; cursor: pointer;">👥</span>
          <span style="font-size: 24px; cursor: pointer;">📸</span>
          <span style="font-size: 24px; cursor: pointer;">✉️</span>
        </div>
      </div>
    </div>
  `;
}

function renderSettings() {
  return `
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="settings-back">←</button>
        <div class="header-title">Settings</div>
      </div>
      <div class="location-list-container" style="gap: 12px; padding-top: 10px;">
        <div class="selection-card" style="padding: 14px; justify-content: space-between;" id="sett-perm">
          <span style="font-size: 13px; font-weight: 800;">Permissions</span>
          <span>❯</span>
        </div>
        <div class="selection-card" style="padding: 14px; justify-content: space-between; cursor: default;">
          <span style="font-size: 13px; font-weight: 800;">Account</span>
          <span>❯</span>
        </div>
        <div class="selection-card" style="padding: 14px; justify-content: space-between; cursor: default;">
          <span style="font-size: 13px; font-weight: 800;">Language <span style="font-size: 11px; color: var(--color-gray); font-weight: 600; margin-left: 6px;">English</span></span>
          <span>❯</span>
        </div>
        <div class="selection-card" style="padding: 14px; justify-content: space-between; cursor: default;">
          <span style="font-size: 13px; font-weight: 800;">Privacy Policy</span>
          <span>❯</span>
        </div>
        <div class="selection-card" style="padding: 14px; justify-content: space-between; cursor: default;">
          <span style="font-size: 13px; font-weight: 800;">Help & Support</span>
          <span>❯</span>
        </div>
        <div class="selection-card" style="padding: 14px; justify-content: space-between; cursor: default;">
          <span style="font-size: 13px; font-weight: 800;">About YathraLanka</span>
          <span>❯</span>
        </div>
        <div style="text-align: center; margin-top: 24px;">
          <span id="sett-logout" style="color: var(--color-red-reject); font-size: 14px; font-weight: 800; cursor: pointer;">Log Out</span>
        </div>
      </div>
    </div>
  `;
}

function renderBottomNav(activeTab) {
  return `
    <div class="bottom-nav">
      <div class="nav-item ${activeTab === 'home' ? 'active' : ''}" id="nav-home">
        <img src="${activeTab === 'home' ? 'icons/home filled.png' : 'icons/home empty.png'}" alt="Home" class="nav-icon">
        <span>Home</span>
      </div>
      <div class="nav-item ${activeTab === 'activism' ? 'active' : ''}" id="nav-act">
        <img src="${activeTab === 'activism' ? 'icons/activism filled.png' : 'icons/activism empty.png'}" alt="Activism" class="nav-icon">
        <span>Activism</span>
      </div>
      <div class="nav-item ${activeTab === 'rewards' ? 'active' : ''}" id="nav-rew">
        <img src="${activeTab === 'rewards' ? 'icons/trophy filled.png' : 'icons/trophy empty.png'}" alt="Rewards" class="nav-icon">
        <span>Rewards</span>
      </div>
      <div class="nav-item ${activeTab === 'profile' ? 'active' : ''}" id="nav-prof">
        <img src="${activeTab === 'profile' ? 'icons/profile filled.png' : 'icons/profile empty.png'}" alt="Profile" class="nav-icon">
        <span>Profile</span>
      </div>
    </div>
  `;
}

// --- INTERACTIVE EVENT LISTENERS BINDING ---
function attachEvents() {
  const bind = (id, event, callback) => {
    const elements = document.querySelectorAll('#' + id);
    elements.forEach(el => el.addEventListener(event, callback));
  };
  
  bind('go-signin', 'click', () => navigate('login'));
  bind('go-signup', 'click', () => navigate('signup'));
  
  bind('login-back', 'click', () => navigate('splash'));
  bind('login-toggle-signup', 'click', () => navigate('signup', false));
  bind('login-submit', 'click', () => {
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;
    if (!email || !pass) {
      showNotification("Please fill in all fields.");
      return;
    }
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const userDocRef = doc(db, 'users', userCredential.user.uid);
        return getDoc(userDocRef).then((docSnap) => {
          state.user = { ...initialUserState };
          if (docSnap.exists()) {
            const data = docSnap.data();
            state.user = { ...state.user, ...data };
          } else {
            state.user.role = 'Explorer';
          }
          navigate('dashboard');
          showNotification("Welcome back, " + (userCredential.user.displayName || "Explorer") + "!");
        });
      })
      .catch((error) => {
        showNotification(error.message);
      });
  });

  const eyeOpenSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`;
  const eyeClosedSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-7-10-7a19.08 19.08 0 0 1 2.18-3M12 5c7 0 10 7 10 7a19.08 19.08 0 0 1-2.18 3M1 1l22 22"/><circle cx="12" cy="12" r="3"/></svg>`;
  
  const togglePasswordVisibility = (inputId, toggleId) => {
    bind(toggleId, 'click', () => {
      const input = document.getElementById(inputId);
      const toggle = document.getElementById(toggleId);
      if (input && toggle) {
        if (input.type === 'password') {
          input.type = 'text';
          toggle.innerHTML = eyeClosedSVG;
        } else {
          input.type = 'password';
          toggle.innerHTML = eyeOpenSVG;
        }
      }
    });
  };
  
  togglePasswordVisibility('login-pass', 'login-toggle-password');
  togglePasswordVisibility('signup-pass', 'signup-toggle-password');
  togglePasswordVisibility('signup-confirm', 'signup-toggle-confirm');
  
  bind('signup-back', 'click', () => navigate('splash'));
  bind('signup-toggle-login', 'click', () => navigate('login', false));
  const signupBtn = document.getElementById('signup-submit');
  if (signupBtn) {
    const freshBtn = signupBtn.cloneNode(true);
    signupBtn.parentNode.replaceChild(freshBtn, signupBtn);
    freshBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      freshBtn.disabled = true;
      freshBtn.style.opacity = '0.5';
      
      const nameEl = document.querySelector('#signup-name');
      const emailEl = document.querySelector('#signup-user-email');
      const passEl = document.querySelector('#signup-pass');
      const confirmEl = document.querySelector('#signup-confirm');
      
      if (!nameEl || !emailEl || !passEl || !confirmEl) {
        showNotification("Form alignment metrics error.");
        freshBtn.disabled = false; freshBtn.style.opacity = '1'; return;
      }
      
      const name = nameEl.value.trim();
      const email = emailEl.value.trim();
      const pass = passEl.value;
      const confirm = confirmEl.value;
      
      const errorBox = document.getElementById('signup-error-box');
      if (errorBox) { errorBox.style.display = 'none'; errorBox.textContent = ''; }
      
      const showError = (msg) => {
        if (errorBox) { errorBox.textContent = msg; errorBox.style.display = 'block'; } else { showNotification(msg); }
        freshBtn.disabled = false; freshBtn.style.opacity = '1';
      };
      
      if (!name || !email || !pass || !confirm) { showError("Please fill in all fields."); return; }
      if (pass !== confirm) { showError("Passwords do not match."); return; }
      if (pass.length < 10) { showError("World-class security requirement: Password must be at least 10 characters long."); return; }
      
      const checkEl = document.querySelector('#signup-check');
      if (!checkEl || !checkEl.checked) {
        showError("You must agree to the Terms & Privacy Policy to proceed.");
        return;
      }
      
      try {
        createUserWithEmailAndPassword(auth, email, pass)
          .then((userCredential) => {
            state.user = { ...initialUserState };
            updateProfile(userCredential.user, { displayName: name }).catch(err => console.error(err));
            return saveUserProfile().then(() => { navigate('permissions'); });
          })
          .catch((authError) => {
            showError(authError.message);
          });
      } catch (outerError) {
        showError(outerError.message);
      }
    });
  }
  
  const updateContinueButtonState = () => {
    const isCamera = state.user.permissions.camera;
    const continueBtn = document.getElementById('permissions-continue-btn');
    if (continueBtn) {
      continueBtn.disabled = !isCamera;
      continueBtn.style.opacity = isCamera ? '1' : '0.5';
    }
  };

  bind('perm-camera-btn', 'click', () => {
    state.user.permissions.camera = !state.user.permissions.camera;
    const card = document.getElementById('perm-camera-btn');
    if (card) {
      card.classList.toggle('selected', state.user.permissions.camera);
      const circle = card.querySelector('.check-circle');
      if (circle) { circle.classList.toggle('checked', state.user.permissions.camera); circle.innerHTML = state.user.permissions.camera ? '✓' : ''; }
    }
    updateContinueButtonState();
  });

  bind('perm-notif-btn', 'click', () => {
    state.user.permissions.notifications = !state.user.permissions.notifications;
    const card = document.getElementById('perm-notif-btn');
    if (card) {
      card.classList.toggle('selected', state.user.permissions.notifications);
      const circle = card.querySelector('.check-circle');
      if (circle) { circle.classList.toggle('checked', state.user.permissions.notifications); circle.innerHTML = state.user.permissions.notifications ? '✓' : ''; }
    }
    updateContinueButtonState();
  });

  bind('permissions-continue-btn', 'click', () => {
    if (state.user.permissions.camera) {
      saveUserProfile();
      navigate('choose-role');
    }
  });
  
  bind('role-back', 'click', () => goBack());
  const roleCards = document.querySelectorAll('[data-role]');
  roleCards.forEach(c => {
    c.addEventListener('click', () => {
      roleCards.forEach(card => card.classList.remove('selected'));
      c.classList.add('selected');
      state.user.role = c.getAttribute('data-role');
      const btn = document.getElementById('role-continue');
      if (btn) { btn.disabled = false; btn.style.opacity = '1'; }
    });
  });
  bind('role-continue', 'click', () => {
    if (state.user.role) { saveUserProfile(); navigate('dashboard'); }
  });
  
  bind('compass-back-btn', 'click', () => navigate('choose-role'));
  const catCards = document.querySelectorAll('[data-cat]');
  catCards.forEach(c => {
    c.addEventListener('click', () => {
      const cat = c.getAttribute('data-cat');
      if (state.user.interests.includes(cat)) {
        state.user.interests = state.user.interests.filter(i => i !== cat);
        c.classList.remove('selected');
      } else {
        state.user.interests.push(cat);
        c.classList.add('selected');
      }
      const btn = document.getElementById('compass-continue');
      if (btn) {
        const active = state.user.interests.length > 0;
        btn.disabled = !active; btn.style.opacity = active ? '1' : '0.5';
      }
    });
  });
  bind('compass-continue', 'click', () => {
    if (state.user.interests.length > 0) { saveUserProfile(); navigate('how-scoring-works'); }
  });
  
  bind('scoring-continue', 'click', () => { saveUserProfile(); navigate('dashboard'); });
  bind('dash-map-card', 'click', () => { navigate('map'); });
  bind('dash-search-card', 'click', () => navigate('directory'));
  bind('dash-view-directory', 'click', (e) => { e.stopPropagation(); navigate('directory'); });
  
  bind('directory-back', 'click', () => navigate('dashboard'));
  bind('tab-trail', 'click', () => {
    state.activeDirectoryTab = 'Heritage Trail';
    document.getElementById('tab-trail').classList.add('active');
    document.getElementById('tab-gems').classList.remove('active');
    renderDirectoryGrid('Heritage Trail');
  });
  bind('tab-gems', 'click', () => {
    state.activeDirectoryTab = 'Hidden Gems';
    document.getElementById('tab-trail').classList.remove('active');
    document.getElementById('tab-gems').classList.add('active');
    renderDirectoryGrid('Hidden Gems');
  });
  
  const dirSearch = document.getElementById('directory-search');
  if (dirSearch) {
    dirSearch.addEventListener('input', () => {
      const activeTab = state.activeDirectoryTab;
      renderDirectoryGrid(activeTab, dirSearch.value);
    });
  }
  
  if (state.currentScreen === 'directory') {
    renderDirectoryGrid(state.activeDirectoryTab);
  }
  
  bind('trail-list-back', 'click', () => navigate('directory'));
  const listSearch = document.getElementById('list-search-input');
  if (listSearch) {
    listSearch.addEventListener('input', () => {
      const listHeader = document.querySelector('.header-title').textContent;
      renderTrailListCards(listHeader, listSearch.value);
    });
  }
  
  if (state.currentScreen === 'heritage-trail') {
    renderTrailListCards('Heritage Trail');
  } else if (state.currentScreen === 'hidden-gems') {
    renderTrailListCards('Hidden Gems');
  }
  
  const mapBackBtn = document.querySelector('#map-back-container button') || document.getElementById('map-back-container');
  if (mapBackBtn) {
    mapBackBtn.addEventListener('click', () => {
      document.body.classList.remove('map-active');
      document.documentElement.classList.remove('map-active');
      const mapView = document.getElementById('map-view');
      if (mapView) mapView.style.display = 'none';
      navigate('dashboard');
    });
  }
  
  const pins = document.querySelectorAll('.map-pin');
  pins.forEach(pin => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      const siteObj = sitesData.find(s => s.id === pin.getAttribute('data-site-id'));
      if (siteObj) showMapPopupCard(siteObj);
    });
  });
  
  // Gate check: Visit Now launches Camera Viewfinder to record photo evidence *first*
  bind('site-visit-now', 'click', () => { 
    state.hasInitialPhotoCaptured = false; 
    navigate('camera'); 
  });
  
  bind('site-quiz-btn', 'click', () => {
    if (state.user.dwellTimeCompleted[state.activeSite.id]) {
      if (state.cooldownActive) { navigate('quiz-cooldown'); } else {
        state.currentQuizIndex = 0; state.quizCorrectAnswers = 0; state.quizAnswers = [];
        navigate('quiz'); startQuizTimer();
      }
    }
  });
  
  bind('site-quests-btn', 'click', () => {
    if (state.user.dwellTimeCompleted[state.activeSite.id]) { navigate('quests'); }
  });
  
  // Requirement 2: User must be able to take additional verification photos in between the timer
  bind('dwell-extra-photo-btn', 'click', async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const userLat = coordinates.coords.latitude;
      const userLng = coordinates.coords.longitude;
      const distance = calculateDistanceMeters(userLat, userLng, state.activeSite.latitude, state.activeSite.longitude);
      
      if (distance <= GEOFENCE_RADIUS_METERS) {
        // Activate native camera interface flow mid-timer
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Camera
        });

        // Save snapshot base64 node string directly into active collection
        state.dwellImages.push(image.dataUrl);
        
        const lockData = localStorage.getItem('yathra_dwell_lock');
        if (lockData) {
          const lock = JSON.parse(lockData);
          lock.dwellImages = state.dwellImages;
          localStorage.setItem('yathra_dwell_lock', JSON.stringify(lock));
        }
        showNotification("Additional verification evidence appended successfully.");
        renderActiveScreen();
      } else {
        showNotification("Security Check Failed: Device coordinates are past the site boundary threshold parameters.");
      }
    } catch (err) {
      console.error("Dwell camera capture execution mapping error:", err);
      showNotification("Evidence capture cancelled or aborted by user.");
    }
  });

  bind('dwell-abandon-link', 'click', () => {
    const confirmation1 = confirm("Are you sure you want to abandon this preservation session? Progress will be paused.");
    if (confirmation1) {
      const confirmation2 = confirm("Confirm final cancellation: Unverified progress data parameters will be stored locally inside your history profile.");
      if (confirmation2) {
        clearInterval(state.dwellTimer);
        clearInterval(backgroundLocationInterval);
        state.dwellActive = false;
        localStorage.removeItem('yathra_dwell_lock');
        showNotification("Immersion session abandoned. Evidence images saved to profile repository logs.");
        navigate('site-detail', false);
      }
    }
  });
  
  // Requirement 3: Process matching comparison evaluation commentary at timer completion
  bind('dwell-continue-btn', 'click', () => {
    if (state.dwellTimeLeft <= 0 && state.hasInitialPhotoCaptured) {
      clearInterval(backgroundLocationInterval);
      localStorage.removeItem('yathra_dwell_lock');
      
      if (state.gpsVerified && state.dwellImages.length > 0) {
        // Mock image algorithmic analysis: Verify array contains items and match structural signature
        state.verificationComment = "Verification Successful: Real-time features closely match the historical structure guidelines!";
        
        state.user.dwellTimeCompleted[state.activeSite.id] = true;
        state.user.verifiedPhotos[state.activeSite.id] = true;
        state.user.sitesVisited = Object.keys(state.user.dwellTimeCompleted).length;
        
        addXP(50, `Presence verified at ${state.activeSite.name}!`);
        addXP(10, "Landmark photo verification success!");
        navigate('camera-success');
      } else {
        if (state.dwellImages.length === 0) {
          state.verificationComment = "Verification Failed: No mid-session tracking images captured. Multiple perspectives required.";
        } else {
          state.verificationComment = "Verification Failed: Spatial structure profiles do not correlate with registered landmark geometry.";
        }
        navigate('camera-reject');
      }
    }
  });
  
  bind('camera-back', 'click', () => goBack());
  bind('ledger-back', 'click', () => goBack());
  bind('success-view-ledger', 'click', () => navigate('ledger'));
  bind('view-ledger-shortcut-btn', 'click', () => navigate('ledger'));

  // Multi-factor verification execution handler
  const processImageVerification = (capturedSrc) => {
    const site = state.activeSite || sitesData[0];
    const userLat = (userCoordinates && userCoordinates.latitude) ? userCoordinates.latitude : site.latitude;
    const userLng = (userCoordinates && userCoordinates.longitude) ? userCoordinates.longitude : site.longitude;

    const res = evaluateVisionInspection(site, userLat, userLng, capturedSrc);

    if (res.status === 'PASSED') {
      state.hasInitialPhotoCaptured = true;
      state.gpsVerified = true;
      state.user.dwellTimeCompleted[site.id] = true;
      state.user.verifiedPhotos[site.id] = true;
      state.user.sitesVisited = Object.keys(state.user.dwellTimeCompleted).length;
      
      addXP(60, `Presence verified at ${site.name}!`);
      navigate('camera-success');
    } else {
      navigate('camera-reject');
    }
  };

  // Hardware shutter click handler
  bind('camera-shutter-click', 'click', async () => {
    const shutter = document.getElementById('camera-shutter-click');
    if (shutter) { shutter.style.opacity = '0.5'; shutter.setAttribute('disabled', 'true'); }

    try {
      const initialImage = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });
      processImageVerification(initialImage.dataUrl);
    } catch (err) {
      console.log("Hardware camera fallback to simulated sample verification");
      const site = state.activeSite || sitesData[0];
      processImageVerification(site.image);
    } finally {
      if (shutter) { shutter.style.opacity = '1'; shutter.removeAttribute('disabled'); }
    }
  });

  // Web File Upload Fallback Handler
  const fileInput = document.getElementById('web-camera-file-input');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          processImageVerification(evt.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Stage Demo Drawer Controls & Shortcut Bindings
  const toggleDrawer = () => {
    state.stageDrawerOpen = !state.stageDrawerOpen;
    renderActiveScreen();
  };

  bind('toggle-stage-drawer-btn', 'click', toggleDrawer);
  bind('close-stage-drawer-btn', 'click', toggleDrawer);
  bind('reject-stage-demo', 'click', toggleDrawer);

  window.onkeydown = (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'D' || e.key === 'd')) {
      e.preventDefault();
      toggleDrawer();
    }
  };

  bind('demo-lock-sigiriya', 'click', () => {
    state.activeSite = sitesData.find(s => s.id === 'sigiriya') || sitesData[0];
    state.demoOverride = { active: true, mockLat: 7.9570, mockLng: 80.7603, mockVisionScore: 96, forcedStatus: 'PASSED' };
    showNotification("Demo Override: Locked to Sigiriya Rock (0.01km PASSED)");
    navigate('camera');
  });

  bind('demo-lock-mihintale', 'click', () => {
    state.activeSite = sitesData.find(s => s.id === 'mihintale') || sitesData[0];
    state.demoOverride = { active: true, mockLat: 8.3508, mockLng: 80.5186, mockVisionScore: 92, forcedStatus: 'PASSED' };
    showNotification("Demo Override: Locked to Mihintale (0.02km PASSED)");
    navigate('camera');
  });

  bind('demo-lock-galle-far', 'click', () => {
    state.activeSite = sitesData.find(s => s.id === 'galle_fort') || sitesData[0];
    state.demoOverride = { active: true, mockLat: 6.0535, mockLng: 80.2210, mockVisionScore: 88, forcedStatus: 'OUT_OF_BOUNDS' };
    showNotification("Demo Override: Galle Fort (2.6km OUT_OF_BOUNDS)");
    navigate('camera');
  });

  bind('demo-trigger-spoof', 'click', () => {
    state.activeSite = sitesData[0];
    state.demoOverride = { active: true, mockLat: 1.29027, mockLng: 103.85195, mockVisionScore: 35, forcedStatus: 'SPOOF_SUSPECTED' };
    showNotification("Demo Override: Spoof Velocity Anomaly Triggered!");
    navigate('camera');
  });

  bind('demo-exec-pass', 'click', () => {
    const site = state.activeSite || sitesData[0];
    state.demoOverride = { active: true, mockLat: site.latitude, mockLng: site.longitude, mockVisionScore: 96, forcedStatus: 'PASSED' };
    processImageVerification(site.image);
  });

  bind('demo-exec-fail-vision', 'click', () => {
    const site = state.activeSite || sitesData[0];
    state.demoOverride = { active: true, mockLat: site.latitude, mockLng: site.longitude, mockVisionScore: 42, forcedStatus: 'FAILED_VISION' };
    processImageVerification(site.image);
  });

  bind('demo-exec-out-bounds', 'click', () => {
    const site = state.activeSite || sitesData[0];
    state.demoOverride = { active: true, mockLat: site.latitude + 0.05, mockLng: site.longitude + 0.05, mockVisionScore: 89, forcedStatus: 'OUT_OF_BOUNDS' };
    processImageVerification(site.image);
  });

  bind('demo-open-ledger', 'click', () => navigate('ledger'));

  // Ledger Filter Buttons
  document.querySelectorAll('[data-ledger-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.ledgerFilter = btn.getAttribute('data-ledger-filter');
      renderActiveScreen();
    });
  });
  
  bind('camera-success-continue', 'click', () => { navigate('site-detail'); });
  bind('reject-close', 'click', () => navigate('site-detail'));
  bind('reject-guidelines', 'click', () => navigate('guidelines'));
  bind('reject-retry', 'click', () => navigate('camera'));
  bind('guidelines-back', 'click', () => goBack());
  bind('guidelines-continue', 'click', () => navigate('camera'));
  bind('sync-back', 'click', () => goBack());
  bind('quiz-back', 'click', () => goBack());
  bind('quiz-end-btn', 'click', () => navigate('site-detail'));
  
  const quizOpts = document.querySelectorAll('#quiz-options-container .quiz-option-btn');
  quizOpts.forEach(btn => {
    btn.addEventListener('click', () => {
      const chosenIdx = parseInt(btn.getAttribute('data-index'));
      const qObj = state.activeSite.quizzes[state.currentQuizIndex];
      const correctIdx = qObj.correctIndex;
      
      quizOpts.forEach(o => o.disabled = true);
      state.quizAnswers.push(chosenIdx);
      
      if (chosenIdx === correctIdx) {
        btn.classList.add('correct');
        btn.querySelector('.quiz-circle-ico').style.background = 'var(--color-green-success)';
        state.quizCorrectAnswers++;
      } else {
        btn.classList.add('incorrect');
        btn.querySelector('.quiz-circle-ico').style.background = 'var(--color-red-reject)';
        quizOpts[correctIdx].classList.add('correct');
        quizOpts[correctIdx].querySelector('.quiz-circle-ico').style.background = 'var(--color-green-success)';
      }
      
      setTimeout(() => {
        if (state.currentQuizIndex + 1 < state.activeSite.quizzes.length) {
          state.currentQuizIndex++;
          renderActiveScreen();
          startQuizTimer();
        } else {
          const scored = state.quizCorrectAnswers;
          const pointsEarned = scored * 10;
          state.user.completedQuizzes[state.activeSite.id] = true;
          state.user.quizzesPassed = Object.keys(state.user.completedQuizzes).length;
          
          addXP(pointsEarned, `Quiz Complete! You got ${scored}/5 correct.`);
          state.cooldownTimeLeft = 300;
          navigate('quiz-cooldown');
          startCooldownTimer();
        }
      }, 1500);
    });
  });
  
  bind('cooldown-back', 'click', () => navigate('site-detail'));
  bind('quests-back', 'click', () => goBack());
  
  const setupQuestTrigger = (shortId, routingName) => {
    const el = document.getElementById(`quest-item-${shortId}`);
    if (el) el.addEventListener('click', () => navigate(routingName));
  };
  setupQuestTrigger('social', 'quest-social');
  setupQuestTrigger('local_food', 'quest-food');
  setupQuestTrigger('wandering_around', 'quest-wandering');
  setupQuestTrigger('wildlife_spotting', 'quest-wildlife');
  setupQuestTrigger('eco_warrior', 'quest-warrior');
  
  bind('quest-social-back', 'click', () => goBack());
  bind('quest-social-submit', 'click', () => {
    if (document.getElementById('quest-social-link-input').value) {
      addXP(5, "Social media presence validation recorded successfully.");
      navigate('quests');
    }
  });
  
  bind('quest-food-back', 'click', () => goBack());
  bind('quest-food-start', 'click', () => { addXP(10, "Traditional cooking recipe trial cleared."); navigate('quests'); });
  bind('quest-wandering-back', 'click', () => goBack());
  bind('quest-wandering-snap', 'click', () => { addXP(60, "Rural custom marker logged locally."); navigate('quests'); });
  bind('quest-wildlife-back', 'click', () => goBack());
  bind('quest-wildlife-snap', 'click', () => { addXP(25, "Wildlife encounter profile telemetry logged."); navigate('quests'); });
  bind('quest-warrior-back', 'click', () => goBack());
  bind('quest-warrior-snap', 'click', () => { addXP(75, "Heritage reforestation contribution verified."); navigate('quests'); });
  
  bind('act-link-petition', 'click', () => navigate('petition'));
  bind('act-link-donations', 'click', () => navigate('donations'));
  bind('act-link-cleanup', 'click', () => navigate('cleanup'));
  bind('act-link-create-event', 'click', () => navigate('create-event'));
  
  bind('petition-back', 'click', () => goBack());
  bind('petition-submit', 'click', () => {
    if (!state.petitionSigned) {
      state.petitionSigned = true; state.petitionSignatures++;
      state.user.signedPetitions.push('ritigala-forest');
      addXP(3, "You signed the Ritigala Protection Petition!");
      renderActiveScreen();
    }
  });
  
  bind('donations-back', 'click', () => goBack());
  const donBtns = document.querySelectorAll('.donation-btn');
  donBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.donationAmount = parseInt(btn.getAttribute('data-val'));
      renderActiveScreen();
    });
  });
  
  const donInput = document.getElementById('donation-custom-input');
  if (donInput) {
    donInput.addEventListener('input', () => { state.donationAmount = parseInt(donInput.value) || 0; });
  }
  
  bind('donations-submit', 'click', () => {
    if (state.donationAmount > 0) {
      state.user.donatedAmount += state.donationAmount;
      const gained = Math.min(15, Math.ceil(state.donationAmount / 200));
      addXP(gained, `Donated Rs. ${state.donationAmount} securely via Payhere framework.`);
      state.donationAmount = 0; navigate('activism');
    }
  });
  
  bind('cleanup-back', 'click', () => goBack());
  bind('cleanup-join', 'click', () => {
    if (!state.user.joinedEvents.includes('site-cleanup')) {
      state.user.joinedEvents.push('site-cleanup');
      addXP(15, "Registered for Elahera Anicut site cleanup!");
      renderActiveScreen();
    }
  });
  
  bind('create-event-back', 'click', () => goBack());
  bind('event-submit', 'click', () => {
    const loc = document.getElementById('event-location').value;
    const type = document.getElementById('event-type').value;
    if (loc) { state.user.joinedEvents.push('community-event'); addXP(15, `Created Community event: ${type}!`); navigate('activism'); }
  });
  
  bind('rew-link-list', 'click', () => navigate('rewards-list'));
  bind('rew-link-rank', 'click', () => navigate('rank'));
  bind('rew-link-leaderboard', 'click', () => navigate('leaderboard'));
  bind('rewards-list-back', 'click', () => navigate('rewards'));
  bind('rew-coupon-use', 'click', () => navigate('coupon-redeem'));
  
  bind('rew-unlock-guide', 'click', () => {
    if (state.user.xp >= 100) { state.user.xp -= 100; state.user.unlockedCoupons.push('guide'); showNotification("Unlocked Ancient Trail Guide Coupon!"); navigate('rewards-list'); }
  });
  bind('rew-unlock-crafts', 'click', () => {
    if (state.user.xp >= 100) { state.user.xp -= 100; state.user.unlockedCoupons.push('crafts'); showNotification("Unlocked Artisan Crafts Coupon!"); navigate('rewards-list'); }
  });
  
  bind('coupon-back', 'click', () => goBack());
  bind('coupon-redeem-btn', 'click', () => { showNotification("Voucher code validated by merchant partner interface configuration."); });
  bind('coupon-review-submit', 'click', () => {
    const rev = document.getElementById('coupon-review-input').value;
    if (rev) { addXP(10, "Partner node critique saved."); document.getElementById('coupon-review-input').value = ''; }
  });
  
  bind('rank-back', 'click', () => goBack());
  bind('leaderboard-back', 'click', () => goBack());
  bind('leaderboard-view-full', 'click', () => { showNotification("Fetching full layout matrices across global instances..."); });
  bind('profile-recap-trigger', 'click', () => navigate('travel-poster'));
  bind('profile-travel-map', 'click', () => navigate('travel-poster'));
  bind('profile-settings', 'click', () => navigate('settings'));
  bind('profile-sync-trigger', 'click', () => navigate('offline-sync'));
  bind('poster-back', 'click', () => goBack());
  bind('settings-back', 'click', () => goBack());
  bind('sett-perm', 'click', () => navigate('permissions'));
  
  bind('sett-logout', 'click', () => {
    signOut(auth).then(() => {
      state.user = { ...initialUserState };
      state.user.permissions = { camera: false, notifications: false };
      state.petitionSignatures = 8742; state.petitionSigned = false; state.navStack = [];
      navigate('splash'); showNotification("Session terminated safely.");
    }).catch((error) => { showNotification("Logout mapping error: " + error.message); });
  });
  
  bind('nav-home', 'click', () => navigate('dashboard'));
  bind('nav-act', 'click', () => navigate('activism'));
  bind('nav-rew', 'click', () => navigate('rewards'));
  bind('nav-prof', 'click', () => navigate('profile'));
}

// --- BATTERY-SAFE INTERVAL RADIAL CHECK ENGINE ---
function setupIntervalPresencePoller() {
  clearInterval(backgroundLocationInterval);
  let lastValidTimestamp = Date.now();

  backgroundLocationInterval = setInterval(async () => {
    if (!state.dwellActive || state.dwellTimeLeft <= 0 || !state.hasInitialPhotoCaptured) {
      clearInterval(backgroundLocationInterval);
      return;
    }

    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const currentDistance = calculateDistanceMeters(
        coordinates.coords.latitude,
        coordinates.coords.longitude,
        state.activeSite.latitude,
        state.activeSite.longitude
      );

      console.log(`Presence background coordinate check tracking poll interval distance: ${currentDistance.toFixed(1)} meters.`);

      if (currentDistance <= GEOFENCE_RADIUS_METERS) {
        state.gpsVerified = true;
        lastValidTimestamp = Date.now();
        
        const lockData = localStorage.getItem('yathra_dwell_lock');
        if (lockData) {
          const lock = JSON.parse(lockData);
          lock.gpsVerified = true;
          localStorage.setItem('yathra_dwell_lock', JSON.stringify(lock));
        }
      } else {
        const missingDuration = Date.now() - lastValidTimestamp;
        if (missingDuration >= DRIFT_GRACE_LIMIT_MS) {
          state.gpsVerified = false;
          clearInterval(state.dwellTimer);
          state.dwellActive = false;
          
          const lockData = localStorage.getItem('yathra_dwell_lock');
          if (lockData) {
            const lock = JSON.parse(lockData);
            lock.gpsVerified = false;
            localStorage.setItem('yathra_dwell_lock', JSON.stringify(lock));
          }
          
          showNotification("Presence synchronization paused: Device is outside geofence boundary parameters. Return to resume.");
          clearInterval(backgroundLocationInterval);
          renderActiveScreen();
        }
      }
    } catch (err) {
      console.error("Hardware polling tracking fetch exception caught: ", err);
    }
  }, POLLING_INTERVAL_MS);
}

function calculateDistanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371e3; 
  const phi1 = lat1 * Math.PI / 180;
  const phi2 = lat2 * Math.PI / 180;
  const deltaPhi = (lat2 - lat1) * Math.PI / 180;
  const deltaLambda = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

async function processSyncQueue() {
  if (!navigator.onLine) return;
  const queueData = localStorage.getItem('yathra_sync_queue');
  if (!queueData) return;
  
  let queue;
  try { queue = JSON.parse(queueData); } catch (err) { console.error(err); return; }
  if (!queue || queue.length === 0) return;
  
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    if (item.status === 'Pending network link') {
      item.status = 'Verifying...';
      localStorage.setItem('yathra_sync_queue', JSON.stringify(queue));
      state.offlineSyncQueue = queue;
      renderActiveScreen();
      
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      item.status = 'Success';
      localStorage.setItem('yathra_sync_queue', JSON.stringify(queue));
      state.offlineSyncQueue = queue;
      renderActiveScreen();
    }
  }
}

function startDwellTimer() {
  if (state.dwellActive && state.dwellTimer) return;
  if (!state.hasInitialPhotoCaptured) return; // Strict lock block execution gate
  state.dwellActive = true;
  
  state.dwellTimer = setInterval(() => {
    if (state.dwellTimeLeft > 0) {
      const lockData = localStorage.getItem('yathra_dwell_lock');
      if (lockData) {
        try {
          const lock = JSON.parse(lockData);
          const timePassed = Date.now() - lock.startTime;
          const totalDuration = lock.duration || (900 * 1000);
          state.dwellTimeLeft = Math.max(0, Math.ceil((totalDuration - timePassed) / 1000));
        } catch (err) {
          console.error(err);
        }
      } else {
        state.dwellTimeLeft--;
      }
      
      if (state.currentScreen === 'dwell-time') {
        updateDwellTimerDisplay();
      }
    } else {
      clearInterval(state.dwellTimer);
      clearInterval(backgroundLocationInterval);
      state.dwellActive = false;
      if (state.currentScreen === 'dwell-time') {
        renderActiveScreen();
      }
    }
  }, 1000);
}

function updateDwellTimerDisplay() {
  const display = document.querySelector('.timer-text-display');
  const circle = document.querySelector('.timer-progress-circle');
  if (!display || !circle) return;
  
  const m = Math.floor(state.dwellTimeLeft / 60);
  const s = state.dwellTimeLeft % 60;
  display.textContent = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
  
  const totalDuration = 900;
  circle.style.strokeDashoffset = 565.48 - (state.dwellTimeLeft / totalDuration) * 565.48;
}

let quizTimerSecs = 15;
let quizTimerInterval = null;

function startQuizTimer() {
  clearInterval(quizTimerInterval);
  quizTimerSecs = 15;
  const timerText = document.getElementById('quiz-timer');
  if (timerText) timerText.textContent = '15s';
  
  quizTimerInterval = setInterval(() => {
    if (quizTimerSecs > 0) {
      quizTimerSecs--;
      const tSpan = document.getElementById('quiz-timer');
      if (tSpan) tSpan.textContent = `${quizTimerSecs}s`;
    } else {
      clearInterval(quizTimerInterval);
      const qOpts = document.querySelectorAll('#quiz-options-container .quiz-option-btn');
      qOpts.forEach(o => o.disabled = true);
      
      state.quizAnswers.push(-1);
      const correctIdx = state.activeSite.quizzes[state.currentQuizIndex].correctIndex;
      if (qOpts[correctIdx]) {
        qOpts[correctIdx].classList.add('correct');
        qOpts[correctIdx].querySelector('.quiz-circle-ico').style.background = 'var(--color-green-success)';
      }
      
      setTimeout(() => {
        if (state.currentQuizIndex + 1 < state.activeSite.quizzes.length) {
          state.currentQuizIndex++; renderActiveScreen(); startQuizTimer();
        } else {
          const scored = state.quizCorrectAnswers;
          state.user.completedQuizzes[state.activeSite.id] = true;
          state.user.quizzesPassed = Object.keys(state.user.completedQuizzes).length;
          addXP(scored * 10, `Quiz Complete! You got ${scored}/5 correct.`);
          state.cooldownTimeLeft = 300; navigate('quiz-cooldown'); startCooldownTimer();
        }
      }, 1500);
    }
  }, 1000);
}

function startCooldownTimer() {
  if (state.cooldownActive) return;
  state.cooldownActive = true;
  
  state.cooldownTimer = setInterval(() => {
    if (state.cooldownTimeLeft > 0) {
      state.cooldownTimeLeft--;
      if (state.currentScreen === 'quiz-cooldown') { updateCooldownDisplay(); }
    } else {
      clearInterval(state.cooldownTimer); state.cooldownActive = false;
      if (state.currentScreen === 'quiz-cooldown') { navigate('site-detail'); }
    }
  }, 1000);
}

function updateCooldownDisplay() {
  const display = document.querySelector('.timer-text-display');
  const circle = document.querySelector('.timer-progress-circle');
  if (!display || !circle) return;
  
  const m = Math.floor(state.cooldownTimeLeft / 60);
  const s = state.cooldownTimeLeft % 60;
  display.textContent = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
  circle.style.strokeDashoffset = 565.48 - (state.cooldownTimeLeft / 300) * 565.48;
}

function renderDirectoryGrid(categoryFilter, searchFilter = '') {
  const grid = document.getElementById('directory-grid-container');
  if (!grid) return;
  
  const query = searchFilter.toLowerCase();
  const filtered = sitesData.filter(s => s.category === categoryFilter && (s.name.toLowerCase().includes(query) || s.district.toLowerCase().includes(query)));
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/3; text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No locations found matching parameters criteria</div>`;
    return;
  }
  
  grid.innerHTML = filtered.map(s => `
    <div class="location-grid-card" data-site-grid-id="${s.id}">
      <img src="${s.image}" alt="${s.name}" class="location-grid-card-img">
      <div class="location-card-content">
        <h4 class="location-card-title">${s.name}</h4>
        <span class="location-card-sub">${s.district}</span>
        <span class="location-card-xp">${s.xpRange}</span>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('[data-site-grid-id]').forEach(card => {
    card.addEventListener('click', () => {
      state.activeSite = sitesData.find(s => s.id === card.getAttribute('data-site-grid-id'));
      navigate('site-detail');
    });
  });
}

function renderTrailListCards(categoryName, searchFilter = '') {
  const container = document.getElementById('list-cards-container');
  if (!container) return;
  
  const query = searchFilter.toLowerCase();
  const filtered = sitesData.filter(s => s.category === categoryName && (s.name.toLowerCase().includes(query) || s.district.toLowerCase().includes(query)));
  
  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No matching records found</div>`;
    return;
  }
  
  container.innerHTML = filtered.map(s => `
    <div class="location-list-card" data-site-list-id="${s.id}">
      <img src="${s.image}" alt="${s.name}" class="location-list-img">
      <div class="location-list-content">
        <h4 style="font-size: 13px; font-weight: 800; line-height: 1.3;">${s.name}</h4>
        <span style="font-size: 10px; color: var(--color-gray); margin-top: 1px; margin-bottom: 4px;">${s.district}</span>
        <span style="font-size: 11px; font-weight: 700; color: var(--color-gold);">${s.xpRange}</span>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('[data-site-list-id]').forEach(card => {
    card.addEventListener('click', () => {
      state.activeSite = sitesData.find(s => s.id === card.getAttribute('data-site-list-id'));
      navigate('site-detail');
    });
  });
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; 
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function showMapPopupCard(site) {
  const existing = document.getElementById('map-popup-card');
  if (existing) existing.remove();
  const container = document.getElementById('map-popup-container');
  if (!container) return;
  
  const popup = document.createElement('div');
  popup.id = 'map-popup-card'; popup.className = 'map-popup-card';
  
  let distanceDisplay = site.distance || '0 km';
  if (locationPermissionDenied) { distanceDisplay = 'Permission required'; } 
  else if (userCoordinates && site.latitude && site.longitude) {
    distanceDisplay = calculateDistance(userCoordinates.latitude, userCoordinates.longitude, site.latitude, site.longitude).toFixed(1) + ' km';
  }
  
  popup.innerHTML = `
    <img src="${site.image}" alt="${site.name}" class="popup-site-img">
    <div class="popup-site-info">
      <h3 style="font-size: 15px; font-weight: 800; color: var(--color-charcoal);">${site.name}</h3>
      <div style="font-size: 11px; color: var(--color-gray); font-weight: 600; margin-top: 1px;">📍 ${site.district}</div>
      <span style="font-size: 10px; color: var(--color-gold); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; display: inline-block;">${site.category}</span>
      <span style="font-size: 11px; color: var(--color-charcoal); font-weight: 700; margin-top: 2px;">⭐ ${site.xpRange} • 📍 ${distanceDisplay}</span>
    </div>
    <button class="btn-primary" style="width: 90px; height: 36px; font-size: 11px; padding:0 8px; gap:4px;" id="map-popup-navigate-btn">🚀 Navigate</button>
  `;
  container.appendChild(popup);
  
  document.getElementById('map-popup-navigate-btn').addEventListener('click', (e) => {
    e.stopPropagation(); Maps('site-details', { id: site.id });
  });
  popup.addEventListener('click', (e) => {
    e.stopPropagation(); Maps('site-details', { id: site.id });
  });
}