(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const bs={xp:0,rank:"None",medals:0,sitesVisited:0,quizzesPassed:0,permissions:{camera:!1,notifications:!1},role:"",interests:[],signedPetitions:[],donatedAmount:0,joinedEvents:[],unlockedCoupons:[],completedQuizzes:{},dwellTimeCompleted:{},verifiedPhotos:{}},b2=[{rank:"Grass Toucher",range:[0,99],threshold:0},{rank:"Wanderer",range:[100,249],threshold:100},{rank:"Tuk Tuk Trailer",range:[250,499],threshold:250},{rank:"Magahoyanna",range:[500,999],threshold:500},{rank:"Island Explorer",range:[1e3,2e3],threshold:1e3},{rank:"Lanka Legend",range:[2e3,5e3],threshold:2e3}],T2=[{name:"Suranga M",points:5820,role:"Explorer",rank:"Lanka Legend"},{name:"Anjali R.",points:5330,role:"Volunteer",rank:"Lanka Legend"},{name:"Dilhani",points:3540,role:"Organizer",rank:"Island Explorer"},{name:"Mihiranga T.",points:1160,role:"Quiz Master",rank:"Island Explorer"}],An=[{id:"mihintale",name:"Mihintale",district:"Anuradhapura District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"220km",openStatus:"Open now",description:"The sacred mountain peak revered as the birthplace of Buddhism in the country, marked by ancient monastic ruins, rock inscriptions, and pristine natural reserves.",image:"Element Pictures/Mihintale.JPG",latitude:8.3508,longitude:80.5186,referenceImage:"Element Pictures/Mihintale.JPG",quizzes:[{question:"What is the significance of the Mihintale rock peak in Sri Lankan history?",options:["It was the first capital of Sri Lanka","It is the site where Buddhism was introduced by Arahat Mahinda","It is a royal palace built by Kashyapa","It is a natural seaport of the ancient era"],correctIndex:1},{question:"Who was the reigning Sri Lankan king when Arahat Mahinda visited Mihintale?",options:["King Dutusgemunu","King Devanampiyatissa","King Kashyapa","King Vijayabahu I"],correctIndex:1},{question:"Which of the following ancient structures is famous for its elephant carvings at Mihintale?",options:["The Kantaka Cetiya Vahalkada","The Aradhana Gala peak","The Ambasthala Dagoba","The Sinha Pokuna (Lion Pond)"],correctIndex:0},{question:"What unique function did the Mihintale Hospital serve in antiquity?",options:["It was a military barracks","It is one of the oldest recorded hospitals in the world, with stone bath tubs for herbal treatment","It was a royal treasury","It was a university for astronomy"],correctIndex:1},{question:"What is the name of the famous massive pond situated halfway up the Mihintale mountain?",options:["Basawakkulama reservoir","Kaludiya Pokuna (Black Water Pond)","Abhayagiri pond","Tissa Wewa"],correctIndex:1}]},{id:"sigiriya",name:"Sigiriya",district:"Matale District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"160km",openStatus:"Open now",description:"An ancient rock fortress constructed by King Kashyapa, celebrated for its advanced water gardens, stunning fifth-century frescoes of celestial maidens, and the colossal lion paw gate.",image:"Element Pictures/Sigiriya.jpg",latitude:7.957,longitude:80.7603,referenceImage:"Element Pictures/Sigiriya-LionRock.jpg",quizzes:[{question:"Which Sri Lankan king created the Sigiriya Rock Fortress?",options:["King Devanampiyatissa","King Dutugemunu","King Kashyapa","King Parakramabahu I"],correctIndex:2},{question:"Sigiriya is globally famous for which ancient artistic creations painted on the rock face?",options:["Carvings of war elephants","Fresco paintings of celestial maidens (Sigiri Apsaras)","Stone inscriptions in Brahmi script","Sculptures of sleeping lions"],correctIndex:1},{question:"What structure stands at the entrance to the final palace summit at Sigiriya?",options:["A massive bronze dragon gate","Colossal Lion Paws carved out of stone","Two giant cobra statues","A double-moat drawbridge"],correctIndex:1},{question:"What is the purpose of the highly polished 'Mirror Wall' at Sigiriya?",options:["To reflect sunrays and blind enemies","It was used by the king to view his reflection","It contains ancient graffiti poems written by visitors dating back to the 8th century","It was a military signaling device"],correctIndex:2},{question:"Which unique layout style is utilized in Sigiriya's royal pleasure gardens?",options:["Terraced mountain farming layout","Symmetrical hydraulic water gardens, boulders, and terraced gardens","Traditional dry zone scrub jungle","A maze of vertical underground caves"],correctIndex:1}]},{id:"ruwanweliseya",name:"Ruwanweliseya",district:"Anuradhapura District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"215km",openStatus:"Open now",description:"A monumental bubble-shaped stupa built by King Dutugemunu in the ancient capital Anuradhapura, venerated as a marvel of ancient civil engineering and Buddhist architecture.",image:"Element Pictures/Ruwanweliseya.jpg",latitude:8.3503,longitude:80.3962,referenceImage:"Element Pictures/Donations Stupa.jpg",quizzes:[{question:"Which ancient monarch initiated the construction of the sacred Ruwanweliseya Stupa?",options:["King Valagamba","King Devanampiyatissa","King Dutugemunu","King Mahasen"],correctIndex:2},{question:"What geometrical shape is the main dome of the Ruwanweliseya Stupa traditionally based on?",options:["Dhanyakara (Heap of Paddy shape)","Bubbulakara (Bubble shape)","Padmakara (Lotus shape)","Ghantakara (Bell shape)"],correctIndex:1},{question:"Which unique feature circles the base platform of the Ruwanweliseya stupa outer wall?",options:["A wall of brick-carved elephants standing side-by-side (Elephant Wall)","A deep circular moat filled with lotus flowers","A ring of bronze spears","Statues of ancient Buddhist kings"],correctIndex:0},{question:"Which architectural components are situated at the four cardinal entrances of the stupa?",options:["Fresco caves","Vahalkadas (decorative frontispieces)","Stone drawbridges","Hydraulic fountains"],correctIndex:1},{question:"What materials were historically used in the foundation of Ruwanweliseya to support its immense weight?",options:["Solid iron sheets and heavy granite blocks","Layers of crushed stones, clay, lead sheets, and a plaster mixture reinforced with animal hide","Hollow wooden logs filled with dry sand","Baked clay pots piled on top of each other"],correctIndex:1}]},{id:"temple_of_tooth",name:"Temple of the Tooth",district:"Kandy District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"115km",openStatus:"Open now",description:"The royal palace complex of Kandy housing the sacred tooth relic of Gautama Buddha, symbolizing sovereignty, rich Kandyan architecture, and royal heritage.",image:"Element Pictures/Temple of the tooth.jpg",latitude:7.2936,longitude:80.6413,referenceImage:"Element Pictures/Temple of the tooth.jpg",quizzes:[{question:"Where is the Sri Dalada Maligawa (Temple of the Sacred Tooth Relic) located?",options:["Anuradhapura","Polonnaruwa","Kandy","Jaffna"],correctIndex:2},{question:"Historically, what did possession of the Sacred Tooth Relic represent for Sri Lankan monarchs?",options:["Command over the merchant fleets","The divine right and legitimate authority to rule the country","Immunity from foreign invasions","Direct control over the pearl fisheries"],correctIndex:1},{question:"What is the name of the octagonal pavilion building situated at the front of the Kandy Temple?",options:["Pattirippuwa","Sandakada Pahana","Vahalkada","Gedige"],correctIndex:0},{question:"Which major annual cultural procession parading Kandy features the sacred casket?",options:["The Duruthu Perahera","The Esala Perahera","The Vesak Kalapaya","The Katharagama festival"],correctIndex:1},{question:"What decorative motif characterizes the surrounding protective walls of Kandy Lake and the temple moat?",options:["Lion posture carvings","Diyarella Bemma (Wave swell wall) and clouds pattern openings","Bronze spikes","Lotus petal panels"],correctIndex:1}]},{id:"dowa_rock_temple",name:"Dowa Rock Temple",district:"Badulla District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"180km",openStatus:"Open now",description:"A historic cave temple tucked in the Uva province hills, famous for its massive unfinished 38-foot tall standing Buddha statue carved directly into a sheer rock cliff.",image:"Element Pictures/Dowa Rock Temple.jpg",latitude:6.8202,longitude:81.0255,referenceImage:"Element Pictures/Dowa Rock Temple.jpg",quizzes:[{question:"What is the most prominent visual attraction at the Dowa Rock Temple?",options:["A golden reclining Buddha statue","A massive, unfinished 38-foot tall standing Buddha statue carved directly into the rock face","An underground crystal spring","A wall painted entirely with ancient map routes"],correctIndex:1},{question:"Which ancient monarch is locally credited with establishing the cave sanctuary at Dowa?",options:["King Dutugemunu","King Valagamba (Vattagamani Abhaya)","King Kashyapa","King Devanampiyatissa"],correctIndex:1},{question:"The rock carvings at Dowa show influences of which historical artistic school?",options:["Modern abstract sculpture","Late Anuradhapura and early Polonnaruwa regional rock art styles","Roman classical sculpting","Chola dynasty metalworks"],correctIndex:1},{question:"What unique reptile motif is painted on the ceiling of the shrine cave protecting the shrine?",options:["A three-headed cobra battling a giant viper","A giant sea turtle","A coiled python guardian","A green forest lizard"],correctIndex:0},{question:"Dowa Rock Temple is situated close to which popular hill station town in Badulla?",options:["Nuwara Eliya","Ella","Haputale","Bandarawela"],correctIndex:3}]},{id:"ritigala_monastery",name:"Ritigala Monastery",district:"Anuradhapura District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"195km",openStatus:"Open now",description:"An ancient mountain range housing the mysterious ruins of a forest-dwelling monastery, renowned for its austere architecture (Padhanaghara), beautiful stone paths, bathing pools, and herbal gardens.",image:"Element Pictures/Ritigala Monastery.jpg",latitude:8.1139,longitude:80.6558,referenceImage:"Element Pictures/Ritigala Monastery.jpg",quizzes:[{question:"What is unique about the ancient monastic structures (Padhanagharas) found at Ritigala?",options:["They are decorated with gold leaf and gems","They are completely devoid of any decorative carvings, prioritizing deep ascetic isolation and simple stone geometry","They are built on high stilts in dry mud","They have massive stupas surrounding them"],correctIndex:1},{question:"Which community of forest-dwelling monks historically inhabited the secluded peaks of Ritigala?",options:["The Tapovana monks (Pamsukulika fraternity)","Foreign Roman monks","Royal guards","Spice merchants"],correctIndex:0},{question:"What botanical anomaly makes the peak of Ritigala different from the surrounding dry zone plains?",options:["It has no vegetation due to volcanic activity","It contains a unique microclimate supporting wet-zone flora, medicinal herbs, and rare orchids on the misty summit","It grows only pine and fir trees","It is completely covered in swamp mangrove plants"],correctIndex:1},{question:"What impressive stone structures connect the ancient cells and platforms of Ritigala?",options:["Hanging vine suspension bridges","Meticulously paved stone-cut walkways and steps traversing the dense forest slopes","Hollow clay pipelines","Symmetrical marble corridors"],correctIndex:1},{question:"Which massive circular stone pond structure lies near the entrance of the Ritigala ruins?",options:["Banda Pokuna (large bathing pool with stone steps)","Sinha Pokuna","Kaludiya Pokuna","Tissa Wewa"],correctIndex:0}]},{id:"yudaganawa",name:"Yudaganawa",district:"Badulla District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"230km",openStatus:"Open now",description:"One of the largest colossal stupas in Sri Lanka, constructed in the 12th century, historical battlefield where King Dutugemunu and his brother Tissa fought for sovereignty.",image:"Element Pictures/Yudaganawa.jpg",latitude:6.7292,longitude:81.2831,referenceImage:"Element Pictures/Yudaganawa.jpg",quizzes:[{question:"What historic event occurred at the site of Yudaganawa in the Uva region?",options:["The final coronation of King Parakramabahu","The battlefield clash between brothers Prince Dutugemunu and Prince Tissa over the state crown","The signing of the Kandyan Convention","The first planting of the sacred Bo Tree"],correctIndex:1},{question:"What is unique about the structural layout of the Yudaganawa Stupa?",options:["It is built on a massive elevated wooden deck","It is a colossal, flat-topped semi-finished stupa (Kota Vehera style)","It is carved entirely out of a single piece of green rock","It has five rings of defensive moats surrounding it"],correctIndex:1},{question:"Yudaganawa is situated in the proximity of which historic town in the Moneragala/Badulla area?",options:["Buttala","Wellawaya","Ella","Mahiyanganaya"],correctIndex:0},{question:"What does the name 'Yudaganawa' literally translate to in Sinhala?",options:["Peaceful garden","Arena of Battle / Battleground","Temple of Sovereignty","Elephant lake"],correctIndex:1},{question:"Which of the following is found near Yudaganawa, representing ancient irrigation marvels?",options:["Yudaganawa Wewa (irrigation tank)","Senanayake Samudra","Kala Wewa","Parakrama Samudra"],correctIndex:0}]},{id:"pilikuttuwa",name:"Pilikuttuwa Temple",district:"Gampaha District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"35km",openStatus:"Open now",description:"An ancient forest cave sanctuary close to Colombo, famous for housing 99 drip-ledged caves, historic murals, wooden bridge over natural water flows, and pre-historic rock formations.",image:"Element Pictures/Pilikuttuwa Temple.jpg",latitude:7.0709,longitude:80.0384,referenceImage:"Element Pictures/Pilikuttuwa Temple.jpg",quizzes:[{question:"What is the primary natural and historical feature of the Pilikuttuwa Temple complex?",options:["A massive multi-tiered stone pagoda","A dense network of 99 drip-ledged rock shelter caves used by ancient monks","A natural volcanic geyser","A salt desert flat"],correctIndex:1},{question:"What famous historic bridge structure is preserved within the Pilikuttuwa sanctuary?",options:["A massive iron drawbridge","An ancient Dutch-era wooden canopy bridge spanning a stream","A marble arched bridge","A hanging bamboo rope bridge"],correctIndex:1},{question:"Which period of Sri Lankan art do the interior temple cave murals and frescoes at Pilikuttuwa belong to?",options:["Anuradhapura Period","Kandyan Kingdom and early colonial transitions","Modern contemporary art","Prehistoric stone paintings"],correctIndex:1},{question:"Which historic king took refuge in the caves of Pilikuttuwa during foreign invasions?",options:["King Kashyapa","King Valagamba","King Vijayabahu","King Dutugemunu"],correctIndex:1},{question:"What does the drip-ledge (Kataraya) on the caves of Pilikuttuwa do?",options:["It funnels drinking water into inside stone cups","It diverts monsoon rainwater away from entering the cave shelters, keeping the interior dry","It serves as a climbing groove for soldiers","It represents royal lineage crowns"],correctIndex:1}]},{id:"maligawila",name:"Maligawila Statue",district:"Moneragala District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"240km",openStatus:"Open now",description:"The home of a colossal 7th-century standing Buddha statue carved out of a single limestone rock, considered one of the absolute masterpieces of ancient sculpting.",image:"Element Pictures/maligawila buddha statue.jpg",latitude:6.7352,longitude:81.3392,referenceImage:"Element Pictures/maligawila buddha statue.jpg",quizzes:[{question:"What masterpiece of Sri Lankan limestone sculpture is found at Maligawila?",options:["A massive sleeping clay Buddha","A colossal 36-foot standing Buddha statue carved out of a single crystalline limestone block","A gold-plated stupa dome","A row of terracotta warriors"],correctIndex:1},{question:"Which ancient prince is historically credited with crafting this massive statue in the 7th century?",options:["Prince Kashyapa","Prince Agrabodhi","Prince Dutugemunu","Prince Valagamba"],correctIndex:1},{question:"Which neighboring site at Maligawila features a giant statue of Avalokiteshvara Bodhisattva?",options:["Dambegoda (Dambegoda Bodhisattva Statue)","Sigiriya rock","Buduruvagala caves","Aukana"],correctIndex:0},{question:"What state of preservation was the Maligawila Buddha found in during the late 20th century before restoration?",options:["Fully intact under a pristine dome","Fallen, broken into several massive segments in the dense jungle","Partially buried in beach sand dunes","Submerged in a large reservoir lake"],correctIndex:1},{question:"What architectural feature originally enclosed the massive standing Buddha statue?",options:["A circular brick and stone Image House (Patimaghara)","A simple open-air wood canopy","A series of deep stone trenches","A tall metal tower"],correctIndex:0}]},{id:"ibbankatuwa",name:"Ibbankatuwa Tombs",district:"Matale District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"150km",openStatus:"Open now",description:"A famous megalithic prehistoric burial ground dating back to the Iron Age, showcasing stone cist graves, ancient pottery, beads, and advanced early societal burials.",image:"Element Pictures/Ibbankatuwa Tombs.JPG",latitude:7.8596,longitude:80.6481,referenceImage:"Element Pictures/Ibbankatuwa Tombs.JPG",quizzes:[{question:"What unique prehistoric archaeological site is found at Ibbankatuwa?",options:["An ancient palace courtyard","A massive Megalithic Cist Burial Ground from the protohistoric Iron Age (dating back 2500+ years)","An ancient port for gem ships","A prehistoric tool-making cave"],correctIndex:1},{question:"What typical shape do the grave chambers (cists) at Ibbankatuwa have?",options:["Circular deep stone wells","Four granite slab walls forming a rectangular box capped with a large stone cover slab","Triangular pyramids built from clay","Hollow logs buried vertically"],correctIndex:1},{question:"Which of the following artifacts were found inside the cist tombs, proving ancient trade connections?",options:["Roman gold coins","Beads made of carnelian, onyx, agate, clay pottery urns containing ashes, and copper tools","Porcelain plates from China","Bronze guns"],correctIndex:1},{question:"The residents of the pre-historic Ibbankatuwa era primarily used which major metal classification?",options:["Only flint stone tools","Iron and Copper (Megalithic Iron Age culture)","Aluminum and Steel","Pure Platinum"],correctIndex:1},{question:"Near which major central province city is the Ibbankatuwa Megalithic Site situated?",options:["Kandy","Dambulla","Jaffna","Negombo"],correctIndex:1}]},{id:"galle_fort",name:"Galle Fort",district:"Galle District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"125km",openStatus:"Open now",description:"A coastal fortress built by the Portuguese, heavily fortified by the Dutch, blending European military architecture and South Asian traditions.",image:"Element Pictures/Galle Fort.jpg",latitude:6.0267,longitude:80.2167,referenceImage:"Element Pictures/Galle Fort.jpg",quizzes:[{question:"Which European nation first constructed fortifications in Galle before the Dutch expanded it?",options:["The British","The Portuguese","The French","The Spanish"],correctIndex:1},{question:"What is the famous white structure standing on the Utrecht Bastion overlooking the ocean in Galle Fort?",options:["The Clock Tower","The Galle Lighthouse","The Dutch Reformed Church dome","The Maritime Museum tower"],correctIndex:1},{question:"Galle Fort is recognized globally under which prestigious classification?",options:["A Biosphere Reserve","A UNESCO World Heritage Site","An industrial trade zone","A national sanctuary park"],correctIndex:1},{question:"What is the name of the narrow stone gateway featuring a coat of arms of the VOC Dutch East India Company?",options:["The Galle Old Gate","The Lighthouse gate","The Main Bastion drawbridge","The Sea Gate"],correctIndex:0},{question:"What architectural feature characterizes the traditional Dutch villa residential lanes in Galle Fort?",options:["Tall modern glass high-rises","Verandah houses, terracotta tile roofs, pillared arches, and paved stone inner courtyards","Circular wood log cabins","Subterranean cave rooms"],correctIndex:1}]}],I2=[{id:"social_media",name:"Social Media Presence",description:"Share about your visit",xp:5,duration:"10 mins",icon:"icons/social media presence icon.png"},{id:"local_food",name:"Local Food",description:"Try a traditional dish",xp:5,duration:"20 mins",icon:"icons/local food icon.png"},{id:"wandering_around",name:"Wandering Around",description:"Visit a nearby site",xp:5,duration:"20 mins",icon:"icons/Wandering Around icon.png"},{id:"wildlife_spotting",name:"Wildlife Spotting",description:"Spot and record an animal",xp:5,duration:"20 mins",icon:"icons/Wildlife Spotting icon.png"},{id:"eco_warrior",name:"Eco-Warrior",description:"Conserve the environment",xp:10,duration:"15 mins",icon:"icons/Eco Warrior icon.png"}],A2=()=>{};var Jl={};/**
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
 */const Q1=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},x2=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},X1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,h=l?n[i+2]:0,p=s>>2,m=(s&3)<<4|c>>4;let A=(c&15)<<2|h>>6,R=h&63;l||(R=64,a||(A=64)),r.push(t[p],t[m],t[A],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Q1(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):x2(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new C2;const A=s<<2|c>>4;if(r.push(A),h!==64){const R=c<<4&240|h>>2;if(r.push(R),m!==64){const L=h<<6&192|m;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class C2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const S2=function(n){const e=Q1(n);return X1.encodeByteArray(e,!0)},Rs=function(n){return S2(n).replace(/\./g,"")},J1=function(n){try{return X1.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function k2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const P2=()=>k2().__FIREBASE_DEFAULTS__,R2=()=>{if(typeof process>"u"||typeof Jl>"u")return;const n=Jl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},L2=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&J1(n[1]);return e&&JSON.parse(e)},aa=()=>{try{return A2()||P2()||R2()||L2()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},O2=n=>aa()?.emulatorHosts?.[n],N2=n=>{const e=O2(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Z1=()=>aa()?.config,D2=n=>aa()?.[`_${n}`];/**
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
 */class eh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function V2(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Rs(JSON.stringify(t)),Rs(JSON.stringify(a)),""].join(".")}/**
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
 */function Rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function M2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rt())}function F2(){const n=aa()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function U2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function th(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function z2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function B2(){return!F2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nh(){try{return typeof indexedDB=="object"}catch{return!1}}function rh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}function $2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const q2="FirebaseError";class Nt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=q2,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zn.prototype.create)}}class Zn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?j2(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Nt(i,c,r)}}function j2(n,e){return n.replace(H2,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const H2=/\{\$([^}]+)}/g;function Er(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Zl(s)&&Zl(a)){if(!Er(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Zl(n){return n!==null&&typeof n=="object"}/**
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
 */function ih(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ii(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function si(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function G2(n,e){const t=new W2(n,e);return t.subscribe.bind(t)}class W2{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");K2(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=no),i.error===void 0&&(i.error=no),i.complete===void 0&&(i.complete=no);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K2(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function no(){}/**
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
 */const Y2=1e3,Q2=2,X2=4*60*60*1e3,J2=.5;function eu(n,e=Y2,t=Q2){const r=e*Math.pow(t,n),i=Math.round(J2*r*(Math.random()-.5)*2);return Math.min(X2,r+i)}/**
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
 */function lt(n){return n&&n._delegate?n._delegate:n}/**
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
 */function oa(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Z2(n){return(await fetch(n,{credentials:"include"})).ok}class Lt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bn="[DEFAULT]";/**
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
 */class ef{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new eh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nf(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tf(n){return n===Bn?void 0:n}function nf(n){return n.instantiationMode==="EAGER"}/**
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
 */class rf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ef(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ce||(ce={}));const sf={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},af=ce.INFO,of={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},cf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=of[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ca{constructor(e){this.name=e,this._logLevel=af,this._logHandler=cf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const lf=(n,e)=>e.some(t=>n instanceof t);let tu,nu;function uf(){return tu||(tu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hf(){return nu||(nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sh=new WeakMap,To=new WeakMap,ah=new WeakMap,ro=new WeakMap,Jo=new WeakMap;function df(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(_n(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&sh.set(t,n)}).catch(()=>{}),Jo.set(e,n),e}function pf(n){if(To.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});To.set(n,e)}let Io={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return To.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ah.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _n(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ff(n){Io=n(Io)}function mf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(io(this),e,...t);return ah.set(r,e.sort?e.sort():[e]),_n(r)}:hf().includes(n)?function(...e){return n.apply(io(this),e),_n(sh.get(this))}:function(...e){return _n(n.apply(io(this),e))}}function gf(n){return typeof n=="function"?mf(n):(n instanceof IDBTransaction&&pf(n),lf(n,uf())?new Proxy(n,Io):n)}function _n(n){if(n instanceof IDBRequest)return df(n);if(ro.has(n))return ro.get(n);const e=gf(n);return e!==n&&(ro.set(n,e),Jo.set(e,n)),e}const io=n=>Jo.get(n);function oh(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=_n(a);return r&&a.addEventListener("upgradeneeded",l=>{r(_n(a.result),l.oldVersion,l.newVersion,_n(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const yf=["get","getKey","getAll","getAllKeys","count"],_f=["put","add","delete","clear"],so=new Map;function ru(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(so.get(e))return so.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=_f.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yf.includes(t)))return;const s=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&l.done]))[0]};return so.set(e,s),s}ff(n=>({...n,get:(e,t,r)=>ru(e,t)||n.get(e,t,r),has:(e,t)=>!!ru(e,t)||n.has(e,t)}));/**
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
 */class vf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wf(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function wf(n){return n.getComponent()?.type==="VERSION"}const Ao="@firebase/app",iu="0.15.0";/**
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
 */const Jt=new ca("@firebase/app"),Ef="@firebase/app-compat",bf="@firebase/analytics-compat",Tf="@firebase/analytics",If="@firebase/app-check-compat",Af="@firebase/app-check",xf="@firebase/auth",Cf="@firebase/auth-compat",Sf="@firebase/database",kf="@firebase/data-connect",Pf="@firebase/database-compat",Rf="@firebase/functions",Lf="@firebase/functions-compat",Of="@firebase/installations",Nf="@firebase/installations-compat",Df="@firebase/messaging",Vf="@firebase/messaging-compat",Mf="@firebase/performance",Ff="@firebase/performance-compat",Uf="@firebase/remote-config",zf="@firebase/remote-config-compat",Bf="@firebase/storage",$f="@firebase/storage-compat",qf="@firebase/firestore",jf="@firebase/ai",Hf="@firebase/firestore-compat",Gf="firebase",Wf="12.15.0";/**
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
 */const xo="[DEFAULT]",Kf={[Ao]:"fire-core",[Ef]:"fire-core-compat",[Tf]:"fire-analytics",[bf]:"fire-analytics-compat",[Af]:"fire-app-check",[If]:"fire-app-check-compat",[xf]:"fire-auth",[Cf]:"fire-auth-compat",[Sf]:"fire-rtdb",[kf]:"fire-data-connect",[Pf]:"fire-rtdb-compat",[Rf]:"fire-fn",[Lf]:"fire-fn-compat",[Of]:"fire-iid",[Nf]:"fire-iid-compat",[Df]:"fire-fcm",[Vf]:"fire-fcm-compat",[Mf]:"fire-perf",[Ff]:"fire-perf-compat",[Uf]:"fire-rc",[zf]:"fire-rc-compat",[Bf]:"fire-gcs",[$f]:"fire-gcs-compat",[qf]:"fire-fst",[Hf]:"fire-fst-compat",[jf]:"fire-vertex","fire-js":"fire-js",[Gf]:"fire-js-all"};/**
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
 */const Ls=new Map,Yf=new Map,Co=new Map;function su(n,e){try{n.container.addComponent(e)}catch(t){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qt(n){const e=n.name;if(Co.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;Co.set(e,n);for(const t of Ls.values())su(t,n);for(const t of Yf.values())su(t,n);return!0}function Rr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ft(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Qf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vn=new Zn("app","Firebase",Qf);/**
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
 */class Xf{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const la=Wf;function ch(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:xo,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});if(t||(t=Z1()),!t)throw vn.create("no-options");const s=Ls.get(i);if(s){if(Er(t,s.options)&&Er(r,s.config))return s;throw vn.create("duplicate-app",{appName:i})}const a=new rf(i);for(const l of Co.values())a.addComponent(l);const c=new Xf(t,r,a);return Ls.set(i,c),c}function lh(n=xo){const e=Ls.get(n);if(!e&&n===xo&&Z1())return ch();if(!e)throw vn.create("no-app",{appName:n});return e}function Tt(n,e,t){let r=Kf[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(a.join(" "));return}qt(new Lt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Jf="firebase-heartbeat-database",Zf=1,wi="firebase-heartbeat-store";let ao=null;function uh(){return ao||(ao=oh(Jf,Zf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(wi)}catch(t){console.warn(t)}}}}).catch(n=>{throw vn.create("idb-open",{originalErrorMessage:n.message})})),ao}async function e0(n){try{const t=(await uh()).transaction(wi),r=await t.objectStore(wi).get(hh(n));return await t.done,r}catch(e){if(e instanceof Nt)Jt.warn(e.message);else{const t=vn.create("idb-get",{originalErrorMessage:e?.message});Jt.warn(t.message)}}}async function au(n,e){try{const r=(await uh()).transaction(wi,"readwrite");await r.objectStore(wi).put(e,hh(n)),await r.done}catch(t){if(t instanceof Nt)Jt.warn(t.message);else{const r=vn.create("idb-set",{originalErrorMessage:t?.message});Jt.warn(r.message)}}}function hh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const t0=1024,n0=30;class r0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new s0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ou();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>n0){const i=a0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Jt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ou(),{heartbeatsToSend:t,unsentEntries:r}=i0(this._heartbeatsCache.heartbeats),i=Rs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Jt.warn(e),""}}}function ou(){return new Date().toISOString().substring(0,10)}function i0(n,e=t0){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),cu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),cu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class s0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nh()?rh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await e0(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return au(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return au(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function cu(n){return Rs(JSON.stringify({version:2,heartbeats:n})).length}function a0(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function o0(n){qt(new Lt("platform-logger",e=>new vf(e),"PRIVATE")),qt(new Lt("heartbeat",e=>new r0(e),"PRIVATE")),Tt(Ao,iu,n),Tt(Ao,iu,"esm2020"),Tt("fire-js","")}o0("");var c0="firebase",l0="12.15.0";/**
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
 */Tt(c0,l0,"app");const dh="@firebase/installations",Zo="0.6.22";/**
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
 */const ph=1e4,fh=`w:${Zo}`,mh="FIS_v2",u0="https://firebaseinstallations.googleapis.com/v1",h0=60*60*1e3,d0="installations",p0="Installations";/**
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
 */const f0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qn=new Zn(d0,p0,f0);function gh(n){return n instanceof Nt&&n.code.includes("request-failed")}/**
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
 */function yh({projectId:n}){return`${u0}/projects/${n}/installations`}function _h(n){return{token:n.token,requestStatus:2,expiresIn:g0(n.expiresIn),creationTime:Date.now()}}async function vh(n,e){const r=(await e.json()).error;return Qn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function wh({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function m0(n,{refreshToken:e}){const t=wh(n);return t.append("Authorization",y0(e)),t}async function Eh(n){const e=await n();return e.status>=500&&e.status<600?n():e}function g0(n){return Number(n.replace("s","000"))}function y0(n){return`${mh} ${n}`}/**
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
 */async function _0({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=yh(n),i=wh(n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:t,authVersion:mh,appId:n.appId,sdkVersion:fh},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Eh(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:_h(h.authToken)}}else throw await vh("Create Installation",l)}/**
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
 */function bh(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function v0(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const w0=/^[cdef][\w-]{21}$/,So="";function E0(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=b0(n);return w0.test(t)?t:So}catch{return So}}function b0(n){return v0(n).substr(0,22)}/**
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
 */function ua(n){return`${n.appName}!${n.appId}`}/**
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
 */const Th=new Map;function Ih(n,e){const t=ua(n);Ah(t,e),T0(t,e)}function Ah(n,e){const t=Th.get(n);if(t)for(const r of t)r(e)}function T0(n,e){const t=I0();t&&t.postMessage({key:n,fid:e}),A0()}let qn=null;function I0(){return!qn&&"BroadcastChannel"in self&&(qn=new BroadcastChannel("[Firebase] FID Change"),qn.onmessage=n=>{Ah(n.data.key,n.data.fid)}),qn}function A0(){Th.size===0&&qn&&(qn.close(),qn=null)}/**
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
 */const x0="firebase-installations-database",C0=1,Xn="firebase-installations-store";let oo=null;function ec(){return oo||(oo=oh(x0,C0,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Xn)}}})),oo}async function Os(n,e){const t=ua(n),i=(await ec()).transaction(Xn,"readwrite"),s=i.objectStore(Xn),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&Ih(n,e.fid),e}async function xh(n){const e=ua(n),r=(await ec()).transaction(Xn,"readwrite");await r.objectStore(Xn).delete(e),await r.done}async function ha(n,e){const t=ua(n),i=(await ec()).transaction(Xn,"readwrite"),s=i.objectStore(Xn),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!a||a.fid!==c.fid)&&Ih(n,c.fid),c}/**
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
 */async function tc(n){let e;const t=await ha(n.appConfig,r=>{const i=S0(r),s=k0(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===So?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function S0(n){const e=n||{fid:E0(),registrationStatus:0};return Ch(e)}function k0(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Qn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=P0(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:R0(n)}:{installationEntry:e}}async function P0(n,e){try{const t=await _0(n,e);return Os(n.appConfig,t)}catch(t){throw gh(t)&&t.customData.serverCode===409?await xh(n.appConfig):await Os(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function R0(n){let e=await lu(n.appConfig);for(;e.registrationStatus===1;)await bh(100),e=await lu(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await tc(n);return r||t}return e}function lu(n){return ha(n,e=>{if(!e)throw Qn.create("installation-not-found");return Ch(e)})}function Ch(n){return L0(n)?{fid:n.fid,registrationStatus:0}:n}function L0(n){return n.registrationStatus===1&&n.registrationTime+ph<Date.now()}/**
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
 */async function O0({appConfig:n,heartbeatServiceProvider:e},t){const r=N0(n,t),i=m0(n,t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:fh,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Eh(()=>fetch(r,c));if(l.ok){const h=await l.json();return _h(h)}else throw await vh("Generate Auth Token",l)}function N0(n,{fid:e}){return`${yh(n)}/${e}/authTokens:generate`}/**
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
 */async function nc(n,e=!1){let t;const r=await ha(n.appConfig,s=>{if(!Sh(s))throw Qn.create("not-registered");const a=s.authToken;if(!e&&M0(a))return s;if(a.requestStatus===1)return t=D0(n,e),s;{if(!navigator.onLine)throw Qn.create("app-offline");const c=U0(s);return t=V0(n,c),c}});return t?await t:r.authToken}async function D0(n,e){let t=await uu(n.appConfig);for(;t.authToken.requestStatus===1;)await bh(100),t=await uu(n.appConfig);const r=t.authToken;return r.requestStatus===0?nc(n,e):r}function uu(n){return ha(n,e=>{if(!Sh(e))throw Qn.create("not-registered");const t=e.authToken;return z0(t)?{...e,authToken:{requestStatus:0}}:e})}async function V0(n,e){try{const t=await O0(n,e),r={...e,authToken:t};return await Os(n.appConfig,r),t}catch(t){if(gh(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await xh(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Os(n.appConfig,r)}throw t}}function Sh(n){return n!==void 0&&n.registrationStatus===2}function M0(n){return n.requestStatus===2&&!F0(n)}function F0(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+h0}function U0(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function z0(n){return n.requestStatus===1&&n.requestTime+ph<Date.now()}/**
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
 */async function B0(n){const e=n,{installationEntry:t,registrationPromise:r}=await tc(e);return r?r.catch(console.error):nc(e).catch(console.error),t.fid}/**
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
 */async function $0(n,e=!1){const t=n;return await q0(t),(await nc(t,e)).token}async function q0(n){const{registrationPromise:e}=await tc(n);e&&await e}/**
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
 */function j0(n){if(!n||!n.options)throw co("App Configuration");if(!n.name)throw co("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw co(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function co(n){return Qn.create("missing-app-config-values",{valueName:n})}/**
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
 */const kh="installations",H0="installations-internal",G0=n=>{const e=n.getProvider("app").getImmediate(),t=j0(e),r=Rr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},W0=n=>{const e=n.getProvider("app").getImmediate(),t=Rr(e,kh).getImmediate();return{getId:()=>B0(t),getToken:i=>$0(t,i)}};function K0(){qt(new Lt(kh,G0,"PUBLIC")),qt(new Lt(H0,W0,"PRIVATE"))}K0();Tt(dh,Zo);Tt(dh,Zo,"esm2020");/**
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
 */const Ns="analytics",Y0="firebase_id",Q0="origin",X0=60*1e3,J0="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",rc="https://www.googletagmanager.com/gtag/js";/**
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
 */const nt=new ca("@firebase/analytics");/**
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
 */const Z0={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},vt=new Zn("analytics","Analytics",Z0);/**
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
 */function e6(n){if(!n.startsWith(rc)){const e=vt.create("invalid-gtag-resource",{gtagURL:n});return nt.warn(e.message),""}return n}function Ph(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function t6(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function n6(n,e){const t=t6("firebase-js-sdk-policy",{createScriptURL:e6}),r=document.createElement("script"),i=`${rc}?l=${n}&id=${e}`;r.src=t?t?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function r6(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function i6(n,e,t,r,i,s){const a=r[i];try{if(a)await e[a];else{const l=(await Ph(t)).find(h=>h.measurementId===i);l&&await e[l.appId]}}catch(c){nt.error(c)}n("config",i,s)}async function s6(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await Ph(t);for(const l of a){const h=c.find(m=>m.measurementId===l),p=h&&e[h.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){nt.error(s)}}function a6(n,e,t,r){async function i(s,...a){try{if(s==="event"){const[c,l]=a;await s6(n,e,t,c,l)}else if(s==="config"){const[c,l]=a;await i6(n,e,t,r,c,l)}else if(s==="consent"){const[c,l]=a;n("consent",c,l)}else if(s==="get"){const[c,l,h]=a;n("get",c,l,h)}else if(s==="set"){const[c]=a;n("set",c)}else n(s,...a)}catch(c){nt.error(c)}}return i}function o6(n,e,t,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=a6(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function c6(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(rc)&&t.src.includes(n))return t;return null}/**
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
 */const l6=30,u6=1e3;class h6{constructor(e={},t=u6){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Rh=new h6;function d6(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function p6(n){const{appId:e,apiKey:t}=n,r={method:"GET",headers:d6(t)},i=J0.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let a="";try{const c=await s.json();c.error?.message&&(a=c.error.message)}catch{}throw vt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function f6(n,e=Rh,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw vt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw vt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new y6;return setTimeout(async()=>{c.abort()},X0),Lh({appId:r,apiKey:i,measurementId:s},a,c,e)}async function Lh(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Rh){const{appId:s,measurementId:a}=n;try{await m6(r,e)}catch(c){if(a)return nt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:s,measurementId:a};throw c}try{const c=await p6(n);return i.deleteThrottleMetadata(s),c}catch(c){const l=c;if(!g6(l)){if(i.deleteThrottleMetadata(s),a)return nt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:s,measurementId:a};throw c}const h=Number(l?.customData?.httpStatus)===503?eu(t,i.intervalMillis,l6):eu(t,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:t+1};return i.setThrottleMetadata(s,p),nt.debug(`Calling attemptFetch again in ${h} millis`),Lh(n,p,r,i)}}function m6(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(vt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function g6(n){if(!(n instanceof Nt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class y6{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function _6(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,a={...r,send_to:s};n("event",t,a)}}async function v6(n,e,t,r){if(r&&r.global){const i={};for(const s of Object.keys(t))i[`user_properties.${s}`]=t[s];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}/**
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
 */async function w6(){if(nh())try{await rh()}catch(n){return nt.warn(vt.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return nt.warn(vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function E6(n,e,t,r,i,s,a){const c=f6(n);c.then(A=>{t[A.measurementId]=A.appId,n.options.measurementId&&A.measurementId!==n.options.measurementId&&nt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>nt.error(A)),e.push(c);const l=w6().then(A=>{if(A)return r.getId()}),[h,p]=await Promise.all([c,l]);c6(s)||n6(s,h.measurementId),i("js",new Date);const m=a?.config??{};return m[Q0]="firebase",m.update=!0,p!=null&&(m[Y0]=p),i("config",h.measurementId,m),h.measurementId}/**
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
 */class b6{constructor(e){this.app=e}_delete(){return delete gr[this.app.options.appId],Promise.resolve()}}let gr={},hu=[];const du={};let lo="dataLayer",T6="gtag",pu,ic,fu=!1;function I6(){const n=[];if(th()&&n.push("This is a browser extension environment."),$2()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=vt.create("invalid-analytics-context",{errorInfo:e});nt.warn(t.message)}}function A6(n,e,t){I6();const r=n.options.appId;if(!r)throw vt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)nt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw vt.create("no-api-key");if(gr[r]!=null)throw vt.create("already-exists",{id:r});if(!fu){r6(lo);const{wrappedGtag:s,gtagCore:a}=o6(gr,hu,du,lo,T6);ic=s,pu=a,fu=!0}return gr[r]=E6(n,hu,du,e,pu,lo,t),new b6(n)}function x6(n=lh()){n=lt(n);const e=Rr(n,Ns);return e.isInitialized()?e.getImmediate():C6(n)}function C6(n,e={}){const t=Rr(n,Ns);if(t.isInitialized()){const i=t.getImmediate();if(Er(e,t.getOptions()))return i;throw vt.create("already-initialized")}return t.initialize({options:e})}function S6(n,e,t){n=lt(n),v6(ic,gr[n.app.options.appId],e,t).catch(r=>nt.error(r))}function k6(n,e,t,r){n=lt(n),_6(ic,gr[n.app.options.appId],e,t,r).catch(i=>nt.error(i))}const mu="@firebase/analytics",gu="0.10.22";function P6(){qt(new Lt(Ns,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return A6(r,i,t)},"PUBLIC")),qt(new Lt("analytics-internal",n,"PRIVATE")),Tt(mu,gu),Tt(mu,gu,"esm2020");function n(e){try{const t=e.getProvider(Ns).getImmediate();return{logEvent:(r,i,s)=>k6(t,r,i,s),setUserProperties:(r,i)=>S6(t,r,i)}}catch(t){throw vt.create("interop-component-reg-failed",{reason:t})}}}P6();function Oh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const R6=Oh,Nh=new Zn("auth","Firebase",Oh());/**
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
 */const Ds=new ca("@firebase/auth");function L6(n,...e){Ds.logLevel<=ce.WARN&&Ds.warn(`Auth (${la}): ${n}`,...e)}function Ts(n,...e){Ds.logLevel<=ce.ERROR&&Ds.error(`Auth (${la}): ${n}`,...e)}/**
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
 */function br(n,...e){throw ac(n,...e)}function sc(n,...e){return ac(n,...e)}function Dh(n,e,t){const r={...R6(),[e]:t};return new Zn("auth","Firebase",r).create(e,{appName:n.name})}function Gn(n){return Dh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ac(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Nh.create(n,...e)}function pe(n,e,...t){if(!n)throw ac(e,...t)}function Kt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ts(e),new Error(e)}function Vs(n,e){n||Kt(e)}function O6(){return yu()==="http:"||yu()==="https:"}function yu(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function N6(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(O6()||th()||"connection"in navigator)?navigator.onLine:!0}function D6(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Bi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vs(t>e,"Short delay should be less than long delay!"),this.isMobile=M2()||z2()}get(){return N6()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function V6(n,e){Vs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Vh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const M6={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const F6=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],U6=new Bi(3e4,6e4);function er(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Dn(n,e,t,r,i={}){return Mh(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=ih({...a,key:n.config.apiKey}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...s};return U2()||(h.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&oa(n.emulatorConfig.host)&&(h.credentials="include"),Vh.fetch()(await Fh(n,n.config.apiHost,t,c),h)})}async function Mh(n,e,t){n._canInitEmulator=!1;const r={...M6,...e};try{const i=new B6(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ds(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ds(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ds(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw ds(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Dh(n,p,h);br(n,p)}}catch(i){if(i instanceof Nt)throw i;br(n,"network-request-failed",{message:String(i)})}}async function da(n,e,t,r,i={}){const s=await Dn(n,e,t,r,i);return"mfaPendingCredential"in s&&br(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Fh(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?V6(n.config,i):`${n.config.apiScheme}://${i}`;return F6.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function z6(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class B6{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(sc(this.auth,"network-request-failed")),U6.get())})}}function ds(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=sc(n,e,r);return i.customData._tokenResponse=t,i}function _u(n){return n!==void 0&&n.enterprise!==void 0}class $6{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return z6(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function q6(n,e){return Dn(n,"GET","/v2/recaptchaConfig",er(n,e))}/**
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
 */async function j6(n,e){return Dn(n,"POST","/v1/accounts:delete",e)}async function Ms(n,e){return Dn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ui(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function H6(n,e=!1){const t=lt(n),r=await t.getIdToken(e),i=Uh(r);pe(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:ui(uo(i.auth_time)),issuedAtTime:ui(uo(i.iat)),expirationTime:ui(uo(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function uo(n){return Number(n)*1e3}function Uh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ts("JWT malformed, contained fewer than 3 sections"),null;try{const i=J1(t);return i?JSON.parse(i):(Ts("Failed to decode base64 JWT payload"),null)}catch(i){return Ts("Caught error parsing JWT payload as JSON",i?.toString()),null}}function vu(n){const e=Uh(n);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Nt&&G6(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function G6({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class W6{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ko{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Us(n){const e=n.auth,t=await n.getIdToken(),r=await Fs(n,Ms(e,{idToken:t}));pe(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=i.providerUserInfo?.length?zh(i.providerUserInfo):[],a=Y6(n.providerData,s),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!a?.length,h=c?l:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ko(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function K6(n){const e=lt(n);await Us(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Y6(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function zh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Q6(n,e){const t=await Mh(n,{},async()=>{const r=ih({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Fh(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&oa(n.emulatorConfig.host)&&(l.credentials="include"),Vh.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function X6(n,e){return Dn(n,"POST","/v2/accounts:revokeToken",er(n,e))}/**
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
 */class yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const t=vu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Q6(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new yr;return r&&(pe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(pe(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(pe(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yr,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
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
 */function hn(n,e){pe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class kt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new W6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ko(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return pe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return H6(this,e)}reload(){return K6(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Us(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(Gn(this.auth));const e=await this.getIdToken();return await Fs(this,j6(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:m,emailVerified:A,isAnonymous:R,providerData:L,stsTokenManager:M}=t;pe(m&&M,e,"internal-error");const B=yr.fromJSON(this.name,M);pe(typeof m=="string",e,"internal-error"),hn(r,e.name),hn(i,e.name),pe(typeof A=="boolean",e,"internal-error"),pe(typeof R=="boolean",e,"internal-error"),hn(s,e.name),hn(a,e.name),hn(c,e.name),hn(l,e.name),hn(h,e.name),hn(p,e.name);const J=new kt({uid:m,auth:e,email:i,emailVerified:A,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:s,tenantId:c,stsTokenManager:B,createdAt:h,lastLoginAt:p});return L&&Array.isArray(L)&&(J.providerData=L.map(le=>({...le}))),l&&(J._redirectEventId=l),J}static async _fromIdTokenResponse(e,t,r=!1){const i=new yr;i.updateFromServerResponse(t);const s=new kt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Us(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];pe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?zh(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,c=new yr;c.updateFromIdToken(r);const l=new kt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ko(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,h),l}}/**
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
 */const wu=new Map;function jn(n){Vs(n instanceof Function,"Expected a class definition");let e=wu.get(n);return e?(Vs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,wu.set(n,e),e)}/**
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
 */class Bh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bh.type="NONE";const Eu=Bh;/**
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
 */function ho(n,e,t){return`firebase:${n}:${e}:${t}`}class _r{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ho(this.userKey,i.apiKey,s),this.fullPersistenceKey=ho("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ms(this.auth,{idToken:e}).catch(()=>{});return t?kt._fromGetAccountInfoResponse(this.auth,t,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new _r(jn(Eu),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||jn(Eu);const a=ho(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const p=await h._get(a);if(p){let m;if(typeof p=="string"){const A=await Ms(e,{idToken:p}).catch(()=>{});if(!A)break;m=await kt._fromGetAccountInfoResponse(e,A,p)}else m=kt._fromJSON(e,p);h!==s&&(c=m),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new _r(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new _r(s,e,r))}}/**
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
 */function bu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J6(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rm(e))return"Blackberry";if(im(e))return"Webos";if(Z6(e))return"Safari";if((e.includes("chrome/")||em(e))&&!e.includes("edge/"))return"Chrome";if(nm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function J6(n=Rt()){return/firefox\//i.test(n)}function Z6(n=Rt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function em(n=Rt()){return/crios\//i.test(n)}function tm(n=Rt()){return/iemobile/i.test(n)}function nm(n=Rt()){return/android/i.test(n)}function rm(n=Rt()){return/blackberry/i.test(n)}function im(n=Rt()){return/webos/i.test(n)}/**
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
 */function $h(n,e=[]){let t;switch(n){case"Browser":t=bu(Rt());break;case"Worker":t=`${bu(Rt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${la}/${r}`}/**
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
 */class sm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function am(n,e={}){return Dn(n,"GET","/v2/passwordPolicy",er(n,e))}/**
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
 */const om=6;class cm{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??om,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class lm{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tu(this),this.idTokenSubscription=new Tu(this),this.beforeStateQueue=new sm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await _r.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ms(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ft(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===a)&&c?.user&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Us(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=D6()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(Gn(this));const t=e?lt(e):null;return t&&pe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(Gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(Gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await am(this),t=new cm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await X6(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jn(e)||this._popupRedirectResolver;pe(t,this,"argument-error"),this.redirectPersistenceManager=await _r.create(this,[jn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$h(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&L6(`Error while retrieving App Check token: ${e.error}`),e?.token}}function $i(n){return lt(n)}class Tu{constructor(e){this.auth=e,this.observer=null,this.addObserver=G2(t=>this.observer=t)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function um(n){oc=n}function hm(n){return oc.loadJS(n)}function dm(){return oc.recaptchaEnterpriseScript}class pm{constructor(){this.enterprise=new fm}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class fm{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const mm="recaptcha-enterprise",qh="NO_RECAPTCHA",Iu="onFirebaseAuthREInstanceReady";class pn{constructor(e){this.type=mm,this.auth=$i(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{q6(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new $6(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function i(s,a,c){const l=window.grecaptcha;_u(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(qh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pm().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(async c=>{if(!t&&_u(window.grecaptcha)&&pn.scriptInjectionDeferred)await pn.scriptInjectionDeferred.promise,i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=dm();l.length!==0&&(l+=c+`&onload=${Iu}`),pn.scriptInjectionDeferred=new eh,window[Iu]=()=>{pn.scriptInjectionDeferred?.resolve()},hm(l).then(()=>pn.scriptInjectionDeferred?.promise).then(()=>{i(c,s,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}pn.scriptInjectionDeferred=null;async function Au(n,e,t,r=!1,i=!1){const s=new pn(n);let a;if(i)a=qh;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Po(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Au(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Au(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
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
 */function gm(n,e){const t=Rr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Er(s,e??{}))return i;br(i,"already-initialized")}return t.initialize({options:e})}function ym(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(jn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}/**
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
 */class _m{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,t){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}async function vm(n,e){return Dn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function wm(n,e){return da(n,"POST","/v1/accounts:signInWithPassword",er(n,e))}/**
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
 */async function Em(n,e){return da(n,"POST","/v1/accounts:signInWithEmailLink",er(n,e))}async function bm(n,e){return da(n,"POST","/v1/accounts:signInWithEmailLink",er(n,e))}/**
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
 */class Ei extends _m{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ei(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ei(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Po(e,t,"signInWithPassword",wm);case"emailLink":return Em(e,{email:this._email,oobCode:this._password});default:br(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Po(e,r,"signUpPassword",vm);case"emailLink":return bm(e,{idToken:t,email:this._email,oobCode:this._password});default:br(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */function Tm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Im(n){const e=ii(si(n)).link,t=e?ii(si(e)).deep_link_id:null,r=ii(si(n)).deep_link_id;return(r?ii(si(r)).link:null)||r||t||e||n}class cc{constructor(e){const t=ii(si(e)),r=t.apiKey??null,i=t.oobCode??null,s=Tm(t.mode??null);pe(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Im(e);try{return new cc(t)}catch{return null}}}/**
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
 */class Lr{constructor(){this.providerId=Lr.PROVIDER_ID}static credential(e,t){return Ei._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=cc.parseLink(t);return pe(r,"argument-error"),Ei._fromEmailAndCode(e,r.code,r.tenantId)}}Lr.PROVIDER_ID="password";Lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */async function Am(n,e){return da(n,"POST","/v1/accounts:signUp",er(n,e))}/**
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
 */class bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await kt._fromIdTokenResponse(e,r,i),a=xu(r);return new bi({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=xu(r);return new bi({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function xu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class zs extends Nt{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new zs(e,t,r,i)}}function xm(n,e,t,r){return t._getIdTokenResponse(n).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zs._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */async function Cm(n,e,t=!1){if(Ft(n.app))return Promise.reject(Gn(n));const r="signIn",i=await xm(n,r,e),s=await bi._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function Sm(n,e){return Cm($i(n),e)}/**
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
 */async function jh(n){const e=$i(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function km(n,e,t){if(Ft(n.app))return Promise.reject(Gn(n));const r=$i(n),a=await Po(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Am).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&jh(n),l}),c=await bi._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function Pm(n,e,t){return Ft(n.app)?Promise.reject(Gn(n)):Sm(lt(n),Lr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jh(n),r})}/**
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
 */async function Rm(n,e){return Dn(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Lm(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=lt(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Fs(r,Rm(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Om(n){return lt(n).signOut()}const Cu="__sak";/**
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
 */function Nm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new pa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async h=>h(t.origin,s)),l=await Nm(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
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
 */function Dm(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Vm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const h=Dm("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const A=m;if(A.data.eventId===h)switch(A.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(A.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Su(){return window}/**
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
 */function Hh(){return typeof Su().WorkerGlobalScope<"u"&&typeof Su().importScripts=="function"}async function Mm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fm(){return navigator?.serviceWorker?.controller||null}function Um(){return Hh()?self:null}/**
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
 */const Gh="firebaseLocalStorageDb",zm=1,Bs="firebaseLocalStorage",Wh="fbase_key";class qi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fa(n,e){return n.transaction([Bs],e?"readwrite":"readonly").objectStore(Bs)}function Bm(){const n=indexedDB.deleteDatabase(Gh);return new qi(n).toPromise()}function Kh(){const n=indexedDB.open(Gh,zm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Bs,{keyPath:Wh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Bs)?e(r):(r.close(),await Bm(),e(await Kh()))})})}async function ku(n,e,t){const r=fa(n,!0).put({[Wh]:e,value:t});return new qi(r).toPromise()}async function $m(n,e){const t=fa(n,!1).get(e),r=await new qi(t).toPromise();return r===void 0?null:r.value}function Pu(n,e){const t=fa(n,!0).delete(e);return new qi(t).toPromise()}const qm=800,jm=3;class Yh{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Kh(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>jm)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Hh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(Um()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Mm(),!this.activeServiceWorker)return;this.sender=new Vm(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await ku(e,Cu,"1"),await Pu(e,Cu)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ku(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>$m(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Pu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fa(i,!1).getAll();return new qi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yh.type="LOCAL";const Hm=Yh;new Bi(3e4,6e4);/**
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
 */new Bi(2e3,1e4);/**
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
 */new Bi(3e4,6e4);/**
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
 */new Bi(5e3,15e3);var Ru="@firebase/auth",Lu="1.13.3";/**
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
 */class Gm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Wm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Km(n){qt(new Lt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;pe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$h(n)},h=new lm(r,i,s,l);return ym(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),qt(new Lt("auth-internal",e=>{const t=$i(e.getProvider("auth").getImmediate());return(r=>new Gm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(Ru,Lu,Wm(n)),Tt(Ru,Lu,"esm2020")}/**
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
 */const Ym=5*60;D2("authIdTokenMaxAge");function Qm(){return document.getElementsByTagName("head")?.[0]??document}um({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=sc("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Qm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Km("Browser");var Ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wn,Qh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function v(){}v.prototype=g.prototype,w.F=g.prototype,w.prototype=new v,w.prototype.constructor=w,w.D=function(I,b,C){for(var y=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)y[ge-2]=arguments[ge];return g.prototype[b].apply(I,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,v){v||(v=0);const I=Array(16);if(typeof g=="string")for(var b=0;b<16;++b)I[b]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(b=0;b<16;++b)I[b]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=w.g[0],v=w.g[1],b=w.g[2];let C=w.g[3],y;y=g+(C^v&(b^C))+I[0]+3614090360&4294967295,g=v+(y<<7&4294967295|y>>>25),y=C+(b^g&(v^b))+I[1]+3905402710&4294967295,C=g+(y<<12&4294967295|y>>>20),y=b+(v^C&(g^v))+I[2]+606105819&4294967295,b=C+(y<<17&4294967295|y>>>15),y=v+(g^b&(C^g))+I[3]+3250441966&4294967295,v=b+(y<<22&4294967295|y>>>10),y=g+(C^v&(b^C))+I[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=C+(b^g&(v^b))+I[5]+1200080426&4294967295,C=g+(y<<12&4294967295|y>>>20),y=b+(v^C&(g^v))+I[6]+2821735955&4294967295,b=C+(y<<17&4294967295|y>>>15),y=v+(g^b&(C^g))+I[7]+4249261313&4294967295,v=b+(y<<22&4294967295|y>>>10),y=g+(C^v&(b^C))+I[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=C+(b^g&(v^b))+I[9]+2336552879&4294967295,C=g+(y<<12&4294967295|y>>>20),y=b+(v^C&(g^v))+I[10]+4294925233&4294967295,b=C+(y<<17&4294967295|y>>>15),y=v+(g^b&(C^g))+I[11]+2304563134&4294967295,v=b+(y<<22&4294967295|y>>>10),y=g+(C^v&(b^C))+I[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=C+(b^g&(v^b))+I[13]+4254626195&4294967295,C=g+(y<<12&4294967295|y>>>20),y=b+(v^C&(g^v))+I[14]+2792965006&4294967295,b=C+(y<<17&4294967295|y>>>15),y=v+(g^b&(C^g))+I[15]+1236535329&4294967295,v=b+(y<<22&4294967295|y>>>10),y=g+(b^C&(v^b))+I[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=C+(v^b&(g^v))+I[6]+3225465664&4294967295,C=g+(y<<9&4294967295|y>>>23),y=b+(g^v&(C^g))+I[11]+643717713&4294967295,b=C+(y<<14&4294967295|y>>>18),y=v+(C^g&(b^C))+I[0]+3921069994&4294967295,v=b+(y<<20&4294967295|y>>>12),y=g+(b^C&(v^b))+I[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=C+(v^b&(g^v))+I[10]+38016083&4294967295,C=g+(y<<9&4294967295|y>>>23),y=b+(g^v&(C^g))+I[15]+3634488961&4294967295,b=C+(y<<14&4294967295|y>>>18),y=v+(C^g&(b^C))+I[4]+3889429448&4294967295,v=b+(y<<20&4294967295|y>>>12),y=g+(b^C&(v^b))+I[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=C+(v^b&(g^v))+I[14]+3275163606&4294967295,C=g+(y<<9&4294967295|y>>>23),y=b+(g^v&(C^g))+I[3]+4107603335&4294967295,b=C+(y<<14&4294967295|y>>>18),y=v+(C^g&(b^C))+I[8]+1163531501&4294967295,v=b+(y<<20&4294967295|y>>>12),y=g+(b^C&(v^b))+I[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=C+(v^b&(g^v))+I[2]+4243563512&4294967295,C=g+(y<<9&4294967295|y>>>23),y=b+(g^v&(C^g))+I[7]+1735328473&4294967295,b=C+(y<<14&4294967295|y>>>18),y=v+(C^g&(b^C))+I[12]+2368359562&4294967295,v=b+(y<<20&4294967295|y>>>12),y=g+(v^b^C)+I[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=C+(g^v^b)+I[8]+2272392833&4294967295,C=g+(y<<11&4294967295|y>>>21),y=b+(C^g^v)+I[11]+1839030562&4294967295,b=C+(y<<16&4294967295|y>>>16),y=v+(b^C^g)+I[14]+4259657740&4294967295,v=b+(y<<23&4294967295|y>>>9),y=g+(v^b^C)+I[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=C+(g^v^b)+I[4]+1272893353&4294967295,C=g+(y<<11&4294967295|y>>>21),y=b+(C^g^v)+I[7]+4139469664&4294967295,b=C+(y<<16&4294967295|y>>>16),y=v+(b^C^g)+I[10]+3200236656&4294967295,v=b+(y<<23&4294967295|y>>>9),y=g+(v^b^C)+I[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=C+(g^v^b)+I[0]+3936430074&4294967295,C=g+(y<<11&4294967295|y>>>21),y=b+(C^g^v)+I[3]+3572445317&4294967295,b=C+(y<<16&4294967295|y>>>16),y=v+(b^C^g)+I[6]+76029189&4294967295,v=b+(y<<23&4294967295|y>>>9),y=g+(v^b^C)+I[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=C+(g^v^b)+I[12]+3873151461&4294967295,C=g+(y<<11&4294967295|y>>>21),y=b+(C^g^v)+I[15]+530742520&4294967295,b=C+(y<<16&4294967295|y>>>16),y=v+(b^C^g)+I[2]+3299628645&4294967295,v=b+(y<<23&4294967295|y>>>9),y=g+(b^(v|~C))+I[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=C+(v^(g|~b))+I[7]+1126891415&4294967295,C=g+(y<<10&4294967295|y>>>22),y=b+(g^(C|~v))+I[14]+2878612391&4294967295,b=C+(y<<15&4294967295|y>>>17),y=v+(C^(b|~g))+I[5]+4237533241&4294967295,v=b+(y<<21&4294967295|y>>>11),y=g+(b^(v|~C))+I[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=C+(v^(g|~b))+I[3]+2399980690&4294967295,C=g+(y<<10&4294967295|y>>>22),y=b+(g^(C|~v))+I[10]+4293915773&4294967295,b=C+(y<<15&4294967295|y>>>17),y=v+(C^(b|~g))+I[1]+2240044497&4294967295,v=b+(y<<21&4294967295|y>>>11),y=g+(b^(v|~C))+I[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=C+(v^(g|~b))+I[15]+4264355552&4294967295,C=g+(y<<10&4294967295|y>>>22),y=b+(g^(C|~v))+I[6]+2734768916&4294967295,b=C+(y<<15&4294967295|y>>>17),y=v+(C^(b|~g))+I[13]+1309151649&4294967295,v=b+(y<<21&4294967295|y>>>11),y=g+(b^(v|~C))+I[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=C+(v^(g|~b))+I[11]+3174756917&4294967295,C=g+(y<<10&4294967295|y>>>22),y=b+(g^(C|~v))+I[2]+718787259&4294967295,b=C+(y<<15&4294967295|y>>>17),y=v+(C^(b|~g))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(b+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.v=function(w,g){g===void 0&&(g=w.length);const v=g-this.blockSize,I=this.C;let b=this.h,C=0;for(;C<g;){if(b==0)for(;C<=v;)i(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<g;)if(I[b++]=w.charCodeAt(C++),b==this.blockSize){i(this,I),b=0;break}}else for(;C<g;)if(I[b++]=w[C++],b==this.blockSize){i(this,I),b=0;break}}this.h=b,this.o+=g},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;g=this.o*8;for(var v=w.length-8;v<w.length;++v)w[v]=g&255,g/=256;for(this.v(w),w=Array(16),g=0,v=0;v<4;++v)for(let I=0;I<32;I+=8)w[g++]=this.g[v]>>>I&255;return w};function s(w,g){var v=c;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=g(w)}function a(w,g){this.h=g;const v=[];let I=!0;for(let b=w.length-1;b>=0;b--){const C=w[b]|0;I&&C==g||(v[b]=C,I=!1)}this.g=v}var c={};function l(w){return-128<=w&&w<128?s(w,function(g){return new a([g|0],g<0?-1:0)}):new a([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(w<0)return B(h(-w));const g=[];let v=1;for(let I=0;w>=v;I++)g[I]=w/v|0,v*=4294967296;return new a(g,0)}function p(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return B(p(w.substring(1),g));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(g,8));let I=m;for(let C=0;C<w.length;C+=8){var b=Math.min(8,w.length-C);const y=parseInt(w.substring(C,C+b),g);b<8?(b=h(Math.pow(g,b)),I=I.j(b).add(h(y))):(I=I.j(v),I=I.add(h(y)))}return I}var m=l(0),A=l(1),R=l(16777216);n=a.prototype,n.m=function(){if(M(this))return-B(this).m();let w=0,g=1;for(let v=0;v<this.g.length;v++){const I=this.i(v);w+=(I>=0?I:4294967296+I)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(L(this))return"0";if(M(this))return"-"+B(this).toString(w);const g=h(Math.pow(w,6));var v=this;let I="";for(;;){const b=j(v,g).g;v=J(v,b.j(g));let C=((v.g.length>0?v.g[0]:v.h)>>>0).toString(w);if(v=b,L(v))return C+I;for(;C.length<6;)C="0"+C;I=C+I}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function L(w){if(w.h!=0)return!1;for(let g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function M(w){return w.h==-1}n.l=function(w){return w=J(this,w),M(w)?-1:L(w)?0:1};function B(w){const g=w.g.length,v=[];for(let I=0;I<g;I++)v[I]=~w.g[I];return new a(v,~w.h).add(A)}n.abs=function(){return M(this)?B(this):this},n.add=function(w){const g=Math.max(this.g.length,w.g.length),v=[];let I=0;for(let b=0;b<=g;b++){let C=I+(this.i(b)&65535)+(w.i(b)&65535),y=(C>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);I=y>>>16,C&=65535,y&=65535,v[b]=y<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function J(w,g){return w.add(B(g))}n.j=function(w){if(L(this)||L(w))return m;if(M(this))return M(w)?B(this).j(B(w)):B(B(this).j(w));if(M(w))return B(this.j(B(w)));if(this.l(R)<0&&w.l(R)<0)return h(this.m()*w.m());const g=this.g.length+w.g.length,v=[];for(var I=0;I<2*g;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(let b=0;b<w.g.length;b++){const C=this.i(I)>>>16,y=this.i(I)&65535,ge=w.i(b)>>>16,rt=w.i(b)&65535;v[2*I+2*b]+=y*rt,le(v,2*I+2*b),v[2*I+2*b+1]+=C*rt,le(v,2*I+2*b+1),v[2*I+2*b+1]+=y*ge,le(v,2*I+2*b+1),v[2*I+2*b+2]+=C*ge,le(v,2*I+2*b+2)}for(w=0;w<g;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=g;w<2*g;w++)v[w]=0;return new a(v,0)};function le(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function V(w,g){this.g=w,this.h=g}function j(w,g){if(L(g))throw Error("division by zero");if(L(w))return new V(m,m);if(M(w))return g=j(B(w),g),new V(B(g.g),B(g.h));if(M(g))return g=j(w,B(g)),new V(B(g.g),g.h);if(w.g.length>30){if(M(w)||M(g))throw Error("slowDivide_ only works with positive integers.");for(var v=A,I=g;I.l(w)<=0;)v=oe(v),I=oe(I);var b=ne(v,1),C=ne(I,1);for(I=ne(I,2),v=ne(v,2);!L(I);){var y=C.add(I);y.l(w)<=0&&(b=b.add(v),C=y),I=ne(I,1),v=ne(v,1)}return g=J(w,b.j(g)),new V(b,g)}for(b=m;w.l(g)>=0;){for(v=Math.max(1,Math.floor(w.m()/g.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),C=h(v),y=C.j(g);M(y)||y.l(w)>0;)v-=I,C=h(v),y=C.j(g);L(C)&&(C=A),b=b.add(C),w=J(w,y)}return new V(b,w)}n.B=function(w){return j(this,w).h},n.and=function(w){const g=Math.max(this.g.length,w.g.length),v=[];for(let I=0;I<g;I++)v[I]=this.i(I)&w.i(I);return new a(v,this.h&w.h)},n.or=function(w){const g=Math.max(this.g.length,w.g.length),v=[];for(let I=0;I<g;I++)v[I]=this.i(I)|w.i(I);return new a(v,this.h|w.h)},n.xor=function(w){const g=Math.max(this.g.length,w.g.length),v=[];for(let I=0;I<g;I++)v[I]=this.i(I)^w.i(I);return new a(v,this.h^w.h)};function oe(w){const g=w.g.length+1,v=[];for(let I=0;I<g;I++)v[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(v,w.h)}function ne(w,g){const v=g>>5;g%=32;const I=w.g.length-v,b=[];for(let C=0;C<I;C++)b[C]=g>0?w.i(C+v)>>>g|w.i(C+v+1)<<32-g:w.i(C+v);return new a(b,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Qh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,wn=a}).apply(typeof Ou<"u"?Ou:typeof self<"u"?self:typeof window<"u"?window:{});var ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xh,ai,Jh,Is,Ro,Zh,ed,td;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ps=="object"&&ps];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var d=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var S=o[f];if(!(S in d))break e;d=d[S]}o=o[o.length-1],f=d[o],u=u(f),u!=f&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(u){var d=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&d.push([f,u[f]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,d){return o.call.apply(o.bind,arguments)}function h(o,u,d){return h=l,h.apply(null,arguments)}function p(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function m(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(f,S,P){for(var U=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)U[ie-2]=arguments[ie];return u.prototype[S].apply(f,U)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const u=o.length;if(u>0){const d=Array(u);for(let f=0;f<u;f++)d[f]=o[f];return d}return[]}function L(o,u){for(let f=1;f<arguments.length;f++){const S=arguments[f];var d=typeof S;if(d=d!="object"?d:S?Array.isArray(S)?"array":d:"null",d=="array"||d=="object"&&typeof S.length=="number"){d=o.length||0;const P=S.length||0;o.length=d+P;for(let U=0;U<P;U++)o[d+U]=S[U]}else o.push(S)}}class M{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){a.setTimeout(()=>{throw o},0)}function J(){var o=w;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class le{constructor(){this.h=this.g=null}add(u,d){const f=V.get();f.set(u,d),this.h?this.h.next=f:this.g=f,this.h=f}}var V=new M(()=>new j,o=>o.reset());class j{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,ne=!1,w=new le,g=()=>{const o=Promise.resolve(void 0);oe=()=>{o.then(v)}};function v(){for(var o;o=J();){try{o.h.call(o.g)}catch(d){B(d)}var u=V;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}ne=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function ge(o,u){b.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}m(ge,b),ge.prototype.init=function(o,u){const d=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ge.Z.h.call(this)},ge.prototype.h=function(){ge.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var rt="closure_listenable_"+(Math.random()*1e6|0),Me=0;function ar(o,u,d,f,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!f,this.ha=S,this.key=++Me,this.da=this.fa=!1}function He(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function xe(o,u,d){for(const f in o)u.call(d,o[f],f,o)}function Fe(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function $e(o){const u={};for(const d in o)u[d]=o[d];return u}const pt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function At(o,u){let d,f;for(let S=1;S<arguments.length;S++){f=arguments[S];for(d in f)o[d]=f[d];for(let P=0;P<pt.length;P++)d=pt[P],Object.prototype.hasOwnProperty.call(f,d)&&(o[d]=f[d])}}function ft(o){this.src=o,this.g={},this.h=0}ft.prototype.add=function(o,u,d,f,S){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const U=nn(o,u,f,S);return U>-1?(u=o[U],d||(u.fa=!1)):(u=new ar(u,this.src,P,!!f,S),u.fa=d,o.push(u)),u};function Je(o,u){const d=u.type;if(d in o.g){var f=o.g[d],S=Array.prototype.indexOf.call(f,u,void 0),P;(P=S>=0)&&Array.prototype.splice.call(f,S,1),P&&(He(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function nn(o,u,d,f){for(let S=0;S<o.length;++S){const P=o[S];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==f)return S}return-1}var rn="closure_lm_"+(Math.random()*1e6|0),Da={};function el(o,u,d,f,S){if(Array.isArray(u)){for(let P=0;P<u.length;P++)el(o,u[P],d,f,S);return null}return d=rl(d),o&&o[rt]?o.J(u,d,c(f)?!!f.capture:!1,S):Wp(o,u,d,!1,f,S)}function Wp(o,u,d,f,S,P){if(!u)throw Error("Invalid event type");const U=c(S)?!!S.capture:!!S;let ie=Ma(o);if(ie||(o[rn]=ie=new ft(o)),d=ie.add(u,d,f,U,P),d.proxy)return d;if(f=Kp(),d.proxy=f,f.src=o,f.listener=d,o.addEventListener)C||(S=U),S===void 0&&(S=!1),o.addEventListener(u.toString(),f,S);else if(o.attachEvent)o.attachEvent(nl(u.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Kp(){function o(d){return u.call(o.src,o.listener,d)}const u=Yp;return o}function tl(o,u,d,f,S){if(Array.isArray(u))for(var P=0;P<u.length;P++)tl(o,u[P],d,f,S);else f=c(f)?!!f.capture:!!f,d=rl(d),o&&o[rt]?(o=o.i,P=String(u).toString(),P in o.g&&(u=o.g[P],d=nn(u,d,f,S),d>-1&&(He(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[P],o.h--)))):o&&(o=Ma(o))&&(u=o.g[u.toString()],o=-1,u&&(o=nn(u,d,f,S)),(d=o>-1?u[o]:null)&&Va(d))}function Va(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[rt])Je(u.i,o);else{var d=o.type,f=o.proxy;u.removeEventListener?u.removeEventListener(d,f,o.capture):u.detachEvent?u.detachEvent(nl(d),f):u.addListener&&u.removeListener&&u.removeListener(f),(d=Ma(u))?(Je(d,o),d.h==0&&(d.src=null,u[rn]=null)):He(o)}}}function nl(o){return o in Da?Da[o]:Da[o]="on"+o}function Yp(o,u){if(o.da)o=!0;else{u=new ge(u,this);const d=o.listener,f=o.ha||o.src;o.fa&&Va(o),o=d.call(f,u)}return o}function Ma(o){return o=o[rn],o instanceof ft?o:null}var Fa="__closure_events_fn_"+(Math.random()*1e9>>>0);function rl(o){return typeof o=="function"?o:(o[Fa]||(o[Fa]=function(u){return o.handleEvent(u)}),o[Fa])}function Ge(){I.call(this),this.i=new ft(this),this.M=this,this.G=null}m(Ge,I),Ge.prototype[rt]=!0,Ge.prototype.removeEventListener=function(o,u,d,f){tl(this,o,u,d,f)};function Ze(o,u){var d,f=o.G;if(f)for(d=[];f;f=f.G)d.push(f);if(o=o.M,f=u.type||u,typeof u=="string")u=new b(u,o);else if(u instanceof b)u.target=u.target||o;else{var S=u;u=new b(f,o),At(u,S)}S=!0;let P,U;if(d)for(U=d.length-1;U>=0;U--)P=u.g=d[U],S=es(P,f,!0,u)&&S;if(P=u.g=o,S=es(P,f,!0,u)&&S,S=es(P,f,!1,u)&&S,d)for(U=0;U<d.length;U++)P=u.g=d[U],S=es(P,f,!1,u)&&S}Ge.prototype.N=function(){if(Ge.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let f=0;f<d.length;f++)He(d[f]);delete o.g[u],o.h--}}this.G=null},Ge.prototype.J=function(o,u,d,f){return this.i.add(String(o),u,!1,d,f)},Ge.prototype.K=function(o,u,d,f){return this.i.add(String(o),u,!0,d,f)};function es(o,u,d,f){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let S=!0;for(let P=0;P<u.length;++P){const U=u[P];if(U&&!U.da&&U.capture==d){const ie=U.listener,Le=U.ha||U.src;U.fa&&Je(o.i,U),S=ie.call(Le,f)!==!1&&S}}return S&&!f.defaultPrevented}function Qp(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function il(o){o.g=Qp(()=>{o.g=null,o.i&&(o.i=!1,il(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Xp extends I{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:il(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zr(o){I.call(this),this.h=o,this.g={}}m(zr,I);var sl=[];function al(o){xe(o.g,function(u,d){this.g.hasOwnProperty(d)&&Va(u)},o),o.g={}}zr.prototype.N=function(){zr.Z.N.call(this),al(this)},zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ua=a.JSON.stringify,Jp=a.JSON.parse,Zp=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ol(){}function cl(){}var Br={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function za(){b.call(this,"d")}m(za,b);function Ba(){b.call(this,"c")}m(Ba,b);var Vn={},ll=null;function ts(){return ll=ll||new Ge}Vn.Ia="serverreachability";function ul(o){b.call(this,Vn.Ia,o)}m(ul,b);function $r(o){const u=ts();Ze(u,new ul(u))}Vn.STAT_EVENT="statevent";function hl(o,u){b.call(this,Vn.STAT_EVENT,o),this.stat=u}m(hl,b);function et(o){const u=ts();Ze(u,new hl(u,o))}Vn.Ja="timingevent";function dl(o,u){b.call(this,Vn.Ja,o),this.size=u}m(dl,b);function qr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function jr(){this.g=!0}jr.prototype.ua=function(){this.g=!1};function e2(o,u,d,f,S,P){o.info(function(){if(o.g)if(P){var U="",ie=P.split("&");for(let me=0;me<ie.length;me++){var Le=ie[me].split("=");if(Le.length>1){const Ue=Le[0];Le=Le[1];const Vt=Ue.split("_");U=Vt.length>=2&&Vt[1]=="type"?U+(Ue+"="+Le+"&"):U+(Ue+"=redacted&")}}}else U=null;else U=P;return"XMLHTTP REQ ("+f+") [attempt "+S+"]: "+u+`
`+d+`
`+U})}function t2(o,u,d,f,S,P,U){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+S+"]: "+u+`
`+d+`
`+P+" "+U})}function or(o,u,d,f){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+r2(o,d)+(f?" "+f:"")})}function n2(o,u){o.info(function(){return"TIMEOUT: "+u})}jr.prototype.info=function(){};function r2(o,u){if(!o.g)return u;if(!u)return null;try{const P=JSON.parse(u);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var d=P[o];if(!(d.length<2)){var f=d[1];if(Array.isArray(f)&&!(f.length<1)){var S=f[0];if(S!="noop"&&S!="stop"&&S!="close")for(let U=1;U<f.length;U++)f[U]=""}}}}return Ua(P)}catch{return u}}var ns={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},pl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fl;function $a(){}m($a,ol),$a.prototype.g=function(){return new XMLHttpRequest},fl=new $a;function Hr(o){return encodeURIComponent(String(o))}function i2(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function sn(o,u,d,f){this.j=o,this.i=u,this.l=d,this.S=f||1,this.V=new zr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ml}function ml(){this.i=null,this.g="",this.h=!1}var gl={},qa={};function ja(o,u,d){o.M=1,o.A=is(Dt(u)),o.u=d,o.R=!0,yl(o,null)}function yl(o,u){o.F=Date.now(),rs(o),o.B=Dt(o.A);var d=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),Pl(d.i,"t",f),o.C=0,d=o.j.L,o.h=new ml,o.g=Kl(o.j,d?u:null,!o.u),o.P>0&&(o.O=new Xp(h(o.Y,o,o.g),o.P)),u=o.V,d=o.g,f=o.ba;var S="readystatechange";Array.isArray(S)||(S&&(sl[0]=S.toString()),S=sl);for(let P=0;P<S.length;P++){const U=el(d,S[P],f||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=o.J?$e(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),$r(),e2(o.i,o.v,o.B,o.l,o.S,o.u)}sn.prototype.ba=function(o){o=o.target;const u=this.O;u&&cn(o)==3?u.j():this.Y(o)},sn.prototype.Y=function(o){try{if(o==this.g)e:{const ie=cn(this.g),Le=this.g.ya(),me=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||Ml(this.g)))){this.K||ie!=4||Le==7||(Le==8||me<=0?$r(3):$r(2)),Ha(this);var u=this.g.ca();this.X=u;var d=s2(this);if(this.o=u==200,t2(this.i,this.v,this.B,this.l,this.S,ie,u),this.o){if(this.U&&!this.L){t:{if(this.g){var f,S=this.g;if((f=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(f)){var P=f;break t}}P=null}if(o=P)or(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ga(this,o);else{this.o=!1,this.m=3,et(12),Mn(this),Gr(this);break e}}if(this.R){o=!0;let Ue;for(;!this.K&&this.C<d.length;)if(Ue=a2(this,d),Ue==qa){ie==4&&(this.m=4,et(14),o=!1),or(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==gl){this.m=4,et(15),or(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else or(this.i,this.l,Ue,null),Ga(this,Ue);if(_l(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||d.length!=0||this.h.h||(this.m=1,et(16),o=!1),this.o=this.o&&o,!o)or(this.i,this.l,d,"[Invalid Chunked Response]"),Mn(this),Gr(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),eo(U),U.P=!0,et(11))}}else or(this.i,this.l,d,null),Ga(this,d);ie==4&&Mn(this),this.o&&!this.K&&(ie==4?jl(this.j,this):(this.o=!1,rs(this)))}else w2(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,et(12)):(this.m=0,et(13)),Mn(this),Gr(this)}}}catch{}finally{}};function s2(o){if(!_l(o))return o.g.la();const u=Ml(o.g);if(u==="")return"";let d="";const f=u.length,S=cn(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Mn(o),Gr(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<f;P++)o.h.h=!0,d+=o.h.i.decode(u[P],{stream:!(S&&P==f-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function _l(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function a2(o,u){var d=o.C,f=u.indexOf(`
`,d);return f==-1?qa:(d=Number(u.substring(d,f)),isNaN(d)?gl:(f+=1,f+d>u.length?qa:(u=u.slice(f,f+d),o.C=f+d,u)))}sn.prototype.cancel=function(){this.K=!0,Mn(this)};function rs(o){o.T=Date.now()+o.H,vl(o,o.H)}function vl(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=qr(h(o.aa,o),u)}function Ha(o){o.D&&(a.clearTimeout(o.D),o.D=null)}sn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(n2(this.i,this.B),this.M!=2&&($r(),et(17)),Mn(this),this.m=2,Gr(this)):vl(this,this.T-o)};function Gr(o){o.j.I==0||o.K||jl(o.j,o)}function Mn(o){Ha(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,al(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Ga(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||Wa(d.h,o))){if(!o.L&&Wa(d.h,o)&&d.I==3){try{var f=d.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var S=f;if(S[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)ls(d),os(d);else break e;Za(d),et(18)}}else d.xa=S[1],0<d.xa-d.K&&S[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=qr(h(d.Va,d),6e3));bl(d.h)<=1&&d.ta&&(d.ta=void 0)}else Un(d,11)}else if((o.L||d.g==o)&&ls(d),!y(u))for(S=d.Ba.g.parse(u),u=0;u<S.length;u++){let me=S[u];const Ue=me[0];if(!(Ue<=d.K))if(d.K=Ue,me=me[1],d.I==2)if(me[0]=="c"){d.M=me[1],d.ba=me[2];const Vt=me[3];Vt!=null&&(d.ka=Vt,d.j.info("VER="+d.ka));const zn=me[4];zn!=null&&(d.za=zn,d.j.info("SVER="+d.za));const ln=me[5];ln!=null&&typeof ln=="number"&&ln>0&&(f=1.5*ln,d.O=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const un=o.g;if(un){const hs=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hs){var P=f.h;P.g||hs.indexOf("spdy")==-1&&hs.indexOf("quic")==-1&&hs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ka(P,P.h),P.h=null))}if(f.G){const to=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;to&&(f.wa=to,ye(f.J,f.G,to))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),f=d;var U=o;if(f.na=Wl(f,f.L?f.ba:null,f.W),U.L){Tl(f.h,U);var ie=U,Le=f.O;Le&&(ie.H=Le),ie.D&&(Ha(ie),rs(ie)),f.g=U}else $l(f);d.i.length>0&&cs(d)}else me[0]!="stop"&&me[0]!="close"||Un(d,7);else d.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Un(d,7):Ja(d):me[0]!="noop"&&d.l&&d.l.qa(me),d.A=0)}}$r(4)}catch{}}var o2=class{constructor(o,u){this.g=o,this.map=u}};function wl(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function El(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function bl(o){return o.h?1:o.g?o.g.size:0}function Wa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ka(o,u){o.g?o.g.add(u):o.h=u}function Tl(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}wl.prototype.cancel=function(){if(this.i=Il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Il(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return R(o.i)}var Al=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function c2(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const f=o[d].indexOf("=");let S,P=null;f>=0?(S=o[d].substring(0,f),P=o[d].substring(f+1)):S=o[d],u(S,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function an(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof an?(this.l=o.l,Wr(this,o.j),this.o=o.o,this.g=o.g,Kr(this,o.u),this.h=o.h,Ya(this,Rl(o.i)),this.m=o.m):o&&(u=String(o).match(Al))?(this.l=!1,Wr(this,u[1]||"",!0),this.o=Yr(u[2]||""),this.g=Yr(u[3]||"",!0),Kr(this,u[4]),this.h=Yr(u[5]||"",!0),Ya(this,u[6]||"",!0),this.m=Yr(u[7]||"")):(this.l=!1,this.i=new Xr(null,this.l))}an.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Qr(u,xl,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Qr(u,xl,!0),"@"),o.push(Hr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Qr(d,d.charAt(0)=="/"?h2:u2,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Qr(d,p2)),o.join("")},an.prototype.resolve=function(o){const u=Dt(this);let d=!!o.j;d?Wr(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var f=o.h;if(d)Kr(u,o.u);else if(d=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var S=u.h.lastIndexOf("/");S!=-1&&(f=u.h.slice(0,S+1)+f)}if(S=f,S==".."||S==".")f="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){f=S.lastIndexOf("/",0)==0,S=S.split("/");const P=[];for(let U=0;U<S.length;){const ie=S[U++];ie=="."?f&&U==S.length&&P.push(""):ie==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),f&&U==S.length&&P.push("")):(P.push(ie),f=!0)}f=P.join("/")}else f=S}return d?u.h=f:d=o.i.toString()!=="",d?Ya(u,Rl(o.i)):d=!!o.m,d&&(u.m=o.m),u};function Dt(o){return new an(o)}function Wr(o,u,d){o.j=d?Yr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Kr(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Ya(o,u,d){u instanceof Xr?(o.i=u,f2(o.i,o.l)):(d||(u=Qr(u,d2)),o.i=new Xr(u,o.l))}function ye(o,u,d){o.i.set(u,d)}function is(o){return ye(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Yr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Qr(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,l2),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function l2(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var xl=/[#\/\?@]/g,u2=/[#\?:]/g,h2=/[#\?]/g,d2=/[#\?@]/g,p2=/#/g;function Xr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Fn(o){o.g||(o.g=new Map,o.h=0,o.i&&c2(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Xr.prototype,n.add=function(o,u){Fn(this),this.i=null,o=cr(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Cl(o,u){Fn(o),u=cr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Sl(o,u){return Fn(o),u=cr(o,u),o.g.has(u)}n.forEach=function(o,u){Fn(this),this.g.forEach(function(d,f){d.forEach(function(S){o.call(u,S,f,this)},this)},this)};function kl(o,u){Fn(o);let d=[];if(typeof u=="string")Sl(o,u)&&(d=d.concat(o.g.get(cr(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return Fn(this),this.i=null,o=cr(this,o),Sl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=kl(this,o),o.length>0?String(o[0]):u):u};function Pl(o,u,d){Cl(o,u),d.length>0&&(o.i=null,o.g.set(cr(o,u),R(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var d=u[f];const S=Hr(d);d=kl(this,d);for(let P=0;P<d.length;P++){let U=S;d[P]!==""&&(U+="="+Hr(d[P])),o.push(U)}}return this.i=o.join("&")};function Rl(o){const u=new Xr;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function cr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function f2(o,u){u&&!o.j&&(Fn(o),o.i=null,o.g.forEach(function(d,f){const S=f.toLowerCase();f!=S&&(Cl(this,f),Pl(this,S,d))},o)),o.j=u}function m2(o,u){const d=new jr;if(a.Image){const f=new Image;f.onload=p(on,d,"TestLoadImage: loaded",!0,u,f),f.onerror=p(on,d,"TestLoadImage: error",!1,u,f),f.onabort=p(on,d,"TestLoadImage: abort",!1,u,f),f.ontimeout=p(on,d,"TestLoadImage: timeout",!1,u,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else u(!1)}function g2(o,u){const d=new jr,f=new AbortController,S=setTimeout(()=>{f.abort(),on(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:f.signal}).then(P=>{clearTimeout(S),P.ok?on(d,"TestPingServer: ok",!0,u):on(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),on(d,"TestPingServer: error",!1,u)})}function on(o,u,d,f,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),f(d)}catch{}}function y2(){this.g=new Zp}function Qa(o){this.i=o.Sb||null,this.h=o.ab||!1}m(Qa,ol),Qa.prototype.g=function(){return new ss(this.i,this.h)};function ss(o,u){Ge.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ss,Ge),n=ss.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Zr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Jr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Zr(this)),this.g&&(this.readyState=3,Zr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ll(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ll(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Jr(this):Zr(this),this.readyState==3&&Ll(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Jr(this))},n.Na=function(o){this.g&&(this.response=o,Jr(this))},n.ga=function(){this.g&&Jr(this)};function Jr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Zr(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Zr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ol(o){let u="";return xe(o,function(d,f){u+=f,u+=":",u+=d,u+=`\r
`}),u}function Xa(o,u,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=Ol(d),typeof o=="string"?d!=null&&Hr(d):ye(o,u,d))}function be(o){Ge.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(be,Ge);var _2=/^https?$/i,v2=["POST","PUT"];n=be.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fl.g(),this.g.onreadystatechange=A(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Nl(this,P);return}if(o=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var S in f)d.set(S,f[S]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())d.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),S=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(v2,u,void 0)>=0)||f||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,U]of d)this.g.setRequestHeader(P,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){Nl(this,P)}};function Nl(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Dl(o),as(o)}function Dl(o){o.A||(o.A=!0,Ze(o,"complete"),Ze(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Ze(this,"complete"),Ze(this,"abort"),as(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),as(this,!0)),be.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Vl(this):this.Xa())},n.Xa=function(){Vl(this)};function Vl(o){if(o.h&&typeof s<"u"){if(o.v&&cn(o)==4)setTimeout(o.Ca.bind(o),0);else if(Ze(o,"readystatechange"),cn(o)==4){o.h=!1;try{const P=o.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var f;if(f=P===0){let U=String(o.D).match(Al)[1]||null;!U&&a.self&&a.self.location&&(U=a.self.location.protocol.slice(0,-1)),f=!_2.test(U?U.toLowerCase():"")}d=f}if(d)Ze(o,"complete"),Ze(o,"success");else{o.o=6;try{var S=cn(o)>2?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.ca()+"]",Dl(o)}}finally{as(o)}}}}function as(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||Ze(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function cn(o){return o.g?o.g.readyState:0}n.ca=function(){try{return cn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Jp(u)}};function Ml(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function w2(o){const u={};o=(o.g&&cn(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(y(o[f]))continue;var d=i2(o[f]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[S]||[];u[S]=P,P.push(d)}Fe(u,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ei(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Fl(o){this.za=0,this.i=[],this.j=new jr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ei("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ei("baseRetryDelayMs",5e3,o),this.Za=ei("retryDelaySeedMs",1e4,o),this.Ta=ei("forwardChannelMaxRetries",2,o),this.va=ei("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new wl(o&&o.concurrentRequestLimit),this.Ba=new y2,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Fl.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,f){et(0),this.W=o,this.H=u||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.J=Wl(this,null,this.W),cs(this)};function Ja(o){if(Ul(o),o.I==3){var u=o.V++,d=Dt(o.J);if(ye(d,"SID",o.M),ye(d,"RID",u),ye(d,"TYPE","terminate"),ti(o,d),u=new sn(o,o.j,u),u.M=2,u.A=is(Dt(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=Kl(u.j,null),u.g.ea(u.A)),u.F=Date.now(),rs(u)}Gl(o)}function os(o){o.g&&(eo(o),o.g.cancel(),o.g=null)}function Ul(o){os(o),o.v&&(a.clearTimeout(o.v),o.v=null),ls(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function cs(o){if(!El(o.h)&&!o.m){o.m=!0;var u=o.Ea;oe||g(),ne||(oe(),ne=!0),w.add(u,o),o.D=0}}function E2(o,u){return bl(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=qr(h(o.Ea,o,u),Hl(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const S=new sn(this,this.j,o);let P=this.o;if(this.U&&(P?(P=$e(P),At(P,this.U)):P=this.U),this.u!==null||this.R||(S.J=P,P=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Bl(this,S,u),d=Dt(this.J),ye(d,"RID",o),ye(d,"CVER",22),this.G&&ye(d,"X-HTTP-Session-Id",this.G),ti(this,d),P&&(this.R?u="headers="+Hr(Ol(P))+"&"+u:this.u&&Xa(d,this.u,P)),Ka(this.h,S),this.Ra&&ye(d,"TYPE","init"),this.S?(ye(d,"$req",u),ye(d,"SID","null"),S.U=!0,ja(S,d,null)):ja(S,d,u),this.I=2}}else this.I==3&&(o?zl(this,o):this.i.length==0||El(this.h)||zl(this))};function zl(o,u){var d;u?d=u.l:d=o.V++;const f=Dt(o.J);ye(f,"SID",o.M),ye(f,"RID",d),ye(f,"AID",o.K),ti(o,f),o.u&&o.o&&Xa(f,o.u,o.o),d=new sn(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Bl(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ka(o.h,d),ja(d,f,u)}function ti(o,u){o.H&&xe(o.H,function(d,f){ye(u,f,d)}),o.l&&xe({},function(d,f){ye(u,f,d)})}function Bl(o,u,d){d=Math.min(o.i.length,d);const f=o.l?h(o.l.Ka,o.l,o):null;e:{var S=o.i;let ie=-1;for(;;){const Le=["count="+d];ie==-1?d>0?(ie=S[0].g,Le.push("ofs="+ie)):ie=0:Le.push("ofs="+ie);let me=!0;for(let Ue=0;Ue<d;Ue++){var P=S[Ue].g;const Vt=S[Ue].map;if(P-=ie,P<0)ie=Math.max(0,S[Ue].g-100),me=!1;else try{P="req"+P+"_"||"";try{var U=Vt instanceof Map?Vt:Object.entries(Vt);for(const[zn,ln]of U){let un=ln;c(ln)&&(un=Ua(ln)),Le.push(P+zn+"="+encodeURIComponent(un))}}catch(zn){throw Le.push(P+"type="+encodeURIComponent("_badmap")),zn}}catch{f&&f(Vt)}}if(me){U=Le.join("&");break e}}U=void 0}return o=o.i.splice(0,d),u.G=o,U}function $l(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;oe||g(),ne||(oe(),ne=!0),w.add(u,o),o.A=0}}function Za(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=qr(h(o.Da,o),Hl(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,ql(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=qr(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,et(10),os(this),ql(this))};function eo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function ql(o){o.g=new sn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Dt(o.na);ye(u,"RID","rpc"),ye(u,"SID",o.M),ye(u,"AID",o.K),ye(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&ye(u,"TO",o.ia),ye(u,"TYPE","xmlhttp"),ti(o,u),o.u&&o.o&&Xa(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=is(Dt(u)),d.u=null,d.R=!0,yl(d,o)}n.Va=function(){this.C!=null&&(this.C=null,os(this),Za(this),et(19))};function ls(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function jl(o,u){var d=null;if(o.g==u){ls(o),eo(o),o.g=null;var f=2}else if(Wa(o.h,u))d=u.G,Tl(o.h,u),f=1;else return;if(o.I!=0){if(u.o)if(f==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var S=o.D;f=ts(),Ze(f,new dl(f,d)),cs(o)}else $l(o);else if(S=u.m,S==3||S==0&&u.X>0||!(f==1&&E2(o,u)||f==2&&Za(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),S){case 1:Un(o,5);break;case 4:Un(o,10);break;case 3:Un(o,6);break;default:Un(o,2)}}}function Hl(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function Un(o,u){if(o.j.info("Error code "+u),u==2){var d=h(o.bb,o),f=o.Ua;const S=!f;f=new an(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Wr(f,"https"),is(f),S?m2(f.toString(),d):g2(f.toString(),d)}else et(2);o.I=0,o.l&&o.l.pa(u),Gl(o),Ul(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Gl(o){if(o.I=0,o.ja=[],o.l){const u=Il(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ja,u),L(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function Wl(o,u,d){var f=d instanceof an?Dt(d):new an(d);if(f.g!="")u&&(f.g=u+"."+f.g),Kr(f,f.u);else{var S=a.location;f=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;const P=new an(null);f&&Wr(P,f),u&&(P.g=u),S&&Kr(P,S),d&&(P.h=d),f=P}return d=o.G,u=o.wa,d&&u&&ye(f,d,u),ye(f,"VER",o.ka),ti(o,f),f}function Kl(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new be(new Qa({ab:d})):new be(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yl(){}n=Yl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function us(){}us.prototype.g=function(o,u){return new mt(o,u)};function mt(o,u){Ge.call(this),this.g=new Fl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!y(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new lr(this)}m(mt,Ge),mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){Ja(this.g)},mt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=Ua(o),o=d);u.i.push(new o2(u.Ya++,o)),u.I==3&&cs(u)},mt.prototype.N=function(){this.g.l=null,delete this.j,Ja(this.g),delete this.g,mt.Z.N.call(this)};function Ql(o){za.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}m(Ql,za);function Xl(){Ba.call(this),this.status=1}m(Xl,Ba);function lr(o){this.g=o}m(lr,Yl),lr.prototype.ra=function(){Ze(this.g,"a")},lr.prototype.qa=function(o){Ze(this.g,new Ql(o))},lr.prototype.pa=function(o){Ze(this.g,new Xl)},lr.prototype.oa=function(){Ze(this.g,"b")},us.prototype.createWebChannel=us.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,td=function(){return new us},ed=function(){return ts()},Zh=Vn,Ro={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ns.NO_ERROR=0,ns.TIMEOUT=8,ns.HTTP_ERROR=6,Is=ns,pl.COMPLETE="complete",Jh=pl,cl.EventType=Br,Br.OPEN="a",Br.CLOSE="b",Br.ERROR="c",Br.MESSAGE="d",Ge.prototype.listen=Ge.prototype.J,ai=cl,be.prototype.listenOnce=be.prototype.K,be.prototype.getLastError=be.prototype.Ha,be.prototype.getLastErrorCode=be.prototype.ya,be.prototype.getStatus=be.prototype.ca,be.prototype.getResponseJson=be.prototype.La,be.prototype.getResponseText=be.prototype.la,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Fa,Xh=be}).apply(typeof ps<"u"?ps:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */class z{static FOLD_CASE=1;static LITERAL=2;static CLASS_NL=4;static DOT_NL=8;static ONE_LINE=16;static NON_GREEDY=32;static PERL_X=64;static UNICODE_GROUPS=128;static WAS_DOLLAR=256;static MATCH_NL=z.CLASS_NL|z.DOT_NL;static PERL=z.CLASS_NL|z.ONE_LINE|z.PERL_X|z.UNICODE_GROUPS;static POSIX=0;static UNANCHORED=0;static ANCHOR_START=1;static ANCHOR_BOTH=2}class k{static CODES=new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]);static toUpperCase(e){const t=String.fromCodePoint(e).toUpperCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toLowerCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){const t=String.fromCodePoint(e).toLowerCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toUpperCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}}class _{static CASE_ORBIT=new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]]);static C=[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]];static Cc=[[0,31,1],[127,159,1]];static Cf=[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]];static Co=[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]];static Cs=[[55296,57343,1]];static L=[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static foldL=[[837,837,1]];static Ll=[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]];static foldLl=[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]];static Lm=[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]];static Lo=[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static Lt=[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]];static foldLt=[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]];static Lu=[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]];static Upper=this.Lu;static foldLu=[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]];static M=[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]];static foldM=[[921,953,32],[8126,8126,1]];static Mc=[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]];static Me=[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]];static Mn=[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]];static foldMn=[[921,953,32],[8126,8126,1]];static N=[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]];static Nd=[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]];static Nl=[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]];static No=[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]];static P=[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]];static Pc=[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]];static Pd=[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]];static Pe=[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]];static Pf=[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]];static Pi=[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]];static Po=[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]];static Ps=[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]];static S=[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]];static Sc=[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]];static Sk=[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]];static Sm=[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]];static So=[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]];static Z=[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]];static Zl=[[8232,8232,1]];static Zp=[[8233,8233,1]];static Zs=[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]];static Adlam=[[125184,125259,1],[125264,125273,1],[125278,125279,1]];static Ahom=[[71424,71450,1],[71453,71467,1],[71472,71494,1]];static Anatolian_Hieroglyphs=[[82944,83526,1]];static Arabic=[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]];static Armenian=[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]];static Avestan=[[68352,68405,1],[68409,68415,1]];static Balinese=[[6912,6988,1],[6992,7038,1]];static Bamum=[[42656,42743,1],[92160,92728,1]];static Bassa_Vah=[[92880,92909,1],[92912,92917,1]];static Batak=[[7104,7155,1],[7164,7167,1]];static Bengali=[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]];static Bhaiksuki=[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]];static Bopomofo=[[746,747,1],[12549,12591,1],[12704,12735,1]];static Brahmi=[[69632,69709,1],[69714,69749,1],[69759,69759,1]];static Braille=[[10240,10495,1]];static Buginese=[[6656,6683,1],[6686,6687,1]];static Buhid=[[5952,5971,1]];static Canadian_Aboriginal=[[5120,5759,1],[6320,6389,1],[72368,72383,1]];static Carian=[[66208,66256,1]];static Caucasian_Albanian=[[66864,66915,1],[66927,66927,1]];static Chakma=[[69888,69940,1],[69942,69959,1]];static Cham=[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]];static Cherokee=[[5024,5109,1],[5112,5117,1],[43888,43967,1]];static Chorasmian=[[69552,69579,1]];static Common=[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]];static foldCommon=[[924,956,32]];static Coptic=[[994,1007,1],[11392,11507,1],[11513,11519,1]];static Cuneiform=[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]];static Cypriot=[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]];static Cypro_Minoan=[[77712,77810,1]];static Cyrillic=[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]];static Deseret=[[66560,66639,1]];static Devanagari=[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]];static Dives_Akuru=[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]];static Dogra=[[71680,71739,1]];static Duployan=[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]];static Egyptian_Hieroglyphs=[[77824,78933,1]];static Elbasan=[[66816,66855,1]];static Elymaic=[[69600,69622,1]];static Ethiopic=[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]];static Georgian=[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]];static Glagolitic=[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]];static Gothic=[[66352,66378,1]];static Grantha=[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]];static Greek=[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]];static foldGreek=[[181,837,656]];static Gujarati=[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]];static Gunjala_Gondi=[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]];static Gurmukhi=[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]];static Han=[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static Hangul=[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]];static Hanifi_Rohingya=[[68864,68903,1],[68912,68921,1]];static Hanunoo=[[5920,5940,1]];static Hatran=[[67808,67826,1],[67828,67829,1],[67835,67839,1]];static Hebrew=[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]];static Hiragana=[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]];static Imperial_Aramaic=[[67648,67669,1],[67671,67679,1]];static Inherited=[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]];static foldInherited=[[921,953,32],[8126,8126,1]];static Inscriptional_Pahlavi=[[68448,68466,1],[68472,68479,1]];static Inscriptional_Parthian=[[68416,68437,1],[68440,68447,1]];static Javanese=[[43392,43469,1],[43472,43481,1],[43486,43487,1]];static Kaithi=[[69760,69826,1],[69837,69837,1]];static Kannada=[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]];static Katakana=[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]];static Kawi=[[73472,73488,1],[73490,73530,1],[73534,73561,1]];static Kayah_Li=[[43264,43309,1],[43311,43311,1]];static Kharoshthi=[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]];static Khitan_Small_Script=[[94180,101120,6940],[101121,101589,1]];static Khmer=[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]];static Khojki=[[70144,70161,1],[70163,70209,1]];static Khudawadi=[[70320,70378,1],[70384,70393,1]];static Lao=[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]];static Latin=[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]];static Lepcha=[[7168,7223,1],[7227,7241,1],[7245,7247,1]];static Limbu=[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]];static Linear_A=[[67072,67382,1],[67392,67413,1],[67424,67431,1]];static Linear_B=[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]];static Lisu=[[42192,42239,1],[73648,73648,1]];static Lycian=[[66176,66204,1]];static Lydian=[[67872,67897,1],[67903,67903,1]];static Mahajani=[[69968,70006,1]];static Makasar=[[73440,73464,1]];static Malayalam=[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]];static Mandaic=[[2112,2139,1],[2142,2142,1]];static Manichaean=[[68288,68326,1],[68331,68342,1]];static Marchen=[[72816,72847,1],[72850,72871,1],[72873,72886,1]];static Masaram_Gondi=[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]];static Medefaidrin=[[93760,93850,1]];static Meetei_Mayek=[[43744,43766,1],[43968,44013,1],[44016,44025,1]];static Mende_Kikakui=[[124928,125124,1],[125127,125142,1]];static Meroitic_Cursive=[[68e3,68023,1],[68028,68047,1],[68050,68095,1]];static Meroitic_Hieroglyphs=[[67968,67999,1]];static Miao=[[93952,94026,1],[94031,94087,1],[94095,94111,1]];static Modi=[[71168,71236,1],[71248,71257,1]];static Mongolian=[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]];static Mro=[[92736,92766,1],[92768,92777,1],[92782,92783,1]];static Multani=[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]];static Myanmar=[[4096,4255,1],[43488,43518,1],[43616,43647,1]];static Nabataean=[[67712,67742,1],[67751,67759,1]];static Nag_Mundari=[[124112,124153,1]];static Nandinagari=[[72096,72103,1],[72106,72151,1],[72154,72164,1]];static New_Tai_Lue=[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]];static Newa=[[70656,70747,1],[70749,70753,1]];static Nko=[[1984,2042,1],[2045,2047,1]];static Nushu=[[94177,110960,16783],[110961,111355,1]];static Nyiakeng_Puachue_Hmong=[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]];static Ogham=[[5760,5788,1]];static Ol_Chiki=[[7248,7295,1]];static Old_Hungarian=[[68736,68786,1],[68800,68850,1],[68858,68863,1]];static Old_Italic=[[66304,66339,1],[66349,66351,1]];static Old_North_Arabian=[[68224,68255,1]];static Old_Permic=[[66384,66426,1]];static Old_Persian=[[66464,66499,1],[66504,66517,1]];static Old_Sogdian=[[69376,69415,1]];static Old_South_Arabian=[[68192,68223,1]];static Old_Turkic=[[68608,68680,1]];static Old_Uyghur=[[69488,69513,1]];static Oriya=[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]];static Osage=[[66736,66771,1],[66776,66811,1]];static Osmanya=[[66688,66717,1],[66720,66729,1]];static Pahawh_Hmong=[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]];static Palmyrene=[[67680,67711,1]];static Pau_Cin_Hau=[[72384,72440,1]];static Phags_Pa=[[43072,43127,1]];static Phoenician=[[67840,67867,1],[67871,67871,1]];static Psalter_Pahlavi=[[68480,68497,1],[68505,68508,1],[68521,68527,1]];static Rejang=[[43312,43347,1],[43359,43359,1]];static Runic=[[5792,5866,1],[5870,5880,1]];static Samaritan=[[2048,2093,1],[2096,2110,1]];static Saurashtra=[[43136,43205,1],[43214,43225,1]];static Sharada=[[70016,70111,1]];static Shavian=[[66640,66687,1]];static Siddham=[[71040,71093,1],[71096,71133,1]];static SignWriting=[[120832,121483,1],[121499,121503,1],[121505,121519,1]];static Sinhala=[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]];static Sogdian=[[69424,69465,1]];static Sora_Sompeng=[[69840,69864,1],[69872,69881,1]];static Soyombo=[[72272,72354,1]];static Sundanese=[[7040,7103,1],[7360,7367,1]];static Syloti_Nagri=[[43008,43052,1]];static Syriac=[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]];static Tagalog=[[5888,5909,1],[5919,5919,1]];static Tagbanwa=[[5984,5996,1],[5998,6e3,1],[6002,6003,1]];static Tai_Le=[[6480,6509,1],[6512,6516,1]];static Tai_Tham=[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]];static Tai_Viet=[[43648,43714,1],[43739,43743,1]];static Takri=[[71296,71353,1],[71360,71369,1]];static Tamil=[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]];static Tangsa=[[92784,92862,1],[92864,92873,1]];static Tangut=[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]];static Telugu=[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]];static Thaana=[[1920,1969,1]];static Thai=[[3585,3642,1],[3648,3675,1]];static Tibetan=[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]];static Tifinagh=[[11568,11623,1],[11631,11632,1],[11647,11647,1]];static Tirhuta=[[70784,70855,1],[70864,70873,1]];static Toto=[[123536,123566,1]];static Ugaritic=[[66432,66461,1],[66463,66463,1]];static Vai=[[42240,42539,1]];static Vithkuqi=[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]];static Wancho=[[123584,123641,1],[123647,123647,1]];static Warang_Citi=[[71840,71922,1],[71935,71935,1]];static Yezidi=[[69248,69289,1],[69291,69293,1],[69296,69297,1]];static Yi=[[40960,42124,1],[42128,42182,1]];static Zanabazar_Square=[[72192,72263,1]];static CATEGORIES=new Map([["C",_.C],["Cc",_.Cc],["Cf",_.Cf],["Co",_.Co],["Cs",_.Cs],["L",_.L],["Ll",_.Ll],["Lm",_.Lm],["Lo",_.Lo],["Lt",_.Lt],["Lu",_.Lu],["M",_.M],["Mc",_.Mc],["Me",_.Me],["Mn",_.Mn],["N",_.N],["Nd",_.Nd],["Nl",_.Nl],["No",_.No],["P",_.P],["Pc",_.Pc],["Pd",_.Pd],["Pe",_.Pe],["Pf",_.Pf],["Pi",_.Pi],["Po",_.Po],["Ps",_.Ps],["S",_.S],["Sc",_.Sc],["Sk",_.Sk],["Sm",_.Sm],["So",_.So],["Z",_.Z],["Zl",_.Zl],["Zp",_.Zp],["Zs",_.Zs]]);static SCRIPTS=new Map([["Adlam",_.Adlam],["Ahom",_.Ahom],["Anatolian_Hieroglyphs",_.Anatolian_Hieroglyphs],["Arabic",_.Arabic],["Armenian",_.Armenian],["Avestan",_.Avestan],["Balinese",_.Balinese],["Bamum",_.Bamum],["Bassa_Vah",_.Bassa_Vah],["Batak",_.Batak],["Bengali",_.Bengali],["Bhaiksuki",_.Bhaiksuki],["Bopomofo",_.Bopomofo],["Brahmi",_.Brahmi],["Braille",_.Braille],["Buginese",_.Buginese],["Buhid",_.Buhid],["Canadian_Aboriginal",_.Canadian_Aboriginal],["Carian",_.Carian],["Caucasian_Albanian",_.Caucasian_Albanian],["Chakma",_.Chakma],["Cham",_.Cham],["Cherokee",_.Cherokee],["Chorasmian",_.Chorasmian],["Common",_.Common],["Coptic",_.Coptic],["Cuneiform",_.Cuneiform],["Cypriot",_.Cypriot],["Cypro_Minoan",_.Cypro_Minoan],["Cyrillic",_.Cyrillic],["Deseret",_.Deseret],["Devanagari",_.Devanagari],["Dives_Akuru",_.Dives_Akuru],["Dogra",_.Dogra],["Duployan",_.Duployan],["Egyptian_Hieroglyphs",_.Egyptian_Hieroglyphs],["Elbasan",_.Elbasan],["Elymaic",_.Elymaic],["Ethiopic",_.Ethiopic],["Georgian",_.Georgian],["Glagolitic",_.Glagolitic],["Gothic",_.Gothic],["Grantha",_.Grantha],["Greek",_.Greek],["Gujarati",_.Gujarati],["Gunjala_Gondi",_.Gunjala_Gondi],["Gurmukhi",_.Gurmukhi],["Han",_.Han],["Hangul",_.Hangul],["Hanifi_Rohingya",_.Hanifi_Rohingya],["Hanunoo",_.Hanunoo],["Hatran",_.Hatran],["Hebrew",_.Hebrew],["Hiragana",_.Hiragana],["Imperial_Aramaic",_.Imperial_Aramaic],["Inherited",_.Inherited],["Inscriptional_Pahlavi",_.Inscriptional_Pahlavi],["Inscriptional_Parthian",_.Inscriptional_Parthian],["Javanese",_.Javanese],["Kaithi",_.Kaithi],["Kannada",_.Kannada],["Katakana",_.Katakana],["Kawi",_.Kawi],["Kayah_Li",_.Kayah_Li],["Kharoshthi",_.Kharoshthi],["Khitan_Small_Script",_.Khitan_Small_Script],["Khmer",_.Khmer],["Khojki",_.Khojki],["Khudawadi",_.Khudawadi],["Lao",_.Lao],["Latin",_.Latin],["Lepcha",_.Lepcha],["Limbu",_.Limbu],["Linear_A",_.Linear_A],["Linear_B",_.Linear_B],["Lisu",_.Lisu],["Lycian",_.Lycian],["Lydian",_.Lydian],["Mahajani",_.Mahajani],["Makasar",_.Makasar],["Malayalam",_.Malayalam],["Mandaic",_.Mandaic],["Manichaean",_.Manichaean],["Marchen",_.Marchen],["Masaram_Gondi",_.Masaram_Gondi],["Medefaidrin",_.Medefaidrin],["Meetei_Mayek",_.Meetei_Mayek],["Mende_Kikakui",_.Mende_Kikakui],["Meroitic_Cursive",_.Meroitic_Cursive],["Meroitic_Hieroglyphs",_.Meroitic_Hieroglyphs],["Miao",_.Miao],["Modi",_.Modi],["Mongolian",_.Mongolian],["Mro",_.Mro],["Multani",_.Multani],["Myanmar",_.Myanmar],["Nabataean",_.Nabataean],["Nag_Mundari",_.Nag_Mundari],["Nandinagari",_.Nandinagari],["New_Tai_Lue",_.New_Tai_Lue],["Newa",_.Newa],["Nko",_.Nko],["Nushu",_.Nushu],["Nyiakeng_Puachue_Hmong",_.Nyiakeng_Puachue_Hmong],["Ogham",_.Ogham],["Ol_Chiki",_.Ol_Chiki],["Old_Hungarian",_.Old_Hungarian],["Old_Italic",_.Old_Italic],["Old_North_Arabian",_.Old_North_Arabian],["Old_Permic",_.Old_Permic],["Old_Persian",_.Old_Persian],["Old_Sogdian",_.Old_Sogdian],["Old_South_Arabian",_.Old_South_Arabian],["Old_Turkic",_.Old_Turkic],["Old_Uyghur",_.Old_Uyghur],["Oriya",_.Oriya],["Osage",_.Osage],["Osmanya",_.Osmanya],["Pahawh_Hmong",_.Pahawh_Hmong],["Palmyrene",_.Palmyrene],["Pau_Cin_Hau",_.Pau_Cin_Hau],["Phags_Pa",_.Phags_Pa],["Phoenician",_.Phoenician],["Psalter_Pahlavi",_.Psalter_Pahlavi],["Rejang",_.Rejang],["Runic",_.Runic],["Samaritan",_.Samaritan],["Saurashtra",_.Saurashtra],["Sharada",_.Sharada],["Shavian",_.Shavian],["Siddham",_.Siddham],["SignWriting",_.SignWriting],["Sinhala",_.Sinhala],["Sogdian",_.Sogdian],["Sora_Sompeng",_.Sora_Sompeng],["Soyombo",_.Soyombo],["Sundanese",_.Sundanese],["Syloti_Nagri",_.Syloti_Nagri],["Syriac",_.Syriac],["Tagalog",_.Tagalog],["Tagbanwa",_.Tagbanwa],["Tai_Le",_.Tai_Le],["Tai_Tham",_.Tai_Tham],["Tai_Viet",_.Tai_Viet],["Takri",_.Takri],["Tamil",_.Tamil],["Tangsa",_.Tangsa],["Tangut",_.Tangut],["Telugu",_.Telugu],["Thaana",_.Thaana],["Thai",_.Thai],["Tibetan",_.Tibetan],["Tifinagh",_.Tifinagh],["Tirhuta",_.Tirhuta],["Toto",_.Toto],["Ugaritic",_.Ugaritic],["Vai",_.Vai],["Vithkuqi",_.Vithkuqi],["Wancho",_.Wancho],["Warang_Citi",_.Warang_Citi],["Yezidi",_.Yezidi],["Yi",_.Yi],["Zanabazar_Square",_.Zanabazar_Square]]);static FOLD_CATEGORIES=new Map([["L",_.foldL],["Ll",_.foldLl],["Lt",_.foldLt],["Lu",_.foldLu],["M",_.foldM],["Mn",_.foldMn]]);static FOLD_SCRIPT=new Map([["Common",_.foldCommon],["Greek",_.foldGreek],["Inherited",_.foldInherited]])}class re{static MAX_RUNE=1114111;static MAX_ASCII=127;static MAX_LATIN1=255;static MAX_BMP=65535;static MIN_FOLD=65;static MAX_FOLD=125251;static is32(e,t){let r=0,i=e.length;for(;r<i;){let s=r+Math.floor((i-r)/2),a=e[s];if(a[0]<=t&&t<=a[1])return(t-a[0])%a[2]===0;t<a[0]?i=s:r=s+1}return!1}static is(e,t){if(t<=this.MAX_LATIN1){for(let r of e)if(!(t>r[1]))return t<r[0]?!1:(t-r[0])%r[2]===0;return!1}return e.length>0&&t>=e[0][0]&&this.is32(e,t)}static isUpper(e){if(e<=this.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return this.is(_.Upper,e)}static isPrint(e){return e<=this.MAX_LATIN1?e>=32&&e<127||e>=161&&e!==173:this.is(_.L,e)||this.is(_.M,e)||this.is(_.N,e)||this.is(_.P,e)||this.is(_.S,e)}static simpleFold(e){if(_.CASE_ORBIT.has(e))return _.CASE_ORBIT.get(e);const t=k.toLowerCase(e);return t!==e?t:k.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e<0||t<0||e===t)return!0;if(e<=this.MAX_ASCII&&t<=this.MAX_ASCII)return k.CODES.get("A")<=e&&e<=k.CODES.get("Z")&&(e|=32),k.CODES.get("A")<=t&&t<=k.CODES.get("Z")&&(t|=32),e===t;for(let r=this.simpleFold(e);r!==e;r=this.simpleFold(r))if(r===t)return!0;return!1}}class de{static METACHARACTERS="\\.+*?()|[]{}^$";static EMPTY_BEGIN_LINE=1;static EMPTY_END_LINE=2;static EMPTY_BEGIN_TEXT=4;static EMPTY_END_TEXT=8;static EMPTY_WORD_BOUNDARY=16;static EMPTY_NO_WORD_BOUNDARY=32;static EMPTY_ALL=-1;static emptyInts(){return[]}static isalnum(e){return k.CODES.get("0")<=e&&e<=k.CODES.get("9")||k.CODES.get("a")<=e&&e<=k.CODES.get("z")||k.CODES.get("A")<=e&&e<=k.CODES.get("Z")}static unhex(e){return k.CODES.get("0")<=e&&e<=k.CODES.get("9")?e-k.CODES.get("0"):k.CODES.get("a")<=e&&e<=k.CODES.get("f")?e-k.CODES.get("a")+10:k.CODES.get("A")<=e&&e<=k.CODES.get("F")?e-k.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(re.isPrint(e))this.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case k.CODES.get('"'):t+='\\"';break;case k.CODES.get("\\"):t+="\\\\";break;case k.CODES.get("	"):t+="\\t";break;case k.CODES.get(`
`):t+="\\n";break;case k.CODES.get("\r"):t+="\\r";break;case k.CODES.get("\b"):t+="\\b";break;case k.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){return String(e).split("").map(t=>t.codePointAt(0))}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return k.CODES.get("a")<=e&&e<=k.CODES.get("z")||k.CODES.get("A")<=e&&e<=k.CODES.get("Z")||k.CODES.get("0")<=e&&e<=k.CODES.get("9")||e===k.CODES.get("_")}static emptyOpContext(e,t){let r=0;return e<0&&(r|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),e===k.CODES.get(`
`)&&(r|=this.EMPTY_BEGIN_LINE),t<0&&(r|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),t===k.CODES.get(`
`)&&(r|=this.EMPTY_END_LINE),this.isWordRune(e)!==this.isWordRune(t)?r|=this.EMPTY_WORD_BOUNDARY:r|=this.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>this.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>re.MAX_BMP?2:1}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(e));{let t=[],r=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[r++]=s:s<2048?(t[r++]=s>>6|192,t[r++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[r++]=s>>18|240,t[r++]=s>>12&63|128,t[r++]=s>>6&63|128,t[r++]=s&63|128):(t[r++]=s>>12|224,t[r++]=s>>6&63|128,t[r++]=s&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(e));{let t=[],r=0,i=0;for(;r<e.length;){let s=e[r++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){let a=e[r++];t[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){let a=e[r++],c=e[r++],l=e[r++],h=((s&7)<<18|(a&63)<<12|(c&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(h&1023))}else{let a=e[r++],c=e[r++];t[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|c&63)}}return t.join("")}}}const nd=(n=[],e=0)=>{const t={};for(let r=0;r<n.length;r++){const i=n[r],s=e+r;t[i]=s,t[s]=i}return Object.freeze(t)};class Zt{static Encoding=nd(["UTF_16","UTF_8"]);getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===Zt.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===Zt.Encoding.UTF_16}}class Nu extends Zt{constructor(e=null){super(),this.bytes=e}getEncoding(){return Zt.Encoding.UTF_8}asCharSequence(){return de.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class Xm extends Zt{constructor(e=null){super(),this.charSequence=e}getEncoding(){return Zt.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(e=>e.codePointAt(0))}length(){return this.charSequence.length}}class $s{static utf16(e){return new Xm(e)}static utf8(e){return Array.isArray(e)?new Nu(e):new Nu(de.stringToUtf8ByteArray(e))}}class ma extends Error{constructor(e){super(e),this.name="RE2JSException"}}class Ie extends ma{constructor(e,t=null){let r=`error parsing regexp: ${e}`;t&&(r+=`: \`${t}\``),super(r),this.name="RE2JSSyntaxException",this.message=r,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}}class Jm extends ma{constructor(e){super(e),this.name="RE2JSCompileException"}}class Wt extends ma{constructor(e){super(e),this.name="RE2JSGroupException"}}class Zm extends ma{constructor(e){super(e),this.name="RE2JSFlagsException"}}class eg{static quoteReplacement(e){return e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(t=>{const r=t.codePointAt(0);return r===k.CODES["\\"]||r===k.CODES.$?`\\${t}`:t}).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,t instanceof Zt?this.resetMatcherInput(t):Array.isArray(t)?this.resetMatcherInput($s.utf8(t)):this.resetMatcherInput($s.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Wt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Wt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}group(e=0){if(typeof e=="string"){const i=this.namedGroups[e];if(!Number.isFinite(i))throw new Wt(`group '${e}' not found`);e=i}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new Wt(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new Wt("perhaps no match attempted");if(e===0||this.hasGroups)return;let t=this.groups[1]+1;t>this.matcherInputLength&&(t=this.matcherInputLength);const r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new Wt("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,z.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,z.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new Wt(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}return e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1]&&e++),this.genMatch(e,z.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=t,!0):!1}substring(e,t){return this.matcherInput.isUTF8Encoding()?de.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const i=this.start(),s=this.end();return this.appendPos<i&&(r+=this.substring(this.appendPos,i)),this.appendPos=s,r+=t?this.appendReplacementInternalPerl(e):this.appendReplacementInternal(e),r}appendReplacementInternal(e){let t="",r=0;const i=e.length;for(let s=0;s<i-1;s++){if(e.codePointAt(s)===k.CODES.get("\\")){r<s&&(t+=e.substring(r,s)),s++,r=s;continue}if(e.codePointAt(s)===k.CODES.get("$")){let a=e.codePointAt(s+1);if(k.CODES.get("0")<=a&&a<=k.CODES.get("9")){let c=a-k.CODES.get("0");for(r<s&&(t+=e.substring(r,s)),s+=2;s<i&&(a=e.codePointAt(s),!(a<k.CODES.get("0")||a>k.CODES.get("9")||c*10+a-k.CODES.get("0")>this.patternGroupCount));s++)c=c*10+a-k.CODES.get("0");if(c>this.patternGroupCount)throw new Wt(`n > number of groups: ${c}`);const l=this.group(c);l!==null&&(t+=l),r=s,s--;continue}else if(a===k.CODES.get("{")){r<s&&(t+=e.substring(r,s)),s++;let c=s+1;for(;c<e.length&&e.codePointAt(c)!==k.CODES.get("}")&&e.codePointAt(c)!==k.CODES.get(" ");)c++;if(c===e.length||e.codePointAt(c)!==k.CODES.get("}"))throw new Wt("named capture group is missing trailing '}'");const l=e.substring(s+1,c);t+=this.group(l),r=c+1}}}return r<i&&(t+=e.substring(r,i)),t}appendReplacementInternalPerl(e){let t="",r=0;const i=e.length;for(let s=0;s<i-1;s++)if(e.codePointAt(s)===k.CODES.get("$")){let a=e.codePointAt(s+1);if(k.CODES.get("$")===a){r<s&&(t+=e.substring(r,s)),t+="$",s++,r=s+1;continue}else if(k.CODES.get("&")===a){r<s&&(t+=e.substring(r,s));const c=this.group(0);c!==null?t+=c:t+="$&",s++,r=s+1;continue}else if(k.CODES.get("1")<=a&&a<=k.CODES.get("9")){let c=a-k.CODES.get("0");for(r<s&&(t+=e.substring(r,s)),s+=2;s<i&&(a=e.codePointAt(s),!(a<k.CODES.get("0")||a>k.CODES.get("9")||c*10+a-k.CODES.get("0")>this.patternGroupCount));s++)c=c*10+a-k.CODES.get("0");if(c>this.patternGroupCount){t+=`$${c}`,r=s,s--;continue}const l=this.group(c);l!==null&&(t+=l),r=s,s--;continue}else if(a===k.CODES.get("<")){r<s&&(t+=e.substring(r,s)),s++;let c=s+1;for(;c<e.length&&e.codePointAt(c)!==k.CODES.get(">")&&e.codePointAt(c)!==k.CODES.get(" ");)c++;if(c===e.length||e.codePointAt(c)!==k.CODES.get(">")){t+=e.substring(s-1,c+1),r=c+1;continue}const l=e.substring(s+1,c);Object.prototype.hasOwnProperty.call(this.namedGroups,l)?t+=this.group(l):t+=`$<${l}>`,r=c+1}}return r<i&&(t+=e.substring(r,i)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let i="";for(this.reset();this.find()&&(i+=this.appendReplacement(e,r),!!t););return i+=this.appendTail(),i}}class fn{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class tg extends fn{constructor(e,t=0,r=e.length){super(),this.bytes=e,this.start=t,this.end=r}step(e){if(e+=this.start,e>=this.end)return fn.EOF();let t=this.bytes[e++]&255;return t&128?(t&224)===192?(t=t&31,e>=this.end?fn.EOF():(t=t<<6|this.bytes[e++]&63,t<<3|2)):(t&240)===224?(t=t&15,e+1>=this.end?fn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|3)):(t=t&7,e+2>=this.end?fn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|4)):t<<3|1}index(e,t){t+=this.start;const r=this.indexOf(this.bytes,e.prefixUTF8,t);return r<0?r:r-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let i=e-1;if(t=this.bytes[i--],t>=128){let s=e-4;for(s<this.start&&(s=this.start);i>=s&&(this.bytes[i]&192)===128;)i--;i<this.start&&(i=this.start),t=this.step(i)>>3}}const r=e<this.end?this.step(e)>>3:-1;return de.emptyOpContext(t,r)}indexOf(e,t,r=0){let i=t.length;if(i===0)return-1;let s=e.length;for(let a=r;a<=s-i;a++)for(let c=0;c<i&&e[a+c]===t[c];c++)if(c===i-1)return a;return-1}}class ng extends fn{constructor(e,t=0,r=e.length){super(),this.charSequence=e,this.start=t,this.end=r}step(e){if(e+=this.start,e<this.end){const t=this.charSequence.codePointAt(e);return t<<3|de.charCount(t)}else return fn.EOF()}index(e,t){t+=this.start;const r=this.charSequence.indexOf(e.prefix,t);return r<0?r:r-t}context(e){e+=this.start;const t=e>0&&e<=this.charSequence.length?this.charSequence.codePointAt(e-1):-1,r=e<this.charSequence.length?this.charSequence.codePointAt(e):-1;return de.emptyOpContext(t,r)}}class Ae{static fromUTF8(e,t=0,r=e.length){return new tg(e,t,r)}static fromUTF16(e,t=0,r=e.length){return new ng(e,t,r)}}class x{static Op=nd(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]);static isPseudoOp(e){return e>=x.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===k.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new x(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t}constructor(e){this.op=e,this.flags=0,this.subs=x.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=x.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case x.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case x.Op.EMPTY_MATCH:e+="(?:)";break;case x.Op.STAR:case x.Op.PLUS:case x.Op.QUEST:case x.Op.REPEAT:{const t=this.subs[0];switch(t.op>x.Op.CAPTURE||t.op===x.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case x.Op.STAR:e+="*";break;case x.Op.PLUS:e+="+";break;case x.Op.QUEST:e+="?";break;case x.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&z.NON_GREEDY&&(e+="?");break}case x.Op.CONCAT:{for(let t of this.subs)t.op===x.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break}case x.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case x.Op.LITERAL:this.flags&z.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=de.escapeRune(t);this.flags&z.FOLD_CASE&&(e+=")");break;case x.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case x.Op.ANY_CHAR:e+="(?s:.)";break;case x.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==x.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case x.Op.BEGIN_TEXT:e+="\\A";break;case x.Op.END_TEXT:this.flags&z.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case x.Op.BEGIN_LINE:e+="^";break;case x.Op.END_LINE:e+="$";break;case x.Op.WORD_BOUNDARY:e+="\\b";break;case x.Op.NO_WORD_BOUNDARY:e+="\\B";break;case x.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===re.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,i=this.runes[t+1]-1;e+=x.quoteIfHyphen(r),e+=de.escapeRune(r),r!==i&&(e+="-",e+=x.quoteIfHyphen(i),e+=de.escapeRune(i))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],i=this.runes[t+1];e+=x.quoteIfHyphen(r),e+=de.escapeRune(r),r!==i&&(e+="-",e+=x.quoteIfHyphen(i),e+=de.escapeRune(i))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===x.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof x)||this.op!==e.op)return!1;switch(this.op){case x.Op.END_TEXT:{if((this.flags&z.WAS_DOLLAR)!==(e.flags&z.WAS_DOLLAR))return!1;break}case x.Op.LITERAL:case x.Op.CHAR_CLASS:{if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break}case x.Op.ALTERNATE:case x.Op.CONCAT:{if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break}case x.Op.STAR:case x.Op.PLUS:case x.Op.QUEST:{if((this.flags&z.NON_GREEDY)!==(e.flags&z.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break}case x.Op.REPEAT:{if((this.flags&z.NON_GREEDY)!==(e.flags&z.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break}case x.Op.CAPTURE:{if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break}}return!0}}class W{static ALT=1;static ALT_MATCH=2;static CAPTURE=3;static EMPTY_WIDTH=4;static FAIL=5;static MATCH=6;static NOP=7;static RUNE=8;static RUNE1=9;static RUNE_ANY=10;static RUNE_ANY_NOT_NL=11;static isRuneOp(e){return W.RUNE<=e&&e<=W.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=de.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=null}matchRune(e){if(this.runes.length===1){const i=this.runes[0];return this.arg&z.FOLD_CASE?re.equalsIgnoreCase(i,e):e===i}for(let i=0;i<this.runes.length&&i<=8;i+=2){if(e<this.runes[i])return!1;if(e<=this.runes[i+1])return!0}let t=0,r=this.runes.length/2|0;for(;t<r;){const i=t+((r-t)/2|0);if(this.runes[2*i]<=e){if(e<=this.runes[2*i+1])return!0;t=i+1}else r=i}return!1}toString(){switch(this.op){case W.ALT:return`alt -> ${this.out}, ${this.arg}`;case W.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case W.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case W.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case W.MATCH:return"match";case W.FAIL:return"fail";case W.NOP:return`nop -> ${this.out}`;case W.RUNE:return this.runes===null?"rune <null>":["rune ",W.escapeRunes(this.runes),this.arg&z.FOLD_CASE?"/i":""," -> ",this.out].join("");case W.RUNE1:return`rune1 ${W.escapeRunes(this.runes)} -> ${this.out}`;case W.RUNE_ANY:return`any -> ${this.out}`;case W.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}}class rg{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new W(e))}skipNop(e){let t=this.inst[e];for(;t.op===W.NOP||t.op===W.CAPTURE;)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!W.isRuneOp(t.op)||t.runes.length!==1)return[t.op===W.MATCH,e];for(;W.isRuneOp(t.op)&&t.runes.length===1&&!(t.arg&z.FOLD_CASE);)e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===W.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const r=this.inst[t];switch(r.op){case W.EMPTY_WIDTH:e|=r.arg;break;case W.FAIL:return-1;case W.CAPTURE:case W.NOP:break;default:break e}t=r.out}return e}next(e){const t=this.inst[e>>1];return e&1?t.arg:t.out}patch(e,t){for(;e!==0;){const r=this.inst[e>>1];e&1?(e=r.arg,r.arg=t):(e=r.out,r.out=t)}}append(e,t){if(e===0)return t;if(t===0)return e;let r=e;for(;;){const s=this.next(r);if(s===0)break;r=s}const i=this.inst[r>>1];return r&1?i.arg=t:i.out=t,e}toString(){let e="";for(let t=0;t<this.inst.length;t++){const r=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-r),e+=this.inst[t],e+=`
`}return e}}class fs{constructor(e=0,t=0,r=!1){this.i=e,this.out=t,this.nullable=r}}class hi{static ANY_RUNE_NOT_NL(){return[0,k.CODES.get(`
`)-1,k.CODES.get(`
`)+1,re.MAX_RUNE]}static ANY_RUNE(){return[0,re.MAX_RUNE]}static compileRegexp(e){const t=new hi,r=t.compile(e);return t.prog.patch(r.out,t.newInst(W.MATCH).i),t.prog.start=r.i,t.prog}constructor(){this.prog=new rg,this.newInst(W.FAIL)}newInst(e){return this.prog.addInst(e),new fs(this.prog.numInst()-1,0,!0)}nop(){const e=this.newInst(W.NOP);return e.out=e.i<<1,e}fail(){return new fs}cap(e){const t=this.newInst(W.CAPTURE);return t.out=t.i<<1,this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new fs(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(W.ALT),i=this.prog.getInst(r.i);return i.out=e.i,i.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(W.ALT),i=this.prog.getInst(r.i);return t?(i.arg=e.i,r.out=r.i<<1):(i.out=e.i,r.out=r.i<<1|1),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(W.ALT),i=this.prog.getInst(r.i);return t?(i.arg=e.i,r.out=r.i<<1):(i.out=e.i,r.out=r.i<<1|1),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new fs(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(W.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=t.i<<1,t}rune(e,t){const r=this.newInst(W.RUNE);r.nullable=!1;const i=this.prog.getInst(r.i);return i.runes=e,t&=z.FOLD_CASE,(e.length!==1||re.simpleFold(e[0])===e[0])&&(t&=-2),i.arg=t,r.out=r.i<<1,!(t&z.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?i.op=W.RUNE1:e.length===2&&e[0]===0&&e[1]===re.MAX_RUNE?i.op=W.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===k.CODES.get(`
`)-1&&e[2]===k.CODES.get(`
`)+1&&e[3]===re.MAX_RUNE&&(i.op=W.RUNE_ANY_NOT_NL),r}compile(e){switch(e.op){case x.Op.NO_MATCH:return this.fail();case x.Op.EMPTY_MATCH:return this.nop();case x.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const i=this.rune([r],e.flags);t=t===null?i:this.cat(t,i)}return t}case x.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case x.Op.ANY_CHAR_NOT_NL:return this.rune(hi.ANY_RUNE_NOT_NL(),0);case x.Op.ANY_CHAR:return this.rune(hi.ANY_RUNE(),0);case x.Op.BEGIN_LINE:return this.empty(de.EMPTY_BEGIN_LINE);case x.Op.END_LINE:return this.empty(de.EMPTY_END_LINE);case x.Op.BEGIN_TEXT:return this.empty(de.EMPTY_BEGIN_TEXT);case x.Op.END_TEXT:return this.empty(de.EMPTY_END_TEXT);case x.Op.WORD_BOUNDARY:return this.empty(de.EMPTY_WORD_BOUNDARY);case x.Op.NO_WORD_BOUNDARY:return this.empty(de.EMPTY_NO_WORD_BOUNDARY);case x.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),i=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),i)}case x.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case x.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case x.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case x.Op.CONCAT:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const i=this.compile(r);t=t===null?i:this.cat(t,i)}return t}}case x.Op.ALTERNATE:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const i=this.compile(r);t=t===null?i:this.alt(t,i)}return t}}default:throw new Jm("regexp: unhandled case in compile")}}}class xt{static simplify(e){if(e===null)return null;switch(e.op){case x.Op.CAPTURE:case x.Op.CONCAT:case x.Op.ALTERNATE:{let t=e;for(let r=0;r<e.subs.length;r++){const i=e.subs[r],s=xt.simplify(i);t===e&&s!==i&&(t=x.fromRegexp(e),t.runes=null,t.subs=e.subs.slice(0,e.subs.length)),t!==e&&(t.subs[r]=s)}return t}case x.Op.STAR:case x.Op.PLUS:case x.Op.QUEST:{const t=xt.simplify(e.subs[0]);return xt.simplify1(e.op,e.flags,t,e)}case x.Op.REPEAT:{if(e.min===0&&e.max===0)return new x(x.Op.EMPTY_MATCH);const t=xt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return xt.simplify1(x.Op.STAR,e.flags,t,null);if(e.min===1)return xt.simplify1(x.Op.PLUS,e.flags,t,null);const i=new x(x.Op.CONCAT),s=[];for(let a=0;a<e.min-1;a++)s.push(t);return s.push(xt.simplify1(x.Op.PLUS,e.flags,t,null)),i.subs=s.slice(0),i}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let i=0;i<e.min;i++)r.push(t)}if(e.max>e.min){let i=xt.simplify1(x.Op.QUEST,e.flags,t,null);for(let s=e.min+1;s<e.max;s++){const a=new x(x.Op.CONCAT);a.subs=[t,i],i=xt.simplify1(x.Op.QUEST,e.flags,a,null)}if(r===null)return i;r.push(i)}if(r!==null){const i=new x(x.Op.CONCAT);return i.subs=r.slice(0),i}return new x(x.Op.NO_MATCH)}}return e}static simplify1(e,t,r,i){return r.op===x.Op.EMPTY_MATCH||e===r.op&&(t&z.NON_GREEDY)===(r.flags&z.NON_GREEDY)?r:(i!==null&&i.op===e&&(i.flags&z.NON_GREEDY)===(t&z.NON_GREEDY)&&r===i.subs[0]||(i=new x(e),i.flags=t,i.subs=[r]),i)}}class he{constructor(e,t){this.sign=e,this.cls=t}}const Du=[48,57],Vu=[9,10,12,13,32,32],Mu=[48,57,65,90,95,95,97,122],Fu=new Map([["\\d",new he(1,Du)],["\\D",new he(-1,Du)],["\\s",new he(1,Vu)],["\\S",new he(-1,Vu)],["\\w",new he(1,Mu)],["\\W",new he(-1,Mu)]]),Uu=[48,57,65,90,97,122],zu=[65,90,97,122],Bu=[0,127],$u=[9,9,32,32],qu=[0,31,127,127],ju=[48,57],Hu=[33,126],Gu=[97,122],Wu=[32,126],Ku=[33,47,58,64,91,96,123,126],Yu=[9,13,32,32],Qu=[65,90],Xu=[48,57,65,90,95,95,97,122],Ju=[48,57,65,70,97,102],Zu=new Map([["[:alnum:]",new he(1,Uu)],["[:^alnum:]",new he(-1,Uu)],["[:alpha:]",new he(1,zu)],["[:^alpha:]",new he(-1,zu)],["[:ascii:]",new he(1,Bu)],["[:^ascii:]",new he(-1,Bu)],["[:blank:]",new he(1,$u)],["[:^blank:]",new he(-1,$u)],["[:cntrl:]",new he(1,qu)],["[:^cntrl:]",new he(-1,qu)],["[:digit:]",new he(1,ju)],["[:^digit:]",new he(-1,ju)],["[:graph:]",new he(1,Hu)],["[:^graph:]",new he(-1,Hu)],["[:lower:]",new he(1,Gu)],["[:^lower:]",new he(-1,Gu)],["[:print:]",new he(1,Wu)],["[:^print:]",new he(-1,Wu)],["[:punct:]",new he(1,Ku)],["[:^punct:]",new he(-1,Ku)],["[:space:]",new he(1,Yu)],["[:^space:]",new he(-1,Yu)],["[:upper:]",new he(1,Qu)],["[:^upper:]",new he(-1,Qu)],["[:word:]",new he(1,Xu)],["[:^word:]",new he(-1,Xu)],["[:xdigit:]",new he(1,Ju)],["[:^xdigit:]",new he(-1,Ju)]]);class Ke{static charClassToString(e,t){let r="[";for(let i=0;i<t;i+=2){i>0&&(r+=" ");const s=e[i],a=e[i+1];s===a?r+=`0x${s.toString(16)}`:r+=`0x${s.toString(16)}-0x${a.toString(16)}`}return r+="]",r}static cmp(e,t,r,i){const s=e[t]-r;return s!==0?s:i-e[t+1]}static qsortIntPair(e,t,r){const i=((t+r)/2|0)&-2,s=e[i],a=e[i+1];let c=t,l=r;for(;c<=l;){for(;c<r&&Ke.cmp(e,c,s,a)<0;)c+=2;for(;l>t&&Ke.cmp(e,l,s,a)>0;)l-=2;if(c<=l){if(c!==l){let h=e[c];e[c]=e[l],e[l]=h,h=e[c+1],e[c+1]=e[l+1],e[l+1]=h}c+=2,l-=2}}t<l&&Ke.qsortIntPair(e,t,l),c<r&&Ke.qsortIntPair(e,c,r)}constructor(e=de.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;Ke.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],i=this.r[t+1];if(r<=this.r[e-1]+1){i>this.r[e-1]&&(this.r[e-1]=i);continue}this.r[e]=r,this.r[e+1]=i,e+=2}return this.len=e,this}appendLiteral(e,t){return t&z.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const i=this.r[this.len-r],s=this.r[this.len-r+1];if(e<=s+1&&i<=t+1)return e<i&&(this.r[this.len-r]=e),t>s&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=re.MIN_FOLD&&t>=re.MAX_FOLD)return this.appendRange(e,t);if(t<re.MIN_FOLD||e>re.MAX_FOLD)return this.appendRange(e,t);e<re.MIN_FOLD&&(this.appendRange(e,re.MIN_FOLD-1),e=re.MIN_FOLD),t>re.MAX_FOLD&&(this.appendRange(re.MAX_FOLD+1,t),t=re.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let i=re.simpleFold(r);i!==r;i=re.simpleFold(i))this.appendRange(i,i)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const i=e[r],s=e[r+1];t<=i-1&&this.appendRange(t,i-1),t=s+1}return t<=re.MAX_RUNE&&this.appendRange(t,re.MAX_RUNE),this}appendTable(e){for(let t of e){const r=t[0],i=t[1],s=t[2];if(s===1){this.appendRange(r,i);continue}for(let a=r;a<=i;a+=s)this.appendRange(a,a)}return this}appendNegatedTable(e){let t=0;for(let r of e){const i=r[0],s=r[1],a=r[2];if(a===1){t<=i-1&&this.appendRange(t,i-1),t=s+1;continue}for(let c=i;c<=s;c+=a)t<=c-1&&this.appendRange(t,c-1),t=c+1}return t<=re.MAX_RUNE&&this.appendRange(t,re.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const i=this.r[r],s=this.r[r+1];e<=i-1&&(this.r[t]=e,this.r[t+1]=i-1,t+=2),e=s+1}return this.len=t,e<=re.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=re.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new Ke().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return Ke.charClassToString(this.r,this.len)}}class di{static of(e,t){return new di(e,t)}constructor(e,t){this.first=e,this.second=t}}class ig{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=de.charCount(e),e}lookingAt(e){return this.rest().startsWith(e)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}}class Z{static ERR_INTERNAL_ERROR="regexp/syntax: internal error";static ERR_INVALID_CHAR_RANGE="invalid character class range";static ERR_INVALID_ESCAPE="invalid escape sequence";static ERR_INVALID_NAMED_CAPTURE="invalid named capture";static ERR_INVALID_PERL_OP="invalid or unsupported Perl syntax";static ERR_INVALID_REPEAT_OP="invalid nested repetition operator";static ERR_INVALID_REPEAT_SIZE="invalid repeat count";static ERR_MISSING_BRACKET="missing closing ]";static ERR_MISSING_PAREN="missing closing )";static ERR_MISSING_REPEAT_ARGUMENT="missing argument to repetition operator";static ERR_TRAILING_BACKSLASH="trailing backslash at end of expression";static ERR_DUPLICATE_NAMED_CAPTURE="duplicate capture group name";static ANY_TABLE(){return[[0,re.MAX_RUNE,1]]}static unicodeTable(e){return e==="Any"?di.of(Z.ANY_TABLE(),Z.ANY_TABLE()):_.CATEGORIES.has(e)?di.of(_.CATEGORIES.get(e),_.FOLD_CATEGORIES.get(e)):_.SCRIPTS.has(e)?di.of(_.SCRIPTS.get(e),_.FOLD_SCRIPT.get(e)):null}static minFoldRune(e){if(e<re.MIN_FOLD||e>re.MAX_FOLD)return e;let t=e;const r=e;for(e=re.simpleFold(e);e!==r;e=re.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===x.Op.EMPTY_MATCH)return null;if(e.op===x.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===x.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new x(x.Op.LITERAL);return r.flags=t,r.runes=de.stringToRunes(e),r}static parse(e,t){return new Z(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=Z.parseInt(e);if(r===-1||!e.more())return-1;let i;if(!e.lookingAt(","))i=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))i=-1;else if((i=Z.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||i===-2||i>1e3||i>=0&&r>i)throw new Ie(Z.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|i&re.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==k.CODES.get("_")&&!de.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=k.CODES.get("0")&&e.peek()<=k.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===k.CODES.get("0")?-1:r.length>8?-2:parseFloat(r,10)}static isCharClass(e){return e.op===x.Op.LITERAL&&e.runes.length===1||e.op===x.Op.CHAR_CLASS||e.op===x.Op.ANY_CHAR_NOT_NL||e.op===x.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case x.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case x.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case x.Op.ANY_CHAR_NOT_NL:return t!==k.CODES.get(`
`);case x.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case x.Op.ANY_CHAR:break;case x.Op.ANY_CHAR_NOT_NL:Z.matchRune(t,k.CODES.get(`
`))&&(e.op=x.Op.ANY_CHAR);break;case x.Op.CHAR_CLASS:t.op===x.Op.LITERAL?e.runes=new Ke(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new Ke(e.runes).appendClass(t.runes).toArray();break;case x.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=x.Op.CHAR_CLASS,e.runes=new Ke().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Ie(Z.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case k.CODES.get("1"):case k.CODES.get("2"):case k.CODES.get("3"):case k.CODES.get("4"):case k.CODES.get("5"):case k.CODES.get("6"):case k.CODES.get("7"):if(!e.more()||e.peek()<k.CODES.get("0")||e.peek()>k.CODES.get("7"))break;case k.CODES.get("0"):{let i=r-k.CODES.get("0");for(let s=1;s<3&&!(!e.more()||e.peek()<k.CODES.get("0")||e.peek()>k.CODES.get("7"));s++)i=i*8+e.peek()-k.CODES.get("0"),e.skip(1);return i}case k.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===k.CODES.get("{")){let a=0,c=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===k.CODES.get("}"))break;const l=de.unhex(r);if(l<0||(c=c*16+l,c>re.MAX_RUNE))break e;a++}if(a===0)break e;return c}const i=de.unhex(r);if(!e.more())break;r=e.pop();const s=de.unhex(r);if(i<0||s<0)break;return i*16+s}case k.CODES.get("a"):return k.CODES.get("\x07");case k.CODES.get("f"):return k.CODES.get("\f");case k.CODES.get("n"):return k.CODES.get(`
`);case k.CODES.get("r"):return k.CODES.get("\r");case k.CODES.get("t"):return k.CODES.get("	");case k.CODES.get("v"):return k.CODES.get("\v");default:if(!de.isalnum(r))return r;break}throw new Ie(Z.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Ie(Z.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?Z.parseEscape(e):e.pop()}static concatRunes(e,t){return[...e,...t]}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):t=new x(e),t}reuse(e){e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!x.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(e.op===x.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=x.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===x.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&re.simpleFold(e.runes[0])===e.runes[2]&&re.simpleFold(e.runes[2])===e.runes[0]||e.op===x.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&re.simpleFold(e.runes[0])===e.runes[1]&&re.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|z.FOLD_CASE))return null;e.op=x.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|z.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const i=this.stack[r-1],s=this.stack[r-2];return i.op!==x.Op.LITERAL||s.op!==x.Op.LITERAL||(i.flags&z.FOLD_CASE)!==(s.flags&z.FOLD_CASE)?!1:(s.runes=Z.concatRunes(s.runes,i.runes),e>=0?(i.runes=[e],i.flags=t,!0):(this.pop(),this.reuse(i),!1))}newLiteral(e,t){const r=this.newRegexp(x.Op.LITERAL);return r.flags=t,t&z.FOLD_CASE&&(e=Z.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,i,s,a){let c=this.flags;if(c&z.PERL_X&&(s.more()&&s.lookingAt("?")&&(s.skip(1),c^=z.NON_GREEDY),a!==-1))throw new Ie(Z.ERR_INVALID_REPEAT_OP,s.from(a));const l=this.stack.length;if(l===0)throw new Ie(Z.ERR_MISSING_REPEAT_ARGUMENT,s.from(i));const h=this.stack[l-1];if(x.isPseudoOp(h.op))throw new Ie(Z.ERR_MISSING_REPEAT_ARGUMENT,s.from(i));const p=this.newRegexp(e);p.min=t,p.max=r,p.flags=c,p.subs=[h],this.stack[l-1]=p}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(x.Op.EMPTY_MATCH)):this.push(this.collapse(e,x.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(x.Op.NO_MATCH)):this.push(this.collapse(e,x.Op.ALTERNATE))}cleanAlt(e){e.op===x.Op.CHAR_CLASS&&(e.runes=new Ke(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===re.MAX_RUNE?(e.runes=null,e.op=x.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===k.CODES.get(`
`)-1&&e.runes[2]===k.CODES.get(`
`)+1&&e.runes[3]===re.MAX_RUNE&&(e.runes=null,e.op=x.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let c of e)r+=c.op===t?c.subs.length:1;let i=new Array(r).fill(null),s=0;for(let c of e)c.op===t?(i.splice(s,c.subs.length,...c.subs),s+=c.subs.length,this.reuse(c)):i[s++]=c;let a=this.newRegexp(t);if(a.subs=i,t===x.Op.ALTERNATE&&(a.subs=this.factor(a.subs),a.subs.length===1)){const c=a;a=a.subs[0],this.reuse(c)}return a}factor(e){if(e.length<2)return e;let t=0,r=e.length,i=0,s=null,a=0,c=0,l=0;for(let p=0;p<=r;p++){let m=null,A=0,R=0;if(p<r){let L=e[t+p];if(L.op===x.Op.CONCAT&&L.subs.length>0&&(L=L.subs[0]),L.op===x.Op.LITERAL&&(m=L.runes,A=L.runes.length,R=L.flags&z.FOLD_CASE),R===c){let M=0;for(;M<a&&M<A&&s[M]===m[M];)M++;if(M>0){a=M;continue}}}if(p!==l)if(p===l+1)e[i++]=e[t+l];else{const L=this.newRegexp(x.Op.LITERAL);L.flags=c,L.runes=s.slice(0,a);for(let J=l;J<p;J++)e[t+J]=this.removeLeadingString(e[t+J],a);const M=this.collapse(e.slice(t+l,t+p),x.Op.ALTERNATE),B=this.newRegexp(x.Op.CONCAT);B.subs=[L,M],e[i++]=B}l=p,s=m,a=A,c=R}r=i,t=0,l=0,i=0;let h=null;for(let p=0;p<=r;p++){let m=null;if(!(p<r&&(m=Z.leadingRegexp(e[t+p]),h!==null&&h.equals(m)&&(Z.isCharClass(h)||h.op===x.Op.REPEAT&&h.min===h.max&&Z.isCharClass(h.subs[0]))))){if(p!==l)if(p===l+1)e[i++]=e[t+l];else{const A=h;for(let M=l;M<p;M++){const B=M!==l;e[t+M]=this.removeLeadingRegexp(e[t+M],B)}const R=this.collapse(e.slice(t+l,t+p),x.Op.ALTERNATE),L=this.newRegexp(x.Op.CONCAT);L.subs=[A,R],e[i++]=L}l=p,h=m}}r=i,t=0,l=0,i=0;for(let p=0;p<=r;p++)if(!(p<r&&Z.isCharClass(e[t+p]))){if(p!==l)if(p===l+1)e[i++]=e[t+l];else{let m=l;for(let R=l+1;R<p;R++){const L=e[t+m],M=e[t+R];(L.op<M.op||L.op===M.op&&(L.runes!==null?L.runes.length:0)<(M.runes!==null?M.runes.length:0))&&(m=R)}const A=e[t+l];e[t+l]=e[t+m],e[t+m]=A;for(let R=l+1;R<p;R++)Z.mergeCharClass(e[t+l],e[t+R]),this.reuse(e[t+R]);this.cleanAlt(e[t+l]),e[i++]=e[t+l]}p<r&&(e[i++]=e[t+p]),l=p+1}r=i,t=0,l=0,i=0;for(let p=0;p<r;++p)p+1<r&&e[t+p].op===x.Op.EMPTY_MATCH&&e[t+p+1].op===x.Op.EMPTY_MATCH||(e[i++]=e[t+p]);return r=i,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===x.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===x.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=x.Op.EMPTY_MATCH,e.subs=null;break;case 2:{const i=e;e=e.subs[1],this.reuse(i);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===x.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=x.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===x.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:{e.op=x.Op.EMPTY_MATCH,e.subs=x.emptySubs();break}case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(x.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&z.LITERAL)return Z.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const i=new ig(this.wholeRegexp);for(;i.more();){let a=-1;e:switch(i.peek()){case k.CODES.get("("):if(this.flags&z.PERL_X&&i.lookingAt("(?")){this.parsePerlFlags(i);break}this.op(x.Op.LEFT_PAREN).cap=++this.numCap,i.skip(1);break;case k.CODES.get("|"):this.parseVerticalBar(),i.skip(1);break;case k.CODES.get(")"):this.parseRightParen(),i.skip(1);break;case k.CODES.get("^"):this.flags&z.ONE_LINE?this.op(x.Op.BEGIN_TEXT):this.op(x.Op.BEGIN_LINE),i.skip(1);break;case k.CODES.get("$"):this.flags&z.ONE_LINE?this.op(x.Op.END_TEXT).flags|=z.WAS_DOLLAR:this.op(x.Op.END_LINE),i.skip(1);break;case k.CODES.get("."):this.flags&z.DOT_NL?this.op(x.Op.ANY_CHAR):this.op(x.Op.ANY_CHAR_NOT_NL),i.skip(1);break;case k.CODES.get("["):this.parseClass(i);break;case k.CODES.get("*"):case k.CODES.get("+"):case k.CODES.get("?"):{a=i.pos();let c=null;switch(i.pop()){case k.CODES.get("*"):c=x.Op.STAR;break;case k.CODES.get("+"):c=x.Op.PLUS;break;case k.CODES.get("?"):c=x.Op.QUEST;break}this.repeat(c,t,r,a,i,e);break}case k.CODES.get("{"):{a=i.pos();const c=Z.parseRepeat(i);if(c<0){i.rewindTo(a),this.literal(i.pop());break}t=c>>16,r=(c&re.MAX_BMP)<<16>>16,this.repeat(x.Op.REPEAT,t,r,a,i,e);break}case k.CODES.get("\\"):{const c=i.pos();if(i.skip(1),this.flags&z.PERL_X&&i.more())switch(i.pop()){case k.CODES.get("A"):this.op(x.Op.BEGIN_TEXT);break e;case k.CODES.get("b"):this.op(x.Op.WORD_BOUNDARY);break e;case k.CODES.get("B"):this.op(x.Op.NO_WORD_BOUNDARY);break e;case k.CODES.get("C"):throw new Ie(Z.ERR_INVALID_ESCAPE,"\\C");case k.CODES.get("Q"):{let m=i.rest();const A=m.indexOf("\\E");A>=0&&(m=m.substring(0,A)),i.skipString(m),i.skipString("\\E");let R=0;for(;R<m.length;){const L=m.codePointAt(R);this.literal(L),R+=de.charCount(L)}break e}case k.CODES.get("z"):this.op(x.Op.END_TEXT);break e;default:i.rewindTo(c);break}const l=this.newRegexp(x.Op.CHAR_CLASS);if(l.flags=this.flags,i.lookingAt("\\p")||i.lookingAt("\\P")){const p=new Ke;if(this.parseUnicodeClass(i,p)){l.runes=p.toArray(),this.push(l);break e}}const h=new Ke;if(this.parsePerlClassEscape(i,h)){l.runes=h.toArray(),this.push(l);break e}i.rewindTo(c),this.reuse(l),this.literal(Z.parseEscape(i));break}default:this.literal(i.pop());break}e=a}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Ie(Z.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const c=r.charAt(2)==="P"?4:3,l=r.indexOf(">");if(l<0)throw new Ie(Z.ERR_INVALID_NAMED_CAPTURE,r);const h=r.substring(c,l);if(e.skipString(h),e.skip(c+1),!Z.isValidCaptureName(h))throw new Ie(Z.ERR_INVALID_NAMED_CAPTURE,r.substring(0,l+1));const p=this.op(x.Op.LEFT_PAREN);if(p.cap=++this.numCap,this.namedGroups[h])throw new Ie(Z.ERR_DUPLICATE_NAMED_CAPTURE,h);this.namedGroups[h]=this.numCap,p.name=h;return}e.skip(2);let i=this.flags,s=1,a=!1;e:for(;e.more();){const c=e.pop();switch(c){case k.CODES.get("i"):i|=z.FOLD_CASE,a=!0;break;case k.CODES.get("m"):i&=-17,a=!0;break;case k.CODES.get("s"):i|=z.DOT_NL,a=!0;break;case k.CODES.get("U"):i|=z.NON_GREEDY,a=!0;break;case k.CODES.get("-"):if(s<0)break e;s=-1,i=~i,a=!1;break;case k.CODES.get(":"):case k.CODES.get(")"):if(s<0){if(!a)break e;i=~i}c===k.CODES.get(":")&&this.op(x.Op.LEFT_PAREN),this.flags=i;return;default:break e}}throw new Ie(Z.ERR_INVALID_PERL_OP,e.from(t))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(x.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===x.Op.VERTICAL_BAR&&Z.isCharClass(this.stack[e-1])&&Z.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const i=r;r=t,t=i,this.stack[e-3]=r}return Z.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===x.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Ie(Z.ERR_INTERNAL_ERROR,"stack underflow");const t=this.pop(),r=this.pop();if(r.op!==x.Op.LEFT_PAREN)throw new Ie(Z.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=r.flags,r.cap===0?this.push(t):(r.op=x.Op.CAPTURE,r.subs=[t],this.push(r))}parsePerlClassEscape(e,t){const r=e.pos();if(!(this.flags&z.PERL_X)||!e.more()||e.pop()!==k.CODES.get("\\")||!e.more())return!1;e.pop();const i=e.from(r),s=Fu.has(i)?Fu.get(i):null;return s===null?!1:(t.appendGroup(s,(this.flags&z.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),i=r.indexOf(":]");if(i<0)return!1;const s=r.substring(0,i+2);e.skipString(s);const a=Zu.has(s)?Zu.get(s):null;if(a===null)throw new Ie(Z.ERR_INVALID_CHAR_RANGE,s);return t.appendGroup(a,(this.flags&z.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if(!(this.flags&z.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let i=1,s=e.pop();if(s===k.CODES.get("P")&&(i=-1),!e.more())throw e.rewindTo(r),new Ie(Z.ERR_INVALID_CHAR_RANGE,e.rest());s=e.pop();let a;if(s!==k.CODES.get("{"))a=de.runeToString(s);else{const p=e.rest(),m=p.indexOf("}");if(m<0)throw e.rewindTo(r),new Ie(Z.ERR_INVALID_CHAR_RANGE,e.rest());a=p.substring(0,m),e.skipString(a),e.skip(1)}a.length!==0&&a.codePointAt(0)===k.CODES.get("^")&&(i=0-i,a=a.substring(1));const c=Z.unicodeTable(a);if(c===null)throw new Ie(Z.ERR_INVALID_CHAR_RANGE,e.from(r));const l=c.first,h=c.second;if(!(this.flags&z.FOLD_CASE)||h===null)t.appendTableWithSign(l,i);else{const p=new Ke().appendTable(l).appendTable(h).cleanClass().toArray();t.appendClassWithSign(p,i)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(x.Op.CHAR_CLASS);r.flags=this.flags;const i=new Ke;let s=1;e.more()&&e.lookingAt("^")&&(s=-1,e.skip(1),this.flags&z.CLASS_NL||i.appendRange(k.CODES.get(`
`),k.CODES.get(`
`)));let a=!0;for(;!e.more()||e.peek()!==k.CODES.get("]")||a;){if(e.more()&&e.lookingAt("-")&&!(this.flags&z.PERL_X)&&!a){const p=e.rest();if(p==="-"||!p.startsWith("-]"))throw e.rewindTo(t),new Ie(Z.ERR_INVALID_CHAR_RANGE,e.rest())}a=!1;const c=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,i))continue;e.rewindTo(c)}if(this.parseUnicodeClass(e,i)||this.parsePerlClassEscape(e,i))continue;e.rewindTo(c);const l=Z.parseClassChar(e,t);let h=l;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(h=Z.parseClassChar(e,t),h<l)throw new Ie(Z.ERR_INVALID_CHAR_RANGE,e.from(c))}this.flags&z.FOLD_CASE?i.appendFoldedRange(l,h):i.appendRange(l,h)}e.skip(1),i.cleanClass(),s<0&&i.negateClass(),r.runes=i.toArray(),this.push(r)}}class sg{constructor(){this.inst=null,this.cap=[]}}class e1{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.denseThreads[t]=null,this.densePcs[t]=e,t}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}}class vr{static fromRE2(e){const t=new vr;return t.prog=e.prog,t.re2=e,t.q0=new e1(t.prog.numInst()),t.q1=new e1(t.prog.numInst()),t.pool=[],t.poolSize=0,t.matched=!1,t.matchcap=Array(t.prog.numCap<2?2:t.prog.numCap).fill(0),t.ncap=0,t}static fromMachine(e){const t=new vr;return t.re2=e.re2,t.prog=e.prog,t.q0=e.q0,t.q1=e.q1,t.pool=e.pool,t.poolSize=e.poolSize,t.matched=e.matched,t.matchcap=e.matchcap,t.ncap=e.ncap,t}init(e){this.ncap=e,e>this.matchcap.length?this.initNewCap(e):this.resetCap(e)}resetCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}}initNewCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}this.matchcap=Array(e).fill(0)}submatches(){return this.ncap===0?de.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(e){let t;return this.poolSize>0?(this.poolSize--,t=this.pool[this.poolSize]):t=new sg,t.inst=e,t}freeQueue(e,t=0){const r=e.size-t,i=this.poolSize+r;this.pool.length<i&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,i)));for(let s=t;s<e.size;s++){const a=e.denseThreads[s];a!==null&&(this.pool[this.poolSize]=a,this.poolSize++)}e.clear()}freeThread(e){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=e,this.poolSize++}match(e,t,r){const i=this.re2.cond;if(i===de.EMPTY_ALL||(r===z.ANCHOR_START||r===z.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let s=this.q0,a=this.q1,c=e.step(t),l=c>>3,h=c&7,p=-1,m=0;c!==fn.EOF()&&(c=e.step(t+h),p=c>>3,m=c&7);let A;for(t===0?A=de.emptyOpContext(-1,l):A=e.context(t);;){if(s.isEmpty()){if(i&de.EMPTY_BEGIN_TEXT&&t!==0||this.matched)break;if(this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const M=e.index(this.re2,t);if(M<0)break;t+=M,c=e.step(t),l=c>>3,h=c&7,c=e.step(t+h),p=c>>3,m=c&7}}!this.matched&&(t===0||r===z.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=t),this.add(s,this.prog.start,t,this.matchcap,A,null));const R=t+h;if(A=e.context(R),this.step(s,a,t,R,l,A,r,t===e.endPos()),h===0||this.ncap===0&&this.matched)break;t+=h,l=p,h=m,l!==-1&&(c=e.step(t+h),p=c>>3,m=c&7);const L=s;s=a,a=L}return this.freeQueue(a),this.matched}step(e,t,r,i,s,a,c,l){const h=this.re2.longest;for(let p=0;p<e.size;p++){let m=e.denseThreads[p];if(m===null)continue;if(h&&this.matched&&this.ncap>0&&this.matchcap[0]<m.cap[0]){this.freeThread(m);continue}const A=m.inst;let R=!1;switch(A.op){case W.MATCH:if(c===z.ANCHOR_BOTH&&!l)break;this.ncap>0&&(!h||!this.matched||this.matchcap[1]<r)&&(m.cap[1]=r,this.matchcap=m.cap.slice(0,this.ncap)),h||this.freeQueue(e,p+1),this.matched=!0;break;case W.RUNE:R=A.matchRune(s);break;case W.RUNE1:R=s===A.runes[0];break;case W.RUNE_ANY:R=!0;break;case W.RUNE_ANY_NOT_NL:R=s!==k.CODES.get(`
`);break;default:throw new Error("bad inst")}R&&(m=this.add(t,A.out,i,m.cap,a,m)),m!==null&&(this.freeThread(m),e.denseThreads[p]=null)}e.clear()}add(e,t,r,i,s,a){if(t===0||e.contains(t))return a;const c=e.add(t),l=this.prog.inst[t];switch(l.op){case W.FAIL:break;case W.ALT:case W.ALT_MATCH:a=this.add(e,l.out,r,i,s,a),a=this.add(e,l.arg,r,i,s,a);break;case W.EMPTY_WIDTH:l.arg&~s||(a=this.add(e,l.out,r,i,s,a));break;case W.NOP:a=this.add(e,l.out,r,i,s,a);break;case W.CAPTURE:if(l.arg<this.ncap){const h=i[l.arg];i[l.arg]=r,this.add(e,l.out,r,i,s,null),i[l.arg]=h}else a=this.add(e,l.out,r,i,s,a);break;case W.MATCH:case W.RUNE:case W.RUNE1:case W.RUNE_ANY:case W.RUNE_ANY_NOT_NL:a===null?a=this.alloc(l):a.inst=l,this.ncap>0&&a.cap!==i&&(a.cap=i.slice(0,this.ncap)),e.denseThreads[c]=a,a=null;break;default:throw new Error("unhandled")}return a}}class ag{constructor(e){this.value=e}get(){return this.value}set(e){this.value=e}compareAndSet(e,t){return this.value===e?(this.value=t,!0):!1}}class dn{static initTest(e){const t=dn.compile(e),r=new dn(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r}static compile(e){return dn.compileImpl(e,z.PERL,!1)}static compilePOSIX(e){return dn.compileImpl(e,z.POSIX,!0)}static compileImpl(e,t,r){let i=Z.parse(e,t);const s=i.maxCap();i=xt.simplify(i);const a=hi.compileRegexp(i),c=new dn(e,a,s,r),[l,h]=a.prefix();return c.prefixComplete=l,c.prefix=h,c.prefixUTF8=de.stringToUtf8ByteArray(c.prefix),c.prefix.length>0&&(c.prefixRune=c.prefix.codePointAt(0)),c.namedGroups=i.namedGroups,c}static match(e,t){return dn.compile(e).match(t)}constructor(e,t,r=0,i=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=i,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new ag}numberOfCapturingGroups(){return this.numSubexp}get(){let e;do e=this.pooled.get();while(e&&!this.pooled.compareAndSet(e,e.next));return e}reset(){this.pooled.set(null)}put(e,t){let r=this.pooled.get();do r=this.pooled.get(),!t&&r&&(e=vr.fromMachine(e),t=!0),e.next!==r&&(e.next=r);while(!this.pooled.compareAndSet(r,e))}toString(){return this.expr}doExecute(e,t,r,i){let s=this.get(),a=!1;s?s.next!==null&&(s=vr.fromMachine(s),a=!0):(s=vr.fromRE2(this),a=!0),s.init(i);const c=s.match(e,t,r)?s.submatches():null;return this.put(s,a),c}match(e){return this.doExecute(Ae.fromUTF16(e),0,z.UNANCHORED,0)!==null}matchWithGroup(e,t,r,i,s){return e instanceof Zt||(e=$s.utf16(e)),this.matchMachineInput(e,t,r,i,s)}matchMachineInput(e,t,r,i,s){if(t>r)return[!1,null];const a=e.isUTF16Encoding()?Ae.fromUTF16(e.asCharSequence(),0,r):Ae.fromUTF8(e.asBytes(),0,r),c=this.doExecute(a,t,i,2*s);return c===null?[!1,null]:[!0,c]}matchUTF8(e){return this.doExecute(Ae.fromUTF8(e),0,z.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let i=0,s=0,a="";const c=Ae.fromUTF16(e);let l=0;for(;s<=e.length;){const h=this.doExecute(c,s,z.UNANCHORED,2);if(h===null||h.length===0)break;a+=e.substring(i,h[0]),(h[1]>i||h[0]===0)&&(a+=t(e.substring(h[0],h[1])),l++),i=h[1];const p=c.step(s)&7;if(s+p>h[1]?s+=p:s+1>h[1]?s++:s=h[1],l>=r)break}return a+=e.substring(i),a}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let i=0;i<e.length;i++)r[i]=e[i];e=r}return e}allMatches(e,t,r=i=>i){let i=[];const s=e.endPos();t<0&&(t=s+1);let a=0,c=0,l=-1;for(;c<t&&a<=s;){const h=this.doExecute(e,a,z.UNANCHORED,this.prog.numCap);if(h===null||h.length===0)break;let p=!0;if(h[1]===a){h[0]===l&&(p=!1);const m=e.step(a);m<0?a=s+1:a+=m&7}else a=h[1];l=h[1],p&&(i.push(r(this.pad(h))),c++)}return i}findUTF8(e){const t=this.doExecute(Ae.fromUTF8(e),0,z.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.doExecute(Ae.fromUTF8(e),0,z.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.doExecute(Ae.fromUTF16(e),0,z.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.doExecute(Ae.fromUTF16(e),0,z.UNANCHORED,2)}findUTF8Submatch(e){const t=this.doExecute(Ae.fromUTF8(e),0,z.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let i=0;i<r.length;i++)2*i<t.length&&t[2*i]>=0&&(r[i]=e.slice(t[2*i],t[2*i+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.doExecute(Ae.fromUTF8(e),0,z.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.doExecute(Ae.fromUTF16(e),0,z.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let i=0;i<r.length;i++)2*i<t.length&&t[2*i]>=0&&(r[i]=e.substring(t[2*i],t[2*i+1]));return r}findSubmatchIndex(e){return this.pad(this.doExecute(Ae.fromUTF16(e),0,z.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(Ae.fromUTF8(e),t,i=>e.slice(i[0],i[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(Ae.fromUTF8(e),t,i=>i.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(Ae.fromUTF16(e),t,i=>e.substring(i[0],i[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(Ae.fromUTF16(e),t,i=>i.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(Ae.fromUTF8(e),t,i=>{let s=new Array(i.length/2|0).fill(null);for(let a=0;a<s.length;a++)i[2*a]>=0&&(s[a]=e.slice(i[2*a],i[2*a+1]));return s});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(Ae.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(Ae.fromUTF16(e),t,i=>{let s=new Array(i.length/2|0).fill(null);for(let a=0;a<s.length;a++)i[2*a]>=0&&(s[a]=e.substring(i[2*a],i[2*a+1]));return s});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(Ae.fromUTF16(e),t);return r.length===0?null:r}}class Et{static CASE_INSENSITIVE=1;static DOTALL=2;static MULTILINE=4;static DISABLE_UNICODE_GROUPS=8;static LONGEST_MATCH=16;static quote(e){return de.quoteMeta(e)}static compile(e,t=0){let r=e;if(t&Et.CASE_INSENSITIVE&&(r=`(?i)${r}`),t&Et.DOTALL&&(r=`(?s)${r}`),t&Et.MULTILINE&&(r=`(?m)${r}`),t&-32)throw new Zm("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let i=z.PERL;t&Et.DISABLE_UNICODE_GROUPS&&(i&=-129);const s=new Et(e,t);return s.re2Input=dn.compileImpl(r,i,(t&Et.LONGEST_MATCH)!==0),s}static matches(e,t){return Et.compile(e).matcher(t).matches()}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const i=new Et(e,t);return i.re2Input=r,i}constructor(e,t){this.patternInput=e,this.flagsInput=t}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.matcher(e).matches()}matcher(e){return Array.isArray(e)&&(e=$s.utf8(e)),new eg(this,e)}split(e,t=0){const r=this.matcher(e),i=[];let s=0,a=0;for(;r.find();){if(a===0&&r.end()===0){a=r.end();continue}if(t>0&&i.length===t-1)break;if(a===r.start()){if(t===0){s+=1,a=r.end();continue}}else for(;s>0;)i.push(""),s-=1;i.push(r.substring(a,r.start())),a=r.end()}if(t===0&&a!==r.inputLength()){for(;s>0;)i.push(""),s-=1;i.push(r.substring(a,r.inputLength()))}return(t!==0||i.length===0)&&i.push(r.substring(a,r.inputLength())),i}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}}/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let Or="12.15.0";function og(n){Or=n}/**
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
 */const Jn=new ca("@firebase/firestore");function ur(){return Jn.logLevel}function q(n,...e){if(Jn.logLevel<=ce.DEBUG){const t=e.map(lc);Jn.debug(`Firestore (${Or}): ${n}`,...t)}}function en(n,...e){if(Jn.logLevel<=ce.ERROR){const t=e.map(lc);Jn.error(`Firestore (${Or}): ${n}`,...t)}}function Ot(n,...e){if(Jn.logLevel<=ce.WARN){const t=e.map(lc);Jn.warn(`Firestore (${Or}): ${n}`,...t)}}function lc(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function K(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,rd(n,r,t)}function rd(n,e,t){let r=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw en(r),new Error(r)}function G(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||rd(e,i,r)}function te(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Nt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class En{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class id{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ye.UNAUTHENTICATED))}shutdown(){}}class lg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ug{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new En;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new En,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new En)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string",31837,{l:r}),new id(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class hg{constructor(e,t,r){this.T=e,this.P=t,this.R=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const e=this.A();return e&&this.I.set("Authorization",e),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class dg{constructor(e,t,r){this.T=e,this.P=t,this.R=r}getToken(){return Promise.resolve(new hg(this.T,this.P,this.R))}start(e,t){e.enqueueRetryable(()=>t(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class t1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){G(this.o===void 0,3512);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new t1(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(G(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new t1(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class uc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=fg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function ae(n,e){return n<e?-1:n>e?1:0}function Lo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return po(i)===po(s)?ae(i,s):po(i)?1:-1}return ae(n.length,e.length)}const mg=55296,gg=57343;function po(n){const e=n.charCodeAt(0);return e>=mg&&e<=gg}function Tr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const Ir="__name__";class Mt{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&K(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Mt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Mt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return ae(e.length,t.length)}static compareSegments(e,t){const r=Mt.isNumericId(e),i=Mt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Mt.extractNumericId(e).compare(Mt.extractNumericId(t)):Lo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wn.fromString(e.substring(4,e.length-2))}}class fe extends Mt{construct(e,t,r){return new fe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new fe(t)}static emptyPath(){return new fe([])}}const yg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends Mt{construct(e,t,r){return new Oe(e,t,r)}static isValidIdentifier(e){return yg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ir}static keyField(){return new Oe([Ir])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new H(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new H(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(t)}static emptyPath(){return new Oe([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(fe.fromString(e))}static fromName(e){return new Y(fe.fromString(e).popFirst(5))}static empty(){return new Y(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new fe(e.slice()))}}/**
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
 */function _g(n,e,t){if(!t)throw new H(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function vg(n,e,t,r){if(e===!0&&r===!0)throw new H(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function n1(n){if(!Y.isDocumentKey(n))throw new H(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ji(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function hc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function Ti(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new H(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=hc(n);throw new H(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Se(n,e){const t={typeString:n};return e&&(t.value=e),t}function Hi(n,e){if(!ji(n))throw new H(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new H(D.INVALID_ARGUMENT,t);return!0}/**
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
 */const r1=-62135596800,i1=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*i1);return new _e(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<r1)throw new H(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/i1}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hi(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-r1;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:Se("string",_e._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
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
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new _e(0,0))}static max(){return new ee(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ii=-1;function wg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new _e(t+1,0):new _e(t,r));return new xn(i,Y.empty(),e)}function Eg(n){return new xn(n.readTime,n.key,Ii)}class xn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xn(ee.min(),Y.empty(),Ii)}static max(){return new xn(ee.max(),Y.empty(),Ii)}}function bg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:ae(n.largestBatchId,e.largestBatchId))}/**
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
 */const Tg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ig{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Nr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Tg)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(i=>i?N.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new N((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let l=0;l<s;l++){const h=l;t(e[h]).next(p=>{a[h]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new N((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Ag(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Dr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ga{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ga.ce=-1;/**
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
 */const dc=-1;function ya(n){return n==null}function Ai(n){return n===0&&1/n==-1/0}function xg(n){return typeof n=="number"&&Number.isInteger(n)&&!Ai(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function Cg(n){return typeof n=="string"}/**
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
 */const sd="";function Sg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=s1(e)),e=kg(n.get(t),e);return s1(e)}function kg(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case sd:t+="";break;default:t+=s}}return t}function s1(n){return n+sd+""}/**
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
 */class we{constructor(e,t){this.comparator=e,this.root=t||qe.EMPTY}insert(e,t){return new we(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ms(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ms(this.root,e,this.comparator,!1)}getReverseIterator(){return new ms(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ms(this.root,e,this.comparator,!0)}}class ms{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new qe(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ke{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new a1(this.data.getIterator())}getIteratorFrom(e){return new a1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ke(this.comparator);return t.data=e,t}}class a1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pt{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new Pt([])}unionWith(e){let t=new ke(Oe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Pt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Tr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */function qs(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function tr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Pg(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function ad(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class od extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new od("Invalid base64 string: "+s):s}}(e);return new Pe(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const Rg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cn(n){if(G(!!n,39018),typeof n=="string"){let e=0;const t=Rg.exec(n);if(G(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Sn(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
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
 */const cd="server_timestamp",ld="__type__",ud="__previous_value__",hd="__local_write_time__";function _a(n){return(n?.mapValue?.fields||{})[ld]?.stringValue===cd}function Gi(n){const e=n.mapValue.fields[ud];return _a(e)?Gi(e):e}function Ar(n){const e=Cn(n.mapValue.fields[hd].timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class Lg{constructor(e,t,r,i,s,a,c,l,h,p,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=m}}const js="(default)";class xi{constructor(e,t){this.projectId=e,this.database=t||js}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database===js}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}function Og(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new H(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(n.options.projectId,e)}/**
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
 */const dd="__type__",Ng="__max__",gs={mapValue:{}},pd="__vector__",Ci="value",xr={nullValue:"NULL_VALUE"},ut={booleanValue:!0},Be={booleanValue:!1};function Re(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_a(n)?4:Dg(n)?9007199254740991:Hs(n)?10:11:K(28295,{value:n})}function It(n,e,t){if(n===e)return!0;const r=Re(n);if(r!==Re(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ar(n).isEqual(Ar(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const c=Cn(s.timestampValue),l=Cn(a.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return Sn(s.bytesValue).isEqual(Sn(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return Ee(s.geoPointValue.latitude)===Ee(a.geoPointValue.latitude)&&Ee(s.geoPointValue.longitude)===Ee(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a,c){if("integerValue"in s&&"integerValue"in a)return Ee(s.integerValue)===Ee(a.integerValue);let l,h;if("doubleValue"in s&&"doubleValue"in a)l=Ee(s.doubleValue),h=Ee(a.doubleValue);else{if(!c?.Ee)return!1;l=Ee(s.integerValue??s.doubleValue),h=Ee(a.integerValue??a.doubleValue)}return l===h?!!c?.he||Ai(l)===Ai(h):!!(c===void 0||c.Te)&&isNaN(l)&&isNaN(h)}(n,e,t);case 9:return Tr(n.arrayValue.values||[],e.arrayValue.values||[],(i,s)=>It(i,s,t));case 10:case 11:return function(s,a,c){const l=s.mapValue.fields||{},h=a.mapValue.fields||{};if(qs(l)!==qs(h))return!1;for(const p in l)if(l.hasOwnProperty(p)&&(h[p]===void 0||!It(l[p],h[p],c)))return!1;return!0}(n,e,t);default:return K(52216,{left:n})}}function Si(n,e){return(n.values||[]).find(t=>It(t,e))!==void 0}function ht(n,e){if(n===e)return 0;const t=Re(n),r=Re(e);if(t!==r)return ae(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ae(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=Ee(s.integerValue||s.doubleValue),l=Ee(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return o1(n.timestampValue,e.timestampValue);case 4:return o1(Ar(n),Ar(e));case 5:return Lo(n.stringValue,e.stringValue);case 6:return function(s,a){const c=Sn(s),l=Sn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const p=ae(c[h],l[h]);if(p!==0)return p}return ae(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=ae(Ee(s.latitude),Ee(a.latitude));return c!==0?c:ae(Ee(s.longitude),Ee(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return c1(n.arrayValue,e.arrayValue);case 10:return function(s,a){const c=s.fields||{},l=a.fields||{},h=c[Ci]?.arrayValue,p=l[Ci]?.arrayValue,m=ae(h?.values?.length||0,p?.values?.length||0);return m!==0?m:c1(h,p)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===gs.mapValue&&a===gs.mapValue)return 0;if(s===gs.mapValue)return 1;if(a===gs.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),h=a.fields||{},p=Object.keys(h);l.sort(),p.sort();for(let m=0;m<l.length&&m<p.length;++m){const A=Lo(l[m],p[m]);if(A!==0)return A;const R=ht(c[l[m]],h[p[m]]);if(R!==0)return R}return ae(l.length,p.length)}(n.mapValue,e.mapValue);default:throw K(23264,{Pe:t})}}function o1(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ae(n,e);const t=Cn(n),r=Cn(e),i=ae(t.seconds,r.seconds);return i!==0?i:ae(t.nanos,r.nanos)}function c1(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=ht(t[i],r[i]);if(s!==void 0&&s!==0)return s}return ae(t.length,r.length)}function Cr(n){return Oo(n)}function Oo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Cn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Sn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Oo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Oo(t.fields[a])}`;return i+"}"}(n.mapValue):K(61005,{value:n})}function As(n){switch(Re(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gi(n);return e?16+As(e):16;case 5:return 2*n.stringValue.length;case 6:return Sn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+As(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return tr(r.fields,(s,a)=>{i+=s.length+As(a)}),i}(n.mapValue);default:throw K(13486,{value:n})}}function Ut(n){return!!n&&"integerValue"in n}function Hn(n){return!!n&&"doubleValue"in n}function kn(n){return Ut(n)||Hn(n)}function Sr(n){return!!n&&"arrayValue"in n}function _t(n){return!!n&&"nullValue"in n}function dt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wn(n){return!!n&&"mapValue"in n}function Hs(n){return(n?.mapValue?.fields||{})[dd]?.stringValue===pd}function No(n){return(n?.mapValue?.fields||{})[Ci]?.arrayValue}function pi(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return tr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=pi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pi(n.arrayValue.values[t]);return e}return{...n}}function Dg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ng}/**
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
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Wn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pi(t)}setAll(e){let t=Oe.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=pi(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Wn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return It(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Wn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){tr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(pi(this.value))}}function fd(n){const e=[];return tr(n.fields,(t,r)=>{const i=new Oe([t]);if(Wn(r)){const s=fd(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Pt(e)}/**
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
 */function va(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ai(e)?"-0":e}}function pc(n){return{integerValue:""+n}}function fc(n,e,t){return Number.isInteger(e)&&t?.preferIntegers||xg(e)?pc(e):va(n,e)}/**
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
 */class wa{constructor(){this._=void 0}}function Vg(n,e,t){return n instanceof Gs?function(i,s){const a={fields:{[ld]:{stringValue:cd},[hd]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&_a(s)&&(s=Gi(s)),s&&(a.fields[ud]=s),{mapValue:a}}(t,e):n instanceof ki?gd(n,e):n instanceof Pi?yd(n,e):n instanceof Ri?function(i,s){const a=md(i,s),c=Ys(a)+Ys(i.Re);return Ut(a)&&Ut(i.Re)?pc(c):va(i.serializer,c)}(n,e):n instanceof Ws?function(i,s){return l1(i,s,Math.min)}(n,e):n instanceof Ks?function(i,s){return l1(i,s,Math.max)}(n,e):void 0}function Mg(n,e,t){return n instanceof ki?gd(n,e):n instanceof Pi?yd(n,e):t}function md(n,e){return n instanceof Ri?kn(e)?e:{integerValue:0}:null}class Gs extends wa{}class ki extends wa{constructor(e){super(),this.elements=e}}function gd(n,e){const t=_d(e);for(const r of n.elements)t.some(i=>It(i,r))||t.push(r);return{arrayValue:{values:t}}}class Pi extends wa{constructor(e){super(),this.elements=e}}function yd(n,e){let t=_d(e);for(const r of n.elements)t=t.filter(i=>!It(i,r));return{arrayValue:{values:t}}}class mc extends wa{constructor(e,t){super(),this.serializer=e,this.Re=t}}class Ri extends mc{}class Ws extends mc{}class Ks extends mc{}function l1(n,e,t){if(!kn(e))return n.Re;const r=t(Ys(e),Ys(n.Re));return Ut(e)&&Ut(n.Re)?pc(r):va(n.serializer,r)}function Ys(n){return Ee(n.integerValue||n.doubleValue)}function _d(n){return Sr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Fg(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ki&&i instanceof ki||r instanceof Pi&&i instanceof Pi?Tr(r.elements,i.elements,It):r instanceof Ri&&i instanceof Ri||r instanceof Ws&&i instanceof Ws||r instanceof Ks&&i instanceof Ks?It(r.Re,i.Re):r instanceof Gs&&i instanceof Gs}(n.transform,e.transform)}class Ug{constructor(e,t){this.version=e,this.transformResults=t}}class Qt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ea{}function vd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ed(n.key,Qt.none()):new Wi(n.key,n.data,Qt.none());{const t=n.data,r=yt.empty();let i=new ke(Oe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new nr(n.key,r,new Pt(i.toArray()),Qt.none())}}function zg(n,e,t){n instanceof Wi?function(i,s,a){const c=i.value.clone(),l=h1(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof nr?function(i,s,a){if(!xs(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=h1(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(wd(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function fi(n,e,t,r){return n instanceof Wi?function(s,a,c,l){if(!xs(s.precondition,a))return c;const h=s.value.clone(),p=d1(s.fieldTransforms,l,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof nr?function(s,a,c,l){if(!xs(s.precondition,a))return c;const h=d1(s.fieldTransforms,l,a),p=a.data;return p.setAll(wd(s)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,a,c){return xs(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Bg(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=md(r.transform,i||null);s!=null&&(t===null&&(t=yt.empty()),t.set(r.field,s))}return t||null}function u1(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Tr(r,i,(s,a)=>Fg(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Wi extends Ea{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class nr extends Ea{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function h1(n,e,t){const r=new Map;G(n.length===t.length,32656,{Ie:t.length,Ae:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,Mg(a,c,t[i]))}return r}function d1(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,Vg(s,a,e))}return r}class Ed extends Ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $g extends Ea{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Qs{constructor(e,t){this.position=e,this.inclusive=t}}function p1(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),t.key):r=ht(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function f1(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!It(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class bd{}class Ne extends bd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new jg(e,t,r):t==="array-contains"?new Wg(e,r):t==="in"?new Kg(e,r):t==="not-in"?new Yg(e,r):t==="array-contains-any"?new Qg(e,r):new Ne(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Hg(e,r):new Gg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ht(t,this.value)):t!==null&&Re(this.value)===Re(t)&&this.matchesComparison(ht(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends bd{constructor(e,t){super(),this.filters=e,this.op=t,this.Ve=null}static create(e,t){return new jt(e,t)}matches(e){return Td(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Ve!==null||(this.Ve=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Ve}getFilters(){return Object.assign([],this.filters)}}function Td(n){return n.op==="and"}function Id(n){return qg(n)&&Td(n)}function qg(n){for(const e of n.filters)if(e instanceof jt)return!1;return!0}function Do(n){if(n instanceof Ne)return n.field.canonicalString()+n.op.toString()+Cr(n.value);if(Id(n))return n.filters.map(e=>Do(e)).join(",");{const e=n.filters.map(t=>Do(t)).join(",");return`${n.op}(${e})`}}function Ad(n,e){return n instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&It(r.value,i.value)}(n,e):n instanceof jt?function(r,i){return i instanceof jt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Ad(a,i.filters[c]),!0):!1}(n,e):void K(19439)}function xd(n){return n instanceof Ne?function(t){return`${t.field.canonicalString()} ${t.op} ${Cr(t.value)}`}(n):n instanceof jt?function(t){return t.op.toString()+" {"+t.getFilters().map(xd).join(" ,")+"}"}(n):"Filter"}class jg extends Ne{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class Hg extends Ne{constructor(e,t){super(e,"in",t),this.keys=Cd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Gg extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=Cd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Cd(n,e){return(e.arrayValue?.values||[]).map(t=>Y.fromName(t.referenceValue))}class Wg extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Sr(t)&&Si(t.arrayValue,this.value)}}class Kg extends Ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Si(this.value.arrayValue,t)}}class Yg extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(Si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Si(this.value.arrayValue,t)}}class Qg extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Sr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Si(this.value.arrayValue,r))}}/**
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
 */class Xs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Xg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Qe{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Qe(e,0,ee.min(),ee.min(),ee.min(),yt.empty(),0)}static newFoundDocument(e,t,r,i){return new Qe(e,1,t,ee.min(),r,i,0)}static newNoDocument(e,t){return new Qe(e,2,t,ee.min(),ee.min(),yt.empty(),0)}static newUnknownDocument(e,t){return new Qe(e,3,t,ee.min(),ee.min(),yt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Jg{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.de=null}}function m1(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Jg(n,e,t,r,i,s,a)}function Sd(n){const e=te(n);if(e.de===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Do(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ya(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Cr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Cr(r)).join(",")),e.de=t}return e.de}function kd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Xg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ad(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!f1(n.startAt,e.startAt)&&f1(n.endAt,e.endAt)}function $n(n){return!!n.isCorePipeline}function Pd(n){return!!n.path&&Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ba{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function Zg(n,e,t,r,i,s,a,c){return new ba(n,e,t,r,i,s,a,c)}function gc(n){return new ba(n)}function g1(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function e7(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function t7(n){return n.collectionGroup!==null}function mi(n){const e=te(n);if(e.fe===null){e.fe=[];const t=new Set;for(const s of e.explicitOrderBy)e.fe.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new ke(Oe.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.fe.push(new Xs(s,r))}),t.has(Oe.keyField().canonicalString())||e.fe.push(new Xs(Oe.keyField(),r))}return e.fe}function zt(n){const e=te(n);return e.me||(e.me=n7(e,mi(n))),e.me}function n7(n,e){if(n.limitType==="F")return m1(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Xs(i.field,s)});const t=n.endAt?new Qs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Qs(n.startAt.position,n.startAt.inclusive):null;return m1(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Vo(n,e,t){return new ba(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function r7(n,e){return kd(zt(n),zt(e))&&n.limitType===e.limitType}function gi(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>xd(i)).join(", ")}]`),ya(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Cr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Cr(i)).join(",")),`Target(${r})`}(zt(n))}; limitType=${n.limitType})`}function Ta(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of mi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){const h=p1(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,mi(r),i)||r.endAt&&!function(a,c,l){const h=p1(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,mi(r),i))}(n,e)}function yc(n){return(e,t)=>{let r=!1;for(const i of mi(n)){const s=i7(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function i7(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):function(s,a,c){const l=a.data.field(s),h=c.data.field(s);return l!==null&&h!==null?ht(l,h):K(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:n.dir})}}/**
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
 */class s7{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ce,ue;function a7(n){switch(n){case D.OK:return K(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function Rd(n){if(n===void 0)return en("GRPC error has no .code"),D.UNKNOWN;switch(n){case Ce.OK:return D.OK;case Ce.CANCELLED:return D.CANCELLED;case Ce.UNKNOWN:return D.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return D.INTERNAL;case Ce.UNAVAILABLE:return D.UNAVAILABLE;case Ce.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ce.NOT_FOUND:return D.NOT_FOUND;case Ce.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ce.ABORTED:return D.ABORTED;case Ce.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ce.DATA_LOSS:return D.DATA_LOSS;default:return K(39323,{code:n})}}(ue=Ce||(Ce={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class rr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){tr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ad(this.inner)}size(){return this.innerSize}}/**
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
 */const o7=new we(Y.comparator);function ot(){return o7}const Ld=new we(Y.comparator);function hr(...n){let e=Ld;for(const t of n)e=e.insert(t.key,t);return e}function Od(n){let e=Ld;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function mn(){return yi()}function Nd(){return yi()}function yi(){return new rr(n=>n.toString(),(n,e)=>n.isEqual(e))}const c7=new we(Y.comparator),l7=new ke(Y.comparator);function se(...n){let e=l7;for(const t of n)e=e.add(t);return e}const u7=new ke(ae);function h7(){return u7}/**
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
 */function d7(){return new TextEncoder}/**
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
 */const p7=new wn([4294967295,4294967295],0);function y1(n){const e=d7().encode(n),t=new Qh;return t.update(e),new Uint8Array(t.digest())}function _1(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new wn([t,r],0),new wn([i,s],0)]}class _c{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new oi(`Invalid padding: ${t}`);if(r<0)throw new oi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new oi(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.ye=wn.fromNumber(this.ge)}we(e,t,r){let i=e.add(t.multiply(wn.fromNumber(r)));return i.compare(p7)===1&&(i=new wn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=y1(e),[r,i]=_1(t);for(let s=0;s<this.hashCount;s++){const a=this.we(r,i,s);if(!this.be(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new _c(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=y1(e),[r,i]=_1(t);for(let s=0;s<this.hashCount;s++){const a=this.we(r,i,s);this.ve(a)}}ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class oi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ki{constructor(e,t,r,i,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.augmentedDocumentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Yi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ki(ee.min(),i,new we(ae),ot(),ot(),se())}}class Yi{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Yi(r,t,se(),se(),se())}}/**
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
 */class Cs{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=i}}class Dd{constructor(e,t){this.targetId=e,this.xe=t}}class Vd{constructor(e,t,r=Pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class v1{constructor(e){this.targetId=e,this.Ce=0,this.Fe=w1(),this.Oe=Pe.EMPTY_BYTE_STRING,this.Me=!1,this.Ne=!0}get current(){return this.Me}get resumeToken(){return this.Oe}get Le(){return this.Ce!==0}get Be(){return this.Ne}Ue(e){e.approximateByteSize()>0&&(this.Ne=!0,this.Oe=e)}ke(){let e=se(),t=se(),r=se();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Yi(this.Oe,this.Me,e,t,r)}qe(){this.Ne=!1,this.Fe=w1()}$e(e,t){this.Ne=!0,this.Fe=this.Fe.insert(e,t)}Ke(e){this.Ne=!0,this.Fe=this.Fe.remove(e)}We(){this.Ce+=1}Qe(){this.Ce-=1,G(this.Ce>=0,3241,{Ce:this.Ce,targetId:this.targetId})}Ge(){this.Ne=!0,this.Me=!0}}const ni="WatchChangeAggregator";class f7{constructor(e){this.ze=e,this.je=new Map,this.He=ot(),this.Je=ys(),this.Ye=ot(),this.Ze=ys(),this.Xe=new we(ae)}et(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.tt(t,e.De):this.nt(t,e.key,e.De);for(const t of e.removedTargetIds)this.nt(t,e.key,e.De)}rt(e){this.forEachTarget(e,t=>{const r=this.je.get(t);if(r)switch(e.state){case 0:this.it(t)&&r.Ue(e.resumeToken);break;case 1:r.Qe(),r.Le||r.qe(),r.Ue(e.resumeToken);break;case 2:r.Qe(),r.Le||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.Ue(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.Ue(e.resumeToken));break;default:K(56790,{state:e.state})}else q(ni,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}_t(e){return $n(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:Pd(e)}ot(e){const t=e.targetId,r=e.xe.count,i=this.ut(t);if(i){const s=i.target;if(this._t(s))if(r===0){const a=new Y($n(s)?fe.fromString(s.getPipelineDocuments()[0]):s.path);this.nt(t,a,Qe.newNoDocument(a,ee.min()))}else G(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.ct(t);if(a!==r){const c=this.lt(e),l=c?this.Et(c,e,a):1;if(l!==0){this.st(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Xe=this.Xe.insert(t,h)}}}}}lt(e){const t=e.xe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=Sn(r).toUint8Array()}catch(l){if(l instanceof od)return Ot("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new _c(a,i,s)}catch(l){return Ot(l instanceof oi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}Et(e,t,r){return t.xe.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.ze.Tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.nt(t,s,null),i++)}),i}Rt(e){const t=new Map;this.je.forEach((s,a)=>{const c=this.ut(a);if(c){if(s.current&&this._t(c.target)){const l=$n(c.target)?fe.fromString(c.target.getPipelineDocuments()[0]):c.target.path,h=new Y(l);this.It(h).has(a)||this.At(a,h)||this.nt(a,h,Qe.newNoDocument(h,e))}s.Be&&(t.set(a,s.ke()),s.qe())}});let r=se();this.Ze.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.ut(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.He.forEach((s,a)=>a.setReadTime(e)),this.Ye.forEach((s,a)=>a.setReadTime(e));const i=new Ki(e,t,this.Xe,this.He,this.Ye,r);return this.He=ot(),this.Je=ys(),this.Ye=ot(),this.Ze=ys(),this.Xe=new we(ae),i}tt(e,t){const r=this.je.get(e);if(!r||!this.it(e))return void q(ni,`addDocumentToTarget received document for unknown inactive target (${e})`);const i=this.At(e,t.key)?2:0;r.$e(t.key,i),$n(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t.key,t):this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.Ze=this.Ze.insert(t.key,this.Vt(t.key).add(e))}nt(e,t,r){const i=this.je.get(e);i&&this.it(e)?(this.At(e,t)?i.$e(t,1):i.Ke(t),this.Ze=this.Ze.insert(t,this.Vt(t).delete(e)),this.Ze=this.Ze.insert(t,this.Vt(t).add(e)),r&&($n(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t,r):this.He=this.He.insert(t,r))):q(ni,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.je.delete(e)}ct(e){const t=this.je.get(e);if(!t)return 0;const r=t.ke();return this.ze.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}We(e){let t=this.je.get(e);t||(q(ni,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new v1(e),this.je.set(e,t)),t.We()}Vt(e){let t=this.Ze.get(e);return t||(t=new ke(ae),this.Ze=this.Ze.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ke(ae),this.Je=this.Je.insert(e,t)),t}it(e){const t=this.ut(e)!==null;return t||q(ni,"Detected inactive target",e),t}ut(e){const t=this.je.get(e);return t===void 0||t.Le?null:this.ze.dt(e)}st(e){this.je.set(e,new v1(e)),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.nt(e,t,null)})}At(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ys(){return new we(Y.comparator)}function w1(){return new we(Y.comparator)}const m7={asc:"ASCENDING",desc:"DESCENDING"},g7={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},y7={and:"AND",or:"OR"};class _7{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Mo(n,e){return n.useProto3Json||ya(e)?e:{value:e}}function Js(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vc(n){const e=Cn(n);return new _e(e.seconds,e.nanos)}function Md(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ss(n,e){return Js(n,e.toTimestamp())}function Bt(n){return G(!!n,49232),ee.fromTimestamp(vc(n))}function wc(n,e){return Fo(n,e).canonicalString()}function Fo(n,e){const t=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Fd(n){const e=fe.fromString(n);return G(qd(e),10190,{key:e.toString()}),e}function Zs(n,e){return wc(n.databaseId,e.path)}function fo(n,e){const t=Fd(e);if(t.get(1)!==n.databaseId.projectId)throw new H(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new H(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(zd(t))}function Ud(n,e){return wc(n.databaseId,e)}function v7(n){const e=Fd(n);return e.length===4?fe.emptyPath():zd(e)}function Uo(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zd(n){return G(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function E1(n,e,t){return{name:Zs(n,e),fields:t.value.mapValue.fields}}function w7(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,p){return h.useProto3Json?(G(p===void 0||typeof p=="string",58123),Pe.fromBase64String(p||"")):(G(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Pe.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const p=h.code===void 0?D.UNKNOWN:Rd(h.code);return new H(p,h.message||"")}(a);t=new Vd(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fo(n,r.document.name),s=Bt(r.document.updateTime),a=r.document.createTime?Bt(r.document.createTime):ee.min(),c=new yt({mapValue:{fields:r.document.fields}}),l=Qe.newFoundDocument(i,s,a,c),h=r.targetIds||[],p=r.removedTargetIds||[];t=new Cs(h,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fo(n,r.document),s=r.readTime?Bt(r.readTime):ee.min(),a=Qe.newNoDocument(i,s),c=r.removedTargetIds||[];t=new Cs([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fo(n,r.document),s=r.removedTargetIds||[];t=new Cs([],s,i,null)}else{if(!("filter"in e))return K(11601,{ft:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new s7(i,s),c=r.targetId;t=new Dd(c,a)}}return t}function E7(n,e){let t;if(e instanceof Wi)t={update:E1(n,e.key,e.value)};else if(e instanceof Ed)t={delete:Zs(n,e.key)};else if(e instanceof nr)t={update:E1(n,e.key,e.data),updateMask:R7(e.fieldMask)};else{if(!(e instanceof $g))return K(16599,{gt:e.type});t={verify:Zs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof Gs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ki)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Pi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ri)return{fieldPath:a.field.canonicalString(),increment:c.Re};if(c instanceof Ws)return{fieldPath:a.field.canonicalString(),minimum:c.Re};if(c instanceof Ks)return{fieldPath:a.field.canonicalString(),maximum:c.Re};throw K(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ss(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(n,e.precondition)),t}function b7(n,e){return n&&n.length>0?(G(e!==void 0,14353),n.map(t=>function(i,s){let a=i.updateTime?Bt(i.updateTime):Bt(s);return a.isEqual(ee.min())&&(a=Bt(s)),new Ug(a,i.transformResults||[])}(t,e))):[]}function T7(n,e){return{documents:[Ud(n,e.path)]}}function I7(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ud(n,i);const s=function(h){if(h.length!==0)return $d(jt.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(p=>function(A){return{field:dr(A.field),direction:S7(A.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Mo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{yt:t,parent:i}}function A7(n){let e=v7(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){G(r===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(m){const A=Bd(m);return A instanceof jt&&Id(A)?A.getFilters():[A]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(A=>function(L){return new Xs(pr(L.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(A))}(t.orderBy));let c=null;t.limit&&(c=function(m){let A;return A=typeof m=="object"?m.value:m,ya(A)?null:A}(t.limit));let l=null;t.startAt&&(l=function(m){const A=!!m.before,R=m.values||[];return new Qs(R,A)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const A=!m.before,R=m.values||[];return new Qs(R,A)}(t.endAt)),Zg(e,i,a,s,c,"F",l,h)}function x7(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function C7(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function Bd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=pr(t.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pr(t.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=pr(t.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=pr(t.unaryFilter.field);return Ne.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ne.create(pr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return jt.create(t.compositeFilter.filters.map(r=>Bd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(t.compositeFilter.op))}(n):K(30097,{filter:n})}function S7(n){return m7[n]}function k7(n){return g7[n]}function P7(n){return y7[n]}function dr(n){return{fieldPath:n.canonicalString()}}function pr(n){return Oe.fromServerFormat(n.fieldPath)}function $d(n){return n instanceof Ne?function(t){if(t.op==="=="){if(dt(t.value))return{unaryFilter:{field:dr(t.field),op:"IS_NAN"}};if(_t(t.value))return{unaryFilter:{field:dr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dt(t.value))return{unaryFilter:{field:dr(t.field),op:"IS_NOT_NAN"}};if(_t(t.value))return{unaryFilter:{field:dr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dr(t.field),op:k7(t.op),value:t.value}}}(n):n instanceof jt?function(t){const r=t.getFilters().map(i=>$d(i));return r.length===1?r[0]:{compositeFilter:{op:P7(t.op),filters:r}}}(n):K(54877,{filter:n})}function R7(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function jd(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function Li(n,e){const t={fields:{}};return e.forEach((r,i)=>{if(typeof i!="string")throw new Error(`Cannot encode map with non-string key: ${i}`);t.fields[i]=r._toProto(n)}),{mapValue:t}}function Hd(n){return{stringValue:n}}/**
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
 */function Ia(n){return new _7(n,!0)}/**
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
 */class bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bt(Pe.fromBase64String(e))}catch(t){throw new H(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new bt(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hi(e,bt._jsonSchema))return bt.fromBase64String(e.bytes)}}bt._jsonSchemaVersion="firestore/bytes/1.0",bt._jsonSchema={type:Se("string",bt._jsonSchemaVersion),bytes:Se("string")};/**
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
 */class Ec{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function L7(){return new Ec(Ir)}/**
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
 */class Gd{constructor(e){this._methodName=e}}/**
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
 */class $t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$t._jsonSchemaVersion}}static fromJSON(e){if(Hi(e,$t._jsonSchema))return new $t(e.latitude,e.longitude)}}function Wd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */$t._jsonSchemaVersion="firestore/geoPoint/1.0",$t._jsonSchema={type:Se("string",$t._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};class O7{bt(e){}shutdown(){}}/**
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
 */const b1="ConnectivityMonitor";class T1{constructor(){this.vt=()=>this.St(),this.Dt=()=>this.xt(),this.Ct=[],this.Ft()}bt(e){this.Ct.push(e)}shutdown(){window.removeEventListener("online",this.vt),window.removeEventListener("offline",this.Dt)}Ft(){window.addEventListener("online",this.vt),window.addEventListener("offline",this.Dt)}St(){q(b1,"Network connectivity changed: AVAILABLE");for(const e of this.Ct)e(0)}xt(){q(b1,"Network connectivity changed: UNAVAILABLE");for(const e of this.Ct)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _s=null;function zo(){return _s===null?_s=function(){return 268435456+Math.round(2147483648*Math.random())}():_s++,"0x"+_s.toString(16)}/**
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
 */const mo="RestConnection",N7={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class D7{get Ot(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Mt=t+"://"+e.host,this.Nt=`projects/${r}/databases/${i}`,this.Lt=this.databaseId.database===js?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Bt(e,t,r,i,s){const a=zo(),c=this.Ut(e,t.toUriEncodedString());q(mo,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Nt,"x-goog-request-params":this.Lt};this.kt(l,i,s);const{host:h}=new URL(c),p=oa(h);return this.qt(e,c,l,r,p).then(m=>(q(mo,`Received RPC '${e}' ${a}: `,m),m),m=>{throw Ot(mo,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m})}$t(e,t,r,i,s,a){return this.Bt(e,t,r,i,s)}kt(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Or}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Ut(e,t){const r=N7[e];let i=`${this.Mt}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class V7{constructor(e){this.Kt=e.Kt,this.Wt=e.Wt}Qt(e){this.Gt=e}zt(e){this.jt=e}Ht(e){this.Jt=e}onMessage(e){this.Yt=e}close(){this.Wt()}send(e){this.Kt(e)}Zt(){this.Gt()}Xt(){this.jt()}en(e){this.Jt(e)}tn(e){this.Yt(e)}}/**
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
 */const We="WebChannelConnection",ri=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(i){setTimeout(()=>{throw i},0)}})};class wr extends D7{constructor(e){super(e),this.nn=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static rn(){if(!wr.sn){const e=ed();ri(e,Zh.STAT_EVENT,t=>{t.stat===Ro.PROXY?q(We,"STAT_EVENT: detected buffering proxy"):t.stat===Ro.NOPROXY&&q(We,"STAT_EVENT: detected no buffering proxy")}),wr.sn=!0}}qt(e,t,r,i,s){const a=zo();return new Promise((c,l)=>{const h=new Xh;h.setWithCredentials(!0),h.listenOnce(Jh.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Is.NO_ERROR:const m=h.getResponseJson();q(We,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case Is.TIMEOUT:q(We,`RPC '${e}' ${a} timed out`),l(new H(D.DEADLINE_EXCEEDED,"Request time out"));break;case Is.HTTP_ERROR:const A=h.getStatus();if(q(We,`RPC '${e}' ${a} failed with status:`,A,"response text:",h.getResponseText()),A>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const L=R?.error;if(L&&L.status&&L.message){const M=function(J){const le=J.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(le)>=0?le:D.UNKNOWN}(L.status);l(new H(M,L.message))}else l(new H(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new H(D.UNAVAILABLE,"Connection failed."));break;default:K(9055,{_n:e,streamId:a,an:h.getLastErrorCode(),un:h.getLastError()})}}finally{q(We,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(i);q(We,`RPC '${e}' ${a} sending request:`,i),h.send(t,"POST",p,r,15)})}cn(e,t,r){const i=zo(),s=[this.Mt,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.kt(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=s.join("");q(We,`Creating RPC '${e}' stream ${i}: ${h}`,c);const p=a.createWebChannel(h,c);this.En(p);let m=!1,A=!1;const R=new V7({Kt:L=>{A?q(We,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(m||(q(We,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(We,`RPC '${e}' stream ${i} sending:`,L),p.send(L))},Wt:()=>p.close()});return ri(p,ai.EventType.OPEN,()=>{A||(q(We,`RPC '${e}' stream ${i} transport opened.`),R.Zt())}),ri(p,ai.EventType.CLOSE,()=>{A||(A=!0,q(We,`RPC '${e}' stream ${i} transport closed`),R.en(),this.hn(p))}),ri(p,ai.EventType.ERROR,L=>{A||(A=!0,Ot(We,`RPC '${e}' stream ${i} transport errored. Name:`,L.name,"Message:",L.message),R.en(new H(D.UNAVAILABLE,"The operation could not be completed")))}),ri(p,ai.EventType.MESSAGE,L=>{if(!A){const M=L.data[0];G(!!M,16349);const B=M,J=B?.error||B[0]?.error;if(J){q(We,`RPC '${e}' stream ${i} received error:`,J);const le=J.status;let V=function(ne){const w=Ce[ne];if(w!==void 0)return Rd(w)}(le),j=J.message;le==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&Ot(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=D.INTERNAL,j="Unknown error status: "+le+" with message "+J.message),A=!0,R.en(new H(V,j)),p.close()}else q(We,`RPC '${e}' stream ${i} received:`,M),R.tn(M)}}),wr.rn(),setTimeout(()=>{R.Xt()},0),R}terminate(){this.nn.forEach(e=>e.close()),this.nn=[]}En(e){this.nn.push(e)}hn(e){this.nn=this.nn.filter(t=>t===e)}kt(e,t,r){super.kt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return td()}}/**
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
 */function M7(n){return new wr(n)}wr.sn=!1;class Kd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Tn=e,this.timerId=t,this.Pn=r,this.Rn=i,this.In=s,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(e){this.cancel();const t=Math.floor(this.An+this.pn()),r=Math.max(0,Date.now()-this.dn),i=Math.max(0,t-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.An} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,i,()=>(this.dn=Date.now(),e())),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
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
 */const I1="PersistentStream";class Yd{constructor(e,t,r,i,s,a,c,l){this.Tn=e,this.yn=r,this.wn=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.bn=0,this.vn=null,this.Sn=null,this.stream=null,this.Dn=0,this.xn=new Kd(e,t)}Cn(){return this.state===1||this.state===5||this.Fn()}Fn(){return this.state===2||this.state===3}start(){this.Dn=0,this.state!==4?this.auth():this.On()}async stop(){this.Cn()&&await this.close(0)}Mn(){this.state=0,this.xn.reset()}Nn(){this.Fn()&&this.vn===null&&(this.vn=this.Tn.enqueueAfterDelay(this.yn,6e4,()=>this.Ln()))}Bn(e){this.Un(),this.stream.send(e)}async Ln(){if(this.Fn())return this.close(0)}Un(){this.vn&&(this.vn.cancel(),this.vn=null)}kn(){this.Sn&&(this.Sn.cancel(),this.Sn=null)}async close(e,t){this.Un(),this.kn(),this.xn.cancel(),this.bn++,e!==4?this.xn.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(en(t.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.xn.fn()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ht(t)}qn(){}auth(){this.state=1;const e=this.$n(this.bn),t=this.bn;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.bn===t&&this.Kn(r,i)},r=>{e(()=>{const i=new H(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Wn(i)})})}Kn(e,t){const r=this.$n(this.bn);this.stream=this.Qn(e,t),this.stream.Qt(()=>{r(()=>this.listener.Qt())}),this.stream.zt(()=>{r(()=>(this.state=2,this.Sn=this.Tn.enqueueAfterDelay(this.wn,1e4,()=>(this.Fn()&&(this.state=3),Promise.resolve())),this.listener.zt()))}),this.stream.Ht(i=>{r(()=>this.Wn(i))}),this.stream.onMessage(i=>{r(()=>++this.Dn==1?this.Gn(i):this.onNext(i))})}On(){this.state=5,this.xn.mn(async()=>{this.state=0,this.start()})}Wn(e){return q(I1,`close with error: ${e}`),this.stream=null,this.close(4,e)}$n(e){return t=>{this.Tn.enqueueAndForget(()=>this.bn===e?t():(q(I1,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class F7 extends Yd{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}Qn(e,t){return this.connection.cn("Listen",e,t)}Gn(e){return this.onNext(e)}onNext(e){this.xn.reset();const t=w7(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?ee.min():a.readTime?Bt(a.readTime):ee.min()}(e);return this.listener.zn(t,r)}jn(e){const t={};t.database=Uo(this.serializer),t.addTarget=function(s,a){let c;const l=a.target;if(c=$n(l)?{pipelineQuery:C7(s,l)}:Pd(l)?{documents:T7(s,l)}:{query:I7(s,l).yt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Md(s,a.resumeToken);const h=Mo(s,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ee.min())>0){c.readTime=Js(s,a.snapshotVersion.toTimestamp());const h=Mo(s,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=x7(this.serializer,e);r&&(t.labels=r),this.Bn(t)}Hn(e){const t={};t.database=Uo(this.serializer),t.removeTarget=e,this.Bn(t)}}class U7 extends Yd{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get Jn(){return this.Dn>0}start(){this.lastStreamToken=void 0,super.start()}qn(){this.Jn&&this.Yn([])}Qn(e,t){return this.connection.cn("Write",e,t)}Gn(e){return G(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0,55816),this.listener.Zn()}onNext(e){G(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.xn.reset();const t=b7(e.writeResults,e.commitTime),r=Bt(e.commitTime);return this.listener.Xn(r,t)}er(){const e={};e.database=Uo(this.serializer),this.Bn(e)}Yn(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>E7(this.serializer,r))};this.Bn(t)}}/**
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
 */class z7{}class B7 extends z7{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.tr=!1}nr(){if(this.tr)throw new H(D.FAILED_PRECONDITION,"The client has already been terminated.")}Bt(e,t,r,i){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Bt(e,Fo(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(D.UNKNOWN,s.toString())})}$t(e,t,r,i,s){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.$t(e,Fo(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(D.UNKNOWN,a.toString())})}terminate(){this.tr=!0,this.connection.terminate()}}function $7(n,e,t,r){return new B7(n,e,t,r)}/**
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
 */const q7="ComponentProvider",A1=new Map;function j7(n,e,t,r,i){return new Lg(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Wd(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const x1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Qd=41943040;class st{static withCacheSize(e){return new st(e,st.DEFAULT_COLLECTION_PERCENTILE,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}st.DEFAULT_COLLECTION_PERCENTILE=10,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,st.DEFAULT=new st(Qd,st.DEFAULT_COLLECTION_PERCENTILE,st.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),st.DISABLED=new st(-1,0,0);/**
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
 */const C1="LruGarbageCollector",H7=1048576;function S1([n,e],[t,r]){const i=ae(n,t);return i===0?ae(e,r):i}class G7{constructor(e){this.rr=e,this.buffer=new ke(S1),this.ir=0}sr(){return++this.ir}_r(e){const t=[e,this.sr()];if(this.buffer.size<this.rr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();S1(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class W7{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.ur(6e4)}stop(){this.ar&&(this.ar.cancel(),this.ar=null)}get started(){return this.ar!==null}ur(e){q(C1,`Garbage collection scheduled in ${e}ms`),this.ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dr(t)?q(C1,"Ignoring IndexedDB error during garbage collection: ",t):await Nr(t)}await this.ur(3e5)})}}class K7{constructor(e,t){this.cr=e,this.params=t}calculateTargetCount(e,t){return this.cr.lr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(ga.ce);const r=new G7(t);return this.cr.forEachTarget(e,i=>r._r(i.sequenceNumber)).next(()=>this.cr.Er(e,i=>r._r(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.cr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.cr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(x1)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),x1):this.hr(e,t))}getCacheSize(e){return this.cr.getCacheSize(e)}hr(e,t){let r,i,s,a,c,l,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,a=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(s=m,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),ur()<=ce.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-p}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function Y7(n,e){return new K7(n,e)}/**
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
 */const Xd="firestore.googleapis.com",k1=!0;class P1{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Xd,this.ssl=k1}else this.host=e.host,this.ssl=e.ssl??k1;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Qd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<H7)throw new H(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wd(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bc{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new P1({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new P1(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cg;switch(r.type){case"firstParty":return new dg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=A1.get(t);r&&(q(q7,"Removing Datastore"),A1.delete(t),r.terminate())}(this),Promise.resolve()}}function Q7(n,e,t,r={}){n=Ti(n,bc);const i=oa(e),s=n._getSettings(),a={...s,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&Z2(`https://${c}`),s.host!==Xd&&s.host!==c&&Ot("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:c,ssl:i,emulatorOptions:r};if(!Er(l,a)&&(n._setSettings(l),r.mockUserToken)){let h,p;if(typeof r.mockUserToken=="string")h=r.mockUserToken,p=Ye.MOCK_USER;else{h=V2(r.mockUserToken,n._app?.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new H(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ye(m)}n._authCredentials=new lg(new id(h,p))}}/**
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
 */class Tc{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tc(this.firestore,e,this._query)}}class Ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Oi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}toJSON(){return{type:Ve._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Hi(t,Ve._jsonSchema))return new Ve(e,r||null,new Y(fe.fromString(t.referencePath)))}}Ve._jsonSchemaVersion="firestore/documentReference/1.0",Ve._jsonSchema={type:Se("string",Ve._jsonSchemaVersion),referencePath:Se("string")};class Oi extends Tc{constructor(e,t,r){super(e,t,gc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new Y(e))}withConverter(e){return new Oi(this.firestore,e,this._path)}}function Jd(n,e,...t){if(n=lt(n),arguments.length===1&&(e=uc.newId()),_g("doc","path",e),n instanceof bc){const r=fe.fromString(e,...t);return n1(r),new Ve(n,null,new Y(r))}{if(!(n instanceof Ve||n instanceof Oi))throw new H(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return n1(r),new Ve(n.firestore,n instanceof Oi?n.converter:null,new Y(r))}}/**
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
 */class ct{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hi(e,ct._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ct(e.vectorValues);throw new H(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ct._jsonSchemaVersion="firestore/vectorValue/1.0",ct._jsonSchema={type:Se("string",ct._jsonSchemaVersion),vectorValues:Se("object")};/**
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
 */const X7=/^__.*__$/;class J7{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new nr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wi(e,this.data,t,this.fieldTransforms)}}function Zd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:n})}}class Ic{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ic({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ea(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Zd(this.dataSource)&&X7.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Z7{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ia(e)}createContext(e,t,r,i=!1){return new Ic({dataSource:e,methodName:t,targetDoc:r,path:Oe.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function e4(n){const e=n._freezeSettings(),t=Ia(n._databaseId);return new Z7(n._databaseId,!!e.ignoreUndefinedProperties,t)}function t4(n,e,t,r,i,s={}){const a=n.createContext(s.merge||s.mergeFields?2:0,e,t,i);np("Data must be an object, but it was:",a,r);const c=ep(r,a);let l,h;if(s.merge)l=new Pt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const m of s.mergeFields){const A=Aa(e,m,t);if(!a.contains(A))throw new H(D.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);i4(p,A)||p.push(A)}l=new Pt(p),h=a.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=a.fieldTransforms;return new J7(new yt(c),l,h)}function Ni(n,e,t){if(tp(n=lt(n)))return np("Unsupported field value:",e,n),ep(n,e);if(n instanceof Gd)return function(i,s){if(!Zd(s.dataSource))throw s.createError(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(i,s){const a=[];let c=0;for(const l of i){let h=Ni(l,s.childContextForArray(c));h==null&&(h={nullValue:"NULL_VALUE"}),a.push(h),c++}return{arrayValue:{values:a}}}(n,e)}return function(i,s,a){if((i=lt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return fc(s.serializer,i,a);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const c=_e.fromDate(i);return{timestampValue:Js(s.serializer,c)}}if(i instanceof _e){const c=new _e(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Js(s.serializer,c)}}if(i instanceof $t)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof bt)return{bytesValue:Md(s.serializer,i._byteString)};if(i instanceof Ve){const c=s.databaseId,l=i.firestore._databaseId;if(!l.isEqual(c))throw s.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:wc(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ct)return function(l,h){const p=l instanceof ct?l.toArray():l;return{mapValue:{fields:{[dd]:{stringValue:pd},[Ci]:{arrayValue:{values:p.map(A=>{if(typeof A!="number")throw h.createError("VectorValues must only contain numeric values.");return va(h.serializer,A)})}}}}}}(i,s);if(jd(i))return i._toProto(s.serializer);throw s.createError(`Unsupported field value: ${hc(i)}`)}(n,e,t)}function ep(n,e){const t={};return ad(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tr(n,(r,i)=>{const s=Ni(i,e.childContextForField(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function tp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof $t||n instanceof bt||n instanceof Ve||n instanceof Gd||n instanceof ct||jd(n))}function np(n,e,t){if(!tp(t)||!ji(t)){const r=hc(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Aa(n,e,t){if((e=lt(e))instanceof Ec)return e._internalPath;if(typeof e=="string")return r4(n,e);throw ea("Field path arguments must be of type string or ",n,!1,void 0,t)}const n4=new RegExp("[~\\*/\\[\\]]");function r4(n,e,t){if(e.search(n4)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ec(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ea(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new H(D.INVALID_ARGUMENT,c+n+l)}function i4(n,e){return n.some(t=>t.isEqual(e))}function s4(n){return typeof n._readUserData=="function"}/**
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
 */class Xe{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=yt.empty();for(const i in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(i)){const s=this.optionDefinitions[i];if(i in e){const a=e[i];let c;s.nestedOptions&&ji(a)?c={mapValue:{fields:new Xe(s.nestedOptions).getOptionsProto(t,a)}}:a&&(c=Ni(a,t)??void 0),c&&r.set(Oe.fromServerFormat(s.serverName),c)}}return r}getOptionsProto(e,t,r){const i=this._getKnownOptions(t,e);if(r){const s=new Map(Pg(r,(a,c)=>[Oe.fromServerFormat(c),a!==void 0?Ni(a,e):null]));i.setAll(s)}return i.value.mapValue.fields??{}}}/**
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
 */function a4(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!ji(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function o4(n){return new ct(n)}/**
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
 */function F(n){let e;return n instanceof ir?n:(e=ji(n)?p4(n):n instanceof Array?f4(n):rp(n,void 0),e)}function go(n){if(n instanceof ir)return n;if(n instanceof ct)return Di(n);if(Array.isArray(n))return Di(o4(n));throw new Error("Unsupported value: "+typeof n)}function Ac(n){return Cg(n)?u4(n):F(n)}class ir{constructor(){this._protoValueType="ProtoValue"}add(e){return new O("add",[this,F(e)],"add")}asBoolean(){if(this instanceof Pn)return this;if(this instanceof Vr)return new sp(this);if(this instanceof Qi)return new d4(this);if(this instanceof O)return new ip(this);throw new H("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new O("subtract",[this,F(e)],"subtract")}multiply(e){return new O("multiply",[this,F(e)],"multiply")}divide(e){return new O("divide",[this,F(e)],"divide")}mod(e){return new O("mod",[this,F(e)],"mod")}equal(e){return new O("equal",[this,F(e)],"equal").asBoolean()}notEqual(e){return new O("not_equal",[this,F(e)],"notEqual").asBoolean()}lessThan(e){return new O("less_than",[this,F(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new O("less_than_or_equal",[this,F(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new O("greater_than",[this,F(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new O("greater_than_or_equal",[this,F(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(i=>F(i));return new O("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new O("array_contains",[this,F(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new ci(e.map(F),"arrayContainsAll"):e;return new O("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new ci(e.map(F),"arrayContainsAny"):e;return new O("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new O("array_reverse",[this])}arrayLength(){return new O("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new ci(e.map(F),"equalAny"):e;return new O("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new ci(e.map(F),"notEqualAny"):e;return new O("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new O("exists",[this],"exists").asBoolean()}charLength(){return new O("char_length",[this],"charLength")}like(e){return new O("like",[this,F(e)],"like").asBoolean()}regexContains(e){return new O("regex_contains",[this,F(e)],"regexContains").asBoolean()}regexFind(e){return new O("regex_find",[this,F(e)],"regexFind")}regexFindAll(e){return new O("regex_find_all",[this,F(e)],"regexFindAll")}regexMatch(e){return new O("regex_match",[this,F(e)],"regexMatch").asBoolean()}stringContains(e){return new O("string_contains",[this,F(e)],"stringContains").asBoolean()}startsWith(e){return new O("starts_with",[this,F(e)],"startsWith").asBoolean()}endsWith(e){return new O("ends_with",[this,F(e)],"endsWith").asBoolean()}toLower(){return new O("to_lower",[this],"toLower")}toUpper(){return new O("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(F(e)),new O("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(F(e)),new O("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(F(e)),new O("rtrim",t,"rtrim")}type(){return new O("type",[this])}isType(e){return new O("is_type",[this,Di(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(F);return new O("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new O("string_index_of",[this,F(e)],"stringIndexOf")}stringRepeat(e){return new O("string_repeat",[this,F(e)],"stringRepeat")}stringReplaceAll(e,t){return new O("string_replace_all",[this,F(e),F(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new O("string_replace_one",[this,F(e),F(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(F);return new O("concat",[this,...r],"concat")}reverse(){return new O("reverse",[this],"reverse")}arrayFilter(e,t){return new O("array_filter",[this,F(e),t],"arrayFilter")}arrayTransform(e,t){return new O("array_transform",[this,F(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new O("array_transform",[this,F(e),F(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,F(e)];return t!==void 0&&r.push(F(t)),new O("array_slice",r,"arraySlice")}arrayFirst(){return new O("array_first",[this],"arrayFirst")}arrayFirstN(e){return new O("array_first_n",[this,F(e)],"arrayFirstN")}arrayLast(){return new O("array_last",[this],"arrayLast")}arrayLastN(e){return new O("array_last_n",[this,F(e)],"arrayLastN")}arrayMaximum(){return new O("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new O("maximum_n",[this,F(e)],"arrayMaximumN")}arrayMinimum(){return new O("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new O("minimum_n",[this,F(e)],"arrayMinimumN")}arrayIndexOf(e){return new O("array_index_of",[this,F(e),F("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new O("array_index_of",[this,F(e),F("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new O("array_index_of_all",[this,F(e)],"arrayIndexOfAll")}byteLength(){return new O("byte_length",[this],"byteLength")}ceil(){return new O("ceil",[this])}floor(){return new O("floor",[this])}abs(){return new O("abs",[this])}exp(){return new O("exp",[this])}mapGet(e){return new O("map_get",[this,Di(e)],"mapGet")}mapSet(e,t,...r){const i=[this,F(e),F(t),...r.map(F)];return new O("map_set",i,"mapSet")}mapKeys(){return new O("map_keys",[this],"mapKeys")}mapValues(){return new O("map_values",[this],"mapValues")}mapEntries(){return new O("map_entries",[this],"mapEntries")}getField(e){return new O("get_field",[this,F(e)],"get_field")}count(){return gt._create("count",[this],"count")}sum(){return gt._create("sum",[this],"sum")}average(){return gt._create("average",[this],"average")}minimum(){return gt._create("minimum",[this],"minimum")}maximum(){return gt._create("maximum",[this],"maximum")}first(){return gt._create("first",[this],"first")}last(){return gt._create("last",[this],"last")}arrayAgg(){return gt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return gt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return gt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new O("maximum",[this,...r.map(F)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new O("minimum",[this,...r.map(F)],"minimum")}vectorLength(){return new O("vector_length",[this],"vectorLength")}cosineDistance(e){return new O("cosine_distance",[this,go(e)],"cosineDistance")}dotProduct(e){return new O("dot_product",[this,go(e)],"dotProduct")}euclideanDistance(e){return new O("euclidean_distance",[this,go(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new O("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new O("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new O("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new O("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new O("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new O("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new O("timestamp_add",[this,F(e),F(t)],"timestampAdd")}timestampSubtract(e,t){return new O("timestamp_subtract",[this,F(e),F(t)],"timestampSubtract")}timestampDiff(e,t){return new O("timestamp_diff",[this,Ac(e),F(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,F(e)];return t&&r.push(F(t)),new O("timestamp_extract",r,"timestampExtract")}documentId(){return new O("document_id",[this],"documentId")}parent(){return new O("parent",[this],"parent")}substring(e,t){const r=F(e);return new O("substring",t===void 0?[this,r]:[this,r,F(t)],"substring")}arrayGet(e){return new O("array_get",[this,F(e)],"arrayGet")}isError(){return new O("is_error",[this],"isError").asBoolean()}ifError(e){const t=new O("if_error",[this,F(e)],"ifError");return e instanceof Pn?t.asBoolean():t}isAbsent(){return new O("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new O("map_remove",[this,F(e)],"mapRemove")}mapMerge(e,...t){const r=F(e),i=t.map(F);return new O("map_merge",[this,r,...i],"mapMerge")}pow(e){return new O("pow",[this,F(e)])}trunc(e){return e===void 0?new O("trunc",[this]):new O("trunc",[this,F(e)],"trunc")}round(e){return e===void 0?new O("round",[this]):new O("round",[this,F(e)],"round")}collectionId(){return new O("collection_id",[this])}length(){return new O("length",[this])}ln(){return new O("ln",[this])}sqrt(){return new O("sqrt",[this])}stringReverse(){return new O("string_reverse",[this])}ifAbsent(e){return new O("if_absent",[this,F(e)],"ifAbsent")}ifNull(e){return new O("if_null",[this,F(e)],"ifNull")}coalesce(e,...t){return new O("coalesce",[this,F(e),...t.map(F)],"coalesce")}join(e){return new O("join",[this,F(e)],"join")}log10(){return new O("log10",[this])}arraySum(){return new O("sum",[this])}split(e){return new O("split",[this,F(e)])}timestampTruncate(e,t){const r=[this,F(e)];return t&&r.push(F(t)),new O("timestamp_trunc",r)}ascending(){return m4(this)}descending(){return g4(this)}as(e){return new l4(this,e,"as")}}class gt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const i=new gt(e,t);return i._methodName=r,i}as(e){return new c4(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class c4{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class l4{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class ci extends ir{constructor(e,t){super(),this.Rr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.Rr.map(t=>t._toProto(e))}}}_readUserData(e){this.Rr.forEach(t=>t._readUserData(e))}}class Qi extends ir{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new O("geo_distance",[this,F(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function u4(n){return h4(n,"field")}function h4(n,e){return new Qi(typeof n=="string"?Ir===n?L7()._internalPath:Aa("field",n):n._internalPath,e)}class Vr extends ir{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Vr(e,void 0);return t._protoValue=e,t}_toProto(e){return G(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,a4(this._protoValue)||(this._protoValue=Ni(this.value,e))}}function Di(n,e){return rp(n,"constant")}function rp(n,e){const t=new Vr(n,e);return typeof n=="boolean"?new sp(t):t}class O extends ir{constructor(e,t,r,i){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),i!==void 0&&(this._options=i)}get _optionsUtil(){return new Xe({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Pn extends ir{get _methodName(){return this._expr._methodName}countIf(){return gt._create("count_if",[this],"countIf")}not(){return new O("not",[this],"not").asBoolean()}conditional(e,t){return new O("conditional",[this,e,t],"conditional")}ifError(e){const t=F(e),r=new O("if_error",[this,t],"ifError");return t instanceof Pn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class ip extends Pn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class sp extends Pn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class d4 extends Pn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function p4(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const i=n[r];t.push(Di(r)),t.push(F(i))}return new O("map",t,"map")}function f4(n){return function(t,r){return new O("array",t.map(i=>F(i)),r)}(n,"array")}function m4(n){return new ap(Ac(n),"ascending","ascending")}function g4(n){return new ap(Ac(n),"descending","descending")}class ap{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Hd(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class wt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class op extends wt{get _name(){return"add_fields"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Li(e,this.fields)]}}_readUserData(e){super._readUserData(e),Rn(this.fields,e)}}class cp extends wt{get _name(){return"aggregate"}get _optionsUtil(){return new Xe({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Li(e,this.accumulators),Li(e,this.groups)]}}_readUserData(e){super._readUserData(e),Rn(this.groups,e),Rn(this.accumulators,e)}}class lp extends wt{get _name(){return"distinct"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Li(e,this.groups)]}}_readUserData(e){super._readUserData(e),Rn(this.groups,e)}}class xa extends wt{get _name(){return"collection"}get _optionsUtil(){return new Xe({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Vr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Vr}]}}_readUserData(e){super._readUserData(e)}}class Ca extends wt{get _name(){return"collection_group"}get _optionsUtil(){return new Xe({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class xc extends wt{get _name(){return"database"}get _optionsUtil(){return new Xe({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Cc extends wt{get _name(){return"documents"}get _optionsUtil(){return new Xe({})}constructor(e,t){if(super(t),!e||e.length===0)throw new H(D.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(s=>s.startsWith("/")?s:"/"+s),i=new Set(r);if(i.size!==r.length)throw new H(D.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=r,this.mr=i}_toProto(e){return{...super._toProto(e),args:this.dr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class Sc extends wt{get _name(){return"where"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Rn(this.condition,e)}}class Vi extends wt{get _name(){return"limit"}get _optionsUtil(){return new Xe({})}constructor(e,t){G(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[fc(e,this.limit)]}}}class R1 extends wt{get _name(){return"offset"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[fc(e,this.offset)]}}}class y4 extends wt{get _name(){return"select"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Li(e,this.selections)]}}_readUserData(e){super._readUserData(e),Rn(this.selections,e)}}class kc extends wt{get _name(){return"sort"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),Rn(this.orderings,e)}}class Pc extends wt{get _name(){return"replace_with"}get _optionsUtil(){return new Xe({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Hd(Pc.pr)]}}_readUserData(e){super._readUserData(e),Rn(this.map,e)}}Pc.pr="full_replace";function Rn(n,e){return s4(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}// Copyright 2024 Google LLC* @license
class at{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Sa(this)}getPipelineCollectionGroup(){return Rc(this)}getPipelineCollectionId(){return _4(this)}getPipelineDocuments(){return Bo(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((i,s)=>{i._name!==lp.name&&i._name!==cp.name||(r="keyless"),i._name===y4.name&&r==="exact"&&(r="augmented"),i._name===op.name&&s<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return bn(this)}}function bn(n){const e=n.stages[0];return e instanceof xa||e instanceof Ca||e instanceof xc||e instanceof Cc?e._name:"unknown"}function Sa(n){if(bn(n)==="collection")return n.stages[0].Vr}function Rc(n){if(bn(n)==="collection_group")return n.stages[0].collectionId}function _4(n){switch(bn(n)){case"collection":return fe.fromString(Sa(n)).lastSegment();case"collection_group":return Rc(n);default:return}}function Bo(n){if(bn(n)==="documents")return n.stages[0].dr}// Copyright 2024 Google LLC* @license
class T{constructor(e,t){this.type=e,this.value=t}static vr(){return new T("ERROR",void 0)}static Sr(){return new T("UNSET",void 0)}static Dr(){return new T("NULL",xr)}static newValue(e){return _t(e)?new T("NULL",xr):function(r){return!!r&&"booleanValue"in r}(e)?new T("BOOLEAN",e):Ut(e)?new T("INT",e):Hn(e)?new T("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new T("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new T("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new T("BYTES",e):e.referenceValue?new T("REFERENCE",e):e.geoPointValue?new T("GEO_POINT",e):Sr(e)?new T("ARRAY",e):Hs(e)?new T("VECTOR",e):Wn(e)?new T("MAP",e):new T("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function _i(n){if(!n.Cr())return n.value}function up(n){return n instanceof Pn?n._expr:n}function X(n){if((n=up(n))instanceof Qi)return new v4(n);if(n instanceof Vr)return new w4(n);if(n instanceof ci)return new E4(n);if(n instanceof O){if(n.name==="add")return new I4(n);if(n.name==="subtract")return new A4(n);if(n.name==="multiply")return new x4(n);if(n.name==="divide")return new C4(n);if(n.name==="mod")return new S4(n);if(n.name==="and")return new k4(n);if(n.name==="equal")return new B4(n);if(n.name==="not_equal")return new $4(n);if(n.name==="less_than")return new q4(n);if(n.name==="less_than_or_equal")return new j4(n);if(n.name==="greater_than")return new H4(n);if(n.name==="greater_than_or_equal")return new G4(n);if(n.name==="array_concat")return new W4(n);if(n.name==="array_reverse")return new K4(n);if(n.name==="array_contains")return new Y4(n);if(n.name==="array_contains_all")return new Q4(n);if(n.name==="array_contains_any")return new X4(n);if(n.name==="array_length")return new J4(n);if(n.name==="array_element")return new Z4(n);if(n.name==="equal_any")return new hp(n);if(n.name==="not_equal_any")return new R4(n);if(n.name==="is_nan")return new L4(n);if(n.name==="is_not_nan")return new O4(n);if(n.name==="is_null")return new N4(n);if(n.name==="is_not_null")return new D4(n);if(n.name==="is_error")return new V4(n);if(n.name==="exists")return new M4(n);if(n.name==="not")return new ka(n);if(n.name==="or")return new P4(n);if(n.name==="xor")return new Lc(n);if(n.name==="conditional")return new F4(n);if(n.name==="maximum")return new U4(n);if(n.name==="minimum")return new z4(n);if(n.name==="reverse")return new e3(n);if(n.name==="replace_first")return new t3(n);if(n.name==="replace_all")return new n3(n);if(n.name==="char_length")return new r3(n);if(n.name==="byte_length")return new i3(n);if(n.name==="like")return new s3(n);if(n.name==="regex_contains")return new a3(n);if(n.name==="regex_match")return new o3(n);if(n.name==="string_contains")return new c3(n);if(n.name==="starts_with")return new l3(n);if(n.name==="ends_with")return new u3(n);if(n.name==="to_lower")return new h3(n);if(n.name==="to_upper")return new d3(n);if(n.name==="trim")return new p3(n);if(n.name==="string_concat")return new f3(n);if(n.name==="map_get")return new m3(n);if(n.name==="cosine_distance")return new g3(n);if(n.name==="dot_product")return new y3(n);if(n.name==="euclidean_distance")return new _3(n);if(n.name==="vector_length")return new v3(n);if(n.name==="unix_micros_to_timestamp")return new I3(n);if(n.name==="timestamp_to_unix_micros")return new C3(n);if(n.name==="unix_millis_to_timestamp")return new A3(n);if(n.name==="timestamp_to_unix_millis")return new S3(n);if(n.name==="unix_seconds_to_timestamp")return new x3(n);if(n.name==="timestamp_to_unix_seconds")return new k3(n);if(n.name==="timestamp_add")return new P3(n);if(n.name==="timestamp_subtract")return new R3(n)}throw new Error(`Unknown Expr : ${n}`)}class v4{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Ir)return T.newValue({referenceValue:Zs(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return T.newValue({timestampValue:Ss(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return T.newValue({timestampValue:Ss(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?_a(r)?T.newValue(function(s,a){if(s.serverTimestampBehavior==="estimate")return{timestampValue:Ss(s.serializer,ee.fromTimestamp(Ar(a)))};if(s.serverTimestampBehavior==="previous"){const c=Gi(a);if(c)return c}return{nullValue:"NULL_VALUE"}}(e,r)):T.newValue(r):T.Sr()}}class w4{constructor(e){this.expr=e}evaluate(e,t){return T.newValue(this.expr._getValue())}}class E4{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.Rr.map(i=>X(i).evaluate(e,t));return r.some(i=>i.Cr())?T.vr():T.newValue({arrayValue:{values:r.map(i=>i.value)}})}}function je(n){return Hn(n)?Number(n.doubleValue):Number(n.integerValue)}function Ht(n){return BigInt(n.integerValue)}const b4=BigInt("0x7fffffffffffffff"),T4=-BigInt("0x8000000000000000");class Xi{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length>=2,24778);const r=X(this.expr.params[0]).evaluate(e,t),i=X(this.expr.params[1]).evaluate(e,t);let s=this.Or(r,i);for(const a of this.expr.params.slice(2)){const c=X(a).evaluate(e,t);s=this.Or(s,c)}return s}Or(e,t){if(e.Cr()||t.Cr())return T.vr();if(e.Fr()||t.Fr())return T.Dr();const r=e.value,i=t.value;if(!Hn(r)&&!Ut(r)||!Hn(i)&&!Ut(i))return T.vr();if(Hn(r)||Hn(i)){const s=this.Mr(r,i);return s?T.newValue(s):T.vr()}if(Ut(r)&&Ut(i)){const s=this.Nr(r,i);return s===void 0?T.vr():typeof s=="number"?T.newValue({doubleValue:s}):s<T4||s>b4?T.vr():T.newValue({integerValue:`${s}`})}return T.vr()}}function tn(n,e){return Re(n)!==Re(e)?"TYPE_MISMATCH":dt(n)||dt(e)?"NOT_EQ":_t(n)&&_t(e)?"EQ":_t(n)||_t(e)?"NULL":Sr(n)&&Sr(e)?function(r,i){if(r.values?.length!==i.values?.length)return"NOT_EQ";let s=!1;for(let a=0;a<(r.values?.length??0);a++){const c=r.values[a],l=i.values[a];switch(tn(c,l)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":s=!0;break;default:K(44609,{Lr:c,Br:l})}}return s?"NULL":"EQ"}(n.arrayValue,e.arrayValue):Hs(n)&&Hs(e)||Wn(n)&&Wn(e)?function(r,i){const s=r.fields||{},a=i.fields||{};if(qs(s)!==qs(a))return"NOT_EQ";let c=!1;for(const l in s)if(s.hasOwnProperty(l)){if(a[l]===void 0)return"NOT_EQ";switch(tn(s[l],a[l])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":c=!0}}return c?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,i){return It(r,i,{Te:!1,Ee:!0,he:!0})}(n,e)?"EQ":"NOT_EQ"}class I4 extends Xi{Nr(e,t){return Ht(e)+Ht(t)}Mr(e,t){return{doubleValue:je(e)+je(t)}}}class A4 extends Xi{constructor(e){super(e),this.expr=e}Nr(e,t){return Ht(e)-Ht(t)}Mr(e,t){return{doubleValue:je(e)-je(t)}}}class x4 extends Xi{constructor(e){super(e),this.expr=e}Nr(e,t){return Ht(e)*Ht(t)}Mr(e,t){return{doubleValue:je(e)*je(t)}}}class C4 extends Xi{constructor(e){super(e),this.expr=e}Nr(e,t){const r=Ht(t);if(r!==BigInt(0))return Ht(e)/r}Mr(e,t){const r=je(t);return r===0?{doubleValue:Ai(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:je(e)/r}}}class S4 extends Xi{constructor(e){super(e),this.expr=e}Nr(e,t){const r=Ht(t);if(r!==BigInt(0))return Ht(e)%r}Mr(e,t){const r=je(t);if(r!==0)return{doubleValue:je(e)%r}}}class k4{constructor(e){this.expr=e}evaluate(e,t){let r=!1,i=!1;for(const s of this.expr.params){const a=X(s).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!a.value?.booleanValue)return T.newValue(Be);break;case"NULL":i=!0;break;default:r=!0}}return r?T.vr():i?T.Dr():T.newValue(ut)}}class ka{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,9634);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return T.newValue({booleanValue:!r.value?.booleanValue});case"NULL":return T.Dr();default:return T.vr()}}}class P4{constructor(e){this.expr=e}evaluate(e,t){let r=!1,i=!1;for(const s of this.expr.params){const a=X(s).evaluate(e,t);switch(a.type){case"BOOLEAN":if(a.value?.booleanValue)return T.newValue(ut);break;case"NULL":i=!0;break;default:r=!0}}return r?T.vr():i?T.Dr():T.newValue(Be)}}class Lc{constructor(e){this.expr=e}evaluate(e,t){let r=!1,i=!1;for(const s of this.expr.params){const a=X(s).evaluate(e,t);switch(a.type){case"BOOLEAN":r=Lc.xor(r,!!a.value?.booleanValue);break;case"NULL":i=!0;break;default:return T.vr()}}return i?T.Dr():T.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class hp{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===2,55094);let r=!1;const i=X(this.expr.params[0]).evaluate(e,t);switch(i.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return T.vr()}const s=X(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();for(const a of s.value?.arrayValue?.values??[])switch(_t(i.value)&&_t(a)?"EQ":tn(i.value,a)){case"EQ":return T.newValue(ut);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:K(44608,{value:i.value,candidate:a})}return r?T.Dr():T.newValue(Be)}}class R4{constructor(e){this.expr=e}evaluate(e,t){return new ka(new O("not",[new O("equal_any",this.expr.params)])).evaluate(e,t)}}class L4{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,23322);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return T.newValue(Be);case"DOUBLE":return T.newValue({booleanValue:isNaN(je(r.value))});case"NULL":return T.Dr();default:return T.vr()}}}class O4{constructor(e){this.expr=e}evaluate(e,t){return G(this.expr.params.length===1,50406),new ka(new O("not",[new O("is_nan",this.expr.params)])).evaluate(e,t)}}class N4{constructor(e){this.expr=e}evaluate(e,t){switch(G(this.expr.params.length===1,23123),X(this.expr.params[0]).evaluate(e,t).type){case"NULL":return T.newValue(ut);case"UNSET":case"ERROR":return T.vr();default:return T.newValue(Be)}}}class D4{constructor(e){this.expr=e}evaluate(e,t){return G(this.expr.params.length===1,23167),new ka(new O("not",[new O("is_null",this.expr.params)])).evaluate(e,t)}}class V4{constructor(e){this.expr=e}evaluate(e,t){return G(this.expr.params.length===1,5228),X(this.expr.params[0]).evaluate(e,t).type==="ERROR"?T.newValue(ut):T.newValue(Be)}}class M4{constructor(e){this.expr=e}evaluate(e,t){switch(G(this.expr.params.length===1,6877),X(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return T.vr();case"UNSET":return T.newValue(Be);default:return T.newValue(ut)}}}class F4{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===3,11706);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return r.value?.booleanValue?X(this.expr.params[1]).evaluate(e,t):X(this.expr.params[2]).evaluate(e,t);case"NULL":return X(this.expr.params[2]).evaluate(e,t);default:return T.vr()}}}class U4{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(s=>X(s).evaluate(e,t));let i;for(const s of r)switch(s.type){case"ERROR":case"UNSET":case"NULL":continue;default:i=i===void 0||ht(s.value,i.value)>0?s:i}return i===void 0?T.Dr():i}}class z4{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(s=>X(s).evaluate(e,t));let i;for(const s of r)switch(s.type){case"ERROR":case"UNSET":case"NULL":continue;default:i=i===void 0||ht(s.value,i.value)<0?s:i}return i===void 0?T.Dr():i}}class Mr{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return T.vr()}const i=X(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ERROR":case"UNSET":return T.vr()}return this.Ur(r,i)}}class B4 extends Mr{constructor(e){super(e),this.expr=e}Ur(e,t){if(e.Fr()&&t.Fr())return T.newValue(ut);if(e.Fr()||t.Fr()||dt(e.value)||dt(t.value)||Re(e.value)!==Re(t.value))return T.newValue(Be);switch(tn(e.value,t.value)){case"EQ":return T.newValue(ut);case"NOT_EQ":return T.newValue(Be);case"NULL":return T.Dr();default:K(44615,{left:e,right:t})}}}class $4 extends Mr{constructor(e){super(e),this.expr=e}Ur(e,t){switch(tn(e.value,t.value)){case"EQ":return T.newValue(Be);case"NOT_EQ":case"TYPE_MISMATCH":return T.newValue(ut);case"NULL":return T.Dr();default:K(44614,{left:e,right:t})}}}class q4 extends Mr{constructor(e){super(e),this.expr=e}Ur(e,t){return Re(e.value)!==Re(t.value)||dt(e.value)||dt(t.value)?T.newValue(Be):T.newValue({booleanValue:ht(e.value,t.value)<0})}}class j4 extends Mr{constructor(e){super(e),this.expr=e}Ur(e,t){return Re(e.value)!==Re(t.value)||dt(e.value)||dt(t.value)?T.newValue(Be):tn(e.value,t.value)==="EQ"?T.newValue(ut):T.newValue({booleanValue:ht(e.value,t.value)<0})}}class H4 extends Mr{constructor(e){super(e),this.expr=e}Ur(e,t){return Re(e.value)!==Re(t.value)||dt(e.value)||dt(t.value)?T.newValue(Be):T.newValue({booleanValue:ht(e.value,t.value)>0})}}class G4 extends Mr{constructor(e){super(e),this.expr=e}Ur(e,t){return Re(e.value)!==Re(t.value)||dt(e.value)||dt(t.value)?T.newValue(Be):tn(e.value,t.value)==="EQ"?T.newValue(ut):T.newValue({booleanValue:ht(e.value,t.value)>0})}}class W4{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class K4{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,216);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"ARRAY":{const i=r.value.arrayValue?.values??[];return T.newValue({arrayValue:{values:[...i].reverse()}})}default:return T.vr()}}}class Y4{constructor(e){this.expr=e}evaluate(e,t){return G(this.expr.params.length===2,52884),new hp(new O("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class Q4{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===2,1392);let r=!1;const i=X(this.expr.params[0]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}const s=X(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const a=s.value?.arrayValue?.values??[],c=i.value?.arrayValue?.values??[];for(const l of a){let h=!1;r=!1;for(const p of c){switch(_t(l)&&_t(p)?"EQ":tn(l,p)){case"EQ":h=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:K(44613,{value:p,search:l})}if(h)break}if(!h)return T.newValue(Be)}return T.newValue(ut)}}class X4{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===2,2680);let r=!1;const i=X(this.expr.params[0]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}const s=X(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const a=s.value?.arrayValue?.values??[],c=i.value?.arrayValue?.values??[];for(const l of c)for(const h of a)switch(_t(l)&&_t(h)?"EQ":tn(l,h)){case"EQ":return T.newValue(ut);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:K(44608,{value:l,search:h})}return r?T.Dr():T.newValue(Be)}}class J4{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,38605);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"ARRAY":return T.newValue({integerValue:`${r.value?.arrayValue?.values?.length??0}`});default:return T.vr()}}}class Z4{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class e3{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,1508);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"BYTES":{const i=r.value?.bytesValue;if(typeof i=="string"){const s=Pe.fromBase64String(i).toUint8Array();return s.reverse(),T.newValue({bytesValue:Pe.fromUint8Array(s).toBase64()})}return T.newValue({bytesValue:new Uint8Array(i).reverse()})}case"STRING":{const i=r.value?.stringValue,s=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(i),a=Array.from(s,c=>c.segment).reverse();return T.newValue({stringValue:a.join("")})}default:return T.vr()}}}class t3{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class n3{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class r3{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,19400);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"STRING":{const i=function(a){let c=0;for(let l=0;l<a.length;l++){const h=a.codePointAt(l);if(h===void 0)return;if(h<=65535)if(h>=55296&&h<=57343)if(h<=56319){const p=a.codePointAt(l+1);p!==void 0&&p>=56320&&p<=57343?(c+=1,l++):c+=1}else c+=1;else c+=1;else{if(!(h<=1114111))return;c+=1,l++}}return c}(r.value.stringValue);return i===void 0?T.vr():T.newValue({integerValue:i})}default:return T.vr()}}}class i3{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,8486);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const i=r.value?.bytesValue;return typeof i=="string"?T.newValue({integerValue:Pe.fromBase64String(i).toUint8Array().length}):T.newValue({integerValue:new Uint8Array(i).length})}case"STRING":{const i=function(a){let c=0;for(let l=0;l<a.length;l++){const h=a.codePointAt(l);if(h===void 0)return;if(h>=55296&&h<=57343){if(!(h<=56319))return;{const p=a.codePointAt(l+1);if(p===void 0||!(p>=56320&&p<=57343))return;c+=4,l++}}else if(h<=127)c+=1;else if(h<=2047)c+=2;else if(h<=65535)c+=3;else{if(!(h<=1114111))return;c+=4,l++}}return c}(r.value?.stringValue);return i===void 0?T.vr():T.newValue({integerValue:i})}case"NULL":return T.Dr();default:return T.vr()}}}class Fr{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const i=X(this.expr.params[0]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return T.vr()}const s=X(this.expr.params[1]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return T.vr()}return r?T.Dr():this.kr(i.value?.stringValue,s.value?.stringValue)}}class s3 extends Fr{kr(e,t){try{const r=function(a){let c="";for(let l=0;l<a.length;l++){const h=a.charAt(l);switch(h){case"_":c+=".";break;case"%":c+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":c+="\\"+h;break;default:c+=h}}return"^"+c+"$"}(t),i=Et.compile(r);return T.newValue({booleanValue:i.matches(e)})}catch(r){return Ot(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),T.vr()}}}class a3 extends Fr{kr(e,t){try{const r=Et.compile(t);return T.newValue({booleanValue:r.matcher(e).find()})}catch{return Ot(`Invalid regex pattern found in regex_contains: ${t}, returning error`),T.vr()}}}class o3 extends Fr{kr(e,t){try{return T.newValue({booleanValue:Et.compile(t).matches(e)})}catch{return Ot(`Invalid regex pattern found in regex_match: ${t}, returning error`),T.vr()}}}class c3 extends Fr{kr(e,t){return T.newValue({booleanValue:e.includes(t)})}}class l3 extends Fr{kr(e,t){return T.newValue({booleanValue:e.startsWith(t)})}}class u3 extends Fr{kr(e,t){return T.newValue({booleanValue:e.endsWith(t)})}}class h3{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,29079);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return T.newValue({stringValue:r.value?.stringValue?.toLowerCase()});case"NULL":return T.Dr();default:return T.vr()}}}class d3{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,60487);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return T.newValue({stringValue:r.value?.stringValue?.toUpperCase()});case"NULL":return T.Dr();default:return T.vr()}}}class p3{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,28544);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return T.newValue({stringValue:r.value?.stringValue?.trim()});case"NULL":return T.Dr();default:return T.vr()}}}class f3{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(a=>X(a).evaluate(e,t));let i="",s=!1;for(const a of r)switch(a.type){case"STRING":i+=a.value.stringValue;break;case"NULL":s=!0;break;default:return T.vr()}return s?T.Dr():T.newValue({stringValue:i})}}class m3{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===2,4483);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return T.Sr();case"MAP":break;default:return T.vr()}const i=X(this.expr.params[1]).evaluate(e,t);if(i.type!=="STRING")return T.vr();const s=r.value?.mapValue?.fields?.[i.value?.stringValue];return s===void 0?T.Sr():T.newValue(s)}}class Oc{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const i=X(this.expr.params[0]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return T.vr()}const s=X(this.expr.params[1]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const a=No(i.value),c=No(s.value);if(a===void 0||c===void 0||a.values?.length!==c.values?.length)return T.vr();const l=this.qr(a,c);return l===void 0||isNaN(l)?T.vr():T.newValue({doubleValue:l})}}class g3 extends Oc{qr(e,t){const r=e?.values??[],i=t?.values??[];if(r.length===0)return;let s=0,a=0,c=0;for(let h=0;h<r.length;h++){if(!kn(r[h])||!kn(i[h]))return;const p=je(r[h]),m=je(i[h]);s+=p*m,a+=p*p,c+=m*m}const l=Math.sqrt(a)*Math.sqrt(c);if(l!==0)return 1-Math.max(-1,Math.min(1,s/l))}}class y3 extends Oc{qr(e,t){const r=e?.values??[],i=t?.values??[];if(r.length===0)return 0;let s=0;for(let a=0;a<r.length;a++){if(!kn(r[a])||!kn(i[a]))return;s+=je(r[a])*je(i[a])}return s}}class _3 extends Oc{qr(e,t){const r=e?.values??[],i=t?.values??[];if(r.length===0)return 0;let s=0;for(let a=0;a<r.length;a++){if(!kn(r[a])||!kn(i[a]))return;const c=je(r[a]),l=je(i[a]);s+=Math.pow(c-l,2)}return Math.sqrt(s)}}class v3{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,39044);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=No(r.value);return T.newValue({integerValue:i?.values?.length??0})}case"NULL":return T.Dr();default:return T.vr()}}}const Mi=BigInt(-62135596800),Fi=BigInt(253402300799),ta=BigInt(1e3),Tn=BigInt(1e6),w3=Mi*ta,E3=Fi*ta+BigInt(999),b3=Mi*Tn,T3=Fi*Tn+BigInt(999999);function Nc(n){return n>=b3&&n<=T3}function dp(n){return n>=Mi&&n<=Fi}function Ui(n,e){const t=BigInt(n);return!(t<Mi||t>Fi)&&!(e<0||e>=1e9)&&(t!==Mi||e===0)&&!(t===Fi&&e>999999999)}function pp(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function Dc(n){return BigInt(n.seconds)*Tn+BigInt(Math.trunc(n.nanoseconds/1e3))}class Vc{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return T.Dr();default:return T.vr()}}}class I3 extends Vc{toTimestamp(e){if(!Nc(e))return T.vr();let t=Number(e/Tn),r=Number(e%Tn*BigInt(1e3));const i=pp(t,r);return t=i.seconds,r=i.nanos,Ui(t,r)?T.newValue({timestampValue:{seconds:t,nanos:r}}):T.vr()}}class A3 extends Vc{toTimestamp(e){if(!function(a){return a>=w3&&a<=E3}(e))return T.vr();let t=Number(e/ta),r=Number(e%ta*BigInt(1e6));const i=pp(t,r);return t=i.seconds,r=i.nanos,Ui(t,r)?T.newValue({timestampValue:{seconds:t,nanos:r}}):T.vr()}}class x3 extends Vc{toTimestamp(e){if(!dp(e))return T.vr();const t=Number(e);return T.newValue({timestampValue:{seconds:t,nanos:0}})}}class Mc{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=X(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return T.Dr();default:return T.vr()}const i=vc(r.value.timestampValue);return Ui(i.seconds,i.nanoseconds)?this.$r(i):T.vr()}}class C3 extends Mc{$r(e){const t=Dc(e);return Nc(t)?T.newValue({integerValue:`${t.toString()}`}):T.vr()}}class S3 extends Mc{$r(e){const t=Dc(e),r=t/BigInt(1e3),i=t%BigInt(1e3);return r>BigInt(0)||i===BigInt(0)?T.newValue({integerValue:r.toString()}):T.newValue({integerValue:(r-BigInt(1)).toString()})}}class k3 extends Mc{$r(e){const t=BigInt(e.seconds);return dp(t)?T.newValue({integerValue:t.toString()}):T.vr()}}class fp{constructor(e){this.expr=e}evaluate(e,t){G(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const i=X(this.expr.params[0]).evaluate(e,t);switch(i.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return T.vr()}const s=X(this.expr.params[1]).evaluate(e,t);let a;switch(s.type){case"STRING":if(a=function(le){switch(le){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(s.value.stringValue),a===void 0)return T.vr();break;case"NULL":r=!0;break;default:return T.vr()}const c=X(this.expr.params[2]).evaluate(e,t);switch(c.type){case"INT":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const l=BigInt(c.value.integerValue);let h;try{switch(a){case"microsecond":h=l;break;case"millisecond":h=l*BigInt(1e3);break;case"second":h=l*BigInt(1e6);break;case"minute":h=l*BigInt(6e7);break;case"hour":h=l*BigInt(36e8);break;case"day":h=l*BigInt(864e8);break;default:return T.vr()}if(a!=="microsecond"&&l!==BigInt(0)&&h/l!==BigInt(this.Kr(a)))return T.vr()}catch(J){return Ot(`Error during timestamp arithmetic: ${J}`),T.vr()}const p=vc(i.value.timestampValue);if(!Ui(p.seconds,p.nanoseconds))return T.vr();const m=Dc(p),A=this.Wr(m,h);if(!Nc(A))return T.vr();const R=Number(A/Tn),L=A%Tn,M=Number((L<0?L+Tn:L)*BigInt(1e3)),B=L<0?R-1:R;return Ui(B,M)?T.newValue({timestampValue:{seconds:B,nanos:M}}):T.vr()}Kr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class P3 extends fp{Wr(e,t){return e+t}}class R3 extends fp{Wr(e,t){return e-t}}function zi(n){if((n=up(n))instanceof Qi)return`fld(${n.fieldName})`;if(n instanceof Vr)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ve?`ref(${t.path})`:t instanceof ct?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof O)return`fn(${n.name},[${n.params.map(zi).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.Rr.map(zi).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function L3(n){if(n instanceof op)return`${n._name}(${vs(n.fields)})`;if(n instanceof cp){let e=`${n._name}(${vs(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${vs(n.groups)})`),e}if(n instanceof lp)return`${n._name}(${vs(n.groups)})`;if(n instanceof xa)return`${n._name}(${n.Vr})`;if(n instanceof Ca)return`${n._name}(${n.collectionId})`;if(n instanceof xc)return`${n._name}()`;if(n instanceof Cc)return`${n._name}(${n.dr.sort()})`;if(n instanceof Sc)return`${n._name}(${zi(n.condition)})`;if(n instanceof Vi)return`${n._name}(${n.limit})`;if(n instanceof kc)return`${n._name}(${function(t){return t.map(r=>`${zi(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function vs(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${zi(t)}`).join(",")}`}function Xt(n){return n.stages.map(e=>L3(e)).join("|")}function mp(n,e){return Xt(n)===Xt(e)}function De(n){return n instanceof at}function L1(n){return De(n)?Xt(n):gi(n)}function gp(n){return De(n)?Xt(n):function(t){return`${Sd(zt(t))}|lt:${t.limitType}`}(n)}function Pa(n,e){return n instanceof at&&e instanceof at?mp(n,e):!(n instanceof at&&!(e instanceof at)||!(n instanceof at)&&e instanceof at)&&r7(n,e)}function yp(n){return $n(n)?Xt(n):Sd(n)}function _p(n,e){return n instanceof at&&e instanceof at?mp(n,e):!(n instanceof at&&!(e instanceof at)||!(n instanceof at)&&e instanceof at)&&kd(n,e)}/**
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
 */class O3{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&zg(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=fi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=fi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Nd();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const l=vd(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&Tr(this.mutations,e.mutations,(t,r)=>u1(t,r))&&Tr(this.baseMutations,e.baseMutations,(t,r)=>u1(t,r))}}class Fc{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){G(e.mutations.length===r.length,58842,{Qr:e.mutations.length,Gr:r.length});let i=function(){return c7}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Fc(e,t,r,i)}}/**
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
 */class N3{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Yt{constructor(e,t,r,i,s=ee.min(),a=ee.min(),c=Pe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Yt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class D3{constructor(e){this.zr=e}}function V3(n){const e=A7({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vo(e,e.limit,"L"):e}/**
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
 */class M3{constructor(){this.Hi=new F3}addToCollectionParentIndex(e,t){return this.Hi.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Hi.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(xn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(xn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class F3{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ke(fe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ke(fe.comparator)).toArray()}}/**
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
 */class Ln{constructor(e){this.Ds=e}next(){return this.Ds+=2,this.Ds}static xs(){return new Ln(0)}static Cs(){return new Ln(-1)}}// Copyright 2024 Google LLC* @license
function vp(n,e){let t=e;for(const r of n.stages)t=z3({serializer:n.serializer,serverTimestampBehavior:n.listenOptions?.serverTimestampBehavior},r,t);return t}function Ra(n,e){return vp(n,[e]).length>0}function U3(n,e){return De(n)?Ra(n,e):Ta(n,e)}function z3(n,e,t){if(e instanceof xa)return function(i,s,a){return a.filter(c=>c.isFoundDocument()&&`/${c.key.getCollectionPath().canonicalString()}`===s.Vr)}(0,e,t);if(e instanceof Sc)return function(i,s,a){return a.filter(c=>{const l=_i(X(s.condition).evaluate(i,c));return l!==void 0&&It(l,ut)})}(n,e,t);if(e instanceof Ca)return function(i,s,a){return a.filter(c=>c.isFoundDocument()&&c.key.getCollectionPath().lastSegment()===s.collectionId)}(0,e,t);if(e instanceof xc)return function(i,s,a){return a.filter(c=>c.isFoundDocument())}(0,0,t);if(e instanceof Cc)return function(i,s,a){return a.filter(c=>c.isFoundDocument()&&s.mr.has(c.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof Vi)return function(i,s,a){return a.slice(0,s.limit)}(0,e,t);if(e instanceof kc)return function(i,s,a){const c=s.orderings.map(l=>({ks:X(l.expr),direction:l.direction}));return[...a].sort((l,h)=>{for(const{ks:p,direction:m}of c){const A=_i(p.evaluate(i,l)),R=_i(p.evaluate(i,h)),L=ht(A??xr,R??xr);if(L!==0)return m==="ascending"?L:-L}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function $o(n){const e=function(r){for(let i=r.stages.length-1;i>=0;i--){const s=r.stages[i];if(s instanceof kc)return s.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const i of e){const s=_i(X(i.expr).evaluate({serializer:n.serializer},t)),a=_i(X(i.expr).evaluate({serializer:n.serializer},r)),c=ht(s||xr,a||xr);if(c!==0)return i.direction==="ascending"?c:-c}return 0}}function yo(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Vi)return{limit:t.limit}}}/**
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
 */class B3{constructor(){this.changes=new rr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $3{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class q3{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&fi(r.mutation,i,Pt.empty(),_e.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=se()){const i=mn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=hr();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=mn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,se()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=ot();const a=yi(),c=function(){return yi()}();return t.forEach((l,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof nr)?s=s.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),fi(p.mutation,h,p.mutation.getFieldMask(),_e.now())):a.set(h.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,p)=>a.set(h,p)),t.forEach((h,p)=>c.set(h,new $3(p,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=yi();let i=new we((a,c)=>a-c),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let p=r.get(l)||Pt.empty();p=c.applyToLocalView(h,p),r.set(l,p);const m=(i.get(c.batchId)||se()).add(l);i=i.insert(c.batchId,m)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,p=l.value,m=Nd();p.forEach(A=>{if(!s.has(A)){const R=vd(t.get(A),r.get(A));R!==null&&m.set(A,R),s=s.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return De(t)?this.getDocumentsMatchingPipeline(e,t,r,i):e7(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):t7(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(mn());let c=Ii,l=s;return a.next(h=>N.forEach(h,(p,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(p)?N.resolve():this.remoteDocumentCache.getEntry(e,p).next(A=>{l=l.insert(p,A)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,se())).next(p=>({batchId:c,changes:Od(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(r=>{let i=hr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=hr();return this.indexManager.getCollectionParents(e,s).next(c=>N.forEach(c,l=>{const h=function(m,A){return new ba(A,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((m,A)=>{a=a.insert(m,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>this.retrieveMatchingLocalDocuments(s,a,c=>Ta(t,c)))}getDocumentsMatchingPipeline(e,t,r,i){if(bn(t)==="collection_group"){const s=Rc(t);let a=hr();return this.indexManager.getCollectionParents(e,s).next(c=>N.forEach(c,l=>{const h=function(m,A){const R=m.stages.map(L=>L instanceof Ca?new xa(A.canonicalString(),{}):L);return new at(m.serializer,R)}(t,l.child(s));return this.getDocumentsMatchingPipeline(e,h,r,i).next(p=>{p.forEach((m,A)=>{a=a.insert(m,A)})})}).next(()=>a))}{let s;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(a=>{switch(s=a,bn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i);case"documents":let c=se();for(const l of Bo(t))c=c.add(Y.fromPath(l));return this.remoteDocumentCache.getEntries(e,c);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new H("invalid-argument",`Invalid pipeline source to execute offline: ${Xt(t)}`)}}).next(a=>this.retrieveMatchingLocalDocuments(s,a,c=>Ra(t,c)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((s,a)=>{const c=a.getKey();t.get(c)===null&&(t=t.insert(c,Qe.newInvalidDocument(c)))});let i=hr();return t.forEach((s,a)=>{const c=e.get(s);c!==void 0&&fi(c.mutation,a,Pt.empty(),_e.now()),r(a)&&(i=i.insert(s,a))}),i}getOverlaysForPipeline(e,t,r){switch(bn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,fe.fromString(Sa(t)),r);case"collection_group":throw new H("invalid-argument",`Unexpected collection group pipeline: ${Xt(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Bo(t).map(i=>Y.fromPath(i)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new H("invalid-argument",`Failed to get overlays for pipeline: ${Xt(t)}`)}}}/**
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
 */class j3{constructor(e){this.serializer=e,this.Hs=new Map,this.Js=new Map}getBundleMetadata(e,t){return N.resolve(this.Hs.get(t))}saveBundleMetadata(e,t){return this.Hs.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Bt(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Js.get(t))}saveNamedQuery(e,t){return this.Js.set(t.name,function(i){return{name:i.name,query:V3(i.bundledQuery),readTime:Bt(i.readTime)}}(t)),N.resolve()}}/**
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
 */class H3{constructor(){this.overlays=new we(Y.comparator),this.Ys=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=mn();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}getAllOverlays(e,t){const r=mn();return this.overlays.forEach((i,s)=>{s.largestBatchId>t&&r.set(i,s)}),N.resolve(r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Hr(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ys.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ys.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const i=mn(),s=t.length+1,a=new Y(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new we((h,p)=>h-p);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=mn(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const c=mn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,p)=>c.set(h,p)),!(c.size()>=i)););return N.resolve(c)}Hr(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ys.get(i.largestBatchId).delete(r.key);this.Ys.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new N3(t,r));let s=this.Ys.get(t);s===void 0&&(s=se(),this.Ys.set(t,s)),this.Ys.set(t,s.add(r.key))}}/**
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
 */class G3{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class Uc{constructor(){this.Zs=new ke(ze.Xs),this.e_=new ke(ze.t_)}isEmpty(){return this.Zs.isEmpty()}addReference(e,t){const r=new ze(e,t);this.Zs=this.Zs.add(r),this.e_=this.e_.add(r)}n_(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.r_(new ze(e,t))}i_(e,t){e.forEach(r=>this.removeReference(r,t))}s_(e){const t=new Y(new fe([])),r=new ze(t,e),i=new ze(t,e+1),s=[];return this.e_.forEachInRange([r,i],a=>{this.r_(a),s.push(a.key)}),s}__(){this.Zs.forEach(e=>this.r_(e))}r_(e){this.Zs=this.Zs.delete(e),this.e_=this.e_.delete(e)}o_(e){const t=new Y(new fe([])),r=new ze(t,e),i=new ze(t,e+1);let s=se();return this.e_.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new ze(e,0),r=this.Zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,t){this.key=e,this.a_=t}static Xs(e,t){return Y.comparator(e.key,t.key)||ae(e.a_,t.a_)}static t_(e,t){return ae(e.a_,t.a_)||Y.comparator(e.key,t.key)}}/**
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
 */class W3{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gs=1,this.u_=new ke(ze.Xs)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.gs;this.gs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new O3(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.u_=this.u_.add(new ze(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.c_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.l_(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?dc:this.gs-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ze(t,0),i=new ze(t,Number.POSITIVE_INFINITY),s=[];return this.u_.forEachInRange([r,i],a=>{const c=this.c_(a.a_);s.push(c)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ke(ae);return t.forEach(i=>{const s=new ze(i,0),a=new ze(i,Number.POSITIVE_INFINITY);this.u_.forEachInRange([s,a],c=>{r=r.add(c.a_)})}),N.resolve(this.E_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const a=new ze(new Y(s),0);let c=new ke(ae);return this.u_.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(l.a_)),!0)},a),N.resolve(this.E_(c))}E_(e){const t=[];return e.forEach(r=>{const i=this.c_(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){G(this.h_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.u_;return N.forEach(t.mutations,i=>{const s=new ze(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.u_=r})}bs(e){}containsKey(e,t){const r=new ze(t,0),i=this.u_.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}h_(e,t){return this.l_(e)}l_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}c_(e){const t=this.l_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class K3{constructor(e){this.T_=e,this.docs=function(){return new we(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.T_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Qe.newInvalidDocument(t))}getEntries(e,t){let r=ot();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Qe.newInvalidDocument(i))}),N.resolve(r)}getAllEntries(e){let t=ot();return this.docs.forEach((r,i)=>{t=t.insert(r,i.document)}),N.resolve(t)}getDocumentsMatchingQuery(e,t,r,i){let s,a;De(t)?(s=fe.fromString(Sa(t)),a=p=>Ra(t,p)):(s=t.path,a=p=>Ta(t,p));let c=ot();const l=new Y(s.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:p,value:{document:m}}=h.getNext();if(!s.isPrefixOf(p.path))break;p.path.length>s.length+1||bg(Eg(m),r)<=0||(i.has(m.key)||a(m))&&(c=c.insert(m.key,m.mutableCopy()))}return N.resolve(c)}getAllFromCollectionGroup(e,t,r,i){K(9500)}P_(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Y3(this)}getSize(e){return N.resolve(this.size)}}class Y3 extends B3{constructor(e){super(),this.zs=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.zs.addEntry(e,i)):this.zs.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.zs.getEntry(e,t)}getAllFromCache(e,t){return this.zs.getEntries(e,t)}}/**
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
 */class Q3{constructor(e){this.persistence=e,this.R_=new rr(t=>yp(t),_p),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.I_=0,this.A_=new Uc,this.targetCount=0,this.V_=Ln.xs()}forEachTarget(e,t){return this.R_.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.I_)}allocateTargetId(e){return this.highestTargetId=this.V_.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.I_&&(this.I_=t),N.resolve()}Ms(e){this.R_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.V_=new Ln(t),this.highestTargetId=t),e.sequenceNumber>this.I_&&(this.I_=e.sequenceNumber)}addTargetData(e,t){return this.Ms(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.Ms(t),N.resolve()}removeTargetData(e,t){return this.R_.delete(t.target),this.A_.s_(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.R_.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.R_.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.R_.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.A_.n_(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.A_.i_(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.A_.s_(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.A_.o_(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.A_.containsKey(t))}}/**
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
 */class wp{constructor(e,t){this.d_={},this.overlays={},this.f_=new ga(0),this.m_=!1,this.m_=!0,this.p_=new G3,this.referenceDelegate=e(this),this.g_=new Q3(this),this.indexManager=new M3,this.remoteDocumentCache=function(i){return new K3(i)}(r=>this.referenceDelegate.y_(r)),this.serializer=new D3(t),this.w_=new j3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.m_=!1,Promise.resolve()}get started(){return this.m_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new H3,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.d_[e.toKey()];return r||(r=new W3(t,this.referenceDelegate),this.d_[e.toKey()]=r),r}getGlobalsCache(){return this.p_}getTargetCache(){return this.g_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.w_}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const i=new X3(this.f_.next());return this.referenceDelegate.b_(),r(i).next(s=>this.referenceDelegate.v_(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}S_(e,t){return N.or(Object.values(this.d_).map(r=>()=>r.containsKey(e,t)))}}class X3 extends Ig{constructor(e){super(),this.currentSequenceNumber=e}}class zc{constructor(e){this.persistence=e,this.D_=new Uc,this.x_=null}static C_(e){return new zc(e)}get F_(){if(this.x_)return this.x_;throw K(60996)}addReference(e,t,r){return this.D_.addReference(r,t),this.F_.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.D_.removeReference(r,t),this.F_.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.F_.add(t.toString()),N.resolve()}removeTarget(e,t){this.D_.s_(t.targetId).forEach(i=>this.F_.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.F_.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}b_(){this.x_=new Set}v_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.F_,r=>{const i=Y.fromPath(r);return this.O_(e,i).next(s=>{s||t.removeEntry(i,ee.min())})}).next(()=>(this.x_=null,t.apply(e)))}updateLimboDocument(e,t){return this.O_(e,t).next(r=>{r?this.F_.delete(t.toString()):this.F_.add(t.toString())})}y_(e){return 0}O_(e,t){return N.or([()=>N.resolve(this.D_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.S_(e,t)])}}class na{constructor(e,t){this.persistence=e,this.M_=new rr(r=>Sg(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Y7(this,t)}static C_(e,t){return new na(e,t)}b_(){}v_(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}lr(e){const t=this.Ls(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Ls(e){let t=0;return this.Er(e,r=>{t++}).next(()=>t)}Er(e,t){return N.forEach(this.M_,(r,i)=>this.Us(e,r,i).next(s=>s?N.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.P_(e,a=>this.Us(e,a,t).next(c=>{c||(r++,s.removeEntry(a,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.M_.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.M_.set(t,e.currentSequenceNumber),N.resolve()}y_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=As(e.data.value)),t}Us(e,t,r){return N.or([()=>this.persistence.S_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.M_.get(t);return N.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Bc{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.wo=r,this.bo=i}static vo(e,t){let r=se(),i=se();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bc(e,t.fromCache,r,i)}}/**
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
 */function J3(n,e){return Y.comparator(n.key,e.key)}/**
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
 */class Z3{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class e9{constructor(){this.So=!1,this.Do=!1,this.xo=100,this.Co=function(){return B2()?8:Ag(Rt())>0?6:4}()}initialize(e,t){this.Fo=e,this.indexManager=t,this.So=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Oo(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Mo(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Z3;return this.No(e,t,a).next(c=>{if(s.result=c,this.Do)return this.Lo(e,t,a,c.size)})}).next(()=>s.result)}Lo(e,t,r,i){return De(t)?N.resolve():r.documentReadCount<this.xo?(ur()<=ce.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",gi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.xo,"documents"),N.resolve()):(ur()<=ce.DEBUG&&q("QueryEngine","Query:",gi(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Co*i?(ur()<=ce.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",gi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,zt(t))):N.resolve())}Oo(e,t){if(De(t))return N.resolve(null);let r=t;if(g1(r))return N.resolve(null);let i=zt(r);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(r.limit!==null&&s===1&&(r=Vo(r,null,"F"),i=zt(r)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{const c=se(...a);return this.Fo.getDocuments(e,c).next(l=>this.indexManager.getMinOffset(e,i).next(h=>{const p=this.Bo(r,l);return this.Uo(r,p,c,h.readTime)?this.Oo(e,Vo(r,null,"F")):this.ko(e,p,r,h)}))})))}Mo(e,t,r,i){return(De(t)?function(a){for(const c of a.stages){if(c instanceof Vi||c instanceof R1)return!1;if(c instanceof Sc){if(c.condition instanceof ip&&c.condition._expr.name==="exists"&&c.condition._expr.params[0]instanceof Qi&&c.condition._expr.params[0].fieldName===Ir)continue;return!1}}return!0}(t):g1(t))||i.isEqual(ee.min())?N.resolve(null):this.Fo.getDocuments(e,r).next(s=>{const a=this.Bo(t,s);return this.Uo(t,a,r,i)?N.resolve(null):(ur()<=ce.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),L1(t)),this.ko(e,a,t,wg(i,Ii)).next(c=>c))})}Bo(e,t){let r,i;return De(e)?(r=new ke(J3),i=s=>Ra(e,s)):(r=new ke(yc(e)),i=s=>Ta(e,s)),t.forEach((s,a)=>{i(a)&&(r=r.add(a))}),r}Uo(e,t,r,i){if(De(e))return function(c){return c.stages.some(l=>l instanceof Vi||l instanceof R1)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}No(e,t,r){return ur()<=ce.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",L1(t)),this.Fo.getDocumentsMatchingQuery(e,t,xn.min(),r)}ko(e,t,r,i){return this.Fo.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */const $c="LocalStore",t9=3e8;class n9{constructor(e,t,r,i){this.persistence=e,this.qo=t,this.serializer=i,this.$o=new we(ae),this.Ko=new rr(s=>yp(s),_p),this.Wo=new Map,this.Qo=e.getRemoteDocumentCache(),this.g_=e.getTargetCache(),this.w_=e.getBundleCache(),this.Go(r)}Go(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new q3(this.Qo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Qo.setIndexManager(this.indexManager),this.qo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.$o))}}function r9(n,e,t,r){return new n9(n,e,t,r)}async function Ep(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Go(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let l=se();for(const h of i){a.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}for(const h of s){c.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(h=>({zo:h,removedBatchIds:a,addedBatchIds:c}))})})}function i9(n,e){const t=te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Qo.newChangeBuffer({trackRemovals:!0});return function(c,l,h,p){const m=h.batch,A=m.keys();let R=N.resolve();return A.forEach(L=>{R=R.next(()=>p.getEntry(l,L)).next(M=>{const B=h.docVersions.get(L);G(B!==null,48541),M.version.compareTo(B)<0&&(m.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),p.addEntry(M)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=se();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function bp(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.g_.getLastRemoteSnapshotVersion(t))}function s9(n,e){const t=te(n),r=e.snapshotVersion;let i=t.$o;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.Qo.newChangeBuffer({trackRemovals:!0});i=t.$o;const c=[];e.targetChanges.forEach((p,m)=>{const A=i.get(m);if(!A)return;c.push(t.g_.removeMatchingKeys(s,p.removedDocuments,m).next(()=>t.g_.addMatchingKeys(s,p.addedDocuments,m)));let R=A.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?R=R.withResumeToken(Pe.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),i=i.insert(m,R),function(M,B,J){return M.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=t9?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(A,R,p)&&c.push(t.g_.updateTargetData(s,R))});let l=ot(),h=se();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(a9(s,a,e.documentUpdates).next(p=>{l=p.jo,h=p.Ho})),!r.isEqual(ee.min())){const p=t.g_.getLastRemoteSnapshotVersion(s).next(m=>t.g_.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return N.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,h)).next(()=>l)}).then(s=>(t.$o=i,s))}function a9(n,e,t){let r=se(),i=se();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=ot();return t.forEach((c,l)=>{const h=s.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):q($c,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{jo:a,Ho:i}})}function o9(n,e){const t=te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=dc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function c9(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.g_.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.g_.allocateTargetId(r).next(a=>(i=new Yt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.g_.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.$o.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.$o=t.$o.insert(r.targetId,r),t.Ko.set(e,r.targetId)),r})}async function qo(n,e,t){const r=te(n),i=r.$o.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Dr(a))throw a;q($c,`Failed to update sequence numbers for target ${e}: ${a}`)}r.$o=r.$o.remove(e),r.Ko.delete(i.target)}function O1(n,e,t){const r=te(n);let i=ee.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,p){const m=te(l),A=m.Ko.get(p);return A!==void 0?N.resolve(m.$o.get(A)):m.g_.getTargetData(h,p)}(r,a,De(e)?e:zt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.g_.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>r.qo.getDocumentsMatchingQuery(a,e,t?i:ee.min(),t?s:se())).next(c=>(l9(r,c),{documents:c,Jo:s})))}function l9(n,e){e.forEach((t,r)=>{const i=r.key.getCollectionGroup(),s=n.Wo.get(i)||ee.min();r.readTime.compareTo(s)>0&&n.Wo.set(i,r.readTime)})}class N1{constructor(){this.activeTargetIds=h7()}na(e){this.activeTargetIds=this.activeTargetIds.add(e)}ra(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ta(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u9{constructor(){this.Ua=new N1,this.ka={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Ua.na(e),this.ka[e]||"not-current"}updateQueryState(e,t,r){this.ka[e]=t}removeLocalQueryTarget(e){this.Ua.ra(e)}isLocalQueryTarget(e){return this.Ua.activeTargetIds.has(e)}clearQueryState(e){delete this.ka[e]}getAllActiveQueryTargets(){return this.Ua.activeTargetIds}isActiveQueryTarget(e){return this.Ua.activeTargetIds.has(e)}start(){return this.Ua=new N1,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function _o(){return typeof document<"u"?document:null}/**
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
 */class h9{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.qa=0,this.$a=null,this.Ka=!0}Wa(){this.qa===0&&(this.Qa("Unknown"),this.$a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.$a=null,this.Ga("Backend didn't respond within 10 seconds."),this.Qa("Offline"),Promise.resolve())))}za(e){this.state==="Online"?this.Qa("Unknown"):(this.qa++,this.qa>=1&&(this.ja(),this.Ga(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Qa("Offline")))}set(e){this.ja(),this.qa=0,e==="Online"&&(this.Ka=!1),this.Qa(e)}Qa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ga(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ka?(en(t),this.Ka=!1):q("OnlineStateTracker",t)}ja(){this.$a!==null&&(this.$a.cancel(),this.$a=null)}}/**
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
 */const Gt="RemoteStore";class d9{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ha=[],this.Ja=new Map,this.Ya=new Map,this.Za=new Map,this.Xa=new Ln(1e3),this.eu=new Ln(1001),this.tu=new Set,this.nu=[],this.ru=s,this.ru.bt(a=>{r.enqueueAndForget(async()=>{sr(this)&&(q(Gt,"Restarting streams for network reachability change."),await async function(l){const h=te(l);h.tu.add(4),await Ji(h),h.iu.set("Unknown"),h.tu.delete(4),await La(h)}(this))})}),this.iu=new h9(r,i)}}async function La(n){if(sr(n))for(const e of n.nu)await e(!0)}async function Ji(n){for(const e of n.nu)await e(!1)}function jo(n,e){return n.Ya.get(e)||void 0}function Tp(n,e){const t=te(n),r=jo(t,e.targetId);if(r!==void 0&&t.Ja.has(r))return;const i=function(c,l){const h=jo(c,l);h!==void 0&&c.Za.delete(h);const p=function(A,R){return R%2!=0?A.eu.next():A.Xa.next()}(c,l);return c.Ya.set(l,p),c.Za.set(p,l),p}(t,e.targetId);q(Gt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new Yt(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ja.set(i,s),Gc(t)?Hc(t):Ur(t).Fn()&&jc(t,s)}function qc(n,e){const t=te(n),r=Ur(t),i=jo(t,e);q(Gt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),t.Ja.delete(i),t.Ya.delete(e),t.Za.delete(i),r.Fn()&&Ip(t,i),t.Ja.size===0&&(r.Fn()?r.Nn():sr(t)&&t.iu.set("Unknown"))}function jc(n,e){if(n.su.We(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.Za.get(e.targetId);if(t===void 0)return void q(Gt,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Ur(n).jn(e)}function Ip(n,e){n.su.We(e),Ur(n).Hn(e)}function Hc(n){n.su=new f7({getRemoteKeysForTarget:e=>{const t=n.Za.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):se()},dt:e=>n.Ja.get(e)||null,Tt:()=>n.datastore.serializer.databaseId}),Ur(n).start(),n.iu.Wa()}function Gc(n){return sr(n)&&!Ur(n).Cn()&&n.Ja.size>0}function sr(n){return te(n).tu.size===0}function Ap(n){n.su=void 0}async function p9(n){n.iu.set("Online")}async function f9(n){n.Ja.forEach((e,t)=>{jc(n,e)})}async function m9(n,e){Ap(n),Gc(n)?(n.iu.za(e),Hc(n)):n.iu.set("Unknown")}async function g9(n,e,t){if(n.iu.set("Online"),e instanceof Vd&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds){if(i.Ja.has(c)){const l=i.Za.get(c);l!==void 0&&(await i.remoteSyncer.rejectListen(l,a),i.Ya.delete(l),i.Za.delete(c)),i.Ja.delete(c)}i.su.removeTarget(c)}}(n,e)}catch(r){q(Gt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ra(n,r)}else if(e instanceof Cs?n.su.et(e):e instanceof Dd?n.su.ot(e):n.su.rt(e),!t.isEqual(ee.min()))try{const r=await bp(n.localStore);t.compareTo(r)>=0&&await function(s,a){const c=s.su.Rt(a);c.targetChanges.forEach((h,p)=>{if(h.resumeToken.approximateByteSize()>0){const m=s.Ja.get(p);m&&s.Ja.set(p,m.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,p)=>{const m=s.Ja.get(h);if(!m)return;s.Ja.set(h,m.withResumeToken(Pe.EMPTY_BYTE_STRING,m.snapshotVersion)),Ip(s,h);const A=new Yt(m.target,h,p,m.sequenceNumber);jc(s,A)});const l=function(p,m){const A=new Map;m.targetChanges.forEach((L,M)=>{const B=p.Za.get(M);B!==void 0&&A.set(B,L)});let R=new we(ae);return m.targetMismatches.forEach((L,M)=>{const B=p.Za.get(L);B!==void 0&&(R=R.insert(B,M))}),new Ki(m.snapshotVersion,A,R,m.documentUpdates,m.augmentedDocumentUpdates,m.resolvedLimboDocuments)}(s,c);return s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){q(Gt,"Failed to raise snapshot:",r),await ra(n,r)}}async function ra(n,e,t){if(!Dr(e))throw e;n.tu.add(1),await Ji(n),n.iu.set("Offline"),t||(t=()=>bp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(Gt,"Retrying IndexedDB access"),await t(),n.tu.delete(1),await La(n)})}function xp(n,e){return e().catch(t=>ra(n,t,e))}async function Oa(n){const e=te(n),t=On(e);let r=e.Ha.length>0?e.Ha[e.Ha.length-1].batchId:dc;for(;y9(e);)try{const i=await o9(e.localStore,r);if(i===null){e.Ha.length===0&&t.Nn();break}r=i.batchId,_9(e,i)}catch(i){await ra(e,i)}Cp(e)&&Sp(e)}function y9(n){return sr(n)&&n.Ha.length<10}function _9(n,e){n.Ha.push(e);const t=On(n);t.Fn()&&t.Jn&&t.Yn(e.mutations)}function Cp(n){return sr(n)&&!On(n).Cn()&&n.Ha.length>0}function Sp(n){On(n).start()}async function v9(n){On(n).er()}async function w9(n){const e=On(n);for(const t of n.Ha)e.Yn(t.mutations)}async function E9(n,e,t){const r=n.Ha.shift(),i=Fc.from(r,e,t);await xp(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Oa(n)}async function b9(n,e){e&&On(n).Jn&&await async function(r,i){if(function(a){return a7(a)&&a!==D.ABORTED}(i.code)){const s=r.Ha.shift();On(r).Mn(),await xp(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Oa(r)}}(n,e),Cp(n)&&Sp(n)}async function D1(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),q(Gt,"RemoteStore received new credentials");const r=sr(t);t.tu.add(3),await Ji(t),r&&t.iu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.tu.delete(3),await La(t)}async function T9(n,e){const t=te(n);e?(t.tu.delete(2),await La(t)):e||(t.tu.add(2),await Ji(t),t.iu.set("Unknown"))}function Ur(n){return n._u||(n._u=function(t,r,i){const s=te(t);return s.nr(),new F7(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Qt:p9.bind(null,n),zt:f9.bind(null,n),Ht:m9.bind(null,n),zn:g9.bind(null,n)}),n.nu.push(async e=>{e?(n._u.Mn(),Gc(n)?Hc(n):n.iu.set("Unknown")):(await n._u.stop(),Ap(n))})),n._u}function On(n){return n.ou||(n.ou=function(t,r,i){const s=te(t);return s.nr(),new U7(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Qt:()=>Promise.resolve(),zt:v9.bind(null,n),Ht:b9.bind(null,n),Zn:w9.bind(null,n),Xn:E9.bind(null,n)}),n.nu.push(async e=>{e?(n.ou.Mn(),await Oa(n)):(await n.ou.stop(),n.Ha.length>0&&(q(Gt,`Stopping write stream with ${n.Ha.length} pending writes`),n.Ha=[]))})),n.ou}/**
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
 */class Wc{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new Wc(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kc(n,e){if(en("AsyncQueue",`${e}: ${n}`),Dr(n))return new H(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Kn{static emptySet(e){return new Kn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=hr(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Kn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Kn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class V1{constructor(){this.au=new we(Y.comparator)}track(e){const t=e.doc.key,r=this.au.get(t);r?e.type!==0&&r.type===3?this.au=this.au.insert(t,e):e.type===3&&r.type!==1?this.au=this.au.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.au=this.au.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.au=this.au.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.au=this.au.remove(t):e.type===1&&r.type===2?this.au=this.au.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.au=this.au.insert(t,{type:2,doc:e.doc}):K(63341,{ft:e,uu:r}):this.au=this.au.insert(t,e)}cu(){const e=[];return this.au.inorderTraversal((t,r)=>{e.push(r)}),e}}class kr{constructor(e,t,r,i,s,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new kr(e,t,Kn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class I9{constructor(){this.lu=void 0,this.Eu=[]}hu(){return this.Eu.some(e=>e.Tu())}}class A9{constructor(){this.queries=M1(),this.onlineState="Unknown",this.Pu=new Set}terminate(){(function(t,r){const i=te(t),s=i.queries;i.queries=M1(),s.forEach((a,c)=>{for(const l of c.Eu)l.onError(r)})})(this,new H(D.ABORTED,"Firestore shutting down"))}}function M1(){return new rr(n=>gp(n),Pa)}async function x9(n,e){const t=te(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.hu()&&e.Tu()&&(r=2):(s=new I9,r=e.Tu()?0:1);try{switch(r){case 0:s.lu=await t.onListen(i,!0);break;case 1:s.lu=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=Kc(a,`Initialization of query '${De(e.query)?Xt(e.query):gi(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.Eu.push(e),e.Ru(t.onlineState),s.lu&&e.Iu(s.lu)&&Yc(t)}async function C9(n,e){const t=te(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.Eu.indexOf(e);a>=0&&(s.Eu.splice(a,1),s.Eu.length===0?i=e.Tu()?0:1:!s.hu()&&e.Tu()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function S9(n,e){const t=te(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.Eu)c.Iu(i)&&(r=!0);a.lu=i}}r&&Yc(t)}function k9(n,e,t){const r=te(n),i=r.queries.get(e);if(i)for(const s of i.Eu)s.onError(t);r.queries.delete(e)}function Yc(n){n.Pu.forEach(e=>{e.next()})}var Ho;(function(n){n.Default="default",n.Cache="cache"})(Ho||(Ho={}));class P9{constructor(e,t,r){this.query=e,this.Au=t,this.Vu=!1,this.du=null,this.onlineState="Unknown",this.options=r||{}}Iu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new kr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.fu(e)&&(this.Au.next(e),t=!0):this.mu(e,this.onlineState)&&(this.pu(e),t=!0),this.du=e,t}onError(e){this.Au.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.du&&!this.Vu&&this.mu(this.du,e)&&(this.pu(this.du),t=!0),t}mu(e,t){if(!e.fromCache||!this.Tu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}fu(e){if(e.docChanges.length>0)return!0;const t=this.du&&this.du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}pu(e){e=kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.Au.next(e)}Tu(){return this.options.source!==Ho.Cache}}/**
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
 */class kp{constructor(e){this.key=e}}class Pp{constructor(e){this.key=e}}class R9{constructor(e,t){this.query=e,this.Ou=t,this.Mu=null,this.hasCachedResults=!1,this.current=!1,this.Nu=se(),this.mutatedKeys=se(),this.Lu=De(e)?$o(e):yc(e),this.Bu=new Kn(this.Lu)}get Uu(){return this.Ou}ku(e,t){const r=t?t.qu:new V1,i=t?t.Bu:this.Bu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const[l,h]=this.$u(this.query,i);e.inorderTraversal((m,A)=>{const R=i.get(m),L=U3(this.query,A)?A:null,M=!!R&&this.mutatedKeys.has(R.key),B=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let J=!1;R&&L?R.data.isEqual(L.data)?M!==B&&(r.track({type:3,doc:L}),J=!0):this.Ku(R,L)||(r.track({type:2,doc:L}),J=!0,(l&&this.Lu(L,l)>0||h&&this.Lu(L,h)<0)&&(c=!0)):!R&&L?(r.track({type:0,doc:L}),J=!0):R&&!L&&(r.track({type:1,doc:R}),J=!0,(l||h)&&(c=!0)),J&&(L?(a=a.add(L),s=B?s.add(m):s.delete(m)):(a=a.delete(m),s=s.delete(m)))});const p=this.Wu(this.query);if(p)if(De(this.query)){const m=[];a.forEach(L=>m.push(L));const A=vp(this.query,m);let R=new Kn($o(this.query));for(const L of A)R=R.add(L);a.forEach(L=>{R.has(L.key)||(s=s.delete(L.key),r.track({type:1,doc:L}))}),a=R}else{const m=this.Qu(this.query);for(;a.size>p;){const A=m==="F"?a.last():a.first();a=a.delete(A.key),s=s.delete(A.key),r.track({type:1,doc:A})}}return{Bu:a,qu:r,Uo:c,mutatedKeys:s}}Wu(e){return De(e)?yo(e)?.limit:e.limit||void 0}Qu(e){if(De(e)){const t=yo(e);return t&&t.limit<0?"L":"F"}return e.limitType}$u(e,t){if(De(e)){const r=yo(e)?.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.Wu(this.query)?t.last():null,e.limitType==="L"&&t.size===this.Wu(this.query)?t.first():null]}Ku(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Bu;this.Bu=e.Bu,this.mutatedKeys=e.mutatedKeys;const a=e.qu.cu();a.sort((p,m)=>function(R,L){const M=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{ft:B})}};return M(R)-M(L)}(p.type,m.type)||this.Lu(p.doc,m.doc)),this.Gu(r),i=i??!1;const c=t&&!i?this.zu():[],l=this.Nu.size===0&&this.current&&!i?1:0,h=l!==this.Mu;return this.Mu=l,a.length!==0||h?{snapshot:new kr(this.query,e.Bu,s,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ju:c}:{ju:c}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Bu:this.Bu,qu:new V1,mutatedKeys:this.mutatedKeys,Uo:!1},!1)):{ju:[]}}Hu(e){return!this.Ou.has(e)&&!!this.Bu.has(e)&&!this.Bu.get(e).hasLocalMutations}Gu(e){e&&(e.addedDocuments.forEach(t=>this.Ou=this.Ou.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ou=this.Ou.delete(t)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Nu;this.Nu=se(),this.Bu.forEach(r=>{this.Hu(r.key)&&(this.Nu=this.Nu.add(r.key))});const t=[];return e.forEach(r=>{this.Nu.has(r)||t.push(new Pp(r))}),this.Nu.forEach(r=>{e.has(r)||t.push(new kp(r))}),t}Ju(e){this.Ou=e.Jo,this.Nu=se();const t=this.ku(e.documents);return this.applyChanges(t,!0)}Yu(){return kr.fromInitialDocuments(this.query,this.Bu,this.mutatedKeys,this.Mu===0,this.hasCachedResults)}}const Qc="SyncEngine";class L9{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class O9{constructor(e){this.key=e,this.Zu=!1}}class N9{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Xu={},this.ec=new rr(c=>gp(c),Pa),this.tc=new Map,this.nc=new Set,this.rc=new we(Y.comparator),this.sc=new Map,this._c=new Uc,this.oc={},this.ac=new Map,this.uc=Ln.Cs(),this.onlineState="Unknown",this.cc=void 0}get isPrimaryClient(){return this.cc===!0}}async function D9(n,e,t=!0){const r=Vp(n);let i;const s=r.ec.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Yu()):i=await Rp(r,e,t,!0),i}async function V9(n,e){const t=Vp(n);await Rp(t,e,!0,!1)}async function Rp(n,e,t,r){const i=await c9(n.localStore,De(e)?e:zt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await M9(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Tp(n.remoteStore,i),c}async function M9(n,e,t,r,i){n.lc=(m,A,R)=>async function(M,B,J,le){let V=B.view.ku(J);V.Uo&&(V=await O1(M.localStore,B.query,!1).then(({documents:w})=>B.view.ku(w,V)));const j=le&&le.targetChanges.get(B.targetId),oe=le&&le.targetMismatches.get(B.targetId)!=null,ne=B.view.applyChanges(V,M.isPrimaryClient,j,oe);return U1(M,B.targetId,ne.ju),ne.snapshot}(n,m,A,R);const s=await O1(n.localStore,e,!0),a=new R9(e,s.Jo),c=a.ku(s.documents),l=Yi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(c,n.isPrimaryClient,l);U1(n,t,h.ju);const p=new L9(e,t,a);return n.ec.set(e,p),n.tc.has(t)?n.tc.get(t).push(e):n.tc.set(t,[e]),h.snapshot}async function F9(n,e,t){const r=te(n),i=r.ec.get(e),s=r.tc.get(i.targetId);if(s.length>1)return r.tc.set(i.targetId,s.filter(a=>!Pa(a,e))),void r.ec.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await qo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&qc(r.remoteStore,i.targetId),Go(r,i.targetId)}).catch(Nr)):(Go(r,i.targetId),await qo(r.localStore,i.targetId,!0))}async function U9(n,e){const t=te(n),r=t.ec.get(e),i=t.tc.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),qc(t.remoteStore,r.targetId))}async function z9(n,e,t){const r=W9(n);try{const i=await function(a,c){const l=te(a),h=_e.now(),p=c.reduce((R,L)=>R.add(L.key),se());let m,A;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let L=ot(),M=se();return l.Qo.getEntries(R,p).next(B=>{L=B,L.forEach((J,le)=>{le.isValidDocument()||(M=M.add(J))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,L)).next(B=>{m=B;const J=[];for(const le of c){const V=Bg(le,m.get(le.key).overlayedDocument);V!=null&&J.push(new nr(le.key,V,fd(V.value.mapValue),Qt.exists(!0)))}return l.mutationQueue.addMutationBatch(R,h,J,c)}).next(B=>{A=B;const J=B.applyToLocalDocumentSet(m,M);return l.documentOverlayCache.saveOverlays(R,B.batchId,J)})}).then(()=>({batchId:A.batchId,changes:Od(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let h=a.oc[a.currentUser.toKey()];h||(h=new we(ae)),h=h.insert(c,l),a.oc[a.currentUser.toKey()]=h}(r,i.batchId,t),await Zi(r,i.changes),await Oa(r.remoteStore)}catch(i){const s=Kc(i,"Failed to persist write");t.reject(s)}}async function Lp(n,e){const t=te(n);try{const r=await s9(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.sc.get(s);a&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.Zu=!0:i.modifiedDocuments.size>0?G(a.Zu,14607):i.removedDocuments.size>0&&(G(a.Zu,42227),a.Zu=!1))}),await Zi(t,r,e)}catch(r){await Nr(r)}}function F1(n,e,t){const r=te(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ec.forEach((s,a)=>{const c=a.view.Ru(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const l=te(a);l.onlineState=c;let h=!1;l.queries.forEach((p,m)=>{for(const A of m.Eu)A.Ru(c)&&(h=!0)}),h&&Yc(l)}(r.eventManager,e),i.length&&r.Xu.zn(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function B9(n,e,t){const r=te(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.sc.get(e),s=i&&i.key;if(s){let a=new we(Y.comparator);a=a.insert(s,Qe.newNoDocument(s,ee.min()));const c=se().add(s),l=new Ki(ee.min(),new Map,new we(ae),a,ot(),c);await Lp(r,l),r.rc=r.rc.remove(s),r.sc.delete(e),Xc(r)}else await qo(r.localStore,e,!1).then(()=>Go(r,e,t)).catch(Nr)}async function $9(n,e){const t=te(n),r=e.batch.batchId;try{const i=await i9(t.localStore,e);Np(t,r,null),Op(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Zi(t,i)}catch(i){await Nr(i)}}async function q9(n,e,t){const r=te(n);try{const i=await function(a,c){const l=te(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return l.mutationQueue.lookupMutationBatch(h,c).next(m=>(G(m!==null,37113),p=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>l.localDocuments.getDocuments(h,p))})}(r.localStore,e);Np(r,e,t),Op(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Zi(r,i)}catch(i){await Nr(i)}}function Op(n,e){(n.ac.get(e)||[]).forEach(t=>{t.resolve()}),n.ac.delete(e)}function Np(n,e,t){const r=te(n);let i=r.oc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function Go(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.tc.get(e))n.ec.delete(r),t&&n.Xu.Ec(r,t);n.tc.delete(e),n.isPrimaryClient&&n._c.s_(e).forEach(r=>{n._c.containsKey(r)||Dp(n,r)})}function Dp(n,e){n.nc.delete(e.path.canonicalString());const t=n.rc.get(e);t!==null&&(qc(n.remoteStore,t),n.rc=n.rc.remove(e),n.sc.delete(t),Xc(n))}function U1(n,e,t){for(const r of t)r instanceof kp?(n._c.addReference(r.key,e),j9(n,r)):r instanceof Pp?(q(Qc,"Document no longer in limbo: "+r.key),n._c.removeReference(r.key,e),n._c.containsKey(r.key)||Dp(n,r.key)):K(19791,{hc:r})}function j9(n,e){const t=e.key,r=t.path.canonicalString();n.rc.get(t)||n.nc.has(r)||(q(Qc,"New document in limbo: "+t),n.nc.add(r),Xc(n))}function Xc(n){for(;n.nc.size>0&&n.rc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new Y(fe.fromString(e)),r=n.uc.next();n.sc.set(r,new O9(t)),n.rc=n.rc.insert(t,r),Tp(n.remoteStore,new Yt(zt(gc(t.path)),r,"TargetPurposeLimboResolution",ga.ce))}}async function Zi(n,e,t){const r=te(n),i=[],s=[],a=[];r.ec.isEmpty()||(r.ec.forEach((c,l)=>{a.push(r.lc(l,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:t?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Bc.vo(l.targetId,h);s.push(p)}}))}),await Promise.all(a),r.Xu.zn(i),await async function(l,h){const p=te(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>N.forEach(h,A=>N.forEach(A.wo,R=>p.persistence.referenceDelegate.addReference(m,A.targetId,R)).next(()=>N.forEach(A.bo,R=>p.persistence.referenceDelegate.removeReference(m,A.targetId,R)))))}catch(m){if(!Dr(m))throw m;q($c,"Failed to update sequence numbers: "+m)}for(const m of h){const A=m.targetId;if(!m.fromCache){const R=p.$o.get(A),L=R.snapshotVersion,M=R.withLastLimboFreeSnapshotVersion(L);p.$o=p.$o.insert(A,M)}}}(r.localStore,s))}async function H9(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){q(Qc,"User change. New user:",e.toKey());const r=await Ep(t.localStore,e);t.currentUser=e,function(s,a){s.ac.forEach(c=>{c.forEach(l=>{l.reject(new H(D.CANCELLED,a))})}),s.ac.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zi(t,r.zo)}}function G9(n,e){const t=te(n),r=t.sc.get(e);if(r&&r.Zu)return se().add(r.key);{let i=se();const s=t.tc.get(e);if(!s)return i;for(const a of s??[]){const c=t.ec.get(a);i=i.unionWith(c.view.Uu)}return i}}function Vp(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=G9.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=B9.bind(null,e),e.Xu.zn=S9.bind(null,e.eventManager),e.Xu.Ec=k9.bind(null,e.eventManager),e}function W9(n){const e=te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$9.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q9.bind(null,e),e}class ia{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ia(e.databaseInfo.databaseId),this.sharedClientState=this.Rc(e),this.persistence=this.Ic(e),await this.persistence.start(),this.localStore=this.Ac(e),this.gcScheduler=this.Vc(e,this.localStore),this.indexBackfillerScheduler=this.dc(e,this.localStore)}Vc(e,t){return null}dc(e,t){return null}Ac(e){return r9(this.persistence,new e9,e.initialUser,this.serializer)}Ic(e){return new wp(zc.C_,this.serializer)}Rc(e){return new u9}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ia.provider={build:()=>new ia};class K9 extends ia{constructor(e){super(),this.cacheSizeBytes=e}Vc(e,t){G(this.persistence.referenceDelegate instanceof na,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new W7(r,e.asyncQueue,t)}Ic(e){const t=this.cacheSizeBytes!==void 0?st.withCacheSize(this.cacheSizeBytes):st.DEFAULT;return new wp(r=>na.C_(r,t),this.serializer)}}class Wo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>F1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=H9.bind(null,this.syncEngine),await T9(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new A9}()}createDatastore(e){const t=Ia(e.databaseInfo.databaseId),r=M7(e.databaseInfo);return $7(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new d9(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>F1(this.syncEngine,t,0),function(){return T1.C()?new T1:new O7}())}createSyncEngine(e,t){return function(i,s,a,c,l,h,p){const m=new N9(i,s,a,c,l,h);return p&&(m.cc=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=te(t);q(Gt,"RemoteStore shutting down."),r.tu.add(5),await Ji(r),r.ru.shutdown(),r.iu.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Wo.provider={build:()=>new Wo};/**
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
 */class Y9{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.mc(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.mc(this.observer.error,e):en("Uncaught Error in snapshot listener:",e.toString()))}gc(){this.muted=!0}mc(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Nn="FirestoreClient";class Q9{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=uc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{q(Nn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(q(Nn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Kc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vo(n,e){n.asyncQueue.verifyOperationInProgress(),q(Nn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ep(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function z1(n,e){n.asyncQueue.verifyOperationInProgress();const t=await X9(n);q(Nn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>D1(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>D1(e.remoteStore,i)),n._onlineComponents=e}async function X9(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(Nn,"Using user provided OfflineComponentProvider");try{await vo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ot("Error using user provided cache. Falling back to memory cache: "+t),await vo(n,new ia)}}else q(Nn,"Using default OfflineComponentProvider"),await vo(n,new K9(void 0));return n._offlineComponents}async function Mp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(Nn,"Using user provided OnlineComponentProvider"),await z1(n,n._uninitializedComponentsProvider._online)):(q(Nn,"Using default OnlineComponentProvider"),await z1(n,new Wo))),n._onlineComponents}function J9(n){return Mp(n).then(e=>e.syncEngine)}async function Z9(n){const e=await Mp(n),t=e.eventManager;return t.onListen=D9.bind(null,e.syncEngine),t.onUnlisten=F9.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=V9.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=U9.bind(null,e.syncEngine),t}function e8(n,e,t={}){const r=new En;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,h){const p=new Y9({next:A=>{p.gc(),a.enqueueAndForget(()=>C9(s,m));const R=A.docs.has(c);!R&&A.fromCache?h.reject(new H(D.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&A.fromCache&&l&&l.source==="server"?h.reject(new H(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(A)},error:A=>h.reject(A)}),m=new P9(gc(c.path),p,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return x9(s,m)}(await Z9(n),n.asyncQueue,e,t,r)),r.promise}function t8(n,e){const t=new En;return n.asyncQueue.enqueueAndForget(async()=>z9(await J9(n),e,t)),t.promise}/**
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
 */const B1="AsyncQueue";class $1{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new Kd(this,"async_queue_retry"),this.jc=()=>{const r=_o();r&&q(B1,"Visibility state changed to "+r.visibilityState),this.xn.gn()},this.Hc=e;const t=_o();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=_o();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const t=new En;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(e){if(!Dr(e))throw e;q(B1,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.xn.mn(()=>this.Zc())}}Yc(e){const t=this.Hc.then(()=>(this.Qc=!0,e().catch(r=>{throw this.Wc=r,this.Qc=!1,en("INTERNAL UNHANDLED ERROR: ",q1(r)),r}).then(r=>(this.Qc=!1,r))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const i=Wc.createAndSchedule(this,e,t,r,s=>this.Xc(s));return this.Kc.push(i),i}Jc(){this.Wc&&K(47125,{el:q1(this.Wc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function q1(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Jc extends bc{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new $1,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $1(e),this._firestoreClient=void 0,await e}}}function n8(n,e){const t=typeof n=="object"?n:lh(),r=typeof n=="string"?n:js,i=Rr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=N2("firestore");s&&Q7(i,...s)}return i}function Fp(n){if(n._terminated)throw new H(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||r8(n),n._firestoreClient}function r8(n){const e=n._freezeSettings(),t=j7(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Q9(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(i){const s=i?._online.build();return{_offline:i?._offline.build(s),_online:s}}(n._componentsProvider))}/**
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
 */class i8{convertValue(e,t="none"){switch(Re(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return tr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){const t=e.fields?.[Ci].arrayValue?.values?.map(r=>Ee(r.doubleValue));return new ct(t)}convertGeoPoint(e){return new $t(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Gi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ar(e));default:return null}}convertTimestamp(e){const t=Cn(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=fe.fromString(e);G(qd(r),9688,{name:e});const i=new xi(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(t)||en(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class s8 extends i8{constructor(e){super(),this.firestore=e}convertBytes(e){return new bt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,t)}}const j1="@firebase/firestore",H1="4.16.0";/**
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
 */class Up{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new a8(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Aa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class a8 extends Up{data(){return super.data()}}function o8(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class li{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yn extends Up{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ks(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Aa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Yn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Yn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Yn._jsonSchema={type:Se("string",Yn._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class ks extends Yn{data(e={}){return super.data(e)}}class vi{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new li(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ks(this._firestore,this._userDataWriter,r.key,r,new li(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{De(i._snapshot.query)?$o(i._snapshot.query):yc(i.query._query);const l=new ks(i._firestore,i._userDataWriter,c.doc.key,c.doc,new li(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new ks(i._firestore,i._userDataWriter,c.doc.key,c.doc,new li(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:c8(c.type),doc:l,oldIndex:h,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=uc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function c8(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}/**
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
 */vi._jsonSchemaVersion="firestore/querySnapshot/1.0",vi._jsonSchema={type:Se("string",vi._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};/**
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
 */function l8(n){n=Ti(n,Ve);const e=Ti(n.firestore,Jc),t=Fp(e);return e8(t,n._key).then(r=>d8(e,n,r))}function u8(n,e,t){n=Ti(n,Ve);const r=Ti(n.firestore,Jc),i=o8(n.converter,e,t),s=e4(r);return h8(r,[t4(s,"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Qt.none())])}function h8(n,e){const t=Fp(n);return t8(t,e)}function d8(n,e,t){const r=t.docs.get(e._key),i=new s8(n);return new Yn(n,i,e._key,r,new li(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){og(la),qt(new Lt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new Jc(new ug(r.getProvider("auth-internal")),new pg(a,r.getProvider("app-check-internal")),Og(a,i),a);return s={useFetchStreams:t,...s},c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Tt(j1,H1,e),Tt(j1,H1,"esm2020")})();const zp={apiKey:"AIzaSyABnvYQl4QzP1lHF4Ei_AzrDPYlMKoTXpA",authDomain:"yathralanka-2ac43.firebaseapp.com",projectId:"yathralanka-2ac43",storageBucket:"yathralanka-2ac43.firebasestorage.app",measurementId:"G-KXWXP8TGMS",appId:"1:1032179534120:web:21d200d59018319f7ca81d",messagingSenderId:"1032179534120"};console.log("Config keys being used:",zp.projectId);const Zc=ch(zp);x6(Zc);const In=gm(Zc,{persistence:Hm}),Bp=n8(Zc),p8="modulepreload",f8=function(n,e){return new URL(n,e).href},G1={},$p=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");i=Promise.allSettled(t.map(h=>{if(h=f8(h,r),h in G1)return;G1[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(!!r)for(let L=a.length-1;L>=0;L--){const M=a[L];if(M.href===h&&(!p||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${m}`))return;const R=document.createElement("link");if(R.rel=p?"stylesheet":p8,p||(R.as="script"),R.crossOrigin="",R.href=h,l&&R.setAttribute("nonce",l),document.head.appendChild(R),p)return new Promise((L,M)=>{R.addEventListener("load",L),R.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */const m8=n=>{const e=new Map;e.set("web",{name:"web"});const t=n.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},r=(s,a)=>{t.platforms.set(s,a)},i=s=>{t.platforms.has(s)&&(t.currentPlatform=t.platforms.get(s))};return t.addPlatform=r,t.setPlatform=i,t},g8=n=>n.CapacitorPlatforms=m8(n),qp=g8(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});qp.addPlatform;qp.setPlatform;var Pr;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Pr||(Pr={}));class wo extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}const y8=n=>{var e,t;return n?.androidBridge?"android":!((t=(e=n?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},_8=n=>{var e,t,r,i,s;const a=n.CapacitorCustomPlatform||null,c=n.Capacitor||{},l=c.Plugins=c.Plugins||{},h=n.CapacitorPlatforms,p=()=>a!==null?a.name:y8(n),m=((e=h?.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||p,A=()=>m()!=="web",R=((t=h?.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||A,L=w=>{const g=j.get(w);return!!(g?.platforms.has(m())||J(w))},M=((r=h?.currentPlatform)===null||r===void 0?void 0:r.isPluginAvailable)||L,B=w=>{var g;return(g=c.PluginHeaders)===null||g===void 0?void 0:g.find(v=>v.name===w)},J=((i=h?.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||B,le=w=>n.console.error(w),V=(w,g,v)=>Promise.reject(`${v} does not have an implementation of "${g}".`),j=new Map,oe=(w,g={})=>{const v=j.get(w);if(v)return console.warn(`Capacitor plugin "${w}" already registered. Cannot register plugins twice.`),v.proxy;const I=m(),b=J(w);let C;const y=async()=>(!C&&I in g?C=typeof g[I]=="function"?C=await g[I]():C=g[I]:a!==null&&!C&&"web"in g&&(C=typeof g.web=="function"?C=await g.web():C=g.web),C),ge=(Fe,$e)=>{var pt,At;if(b){const ft=b?.methods.find(Je=>$e===Je.name);if(ft)return ft.rtype==="promise"?Je=>c.nativePromise(w,$e.toString(),Je):(Je,nn)=>c.nativeCallback(w,$e.toString(),Je,nn);if(Fe)return(pt=Fe[$e])===null||pt===void 0?void 0:pt.bind(Fe)}else{if(Fe)return(At=Fe[$e])===null||At===void 0?void 0:At.bind(Fe);throw new wo(`"${w}" plugin is not implemented on ${I}`,Pr.Unimplemented)}},rt=Fe=>{let $e;const pt=(...At)=>{const ft=y().then(Je=>{const nn=ge(Je,Fe);if(nn){const rn=nn(...At);return $e=rn?.remove,rn}else throw new wo(`"${w}.${Fe}()" is not implemented on ${I}`,Pr.Unimplemented)});return Fe==="addListener"&&(ft.remove=async()=>$e()),ft};return pt.toString=()=>`${Fe.toString()}() { [capacitor code] }`,Object.defineProperty(pt,"name",{value:Fe,writable:!1,configurable:!1}),pt},Me=rt("addListener"),ar=rt("removeListener"),He=(Fe,$e)=>{const pt=Me({eventName:Fe},$e),At=async()=>{const Je=await pt;ar({eventName:Fe,callbackId:Je},$e)},ft=new Promise(Je=>pt.then(()=>Je({remove:At})));return ft.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await At()},ft},xe=new Proxy({},{get(Fe,$e){switch($e){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return b?He:Me;case"removeListener":return ar;default:return rt($e)}}});return l[w]=xe,j.set(w,{name:w,proxy:xe,platforms:new Set([...Object.keys(g),...b?[I]:[]])}),xe},ne=((s=h?.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||oe;return c.convertFileSrc||(c.convertFileSrc=w=>w),c.getPlatform=m,c.handleError=le,c.isNativePlatform=R,c.isPluginAvailable=M,c.pluginMethodNoop=V,c.registerPlugin=ne,c.Exception=wo,c.DEBUG=!!c.DEBUG,c.isLoggingEnabled=!!c.isLoggingEnabled,c.platform=c.getPlatform(),c.isNative=c.isNativePlatform(),c},v8=n=>n.Capacitor=_8(n),St=v8(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Na=St.registerPlugin;St.Plugins;class jp{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const a=async()=>this.removeListener(e,t);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(t),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new St.Exception(e,Pr.Unimplemented)}unavailable(e="not available"){return new St.Exception(e,Pr.Unavailable)}async removeListener(e,t){const r=this.listeners[e];if(!r)return;const i=r.indexOf(t);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(r=>{this.notifyListeners(e,r)}))}}const W1=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),K1=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class w8 extends jp{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=K1(i).trim(),s=K1(s).trim(),t[i]=s}),t}async setCookie(e){try{const t=W1(e.key),r=W1(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${i}; path=${s}; ${a};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Na("CapacitorCookies",{web:()=>new w8});const E8=async n=>new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>t(i),r.readAsDataURL(n)}),b8=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(i=>i.toLocaleLowerCase()).reduce((i,s,a)=>(i[s]=n[e[a]],i),{})},T8=(n,e=!0)=>n?Object.entries(n).reduce((r,i)=>{const[s,a]=i;let c,l;return Array.isArray(a)?(l="",a.forEach(h=>{c=e?encodeURIComponent(h):h,l+=`${s}=${c}&`}),l.slice(0,-1)):(c=e?encodeURIComponent(a):a,l=`${s}=${c}`),`${r}&${l}`},"").substr(1):null,I8=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),i=b8(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[a,c]of Object.entries(n.data||{}))s.set(a,c);t.body=s.toString()}else if(i.includes("multipart/form-data")||n.data instanceof FormData){const s=new FormData;if(n.data instanceof FormData)n.data.forEach((c,l)=>{s.append(l,c)});else for(const c of Object.keys(n.data))s.append(c,n.data[c]);t.body=s;const a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(i.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class A8 extends jp{async request(e){const t=I8(e,e.webFetchExtra),r=T8(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,t),a=s.headers.get("content-type")||"";let{responseType:c="text"}=s.ok?e:{};a.includes("application/json")&&(c="json");let l,h;switch(c){case"arraybuffer":case"blob":h=await s.blob(),l=await E8(h);break;case"json":l=await s.json();break;case"document":case"text":default:l=await s.text()}const p={};return s.headers.forEach((m,A)=>{p[A]=m}),{data:l,headers:p,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Na("CapacitorHttp",{web:()=>new A8});const Q=Na("CapacitorGoogleMaps",{web:()=>$p(()=>import("./web-Csjt_fza.js"),[],import.meta.url).then(n=>new n.CapacitorGoogleMapsWeb)});Q.addListener("isMapInFocus",n=>{var e;const t=n.x,r=n.y,i=document.elementFromPoint(t,r),a=((e=i?.dataset)===null||e===void 0?void 0:e.internalId)===n.mapId;Q.dispatchMapEvent({id:n.mapId,focus:a})});class x8{constructor(e){this.southwest=e.southwest,this.center=e.center,this.northeast=e.northeast}async contains(e){return(await Q.mapBoundsContains({bounds:this,point:e})).contains}async extend(e){const t=await Q.mapBoundsExtend({bounds:this,point:e});return this.southwest=t.bounds.southwest,this.center=t.bounds.center,this.northeast=t.bounds.northeast,this}}var Ko;(function(n){n.Normal="Normal",n.Hybrid="Hybrid",n.Satellite="Satellite",n.Terrain="Terrain",n.None="None"})(Ko||(Ko={}));class C8 extends HTMLElement{constructor(){super()}connectedCallback(){if(this.innerHTML="",St.getPlatform()=="ios"){this.style.overflow="scroll",this.style["-webkit-overflow-scrolling"]="touch";const e=document.createElement("div");e.style.height="200%",this.appendChild(e)}}}customElements.define("capacitor-google-map",C8);class sa{constructor(e){this.element=null,this.resizeObserver=null,this.handleScrollEvent=()=>this.updateMapBounds(),this.id=e}static async create(e,t){const r=new sa(e.id);if(!e.element)throw new Error("container element is required");e.config.androidLiteMode===void 0&&(e.config.androidLiteMode=!1),r.element=e.element,r.element.dataset.internalId=e.id;const i=await sa.getElementBounds(e.element);if(e.config.width=i.width,e.config.height=i.height,e.config.x=i.x,e.config.y=i.y,e.config.devicePixelRatio=window.devicePixelRatio,St.getPlatform()=="android"&&r.initScrolling(),St.isNativePlatform()){e.element={};const s=()=>{var p,m;const A=(m=(p=r.element)===null||p===void 0?void 0:p.getBoundingClientRect())!==null&&m!==void 0?m:{};return{x:A.x,y:A.y,width:A.width,height:A.height}},a=()=>{Q.onDisplay({id:r.id,mapBounds:s()})},c=()=>{Q.onResize({id:r.id,mapBounds:s()})},l=r.element.closest(".ion-page");St.getPlatform()==="ios"&&l&&(l.addEventListener("ionViewWillEnter",()=>{setTimeout(()=>{a()},100)}),l.addEventListener("ionViewDidEnter",()=>{setTimeout(()=>{a()},100)}));const h={width:i.width,height:i.height,isHidden:!1};r.resizeObserver=new ResizeObserver(()=>{if(r.element!=null){const p=r.element.getBoundingClientRect(),m=p.width===0&&p.height===0;m||(h.isHidden?St.getPlatform()==="ios"&&!l&&a():(h.width!==p.width||h.height!==p.height)&&c()),h.width=p.width,h.height=p.height,h.isHidden=m}}),r.resizeObserver.observe(r.element)}if(await new Promise((s,a)=>{setTimeout(async()=>{try{await Q.create(e),s(void 0)}catch(c){a(c)}},200)}),t){const s=await Q.addListener("onMapReady",a=>{a.mapId==r.id&&(t(a),s.remove())})}return r}static async getElementBounds(e){return new Promise(t=>{let r=e.getBoundingClientRect();if(r.width==0){let i=0;const s=setInterval(function(){r.width==0&&i<30?(r=e.getBoundingClientRect(),i++):(i==30&&console.warn("Map size could not be determined"),clearInterval(s),t(r))},100)}else t(r)})}async enableTouch(){return Q.enableTouch({id:this.id})}async disableTouch(){return Q.disableTouch({id:this.id})}async enableClustering(e){return Q.enableClustering({id:this.id,minClusterSize:e})}async disableClustering(){return Q.disableClustering({id:this.id})}async addTileOverlay(e){return(await Q.addTileOverlay({id:this.id,tileOverlay:e})).id}async removeTileOverlay(e){return Q.removeTileOverlay({id:this.id,tileOverlayId:e})}async addMarker(e){return(await Q.addMarker({id:this.id,marker:e})).id}async addMarkers(e){return(await Q.addMarkers({id:this.id,markers:e})).ids}async removeMarker(e){return Q.removeMarker({id:this.id,markerId:e})}async removeMarkers(e){return Q.removeMarkers({id:this.id,markerIds:e})}async addPolygons(e){return(await Q.addPolygons({id:this.id,polygons:e})).ids}async addPolylines(e){return(await Q.addPolylines({id:this.id,polylines:e})).ids}async removePolygons(e){return Q.removePolygons({id:this.id,polygonIds:e})}async addCircles(e){return(await Q.addCircles({id:this.id,circles:e})).ids}async removeCircles(e){return Q.removeCircles({id:this.id,circleIds:e})}async removePolylines(e){return Q.removePolylines({id:this.id,polylineIds:e})}async destroy(){var e;return St.getPlatform()=="android"&&this.disableScrolling(),St.isNativePlatform()&&((e=this.resizeObserver)===null||e===void 0||e.disconnect()),this.removeAllMapListeners(),Q.destroy({id:this.id})}async setCamera(e){return Q.setCamera({id:this.id,config:e})}async getMapType(){const{type:e}=await Q.getMapType({id:this.id});return Ko[e]}async setMapType(e){return Q.setMapType({id:this.id,mapType:e})}async enableIndoorMaps(e){return Q.enableIndoorMaps({id:this.id,enabled:e})}async enableTrafficLayer(e){return Q.enableTrafficLayer({id:this.id,enabled:e})}async enableAccessibilityElements(e){return Q.enableAccessibilityElements({id:this.id,enabled:e})}async enableCurrentLocation(e){return Q.enableCurrentLocation({id:this.id,enabled:e})}async setPadding(e){return Q.setPadding({id:this.id,padding:e})}async getMapBounds(){return new x8(await Q.getMapBounds({id:this.id}))}async fitBounds(e,t){return Q.fitBounds({id:this.id,bounds:e,padding:t})}initScrolling(){const e=document.getElementsByTagName("ion-content");for(let t=0;t<e.length;t++)e[t].scrollEvents=!0;window.addEventListener("ionScroll",this.handleScrollEvent),window.addEventListener("scroll",this.handleScrollEvent),window.addEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.addEventListener("change",()=>{setTimeout(this.updateMapBounds,500)}):window.addEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,500)})}disableScrolling(){window.removeEventListener("ionScroll",this.handleScrollEvent),window.removeEventListener("scroll",this.handleScrollEvent),window.removeEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.removeEventListener("change",()=>{setTimeout(this.updateMapBounds,1e3)}):window.removeEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,1e3)})}updateMapBounds(){if(this.element){const e=this.element.getBoundingClientRect();Q.onScroll({id:this.id,mapBounds:{x:e.x,y:e.y,width:e.width,height:e.height}})}}async setOnCameraIdleListener(e){this.onCameraIdleListener&&this.onCameraIdleListener.remove(),e?this.onCameraIdleListener=await Q.addListener("onCameraIdle",this.generateCallback(e)):this.onCameraIdleListener=void 0}async setOnBoundsChangedListener(e){this.onBoundsChangedListener&&this.onBoundsChangedListener.remove(),e?this.onBoundsChangedListener=await Q.addListener("onBoundsChanged",this.generateCallback(e)):this.onBoundsChangedListener=void 0}async setOnCameraMoveStartedListener(e){this.onCameraMoveStartedListener&&this.onCameraMoveStartedListener.remove(),e?this.onCameraMoveStartedListener=await Q.addListener("onCameraMoveStarted",this.generateCallback(e)):this.onCameraMoveStartedListener=void 0}async setOnClusterClickListener(e){this.onClusterClickListener&&this.onClusterClickListener.remove(),e?this.onClusterClickListener=await Q.addListener("onClusterClick",this.generateCallback(e)):this.onClusterClickListener=void 0}async setOnClusterInfoWindowClickListener(e){this.onClusterInfoWindowClickListener&&this.onClusterInfoWindowClickListener.remove(),e?this.onClusterInfoWindowClickListener=await Q.addListener("onClusterInfoWindowClick",this.generateCallback(e)):this.onClusterInfoWindowClickListener=void 0}async setOnInfoWindowClickListener(e){this.onInfoWindowClickListener&&this.onInfoWindowClickListener.remove(),e?this.onInfoWindowClickListener=await Q.addListener("onInfoWindowClick",this.generateCallback(e)):this.onInfoWindowClickListener=void 0}async setOnMapClickListener(e){this.onMapClickListener&&this.onMapClickListener.remove(),e?this.onMapClickListener=await Q.addListener("onMapClick",this.generateCallback(e)):this.onMapClickListener=void 0}async setOnPolygonClickListener(e){this.onPolygonClickListener&&this.onPolygonClickListener.remove(),e?this.onPolygonClickListener=await Q.addListener("onPolygonClick",this.generateCallback(e)):this.onPolygonClickListener=void 0}async setOnCircleClickListener(e){this.onCircleClickListener&&this.onCircleClickListener.remove(),e?this.onCircleClickListener=await Q.addListener("onCircleClick",this.generateCallback(e)):this.onCircleClickListener=void 0}async setOnMarkerClickListener(e){this.onMarkerClickListener&&this.onMarkerClickListener.remove(),e?this.onMarkerClickListener=await Q.addListener("onMarkerClick",this.generateCallback(e)):this.onMarkerClickListener=void 0}async setOnPolylineClickListener(e){this.onPolylineClickListener&&this.onPolylineClickListener.remove(),e?this.onPolylineClickListener=await Q.addListener("onPolylineClick",this.generateCallback(e)):this.onPolylineClickListener=void 0}async setOnMarkerDragStartListener(e){this.onMarkerDragStartListener&&this.onMarkerDragStartListener.remove(),e?this.onMarkerDragStartListener=await Q.addListener("onMarkerDragStart",this.generateCallback(e)):this.onMarkerDragStartListener=void 0}async setOnMarkerDragListener(e){this.onMarkerDragListener&&this.onMarkerDragListener.remove(),e?this.onMarkerDragListener=await Q.addListener("onMarkerDrag",this.generateCallback(e)):this.onMarkerDragListener=void 0}async setOnMarkerDragEndListener(e){this.onMarkerDragEndListener&&this.onMarkerDragEndListener.remove(),e?this.onMarkerDragEndListener=await Q.addListener("onMarkerDragEnd",this.generateCallback(e)):this.onMarkerDragEndListener=void 0}async setOnMyLocationButtonClickListener(e){this.onMyLocationButtonClickListener&&this.onMyLocationButtonClickListener.remove(),e?this.onMyLocationButtonClickListener=await Q.addListener("onMyLocationButtonClick",this.generateCallback(e)):this.onMyLocationButtonClickListener=void 0}async setOnMyLocationClickListener(e){this.onMyLocationClickListener&&this.onMyLocationClickListener.remove(),e?this.onMyLocationClickListener=await Q.addListener("onMyLocationClick",this.generateCallback(e)):this.onMyLocationClickListener=void 0}async removeAllMapListeners(){this.onBoundsChangedListener&&(this.onBoundsChangedListener.remove(),this.onBoundsChangedListener=void 0),this.onCameraIdleListener&&(this.onCameraIdleListener.remove(),this.onCameraIdleListener=void 0),this.onCameraMoveStartedListener&&(this.onCameraMoveStartedListener.remove(),this.onCameraMoveStartedListener=void 0),this.onClusterClickListener&&(this.onClusterClickListener.remove(),this.onClusterClickListener=void 0),this.onClusterInfoWindowClickListener&&(this.onClusterInfoWindowClickListener.remove(),this.onClusterInfoWindowClickListener=void 0),this.onInfoWindowClickListener&&(this.onInfoWindowClickListener.remove(),this.onInfoWindowClickListener=void 0),this.onMapClickListener&&(this.onMapClickListener.remove(),this.onMapClickListener=void 0),this.onPolylineClickListener&&(this.onPolylineClickListener.remove(),this.onPolylineClickListener=void 0),this.onMarkerClickListener&&(this.onMarkerClickListener.remove(),this.onMarkerClickListener=void 0),this.onPolygonClickListener&&(this.onPolygonClickListener.remove(),this.onPolygonClickListener=void 0),this.onCircleClickListener&&(this.onCircleClickListener.remove(),this.onCircleClickListener=void 0),this.onMarkerDragStartListener&&(this.onMarkerDragStartListener.remove(),this.onMarkerDragStartListener=void 0),this.onMarkerDragListener&&(this.onMarkerDragListener.remove(),this.onMarkerDragListener=void 0),this.onMarkerDragEndListener&&(this.onMarkerDragEndListener.remove(),this.onMarkerDragEndListener=void 0),this.onMyLocationButtonClickListener&&(this.onMyLocationButtonClickListener.remove(),this.onMyLocationButtonClickListener=void 0),this.onMyLocationClickListener&&(this.onMyLocationClickListener.remove(),this.onMyLocationClickListener=void 0)}generateCallback(e){const t=this.id;return r=>{r.mapId==t&&e(r)}}}const Yo=Na("Geolocation",{web:()=>$p(()=>import("./web-B3oI1q7D.js"),[],import.meta.url).then(n=>new n.GeolocationWeb)});let E={currentScreen:"splash",user:{...bs},activeSite:null,activeQuest:null,dwellTimer:null,dwellTimeLeft:900,dwellActive:!1,cooldownTimer:null,cooldownTimeLeft:300,cooldownActive:!1,cameraAttempt:1,cameraImageIndex:0,currentQuizIndex:0,quizCorrectAnswers:0,quizAnswers:[],petitionSignatures:8742,petitionSigned:!1,donationAmount:0,navStack:[]};document.addEventListener("DOMContentLoaded",()=>{$("splash")});function $(n,e=!0){e&&E.currentScreen!==n&&E.navStack.push(E.currentScreen),E.currentScreen=n,n!=="map"&&(document.documentElement.classList.remove("map-active"),document.body.classList.remove("map-active"),document.documentElement.style.removeProperty("background"),document.documentElement.style.removeProperty("background-color"),document.body.style.setProperty("background","#FDF8E9","important"),document.body.style.setProperty("background-color","#FDF8E9","important"),["#app",".app-root","#app-container",".app-viewport",".iphone-chassis",".view-wrapper",".screen","main"].forEach(r=>{const i=document.querySelector(r);i&&(i.style.removeProperty("background"),i.style.removeProperty("background-color"))})),gn()}function Te(){if(E.navStack.length>0){const n=E.navStack.pop();$(n,!1)}else $("dashboard")}function tt(n,e=""){E.user.xp+=n;let t="None";b2.forEach(r=>{E.user.xp>=r.threshold&&(t=r.rank)}),E.user.rank!==t&&(E.user.rank=t,it(`New Rank Unlocked: ${t}!`)),e&&it(`${e} (+${n} XP)`),fr()}function fr(){const n=In.currentUser;if(!n)return Promise.resolve();const e=Jd(Bp,"users",n.uid);return u8(e,{xp:E.user.xp,rank:E.user.rank,medals:E.user.medals,sitesVisited:E.user.sitesVisited,quizzesPassed:E.user.quizzesPassed,role:E.user.role,interests:E.user.interests,permissions:E.user.permissions,signedPetitions:E.user.signedPetitions,donatedAmount:E.user.donatedAmount,joinedEvents:E.user.joinedEvents,unlockedCoupons:E.user.unlockedCoupons,completedQuizzes:E.user.completedQuizzes,dwellTimeCompleted:E.user.dwellTimeCompleted,verifiedPhotos:E.user.verifiedPhotos},{merge:!0}).catch(t=>console.error("Error saving user profile:",t))}function it(n){const e=document.createElement("div");e.style.cssText=`
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
  `,e.textContent=n,document.querySelector(".iphone-chassis").appendChild(e),setTimeout(()=>{e.style.animation="screenFadeIn 0.3s ease-in reverse forwards",setTimeout(()=>e.remove(),300)},2500)}function S8(){const n=document.getElementById("location-permission-modal");n&&n.remove();const e=document.createElement("div");e.id="location-permission-modal",e.style.cssText=`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #ffffff !important;
    background-color: #ffffff !important;
    z-index: 10000000;
    display: flex;
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
  `,(document.querySelector(".iphone-chassis")||document.body).appendChild(e),document.getElementById("location-allow-btn").addEventListener("click",async()=>{e.remove();try{(await Yo.requestPermissions()).location==="granted"?(yn=!1,await mr()):(yn=!0,await mr())}catch(r){yn=!0,console.error("Error requesting geolocation permission:",r),await mr()}}),document.getElementById("location-cancel-btn").addEventListener("click",()=>{e.remove(),yn=!0,mr()})}let Ct=null,Ps=null,yn=!1;async function mr(){const n=document.getElementById("yathra-main-map");if(!n)return;try{if((await Yo.checkPermissions()).location!=="granted"){if(!yn){S8();return}}else{const a=await Yo.getCurrentPosition();Ps={latitude:a.coords.latitude,longitude:a.coords.longitude},yn=!1}}catch(s){yn=!0,console.error("Error checking location permissions:",s)}const e=document.getElementById("map-loader");e&&e.style.setProperty("display","flex","important");const t=()=>{const s=document.getElementById("map-loader");s&&s.style.setProperty("display","none","important")},r=document.getElementById("map-view");if(r&&(r.style.display="block"),document.documentElement.classList.add("map-active"),document.body.classList.add("map-active"),["html","body","#app",".app-root","#app-container",".app-viewport",".iphone-chassis",".view-wrapper",".screen","main"].forEach(s=>{const a=document.querySelector(s);if(s==="html"||s==="body"){const c=s==="html"?document.documentElement:document.body;c.style.setProperty("background","transparent","important"),c.style.setProperty("background-color","transparent","important")}else a&&(a.style.setProperty("background","none","important"),a.style.setProperty("background-color","transparent","important"))}),Ct){try{await Ct.destroy()}catch(s){console.error("Error destroying stale map:",s)}Ct=null}try{Ct=await sa.create({id:"yathra-map-instance",element:n,apiKey:"AIzaSyAh9WMzSPpYwNj-ReY231j_ONHa_73SnUY",config:{center:{lat:6.9271,lng:79.8612},zoom:13}}),console.log("Google Maps initialized successfully on the glass."),typeof Ct.setOnTilesLoadedListener=="function"&&Ct.setOnTilesLoadedListener(()=>{t()}),setTimeout(t,1e3);const s=An.filter(h=>h.latitude&&h.longitude),a=s.map(h=>({coordinate:{lat:h.latitude,lng:h.longitude},iconUrl:h.category==="Hidden Gems"?"assets/pin_gold.png":"assets/pin_teal.png",iconSize:{width:32,height:42}})),c=await Ct.addMarkers(a),l=Array.isArray(c)?c:c.ids||[];s.forEach((h,p)=>{h.nativeMarkerId=l[p]}),Ct.setOnMarkerClickListener(async h=>{const p=An.find(m=>m.nativeMarkerId===h.markerId);if(p){Gp(p);const m=document.getElementById("map-popup-card");m&&m.style.setProperty("display","block","important")}})}catch(s){t(),console.error("Maps Initialization Error: ",s)}}window.initializeYathraMap=mr;function Qo(n,e){if(n==="site-details"||n==="site-detail"){const t=e&&e.id,r=An.find(i=>i.id===t);r&&(E.activeSite=r,$("site-detail"))}}window.Maps=Qo;function gn(){const n=document.getElementById("app-container");if(!n)return;let e="";switch(E.currentScreen){case"splash":e=k8();break;case"login":e=P8();break;case"signup":e=R8();break;case"permissions":e=L8();break;case"choose-role":e=O8();break;case"calibrate-compass":e=N8();break;case"how-scoring-works":e=D8();break;case"dashboard":e=V8();break;case"directory":e=M8();break;case"heritage-trail":e=Y1("Heritage Trail");break;case"hidden-gems":e=Y1("Hidden Gems");break;case"map":e=F8();break;case"site-detail":e=U8();break;case"dwell-time":e=z8();break;case"camera":e=B8();break;case"camera-success":e=$8();break;case"camera-reject":e=q8();break;case"guidelines":e=j8();break;case"offline-sync":e=H8();break;case"quiz":e=G8();break;case"quiz-cooldown":e=W8();break;case"quests":e=K8();break;case"quest-social":e=Y8();break;case"quest-food":e=Q8();break;case"quest-wandering":e=X8();break;case"quest-wildlife":e=J8();break;case"quest-warrior":e=Z8();break;case"activism":e=e5();break;case"petition":e=t5();break;case"donations":e=n5();break;case"cleanup":e=r5();break;case"create-event":e=i5();break;case"rewards":e=s5();break;case"rewards-list":e=a5();break;case"coupon-redeem":e=o5();break;case"rank":e=c5();break;case"leaderboard":e=l5();break;case"profile":e=u5();break;case"travel-poster":e=h5();break;case"settings":e=d5();break;default:e="<div>Screen not found</div>"}const t=document.getElementById("map-view");if(E.currentScreen!=="map"&&Ct){const r=Ct;Ct=null,(async()=>{try{await r.destroy(),console.log("Native map instance destroyed successfully.")}catch(i){console.error("Error destroying map:",i)}})()}E.currentScreen==="map"?(n.style.display="block",mr()):(t&&(t.style.display="none"),n.style.display="block",document.documentElement.classList.remove("map-active"),document.body.classList.remove("map-active"),document.documentElement.style.removeProperty("background"),document.documentElement.style.removeProperty("background-color"),document.body.style.setProperty("background","#FDF8E9","important"),document.body.style.setProperty("background-color","#FDF8E9","important"),["#app",".app-root","#app-container",".app-viewport",".iphone-chassis",".view-wrapper",".screen","main"].forEach(i=>{const s=document.querySelector(i);s&&(s.style.removeProperty("background"),s.style.removeProperty("background-color"))})),n.innerHTML=e,p5()}function k8(){return`
    <div class="screen dark-theme">
      <div class="splash-container">
        <div class="splash-logo-box">
          <img src="Element Pictures/YathraLanka Logo.png" alt="YathraLanka Logo">
        </div>
        <h1 class="splash-title">YathraLanka</h1>
        <p class="splash-subtitle">Play the game. Protect the Past.</p>
        
        <div class="splash-actions">
          <button class="btn-primary" id="go-signin">Sign In</button>
          <button class="btn-outline" id="go-signup">Sign Up</button>
        </div>
      </div>
    </div>
  `}function P8(){return`
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
        
        <div style="text-align: center; margin: 10px 0; font-size: 11px; color: var(--color-gray);">
          or continue with
        </div>
        
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
  `}function R8(){return`
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
  `}function L8(){const n=E.user.permissions.camera,e=E.user.permissions.notifications,t=n;return`
    <div class="screen permissions-screen" id="permissions-view">
      <div style="padding: 30px 24px 20px 24px; text-align: center;">
        <h2 style="font-size: 26px; font-weight: 900; line-height: 1.2; margin-bottom: 8px;">We need a few permissions</h2>
        <p style="font-size: 13px; color: var(--color-gray);">These help us make your experience safe and seamless.</p>
      </div>
      
      <!-- Camera Card -->
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
      
      <!-- Notifications Card -->
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
  `}function O8(){const n=E.user.role;return`
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
  `}function N8(){const n=E.user.interests;return`
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
  `}function D8(){return`
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
  `}function V8(){return E.user.xp>0&&E.user.rank,`
    <div class="screen">
      <div style="padding: 20px 20px 6px 20px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-size: 26px; font-weight: 900; line-height: 1.1;">Central Dashboard</h2>
          <p style="font-size: 12px; color: var(--color-gray); margin-top: 4px;">Welcome back, ${E.user.role||"Traveller"}!</p>
        </div>
        <div class="badge-tag" style="background: var(--color-gold); color: var(--color-charcoal);">
          🌟 ${E.user.xp} XP
        </div>
      </div>
      
      <!-- Wanderer Map Card -->
      <div class="dashboard-card" style="margin-top: 10px; background-color: #AAD3DF !important; background: #AAD3DF !important; transition: none !important; animation: none !important;" id="dash-map-card">
        <h3 style="font-size: 15px; font-weight: 800; color: var(--color-charcoal); transition: none !important; animation: none !important;">Wanderer</h3>
        <p style="font-size: 11px; color: #555555; margin-top: 2px; transition: none !important; animation: none !important;">Explore the map to discover nearby Hidden Gems and the Heritage Trail.</p>
        <div class="dashboard-map-svg" style="transition: none !important; animation: none !important;">
          <img src="Element Pictures/SL map on home screen green.svg" alt="Sri Lanka Map" style="opacity: 0.85; transition: none !important; animation: none !important;">
        </div>
        <div style="position: absolute; bottom: 18px; right: 18px; width: 36px; height: 36px; background: var(--color-teal); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; cursor: pointer; box-shadow: var(--shadow-premium); transition: none !important; animation: none !important;">
          →
        </div>
      </div>
      
      <!-- Searcher Card -->
      <div class="dashboard-card" style="background: var(--color-teal); color: var(--color-white);" id="dash-search-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
          <div>
            <h3 style="font-size: 16px; font-weight: 800;">Searcher</h3>
            <p style="font-size: 11px; color: #a9cbd0; margin-top: 2px;">Find specific locations through our categorized directory.</p>
          </div>
        </div>
        
        <div style="display: flex; gap: 8px; margin-bottom: 14px;">
          <span class="badge-tag" style="background: rgba(255,255,255,0.15); color: white;">
            📍 Heritage Trail
          </span>
          <span class="badge-tag" style="background: rgba(255,255,255,0.15); color: white;">
            💎 Hidden Gems
          </span>
        </div>
        
        <button class="btn-primary" style="background: var(--color-gold); height: 38px; font-size: 13px;" id="dash-view-directory">View directory</button>
      </div>
      
      ${ve("home")}
    </div>
  `}function M8(){return`
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
        <div class="tab-btn active" id="tab-trail">Heritage Trail</div>
        <div class="tab-btn" id="tab-gems">Hidden Gems</div>
      </div>
      
      <!-- Sites Grid Container -->
      <div class="locations-grid" id="directory-grid-container">
        <!-- Rendered Dynamically -->
      </div>
      
      ${ve("home")}
    </div>
  `}function Y1(n){return`
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="trail-list-back">←</button>
        <div class="header-title">${n}</div>
      </div>
      
      <div class="search-container">
        <div class="search-box">
          <span>🔍</span>
          <input type="text" class="search-input" placeholder="Search by name of the location" id="list-search-input">
        </div>
      </div>
      
      <div class="location-list-container" id="list-cards-container">
        <!-- Rendered Dynamically -->
      </div>
      
      ${ve("home")}
    </div>
  `}function F8(){return`
    <div class="screen" style="padding-bottom: 0;">
      <div class="map-canvas">
        <div class="header-bar static-back-arrow-class-name" style="position: absolute; top: 0; left: 0; background: transparent; z-index: 100;">
          <button class="back-button" id="map-back" style="background: rgba(255,255,255,0.8); border-radius: 50%; width:32px; height:32px; justify-content:center; padding:0; color:var(--color-charcoal);">←</button>
        </div>
        
        <!-- Map Legend -->
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
        
        <!-- Sri Lanka Map Graphic with Interactive Pins -->
        <div class="map-srilanka-vector" style="position: relative;">
          <!-- Using the actual home screen SL map graphic background for map screen -->
          <img src="Element Pictures/SL map on home screen.svg" alt="Sri Lanka Map" style="height: 80%; width: auto; object-fit: contain; pointer-events: none;">
          
          <!-- Interactive Pins placed roughly on Ceylon map coordinates -->
          <!-- Mihintale (Teal) -->
          <div class="map-pin" style="top: 32%; left: 49%;" data-site-id="mihintale">
            <svg viewBox="0 0 24 24"><path fill="var(--color-teal)" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          <!-- Sigiriya (Teal) -->
          <div class="map-pin" style="top: 38%; left: 52%;" data-site-id="sigiriya">
            <svg viewBox="0 0 24 24"><path fill="var(--color-teal)" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          <!-- Dowa Rock Temple (Gold) -->
          <div class="map-pin" style="top: 60%; left: 56%;" data-site-id="dowa_rock_temple">
            <svg viewBox="0 0 24 24"><path fill="var(--color-gold)" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          <!-- Galle Fort (Teal) -->
          <div class="map-pin" style="top: 76%; left: 34%;" data-site-id="galle_fort">
            <svg viewBox="0 0 24 24"><path fill="var(--color-teal)" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          
          <!-- You are here indicator near Colombo -->
          <div style="position: absolute; top: 62%; left: 30%; width: 14px; height: 14px; background: var(--color-gray); border: 2.5px solid white; border-radius: 50%; box-shadow: 0 0 8px rgba(0,0,0,0.5);"></div>
        </div>
        
        <!-- dynamic popups injected here -->
        <div id="map-popup-container"></div>
      </div>
      
      ${ve("home")}
    </div>
  `}function U8(){const n=E.activeSite;if(!n)return"";const e=E.user.dwellTimeCompleted[n.id];return`
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar" style="position: absolute; top: 0; left: 0; z-index: 10; width: 100%;">
        <button class="back-button" id="site-back" style="background: rgba(255,255,255,0.8); border-radius: 50%; width:32px; height:32px; justify-content:center; padding:0; color:var(--color-charcoal);">←</button>
      </div>
      
      <img src="${n.image}" alt="${n.name}" class="detail-banner">
      
      <div style="padding: 16px;">
        <h2 style="font-size: 24px; font-weight: 900; margin-bottom: 2px;">${n.name}</h2>
        <p style="font-size: 12px; color: var(--color-gray); font-weight: 700; margin-bottom: 12px;">${n.district}</p>
        
        <p style="font-size: 13px; color: var(--color-charcoal); line-height: 1.5; margin-bottom: 16px;">${n.description}</p>
        
        <div class="site-detail-info-row">
          <div class="info-column">
            <span class="info-column-label">XP Scale</span>
            <span>${n.xpRange}</span>
          </div>
          <div class="info-column" style="border-left: 1.5px solid var(--color-light-gray); border-right: 1.5px solid var(--color-light-gray);">
            <span class="info-column-label">Distance</span>
            <span>${n.distance}</span>
          </div>
          <div class="info-column">
            <span class="info-column-label">Status</span>
            <span style="color: var(--color-green-success);">${n.openStatus}</span>
          </div>
        </div>
        
        <button class="btn-primary" style="margin-bottom: 16px; background: ${e?"var(--color-green-success)":"var(--color-gold)"}; color: ${e?"white":"var(--color-charcoal)"};" id="site-visit-now">
          ${e?"✓ Presence Verified":"Visit Now"}
        </button>
        
        <div style="display: flex; gap: 14px;">
          <button class="btn-outline" style="flex: 1; font-size: 13px; opacity: ${e?"1":"0.4"}; cursor: ${e?"pointer":"not-allowed"};" id="site-quiz-btn" ${e?"":"disabled"}>Quiz</button>
          <button class="btn-outline" style="flex: 1; font-size: 13px; opacity: ${e?"1":"0.4"}; cursor: ${e?"pointer":"not-allowed"};" id="site-quests-btn" ${e?"":"disabled"}>Side Quests</button>
        </div>
      </div>
      
      ${ve("home")}
    </div>
  `}function z8(){const n=E.activeSite;if(!n)return"";const e=Math.floor(E.dwellTimeLeft/60),t=E.dwellTimeLeft%60,r=`${e<10?"0"+e:e}:${t<10?"0"+t:t}`,s=565.48-E.dwellTimeLeft/900*565.48,a=E.dwellTimeLeft<=0;return`
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="dwell-back">←</button>
        <div class="header-title">${n.name}</div>
      </div>
      
      <div style="padding: 10px 20px; text-align: center;">
        <h2 style="font-size: 20px; font-weight: 800; margin-bottom: 4px;">15 Minute Dwell Time</h2>
        <p style="font-size: 11px; color: var(--color-gray);">Presence validation progress. Double-click timer in demo to skip.</p>
      </div>
      
      <div class="dwell-container">
        <!-- double click here shunts/skips timer for presenting -->
        <div class="timer-circle-box" id="dwell-timer-clicker">
          <svg class="timer-svg">
            <circle class="timer-bg-circle" cx="100" cy="100" r="90"></circle>
            <circle class="timer-progress-circle ${a?"completed":""}" cx="100" cy="100" r="90" style="stroke-dashoffset: ${s};"></circle>
          </svg>
          <div class="timer-text-display">${r}</div>
        </div>
        
        <p style="font-size: 13px; font-weight: 700; text-align: center; color: ${a?"var(--color-green-success)":"var(--color-charcoal)"}; margin-bottom: 24px; max-width: 280px; line-height: 1.4;">
          ${a?"Presence verified! You are now eligible to complete trials":"Your device must stay stationary at the site to sync presence coordinates."}
        </p>
        
        <button class="btn-primary" style="margin-bottom: 12px; opacity: ${a?"1":"0.5"};" id="dwell-continue-btn" ${a?"":"disabled"}>
          ${a?"Proceed to Trials":"Waiting..."}
        </button>
      </div>
      
      ${ve("home")}
    </div>
  `}function B8(){return`
    <div class="screen" style="padding-bottom: 0; background: black; color: white;">
      <div class="header-bar" style="position: absolute; top: 0; left: 0; z-index: 100;">
        <button class="back-button" id="camera-back" style="background: rgba(0,0,0,0.5); border-radius: 50%; width:32px; height:32px; justify-content:center;">✕</button>
        <div class="header-title">Frame the monument</div>
      </div>
      
      <div class="camera-viewfinder">
        <!-- Camera Background Picture -->
        <img src="${E.activeSite.image}" alt="Camera Viewfinder" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.85;">
        
        <!-- Framing Box Overlay -->
        <div class="camera-guide-box">
          <div style="color: rgba(255,255,255,0.7); font-size: 11px; text-align: center; font-weight: 700; text-shadow: 0 1px 4px black; margin-top: auto; padding-bottom: 10px;">
            Center historical architecture
          </div>
        </div>
        
        <!-- GPS Status Tag -->
        <div class="badge-tag" style="background: var(--color-green-success); color: white; position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); font-size: 10px; padding: 6px 12px; border-radius: 14px;">
          🟢 GPS Locked
        </div>
      </div>
      
      <!-- Shutter Bar -->
      <div class="camera-shutter-bar">
        <button class="shutter-btn" id="camera-shutter-click">
          <div class="shutter-btn-inner"></div>
        </button>
      </div>
    </div>
  `}function $8(){const n=E.activeSite;return`
    <div class="screen dark-theme" style="padding-bottom: 30px; justify-content: center; align-items: center; padding: 24px;">
      <h2 style="font-family: var(--font-title); font-size: 30px; color: var(--color-gold); text-align: center; margin-top: 10px;">Great Match!</h2>
      
      <!-- Sun Badge Score Graphic -->
      <div class="camera-success-badge">
        <div class="success-badge-text">92%<br><span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Match</span></div>
      </div>
      
      <p style="font-size: 13px; color: #a9cbd0; font-weight: 700; margin-bottom: 2px;">You earned</p>
      <h3 style="font-size: 26px; font-weight: 900; color: var(--color-gold); margin-bottom: 24px;">+10 XP</h3>
      
      <!-- Side by Side Photo Cards -->
      <div class="photo-compare-container">
        <div class="compare-card">
          <img src="${n.image}" alt="Captured">
          <div class="compare-label">Your Photo</div>
        </div>
        <div class="compare-card">
          <img src="${n.referenceImage}" alt="Reference">
          <div class="compare-label">Reference</div>
        </div>
      </div>
      
      <button class="btn-primary" style="margin-top: auto; width: 100%;" id="camera-success-continue">Continue</button>
    </div>
  `}function q8(){return`
    <div class="screen" style="background: rgba(0, 0, 0, 0.85); color: white; padding: 24px; display: flex; flex-direction: column;">
      <div class="header-bar" style="padding: 0; margin-bottom: 24px;">
        <button class="back-button" id="reject-close">✕</button>
      </div>
      
      <div style="background: var(--color-green-success); border-radius: 20px; padding: 20px; text-align: center; margin-bottom: 30px; box-shadow: var(--shadow-premium);">
        <h3 style="font-size: 18px; font-weight: 900; margin-bottom: 12px; color: white;">AI Camera Rejection</h3>
        <p style="font-size: 12px; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 8px; margin-bottom: 12px;">Image Rejection Analysis,</p>
        
        <ul style="text-align: left; font-size: 11px; font-weight: 600; list-style: none; display: flex; flex-direction: column; gap: 8px;">
          <li>❌ 1. No recognized landmark detected.</li>
          <li>❌ 2. Verification Dwell Time Incomplete</li>
          <li>❌ 3. Location Discrepancy</li>
        </ul>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 14px; margin-top: auto;">
        <button class="btn-outline" style="border-color: white; color: white;" id="reject-guidelines">Review Guidelines</button>
        <button class="btn-primary" id="reject-retry">Try Again</button>
      </div>
    </div>
  `}function j8(){return`
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
  `}function H8(){return`
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="sync-back">←</button>
        <div class="header-title">Sync Points (Pending)</div>
      </div>
      
      <div style="padding: 16px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <img src="icons/grayscale offline.png" alt="Offline" style="width: 44px; height: 44px;">
        <p style="font-size: 12px; color: var(--color-gray); max-width: 300px; line-height: 1.4;">
          Project YathraLanka saw your work. Your effort is safe on your device. These points are in pending sync and will verify when you reconnect to the internet.
        </p>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 10px; padding: 0 16px;">
        <div class="sync-item-card">
          <div>
            <h4 style="font-size: 12px; font-weight: 800;">Mihintale Visit (Verifying...)</h4>
            <p style="font-size: 10px; color: var(--color-gray);">Pending network link</p>
          </div>
          <span style="font-size: 12px; font-weight: 800; color: var(--color-gray);">50 XP</span>
        </div>
        
        <div class="sync-item-card">
          <div>
            <h4 style="font-size: 12px; font-weight: 800;">Ritigala Cleanup (Uploading Photo...)</h4>
            <p style="font-size: 10px; color: var(--color-gray);">Uploading visual logs</p>
          </div>
          <span style="font-size: 12px; font-weight: 800; color: var(--color-gray);">75 XP</span>
        </div>
        
        <div class="sync-item-card">
          <div>
            <h4 style="font-size: 12px; font-weight: 800;">Mihintale Quiz (Passed Verifying...)</h4>
            <p style="font-size: 10px; color: var(--color-gray);">Passed locally</p>
          </div>
          <span style="font-size: 12px; font-weight: 800; color: var(--color-teal);">✓ 40 XP</span>
        </div>
        
        <div class="sync-item-card">
          <div>
            <h4 style="font-size: 12px; font-weight: 800;">Create Event (Verifying...)</h4>
            <p style="font-size: 10px; color: var(--color-gray);">Awaiting validation</p>
          </div>
          <span style="font-size: 12px; font-weight: 800; color: var(--color-gray);">100 XP</span>
        </div>
      </div>
      
      <!-- Grayscale Profile Bar -->
      <div class="selection-card" style="margin: 20px 16px; padding: 10px 14px; background: #e6e5e2;">
        <img src="icons/profile filled.png" alt="Avatar" style="width: 36px; height: 36px; border-radius: 50%; filter: grayscale(1);">
        <div style="flex: 1; margin-left: 8px;">
          <h4 style="font-size: 12px; font-weight: 800;">You</h4>
          <p style="font-size: 10px; color: var(--color-gray);">${E.user.rank==="None"?"No Rank":E.user.rank} • ${E.user.xp} pts</p>
        </div>
      </div>
      
      ${ve("home")}
    </div>
  `}function G8(){const n=E.activeSite;if(!n)return"";const e=n.quizzes[E.currentQuizIndex],t=E.currentQuizIndex+1,r=n.quizzes.length;return`
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="quiz-back">←</button>
        <div class="header-title">Quiz</div>
      </div>
      
      <div style="padding: 10px 20px;">
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${t/r*100}%;"></div>
        </div>
        
        <p style="font-size: 12px; color: var(--color-gray); font-weight: 700; margin-bottom: 12px; text-align: center;">Question ${t} of ${r}</p>
        
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
          <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: var(--color-gray);">
            ⏱️ <span id="quiz-timer">15s</span>
          </div>
          <button class="btn-primary" style="width: 100px; height: 36px; font-size: 12px;" id="quiz-end-btn">End Quiz</button>
        </div>
      </div>
    </div>
  `}function W8(){const n=Math.floor(E.cooldownTimeLeft/60),e=E.cooldownTimeLeft%60,t=`${n<10?"0"+n:n}:${e<10?"0"+e:e}`;return`
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
            <circle class="timer-progress-circle" cx="100" cy="100" r="90" style="stroke-dashoffset: ${565.48-E.cooldownTimeLeft/300*565.48};"></circle>
          </svg>
          <div class="timer-text-display">${t}</div>
        </div>
        
        <h3 style="font-size: 16px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 8px;">All Quizzes are Locked Until 00:00</h3>
        <img src="icons/quiz cooldown lock.png" alt="Lock" class="cooldown-lock-icon">
        
        <p style="font-size: 11px; color: var(--color-gray); line-height: 1.5; max-width: 280px; margin-bottom: 20px;">
          Multiple attempts are paused across the platform to ensure dedicated learning and authentic impact. Please reflect before re-engaging.
        </p>
      </div>
      
      ${ve("home")}
    </div>
  `}function K8(){return`
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
        ${I2.map(n=>`
          <div class="selection-card" style="padding: 12px; align-items: center;" id="quest-item-${n.id}">
            <img src="${n.icon}" alt="${n.name}" style="width: 32px; height: 32px;">
            <div style="flex: 1; margin-left: 10px;">
              <h3 style="font-size: 13px; font-weight: 800;">${n.name}</h3>
              <p style="font-size: 11px; color: var(--color-gray);">${n.description}</p>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 11px; font-weight: 700; color: var(--color-gold); display: block;">⭐ ${n.xp} pts</span>
              <span style="font-size: 9px; color: var(--color-gray);">⏱️ ${n.duration}</span>
            </div>
          </div>
        `).join("")}
      </div>
      
      ${ve("home")}
    </div>
  `}function Y8(){return`
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
      
      ${ve("home")}
    </div>
  `}function Q8(){return`
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
      
      ${ve("home")}
    </div>
  `}function X8(){return`
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="quest-wandering-back">←</button>
        <div class="header-title">Wandering Around</div>
      </div>
      
      <div style="padding: 0 16px;">
        <h2 style="font-size: 20px; font-weight: 900; margin-bottom: 2px;">Wandering Around</h2>
        <p style="font-size: 11px; color: var(--color-gray); margin-bottom: 14px;">Discover unmapped heritage</p>
        
        <!-- Large Compass SVG -->
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
      
      ${ve("home")}
    </div>
  `}function J8(){return`
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
      
      ${ve("home")}
    </div>
  `}function Z8(){return`
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
      
      ${ve("home")}
    </div>
  `}function e5(){return`
    <div class="screen" style="padding-bottom: 80px;">
      <div style="padding: 20px 20px 6px 20px;">
        <h2 style="font-size: 26px; font-weight: 900;">Make an Impact</h2>
        <p style="font-size: 12px; color: var(--color-gray); margin-top: 4px;">Small actions : Big change</p>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 14px; padding: 10px 16px;">
        ${[{key:"petition",title:"Sign Petitions",desc:"Support important causes",xp:"3xp",color:"#1A4D54"},{key:"donations",title:"Donations",desc:"Help restore and protect",xp:"5-15xp",color:"var(--color-gold)"},{key:"cleanup",title:"Join Cleanups",desc:"Participate in environmental cleanups",xp:"15xp",color:"#4E8A63"},{key:"create-event",title:"Create Community Event",desc:"Participate in environmental cleanups",xp:"15xp",color:"#2E7D8A"}].map(e=>`
          <div class="activism-card-link" style="background: ${e.color};" id="act-link-${e.key}">
            <div>
              <h3 style="font-size: 15px; font-weight: 800;">${e.title}</h3>
              <p style="font-size: 11px; opacity: 0.8; margin-top: 2px;">${e.desc}</p>
            </div>
            <span style="font-size: 10px; font-weight: 700; opacity: 0.9; text-transform: uppercase;">${e.xp}</span>
          </div>
        `).join("")}
      </div>
      
      ${ve("activism")}
    </div>
  `}function t5(){const n=E.petitionSigned,e=E.petitionSignatures,t=e/1e4*100;return`
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar" style="position: absolute; top: 0; left: 0; z-index: 10; width: 100%;">
        <button class="back-button" id="petition-back" style="background: rgba(255,255,255,0.8); border-radius: 50%; width:32px; height:32px; justify-content:center; padding:0; color:var(--color-charcoal);">←</button>
      </div>
      
      <img src="Element Pictures/Ritigala Forest Petition.jpg" alt="Ritigala" style="width: 100%; height: 200px; object-fit: cover;">
      
      <div style="padding: 16px;">
        <h2 style="font-size: 20px; font-weight: 900; margin-bottom: 4px;">Protect Ritigala Forest</h2>
        <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
          <img src="icons/Eco Warrior icon.png" alt="Green Sri Lanka" style="width: 16px; height: 16px;">
          <span style="font-size: 11px; font-weight: 700; color: var(--color-gray);">By Green Sri Lanka</span>
        </div>
        
        <p style="font-size: 12px; color: var(--color-charcoal); font-weight: 700; line-height: 1.5; margin-bottom: 20px;">
          Help protect the ancient Forest monastery and its biodiversity
        </p>
        
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
      
      ${ve("activism")}
    </div>
  `}function n5(){const n=E.donationAmount;return`
    <div class="screen" style="padding-bottom: 80px;">
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
        
        <p style="font-size: 10px; color: var(--color-gray); text-align: center; font-weight: 700; margin-bottom: 20px;">earn upto 15xp</p>
        
        <button class="btn-primary" id="donations-submit">Donate Now</button>
        
        <p style="font-size: 9px; color: var(--color-gray); text-align: center; margin-top: 14px; font-weight: 700;">secure payment powered by Payhere</p>
      </div>
      
      ${ve("activism")}
    </div>
  `}function r5(){const n=E.user.joinedEvents.includes("site-cleanup");return`
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="cleanup-back">←</button>
        <div class="header-title">Site Cleanup</div>
      </div>
      
      <div style="padding: 0 16px;">
        <img src="Element Pictures/Site Cleanup.jpg" alt="Cleanup" style="width: 100%; height: 140px; border-radius: 16px; object-fit: cover; box-shadow: var(--shadow-premium); margin-bottom: 16px;">
        
        <h2 style="font-size: 20px; font-weight: 900; margin-bottom: 16px; text-align: center;">Site Cleanup</h2>
        
        <div style="display: flex; flex-direction: column; gap: 14px; background: var(--color-white); padding: 16px; border-radius: 16px; box-shadow: var(--shadow-premium); margin-bottom: 16px;">
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
      
      ${ve("activism")}
    </div>
  `}function i5(){return`
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
      
      ${ve("activism")}
    </div>
  `}function s5(){return`
    <div class="screen" style="padding-bottom: 80px;">
      <div style="padding: 20px 20px 6px 20px;">
        <h2 style="font-size: 26px; font-weight: 900;">Rewards</h2>
        <p style="font-size: 12px; color: var(--color-gray); margin-top: 4px;">Everything you have achieved.</p>
      </div>
      
      <div style="display: flex; flex-direction: column; gap: 14px; padding: 10px 16px;">
        <div class="activism-card-link" style="background: var(--color-teal);" id="rew-link-list">
          <div>
            <h3 style="font-size: 15px; font-weight: 800;">Your Rewards</h3>
          </div>
        </div>
        
        <div class="activism-card-link" style="background: var(--color-teal);" id="rew-link-rank">
          <div>
            <h3 style="font-size: 15px; font-weight: 800;">Your Rank</h3>
          </div>
        </div>
        
        <div class="activism-card-link" style="background: var(--color-teal);" id="rew-link-leaderboard">
          <div>
            <h3 style="font-size: 15px; font-weight: 800;">Leaderboard</h3>
          </div>
        </div>
      </div>
      
      ${ve("rewards")}
    </div>
  `}function a5(){return`
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="rewards-list-back">←</button>
        <div class="header-title">Your Rewards</div>
      </div>
      
      <div style="padding: 10px 20px; display: flex; justify-content: space-between; align-items: center;">
        <p style="font-size: 11px; color: var(--color-gray); max-width: 220px; line-height: 1.4;">Convert your impact into experiences. Redeem coupons and unlock unique souvenirs.</p>
        <span class="badge-tag" style="background: var(--color-gold); color: var(--color-charcoal); font-weight: 800;">${E.user.xp} Total Points</span>
      </div>
      
      <div class="location-list-container" style="gap: 12px; margin-top: 8px;">
        <!-- Card 1: Unlocked Cooking -->
        <div class="reward-coupon-card">
          <img src="Element Pictures/Traditional Cooking Experience.jpg" alt="Cooking" class="reward-coupon-img">
          <div style="flex: 1;">
            <h3 style="font-size: 12px; font-weight: 900; line-height: 1.3;">FREE Traditional Cooking Experience</h3>
            <span style="font-size: 9px; font-weight: 700; color: var(--color-green-success); display: block; margin-top: 2px;">✓ UNLOCKED</span>
            <span style="font-size: 8px; color: var(--color-gray);">Unlocked by: Sigiriya Scholar's Trial</span>
          </div>
          <button class="btn-primary" style="width: 80px; height: 32px; font-size: 10px;" id="rew-coupon-use">Use Coupon</button>
        </div>
        
        <!-- Card 2: locked Trail Guide -->
        <div class="reward-coupon-card" style="opacity: ${E.user.xp>=100?"1":"0.7"};">
          <img src="Element Pictures/Trail Guide.webp" alt="Guide" class="reward-coupon-img">
          <div style="flex: 1;">
            <h3 style="font-size: 12px; font-weight: 900; line-height: 1.3;">20% off Ancient Trail Guide</h3>
            <p style="font-size: 9px; color: var(--color-gray); margin-top: 2px;">Expert guide for Mihintale walks.</p>
            <span style="font-size: 8px; font-weight: 700; color: var(--color-gray);">Unlock: 100 XP (Tap to unlock)</span>
          </div>
          <button class="btn-outline" style="width: 80px; height: 32px; font-size: 10px; padding: 0; color: var(--color-gray);" id="rew-unlock-guide" ${E.user.xp>=100?"":"disabled"}>Unlock Guide</button>
        </div>
        
        <!-- Card 3: locked Artisan Crafts -->
        <div class="reward-coupon-card" style="opacity: ${E.user.xp>=100?"1":"0.7"};">
          <img src="Element Pictures/Artisan Crafts.jpg.webp" alt="Crafts" class="reward-coupon-img">
          <div style="flex: 1;">
            <h3 style="font-size: 12px; font-weight: 900; line-height: 1.3;">10% off Artisan Crafts</h3>
            <p style="font-size: 9px; color: var(--color-gray); margin-top: 2px;">Authentic local handicraft store.</p>
            <span style="font-size: 8px; font-weight: 700; color: var(--color-gray);">Unlock: 100 XP (Tap to unlock)</span>
          </div>
          <button class="btn-outline" style="width: 80px; height: 32px; font-size: 10px; padding: 0; color: var(--color-gray);" id="rew-unlock-crafts" ${E.user.xp>=100?"":"disabled"}>Unlock Coupon</button>
        </div>
      </div>
      
      ${ve("rewards")}
    </div>
  `}function o5(){return`
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
        
        <!-- Review Block -->
        <div class="form-card" style="margin: 0; padding: 16px;">
          <h4 style="font-size: 12px; font-weight: 900; color: var(--color-teal); text-align: center; margin-bottom: 4px;">Verify the authenticity and cleanliness of the vendor and earn 10 XP</h4>
          <input type="text" class="form-input" style="height: 38px; font-size: 12px; text-align:center; margin: 10px 0;" placeholder="Describe cleanliness, service..." id="coupon-review-input">
          <button class="btn-primary" style="height: 36px; font-size: 12px;" id="coupon-review-submit">Write a Review</button>
        </div>
      </div>
      
      ${ve("rewards")}
    </div>
  `}function c5(){const n=[{name:"Grass Toucher",range:"0 - 99 pts",threshold:0},{name:"Wanderer",range:"100 - 249 pts",threshold:100},{name:"Tuk Tuk Trailer",range:"250 - 499 pts",threshold:250},{name:"Magahoyanna",range:"500 - 999 pts",threshold:500},{name:"Island Explorer",range:"1,000 - 2,000 pts",threshold:1e3},{name:"Lanka Legend",range:"2,000 - 5,000 pts",threshold:2e3}],e=E.user.xp,t=E.user.rank;let r=n[0];for(let s=0;s<n.length;s++){if(e<n[s].threshold){r=n[s];break}s===n.length-1&&(r={name:"Max Level",threshold:5e3})}const i=r.threshold-e;return`
    <div class="screen dark-theme" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="rank-back">←</button>
        <div class="header-title">Your Rank</div>
      </div>
      
      <div style="padding: 10px 20px; display: flex; flex-direction: column; align-items: center;">
        <h2 style="font-size: 26px; font-weight: 800; text-align: center; margin-bottom: 6px;">Your Rank</h2>
        
        <!-- Trophy Shield Hex badge -->
        <div class="rank-hex-badge">
          <div style="font-size: 11px; font-weight: 800; color: var(--color-charcoal); text-transform: uppercase;">
            ${t==="None"?"No Rank":t}
          </div>
        </div>
        
        <p style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">${e} / ${r.threshold} pts</p>
        <p style="font-size: 10px; color: #a9cbd0; margin-bottom: 20px;">
          ${i>0?`Only ${i} pts to next rank!`:"Max rank reached!"}
        </p>
        
        <!-- Rank timeline ckeckboxes -->
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
      
      ${ve("rewards")}
    </div>
  `}function l5(){let n=[...T2];if(E.user.xp>0){const e={name:(In.currentUser&&In.currentUser.displayName||"You")+" (Eco Explorer)",points:E.user.xp,role:E.user.role,rank:E.user.rank,isUser:!0};n.push(e)}return n.sort((e,t)=>t.points-e.points),`
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
      
      ${ve("rewards")}
    </div>
  `}function u5(){const n=E.user.xp>0?E.user.rank:"No Rank";return`
    <div class="screen">
      <div style="padding: 20px 20px 6px 20px;">
        <h2 style="font-size: 26px; font-weight: 900;">My Profile</h2>
      </div>
      
      <!-- Profile Card -->
      <div class="selection-card" style="margin: 10px 16px; padding: 14px;" id="profile-recap-trigger">
        <img src="icons/profile filled.png" alt="Profile" style="width: 44px; height: 44px; border-radius: 50%; border: 2.5px solid var(--color-teal);">
        <div style="flex: 1; margin-left: 10px;">
          <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">${In.currentUser&&In.currentUser.displayName||"You"}</h3>
          <p style="font-size: 11px; color: var(--color-gray); font-weight: 700;">${n} • ${E.user.xp} pts</p>
        </div>
      </div>
      
      <!-- Stats grid -->
      <div style="display: flex; gap: 12px; padding: 0 16px; margin: 12px 0 20px 0;">
        <div style="flex:1; background:var(--color-white); border-radius:12px; padding:12px 8px; text-align:center; box-shadow:var(--shadow-premium);">
          <span style="font-size: 18px; font-weight: 900; color: var(--color-charcoal); display:block;">${E.user.medals}</span>
          <span style="font-size: 9px; font-weight: 700; color: var(--color-gray); text-transform:uppercase;">Medals</span>
        </div>
        <div style="flex:1; background:var(--color-white); border-radius:12px; padding:12px 8px; text-align:center; box-shadow:var(--shadow-premium);">
          <span style="font-size: 18px; font-weight: 900; color: var(--color-charcoal); display:block;">${E.user.sitesVisited}</span>
          <span style="font-size: 9px; font-weight: 700; color: var(--color-gray); text-transform:uppercase;">Sites Visited</span>
        </div>
        <div style="flex:1; background:var(--color-white); border-radius:12px; padding:12px 8px; text-align:center; box-shadow:var(--shadow-premium);">
          <span style="font-size: 18px; font-weight: 900; color: var(--color-charcoal); display:block;">${E.user.quizzesPassed}</span>
          <span style="font-size: 9px; font-weight: 700; color: var(--color-gray); text-transform:uppercase;">Quizzes Passed</span>
        </div>
      </div>
      
      <!-- Option rows lists -->
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
      
      ${ve("profile")}
    </div>
  `}function h5(){return`
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
            <span class="poster-stat-value">${E.user.sitesVisited}</span>
            <span class="poster-stat-label">Sites Verified</span>
          </div>
          
          <div class="poster-stat-block">
            <img src="icons/activism filled.png" alt="Events" class="poster-stat-icon">
            <span class="poster-stat-value">${E.user.joinedEvents.length}</span>
            <span class="poster-stat-label">Conservation Events</span>
          </div>
          
          <div class="poster-stat-block">
            <img src="icons/trophy empty.png" alt="Quizzes" class="poster-stat-icon">
            <span class="poster-stat-value">${E.user.quizzesPassed}</span>
            <span class="poster-stat-label">Quizzes Completed</span>
          </div>
        </div>
      </div>
      
      <div style="padding: 10px 20px; text-align: center;">
        <p style="font-size: 11px; color: var(--color-gray); font-weight: 700; margin-bottom: 12px; line-height: 1.4;">Celebrate your journey. Share your commitment to heritage protection.</p>
        
        <div style="display: flex; gap: 16px; justify-content: center;">
          <span style="font-size: 24px; cursor: pointer;">📸</span>
          <span style="font-size: 24px; cursor: pointer;">👥</span>
          <span style="font-size: 24px; cursor: pointer;">✖️</span>
          <span style="font-size: 24px; cursor: pointer;">✉️</span>
        </div>
      </div>
    </div>
  `}function d5(){return`
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
  `}function ve(n){return`
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
  `}function p5(){const n=(V,j,oe)=>{document.querySelectorAll("#"+V).forEach(w=>w.addEventListener(j,oe))};n("go-signin","click",()=>$("login")),n("go-signup","click",()=>$("signup")),n("login-back","click",()=>$("splash")),n("login-toggle-signup","click",()=>$("signup",!1)),n("login-submit","click",()=>{const V=document.getElementById("login-email").value,j=document.getElementById("login-pass").value;if(!V||!j){it("Please fill in all fields.");return}Pm(In,V,j).then(oe=>{const ne=Jd(Bp,"users",oe.user.uid);return l8(ne).then(w=>{if(E.user={...bs},w.exists()){const g=w.data();E.user={...E.user,...g}}else E.user.role="Explorer";$("dashboard"),it("Welcome back, "+(oe.user.displayName||"Explorer")+"!")})}).catch(oe=>{it(oe.message)})});const e='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',t='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-7-10-7a19.08 19.08 0 0 1 2.18-3M12 5c7 0 10 7 10 7a19.08 19.08 0 0 1-2.18 3M1 1l22 22"/><circle cx="12" cy="12" r="3"/></svg>',r=(V,j)=>{n(j,"click",()=>{const oe=document.getElementById(V),ne=document.getElementById(j);oe&&ne&&(oe.type==="password"?(oe.type="text",ne.innerHTML=t):(oe.type="password",ne.innerHTML=e))})};r("login-pass","login-toggle-password"),r("signup-pass","signup-toggle-password"),r("signup-confirm","signup-toggle-confirm"),n("signup-back","click",()=>$("splash")),n("signup-toggle-login","click",()=>$("login",!1));const i=document.getElementById("signup-submit");if(i){const V=i.cloneNode(!0);i.parentNode.replaceChild(V,i),V.addEventListener("click",j=>{j.preventDefault(),j.stopPropagation(),V.disabled=!0,V.style.opacity="0.5";const oe=document.querySelector("#signup-name"),ne=document.querySelector("#signup-user-email"),w=document.querySelector("#signup-pass"),g=document.querySelector("#signup-confirm");if(!oe||!ne||!w||!g){it("Form elements not found."),V.disabled=!1,V.style.opacity="1";return}const v=oe.value.trim(),I=ne.value.trim(),b=w.value,C=g.value,y=document.getElementById("signup-error-box");y&&(y.style.display="none",y.textContent="");const ge=Me=>{y?(y.textContent=Me,y.style.display="block"):it(Me),V.disabled=!1,V.style.opacity="1"};if(!v||!I||!b||!C){ge("Please fill in all fields.");return}if(b!==C){ge("Passwords do not match.");return}if(/\s/.test(b)){ge("Password must not contain spaces.");return}if(b.length<8){ge("Password must be at least 8 characters long.");return}if(!/[a-zA-Z]/.test(b)||!/[0-9]/.test(b)){ge("Password must contain at least one letter and one number.");return}const rt=document.querySelector("#signup-check");if(!rt||!rt.checked){ge("You must agree to the Terms & Privacy Policy to proceed.");const Me=document.querySelector(".checkbox-group");Me&&(Me.style.border="1px solid var(--color-red-reject)",Me.style.borderRadius="8px",Me.style.padding="4px 8px",setTimeout(()=>{Me.style.border="",Me.style.padding=""},3e3));return}try{const Me=km(In,I,b),ar=new Promise((He,xe)=>{setTimeout(()=>xe(new Error("NETWORK TIMEOUT: Firebase did not respond. navigator.onLine status: "+navigator.onLine)),15e3)});Promise.race([Me,ar]).then(He=>(E.user={...bs},Lm(He.user,{displayName:v}).catch(xe=>console.error("updateProfile failed:",xe)),fr().then(()=>{$("permissions")}).catch(xe=>{ge("Failed to save profile: "+xe.message)}))).catch(He=>{let xe=He.message;He.code==="auth/email-already-in-use"?xe="This email address is already registered.":He.code==="auth/invalid-email"?xe="The email address is invalid.":He.code==="auth/weak-password"?xe="The password is too weak.":He.code==="auth/operation-not-allowed"&&(xe="Email/Password sign up is disabled."),ge(xe),console.error("Auth error details:",He)})}catch(Me){ge("An error occurred: "+Me.message)}})}const s=()=>{const V=E.user.permissions.camera,j=document.getElementById("permissions-continue-btn");j&&(j.disabled=!V,j.style.opacity=V?"1":"0.5")};n("perm-camera-btn","click",()=>{E.user.permissions.camera=!E.user.permissions.camera;const V=document.getElementById("perm-camera-btn");if(V){V.classList.toggle("selected",E.user.permissions.camera);const j=V.querySelector(".check-circle");j&&(j.classList.toggle("checked",E.user.permissions.camera),j.innerHTML=E.user.permissions.camera?"✓":"")}s()}),n("perm-notif-btn","click",()=>{E.user.permissions.notifications=!E.user.permissions.notifications;const V=document.getElementById("perm-notif-btn");if(V){V.classList.toggle("selected",E.user.permissions.notifications);const j=V.querySelector(".check-circle");j&&(j.classList.toggle("checked",E.user.permissions.notifications),j.innerHTML=E.user.permissions.notifications?"✓":"")}s()}),n("permissions-continue-btn","click",()=>{E.user.permissions.camera&&(fr(),$("choose-role"))}),n("role-back","click",()=>Te());const a=()=>{const V=E.user.role,j=document.getElementById("role-continue");j&&(j.disabled=!V,j.style.opacity=V?"1":"0.5")},c=document.querySelectorAll("[data-role]");c.forEach(V=>{V.addEventListener("click",()=>{c.forEach(j=>j.classList.remove("selected")),V.classList.add("selected"),E.user.role=V.getAttribute("data-role"),a()})}),n("role-continue","click",()=>{E.user.role&&(fr(),$("calibrate-compass"))}),n("compass-back-btn","click",()=>$("choose-role"));const l=()=>{const V=E.user.interests.length>0,j=document.getElementById("compass-continue");j&&(j.disabled=!V,j.style.opacity=V?"1":"0.5")};document.querySelectorAll("[data-cat]").forEach(V=>{V.addEventListener("click",()=>{const j=V.getAttribute("data-cat");let oe=!1;E.user.interests.includes(j)?E.user.interests=E.user.interests.filter(ne=>ne!==j):(E.user.interests.push(j),oe=!0),V.classList.toggle("selected",oe),l()})}),n("compass-continue","click",()=>{E.user.interests.length>0&&(fr(),$("how-scoring-works"))}),n("scoring-continue","click",()=>{fr(),$("dashboard"),it("Onboarding complete! Initial User state initialized.")}),n("dash-map-card","click",()=>{$("map")}),n("dash-search-card","click",()=>$("directory")),n("dash-view-directory","click",V=>{V.stopPropagation(),$("directory")}),n("directory-back","click",()=>$("dashboard")),n("tab-trail","click",()=>{document.getElementById("tab-trail").classList.add("active"),document.getElementById("tab-gems").classList.remove("active"),Es("Heritage Trail")}),n("tab-gems","click",()=>{document.getElementById("tab-trail").classList.remove("active"),document.getElementById("tab-gems").classList.add("active"),Es("Hidden Gems")});const p=document.getElementById("directory-search");if(p&&p.addEventListener("input",()=>{const V=document.querySelector(".tab-btn.active").id==="tab-trail"?"Heritage Trail":"Hidden Gems";Es(V,p.value)}),E.currentScreen==="directory"){const V=document.querySelector(".tab-btn.active"),j=V&&V.id==="tab-gems"?"Hidden Gems":"Heritage Trail";Es(j)}n("trail-list-back","click",()=>$("directory"));const m=document.getElementById("list-search-input");m&&m.addEventListener("input",()=>{const V=document.querySelector(".header-title").textContent;bo(V,m.value)}),E.currentScreen==="heritage-trail"?bo("Heritage Trail"):E.currentScreen==="hidden-gems"&&bo("Hidden Gems");const A=document.querySelector("#map-back-container button")||document.getElementById("map-back-container");A&&A.addEventListener("click",()=>{document.body.classList.remove("map-active"),document.documentElement.classList.remove("map-active");const V=document.getElementById("map-view");V&&(V.style.display="none"),["#app",".app-root","#app-container",".app-viewport",".iphone-chassis",".view-wrapper",".screen","main"].forEach(oe=>{const ne=document.querySelector(oe);ne&&(ne.style.removeProperty("background"),ne.style.removeProperty("background-color"))}),$("dashboard")}),document.querySelectorAll(".map-pin").forEach(V=>{V.addEventListener("click",j=>{j.stopPropagation();const oe=V.getAttribute("data-site-id"),ne=An.find(w=>w.id===oe);ne&&Gp(ne)})});const L=document.querySelector(".map-canvas");L&&L.addEventListener("click",()=>{const V=document.getElementById("map-popup-card");V&&V.remove()}),n("site-back","click",()=>Te()),n("site-visit-now","click",()=>{E.user.dwellTimeCompleted[E.activeSite.id]?$("camera"):(E.dwellTimeLeft=900,$("dwell-time"),f5())}),n("site-quiz-btn","click",()=>{E.user.dwellTimeCompleted[E.activeSite.id]&&(E.cooldownActive?$("quiz-cooldown"):(E.currentQuizIndex=0,E.quizCorrectAnswers=0,E.quizAnswers=[],$("quiz"),Xo()))}),n("site-quests-btn","click",()=>{E.user.dwellTimeCompleted[E.activeSite.id]&&$("quests")}),n("dwell-back","click",()=>{clearInterval(E.dwellTimer),E.dwellActive=!1,Te()});const M=document.getElementById("dwell-timer-clicker");M&&M.addEventListener("dblclick",()=>{clearInterval(E.dwellTimer),E.dwellTimeLeft=0,E.dwellActive=!1,E.user.dwellTimeCompleted[E.activeSite.id]=!0,E.user.sitesVisited=Object.keys(E.user.dwellTimeCompleted).length,tt(50,`Presence verified at ${E.activeSite.name}!`),gn()}),n("dwell-continue-btn","click",()=>{E.dwellTimeLeft<=0&&$("camera")}),n("camera-back","click",()=>Te()),n("camera-shutter-click","click",()=>{E.cameraAttempt===1?(E.cameraAttempt=2,$("camera-reject")):$("camera-success")}),n("camera-success-continue","click",()=>{E.user.verifiedPhotos[E.activeSite.id]=!0,tt(10,"Landmark photo verification success!"),$("site-detail")}),n("reject-close","click",()=>$("site-detail")),n("reject-guidelines","click",()=>$("guidelines")),n("reject-retry","click",()=>$("camera")),n("guidelines-back","click",()=>Te()),n("guidelines-continue","click",()=>$("camera")),n("sync-back","click",()=>Te()),n("quiz-back","click",()=>Te()),n("quiz-end-btn","click",()=>$("site-detail"));const B=document.querySelectorAll("#quiz-options-container .quiz-option-btn");B.forEach(V=>{V.addEventListener("click",()=>{const j=parseInt(V.getAttribute("data-index")),ne=E.activeSite.quizzes[E.currentQuizIndex].correctIndex;B.forEach(w=>w.disabled=!0),E.quizAnswers.push(j),j===ne?(V.classList.add("correct"),V.querySelector(".quiz-circle-ico").style.background="var(--color-green-success)",E.quizCorrectAnswers++):(V.classList.add("incorrect"),V.querySelector(".quiz-circle-ico").style.background="var(--color-red-reject)",B[ne].classList.add("correct"),B[ne].querySelector(".quiz-circle-ico").style.background="var(--color-green-success)"),setTimeout(()=>{if(E.currentQuizIndex+1<E.activeSite.quizzes.length)E.currentQuizIndex++,gn(),Xo();else{const w=E.quizCorrectAnswers,g=w*10;E.user.completedQuizzes[E.activeSite.id]=!0,E.user.quizzesPassed=Object.keys(E.user.completedQuizzes).length,tt(g,`Quiz Complete! You got ${w}/5 correct.`),E.cooldownTimeLeft=300,$("quiz-cooldown"),Hp()}},1500)})}),n("cooldown-back","click",()=>$("site-detail")),n("quests-back","click",()=>Te()),n("quest-item-social","click",()=>$("quest-social")),n("quest-item-local_food","click",()=>$("quest-food")),n("quest-item-wandering_around","click",()=>$("quest-wandering")),n("quest-item-wildlife_spotting","click",()=>$("quest-wildlife")),n("quest-item-eco_warrior","click",()=>$("quest-warrior")),n("quest-social-back","click",()=>Te()),n("quest-social-submit","click",()=>{document.getElementById("quest-social-link-input").value&&(tt(5,"Social media post registered!"),$("quests"))}),n("quest-food-back","click",()=>Te()),n("quest-food-start","click",()=>{tt(10,"Traditional recipe task completed!"),$("quests")}),n("quest-wandering-back","click",()=>Te()),n("quest-wandering-snap","click",()=>{tt(60,"Rural landmark captured locally!"),$("quests")}),n("quest-wildlife-back","click",()=>Te()),n("quest-wildlife-snap","click",()=>{tt(25,"Wildlife encounter successfully logged!"),$("quests")}),n("quest-warrior-back","click",()=>Te()),n("quest-warrior-snap","click",()=>{tt(75,"Heritage reforestation planting logged!"),$("quests")}),n("act-link-petition","click",()=>$("petition")),n("act-link-donations","click",()=>$("donations")),n("act-link-cleanup","click",()=>$("cleanup")),n("act-link-create-event","click",()=>$("create-event")),n("petition-back","click",()=>Te()),n("petition-submit","click",()=>{E.petitionSigned||(E.petitionSigned=!0,E.petitionSignatures++,E.user.signedPetitions.push("ritigala-forest"),tt(3,"You signed the Ritigala Protection Petition!"),gn())}),n("donations-back","click",()=>Te()),document.querySelectorAll(".donation-btn").forEach(V=>{V.addEventListener("click",()=>{const j=parseInt(V.getAttribute("data-val"));E.donationAmount=j,gn()})});const le=document.getElementById("donation-custom-input");le&&le.addEventListener("input",()=>{E.donationAmount=parseInt(le.value)||0}),n("donations-submit","click",()=>{if(E.donationAmount>0){E.user.donatedAmount+=E.donationAmount;const V=Math.min(15,Math.ceil(E.donationAmount/200));tt(V,`Donated Rs. ${E.donationAmount} successfully!`),E.donationAmount=0,$("activism")}}),n("cleanup-back","click",()=>Te()),n("cleanup-join","click",()=>{E.user.joinedEvents.includes("site-cleanup")||(E.user.joinedEvents.push("site-cleanup"),tt(15,"Registered for Elahera Anicut site cleanup!"),gn())}),n("create-event-back","click",()=>Te()),n("event-submit","click",()=>{const V=document.getElementById("event-location").value,j=document.getElementById("event-type").value;V&&(E.user.joinedEvents.push("community-event"),tt(15,`Created Community event: ${j}!`),$("activism"))}),n("rew-link-list","click",()=>$("rewards-list")),n("rew-link-rank","click",()=>$("rank")),n("rew-link-leaderboard","click",()=>$("leaderboard")),n("rewards-list-back","click",()=>$("rewards")),n("rew-coupon-use","click",()=>$("coupon-redeem")),n("rew-unlock-guide","click",()=>{E.user.xp>=100&&(E.user.xp-=100,E.user.unlockedCoupons.push("guide"),it("Unlocked Ancient Trail Guide Coupon!"),$("rewards-list"))}),n("rew-unlock-crafts","click",()=>{E.user.xp>=100&&(E.user.xp-=100,E.user.unlockedCoupons.push("crafts"),it("Unlocked Artisan Crafts Coupon!"),$("rewards-list"))}),n("coupon-back","click",()=>Te()),n("coupon-redeem-btn","click",()=>{it("Voucher code validated. coupon redeemed!")}),n("coupon-review-submit","click",()=>{document.getElementById("coupon-review-input").value&&(tt(10,"Review submitted successfully!"),document.getElementById("coupon-review-input").value="")}),n("rank-back","click",()=>Te()),n("leaderboard-back","click",()=>Te()),n("leaderboard-view-full","click",()=>{it("Rendering complete global leaderboard...")}),n("profile-recap-trigger","click",()=>$("travel-poster")),n("profile-travel-map","click",()=>$("travel-poster")),n("profile-settings","click",()=>$("settings")),n("poster-back","click",()=>Te()),n("settings-back","click",()=>Te()),n("sett-perm","click",()=>$("permissions")),n("sett-logout","click",()=>{Om(In).then(()=>{E.user={...bs},E.user.permissions={camera:!1,notifications:!1},E.petitionSignatures=8742,E.petitionSigned=!1,E.navStack=[],$("splash"),it("Logged out successfully.")}).catch(V=>{it("Logout failed: "+V.message)})}),n("nav-home","click",()=>$("dashboard")),n("nav-act","click",()=>$("activism")),n("nav-rew","click",()=>$("rewards")),n("nav-prof","click",()=>$("profile"))}function f5(){E.dwellActive||(E.dwellActive=!0,E.dwellTimer=setInterval(()=>{E.dwellTimeLeft>0?(E.dwellTimeLeft--,E.currentScreen==="dwell-time"&&m5()):(clearInterval(E.dwellTimer),E.dwellActive=!1,E.user.dwellTimeCompleted[E.activeSite.id]=!0,E.user.sitesVisited=Object.keys(E.user.dwellTimeCompleted).length,tt(50,`Presence verified at ${E.activeSite.name}!`),E.currentScreen==="dwell-time"&&gn())},1e3))}function m5(){const n=document.querySelector(".timer-text-display"),e=document.querySelector(".timer-progress-circle");if(!n||!e)return;const t=Math.floor(E.dwellTimeLeft/60),r=E.dwellTimeLeft%60;n.textContent=`${t<10?"0"+t:t}:${r<10?"0"+r:r}`;const s=565.48-E.dwellTimeLeft/900*565.48;e.style.strokeDashoffset=s}let ws=15,Eo=null;function Xo(){clearInterval(Eo),ws=15;const n=document.getElementById("quiz-timer");n&&(n.textContent="15s"),Eo=setInterval(()=>{if(ws>0){ws--;const e=document.getElementById("quiz-timer");e&&(e.textContent=`${ws}s`)}else{clearInterval(Eo);const e=document.querySelectorAll("#quiz-options-container .quiz-option-btn");e.forEach(r=>r.disabled=!0),E.quizAnswers.push(-1);const t=E.activeSite.quizzes[E.currentQuizIndex].correctIndex;e[t]&&(e[t].classList.add("correct"),e[t].querySelector(".quiz-circle-ico").style.background="var(--color-green-success)"),setTimeout(()=>{if(E.currentQuizIndex+1<E.activeSite.quizzes.length)E.currentQuizIndex++,gn(),Xo();else{const r=E.quizCorrectAnswers;E.user.completedQuizzes[E.activeSite.id]=!0,E.user.quizzesPassed=Object.keys(E.user.completedQuizzes).length,tt(r*10,`Quiz Complete! You got ${r}/5 correct.`),E.cooldownTimeLeft=300,$("quiz-cooldown"),Hp()}},1500)}},1e3)}function Hp(){E.cooldownActive||(E.cooldownActive=!0,E.cooldownTimer=setInterval(()=>{E.cooldownTimeLeft>0?(E.cooldownTimeLeft--,E.currentScreen==="quiz-cooldown"&&g5()):(clearInterval(E.cooldownTimer),E.cooldownActive=!1,E.currentScreen==="quiz-cooldown"&&$("site-detail"))},1e3))}function g5(){const n=document.querySelector(".timer-text-display"),e=document.querySelector(".timer-progress-circle");if(!n||!e)return;const t=Math.floor(E.cooldownTimeLeft/60),r=E.cooldownTimeLeft%60;n.textContent=`${t<10?"0"+t:t}:${r<10?"0"+r:r}`;const s=565.48-E.cooldownTimeLeft/300*565.48;e.style.strokeDashoffset=s}function Es(n,e=""){const t=document.getElementById("directory-grid-container");if(!t)return;const r=e.toLowerCase(),i=An.filter(s=>{const a=s.category===n,c=s.name.toLowerCase().includes(r)||s.district.toLowerCase().includes(r);return a&&c});if(i.length===0){t.innerHTML='<div style="grid-column: 1/3; text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No matching locations found</div>';return}t.innerHTML=i.map(s=>`
    <div class="location-grid-card" data-site-grid-id="${s.id}">
      <img src="${s.image}" alt="${s.name}" class="location-card-img">
      <div class="location-card-content">
        <h4 class="location-card-title">${s.name}</h4>
        <span class="location-card-sub">${s.district}</span>
        <span class="location-card-xp">${s.xpRange}</span>
      </div>
    </div>
  `).join(""),document.querySelectorAll("[data-site-grid-id]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-site-grid-id"),c=An.find(l=>l.id===a);c&&(E.activeSite=c,$("site-detail"))})})}function bo(n,e=""){const t=document.getElementById("list-cards-container");if(!t)return;const r=e.toLowerCase(),i=An.filter(s=>{const a=s.category===n,c=s.name.toLowerCase().includes(r)||s.district.toLowerCase().includes(r);return a&&c});if(i.length===0){t.innerHTML='<div style="text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No matching locations found</div>';return}t.innerHTML=i.map(s=>`
    <div class="location-list-card" data-site-list-id="${s.id}">
      <img src="${s.image}" alt="${s.name}" class="location-list-img">
      <div class="location-list-content">
        <h4 style="font-size: 13px; font-weight: 800; line-height: 1.3;">${s.name}</h4>
        <span style="font-size: 10px; color: var(--color-gray); margin-top: 1px; margin-bottom: 4px;">${s.district}</span>
        <span style="font-size: 11px; font-weight: 700; color: var(--color-gold);">${s.xpRange}</span>
      </div>
    </div>
  `).join(""),document.querySelectorAll("[data-site-list-id]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-site-list-id"),c=An.find(l=>l.id===a);c&&(E.activeSite=c,$("site-detail"))})})}function y5(n,e,t,r){const s=(t-n)*Math.PI/180,a=(r-e)*Math.PI/180,c=Math.sin(s/2)*Math.sin(s/2)+Math.cos(n*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(a/2)*Math.sin(a/2);return 6371*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))}function Gp(n){const e=document.getElementById("map-popup-card");e&&e.remove();const t=document.getElementById("map-popup-container");if(!t)return;const r=document.createElement("div");r.id="map-popup-card",r.className="map-popup-card";let i=n.distance||"0 km";yn?i="Distance: Permission required":Ps&&n.latitude&&n.longitude&&(i=y5(Ps.latitude,Ps.longitude,n.latitude,n.longitude).toFixed(1)+" km"),r.innerHTML=`
    <img src="${n.image}" alt="${n.name}" class="popup-site-img">
    <div class="popup-site-info">
      <h3 style="font-size: 15px; font-weight: 800; color: var(--color-charcoal);">${n.name}</h3>
      <div style="font-size: 11px; color: var(--color-gray); font-weight: 600; margin-top: 1px;">📍 ${n.district}</div>
      <span style="font-size: 10px; color: var(--color-gold); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; display: inline-block;">${n.category}</span>
      <span style="font-size: 11px; color: var(--color-charcoal); font-weight: 700; margin-top: 2px;">⭐ ${n.xpRange} • 📍 ${i}</span>
    </div>
    <button class="btn-primary" style="width: 90px; height: 36px; font-size: 11px; padding:0 8px; gap:4px;" id="map-popup-navigate-btn">
      <span>🚀 Navigate</span>
    </button>
  `,t.appendChild(r);const s=document.getElementById("map-popup-card");s&&s.style.setProperty("display","block","important"),document.getElementById("map-popup-navigate-btn").addEventListener("click",a=>{a.stopPropagation();const c=n.id;Qo("site-details",{id:c})}),r.addEventListener("click",a=>{a.stopPropagation();const c=n.id;Qo("site-details",{id:c})})}export{x8 as L,Ko as M,jp as W,$p as _};
