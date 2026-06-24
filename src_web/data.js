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
  role: "", // Explorer, Volunteer, Organizer, Quiz Master
  interests: [], // Nature & Outdoors, Heritage & History, Beaches & Coastal, Cultural Immersion
  signedPetitions: [], // Ritigala Forest
  donatedAmount: 0,
  joinedEvents: [], // Site Cleanup
  unlockedCoupons: [], // Sigiriya Scholar Coupon, etc.
  completedQuizzes: {}, // siteId -> true
  dwellTimeCompleted: {}, // siteId -> true
  verifiedPhotos: {} // siteId -> true
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
  // HERITAGE TRAIL
  {
    id: "mihintale",
    name: "Mihintale",
    district: "Anuradhapura District",
    category: "Heritage Trail",
    xpRange: "25 - 80 XP",
    minXp: 25,
    maxXp: 80,
    distance: "220km",
    openStatus: "Open now",
    description: "The sacred mountain peak revered as the birthplace of Buddhism in the country, marked by ancient monastic ruins, rock inscriptions, and pristine natural reserves.",
    image: "Element Pictures/Mihintale.JPG",
    latitude: 8.3508,
    longitude: 80.5186,
    referenceImage: "Element Pictures/Mihintale.JPG",
    quizzes: [
      {
        question: "What is the significance of the Mihintale rock peak in Sri Lankan history?",
        options: [
          "It was the first capital of Sri Lanka",
          "It is the site where Buddhism was introduced by Arahat Mahinda",
          "It is a royal palace built by Kashyapa",
          "It is a natural seaport of the ancient era"
        ],
        correctIndex: 1
      },
      {
        question: "Who was the reigning Sri Lankan king when Arahat Mahinda visited Mihintale?",
        options: [
          "King Dutusgemunu",
          "King Devanampiyatissa",
          "King Kashyapa",
          "King Vijayabahu I"
        ],
        correctIndex: 1
      },
      {
        question: "Which of the following ancient structures is famous for its elephant carvings at Mihintale?",
        options: [
          "The Kantaka Cetiya Vahalkada",
          "The Aradhana Gala peak",
          "The Ambasthala Dagoba",
          "The Sinha Pokuna (Lion Pond)"
        ],
        correctIndex: 0
      },
      {
        question: "What unique function did the Mihintale Hospital serve in antiquity?",
        options: [
          "It was a military barracks",
          "It is one of the oldest recorded hospitals in the world, with stone bath tubs for herbal treatment",
          "It was a royal treasury",
          "It was a university for astronomy"
        ],
        correctIndex: 1
      },
      {
        question: "What is the name of the famous massive pond situated halfway up the Mihintale mountain?",
        options: [
          "Basawakkulama reservoir",
          "Kaludiya Pokuna (Black Water Pond)",
          "Abhayagiri pond",
          "Tissa Wewa"
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: "sigiriya",
    name: "Sigiriya",
    district: "Matale District",
    category: "Heritage Trail",
    xpRange: "25 - 80 XP",
    minXp: 25,
    maxXp: 80,
    distance: "160km",
    openStatus: "Open now",
    description: "An ancient rock fortress constructed by King Kashyapa, celebrated for its advanced water gardens, stunning fifth-century frescoes of celestial maidens, and the colossal lion paw gate.",
    image: "Element Pictures/Sigiriya-LionRock.jpg",
    latitude: 7.9570,
    longitude: 80.7603,
    referenceImage: "Element Pictures/Sigiriya-LionRock.jpg",
    quizzes: [
      {
        question: "Which Sri Lankan king created the Sigiriya Rock Fortress?",
        options: [
          "King Devanampiyatissa",
          "King Dutugemunu",
          "King Kashyapa",
          "King Parakramabahu I"
        ],
        correctIndex: 2
      },
      {
        question: "Sigiriya is globally famous for which ancient artistic creations painted on the rock face?",
        options: [
          "Carvings of war elephants",
          "Fresco paintings of celestial maidens (Sigiri Apsaras)",
          "Stone inscriptions in Brahmi script",
          "Sculptures of sleeping lions"
        ],
        correctIndex: 1
      },
      {
        question: "What structure stands at the entrance to the final palace summit at Sigiriya?",
        options: [
          "A massive bronze dragon gate",
          "Colossal Lion Paws carved out of stone",
          "Two giant cobra statues",
          "A double-moat drawbridge"
        ],
        correctIndex: 1
      },
      {
        question: "What is the purpose of the highly polished 'Mirror Wall' at Sigiriya?",
        options: [
          "To reflect sunrays and blind enemies",
          "It was used by the king to view his reflection",
          "It contains ancient graffiti poems written by visitors dating back to the 8th century",
          "It was a military signaling device"
        ],
        correctIndex: 2
      },
      {
        question: "Which unique layout style is utilized in Sigiriya's royal pleasure gardens?",
        options: [
          "Terraced mountain farming layout",
          "Symmetrical hydraulic water gardens, boulders, and terraced gardens",
          "Traditional dry zone scrub jungle",
          "A maze of vertical underground caves"
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: "ruwanweliseya",
    name: "Ruwanweliseya",
    district: "Anuradhapura District",
    category: "Heritage Trail",
    xpRange: "25 - 80 XP",
    minXp: 25,
    maxXp: 80,
    distance: "215km",
    openStatus: "Open now",
    description: "A monumental bubble-shaped stupa built by King Dutugemunu in the ancient capital Anuradhapura, venerated as a marvel of ancient civil engineering and Buddhist architecture.",
    image: "Element Pictures/Ruwanweliseya.jpg",
    latitude: 8.3503,
    longitude: 80.3962,
    referenceImage: "Element Pictures/Donations Stupa.jpg",
    quizzes: [
      {
        question: "Which ancient monarch initiated the construction of the sacred Ruwanweliseya Stupa?",
        options: [
          "King Valagamba",
          "King Devanampiyatissa",
          "King Dutugemunu",
          "King Mahasen"
        ],
        correctIndex: 2
      },
      {
        question: "What geometrical shape is the main dome of the Ruwanweliseya Stupa traditionally based on?",
        options: [
          "Dhanyakara (Heap of Paddy shape)",
          "Bubbulakara (Bubble shape)",
          "Padmakara (Lotus shape)",
          "Ghantakara (Bell shape)"
        ],
        correctIndex: 1
      },
      {
        question: "Which unique feature circles the base platform of the Ruwanweliseya stupa outer wall?",
        options: [
          "A wall of brick-carved elephants standing side-by-side (Elephant Wall)",
          "A deep circular moat filled with lotus flowers",
          "A ring of bronze spears",
          "Statues of ancient Buddhist kings"
        ],
        correctIndex: 0
      },
      {
        question: "Which architectural components are situated at the four cardinal entrances of the stupa?",
        options: [
          "Fresco caves",
          "Vahalkadas (decorative frontispieces)",
          "Stone drawbridges",
          "Hydraulic fountains"
        ],
        correctIndex: 1
      },
      {
        question: "What materials were historically used in the foundation of Ruwanweliseya to support its immense weight?",
        options: [
          "Solid iron sheets and heavy granite blocks",
          "Layers of crushed stones, clay, lead sheets, and a plaster mixture reinforced with animal hide",
          "Hollow wooden logs filled with dry sand",
          "Baked clay pots piled on top of each other"
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: "temple_of_tooth",
    name: "Temple of the Tooth",
    district: "Kandy District",
    category: "Heritage Trail",
    xpRange: "25 - 80 XP",
    minXp: 25,
    maxXp: 80,
    distance: "115km",
    openStatus: "Open now",
    description: "The royal palace complex of Kandy housing the sacred tooth relic of Gautama Buddha, symbolizing sovereignty, rich Kandyan architecture, and royal heritage.",
    image: "Element Pictures/Temple of the tooth.jpg",
    latitude: 7.2936,
    longitude: 80.6413,
    referenceImage: "Element Pictures/Temple of the tooth.jpg",
    quizzes: [
      {
        question: "Where is the Sri Dalada Maligawa (Temple of the Sacred Tooth Relic) located?",
        options: [
          "Anuradhapura",
          "Polonnaruwa",
          "Kandy",
          "Jaffna"
        ],
        correctIndex: 2
      },
      {
        question: "Historically, what did possession of the Sacred Tooth Relic represent for Sri Lankan monarchs?",
        options: [
          "Command over the merchant fleets",
          "The divine right and legitimate authority to rule the country",
          "Immunity from foreign invasions",
          "Direct control over the pearl fisheries"
        ],
        correctIndex: 1
      },
      {
        question: "What is the name of the octagonal pavilion building situated at the front of the Kandy Temple?",
        options: [
          "Pattirippuwa",
          "Sandakada Pahana",
          "Vahalkada",
          "Gedige"
        ],
        correctIndex: 0
      },
      {
        question: "Which major annual cultural procession parading Kandy features the sacred casket?",
        options: [
          "The Duruthu Perahera",
          "The Esala Perahera",
          "The Vesak Kalapaya",
          "The Katharagama festival"
        ],
        correctIndex: 1
      },
      {
        question: "What decorative motif characterizes the surrounding protective walls of Kandy Lake and the temple moat?",
        options: [
          "Lion posture carvings",
          "Diyarella Bemma (Wave swell wall) and clouds pattern openings",
          "Bronze spikes",
          "Lotus petal panels"
        ],
        correctIndex: 1
      }
    ]
  },
  // HIDDEN GEMS
  {
    id: "dowa_rock_temple",
    name: "Dowa Rock Temple",
    district: "Badulla District",
    category: "Hidden Gems",
    xpRange: "75 - 100 XP",
    minXp: 75,
    maxXp: 100,
    distance: "180km",
    openStatus: "Open now",
    description: "A historic cave temple tucked in the Uva province hills, famous for its massive unfinished 38-foot tall standing Buddha statue carved directly into a sheer rock cliff.",
    image: "Element Pictures/Dowa Rock Temple.jpg",
    latitude: 6.8202,
    longitude: 81.0255,
    referenceImage: "Element Pictures/Dowa Rock Temple.jpg",
    quizzes: [
      {
        question: "What is the most prominent visual attraction at the Dowa Rock Temple?",
        options: [
          "A golden reclining Buddha statue",
          "A massive, unfinished 38-foot tall standing Buddha statue carved directly into the rock face",
          "An underground crystal spring",
          "A wall painted entirely with ancient map routes"
        ],
        correctIndex: 1
      },
      {
        question: "Which ancient monarch is locally credited with establishing the cave sanctuary at Dowa?",
        options: [
          "King Dutugemunu",
          "King Valagamba (Vattagamani Abhaya)",
          "King Kashyapa",
          "King Devanampiyatissa"
        ],
        correctIndex: 1
      },
      {
        question: "The rock carvings at Dowa show influences of which historical artistic school?",
        options: [
          "Modern abstract sculpture",
          "Late Anuradhapura and early Polonnaruwa regional rock art styles",
          "Roman classical sculpting",
          "Chola dynasty metalworks"
        ],
        correctIndex: 1
      },
      {
        question: "What unique reptile motif is painted on the ceiling of the shrine cave protecting the shrine?",
        options: [
          "A three-headed cobra battling a giant viper",
          "A giant sea turtle",
          "A coiled python guardian",
          "A green forest lizard"
        ],
        correctIndex: 0
      },
      {
        question: "Dowa Rock Temple is situated close to which popular hill station town in Badulla?",
        options: [
          "Nuwara Eliya",
          "Ella",
          "Haputale",
          "Bandarawela"
        ],
        correctIndex: 3
      }
    ]
  },
  {
    id: "ritigala_monastery",
    name: "Ritigala Monastery",
    district: "Anuradhapura District",
    category: "Hidden Gems",
    xpRange: "75 - 100 XP",
    minXp: 75,
    maxXp: 100,
    distance: "195km",
    openStatus: "Open now",
    description: "An ancient mountain range housing the mysterious ruins of a forest-dwelling monastery, renowned for its austere architecture (Padhanaghara), beautiful stone paths, bathing pools, and herbal gardens.",
    image: "Element Pictures/Ritigala Monastery.jpg",
    latitude: 8.1139,
    longitude: 80.6558,
    referenceImage: "Element Pictures/Ritigala Monastery.jpg",
    quizzes: [
      {
        question: "What is unique about the ancient monastic structures (Padhanagharas) found at Ritigala?",
        options: [
          "They are decorated with gold leaf and gems",
          "They are completely devoid of any decorative carvings, prioritizing deep ascetic isolation and simple stone geometry",
          "They are built on high stilts in dry mud",
          "They have massive stupas surrounding them"
        ],
        correctIndex: 1
      },
      {
        question: "Which community of forest-dwelling monks historically inhabited the secluded peaks of Ritigala?",
        options: [
          "The Tapovana monks (Pamsukulika fraternity)",
          "Foreign Roman monks",
          "Royal guards",
          "Spice merchants"
        ],
        correctIndex: 0
      },
      {
        question: "What botanical anomaly makes the peak of Ritigala different from the surrounding dry zone plains?",
        options: [
          "It has no vegetation due to volcanic activity",
          "It contains a unique microclimate supporting wet-zone flora, medicinal herbs, and rare orchids on the misty summit",
          "It grows only pine and fir trees",
          "It is completely covered in swamp mangrove plants"
        ],
        correctIndex: 1
      },
      {
        question: "What impressive stone structures connect the ancient cells and platforms of Ritigala?",
        options: [
          "Hanging vine suspension bridges",
          "Meticulously paved stone-cut walkways and steps traversing the dense forest slopes",
          "Hollow clay pipelines",
          "Symmetrical marble corridors"
        ],
        correctIndex: 1
      },
      {
        question: "Which massive circular stone pond structure lies near the entrance of the Ritigala ruins?",
        options: [
          "Banda Pokuna (large bathing pool with stone steps)",
          "Sinha Pokuna",
          "Kaludiya Pokuna",
          "Tissa Wewa"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    id: "yudaganawa",
    name: "Yudaganawa",
    district: "Badulla District",
    category: "Hidden Gems",
    xpRange: "75 - 100 XP",
    minXp: 75,
    maxXp: 100,
    distance: "230km",
    openStatus: "Open now",
    description: "One of the largest colossal stupas in Sri Lanka, constructed in the 12th century, historical battlefield where King Dutugemunu and his brother Tissa fought for sovereignty.",
    image: "Element Pictures/Yudaganawa.jpg",
    latitude: 6.7292,
    longitude: 81.2831,
    referenceImage: "Element Pictures/Yudaganawa.jpg",
    quizzes: [
      {
        question: "What historic event occurred at the site of Yudaganawa in the Uva region?",
        options: [
          "The final coronation of King Parakramabahu",
          "The battlefield clash between brothers Prince Dutugemunu and Prince Tissa over the state crown",
          "The signing of the Kandyan Convention",
          "The first planting of the sacred Bo Tree"
        ],
        correctIndex: 1
      },
      {
        question: "What is unique about the structural layout of the Yudaganawa Stupa?",
        options: [
          "It is built on a massive elevated wooden deck",
          "It is a colossal, flat-topped semi-finished stupa (Kota Vehera style)",
          "It is carved entirely out of a single piece of green rock",
          "It has five rings of defensive moats surrounding it"
        ],
        correctIndex: 1
      },
      {
        question: "Yudaganawa is situated in the proximity of which historic town in the Moneragala/Badulla area?",
        options: [
          "Buttala",
          "Wellawaya",
          "Ella",
          "Mahiyanganaya"
        ],
        correctIndex: 0
      },
      {
        question: "What does the name 'Yudaganawa' literally translate to in Sinhala?",
        options: [
          "Peaceful garden",
          "Arena of Battle / Battleground",
          "Temple of Sovereignty",
          "Elephant lake"
        ],
        correctIndex: 1
      },
      {
        question: "Which of the following is found near Yudaganawa, representing ancient irrigation marvels?",
        options: [
          "Yudaganawa Wewa (irrigation tank)",
          "Senanayake Samudra",
          "Kala Wewa",
          "Parakrama Samudra"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    id: "pilikuttuwa",
    name: "Pilikuttuwa Temple",
    district: "Gampaha District",
    category: "Hidden Gems",
    xpRange: "75 - 100 XP",
    minXp: 75,
    maxXp: 100,
    distance: "35km",
    openStatus: "Open now",
    description: "An ancient forest cave sanctuary close to Colombo, famous for housing 99 drip-ledged caves, historic murals, wooden bridge over natural water flows, and pre-historic rock formations.",
    image: "Element Pictures/Pilikuttuwa Temple.jpg",
    latitude: 7.0709,
    longitude: 80.0384,
    referenceImage: "Element Pictures/Pilikuttuwa Temple.jpg",
    quizzes: [
      {
        question: "What is the primary natural and historical feature of the Pilikuttuwa Temple complex?",
        options: [
          "A massive multi-tiered stone pagoda",
          "A dense network of 99 drip-ledged rock shelter caves used by ancient monks",
          "A natural volcanic geyser",
          "A salt desert flat"
        ],
        correctIndex: 1
      },
      {
        question: "What famous historic bridge structure is preserved within the Pilikuttuwa sanctuary?",
        options: [
          "A massive iron drawbridge",
          "An ancient Dutch-era wooden canopy bridge spanning a stream",
          "A marble arched bridge",
          "A hanging bamboo rope bridge"
        ],
        correctIndex: 1
      },
      {
        question: "Which period of Sri Lankan art do the interior temple cave murals and frescoes at Pilikuttuwa belong to?",
        options: [
          "Anuradhapura Period",
          "Kandyan Kingdom and early colonial transitions",
          "Modern contemporary art",
          "Prehistoric stone paintings"
        ],
        correctIndex: 1
      },
      {
        question: "Which historic king took refuge in the caves of Pilikuttuwa during foreign invasions?",
        options: [
          "King Kashyapa",
          "King Valagamba",
          "King Vijayabahu",
          "King Dutugemunu"
        ],
        correctIndex: 1
      },
      {
        question: "What does the drip-ledge (Kataraya) on the caves of Pilikuttuwa do?",
        options: [
          "It funnels drinking water into inside stone cups",
          "It diverts monsoon rainwater away from entering the cave shelters, keeping the interior dry",
          "It serves as a climbing groove for soldiers",
          "It represents royal lineage crowns"
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: "maligawila",
    name: "Maligawila Statue",
    district: "Moneragala District",
    category: "Hidden Gems",
    xpRange: "75 - 100 XP",
    minXp: 75,
    maxXp: 100,
    distance: "240km",
    openStatus: "Open now",
    description: "The home of a colossal 7th-century standing Buddha statue carved out of a single limestone rock, considered one of the absolute masterpieces of ancient sculpting.",
    image: "Element Pictures/maligawila buddha statue.jpg",
    latitude: 6.7352,
    longitude: 81.3392,
    referenceImage: "Element Pictures/maligawila buddha statue.jpg",
    quizzes: [
      {
        question: "What masterpiece of Sri Lankan limestone sculpture is found at Maligawila?",
        options: [
          "A massive sleeping clay Buddha",
          "A colossal 36-foot standing Buddha statue carved out of a single crystalline limestone block",
          "A gold-plated stupa dome",
          "A row of terracotta warriors"
        ],
        correctIndex: 1
      },
      {
        question: "Which ancient prince is historically credited with crafting this massive statue in the 7th century?",
        options: [
          "Prince Kashyapa",
          "Prince Agrabodhi",
          "Prince Dutugemunu",
          "Prince Valagamba"
        ],
        correctIndex: 1
      },
      {
        question: "Which neighboring site at Maligawila features a giant statue of Avalokiteshvara Bodhisattva?",
        options: [
          "Dambegoda (Dambegoda Bodhisattva Statue)",
          "Sigiriya rock",
          "Buduruvagala caves",
          "Aukana"
        ],
        correctIndex: 0
      },
      {
        question: "What state of preservation was the Maligawila Buddha found in during the late 20th century before restoration?",
        options: [
          "Fully intact under a pristine dome",
          "Fallen, broken into several massive segments in the dense jungle",
          "Partially buried in beach sand dunes",
          "Submerged in a large reservoir lake"
        ],
        correctIndex: 1
      },
      {
        question: "What architectural feature originally enclosed the massive standing Buddha statue?",
        options: [
          "A circular brick and stone Image House (Patimaghara)",
          "A simple open-air wood canopy",
          "A series of deep stone trenches",
          "A tall metal tower"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    id: "ibbankatuwa",
    name: "Ibbankatuwa Tombs",
    district: "Matale District",
    category: "Hidden Gems",
    xpRange: "75 - 100 XP",
    minXp: 75,
    maxXp: 100,
    distance: "150km",
    openStatus: "Open now",
    description: "A famous megalithic prehistoric burial ground dating back to the Iron Age, showcasing stone cist graves, ancient pottery, beads, and advanced early societal burials.",
    image: "Element Pictures/Ibbankatuwa Tombs.JPG",
    latitude: 7.8596,
    longitude: 80.6481,
    referenceImage: "Element Pictures/Ibbankatuwa Tombs.JPG",
    quizzes: [
      {
        question: "What unique prehistoric archaeological site is found at Ibbankatuwa?",
        options: [
          "An ancient palace courtyard",
          "A massive Megalithic Cist Burial Ground from the protohistoric Iron Age (dating back 2500+ years)",
          "An ancient port for gem ships",
          "A prehistoric tool-making cave"
        ],
        correctIndex: 1
      },
      {
        question: "What typical shape do the grave chambers (cists) at Ibbankatuwa have?",
        options: [
          "Circular deep stone wells",
          "Four granite slab walls forming a rectangular box capped with a large stone cover slab",
          "Triangular pyramids built from clay",
          "Hollow logs buried vertically"
        ],
        correctIndex: 1
      },
      {
        question: "Which of the following artifacts were found inside the cist tombs, proving ancient trade connections?",
        options: [
          "Roman gold coins",
          "Beads made of carnelian, onyx, agate, clay pottery urns containing ashes, and copper tools",
          "Porcelain plates from China",
          "Bronze guns"
        ],
        correctIndex: 1
      },
      {
        question: "The residents of the pre-historic Ibbankatuwa era primarily used which major metal classification?",
        options: [
          "Only flint stone tools",
          "Iron and Copper (Megalithic Iron Age culture)",
          "Aluminum and Steel",
          "Pure Platinum"
        ],
        correctIndex: 1
      },
      {
        question: "Near which major central province city is the Ibbankatuwa Megalithic Site situated?",
        options: [
          "Kandy",
          "Dambulla",
          "Jaffna",
          "Negombo"
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: "galle_fort",
    name: "Galle Fort",
    district: "Galle District",
    category: "Heritage Trail",
    xpRange: "25 - 80 XP",
    minXp: 25,
    maxXp: 80,
    distance: "125km",
    openStatus: "Open now",
    description: "A coastal fortress built by the Portuguese, heavily fortified by the Dutch, blending European military architecture and South Asian traditions.",
    image: "Element Pictures/Galle Fort.jpg",
    latitude: 6.0267,
    longitude: 80.2167,
    referenceImage: "Element Pictures/Galle Fort.jpg",
    quizzes: [
      {
        question: "Which European nation first constructed fortifications in Galle before the Dutch expanded it?",
        options: [
          "The British",
          "The Portuguese",
          "The French",
          "The Spanish"
        ],
        correctIndex: 1
      },
      {
        question: "What is the famous white structure standing on the Utrecht Bastion overlooking the ocean in Galle Fort?",
        options: [
          "The Clock Tower",
          "The Galle Lighthouse",
          "The Dutch Reformed Church dome",
          "The Maritime Museum tower"
        ],
        correctIndex: 1
      },
      {
        question: "Galle Fort is recognized globally under which prestigious classification?",
        options: [
          "A Biosphere Reserve",
          "A UNESCO World Heritage Site",
          "An industrial trade zone",
          "A national sanctuary park"
        ],
        correctIndex: 1
      },
      {
        question: "What is the name of the narrow stone gateway featuring a coat of arms of the VOC Dutch East India Company?",
        options: [
          "The Galle Old Gate",
          "The Lighthouse gate",
          "The Main Bastion drawbridge",
          "The Sea Gate"
        ],
        correctIndex: 0
      },
      {
        question: "What architectural feature characterizes the traditional Dutch villa residential lanes in Galle Fort?",
        options: [
          "Tall modern glass high-rises",
          "Verandah houses, terracotta tile roofs, pillared arches, and paved stone inner courtyards",
          "Circular wood log cabins",
          "Subterranean cave rooms"
        ],
        correctIndex: 1
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
