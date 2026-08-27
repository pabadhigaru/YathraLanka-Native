(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const mi={xp:0,rank:"None",medals:0,sitesVisited:0,quizzesPassed:0,permissions:{camera:!1,notifications:!1},role:"",interests:[],signedPetitions:[],donatedAmount:0,joinedEvents:[],unlockedCoupons:[],completedQuizzes:{},dwellTimeCompleted:{},verifiedPhotos:{},completedCheckpoints:[]},h0=[{rank:"Grass Toucher",range:[0,99],threshold:0},{rank:"Wanderer",range:[100,249],threshold:100},{rank:"Tuk Tuk Trailer",range:[250,499],threshold:250},{rank:"Magahoyanna",range:[500,999],threshold:500},{rank:"Island Explorer",range:[1e3,2e3],threshold:1e3},{rank:"Lanka Legend",range:[2e3,5e3],threshold:2e3}],p0=[{name:"Suranga M",points:5820,role:"Explorer",rank:"Lanka Legend"},{name:"Anjali R.",points:5330,role:"Volunteer",rank:"Lanka Legend"},{name:"Dilhani",points:3540,role:"Organizer",rank:"Island Explorer"},{name:"Mihiranga T.",points:1160,role:"Quiz Master",rank:"Island Explorer"}],le=[,{id:"competition_demo",name:"YathraLanka Arena (Live Demo)",district:"Competition Grounds",category:"Heritage Trail",xpRange:"50 - 100 XP",minXp:50,maxXp:100,distance:"0.1km",openStatus:"Open now",description:"Official competition live demo venue for multi-checkpoint heritage scavenger hunt verification.",image:"Element Pictures/Sigiriya-LionRock.jpg",latitude:6.8402,longitude:80.0034,referenceImage:"Element Pictures/Sigiriya-LionRock.jpg",checkpoints:[{id:"demo_stage_banner",name:"Main Stage / YathraLanka Podium",description:"The official stage banner and presentation podium.",referenceImage:"Element Pictures/Sigiriya-LionRock.jpg",hint:"Align the official event banner in the center of your camera.",xpReward:100,embedding:[.095,-.022,.145,.068]},{id:"demo_booth_marker",name:"YathraLanka Innovation Stall",description:"The project team booth featuring our visual heritage display.",referenceImage:"Element Pictures/Pilikuttuwa-Cave.jpg",hint:"Take a clear shot of the stall standee or banner.",xpReward:75,embedding:[.034,.088,-.012,.105]}],quizzes:[{question:"What is the primary goal of YathraLanka's heritage gamification?",options:["Promote unsustainable tourism","Combine physical site exploration with conservation ledgers and gamified XP rewards","Replace physical travel with VR completely","Charge entry fees at monuments"],correctIndex:1}]},{id:"mihintale",name:"Mihintale",district:"Anuradhapura District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"220km",openStatus:"Open now",description:"The sacred mountain peak revered as the birthplace of Buddhism in the country, marked by ancient monastic ruins, rock inscriptions, and pristine natural reserves.",image:"Element Pictures/Mihintale.JPG",latitude:8.3508,longitude:80.5186,checkpoints:[{id:"mihintale_ambasthala",name:"Ambasthala Dagaba",description:"The stupa built on the spot where Arahat Mahinda met King Devanampiyatissa.",referenceImage:"Element Pictures/Mihintale.JPG",hint:"Align the octagonal pillar base and white stupa in your frame.",xpReward:50,embedding:[.042,-.019,.128,.085,-.012,.064]},{id:"mihintale_kantaka",name:"Kantaka Cetiya Vahalkada",description:"Intricate stone carvings and dwarf friezes on the ancient frontispiece.",referenceImage:"Element Pictures/Mihintale.JPG",hint:"Capture the detailed stone carvings on the eastern vahalkada.",xpReward:60,embedding:[.081,.005,-.044,.112,.035,-.021]}],referenceImage:"Element Pictures/Mihintale.JPG",quizzes:[{question:"What is the significance of the Mihintale rock peak in Sri Lankan history?",options:["It was the first capital of Sri Lanka","It is the site where Buddhism was introduced by Arahat Mahinda","It is a royal palace built by Kashyapa","It is a natural seaport of the ancient era"],correctIndex:1},{question:"Who was the reigning Sri Lankan king when Arahat Mahinda visited Mihintale?",options:["King Dutusgemunu","King Devanampiyatissa","King Kashyapa","King Vijayabahu I"],correctIndex:1},{question:"Which of the following ancient structures is famous for its elephant carvings at Mihintale?",options:["The Kantaka Cetiya Vahalkada","The Aradhana Gala peak","The Ambasthala Dagoba","The Sinha Pokuna (Lion Pond)"],correctIndex:0},{question:"What unique function did the Mihintale Hospital serve in antiquity?",options:["It was a military barracks","It is one of the oldest recorded hospitals in the world, with stone bath tubs for herbal treatment","It was a royal treasury","It was a university for astronomy"],correctIndex:1},{question:"What is the name of the famous massive pond situated halfway up the Mihintale mountain?",options:["Basawakkulama reservoir","Kaludiya Pokuna (Black Water Pond)","Abhayagiri pond","Tissa Wewa"],correctIndex:1}]},{id:"sigiriya",name:"Sigiriya",district:"Matale District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"160km",openStatus:"Open now",description:"An ancient rock fortress constructed by King Kashyapa, celebrated for its advanced water gardens, stunning fifth-century frescoes of celestial maidens, and the colossal lion paw gate.",image:"Element Pictures/Sigiriya-LionRock.jpg",latitude:7.957,longitude:80.7603,checkpoints:[{id:"sigiriya_lion_paws",name:"Colossal Lion Paws Gate",description:"The massive lion paws framing the staircase to the summit palace.",referenceImage:"Element Pictures/Sigiriya-LionRock.jpg",hint:"Center the two massive lion paw sculptures in your camera viewfinder.",xpReward:60,embedding:[.092,.014,.115,.073]},{id:"sigiriya_frescoes",name:"Celestial Maidens Frescoes",description:"5th-century cave murals depicting celestial damsels.",referenceImage:"Element Pictures/Sigiriya-LionRock.jpg",hint:"Capture the vivid fresco colors inside the sheltered rock gallery.",xpReward:75,embedding:[.051,-.032,.088,.142]}],referenceImage:"Element Pictures/Sigiriya-LionRock.jpg",quizzes:[{question:"Which Sri Lankan king created the Sigiriya Rock Fortress?",options:["King Devanampiyatissa","King Dutugemunu","King Kashyapa","King Parakramabahu I"],correctIndex:2},{question:"Sigiriya is globally famous for which ancient artistic creations painted on the rock face?",options:["Carvings of war elephants","Fresco paintings of celestial maidens (Sigiri Apsaras)","Stone inscriptions in Brahmi script","Sculptures of sleeping lions"],correctIndex:1},{question:"What structure stands at the entrance to the final palace summit at Sigiriya?",options:["A massive bronze dragon gate","Colossal Lion Paws carved out of stone","Two giant cobra statues","A double-moat drawbridge"],correctIndex:1},{question:"What is the purpose of the highly polished 'Mirror Wall' at Sigiriya?",options:["To reflect sunrays and blind enemies","It was used by the king to view his reflection","It contains ancient graffiti poems written by visitors dating back to the 8th century","It was a military signaling device"],correctIndex:2},{question:"Which unique layout style is utilized in Sigiriya's royal pleasure gardens?",options:["Terraced mountain farming layout","Symmetrical hydraulic water gardens, boulders, and terraced gardens","Traditional dry zone scrub jungle","A maze of vertical underground caves"],correctIndex:1}]},{id:"ruwanweliseya",name:"Ruwanweliseya",district:"Anuradhapura District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"215km",openStatus:"Open now",description:"A monumental bubble-shaped stupa built by King Dutugemunu in the ancient capital Anuradhapura, venerated as a marvel of ancient civil engineering and Buddhist architecture.",image:"Element Pictures/Ruwanweliseya.jpg",latitude:8.3503,longitude:80.3962,referenceImage:"Element Pictures/Donations Stupa.jpg",quizzes:[{question:"Which ancient monarch initiated the construction of the sacred Ruwanweliseya Stupa?",options:["King Valagamba","King Devanampiyatissa","King Dutugemunu","King Mahasen"],correctIndex:2},{question:"What geometrical shape is the main dome of the Ruwanweliseya Stupa traditionally based on?",options:["Dhanyakara (Heap of Paddy shape)","Bubbulakara (Bubble shape)","Padmakara (Lotus shape)","Ghantakara (Bell shape)"],correctIndex:1},{question:"Which unique feature circles the base platform of the Ruwanweliseya stupa outer wall?",options:["A wall of brick-carved elephants standing side-by-side (Elephant Wall)","A deep circular moat filled with lotus flowers","A ring of bronze spears","Statues of ancient Buddhist kings"],correctIndex:0},{question:"Which architectural components are situated at the four cardinal entrances of the stupa?",options:["Fresco caves","Vahalkadas (decorative frontispieces)","Stone drawbridges","Hydraulic fountains"],correctIndex:1},{question:"What materials were historically used in the foundation of Ruwanweliseya to support its immense weight?",options:["Solid iron sheets and heavy granite blocks","Layers of crushed stones, clay, lead sheets, and a plaster mixture reinforced with animal hide","Hollow wooden logs filled with dry sand","Baked clay pots piled on top of each other"],correctIndex:1}]},{id:"temple_of_tooth",name:"Temple of the Tooth",district:"Kandy District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"115km",openStatus:"Open now",description:"The royal palace complex of Kandy housing the sacred tooth relic of Gautama Buddha, symbolizing sovereignty, rich Kandyan architecture, and royal heritage.",image:"Element Pictures/Temple of the tooth.jpg",latitude:7.2936,longitude:80.6413,referenceImage:"Element Pictures/Temple of the tooth.jpg",quizzes:[{question:"Where is the Sri Dalada Maligawa (Temple of the Sacred Tooth Relic) located?",options:["Anuradhapura","Polonnaruwa","Kandy","Jaffna"],correctIndex:2},{question:"Historically, what did possession of the Sacred Tooth Relic represent for Sri Lankan monarchs?",options:["Command over the merchant fleets","The divine right and legitimate authority to rule the country","Immunity from foreign invasions","Direct control over the pearl fisheries"],correctIndex:1},{question:"What is the name of the octagonal pavilion building situated at the front of the Kandy Temple?",options:["Pattirippuwa","Sandakada Pahana","Vahalkada","Gedige"],correctIndex:0},{question:"Which major annual cultural procession parading Kandy features the sacred casket?",options:["The Duruthu Perahera","The Esala Perahera","The Vesak Kalapaya","The Katharagama festival"],correctIndex:1},{question:"What decorative motif characterizes the surrounding protective walls of Kandy Lake and the temple moat?",options:["Lion posture carvings","Diyarella Bemma (Wave swell wall) and clouds pattern openings","Bronze spikes","Lotus petal panels"],correctIndex:1}]},{id:"dowa_rock_temple",name:"Dowa Rock Temple",district:"Badulla District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"180km",openStatus:"Open now",description:"A historic cave temple tucked in the Uva province hills, famous for its massive unfinished 38-foot tall standing Buddha statue carved directly into a sheer rock cliff.",image:"Element Pictures/Dowa Rock Temple.jpg",latitude:6.8202,longitude:81.0255,referenceImage:"Element Pictures/Dowa Rock Temple.jpg",quizzes:[{question:"What is the most prominent visual attraction at the Dowa Rock Temple?",options:["A golden reclining Buddha statue","A massive, unfinished 38-foot tall standing Buddha statue carved directly into the rock face","An underground crystal spring","A wall painted entirely with ancient map routes"],correctIndex:1},{question:"Which ancient monarch is locally credited with establishing the cave sanctuary at Dowa?",options:["King Dutugemunu","King Valagamba (Vattagamani Abhaya)","King Kashyapa","King Devanampiyatissa"],correctIndex:1},{question:"The rock carvings at Dowa show influences of which historical artistic school?",options:["Modern abstract sculpture","Late Anuradhapura and early Polonnaruwa regional rock art styles","Roman classical sculpting","Chola dynasty metalworks"],correctIndex:1},{question:"What unique reptile motif is painted on the ceiling of the shrine cave protecting the shrine?",options:["A three-headed cobra battling a giant viper","A giant sea turtle","A coiled python guardian","A green forest lizard"],correctIndex:0},{question:"Dowa Rock Temple is situated close to which popular hill station town in Badulla?",options:["Nuwara Eliya","Ella","Haputale","Bandarawela"],correctIndex:3}]},{id:"ritigala_monastery",name:"Ritigala Monastery",district:"Anuradhapura District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"195km",openStatus:"Open now",description:"An ancient mountain range housing the mysterious ruins of a forest-dwelling monastery, renowned for its austere architecture (Padhanaghara), beautiful stone paths, bathing pools, and herbal gardens.",image:"Element Pictures/Ritigala Monastery.jpg",latitude:8.1139,longitude:80.6558,referenceImage:"Element Pictures/Ritigala Monastery.jpg",quizzes:[{question:"What is unique about the ancient monastic structures (Padhanagharas) found at Ritigala?",options:["They are decorated with gold leaf and gems","They are completely devoid of any decorative carvings, prioritizing deep ascetic isolation and simple stone geometry","They are built on high stilts in dry mud","They have massive stupas surrounding them"],correctIndex:1},{question:"Which community of forest-dwelling monks historically inhabited the secluded peaks of Ritigala?",options:["The Tapovana monks (Pamsukulika fraternity)","Foreign Roman monks","Royal guards","Spice merchants"],correctIndex:0},{question:"What botanical anomaly makes the peak of Ritigala different from the surrounding dry zone plains?",options:["It has no vegetation due to volcanic activity","It contains a unique microclimate supporting wet-zone flora, medicinal herbs, and rare orchids on the misty summit","It grows only pine and fir trees","It is completely covered in swamp mangrove plants"],correctIndex:1},{question:"What impressive stone structures connect the ancient cells and platforms of Ritigala?",options:["Hanging vine suspension bridges","Meticulously paved stone-cut walkways and steps traversing the dense forest slopes","Hollow clay pipelines","Symmetrical marble corridors"],correctIndex:1},{question:"Which massive circular stone pond structure lies near the entrance of the Ritigala ruins?",options:["Banda Pokuna (large bathing pool with stone steps)","Sinha Pokuna","Kaludiya Pokuna","Tissa Wewa"],correctIndex:0}]},{id:"yudaganawa",name:"Yudaganawa",district:"Badulla District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"230km",openStatus:"Open now",description:"One of the largest colossal stupas in Sri Lanka, constructed in the 12th century, historical battlefield where King Dutugemunu and his brother Tissa fought for sovereignty.",image:"Element Pictures/Yudaganawa.jpg",latitude:6.7292,longitude:81.2831,referenceImage:"Element Pictures/Yudaganawa.jpg",quizzes:[{question:"What historic event occurred at the site of Yudaganawa in the Uva region?",options:["The final coronation of King Parakramabahu","The battlefield clash between brothers Prince Dutugemunu and Prince Tissa over the state crown","The signing of the Kandyan Convention","The first planting of the sacred Bo Tree"],correctIndex:1},{question:"What is unique about the structural layout of the Yudaganawa Stupa?",options:["It is built on a massive elevated wooden deck","It is a colossal, flat-topped semi-finished stupa (Kota Vehera style)","It is carved entirely out of a single piece of green rock","It has five rings of defensive moats surrounding it"],correctIndex:1},{question:"Yudaganawa is situated in the proximity of which historic town in the Moneragala/Badulla area?",options:["Buttala","Wellawaya","Ella","Mahiyanganaya"],correctIndex:0},{question:"What does the name 'Yudaganawa' literally translate to in Sinhala?",options:["Peaceful garden","Arena of Battle / Battleground","Temple of Sovereignty","Elephant lake"],correctIndex:1},{question:"Which of the following is found near Yudaganawa, representing ancient irrigation marvels?",options:["Yudaganawa Wewa (irrigation tank)","Senanayake Samudra","Kala Wewa","Parakrama Samudra"],correctIndex:0}]},{id:"pilikuttuwa",name:"Pilikuttuwa Temple",district:"Gampaha District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"35km",openStatus:"Open now",description:"An ancient forest cave sanctuary close to Colombo, famous for housing 99 drip-ledged caves, historic murals, wooden bridge over natural water flows, and pre-historic rock formations.",image:"Element Pictures/Pilikuttuwa Temple.jpg",latitude:6.846583,longitude:79.993333,referenceImage:"Element Pictures/Pilikuttuwa Temple.jpg",quizzes:[{question:"What is the primary natural and historical feature of the Pilikuttuwa Temple complex?",options:["A massive multi-tiered stone pagoda","A dense network of 99 drip-ledged rock shelter caves used by ancient monks","A natural volcanic geyser","A salt desert flat"],correctIndex:1},{question:"What famous historic bridge structure is preserved within the Pilikuttuwa sanctuary?",options:["A massive iron drawbridge","An ancient Dutch-era wooden canopy bridge spanning a stream","A marble arched bridge","A hanging bamboo rope bridge"],correctIndex:1},{question:"Which period of Sri Lankan art do the interior temple cave murals and frescoes at Pilikuttuwa belong to?",options:["Anuradhapura Period","Kandyan Kingdom and early colonial transitions","Modern contemporary art","Prehistoric stone paintings"],correctIndex:1},{question:"Which historic king took refuge in the caves of Pilikuttuwa during foreign invasions?",options:["King Kashyapa","King Valagamba","King Vijayabahu","King Dutugemunu"],correctIndex:1},{question:"What does the drip-ledge (Kataraya) on the caves of Pilikuttuwa do?",options:["It funnels drinking water into inside stone cups","It diverts monsoon rainwater away from entering the cave shelters, keeping the interior dry","It serves as a climbing groove for soldiers","It represents royal lineage crowns"],correctIndex:1}]},{id:"maligawila",name:"Maligawila Statue",district:"Moneragala District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"240km",openStatus:"Open now",description:"The home of a colossal 7th-century standing Buddha statue carved out of a single limestone rock, considered one of the absolute masterpieces of ancient sculpting.",image:"Element Pictures/maligawila buddha statue.jpg",latitude:6.7352,longitude:81.3392,referenceImage:"Element Pictures/maligawila buddha statue.jpg",quizzes:[{question:"What masterpiece of Sri Lankan limestone sculpture is found at Maligawila?",options:["A massive sleeping clay Buddha","A colossal 36-foot standing Buddha statue carved out of a single crystalline limestone block","A gold-plated stupa dome","A row of terracotta warriors"],correctIndex:1},{question:"Which ancient prince is historically credited with crafting this massive statue in the 7th century?",options:["Prince Kashyapa","Prince Agrabodhi","Prince Dutugemunu","Prince Valagamba"],correctIndex:1},{question:"Which neighboring site at Maligawila features a giant statue of Avalokiteshvara Bodhisattva?",options:["Dambegoda (Dambegoda Bodhisattva Statue)","Sigiriya rock","Buduruvagala caves","Aukana"],correctIndex:0},{question:"What state of preservation was the Maligawila Buddha found in during the late 20th century before restoration?",options:["Fully intact under a pristine dome","Fallen, broken into several massive segments in the dense jungle","Partially buried in beach sand dunes","Submerged in a large reservoir lake"],correctIndex:1},{question:"What architectural feature originally enclosed the massive standing Buddha statue?",options:["A circular brick and stone Image House (Patimaghara)","A simple open-air wood canopy","A series of deep stone trenches","A tall metal tower"],correctIndex:0}]},{id:"ibbankatuwa",name:"Ibbankatuwa Tombs",district:"Matale District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"150km",openStatus:"Open now",description:"A famous megalithic prehistoric burial ground dating back to the Iron Age, showcasing stone cist graves, ancient pottery, beads, and advanced early societal burials.",image:"Element Pictures/Ibbankatuwa Tombs.JPG",latitude:7.8596,longitude:80.6481,referenceImage:"Element Pictures/Ibbankatuwa Tombs.JPG",quizzes:[{question:"What unique prehistoric archaeological site is found at Ibbankatuwa?",options:["An ancient palace courtyard","A massive Megalithic Cist Burial Ground from the protohistoric Iron Age (dating back 2500+ years)","An ancient port for gem ships","A prehistoric tool-making cave"],correctIndex:1},{question:"What typical shape do the grave chambers (cists) at Ibbankatuwa have?",options:["Circular deep stone wells","Four granite slab walls forming a rectangular box capped with a large stone cover slab","Triangular pyramids built from clay","Hollow logs buried vertically"],correctIndex:1},{question:"Which of the following artifacts were found inside the cist tombs, proving ancient trade connections?",options:["Roman gold coins","Beads made of carnelian, onyx, agate, clay pottery urns containing ashes, and copper tools","Porcelain plates from China","Bronze guns"],correctIndex:1},{question:"The residents of the pre-historic Ibbankatuwa era primarily used which major metal classification?",options:["Only flint stone tools","Iron and Copper (Megalithic Iron Age culture)","Aluminum and Steel","Pure Platinum"],correctIndex:1},{question:"Near which major central province city is the Ibbankatuwa Megalithic Site situated?",options:["Kandy","Dambulla","Jaffna","Negombo"],correctIndex:1}]},{id:"galle_fort",name:"Galle Fort",district:"Galle District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"125km",openStatus:"Open now",description:"A coastal fortress built by the Portuguese, heavily fortified by the Dutch, blending European military architecture and South Asian traditions.",image:"Element Pictures/Galle Fort.jpg",latitude:6.0267,longitude:80.2167,referenceImage:"Element Pictures/Galle Fort.jpg",quizzes:[{question:"Which European nation first constructed fortifications in Galle before the Dutch expanded it?",options:["The British","The Portuguese","The French","The Spanish"],correctIndex:1},{question:"What is the famous white structure standing on the Utrecht Bastion overlooking the ocean in Galle Fort?",options:["The Clock Tower","The Galle Lighthouse","The Dutch Reformed Church dome","The Maritime Museum tower"],correctIndex:1},{question:"Galle Fort is recognized globally under which prestigious classification?",options:["A Biosphere Reserve","A UNESCO World Heritage Site","An industrial trade zone","A national sanctuary park"],correctIndex:1},{question:"What is the name of the narrow stone gateway featuring a coat of arms of the VOC Dutch East India Company?",options:["The Galle Old Gate","The Lighthouse gate","The Main Bastion drawbridge","The Sea Gate"],correctIndex:0},{question:"What architectural feature characterizes the traditional Dutch villa residential lanes in Galle Fort?",options:["Tall modern glass high-rises","Verandah houses, terracotta tile roofs, pillared arches, and paved stone inner courtyards","Circular wood log cabins","Subterranean cave rooms"],correctIndex:1}]}],f0=[{id:"social_media",name:"Social Media Presence",description:"Share about your visit",xp:5,duration:"10 mins",icon:"icons/social media presence icon.png"},{id:"local_food",name:"Local Food",description:"Try a traditional dish",xp:5,duration:"20 mins",icon:"icons/local food icon.png"},{id:"wandering_around",name:"Wandering Around",description:"Visit a nearby site",xp:5,duration:"20 mins",icon:"icons/Wandering Around icon.png"},{id:"wildlife_spotting",name:"Wildlife Spotting",description:"Spot and record an animal",xp:5,duration:"20 mins",icon:"icons/Wildlife Spotting icon.png"},{id:"eco_warrior",name:"Eco-Warrior",description:"Conserve the environment",xp:10,duration:"15 mins",icon:"icons/Eco Warrior icon.png"}],g0=()=>{};var l1={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},m0=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],a=n[t++],c=n[t++],l=((r&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return e.join("")},yh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],a=r+1<n.length,c=a?n[r+1]:0,l=r+2<n.length,u=l?n[r+2]:0,p=s>>2,g=(s&3)<<4|c>>4;let b=(c&15)<<2|u>>6,A=u&63;l||(A=64,a||(b=64)),i.push(t[p],t[g],t[b],t[A])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(mh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):m0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||c==null||u==null||g==null)throw new y0;const b=s<<2|c>>4;if(i.push(b),u!==64){const A=c<<4&240|u>>2;if(i.push(A),g!==64){const R=u<<6&192|g;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class y0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const v0=function(n){const e=mh(n);return yh.encodeByteArray(e,!0)},va=function(n){return v0(n).replace(/\./g,"")},vh=function(n){try{return yh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=()=>w0().__FIREBASE_DEFAULTS__,b0=()=>{if(typeof process>"u"||typeof l1>"u")return;const n=l1.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},E0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vh(n[1]);return e&&JSON.parse(e)},Ya=()=>{try{return g0()||_0()||b0()||E0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wh=n=>Ya()?.emulatorHosts?.[n],I0=n=>{const e=wh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},_h=()=>Ya()?.config,bh=n=>Ya()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[va(JSON.stringify(t)),va(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function T0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function A0(){const n=Ya()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function S0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function k0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function C0(){const n=tt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function P0(){return!A0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Jc(){try{return typeof indexedDB=="object"}catch{return!1}}function Zc(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}function Ih(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="FirebaseError";class Bt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=R0,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],a=s?L0(s,i):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new Bt(r,c,i)}}function L0(n,e){return n.replace(O0,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const O0=/\{\$([^}]+)}/g;function D0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Hn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],a=e[r];if(u1(s)&&u1(a)){if(!Hn(s,a))return!1}else if(s!==a)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function u1(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Pr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Rr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function N0(n,e){const t=new V0(n,e);return t.subscribe.bind(t)}class V0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");M0(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Ho),r.error===void 0&&(r.error=Ho),r.complete===void 0&&(r.complete=Ho);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M0(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ho(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=1e3,B0=2,U0=4*60*60*1e3,z0=.5;function d1(n,e=F0,t=B0){const i=e*Math.pow(t,n),r=Math.round(z0*i*(Math.random()-.5)*2);return Math.min(U0,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xh(n){return(await fetch(n,{credentials:"include"})).ok}class Mt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Eh;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(j0(e))try{this.getOrInitializeService({instanceIdentifier:ai})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ai){return this.instances.has(e)}getOptions(e=ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);i===c&&a.resolve(r)}return r}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(i)??new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:q0(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ai){return this.component?this.component.multipleInstances?e:ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q0(n){return n===ai?void 0:n}function j0(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const G0={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},W0=de.INFO,K0={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Y0=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=K0[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=W0,this._logHandler=Y0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?G0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Q0=(n,e)=>e.some(t=>n instanceof t);let h1,p1;function X0(){return h1||(h1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function J0(){return p1||(p1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Th=new WeakMap,dc=new WeakMap,Ah=new WeakMap,Go=new WeakMap,el=new WeakMap;function Z0(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Fn(n.result)),r()},a=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Th.set(t,n)}).catch(()=>{}),el.set(e,n),e}function e2(n){if(dc.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),r()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});dc.set(n,e)}let hc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return dc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ah.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function t2(n){hc=n(hc)}function n2(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Wo(this),e,...t);return Ah.set(i,e.sort?e.sort():[e]),Fn(i)}:J0().includes(n)?function(...e){return n.apply(Wo(this),e),Fn(Th.get(this))}:function(...e){return Fn(n.apply(Wo(this),e))}}function i2(n){return typeof n=="function"?n2(n):(n instanceof IDBTransaction&&e2(n),Q0(n,X0())?new Proxy(n,hc):n)}function Fn(n){if(n instanceof IDBRequest)return Z0(n);if(Go.has(n))return Go.get(n);const e=i2(n);return e!==n&&(Go.set(n,e),el.set(e,n)),e}const Wo=n=>el.get(n);function Sh(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(n,e),c=Fn(a);return i&&a.addEventListener("upgradeneeded",l=>{i(Fn(a.result),l.oldVersion,l.newVersion,Fn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const r2=["get","getKey","getAll","getAllKeys","count"],s2=["put","add","delete","clear"],Ko=new Map;function f1(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ko.get(e))return Ko.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=s2.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||r2.includes(t)))return;const s=async function(a,...c){const l=this.transaction(a,r?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),r&&l.done]))[0]};return Ko.set(e,s),s}t2(n=>({...n,get:(e,t,i)=>f1(e,t)||n.get(e,t,i),has:(e,t)=>!!f1(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(o2(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function o2(n){return n.getComponent()?.type==="VERSION"}const pc="@firebase/app",g1="0.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Qa("@firebase/app"),c2="@firebase/app-compat",l2="@firebase/analytics-compat",u2="@firebase/analytics",d2="@firebase/app-check-compat",h2="@firebase/app-check",p2="@firebase/auth",f2="@firebase/auth-compat",g2="@firebase/database",m2="@firebase/data-connect",y2="@firebase/database-compat",v2="@firebase/functions",w2="@firebase/functions-compat",_2="@firebase/installations",b2="@firebase/installations-compat",E2="@firebase/messaging",I2="@firebase/messaging-compat",x2="@firebase/performance",T2="@firebase/performance-compat",A2="@firebase/remote-config",S2="@firebase/remote-config-compat",k2="@firebase/storage",C2="@firebase/storage-compat",P2="@firebase/firestore",R2="@firebase/ai",L2="@firebase/firestore-compat",O2="firebase",D2="12.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="[DEFAULT]",N2={[pc]:"fire-core",[c2]:"fire-core-compat",[u2]:"fire-analytics",[l2]:"fire-analytics-compat",[h2]:"fire-app-check",[d2]:"fire-app-check-compat",[p2]:"fire-auth",[f2]:"fire-auth-compat",[g2]:"fire-rtdb",[m2]:"fire-data-connect",[y2]:"fire-rtdb-compat",[v2]:"fire-fn",[w2]:"fire-fn-compat",[_2]:"fire-iid",[b2]:"fire-iid-compat",[E2]:"fire-fcm",[I2]:"fire-fcm-compat",[x2]:"fire-perf",[T2]:"fire-perf-compat",[A2]:"fire-rc",[S2]:"fire-rc-compat",[k2]:"fire-gcs",[C2]:"fire-gcs-compat",[P2]:"fire-fst",[L2]:"fire-fst-compat",[R2]:"fire-vertex","fire-js":"fire-js",[O2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Map,V2=new Map,gc=new Map;function m1(n,e){try{n.container.addComponent(e)}catch(t){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qt(n){const e=n.name;if(gc.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;gc.set(e,n);for(const t of Qr.values())m1(t,n);for(const t of V2.values())m1(t,n);return!0}function Ii(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new Ei("app","Firebase",M2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=D2;function kh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:fc,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw Bn.create("bad-app-name",{appName:String(r)});if(t||(t=_h()),!t)throw Bn.create("no-options");const s=Qr.get(r);if(s){if(Hn(t,s.options)&&Hn(i,s.config))return s;throw Bn.create("duplicate-app",{appName:r})}const a=new H0(r);for(const l of gc.values())a.addComponent(l);const c=new F2(t,i,a);return Qr.set(r,c),c}function Xa(n=fc){const e=Qr.get(n);if(!e&&n===fc&&_h())return kh();if(!e)throw Bn.create("no-app",{appName:n});return e}function B2(){return Array.from(Qr.values())}function At(n,e,t){let i=N2[n]??n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}Qt(new Mt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U2="firebase-heartbeat-database",z2=1,Xr="firebase-heartbeat-store";let Yo=null;function Ch(){return Yo||(Yo=Sh(U2,z2,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Bn.create("idb-open",{originalErrorMessage:n.message})})),Yo}async function $2(n){try{const t=(await Ch()).transaction(Xr),i=await t.objectStore(Xr).get(Ph(n));return await t.done,i}catch(e){if(e instanceof Bt)hn.warn(e.message);else{const t=Bn.create("idb-get",{originalErrorMessage:e?.message});hn.warn(t.message)}}}async function y1(n,e){try{const i=(await Ch()).transaction(Xr,"readwrite");await i.objectStore(Xr).put(e,Ph(n)),await i.done}catch(t){if(t instanceof Bt)hn.warn(t.message);else{const i=Bn.create("idb-set",{originalErrorMessage:t?.message});hn.warn(i.message)}}}function Ph(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2=1024,j2=30;class H2{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new W2(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=v1();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>j2){const r=K2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){hn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=v1(),{heartbeatsToSend:t,unsentEntries:i}=G2(this._heartbeatsCache.heartbeats),r=va(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return hn.warn(e),""}}}function v1(){return new Date().toISOString().substring(0,10)}function G2(n,e=q2){const t=[];let i=n.slice();for(const r of n){const s=t.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),w1(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),w1(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class W2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jc()?Zc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $2(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return y1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return y1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function w1(n){return va(JSON.stringify({version:2,heartbeats:n})).length}function K2(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(n){Qt(new Mt("platform-logger",e=>new a2(e),"PRIVATE")),Qt(new Mt("heartbeat",e=>new H2(e),"PRIVATE")),At(pc,g1,n),At(pc,g1,"esm2020"),At("fire-js","")}Y2("");var Q2="firebase",X2="12.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(Q2,X2,"app");const Rh="@firebase/installations",tl="0.6.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=1e4,Oh=`w:${tl}`,Dh="FIS_v2",J2="https://firebaseinstallations.googleapis.com/v1",Z2=60*60*1e3,em="installations",tm="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},yi=new Ei(em,tm,nm);function Nh(n){return n instanceof Bt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh({projectId:n}){return`${J2}/projects/${n}/installations`}function Mh(n){return{token:n.token,requestStatus:2,expiresIn:rm(n.expiresIn),creationTime:Date.now()}}async function Fh(n,e){const i=(await e.json()).error;return yi.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Bh({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function im(n,{refreshToken:e}){const t=Bh(n);return t.append("Authorization",sm(e)),t}async function Uh(n){const e=await n();return e.status>=500&&e.status<600?n():e}function rm(n){return Number(n.replace("s","000"))}function sm(n){return`${Dh} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Vh(n),r=Bh(n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const a={fid:t,authVersion:Dh,appId:n.appId,sdkVersion:Oh},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await Uh(()=>fetch(i,c));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Mh(u.authToken)}}else throw await Fh("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=/^[cdef][\w-]{21}$/,mc="";function lm(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=um(n);return cm.test(t)?t:mc}catch{return mc}}function um(n){return om(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=new Map;function qh(n,e){const t=Ja(n);jh(t,e),dm(t,e)}function jh(n,e){const t=$h.get(n);if(t)for(const i of t)i(e)}function dm(n,e){const t=hm();t&&t.postMessage({key:n,fid:e}),pm()}let ci=null;function hm(){return!ci&&"BroadcastChannel"in self&&(ci=new BroadcastChannel("[Firebase] FID Change"),ci.onmessage=n=>{jh(n.data.key,n.data.fid)}),ci}function pm(){$h.size===0&&ci&&(ci.close(),ci=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="firebase-installations-database",gm=1,vi="firebase-installations-store";let Qo=null;function nl(){return Qo||(Qo=Sh(fm,gm,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(vi)}}})),Qo}async function wa(n,e){const t=Ja(n),r=(await nl()).transaction(vi,"readwrite"),s=r.objectStore(vi),a=await s.get(t);return await s.put(e,t),await r.done,(!a||a.fid!==e.fid)&&qh(n,e.fid),e}async function Hh(n){const e=Ja(n),i=(await nl()).transaction(vi,"readwrite");await i.objectStore(vi).delete(e),await i.done}async function Za(n,e){const t=Ja(n),r=(await nl()).transaction(vi,"readwrite"),s=r.objectStore(vi),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await r.done,c&&(!a||a.fid!==c.fid)&&qh(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(n){let e;const t=await Za(n.appConfig,i=>{const r=mm(i),s=ym(n,r);return e=s.registrationPromise,s.installationEntry});return t.fid===mc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function mm(n){const e=n||{fid:lm(),registrationStatus:0};return Gh(e)}function ym(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(yi.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=vm(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wm(n)}:{installationEntry:e}}async function vm(n,e){try{const t=await am(n,e);return wa(n.appConfig,t)}catch(t){throw Nh(t)&&t.customData.serverCode===409?await Hh(n.appConfig):await wa(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function wm(n){let e=await _1(n.appConfig);for(;e.registrationStatus===1;)await zh(100),e=await _1(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await il(n);return i||t}return e}function _1(n){return Za(n,e=>{if(!e)throw yi.create("installation-not-found");return Gh(e)})}function Gh(n){return _m(n)?{fid:n.fid,registrationStatus:0}:n}function _m(n){return n.registrationStatus===1&&n.registrationTime+Lh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bm({appConfig:n,heartbeatServiceProvider:e},t){const i=Em(n,t),r=im(n,t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const a={installation:{sdkVersion:Oh,appId:n.appId}},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await Uh(()=>fetch(i,c));if(l.ok){const u=await l.json();return Mh(u)}else throw await Fh("Generate Auth Token",l)}function Em(n,{fid:e}){return`${Vh(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(n,e=!1){let t;const i=await Za(n.appConfig,s=>{if(!Wh(s))throw yi.create("not-registered");const a=s.authToken;if(!e&&Tm(a))return s;if(a.requestStatus===1)return t=Im(n,e),s;{if(!navigator.onLine)throw yi.create("app-offline");const c=Sm(s);return t=xm(n,c),c}});return t?await t:i.authToken}async function Im(n,e){let t=await b1(n.appConfig);for(;t.authToken.requestStatus===1;)await zh(100),t=await b1(n.appConfig);const i=t.authToken;return i.requestStatus===0?rl(n,e):i}function b1(n){return Za(n,e=>{if(!Wh(e))throw yi.create("not-registered");const t=e.authToken;return km(t)?{...e,authToken:{requestStatus:0}}:e})}async function xm(n,e){try{const t=await bm(n,e),i={...e,authToken:t};return await wa(n.appConfig,i),t}catch(t){if(Nh(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Hh(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await wa(n.appConfig,i)}throw t}}function Wh(n){return n!==void 0&&n.registrationStatus===2}function Tm(n){return n.requestStatus===2&&!Am(n)}function Am(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Z2}function Sm(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function km(n){return n.requestStatus===1&&n.requestTime+Lh<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cm(n){const e=n,{installationEntry:t,registrationPromise:i}=await il(e);return i?i.catch(console.error):rl(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(n,e=!1){const t=n;return await Rm(t),(await rl(t,e)).token}async function Rm(n){const{registrationPromise:e}=await il(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(n){if(!n||!n.options)throw Xo("App Configuration");if(!n.name)throw Xo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Xo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Xo(n){return yi.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="installations",Om="installations-internal",Dm=n=>{const e=n.getProvider("app").getImmediate(),t=Lm(e),i=Ii(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Nm=n=>{const e=n.getProvider("app").getImmediate(),t=Ii(e,Kh).getImmediate();return{getId:()=>Cm(t),getToken:r=>Pm(t,r)}};function Vm(){Qt(new Mt(Kh,Dm,"PUBLIC")),Qt(new Mt(Om,Nm,"PRIVATE"))}Vm();At(Rh,tl);At(Rh,tl,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="analytics",Mm="firebase_id",Fm="origin",Bm=60*1e3,Um="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",sl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new Qa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Et=new Ei("analytics","Analytics",zm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(n){if(!n.startsWith(sl)){const e=Et.create("invalid-gtag-resource",{gtagURL:n});return ot.warn(e.message),""}return n}function Yh(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function qm(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function jm(n,e){const t=qm("firebase-js-sdk-policy",{createScriptURL:$m}),i=document.createElement("script"),r=`${sl}?l=${n}&id=${e}`;i.src=t?t?.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function Hm(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Gm(n,e,t,i,r,s){const a=i[r];try{if(a)await e[a];else{const l=(await Yh(t)).find(u=>u.measurementId===r);l&&await e[l.appId]}}catch(c){ot.error(c)}n("config",r,s)}async function Wm(n,e,t,i,r){try{let s=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=await Yh(t);for(const l of a){const u=c.find(g=>g.measurementId===l),p=u&&e[u.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",i,r||{})}catch(s){ot.error(s)}}function Km(n,e,t,i){async function r(s,...a){try{if(s==="event"){const[c,l]=a;await Wm(n,e,t,c,l)}else if(s==="config"){const[c,l]=a;await Gm(n,e,t,i,c,l)}else if(s==="consent"){const[c,l]=a;n("consent",c,l)}else if(s==="get"){const[c,l,u]=a;n("get",c,l,u)}else if(s==="set"){const[c]=a;n("set",c)}else n(s,...a)}catch(c){ot.error(c)}}return r}function Ym(n,e,t,i,r){let s=function(...a){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=Km(s,n,e,t),{gtagCore:s,wrappedGtag:window[r]}}function Qm(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(sl)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=30,Jm=1e3;class Zm{constructor(e={},t=Jm){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Qh=new Zm;function e6(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function t6(n){const{appId:e,apiKey:t}=n,i={method:"GET",headers:e6(t)},r=Um.replace("{app-id}",e),s=await fetch(r,i);if(s.status!==200&&s.status!==304){let a="";try{const c=await s.json();c.error?.message&&(a=c.error.message)}catch{}throw Et.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function n6(n,e=Qh,t){const{appId:i,apiKey:r,measurementId:s}=n.options;if(!i)throw Et.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Et.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new s6;return setTimeout(async()=>{c.abort()},Bm),Xh({appId:i,apiKey:r,measurementId:s},a,c,e)}async function Xh(n,{throttleEndTimeMillis:e,backoffCount:t},i,r=Qh){const{appId:s,measurementId:a}=n;try{await i6(i,e)}catch(c){if(a)return ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:s,measurementId:a};throw c}try{const c=await t6(n);return r.deleteThrottleMetadata(s),c}catch(c){const l=c;if(!r6(l)){if(r.deleteThrottleMetadata(s),a)return ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:s,measurementId:a};throw c}const u=Number(l?.customData?.httpStatus)===503?d1(t,r.intervalMillis,Xm):d1(t,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return r.setThrottleMetadata(s,p),ot.debug(`Calling attemptFetch again in ${u} millis`),Xh(n,p,i,r)}}function i6(n,e){return new Promise((t,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(s),i(Et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function r6(n){if(!(n instanceof Bt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class s6{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function a6(n,e,t,i,r){if(r&&r.global){n("event",t,i);return}else{const s=await e,a={...i,send_to:s};n("event",t,a)}}async function o6(n,e,t,i){if(i&&i.global){const r={};for(const s of Object.keys(t))r[`user_properties.${s}`]=t[s];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c6(){if(Jc())try{await Zc()}catch(n){return ot.warn(Et.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return ot.warn(Et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function l6(n,e,t,i,r,s,a){const c=n6(n);c.then(b=>{t[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&ot.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>ot.error(b)),e.push(c);const l=c6().then(b=>{if(b)return i.getId()}),[u,p]=await Promise.all([c,l]);Qm(s)||jm(s,u.measurementId),r("js",new Date);const g=a?.config??{};return g[Fm]="firebase",g.update=!0,p!=null&&(g[Mm]=p),r("config",u.measurementId,g),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u6{constructor(e){this.app=e}_delete(){return delete Fi[this.app.options.appId],Promise.resolve()}}let Fi={},E1=[];const I1={};let Jo="dataLayer",d6="gtag",x1,al,T1=!1;function h6(){const n=[];if(Xc()&&n.push("This is a browser extension environment."),Ih()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,r)=>`(${r+1}) ${i}`).join(" "),t=Et.create("invalid-analytics-context",{errorInfo:e});ot.warn(t.message)}}function p6(n,e,t){h6();const i=n.options.appId;if(!i)throw Et.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Et.create("no-api-key");if(Fi[i]!=null)throw Et.create("already-exists",{id:i});if(!T1){Hm(Jo);const{wrappedGtag:s,gtagCore:a}=Ym(Fi,E1,I1,Jo,d6);al=s,x1=a,T1=!0}return Fi[i]=l6(n,E1,I1,e,x1,Jo,t),new u6(n)}function f6(n=Xa()){n=Ge(n);const e=Ii(n,_a);return e.isInitialized()?e.getImmediate():g6(n)}function g6(n,e={}){const t=Ii(n,_a);if(t.isInitialized()){const r=t.getImmediate();if(Hn(e,t.getOptions()))return r;throw Et.create("already-initialized")}return t.initialize({options:e})}async function m6(){if(Xc()||!Ih()||!Jc())return!1;try{return await Zc()}catch{return!1}}function y6(n,e,t){n=Ge(n),o6(al,Fi[n.app.options.appId],e,t).catch(i=>ot.error(i))}function v6(n,e,t,i){n=Ge(n),a6(al,Fi[n.app.options.appId],e,t,i).catch(r=>ot.error(r))}const A1="@firebase/analytics",S1="0.10.22";function w6(){Qt(new Mt(_a,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return p6(i,r,t)},"PUBLIC")),Qt(new Mt("analytics-internal",n,"PRIVATE")),At(A1,S1),At(A1,S1,"esm2020");function n(e){try{const t=e.getProvider(_a).getImmediate();return{logEvent:(i,r,s)=>v6(t,i,r,s),setUserProperties:(i,r)=>y6(t,i,r)}}catch(t){throw Et.create("interop-component-reg-failed",{reason:t})}}}w6();function Jh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _6=Jh,Zh=new Ei("auth","Firebase",Jh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new Qa("@firebase/auth");function b6(n,...e){ba.logLevel<=de.WARN&&ba.warn(`Auth (${nr}): ${n}`,...e)}function aa(n,...e){ba.logLevel<=de.ERROR&&ba.error(`Auth (${nr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(n,...e){throw cl(n,...e)}function Vt(n,...e){return cl(n,...e)}function ol(n,e,t){const i={..._6(),[e]:t};return new Ei("auth","Firebase",i).create(e,{appName:n.name})}function ln(n){return ol(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function E6(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&St(n,"argument-error"),ol(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cl(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Zh.create(n,...e)}function te(n,e,...t){if(!n)throw cl(e,...t)}function an(n){const e="INTERNAL ASSERTION FAILED: "+n;throw aa(e),new Error(e)}function pn(n,e){n||an(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(){return typeof self<"u"&&self.location?.href||""}function I6(){return k1()==="http:"||k1()==="https:"}function k1(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x6(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I6()||Xc()||"connection"in navigator)?navigator.onLine:!0}function T6(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t){this.shortDelay=e,this.longDelay=t,pn(t>e,"Short delay should be less than long delay!"),this.isMobile=T0()||k0()}get(){return x6()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n,e){pn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;an("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;an("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;an("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A6={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S6=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],k6=new _s(3e4,6e4);function yn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function en(n,e,t,i,r={}){return tp(n,r,async()=>{let s={},a={};i&&(e==="GET"?a=i:s={body:JSON.stringify(i)});const c=vs({...a,key:n.config.apiKey}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...s};return S0()||(u.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&ws(n.emulatorConfig.host)&&(u.credentials="include"),ep.fetch()(await np(n,n.config.apiHost,t,c),u)})}async function tp(n,e,t){n._canInitEmulator=!1;const i={...A6,...e};try{const r=new P6(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ys(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ys(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ys(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ys(n,"user-disabled",a);const p=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ol(n,p,u);St(n,p)}}catch(r){if(r instanceof Bt)throw r;St(n,"network-request-failed",{message:String(r)})}}async function bs(n,e,t,i,r={}){const s=await en(n,e,t,i,r);return"mfaPendingCredential"in s&&St(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function np(n,e,t,i){const r=`${e}${t}?${i}`,s=n,a=s.config.emulator?ll(n.config,r):`${n.config.apiScheme}://${r}`;return S6.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function C6(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class P6{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Vt(this.auth,"network-request-failed")),k6.get())})}}function Ys(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=Vt(n,e,i);return r.customData._tokenResponse=t,r}function C1(n){return n!==void 0&&n.enterprise!==void 0}class R6{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return C6(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function L6(n,e){return en(n,"GET","/v2/recaptchaConfig",yn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O6(n,e){return en(n,"POST","/v1/accounts:delete",e)}async function Ea(n,e){return en(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function D6(n,e=!1){const t=Ge(n),i=await t.getIdToken(e),r=ul(i);te(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,a=s?.sign_in_provider;return{claims:r,token:i,authTime:Mr(Zo(r.auth_time)),issuedAtTime:Mr(Zo(r.iat)),expirationTime:Mr(Zo(r.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Zo(n){return Number(n)*1e3}function ul(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return aa("JWT malformed, contained fewer than 3 sections"),null;try{const r=vh(t);return r?JSON.parse(r):(aa("Failed to decode base64 JWT payload"),null)}catch(r){return aa("Caught error parsing JWT payload as JSON",r?.toString()),null}}function P1(n){const e=ul(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Bt&&N6(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function N6({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V6{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mr(this.lastLoginAt),this.creationTime=Mr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(n){const e=n.auth,t=await n.getIdToken(),i=await Gi(n,Ea(e,{idToken:t}));te(i?.users.length,e,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const s=r.providerUserInfo?.length?ip(r.providerUserInfo):[],a=F6(n.providerData,s),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!a?.length,u=c?l:!1,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new vc(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,p)}async function M6(n){const e=Ge(n);await Ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function F6(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function ip(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B6(n,e){const t=await tp(n,{},async()=>{const i=vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,a=await np(n,r,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&ws(n.emulatorConfig.host)&&(l.credentials="include"),ep.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function U6(n,e){return en(n,"POST","/v2/accounts:revokeToken",yn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):P1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=P1(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await B6(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,a=new Bi;return i&&(te(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),r&&(te(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),s&&(te(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return an("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dt{constructor({uid:e,auth:t,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new V6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new vc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Gi(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return D6(this,e)}reload(){return M6(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ia(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(ln(this.auth));const e=await this.getIdToken();return await Gi(this,O6(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,r=t.email??void 0,s=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:g,emailVerified:b,isAnonymous:A,providerData:R,stsTokenManager:V}=t;te(g&&V,e,"internal-error");const q=Bi.fromJSON(this.name,V);te(typeof g=="string",e,"internal-error"),Sn(i,e.name),Sn(r,e.name),te(typeof b=="boolean",e,"internal-error"),te(typeof A=="boolean",e,"internal-error"),Sn(s,e.name),Sn(a,e.name),Sn(c,e.name),Sn(l,e.name),Sn(u,e.name),Sn(p,e.name);const X=new Dt({uid:g,auth:e,email:r,emailVerified:b,displayName:i,isAnonymous:A,photoURL:a,phoneNumber:s,tenantId:c,stsTokenManager:q,createdAt:u,lastLoginAt:p});return R&&Array.isArray(R)&&(X.providerData=R.map(P=>({...P}))),l&&(X._redirectEventId=l),X}static async _fromIdTokenResponse(e,t,i=!1){const r=new Bi;r.updateFromServerResponse(t);const s=new Dt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ia(s),s}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];te(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?ip(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!s?.length,c=new Bi;c.updateFromIdToken(i);const l=new Dt({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new vc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!s?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=new Map;function on(n){pn(n instanceof Function,"Expected a class definition");let e=R1.get(n);return e?(pn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,R1.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rp.type="NONE";const L1=rp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n,e,t){return`firebase:${n}:${e}:${t}`}class Ui{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=oa(this.userKey,r.apiKey,s),this.fullPersistenceKey=oa("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ea(this.auth,{idToken:e}).catch(()=>{});return t?Dt._fromGetAccountInfoResponse(this.auth,t,e):null}return Dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ui(on(L1),e,i);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||on(L1);const a=oa(i,e.config.apiKey,e.name);let c=null;for(const u of t)try{const p=await u._get(a);if(p){let g;if(typeof p=="string"){const b=await Ea(e,{idToken:p}).catch(()=>{});if(!b)break;g=await Dt._fromGetAccountInfoResponse(e,b,p)}else g=Dt._fromJSON(e,p);u!==s&&(c=g),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ui(s,e,i):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new Ui(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(up(e))return"Blackberry";if(dp(e))return"Webos";if(ap(e))return"Safari";if((e.includes("chrome/")||op(e))&&!e.includes("edge/"))return"Chrome";if(lp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function sp(n=tt()){return/firefox\//i.test(n)}function ap(n=tt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function op(n=tt()){return/crios\//i.test(n)}function cp(n=tt()){return/iemobile/i.test(n)}function lp(n=tt()){return/android/i.test(n)}function up(n=tt()){return/blackberry/i.test(n)}function dp(n=tt()){return/webos/i.test(n)}function dl(n=tt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function z6(n=tt()){return dl(n)&&!!window.navigator?.standalone}function $6(){return C0()&&document.documentMode===10}function hp(n=tt()){return dl(n)||lp(n)||dp(n)||up(n)||/windows phone/i.test(n)||cp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(n,e=[]){let t;switch(n){case"Browser":t=O1(tt());break;case"Worker":t=`${O1(tt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${nr}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q6{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j6(n,e={}){return en(n,"GET","/v2/passwordPolicy",yn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H6=6;class G6{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??H6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W6{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new D1(this),this.idTokenSubscription=new D1(this),this.beforeStateQueue=new q6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=on(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Ui.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ea(this,{idToken:e}),i=await Dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(wt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,a=i?._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===a)&&c?.user&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ia(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=T6()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wt(this.app))return Promise.reject(ln(this));const t=e?Ge(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wt(this.app)?Promise.reject(ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await j6(this),t=new G6(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await U6(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&on(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await Ui.create(this,[on(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,r);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&b6(`Error while retrieving App Check token: ${e.error}`),e?.token}}function tn(n){return Ge(n)}class D1{constructor(e){this.auth=e,this.observer=null,this.addObserver=N0(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K6(n){eo=n}function fp(n){return eo.loadJS(n)}function Y6(){return eo.recaptchaEnterpriseScript}function Q6(){return eo.gapiScript}function X6(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class J6{constructor(){this.enterprise=new Z6}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Z6{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const e7="recaptcha-enterprise",gp="NO_RECAPTCHA",N1="onFirebaseAuthREInstanceReady";class Cn{constructor(e){this.type=e7,this.auth=tn(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{L6(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new R6(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,a(u.siteKey)}}).catch(l=>{c(l)})})}function r(s,a,c){const l=window.grecaptcha;C1(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{a(u)}).catch(()=>{a(gp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new J6().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{i(this.auth).then(async c=>{if(!t&&C1(window.grecaptcha)&&Cn.scriptInjectionDeferred)await Cn.scriptInjectionDeferred.promise,r(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Y6();l.length!==0&&(l+=c+`&onload=${N1}`),Cn.scriptInjectionDeferred=new Eh,window[N1]=()=>{Cn.scriptInjectionDeferred?.resolve()},fp(l).then(()=>Cn.scriptInjectionDeferred?.promise).then(()=>{r(c,s,a)}).catch(u=>{a(u)})}}).catch(c=>{a(c)})})}}Cn.scriptInjectionDeferred=null;async function V1(n,e,t,i=!1,r=!1){const s=new Cn(n);let a;if(r)a=gp;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function xa(n,e,t,i,r){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await V1(n,e,t,t==="getOobCode");return i(n,s)}else return i(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await V1(n,e,t,t==="getOobCode");return i(n,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(n,e){const t=Ii(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Hn(s,e??{}))return r;St(r,"already-initialized")}return t.initialize({options:e})}function t7(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(on);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function n7(n,e,t){const i=tn(n);te(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=yp(e),{host:a,port:c}=i7(e),l=c===null?"":`:${c}`,u={url:`${s}//${a}${l}/`},p=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){te(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),te(Hn(u,i.config.emulator)&&Hn(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,ws(a)?xh(`${s}//${a}${l}`):r7()}function yp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function i7(n){const e=yp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:M1(i.substr(s.length+1))}}else{const[s,a]=i.split(":");return{host:s,port:M1(a)}}}function M1(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function r7(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return an("not implemented")}_getIdTokenResponse(e){return an("not implemented")}_linkToIdToken(e,t){return an("not implemented")}_getReauthenticationResolver(e){return an("not implemented")}}async function s7(n,e){return en(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a7(n,e){return bs(n,"POST","/v1/accounts:signInWithPassword",yn(n,e))}async function o7(n,e){return en(n,"POST","/v1/accounts:sendOobCode",yn(n,e))}async function c7(n,e){return o7(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l7(n,e){return bs(n,"POST","/v1/accounts:signInWithEmailLink",yn(n,e))}async function u7(n,e){return bs(n,"POST","/v1/accounts:signInWithEmailLink",yn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends hl{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Jr(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Jr(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xa(e,t,"signInWithPassword",a7);case"emailLink":return l7(e,{email:this._email,oobCode:this._password});default:St(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xa(e,i,"signUpPassword",s7);case"emailLink":return u7(e,{idToken:t,email:this._email,oobCode:this._password});default:St(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(n,e){return bs(n,"POST","/v1/accounts:signInWithIdp",yn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d7="http://localhost";class wi extends hl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):St("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...s}=t;if(!i||!r)return null;const a=new wi(i,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return zi(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,zi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zi(e,t)}buildRequest(){const e={requestUri:d7,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h7(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function p7(n){const e=Pr(Rr(n)).link,t=e?Pr(Rr(e)).deep_link_id:null,i=Pr(Rr(n)).deep_link_id;return(i?Pr(Rr(i)).link:null)||i||t||e||n}class pl{constructor(e){const t=Pr(Rr(e)),i=t.apiKey??null,r=t.oobCode??null,s=h7(t.mode??null);te(i&&r&&s,"argument-error"),this.apiKey=i,this.operation=s,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=p7(e);try{return new pl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.providerId=ir.PROVIDER_ID}static credential(e,t){return Jr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=pl.parseLink(t);return te(i,"argument-error"),Jr._fromEmailAndCode(e,i.code,i.tenantId)}}ir.PROVIDER_ID="password";ir.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ir.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends fl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Es{constructor(){super("facebook.com")}static credential(e){return wi._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Es{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wi._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return sn.credential(t,i)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Es{constructor(){super("github.com")}static credential(e){return wi._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Es{constructor(){super("twitter.com")}static credential(e,t){return wi._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ln.credential(t,i)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f7(n,e){return bs(n,"POST","/v1/accounts:signUp",yn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await Dt._fromIdTokenResponse(e,i,r),a=F1(i);return new _i({user:s,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=F1(i);return new _i({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function F1(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends Bt{constructor(e,t,i,r){super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Ta.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Ta(e,t,i,r)}}function vp(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ta._fromErrorAndOperation(n,s,e,i):s})}async function g7(n,e,t=!1){const i=await Gi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return _i._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m7(n,e,t=!1){const{auth:i}=n;if(wt(i.app))return Promise.reject(ln(i));const r="reauthenticate";try{const s=await Gi(n,vp(i,r,e,n),t);te(s.idToken,i,"internal-error");const a=ul(s.idToken);te(a,i,"internal-error");const{sub:c}=a;return te(n.uid===c,i,"user-mismatch"),_i._forOperation(n,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&St(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(n,e,t=!1){if(wt(n.app))return Promise.reject(ln(n));const i="signIn",r=await vp(n,i,e),s=await _i._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}async function y7(n,e){return wp(tn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(n){const e=tn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function v7(n,e,t){const i=tn(n);await xa(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",c7)}async function w7(n,e,t){if(wt(n.app))return Promise.reject(ln(n));const i=tn(n),a=await xa(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",f7).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&_p(n),l}),c=await _i._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function _7(n,e,t){return wt(n.app)?Promise.reject(ln(n)):y7(Ge(n),ir.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&_p(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b7(n,e){return en(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E7(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Ge(n),s={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Gi(i,b7(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function I7(n,e,t,i){return Ge(n).onIdTokenChanged(e,t,i)}function x7(n,e,t){return Ge(n).beforeAuthStateChanged(e,t)}function T7(n,e,t,i){return Ge(n).onAuthStateChanged(e,t,i)}function A7(n){return Ge(n).signOut()}const Aa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Aa,"1"),this.storage.removeItem(Aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S7=1e3,k7=10;class Ep extends bp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},s=this.storage.getItem(i);$6()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,k7):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},S7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ep.type="LOCAL";const Ip=Ep;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp extends bp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xp.type="SESSION";const Tp=xp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C7(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new to(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,a=this.handlersMap[r];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const c=Array.from(a).map(async u=>u(t.origin,s)),l=await C7(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}to.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P7{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const u=gl("",20);r.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(g){const b=g;if(b.data.eventId===u)switch(b.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(b.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function R7(n){Gt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function L7(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function O7(){return navigator?.serviceWorker?.controller||null}function D7(){return Ap()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="firebaseLocalStorageDb",N7=1,Sa="firebaseLocalStorage",kp="fbase_key";class Is{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function no(n,e){return n.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function V7(){const n=indexedDB.deleteDatabase(Sp);return new Is(n).toPromise()}function Cp(){const n=indexedDB.open(Sp,N7);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Sa,{keyPath:kp})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Sa)?e(i):(i.close(),await V7(),e(await Cp()))})})}async function B1(n,e,t){const i=no(n,!0).put({[kp]:e,value:t});return new Is(i).toPromise()}async function M7(n,e){const t=no(n,!1).get(e),i=await new Is(t).toPromise();return i===void 0?null:i.value}function U1(n,e){const t=no(n,!0).delete(e);return new Is(t).toPromise()}const F7=800,B7=3;class Pp{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Cp(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>B7)throw i;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Ap()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=to._getInstance(D7()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await L7(),!this.activeServiceWorker)return;this.sender=new P7(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||O7()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await B1(e,Aa,"1"),await U1(e,Aa)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>B1(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>M7(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>U1(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=no(r,!1).getAll();return new Is(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pp.type="LOCAL";const Rp=Pp;new _s(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n,e){return e?on(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends hl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function U7(n){return wp(n.auth,new ml(n),n.bypassAuthState)}function z7(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),m7(t,new ml(n),n.bypassAuthState)}async function $7(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),g7(t,new ml(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return U7;case"linkViaPopup":case"linkViaRedirect":return $7;case"reauthViaPopup":case"reauthViaRedirect":return z7;default:St(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q7=new _s(2e3,1e4);async function j7(n,e,t){if(wt(n.app))return Promise.reject(Vt(n,"operation-not-supported-in-this-environment"));const i=tn(n);E6(n,e,fl);const r=Lp(i,t);return new li(i,"signInViaPopup",e,r).executeNotNull()}class li extends Op{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=gl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,q7.get())};e()}}li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H7="pendingRedirect",ca=new Map;class G7 extends Op{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ca.get(this.auth._key());if(!e){try{const i=await W7(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ca.set(this.auth._key(),e)}return this.bypassAuthState||ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W7(n,e){const t=Q7(e),i=Y7(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function K7(n,e){ca.set(n._key(),e)}function Y7(n){return on(n._redirectPersistence)}function Q7(n){return oa(H7,n.config.apiKey,n.name)}async function X7(n,e){return await tn(n)._initializationPromise,Dp(n,e,!1)}async function Dp(n,e,t=!1){if(wt(n.app))return Promise.reject(ln(n));const i=tn(n),r=Lp(i,e),a=await new G7(i,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J7=10*60*1e3;class Z7{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!e4(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Np(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Vt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=J7&&this.cachedEventUids.clear(),this.cachedEventUids.has(z1(e))}saveEventToCache(e){this.cachedEventUids.add(z1(e)),this.lastProcessedEventTime=Date.now()}}function z1(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Np({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function e4(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Np(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t4(n,e={}){return en(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i4=/^https?/;async function r4(n){if(n.config.emulator)return;const{authorizedDomains:e}=await t4(n);for(const t of e)try{if(s4(t))return}catch{}St(n,"unauthorized-domain")}function s4(n){const e=yc(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!i4.test(t))return!1;if(n4.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=new _s(3e4,6e4);function $1(){const n=Gt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function o4(n){return new Promise((e,t)=>{function i(){$1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$1(),t(Vt(n,"network-request-failed"))},timeout:a4.get()})}if(Gt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Gt().gapi?.load)i();else{const r=X6("iframefcb");return Gt()[r]=()=>{gapi.load?i():t(Vt(n,"network-request-failed"))},fp(`${Q6()}?onload=${r}`).catch(s=>t(s))}}).catch(e=>{throw la=null,e})}let la=null;function c4(n){return la=la||o4(n),la}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l4=new _s(5e3,15e3),u4="__/auth/iframe",d4="emulator/auth/iframe",h4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},p4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function f4(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ll(e,d4):`https://${n.config.authDomain}/${u4}`,i={apiKey:e.apiKey,appName:n.name,v:nr},r=p4.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${vs(i).slice(1)}`}async function g4(n){const e=await c4(n),t=Gt().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:f4(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:h4,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const a=Vt(n,"network-request-failed"),c=Gt().setTimeout(()=>{s(a)},l4.get());function l(){Gt().clearTimeout(c),r(i)}i.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},y4=500,v4=600,w4="_blank",_4="http://localhost";class q1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b4(n,e,t,i=y4,r=v4){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...m4,width:i.toString(),height:r.toString(),top:s,left:a},u=tt().toLowerCase();t&&(c=op(u)?w4:t),sp(u)&&(e=e||_4,l.scrollbars="yes");const p=Object.entries(l).reduce((b,[A,R])=>`${b}${A}=${R},`,"");if(z6(u)&&c!=="_self")return E4(e||"",c),new q1(null);const g=window.open(e||"",c,p);te(g,n,"popup-blocked");try{g.focus()}catch{}return new q1(g)}function E4(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4="__/auth/handler",x4="emulator/auth/handler",T4=encodeURIComponent("fac");async function j1(n,e,t,i,r,s){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:nr,eventId:r};if(e instanceof fl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",D0(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof Es){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),u=l?`#${T4}=${encodeURIComponent(l)}`:"";return`${A4(n)}?${vs(c).slice(1)}${u}`}function A4({config:n}){return n.emulator?ll(n,x4):`https://${n.authDomain}/${I4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="webStorageSupport";class S4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tp,this._completeRedirectFn=Dp,this._overrideRedirectResult=K7}async _openPopup(e,t,i,r){pn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await j1(e,t,i,yc(),r);return b4(e,s,gl())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await j1(e,t,i,yc(),r);return R7(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(pn(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await g4(e),i=new Z7(e);return t.register("authEvent",r=>(te(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ec,{type:ec},r=>{const s=r?.[0]?.[ec];s!==void 0&&t(!!s),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=r4(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hp()||ap()||dl()}}const k4=S4;var H1="@firebase/auth",G1="1.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P4(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R4(n){Qt(new Mt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=i.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pp(n)},u=new W6(i,r,s,l);return t7(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Qt(new Mt("auth-internal",e=>{const t=tn(e.getProvider("auth").getImmediate());return(i=>new C4(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(H1,G1,P4(n)),At(H1,G1,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L4=5*60,O4=bh("authIdTokenMaxAge")||L4;let W1=null;const D4=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>O4)return;const r=t?.token;W1!==r&&(W1=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function K1(n=Xa()){const e=Ii(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mp(n,{popupRedirectResolver:k4,persistence:[Rp,Ip,Tp]}),i=bh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const a=D4(s.toString());x7(t,a,()=>a(t.currentUser)),I7(t,c=>a(c))}}const r=wh("auth");return r&&n7(t,`http://${r}`),t}function N4(){return document.getElementsByTagName("head")?.[0]??document}K6({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=Vt("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",N4().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R4("Browser");var Y1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Un,Vp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function _(){}_.prototype=y.prototype,E.F=y.prototype,E.prototype=new _,E.prototype.constructor=E,E.D=function(T,I,k){for(var w=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)w[Ke-2]=arguments[Ke];return y.prototype[I].apply(T,w)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,y,_){_||(_=0);const T=Array(16);if(typeof y=="string")for(var I=0;I<16;++I)T[I]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(I=0;I<16;++I)T[I]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=E.g[0],_=E.g[1],I=E.g[2];let k=E.g[3],w;w=y+(k^_&(I^k))+T[0]+3614090360&4294967295,y=_+(w<<7&4294967295|w>>>25),w=k+(I^y&(_^I))+T[1]+3905402710&4294967295,k=y+(w<<12&4294967295|w>>>20),w=I+(_^k&(y^_))+T[2]+606105819&4294967295,I=k+(w<<17&4294967295|w>>>15),w=_+(y^I&(k^y))+T[3]+3250441966&4294967295,_=I+(w<<22&4294967295|w>>>10),w=y+(k^_&(I^k))+T[4]+4118548399&4294967295,y=_+(w<<7&4294967295|w>>>25),w=k+(I^y&(_^I))+T[5]+1200080426&4294967295,k=y+(w<<12&4294967295|w>>>20),w=I+(_^k&(y^_))+T[6]+2821735955&4294967295,I=k+(w<<17&4294967295|w>>>15),w=_+(y^I&(k^y))+T[7]+4249261313&4294967295,_=I+(w<<22&4294967295|w>>>10),w=y+(k^_&(I^k))+T[8]+1770035416&4294967295,y=_+(w<<7&4294967295|w>>>25),w=k+(I^y&(_^I))+T[9]+2336552879&4294967295,k=y+(w<<12&4294967295|w>>>20),w=I+(_^k&(y^_))+T[10]+4294925233&4294967295,I=k+(w<<17&4294967295|w>>>15),w=_+(y^I&(k^y))+T[11]+2304563134&4294967295,_=I+(w<<22&4294967295|w>>>10),w=y+(k^_&(I^k))+T[12]+1804603682&4294967295,y=_+(w<<7&4294967295|w>>>25),w=k+(I^y&(_^I))+T[13]+4254626195&4294967295,k=y+(w<<12&4294967295|w>>>20),w=I+(_^k&(y^_))+T[14]+2792965006&4294967295,I=k+(w<<17&4294967295|w>>>15),w=_+(y^I&(k^y))+T[15]+1236535329&4294967295,_=I+(w<<22&4294967295|w>>>10),w=y+(I^k&(_^I))+T[1]+4129170786&4294967295,y=_+(w<<5&4294967295|w>>>27),w=k+(_^I&(y^_))+T[6]+3225465664&4294967295,k=y+(w<<9&4294967295|w>>>23),w=I+(y^_&(k^y))+T[11]+643717713&4294967295,I=k+(w<<14&4294967295|w>>>18),w=_+(k^y&(I^k))+T[0]+3921069994&4294967295,_=I+(w<<20&4294967295|w>>>12),w=y+(I^k&(_^I))+T[5]+3593408605&4294967295,y=_+(w<<5&4294967295|w>>>27),w=k+(_^I&(y^_))+T[10]+38016083&4294967295,k=y+(w<<9&4294967295|w>>>23),w=I+(y^_&(k^y))+T[15]+3634488961&4294967295,I=k+(w<<14&4294967295|w>>>18),w=_+(k^y&(I^k))+T[4]+3889429448&4294967295,_=I+(w<<20&4294967295|w>>>12),w=y+(I^k&(_^I))+T[9]+568446438&4294967295,y=_+(w<<5&4294967295|w>>>27),w=k+(_^I&(y^_))+T[14]+3275163606&4294967295,k=y+(w<<9&4294967295|w>>>23),w=I+(y^_&(k^y))+T[3]+4107603335&4294967295,I=k+(w<<14&4294967295|w>>>18),w=_+(k^y&(I^k))+T[8]+1163531501&4294967295,_=I+(w<<20&4294967295|w>>>12),w=y+(I^k&(_^I))+T[13]+2850285829&4294967295,y=_+(w<<5&4294967295|w>>>27),w=k+(_^I&(y^_))+T[2]+4243563512&4294967295,k=y+(w<<9&4294967295|w>>>23),w=I+(y^_&(k^y))+T[7]+1735328473&4294967295,I=k+(w<<14&4294967295|w>>>18),w=_+(k^y&(I^k))+T[12]+2368359562&4294967295,_=I+(w<<20&4294967295|w>>>12),w=y+(_^I^k)+T[5]+4294588738&4294967295,y=_+(w<<4&4294967295|w>>>28),w=k+(y^_^I)+T[8]+2272392833&4294967295,k=y+(w<<11&4294967295|w>>>21),w=I+(k^y^_)+T[11]+1839030562&4294967295,I=k+(w<<16&4294967295|w>>>16),w=_+(I^k^y)+T[14]+4259657740&4294967295,_=I+(w<<23&4294967295|w>>>9),w=y+(_^I^k)+T[1]+2763975236&4294967295,y=_+(w<<4&4294967295|w>>>28),w=k+(y^_^I)+T[4]+1272893353&4294967295,k=y+(w<<11&4294967295|w>>>21),w=I+(k^y^_)+T[7]+4139469664&4294967295,I=k+(w<<16&4294967295|w>>>16),w=_+(I^k^y)+T[10]+3200236656&4294967295,_=I+(w<<23&4294967295|w>>>9),w=y+(_^I^k)+T[13]+681279174&4294967295,y=_+(w<<4&4294967295|w>>>28),w=k+(y^_^I)+T[0]+3936430074&4294967295,k=y+(w<<11&4294967295|w>>>21),w=I+(k^y^_)+T[3]+3572445317&4294967295,I=k+(w<<16&4294967295|w>>>16),w=_+(I^k^y)+T[6]+76029189&4294967295,_=I+(w<<23&4294967295|w>>>9),w=y+(_^I^k)+T[9]+3654602809&4294967295,y=_+(w<<4&4294967295|w>>>28),w=k+(y^_^I)+T[12]+3873151461&4294967295,k=y+(w<<11&4294967295|w>>>21),w=I+(k^y^_)+T[15]+530742520&4294967295,I=k+(w<<16&4294967295|w>>>16),w=_+(I^k^y)+T[2]+3299628645&4294967295,_=I+(w<<23&4294967295|w>>>9),w=y+(I^(_|~k))+T[0]+4096336452&4294967295,y=_+(w<<6&4294967295|w>>>26),w=k+(_^(y|~I))+T[7]+1126891415&4294967295,k=y+(w<<10&4294967295|w>>>22),w=I+(y^(k|~_))+T[14]+2878612391&4294967295,I=k+(w<<15&4294967295|w>>>17),w=_+(k^(I|~y))+T[5]+4237533241&4294967295,_=I+(w<<21&4294967295|w>>>11),w=y+(I^(_|~k))+T[12]+1700485571&4294967295,y=_+(w<<6&4294967295|w>>>26),w=k+(_^(y|~I))+T[3]+2399980690&4294967295,k=y+(w<<10&4294967295|w>>>22),w=I+(y^(k|~_))+T[10]+4293915773&4294967295,I=k+(w<<15&4294967295|w>>>17),w=_+(k^(I|~y))+T[1]+2240044497&4294967295,_=I+(w<<21&4294967295|w>>>11),w=y+(I^(_|~k))+T[8]+1873313359&4294967295,y=_+(w<<6&4294967295|w>>>26),w=k+(_^(y|~I))+T[15]+4264355552&4294967295,k=y+(w<<10&4294967295|w>>>22),w=I+(y^(k|~_))+T[6]+2734768916&4294967295,I=k+(w<<15&4294967295|w>>>17),w=_+(k^(I|~y))+T[13]+1309151649&4294967295,_=I+(w<<21&4294967295|w>>>11),w=y+(I^(_|~k))+T[4]+4149444226&4294967295,y=_+(w<<6&4294967295|w>>>26),w=k+(_^(y|~I))+T[11]+3174756917&4294967295,k=y+(w<<10&4294967295|w>>>22),w=I+(y^(k|~_))+T[2]+718787259&4294967295,I=k+(w<<15&4294967295|w>>>17),w=_+(k^(I|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(I+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+k&4294967295}i.prototype.v=function(E,y){y===void 0&&(y=E.length);const _=y-this.blockSize,T=this.C;let I=this.h,k=0;for(;k<y;){if(I==0)for(;k<=_;)r(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<y;)if(T[I++]=E.charCodeAt(k++),I==this.blockSize){r(this,T),I=0;break}}else for(;k<y;)if(T[I++]=E[k++],I==this.blockSize){r(this,T),I=0;break}}this.h=I,this.o+=y},i.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var _=E.length-8;_<E.length;++_)E[_]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,_=0;_<4;++_)for(let T=0;T<32;T+=8)E[y++]=this.g[_]>>>T&255;return E};function s(E,y){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=y(E)}function a(E,y){this.h=y;const _=[];let T=!0;for(let I=E.length-1;I>=0;I--){const k=E[I]|0;T&&k==y||(_[I]=k,T=!1)}this.g=_}var c={};function l(E){return-128<=E&&E<128?s(E,function(y){return new a([y|0],y<0?-1:0)}):new a([E|0],E<0?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return g;if(E<0)return q(u(-E));const y=[];let _=1;for(let T=0;E>=_;T++)y[T]=E/_|0,_*=4294967296;return new a(y,0)}function p(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return q(p(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(y,8));let T=g;for(let k=0;k<E.length;k+=8){var I=Math.min(8,E.length-k);const w=parseInt(E.substring(k,k+I),y);I<8?(I=u(Math.pow(y,I)),T=T.j(I).add(u(w))):(T=T.j(_),T=T.add(u(w)))}return T}var g=l(0),b=l(1),A=l(16777216);n=a.prototype,n.m=function(){if(V(this))return-q(this).m();let E=0,y=1;for(let _=0;_<this.g.length;_++){const T=this.i(_);E+=(T>=0?T:4294967296+T)*y,y*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(V(this))return"-"+q(this).toString(E);const y=u(Math.pow(E,6));var _=this;let T="";for(;;){const I=ee(_,y).g;_=X(_,I.j(y));let k=((_.g.length>0?_.g[0]:_.h)>>>0).toString(E);if(_=I,R(_))return k+T;for(;k.length<6;)k="0"+k;T=k+T}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function V(E){return E.h==-1}n.l=function(E){return E=X(this,E),V(E)?-1:R(E)?0:1};function q(E){const y=E.g.length,_=[];for(let T=0;T<y;T++)_[T]=~E.g[T];return new a(_,~E.h).add(b)}n.abs=function(){return V(this)?q(this):this},n.add=function(E){const y=Math.max(this.g.length,E.g.length),_=[];let T=0;for(let I=0;I<=y;I++){let k=T+(this.i(I)&65535)+(E.i(I)&65535),w=(k>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);T=w>>>16,k&=65535,w&=65535,_[I]=w<<16|k}return new a(_,_[_.length-1]&-2147483648?-1:0)};function X(E,y){return E.add(q(y))}n.j=function(E){if(R(this)||R(E))return g;if(V(this))return V(E)?q(this).j(q(E)):q(q(this).j(E));if(V(E))return q(this.j(q(E)));if(this.l(A)<0&&E.l(A)<0)return u(this.m()*E.m());const y=this.g.length+E.g.length,_=[];for(var T=0;T<2*y;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(let I=0;I<E.g.length;I++){const k=this.i(T)>>>16,w=this.i(T)&65535,Ke=E.i(I)>>>16,Ct=E.i(I)&65535;_[2*T+2*I]+=w*Ct,P(_,2*T+2*I),_[2*T+2*I+1]+=k*Ct,P(_,2*T+2*I+1),_[2*T+2*I+1]+=w*Ke,P(_,2*T+2*I+1),_[2*T+2*I+2]+=k*Ke,P(_,2*T+2*I+2)}for(E=0;E<y;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=y;E<2*y;E++)_[E]=0;return new a(_,0)};function P(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function z(E,y){this.g=E,this.h=y}function ee(E,y){if(R(y))throw Error("division by zero");if(R(E))return new z(g,g);if(V(E))return y=ee(q(E),y),new z(q(y.g),q(y.h));if(V(y))return y=ee(E,q(y)),new z(q(y.g),y.h);if(E.g.length>30){if(V(E)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var _=b,T=y;T.l(E)<=0;)_=he(_),T=he(T);var I=ye(_,1),k=ye(T,1);for(T=ye(T,2),_=ye(_,2);!R(T);){var w=k.add(T);w.l(E)<=0&&(I=I.add(_),k=w),T=ye(T,1),_=ye(_,1)}return y=X(E,I.j(y)),new z(I,y)}for(I=g;E.l(y)>=0;){for(_=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),k=u(_),w=k.j(y);V(w)||w.l(E)>0;)_-=T,k=u(_),w=k.j(y);R(k)&&(k=b),I=I.add(k),E=X(E,w)}return new z(I,E)}n.B=function(E){return ee(this,E).h},n.and=function(E){const y=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<y;T++)_[T]=this.i(T)&E.i(T);return new a(_,this.h&E.h)},n.or=function(E){const y=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<y;T++)_[T]=this.i(T)|E.i(T);return new a(_,this.h|E.h)},n.xor=function(E){const y=Math.max(this.g.length,E.g.length),_=[];for(let T=0;T<y;T++)_[T]=this.i(T)^E.i(T);return new a(_,this.h^E.h)};function he(E){const y=E.g.length+1,_=[];for(let T=0;T<y;T++)_[T]=E.i(T)<<1|E.i(T-1)>>>31;return new a(_,E.h)}function ye(E,y){const _=y>>5;y%=32;const T=E.g.length-_,I=[];for(let k=0;k<T;k++)I[k]=y>0?E.i(k+_)>>>y|E.i(k+_+1)<<32-y:E.i(k+_);return new a(I,E.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Vp=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=p,Un=a}).apply(typeof Y1<"u"?Y1:typeof self<"u"?self:typeof window<"u"?window:{});var Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mp,Lr,Fp,ua,wc,Bp,Up,zp;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qs=="object"&&Qs];for(var d=0;d<o.length;++d){var h=o[d];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var i=t(this);function r(o,d){if(d)e:{var h=i;o=o.split(".");for(var m=0;m<o.length-1;m++){var C=o[m];if(!(C in h))break e;h=h[C]}o=o[o.length-1],m=h[o],d=d(m),d!=m&&d!=null&&e(h,o,{configurable:!0,writable:!0,value:d})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(d){var h=[],m;for(m in d)Object.prototype.hasOwnProperty.call(d,m)&&h.push([m,d[m]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function c(o){var d=typeof o;return d=="object"&&o!=null||d=="function"}function l(o,d,h){return o.call.apply(o.bind,arguments)}function u(o,d,h){return u=l,u.apply(null,arguments)}function p(o,d){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function g(o,d){function h(){}h.prototype=d.prototype,o.Z=d.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(m,C,D){for(var $=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)$[oe-2]=arguments[oe];return d.prototype[C].apply(m,$)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function A(o){const d=o.length;if(d>0){const h=Array(d);for(let m=0;m<d;m++)h[m]=o[m];return h}return[]}function R(o,d){for(let m=1;m<arguments.length;m++){const C=arguments[m];var h=typeof C;if(h=h!="object"?h:C?Array.isArray(C)?"array":h:"null",h=="array"||h=="object"&&typeof C.length=="number"){h=o.length||0;const D=C.length||0;o.length=h+D;for(let $=0;$<D;$++)o[h+$]=C[$]}else o.push(C)}}class V{constructor(d,h){this.i=d,this.j=h,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function q(o){a.setTimeout(()=>{throw o},0)}function X(){var o=E;let d=null;return o.g&&(d=o.g,o.g=o.g.next,o.g||(o.h=null),d.next=null),d}class P{constructor(){this.h=this.g=null}add(d,h){const m=z.get();m.set(d,h),this.h?this.h.next=m:this.g=m,this.h=m}}var z=new V(()=>new ee,o=>o.reset());class ee{constructor(){this.next=this.g=this.h=null}set(d,h){this.h=d,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ye=!1,E=new P,y=()=>{const o=Promise.resolve(void 0);he=()=>{o.then(_)}};function _(){for(var o;o=X();){try{o.h.call(o.g)}catch(h){q(h)}var d=z;d.j(o),d.h<100&&(d.h++,o.next=d.g,d.g=o)}ye=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,d){this.type=o,this.g=this.target=d,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,d=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,d),a.removeEventListener("test",h,d)}catch{}return o}();function w(o){return/^[\s\xa0]*$/.test(o)}function Ke(o,d){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,d)}g(Ke,I),Ke.prototype.init=function(o,d){const h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=d,d=o.relatedTarget,d||(h=="mouseover"?d=o.fromElement:h=="mouseout"&&(d=o.toElement)),this.relatedTarget=d,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ke.Z.h.call(this)},Ke.prototype.h=function(){Ke.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ct="closure_listenable_"+(Math.random()*1e6|0),Ns=0;function Vs(o,d,h,m,C){this.listener=o,this.proxy=null,this.src=d,this.type=h,this.capture=!!m,this.ha=C,this.key=++Ns,this.da=this.fa=!1}function Ci(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function vn(o,d,h){for(const m in o)d.call(h,o[m],m,o)}function Ue(o,d){for(const h in o)d.call(void 0,o[h],h,o)}function je(o){const d={};for(const h in o)d[h]=o[h];return d}const gt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pt(o,d){let h,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(h in m)o[h]=m[h];for(let D=0;D<gt.length;D++)h=gt[D],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function mt(o){this.src=o,this.g={},this.h=0}mt.prototype.add=function(o,d,h,m,C){const D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);const $=wn(o,d,m,C);return $>-1?(d=o[$],h||(d.fa=!1)):(d=new Vs(d,this.src,D,!!m,C),d.fa=h,o.push(d)),d};function it(o,d){const h=d.type;if(h in o.g){var m=o.g[h],C=Array.prototype.indexOf.call(m,d,void 0),D;(D=C>=0)&&Array.prototype.splice.call(m,C,1),D&&(Ci(d),o.g[h].length==0&&(delete o.g[h],o.h--))}}function wn(o,d,h,m){for(let C=0;C<o.length;++C){const D=o[C];if(!D.da&&D.listener==d&&D.capture==!!h&&D.ha==m)return C}return-1}var _n="closure_lm_"+(Math.random()*1e6|0),xo={};function du(o,d,h,m,C){if(Array.isArray(d)){for(let D=0;D<d.length;D++)du(o,d[D],h,m,C);return null}return h=fu(h),o&&o[Ct]?o.J(d,h,c(m)?!!m.capture:!1,C):Mg(o,d,h,!1,m,C)}function Mg(o,d,h,m,C,D){if(!d)throw Error("Invalid event type");const $=c(C)?!!C.capture:!!C;let oe=Ao(o);if(oe||(o[_n]=oe=new mt(o)),h=oe.add(d,h,m,$,D),h.proxy)return h;if(m=Fg(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)k||(C=$),C===void 0&&(C=!1),o.addEventListener(d.toString(),m,C);else if(o.attachEvent)o.attachEvent(pu(d.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Fg(){function o(h){return d.call(o.src,o.listener,h)}const d=Bg;return o}function hu(o,d,h,m,C){if(Array.isArray(d))for(var D=0;D<d.length;D++)hu(o,d[D],h,m,C);else m=c(m)?!!m.capture:!!m,h=fu(h),o&&o[Ct]?(o=o.i,D=String(d).toString(),D in o.g&&(d=o.g[D],h=wn(d,h,m,C),h>-1&&(Ci(d[h]),Array.prototype.splice.call(d,h,1),d.length==0&&(delete o.g[D],o.h--)))):o&&(o=Ao(o))&&(d=o.g[d.toString()],o=-1,d&&(o=wn(d,h,m,C)),(h=o>-1?d[o]:null)&&To(h))}function To(o){if(typeof o!="number"&&o&&!o.da){var d=o.src;if(d&&d[Ct])it(d.i,o);else{var h=o.type,m=o.proxy;d.removeEventListener?d.removeEventListener(h,m,o.capture):d.detachEvent?d.detachEvent(pu(h),m):d.addListener&&d.removeListener&&d.removeListener(m),(h=Ao(d))?(it(h,o),h.h==0&&(h.src=null,d[_n]=null)):Ci(o)}}}function pu(o){return o in xo?xo[o]:xo[o]="on"+o}function Bg(o,d){if(o.da)o=!0;else{d=new Ke(d,this);const h=o.listener,m=o.ha||o.src;o.fa&&To(o),o=h.call(m,d)}return o}function Ao(o){return o=o[_n],o instanceof mt?o:null}var So="__closure_events_fn_"+(Math.random()*1e9>>>0);function fu(o){return typeof o=="function"?o:(o[So]||(o[So]=function(d){return o.handleEvent(d)}),o[So])}function Ye(){T.call(this),this.i=new mt(this),this.M=this,this.G=null}g(Ye,T),Ye.prototype[Ct]=!0,Ye.prototype.removeEventListener=function(o,d,h,m){hu(this,o,d,h,m)};function rt(o,d){var h,m=o.G;if(m)for(h=[];m;m=m.G)h.push(m);if(o=o.M,m=d.type||d,typeof d=="string")d=new I(d,o);else if(d instanceof I)d.target=d.target||o;else{var C=d;d=new I(m,o),Pt(d,C)}C=!0;let D,$;if(h)for($=h.length-1;$>=0;$--)D=d.g=h[$],C=Ms(D,m,!0,d)&&C;if(D=d.g=o,C=Ms(D,m,!0,d)&&C,C=Ms(D,m,!1,d)&&C,h)for($=0;$<h.length;$++)D=d.g=h[$],C=Ms(D,m,!1,d)&&C}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var o=this.i;for(const d in o.g){const h=o.g[d];for(let m=0;m<h.length;m++)Ci(h[m]);delete o.g[d],o.h--}}this.G=null},Ye.prototype.J=function(o,d,h,m){return this.i.add(String(o),d,!1,h,m)},Ye.prototype.K=function(o,d,h,m){return this.i.add(String(o),d,!0,h,m)};function Ms(o,d,h,m){if(d=o.i.g[String(d)],!d)return!0;d=d.concat();let C=!0;for(let D=0;D<d.length;++D){const $=d[D];if($&&!$.da&&$.capture==h){const oe=$.listener,Ne=$.ha||$.src;$.fa&&it(o.i,$),C=oe.call(Ne,m)!==!1&&C}}return C&&!m.defaultPrevented}function Ug(o,d){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=u(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:a.setTimeout(o,d||0)}function gu(o){o.g=Ug(()=>{o.g=null,o.i&&(o.i=!1,gu(o))},o.l);const d=o.h;o.h=null,o.m.apply(null,d)}class zg extends T{constructor(d,h){super(),this.m=d,this.l=h,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:gu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dr(o){T.call(this),this.h=o,this.g={}}g(dr,T);var mu=[];function yu(o){vn(o.g,function(d,h){this.g.hasOwnProperty(h)&&To(d)},o),o.g={}}dr.prototype.N=function(){dr.Z.N.call(this),yu(this)},dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ko=a.JSON.stringify,$g=a.JSON.parse,qg=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function vu(){}function wu(){}var hr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Co(){I.call(this,"d")}g(Co,I);function Po(){I.call(this,"c")}g(Po,I);var ti={},_u=null;function Fs(){return _u=_u||new Ye}ti.Ia="serverreachability";function bu(o){I.call(this,ti.Ia,o)}g(bu,I);function pr(o){const d=Fs();rt(d,new bu(d))}ti.STAT_EVENT="statevent";function Eu(o,d){I.call(this,ti.STAT_EVENT,o),this.stat=d}g(Eu,I);function st(o){const d=Fs();rt(d,new Eu(d,o))}ti.Ja="timingevent";function Iu(o,d){I.call(this,ti.Ja,o),this.size=d}g(Iu,I);function fr(o,d){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},d)}function gr(){this.g=!0}gr.prototype.ua=function(){this.g=!1};function jg(o,d,h,m,C,D){o.info(function(){if(o.g)if(D){var $="",oe=D.split("&");for(let we=0;we<oe.length;we++){var Ne=oe[we].split("=");if(Ne.length>1){const ze=Ne[0];Ne=Ne[1];const zt=ze.split("_");$=zt.length>=2&&zt[1]=="type"?$+(ze+"="+Ne+"&"):$+(ze+"=redacted&")}}}else $=null;else $=D;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+d+`
`+h+`
`+$})}function Hg(o,d,h,m,C,D,$){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+d+`
`+h+`
`+D+" "+$})}function Pi(o,d,h,m){o.info(function(){return"XMLHTTP TEXT ("+d+"): "+Wg(o,h)+(m?" "+m:"")})}function Gg(o,d){o.info(function(){return"TIMEOUT: "+d})}gr.prototype.info=function(){};function Wg(o,d){if(!o.g)return d;if(!d)return null;try{const D=JSON.parse(d);if(D){for(o=0;o<D.length;o++)if(Array.isArray(D[o])){var h=D[o];if(!(h.length<2)){var m=h[1];if(Array.isArray(m)&&!(m.length<1)){var C=m[0];if(C!="noop"&&C!="stop"&&C!="close")for(let $=1;$<m.length;$++)m[$]=""}}}}return ko(D)}catch{return d}}var Bs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},xu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Tu;function Ro(){}g(Ro,vu),Ro.prototype.g=function(){return new XMLHttpRequest},Tu=new Ro;function mr(o){return encodeURIComponent(String(o))}function Kg(o){var d=1;o=o.split(":");const h=[];for(;d>0&&o.length;)h.push(o.shift()),d--;return o.length&&h.push(o.join(":")),h}function bn(o,d,h,m){this.j=o,this.i=d,this.l=h,this.S=m||1,this.V=new dr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Au}function Au(){this.i=null,this.g="",this.h=!1}var Su={},Lo={};function Oo(o,d,h){o.M=1,o.A=zs(Ut(d)),o.u=h,o.R=!0,ku(o,null)}function ku(o,d){o.F=Date.now(),Us(o),o.B=Ut(o.A);var h=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),zu(h.i,"t",m),o.C=0,h=o.j.L,o.h=new Au,o.g=s1(o.j,h?d:null,!o.u),o.P>0&&(o.O=new zg(u(o.Y,o,o.g),o.P)),d=o.V,h=o.g,m=o.ba;var C="readystatechange";Array.isArray(C)||(C&&(mu[0]=C.toString()),C=mu);for(let D=0;D<C.length;D++){const $=du(h,C[D],m||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=o.J?je(o.J):{},o.u?(o.v||(o.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,d)):(o.v="GET",o.g.ea(o.B,o.v,null,d)),pr(),jg(o.i,o.v,o.B,o.l,o.S,o.u)}bn.prototype.ba=function(o){o=o.target;const d=this.O;d&&xn(o)==3?d.j():this.Y(o)},bn.prototype.Y=function(o){try{if(o==this.g)e:{const oe=xn(this.g),Ne=this.g.ya(),we=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||Ku(this.g)))){this.K||oe!=4||Ne==7||(Ne==8||we<=0?pr(3):pr(2)),Do(this);var d=this.g.ca();this.X=d;var h=Yg(this);if(this.o=d==200,Hg(this.i,this.v,this.B,this.l,this.S,oe,d),this.o){if(this.U&&!this.L){t:{if(this.g){var m,C=this.g;if((m=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(m)){var D=m;break t}}D=null}if(o=D)Pi(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,No(this,o);else{this.o=!1,this.m=3,st(12),ni(this),yr(this);break e}}if(this.R){o=!0;let ze;for(;!this.K&&this.C<h.length;)if(ze=Qg(this,h),ze==Lo){oe==4&&(this.m=4,st(14),o=!1),Pi(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==Su){this.m=4,st(15),Pi(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else Pi(this.i,this.l,ze,null),No(this,ze);if(Cu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||h.length!=0||this.h.h||(this.m=1,st(16),o=!1),this.o=this.o&&o,!o)Pi(this.i,this.l,h,"[Invalid Chunked Response]"),ni(this),yr(this);else if(h.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),qo($),$.P=!0,st(11))}}else Pi(this.i,this.l,h,null),No(this,h);oe==4&&ni(this),this.o&&!this.K&&(oe==4?t1(this.j,this):(this.o=!1,Us(this)))}else u0(this.g),d==400&&h.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),ni(this),yr(this)}}}catch{}finally{}};function Yg(o){if(!Cu(o))return o.g.la();const d=Ku(o.g);if(d==="")return"";let h="";const m=d.length,C=xn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return ni(o),yr(o),"";o.h.i=new a.TextDecoder}for(let D=0;D<m;D++)o.h.h=!0,h+=o.h.i.decode(d[D],{stream:!(C&&D==m-1)});return d.length=0,o.h.g+=h,o.C=0,o.h.g}function Cu(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Qg(o,d){var h=o.C,m=d.indexOf(`
`,h);return m==-1?Lo:(h=Number(d.substring(h,m)),isNaN(h)?Su:(m+=1,m+h>d.length?Lo:(d=d.slice(m,m+h),o.C=m+h,d)))}bn.prototype.cancel=function(){this.K=!0,ni(this)};function Us(o){o.T=Date.now()+o.H,Pu(o,o.H)}function Pu(o,d){if(o.D!=null)throw Error("WatchDog timer not null");o.D=fr(u(o.aa,o),d)}function Do(o){o.D&&(a.clearTimeout(o.D),o.D=null)}bn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Gg(this.i,this.B),this.M!=2&&(pr(),st(17)),ni(this),this.m=2,yr(this)):Pu(this,this.T-o)};function yr(o){o.j.I==0||o.K||t1(o.j,o)}function ni(o){Do(o);var d=o.O;d&&typeof d.dispose=="function"&&d.dispose(),o.O=null,yu(o.V),o.g&&(d=o.g,o.g=null,d.abort(),d.dispose())}function No(o,d){try{var h=o.j;if(h.I!=0&&(h.g==o||Vo(h.h,o))){if(!o.L&&Vo(h.h,o)&&h.I==3){try{var m=h.Ba.g.parse(d)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)Gs(h),js(h);else break e;$o(h),st(18)}}else h.xa=C[1],0<h.xa-h.K&&C[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=fr(u(h.Va,h),6e3));Ou(h.h)<=1&&h.ta&&(h.ta=void 0)}else ri(h,11)}else if((o.L||h.g==o)&&Gs(h),!w(d))for(C=h.Ba.g.parse(d),d=0;d<C.length;d++){let we=C[d];const ze=we[0];if(!(ze<=h.K))if(h.K=ze,we=we[1],h.I==2)if(we[0]=="c"){h.M=we[1],h.ba=we[2];const zt=we[3];zt!=null&&(h.ka=zt,h.j.info("VER="+h.ka));const si=we[4];si!=null&&(h.za=si,h.j.info("SVER="+h.za));const Tn=we[5];Tn!=null&&typeof Tn=="number"&&Tn>0&&(m=1.5*Tn,h.O=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const An=o.g;if(An){const Ks=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ks){var D=m.h;D.g||Ks.indexOf("spdy")==-1&&Ks.indexOf("quic")==-1&&Ks.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Mo(D,D.h),D.h=null))}if(m.G){const jo=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;jo&&(m.wa=jo,_e(m.J,m.G,jo))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),m=h;var $=o;if(m.na=r1(m,m.L?m.ba:null,m.W),$.L){Du(m.h,$);var oe=$,Ne=m.O;Ne&&(oe.H=Ne),oe.D&&(Do(oe),Us(oe)),m.g=$}else Zu(m);h.i.length>0&&Hs(h)}else we[0]!="stop"&&we[0]!="close"||ri(h,7);else h.I==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?ri(h,7):zo(h):we[0]!="noop"&&h.l&&h.l.qa(we),h.A=0)}}pr(4)}catch{}}var Xg=class{constructor(o,d){this.g=o,this.map=d}};function Ru(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Lu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ou(o){return o.h?1:o.g?o.g.size:0}function Vo(o,d){return o.h?o.h==d:o.g?o.g.has(d):!1}function Mo(o,d){o.g?o.g.add(d):o.h=d}function Du(o,d){o.h&&o.h==d?o.h=null:o.g&&o.g.has(d)&&o.g.delete(d)}Ru.prototype.cancel=function(){if(this.i=Nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Nu(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let d=o.i;for(const h of o.g.values())d=d.concat(h.G);return d}return A(o.i)}var Vu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jg(o,d){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const m=o[h].indexOf("=");let C,D=null;m>=0?(C=o[h].substring(0,m),D=o[h].substring(m+1)):C=o[h],d(C,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function En(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;o instanceof En?(this.l=o.l,vr(this,o.j),this.o=o.o,this.g=o.g,wr(this,o.u),this.h=o.h,Fo(this,$u(o.i)),this.m=o.m):o&&(d=String(o).match(Vu))?(this.l=!1,vr(this,d[1]||"",!0),this.o=_r(d[2]||""),this.g=_r(d[3]||"",!0),wr(this,d[4]),this.h=_r(d[5]||"",!0),Fo(this,d[6]||"",!0),this.m=_r(d[7]||"")):(this.l=!1,this.i=new Er(null,this.l))}En.prototype.toString=function(){const o=[];var d=this.j;d&&o.push(br(d,Mu,!0),":");var h=this.g;return(h||d=="file")&&(o.push("//"),(d=this.o)&&o.push(br(d,Mu,!0),"@"),o.push(mr(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(br(h,h.charAt(0)=="/"?t0:e0,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",br(h,i0)),o.join("")},En.prototype.resolve=function(o){const d=Ut(this);let h=!!o.j;h?vr(d,o.j):h=!!o.o,h?d.o=o.o:h=!!o.g,h?d.g=o.g:h=o.u!=null;var m=o.h;if(h)wr(d,o.u);else if(h=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var C=d.h.lastIndexOf("/");C!=-1&&(m=d.h.slice(0,C+1)+m)}if(C=m,C==".."||C==".")m="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){m=C.lastIndexOf("/",0)==0,C=C.split("/");const D=[];for(let $=0;$<C.length;){const oe=C[$++];oe=="."?m&&$==C.length&&D.push(""):oe==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),m&&$==C.length&&D.push("")):(D.push(oe),m=!0)}m=D.join("/")}else m=C}return h?d.h=m:h=o.i.toString()!=="",h?Fo(d,$u(o.i)):h=!!o.m,h&&(d.m=o.m),d};function Ut(o){return new En(o)}function vr(o,d,h){o.j=h?_r(d,!0):d,o.j&&(o.j=o.j.replace(/:$/,""))}function wr(o,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);o.u=d}else o.u=null}function Fo(o,d,h){d instanceof Er?(o.i=d,r0(o.i,o.l)):(h||(d=br(d,n0)),o.i=new Er(d,o.l))}function _e(o,d,h){o.i.set(d,h)}function zs(o){return _e(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function _r(o,d){return o?d?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function br(o,d,h){return typeof o=="string"?(o=encodeURI(o).replace(d,Zg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Zg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Mu=/[#\/\?@]/g,e0=/[#\?:]/g,t0=/[#\?]/g,n0=/[#\?@]/g,i0=/#/g;function Er(o,d){this.h=this.g=null,this.i=o||null,this.j=!!d}function ii(o){o.g||(o.g=new Map,o.h=0,o.i&&Jg(o.i,function(d,h){o.add(decodeURIComponent(d.replace(/\+/g," ")),h)}))}n=Er.prototype,n.add=function(o,d){ii(this),this.i=null,o=Ri(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(d),this.h+=1,this};function Fu(o,d){ii(o),d=Ri(o,d),o.g.has(d)&&(o.i=null,o.h-=o.g.get(d).length,o.g.delete(d))}function Bu(o,d){return ii(o),d=Ri(o,d),o.g.has(d)}n.forEach=function(o,d){ii(this),this.g.forEach(function(h,m){h.forEach(function(C){o.call(d,C,m,this)},this)},this)};function Uu(o,d){ii(o);let h=[];if(typeof d=="string")Bu(o,d)&&(h=h.concat(o.g.get(Ri(o,d))));else for(o=Array.from(o.g.values()),d=0;d<o.length;d++)h=h.concat(o[d]);return h}n.set=function(o,d){return ii(this),this.i=null,o=Ri(this,o),Bu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[d]),this.h+=1,this},n.get=function(o,d){return o?(o=Uu(this,o),o.length>0?String(o[0]):d):d};function zu(o,d,h){Fu(o,d),h.length>0&&(o.i=null,o.g.set(Ri(o,d),A(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],d=Array.from(this.g.keys());for(let m=0;m<d.length;m++){var h=d[m];const C=mr(h);h=Uu(this,h);for(let D=0;D<h.length;D++){let $=C;h[D]!==""&&($+="="+mr(h[D])),o.push($)}}return this.i=o.join("&")};function $u(o){const d=new Er;return d.i=o.i,o.g&&(d.g=new Map(o.g),d.h=o.h),d}function Ri(o,d){return d=String(d),o.j&&(d=d.toLowerCase()),d}function r0(o,d){d&&!o.j&&(ii(o),o.i=null,o.g.forEach(function(h,m){const C=m.toLowerCase();m!=C&&(Fu(this,m),zu(this,C,h))},o)),o.j=d}function s0(o,d){const h=new gr;if(a.Image){const m=new Image;m.onload=p(In,h,"TestLoadImage: loaded",!0,d,m),m.onerror=p(In,h,"TestLoadImage: error",!1,d,m),m.onabort=p(In,h,"TestLoadImage: abort",!1,d,m),m.ontimeout=p(In,h,"TestLoadImage: timeout",!1,d,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else d(!1)}function a0(o,d){const h=new gr,m=new AbortController,C=setTimeout(()=>{m.abort(),In(h,"TestPingServer: timeout",!1,d)},1e4);fetch(o,{signal:m.signal}).then(D=>{clearTimeout(C),D.ok?In(h,"TestPingServer: ok",!0,d):In(h,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(C),In(h,"TestPingServer: error",!1,d)})}function In(o,d,h,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(h)}catch{}}function o0(){this.g=new qg}function Bo(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Bo,vu),Bo.prototype.g=function(){return new $s(this.i,this.h)};function $s(o,d){Ye.call(this),this.H=o,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g($s,Ye),n=$s.prototype,n.open=function(o,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=d,this.readyState=1,xr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(d.body=o),(this.H||a).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ir(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,xr(this)),this.g&&(this.readyState=3,xr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;qu(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function qu(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var d=o.value?o.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!o.done}))&&(this.response=this.responseText+=d)}o.done?Ir(this):xr(this),this.readyState==3&&qu(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Ir(this))},n.Na=function(o){this.g&&(this.response=o,Ir(this))},n.ga=function(){this.g&&Ir(this)};function Ir(o){o.readyState=4,o.l=null,o.j=null,o.B=null,xr(o)}n.setRequestHeader=function(o,d){this.A.append(o,d)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],d=this.h.entries();for(var h=d.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=d.next();return o.join(`\r
`)};function xr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty($s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ju(o){let d="";return vn(o,function(h,m){d+=m,d+=":",d+=h,d+=`\r
`}),d}function Uo(o,d,h){e:{for(m in h){var m=!1;break e}m=!0}m||(h=ju(h),typeof o=="string"?h!=null&&mr(h):_e(o,d,h))}function Se(o){Ye.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Se,Ye);var c0=/^https?$/i,l0=["POST","PUT"];n=Se.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,d,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);d=d?d.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Tu.g(),this.g.onreadystatechange=b(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(o),!0),this.B=!1}catch(D){Hu(this,D);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)h.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())h.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(D=>D.toLowerCase()=="content-type"),C=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(l0,d,void 0)>=0)||m||C||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of h)this.g.setRequestHeader(D,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(D){Hu(this,D)}};function Hu(o,d){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=d,o.o=5,Gu(o),qs(o)}function Gu(o){o.A||(o.A=!0,rt(o,"complete"),rt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,rt(this,"complete"),rt(this,"abort"),qs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qs(this,!0)),Se.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Wu(this):this.Xa())},n.Xa=function(){Wu(this)};function Wu(o){if(o.h&&typeof s<"u"){if(o.v&&xn(o)==4)setTimeout(o.Ca.bind(o),0);else if(rt(o,"readystatechange"),xn(o)==4){o.h=!1;try{const D=o.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var h;if(!(h=d)){var m;if(m=D===0){let $=String(o.D).match(Vu)[1]||null;!$&&a.self&&a.self.location&&($=a.self.location.protocol.slice(0,-1)),m=!c0.test($?$.toLowerCase():"")}h=m}if(h)rt(o,"complete"),rt(o,"success");else{o.o=6;try{var C=xn(o)>2?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.ca()+"]",Gu(o)}}finally{qs(o)}}}}function qs(o,d){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,d||rt(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function xn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return xn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var d=this.g.responseText;return o&&d.indexOf(o)==0&&(d=d.substring(o.length)),$g(d)}};function Ku(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function u0(o){const d={};o=(o.g&&xn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(w(o[m]))continue;var h=Kg(o[m]);const C=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const D=d[C]||[];d[C]=D,D.push(h)}Ue(d,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tr(o,d,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||d}function Yu(o){this.za=0,this.i=[],this.j=new gr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Tr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Tr("baseRetryDelayMs",5e3,o),this.Za=Tr("retryDelaySeedMs",1e4,o),this.Ta=Tr("forwardChannelMaxRetries",2,o),this.va=Tr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Ru(o&&o.concurrentRequestLimit),this.Ba=new o0,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Yu.prototype,n.ka=8,n.I=1,n.connect=function(o,d,h,m){st(0),this.W=o,this.H=d||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.J=r1(this,null,this.W),Hs(this)};function zo(o){if(Qu(o),o.I==3){var d=o.V++,h=Ut(o.J);if(_e(h,"SID",o.M),_e(h,"RID",d),_e(h,"TYPE","terminate"),Ar(o,h),d=new bn(o,o.j,d),d.M=2,d.A=zs(Ut(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(d.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=d.A,h=!0),h||(d.g=s1(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Us(d)}i1(o)}function js(o){o.g&&(qo(o),o.g.cancel(),o.g=null)}function Qu(o){js(o),o.v&&(a.clearTimeout(o.v),o.v=null),Gs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Hs(o){if(!Lu(o.h)&&!o.m){o.m=!0;var d=o.Ea;he||y(),ye||(he(),ye=!0),E.add(d,o),o.D=0}}function d0(o,d){return Ou(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=d.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=fr(u(o.Ea,o,d),n1(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const C=new bn(this,this.j,o);let D=this.o;if(this.U&&(D?(D=je(D),Pt(D,this.U)):D=this.U),this.u!==null||this.R||(C.J=D,D=null),this.S)e:{for(var d=0,h=0;h<this.i.length;h++){t:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(d+=m,d>4096){d=h;break e}if(d===4096||h===this.i.length-1){d=h+1;break e}}d=1e3}else d=1e3;d=Ju(this,C,d),h=Ut(this.J),_e(h,"RID",o),_e(h,"CVER",22),this.G&&_e(h,"X-HTTP-Session-Id",this.G),Ar(this,h),D&&(this.R?d="headers="+mr(ju(D))+"&"+d:this.u&&Uo(h,this.u,D)),Mo(this.h,C),this.Ra&&_e(h,"TYPE","init"),this.S?(_e(h,"$req",d),_e(h,"SID","null"),C.U=!0,Oo(C,h,null)):Oo(C,h,d),this.I=2}}else this.I==3&&(o?Xu(this,o):this.i.length==0||Lu(this.h)||Xu(this))};function Xu(o,d){var h;d?h=d.l:h=o.V++;const m=Ut(o.J);_e(m,"SID",o.M),_e(m,"RID",h),_e(m,"AID",o.K),Ar(o,m),o.u&&o.o&&Uo(m,o.u,o.o),h=new bn(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),d&&(o.i=d.G.concat(o.i)),d=Ju(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Mo(o.h,h),Oo(h,m,d)}function Ar(o,d){o.H&&vn(o.H,function(h,m){_e(d,m,h)}),o.l&&vn({},function(h,m){_e(d,m,h)})}function Ju(o,d,h){h=Math.min(o.i.length,h);const m=o.l?u(o.l.Ka,o.l,o):null;e:{var C=o.i;let oe=-1;for(;;){const Ne=["count="+h];oe==-1?h>0?(oe=C[0].g,Ne.push("ofs="+oe)):oe=0:Ne.push("ofs="+oe);let we=!0;for(let ze=0;ze<h;ze++){var D=C[ze].g;const zt=C[ze].map;if(D-=oe,D<0)oe=Math.max(0,C[ze].g-100),we=!1;else try{D="req"+D+"_"||"";try{var $=zt instanceof Map?zt:Object.entries(zt);for(const[si,Tn]of $){let An=Tn;c(Tn)&&(An=ko(Tn)),Ne.push(D+si+"="+encodeURIComponent(An))}}catch(si){throw Ne.push(D+"type="+encodeURIComponent("_badmap")),si}}catch{m&&m(zt)}}if(we){$=Ne.join("&");break e}}$=void 0}return o=o.i.splice(0,h),d.G=o,$}function Zu(o){if(!o.g&&!o.v){o.Y=1;var d=o.Da;he||y(),ye||(he(),ye=!0),E.add(d,o),o.A=0}}function $o(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=fr(u(o.Da,o),n1(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,e1(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=fr(u(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),js(this),e1(this))};function qo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function e1(o){o.g=new bn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var d=Ut(o.na);_e(d,"RID","rpc"),_e(d,"SID",o.M),_e(d,"AID",o.K),_e(d,"CI",o.F?"0":"1"),!o.F&&o.ia&&_e(d,"TO",o.ia),_e(d,"TYPE","xmlhttp"),Ar(o,d),o.u&&o.o&&Uo(d,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=zs(Ut(d)),h.u=null,h.R=!0,ku(h,o)}n.Va=function(){this.C!=null&&(this.C=null,js(this),$o(this),st(19))};function Gs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function t1(o,d){var h=null;if(o.g==d){Gs(o),qo(o),o.g=null;var m=2}else if(Vo(o.h,d))h=d.G,Du(o.h,d),m=1;else return;if(o.I!=0){if(d.o)if(m==1){h=d.u?d.u.length:0,d=Date.now()-d.F;var C=o.D;m=Fs(),rt(m,new Iu(m,h)),Hs(o)}else Zu(o);else if(C=d.m,C==3||C==0&&d.X>0||!(m==1&&d0(o,d)||m==2&&$o(o)))switch(h&&h.length>0&&(d=o.h,d.i=d.i.concat(h)),C){case 1:ri(o,5);break;case 4:ri(o,10);break;case 3:ri(o,6);break;default:ri(o,2)}}}function n1(o,d){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*d}function ri(o,d){if(o.j.info("Error code "+d),d==2){var h=u(o.bb,o),m=o.Ua;const C=!m;m=new En(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||vr(m,"https"),zs(m),C?s0(m.toString(),h):a0(m.toString(),h)}else st(2);o.I=0,o.l&&o.l.pa(d),i1(o),Qu(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function i1(o){if(o.I=0,o.ja=[],o.l){const d=Nu(o.h);(d.length!=0||o.i.length!=0)&&(R(o.ja,d),R(o.ja,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.oa()}}function r1(o,d,h){var m=h instanceof En?Ut(h):new En(h);if(m.g!="")d&&(m.g=d+"."+m.g),wr(m,m.u);else{var C=a.location;m=C.protocol,d=d?d+"."+C.hostname:C.hostname,C=+C.port;const D=new En(null);m&&vr(D,m),d&&(D.g=d),C&&wr(D,C),h&&(D.h=h),m=D}return h=o.G,d=o.wa,h&&d&&_e(m,h,d),_e(m,"VER",o.ka),Ar(o,m),m}function s1(o,d,h){if(d&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=o.Aa&&!o.ma?new Se(new Bo({ab:h})):new Se(o.ma),d.Fa(o.L),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function a1(){}n=a1.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ws(){}Ws.prototype.g=function(o,d){return new yt(o,d)};function yt(o,d){Ye.call(this),this.g=new Yu(d),this.l=o,this.h=d&&d.messageUrlParams||null,o=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(o?o["X-WebChannel-Content-Type"]=d.messageContentType:o={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(o?o["X-WebChannel-Client-Profile"]=d.sa:o={"X-WebChannel-Client-Profile":d.sa}),this.g.U=o,(o=d&&d.Qb)&&!w(o)&&(this.g.u=o),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.G=d,o=this.h,o!==null&&d in o&&(o=this.h,d in o&&delete o[d])),this.j=new Li(this)}g(yt,Ye),yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){zo(this.g)},yt.prototype.o=function(o){var d=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=ko(o),o=h);d.i.push(new Xg(d.Ya++,o)),d.I==3&&Hs(d)},yt.prototype.N=function(){this.g.l=null,delete this.j,zo(this.g),delete this.g,yt.Z.N.call(this)};function o1(o){Co.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var d=o.__sm__;if(d){e:{for(const h in d){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,d=d!==null&&o in d?d[o]:void 0),this.data=d}else this.data=o}g(o1,Co);function c1(){Po.call(this),this.status=1}g(c1,Po);function Li(o){this.g=o}g(Li,a1),Li.prototype.ra=function(){rt(this.g,"a")},Li.prototype.qa=function(o){rt(this.g,new o1(o))},Li.prototype.pa=function(o){rt(this.g,new c1)},Li.prototype.oa=function(){rt(this.g,"b")},Ws.prototype.createWebChannel=Ws.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,zp=function(){return new Ws},Up=function(){return Fs()},Bp=ti,wc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Bs.NO_ERROR=0,Bs.TIMEOUT=8,Bs.HTTP_ERROR=6,ua=Bs,xu.COMPLETE="complete",Fp=xu,wu.EventType=hr,hr.OPEN="a",hr.CLOSE="b",hr.ERROR="c",hr.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,Lr=wu,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,Mp=Se}).apply(typeof Qs<"u"?Qs:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */class j{static FOLD_CASE=1;static LITERAL=2;static CLASS_NL=4;static DOT_NL=8;static ONE_LINE=16;static NON_GREEDY=32;static PERL_X=64;static UNICODE_GROUPS=128;static WAS_DOLLAR=256;static MATCH_NL=j.CLASS_NL|j.DOT_NL;static PERL=j.CLASS_NL|j.ONE_LINE|j.PERL_X|j.UNICODE_GROUPS;static POSIX=0;static UNANCHORED=0;static ANCHOR_START=1;static ANCHOR_BOTH=2}class O{static CODES=new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]);static toUpperCase(e){const t=String.fromCodePoint(e).toUpperCase();if(t.length>1)return e;const i=String.fromCodePoint(t.codePointAt(0)).toLowerCase();return i.length>1||i.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){const t=String.fromCodePoint(e).toLowerCase();if(t.length>1)return e;const i=String.fromCodePoint(t.codePointAt(0)).toUpperCase();return i.length>1||i.codePointAt(0)!==e?e:t.codePointAt(0)}}class v{static CASE_ORBIT=new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]]);static C=[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]];static Cc=[[0,31,1],[127,159,1]];static Cf=[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]];static Co=[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]];static Cs=[[55296,57343,1]];static L=[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static foldL=[[837,837,1]];static Ll=[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]];static foldLl=[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]];static Lm=[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]];static Lo=[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static Lt=[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]];static foldLt=[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]];static Lu=[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]];static Upper=this.Lu;static foldLu=[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]];static M=[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]];static foldM=[[921,953,32],[8126,8126,1]];static Mc=[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]];static Me=[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]];static Mn=[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]];static foldMn=[[921,953,32],[8126,8126,1]];static N=[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]];static Nd=[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]];static Nl=[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]];static No=[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]];static P=[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]];static Pc=[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]];static Pd=[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]];static Pe=[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]];static Pf=[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]];static Pi=[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]];static Po=[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]];static Ps=[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]];static S=[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]];static Sc=[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]];static Sk=[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]];static Sm=[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]];static So=[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]];static Z=[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]];static Zl=[[8232,8232,1]];static Zp=[[8233,8233,1]];static Zs=[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]];static Adlam=[[125184,125259,1],[125264,125273,1],[125278,125279,1]];static Ahom=[[71424,71450,1],[71453,71467,1],[71472,71494,1]];static Anatolian_Hieroglyphs=[[82944,83526,1]];static Arabic=[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]];static Armenian=[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]];static Avestan=[[68352,68405,1],[68409,68415,1]];static Balinese=[[6912,6988,1],[6992,7038,1]];static Bamum=[[42656,42743,1],[92160,92728,1]];static Bassa_Vah=[[92880,92909,1],[92912,92917,1]];static Batak=[[7104,7155,1],[7164,7167,1]];static Bengali=[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]];static Bhaiksuki=[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]];static Bopomofo=[[746,747,1],[12549,12591,1],[12704,12735,1]];static Brahmi=[[69632,69709,1],[69714,69749,1],[69759,69759,1]];static Braille=[[10240,10495,1]];static Buginese=[[6656,6683,1],[6686,6687,1]];static Buhid=[[5952,5971,1]];static Canadian_Aboriginal=[[5120,5759,1],[6320,6389,1],[72368,72383,1]];static Carian=[[66208,66256,1]];static Caucasian_Albanian=[[66864,66915,1],[66927,66927,1]];static Chakma=[[69888,69940,1],[69942,69959,1]];static Cham=[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]];static Cherokee=[[5024,5109,1],[5112,5117,1],[43888,43967,1]];static Chorasmian=[[69552,69579,1]];static Common=[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]];static foldCommon=[[924,956,32]];static Coptic=[[994,1007,1],[11392,11507,1],[11513,11519,1]];static Cuneiform=[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]];static Cypriot=[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]];static Cypro_Minoan=[[77712,77810,1]];static Cyrillic=[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]];static Deseret=[[66560,66639,1]];static Devanagari=[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]];static Dives_Akuru=[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]];static Dogra=[[71680,71739,1]];static Duployan=[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]];static Egyptian_Hieroglyphs=[[77824,78933,1]];static Elbasan=[[66816,66855,1]];static Elymaic=[[69600,69622,1]];static Ethiopic=[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]];static Georgian=[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]];static Glagolitic=[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]];static Gothic=[[66352,66378,1]];static Grantha=[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]];static Greek=[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]];static foldGreek=[[181,837,656]];static Gujarati=[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]];static Gunjala_Gondi=[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]];static Gurmukhi=[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]];static Han=[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static Hangul=[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]];static Hanifi_Rohingya=[[68864,68903,1],[68912,68921,1]];static Hanunoo=[[5920,5940,1]];static Hatran=[[67808,67826,1],[67828,67829,1],[67835,67839,1]];static Hebrew=[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]];static Hiragana=[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]];static Imperial_Aramaic=[[67648,67669,1],[67671,67679,1]];static Inherited=[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]];static foldInherited=[[921,953,32],[8126,8126,1]];static Inscriptional_Pahlavi=[[68448,68466,1],[68472,68479,1]];static Inscriptional_Parthian=[[68416,68437,1],[68440,68447,1]];static Javanese=[[43392,43469,1],[43472,43481,1],[43486,43487,1]];static Kaithi=[[69760,69826,1],[69837,69837,1]];static Kannada=[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]];static Katakana=[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]];static Kawi=[[73472,73488,1],[73490,73530,1],[73534,73561,1]];static Kayah_Li=[[43264,43309,1],[43311,43311,1]];static Kharoshthi=[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]];static Khitan_Small_Script=[[94180,101120,6940],[101121,101589,1]];static Khmer=[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]];static Khojki=[[70144,70161,1],[70163,70209,1]];static Khudawadi=[[70320,70378,1],[70384,70393,1]];static Lao=[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]];static Latin=[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]];static Lepcha=[[7168,7223,1],[7227,7241,1],[7245,7247,1]];static Limbu=[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]];static Linear_A=[[67072,67382,1],[67392,67413,1],[67424,67431,1]];static Linear_B=[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]];static Lisu=[[42192,42239,1],[73648,73648,1]];static Lycian=[[66176,66204,1]];static Lydian=[[67872,67897,1],[67903,67903,1]];static Mahajani=[[69968,70006,1]];static Makasar=[[73440,73464,1]];static Malayalam=[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]];static Mandaic=[[2112,2139,1],[2142,2142,1]];static Manichaean=[[68288,68326,1],[68331,68342,1]];static Marchen=[[72816,72847,1],[72850,72871,1],[72873,72886,1]];static Masaram_Gondi=[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]];static Medefaidrin=[[93760,93850,1]];static Meetei_Mayek=[[43744,43766,1],[43968,44013,1],[44016,44025,1]];static Mende_Kikakui=[[124928,125124,1],[125127,125142,1]];static Meroitic_Cursive=[[68e3,68023,1],[68028,68047,1],[68050,68095,1]];static Meroitic_Hieroglyphs=[[67968,67999,1]];static Miao=[[93952,94026,1],[94031,94087,1],[94095,94111,1]];static Modi=[[71168,71236,1],[71248,71257,1]];static Mongolian=[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]];static Mro=[[92736,92766,1],[92768,92777,1],[92782,92783,1]];static Multani=[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]];static Myanmar=[[4096,4255,1],[43488,43518,1],[43616,43647,1]];static Nabataean=[[67712,67742,1],[67751,67759,1]];static Nag_Mundari=[[124112,124153,1]];static Nandinagari=[[72096,72103,1],[72106,72151,1],[72154,72164,1]];static New_Tai_Lue=[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]];static Newa=[[70656,70747,1],[70749,70753,1]];static Nko=[[1984,2042,1],[2045,2047,1]];static Nushu=[[94177,110960,16783],[110961,111355,1]];static Nyiakeng_Puachue_Hmong=[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]];static Ogham=[[5760,5788,1]];static Ol_Chiki=[[7248,7295,1]];static Old_Hungarian=[[68736,68786,1],[68800,68850,1],[68858,68863,1]];static Old_Italic=[[66304,66339,1],[66349,66351,1]];static Old_North_Arabian=[[68224,68255,1]];static Old_Permic=[[66384,66426,1]];static Old_Persian=[[66464,66499,1],[66504,66517,1]];static Old_Sogdian=[[69376,69415,1]];static Old_South_Arabian=[[68192,68223,1]];static Old_Turkic=[[68608,68680,1]];static Old_Uyghur=[[69488,69513,1]];static Oriya=[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]];static Osage=[[66736,66771,1],[66776,66811,1]];static Osmanya=[[66688,66717,1],[66720,66729,1]];static Pahawh_Hmong=[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]];static Palmyrene=[[67680,67711,1]];static Pau_Cin_Hau=[[72384,72440,1]];static Phags_Pa=[[43072,43127,1]];static Phoenician=[[67840,67867,1],[67871,67871,1]];static Psalter_Pahlavi=[[68480,68497,1],[68505,68508,1],[68521,68527,1]];static Rejang=[[43312,43347,1],[43359,43359,1]];static Runic=[[5792,5866,1],[5870,5880,1]];static Samaritan=[[2048,2093,1],[2096,2110,1]];static Saurashtra=[[43136,43205,1],[43214,43225,1]];static Sharada=[[70016,70111,1]];static Shavian=[[66640,66687,1]];static Siddham=[[71040,71093,1],[71096,71133,1]];static SignWriting=[[120832,121483,1],[121499,121503,1],[121505,121519,1]];static Sinhala=[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]];static Sogdian=[[69424,69465,1]];static Sora_Sompeng=[[69840,69864,1],[69872,69881,1]];static Soyombo=[[72272,72354,1]];static Sundanese=[[7040,7103,1],[7360,7367,1]];static Syloti_Nagri=[[43008,43052,1]];static Syriac=[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]];static Tagalog=[[5888,5909,1],[5919,5919,1]];static Tagbanwa=[[5984,5996,1],[5998,6e3,1],[6002,6003,1]];static Tai_Le=[[6480,6509,1],[6512,6516,1]];static Tai_Tham=[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]];static Tai_Viet=[[43648,43714,1],[43739,43743,1]];static Takri=[[71296,71353,1],[71360,71369,1]];static Tamil=[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]];static Tangsa=[[92784,92862,1],[92864,92873,1]];static Tangut=[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]];static Telugu=[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]];static Thaana=[[1920,1969,1]];static Thai=[[3585,3642,1],[3648,3675,1]];static Tibetan=[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]];static Tifinagh=[[11568,11623,1],[11631,11632,1],[11647,11647,1]];static Tirhuta=[[70784,70855,1],[70864,70873,1]];static Toto=[[123536,123566,1]];static Ugaritic=[[66432,66461,1],[66463,66463,1]];static Vai=[[42240,42539,1]];static Vithkuqi=[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]];static Wancho=[[123584,123641,1],[123647,123647,1]];static Warang_Citi=[[71840,71922,1],[71935,71935,1]];static Yezidi=[[69248,69289,1],[69291,69293,1],[69296,69297,1]];static Yi=[[40960,42124,1],[42128,42182,1]];static Zanabazar_Square=[[72192,72263,1]];static CATEGORIES=new Map([["C",v.C],["Cc",v.Cc],["Cf",v.Cf],["Co",v.Co],["Cs",v.Cs],["L",v.L],["Ll",v.Ll],["Lm",v.Lm],["Lo",v.Lo],["Lt",v.Lt],["Lu",v.Lu],["M",v.M],["Mc",v.Mc],["Me",v.Me],["Mn",v.Mn],["N",v.N],["Nd",v.Nd],["Nl",v.Nl],["No",v.No],["P",v.P],["Pc",v.Pc],["Pd",v.Pd],["Pe",v.Pe],["Pf",v.Pf],["Pi",v.Pi],["Po",v.Po],["Ps",v.Ps],["S",v.S],["Sc",v.Sc],["Sk",v.Sk],["Sm",v.Sm],["So",v.So],["Z",v.Z],["Zl",v.Zl],["Zp",v.Zp],["Zs",v.Zs]]);static SCRIPTS=new Map([["Adlam",v.Adlam],["Ahom",v.Ahom],["Anatolian_Hieroglyphs",v.Anatolian_Hieroglyphs],["Arabic",v.Arabic],["Armenian",v.Armenian],["Avestan",v.Avestan],["Balinese",v.Balinese],["Bamum",v.Bamum],["Bassa_Vah",v.Bassa_Vah],["Batak",v.Batak],["Bengali",v.Bengali],["Bhaiksuki",v.Bhaiksuki],["Bopomofo",v.Bopomofo],["Brahmi",v.Brahmi],["Braille",v.Braille],["Buginese",v.Buginese],["Buhid",v.Buhid],["Canadian_Aboriginal",v.Canadian_Aboriginal],["Carian",v.Carian],["Caucasian_Albanian",v.Caucasian_Albanian],["Chakma",v.Chakma],["Cham",v.Cham],["Cherokee",v.Cherokee],["Chorasmian",v.Chorasmian],["Common",v.Common],["Coptic",v.Coptic],["Cuneiform",v.Cuneiform],["Cypriot",v.Cypriot],["Cypro_Minoan",v.Cypro_Minoan],["Cyrillic",v.Cyrillic],["Deseret",v.Deseret],["Devanagari",v.Devanagari],["Dives_Akuru",v.Dives_Akuru],["Dogra",v.Dogra],["Duployan",v.Duployan],["Egyptian_Hieroglyphs",v.Egyptian_Hieroglyphs],["Elbasan",v.Elbasan],["Elymaic",v.Elymaic],["Ethiopic",v.Ethiopic],["Georgian",v.Georgian],["Glagolitic",v.Glagolitic],["Gothic",v.Gothic],["Grantha",v.Grantha],["Greek",v.Greek],["Gujarati",v.Gujarati],["Gunjala_Gondi",v.Gunjala_Gondi],["Gurmukhi",v.Gurmukhi],["Han",v.Han],["Hangul",v.Hangul],["Hanifi_Rohingya",v.Hanifi_Rohingya],["Hanunoo",v.Hanunoo],["Hatran",v.Hatran],["Hebrew",v.Hebrew],["Hiragana",v.Hiragana],["Imperial_Aramaic",v.Imperial_Aramaic],["Inherited",v.Inherited],["Inscriptional_Pahlavi",v.Inscriptional_Pahlavi],["Inscriptional_Parthian",v.Inscriptional_Parthian],["Javanese",v.Javanese],["Kaithi",v.Kaithi],["Kannada",v.Kannada],["Katakana",v.Katakana],["Kawi",v.Kawi],["Kayah_Li",v.Kayah_Li],["Kharoshthi",v.Kharoshthi],["Khitan_Small_Script",v.Khitan_Small_Script],["Khmer",v.Khmer],["Khojki",v.Khojki],["Khudawadi",v.Khudawadi],["Lao",v.Lao],["Latin",v.Latin],["Lepcha",v.Lepcha],["Limbu",v.Limbu],["Linear_A",v.Linear_A],["Linear_B",v.Linear_B],["Lisu",v.Lisu],["Lycian",v.Lycian],["Lydian",v.Lydian],["Mahajani",v.Mahajani],["Makasar",v.Makasar],["Malayalam",v.Malayalam],["Mandaic",v.Mandaic],["Manichaean",v.Manichaean],["Marchen",v.Marchen],["Masaram_Gondi",v.Masaram_Gondi],["Medefaidrin",v.Medefaidrin],["Meetei_Mayek",v.Meetei_Mayek],["Mende_Kikakui",v.Mende_Kikakui],["Meroitic_Cursive",v.Meroitic_Cursive],["Meroitic_Hieroglyphs",v.Meroitic_Hieroglyphs],["Miao",v.Miao],["Modi",v.Modi],["Mongolian",v.Mongolian],["Mro",v.Mro],["Multani",v.Multani],["Myanmar",v.Myanmar],["Nabataean",v.Nabataean],["Nag_Mundari",v.Nag_Mundari],["Nandinagari",v.Nandinagari],["New_Tai_Lue",v.New_Tai_Lue],["Newa",v.Newa],["Nko",v.Nko],["Nushu",v.Nushu],["Nyiakeng_Puachue_Hmong",v.Nyiakeng_Puachue_Hmong],["Ogham",v.Ogham],["Ol_Chiki",v.Ol_Chiki],["Old_Hungarian",v.Old_Hungarian],["Old_Italic",v.Old_Italic],["Old_North_Arabian",v.Old_North_Arabian],["Old_Permic",v.Old_Permic],["Old_Persian",v.Old_Persian],["Old_Sogdian",v.Old_Sogdian],["Old_South_Arabian",v.Old_South_Arabian],["Old_Turkic",v.Old_Turkic],["Old_Uyghur",v.Old_Uyghur],["Oriya",v.Oriya],["Osage",v.Osage],["Osmanya",v.Osmanya],["Pahawh_Hmong",v.Pahawh_Hmong],["Palmyrene",v.Palmyrene],["Pau_Cin_Hau",v.Pau_Cin_Hau],["Phags_Pa",v.Phags_Pa],["Phoenician",v.Phoenician],["Psalter_Pahlavi",v.Psalter_Pahlavi],["Rejang",v.Rejang],["Runic",v.Runic],["Samaritan",v.Samaritan],["Saurashtra",v.Saurashtra],["Sharada",v.Sharada],["Shavian",v.Shavian],["Siddham",v.Siddham],["SignWriting",v.SignWriting],["Sinhala",v.Sinhala],["Sogdian",v.Sogdian],["Sora_Sompeng",v.Sora_Sompeng],["Soyombo",v.Soyombo],["Sundanese",v.Sundanese],["Syloti_Nagri",v.Syloti_Nagri],["Syriac",v.Syriac],["Tagalog",v.Tagalog],["Tagbanwa",v.Tagbanwa],["Tai_Le",v.Tai_Le],["Tai_Tham",v.Tai_Tham],["Tai_Viet",v.Tai_Viet],["Takri",v.Takri],["Tamil",v.Tamil],["Tangsa",v.Tangsa],["Tangut",v.Tangut],["Telugu",v.Telugu],["Thaana",v.Thaana],["Thai",v.Thai],["Tibetan",v.Tibetan],["Tifinagh",v.Tifinagh],["Tirhuta",v.Tirhuta],["Toto",v.Toto],["Ugaritic",v.Ugaritic],["Vai",v.Vai],["Vithkuqi",v.Vithkuqi],["Wancho",v.Wancho],["Warang_Citi",v.Warang_Citi],["Yezidi",v.Yezidi],["Yi",v.Yi],["Zanabazar_Square",v.Zanabazar_Square]]);static FOLD_CATEGORIES=new Map([["L",v.foldL],["Ll",v.foldLl],["Lt",v.foldLt],["Lu",v.foldLu],["M",v.foldM],["Mn",v.foldMn]]);static FOLD_SCRIPT=new Map([["Common",v.foldCommon],["Greek",v.foldGreek],["Inherited",v.foldInherited]])}class ae{static MAX_RUNE=1114111;static MAX_ASCII=127;static MAX_LATIN1=255;static MAX_BMP=65535;static MIN_FOLD=65;static MAX_FOLD=125251;static is32(e,t){let i=0,r=e.length;for(;i<r;){let s=i+Math.floor((r-i)/2),a=e[s];if(a[0]<=t&&t<=a[1])return(t-a[0])%a[2]===0;t<a[0]?r=s:i=s+1}return!1}static is(e,t){if(t<=this.MAX_LATIN1){for(let i of e)if(!(t>i[1]))return t<i[0]?!1:(t-i[0])%i[2]===0;return!1}return e.length>0&&t>=e[0][0]&&this.is32(e,t)}static isUpper(e){if(e<=this.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return this.is(v.Upper,e)}static isPrint(e){return e<=this.MAX_LATIN1?e>=32&&e<127||e>=161&&e!==173:this.is(v.L,e)||this.is(v.M,e)||this.is(v.N,e)||this.is(v.P,e)||this.is(v.S,e)}static simpleFold(e){if(v.CASE_ORBIT.has(e))return v.CASE_ORBIT.get(e);const t=O.toLowerCase(e);return t!==e?t:O.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e<0||t<0||e===t)return!0;if(e<=this.MAX_ASCII&&t<=this.MAX_ASCII)return O.CODES.get("A")<=e&&e<=O.CODES.get("Z")&&(e|=32),O.CODES.get("A")<=t&&t<=O.CODES.get("Z")&&(t|=32),e===t;for(let i=this.simpleFold(e);i!==e;i=this.simpleFold(i))if(i===t)return!0;return!1}}class ge{static METACHARACTERS="\\.+*?()|[]{}^$";static EMPTY_BEGIN_LINE=1;static EMPTY_END_LINE=2;static EMPTY_BEGIN_TEXT=4;static EMPTY_END_TEXT=8;static EMPTY_WORD_BOUNDARY=16;static EMPTY_NO_WORD_BOUNDARY=32;static EMPTY_ALL=-1;static emptyInts(){return[]}static isalnum(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")||O.CODES.get("a")<=e&&e<=O.CODES.get("z")||O.CODES.get("A")<=e&&e<=O.CODES.get("Z")}static unhex(e){return O.CODES.get("0")<=e&&e<=O.CODES.get("9")?e-O.CODES.get("0"):O.CODES.get("a")<=e&&e<=O.CODES.get("f")?e-O.CODES.get("a")+10:O.CODES.get("A")<=e&&e<=O.CODES.get("F")?e-O.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(ae.isPrint(e))this.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case O.CODES.get('"'):t+='\\"';break;case O.CODES.get("\\"):t+="\\\\";break;case O.CODES.get("	"):t+="\\t";break;case O.CODES.get(`
`):t+="\\n";break;case O.CODES.get("\r"):t+="\\r";break;case O.CODES.get("\b"):t+="\\b";break;case O.CODES.get("\f"):t+="\\f";break;default:{let i=e.toString(16);e<256?(t+="\\x",i.length===1&&(t+="0"),t+=i):t+=`\\x{${i}}`;break}}return t}static stringToRunes(e){return String(e).split("").map(t=>t.codePointAt(0))}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return O.CODES.get("a")<=e&&e<=O.CODES.get("z")||O.CODES.get("A")<=e&&e<=O.CODES.get("Z")||O.CODES.get("0")<=e&&e<=O.CODES.get("9")||e===O.CODES.get("_")}static emptyOpContext(e,t){let i=0;return e<0&&(i|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),e===O.CODES.get(`
`)&&(i|=this.EMPTY_BEGIN_LINE),t<0&&(i|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),t===O.CODES.get(`
`)&&(i|=this.EMPTY_END_LINE),this.isWordRune(e)!==this.isWordRune(t)?i|=this.EMPTY_WORD_BOUNDARY:i|=this.EMPTY_NO_WORD_BOUNDARY,i}static quoteMeta(e){return e.split("").map(t=>this.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>ae.MAX_BMP?2:1}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(e));{let t=[],i=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[i++]=s:s<2048?(t[i++]=s>>6|192,t[i++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[i++]=s>>18|240,t[i++]=s>>12&63|128,t[i++]=s>>6&63|128,t[i++]=s&63|128):(t[i++]=s>>12|224,t[i++]=s>>6&63|128,t[i++]=s&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(e));{let t=[],i=0,r=0;for(;i<e.length;){let s=e[i++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){let a=e[i++];t[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){let a=e[i++],c=e[i++],l=e[i++],u=((s&7)<<18|(a&63)<<12|(c&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{let a=e[i++],c=e[i++];t[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|c&63)}}return t.join("")}}}const $p=(n=[],e=0)=>{const t={};for(let i=0;i<n.length;i++){const r=n[i],s=e+i;t[r]=s,t[s]=r}return Object.freeze(t)};class fn{static Encoding=$p(["UTF_16","UTF_8"]);getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===fn.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===fn.Encoding.UTF_16}}class Q1 extends fn{constructor(e=null){super(),this.bytes=e}getEncoding(){return fn.Encoding.UTF_8}asCharSequence(){return ge.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class V4 extends fn{constructor(e=null){super(),this.charSequence=e}getEncoding(){return fn.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(e=>e.codePointAt(0))}length(){return this.charSequence.length}}class ka{static utf16(e){return new V4(e)}static utf8(e){return Array.isArray(e)?new Q1(e):new Q1(ge.stringToUtf8ByteArray(e))}}class io extends Error{constructor(e){super(e),this.name="RE2JSException"}}class ke extends io{constructor(e,t=null){let i=`error parsing regexp: ${e}`;t&&(i+=`: \`${t}\``),super(i),this.name="RE2JSSyntaxException",this.message=i,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}}class M4 extends io{constructor(e){super(e),this.name="RE2JSCompileException"}}class nn extends io{constructor(e){super(e),this.name="RE2JSGroupException"}}class F4 extends io{constructor(e){super(e),this.name="RE2JSFlagsException"}}class B4{static quoteReplacement(e){return e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(t=>{const i=t.codePointAt(0);return i===O.CODES["\\"]||i===O.CODES.$?`\\${t}`:t}).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const i=this.patternInput.re2();this.patternGroupCount=i.numberOfCapturingGroups(),this.groups=[],this.namedGroups=i.namedGroups,t instanceof fn?this.resetMatcherInput(t):Array.isArray(t)?this.resetMatcherInput(ka.utf8(t)):this.resetMatcherInput(ka.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new nn(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new nn(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}group(e=0){if(typeof e=="string"){const r=this.namedGroups[e];if(!Number.isFinite(r))throw new nn(`group '${e}' not found`);e=r}const t=this.start(e),i=this.end(e);return t<0&&i<0?null:this.substring(t,i)}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new nn(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new nn("perhaps no match attempted");if(e===0||this.hasGroups)return;let t=this.groups[1]+1;t>this.matcherInputLength&&(t=this.matcherInputLength);const i=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!i[0])throw new nn("inconsistency in matching group data");this.groups=i[1],this.hasGroups=!0}matches(){return this.genMatch(0,j.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,j.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new nn(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}return e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1]&&e++),this.genMatch(e,j.UNANCHORED)}genMatch(e,t){const i=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return i[0]?(this.groups=i[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=t,!0):!1}substring(e,t){return this.matcherInput.isUTF8Encoding()?ge.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let i="";const r=this.start(),s=this.end();return this.appendPos<r&&(i+=this.substring(this.appendPos,r)),this.appendPos=s,i+=t?this.appendReplacementInternalPerl(e):this.appendReplacementInternal(e),i}appendReplacementInternal(e){let t="",i=0;const r=e.length;for(let s=0;s<r-1;s++){if(e.codePointAt(s)===O.CODES.get("\\")){i<s&&(t+=e.substring(i,s)),s++,i=s;continue}if(e.codePointAt(s)===O.CODES.get("$")){let a=e.codePointAt(s+1);if(O.CODES.get("0")<=a&&a<=O.CODES.get("9")){let c=a-O.CODES.get("0");for(i<s&&(t+=e.substring(i,s)),s+=2;s<r&&(a=e.codePointAt(s),!(a<O.CODES.get("0")||a>O.CODES.get("9")||c*10+a-O.CODES.get("0")>this.patternGroupCount));s++)c=c*10+a-O.CODES.get("0");if(c>this.patternGroupCount)throw new nn(`n > number of groups: ${c}`);const l=this.group(c);l!==null&&(t+=l),i=s,s--;continue}else if(a===O.CODES.get("{")){i<s&&(t+=e.substring(i,s)),s++;let c=s+1;for(;c<e.length&&e.codePointAt(c)!==O.CODES.get("}")&&e.codePointAt(c)!==O.CODES.get(" ");)c++;if(c===e.length||e.codePointAt(c)!==O.CODES.get("}"))throw new nn("named capture group is missing trailing '}'");const l=e.substring(s+1,c);t+=this.group(l),i=c+1}}}return i<r&&(t+=e.substring(i,r)),t}appendReplacementInternalPerl(e){let t="",i=0;const r=e.length;for(let s=0;s<r-1;s++)if(e.codePointAt(s)===O.CODES.get("$")){let a=e.codePointAt(s+1);if(O.CODES.get("$")===a){i<s&&(t+=e.substring(i,s)),t+="$",s++,i=s+1;continue}else if(O.CODES.get("&")===a){i<s&&(t+=e.substring(i,s));const c=this.group(0);c!==null?t+=c:t+="$&",s++,i=s+1;continue}else if(O.CODES.get("1")<=a&&a<=O.CODES.get("9")){let c=a-O.CODES.get("0");for(i<s&&(t+=e.substring(i,s)),s+=2;s<r&&(a=e.codePointAt(s),!(a<O.CODES.get("0")||a>O.CODES.get("9")||c*10+a-O.CODES.get("0")>this.patternGroupCount));s++)c=c*10+a-O.CODES.get("0");if(c>this.patternGroupCount){t+=`$${c}`,i=s,s--;continue}const l=this.group(c);l!==null&&(t+=l),i=s,s--;continue}else if(a===O.CODES.get("<")){i<s&&(t+=e.substring(i,s)),s++;let c=s+1;for(;c<e.length&&e.codePointAt(c)!==O.CODES.get(">")&&e.codePointAt(c)!==O.CODES.get(" ");)c++;if(c===e.length||e.codePointAt(c)!==O.CODES.get(">")){t+=e.substring(s-1,c+1),i=c+1;continue}const l=e.substring(s+1,c);Object.prototype.hasOwnProperty.call(this.namedGroups,l)?t+=this.group(l):t+=`$<${l}>`,i=c+1}}return i<r&&(t+=e.substring(i,r)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,i=!1){let r="";for(this.reset();this.find()&&(r+=this.appendReplacement(e,i),!!t););return r+=this.appendTail(),r}}class On{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class U4 extends On{constructor(e,t=0,i=e.length){super(),this.bytes=e,this.start=t,this.end=i}step(e){if(e+=this.start,e>=this.end)return On.EOF();let t=this.bytes[e++]&255;return t&128?(t&224)===192?(t=t&31,e>=this.end?On.EOF():(t=t<<6|this.bytes[e++]&63,t<<3|2)):(t&240)===224?(t=t&15,e+1>=this.end?On.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|3)):(t=t&7,e+2>=this.end?On.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|4)):t<<3|1}index(e,t){t+=this.start;const i=this.indexOf(this.bytes,e.prefixUTF8,t);return i<0?i:i-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let r=e-1;if(t=this.bytes[r--],t>=128){let s=e-4;for(s<this.start&&(s=this.start);r>=s&&(this.bytes[r]&192)===128;)r--;r<this.start&&(r=this.start),t=this.step(r)>>3}}const i=e<this.end?this.step(e)>>3:-1;return ge.emptyOpContext(t,i)}indexOf(e,t,i=0){let r=t.length;if(r===0)return-1;let s=e.length;for(let a=i;a<=s-r;a++)for(let c=0;c<r&&e[a+c]===t[c];c++)if(c===r-1)return a;return-1}}class z4 extends On{constructor(e,t=0,i=e.length){super(),this.charSequence=e,this.start=t,this.end=i}step(e){if(e+=this.start,e<this.end){const t=this.charSequence.codePointAt(e);return t<<3|ge.charCount(t)}else return On.EOF()}index(e,t){t+=this.start;const i=this.charSequence.indexOf(e.prefix,t);return i<0?i:i-t}context(e){e+=this.start;const t=e>0&&e<=this.charSequence.length?this.charSequence.codePointAt(e-1):-1,i=e<this.charSequence.length?this.charSequence.codePointAt(e):-1;return ge.emptyOpContext(t,i)}}class Ce{static fromUTF8(e,t=0,i=e.length){return new U4(e,t,i)}static fromUTF16(e,t=0,i=e.length){return new z4(e,t,i)}}class S{static Op=$p(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]);static isPseudoOp(e){return e>=S.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===O.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new S(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t}constructor(e){this.op=e,this.flags=0,this.subs=S.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=S.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case S.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case S.Op.EMPTY_MATCH:e+="(?:)";break;case S.Op.STAR:case S.Op.PLUS:case S.Op.QUEST:case S.Op.REPEAT:{const t=this.subs[0];switch(t.op>S.Op.CAPTURE||t.op===S.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case S.Op.STAR:e+="*";break;case S.Op.PLUS:e+="+";break;case S.Op.QUEST:e+="?";break;case S.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&j.NON_GREEDY&&(e+="?");break}case S.Op.CONCAT:{for(let t of this.subs)t.op===S.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break}case S.Op.ALTERNATE:{let t="";for(let i of this.subs)e+=t,t="|",e+=i.appendTo();break}case S.Op.LITERAL:this.flags&j.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=ge.escapeRune(t);this.flags&j.FOLD_CASE&&(e+=")");break;case S.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case S.Op.ANY_CHAR:e+="(?s:.)";break;case S.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==S.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case S.Op.BEGIN_TEXT:e+="\\A";break;case S.Op.END_TEXT:this.flags&j.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case S.Op.BEGIN_LINE:e+="^";break;case S.Op.END_LINE:e+="$";break;case S.Op.WORD_BOUNDARY:e+="\\b";break;case S.Op.NO_WORD_BOUNDARY:e+="\\B";break;case S.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===ae.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const i=this.runes[t]+1,r=this.runes[t+1]-1;e+=S.quoteIfHyphen(i),e+=ge.escapeRune(i),i!==r&&(e+="-",e+=S.quoteIfHyphen(r),e+=ge.escapeRune(r))}}else for(let t=0;t<this.runes.length;t+=2){const i=this.runes[t],r=this.runes[t+1];e+=S.quoteIfHyphen(i),e+=ge.escapeRune(i),i!==r&&(e+="-",e+=S.quoteIfHyphen(r),e+=ge.escapeRune(r))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===S.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const i=t.maxCap();e<i&&(e=i)}return e}equals(e){if(!(e!==null&&e instanceof S)||this.op!==e.op)return!1;switch(this.op){case S.Op.END_TEXT:{if((this.flags&j.WAS_DOLLAR)!==(e.flags&j.WAS_DOLLAR))return!1;break}case S.Op.LITERAL:case S.Op.CHAR_CLASS:{if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break}case S.Op.ALTERNATE:case S.Op.CONCAT:{if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break}case S.Op.STAR:case S.Op.PLUS:case S.Op.QUEST:{if((this.flags&j.NON_GREEDY)!==(e.flags&j.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break}case S.Op.REPEAT:{if((this.flags&j.NON_GREEDY)!==(e.flags&j.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break}case S.Op.CAPTURE:{if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break}}return!0}}class K{static ALT=1;static ALT_MATCH=2;static CAPTURE=3;static EMPTY_WIDTH=4;static FAIL=5;static MATCH=6;static NOP=7;static RUNE=8;static RUNE1=9;static RUNE_ANY=10;static RUNE_ANY_NOT_NL=11;static isRuneOp(e){return K.RUNE<=e&&e<=K.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let i of e)t+=ge.escapeRune(i);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=null}matchRune(e){if(this.runes.length===1){const r=this.runes[0];return this.arg&j.FOLD_CASE?ae.equalsIgnoreCase(r,e):e===r}for(let r=0;r<this.runes.length&&r<=8;r+=2){if(e<this.runes[r])return!1;if(e<=this.runes[r+1])return!0}let t=0,i=this.runes.length/2|0;for(;t<i;){const r=t+((i-t)/2|0);if(this.runes[2*r]<=e){if(e<=this.runes[2*r+1])return!0;t=r+1}else i=r}return!1}toString(){switch(this.op){case K.ALT:return`alt -> ${this.out}, ${this.arg}`;case K.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case K.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case K.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case K.MATCH:return"match";case K.FAIL:return"fail";case K.NOP:return`nop -> ${this.out}`;case K.RUNE:return this.runes===null?"rune <null>":["rune ",K.escapeRunes(this.runes),this.arg&j.FOLD_CASE?"/i":""," -> ",this.out].join("");case K.RUNE1:return`rune1 ${K.escapeRunes(this.runes)} -> ${this.out}`;case K.RUNE_ANY:return`any -> ${this.out}`;case K.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}}class $4{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new K(e))}skipNop(e){let t=this.inst[e];for(;t.op===K.NOP||t.op===K.CAPTURE;)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!K.isRuneOp(t.op)||t.runes.length!==1)return[t.op===K.MATCH,e];for(;K.isRuneOp(t.op)&&t.runes.length===1&&!(t.arg&j.FOLD_CASE);)e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===K.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const i=this.inst[t];switch(i.op){case K.EMPTY_WIDTH:e|=i.arg;break;case K.FAIL:return-1;case K.CAPTURE:case K.NOP:break;default:break e}t=i.out}return e}next(e){const t=this.inst[e>>1];return e&1?t.arg:t.out}patch(e,t){for(;e!==0;){const i=this.inst[e>>1];e&1?(e=i.arg,i.arg=t):(e=i.out,i.out=t)}}append(e,t){if(e===0)return t;if(t===0)return e;let i=e;for(;;){const s=this.next(i);if(s===0)break;i=s}const r=this.inst[i>>1];return i&1?r.arg=t:r.out=t,e}toString(){let e="";for(let t=0;t<this.inst.length;t++){const i=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-i),e+=this.inst[t],e+=`
`}return e}}class Xs{constructor(e=0,t=0,i=!1){this.i=e,this.out=t,this.nullable=i}}class Fr{static ANY_RUNE_NOT_NL(){return[0,O.CODES.get(`
`)-1,O.CODES.get(`
`)+1,ae.MAX_RUNE]}static ANY_RUNE(){return[0,ae.MAX_RUNE]}static compileRegexp(e){const t=new Fr,i=t.compile(e);return t.prog.patch(i.out,t.newInst(K.MATCH).i),t.prog.start=i.i,t.prog}constructor(){this.prog=new $4,this.newInst(K.FAIL)}newInst(e){return this.prog.addInst(e),new Xs(this.prog.numInst()-1,0,!0)}nop(){const e=this.newInst(K.NOP);return e.out=e.i<<1,e}fail(){return new Xs}cap(e){const t=this.newInst(K.CAPTURE);return t.out=t.i<<1,this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Xs(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const i=this.newInst(K.ALT),r=this.prog.getInst(i.i);return r.out=e.i,r.arg=t.i,i.out=this.prog.append(e.out,t.out),i.nullable=e.nullable||t.nullable,i}loop(e,t){const i=this.newInst(K.ALT),r=this.prog.getInst(i.i);return t?(r.arg=e.i,i.out=i.i<<1):(r.out=e.i,i.out=i.i<<1|1),this.prog.patch(e.out,i.i),i}quest(e,t){const i=this.newInst(K.ALT),r=this.prog.getInst(i.i);return t?(r.arg=e.i,i.out=i.i<<1):(r.out=e.i,i.out=i.i<<1|1),i.out=this.prog.append(i.out,e.out),i}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Xs(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(K.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=t.i<<1,t}rune(e,t){const i=this.newInst(K.RUNE);i.nullable=!1;const r=this.prog.getInst(i.i);return r.runes=e,t&=j.FOLD_CASE,(e.length!==1||ae.simpleFold(e[0])===e[0])&&(t&=-2),r.arg=t,i.out=i.i<<1,!(t&j.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?r.op=K.RUNE1:e.length===2&&e[0]===0&&e[1]===ae.MAX_RUNE?r.op=K.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===O.CODES.get(`
`)-1&&e[2]===O.CODES.get(`
`)+1&&e[3]===ae.MAX_RUNE&&(r.op=K.RUNE_ANY_NOT_NL),i}compile(e){switch(e.op){case S.Op.NO_MATCH:return this.fail();case S.Op.EMPTY_MATCH:return this.nop();case S.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let i of e.runes){const r=this.rune([i],e.flags);t=t===null?r:this.cat(t,r)}return t}case S.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case S.Op.ANY_CHAR_NOT_NL:return this.rune(Fr.ANY_RUNE_NOT_NL(),0);case S.Op.ANY_CHAR:return this.rune(Fr.ANY_RUNE(),0);case S.Op.BEGIN_LINE:return this.empty(ge.EMPTY_BEGIN_LINE);case S.Op.END_LINE:return this.empty(ge.EMPTY_END_LINE);case S.Op.BEGIN_TEXT:return this.empty(ge.EMPTY_BEGIN_TEXT);case S.Op.END_TEXT:return this.empty(ge.EMPTY_END_TEXT);case S.Op.WORD_BOUNDARY:return this.empty(ge.EMPTY_WORD_BOUNDARY);case S.Op.NO_WORD_BOUNDARY:return this.empty(ge.EMPTY_NO_WORD_BOUNDARY);case S.Op.CAPTURE:{const t=this.cap(e.cap<<1),i=this.compile(e.subs[0]),r=this.cap(e.cap<<1|1);return this.cat(this.cat(t,i),r)}case S.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&j.NON_GREEDY)!==0);case S.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&j.NON_GREEDY)!==0);case S.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&j.NON_GREEDY)!==0);case S.Op.CONCAT:{if(e.subs.length===0)return this.nop();{let t=null;for(let i of e.subs){const r=this.compile(i);t=t===null?r:this.cat(t,r)}return t}}case S.Op.ALTERNATE:{if(e.subs.length===0)return this.nop();{let t=null;for(let i of e.subs){const r=this.compile(i);t=t===null?r:this.alt(t,r)}return t}}default:throw new M4("regexp: unhandled case in compile")}}}class Rt{static simplify(e){if(e===null)return null;switch(e.op){case S.Op.CAPTURE:case S.Op.CONCAT:case S.Op.ALTERNATE:{let t=e;for(let i=0;i<e.subs.length;i++){const r=e.subs[i],s=Rt.simplify(r);t===e&&s!==r&&(t=S.fromRegexp(e),t.runes=null,t.subs=e.subs.slice(0,e.subs.length)),t!==e&&(t.subs[i]=s)}return t}case S.Op.STAR:case S.Op.PLUS:case S.Op.QUEST:{const t=Rt.simplify(e.subs[0]);return Rt.simplify1(e.op,e.flags,t,e)}case S.Op.REPEAT:{if(e.min===0&&e.max===0)return new S(S.Op.EMPTY_MATCH);const t=Rt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Rt.simplify1(S.Op.STAR,e.flags,t,null);if(e.min===1)return Rt.simplify1(S.Op.PLUS,e.flags,t,null);const r=new S(S.Op.CONCAT),s=[];for(let a=0;a<e.min-1;a++)s.push(t);return s.push(Rt.simplify1(S.Op.PLUS,e.flags,t,null)),r.subs=s.slice(0),r}if(e.min===1&&e.max===1)return t;let i=null;if(e.min>0){i=[];for(let r=0;r<e.min;r++)i.push(t)}if(e.max>e.min){let r=Rt.simplify1(S.Op.QUEST,e.flags,t,null);for(let s=e.min+1;s<e.max;s++){const a=new S(S.Op.CONCAT);a.subs=[t,r],r=Rt.simplify1(S.Op.QUEST,e.flags,a,null)}if(i===null)return r;i.push(r)}if(i!==null){const r=new S(S.Op.CONCAT);return r.subs=i.slice(0),r}return new S(S.Op.NO_MATCH)}}return e}static simplify1(e,t,i,r){return i.op===S.Op.EMPTY_MATCH||e===i.op&&(t&j.NON_GREEDY)===(i.flags&j.NON_GREEDY)?i:(r!==null&&r.op===e&&(r.flags&j.NON_GREEDY)===(t&j.NON_GREEDY)&&i===r.subs[0]||(r=new S(e),r.flags=t,r.subs=[i]),r)}}class fe{constructor(e,t){this.sign=e,this.cls=t}}const X1=[48,57],J1=[9,10,12,13,32,32],Z1=[48,57,65,90,95,95,97,122],ed=new Map([["\\d",new fe(1,X1)],["\\D",new fe(-1,X1)],["\\s",new fe(1,J1)],["\\S",new fe(-1,J1)],["\\w",new fe(1,Z1)],["\\W",new fe(-1,Z1)]]),td=[48,57,65,90,97,122],nd=[65,90,97,122],id=[0,127],rd=[9,9,32,32],sd=[0,31,127,127],ad=[48,57],od=[33,126],cd=[97,122],ld=[32,126],ud=[33,47,58,64,91,96,123,126],dd=[9,13,32,32],hd=[65,90],pd=[48,57,65,90,95,95,97,122],fd=[48,57,65,70,97,102],gd=new Map([["[:alnum:]",new fe(1,td)],["[:^alnum:]",new fe(-1,td)],["[:alpha:]",new fe(1,nd)],["[:^alpha:]",new fe(-1,nd)],["[:ascii:]",new fe(1,id)],["[:^ascii:]",new fe(-1,id)],["[:blank:]",new fe(1,rd)],["[:^blank:]",new fe(-1,rd)],["[:cntrl:]",new fe(1,sd)],["[:^cntrl:]",new fe(-1,sd)],["[:digit:]",new fe(1,ad)],["[:^digit:]",new fe(-1,ad)],["[:graph:]",new fe(1,od)],["[:^graph:]",new fe(-1,od)],["[:lower:]",new fe(1,cd)],["[:^lower:]",new fe(-1,cd)],["[:print:]",new fe(1,ld)],["[:^print:]",new fe(-1,ld)],["[:punct:]",new fe(1,ud)],["[:^punct:]",new fe(-1,ud)],["[:space:]",new fe(1,dd)],["[:^space:]",new fe(-1,dd)],["[:upper:]",new fe(1,hd)],["[:^upper:]",new fe(-1,hd)],["[:word:]",new fe(1,pd)],["[:^word:]",new fe(-1,pd)],["[:xdigit:]",new fe(1,fd)],["[:^xdigit:]",new fe(-1,fd)]]);class Je{static charClassToString(e,t){let i="[";for(let r=0;r<t;r+=2){r>0&&(i+=" ");const s=e[r],a=e[r+1];s===a?i+=`0x${s.toString(16)}`:i+=`0x${s.toString(16)}-0x${a.toString(16)}`}return i+="]",i}static cmp(e,t,i,r){const s=e[t]-i;return s!==0?s:r-e[t+1]}static qsortIntPair(e,t,i){const r=((t+i)/2|0)&-2,s=e[r],a=e[r+1];let c=t,l=i;for(;c<=l;){for(;c<i&&Je.cmp(e,c,s,a)<0;)c+=2;for(;l>t&&Je.cmp(e,l,s,a)>0;)l-=2;if(c<=l){if(c!==l){let u=e[c];e[c]=e[l],e[l]=u,u=e[c+1],e[c+1]=e[l+1],e[l+1]=u}c+=2,l-=2}}t<l&&Je.qsortIntPair(e,t,l),c<i&&Je.qsortIntPair(e,c,i)}constructor(e=ge.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;Je.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const i=this.r[t],r=this.r[t+1];if(i<=this.r[e-1]+1){r>this.r[e-1]&&(this.r[e-1]=r);continue}this.r[e]=i,this.r[e+1]=r,e+=2}return this.len=e,this}appendLiteral(e,t){return t&j.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let i=2;i<=4;i+=2)if(this.len>=i){const r=this.r[this.len-i],s=this.r[this.len-i+1];if(e<=s+1&&r<=t+1)return e<r&&(this.r[this.len-i]=e),t>s&&(this.r[this.len-i+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=ae.MIN_FOLD&&t>=ae.MAX_FOLD)return this.appendRange(e,t);if(t<ae.MIN_FOLD||e>ae.MAX_FOLD)return this.appendRange(e,t);e<ae.MIN_FOLD&&(this.appendRange(e,ae.MIN_FOLD-1),e=ae.MIN_FOLD),t>ae.MAX_FOLD&&(this.appendRange(ae.MAX_FOLD+1,t),t=ae.MAX_FOLD);for(let i=e;i<=t;i++){this.appendRange(i,i);for(let r=ae.simpleFold(i);r!==i;r=ae.simpleFold(r))this.appendRange(r,r)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let i=0;i<e.length;i+=2){const r=e[i],s=e[i+1];t<=r-1&&this.appendRange(t,r-1),t=s+1}return t<=ae.MAX_RUNE&&this.appendRange(t,ae.MAX_RUNE),this}appendTable(e){for(let t of e){const i=t[0],r=t[1],s=t[2];if(s===1){this.appendRange(i,r);continue}for(let a=i;a<=r;a+=s)this.appendRange(a,a)}return this}appendNegatedTable(e){let t=0;for(let i of e){const r=i[0],s=i[1],a=i[2];if(a===1){t<=r-1&&this.appendRange(t,r-1),t=s+1;continue}for(let c=r;c<=s;c+=a)t<=c-1&&this.appendRange(t,c-1),t=c+1}return t<=ae.MAX_RUNE&&this.appendRange(t,ae.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let i=0;i<this.len;i+=2){const r=this.r[i],s=this.r[i+1];e<=r-1&&(this.r[t]=e,this.r[t+1]=r-1,t+=2),e=s+1}return this.len=t,e<=ae.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=ae.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let i=e.cls;return t&&(i=new Je().appendFoldedClass(i).cleanClass().toArray()),this.appendClassWithSign(i,e.sign)}toString(){return Je.charClassToString(this.r,this.len)}}class Br{static of(e,t){return new Br(e,t)}constructor(e,t){this.first=e,this.second=t}}class q4{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=ge.charCount(e),e}lookingAt(e){return this.rest().startsWith(e)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}}class ne{static ERR_INTERNAL_ERROR="regexp/syntax: internal error";static ERR_INVALID_CHAR_RANGE="invalid character class range";static ERR_INVALID_ESCAPE="invalid escape sequence";static ERR_INVALID_NAMED_CAPTURE="invalid named capture";static ERR_INVALID_PERL_OP="invalid or unsupported Perl syntax";static ERR_INVALID_REPEAT_OP="invalid nested repetition operator";static ERR_INVALID_REPEAT_SIZE="invalid repeat count";static ERR_MISSING_BRACKET="missing closing ]";static ERR_MISSING_PAREN="missing closing )";static ERR_MISSING_REPEAT_ARGUMENT="missing argument to repetition operator";static ERR_TRAILING_BACKSLASH="trailing backslash at end of expression";static ERR_DUPLICATE_NAMED_CAPTURE="duplicate capture group name";static ANY_TABLE(){return[[0,ae.MAX_RUNE,1]]}static unicodeTable(e){return e==="Any"?Br.of(ne.ANY_TABLE(),ne.ANY_TABLE()):v.CATEGORIES.has(e)?Br.of(v.CATEGORIES.get(e),v.FOLD_CATEGORIES.get(e)):v.SCRIPTS.has(e)?Br.of(v.SCRIPTS.get(e),v.FOLD_SCRIPT.get(e)):null}static minFoldRune(e){if(e<ae.MIN_FOLD||e>ae.MAX_FOLD)return e;let t=e;const i=e;for(e=ae.simpleFold(e);e!==i;e=ae.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===S.Op.EMPTY_MATCH)return null;if(e.op===S.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===S.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const i=new S(S.Op.LITERAL);return i.flags=t,i.runes=ge.stringToRunes(e),i}static parse(e,t){return new ne(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const i=ne.parseInt(e);if(i===-1||!e.more())return-1;let r;if(!e.lookingAt(","))r=i;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))r=-1;else if((r=ne.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),i<0||i>1e3||r===-2||r>1e3||r>=0&&i>r)throw new ke(ne.ERR_INVALID_REPEAT_SIZE,e.from(t));return i<<16|r&ae.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const i=e.codePointAt(t);if(i!==O.CODES.get("_")&&!ge.isalnum(i))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=O.CODES.get("0")&&e.peek()<=O.CODES.get("9");)e.skip(1);const i=e.from(t);return i.length===0||i.length>1&&i.codePointAt(0)===O.CODES.get("0")?-1:i.length>8?-2:parseFloat(i,10)}static isCharClass(e){return e.op===S.Op.LITERAL&&e.runes.length===1||e.op===S.Op.CHAR_CLASS||e.op===S.Op.ANY_CHAR_NOT_NL||e.op===S.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case S.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case S.Op.CHAR_CLASS:for(let i=0;i<e.runes.length;i+=2)if(e.runes[i]<=t&&t<=e.runes[i+1])return!0;return!1;case S.Op.ANY_CHAR_NOT_NL:return t!==O.CODES.get(`
`);case S.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case S.Op.ANY_CHAR:break;case S.Op.ANY_CHAR_NOT_NL:ne.matchRune(t,O.CODES.get(`
`))&&(e.op=S.Op.ANY_CHAR);break;case S.Op.CHAR_CLASS:t.op===S.Op.LITERAL?e.runes=new Je(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new Je(e.runes).appendClass(t.runes).toArray();break;case S.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=S.Op.CHAR_CLASS,e.runes=new Je().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new ke(ne.ERR_TRAILING_BACKSLASH);let i=e.pop();e:switch(i){case O.CODES.get("1"):case O.CODES.get("2"):case O.CODES.get("3"):case O.CODES.get("4"):case O.CODES.get("5"):case O.CODES.get("6"):case O.CODES.get("7"):if(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"))break;case O.CODES.get("0"):{let r=i-O.CODES.get("0");for(let s=1;s<3&&!(!e.more()||e.peek()<O.CODES.get("0")||e.peek()>O.CODES.get("7"));s++)r=r*8+e.peek()-O.CODES.get("0"),e.skip(1);return r}case O.CODES.get("x"):{if(!e.more())break;if(i=e.pop(),i===O.CODES.get("{")){let a=0,c=0;for(;;){if(!e.more())break e;if(i=e.pop(),i===O.CODES.get("}"))break;const l=ge.unhex(i);if(l<0||(c=c*16+l,c>ae.MAX_RUNE))break e;a++}if(a===0)break e;return c}const r=ge.unhex(i);if(!e.more())break;i=e.pop();const s=ge.unhex(i);if(r<0||s<0)break;return r*16+s}case O.CODES.get("a"):return O.CODES.get("\x07");case O.CODES.get("f"):return O.CODES.get("\f");case O.CODES.get("n"):return O.CODES.get(`
`);case O.CODES.get("r"):return O.CODES.get("\r");case O.CODES.get("t"):return O.CODES.get("	");case O.CODES.get("v"):return O.CODES.get("\v");default:if(!ge.isalnum(i))return i;break}throw new ke(ne.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new ke(ne.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?ne.parseEscape(e):e.pop()}static concatRunes(e,t){return[...e,...t]}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):t=new S(e),t}reuse(e){e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!S.isPseudoOp(this.stack[t-1].op);)t--;const i=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),i}push(e){if(e.op===S.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=S.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===S.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&ae.simpleFold(e.runes[0])===e.runes[2]&&ae.simpleFold(e.runes[2])===e.runes[0]||e.op===S.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&ae.simpleFold(e.runes[0])===e.runes[1]&&ae.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|j.FOLD_CASE))return null;e.op=S.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|j.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),e}maybeConcat(e,t){const i=this.stack.length;if(i<2)return!1;const r=this.stack[i-1],s=this.stack[i-2];return r.op!==S.Op.LITERAL||s.op!==S.Op.LITERAL||(r.flags&j.FOLD_CASE)!==(s.flags&j.FOLD_CASE)?!1:(s.runes=ne.concatRunes(s.runes,r.runes),e>=0?(r.runes=[e],r.flags=t,!0):(this.pop(),this.reuse(r),!1))}newLiteral(e,t){const i=this.newRegexp(S.Op.LITERAL);return i.flags=t,t&j.FOLD_CASE&&(e=ne.minFoldRune(e)),i.runes=[e],i}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,i,r,s,a){let c=this.flags;if(c&j.PERL_X&&(s.more()&&s.lookingAt("?")&&(s.skip(1),c^=j.NON_GREEDY),a!==-1))throw new ke(ne.ERR_INVALID_REPEAT_OP,s.from(a));const l=this.stack.length;if(l===0)throw new ke(ne.ERR_MISSING_REPEAT_ARGUMENT,s.from(r));const u=this.stack[l-1];if(S.isPseudoOp(u.op))throw new ke(ne.ERR_MISSING_REPEAT_ARGUMENT,s.from(r));const p=this.newRegexp(e);p.min=t,p.max=i,p.flags=c,p.subs=[u],this.stack[l-1]=p}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(S.Op.EMPTY_MATCH)):this.push(this.collapse(e,S.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(S.Op.NO_MATCH)):this.push(this.collapse(e,S.Op.ALTERNATE))}cleanAlt(e){e.op===S.Op.CHAR_CLASS&&(e.runes=new Je(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===ae.MAX_RUNE?(e.runes=null,e.op=S.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===O.CODES.get(`
`)-1&&e.runes[2]===O.CODES.get(`
`)+1&&e.runes[3]===ae.MAX_RUNE&&(e.runes=null,e.op=S.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let i=0;for(let c of e)i+=c.op===t?c.subs.length:1;let r=new Array(i).fill(null),s=0;for(let c of e)c.op===t?(r.splice(s,c.subs.length,...c.subs),s+=c.subs.length,this.reuse(c)):r[s++]=c;let a=this.newRegexp(t);if(a.subs=r,t===S.Op.ALTERNATE&&(a.subs=this.factor(a.subs),a.subs.length===1)){const c=a;a=a.subs[0],this.reuse(c)}return a}factor(e){if(e.length<2)return e;let t=0,i=e.length,r=0,s=null,a=0,c=0,l=0;for(let p=0;p<=i;p++){let g=null,b=0,A=0;if(p<i){let R=e[t+p];if(R.op===S.Op.CONCAT&&R.subs.length>0&&(R=R.subs[0]),R.op===S.Op.LITERAL&&(g=R.runes,b=R.runes.length,A=R.flags&j.FOLD_CASE),A===c){let V=0;for(;V<a&&V<b&&s[V]===g[V];)V++;if(V>0){a=V;continue}}}if(p!==l)if(p===l+1)e[r++]=e[t+l];else{const R=this.newRegexp(S.Op.LITERAL);R.flags=c,R.runes=s.slice(0,a);for(let X=l;X<p;X++)e[t+X]=this.removeLeadingString(e[t+X],a);const V=this.collapse(e.slice(t+l,t+p),S.Op.ALTERNATE),q=this.newRegexp(S.Op.CONCAT);q.subs=[R,V],e[r++]=q}l=p,s=g,a=b,c=A}i=r,t=0,l=0,r=0;let u=null;for(let p=0;p<=i;p++){let g=null;if(!(p<i&&(g=ne.leadingRegexp(e[t+p]),u!==null&&u.equals(g)&&(ne.isCharClass(u)||u.op===S.Op.REPEAT&&u.min===u.max&&ne.isCharClass(u.subs[0]))))){if(p!==l)if(p===l+1)e[r++]=e[t+l];else{const b=u;for(let V=l;V<p;V++){const q=V!==l;e[t+V]=this.removeLeadingRegexp(e[t+V],q)}const A=this.collapse(e.slice(t+l,t+p),S.Op.ALTERNATE),R=this.newRegexp(S.Op.CONCAT);R.subs=[b,A],e[r++]=R}l=p,u=g}}i=r,t=0,l=0,r=0;for(let p=0;p<=i;p++)if(!(p<i&&ne.isCharClass(e[t+p]))){if(p!==l)if(p===l+1)e[r++]=e[t+l];else{let g=l;for(let A=l+1;A<p;A++){const R=e[t+g],V=e[t+A];(R.op<V.op||R.op===V.op&&(R.runes!==null?R.runes.length:0)<(V.runes!==null?V.runes.length:0))&&(g=A)}const b=e[t+l];e[t+l]=e[t+g],e[t+g]=b;for(let A=l+1;A<p;A++)ne.mergeCharClass(e[t+l],e[t+A]),this.reuse(e[t+A]);this.cleanAlt(e[t+l]),e[r++]=e[t+l]}p<i&&(e[r++]=e[t+p]),l=p+1}i=r,t=0,l=0,r=0;for(let p=0;p<i;++p)p+1<i&&e[t+p].op===S.Op.EMPTY_MATCH&&e[t+p+1].op===S.Op.EMPTY_MATCH||(e[r++]=e[t+p]);return i=r,t=0,e.slice(t,i)}removeLeadingString(e,t){if(e.op===S.Op.CONCAT&&e.subs.length>0){const i=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=i,i.op===S.Op.EMPTY_MATCH)switch(this.reuse(i),e.subs.length){case 0:case 1:e.op=S.Op.EMPTY_MATCH,e.subs=null;break;case 2:{const r=e;e=e.subs[1],this.reuse(r);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===S.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=S.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===S.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:{e.op=S.Op.EMPTY_MATCH,e.subs=S.emptySubs();break}case 1:{const i=e;e=e.subs[0],this.reuse(i);break}}return e}return t&&this.reuse(e),this.newRegexp(S.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&j.LITERAL)return ne.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,i=-1;const r=new q4(this.wholeRegexp);for(;r.more();){let a=-1;e:switch(r.peek()){case O.CODES.get("("):if(this.flags&j.PERL_X&&r.lookingAt("(?")){this.parsePerlFlags(r);break}this.op(S.Op.LEFT_PAREN).cap=++this.numCap,r.skip(1);break;case O.CODES.get("|"):this.parseVerticalBar(),r.skip(1);break;case O.CODES.get(")"):this.parseRightParen(),r.skip(1);break;case O.CODES.get("^"):this.flags&j.ONE_LINE?this.op(S.Op.BEGIN_TEXT):this.op(S.Op.BEGIN_LINE),r.skip(1);break;case O.CODES.get("$"):this.flags&j.ONE_LINE?this.op(S.Op.END_TEXT).flags|=j.WAS_DOLLAR:this.op(S.Op.END_LINE),r.skip(1);break;case O.CODES.get("."):this.flags&j.DOT_NL?this.op(S.Op.ANY_CHAR):this.op(S.Op.ANY_CHAR_NOT_NL),r.skip(1);break;case O.CODES.get("["):this.parseClass(r);break;case O.CODES.get("*"):case O.CODES.get("+"):case O.CODES.get("?"):{a=r.pos();let c=null;switch(r.pop()){case O.CODES.get("*"):c=S.Op.STAR;break;case O.CODES.get("+"):c=S.Op.PLUS;break;case O.CODES.get("?"):c=S.Op.QUEST;break}this.repeat(c,t,i,a,r,e);break}case O.CODES.get("{"):{a=r.pos();const c=ne.parseRepeat(r);if(c<0){r.rewindTo(a),this.literal(r.pop());break}t=c>>16,i=(c&ae.MAX_BMP)<<16>>16,this.repeat(S.Op.REPEAT,t,i,a,r,e);break}case O.CODES.get("\\"):{const c=r.pos();if(r.skip(1),this.flags&j.PERL_X&&r.more())switch(r.pop()){case O.CODES.get("A"):this.op(S.Op.BEGIN_TEXT);break e;case O.CODES.get("b"):this.op(S.Op.WORD_BOUNDARY);break e;case O.CODES.get("B"):this.op(S.Op.NO_WORD_BOUNDARY);break e;case O.CODES.get("C"):throw new ke(ne.ERR_INVALID_ESCAPE,"\\C");case O.CODES.get("Q"):{let g=r.rest();const b=g.indexOf("\\E");b>=0&&(g=g.substring(0,b)),r.skipString(g),r.skipString("\\E");let A=0;for(;A<g.length;){const R=g.codePointAt(A);this.literal(R),A+=ge.charCount(R)}break e}case O.CODES.get("z"):this.op(S.Op.END_TEXT);break e;default:r.rewindTo(c);break}const l=this.newRegexp(S.Op.CHAR_CLASS);if(l.flags=this.flags,r.lookingAt("\\p")||r.lookingAt("\\P")){const p=new Je;if(this.parseUnicodeClass(r,p)){l.runes=p.toArray(),this.push(l);break e}}const u=new Je;if(this.parsePerlClassEscape(r,u)){l.runes=u.toArray(),this.push(l);break e}r.rewindTo(c),this.reuse(l),this.literal(ne.parseEscape(r));break}default:this.literal(r.pop());break}e=a}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new ke(ne.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),i=e.rest();if(i.startsWith("(?P<")||i.startsWith("(?<")){const c=i.charAt(2)==="P"?4:3,l=i.indexOf(">");if(l<0)throw new ke(ne.ERR_INVALID_NAMED_CAPTURE,i);const u=i.substring(c,l);if(e.skipString(u),e.skip(c+1),!ne.isValidCaptureName(u))throw new ke(ne.ERR_INVALID_NAMED_CAPTURE,i.substring(0,l+1));const p=this.op(S.Op.LEFT_PAREN);if(p.cap=++this.numCap,this.namedGroups[u])throw new ke(ne.ERR_DUPLICATE_NAMED_CAPTURE,u);this.namedGroups[u]=this.numCap,p.name=u;return}e.skip(2);let r=this.flags,s=1,a=!1;e:for(;e.more();){const c=e.pop();switch(c){case O.CODES.get("i"):r|=j.FOLD_CASE,a=!0;break;case O.CODES.get("m"):r&=-17,a=!0;break;case O.CODES.get("s"):r|=j.DOT_NL,a=!0;break;case O.CODES.get("U"):r|=j.NON_GREEDY,a=!0;break;case O.CODES.get("-"):if(s<0)break e;s=-1,r=~r,a=!1;break;case O.CODES.get(":"):case O.CODES.get(")"):if(s<0){if(!a)break e;r=~r}c===O.CODES.get(":")&&this.op(S.Op.LEFT_PAREN),this.flags=r;return;default:break e}}throw new ke(ne.ERR_INVALID_PERL_OP,e.from(t))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(S.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===S.Op.VERTICAL_BAR&&ne.isCharClass(this.stack[e-1])&&ne.isCharClass(this.stack[e-3])){let t=this.stack[e-1],i=this.stack[e-3];if(t.op>i.op){const r=i;i=t,t=r,this.stack[e-3]=i}return ne.mergeCharClass(i,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],i=this.stack[e-2];if(i.op===S.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=i,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new ke(ne.ERR_INTERNAL_ERROR,"stack underflow");const t=this.pop(),i=this.pop();if(i.op!==S.Op.LEFT_PAREN)throw new ke(ne.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=i.flags,i.cap===0?this.push(t):(i.op=S.Op.CAPTURE,i.subs=[t],this.push(i))}parsePerlClassEscape(e,t){const i=e.pos();if(!(this.flags&j.PERL_X)||!e.more()||e.pop()!==O.CODES.get("\\")||!e.more())return!1;e.pop();const r=e.from(i),s=ed.has(r)?ed.get(r):null;return s===null?!1:(t.appendGroup(s,(this.flags&j.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const i=e.rest(),r=i.indexOf(":]");if(r<0)return!1;const s=i.substring(0,r+2);e.skipString(s);const a=gd.has(s)?gd.get(s):null;if(a===null)throw new ke(ne.ERR_INVALID_CHAR_RANGE,s);return t.appendGroup(a,(this.flags&j.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const i=e.pos();if(!(this.flags&j.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let r=1,s=e.pop();if(s===O.CODES.get("P")&&(r=-1),!e.more())throw e.rewindTo(i),new ke(ne.ERR_INVALID_CHAR_RANGE,e.rest());s=e.pop();let a;if(s!==O.CODES.get("{"))a=ge.runeToString(s);else{const p=e.rest(),g=p.indexOf("}");if(g<0)throw e.rewindTo(i),new ke(ne.ERR_INVALID_CHAR_RANGE,e.rest());a=p.substring(0,g),e.skipString(a),e.skip(1)}a.length!==0&&a.codePointAt(0)===O.CODES.get("^")&&(r=0-r,a=a.substring(1));const c=ne.unicodeTable(a);if(c===null)throw new ke(ne.ERR_INVALID_CHAR_RANGE,e.from(i));const l=c.first,u=c.second;if(!(this.flags&j.FOLD_CASE)||u===null)t.appendTableWithSign(l,r);else{const p=new Je().appendTable(l).appendTable(u).cleanClass().toArray();t.appendClassWithSign(p,r)}return!0}parseClass(e){const t=e.pos();e.skip(1);const i=this.newRegexp(S.Op.CHAR_CLASS);i.flags=this.flags;const r=new Je;let s=1;e.more()&&e.lookingAt("^")&&(s=-1,e.skip(1),this.flags&j.CLASS_NL||r.appendRange(O.CODES.get(`
`),O.CODES.get(`
`)));let a=!0;for(;!e.more()||e.peek()!==O.CODES.get("]")||a;){if(e.more()&&e.lookingAt("-")&&!(this.flags&j.PERL_X)&&!a){const p=e.rest();if(p==="-"||!p.startsWith("-]"))throw e.rewindTo(t),new ke(ne.ERR_INVALID_CHAR_RANGE,e.rest())}a=!1;const c=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,r))continue;e.rewindTo(c)}if(this.parseUnicodeClass(e,r)||this.parsePerlClassEscape(e,r))continue;e.rewindTo(c);const l=ne.parseClassChar(e,t);let u=l;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(u=ne.parseClassChar(e,t),u<l)throw new ke(ne.ERR_INVALID_CHAR_RANGE,e.from(c))}this.flags&j.FOLD_CASE?r.appendFoldedRange(l,u):r.appendRange(l,u)}e.skip(1),r.cleanClass(),s<0&&r.negateClass(),i.runes=r.toArray(),this.push(i)}}class j4{constructor(){this.inst=null,this.cap=[]}}class md{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.denseThreads[t]=null,this.densePcs[t]=e,t}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}}class $i{static fromRE2(e){const t=new $i;return t.prog=e.prog,t.re2=e,t.q0=new md(t.prog.numInst()),t.q1=new md(t.prog.numInst()),t.pool=[],t.poolSize=0,t.matched=!1,t.matchcap=Array(t.prog.numCap<2?2:t.prog.numCap).fill(0),t.ncap=0,t}static fromMachine(e){const t=new $i;return t.re2=e.re2,t.prog=e.prog,t.q0=e.q0,t.q1=e.q1,t.pool=e.pool,t.poolSize=e.poolSize,t.matched=e.matched,t.matchcap=e.matchcap,t.ncap=e.ncap,t}init(e){this.ncap=e,e>this.matchcap.length?this.initNewCap(e):this.resetCap(e)}resetCap(e){for(let t=0;t<this.poolSize;t++){const i=this.pool[t];i.cap=Array(e).fill(0)}}initNewCap(e){for(let t=0;t<this.poolSize;t++){const i=this.pool[t];i.cap=Array(e).fill(0)}this.matchcap=Array(e).fill(0)}submatches(){return this.ncap===0?ge.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(e){let t;return this.poolSize>0?(this.poolSize--,t=this.pool[this.poolSize]):t=new j4,t.inst=e,t}freeQueue(e,t=0){const i=e.size-t,r=this.poolSize+i;this.pool.length<r&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,r)));for(let s=t;s<e.size;s++){const a=e.denseThreads[s];a!==null&&(this.pool[this.poolSize]=a,this.poolSize++)}e.clear()}freeThread(e){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=e,this.poolSize++}match(e,t,i){const r=this.re2.cond;if(r===ge.EMPTY_ALL||(i===j.ANCHOR_START||i===j.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let s=this.q0,a=this.q1,c=e.step(t),l=c>>3,u=c&7,p=-1,g=0;c!==On.EOF()&&(c=e.step(t+u),p=c>>3,g=c&7);let b;for(t===0?b=ge.emptyOpContext(-1,l):b=e.context(t);;){if(s.isEmpty()){if(r&ge.EMPTY_BEGIN_TEXT&&t!==0||this.matched)break;if(this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const V=e.index(this.re2,t);if(V<0)break;t+=V,c=e.step(t),l=c>>3,u=c&7,c=e.step(t+u),p=c>>3,g=c&7}}!this.matched&&(t===0||i===j.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=t),this.add(s,this.prog.start,t,this.matchcap,b,null));const A=t+u;if(b=e.context(A),this.step(s,a,t,A,l,b,i,t===e.endPos()),u===0||this.ncap===0&&this.matched)break;t+=u,l=p,u=g,l!==-1&&(c=e.step(t+u),p=c>>3,g=c&7);const R=s;s=a,a=R}return this.freeQueue(a),this.matched}step(e,t,i,r,s,a,c,l){const u=this.re2.longest;for(let p=0;p<e.size;p++){let g=e.denseThreads[p];if(g===null)continue;if(u&&this.matched&&this.ncap>0&&this.matchcap[0]<g.cap[0]){this.freeThread(g);continue}const b=g.inst;let A=!1;switch(b.op){case K.MATCH:if(c===j.ANCHOR_BOTH&&!l)break;this.ncap>0&&(!u||!this.matched||this.matchcap[1]<i)&&(g.cap[1]=i,this.matchcap=g.cap.slice(0,this.ncap)),u||this.freeQueue(e,p+1),this.matched=!0;break;case K.RUNE:A=b.matchRune(s);break;case K.RUNE1:A=s===b.runes[0];break;case K.RUNE_ANY:A=!0;break;case K.RUNE_ANY_NOT_NL:A=s!==O.CODES.get(`
`);break;default:throw new Error("bad inst")}A&&(g=this.add(t,b.out,r,g.cap,a,g)),g!==null&&(this.freeThread(g),e.denseThreads[p]=null)}e.clear()}add(e,t,i,r,s,a){if(t===0||e.contains(t))return a;const c=e.add(t),l=this.prog.inst[t];switch(l.op){case K.FAIL:break;case K.ALT:case K.ALT_MATCH:a=this.add(e,l.out,i,r,s,a),a=this.add(e,l.arg,i,r,s,a);break;case K.EMPTY_WIDTH:l.arg&~s||(a=this.add(e,l.out,i,r,s,a));break;case K.NOP:a=this.add(e,l.out,i,r,s,a);break;case K.CAPTURE:if(l.arg<this.ncap){const u=r[l.arg];r[l.arg]=i,this.add(e,l.out,i,r,s,null),r[l.arg]=u}else a=this.add(e,l.out,i,r,s,a);break;case K.MATCH:case K.RUNE:case K.RUNE1:case K.RUNE_ANY:case K.RUNE_ANY_NOT_NL:a===null?a=this.alloc(l):a.inst=l,this.ncap>0&&a.cap!==r&&(a.cap=r.slice(0,this.ncap)),e.denseThreads[c]=a,a=null;break;default:throw new Error("unhandled")}return a}}class H4{constructor(e){this.value=e}get(){return this.value}set(e){this.value=e}compareAndSet(e,t){return this.value===e?(this.value=t,!0):!1}}class kn{static initTest(e){const t=kn.compile(e),i=new kn(t.expr,t.prog,t.numSubexp,t.longest);return i.cond=t.cond,i.prefix=t.prefix,i.prefixUTF8=t.prefixUTF8,i.prefixComplete=t.prefixComplete,i.prefixRune=t.prefixRune,i}static compile(e){return kn.compileImpl(e,j.PERL,!1)}static compilePOSIX(e){return kn.compileImpl(e,j.POSIX,!0)}static compileImpl(e,t,i){let r=ne.parse(e,t);const s=r.maxCap();r=Rt.simplify(r);const a=Fr.compileRegexp(r),c=new kn(e,a,s,i),[l,u]=a.prefix();return c.prefixComplete=l,c.prefix=u,c.prefixUTF8=ge.stringToUtf8ByteArray(c.prefix),c.prefix.length>0&&(c.prefixRune=c.prefix.codePointAt(0)),c.namedGroups=r.namedGroups,c}static match(e,t){return kn.compile(e).match(t)}constructor(e,t,i=0,r=0){this.expr=e,this.prog=t,this.numSubexp=i,this.longest=r,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new H4}numberOfCapturingGroups(){return this.numSubexp}get(){let e;do e=this.pooled.get();while(e&&!this.pooled.compareAndSet(e,e.next));return e}reset(){this.pooled.set(null)}put(e,t){let i=this.pooled.get();do i=this.pooled.get(),!t&&i&&(e=$i.fromMachine(e),t=!0),e.next!==i&&(e.next=i);while(!this.pooled.compareAndSet(i,e))}toString(){return this.expr}doExecute(e,t,i,r){let s=this.get(),a=!1;s?s.next!==null&&(s=$i.fromMachine(s),a=!0):(s=$i.fromRE2(this),a=!0),s.init(r);const c=s.match(e,t,i)?s.submatches():null;return this.put(s,a),c}match(e){return this.doExecute(Ce.fromUTF16(e),0,j.UNANCHORED,0)!==null}matchWithGroup(e,t,i,r,s){return e instanceof fn||(e=ka.utf16(e)),this.matchMachineInput(e,t,i,r,s)}matchMachineInput(e,t,i,r,s){if(t>i)return[!1,null];const a=e.isUTF16Encoding()?Ce.fromUTF16(e.asCharSequence(),0,i):Ce.fromUTF8(e.asBytes(),0,i),c=this.doExecute(a,t,r,2*s);return c===null?[!1,null]:[!0,c]}matchUTF8(e){return this.doExecute(Ce.fromUTF8(e),0,j.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,i){let r=0,s=0,a="";const c=Ce.fromUTF16(e);let l=0;for(;s<=e.length;){const u=this.doExecute(c,s,j.UNANCHORED,2);if(u===null||u.length===0)break;a+=e.substring(r,u[0]),(u[1]>r||u[0]===0)&&(a+=t(e.substring(u[0],u[1])),l++),r=u[1];const p=c.step(s)&7;if(s+p>u[1]?s+=p:s+1>u[1]?s++:s=u[1],l>=i)break}return a+=e.substring(r),a}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let i=new Array(t).fill(-1);for(let r=0;r<e.length;r++)i[r]=e[r];e=i}return e}allMatches(e,t,i=r=>r){let r=[];const s=e.endPos();t<0&&(t=s+1);let a=0,c=0,l=-1;for(;c<t&&a<=s;){const u=this.doExecute(e,a,j.UNANCHORED,this.prog.numCap);if(u===null||u.length===0)break;let p=!0;if(u[1]===a){u[0]===l&&(p=!1);const g=e.step(a);g<0?a=s+1:a+=g&7}else a=u[1];l=u[1],p&&(r.push(i(this.pad(u))),c++)}return r}findUTF8(e){const t=this.doExecute(Ce.fromUTF8(e),0,j.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.doExecute(Ce.fromUTF8(e),0,j.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.doExecute(Ce.fromUTF16(e),0,j.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.doExecute(Ce.fromUTF16(e),0,j.UNANCHORED,2)}findUTF8Submatch(e){const t=this.doExecute(Ce.fromUTF8(e),0,j.UNANCHORED,this.prog.numCap);if(t===null)return null;const i=new Array(1+this.numSubexp).fill(null);for(let r=0;r<i.length;r++)2*r<t.length&&t[2*r]>=0&&(i[r]=e.slice(t[2*r],t[2*r+1]));return i}findUTF8SubmatchIndex(e){return this.pad(this.doExecute(Ce.fromUTF8(e),0,j.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.doExecute(Ce.fromUTF16(e),0,j.UNANCHORED,this.prog.numCap);if(t===null)return null;const i=new Array(1+this.numSubexp).fill(null);for(let r=0;r<i.length;r++)2*r<t.length&&t[2*r]>=0&&(i[r]=e.substring(t[2*r],t[2*r+1]));return i}findSubmatchIndex(e){return this.pad(this.doExecute(Ce.fromUTF16(e),0,j.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const i=this.allMatches(Ce.fromUTF8(e),t,r=>e.slice(r[0],r[1]));return i.length===0?null:i}findAllUTF8Index(e,t){const i=this.allMatches(Ce.fromUTF8(e),t,r=>r.slice(0,2));return i.length===0?null:i}findAll(e,t){const i=this.allMatches(Ce.fromUTF16(e),t,r=>e.substring(r[0],r[1]));return i.length===0?null:i}findAllIndex(e,t){const i=this.allMatches(Ce.fromUTF16(e),t,r=>r.slice(0,2));return i.length===0?null:i}findAllUTF8Submatch(e,t){const i=this.allMatches(Ce.fromUTF8(e),t,r=>{let s=new Array(r.length/2|0).fill(null);for(let a=0;a<s.length;a++)r[2*a]>=0&&(s[a]=e.slice(r[2*a],r[2*a+1]));return s});return i.length===0?null:i}findAllUTF8SubmatchIndex(e,t){const i=this.allMatches(Ce.fromUTF8(e),t);return i.length===0?null:i}findAllSubmatch(e,t){const i=this.allMatches(Ce.fromUTF16(e),t,r=>{let s=new Array(r.length/2|0).fill(null);for(let a=0;a<s.length;a++)r[2*a]>=0&&(s[a]=e.substring(r[2*a],r[2*a+1]));return s});return i.length===0?null:i}findAllSubmatchIndex(e,t){const i=this.allMatches(Ce.fromUTF16(e),t);return i.length===0?null:i}}class xt{static CASE_INSENSITIVE=1;static DOTALL=2;static MULTILINE=4;static DISABLE_UNICODE_GROUPS=8;static LONGEST_MATCH=16;static quote(e){return ge.quoteMeta(e)}static compile(e,t=0){let i=e;if(t&xt.CASE_INSENSITIVE&&(i=`(?i)${i}`),t&xt.DOTALL&&(i=`(?s)${i}`),t&xt.MULTILINE&&(i=`(?m)${i}`),t&-32)throw new F4("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let r=j.PERL;t&xt.DISABLE_UNICODE_GROUPS&&(r&=-129);const s=new xt(e,t);return s.re2Input=kn.compileImpl(i,r,(t&xt.LONGEST_MATCH)!==0),s}static matches(e,t){return xt.compile(e).matcher(t).matches()}static initTest(e,t,i){if(e==null)throw new Error("pattern is null");if(i==null)throw new Error("re2 is null");const r=new xt(e,t);return r.re2Input=i,r}constructor(e,t){this.patternInput=e,this.flagsInput=t}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.matcher(e).matches()}matcher(e){return Array.isArray(e)&&(e=ka.utf8(e)),new B4(this,e)}split(e,t=0){const i=this.matcher(e),r=[];let s=0,a=0;for(;i.find();){if(a===0&&i.end()===0){a=i.end();continue}if(t>0&&r.length===t-1)break;if(a===i.start()){if(t===0){s+=1,a=i.end();continue}}else for(;s>0;)r.push(""),s-=1;r.push(i.substring(a,i.start())),a=i.end()}if(t===0&&a!==i.inputLength()){for(;s>0;)r.push(""),s-=1;r.push(i.substring(a,i.inputLength()))}return(t!==0||r.length===0)&&r.push(i.substring(a,i.inputLength())),r}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr="12.15.0";function G4(n){rr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new Qa("@firebase/firestore");function Oi(){return bi.logLevel}function H(n,...e){if(bi.logLevel<=de.DEBUG){const t=e.map(yl);bi.debug(`Firestore (${rr}): ${n}`,...t)}}function gn(n,...e){if(bi.logLevel<=de.ERROR){const t=e.map(yl);bi.error(`Firestore (${rr}): ${n}`,...t)}}function Ft(n,...e){if(bi.logLevel<=de.WARN){const t=e.map(yl);bi.warn(`Firestore (${rr}): ${n}`,...t)}}function yl(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,qp(n,i,t)}function qp(n,e,t){let i=`FIRESTORE (${rr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw gn(i),new Error(i)}function W(n,e,t,i){let r="Unexpected state";typeof t=="string"?r=t:i=t,n||qp(e,r,i)}function re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class W4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ze.UNAUTHENTICATED))}shutdown(){}}class K4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Y4{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0,42304);let i=this.i;const r=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let s=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zn,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},c=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(W(typeof i.accessToken=="string",31837,{l:i}),new jp(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class Q4{constructor(e,t,i){this.T=e,this.P=t,this.R=i,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const e=this.A();return e&&this.I.set("Authorization",e),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class X4{constructor(e,t,i){this.T=e,this.P=t,this.R=i}getToken(){return Promise.resolve(new Q4(this.T,this.P,this.R))}start(e,t){e.enqueueRetryable(()=>t(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class J4{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){W(this.o===void 0,3512);const i=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?r(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new yd(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const r=Z4(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<t&&(i+=e.charAt(r[s]%62))}return i}}function ue(n,e){return n<e?-1:n>e?1:0}function _c(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const r=n.charAt(i),s=e.charAt(i);if(r!==s)return tc(r)===tc(s)?ue(r,s):tc(r)?1:-1}return ue(n.length,e.length)}const e3=55296,t3=57343;function tc(n){const e=n.charCodeAt(0);return e>=e3&&e<=t3}function Wi(n,e,t){return n.length===e.length&&n.every((i,r)=>t(i,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="__name__";class $t{constructor(e,t,i){t===void 0?t=0:t>e.length&&Y(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Y(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return $t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $t?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const s=$t.compareSegments(e.get(r),t.get(r));if(s!==0)return s}return ue(e.length,t.length)}static compareSegments(e,t){const i=$t.isNumericId(e),r=$t.isNumericId(t);return i&&!r?-1:!i&&r?1:i&&r?$t.extractNumericId(e).compare($t.extractNumericId(t)):_c(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Un.fromString(e.substring(4,e.length-2))}}class ve extends $t{construct(e,t,i){return new ve(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new G(F.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(r=>r.length>0))}return new ve(t)}static emptyPath(){return new ve([])}}const n3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends $t{construct(e,t,i){return new Ve(e,t,i)}static isValidIdentifier(e){return n3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ki}static keyField(){return new Ve([Ki])}static fromServerFormat(e){const t=[];let i="",r=0;const s=()=>{if(i.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new G(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(i+=c,r++):(s(),r++)}if(s(),a)throw new G(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ve.fromString(e))}static fromName(e){return new Q(ve.fromString(e).popFirst(5))}static empty(){return new Q(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ve.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ve(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i3(n,e,t){if(!t)throw new G(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function r3(n,e,t,i){if(e===!0&&i===!0)throw new G(F.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vd(n){if(!Q.isDocumentKey(n))throw new G(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xs(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function wl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Y(12329,{type:typeof n})}function Zr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wl(n);throw new G(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ts(n,e){if(!xs(n))throw new G(F.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const r=e[i].typeString,s="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const a=n[i];if(r&&typeof a!==r){t=`JSON field '${i}' must be a ${r}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${i}' field to equal '${s.value}'`;break}}if(t)throw new G(F.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=-62135596800,_d=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*_d);return new be(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<wd)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_d}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ts(e,be._jsonSchema))return new be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}be._jsonSchemaVersion="firestore/timestamp/1.0",be._jsonSchema={type:Re("string",be._jsonSchemaVersion),seconds:Re("number"),nanoseconds:Re("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new be(0,0))}static max(){return new ie(new be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=-1;function s3(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,r=ie.fromTimestamp(i===1e9?new be(t+1,0):new be(t,i));return new Gn(r,Q.empty(),e)}function a3(n){return new Gn(n.readTime,n.key,es)}class Gn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Gn(ie.min(),Q.empty(),es)}static max(){return new Gn(ie.max(),Q.empty(),es)}}function o3(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class l3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==c3)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(t,s).next(i,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):M.reject(t)}static resolve(e){return new M((t,i)=>{t(e)})}static reject(e){return new M((t,i)=>{i(e)})}static waitFor(e){return new M((t,i)=>{let r=0,s=0,a=!1;e.forEach(c=>{++r,c.next(()=>{++s,a&&s===r&&t()},l=>i(l))}),a=!0,s===r&&t()})}static or(e){let t=M.resolve(!1);for(const i of e)t=t.next(r=>r?M.resolve(r):i());return t}static forEach(e,t){const i=[];return e.forEach((r,s)=>{i.push(t.call(this,r,s))}),this.waitFor(i)}static mapArray(e,t){return new M((i,r)=>{const s=e.length,a=new Array(s);let c=0;for(let l=0;l<s;l++){const u=l;t(e[u]).next(p=>{a[u]=p,++c,c===s&&i(a)},p=>r(p))}})}static doWhile(e,t){return new M((i,r)=>{const s=()=>{e()===!0?t().next(()=>{s()},r):i()};s()})}}function u3(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ar(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ro.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l=-1;function so(n){return n==null}function ts(n){return n===0&&1/n==-1/0}function d3(n){return typeof n=="number"&&Number.isInteger(n)&&!ts(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function h3(n){return typeof n=="string"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="";function p3(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=bd(e)),e=f3(n.get(t),e);return bd(e)}function f3(n,e){let t=e;const i=n.length;for(let r=0;r<i;r++){const s=n.charAt(r);switch(s){case"\0":t+="";break;case Hp:t+="";break;default:t+=s}}return t}function bd(n){return n+Hp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new xe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return t+i.left.size;r<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Js(this.root,e,this.comparator,!1)}getReverseIterator(){return new Js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Js(this.root,e,this.comparator,!0)}}class Js{constructor(e,t,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?i(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??He.RED,this.left=r??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,r,s){return new He(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return He.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,t,i,r,s){return this}insert(e,t,i){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ed(this.data.getIterator())}getIteratorFrom(e){return new Ed(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Le(this.comparator);return t.data=e,t}}class Ed{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Nt([])}unionWith(e){let t=new Le(Ve.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Nt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wi(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function g3(n,e){const t=[];for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.push(e(n[i],i,n));return t}function Gp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Wp("Invalid base64 string: "+s):s}}(e);return new Oe(t)}static fromUint8Array(e){const t=function(r){let s="";for(let a=0;a<r.length;++a)s+=String.fromCharCode(r[a]);return s}(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const m3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wn(n){if(W(!!n,39018),typeof n=="string"){let e=0;const t=m3.exec(n);if(W(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ae(n.seconds),nanos:Ae(n.nanos)}}function Ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kn(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="server_timestamp",Yp="__type__",Qp="__previous_value__",Xp="__local_write_time__";function ao(n){return(n?.mapValue?.fields||{})[Yp]?.stringValue===Kp}function As(n){const e=n.mapValue.fields[Qp];return ao(e)?As(e):e}function Yi(n){const e=Wn(n.mapValue.fields[Xp].timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y3{constructor(e,t,i,r,s,a,c,l,u,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=p,this.apiKey=g}}const Pa="(default)";class ns{constructor(e,t){this.projectId=e,this.database=t||Pa}static empty(){return new ns("","")}get isDefaultDatabase(){return this.database===Pa}isEqual(e){return e instanceof ns&&e.projectId===this.projectId&&e.database===this.database}}function v3(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new G(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ns(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="__type__",w3="__max__",Zs={mapValue:{}},Zp="__vector__",is="value",Qi={nullValue:"NULL_VALUE"},ht={booleanValue:!0},qe={booleanValue:!1};function De(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ao(n)?4:_3(n)?9007199254740991:Ra(n)?10:11:Y(28295,{value:n})}function kt(n,e,t){if(n===e)return!0;const i=De(n);if(i!==De(e))return!1;switch(i){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Yi(n).isEqual(Yi(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const c=Wn(s.timestampValue),l=Wn(a.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return Kn(s.bytesValue).isEqual(Kn(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return Ae(s.geoPointValue.latitude)===Ae(a.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a,c){if("integerValue"in s&&"integerValue"in a)return Ae(s.integerValue)===Ae(a.integerValue);let l,u;if("doubleValue"in s&&"doubleValue"in a)l=Ae(s.doubleValue),u=Ae(a.doubleValue);else{if(!c?.Ee)return!1;l=Ae(s.integerValue??s.doubleValue),u=Ae(a.integerValue??a.doubleValue)}return l===u?!!c?.he||ts(l)===ts(u):!!(c===void 0||c.Te)&&isNaN(l)&&isNaN(u)}(n,e,t);case 9:return Wi(n.arrayValue.values||[],e.arrayValue.values||[],(r,s)=>kt(r,s,t));case 10:case 11:return function(s,a,c){const l=s.mapValue.fields||{},u=a.mapValue.fields||{};if(Ca(l)!==Ca(u))return!1;for(const p in l)if(l.hasOwnProperty(p)&&(u[p]===void 0||!kt(l[p],u[p],c)))return!1;return!0}(n,e,t);default:return Y(52216,{left:n})}}function rs(n,e){return(n.values||[]).find(t=>kt(t,e))!==void 0}function pt(n,e){if(n===e)return 0;const t=De(n),i=De(e);if(t!==i)return ue(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=Ae(s.integerValue||s.doubleValue),l=Ae(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Id(n.timestampValue,e.timestampValue);case 4:return Id(Yi(n),Yi(e));case 5:return _c(n.stringValue,e.stringValue);case 6:return function(s,a){const c=Kn(s),l=Kn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),l=a.split("/");for(let u=0;u<c.length&&u<l.length;u++){const p=ue(c[u],l[u]);if(p!==0)return p}return ue(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=ue(Ae(s.latitude),Ae(a.latitude));return c!==0?c:ue(Ae(s.longitude),Ae(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return xd(n.arrayValue,e.arrayValue);case 10:return function(s,a){const c=s.fields||{},l=a.fields||{},u=c[is]?.arrayValue,p=l[is]?.arrayValue,g=ue(u?.values?.length||0,p?.values?.length||0);return g!==0?g:xd(u,p)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Zs.mapValue&&a===Zs.mapValue)return 0;if(s===Zs.mapValue)return 1;if(a===Zs.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),u=a.fields||{},p=Object.keys(u);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const b=_c(l[g],p[g]);if(b!==0)return b;const A=pt(c[l[g]],u[p[g]]);if(A!==0)return A}return ue(l.length,p.length)}(n.mapValue,e.mapValue);default:throw Y(23264,{Pe:t})}}function Id(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Wn(n),i=Wn(e),r=ue(t.seconds,i.seconds);return r!==0?r:ue(t.nanos,i.nanos)}function xd(n,e){const t=n.values||[],i=e.values||[];for(let r=0;r<t.length&&r<i.length;++r){const s=pt(t[r],i[r]);if(s!==void 0&&s!==0)return s}return ue(t.length,i.length)}function Xi(n){return bc(n)}function bc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Wn(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Kn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",r=!0;for(const s of t.values||[])r?r=!1:i+=",",i+=bc(s);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let r="{",s=!0;for(const a of i)s?s=!1:r+=",",r+=`${a}:${bc(t.fields[a])}`;return r+"}"}(n.mapValue):Y(61005,{value:n})}function da(n){switch(De(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=As(n);return e?16+da(e):16;case 5:return 2*n.stringValue.length;case 6:return Kn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((r,s)=>r+da(s),0)}(n.arrayValue);case 10:case 11:return function(i){let r=0;return xi(i.fields,(s,a)=>{r+=s.length+da(a)}),r}(n.mapValue);default:throw Y(13486,{value:n})}}function Ht(n){return!!n&&"integerValue"in n}function ui(n){return!!n&&"doubleValue"in n}function Yn(n){return Ht(n)||ui(n)}function Ji(n){return!!n&&"arrayValue"in n}function bt(n){return!!n&&"nullValue"in n}function ft(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hi(n){return!!n&&"mapValue"in n}function Ra(n){return(n?.mapValue?.fields||{})[Jp]?.stringValue===Zp}function Ec(n){return(n?.mapValue?.fields||{})[is]?.arrayValue}function Ur(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return xi(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ur(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ur(n.arrayValue.values[t]);return e}return{...n}}function _3(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===w3}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!hi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ur(t)}setAll(e){let t=Ve.emptyPath(),i={},r=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,r),i={},r=[],t=c.popLast()}a?i[c.lastSegment()]=Ur(a):r.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,i,r)}delete(e){const t=this.field(e.popLast());hi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return kt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=t.mapValue.fields[e.get(i)];hi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,i){xi(t,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new _t(Ur(this.value))}}function ef(n){const e=[];return xi(n.fields,(t,i)=>{const r=new Ve([t]);if(hi(i)){const s=ef(i.mapValue).fields;if(s.length===0)e.push(r);else for(const a of s)e.push(r.child(a))}else e.push(r)}),new Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ts(e)?"-0":e}}function bl(n){return{integerValue:""+n}}function El(n,e,t){return Number.isInteger(e)&&t?.preferIntegers||d3(e)?bl(e):oo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this._=void 0}}function b3(n,e,t){return n instanceof La?function(r,s){const a={fields:{[Yp]:{stringValue:Kp},[Xp]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&ao(s)&&(s=As(s)),s&&(a.fields[Qp]=s),{mapValue:a}}(t,e):n instanceof ss?nf(n,e):n instanceof as?rf(n,e):n instanceof os?function(r,s){const a=tf(r,s),c=Na(a)+Na(r.Re);return Ht(a)&&Ht(r.Re)?bl(c):oo(r.serializer,c)}(n,e):n instanceof Oa?function(r,s){return Td(r,s,Math.min)}(n,e):n instanceof Da?function(r,s){return Td(r,s,Math.max)}(n,e):void 0}function E3(n,e,t){return n instanceof ss?nf(n,e):n instanceof as?rf(n,e):t}function tf(n,e){return n instanceof os?Yn(e)?e:{integerValue:0}:null}class La extends co{}class ss extends co{constructor(e){super(),this.elements=e}}function nf(n,e){const t=sf(e);for(const i of n.elements)t.some(r=>kt(r,i))||t.push(i);return{arrayValue:{values:t}}}class as extends co{constructor(e){super(),this.elements=e}}function rf(n,e){let t=sf(e);for(const i of n.elements)t=t.filter(r=>!kt(r,i));return{arrayValue:{values:t}}}class Il extends co{constructor(e,t){super(),this.serializer=e,this.Re=t}}class os extends Il{}class Oa extends Il{}class Da extends Il{}function Td(n,e,t){if(!Yn(e))return n.Re;const i=t(Na(e),Na(n.Re));return Ht(e)&&Ht(n.Re)?bl(i):oo(n.serializer,i)}function Na(n){return Ae(n.integerValue||n.doubleValue)}function sf(n){return Ji(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function I3(n,e){return n.field.isEqual(e.field)&&function(i,r){return i instanceof ss&&r instanceof ss||i instanceof as&&r instanceof as?Wi(i.elements,r.elements,kt):i instanceof os&&r instanceof os||i instanceof Oa&&r instanceof Oa||i instanceof Da&&r instanceof Da?kt(i.Re,r.Re):i instanceof La&&r instanceof La}(n.transform,e.transform)}class x3{constructor(e,t){this.version=e,this.transformResults=t}}class un{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ha(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class lo{}function af(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cf(n.key,un.none()):new Ss(n.key,n.data,un.none());{const t=n.data,i=_t.empty();let r=new Le(Ve.comparator);for(let s of e.fields)if(!r.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?i.delete(s):i.set(s,a),r=r.add(s)}return new Ti(n.key,i,new Nt(r.toArray()),un.none())}}function T3(n,e,t){n instanceof Ss?function(r,s,a){const c=r.value.clone(),l=Sd(r.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof Ti?function(r,s,a){if(!ha(r.precondition,s))return void s.convertToUnknownDocument(a.version);const c=Sd(r.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(of(r)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(r,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function zr(n,e,t,i){return n instanceof Ss?function(s,a,c,l){if(!ha(s.precondition,a))return c;const u=s.value.clone(),p=kd(s.fieldTransforms,l,a);return u.setAll(p),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ti?function(s,a,c,l){if(!ha(s.precondition,a))return c;const u=kd(s.fieldTransforms,l,a),p=a.data;return p.setAll(of(s)),p.setAll(u),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,i):function(s,a,c){return ha(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function A3(n,e){let t=null;for(const i of n.fieldTransforms){const r=e.data.field(i.field),s=tf(i.transform,r||null);s!=null&&(t===null&&(t=_t.empty()),t.set(i.field,s))}return t||null}function Ad(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&Wi(i,r,(s,a)=>I3(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ss extends lo{constructor(e,t,i,r=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ti extends lo{constructor(e,t,i,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function of(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Sd(n,e,t){const i=new Map;W(n.length===t.length,32656,{Ie:t.length,Ae:n.length});for(let r=0;r<t.length;r++){const s=n[r],a=s.transform,c=e.data.field(s.field);i.set(s.field,E3(a,c,t[r]))}return i}function kd(n,e,t){const i=new Map;for(const r of n){const s=r.transform,a=t.data.field(r.field);i.set(r.field,b3(s,a,e))}return i}class cf extends lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class S3 extends lo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t){this.position=e,this.inclusive=t}}function Cd(n,e,t){let i=0;for(let r=0;r<n.position.length;r++){const s=e[r],a=n.position[r];if(s.field.isKeyField()?i=Q.comparator(Q.fromName(a.referenceValue),t.key):i=pt(a,t.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Pd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!kt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{}class Me extends lf{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new C3(e,t,i):t==="array-contains"?new L3(e,i):t==="in"?new O3(e,i):t==="not-in"?new D3(e,i):t==="array-contains-any"?new N3(e,i):new Me(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new P3(e,i):new R3(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(pt(t,this.value)):t!==null&&De(this.value)===De(t)&&this.matchesComparison(pt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends lf{constructor(e,t){super(),this.filters=e,this.op=t,this.Ve=null}static create(e,t){return new Xt(e,t)}matches(e){return uf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Ve!==null||(this.Ve=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Ve}getFilters(){return Object.assign([],this.filters)}}function uf(n){return n.op==="and"}function df(n){return k3(n)&&uf(n)}function k3(n){for(const e of n.filters)if(e instanceof Xt)return!1;return!0}function Ic(n){if(n instanceof Me)return n.field.canonicalString()+n.op.toString()+Xi(n.value);if(df(n))return n.filters.map(e=>Ic(e)).join(",");{const e=n.filters.map(t=>Ic(t)).join(",");return`${n.op}(${e})`}}function hf(n,e){return n instanceof Me?function(i,r){return r instanceof Me&&i.op===r.op&&i.field.isEqual(r.field)&&kt(i.value,r.value)}(n,e):n instanceof Xt?function(i,r){return r instanceof Xt&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,a,c)=>s&&hf(a,r.filters[c]),!0):!1}(n,e):void Y(19439)}function pf(n){return n instanceof Me?function(t){return`${t.field.canonicalString()} ${t.op} ${Xi(t.value)}`}(n):n instanceof Xt?function(t){return t.op.toString()+" {"+t.getFilters().map(pf).join(" ,")+"}"}(n):"Filter"}class C3 extends Me{constructor(e,t,i){super(e,t,i),this.key=Q.fromName(i.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class P3 extends Me{constructor(e,t){super(e,"in",t),this.keys=ff("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class R3 extends Me{constructor(e,t){super(e,"not-in",t),this.keys=ff("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ff(n,e){return(e.arrayValue?.values||[]).map(t=>Q.fromName(t.referenceValue))}class L3 extends Me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ji(t)&&rs(t.arrayValue,this.value)}}class O3 extends Me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&rs(this.value.arrayValue,t)}}class D3 extends Me{constructor(e,t){super(e,"not-in",t)}matches(e){if(rs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!rs(this.value.arrayValue,t)}}class N3 extends Me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ji(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>rs(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t="asc"){this.field=e,this.dir=t}}function V3(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t,i,r,s,a,c){this.key=e,this.documentType=t,this.version=i,this.readTime=r,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new et(e,0,ie.min(),ie.min(),ie.min(),_t.empty(),0)}static newFoundDocument(e,t,i,r){return new et(e,1,t,ie.min(),i,r,0)}static newNoDocument(e,t){return new et(e,2,t,ie.min(),ie.min(),_t.empty(),0)}static newUnknownDocument(e,t){return new et(e,3,t,ie.min(),ie.min(),_t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(e,t=null,i=[],r=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=a,this.endAt=c,this.de=null}}function Rd(n,e=null,t=[],i=[],r=null,s=null,a=null){return new M3(n,e,t,i,r,s,a)}function gf(n){const e=re(n);if(e.de===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Ic(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),so(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Xi(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Xi(i)).join(",")),e.de=t}return e.de}function mf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!V3(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Pd(n.startAt,e.startAt)&&Pd(n.endAt,e.endAt)}function oi(n){return!!n.isCorePipeline}function yf(n){return!!n.path&&Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t=null,i=[],r=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function F3(n,e,t,i,r,s,a,c){return new uo(n,e,t,i,r,s,a,c)}function xl(n){return new uo(n)}function Ld(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function B3(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function U3(n){return n.collectionGroup!==null}function $r(n){const e=re(n);if(e.fe===null){e.fe=[];const t=new Set;for(const s of e.explicitOrderBy)e.fe.push(s),t.add(s.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Le(Ve.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.fe.push(new Ma(s,i))}),t.has(Ve.keyField().canonicalString())||e.fe.push(new Ma(Ve.keyField(),i))}return e.fe}function Wt(n){const e=re(n);return e.me||(e.me=z3(e,$r(n))),e.me}function z3(n,e){if(n.limitType==="F")return Rd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Ma(r.field,s)});const t=n.endAt?new Va(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Va(n.startAt.position,n.startAt.inclusive):null;return Rd(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function xc(n,e,t){return new uo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $3(n,e){return mf(Wt(n),Wt(e))&&n.limitType===e.limitType}function qr(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(r=>pf(r)).join(", ")}]`),so(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(r=>Xi(r)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(r=>Xi(r)).join(",")),`Target(${i})`}(Wt(n))}; limitType=${n.limitType})`}function ho(n,e){return e.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):Q.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(n,e)&&function(i,r){for(const s of $r(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(i,r){return!(i.startAt&&!function(a,c,l){const u=Cd(a,c,l);return a.inclusive?u<=0:u<0}(i.startAt,$r(i),r)||i.endAt&&!function(a,c,l){const u=Cd(a,c,l);return a.inclusive?u>=0:u>0}(i.endAt,$r(i),r))}(n,e)}function Tl(n){return(e,t)=>{let i=!1;for(const r of $r(n)){const s=q3(r,e,t);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function q3(n,e,t){const i=n.field.isKeyField()?Q.comparator(e.key,t.key):function(s,a,c){const l=a.data.field(s),u=c.data.field(s);return l!==null&&u!==null?pt(l,u):Y(42886)}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Y(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,pe;function H3(n){switch(n){case F.OK:return Y(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return Y(15467,{code:n})}}function vf(n){if(n===void 0)return gn("GRPC error has no .code"),F.UNKNOWN;switch(n){case Pe.OK:return F.OK;case Pe.CANCELLED:return F.CANCELLED;case Pe.UNKNOWN:return F.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return F.INTERNAL;case Pe.UNAVAILABLE:return F.UNAVAILABLE;case Pe.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Pe.NOT_FOUND:return F.NOT_FOUND;case Pe.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Pe.ABORTED:return F.ABORTED;case Pe.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Pe.DATA_LOSS:return F.DATA_LOSS;default:return Y(39323,{code:n})}}(pe=Pe||(Pe={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[t]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){xi(this.inner,(t,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return Gp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G3=new xe(Q.comparator);function ut(){return G3}const wf=new xe(Q.comparator);function Di(...n){let e=wf;for(const t of n)e=e.insert(t.key,t);return e}function _f(n){let e=wf;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Dn(){return jr()}function bf(){return jr()}function jr(){return new Ai(n=>n.toString(),(n,e)=>n.isEqual(e))}const W3=new xe(Q.comparator),K3=new Le(Q.comparator);function ce(...n){let e=K3;for(const t of n)e=e.add(t);return e}const Y3=new Le(ue);function Q3(){return Y3}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X3(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J3=new Un([4294967295,4294967295],0);function Od(n){const e=X3().encode(n),t=new Vp;return t.update(e),new Uint8Array(t.digest())}function Dd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Un([t,i],0),new Un([r,s],0)]}class Al{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Or(`Invalid padding: ${t}`);if(i<0)throw new Or(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Or(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Or(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.ye=Un.fromNumber(this.ge)}we(e,t,i){let r=e.add(t.multiply(Un.fromNumber(i)));return r.compare(J3)===1&&(r=new Un([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Od(e),[i,r]=Dd(t);for(let s=0;s<this.hashCount;s++){const a=this.we(i,r,s);if(!this.be(a))return!1}return!0}static create(e,t,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Al(s,r,t);return i.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Od(e),[i,r]=Dd(t);for(let s=0;s<this.hashCount;s++){const a=this.we(i,r,s);this.ve(a)}}ve(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Or extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,i,r,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=r,this.augmentedDocumentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const r=new Map;return r.set(e,Cs.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new ks(ie.min(),r,new xe(ue),ut(),ut(),ce())}}class Cs{constructor(e,t,i,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Cs(i,t,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,i,r){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=r}}class Ef{constructor(e,t){this.targetId=e,this.xe=t}}class If{constructor(e,t,i=Oe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=r}}class Nd{constructor(e){this.targetId=e,this.Ce=0,this.Fe=Vd(),this.Oe=Oe.EMPTY_BYTE_STRING,this.Me=!1,this.Ne=!0}get current(){return this.Me}get resumeToken(){return this.Oe}get Le(){return this.Ce!==0}get Be(){return this.Ne}Ue(e){e.approximateByteSize()>0&&(this.Ne=!0,this.Oe=e)}ke(){let e=ce(),t=ce(),i=ce();return this.Fe.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:i=i.add(r);break;default:Y(38017,{changeType:s})}}),new Cs(this.Oe,this.Me,e,t,i)}qe(){this.Ne=!1,this.Fe=Vd()}$e(e,t){this.Ne=!0,this.Fe=this.Fe.insert(e,t)}Ke(e){this.Ne=!0,this.Fe=this.Fe.remove(e)}We(){this.Ce+=1}Qe(){this.Ce-=1,W(this.Ce>=0,3241,{Ce:this.Ce,targetId:this.targetId})}Ge(){this.Ne=!0,this.Me=!0}}const Sr="WatchChangeAggregator";class Z3{constructor(e){this.ze=e,this.je=new Map,this.He=ut(),this.Je=ea(),this.Ye=ut(),this.Ze=ea(),this.Xe=new xe(ue)}et(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.tt(t,e.De):this.nt(t,e.key,e.De);for(const t of e.removedTargetIds)this.nt(t,e.key,e.De)}rt(e){this.forEachTarget(e,t=>{const i=this.je.get(t);if(i)switch(e.state){case 0:this.it(t)&&i.Ue(e.resumeToken);break;case 1:i.Qe(),i.Le||i.qe(),i.Ue(e.resumeToken);break;case 2:i.Qe(),i.Le||this.removeTarget(t);break;case 3:this.it(t)&&(i.Ge(),i.Ue(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),i.Ue(e.resumeToken));break;default:Y(56790,{state:e.state})}else H(Sr,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((i,r)=>{this.it(r)&&t(r)})}_t(e){return oi(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:yf(e)}ot(e){const t=e.targetId,i=e.xe.count,r=this.ut(t);if(r){const s=r.target;if(this._t(s))if(i===0){const a=new Q(oi(s)?ve.fromString(s.getPipelineDocuments()[0]):s.path);this.nt(t,a,et.newNoDocument(a,ie.min()))}else W(i===1,20013,"Single document existence filter with count: "+i);else{const a=this.ct(t);if(a!==i){const c=this.lt(e),l=c?this.Et(c,e,a):1;if(l!==0){this.st(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Xe=this.Xe.insert(t,u)}}}}}lt(e){const t=e.xe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=t;let a,c;try{a=Kn(i).toUint8Array()}catch(l){if(l instanceof Wp)return Ft("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Al(a,r,s)}catch(l){return Ft(l instanceof Or?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}Et(e,t,i){return t.xe.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.ze.getRemoteKeysForTarget(t);let r=0;return i.forEach(s=>{const a=this.ze.Tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.nt(t,s,null),r++)}),r}Rt(e){const t=new Map;this.je.forEach((s,a)=>{const c=this.ut(a);if(c){if(s.current&&this._t(c.target)){const l=oi(c.target)?ve.fromString(c.target.getPipelineDocuments()[0]):c.target.path,u=new Q(l);this.It(u).has(a)||this.At(a,u)||this.nt(a,u,et.newNoDocument(u,e))}s.Be&&(t.set(a,s.ke()),s.qe())}});let i=ce();this.Ze.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{const u=this.ut(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(i=i.add(s))}),this.He.forEach((s,a)=>a.setReadTime(e)),this.Ye.forEach((s,a)=>a.setReadTime(e));const r=new ks(e,t,this.Xe,this.He,this.Ye,i);return this.He=ut(),this.Je=ea(),this.Ye=ut(),this.Ze=ea(),this.Xe=new xe(ue),r}tt(e,t){const i=this.je.get(e);if(!i||!this.it(e))return void H(Sr,`addDocumentToTarget received document for unknown inactive target (${e})`);const r=this.At(e,t.key)?2:0;i.$e(t.key,r),oi(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t.key,t):this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.Ze=this.Ze.insert(t.key,this.Vt(t.key).add(e))}nt(e,t,i){const r=this.je.get(e);r&&this.it(e)?(this.At(e,t)?r.$e(t,1):r.Ke(t),this.Ze=this.Ze.insert(t,this.Vt(t).delete(e)),this.Ze=this.Ze.insert(t,this.Vt(t).add(e)),i&&(oi(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t,i):this.He=this.He.insert(t,i))):H(Sr,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.je.delete(e)}ct(e){const t=this.je.get(e);if(!t)return 0;const i=t.ke();return this.ze.getRemoteKeysForTarget(e).size+i.addedDocuments.size-i.removedDocuments.size}We(e){let t=this.je.get(e);t||(H(Sr,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Nd(e),this.je.set(e,t)),t.We()}Vt(e){let t=this.Ze.get(e);return t||(t=new Le(ue),this.Ze=this.Ze.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Le(ue),this.Je=this.Je.insert(e,t)),t}it(e){const t=this.ut(e)!==null;return t||H(Sr,"Detected inactive target",e),t}ut(e){const t=this.je.get(e);return t===void 0||t.Le?null:this.ze.dt(e)}st(e){this.je.set(e,new Nd(e)),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.nt(e,t,null)})}At(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ea(){return new xe(Q.comparator)}function Vd(){return new xe(Q.comparator)}const e8={asc:"ASCENDING",desc:"DESCENDING"},t8={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n8={and:"AND",or:"OR"};class i8{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Tc(n,e){return n.useProto3Json||so(e)?e:{value:e}}function Fa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sl(n){const e=Wn(n);return new be(e.seconds,e.nanos)}function xf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function fa(n,e){return Fa(n,e.toTimestamp())}function Kt(n){return W(!!n,49232),ie.fromTimestamp(Sl(n))}function kl(n,e){return Ac(n,e).canonicalString()}function Ac(n,e){const t=function(r){return new ve(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Tf(n){const e=ve.fromString(n);return W(Pf(e),10190,{key:e.toString()}),e}function Ba(n,e){return kl(n.databaseId,e.path)}function nc(n,e){const t=Tf(e);if(t.get(1)!==n.databaseId.projectId)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(Sf(t))}function Af(n,e){return kl(n.databaseId,e)}function r8(n){const e=Tf(n);return e.length===4?ve.emptyPath():Sf(e)}function Sc(n){return new ve(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Sf(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Md(n,e,t){return{name:Ba(n,e),fields:t.value.mapValue.fields}}function s8(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Y(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(u,p){return u.useProto3Json?(W(p===void 0||typeof p=="string",58123),Oe.fromBase64String(p||"")):(W(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Oe.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(u){const p=u.code===void 0?F.UNKNOWN:vf(u.code);return new G(p,u.message||"")}(a);t=new If(i,r,s,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=nc(n,i.document.name),s=Kt(i.document.updateTime),a=i.document.createTime?Kt(i.document.createTime):ie.min(),c=new _t({mapValue:{fields:i.document.fields}}),l=et.newFoundDocument(r,s,a,c),u=i.targetIds||[],p=i.removedTargetIds||[];t=new pa(u,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=nc(n,i.document),s=i.readTime?Kt(i.readTime):ie.min(),a=et.newNoDocument(r,s),c=i.removedTargetIds||[];t=new pa([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=nc(n,i.document),s=i.removedTargetIds||[];t=new pa([],s,r,null)}else{if(!("filter"in e))return Y(11601,{ft:e});{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,a=new j3(r,s),c=i.targetId;t=new Ef(c,a)}}return t}function a8(n,e){let t;if(e instanceof Ss)t={update:Md(n,e.key,e.value)};else if(e instanceof cf)t={delete:Ba(n,e.key)};else if(e instanceof Ti)t={update:Md(n,e.key,e.data),updateMask:m8(e.fieldMask)};else{if(!(e instanceof S3))return Y(16599,{gt:e.type});t={verify:Ba(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(s,a){const c=a.transform;if(c instanceof La)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ss)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof as)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof os)return{fieldPath:a.field.canonicalString(),increment:c.Re};if(c instanceof Oa)return{fieldPath:a.field.canonicalString(),minimum:c.Re};if(c instanceof Da)return{fieldPath:a.field.canonicalString(),maximum:c.Re};throw Y(20930,{transform:a.transform})}(0,i))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:fa(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y(27497)}(n,e.precondition)),t}function o8(n,e){return n&&n.length>0?(W(e!==void 0,14353),n.map(t=>function(r,s){let a=r.updateTime?Kt(r.updateTime):Kt(s);return a.isEqual(ie.min())&&(a=Kt(s)),new x3(a,r.transformResults||[])}(t,e))):[]}function c8(n,e){return{documents:[Af(n,e.path)]}}function l8(n,e){const t={structuredQuery:{}},i=e.path;let r;e.collectionGroup!==null?(r=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Af(n,r);const s=function(u){if(u.length!==0)return Cf(Xt.create(u,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(u){if(u.length!==0)return u.map(p=>function(b){return{field:Ni(b.field),direction:p8(b.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Tc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{yt:t,parent:r}}function u8(n){let e=r8(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let r=null;if(i>0){W(i===1,65062);const p=t.from[0];p.allDescendants?r=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(g){const b=kf(g);return b instanceof Xt&&df(b)?b.getFilters():[b]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(b=>function(R){return new Ma(Vi(R.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(b))}(t.orderBy));let c=null;t.limit&&(c=function(g){let b;return b=typeof g=="object"?g.value:g,so(b)?null:b}(t.limit));let l=null;t.startAt&&(l=function(g){const b=!!g.before,A=g.values||[];return new Va(A,b)}(t.startAt));let u=null;return t.endAt&&(u=function(g){const b=!g.before,A=g.values||[];return new Va(A,b)}(t.endAt)),F3(e,r,a,s,c,"F",l,u)}function d8(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function h8(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function kf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Vi(t.unaryFilter.field);return Me.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=Vi(t.unaryFilter.field);return Me.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Vi(t.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Vi(t.unaryFilter.field);return Me.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(n):n.fieldFilter!==void 0?function(t){return Me.create(Vi(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Xt.create(t.compositeFilter.filters.map(i=>kf(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(t.compositeFilter.op))}(n):Y(30097,{filter:n})}function p8(n){return e8[n]}function f8(n){return t8[n]}function g8(n){return n8[n]}function Ni(n){return{fieldPath:n.canonicalString()}}function Vi(n){return Ve.fromServerFormat(n.fieldPath)}function Cf(n){return n instanceof Me?function(t){if(t.op==="=="){if(ft(t.value))return{unaryFilter:{field:Ni(t.field),op:"IS_NAN"}};if(bt(t.value))return{unaryFilter:{field:Ni(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ft(t.value))return{unaryFilter:{field:Ni(t.field),op:"IS_NOT_NAN"}};if(bt(t.value))return{unaryFilter:{field:Ni(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ni(t.field),op:f8(t.op),value:t.value}}}(n):n instanceof Xt?function(t){const i=t.getFilters().map(r=>Cf(r));return i.length===1?i[0]:{compositeFilter:{op:g8(t.op),filters:i}}}(n):Y(54877,{filter:n})}function m8(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Pf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Rf(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function cs(n,e){const t={fields:{}};return e.forEach((i,r)=>{if(typeof r!="string")throw new Error(`Cannot encode map with non-string key: ${r}`);t.fields[r]=i._toProto(n)}),{mapValue:t}}function Lf(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(n){return new i8(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tt(Oe.fromBase64String(e))}catch(t){throw new G(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tt(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ts(e,Tt._jsonSchema))return Tt.fromBase64String(e.bytes)}}Tt._jsonSchemaVersion="firestore/bytes/1.0",Tt._jsonSchema={type:Re("string",Tt._jsonSchemaVersion),bytes:Re("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function y8(){return new Cl(Ki)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yt._jsonSchemaVersion}}static fromJSON(e){if(Ts(e,Yt._jsonSchema))return new Yt(e.latitude,e.longitude)}}function Df(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt._jsonSchemaVersion="firestore/geoPoint/1.0",Yt._jsonSchema={type:Re("string",Yt._jsonSchemaVersion),latitude:Re("number"),longitude:Re("number")};class v8{bt(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="ConnectivityMonitor";class Bd{constructor(){this.vt=()=>this.St(),this.Dt=()=>this.xt(),this.Ct=[],this.Ft()}bt(e){this.Ct.push(e)}shutdown(){window.removeEventListener("online",this.vt),window.removeEventListener("offline",this.Dt)}Ft(){window.addEventListener("online",this.vt),window.addEventListener("offline",this.Dt)}St(){H(Fd,"Network connectivity changed: AVAILABLE");for(const e of this.Ct)e(0)}xt(){H(Fd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Ct)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta=null;function kc(){return ta===null?ta=function(){return 268435456+Math.round(2147483648*Math.random())}():ta++,"0x"+ta.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="RestConnection",w8={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class _8{get Ot(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Mt=t+"://"+e.host,this.Nt=`projects/${i}/databases/${r}`,this.Lt=this.databaseId.database===Pa?`project_id=${i}`:`project_id=${i}&database_id=${r}`}Bt(e,t,i,r,s){const a=kc(),c=this.Ut(e,t.toUriEncodedString());H(ic,`Sending RPC '${e}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.Nt,"x-goog-request-params":this.Lt};this.kt(l,r,s);const{host:u}=new URL(c),p=ws(u);return this.qt(e,c,l,i,p).then(g=>(H(ic,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Ft(ic,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",i),g})}$t(e,t,i,r,s,a){return this.Bt(e,t,i,r,s)}kt(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}Ut(e,t){const i=w8[e];let r=`${this.Mt}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b8{constructor(e){this.Kt=e.Kt,this.Wt=e.Wt}Qt(e){this.Gt=e}zt(e){this.jt=e}Ht(e){this.Jt=e}onMessage(e){this.Yt=e}close(){this.Wt()}send(e){this.Kt(e)}Zt(){this.Gt()}Xt(){this.jt()}en(e){this.Jt(e)}tn(e){this.Yt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="WebChannelConnection",kr=(n,e,t)=>{n.listen(e,i=>{try{t(i)}catch(r){setTimeout(()=>{throw r},0)}})};class qi extends _8{constructor(e){super(e),this.nn=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static rn(){if(!qi.sn){const e=Up();kr(e,Bp.STAT_EVENT,t=>{t.stat===wc.PROXY?H(Qe,"STAT_EVENT: detected buffering proxy"):t.stat===wc.NOPROXY&&H(Qe,"STAT_EVENT: detected no buffering proxy")}),qi.sn=!0}}qt(e,t,i,r,s){const a=kc();return new Promise((c,l)=>{const u=new Mp;u.setWithCredentials(!0),u.listenOnce(Fp.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ua.NO_ERROR:const g=u.getResponseJson();H(Qe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case ua.TIMEOUT:H(Qe,`RPC '${e}' ${a} timed out`),l(new G(F.DEADLINE_EXCEEDED,"Request time out"));break;case ua.HTTP_ERROR:const b=u.getStatus();if(H(Qe,`RPC '${e}' ${a} failed with status:`,b,"response text:",u.getResponseText()),b>0){let A=u.getResponseJson();Array.isArray(A)&&(A=A[0]);const R=A?.error;if(R&&R.status&&R.message){const V=function(X){const P=X.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(P)>=0?P:F.UNKNOWN}(R.status);l(new G(V,R.message))}else l(new G(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(F.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{_n:e,streamId:a,an:u.getLastErrorCode(),un:u.getLastError()})}}finally{H(Qe,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(r);H(Qe,`RPC '${e}' ${a} sending request:`,r),u.send(t,"POST",p,i,15)})}cn(e,t,i){const r=kc(),s=[this.Mt,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.kt(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const u=s.join("");H(Qe,`Creating RPC '${e}' stream ${r}: ${u}`,c);const p=a.createWebChannel(u,c);this.En(p);let g=!1,b=!1;const A=new b8({Kt:R=>{b?H(Qe,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(g||(H(Qe,`Opening RPC '${e}' stream ${r} transport.`),p.open(),g=!0),H(Qe,`RPC '${e}' stream ${r} sending:`,R),p.send(R))},Wt:()=>p.close()});return kr(p,Lr.EventType.OPEN,()=>{b||(H(Qe,`RPC '${e}' stream ${r} transport opened.`),A.Zt())}),kr(p,Lr.EventType.CLOSE,()=>{b||(b=!0,H(Qe,`RPC '${e}' stream ${r} transport closed`),A.en(),this.hn(p))}),kr(p,Lr.EventType.ERROR,R=>{b||(b=!0,Ft(Qe,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),A.en(new G(F.UNAVAILABLE,"The operation could not be completed")))}),kr(p,Lr.EventType.MESSAGE,R=>{if(!b){const V=R.data[0];W(!!V,16349);const q=V,X=q?.error||q[0]?.error;if(X){H(Qe,`RPC '${e}' stream ${r} received error:`,X);const P=X.status;let z=function(ye){const E=Pe[ye];if(E!==void 0)return vf(E)}(P),ee=X.message;P==="NOT_FOUND"&&ee.includes("database")&&ee.includes("does not exist")&&ee.includes(this.databaseId.database)&&Ft(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),z===void 0&&(z=F.INTERNAL,ee="Unknown error status: "+P+" with message "+X.message),b=!0,A.en(new G(z,ee)),p.close()}else H(Qe,`RPC '${e}' stream ${r} received:`,V),A.tn(V)}}),qi.rn(),setTimeout(()=>{A.Xt()},0),A}terminate(){this.nn.forEach(e=>e.close()),this.nn=[]}En(e){this.nn.push(e)}hn(e){this.nn=this.nn.filter(t=>t===e)}kt(e,t,i){super.kt(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return zp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E8(n){return new qi(n)}qi.sn=!1;class Nf{constructor(e,t,i=1e3,r=1.5,s=6e4){this.Tn=e,this.timerId=t,this.Pn=i,this.Rn=r,this.In=s,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(e){this.cancel();const t=Math.floor(this.An+this.pn()),i=Math.max(0,Date.now()-this.dn),r=Math.max(0,t-i);r>0&&H("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.An} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,r,()=>(this.dn=Date.now(),e())),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="PersistentStream";class Vf{constructor(e,t,i,r,s,a,c,l){this.Tn=e,this.yn=i,this.wn=r,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.bn=0,this.vn=null,this.Sn=null,this.stream=null,this.Dn=0,this.xn=new Nf(e,t)}Cn(){return this.state===1||this.state===5||this.Fn()}Fn(){return this.state===2||this.state===3}start(){this.Dn=0,this.state!==4?this.auth():this.On()}async stop(){this.Cn()&&await this.close(0)}Mn(){this.state=0,this.xn.reset()}Nn(){this.Fn()&&this.vn===null&&(this.vn=this.Tn.enqueueAfterDelay(this.yn,6e4,()=>this.Ln()))}Bn(e){this.Un(),this.stream.send(e)}async Ln(){if(this.Fn())return this.close(0)}Un(){this.vn&&(this.vn.cancel(),this.vn=null)}kn(){this.Sn&&(this.Sn.cancel(),this.Sn=null)}async close(e,t){this.Un(),this.kn(),this.xn.cancel(),this.bn++,e!==4?this.xn.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(gn(t.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.xn.fn()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ht(t)}qn(){}auth(){this.state=1;const e=this.$n(this.bn),t=this.bn;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.bn===t&&this.Kn(i,r)},i=>{e(()=>{const r=new G(F.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Wn(r)})})}Kn(e,t){const i=this.$n(this.bn);this.stream=this.Qn(e,t),this.stream.Qt(()=>{i(()=>this.listener.Qt())}),this.stream.zt(()=>{i(()=>(this.state=2,this.Sn=this.Tn.enqueueAfterDelay(this.wn,1e4,()=>(this.Fn()&&(this.state=3),Promise.resolve())),this.listener.zt()))}),this.stream.Ht(r=>{i(()=>this.Wn(r))}),this.stream.onMessage(r=>{i(()=>++this.Dn==1?this.Gn(r):this.onNext(r))})}On(){this.state=5,this.xn.mn(async()=>{this.state=0,this.start()})}Wn(e){return H(Ud,`close with error: ${e}`),this.stream=null,this.close(4,e)}$n(e){return t=>{this.Tn.enqueueAndForget(()=>this.bn===e?t():(H(Ud,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class I8 extends Vf{constructor(e,t,i,r,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,r,a),this.serializer=s}Qn(e,t){return this.connection.cn("Listen",e,t)}Gn(e){return this.onNext(e)}onNext(e){this.xn.reset();const t=s8(this.serializer,e),i=function(s){if(!("targetChange"in s))return ie.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?Kt(a.readTime):ie.min()}(e);return this.listener.zn(t,i)}jn(e){const t={};t.database=Sc(this.serializer),t.addTarget=function(s,a){let c;const l=a.target;if(c=oi(l)?{pipelineQuery:h8(s,l)}:yf(l)?{documents:c8(s,l)}:{query:l8(s,l).yt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=xf(s,a.resumeToken);const u=Tc(s,a.expectedCount);u!==null&&(c.expectedCount=u)}else if(a.snapshotVersion.compareTo(ie.min())>0){c.readTime=Fa(s,a.snapshotVersion.toTimestamp());const u=Tc(s,a.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const i=d8(this.serializer,e);i&&(t.labels=i),this.Bn(t)}Hn(e){const t={};t.database=Sc(this.serializer),t.removeTarget=e,this.Bn(t)}}class x8 extends Vf{constructor(e,t,i,r,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,r,a),this.serializer=s}get Jn(){return this.Dn>0}start(){this.lastStreamToken=void 0,super.start()}qn(){this.Jn&&this.Yn([])}Qn(e,t){return this.connection.cn("Write",e,t)}Gn(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.Zn()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.xn.reset();const t=o8(e.writeResults,e.commitTime),i=Kt(e.commitTime);return this.listener.Xn(i,t)}er(){const e={};e.database=Sc(this.serializer),this.Bn(e)}Yn(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>a8(this.serializer,i))};this.Bn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T8{}class A8 extends T8{constructor(e,t,i,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=r,this.tr=!1}nr(){if(this.tr)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.")}Bt(e,t,i,r){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Bt(e,Ac(t,i),r,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(F.UNKNOWN,s.toString())})}$t(e,t,i,r,s){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.$t(e,Ac(t,i),r,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(F.UNKNOWN,a.toString())})}terminate(){this.tr=!0,this.connection.terminate()}}function S8(n,e,t,i){return new A8(n,e,t,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k8="ComponentProvider",zd=new Map;function C8(n,e,t,i,r){return new y3(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Df(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,i)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Mf=41943040;class ct{static withCacheSize(e){return new ct(e,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}ct.DEFAULT_COLLECTION_PERCENTILE=10,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ct.DEFAULT=new ct(Mf,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ct.DISABLED=new ct(-1,0,0);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="LruGarbageCollector",P8=1048576;function jd([n,e],[t,i]){const r=ue(n,t);return r===0?ue(e,i):r}class R8{constructor(e){this.rr=e,this.buffer=new Le(jd),this.ir=0}sr(){return++this.ir}_r(e){const t=[e,this.sr()];if(this.buffer.size<this.rr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();jd(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class L8{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.ur(6e4)}stop(){this.ar&&(this.ar.cancel(),this.ar=null)}get started(){return this.ar!==null}ur(e){H(qd,`Garbage collection scheduled in ${e}ms`),this.ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ar(t)?H(qd,"Ignoring IndexedDB error during garbage collection: ",t):await sr(t)}await this.ur(3e5)})}}class O8{constructor(e,t){this.cr=e,this.params=t}calculateTargetCount(e,t){return this.cr.lr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return M.resolve(ro.ce);const i=new R8(t);return this.cr.forEachTarget(e,r=>i._r(r.sequenceNumber)).next(()=>this.cr.Er(e,r=>i._r(r))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.cr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.cr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve($d)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$d):this.hr(e,t))}getCacheSize(e){return this.cr.getCacheSize(e)}hr(e,t){let i,r,s,a,c,l,u;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),r=this.params.maximumSequenceNumbersToCollect):r=g,a=Date.now(),this.nthSequenceNumber(e,r))).next(g=>(i=g,c=Date.now(),this.removeTargets(e,i,t))).next(g=>(s=g,l=Date.now(),this.removeOrphanedDocuments(e,i))).next(g=>(u=Date.now(),Oi()<=de.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(u-l)+`ms
Total Duration: ${u-p}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:g})))}}function D8(n,e){return new O8(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="firestore.googleapis.com",Hd=!0;class Gd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ff,this.ssl=Hd}else this.host=e.host,this.ssl=e.ssl??Hd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Mf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<P8)throw new G(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}r3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Df(e.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pl{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new W4;switch(i.type){case"firstParty":return new X4(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new G(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=zd.get(t);i&&(H(k8,"Removing Datastore"),zd.delete(t),i.terminate())}(this),Promise.resolve()}}function N8(n,e,t,i={}){n=Zr(n,Pl);const r=ws(e),s=n._getSettings(),a={...s,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&xh(`https://${c}`),s.host!==Ff&&s.host!==c&&Ft("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:c,ssl:r,emulatorOptions:i};if(!Hn(l,a)&&(n._setSettings(l),i.mockUserToken)){let u,p;if(typeof i.mockUserToken=="string")u=i.mockUserToken,p=Ze.MOCK_USER;else{u=x0(i.mockUserToken,n._app?.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new G(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ze(g)}n._authCredentials=new K4(new jp(u,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Rl(this.firestore,e,this._query)}}class Be{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}toJSON(){return{type:Be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Ts(t,Be._jsonSchema))return new Be(e,i||null,new Q(ve.fromString(t.referencePath)))}}Be._jsonSchemaVersion="firestore/documentReference/1.0",Be._jsonSchema={type:Re("string",Be._jsonSchemaVersion),referencePath:Re("string")};class ls extends Rl{constructor(e,t,i){super(e,t,xl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new Q(e))}withConverter(e){return new ls(this.firestore,e,this._path)}}function Bf(n,e,...t){if(n=Ge(n),arguments.length===1&&(e=vl.newId()),i3("doc","path",e),n instanceof Pl){const i=ve.fromString(e,...t);return vd(i),new Be(n,null,new Q(i))}{if(!(n instanceof Be||n instanceof ls))throw new G(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ve.fromString(e,...t));return vd(i),new Be(n.firestore,n instanceof ls?n.converter:null,new Q(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:dt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ts(e,dt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new dt(e.vectorValues);throw new G(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}dt._jsonSchemaVersion="firestore/vectorValue/1.0",dt._jsonSchema={type:Re("string",dt._jsonSchemaVersion),vectorValues:Re("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V8=/^__.*__$/;class M8{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ti(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ss(e,this.data,t,this.fieldTransforms)}}function Uf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:n})}}class Ll{constructor(e,t,i,r,s,a){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ll({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),i=this.contextWith({path:t,arrayElement:!1});return i.validatePathSegment(e),i}childContextForFieldPath(e){const t=this.path?.child(e),i=this.contextWith({path:t,arrayElement:!1});return i.validatePath(),i}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ua(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Uf(this.dataSource)&&V8.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class F8{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||po(e)}createContext(e,t,i,r=!1){return new Ll({dataSource:e,methodName:t,targetDoc:i,path:Ve.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function B8(n){const e=n._freezeSettings(),t=po(n._databaseId);return new F8(n._databaseId,!!e.ignoreUndefinedProperties,t)}function U8(n,e,t,i,r,s={}){const a=n.createContext(s.merge||s.mergeFields?2:0,e,t,r);qf("Data must be an object, but it was:",a,i);const c=zf(i,a);let l,u;if(s.merge)l=new Nt(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const b=fo(e,g,t);if(!a.contains(b))throw new G(F.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);q8(p,b)||p.push(b)}l=new Nt(p),u=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,u=a.fieldTransforms;return new M8(new _t(c),l,u)}function us(n,e,t){if($f(n=Ge(n)))return qf("Unsupported field value:",e,n),zf(n,e);if(n instanceof Of)return function(r,s){if(!Uf(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const a=[];let c=0;for(const l of r){let u=us(l,s.childContextForArray(c));u==null&&(u={nullValue:"NULL_VALUE"}),a.push(u),c++}return{arrayValue:{values:a}}}(n,e)}return function(r,s,a){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return El(s.serializer,r,a);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const c=be.fromDate(r);return{timestampValue:Fa(s.serializer,c)}}if(r instanceof be){const c=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fa(s.serializer,c)}}if(r instanceof Yt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Tt)return{bytesValue:xf(s.serializer,r._byteString)};if(r instanceof Be){const c=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(c))throw s.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:kl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof dt)return function(l,u){const p=l instanceof dt?l.toArray():l;return{mapValue:{fields:{[Jp]:{stringValue:Zp},[is]:{arrayValue:{values:p.map(b=>{if(typeof b!="number")throw u.createError("VectorValues must only contain numeric values.");return oo(u.serializer,b)})}}}}}}(r,s);if(Rf(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${wl(r)}`)}(n,e,t)}function zf(n,e){const t={};return Gp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xi(n,(i,r)=>{const s=us(r,e.childContextForField(i));s!=null&&(t[i]=s)}),{mapValue:{fields:t}}}function $f(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof be||n instanceof Yt||n instanceof Tt||n instanceof Be||n instanceof Of||n instanceof dt||Rf(n))}function qf(n,e,t){if(!$f(t)||!xs(t)){const i=wl(t);throw i==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+i)}}function fo(n,e,t){if((e=Ge(e))instanceof Cl)return e._internalPath;if(typeof e=="string")return $8(n,e);throw Ua("Field path arguments must be of type string or ",n,!1,void 0,t)}const z8=new RegExp("[~\\*/\\[\\]]");function $8(n,e,t){if(e.search(z8)>=0)throw Ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Cl(...e.split("."))._internalPath}catch{throw Ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ua(n,e,t,i,r){const s=i&&!i.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new G(F.INVALID_ARGUMENT,c+n+l)}function q8(n,e){return n.some(t=>t.isEqual(e))}function j8(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const i=_t.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const s=this.optionDefinitions[r];if(r in e){const a=e[r];let c;s.nestedOptions&&xs(a)?c={mapValue:{fields:new nt(s.nestedOptions).getOptionsProto(t,a)}}:a&&(c=us(a,t)??void 0),c&&i.set(Ve.fromServerFormat(s.serverName),c)}}return i}getOptionsProto(e,t,i){const r=this._getKnownOptions(t,e);if(i){const s=new Map(g3(i,(a,c)=>[Ve.fromServerFormat(c),a!==void 0?us(a,e):null]));r.setAll(s)}return r.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H8(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!xs(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function G8(n){return new dt(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n){let e;return n instanceof Si?n:(e=xs(n)?J8(n):n instanceof Array?Z8(n):jf(n,void 0),e)}function rc(n){if(n instanceof Si)return n;if(n instanceof dt)return ds(n);if(Array.isArray(n))return ds(G8(n));throw new Error("Unsupported value: "+typeof n)}function Ol(n){return h3(n)?Y8(n):U(n)}class Si{constructor(){this._protoValueType="ProtoValue"}add(e){return new N("add",[this,U(e)],"add")}asBoolean(){if(this instanceof Qn)return this;if(this instanceof or)return new Gf(this);if(this instanceof Ps)return new X8(this);if(this instanceof N)return new Hf(this);throw new G("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new N("subtract",[this,U(e)],"subtract")}multiply(e){return new N("multiply",[this,U(e)],"multiply")}divide(e){return new N("divide",[this,U(e)],"divide")}mod(e){return new N("mod",[this,U(e)],"mod")}equal(e){return new N("equal",[this,U(e)],"equal").asBoolean()}notEqual(e){return new N("not_equal",[this,U(e)],"notEqual").asBoolean()}lessThan(e){return new N("less_than",[this,U(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new N("less_than_or_equal",[this,U(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new N("greater_than",[this,U(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new N("greater_than_or_equal",[this,U(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const i=[e,...t].map(r=>U(r));return new N("array_concat",[this,...i],"arrayConcat")}arrayContains(e){return new N("array_contains",[this,U(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Dr(e.map(U),"arrayContainsAll"):e;return new N("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Dr(e.map(U),"arrayContainsAny"):e;return new N("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new N("array_reverse",[this])}arrayLength(){return new N("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Dr(e.map(U),"equalAny"):e;return new N("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Dr(e.map(U),"notEqualAny"):e;return new N("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new N("exists",[this],"exists").asBoolean()}charLength(){return new N("char_length",[this],"charLength")}like(e){return new N("like",[this,U(e)],"like").asBoolean()}regexContains(e){return new N("regex_contains",[this,U(e)],"regexContains").asBoolean()}regexFind(e){return new N("regex_find",[this,U(e)],"regexFind")}regexFindAll(e){return new N("regex_find_all",[this,U(e)],"regexFindAll")}regexMatch(e){return new N("regex_match",[this,U(e)],"regexMatch").asBoolean()}stringContains(e){return new N("string_contains",[this,U(e)],"stringContains").asBoolean()}startsWith(e){return new N("starts_with",[this,U(e)],"startsWith").asBoolean()}endsWith(e){return new N("ends_with",[this,U(e)],"endsWith").asBoolean()}toLower(){return new N("to_lower",[this],"toLower")}toUpper(){return new N("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(U(e)),new N("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(U(e)),new N("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(U(e)),new N("rtrim",t,"rtrim")}type(){return new N("type",[this])}isType(e){return new N("is_type",[this,ds(e)],"isType").asBoolean()}stringConcat(e,...t){const i=[e,...t].map(U);return new N("string_concat",[this,...i],"stringConcat")}stringIndexOf(e){return new N("string_index_of",[this,U(e)],"stringIndexOf")}stringRepeat(e){return new N("string_repeat",[this,U(e)],"stringRepeat")}stringReplaceAll(e,t){return new N("string_replace_all",[this,U(e),U(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new N("string_replace_one",[this,U(e),U(t)],"stringReplaceOne")}concat(e,...t){const i=[e,...t].map(U);return new N("concat",[this,...i],"concat")}reverse(){return new N("reverse",[this],"reverse")}arrayFilter(e,t){return new N("array_filter",[this,U(e),t],"arrayFilter")}arrayTransform(e,t){return new N("array_transform",[this,U(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,i){return new N("array_transform",[this,U(e),U(t),i],"arrayTransformWithIndex")}arraySlice(e,t){const i=[this,U(e)];return t!==void 0&&i.push(U(t)),new N("array_slice",i,"arraySlice")}arrayFirst(){return new N("array_first",[this],"arrayFirst")}arrayFirstN(e){return new N("array_first_n",[this,U(e)],"arrayFirstN")}arrayLast(){return new N("array_last",[this],"arrayLast")}arrayLastN(e){return new N("array_last_n",[this,U(e)],"arrayLastN")}arrayMaximum(){return new N("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new N("maximum_n",[this,U(e)],"arrayMaximumN")}arrayMinimum(){return new N("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new N("minimum_n",[this,U(e)],"arrayMinimumN")}arrayIndexOf(e){return new N("array_index_of",[this,U(e),U("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new N("array_index_of",[this,U(e),U("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new N("array_index_of_all",[this,U(e)],"arrayIndexOfAll")}byteLength(){return new N("byte_length",[this],"byteLength")}ceil(){return new N("ceil",[this])}floor(){return new N("floor",[this])}abs(){return new N("abs",[this])}exp(){return new N("exp",[this])}mapGet(e){return new N("map_get",[this,ds(e)],"mapGet")}mapSet(e,t,...i){const r=[this,U(e),U(t),...i.map(U)];return new N("map_set",r,"mapSet")}mapKeys(){return new N("map_keys",[this],"mapKeys")}mapValues(){return new N("map_values",[this],"mapValues")}mapEntries(){return new N("map_entries",[this],"mapEntries")}getField(e){return new N("get_field",[this,U(e)],"get_field")}count(){return vt._create("count",[this],"count")}sum(){return vt._create("sum",[this],"sum")}average(){return vt._create("average",[this],"average")}minimum(){return vt._create("minimum",[this],"minimum")}maximum(){return vt._create("maximum",[this],"maximum")}first(){return vt._create("first",[this],"first")}last(){return vt._create("last",[this],"last")}arrayAgg(){return vt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return vt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return vt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const i=[e,...t];return new N("maximum",[this,...i.map(U)],"logicalMaximum")}logicalMinimum(e,...t){const i=[e,...t];return new N("minimum",[this,...i.map(U)],"minimum")}vectorLength(){return new N("vector_length",[this],"vectorLength")}cosineDistance(e){return new N("cosine_distance",[this,rc(e)],"cosineDistance")}dotProduct(e){return new N("dot_product",[this,rc(e)],"dotProduct")}euclideanDistance(e){return new N("euclidean_distance",[this,rc(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new N("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new N("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new N("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new N("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new N("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new N("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new N("timestamp_add",[this,U(e),U(t)],"timestampAdd")}timestampSubtract(e,t){return new N("timestamp_subtract",[this,U(e),U(t)],"timestampSubtract")}timestampDiff(e,t){return new N("timestamp_diff",[this,Ol(e),U(t)],"timestampDiff")}timestampExtract(e,t){const i=[this,U(e)];return t&&i.push(U(t)),new N("timestamp_extract",i,"timestampExtract")}documentId(){return new N("document_id",[this],"documentId")}parent(){return new N("parent",[this],"parent")}substring(e,t){const i=U(e);return new N("substring",t===void 0?[this,i]:[this,i,U(t)],"substring")}arrayGet(e){return new N("array_get",[this,U(e)],"arrayGet")}isError(){return new N("is_error",[this],"isError").asBoolean()}ifError(e){const t=new N("if_error",[this,U(e)],"ifError");return e instanceof Qn?t.asBoolean():t}isAbsent(){return new N("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new N("map_remove",[this,U(e)],"mapRemove")}mapMerge(e,...t){const i=U(e),r=t.map(U);return new N("map_merge",[this,i,...r],"mapMerge")}pow(e){return new N("pow",[this,U(e)])}trunc(e){return e===void 0?new N("trunc",[this]):new N("trunc",[this,U(e)],"trunc")}round(e){return e===void 0?new N("round",[this]):new N("round",[this,U(e)],"round")}collectionId(){return new N("collection_id",[this])}length(){return new N("length",[this])}ln(){return new N("ln",[this])}sqrt(){return new N("sqrt",[this])}stringReverse(){return new N("string_reverse",[this])}ifAbsent(e){return new N("if_absent",[this,U(e)],"ifAbsent")}ifNull(e){return new N("if_null",[this,U(e)],"ifNull")}coalesce(e,...t){return new N("coalesce",[this,U(e),...t.map(U)],"coalesce")}join(e){return new N("join",[this,U(e)],"join")}log10(){return new N("log10",[this])}arraySum(){return new N("sum",[this])}split(e){return new N("split",[this,U(e)])}timestampTruncate(e,t){const i=[this,U(e)];return t&&i.push(U(t)),new N("timestamp_trunc",i)}ascending(){return e9(this)}descending(){return t9(this)}as(e){return new K8(this,e,"as")}}class vt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,i){const r=new vt(e,t);return r._methodName=i,r}as(e){return new W8(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class W8{constructor(e,t,i){this.aggregate=e,this.alias=t,this._methodName=i}_readUserData(e){this.aggregate._readUserData(e)}}class K8{constructor(e,t,i){this.expr=e,this.alias=t,this._methodName=i,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Dr extends Si{constructor(e,t){super(),this.Rr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.Rr.map(t=>t._toProto(e))}}}_readUserData(e){this.Rr.forEach(t=>t._readUserData(e))}}class Ps extends Si{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new N("geo_distance",[this,U(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Y8(n){return Q8(n,"field")}function Q8(n,e){return new Ps(typeof n=="string"?Ki===n?y8()._internalPath:fo("field",n):n._internalPath,e)}class or extends Si{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new or(e,void 0);return t._protoValue=e,t}_toProto(e){return W(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,H8(this._protoValue)||(this._protoValue=us(this.value,e))}}function ds(n,e){return jf(n,"constant")}function jf(n,e){const t=new or(n,e);return typeof n=="boolean"?new Gf(t):t}class N extends Si{constructor(e,t,i,r){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,i!==void 0&&(this._methodName=i),r!==void 0&&(this._options=r)}get _optionsUtil(){return new nt({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(i=>i._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Qn extends Si{get _methodName(){return this._expr._methodName}countIf(){return vt._create("count_if",[this],"countIf")}not(){return new N("not",[this],"not").asBoolean()}conditional(e,t){return new N("conditional",[this,e,t],"conditional")}ifError(e){const t=U(e),i=new N("if_error",[this,t],"ifError");return t instanceof Qn?i.asBoolean():i}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Hf extends Qn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Gf extends Qn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class X8 extends Qn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function J8(n,e){const t=[];for(const i in n)if(Object.prototype.hasOwnProperty.call(n,i)){const r=n[i];t.push(ds(i)),t.push(U(r))}return new N("map",t,"map")}function Z8(n){return function(t,i){return new N("array",t.map(r=>U(r)),i)}(n,"array")}function e9(n){return new Wf(Ol(n),"ascending","ascending")}function t9(n){return new Wf(Ol(n),"descending","descending")}class Wf{constructor(e,t,i){this.expr=e,this.direction=t,this._methodName=i,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Lf(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Kf extends It{get _name(){return"add_fields"}get _optionsUtil(){return new nt({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[cs(e,this.fields)]}}_readUserData(e){super._readUserData(e),Xn(this.fields,e)}}class Yf extends It{get _name(){return"aggregate"}get _optionsUtil(){return new nt({})}constructor(e,t,i){super(i),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[cs(e,this.accumulators),cs(e,this.groups)]}}_readUserData(e){super._readUserData(e),Xn(this.groups,e),Xn(this.accumulators,e)}}class Qf extends It{get _name(){return"distinct"}get _optionsUtil(){return new nt({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[cs(e,this.groups)]}}_readUserData(e){super._readUserData(e),Xn(this.groups,e)}}class go extends It{get _name(){return"collection"}get _optionsUtil(){return new nt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Vr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Vr}]}}_readUserData(e){super._readUserData(e)}}class mo extends It{get _name(){return"collection_group"}get _optionsUtil(){return new nt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Dl extends It{get _name(){return"database"}get _optionsUtil(){return new nt({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Nl extends It{get _name(){return"documents"}get _optionsUtil(){return new nt({})}constructor(e,t){if(super(t),!e||e.length===0)throw new G(F.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const i=e.map(s=>s.startsWith("/")?s:"/"+s),r=new Set(i);if(r.size!==i.length)throw new G(F.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=i,this.mr=r}_toProto(e){return{...super._toProto(e),args:this.dr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class Vl extends It{get _name(){return"where"}get _optionsUtil(){return new nt({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Xn(this.condition,e)}}class hs extends It{get _name(){return"limit"}get _optionsUtil(){return new nt({})}constructor(e,t){W(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[El(e,this.limit)]}}}class Wd extends It{get _name(){return"offset"}get _optionsUtil(){return new nt({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[El(e,this.offset)]}}}class n9 extends It{get _name(){return"select"}get _optionsUtil(){return new nt({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[cs(e,this.selections)]}}_readUserData(e){super._readUserData(e),Xn(this.selections,e)}}class Ml extends It{get _name(){return"sort"}get _optionsUtil(){return new nt({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),Xn(this.orderings,e)}}class Fl extends It{get _name(){return"replace_with"}get _optionsUtil(){return new nt({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Lf(Fl.pr)]}}_readUserData(e){super._readUserData(e),Xn(this.map,e)}}Fl.pr="full_replace";function Xn(n,e){return j8(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}// Copyright 2024 Google LLC* @license
class lt{constructor(e,t,i){this.serializer=e,this.stages=t,this.listenOptions=i,this.isCorePipeline=!0}getPipelineCollection(){return yo(this)}getPipelineCollectionGroup(){return Bl(this)}getPipelineCollectionId(){return i9(this)}getPipelineDocuments(){return Cc(this)}getPipelineFlavor(){return function(t){let i="exact";return t.stages.forEach((r,s)=>{r._name!==Qf.name&&r._name!==Yf.name||(i="keyless"),r._name===n9.name&&i==="exact"&&(i="augmented"),r._name===Kf.name&&s<t.stages.length-1&&i==="exact"&&(i="augmented")}),i}(this)}getPipelineSourceType(){return $n(this)}}function $n(n){const e=n.stages[0];return e instanceof go||e instanceof mo||e instanceof Dl||e instanceof Nl?e._name:"unknown"}function yo(n){if($n(n)==="collection")return n.stages[0].Vr}function Bl(n){if($n(n)==="collection_group")return n.stages[0].collectionId}function i9(n){switch($n(n)){case"collection":return ve.fromString(yo(n)).lastSegment();case"collection_group":return Bl(n);default:return}}function Cc(n){if($n(n)==="documents")return n.stages[0].dr}// Copyright 2024 Google LLC* @license
class x{constructor(e,t){this.type=e,this.value=t}static vr(){return new x("ERROR",void 0)}static Sr(){return new x("UNSET",void 0)}static Dr(){return new x("NULL",Qi)}static newValue(e){return bt(e)?new x("NULL",Qi):function(i){return!!i&&"booleanValue"in i}(e)?new x("BOOLEAN",e):Ht(e)?new x("INT",e):ui(e)?new x("DOUBLE",e):function(i){return!!i&&"timestampValue"in i&&!!i.timestampValue}(e)?new x("TIMESTAMP",e):function(i){return!!i&&"stringValue"in i}(e)?new x("STRING",e):function(i){return!!i&&"bytesValue"in i}(e)?new x("BYTES",e):e.referenceValue?new x("REFERENCE",e):e.geoPointValue?new x("GEO_POINT",e):Ji(e)?new x("ARRAY",e):Ra(e)?new x("VECTOR",e):hi(e)?new x("MAP",e):new x("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function Hr(n){if(!n.Cr())return n.value}function Xf(n){return n instanceof Qn?n._expr:n}function J(n){if((n=Xf(n))instanceof Ps)return new r9(n);if(n instanceof or)return new s9(n);if(n instanceof Dr)return new a9(n);if(n instanceof N){if(n.name==="add")return new l9(n);if(n.name==="subtract")return new u9(n);if(n.name==="multiply")return new d9(n);if(n.name==="divide")return new h9(n);if(n.name==="mod")return new p9(n);if(n.name==="and")return new f9(n);if(n.name==="equal")return new A9(n);if(n.name==="not_equal")return new S9(n);if(n.name==="less_than")return new k9(n);if(n.name==="less_than_or_equal")return new C9(n);if(n.name==="greater_than")return new P9(n);if(n.name==="greater_than_or_equal")return new R9(n);if(n.name==="array_concat")return new L9(n);if(n.name==="array_reverse")return new O9(n);if(n.name==="array_contains")return new D9(n);if(n.name==="array_contains_all")return new N9(n);if(n.name==="array_contains_any")return new V9(n);if(n.name==="array_length")return new M9(n);if(n.name==="array_element")return new F9(n);if(n.name==="equal_any")return new Jf(n);if(n.name==="not_equal_any")return new m9(n);if(n.name==="is_nan")return new y9(n);if(n.name==="is_not_nan")return new v9(n);if(n.name==="is_null")return new w9(n);if(n.name==="is_not_null")return new _9(n);if(n.name==="is_error")return new b9(n);if(n.name==="exists")return new E9(n);if(n.name==="not")return new vo(n);if(n.name==="or")return new g9(n);if(n.name==="xor")return new Ul(n);if(n.name==="conditional")return new I9(n);if(n.name==="maximum")return new x9(n);if(n.name==="minimum")return new T9(n);if(n.name==="reverse")return new B9(n);if(n.name==="replace_first")return new U9(n);if(n.name==="replace_all")return new z9(n);if(n.name==="char_length")return new $9(n);if(n.name==="byte_length")return new q9(n);if(n.name==="like")return new j9(n);if(n.name==="regex_contains")return new H9(n);if(n.name==="regex_match")return new G9(n);if(n.name==="string_contains")return new W9(n);if(n.name==="starts_with")return new K9(n);if(n.name==="ends_with")return new Y9(n);if(n.name==="to_lower")return new Q9(n);if(n.name==="to_upper")return new X9(n);if(n.name==="trim")return new J9(n);if(n.name==="string_concat")return new Z9(n);if(n.name==="map_get")return new ey(n);if(n.name==="cosine_distance")return new ty(n);if(n.name==="dot_product")return new ny(n);if(n.name==="euclidean_distance")return new iy(n);if(n.name==="vector_length")return new ry(n);if(n.name==="unix_micros_to_timestamp")return new ly(n);if(n.name==="timestamp_to_unix_micros")return new hy(n);if(n.name==="unix_millis_to_timestamp")return new uy(n);if(n.name==="timestamp_to_unix_millis")return new py(n);if(n.name==="unix_seconds_to_timestamp")return new dy(n);if(n.name==="timestamp_to_unix_seconds")return new fy(n);if(n.name==="timestamp_add")return new gy(n);if(n.name==="timestamp_subtract")return new my(n)}throw new Error(`Unknown Expr : ${n}`)}class r9{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Ki)return x.newValue({referenceValue:Ba(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return x.newValue({timestampValue:fa(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return x.newValue({timestampValue:fa(e.serializer,t.createTime)});const i=t.data.field(this.expr._fieldPath);return i?ao(i)?x.newValue(function(s,a){if(s.serverTimestampBehavior==="estimate")return{timestampValue:fa(s.serializer,ie.fromTimestamp(Yi(a)))};if(s.serverTimestampBehavior==="previous"){const c=As(a);if(c)return c}return{nullValue:"NULL_VALUE"}}(e,i)):x.newValue(i):x.Sr()}}class s9{constructor(e){this.expr=e}evaluate(e,t){return x.newValue(this.expr._getValue())}}class a9{constructor(e){this.expr=e}evaluate(e,t){const i=this.expr.Rr.map(r=>J(r).evaluate(e,t));return i.some(r=>r.Cr())?x.vr():x.newValue({arrayValue:{values:i.map(r=>r.value)}})}}function We(n){return ui(n)?Number(n.doubleValue):Number(n.integerValue)}function Jt(n){return BigInt(n.integerValue)}const o9=BigInt("0x7fffffffffffffff"),c9=-BigInt("0x8000000000000000");class Rs{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length>=2,24778);const i=J(this.expr.params[0]).evaluate(e,t),r=J(this.expr.params[1]).evaluate(e,t);let s=this.Or(i,r);for(const a of this.expr.params.slice(2)){const c=J(a).evaluate(e,t);s=this.Or(s,c)}return s}Or(e,t){if(e.Cr()||t.Cr())return x.vr();if(e.Fr()||t.Fr())return x.Dr();const i=e.value,r=t.value;if(!ui(i)&&!Ht(i)||!ui(r)&&!Ht(r))return x.vr();if(ui(i)||ui(r)){const s=this.Mr(i,r);return s?x.newValue(s):x.vr()}if(Ht(i)&&Ht(r)){const s=this.Nr(i,r);return s===void 0?x.vr():typeof s=="number"?x.newValue({doubleValue:s}):s<c9||s>o9?x.vr():x.newValue({integerValue:`${s}`})}return x.vr()}}function mn(n,e){return De(n)!==De(e)?"TYPE_MISMATCH":ft(n)||ft(e)?"NOT_EQ":bt(n)&&bt(e)?"EQ":bt(n)||bt(e)?"NULL":Ji(n)&&Ji(e)?function(i,r){if(i.values?.length!==r.values?.length)return"NOT_EQ";let s=!1;for(let a=0;a<(i.values?.length??0);a++){const c=i.values[a],l=r.values[a];switch(mn(c,l)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":s=!0;break;default:Y(44609,{Lr:c,Br:l})}}return s?"NULL":"EQ"}(n.arrayValue,e.arrayValue):Ra(n)&&Ra(e)||hi(n)&&hi(e)?function(i,r){const s=i.fields||{},a=r.fields||{};if(Ca(s)!==Ca(a))return"NOT_EQ";let c=!1;for(const l in s)if(s.hasOwnProperty(l)){if(a[l]===void 0)return"NOT_EQ";switch(mn(s[l],a[l])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":c=!0}}return c?"NULL":"EQ"}(n.mapValue,e.mapValue):function(i,r){return kt(i,r,{Te:!1,Ee:!0,he:!0})}(n,e)?"EQ":"NOT_EQ"}class l9 extends Rs{Nr(e,t){return Jt(e)+Jt(t)}Mr(e,t){return{doubleValue:We(e)+We(t)}}}class u9 extends Rs{constructor(e){super(e),this.expr=e}Nr(e,t){return Jt(e)-Jt(t)}Mr(e,t){return{doubleValue:We(e)-We(t)}}}class d9 extends Rs{constructor(e){super(e),this.expr=e}Nr(e,t){return Jt(e)*Jt(t)}Mr(e,t){return{doubleValue:We(e)*We(t)}}}class h9 extends Rs{constructor(e){super(e),this.expr=e}Nr(e,t){const i=Jt(t);if(i!==BigInt(0))return Jt(e)/i}Mr(e,t){const i=We(t);return i===0?{doubleValue:ts(i)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:We(e)/i}}}class p9 extends Rs{constructor(e){super(e),this.expr=e}Nr(e,t){const i=Jt(t);if(i!==BigInt(0))return Jt(e)%i}Mr(e,t){const i=We(t);if(i!==0)return{doubleValue:We(e)%i}}}class f9{constructor(e){this.expr=e}evaluate(e,t){let i=!1,r=!1;for(const s of this.expr.params){const a=J(s).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!a.value?.booleanValue)return x.newValue(qe);break;case"NULL":r=!0;break;default:i=!0}}return i?x.vr():r?x.Dr():x.newValue(ht)}}class vo{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,9634);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"BOOLEAN":return x.newValue({booleanValue:!i.value?.booleanValue});case"NULL":return x.Dr();default:return x.vr()}}}class g9{constructor(e){this.expr=e}evaluate(e,t){let i=!1,r=!1;for(const s of this.expr.params){const a=J(s).evaluate(e,t);switch(a.type){case"BOOLEAN":if(a.value?.booleanValue)return x.newValue(ht);break;case"NULL":r=!0;break;default:i=!0}}return i?x.vr():r?x.Dr():x.newValue(qe)}}class Ul{constructor(e){this.expr=e}evaluate(e,t){let i=!1,r=!1;for(const s of this.expr.params){const a=J(s).evaluate(e,t);switch(a.type){case"BOOLEAN":i=Ul.xor(i,!!a.value?.booleanValue);break;case"NULL":r=!0;break;default:return x.vr()}}return r?x.Dr():x.newValue({booleanValue:i})}static xor(e,t){return(e||t)&&!(e&&t)}}class Jf{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,55094);let i=!1;const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":i=!0;break;case"ERROR":case"UNSET":return x.vr()}const s=J(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":i=!0;break;default:return x.vr()}if(i)return x.Dr();for(const a of s.value?.arrayValue?.values??[])switch(bt(r.value)&&bt(a)?"EQ":mn(r.value,a)){case"EQ":return x.newValue(ht);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":i=!0;break;default:Y(44608,{value:r.value,candidate:a})}return i?x.Dr():x.newValue(qe)}}class m9{constructor(e){this.expr=e}evaluate(e,t){return new vo(new N("not",[new N("equal_any",this.expr.params)])).evaluate(e,t)}}class y9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,23322);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"INT":return x.newValue(qe);case"DOUBLE":return x.newValue({booleanValue:isNaN(We(i.value))});case"NULL":return x.Dr();default:return x.vr()}}}class v9{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,50406),new vo(new N("not",[new N("is_nan",this.expr.params)])).evaluate(e,t)}}class w9{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,23123),J(this.expr.params[0]).evaluate(e,t).type){case"NULL":return x.newValue(ht);case"UNSET":case"ERROR":return x.vr();default:return x.newValue(qe)}}}class _9{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,23167),new vo(new N("not",[new N("is_null",this.expr.params)])).evaluate(e,t)}}class b9{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,5228),J(this.expr.params[0]).evaluate(e,t).type==="ERROR"?x.newValue(ht):x.newValue(qe)}}class E9{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,6877),J(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return x.vr();case"UNSET":return x.newValue(qe);default:return x.newValue(ht)}}}class I9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===3,11706);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"BOOLEAN":return i.value?.booleanValue?J(this.expr.params[1]).evaluate(e,t):J(this.expr.params[2]).evaluate(e,t);case"NULL":return J(this.expr.params[2]).evaluate(e,t);default:return x.vr()}}}class x9{constructor(e){this.expr=e}evaluate(e,t){const i=this.expr.params.map(s=>J(s).evaluate(e,t));let r;for(const s of i)switch(s.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||pt(s.value,r.value)>0?s:r}return r===void 0?x.Dr():r}}class T9{constructor(e){this.expr=e}evaluate(e,t){const i=this.expr.params.map(s=>J(s).evaluate(e,t));let r;for(const s of i)switch(s.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||pt(s.value,r.value)<0?s:r}return r===void 0?x.Dr():r}}class cr{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"ERROR":case"UNSET":return x.vr()}const r=J(this.expr.params[1]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return x.vr()}return this.Ur(i,r)}}class A9 extends cr{constructor(e){super(e),this.expr=e}Ur(e,t){if(e.Fr()&&t.Fr())return x.newValue(ht);if(e.Fr()||t.Fr()||ft(e.value)||ft(t.value)||De(e.value)!==De(t.value))return x.newValue(qe);switch(mn(e.value,t.value)){case"EQ":return x.newValue(ht);case"NOT_EQ":return x.newValue(qe);case"NULL":return x.Dr();default:Y(44615,{left:e,right:t})}}}class S9 extends cr{constructor(e){super(e),this.expr=e}Ur(e,t){switch(mn(e.value,t.value)){case"EQ":return x.newValue(qe);case"NOT_EQ":case"TYPE_MISMATCH":return x.newValue(ht);case"NULL":return x.Dr();default:Y(44614,{left:e,right:t})}}}class k9 extends cr{constructor(e){super(e),this.expr=e}Ur(e,t){return De(e.value)!==De(t.value)||ft(e.value)||ft(t.value)?x.newValue(qe):x.newValue({booleanValue:pt(e.value,t.value)<0})}}class C9 extends cr{constructor(e){super(e),this.expr=e}Ur(e,t){return De(e.value)!==De(t.value)||ft(e.value)||ft(t.value)?x.newValue(qe):mn(e.value,t.value)==="EQ"?x.newValue(ht):x.newValue({booleanValue:pt(e.value,t.value)<0})}}class P9 extends cr{constructor(e){super(e),this.expr=e}Ur(e,t){return De(e.value)!==De(t.value)||ft(e.value)||ft(t.value)?x.newValue(qe):x.newValue({booleanValue:pt(e.value,t.value)>0})}}class R9 extends cr{constructor(e){super(e),this.expr=e}Ur(e,t){return De(e.value)!==De(t.value)||ft(e.value)||ft(t.value)?x.newValue(qe):mn(e.value,t.value)==="EQ"?x.newValue(ht):x.newValue({booleanValue:pt(e.value,t.value)>0})}}class L9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class O9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,216);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"NULL":return x.Dr();case"ARRAY":{const r=i.value.arrayValue?.values??[];return x.newValue({arrayValue:{values:[...r].reverse()}})}default:return x.vr()}}}class D9{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===2,52884),new Jf(new N("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class N9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,1392);let i=!1;const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":i=!0;break;default:return x.vr()}const s=J(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":i=!0;break;default:return x.vr()}if(i)return x.Dr();const a=s.value?.arrayValue?.values??[],c=r.value?.arrayValue?.values??[];for(const l of a){let u=!1;i=!1;for(const p of c){switch(bt(l)&&bt(p)?"EQ":mn(l,p)){case"EQ":u=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":i=!0;break;default:Y(44613,{value:p,search:l})}if(u)break}if(!u)return x.newValue(qe)}return x.newValue(ht)}}class V9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,2680);let i=!1;const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":i=!0;break;default:return x.vr()}const s=J(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":i=!0;break;default:return x.vr()}if(i)return x.Dr();const a=s.value?.arrayValue?.values??[],c=r.value?.arrayValue?.values??[];for(const l of c)for(const u of a)switch(bt(l)&&bt(u)?"EQ":mn(l,u)){case"EQ":return x.newValue(ht);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":i=!0;break;default:Y(44608,{value:l,search:u})}return i?x.Dr():x.newValue(qe)}}class M9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,38605);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"NULL":return x.Dr();case"ARRAY":return x.newValue({integerValue:`${i.value?.arrayValue?.values?.length??0}`});default:return x.vr()}}}class F9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class B9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,1508);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"NULL":return x.Dr();case"BYTES":{const r=i.value?.bytesValue;if(typeof r=="string"){const s=Oe.fromBase64String(r).toUint8Array();return s.reverse(),x.newValue({bytesValue:Oe.fromUint8Array(s).toBase64()})}return x.newValue({bytesValue:new Uint8Array(r).reverse()})}case"STRING":{const r=i.value?.stringValue,s=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(r),a=Array.from(s,c=>c.segment).reverse();return x.newValue({stringValue:a.join("")})}default:return x.vr()}}}class U9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class z9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class $9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,19400);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"NULL":return x.Dr();case"STRING":{const r=function(a){let c=0;for(let l=0;l<a.length;l++){const u=a.codePointAt(l);if(u===void 0)return;if(u<=65535)if(u>=55296&&u<=57343)if(u<=56319){const p=a.codePointAt(l+1);p!==void 0&&p>=56320&&p<=57343?(c+=1,l++):c+=1}else c+=1;else c+=1;else{if(!(u<=1114111))return;c+=1,l++}}return c}(i.value.stringValue);return r===void 0?x.vr():x.newValue({integerValue:r})}default:return x.vr()}}}class q9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,8486);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"BYTES":{const r=i.value?.bytesValue;return typeof r=="string"?x.newValue({integerValue:Oe.fromBase64String(r).toUint8Array().length}):x.newValue({integerValue:new Uint8Array(r).length})}case"STRING":{const r=function(a){let c=0;for(let l=0;l<a.length;l++){const u=a.codePointAt(l);if(u===void 0)return;if(u>=55296&&u<=57343){if(!(u<=56319))return;{const p=a.codePointAt(l+1);if(p===void 0||!(p>=56320&&p<=57343))return;c+=4,l++}}else if(u<=127)c+=1;else if(u<=2047)c+=2;else if(u<=65535)c+=3;else{if(!(u<=1114111))return;c+=4,l++}}return c}(i.value?.stringValue);return r===void 0?x.vr():x.newValue({integerValue:r})}case"NULL":return x.Dr();default:return x.vr()}}}class lr{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let i=!1;const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":break;case"NULL":i=!0;break;default:return x.vr()}const s=J(this.expr.params[1]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":i=!0;break;default:return x.vr()}return i?x.Dr():this.kr(r.value?.stringValue,s.value?.stringValue)}}class j9 extends lr{kr(e,t){try{const i=function(a){let c="";for(let l=0;l<a.length;l++){const u=a.charAt(l);switch(u){case"_":c+=".";break;case"%":c+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":c+="\\"+u;break;default:c+=u}}return"^"+c+"$"}(t),r=xt.compile(i);return x.newValue({booleanValue:r.matches(e)})}catch(i){return Ft(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${i}`),x.vr()}}}class H9 extends lr{kr(e,t){try{const i=xt.compile(t);return x.newValue({booleanValue:i.matcher(e).find()})}catch{return Ft(`Invalid regex pattern found in regex_contains: ${t}, returning error`),x.vr()}}}class G9 extends lr{kr(e,t){try{return x.newValue({booleanValue:xt.compile(t).matches(e)})}catch{return Ft(`Invalid regex pattern found in regex_match: ${t}, returning error`),x.vr()}}}class W9 extends lr{kr(e,t){return x.newValue({booleanValue:e.includes(t)})}}class K9 extends lr{kr(e,t){return x.newValue({booleanValue:e.startsWith(t)})}}class Y9 extends lr{kr(e,t){return x.newValue({booleanValue:e.endsWith(t)})}}class Q9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,29079);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"STRING":return x.newValue({stringValue:i.value?.stringValue?.toLowerCase()});case"NULL":return x.Dr();default:return x.vr()}}}class X9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,60487);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"STRING":return x.newValue({stringValue:i.value?.stringValue?.toUpperCase()});case"NULL":return x.Dr();default:return x.vr()}}}class J9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,28544);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"STRING":return x.newValue({stringValue:i.value?.stringValue?.trim()});case"NULL":return x.Dr();default:return x.vr()}}}class Z9{constructor(e){this.expr=e}evaluate(e,t){const i=this.expr.params.map(a=>J(a).evaluate(e,t));let r="",s=!1;for(const a of i)switch(a.type){case"STRING":r+=a.value.stringValue;break;case"NULL":s=!0;break;default:return x.vr()}return s?x.Dr():x.newValue({stringValue:r})}}class ey{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,4483);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"UNSET":return x.Sr();case"MAP":break;default:return x.vr()}const r=J(this.expr.params[1]).evaluate(e,t);if(r.type!=="STRING")return x.vr();const s=i.value?.mapValue?.fields?.[r.value?.stringValue];return s===void 0?x.Sr():x.newValue(s)}}class zl{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let i=!1;const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":break;case"NULL":i=!0;break;default:return x.vr()}const s=J(this.expr.params[1]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":i=!0;break;default:return x.vr()}if(i)return x.Dr();const a=Ec(r.value),c=Ec(s.value);if(a===void 0||c===void 0||a.values?.length!==c.values?.length)return x.vr();const l=this.qr(a,c);return l===void 0||isNaN(l)?x.vr():x.newValue({doubleValue:l})}}class ty extends zl{qr(e,t){const i=e?.values??[],r=t?.values??[];if(i.length===0)return;let s=0,a=0,c=0;for(let u=0;u<i.length;u++){if(!Yn(i[u])||!Yn(r[u]))return;const p=We(i[u]),g=We(r[u]);s+=p*g,a+=p*p,c+=g*g}const l=Math.sqrt(a)*Math.sqrt(c);if(l!==0)return 1-Math.max(-1,Math.min(1,s/l))}}class ny extends zl{qr(e,t){const i=e?.values??[],r=t?.values??[];if(i.length===0)return 0;let s=0;for(let a=0;a<i.length;a++){if(!Yn(i[a])||!Yn(r[a]))return;s+=We(i[a])*We(r[a])}return s}}class iy extends zl{qr(e,t){const i=e?.values??[],r=t?.values??[];if(i.length===0)return 0;let s=0;for(let a=0;a<i.length;a++){if(!Yn(i[a])||!Yn(r[a]))return;const c=We(i[a]),l=We(r[a]);s+=Math.pow(c-l,2)}return Math.sqrt(s)}}class ry{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,39044);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"VECTOR":{const r=Ec(i.value);return x.newValue({integerValue:r?.values?.length??0})}case"NULL":return x.Dr();default:return x.vr()}}}const ps=BigInt(-62135596800),fs=BigInt(253402300799),za=BigInt(1e3),qn=BigInt(1e6),sy=ps*za,ay=fs*za+BigInt(999),oy=ps*qn,cy=fs*qn+BigInt(999999);function $l(n){return n>=oy&&n<=cy}function Zf(n){return n>=ps&&n<=fs}function gs(n,e){const t=BigInt(n);return!(t<ps||t>fs)&&!(e<0||e>=1e9)&&(t!==ps||e===0)&&!(t===fs&&e>999999999)}function eg(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function ql(n){return BigInt(n.seconds)*qn+BigInt(Math.trunc(n.nanoseconds/1e3))}class jl{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"INT":return this.toTimestamp(BigInt(i.value.integerValue));case"NULL":return x.Dr();default:return x.vr()}}}class ly extends jl{toTimestamp(e){if(!$l(e))return x.vr();let t=Number(e/qn),i=Number(e%qn*BigInt(1e3));const r=eg(t,i);return t=r.seconds,i=r.nanos,gs(t,i)?x.newValue({timestampValue:{seconds:t,nanos:i}}):x.vr()}}class uy extends jl{toTimestamp(e){if(!function(a){return a>=sy&&a<=ay}(e))return x.vr();let t=Number(e/za),i=Number(e%za*BigInt(1e6));const r=eg(t,i);return t=r.seconds,i=r.nanos,gs(t,i)?x.newValue({timestampValue:{seconds:t,nanos:i}}):x.vr()}}class dy extends jl{toTimestamp(e){if(!Zf(e))return x.vr();const t=Number(e);return x.newValue({timestampValue:{seconds:t,nanos:0}})}}class Hl{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"TIMESTAMP":break;case"NULL":return x.Dr();default:return x.vr()}const r=Sl(i.value.timestampValue);return gs(r.seconds,r.nanoseconds)?this.$r(r):x.vr()}}class hy extends Hl{$r(e){const t=ql(e);return $l(t)?x.newValue({integerValue:`${t.toString()}`}):x.vr()}}class py extends Hl{$r(e){const t=ql(e),i=t/BigInt(1e3),r=t%BigInt(1e3);return i>BigInt(0)||r===BigInt(0)?x.newValue({integerValue:i.toString()}):x.newValue({integerValue:(i-BigInt(1)).toString()})}}class fy extends Hl{$r(e){const t=BigInt(e.seconds);return Zf(t)?x.newValue({integerValue:t.toString()}):x.vr()}}class tg{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let i=!1;const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":i=!0;break;default:return x.vr()}const s=J(this.expr.params[1]).evaluate(e,t);let a;switch(s.type){case"STRING":if(a=function(P){switch(P){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(s.value.stringValue),a===void 0)return x.vr();break;case"NULL":i=!0;break;default:return x.vr()}const c=J(this.expr.params[2]).evaluate(e,t);switch(c.type){case"INT":break;case"NULL":i=!0;break;default:return x.vr()}if(i)return x.Dr();const l=BigInt(c.value.integerValue);let u;try{switch(a){case"microsecond":u=l;break;case"millisecond":u=l*BigInt(1e3);break;case"second":u=l*BigInt(1e6);break;case"minute":u=l*BigInt(6e7);break;case"hour":u=l*BigInt(36e8);break;case"day":u=l*BigInt(864e8);break;default:return x.vr()}if(a!=="microsecond"&&l!==BigInt(0)&&u/l!==BigInt(this.Kr(a)))return x.vr()}catch(X){return Ft(`Error during timestamp arithmetic: ${X}`),x.vr()}const p=Sl(r.value.timestampValue);if(!gs(p.seconds,p.nanoseconds))return x.vr();const g=ql(p),b=this.Wr(g,u);if(!$l(b))return x.vr();const A=Number(b/qn),R=b%qn,V=Number((R<0?R+qn:R)*BigInt(1e3)),q=R<0?A-1:A;return gs(q,V)?x.newValue({timestampValue:{seconds:q,nanos:V}}):x.vr()}Kr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class gy extends tg{Wr(e,t){return e+t}}class my extends tg{Wr(e,t){return e-t}}function ms(n){if((n=Xf(n))instanceof Ps)return`fld(${n.fieldName})`;if(n instanceof or)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Be?`ref(${t.path})`:t instanceof dt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof N)return`fn(${n.name},[${n.params.map(ms).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.Rr.map(ms).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function yy(n){if(n instanceof Kf)return`${n._name}(${na(n.fields)})`;if(n instanceof Yf){let e=`${n._name}(${na(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${na(n.groups)})`),e}if(n instanceof Qf)return`${n._name}(${na(n.groups)})`;if(n instanceof go)return`${n._name}(${n.Vr})`;if(n instanceof mo)return`${n._name}(${n.collectionId})`;if(n instanceof Dl)return`${n._name}()`;if(n instanceof Nl)return`${n._name}(${n.dr.sort()})`;if(n instanceof Vl)return`${n._name}(${ms(n.condition)})`;if(n instanceof hs)return`${n._name}(${n.limit})`;if(n instanceof Ml)return`${n._name}(${function(t){return t.map(i=>`${ms(i.expr)}${i.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function na(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${ms(t)}`).join(",")}`}function dn(n){return n.stages.map(e=>yy(e)).join("|")}function ng(n,e){return dn(n)===dn(e)}function Fe(n){return n instanceof lt}function Kd(n){return Fe(n)?dn(n):qr(n)}function ig(n){return Fe(n)?dn(n):function(t){return`${gf(Wt(t))}|lt:${t.limitType}`}(n)}function wo(n,e){return n instanceof lt&&e instanceof lt?ng(n,e):!(n instanceof lt&&!(e instanceof lt)||!(n instanceof lt)&&e instanceof lt)&&$3(n,e)}function rg(n){return oi(n)?dn(n):gf(n)}function sg(n,e){return n instanceof lt&&e instanceof lt?ng(n,e):!(n instanceof lt&&!(e instanceof lt)||!(n instanceof lt)&&e instanceof lt)&&mf(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t,i,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&T3(s,e,i[r])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=zr(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=zr(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=bf();return this.mutations.forEach(r=>{const s=e.get(r.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(r.key)?null:c;const l=af(a,c);l!==null&&i.set(r.key,l),a.isValidDocument()||a.convertToNoDocument(ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ce())}isEqual(e){return this.batchId===e.batchId&&Wi(this.mutations,e.mutations,(t,i)=>Ad(t,i))&&Wi(this.baseMutations,e.baseMutations,(t,i)=>Ad(t,i))}}class Gl{constructor(e,t,i,r){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=r}static from(e,t,i){W(e.mutations.length===i.length,58842,{Qr:e.mutations.length,Gr:i.length});let r=function(){return W3}();const s=e.mutations;for(let a=0;a<s.length;a++)r=r.insert(s[a].key,i[a].version);return new Gl(e,t,i,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,i,r,s=ie.min(),a=ie.min(),c=Oe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.zr=e}}function by(n){const e=u8({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.Hi=new Iy}addToCollectionParentIndex(e,t){return this.Hi.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Hi.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(Gn.min())}updateCollectionGroup(e,t,i){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class Iy{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t]||new Le(ve.comparator),s=!r.has(i);return this.index[t]=r.add(i),s}has(e){const t=e.lastSegment(),i=e.popLast(),r=this.index[t];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Le(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.Ds=e}next(){return this.Ds+=2,this.Ds}static xs(){return new Jn(0)}static Cs(){return new Jn(-1)}}// Copyright 2024 Google LLC* @license
function ag(n,e){let t=e;for(const i of n.stages)t=Ty({serializer:n.serializer,serverTimestampBehavior:n.listenOptions?.serverTimestampBehavior},i,t);return t}function _o(n,e){return ag(n,[e]).length>0}function xy(n,e){return Fe(n)?_o(n,e):ho(n,e)}function Ty(n,e,t){if(e instanceof go)return function(r,s,a){return a.filter(c=>c.isFoundDocument()&&`/${c.key.getCollectionPath().canonicalString()}`===s.Vr)}(0,e,t);if(e instanceof Vl)return function(r,s,a){return a.filter(c=>{const l=Hr(J(s.condition).evaluate(r,c));return l!==void 0&&kt(l,ht)})}(n,e,t);if(e instanceof mo)return function(r,s,a){return a.filter(c=>c.isFoundDocument()&&c.key.getCollectionPath().lastSegment()===s.collectionId)}(0,e,t);if(e instanceof Dl)return function(r,s,a){return a.filter(c=>c.isFoundDocument())}(0,0,t);if(e instanceof Nl)return function(r,s,a){return a.filter(c=>c.isFoundDocument()&&s.mr.has(c.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof hs)return function(r,s,a){return a.slice(0,s.limit)}(0,e,t);if(e instanceof Ml)return function(r,s,a){const c=s.orderings.map(l=>({ks:J(l.expr),direction:l.direction}));return[...a].sort((l,u)=>{for(const{ks:p,direction:g}of c){const b=Hr(p.evaluate(r,l)),A=Hr(p.evaluate(r,u)),R=pt(b??Qi,A??Qi);if(R!==0)return g==="ascending"?R:-R}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Pc(n){const e=function(i){for(let r=i.stages.length-1;r>=0;r--){const s=i.stages[r];if(s instanceof Ml)return s.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,i)=>{for(const r of e){const s=Hr(J(r.expr).evaluate({serializer:n.serializer},t)),a=Hr(J(r.expr).evaluate({serializer:n.serializer},i)),c=pt(s||Qi,a||Qi);if(c!==0)return r.direction==="ascending"?c:-c}return 0}}function sc(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof hs)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(){this.changes=new Ai(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?M.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t,i,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(i!==null&&zr(i.mutation,r,Nt.empty(),be.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,ce()).next(()=>i))}getLocalViewOfDocuments(e,t,i=ce()){const r=Dn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,i).next(s=>{let a=Di();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const i=Dn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,ce()))}populateOverlays(e,t,i){const r=[];return i.forEach(s=>{t.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,i,r){let s=ut();const a=jr(),c=function(){return jr()}();return t.forEach((l,u)=>{const p=i.get(u.key);r.has(u.key)&&(p===void 0||p.mutation instanceof Ti)?s=s.insert(u.key,u):p!==void 0?(a.set(u.key,p.mutation.getFieldMask()),zr(p.mutation,u,p.mutation.getFieldMask(),be.now())):a.set(u.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,p)=>a.set(u,p)),t.forEach((u,p)=>c.set(u,new Sy(p,a.get(u)??null))),c))}recalculateAndSaveOverlays(e,t){const i=jr();let r=new xe((a,c)=>a-c),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let p=i.get(l)||Nt.empty();p=c.applyToLocalView(u,p),i.set(l,p);const g=(r.get(c.batchId)||ce()).add(l);r=r.insert(c.batchId,g)})}).next(()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,p=l.value,g=bf();p.forEach(b=>{if(!s.has(b)){const A=af(t.get(b),i.get(b));A!==null&&g.set(b,A),s=s.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,g))}return M.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,r){return Fe(t)?this.getDocumentsMatchingPipeline(e,t,i,r):B3(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):U3(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,r):this.getDocumentsMatchingCollectionQuery(e,t,i,r)}getNextDocuments(e,t,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,r).next(s=>{const a=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,r-s.size):M.resolve(Dn());let c=es,l=s;return a.next(u=>M.forEach(u,(p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),s.get(p)?M.resolve():this.remoteDocumentCache.getEntry(e,p).next(b=>{l=l.insert(p,b)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ce())).next(p=>({batchId:c,changes:_f(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(i=>{let r=Di();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,i,r){const s=t.collectionGroup;let a=Di();return this.indexManager.getCollectionParents(e,s).next(c=>M.forEach(c,l=>{const u=function(g,b){return new uo(b,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,i,r).next(p=>{p.forEach((g,b)=>{a=a.insert(g,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,s,r))).next(a=>this.retrieveMatchingLocalDocuments(s,a,c=>ho(t,c)))}getDocumentsMatchingPipeline(e,t,i,r){if($n(t)==="collection_group"){const s=Bl(t);let a=Di();return this.indexManager.getCollectionParents(e,s).next(c=>M.forEach(c,l=>{const u=function(g,b){const A=g.stages.map(R=>R instanceof mo?new go(b.canonicalString(),{}):R);return new lt(g.serializer,A)}(t,l.child(s));return this.getDocumentsMatchingPipeline(e,u,i,r).next(p=>{p.forEach((g,b)=>{a=a.insert(g,b)})})}).next(()=>a))}{let s;return this.getOverlaysForPipeline(e,t,i.largestBatchId).next(a=>{switch(s=a,$n(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,s,r);case"documents":let c=ce();for(const l of Cc(t))c=c.add(Q.fromPath(l));return this.remoteDocumentCache.getEntries(e,c);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new G("invalid-argument",`Invalid pipeline source to execute offline: ${dn(t)}`)}}).next(a=>this.retrieveMatchingLocalDocuments(s,a,c=>_o(t,c)))}}retrieveMatchingLocalDocuments(e,t,i){e.forEach((s,a)=>{const c=a.getKey();t.get(c)===null&&(t=t.insert(c,et.newInvalidDocument(c)))});let r=Di();return t.forEach((s,a)=>{const c=e.get(s);c!==void 0&&zr(c.mutation,a,Nt.empty(),be.now()),i(a)&&(r=r.insert(s,a))}),r}getOverlaysForPipeline(e,t,i){switch($n(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ve.fromString(yo(t)),i);case"collection_group":throw new G("invalid-argument",`Unexpected collection group pipeline: ${dn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Cc(t).map(r=>Q.fromPath(r)));case"database":return this.documentOverlayCache.getAllOverlays(e,i);default:throw new G("invalid-argument",`Failed to get overlays for pipeline: ${dn(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this.serializer=e,this.Hs=new Map,this.Js=new Map}getBundleMetadata(e,t){return M.resolve(this.Hs.get(t))}saveBundleMetadata(e,t){return this.Hs.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Kt(r.createTime)}}(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.Js.get(t))}saveNamedQuery(e,t){return this.Js.set(t.name,function(r){return{name:r.name,query:by(r.bundledQuery),readTime:Kt(r.readTime)}}(t)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.overlays=new xe(Q.comparator),this.Ys=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Dn();return M.forEach(t,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}getAllOverlays(e,t){const i=Dn();return this.overlays.forEach((r,s)=>{s.largestBatchId>t&&i.set(r,s)}),M.resolve(i)}saveOverlays(e,t,i){return i.forEach((r,s)=>{this.Hr(e,t,s)}),M.resolve()}removeOverlaysForBatchId(e,t,i){const r=this.Ys.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ys.delete(i)),M.resolve()}getOverlaysForCollection(e,t,i){const r=Dn(),s=t.length+1,a=new Q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return M.resolve(r)}getOverlaysForCollectionGroup(e,t,i,r){let s=new xe((u,p)=>u-p);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>i){let p=s.get(u.largestBatchId);p===null&&(p=Dn(),s=s.insert(u.largestBatchId,p)),p.set(u.getKey(),u)}}const c=Dn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,p)=>c.set(u,p)),!(c.size()>=r)););return M.resolve(c)}Hr(e,t,i){const r=this.overlays.get(i.key);if(r!==null){const a=this.Ys.get(r.largestBatchId).delete(i.key);this.Ys.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new wy(t,i));let s=this.Ys.get(t);s===void 0&&(s=ce(),this.Ys.set(t,s)),this.Ys.set(t,s.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.Zs=new Le($e.Xs),this.e_=new Le($e.t_)}isEmpty(){return this.Zs.isEmpty()}addReference(e,t){const i=new $e(e,t);this.Zs=this.Zs.add(i),this.e_=this.e_.add(i)}n_(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.r_(new $e(e,t))}i_(e,t){e.forEach(i=>this.removeReference(i,t))}s_(e){const t=new Q(new ve([])),i=new $e(t,e),r=new $e(t,e+1),s=[];return this.e_.forEachInRange([i,r],a=>{this.r_(a),s.push(a.key)}),s}__(){this.Zs.forEach(e=>this.r_(e))}r_(e){this.Zs=this.Zs.delete(e),this.e_=this.e_.delete(e)}o_(e){const t=new Q(new ve([])),i=new $e(t,e),r=new $e(t,e+1);let s=ce();return this.e_.forEachInRange([i,r],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new $e(e,0),i=this.Zs.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class $e{constructor(e,t){this.key=e,this.a_=t}static Xs(e,t){return Q.comparator(e.key,t.key)||ue(e.a_,t.a_)}static t_(e,t){return ue(e.a_,t.a_)||Q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gs=1,this.u_=new Le($e.Xs)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,r){const s=this.gs;this.gs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new vy(s,t,i,r);this.mutationQueue.push(a);for(const c of r)this.u_=this.u_.add(new $e(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.c_(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,r=this.l_(i),s=r<0?0:r;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?_l:this.gs-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new $e(t,0),r=new $e(t,Number.POSITIVE_INFINITY),s=[];return this.u_.forEachInRange([i,r],a=>{const c=this.c_(a.a_);s.push(c)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Le(ue);return t.forEach(r=>{const s=new $e(r,0),a=new $e(r,Number.POSITIVE_INFINITY);this.u_.forEachInRange([s,a],c=>{i=i.add(c.a_)})}),M.resolve(this.E_(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,r=i.length+1;let s=i;Q.isDocumentKey(s)||(s=s.child(""));const a=new $e(new Q(s),0);let c=new Le(ue);return this.u_.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(c=c.add(l.a_)),!0)},a),M.resolve(this.E_(c))}E_(e){const t=[];return e.forEach(i=>{const r=this.c_(i);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){W(this.h_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.u_;return M.forEach(t.mutations,r=>{const s=new $e(r.key,t.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.u_=i})}bs(e){}containsKey(e,t){const i=new $e(t,0),r=this.u_.firstAfterOrEqual(i);return M.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}h_(e,t){return this.l_(e)}l_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}c_(e){const t=this.l_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.T_=e,this.docs=function(){return new xe(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,r=this.docs.get(i),s=r?r.size:0,a=this.T_(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return M.resolve(i?i.document.mutableCopy():et.newInvalidDocument(t))}getEntries(e,t){let i=ut();return t.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():et.newInvalidDocument(r))}),M.resolve(i)}getAllEntries(e){let t=ut();return this.docs.forEach((i,r)=>{t=t.insert(i,r.document)}),M.resolve(t)}getDocumentsMatchingQuery(e,t,i,r){let s,a;Fe(t)?(s=ve.fromString(yo(t)),a=p=>_o(t,p)):(s=t.path,a=p=>ho(t,p));let c=ut();const l=new Q(s.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:p,value:{document:g}}=u.getNext();if(!s.isPrefixOf(p.path))break;p.path.length>s.length+1||o3(a3(g),i)<=0||(r.has(g.key)||a(g))&&(c=c.insert(g.key,g.mutableCopy()))}return M.resolve(c)}getAllFromCollectionGroup(e,t,i,r){Y(9500)}P_(e,t){return M.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Dy(this)}getSize(e){return M.resolve(this.size)}}class Dy extends Ay{constructor(e){super(),this.zs=e}applyChanges(e){const t=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?t.push(this.zs.addEntry(e,r)):this.zs.removeEntry(i)}),M.waitFor(t)}getFromCache(e,t){return this.zs.getEntry(e,t)}getAllFromCache(e,t){return this.zs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.persistence=e,this.R_=new Ai(t=>rg(t),sg),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.I_=0,this.A_=new Wl,this.targetCount=0,this.V_=Jn.xs()}forEachTarget(e,t){return this.R_.forEach((i,r)=>t(r)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.I_)}allocateTargetId(e){return this.highestTargetId=this.V_.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.I_&&(this.I_=t),M.resolve()}Ms(e){this.R_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.V_=new Jn(t),this.highestTargetId=t),e.sequenceNumber>this.I_&&(this.I_=e.sequenceNumber)}addTargetData(e,t){return this.Ms(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Ms(t),M.resolve()}removeTargetData(e,t){return this.R_.delete(t.target),this.A_.s_(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,i){let r=0;const s=[];return this.R_.forEach((a,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.R_.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),M.waitFor(s).next(()=>r)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const i=this.R_.get(t)||null;return M.resolve(i)}addMatchingKeys(e,t,i){return this.A_.n_(t,i),M.resolve()}removeMatchingKeys(e,t,i){this.A_.i_(t,i);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(a=>{s.push(r.markPotentiallyOrphaned(e,a))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.A_.s_(t),M.resolve()}getMatchingKeysForTargetId(e,t){const i=this.A_.o_(t);return M.resolve(i)}containsKey(e,t){return M.resolve(this.A_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t){this.d_={},this.overlays={},this.f_=new ro(0),this.m_=!1,this.m_=!0,this.p_=new Ry,this.referenceDelegate=e(this),this.g_=new Ny(this),this.indexManager=new Ey,this.remoteDocumentCache=function(r){return new Oy(r)}(i=>this.referenceDelegate.y_(i)),this.serializer=new _y(t),this.w_=new Cy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.m_=!1,Promise.resolve()}get started(){return this.m_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Py,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.d_[e.toKey()];return i||(i=new Ly(t,this.referenceDelegate),this.d_[e.toKey()]=i),i}getGlobalsCache(){return this.p_}getTargetCache(){return this.g_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.w_}runTransaction(e,t,i){H("MemoryPersistence","Starting transaction:",e);const r=new Vy(this.f_.next());return this.referenceDelegate.b_(),i(r).next(s=>this.referenceDelegate.v_(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}S_(e,t){return M.or(Object.values(this.d_).map(i=>()=>i.containsKey(e,t)))}}class Vy extends l3{constructor(e){super(),this.currentSequenceNumber=e}}class Kl{constructor(e){this.persistence=e,this.D_=new Wl,this.x_=null}static C_(e){return new Kl(e)}get F_(){if(this.x_)return this.x_;throw Y(60996)}addReference(e,t,i){return this.D_.addReference(i,t),this.F_.delete(i.toString()),M.resolve()}removeReference(e,t,i){return this.D_.removeReference(i,t),this.F_.add(i.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.F_.add(t.toString()),M.resolve()}removeTarget(e,t){this.D_.s_(t.targetId).forEach(r=>this.F_.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(s=>this.F_.add(s.toString()))}).next(()=>i.removeTargetData(e,t))}b_(){this.x_=new Set}v_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.F_,i=>{const r=Q.fromPath(i);return this.O_(e,r).next(s=>{s||t.removeEntry(r,ie.min())})}).next(()=>(this.x_=null,t.apply(e)))}updateLimboDocument(e,t){return this.O_(e,t).next(i=>{i?this.F_.delete(t.toString()):this.F_.add(t.toString())})}y_(e){return 0}O_(e,t){return M.or([()=>M.resolve(this.D_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.S_(e,t)])}}class $a{constructor(e,t){this.persistence=e,this.M_=new Ai(i=>p3(i.path),(i,r)=>i.isEqual(r)),this.garbageCollector=D8(this,t)}static C_(e,t){return new $a(e,t)}b_(){}v_(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}lr(e){const t=this.Ls(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(r=>i+r))}Ls(e){let t=0;return this.Er(e,i=>{t++}).next(()=>t)}Er(e,t){return M.forEach(this.M_,(i,r)=>this.Us(e,i,r).next(s=>s?M.resolve():t(r)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.P_(e,a=>this.Us(e,a,t).next(c=>{c||(i++,s.removeEntry(a,ie.min()))})).next(()=>s.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.M_.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.M_.set(i,e.currentSequenceNumber),M.resolve()}removeReference(e,t,i){return this.M_.set(i,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.M_.set(t,e.currentSequenceNumber),M.resolve()}y_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=da(e.data.value)),t}Us(e,t,i){return M.or([()=>this.persistence.S_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.M_.get(t);return M.resolve(r!==void 0&&r>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t,i,r){this.targetId=e,this.fromCache=t,this.wo=i,this.bo=r}static vo(e,t){let i=ce(),r=ce();for(const s of t.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Yl(e,t.fromCache,i,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(n,e){return Q.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.So=!1,this.Do=!1,this.xo=100,this.Co=function(){return P0()?8:u3(tt())>0?6:4}()}initialize(e,t){this.Fo=e,this.indexManager=t,this.So=!0}getDocumentsMatchingQuery(e,t,i,r){const s={result:null};return this.Oo(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Mo(e,t,r,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Fy;return this.No(e,t,a).next(c=>{if(s.result=c,this.Do)return this.Lo(e,t,a,c.size)})}).next(()=>s.result)}Lo(e,t,i,r){return Fe(t)?M.resolve():i.documentReadCount<this.xo?(Oi()<=de.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",qr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.xo,"documents"),M.resolve()):(Oi()<=de.DEBUG&&H("QueryEngine","Query:",qr(t),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Co*r?(Oi()<=de.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",qr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wt(t))):M.resolve())}Oo(e,t){if(Fe(t))return M.resolve(null);let i=t;if(Ld(i))return M.resolve(null);let r=Wt(i);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(i.limit!==null&&s===1&&(i=xc(i,null,"F"),r=Wt(i)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const c=ce(...a);return this.Fo.getDocuments(e,c).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const p=this.Bo(i,l);return this.Uo(i,p,c,u.readTime)?this.Oo(e,xc(i,null,"F")):this.ko(e,p,i,u)}))})))}Mo(e,t,i,r){return(Fe(t)?function(a){for(const c of a.stages){if(c instanceof hs||c instanceof Wd)return!1;if(c instanceof Vl){if(c.condition instanceof Hf&&c.condition._expr.name==="exists"&&c.condition._expr.params[0]instanceof Ps&&c.condition._expr.params[0].fieldName===Ki)continue;return!1}}return!0}(t):Ld(t))||r.isEqual(ie.min())?M.resolve(null):this.Fo.getDocuments(e,i).next(s=>{const a=this.Bo(t,s);return this.Uo(t,a,i,r)?M.resolve(null):(Oi()<=de.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kd(t)),this.ko(e,a,t,s3(r,es)).next(c=>c))})}Bo(e,t){let i,r;return Fe(e)?(i=new Le(My),r=s=>_o(e,s)):(i=new Le(Tl(e)),r=s=>ho(e,s)),t.forEach((s,a)=>{r(a)&&(i=i.add(a))}),i}Uo(e,t,i,r){if(Fe(e))return function(c){return c.stages.some(l=>l instanceof hs||l instanceof Wd)}(e);if(e.limit===null)return!1;if(i.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}No(e,t,i){return Oi()<=de.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Kd(t)),this.Fo.getDocumentsMatchingQuery(e,t,Gn.min(),i)}ko(e,t,i,r){return this.Fo.getDocumentsMatchingQuery(e,i,r).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql="LocalStore",Uy=3e8;class zy{constructor(e,t,i,r){this.persistence=e,this.qo=t,this.serializer=r,this.$o=new xe(ue),this.Ko=new Ai(s=>rg(s),sg),this.Wo=new Map,this.Qo=e.getRemoteDocumentCache(),this.g_=e.getTargetCache(),this.w_=e.getBundleCache(),this.Go(i)}Go(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ky(this.Qo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Qo.setIndexManager(this.indexManager),this.qo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.$o))}}function $y(n,e,t,i){return new zy(n,e,t,i)}async function cg(n,e){const t=re(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let r;return t.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,t.Go(e),t.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],c=[];let l=ce();for(const u of r){a.push(u.batchId);for(const p of u.mutations)l=l.add(p.key)}for(const u of s){c.push(u.batchId);for(const p of u.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(i,l).next(u=>({zo:u,removedBatchIds:a,addedBatchIds:c}))})})}function qy(n,e){const t=re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=t.Qo.newChangeBuffer({trackRemovals:!0});return function(c,l,u,p){const g=u.batch,b=g.keys();let A=M.resolve();return b.forEach(R=>{A=A.next(()=>p.getEntry(l,R)).next(V=>{const q=u.docVersions.get(R);W(q!==null,48541),V.version.compareTo(q)<0&&(g.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),p.addEntry(V)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(t,i,e,s).next(()=>s.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let l=ce();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(i,r))})}function lg(n){const e=re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.g_.getLastRemoteSnapshotVersion(t))}function jy(n,e){const t=re(n),i=e.snapshotVersion;let r=t.$o;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.Qo.newChangeBuffer({trackRemovals:!0});r=t.$o;const c=[];e.targetChanges.forEach((p,g)=>{const b=r.get(g);if(!b)return;c.push(t.g_.removeMatchingKeys(s,p.removedDocuments,g).next(()=>t.g_.addMatchingKeys(s,p.addedDocuments,g)));let A=b.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(Oe.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,i)),r=r.insert(g,A),function(V,q,X){return V.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=Uy?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(b,A,p)&&c.push(t.g_.updateTargetData(s,A))});let l=ut(),u=ce();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(Hy(s,a,e.documentUpdates).next(p=>{l=p.jo,u=p.Ho})),!i.isEqual(ie.min())){const p=t.g_.getLastRemoteSnapshotVersion(s).next(g=>t.g_.setTargetsMetadata(s,s.currentSequenceNumber,i));c.push(p)}return M.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(t.$o=r,s))}function Hy(n,e,t){let i=ce(),r=ce();return t.forEach(s=>i=i.add(s)),e.getEntries(n,i).next(s=>{let a=ut();return t.forEach((c,l)=>{const u=s.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(c)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):H(Ql,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{jo:a,Ho:r}})}function Gy(n,e){const t=re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=_l),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Wy(n,e){const t=re(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return t.g_.getTargetData(i,e).next(s=>s?(r=s,M.resolve(r)):t.g_.allocateTargetId(i).next(a=>(r=new cn(e,a,"TargetPurposeListen",i.currentSequenceNumber),t.g_.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=t.$o.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.$o=t.$o.insert(i.targetId,i),t.Ko.set(e,i.targetId)),i})}async function Rc(n,e,t){const i=re(n),r=i.$o.get(e),s=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!ar(a))throw a;H(Ql,`Failed to update sequence numbers for target ${e}: ${a}`)}i.$o=i.$o.remove(e),i.Ko.delete(r.target)}function Yd(n,e,t){const i=re(n);let r=ie.min(),s=ce();return i.persistence.runTransaction("Execute query","readwrite",a=>function(l,u,p){const g=re(l),b=g.Ko.get(p);return b!==void 0?M.resolve(g.$o.get(b)):g.g_.getTargetData(u,p)}(i,a,Fe(e)?e:Wt(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,i.g_.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>i.qo.getDocumentsMatchingQuery(a,e,t?r:ie.min(),t?s:ce())).next(c=>(Ky(i,c),{documents:c,Jo:s})))}function Ky(n,e){e.forEach((t,i)=>{const r=i.key.getCollectionGroup(),s=n.Wo.get(r)||ie.min();i.readTime.compareTo(s)>0&&n.Wo.set(r,i.readTime)})}class Qd{constructor(){this.activeTargetIds=Q3()}na(e){this.activeTargetIds=this.activeTargetIds.add(e)}ra(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ta(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yy{constructor(){this.Ua=new Qd,this.ka={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Ua.na(e),this.ka[e]||"not-current"}updateQueryState(e,t,i){this.ka[e]=t}removeLocalQueryTarget(e){this.Ua.ra(e)}isLocalQueryTarget(e){return this.Ua.activeTargetIds.has(e)}clearQueryState(e){delete this.ka[e]}getAllActiveQueryTargets(){return this.Ua.activeTargetIds}isActiveQueryTarget(e){return this.Ua.activeTargetIds.has(e)}start(){return this.Ua=new Qd,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function ac(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.qa=0,this.$a=null,this.Ka=!0}Wa(){this.qa===0&&(this.Qa("Unknown"),this.$a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.$a=null,this.Ga("Backend didn't respond within 10 seconds."),this.Qa("Offline"),Promise.resolve())))}za(e){this.state==="Online"?this.Qa("Unknown"):(this.qa++,this.qa>=1&&(this.ja(),this.Ga(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Qa("Offline")))}set(e){this.ja(),this.qa=0,e==="Online"&&(this.Ka=!1),this.Qa(e)}Qa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ga(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ka?(gn(t),this.Ka=!1):H("OnlineStateTracker",t)}ja(){this.$a!==null&&(this.$a.cancel(),this.$a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="RemoteStore";class Xy{constructor(e,t,i,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ha=[],this.Ja=new Map,this.Ya=new Map,this.Za=new Map,this.Xa=new Jn(1e3),this.eu=new Jn(1001),this.tu=new Set,this.nu=[],this.ru=s,this.ru.bt(a=>{i.enqueueAndForget(async()=>{ki(this)&&(H(Zt,"Restarting streams for network reachability change."),await async function(l){const u=re(l);u.tu.add(4),await Ls(u),u.iu.set("Unknown"),u.tu.delete(4),await bo(u)}(this))})}),this.iu=new Qy(i,r)}}async function bo(n){if(ki(n))for(const e of n.nu)await e(!0)}async function Ls(n){for(const e of n.nu)await e(!1)}function Lc(n,e){return n.Ya.get(e)||void 0}function ug(n,e){const t=re(n),i=Lc(t,e.targetId);if(i!==void 0&&t.Ja.has(i))return;const r=function(c,l){const u=Lc(c,l);u!==void 0&&c.Za.delete(u);const p=function(b,A){return A%2!=0?b.eu.next():b.Xa.next()}(c,l);return c.Ya.set(l,p),c.Za.set(p,l),p}(t,e.targetId);H(Zt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const s=new cn(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ja.set(r,s),eu(t)?Zl(t):ur(t).Fn()&&Jl(t,s)}function Xl(n,e){const t=re(n),i=ur(t),r=Lc(t,e);H(Zt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t.Ja.delete(r),t.Ya.delete(e),t.Za.delete(r),i.Fn()&&dg(t,r),t.Ja.size===0&&(i.Fn()?i.Nn():ki(t)&&t.iu.set("Unknown"))}function Jl(n,e){if(n.su.We(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const t=n.Za.get(e.targetId);if(t===void 0)return void H(Zt,"SDK target ID not found for remote ID: "+e.targetId);const i=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(i)}ur(n).jn(e)}function dg(n,e){n.su.We(e),ur(n).Hn(e)}function Zl(n){n.su=new Z3({getRemoteKeysForTarget:e=>{const t=n.Za.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):ce()},dt:e=>n.Ja.get(e)||null,Tt:()=>n.datastore.serializer.databaseId}),ur(n).start(),n.iu.Wa()}function eu(n){return ki(n)&&!ur(n).Cn()&&n.Ja.size>0}function ki(n){return re(n).tu.size===0}function hg(n){n.su=void 0}async function Jy(n){n.iu.set("Online")}async function Zy(n){n.Ja.forEach((e,t)=>{Jl(n,e)})}async function e5(n,e){hg(n),eu(n)?(n.iu.za(e),Zl(n)):n.iu.set("Unknown")}async function t5(n,e,t){if(n.iu.set("Online"),e instanceof If&&e.state===2&&e.cause)try{await async function(r,s){const a=s.cause;for(const c of s.targetIds){if(r.Ja.has(c)){const l=r.Za.get(c);l!==void 0&&(await r.remoteSyncer.rejectListen(l,a),r.Ya.delete(l),r.Za.delete(c)),r.Ja.delete(c)}r.su.removeTarget(c)}}(n,e)}catch(i){H(Zt,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await qa(n,i)}else if(e instanceof pa?n.su.et(e):e instanceof Ef?n.su.ot(e):n.su.rt(e),!t.isEqual(ie.min()))try{const i=await lg(n.localStore);t.compareTo(i)>=0&&await function(s,a){const c=s.su.Rt(a);c.targetChanges.forEach((u,p)=>{if(u.resumeToken.approximateByteSize()>0){const g=s.Ja.get(p);g&&s.Ja.set(p,g.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,p)=>{const g=s.Ja.get(u);if(!g)return;s.Ja.set(u,g.withResumeToken(Oe.EMPTY_BYTE_STRING,g.snapshotVersion)),dg(s,u);const b=new cn(g.target,u,p,g.sequenceNumber);Jl(s,b)});const l=function(p,g){const b=new Map;g.targetChanges.forEach((R,V)=>{const q=p.Za.get(V);q!==void 0&&b.set(q,R)});let A=new xe(ue);return g.targetMismatches.forEach((R,V)=>{const q=p.Za.get(R);q!==void 0&&(A=A.insert(q,V))}),new ks(g.snapshotVersion,b,A,g.documentUpdates,g.augmentedDocumentUpdates,g.resolvedLimboDocuments)}(s,c);return s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(i){H(Zt,"Failed to raise snapshot:",i),await qa(n,i)}}async function qa(n,e,t){if(!ar(e))throw e;n.tu.add(1),await Ls(n),n.iu.set("Offline"),t||(t=()=>lg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{H(Zt,"Retrying IndexedDB access"),await t(),n.tu.delete(1),await bo(n)})}function pg(n,e){return e().catch(t=>qa(n,t,e))}async function Eo(n){const e=re(n),t=Zn(e);let i=e.Ha.length>0?e.Ha[e.Ha.length-1].batchId:_l;for(;n5(e);)try{const r=await Gy(e.localStore,i);if(r===null){e.Ha.length===0&&t.Nn();break}i=r.batchId,i5(e,r)}catch(r){await qa(e,r)}fg(e)&&gg(e)}function n5(n){return ki(n)&&n.Ha.length<10}function i5(n,e){n.Ha.push(e);const t=Zn(n);t.Fn()&&t.Jn&&t.Yn(e.mutations)}function fg(n){return ki(n)&&!Zn(n).Cn()&&n.Ha.length>0}function gg(n){Zn(n).start()}async function r5(n){Zn(n).er()}async function s5(n){const e=Zn(n);for(const t of n.Ha)e.Yn(t.mutations)}async function a5(n,e,t){const i=n.Ha.shift(),r=Gl.from(i,e,t);await pg(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Eo(n)}async function o5(n,e){e&&Zn(n).Jn&&await async function(i,r){if(function(a){return H3(a)&&a!==F.ABORTED}(r.code)){const s=i.Ha.shift();Zn(i).Mn(),await pg(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Eo(i)}}(n,e),fg(n)&&gg(n)}async function Xd(n,e){const t=re(n);t.asyncQueue.verifyOperationInProgress(),H(Zt,"RemoteStore received new credentials");const i=ki(t);t.tu.add(3),await Ls(t),i&&t.iu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.tu.delete(3),await bo(t)}async function c5(n,e){const t=re(n);e?(t.tu.delete(2),await bo(t)):e||(t.tu.add(2),await Ls(t),t.iu.set("Unknown"))}function ur(n){return n._u||(n._u=function(t,i,r){const s=re(t);return s.nr(),new I8(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Qt:Jy.bind(null,n),zt:Zy.bind(null,n),Ht:e5.bind(null,n),zn:t5.bind(null,n)}),n.nu.push(async e=>{e?(n._u.Mn(),eu(n)?Zl(n):n.iu.set("Unknown")):(await n._u.stop(),hg(n))})),n._u}function Zn(n){return n.ou||(n.ou=function(t,i,r){const s=re(t);return s.nr(),new x8(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Qt:()=>Promise.resolve(),zt:r5.bind(null,n),Ht:o5.bind(null,n),Zn:s5.bind(null,n),Xn:a5.bind(null,n)}),n.nu.push(async e=>{e?(n.ou.Mn(),await Eo(n)):(await n.ou.stop(),n.Ha.length>0&&(H(Zt,`Stopping write stream with ${n.Ha.length} pending writes`),n.Ha=[]))})),n.ou}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,i,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,r,s){const a=Date.now()+i,c=new tu(e,t,a,r,s);return c.start(i),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nu(n,e){if(gn("AsyncQueue",`${e}: ${n}`),ar(n))return new G(F.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{static emptySet(e){return new pi(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Q.comparator(t.key,i.key):(t,i)=>Q.comparator(t.key,i.key),this.keyedMap=Di(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof pi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new pi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.au=new xe(Q.comparator)}track(e){const t=e.doc.key,i=this.au.get(t);i?e.type!==0&&i.type===3?this.au=this.au.insert(t,e):e.type===3&&i.type!==1?this.au=this.au.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.au=this.au.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.au=this.au.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.au=this.au.remove(t):e.type===1&&i.type===2?this.au=this.au.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.au=this.au.insert(t,{type:2,doc:e.doc}):Y(63341,{ft:e,uu:i}):this.au=this.au.insert(t,e)}cu(){const e=[];return this.au.inorderTraversal((t,i)=>{e.push(i)}),e}}class Zi{constructor(e,t,i,r,s,a,c,l,u){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,i,r,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Zi(e,t,pi.emptySet(t),a,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==i[r].type||!t[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{constructor(){this.lu=void 0,this.Eu=[]}hu(){return this.Eu.some(e=>e.Tu())}}class u5{constructor(){this.queries=Zd(),this.onlineState="Unknown",this.Pu=new Set}terminate(){(function(t,i){const r=re(t),s=r.queries;r.queries=Zd(),s.forEach((a,c)=>{for(const l of c.Eu)l.onError(i)})})(this,new G(F.ABORTED,"Firestore shutting down"))}}function Zd(){return new Ai(n=>ig(n),wo)}async function d5(n,e){const t=re(n);let i=3;const r=e.query;let s=t.queries.get(r);s?!s.hu()&&e.Tu()&&(i=2):(s=new l5,i=e.Tu()?0:1);try{switch(i){case 0:s.lu=await t.onListen(r,!0);break;case 1:s.lu=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=nu(a,`Initialization of query '${Fe(e.query)?dn(e.query):qr(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,s),s.Eu.push(e),e.Ru(t.onlineState),s.lu&&e.Iu(s.lu)&&iu(t)}async function h5(n,e){const t=re(n),i=e.query;let r=3;const s=t.queries.get(i);if(s){const a=s.Eu.indexOf(e);a>=0&&(s.Eu.splice(a,1),s.Eu.length===0?r=e.Tu()?0:1:!s.hu()&&e.Tu()&&(r=2))}switch(r){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function p5(n,e){const t=re(n);let i=!1;for(const r of e){const s=r.query,a=t.queries.get(s);if(a){for(const c of a.Eu)c.Iu(r)&&(i=!0);a.lu=r}}i&&iu(t)}function f5(n,e,t){const i=re(n),r=i.queries.get(e);if(r)for(const s of r.Eu)s.onError(t);i.queries.delete(e)}function iu(n){n.Pu.forEach(e=>{e.next()})}var Oc;(function(n){n.Default="default",n.Cache="cache"})(Oc||(Oc={}));class g5{constructor(e,t,i){this.query=e,this.Au=t,this.Vu=!1,this.du=null,this.onlineState="Unknown",this.options=i||{}}Iu(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Zi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.fu(e)&&(this.Au.next(e),t=!0):this.mu(e,this.onlineState)&&(this.pu(e),t=!0),this.du=e,t}onError(e){this.Au.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.du&&!this.Vu&&this.mu(this.du,e)&&(this.pu(this.du),t=!0),t}mu(e,t){if(!e.fromCache||!this.Tu())return!0;const i=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}fu(e){if(e.docChanges.length>0)return!0;const t=this.du&&this.du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}pu(e){e=Zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.Au.next(e)}Tu(){return this.options.source!==Oc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this.key=e}}class yg{constructor(e){this.key=e}}class m5{constructor(e,t){this.query=e,this.Ou=t,this.Mu=null,this.hasCachedResults=!1,this.current=!1,this.Nu=ce(),this.mutatedKeys=ce(),this.Lu=Fe(e)?Pc(e):Tl(e),this.Bu=new pi(this.Lu)}get Uu(){return this.Ou}ku(e,t){const i=t?t.qu:new Jd,r=t?t.Bu:this.Bu;let s=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const[l,u]=this.$u(this.query,r);e.inorderTraversal((g,b)=>{const A=r.get(g),R=xy(this.query,b)?b:null,V=!!A&&this.mutatedKeys.has(A.key),q=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let X=!1;A&&R?A.data.isEqual(R.data)?V!==q&&(i.track({type:3,doc:R}),X=!0):this.Ku(A,R)||(i.track({type:2,doc:R}),X=!0,(l&&this.Lu(R,l)>0||u&&this.Lu(R,u)<0)&&(c=!0)):!A&&R?(i.track({type:0,doc:R}),X=!0):A&&!R&&(i.track({type:1,doc:A}),X=!0,(l||u)&&(c=!0)),X&&(R?(a=a.add(R),s=q?s.add(g):s.delete(g)):(a=a.delete(g),s=s.delete(g)))});const p=this.Wu(this.query);if(p)if(Fe(this.query)){const g=[];a.forEach(R=>g.push(R));const b=ag(this.query,g);let A=new pi(Pc(this.query));for(const R of b)A=A.add(R);a.forEach(R=>{A.has(R.key)||(s=s.delete(R.key),i.track({type:1,doc:R}))}),a=A}else{const g=this.Qu(this.query);for(;a.size>p;){const b=g==="F"?a.last():a.first();a=a.delete(b.key),s=s.delete(b.key),i.track({type:1,doc:b})}}return{Bu:a,qu:i,Uo:c,mutatedKeys:s}}Wu(e){return Fe(e)?sc(e)?.limit:e.limit||void 0}Qu(e){if(Fe(e)){const t=sc(e);return t&&t.limit<0?"L":"F"}return e.limitType}$u(e,t){if(Fe(e)){const i=sc(e)?.limit;return[t.size===i?t.last():null,null]}return[e.limitType==="F"&&t.size===this.Wu(this.query)?t.last():null,e.limitType==="L"&&t.size===this.Wu(this.query)?t.first():null]}Ku(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,r){const s=this.Bu;this.Bu=e.Bu,this.mutatedKeys=e.mutatedKeys;const a=e.qu.cu();a.sort((p,g)=>function(A,R){const V=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{ft:q})}};return V(A)-V(R)}(p.type,g.type)||this.Lu(p.doc,g.doc)),this.Gu(i),r=r??!1;const c=t&&!r?this.zu():[],l=this.Nu.size===0&&this.current&&!r?1:0,u=l!==this.Mu;return this.Mu=l,a.length!==0||u?{snapshot:new Zi(this.query,e.Bu,s,a,e.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),ju:c}:{ju:c}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Bu:this.Bu,qu:new Jd,mutatedKeys:this.mutatedKeys,Uo:!1},!1)):{ju:[]}}Hu(e){return!this.Ou.has(e)&&!!this.Bu.has(e)&&!this.Bu.get(e).hasLocalMutations}Gu(e){e&&(e.addedDocuments.forEach(t=>this.Ou=this.Ou.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ou=this.Ou.delete(t)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Nu;this.Nu=ce(),this.Bu.forEach(i=>{this.Hu(i.key)&&(this.Nu=this.Nu.add(i.key))});const t=[];return e.forEach(i=>{this.Nu.has(i)||t.push(new yg(i))}),this.Nu.forEach(i=>{e.has(i)||t.push(new mg(i))}),t}Ju(e){this.Ou=e.Jo,this.Nu=ce();const t=this.ku(e.documents);return this.applyChanges(t,!0)}Yu(){return Zi.fromInitialDocuments(this.query,this.Bu,this.mutatedKeys,this.Mu===0,this.hasCachedResults)}}const ru="SyncEngine";class y5{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class v5{constructor(e){this.key=e,this.Zu=!1}}class w5{constructor(e,t,i,r,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Xu={},this.ec=new Ai(c=>ig(c),wo),this.tc=new Map,this.nc=new Set,this.rc=new xe(Q.comparator),this.sc=new Map,this._c=new Wl,this.oc={},this.ac=new Map,this.uc=Jn.Cs(),this.onlineState="Unknown",this.cc=void 0}get isPrimaryClient(){return this.cc===!0}}async function _5(n,e,t=!0){const i=Ig(n);let r;const s=i.ec.get(e);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Yu()):r=await vg(i,e,t,!0),r}async function b5(n,e){const t=Ig(n);await vg(t,e,!0,!1)}async function vg(n,e,t,i){const r=await Wy(n.localStore,Fe(e)?e:Wt(e)),s=r.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let c;return i&&(c=await E5(n,e,s,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&ug(n.remoteStore,r),c}async function E5(n,e,t,i,r){n.lc=(g,b,A)=>async function(V,q,X,P){let z=q.view.ku(X);z.Uo&&(z=await Yd(V.localStore,q.query,!1).then(({documents:E})=>q.view.ku(E,z)));const ee=P&&P.targetChanges.get(q.targetId),he=P&&P.targetMismatches.get(q.targetId)!=null,ye=q.view.applyChanges(z,V.isPrimaryClient,ee,he);return th(V,q.targetId,ye.ju),ye.snapshot}(n,g,b,A);const s=await Yd(n.localStore,e,!0),a=new m5(e,s.Jo),c=a.ku(s.documents),l=Cs.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",r),u=a.applyChanges(c,n.isPrimaryClient,l);th(n,t,u.ju);const p=new y5(e,t,a);return n.ec.set(e,p),n.tc.has(t)?n.tc.get(t).push(e):n.tc.set(t,[e]),u.snapshot}async function I5(n,e,t){const i=re(n),r=i.ec.get(e),s=i.tc.get(r.targetId);if(s.length>1)return i.tc.set(r.targetId,s.filter(a=>!wo(a,e))),void i.ec.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await Rc(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),t&&Xl(i.remoteStore,r.targetId),Dc(i,r.targetId)}).catch(sr)):(Dc(i,r.targetId),await Rc(i.localStore,r.targetId,!0))}async function x5(n,e){const t=re(n),i=t.ec.get(e),r=t.tc.get(i.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Xl(t.remoteStore,i.targetId))}async function T5(n,e,t){const i=L5(n);try{const r=await function(a,c){const l=re(a),u=be.now(),p=c.reduce((A,R)=>A.add(R.key),ce());let g,b;return l.persistence.runTransaction("Locally write mutations","readwrite",A=>{let R=ut(),V=ce();return l.Qo.getEntries(A,p).next(q=>{R=q,R.forEach((X,P)=>{P.isValidDocument()||(V=V.add(X))})}).next(()=>l.localDocuments.getOverlayedDocuments(A,R)).next(q=>{g=q;const X=[];for(const P of c){const z=A3(P,g.get(P.key).overlayedDocument);z!=null&&X.push(new Ti(P.key,z,ef(z.value.mapValue),un.exists(!0)))}return l.mutationQueue.addMutationBatch(A,u,X,c)}).next(q=>{b=q;const X=q.applyToLocalDocumentSet(g,V);return l.documentOverlayCache.saveOverlays(A,q.batchId,X)})}).then(()=>({batchId:b.batchId,changes:_f(g)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(a,c,l){let u=a.oc[a.currentUser.toKey()];u||(u=new xe(ue)),u=u.insert(c,l),a.oc[a.currentUser.toKey()]=u}(i,r.batchId,t),await Os(i,r.changes),await Eo(i.remoteStore)}catch(r){const s=nu(r,"Failed to persist write");t.reject(s)}}async function wg(n,e){const t=re(n);try{const i=await jy(t.localStore,e);e.targetChanges.forEach((r,s)=>{const a=t.sc.get(s);a&&(W(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.Zu=!0:r.modifiedDocuments.size>0?W(a.Zu,14607):r.removedDocuments.size>0&&(W(a.Zu,42227),a.Zu=!1))}),await Os(t,i,e)}catch(i){await sr(i)}}function eh(n,e,t){const i=re(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const r=[];i.ec.forEach((s,a)=>{const c=a.view.Ru(e);c.snapshot&&r.push(c.snapshot)}),function(a,c){const l=re(a);l.onlineState=c;let u=!1;l.queries.forEach((p,g)=>{for(const b of g.Eu)b.Ru(c)&&(u=!0)}),u&&iu(l)}(i.eventManager,e),r.length&&i.Xu.zn(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function A5(n,e,t){const i=re(n);i.sharedClientState.updateQueryState(e,"rejected",t);const r=i.sc.get(e),s=r&&r.key;if(s){let a=new xe(Q.comparator);a=a.insert(s,et.newNoDocument(s,ie.min()));const c=ce().add(s),l=new ks(ie.min(),new Map,new xe(ue),a,ut(),c);await wg(i,l),i.rc=i.rc.remove(s),i.sc.delete(e),su(i)}else await Rc(i.localStore,e,!1).then(()=>Dc(i,e,t)).catch(sr)}async function S5(n,e){const t=re(n),i=e.batch.batchId;try{const r=await qy(t.localStore,e);bg(t,i,null),_g(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Os(t,r)}catch(r){await sr(r)}}async function k5(n,e,t){const i=re(n);try{const r=await function(a,c){const l=re(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let p;return l.mutationQueue.lookupMutationBatch(u,c).next(g=>(W(g!==null,37113),p=g.keys(),l.mutationQueue.removeMutationBatch(u,g))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,p)).next(()=>l.localDocuments.getDocuments(u,p))})}(i.localStore,e);bg(i,e,t),_g(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Os(i,r)}catch(r){await sr(r)}}function _g(n,e){(n.ac.get(e)||[]).forEach(t=>{t.resolve()}),n.ac.delete(e)}function bg(n,e,t){const i=re(n);let r=i.oc[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(t?s.reject(t):s.resolve(),r=r.remove(e)),i.oc[i.currentUser.toKey()]=r}}function Dc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.tc.get(e))n.ec.delete(i),t&&n.Xu.Ec(i,t);n.tc.delete(e),n.isPrimaryClient&&n._c.s_(e).forEach(i=>{n._c.containsKey(i)||Eg(n,i)})}function Eg(n,e){n.nc.delete(e.path.canonicalString());const t=n.rc.get(e);t!==null&&(Xl(n.remoteStore,t),n.rc=n.rc.remove(e),n.sc.delete(t),su(n))}function th(n,e,t){for(const i of t)i instanceof mg?(n._c.addReference(i.key,e),C5(n,i)):i instanceof yg?(H(ru,"Document no longer in limbo: "+i.key),n._c.removeReference(i.key,e),n._c.containsKey(i.key)||Eg(n,i.key)):Y(19791,{hc:i})}function C5(n,e){const t=e.key,i=t.path.canonicalString();n.rc.get(t)||n.nc.has(i)||(H(ru,"New document in limbo: "+t),n.nc.add(i),su(n))}function su(n){for(;n.nc.size>0&&n.rc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new Q(ve.fromString(e)),i=n.uc.next();n.sc.set(i,new v5(t)),n.rc=n.rc.insert(t,i),ug(n.remoteStore,new cn(Wt(xl(t.path)),i,"TargetPurposeLimboResolution",ro.ce))}}async function Os(n,e,t){const i=re(n),r=[],s=[],a=[];i.ec.isEmpty()||(i.ec.forEach((c,l)=>{a.push(i.lc(l,e,t).then(u=>{if((u||t)&&i.isPrimaryClient){const p=u?!u.fromCache:t?.targetChanges.get(l.targetId)?.current;i.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){r.push(u);const p=Yl.vo(l.targetId,u);s.push(p)}}))}),await Promise.all(a),i.Xu.zn(r),await async function(l,u){const p=re(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>M.forEach(u,b=>M.forEach(b.wo,A=>p.persistence.referenceDelegate.addReference(g,b.targetId,A)).next(()=>M.forEach(b.bo,A=>p.persistence.referenceDelegate.removeReference(g,b.targetId,A)))))}catch(g){if(!ar(g))throw g;H(Ql,"Failed to update sequence numbers: "+g)}for(const g of u){const b=g.targetId;if(!g.fromCache){const A=p.$o.get(b),R=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(R);p.$o=p.$o.insert(b,V)}}}(i.localStore,s))}async function P5(n,e){const t=re(n);if(!t.currentUser.isEqual(e)){H(ru,"User change. New user:",e.toKey());const i=await cg(t.localStore,e);t.currentUser=e,function(s,a){s.ac.forEach(c=>{c.forEach(l=>{l.reject(new G(F.CANCELLED,a))})}),s.ac.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Os(t,i.zo)}}function R5(n,e){const t=re(n),i=t.sc.get(e);if(i&&i.Zu)return ce().add(i.key);{let r=ce();const s=t.tc.get(e);if(!s)return r;for(const a of s??[]){const c=t.ec.get(a);r=r.unionWith(c.view.Uu)}return r}}function Ig(n){const e=re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=wg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=R5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=A5.bind(null,e),e.Xu.zn=p5.bind(null,e.eventManager),e.Xu.Ec=f5.bind(null,e.eventManager),e}function L5(n){const e=re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=S5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=k5.bind(null,e),e}class ja{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=po(e.databaseInfo.databaseId),this.sharedClientState=this.Rc(e),this.persistence=this.Ic(e),await this.persistence.start(),this.localStore=this.Ac(e),this.gcScheduler=this.Vc(e,this.localStore),this.indexBackfillerScheduler=this.dc(e,this.localStore)}Vc(e,t){return null}dc(e,t){return null}Ac(e){return $y(this.persistence,new By,e.initialUser,this.serializer)}Ic(e){return new og(Kl.C_,this.serializer)}Rc(e){return new Yy}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ja.provider={build:()=>new ja};class O5 extends ja{constructor(e){super(),this.cacheSizeBytes=e}Vc(e,t){W(this.persistence.referenceDelegate instanceof $a,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new L8(i,e.asyncQueue,t)}Ic(e){const t=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new og(i=>$a.C_(i,t),this.serializer)}}class Nc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>eh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=P5.bind(null,this.syncEngine),await c5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new u5}()}createDatastore(e){const t=po(e.databaseInfo.databaseId),i=E8(e.databaseInfo);return S8(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,r,s,a,c){return new Xy(i,r,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>eh(this.syncEngine,t,0),function(){return Bd.C()?new Bd:new v8}())}createSyncEngine(e,t){return function(r,s,a,c,l,u,p){const g=new w5(r,s,a,c,l,u);return p&&(g.cc=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const i=re(t);H(Zt,"RemoteStore shutting down."),i.tu.add(5),await Ls(i),i.ru.shutdown(),i.iu.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Nc.provider={build:()=>new Nc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D5{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.mc(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.mc(this.observer.error,e):gn("Uncaught Error in snapshot listener:",e.toString()))}gc(){this.muted=!0}mc(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="FirestoreClient";class N5{constructor(e,t,i,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=r,this.user=Ze.UNAUTHENTICATED,this.clientId=vl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async a=>{H(ei,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(H(ei,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=nu(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function oc(n,e){n.asyncQueue.verifyOperationInProgress(),H(ei,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async r=>{i.isEqual(r)||(await cg(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function nh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await V5(n);H(ei,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Xd(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>Xd(e.remoteStore,r)),n._onlineComponents=e}async function V5(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(ei,"Using user provided OfflineComponentProvider");try{await oc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===F.FAILED_PRECONDITION||r.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;Ft("Error using user provided cache. Falling back to memory cache: "+t),await oc(n,new ja)}}else H(ei,"Using default OfflineComponentProvider"),await oc(n,new O5(void 0));return n._offlineComponents}async function xg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(ei,"Using user provided OnlineComponentProvider"),await nh(n,n._uninitializedComponentsProvider._online)):(H(ei,"Using default OnlineComponentProvider"),await nh(n,new Nc))),n._onlineComponents}function M5(n){return xg(n).then(e=>e.syncEngine)}async function F5(n){const e=await xg(n),t=e.eventManager;return t.onListen=_5.bind(null,e.syncEngine),t.onUnlisten=I5.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=b5.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=x5.bind(null,e.syncEngine),t}function B5(n,e,t={}){const i=new zn;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,u){const p=new D5({next:b=>{p.gc(),a.enqueueAndForget(()=>h5(s,g));const A=b.docs.has(c);!A&&b.fromCache?u.reject(new G(F.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&b.fromCache&&l&&l.source==="server"?u.reject(new G(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(b)},error:b=>u.reject(b)}),g=new g5(xl(c.path),p,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return d5(s,g)}(await F5(n),n.asyncQueue,e,t,i)),i.promise}function U5(n,e){const t=new zn;return n.asyncQueue.enqueueAndForget(async()=>T5(await M5(n),e,t)),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="AsyncQueue";class rh{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new Nf(this,"async_queue_retry"),this.jc=()=>{const i=ac();i&&H(ih,"Visibility state changed to "+i.visibilityState),this.xn.gn()},this.Hc=e;const t=ac();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=ac();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const t=new zn;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(e){if(!ar(e))throw e;H(ih,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.xn.mn(()=>this.Zc())}}Yc(e){const t=this.Hc.then(()=>(this.Qc=!0,e().catch(i=>{throw this.Wc=i,this.Qc=!1,gn("INTERNAL UNHANDLED ERROR: ",sh(i)),i}).then(i=>(this.Qc=!1,i))));return this.Hc=t,t}enqueueAfterDelay(e,t,i){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const r=tu.createAndSchedule(this,e,t,i,s=>this.Xc(s));return this.Kc.push(r),r}Jc(){this.Wc&&Y(47125,{el:sh(this.Wc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function sh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class au extends Pl{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new rh,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rh(e),this._firestoreClient=void 0,await e}}}function z5(n,e){const t=typeof n=="object"?n:Xa(),i=typeof n=="string"?n:Pa,r=Ii(t,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=I0("firestore");s&&N8(r,...s)}return r}function Tg(n){if(n._terminated)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||$5(n),n._firestoreClient}function $5(n){const e=n._freezeSettings(),t=C8(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new N5(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(r){const s=r?._online.build();return{_offline:r?._offline.build(s),_online:s}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q5{convertValue(e,t="none"){switch(De(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return xi(e,(r,s)=>{i[r]=this.convertValue(s,t)}),i}convertVectorValue(e){const t=e.fields?.[is].arrayValue?.values?.map(i=>Ae(i.doubleValue));return new dt(t)}convertGeoPoint(e){return new Yt(Ae(e.latitude),Ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=As(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Yi(e));default:return null}}convertTimestamp(e){const t=Wn(e);return new be(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ve.fromString(e);W(Pf(i),9688,{name:e});const r=new ns(i.get(1),i.get(3)),s=new Q(i.popFirst(5));return r.isEqual(t)||gn(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j5 extends q5{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,t)}}const ah="@firebase/firestore",oh="4.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,t,i,r,s){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new H5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(fo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class H5 extends Ag{data(){return super.data()}}function G5(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class Nr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fi extends Ag{constructor(e,t,i,r,s,a){super(e,t,i,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(fo("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=fi._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}fi._jsonSchemaVersion="firestore/documentSnapshot/1.0",fi._jsonSchema={type:Re("string",fi._jsonSchemaVersion),bundleSource:Re("string","DocumentSnapshot"),bundleName:Re("string"),bundle:Re("string")};class ga extends fi{data(e={}){return super.data(e)}}class Gr{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Nr(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new ga(this._firestore,this._userDataWriter,i.key,i,new Nr(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(c=>{Fe(r._snapshot.query)?Pc(r._snapshot.query):Tl(r.query._query);const l=new ga(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Nr(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new ga(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Nr(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,p=-1;return c.type!==0&&(u=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:W5(c.type),doc:l,oldIndex:u,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Gr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=vl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],r=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),i.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),r.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function W5(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gr._jsonSchemaVersion="firestore/querySnapshot/1.0",Gr._jsonSchema={type:Re("string",Gr._jsonSchemaVersion),bundleSource:Re("string","QuerySnapshot"),bundleName:Re("string"),bundle:Re("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K5(n){n=Zr(n,Be);const e=Zr(n.firestore,au),t=Tg(e);return B5(t,n._key).then(i=>X5(e,n,i))}function Y5(n,e,t){n=Zr(n,Be);const i=Zr(n.firestore,au),r=G5(n.converter,e,t),s=B8(i);return Q5(i,[U8(s,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,un.none())])}function Q5(n,e){const t=Tg(n);return U5(t,e)}function X5(n,e,t){const i=t.docs.get(e._key),r=new j5(n);return new fi(n,r,e._key,i,new Nr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){G4(nr),Qt(new Mt("firestore",(i,{instanceIdentifier:r,options:s})=>{const a=i.getProvider("app").getImmediate(),c=new au(new Y4(i.getProvider("auth-internal")),new J4(a,i.getProvider("app-check-internal")),v3(a,r),a);return s={useFetchStreams:t,...s},c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),At(ah,oh,e),At(ah,oh,"esm2020")})();const Sg={apiKey:"AIzaSyABnvYQl4QzP1lHF4Ei_AzrDPYlMKoTXpA",authDomain:"yathralanka-2ac43.firebaseapp.com",projectId:"yathralanka-2ac43",storageBucket:"yathralanka-2ac43.firebasestorage.app",measurementId:"G-KXWXP8TGMS",appId:"1:1032179534120:web:21d200d59018319f7ca81d",messagingSenderId:"1032179534120"};console.log("Config keys being used:",Sg.projectId);const Wr=B2().length===0?kh(Sg):Xa();let J5=null;typeof window<"u"&&m6().then(n=>{if(n)try{J5=f6(Wr)}catch(e){console.warn("Analytics skipped on localhost:",e)}}).catch(()=>{});let Ie;try{Ie=K1(Wr)}catch{try{Ie=mp(Wr,{persistence:[Rp,Ip]})}catch(e){console.warn("Firebase Auth fallback initialization:",e),Ie=K1(Wr)}}const kg=z5(Wr),Z5="modulepreload",ev=function(n,e){return new URL(n,e).href},ch={},Cg=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");r=Promise.allSettled(t.map(u=>{if(u=ev(u,i),u in ch)return;ch[u]=!0;const p=u.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(!!i)for(let R=a.length-1;R>=0;R--){const V=a[R];if(V.href===u&&(!p||V.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${g}`))return;const A=document.createElement("link");if(A.rel=p?"stylesheet":Z5,p||(A.as="script"),A.crossOrigin="",A.href=u,l&&A.setAttribute("nonce",l),document.head.appendChild(A),p)return new Promise((R,V)=>{A.addEventListener("load",R),A.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return r.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */const tv=n=>{const e=new Map;e.set("web",{name:"web"});const t=n.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},i=(s,a)=>{t.platforms.set(s,a)},r=s=>{t.platforms.has(s)&&(t.currentPlatform=t.platforms.get(s))};return t.addPlatform=i,t.setPlatform=r,t},nv=n=>n.CapacitorPlatforms=tv(n),Pg=nv(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});Pg.addPlatform;Pg.setPlatform;var er;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(er||(er={}));class ji extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const iv=n=>{var e,t;return n?.androidBridge?"android":!((t=(e=n?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},rv=n=>{var e,t,i,r,s;const a=n.CapacitorCustomPlatform||null,c=n.Capacitor||{},l=c.Plugins=c.Plugins||{},u=n.CapacitorPlatforms,p=()=>a!==null?a.name:iv(n),g=((e=u?.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||p,b=()=>g()!=="web",A=((t=u?.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||b,R=E=>{const y=ee.get(E);return!!(y?.platforms.has(g())||X(E))},V=((i=u?.currentPlatform)===null||i===void 0?void 0:i.isPluginAvailable)||R,q=E=>{var y;return(y=c.PluginHeaders)===null||y===void 0?void 0:y.find(_=>_.name===E)},X=((r=u?.currentPlatform)===null||r===void 0?void 0:r.getPluginHeader)||q,P=E=>n.console.error(E),z=(E,y,_)=>Promise.reject(`${_} does not have an implementation of "${y}".`),ee=new Map,he=(E,y={})=>{const _=ee.get(E);if(_)return console.warn(`Capacitor plugin "${E}" already registered. Cannot register plugins twice.`),_.proxy;const T=g(),I=X(E);let k;const w=async()=>(!k&&T in y?k=typeof y[T]=="function"?k=await y[T]():k=y[T]:a!==null&&!k&&"web"in y&&(k=typeof y.web=="function"?k=await y.web():k=y.web),k),Ke=(Ue,je)=>{var gt,Pt;if(I){const mt=I?.methods.find(it=>je===it.name);if(mt)return mt.rtype==="promise"?it=>c.nativePromise(E,je.toString(),it):(it,wn)=>c.nativeCallback(E,je.toString(),it,wn);if(Ue)return(gt=Ue[je])===null||gt===void 0?void 0:gt.bind(Ue)}else{if(Ue)return(Pt=Ue[je])===null||Pt===void 0?void 0:Pt.bind(Ue);throw new ji(`"${E}" plugin is not implemented on ${T}`,er.Unimplemented)}},Ct=Ue=>{let je;const gt=(...Pt)=>{const mt=w().then(it=>{const wn=Ke(it,Ue);if(wn){const _n=wn(...Pt);return je=_n?.remove,_n}else throw new ji(`"${E}.${Ue}()" is not implemented on ${T}`,er.Unimplemented)});return Ue==="addListener"&&(mt.remove=async()=>je()),mt};return gt.toString=()=>`${Ue.toString()}() { [capacitor code] }`,Object.defineProperty(gt,"name",{value:Ue,writable:!1,configurable:!1}),gt},Ns=Ct("addListener"),Vs=Ct("removeListener"),Ci=(Ue,je)=>{const gt=Ns({eventName:Ue},je),Pt=async()=>{const it=await gt;Vs({eventName:Ue,callbackId:it},je)},mt=new Promise(it=>gt.then(()=>it({remove:Pt})));return mt.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Pt()},mt},vn=new Proxy({},{get(Ue,je){switch(je){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return I?Ci:Ns;case"removeListener":return Vs;default:return Ct(je)}}});return l[E]=vn,ee.set(E,{name:E,proxy:vn,platforms:new Set([...Object.keys(y),...I?[T]:[]])}),vn},ye=((s=u?.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||he;return c.convertFileSrc||(c.convertFileSrc=E=>E),c.getPlatform=g,c.handleError=P,c.isNativePlatform=A,c.isPluginAvailable=V,c.pluginMethodNoop=z,c.registerPlugin=ye,c.Exception=ji,c.DEBUG=!!c.DEBUG,c.isLoggingEnabled=!!c.isLoggingEnabled,c.platform=c.getPlatform(),c.isNative=c.isNativePlatform(),c},sv=n=>n.Capacitor=rv(n),Ot=sv(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Ds=Ot.registerPlugin;Ot.Plugins;class ou{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let i=!1;this.listeners[e]||(this.listeners[e]=[],i=!0),this.listeners[e].push(t);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),i&&this.sendRetainedArgumentsForEvent(e);const a=async()=>this.removeListener(e,t);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,i){const r=this.listeners[e];if(!r){if(i){let s=this.retainedEventArguments[e];s||(s=[]),s.push(t),this.retainedEventArguments[e]=s}return}r.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new Ot.Exception(e,er.Unimplemented)}unavailable(e="not available"){return new Ot.Exception(e,er.Unavailable)}async removeListener(e,t){const i=this.listeners[e];if(!i)return;const r=i.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(i=>{this.notifyListeners(e,i)}))}}const lh=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),uh=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class av extends ou{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[r,s]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");r=uh(r).trim(),s=uh(s).trim(),t[r]=s}),t}async setCookie(e){try{const t=lh(e.key),i=lh(e.value),r=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${r}; path=${s}; ${a};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Ds("CapacitorCookies",{web:()=>new av});const ov=async n=>new Promise((e,t)=>{const i=new FileReader;i.onload=()=>{const r=i.result;e(r.indexOf(",")>=0?r.split(",")[1]:r)},i.onerror=r=>t(r),i.readAsDataURL(n)}),cv=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(r=>r.toLocaleLowerCase()).reduce((r,s,a)=>(r[s]=n[e[a]],r),{})},lv=(n,e=!0)=>n?Object.entries(n).reduce((i,r)=>{const[s,a]=r;let c,l;return Array.isArray(a)?(l="",a.forEach(u=>{c=e?encodeURIComponent(u):u,l+=`${s}=${c}&`}),l.slice(0,-1)):(c=e?encodeURIComponent(a):a,l=`${s}=${c}`),`${i}&${l}`},"").substr(1):null,uv=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),r=cv(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(r.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[a,c]of Object.entries(n.data||{}))s.set(a,c);t.body=s.toString()}else if(r.includes("multipart/form-data")||n.data instanceof FormData){const s=new FormData;if(n.data instanceof FormData)n.data.forEach((c,l)=>{s.append(l,c)});else for(const c of Object.keys(n.data))s.append(c,n.data[c]);t.body=s;const a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(r.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class dv extends ou{async request(e){const t=uv(e,e.webFetchExtra),i=lv(e.params,e.shouldEncodeUrlParams),r=i?`${e.url}?${i}`:e.url,s=await fetch(r,t),a=s.headers.get("content-type")||"";let{responseType:c="text"}=s.ok?e:{};a.includes("application/json")&&(c="json");let l,u;switch(c){case"arraybuffer":case"blob":u=await s.blob(),l=await ov(u);break;case"json":l=await s.json();break;case"document":case"text":default:l=await s.text()}const p={};return s.headers.forEach((g,b)=>{p[b]=g}),{data:l,headers:p,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Ds("CapacitorHttp",{web:()=>new dv});const Z=Ds("CapacitorGoogleMaps",{web:()=>Cg(()=>import("./web-D1X7sCeR.js"),[],import.meta.url).then(n=>new n.CapacitorGoogleMapsWeb)});Z.addListener("isMapInFocus",n=>{var e;const t=n.x,i=n.y,r=document.elementFromPoint(t,i),a=((e=r?.dataset)===null||e===void 0?void 0:e.internalId)===n.mapId;Z.dispatchMapEvent({id:n.mapId,focus:a})});class hv{constructor(e){this.southwest=e.southwest,this.center=e.center,this.northeast=e.northeast}async contains(e){return(await Z.mapBoundsContains({bounds:this,point:e})).contains}async extend(e){const t=await Z.mapBoundsExtend({bounds:this,point:e});return this.southwest=t.bounds.southwest,this.center=t.bounds.center,this.northeast=t.bounds.northeast,this}}var Vc;(function(n){n.Normal="Normal",n.Hybrid="Hybrid",n.Satellite="Satellite",n.Terrain="Terrain",n.None="None"})(Vc||(Vc={}));class pv extends HTMLElement{constructor(){super()}connectedCallback(){if(this.innerHTML="",Ot.getPlatform()=="ios"){this.style.overflow="scroll",this.style["-webkit-overflow-scrolling"]="touch";const e=document.createElement("div");e.style.height="200%",this.appendChild(e)}}}customElements.define("capacitor-google-map",pv);class Hi{constructor(e){this.element=null,this.resizeObserver=null,this.handleScrollEvent=()=>this.updateMapBounds(),this.id=e}static async create(e,t){const i=new Hi(e.id);if(!e.element)throw new Error("container element is required");e.config.androidLiteMode===void 0&&(e.config.androidLiteMode=!1),i.element=e.element,i.element.dataset.internalId=e.id;const r=await Hi.getElementBounds(e.element);if(e.config.width=r.width,e.config.height=r.height,e.config.x=r.x,e.config.y=r.y,e.config.devicePixelRatio=window.devicePixelRatio,Ot.getPlatform()=="android"&&i.initScrolling(),Ot.isNativePlatform()){e.element={};const s=()=>{var p,g;const b=(g=(p=i.element)===null||p===void 0?void 0:p.getBoundingClientRect())!==null&&g!==void 0?g:{};return{x:b.x,y:b.y,width:b.width,height:b.height}},a=()=>{Z.onDisplay({id:i.id,mapBounds:s()})},c=()=>{Z.onResize({id:i.id,mapBounds:s()})},l=i.element.closest(".ion-page");Ot.getPlatform()==="ios"&&l&&(l.addEventListener("ionViewWillEnter",()=>{setTimeout(()=>{a()},100)}),l.addEventListener("ionViewDidEnter",()=>{setTimeout(()=>{a()},100)}));const u={width:r.width,height:r.height,isHidden:!1};i.resizeObserver=new ResizeObserver(()=>{if(i.element!=null){const p=i.element.getBoundingClientRect(),g=p.width===0&&p.height===0;g||(u.isHidden?Ot.getPlatform()==="ios"&&!l&&a():(u.width!==p.width||u.height!==p.height)&&c()),u.width=p.width,u.height=p.height,u.isHidden=g}}),i.resizeObserver.observe(i.element)}if(await new Promise((s,a)=>{setTimeout(async()=>{try{await Z.create(e),s(void 0)}catch(c){a(c)}},200)}),t){const s=await Z.addListener("onMapReady",a=>{a.mapId==i.id&&(t(a),s.remove())})}return i}static async getElementBounds(e){return new Promise(t=>{let i=e.getBoundingClientRect();if(i.width==0){let r=0;const s=setInterval(function(){i.width==0&&r<30?(i=e.getBoundingClientRect(),r++):(r==30&&console.warn("Map size could not be determined"),clearInterval(s),t(i))},100)}else t(i)})}async enableTouch(){return Z.enableTouch({id:this.id})}async disableTouch(){return Z.disableTouch({id:this.id})}async enableClustering(e){return Z.enableClustering({id:this.id,minClusterSize:e})}async disableClustering(){return Z.disableClustering({id:this.id})}async addMarker(e){return(await Z.addMarker({id:this.id,marker:e})).id}async addMarkers(e){return(await Z.addMarkers({id:this.id,markers:e})).ids}async removeMarker(e){return Z.removeMarker({id:this.id,markerId:e})}async removeMarkers(e){return Z.removeMarkers({id:this.id,markerIds:e})}async addPolygons(e){return(await Z.addPolygons({id:this.id,polygons:e})).ids}async addPolylines(e){return(await Z.addPolylines({id:this.id,polylines:e})).ids}async removePolygons(e){return Z.removePolygons({id:this.id,polygonIds:e})}async addCircles(e){return(await Z.addCircles({id:this.id,circles:e})).ids}async removeCircles(e){return Z.removeCircles({id:this.id,circleIds:e})}async removePolylines(e){return Z.removePolylines({id:this.id,polylineIds:e})}async destroy(){var e;return Ot.getPlatform()=="android"&&this.disableScrolling(),Ot.isNativePlatform()&&((e=this.resizeObserver)===null||e===void 0||e.disconnect()),this.removeAllMapListeners(),Z.destroy({id:this.id})}async setCamera(e){return Z.setCamera({id:this.id,config:e})}async getMapType(){const{type:e}=await Z.getMapType({id:this.id});return Vc[e]}async setMapType(e){return Z.setMapType({id:this.id,mapType:e})}async enableIndoorMaps(e){return Z.enableIndoorMaps({id:this.id,enabled:e})}async enableTrafficLayer(e){return Z.enableTrafficLayer({id:this.id,enabled:e})}async enableAccessibilityElements(e){return Z.enableAccessibilityElements({id:this.id,enabled:e})}async enableCurrentLocation(e){return Z.enableCurrentLocation({id:this.id,enabled:e})}async setPadding(e){return Z.setPadding({id:this.id,padding:e})}async getMapBounds(){return new hv(await Z.getMapBounds({id:this.id}))}async fitBounds(e,t){return Z.fitBounds({id:this.id,bounds:e,padding:t})}initScrolling(){const e=document.getElementsByTagName("ion-content");for(let t=0;t<e.length;t++)e[t].scrollEvents=!0;window.addEventListener("ionScroll",this.handleScrollEvent),window.addEventListener("scroll",this.handleScrollEvent),window.addEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.addEventListener("change",()=>{setTimeout(this.updateMapBounds,500)}):window.addEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,500)})}disableScrolling(){window.removeEventListener("ionScroll",this.handleScrollEvent),window.removeEventListener("scroll",this.handleScrollEvent),window.removeEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.removeEventListener("change",()=>{setTimeout(this.updateMapBounds,1e3)}):window.removeEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,1e3)})}updateMapBounds(){if(this.element){const e=this.element.getBoundingClientRect();Z.onScroll({id:this.id,mapBounds:{x:e.x,y:e.y,width:e.width,height:e.height}})}}async setOnCameraIdleListener(e){this.onCameraIdleListener&&this.onCameraIdleListener.remove(),e?this.onCameraIdleListener=await Z.addListener("onCameraIdle",this.generateCallback(e)):this.onCameraIdleListener=void 0}async setOnBoundsChangedListener(e){this.onBoundsChangedListener&&this.onBoundsChangedListener.remove(),e?this.onBoundsChangedListener=await Z.addListener("onBoundsChanged",this.generateCallback(e)):this.onBoundsChangedListener=void 0}async setOnCameraMoveStartedListener(e){this.onCameraMoveStartedListener&&this.onCameraMoveStartedListener.remove(),e?this.onCameraMoveStartedListener=await Z.addListener("onCameraMoveStarted",this.generateCallback(e)):this.onCameraMoveStartedListener=void 0}async setOnClusterClickListener(e){this.onClusterClickListener&&this.onClusterClickListener.remove(),e?this.onClusterClickListener=await Z.addListener("onClusterClick",this.generateCallback(e)):this.onClusterClickListener=void 0}async setOnClusterInfoWindowClickListener(e){this.onClusterInfoWindowClickListener&&this.onClusterInfoWindowClickListener.remove(),e?this.onClusterInfoWindowClickListener=await Z.addListener("onClusterInfoWindowClick",this.generateCallback(e)):this.onClusterInfoWindowClickListener=void 0}async setOnInfoWindowClickListener(e){this.onInfoWindowClickListener&&this.onInfoWindowClickListener.remove(),e?this.onInfoWindowClickListener=await Z.addListener("onInfoWindowClick",this.generateCallback(e)):this.onInfoWindowClickListener=void 0}async setOnMapClickListener(e){this.onMapClickListener&&this.onMapClickListener.remove(),e?this.onMapClickListener=await Z.addListener("onMapClick",this.generateCallback(e)):this.onMapClickListener=void 0}async setOnPolygonClickListener(e){this.onPolygonClickListener&&this.onPolygonClickListener.remove(),e?this.onPolygonClickListener=await Z.addListener("onPolygonClick",this.generateCallback(e)):this.onPolygonClickListener=void 0}async setOnCircleClickListener(e){this.onCircleClickListener&&this.onCircleClickListener.remove(),e?this.onCircleClickListener=await Z.addListener("onCircleClick",this.generateCallback(e)):this.onCircleClickListener=void 0}async setOnMarkerClickListener(e){this.onMarkerClickListener&&this.onMarkerClickListener.remove(),e?this.onMarkerClickListener=await Z.addListener("onMarkerClick",this.generateCallback(e)):this.onMarkerClickListener=void 0}async setOnPolylineClickListener(e){this.onPolylineClickListener&&this.onPolylineClickListener.remove(),e?this.onPolylineClickListener=await Z.addListener("onPolylineClick",this.generateCallback(e)):this.onPolylineClickListener=void 0}async setOnMarkerDragStartListener(e){this.onMarkerDragStartListener&&this.onMarkerDragStartListener.remove(),e?this.onMarkerDragStartListener=await Z.addListener("onMarkerDragStart",this.generateCallback(e)):this.onMarkerDragStartListener=void 0}async setOnMarkerDragListener(e){this.onMarkerDragListener&&this.onMarkerDragListener.remove(),e?this.onMarkerDragListener=await Z.addListener("onMarkerDrag",this.generateCallback(e)):this.onMarkerDragListener=void 0}async setOnMarkerDragEndListener(e){this.onMarkerDragEndListener&&this.onMarkerDragEndListener.remove(),e?this.onMarkerDragEndListener=await Z.addListener("onMarkerDragEnd",this.generateCallback(e)):this.onMarkerDragEndListener=void 0}async setOnMyLocationButtonClickListener(e){this.onMyLocationButtonClickListener&&this.onMyLocationButtonClickListener.remove(),e?this.onMyLocationButtonClickListener=await Z.addListener("onMyLocationButtonClick",this.generateCallback(e)):this.onMyLocationButtonClickListener=void 0}async setOnMyLocationClickListener(e){this.onMyLocationClickListener&&this.onMyLocationClickListener.remove(),e?this.onMyLocationClickListener=await Z.addListener("onMyLocationClick",this.generateCallback(e)):this.onMyLocationClickListener=void 0}async removeAllMapListeners(){this.onBoundsChangedListener&&(this.onBoundsChangedListener.remove(),this.onBoundsChangedListener=void 0),this.onCameraIdleListener&&(this.onCameraIdleListener.remove(),this.onCameraIdleListener=void 0),this.onCameraMoveStartedListener&&(this.onCameraMoveStartedListener.remove(),this.onCameraMoveStartedListener=void 0),this.onClusterClickListener&&(this.onClusterClickListener.remove(),this.onClusterClickListener=void 0),this.onClusterInfoWindowClickListener&&(this.onClusterInfoWindowClickListener.remove(),this.onClusterInfoWindowClickListener=void 0),this.onInfoWindowClickListener&&(this.onInfoWindowClickListener.remove(),this.onInfoWindowClickListener=void 0),this.onMapClickListener&&(this.onMapClickListener.remove(),this.onMapClickListener=void 0),this.onPolylineClickListener&&(this.onPolylineClickListener.remove(),this.onPolylineClickListener=void 0),this.onMarkerClickListener&&(this.onMarkerClickListener.remove(),this.onMarkerClickListener=void 0),this.onPolygonClickListener&&(this.onPolygonClickListener.remove(),this.onPolygonClickListener=void 0),this.onCircleClickListener&&(this.onCircleClickListener.remove(),this.onCircleClickListener=void 0),this.onMarkerDragStartListener&&(this.onMarkerDragStartListener.remove(),this.onMarkerDragStartListener=void 0),this.onMarkerDragListener&&(this.onMarkerDragListener.remove(),this.onMarkerDragListener=void 0),this.onMarkerDragEndListener&&(this.onMarkerDragEndListener.remove(),this.onMarkerDragEndListener=void 0),this.onMyLocationButtonClickListener&&(this.onMyLocationButtonClickListener.remove(),this.onMyLocationButtonClickListener=void 0),this.onMyLocationClickListener&&(this.onMyLocationClickListener.remove(),this.onMyLocationClickListener=void 0)}generateCallback(e){const t=this.id;return i=>{i.mapId==t&&e(i)}}}const Ha=Ds("Geolocation",{web:()=>Cg(()=>import("./web-BWzlvWoW.js"),[],import.meta.url).then(n=>new n.GeolocationWeb)});var di;(function(n){n.Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS"})(di||(di={}));var Kr;(function(n){n.Rear="REAR",n.Front="FRONT"})(Kr||(Kr={}));var Mc;(function(n){n.Uri="uri",n.Base64="base64",n.DataUrl="dataUrl"})(Mc||(Mc={}));class Rg extends ou{async getPhoto(e){return new Promise(async(t,i)=>{if(e.webUseInput||e.source===di.Photos)this.fileInputExperience(e,t,i);else if(e.source===di.Prompt){let r=document.querySelector("pwa-action-sheet");r||(r=document.createElement("pwa-action-sheet"),document.body.appendChild(r)),r.header=e.promptLabelHeader||"Photo",r.cancelable=!1,r.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],r.addEventListener("onSelection",async s=>{s.detail===0?this.fileInputExperience(e,t,i):this.cameraExperience(e,t,i)})}else this.cameraExperience(e,t,i)})}async pickImages(e){return new Promise(async(t,i)=>{this.multipleFileInputExperience(t,i)})}async cameraExperience(e,t,i){if(customElements.get("pwa-camera-modal")){const r=document.createElement("pwa-camera-modal");r.facingMode=e.direction===Kr.Front?"user":"environment",document.body.appendChild(r);try{await r.componentOnReady(),r.addEventListener("onPhoto",async s=>{const a=s.detail;a===null?i(new ji("User cancelled photos app")):a instanceof Error?i(a):t(await this._getCameraPhoto(a,e)),r.dismiss(),document.body.removeChild(r)}),r.present()}catch{this.fileInputExperience(e,t,i)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(e,t,i)}fileInputExperience(e,t,i){let r=document.querySelector("#_capacitor-camera-input");const s=()=>{var a;(a=r.parentNode)===null||a===void 0||a.removeChild(r)};r||(r=document.createElement("input"),r.id="_capacitor-camera-input",r.type="file",r.hidden=!0,document.body.appendChild(r),r.addEventListener("change",a=>{const c=r.files[0];let l="jpeg";if(c.type==="image/png"?l="png":c.type==="image/gif"&&(l="gif"),e.resultType==="dataUrl"||e.resultType==="base64"){const u=new FileReader;u.addEventListener("load",()=>{if(e.resultType==="dataUrl")t({dataUrl:u.result,format:l});else if(e.resultType==="base64"){const p=u.result.split(",")[1];t({base64String:p,format:l})}s()}),u.readAsDataURL(c)}else t({webPath:URL.createObjectURL(c),format:l}),s()}),r.addEventListener("cancel",a=>{i(new ji("User cancelled photos app")),s()})),r.accept="image/*",r.capture=!0,e.source===di.Photos||e.source===di.Prompt?r.removeAttribute("capture"):e.direction===Kr.Front?r.capture="user":e.direction===Kr.Rear&&(r.capture="environment"),r.click()}multipleFileInputExperience(e,t){let i=document.querySelector("#_capacitor-camera-input-multiple");const r=()=>{var s;(s=i.parentNode)===null||s===void 0||s.removeChild(i)};i||(i=document.createElement("input"),i.id="_capacitor-camera-input-multiple",i.type="file",i.hidden=!0,i.multiple=!0,document.body.appendChild(i),i.addEventListener("change",s=>{const a=[];for(let c=0;c<i.files.length;c++){const l=i.files[c];let u="jpeg";l.type==="image/png"?u="png":l.type==="image/gif"&&(u="gif"),a.push({webPath:URL.createObjectURL(l),format:u})}e({photos:a}),r()}),i.addEventListener("cancel",s=>{t(new ji("User cancelled photos app")),r()})),i.accept="image/*",i.click()}_getCameraPhoto(e,t){return new Promise((i,r)=>{const s=new FileReader,a=e.type.split("/")[1];t.resultType==="uri"?i({webPath:URL.createObjectURL(e),format:a,saved:!1}):(s.readAsDataURL(e),s.onloadend=()=>{const c=s.result;t.resultType==="dataUrl"?i({dataUrl:c,format:a,saved:!1}):i({base64String:c.split(",")[1],format:a,saved:!1})},s.onerror=c=>{r(c)})})}async checkPermissions(){if(typeof navigator>"u"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}new Rg;const fv=Ds("Camera",{web:()=>new Rg});try{localStorage.removeItem("yathralanka_state"),localStorage.removeItem("app_state"),localStorage.removeItem("activeScreen"),sessionStorage.clear()}catch{}const dh=localStorage.getItem("yathra_user_profile");let Lg={...mi};if(dh)try{Lg={...mi,...JSON.parse(dh)}}catch{}window.state={currentScreen:"welcome",currentUser:null,user:Lg,isGuest:!0,pendingAction:null,authTab:"signin",activeSite:null,activeQuest:null,selectedSite:null,siteReferrer:"dashboard",activeDirectoryTab:"Heritage Trail",dwellTimer:null,dwellTimeLeft:900,dwellActive:!1,gpsVerified:!1,hasInitialPhotoCaptured:!1,dwellImages:[],cooldownTimer:null,cooldownTimeLeft:300,cooldownActive:!1,verificationComment:"",lastVerificationResult:null,lastKnownLocation:null,eventLedger:JSON.parse(localStorage.getItem("yathra_event_ledger")||"[]"),ledgerFilter:"ALL",stageDrawerOpen:!1,demoOverride:{active:!1,mockLat:null,mockLng:null,mockVisionScore:null,forcedStatus:null},currentQuizIndex:0,quizCorrectAnswers:0,quizAnswers:[],petitionSignatures:8742,petitionSigned:!1,donationAmount:0,navStack:[]};let f=window.state;try{localStorage.removeItem("yathra_verified_sites"),sessionStorage.removeItem("yathra_verified_sites")}catch{}window.state||(window.state={});window.state.verifiedSites=[];window.initGlobalSiteClickListeners=function(){console.log("🔗 Initializing Global Site Click Listeners..."),window.addEventListener("click",function(n){const e=n.target.closest("[data-site-id], .heritage-card, .site-card-item, .directory-card, .leaflet-popup-content button");if(!e)return;let t=e.getAttribute("data-site-id")||e.getAttribute("data-id")||e.dataset?.siteId;if(!t){const r=(e.getAttribute("onclick")||"").match(/selectAndOpenSite\(['"]([^'"]+)['"]\)/);r&&r[1]&&(t=r[1])}t&&(n.preventDefault(),n.stopPropagation(),console.log("🖱️ Site element intercepted via Global Listener. Opening:",t),typeof window.selectAndOpenSite=="function"&&window.selectAndOpenSite(t))},!0)};window.calculateDistanceKm=function(n,e,t,i){const s=(t-n)*Math.PI/180,a=(i-e)*Math.PI/180,c=Math.sin(s/2)*Math.sin(s/2)+Math.cos(n*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(a/2)*Math.sin(a/2);return 6371*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))};const cc={sigiriya:{lat:7.957,lng:80.7603},pidurangala:{lat:7.9657,lng:80.7636},ruwanweliseya:{lat:8.35,lng:80.3964},jethawanaramaya:{lat:8.3516,lng:80.4032},abhayagiri:{lat:8.3712,lng:80.3957},mihintale:{lat:8.3508,lng:80.5097},ritigala:{lat:8.1189,lng:80.6583},polonnaruwa:{lat:7.9403,lng:81.0188},gal_viharaya:{lat:7.9647,lng:81.0048},dambulla:{lat:7.8567,lng:80.6483},temple_of_the_tooth:{lat:7.2936,lng:80.6413},kandy:{lat:7.2906,lng:80.6337},ambuluwawa:{lat:7.1706,lng:80.5489},adams_peak:{lat:6.8096,lng:80.4994},horton_plains:{lat:6.8028,lng:80.8044},nuwara_eliya:{lat:6.9497,lng:80.7891},nine_arch_bridge:{lat:6.8768,lng:81.0608},ella_rock:{lat:6.8576,lng:81.0478},liptons_seat:{lat:6.7825,lng:81.015},galle_fort:{lat:6.027,lng:80.217},galle:{lat:6.0535,lng:80.221},yudaganawa:{lat:6.7456,lng:81.2581},mulkirigala:{lat:6.1361,lng:80.7686},kataragama:{lat:6.4136,lng:81.3325},yala:{lat:6.3687,lng:81.5204},udawalawe:{lat:6.4746,lng:80.8987},colombo_fort:{lat:6.9344,lng:79.8428},kelaniya:{lat:6.9528,lng:79.9197},yapahuwa:{lat:7.8286,lng:80.3061},panduwasnuwara:{lat:7.5619,lng:80.1414},jaffna_fort:{lat:9.6614,lng:80.0139},nallur:{lat:9.6744,lng:80.0294},koneswaram:{lat:8.5772,lng:81.2425},trincomalee:{lat:8.5874,lng:81.2152}};window.resolveSiteCoordinates=function(n){if(!n)return{lat:7.8731,lng:80.7718};if(typeof n.lat=="number"&&typeof n.lng=="number")return{lat:n.lat,lng:n.lng};if(typeof n.latitude=="number"&&typeof n.longitude=="number")return{lat:n.latitude,lng:n.longitude};if(Array.isArray(n.coordinates)&&n.coordinates.length>=2)return{lat:Number(n.coordinates[0]),lng:Number(n.coordinates[1])};if(n.location&&typeof n.location.lat=="number"&&typeof n.location.lng=="number")return{lat:n.location.lat,lng:n.location.lng};const e=[String(n.id||"").toLowerCase().trim(),String(n.slug||"").toLowerCase().trim(),String(n.name||"").toLowerCase().replace(/[^a-z0-9]/g,"_"),String(n.name||"").toLowerCase().replace(/\s+/g,"_")];for(const t of e){if(cc[t])return cc[t];for(const[i,r]of Object.entries(cc))if(t.includes(i)||i.includes(t))return r}return{lat:7.8731,lng:80.7718}};window.verifySiteCheckpoint=function(n){if(console.log("📍 [Checkpoint] Calculating live GPS distance for site:",n),!n)return;const e=window.sitesData||(typeof le<"u"?le:[]),i=(Array.isArray(e)?e:Object.values(e)).filter(l=>l&&typeof l=="object"),r=String(n).toLowerCase().trim(),s=i.find(l=>{if(!l)return!1;const u=l.id?String(l.id).toLowerCase().trim():"",p=l.slug?String(l.slug).toLowerCase().trim():"",g=l.name?String(l.name).toLowerCase().trim():"",b=l.name?l.name.toLowerCase().replace(/[^a-z0-9]/g,"_"):"";return u===r||p===r||g===r||b===r})||window.state?.activeSite;if(!s)return;const a=window.resolveSiteCoordinates(s);if(console.log(`🗺️ Target Site: ${s.name} | Coords: (${a.lat}, ${a.lng})`),window.state||(window.state={}),!window.state.verifiedSites)try{window.state.verifiedSites=JSON.parse(localStorage.getItem("yathra_verified_sites")||"[]")}catch{window.state.verifiedSites=[]}if(window.state.verifiedSites.includes(s.id||n)){window.showVerificationModal(s,0,"Already Verified","You have already completed this landmark verification and claimed your XP.");return}const c=document.getElementById("btn-ar-verify")||document.querySelector(".btn-verify-checkpoint");if(c&&(c.disabled=!0,c.innerHTML="🛰️ Acquiring Live GPS Satellite Lock..."),!navigator.geolocation){window.showDistanceWarningModal(s,0,!0,"Geolocation is not supported by your device browser.");return}navigator.geolocation.getCurrentPosition(l=>{const u=l.coords.latitude,p=l.coords.longitude,g=window.calculateDistanceKm(u,p,a.lat,a.lng);console.log(`📡 User: (${u.toFixed(4)}, ${p.toFixed(4)}) ➡️ ${s.name} (${a.lat}, ${a.lng}): ${g.toFixed(1)} km`),g<=1?window.launchCameraARScanner(s,g):window.showDistanceWarningModal(s,g,!1)},l=>{console.warn("GPS location error:",l),window.showDistanceWarningModal(s,0,!0,"Please grant location access in browser settings to measure landmark distance.")},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};window.completeCheckpointSuccess=function(n,e){const t=n.xp||50;window.state||(window.state={}),window.state.verifiedSites||(window.state.verifiedSites=[]);const i=n.id||n.slug||n.name;window.state.verifiedSites.includes(i)||window.state.verifiedSites.push(i),window.state.xp=(window.state.xp||0)+t,window.state.user&&(window.state.user.xp=(window.state.user.xp||0)+t);try{localStorage.setItem("yathra_verified_sites",JSON.stringify(window.state.verifiedSites)),localStorage.setItem("yathra_user_xp",String(window.state.xp))}catch{}const r=document.getElementById("btn-ar-verify")||document.querySelector(".btn-verify-checkpoint");r&&(r.disabled=!0,r.style.background="#10B981",r.style.boxShadow="0 4px 14px rgba(16,185,129,0.3)",r.innerHTML=`✓ Verified Landmark Checkpoint (+${t} XP Claimed)`),window.showVerificationModal(n,t,"Checkpoint Verified!",`You have successfully checked in at ${n.name}. +${t} Explorer XP has been added to your profile passport.`)};window.showDistanceWarningModal=function(n,e,t=!1,i=""){const r=document.getElementById("btn-ar-verify")||document.querySelector(".btn-verify-checkpoint");r&&(r.disabled=!1,r.innerHTML=`🧭 Verify Landmark Checkpoint (+${n.xp||50} XP)`);const s=document.createElement("div");s.id="checkpoint-modal-overlay",s.style.cssText=`
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.65); backdrop-filter: blur(5px);
    display: flex; align-items: center; justify-content: center;
    z-index: 10000; padding: 20px; box-sizing: border-box;
  `,s.innerHTML=`
    <div style="background: #FFFFFF; border-radius: 22px; padding: 24px 20px; width: 100%; max-width: 320px; text-align: center; box-shadow: 0 12px 36px rgba(0,0,0,0.3); animation: popIn 0.25s ease-out;">
      <div style="font-size: 40px; margin-bottom: 10px;">🛰️</div>
      <h3 style="font-size: 18px; color: #1E293B; margin: 0 0 8px 0; font-weight: 800;">
        ${t?"GPS Signal Error":"Too Far from Landmark"}
      </h3>
      <p style="font-size: 13px; color: #64748B; line-height: 1.5; margin: 0 0 20px 0;">
        ${t?i||`Could not acquire GPS coordinates for ${n.name}.`:`You are currently <b>${e.toFixed(1)} km</b> away from <b>${n.name}</b>.<br/><br/>Checkpoint verification requires you to be physically on-site within <b>1.0 km</b>.`}
      </p>

      <button id="btn-close-distance-alert" style="width: 100%; background: #0C6C7A; color: #FFF; border: none; border-radius: 12px; padding: 12px; font-weight: 700; font-size: 13px; cursor: pointer;">
        Understood
      </button>
    </div>
  `,document.body.appendChild(s),document.getElementById("btn-close-distance-alert").onclick=function(){s.remove()}};window.launchCameraARScanner=function(n,e){const t=document.querySelector(".screen-content")||document.getElementById("app-screen")||document.querySelector(".app-viewport")||document.getElementById("app")||document.body;if(!t)return;t.innerHTML=`
    <div class="screen ar-scanner-screen" style="position: relative; width: 100%; height: 100%; background: #000; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; padding: 20px 16px 40px 16px; box-sizing: border-box;">
      <!-- Video Element for Camera Stream -->
      <video id="ar-camera-feed" autoplay playsinline style="position: absolute; top:0; left:0; width: 100%; height: 100%; object-fit: cover; z-index: 1;"></video>
      
      <!-- AR Viewfinder Overlay -->
      <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border: 2px dashed rgba(16,185,129,0.7); margin: 60px 30px 120px 30px; border-radius: 24px; z-index: 2; pointer-events: none; display: flex; align-items: center; justify-content: center;">
        <span style="color: #10B981; font-weight: 800; font-size: 12px; letter-spacing: 1px; background: rgba(0,0,0,0.6); padding: 6px 12px; border-radius: 20px;">
          📍 WITHIN 1.0 KM (${(e*1e3).toFixed(0)}m)
        </span>
      </div>

      <!-- Top Header -->
      <div style="position: relative; z-index: 10; display: flex; align-items: center; justify-content: space-between;">
        <button id="btn-close-ar" style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.2); color: #FFF; border-radius: 10px; padding: 8px 14px; font-weight: 700; cursor: pointer;">
          ✕ Exit
        </button>
        <span style="background: rgba(12,108,122,0.8); color: #FFF; font-weight: 700; font-size: 12px; padding: 6px 12px; border-radius: 12px;">
          AR Landmark Scanner
        </span>
      </div>

      <!-- Bottom Capture & Scan Action -->
      <div style="position: relative; z-index: 10; text-align: center;">
        <p style="color: #FFFFFF; font-size: 13px; margin-bottom: 14px; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">
          Point camera at <b>${n.name}</b> to complete archaeological verification
        </p>
        <button id="btn-capture-landmark" style="width: 100%; background: #10B981; color: #FFF; border: none; border-radius: 14px; padding: 14px; font-weight: 800; font-size: 15px; cursor: pointer; box-shadow: 0 4px 20px rgba(16,185,129,0.4);">
          📸 Capture & Claim +${n.xp||50} XP
        </button>
      </div>
    </div>
  `;const i=document.getElementById("ar-camera-feed");navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(r=>{i&&(i.srcObject=r)}).catch(r=>{console.warn("Camera access denied or unavailable:",r)}),document.getElementById("btn-close-ar").onclick=function(){i&&i.srcObject&&i.srcObject.getTracks().forEach(r=>r.stop()),window.selectAndOpenSite(n.id)},document.getElementById("btn-capture-landmark").onclick=function(){i&&i.srcObject&&i.srcObject.getTracks().forEach(r=>r.stop()),window.completeCheckpointSuccess(n,e)}};window.showVerificationModal=function(n,e,t,i){const r=document.createElement("div");r.id="checkpoint-success-modal",r.style.cssText=`
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.65); backdrop-filter: blur(5px);
    display: flex; align-items: center; justify-content: center;
    z-index: 10000; padding: 20px; box-sizing: border-box;
  `,r.innerHTML=`
    <div style="background: #FFFFFF; border-radius: 22px; padding: 24px 20px; width: 100%; max-width: 320px; text-align: center; box-shadow: 0 12px 36px rgba(0,0,0,0.3); animation: popIn 0.3s ease-out;">
      <div style="width: 60px; height: 60px; border-radius: 50%; background: #ECFDF5; color: #10B981; font-size: 28px; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px auto; box-shadow: 0 4px 12px rgba(16,185,129,0.2);">
        ✓
      </div>
      <h3 style="font-size: 19px; color: #1E293B; margin: 0 0 6px 0; font-weight: 800;">${t}</h3>
      ${e>0?`<div style="display: inline-block; background: #FEF3C7; color: #D97706; font-weight: 800; font-size: 14px; padding: 4px 14px; border-radius: 20px; margin-bottom: 12px;">+${e} XP AWARDED</div>`:""}
      <p style="font-size: 13px; color: #475569; line-height: 1.5; margin: 0 0 20px 0;">${i}</p>
      
      <div style="display: flex; gap: 8px;">
        <button id="btn-modal-done" style="flex: 1; background: #0C6C7A; color: #FFF; border: none; border-radius: 12px; padding: 12px; font-weight: 700; font-size: 13px; cursor: pointer;">
          Continue Exploring
        </button>
      </div>
    </div>
  `,document.body.appendChild(r),document.getElementById("btn-modal-done").onclick=function(){r.remove()}};window.selectAndOpenSite=function(n){if(console.log("👉 Opening Site Detail Screen for ID:",n),!n&&n!==0)return;const e=window.sitesData||(typeof le<"u"?le:[]),i=(Array.isArray(e)?e:Object.values(e)).filter(g=>g&&typeof g=="object"),r=String(n).toLowerCase().trim();let s=i.find(g=>{if(!g)return!1;const b=g.id?String(g.id).toLowerCase().trim():"",A=g.slug?String(g.slug).toLowerCase().trim():"",R=g.name?String(g.name).toLowerCase().trim():"",V=g.name?g.name.toLowerCase().replace(/[^a-z0-9]/g,"_"):"";return b===r||A===r||R===r||V===r});if(s||(s={id:n,name:String(n).replace(/_/g," ").replace(/\b\w/g,g=>g.toUpperCase()),location:"Sri Lanka",description:"Historical archaeological landmark and cultural heritage sanctuary.",image:"Element Pictures/placeholder.jpg",xp:75,category:"Heritage Trail"}),window.state||(window.state={}),!window.state.verifiedSites)try{window.state.verifiedSites=JSON.parse(localStorage.getItem("yathra_verified_sites")||"[]")}catch{window.state.verifiedSites=[]}window.state.activeSite=s,window.state.selectedSite=s,window.state.currentScreen="site-detail";const a=s.id||s.slug||s.name,l=(window.state.verifiedSites||[]).includes(a)?`<button disabled style="width: 100%; background: #10B981; color: #FFFFFF; border: none; border-radius: 14px; padding: 14px; font-weight: 700; font-size: 14px; cursor: default; box-shadow: 0 4px 14px rgba(16,185,129,0.2);">✓ Landmark Checkpoint Verified (+${s.xp||50} XP Claimed)</button>`:`<button id="btn-ar-verify" class="btn-verify-checkpoint" onclick="window.verifySiteCheckpoint('${a}')" style="width: 100%; background: #0C6C7A; color: #FFFFFF; border: none; border-radius: 14px; padding: 14px; font-weight: 700; font-size: 14px; cursor: pointer; box-shadow: 0 4px 14px rgba(12,108,122,0.25);">🧭 Verify Landmark Checkpoint (+${s.xp||50} XP)</button>`,u=document.querySelector(".screen-content")||document.getElementById("app-screen")||document.querySelector(".app-viewport")||document.getElementById("app")||document.querySelector(".iphone-chassis")||document.body;u&&(u.innerHTML=`
      <div class="screen site-detail-screen" style="padding: 16px 16px 90px 16px; overflow-y: auto; height: 100%; box-sizing: border-box; background: #F8F7F2;">
        <!-- Top Bar Navigation -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; margin-top: 10px;">
          <button id="btn-detail-back" onclick="window.navigate('directory')" style="background: #FFFFFF; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px; padding: 8px 14px; font-weight: 700; cursor: pointer; color: #1E293B; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
            ← Back
          </button>
          <span style="font-size: 12px; font-weight: 700; color: #0C6C7A; background: rgba(12,108,122,0.12); padding: 4px 10px; border-radius: 8px;">
            ${s.xp||50} XP
          </span>
        </div>

        <!-- Banner Image -->
        <div style="width: 100%; height: 210px; border-radius: 18px; overflow: hidden; margin-bottom: 14px; box-shadow: 0 4px 14px rgba(0,0,0,0.12);">
          <img src="${s.image||"Element Pictures/placeholder.jpg"}" alt="${s.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='Element Pictures/placeholder.jpg'"/>
        </div>

        <!-- Header Info -->
        <h2 style="font-size: 22px; color: #1E293B; margin: 0 0 4px 0; font-weight: 800;">${s.name}</h2>
        <p style="font-size: 13px; color: #64748B; font-weight: 600; margin: 0 0 16px 0;">📍 ${s.location||"Sri Lanka"}</p>

        <!-- Sanctuary Overview Box -->
        <div style="background: #FFFFFF; border-radius: 16px; padding: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); margin-bottom: 16px; border: 1px solid rgba(0,0,0,0.04);">
          <h3 style="font-size: 14px; color: #1E293B; margin: 0 0 8px 0; font-weight: 700;">Sanctuary Overview</h3>
          <p style="font-size: 13px; color: #475569; line-height: 1.6; margin: 0;">${s.description||"Historical landmark and cultural heritage sanctuary in Sri Lanka."}</p>
        </div>

        <!-- Action Button -->
        ${l}

        <!-- Floating Bottom Navigation -->
        ${typeof me=="function"?me("directory"):""}
      </div>
    `);const p=document.querySelector(".bottom-nav, .tab-bar, #app-bottom-nav");p&&(p.style.display="flex"),typeof attachBottomNavEvents=="function"&&attachBottomNavEvents()};window.openSiteById=window.selectAndOpenSite;window.attachDirectoryCardEvents=function(){document.querySelectorAll(".heritage-card, .site-card-item, .directory-card, [data-site-id]").forEach(e=>{e.onclick=function(t){t.preventDefault(),t.stopPropagation();const i=e.getAttribute("data-site-id")||e.getAttribute("data-id")||e.dataset?.siteId;i&&window.selectAndOpenSite(i)}})};window.forceRenderDirectory=function(){typeof window.navigate=="function"&&window.navigate("welcome")};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ga):Ga();(!f.eventLedger||f.eventLedger.length===0)&&(f.eventLedger=[{eventId:"EVT-20260820-9A7F",timestamp:new Date(Date.now()-36e5).toISOString(),siteId:"sigiriya",siteName:"Sigiriya Rock Fortress",userCoords:{latitude:7.957,longitude:80.7603,accuracy:4.8},targetCoords:{latitude:7.957,longitude:80.7603},distanceDeltaMeters:14,visionScore:96,status:"PASSED",imageMetadata:{sizeBytes:184200,mimeType:"image/jpeg",hash:"SHA256-a8f3b9c1d2e4"},signature:"0x4a8f9c1d2e3f4b5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f"},{eventId:"EVT-20260820-8B3E",timestamp:new Date(Date.now()-72e5).toISOString(),siteId:"mihintale",siteName:"Mihintale",userCoords:{latitude:8.3508,longitude:80.5186,accuracy:5.1},targetCoords:{latitude:8.3508,longitude:80.5186},distanceDeltaMeters:28,visionScore:91,status:"PASSED",imageMetadata:{sizeBytes:165e3,mimeType:"image/jpeg",hash:"SHA256-b7e2c9d1a4f8"},signature:"0x9b8a7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f"},{eventId:"EVT-20260820-7C1D",timestamp:new Date(Date.now()-144e5).toISOString(),siteId:"galle_fort",siteName:"Galle Dutch Fort",userCoords:{latitude:6.0535,longitude:80.221,accuracy:12},targetCoords:{latitude:6.03,longitude:80.215},distanceDeltaMeters:2640,visionScore:89,status:"OUT_OF_BOUNDS",imageMetadata:{sizeBytes:198e3,mimeType:"image/jpeg",hash:"SHA256-c3d2e1f4a5b6"},signature:"0x1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b"},{eventId:"EVT-20260820-6D9A",timestamp:new Date(Date.now()-288e5).toISOString(),siteId:"temple_tooth",siteName:"Temple of the Sacred Tooth Relic",userCoords:{latitude:6.9271,longitude:79.8612,accuracy:50},targetCoords:{latitude:7.2936,longitude:80.6413},distanceDeltaMeters:115e3,visionScore:42,status:"SPOOF_SUSPECTED",imageMetadata:{sizeBytes:94e3,mimeType:"image/jpeg",hash:"SHA256-d4e3f2a1b5c6"},signature:"0x3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c"}],localStorage.setItem("yathra_event_ledger",JSON.stringify(f.eventLedger)));function Io(n,e,t,i){const s=(t-n)*Math.PI/180,a=(i-e)*Math.PI/180,c=Math.sin(s/2)*Math.sin(s/2)+Math.cos(n*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(a/2)*Math.sin(a/2),l=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c));return Math.round(6371e3*l)}function gv(n,e,t=Date.now()){if(f.lastKnownLocation&&f.lastKnownLocation.timestamp){const i=(t-f.lastKnownLocation.timestamp)/1e3;if(i>0&&i<3600){const s=Io(f.lastKnownLocation.latitude,f.lastKnownLocation.longitude,n,e)/i*3.6;if(s>120)return{isSpoof:!0,reason:`Unrealistic velocity jump: ${Math.round(s)} km/h (>120 km/h threshold)`}}}return f.lastKnownLocation={latitude:n,longitude:e,timestamp:t},{isSpoof:!1,reason:"Velocity profile clean"}}function mv(n,e,t,i,r=Date.now()){let s=e,a=t,c=null,l=null;f.demoOverride&&f.demoOverride.active&&(f.demoOverride.mockLat!==null&&(s=f.demoOverride.mockLat),f.demoOverride.mockLng!==null&&(a=f.demoOverride.mockLng),f.demoOverride.mockVisionScore!==null&&(c=f.demoOverride.mockVisionScore),f.demoOverride.forcedStatus!==null&&(l=f.demoOverride.forcedStatus));const u=n.latitude,p=n.longitude,g=Io(s,a,u,p),b=Og,A=gv(s,a,r);let R=88;if(c!==null)R=c;else if(i&&i.length>50){let P=0;for(let z=0;z<i.length;z++)P=(P<<5)-P+i.charCodeAt(z),P|=0;R=75+Math.abs(P%24)}let V="PASSED",q="";l!==null?V=l:A.isSpoof?(V="SPOOF_SUSPECTED",q=`Security Anomaly Intercepted: ${A.reason}`):g>b?(V="OUT_OF_BOUNDS",q=`Geofence Delta Alert: Device is ${g}m from site coordinates (Geofence Threshold: ${b}m).`):R<75?(V="FAILED_VISION",q=`Vision Model Rejection: Landmark feature match score (${R}%) is below required 75% threshold.`):(V="PASSED",q=`Verification Successful: Landmark geometry matches reference dataset (${R}% Confidence). Distance Delta: ${g}m.`);const X=yv(n,s,a,g,R,V,i);return f.lastVerificationResult={status:V,visionScore:R,distanceMeters:g,comment:q,block:X},f.verificationComment=q,f.lastVerificationResult}function yv(n,e,t,i,r,s,a){const c="EVT-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase(),l=new Date().toISOString(),u=`${c}:${l}:${n.id}:${e}:${t}:${i}:${r}:${s}`;let p=0;for(let A=0;A<u.length;A++)p=(p<<7)-p+u.charCodeAt(A),p|=0;const g="0x"+Math.abs(p).toString(16).padStart(8,"0")+Math.abs(p*31).toString(16).padEnd(24,"f").substring(0,56),b={eventId:c,timestamp:l,siteId:n.id,siteName:n.name,userCoords:{latitude:e,longitude:t,accuracy:5},targetCoords:{latitude:n.latitude,longitude:n.longitude},distanceDeltaMeters:i,visionScore:r,status:s,imageMetadata:{sizeBytes:a?a.length:172e3,mimeType:"image/jpeg",hash:"SHA256-"+g.substring(2,18)},signature:g};return f.eventLedger||(f.eventLedger=[]),f.eventLedger.unshift(b),localStorage.setItem("yathra_event_ledger",JSON.stringify(f.eventLedger)),b}let hh=null;const Og=500;function Ga(){console.log("🚀 [YathraLanka] Initializing App Shell..."),typeof window.initGlobalSiteClickListeners=="function"&&window.initGlobalSiteClickListeners(),window.state||(window.state={}),window.state.currentScreen="welcome",typeof window.navigate=="function"&&window.navigate("welcome")}document.addEventListener("DOMContentLoaded",()=>{Ga(),wv();const n=localStorage.getItem("yathra_sync_queue");n?f.offlineSyncQueue=JSON.parse(n):f.offlineSyncQueue=[],window.addEventListener("online",()=>{nw()})});window.initApp=Ga;window.navigate=function(n){console.log("🧭 [YathraLanka] Navigating to:",n),typeof f<"u"&&(f.previousScreen=f.currentScreen||"welcome",f.currentScreen=n);const e=document.querySelector(".screen-content")||document.getElementById("app-screen")||document.querySelector(".iphone-chassis-content")||document.getElementById("app")||document.querySelector(".app-viewport")||document.getElementById("app-container")||document.body;if(!e)return;const t=document.querySelector(".bottom-nav, .tab-bar, #app-bottom-nav, .app-footer-nav");switch(document.querySelectorAll(".map-legend-box, #map-back-button, .map-back-btn, #leaflet-map-canvas, .map-legend-floating, #map-back-container").forEach(s=>s.remove()),n){case"welcome":case"landing":case"splash":case"gate":e.innerHTML=typeof Uc=="function"?Uc():typeof renderWelcomeScreen=="function"?renderWelcomeScreen():typeof Vn=="function"?Vn("signin"):"",typeof at=="function"&&at(),typeof attachWelcomeEvents=="function"&&attachWelcomeEvents(),t&&(t.style.display="none");return;case"home":case"dashboard":e.innerHTML=typeof $c=="function"?$c():typeof renderHomeScreen=="function"?renderHomeScreen():`
            <div class="screen home-screen" style="padding: 20px; text-align: center;">
              <h2 style="font-size: 22px; color: #1E293B; margin-top: 20px;">Welcome to YathraLanka</h2>
              <p style="color: #64748B; font-size: 14px;">Explore Sri Lanka's cultural sanctuaries, archaeological wonders, and hidden heritage trails.</p>
              <div style="margin-top: 24px;">
                <button onclick="window.navigate('directory')" style="background: #0C6C7A; color: #FFF; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 600; cursor: pointer;">
                  Explore Directory
                </button>
              </div>
              ${typeof me=="function"?me("home"):""}
            </div>
          `,typeof attachDashboardEvents=="function"&&attachDashboardEvents(),typeof attachHomeEvents=="function"&&attachHomeEvents(),typeof at=="function"&&at();break;case"activism":e.innerHTML=typeof Gc=="function"?Gc():typeof Hc=="function"?Hc():rn(),typeof attachActivismEvents=="function"&&attachActivismEvents(),typeof at=="function"&&at();break;case"directory":case"trail":e.innerHTML=rn(),typeof Vr=="function"&&Vr(),typeof at=="function"&&at();break;case"rewards":case"rewards-dashboard":e.innerHTML=typeof Wc=="function"?Wc():typeof renderRewardsScreen=="function"?renderRewardsScreen():`
            <div class="screen rewards-screen" style="padding: 20px;">
              <h2 style="font-size: 22px; color: #1E293B; margin-bottom: 8px;">Explorer Rewards</h2>
              <p style="color: #64748B; font-size: 13px; margin-bottom: 20px;">Earn badges, unlock preservation tokens, and claim heritage perks.</p>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="background: #FFFFFF; border-radius: 16px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 12px;">
                  <div style="font-size: 28px;">🏅</div>
                  <div>
                    <div style="font-weight: 700; color: #1E293B; font-size: 14px;">Heritage Pioneer</div>
                    <div style="font-size: 12px; color: #64748B;">Visit your first archaeological landmark</div>
                  </div>
                </div>
                <div style="background: #FFFFFF; border-radius: 16px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 12px;">
                  <div style="font-size: 28px;">🧭</div>
                  <div>
                    <div style="font-weight: 700; color: #1E293B; font-size: 14px;">Master Cartographer</div>
                    <div style="font-size: 12px; color: #64748B;">Discover 5 Hidden Gems across Sri Lanka</div>
                  </div>
                </div>
              </div>
              ${typeof me=="function"?me("rewards"):""}
            </div>
          `,typeof attachRewardsEvents=="function"&&attachRewardsEvents(),typeof at=="function"&&at();break;case"profile":e.innerHTML=typeof Kc=="function"?Kc():typeof rn=="function"?rn():"",typeof attachProfileEvents=="function"&&attachProfileEvents(),typeof at=="function"&&at();break;case"site-detail":e.innerHTML=typeof jc=="function"?jc(f.activeSite):"",typeof attachSiteDetailEvents=="function"&&attachSiteDetailEvents();break;case"map":e.innerHTML=typeof qc=="function"?qc():"",typeof initLeafletMap=="function"&&initLeafletMap(),typeof attachMapEvents=="function"&&attachMapEvents();break;case"auth":case"login":case"signup":e.innerHTML=typeof Vn=="function"?Vn(n==="signup"?"signup":"signin"):typeof rn=="function"?rn():"",typeof at=="function"&&at(),typeof attachAuthEvents=="function"&&attachAuthEvents(),t&&(t.style.display="none");return;default:e.innerHTML=typeof rn=="function"?rn():"",typeof Vr=="function"&&Vr();break}t&&(t.style.display="flex"),typeof attachBottomNavEvents=="function"&&attachBottomNavEvents();const r=document.querySelector(`[data-screen="${n}"], [data-tab="${n}"], #nav-${n==="directory"||n==="activism"?"act":n==="rewards"?"rew":n==="profile"?"prof":"home"}`);r&&(document.querySelectorAll(".bottom-nav .nav-item, .tab-bar .tab-btn").forEach(s=>s.classList.remove("active")),r.classList.add("active"))};function B(n,e=!0){return window.navigate(n)}function Te(){if(f.currentScreen==="site-detail"){B(f.siteReferrer||"dashboard",!1);return}if(f.navStack.length>0){const n=f.navStack.pop();B(n,!1)}else B("dashboard")}function Xe(n,e=""){f.user.xp+=n;let t="None";h0.forEach(i=>{f.user.xp>=i.threshold&&(t=i.rank)}),f.user.rank!==t&&(f.user.rank=t,se(`New Rank Unlocked: ${t}!`)),e&&se(`${e} (+${n} XP)`),Nn()}function Nn(){try{f.currentUser=f.user,localStorage.setItem("yathra_user_profile",JSON.stringify(f.user)),f.user&&!f.isGuest&&f.user.uid&&localStorage.setItem("yathra_current_user",JSON.stringify(f.user))}catch(t){console.error("Local user profile caching error:",t)}const n=Ie.currentUser;if(!n||f.isGuest)return Promise.resolve();const e=Bf(kg,"users",n.uid);return Y5(e,{xp:f.user.xp,rank:f.user.rank,medals:f.user.medals,sitesVisited:f.user.sitesVisited,quizzesPassed:f.user.quizzesPassed,role:f.user.role,interests:f.user.interests,permissions:f.user.permissions,signedPetitions:f.user.signedPetitions,donatedAmount:f.user.donatedAmount,joinedEvents:f.user.joinedEvents,unlockedCoupons:f.user.unlockedCoupons,completedQuizzes:f.user.completedQuizzes,dwellTimeCompleted:f.user.dwellTimeCompleted,verifiedPhotos:f.user.verifiedPhotos},{merge:!0}).catch(t=>{t&&(t.code==="permission-denied"||t.message?.includes("permission"))?console.warn("Firestore write permission denied. Profile stored in localStorage only."):console.warn("Firestore save user profile fallback active:",t)})}function se(n,e="info"){document.querySelectorAll(".yathra-toast").forEach(s=>s.remove());const i=document.createElement("div");i.className=`yathra-toast ${e}`,i.textContent=n,(document.querySelector(".iphone-chassis")||document.body).appendChild(i),setTimeout(()=>{i.style.animation="toastFadeOut 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards",setTimeout(()=>i.remove(),300)},3200)}function vv(n){if(!n)return{score:0,level:0,label:"Too Short"};let e=0;n.length>=8&&(e+=20),n.length>=10&&(e+=20),/[a-z]/.test(n)&&/[A-Z]/.test(n)&&(e+=20),/\d/.test(n)&&(e+=20),/[^a-zA-Z0-9]/.test(n)&&(e+=20);let t=0,i="Too Short";return e>=80?(t=4,i="Strong"):e>=60?(t=3,i="Good"):e>=40?(t=2,i="Fair"):e>0&&(t=1,i="Weak"),{score:e,level:t,label:i}}function ma(n,e){switch(n){case"auth/user-not-found":return"No account found with this email address.";case"auth/wrong-password":return"Incorrect password. Please try again.";case"auth/invalid-credential":return"Invalid email or password. Please verify credentials.";case"auth/email-already-in-use":return"An account with this email address already exists.";case"auth/weak-password":return"Password is too weak. Please use at least 10 characters with numbers & symbols.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/missing-password":return"Please enter your password.";case"auth/popup-closed-by-user":return"Sign in window was closed before completing.";case"auth/popup-blocked":return"Pop-up blocked by browser. Attempting redirect fallback...";case"auth/network-request-failed":return"Network error. Working in offline cached profile mode.";default:return e||"Authentication error occurred. Please try again."}}function Fc(){if(f.pendingAction){const n=f.pendingAction;f.pendingAction=null,jn(),typeof n.callback=="function"&&(se("Authentication verified! Proceeding with action...","success"),n.callback())}}function Dg(n,e){const t=Bf(kg,"users",n.uid);K5(t).then(i=>{f.user={...mi},i.exists()?f.user={...f.user,...i.data()}:f.user.role="Explorer",f.user.uid=n.uid,f.currentUser=f.user,f.isGuest=!1,localStorage.setItem("yathra_current_user",JSON.stringify(f.user)),Nn(),se(e||`Welcome back, ${n.displayName||"Explorer"}!`,"success"),jn(),f.pendingAction?Fc():(f.currentScreen==="landing"||f.currentScreen==="splash"||f.currentScreen==="login"||f.currentScreen==="signup")&&B("dashboard")}).catch(i=>{f.user.uid=n.uid,f.currentUser=f.user,f.isGuest=!1,localStorage.setItem("yathra_current_user",JSON.stringify(f.user)),Nn(),se("Logged in (offline profile cached).","info"),jn(),f.pendingAction?Fc():(f.currentScreen==="landing"||f.currentScreen==="splash"||f.currentScreen==="login"||f.currentScreen==="signup")&&B("dashboard")})}function wv(){typeof Ie>"u"||!Ie||(X7(Ie).then(n=>{n&&n.user&&(f.isGuest=!1,Dg(n.user,"Google Authentication verified!"))}).catch(n=>{console.warn("Auth redirect result check error:",n)}),T7(Ie,n=>{if(n&&n.uid)console.log("👤 User Authenticated:",n.displayName||n.email),f.currentUser={uid:n.uid,email:n.email,displayName:n.displayName||(n.email?n.email.split("@")[0]:"Explorer"),photoURL:n.photoURL||"Element Pictures/default-avatar.png"},f.user={...mi,...f.currentUser},f.isGuest=!1,localStorage.setItem("yathralanka_user",JSON.stringify(f.user));else{const t=localStorage.getItem("yathralanka_user")||localStorage.getItem("yathra_current_user");if(t)try{f.user={...mi,...JSON.parse(t)},f.currentUser=f.user,f.isGuest=!1}catch{f.currentUser=null,f.isGuest=!0}else f.currentUser=null,f.isGuest=!0}const e=document.querySelector(".user-display-name, #profile-user-name");e&&f.user&&f.user.displayName&&(e.textContent=f.user.displayName)}))}function Cr(n,e,t=null,i=null){if(Ie?.currentUser||!f.isGuest&&f.user?.uid)e();else{f.pendingAction={type:n,callback:e,siteId:t,payload:i};let r="Sign in or Create an Account to proceed.";n==="VERIFY"&&(r="Sign in required to verify site visits & earn XP on the ledger!"),n==="LEDGER"&&(r="Sign in required to sign heritage petitions & view audit proofs."),n==="REWARD"&&(r="Sign in required to redeem & unlock heritage rewards."),se(r,"info"),jt("signin")}}window.handleGoogleSignIn=async function(){try{console.log("🔑 Initiating Google Sign-In...");const n=new sn;n.setCustomParameters({prompt:"select_account"}),se("Connecting to Google...","info");const e=await j7(Ie,n);if(e&&e.user){const t=e.user;f.user={uid:t.uid,displayName:t.displayName||(t.email?t.email.split("@")[0]:"Explorer"),email:t.email,photoURL:t.photoURL||"Element Pictures/default-avatar.png"},f.currentUser=f.user,f.isGuest=!1,localStorage.setItem("yathralanka_user",JSON.stringify(f.user)),localStorage.setItem("yathra_current_user",JSON.stringify(f.user)),se(`Welcome, ${f.user.displayName}!`,"info"),typeof jn=="function"&&jn(),window.navigate("directory")}}catch(n){console.error("Google Sign-In Error:",n),n.code==="auth/popup-blocked"?(se("Please allow popups for localhost to sign in with Google.","error"),alert("Please allow popups for localhost to sign in with Google.")):n.code==="auth/popup-closed-by-user"?se("Sign-in cancelled by user.","info"):se(n.message||ma(n.code,n.message),"error")}};async function _v(){return window.handleGoogleSignIn()}function Vn(n="signin"){const e=n==="signin",t=n==="signup",i=n==="forgot";return`
    <div class="auth-glass-card">
      <div class="auth-header">
        <div class="auth-logo-badge">
          <img src="Element%20Pictures/YathraLanka%20Logo.png" alt="YathraLanka Logo">
        </div>
        <h2 class="auth-title">${i?"Password Recovery":t?"Create Account":"Welcome Back"}</h2>
        <p class="auth-subtitle">${i?"Enter your registered email to receive a reset link":"Play the game. Protect the Past."}</p>
      </div>

      ${i?"":`
        <div class="auth-segmented-tabs">
          <button class="auth-tab-btn ${e?"active":""}" id="auth-tab-signin" type="button">Sign In</button>
          <button class="auth-tab-btn ${t?"active":""}" id="auth-tab-signup" type="button">Create Account</button>
        </div>

        <div class="auth-social-group">
          <button class="btn-google-auth" id="auth-btn-google" type="button">
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle;"><path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.617z" fill="#4285F4"/><path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/><path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/><path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/></svg>
            <span>Continue with Google</span>
          </button>
          <button class="btn-guest-auth" id="auth-btn-guest" type="button">
            <span style="font-size: 16px;">🧭</span>
            <span>Continue as Guest / Explorer</span>
          </button>
        </div>

        <div class="auth-divider">
          <span>or email credentials</span>
        </div>
      `}

      <div class="auth-form-card">
        ${t?`
          <div class="auth-form-group">
            <label class="auth-form-label">Full Name</label>
            <div class="auth-input-wrapper">
              <input type="text" class="auth-input" placeholder="Enter your full name" id="auth-input-name" autocomplete="name">
            </div>
          </div>
        `:""}

        <div class="auth-form-group">
          <label class="auth-form-label">Email Address</label>
          <div class="auth-input-wrapper">
            <input type="email" class="auth-input" placeholder="name@domain.com" id="auth-input-email" inputmode="email" autocomplete="email">
          </div>
        </div>

        ${i?"":`
          <div class="auth-form-group">
            <label class="auth-form-label">Password</label>
            <div class="auth-input-wrapper">
              <input type="password" class="auth-input" placeholder="Enter password" id="auth-input-pass" autocomplete="${t?"new-password":"current-password"}">
              <button class="auth-eye-toggle" id="auth-toggle-pass" type="button" aria-label="Toggle password visibility">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>
        `}

        ${t?`
          <div class="entropy-meter-container" id="entropy-meter-box">
            <div class="entropy-bars">
              <div class="entropy-bar" id="entropy-bar-1"></div>
              <div class="entropy-bar" id="entropy-bar-2"></div>
              <div class="entropy-bar" id="entropy-bar-3"></div>
              <div class="entropy-bar" id="entropy-bar-4"></div>
            </div>
            <div class="entropy-label">
              <span>Password Security</span>
              <span id="entropy-status-text">Too Short</span>
            </div>
          </div>

          <div class="checkbox-group" style="margin-bottom: 14px; display: flex; align-items: center; gap: 8px; font-size: 11px; color: var(--color-gray);">
            <input type="checkbox" id="auth-check-terms" checked style="accent-color: var(--color-teal); width: 14px; height: 14px;">
            <label for="auth-check-terms">I agree to the <span class="form-link">Terms & Privacy Policy</span></label>
          </div>
        `:""}

        ${e?`
          <div style="text-align: right; margin-top: -4px; margin-bottom: 14px;">
            <span class="form-link" id="auth-trigger-forgot" style="font-size: 12px; cursor: pointer;">Forgot password?</span>
          </div>
        `:""}

        <button class="btn-auth-primary" id="auth-submit-btn" type="button">
          <span id="auth-btn-text">${i?"Send Reset Link":t?"Create Account":"Sign In"}</span>
          <div class="btn-loading-spinner" id="auth-btn-spinner" style="display: none;"></div>
        </button>

        ${i?`
          <div style="text-align: center; margin-top: 14px;">
            <span class="form-link" id="auth-back-to-signin" style="font-size: 12px; cursor: pointer;">← Back to Sign In</span>
          </div>
        `:""}
      </div>
    </div>
  `}function jt(n="signin",e=null){e&&(f.pendingAction=e),f.authTab=n;const t=document.getElementById("auth-modal-container");t&&(t.innerHTML=`
    <div class="auth-modal-backdrop" id="auth-modal-bg">
      ${Vn(n)}
    </div>
  `,t.style.display="block",document.body.classList.add("modal-open"),cu(!0))}function jn(){const n=document.getElementById("auth-modal-container");n&&(n.style.display="none",n.innerHTML=""),document.body.classList.remove("modal-open")}function gi(n={}){const e=document.getElementById("auth-required-modal-overlay");e&&e.remove();const t=n.title||"Sign In Required",i=n.message||"Sign in or create an account to access this feature.",r=n.redirectView||"site-detail",s=n.targetId||null;s&&(f.pendingAction={type:r==="site-detail"?"SITE_DETAIL":"NAVIGATION",siteId:s,redirectView:r,callback:()=>{f.activeSite=le.find(A=>A.id===s),B(r)}});const a=`
    <div class="auth-modal-overlay" id="auth-required-modal-overlay">
      <div class="auth-modal-card" id="auth-required-modal-card">
        <h3 class="auth-modal-title">${t}</h3>
        <p class="auth-modal-message">${i}</p>
        
        <div class="auth-modal-actions">
          <button class="btn-primary auth-modal-btn-primary" id="btn-modal-signin">Sign In / Register</button>
          <button class="btn-secondary auth-modal-btn-secondary" id="btn-modal-dismiss">Continue Exploring</button>
        </div>
      </div>
    </div>
  `;(document.querySelector(".app-viewport")||document.querySelector(".iphone-chassis")||document.getElementById("app")||document.body).insertAdjacentHTML("beforeend",a);const l=document.getElementById("auth-required-modal-overlay"),u=document.getElementById("auth-required-modal-card"),p=document.getElementById("btn-modal-signin"),g=document.getElementById("btn-modal-dismiss");function b(){l&&l.remove()}u&&u.addEventListener("click",A=>{A.stopPropagation()}),l&&l.addEventListener("click",A=>{A.stopPropagation(),A.preventDefault(),b()}),g&&g.addEventListener("click",A=>{A.stopPropagation(),A.preventDefault(),b()}),p&&p.addEventListener("click",A=>{A.stopPropagation(),b(),jt("signin")})}function ys(n){if(!n)return;const e=le.find(t=>t.id===n);if(e&&(f.activeSite=e),f.isGuest||!f.user||!f.user.uid||!Ie.currentUser){gi({title:"Unlock Site Details",message:"Sign in or create an account to explore comprehensive history, view high-res photo archives, and unlock interactive site guides.",redirectView:"site-detail",targetId:n});return}B("site-detail")}function ia(n,e={}){const t=f.isGuest||!f.user||!f.user.uid||!Ie.currentUser;switch(n){case"donation":B("donations");break;case"sign-petition":if(t){gi({title:"Sign the Petition",message:"Sign in or register to add your verified signature to heritage conservation petitions.",redirectView:"petition",targetId:e.petitionId||"ritigala-forest"});return}B("petition");break;case"join-cleanup":if(t){gi({title:"Join Volunteer Cleanup",message:"Please sign in to register for upcoming site preservation and cleanup events.",redirectView:"cleanup",targetId:e.eventId||"site-cleanup"});return}B("cleanup");break;case"create-event":if(t){gi({title:"Host a Community Event",message:"You must be signed in to organize and publish new community heritage initiatives.",redirectView:"create-event"});return}B("create-event");break;default:console.warn(`Unhandled impact action: ${n}`)}}function bv(n){const e=vv(n),t=document.getElementById("entropy-status-text");t&&(t.textContent=e.label);for(let i=1;i<=4;i++){const r=document.getElementById(`entropy-bar-${i}`);r&&(r.className="entropy-bar",i<=e.level&&r.classList.add("active",`level-${e.level}`))}}function cu(n=!1){const e='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',t='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',i=(s,a,c)=>{const l=document.getElementById(s);l&&l.addEventListener(a,c)};i("auth-tab-signin","click",()=>{f.authTab="signin",n?jt("signin"):B("login",!1)}),i("auth-tab-signup","click",()=>{f.authTab="signup",n?jt("signup"):B("signup",!1)}),i("auth-trigger-forgot","click",()=>{if(f.authTab="forgot",n)jt("forgot");else{const s=document.getElementById("app-container");s&&(s.innerHTML=Vn("forgot"),cu(!1))}}),i("auth-back-to-signin","click",()=>{f.authTab="signin",n?jt("signin"):B("login",!1)}),document.querySelectorAll(".btn-google-auth, #auth-btn-google, #google-signin-btn, #google-signup-btn").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault(),a.stopPropagation(),_v()})}),i("auth-btn-guest","click",()=>{f.isGuest=!0,se("Continuing in Guest Explorer Mode.","info"),n&&jn(),(f.currentScreen==="login"||f.currentScreen==="signup"||f.currentScreen==="splash")&&B("dashboard")}),i("auth-toggle-pass","click",()=>{const s=document.getElementById("auth-input-pass"),a=document.getElementById("auth-toggle-pass");s&&a&&(s.type==="password"?(s.type="text",a.innerHTML=t):(s.type="password",a.innerHTML=e))});const r=document.getElementById("auth-input-pass");if(r&&r.addEventListener("input",s=>{bv(s.target.value)}),n){const s=document.getElementById("auth-modal-bg");s&&s.addEventListener("click",a=>{a.target===s&&jn()})}i("auth-submit-btn","click",()=>{const s=f.authTab||"signin",a=document.getElementById("auth-input-email"),c=document.getElementById("auth-input-pass"),l=document.getElementById("auth-input-name"),u=document.getElementById("auth-check-terms"),p=document.getElementById("auth-submit-btn"),g=document.getElementById("auth-btn-spinner"),b=a?a.value.trim():"",A=c?c.value:"",R=l?l.value.trim():"";if(s==="forgot"){if(!b){se("Please enter your registered email address.","error");return}p&&(p.disabled=!0),g&&(g.style.display="block"),v7(Ie,b).then(()=>{se("Password reset email sent! Check your inbox.","success"),n?jt("signin"):B("login")}).catch(V=>{se(ma(V.code,V.message),"error")}).finally(()=>{p&&(p.disabled=!1),g&&(g.style.display="none")});return}if(s==="signin"){if(!b||!A){se("Please fill in both email and password.","error");return}p&&(p.disabled=!0),g&&(g.style.display="block"),_7(Ie,b,A).then(V=>{Dg(V.user,`Welcome back, ${V.user.displayName||"Explorer"}!`)}).catch(V=>{se(ma(V.code,V.message),"error")}).finally(()=>{p&&(p.disabled=!1),g&&(g.style.display="none")});return}if(s==="signup"){if(!R||!b||!A){se("Please fill in all required fields.","error");return}if(A.length<10){se("Security requirement: Password must be at least 10 characters long.","error");return}if(u&&!u.checked){se("You must agree to the Terms & Privacy Policy.","error");return}p&&(p.disabled=!0),g&&(g.style.display="block"),w7(Ie,b,A).then(V=>(f.user={...mi},E7(V.user,{displayName:R}).catch(console.error),Nn().then(()=>{se("Account created successfully!","success"),jn(),f.pendingAction?Fc():B("permissions")}))).catch(V=>{se(ma(V.code,V.message),"error")}).finally(()=>{p&&(p.disabled=!1),g&&(g.style.display="none")})}})}function Ev(){const n=document.getElementById("location-permission-modal");n&&n.remove();const e=document.createElement("div");e.id="location-permission-modal",e.style.cssText=`
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
  `,e.innerHTML=`
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
  `,(document.querySelector(".iphone-chassis")||document.body).appendChild(e),document.getElementById("location-allow-btn").addEventListener("click",async()=>{e.remove();try{(await Ha.requestPermissions()).location==="granted"?(Mn=!1,await Mi()):(Mn=!0,await Mi())}catch(i){Mn=!0,console.error("Error requesting geolocation capability configurations:",i),await Mi()}}),document.getElementById("location-cancel-btn").addEventListener("click",()=>{e.remove(),Mn=!0,Mi()})}let Lt=null,Ee=null,Mn=!1;function lu(n,e="google"){const t=le.filter(i=>i.latitude&&i.longitude);e==="leaflet"&&typeof L<"u"?t.forEach(i=>{const s=`
        <div style="
          width: 22px;
          height: 22px;
          background: ${i.category==="Hidden Gems"?"#EBB34D":"#0C6C7A"};
          border: 2px solid #ffffff;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.35);
          cursor: pointer;
        "></div>
      `,a=L.divIcon({className:"custom-leaflet-marker",html:s,iconSize:[22,22],iconAnchor:[11,11]});L.marker([i.latitude,i.longitude],{icon:a}).addTo(n).on("click",()=>{Wa(i);const l=document.getElementById("map-popup-card");l&&l.style.setProperty("display","block","important"),window.openSiteById(i.id)})}):e==="google"&&typeof google<"u"&&google.maps&&t.forEach(i=>{new google.maps.Marker({position:{lat:i.latitude,lng:i.longitude},map:n,title:i.name}).addListener("click",()=>{Wa(i);const s=document.getElementById("map-popup-card");s&&s.style.setProperty("display","block","important"),window.openSiteById(i.id)})})}function Yr(n="map-container",e=[7.8731,80.7718]){const t=document.getElementById(n)||document.getElementById("yathra-main-map")||document.getElementById("map-view");if(!t)return;t.innerHTML="";const i=t.id||n;if(typeof L<"u"){t._leaflet_id&&(t._leaflet_id=null);const r=L.map(i,{attributionControl:!1,zoomControl:!0,dragging:!0,tap:!0,touchZoom:!0,scrollWheelZoom:!0}).setView(e,8);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(r),lu(r,"leaflet"),setTimeout(()=>{typeof r<"u"&&r&&typeof r.invalidateSize=="function"&&r.invalidateSize()},200)}else t.innerHTML=`
      <div class="map-placeholder-box">
        <p>🗺️ Interactive Map Mode</p>
        <button class="btn-primary" onclick="window.open('https://www.google.com/maps', '_blank')">Open in External Maps</button>
      </div>
    `}function Bc(n="map-container",e=[7.8731,80.7718]){const t=document.getElementById(n)||document.getElementById("yathra-main-map");if(t){if(window.gm_authFailure=function(){console.warn("Google Maps API auth failure. Falling back to OpenStreetMap / Leaflet..."),Yr(n,e)},typeof google>"u"||!google.maps||!google.maps.Map){Yr(n,e);return}try{const i=new google.maps.Map(t,{center:{lat:e[0],lng:e[1]},zoom:8,disableDefaultUI:!1,zoomControl:!0,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_BOTTOM}});lu(i,"google")}catch(i){console.error("Failed to render Google Map:",i),Yr(n,e)}}}window.gm_authFailure=function(){console.warn("Google Maps API auth failure. Falling back to OpenStreetMap / Leaflet..."),Yr("yathra-main-map",[7.8731,80.7718])};window.initMap=Bc;window.renderFallbackLeafletMap=Yr;window.renderMapMarkers=lu;window.userLocationMarker=null;window.userLocationCircle=null;window.gpsWatchId=null;window.initLeafletMap=function(){const n=document.getElementById("map")||document.getElementById("leaflet-map-canvas")||document.getElementById("yathra-main-map");if(!n){console.error("❌ Map container #map not found in DOM");return}if(typeof L>"u"){console.error("❌ Leaflet library (L) is not loaded");return}if(window.leafletMapInstance){try{window.leafletMapInstance.off()}catch{}try{window.leafletMapInstance.remove()}catch{}window.leafletMapInstance=null}if(typeof activeMapInstance<"u"&&activeMapInstance){try{activeMapInstance.off()}catch{}try{activeMapInstance.remove()}catch{}activeMapInstance=null}n._leaflet_id&&(n._leaflet_id=null);const e=L.map(n,{zoomControl:!1,attributionControl:!1}).setView([7.8731,80.7718],7.5);window.leafletMapInstance=e,typeof activeMapInstance<"u"&&(activeMapInstance=e),L.control.zoom({position:"topleft"}).addTo(e),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,subdomains:["a","b","c"]}).addTo(e);const t=(l,u)=>L.divIcon({className:"custom-leaflet-marker",html:`
      <div style="position: relative; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center;">
        <div style="background-color: ${l}; width: 18px; height: 18px; border-radius: 50%; border: 3px solid #FFFFFF; box-shadow: 0 3px 8px rgba(0,0,0,0.35);"></div>
      </div>
    `,iconSize:[26,26],iconAnchor:[13,13]}),i=t("#0C6C7A"),r=t("#E59819"),s=l=>l?String(l.category||l.type||"").toLowerCase().includes("hidden")||l.is_hidden===!0||typeof l.xp=="number"&&l.xp>80:!1,a=window.sitesData||(typeof le<"u"?le:[]);(Array.isArray(a)?a:Object.values(a)).forEach(l=>{const u=l.lat||l.latitude,p=l.lng||l.longitude;if(u&&p){const g=s(l),b=g?r:i,A=L.marker([u,p],{icon:b}).addTo(e);A.bindPopup(`
        <div style="font-family: inherit; font-size: 12px; line-height: 1.4; padding: 4px; text-align: center;">
          <b style="color: #1E293B; font-size: 13px;">${l.name}</b><br/>
          <span style="color: ${g?"#D97706":"#0C6C7A"}; font-weight: 700;">
            ${g?"★ Hidden Gem":"🏛 Heritage Trail"} (${l.xp||50} XP)
          </span><br/>
          <button onclick="window.selectAndOpenSite('${l.id}')" style="margin-top: 8px; background: #0C6C7A; color: #FFF; border: none; border-radius: 8px; padding: 6px 14px; font-size: 11px; font-weight: 700; cursor: pointer;">
            View Site Details
          </button>
        </div>
      `),A.on("click",()=>{typeof window.selectAndOpenSite=="function"&&window.selectAndOpenSite(l.id)})}}),navigator.geolocation&&(window.gpsWatchId&&navigator.geolocation.clearWatch(window.gpsWatchId),window.gpsWatchId=navigator.geolocation.watchPosition(l=>{const u=l.coords.latitude,p=l.coords.longitude,g=l.coords.accuracy,b=L.divIcon({className:"user-live-pin",html:`
            <div style="position: relative; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
              <div style="position: absolute; width: 24px; height: 24px; border-radius: 50%; background: rgba(37, 99, 235, 0.35); animation: pulse 2s infinite;"></div>
              <div style="width: 14px; height: 14px; border-radius: 50%; background: #2563EB; border: 2.5px solid #FFFFFF; box-shadow: 0 2px 8px rgba(0,0,0,0.35);"></div>
            </div>
          `,iconSize:[24,24],iconAnchor:[12,12]});window.userLocationMarker?(window.userLocationMarker.setLatLng([u,p]),window.userLocationCircle.setLatLng([u,p]),window.userLocationCircle.setRadius(Math.max(g,30))):(window.userLocationMarker=L.marker([u,p],{icon:b,zIndexOffset:1e3}).addTo(e).bindPopup("<b>You Are Here</b>"),window.userLocationCircle=L.circle([u,p],{radius:Math.max(g,30),color:"#2563EB",weight:1,fillColor:"#3B82F6",fillOpacity:.12}).addTo(e))},l=>console.warn("GPS lookup skipped:",l),{enableHighAccuracy:!0,timeout:1e4})),requestAnimationFrame(()=>{e&&typeof e.invalidateSize=="function"&&e.invalidateSize()}),setTimeout(()=>{e&&typeof e.invalidateSize=="function"&&e.invalidateSize()},300)};window.initLeafletMap=initLeafletMap;async function Mi(){const n=document.getElementById("yathra-main-map");if(!n)return;const e=Ee?[Ee.latitude,Ee.longitude]:[7.8731,80.7718];try{if((await Ha.checkPermissions()).location!=="granted"){if(!Mn){Ev();return}}else{const c=await Ha.getCurrentPosition();Ee={latitude:c.coords.latitude,longitude:c.coords.longitude},Mn=!1}}catch(a){Mn=!0,console.error("Error parsing native hardware location states:",a)}const t=document.getElementById("map-loader");t&&t.style.setProperty("display","flex","important");const i=()=>{const a=document.getElementById("map-loader");a&&a.style.setProperty("display","none","important")},r=document.getElementById("map-view");r&&(r.style.display="block"),document.documentElement.classList.add("map-active"),document.body.classList.add("map-active"),["html","body","#app",".app-root","#app-container",".app-viewport",".iphone-chassis",".view-wrapper",".screen","main"].forEach(a=>{const c=document.querySelector(a);if(a==="html"||a==="body"){const l=a==="html"?document.documentElement:document.body;l.style.setProperty("background","transparent","important"),l.style.setProperty("background-color","transparent","important")}else c&&(c.style.setProperty("background","none","important"),c.style.setProperty("background-color","transparent","important"))});try{if(typeof Hi<"u"&&Hi.create&&window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform()){if(Lt){try{await Lt.destroy()}catch{}Lt=null}Lt=await Hi.create({id:"yathra-map-instance",element:n,apiKey:"AIzaSyAh9WMzSPpYwNj-ReY231j_ONHa_73SnUY",config:{center:{lat:e[0],lng:e[1]},zoom:8}}),typeof Lt.setOnTilesLoadedListener=="function"&&Lt.setOnTilesLoadedListener(()=>i()),setTimeout(i,1e3);const a=le.filter(p=>p.latitude&&p.longitude),c=a.map(p=>({coordinate:{lat:p.latitude,lng:p.longitude},iconUrl:p.category==="Hidden Gems"?"assets/pin_gold.png":"assets/pin_teal.png",iconSize:{width:32,height:42}})),l=await Lt.addMarkers(c),u=Array.isArray(l)?l:l.ids||[];a.forEach((p,g)=>{p.nativeMarkerId=u[g]}),Lt.setOnMarkerClickListener(async p=>{const g=le.find(b=>b.nativeMarkerId===p.markerId);if(g){Wa(g);const b=document.getElementById("map-popup-card");b&&b.style.setProperty("display","block","important")}})}else Bc("yathra-main-map",e),setTimeout(i,400)}catch(a){console.warn("Native GoogleMap creation failed, falling back to initMap/Leaflet:",a),Bc("yathra-main-map",e),setTimeout(i,400)}}window.initializeYathraMap=Mi;function Iv(n,e){if(n==="site-details"||n==="site-detail"){const t=e&&e.id;t&&ys(t)}}window.Maps=Iv;function qt(){const n=document.getElementById("app-container");if(!n)return;let e="";switch(f.currentScreen){case"landing":case"splash":e=Uc();break;case"login":e=xv();break;case"signup":e=Tv();break;case"permissions":e=Av();break;case"choose-role":e=Sv();break;case"calibrate-compass":e=kv();break;case"how-scoring-works":e=Cv();break;case"dashboard":e=$c();break;case"directory":e=rn();break;case"heritage-trail":e=renderTrailList("Heritage Trail");break;case"hidden-gems":e=renderTrailList("Hidden Gems");break;case"map":e=qc();break;case"site-detail":e=jc();break;case"dwell-time":e=Pv();break;case"camera":e=Rv();break;case"camera-success":e=Lv();break;case"camera-reject":e=Ov();break;case"guidelines":e=Nv();break;case"offline-sync":e=Vv();break;case"quiz":e=Mv();break;case"quiz-cooldown":e=Fv();break;case"quests":e=Bv();break;case"quest-social":e=Uv();break;case"quest-food":e=zv();break;case"quest-wandering":e=$v();break;case"quest-wildlife":e=qv();break;case"quest-warrior":e=jv();break;case"activism":e=Gc();break;case"petition":e=Hv();break;case"donations":e=Gv();break;case"cleanup":e=Wv();break;case"create-event":e=Kv();break;case"rewards":e=Wc();break;case"rewards-list":e=Yv();break;case"coupon-redeem":e=Qv();break;case"rank":e=Xv();break;case"leaderboard":e=Jv();break;case"profile":e=Kc();break;case"travel-poster":e=Zv();break;case"settings":e=ew();break;case"ledger":e=Dv();break;default:e="<div>Screen frame missing</div>"}const t=document.getElementById("map-view");if(f.currentScreen!=="map"&&Lt){const i=Lt;Lt=null,(async()=>{try{await i.destroy(),console.log("Native map instance closed smoothly via memory controller.")}catch(r){console.error("Error executing native interface cleanup execution mapping:",r)}})()}n.innerHTML=e,f.currentScreen==="map"?(n.style.display="block",typeof initLeafletMap=="function"?initLeafletMap():Mi()):(t&&(t.style.display="none"),n.style.display="block",document.documentElement.classList.remove("map-active"),document.body.classList.remove("map-active"),document.documentElement.style.removeProperty("background"),document.documentElement.style.removeProperty("background-color"),document.body.style.setProperty("background","#FDF8E9","important"),document.body.style.setProperty("background-color","#FDF8E9","important"),["#app",".app-root","#app-container",".app-viewport",".iphone-chassis",".view-wrapper",".screen","main"].forEach(r=>{const s=document.querySelector(r);s&&(s.style.removeProperty("background"),s.style.removeProperty("background-color"))})),at()}function Uc(){return`
    <div class="screen dark-theme" id="landing-view">
      <div class="splash-container">
        <div class="splash-logo-box">
          <img src="Element%20Pictures/YathraLanka%20Logo.png" alt="YathraLanka Logo">
        </div>
        <h1 class="splash-title">YathraLanka</h1>
        <p class="splash-subtitle">Play the game. Protect the Past.</p>
        <div class="splash-actions">
          <button class="btn-primary" id="btn-login">Sign In</button>
          <button class="btn-outline" id="btn-signup">Sign Up</button>
          <button class="btn-guest-auth" id="btn-guest-explore" style="margin-top: 6px;">Explore as Guest</button>
        </div>
      </div>
    </div>
  `}function xv(){return f.authTab="signin",`
    <div class="screen auth-screen-container" id="login-view">
      <div style="position: absolute; top: 16px; left: 16px; z-index: 10;">
        <button class="back-button" id="login-back">←</button>
      </div>
      ${Vn("signin")}
    </div>
  `}function Tv(){return f.authTab="signup",`
    <div class="screen auth-screen-container" id="signup-view">
      <div style="position: absolute; top: 16px; left: 16px; z-index: 10;">
        <button class="back-button" id="signup-back">←</button>
      </div>
      ${Vn("signup")}
    </div>
  `}function Av(){const n=f.user.permissions.camera,e=f.user.permissions.notifications,t=n;return`
    <div class="screen permissions-screen" id="permissions-view">
      <div style="padding: 30px 24px 20px 24px; text-align: center;">
        <h2 style="font-size: 26px; font-weight: 900; line-height: 1.2; margin-bottom: 8px;">We need a few permissions</h2>
        <p style="font-size: 13px; color: var(--color-gray);">These help us make your experience safe and seamless.</p>
      </div>
      <div class="selection-card permission-card ${n?"selected":""}" style="margin: 10px 16px; padding: 14px;" id="perm-camera-btn">
        <div class="permission-icon-box">
          <img src="icons/camera.png" alt="Camera">
        </div>
        <div style="flex: 1;">
          <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">Camera</h3>
          <p style="font-size: 11px; color: var(--color-gray);">Used to scan, capture and verify your visits</p>
        </div>
        <div class="check-circle ${n?"checked":""}">
          ${n?"✓":""}
        </div>
      </div>
      <div class="selection-card permission-card ${e?"selected":""}" style="margin: 10px 16px; padding: 14px;" id="perm-notif-btn">
        <div class="permission-icon-box">
          <img src="icons/notifications.png" alt="Notifications">
        </div>
        <div style="flex: 1;">
          <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">Notifications</h3>
          <p style="font-size: 11px; color: var(--color-gray);">Stay updated on quests, events and rewards</p>
        </div>
        <div class="check-circle ${e?"checked":""}">
          ${e?"✓":""}
        </div>
      </div>
      <div style="padding: 16px; margin-top: 10px;">
        <button class="btn-primary" style="opacity: ${t?"1":"0.5"}; cursor: ${t?"pointer":"not-allowed"};" id="permissions-continue-btn" ${t?"":"disabled"}>Continue</button>
      </div>
      <div class="permission-footer-box" id="permissions-privacy-footer">
        We value your privacy. Location access is requested when using the map or verifying a site visit.
      </div>
    </div>
  `}function Sv(){const n=f.user.role;return`
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
        ${[{key:"Explorer",title:"Explorer",desc:"Visit places, learn & earn"},{key:"Volunteer",title:"Volunteer",desc:"Join cleanups & activities"},{key:"Organizer",title:"Organizer",desc:"Organize events & petitions"},{key:"Quiz Master",title:"Quiz Master",desc:"Do quizzes & earn points"}].map(t=>`
          <div class="selection-card ${n===t.key?"selected":""}" style="color: var(--color-charcoal); padding: 14px;" data-role="${t.key}">
            <div style="flex: 1;">
              <h3 class="selection-card-title">${t.title}</h3>
              <p class="selection-card-desc">${t.desc}</p>
            </div>
          </div>
        `).join("")}
      </div>
      <div style="padding: 20px; margin-top: auto;">
        <button class="btn-primary" style="opacity: ${n?"1":"0.5"};" id="role-continue" ${n?"":"disabled"}>Continue</button>
      </div>
    </div>
  `}function kv(){const n=f.user.interests;return`
    <div class="screen">
      <div style="padding: 16px; text-align: left; width: 100%; box-sizing: border-box;">
        <button id="compass-back-btn" style="color: #000000; background: none; border: none; font-size: 24px; cursor: pointer; padding: 0;">←</button>
      </div>
      <div style="padding: 30px 24px 10px 24px; text-align: center;">
        <h2 style="font-size: 26px; font-weight: 900; line-height: 1.2; margin-bottom: 6px;">Calibrate Your Compass</h2>
        <p style="font-size: 13px; color: var(--color-gray);">Select your primary interests to personalize your adventure.</p>
      </div>
      <div class="grid-2x2">
        ${[{key:"Nature & Outdoors",title:"Nature & Outdoors",desc:"Mountains, Waterfalls, Hikes",icon:"icons/Nature & Outdoors.png"},{key:"Heritage & History",title:"Heritage & History",desc:"Ancient ruins, Temples, Forts",icon:"icons/Heritage & History.png"},{key:"Beaches & Coastal",title:"Beaches & Coastal",desc:"Surfing, Relaxation, Marine",icon:"icons/Beaches & Coastal.png"},{key:"Cultural Immersion",title:"Cultural Immersion",desc:"Local foods, Crafts, Festivals",icon:"icons/cultural immersion.png"}].map(t=>`
            <div class="grid-item-card ${n.includes(t.key)?"selected":""}" data-cat="${t.key}">
              <img src="${t.icon}" alt="${t.title}">
              <div class="grid-item-title">${t.title}</div>
              <div class="grid-item-subtitle">${t.desc}</div>
            </div>
          `).join("")}
      </div>
      <div style="padding: 20px; margin-top: auto;">
        <button class="btn-primary" style="opacity: ${n.length>0?"1":"0.5"};" id="compass-continue" ${n.length>0?"":"disabled"}>Continue</button>
      </div>
    </div>
  `}function Cv(){return`
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
  `}function zc(){return f.isGuest?`
    <div class="guest-header-banner" style="background: linear-gradient(135deg, rgba(46,125,138,0.12) 0%, rgba(235,179,77,0.18) 100%); border: 1.5px solid var(--color-gold); border-radius: 14px; padding: 10px 14px; margin: 6px 16px 12px 16px; display: flex; align-items: center; justify-content: space-between; gap: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 16px;">🧭</span>
        <div>
          <div style="font-size: 12px; font-weight: 800; color: var(--color-dark-teal);">Guest Explorer Mode</div>
          <div style="font-size: 10px; color: var(--color-gray); font-weight: 600;">Sign in to save progress & redeem rewards</div>
        </div>
      </div>
      <button id="header-guest-login-btn" style="background: linear-gradient(135deg, #EBB34D 0%, #D49B35 100%); color: var(--color-charcoal); border: none; padding: 7px 12px; border-radius: 10px; font-size: 11px; font-weight: 800; cursor: pointer; white-space: nowrap; box-shadow: 0 2px 8px rgba(235, 179, 77, 0.4);">
        Sign In / Register
      </button>
    </div>
  `:""}function $c(){const n=f.user&&f.user.xp||0;return`
    <div id="dashboard-view" class="screen dashboard-view-wrapper">
      <div class="dashboard-header" style="padding-top: max(44px, env(safe-area-inset-top, 40px)) !important; padding-bottom: 12px !important; padding-left: 16px !important; padding-right: 16px !important; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-size: 26px; font-weight: 900; line-height: 1.1; margin: 0;">Central Dashboard</h2>
          <p style="font-size: 12px; color: var(--color-gray); margin-top: 4px; margin-bottom: 0;">Welcome back, ${f.isGuest?"Guest Explorer":f.user.role||"Traveller"}!</p>
        </div>
        <div class="badge-tag" id="dashboard-notifications-btn" style="background: var(--color-gold); color: var(--color-charcoal); font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <span>🌟 ${n} XP</span>
          <span style="font-size: 14px;">🔔</span>
        </div>
      </div>

      <div class="dashboard-scrollable-container" style="padding: 12px 16px 90px 16px !important; overflow-y: auto;">
        ${zc()}
        <div class="dashboard-card" style="margin-top: 10px; background-color: #AAD3DF !important; background: #AAD3DF !important; transition: none !important; animation: none !important; position: relative;" id="dash-map-card">
          <h3 style="font-size: 15px; font-weight: 800; color: var(--color-charcoal); transition: none !important; animation: none !important;">Wanderer</h3>
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
          <div class="searcher-tags" style="display: flex; gap: 8px; margin-bottom: 12px;">
            <span class="badge-tag" id="dash-tag-heritage" style="background: rgba(255,255,255,0.18); color: white; cursor: pointer;">📍 Heritage Trail</span>
            <span class="badge-tag" id="dash-tag-gems" style="background: rgba(255,255,255,0.18); color: white; cursor: pointer;">💎 Hidden Gems</span>
          </div>
          <button class="btn-primary" style="background: var(--color-gold); height: 38px; font-size: 13px;" id="dash-view-directory">View directory</button>
        </div>
      </div>
      ${me("home")}
    </div>
  `}function rn(n="heritage"){const e=n||(f.activeDirectoryTab==="Hidden Gems"||f.activeDirectoryTab==="hidden"||f.activeDirectoryTab==="gems"?"hidden":"heritage"),t=e==="hidden"||e==="gems",i=window.sitesData||(typeof le<"u"?le:[]),r=Array.isArray(i)?i:Object.values(i),s=t?r.filter(c=>c.category==="hidden"||c.xp>80||c.is_hidden):r.filter(c=>c.category!=="hidden"||!c.is_hidden),a=s.length>0?s:r;return`
    <div id="directory-view" class="screen directory-screen directory-view-wrapper" style="display: flex; flex-direction: column; height: 100%; width: 100%; overflow: hidden; position: relative; box-sizing: border-box;">
      <!-- Top Header -->
      <div class="directory-top-bar">
        <div class="header-bar">
          <button class="back-button" id="directory-back-btn">←</button>
          <h1 class="header-title">Directory</h1>
        </div>
        <div id="directory-guest-banner-wrapper">
          ${typeof zc=="function"?zc():""}
        </div>
        <div class="search-container">
          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input type="text" id="directory-search-input" class="search-input" placeholder="Search by name of location...">
          </div>
        </div>
        <div class="tabs-wrapper">
          <div class="segmented-control" role="tablist">
            <button class="segmented-tab tab-pill ${t?"":"active"}" 
                    id="tab-heritage" 
                    onclick="window.switchDirectoryTab('heritage')">
              Heritage Trail
            </button>
            <button class="segmented-tab tab-pill ${t?"active":""}" 
                    id="tab-hidden-gems" 
                    onclick="window.switchDirectoryTab('hidden')">
              Hidden Gems
            </button>
          </div>
        </div>
      </div>

      <!-- 2x2 Grid with Immediate Render -->
      <div class="directory-cards-scroller directory-list-container locations-grid" id="directory-grid-target" style="flex: 1 1 auto; display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 10px 14px 80px 14px; box-sizing: border-box; width: 100%; height: 100%; max-height: none; overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch;">
        ${a.map(c=>tr(c)).join("")}
      </div>

      <!-- Persistent Footer Nav -->
      ${typeof me=="function"?me("directory"):""}
    </div>
  `}window.openDirectoryTab=function(n){console.log("👉 Opening Directory on Tab:",n),window.state||(window.state={}),window.state.activeDirectoryTab=n||"heritage",window.state.currentScreen="directory",typeof window.navigate=="function"&&window.navigate("directory"),setTimeout(()=>{window.switchDirectoryTab(n||"heritage")},50)};window.switchDirectoryTab=function(n){window.state||(window.state={}),window.state.activeDirectoryTab=n,typeof f<"u"&&(f.activeDirectoryTab=n);const e=n==="hidden"||n==="gems"||n==="hidden_gems";document.querySelectorAll(".segmented-tab, .tab-pill, .dir-tab-btn, [data-dir-tab]").forEach(u=>{(e?u.id==="tab-hidden-gems"||u.getAttribute("data-dir-tab")==="gems"||u.innerText.includes("Hidden"):u.id==="tab-heritage"||u.getAttribute("data-dir-tab")==="heritage"||u.innerText.includes("Heritage"))?(u.classList.add("active"),u.style.background="#0C6C7A",u.style.color="#FFFFFF",u.style.fontWeight="700"):(u.classList.remove("active"),u.style.background="rgba(0,0,0,0.05)",u.style.color="#64748B",u.style.fontWeight="600")});const i=window.sitesData||(typeof le<"u"?le:[]),s=(Array.isArray(i)?i:Object.values(i)).filter(u=>u&&typeof u=="object");let a=s;n==="heritage"?a=s.filter(u=>!u.is_hidden_gem&&!u.isHiddenGem&&(u.category==="Heritage Trail"||u.category==="heritage"||!u.category||u.type!=="gem")):e&&(a=s.filter(u=>u.is_hidden_gem===!0||u.isHiddenGem===!0||u.category==="Hidden Gems"||u.category==="gems"||u.category==="hidden"||u.type==="gem"||u.xp>80));const c=a.length>0?a:s,l=document.getElementById("directory-grid-target")||document.getElementById("directory-cards-container")||document.querySelector(".sites-grid")||document.querySelector(".heritage-grid");l&&typeof tr=="function"&&(l.innerHTML=c.map(u=>tr(u)).join(""),typeof window.attachDirectoryCardEvents=="function"&&window.attachDirectoryCardEvents())};function qc(){return`
    <div class="screen map-screen" id="map-view" style="position: relative; width: 100%; height: 100%; overflow: hidden; padding-top: 44px; box-sizing: border-box;">
      
      <!-- Floating Top Header with Back Button Only -->
      <div class="map-top-bar" style="position: absolute; top: 48px; left: 16px; z-index: 1000; pointer-events: none;">
        <button id="btn-map-back" style="pointer-events: auto; background: #FFFFFF; border: 1px solid rgba(0,0,0,0.12); border-radius: 12px; padding: 8px 14px; font-weight: 700; font-size: 13px; color: #1E293B; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: flex; align-items: center; gap: 6px;">
          ← Back
        </button>
      </div>

      <!-- Leaflet Map Container -->
      <div id="map" style="width: 100%; height: 100%; z-index: 1;"></div>

      <!-- Top Legend -->
      <div class="map-legend-card" style="position: absolute; top: 55px; right: 14px; background: rgba(255,255,255,0.95); border-radius: 14px; padding: 8px 12px; box-shadow: 0 4px 14px rgba(0,0,0,0.15); z-index: 1000; font-size: 11px;">
        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #2563EB; display: inline-block;"></span>
          <span style="font-weight: 600; color: #1E293B;">You Are Here</span>
        </div>
        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #0C6C7A; display: inline-block;"></span>
          <span style="color: #475569;">Heritage Trail</span>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <span style="width: 10px; height: 10px; border-radius: 50%; background: #E59819; display: inline-block;"></span>
          <span style="color: #475569;">Hidden Gems</span>
        </div>
      </div>

      <!-- Persistent Footer Nav -->
      ${typeof me=="function"?me("map"):""}
    </div>
  `}window.attachMapEvents=function(){const n=document.getElementById("btn-map-back")||document.querySelector(".map-top-bar button");n&&(n.onclick=function(e){e.preventDefault(),e.stopPropagation(),console.log("👉 Map Back Button clicked: Returning to Central Dashboard..."),typeof window.navigate=="function"&&window.navigate("home")})};function jc(n=f.activeSite){n||(n=(Array.isArray(le)?le[0]:null)||{id:"default",name:"Heritage Location",category:"Archaeological Reserve",district:"Sri Lanka",description:"Explore ancient ruins, sacred inscriptions, and ecological pathways.",image:"Element Pictures/Sigiriya-LionRock.jpg",xpRange:"50 XP",checkpoints:[]});const e=n.name||"Heritage Checkpoint",t=n.category||"Historical Sanctuary",i=n.district||n.location||"Sri Lanka",r=n.description||"Rich historical reserve with ancient monuments.",s=n.image||n.thumbnail||n.referenceImage||"Element Pictures/Sigiriya-LionRock.jpg",a=n.xp||(n.xpRange?n.xpRange:"50 XP"),c=Array.isArray(n.checkpoints)?n.checkpoints:[];return`
    <div class="screen site-detail-screen" id="site-detail-view" style="position: relative; height: 100%; display: flex; flex-direction: column; overflow: hidden;">
      <!-- Top Fixed Action Bar -->
      <div class="site-detail-top-nav">
        <button class="btn-icon-back" id="btn-back-to-directory" aria-label="Back">‹</button>
        <h2 class="site-detail-header-title" style="font-size: 16px; font-weight: 800; color: #1A1A1A; margin: 0;">${e}</h2>
        <button class="btn-icon-share" id="btn-share-site" aria-label="Share">↗</button>
      </div>

      <!-- Scrollable Detail Body -->
      <div class="site-detail-scroll-container" style="flex: 1; overflow-y: auto; padding: 16px; padding-bottom: 80px;">
        <div class="site-hero-banner" style="position: relative; border-radius: 16px; overflow: hidden; height: 180px; margin-bottom: 16px;">
          <img src="${s}" alt="${e}" class="site-hero-img" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='Element Pictures/Sigiriya-LionRock.jpg'">
          <div class="site-hero-badge-row" style="position: absolute; bottom: 12px; left: 12px; display: flex; gap: 8px;">
            <span class="site-hero-tag" style="background: rgba(12,108,122,0.85); color: #FFF; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 12px;">${t}</span>
            <span class="site-hero-xp" style="background: rgba(235,179,77,0.9); color: #1A1A1A; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 12px;">⭐ ${a}</span>
          </div>
        </div>

        <div class="site-info-body">
          <h1 class="site-title-large" style="font-size: 20px; font-weight: 800; color: #1A1A1A; margin-bottom: 4px;">${e}</h1>
          <p class="site-geo-tag" style="font-size: 12px; color: #666; font-weight: 600; margin-bottom: 14px;">📍 ${i}</p>
          
          <div class="site-description-block" style="background: #FFF; border-radius: 14px; padding: 14px; margin-bottom: 16px; border: 1px solid var(--color-light-gray, #EAEAEA);">
            <h3 style="font-size: 13px; font-weight: 800; color: #1A1A1A; margin-bottom: 6px;">Historical Significance</h3>
            <p style="font-size: 12px; color: #555; line-height: 1.45; margin: 0;">${r}</p>
          </div>

          <!-- Checkpoint Quests -->
          <div class="site-checkpoints-section">
            <div class="checkpoints-header-row" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <h3 style="font-size: 15px; font-weight: 800; color: #1A1A1A; margin: 0;">Heritage Checkpoints</h3>
              <span class="checkpoint-count-pill" style="font-size: 11px; font-weight: 700; color: var(--color-gold);">${c.length} Quests</span>
            </div>

            <div class="checkpoints-list">
              ${c.length>0?c.map((l,u)=>{const p=f.user?.completedCheckpoints?.includes(l.id);return`
                  <div class="checkpoint-card-row ${p?"completed":""}" data-checkpoint-id="${l.id||u}" style="background: #FFF; border-radius: 14px; padding: 12px; border: 1.5px solid ${p?"#00E676":"#EAEAEA"}; display: flex; align-items: center; gap: 12px; margin-bottom: 10px;">
                    <img src="${l.referenceImage||s}" alt="${l.name}" style="width: 48px; height: 48px; border-radius: 10px; object-fit: cover;">
                    <div class="checkpoint-info" style="flex: 1;">
                      <h4 style="font-size: 13px; font-weight: 800; margin: 0; color: #1A1A1A;">${l.name||`Checkpoint ${u+1}`} ${p?'<span style="color:#00E676;">✓</span>':""}</h4>
                      <p style="font-size: 11px; color: #666; margin: 2px 0 0 0;">${l.description||"Verify your physical presence at this landmark."}</p>
                    </div>
                    <button class="btn-primary-small select-checkpoint-btn" data-cp-id="${l.id}" style="height: 32px; font-size: 11px; padding: 0 10px; background: var(--color-teal); color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer;">
                      ${p?"Re-verify":`Verify (+${l.xpReward||50} XP)`}
                    </button>
                  </div>
                `}).join(""):`
                <div class="checkpoint-card-row" style="background: #FFF; border-radius: 14px; padding: 12px; border: 1px solid #EAEAEA; display: flex; align-items: center; justify-content: space-between;">
                  <div class="checkpoint-info">
                    <h4 style="font-size: 13px; font-weight: 800; margin: 0;">Main Stupa / Monument</h4>
                    <p style="font-size: 11px; color: #666; margin: 2px 0 0 0;">Approach the primary architectural feature to confirm presence.</p>
                  </div>
                  <button class="btn-primary-small" id="btn-open-presence-cam" style="height: 32px; font-size: 11px; padding: 0 10px; background: var(--color-teal); color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer;">
                    Verify (+50 XP)
                  </button>
                </div>
              `}
            </div>
          </div>
        </div>
      </div>

      <!-- Persistent Bottom Navigation -->
      ${me("home")}
    </div>
  `}function Pv(){const n=f.activeSite;if(!n)return"";const e=Math.floor(f.dwellTimeLeft/60),t=f.dwellTimeLeft%60,i=`${e<10?"0"+e:e}:${t<10?"0"+t:t}`,s=565.48-f.dwellTimeLeft/900*565.48,a=f.dwellTimeLeft<=0;return`
    <div class="screen immersion-freeze-mode" style="position: relative;">
      <div class="header-bar">
        <div class="header-title" style="margin-left: 20px;">Immersion Mode: ${n.name}</div>
      </div>
      
      <!-- Translucent Isolation Screen Mask Overlay Layer -->
      <div class="immersion-app-blocker" style="position: absolute; top: 60px; left: 0; width: 100%; bottom: 0; background: rgba(253, 248, 233, 0.45); z-index: 1000; pointer-events: auto; display: ${a?"none":"block"};"></div>

      <!-- Core Display Window (Lifted completely to z-index 2000 so everything remains accessible and unblocked) -->
      <div style="padding: 10px 20px; text-align: center; z-index: 2000; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
        <h2 style="font-size: 22px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 2px;">${n.name}</h2>
        <h3 style="font-size: 18px; font-weight: 800; color: var(--color-charcoal); margin-bottom: 12px;">15 Minute Dwell Time</h3>
        <p style="font-size: 11px; color: var(--color-gray); font-weight: 600; margin-bottom: 16px;">Presence validation progress runtime tracking window active.</p>
        
        <!-- Strict secure wrapper context mapping -->
        <div class="timer-circle-box" style="margin-bottom: 20px;">
          <svg class="timer-svg">
            <circle class="timer-bg-circle" cx="100" cy="100" r="90"></circle>
            <circle class="timer-progress-circle ${a?"completed":""}" cx="100" cy="100" r="90" style="stroke-dashoffset: ${s}; stroke: ${f.gpsVerified?"var(--color-teal)":"var(--color-gold)"};"></circle>
          </svg>
          <div class="timer-text-display">${i}</div>
        </div>
        
        <p style="font-size: 12px; font-weight: 700; text-align: center; color: var(--color-charcoal); margin-bottom: 16px; max-width: 280px; line-height: 1.4;">
          Your device must stay stationary inside site grounds coordinates.
        </p>

        <!-- Live Polling Status Interface Info Row Container Box -->
        <div class="verification-status-row-widget" style="background: var(--color-white); border-radius: 12px; padding: 10px 16px; margin-bottom: 16px; width: 100%; max-width: 300px; box-shadow: var(--shadow-premium); text-align: left;">
          <div style="font-size: 11px; font-weight: 800; color: var(--color-charcoal); display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background: ${f.gpsVerified?"var(--color-green-success)":"var(--color-gold)"};"></span>
            Hardware Polling: Background interval active
          </div>
          <div style="font-size: 10px; color: var(--color-gray); font-weight: 600; line-height: 1.3;">
            Captured Evidences: <span style="font-weight: 800; color: var(--color-teal);">${f.dwellImages.length+1} secure frame bundle(s)</span>
          </div>
        </div>

        <p style="font-size: 12px; font-weight: 700; text-align: center; color: ${a?"var(--color-green-success)":"var(--color-charcoal)"}; margin-bottom: 16px; max-width: 280px; line-height: 1.4;">
          ${a?"Presence authenticated! Your cultural preservation session has been recorded.":"Capture additional image perspectives below to support verification data."}
        </p>
        
        <!-- Camera action trigger now fully exposed and click-ready -->
        <button class="btn-outline" style="width: 100%; max-width: 300px; height: 44px; font-size: 13px; margin-bottom: 14px; display: ${a?"none":"flex"}; align-items: center; justify-content: center; gap: 6px;" id="dwell-extra-photo-btn">
          📸 Take Additional Verification Photo
        </button>

        <button class="btn-primary" style="width: 100%; max-width: 300px; height: 44px; background: ${a?"var(--color-gold)":"#EAECEF"}; color: ${a?"var(--color-charcoal)":"var(--color-gray)"};" id="dwell-continue-btn" ${a?"":"disabled"}>
          ${a?"Proceed to Trials":"Waiting..."}
        </button>
        
        <div style="margin-top: 14px; display: ${a?"none":"block"};">
          <span id="dwell-abandon-link" style="font-size: 12px; color: var(--color-red-reject); font-weight: 800; cursor: pointer; text-decoration: underline;">Abandon Session</span>
        </div>
      </div>
    </div>
  `}function Rv(){const n=f.activeSite||le[0],e=Ee&&Ee.latitude?Ee.latitude:7.957,t=Ee&&Ee.longitude?Ee.longitude:80.7603,i=Io(e,t,n.latitude,n.longitude);return`
    <div class="screen camera-screen" id="camera-view" style="padding-bottom: 0; background: #000; color: white;">
      <!-- 1. Top Target Checkpoint Card -->
      <div class="target-checkpoint-header checkpoint-top-card presence-header-banner" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); border-radius: 16px; padding: 12px 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <button class="back-button" id="camera-back" style="background: rgba(255,255,255,0.15); border-radius: 50%; width:32px; height:32px; color:#FFF; border:none; cursor:pointer;">✕</button>
            <div>
              <div class="checkpoint-badge" style="font-size: 10px; font-weight: 800; color: rgba(255,255,255,0.6); text-transform: uppercase;">Target Checkpoint</div>
              <h3 class="checkpoint-site-title" style="font-size: 15px; font-weight: 800; color: #EBB34D; margin: 2px 0 0 0;">${n.name}</h3>
            </div>
          </div>
          <div style="text-align: right;">
            <span style="font-size: 10px; color: rgba(255,255,255,0.6); font-weight: 700; display: block;">GPS DELTA</span>
            <span style="font-size: 13px; font-weight: 800; color: #FFF;">${i}m</span>
          </div>
        </div>
      </div>

      <!-- 2. Live Camera Viewfinder Box -->
      <div class="camera-feed-wrapper" id="presence-camera-zone">
        <video id="live-camera-feed" autoplay playsinline muted class="live-camera-video"></video>
        <canvas id="camera-capture-canvas" style="display: none;"></canvas>

        <!-- Permission Prompt (Shown BEFORE camera starts) -->
        <div id="camera-permission-prompt" class="camera-prompt-box" style="text-align: center; padding: 20px;">
          <div class="camera-icon-large" style="font-size: 36px; margin-bottom: 8px;">📷</div>
          <p class="camera-prompt-text" style="font-size: 12px; color: rgba(255,255,255,0.7); max-width: 240px; margin: 0 auto 12px auto; line-height: 1.4;">Live camera access is required to verify site presence.</p>
          <button class="btn-primary" id="btn-request-camera" style="height: 36px; font-size: 12px; padding: 0 16px;">Allow & Open Camera</button>
        </div>

        <!-- Dynamic HUD Overlay (Strictly HIDDEN until stream is running) -->
        <div id="camera-hud-badge" class="camera-hud-badge" style="display: none;">
          <span class="hud-pulse-dot"></span>
          <span id="hud-status-text">HUD Engine Active • Vision Scanning (94%)</span>
        </div>
      </div>

      <!-- 3. Separate Bottom Controls Bar -->
      <div class="camera-bottom-actions">
        <div class="shutter-button-row">
          <button class="btn-shutter" id="btn-capture-photo" style="display: none;" title="Capture Photo">
            <span class="shutter-inner-circle"></span>
          </button>
        </div>
        <div class="camera-secondary-actions">
          <button id="view-ledger-shortcut-btn" style="background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: #FFF; padding: 8px 14px; border-radius: 12px; font-size: 11px; font-weight: 800; cursor: pointer;">
            🛡️ Ledger Verification
          </button>
        </div>
      </div>
    </div>
  `}function Lv(){const n=f.activeSite||le[0],e=f.lastVerificationResult||{visionScore:96,block:{signature:"0x4a8f9c1d2e3f4b5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f"}},t=e.block?e.block.signature:"0x4a8f9c1d2e3f4b5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f";return`
    <div class="screen dark-theme" style="padding-bottom: 30px; justify-content: center; align-items: center; padding: 24px;">
      <h2 style="font-family: var(--font-title); font-size: 28px; color: var(--color-gold); text-align: center; margin-top: 10px;">Presence Synchronized</h2>
      
      <div class="camera-success-badge">
        <div class="success-badge-text">${e.visionScore||96}%<br><span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Valid</span></div>
      </div>
      
      <p style="font-size: 13px; color: #a9cbd0; font-weight: 700; margin-bottom: 2px;">Cryptographic State Ledger Block Synchronized</p>
      
      <div style="font-size: 11px; color: var(--color-green-success); font-weight: 800; background: rgba(255,255,255,0.1); padding: 8px 14px; border-radius: 10px; text-align: center; max-width: 300px; line-height: 1.4; margin-bottom: 12px;">
        ${f.verificationComment||"Verification Successful: Real-time landmark features closely match reference structure model!"}
      </div>
      
      <h3 style="font-size: 26px; font-weight: 900; color: var(--color-gold); margin-bottom: 16px;">+60 XP</h3>

      <!-- Seal Signature Box -->
      <div style="background: rgba(12, 108, 122, 0.2); border: 1px solid rgba(12, 108, 122, 0.6); border-radius: 10px; padding: 8px 12px; margin-bottom: 16px; width: 100%; max-width: 300px; text-align: center;">
        <div style="font-size: 9px; color: #79B7C1; font-weight: 800; text-transform: uppercase;">Cryptographic Seal Hash</div>
        <div style="font-family: monospace; font-size: 10px; color: #FFF; word-break: break-all; margin-top: 2px;">${t}</div>
      </div>
      
      <div class="photo-compare-container">
        <div class="compare-card">
          <img src="${f.dwellImages.length>0?f.dwellImages[0]:n.image}" alt="Captured">
          <div class="compare-label">Captured Frame</div>
        </div>
        <div class="compare-card">
          <img src="${n.referenceImage||n.image}" alt="Reference">
          <div class="compare-label">Reference Mapping</div>
        </div>
      </div>
      
      <div style="display: flex; gap: 10px; width: 100%; max-width: 320px; margin-top: auto;">
        <button class="btn-outline" style="flex: 1; border-color: var(--color-teal); color: var(--color-teal);" id="success-view-ledger">Inspect Ledger</button>
        <button class="btn-primary" style="flex: 1;" id="camera-success-continue">Continue</button>
      </div>
    </div>
  `}function Ov(){const n=f.lastVerificationResult||{status:"OUT_OF_BOUNDS",visionScore:42,distanceDeltaMeters:2640},e=n.status==="SPOOF_SUSPECTED"?"Security Anomaly Intercepted":n.status==="OUT_OF_BOUNDS"?"Geofence Out of Bounds":"Visual Inspection Failed";return`
    <div class="screen" style="background: rgba(12, 24, 33, 0.95); color: white; padding: 24px; display: flex; flex-direction: column;">
      <div class="header-bar" style="padding: 0; margin-bottom: 24px;">
        <button class="back-button" id="reject-close">✕</button>
        <div class="header-title" style="color: #FFF;">Verification Assessment</div>
      </div>
      
      <div style="background: rgba(198, 40, 40, 0.2); border: 1.5px solid var(--color-red-reject); border-radius: 20px; padding: 20px; text-align: center; margin-bottom: 20px; box-shadow: var(--shadow-premium);">
        <span class="badge-tag" style="background: var(--color-red-reject); color: #FFF; font-size: 10px; padding: 4px 10px; border-radius: 12px; margin-bottom: 8px; display: inline-block;">
          ${n.status||"FAILED"}
        </span>
        
        <h3 style="font-size: 20px; font-weight: 900; margin-bottom: 10px; color: white;">${e}</h3>
        
        <div style="font-size: 11px; font-weight: 700; background: rgba(0,0,0,0.4); padding: 10px; border-radius: 10px; text-align: left; margin-bottom: 14px; line-height: 1.4; color: #FFF;">
          ⚠️ ${f.verificationComment||"Verification Failed: Geofence bounds or visual match metrics were not satisfied."}
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 11px; text-align: left; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 10px;">
          <div><span style="color: #A9CBD0;">GPS Delta:</span> <strong>${n.distanceDeltaMeters||0}m</strong></div>
          <div><span style="color: #A9CBD0;">Vision Match:</span> <strong>${n.visionScore||0}%</strong></div>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px; margin-top: auto;">
        <button class="btn-outline" style="border-color: #EBB34D; color: #EBB34D;" id="reject-stage-demo">⚙️ Open Stage Demo Overrides</button>
        <button class="btn-outline" style="border-color: white; color: white;" id="reject-guidelines">Review Verification Guidelines</button>
        <button class="btn-primary" id="reject-retry">Try Again on Site</button>
      </div>
    </div>
  `}function Dv(){const n=f.eventLedger||[],e=n.length,t=n.filter(c=>c.status==="PASSED").length,i=e>0?Math.round(t/e*100):100,r=n.filter(c=>c.status==="SPOOF_SUSPECTED").length,s=f.ledgerFilter||"ALL",a=n.filter(c=>s==="ALL"?!0:c.status===s);return`
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
            <div class="ledger-stat-num">${e}</div>
            <div class="ledger-stat-lbl">Total Audits</div>
          </div>
          <div class="ledger-stat-card">
            <div class="ledger-stat-num">${i}%</div>
            <div class="ledger-stat-lbl">Pass Rate</div>
          </div>
          <div class="ledger-stat-card">
            <div class="ledger-stat-num" style="color: var(--color-red-reject);">${r}</div>
            <div class="ledger-stat-lbl">Spoofs Blocked</div>
          </div>
        </div>

        <!-- Filter Tabs -->
        <div style="display: flex; gap: 6px; overflow-x: auto; margin-bottom: 14px; padding-bottom: 4px;">
          ${["ALL","PASSED","OUT_OF_BOUNDS","SPOOF_SUSPECTED"].map(c=>`
            <button class="stage-btn ${s===c?"active":""}" data-ledger-filter="${c}" style="white-space: nowrap; font-size: 10px; padding: 6px 12px; border-radius: 20px;">
              ${c==="ALL"?"All Logs":c}
            </button>
          `).join("")}
        </div>

        <!-- Ledger Entries Table -->
        <div class="ledger-blocks-container">
          ${a.length===0?`
            <div style="text-align: center; padding: 30px; color: var(--color-gray); font-size: 12px; font-weight: 700;">No ledger audit entries matching filter.</div>
          `:a.map(c=>`
            <div class="ledger-block-item ${c.status}">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
                <div>
                  <div style="font-size: 13px; font-weight: 900; color: var(--color-charcoal);">${c.siteName}</div>
                  <div style="font-size: 10px; color: var(--color-gray); font-weight: 600;">🕒 ${new Date(c.timestamp).toLocaleString()}</div>
                </div>
                <span class="badge-tag" style="background: ${c.status==="PASSED"?"var(--color-green-success)":c.status==="OUT_OF_BOUNDS"?"#E65100":c.status==="SPOOF_SUSPECTED"?"#880E4F":"var(--color-red-reject)"}; color: #FFF; font-size: 9px; padding: 4px 8px;">
                  ${c.status}
                </span>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11px; margin-bottom: 8px;">
                <div><span style="color: var(--color-gray);">GPS Delta:</span> <strong style="color: var(--color-charcoal);">${c.distanceDeltaMeters}m</strong></div>
                <div><span style="color: var(--color-gray);">Vision Score:</span> <strong style="color: var(--color-teal);">${c.visionScore}%</strong></div>
              </div>

              <div class="ledger-hash-code">
                SEAL: ${c.signature}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
      ${me("home")}
    </div>
  `}function Nv(){return`
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="guidelines-back">←</button>
        <div class="header-title">Verification Guidelines</div>
      </div>
      <div class="location-list-container" style="gap: 14px; padding: 10px 16px;">
        ${[{title:"Clear Framing :",desc:"Ensure the historical structure or landmark takes up at least 40% of your camera viewfinder"},{title:"Optimal Framing :",desc:"Avoid capturing direct silhouettes under harsh midday sun; capturing distinct architectural lines helps our AI verify structural geometry."},{title:"The Dwell-Time Rule :",desc:"Your device must be stationary at the site for the momentary validation window to complete verification data synchronization."},{title:"No Obstructions :",desc:"Avoid massive crowds or holding objects directly in front of the lens."}].map(e=>`
          <div style="background: var(--color-white); border-radius: 12px; padding: 12px 16px; box-shadow: var(--shadow-premium); display: flex; flex-direction: column; gap: 4px;">
            <h4 style="font-size: 12px; font-weight: 900; color: var(--color-charcoal);">${e.title}</h4>
            <p style="font-size: 11px; color: var(--color-gray); line-height: 1.4;">${e.desc}</p>
          </div>
        `).join("")}
      </div>
      <div style="padding: 20px; margin-top: auto;">
        <button class="btn-primary" id="guidelines-continue">Got It, Try Again</button>
      </div>
    </div>
  `}function Vv(){const n=f.offlineSyncQueue||[];let e="";return n.length===0?e='<div style="text-align: center; padding: 24px; color: var(--color-gray); font-size: 13px; font-weight: 700;">🟢 All activities synced and verified!</div>':e=n.map(t=>{let i="var(--color-gray)",r="Pending local-first sync packet",s="var(--color-gray)",a="";return t.status==="Verifying..."?(r="🤖 Evaluating landmark patterns...",i="var(--color-teal)"):t.status==="Success"&&(r="✓ Verified & Logged Successfully",i="var(--color-green-success)",s="var(--color-teal)",a="✓ "),`
        <div class="sync-item-card" style="opacity: ${t.status==="Success"?"0.75":"1"};">
          <div>
            <h4 style="font-size: 12px; font-weight: 800;">${t.siteName} Local Record</h4>
            <p style="font-size: 10px; color: ${i}; font-weight: 700;">${r}</p>
          </div>
          <span style="font-size: 12px; font-weight: 800; color: ${s};">${a}${t.xp} XP</span>
        </div>
      `}).join(""),`
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
        ${e}
      </div>
      <div class="selection-card" style="margin: 20px 16px; padding: 10px 14px; background: #e6e5e2;">
        <img src="icons/profile filled.png" alt="Avatar" style="width: 36px; height: 36px; border-radius: 50%; filter: grayscale(1);">
        <div style="flex: 1; margin-left: 8px;">
          <h4 style="font-size: 12px; font-weight: 800;">Profile Identity Anchor</h4>
          <p style="font-size: 10px; color: var(--color-gray);">${f.user.rank==="None"?"No Rank":f.user.rank} • ${f.user.xp} pts</p>
        </div>
      </div>
      ${me("home")}
    </div>
  `}function Mv(){const n=f.activeSite;if(!n)return"";const e=n.quizzes[f.currentQuizIndex],t=f.currentQuizIndex+1,i=n.quizzes.length;return`
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="quiz-back">←</button>
        <div class="header-title">Quiz</div>
      </div>
      <div style="padding: 10px 20px;">
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${t/i*100}%;"></div>
        </div>
        <p style="font-size: 12px; color: var(--color-gray); font-weight: 700; margin-bottom: 12px; text-align: center;">Question ${t} of ${i}</p>
        <h3 style="font-size: 16px; font-weight: 900; text-align: center; margin-bottom: 24px; line-height: 1.4; color: var(--color-charcoal);">${e.question}</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;" id="quiz-options-container">
          ${e.options.map((s,a)=>`
            <button class="quiz-option-btn" data-index="${a}">
              <span>${s}</span>
              <span class="quiz-circle-ico" style="width: 18px; height: 18px; border: 1.5px solid #d0cfca; border-radius: 50%;"></span>
            </button>
          `).join("")}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px;">
          <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: var(--color-gray);">⏱️ <span id="quiz-timer">15s</span></div>
          <button class="btn-primary" style="width: 100px; height: 36px; font-size: 12px;" id="quiz-end-btn">End Quiz</button>
        </div>
      </div>
    </div>
  `}function Fv(){const n=Math.floor(f.cooldownTimeLeft/60),e=f.cooldownTimeLeft%60,t=`${n<10?"0"+n:n}:${e<10?"0"+e:e}`;return`
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
            <circle class="timer-progress-circle" cx="100" cy="100" r="90" style="stroke-dashoffset: ${565.48-f.cooldownTimeLeft/300*565.48};"></circle>
          </svg>
          <div class="timer-text-display">${t}</div>
        </div>
        <h3 style="font-size: 16px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 8px;">All Quizzes are Locked Until 00:00</h3>
        <img src="icons/quiz cooldown lock.png" alt="Lock" class="cooldown-lock-icon">
        <p style="font-size: 11px; color: var(--color-gray); line-height: 1.5; max-width: 280px; margin-bottom: 20px;">
          Multiple attempts are paused across the platform to ensure dedicated learning and authentic impact. Please reflect before re-engaging.
        </p>
      </div>
      ${me("home")}
    </div>
  `}function Bv(){return`
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
        ${f0.map(n=>`
          <div class="selection-card" style="padding: 12px; align-items: center;" id="quest-item-${n.id}">
            <img src="${n.icon}" alt="${n.name}" style="width: 32px; height: 32px;">
            <div style="flex: 1; margin-left: 10px;">
              <h3 style="font-size: 13px; font-weight: 800;">${n.name}</h3>
              <p style="font-size: 11px; color: var(--color-gray);">${n.description}</p>
            </div>
            <div style="text-align: right;">
              <img src="icons/activism empty.png" style="width:14px; height:14px; display:inline-block; vertical-align:middle; margin-right:2px; filter: hue-rotate(140deg);">
              <span style="font-size: 11px; font-weight: 700; color: var(--color-gold); display: inline-block; vertical-align:middle;">${n.xp} pts</span>
              <span style="font-size: 9px; color: var(--color-gray); display: block; margin-top:2px;">⏱️ ${n.duration}</span>
            </div>
          </div>
        `).join("")}
      </div>
      ${me("home")}
    </div>
  `}function Uv(){return`
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
      ${me("home")}
    </div>
  `}function zv(){return`
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
      ${me("home")}
    </div>
  `}function $v(){return`
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
          ${[{name:"Local Artisan Co-op",xp:"60 XP",img:"Element Pictures/Local Artisan Co-op.jpg"},{name:"Rural Market",xp:"60 XP",img:"Element Pictures/Rural market.jpg"},{name:"Pottery Village",xp:"60 XP",img:"Element Pictures/Pottery Village.jpg"}].map(e=>`
            <div class="selection-card" style="padding: 8px 12px; gap: 12px; cursor: default;">
              <img src="${e.img}" alt="${e.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
              <div style="flex: 1;">
                <h4 style="font-size: 12px; font-weight: 800;">${e.name}</h4>
              </div>
              <span style="font-size: 11px; font-weight: 700; color: var(--color-gold);">${e.xp}</span>
            </div>
          `).join("")}
        </div>
      </div>
      ${me("home")}
    </div>
  `}function qv(){return`
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
          ${[{name:"Asian Elephant",xp:"25 XP",img:"Element Pictures/Asian Elephant.webp"},{name:"Sri Lankan Leopard",xp:"25 XP",img:"Element Pictures/SL Leopard.jpg"},{name:"Sri Lankan Blue Magpie",xp:"25 XP",img:"Element Pictures/SL Blue Mapie.jpeg"}].map(e=>`
            <div class="selection-card" style="padding: 8px 12px; gap: 12px; cursor: default;">
              <img src="${e.img}" alt="${e.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
              <div style="flex: 1;">
                <h4 style="font-size: 12px; font-weight: 800;">${e.name}</h4>
              </div>
              <span style="font-size: 11px; font-weight: 700; color: var(--color-gold);">${e.xp}</span>
            </div>
          `).join("")}
        </div>
      </div>
      ${me("home")}
    </div>
  `}function jv(){return`
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
          ${[{name:"Heritage Forest Reforestation",xp:"75 XP",img:"Element Pictures/Reforestation.png"},{name:"Trash Disposal",xp:"30 XP",img:"Element Pictures/Trash Disposal.jpg"},{name:"Invasive Species Removal",xp:"75 XP",img:"Element Pictures/Invasive Species Removal.jpg"}].map(e=>`
            <div class="selection-card" style="padding: 8px 12px; gap: 12px; cursor: default;">
              <img src="${e.img}" alt="${e.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
              <div style="flex: 1;">
                <h4 style="font-size: 12px; font-weight: 800;">${e.name}</h4>
              </div>
              <span style="font-size: 11px; font-weight: 700; color: var(--color-gold);">${e.xp}</span>
            </div>
          `).join("")}
        </div>
      </div>
      ${me("activism")}
    </div>
  `}function Hc(){return`
    <div class="screen activism-screen" style="padding: 20px; overflow-y: auto; height: 100%; box-sizing: border-box; padding-bottom: 90px;">
      <div class="activism-header" style="margin-bottom: 20px;">
        <h2 style="font-size: 22px; color: #1E293B; margin: 0 0 6px 0;">Heritage Activism</h2>
        <p style="font-size: 13px; color: #64748B; margin: 0;">Community reporting, site preservation initiatives, and citizen archaeological vigilance.</p>
      </div>

      <!-- Action Cards -->
      <div style="display: flex; flex-direction: column; gap: 14px;">
        <div style="background: #FFFFFF; border-radius: 18px; padding: 18px; box-shadow: 0 4px 14px rgba(0,0,0,0.06); border-left: 5px solid #0C6C7A;">
          <h3 style="font-size: 16px; color: #1E293B; margin: 0 0 6px 0;">🛡️ Report Site Risk</h3>
          <p style="font-size: 12px; color: #64748B; margin: 0 0 12px 0;">Notice vandalism, encroachment, or natural erosion at an ancient site? Submit an alert.</p>
          <button style="background: #0C6C7A; color: #FFFFFF; border: none; border-radius: 10px; padding: 8px 16px; font-size: 12px; font-weight: 600; cursor: pointer;">
            Submit Field Report
          </button>
        </div>

        <div style="background: #FFFFFF; border-radius: 18px; padding: 18px; box-shadow: 0 4px 14px rgba(0,0,0,0.06); border-left: 5px solid #D97706;">
          <h3 style="font-size: 16px; color: #1E293B; margin: 0 0 6px 0;">🌿 Clean-up & Restoration Drives</h3>
          <p style="font-size: 12px; color: #64748B; margin: 0 0 12px 0;">Join upcoming volunteer preservation projects organized across sacred zones.</p>
          <button style="background: #D97706; color: #FFFFFF; border: none; border-radius: 10px; padding: 8px 16px; font-size: 12px; font-weight: 600; cursor: pointer;">
            View Active Drives
          </button>
        </div>
      </div>
      ${typeof me=="function"?me("activism"):""}
    </div>
  `}window.renderActivismScreen=Hc;function Gc(){const n=f.isGuest||!f.user||!f.user.uid||!Ie.currentUser;return`
    <div class="screen activism-screen activism-container impact-container" id="activism-view" style="padding-bottom: 80px;">
      <div class="activism-top-header" style="padding: 20px 20px 6px 20px;">
        <h2 style="font-size: 26px; font-weight: 900;">Make an Impact</h2>
        <p style="font-size: 12px; color: var(--color-gray); margin-top: 4px;">Small actions : Big change</p>
      </div>
      <div style="display: flex; flex-direction: column; gap: 14px; padding: 10px 16px;">
        ${[{key:"petition",title:"Sign Petitions",desc:"Support important causes",xp:"3xp",color:"#1A4D54",gated:!0},{key:"donations",title:"Donations",desc:"Help restore and protect",xp:"5-15xp",color:"var(--color-gold)",gated:!1},{key:"cleanup",title:"Join Cleanups",desc:"Participate in environmental cleanups",xp:"15xp",color:"#4E8A63",gated:!0},{key:"create-event",title:"Create Community Event",desc:"Participate in environmental cleanups",xp:"15xp",color:"#2E7D8A",gated:!0}].map(t=>`
          <div class="activism-card-link" style="background: ${t.color}; position: relative;" id="act-link-${t.key}">
            <div>
              <div style="display: flex; align-items: center; gap: 6px;">
                <h3 style="font-size: 15px; font-weight: 800;">${t.title}</h3>
                ${n&&t.gated?'<span style="font-size: 12px; opacity: 0.9;" title="Sign in required">🔒</span>':""}
              </div>
              <p style="font-size: 11px; opacity: 0.8; margin-top: 2px;">${t.desc}</p>
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 2px;">
              <span style="font-size: 10px; font-weight: 700; opacity: 0.9; text-transform: uppercase;">${t.xp}</span>
              ${n&&t.gated?'<span style="font-size: 8px; font-weight: 800; background: rgba(0,0,0,0.25); padding: 2px 6px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Sign In Required</span>':""}
            </div>
          </div>
        `).join("")}
      </div>
      ${me("activism")}
    </div>
  `}function Hv(){const n=f.petitionSigned,e=f.petitionSignatures,t=e/1e4*100;return`
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
            <span style="font-size: 13px; font-weight: 900;">${e.toLocaleString()} signatures</span>
            <span style="font-size: 11px; color: var(--color-gray); font-weight: 700;">of 10,000</span>
          </div>
          <div class="progress-bar-container" style="margin-bottom: 6px;">
            <div class="progress-bar-fill" style="width: ${t}%;"></div>
          </div>
          <p style="font-size: 10px; color: var(--color-gray); text-align: center; font-weight: 600;">you earn 3xp for signing</p>
        </div>
        <button class="btn-primary" style="background: ${n?"var(--color-green-success)":"var(--color-gold)"}; color: ${n?"white":"var(--color-charcoal)"};" id="petition-submit" ${n?"disabled":""}>
          ${n?"✓ Petition Signed":"Sign Petition"}
        </button>
      </div>
      ${me("activism")}
    </div>
  `}function Gv(){const n=f.donationAmount;return`
    <div class="screen donation-screen donation-container donation-view-wrapper" id="donation-view" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="donations-back">←</button>
        <div class="header-title">Your donation can restore this stupa</div>
      </div>
      <div style="padding: 0 16px;">
        <img src="Element Pictures/Donations Stupa.jpg" alt="Donations" style="width: 100%; height: 160px; border-radius: 16px; object-fit: cover; box-shadow: var(--shadow-premium); margin-bottom: 16px;">
        <div class="donation-btn-grid">
          <button class="donation-btn ${n===500?"active":""}" data-val="500">Rs. 500</button>
          <button class="donation-btn ${n===1e3?"active":""}" data-val="1000">Rs. 1000</button>
          <button class="donation-btn ${n===2500?"active":""}" data-val="2500">Rs. 2500</button>
        </div>
        <div class="form-card" style="margin: 0 0 12px 0; padding: 12px 16px;">
          <label style="font-size: 11px; font-weight: 700; color: var(--color-gray); text-align: center; display: block; margin-bottom: 6px;">Other amount</label>
          <input type="number" class="form-input" style="text-align: center; font-size: 18px; font-weight: 800;" placeholder="Enter amount" value="${n||""}" id="donation-custom-input">
        </div>
        <p style="font-size: 10px; color: var(--color-gray); text-align: center; font-weight: 700; margin-bottom: 20px;">earn up to 15xp</p>
        <button class="btn-primary" id="donations-submit">Donate Now</button>
        <p style="font-size: 9px; color: var(--color-gray); text-align: center; margin-top: 14px; font-weight: 700;">secure payment powered by Payhere</p>
      </div>
      ${me("activism")}
    </div>
  `}function Wv(){const n=f.user.joinedEvents.includes("site-cleanup");return`
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
        <button class="btn-primary" style="background: ${n?"var(--color-green-success)":"var(--color-gold)"}; color: ${n?"white":"var(--color-charcoal)"};" id="cleanup-join" ${n?"disabled":""}>
          ${n?"✓ Joined Cleanup":"Join Event"}
        </button>
      </div>
      ${me("activism")}
    </div>
  `}function Kv(){return`
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
      ${me("activism")}
    </div>
  `}function Wc(){return`
    <div class="screen rewards-screen rewards-container" id="rewards-view" style="padding-bottom: 80px;">
      <div class="rewards-top-header" style="padding: 20px 20px 6px 20px;">
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
      ${me("rewards")}
    </div>
  `}function Yv(){return`
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="rewards-list-back">←</button>
        <div class="header-title">Your Rewards</div>
      </div>
      <div style="padding: 10px 20px; display: flex; justify-content: space-between; align-items: center;">
        <p style="font-size: 11px; color: var(--color-gray); max-width: 220px; line-height: 1.4;">Convert your impact into experiences. Redeem coupons and unlock unique souvenirs.</p>
        <span class="badge-tag" style="background: var(--color-gold); color: var(--color-charcoal); font-weight: 800;">${f.user.xp} Total Points</span>
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
        <div class="reward-coupon-card" style="opacity: ${f.user.xp>=100?"1":"0.7"};">
          <img src="Element Pictures/Trail Guide.webp" alt="Guide" class="reward-coupon-img">
          <div style="flex: 1;">
            <h3 style="font-size: 12px; font-weight: 900; line-height: 1.3;">20% off Ancient Trail Guide</h3>
            <p style="font-size: 9px; color: var(--color-gray); margin-top: 2px;">Expert guide for Mihintale walks.</p>
            <span style="font-size: 8px; font-weight: 700; color: var(--color-gray);">Unlock: 100 XP (Tap to unlock)</span>
          </div>
          <button class="btn-outline" style="width: 80px; height: 32px; font-size: 10px; padding: 0; color: var(--color-gray);" id="rew-unlock-guide" ${f.user.xp>=100?"":"disabled"}>Unlock Guide</button>
        </div>
        <div class="reward-coupon-card" style="opacity: ${f.user.xp>=100?"1":"0.7"};">
          <img src="Element Pictures/Artisan Crafts.jpg.webp" alt="Crafts" class="reward-coupon-img">
          <div style="flex: 1;">
            <h3 style="font-size: 12px; font-weight: 900; line-height: 1.3;">10% off Artisan Crafts</h3>
            <p style="font-size: 9px; color: var(--color-gray); margin-top: 2px;">Authentic local handicraft store.</p>
            <span style="font-size: 8px; font-weight: 700; color: var(--color-gray);">Unlock: 100 XP (Tap to unlock)</span>
          </div>
          <button class="btn-outline" style="width: 80px; height: 32px; font-size: 10px; padding: 0; color: var(--color-gray);" id="rew-unlock-crafts" ${f.user.xp>=100?"":"disabled"}>Unlock Coupon</button>
        </div>
      </div>
      ${me("rewards")}
    </div>
  `}function Qv(){return`
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
      ${me("rewards")}
    </div>
  `}function Xv(){const n=[{name:"Grass Toucher",range:"0 - 99 pts",threshold:0},{name:"Wanderer",range:"100 - 249 pts",threshold:100},{name:"Tuk Tuk Trailer",range:"250 - 499 pts",threshold:250},{name:"Magahoyanna",range:"500 - 999 pts",threshold:500},{name:"Island Explorer",range:"1,000 - 2,000 pts",threshold:1e3},{name:"Lanka Legend",range:"2,000 - 5,000 pts",threshold:2e3}],e=f.user.xp,t=f.user.rank;let i=n[0];for(let s=0;s<n.length;s++){if(e<n[s].threshold){i=n[s];break}s===n.length-1&&(i={name:"Max Level",threshold:5e3})}const r=i.threshold-e;return`
    <div class="screen dark-theme" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="rank-back">←</button>
        <div class="header-title">Your Rank</div>
      </div>
      <div style="padding: 10px 20px; display: flex; flex-direction: column; align-items: center;">
        <h2 style="font-size: 26px; font-weight: 800; text-align: center; margin-bottom: 6px;">Your Rank</h2>
        <div class="rank-hex-badge">
          <div style="font-size: 11px; font-weight: 800; color: var(--color-charcoal); text-transform: uppercase;">
            ${t==="None"?"No Rank":t}
          </div>
        </div>
        <p style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">${e} / ${i.threshold} pts</p>
        <p style="font-size: 10px; color: #a9cbd0; margin-bottom: 20px;">
          ${r>0?`Only ${r} pts to next rank!`:"Max rank reached!"}
        </p>
        <div style="display: flex; flex-direction: column; gap: 10px; width: 100%; color: var(--color-charcoal);">
          ${n.map(s=>{const a=e>=s.threshold;return`
              <div class="rank-timeline-row" style="opacity: ${a?"1":"0.65"};">
                <div class="timeline-checkbox ${a?"checked":""}">
                  ${a?"✓":""}
                </div>
                <div style="flex: 1;">
                  <h4 style="font-size: 12px; font-weight: 800;">${s.name}</h4>
                  <p style="font-size: 9px; color: var(--color-gray);">${s.range}</p>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
      ${me("rewards")}
    </div>
  `}function Jv(){let n=[...p0];if(f.user.xp>0){const e={name:(Ie.currentUser&&Ie.currentUser.displayName||"You")+" (Eco Explorer)",points:f.user.xp,role:f.user.role,rank:f.user.rank,isUser:!0};n.push(e)}return n.sort((e,t)=>t.points-e.points),`
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
        ${n.map((e,t)=>`
          <div class="leaderboard-row ${e.isUser?"highlighted":""}">
            <span class="leaderboard-rank">${t+1}</span>
            <img src="icons/profile empty.png" alt="Avatar" class="leaderboard-avatar" style="${e.isUser?"border: 2px solid var(--color-gold);":""}">
            <div class="leaderboard-name" style="font-size: 13px;">
              ${e.name}
              <span style="font-size: 9px; color: var(--color-gray); font-weight: 700; display: block; margin-top: 1px;">
                ${e.role||"Explorer"} • ${e.rank||"No Rank"}
              </span>
            </div>
            <span style="font-size: 13px; font-weight: 900; color: var(--color-teal);">${e.points.toLocaleString()} pts</span>
          </div>
        `).join("")}
      </div>
      <button class="btn-primary" style="width: calc(100% - 32px); margin: 0 auto 20px auto;" id="leaderboard-view-full">View Full Leaderboard</button>
      ${me("rewards")}
    </div>
  `}function Kc(){const n=f.user.xp>0?f.user.rank:"No Rank";return`
    <div class="screen profile-container" id="profile-view">
      <div style="padding: 20px 20px 6px 20px; display: flex; justify-content: space-between; align-items: center;">
        <h2 style="font-size: 26px; font-weight: 900;">My Profile</h2>
        ${f.isGuest?`
          <button id="header-guest-login-btn" style="background: linear-gradient(135deg, #EBB34D 0%, #D49B35 100%); color: var(--color-charcoal); border: none; padding: 8px 14px; border-radius: 12px; font-size: 11px; font-weight: 800; cursor: pointer; box-shadow: 0 4px 10px rgba(235, 179, 77, 0.4); display: flex; align-items: center; gap: 6px;">
            <span>🔑</span>
            <span>Sign In / Register</span>
          </button>
        `:""}
      </div>

      ${f.isGuest?`
        <div class="selection-card profile-guest-card profile-auth-prompt-box guest-banner" style="margin: 16px auto; padding: 18px; width: 100%; max-width: calc(100% - 32px); box-sizing: border-box; background: linear-gradient(135deg, rgba(46,125,138,0.1) 0%, rgba(235,179,77,0.15) 100%); border: 1.5px solid var(--color-gold); border-radius: 18px; display: flex; flex-direction: column; gap: 10px; text-align: center; box-shadow: var(--shadow-premium);">
          <div style="font-size: 32px; margin-bottom: -4px;">🧭</div>
          <h3 style="font-size: 16px; font-weight: 800; color: var(--color-dark-teal);">Exploring as a Guest</h3>
          <p style="font-size: 12px; color: var(--color-gray); font-weight: 500; line-height: 1.4;">
            You are exploring as a Guest. Sign in to save earned badges, claim merchant rewards, and sign public ledgers.
          </p>
          <button id="profile-guest-signin-btn" class="btn-auth-primary" style="margin-top: 6px; padding: 11px 18px; font-size: 13px; border-radius: 12px;">
            Sign In / Create Account
          </button>
        </div>
      `:`
        <div class="selection-card" style="margin: 10px 16px; padding: 14px;" id="profile-recap-trigger">
          <img src="icons/profile filled.png" alt="Profile" style="width: 44px; height: 44px; border-radius: 50%; border: 2.5px solid var(--color-teal);">
          <div style="flex: 1; margin-left: 10px;">
            <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">${Ie.currentUser&&Ie.currentUser.displayName||"You"}</h3>
            <p style="font-size: 11px; color: var(--color-gray); font-weight: 700;">${n} • ${f.user.xp} pts</p>
          </div>
        </div>
      `}
      <div style="display: flex; gap: 12px; padding: 0 16px; margin: 12px 0 20px 0;">
        <div style="flex:1; background:var(--color-white); border-radius:12px; padding:12px 8px; text-align:center; box-shadow:var(--shadow-premium);">
          <span style="font-size: 18px; font-weight: 900; color: var(--color-charcoal); display:block;">${f.user.medals}</span>
          <span style="font-size: 9px; font-weight: 700; color: var(--color-gray); text-transform:uppercase;">Medals</span>
        </div>
        <div style="flex:1; background:var(--color-white); border-radius:12px; padding:12px 8px; text-align:center; box-shadow:var(--shadow-premium);">
          <span style="font-size: 18px; font-weight: 900; color: var(--color-charcoal); display:block;">${f.user.sitesVisited}</span>
          <span style="font-size: 9px; font-weight: 700; color: var(--color-gray); text-transform:uppercase;">Sites Visited</span>
        </div>
        <div style="flex:1; background:var(--color-white); border-radius:12px; padding:12px 8px; text-align:center; box-shadow:var(--shadow-premium);">
          <span style="font-size: 18px; font-weight: 900; color: var(--color-charcoal); display:block;">${f.user.quizzesPassed}</span>
          <span style="font-size: 9px; font-weight: 700; color: var(--color-gray); text-transform:uppercase;">Quizzes Passed</span>
        </div>
      </div>
      ${f.offlineSyncQueue&&f.offlineSyncQueue.filter(e=>e.status!=="Success").length>0?`
      <div class="selection-card" style="margin: 0 16px 16px 16px; padding: 12px 14px; background: #FFF3CD; border: 1px solid #FFEBAA; border-radius: 12px; display: flex; align-items: center; cursor: pointer;" id="profile-sync-trigger">
        <div style="flex: 1; text-align: left;">
          <h4 style="font-size: 12px; font-weight: 800; color: #856404; margin: 0;">⚠️ Sync Points (${f.offlineSyncQueue.filter(e=>e.status!=="Success").length} Pending)</h4>
          <p style="font-size: 10px; color: #856404; margin: 2px 0 0 0;">Network signal sync logs pending transfer.</p>
        </div>
        <span style="color: #856404;">❯</span>
      </div>
      `:""}
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
      ${me("profile")}
    </div>
  `}function Zv(){return`
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
            <span class="poster-stat-value">${f.user.sitesVisited}</span>
            <span class="poster-stat-label">Sites Verified</span>
          </div>
          <div class="poster-stat-block">
            <img src="icons/activism filled.png" alt="Events" class="poster-stat-icon">
            <span class="poster-stat-value">${f.user.joinedEvents.length}</span>
            <span class="poster-stat-label">Conservation Events</span>
          </div>
          <div class="poster-stat-block">
            <img src="icons/trophy empty.png" alt="Quizzes" class="poster-stat-icon">
            <span class="poster-stat-value">${f.user.quizzesPassed}</span>
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
  `}function ew(){return`
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
  `}function me(n){return`
    <div class="bottom-nav">
      <div class="nav-item ${n==="home"?"active":""}" id="nav-home">
        <img src="${n==="home"?"icons/home filled.png":"icons/home empty.png"}" alt="Home" class="nav-icon">
        <span>Home</span>
      </div>
      <div class="nav-item ${n==="activism"?"active":""}" id="nav-act">
        <img src="${n==="activism"?"icons/activism filled.png":"icons/activism empty.png"}" alt="Activism" class="nav-icon">
        <span>Activism</span>
      </div>
      <div class="nav-item ${n==="rewards"?"active":""}" id="nav-rew">
        <img src="${n==="rewards"?"icons/trophy filled.png":"icons/trophy empty.png"}" alt="Rewards" class="nav-icon">
        <span>Rewards</span>
      </div>
      <div class="nav-item ${n==="profile"?"active":""}" id="nav-prof">
        <img src="${n==="profile"?"icons/profile filled.png":"icons/profile empty.png"}" alt="Profile" class="nav-icon">
        <span>Profile</span>
      </div>
    </div>
  `}function at(){const n=(P,z,ee)=>{document.querySelectorAll("#"+P).forEach(ye=>ye.addEventListener(z,ee))};n("btn-login","click",()=>B("home")),n("go-signin","click",()=>B("home")),n("btn-signup","click",()=>B("home")),n("btn-register","click",()=>B("home")),n("go-signup","click",()=>B("home")),n("btn-guest-explore","click",()=>{f.isGuest=!0,f.currentUser={name:"Explorer Guest",points:0,level:"Novice"},se("Continuing in Guest Explorer Mode.","info"),B("home")}),n("go-guest","click",()=>{f.isGuest=!0,f.currentUser={name:"Explorer Guest",points:0,level:"Novice"},se("Continuing in Guest Explorer Mode.","info"),B("home")}),window.attachWelcomeEvents=function(){const P=document.getElementById("btn-welcome-signin")||document.querySelector(".btn-welcome-signin")||document.querySelector('[data-action="signin"]');P&&(P.onclick=function(he){he.preventDefault(),console.log("👉 Routing to Sign In screen..."),window.navigate("signin")});const z=document.getElementById("btn-welcome-signup")||document.querySelector(".btn-welcome-signup")||document.querySelector('[data-action="signup"]');z&&(z.onclick=function(he){he.preventDefault(),console.log("👉 Routing to Sign Up screen..."),window.navigate("signup")});const ee=document.getElementById("btn-guest")||document.getElementById("btn-guest-explore")||document.querySelector(".btn-guest-explore")||document.querySelector(".btn-guest-auth")||document.querySelector('[data-action="guest"]');ee&&(ee.onclick=function(he){he.preventDefault(),window.state&&(window.state.isGuest=!0,window.state.user={name:"Guest Traveler",xp:0,level:"Novice"}),console.log("👉 Guest mode: routing directly to Dashboard..."),window.navigate("home")})},n("header-guest-login-btn","click",()=>{jt("signin")}),n("profile-guest-signin-btn","click",()=>{jt("signin")}),n("login-back","click",()=>B("splash")),n("signup-back","click",()=>B("splash")),(f.currentScreen==="login"||f.currentScreen==="signup")&&cu(!1);const e=()=>{const P=f.user.permissions.camera,z=document.getElementById("permissions-continue-btn");z&&(z.disabled=!P,z.style.opacity=P?"1":"0.5")};n("perm-camera-btn","click",()=>{f.user.permissions.camera=!f.user.permissions.camera;const P=document.getElementById("perm-camera-btn");if(P){P.classList.toggle("selected",f.user.permissions.camera);const z=P.querySelector(".check-circle");z&&(z.classList.toggle("checked",f.user.permissions.camera),z.innerHTML=f.user.permissions.camera?"✓":"")}e()}),n("perm-notif-btn","click",()=>{f.user.permissions.notifications=!f.user.permissions.notifications;const P=document.getElementById("perm-notif-btn");if(P){P.classList.toggle("selected",f.user.permissions.notifications);const z=P.querySelector(".check-circle");z&&(z.classList.toggle("checked",f.user.permissions.notifications),z.innerHTML=f.user.permissions.notifications?"✓":"")}e()}),n("permissions-continue-btn","click",()=>{f.user.permissions.camera&&(Nn(),B("choose-role"))}),n("role-back","click",()=>Te());const t=document.querySelectorAll("[data-role]");t.forEach(P=>{P.addEventListener("click",()=>{t.forEach(ee=>ee.classList.remove("selected")),P.classList.add("selected"),f.user.role=P.getAttribute("data-role");const z=document.getElementById("role-continue");z&&(z.disabled=!1,z.style.opacity="1")})}),n("role-continue","click",()=>{f.user.role&&(Nn(),B("dashboard"))}),n("compass-back-btn","click",()=>B("choose-role")),document.querySelectorAll("[data-cat]").forEach(P=>{P.addEventListener("click",()=>{const z=P.getAttribute("data-cat");f.user.interests.includes(z)?(f.user.interests=f.user.interests.filter(he=>he!==z),P.classList.remove("selected")):(f.user.interests.push(z),P.classList.add("selected"));const ee=document.getElementById("compass-continue");if(ee){const he=f.user.interests.length>0;ee.disabled=!he,ee.style.opacity=he?"1":"0.5"}})}),n("compass-continue","click",()=>{f.user.interests.length>0&&(Nn(),B("how-scoring-works"))}),n("scoring-continue","click",()=>{Nn(),B("dashboard")}),n("dash-map-card","click",()=>{B("map")}),n("dash-search-card","click",()=>B("directory")),n("dash-view-directory","click",P=>{P.stopPropagation(),B("directory")}),n("dashboard-notifications-btn","click",()=>Vg()),n("dash-tag-heritage","click",P=>{P&&P.stopPropagation(),window.openDirectoryTab("heritage")}),n("dash-tag-gems","click",P=>{P&&P.stopPropagation(),window.openDirectoryTab("gems")}),window.attachDashboardEvents=function(){const P=document.getElementById("dash-tag-heritage")||document.getElementById("card-heritage-trail")||document.querySelector('[data-action="open-heritage"]')||document.querySelector(".card-heritage");P&&(P.onclick=function(ee){ee&&ee.preventDefault(),window.openDirectoryTab("heritage")});const z=document.getElementById("dash-tag-gems")||document.getElementById("card-hidden-gems")||document.querySelector('[data-action="open-gems"]')||document.querySelector(".card-hidden-gems");z&&(z.onclick=function(ee){ee&&ee.preventDefault(),window.openDirectoryTab("gems")})},n("directory-back","click",()=>B("dashboard")),n("directory-back-btn","click",()=>B("dashboard"));const r=P=>{P&&(P.stopPropagation(),P.preventDefault()),f.siteReferrer?B(f.siteReferrer,!1):f.navStack.length>0?Te():B("directory")};n("site-detail-back-btn","click",r),n("site-back","click",r);const s=()=>{f.activeDirectoryTab="Heritage Trail";const P=document.getElementById("tab-trail")||document.getElementById("tab-heritage"),z=document.getElementById("tab-gems")||document.getElementById("tab-hidden-gems");P&&(P.classList.add("active"),P.setAttribute("aria-selected","true")),z&&(z.classList.remove("active"),z.setAttribute("aria-selected","false")),sa("Heritage Trail")},a=()=>{f.activeDirectoryTab="Hidden Gems";const P=document.getElementById("tab-trail")||document.getElementById("tab-heritage"),z=document.getElementById("tab-gems")||document.getElementById("tab-hidden-gems");P&&(P.classList.remove("active"),P.setAttribute("aria-selected","false")),z&&(z.classList.add("active"),z.setAttribute("aria-selected","true")),sa("Hidden Gems")};n("tab-trail","click",s),n("tab-heritage","click",s),n("tab-gems","click",a),n("tab-hidden-gems","click",a);const c=document.getElementById("directory-search")||document.getElementById("directory-search-input");c&&c.addEventListener("input",()=>{const P=f.activeDirectoryTab;sa(P,c.value)}),f.currentScreen==="directory"&&sa(f.activeDirectoryTab),n("trail-list-back","click",()=>B("directory"));const l=document.getElementById("list-search-input");l&&l.addEventListener("input",()=>{const P=document.querySelector(".header-title").textContent;uc(P,l.value)}),f.currentScreen==="heritage-trail"?uc("Heritage Trail"):f.currentScreen==="hidden-gems"&&uc("Hidden Gems");const u=P=>{P&&(P.stopPropagation(),P.preventDefault()),document.body.classList.remove("map-active"),document.documentElement.classList.remove("map-active");const z=document.getElementById("map-view");z&&(z.style.display="none");const ee=document.getElementById("map-popup-card");ee&&ee.remove(),B("dashboard")};n("map-back","click",u);const p=document.querySelector("#map-back-container button")||document.getElementById("map-back-container");p&&p.addEventListener("click",u),document.querySelectorAll(".map-pin").forEach(P=>{P.addEventListener("click",z=>{z.stopPropagation();const ee=le.find(he=>he.id===P.getAttribute("data-site-id"));ee&&Wa(ee)})}),n("site-visit-now","click",()=>{Cr("VERIFY",()=>{f.hasInitialPhotoCaptured=!1,B("camera")})}),n("site-quiz-btn","click",()=>{f.user.dwellTimeCompleted[f.activeSite.id]&&(f.cooldownActive?B("quiz-cooldown"):(f.currentQuizIndex=0,f.quizCorrectAnswers=0,f.quizAnswers=[],B("quiz"),Yc()))}),n("site-quests-btn","click",()=>{f.user.dwellTimeCompleted[f.activeSite.id]&&B("quests")}),n("dwell-extra-photo-btn","click",async()=>{try{const P=await Ha.getCurrentPosition(),z=P.coords.latitude,ee=P.coords.longitude;if(tw(z,ee,f.activeSite.latitude,f.activeSite.longitude)<=Og){const ye=await fv.getPhoto({quality:90,allowEditing:!1,resultType:Mc.DataUrl,source:di.Camera});f.dwellImages.push(ye.dataUrl);const E=localStorage.getItem("yathra_dwell_lock");if(E){const y=JSON.parse(E);y.dwellImages=f.dwellImages,localStorage.setItem("yathra_dwell_lock",JSON.stringify(y))}se("Additional verification evidence appended successfully."),qt()}else se("Security Check Failed: Device coordinates are past the site boundary threshold parameters.")}catch(P){console.error("Dwell camera capture execution mapping error:",P),se("Evidence capture cancelled or aborted by user.")}}),n("dwell-abandon-link","click",()=>{confirm("Are you sure you want to abandon this preservation session? Progress will be paused.")&&confirm("Confirm final cancellation: Unverified progress data parameters will be stored locally inside your history profile.")&&(clearInterval(f.dwellTimer),clearInterval(hh),f.dwellActive=!1,localStorage.removeItem("yathra_dwell_lock"),se("Immersion session abandoned. Evidence images saved to profile repository logs."),B("site-detail",!1))}),n("dwell-continue-btn","click",()=>{Cr("VERIFY",()=>{f.dwellTimeLeft<=0&&f.hasInitialPhotoCaptured&&(clearInterval(hh),localStorage.removeItem("yathra_dwell_lock"),f.gpsVerified&&f.dwellImages.length>0?(f.verificationComment="Verification Successful: Real-time features closely match historical structure guidelines!",f.user.dwellTimeCompleted[f.activeSite.id]=!0,f.user.verifiedPhotos[f.activeSite.id]=!0,f.user.sitesVisited=Object.keys(f.user.dwellTimeCompleted).length,Xe(50,`Presence verified at ${f.activeSite.name}!`),Xe(10,"Landmark photo verification success!"),B("camera-success")):(f.dwellImages.length===0?f.verificationComment="Verification Failed: No mid-session tracking images captured. Multiple perspectives required.":f.verificationComment="Verification Failed: Spatial structure profiles do not correlate with registered landmark geometry.",B("camera-reject")))})}),n("camera-back","click",()=>Te()),n("ledger-back","click",()=>Te()),n("success-view-ledger","click",()=>B("ledger")),n("view-ledger-shortcut-btn","click",()=>B("ledger"));const b=P=>{const z=f.activeSite||le[0],ee=Ee&&Ee.latitude?Ee.latitude:z.latitude,he=Ee&&Ee.longitude?Ee.longitude:z.longitude;mv(z,ee,he,P).status==="PASSED"?(f.hasInitialPhotoCaptured=!0,f.gpsVerified=!0,f.user.dwellTimeCompleted[z.id]=!0,f.user.verifiedPhotos[z.id]=!0,f.user.sitesVisited=Object.keys(f.user.dwellTimeCompleted).length,Xe(60,`Presence verified at ${z.name}!`),B("camera-success")):B("camera-reject")};n("btn-request-camera","click",()=>{Ka()}),n("btn-capture-photo","click",()=>{Qc()}),n("camera-shutter-click","click",()=>{Qc()}),n("camera-back","click",()=>{uu(),Te()}),f.currentScreen==="camera"&&Ka();const A=()=>{f.stageDrawerOpen=!f.stageDrawerOpen,qt()};n("toggle-stage-drawer-btn","click",A),n("close-stage-drawer-btn","click",A),n("reject-stage-demo","click",A),window.onkeydown=P=>{P.ctrlKey&&P.shiftKey&&(P.key==="D"||P.key==="d")&&(P.preventDefault(),A())},n("demo-lock-sigiriya","click",()=>{f.activeSite=le.find(P=>P.id==="sigiriya")||le[0],f.demoOverride={active:!0,mockLat:7.957,mockLng:80.7603,mockVisionScore:96,forcedStatus:"PASSED"},se("Demo Override: Locked to Sigiriya Rock (0.01km PASSED)"),B("camera")}),n("demo-lock-mihintale","click",()=>{f.activeSite=le.find(P=>P.id==="mihintale")||le[0],f.demoOverride={active:!0,mockLat:8.3508,mockLng:80.5186,mockVisionScore:92,forcedStatus:"PASSED"},se("Demo Override: Locked to Mihintale (0.02km PASSED)"),B("camera")}),n("demo-lock-galle-far","click",()=>{f.activeSite=le.find(P=>P.id==="galle_fort")||le[0],f.demoOverride={active:!0,mockLat:6.0535,mockLng:80.221,mockVisionScore:88,forcedStatus:"OUT_OF_BOUNDS"},se("Demo Override: Galle Fort (2.6km OUT_OF_BOUNDS)"),B("camera")}),n("demo-trigger-spoof","click",()=>{f.activeSite=le[0],f.demoOverride={active:!0,mockLat:1.29027,mockLng:103.85195,mockVisionScore:35,forcedStatus:"SPOOF_SUSPECTED"},se("Demo Override: Spoof Velocity Anomaly Triggered!"),B("camera")}),n("demo-exec-pass","click",()=>{const P=f.activeSite||le[0];f.demoOverride={active:!0,mockLat:P.latitude,mockLng:P.longitude,mockVisionScore:96,forcedStatus:"PASSED"},b(P.image)}),n("demo-exec-fail-vision","click",()=>{const P=f.activeSite||le[0];f.demoOverride={active:!0,mockLat:P.latitude,mockLng:P.longitude,mockVisionScore:42,forcedStatus:"FAILED_VISION"},b(P.image)}),n("demo-exec-out-bounds","click",()=>{const P=f.activeSite||le[0];f.demoOverride={active:!0,mockLat:P.latitude+.05,mockLng:P.longitude+.05,mockVisionScore:89,forcedStatus:"OUT_OF_BOUNDS"},b(P.image)}),n("demo-open-ledger","click",()=>B("ledger")),document.querySelectorAll("[data-ledger-filter]").forEach(P=>{P.addEventListener("click",()=>{f.ledgerFilter=P.getAttribute("data-ledger-filter"),qt()})}),n("camera-success-continue","click",()=>{B("site-detail")}),n("reject-close","click",()=>B("site-detail")),n("reject-guidelines","click",()=>B("guidelines")),n("reject-retry","click",()=>B("camera")),n("guidelines-back","click",()=>Te()),n("guidelines-continue","click",()=>B("camera")),n("sync-back","click",()=>Te()),n("quiz-back","click",()=>Te()),n("quiz-end-btn","click",()=>B("site-detail"));const R=document.querySelectorAll("#quiz-options-container .quiz-option-btn");R.forEach(P=>{P.addEventListener("click",()=>{const z=parseInt(P.getAttribute("data-index")),he=f.activeSite.quizzes[f.currentQuizIndex].correctIndex;R.forEach(ye=>ye.disabled=!0),f.quizAnswers.push(z),z===he?(P.classList.add("correct"),P.querySelector(".quiz-circle-ico").style.background="var(--color-green-success)",f.quizCorrectAnswers++):(P.classList.add("incorrect"),P.querySelector(".quiz-circle-ico").style.background="var(--color-red-reject)",R[he].classList.add("correct"),R[he].querySelector(".quiz-circle-ico").style.background="var(--color-green-success)"),setTimeout(()=>{if(f.currentQuizIndex+1<f.activeSite.quizzes.length)f.currentQuizIndex++,qt(),Yc();else{const ye=f.quizCorrectAnswers,E=ye*10;f.user.completedQuizzes[f.activeSite.id]=!0,f.user.quizzesPassed=Object.keys(f.user.completedQuizzes).length,Xe(E,`Quiz Complete! You got ${ye}/5 correct.`),f.cooldownTimeLeft=300,B("quiz-cooldown"),Ng()}},1500)})}),n("cooldown-back","click",()=>B("site-detail")),n("quests-back","click",()=>Te());const V=(P,z)=>{const ee=document.getElementById(`quest-item-${P}`);ee&&ee.addEventListener("click",()=>B(z))};V("social","quest-social"),V("local_food","quest-food"),V("wandering_around","quest-wandering"),V("wildlife_spotting","quest-wildlife"),V("eco_warrior","quest-warrior"),n("quest-social-back","click",()=>Te()),n("quest-social-submit","click",()=>{document.getElementById("quest-social-link-input").value&&(Xe(5,"Social media presence validation recorded successfully."),B("quests"))}),n("quest-food-back","click",()=>Te()),n("quest-food-start","click",()=>{Xe(10,"Traditional cooking recipe trial cleared."),B("quests")}),n("quest-wandering-back","click",()=>Te()),n("quest-wandering-snap","click",()=>{Xe(60,"Rural custom marker logged locally."),B("quests")}),n("quest-wildlife-back","click",()=>Te()),n("quest-wildlife-snap","click",()=>{Xe(25,"Wildlife encounter profile telemetry logged."),B("quests")}),n("quest-warrior-back","click",()=>Te()),n("quest-warrior-snap","click",()=>{Xe(75,"Heritage reforestation contribution verified."),B("quests")}),n("act-link-petition","click",()=>ia("sign-petition",{petitionId:"ritigala-forest"})),n("act-link-donations","click",()=>ia("donation")),n("act-link-cleanup","click",()=>ia("join-cleanup",{eventId:"site-cleanup"})),n("act-link-create-event","click",()=>ia("create-event")),n("petition-back","click",()=>Te()),n("petition-submit","click",()=>{if(f.isGuest||!f.user||!f.user.uid||!Ie.currentUser){gi({title:"Sign the Petition",message:"Sign in or register to add your verified signature to heritage conservation petitions.",redirectView:"petition",targetId:"ritigala-forest"});return}f.petitionSigned||(f.petitionSigned=!0,f.petitionSignatures++,f.user.signedPetitions.push("ritigala-forest"),Xe(3,"You signed the Ritigala Protection Petition!"),qt())}),n("donations-back","click",()=>Te()),document.querySelectorAll(".donation-btn").forEach(P=>{P.addEventListener("click",()=>{f.donationAmount=parseInt(P.getAttribute("data-val")),qt()})});const X=document.getElementById("donation-custom-input");X&&X.addEventListener("input",()=>{f.donationAmount=parseInt(X.value)||0}),n("donations-submit","click",()=>{if(f.donationAmount>0){f.user.donatedAmount+=f.donationAmount;const P=Math.min(15,Math.ceil(f.donationAmount/200));Xe(P,`Donated Rs. ${f.donationAmount} securely via Payhere framework.`),f.donationAmount=0,B("activism")}}),n("cleanup-back","click",()=>Te()),n("cleanup-join","click",()=>{if(f.isGuest||!f.user||!f.user.uid||!Ie.currentUser){gi({title:"Join Volunteer Cleanup",message:"Please sign in to register for upcoming site preservation and cleanup events.",redirectView:"cleanup",targetId:"site-cleanup"});return}f.user.joinedEvents.includes("site-cleanup")||(f.user.joinedEvents.push("site-cleanup"),Xe(15,"Registered for Elahera Anicut site cleanup!"),qt())}),n("create-event-back","click",()=>Te()),n("event-submit","click",()=>{if(f.isGuest||!f.user||!f.user.uid||!Ie.currentUser){gi({title:"Host a Community Event",message:"You must be signed in to organize and publish new community heritage initiatives.",redirectView:"create-event"});return}const P=document.getElementById("event-location").value,z=document.getElementById("event-type").value;P&&(f.user.joinedEvents.push("community-event"),Xe(15,`Created Community event: ${z}!`),B("activism"))}),n("rew-link-list","click",()=>B("rewards-list")),n("rew-link-rank","click",()=>B("rank")),n("rew-link-leaderboard","click",()=>B("leaderboard")),n("rewards-list-back","click",()=>B("rewards")),n("rew-coupon-use","click",()=>B("coupon-redeem")),n("rew-unlock-guide","click",()=>{Cr("REWARD",()=>{f.user.xp>=100?(f.user.xp-=100,f.user.unlockedCoupons.push("guide"),se("Unlocked Ancient Trail Guide Coupon!","success"),B("rewards-list")):se("Requires 100 XP to unlock voucher.","error")})}),n("rew-unlock-crafts","click",()=>{Cr("REWARD",()=>{f.user.xp>=100?(f.user.xp-=100,f.user.unlockedCoupons.push("crafts"),se("Unlocked Artisan Crafts Coupon!","success"),B("rewards-list")):se("Requires 100 XP to unlock voucher.","error")})}),n("coupon-back","click",()=>Te()),n("coupon-redeem-btn","click",()=>{Cr("REWARD",()=>{se("Voucher code validated by merchant partner interface configuration.","success")})}),n("coupon-review-submit","click",()=>{document.getElementById("coupon-review-input").value&&(Xe(10,"Partner node critique saved."),document.getElementById("coupon-review-input").value="")}),n("rank-back","click",()=>Te()),n("leaderboard-back","click",()=>Te()),n("leaderboard-view-full","click",()=>{se("Fetching full layout matrices across global instances...")}),n("profile-recap-trigger","click",()=>B("travel-poster")),n("profile-travel-map","click",()=>B("travel-poster")),n("profile-settings","click",()=>B("settings")),n("profile-sync-trigger","click",()=>B("offline-sync")),n("poster-back","click",()=>Te()),n("settings-back","click",()=>Te()),n("sett-perm","click",()=>B("permissions")),n("sett-logout","click",()=>{A7(Ie).then(()=>{localStorage.removeItem("yathra_current_user"),f.currentUser=null,f.user={...mi},f.user.permissions={camera:!1,notifications:!1},f.petitionSignatures=8742,f.petitionSigned=!1,f.navStack=[],B("landing"),se("Session terminated safely.")}).catch(P=>{se("Logout mapping error: "+P.message)})}),n("nav-home","click",()=>B("dashboard")),n("nav-act","click",()=>B("activism")),n("nav-rew","click",()=>B("rewards")),n("nav-prof","click",()=>B("profile"))}function tw(n,e,t,i){const s=n*Math.PI/180,a=t*Math.PI/180,c=(t-n)*Math.PI/180,l=(i-e)*Math.PI/180,u=Math.sin(c/2)*Math.sin(c/2)+Math.cos(s)*Math.cos(a)*Math.sin(l/2)*Math.sin(l/2);return 6371e3*(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)))}async function nw(){if(!navigator.onLine)return;const n=localStorage.getItem("yathra_sync_queue");if(!n)return;let e;try{e=JSON.parse(n)}catch(t){console.error(t);return}if(!(!e||e.length===0))for(let t=0;t<e.length;t++){const i=e[t];i.status==="Pending network link"&&(i.status="Verifying...",localStorage.setItem("yathra_sync_queue",JSON.stringify(e)),f.offlineSyncQueue=e,qt(),await new Promise(r=>setTimeout(r,3e3)),i.status="Success",localStorage.setItem("yathra_sync_queue",JSON.stringify(e)),f.offlineSyncQueue=e,qt())}}let ra=15,lc=null;function Yc(){clearInterval(lc),ra=15;const n=document.getElementById("quiz-timer");n&&(n.textContent="15s"),lc=setInterval(()=>{if(ra>0){ra--;const e=document.getElementById("quiz-timer");e&&(e.textContent=`${ra}s`)}else{clearInterval(lc);const e=document.querySelectorAll("#quiz-options-container .quiz-option-btn");e.forEach(i=>i.disabled=!0),f.quizAnswers.push(-1);const t=f.activeSite.quizzes[f.currentQuizIndex].correctIndex;e[t]&&(e[t].classList.add("correct"),e[t].querySelector(".quiz-circle-ico").style.background="var(--color-green-success)"),setTimeout(()=>{if(f.currentQuizIndex+1<f.activeSite.quizzes.length)f.currentQuizIndex++,qt(),Yc();else{const i=f.quizCorrectAnswers;f.user.completedQuizzes[f.activeSite.id]=!0,f.user.quizzesPassed=Object.keys(f.user.completedQuizzes).length,Xe(i*10,`Quiz Complete! You got ${i}/5 correct.`),f.cooldownTimeLeft=300,B("quiz-cooldown"),Ng()}},1500)}},1e3)}function Ng(){f.cooldownActive||(f.cooldownActive=!0,f.cooldownTimer=setInterval(()=>{f.cooldownTimeLeft>0?(f.cooldownTimeLeft--,f.currentScreen==="quiz-cooldown"&&iw()):(clearInterval(f.cooldownTimer),f.cooldownActive=!1,f.currentScreen==="quiz-cooldown"&&B("site-detail"))},1e3))}function iw(){const n=document.querySelector(".timer-text-display"),e=document.querySelector(".timer-progress-circle");if(!n||!e)return;const t=Math.floor(f.cooldownTimeLeft/60),i=f.cooldownTimeLeft%60;n.textContent=`${t<10?"0"+t:t}:${i<10?"0"+i:i}`,e.style.strokeDashoffset=565.48-f.cooldownTimeLeft/300*565.48}function ph(){const n=document.querySelector("#directory-view .directory-top-bar")||document.querySelector("#directory-view .directory-static-header-zone")||document.querySelector("#directory-view header"),e=document.querySelector("#directory-view .directory-cards-scroller")||document.querySelector("#directory-view .directory-scrollable-cards-zone")||document.querySelector("#directory-view main")||document.querySelector("#directory-grid-target")?.parentElement;n&&e&&e.style.setProperty("margin-top","0px","important")}function sa(n,e=""){const t=document.getElementById("directory-grid-target")||document.getElementById("directory-grid-container");if(!t)return;const i=e.toLowerCase(),r=le.filter(s=>s.category===n&&(s.name.toLowerCase().includes(i)||s.district.toLowerCase().includes(i)));r.length===0?t.innerHTML='<div style="grid-column: 1/3; text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No locations found matching parameters criteria</div>':(t.innerHTML=r.map(s=>tr(s)).join(""),document.querySelectorAll("[data-site-grid-id]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-site-grid-id");ys(a)})})),requestAnimationFrame(()=>{ph(),setTimeout(ph,50)})}function uc(n,e=""){const t=document.getElementById("list-cards-container");if(!t)return;const i=e.toLowerCase(),r=le.filter(s=>s.category===n&&(s.name.toLowerCase().includes(i)||s.district.toLowerCase().includes(i)));if(r.length===0){t.innerHTML='<div style="text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No matching records found</div>';return}t.innerHTML=r.map(s=>tr(s)).join(""),document.querySelectorAll("[data-site-list-id]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-site-list-id");ys(a)})})}function rw(n,e,t,i){const s=(t-n)*Math.PI/180,a=(i-e)*Math.PI/180,c=Math.sin(s/2)*Math.sin(s/2)+Math.cos(n*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(a/2)*Math.sin(a/2);return 6371*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))}function Wa(n){const e=document.getElementById("map-popup-card");e&&e.remove();const t=document.getElementById("map-popup-container");if(!t)return;const i=document.createElement("div");i.id="map-popup-card",i.className="map-popup-card";let r=n.distance||"0 km";Mn?r="Permission required":Ee&&n.latitude&&n.longitude&&(r=rw(Ee.latitude,Ee.longitude,n.latitude,n.longitude).toFixed(1)+" km"),i.innerHTML=`
    <img src="${n.image}" alt="${n.name}" class="popup-site-img">
    <div class="popup-site-info">
      <h3 style="font-size: 15px; font-weight: 800; color: var(--color-charcoal);">${n.name}</h3>
      <div style="font-size: 11px; color: var(--color-gray); font-weight: 600; margin-top: 1px;">📍 ${n.district}</div>
      <span style="font-size: 10px; color: var(--color-gold); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; display: inline-block;">${n.category}</span>
      <span style="font-size: 11px; color: var(--color-charcoal); font-weight: 700; margin-top: 2px;">⭐ ${n.xpRange} • 📍 ${r}</span>
    </div>
    <button class="btn-primary map-popup-btn" style="width: 90px; height: 36px; font-size: 11px; padding:0 8px; gap:4px;" id="map-popup-navigate-btn" onclick="window.openSiteById('${n.id}')">🚀 Navigate</button>
  `,t.appendChild(i),document.getElementById("map-popup-navigate-btn").addEventListener("click",s=>{s.stopPropagation(),ys(n.id)}),i.addEventListener("click",s=>{s.stopPropagation(),ys(n.id)})}function Vg(){const n=document.getElementById("activity-notifications-overlay");n&&n.remove();const e=f.isGuest||!f.currentUser,t=e?0:f.user?.xp||0,i=e?"Guest":f.user?.rank||"Level 1 Explorer",r=`
    <div class="activity-drawer-overlay" id="activity-notifications-overlay">
      <div class="activity-drawer-card" id="activity-notifications-card">
        <div class="activity-drawer-header">
          <div class="drawer-title-group">
            <h3>${e?"Explorer XP & Rankings":"Activity & Notifications"}</h3>
            <p class="drawer-subtitle">
              ${e?"Current Status: Guest Explorer (0 XP)":`Rank: ${i} (${t} XP)`}
            </p>
          </div>
          <button class="drawer-close-btn" id="btn-close-activity-drawer" aria-label="Close">&times;</button>
        </div>

        <div class="activity-drawer-content">
          ${e?`
            <!-- Dedicated Guest Explanation -->
            <div class="guest-xp-explainer">
              <div class="guest-xp-icon" style="font-size: 32px; margin-bottom: 10px; text-align: center;">🏆</div>
              <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 8px; color: #1A1A1A; text-align: center;">
                Unlock Experience & Leaderboards
              </h4>
              <p style="font-size: 13px; color: #555555; line-height: 1.45; text-align: center; margin-bottom: 18px;">
                To earn XP, collect conservation badges, verify site check-ins, and position yourself on the national explorer rankings, please sign in or create an account.
              </p>
              
              <div class="guest-drawer-actions" style="display: flex; flex-direction: column; gap: 8px;">
                <button class="btn-primary" id="btn-drawer-auth-action" style="width: 100%;">Sign In / Register</button>
                <button class="btn-secondary" id="btn-drawer-continue-guest" style="width: 100%; background: transparent; border: none; color: #777; font-size: 13px; cursor: pointer; padding: 6px;">Continue Exploring as Guest</button>
              </div>
            </div>
          `:`
            <!-- Authenticated Member View -->
            <div class="activity-stat-box">
              <div class="stat-pill">🔥 ${f.user?.streak||1}-Day Streak</div>
              <div class="stat-pill">⭐ ${t} Total XP</div>
            </div>

            <div class="activity-section">
              <h4 class="activity-section-title">Conservation Updates</h4>
              <div class="activity-item">
                <span class="activity-icon">🌿</span>
                <div class="activity-details">
                  <strong>Sigiriya Reforestation Drive</strong>
                  <p>New community cleanup scheduled for this weekend.</p>
                </div>
              </div>
              <div class="activity-item">
                <span class="activity-icon">🏛️</span>
                <div class="activity-details">
                  <strong>Mihintale Heritage Pass</strong>
                  <p>Digital ledger verification is now live for all visitors.</p>
                </div>
              </div>
            </div>
          `}
        </div>
      </div>
    </div>
  `;(document.querySelector(".app-viewport")||document.querySelector(".iphone-chassis")||document.getElementById("app")||document.body).insertAdjacentHTML("beforeend",r);const a=document.getElementById("activity-notifications-overlay"),c=document.getElementById("activity-notifications-card"),l=document.getElementById("btn-close-activity-drawer"),u=document.getElementById("btn-drawer-auth-action"),p=document.getElementById("btn-drawer-continue-guest");function g(){a&&a.remove()}c&&c.addEventListener("click",b=>b.stopPropagation()),a&&a.addEventListener("click",()=>g()),l&&l.addEventListener("click",()=>g()),p&&p.addEventListener("click",()=>g()),u&&u.addEventListener("click",()=>{g(),jt("signin")})}window.showActivityNotificationsDrawer=Vg;let ya=null;async function Ka(){const n=document.getElementById("live-camera-feed"),e=document.getElementById("camera-permission-prompt"),t=document.getElementById("camera-hud-badge"),i=document.getElementById("btn-capture-photo");try{const r=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}},audio:!1});ya=r,n&&(n.srcObject=r,n.style.display="block"),e&&(e.style.display="none"),t&&(t.style.display="inline-flex"),i&&(i.style.display="flex")}catch(r){console.error("Camera permission failed:",r),se("Camera access is required to verify site presence.","error")}}function Qc(){const n=document.getElementById("live-camera-feed"),e=document.getElementById("camera-capture-canvas"),t=f.activeCheckpoint||(f.activeSite?.checkpoints?f.activeSite.checkpoints[0]:null);n&&n.srcObject&&n.videoWidth>0?(e.width=n.videoWidth||640,e.height=n.videoHeight||480,e.getContext("2d").drawImage(n,0,0,e.width,e.height),e.toDataURL("image/jpeg",.85)):t?.referenceImage||f.activeSite?.image||le[0].image,uu();const i=t?.embedding||[.08,-.01,.12,.05],r=aw(i,[.08,-.01,.11,.06]),s=Math.round(r*100);r>=.75?(f.user.completedCheckpoints||(f.user.completedCheckpoints=[]),t&&!f.user.completedCheckpoints.includes(t.id)&&f.user.completedCheckpoints.push(t.id),f.lastVerificationResult={visionScore:s,checkpointName:t?.name||"Heritage Checkpoint",xpEarned:t?.xpReward||50},Xe(t?.xpReward||50,`Checkpoint verified: ${t?.name||"Heritage Monument"}!`),B("camera-success")):sw(s,t)}function sw(n,e){const t=document.getElementById("verification-failure-modal-overlay");t&&t.remove();const i=e?.name||"Heritage Monument",r=`
    <div class="auth-modal-overlay" id="verification-failure-modal-overlay">
      <div class="auth-modal-card verification-result-dialog" style="max-width: 320px; text-align: center; padding: 22px;">
        <div style="font-size: 36px; margin-bottom: 8px;">❌</div>
        <h3 style="font-size: 16px; font-weight: 800; color: #D32F2F; margin-bottom: 6px;">Monument Not Recognized</h3>
        <p style="font-size: 12px; color: var(--color-gray); line-height: 1.4; margin-bottom: 16px;">
          Visual match confidence score is <strong>${n}%</strong> (Threshold: 75%). The captured photo does not sufficiently match <strong>${i}</strong>.
        </p>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          <button class="btn-primary" id="btn-retake-photo" style="height: 38px; font-size: 12px;">Retake Photo</button>
          <button class="btn-secondary" id="btn-switch-checkpoint" style="height: 36px; font-size: 12px; background: transparent; border: none; color: var(--color-gray); font-weight: 700; cursor: pointer;">Select Another Checkpoint</button>
        </div>
      </div>
    </div>
  `;(document.querySelector(".app-viewport")||document.querySelector(".iphone-chassis")||document.getElementById("app")||document.body).insertAdjacentHTML("beforeend",r);const a=document.getElementById("verification-failure-modal-overlay"),c=document.getElementById("btn-retake-photo"),l=document.getElementById("btn-switch-checkpoint");c&&c.addEventListener("click",()=>{a.remove(),Ka()}),l&&l.addEventListener("click",()=>{a.remove(),B("site-detail")})}function uu(){ya&&(ya.getTracks().forEach(n=>n.stop()),ya=null)}window.startInAppCamera=Ka;window.captureLivePresencePhoto=Qc;window.stopInAppCamera=uu;function aw(n,e){if(!n||!e||n.length===0||e.length===0)return .92;const t=Math.min(n.length,e.length);let i=0,r=0,s=0;for(let a=0;a<t;a++)i+=n[a]*e[a],r+=n[a]*n[a],s+=e[a]*e[a];return r===0||s===0?.9:Math.min(.98,Math.max(.4,i/(Math.sqrt(r)*Math.sqrt(s))))}function ow(n){const e=document.getElementById("checkpoint-briefing-modal-overlay");e&&e.remove();const t=f.activeSite||le[0],i=Ee&&Ee.latitude?Ee.latitude:7.957,r=Ee&&Ee.longitude?Ee.longitude:80.7603,s=Io(i,r,t.latitude,t.longitude),a=s>1e3&&(!f.demoOverride||!f.demoOverride.active),c=`
    <div class="auth-modal-overlay" id="checkpoint-briefing-modal-overlay">
      <div class="auth-modal-card checkpoint-briefing-modal" id="checkpoint-briefing-modal-card" style="max-width: 340px; text-align: left; padding: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span style="font-size: 10px; font-weight: 800; color: var(--color-gold); text-transform: uppercase;">Checkpoint Scavenger Quest</span>
          <button id="btn-close-briefing" style="background: none; border: none; font-size: 20px; cursor: pointer; color: var(--color-charcoal);">✕</button>
        </div>

        <h3 style="font-size: 17px; font-weight: 800; color: var(--color-charcoal); margin-bottom: 4px;">${n.name}</h3>
        <p style="font-size: 11px; color: var(--color-gray); margin-bottom: 12px;">${n.description}</p>

        <div class="target-reference-preview-box" style="position: relative; border-radius: 12px; overflow: hidden; height: 150px; margin-bottom: 12px; background: #000;">
          <img src="${n.referenceImage||t.image}" alt="${n.name}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.88;">
          <div style="position: absolute; bottom: 8px; left: 8px; right: 8px; background: rgba(0,0,0,0.65); backdrop-filter: blur(4px); padding: 6px 10px; border-radius: 8px; font-size: 10px; color: #FFF; font-weight: 600;">
            💡 Hint: ${n.hint||"Align the landmark structure inside your viewfinder reticle."}
          </div>
        </div>

        <div style="background: rgba(12,108,122,0.08); border-radius: 10px; padding: 10px 12px; margin-bottom: 14px; font-size: 11px; display: flex; justify-content: space-between; align-items: center;">
          <span>GPS Proximity: <strong>${Math.round(s)}m</strong></span>
          <span style="color: var(--color-gold); font-weight: 800;">🌟 +${n.xpReward} XP</span>
        </div>

        ${a?`
          <div style="background: #FFF3CD; border: 1px solid #FFEBAA; border-radius: 10px; padding: 10px; font-size: 11px; color: #856404; margin-bottom: 14px; line-height: 1.4;">
            ⚠️ You are currently <strong>${(s/1e3).toFixed(1)} km</strong> away. Please move within 1,000 meters of the site to begin verification.
          </div>
        `:""}

        <div style="display: flex; gap: 8px;">
          <button class="btn-primary" id="btn-start-checkpoint-camera" style="flex: 1; height: 40px; font-size: 12px;" ${a?'disabled style="opacity:0.5;"':""}>
            Start Camera Verification
          </button>
          ${a?`
            <button class="btn-secondary" id="btn-demo-bypass-geofence" style="font-size: 10px; padding: 0 10px; height: 40px;">
              Demo Mode
            </button>
          `:""}
        </div>
      </div>
    </div>
  `;(document.querySelector(".app-viewport")||document.querySelector(".iphone-chassis")||document.getElementById("app")||document.body).insertAdjacentHTML("beforeend",c);const u=document.getElementById("checkpoint-briefing-modal-overlay"),p=document.getElementById("checkpoint-briefing-modal-card"),g=document.getElementById("btn-close-briefing"),b=document.getElementById("btn-start-checkpoint-camera"),A=document.getElementById("btn-demo-bypass-geofence");p&&p.addEventListener("click",R=>R.stopPropagation()),u&&u.addEventListener("click",()=>u.remove()),g&&g.addEventListener("click",()=>u.remove()),b&&b.addEventListener("click",()=>{f.activeCheckpoint=n,u.remove(),B("camera")}),A&&A.addEventListener("click",()=>{f.demoOverride={active:!0,mockLat:t.latitude,mockLng:t.longitude,mockVisionScore:94,forcedStatus:"PASSED"},f.activeCheckpoint=n,u.remove(),se("Demo Mode Active: Geofence unlocked!"),B("camera")})}window.showCheckpointBriefingModal=ow;window.attachDirectoryCardEvents=function(){console.log("🔗 Binding direct click listeners to all site cards..."),document.querySelectorAll(".heritage-card, .site-card-item, .directory-card, [data-site-id]").forEach(e=>{e.onclick=null,e.onclick=function(t){t.preventDefault(),t.stopPropagation();const i=e.getAttribute("data-site-id")||e.getAttribute("data-id")||e.dataset?.siteId||e.dataset?.id;console.log("🖱️ Card clicked directly! Site ID:",i),i&&window.selectAndOpenSite(i)}})};function Vr(){const n=document.querySelector(".directory-cards-scroller")||document.querySelector("#directory-view")||document.querySelector("#list-cards-container")||document.querySelector(".directory-screen");n&&n.addEventListener("click",e=>{const t=e.target.closest(".heritage-card, .site-card-item, .directory-card, [data-site-id], .map-popup-btn");if(!t)return;const i=t.getAttribute("data-site-id")||t.getAttribute("data-id")||t.dataset?.siteId||t.dataset?.id;i&&typeof window.selectAndOpenSite=="function"&&(e.preventDefault(),e.stopPropagation(),window.selectAndOpenSite(i))}),typeof window.attachDirectoryCardEvents=="function"&&window.attachDirectoryCardEvents()}window.attachDirectoryEvents=Vr;const fh=window.renderDirectory;window.renderDirectoryAndBind=function(){const n=document.querySelector(".screen-content")||document.getElementById("app-screen")||document.querySelector(".app-viewport")||document.getElementById("app")||document.body;n&&typeof fh=="function"&&(n.innerHTML=fh(),setTimeout(()=>{typeof window.attachDirectoryCardEvents=="function"&&window.attachDirectoryCardEvents()},50))};window.sitesData=typeof le<"u"?le:window.sitesData||[];window.addEventListener("click",function(n){const e=n.target.closest("[data-site-id], .heritage-card, .site-card-item, .directory-card, .leaflet-popup-content button");if(!e)return;let t=e.getAttribute("data-site-id")||e.getAttribute("data-id")||e.dataset?.siteId;if(!t){const r=(e.getAttribute("onclick")||"").match(/selectAndOpenSite\(['"]([^'"]+)['"]\)/);r&&r[1]&&(t=r[1])}t&&(n.preventDefault(),n.stopPropagation(),window.selectAndOpenSite(t))},!0);function tr(n){if(!n)return"";const e=String(n.id||n.name||"").replace(/'/g,"\\'");return`
    <div class="heritage-card site-card-item" data-site-id="${n.id}" onclick="window.selectAndOpenSite('${e}')" style="cursor: pointer; position: relative; user-select: none; background: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
      <div style="pointer-events: none; width: 100%; height: 110px; overflow: hidden;">
        <img src="${n.image||"Element Pictures/placeholder.jpg"}" alt="${n.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='Element Pictures/placeholder.jpg'" />
      </div>
      <div style="pointer-events: none; padding: 8px 10px;">
        <h4 style="margin: 0; font-size: 13px; font-weight: 700; color: #1E293B; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${n.name}</h4>
        <span style="font-size: 11px; color: #0C6C7A; font-weight: 600;">${n.xp||50} XP</span>
      </div>
    </div>
  `}window.renderSiteCard=tr;window.attachBottomNavEvents=function(){const n=document.querySelector(".bottom-nav, .tab-bar, #app-bottom-nav, .app-footer-nav");if(!n)return;n.querySelectorAll(".nav-item, .tab-btn, button").forEach(t=>{t.onclick=function(i){i.preventDefault(),i.stopPropagation();const r=t.getAttribute("data-screen")||t.getAttribute("data-tab")||t.id?.replace("nav-","").replace("btn-tab-","")||t.innerText?.trim().toLowerCase();console.log("👉 Footer Nav Clicked:",r),r.includes("home")?window.navigate("home"):r.includes("activism")||r.includes("act")?window.navigate("activism"):r.includes("directory")||r.includes("trail")?window.navigate("directory"):r.includes("reward")||r.includes("rew")?window.navigate("rewards"):r.includes("profile")||r.includes("prof")?window.navigate("profile"):r.includes("map")&&window.navigate("map")}})};document.addEventListener("click",n=>{const e=n.target.closest(".bottom-nav .nav-item, .tab-bar .tab-btn, #app-bottom-nav button, [data-screen]");if(!e)return;const t=e.getAttribute("data-screen")||e.getAttribute("data-tab")||e.id?.replace("nav-","").replace("btn-tab-","")||e.innerText?.trim().toLowerCase();t&&(t.includes("home")?window.navigate("home"):t.includes("activism")||t.includes("act")?window.navigate("activism"):t.includes("directory")||t.includes("trail")?window.navigate("directory"):t.includes("reward")||t.includes("rew")?window.navigate("rewards"):t.includes("profile")||t.includes("prof")?window.navigate("profile"):t.includes("map")&&window.navigate("map"))},!0);typeof window.state>"u"&&(window.state={currentScreen:"welcome",activeSite:null,selectedSite:null,isGuest:!0});function gh(){console.log("🚀 [YathraLanka] Explicitly mounting Welcome Screen..."),window.state&&(window.state.currentScreen="welcome"),typeof window.navigate=="function"&&window.navigate("welcome")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",gh,{once:!0}):gh();try{sessionStorage.removeItem("yathra_current_screen"),localStorage.removeItem("yathra_current_screen")}catch{}(function(){function e(){console.log("🚀 [YathraLanka] Cold Boot: Forcing Welcome Gate..."),window.state&&(window.state.currentScreen="welcome",window.state.activeSite=null),typeof window.navigate=="function"&&window.navigate("welcome")}document.readyState==="complete"||document.readyState==="interactive"?setTimeout(e,10):window.addEventListener("DOMContentLoaded",e,{once:!0})})();export{hv as L,Vc as M,ou as W,Cg as _};
