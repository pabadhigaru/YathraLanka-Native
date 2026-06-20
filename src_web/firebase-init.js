import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABnvYQl4QzP1lHF4Ei_AzrDPYlMKoTXpA",
  authDomain: "yathralanka-2ac43.firebaseapp.com",
  projectId: "yathralanka-2ac43",
  storageBucket: "yathralanka-2ac43.firebasestorage.app",
  measurementId: "G-KXWXP8TGMS",
  appId: "1:1032179534120:web:21d200d59018319f7ca81d",
  messagingSenderId: "1032179534120"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
