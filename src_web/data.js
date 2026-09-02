// YathraLanka App Data Configuration

export const initialUserState = {
  xp: 0,
  rank: "None",
  medals: 0,
  sitesVisited: 0,
  quizzesPassed: 0,
  permissions: {
    camera: false,
    notifications: false
  },
  role: "Explorer",
  interests: [],
  signedPetitions: [],
  donatedAmount: 0,
  joinedEvents: [],
  unlockedCoupons: [],
  completedQuizzes: {},
  dwellTimeCompleted: {},
  verifiedPhotos: {},
  completedCheckpoints: []
};

export const rankingScale = [
  { rank: "Grass Toucher", range: [0, 99], threshold: 0 },
  { rank: "Wanderer", range: [100, 249], threshold: 100 },
  { rank: "Tuk Tuk Trailer", range: [250, 499], threshold: 250 },
  { rank: "Magahoyanna", range: [500, 999], threshold: 500 },
  { rank: "Island Explorer", range: [1000, 2000], threshold: 1000 },
  { rank: "Lanka Legend", range: [2000, 5000], threshold: 2000 }
];

export const leaderboardPlayers = [
  { name: "Suranga M", points: 5820, role: "Explorer", rank: "Lanka Legend" },
  { name: "Anjali R.", points: 5330, role: "Volunteer", rank: "Lanka Legend" },
  { name: "Dilhani", points: 3540, role: "Organizer", rank: "Island Explorer" },
  { name: "Mihiranga T.", points: 1160, role: "Quiz Master", rank: "Island Explorer" }
];

export const sitesData = [
  // --- HERITAGE TRAIL ---
  {
    id: "colombo_museum",
    name: "National Museum, Colombo",
    district: "Colombo District",
    category: "Heritage Trail",
    xp: 50,
    xpRange: "25 - 80 XP",
    distance: "5km",
    openStatus: "Open now",
    description: "Established in 1877, the National Museum of Colombo is the largest museum in Sri Lanka, housing ancient regalia including the throne and crown of the Kandyan monarchs.",
    image: "/Element%20Pictures/National%20Museum%20-%20Colombo.jpg",
    latitude: 6.9044,
    longitude: 79.8606,
    referenceImage: "/Element%20Pictures/National%20Museum%20-%20Colombo.jpg",
    checkpoints: [
      {
        id: "colombo_museum_throne",
        name: "Royal Throne & Crown Gallery",
        description: "The ceremonial throne of King Sri Vikrama Rajasinha returned to Sri Lanka in 1934.",
        referenceImage: "/Element%20Pictures/National%20Museum%20-%20Colombo.jpg",
        hint: "Align the royal regalia display in the center of the viewfinder.",
        xpReward: 50
      },
      {
        id: "colombo_museum_bodhisattva",
        name: "Bronze Bodhisattva Tara Hall",
        description: "The world-famous 8th-century cast bronze statue of Goddess Tara.",
        referenceImage: "/Element%20Pictures/National%20Museum%20-%20Colombo.jpg",
        hint: "Frame the bronze statue showcase under ambient hall lighting.",
        xpReward: 50
      }
    ],
    quizzes: [
      {
        question: "In which year was the National Museum of Colombo founded?",
        options: ["1815", "1877", "1948", "1972"],
        correctIndex: 1
      },
      {
        question: "Which British Governor was instrumental in establishing the National Museum?",
        options: ["Sir William Gregory", "Sir Thomas Maitland", "Sir Robert Brownrigg", "Lord Mountbatten"],
        correctIndex: 0
      },
      {
        question: "The regalia of which last kingdom of Sri Lanka is preserved here?",
        options: ["Anuradhapura", "Polonnaruwa", "Kandy", "Kotte"],
        correctIndex: 2
      },
      {
        question: "What architectural style is displayed by the museum's main white mansion facade?",
        options: ["Gothic Revival", "Italianate Victorian architecture", "Traditional Kandyan", "Dutch Colonial"],
        correctIndex: 1
      },
      {
        question: "Which ancient statue discovered near Trincomalee is one of the museum's prime treasures?",
        options: ["The Aukana Buddha", "The Bronze Statue of Tara", "The Gal Vihara statue", "The Isurumuniya Lovers"],
        correctIndex: 1
      }
    ]
  },
  {
    id: "sigiriya",
    name: "Sigiriya",
    district: "Matale District",
    category: "Heritage Trail",
    xp: 50,
    xpRange: "25 - 80 XP",
    distance: "160km",
    openStatus: "Open now",
    description: "An ancient rock fortress constructed by King Kashyapa, celebrated for its advanced water gardens, 5th-century frescoes of celestial maidens, and the colossal lion paw gate.",
    image: "/Element%20Pictures/Sigiriya-LionRock.jpg",
    latitude: 7.9570,
    longitude: 80.7603,
    referenceImage: "/Element%20Pictures/Sigiriya-LionRock.jpg",
    checkpoints: [
      {
        id: "sigiriya_lion_paws",
        name: "Colossal Lion Paws Gate",
        description: "The massive lion paws framing the staircase to the summit palace.",
        referenceImage: "/Element%20Pictures/Sigiriya-LionRock.jpg",
        hint: "Center the two massive lion paw sculptures in your camera viewfinder.",
        xpReward: 50
      }
    ],
    quizzes: [
      {
        question: "Which Sri Lankan king created the Sigiriya Rock Fortress?",
        options: ["King Devanampiyatissa", "King Dutugemunu", "King Kashyapa", "King Parakramabahu I"],
        correctIndex: 2
      },
      {
        question: "Sigiriya is globally famous for which artistic creations painted on the rock face?",
        options: ["Carvings of war elephants", "Frescoes of celestial maidens (Sigiri Apsaras)", "Brahmi stone inscriptions", "Sleeping lion reliefs"],
        correctIndex: 1
      },
      {
        question: "What structure stands at the entrance to the final palace summit at Sigiriya?",
        options: ["A bronze dragon gate", "Colossal Lion Paws carved out of rock", "Two giant cobra statues", "A double-moat drawbridge"],
        correctIndex: 1
      },
      {
        question: "What is the purpose of the highly polished 'Mirror Wall' at Sigiriya?",
        options: ["To reflect sunrays at invaders", "King's personal mirror", "Ancient graffiti poems written by visitors since the 8th century", "A signaling mirror"],
        correctIndex: 2
      },
      {
        question: "Which layout style characterizes Sigiriya's royal pleasure gardens?",
        options: ["Terraced mountain farming", "Symmetrical hydraulic water gardens and boulder terraces", "Dry zone scrub jungle", "Underground labyrinths"],
        correctIndex: 1
      }
    ]
  },
  {
    id: "temple_of_the_tooth",
    name: "Temple of the Tooth",
    district: "Kandy District",
    category: "Heritage Trail",
    xp: 50,
    xpRange: "25 - 80 XP",
    distance: "115km",
    openStatus: "Open now",
    description: "The royal palace complex of Kandy housing the sacred tooth relic of Gautama Buddha, symbolizing sovereignty, Kandyan architecture, and royal heritage.",
    image: "/Element%20Pictures/Temple%20of%20the%20tooth.jpg",
    latitude: 7.2936,
    longitude: 80.6413,
    referenceImage: "/Element%20Pictures/Temple%20of%20the%20tooth.jpg",
    checkpoints: [
      {
        id: "kandy_pattirippuwa",
        name: "Pattirippuwa (Octagonal Pavilion)",
        description: "The iconic octagonal structure built by King Sri Vikrama Rajasinha.",
        referenceImage: "/Element%20Pictures/Temple%20of%20the%20tooth.jpg",
        hint: "Align the octagonal tower and front moat in your camera viewfinder.",
        xpReward: 50
      }
    ],
    quizzes: [
      {
        question: "Where is the Sri Dalada Maligawa (Temple of the Sacred Tooth Relic) located?",
        options: ["Anuradhapura", "Polonnaruwa", "Kandy", "Jaffna"],
        correctIndex: 2
      },
      {
        question: "Historically, what did possession of the Sacred Tooth Relic represent?",
        options: ["Control of spice trade", "The divine right and legitimate authority to rule the island", "Immunity from foreign attacks", "Ownership of gem mines"],
        correctIndex: 1
      },
      {
        question: "What is the name of the famous octagonal tower at the front of the Temple?",
        options: ["Pattirippuwa", "Sandakada Pahana", "Vahalkada", "Gedige"],
        correctIndex: 0
      },
      {
        question: "Which annual procession in Kandy parades the sacred casket?",
        options: ["Duruthu Perahera", "Esala Perahera", "Vesak Kalapaya", "Kataragama Festival"],
        correctIndex: 1
      },
      {
        question: "What decorative motif characterizes the temple wall bordering Kandy Lake?",
        options: ["Lion statues", "Diyarella Bemma (Wave Swell Wall)", "Bronze spikes", "Lotus petals"],
        correctIndex: 1
      }
    ]
  },
  {
    id: "ruwanweliseya",
    name: "Ruwanweliseya",
    district: "Anuradhapura District",
    category: "Heritage Trail",
    xp: 50,
    xpRange: "25 - 80 XP",
    distance: "215km",
    openStatus: "Open now",
    description: "A monumental bubble-shaped stupa built by King Dutugemunu in ancient Anuradhapura, celebrated as an engineering marvel of Buddhist architecture.",
    image: "/Element%20Pictures/Ruwanweliseya.jpg",
    latitude: 8.3503,
    longitude: 80.3962,
    referenceImage: "/Element%20Pictures/Ruwanweliseya.jpg",
    checkpoints: [
      {
        id: "ruwanweliseya_elephant_wall",
        name: "The Elephant Wall (Hasti Prakara)",
        description: "The surrounding wall featuring hundreds of carved elephant foreparts.",
        referenceImage: "/Element%20Pictures/Ruwanweliseya.jpg",
        hint: "Capture the detailed elephant reliefs lining the stupa base terrace.",
        xpReward: 50
      }
    ],
    quizzes: [
      {
        question: "Which ancient monarch built the sacred Ruwanweliseya Stupa?",
        options: ["King Valagamba", "King Devanampiyatissa", "King Dutugemunu", "King Mahasen"],
        correctIndex: 2
      },
      {
        question: "What geometric shape describes the dome of Ruwanweliseya?",
        options: ["Heap of paddy", "Bubbulakara (Bubble shape)", "Lotus shape", "Bell shape"],
        correctIndex: 1
      },
      {
        question: "What feature circles the base platform of Ruwanweliseya?",
        options: ["Elephant Wall (Hasti Prakara)", "A deep lotus moat", "Bronze spears", "Monarch statues"],
        correctIndex: 0
      },
      {
        question: "What are the ornamental frontispieces at the four cardinal points called?",
        options: ["Frescoes", "Vahalkadas", "Toranas", "Drawbridges"],
        correctIndex: 1
      },
      {
        question: "What material was laid into the foundation to secure its immense weight?",
        options: ["Solid iron beams", "Layers of crushed stones, clay, lead sheets, and butter-clay", "Hollow timber logs", "Sun-dried bricks only"],
        correctIndex: 1
      }
    ]
  },
  {
    id: "mihintale",
    name: "Mihintale",
    district: "Anuradhapura District",
    category: "Heritage Trail",
    xp: 50,
    xpRange: "25 - 80 XP",
    distance: "220km",
    openStatus: "Open now",
    description: "The sacred mountain peak revered as the cradle of Buddhism in Sri Lanka, marked by ancient monastic ruins, hospital ruins, and rock inscriptions.",
    image: "/Element%20Pictures/Mihintale.JPG",
    latitude: 8.3508,
    longitude: 80.5186,
    referenceImage: "/Element%20Pictures/Mihintale.JPG",
    checkpoints: [
      {
        id: "mihintale_ambasthala",
        name: "Ambasthala Dagaba",
        description: "The stupa built on the spot where Arahat Mahinda met King Devanampiyatissa.",
        referenceImage: "/Element%20Pictures/Mihintale.JPG",
        hint: "Align the stupa and surrounding stone pillars in your frame.",
        xpReward: 50
      }
    ],
    quizzes: [
      {
        question: "What is the historical significance of Mihintale?",
        options: ["First capital of Sri Lanka", "Where Buddhism was introduced by Arahat Mahinda", "A royal citadel built by Kashyapa", "An ancient seaport"],
        correctIndex: 1
      },
      {
        question: "Who was the reigning king when Arahat Mahinda arrived at Mihintale?",
        options: ["King Dutugemunu", "King Devanampiyatissa", "King Kashyapa", "King Parakramabahu"],
        correctIndex: 1
      },
      {
        question: "Which stupa at Mihintale is renowned for its early elephant and dwarf carvings?",
        options: ["Kantaka Cetiya", "Maha Seya", "Ambasthala Dagaba", "Indikatu Seya"],
        correctIndex: 0
      },
      {
        question: "What ancient healthcare structure exists at the foot of Mihintale?",
        options: ["An ayurvedic hospital with a stone immersion bath", "A military fortress", "A medicinal spice warehouse", "A royal bath only"],
        correctIndex: 0
      },
      {
        question: "What is the name of the dark pool nestled among the boulders of Mihintale?",
        options: ["Kala Wewa", "Kaludiya Pokuna", "Tissa Wewa", "Sinha Pokuna"],
        correctIndex: 1
      }
    ]
  },
  {
    id: "galle_fort",
    name: "Galle Dutch Fort",
    district: "Galle District",
    category: "Heritage Trail",
    xp: 50,
    xpRange: "25 - 80 XP",
    distance: "125km",
    openStatus: "Open now",
    description: "A coastal fortress built by the Portuguese and fortified by the Dutch, blending European military architecture and South Asian traditions.",
    image: "/Element%20Pictures/Galle%20Fort.jpg",
    latitude: 6.0267,
    longitude: 80.2167,
    referenceImage: "/Element%20Pictures/Galle%20Fort.jpg",
    checkpoints: [
      {
        id: "galle_lighthouse",
        name: "Galle Lighthouse at Point Utrecht",
        description: "The iconic white lighthouse standing atop the southern bastion wall.",
        referenceImage: "/Element%20Pictures/Galle%20Fort.jpg",
        hint: "Frame the full lighthouse tower and rampart wall.",
        xpReward: 50
      }
    ],
    quizzes: [
      {
        question: "Which European power first built fortifications at Galle before the Dutch expanded them?",
        options: ["The British", "The Portuguese", "The French", "The Spanish"],
        correctIndex: 1
      },
      {
        question: "What structure stands on Point Utrecht Bastion overlooking the bay?",
        options: ["The Clock Tower", "The Galle Lighthouse", "Dutch Reformed Church", "Maritime Museum"],
        correctIndex: 1
      },
      {
        question: "Galle Fort is globally designated as a:",
        options: ["Biosphere Reserve", "UNESCO World Heritage Site", "National Nature Sanctuary", "Ramsar Wetland"],
        correctIndex: 1
      },
      {
        question: "What monogram of the Dutch East India Company is carved above the Old Gate?",
        options: ["VOC", "DEIC", "EIC", "NL"],
        correctIndex: 0
      },
      {
        question: "What architectural feature defines the historic residential streetscape of Galle Fort?",
        options: ["Timber log cabins", "Dutch verandah houses with clay-tiled roofs and paved inner courtyards", "Glass high-rises", "Underground stone chambers"],
        correctIndex: 1
      }
    ]
  },
  {
    id: "dambulla_cave",
    name: "Dambulla Cave Temple",
    district: "Matale District",
    category: "Heritage Trail",
    xp: 50,
    xpRange: "25 - 80 XP",
    distance: "148km",
    openStatus: "Open now",
    description: "The largest and best-preserved cave temple complex in Sri Lanka, boasting five sanctuaries filled with statues and ceiling murals spanning over 2,000 years.",
    image: "/Element%20Pictures/Dambulla%20Cave%20Temple.jpg",
    latitude: 7.8567,
    longitude: 80.6483,
    referenceImage: "/Element%20Pictures/Dambulla%20Cave%20Temple.jpg",
    checkpoints: [
      {
        id: "dambulla_cave_two",
        name: "Maharaja Viharaya (Cave of Great Kings)",
        description: "The largest cave containing 56 statues and ceiling murals of historical events.",
        referenceImage: "/Element%20Pictures/Dambulla%20Cave%20Temple.jpg",
        hint: "Frame the painted rock ceiling and row of Buddha statues.",
        xpReward: 50
      }
    ],
    quizzes: [
      {
        question: "Which king sought sanctuary in the Dambulla caves before converting them into temples?",
        options: ["King Valagamba", "King Dutugemunu", "King Kashyapa", "King Vijayabahu I"],
        correctIndex: 0
      },
      {
        question: "How many primary cave shrines make up the main Dambulla temple complex?",
        options: ["3", "5", "7", "12"],
        correctIndex: 1
      },
      {
        question: "Which king gilded the temple statues with gold leaf in the 12th century?",
        options: ["King Nissanka Malla", "King Parakramabahu I", "King Mahasen", "King Kirti Sri Rajasinha"],
        correctIndex: 0
      },
      {
        question: "What natural drip phenomenon is collected in a vessel inside the second cave?",
        options: ["Sacred holy water dripping upwards through ceiling rock fissures", "Oil from tree roots", "Rainwater funnel", "Hot spring water"],
        correctIndex: 0
      },
      {
        question: "Dambulla is recognized as a UNESCO World Heritage site primarily for its:",
        options: ["Ancient cave paintings and preserved Buddhist sculptures", "Deep subterranean rivers", "Megalithic iron tombs", "Military fortifications"],
        correctIndex: 0
      }
    ]
  },

  // --- HIDDEN GEMS ---
  {
    id: "ritigala",
    name: "Ritigala Monastery",
    district: "Anuradhapura District",
    category: "Hidden Gems",
    xp: 50,
    xpRange: "75 - 100 XP",
    distance: "195km",
    openStatus: "Open now",
    description: "An ancient mountain range housing ruins of an austere forest monastery, renowned for its Padhanaghara double-platforms, stone-paved walkways, and rare herbal gardens.",
    image: "/Element%20Pictures/Ritigala%20Monastery.jpg",
    latitude: 8.1139,
    longitude: 80.6558,
    referenceImage: "/Element%20Pictures/Ritigala%20Monastery.jpg",
    checkpoints: [
      {
        id: "ritigala_banda_pokuna",
        name: "Banda Pokuna Reservoir",
        description: "The massive ancient stone-faced bath and reservoir at the base of the trail.",
        referenceImage: "/Element%20Pictures/Ritigala%20Monastery.jpg",
        hint: "Frame the ancient stone bund steps and reservoir entrance.",
        xpReward: 50
      }
    ],
    quizzes: [
      {
        question: "What is unique about the monastic structures (Padhanagharas) at Ritigala?",
        options: ["Covered in gold leaf", "Devoid of ornate carvings to reflect pure ascetic meditation", "Built on wooden stilts", "Surrounded by circular moats"],
        correctIndex: 1
      },
      {
        question: "Which fraternity of forest-dwelling monks lived at Ritigala?",
        options: ["Pamsukulika (rag-robe) monks", "Roman missionaries", "Maritime traders", "Royal guards"],
        correctIndex: 0
      },
      {
        question: "What botanical anomaly makes the upper peak of Ritigala unique?",
        options: ["Volcanic rock", "A cool microclimate supporting wet-zone flora and rare medicinal herbs", "Desert succulents only", "Mangrove swamps"],
        correctIndex: 1
      },
      {
        question: "What structural pathways connect the various meditation platforms?",
        options: ["Vine rope bridges", "Meticulously paved stone-cut walkways and steps through dense jungle", "Underground tunnels", "Timber walkways"],
        correctIndex: 1
      },
      {
        question: "What is the name of the stone-walled bath near the ruins entrance?",
        options: ["Banda Pokuna", "Sinha Pokuna", "Kaludiya Pokuna", "Kuttam Pokuna"],
        correctIndex: 0
      }
    ]
  },
  {
    id: "dowa_temple",
    name: "Dowa Rock Temple",
    district: "Badulla District",
    category: "Hidden Gems",
    xp: 50,
    xpRange: "75 - 100 XP",
    distance: "180km",
    openStatus: "Open now",
    description: "A historic cave temple tucked into the Uva hills, famous for its 38-foot unfinished standing Buddha statue carved directly into a sheer rock cliff.",
    image: "/Element%20Pictures/Dowa%20Rock%20Temple.jpg",
    latitude: 6.8202,
    longitude: 81.0255,
    referenceImage: "/Element%20Pictures/Dowa%20Rock%20Temple.jpg",
    checkpoints: [
      {
        id: "dowa_standing_buddha",
        name: "38-Foot Cliff Carved Buddha",
        description: "The colossal rock-cut standing Buddha carved into the mountain face.",
        referenceImage: "/Element%20Pictures/Dowa%20Rock%20Temple.jpg",
        hint: "Align the full height of the rock-cut statue in your frame.",
        xpReward: 50
      }
    ],
    quizzes: [
      {
        question: "What is the most prominent feature of Dowa Rock Temple?",
        options: ["A gold stupa", "A 38-foot rock-carved standing Buddha statue", "An underground geyser", "A stone sundial"],
        correctIndex: 1
      },
      {
        question: "Which ancient king is traditionally credited with creating Dowa Cave Temple?",
        options: ["King Dutugemunu", "King Valagamba", "King Kashyapa", "King Kirti Sri Rajasinha"],
        correctIndex: 1
      },
      {
        question: "What artistic period characterizes the cave paintings inside the inner shrine?",
        options: ["Kandyan mural traditions", "Ancient Rome", "Modern abstract", "Prehistoric petroglyphs"],
        correctIndex: 0
      },
      {
        question: "What protective creature is depicted on the cave entrance ceiling?",
        options: ["Three-headed cobra painting", "Giant turtle", "Eagle", "Leopard"],
        correctIndex: 0
      },
      {
        question: "Dowa Temple is located near which scenic town in the central highlands?",
        options: ["Bandarawela", "Jaffna", "Negombo", "Galle"],
        correctIndex: 0
      }
    ]
  },
  {
    id: "yudaganawa",
    name: "Yudaganawa",
    district: "Monaragala District",
    category: "Hidden Gems",
    xp: 50,
    xpRange: "75 - 100 XP",
    distance: "230km",
    openStatus: "Open now",
    description: "A colossal 12th-century stupa built in the Kota Vehera style on the historical battleground where Prince Dutugemunu and Prince Tissa clashed for the throne.",
    image: "/Element%20Pictures/Yudaganawa.jpg",
    latitude: 6.7292,
    longitude: 81.2831,
    referenceImage: "/Element%20Pictures/Yudaganawa.jpg",
    checkpoints: [
      {
        id: "yudaganawa_dome",
        name: "Yudaganawa Kota Vehera",
        description: "The massive flat-topped ancient stupa mound.",
        referenceImage: "/Element%20Pictures/Yudaganawa.jpg",
        hint: "Capture the vast circular brick terrace and perimeter mound.",
        xpReward: 50
      }
    ],
    quizzes: [
      {
        question: "What historic event occurred at Yudaganawa?",
        options: ["Coronation of Parakramabahu", "Battle between Prince Dutugemunu and Prince Tissa", "Arrival of Vijaya", "First tea plantation"],
        correctIndex: 1
      },
      {
        question: "What architectural style is displayed by the Yudaganawa Stupa?",
        options: ["Kota Vehera (truncated stupa style)", "Bell shape", "Heap of paddy", "Bubble shape"],
        correctIndex: 0
      },
      {
        question: "Yudaganawa is located near which historic township?",
        options: ["Buttala", "Kandy", "Anuradhapura", "Trincomalee"],
        correctIndex: 0
      },
      {
        question: "What does the word 'Yudaganawa' translate to?",
        options: ["Peaceful park", "Battleground / Arena of Battle", "Holy lake", "Lion rock"],
        correctIndex: 1
      },
      {
        question: "Which ancient irrigation reservoir lies right beside the stupa complex?",
        options: ["Yudaganawa Wewa", "Parakrama Samudra", "Kala Wewa", "Minneriya"],
        correctIndex: 0
      }
    ]
  },
  {
    id: "pilikuttuwa",
    name: "Pilikuttuwa Temple",
    district: "Gampaha District",
    category: "Hidden Gems",
    xp: 50,
    xpRange: "75 - 100 XP",
    distance: "35km",
    openStatus: "Open now",
    description: "An ancient forest cave monastery complex featuring 99 drip-ledged rock caves, historic Kandyan-period murals, and an ancient wooden bridge.",
    image: "/Element%20Pictures/Pilikuttuwa%20Temple.jpg",
    latitude: 6.8465,
    longitude: 79.9933,
    referenceImage: "/Element%20Pictures/Pilikuttuwa%20Temple.jpg",
    checkpoints: [
      {
        id: "pilikuttuwa_bridge",
        name: "Historic Wooden Canopy Bridge",
        description: "The Dutch/Kandyan-era wooden bridge spanning the natural stream.",
        referenceImage: "/Element%20Pictures/Pilikuttuwa%20Temple.jpg",
        hint: "Align the wooden arch railing and stream walkway in your frame.",
        xpReward: 50
      }
    ],
    quizzes: [
      {
        question: "How many drip-ledged caves are recorded in the Pilikuttuwa forest complex?",
        options: ["12", "99", "25", "250"],
        correctIndex: 1
      },
      {
        question: "What famous historic bridge structure is preserved within Pilikuttuwa?",
        options: ["A Dutch-era wooden canopy bridge", "A stone cantilever bridge", "A suspension bridge", "An iron railway bridge"],
        correctIndex: 0
      },
      {
        question: "Which artistic period is reflected in the cave murals at Pilikuttuwa?",
        options: ["Late Kandyan and early colonial transition period", "Prehistoric cave art", "Modern cubism", "Chola bronze style"],
        correctIndex: 0
      },
      {
        question: "Which king used Pilikuttuwa as a refuge during foreign invasions?",
        options: ["King Valagamba", "King Kashyapa", "King Dutugemunu", "King Parakramabahu"],
        correctIndex: 0
      },
      {
        question: "What was the architectural purpose of drip-ledges (kataraya) on the caves?",
        options: ["To prevent rainwater from flowing into monks' living quarters", "To store rainwater in the stone", "To serve as defensive trenches", "Decorative carvings only"],
        correctIndex: 0
      }
    ]
  },
  {
    id: "maligawila",
    name: "Maligawila Statue",
    district: "Monaragala District",
    category: "Hidden Gems",
    xp: 50,
    xpRange: "75 - 100 XP",
    distance: "240km",
    openStatus: "Open now",
    description: "A free-standing 7th-century Buddha statue measuring over 37 feet tall, sculpted from a single crystalline limestone boulder deep in the southeastern forest.",
    image: "/Element%20Pictures/maligawila%20buddha%20statue.jpg",
    latitude: 6.7352,
    longitude: 81.3392,
    referenceImage: "/Element%20Pictures/maligawila%20buddha%20statue.jpg",
    checkpoints: [
      {
        id: "maligawila_limestone_statue",
        name: "Free-standing Limestone Buddha",
        description: "The towering 37-foot free-standing limestone Buddha statue.",
        referenceImage: "/Element%20Pictures/maligawila%20buddha%20statue.jpg",
        hint: "Frame the majestic standing Buddha statue in its forested sanctuary.",
        xpReward: 50
      }
    ],
    quizzes: [
      {
        question: "What material was used to carve the colossal Maligawila Buddha statue?",
        options: ["Granite", "A single crystalline limestone block", "Terracotta clay", "Cast bronze"],
        correctIndex: 1
      },
      {
        question: "Which 7th-century prince is historically credited with sculpting the statue?",
        options: ["Prince Agbo (Agrabodhi)", "Prince Kashyapa", "Prince Dutugemunu", "Prince Vijaya"],
        correctIndex: 0
      },
      {
        question: "What nearby companion site contains a colossal statue of Avalokiteshvara Bodhisattva?",
        options: ["Dambegoda", "Sigiriya", "Aukana", "Buduruwagala"],
        correctIndex: 0
      },
      {
        question: "In what condition was the Maligawila statue discovered before restoration in the 20th century?",
        options: ["Pristine and standing", "Fallen and broken in multiple segments in the dense jungle", "Buried in sea dunes", "Submerged in a lake"],
        correctIndex: 1
      },
      {
        question: "What ancient structure once enclosed the standing Buddha statue?",
        options: ["A massive brick image house (Patimaghara)", "A simple timber hut", "A defensive wall", "An iron canopy"],
        correctIndex: 0
      }
    ]
  },
  {
    id: "buduruwagala",
    name: "Buduruwagala",
    district: "Wellawaya District",
    category: "Hidden Gems",
    xp: 50,
    xpRange: "75 - 100 XP",
    distance: "210km",
    openStatus: "Open now",
    description: "An ancient Buddhist temple dating to the 9th or 10th century, featuring seven colossal figures carved in high relief on a cliff face, including the tallest rock-cut Buddha in Sri Lanka.",
    image: "/Element%20Pictures/Buduruwagala%20Temple.jpg",
    latitude: 6.6908,
    longitude: 81.0772,
    referenceImage: "/Element%20Pictures/Buduruwagala%20Temple.jpg",
    checkpoints: [
      {
        id: "buduruwagala_reliefs",
        name: "Colossal Rock-Cut Reliefs",
        description: "The 51-foot central Buddha flanked by three Bodhisattva figures on each side.",
        referenceImage: "/Element%20Pictures/Buduruwagala%20Temple.jpg",
        hint: "Align the entire cliff relief showing the seven rock figures.",
        xpReward: 50
      }
    ],
    quizzes: [
      {
        question: "What does the name 'Buduruwagala' translate to?",
        options: ["Golden Temple", "The Rock of Buddha Sculptures", "Sacred Forest", "Mountain of Light"],
        correctIndex: 1
      },
      {
        question: "How tall is the central standing rock-cut Buddha statue at Buduruwagala?",
        options: ["25 feet", "38 feet", "51 feet (tallest in Sri Lanka)", "80 feet"],
        correctIndex: 2
      },
      {
        question: "How many statues in total are carved on the cliff face at Buduruwagala?",
        options: ["3", "5", "7 figures arranged in two flanking groups of three and a central Buddha", "12"],
        correctIndex: 2
      },
      {
        question: "Which school of Buddhist thought is reflected in the Bodhisattva figures at Buduruwagala?",
        options: ["Mahayana Buddhist traditions", "Theravada exclusively", "Vajrayana tantric", "Zen"],
        correctIndex: 0
      },
      {
        question: "What trace material is still visible on the carved robes of the central Buddha figure?",
        options: ["Traces of original stucco plaster and orange-colored paint", "Pure gold foil", "Bronze plating", "Silver leaf"],
        correctIndex: 0
      }
    ]
  }
];

export const sideQuestsData = [
  {
    id: "social_media",
    name: "Social Media Presence",
    description: "Share about your visit",
    xp: 5,
    duration: "10 mins",
    icon: "icons/social media presence icon.png"
  },
  {
    id: "local_food",
    name: "Local Food",
    description: "Try a traditional dish",
    xp: 5,
    duration: "20 mins",
    icon: "icons/local food icon.png"
  },
  {
    id: "wandering_around",
    name: "Wandering Around",
    description: "Visit a nearby site",
    xp: 5,
    duration: "20 mins",
    icon: "icons/Wandering Around icon.png"
  },
  {
    id: "wildlife_spotting",
    name: "Wildlife Spotting",
    description: "Spot and record an animal",
    xp: 5,
    duration: "20 mins",
    icon: "icons/Wildlife Spotting icon.png"
  },
  {
    id: "eco_warrior",
    name: "Eco-Warrior",
    description: "Conserve the environment",
    xp: 10,
    duration: "15 mins",
    icon: "icons/Eco Warrior icon.png"
  }
];

export const rewardsData = [
  {
    id: "cooking_experience",
    title: "FREE Traditional Cooking Experience",
    partner: "@Kandy Cafe",
    badge: "Sigiriya Scholar's Trial",
    isLocked: false,
    cost: 0,
    image: "Element Pictures/Traditional Cooking Experience.jpg"
  },
  {
    id: "trail_guide",
    title: "20% off Ancient Trail Guide",
    partner: "Expert guide for Mihintale walks.",
    isLocked: true,
    cost: 100,
    image: "Element Pictures/Trail Guide.webp"
  },
  {
    id: "artisan_crafts",
    title: "10% off Artisan Crafts",
    partner: "Authentic local handicraft store.",
    isLocked: true,
    cost: 100,
    image: "Element Pictures/Artisan Crafts.jpg.webp"
  }
];

if (typeof window !== 'undefined') {
  window.sitesData = sitesData;
  window.initialUserState = initialUserState;
  window.rankingScale = rankingScale;
  window.leaderboardPlayers = leaderboardPlayers;
  window.rewardsData = rewardsData;
}
