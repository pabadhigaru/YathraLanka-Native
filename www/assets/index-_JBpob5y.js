(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Xr={xp:0,rank:"None",medals:0,sitesVisited:0,quizzesPassed:0,permissions:{camera:!1,notifications:!1},role:"",interests:[],signedPetitions:[],donatedAmount:0,joinedEvents:[],unlockedCoupons:[],completedQuizzes:{},dwellTimeCompleted:{},verifiedPhotos:{}},Q2=[{rank:"Grass Toucher",range:[0,99],threshold:0},{rank:"Wanderer",range:[100,249],threshold:100},{rank:"Tuk Tuk Trailer",range:[250,499],threshold:250},{rank:"Magahoyanna",range:[500,999],threshold:500},{rank:"Island Explorer",range:[1e3,2e3],threshold:1e3},{rank:"Lanka Legend",range:[2e3,5e3],threshold:2e3}],X2=[{name:"Suranga M",points:5820,role:"Explorer",rank:"Lanka Legend"},{name:"Anjali R.",points:5330,role:"Volunteer",rank:"Lanka Legend"},{name:"Dilhani",points:3540,role:"Organizer",rank:"Island Explorer"},{name:"Mihiranga T.",points:1160,role:"Quiz Master",rank:"Island Explorer"}],Te=[{id:"mihintale",name:"Mihintale",district:"Anuradhapura District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"220km",openStatus:"Open now",description:"The sacred mountain peak revered as the birthplace of Buddhism in the country, marked by ancient monastic ruins, rock inscriptions, and pristine natural reserves.",image:"Element Pictures/Mihintale.JPG",latitude:8.3508,longitude:80.5186,referenceImage:"Element Pictures/Mihintale.JPG",quizzes:[{question:"What is the significance of the Mihintale rock peak in Sri Lankan history?",options:["It was the first capital of Sri Lanka","It is the site where Buddhism was introduced by Arahat Mahinda","It is a royal palace built by Kashyapa","It is a natural seaport of the ancient era"],correctIndex:1},{question:"Who was the reigning Sri Lankan king when Arahat Mahinda visited Mihintale?",options:["King Dutusgemunu","King Devanampiyatissa","King Kashyapa","King Vijayabahu I"],correctIndex:1},{question:"Which of the following ancient structures is famous for its elephant carvings at Mihintale?",options:["The Kantaka Cetiya Vahalkada","The Aradhana Gala peak","The Ambasthala Dagoba","The Sinha Pokuna (Lion Pond)"],correctIndex:0},{question:"What unique function did the Mihintale Hospital serve in antiquity?",options:["It was a military barracks","It is one of the oldest recorded hospitals in the world, with stone bath tubs for herbal treatment","It was a royal treasury","It was a university for astronomy"],correctIndex:1},{question:"What is the name of the famous massive pond situated halfway up the Mihintale mountain?",options:["Basawakkulama reservoir","Kaludiya Pokuna (Black Water Pond)","Abhayagiri pond","Tissa Wewa"],correctIndex:1}]},{id:"sigiriya",name:"Sigiriya",district:"Matale District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"160km",openStatus:"Open now",description:"An ancient rock fortress constructed by King Kashyapa, celebrated for its advanced water gardens, stunning fifth-century frescoes of celestial maidens, and the colossal lion paw gate.",image:"Element Pictures/Sigiriya-LionRock.jpg",latitude:7.957,longitude:80.7603,referenceImage:"Element Pictures/Sigiriya-LionRock.jpg",quizzes:[{question:"Which Sri Lankan king created the Sigiriya Rock Fortress?",options:["King Devanampiyatissa","King Dutugemunu","King Kashyapa","King Parakramabahu I"],correctIndex:2},{question:"Sigiriya is globally famous for which ancient artistic creations painted on the rock face?",options:["Carvings of war elephants","Fresco paintings of celestial maidens (Sigiri Apsaras)","Stone inscriptions in Brahmi script","Sculptures of sleeping lions"],correctIndex:1},{question:"What structure stands at the entrance to the final palace summit at Sigiriya?",options:["A massive bronze dragon gate","Colossal Lion Paws carved out of stone","Two giant cobra statues","A double-moat drawbridge"],correctIndex:1},{question:"What is the purpose of the highly polished 'Mirror Wall' at Sigiriya?",options:["To reflect sunrays and blind enemies","It was used by the king to view his reflection","It contains ancient graffiti poems written by visitors dating back to the 8th century","It was a military signaling device"],correctIndex:2},{question:"Which unique layout style is utilized in Sigiriya's royal pleasure gardens?",options:["Terraced mountain farming layout","Symmetrical hydraulic water gardens, boulders, and terraced gardens","Traditional dry zone scrub jungle","A maze of vertical underground caves"],correctIndex:1}]},{id:"ruwanweliseya",name:"Ruwanweliseya",district:"Anuradhapura District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"215km",openStatus:"Open now",description:"A monumental bubble-shaped stupa built by King Dutugemunu in the ancient capital Anuradhapura, venerated as a marvel of ancient civil engineering and Buddhist architecture.",image:"Element Pictures/Ruwanweliseya.jpg",latitude:8.3503,longitude:80.3962,referenceImage:"Element Pictures/Donations Stupa.jpg",quizzes:[{question:"Which ancient monarch initiated the construction of the sacred Ruwanweliseya Stupa?",options:["King Valagamba","King Devanampiyatissa","King Dutugemunu","King Mahasen"],correctIndex:2},{question:"What geometrical shape is the main dome of the Ruwanweliseya Stupa traditionally based on?",options:["Dhanyakara (Heap of Paddy shape)","Bubbulakara (Bubble shape)","Padmakara (Lotus shape)","Ghantakara (Bell shape)"],correctIndex:1},{question:"Which unique feature circles the base platform of the Ruwanweliseya stupa outer wall?",options:["A wall of brick-carved elephants standing side-by-side (Elephant Wall)","A deep circular moat filled with lotus flowers","A ring of bronze spears","Statues of ancient Buddhist kings"],correctIndex:0},{question:"Which architectural components are situated at the four cardinal entrances of the stupa?",options:["Fresco caves","Vahalkadas (decorative frontispieces)","Stone drawbridges","Hydraulic fountains"],correctIndex:1},{question:"What materials were historically used in the foundation of Ruwanweliseya to support its immense weight?",options:["Solid iron sheets and heavy granite blocks","Layers of crushed stones, clay, lead sheets, and a plaster mixture reinforced with animal hide","Hollow wooden logs filled with dry sand","Baked clay pots piled on top of each other"],correctIndex:1}]},{id:"temple_of_tooth",name:"Temple of the Tooth",district:"Kandy District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"115km",openStatus:"Open now",description:"The royal palace complex of Kandy housing the sacred tooth relic of Gautama Buddha, symbolizing sovereignty, rich Kandyan architecture, and royal heritage.",image:"Element Pictures/Temple of the tooth.jpg",latitude:7.2936,longitude:80.6413,referenceImage:"Element Pictures/Temple of the tooth.jpg",quizzes:[{question:"Where is the Sri Dalada Maligawa (Temple of the Sacred Tooth Relic) located?",options:["Anuradhapura","Polonnaruwa","Kandy","Jaffna"],correctIndex:2},{question:"Historically, what did possession of the Sacred Tooth Relic represent for Sri Lankan monarchs?",options:["Command over the merchant fleets","The divine right and legitimate authority to rule the country","Immunity from foreign invasions","Direct control over the pearl fisheries"],correctIndex:1},{question:"What is the name of the octagonal pavilion building situated at the front of the Kandy Temple?",options:["Pattirippuwa","Sandakada Pahana","Vahalkada","Gedige"],correctIndex:0},{question:"Which major annual cultural procession parading Kandy features the sacred casket?",options:["The Duruthu Perahera","The Esala Perahera","The Vesak Kalapaya","The Katharagama festival"],correctIndex:1},{question:"What decorative motif characterizes the surrounding protective walls of Kandy Lake and the temple moat?",options:["Lion posture carvings","Diyarella Bemma (Wave swell wall) and clouds pattern openings","Bronze spikes","Lotus petal panels"],correctIndex:1}]},{id:"dowa_rock_temple",name:"Dowa Rock Temple",district:"Badulla District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"180km",openStatus:"Open now",description:"A historic cave temple tucked in the Uva province hills, famous for its massive unfinished 38-foot tall standing Buddha statue carved directly into a sheer rock cliff.",image:"Element Pictures/Dowa Rock Temple.jpg",latitude:6.8202,longitude:81.0255,referenceImage:"Element Pictures/Dowa Rock Temple.jpg",quizzes:[{question:"What is the most prominent visual attraction at the Dowa Rock Temple?",options:["A golden reclining Buddha statue","A massive, unfinished 38-foot tall standing Buddha statue carved directly into the rock face","An underground crystal spring","A wall painted entirely with ancient map routes"],correctIndex:1},{question:"Which ancient monarch is locally credited with establishing the cave sanctuary at Dowa?",options:["King Dutugemunu","King Valagamba (Vattagamani Abhaya)","King Kashyapa","King Devanampiyatissa"],correctIndex:1},{question:"The rock carvings at Dowa show influences of which historical artistic school?",options:["Modern abstract sculpture","Late Anuradhapura and early Polonnaruwa regional rock art styles","Roman classical sculpting","Chola dynasty metalworks"],correctIndex:1},{question:"What unique reptile motif is painted on the ceiling of the shrine cave protecting the shrine?",options:["A three-headed cobra battling a giant viper","A giant sea turtle","A coiled python guardian","A green forest lizard"],correctIndex:0},{question:"Dowa Rock Temple is situated close to which popular hill station town in Badulla?",options:["Nuwara Eliya","Ella","Haputale","Bandarawela"],correctIndex:3}]},{id:"ritigala_monastery",name:"Ritigala Monastery",district:"Anuradhapura District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"195km",openStatus:"Open now",description:"An ancient mountain range housing the mysterious ruins of a forest-dwelling monastery, renowned for its austere architecture (Padhanaghara), beautiful stone paths, bathing pools, and herbal gardens.",image:"Element Pictures/Ritigala Monastery.jpg",latitude:8.1139,longitude:80.6558,referenceImage:"Element Pictures/Ritigala Monastery.jpg",quizzes:[{question:"What is unique about the ancient monastic structures (Padhanagharas) found at Ritigala?",options:["They are decorated with gold leaf and gems","They are completely devoid of any decorative carvings, prioritizing deep ascetic isolation and simple stone geometry","They are built on high stilts in dry mud","They have massive stupas surrounding them"],correctIndex:1},{question:"Which community of forest-dwelling monks historically inhabited the secluded peaks of Ritigala?",options:["The Tapovana monks (Pamsukulika fraternity)","Foreign Roman monks","Royal guards","Spice merchants"],correctIndex:0},{question:"What botanical anomaly makes the peak of Ritigala different from the surrounding dry zone plains?",options:["It has no vegetation due to volcanic activity","It contains a unique microclimate supporting wet-zone flora, medicinal herbs, and rare orchids on the misty summit","It grows only pine and fir trees","It is completely covered in swamp mangrove plants"],correctIndex:1},{question:"What impressive stone structures connect the ancient cells and platforms of Ritigala?",options:["Hanging vine suspension bridges","Meticulously paved stone-cut walkways and steps traversing the dense forest slopes","Hollow clay pipelines","Symmetrical marble corridors"],correctIndex:1},{question:"Which massive circular stone pond structure lies near the entrance of the Ritigala ruins?",options:["Banda Pokuna (large bathing pool with stone steps)","Sinha Pokuna","Kaludiya Pokuna","Tissa Wewa"],correctIndex:0}]},{id:"yudaganawa",name:"Yudaganawa",district:"Badulla District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"230km",openStatus:"Open now",description:"One of the largest colossal stupas in Sri Lanka, constructed in the 12th century, historical battlefield where King Dutugemunu and his brother Tissa fought for sovereignty.",image:"Element Pictures/Yudaganawa.jpg",latitude:6.7292,longitude:81.2831,referenceImage:"Element Pictures/Yudaganawa.jpg",quizzes:[{question:"What historic event occurred at the site of Yudaganawa in the Uva region?",options:["The final coronation of King Parakramabahu","The battlefield clash between brothers Prince Dutugemunu and Prince Tissa over the state crown","The signing of the Kandyan Convention","The first planting of the sacred Bo Tree"],correctIndex:1},{question:"What is unique about the structural layout of the Yudaganawa Stupa?",options:["It is built on a massive elevated wooden deck","It is a colossal, flat-topped semi-finished stupa (Kota Vehera style)","It is carved entirely out of a single piece of green rock","It has five rings of defensive moats surrounding it"],correctIndex:1},{question:"Yudaganawa is situated in the proximity of which historic town in the Moneragala/Badulla area?",options:["Buttala","Wellawaya","Ella","Mahiyanganaya"],correctIndex:0},{question:"What does the name 'Yudaganawa' literally translate to in Sinhala?",options:["Peaceful garden","Arena of Battle / Battleground","Temple of Sovereignty","Elephant lake"],correctIndex:1},{question:"Which of the following is found near Yudaganawa, representing ancient irrigation marvels?",options:["Yudaganawa Wewa (irrigation tank)","Senanayake Samudra","Kala Wewa","Parakrama Samudra"],correctIndex:0}]},{id:"pilikuttuwa",name:"Pilikuttuwa Temple",district:"Gampaha District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"35km",openStatus:"Open now",description:"An ancient forest cave sanctuary close to Colombo, famous for housing 99 drip-ledged caves, historic murals, wooden bridge over natural water flows, and pre-historic rock formations.",image:"Element Pictures/Pilikuttuwa Temple.jpg",latitude:6.846583,longitude:79.993333,referenceImage:"Element Pictures/Pilikuttuwa Temple.jpg",quizzes:[{question:"What is the primary natural and historical feature of the Pilikuttuwa Temple complex?",options:["A massive multi-tiered stone pagoda","A dense network of 99 drip-ledged rock shelter caves used by ancient monks","A natural volcanic geyser","A salt desert flat"],correctIndex:1},{question:"What famous historic bridge structure is preserved within the Pilikuttuwa sanctuary?",options:["A massive iron drawbridge","An ancient Dutch-era wooden canopy bridge spanning a stream","A marble arched bridge","A hanging bamboo rope bridge"],correctIndex:1},{question:"Which period of Sri Lankan art do the interior temple cave murals and frescoes at Pilikuttuwa belong to?",options:["Anuradhapura Period","Kandyan Kingdom and early colonial transitions","Modern contemporary art","Prehistoric stone paintings"],correctIndex:1},{question:"Which historic king took refuge in the caves of Pilikuttuwa during foreign invasions?",options:["King Kashyapa","King Valagamba","King Vijayabahu","King Dutugemunu"],correctIndex:1},{question:"What does the drip-ledge (Kataraya) on the caves of Pilikuttuwa do?",options:["It funnels drinking water into inside stone cups","It diverts monsoon rainwater away from entering the cave shelters, keeping the interior dry","It serves as a climbing groove for soldiers","It represents royal lineage crowns"],correctIndex:1}]},{id:"maligawila",name:"Maligawila Statue",district:"Moneragala District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"240km",openStatus:"Open now",description:"The home of a colossal 7th-century standing Buddha statue carved out of a single limestone rock, considered one of the absolute masterpieces of ancient sculpting.",image:"Element Pictures/maligawila buddha statue.jpg",latitude:6.7352,longitude:81.3392,referenceImage:"Element Pictures/maligawila buddha statue.jpg",quizzes:[{question:"What masterpiece of Sri Lankan limestone sculpture is found at Maligawila?",options:["A massive sleeping clay Buddha","A colossal 36-foot standing Buddha statue carved out of a single crystalline limestone block","A gold-plated stupa dome","A row of terracotta warriors"],correctIndex:1},{question:"Which ancient prince is historically credited with crafting this massive statue in the 7th century?",options:["Prince Kashyapa","Prince Agrabodhi","Prince Dutugemunu","Prince Valagamba"],correctIndex:1},{question:"Which neighboring site at Maligawila features a giant statue of Avalokiteshvara Bodhisattva?",options:["Dambegoda (Dambegoda Bodhisattva Statue)","Sigiriya rock","Buduruvagala caves","Aukana"],correctIndex:0},{question:"What state of preservation was the Maligawila Buddha found in during the late 20th century before restoration?",options:["Fully intact under a pristine dome","Fallen, broken into several massive segments in the dense jungle","Partially buried in beach sand dunes","Submerged in a large reservoir lake"],correctIndex:1},{question:"What architectural feature originally enclosed the massive standing Buddha statue?",options:["A circular brick and stone Image House (Patimaghara)","A simple open-air wood canopy","A series of deep stone trenches","A tall metal tower"],correctIndex:0}]},{id:"ibbankatuwa",name:"Ibbankatuwa Tombs",district:"Matale District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"150km",openStatus:"Open now",description:"A famous megalithic prehistoric burial ground dating back to the Iron Age, showcasing stone cist graves, ancient pottery, beads, and advanced early societal burials.",image:"Element Pictures/Ibbankatuwa Tombs.JPG",latitude:7.8596,longitude:80.6481,referenceImage:"Element Pictures/Ibbankatuwa Tombs.JPG",quizzes:[{question:"What unique prehistoric archaeological site is found at Ibbankatuwa?",options:["An ancient palace courtyard","A massive Megalithic Cist Burial Ground from the protohistoric Iron Age (dating back 2500+ years)","An ancient port for gem ships","A prehistoric tool-making cave"],correctIndex:1},{question:"What typical shape do the grave chambers (cists) at Ibbankatuwa have?",options:["Circular deep stone wells","Four granite slab walls forming a rectangular box capped with a large stone cover slab","Triangular pyramids built from clay","Hollow logs buried vertically"],correctIndex:1},{question:"Which of the following artifacts were found inside the cist tombs, proving ancient trade connections?",options:["Roman gold coins","Beads made of carnelian, onyx, agate, clay pottery urns containing ashes, and copper tools","Porcelain plates from China","Bronze guns"],correctIndex:1},{question:"The residents of the pre-historic Ibbankatuwa era primarily used which major metal classification?",options:["Only flint stone tools","Iron and Copper (Megalithic Iron Age culture)","Aluminum and Steel","Pure Platinum"],correctIndex:1},{question:"Near which major central province city is the Ibbankatuwa Megalithic Site situated?",options:["Kandy","Dambulla","Jaffna","Negombo"],correctIndex:1}]},{id:"galle_fort",name:"Galle Fort",district:"Galle District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"125km",openStatus:"Open now",description:"A coastal fortress built by the Portuguese, heavily fortified by the Dutch, blending European military architecture and South Asian traditions.",image:"Element Pictures/Galle Fort.jpg",latitude:6.0267,longitude:80.2167,referenceImage:"Element Pictures/Galle Fort.jpg",quizzes:[{question:"Which European nation first constructed fortifications in Galle before the Dutch expanded it?",options:["The British","The Portuguese","The French","The Spanish"],correctIndex:1},{question:"What is the famous white structure standing on the Utrecht Bastion overlooking the ocean in Galle Fort?",options:["The Clock Tower","The Galle Lighthouse","The Dutch Reformed Church dome","The Maritime Museum tower"],correctIndex:1},{question:"Galle Fort is recognized globally under which prestigious classification?",options:["A Biosphere Reserve","A UNESCO World Heritage Site","An industrial trade zone","A national sanctuary park"],correctIndex:1},{question:"What is the name of the narrow stone gateway featuring a coat of arms of the VOC Dutch East India Company?",options:["The Galle Old Gate","The Lighthouse gate","The Main Bastion drawbridge","The Sea Gate"],correctIndex:0},{question:"What architectural feature characterizes the traditional Dutch villa residential lanes in Galle Fort?",options:["Tall modern glass high-rises","Verandah houses, terracotta tile roofs, pillared arches, and paved stone inner courtyards","Circular wood log cabins","Subterranean cave rooms"],correctIndex:1}]}],J2=[{id:"social_media",name:"Social Media Presence",description:"Share about your visit",xp:5,duration:"10 mins",icon:"icons/social media presence icon.png"},{id:"local_food",name:"Local Food",description:"Try a traditional dish",xp:5,duration:"20 mins",icon:"icons/local food icon.png"},{id:"wandering_around",name:"Wandering Around",description:"Visit a nearby site",xp:5,duration:"20 mins",icon:"icons/Wandering Around icon.png"},{id:"wildlife_spotting",name:"Wildlife Spotting",description:"Spot and record an animal",xp:5,duration:"20 mins",icon:"icons/Wildlife Spotting icon.png"},{id:"eco_warrior",name:"Eco-Warrior",description:"Conserve the environment",xp:10,duration:"15 mins",icon:"icons/Eco Warrior icon.png"}],Z2=()=>{};var Wu={};/**
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
 */const Xh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},eg=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Jh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,h=l?n[i+2]:0,p=s>>2,g=(s&3)<<4|c>>4;let b=(c&15)<<2|h>>6,C=h&63;l||(C=64,a||(b=64)),r.push(t[p],t[g],t[b],t[C])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):eg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||g==null)throw new tg;const b=s<<2|c>>4;if(r.push(b),h!==64){const C=c<<4&240|h>>2;if(r.push(C),g!==64){const R=h<<6&192|g;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ng=function(n){const e=Xh(n);return Jh.encodeByteArray(e,!0)},pa=function(n){return ng(n).replace(/\./g,"")},Zh=function(n){try{return Jh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ig=()=>rg().__FIREBASE_DEFAULTS__,sg=()=>{if(typeof process>"u"||typeof Wu>"u")return;const n=Wu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ag=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zh(n[1]);return e&&JSON.parse(e)},qa=()=>{try{return Z2()||ig()||sg()||ag()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ed=n=>qa()?.emulatorHosts?.[n],og=n=>{const e=ed(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},td=()=>qa()?.config,nd=n=>qa()?.[`_${n}`];/**
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
 */class rd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function cg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[pa(JSON.stringify(t)),pa(JSON.stringify(a)),""].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function ug(){const n=qa()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function id(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function dg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pg(){const n=et();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function fg(){return!ug()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sd(){try{return typeof indexedDB=="object"}catch{return!1}}function ad(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}function gg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const mg="FirebaseError";class Bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=mg,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?yg(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Bt(i,c,r)}}function yg(n,e){return n.replace(vg,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vg=/\{\$([^}]+)}/g;function _g(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $n(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Ku(s)&&Ku(a)){if(!$n(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ku(n){return n!==null&&typeof n=="object"}/**
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
 */function ps(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Si(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function wg(n,e){const t=new Eg(n,e);return t.subscribe.bind(t)}class Eg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");bg(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Uo),i.error===void 0&&(i.error=Uo),i.complete===void 0&&(i.complete=Uo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Uo(){}/**
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
 */const Ig=1e3,Tg=2,Ag=4*60*60*1e3,xg=.5;function Yu(n,e=Ig,t=Tg){const r=e*Math.pow(t,n),i=Math.round(xg*r*(Math.random()-.5)*2);return Math.min(Ag,r+i)}/**
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
 */function fs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function od(n){return(await fetch(n,{credentials:"include"})).ok}class Ft{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rr="[DEFAULT]";/**
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
 */class Sg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new rd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cg(e))try{this.getOrInitializeService({instanceIdentifier:rr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rr){return this.instances.has(e)}getOptions(e=rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kg(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rr){return this.component?this.component.multipleInstances?e:rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kg(n){return n===rr?void 0:n}function Cg(n){return n.instantiationMode==="EAGER"}/**
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
 */class Pg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Sg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const Rg={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Lg=ue.INFO,Og={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Dg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Og[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ja{constructor(e){this.name=e,this._logLevel=Lg,this._logHandler=Dg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Ng=(n,e)=>e.some(t=>n instanceof t);let Qu,Xu;function Vg(){return Qu||(Qu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mg(){return Xu||(Xu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cd=new WeakMap,sc=new WeakMap,ld=new WeakMap,Bo=new WeakMap,Mc=new WeakMap;function Fg(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Vn(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&cd.set(t,n)}).catch(()=>{}),Mc.set(e,n),e}function Ug(n){if(sc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});sc.set(n,e)}let ac={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ld.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Bg(n){ac=n(ac)}function zg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(zo(this),e,...t);return ld.set(r,e.sort?e.sort():[e]),Vn(r)}:Mg().includes(n)?function(...e){return n.apply(zo(this),e),Vn(cd.get(this))}:function(...e){return Vn(n.apply(zo(this),e))}}function $g(n){return typeof n=="function"?zg(n):(n instanceof IDBTransaction&&Ug(n),Ng(n,Vg())?new Proxy(n,ac):n)}function Vn(n){if(n instanceof IDBRequest)return Fg(n);if(Bo.has(n))return Bo.get(n);const e=$g(n);return e!==n&&(Bo.set(n,e),Mc.set(e,n)),e}const zo=n=>Mc.get(n);function ud(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=Vn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Vn(a.result),l.oldVersion,l.newVersion,Vn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const qg=["get","getKey","getAll","getAllKeys","count"],jg=["put","add","delete","clear"],$o=new Map;function Ju(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($o.get(e))return $o.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=jg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qg.includes(t)))return;const s=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&l.done]))[0]};return $o.set(e,s),s}Bg(n=>({...n,get:(e,t,r)=>Ju(e,t)||n.get(e,t,r),has:(e,t)=>!!Ju(e,t)||n.has(e,t)}));/**
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
 */class Hg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Gg(n){return n.getComponent()?.type==="VERSION"}const oc="@firebase/app",Zu="0.15.0";/**
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
 */const hn=new ja("@firebase/app"),Wg="@firebase/app-compat",Kg="@firebase/analytics-compat",Yg="@firebase/analytics",Qg="@firebase/app-check-compat",Xg="@firebase/app-check",Jg="@firebase/auth",Zg="@firebase/auth-compat",e0="@firebase/database",t0="@firebase/data-connect",n0="@firebase/database-compat",r0="@firebase/functions",i0="@firebase/functions-compat",s0="@firebase/installations",a0="@firebase/installations-compat",o0="@firebase/messaging",c0="@firebase/messaging-compat",l0="@firebase/performance",u0="@firebase/performance-compat",h0="@firebase/remote-config",d0="@firebase/remote-config-compat",p0="@firebase/storage",f0="@firebase/storage-compat",g0="@firebase/firestore",m0="@firebase/ai",y0="@firebase/firestore-compat",v0="firebase",_0="12.15.0";/**
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
 */const cc="[DEFAULT]",w0={[oc]:"fire-core",[Wg]:"fire-core-compat",[Yg]:"fire-analytics",[Kg]:"fire-analytics-compat",[Xg]:"fire-app-check",[Qg]:"fire-app-check-compat",[Jg]:"fire-auth",[Zg]:"fire-auth-compat",[e0]:"fire-rtdb",[t0]:"fire-data-connect",[n0]:"fire-rtdb-compat",[r0]:"fire-fn",[i0]:"fire-fn-compat",[s0]:"fire-iid",[a0]:"fire-iid-compat",[o0]:"fire-fcm",[c0]:"fire-fcm-compat",[l0]:"fire-perf",[u0]:"fire-perf-compat",[h0]:"fire-rc",[d0]:"fire-rc-compat",[p0]:"fire-gcs",[f0]:"fire-gcs-compat",[g0]:"fire-fst",[y0]:"fire-fst-compat",[m0]:"fire-vertex","fire-js":"fire-js",[v0]:"fire-js-all"};/**
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
 */const ji=new Map,E0=new Map,lc=new Map;function e1(n,e){try{n.container.addComponent(e)}catch(t){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qt(n){const e=n.name;if(lc.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;lc.set(e,n);for(const t of ji.values())e1(t,n);for(const t of E0.values())e1(t,n);return!0}function vr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function vt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const b0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mn=new yr("app","Firebase",b0);/**
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
 */class I0{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const Jr=_0;function hd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:cc,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Mn.create("bad-app-name",{appName:String(i)});if(t||(t=td()),!t)throw Mn.create("no-options");const s=ji.get(i);if(s){if($n(t,s.options)&&$n(r,s.config))return s;throw Mn.create("duplicate-app",{appName:i})}const a=new Pg(i);for(const l of lc.values())a.addComponent(l);const c=new I0(t,r,a);return ji.set(i,c),c}function Ha(n=cc){const e=ji.get(n);if(!e&&n===cc&&td())return hd();if(!e)throw Mn.create("no-app",{appName:n});return e}function T0(){return Array.from(ji.values())}function xt(n,e,t){let r=w0[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}Qt(new Ft(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const A0="firebase-heartbeat-database",x0=1,Hi="firebase-heartbeat-store";let qo=null;function dd(){return qo||(qo=ud(A0,x0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Hi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Mn.create("idb-open",{originalErrorMessage:n.message})})),qo}async function S0(n){try{const t=(await dd()).transaction(Hi),r=await t.objectStore(Hi).get(pd(n));return await t.done,r}catch(e){if(e instanceof Bt)hn.warn(e.message);else{const t=Mn.create("idb-get",{originalErrorMessage:e?.message});hn.warn(t.message)}}}async function t1(n,e){try{const r=(await dd()).transaction(Hi,"readwrite");await r.objectStore(Hi).put(e,pd(n)),await r.done}catch(t){if(t instanceof Bt)hn.warn(t.message);else{const r=Mn.create("idb-set",{originalErrorMessage:t?.message});hn.warn(r.message)}}}function pd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const k0=1024,C0=30;class P0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new L0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=n1();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>C0){const i=O0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){hn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=n1(),{heartbeatsToSend:t,unsentEntries:r}=R0(this._heartbeatsCache.heartbeats),i=pa(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return hn.warn(e),""}}}function n1(){return new Date().toISOString().substring(0,10)}function R0(n,e=k0){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),r1(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),r1(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class L0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sd()?ad().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await S0(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return t1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return t1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function r1(n){return pa(JSON.stringify({version:2,heartbeats:n})).length}function O0(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function D0(n){Qt(new Ft("platform-logger",e=>new Hg(e),"PRIVATE")),Qt(new Ft("heartbeat",e=>new P0(e),"PRIVATE")),xt(oc,Zu,n),xt(oc,Zu,"esm2020"),xt("fire-js","")}D0("");var N0="firebase",V0="12.15.0";/**
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
 */xt(N0,V0,"app");const fd="@firebase/installations",Fc="0.6.22";/**
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
 */const gd=1e4,md=`w:${Fc}`,yd="FIS_v2",M0="https://firebaseinstallations.googleapis.com/v1",F0=60*60*1e3,U0="installations",B0="Installations";/**
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
 */const z0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},dr=new yr(U0,B0,z0);function vd(n){return n instanceof Bt&&n.code.includes("request-failed")}/**
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
 */function _d({projectId:n}){return`${M0}/projects/${n}/installations`}function wd(n){return{token:n.token,requestStatus:2,expiresIn:q0(n.expiresIn),creationTime:Date.now()}}async function Ed(n,e){const r=(await e.json()).error;return dr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function bd({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function $0(n,{refreshToken:e}){const t=bd(n);return t.append("Authorization",j0(e)),t}async function Id(n){const e=await n();return e.status>=500&&e.status<600?n():e}function q0(n){return Number(n.replace("s","000"))}function j0(n){return`${yd} ${n}`}/**
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
 */async function H0({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=_d(n),i=bd(n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:t,authVersion:yd,appId:n.appId,sdkVersion:md},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Id(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:wd(h.authToken)}}else throw await Ed("Create Installation",l)}/**
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
 */function Td(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function G0(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const W0=/^[cdef][\w-]{21}$/,uc="";function K0(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Y0(n);return W0.test(t)?t:uc}catch{return uc}}function Y0(n){return G0(n).substr(0,22)}/**
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
 */function Ga(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ad=new Map;function xd(n,e){const t=Ga(n);Sd(t,e),Q0(t,e)}function Sd(n,e){const t=Ad.get(n);if(t)for(const r of t)r(e)}function Q0(n,e){const t=X0();t&&t.postMessage({key:n,fid:e}),J0()}let sr=null;function X0(){return!sr&&"BroadcastChannel"in self&&(sr=new BroadcastChannel("[Firebase] FID Change"),sr.onmessage=n=>{Sd(n.data.key,n.data.fid)}),sr}function J0(){Ad.size===0&&sr&&(sr.close(),sr=null)}/**
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
 */const Z0="firebase-installations-database",em=1,pr="firebase-installations-store";let jo=null;function Uc(){return jo||(jo=ud(Z0,em,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(pr)}}})),jo}async function fa(n,e){const t=Ga(n),i=(await Uc()).transaction(pr,"readwrite"),s=i.objectStore(pr),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&xd(n,e.fid),e}async function kd(n){const e=Ga(n),r=(await Uc()).transaction(pr,"readwrite");await r.objectStore(pr).delete(e),await r.done}async function Wa(n,e){const t=Ga(n),i=(await Uc()).transaction(pr,"readwrite"),s=i.objectStore(pr),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!a||a.fid!==c.fid)&&xd(n,c.fid),c}/**
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
 */async function Bc(n){let e;const t=await Wa(n.appConfig,r=>{const i=tm(r),s=nm(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===uc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function tm(n){const e=n||{fid:K0(),registrationStatus:0};return Cd(e)}function nm(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(dr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=rm(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:im(n)}:{installationEntry:e}}async function rm(n,e){try{const t=await H0(n,e);return fa(n.appConfig,t)}catch(t){throw vd(t)&&t.customData.serverCode===409?await kd(n.appConfig):await fa(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function im(n){let e=await i1(n.appConfig);for(;e.registrationStatus===1;)await Td(100),e=await i1(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Bc(n);return r||t}return e}function i1(n){return Wa(n,e=>{if(!e)throw dr.create("installation-not-found");return Cd(e)})}function Cd(n){return sm(n)?{fid:n.fid,registrationStatus:0}:n}function sm(n){return n.registrationStatus===1&&n.registrationTime+gd<Date.now()}/**
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
 */async function am({appConfig:n,heartbeatServiceProvider:e},t){const r=om(n,t),i=$0(n,t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:md,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await Id(()=>fetch(r,c));if(l.ok){const h=await l.json();return wd(h)}else throw await Ed("Generate Auth Token",l)}function om(n,{fid:e}){return`${_d(n)}/${e}/authTokens:generate`}/**
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
 */async function zc(n,e=!1){let t;const r=await Wa(n.appConfig,s=>{if(!Pd(s))throw dr.create("not-registered");const a=s.authToken;if(!e&&um(a))return s;if(a.requestStatus===1)return t=cm(n,e),s;{if(!navigator.onLine)throw dr.create("app-offline");const c=dm(s);return t=lm(n,c),c}});return t?await t:r.authToken}async function cm(n,e){let t=await s1(n.appConfig);for(;t.authToken.requestStatus===1;)await Td(100),t=await s1(n.appConfig);const r=t.authToken;return r.requestStatus===0?zc(n,e):r}function s1(n){return Wa(n,e=>{if(!Pd(e))throw dr.create("not-registered");const t=e.authToken;return pm(t)?{...e,authToken:{requestStatus:0}}:e})}async function lm(n,e){try{const t=await am(n,e),r={...e,authToken:t};return await fa(n.appConfig,r),t}catch(t){if(vd(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await kd(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await fa(n.appConfig,r)}throw t}}function Pd(n){return n!==void 0&&n.registrationStatus===2}function um(n){return n.requestStatus===2&&!hm(n)}function hm(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+F0}function dm(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function pm(n){return n.requestStatus===1&&n.requestTime+gd<Date.now()}/**
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
 */async function fm(n){const e=n,{installationEntry:t,registrationPromise:r}=await Bc(e);return r?r.catch(console.error):zc(e).catch(console.error),t.fid}/**
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
 */async function gm(n,e=!1){const t=n;return await mm(t),(await zc(t,e)).token}async function mm(n){const{registrationPromise:e}=await Bc(n);e&&await e}/**
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
 */function ym(n){if(!n||!n.options)throw Ho("App Configuration");if(!n.name)throw Ho("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ho(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ho(n){return dr.create("missing-app-config-values",{valueName:n})}/**
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
 */const Rd="installations",vm="installations-internal",_m=n=>{const e=n.getProvider("app").getImmediate(),t=ym(e),r=vr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},wm=n=>{const e=n.getProvider("app").getImmediate(),t=vr(e,Rd).getImmediate();return{getId:()=>fm(t),getToken:i=>gm(t,i)}};function Em(){Qt(new Ft(Rd,_m,"PUBLIC")),Qt(new Ft(vm,wm,"PRIVATE"))}Em();xt(fd,Fc);xt(fd,Fc,"esm2020");/**
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
 */const ga="analytics",bm="firebase_id",Im="origin",Tm=60*1e3,Am="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$c="https://www.googletagmanager.com/gtag/js";/**
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
 */const st=new ja("@firebase/analytics");/**
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
 */const xm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Et=new yr("analytics","Analytics",xm);/**
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
 */function Sm(n){if(!n.startsWith($c)){const e=Et.create("invalid-gtag-resource",{gtagURL:n});return st.warn(e.message),""}return n}function Ld(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function km(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Cm(n,e){const t=km("firebase-js-sdk-policy",{createScriptURL:Sm}),r=document.createElement("script"),i=`${$c}?l=${n}&id=${e}`;r.src=t?t?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Pm(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Rm(n,e,t,r,i,s){const a=r[i];try{if(a)await e[a];else{const l=(await Ld(t)).find(h=>h.measurementId===i);l&&await e[l.appId]}}catch(c){st.error(c)}n("config",i,s)}async function Lm(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await Ld(t);for(const l of a){const h=c.find(g=>g.measurementId===l),p=h&&e[h.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){st.error(s)}}function Om(n,e,t,r){async function i(s,...a){try{if(s==="event"){const[c,l]=a;await Lm(n,e,t,c,l)}else if(s==="config"){const[c,l]=a;await Rm(n,e,t,r,c,l)}else if(s==="consent"){const[c,l]=a;n("consent",c,l)}else if(s==="get"){const[c,l,h]=a;n("get",c,l,h)}else if(s==="set"){const[c]=a;n("set",c)}else n(s,...a)}catch(c){st.error(c)}}return i}function Dm(n,e,t,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Om(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function Nm(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes($c)&&t.src.includes(n))return t;return null}/**
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
 */const Vm=30,Mm=1e3;class Fm{constructor(e={},t=Mm){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Od=new Fm;function Um(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Bm(n){const{appId:e,apiKey:t}=n,r={method:"GET",headers:Um(t)},i=Am.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let a="";try{const c=await s.json();c.error?.message&&(a=c.error.message)}catch{}throw Et.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function zm(n,e=Od,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw Et.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Et.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new jm;return setTimeout(async()=>{c.abort()},Tm),Dd({appId:r,apiKey:i,measurementId:s},a,c,e)}async function Dd(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Od){const{appId:s,measurementId:a}=n;try{await $m(r,e)}catch(c){if(a)return st.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:s,measurementId:a};throw c}try{const c=await Bm(n);return i.deleteThrottleMetadata(s),c}catch(c){const l=c;if(!qm(l)){if(i.deleteThrottleMetadata(s),a)return st.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:s,measurementId:a};throw c}const h=Number(l?.customData?.httpStatus)===503?Yu(t,i.intervalMillis,Vm):Yu(t,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:t+1};return i.setThrottleMetadata(s,p),st.debug(`Calling attemptFetch again in ${h} millis`),Dd(n,p,r,i)}}function $m(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(Et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function qm(n){if(!(n instanceof Bt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class jm{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Hm(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,a={...r,send_to:s};n("event",t,a)}}async function Gm(n,e,t,r){if(r&&r.global){const i={};for(const s of Object.keys(t))i[`user_properties.${s}`]=t[s];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}/**
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
 */async function Wm(){if(sd())try{await ad()}catch(n){return st.warn(Et.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return st.warn(Et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Km(n,e,t,r,i,s,a){const c=zm(n);c.then(b=>{t[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&st.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>st.error(b)),e.push(c);const l=Wm().then(b=>{if(b)return r.getId()}),[h,p]=await Promise.all([c,l]);Nm(s)||Cm(s,h.measurementId),i("js",new Date);const g=a?.config??{};return g[Im]="firebase",g.update=!0,p!=null&&(g[bm]=p),i("config",h.measurementId,g),h.measurementId}/**
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
 */class Ym{constructor(e){this.app=e}_delete(){return delete Or[this.app.options.appId],Promise.resolve()}}let Or={},a1=[];const o1={};let Go="dataLayer",Qm="gtag",c1,qc,l1=!1;function Xm(){const n=[];if(id()&&n.push("This is a browser extension environment."),gg()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Et.create("invalid-analytics-context",{errorInfo:e});st.warn(t.message)}}function Jm(n,e,t){Xm();const r=n.options.appId;if(!r)throw Et.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)st.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Et.create("no-api-key");if(Or[r]!=null)throw Et.create("already-exists",{id:r});if(!l1){Pm(Go);const{wrappedGtag:s,gtagCore:a}=Dm(Or,a1,o1,Go,Qm);qc=s,c1=a,l1=!0}return Or[r]=Km(n,a1,o1,e,c1,Go,t),new Ym(n)}function Zm(n=Ha()){n=Ge(n);const e=vr(n,ga);return e.isInitialized()?e.getImmediate():e6(n)}function e6(n,e={}){const t=vr(n,ga);if(t.isInitialized()){const i=t.getImmediate();if($n(e,t.getOptions()))return i;throw Et.create("already-initialized")}return t.initialize({options:e})}function t6(n,e,t){n=Ge(n),Gm(qc,Or[n.app.options.appId],e,t).catch(r=>st.error(r))}function n6(n,e,t,r){n=Ge(n),Hm(qc,Or[n.app.options.appId],e,t,r).catch(i=>st.error(i))}const u1="@firebase/analytics",h1="0.10.22";function r6(){Qt(new Ft(ga,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Jm(r,i,t)},"PUBLIC")),Qt(new Ft("analytics-internal",n,"PRIVATE")),xt(u1,h1),xt(u1,h1,"esm2020");function n(e){try{const t=e.getProvider(ga).getImmediate();return{logEvent:(r,i,s)=>n6(t,r,i,s),setUserProperties:(r,i)=>t6(t,r,i)}}catch(t){throw Et.create("interop-component-reg-failed",{reason:t})}}}r6();function Nd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const i6=Nd,Vd=new yr("auth","Firebase",Nd());/**
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
 */const ma=new ja("@firebase/auth");function s6(n,...e){ma.logLevel<=ue.WARN&&ma.warn(`Auth (${Jr}): ${n}`,...e)}function ta(n,...e){ma.logLevel<=ue.ERROR&&ma.error(`Auth (${Jr}): ${n}`,...e)}/**
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
 */function St(n,...e){throw Hc(n,...e)}function Mt(n,...e){return Hc(n,...e)}function jc(n,e,t){const r={...i6(),[e]:t};return new yr("auth","Firebase",r).create(e,{appName:n.name})}function cn(n){return jc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function a6(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&St(n,"argument-error"),jc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Vd.create(n,...e)}function ee(n,e,...t){if(!n)throw Hc(e,...t)}function sn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ta(e),new Error(e)}function dn(n,e){n||sn(e)}/**
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
 */function hc(){return typeof self<"u"&&self.location?.href||""}function o6(){return d1()==="http:"||d1()==="https:"}function d1(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function c6(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o6()||id()||"connection"in navigator)?navigator.onLine:!0}function l6(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class gs{constructor(e,t){this.shortDelay=e,this.longDelay=t,dn(t>e,"Short delay should be less than long delay!"),this.isMobile=lg()||dg()}get(){return c6()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gc(n,e){dn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Md{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const u6={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const h6=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],d6=new gs(3e4,6e4);function mn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function en(n,e,t,r,i={}){return Fd(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=ps({...a,key:n.config.apiKey}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...s};return hg()||(h.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&fs(n.emulatorConfig.host)&&(h.credentials="include"),Md.fetch()(await Ud(n,n.config.apiHost,t,c),h)})}async function Fd(n,e,t){n._canInitEmulator=!1;const r={...u6,...e};try{const i=new f6(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw js(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw js(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw js(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw js(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jc(n,p,h);St(n,p)}}catch(i){if(i instanceof Bt)throw i;St(n,"network-request-failed",{message:String(i)})}}async function ms(n,e,t,r,i={}){const s=await en(n,e,t,r,i);return"mfaPendingCredential"in s&&St(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ud(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?Gc(n.config,i):`${n.config.apiScheme}://${i}`;return h6.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function p6(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class f6{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),d6.get())})}}function js(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Mt(n,e,r);return i.customData._tokenResponse=t,i}function p1(n){return n!==void 0&&n.enterprise!==void 0}class g6{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return p6(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function m6(n,e){return en(n,"GET","/v2/recaptchaConfig",mn(n,e))}/**
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
 */async function y6(n,e){return en(n,"POST","/v1/accounts:delete",e)}async function ya(n,e){return en(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Li(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function v6(n,e=!1){const t=Ge(n),r=await t.getIdToken(e),i=Wc(r);ee(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:Li(Wo(i.auth_time)),issuedAtTime:Li(Wo(i.iat)),expirationTime:Li(Wo(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Wo(n){return Number(n)*1e3}function Wc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ta("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zh(t);return i?JSON.parse(i):(ta("Failed to decode base64 JWT payload"),null)}catch(i){return ta("Caught error parsing JWT payload as JSON",i?.toString()),null}}function f1(n){const e=Wc(n);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $r(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Bt&&_6(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _6({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class w6{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function va(n){const e=n.auth,t=await n.getIdToken(),r=await $r(n,ya(e,{idToken:t}));ee(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=i.providerUserInfo?.length?Bd(i.providerUserInfo):[],a=b6(n.providerData,s),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!a?.length,h=c?l:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dc(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function E6(n){const e=Ge(n);await va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function b6(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Bd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function I6(n,e){const t=await Fd(n,{},async()=>{const r=ps({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Ud(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&fs(n.emulatorConfig.host)&&(l.credentials="include"),Md.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function T6(n,e){return en(n,"POST","/v2/accounts:revokeToken",mn(n,e))}/**
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
 */class Dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):f1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=f1(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await I6(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Dr;return r&&(ee(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dr,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
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
 */function xn(n,e){ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Nt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new w6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await $r(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return v6(this,e)}reload(){return E6(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(cn(this.auth));const e=await this.getIdToken();return await $r(this,y6(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:g,emailVerified:b,isAnonymous:C,providerData:R,stsTokenManager:M}=t;ee(g&&M,e,"internal-error");const q=Dr.fromJSON(this.name,M);ee(typeof g=="string",e,"internal-error"),xn(r,e.name),xn(i,e.name),ee(typeof b=="boolean",e,"internal-error"),ee(typeof C=="boolean",e,"internal-error"),xn(s,e.name),xn(a,e.name),xn(c,e.name),xn(l,e.name),xn(h,e.name),xn(p,e.name);const X=new Nt({uid:g,auth:e,email:i,emailVerified:b,displayName:r,isAnonymous:C,photoURL:a,phoneNumber:s,tenantId:c,stsTokenManager:q,createdAt:h,lastLoginAt:p});return R&&Array.isArray(R)&&(X.providerData=R.map(O=>({...O}))),l&&(X._redirectEventId=l),X}static async _fromIdTokenResponse(e,t,r=!1){const i=new Dr;i.updateFromServerResponse(t);const s=new Nt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await va(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Bd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,c=new Dr;c.updateFromIdToken(r);const l=new Nt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new dc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,h),l}}/**
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
 */const g1=new Map;function an(n){dn(n instanceof Function,"Expected a class definition");let e=g1.get(n);return e?(dn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,g1.set(n,e),e)}/**
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
 */class zd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zd.type="NONE";const m1=zd;/**
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
 */function na(n,e,t){return`firebase:${n}:${e}:${t}`}class Nr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=na(this.userKey,i.apiKey,s),this.fullPersistenceKey=na("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ya(this.auth,{idToken:e}).catch(()=>{});return t?Nt._fromGetAccountInfoResponse(this.auth,t,e):null}return Nt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Nr(an(m1),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||an(m1);const a=na(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const p=await h._get(a);if(p){let g;if(typeof p=="string"){const b=await ya(e,{idToken:p}).catch(()=>{});if(!b)break;g=await Nt._fromGetAccountInfoResponse(e,b,p)}else g=Nt._fromJSON(e,p);h!==s&&(c=g),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Nr(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new Nr(s,e,r))}}/**
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
 */function y1(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($d(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wd(e))return"Blackberry";if(Kd(e))return"Webos";if(qd(e))return"Safari";if((e.includes("chrome/")||jd(e))&&!e.includes("edge/"))return"Chrome";if(Gd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function $d(n=et()){return/firefox\//i.test(n)}function qd(n=et()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jd(n=et()){return/crios\//i.test(n)}function Hd(n=et()){return/iemobile/i.test(n)}function Gd(n=et()){return/android/i.test(n)}function Wd(n=et()){return/blackberry/i.test(n)}function Kd(n=et()){return/webos/i.test(n)}function Kc(n=et()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function A6(n=et()){return Kc(n)&&!!window.navigator?.standalone}function x6(){return pg()&&document.documentMode===10}function Yd(n=et()){return Kc(n)||Gd(n)||Kd(n)||Wd(n)||/windows phone/i.test(n)||Hd(n)}/**
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
 */function Qd(n,e=[]){let t;switch(n){case"Browser":t=y1(et());break;case"Worker":t=`${y1(et())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Jr}/${r}`}/**
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
 */class S6{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function k6(n,e={}){return en(n,"GET","/v2/passwordPolicy",mn(n,e))}/**
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
 */const C6=6;class P6{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??C6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class R6{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new v1(this),this.idTokenSubscription=new v1(this),this.beforeStateQueue=new S6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=an(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Nr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ya(this,{idToken:e}),r=await Nt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(vt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===a)&&c?.user&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await va(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=l6()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(cn(this));const t=e?Ge(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await k6(this),t=new P6(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await T6(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&an(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await Nr.create(this,[an(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&s6(`Error while retrieving App Check token: ${e.error}`),e?.token}}function tn(n){return Ge(n)}class v1{constructor(e){this.auth=e,this.observer=null,this.addObserver=wg(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ka={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function L6(n){Ka=n}function Xd(n){return Ka.loadJS(n)}function O6(){return Ka.recaptchaEnterpriseScript}function D6(){return Ka.gapiScript}function N6(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class V6{constructor(){this.enterprise=new M6}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class M6{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const F6="recaptcha-enterprise",Jd="NO_RECAPTCHA",_1="onFirebaseAuthREInstanceReady";class kn{constructor(e){this.type=F6,this.auth=tn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{m6(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new g6(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function i(s,a,c){const l=window.grecaptcha;p1(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(Jd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new V6().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(async c=>{if(!t&&p1(window.grecaptcha)&&kn.scriptInjectionDeferred)await kn.scriptInjectionDeferred.promise,i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=O6();l.length!==0&&(l+=c+`&onload=${_1}`),kn.scriptInjectionDeferred=new rd,window[_1]=()=>{kn.scriptInjectionDeferred?.resolve()},Xd(l).then(()=>kn.scriptInjectionDeferred?.promise).then(()=>{i(c,s,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}kn.scriptInjectionDeferred=null;async function w1(n,e,t,r=!1,i=!1){const s=new kn(n);let a;if(i)a=Jd;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function _a(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await w1(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await w1(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
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
 */function Zd(n,e){const t=vr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if($n(s,e??{}))return i;St(i,"already-initialized")}return t.initialize({options:e})}function U6(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(an);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function B6(n,e,t){const r=tn(n);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ep(e),{host:a,port:c}=z6(e),l=c===null?"":`:${c}`,h={url:`${s}//${a}${l}/`},p=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee($n(h,r.config.emulator)&&$n(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,fs(a)?od(`${s}//${a}${l}`):$6()}function ep(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function z6(n){const e=ep(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:E1(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:E1(a)}}}function E1(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $6(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Yc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,t){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}async function q6(n,e){return en(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function j6(n,e){return ms(n,"POST","/v1/accounts:signInWithPassword",mn(n,e))}async function H6(n,e){return en(n,"POST","/v1/accounts:sendOobCode",mn(n,e))}async function G6(n,e){return H6(n,e)}/**
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
 */async function W6(n,e){return ms(n,"POST","/v1/accounts:signInWithEmailLink",mn(n,e))}async function K6(n,e){return ms(n,"POST","/v1/accounts:signInWithEmailLink",mn(n,e))}/**
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
 */class Gi extends Yc{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Gi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Gi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _a(e,t,"signInWithPassword",j6);case"emailLink":return W6(e,{email:this._email,oobCode:this._password});default:St(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _a(e,r,"signUpPassword",q6);case"emailLink":return K6(e,{idToken:t,email:this._email,oobCode:this._password});default:St(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vr(n,e){return ms(n,"POST","/v1/accounts:signInWithIdp",mn(n,e))}/**
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
 */const Y6="http://localhost";class fr extends Yc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):St("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const a=new fr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Vr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Vr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Vr(e,t)}buildRequest(){const e={requestUri:Y6,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ps(t)}return e}}/**
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
 */function Q6(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function X6(n){const e=xi(Si(n)).link,t=e?xi(Si(e)).deep_link_id:null,r=xi(Si(n)).deep_link_id;return(r?xi(Si(r)).link:null)||r||t||e||n}class Qc{constructor(e){const t=xi(Si(e)),r=t.apiKey??null,i=t.oobCode??null,s=Q6(t.mode??null);ee(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=X6(e);try{return new Qc(t)}catch{return null}}}/**
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
 */class Zr{constructor(){this.providerId=Zr.PROVIDER_ID}static credential(e,t){return Gi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Qc.parseLink(t);return ee(r,"argument-error"),Gi._fromEmailAndCode(e,r.code,r.tenantId)}}Zr.PROVIDER_ID="password";Zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ys extends Xc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cn extends ys{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
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
 */class rn extends ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return rn.credential(t,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
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
 */class Pn extends ys{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
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
 */class Rn extends ys{constructor(){super("twitter.com")}static credential(e,t){return fr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Rn.credential(t,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
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
 */async function J6(n,e){return ms(n,"POST","/v1/accounts:signUp",mn(n,e))}/**
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
 */class gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Nt._fromIdTokenResponse(e,r,i),a=b1(r);return new gr({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=b1(r);return new gr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function b1(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class wa extends Bt{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new wa(e,t,r,i)}}function tp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wa._fromErrorAndOperation(n,s,e,r):s})}async function Z6(n,e,t=!1){const r=await $r(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gr._forOperation(n,"link",r)}/**
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
 */async function e7(n,e,t=!1){const{auth:r}=n;if(vt(r.app))return Promise.reject(cn(r));const i="reauthenticate";try{const s=await $r(n,tp(r,i,e,n),t);ee(s.idToken,r,"internal-error");const a=Wc(s.idToken);ee(a,r,"internal-error");const{sub:c}=a;return ee(n.uid===c,r,"user-mismatch"),gr._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&St(r,"user-mismatch"),s}}/**
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
 */async function np(n,e,t=!1){if(vt(n.app))return Promise.reject(cn(n));const r="signIn",i=await tp(n,r,e),s=await gr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function t7(n,e){return np(tn(n),e)}/**
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
 */async function rp(n){const e=tn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function n7(n,e,t){const r=tn(n);await _a(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",G6)}async function r7(n,e,t){if(vt(n.app))return Promise.reject(cn(n));const r=tn(n),a=await _a(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",J6).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&rp(n),l}),c=await gr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function i7(n,e,t){return vt(n.app)?Promise.reject(cn(n)):t7(Ge(n),Zr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rp(n),r})}/**
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
 */async function s7(n,e){return en(n,"POST","/v1/accounts:update",e)}/**
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
 */async function a7(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ge(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await $r(r,s7(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function o7(n,e,t,r){return Ge(n).onIdTokenChanged(e,t,r)}function c7(n,e,t){return Ge(n).beforeAuthStateChanged(e,t)}function l7(n,e,t,r){return Ge(n).onAuthStateChanged(e,t,r)}function u7(n){return Ge(n).signOut()}const Ea="__sak";/**
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
 */class ip{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ea,"1"),this.storage.removeItem(Ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const h7=1e3,d7=10;class sp extends ip{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);x6()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,d7):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},h7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}sp.type="LOCAL";const ap=sp;/**
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
 */class op extends ip{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}op.type="SESSION";const cp=op;/**
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
 */function p7(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ya(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async h=>h(t.origin,s)),l=await p7(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ya.receivers=[];/**
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
 */function Jc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class f7{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const h=Jc("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const b=g;if(b.data.eventId===h)switch(b.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(b.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Gt(){return window}function g7(n){Gt().location.href=n}/**
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
 */function lp(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function m7(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function y7(){return navigator?.serviceWorker?.controller||null}function v7(){return lp()?self:null}/**
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
 */const up="firebaseLocalStorageDb",_7=1,ba="firebaseLocalStorage",hp="fbase_key";class vs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qa(n,e){return n.transaction([ba],e?"readwrite":"readonly").objectStore(ba)}function w7(){const n=indexedDB.deleteDatabase(up);return new vs(n).toPromise()}function dp(){const n=indexedDB.open(up,_7);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ba,{keyPath:hp})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ba)?e(r):(r.close(),await w7(),e(await dp()))})})}async function I1(n,e,t){const r=Qa(n,!0).put({[hp]:e,value:t});return new vs(r).toPromise()}async function E7(n,e){const t=Qa(n,!1).get(e),r=await new vs(t).toPromise();return r===void 0?null:r.value}function T1(n,e){const t=Qa(n,!0).delete(e);return new vs(t).toPromise()}const b7=800,I7=3;class pp{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=dp(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>I7)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return lp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ya._getInstance(v7()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await m7(),!this.activeServiceWorker)return;this.sender=new f7(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||y7()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await I1(e,Ea,"1"),await T1(e,Ea)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>I1(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>E7(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>T1(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qa(i,!1).getAll();return new vs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),b7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pp.type="LOCAL";const fp=pp;new gs(3e4,6e4);/**
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
 */function gp(n,e){return e?an(e):(ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Zc extends Yc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Vr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function T7(n){return np(n.auth,new Zc(n),n.bypassAuthState)}function A7(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),e7(t,new Zc(n),n.bypassAuthState)}async function x7(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),Z6(t,new Zc(n),n.bypassAuthState)}/**
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
 */class mp{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T7;case"linkViaPopup":case"linkViaRedirect":return x7;case"reauthViaPopup":case"reauthViaRedirect":return A7;default:St(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const S7=new gs(2e3,1e4);async function k7(n,e,t){if(vt(n.app))return Promise.reject(Mt(n,"operation-not-supported-in-this-environment"));const r=tn(n);a6(n,e,Xc);const i=gp(r,t);return new ar(r,"signInViaPopup",e,i).executeNotNull()}class ar extends mp{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,S7.get())};e()}}ar.currentPopupAction=null;/**
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
 */const C7="pendingRedirect",ra=new Map;class P7 extends mp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ra.get(this.auth._key());if(!e){try{const r=await R7(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ra.set(this.auth._key(),e)}return this.bypassAuthState||ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R7(n,e){const t=D7(e),r=O7(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function L7(n,e){ra.set(n._key(),e)}function O7(n){return an(n._redirectPersistence)}function D7(n){return na(C7,n.config.apiKey,n.name)}async function N7(n,e){return await tn(n)._initializationPromise,yp(n,e,!1)}async function yp(n,e,t=!1){if(vt(n.app))return Promise.reject(cn(n));const r=tn(n),i=gp(r,e),a=await new P7(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const V7=10*60*1e3;class M7{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!F7(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!vp(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Mt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=V7&&this.cachedEventUids.clear(),this.cachedEventUids.has(A1(e))}saveEventToCache(e){this.cachedEventUids.add(A1(e)),this.lastProcessedEventTime=Date.now()}}function A1(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function vp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function F7(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vp(n);default:return!1}}/**
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
 */async function U7(n,e={}){return en(n,"GET","/v1/projects",e)}/**
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
 */const B7=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,z7=/^https?/;async function $7(n){if(n.config.emulator)return;const{authorizedDomains:e}=await U7(n);for(const t of e)try{if(q7(t))return}catch{}St(n,"unauthorized-domain")}function q7(n){const e=hc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!z7.test(t))return!1;if(B7.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const j7=new gs(3e4,6e4);function x1(){const n=Gt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function H7(n){return new Promise((e,t)=>{function r(){x1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{x1(),t(Mt(n,"network-request-failed"))},timeout:j7.get()})}if(Gt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Gt().gapi?.load)r();else{const i=N6("iframefcb");return Gt()[i]=()=>{gapi.load?r():t(Mt(n,"network-request-failed"))},Xd(`${D6()}?onload=${i}`).catch(s=>t(s))}}).catch(e=>{throw ia=null,e})}let ia=null;function G7(n){return ia=ia||H7(n),ia}/**
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
 */const W7=new gs(5e3,15e3),K7="__/auth/iframe",Y7="emulator/auth/iframe",Q7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},X7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function J7(n){const e=n.config;ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gc(e,Y7):`https://${n.config.authDomain}/${K7}`,r={apiKey:e.apiKey,appName:n.name,v:Jr},i=X7.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ps(r).slice(1)}`}async function Z7(n){const e=await G7(n),t=Gt().gapi;return ee(t,n,"internal-error"),e.open({where:document.body,url:J7(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q7,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Mt(n,"network-request-failed"),c=Gt().setTimeout(()=>{s(a)},W7.get());function l(){Gt().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const e4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},t4=500,n4=600,r4="_blank",i4="http://localhost";class S1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s4(n,e,t,r=t4,i=n4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...e4,width:r.toString(),height:i.toString(),top:s,left:a},h=et().toLowerCase();t&&(c=jd(h)?r4:t),$d(h)&&(e=e||i4,l.scrollbars="yes");const p=Object.entries(l).reduce((b,[C,R])=>`${b}${C}=${R},`,"");if(A6(h)&&c!=="_self")return a4(e||"",c),new S1(null);const g=window.open(e||"",c,p);ee(g,n,"popup-blocked");try{g.focus()}catch{}return new S1(g)}function a4(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const o4="__/auth/handler",c4="emulator/auth/handler",l4=encodeURIComponent("fac");async function k1(n,e,t,r,i,s){ee(n.config.authDomain,n,"auth-domain-config-required"),ee(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Jr,eventId:i};if(e instanceof Xc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",_g(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof ys){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),h=l?`#${l4}=${encodeURIComponent(l)}`:"";return`${u4(n)}?${ps(c).slice(1)}${h}`}function u4({config:n}){return n.emulator?Gc(n,c4):`https://${n.authDomain}/${o4}`}/**
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
 */const Ko="webStorageSupport";class h4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cp,this._completeRedirectFn=yp,this._overrideRedirectResult=L7}async _openPopup(e,t,r,i){dn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await k1(e,t,r,hc(),i);return s4(e,s,Jc())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await k1(e,t,r,hc(),i);return g7(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Z7(e),r=new M7(e);return t.register("authEvent",i=>(ee(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ko,{type:Ko},i=>{const s=i?.[0]?.[Ko];s!==void 0&&t(!!s),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$7(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Yd()||qd()||Kc()}}const d4=h4;var C1="@firebase/auth",P1="1.13.3";/**
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
 */class p4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function f4(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function g4(n){Qt(new Ft("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qd(n)},h=new R6(r,i,s,l);return U6(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Qt(new Ft("auth-internal",e=>{const t=tn(e.getProvider("auth").getImmediate());return(r=>new p4(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(C1,P1,f4(n)),xt(C1,P1,"esm2020")}/**
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
 */const m4=5*60,y4=nd("authIdTokenMaxAge")||m4;let R1=null;const v4=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>y4)return;const i=t?.token;R1!==i&&(R1=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _4(n=Ha()){const e=vr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Zd(n,{popupRedirectResolver:d4,persistence:[fp,ap,cp]}),r=nd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=v4(s.toString());c7(t,a,()=>a(t.currentUser)),o7(t,c=>a(c))}}const i=ed("auth");return i&&B6(t,`http://${i}`),t}function w4(){return document.getElementsByTagName("head")?.[0]??document}L6({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Mt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",w4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});g4("Browser");var L1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fn,_p;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.F=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.D=function(A,I,S){for(var _=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)_[Ke-2]=arguments[Ke];return y.prototype[I].apply(A,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,w){w||(w=0);const A=Array(16);if(typeof y=="string")for(var I=0;I<16;++I)A[I]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(I=0;I<16;++I)A[I]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],I=E.g[2];let S=E.g[3],_;_=y+(S^w&(I^S))+A[0]+3614090360&4294967295,y=w+(_<<7&4294967295|_>>>25),_=S+(I^y&(w^I))+A[1]+3905402710&4294967295,S=y+(_<<12&4294967295|_>>>20),_=I+(w^S&(y^w))+A[2]+606105819&4294967295,I=S+(_<<17&4294967295|_>>>15),_=w+(y^I&(S^y))+A[3]+3250441966&4294967295,w=I+(_<<22&4294967295|_>>>10),_=y+(S^w&(I^S))+A[4]+4118548399&4294967295,y=w+(_<<7&4294967295|_>>>25),_=S+(I^y&(w^I))+A[5]+1200080426&4294967295,S=y+(_<<12&4294967295|_>>>20),_=I+(w^S&(y^w))+A[6]+2821735955&4294967295,I=S+(_<<17&4294967295|_>>>15),_=w+(y^I&(S^y))+A[7]+4249261313&4294967295,w=I+(_<<22&4294967295|_>>>10),_=y+(S^w&(I^S))+A[8]+1770035416&4294967295,y=w+(_<<7&4294967295|_>>>25),_=S+(I^y&(w^I))+A[9]+2336552879&4294967295,S=y+(_<<12&4294967295|_>>>20),_=I+(w^S&(y^w))+A[10]+4294925233&4294967295,I=S+(_<<17&4294967295|_>>>15),_=w+(y^I&(S^y))+A[11]+2304563134&4294967295,w=I+(_<<22&4294967295|_>>>10),_=y+(S^w&(I^S))+A[12]+1804603682&4294967295,y=w+(_<<7&4294967295|_>>>25),_=S+(I^y&(w^I))+A[13]+4254626195&4294967295,S=y+(_<<12&4294967295|_>>>20),_=I+(w^S&(y^w))+A[14]+2792965006&4294967295,I=S+(_<<17&4294967295|_>>>15),_=w+(y^I&(S^y))+A[15]+1236535329&4294967295,w=I+(_<<22&4294967295|_>>>10),_=y+(I^S&(w^I))+A[1]+4129170786&4294967295,y=w+(_<<5&4294967295|_>>>27),_=S+(w^I&(y^w))+A[6]+3225465664&4294967295,S=y+(_<<9&4294967295|_>>>23),_=I+(y^w&(S^y))+A[11]+643717713&4294967295,I=S+(_<<14&4294967295|_>>>18),_=w+(S^y&(I^S))+A[0]+3921069994&4294967295,w=I+(_<<20&4294967295|_>>>12),_=y+(I^S&(w^I))+A[5]+3593408605&4294967295,y=w+(_<<5&4294967295|_>>>27),_=S+(w^I&(y^w))+A[10]+38016083&4294967295,S=y+(_<<9&4294967295|_>>>23),_=I+(y^w&(S^y))+A[15]+3634488961&4294967295,I=S+(_<<14&4294967295|_>>>18),_=w+(S^y&(I^S))+A[4]+3889429448&4294967295,w=I+(_<<20&4294967295|_>>>12),_=y+(I^S&(w^I))+A[9]+568446438&4294967295,y=w+(_<<5&4294967295|_>>>27),_=S+(w^I&(y^w))+A[14]+3275163606&4294967295,S=y+(_<<9&4294967295|_>>>23),_=I+(y^w&(S^y))+A[3]+4107603335&4294967295,I=S+(_<<14&4294967295|_>>>18),_=w+(S^y&(I^S))+A[8]+1163531501&4294967295,w=I+(_<<20&4294967295|_>>>12),_=y+(I^S&(w^I))+A[13]+2850285829&4294967295,y=w+(_<<5&4294967295|_>>>27),_=S+(w^I&(y^w))+A[2]+4243563512&4294967295,S=y+(_<<9&4294967295|_>>>23),_=I+(y^w&(S^y))+A[7]+1735328473&4294967295,I=S+(_<<14&4294967295|_>>>18),_=w+(S^y&(I^S))+A[12]+2368359562&4294967295,w=I+(_<<20&4294967295|_>>>12),_=y+(w^I^S)+A[5]+4294588738&4294967295,y=w+(_<<4&4294967295|_>>>28),_=S+(y^w^I)+A[8]+2272392833&4294967295,S=y+(_<<11&4294967295|_>>>21),_=I+(S^y^w)+A[11]+1839030562&4294967295,I=S+(_<<16&4294967295|_>>>16),_=w+(I^S^y)+A[14]+4259657740&4294967295,w=I+(_<<23&4294967295|_>>>9),_=y+(w^I^S)+A[1]+2763975236&4294967295,y=w+(_<<4&4294967295|_>>>28),_=S+(y^w^I)+A[4]+1272893353&4294967295,S=y+(_<<11&4294967295|_>>>21),_=I+(S^y^w)+A[7]+4139469664&4294967295,I=S+(_<<16&4294967295|_>>>16),_=w+(I^S^y)+A[10]+3200236656&4294967295,w=I+(_<<23&4294967295|_>>>9),_=y+(w^I^S)+A[13]+681279174&4294967295,y=w+(_<<4&4294967295|_>>>28),_=S+(y^w^I)+A[0]+3936430074&4294967295,S=y+(_<<11&4294967295|_>>>21),_=I+(S^y^w)+A[3]+3572445317&4294967295,I=S+(_<<16&4294967295|_>>>16),_=w+(I^S^y)+A[6]+76029189&4294967295,w=I+(_<<23&4294967295|_>>>9),_=y+(w^I^S)+A[9]+3654602809&4294967295,y=w+(_<<4&4294967295|_>>>28),_=S+(y^w^I)+A[12]+3873151461&4294967295,S=y+(_<<11&4294967295|_>>>21),_=I+(S^y^w)+A[15]+530742520&4294967295,I=S+(_<<16&4294967295|_>>>16),_=w+(I^S^y)+A[2]+3299628645&4294967295,w=I+(_<<23&4294967295|_>>>9),_=y+(I^(w|~S))+A[0]+4096336452&4294967295,y=w+(_<<6&4294967295|_>>>26),_=S+(w^(y|~I))+A[7]+1126891415&4294967295,S=y+(_<<10&4294967295|_>>>22),_=I+(y^(S|~w))+A[14]+2878612391&4294967295,I=S+(_<<15&4294967295|_>>>17),_=w+(S^(I|~y))+A[5]+4237533241&4294967295,w=I+(_<<21&4294967295|_>>>11),_=y+(I^(w|~S))+A[12]+1700485571&4294967295,y=w+(_<<6&4294967295|_>>>26),_=S+(w^(y|~I))+A[3]+2399980690&4294967295,S=y+(_<<10&4294967295|_>>>22),_=I+(y^(S|~w))+A[10]+4293915773&4294967295,I=S+(_<<15&4294967295|_>>>17),_=w+(S^(I|~y))+A[1]+2240044497&4294967295,w=I+(_<<21&4294967295|_>>>11),_=y+(I^(w|~S))+A[8]+1873313359&4294967295,y=w+(_<<6&4294967295|_>>>26),_=S+(w^(y|~I))+A[15]+4264355552&4294967295,S=y+(_<<10&4294967295|_>>>22),_=I+(y^(S|~w))+A[6]+2734768916&4294967295,I=S+(_<<15&4294967295|_>>>17),_=w+(S^(I|~y))+A[13]+1309151649&4294967295,w=I+(_<<21&4294967295|_>>>11),_=y+(I^(w|~S))+A[4]+4149444226&4294967295,y=w+(_<<6&4294967295|_>>>26),_=S+(w^(y|~I))+A[11]+3174756917&4294967295,S=y+(_<<10&4294967295|_>>>22),_=I+(y^(S|~w))+A[2]+718787259&4294967295,I=S+(_<<15&4294967295|_>>>17),_=w+(S^(I|~y))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+S&4294967295}r.prototype.v=function(E,y){y===void 0&&(y=E.length);const w=y-this.blockSize,A=this.C;let I=this.h,S=0;for(;S<y;){if(I==0)for(;S<=w;)i(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<y;)if(A[I++]=E.charCodeAt(S++),I==this.blockSize){i(this,A),I=0;break}}else for(;S<y;)if(A[I++]=E[S++],I==this.blockSize){i(this,A),I=0;break}}this.h=I,this.o+=y},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var w=E.length-8;w<E.length;++w)E[w]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,w=0;w<4;++w)for(let A=0;A<32;A+=8)E[y++]=this.g[w]>>>A&255;return E};function s(E,y){var w=c;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function a(E,y){this.h=y;const w=[];let A=!0;for(let I=E.length-1;I>=0;I--){const S=E[I]|0;A&&S==y||(w[I]=S,A=!1)}this.g=w}var c={};function l(E){return-128<=E&&E<128?s(E,function(y){return new a([y|0],y<0?-1:0)}):new a([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(E<0)return q(h(-E));const y=[];let w=1;for(let A=0;E>=w;A++)y[A]=E/w|0,w*=4294967296;return new a(y,0)}function p(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return q(p(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(y,8));let A=g;for(let S=0;S<E.length;S+=8){var I=Math.min(8,E.length-S);const _=parseInt(E.substring(S,S+I),y);I<8?(I=h(Math.pow(y,I)),A=A.j(I).add(h(_))):(A=A.j(w),A=A.add(h(_)))}return A}var g=l(0),b=l(1),C=l(16777216);n=a.prototype,n.m=function(){if(M(this))return-q(this).m();let E=0,y=1;for(let w=0;w<this.g.length;w++){const A=this.i(w);E+=(A>=0?A:4294967296+A)*y,y*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(M(this))return"-"+q(this).toString(E);const y=h(Math.pow(E,6));var w=this;let A="";for(;;){const I=ae(w,y).g;w=X(w,I.j(y));let S=((w.g.length>0?w.g[0]:w.h)>>>0).toString(E);if(w=I,R(w))return S+A;for(;S.length<6;)S="0"+S;A=S+A}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function M(E){return E.h==-1}n.l=function(E){return E=X(this,E),M(E)?-1:R(E)?0:1};function q(E){const y=E.g.length,w=[];for(let A=0;A<y;A++)w[A]=~E.g[A];return new a(w,~E.h).add(b)}n.abs=function(){return M(this)?q(this):this},n.add=function(E){const y=Math.max(this.g.length,E.g.length),w=[];let A=0;for(let I=0;I<=y;I++){let S=A+(this.i(I)&65535)+(E.i(I)&65535),_=(S>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);A=_>>>16,S&=65535,_&=65535,w[I]=_<<16|S}return new a(w,w[w.length-1]&-2147483648?-1:0)};function X(E,y){return E.add(q(y))}n.j=function(E){if(R(this)||R(E))return g;if(M(this))return M(E)?q(this).j(q(E)):q(q(this).j(E));if(M(E))return q(this.j(q(E)));if(this.l(C)<0&&E.l(C)<0)return h(this.m()*E.m());const y=this.g.length+E.g.length,w=[];for(var A=0;A<2*y;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(let I=0;I<E.g.length;I++){const S=this.i(A)>>>16,_=this.i(A)&65535,Ke=E.i(I)>>>16,Ct=E.i(I)&65535;w[2*A+2*I]+=_*Ct,O(w,2*A+2*I),w[2*A+2*I+1]+=S*Ct,O(w,2*A+2*I+1),w[2*A+2*I+1]+=_*Ke,O(w,2*A+2*I+1),w[2*A+2*I+2]+=S*Ke,O(w,2*A+2*I+2)}for(E=0;E<y;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=y;E<2*y;E++)w[E]=0;return new a(w,0)};function O(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function $(E,y){this.g=E,this.h=y}function ae(E,y){if(R(y))throw Error("division by zero");if(R(E))return new $(g,g);if(M(E))return y=ae(q(E),y),new $(q(y.g),q(y.h));if(M(y))return y=ae(E,q(y)),new $(q(y.g),y.h);if(E.g.length>30){if(M(E)||M(y))throw Error("slowDivide_ only works with positive integers.");for(var w=b,A=y;A.l(E)<=0;)w=ge(w),A=ge(A);var I=fe(w,1),S=fe(A,1);for(A=fe(A,2),w=fe(w,2);!R(A);){var _=S.add(A);_.l(E)<=0&&(I=I.add(w),S=_),A=fe(A,1),w=fe(w,1)}return y=X(E,I.j(y)),new $(I,y)}for(I=g;E.l(y)>=0;){for(w=Math.max(1,Math.floor(E.m()/y.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),S=h(w),_=S.j(y);M(_)||_.l(E)>0;)w-=A,S=h(w),_=S.j(y);R(S)&&(S=b),I=I.add(S),E=X(E,_)}return new $(I,E)}n.B=function(E){return ae(this,E).h},n.and=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let A=0;A<y;A++)w[A]=this.i(A)&E.i(A);return new a(w,this.h&E.h)},n.or=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let A=0;A<y;A++)w[A]=this.i(A)|E.i(A);return new a(w,this.h|E.h)},n.xor=function(E){const y=Math.max(this.g.length,E.g.length),w=[];for(let A=0;A<y;A++)w[A]=this.i(A)^E.i(A);return new a(w,this.h^E.h)};function ge(E){const y=E.g.length+1,w=[];for(let A=0;A<y;A++)w[A]=E.i(A)<<1|E.i(A-1)>>>31;return new a(w,E.h)}function fe(E,y){const w=y>>5;y%=32;const A=E.g.length-w,I=[];for(let S=0;S<A;S++)I[S]=y>0?E.i(S+w)>>>y|E.i(S+w+1)<<32-y:E.i(S+w);return new a(I,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,_p=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,Fn=a}).apply(typeof L1<"u"?L1:typeof self<"u"?self:typeof window<"u"?window:{});var Hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wp,ki,Ep,sa,pc,bp,Ip,Tp;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hs=="object"&&Hs];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var k=o[m];if(!(k in d))break e;d=d[k]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(u){var d=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.push([m,u[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,d){return o.call.apply(o.bind,arguments)}function h(o,u,d){return h=l,h.apply(null,arguments)}function p(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function g(o,u){function d(){}d.prototype=u.prototype,o.Z=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(m,k,D){for(var z=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)z[oe-2]=arguments[oe];return u.prototype[k].apply(m,z)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function C(o){const u=o.length;if(u>0){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function R(o,u){for(let m=1;m<arguments.length;m++){const k=arguments[m];var d=typeof k;if(d=d!="object"?d:k?Array.isArray(k)?"array":d:"null",d=="array"||d=="object"&&typeof k.length=="number"){d=o.length||0;const D=k.length||0;o.length=d+D;for(let z=0;z<D;z++)o[d+z]=k[z]}else o.push(k)}}class M{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function q(o){a.setTimeout(()=>{throw o},0)}function X(){var o=E;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class O{constructor(){this.h=this.g=null}add(u,d){const m=$.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var $=new M(()=>new ae,o=>o.reset());class ae{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,fe=!1,E=new O,y=()=>{const o=Promise.resolve(void 0);ge=()=>{o.then(w)}};function w(){for(var o;o=X();){try{o.h.call(o.g)}catch(d){q(d)}var u=$;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}fe=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,u),a.removeEventListener("test",d,u)}catch{}return o}();function _(o){return/^[\s\xa0]*$/.test(o)}function Ke(o,u){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}g(Ke,I),Ke.prototype.init=function(o,u){const d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ke.Z.h.call(this)},Ke.prototype.h=function(){Ke.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ct="closure_listenable_"+(Math.random()*1e6|0),Ps=0;function Rs(o,u,d,m,k){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=k,this.key=++Ps,this.da=this.fa=!1}function Tr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function yn(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function Be(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function je(o){const u={};for(const d in o)u[d]=o[d];return u}const pt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pt(o,u){let d,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(d in m)o[d]=m[d];for(let D=0;D<pt.length;D++)d=pt[D],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function ft(o){this.src=o,this.g={},this.h=0}ft.prototype.add=function(o,u,d,m,k){const D=o.toString();o=this.g[D],o||(o=this.g[D]=[],this.h++);const z=vn(o,u,m,k);return z>-1?(u=o[z],d||(u.fa=!1)):(u=new Rs(u,this.src,D,!!m,k),u.fa=d,o.push(u)),u};function nt(o,u){const d=u.type;if(d in o.g){var m=o.g[d],k=Array.prototype.indexOf.call(m,u,void 0),D;(D=k>=0)&&Array.prototype.splice.call(m,k,1),D&&(Tr(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function vn(o,u,d,m){for(let k=0;k<o.length;++k){const D=o[k];if(!D.da&&D.listener==u&&D.capture==!!d&&D.ha==m)return k}return-1}var _n="closure_lm_"+(Math.random()*1e6|0),vo={};function Yl(o,u,d,m,k){if(Array.isArray(u)){for(let D=0;D<u.length;D++)Yl(o,u[D],d,m,k);return null}return d=Jl(d),o&&o[Ct]?o.J(u,d,c(m)?!!m.capture:!1,k):E2(o,u,d,!1,m,k)}function E2(o,u,d,m,k,D){if(!u)throw Error("Invalid event type");const z=c(k)?!!k.capture:!!k;let oe=wo(o);if(oe||(o[_n]=oe=new ft(o)),d=oe.add(u,d,m,z,D),d.proxy)return d;if(m=b2(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)S||(k=z),k===void 0&&(k=!1),o.addEventListener(u.toString(),m,k);else if(o.attachEvent)o.attachEvent(Xl(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function b2(){function o(d){return u.call(o.src,o.listener,d)}const u=I2;return o}function Ql(o,u,d,m,k){if(Array.isArray(u))for(var D=0;D<u.length;D++)Ql(o,u[D],d,m,k);else m=c(m)?!!m.capture:!!m,d=Jl(d),o&&o[Ct]?(o=o.i,D=String(u).toString(),D in o.g&&(u=o.g[D],d=vn(u,d,m,k),d>-1&&(Tr(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete o.g[D],o.h--)))):o&&(o=wo(o))&&(u=o.g[u.toString()],o=-1,u&&(o=vn(u,d,m,k)),(d=o>-1?u[o]:null)&&_o(d))}function _o(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Ct])nt(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(Xl(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=wo(u))?(nt(d,o),d.h==0&&(d.src=null,u[_n]=null)):Tr(o)}}}function Xl(o){return o in vo?vo[o]:vo[o]="on"+o}function I2(o,u){if(o.da)o=!0;else{u=new Ke(u,this);const d=o.listener,m=o.ha||o.src;o.fa&&_o(o),o=d.call(m,u)}return o}function wo(o){return o=o[_n],o instanceof ft?o:null}var Eo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Jl(o){return typeof o=="function"?o:(o[Eo]||(o[Eo]=function(u){return o.handleEvent(u)}),o[Eo])}function Ye(){A.call(this),this.i=new ft(this),this.M=this,this.G=null}g(Ye,A),Ye.prototype[Ct]=!0,Ye.prototype.removeEventListener=function(o,u,d,m){Ql(this,o,u,d,m)};function rt(o,u){var d,m=o.G;if(m)for(d=[];m;m=m.G)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new I(u,o);else if(u instanceof I)u.target=u.target||o;else{var k=u;u=new I(m,o),Pt(u,k)}k=!0;let D,z;if(d)for(z=d.length-1;z>=0;z--)D=u.g=d[z],k=Ls(D,m,!0,u)&&k;if(D=u.g=o,k=Ls(D,m,!0,u)&&k,k=Ls(D,m,!1,u)&&k,d)for(z=0;z<d.length;z++)D=u.g=d[z],k=Ls(D,m,!1,u)&&k}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const d=o.g[u];for(let m=0;m<d.length;m++)Tr(d[m]);delete o.g[u],o.h--}}this.G=null},Ye.prototype.J=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},Ye.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function Ls(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let k=!0;for(let D=0;D<u.length;++D){const z=u[D];if(z&&!z.da&&z.capture==d){const oe=z.listener,De=z.ha||z.src;z.fa&&nt(o.i,z),k=oe.call(De,m)!==!1&&k}}return k&&!m.defaultPrevented}function T2(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function Zl(o){o.g=T2(()=>{o.g=null,o.i&&(o.i=!1,Zl(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class A2 extends A{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Zl(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oi(o){A.call(this),this.h=o,this.g={}}g(oi,A);var eu=[];function tu(o){yn(o.g,function(u,d){this.g.hasOwnProperty(d)&&_o(u)},o),o.g={}}oi.prototype.N=function(){oi.Z.N.call(this),tu(this)},oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bo=a.JSON.stringify,x2=a.JSON.parse,S2=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function nu(){}function ru(){}var ci={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Io(){I.call(this,"d")}g(Io,I);function To(){I.call(this,"c")}g(To,I);var Jn={},iu=null;function Os(){return iu=iu||new Ye}Jn.Ia="serverreachability";function su(o){I.call(this,Jn.Ia,o)}g(su,I);function li(o){const u=Os();rt(u,new su(u))}Jn.STAT_EVENT="statevent";function au(o,u){I.call(this,Jn.STAT_EVENT,o),this.stat=u}g(au,I);function it(o){const u=Os();rt(u,new au(u,o))}Jn.Ja="timingevent";function ou(o,u){I.call(this,Jn.Ja,o),this.size=u}g(ou,I);function ui(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function hi(){this.g=!0}hi.prototype.ua=function(){this.g=!1};function k2(o,u,d,m,k,D){o.info(function(){if(o.g)if(D){var z="",oe=D.split("&");for(let ye=0;ye<oe.length;ye++){var De=oe[ye].split("=");if(De.length>1){const ze=De[0];De=De[1];const $t=ze.split("_");z=$t.length>=2&&$t[1]=="type"?z+(ze+"="+De+"&"):z+(ze+"=redacted&")}}}else z=null;else z=D;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+u+`
`+d+`
`+z})}function C2(o,u,d,m,k,D,z){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+u+`
`+d+`
`+D+" "+z})}function Ar(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+R2(o,d)+(m?" "+m:"")})}function P2(o,u){o.info(function(){return"TIMEOUT: "+u})}hi.prototype.info=function(){};function R2(o,u){if(!o.g)return u;if(!u)return null;try{const D=JSON.parse(u);if(D){for(o=0;o<D.length;o++)if(Array.isArray(D[o])){var d=D[o];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var k=m[0];if(k!="noop"&&k!="stop"&&k!="close")for(let z=1;z<m.length;z++)m[z]=""}}}}return bo(D)}catch{return u}}var Ds={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},cu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},lu;function Ao(){}g(Ao,nu),Ao.prototype.g=function(){return new XMLHttpRequest},lu=new Ao;function di(o){return encodeURIComponent(String(o))}function L2(o){var u=1;o=o.split(":");const d=[];for(;u>0&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function wn(o,u,d,m){this.j=o,this.i=u,this.l=d,this.S=m||1,this.V=new oi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new uu}function uu(){this.i=null,this.g="",this.h=!1}var hu={},xo={};function So(o,u,d){o.M=1,o.A=Vs(zt(u)),o.u=d,o.R=!0,du(o,null)}function du(o,u){o.F=Date.now(),Ns(o),o.B=zt(o.A);var d=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),Au(d.i,"t",m),o.C=0,d=o.j.L,o.h=new uu,o.g=qu(o.j,d?u:null,!o.u),o.P>0&&(o.O=new A2(h(o.Y,o,o.g),o.P)),u=o.V,d=o.g,m=o.ba;var k="readystatechange";Array.isArray(k)||(k&&(eu[0]=k.toString()),k=eu);for(let D=0;D<k.length;D++){const z=Yl(d,k[D],m||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.J?je(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),li(),k2(o.i,o.v,o.B,o.l,o.S,o.u)}wn.prototype.ba=function(o){o=o.target;const u=this.O;u&&In(o)==3?u.j():this.Y(o)},wn.prototype.Y=function(o){try{if(o==this.g)e:{const oe=In(this.g),De=this.g.ya(),ye=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||Lu(this.g)))){this.K||oe!=4||De==7||(De==8||ye<=0?li(3):li(2)),ko(this);var u=this.g.ca();this.X=u;var d=O2(this);if(this.o=u==200,C2(this.i,this.v,this.B,this.l,this.S,oe,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,k=this.g;if((m=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(m)){var D=m;break t}}D=null}if(o=D)Ar(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Co(this,o);else{this.o=!1,this.m=3,it(12),Zn(this),pi(this);break e}}if(this.R){o=!0;let ze;for(;!this.K&&this.C<d.length;)if(ze=D2(this,d),ze==xo){oe==4&&(this.m=4,it(14),o=!1),Ar(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==hu){this.m=4,it(15),Ar(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Ar(this.i,this.l,ze,null),Co(this,ze);if(pu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||d.length!=0||this.h.h||(this.m=1,it(16),o=!1),this.o=this.o&&o,!o)Ar(this.i,this.l,d,"[Invalid Chunked Response]"),Zn(this),pi(this);else if(d.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Mo(z),z.P=!0,it(11))}}else Ar(this.i,this.l,d,null),Co(this,d);oe==4&&Zn(this),this.o&&!this.K&&(oe==4?Uu(this.j,this):(this.o=!1,Ns(this)))}else K2(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),Zn(this),pi(this)}}}catch{}finally{}};function O2(o){if(!pu(o))return o.g.la();const u=Lu(o.g);if(u==="")return"";let d="";const m=u.length,k=In(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Zn(o),pi(o),"";o.h.i=new a.TextDecoder}for(let D=0;D<m;D++)o.h.h=!0,d+=o.h.i.decode(u[D],{stream:!(k&&D==m-1)});return u.length=0,o.h.g+=d,o.C=0,o.h.g}function pu(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function D2(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?xo:(d=Number(u.substring(d,m)),isNaN(d)?hu:(m+=1,m+d>u.length?xo:(u=u.slice(m,m+d),o.C=m+d,u)))}wn.prototype.cancel=function(){this.K=!0,Zn(this)};function Ns(o){o.T=Date.now()+o.H,fu(o,o.H)}function fu(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ui(h(o.aa,o),u)}function ko(o){o.D&&(a.clearTimeout(o.D),o.D=null)}wn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(P2(this.i,this.B),this.M!=2&&(li(),it(17)),Zn(this),this.m=2,pi(this)):fu(this,this.T-o)};function pi(o){o.j.I==0||o.K||Uu(o.j,o)}function Zn(o){ko(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,tu(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function Co(o,u){try{var d=o.j;if(d.I!=0&&(d.g==o||Po(d.h,o))){if(!o.L&&Po(d.h,o)&&d.I==3){try{var m=d.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)zs(d),Us(d);else break e;Vo(d),it(18)}}else d.xa=k[1],0<d.xa-d.K&&k[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ui(h(d.Va,d),6e3));yu(d.h)<=1&&d.ta&&(d.ta=void 0)}else tr(d,11)}else if((o.L||d.g==o)&&zs(d),!_(u))for(k=d.Ba.g.parse(u),u=0;u<k.length;u++){let ye=k[u];const ze=ye[0];if(!(ze<=d.K))if(d.K=ze,ye=ye[1],d.I==2)if(ye[0]=="c"){d.M=ye[1],d.ba=ye[2];const $t=ye[3];$t!=null&&(d.ka=$t,d.j.info("VER="+d.ka));const nr=ye[4];nr!=null&&(d.za=nr,d.j.info("SVER="+d.za));const Tn=ye[5];Tn!=null&&typeof Tn=="number"&&Tn>0&&(m=1.5*Tn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const An=o.g;if(An){const qs=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qs){var D=m.h;D.g||qs.indexOf("spdy")==-1&&qs.indexOf("quic")==-1&&qs.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ro(D,D.h),D.h=null))}if(m.G){const Fo=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;Fo&&(m.wa=Fo,ve(m.J,m.G,Fo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var z=o;if(m.na=$u(m,m.L?m.ba:null,m.W),z.L){vu(m.h,z);var oe=z,De=m.O;De&&(oe.H=De),oe.D&&(ko(oe),Ns(oe)),m.g=z}else Mu(m);d.i.length>0&&Bs(d)}else ye[0]!="stop"&&ye[0]!="close"||tr(d,7);else d.I==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?tr(d,7):No(d):ye[0]!="noop"&&d.l&&d.l.qa(ye),d.A=0)}}li(4)}catch{}}var N2=class{constructor(o,u){this.g=o,this.map=u}};function gu(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function mu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function yu(o){return o.h?1:o.g?o.g.size:0}function Po(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ro(o,u){o.g?o.g.add(u):o.h=u}function vu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}gu.prototype.cancel=function(){if(this.i=_u(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function _u(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.G);return u}return C(o.i)}var wu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function V2(o,u){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const m=o[d].indexOf("=");let k,D=null;m>=0?(k=o[d].substring(0,m),D=o[d].substring(m+1)):k=o[d],u(k,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function En(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof En?(this.l=o.l,fi(this,o.j),this.o=o.o,this.g=o.g,gi(this,o.u),this.h=o.h,Lo(this,xu(o.i)),this.m=o.m):o&&(u=String(o).match(wu))?(this.l=!1,fi(this,u[1]||"",!0),this.o=mi(u[2]||""),this.g=mi(u[3]||"",!0),gi(this,u[4]),this.h=mi(u[5]||"",!0),Lo(this,u[6]||"",!0),this.m=mi(u[7]||"")):(this.l=!1,this.i=new vi(null,this.l))}En.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(yi(u,Eu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(yi(u,Eu,!0),"@"),o.push(di(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(yi(d,d.charAt(0)=="/"?U2:F2,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",yi(d,z2)),o.join("")},En.prototype.resolve=function(o){const u=zt(this);let d=!!o.j;d?fi(u,o.j):d=!!o.o,d?u.o=o.o:d=!!o.g,d?u.g=o.g:d=o.u!=null;var m=o.h;if(d)gi(u,o.u);else if(d=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var k=u.h.lastIndexOf("/");k!=-1&&(m=u.h.slice(0,k+1)+m)}if(k=m,k==".."||k==".")m="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){m=k.lastIndexOf("/",0)==0,k=k.split("/");const D=[];for(let z=0;z<k.length;){const oe=k[z++];oe=="."?m&&z==k.length&&D.push(""):oe==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),m&&z==k.length&&D.push("")):(D.push(oe),m=!0)}m=D.join("/")}else m=k}return d?u.h=m:d=o.i.toString()!=="",d?Lo(u,xu(o.i)):d=!!o.m,d&&(u.m=o.m),u};function zt(o){return new En(o)}function fi(o,u,d){o.j=d?mi(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function gi(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Lo(o,u,d){u instanceof vi?(o.i=u,$2(o.i,o.l)):(d||(u=yi(u,B2)),o.i=new vi(u,o.l))}function ve(o,u,d){o.i.set(u,d)}function Vs(o){return ve(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function mi(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function yi(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,M2),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function M2(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Eu=/[#\/\?@]/g,F2=/[#\?:]/g,U2=/[#\?]/g,B2=/[#\?@]/g,z2=/#/g;function vi(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function er(o){o.g||(o.g=new Map,o.h=0,o.i&&V2(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=vi.prototype,n.add=function(o,u){er(this),this.i=null,o=xr(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function bu(o,u){er(o),u=xr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Iu(o,u){return er(o),u=xr(o,u),o.g.has(u)}n.forEach=function(o,u){er(this),this.g.forEach(function(d,m){d.forEach(function(k){o.call(u,k,m,this)},this)},this)};function Tu(o,u){er(o);let d=[];if(typeof u=="string")Iu(o,u)&&(d=d.concat(o.g.get(xr(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)d=d.concat(o[u]);return d}n.set=function(o,u){return er(this),this.i=null,o=xr(this,o),Iu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=Tu(this,o),o.length>0?String(o[0]):u):u};function Au(o,u,d){bu(o,u),d.length>0&&(o.i=null,o.g.set(xr(o,u),C(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var d=u[m];const k=di(d);d=Tu(this,d);for(let D=0;D<d.length;D++){let z=k;d[D]!==""&&(z+="="+di(d[D])),o.push(z)}}return this.i=o.join("&")};function xu(o){const u=new vi;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function xr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function $2(o,u){u&&!o.j&&(er(o),o.i=null,o.g.forEach(function(d,m){const k=m.toLowerCase();m!=k&&(bu(this,m),Au(this,k,d))},o)),o.j=u}function q2(o,u){const d=new hi;if(a.Image){const m=new Image;m.onload=p(bn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=p(bn,d,"TestLoadImage: error",!1,u,m),m.onabort=p(bn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=p(bn,d,"TestLoadImage: timeout",!1,u,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function j2(o,u){const d=new hi,m=new AbortController,k=setTimeout(()=>{m.abort(),bn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(D=>{clearTimeout(k),D.ok?bn(d,"TestPingServer: ok",!0,u):bn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(k),bn(d,"TestPingServer: error",!1,u)})}function bn(o,u,d,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(d)}catch{}}function H2(){this.g=new S2}function Oo(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Oo,nu),Oo.prototype.g=function(){return new Ms(this.i,this.h)};function Ms(o,u){Ye.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Ms,Ye),n=Ms.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,wi(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Su(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Su(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?_i(this):wi(this),this.readyState==3&&Su(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,_i(this))},n.Na=function(o){this.g&&(this.response=o,_i(this))},n.ga=function(){this.g&&_i(this)};function _i(o){o.readyState=4,o.l=null,o.j=null,o.B=null,wi(o)}n.setRequestHeader=function(o,u){this.A.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function wi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ms.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ku(o){let u="";return yn(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Do(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=ku(d),typeof o=="string"?d!=null&&di(d):ve(o,u,d))}function xe(o){Ye.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(xe,Ye);var G2=/^https?$/i,W2=["POST","PUT"];n=xe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():lu.g(),this.g.onreadystatechange=b(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(D){Cu(this,D);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)d.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),k=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(W2,u,void 0)>=0)||m||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of d)this.g.setRequestHeader(D,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(D){Cu(this,D)}};function Cu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,Pu(o),Fs(o)}function Pu(o){o.A||(o.A=!0,rt(o,"complete"),rt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,rt(this,"complete"),rt(this,"abort"),Fs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fs(this,!0)),xe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ru(this):this.Xa())},n.Xa=function(){Ru(this)};function Ru(o){if(o.h&&typeof s<"u"){if(o.v&&In(o)==4)setTimeout(o.Ca.bind(o),0);else if(rt(o,"readystatechange"),In(o)==4){o.h=!1;try{const D=o.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=D===0){let z=String(o.D).match(wu)[1]||null;!z&&a.self&&a.self.location&&(z=a.self.location.protocol.slice(0,-1)),m=!G2.test(z?z.toLowerCase():"")}d=m}if(d)rt(o,"complete"),rt(o,"success");else{o.o=6;try{var k=In(o)>2?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.ca()+"]",Pu(o)}}finally{Fs(o)}}}}function Fs(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,u||rt(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function In(o){return o.g?o.g.readyState:0}n.ca=function(){try{return In(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),x2(u)}};function Lu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function K2(o){const u={};o=(o.g&&In(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(_(o[m]))continue;var d=L2(o[m]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=u[k]||[];u[k]=D,D.push(d)}Be(u,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Ou(o){this.za=0,this.i=[],this.j=new hi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ei("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ei("baseRetryDelayMs",5e3,o),this.Za=Ei("retryDelaySeedMs",1e4,o),this.Ta=Ei("forwardChannelMaxRetries",2,o),this.va=Ei("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new gu(o&&o.concurrentRequestLimit),this.Ba=new H2,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ou.prototype,n.ka=8,n.I=1,n.connect=function(o,u,d,m){it(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=$u(this,null,this.W),Bs(this)};function No(o){if(Du(o),o.I==3){var u=o.V++,d=zt(o.J);if(ve(d,"SID",o.M),ve(d,"RID",u),ve(d,"TYPE","terminate"),bi(o,d),u=new wn(o,o.j,u),u.M=2,u.A=Vs(zt(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=u.A,d=!0),d||(u.g=qu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ns(u)}zu(o)}function Us(o){o.g&&(Mo(o),o.g.cancel(),o.g=null)}function Du(o){Us(o),o.v&&(a.clearTimeout(o.v),o.v=null),zs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Bs(o){if(!mu(o.h)&&!o.m){o.m=!0;var u=o.Ea;ge||y(),fe||(ge(),fe=!0),E.add(u,o),o.D=0}}function Y2(o,u){return yu(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ui(h(o.Ea,o,u),Bu(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const k=new wn(this,this.j,o);let D=this.o;if(this.U&&(D?(D=je(D),Pt(D,this.U)):D=this.U),this.u!==null||this.R||(k.J=D,D=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Vu(this,k,u),d=zt(this.J),ve(d,"RID",o),ve(d,"CVER",22),this.G&&ve(d,"X-HTTP-Session-Id",this.G),bi(this,d),D&&(this.R?u="headers="+di(ku(D))+"&"+u:this.u&&Do(d,this.u,D)),Ro(this.h,k),this.Ra&&ve(d,"TYPE","init"),this.S?(ve(d,"$req",u),ve(d,"SID","null"),k.U=!0,So(k,d,null)):So(k,d,u),this.I=2}}else this.I==3&&(o?Nu(this,o):this.i.length==0||mu(this.h)||Nu(this))};function Nu(o,u){var d;u?d=u.l:d=o.V++;const m=zt(o.J);ve(m,"SID",o.M),ve(m,"RID",d),ve(m,"AID",o.K),bi(o,m),o.u&&o.o&&Do(m,o.u,o.o),d=new wn(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Vu(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ro(o.h,d),So(d,m,u)}function bi(o,u){o.H&&yn(o.H,function(d,m){ve(u,m,d)}),o.l&&yn({},function(d,m){ve(u,m,d)})}function Vu(o,u,d){d=Math.min(o.i.length,d);const m=o.l?h(o.l.Ka,o.l,o):null;e:{var k=o.i;let oe=-1;for(;;){const De=["count="+d];oe==-1?d>0?(oe=k[0].g,De.push("ofs="+oe)):oe=0:De.push("ofs="+oe);let ye=!0;for(let ze=0;ze<d;ze++){var D=k[ze].g;const $t=k[ze].map;if(D-=oe,D<0)oe=Math.max(0,k[ze].g-100),ye=!1;else try{D="req"+D+"_"||"";try{var z=$t instanceof Map?$t:Object.entries($t);for(const[nr,Tn]of z){let An=Tn;c(Tn)&&(An=bo(Tn)),De.push(D+nr+"="+encodeURIComponent(An))}}catch(nr){throw De.push(D+"type="+encodeURIComponent("_badmap")),nr}}catch{m&&m($t)}}if(ye){z=De.join("&");break e}}z=void 0}return o=o.i.splice(0,d),u.G=o,z}function Mu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;ge||y(),fe||(ge(),fe=!0),E.add(u,o),o.A=0}}function Vo(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ui(h(o.Da,o),Bu(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Fu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ui(h(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),Us(this),Fu(this))};function Mo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Fu(o){o.g=new wn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=zt(o.na);ve(u,"RID","rpc"),ve(u,"SID",o.M),ve(u,"AID",o.K),ve(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&ve(u,"TO",o.ia),ve(u,"TYPE","xmlhttp"),bi(o,u),o.u&&o.o&&Do(u,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=Vs(zt(u)),d.u=null,d.R=!0,du(d,o)}n.Va=function(){this.C!=null&&(this.C=null,Us(this),Vo(this),it(19))};function zs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Uu(o,u){var d=null;if(o.g==u){zs(o),Mo(o),o.g=null;var m=2}else if(Po(o.h,u))d=u.G,vu(o.h,u),m=1;else return;if(o.I!=0){if(u.o)if(m==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var k=o.D;m=Os(),rt(m,new ou(m,d)),Bs(o)}else Mu(o);else if(k=u.m,k==3||k==0&&u.X>0||!(m==1&&Y2(o,u)||m==2&&Vo(o)))switch(d&&d.length>0&&(u=o.h,u.i=u.i.concat(d)),k){case 1:tr(o,5);break;case 4:tr(o,10);break;case 3:tr(o,6);break;default:tr(o,2)}}}function Bu(o,u){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*u}function tr(o,u){if(o.j.info("Error code "+u),u==2){var d=h(o.bb,o),m=o.Ua;const k=!m;m=new En(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||fi(m,"https"),Vs(m),k?q2(m.toString(),d):j2(m.toString(),d)}else it(2);o.I=0,o.l&&o.l.pa(u),zu(o),Du(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function zu(o){if(o.I=0,o.ja=[],o.l){const u=_u(o.h);(u.length!=0||o.i.length!=0)&&(R(o.ja,u),R(o.ja,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.oa()}}function $u(o,u,d){var m=d instanceof En?zt(d):new En(d);if(m.g!="")u&&(m.g=u+"."+m.g),gi(m,m.u);else{var k=a.location;m=k.protocol,u=u?u+"."+k.hostname:k.hostname,k=+k.port;const D=new En(null);m&&fi(D,m),u&&(D.g=u),k&&gi(D,k),d&&(D.h=d),m=D}return d=o.G,u=o.wa,d&&u&&ve(m,d,u),ve(m,"VER",o.ka),bi(o,m),m}function qu(o,u,d){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new xe(new Oo({ab:d})):new xe(o.ma),u.Fa(o.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ju(){}n=ju.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function $s(){}$s.prototype.g=function(o,u){return new gt(o,u)};function gt(o,u){Ye.call(this),this.g=new Ou(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!_(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Sr(this)}g(gt,Ye),gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){No(this.g)},gt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=bo(o),o=d);u.i.push(new N2(u.Ya++,o)),u.I==3&&Bs(u)},gt.prototype.N=function(){this.g.l=null,delete this.j,No(this.g),delete this.g,gt.Z.N.call(this)};function Hu(o){Io.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}g(Hu,Io);function Gu(){To.call(this),this.status=1}g(Gu,To);function Sr(o){this.g=o}g(Sr,ju),Sr.prototype.ra=function(){rt(this.g,"a")},Sr.prototype.qa=function(o){rt(this.g,new Hu(o))},Sr.prototype.pa=function(o){rt(this.g,new Gu)},Sr.prototype.oa=function(){rt(this.g,"b")},$s.prototype.createWebChannel=$s.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,Tp=function(){return new $s},Ip=function(){return Os()},bp=Jn,pc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ds.NO_ERROR=0,Ds.TIMEOUT=8,Ds.HTTP_ERROR=6,sa=Ds,cu.COMPLETE="complete",Ep=cu,ru.EventType=ci,ci.OPEN="a",ci.CLOSE="b",ci.ERROR="c",ci.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,ki=ru,xe.prototype.listenOnce=xe.prototype.K,xe.prototype.getLastError=xe.prototype.Ha,xe.prototype.getLastErrorCode=xe.prototype.ya,xe.prototype.getStatus=xe.prototype.ca,xe.prototype.getResponseJson=xe.prototype.La,xe.prototype.getResponseText=xe.prototype.la,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Fa,wp=xe}).apply(typeof Hs<"u"?Hs:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */class j{static FOLD_CASE=1;static LITERAL=2;static CLASS_NL=4;static DOT_NL=8;static ONE_LINE=16;static NON_GREEDY=32;static PERL_X=64;static UNICODE_GROUPS=128;static WAS_DOLLAR=256;static MATCH_NL=j.CLASS_NL|j.DOT_NL;static PERL=j.CLASS_NL|j.ONE_LINE|j.PERL_X|j.UNICODE_GROUPS;static POSIX=0;static UNANCHORED=0;static ANCHOR_START=1;static ANCHOR_BOTH=2}class P{static CODES=new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]);static toUpperCase(e){const t=String.fromCodePoint(e).toUpperCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toLowerCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){const t=String.fromCodePoint(e).toLowerCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toUpperCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}}class v{static CASE_ORBIT=new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]]);static C=[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]];static Cc=[[0,31,1],[127,159,1]];static Cf=[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]];static Co=[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]];static Cs=[[55296,57343,1]];static L=[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static foldL=[[837,837,1]];static Ll=[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]];static foldLl=[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]];static Lm=[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]];static Lo=[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static Lt=[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]];static foldLt=[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]];static Lu=[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]];static Upper=this.Lu;static foldLu=[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]];static M=[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]];static foldM=[[921,953,32],[8126,8126,1]];static Mc=[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]];static Me=[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]];static Mn=[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]];static foldMn=[[921,953,32],[8126,8126,1]];static N=[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]];static Nd=[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]];static Nl=[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]];static No=[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]];static P=[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]];static Pc=[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]];static Pd=[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]];static Pe=[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]];static Pf=[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]];static Pi=[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]];static Po=[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]];static Ps=[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]];static S=[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]];static Sc=[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]];static Sk=[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]];static Sm=[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]];static So=[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]];static Z=[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]];static Zl=[[8232,8232,1]];static Zp=[[8233,8233,1]];static Zs=[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]];static Adlam=[[125184,125259,1],[125264,125273,1],[125278,125279,1]];static Ahom=[[71424,71450,1],[71453,71467,1],[71472,71494,1]];static Anatolian_Hieroglyphs=[[82944,83526,1]];static Arabic=[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]];static Armenian=[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]];static Avestan=[[68352,68405,1],[68409,68415,1]];static Balinese=[[6912,6988,1],[6992,7038,1]];static Bamum=[[42656,42743,1],[92160,92728,1]];static Bassa_Vah=[[92880,92909,1],[92912,92917,1]];static Batak=[[7104,7155,1],[7164,7167,1]];static Bengali=[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]];static Bhaiksuki=[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]];static Bopomofo=[[746,747,1],[12549,12591,1],[12704,12735,1]];static Brahmi=[[69632,69709,1],[69714,69749,1],[69759,69759,1]];static Braille=[[10240,10495,1]];static Buginese=[[6656,6683,1],[6686,6687,1]];static Buhid=[[5952,5971,1]];static Canadian_Aboriginal=[[5120,5759,1],[6320,6389,1],[72368,72383,1]];static Carian=[[66208,66256,1]];static Caucasian_Albanian=[[66864,66915,1],[66927,66927,1]];static Chakma=[[69888,69940,1],[69942,69959,1]];static Cham=[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]];static Cherokee=[[5024,5109,1],[5112,5117,1],[43888,43967,1]];static Chorasmian=[[69552,69579,1]];static Common=[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]];static foldCommon=[[924,956,32]];static Coptic=[[994,1007,1],[11392,11507,1],[11513,11519,1]];static Cuneiform=[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]];static Cypriot=[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]];static Cypro_Minoan=[[77712,77810,1]];static Cyrillic=[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]];static Deseret=[[66560,66639,1]];static Devanagari=[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]];static Dives_Akuru=[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]];static Dogra=[[71680,71739,1]];static Duployan=[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]];static Egyptian_Hieroglyphs=[[77824,78933,1]];static Elbasan=[[66816,66855,1]];static Elymaic=[[69600,69622,1]];static Ethiopic=[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]];static Georgian=[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]];static Glagolitic=[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]];static Gothic=[[66352,66378,1]];static Grantha=[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]];static Greek=[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]];static foldGreek=[[181,837,656]];static Gujarati=[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]];static Gunjala_Gondi=[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]];static Gurmukhi=[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]];static Han=[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static Hangul=[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]];static Hanifi_Rohingya=[[68864,68903,1],[68912,68921,1]];static Hanunoo=[[5920,5940,1]];static Hatran=[[67808,67826,1],[67828,67829,1],[67835,67839,1]];static Hebrew=[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]];static Hiragana=[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]];static Imperial_Aramaic=[[67648,67669,1],[67671,67679,1]];static Inherited=[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]];static foldInherited=[[921,953,32],[8126,8126,1]];static Inscriptional_Pahlavi=[[68448,68466,1],[68472,68479,1]];static Inscriptional_Parthian=[[68416,68437,1],[68440,68447,1]];static Javanese=[[43392,43469,1],[43472,43481,1],[43486,43487,1]];static Kaithi=[[69760,69826,1],[69837,69837,1]];static Kannada=[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]];static Katakana=[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]];static Kawi=[[73472,73488,1],[73490,73530,1],[73534,73561,1]];static Kayah_Li=[[43264,43309,1],[43311,43311,1]];static Kharoshthi=[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]];static Khitan_Small_Script=[[94180,101120,6940],[101121,101589,1]];static Khmer=[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]];static Khojki=[[70144,70161,1],[70163,70209,1]];static Khudawadi=[[70320,70378,1],[70384,70393,1]];static Lao=[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]];static Latin=[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]];static Lepcha=[[7168,7223,1],[7227,7241,1],[7245,7247,1]];static Limbu=[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]];static Linear_A=[[67072,67382,1],[67392,67413,1],[67424,67431,1]];static Linear_B=[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]];static Lisu=[[42192,42239,1],[73648,73648,1]];static Lycian=[[66176,66204,1]];static Lydian=[[67872,67897,1],[67903,67903,1]];static Mahajani=[[69968,70006,1]];static Makasar=[[73440,73464,1]];static Malayalam=[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]];static Mandaic=[[2112,2139,1],[2142,2142,1]];static Manichaean=[[68288,68326,1],[68331,68342,1]];static Marchen=[[72816,72847,1],[72850,72871,1],[72873,72886,1]];static Masaram_Gondi=[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]];static Medefaidrin=[[93760,93850,1]];static Meetei_Mayek=[[43744,43766,1],[43968,44013,1],[44016,44025,1]];static Mende_Kikakui=[[124928,125124,1],[125127,125142,1]];static Meroitic_Cursive=[[68e3,68023,1],[68028,68047,1],[68050,68095,1]];static Meroitic_Hieroglyphs=[[67968,67999,1]];static Miao=[[93952,94026,1],[94031,94087,1],[94095,94111,1]];static Modi=[[71168,71236,1],[71248,71257,1]];static Mongolian=[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]];static Mro=[[92736,92766,1],[92768,92777,1],[92782,92783,1]];static Multani=[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]];static Myanmar=[[4096,4255,1],[43488,43518,1],[43616,43647,1]];static Nabataean=[[67712,67742,1],[67751,67759,1]];static Nag_Mundari=[[124112,124153,1]];static Nandinagari=[[72096,72103,1],[72106,72151,1],[72154,72164,1]];static New_Tai_Lue=[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]];static Newa=[[70656,70747,1],[70749,70753,1]];static Nko=[[1984,2042,1],[2045,2047,1]];static Nushu=[[94177,110960,16783],[110961,111355,1]];static Nyiakeng_Puachue_Hmong=[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]];static Ogham=[[5760,5788,1]];static Ol_Chiki=[[7248,7295,1]];static Old_Hungarian=[[68736,68786,1],[68800,68850,1],[68858,68863,1]];static Old_Italic=[[66304,66339,1],[66349,66351,1]];static Old_North_Arabian=[[68224,68255,1]];static Old_Permic=[[66384,66426,1]];static Old_Persian=[[66464,66499,1],[66504,66517,1]];static Old_Sogdian=[[69376,69415,1]];static Old_South_Arabian=[[68192,68223,1]];static Old_Turkic=[[68608,68680,1]];static Old_Uyghur=[[69488,69513,1]];static Oriya=[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]];static Osage=[[66736,66771,1],[66776,66811,1]];static Osmanya=[[66688,66717,1],[66720,66729,1]];static Pahawh_Hmong=[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]];static Palmyrene=[[67680,67711,1]];static Pau_Cin_Hau=[[72384,72440,1]];static Phags_Pa=[[43072,43127,1]];static Phoenician=[[67840,67867,1],[67871,67871,1]];static Psalter_Pahlavi=[[68480,68497,1],[68505,68508,1],[68521,68527,1]];static Rejang=[[43312,43347,1],[43359,43359,1]];static Runic=[[5792,5866,1],[5870,5880,1]];static Samaritan=[[2048,2093,1],[2096,2110,1]];static Saurashtra=[[43136,43205,1],[43214,43225,1]];static Sharada=[[70016,70111,1]];static Shavian=[[66640,66687,1]];static Siddham=[[71040,71093,1],[71096,71133,1]];static SignWriting=[[120832,121483,1],[121499,121503,1],[121505,121519,1]];static Sinhala=[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]];static Sogdian=[[69424,69465,1]];static Sora_Sompeng=[[69840,69864,1],[69872,69881,1]];static Soyombo=[[72272,72354,1]];static Sundanese=[[7040,7103,1],[7360,7367,1]];static Syloti_Nagri=[[43008,43052,1]];static Syriac=[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]];static Tagalog=[[5888,5909,1],[5919,5919,1]];static Tagbanwa=[[5984,5996,1],[5998,6e3,1],[6002,6003,1]];static Tai_Le=[[6480,6509,1],[6512,6516,1]];static Tai_Tham=[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]];static Tai_Viet=[[43648,43714,1],[43739,43743,1]];static Takri=[[71296,71353,1],[71360,71369,1]];static Tamil=[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]];static Tangsa=[[92784,92862,1],[92864,92873,1]];static Tangut=[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]];static Telugu=[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]];static Thaana=[[1920,1969,1]];static Thai=[[3585,3642,1],[3648,3675,1]];static Tibetan=[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]];static Tifinagh=[[11568,11623,1],[11631,11632,1],[11647,11647,1]];static Tirhuta=[[70784,70855,1],[70864,70873,1]];static Toto=[[123536,123566,1]];static Ugaritic=[[66432,66461,1],[66463,66463,1]];static Vai=[[42240,42539,1]];static Vithkuqi=[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]];static Wancho=[[123584,123641,1],[123647,123647,1]];static Warang_Citi=[[71840,71922,1],[71935,71935,1]];static Yezidi=[[69248,69289,1],[69291,69293,1],[69296,69297,1]];static Yi=[[40960,42124,1],[42128,42182,1]];static Zanabazar_Square=[[72192,72263,1]];static CATEGORIES=new Map([["C",v.C],["Cc",v.Cc],["Cf",v.Cf],["Co",v.Co],["Cs",v.Cs],["L",v.L],["Ll",v.Ll],["Lm",v.Lm],["Lo",v.Lo],["Lt",v.Lt],["Lu",v.Lu],["M",v.M],["Mc",v.Mc],["Me",v.Me],["Mn",v.Mn],["N",v.N],["Nd",v.Nd],["Nl",v.Nl],["No",v.No],["P",v.P],["Pc",v.Pc],["Pd",v.Pd],["Pe",v.Pe],["Pf",v.Pf],["Pi",v.Pi],["Po",v.Po],["Ps",v.Ps],["S",v.S],["Sc",v.Sc],["Sk",v.Sk],["Sm",v.Sm],["So",v.So],["Z",v.Z],["Zl",v.Zl],["Zp",v.Zp],["Zs",v.Zs]]);static SCRIPTS=new Map([["Adlam",v.Adlam],["Ahom",v.Ahom],["Anatolian_Hieroglyphs",v.Anatolian_Hieroglyphs],["Arabic",v.Arabic],["Armenian",v.Armenian],["Avestan",v.Avestan],["Balinese",v.Balinese],["Bamum",v.Bamum],["Bassa_Vah",v.Bassa_Vah],["Batak",v.Batak],["Bengali",v.Bengali],["Bhaiksuki",v.Bhaiksuki],["Bopomofo",v.Bopomofo],["Brahmi",v.Brahmi],["Braille",v.Braille],["Buginese",v.Buginese],["Buhid",v.Buhid],["Canadian_Aboriginal",v.Canadian_Aboriginal],["Carian",v.Carian],["Caucasian_Albanian",v.Caucasian_Albanian],["Chakma",v.Chakma],["Cham",v.Cham],["Cherokee",v.Cherokee],["Chorasmian",v.Chorasmian],["Common",v.Common],["Coptic",v.Coptic],["Cuneiform",v.Cuneiform],["Cypriot",v.Cypriot],["Cypro_Minoan",v.Cypro_Minoan],["Cyrillic",v.Cyrillic],["Deseret",v.Deseret],["Devanagari",v.Devanagari],["Dives_Akuru",v.Dives_Akuru],["Dogra",v.Dogra],["Duployan",v.Duployan],["Egyptian_Hieroglyphs",v.Egyptian_Hieroglyphs],["Elbasan",v.Elbasan],["Elymaic",v.Elymaic],["Ethiopic",v.Ethiopic],["Georgian",v.Georgian],["Glagolitic",v.Glagolitic],["Gothic",v.Gothic],["Grantha",v.Grantha],["Greek",v.Greek],["Gujarati",v.Gujarati],["Gunjala_Gondi",v.Gunjala_Gondi],["Gurmukhi",v.Gurmukhi],["Han",v.Han],["Hangul",v.Hangul],["Hanifi_Rohingya",v.Hanifi_Rohingya],["Hanunoo",v.Hanunoo],["Hatran",v.Hatran],["Hebrew",v.Hebrew],["Hiragana",v.Hiragana],["Imperial_Aramaic",v.Imperial_Aramaic],["Inherited",v.Inherited],["Inscriptional_Pahlavi",v.Inscriptional_Pahlavi],["Inscriptional_Parthian",v.Inscriptional_Parthian],["Javanese",v.Javanese],["Kaithi",v.Kaithi],["Kannada",v.Kannada],["Katakana",v.Katakana],["Kawi",v.Kawi],["Kayah_Li",v.Kayah_Li],["Kharoshthi",v.Kharoshthi],["Khitan_Small_Script",v.Khitan_Small_Script],["Khmer",v.Khmer],["Khojki",v.Khojki],["Khudawadi",v.Khudawadi],["Lao",v.Lao],["Latin",v.Latin],["Lepcha",v.Lepcha],["Limbu",v.Limbu],["Linear_A",v.Linear_A],["Linear_B",v.Linear_B],["Lisu",v.Lisu],["Lycian",v.Lycian],["Lydian",v.Lydian],["Mahajani",v.Mahajani],["Makasar",v.Makasar],["Malayalam",v.Malayalam],["Mandaic",v.Mandaic],["Manichaean",v.Manichaean],["Marchen",v.Marchen],["Masaram_Gondi",v.Masaram_Gondi],["Medefaidrin",v.Medefaidrin],["Meetei_Mayek",v.Meetei_Mayek],["Mende_Kikakui",v.Mende_Kikakui],["Meroitic_Cursive",v.Meroitic_Cursive],["Meroitic_Hieroglyphs",v.Meroitic_Hieroglyphs],["Miao",v.Miao],["Modi",v.Modi],["Mongolian",v.Mongolian],["Mro",v.Mro],["Multani",v.Multani],["Myanmar",v.Myanmar],["Nabataean",v.Nabataean],["Nag_Mundari",v.Nag_Mundari],["Nandinagari",v.Nandinagari],["New_Tai_Lue",v.New_Tai_Lue],["Newa",v.Newa],["Nko",v.Nko],["Nushu",v.Nushu],["Nyiakeng_Puachue_Hmong",v.Nyiakeng_Puachue_Hmong],["Ogham",v.Ogham],["Ol_Chiki",v.Ol_Chiki],["Old_Hungarian",v.Old_Hungarian],["Old_Italic",v.Old_Italic],["Old_North_Arabian",v.Old_North_Arabian],["Old_Permic",v.Old_Permic],["Old_Persian",v.Old_Persian],["Old_Sogdian",v.Old_Sogdian],["Old_South_Arabian",v.Old_South_Arabian],["Old_Turkic",v.Old_Turkic],["Old_Uyghur",v.Old_Uyghur],["Oriya",v.Oriya],["Osage",v.Osage],["Osmanya",v.Osmanya],["Pahawh_Hmong",v.Pahawh_Hmong],["Palmyrene",v.Palmyrene],["Pau_Cin_Hau",v.Pau_Cin_Hau],["Phags_Pa",v.Phags_Pa],["Phoenician",v.Phoenician],["Psalter_Pahlavi",v.Psalter_Pahlavi],["Rejang",v.Rejang],["Runic",v.Runic],["Samaritan",v.Samaritan],["Saurashtra",v.Saurashtra],["Sharada",v.Sharada],["Shavian",v.Shavian],["Siddham",v.Siddham],["SignWriting",v.SignWriting],["Sinhala",v.Sinhala],["Sogdian",v.Sogdian],["Sora_Sompeng",v.Sora_Sompeng],["Soyombo",v.Soyombo],["Sundanese",v.Sundanese],["Syloti_Nagri",v.Syloti_Nagri],["Syriac",v.Syriac],["Tagalog",v.Tagalog],["Tagbanwa",v.Tagbanwa],["Tai_Le",v.Tai_Le],["Tai_Tham",v.Tai_Tham],["Tai_Viet",v.Tai_Viet],["Takri",v.Takri],["Tamil",v.Tamil],["Tangsa",v.Tangsa],["Tangut",v.Tangut],["Telugu",v.Telugu],["Thaana",v.Thaana],["Thai",v.Thai],["Tibetan",v.Tibetan],["Tifinagh",v.Tifinagh],["Tirhuta",v.Tirhuta],["Toto",v.Toto],["Ugaritic",v.Ugaritic],["Vai",v.Vai],["Vithkuqi",v.Vithkuqi],["Wancho",v.Wancho],["Warang_Citi",v.Warang_Citi],["Yezidi",v.Yezidi],["Yi",v.Yi],["Zanabazar_Square",v.Zanabazar_Square]]);static FOLD_CATEGORIES=new Map([["L",v.foldL],["Ll",v.foldLl],["Lt",v.foldLt],["Lu",v.foldLu],["M",v.foldM],["Mn",v.foldMn]]);static FOLD_SCRIPT=new Map([["Common",v.foldCommon],["Greek",v.foldGreek],["Inherited",v.foldInherited]])}class se{static MAX_RUNE=1114111;static MAX_ASCII=127;static MAX_LATIN1=255;static MAX_BMP=65535;static MIN_FOLD=65;static MAX_FOLD=125251;static is32(e,t){let r=0,i=e.length;for(;r<i;){let s=r+Math.floor((i-r)/2),a=e[s];if(a[0]<=t&&t<=a[1])return(t-a[0])%a[2]===0;t<a[0]?i=s:r=s+1}return!1}static is(e,t){if(t<=this.MAX_LATIN1){for(let r of e)if(!(t>r[1]))return t<r[0]?!1:(t-r[0])%r[2]===0;return!1}return e.length>0&&t>=e[0][0]&&this.is32(e,t)}static isUpper(e){if(e<=this.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return this.is(v.Upper,e)}static isPrint(e){return e<=this.MAX_LATIN1?e>=32&&e<127||e>=161&&e!==173:this.is(v.L,e)||this.is(v.M,e)||this.is(v.N,e)||this.is(v.P,e)||this.is(v.S,e)}static simpleFold(e){if(v.CASE_ORBIT.has(e))return v.CASE_ORBIT.get(e);const t=P.toLowerCase(e);return t!==e?t:P.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e<0||t<0||e===t)return!0;if(e<=this.MAX_ASCII&&t<=this.MAX_ASCII)return P.CODES.get("A")<=e&&e<=P.CODES.get("Z")&&(e|=32),P.CODES.get("A")<=t&&t<=P.CODES.get("Z")&&(t|=32),e===t;for(let r=this.simpleFold(e);r!==e;r=this.simpleFold(r))if(r===t)return!0;return!1}}class pe{static METACHARACTERS="\\.+*?()|[]{}^$";static EMPTY_BEGIN_LINE=1;static EMPTY_END_LINE=2;static EMPTY_BEGIN_TEXT=4;static EMPTY_END_TEXT=8;static EMPTY_WORD_BOUNDARY=16;static EMPTY_NO_WORD_BOUNDARY=32;static EMPTY_ALL=-1;static emptyInts(){return[]}static isalnum(e){return P.CODES.get("0")<=e&&e<=P.CODES.get("9")||P.CODES.get("a")<=e&&e<=P.CODES.get("z")||P.CODES.get("A")<=e&&e<=P.CODES.get("Z")}static unhex(e){return P.CODES.get("0")<=e&&e<=P.CODES.get("9")?e-P.CODES.get("0"):P.CODES.get("a")<=e&&e<=P.CODES.get("f")?e-P.CODES.get("a")+10:P.CODES.get("A")<=e&&e<=P.CODES.get("F")?e-P.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(se.isPrint(e))this.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case P.CODES.get('"'):t+='\\"';break;case P.CODES.get("\\"):t+="\\\\";break;case P.CODES.get("	"):t+="\\t";break;case P.CODES.get(`
`):t+="\\n";break;case P.CODES.get("\r"):t+="\\r";break;case P.CODES.get("\b"):t+="\\b";break;case P.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){return String(e).split("").map(t=>t.codePointAt(0))}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return P.CODES.get("a")<=e&&e<=P.CODES.get("z")||P.CODES.get("A")<=e&&e<=P.CODES.get("Z")||P.CODES.get("0")<=e&&e<=P.CODES.get("9")||e===P.CODES.get("_")}static emptyOpContext(e,t){let r=0;return e<0&&(r|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),e===P.CODES.get(`
`)&&(r|=this.EMPTY_BEGIN_LINE),t<0&&(r|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),t===P.CODES.get(`
`)&&(r|=this.EMPTY_END_LINE),this.isWordRune(e)!==this.isWordRune(t)?r|=this.EMPTY_WORD_BOUNDARY:r|=this.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>this.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>se.MAX_BMP?2:1}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(e));{let t=[],r=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[r++]=s:s<2048?(t[r++]=s>>6|192,t[r++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[r++]=s>>18|240,t[r++]=s>>12&63|128,t[r++]=s>>6&63|128,t[r++]=s&63|128):(t[r++]=s>>12|224,t[r++]=s>>6&63|128,t[r++]=s&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(e));{let t=[],r=0,i=0;for(;r<e.length;){let s=e[r++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){let a=e[r++];t[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){let a=e[r++],c=e[r++],l=e[r++],h=((s&7)<<18|(a&63)<<12|(c&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(h&1023))}else{let a=e[r++],c=e[r++];t[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|c&63)}}return t.join("")}}}const Ap=(n=[],e=0)=>{const t={};for(let r=0;r<n.length;r++){const i=n[r],s=e+r;t[i]=s,t[s]=i}return Object.freeze(t)};class pn{static Encoding=Ap(["UTF_16","UTF_8"]);getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===pn.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===pn.Encoding.UTF_16}}class O1 extends pn{constructor(e=null){super(),this.bytes=e}getEncoding(){return pn.Encoding.UTF_8}asCharSequence(){return pe.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class E4 extends pn{constructor(e=null){super(),this.charSequence=e}getEncoding(){return pn.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(e=>e.codePointAt(0))}length(){return this.charSequence.length}}class Ia{static utf16(e){return new E4(e)}static utf8(e){return Array.isArray(e)?new O1(e):new O1(pe.stringToUtf8ByteArray(e))}}class Xa extends Error{constructor(e){super(e),this.name="RE2JSException"}}class Se extends Xa{constructor(e,t=null){let r=`error parsing regexp: ${e}`;t&&(r+=`: \`${t}\``),super(r),this.name="RE2JSSyntaxException",this.message=r,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}}class b4 extends Xa{constructor(e){super(e),this.name="RE2JSCompileException"}}class nn extends Xa{constructor(e){super(e),this.name="RE2JSGroupException"}}class I4 extends Xa{constructor(e){super(e),this.name="RE2JSFlagsException"}}class T4{static quoteReplacement(e){return e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(t=>{const r=t.codePointAt(0);return r===P.CODES["\\"]||r===P.CODES.$?`\\${t}`:t}).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,t instanceof pn?this.resetMatcherInput(t):Array.isArray(t)?this.resetMatcherInput(Ia.utf8(t)):this.resetMatcherInput(Ia.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new nn(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new nn(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}group(e=0){if(typeof e=="string"){const i=this.namedGroups[e];if(!Number.isFinite(i))throw new nn(`group '${e}' not found`);e=i}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new nn(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new nn("perhaps no match attempted");if(e===0||this.hasGroups)return;let t=this.groups[1]+1;t>this.matcherInputLength&&(t=this.matcherInputLength);const r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new nn("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,j.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,j.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new nn(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}return e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1]&&e++),this.genMatch(e,j.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=t,!0):!1}substring(e,t){return this.matcherInput.isUTF8Encoding()?pe.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const i=this.start(),s=this.end();return this.appendPos<i&&(r+=this.substring(this.appendPos,i)),this.appendPos=s,r+=t?this.appendReplacementInternalPerl(e):this.appendReplacementInternal(e),r}appendReplacementInternal(e){let t="",r=0;const i=e.length;for(let s=0;s<i-1;s++){if(e.codePointAt(s)===P.CODES.get("\\")){r<s&&(t+=e.substring(r,s)),s++,r=s;continue}if(e.codePointAt(s)===P.CODES.get("$")){let a=e.codePointAt(s+1);if(P.CODES.get("0")<=a&&a<=P.CODES.get("9")){let c=a-P.CODES.get("0");for(r<s&&(t+=e.substring(r,s)),s+=2;s<i&&(a=e.codePointAt(s),!(a<P.CODES.get("0")||a>P.CODES.get("9")||c*10+a-P.CODES.get("0")>this.patternGroupCount));s++)c=c*10+a-P.CODES.get("0");if(c>this.patternGroupCount)throw new nn(`n > number of groups: ${c}`);const l=this.group(c);l!==null&&(t+=l),r=s,s--;continue}else if(a===P.CODES.get("{")){r<s&&(t+=e.substring(r,s)),s++;let c=s+1;for(;c<e.length&&e.codePointAt(c)!==P.CODES.get("}")&&e.codePointAt(c)!==P.CODES.get(" ");)c++;if(c===e.length||e.codePointAt(c)!==P.CODES.get("}"))throw new nn("named capture group is missing trailing '}'");const l=e.substring(s+1,c);t+=this.group(l),r=c+1}}}return r<i&&(t+=e.substring(r,i)),t}appendReplacementInternalPerl(e){let t="",r=0;const i=e.length;for(let s=0;s<i-1;s++)if(e.codePointAt(s)===P.CODES.get("$")){let a=e.codePointAt(s+1);if(P.CODES.get("$")===a){r<s&&(t+=e.substring(r,s)),t+="$",s++,r=s+1;continue}else if(P.CODES.get("&")===a){r<s&&(t+=e.substring(r,s));const c=this.group(0);c!==null?t+=c:t+="$&",s++,r=s+1;continue}else if(P.CODES.get("1")<=a&&a<=P.CODES.get("9")){let c=a-P.CODES.get("0");for(r<s&&(t+=e.substring(r,s)),s+=2;s<i&&(a=e.codePointAt(s),!(a<P.CODES.get("0")||a>P.CODES.get("9")||c*10+a-P.CODES.get("0")>this.patternGroupCount));s++)c=c*10+a-P.CODES.get("0");if(c>this.patternGroupCount){t+=`$${c}`,r=s,s--;continue}const l=this.group(c);l!==null&&(t+=l),r=s,s--;continue}else if(a===P.CODES.get("<")){r<s&&(t+=e.substring(r,s)),s++;let c=s+1;for(;c<e.length&&e.codePointAt(c)!==P.CODES.get(">")&&e.codePointAt(c)!==P.CODES.get(" ");)c++;if(c===e.length||e.codePointAt(c)!==P.CODES.get(">")){t+=e.substring(s-1,c+1),r=c+1;continue}const l=e.substring(s+1,c);Object.prototype.hasOwnProperty.call(this.namedGroups,l)?t+=this.group(l):t+=`$<${l}>`,r=c+1}}return r<i&&(t+=e.substring(r,i)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let i="";for(this.reset();this.find()&&(i+=this.appendReplacement(e,r),!!t););return i+=this.appendTail(),i}}class Ln{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class A4 extends Ln{constructor(e,t=0,r=e.length){super(),this.bytes=e,this.start=t,this.end=r}step(e){if(e+=this.start,e>=this.end)return Ln.EOF();let t=this.bytes[e++]&255;return t&128?(t&224)===192?(t=t&31,e>=this.end?Ln.EOF():(t=t<<6|this.bytes[e++]&63,t<<3|2)):(t&240)===224?(t=t&15,e+1>=this.end?Ln.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|3)):(t=t&7,e+2>=this.end?Ln.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|4)):t<<3|1}index(e,t){t+=this.start;const r=this.indexOf(this.bytes,e.prefixUTF8,t);return r<0?r:r-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let i=e-1;if(t=this.bytes[i--],t>=128){let s=e-4;for(s<this.start&&(s=this.start);i>=s&&(this.bytes[i]&192)===128;)i--;i<this.start&&(i=this.start),t=this.step(i)>>3}}const r=e<this.end?this.step(e)>>3:-1;return pe.emptyOpContext(t,r)}indexOf(e,t,r=0){let i=t.length;if(i===0)return-1;let s=e.length;for(let a=r;a<=s-i;a++)for(let c=0;c<i&&e[a+c]===t[c];c++)if(c===i-1)return a;return-1}}class x4 extends Ln{constructor(e,t=0,r=e.length){super(),this.charSequence=e,this.start=t,this.end=r}step(e){if(e+=this.start,e<this.end){const t=this.charSequence.codePointAt(e);return t<<3|pe.charCount(t)}else return Ln.EOF()}index(e,t){t+=this.start;const r=this.charSequence.indexOf(e.prefix,t);return r<0?r:r-t}context(e){e+=this.start;const t=e>0&&e<=this.charSequence.length?this.charSequence.codePointAt(e-1):-1,r=e<this.charSequence.length?this.charSequence.codePointAt(e):-1;return pe.emptyOpContext(t,r)}}class ke{static fromUTF8(e,t=0,r=e.length){return new A4(e,t,r)}static fromUTF16(e,t=0,r=e.length){return new x4(e,t,r)}}class x{static Op=Ap(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]);static isPseudoOp(e){return e>=x.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===P.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new x(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t}constructor(e){this.op=e,this.flags=0,this.subs=x.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=x.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case x.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case x.Op.EMPTY_MATCH:e+="(?:)";break;case x.Op.STAR:case x.Op.PLUS:case x.Op.QUEST:case x.Op.REPEAT:{const t=this.subs[0];switch(t.op>x.Op.CAPTURE||t.op===x.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case x.Op.STAR:e+="*";break;case x.Op.PLUS:e+="+";break;case x.Op.QUEST:e+="?";break;case x.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&j.NON_GREEDY&&(e+="?");break}case x.Op.CONCAT:{for(let t of this.subs)t.op===x.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break}case x.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case x.Op.LITERAL:this.flags&j.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=pe.escapeRune(t);this.flags&j.FOLD_CASE&&(e+=")");break;case x.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case x.Op.ANY_CHAR:e+="(?s:.)";break;case x.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==x.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case x.Op.BEGIN_TEXT:e+="\\A";break;case x.Op.END_TEXT:this.flags&j.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case x.Op.BEGIN_LINE:e+="^";break;case x.Op.END_LINE:e+="$";break;case x.Op.WORD_BOUNDARY:e+="\\b";break;case x.Op.NO_WORD_BOUNDARY:e+="\\B";break;case x.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===se.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,i=this.runes[t+1]-1;e+=x.quoteIfHyphen(r),e+=pe.escapeRune(r),r!==i&&(e+="-",e+=x.quoteIfHyphen(i),e+=pe.escapeRune(i))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],i=this.runes[t+1];e+=x.quoteIfHyphen(r),e+=pe.escapeRune(r),r!==i&&(e+="-",e+=x.quoteIfHyphen(i),e+=pe.escapeRune(i))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===x.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof x)||this.op!==e.op)return!1;switch(this.op){case x.Op.END_TEXT:{if((this.flags&j.WAS_DOLLAR)!==(e.flags&j.WAS_DOLLAR))return!1;break}case x.Op.LITERAL:case x.Op.CHAR_CLASS:{if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break}case x.Op.ALTERNATE:case x.Op.CONCAT:{if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break}case x.Op.STAR:case x.Op.PLUS:case x.Op.QUEST:{if((this.flags&j.NON_GREEDY)!==(e.flags&j.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break}case x.Op.REPEAT:{if((this.flags&j.NON_GREEDY)!==(e.flags&j.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break}case x.Op.CAPTURE:{if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break}}return!0}}class K{static ALT=1;static ALT_MATCH=2;static CAPTURE=3;static EMPTY_WIDTH=4;static FAIL=5;static MATCH=6;static NOP=7;static RUNE=8;static RUNE1=9;static RUNE_ANY=10;static RUNE_ANY_NOT_NL=11;static isRuneOp(e){return K.RUNE<=e&&e<=K.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=pe.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=null}matchRune(e){if(this.runes.length===1){const i=this.runes[0];return this.arg&j.FOLD_CASE?se.equalsIgnoreCase(i,e):e===i}for(let i=0;i<this.runes.length&&i<=8;i+=2){if(e<this.runes[i])return!1;if(e<=this.runes[i+1])return!0}let t=0,r=this.runes.length/2|0;for(;t<r;){const i=t+((r-t)/2|0);if(this.runes[2*i]<=e){if(e<=this.runes[2*i+1])return!0;t=i+1}else r=i}return!1}toString(){switch(this.op){case K.ALT:return`alt -> ${this.out}, ${this.arg}`;case K.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case K.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case K.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case K.MATCH:return"match";case K.FAIL:return"fail";case K.NOP:return`nop -> ${this.out}`;case K.RUNE:return this.runes===null?"rune <null>":["rune ",K.escapeRunes(this.runes),this.arg&j.FOLD_CASE?"/i":""," -> ",this.out].join("");case K.RUNE1:return`rune1 ${K.escapeRunes(this.runes)} -> ${this.out}`;case K.RUNE_ANY:return`any -> ${this.out}`;case K.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}}class S4{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new K(e))}skipNop(e){let t=this.inst[e];for(;t.op===K.NOP||t.op===K.CAPTURE;)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!K.isRuneOp(t.op)||t.runes.length!==1)return[t.op===K.MATCH,e];for(;K.isRuneOp(t.op)&&t.runes.length===1&&!(t.arg&j.FOLD_CASE);)e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===K.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const r=this.inst[t];switch(r.op){case K.EMPTY_WIDTH:e|=r.arg;break;case K.FAIL:return-1;case K.CAPTURE:case K.NOP:break;default:break e}t=r.out}return e}next(e){const t=this.inst[e>>1];return e&1?t.arg:t.out}patch(e,t){for(;e!==0;){const r=this.inst[e>>1];e&1?(e=r.arg,r.arg=t):(e=r.out,r.out=t)}}append(e,t){if(e===0)return t;if(t===0)return e;let r=e;for(;;){const s=this.next(r);if(s===0)break;r=s}const i=this.inst[r>>1];return r&1?i.arg=t:i.out=t,e}toString(){let e="";for(let t=0;t<this.inst.length;t++){const r=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-r),e+=this.inst[t],e+=`
`}return e}}class Gs{constructor(e=0,t=0,r=!1){this.i=e,this.out=t,this.nullable=r}}class Oi{static ANY_RUNE_NOT_NL(){return[0,P.CODES.get(`
`)-1,P.CODES.get(`
`)+1,se.MAX_RUNE]}static ANY_RUNE(){return[0,se.MAX_RUNE]}static compileRegexp(e){const t=new Oi,r=t.compile(e);return t.prog.patch(r.out,t.newInst(K.MATCH).i),t.prog.start=r.i,t.prog}constructor(){this.prog=new S4,this.newInst(K.FAIL)}newInst(e){return this.prog.addInst(e),new Gs(this.prog.numInst()-1,0,!0)}nop(){const e=this.newInst(K.NOP);return e.out=e.i<<1,e}fail(){return new Gs}cap(e){const t=this.newInst(K.CAPTURE);return t.out=t.i<<1,this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Gs(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(K.ALT),i=this.prog.getInst(r.i);return i.out=e.i,i.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(K.ALT),i=this.prog.getInst(r.i);return t?(i.arg=e.i,r.out=r.i<<1):(i.out=e.i,r.out=r.i<<1|1),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(K.ALT),i=this.prog.getInst(r.i);return t?(i.arg=e.i,r.out=r.i<<1):(i.out=e.i,r.out=r.i<<1|1),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Gs(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(K.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=t.i<<1,t}rune(e,t){const r=this.newInst(K.RUNE);r.nullable=!1;const i=this.prog.getInst(r.i);return i.runes=e,t&=j.FOLD_CASE,(e.length!==1||se.simpleFold(e[0])===e[0])&&(t&=-2),i.arg=t,r.out=r.i<<1,!(t&j.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?i.op=K.RUNE1:e.length===2&&e[0]===0&&e[1]===se.MAX_RUNE?i.op=K.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===P.CODES.get(`
`)-1&&e[2]===P.CODES.get(`
`)+1&&e[3]===se.MAX_RUNE&&(i.op=K.RUNE_ANY_NOT_NL),r}compile(e){switch(e.op){case x.Op.NO_MATCH:return this.fail();case x.Op.EMPTY_MATCH:return this.nop();case x.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const i=this.rune([r],e.flags);t=t===null?i:this.cat(t,i)}return t}case x.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case x.Op.ANY_CHAR_NOT_NL:return this.rune(Oi.ANY_RUNE_NOT_NL(),0);case x.Op.ANY_CHAR:return this.rune(Oi.ANY_RUNE(),0);case x.Op.BEGIN_LINE:return this.empty(pe.EMPTY_BEGIN_LINE);case x.Op.END_LINE:return this.empty(pe.EMPTY_END_LINE);case x.Op.BEGIN_TEXT:return this.empty(pe.EMPTY_BEGIN_TEXT);case x.Op.END_TEXT:return this.empty(pe.EMPTY_END_TEXT);case x.Op.WORD_BOUNDARY:return this.empty(pe.EMPTY_WORD_BOUNDARY);case x.Op.NO_WORD_BOUNDARY:return this.empty(pe.EMPTY_NO_WORD_BOUNDARY);case x.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),i=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),i)}case x.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&j.NON_GREEDY)!==0);case x.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&j.NON_GREEDY)!==0);case x.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&j.NON_GREEDY)!==0);case x.Op.CONCAT:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const i=this.compile(r);t=t===null?i:this.cat(t,i)}return t}}case x.Op.ALTERNATE:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const i=this.compile(r);t=t===null?i:this.alt(t,i)}return t}}default:throw new b4("regexp: unhandled case in compile")}}}class Rt{static simplify(e){if(e===null)return null;switch(e.op){case x.Op.CAPTURE:case x.Op.CONCAT:case x.Op.ALTERNATE:{let t=e;for(let r=0;r<e.subs.length;r++){const i=e.subs[r],s=Rt.simplify(i);t===e&&s!==i&&(t=x.fromRegexp(e),t.runes=null,t.subs=e.subs.slice(0,e.subs.length)),t!==e&&(t.subs[r]=s)}return t}case x.Op.STAR:case x.Op.PLUS:case x.Op.QUEST:{const t=Rt.simplify(e.subs[0]);return Rt.simplify1(e.op,e.flags,t,e)}case x.Op.REPEAT:{if(e.min===0&&e.max===0)return new x(x.Op.EMPTY_MATCH);const t=Rt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Rt.simplify1(x.Op.STAR,e.flags,t,null);if(e.min===1)return Rt.simplify1(x.Op.PLUS,e.flags,t,null);const i=new x(x.Op.CONCAT),s=[];for(let a=0;a<e.min-1;a++)s.push(t);return s.push(Rt.simplify1(x.Op.PLUS,e.flags,t,null)),i.subs=s.slice(0),i}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let i=0;i<e.min;i++)r.push(t)}if(e.max>e.min){let i=Rt.simplify1(x.Op.QUEST,e.flags,t,null);for(let s=e.min+1;s<e.max;s++){const a=new x(x.Op.CONCAT);a.subs=[t,i],i=Rt.simplify1(x.Op.QUEST,e.flags,a,null)}if(r===null)return i;r.push(i)}if(r!==null){const i=new x(x.Op.CONCAT);return i.subs=r.slice(0),i}return new x(x.Op.NO_MATCH)}}return e}static simplify1(e,t,r,i){return r.op===x.Op.EMPTY_MATCH||e===r.op&&(t&j.NON_GREEDY)===(r.flags&j.NON_GREEDY)?r:(i!==null&&i.op===e&&(i.flags&j.NON_GREEDY)===(t&j.NON_GREEDY)&&r===i.subs[0]||(i=new x(e),i.flags=t,i.subs=[r]),i)}}class de{constructor(e,t){this.sign=e,this.cls=t}}const D1=[48,57],N1=[9,10,12,13,32,32],V1=[48,57,65,90,95,95,97,122],M1=new Map([["\\d",new de(1,D1)],["\\D",new de(-1,D1)],["\\s",new de(1,N1)],["\\S",new de(-1,N1)],["\\w",new de(1,V1)],["\\W",new de(-1,V1)]]),F1=[48,57,65,90,97,122],U1=[65,90,97,122],B1=[0,127],z1=[9,9,32,32],$1=[0,31,127,127],q1=[48,57],j1=[33,126],H1=[97,122],G1=[32,126],W1=[33,47,58,64,91,96,123,126],K1=[9,13,32,32],Y1=[65,90],Q1=[48,57,65,90,95,95,97,122],X1=[48,57,65,70,97,102],J1=new Map([["[:alnum:]",new de(1,F1)],["[:^alnum:]",new de(-1,F1)],["[:alpha:]",new de(1,U1)],["[:^alpha:]",new de(-1,U1)],["[:ascii:]",new de(1,B1)],["[:^ascii:]",new de(-1,B1)],["[:blank:]",new de(1,z1)],["[:^blank:]",new de(-1,z1)],["[:cntrl:]",new de(1,$1)],["[:^cntrl:]",new de(-1,$1)],["[:digit:]",new de(1,q1)],["[:^digit:]",new de(-1,q1)],["[:graph:]",new de(1,j1)],["[:^graph:]",new de(-1,j1)],["[:lower:]",new de(1,H1)],["[:^lower:]",new de(-1,H1)],["[:print:]",new de(1,G1)],["[:^print:]",new de(-1,G1)],["[:punct:]",new de(1,W1)],["[:^punct:]",new de(-1,W1)],["[:space:]",new de(1,K1)],["[:^space:]",new de(-1,K1)],["[:upper:]",new de(1,Y1)],["[:^upper:]",new de(-1,Y1)],["[:word:]",new de(1,Q1)],["[:^word:]",new de(-1,Q1)],["[:xdigit:]",new de(1,X1)],["[:^xdigit:]",new de(-1,X1)]]);class Xe{static charClassToString(e,t){let r="[";for(let i=0;i<t;i+=2){i>0&&(r+=" ");const s=e[i],a=e[i+1];s===a?r+=`0x${s.toString(16)}`:r+=`0x${s.toString(16)}-0x${a.toString(16)}`}return r+="]",r}static cmp(e,t,r,i){const s=e[t]-r;return s!==0?s:i-e[t+1]}static qsortIntPair(e,t,r){const i=((t+r)/2|0)&-2,s=e[i],a=e[i+1];let c=t,l=r;for(;c<=l;){for(;c<r&&Xe.cmp(e,c,s,a)<0;)c+=2;for(;l>t&&Xe.cmp(e,l,s,a)>0;)l-=2;if(c<=l){if(c!==l){let h=e[c];e[c]=e[l],e[l]=h,h=e[c+1],e[c+1]=e[l+1],e[l+1]=h}c+=2,l-=2}}t<l&&Xe.qsortIntPair(e,t,l),c<r&&Xe.qsortIntPair(e,c,r)}constructor(e=pe.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;Xe.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],i=this.r[t+1];if(r<=this.r[e-1]+1){i>this.r[e-1]&&(this.r[e-1]=i);continue}this.r[e]=r,this.r[e+1]=i,e+=2}return this.len=e,this}appendLiteral(e,t){return t&j.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const i=this.r[this.len-r],s=this.r[this.len-r+1];if(e<=s+1&&i<=t+1)return e<i&&(this.r[this.len-r]=e),t>s&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=se.MIN_FOLD&&t>=se.MAX_FOLD)return this.appendRange(e,t);if(t<se.MIN_FOLD||e>se.MAX_FOLD)return this.appendRange(e,t);e<se.MIN_FOLD&&(this.appendRange(e,se.MIN_FOLD-1),e=se.MIN_FOLD),t>se.MAX_FOLD&&(this.appendRange(se.MAX_FOLD+1,t),t=se.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let i=se.simpleFold(r);i!==r;i=se.simpleFold(i))this.appendRange(i,i)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const i=e[r],s=e[r+1];t<=i-1&&this.appendRange(t,i-1),t=s+1}return t<=se.MAX_RUNE&&this.appendRange(t,se.MAX_RUNE),this}appendTable(e){for(let t of e){const r=t[0],i=t[1],s=t[2];if(s===1){this.appendRange(r,i);continue}for(let a=r;a<=i;a+=s)this.appendRange(a,a)}return this}appendNegatedTable(e){let t=0;for(let r of e){const i=r[0],s=r[1],a=r[2];if(a===1){t<=i-1&&this.appendRange(t,i-1),t=s+1;continue}for(let c=i;c<=s;c+=a)t<=c-1&&this.appendRange(t,c-1),t=c+1}return t<=se.MAX_RUNE&&this.appendRange(t,se.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const i=this.r[r],s=this.r[r+1];e<=i-1&&(this.r[t]=e,this.r[t+1]=i-1,t+=2),e=s+1}return this.len=t,e<=se.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=se.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new Xe().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return Xe.charClassToString(this.r,this.len)}}class Di{static of(e,t){return new Di(e,t)}constructor(e,t){this.first=e,this.second=t}}class k4{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=pe.charCount(e),e}lookingAt(e){return this.rest().startsWith(e)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}}class te{static ERR_INTERNAL_ERROR="regexp/syntax: internal error";static ERR_INVALID_CHAR_RANGE="invalid character class range";static ERR_INVALID_ESCAPE="invalid escape sequence";static ERR_INVALID_NAMED_CAPTURE="invalid named capture";static ERR_INVALID_PERL_OP="invalid or unsupported Perl syntax";static ERR_INVALID_REPEAT_OP="invalid nested repetition operator";static ERR_INVALID_REPEAT_SIZE="invalid repeat count";static ERR_MISSING_BRACKET="missing closing ]";static ERR_MISSING_PAREN="missing closing )";static ERR_MISSING_REPEAT_ARGUMENT="missing argument to repetition operator";static ERR_TRAILING_BACKSLASH="trailing backslash at end of expression";static ERR_DUPLICATE_NAMED_CAPTURE="duplicate capture group name";static ANY_TABLE(){return[[0,se.MAX_RUNE,1]]}static unicodeTable(e){return e==="Any"?Di.of(te.ANY_TABLE(),te.ANY_TABLE()):v.CATEGORIES.has(e)?Di.of(v.CATEGORIES.get(e),v.FOLD_CATEGORIES.get(e)):v.SCRIPTS.has(e)?Di.of(v.SCRIPTS.get(e),v.FOLD_SCRIPT.get(e)):null}static minFoldRune(e){if(e<se.MIN_FOLD||e>se.MAX_FOLD)return e;let t=e;const r=e;for(e=se.simpleFold(e);e!==r;e=se.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===x.Op.EMPTY_MATCH)return null;if(e.op===x.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===x.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new x(x.Op.LITERAL);return r.flags=t,r.runes=pe.stringToRunes(e),r}static parse(e,t){return new te(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=te.parseInt(e);if(r===-1||!e.more())return-1;let i;if(!e.lookingAt(","))i=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))i=-1;else if((i=te.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||i===-2||i>1e3||i>=0&&r>i)throw new Se(te.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|i&se.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==P.CODES.get("_")&&!pe.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=P.CODES.get("0")&&e.peek()<=P.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===P.CODES.get("0")?-1:r.length>8?-2:parseFloat(r,10)}static isCharClass(e){return e.op===x.Op.LITERAL&&e.runes.length===1||e.op===x.Op.CHAR_CLASS||e.op===x.Op.ANY_CHAR_NOT_NL||e.op===x.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case x.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case x.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case x.Op.ANY_CHAR_NOT_NL:return t!==P.CODES.get(`
`);case x.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case x.Op.ANY_CHAR:break;case x.Op.ANY_CHAR_NOT_NL:te.matchRune(t,P.CODES.get(`
`))&&(e.op=x.Op.ANY_CHAR);break;case x.Op.CHAR_CLASS:t.op===x.Op.LITERAL?e.runes=new Xe(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new Xe(e.runes).appendClass(t.runes).toArray();break;case x.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=x.Op.CHAR_CLASS,e.runes=new Xe().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Se(te.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case P.CODES.get("1"):case P.CODES.get("2"):case P.CODES.get("3"):case P.CODES.get("4"):case P.CODES.get("5"):case P.CODES.get("6"):case P.CODES.get("7"):if(!e.more()||e.peek()<P.CODES.get("0")||e.peek()>P.CODES.get("7"))break;case P.CODES.get("0"):{let i=r-P.CODES.get("0");for(let s=1;s<3&&!(!e.more()||e.peek()<P.CODES.get("0")||e.peek()>P.CODES.get("7"));s++)i=i*8+e.peek()-P.CODES.get("0"),e.skip(1);return i}case P.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===P.CODES.get("{")){let a=0,c=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===P.CODES.get("}"))break;const l=pe.unhex(r);if(l<0||(c=c*16+l,c>se.MAX_RUNE))break e;a++}if(a===0)break e;return c}const i=pe.unhex(r);if(!e.more())break;r=e.pop();const s=pe.unhex(r);if(i<0||s<0)break;return i*16+s}case P.CODES.get("a"):return P.CODES.get("\x07");case P.CODES.get("f"):return P.CODES.get("\f");case P.CODES.get("n"):return P.CODES.get(`
`);case P.CODES.get("r"):return P.CODES.get("\r");case P.CODES.get("t"):return P.CODES.get("	");case P.CODES.get("v"):return P.CODES.get("\v");default:if(!pe.isalnum(r))return r;break}throw new Se(te.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Se(te.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?te.parseEscape(e):e.pop()}static concatRunes(e,t){return[...e,...t]}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):t=new x(e),t}reuse(e){e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!x.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(e.op===x.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=x.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===x.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&se.simpleFold(e.runes[0])===e.runes[2]&&se.simpleFold(e.runes[2])===e.runes[0]||e.op===x.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&se.simpleFold(e.runes[0])===e.runes[1]&&se.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|j.FOLD_CASE))return null;e.op=x.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|j.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const i=this.stack[r-1],s=this.stack[r-2];return i.op!==x.Op.LITERAL||s.op!==x.Op.LITERAL||(i.flags&j.FOLD_CASE)!==(s.flags&j.FOLD_CASE)?!1:(s.runes=te.concatRunes(s.runes,i.runes),e>=0?(i.runes=[e],i.flags=t,!0):(this.pop(),this.reuse(i),!1))}newLiteral(e,t){const r=this.newRegexp(x.Op.LITERAL);return r.flags=t,t&j.FOLD_CASE&&(e=te.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,i,s,a){let c=this.flags;if(c&j.PERL_X&&(s.more()&&s.lookingAt("?")&&(s.skip(1),c^=j.NON_GREEDY),a!==-1))throw new Se(te.ERR_INVALID_REPEAT_OP,s.from(a));const l=this.stack.length;if(l===0)throw new Se(te.ERR_MISSING_REPEAT_ARGUMENT,s.from(i));const h=this.stack[l-1];if(x.isPseudoOp(h.op))throw new Se(te.ERR_MISSING_REPEAT_ARGUMENT,s.from(i));const p=this.newRegexp(e);p.min=t,p.max=r,p.flags=c,p.subs=[h],this.stack[l-1]=p}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(x.Op.EMPTY_MATCH)):this.push(this.collapse(e,x.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(x.Op.NO_MATCH)):this.push(this.collapse(e,x.Op.ALTERNATE))}cleanAlt(e){e.op===x.Op.CHAR_CLASS&&(e.runes=new Xe(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===se.MAX_RUNE?(e.runes=null,e.op=x.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===P.CODES.get(`
`)-1&&e.runes[2]===P.CODES.get(`
`)+1&&e.runes[3]===se.MAX_RUNE&&(e.runes=null,e.op=x.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let c of e)r+=c.op===t?c.subs.length:1;let i=new Array(r).fill(null),s=0;for(let c of e)c.op===t?(i.splice(s,c.subs.length,...c.subs),s+=c.subs.length,this.reuse(c)):i[s++]=c;let a=this.newRegexp(t);if(a.subs=i,t===x.Op.ALTERNATE&&(a.subs=this.factor(a.subs),a.subs.length===1)){const c=a;a=a.subs[0],this.reuse(c)}return a}factor(e){if(e.length<2)return e;let t=0,r=e.length,i=0,s=null,a=0,c=0,l=0;for(let p=0;p<=r;p++){let g=null,b=0,C=0;if(p<r){let R=e[t+p];if(R.op===x.Op.CONCAT&&R.subs.length>0&&(R=R.subs[0]),R.op===x.Op.LITERAL&&(g=R.runes,b=R.runes.length,C=R.flags&j.FOLD_CASE),C===c){let M=0;for(;M<a&&M<b&&s[M]===g[M];)M++;if(M>0){a=M;continue}}}if(p!==l)if(p===l+1)e[i++]=e[t+l];else{const R=this.newRegexp(x.Op.LITERAL);R.flags=c,R.runes=s.slice(0,a);for(let X=l;X<p;X++)e[t+X]=this.removeLeadingString(e[t+X],a);const M=this.collapse(e.slice(t+l,t+p),x.Op.ALTERNATE),q=this.newRegexp(x.Op.CONCAT);q.subs=[R,M],e[i++]=q}l=p,s=g,a=b,c=C}r=i,t=0,l=0,i=0;let h=null;for(let p=0;p<=r;p++){let g=null;if(!(p<r&&(g=te.leadingRegexp(e[t+p]),h!==null&&h.equals(g)&&(te.isCharClass(h)||h.op===x.Op.REPEAT&&h.min===h.max&&te.isCharClass(h.subs[0]))))){if(p!==l)if(p===l+1)e[i++]=e[t+l];else{const b=h;for(let M=l;M<p;M++){const q=M!==l;e[t+M]=this.removeLeadingRegexp(e[t+M],q)}const C=this.collapse(e.slice(t+l,t+p),x.Op.ALTERNATE),R=this.newRegexp(x.Op.CONCAT);R.subs=[b,C],e[i++]=R}l=p,h=g}}r=i,t=0,l=0,i=0;for(let p=0;p<=r;p++)if(!(p<r&&te.isCharClass(e[t+p]))){if(p!==l)if(p===l+1)e[i++]=e[t+l];else{let g=l;for(let C=l+1;C<p;C++){const R=e[t+g],M=e[t+C];(R.op<M.op||R.op===M.op&&(R.runes!==null?R.runes.length:0)<(M.runes!==null?M.runes.length:0))&&(g=C)}const b=e[t+l];e[t+l]=e[t+g],e[t+g]=b;for(let C=l+1;C<p;C++)te.mergeCharClass(e[t+l],e[t+C]),this.reuse(e[t+C]);this.cleanAlt(e[t+l]),e[i++]=e[t+l]}p<r&&(e[i++]=e[t+p]),l=p+1}r=i,t=0,l=0,i=0;for(let p=0;p<r;++p)p+1<r&&e[t+p].op===x.Op.EMPTY_MATCH&&e[t+p+1].op===x.Op.EMPTY_MATCH||(e[i++]=e[t+p]);return r=i,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===x.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===x.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=x.Op.EMPTY_MATCH,e.subs=null;break;case 2:{const i=e;e=e.subs[1],this.reuse(i);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===x.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=x.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===x.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:{e.op=x.Op.EMPTY_MATCH,e.subs=x.emptySubs();break}case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(x.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&j.LITERAL)return te.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const i=new k4(this.wholeRegexp);for(;i.more();){let a=-1;e:switch(i.peek()){case P.CODES.get("("):if(this.flags&j.PERL_X&&i.lookingAt("(?")){this.parsePerlFlags(i);break}this.op(x.Op.LEFT_PAREN).cap=++this.numCap,i.skip(1);break;case P.CODES.get("|"):this.parseVerticalBar(),i.skip(1);break;case P.CODES.get(")"):this.parseRightParen(),i.skip(1);break;case P.CODES.get("^"):this.flags&j.ONE_LINE?this.op(x.Op.BEGIN_TEXT):this.op(x.Op.BEGIN_LINE),i.skip(1);break;case P.CODES.get("$"):this.flags&j.ONE_LINE?this.op(x.Op.END_TEXT).flags|=j.WAS_DOLLAR:this.op(x.Op.END_LINE),i.skip(1);break;case P.CODES.get("."):this.flags&j.DOT_NL?this.op(x.Op.ANY_CHAR):this.op(x.Op.ANY_CHAR_NOT_NL),i.skip(1);break;case P.CODES.get("["):this.parseClass(i);break;case P.CODES.get("*"):case P.CODES.get("+"):case P.CODES.get("?"):{a=i.pos();let c=null;switch(i.pop()){case P.CODES.get("*"):c=x.Op.STAR;break;case P.CODES.get("+"):c=x.Op.PLUS;break;case P.CODES.get("?"):c=x.Op.QUEST;break}this.repeat(c,t,r,a,i,e);break}case P.CODES.get("{"):{a=i.pos();const c=te.parseRepeat(i);if(c<0){i.rewindTo(a),this.literal(i.pop());break}t=c>>16,r=(c&se.MAX_BMP)<<16>>16,this.repeat(x.Op.REPEAT,t,r,a,i,e);break}case P.CODES.get("\\"):{const c=i.pos();if(i.skip(1),this.flags&j.PERL_X&&i.more())switch(i.pop()){case P.CODES.get("A"):this.op(x.Op.BEGIN_TEXT);break e;case P.CODES.get("b"):this.op(x.Op.WORD_BOUNDARY);break e;case P.CODES.get("B"):this.op(x.Op.NO_WORD_BOUNDARY);break e;case P.CODES.get("C"):throw new Se(te.ERR_INVALID_ESCAPE,"\\C");case P.CODES.get("Q"):{let g=i.rest();const b=g.indexOf("\\E");b>=0&&(g=g.substring(0,b)),i.skipString(g),i.skipString("\\E");let C=0;for(;C<g.length;){const R=g.codePointAt(C);this.literal(R),C+=pe.charCount(R)}break e}case P.CODES.get("z"):this.op(x.Op.END_TEXT);break e;default:i.rewindTo(c);break}const l=this.newRegexp(x.Op.CHAR_CLASS);if(l.flags=this.flags,i.lookingAt("\\p")||i.lookingAt("\\P")){const p=new Xe;if(this.parseUnicodeClass(i,p)){l.runes=p.toArray(),this.push(l);break e}}const h=new Xe;if(this.parsePerlClassEscape(i,h)){l.runes=h.toArray(),this.push(l);break e}i.rewindTo(c),this.reuse(l),this.literal(te.parseEscape(i));break}default:this.literal(i.pop());break}e=a}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Se(te.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const c=r.charAt(2)==="P"?4:3,l=r.indexOf(">");if(l<0)throw new Se(te.ERR_INVALID_NAMED_CAPTURE,r);const h=r.substring(c,l);if(e.skipString(h),e.skip(c+1),!te.isValidCaptureName(h))throw new Se(te.ERR_INVALID_NAMED_CAPTURE,r.substring(0,l+1));const p=this.op(x.Op.LEFT_PAREN);if(p.cap=++this.numCap,this.namedGroups[h])throw new Se(te.ERR_DUPLICATE_NAMED_CAPTURE,h);this.namedGroups[h]=this.numCap,p.name=h;return}e.skip(2);let i=this.flags,s=1,a=!1;e:for(;e.more();){const c=e.pop();switch(c){case P.CODES.get("i"):i|=j.FOLD_CASE,a=!0;break;case P.CODES.get("m"):i&=-17,a=!0;break;case P.CODES.get("s"):i|=j.DOT_NL,a=!0;break;case P.CODES.get("U"):i|=j.NON_GREEDY,a=!0;break;case P.CODES.get("-"):if(s<0)break e;s=-1,i=~i,a=!1;break;case P.CODES.get(":"):case P.CODES.get(")"):if(s<0){if(!a)break e;i=~i}c===P.CODES.get(":")&&this.op(x.Op.LEFT_PAREN),this.flags=i;return;default:break e}}throw new Se(te.ERR_INVALID_PERL_OP,e.from(t))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(x.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===x.Op.VERTICAL_BAR&&te.isCharClass(this.stack[e-1])&&te.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const i=r;r=t,t=i,this.stack[e-3]=r}return te.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===x.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Se(te.ERR_INTERNAL_ERROR,"stack underflow");const t=this.pop(),r=this.pop();if(r.op!==x.Op.LEFT_PAREN)throw new Se(te.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=r.flags,r.cap===0?this.push(t):(r.op=x.Op.CAPTURE,r.subs=[t],this.push(r))}parsePerlClassEscape(e,t){const r=e.pos();if(!(this.flags&j.PERL_X)||!e.more()||e.pop()!==P.CODES.get("\\")||!e.more())return!1;e.pop();const i=e.from(r),s=M1.has(i)?M1.get(i):null;return s===null?!1:(t.appendGroup(s,(this.flags&j.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),i=r.indexOf(":]");if(i<0)return!1;const s=r.substring(0,i+2);e.skipString(s);const a=J1.has(s)?J1.get(s):null;if(a===null)throw new Se(te.ERR_INVALID_CHAR_RANGE,s);return t.appendGroup(a,(this.flags&j.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if(!(this.flags&j.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let i=1,s=e.pop();if(s===P.CODES.get("P")&&(i=-1),!e.more())throw e.rewindTo(r),new Se(te.ERR_INVALID_CHAR_RANGE,e.rest());s=e.pop();let a;if(s!==P.CODES.get("{"))a=pe.runeToString(s);else{const p=e.rest(),g=p.indexOf("}");if(g<0)throw e.rewindTo(r),new Se(te.ERR_INVALID_CHAR_RANGE,e.rest());a=p.substring(0,g),e.skipString(a),e.skip(1)}a.length!==0&&a.codePointAt(0)===P.CODES.get("^")&&(i=0-i,a=a.substring(1));const c=te.unicodeTable(a);if(c===null)throw new Se(te.ERR_INVALID_CHAR_RANGE,e.from(r));const l=c.first,h=c.second;if(!(this.flags&j.FOLD_CASE)||h===null)t.appendTableWithSign(l,i);else{const p=new Xe().appendTable(l).appendTable(h).cleanClass().toArray();t.appendClassWithSign(p,i)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(x.Op.CHAR_CLASS);r.flags=this.flags;const i=new Xe;let s=1;e.more()&&e.lookingAt("^")&&(s=-1,e.skip(1),this.flags&j.CLASS_NL||i.appendRange(P.CODES.get(`
`),P.CODES.get(`
`)));let a=!0;for(;!e.more()||e.peek()!==P.CODES.get("]")||a;){if(e.more()&&e.lookingAt("-")&&!(this.flags&j.PERL_X)&&!a){const p=e.rest();if(p==="-"||!p.startsWith("-]"))throw e.rewindTo(t),new Se(te.ERR_INVALID_CHAR_RANGE,e.rest())}a=!1;const c=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,i))continue;e.rewindTo(c)}if(this.parseUnicodeClass(e,i)||this.parsePerlClassEscape(e,i))continue;e.rewindTo(c);const l=te.parseClassChar(e,t);let h=l;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(h=te.parseClassChar(e,t),h<l)throw new Se(te.ERR_INVALID_CHAR_RANGE,e.from(c))}this.flags&j.FOLD_CASE?i.appendFoldedRange(l,h):i.appendRange(l,h)}e.skip(1),i.cleanClass(),s<0&&i.negateClass(),r.runes=i.toArray(),this.push(r)}}class C4{constructor(){this.inst=null,this.cap=[]}}class Z1{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.denseThreads[t]=null,this.densePcs[t]=e,t}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}}class Mr{static fromRE2(e){const t=new Mr;return t.prog=e.prog,t.re2=e,t.q0=new Z1(t.prog.numInst()),t.q1=new Z1(t.prog.numInst()),t.pool=[],t.poolSize=0,t.matched=!1,t.matchcap=Array(t.prog.numCap<2?2:t.prog.numCap).fill(0),t.ncap=0,t}static fromMachine(e){const t=new Mr;return t.re2=e.re2,t.prog=e.prog,t.q0=e.q0,t.q1=e.q1,t.pool=e.pool,t.poolSize=e.poolSize,t.matched=e.matched,t.matchcap=e.matchcap,t.ncap=e.ncap,t}init(e){this.ncap=e,e>this.matchcap.length?this.initNewCap(e):this.resetCap(e)}resetCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}}initNewCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}this.matchcap=Array(e).fill(0)}submatches(){return this.ncap===0?pe.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(e){let t;return this.poolSize>0?(this.poolSize--,t=this.pool[this.poolSize]):t=new C4,t.inst=e,t}freeQueue(e,t=0){const r=e.size-t,i=this.poolSize+r;this.pool.length<i&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,i)));for(let s=t;s<e.size;s++){const a=e.denseThreads[s];a!==null&&(this.pool[this.poolSize]=a,this.poolSize++)}e.clear()}freeThread(e){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=e,this.poolSize++}match(e,t,r){const i=this.re2.cond;if(i===pe.EMPTY_ALL||(r===j.ANCHOR_START||r===j.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let s=this.q0,a=this.q1,c=e.step(t),l=c>>3,h=c&7,p=-1,g=0;c!==Ln.EOF()&&(c=e.step(t+h),p=c>>3,g=c&7);let b;for(t===0?b=pe.emptyOpContext(-1,l):b=e.context(t);;){if(s.isEmpty()){if(i&pe.EMPTY_BEGIN_TEXT&&t!==0||this.matched)break;if(this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const M=e.index(this.re2,t);if(M<0)break;t+=M,c=e.step(t),l=c>>3,h=c&7,c=e.step(t+h),p=c>>3,g=c&7}}!this.matched&&(t===0||r===j.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=t),this.add(s,this.prog.start,t,this.matchcap,b,null));const C=t+h;if(b=e.context(C),this.step(s,a,t,C,l,b,r,t===e.endPos()),h===0||this.ncap===0&&this.matched)break;t+=h,l=p,h=g,l!==-1&&(c=e.step(t+h),p=c>>3,g=c&7);const R=s;s=a,a=R}return this.freeQueue(a),this.matched}step(e,t,r,i,s,a,c,l){const h=this.re2.longest;for(let p=0;p<e.size;p++){let g=e.denseThreads[p];if(g===null)continue;if(h&&this.matched&&this.ncap>0&&this.matchcap[0]<g.cap[0]){this.freeThread(g);continue}const b=g.inst;let C=!1;switch(b.op){case K.MATCH:if(c===j.ANCHOR_BOTH&&!l)break;this.ncap>0&&(!h||!this.matched||this.matchcap[1]<r)&&(g.cap[1]=r,this.matchcap=g.cap.slice(0,this.ncap)),h||this.freeQueue(e,p+1),this.matched=!0;break;case K.RUNE:C=b.matchRune(s);break;case K.RUNE1:C=s===b.runes[0];break;case K.RUNE_ANY:C=!0;break;case K.RUNE_ANY_NOT_NL:C=s!==P.CODES.get(`
`);break;default:throw new Error("bad inst")}C&&(g=this.add(t,b.out,i,g.cap,a,g)),g!==null&&(this.freeThread(g),e.denseThreads[p]=null)}e.clear()}add(e,t,r,i,s,a){if(t===0||e.contains(t))return a;const c=e.add(t),l=this.prog.inst[t];switch(l.op){case K.FAIL:break;case K.ALT:case K.ALT_MATCH:a=this.add(e,l.out,r,i,s,a),a=this.add(e,l.arg,r,i,s,a);break;case K.EMPTY_WIDTH:l.arg&~s||(a=this.add(e,l.out,r,i,s,a));break;case K.NOP:a=this.add(e,l.out,r,i,s,a);break;case K.CAPTURE:if(l.arg<this.ncap){const h=i[l.arg];i[l.arg]=r,this.add(e,l.out,r,i,s,null),i[l.arg]=h}else a=this.add(e,l.out,r,i,s,a);break;case K.MATCH:case K.RUNE:case K.RUNE1:case K.RUNE_ANY:case K.RUNE_ANY_NOT_NL:a===null?a=this.alloc(l):a.inst=l,this.ncap>0&&a.cap!==i&&(a.cap=i.slice(0,this.ncap)),e.denseThreads[c]=a,a=null;break;default:throw new Error("unhandled")}return a}}class P4{constructor(e){this.value=e}get(){return this.value}set(e){this.value=e}compareAndSet(e,t){return this.value===e?(this.value=t,!0):!1}}class Sn{static initTest(e){const t=Sn.compile(e),r=new Sn(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r}static compile(e){return Sn.compileImpl(e,j.PERL,!1)}static compilePOSIX(e){return Sn.compileImpl(e,j.POSIX,!0)}static compileImpl(e,t,r){let i=te.parse(e,t);const s=i.maxCap();i=Rt.simplify(i);const a=Oi.compileRegexp(i),c=new Sn(e,a,s,r),[l,h]=a.prefix();return c.prefixComplete=l,c.prefix=h,c.prefixUTF8=pe.stringToUtf8ByteArray(c.prefix),c.prefix.length>0&&(c.prefixRune=c.prefix.codePointAt(0)),c.namedGroups=i.namedGroups,c}static match(e,t){return Sn.compile(e).match(t)}constructor(e,t,r=0,i=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=i,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new P4}numberOfCapturingGroups(){return this.numSubexp}get(){let e;do e=this.pooled.get();while(e&&!this.pooled.compareAndSet(e,e.next));return e}reset(){this.pooled.set(null)}put(e,t){let r=this.pooled.get();do r=this.pooled.get(),!t&&r&&(e=Mr.fromMachine(e),t=!0),e.next!==r&&(e.next=r);while(!this.pooled.compareAndSet(r,e))}toString(){return this.expr}doExecute(e,t,r,i){let s=this.get(),a=!1;s?s.next!==null&&(s=Mr.fromMachine(s),a=!0):(s=Mr.fromRE2(this),a=!0),s.init(i);const c=s.match(e,t,r)?s.submatches():null;return this.put(s,a),c}match(e){return this.doExecute(ke.fromUTF16(e),0,j.UNANCHORED,0)!==null}matchWithGroup(e,t,r,i,s){return e instanceof pn||(e=Ia.utf16(e)),this.matchMachineInput(e,t,r,i,s)}matchMachineInput(e,t,r,i,s){if(t>r)return[!1,null];const a=e.isUTF16Encoding()?ke.fromUTF16(e.asCharSequence(),0,r):ke.fromUTF8(e.asBytes(),0,r),c=this.doExecute(a,t,i,2*s);return c===null?[!1,null]:[!0,c]}matchUTF8(e){return this.doExecute(ke.fromUTF8(e),0,j.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let i=0,s=0,a="";const c=ke.fromUTF16(e);let l=0;for(;s<=e.length;){const h=this.doExecute(c,s,j.UNANCHORED,2);if(h===null||h.length===0)break;a+=e.substring(i,h[0]),(h[1]>i||h[0]===0)&&(a+=t(e.substring(h[0],h[1])),l++),i=h[1];const p=c.step(s)&7;if(s+p>h[1]?s+=p:s+1>h[1]?s++:s=h[1],l>=r)break}return a+=e.substring(i),a}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let i=0;i<e.length;i++)r[i]=e[i];e=r}return e}allMatches(e,t,r=i=>i){let i=[];const s=e.endPos();t<0&&(t=s+1);let a=0,c=0,l=-1;for(;c<t&&a<=s;){const h=this.doExecute(e,a,j.UNANCHORED,this.prog.numCap);if(h===null||h.length===0)break;let p=!0;if(h[1]===a){h[0]===l&&(p=!1);const g=e.step(a);g<0?a=s+1:a+=g&7}else a=h[1];l=h[1],p&&(i.push(r(this.pad(h))),c++)}return i}findUTF8(e){const t=this.doExecute(ke.fromUTF8(e),0,j.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.doExecute(ke.fromUTF8(e),0,j.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.doExecute(ke.fromUTF16(e),0,j.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.doExecute(ke.fromUTF16(e),0,j.UNANCHORED,2)}findUTF8Submatch(e){const t=this.doExecute(ke.fromUTF8(e),0,j.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let i=0;i<r.length;i++)2*i<t.length&&t[2*i]>=0&&(r[i]=e.slice(t[2*i],t[2*i+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.doExecute(ke.fromUTF8(e),0,j.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.doExecute(ke.fromUTF16(e),0,j.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let i=0;i<r.length;i++)2*i<t.length&&t[2*i]>=0&&(r[i]=e.substring(t[2*i],t[2*i+1]));return r}findSubmatchIndex(e){return this.pad(this.doExecute(ke.fromUTF16(e),0,j.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(ke.fromUTF8(e),t,i=>e.slice(i[0],i[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(ke.fromUTF8(e),t,i=>i.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(ke.fromUTF16(e),t,i=>e.substring(i[0],i[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(ke.fromUTF16(e),t,i=>i.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(ke.fromUTF8(e),t,i=>{let s=new Array(i.length/2|0).fill(null);for(let a=0;a<s.length;a++)i[2*a]>=0&&(s[a]=e.slice(i[2*a],i[2*a+1]));return s});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(ke.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(ke.fromUTF16(e),t,i=>{let s=new Array(i.length/2|0).fill(null);for(let a=0;a<s.length;a++)i[2*a]>=0&&(s[a]=e.substring(i[2*a],i[2*a+1]));return s});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(ke.fromUTF16(e),t);return r.length===0?null:r}}class It{static CASE_INSENSITIVE=1;static DOTALL=2;static MULTILINE=4;static DISABLE_UNICODE_GROUPS=8;static LONGEST_MATCH=16;static quote(e){return pe.quoteMeta(e)}static compile(e,t=0){let r=e;if(t&It.CASE_INSENSITIVE&&(r=`(?i)${r}`),t&It.DOTALL&&(r=`(?s)${r}`),t&It.MULTILINE&&(r=`(?m)${r}`),t&-32)throw new I4("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let i=j.PERL;t&It.DISABLE_UNICODE_GROUPS&&(i&=-129);const s=new It(e,t);return s.re2Input=Sn.compileImpl(r,i,(t&It.LONGEST_MATCH)!==0),s}static matches(e,t){return It.compile(e).matcher(t).matches()}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const i=new It(e,t);return i.re2Input=r,i}constructor(e,t){this.patternInput=e,this.flagsInput=t}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.matcher(e).matches()}matcher(e){return Array.isArray(e)&&(e=Ia.utf8(e)),new T4(this,e)}split(e,t=0){const r=this.matcher(e),i=[];let s=0,a=0;for(;r.find();){if(a===0&&r.end()===0){a=r.end();continue}if(t>0&&i.length===t-1)break;if(a===r.start()){if(t===0){s+=1,a=r.end();continue}}else for(;s>0;)i.push(""),s-=1;i.push(r.substring(a,r.start())),a=r.end()}if(t===0&&a!==r.inputLength()){for(;s>0;)i.push(""),s-=1;i.push(r.substring(a,r.inputLength()))}return(t!==0||i.length===0)&&i.push(r.substring(a,r.inputLength())),i}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}}/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let ei="12.15.0";function R4(n){ei=n}/**
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
 */const mr=new ja("@firebase/firestore");function kr(){return mr.logLevel}function H(n,...e){if(mr.logLevel<=ue.DEBUG){const t=e.map(el);mr.debug(`Firestore (${ei}): ${n}`,...t)}}function fn(n,...e){if(mr.logLevel<=ue.ERROR){const t=e.map(el);mr.error(`Firestore (${ei}): ${n}`,...t)}}function Ut(n,...e){if(mr.logLevel<=ue.WARN){const t=e.map(el);mr.warn(`Firestore (${ei}): ${n}`,...t)}}function el(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function Y(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,xp(n,r,t)}function xp(n,e,t){let r=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw fn(r),new Error(r)}function W(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||xp(e,i,r)}function re(n,e){return n}/**
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
 */class Un{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Sp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Je.UNAUTHENTICATED))}shutdown(){}}class O4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class D4{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Un,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Un)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string",31837,{l:r}),new Sp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{h:e}),new Je(e)}}class N4{constructor(e,t,r){this.T=e,this.P=t,this.R=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const e=this.A();return e&&this.I.set("Authorization",e),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class V4{constructor(e,t,r){this.T=e,this.P=t,this.R=r}getToken(){return Promise.resolve(new N4(this.T,this.P,this.R))}start(e,t){e.enqueueRetryable(()=>t(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class M4{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){W(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new eh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new eh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function F4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class tl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=F4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function le(n,e){return n<e?-1:n>e?1:0}function fc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return Yo(i)===Yo(s)?le(i,s):Yo(i)?1:-1}return le(n.length,e.length)}const U4=55296,B4=57343;function Yo(n){const e=n.charCodeAt(0);return e>=U4&&e<=B4}function qr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const jr="__name__";class qt{constructor(e,t,r){t===void 0?t=0:t>e.length&&Y(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Y(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return qt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=qt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return le(e.length,t.length)}static compareSegments(e,t){const r=qt.isNumericId(e),i=qt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?qt.extractNumericId(e).compare(qt.extractNumericId(t)):fc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Fn.fromString(e.substring(4,e.length-2))}}class me extends qt{construct(e,t,r){return new me(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new me(t)}static emptyPath(){return new me([])}}const z4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends qt{construct(e,t,r){return new Ve(e,t,r)}static isValidIdentifier(e){return z4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jr}static keyField(){return new Ve([jr])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new G(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new G(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(me.fromString(e))}static fromName(e){return new Q(me.fromString(e).popFirst(5))}static empty(){return new Q(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new me(e.slice()))}}/**
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
 */function $4(n,e,t){if(!t)throw new G(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function q4(n,e,t,r){if(e===!0&&r===!0)throw new G(F.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function th(n){if(!Q.isDocumentKey(n))throw new G(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _s(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function nl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Y(12329,{type:typeof n})}function Wi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new G(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=nl(n);throw new G(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Pe(n,e){const t={typeString:n};return e&&(t.value=e),t}function ws(n,e){if(!_s(n))throw new G(F.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new G(F.INVALID_ARGUMENT,t);return!0}/**
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
 */const nh=-62135596800,rh=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*rh);return new _e(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<nh)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rh}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ws(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-nh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:Pe("string",_e._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};/**
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
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new _e(0,0))}static max(){return new ne(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ki=-1;function j4(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new _e(t+1,0):new _e(t,r));return new qn(i,Q.empty(),e)}function H4(n){return new qn(n.readTime,n.key,Ki)}class qn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new qn(ne.min(),Q.empty(),Ki)}static max(){return new qn(ne.max(),Q.empty(),Ki)}}function G4(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
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
 */const W4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ti(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==W4)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(i=>i?V.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new V((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let l=0;l<s;l++){const h=l;t(e[h]).next(p=>{a[h]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new V((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Y4(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ni(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ja{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ja.ce=-1;/**
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
 */const rl=-1;function Za(n){return n==null}function Yi(n){return n===0&&1/n==-1/0}function Q4(n){return typeof n=="number"&&Number.isInteger(n)&&!Yi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function X4(n){return typeof n=="string"}/**
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
 */const kp="";function J4(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ih(e)),e=Z4(n.get(t),e);return ih(e)}function Z4(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case kp:t+="";break;default:t+=s}}return t}function ih(n){return n+kp+""}/**
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
 */class Ee{constructor(e,t){this.comparator=e,this.root=t||He.EMPTY}insert(e,t){return new Ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ws(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ws(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ws(this.root,e,this.comparator,!0)}}class Ws{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new He(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new He(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Re{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sh(this.data.getIterator())}getIteratorFrom(e){return new sh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Re(this.comparator);return t.data=e,t}}class sh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Vt([])}unionWith(e){let t=new Re(Ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Vt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */function Ta(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _r(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function e3(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function Cp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Pp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Pp("Invalid base64 string: "+s):s}}(e);return new Le(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const t3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jn(n){if(W(!!n,39018),typeof n=="string"){let e=0;const t=t3.exec(n);if(W(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(n.seconds),nanos:Ae(n.nanos)}}function Ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Hn(n){return typeof n=="string"?Le.fromBase64String(n):Le.fromUint8Array(n)}/**
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
 */const Rp="server_timestamp",Lp="__type__",Op="__previous_value__",Dp="__local_write_time__";function eo(n){return(n?.mapValue?.fields||{})[Lp]?.stringValue===Rp}function Es(n){const e=n.mapValue.fields[Op];return eo(e)?Es(e):e}function Hr(n){const e=jn(n.mapValue.fields[Dp].timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class n3{constructor(e,t,r,i,s,a,c,l,h,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=g}}const Aa="(default)";class Qi{constructor(e,t){this.projectId=e,this.database=t||Aa}static empty(){return new Qi("","")}get isDefaultDatabase(){return this.database===Aa}isEqual(e){return e instanceof Qi&&e.projectId===this.projectId&&e.database===this.database}}function r3(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new G(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qi(n.options.projectId,e)}/**
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
 */const Np="__type__",i3="__max__",Ks={mapValue:{}},Vp="__vector__",Xi="value",Gr={nullValue:"NULL_VALUE"},ut={booleanValue:!0},qe={booleanValue:!1};function Oe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?eo(n)?4:s3(n)?9007199254740991:xa(n)?10:11:Y(28295,{value:n})}function kt(n,e,t){if(n===e)return!0;const r=Oe(n);if(r!==Oe(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Hr(n).isEqual(Hr(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const c=jn(s.timestampValue),l=jn(a.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return Hn(s.bytesValue).isEqual(Hn(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return Ae(s.geoPointValue.latitude)===Ae(a.geoPointValue.latitude)&&Ae(s.geoPointValue.longitude)===Ae(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a,c){if("integerValue"in s&&"integerValue"in a)return Ae(s.integerValue)===Ae(a.integerValue);let l,h;if("doubleValue"in s&&"doubleValue"in a)l=Ae(s.doubleValue),h=Ae(a.doubleValue);else{if(!c?.Ee)return!1;l=Ae(s.integerValue??s.doubleValue),h=Ae(a.integerValue??a.doubleValue)}return l===h?!!c?.he||Yi(l)===Yi(h):!!(c===void 0||c.Te)&&isNaN(l)&&isNaN(h)}(n,e,t);case 9:return qr(n.arrayValue.values||[],e.arrayValue.values||[],(i,s)=>kt(i,s,t));case 10:case 11:return function(s,a,c){const l=s.mapValue.fields||{},h=a.mapValue.fields||{};if(Ta(l)!==Ta(h))return!1;for(const p in l)if(l.hasOwnProperty(p)&&(h[p]===void 0||!kt(l[p],h[p],c)))return!1;return!0}(n,e,t);default:return Y(52216,{left:n})}}function Ji(n,e){return(n.values||[]).find(t=>kt(t,e))!==void 0}function ht(n,e){if(n===e)return 0;const t=Oe(n),r=Oe(e);if(t!==r)return le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=Ae(s.integerValue||s.doubleValue),l=Ae(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return ah(n.timestampValue,e.timestampValue);case 4:return ah(Hr(n),Hr(e));case 5:return fc(n.stringValue,e.stringValue);case 6:return function(s,a){const c=Hn(s),l=Hn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const p=le(c[h],l[h]);if(p!==0)return p}return le(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=le(Ae(s.latitude),Ae(a.latitude));return c!==0?c:le(Ae(s.longitude),Ae(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return oh(n.arrayValue,e.arrayValue);case 10:return function(s,a){const c=s.fields||{},l=a.fields||{},h=c[Xi]?.arrayValue,p=l[Xi]?.arrayValue,g=le(h?.values?.length||0,p?.values?.length||0);return g!==0?g:oh(h,p)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Ks.mapValue&&a===Ks.mapValue)return 0;if(s===Ks.mapValue)return 1;if(a===Ks.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),h=a.fields||{},p=Object.keys(h);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const b=fc(l[g],p[g]);if(b!==0)return b;const C=ht(c[l[g]],h[p[g]]);if(C!==0)return C}return le(l.length,p.length)}(n.mapValue,e.mapValue);default:throw Y(23264,{Pe:t})}}function ah(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=jn(n),r=jn(e),i=le(t.seconds,r.seconds);return i!==0?i:le(t.nanos,r.nanos)}function oh(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=ht(t[i],r[i]);if(s!==void 0&&s!==0)return s}return le(t.length,r.length)}function Wr(n){return gc(n)}function gc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=jn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Hn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=gc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${gc(t.fields[a])}`;return i+"}"}(n.mapValue):Y(61005,{value:n})}function aa(n){switch(Oe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Es(n);return e?16+aa(e):16;case 5:return 2*n.stringValue.length;case 6:return Hn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+aa(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return _r(r.fields,(s,a)=>{i+=s.length+aa(a)}),i}(n.mapValue);default:throw Y(13486,{value:n})}}function Ht(n){return!!n&&"integerValue"in n}function or(n){return!!n&&"doubleValue"in n}function Gn(n){return Ht(n)||or(n)}function Kr(n){return!!n&&"arrayValue"in n}function wt(n){return!!n&&"nullValue"in n}function dt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function lr(n){return!!n&&"mapValue"in n}function xa(n){return(n?.mapValue?.fields||{})[Np]?.stringValue===Vp}function mc(n){return(n?.mapValue?.fields||{})[Xi]?.arrayValue}function Ni(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return _r(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ni(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ni(n.arrayValue.values[t]);return e}return{...n}}function s3(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===i3}/**
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
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!lr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ni(t)}setAll(e){let t=Ve.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Ni(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());lr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return kt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];lr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){_r(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(Ni(this.value))}}function Mp(n){const e=[];return _r(n.fields,(t,r)=>{const i=new Ve([t]);if(lr(r)){const s=Mp(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Vt(e)}/**
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
 */function to(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yi(e)?"-0":e}}function il(n){return{integerValue:""+n}}function sl(n,e,t){return Number.isInteger(e)&&t?.preferIntegers||Q4(e)?il(e):to(n,e)}/**
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
 */class no{constructor(){this._=void 0}}function a3(n,e,t){return n instanceof Sa?function(i,s){const a={fields:{[Lp]:{stringValue:Rp},[Dp]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&eo(s)&&(s=Es(s)),s&&(a.fields[Op]=s),{mapValue:a}}(t,e):n instanceof Zi?Up(n,e):n instanceof es?Bp(n,e):n instanceof ts?function(i,s){const a=Fp(i,s),c=Pa(a)+Pa(i.Re);return Ht(a)&&Ht(i.Re)?il(c):to(i.serializer,c)}(n,e):n instanceof ka?function(i,s){return ch(i,s,Math.min)}(n,e):n instanceof Ca?function(i,s){return ch(i,s,Math.max)}(n,e):void 0}function o3(n,e,t){return n instanceof Zi?Up(n,e):n instanceof es?Bp(n,e):t}function Fp(n,e){return n instanceof ts?Gn(e)?e:{integerValue:0}:null}class Sa extends no{}class Zi extends no{constructor(e){super(),this.elements=e}}function Up(n,e){const t=zp(e);for(const r of n.elements)t.some(i=>kt(i,r))||t.push(r);return{arrayValue:{values:t}}}class es extends no{constructor(e){super(),this.elements=e}}function Bp(n,e){let t=zp(e);for(const r of n.elements)t=t.filter(i=>!kt(i,r));return{arrayValue:{values:t}}}class al extends no{constructor(e,t){super(),this.serializer=e,this.Re=t}}class ts extends al{}class ka extends al{}class Ca extends al{}function ch(n,e,t){if(!Gn(e))return n.Re;const r=t(Pa(e),Pa(n.Re));return Ht(e)&&Ht(n.Re)?il(r):to(n.serializer,r)}function Pa(n){return Ae(n.integerValue||n.doubleValue)}function zp(n){return Kr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function c3(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Zi&&i instanceof Zi||r instanceof es&&i instanceof es?qr(r.elements,i.elements,kt):r instanceof ts&&i instanceof ts||r instanceof ka&&i instanceof ka||r instanceof Ca&&i instanceof Ca?kt(r.Re,i.Re):r instanceof Sa&&i instanceof Sa}(n.transform,e.transform)}class l3{constructor(e,t){this.version=e,this.transformResults=t}}class ln{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oa(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ro{}function $p(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jp(n.key,ln.none()):new bs(n.key,n.data,ln.none());{const t=n.data,r=_t.empty();let i=new Re(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new wr(n.key,r,new Vt(i.toArray()),ln.none())}}function u3(n,e,t){n instanceof bs?function(i,s,a){const c=i.value.clone(),l=uh(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof wr?function(i,s,a){if(!oa(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=uh(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(qp(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Vi(n,e,t,r){return n instanceof bs?function(s,a,c,l){if(!oa(s.precondition,a))return c;const h=s.value.clone(),p=hh(s.fieldTransforms,l,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof wr?function(s,a,c,l){if(!oa(s.precondition,a))return c;const h=hh(s.fieldTransforms,l,a),p=a.data;return p.setAll(qp(s)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,a,c){return oa(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function h3(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Fp(r.transform,i||null);s!=null&&(t===null&&(t=_t.empty()),t.set(r.field,s))}return t||null}function lh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&qr(r,i,(s,a)=>c3(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class bs extends ro{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wr extends ro{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function uh(n,e,t){const r=new Map;W(n.length===t.length,32656,{Ie:t.length,Ae:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,o3(a,c,t[i]))}return r}function hh(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,a3(s,a,e))}return r}class jp extends ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class d3 extends ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ra{constructor(e,t){this.position=e,this.inclusive=t}}function dh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(a.referenceValue),t.key):r=ht(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ph(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!kt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Hp{}class Me extends Hp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new f3(e,t,r):t==="array-contains"?new y3(e,r):t==="in"?new v3(e,r):t==="not-in"?new _3(e,r):t==="array-contains-any"?new w3(e,r):new Me(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new g3(e,r):new m3(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ht(t,this.value)):t!==null&&Oe(this.value)===Oe(t)&&this.matchesComparison(ht(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends Hp{constructor(e,t){super(),this.filters=e,this.op=t,this.Ve=null}static create(e,t){return new Xt(e,t)}matches(e){return Gp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Ve!==null||(this.Ve=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Ve}getFilters(){return Object.assign([],this.filters)}}function Gp(n){return n.op==="and"}function Wp(n){return p3(n)&&Gp(n)}function p3(n){for(const e of n.filters)if(e instanceof Xt)return!1;return!0}function yc(n){if(n instanceof Me)return n.field.canonicalString()+n.op.toString()+Wr(n.value);if(Wp(n))return n.filters.map(e=>yc(e)).join(",");{const e=n.filters.map(t=>yc(t)).join(",");return`${n.op}(${e})`}}function Kp(n,e){return n instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&kt(r.value,i.value)}(n,e):n instanceof Xt?function(r,i){return i instanceof Xt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Kp(a,i.filters[c]),!0):!1}(n,e):void Y(19439)}function Yp(n){return n instanceof Me?function(t){return`${t.field.canonicalString()} ${t.op} ${Wr(t.value)}`}(n):n instanceof Xt?function(t){return t.op.toString()+" {"+t.getFilters().map(Yp).join(" ,")+"}"}(n):"Filter"}class f3 extends Me{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class g3 extends Me{constructor(e,t){super(e,"in",t),this.keys=Qp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class m3 extends Me{constructor(e,t){super(e,"not-in",t),this.keys=Qp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Qp(n,e){return(e.arrayValue?.values||[]).map(t=>Q.fromName(t.referenceValue))}class y3 extends Me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Kr(t)&&Ji(t.arrayValue,this.value)}}class v3 extends Me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ji(this.value.arrayValue,t)}}class _3 extends Me{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ji(this.value.arrayValue,t)}}class w3 extends Me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Kr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ji(this.value.arrayValue,r))}}/**
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
 */class La{constructor(e,t="asc"){this.field=e,this.dir=t}}function E3(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ze{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ze(e,0,ne.min(),ne.min(),ne.min(),_t.empty(),0)}static newFoundDocument(e,t,r,i){return new Ze(e,1,t,ne.min(),r,i,0)}static newNoDocument(e,t){return new Ze(e,2,t,ne.min(),ne.min(),_t.empty(),0)}static newUnknownDocument(e,t){return new Ze(e,3,t,ne.min(),ne.min(),_t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class b3{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.de=null}}function fh(n,e=null,t=[],r=[],i=null,s=null,a=null){return new b3(n,e,t,r,i,s,a)}function Xp(n){const e=re(n);if(e.de===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>yc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Za(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Wr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Wr(r)).join(",")),e.de=t}return e.de}function Jp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!E3(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Kp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ph(n.startAt,e.startAt)&&ph(n.endAt,e.endAt)}function ir(n){return!!n.isCorePipeline}function Zp(n){return!!n.path&&Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class io{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function I3(n,e,t,r,i,s,a,c){return new io(n,e,t,r,i,s,a,c)}function ol(n){return new io(n)}function gh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function T3(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function A3(n){return n.collectionGroup!==null}function Mi(n){const e=re(n);if(e.fe===null){e.fe=[];const t=new Set;for(const s of e.explicitOrderBy)e.fe.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Re(Ve.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.fe.push(new La(s,r))}),t.has(Ve.keyField().canonicalString())||e.fe.push(new La(Ve.keyField(),r))}return e.fe}function Wt(n){const e=re(n);return e.me||(e.me=x3(e,Mi(n))),e.me}function x3(n,e){if(n.limitType==="F")return fh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new La(i.field,s)});const t=n.endAt?new Ra(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ra(n.startAt.position,n.startAt.inclusive):null;return fh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function vc(n,e,t){return new io(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function S3(n,e){return Jp(Wt(n),Wt(e))&&n.limitType===e.limitType}function Fi(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Yp(i)).join(", ")}]`),Za(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Wr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Wr(i)).join(",")),`Target(${r})`}(Wt(n))}; limitType=${n.limitType})`}function so(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Mi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){const h=dh(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,Mi(r),i)||r.endAt&&!function(a,c,l){const h=dh(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,Mi(r),i))}(n,e)}function cl(n){return(e,t)=>{let r=!1;for(const i of Mi(n)){const s=k3(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function k3(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):function(s,a,c){const l=a.data.field(s),h=c.data.field(s);return l!==null&&h!==null?ht(l,h):Y(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:n.dir})}}/**
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
 */class C3{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ce,he;function P3(n){switch(n){case F.OK:return Y(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return Y(15467,{code:n})}}function ef(n){if(n===void 0)return fn("GRPC error has no .code"),F.UNKNOWN;switch(n){case Ce.OK:return F.OK;case Ce.CANCELLED:return F.CANCELLED;case Ce.UNKNOWN:return F.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return F.INTERNAL;case Ce.UNAVAILABLE:return F.UNAVAILABLE;case Ce.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ce.NOT_FOUND:return F.NOT_FOUND;case Ce.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ce.ABORTED:return F.ABORTED;case Ce.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ce.DATA_LOSS:return F.DATA_LOSS;default:return Y(39323,{code:n})}}(he=Ce||(Ce={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Er{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_r(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Cp(this.inner)}size(){return this.innerSize}}/**
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
 */const R3=new Ee(Q.comparator);function ct(){return R3}const tf=new Ee(Q.comparator);function Cr(...n){let e=tf;for(const t of n)e=e.insert(t.key,t);return e}function nf(n){let e=tf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function On(){return Ui()}function rf(){return Ui()}function Ui(){return new Er(n=>n.toString(),(n,e)=>n.isEqual(e))}const L3=new Ee(Q.comparator),O3=new Re(Q.comparator);function ce(...n){let e=O3;for(const t of n)e=e.add(t);return e}const D3=new Re(le);function N3(){return D3}/**
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
 */function V3(){return new TextEncoder}/**
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
 */const M3=new Fn([4294967295,4294967295],0);function mh(n){const e=V3().encode(n),t=new _p;return t.update(e),new Uint8Array(t.digest())}function yh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fn([t,r],0),new Fn([i,s],0)]}class ll{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ci(`Invalid padding: ${t}`);if(r<0)throw new Ci(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ci(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ci(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.ye=Fn.fromNumber(this.ge)}we(e,t,r){let i=e.add(t.multiply(Fn.fromNumber(r)));return i.compare(M3)===1&&(i=new Fn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=mh(e),[r,i]=yh(t);for(let s=0;s<this.hashCount;s++){const a=this.we(r,i,s);if(!this.be(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new ll(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=mh(e),[r,i]=yh(t);for(let s=0;s<this.hashCount;s++){const a=this.we(r,i,s);this.ve(a)}}ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Is{constructor(e,t,r,i,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.augmentedDocumentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ts.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Is(ne.min(),i,new Ee(le),ct(),ct(),ce())}}class Ts{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ts(r,t,ce(),ce(),ce())}}/**
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
 */class ca{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=i}}class sf{constructor(e,t){this.targetId=e,this.xe=t}}class af{constructor(e,t,r=Le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class vh{constructor(e){this.targetId=e,this.Ce=0,this.Fe=_h(),this.Oe=Le.EMPTY_BYTE_STRING,this.Me=!1,this.Ne=!0}get current(){return this.Me}get resumeToken(){return this.Oe}get Le(){return this.Ce!==0}get Be(){return this.Ne}Ue(e){e.approximateByteSize()>0&&(this.Ne=!0,this.Oe=e)}ke(){let e=ce(),t=ce(),r=ce();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Y(38017,{changeType:s})}}),new Ts(this.Oe,this.Me,e,t,r)}qe(){this.Ne=!1,this.Fe=_h()}$e(e,t){this.Ne=!0,this.Fe=this.Fe.insert(e,t)}Ke(e){this.Ne=!0,this.Fe=this.Fe.remove(e)}We(){this.Ce+=1}Qe(){this.Ce-=1,W(this.Ce>=0,3241,{Ce:this.Ce,targetId:this.targetId})}Ge(){this.Ne=!0,this.Me=!0}}const Ii="WatchChangeAggregator";class F3{constructor(e){this.ze=e,this.je=new Map,this.He=ct(),this.Je=Ys(),this.Ye=ct(),this.Ze=Ys(),this.Xe=new Ee(le)}et(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.tt(t,e.De):this.nt(t,e.key,e.De);for(const t of e.removedTargetIds)this.nt(t,e.key,e.De)}rt(e){this.forEachTarget(e,t=>{const r=this.je.get(t);if(r)switch(e.state){case 0:this.it(t)&&r.Ue(e.resumeToken);break;case 1:r.Qe(),r.Le||r.qe(),r.Ue(e.resumeToken);break;case 2:r.Qe(),r.Le||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.Ue(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.Ue(e.resumeToken));break;default:Y(56790,{state:e.state})}else H(Ii,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}_t(e){return ir(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:Zp(e)}ot(e){const t=e.targetId,r=e.xe.count,i=this.ut(t);if(i){const s=i.target;if(this._t(s))if(r===0){const a=new Q(ir(s)?me.fromString(s.getPipelineDocuments()[0]):s.path);this.nt(t,a,Ze.newNoDocument(a,ne.min()))}else W(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.ct(t);if(a!==r){const c=this.lt(e),l=c?this.Et(c,e,a):1;if(l!==0){this.st(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Xe=this.Xe.insert(t,h)}}}}}lt(e){const t=e.xe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=Hn(r).toUint8Array()}catch(l){if(l instanceof Pp)return Ut("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new ll(a,i,s)}catch(l){return Ut(l instanceof Ci?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}Et(e,t,r){return t.xe.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.ze.Tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.nt(t,s,null),i++)}),i}Rt(e){const t=new Map;this.je.forEach((s,a)=>{const c=this.ut(a);if(c){if(s.current&&this._t(c.target)){const l=ir(c.target)?me.fromString(c.target.getPipelineDocuments()[0]):c.target.path,h=new Q(l);this.It(h).has(a)||this.At(a,h)||this.nt(a,h,Ze.newNoDocument(h,e))}s.Be&&(t.set(a,s.ke()),s.qe())}});let r=ce();this.Ze.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.ut(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.He.forEach((s,a)=>a.setReadTime(e)),this.Ye.forEach((s,a)=>a.setReadTime(e));const i=new Is(e,t,this.Xe,this.He,this.Ye,r);return this.He=ct(),this.Je=Ys(),this.Ye=ct(),this.Ze=Ys(),this.Xe=new Ee(le),i}tt(e,t){const r=this.je.get(e);if(!r||!this.it(e))return void H(Ii,`addDocumentToTarget received document for unknown inactive target (${e})`);const i=this.At(e,t.key)?2:0;r.$e(t.key,i),ir(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t.key,t):this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.Ze=this.Ze.insert(t.key,this.Vt(t.key).add(e))}nt(e,t,r){const i=this.je.get(e);i&&this.it(e)?(this.At(e,t)?i.$e(t,1):i.Ke(t),this.Ze=this.Ze.insert(t,this.Vt(t).delete(e)),this.Ze=this.Ze.insert(t,this.Vt(t).add(e)),r&&(ir(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t,r):this.He=this.He.insert(t,r))):H(Ii,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.je.delete(e)}ct(e){const t=this.je.get(e);if(!t)return 0;const r=t.ke();return this.ze.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}We(e){let t=this.je.get(e);t||(H(Ii,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new vh(e),this.je.set(e,t)),t.We()}Vt(e){let t=this.Ze.get(e);return t||(t=new Re(le),this.Ze=this.Ze.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Re(le),this.Je=this.Je.insert(e,t)),t}it(e){const t=this.ut(e)!==null;return t||H(Ii,"Detected inactive target",e),t}ut(e){const t=this.je.get(e);return t===void 0||t.Le?null:this.ze.dt(e)}st(e){this.je.set(e,new vh(e)),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.nt(e,t,null)})}At(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Ys(){return new Ee(Q.comparator)}function _h(){return new Ee(Q.comparator)}const U3={asc:"ASCENDING",desc:"DESCENDING"},B3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},z3={and:"AND",or:"OR"};class $3{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _c(n,e){return n.useProto3Json||Za(e)?e:{value:e}}function Oa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ul(n){const e=jn(n);return new _e(e.seconds,e.nanos)}function of(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function la(n,e){return Oa(n,e.toTimestamp())}function Kt(n){return W(!!n,49232),ne.fromTimestamp(ul(n))}function hl(n,e){return wc(n,e).canonicalString()}function wc(n,e){const t=function(i){return new me(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function cf(n){const e=me.fromString(n);return W(pf(e),10190,{key:e.toString()}),e}function Da(n,e){return hl(n.databaseId,e.path)}function Qo(n,e){const t=cf(e);if(t.get(1)!==n.databaseId.projectId)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(uf(t))}function lf(n,e){return hl(n.databaseId,e)}function q3(n){const e=cf(n);return e.length===4?me.emptyPath():uf(e)}function Ec(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function uf(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function wh(n,e,t){return{name:Da(n,e),fields:t.value.mapValue.fields}}function j3(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,p){return h.useProto3Json?(W(p===void 0||typeof p=="string",58123),Le.fromBase64String(p||"")):(W(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Le.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const p=h.code===void 0?F.UNKNOWN:ef(h.code);return new G(p,h.message||"")}(a);t=new af(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qo(n,r.document.name),s=Kt(r.document.updateTime),a=r.document.createTime?Kt(r.document.createTime):ne.min(),c=new _t({mapValue:{fields:r.document.fields}}),l=Ze.newFoundDocument(i,s,a,c),h=r.targetIds||[],p=r.removedTargetIds||[];t=new ca(h,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Qo(n,r.document),s=r.readTime?Kt(r.readTime):ne.min(),a=Ze.newNoDocument(i,s),c=r.removedTargetIds||[];t=new ca([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Qo(n,r.document),s=r.removedTargetIds||[];t=new ca([],s,i,null)}else{if(!("filter"in e))return Y(11601,{ft:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new C3(i,s),c=r.targetId;t=new sf(c,a)}}return t}function H3(n,e){let t;if(e instanceof bs)t={update:wh(n,e.key,e.value)};else if(e instanceof jp)t={delete:Da(n,e.key)};else if(e instanceof wr)t={update:wh(n,e.key,e.data),updateMask:t8(e.fieldMask)};else{if(!(e instanceof d3))return Y(16599,{gt:e.type});t={verify:Da(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof Sa)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Zi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof es)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ts)return{fieldPath:a.field.canonicalString(),increment:c.Re};if(c instanceof ka)return{fieldPath:a.field.canonicalString(),minimum:c.Re};if(c instanceof Ca)return{fieldPath:a.field.canonicalString(),maximum:c.Re};throw Y(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:la(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y(27497)}(n,e.precondition)),t}function G3(n,e){return n&&n.length>0?(W(e!==void 0,14353),n.map(t=>function(i,s){let a=i.updateTime?Kt(i.updateTime):Kt(s);return a.isEqual(ne.min())&&(a=Kt(s)),new l3(a,i.transformResults||[])}(t,e))):[]}function W3(n,e){return{documents:[lf(n,e.path)]}}function K3(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=lf(n,i);const s=function(h){if(h.length!==0)return df(Xt.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(p=>function(b){return{field:Pr(b.field),direction:J3(b.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=_c(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{yt:t,parent:i}}function Y3(n){let e=q3(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){W(r===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(g){const b=hf(g);return b instanceof Xt&&Wp(b)?b.getFilters():[b]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(b=>function(R){return new La(Rr(R.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(b))}(t.orderBy));let c=null;t.limit&&(c=function(g){let b;return b=typeof g=="object"?g.value:g,Za(b)?null:b}(t.limit));let l=null;t.startAt&&(l=function(g){const b=!!g.before,C=g.values||[];return new Ra(C,b)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const b=!g.before,C=g.values||[];return new Ra(C,b)}(t.endAt)),I3(e,i,a,s,c,"F",l,h)}function Q3(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function X3(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function hf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Rr(t.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Rr(t.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rr(t.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Rr(t.unaryFilter.field);return Me.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(n):n.fieldFilter!==void 0?function(t){return Me.create(Rr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Xt.create(t.compositeFilter.filters.map(r=>hf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(t.compositeFilter.op))}(n):Y(30097,{filter:n})}function J3(n){return U3[n]}function Z3(n){return B3[n]}function e8(n){return z3[n]}function Pr(n){return{fieldPath:n.canonicalString()}}function Rr(n){return Ve.fromServerFormat(n.fieldPath)}function df(n){return n instanceof Me?function(t){if(t.op==="=="){if(dt(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NAN"}};if(wt(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dt(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NAN"}};if(wt(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(t.field),op:Z3(t.op),value:t.value}}}(n):n instanceof Xt?function(t){const r=t.getFilters().map(i=>df(i));return r.length===1?r[0]:{compositeFilter:{op:e8(t.op),filters:r}}}(n):Y(54877,{filter:n})}function t8(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function ff(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function ns(n,e){const t={fields:{}};return e.forEach((r,i)=>{if(typeof i!="string")throw new Error(`Cannot encode map with non-string key: ${i}`);t.fields[i]=r._toProto(n)}),{mapValue:t}}function gf(n){return{stringValue:n}}/**
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
 */function ao(n){return new $3(n,!0)}/**
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
 */class Tt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tt(Le.fromBase64String(e))}catch(t){throw new G(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tt(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ws(e,Tt._jsonSchema))return Tt.fromBase64String(e.bytes)}}Tt._jsonSchemaVersion="firestore/bytes/1.0",Tt._jsonSchema={type:Pe("string",Tt._jsonSchemaVersion),bytes:Pe("string")};/**
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
 */class dl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new G(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function n8(){return new dl(jr)}/**
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
 */class mf{constructor(e){this._methodName=e}}/**
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
 */class Yt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new G(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new G(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yt._jsonSchemaVersion}}static fromJSON(e){if(ws(e,Yt._jsonSchema))return new Yt(e.latitude,e.longitude)}}function yf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */Yt._jsonSchemaVersion="firestore/geoPoint/1.0",Yt._jsonSchema={type:Pe("string",Yt._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};class r8{bt(e){}shutdown(){}}/**
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
 */const Eh="ConnectivityMonitor";class bh{constructor(){this.vt=()=>this.St(),this.Dt=()=>this.xt(),this.Ct=[],this.Ft()}bt(e){this.Ct.push(e)}shutdown(){window.removeEventListener("online",this.vt),window.removeEventListener("offline",this.Dt)}Ft(){window.addEventListener("online",this.vt),window.addEventListener("offline",this.Dt)}St(){H(Eh,"Network connectivity changed: AVAILABLE");for(const e of this.Ct)e(0)}xt(){H(Eh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Ct)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qs=null;function bc(){return Qs===null?Qs=function(){return 268435456+Math.round(2147483648*Math.random())}():Qs++,"0x"+Qs.toString(16)}/**
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
 */const Xo="RestConnection",i8={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class s8{get Ot(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Mt=t+"://"+e.host,this.Nt=`projects/${r}/databases/${i}`,this.Lt=this.databaseId.database===Aa?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Bt(e,t,r,i,s){const a=bc(),c=this.Ut(e,t.toUriEncodedString());H(Xo,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Nt,"x-goog-request-params":this.Lt};this.kt(l,i,s);const{host:h}=new URL(c),p=fs(h);return this.qt(e,c,l,r,p).then(g=>(H(Xo,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Ut(Xo,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",r),g})}$t(e,t,r,i,s,a){return this.Bt(e,t,r,i,s)}kt(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ei}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Ut(e,t){const r=i8[e];let i=`${this.Mt}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class a8{constructor(e){this.Kt=e.Kt,this.Wt=e.Wt}Qt(e){this.Gt=e}zt(e){this.jt=e}Ht(e){this.Jt=e}onMessage(e){this.Yt=e}close(){this.Wt()}send(e){this.Kt(e)}Zt(){this.Gt()}Xt(){this.jt()}en(e){this.Jt(e)}tn(e){this.Yt(e)}}/**
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
 */const Qe="WebChannelConnection",Ti=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Fr extends s8{constructor(e){super(e),this.nn=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static rn(){if(!Fr.sn){const e=Ip();Ti(e,bp.STAT_EVENT,t=>{t.stat===pc.PROXY?H(Qe,"STAT_EVENT: detected buffering proxy"):t.stat===pc.NOPROXY&&H(Qe,"STAT_EVENT: detected no buffering proxy")}),Fr.sn=!0}}qt(e,t,r,i,s){const a=bc();return new Promise((c,l)=>{const h=new wp;h.setWithCredentials(!0),h.listenOnce(Ep.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case sa.NO_ERROR:const g=h.getResponseJson();H(Qe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case sa.TIMEOUT:H(Qe,`RPC '${e}' ${a} timed out`),l(new G(F.DEADLINE_EXCEEDED,"Request time out"));break;case sa.HTTP_ERROR:const b=h.getStatus();if(H(Qe,`RPC '${e}' ${a} failed with status:`,b,"response text:",h.getResponseText()),b>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const R=C?.error;if(R&&R.status&&R.message){const M=function(X){const O=X.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(O)>=0?O:F.UNKNOWN}(R.status);l(new G(M,R.message))}else l(new G(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new G(F.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{_n:e,streamId:a,an:h.getLastErrorCode(),un:h.getLastError()})}}finally{H(Qe,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(i);H(Qe,`RPC '${e}' ${a} sending request:`,i),h.send(t,"POST",p,r,15)})}cn(e,t,r){const i=bc(),s=[this.Mt,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.kt(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=s.join("");H(Qe,`Creating RPC '${e}' stream ${i}: ${h}`,c);const p=a.createWebChannel(h,c);this.En(p);let g=!1,b=!1;const C=new a8({Kt:R=>{b?H(Qe,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(g||(H(Qe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),H(Qe,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},Wt:()=>p.close()});return Ti(p,ki.EventType.OPEN,()=>{b||(H(Qe,`RPC '${e}' stream ${i} transport opened.`),C.Zt())}),Ti(p,ki.EventType.CLOSE,()=>{b||(b=!0,H(Qe,`RPC '${e}' stream ${i} transport closed`),C.en(),this.hn(p))}),Ti(p,ki.EventType.ERROR,R=>{b||(b=!0,Ut(Qe,`RPC '${e}' stream ${i} transport errored. Name:`,R.name,"Message:",R.message),C.en(new G(F.UNAVAILABLE,"The operation could not be completed")))}),Ti(p,ki.EventType.MESSAGE,R=>{if(!b){const M=R.data[0];W(!!M,16349);const q=M,X=q?.error||q[0]?.error;if(X){H(Qe,`RPC '${e}' stream ${i} received error:`,X);const O=X.status;let $=function(fe){const E=Ce[fe];if(E!==void 0)return ef(E)}(O),ae=X.message;O==="NOT_FOUND"&&ae.includes("database")&&ae.includes("does not exist")&&ae.includes(this.databaseId.database)&&Ut(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),$===void 0&&($=F.INTERNAL,ae="Unknown error status: "+O+" with message "+X.message),b=!0,C.en(new G($,ae)),p.close()}else H(Qe,`RPC '${e}' stream ${i} received:`,M),C.tn(M)}}),Fr.rn(),setTimeout(()=>{C.Xt()},0),C}terminate(){this.nn.forEach(e=>e.close()),this.nn=[]}En(e){this.nn.push(e)}hn(e){this.nn=this.nn.filter(t=>t===e)}kt(e,t,r){super.kt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Tp()}}/**
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
 */function o8(n){return new Fr(n)}Fr.sn=!1;class vf{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Tn=e,this.timerId=t,this.Pn=r,this.Rn=i,this.In=s,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(e){this.cancel();const t=Math.floor(this.An+this.pn()),r=Math.max(0,Date.now()-this.dn),i=Math.max(0,t-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.An} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,i,()=>(this.dn=Date.now(),e())),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
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
 */const Ih="PersistentStream";class _f{constructor(e,t,r,i,s,a,c,l){this.Tn=e,this.yn=r,this.wn=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.bn=0,this.vn=null,this.Sn=null,this.stream=null,this.Dn=0,this.xn=new vf(e,t)}Cn(){return this.state===1||this.state===5||this.Fn()}Fn(){return this.state===2||this.state===3}start(){this.Dn=0,this.state!==4?this.auth():this.On()}async stop(){this.Cn()&&await this.close(0)}Mn(){this.state=0,this.xn.reset()}Nn(){this.Fn()&&this.vn===null&&(this.vn=this.Tn.enqueueAfterDelay(this.yn,6e4,()=>this.Ln()))}Bn(e){this.Un(),this.stream.send(e)}async Ln(){if(this.Fn())return this.close(0)}Un(){this.vn&&(this.vn.cancel(),this.vn=null)}kn(){this.Sn&&(this.Sn.cancel(),this.Sn=null)}async close(e,t){this.Un(),this.kn(),this.xn.cancel(),this.bn++,e!==4?this.xn.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(fn(t.toString()),fn("Using maximum backoff delay to prevent overloading the backend."),this.xn.fn()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ht(t)}qn(){}auth(){this.state=1;const e=this.$n(this.bn),t=this.bn;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.bn===t&&this.Kn(r,i)},r=>{e(()=>{const i=new G(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Wn(i)})})}Kn(e,t){const r=this.$n(this.bn);this.stream=this.Qn(e,t),this.stream.Qt(()=>{r(()=>this.listener.Qt())}),this.stream.zt(()=>{r(()=>(this.state=2,this.Sn=this.Tn.enqueueAfterDelay(this.wn,1e4,()=>(this.Fn()&&(this.state=3),Promise.resolve())),this.listener.zt()))}),this.stream.Ht(i=>{r(()=>this.Wn(i))}),this.stream.onMessage(i=>{r(()=>++this.Dn==1?this.Gn(i):this.onNext(i))})}On(){this.state=5,this.xn.mn(async()=>{this.state=0,this.start()})}Wn(e){return H(Ih,`close with error: ${e}`),this.stream=null,this.close(4,e)}$n(e){return t=>{this.Tn.enqueueAndForget(()=>this.bn===e?t():(H(Ih,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class c8 extends _f{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}Qn(e,t){return this.connection.cn("Listen",e,t)}Gn(e){return this.onNext(e)}onNext(e){this.xn.reset();const t=j3(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?ne.min():a.readTime?Kt(a.readTime):ne.min()}(e);return this.listener.zn(t,r)}jn(e){const t={};t.database=Ec(this.serializer),t.addTarget=function(s,a){let c;const l=a.target;if(c=ir(l)?{pipelineQuery:X3(s,l)}:Zp(l)?{documents:W3(s,l)}:{query:K3(s,l).yt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=of(s,a.resumeToken);const h=_c(s,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ne.min())>0){c.readTime=Oa(s,a.snapshotVersion.toTimestamp());const h=_c(s,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Q3(this.serializer,e);r&&(t.labels=r),this.Bn(t)}Hn(e){const t={};t.database=Ec(this.serializer),t.removeTarget=e,this.Bn(t)}}class l8 extends _f{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get Jn(){return this.Dn>0}start(){this.lastStreamToken=void 0,super.start()}qn(){this.Jn&&this.Yn([])}Qn(e,t){return this.connection.cn("Write",e,t)}Gn(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.Zn()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.xn.reset();const t=G3(e.writeResults,e.commitTime),r=Kt(e.commitTime);return this.listener.Xn(r,t)}er(){const e={};e.database=Ec(this.serializer),this.Bn(e)}Yn(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>H3(this.serializer,r))};this.Bn(t)}}/**
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
 */class u8{}class h8 extends u8{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.tr=!1}nr(){if(this.tr)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.")}Bt(e,t,r,i){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Bt(e,wc(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(F.UNKNOWN,s.toString())})}$t(e,t,r,i,s){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.$t(e,wc(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(F.UNKNOWN,a.toString())})}terminate(){this.tr=!0,this.connection.terminate()}}function d8(n,e,t,r){return new h8(n,e,t,r)}/**
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
 */const p8="ComponentProvider",Th=new Map;function f8(n,e,t,r,i){return new n3(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,yf(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const Ah={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wf=41943040;class at{static withCacheSize(e){return new at(e,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}at.DEFAULT_COLLECTION_PERCENTILE=10,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,at.DEFAULT=new at(wf,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),at.DISABLED=new at(-1,0,0);/**
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
 */const xh="LruGarbageCollector",g8=1048576;function Sh([n,e],[t,r]){const i=le(n,t);return i===0?le(e,r):i}class m8{constructor(e){this.rr=e,this.buffer=new Re(Sh),this.ir=0}sr(){return++this.ir}_r(e){const t=[e,this.sr()];if(this.buffer.size<this.rr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Sh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class y8{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.ur(6e4)}stop(){this.ar&&(this.ar.cancel(),this.ar=null)}get started(){return this.ar!==null}ur(e){H(xh,`Garbage collection scheduled in ${e}ms`),this.ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ni(t)?H(xh,"Ignoring IndexedDB error during garbage collection: ",t):await ti(t)}await this.ur(3e5)})}}class v8{constructor(e,t){this.cr=e,this.params=t}calculateTargetCount(e,t){return this.cr.lr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Ja.ce);const r=new m8(t);return this.cr.forEachTarget(e,i=>r._r(i.sequenceNumber)).next(()=>this.cr.Er(e,i=>r._r(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.cr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.cr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Ah)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ah):this.hr(e,t))}getCacheSize(e){return this.cr.getCacheSize(e)}hr(e,t){let r,i,s,a,c,l,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,t))).next(g=>(s=g,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),kr()<=ue.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-p}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function _8(n,e){return new v8(n,e)}/**
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
 */const Ef="firestore.googleapis.com",kh=!0;class Ch{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ef,this.ssl=kh}else this.host=e.host,this.ssl=e.ssl??kh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<g8)throw new G(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yf(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class pl{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ch({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ch(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new L4;switch(r.type){case"firstParty":return new V4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Th.get(t);r&&(H(p8,"Removing Datastore"),Th.delete(t),r.terminate())}(this),Promise.resolve()}}function w8(n,e,t,r={}){n=Wi(n,pl);const i=fs(e),s=n._getSettings(),a={...s,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&od(`https://${c}`),s.host!==Ef&&s.host!==c&&Ut("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:c,ssl:i,emulatorOptions:r};if(!$n(l,a)&&(n._setSettings(l),r.mockUserToken)){let h,p;if(typeof r.mockUserToken=="string")h=r.mockUserToken,p=Je.MOCK_USER;else{h=cg(r.mockUserToken,n._app?.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new G(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Je(g)}n._authCredentials=new O4(new Sp(h,p))}}/**
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
 */class fl{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fl(this.firestore,e,this._query)}}class Ue{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}toJSON(){return{type:Ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ws(t,Ue._jsonSchema))return new Ue(e,r||null,new Q(me.fromString(t.referencePath)))}}Ue._jsonSchemaVersion="firestore/documentReference/1.0",Ue._jsonSchema={type:Pe("string",Ue._jsonSchemaVersion),referencePath:Pe("string")};class rs extends fl{constructor(e,t,r){super(e,t,ol(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new Q(e))}withConverter(e){return new rs(this.firestore,e,this._path)}}function bf(n,e,...t){if(n=Ge(n),arguments.length===1&&(e=tl.newId()),$4("doc","path",e),n instanceof pl){const r=me.fromString(e,...t);return th(r),new Ue(n,null,new Q(r))}{if(!(n instanceof Ue||n instanceof rs))throw new G(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(me.fromString(e,...t));return th(r),new Ue(n.firestore,n instanceof rs?n.converter:null,new Q(r))}}/**
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
 */class lt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:lt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ws(e,lt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new lt(e.vectorValues);throw new G(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}lt._jsonSchemaVersion="firestore/vectorValue/1.0",lt._jsonSchema={type:Pe("string",lt._jsonSchemaVersion),vectorValues:Pe("object")};/**
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
 */const E8=/^__.*__$/;class b8{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,t,this.fieldTransforms):new bs(e,this.data,t,this.fieldTransforms)}}function If(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:n})}}class gl{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new gl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Na(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(If(this.dataSource)&&E8.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class I8{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ao(e)}createContext(e,t,r,i=!1){return new gl({dataSource:e,methodName:t,targetDoc:r,path:Ve.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function T8(n){const e=n._freezeSettings(),t=ao(n._databaseId);return new I8(n._databaseId,!!e.ignoreUndefinedProperties,t)}function A8(n,e,t,r,i,s={}){const a=n.createContext(s.merge||s.mergeFields?2:0,e,t,i);xf("Data must be an object, but it was:",a,r);const c=Tf(r,a);let l,h;if(s.merge)l=new Vt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const b=oo(e,g,t);if(!a.contains(b))throw new G(F.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);k8(p,b)||p.push(b)}l=new Vt(p),h=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,h=a.fieldTransforms;return new b8(new _t(c),l,h)}function is(n,e,t){if(Af(n=Ge(n)))return xf("Unsupported field value:",e,n),Tf(n,e);if(n instanceof mf)return function(i,s){if(!If(s.dataSource))throw s.createError(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(i,s){const a=[];let c=0;for(const l of i){let h=is(l,s.childContextForArray(c));h==null&&(h={nullValue:"NULL_VALUE"}),a.push(h),c++}return{arrayValue:{values:a}}}(n,e)}return function(i,s,a){if((i=Ge(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return sl(s.serializer,i,a);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const c=_e.fromDate(i);return{timestampValue:Oa(s.serializer,c)}}if(i instanceof _e){const c=new _e(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Oa(s.serializer,c)}}if(i instanceof Yt)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Tt)return{bytesValue:of(s.serializer,i._byteString)};if(i instanceof Ue){const c=s.databaseId,l=i.firestore._databaseId;if(!l.isEqual(c))throw s.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:hl(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof lt)return function(l,h){const p=l instanceof lt?l.toArray():l;return{mapValue:{fields:{[Np]:{stringValue:Vp},[Xi]:{arrayValue:{values:p.map(b=>{if(typeof b!="number")throw h.createError("VectorValues must only contain numeric values.");return to(h.serializer,b)})}}}}}}(i,s);if(ff(i))return i._toProto(s.serializer);throw s.createError(`Unsupported field value: ${nl(i)}`)}(n,e,t)}function Tf(n,e){const t={};return Cp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_r(n,(r,i)=>{const s=is(i,e.childContextForField(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Af(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof Yt||n instanceof Tt||n instanceof Ue||n instanceof mf||n instanceof lt||ff(n))}function xf(n,e,t){if(!Af(t)||!_s(t)){const r=nl(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function oo(n,e,t){if((e=Ge(e))instanceof dl)return e._internalPath;if(typeof e=="string")return S8(n,e);throw Na("Field path arguments must be of type string or ",n,!1,void 0,t)}const x8=new RegExp("[~\\*/\\[\\]]");function S8(n,e,t){if(e.search(x8)>=0)throw Na(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new dl(...e.split("."))._internalPath}catch{throw Na(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Na(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new G(F.INVALID_ARGUMENT,c+n+l)}function k8(n,e){return n.some(t=>t.isEqual(e))}function C8(n){return typeof n._readUserData=="function"}/**
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
 */class tt{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=_t.empty();for(const i in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(i)){const s=this.optionDefinitions[i];if(i in e){const a=e[i];let c;s.nestedOptions&&_s(a)?c={mapValue:{fields:new tt(s.nestedOptions).getOptionsProto(t,a)}}:a&&(c=is(a,t)??void 0),c&&r.set(Ve.fromServerFormat(s.serverName),c)}}return r}getOptionsProto(e,t,r){const i=this._getKnownOptions(t,e);if(r){const s=new Map(e3(r,(a,c)=>[Ve.fromServerFormat(c),a!==void 0?is(a,e):null]));i.setAll(s)}return i.value.mapValue.fields??{}}}/**
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
 */function P8(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!_s(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function R8(n){return new lt(n)}/**
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
 */function B(n){let e;return n instanceof br?n:(e=_s(n)?M8(n):n instanceof Array?F8(n):Sf(n,void 0),e)}function Jo(n){if(n instanceof br)return n;if(n instanceof lt)return ss(n);if(Array.isArray(n))return ss(R8(n));throw new Error("Unsupported value: "+typeof n)}function ml(n){return X4(n)?D8(n):B(n)}class br{constructor(){this._protoValueType="ProtoValue"}add(e){return new N("add",[this,B(e)],"add")}asBoolean(){if(this instanceof Wn)return this;if(this instanceof ri)return new Cf(this);if(this instanceof As)return new V8(this);if(this instanceof N)return new kf(this);throw new G("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new N("subtract",[this,B(e)],"subtract")}multiply(e){return new N("multiply",[this,B(e)],"multiply")}divide(e){return new N("divide",[this,B(e)],"divide")}mod(e){return new N("mod",[this,B(e)],"mod")}equal(e){return new N("equal",[this,B(e)],"equal").asBoolean()}notEqual(e){return new N("not_equal",[this,B(e)],"notEqual").asBoolean()}lessThan(e){return new N("less_than",[this,B(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new N("less_than_or_equal",[this,B(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new N("greater_than",[this,B(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new N("greater_than_or_equal",[this,B(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(i=>B(i));return new N("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new N("array_contains",[this,B(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Pi(e.map(B),"arrayContainsAll"):e;return new N("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Pi(e.map(B),"arrayContainsAny"):e;return new N("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new N("array_reverse",[this])}arrayLength(){return new N("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Pi(e.map(B),"equalAny"):e;return new N("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Pi(e.map(B),"notEqualAny"):e;return new N("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new N("exists",[this],"exists").asBoolean()}charLength(){return new N("char_length",[this],"charLength")}like(e){return new N("like",[this,B(e)],"like").asBoolean()}regexContains(e){return new N("regex_contains",[this,B(e)],"regexContains").asBoolean()}regexFind(e){return new N("regex_find",[this,B(e)],"regexFind")}regexFindAll(e){return new N("regex_find_all",[this,B(e)],"regexFindAll")}regexMatch(e){return new N("regex_match",[this,B(e)],"regexMatch").asBoolean()}stringContains(e){return new N("string_contains",[this,B(e)],"stringContains").asBoolean()}startsWith(e){return new N("starts_with",[this,B(e)],"startsWith").asBoolean()}endsWith(e){return new N("ends_with",[this,B(e)],"endsWith").asBoolean()}toLower(){return new N("to_lower",[this],"toLower")}toUpper(){return new N("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(B(e)),new N("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(B(e)),new N("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(B(e)),new N("rtrim",t,"rtrim")}type(){return new N("type",[this])}isType(e){return new N("is_type",[this,ss(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(B);return new N("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new N("string_index_of",[this,B(e)],"stringIndexOf")}stringRepeat(e){return new N("string_repeat",[this,B(e)],"stringRepeat")}stringReplaceAll(e,t){return new N("string_replace_all",[this,B(e),B(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new N("string_replace_one",[this,B(e),B(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(B);return new N("concat",[this,...r],"concat")}reverse(){return new N("reverse",[this],"reverse")}arrayFilter(e,t){return new N("array_filter",[this,B(e),t],"arrayFilter")}arrayTransform(e,t){return new N("array_transform",[this,B(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new N("array_transform",[this,B(e),B(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,B(e)];return t!==void 0&&r.push(B(t)),new N("array_slice",r,"arraySlice")}arrayFirst(){return new N("array_first",[this],"arrayFirst")}arrayFirstN(e){return new N("array_first_n",[this,B(e)],"arrayFirstN")}arrayLast(){return new N("array_last",[this],"arrayLast")}arrayLastN(e){return new N("array_last_n",[this,B(e)],"arrayLastN")}arrayMaximum(){return new N("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new N("maximum_n",[this,B(e)],"arrayMaximumN")}arrayMinimum(){return new N("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new N("minimum_n",[this,B(e)],"arrayMinimumN")}arrayIndexOf(e){return new N("array_index_of",[this,B(e),B("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new N("array_index_of",[this,B(e),B("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new N("array_index_of_all",[this,B(e)],"arrayIndexOfAll")}byteLength(){return new N("byte_length",[this],"byteLength")}ceil(){return new N("ceil",[this])}floor(){return new N("floor",[this])}abs(){return new N("abs",[this])}exp(){return new N("exp",[this])}mapGet(e){return new N("map_get",[this,ss(e)],"mapGet")}mapSet(e,t,...r){const i=[this,B(e),B(t),...r.map(B)];return new N("map_set",i,"mapSet")}mapKeys(){return new N("map_keys",[this],"mapKeys")}mapValues(){return new N("map_values",[this],"mapValues")}mapEntries(){return new N("map_entries",[this],"mapEntries")}getField(e){return new N("get_field",[this,B(e)],"get_field")}count(){return yt._create("count",[this],"count")}sum(){return yt._create("sum",[this],"sum")}average(){return yt._create("average",[this],"average")}minimum(){return yt._create("minimum",[this],"minimum")}maximum(){return yt._create("maximum",[this],"maximum")}first(){return yt._create("first",[this],"first")}last(){return yt._create("last",[this],"last")}arrayAgg(){return yt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return yt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return yt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new N("maximum",[this,...r.map(B)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new N("minimum",[this,...r.map(B)],"minimum")}vectorLength(){return new N("vector_length",[this],"vectorLength")}cosineDistance(e){return new N("cosine_distance",[this,Jo(e)],"cosineDistance")}dotProduct(e){return new N("dot_product",[this,Jo(e)],"dotProduct")}euclideanDistance(e){return new N("euclidean_distance",[this,Jo(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new N("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new N("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new N("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new N("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new N("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new N("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new N("timestamp_add",[this,B(e),B(t)],"timestampAdd")}timestampSubtract(e,t){return new N("timestamp_subtract",[this,B(e),B(t)],"timestampSubtract")}timestampDiff(e,t){return new N("timestamp_diff",[this,ml(e),B(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,B(e)];return t&&r.push(B(t)),new N("timestamp_extract",r,"timestampExtract")}documentId(){return new N("document_id",[this],"documentId")}parent(){return new N("parent",[this],"parent")}substring(e,t){const r=B(e);return new N("substring",t===void 0?[this,r]:[this,r,B(t)],"substring")}arrayGet(e){return new N("array_get",[this,B(e)],"arrayGet")}isError(){return new N("is_error",[this],"isError").asBoolean()}ifError(e){const t=new N("if_error",[this,B(e)],"ifError");return e instanceof Wn?t.asBoolean():t}isAbsent(){return new N("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new N("map_remove",[this,B(e)],"mapRemove")}mapMerge(e,...t){const r=B(e),i=t.map(B);return new N("map_merge",[this,r,...i],"mapMerge")}pow(e){return new N("pow",[this,B(e)])}trunc(e){return e===void 0?new N("trunc",[this]):new N("trunc",[this,B(e)],"trunc")}round(e){return e===void 0?new N("round",[this]):new N("round",[this,B(e)],"round")}collectionId(){return new N("collection_id",[this])}length(){return new N("length",[this])}ln(){return new N("ln",[this])}sqrt(){return new N("sqrt",[this])}stringReverse(){return new N("string_reverse",[this])}ifAbsent(e){return new N("if_absent",[this,B(e)],"ifAbsent")}ifNull(e){return new N("if_null",[this,B(e)],"ifNull")}coalesce(e,...t){return new N("coalesce",[this,B(e),...t.map(B)],"coalesce")}join(e){return new N("join",[this,B(e)],"join")}log10(){return new N("log10",[this])}arraySum(){return new N("sum",[this])}split(e){return new N("split",[this,B(e)])}timestampTruncate(e,t){const r=[this,B(e)];return t&&r.push(B(t)),new N("timestamp_trunc",r)}ascending(){return U8(this)}descending(){return B8(this)}as(e){return new O8(this,e,"as")}}class yt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const i=new yt(e,t);return i._methodName=r,i}as(e){return new L8(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class L8{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class O8{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Pi extends br{constructor(e,t){super(),this.Rr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.Rr.map(t=>t._toProto(e))}}}_readUserData(e){this.Rr.forEach(t=>t._readUserData(e))}}class As extends br{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new N("geo_distance",[this,B(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function D8(n){return N8(n,"field")}function N8(n,e){return new As(typeof n=="string"?jr===n?n8()._internalPath:oo("field",n):n._internalPath,e)}class ri extends br{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new ri(e,void 0);return t._protoValue=e,t}_toProto(e){return W(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,P8(this._protoValue)||(this._protoValue=is(this.value,e))}}function ss(n,e){return Sf(n,"constant")}function Sf(n,e){const t=new ri(n,e);return typeof n=="boolean"?new Cf(t):t}class N extends br{constructor(e,t,r,i){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),i!==void 0&&(this._options=i)}get _optionsUtil(){return new tt({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Wn extends br{get _methodName(){return this._expr._methodName}countIf(){return yt._create("count_if",[this],"countIf")}not(){return new N("not",[this],"not").asBoolean()}conditional(e,t){return new N("conditional",[this,e,t],"conditional")}ifError(e){const t=B(e),r=new N("if_error",[this,t],"ifError");return t instanceof Wn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class kf extends Wn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Cf extends Wn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class V8 extends Wn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function M8(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const i=n[r];t.push(ss(r)),t.push(B(i))}return new N("map",t,"map")}function F8(n){return function(t,r){return new N("array",t.map(i=>B(i)),r)}(n,"array")}function U8(n){return new Pf(ml(n),"ascending","ascending")}function B8(n){return new Pf(ml(n),"descending","descending")}class Pf{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:gf(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class bt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Rf extends bt{get _name(){return"add_fields"}get _optionsUtil(){return new tt({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[ns(e,this.fields)]}}_readUserData(e){super._readUserData(e),Kn(this.fields,e)}}class Lf extends bt{get _name(){return"aggregate"}get _optionsUtil(){return new tt({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[ns(e,this.accumulators),ns(e,this.groups)]}}_readUserData(e){super._readUserData(e),Kn(this.groups,e),Kn(this.accumulators,e)}}class Of extends bt{get _name(){return"distinct"}get _optionsUtil(){return new tt({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[ns(e,this.groups)]}}_readUserData(e){super._readUserData(e),Kn(this.groups,e)}}class co extends bt{get _name(){return"collection"}get _optionsUtil(){return new tt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Vr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Vr}]}}_readUserData(e){super._readUserData(e)}}class lo extends bt{get _name(){return"collection_group"}get _optionsUtil(){return new tt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class yl extends bt{get _name(){return"database"}get _optionsUtil(){return new tt({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class vl extends bt{get _name(){return"documents"}get _optionsUtil(){return new tt({})}constructor(e,t){if(super(t),!e||e.length===0)throw new G(F.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(s=>s.startsWith("/")?s:"/"+s),i=new Set(r);if(i.size!==r.length)throw new G(F.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=r,this.mr=i}_toProto(e){return{...super._toProto(e),args:this.dr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class _l extends bt{get _name(){return"where"}get _optionsUtil(){return new tt({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Kn(this.condition,e)}}class as extends bt{get _name(){return"limit"}get _optionsUtil(){return new tt({})}constructor(e,t){W(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[sl(e,this.limit)]}}}class Ph extends bt{get _name(){return"offset"}get _optionsUtil(){return new tt({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[sl(e,this.offset)]}}}class z8 extends bt{get _name(){return"select"}get _optionsUtil(){return new tt({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[ns(e,this.selections)]}}_readUserData(e){super._readUserData(e),Kn(this.selections,e)}}class wl extends bt{get _name(){return"sort"}get _optionsUtil(){return new tt({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),Kn(this.orderings,e)}}class El extends bt{get _name(){return"replace_with"}get _optionsUtil(){return new tt({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),gf(El.pr)]}}_readUserData(e){super._readUserData(e),Kn(this.map,e)}}El.pr="full_replace";function Kn(n,e){return C8(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}// Copyright 2024 Google LLC* @license
class ot{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return uo(this)}getPipelineCollectionGroup(){return bl(this)}getPipelineCollectionId(){return $8(this)}getPipelineDocuments(){return Ic(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((i,s)=>{i._name!==Of.name&&i._name!==Lf.name||(r="keyless"),i._name===z8.name&&r==="exact"&&(r="augmented"),i._name===Rf.name&&s<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return Bn(this)}}function Bn(n){const e=n.stages[0];return e instanceof co||e instanceof lo||e instanceof yl||e instanceof vl?e._name:"unknown"}function uo(n){if(Bn(n)==="collection")return n.stages[0].Vr}function bl(n){if(Bn(n)==="collection_group")return n.stages[0].collectionId}function $8(n){switch(Bn(n)){case"collection":return me.fromString(uo(n)).lastSegment();case"collection_group":return bl(n);default:return}}function Ic(n){if(Bn(n)==="documents")return n.stages[0].dr}// Copyright 2024 Google LLC* @license
class T{constructor(e,t){this.type=e,this.value=t}static vr(){return new T("ERROR",void 0)}static Sr(){return new T("UNSET",void 0)}static Dr(){return new T("NULL",Gr)}static newValue(e){return wt(e)?new T("NULL",Gr):function(r){return!!r&&"booleanValue"in r}(e)?new T("BOOLEAN",e):Ht(e)?new T("INT",e):or(e)?new T("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new T("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new T("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new T("BYTES",e):e.referenceValue?new T("REFERENCE",e):e.geoPointValue?new T("GEO_POINT",e):Kr(e)?new T("ARRAY",e):xa(e)?new T("VECTOR",e):lr(e)?new T("MAP",e):new T("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function Bi(n){if(!n.Cr())return n.value}function Df(n){return n instanceof Wn?n._expr:n}function J(n){if((n=Df(n))instanceof As)return new q8(n);if(n instanceof ri)return new j8(n);if(n instanceof Pi)return new H8(n);if(n instanceof N){if(n.name==="add")return new K8(n);if(n.name==="subtract")return new Y8(n);if(n.name==="multiply")return new Q8(n);if(n.name==="divide")return new X8(n);if(n.name==="mod")return new J8(n);if(n.name==="and")return new Z8(n);if(n.name==="equal")return new h9(n);if(n.name==="not_equal")return new d9(n);if(n.name==="less_than")return new p9(n);if(n.name==="less_than_or_equal")return new f9(n);if(n.name==="greater_than")return new g9(n);if(n.name==="greater_than_or_equal")return new m9(n);if(n.name==="array_concat")return new y9(n);if(n.name==="array_reverse")return new v9(n);if(n.name==="array_contains")return new _9(n);if(n.name==="array_contains_all")return new w9(n);if(n.name==="array_contains_any")return new E9(n);if(n.name==="array_length")return new b9(n);if(n.name==="array_element")return new I9(n);if(n.name==="equal_any")return new Nf(n);if(n.name==="not_equal_any")return new t9(n);if(n.name==="is_nan")return new n9(n);if(n.name==="is_not_nan")return new r9(n);if(n.name==="is_null")return new i9(n);if(n.name==="is_not_null")return new s9(n);if(n.name==="is_error")return new a9(n);if(n.name==="exists")return new o9(n);if(n.name==="not")return new ho(n);if(n.name==="or")return new e9(n);if(n.name==="xor")return new Il(n);if(n.name==="conditional")return new c9(n);if(n.name==="maximum")return new l9(n);if(n.name==="minimum")return new u9(n);if(n.name==="reverse")return new T9(n);if(n.name==="replace_first")return new A9(n);if(n.name==="replace_all")return new x9(n);if(n.name==="char_length")return new S9(n);if(n.name==="byte_length")return new k9(n);if(n.name==="like")return new C9(n);if(n.name==="regex_contains")return new P9(n);if(n.name==="regex_match")return new R9(n);if(n.name==="string_contains")return new L9(n);if(n.name==="starts_with")return new O9(n);if(n.name==="ends_with")return new D9(n);if(n.name==="to_lower")return new N9(n);if(n.name==="to_upper")return new V9(n);if(n.name==="trim")return new M9(n);if(n.name==="string_concat")return new F9(n);if(n.name==="map_get")return new U9(n);if(n.name==="cosine_distance")return new B9(n);if(n.name==="dot_product")return new z9(n);if(n.name==="euclidean_distance")return new $9(n);if(n.name==="vector_length")return new q9(n);if(n.name==="unix_micros_to_timestamp")return new K9(n);if(n.name==="timestamp_to_unix_micros")return new X9(n);if(n.name==="unix_millis_to_timestamp")return new Y9(n);if(n.name==="timestamp_to_unix_millis")return new J9(n);if(n.name==="unix_seconds_to_timestamp")return new Q9(n);if(n.name==="timestamp_to_unix_seconds")return new Z9(n);if(n.name==="timestamp_add")return new e5(n);if(n.name==="timestamp_subtract")return new t5(n)}throw new Error(`Unknown Expr : ${n}`)}class q8{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===jr)return T.newValue({referenceValue:Da(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return T.newValue({timestampValue:la(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return T.newValue({timestampValue:la(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?eo(r)?T.newValue(function(s,a){if(s.serverTimestampBehavior==="estimate")return{timestampValue:la(s.serializer,ne.fromTimestamp(Hr(a)))};if(s.serverTimestampBehavior==="previous"){const c=Es(a);if(c)return c}return{nullValue:"NULL_VALUE"}}(e,r)):T.newValue(r):T.Sr()}}class j8{constructor(e){this.expr=e}evaluate(e,t){return T.newValue(this.expr._getValue())}}class H8{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.Rr.map(i=>J(i).evaluate(e,t));return r.some(i=>i.Cr())?T.vr():T.newValue({arrayValue:{values:r.map(i=>i.value)}})}}function We(n){return or(n)?Number(n.doubleValue):Number(n.integerValue)}function Jt(n){return BigInt(n.integerValue)}const G8=BigInt("0x7fffffffffffffff"),W8=-BigInt("0x8000000000000000");class xs{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length>=2,24778);const r=J(this.expr.params[0]).evaluate(e,t),i=J(this.expr.params[1]).evaluate(e,t);let s=this.Or(r,i);for(const a of this.expr.params.slice(2)){const c=J(a).evaluate(e,t);s=this.Or(s,c)}return s}Or(e,t){if(e.Cr()||t.Cr())return T.vr();if(e.Fr()||t.Fr())return T.Dr();const r=e.value,i=t.value;if(!or(r)&&!Ht(r)||!or(i)&&!Ht(i))return T.vr();if(or(r)||or(i)){const s=this.Mr(r,i);return s?T.newValue(s):T.vr()}if(Ht(r)&&Ht(i)){const s=this.Nr(r,i);return s===void 0?T.vr():typeof s=="number"?T.newValue({doubleValue:s}):s<W8||s>G8?T.vr():T.newValue({integerValue:`${s}`})}return T.vr()}}function gn(n,e){return Oe(n)!==Oe(e)?"TYPE_MISMATCH":dt(n)||dt(e)?"NOT_EQ":wt(n)&&wt(e)?"EQ":wt(n)||wt(e)?"NULL":Kr(n)&&Kr(e)?function(r,i){if(r.values?.length!==i.values?.length)return"NOT_EQ";let s=!1;for(let a=0;a<(r.values?.length??0);a++){const c=r.values[a],l=i.values[a];switch(gn(c,l)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":s=!0;break;default:Y(44609,{Lr:c,Br:l})}}return s?"NULL":"EQ"}(n.arrayValue,e.arrayValue):xa(n)&&xa(e)||lr(n)&&lr(e)?function(r,i){const s=r.fields||{},a=i.fields||{};if(Ta(s)!==Ta(a))return"NOT_EQ";let c=!1;for(const l in s)if(s.hasOwnProperty(l)){if(a[l]===void 0)return"NOT_EQ";switch(gn(s[l],a[l])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":c=!0}}return c?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,i){return kt(r,i,{Te:!1,Ee:!0,he:!0})}(n,e)?"EQ":"NOT_EQ"}class K8 extends xs{Nr(e,t){return Jt(e)+Jt(t)}Mr(e,t){return{doubleValue:We(e)+We(t)}}}class Y8 extends xs{constructor(e){super(e),this.expr=e}Nr(e,t){return Jt(e)-Jt(t)}Mr(e,t){return{doubleValue:We(e)-We(t)}}}class Q8 extends xs{constructor(e){super(e),this.expr=e}Nr(e,t){return Jt(e)*Jt(t)}Mr(e,t){return{doubleValue:We(e)*We(t)}}}class X8 extends xs{constructor(e){super(e),this.expr=e}Nr(e,t){const r=Jt(t);if(r!==BigInt(0))return Jt(e)/r}Mr(e,t){const r=We(t);return r===0?{doubleValue:Yi(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:We(e)/r}}}class J8 extends xs{constructor(e){super(e),this.expr=e}Nr(e,t){const r=Jt(t);if(r!==BigInt(0))return Jt(e)%r}Mr(e,t){const r=We(t);if(r!==0)return{doubleValue:We(e)%r}}}class Z8{constructor(e){this.expr=e}evaluate(e,t){let r=!1,i=!1;for(const s of this.expr.params){const a=J(s).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!a.value?.booleanValue)return T.newValue(qe);break;case"NULL":i=!0;break;default:r=!0}}return r?T.vr():i?T.Dr():T.newValue(ut)}}class ho{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,9634);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return T.newValue({booleanValue:!r.value?.booleanValue});case"NULL":return T.Dr();default:return T.vr()}}}class e9{constructor(e){this.expr=e}evaluate(e,t){let r=!1,i=!1;for(const s of this.expr.params){const a=J(s).evaluate(e,t);switch(a.type){case"BOOLEAN":if(a.value?.booleanValue)return T.newValue(ut);break;case"NULL":i=!0;break;default:r=!0}}return r?T.vr():i?T.Dr():T.newValue(qe)}}class Il{constructor(e){this.expr=e}evaluate(e,t){let r=!1,i=!1;for(const s of this.expr.params){const a=J(s).evaluate(e,t);switch(a.type){case"BOOLEAN":r=Il.xor(r,!!a.value?.booleanValue);break;case"NULL":i=!0;break;default:return T.vr()}}return i?T.Dr():T.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class Nf{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,55094);let r=!1;const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return T.vr()}const s=J(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();for(const a of s.value?.arrayValue?.values??[])switch(wt(i.value)&&wt(a)?"EQ":gn(i.value,a)){case"EQ":return T.newValue(ut);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:Y(44608,{value:i.value,candidate:a})}return r?T.Dr():T.newValue(qe)}}class t9{constructor(e){this.expr=e}evaluate(e,t){return new ho(new N("not",[new N("equal_any",this.expr.params)])).evaluate(e,t)}}class n9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,23322);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return T.newValue(qe);case"DOUBLE":return T.newValue({booleanValue:isNaN(We(r.value))});case"NULL":return T.Dr();default:return T.vr()}}}class r9{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,50406),new ho(new N("not",[new N("is_nan",this.expr.params)])).evaluate(e,t)}}class i9{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,23123),J(this.expr.params[0]).evaluate(e,t).type){case"NULL":return T.newValue(ut);case"UNSET":case"ERROR":return T.vr();default:return T.newValue(qe)}}}class s9{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,23167),new ho(new N("not",[new N("is_null",this.expr.params)])).evaluate(e,t)}}class a9{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,5228),J(this.expr.params[0]).evaluate(e,t).type==="ERROR"?T.newValue(ut):T.newValue(qe)}}class o9{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,6877),J(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return T.vr();case"UNSET":return T.newValue(qe);default:return T.newValue(ut)}}}class c9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===3,11706);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return r.value?.booleanValue?J(this.expr.params[1]).evaluate(e,t):J(this.expr.params[2]).evaluate(e,t);case"NULL":return J(this.expr.params[2]).evaluate(e,t);default:return T.vr()}}}class l9{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(s=>J(s).evaluate(e,t));let i;for(const s of r)switch(s.type){case"ERROR":case"UNSET":case"NULL":continue;default:i=i===void 0||ht(s.value,i.value)>0?s:i}return i===void 0?T.Dr():i}}class u9{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(s=>J(s).evaluate(e,t));let i;for(const s of r)switch(s.type){case"ERROR":case"UNSET":case"NULL":continue;default:i=i===void 0||ht(s.value,i.value)<0?s:i}return i===void 0?T.Dr():i}}class ii{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return T.vr()}const i=J(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ERROR":case"UNSET":return T.vr()}return this.Ur(r,i)}}class h9 extends ii{constructor(e){super(e),this.expr=e}Ur(e,t){if(e.Fr()&&t.Fr())return T.newValue(ut);if(e.Fr()||t.Fr()||dt(e.value)||dt(t.value)||Oe(e.value)!==Oe(t.value))return T.newValue(qe);switch(gn(e.value,t.value)){case"EQ":return T.newValue(ut);case"NOT_EQ":return T.newValue(qe);case"NULL":return T.Dr();default:Y(44615,{left:e,right:t})}}}class d9 extends ii{constructor(e){super(e),this.expr=e}Ur(e,t){switch(gn(e.value,t.value)){case"EQ":return T.newValue(qe);case"NOT_EQ":case"TYPE_MISMATCH":return T.newValue(ut);case"NULL":return T.Dr();default:Y(44614,{left:e,right:t})}}}class p9 extends ii{constructor(e){super(e),this.expr=e}Ur(e,t){return Oe(e.value)!==Oe(t.value)||dt(e.value)||dt(t.value)?T.newValue(qe):T.newValue({booleanValue:ht(e.value,t.value)<0})}}class f9 extends ii{constructor(e){super(e),this.expr=e}Ur(e,t){return Oe(e.value)!==Oe(t.value)||dt(e.value)||dt(t.value)?T.newValue(qe):gn(e.value,t.value)==="EQ"?T.newValue(ut):T.newValue({booleanValue:ht(e.value,t.value)<0})}}class g9 extends ii{constructor(e){super(e),this.expr=e}Ur(e,t){return Oe(e.value)!==Oe(t.value)||dt(e.value)||dt(t.value)?T.newValue(qe):T.newValue({booleanValue:ht(e.value,t.value)>0})}}class m9 extends ii{constructor(e){super(e),this.expr=e}Ur(e,t){return Oe(e.value)!==Oe(t.value)||dt(e.value)||dt(t.value)?T.newValue(qe):gn(e.value,t.value)==="EQ"?T.newValue(ut):T.newValue({booleanValue:ht(e.value,t.value)>0})}}class y9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class v9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,216);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"ARRAY":{const i=r.value.arrayValue?.values??[];return T.newValue({arrayValue:{values:[...i].reverse()}})}default:return T.vr()}}}class _9{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===2,52884),new Nf(new N("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class w9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,1392);let r=!1;const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}const s=J(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const a=s.value?.arrayValue?.values??[],c=i.value?.arrayValue?.values??[];for(const l of a){let h=!1;r=!1;for(const p of c){switch(wt(l)&&wt(p)?"EQ":gn(l,p)){case"EQ":h=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:Y(44613,{value:p,search:l})}if(h)break}if(!h)return T.newValue(qe)}return T.newValue(ut)}}class E9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,2680);let r=!1;const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}const s=J(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const a=s.value?.arrayValue?.values??[],c=i.value?.arrayValue?.values??[];for(const l of c)for(const h of a)switch(wt(l)&&wt(h)?"EQ":gn(l,h)){case"EQ":return T.newValue(ut);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:Y(44608,{value:l,search:h})}return r?T.Dr():T.newValue(qe)}}class b9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,38605);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"ARRAY":return T.newValue({integerValue:`${r.value?.arrayValue?.values?.length??0}`});default:return T.vr()}}}class I9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class T9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,1508);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"BYTES":{const i=r.value?.bytesValue;if(typeof i=="string"){const s=Le.fromBase64String(i).toUint8Array();return s.reverse(),T.newValue({bytesValue:Le.fromUint8Array(s).toBase64()})}return T.newValue({bytesValue:new Uint8Array(i).reverse()})}case"STRING":{const i=r.value?.stringValue,s=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(i),a=Array.from(s,c=>c.segment).reverse();return T.newValue({stringValue:a.join("")})}default:return T.vr()}}}class A9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class x9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class S9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,19400);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"STRING":{const i=function(a){let c=0;for(let l=0;l<a.length;l++){const h=a.codePointAt(l);if(h===void 0)return;if(h<=65535)if(h>=55296&&h<=57343)if(h<=56319){const p=a.codePointAt(l+1);p!==void 0&&p>=56320&&p<=57343?(c+=1,l++):c+=1}else c+=1;else c+=1;else{if(!(h<=1114111))return;c+=1,l++}}return c}(r.value.stringValue);return i===void 0?T.vr():T.newValue({integerValue:i})}default:return T.vr()}}}class k9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,8486);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const i=r.value?.bytesValue;return typeof i=="string"?T.newValue({integerValue:Le.fromBase64String(i).toUint8Array().length}):T.newValue({integerValue:new Uint8Array(i).length})}case"STRING":{const i=function(a){let c=0;for(let l=0;l<a.length;l++){const h=a.codePointAt(l);if(h===void 0)return;if(h>=55296&&h<=57343){if(!(h<=56319))return;{const p=a.codePointAt(l+1);if(p===void 0||!(p>=56320&&p<=57343))return;c+=4,l++}}else if(h<=127)c+=1;else if(h<=2047)c+=2;else if(h<=65535)c+=3;else{if(!(h<=1114111))return;c+=4,l++}}return c}(r.value?.stringValue);return i===void 0?T.vr():T.newValue({integerValue:i})}case"NULL":return T.Dr();default:return T.vr()}}}class si{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return T.vr()}const s=J(this.expr.params[1]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return T.vr()}return r?T.Dr():this.kr(i.value?.stringValue,s.value?.stringValue)}}class C9 extends si{kr(e,t){try{const r=function(a){let c="";for(let l=0;l<a.length;l++){const h=a.charAt(l);switch(h){case"_":c+=".";break;case"%":c+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":c+="\\"+h;break;default:c+=h}}return"^"+c+"$"}(t),i=It.compile(r);return T.newValue({booleanValue:i.matches(e)})}catch(r){return Ut(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),T.vr()}}}class P9 extends si{kr(e,t){try{const r=It.compile(t);return T.newValue({booleanValue:r.matcher(e).find()})}catch{return Ut(`Invalid regex pattern found in regex_contains: ${t}, returning error`),T.vr()}}}class R9 extends si{kr(e,t){try{return T.newValue({booleanValue:It.compile(t).matches(e)})}catch{return Ut(`Invalid regex pattern found in regex_match: ${t}, returning error`),T.vr()}}}class L9 extends si{kr(e,t){return T.newValue({booleanValue:e.includes(t)})}}class O9 extends si{kr(e,t){return T.newValue({booleanValue:e.startsWith(t)})}}class D9 extends si{kr(e,t){return T.newValue({booleanValue:e.endsWith(t)})}}class N9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,29079);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return T.newValue({stringValue:r.value?.stringValue?.toLowerCase()});case"NULL":return T.Dr();default:return T.vr()}}}class V9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,60487);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return T.newValue({stringValue:r.value?.stringValue?.toUpperCase()});case"NULL":return T.Dr();default:return T.vr()}}}class M9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,28544);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return T.newValue({stringValue:r.value?.stringValue?.trim()});case"NULL":return T.Dr();default:return T.vr()}}}class F9{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(a=>J(a).evaluate(e,t));let i="",s=!1;for(const a of r)switch(a.type){case"STRING":i+=a.value.stringValue;break;case"NULL":s=!0;break;default:return T.vr()}return s?T.Dr():T.newValue({stringValue:i})}}class U9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,4483);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return T.Sr();case"MAP":break;default:return T.vr()}const i=J(this.expr.params[1]).evaluate(e,t);if(i.type!=="STRING")return T.vr();const s=r.value?.mapValue?.fields?.[i.value?.stringValue];return s===void 0?T.Sr():T.newValue(s)}}class Tl{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return T.vr()}const s=J(this.expr.params[1]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const a=mc(i.value),c=mc(s.value);if(a===void 0||c===void 0||a.values?.length!==c.values?.length)return T.vr();const l=this.qr(a,c);return l===void 0||isNaN(l)?T.vr():T.newValue({doubleValue:l})}}class B9 extends Tl{qr(e,t){const r=e?.values??[],i=t?.values??[];if(r.length===0)return;let s=0,a=0,c=0;for(let h=0;h<r.length;h++){if(!Gn(r[h])||!Gn(i[h]))return;const p=We(r[h]),g=We(i[h]);s+=p*g,a+=p*p,c+=g*g}const l=Math.sqrt(a)*Math.sqrt(c);if(l!==0)return 1-Math.max(-1,Math.min(1,s/l))}}class z9 extends Tl{qr(e,t){const r=e?.values??[],i=t?.values??[];if(r.length===0)return 0;let s=0;for(let a=0;a<r.length;a++){if(!Gn(r[a])||!Gn(i[a]))return;s+=We(r[a])*We(i[a])}return s}}class $9 extends Tl{qr(e,t){const r=e?.values??[],i=t?.values??[];if(r.length===0)return 0;let s=0;for(let a=0;a<r.length;a++){if(!Gn(r[a])||!Gn(i[a]))return;const c=We(r[a]),l=We(i[a]);s+=Math.pow(c-l,2)}return Math.sqrt(s)}}class q9{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,39044);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=mc(r.value);return T.newValue({integerValue:i?.values?.length??0})}case"NULL":return T.Dr();default:return T.vr()}}}const os=BigInt(-62135596800),cs=BigInt(253402300799),Va=BigInt(1e3),zn=BigInt(1e6),j9=os*Va,H9=cs*Va+BigInt(999),G9=os*zn,W9=cs*zn+BigInt(999999);function Al(n){return n>=G9&&n<=W9}function Vf(n){return n>=os&&n<=cs}function ls(n,e){const t=BigInt(n);return!(t<os||t>cs)&&!(e<0||e>=1e9)&&(t!==os||e===0)&&!(t===cs&&e>999999999)}function Mf(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function xl(n){return BigInt(n.seconds)*zn+BigInt(Math.trunc(n.nanoseconds/1e3))}class Sl{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return T.Dr();default:return T.vr()}}}class K9 extends Sl{toTimestamp(e){if(!Al(e))return T.vr();let t=Number(e/zn),r=Number(e%zn*BigInt(1e3));const i=Mf(t,r);return t=i.seconds,r=i.nanos,ls(t,r)?T.newValue({timestampValue:{seconds:t,nanos:r}}):T.vr()}}class Y9 extends Sl{toTimestamp(e){if(!function(a){return a>=j9&&a<=H9}(e))return T.vr();let t=Number(e/Va),r=Number(e%Va*BigInt(1e6));const i=Mf(t,r);return t=i.seconds,r=i.nanos,ls(t,r)?T.newValue({timestampValue:{seconds:t,nanos:r}}):T.vr()}}class Q9 extends Sl{toTimestamp(e){if(!Vf(e))return T.vr();const t=Number(e);return T.newValue({timestampValue:{seconds:t,nanos:0}})}}class kl{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return T.Dr();default:return T.vr()}const i=ul(r.value.timestampValue);return ls(i.seconds,i.nanoseconds)?this.$r(i):T.vr()}}class X9 extends kl{$r(e){const t=xl(e);return Al(t)?T.newValue({integerValue:`${t.toString()}`}):T.vr()}}class J9 extends kl{$r(e){const t=xl(e),r=t/BigInt(1e3),i=t%BigInt(1e3);return r>BigInt(0)||i===BigInt(0)?T.newValue({integerValue:r.toString()}):T.newValue({integerValue:(r-BigInt(1)).toString()})}}class Z9 extends kl{$r(e){const t=BigInt(e.seconds);return Vf(t)?T.newValue({integerValue:t.toString()}):T.vr()}}class Ff{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const i=J(this.expr.params[0]).evaluate(e,t);switch(i.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return T.vr()}const s=J(this.expr.params[1]).evaluate(e,t);let a;switch(s.type){case"STRING":if(a=function(O){switch(O){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(s.value.stringValue),a===void 0)return T.vr();break;case"NULL":r=!0;break;default:return T.vr()}const c=J(this.expr.params[2]).evaluate(e,t);switch(c.type){case"INT":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const l=BigInt(c.value.integerValue);let h;try{switch(a){case"microsecond":h=l;break;case"millisecond":h=l*BigInt(1e3);break;case"second":h=l*BigInt(1e6);break;case"minute":h=l*BigInt(6e7);break;case"hour":h=l*BigInt(36e8);break;case"day":h=l*BigInt(864e8);break;default:return T.vr()}if(a!=="microsecond"&&l!==BigInt(0)&&h/l!==BigInt(this.Kr(a)))return T.vr()}catch(X){return Ut(`Error during timestamp arithmetic: ${X}`),T.vr()}const p=ul(i.value.timestampValue);if(!ls(p.seconds,p.nanoseconds))return T.vr();const g=xl(p),b=this.Wr(g,h);if(!Al(b))return T.vr();const C=Number(b/zn),R=b%zn,M=Number((R<0?R+zn:R)*BigInt(1e3)),q=R<0?C-1:C;return ls(q,M)?T.newValue({timestampValue:{seconds:q,nanos:M}}):T.vr()}Kr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class e5 extends Ff{Wr(e,t){return e+t}}class t5 extends Ff{Wr(e,t){return e-t}}function us(n){if((n=Df(n))instanceof As)return`fld(${n.fieldName})`;if(n instanceof ri)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ue?`ref(${t.path})`:t instanceof lt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof N)return`fn(${n.name},[${n.params.map(us).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.Rr.map(us).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function n5(n){if(n instanceof Rf)return`${n._name}(${Xs(n.fields)})`;if(n instanceof Lf){let e=`${n._name}(${Xs(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${Xs(n.groups)})`),e}if(n instanceof Of)return`${n._name}(${Xs(n.groups)})`;if(n instanceof co)return`${n._name}(${n.Vr})`;if(n instanceof lo)return`${n._name}(${n.collectionId})`;if(n instanceof yl)return`${n._name}()`;if(n instanceof vl)return`${n._name}(${n.dr.sort()})`;if(n instanceof _l)return`${n._name}(${us(n.condition)})`;if(n instanceof as)return`${n._name}(${n.limit})`;if(n instanceof wl)return`${n._name}(${function(t){return t.map(r=>`${us(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function Xs(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${us(t)}`).join(",")}`}function un(n){return n.stages.map(e=>n5(e)).join("|")}function Uf(n,e){return un(n)===un(e)}function Fe(n){return n instanceof ot}function Rh(n){return Fe(n)?un(n):Fi(n)}function Bf(n){return Fe(n)?un(n):function(t){return`${Xp(Wt(t))}|lt:${t.limitType}`}(n)}function po(n,e){return n instanceof ot&&e instanceof ot?Uf(n,e):!(n instanceof ot&&!(e instanceof ot)||!(n instanceof ot)&&e instanceof ot)&&S3(n,e)}function zf(n){return ir(n)?un(n):Xp(n)}function $f(n,e){return n instanceof ot&&e instanceof ot?Uf(n,e):!(n instanceof ot&&!(e instanceof ot)||!(n instanceof ot)&&e instanceof ot)&&Jp(n,e)}/**
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
 */class r5{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&u3(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Vi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Vi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=rf();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const l=$p(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ce())}isEqual(e){return this.batchId===e.batchId&&qr(this.mutations,e.mutations,(t,r)=>lh(t,r))&&qr(this.baseMutations,e.baseMutations,(t,r)=>lh(t,r))}}class Cl{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){W(e.mutations.length===r.length,58842,{Qr:e.mutations.length,Gr:r.length});let i=function(){return L3}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Cl(e,t,r,i)}}/**
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
 */class i5{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class on{constructor(e,t,r,i,s=ne.min(),a=ne.min(),c=Le.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new on(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class s5{constructor(e){this.zr=e}}function a5(n){const e=Y3({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vc(e,e.limit,"L"):e}/**
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
 */class o5{constructor(){this.Hi=new c5}addToCollectionParentIndex(e,t){return this.Hi.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Hi.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(qn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class c5{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Re(me.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Re(me.comparator)).toArray()}}/**
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
 */class Yn{constructor(e){this.Ds=e}next(){return this.Ds+=2,this.Ds}static xs(){return new Yn(0)}static Cs(){return new Yn(-1)}}// Copyright 2024 Google LLC* @license
function qf(n,e){let t=e;for(const r of n.stages)t=u5({serializer:n.serializer,serverTimestampBehavior:n.listenOptions?.serverTimestampBehavior},r,t);return t}function fo(n,e){return qf(n,[e]).length>0}function l5(n,e){return Fe(n)?fo(n,e):so(n,e)}function u5(n,e,t){if(e instanceof co)return function(i,s,a){return a.filter(c=>c.isFoundDocument()&&`/${c.key.getCollectionPath().canonicalString()}`===s.Vr)}(0,e,t);if(e instanceof _l)return function(i,s,a){return a.filter(c=>{const l=Bi(J(s.condition).evaluate(i,c));return l!==void 0&&kt(l,ut)})}(n,e,t);if(e instanceof lo)return function(i,s,a){return a.filter(c=>c.isFoundDocument()&&c.key.getCollectionPath().lastSegment()===s.collectionId)}(0,e,t);if(e instanceof yl)return function(i,s,a){return a.filter(c=>c.isFoundDocument())}(0,0,t);if(e instanceof vl)return function(i,s,a){return a.filter(c=>c.isFoundDocument()&&s.mr.has(c.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof as)return function(i,s,a){return a.slice(0,s.limit)}(0,e,t);if(e instanceof wl)return function(i,s,a){const c=s.orderings.map(l=>({ks:J(l.expr),direction:l.direction}));return[...a].sort((l,h)=>{for(const{ks:p,direction:g}of c){const b=Bi(p.evaluate(i,l)),C=Bi(p.evaluate(i,h)),R=ht(b??Gr,C??Gr);if(R!==0)return g==="ascending"?R:-R}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Tc(n){const e=function(r){for(let i=r.stages.length-1;i>=0;i--){const s=r.stages[i];if(s instanceof wl)return s.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const i of e){const s=Bi(J(i.expr).evaluate({serializer:n.serializer},t)),a=Bi(J(i.expr).evaluate({serializer:n.serializer},r)),c=ht(s||Gr,a||Gr);if(c!==0)return i.direction==="ascending"?c:-c}return 0}}function Zo(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof as)return{limit:t.limit}}}/**
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
 */class h5{constructor(){this.changes=new Er(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class d5{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class p5{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Vi(r.mutation,i,Vt.empty(),_e.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ce()){const i=On();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Cr();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=On();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ce()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=ct();const a=Ui(),c=function(){return Ui()}();return t.forEach((l,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof wr)?s=s.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),Vi(p.mutation,h,p.mutation.getFieldMask(),_e.now())):a.set(h.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,p)=>a.set(h,p)),t.forEach((h,p)=>c.set(h,new d5(p,a.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Ui();let i=new Ee((a,c)=>a-c),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let p=r.get(l)||Vt.empty();p=c.applyToLocalView(h,p),r.set(l,p);const g=(i.get(c.batchId)||ce()).add(l);i=i.insert(c.batchId,g)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,p=l.value,g=rf();p.forEach(b=>{if(!s.has(b)){const C=$p(t.get(b),r.get(b));C!==null&&g.set(b,C),s=s.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return Fe(t)?this.getDocumentsMatchingPipeline(e,t,r,i):T3(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):A3(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):V.resolve(On());let c=Ki,l=s;return a.next(h=>V.forEach(h,(p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),s.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(b=>{l=l.insert(p,b)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,ce())).next(p=>({batchId:c,changes:nf(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next(r=>{let i=Cr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Cr();return this.indexManager.getCollectionParents(e,s).next(c=>V.forEach(c,l=>{const h=function(g,b){return new io(b,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((g,b)=>{a=a.insert(g,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>this.retrieveMatchingLocalDocuments(s,a,c=>so(t,c)))}getDocumentsMatchingPipeline(e,t,r,i){if(Bn(t)==="collection_group"){const s=bl(t);let a=Cr();return this.indexManager.getCollectionParents(e,s).next(c=>V.forEach(c,l=>{const h=function(g,b){const C=g.stages.map(R=>R instanceof lo?new co(b.canonicalString(),{}):R);return new ot(g.serializer,C)}(t,l.child(s));return this.getDocumentsMatchingPipeline(e,h,r,i).next(p=>{p.forEach((g,b)=>{a=a.insert(g,b)})})}).next(()=>a))}{let s;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(a=>{switch(s=a,Bn(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i);case"documents":let c=ce();for(const l of Ic(t))c=c.add(Q.fromPath(l));return this.remoteDocumentCache.getEntries(e,c);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new G("invalid-argument",`Invalid pipeline source to execute offline: ${un(t)}`)}}).next(a=>this.retrieveMatchingLocalDocuments(s,a,c=>fo(t,c)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((s,a)=>{const c=a.getKey();t.get(c)===null&&(t=t.insert(c,Ze.newInvalidDocument(c)))});let i=Cr();return t.forEach((s,a)=>{const c=e.get(s);c!==void 0&&Vi(c.mutation,a,Vt.empty(),_e.now()),r(a)&&(i=i.insert(s,a))}),i}getOverlaysForPipeline(e,t,r){switch(Bn(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,me.fromString(uo(t)),r);case"collection_group":throw new G("invalid-argument",`Unexpected collection group pipeline: ${un(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Ic(t).map(i=>Q.fromPath(i)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new G("invalid-argument",`Failed to get overlays for pipeline: ${un(t)}`)}}}/**
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
 */class f5{constructor(e){this.serializer=e,this.Hs=new Map,this.Js=new Map}getBundleMetadata(e,t){return V.resolve(this.Hs.get(t))}saveBundleMetadata(e,t){return this.Hs.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Kt(i.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Js.get(t))}saveNamedQuery(e,t){return this.Js.set(t.name,function(i){return{name:i.name,query:a5(i.bundledQuery),readTime:Kt(i.readTime)}}(t)),V.resolve()}}/**
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
 */class g5{constructor(){this.overlays=new Ee(Q.comparator),this.Ys=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=On();return V.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}getAllOverlays(e,t){const r=On();return this.overlays.forEach((i,s)=>{s.largestBatchId>t&&r.set(i,s)}),V.resolve(r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Hr(e,t,s)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ys.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ys.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const i=On(),s=t.length+1,a=new Q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Ee((h,p)=>h-p);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=On(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const c=On(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,p)=>c.set(h,p)),!(c.size()>=i)););return V.resolve(c)}Hr(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ys.get(i.largestBatchId).delete(r.key);this.Ys.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new i5(t,r));let s=this.Ys.get(t);s===void 0&&(s=ce(),this.Ys.set(t,s)),this.Ys.set(t,s.add(r.key))}}/**
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
 */class m5{constructor(){this.sessionToken=Le.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class Pl{constructor(){this.Zs=new Re($e.Xs),this.e_=new Re($e.t_)}isEmpty(){return this.Zs.isEmpty()}addReference(e,t){const r=new $e(e,t);this.Zs=this.Zs.add(r),this.e_=this.e_.add(r)}n_(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.r_(new $e(e,t))}i_(e,t){e.forEach(r=>this.removeReference(r,t))}s_(e){const t=new Q(new me([])),r=new $e(t,e),i=new $e(t,e+1),s=[];return this.e_.forEachInRange([r,i],a=>{this.r_(a),s.push(a.key)}),s}__(){this.Zs.forEach(e=>this.r_(e))}r_(e){this.Zs=this.Zs.delete(e),this.e_=this.e_.delete(e)}o_(e){const t=new Q(new me([])),r=new $e(t,e),i=new $e(t,e+1);let s=ce();return this.e_.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new $e(e,0),r=this.Zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,t){this.key=e,this.a_=t}static Xs(e,t){return Q.comparator(e.key,t.key)||le(e.a_,t.a_)}static t_(e,t){return le(e.a_,t.a_)||Q.comparator(e.key,t.key)}}/**
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
 */class y5{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gs=1,this.u_=new Re($e.Xs)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.gs;this.gs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new r5(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.u_=this.u_.add(new $e(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.c_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.l_(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?rl:this.gs-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new $e(t,0),i=new $e(t,Number.POSITIVE_INFINITY),s=[];return this.u_.forEachInRange([r,i],a=>{const c=this.c_(a.a_);s.push(c)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Re(le);return t.forEach(i=>{const s=new $e(i,0),a=new $e(i,Number.POSITIVE_INFINITY);this.u_.forEachInRange([s,a],c=>{r=r.add(c.a_)})}),V.resolve(this.E_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const a=new $e(new Q(s),0);let c=new Re(le);return this.u_.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(l.a_)),!0)},a),V.resolve(this.E_(c))}E_(e){const t=[];return e.forEach(r=>{const i=this.c_(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){W(this.h_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.u_;return V.forEach(t.mutations,i=>{const s=new $e(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.u_=r})}bs(e){}containsKey(e,t){const r=new $e(t,0),i=this.u_.firstAfterOrEqual(r);return V.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}h_(e,t){return this.l_(e)}l_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}c_(e){const t=this.l_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class v5{constructor(e){this.T_=e,this.docs=function(){return new Ee(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.T_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(t))}getEntries(e,t){let r=ct();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),V.resolve(r)}getAllEntries(e){let t=ct();return this.docs.forEach((r,i)=>{t=t.insert(r,i.document)}),V.resolve(t)}getDocumentsMatchingQuery(e,t,r,i){let s,a;Fe(t)?(s=me.fromString(uo(t)),a=p=>fo(t,p)):(s=t.path,a=p=>so(t,p));let c=ct();const l=new Q(s.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:p,value:{document:g}}=h.getNext();if(!s.isPrefixOf(p.path))break;p.path.length>s.length+1||G4(H4(g),r)<=0||(i.has(g.key)||a(g))&&(c=c.insert(g.key,g.mutableCopy()))}return V.resolve(c)}getAllFromCollectionGroup(e,t,r,i){Y(9500)}P_(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new _5(this)}getSize(e){return V.resolve(this.size)}}class _5 extends h5{constructor(e){super(),this.zs=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.zs.addEntry(e,i)):this.zs.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.zs.getEntry(e,t)}getAllFromCache(e,t){return this.zs.getEntries(e,t)}}/**
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
 */class w5{constructor(e){this.persistence=e,this.R_=new Er(t=>zf(t),$f),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.I_=0,this.A_=new Pl,this.targetCount=0,this.V_=Yn.xs()}forEachTarget(e,t){return this.R_.forEach((r,i)=>t(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.I_)}allocateTargetId(e){return this.highestTargetId=this.V_.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.I_&&(this.I_=t),V.resolve()}Ms(e){this.R_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.V_=new Yn(t),this.highestTargetId=t),e.sequenceNumber>this.I_&&(this.I_=e.sequenceNumber)}addTargetData(e,t){return this.Ms(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Ms(t),V.resolve()}removeTargetData(e,t){return this.R_.delete(t.target),this.A_.s_(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.R_.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.R_.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.R_.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.A_.n_(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.A_.i_(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.A_.s_(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.A_.o_(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.A_.containsKey(t))}}/**
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
 */class jf{constructor(e,t){this.d_={},this.overlays={},this.f_=new Ja(0),this.m_=!1,this.m_=!0,this.p_=new m5,this.referenceDelegate=e(this),this.g_=new w5(this),this.indexManager=new o5,this.remoteDocumentCache=function(i){return new v5(i)}(r=>this.referenceDelegate.y_(r)),this.serializer=new s5(t),this.w_=new f5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.m_=!1,Promise.resolve()}get started(){return this.m_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new g5,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.d_[e.toKey()];return r||(r=new y5(t,this.referenceDelegate),this.d_[e.toKey()]=r),r}getGlobalsCache(){return this.p_}getTargetCache(){return this.g_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.w_}runTransaction(e,t,r){H("MemoryPersistence","Starting transaction:",e);const i=new E5(this.f_.next());return this.referenceDelegate.b_(),r(i).next(s=>this.referenceDelegate.v_(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}S_(e,t){return V.or(Object.values(this.d_).map(r=>()=>r.containsKey(e,t)))}}class E5 extends K4{constructor(e){super(),this.currentSequenceNumber=e}}class Rl{constructor(e){this.persistence=e,this.D_=new Pl,this.x_=null}static C_(e){return new Rl(e)}get F_(){if(this.x_)return this.x_;throw Y(60996)}addReference(e,t,r){return this.D_.addReference(r,t),this.F_.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.D_.removeReference(r,t),this.F_.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.F_.add(t.toString()),V.resolve()}removeTarget(e,t){this.D_.s_(t.targetId).forEach(i=>this.F_.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.F_.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}b_(){this.x_=new Set}v_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.F_,r=>{const i=Q.fromPath(r);return this.O_(e,i).next(s=>{s||t.removeEntry(i,ne.min())})}).next(()=>(this.x_=null,t.apply(e)))}updateLimboDocument(e,t){return this.O_(e,t).next(r=>{r?this.F_.delete(t.toString()):this.F_.add(t.toString())})}y_(e){return 0}O_(e,t){return V.or([()=>V.resolve(this.D_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.S_(e,t)])}}class Ma{constructor(e,t){this.persistence=e,this.M_=new Er(r=>J4(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=_8(this,t)}static C_(e,t){return new Ma(e,t)}b_(){}v_(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}lr(e){const t=this.Ls(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Ls(e){let t=0;return this.Er(e,r=>{t++}).next(()=>t)}Er(e,t){return V.forEach(this.M_,(r,i)=>this.Us(e,r,i).next(s=>s?V.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.P_(e,a=>this.Us(e,a,t).next(c=>{c||(r++,s.removeEntry(a,ne.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.M_.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.M_.set(t,e.currentSequenceNumber),V.resolve()}y_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=aa(e.data.value)),t}Us(e,t,r){return V.or([()=>this.persistence.S_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.M_.get(t);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ll{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.wo=r,this.bo=i}static vo(e,t){let r=ce(),i=ce();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ll(e,t.fromCache,r,i)}}/**
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
 */function b5(n,e){return Q.comparator(n.key,e.key)}/**
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
 */class I5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class T5{constructor(){this.So=!1,this.Do=!1,this.xo=100,this.Co=function(){return fg()?8:Y4(et())>0?6:4}()}initialize(e,t){this.Fo=e,this.indexManager=t,this.So=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Oo(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Mo(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new I5;return this.No(e,t,a).next(c=>{if(s.result=c,this.Do)return this.Lo(e,t,a,c.size)})}).next(()=>s.result)}Lo(e,t,r,i){return Fe(t)?V.resolve():r.documentReadCount<this.xo?(kr()<=ue.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Fi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.xo,"documents"),V.resolve()):(kr()<=ue.DEBUG&&H("QueryEngine","Query:",Fi(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Co*i?(kr()<=ue.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Fi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wt(t))):V.resolve())}Oo(e,t){if(Fe(t))return V.resolve(null);let r=t;if(gh(r))return V.resolve(null);let i=Wt(r);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(r.limit!==null&&s===1&&(r=vc(r,null,"F"),i=Wt(r)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{const c=ce(...a);return this.Fo.getDocuments(e,c).next(l=>this.indexManager.getMinOffset(e,i).next(h=>{const p=this.Bo(r,l);return this.Uo(r,p,c,h.readTime)?this.Oo(e,vc(r,null,"F")):this.ko(e,p,r,h)}))})))}Mo(e,t,r,i){return(Fe(t)?function(a){for(const c of a.stages){if(c instanceof as||c instanceof Ph)return!1;if(c instanceof _l){if(c.condition instanceof kf&&c.condition._expr.name==="exists"&&c.condition._expr.params[0]instanceof As&&c.condition._expr.params[0].fieldName===jr)continue;return!1}}return!0}(t):gh(t))||i.isEqual(ne.min())?V.resolve(null):this.Fo.getDocuments(e,r).next(s=>{const a=this.Bo(t,s);return this.Uo(t,a,r,i)?V.resolve(null):(kr()<=ue.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rh(t)),this.ko(e,a,t,j4(i,Ki)).next(c=>c))})}Bo(e,t){let r,i;return Fe(e)?(r=new Re(b5),i=s=>fo(e,s)):(r=new Re(cl(e)),i=s=>so(e,s)),t.forEach((s,a)=>{i(a)&&(r=r.add(a))}),r}Uo(e,t,r,i){if(Fe(e))return function(c){return c.stages.some(l=>l instanceof as||l instanceof Ph)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}No(e,t,r){return kr()<=ue.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Rh(t)),this.Fo.getDocumentsMatchingQuery(e,t,qn.min(),r)}ko(e,t,r,i){return this.Fo.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */const Ol="LocalStore",A5=3e8;class x5{constructor(e,t,r,i){this.persistence=e,this.qo=t,this.serializer=i,this.$o=new Ee(le),this.Ko=new Er(s=>zf(s),$f),this.Wo=new Map,this.Qo=e.getRemoteDocumentCache(),this.g_=e.getTargetCache(),this.w_=e.getBundleCache(),this.Go(r)}Go(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new p5(this.Qo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Qo.setIndexManager(this.indexManager),this.qo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.$o))}}function S5(n,e,t,r){return new x5(n,e,t,r)}async function Hf(n,e){const t=re(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Go(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let l=ce();for(const h of i){a.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}for(const h of s){c.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(h=>({zo:h,removedBatchIds:a,addedBatchIds:c}))})})}function k5(n,e){const t=re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Qo.newChangeBuffer({trackRemovals:!0});return function(c,l,h,p){const g=h.batch,b=g.keys();let C=V.resolve();return b.forEach(R=>{C=C.next(()=>p.getEntry(l,R)).next(M=>{const q=h.docVersions.get(R);W(q!==null,48541),M.version.compareTo(q)<0&&(g.applyToRemoteDocument(M,h),M.isValidDocument()&&(M.setReadTime(h.commitVersion),p.addEntry(M)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ce();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Gf(n){const e=re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.g_.getLastRemoteSnapshotVersion(t))}function C5(n,e){const t=re(n),r=e.snapshotVersion;let i=t.$o;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.Qo.newChangeBuffer({trackRemovals:!0});i=t.$o;const c=[];e.targetChanges.forEach((p,g)=>{const b=i.get(g);if(!b)return;c.push(t.g_.removeMatchingKeys(s,p.removedDocuments,g).next(()=>t.g_.addMatchingKeys(s,p.addedDocuments,g)));let C=b.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?C=C.withResumeToken(Le.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):p.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(p.resumeToken,r)),i=i.insert(g,C),function(M,q,X){return M.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=A5?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(b,C,p)&&c.push(t.g_.updateTargetData(s,C))});let l=ct(),h=ce();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(P5(s,a,e.documentUpdates).next(p=>{l=p.jo,h=p.Ho})),!r.isEqual(ne.min())){const p=t.g_.getLastRemoteSnapshotVersion(s).next(g=>t.g_.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return V.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,h)).next(()=>l)}).then(s=>(t.$o=i,s))}function P5(n,e,t){let r=ce(),i=ce();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=ct();return t.forEach((c,l)=>{const h=s.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(ne.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):H(Ol,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{jo:a,Ho:i}})}function R5(n,e){const t=re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=rl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function L5(n,e){const t=re(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.g_.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):t.g_.allocateTargetId(r).next(a=>(i=new on(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.g_.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.$o.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.$o=t.$o.insert(r.targetId,r),t.Ko.set(e,r.targetId)),r})}async function Ac(n,e,t){const r=re(n),i=r.$o.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!ni(a))throw a;H(Ol,`Failed to update sequence numbers for target ${e}: ${a}`)}r.$o=r.$o.remove(e),r.Ko.delete(i.target)}function Lh(n,e,t){const r=re(n);let i=ne.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,p){const g=re(l),b=g.Ko.get(p);return b!==void 0?V.resolve(g.$o.get(b)):g.g_.getTargetData(h,p)}(r,a,Fe(e)?e:Wt(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.g_.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>r.qo.getDocumentsMatchingQuery(a,e,t?i:ne.min(),t?s:ce())).next(c=>(O5(r,c),{documents:c,Jo:s})))}function O5(n,e){e.forEach((t,r)=>{const i=r.key.getCollectionGroup(),s=n.Wo.get(i)||ne.min();r.readTime.compareTo(s)>0&&n.Wo.set(i,r.readTime)})}class Oh{constructor(){this.activeTargetIds=N3()}na(e){this.activeTargetIds=this.activeTargetIds.add(e)}ra(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ta(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class D5{constructor(){this.Ua=new Oh,this.ka={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Ua.na(e),this.ka[e]||"not-current"}updateQueryState(e,t,r){this.ka[e]=t}removeLocalQueryTarget(e){this.Ua.ra(e)}isLocalQueryTarget(e){return this.Ua.activeTargetIds.has(e)}clearQueryState(e){delete this.ka[e]}getAllActiveQueryTargets(){return this.Ua.activeTargetIds}isActiveQueryTarget(e){return this.Ua.activeTargetIds.has(e)}start(){return this.Ua=new Oh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function ec(){return typeof document<"u"?document:null}/**
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
 */class N5{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.qa=0,this.$a=null,this.Ka=!0}Wa(){this.qa===0&&(this.Qa("Unknown"),this.$a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.$a=null,this.Ga("Backend didn't respond within 10 seconds."),this.Qa("Offline"),Promise.resolve())))}za(e){this.state==="Online"?this.Qa("Unknown"):(this.qa++,this.qa>=1&&(this.ja(),this.Ga(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Qa("Offline")))}set(e){this.ja(),this.qa=0,e==="Online"&&(this.Ka=!1),this.Qa(e)}Qa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ga(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ka?(fn(t),this.Ka=!1):H("OnlineStateTracker",t)}ja(){this.$a!==null&&(this.$a.cancel(),this.$a=null)}}/**
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
 */const Zt="RemoteStore";class V5{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ha=[],this.Ja=new Map,this.Ya=new Map,this.Za=new Map,this.Xa=new Yn(1e3),this.eu=new Yn(1001),this.tu=new Set,this.nu=[],this.ru=s,this.ru.bt(a=>{r.enqueueAndForget(async()=>{Ir(this)&&(H(Zt,"Restarting streams for network reachability change."),await async function(l){const h=re(l);h.tu.add(4),await Ss(h),h.iu.set("Unknown"),h.tu.delete(4),await go(h)}(this))})}),this.iu=new N5(r,i)}}async function go(n){if(Ir(n))for(const e of n.nu)await e(!0)}async function Ss(n){for(const e of n.nu)await e(!1)}function xc(n,e){return n.Ya.get(e)||void 0}function Wf(n,e){const t=re(n),r=xc(t,e.targetId);if(r!==void 0&&t.Ja.has(r))return;const i=function(c,l){const h=xc(c,l);h!==void 0&&c.Za.delete(h);const p=function(b,C){return C%2!=0?b.eu.next():b.Xa.next()}(c,l);return c.Ya.set(l,p),c.Za.set(p,l),p}(t,e.targetId);H(Zt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new on(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ja.set(i,s),Ml(t)?Vl(t):ai(t).Fn()&&Nl(t,s)}function Dl(n,e){const t=re(n),r=ai(t),i=xc(t,e);H(Zt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),t.Ja.delete(i),t.Ya.delete(e),t.Za.delete(i),r.Fn()&&Kf(t,i),t.Ja.size===0&&(r.Fn()?r.Nn():Ir(t)&&t.iu.set("Unknown"))}function Nl(n,e){if(n.su.We(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.Za.get(e.targetId);if(t===void 0)return void H(Zt,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}ai(n).jn(e)}function Kf(n,e){n.su.We(e),ai(n).Hn(e)}function Vl(n){n.su=new F3({getRemoteKeysForTarget:e=>{const t=n.Za.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):ce()},dt:e=>n.Ja.get(e)||null,Tt:()=>n.datastore.serializer.databaseId}),ai(n).start(),n.iu.Wa()}function Ml(n){return Ir(n)&&!ai(n).Cn()&&n.Ja.size>0}function Ir(n){return re(n).tu.size===0}function Yf(n){n.su=void 0}async function M5(n){n.iu.set("Online")}async function F5(n){n.Ja.forEach((e,t)=>{Nl(n,e)})}async function U5(n,e){Yf(n),Ml(n)?(n.iu.za(e),Vl(n)):n.iu.set("Unknown")}async function B5(n,e,t){if(n.iu.set("Online"),e instanceof af&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds){if(i.Ja.has(c)){const l=i.Za.get(c);l!==void 0&&(await i.remoteSyncer.rejectListen(l,a),i.Ya.delete(l),i.Za.delete(c)),i.Ja.delete(c)}i.su.removeTarget(c)}}(n,e)}catch(r){H(Zt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fa(n,r)}else if(e instanceof ca?n.su.et(e):e instanceof sf?n.su.ot(e):n.su.rt(e),!t.isEqual(ne.min()))try{const r=await Gf(n.localStore);t.compareTo(r)>=0&&await function(s,a){const c=s.su.Rt(a);c.targetChanges.forEach((h,p)=>{if(h.resumeToken.approximateByteSize()>0){const g=s.Ja.get(p);g&&s.Ja.set(p,g.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,p)=>{const g=s.Ja.get(h);if(!g)return;s.Ja.set(h,g.withResumeToken(Le.EMPTY_BYTE_STRING,g.snapshotVersion)),Kf(s,h);const b=new on(g.target,h,p,g.sequenceNumber);Nl(s,b)});const l=function(p,g){const b=new Map;g.targetChanges.forEach((R,M)=>{const q=p.Za.get(M);q!==void 0&&b.set(q,R)});let C=new Ee(le);return g.targetMismatches.forEach((R,M)=>{const q=p.Za.get(R);q!==void 0&&(C=C.insert(q,M))}),new Is(g.snapshotVersion,b,C,g.documentUpdates,g.augmentedDocumentUpdates,g.resolvedLimboDocuments)}(s,c);return s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){H(Zt,"Failed to raise snapshot:",r),await Fa(n,r)}}async function Fa(n,e,t){if(!ni(e))throw e;n.tu.add(1),await Ss(n),n.iu.set("Offline"),t||(t=()=>Gf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{H(Zt,"Retrying IndexedDB access"),await t(),n.tu.delete(1),await go(n)})}function Qf(n,e){return e().catch(t=>Fa(n,t,e))}async function mo(n){const e=re(n),t=Qn(e);let r=e.Ha.length>0?e.Ha[e.Ha.length-1].batchId:rl;for(;z5(e);)try{const i=await R5(e.localStore,r);if(i===null){e.Ha.length===0&&t.Nn();break}r=i.batchId,$5(e,i)}catch(i){await Fa(e,i)}Xf(e)&&Jf(e)}function z5(n){return Ir(n)&&n.Ha.length<10}function $5(n,e){n.Ha.push(e);const t=Qn(n);t.Fn()&&t.Jn&&t.Yn(e.mutations)}function Xf(n){return Ir(n)&&!Qn(n).Cn()&&n.Ha.length>0}function Jf(n){Qn(n).start()}async function q5(n){Qn(n).er()}async function j5(n){const e=Qn(n);for(const t of n.Ha)e.Yn(t.mutations)}async function H5(n,e,t){const r=n.Ha.shift(),i=Cl.from(r,e,t);await Qf(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await mo(n)}async function G5(n,e){e&&Qn(n).Jn&&await async function(r,i){if(function(a){return P3(a)&&a!==F.ABORTED}(i.code)){const s=r.Ha.shift();Qn(r).Mn(),await Qf(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await mo(r)}}(n,e),Xf(n)&&Jf(n)}async function Dh(n,e){const t=re(n);t.asyncQueue.verifyOperationInProgress(),H(Zt,"RemoteStore received new credentials");const r=Ir(t);t.tu.add(3),await Ss(t),r&&t.iu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.tu.delete(3),await go(t)}async function W5(n,e){const t=re(n);e?(t.tu.delete(2),await go(t)):e||(t.tu.add(2),await Ss(t),t.iu.set("Unknown"))}function ai(n){return n._u||(n._u=function(t,r,i){const s=re(t);return s.nr(),new c8(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Qt:M5.bind(null,n),zt:F5.bind(null,n),Ht:U5.bind(null,n),zn:B5.bind(null,n)}),n.nu.push(async e=>{e?(n._u.Mn(),Ml(n)?Vl(n):n.iu.set("Unknown")):(await n._u.stop(),Yf(n))})),n._u}function Qn(n){return n.ou||(n.ou=function(t,r,i){const s=re(t);return s.nr(),new l8(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Qt:()=>Promise.resolve(),zt:q5.bind(null,n),Ht:G5.bind(null,n),Zn:j5.bind(null,n),Xn:H5.bind(null,n)}),n.nu.push(async e=>{e?(n.ou.Mn(),await mo(n)):(await n.ou.stop(),n.Ha.length>0&&(H(Zt,`Stopping write stream with ${n.Ha.length} pending writes`),n.Ha=[]))})),n.ou}/**
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
 */class Fl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new Fl(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ul(n,e){if(fn("AsyncQueue",`${e}: ${n}`),ni(n))return new G(F.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class ur{static emptySet(e){return new ur(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=Cr(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ur)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Nh{constructor(){this.au=new Ee(Q.comparator)}track(e){const t=e.doc.key,r=this.au.get(t);r?e.type!==0&&r.type===3?this.au=this.au.insert(t,e):e.type===3&&r.type!==1?this.au=this.au.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.au=this.au.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.au=this.au.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.au=this.au.remove(t):e.type===1&&r.type===2?this.au=this.au.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.au=this.au.insert(t,{type:2,doc:e.doc}):Y(63341,{ft:e,uu:r}):this.au=this.au.insert(t,e)}cu(){const e=[];return this.au.inorderTraversal((t,r)=>{e.push(r)}),e}}class Yr{constructor(e,t,r,i,s,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Yr(e,t,ur.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&po(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class K5{constructor(){this.lu=void 0,this.Eu=[]}hu(){return this.Eu.some(e=>e.Tu())}}class Y5{constructor(){this.queries=Vh(),this.onlineState="Unknown",this.Pu=new Set}terminate(){(function(t,r){const i=re(t),s=i.queries;i.queries=Vh(),s.forEach((a,c)=>{for(const l of c.Eu)l.onError(r)})})(this,new G(F.ABORTED,"Firestore shutting down"))}}function Vh(){return new Er(n=>Bf(n),po)}async function Q5(n,e){const t=re(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.hu()&&e.Tu()&&(r=2):(s=new K5,r=e.Tu()?0:1);try{switch(r){case 0:s.lu=await t.onListen(i,!0);break;case 1:s.lu=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=Ul(a,`Initialization of query '${Fe(e.query)?un(e.query):Fi(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.Eu.push(e),e.Ru(t.onlineState),s.lu&&e.Iu(s.lu)&&Bl(t)}async function X5(n,e){const t=re(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.Eu.indexOf(e);a>=0&&(s.Eu.splice(a,1),s.Eu.length===0?i=e.Tu()?0:1:!s.hu()&&e.Tu()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function J5(n,e){const t=re(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.Eu)c.Iu(i)&&(r=!0);a.lu=i}}r&&Bl(t)}function Z5(n,e,t){const r=re(n),i=r.queries.get(e);if(i)for(const s of i.Eu)s.onError(t);r.queries.delete(e)}function Bl(n){n.Pu.forEach(e=>{e.next()})}var Sc;(function(n){n.Default="default",n.Cache="cache"})(Sc||(Sc={}));class ey{constructor(e,t,r){this.query=e,this.Au=t,this.Vu=!1,this.du=null,this.onlineState="Unknown",this.options=r||{}}Iu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Yr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.fu(e)&&(this.Au.next(e),t=!0):this.mu(e,this.onlineState)&&(this.pu(e),t=!0),this.du=e,t}onError(e){this.Au.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.du&&!this.Vu&&this.mu(this.du,e)&&(this.pu(this.du),t=!0),t}mu(e,t){if(!e.fromCache||!this.Tu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}fu(e){if(e.docChanges.length>0)return!0;const t=this.du&&this.du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}pu(e){e=Yr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.Au.next(e)}Tu(){return this.options.source!==Sc.Cache}}/**
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
 */class Zf{constructor(e){this.key=e}}class e2{constructor(e){this.key=e}}class ty{constructor(e,t){this.query=e,this.Ou=t,this.Mu=null,this.hasCachedResults=!1,this.current=!1,this.Nu=ce(),this.mutatedKeys=ce(),this.Lu=Fe(e)?Tc(e):cl(e),this.Bu=new ur(this.Lu)}get Uu(){return this.Ou}ku(e,t){const r=t?t.qu:new Nh,i=t?t.Bu:this.Bu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const[l,h]=this.$u(this.query,i);e.inorderTraversal((g,b)=>{const C=i.get(g),R=l5(this.query,b)?b:null,M=!!C&&this.mutatedKeys.has(C.key),q=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let X=!1;C&&R?C.data.isEqual(R.data)?M!==q&&(r.track({type:3,doc:R}),X=!0):this.Ku(C,R)||(r.track({type:2,doc:R}),X=!0,(l&&this.Lu(R,l)>0||h&&this.Lu(R,h)<0)&&(c=!0)):!C&&R?(r.track({type:0,doc:R}),X=!0):C&&!R&&(r.track({type:1,doc:C}),X=!0,(l||h)&&(c=!0)),X&&(R?(a=a.add(R),s=q?s.add(g):s.delete(g)):(a=a.delete(g),s=s.delete(g)))});const p=this.Wu(this.query);if(p)if(Fe(this.query)){const g=[];a.forEach(R=>g.push(R));const b=qf(this.query,g);let C=new ur(Tc(this.query));for(const R of b)C=C.add(R);a.forEach(R=>{C.has(R.key)||(s=s.delete(R.key),r.track({type:1,doc:R}))}),a=C}else{const g=this.Qu(this.query);for(;a.size>p;){const b=g==="F"?a.last():a.first();a=a.delete(b.key),s=s.delete(b.key),r.track({type:1,doc:b})}}return{Bu:a,qu:r,Uo:c,mutatedKeys:s}}Wu(e){return Fe(e)?Zo(e)?.limit:e.limit||void 0}Qu(e){if(Fe(e)){const t=Zo(e);return t&&t.limit<0?"L":"F"}return e.limitType}$u(e,t){if(Fe(e)){const r=Zo(e)?.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.Wu(this.query)?t.last():null,e.limitType==="L"&&t.size===this.Wu(this.query)?t.first():null]}Ku(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Bu;this.Bu=e.Bu,this.mutatedKeys=e.mutatedKeys;const a=e.qu.cu();a.sort((p,g)=>function(C,R){const M=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{ft:q})}};return M(C)-M(R)}(p.type,g.type)||this.Lu(p.doc,g.doc)),this.Gu(r),i=i??!1;const c=t&&!i?this.zu():[],l=this.Nu.size===0&&this.current&&!i?1:0,h=l!==this.Mu;return this.Mu=l,a.length!==0||h?{snapshot:new Yr(this.query,e.Bu,s,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ju:c}:{ju:c}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Bu:this.Bu,qu:new Nh,mutatedKeys:this.mutatedKeys,Uo:!1},!1)):{ju:[]}}Hu(e){return!this.Ou.has(e)&&!!this.Bu.has(e)&&!this.Bu.get(e).hasLocalMutations}Gu(e){e&&(e.addedDocuments.forEach(t=>this.Ou=this.Ou.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ou=this.Ou.delete(t)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Nu;this.Nu=ce(),this.Bu.forEach(r=>{this.Hu(r.key)&&(this.Nu=this.Nu.add(r.key))});const t=[];return e.forEach(r=>{this.Nu.has(r)||t.push(new e2(r))}),this.Nu.forEach(r=>{e.has(r)||t.push(new Zf(r))}),t}Ju(e){this.Ou=e.Jo,this.Nu=ce();const t=this.ku(e.documents);return this.applyChanges(t,!0)}Yu(){return Yr.fromInitialDocuments(this.query,this.Bu,this.mutatedKeys,this.Mu===0,this.hasCachedResults)}}const zl="SyncEngine";class ny{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ry{constructor(e){this.key=e,this.Zu=!1}}class iy{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Xu={},this.ec=new Er(c=>Bf(c),po),this.tc=new Map,this.nc=new Set,this.rc=new Ee(Q.comparator),this.sc=new Map,this._c=new Pl,this.oc={},this.ac=new Map,this.uc=Yn.Cs(),this.onlineState="Unknown",this.cc=void 0}get isPrimaryClient(){return this.cc===!0}}async function sy(n,e,t=!0){const r=a2(n);let i;const s=r.ec.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Yu()):i=await t2(r,e,t,!0),i}async function ay(n,e){const t=a2(n);await t2(t,e,!0,!1)}async function t2(n,e,t,r){const i=await L5(n.localStore,Fe(e)?e:Wt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await oy(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Wf(n.remoteStore,i),c}async function oy(n,e,t,r,i){n.lc=(g,b,C)=>async function(M,q,X,O){let $=q.view.ku(X);$.Uo&&($=await Lh(M.localStore,q.query,!1).then(({documents:E})=>q.view.ku(E,$)));const ae=O&&O.targetChanges.get(q.targetId),ge=O&&O.targetMismatches.get(q.targetId)!=null,fe=q.view.applyChanges($,M.isPrimaryClient,ae,ge);return Fh(M,q.targetId,fe.ju),fe.snapshot}(n,g,b,C);const s=await Lh(n.localStore,e,!0),a=new ty(e,s.Jo),c=a.ku(s.documents),l=Ts.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(c,n.isPrimaryClient,l);Fh(n,t,h.ju);const p=new ny(e,t,a);return n.ec.set(e,p),n.tc.has(t)?n.tc.get(t).push(e):n.tc.set(t,[e]),h.snapshot}async function cy(n,e,t){const r=re(n),i=r.ec.get(e),s=r.tc.get(i.targetId);if(s.length>1)return r.tc.set(i.targetId,s.filter(a=>!po(a,e))),void r.ec.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ac(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Dl(r.remoteStore,i.targetId),kc(r,i.targetId)}).catch(ti)):(kc(r,i.targetId),await Ac(r.localStore,i.targetId,!0))}async function ly(n,e){const t=re(n),r=t.ec.get(e),i=t.tc.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Dl(t.remoteStore,r.targetId))}async function uy(n,e,t){const r=yy(n);try{const i=await function(a,c){const l=re(a),h=_e.now(),p=c.reduce((C,R)=>C.add(R.key),ce());let g,b;return l.persistence.runTransaction("Locally write mutations","readwrite",C=>{let R=ct(),M=ce();return l.Qo.getEntries(C,p).next(q=>{R=q,R.forEach((X,O)=>{O.isValidDocument()||(M=M.add(X))})}).next(()=>l.localDocuments.getOverlayedDocuments(C,R)).next(q=>{g=q;const X=[];for(const O of c){const $=h3(O,g.get(O.key).overlayedDocument);$!=null&&X.push(new wr(O.key,$,Mp($.value.mapValue),ln.exists(!0)))}return l.mutationQueue.addMutationBatch(C,h,X,c)}).next(q=>{b=q;const X=q.applyToLocalDocumentSet(g,M);return l.documentOverlayCache.saveOverlays(C,q.batchId,X)})}).then(()=>({batchId:b.batchId,changes:nf(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let h=a.oc[a.currentUser.toKey()];h||(h=new Ee(le)),h=h.insert(c,l),a.oc[a.currentUser.toKey()]=h}(r,i.batchId,t),await ks(r,i.changes),await mo(r.remoteStore)}catch(i){const s=Ul(i,"Failed to persist write");t.reject(s)}}async function n2(n,e){const t=re(n);try{const r=await C5(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.sc.get(s);a&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.Zu=!0:i.modifiedDocuments.size>0?W(a.Zu,14607):i.removedDocuments.size>0&&(W(a.Zu,42227),a.Zu=!1))}),await ks(t,r,e)}catch(r){await ti(r)}}function Mh(n,e,t){const r=re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ec.forEach((s,a)=>{const c=a.view.Ru(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const l=re(a);l.onlineState=c;let h=!1;l.queries.forEach((p,g)=>{for(const b of g.Eu)b.Ru(c)&&(h=!0)}),h&&Bl(l)}(r.eventManager,e),i.length&&r.Xu.zn(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hy(n,e,t){const r=re(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.sc.get(e),s=i&&i.key;if(s){let a=new Ee(Q.comparator);a=a.insert(s,Ze.newNoDocument(s,ne.min()));const c=ce().add(s),l=new Is(ne.min(),new Map,new Ee(le),a,ct(),c);await n2(r,l),r.rc=r.rc.remove(s),r.sc.delete(e),$l(r)}else await Ac(r.localStore,e,!1).then(()=>kc(r,e,t)).catch(ti)}async function dy(n,e){const t=re(n),r=e.batch.batchId;try{const i=await k5(t.localStore,e);i2(t,r,null),r2(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ks(t,i)}catch(i){await ti(i)}}async function py(n,e,t){const r=re(n);try{const i=await function(a,c){const l=re(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return l.mutationQueue.lookupMutationBatch(h,c).next(g=>(W(g!==null,37113),p=g.keys(),l.mutationQueue.removeMutationBatch(h,g))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>l.localDocuments.getDocuments(h,p))})}(r.localStore,e);i2(r,e,t),r2(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ks(r,i)}catch(i){await ti(i)}}function r2(n,e){(n.ac.get(e)||[]).forEach(t=>{t.resolve()}),n.ac.delete(e)}function i2(n,e,t){const r=re(n);let i=r.oc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function kc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.tc.get(e))n.ec.delete(r),t&&n.Xu.Ec(r,t);n.tc.delete(e),n.isPrimaryClient&&n._c.s_(e).forEach(r=>{n._c.containsKey(r)||s2(n,r)})}function s2(n,e){n.nc.delete(e.path.canonicalString());const t=n.rc.get(e);t!==null&&(Dl(n.remoteStore,t),n.rc=n.rc.remove(e),n.sc.delete(t),$l(n))}function Fh(n,e,t){for(const r of t)r instanceof Zf?(n._c.addReference(r.key,e),fy(n,r)):r instanceof e2?(H(zl,"Document no longer in limbo: "+r.key),n._c.removeReference(r.key,e),n._c.containsKey(r.key)||s2(n,r.key)):Y(19791,{hc:r})}function fy(n,e){const t=e.key,r=t.path.canonicalString();n.rc.get(t)||n.nc.has(r)||(H(zl,"New document in limbo: "+t),n.nc.add(r),$l(n))}function $l(n){for(;n.nc.size>0&&n.rc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new Q(me.fromString(e)),r=n.uc.next();n.sc.set(r,new ry(t)),n.rc=n.rc.insert(t,r),Wf(n.remoteStore,new on(Wt(ol(t.path)),r,"TargetPurposeLimboResolution",Ja.ce))}}async function ks(n,e,t){const r=re(n),i=[],s=[],a=[];r.ec.isEmpty()||(r.ec.forEach((c,l)=>{a.push(r.lc(l,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:t?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Ll.vo(l.targetId,h);s.push(p)}}))}),await Promise.all(a),r.Xu.zn(i),await async function(l,h){const p=re(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(h,b=>V.forEach(b.wo,C=>p.persistence.referenceDelegate.addReference(g,b.targetId,C)).next(()=>V.forEach(b.bo,C=>p.persistence.referenceDelegate.removeReference(g,b.targetId,C)))))}catch(g){if(!ni(g))throw g;H(Ol,"Failed to update sequence numbers: "+g)}for(const g of h){const b=g.targetId;if(!g.fromCache){const C=p.$o.get(b),R=C.snapshotVersion,M=C.withLastLimboFreeSnapshotVersion(R);p.$o=p.$o.insert(b,M)}}}(r.localStore,s))}async function gy(n,e){const t=re(n);if(!t.currentUser.isEqual(e)){H(zl,"User change. New user:",e.toKey());const r=await Hf(t.localStore,e);t.currentUser=e,function(s,a){s.ac.forEach(c=>{c.forEach(l=>{l.reject(new G(F.CANCELLED,a))})}),s.ac.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ks(t,r.zo)}}function my(n,e){const t=re(n),r=t.sc.get(e);if(r&&r.Zu)return ce().add(r.key);{let i=ce();const s=t.tc.get(e);if(!s)return i;for(const a of s??[]){const c=t.ec.get(a);i=i.unionWith(c.view.Uu)}return i}}function a2(n){const e=re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=n2.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=my.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hy.bind(null,e),e.Xu.zn=J5.bind(null,e.eventManager),e.Xu.Ec=Z5.bind(null,e.eventManager),e}function yy(n){const e=re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dy.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=py.bind(null,e),e}class Ua{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ao(e.databaseInfo.databaseId),this.sharedClientState=this.Rc(e),this.persistence=this.Ic(e),await this.persistence.start(),this.localStore=this.Ac(e),this.gcScheduler=this.Vc(e,this.localStore),this.indexBackfillerScheduler=this.dc(e,this.localStore)}Vc(e,t){return null}dc(e,t){return null}Ac(e){return S5(this.persistence,new T5,e.initialUser,this.serializer)}Ic(e){return new jf(Rl.C_,this.serializer)}Rc(e){return new D5}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ua.provider={build:()=>new Ua};class vy extends Ua{constructor(e){super(),this.cacheSizeBytes=e}Vc(e,t){W(this.persistence.referenceDelegate instanceof Ma,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new y8(r,e.asyncQueue,t)}Ic(e){const t=this.cacheSizeBytes!==void 0?at.withCacheSize(this.cacheSizeBytes):at.DEFAULT;return new jf(r=>Ma.C_(r,t),this.serializer)}}class Cc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gy.bind(null,this.syncEngine),await W5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Y5}()}createDatastore(e){const t=ao(e.databaseInfo.databaseId),r=o8(e.databaseInfo);return d8(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new V5(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Mh(this.syncEngine,t,0),function(){return bh.C()?new bh:new r8}())}createSyncEngine(e,t){return function(i,s,a,c,l,h,p){const g=new iy(i,s,a,c,l,h);return p&&(g.cc=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=re(t);H(Zt,"RemoteStore shutting down."),r.tu.add(5),await Ss(r),r.ru.shutdown(),r.iu.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Cc.provider={build:()=>new Cc};/**
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
 */class _y{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.mc(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.mc(this.observer.error,e):fn("Uncaught Error in snapshot listener:",e.toString()))}gc(){this.muted=!0}mc(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Xn="FirestoreClient";class wy{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=tl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{H(Xn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H(Xn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ul(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tc(n,e){n.asyncQueue.verifyOperationInProgress(),H(Xn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Hf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Uh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ey(n);H(Xn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Dh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Dh(e.remoteStore,i)),n._onlineComponents=e}async function Ey(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(Xn,"Using user provided OfflineComponentProvider");try{await tc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ut("Error using user provided cache. Falling back to memory cache: "+t),await tc(n,new Ua)}}else H(Xn,"Using default OfflineComponentProvider"),await tc(n,new vy(void 0));return n._offlineComponents}async function o2(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(Xn,"Using user provided OnlineComponentProvider"),await Uh(n,n._uninitializedComponentsProvider._online)):(H(Xn,"Using default OnlineComponentProvider"),await Uh(n,new Cc))),n._onlineComponents}function by(n){return o2(n).then(e=>e.syncEngine)}async function Iy(n){const e=await o2(n),t=e.eventManager;return t.onListen=sy.bind(null,e.syncEngine),t.onUnlisten=cy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ay.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ly.bind(null,e.syncEngine),t}function Ty(n,e,t={}){const r=new Un;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,h){const p=new _y({next:b=>{p.gc(),a.enqueueAndForget(()=>X5(s,g));const C=b.docs.has(c);!C&&b.fromCache?h.reject(new G(F.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&b.fromCache&&l&&l.source==="server"?h.reject(new G(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(b)},error:b=>h.reject(b)}),g=new ey(ol(c.path),p,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Q5(s,g)}(await Iy(n),n.asyncQueue,e,t,r)),r.promise}function Ay(n,e){const t=new Un;return n.asyncQueue.enqueueAndForget(async()=>uy(await by(n),e,t)),t.promise}/**
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
 */const Bh="AsyncQueue";class zh{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new vf(this,"async_queue_retry"),this.jc=()=>{const r=ec();r&&H(Bh,"Visibility state changed to "+r.visibilityState),this.xn.gn()},this.Hc=e;const t=ec();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=ec();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const t=new Un;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(e){if(!ni(e))throw e;H(Bh,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.xn.mn(()=>this.Zc())}}Yc(e){const t=this.Hc.then(()=>(this.Qc=!0,e().catch(r=>{throw this.Wc=r,this.Qc=!1,fn("INTERNAL UNHANDLED ERROR: ",$h(r)),r}).then(r=>(this.Qc=!1,r))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const i=Fl.createAndSchedule(this,e,t,r,s=>this.Xc(s));return this.Kc.push(i),i}Jc(){this.Wc&&Y(47125,{el:$h(this.Wc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function $h(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ql extends pl{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new zh,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zh(e),this._firestoreClient=void 0,await e}}}function xy(n,e){const t=typeof n=="object"?n:Ha(),r=typeof n=="string"?n:Aa,i=vr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=og("firestore");s&&w8(i,...s)}return i}function c2(n){if(n._terminated)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Sy(n),n._firestoreClient}function Sy(n){const e=n._freezeSettings(),t=f8(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new wy(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(i){const s=i?._online.build();return{_offline:i?._offline.build(s),_online:s}}(n._componentsProvider))}/**
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
 */class ky{convertValue(e,t="none"){switch(Oe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _r(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){const t=e.fields?.[Xi].arrayValue?.values?.map(r=>Ae(r.doubleValue));return new lt(t)}convertGeoPoint(e){return new Yt(Ae(e.latitude),Ae(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Es(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Hr(e));default:return null}}convertTimestamp(e){const t=jn(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=me.fromString(e);W(pf(r),9688,{name:e});const i=new Qi(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(t)||fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class Cy extends ky{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}const qh="@firebase/firestore",jh="4.16.0";/**
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
 */class l2{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Py(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(oo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Py extends l2{data(){return super.data()}}function Ry(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ri{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hr extends l2{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(oo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=hr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}hr._jsonSchemaVersion="firestore/documentSnapshot/1.0",hr._jsonSchema={type:Pe("string",hr._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class ua extends hr{data(e={}){return super.data(e)}}class zi{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Ri(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ua(this._firestore,this._userDataWriter,r.key,r,new Ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new G(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{Fe(i._snapshot.query)?Tc(i._snapshot.query):cl(i.query._query);const l=new ua(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Ri(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new ua(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Ri(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:Ly(c.type),doc:l,oldIndex:h,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ly(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:n})}}/**
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
 */zi._jsonSchemaVersion="firestore/querySnapshot/1.0",zi._jsonSchema={type:Pe("string",zi._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};/**
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
 */function Oy(n){n=Wi(n,Ue);const e=Wi(n.firestore,ql),t=c2(e);return Ty(t,n._key).then(r=>Vy(e,n,r))}function Dy(n,e,t){n=Wi(n,Ue);const r=Wi(n.firestore,ql),i=Ry(n.converter,e,t),s=T8(r);return Ny(r,[A8(s,"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ln.none())])}function Ny(n,e){const t=c2(n);return Ay(t,e)}function Vy(n,e,t){const r=t.docs.get(e._key),i=new Cy(n);return new hr(n,i,e._key,r,new Ri(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){R4(Jr),Qt(new Ft("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new ql(new D4(r.getProvider("auth-internal")),new M4(a,r.getProvider("app-check-internal")),r3(a,i),a);return s={useFetchStreams:t,...s},c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),xt(qh,jh,e),xt(qh,jh,"esm2020")})();const u2={apiKey:"AIzaSyABnvYQl4QzP1lHF4Ei_AzrDPYlMKoTXpA",authDomain:"yathralanka-2ac43.firebaseapp.com",projectId:"yathralanka-2ac43",storageBucket:"yathralanka-2ac43.firebasestorage.app",measurementId:"G-KXWXP8TGMS",appId:"1:1032179534120:web:21d200d59018319f7ca81d",messagingSenderId:"1032179534120"};console.log("Config keys being used:",u2.projectId);const Ba=T0().length===0?hd(u2):Ha();Zm(Ba);let we;try{we=_4(Ba)}catch{we=Zd(Ba,{persistence:[fp,ap]})}const h2=xy(Ba),My="modulepreload",Fy=function(n,e){return new URL(n,e).href},Hh={},d2=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");i=Promise.allSettled(t.map(h=>{if(h=Fy(h,r),h in Hh)return;Hh[h]=!0;const p=h.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(!!r)for(let R=a.length-1;R>=0;R--){const M=a[R];if(M.href===h&&(!p||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${g}`))return;const C=document.createElement("link");if(C.rel=p?"stylesheet":My,p||(C.as="script"),C.crossOrigin="",C.href=h,l&&C.setAttribute("nonce",l),document.head.appendChild(C),p)return new Promise((R,M)=>{C.addEventListener("load",R),C.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */const Uy=n=>{const e=new Map;e.set("web",{name:"web"});const t=n.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},r=(s,a)=>{t.platforms.set(s,a)},i=s=>{t.platforms.has(s)&&(t.currentPlatform=t.platforms.get(s))};return t.addPlatform=r,t.setPlatform=i,t},By=n=>n.CapacitorPlatforms=Uy(n),p2=By(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});p2.addPlatform;p2.setPlatform;var Qr;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Qr||(Qr={}));class Ur extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}const zy=n=>{var e,t;return n?.androidBridge?"android":!((t=(e=n?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},$y=n=>{var e,t,r,i,s;const a=n.CapacitorCustomPlatform||null,c=n.Capacitor||{},l=c.Plugins=c.Plugins||{},h=n.CapacitorPlatforms,p=()=>a!==null?a.name:zy(n),g=((e=h?.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||p,b=()=>g()!=="web",C=((t=h?.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||b,R=E=>{const y=ae.get(E);return!!(y?.platforms.has(g())||X(E))},M=((r=h?.currentPlatform)===null||r===void 0?void 0:r.isPluginAvailable)||R,q=E=>{var y;return(y=c.PluginHeaders)===null||y===void 0?void 0:y.find(w=>w.name===E)},X=((i=h?.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||q,O=E=>n.console.error(E),$=(E,y,w)=>Promise.reject(`${w} does not have an implementation of "${y}".`),ae=new Map,ge=(E,y={})=>{const w=ae.get(E);if(w)return console.warn(`Capacitor plugin "${E}" already registered. Cannot register plugins twice.`),w.proxy;const A=g(),I=X(E);let S;const _=async()=>(!S&&A in y?S=typeof y[A]=="function"?S=await y[A]():S=y[A]:a!==null&&!S&&"web"in y&&(S=typeof y.web=="function"?S=await y.web():S=y.web),S),Ke=(Be,je)=>{var pt,Pt;if(I){const ft=I?.methods.find(nt=>je===nt.name);if(ft)return ft.rtype==="promise"?nt=>c.nativePromise(E,je.toString(),nt):(nt,vn)=>c.nativeCallback(E,je.toString(),nt,vn);if(Be)return(pt=Be[je])===null||pt===void 0?void 0:pt.bind(Be)}else{if(Be)return(Pt=Be[je])===null||Pt===void 0?void 0:Pt.bind(Be);throw new Ur(`"${E}" plugin is not implemented on ${A}`,Qr.Unimplemented)}},Ct=Be=>{let je;const pt=(...Pt)=>{const ft=_().then(nt=>{const vn=Ke(nt,Be);if(vn){const _n=vn(...Pt);return je=_n?.remove,_n}else throw new Ur(`"${E}.${Be}()" is not implemented on ${A}`,Qr.Unimplemented)});return Be==="addListener"&&(ft.remove=async()=>je()),ft};return pt.toString=()=>`${Be.toString()}() { [capacitor code] }`,Object.defineProperty(pt,"name",{value:Be,writable:!1,configurable:!1}),pt},Ps=Ct("addListener"),Rs=Ct("removeListener"),Tr=(Be,je)=>{const pt=Ps({eventName:Be},je),Pt=async()=>{const nt=await pt;Rs({eventName:Be,callbackId:nt},je)},ft=new Promise(nt=>pt.then(()=>nt({remove:Pt})));return ft.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await Pt()},ft},yn=new Proxy({},{get(Be,je){switch(je){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return I?Tr:Ps;case"removeListener":return Rs;default:return Ct(je)}}});return l[E]=yn,ae.set(E,{name:E,proxy:yn,platforms:new Set([...Object.keys(y),...I?[A]:[]])}),yn},fe=((s=h?.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||ge;return c.convertFileSrc||(c.convertFileSrc=E=>E),c.getPlatform=g,c.handleError=O,c.isNativePlatform=C,c.isPluginAvailable=M,c.pluginMethodNoop=$,c.registerPlugin=fe,c.Exception=Ur,c.DEBUG=!!c.DEBUG,c.isLoggingEnabled=!!c.isLoggingEnabled,c.platform=c.getPlatform(),c.isNative=c.isNativePlatform(),c},qy=n=>n.Capacitor=$y(n),Dt=qy(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Cs=Dt.registerPlugin;Dt.Plugins;class jl{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const a=async()=>this.removeListener(e,t);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(t),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new Dt.Exception(e,Qr.Unimplemented)}unavailable(e="not available"){return new Dt.Exception(e,Qr.Unavailable)}async removeListener(e,t){const r=this.listeners[e];if(!r)return;const i=r.indexOf(t);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(r=>{this.notifyListeners(e,r)}))}}const Gh=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Wh=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class jy extends jl{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Wh(i).trim(),s=Wh(s).trim(),t[i]=s}),t}async setCookie(e){try{const t=Gh(e.key),r=Gh(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${i}; path=${s}; ${a};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Cs("CapacitorCookies",{web:()=>new jy});const Hy=async n=>new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>t(i),r.readAsDataURL(n)}),Gy=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(i=>i.toLocaleLowerCase()).reduce((i,s,a)=>(i[s]=n[e[a]],i),{})},Wy=(n,e=!0)=>n?Object.entries(n).reduce((r,i)=>{const[s,a]=i;let c,l;return Array.isArray(a)?(l="",a.forEach(h=>{c=e?encodeURIComponent(h):h,l+=`${s}=${c}&`}),l.slice(0,-1)):(c=e?encodeURIComponent(a):a,l=`${s}=${c}`),`${r}&${l}`},"").substr(1):null,Ky=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),i=Gy(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[a,c]of Object.entries(n.data||{}))s.set(a,c);t.body=s.toString()}else if(i.includes("multipart/form-data")||n.data instanceof FormData){const s=new FormData;if(n.data instanceof FormData)n.data.forEach((c,l)=>{s.append(l,c)});else for(const c of Object.keys(n.data))s.append(c,n.data[c]);t.body=s;const a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(i.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class Yy extends jl{async request(e){const t=Ky(e,e.webFetchExtra),r=Wy(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,t),a=s.headers.get("content-type")||"";let{responseType:c="text"}=s.ok?e:{};a.includes("application/json")&&(c="json");let l,h;switch(c){case"arraybuffer":case"blob":h=await s.blob(),l=await Hy(h);break;case"json":l=await s.json();break;case"document":case"text":default:l=await s.text()}const p={};return s.headers.forEach((g,b)=>{p[b]=g}),{data:l,headers:p,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Cs("CapacitorHttp",{web:()=>new Yy});const Z=Cs("CapacitorGoogleMaps",{web:()=>d2(()=>import("./web-DlZIR_uY.js"),[],import.meta.url).then(n=>new n.CapacitorGoogleMapsWeb)});Z.addListener("isMapInFocus",n=>{var e;const t=n.x,r=n.y,i=document.elementFromPoint(t,r),a=((e=i?.dataset)===null||e===void 0?void 0:e.internalId)===n.mapId;Z.dispatchMapEvent({id:n.mapId,focus:a})});class Qy{constructor(e){this.southwest=e.southwest,this.center=e.center,this.northeast=e.northeast}async contains(e){return(await Z.mapBoundsContains({bounds:this,point:e})).contains}async extend(e){const t=await Z.mapBoundsExtend({bounds:this,point:e});return this.southwest=t.bounds.southwest,this.center=t.bounds.center,this.northeast=t.bounds.northeast,this}}var Pc;(function(n){n.Normal="Normal",n.Hybrid="Hybrid",n.Satellite="Satellite",n.Terrain="Terrain",n.None="None"})(Pc||(Pc={}));class Xy extends HTMLElement{constructor(){super()}connectedCallback(){if(this.innerHTML="",Dt.getPlatform()=="ios"){this.style.overflow="scroll",this.style["-webkit-overflow-scrolling"]="touch";const e=document.createElement("div");e.style.height="200%",this.appendChild(e)}}}customElements.define("capacitor-google-map",Xy);class Br{constructor(e){this.element=null,this.resizeObserver=null,this.handleScrollEvent=()=>this.updateMapBounds(),this.id=e}static async create(e,t){const r=new Br(e.id);if(!e.element)throw new Error("container element is required");e.config.androidLiteMode===void 0&&(e.config.androidLiteMode=!1),r.element=e.element,r.element.dataset.internalId=e.id;const i=await Br.getElementBounds(e.element);if(e.config.width=i.width,e.config.height=i.height,e.config.x=i.x,e.config.y=i.y,e.config.devicePixelRatio=window.devicePixelRatio,Dt.getPlatform()=="android"&&r.initScrolling(),Dt.isNativePlatform()){e.element={};const s=()=>{var p,g;const b=(g=(p=r.element)===null||p===void 0?void 0:p.getBoundingClientRect())!==null&&g!==void 0?g:{};return{x:b.x,y:b.y,width:b.width,height:b.height}},a=()=>{Z.onDisplay({id:r.id,mapBounds:s()})},c=()=>{Z.onResize({id:r.id,mapBounds:s()})},l=r.element.closest(".ion-page");Dt.getPlatform()==="ios"&&l&&(l.addEventListener("ionViewWillEnter",()=>{setTimeout(()=>{a()},100)}),l.addEventListener("ionViewDidEnter",()=>{setTimeout(()=>{a()},100)}));const h={width:i.width,height:i.height,isHidden:!1};r.resizeObserver=new ResizeObserver(()=>{if(r.element!=null){const p=r.element.getBoundingClientRect(),g=p.width===0&&p.height===0;g||(h.isHidden?Dt.getPlatform()==="ios"&&!l&&a():(h.width!==p.width||h.height!==p.height)&&c()),h.width=p.width,h.height=p.height,h.isHidden=g}}),r.resizeObserver.observe(r.element)}if(await new Promise((s,a)=>{setTimeout(async()=>{try{await Z.create(e),s(void 0)}catch(c){a(c)}},200)}),t){const s=await Z.addListener("onMapReady",a=>{a.mapId==r.id&&(t(a),s.remove())})}return r}static async getElementBounds(e){return new Promise(t=>{let r=e.getBoundingClientRect();if(r.width==0){let i=0;const s=setInterval(function(){r.width==0&&i<30?(r=e.getBoundingClientRect(),i++):(i==30&&console.warn("Map size could not be determined"),clearInterval(s),t(r))},100)}else t(r)})}async enableTouch(){return Z.enableTouch({id:this.id})}async disableTouch(){return Z.disableTouch({id:this.id})}async enableClustering(e){return Z.enableClustering({id:this.id,minClusterSize:e})}async disableClustering(){return Z.disableClustering({id:this.id})}async addMarker(e){return(await Z.addMarker({id:this.id,marker:e})).id}async addMarkers(e){return(await Z.addMarkers({id:this.id,markers:e})).ids}async removeMarker(e){return Z.removeMarker({id:this.id,markerId:e})}async removeMarkers(e){return Z.removeMarkers({id:this.id,markerIds:e})}async addPolygons(e){return(await Z.addPolygons({id:this.id,polygons:e})).ids}async addPolylines(e){return(await Z.addPolylines({id:this.id,polylines:e})).ids}async removePolygons(e){return Z.removePolygons({id:this.id,polygonIds:e})}async addCircles(e){return(await Z.addCircles({id:this.id,circles:e})).ids}async removeCircles(e){return Z.removeCircles({id:this.id,circleIds:e})}async removePolylines(e){return Z.removePolylines({id:this.id,polylineIds:e})}async destroy(){var e;return Dt.getPlatform()=="android"&&this.disableScrolling(),Dt.isNativePlatform()&&((e=this.resizeObserver)===null||e===void 0||e.disconnect()),this.removeAllMapListeners(),Z.destroy({id:this.id})}async setCamera(e){return Z.setCamera({id:this.id,config:e})}async getMapType(){const{type:e}=await Z.getMapType({id:this.id});return Pc[e]}async setMapType(e){return Z.setMapType({id:this.id,mapType:e})}async enableIndoorMaps(e){return Z.enableIndoorMaps({id:this.id,enabled:e})}async enableTrafficLayer(e){return Z.enableTrafficLayer({id:this.id,enabled:e})}async enableAccessibilityElements(e){return Z.enableAccessibilityElements({id:this.id,enabled:e})}async enableCurrentLocation(e){return Z.enableCurrentLocation({id:this.id,enabled:e})}async setPadding(e){return Z.setPadding({id:this.id,padding:e})}async getMapBounds(){return new Qy(await Z.getMapBounds({id:this.id}))}async fitBounds(e,t){return Z.fitBounds({id:this.id,bounds:e,padding:t})}initScrolling(){const e=document.getElementsByTagName("ion-content");for(let t=0;t<e.length;t++)e[t].scrollEvents=!0;window.addEventListener("ionScroll",this.handleScrollEvent),window.addEventListener("scroll",this.handleScrollEvent),window.addEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.addEventListener("change",()=>{setTimeout(this.updateMapBounds,500)}):window.addEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,500)})}disableScrolling(){window.removeEventListener("ionScroll",this.handleScrollEvent),window.removeEventListener("scroll",this.handleScrollEvent),window.removeEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.removeEventListener("change",()=>{setTimeout(this.updateMapBounds,1e3)}):window.removeEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,1e3)})}updateMapBounds(){if(this.element){const e=this.element.getBoundingClientRect();Z.onScroll({id:this.id,mapBounds:{x:e.x,y:e.y,width:e.width,height:e.height}})}}async setOnCameraIdleListener(e){this.onCameraIdleListener&&this.onCameraIdleListener.remove(),e?this.onCameraIdleListener=await Z.addListener("onCameraIdle",this.generateCallback(e)):this.onCameraIdleListener=void 0}async setOnBoundsChangedListener(e){this.onBoundsChangedListener&&this.onBoundsChangedListener.remove(),e?this.onBoundsChangedListener=await Z.addListener("onBoundsChanged",this.generateCallback(e)):this.onBoundsChangedListener=void 0}async setOnCameraMoveStartedListener(e){this.onCameraMoveStartedListener&&this.onCameraMoveStartedListener.remove(),e?this.onCameraMoveStartedListener=await Z.addListener("onCameraMoveStarted",this.generateCallback(e)):this.onCameraMoveStartedListener=void 0}async setOnClusterClickListener(e){this.onClusterClickListener&&this.onClusterClickListener.remove(),e?this.onClusterClickListener=await Z.addListener("onClusterClick",this.generateCallback(e)):this.onClusterClickListener=void 0}async setOnClusterInfoWindowClickListener(e){this.onClusterInfoWindowClickListener&&this.onClusterInfoWindowClickListener.remove(),e?this.onClusterInfoWindowClickListener=await Z.addListener("onClusterInfoWindowClick",this.generateCallback(e)):this.onClusterInfoWindowClickListener=void 0}async setOnInfoWindowClickListener(e){this.onInfoWindowClickListener&&this.onInfoWindowClickListener.remove(),e?this.onInfoWindowClickListener=await Z.addListener("onInfoWindowClick",this.generateCallback(e)):this.onInfoWindowClickListener=void 0}async setOnMapClickListener(e){this.onMapClickListener&&this.onMapClickListener.remove(),e?this.onMapClickListener=await Z.addListener("onMapClick",this.generateCallback(e)):this.onMapClickListener=void 0}async setOnPolygonClickListener(e){this.onPolygonClickListener&&this.onPolygonClickListener.remove(),e?this.onPolygonClickListener=await Z.addListener("onPolygonClick",this.generateCallback(e)):this.onPolygonClickListener=void 0}async setOnCircleClickListener(e){this.onCircleClickListener&&this.onCircleClickListener.remove(),e?this.onCircleClickListener=await Z.addListener("onCircleClick",this.generateCallback(e)):this.onCircleClickListener=void 0}async setOnMarkerClickListener(e){this.onMarkerClickListener&&this.onMarkerClickListener.remove(),e?this.onMarkerClickListener=await Z.addListener("onMarkerClick",this.generateCallback(e)):this.onMarkerClickListener=void 0}async setOnPolylineClickListener(e){this.onPolylineClickListener&&this.onPolylineClickListener.remove(),e?this.onPolylineClickListener=await Z.addListener("onPolylineClick",this.generateCallback(e)):this.onPolylineClickListener=void 0}async setOnMarkerDragStartListener(e){this.onMarkerDragStartListener&&this.onMarkerDragStartListener.remove(),e?this.onMarkerDragStartListener=await Z.addListener("onMarkerDragStart",this.generateCallback(e)):this.onMarkerDragStartListener=void 0}async setOnMarkerDragListener(e){this.onMarkerDragListener&&this.onMarkerDragListener.remove(),e?this.onMarkerDragListener=await Z.addListener("onMarkerDrag",this.generateCallback(e)):this.onMarkerDragListener=void 0}async setOnMarkerDragEndListener(e){this.onMarkerDragEndListener&&this.onMarkerDragEndListener.remove(),e?this.onMarkerDragEndListener=await Z.addListener("onMarkerDragEnd",this.generateCallback(e)):this.onMarkerDragEndListener=void 0}async setOnMyLocationButtonClickListener(e){this.onMyLocationButtonClickListener&&this.onMyLocationButtonClickListener.remove(),e?this.onMyLocationButtonClickListener=await Z.addListener("onMyLocationButtonClick",this.generateCallback(e)):this.onMyLocationButtonClickListener=void 0}async setOnMyLocationClickListener(e){this.onMyLocationClickListener&&this.onMyLocationClickListener.remove(),e?this.onMyLocationClickListener=await Z.addListener("onMyLocationClick",this.generateCallback(e)):this.onMyLocationClickListener=void 0}async removeAllMapListeners(){this.onBoundsChangedListener&&(this.onBoundsChangedListener.remove(),this.onBoundsChangedListener=void 0),this.onCameraIdleListener&&(this.onCameraIdleListener.remove(),this.onCameraIdleListener=void 0),this.onCameraMoveStartedListener&&(this.onCameraMoveStartedListener.remove(),this.onCameraMoveStartedListener=void 0),this.onClusterClickListener&&(this.onClusterClickListener.remove(),this.onClusterClickListener=void 0),this.onClusterInfoWindowClickListener&&(this.onClusterInfoWindowClickListener.remove(),this.onClusterInfoWindowClickListener=void 0),this.onInfoWindowClickListener&&(this.onInfoWindowClickListener.remove(),this.onInfoWindowClickListener=void 0),this.onMapClickListener&&(this.onMapClickListener.remove(),this.onMapClickListener=void 0),this.onPolylineClickListener&&(this.onPolylineClickListener.remove(),this.onPolylineClickListener=void 0),this.onMarkerClickListener&&(this.onMarkerClickListener.remove(),this.onMarkerClickListener=void 0),this.onPolygonClickListener&&(this.onPolygonClickListener.remove(),this.onPolygonClickListener=void 0),this.onCircleClickListener&&(this.onCircleClickListener.remove(),this.onCircleClickListener=void 0),this.onMarkerDragStartListener&&(this.onMarkerDragStartListener.remove(),this.onMarkerDragStartListener=void 0),this.onMarkerDragListener&&(this.onMarkerDragListener.remove(),this.onMarkerDragListener=void 0),this.onMarkerDragEndListener&&(this.onMarkerDragEndListener.remove(),this.onMarkerDragEndListener=void 0),this.onMyLocationButtonClickListener&&(this.onMyLocationButtonClickListener.remove(),this.onMyLocationButtonClickListener=void 0),this.onMyLocationClickListener&&(this.onMyLocationClickListener.remove(),this.onMyLocationClickListener=void 0)}generateCallback(e){const t=this.id;return r=>{r.mapId==t&&e(r)}}}const za=Cs("Geolocation",{web:()=>d2(()=>import("./web-fkEv37gS.js"),[],import.meta.url).then(n=>new n.GeolocationWeb)});var cr;(function(n){n.Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS"})(cr||(cr={}));var $i;(function(n){n.Rear="REAR",n.Front="FRONT"})($i||($i={}));var Rc;(function(n){n.Uri="uri",n.Base64="base64",n.DataUrl="dataUrl"})(Rc||(Rc={}));class f2 extends jl{async getPhoto(e){return new Promise(async(t,r)=>{if(e.webUseInput||e.source===cr.Photos)this.fileInputExperience(e,t,r);else if(e.source===cr.Prompt){let i=document.querySelector("pwa-action-sheet");i||(i=document.createElement("pwa-action-sheet"),document.body.appendChild(i)),i.header=e.promptLabelHeader||"Photo",i.cancelable=!1,i.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],i.addEventListener("onSelection",async s=>{s.detail===0?this.fileInputExperience(e,t,r):this.cameraExperience(e,t,r)})}else this.cameraExperience(e,t,r)})}async pickImages(e){return new Promise(async(t,r)=>{this.multipleFileInputExperience(t,r)})}async cameraExperience(e,t,r){if(customElements.get("pwa-camera-modal")){const i=document.createElement("pwa-camera-modal");i.facingMode=e.direction===$i.Front?"user":"environment",document.body.appendChild(i);try{await i.componentOnReady(),i.addEventListener("onPhoto",async s=>{const a=s.detail;a===null?r(new Ur("User cancelled photos app")):a instanceof Error?r(a):t(await this._getCameraPhoto(a,e)),i.dismiss(),document.body.removeChild(i)}),i.present()}catch{this.fileInputExperience(e,t,r)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(e,t,r)}fileInputExperience(e,t,r){let i=document.querySelector("#_capacitor-camera-input");const s=()=>{var a;(a=i.parentNode)===null||a===void 0||a.removeChild(i)};i||(i=document.createElement("input"),i.id="_capacitor-camera-input",i.type="file",i.hidden=!0,document.body.appendChild(i),i.addEventListener("change",a=>{const c=i.files[0];let l="jpeg";if(c.type==="image/png"?l="png":c.type==="image/gif"&&(l="gif"),e.resultType==="dataUrl"||e.resultType==="base64"){const h=new FileReader;h.addEventListener("load",()=>{if(e.resultType==="dataUrl")t({dataUrl:h.result,format:l});else if(e.resultType==="base64"){const p=h.result.split(",")[1];t({base64String:p,format:l})}s()}),h.readAsDataURL(c)}else t({webPath:URL.createObjectURL(c),format:l}),s()}),i.addEventListener("cancel",a=>{r(new Ur("User cancelled photos app")),s()})),i.accept="image/*",i.capture=!0,e.source===cr.Photos||e.source===cr.Prompt?i.removeAttribute("capture"):e.direction===$i.Front?i.capture="user":e.direction===$i.Rear&&(i.capture="environment"),i.click()}multipleFileInputExperience(e,t){let r=document.querySelector("#_capacitor-camera-input-multiple");const i=()=>{var s;(s=r.parentNode)===null||s===void 0||s.removeChild(r)};r||(r=document.createElement("input"),r.id="_capacitor-camera-input-multiple",r.type="file",r.hidden=!0,r.multiple=!0,document.body.appendChild(r),r.addEventListener("change",s=>{const a=[];for(let c=0;c<r.files.length;c++){const l=r.files[c];let h="jpeg";l.type==="image/png"?h="png":l.type==="image/gif"&&(h="gif"),a.push({webPath:URL.createObjectURL(l),format:h})}e({photos:a}),i()}),r.addEventListener("cancel",s=>{t(new Ur("User cancelled photos app")),i()})),r.accept="image/*",r.click()}_getCameraPhoto(e,t){return new Promise((r,i)=>{const s=new FileReader,a=e.type.split("/")[1];t.resultType==="uri"?r({webPath:URL.createObjectURL(e),format:a,saved:!1}):(s.readAsDataURL(e),s.onloadend=()=>{const c=s.result;t.resultType==="dataUrl"?r({dataUrl:c,format:a,saved:!1}):r({base64String:c.split(",")[1],format:a,saved:!1})},s.onerror=c=>{i(c)})})}async checkPermissions(){if(typeof navigator>"u"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}new f2;const Jy=Cs("Camera",{web:()=>new f2}),Kh=localStorage.getItem("yathra_user_profile");let g2={...Xr};if(Kh)try{g2={...Xr,...JSON.parse(Kh)}}catch{}let f={currentScreen:"landing",currentUser:null,user:g2,isGuest:!1,pendingAction:null,authTab:"signin",activeSite:null,activeQuest:null,siteReferrer:"dashboard",activeDirectoryTab:"Heritage Trail",dwellTimer:null,dwellTimeLeft:900,dwellActive:!1,gpsVerified:!1,hasInitialPhotoCaptured:!1,dwellImages:[],cooldownTimer:null,cooldownTimeLeft:300,cooldownActive:!1,verificationComment:"",lastVerificationResult:null,lastKnownLocation:null,eventLedger:JSON.parse(localStorage.getItem("yathra_event_ledger")||"[]"),ledgerFilter:"ALL",stageDrawerOpen:!1,demoOverride:{active:!1,mockLat:null,mockLng:null,mockVisionScore:null,forcedStatus:null},currentQuizIndex:0,quizCorrectAnswers:0,quizAnswers:[],petitionSignatures:8742,petitionSigned:!1,donationAmount:0,navStack:[]};(!f.eventLedger||f.eventLedger.length===0)&&(f.eventLedger=[{eventId:"EVT-20260820-9A7F",timestamp:new Date(Date.now()-36e5).toISOString(),siteId:"sigiriya",siteName:"Sigiriya Rock Fortress",userCoords:{latitude:7.957,longitude:80.7603,accuracy:4.8},targetCoords:{latitude:7.957,longitude:80.7603},distanceDeltaMeters:14,visionScore:96,status:"PASSED",imageMetadata:{sizeBytes:184200,mimeType:"image/jpeg",hash:"SHA256-a8f3b9c1d2e4"},signature:"0x4a8f9c1d2e3f4b5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f"},{eventId:"EVT-20260820-8B3E",timestamp:new Date(Date.now()-72e5).toISOString(),siteId:"mihintale",siteName:"Mihintale",userCoords:{latitude:8.3508,longitude:80.5186,accuracy:5.1},targetCoords:{latitude:8.3508,longitude:80.5186},distanceDeltaMeters:28,visionScore:91,status:"PASSED",imageMetadata:{sizeBytes:165e3,mimeType:"image/jpeg",hash:"SHA256-b7e2c9d1a4f8"},signature:"0x9b8a7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f"},{eventId:"EVT-20260820-7C1D",timestamp:new Date(Date.now()-144e5).toISOString(),siteId:"galle_fort",siteName:"Galle Dutch Fort",userCoords:{latitude:6.0535,longitude:80.221,accuracy:12},targetCoords:{latitude:6.03,longitude:80.215},distanceDeltaMeters:2640,visionScore:89,status:"OUT_OF_BOUNDS",imageMetadata:{sizeBytes:198e3,mimeType:"image/jpeg",hash:"SHA256-c3d2e1f4a5b6"},signature:"0x1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b"},{eventId:"EVT-20260820-6D9A",timestamp:new Date(Date.now()-288e5).toISOString(),siteId:"temple_tooth",siteName:"Temple of the Sacred Tooth Relic",userCoords:{latitude:6.9271,longitude:79.8612,accuracy:50},targetCoords:{latitude:7.2936,longitude:80.6413},distanceDeltaMeters:115e3,visionScore:42,status:"SPOOF_SUSPECTED",imageMetadata:{sizeBytes:94e3,mimeType:"image/jpeg",hash:"SHA256-d4e3f2a1b5c6"},signature:"0x3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c"}],localStorage.setItem("yathra_event_ledger",JSON.stringify(f.eventLedger)));function Hl(n,e,t,r){const s=(t-n)*Math.PI/180,a=(r-e)*Math.PI/180,c=Math.sin(s/2)*Math.sin(s/2)+Math.cos(n*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(a/2)*Math.sin(a/2),l=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c));return Math.round(6371e3*l)}function Zy(n,e,t=Date.now()){if(f.lastKnownLocation&&f.lastKnownLocation.timestamp){const r=(t-f.lastKnownLocation.timestamp)/1e3;if(r>0&&r<3600){const s=Hl(f.lastKnownLocation.latitude,f.lastKnownLocation.longitude,n,e)/r*3.6;if(s>120)return{isSpoof:!0,reason:`Unrealistic velocity jump: ${Math.round(s)} km/h (>120 km/h threshold)`}}}return f.lastKnownLocation={latitude:n,longitude:e,timestamp:t},{isSpoof:!1,reason:"Velocity profile clean"}}function ev(n,e,t,r,i=Date.now()){let s=e,a=t,c=null,l=null;f.demoOverride&&f.demoOverride.active&&(f.demoOverride.mockLat!==null&&(s=f.demoOverride.mockLat),f.demoOverride.mockLng!==null&&(a=f.demoOverride.mockLng),f.demoOverride.mockVisionScore!==null&&(c=f.demoOverride.mockVisionScore),f.demoOverride.forcedStatus!==null&&(l=f.demoOverride.forcedStatus));const h=n.latitude,p=n.longitude,g=Hl(s,a,h,p),b=m2,C=Zy(s,a,i);let R=88;if(c!==null)R=c;else if(r&&r.length>50){let O=0;for(let $=0;$<r.length;$++)O=(O<<5)-O+r.charCodeAt($),O|=0;R=75+Math.abs(O%24)}let M="PASSED",q="";l!==null?M=l:C.isSpoof?(M="SPOOF_SUSPECTED",q=`Security Anomaly Intercepted: ${C.reason}`):g>b?(M="OUT_OF_BOUNDS",q=`Geofence Delta Alert: Device is ${g}m from site coordinates (Geofence Threshold: ${b}m).`):R<75?(M="FAILED_VISION",q=`Vision Model Rejection: Landmark feature match score (${R}%) is below required 75% threshold.`):(M="PASSED",q=`Verification Successful: Landmark geometry matches reference dataset (${R}% Confidence). Distance Delta: ${g}m.`);const X=tv(n,s,a,g,R,M,r);return f.lastVerificationResult={status:M,visionScore:R,distanceMeters:g,comment:q,block:X},f.verificationComment=q,f.lastVerificationResult}function tv(n,e,t,r,i,s,a){const c="EVT-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase(),l=new Date().toISOString(),h=`${c}:${l}:${n.id}:${e}:${t}:${r}:${i}:${s}`;let p=0;for(let C=0;C<h.length;C++)p=(p<<7)-p+h.charCodeAt(C),p|=0;const g="0x"+Math.abs(p).toString(16).padStart(8,"0")+Math.abs(p*31).toString(16).padEnd(24,"f").substring(0,56),b={eventId:c,timestamp:l,siteId:n.id,siteName:n.name,userCoords:{latitude:e,longitude:t,accuracy:5},targetCoords:{latitude:n.latitude,longitude:n.longitude},distanceDeltaMeters:r,visionScore:i,status:s,imageMetadata:{sizeBytes:a?a.length:172e3,mimeType:"image/jpeg",hash:"SHA256-"+g.substring(2,18)},signature:g};return f.eventLedger||(f.eventLedger=[]),f.eventLedger.unshift(b),localStorage.setItem("yathra_event_ledger",JSON.stringify(f.eventLedger)),b}let nv=null;const m2=500;function y2(){f.navStack=[],f.isGuest=!1,f.pendingAction=null,f.currentScreen="landing",U("landing",!1)}document.addEventListener("DOMContentLoaded",()=>{y2(),iv();const n=localStorage.getItem("yathra_sync_queue");n?f.offlineSyncQueue=JSON.parse(n):f.offlineSyncQueue=[],window.addEventListener("online",()=>{Qv()})});window.initApp=y2;function U(n,e=!0){f.currentScreen==="camera"&&n!=="camera"&&ds(),n==="splash"&&(n="landing");const t=localStorage.getItem("yathra_dwell_lock");if(t)try{const i=JSON.parse(t),s=Date.now()-i.startTime,a=i.duration||900*1e3;if(s<a&&!["dwell-time","camera","camera-success","camera-reject","guidelines"].includes(n)){ie("Application navigation is disabled. Complete your 15-minute heritage immersion session first.");return}}catch(i){console.error("Error evaluating system verification isolation parameters:",i)}if(e&&f.currentScreen!==n&&f.navStack.push(f.currentScreen),f.isGuest||!f.user||!f.user.uid||!we.currentUser){if(n==="site-detail"){const s=f.activeSite?f.activeSite.id:null;At({title:"Unlock Site Details",message:"Sign in or create an account to explore comprehensive history, view high-res photo archives, and unlock interactive site guides.",redirectView:"site-detail",targetId:s});return}if(["quests","quest-social","quest-food","quest-wandering","quest-wildlife","quest-warrior"].includes(n)){At({title:"Unlock Featured Missions",message:"Sign in or create an account to participate in Featured Missions & Side Quests, complete challenges, and earn XP.",redirectView:n});return}if(n==="petition"){At({title:"Sign the Petition",message:"Sign in or register to add your verified signature to heritage conservation petitions.",redirectView:"petition",targetId:"ritigala-forest"});return}if(n==="cleanup"){At({title:"Join Volunteer Cleanup",message:"Please sign in to register for upcoming site preservation and cleanup events.",redirectView:"cleanup",targetId:"site-cleanup"});return}if(n==="create-event"){At({title:"Host a Community Event",message:"You must be signed in to organize and publish new community heritage initiatives.",redirectView:"create-event"});return}}n==="site-detail"&&["map","directory","heritage-trail","hidden-gems","dashboard"].includes(f.currentScreen)&&(f.siteReferrer=f.currentScreen),f.currentScreen=n,n!=="map"&&(document.documentElement.classList.remove("map-active"),document.body.classList.remove("map-active"),document.documentElement.style.removeProperty("background"),document.documentElement.style.removeProperty("background-color"),document.body.style.setProperty("background","#FDF8E9","important"),document.body.style.setProperty("background-color","#FDF8E9","important"),["#app",".app-root","#app-container",".app-viewport",".iphone-chassis",".view-wrapper",".screen","main"].forEach(s=>{const a=document.querySelector(s);a&&(a.style.removeProperty("background"),a.style.removeProperty("background-color"))})),Ot()}function Ie(){if(f.currentScreen==="site-detail"){U(f.siteReferrer||"dashboard",!1);return}if(f.navStack.length>0){const n=f.navStack.pop();U(n,!1)}else U("dashboard")}function mt(n,e=""){f.user.xp+=n;let t="None";Q2.forEach(r=>{f.user.xp>=r.threshold&&(t=r.rank)}),f.user.rank!==t&&(f.user.rank=t,ie(`New Rank Unlocked: ${t}!`)),e&&ie(`${e} (+${n} XP)`),Dn()}function Dn(){try{f.currentUser=f.user,localStorage.setItem("yathra_user_profile",JSON.stringify(f.user)),f.user&&!f.isGuest&&f.user.uid&&localStorage.setItem("yathra_current_user",JSON.stringify(f.user))}catch(t){console.error("Local user profile caching error:",t)}const n=we.currentUser;if(!n||f.isGuest)return Promise.resolve();const e=bf(h2,"users",n.uid);return Dy(e,{xp:f.user.xp,rank:f.user.rank,medals:f.user.medals,sitesVisited:f.user.sitesVisited,quizzesPassed:f.user.quizzesPassed,role:f.user.role,interests:f.user.interests,permissions:f.user.permissions,signedPetitions:f.user.signedPetitions,donatedAmount:f.user.donatedAmount,joinedEvents:f.user.joinedEvents,unlockedCoupons:f.user.unlockedCoupons,completedQuizzes:f.user.completedQuizzes,dwellTimeCompleted:f.user.dwellTimeCompleted,verifiedPhotos:f.user.verifiedPhotos},{merge:!0}).catch(t=>{t&&(t.code==="permission-denied"||t.message?.includes("permission"))?console.warn("Firestore write permission denied. Profile stored in localStorage only."):console.warn("Firestore save user profile fallback active:",t)})}function ie(n,e="info"){document.querySelectorAll(".yathra-toast").forEach(s=>s.remove());const r=document.createElement("div");r.className=`yathra-toast ${e}`,r.textContent=n,(document.querySelector(".iphone-chassis")||document.body).appendChild(r),setTimeout(()=>{r.style.animation="toastFadeOut 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards",setTimeout(()=>r.remove(),300)},3200)}function rv(n){if(!n)return{score:0,level:0,label:"Too Short"};let e=0;n.length>=8&&(e+=20),n.length>=10&&(e+=20),/[a-z]/.test(n)&&/[A-Z]/.test(n)&&(e+=20),/\d/.test(n)&&(e+=20),/[^a-zA-Z0-9]/.test(n)&&(e+=20);let t=0,r="Too Short";return e>=80?(t=4,r="Strong"):e>=60?(t=3,r="Good"):e>=40?(t=2,r="Fair"):e>0&&(t=1,r="Weak"),{score:e,level:t,label:r}}function ha(n,e){switch(n){case"auth/user-not-found":return"No account found with this email address.";case"auth/wrong-password":return"Incorrect password. Please try again.";case"auth/invalid-credential":return"Invalid email or password. Please verify credentials.";case"auth/email-already-in-use":return"An account with this email address already exists.";case"auth/weak-password":return"Password is too weak. Please use at least 10 characters with numbers & symbols.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/missing-password":return"Please enter your password.";case"auth/popup-closed-by-user":return"Sign in window was closed before completing.";case"auth/popup-blocked":return"Pop-up blocked by browser. Attempting redirect fallback...";case"auth/network-request-failed":return"Network error. Working in offline cached profile mode.";default:return e||"Authentication error occurred. Please try again."}}function Lc(){if(f.pendingAction){const n=f.pendingAction;f.pendingAction=null,zr(),typeof n.callback=="function"&&(ie("Authentication verified! Proceeding with action...","success"),n.callback())}}function Gl(n,e){const t=bf(h2,"users",n.uid);Oy(t).then(r=>{f.user={...Xr},r.exists()?f.user={...f.user,...r.data()}:f.user.role="Explorer",f.user.uid=n.uid,f.currentUser=f.user,f.isGuest=!1,localStorage.setItem("yathra_current_user",JSON.stringify(f.user)),Dn(),ie(e||`Welcome back, ${n.displayName||"Explorer"}!`,"success"),zr(),f.pendingAction?Lc():(f.currentScreen==="landing"||f.currentScreen==="splash"||f.currentScreen==="login"||f.currentScreen==="signup")&&U("dashboard")}).catch(r=>{f.user.uid=n.uid,f.currentUser=f.user,f.isGuest=!1,localStorage.setItem("yathra_current_user",JSON.stringify(f.user)),Dn(),ie("Logged in (offline profile cached).","info"),zr(),f.pendingAction?Lc():(f.currentScreen==="landing"||f.currentScreen==="splash"||f.currentScreen==="login"||f.currentScreen==="signup")&&U("dashboard")})}function iv(){typeof we>"u"||!we||(N7(we).then(n=>{n&&n.user&&(f.isGuest=!1,Gl(n.user,"Google Authentication verified!"))}).catch(n=>{console.warn("Auth redirect result check error:",n)}),l7(we,n=>{n&&n.uid?(f.currentUser={uid:n.uid,email:n.email,displayName:n.displayName||(n.email?n.email.split("@")[0]:"Explorer")},f.user={...Xr,...f.currentUser},f.isGuest=!1):f.currentUser=null}))}function Ai(n,e,t=null,r=null){if(we.currentUser||!f.isGuest&&f.user.uid)e();else{f.pendingAction={type:n,callback:e,siteId:t,payload:r};let i="Sign in or Create an Account to proceed.";n==="VERIFY"&&(i="Sign in required to verify site visits & earn XP on the ledger!"),n==="LEDGER"&&(i="Sign in required to sign heritage petitions & view audit proofs."),n==="REWARD"&&(i="Sign in required to redeem & unlock heritage rewards."),ie(i,"info"),jt("signin")}}async function sv(){try{const n=new rn;n.setCustomParameters({prompt:"select_account"}),ie("Connecting to Google...","info");const e=await k7(we,n);e&&e.user&&(f.isGuest=!1,Gl(e.user,`Welcome, ${e.user.displayName||"Explorer"}!`))}catch(n){console.error("Google Auth Error:",n),n.code==="auth/popup-closed-by-user"?ie("Sign-in cancelled by user.","info"):n.code==="auth/popup-blocked"?ie("Popup was blocked by browser. Please allow popups.","error"):n.code==="auth/unauthorized-domain"?ie("This domain is not authorized in Firebase Console.","error"):ie(n.message||ha(n.code,n.message),"error")}}function yo(n="signin"){const e=n==="signin",t=n==="signup",r=n==="forgot";return`
    <div class="auth-glass-card">
      <div class="auth-header">
        <div class="auth-logo-badge">
          <img src="Element%20Pictures/YathraLanka%20Logo.png" alt="YathraLanka Logo">
        </div>
        <h2 class="auth-title">${r?"Password Recovery":t?"Create Account":"Welcome Back"}</h2>
        <p class="auth-subtitle">${r?"Enter your registered email to receive a reset link":"Play the game. Protect the Past."}</p>
      </div>

      ${r?"":`
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

        ${r?"":`
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
          <span id="auth-btn-text">${r?"Send Reset Link":t?"Create Account":"Sign In"}</span>
          <div class="btn-loading-spinner" id="auth-btn-spinner" style="display: none;"></div>
        </button>

        ${r?`
          <div style="text-align: center; margin-top: 14px;">
            <span class="form-link" id="auth-back-to-signin" style="font-size: 12px; cursor: pointer;">← Back to Sign In</span>
          </div>
        `:""}
      </div>
    </div>
  `}function jt(n="signin",e=null){e&&(f.pendingAction=e),f.authTab=n;const t=document.getElementById("auth-modal-container");t&&(t.innerHTML=`
    <div class="auth-modal-backdrop" id="auth-modal-bg">
      ${yo(n)}
    </div>
  `,t.style.display="block",document.body.classList.add("modal-open"),Wl(!0))}function zr(){const n=document.getElementById("auth-modal-container");n&&(n.style.display="none",n.innerHTML=""),document.body.classList.remove("modal-open")}function At(n={}){const e=n.title||"Unlock Site Details",t=n.message||"Sign in or create an account to explore comprehensive history, view high-res photo archives, and unlock interactive site guides.",r=n.redirectView||"site-detail",i=n.targetId||null;let s=document.getElementById("auth-modal-container");s||(s=document.createElement("div"),s.id="auth-modal-container",document.body.appendChild(s));const a=i?Te.find(g=>g.id===i):null,c=a?a.name:null;f.pendingAction={type:r==="site-detail"?"SITE_DETAIL":"NAVIGATION",siteId:i,redirectView:r,callback:()=>{i&&(f.activeSite=Te.find(g=>g.id===i)),U(r)}},s.innerHTML=`
    <div class="auth-modal-backdrop" id="auth-required-modal-bg">
      <div class="auth-required-card glass-panel">
        <div class="auth-required-icon">🔒</div>
        <h3 class="auth-required-title">${e}</h3>
        ${c?`<div class="auth-required-badge">📍 ${c}</div>`:""}
        <p class="auth-required-message">${t}</p>
        <div class="auth-required-btn-group">
          <button id="auth-req-login-btn" class="btn-primary auth-required-btn-login">
            Sign In / Register
          </button>
          <button id="auth-req-cancel-btn" class="auth-required-btn-cancel">
            Explore Later
          </button>
        </div>
      </div>
    </div>
  `,s.style.display="block",document.body.classList.add("modal-open");const l=document.getElementById("auth-required-modal-bg");l&&l.addEventListener("click",g=>{g.target===l&&nc()});const h=document.getElementById("auth-req-login-btn");h&&h.addEventListener("click",()=>{nc(),jt("signin")});const p=document.getElementById("auth-req-cancel-btn");p&&p.addEventListener("click",()=>{nc()})}function nc(){const n=document.getElementById("auth-modal-container");n&&(n.style.display="none",n.innerHTML=""),document.body.classList.remove("modal-open")}function hs(n){if(!n)return;const e=Te.find(t=>t.id===n);if(e&&(f.activeSite=e),f.isGuest||!f.user||!f.user.uid||!we.currentUser){At({title:"Unlock Site Details",message:"Sign in or create an account to explore comprehensive history, view high-res photo archives, and unlock interactive site guides.",redirectView:"site-detail",targetId:n});return}U("site-detail")}function Js(n,e={}){const t=f.isGuest||!f.user||!f.user.uid||!we.currentUser;switch(n){case"donation":U("donations");break;case"sign-petition":if(t){At({title:"Sign the Petition",message:"Sign in or register to add your verified signature to heritage conservation petitions.",redirectView:"petition",targetId:e.petitionId||"ritigala-forest"});return}U("petition");break;case"join-cleanup":if(t){At({title:"Join Volunteer Cleanup",message:"Please sign in to register for upcoming site preservation and cleanup events.",redirectView:"cleanup",targetId:e.eventId||"site-cleanup"});return}U("cleanup");break;case"create-event":if(t){At({title:"Host a Community Event",message:"You must be signed in to organize and publish new community heritage initiatives.",redirectView:"create-event"});return}U("create-event");break;default:console.warn(`Unhandled impact action: ${n}`)}}function av(n){const e=rv(n),t=document.getElementById("entropy-status-text");t&&(t.textContent=e.label);for(let r=1;r<=4;r++){const i=document.getElementById(`entropy-bar-${r}`);i&&(i.className="entropy-bar",r<=e.level&&i.classList.add("active",`level-${e.level}`))}}function Wl(n=!1){const e='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',t='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',r=(s,a,c)=>{const l=document.getElementById(s);l&&l.addEventListener(a,c)};r("auth-tab-signin","click",()=>{f.authTab="signin",n?jt("signin"):U("login",!1)}),r("auth-tab-signup","click",()=>{f.authTab="signup",n?jt("signup"):U("signup",!1)}),r("auth-trigger-forgot","click",()=>{if(f.authTab="forgot",n)jt("forgot");else{const s=document.getElementById("app-container");s&&(s.innerHTML=yo("forgot"),Wl(!1))}}),r("auth-back-to-signin","click",()=>{f.authTab="signin",n?jt("signin"):U("login",!1)}),document.querySelectorAll(".btn-google-auth, #auth-btn-google, #google-signin-btn, #google-signup-btn").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault(),a.stopPropagation(),sv()})}),r("auth-btn-guest","click",()=>{f.isGuest=!0,ie("Continuing in Guest Explorer Mode.","info"),n&&zr(),(f.currentScreen==="login"||f.currentScreen==="signup"||f.currentScreen==="splash")&&U("dashboard")}),r("auth-toggle-pass","click",()=>{const s=document.getElementById("auth-input-pass"),a=document.getElementById("auth-toggle-pass");s&&a&&(s.type==="password"?(s.type="text",a.innerHTML=t):(s.type="password",a.innerHTML=e))});const i=document.getElementById("auth-input-pass");if(i&&i.addEventListener("input",s=>{av(s.target.value)}),n){const s=document.getElementById("auth-modal-bg");s&&s.addEventListener("click",a=>{a.target===s&&zr()})}r("auth-submit-btn","click",()=>{const s=f.authTab||"signin",a=document.getElementById("auth-input-email"),c=document.getElementById("auth-input-pass"),l=document.getElementById("auth-input-name"),h=document.getElementById("auth-check-terms"),p=document.getElementById("auth-submit-btn"),g=document.getElementById("auth-btn-spinner"),b=a?a.value.trim():"",C=c?c.value:"",R=l?l.value.trim():"";if(s==="forgot"){if(!b){ie("Please enter your registered email address.","error");return}p&&(p.disabled=!0),g&&(g.style.display="block"),n7(we,b).then(()=>{ie("Password reset email sent! Check your inbox.","success"),n?jt("signin"):U("login")}).catch(M=>{ie(ha(M.code,M.message),"error")}).finally(()=>{p&&(p.disabled=!1),g&&(g.style.display="none")});return}if(s==="signin"){if(!b||!C){ie("Please fill in both email and password.","error");return}p&&(p.disabled=!0),g&&(g.style.display="block"),i7(we,b,C).then(M=>{Gl(M.user,`Welcome back, ${M.user.displayName||"Explorer"}!`)}).catch(M=>{ie(ha(M.code,M.message),"error")}).finally(()=>{p&&(p.disabled=!1),g&&(g.style.display="none")});return}if(s==="signup"){if(!R||!b||!C){ie("Please fill in all required fields.","error");return}if(C.length<10){ie("Security requirement: Password must be at least 10 characters long.","error");return}if(h&&!h.checked){ie("You must agree to the Terms & Privacy Policy.","error");return}p&&(p.disabled=!0),g&&(g.style.display="block"),r7(we,b,C).then(M=>(f.user={...Xr},a7(M.user,{displayName:R}).catch(console.error),Dn().then(()=>{ie("Account created successfully!","success"),zr(),f.pendingAction?Lc():U("permissions")}))).catch(M=>{ie(ha(M.code,M.message),"error")}).finally(()=>{p&&(p.disabled=!1),g&&(g.style.display="none")})}})}function ov(){const n=document.getElementById("location-permission-modal");n&&n.remove();const e=document.createElement("div");e.id="location-permission-modal",e.style.cssText=`
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
  `,(document.querySelector(".iphone-chassis")||document.body).appendChild(e),document.getElementById("location-allow-btn").addEventListener("click",async()=>{e.remove();try{(await za.requestPermissions()).location==="granted"?(Nn=!1,await Lr()):(Nn=!0,await Lr())}catch(r){Nn=!0,console.error("Error requesting geolocation capability configurations:",r),await Lr()}}),document.getElementById("location-cancel-btn").addEventListener("click",()=>{e.remove(),Nn=!0,Lr()})}let Lt=null,Ne=null,Nn=!1;function Kl(n,e="google"){const t=Te.filter(r=>r.latitude&&r.longitude);e==="leaflet"&&typeof L<"u"?t.forEach(r=>{const s=`
        <div style="
          width: 22px;
          height: 22px;
          background: ${r.category==="Hidden Gems"?"#EBB34D":"#0C6C7A"};
          border: 2px solid #ffffff;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.35);
          cursor: pointer;
        "></div>
      `,a=L.divIcon({className:"custom-leaflet-marker",html:s,iconSize:[22,22],iconAnchor:[11,11]});L.marker([r.latitude,r.longitude],{icon:a}).addTo(n).on("click",()=>{$a(r);const l=document.getElementById("map-popup-card");l&&l.style.setProperty("display","block","important")})}):e==="google"&&typeof google<"u"&&google.maps&&t.forEach(r=>{new google.maps.Marker({position:{lat:r.latitude,lng:r.longitude},map:n,title:r.name}).addListener("click",()=>{$a(r);const s=document.getElementById("map-popup-card");s&&s.style.setProperty("display","block","important")})})}function qi(n="map-container",e=[7.8731,80.7718]){const t=document.getElementById(n)||document.getElementById("yathra-main-map")||document.getElementById("map-view");if(!t)return;t.innerHTML="";const r=t.id||n;if(typeof L<"u"){t._leaflet_id&&(t._leaflet_id=null);const i=L.map(r,{zoomControl:!1,dragging:!0,tap:!0,touchZoom:!0,scrollWheelZoom:!0}).setView(e,8);L.control.zoom({position:"bottomright"}).addTo(i),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(i),Kl(i,"leaflet")}else t.innerHTML=`
      <div class="map-placeholder-box">
        <p>🗺️ Interactive Map Mode</p>
        <button class="btn-primary" onclick="window.open('https://www.google.com/maps', '_blank')">Open in External Maps</button>
      </div>
    `}function Oc(n="map-container",e=[7.8731,80.7718]){const t=document.getElementById(n)||document.getElementById("yathra-main-map");if(t){if(window.gm_authFailure=function(){console.warn("Google Maps API auth failure. Falling back to OpenStreetMap / Leaflet..."),qi(n,e)},typeof google>"u"||!google.maps||!google.maps.Map){qi(n,e);return}try{const r=new google.maps.Map(t,{center:{lat:e[0],lng:e[1]},zoom:8,disableDefaultUI:!1,zoomControl:!0,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_BOTTOM}});Kl(r,"google")}catch(r){console.error("Failed to render Google Map:",r),qi(n,e)}}}window.gm_authFailure=function(){console.warn("Google Maps API auth failure. Falling back to OpenStreetMap / Leaflet..."),qi("yathra-main-map",[7.8731,80.7718])};window.initMap=Oc;window.renderFallbackLeafletMap=qi;window.renderMapMarkers=Kl;async function Lr(){const n=document.getElementById("yathra-main-map");if(!n)return;const e=Ne?[Ne.latitude,Ne.longitude]:[7.8731,80.7718];try{if((await za.checkPermissions()).location!=="granted"){if(!Nn){ov();return}}else{const c=await za.getCurrentPosition();Ne={latitude:c.coords.latitude,longitude:c.coords.longitude},Nn=!1}}catch(a){Nn=!0,console.error("Error parsing native hardware location states:",a)}const t=document.getElementById("map-loader");t&&t.style.setProperty("display","flex","important");const r=()=>{const a=document.getElementById("map-loader");a&&a.style.setProperty("display","none","important")},i=document.getElementById("map-view");i&&(i.style.display="block"),document.documentElement.classList.add("map-active"),document.body.classList.add("map-active"),["html","body","#app",".app-root","#app-container",".app-viewport",".iphone-chassis",".view-wrapper",".screen","main"].forEach(a=>{const c=document.querySelector(a);if(a==="html"||a==="body"){const l=a==="html"?document.documentElement:document.body;l.style.setProperty("background","transparent","important"),l.style.setProperty("background-color","transparent","important")}else c&&(c.style.setProperty("background","none","important"),c.style.setProperty("background-color","transparent","important"))});try{if(typeof Br<"u"&&Br.create&&window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform()){if(Lt){try{await Lt.destroy()}catch{}Lt=null}Lt=await Br.create({id:"yathra-map-instance",element:n,apiKey:"AIzaSyAh9WMzSPpYwNj-ReY231j_ONHa_73SnUY",config:{center:{lat:e[0],lng:e[1]},zoom:8}}),typeof Lt.setOnTilesLoadedListener=="function"&&Lt.setOnTilesLoadedListener(()=>r()),setTimeout(r,1e3);const a=Te.filter(p=>p.latitude&&p.longitude),c=a.map(p=>({coordinate:{lat:p.latitude,lng:p.longitude},iconUrl:p.category==="Hidden Gems"?"assets/pin_gold.png":"assets/pin_teal.png",iconSize:{width:32,height:42}})),l=await Lt.addMarkers(c),h=Array.isArray(l)?l:l.ids||[];a.forEach((p,g)=>{p.nativeMarkerId=h[g]}),Lt.setOnMarkerClickListener(async p=>{const g=Te.find(b=>b.nativeMarkerId===p.markerId);if(g){$a(g);const b=document.getElementById("map-popup-card");b&&b.style.setProperty("display","block","important")}})}else Oc("yathra-main-map",e),setTimeout(r,400)}catch(a){console.warn("Native GoogleMap creation failed, falling back to initMap/Leaflet:",a),Oc("yathra-main-map",e),setTimeout(r,400)}}window.initializeYathraMap=Lr;function cv(n,e){if(n==="site-details"||n==="site-detail"){const t=e&&e.id;t&&hs(t)}}window.Maps=cv;function Ot(){const n=document.getElementById("app-container");if(!n)return;let e="";switch(f.currentScreen){case"landing":case"splash":e=lv();break;case"login":e=uv();break;case"signup":e=hv();break;case"permissions":e=dv();break;case"choose-role":e=pv();break;case"calibrate-compass":e=fv();break;case"how-scoring-works":e=gv();break;case"dashboard":e=mv();break;case"directory":e=yv();break;case"heritage-trail":e=renderTrailList("Heritage Trail");break;case"hidden-gems":e=renderTrailList("Hidden Gems");break;case"map":e=vv();break;case"site-detail":e=_v();break;case"dwell-time":e=wv();break;case"camera":e=Ev();break;case"camera-success":e=bv();break;case"camera-reject":e=Iv();break;case"guidelines":e=Av();break;case"offline-sync":e=xv();break;case"quiz":e=Sv();break;case"quiz-cooldown":e=kv();break;case"quests":e=Cv();break;case"quest-social":e=Pv();break;case"quest-food":e=Rv();break;case"quest-wandering":e=Lv();break;case"quest-wildlife":e=Ov();break;case"quest-warrior":e=Dv();break;case"activism":e=Nv();break;case"petition":e=Vv();break;case"donations":e=Mv();break;case"cleanup":e=Fv();break;case"create-event":e=Uv();break;case"rewards":e=Bv();break;case"rewards-list":e=zv();break;case"coupon-redeem":e=$v();break;case"rank":e=qv();break;case"leaderboard":e=jv();break;case"profile":e=Hv();break;case"travel-poster":e=Gv();break;case"settings":e=Wv();break;case"ledger":e=Tv();break;default:e="<div>Screen frame missing</div>"}const t=document.getElementById("map-view");if(f.currentScreen!=="map"&&Lt){const r=Lt;Lt=null,(async()=>{try{await r.destroy(),console.log("Native map instance closed smoothly via memory controller.")}catch(i){console.error("Error executing native interface cleanup execution mapping:",i)}})()}f.currentScreen==="map"?(n.style.display="block",Lr()):(t&&(t.style.display="none"),n.style.display="block",document.documentElement.classList.remove("map-active"),document.body.classList.remove("map-active"),document.documentElement.style.removeProperty("background"),document.documentElement.style.removeProperty("background-color"),document.body.style.setProperty("background","#FDF8E9","important"),document.body.style.setProperty("background-color","#FDF8E9","important"),["#app",".app-root","#app-container",".app-viewport",".iphone-chassis",".view-wrapper",".screen","main"].forEach(i=>{const s=document.querySelector(i);s&&(s.style.removeProperty("background"),s.style.removeProperty("background-color"))})),n.innerHTML=e,Kv()}function lv(){return`
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
  `}function uv(){return f.authTab="signin",`
    <div class="screen auth-screen-container" id="login-view">
      <div style="position: absolute; top: 16px; left: 16px; z-index: 10;">
        <button class="back-button" id="login-back">←</button>
      </div>
      ${yo("signin")}
    </div>
  `}function hv(){return f.authTab="signup",`
    <div class="screen auth-screen-container" id="signup-view">
      <div style="position: absolute; top: 16px; left: 16px; z-index: 10;">
        <button class="back-button" id="signup-back">←</button>
      </div>
      ${yo("signup")}
    </div>
  `}function dv(){const n=f.user.permissions.camera,e=f.user.permissions.notifications,t=n;return`
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
  `}function pv(){const n=f.user.role;return`
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
  `}function fv(){const n=f.user.interests;return`
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
  `}function gv(){return`
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
  `}function v2(){return f.isGuest?`
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
  `:""}function mv(){const n=f.user&&f.user.xp||0;return`
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
        ${v2()}
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
      ${be("home")}
    </div>
  `}function yv(){const n=f.activeDirectoryTab==="Hidden Gems"||f.activeDirectoryTab==="gems";return`
    <div id="directory-view" class="screen directory-view-wrapper">
      <!-- 1. Header is in normal flow -->
      <div class="directory-top-bar">
        <div class="header-bar">
          <button class="back-button" id="directory-back-btn">←</button>
          <h1 class="header-title">Directory</h1>
        </div>
        <div id="directory-guest-banner-wrapper">
          ${v2()}
        </div>
        <div class="search-container">
          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input type="text" id="directory-search-input" class="search-input" placeholder="Search by name of location...">
          </div>
        </div>
        <div class="tabs-wrapper">
          <div class="segmented-control" role="tablist">
            <button class="segmented-tab ${n?"":"active"}" 
                    id="tab-heritage" 
                    role="tab" 
                    aria-selected="${!n}">
              Heritage Trail
            </button>
            <button class="segmented-tab ${n?"active":""}" 
                    id="tab-hidden-gems" 
                    role="tab" 
                    aria-selected="${n}">
              Hidden Gems
            </button>
          </div>
        </div>
      </div>

      <!-- 2. Scrollable Cards Container strictly below the header -->
      <div class="directory-cards-scroller">
        <div class="locations-grid" id="directory-grid-target">
          <!-- Dynamic 2-column cards render here -->
        </div>
      </div>

      <!-- 3. Fixed Bottom Navigation Bar -->
      ${be("home")}
    </div>
  `}function vv(){return`
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
      ${be("home")}
    </div>
  `}function _v(){const n=f.activeSite;if(!n)return"";const e=f.user.dwellTimeCompleted[n.id];return`
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar" style="position: absolute; top: 0; left: 0; z-index: 10; width: 100%; padding-top: env(safe-area-inset-top, 24px) !important; box-sizing: border-box;">
        <button class="back-button" id="site-detail-back-btn" style="background: rgba(255,255,255,0.8); border-radius: 50%; width:32px; height:32px; justify-content:center; padding:0; color:var(--color-charcoal); border:none; cursor:pointer;">←</button>
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
          ${e?"✓ Presence Verified":"Verify My Presence (15 Mins)"}
        </button>
        <div style="display: flex; gap: 14px;">
          <button class="btn-outline" style="flex: 1; font-size: 13px; opacity: ${e?"1":"0.4"}; cursor: ${e?"pointer":"not-allowed"};" id="site-quiz-btn" ${e?"":"disabled"}>Quiz</button>
          <button class="btn-outline" style="flex: 1; font-size: 13px; opacity: ${e?"1":"0.4"}; cursor: ${e?"pointer":"not-allowed"};" id="site-quests-btn" ${e?"":"disabled"}>Side Quests</button>
        </div>
      </div>
      ${be("home")}
    </div>
  `}function wv(){const n=f.activeSite;if(!n)return"";const e=Math.floor(f.dwellTimeLeft/60),t=f.dwellTimeLeft%60,r=`${e<10?"0"+e:e}:${"0"+t}`,s=565.48-f.dwellTimeLeft/900*565.48;return`
    <div class="screen immersion-freeze-mode" style="position: relative;">
      <div class="header-bar">
        <div class="header-title" style="margin-left: 20px;">Immersion Mode: ${n.name}</div>
      </div>
      
      <!-- Translucent Isolation Screen Mask Overlay Layer -->
      <div class="immersion-app-blocker" style="position: absolute; top: 60px; left: 0; width: 100%; bottom: 0; background: rgba(253, 248, 233, 0.45); z-index: 1000; pointer-events: auto; display: block;"></div>

      <!-- Core Display Window (Lifted completely to z-index 2000 so everything remains accessible and unblocked) -->
      <div style="padding: 10px 20px; text-align: center; z-index: 2000; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
        <h2 style="font-size: 22px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 2px;">${n.name}</h2>
        <h3 style="font-size: 18px; font-weight: 800; color: var(--color-charcoal); margin-bottom: 12px;">15 Minute Dwell Time</h3>
        <p style="font-size: 11px; color: var(--color-gray); font-weight: 600; margin-bottom: 16px;">Presence validation progress runtime tracking window active.</p>
        
        <!-- Strict secure wrapper context mapping -->
        <div class="timer-circle-box" style="margin-bottom: 20px;">
          <svg class="timer-svg">
            <circle class="timer-bg-circle" cx="100" cy="100" r="90"></circle>
            <circle class="timer-progress-circle " cx="100" cy="100" r="90" style="stroke-dashoffset: ${s}; stroke: ${f.gpsVerified?"var(--color-teal)":"var(--color-gold)"};"></circle>
          </svg>
          <div class="timer-text-display">${r}</div>
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

        <p style="font-size: 12px; font-weight: 700; text-align: center; color: var(--color-charcoal); margin-bottom: 16px; max-width: 280px; line-height: 1.4;">
          Capture additional image perspectives below to support verification data.
        </p>
        
        <!-- Camera action trigger now fully exposed and click-ready -->
        <button class="btn-outline" style="width: 100%; max-width: 300px; height: 44px; font-size: 13px; margin-bottom: 14px; display: flex; align-items: center; justify-content: center; gap: 6px;" id="dwell-extra-photo-btn">
          📸 Take Additional Verification Photo
        </button>

        <button class="btn-primary" style="width: 100%; max-width: 300px; height: 44px; background: #EAECEF; color: var(--color-gray);" id="dwell-continue-btn" disabled>
          Waiting...
        </button>
        
        <div style="margin-top: 14px; display: block;">
          <span id="dwell-abandon-link" style="font-size: 12px; color: var(--color-red-reject); font-weight: 800; cursor: pointer; text-decoration: underline;">Abandon Session</span>
        </div>
      </div>
    </div>
  `}function Ev(){const n=f.activeSite||Te[0],e=Ne&&Ne.latitude?Ne.latitude:7.957,t=Ne&&Ne.longitude?Ne.longitude:80.7603,r=Hl(e,t,n.latitude,n.longitude);return`
    <div class="screen" style="padding-bottom: 0; background: #000; color: white; position: relative; overflow: hidden;">
      <div class="hud-viewfinder-container">
        <!-- Top Telemetry Header -->
        <div class="hud-top-telemetry">
          <div style="display: flex; align-items: center; gap: 8px;">
            <button class="back-button" id="camera-back" style="background: rgba(255,255,255,0.15); border-radius: 50%; width:32px; height:32px; color:#FFF; border:none; cursor:pointer;">✕</button>
            <div class="hud-telemetry-item">
              <span class="hud-telemetry-label">TARGET CHECKPOINT</span>
              <span class="hud-telemetry-val" style="color: #EBB34D;">${n.name}</span>
            </div>
          </div>
          
          <div style="display: flex; gap: 10px; align-items: center;">
            <div class="hud-telemetry-item" style="text-align: right;">
              <span class="hud-telemetry-label">GPS DELTA</span>
              <span class="hud-telemetry-val">${r}m</span>
            </div>
            
            <button id="toggle-stage-drawer-btn" style="background: #0C6C7A; border: 1px solid #EBB34D; color: #FFF; padding: 6px 10px; border-radius: 8px; font-size: 10px; font-weight: 800; cursor: pointer;">
              ⚙️ STAGE DEMO
            </button>
          </div>
        </div>

        <!-- Center Target Viewfinder Reticle & Live Stream Zone -->
        <div class="presence-camera-container" id="presence-camera-zone" style="position: absolute; top: 70px; left: 0; right: 0; bottom: 90px; width: 100%; height: auto; margin: 0; border-radius: 0;">
          <video id="live-camera-feed" autoplay playsinline muted class="live-camera-video"></video>
          <canvas id="camera-capture-canvas" style="display: none;"></canvas>
          
          <div id="camera-permission-prompt" class="camera-prompt-box" style="text-align: center; color: white; padding: 20px; z-index: 5;">
            <div class="camera-icon-large" style="font-size: 40px; margin-bottom: 10px;">📷</div>
            <h3 style="font-size: 16px; font-weight: 800; margin-bottom: 6px;">Camera Permission Required</h3>
            <p style="font-size: 12px; color: rgba(255,255,255,0.7); max-width: 280px; margin: 0 auto 16px auto; line-height: 1.4;">Live photo verification is required. File uploads and gallery selections are strictly disabled.</p>
            <button class="btn-primary" id="btn-request-camera" style="height: 38px; font-size: 13px; padding: 0 20px;">Open Live Camera</button>
          </div>

          <div class="hud-target-reticle-box" style="pointer-events: none;">
            <div class="hud-corner hud-corner-tl"></div>
            <div class="hud-corner hud-corner-tr"></div>
            <div class="hud-corner hud-corner-bl"></div>
            <div class="hud-corner hud-corner-br"></div>
            <div class="hud-scanner-laser"></div>
            <div class="hud-center-crosshair"></div>
          </div>
        </div>

        <!-- Bottom HUD Control & Shutter Area -->
        <div style="position: absolute; bottom: 16px; left: 0; width: 100%; pointer-events: auto; text-align: center; z-index: 10;">
          <div class="hud-status-banner hud-status-PASSED" id="hud-live-status-banner">
            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#FFF;"></span>
            <span>HUD ENGINE ACTIVE (94% VISION CONFIDENCE)</span>
          </div>

          <div id="camera-controls-bar" class="camera-controls-bar" style="display: flex; justify-content: center; align-items: center; gap: 20px; margin-top: 10px;">
            <button class="btn-shutter" id="btn-capture-photo" title="Take Live Photo">
              <span class="shutter-inner-circle"></span>
            </button>
            <button id="view-ledger-shortcut-btn" style="position: absolute; right: 20px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: #FFF; padding: 8px 12px; border-radius: 12px; font-size: 11px; font-weight: 800; cursor: pointer;">
              🛡️ Ledger
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function bv(){const n=f.activeSite||Te[0],e=f.lastVerificationResult||{visionScore:96,block:{signature:"0x4a8f9c1d2e3f4b5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f"}},t=e.block?e.block.signature:"0x4a8f9c1d2e3f4b5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f";return`
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
  `}function Iv(){const n=f.lastVerificationResult||{status:"OUT_OF_BOUNDS",visionScore:42,distanceDeltaMeters:2640},e=n.status==="SPOOF_SUSPECTED"?"Security Anomaly Intercepted":n.status==="OUT_OF_BOUNDS"?"Geofence Out of Bounds":"Visual Inspection Failed";return`
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
  `}function Tv(){const n=f.eventLedger||[],e=n.length,t=n.filter(c=>c.status==="PASSED").length,r=e>0?Math.round(t/e*100):100,i=n.filter(c=>c.status==="SPOOF_SUSPECTED").length,s=f.ledgerFilter||"ALL",a=n.filter(c=>s==="ALL"?!0:c.status===s);return`
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
            <div class="ledger-stat-num">${r}%</div>
            <div class="ledger-stat-lbl">Pass Rate</div>
          </div>
          <div class="ledger-stat-card">
            <div class="ledger-stat-num" style="color: var(--color-red-reject);">${i}</div>
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
      ${be("home")}
    </div>
  `}function Av(){return`
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
  `}function xv(){const n=f.offlineSyncQueue||[];let e="";return n.length===0?e='<div style="text-align: center; padding: 24px; color: var(--color-gray); font-size: 13px; font-weight: 700;">🟢 All activities synced and verified!</div>':e=n.map(t=>{let r="var(--color-gray)",i="Pending local-first sync packet",s="var(--color-gray)",a="";return t.status==="Verifying..."?(i="🤖 Evaluating landmark patterns...",r="var(--color-teal)"):t.status==="Success"&&(i="✓ Verified & Logged Successfully",r="var(--color-green-success)",s="var(--color-teal)",a="✓ "),`
        <div class="sync-item-card" style="opacity: ${t.status==="Success"?"0.75":"1"};">
          <div>
            <h4 style="font-size: 12px; font-weight: 800;">${t.siteName} Local Record</h4>
            <p style="font-size: 10px; color: ${r}; font-weight: 700;">${i}</p>
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
      ${be("home")}
    </div>
  `}function Sv(){const n=f.activeSite;if(!n)return"";const e=n.quizzes[f.currentQuizIndex],t=f.currentQuizIndex+1,r=n.quizzes.length;return`
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
          <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: var(--color-gray);">⏱️ <span id="quiz-timer">15s</span></div>
          <button class="btn-primary" style="width: 100px; height: 36px; font-size: 12px;" id="quiz-end-btn">End Quiz</button>
        </div>
      </div>
    </div>
  `}function kv(){const n=Math.floor(f.cooldownTimeLeft/60),e=f.cooldownTimeLeft%60,t=`${n<10?"0"+n:n}:${e<10?"0"+e:e}`;return`
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
      ${be("home")}
    </div>
  `}function Cv(){return`
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
        ${J2.map(n=>`
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
      ${be("home")}
    </div>
  `}function Pv(){return`
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
      ${be("home")}
    </div>
  `}function Rv(){return`
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
      ${be("home")}
    </div>
  `}function Lv(){return`
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
      ${be("home")}
    </div>
  `}function Ov(){return`
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
      ${be("home")}
    </div>
  `}function Dv(){return`
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
      ${be("activism")}
    </div>
  `}function Nv(){const n=f.isGuest||!f.user||!f.user.uid||!we.currentUser;return`
    <div class="screen" style="padding-bottom: 80px;">
      <div style="padding: 20px 20px 6px 20px;">
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
      ${be("activism")}
    </div>
  `}function Vv(){const n=f.petitionSigned,e=f.petitionSignatures,t=e/1e4*100;return`
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
      ${be("activism")}
    </div>
  `}function Mv(){const n=f.donationAmount;return`
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
        <p style="font-size: 10px; color: var(--color-gray); text-align: center; font-weight: 700; margin-bottom: 20px;">earn up to 15xp</p>
        <button class="btn-primary" id="donations-submit">Donate Now</button>
        <p style="font-size: 9px; color: var(--color-gray); text-align: center; margin-top: 14px; font-weight: 700;">secure payment powered by Payhere</p>
      </div>
      ${be("activism")}
    </div>
  `}function Fv(){const n=f.user.joinedEvents.includes("site-cleanup");return`
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
      ${be("activism")}
    </div>
  `}function Uv(){return`
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
      ${be("activism")}
    </div>
  `}function Bv(){return`
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
      ${be("rewards")}
    </div>
  `}function zv(){return`
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
      ${be("rewards")}
    </div>
  `}function $v(){return`
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
      ${be("rewards")}
    </div>
  `}function qv(){const n=[{name:"Grass Toucher",range:"0 - 99 pts",threshold:0},{name:"Wanderer",range:"100 - 249 pts",threshold:100},{name:"Tuk Tuk Trailer",range:"250 - 499 pts",threshold:250},{name:"Magahoyanna",range:"500 - 999 pts",threshold:500},{name:"Island Explorer",range:"1,000 - 2,000 pts",threshold:1e3},{name:"Lanka Legend",range:"2,000 - 5,000 pts",threshold:2e3}],e=f.user.xp,t=f.user.rank;let r=n[0];for(let s=0;s<n.length;s++){if(e<n[s].threshold){r=n[s];break}s===n.length-1&&(r={name:"Max Level",threshold:5e3})}const i=r.threshold-e;return`
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
        <p style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">${e} / ${r.threshold} pts</p>
        <p style="font-size: 10px; color: #a9cbd0; margin-bottom: 20px;">
          ${i>0?`Only ${i} pts to next rank!`:"Max rank reached!"}
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
      ${be("rewards")}
    </div>
  `}function jv(){let n=[...X2];if(f.user.xp>0){const e={name:(we.currentUser&&we.currentUser.displayName||"You")+" (Eco Explorer)",points:f.user.xp,role:f.user.role,rank:f.user.rank,isUser:!0};n.push(e)}return n.sort((e,t)=>t.points-e.points),`
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
      ${be("rewards")}
    </div>
  `}function Hv(){const n=f.user.xp>0?f.user.rank:"No Rank";return`
    <div class="screen">
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
        <div class="selection-card" style="margin: 10px 16px; padding: 18px; background: linear-gradient(135deg, rgba(46,125,138,0.1) 0%, rgba(235,179,77,0.15) 100%); border: 1.5px solid var(--color-gold); border-radius: 18px; display: flex; flex-direction: column; gap: 10px; text-align: center; box-shadow: var(--shadow-premium);">
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
            <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">${we.currentUser&&we.currentUser.displayName||"You"}</h3>
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
      ${be("profile")}
    </div>
  `}function Gv(){return`
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
  `}function Wv(){return`
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
  `}function be(n){return`
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
  `}function Kv(){const n=(O,$,ae)=>{document.querySelectorAll("#"+O).forEach(fe=>fe.addEventListener($,ae))};n("btn-login","click",()=>U("login")),n("go-signin","click",()=>U("login")),n("btn-signup","click",()=>U("signup")),n("btn-register","click",()=>U("signup")),n("go-signup","click",()=>U("signup")),n("btn-guest-explore","click",()=>{f.isGuest=!0,f.currentUser=null,ie("Continuing in Guest Explorer Mode.","info"),U("dashboard")}),n("go-guest","click",()=>{f.isGuest=!0,f.currentUser=null,ie("Continuing in Guest Explorer Mode.","info"),U("dashboard")}),n("header-guest-login-btn","click",()=>{jt("signin")}),n("profile-guest-signin-btn","click",()=>{jt("signin")}),n("login-back","click",()=>U("splash")),n("signup-back","click",()=>U("splash")),(f.currentScreen==="login"||f.currentScreen==="signup")&&Wl(!1);const e=()=>{const O=f.user.permissions.camera,$=document.getElementById("permissions-continue-btn");$&&($.disabled=!O,$.style.opacity=O?"1":"0.5")};n("perm-camera-btn","click",()=>{f.user.permissions.camera=!f.user.permissions.camera;const O=document.getElementById("perm-camera-btn");if(O){O.classList.toggle("selected",f.user.permissions.camera);const $=O.querySelector(".check-circle");$&&($.classList.toggle("checked",f.user.permissions.camera),$.innerHTML=f.user.permissions.camera?"✓":"")}e()}),n("perm-notif-btn","click",()=>{f.user.permissions.notifications=!f.user.permissions.notifications;const O=document.getElementById("perm-notif-btn");if(O){O.classList.toggle("selected",f.user.permissions.notifications);const $=O.querySelector(".check-circle");$&&($.classList.toggle("checked",f.user.permissions.notifications),$.innerHTML=f.user.permissions.notifications?"✓":"")}e()}),n("permissions-continue-btn","click",()=>{f.user.permissions.camera&&(Dn(),U("choose-role"))}),n("role-back","click",()=>Ie());const t=document.querySelectorAll("[data-role]");t.forEach(O=>{O.addEventListener("click",()=>{t.forEach(ae=>ae.classList.remove("selected")),O.classList.add("selected"),f.user.role=O.getAttribute("data-role");const $=document.getElementById("role-continue");$&&($.disabled=!1,$.style.opacity="1")})}),n("role-continue","click",()=>{f.user.role&&(Dn(),U("dashboard"))}),n("compass-back-btn","click",()=>U("choose-role")),document.querySelectorAll("[data-cat]").forEach(O=>{O.addEventListener("click",()=>{const $=O.getAttribute("data-cat");f.user.interests.includes($)?(f.user.interests=f.user.interests.filter(ge=>ge!==$),O.classList.remove("selected")):(f.user.interests.push($),O.classList.add("selected"));const ae=document.getElementById("compass-continue");if(ae){const ge=f.user.interests.length>0;ae.disabled=!ge,ae.style.opacity=ge?"1":"0.5"}})}),n("compass-continue","click",()=>{f.user.interests.length>0&&(Dn(),U("how-scoring-works"))}),n("scoring-continue","click",()=>{Dn(),U("dashboard")}),n("dash-map-card","click",()=>{U("map")}),n("dash-search-card","click",()=>U("directory")),n("dash-view-directory","click",O=>{O.stopPropagation(),U("directory")}),n("dashboard-notifications-btn","click",()=>w2()),n("dash-tag-heritage","click",O=>{O.stopPropagation(),f.activeDirectoryTab="Heritage Trail",U("directory")}),n("dash-tag-gems","click",O=>{O.stopPropagation(),f.activeDirectoryTab="Hidden Gems",U("directory")}),n("directory-back","click",()=>U("dashboard")),n("directory-back-btn","click",()=>U("dashboard"));const i=O=>{O&&(O.stopPropagation(),O.preventDefault()),f.siteReferrer?U(f.siteReferrer,!1):f.navStack.length>0?Ie():U("directory")};n("site-detail-back-btn","click",i),n("site-back","click",i);const s=()=>{f.activeDirectoryTab="Heritage Trail";const O=document.getElementById("tab-trail")||document.getElementById("tab-heritage"),$=document.getElementById("tab-gems")||document.getElementById("tab-hidden-gems");O&&(O.classList.add("active"),O.setAttribute("aria-selected","true")),$&&($.classList.remove("active"),$.setAttribute("aria-selected","false")),ea("Heritage Trail")},a=()=>{f.activeDirectoryTab="Hidden Gems";const O=document.getElementById("tab-trail")||document.getElementById("tab-heritage"),$=document.getElementById("tab-gems")||document.getElementById("tab-hidden-gems");O&&(O.classList.remove("active"),O.setAttribute("aria-selected","false")),$&&($.classList.add("active"),$.setAttribute("aria-selected","true")),ea("Hidden Gems")};n("tab-trail","click",s),n("tab-heritage","click",s),n("tab-gems","click",a),n("tab-hidden-gems","click",a);const c=document.getElementById("directory-search")||document.getElementById("directory-search-input");c&&c.addEventListener("input",()=>{const O=f.activeDirectoryTab;ea(O,c.value)}),f.currentScreen==="directory"&&ea(f.activeDirectoryTab),n("trail-list-back","click",()=>U("directory"));const l=document.getElementById("list-search-input");l&&l.addEventListener("input",()=>{const O=document.querySelector(".header-title").textContent;ic(O,l.value)}),f.currentScreen==="heritage-trail"?ic("Heritage Trail"):f.currentScreen==="hidden-gems"&&ic("Hidden Gems");const h=O=>{O&&(O.stopPropagation(),O.preventDefault()),document.body.classList.remove("map-active"),document.documentElement.classList.remove("map-active");const $=document.getElementById("map-view");$&&($.style.display="none");const ae=document.getElementById("map-popup-card");ae&&ae.remove(),U("dashboard")};n("map-back","click",h);const p=document.querySelector("#map-back-container button")||document.getElementById("map-back-container");p&&p.addEventListener("click",h),document.querySelectorAll(".map-pin").forEach(O=>{O.addEventListener("click",$=>{$.stopPropagation();const ae=Te.find(ge=>ge.id===O.getAttribute("data-site-id"));ae&&$a(ae)})}),n("site-visit-now","click",()=>{Ai("VERIFY",()=>{f.hasInitialPhotoCaptured=!1,U("camera")})}),n("site-quiz-btn","click",()=>{f.user.dwellTimeCompleted[f.activeSite.id]&&(f.cooldownActive?U("quiz-cooldown"):(f.currentQuizIndex=0,f.quizCorrectAnswers=0,f.quizAnswers=[],U("quiz"),Dc()))}),n("site-quests-btn","click",()=>{f.user.dwellTimeCompleted[f.activeSite.id]&&U("quests")}),n("dwell-extra-photo-btn","click",async()=>{try{const O=await za.getCurrentPosition(),$=O.coords.latitude,ae=O.coords.longitude;if(Yv($,ae,f.activeSite.latitude,f.activeSite.longitude)<=m2){const fe=await Jy.getPhoto({quality:90,allowEditing:!1,resultType:Rc.DataUrl,source:cr.Camera});f.dwellImages.push(fe.dataUrl);const E=localStorage.getItem("yathra_dwell_lock");if(E){const y=JSON.parse(E);y.dwellImages=f.dwellImages,localStorage.setItem("yathra_dwell_lock",JSON.stringify(y))}ie("Additional verification evidence appended successfully."),Ot()}else ie("Security Check Failed: Device coordinates are past the site boundary threshold parameters.")}catch(O){console.error("Dwell camera capture execution mapping error:",O),ie("Evidence capture cancelled or aborted by user.")}}),n("dwell-abandon-link","click",()=>{confirm("Are you sure you want to abandon this preservation session? Progress will be paused.")&&confirm("Confirm final cancellation: Unverified progress data parameters will be stored locally inside your history profile.")&&(clearInterval(f.dwellTimer),clearInterval(nv),f.dwellActive=!1,localStorage.removeItem("yathra_dwell_lock"),ie("Immersion session abandoned. Evidence images saved to profile repository logs."),U("site-detail",!1))}),n("dwell-continue-btn","click",()=>{Ai("VERIFY",()=>{})}),n("camera-back","click",()=>Ie()),n("ledger-back","click",()=>Ie()),n("success-view-ledger","click",()=>U("ledger")),n("view-ledger-shortcut-btn","click",()=>U("ledger"));const b=O=>{const $=f.activeSite||Te[0],ae=Ne&&Ne.latitude?Ne.latitude:$.latitude,ge=Ne&&Ne.longitude?Ne.longitude:$.longitude;ev($,ae,ge,O).status==="PASSED"?(f.hasInitialPhotoCaptured=!0,f.gpsVerified=!0,f.user.dwellTimeCompleted[$.id]=!0,f.user.verifiedPhotos[$.id]=!0,f.user.sitesVisited=Object.keys(f.user.dwellTimeCompleted).length,mt(60,`Presence verified at ${$.name}!`),U("camera-success")):U("camera-reject")};n("btn-request-camera","click",()=>{Nc()}),n("btn-capture-photo","click",()=>{Vc()}),n("camera-shutter-click","click",()=>{Vc()}),n("camera-back","click",()=>{ds(),Ie()}),f.currentScreen==="camera"&&Nc();const C=()=>{f.stageDrawerOpen=!f.stageDrawerOpen,Ot()};n("toggle-stage-drawer-btn","click",C),n("close-stage-drawer-btn","click",C),n("reject-stage-demo","click",C),window.onkeydown=O=>{O.ctrlKey&&O.shiftKey&&(O.key==="D"||O.key==="d")&&(O.preventDefault(),C())},n("demo-lock-sigiriya","click",()=>{f.activeSite=Te.find(O=>O.id==="sigiriya")||Te[0],f.demoOverride={active:!0,mockLat:7.957,mockLng:80.7603,mockVisionScore:96,forcedStatus:"PASSED"},ie("Demo Override: Locked to Sigiriya Rock (0.01km PASSED)"),U("camera")}),n("demo-lock-mihintale","click",()=>{f.activeSite=Te.find(O=>O.id==="mihintale")||Te[0],f.demoOverride={active:!0,mockLat:8.3508,mockLng:80.5186,mockVisionScore:92,forcedStatus:"PASSED"},ie("Demo Override: Locked to Mihintale (0.02km PASSED)"),U("camera")}),n("demo-lock-galle-far","click",()=>{f.activeSite=Te.find(O=>O.id==="galle_fort")||Te[0],f.demoOverride={active:!0,mockLat:6.0535,mockLng:80.221,mockVisionScore:88,forcedStatus:"OUT_OF_BOUNDS"},ie("Demo Override: Galle Fort (2.6km OUT_OF_BOUNDS)"),U("camera")}),n("demo-trigger-spoof","click",()=>{f.activeSite=Te[0],f.demoOverride={active:!0,mockLat:1.29027,mockLng:103.85195,mockVisionScore:35,forcedStatus:"SPOOF_SUSPECTED"},ie("Demo Override: Spoof Velocity Anomaly Triggered!"),U("camera")}),n("demo-exec-pass","click",()=>{const O=f.activeSite||Te[0];f.demoOverride={active:!0,mockLat:O.latitude,mockLng:O.longitude,mockVisionScore:96,forcedStatus:"PASSED"},b(O.image)}),n("demo-exec-fail-vision","click",()=>{const O=f.activeSite||Te[0];f.demoOverride={active:!0,mockLat:O.latitude,mockLng:O.longitude,mockVisionScore:42,forcedStatus:"FAILED_VISION"},b(O.image)}),n("demo-exec-out-bounds","click",()=>{const O=f.activeSite||Te[0];f.demoOverride={active:!0,mockLat:O.latitude+.05,mockLng:O.longitude+.05,mockVisionScore:89,forcedStatus:"OUT_OF_BOUNDS"},b(O.image)}),n("demo-open-ledger","click",()=>U("ledger")),document.querySelectorAll("[data-ledger-filter]").forEach(O=>{O.addEventListener("click",()=>{f.ledgerFilter=O.getAttribute("data-ledger-filter"),Ot()})}),n("camera-success-continue","click",()=>{U("site-detail")}),n("reject-close","click",()=>U("site-detail")),n("reject-guidelines","click",()=>U("guidelines")),n("reject-retry","click",()=>U("camera")),n("guidelines-back","click",()=>Ie()),n("guidelines-continue","click",()=>U("camera")),n("sync-back","click",()=>Ie()),n("quiz-back","click",()=>Ie()),n("quiz-end-btn","click",()=>U("site-detail"));const R=document.querySelectorAll("#quiz-options-container .quiz-option-btn");R.forEach(O=>{O.addEventListener("click",()=>{const $=parseInt(O.getAttribute("data-index")),ge=f.activeSite.quizzes[f.currentQuizIndex].correctIndex;R.forEach(fe=>fe.disabled=!0),f.quizAnswers.push($),$===ge?(O.classList.add("correct"),O.querySelector(".quiz-circle-ico").style.background="var(--color-green-success)",f.quizCorrectAnswers++):(O.classList.add("incorrect"),O.querySelector(".quiz-circle-ico").style.background="var(--color-red-reject)",R[ge].classList.add("correct"),R[ge].querySelector(".quiz-circle-ico").style.background="var(--color-green-success)"),setTimeout(()=>{if(f.currentQuizIndex+1<f.activeSite.quizzes.length)f.currentQuizIndex++,Ot(),Dc();else{const fe=f.quizCorrectAnswers,E=fe*10;f.user.completedQuizzes[f.activeSite.id]=!0,f.user.quizzesPassed=Object.keys(f.user.completedQuizzes).length,mt(E,`Quiz Complete! You got ${fe}/5 correct.`),f.cooldownTimeLeft=300,U("quiz-cooldown"),_2()}},1500)})}),n("cooldown-back","click",()=>U("site-detail")),n("quests-back","click",()=>Ie());const M=(O,$)=>{const ae=document.getElementById(`quest-item-${O}`);ae&&ae.addEventListener("click",()=>U($))};M("social","quest-social"),M("local_food","quest-food"),M("wandering_around","quest-wandering"),M("wildlife_spotting","quest-wildlife"),M("eco_warrior","quest-warrior"),n("quest-social-back","click",()=>Ie()),n("quest-social-submit","click",()=>{document.getElementById("quest-social-link-input").value&&(mt(5,"Social media presence validation recorded successfully."),U("quests"))}),n("quest-food-back","click",()=>Ie()),n("quest-food-start","click",()=>{mt(10,"Traditional cooking recipe trial cleared."),U("quests")}),n("quest-wandering-back","click",()=>Ie()),n("quest-wandering-snap","click",()=>{mt(60,"Rural custom marker logged locally."),U("quests")}),n("quest-wildlife-back","click",()=>Ie()),n("quest-wildlife-snap","click",()=>{mt(25,"Wildlife encounter profile telemetry logged."),U("quests")}),n("quest-warrior-back","click",()=>Ie()),n("quest-warrior-snap","click",()=>{mt(75,"Heritage reforestation contribution verified."),U("quests")}),n("act-link-petition","click",()=>Js("sign-petition",{petitionId:"ritigala-forest"})),n("act-link-donations","click",()=>Js("donation")),n("act-link-cleanup","click",()=>Js("join-cleanup",{eventId:"site-cleanup"})),n("act-link-create-event","click",()=>Js("create-event")),n("petition-back","click",()=>Ie()),n("petition-submit","click",()=>{if(f.isGuest||!f.user||!f.user.uid||!we.currentUser){At({title:"Sign the Petition",message:"Sign in or register to add your verified signature to heritage conservation petitions.",redirectView:"petition",targetId:"ritigala-forest"});return}f.petitionSigned||(f.petitionSigned=!0,f.petitionSignatures++,f.user.signedPetitions.push("ritigala-forest"),mt(3,"You signed the Ritigala Protection Petition!"),Ot())}),n("donations-back","click",()=>Ie()),document.querySelectorAll(".donation-btn").forEach(O=>{O.addEventListener("click",()=>{f.donationAmount=parseInt(O.getAttribute("data-val")),Ot()})});const X=document.getElementById("donation-custom-input");X&&X.addEventListener("input",()=>{f.donationAmount=parseInt(X.value)||0}),n("donations-submit","click",()=>{if(f.donationAmount>0){f.user.donatedAmount+=f.donationAmount;const O=Math.min(15,Math.ceil(f.donationAmount/200));mt(O,`Donated Rs. ${f.donationAmount} securely via Payhere framework.`),f.donationAmount=0,U("activism")}}),n("cleanup-back","click",()=>Ie()),n("cleanup-join","click",()=>{if(f.isGuest||!f.user||!f.user.uid||!we.currentUser){At({title:"Join Volunteer Cleanup",message:"Please sign in to register for upcoming site preservation and cleanup events.",redirectView:"cleanup",targetId:"site-cleanup"});return}f.user.joinedEvents.includes("site-cleanup")||(f.user.joinedEvents.push("site-cleanup"),mt(15,"Registered for Elahera Anicut site cleanup!"),Ot())}),n("create-event-back","click",()=>Ie()),n("event-submit","click",()=>{if(f.isGuest||!f.user||!f.user.uid||!we.currentUser){At({title:"Host a Community Event",message:"You must be signed in to organize and publish new community heritage initiatives.",redirectView:"create-event"});return}const O=document.getElementById("event-location").value,$=document.getElementById("event-type").value;O&&(f.user.joinedEvents.push("community-event"),mt(15,`Created Community event: ${$}!`),U("activism"))}),n("rew-link-list","click",()=>U("rewards-list")),n("rew-link-rank","click",()=>U("rank")),n("rew-link-leaderboard","click",()=>U("leaderboard")),n("rewards-list-back","click",()=>U("rewards")),n("rew-coupon-use","click",()=>U("coupon-redeem")),n("rew-unlock-guide","click",()=>{Ai("REWARD",()=>{f.user.xp>=100?(f.user.xp-=100,f.user.unlockedCoupons.push("guide"),ie("Unlocked Ancient Trail Guide Coupon!","success"),U("rewards-list")):ie("Requires 100 XP to unlock voucher.","error")})}),n("rew-unlock-crafts","click",()=>{Ai("REWARD",()=>{f.user.xp>=100?(f.user.xp-=100,f.user.unlockedCoupons.push("crafts"),ie("Unlocked Artisan Crafts Coupon!","success"),U("rewards-list")):ie("Requires 100 XP to unlock voucher.","error")})}),n("coupon-back","click",()=>Ie()),n("coupon-redeem-btn","click",()=>{Ai("REWARD",()=>{ie("Voucher code validated by merchant partner interface configuration.","success")})}),n("coupon-review-submit","click",()=>{document.getElementById("coupon-review-input").value&&(mt(10,"Partner node critique saved."),document.getElementById("coupon-review-input").value="")}),n("rank-back","click",()=>Ie()),n("leaderboard-back","click",()=>Ie()),n("leaderboard-view-full","click",()=>{ie("Fetching full layout matrices across global instances...")}),n("profile-recap-trigger","click",()=>U("travel-poster")),n("profile-travel-map","click",()=>U("travel-poster")),n("profile-settings","click",()=>U("settings")),n("profile-sync-trigger","click",()=>U("offline-sync")),n("poster-back","click",()=>Ie()),n("settings-back","click",()=>Ie()),n("sett-perm","click",()=>U("permissions")),n("sett-logout","click",()=>{u7(we).then(()=>{localStorage.removeItem("yathra_current_user"),f.currentUser=null,f.user={...Xr},f.user.permissions={camera:!1,notifications:!1},f.petitionSignatures=8742,f.petitionSigned=!1,f.navStack=[],U("landing"),ie("Session terminated safely.")}).catch(O=>{ie("Logout mapping error: "+O.message)})}),n("nav-home","click",()=>U("dashboard")),n("nav-act","click",()=>U("activism")),n("nav-rew","click",()=>U("rewards")),n("nav-prof","click",()=>U("profile"))}function Yv(n,e,t,r){const s=n*Math.PI/180,a=t*Math.PI/180,c=(t-n)*Math.PI/180,l=(r-e)*Math.PI/180,h=Math.sin(c/2)*Math.sin(c/2)+Math.cos(s)*Math.cos(a)*Math.sin(l/2)*Math.sin(l/2);return 6371e3*(2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h)))}async function Qv(){if(!navigator.onLine)return;const n=localStorage.getItem("yathra_sync_queue");if(!n)return;let e;try{e=JSON.parse(n)}catch(t){console.error(t);return}if(!(!e||e.length===0))for(let t=0;t<e.length;t++){const r=e[t];r.status==="Pending network link"&&(r.status="Verifying...",localStorage.setItem("yathra_sync_queue",JSON.stringify(e)),f.offlineSyncQueue=e,Ot(),await new Promise(i=>setTimeout(i,3e3)),r.status="Success",localStorage.setItem("yathra_sync_queue",JSON.stringify(e)),f.offlineSyncQueue=e,Ot())}}let Zs=15,rc=null;function Dc(){clearInterval(rc),Zs=15;const n=document.getElementById("quiz-timer");n&&(n.textContent="15s"),rc=setInterval(()=>{if(Zs>0){Zs--;const e=document.getElementById("quiz-timer");e&&(e.textContent=`${Zs}s`)}else{clearInterval(rc);const e=document.querySelectorAll("#quiz-options-container .quiz-option-btn");e.forEach(r=>r.disabled=!0),f.quizAnswers.push(-1);const t=f.activeSite.quizzes[f.currentQuizIndex].correctIndex;e[t]&&(e[t].classList.add("correct"),e[t].querySelector(".quiz-circle-ico").style.background="var(--color-green-success)"),setTimeout(()=>{if(f.currentQuizIndex+1<f.activeSite.quizzes.length)f.currentQuizIndex++,Ot(),Dc();else{const r=f.quizCorrectAnswers;f.user.completedQuizzes[f.activeSite.id]=!0,f.user.quizzesPassed=Object.keys(f.user.completedQuizzes).length,mt(r*10,`Quiz Complete! You got ${r}/5 correct.`),f.cooldownTimeLeft=300,U("quiz-cooldown"),_2()}},1500)}},1e3)}function _2(){f.cooldownActive||(f.cooldownActive=!0,f.cooldownTimer=setInterval(()=>{f.cooldownTimeLeft>0?(f.cooldownTimeLeft--,f.currentScreen==="quiz-cooldown"&&Xv()):(clearInterval(f.cooldownTimer),f.cooldownActive=!1,f.currentScreen==="quiz-cooldown"&&U("site-detail"))},1e3))}function Xv(){const n=document.querySelector(".timer-text-display"),e=document.querySelector(".timer-progress-circle");if(!n||!e)return;const t=Math.floor(f.cooldownTimeLeft/60),r=f.cooldownTimeLeft%60;n.textContent=`${t<10?"0"+t:t}:${r<10?"0"+r:r}`,e.style.strokeDashoffset=565.48-f.cooldownTimeLeft/300*565.48}function Yh(){const n=document.querySelector("#directory-view .directory-top-bar")||document.querySelector("#directory-view .directory-static-header-zone")||document.querySelector("#directory-view header"),e=document.querySelector("#directory-view .directory-cards-scroller")||document.querySelector("#directory-view .directory-scrollable-cards-zone")||document.querySelector("#directory-view main")||document.querySelector("#directory-grid-target")?.parentElement;n&&e&&e.style.setProperty("margin-top","0px","important")}function ea(n,e=""){const t=document.getElementById("directory-grid-target")||document.getElementById("directory-grid-container");if(!t)return;const r=e.toLowerCase(),i=Te.filter(s=>s.category===n&&(s.name.toLowerCase().includes(r)||s.district.toLowerCase().includes(r)));i.length===0?t.innerHTML='<div style="grid-column: 1/3; text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No locations found matching parameters criteria</div>':(t.innerHTML=i.map(s=>`
      <div class="location-grid-card" data-site-grid-id="${s.id}">
        <img src="${s.image}" alt="${s.name}" class="location-grid-card-img">
        <div class="location-card-content">
          <h4 class="location-card-title">${s.name}</h4>
          <span class="location-card-sub">${s.district}</span>
          <span class="location-card-xp">${s.xpRange}</span>
        </div>
      </div>
    `).join(""),document.querySelectorAll("[data-site-grid-id]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-site-grid-id");hs(a)})})),requestAnimationFrame(()=>{Yh(),setTimeout(Yh,50)})}function ic(n,e=""){const t=document.getElementById("list-cards-container");if(!t)return;const r=e.toLowerCase(),i=Te.filter(s=>s.category===n&&(s.name.toLowerCase().includes(r)||s.district.toLowerCase().includes(r)));if(i.length===0){t.innerHTML='<div style="text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No matching records found</div>';return}t.innerHTML=i.map(s=>`
    <div class="location-list-card" data-site-list-id="${s.id}">
      <img src="${s.image}" alt="${s.name}" class="location-list-img">
      <div class="location-list-content">
        <h4 style="font-size: 13px; font-weight: 800; line-height: 1.3;">${s.name}</h4>
        <span style="font-size: 10px; color: var(--color-gray); margin-top: 1px; margin-bottom: 4px;">${s.district}</span>
        <span style="font-size: 11px; font-weight: 700; color: var(--color-gold);">${s.xpRange}</span>
      </div>
    </div>
  `).join(""),document.querySelectorAll("[data-site-list-id]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-site-list-id");hs(a)})})}function Jv(n,e,t,r){const s=(t-n)*Math.PI/180,a=(r-e)*Math.PI/180,c=Math.sin(s/2)*Math.sin(s/2)+Math.cos(n*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(a/2)*Math.sin(a/2);return 6371*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))}function $a(n){const e=document.getElementById("map-popup-card");e&&e.remove();const t=document.getElementById("map-popup-container");if(!t)return;const r=document.createElement("div");r.id="map-popup-card",r.className="map-popup-card";let i=n.distance||"0 km";Nn?i="Permission required":Ne&&n.latitude&&n.longitude&&(i=Jv(Ne.latitude,Ne.longitude,n.latitude,n.longitude).toFixed(1)+" km"),r.innerHTML=`
    <img src="${n.image}" alt="${n.name}" class="popup-site-img">
    <div class="popup-site-info">
      <h3 style="font-size: 15px; font-weight: 800; color: var(--color-charcoal);">${n.name}</h3>
      <div style="font-size: 11px; color: var(--color-gray); font-weight: 600; margin-top: 1px;">📍 ${n.district}</div>
      <span style="font-size: 10px; color: var(--color-gold); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; display: inline-block;">${n.category}</span>
      <span style="font-size: 11px; color: var(--color-charcoal); font-weight: 700; margin-top: 2px;">⭐ ${n.xpRange} • 📍 ${i}</span>
    </div>
    <button class="btn-primary" style="width: 90px; height: 36px; font-size: 11px; padding:0 8px; gap:4px;" id="map-popup-navigate-btn">🚀 Navigate</button>
  `,t.appendChild(r),document.getElementById("map-popup-navigate-btn").addEventListener("click",s=>{s.stopPropagation(),hs(n.id)}),r.addEventListener("click",s=>{s.stopPropagation(),hs(n.id)})}function w2(){const n=document.getElementById("activity-drawer-modal");n&&n.remove();const e=document.createElement("div");e.id="activity-drawer-modal",e.className="activity-drawer-overlay";const t=f.user?f.user.rank||"Level 1 Explorer":"Guest Explorer",r=f.user?f.user.xp:0;e.innerHTML=`
    <div class="activity-drawer-card" style="padding: 24px 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h3 style="font-size: 18px; font-weight: 800; color: var(--color-charcoal); margin: 0;">Activity & Notifications</h3>
        <button id="activity-drawer-close" style="background: none; border: none; font-size: 20px; cursor: pointer; color: var(--color-charcoal);">✕</button>
      </div>

      <div style="background: #ffffff; border-radius: 16px; padding: 16px; border: 1.5px solid var(--color-gold); box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
          <div style="font-size: 28px;">🏆</div>
          <div>
            <div style="font-size: 14px; font-weight: 800; color: var(--color-charcoal);">${t}</div>
            <div style="font-size: 12px; font-weight: 700; color: var(--color-gold);">🌟 ${r} XP • Active Streak: 3 Days 🔥</div>
          </div>
        </div>
        ${f.isGuest?`
          <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--color-light-gray); text-align: center;">
            <p style="font-size: 11px; color: var(--color-gray); margin-bottom: 8px;">Sign in to save your level progression & unlock rewards.</p>
            <button class="btn-primary" id="drawer-guest-signin-btn" style="height: 34px; font-size: 12px;">Sign In / Register</button>
          </div>
        `:""}
      </div>

      <div style="font-size: 13px; font-weight: 800; color: var(--color-charcoal); margin-top: 4px;">Recent Alerts & Conservation News</div>
      
      <div style="background: #ffffff; border-radius: 14px; padding: 12px 14px; border: 1px solid var(--color-light-gray);">
        <div style="font-size: 11px; color: var(--color-teal); font-weight: 700;">🏛️ HERITAGE ALERT</div>
        <div style="font-size: 12px; font-weight: 800; color: var(--color-charcoal); margin-top: 2px;">Mihintale Conservation Drive</div>
        <div style="font-size: 11px; color: var(--color-gray); margin-top: 4px;">Join the upcoming weekend cleanup & restoration quest at Mihintale sanctuary.</div>
      </div>

      <div style="background: #ffffff; border-radius: 14px; padding: 12px 14px; border: 1px solid var(--color-light-gray);">
        <div style="font-size: 11px; color: var(--color-gold); font-weight: 700;">🌟 NEW QUEST UNLOCKED</div>
        <div style="font-size: 12px; font-weight: 800; color: var(--color-charcoal); margin-top: 2px;">Sigiriya Reforestation Initiative</div>
        <div style="font-size: 11px; color: var(--color-gray); margin-top: 4px;">Earn up to +75 XP by verifying native trees planted around Sigiriya perimeter.</div>
      </div>
    </div>
  `,document.body.appendChild(e),e.addEventListener("click",s=>{s.target===e&&e.remove()}),document.getElementById("activity-drawer-close").addEventListener("click",()=>e.remove());const i=document.getElementById("drawer-guest-signin-btn");i&&i.addEventListener("click",()=>{e.remove(),jt("signin")})}window.showActivityNotificationsDrawer=w2;let da=null;async function Nc(){const n=document.getElementById("live-camera-feed"),e=document.getElementById("camera-permission-prompt"),t=document.getElementById("camera-controls-bar");try{const r=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}},audio:!1});da=r,n&&(n.srcObject=r,n.style.display="block"),e&&(e.style.display="none"),t&&(t.style.display="flex")}catch(r){console.error("Camera access denied or unavailable:",r),ie("Camera access is required to verify site presence.","error")}}function Vc(){const n=document.getElementById("live-camera-feed"),e=document.getElementById("camera-capture-canvas");if(n&&n.srcObject&&n.videoWidth>0){e.width=n.videoWidth||640,e.height=n.videoHeight||480,e.getContext("2d").drawImage(n,0,0,e.width,e.height);const i=e.toDataURL("image/jpeg",.85);ds(),Qh(i);return}const t=f.activeSite||Te[0];ds(),Qh(t.image)}function Qh(n){processImageVerification(n)}function ds(){da&&(da.getTracks().forEach(n=>n.stop()),da=null)}window.startInAppCamera=Nc;window.captureLivePresencePhoto=Vc;window.stopInAppCamera=ds;export{Qy as L,Pc as M,jl as W,d2 as _};
