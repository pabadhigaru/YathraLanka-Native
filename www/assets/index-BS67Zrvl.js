(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const os={xp:0,rank:"None",medals:0,sitesVisited:0,quizzesPassed:0,permissions:{camera:!1,notifications:!1},role:"",interests:[],signedPetitions:[],donatedAmount:0,joinedEvents:[],unlockedCoupons:[],completedQuizzes:{},dwellTimeCompleted:{},verifiedPhotos:{}},n2=[{rank:"Grass Toucher",range:[0,99],threshold:0},{rank:"Wanderer",range:[100,249],threshold:100},{rank:"Tuk Tuk Trailer",range:[250,499],threshold:250},{rank:"Magahoyanna",range:[500,999],threshold:500},{rank:"Island Explorer",range:[1e3,2e3],threshold:1e3},{rank:"Lanka Legend",range:[2e3,5e3],threshold:2e3}],r2=[{name:"Suranga M",points:5820,role:"Explorer",rank:"Lanka Legend"},{name:"Anjali R.",points:5330,role:"Volunteer",rank:"Lanka Legend"},{name:"Dilhani",points:3540,role:"Organizer",rank:"Island Explorer"},{name:"Mihiranga T.",points:1160,role:"Quiz Master",rank:"Island Explorer"}],ti=[{id:"mihintale",name:"Mihintale",district:"Anuradhapura District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"220km",openStatus:"Open now",description:"The sacred mountain peak revered as the birthplace of Buddhism in the country, marked by ancient monastic ruins, rock inscriptions, and pristine natural reserves.",image:"Element Pictures/Mihintale.JPG",latitude:8.3508,longitude:80.5186,referenceImage:"Element Pictures/Mihintale.JPG",quizzes:[{question:"What is the significance of the Mihintale rock peak in Sri Lankan history?",options:["It was the first capital of Sri Lanka","It is the site where Buddhism was introduced by Arahat Mahinda","It is a royal palace built by Kashyapa","It is a natural seaport of the ancient era"],correctIndex:1},{question:"Who was the reigning Sri Lankan king when Arahat Mahinda visited Mihintale?",options:["King Dutusgemunu","King Devanampiyatissa","King Kashyapa","King Vijayabahu I"],correctIndex:1},{question:"Which of the following ancient structures is famous for its elephant carvings at Mihintale?",options:["The Kantaka Cetiya Vahalkada","The Aradhana Gala peak","The Ambasthala Dagoba","The Sinha Pokuna (Lion Pond)"],correctIndex:0},{question:"What unique function did the Mihintale Hospital serve in antiquity?",options:["It was a military barracks","It is one of the oldest recorded hospitals in the world, with stone bath tubs for herbal treatment","It was a royal treasury","It was a university for astronomy"],correctIndex:1},{question:"What is the name of the famous massive pond situated halfway up the Mihintale mountain?",options:["Basawakkulama reservoir","Kaludiya Pokuna (Black Water Pond)","Abhayagiri pond","Tissa Wewa"],correctIndex:1}]},{id:"sigiriya",name:"Sigiriya",district:"Matale District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"160km",openStatus:"Open now",description:"An ancient rock fortress constructed by King Kashyapa, celebrated for its advanced water gardens, stunning fifth-century frescoes of celestial maidens, and the colossal lion paw gate.",image:"Element Pictures/Sigiriya.jpg",latitude:7.957,longitude:80.7603,referenceImage:"Element Pictures/Sigiriya-LionRock.jpg",quizzes:[{question:"Which Sri Lankan king created the Sigiriya Rock Fortress?",options:["King Devanampiyatissa","King Dutugemunu","King Kashyapa","King Parakramabahu I"],correctIndex:2},{question:"Sigiriya is globally famous for which ancient artistic creations painted on the rock face?",options:["Carvings of war elephants","Fresco paintings of celestial maidens (Sigiri Apsaras)","Stone inscriptions in Brahmi script","Sculptures of sleeping lions"],correctIndex:1},{question:"What structure stands at the entrance to the final palace summit at Sigiriya?",options:["A massive bronze dragon gate","Colossal Lion Paws carved out of stone","Two giant cobra statues","A double-moat drawbridge"],correctIndex:1},{question:"What is the purpose of the highly polished 'Mirror Wall' at Sigiriya?",options:["To reflect sunrays and blind enemies","It was used by the king to view his reflection","It contains ancient graffiti poems written by visitors dating back to the 8th century","It was a military signaling device"],correctIndex:2},{question:"Which unique layout style is utilized in Sigiriya's royal pleasure gardens?",options:["Terraced mountain farming layout","Symmetrical hydraulic water gardens, boulders, and terraced gardens","Traditional dry zone scrub jungle","A maze of vertical underground caves"],correctIndex:1}]},{id:"ruwanweliseya",name:"Ruwanweliseya",district:"Anuradhapura District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"215km",openStatus:"Open now",description:"A monumental bubble-shaped stupa built by King Dutugemunu in the ancient capital Anuradhapura, venerated as a marvel of ancient civil engineering and Buddhist architecture.",image:"Element Pictures/Ruwanweliseya.jpg",latitude:8.3503,longitude:80.3962,referenceImage:"Element Pictures/Donations Stupa.jpg",quizzes:[{question:"Which ancient monarch initiated the construction of the sacred Ruwanweliseya Stupa?",options:["King Valagamba","King Devanampiyatissa","King Dutugemunu","King Mahasen"],correctIndex:2},{question:"What geometrical shape is the main dome of the Ruwanweliseya Stupa traditionally based on?",options:["Dhanyakara (Heap of Paddy shape)","Bubbulakara (Bubble shape)","Padmakara (Lotus shape)","Ghantakara (Bell shape)"],correctIndex:1},{question:"Which unique feature circles the base platform of the Ruwanweliseya stupa outer wall?",options:["A wall of brick-carved elephants standing side-by-side (Elephant Wall)","A deep circular moat filled with lotus flowers","A ring of bronze spears","Statues of ancient Buddhist kings"],correctIndex:0},{question:"Which architectural components are situated at the four cardinal entrances of the stupa?",options:["Fresco caves","Vahalkadas (decorative frontispieces)","Stone drawbridges","Hydraulic fountains"],correctIndex:1},{question:"What materials were historically used in the foundation of Ruwanweliseya to support its immense weight?",options:["Solid iron sheets and heavy granite blocks","Layers of crushed stones, clay, lead sheets, and a plaster mixture reinforced with animal hide","Hollow wooden logs filled with dry sand","Baked clay pots piled on top of each other"],correctIndex:1}]},{id:"temple_of_tooth",name:"Temple of the Tooth",district:"Kandy District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"115km",openStatus:"Open now",description:"The royal palace complex of Kandy housing the sacred tooth relic of Gautama Buddha, symbolizing sovereignty, rich Kandyan architecture, and royal heritage.",image:"Element Pictures/Temple of the tooth.jpg",latitude:7.2936,longitude:80.6413,referenceImage:"Element Pictures/Temple of the tooth.jpg",quizzes:[{question:"Where is the Sri Dalada Maligawa (Temple of the Sacred Tooth Relic) located?",options:["Anuradhapura","Polonnaruwa","Kandy","Jaffna"],correctIndex:2},{question:"Historically, what did possession of the Sacred Tooth Relic represent for Sri Lankan monarchs?",options:["Command over the merchant fleets","The divine right and legitimate authority to rule the country","Immunity from foreign invasions","Direct control over the pearl fisheries"],correctIndex:1},{question:"What is the name of the octagonal pavilion building situated at the front of the Kandy Temple?",options:["Pattirippuwa","Sandakada Pahana","Vahalkada","Gedige"],correctIndex:0},{question:"Which major annual cultural procession parading Kandy features the sacred casket?",options:["The Duruthu Perahera","The Esala Perahera","The Vesak Kalapaya","The Katharagama festival"],correctIndex:1},{question:"What decorative motif characterizes the surrounding protective walls of Kandy Lake and the temple moat?",options:["Lion posture carvings","Diyarella Bemma (Wave swell wall) and clouds pattern openings","Bronze spikes","Lotus petal panels"],correctIndex:1}]},{id:"dowa_rock_temple",name:"Dowa Rock Temple",district:"Badulla District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"180km",openStatus:"Open now",description:"A historic cave temple tucked in the Uva province hills, famous for its massive unfinished 38-foot tall standing Buddha statue carved directly into a sheer rock cliff.",image:"Element Pictures/Dowa Rock Temple.jpg",latitude:6.8202,longitude:81.0255,referenceImage:"Element Pictures/Dowa Rock Temple.jpg",quizzes:[{question:"What is the most prominent visual attraction at the Dowa Rock Temple?",options:["A golden reclining Buddha statue","A massive, unfinished 38-foot tall standing Buddha statue carved directly into the rock face","An underground crystal spring","A wall painted entirely with ancient map routes"],correctIndex:1},{question:"Which ancient monarch is locally credited with establishing the cave sanctuary at Dowa?",options:["King Dutugemunu","King Valagamba (Vattagamani Abhaya)","King Kashyapa","King Devanampiyatissa"],correctIndex:1},{question:"The rock carvings at Dowa show influences of which historical artistic school?",options:["Modern abstract sculpture","Late Anuradhapura and early Polonnaruwa regional rock art styles","Roman classical sculpting","Chola dynasty metalworks"],correctIndex:1},{question:"What unique reptile motif is painted on the ceiling of the shrine cave protecting the shrine?",options:["A three-headed cobra battling a giant viper","A giant sea turtle","A coiled python guardian","A green forest lizard"],correctIndex:0},{question:"Dowa Rock Temple is situated close to which popular hill station town in Badulla?",options:["Nuwara Eliya","Ella","Haputale","Bandarawela"],correctIndex:3}]},{id:"ritigala_monastery",name:"Ritigala Monastery",district:"Anuradhapura District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"195km",openStatus:"Open now",description:"An ancient mountain range housing the mysterious ruins of a forest-dwelling monastery, renowned for its austere architecture (Padhanaghara), beautiful stone paths, bathing pools, and herbal gardens.",image:"Element Pictures/Ritigala Monastery.jpg",latitude:8.1139,longitude:80.6558,referenceImage:"Element Pictures/Ritigala Monastery.jpg",quizzes:[{question:"What is unique about the ancient monastic structures (Padhanagharas) found at Ritigala?",options:["They are decorated with gold leaf and gems","They are completely devoid of any decorative carvings, prioritizing deep ascetic isolation and simple stone geometry","They are built on high stilts in dry mud","They have massive stupas surrounding them"],correctIndex:1},{question:"Which community of forest-dwelling monks historically inhabited the secluded peaks of Ritigala?",options:["The Tapovana monks (Pamsukulika fraternity)","Foreign Roman monks","Royal guards","Spice merchants"],correctIndex:0},{question:"What botanical anomaly makes the peak of Ritigala different from the surrounding dry zone plains?",options:["It has no vegetation due to volcanic activity","It contains a unique microclimate supporting wet-zone flora, medicinal herbs, and rare orchids on the misty summit","It grows only pine and fir trees","It is completely covered in swamp mangrove plants"],correctIndex:1},{question:"What impressive stone structures connect the ancient cells and platforms of Ritigala?",options:["Hanging vine suspension bridges","Meticulously paved stone-cut walkways and steps traversing the dense forest slopes","Hollow clay pipelines","Symmetrical marble corridors"],correctIndex:1},{question:"Which massive circular stone pond structure lies near the entrance of the Ritigala ruins?",options:["Banda Pokuna (large bathing pool with stone steps)","Sinha Pokuna","Kaludiya Pokuna","Tissa Wewa"],correctIndex:0}]},{id:"yudaganawa",name:"Yudaganawa",district:"Badulla District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"230km",openStatus:"Open now",description:"One of the largest colossal stupas in Sri Lanka, constructed in the 12th century, historical battlefield where King Dutugemunu and his brother Tissa fought for sovereignty.",image:"Element Pictures/Yudaganawa.jpg",latitude:6.7292,longitude:81.2831,referenceImage:"Element Pictures/Yudaganawa.jpg",quizzes:[{question:"What historic event occurred at the site of Yudaganawa in the Uva region?",options:["The final coronation of King Parakramabahu","The battlefield clash between brothers Prince Dutugemunu and Prince Tissa over the state crown","The signing of the Kandyan Convention","The first planting of the sacred Bo Tree"],correctIndex:1},{question:"What is unique about the structural layout of the Yudaganawa Stupa?",options:["It is built on a massive elevated wooden deck","It is a colossal, flat-topped semi-finished stupa (Kota Vehera style)","It is carved entirely out of a single piece of green rock","It has five rings of defensive moats surrounding it"],correctIndex:1},{question:"Yudaganawa is situated in the proximity of which historic town in the Moneragala/Badulla area?",options:["Buttala","Wellawaya","Ella","Mahiyanganaya"],correctIndex:0},{question:"What does the name 'Yudaganawa' literally translate to in Sinhala?",options:["Peaceful garden","Arena of Battle / Battleground","Temple of Sovereignty","Elephant lake"],correctIndex:1},{question:"Which of the following is found near Yudaganawa, representing ancient irrigation marvels?",options:["Yudaganawa Wewa (irrigation tank)","Senanayake Samudra","Kala Wewa","Parakrama Samudra"],correctIndex:0}]},{id:"pilikuttuwa",name:"Pilikuttuwa Temple",district:"Gampaha District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"35km",openStatus:"Open now",description:"An ancient forest cave sanctuary close to Colombo, famous for housing 99 drip-ledged caves, historic murals, wooden bridge over natural water flows, and pre-historic rock formations.",image:"Element Pictures/Pilikuttuwa Temple.jpg",latitude:7.0709,longitude:80.0384,referenceImage:"Element Pictures/Pilikuttuwa Temple.jpg",quizzes:[{question:"What is the primary natural and historical feature of the Pilikuttuwa Temple complex?",options:["A massive multi-tiered stone pagoda","A dense network of 99 drip-ledged rock shelter caves used by ancient monks","A natural volcanic geyser","A salt desert flat"],correctIndex:1},{question:"What famous historic bridge structure is preserved within the Pilikuttuwa sanctuary?",options:["A massive iron drawbridge","An ancient Dutch-era wooden canopy bridge spanning a stream","A marble arched bridge","A hanging bamboo rope bridge"],correctIndex:1},{question:"Which period of Sri Lankan art do the interior temple cave murals and frescoes at Pilikuttuwa belong to?",options:["Anuradhapura Period","Kandyan Kingdom and early colonial transitions","Modern contemporary art","Prehistoric stone paintings"],correctIndex:1},{question:"Which historic king took refuge in the caves of Pilikuttuwa during foreign invasions?",options:["King Kashyapa","King Valagamba","King Vijayabahu","King Dutugemunu"],correctIndex:1},{question:"What does the drip-ledge (Kataraya) on the caves of Pilikuttuwa do?",options:["It funnels drinking water into inside stone cups","It diverts monsoon rainwater away from entering the cave shelters, keeping the interior dry","It serves as a climbing groove for soldiers","It represents royal lineage crowns"],correctIndex:1}]},{id:"maligawila",name:"Maligawila Statue",district:"Moneragala District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"240km",openStatus:"Open now",description:"The home of a colossal 7th-century standing Buddha statue carved out of a single limestone rock, considered one of the absolute masterpieces of ancient sculpting.",image:"Element Pictures/maligawila buddha statue.jpg",latitude:6.7352,longitude:81.3392,referenceImage:"Element Pictures/maligawila buddha statue.jpg",quizzes:[{question:"What masterpiece of Sri Lankan limestone sculpture is found at Maligawila?",options:["A massive sleeping clay Buddha","A colossal 36-foot standing Buddha statue carved out of a single crystalline limestone block","A gold-plated stupa dome","A row of terracotta warriors"],correctIndex:1},{question:"Which ancient prince is historically credited with crafting this massive statue in the 7th century?",options:["Prince Kashyapa","Prince Agrabodhi","Prince Dutugemunu","Prince Valagamba"],correctIndex:1},{question:"Which neighboring site at Maligawila features a giant statue of Avalokiteshvara Bodhisattva?",options:["Dambegoda (Dambegoda Bodhisattva Statue)","Sigiriya rock","Buduruvagala caves","Aukana"],correctIndex:0},{question:"What state of preservation was the Maligawila Buddha found in during the late 20th century before restoration?",options:["Fully intact under a pristine dome","Fallen, broken into several massive segments in the dense jungle","Partially buried in beach sand dunes","Submerged in a large reservoir lake"],correctIndex:1},{question:"What architectural feature originally enclosed the massive standing Buddha statue?",options:["A circular brick and stone Image House (Patimaghara)","A simple open-air wood canopy","A series of deep stone trenches","A tall metal tower"],correctIndex:0}]},{id:"ibbankatuwa",name:"Ibbankatuwa Tombs",district:"Matale District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"150km",openStatus:"Open now",description:"A famous megalithic prehistoric burial ground dating back to the Iron Age, showcasing stone cist graves, ancient pottery, beads, and advanced early societal burials.",image:"Element Pictures/Ibbankatuwa Tombs.JPG",latitude:7.8596,longitude:80.6481,referenceImage:"Element Pictures/Ibbankatuwa Tombs.JPG",quizzes:[{question:"What unique prehistoric archaeological site is found at Ibbankatuwa?",options:["An ancient palace courtyard","A massive Megalithic Cist Burial Ground from the protohistoric Iron Age (dating back 2500+ years)","An ancient port for gem ships","A prehistoric tool-making cave"],correctIndex:1},{question:"What typical shape do the grave chambers (cists) at Ibbankatuwa have?",options:["Circular deep stone wells","Four granite slab walls forming a rectangular box capped with a large stone cover slab","Triangular pyramids built from clay","Hollow logs buried vertically"],correctIndex:1},{question:"Which of the following artifacts were found inside the cist tombs, proving ancient trade connections?",options:["Roman gold coins","Beads made of carnelian, onyx, agate, clay pottery urns containing ashes, and copper tools","Porcelain plates from China","Bronze guns"],correctIndex:1},{question:"The residents of the pre-historic Ibbankatuwa era primarily used which major metal classification?",options:["Only flint stone tools","Iron and Copper (Megalithic Iron Age culture)","Aluminum and Steel","Pure Platinum"],correctIndex:1},{question:"Near which major central province city is the Ibbankatuwa Megalithic Site situated?",options:["Kandy","Dambulla","Jaffna","Negombo"],correctIndex:1}]},{id:"galle_fort",name:"Galle Fort",district:"Galle District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"125km",openStatus:"Open now",description:"A coastal fortress built by the Portuguese, heavily fortified by the Dutch, blending European military architecture and South Asian traditions.",image:"Element Pictures/Galle Fort.jpg",latitude:6.0267,longitude:80.2167,referenceImage:"Element Pictures/Galle Fort.jpg",quizzes:[{question:"Which European nation first constructed fortifications in Galle before the Dutch expanded it?",options:["The British","The Portuguese","The French","The Spanish"],correctIndex:1},{question:"What is the famous white structure standing on the Utrecht Bastion overlooking the ocean in Galle Fort?",options:["The Clock Tower","The Galle Lighthouse","The Dutch Reformed Church dome","The Maritime Museum tower"],correctIndex:1},{question:"Galle Fort is recognized globally under which prestigious classification?",options:["A Biosphere Reserve","A UNESCO World Heritage Site","An industrial trade zone","A national sanctuary park"],correctIndex:1},{question:"What is the name of the narrow stone gateway featuring a coat of arms of the VOC Dutch East India Company?",options:["The Galle Old Gate","The Lighthouse gate","The Main Bastion drawbridge","The Sea Gate"],correctIndex:0},{question:"What architectural feature characterizes the traditional Dutch villa residential lanes in Galle Fort?",options:["Tall modern glass high-rises","Verandah houses, terracotta tile roofs, pillared arches, and paved stone inner courtyards","Circular wood log cabins","Subterranean cave rooms"],correctIndex:1}]}],i2=[{id:"social_media",name:"Social Media Presence",description:"Share about your visit",xp:5,duration:"10 mins",icon:"icons/social media presence icon.png"},{id:"local_food",name:"Local Food",description:"Try a traditional dish",xp:5,duration:"20 mins",icon:"icons/local food icon.png"},{id:"wandering_around",name:"Wandering Around",description:"Visit a nearby site",xp:5,duration:"20 mins",icon:"icons/Wandering Around icon.png"},{id:"wildlife_spotting",name:"Wildlife Spotting",description:"Spot and record an animal",xp:5,duration:"20 mins",icon:"icons/Wildlife Spotting icon.png"},{id:"eco_warrior",name:"Eco-Warrior",description:"Conserve the environment",xp:10,duration:"15 mins",icon:"icons/Eco Warrior icon.png"}],s2=()=>{};var Ll={};/**
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
 */const ku=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},a2=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,l=i+2<n.length,h=l?n[i+2]:0,p=s>>2,g=(s&3)<<4|c>>4;let m=(c&15)<<2|h>>6,R=h&63;l||(R=64,o||(m=64)),r.push(t[p],t[g],t[m],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ku(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):a2(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||g==null)throw new o2;const m=s<<2|c>>4;if(r.push(m),h!==64){const R=c<<4&240|h>>2;if(r.push(R),g!==64){const N=h<<6&192|g;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class o2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c2=function(n){const e=ku(n);return Nu.encodeByteArray(e,!0)},gs=function(n){return c2(n).replace(/\./g,"")},Ou=function(n){try{return Nu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function l2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const u2=()=>l2().__FIREBASE_DEFAULTS__,h2=()=>{if(typeof process>"u"||typeof Ll>"u")return;const n=Ll.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},d2=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ou(n[1]);return e&&JSON.parse(e)},qs=()=>{try{return s2()||u2()||h2()||d2()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},p2=n=>qs()?.emulatorHosts?.[n],f2=n=>{const e=p2(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Du=()=>qs()?.config,g2=n=>qs()?.[`_${n}`];/**
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
 */class Vu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function m2(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[gs(JSON.stringify(t)),gs(JSON.stringify(o)),""].join(".")}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function y2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function _2(){const n=qs()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function v2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function w2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function E2(){return!_2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mu(){try{return typeof indexedDB=="object"}catch{return!1}}function Fu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}function T2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const A2="FirebaseError";class Tt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=A2,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mn.prototype.create)}}class Mn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?I2(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Tt(i,c,r)}}function I2(n,e){return n.replace(b2,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const b2=/\{\$([^}]+)}/g;function rr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Ml(s)&&Ml(o)){if(!rr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ml(n){return n!==null&&typeof n=="object"}/**
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
 */function Uu(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ur(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function zr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function x2(n,e){const t=new S2(n,e);return t.subscribe.bind(t)}class S2{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");C2(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ba),i.error===void 0&&(i.error=Ba),i.complete===void 0&&(i.complete=Ba);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C2(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ba(){}/**
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
 */const R2=1e3,P2=2,k2=4*60*60*1e3,N2=.5;function Fl(n,e=R2,t=P2){const r=e*Math.pow(t,n),i=Math.round(N2*r*(Math.random()-.5)*2);return Math.min(k2,r+i)}/**
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
 */function tt(n){return n&&n._delegate?n._delegate:n}/**
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
 */function js(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function O2(n){return(await fetch(n,{credentials:"include"})).ok}class wt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bn="[DEFAULT]";/**
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
 */class D2{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Vu;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(L2(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:V2(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function V2(n){return n===bn?void 0:n}function L2(n){return n.instantiationMode==="EAGER"}/**
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
 */class M2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new D2(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(re||(re={}));const F2={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},U2=re.INFO,z2={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},B2=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=z2[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hs{constructor(e){this.name=e,this._logLevel=U2,this._logHandler=B2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?F2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const $2=(n,e)=>e.some(t=>n instanceof t);let Ul,zl;function q2(){return Ul||(Ul=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function j2(){return zl||(zl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zu=new WeakMap,ao=new WeakMap,Bu=new WeakMap,$a=new WeakMap,Oo=new WeakMap;function H2(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(tn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&zu.set(t,n)}).catch(()=>{}),Oo.set(e,n),e}function G2(n){if(ao.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ao.set(n,e)}let oo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ao.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return tn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function W2(n){oo=n(oo)}function K2(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qa(this),e,...t);return Bu.set(r,e.sort?e.sort():[e]),tn(r)}:j2().includes(n)?function(...e){return n.apply(qa(this),e),tn(zu.get(this))}:function(...e){return tn(n.apply(qa(this),e))}}function Y2(n){return typeof n=="function"?K2(n):(n instanceof IDBTransaction&&G2(n),$2(n,q2())?new Proxy(n,oo):n)}function tn(n){if(n instanceof IDBRequest)return H2(n);if($a.has(n))return $a.get(n);const e=Y2(n);return e!==n&&($a.set(n,e),Oo.set(e,n)),e}const qa=n=>Oo.get(n);function $u(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tn(o.result),l.oldVersion,l.newVersion,tn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Q2=["get","getKey","getAll","getAllKeys","count"],X2=["put","add","delete","clear"],ja=new Map;function Bl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ja.get(e))return ja.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=X2.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Q2.includes(t)))return;const s=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&l.done]))[0]};return ja.set(e,s),s}W2(n=>({...n,get:(e,t,r)=>Bl(e,t)||n.get(e,t,r),has:(e,t)=>!!Bl(e,t)||n.has(e,t)}));/**
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
 */class J2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Z2(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Z2(n){return n.getComponent()?.type==="VERSION"}const co="@firebase/app",$l="0.15.0";/**
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
 */const zt=new Hs("@firebase/app"),ef="@firebase/app-compat",tf="@firebase/analytics-compat",nf="@firebase/analytics",rf="@firebase/app-check-compat",sf="@firebase/app-check",af="@firebase/auth",of="@firebase/auth-compat",cf="@firebase/database",lf="@firebase/data-connect",uf="@firebase/database-compat",hf="@firebase/functions",df="@firebase/functions-compat",pf="@firebase/installations",ff="@firebase/installations-compat",gf="@firebase/messaging",mf="@firebase/messaging-compat",yf="@firebase/performance",_f="@firebase/performance-compat",vf="@firebase/remote-config",wf="@firebase/remote-config-compat",Ef="@firebase/storage",Tf="@firebase/storage-compat",Af="@firebase/firestore",If="@firebase/ai",bf="@firebase/firestore-compat",xf="firebase",Sf="12.15.0";/**
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
 */const lo="[DEFAULT]",Cf={[co]:"fire-core",[ef]:"fire-core-compat",[nf]:"fire-analytics",[tf]:"fire-analytics-compat",[sf]:"fire-app-check",[rf]:"fire-app-check-compat",[af]:"fire-auth",[of]:"fire-auth-compat",[cf]:"fire-rtdb",[lf]:"fire-data-connect",[uf]:"fire-rtdb-compat",[hf]:"fire-fn",[df]:"fire-fn-compat",[pf]:"fire-iid",[ff]:"fire-iid-compat",[gf]:"fire-fcm",[mf]:"fire-fcm-compat",[yf]:"fire-perf",[_f]:"fire-perf-compat",[vf]:"fire-rc",[wf]:"fire-rc-compat",[Ef]:"fire-gcs",[Tf]:"fire-gcs-compat",[Af]:"fire-fst",[bf]:"fire-fst-compat",[If]:"fire-vertex","fire-js":"fire-js",[xf]:"fire-js-all"};/**
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
 */const ms=new Map,Rf=new Map,uo=new Map;function ql(n,e){try{n.container.addComponent(e)}catch(t){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function kt(n){const e=n.name;if(uo.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;uo.set(e,n);for(const t of ms.values())ql(t,n);for(const t of Rf.values())ql(t,n);return!0}function dr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Pf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nn=new Mn("app","Firebase",Pf);/**
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
 */class kf{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
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
 */const Gs=Sf;function qu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:lo,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw nn.create("bad-app-name",{appName:String(i)});if(t||(t=Du()),!t)throw nn.create("no-options");const s=ms.get(i);if(s){if(rr(t,s.options)&&rr(r,s.config))return s;throw nn.create("duplicate-app",{appName:i})}const o=new M2(i);for(const l of uo.values())o.addComponent(l);const c=new kf(t,r,o);return ms.set(i,c),c}function ju(n=lo){const e=ms.get(n);if(!e&&n===lo&&Du())return qu();if(!e)throw nn.create("no-app",{appName:n});return e}function ft(n,e,t){let r=Cf[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(o.join(" "));return}kt(new wt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Nf="firebase-heartbeat-database",Of=1,ni="firebase-heartbeat-store";let Ha=null;function Hu(){return Ha||(Ha=$u(Nf,Of,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ni)}catch(t){console.warn(t)}}}}).catch(n=>{throw nn.create("idb-open",{originalErrorMessage:n.message})})),Ha}async function Df(n){try{const t=(await Hu()).transaction(ni),r=await t.objectStore(ni).get(Gu(n));return await t.done,r}catch(e){if(e instanceof Tt)zt.warn(e.message);else{const t=nn.create("idb-get",{originalErrorMessage:e?.message});zt.warn(t.message)}}}async function jl(n,e){try{const r=(await Hu()).transaction(ni,"readwrite");await r.objectStore(ni).put(e,Gu(n)),await r.done}catch(t){if(t instanceof Tt)zt.warn(t.message);else{const r=nn.create("idb-set",{originalErrorMessage:t?.message});zt.warn(r.message)}}}function Gu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Vf=1024,Lf=30;class Mf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Uf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hl();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Lf){const i=zf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){zt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hl(),{heartbeatsToSend:t,unsentEntries:r}=Ff(this._heartbeatsCache.heartbeats),i=gs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return zt.warn(e),""}}}function Hl(){return new Date().toISOString().substring(0,10)}function Ff(n,e=Vf){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Gl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Uf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mu()?Fu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Df(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return jl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gl(n){return gs(JSON.stringify({version:2,heartbeats:n})).length}function zf(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Bf(n){kt(new wt("platform-logger",e=>new J2(e),"PRIVATE")),kt(new wt("heartbeat",e=>new Mf(e),"PRIVATE")),ft(co,$l,n),ft(co,$l,"esm2020"),ft("fire-js","")}Bf("");var $f="firebase",qf="12.15.0";/**
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
 */ft($f,qf,"app");const Wu="@firebase/installations",Do="0.6.22";/**
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
 */const Ku=1e4,Yu=`w:${Do}`,Qu="FIS_v2",jf="https://firebaseinstallations.googleapis.com/v1",Hf=60*60*1e3,Gf="installations",Wf="Installations";/**
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
 */const Kf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Dn=new Mn(Gf,Wf,Kf);function Xu(n){return n instanceof Tt&&n.code.includes("request-failed")}/**
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
 */function Ju({projectId:n}){return`${jf}/projects/${n}/installations`}function Zu(n){return{token:n.token,requestStatus:2,expiresIn:Qf(n.expiresIn),creationTime:Date.now()}}async function eh(n,e){const r=(await e.json()).error;return Dn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function th({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Yf(n,{refreshToken:e}){const t=th(n);return t.append("Authorization",Xf(e)),t}async function nh(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Qf(n){return Number(n.replace("s","000"))}function Xf(n){return`${Qu} ${n}`}/**
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
 */async function Jf({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Ju(n),i=th(n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:t,authVersion:Qu,appId:n.appId,sdkVersion:Yu},c={method:"POST",headers:i,body:JSON.stringify(o)},l=await nh(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:Zu(h.authToken)}}else throw await eh("Create Installation",l)}/**
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
 */function rh(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Zf(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const e6=/^[cdef][\w-]{21}$/,ho="";function t6(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=n6(n);return e6.test(t)?t:ho}catch{return ho}}function n6(n){return Zf(n).substr(0,22)}/**
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
 */function Ws(n){return`${n.appName}!${n.appId}`}/**
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
 */const ih=new Map;function sh(n,e){const t=Ws(n);ah(t,e),r6(t,e)}function ah(n,e){const t=ih.get(n);if(t)for(const r of t)r(e)}function r6(n,e){const t=i6();t&&t.postMessage({key:n,fid:e}),s6()}let Sn=null;function i6(){return!Sn&&"BroadcastChannel"in self&&(Sn=new BroadcastChannel("[Firebase] FID Change"),Sn.onmessage=n=>{ah(n.data.key,n.data.fid)}),Sn}function s6(){ih.size===0&&Sn&&(Sn.close(),Sn=null)}/**
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
 */const a6="firebase-installations-database",o6=1,Vn="firebase-installations-store";let Ga=null;function Vo(){return Ga||(Ga=$u(a6,o6,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Vn)}}})),Ga}async function ys(n,e){const t=Ws(n),i=(await Vo()).transaction(Vn,"readwrite"),s=i.objectStore(Vn),o=await s.get(t);return await s.put(e,t),await i.done,(!o||o.fid!==e.fid)&&sh(n,e.fid),e}async function oh(n){const e=Ws(n),r=(await Vo()).transaction(Vn,"readwrite");await r.objectStore(Vn).delete(e),await r.done}async function Ks(n,e){const t=Ws(n),i=(await Vo()).transaction(Vn,"readwrite"),s=i.objectStore(Vn),o=await s.get(t),c=e(o);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!o||o.fid!==c.fid)&&sh(n,c.fid),c}/**
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
 */async function Lo(n){let e;const t=await Ks(n.appConfig,r=>{const i=c6(r),s=l6(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===ho?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function c6(n){const e=n||{fid:t6(),registrationStatus:0};return ch(e)}function l6(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Dn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=u6(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:h6(n)}:{installationEntry:e}}async function u6(n,e){try{const t=await Jf(n,e);return ys(n.appConfig,t)}catch(t){throw Xu(t)&&t.customData.serverCode===409?await oh(n.appConfig):await ys(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function h6(n){let e=await Wl(n.appConfig);for(;e.registrationStatus===1;)await rh(100),e=await Wl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Lo(n);return r||t}return e}function Wl(n){return Ks(n,e=>{if(!e)throw Dn.create("installation-not-found");return ch(e)})}function ch(n){return d6(n)?{fid:n.fid,registrationStatus:0}:n}function d6(n){return n.registrationStatus===1&&n.registrationTime+Ku<Date.now()}/**
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
 */async function p6({appConfig:n,heartbeatServiceProvider:e},t){const r=f6(n,t),i=Yf(n,t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:Yu,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(o)},l=await nh(()=>fetch(r,c));if(l.ok){const h=await l.json();return Zu(h)}else throw await eh("Generate Auth Token",l)}function f6(n,{fid:e}){return`${Ju(n)}/${e}/authTokens:generate`}/**
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
 */async function Mo(n,e=!1){let t;const r=await Ks(n.appConfig,s=>{if(!lh(s))throw Dn.create("not-registered");const o=s.authToken;if(!e&&y6(o))return s;if(o.requestStatus===1)return t=g6(n,e),s;{if(!navigator.onLine)throw Dn.create("app-offline");const c=v6(s);return t=m6(n,c),c}});return t?await t:r.authToken}async function g6(n,e){let t=await Kl(n.appConfig);for(;t.authToken.requestStatus===1;)await rh(100),t=await Kl(n.appConfig);const r=t.authToken;return r.requestStatus===0?Mo(n,e):r}function Kl(n){return Ks(n,e=>{if(!lh(e))throw Dn.create("not-registered");const t=e.authToken;return w6(t)?{...e,authToken:{requestStatus:0}}:e})}async function m6(n,e){try{const t=await p6(n,e),r={...e,authToken:t};return await ys(n.appConfig,r),t}catch(t){if(Xu(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await oh(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await ys(n.appConfig,r)}throw t}}function lh(n){return n!==void 0&&n.registrationStatus===2}function y6(n){return n.requestStatus===2&&!_6(n)}function _6(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Hf}function v6(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function w6(n){return n.requestStatus===1&&n.requestTime+Ku<Date.now()}/**
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
 */async function E6(n){const e=n,{installationEntry:t,registrationPromise:r}=await Lo(e);return r?r.catch(console.error):Mo(e).catch(console.error),t.fid}/**
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
 */async function T6(n,e=!1){const t=n;return await A6(t),(await Mo(t,e)).token}async function A6(n){const{registrationPromise:e}=await Lo(n);e&&await e}/**
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
 */function I6(n){if(!n||!n.options)throw Wa("App Configuration");if(!n.name)throw Wa("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Wa(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Wa(n){return Dn.create("missing-app-config-values",{valueName:n})}/**
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
 */const uh="installations",b6="installations-internal",x6=n=>{const e=n.getProvider("app").getImmediate(),t=I6(e),r=dr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},S6=n=>{const e=n.getProvider("app").getImmediate(),t=dr(e,uh).getImmediate();return{getId:()=>E6(t),getToken:i=>T6(t,i)}};function C6(){kt(new wt(uh,x6,"PUBLIC")),kt(new wt(b6,S6,"PRIVATE"))}C6();ft(Wu,Do);ft(Wu,Do,"esm2020");/**
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
 */const _s="analytics",R6="firebase_id",P6="origin",k6=60*1e3,N6="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fo="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ye=new Hs("@firebase/analytics");/**
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
 */const O6={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ut=new Mn("analytics","Analytics",O6);/**
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
 */function D6(n){if(!n.startsWith(Fo)){const e=ut.create("invalid-gtag-resource",{gtagURL:n});return Ye.warn(e.message),""}return n}function hh(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function V6(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function L6(n,e){const t=V6("firebase-js-sdk-policy",{createScriptURL:D6}),r=document.createElement("script"),i=`${Fo}?l=${n}&id=${e}`;r.src=t?t?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function M6(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function F6(n,e,t,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await hh(t)).find(h=>h.measurementId===i);l&&await e[l.appId]}}catch(c){Ye.error(c)}n("config",i,s)}async function U6(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const c=await hh(t);for(const l of o){const h=c.find(g=>g.measurementId===l),p=h&&e[h.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){Ye.error(s)}}function z6(n,e,t,r){async function i(s,...o){try{if(s==="event"){const[c,l]=o;await U6(n,e,t,c,l)}else if(s==="config"){const[c,l]=o;await F6(n,e,t,r,c,l)}else if(s==="consent"){const[c,l]=o;n("consent",c,l)}else if(s==="get"){const[c,l,h]=o;n("get",c,l,h)}else if(s==="set"){const[c]=o;n("set",c)}else n(s,...o)}catch(c){Ye.error(c)}}return i}function B6(n,e,t,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=z6(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function $6(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Fo)&&t.src.includes(n))return t;return null}/**
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
 */const q6=30,j6=1e3;class H6{constructor(e={},t=j6){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const dh=new H6;function G6(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function W6(n){const{appId:e,apiKey:t}=n,r={method:"GET",headers:G6(t)},i=N6.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();c.error?.message&&(o=c.error.message)}catch{}throw ut.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function K6(n,e=dh,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw ut.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ut.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new X6;return setTimeout(async()=>{c.abort()},k6),ph({appId:r,apiKey:i,measurementId:s},o,c,e)}async function ph(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=dh){const{appId:s,measurementId:o}=n;try{await Y6(r,e)}catch(c){if(o)return Ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:s,measurementId:o};throw c}try{const c=await W6(n);return i.deleteThrottleMetadata(s),c}catch(c){const l=c;if(!Q6(l)){if(i.deleteThrottleMetadata(s),o)return Ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:s,measurementId:o};throw c}const h=Number(l?.customData?.httpStatus)===503?Fl(t,i.intervalMillis,q6):Fl(t,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:t+1};return i.setThrottleMetadata(s,p),Ye.debug(`Calling attemptFetch again in ${h} millis`),ph(n,p,r,i)}}function Y6(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(ut.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Q6(n){if(!(n instanceof Tt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class X6{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function J6(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,o={...r,send_to:s};n("event",t,o)}}async function Z6(n,e,t,r){if(r&&r.global){const i={};for(const s of Object.keys(t))i[`user_properties.${s}`]=t[s];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}/**
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
 */async function e0(){if(Mu())try{await Fu()}catch(n){return Ye.warn(ut.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return Ye.warn(ut.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function t0(n,e,t,r,i,s,o){const c=K6(n);c.then(m=>{t[m.measurementId]=m.appId,n.options.measurementId&&m.measurementId!==n.options.measurementId&&Ye.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ye.error(m)),e.push(c);const l=e0().then(m=>{if(m)return r.getId()}),[h,p]=await Promise.all([c,l]);$6(s)||L6(s,h.measurementId),i("js",new Date);const g=o?.config??{};return g[P6]="firebase",g.update=!0,p!=null&&(g[R6]=p),i("config",h.measurementId,g),h.measurementId}/**
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
 */class n0{constructor(e){this.app=e}_delete(){return delete Jn[this.app.options.appId],Promise.resolve()}}let Jn={},Yl=[];const Ql={};let Ka="dataLayer",r0="gtag",Xl,Uo,Jl=!1;function i0(){const n=[];if(Lu()&&n.push("This is a browser extension environment."),T2()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=ut.create("invalid-analytics-context",{errorInfo:e});Ye.warn(t.message)}}function s0(n,e,t){i0();const r=n.options.appId;if(!r)throw ut.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ut.create("no-api-key");if(Jn[r]!=null)throw ut.create("already-exists",{id:r});if(!Jl){M6(Ka);const{wrappedGtag:s,gtagCore:o}=B6(Jn,Yl,Ql,Ka,r0);Uo=s,Xl=o,Jl=!0}return Jn[r]=t0(n,Yl,Ql,e,Xl,Ka,t),new n0(n)}function a0(n=ju()){n=tt(n);const e=dr(n,_s);return e.isInitialized()?e.getImmediate():o0(n)}function o0(n,e={}){const t=dr(n,_s);if(t.isInitialized()){const i=t.getImmediate();if(rr(e,t.getOptions()))return i;throw ut.create("already-initialized")}return t.initialize({options:e})}function c0(n,e,t){n=tt(n),Z6(Uo,Jn[n.app.options.appId],e,t).catch(r=>Ye.error(r))}function l0(n,e,t,r){n=tt(n),J6(Uo,Jn[n.app.options.appId],e,t,r).catch(i=>Ye.error(i))}const Zl="@firebase/analytics",e1="0.10.22";function u0(){kt(new wt(_s,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return s0(r,i,t)},"PUBLIC")),kt(new wt("analytics-internal",n,"PRIVATE")),ft(Zl,e1),ft(Zl,e1,"esm2020");function n(e){try{const t=e.getProvider(_s).getImmediate();return{logEvent:(r,i,s)=>l0(t,r,i,s),setUserProperties:(r,i)=>c0(t,r,i)}}catch(t){throw ut.create("interop-component-reg-failed",{reason:t})}}}u0();function fh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h0=fh,gh=new Mn("auth","Firebase",fh());/**
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
 */const vs=new Hs("@firebase/auth");function d0(n,...e){vs.logLevel<=re.WARN&&vs.warn(`Auth (${Gs}): ${n}`,...e)}function cs(n,...e){vs.logLevel<=re.ERROR&&vs.error(`Auth (${Gs}): ${n}`,...e)}/**
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
 */function ir(n,...e){throw Bo(n,...e)}function zo(n,...e){return Bo(n,...e)}function mh(n,e,t){const r={...h0(),[e]:t};return new Mn("auth","Firebase",r).create(e,{appName:n.name})}function Pn(n){return mh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return gh.create(n,...e)}function ce(n,e,...t){if(!n)throw Bo(e,...t)}function Lt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw cs(e),new Error(e)}function ws(n,e){n||Lt(e)}function p0(){return t1()==="http:"||t1()==="https:"}function t1(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function f0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(p0()||Lu()||"connection"in navigator)?navigator.onLine:!0}function g0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ai{constructor(e,t){this.shortDelay=e,this.longDelay=t,ws(t>e,"Short delay should be less than long delay!"),this.isMobile=y2()||w2()}get(){return f0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function m0(n,e){ws(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class yh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const y0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],v0=new Ai(3e4,6e4);function Fn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function _n(n,e,t,r,i={}){return _h(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=Uu({...o,key:n.config.apiKey}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...s};return v2()||(h.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&js(n.emulatorConfig.host)&&(h.credentials="include"),yh.fetch()(await vh(n,n.config.apiHost,t,c),h)})}async function _h(n,e,t){n._canInitEmulator=!1;const r={...y0,...e};try{const i=new E0(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xi(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xi(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xi(n,"user-disabled",o);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw mh(n,p,h);ir(n,p)}}catch(i){if(i instanceof Tt)throw i;ir(n,"network-request-failed",{message:String(i)})}}async function Ys(n,e,t,r,i={}){const s=await _n(n,e,t,r,i);return"mfaPendingCredential"in s&&ir(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function vh(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?m0(n.config,i):`${n.config.apiScheme}://${i}`;return _0.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function w0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class E0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(zo(this.auth,"network-request-failed")),v0.get())})}}function Xi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=zo(n,e,r);return i.customData._tokenResponse=t,i}function n1(n){return n!==void 0&&n.enterprise!==void 0}class T0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return w0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function A0(n,e){return _n(n,"GET","/v2/recaptchaConfig",Fn(n,e))}/**
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
 */async function I0(n,e){return _n(n,"POST","/v1/accounts:delete",e)}async function Es(n,e){return _n(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function b0(n,e=!1){const t=tt(n),r=await t.getIdToken(e),i=wh(r);ce(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Hr(Ya(i.auth_time)),issuedAtTime:Hr(Ya(i.iat)),expirationTime:Hr(Ya(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Ya(n){return Number(n)*1e3}function wh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return cs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ou(t);return i?JSON.parse(i):(cs("Failed to decode base64 JWT payload"),null)}catch(i){return cs("Caught error parsing JWT payload as JSON",i?.toString()),null}}function r1(n){const e=wh(n);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ts(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Tt&&x0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function x0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class S0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class po{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hr(this.lastLoginAt),this.creationTime=Hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function As(n){const e=n.auth,t=await n.getIdToken(),r=await Ts(n,Es(e,{idToken:t}));ce(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=i.providerUserInfo?.length?Eh(i.providerUserInfo):[],o=R0(n.providerData,s),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!o?.length,h=c?l:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new po(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function C0(n){const e=tt(n);await As(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R0(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Eh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function P0(n,e){const t=await _h(n,{},async()=>{const r=Uu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await vh(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&js(n.emulatorConfig.host)&&(l.credentials="include"),yh.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function k0(n,e){return _n(n,"POST","/v2/accounts:revokeToken",Fn(n,e))}/**
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
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):r1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const t=r1(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await P0(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Zn;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ce(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
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
 */function Qt(n,e){ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class yt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new S0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new po(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ts(this,this.stsTokenManager.getToken(this.auth,e));return ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return b0(this,e)}reload(){return C0(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await As(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await Ts(this,I0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:g,emailVerified:m,isAnonymous:R,providerData:N,stsTokenManager:L}=t;ce(g&&L,e,"internal-error");const F=Zn.fromJSON(this.name,L);ce(typeof g=="string",e,"internal-error"),Qt(r,e.name),Qt(i,e.name),ce(typeof m=="boolean",e,"internal-error"),ce(typeof R=="boolean",e,"internal-error"),Qt(s,e.name),Qt(o,e.name),Qt(c,e.name),Qt(l,e.name),Qt(h,e.name),Qt(p,e.name);const K=new yt({uid:g,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:R,photoURL:o,phoneNumber:s,tenantId:c,stsTokenManager:F,createdAt:h,lastLoginAt:p});return N&&Array.isArray(N)&&(K.providerData=N.map(ie=>({...ie}))),l&&(K._redirectEventId=l),K}static async _fromIdTokenResponse(e,t,r=!1){const i=new Zn;i.updateFromServerResponse(t);const s=new yt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await As(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ce(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Eh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,c=new Zn;c.updateFromIdToken(r);const l=new yt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new po(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,h),l}}/**
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
 */const i1=new Map;function Cn(n){ws(n instanceof Function,"Expected a class definition");let e=i1.get(n);return e?(ws(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,i1.set(n,e),e)}/**
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
 */class Th{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Th.type="NONE";const s1=Th;/**
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
 */function Qa(n,e,t){return`firebase:${n}:${e}:${t}`}class er{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qa("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Es(this.auth,{idToken:e}).catch(()=>{});return t?yt._fromGetAccountInfoResponse(this.auth,t,e):null}return yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new er(Cn(s1),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Cn(s1);const o=Qa(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const p=await h._get(o);if(p){let g;if(typeof p=="string"){const m=await Es(e,{idToken:p}).catch(()=>{});if(!m)break;g=await yt._fromGetAccountInfoResponse(e,m,p)}else g=yt._fromJSON(e,p);h!==s&&(c=g),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new er(s,e,r):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new er(s,e,r))}}/**
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
 */function a1(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(V0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(N0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(M0(e))return"Blackberry";if(F0(e))return"Webos";if(O0(e))return"Safari";if((e.includes("chrome/")||D0(e))&&!e.includes("edge/"))return"Chrome";if(L0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function N0(n=vt()){return/firefox\//i.test(n)}function O0(n=vt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function D0(n=vt()){return/crios\//i.test(n)}function V0(n=vt()){return/iemobile/i.test(n)}function L0(n=vt()){return/android/i.test(n)}function M0(n=vt()){return/blackberry/i.test(n)}function F0(n=vt()){return/webos/i.test(n)}/**
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
 */function Ah(n,e=[]){let t;switch(n){case"Browser":t=a1(vt());break;case"Worker":t=`${a1(vt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gs}/${r}`}/**
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
 */class U0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function z0(n,e={}){return _n(n,"GET","/v2/passwordPolicy",Fn(n,e))}/**
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
 */const B0=6;class $0{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??B0,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class q0{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new o1(this),this.idTokenSubscription=new o1(this),this.beforeStateQueue=new U0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await er.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Es(this,{idToken:e}),r=await yt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(xt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===o)&&c?.user&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await As(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=g0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(Pn(this));const t=e?tt(e):null;return t&&ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await z0(this),t=new $0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await k0(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cn(e)||this._popupRedirectResolver;ce(t,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[Cn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ah(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&d0(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Ii(n){return tt(n)}class o1{constructor(e){this.auth=e,this.observer=null,this.addObserver=x2(t=>this.observer=t)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $o={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function j0(n){$o=n}function H0(n){return $o.loadJS(n)}function G0(){return $o.recaptchaEnterpriseScript}class W0{constructor(){this.enterprise=new K0}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class K0{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Y0="recaptcha-enterprise",Ih="NO_RECAPTCHA",c1="onFirebaseAuthREInstanceReady";class Jt{constructor(e){this.type=Y0,this.auth=Ii(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{A0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new T0(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function i(s,o,c){const l=window.grecaptcha;n1(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(Ih)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new W0().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(async c=>{if(!t&&n1(window.grecaptcha)&&Jt.scriptInjectionDeferred)await Jt.scriptInjectionDeferred.promise,i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=G0();l.length!==0&&(l+=c+`&onload=${c1}`),Jt.scriptInjectionDeferred=new Vu,window[c1]=()=>{Jt.scriptInjectionDeferred?.resolve()},H0(l).then(()=>Jt.scriptInjectionDeferred?.promise).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}Jt.scriptInjectionDeferred=null;async function l1(n,e,t,r=!1,i=!1){const s=new Jt(n);let o;if(i)o=Ih;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function fo(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await l1(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await l1(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}/**
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
 */function Q0(n,e){const t=dr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(rr(s,e??{}))return i;ir(i,"already-initialized")}return t.initialize({options:e})}function X0(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Cn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}/**
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
 */class J0{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,t){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}async function Z0(n,e){return _n(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function eg(n,e){return Ys(n,"POST","/v1/accounts:signInWithPassword",Fn(n,e))}/**
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
 */async function tg(n,e){return Ys(n,"POST","/v1/accounts:signInWithEmailLink",Fn(n,e))}async function ng(n,e){return Ys(n,"POST","/v1/accounts:signInWithEmailLink",Fn(n,e))}/**
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
 */class ri extends J0{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ri(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ri(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fo(e,t,"signInWithPassword",eg);case"emailLink":return tg(e,{email:this._email,oobCode:this._password});default:ir(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fo(e,r,"signUpPassword",Z0);case"emailLink":return ng(e,{idToken:t,email:this._email,oobCode:this._password});default:ir(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */function rg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ig(n){const e=Ur(zr(n)).link,t=e?Ur(zr(e)).deep_link_id:null,r=Ur(zr(n)).deep_link_id;return(r?Ur(zr(r)).link:null)||r||t||e||n}class qo{constructor(e){const t=Ur(zr(e)),r=t.apiKey??null,i=t.oobCode??null,s=rg(t.mode??null);ce(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=ig(e);try{return new qo(t)}catch{return null}}}/**
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
 */class pr{constructor(){this.providerId=pr.PROVIDER_ID}static credential(e,t){return ri._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=qo.parseLink(t);return ce(r,"argument-error"),ri._fromEmailAndCode(e,r.code,r.tenantId)}}pr.PROVIDER_ID="password";pr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */async function sg(n,e){return Ys(n,"POST","/v1/accounts:signUp",Fn(n,e))}/**
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
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await yt._fromIdTokenResponse(e,r,i),o=u1(r);return new ii({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=u1(r);return new ii({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function u1(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Is extends Tt{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Is.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Is(e,t,r,i)}}function ag(n,e,t,r){return t._getIdTokenResponse(n).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Is._fromErrorAndOperation(n,s,e,r):s})}/**
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
 */async function og(n,e,t=!1){if(xt(n.app))return Promise.reject(Pn(n));const r="signIn",i=await ag(n,r,e),s=await ii._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function cg(n,e){return og(Ii(n),e)}/**
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
 */async function bh(n){const e=Ii(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function lg(n,e,t){if(xt(n.app))return Promise.reject(Pn(n));const r=Ii(n),o=await fo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sg).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&bh(n),l}),c=await ii._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function ug(n,e,t){return xt(n.app)?Promise.reject(Pn(n)):cg(tt(n),pr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bh(n),r})}/**
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
 */async function hg(n,e){return _n(n,"POST","/v1/accounts:update",e)}/**
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
 */async function dg(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=tt(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Ts(r,hg(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function pg(n){return tt(n).signOut()}const h1="__sak";/**
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
 */function fg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Qs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async h=>h(t.origin,s)),l=await fg(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qs.receivers=[];/**
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
 */function gg(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class mg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const h=gg("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(m.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function d1(){return window}/**
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
 */function xh(){return typeof d1().WorkerGlobalScope<"u"&&typeof d1().importScripts=="function"}async function yg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _g(){return navigator?.serviceWorker?.controller||null}function vg(){return xh()?self:null}/**
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
 */const Sh="firebaseLocalStorageDb",wg=1,bs="firebaseLocalStorage",Ch="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xs(n,e){return n.transaction([bs],e?"readwrite":"readonly").objectStore(bs)}function Eg(){const n=indexedDB.deleteDatabase(Sh);return new bi(n).toPromise()}function Rh(){const n=indexedDB.open(Sh,wg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(bs,{keyPath:Ch})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(bs)?e(r):(r.close(),await Eg(),e(await Rh()))})})}async function p1(n,e,t){const r=Xs(n,!0).put({[Ch]:e,value:t});return new bi(r).toPromise()}async function Tg(n,e){const t=Xs(n,!1).get(e),r=await new bi(t).toPromise();return r===void 0?null:r.value}function f1(n,e){const t=Xs(n,!0).delete(e);return new bi(t).toPromise()}const Ag=800,Ig=3;class Ph{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Rh(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ig)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return xh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qs._getInstance(vg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await yg(),!this.activeServiceWorker)return;this.sender=new mg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_g()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await p1(e,h1,"1"),await f1(e,h1)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>p1(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Tg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>f1(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xs(i,!1).getAll();return new bi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ag)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ph.type="LOCAL";const bg=Ph;new Ai(3e4,6e4);/**
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
 */new Ai(2e3,1e4);/**
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
 */new Ai(3e4,6e4);/**
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
 */new Ai(5e3,15e3);var g1="@firebase/auth",m1="1.13.3";/**
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
 */class xg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cg(n){kt(new wt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ah(n)},h=new q0(r,i,s,l);return X0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),kt(new wt("auth-internal",e=>{const t=Ii(e.getProvider("auth").getImmediate());return(r=>new xg(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(g1,m1,Sg(n)),ft(g1,m1,"esm2020")}/**
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
 */const Rg=5*60;g2("authIdTokenMaxAge");function Pg(){return document.getElementsByTagName("head")?.[0]??document}j0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=zo("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Pg().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Cg("Browser");var y1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rn,kh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function w(){}w.prototype=y.prototype,I.F=y.prototype,I.prototype=new w,I.prototype.constructor=I,I.D=function(b,A,C){for(var v=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)v[Qe-2]=arguments[Qe];return y.prototype[A].apply(b,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,w){w||(w=0);const b=Array(16);if(typeof y=="string")for(var A=0;A<16;++A)b[A]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(A=0;A<16;++A)b[A]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=I.g[0],w=I.g[1],A=I.g[2];let C=I.g[3],v;v=y+(C^w&(A^C))+b[0]+3614090360&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(A^y&(w^A))+b[1]+3905402710&4294967295,C=y+(v<<12&4294967295|v>>>20),v=A+(w^C&(y^w))+b[2]+606105819&4294967295,A=C+(v<<17&4294967295|v>>>15),v=w+(y^A&(C^y))+b[3]+3250441966&4294967295,w=A+(v<<22&4294967295|v>>>10),v=y+(C^w&(A^C))+b[4]+4118548399&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(A^y&(w^A))+b[5]+1200080426&4294967295,C=y+(v<<12&4294967295|v>>>20),v=A+(w^C&(y^w))+b[6]+2821735955&4294967295,A=C+(v<<17&4294967295|v>>>15),v=w+(y^A&(C^y))+b[7]+4249261313&4294967295,w=A+(v<<22&4294967295|v>>>10),v=y+(C^w&(A^C))+b[8]+1770035416&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(A^y&(w^A))+b[9]+2336552879&4294967295,C=y+(v<<12&4294967295|v>>>20),v=A+(w^C&(y^w))+b[10]+4294925233&4294967295,A=C+(v<<17&4294967295|v>>>15),v=w+(y^A&(C^y))+b[11]+2304563134&4294967295,w=A+(v<<22&4294967295|v>>>10),v=y+(C^w&(A^C))+b[12]+1804603682&4294967295,y=w+(v<<7&4294967295|v>>>25),v=C+(A^y&(w^A))+b[13]+4254626195&4294967295,C=y+(v<<12&4294967295|v>>>20),v=A+(w^C&(y^w))+b[14]+2792965006&4294967295,A=C+(v<<17&4294967295|v>>>15),v=w+(y^A&(C^y))+b[15]+1236535329&4294967295,w=A+(v<<22&4294967295|v>>>10),v=y+(A^C&(w^A))+b[1]+4129170786&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^A&(y^w))+b[6]+3225465664&4294967295,C=y+(v<<9&4294967295|v>>>23),v=A+(y^w&(C^y))+b[11]+643717713&4294967295,A=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(A^C))+b[0]+3921069994&4294967295,w=A+(v<<20&4294967295|v>>>12),v=y+(A^C&(w^A))+b[5]+3593408605&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^A&(y^w))+b[10]+38016083&4294967295,C=y+(v<<9&4294967295|v>>>23),v=A+(y^w&(C^y))+b[15]+3634488961&4294967295,A=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(A^C))+b[4]+3889429448&4294967295,w=A+(v<<20&4294967295|v>>>12),v=y+(A^C&(w^A))+b[9]+568446438&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^A&(y^w))+b[14]+3275163606&4294967295,C=y+(v<<9&4294967295|v>>>23),v=A+(y^w&(C^y))+b[3]+4107603335&4294967295,A=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(A^C))+b[8]+1163531501&4294967295,w=A+(v<<20&4294967295|v>>>12),v=y+(A^C&(w^A))+b[13]+2850285829&4294967295,y=w+(v<<5&4294967295|v>>>27),v=C+(w^A&(y^w))+b[2]+4243563512&4294967295,C=y+(v<<9&4294967295|v>>>23),v=A+(y^w&(C^y))+b[7]+1735328473&4294967295,A=C+(v<<14&4294967295|v>>>18),v=w+(C^y&(A^C))+b[12]+2368359562&4294967295,w=A+(v<<20&4294967295|v>>>12),v=y+(w^A^C)+b[5]+4294588738&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^A)+b[8]+2272392833&4294967295,C=y+(v<<11&4294967295|v>>>21),v=A+(C^y^w)+b[11]+1839030562&4294967295,A=C+(v<<16&4294967295|v>>>16),v=w+(A^C^y)+b[14]+4259657740&4294967295,w=A+(v<<23&4294967295|v>>>9),v=y+(w^A^C)+b[1]+2763975236&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^A)+b[4]+1272893353&4294967295,C=y+(v<<11&4294967295|v>>>21),v=A+(C^y^w)+b[7]+4139469664&4294967295,A=C+(v<<16&4294967295|v>>>16),v=w+(A^C^y)+b[10]+3200236656&4294967295,w=A+(v<<23&4294967295|v>>>9),v=y+(w^A^C)+b[13]+681279174&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^A)+b[0]+3936430074&4294967295,C=y+(v<<11&4294967295|v>>>21),v=A+(C^y^w)+b[3]+3572445317&4294967295,A=C+(v<<16&4294967295|v>>>16),v=w+(A^C^y)+b[6]+76029189&4294967295,w=A+(v<<23&4294967295|v>>>9),v=y+(w^A^C)+b[9]+3654602809&4294967295,y=w+(v<<4&4294967295|v>>>28),v=C+(y^w^A)+b[12]+3873151461&4294967295,C=y+(v<<11&4294967295|v>>>21),v=A+(C^y^w)+b[15]+530742520&4294967295,A=C+(v<<16&4294967295|v>>>16),v=w+(A^C^y)+b[2]+3299628645&4294967295,w=A+(v<<23&4294967295|v>>>9),v=y+(A^(w|~C))+b[0]+4096336452&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~A))+b[7]+1126891415&4294967295,C=y+(v<<10&4294967295|v>>>22),v=A+(y^(C|~w))+b[14]+2878612391&4294967295,A=C+(v<<15&4294967295|v>>>17),v=w+(C^(A|~y))+b[5]+4237533241&4294967295,w=A+(v<<21&4294967295|v>>>11),v=y+(A^(w|~C))+b[12]+1700485571&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~A))+b[3]+2399980690&4294967295,C=y+(v<<10&4294967295|v>>>22),v=A+(y^(C|~w))+b[10]+4293915773&4294967295,A=C+(v<<15&4294967295|v>>>17),v=w+(C^(A|~y))+b[1]+2240044497&4294967295,w=A+(v<<21&4294967295|v>>>11),v=y+(A^(w|~C))+b[8]+1873313359&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~A))+b[15]+4264355552&4294967295,C=y+(v<<10&4294967295|v>>>22),v=A+(y^(C|~w))+b[6]+2734768916&4294967295,A=C+(v<<15&4294967295|v>>>17),v=w+(C^(A|~y))+b[13]+1309151649&4294967295,w=A+(v<<21&4294967295|v>>>11),v=y+(A^(w|~C))+b[4]+4149444226&4294967295,y=w+(v<<6&4294967295|v>>>26),v=C+(w^(y|~A))+b[11]+3174756917&4294967295,C=y+(v<<10&4294967295|v>>>22),v=A+(y^(C|~w))+b[2]+718787259&4294967295,A=C+(v<<15&4294967295|v>>>17),v=w+(C^(A|~y))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(A+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.v=function(I,y){y===void 0&&(y=I.length);const w=y-this.blockSize,b=this.C;let A=this.h,C=0;for(;C<y;){if(A==0)for(;C<=w;)i(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<y;)if(b[A++]=I.charCodeAt(C++),A==this.blockSize){i(this,b),A=0;break}}else for(;C<y;)if(b[A++]=I[C++],A==this.blockSize){i(this,b),A=0;break}}this.h=A,this.o+=y},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;y=this.o*8;for(var w=I.length-8;w<I.length;++w)I[w]=y&255,y/=256;for(this.v(I),I=Array(16),y=0,w=0;w<4;++w)for(let b=0;b<32;b+=8)I[y++]=this.g[w]>>>b&255;return I};function s(I,y){var w=c;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=y(I)}function o(I,y){this.h=y;const w=[];let b=!0;for(let A=I.length-1;A>=0;A--){const C=I[A]|0;b&&C==y||(w[A]=C,b=!1)}this.g=w}var c={};function l(I){return-128<=I&&I<128?s(I,function(y){return new o([y|0],y<0?-1:0)}):new o([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return g;if(I<0)return F(h(-I));const y=[];let w=1;for(let b=0;I>=w;b++)y[b]=I/w|0,w*=4294967296;return new o(y,0)}function p(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return F(p(I.substring(1),y));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(y,8));let b=g;for(let C=0;C<I.length;C+=8){var A=Math.min(8,I.length-C);const v=parseInt(I.substring(C,C+A),y);A<8?(A=h(Math.pow(y,A)),b=b.j(A).add(h(v))):(b=b.j(w),b=b.add(h(v)))}return b}var g=l(0),m=l(1),R=l(16777216);n=o.prototype,n.m=function(){if(L(this))return-F(this).m();let I=0,y=1;for(let w=0;w<this.g.length;w++){const b=this.i(w);I+=(b>=0?b:4294967296+b)*y,y*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(N(this))return"0";if(L(this))return"-"+F(this).toString(I);const y=h(Math.pow(I,6));var w=this;let b="";for(;;){const A=Ee(w,y).g;w=K(w,A.j(y));let C=((w.g.length>0?w.g[0]:w.h)>>>0).toString(I);if(w=A,N(w))return C+b;for(;C.length<6;)C="0"+C;b=C+b}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function N(I){if(I.h!=0)return!1;for(let y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function L(I){return I.h==-1}n.l=function(I){return I=K(this,I),L(I)?-1:N(I)?0:1};function F(I){const y=I.g.length,w=[];for(let b=0;b<y;b++)w[b]=~I.g[b];return new o(w,~I.h).add(m)}n.abs=function(){return L(this)?F(this):this},n.add=function(I){const y=Math.max(this.g.length,I.g.length),w=[];let b=0;for(let A=0;A<=y;A++){let C=b+(this.i(A)&65535)+(I.i(A)&65535),v=(C>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);b=v>>>16,C&=65535,v&=65535,w[A]=v<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function K(I,y){return I.add(F(y))}n.j=function(I){if(N(this)||N(I))return g;if(L(this))return L(I)?F(this).j(F(I)):F(F(this).j(I));if(L(I))return F(this.j(F(I)));if(this.l(R)<0&&I.l(R)<0)return h(this.m()*I.m());const y=this.g.length+I.g.length,w=[];for(var b=0;b<2*y;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(let A=0;A<I.g.length;A++){const C=this.i(b)>>>16,v=this.i(b)&65535,Qe=I.i(A)>>>16,vn=I.i(A)&65535;w[2*b+2*A]+=v*vn,ie(w,2*b+2*A),w[2*b+2*A+1]+=C*vn,ie(w,2*b+2*A+1),w[2*b+2*A+1]+=v*Qe,ie(w,2*b+2*A+1),w[2*b+2*A+2]+=C*Qe,ie(w,2*b+2*A+2)}for(I=0;I<y;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=y;I<2*y;I++)w[I]=0;return new o(w,0)};function ie(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function fe(I,y){this.g=I,this.h=y}function Ee(I,y){if(N(y))throw Error("division by zero");if(N(I))return new fe(g,g);if(L(I))return y=Ee(F(I),y),new fe(F(y.g),F(y.h));if(L(y))return y=Ee(I,F(y)),new fe(F(y.g),y.h);if(I.g.length>30){if(L(I)||L(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,b=y;b.l(I)<=0;)w=Ve(w),b=Ve(b);var A=Le(w,1),C=Le(b,1);for(b=Le(b,2),w=Le(w,2);!N(b);){var v=C.add(b);v.l(I)<=0&&(A=A.add(w),C=v),b=Le(b,1),w=Le(w,1)}return y=K(I,A.j(y)),new fe(A,y)}for(A=g;I.l(y)>=0;){for(w=Math.max(1,Math.floor(I.m()/y.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),C=h(w),v=C.j(y);L(v)||v.l(I)>0;)w-=b,C=h(w),v=C.j(y);N(C)&&(C=m),A=A.add(C),I=K(I,v)}return new fe(A,I)}n.B=function(I){return Ee(this,I).h},n.and=function(I){const y=Math.max(this.g.length,I.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)&I.i(b);return new o(w,this.h&I.h)},n.or=function(I){const y=Math.max(this.g.length,I.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)|I.i(b);return new o(w,this.h|I.h)},n.xor=function(I){const y=Math.max(this.g.length,I.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)^I.i(b);return new o(w,this.h^I.h)};function Ve(I){const y=I.g.length+1,w=[];for(let b=0;b<y;b++)w[b]=I.i(b)<<1|I.i(b-1)>>>31;return new o(w,I.h)}function Le(I,y){const w=y>>5;y%=32;const b=I.g.length-w,A=[];for(let C=0;C<b;C++)A[C]=y>0?I.i(C+w)>>>y|I.i(C+w+1)<<32-y:I.i(C+w);return new o(A,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,kh=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,rn=o}).apply(typeof y1<"u"?y1:typeof self<"u"?self:typeof window<"u"?window:{});var Ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nh,Br,Oh,ls,go,Dh,Vh,Lh;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ji=="object"&&Ji];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(a,u){if(u)e:{var d=r;a=a.split(".");for(var f=0;f<a.length-1;f++){var S=a[f];if(!(S in d))break e;d=d[S]}a=a[a.length-1],f=d[a],u=u(f),u!=f&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(u){var d=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&d.push([f,u[f]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function p(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),a.apply(this,f)}}function g(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(f,S,k){for(var U=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)U[ee-2]=arguments[ee];return u.prototype[S].apply(f,U)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function R(a){const u=a.length;if(u>0){const d=Array(u);for(let f=0;f<u;f++)d[f]=a[f];return d}return[]}function N(a,u){for(let f=1;f<arguments.length;f++){const S=arguments[f];var d=typeof S;if(d=d!="object"?d:S?Array.isArray(S)?"array":d:"null",d=="array"||d=="object"&&typeof S.length=="number"){d=a.length||0;const k=S.length||0;a.length=d+k;for(let U=0;U<k;U++)a[d+U]=S[U]}else a.push(S)}}class L{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(a){o.setTimeout(()=>{throw a},0)}function K(){var a=I;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ie{constructor(){this.h=this.g=null}add(u,d){const f=fe.get();f.set(u,d),this.h?this.h.next=f:this.g=f,this.h=f}}var fe=new L(()=>new Ee,a=>a.reset());class Ee{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,Le=!1,I=new ie,y=()=>{const a=Promise.resolve(void 0);Ve=()=>{a.then(w)}};function w(){for(var a;a=K();){try{a.h.call(a.g)}catch(d){F(d)}var u=fe;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}Le=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function v(a){return/^[\s\xa0]*$/.test(a)}function Qe(a,u){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}g(Qe,A),Qe.prototype.init=function(a,u){const d=this.type=a.type,f=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Qe.Z.h.call(this)},Qe.prototype.h=function(){Qe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var vn="closure_listenable_"+(Math.random()*1e6|0),Ip=0;function bp(a,u,d,f,S){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!f,this.ha=S,this.key=++Ip,this.da=this.fa=!1}function Li(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Mi(a,u,d){for(const f in a)u.call(d,a[f],f,a)}function xp(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function Vc(a){const u={};for(const d in a)u[d]=a[d];return u}const Lc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mc(a,u){let d,f;for(let S=1;S<arguments.length;S++){f=arguments[S];for(d in f)a[d]=f[d];for(let k=0;k<Lc.length;k++)d=Lc[k],Object.prototype.hasOwnProperty.call(f,d)&&(a[d]=f[d])}}function Fi(a){this.src=a,this.g={},this.h=0}Fi.prototype.add=function(a,u,d,f,S){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const U=_a(a,u,f,S);return U>-1?(u=a[U],d||(u.fa=!1)):(u=new bp(u,this.src,k,!!f,S),u.fa=d,a.push(u)),u};function ya(a,u){const d=u.type;if(d in a.g){var f=a.g[d],S=Array.prototype.indexOf.call(f,u,void 0),k;(k=S>=0)&&Array.prototype.splice.call(f,S,1),k&&(Li(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function _a(a,u,d,f){for(let S=0;S<a.length;++S){const k=a[S];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==f)return S}return-1}var va="closure_lm_"+(Math.random()*1e6|0),wa={};function Fc(a,u,d,f,S){if(Array.isArray(u)){for(let k=0;k<u.length;k++)Fc(a,u[k],d,f,S);return null}return d=Bc(d),a&&a[vn]?a.J(u,d,c(f)?!!f.capture:!1,S):Sp(a,u,d,!1,f,S)}function Sp(a,u,d,f,S,k){if(!u)throw Error("Invalid event type");const U=c(S)?!!S.capture:!!S;let ee=Ta(a);if(ee||(a[va]=ee=new Fi(a)),d=ee.add(u,d,f,U,k),d.proxy)return d;if(f=Cp(),d.proxy=f,f.src=a,f.listener=d,a.addEventListener)C||(S=U),S===void 0&&(S=!1),a.addEventListener(u.toString(),f,S);else if(a.attachEvent)a.attachEvent(zc(u.toString()),f);else if(a.addListener&&a.removeListener)a.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Cp(){function a(d){return u.call(a.src,a.listener,d)}const u=Rp;return a}function Uc(a,u,d,f,S){if(Array.isArray(u))for(var k=0;k<u.length;k++)Uc(a,u[k],d,f,S);else f=c(f)?!!f.capture:!!f,d=Bc(d),a&&a[vn]?(a=a.i,k=String(u).toString(),k in a.g&&(u=a.g[k],d=_a(u,d,f,S),d>-1&&(Li(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[k],a.h--)))):a&&(a=Ta(a))&&(u=a.g[u.toString()],a=-1,u&&(a=_a(u,d,f,S)),(d=a>-1?u[a]:null)&&Ea(d))}function Ea(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[vn])ya(u.i,a);else{var d=a.type,f=a.proxy;u.removeEventListener?u.removeEventListener(d,f,a.capture):u.detachEvent?u.detachEvent(zc(d),f):u.addListener&&u.removeListener&&u.removeListener(f),(d=Ta(u))?(ya(d,a),d.h==0&&(d.src=null,u[va]=null)):Li(a)}}}function zc(a){return a in wa?wa[a]:wa[a]="on"+a}function Rp(a,u){if(a.da)a=!0;else{u=new Qe(u,this);const d=a.listener,f=a.ha||a.src;a.fa&&Ea(a),a=d.call(f,u)}return a}function Ta(a){return a=a[va],a instanceof Fi?a:null}var Aa="__closure_events_fn_"+(Math.random()*1e9>>>0);function Bc(a){return typeof a=="function"?a:(a[Aa]||(a[Aa]=function(u){return a.handleEvent(u)}),a[Aa])}function ze(){b.call(this),this.i=new Fi(this),this.M=this,this.G=null}g(ze,b),ze.prototype[vn]=!0,ze.prototype.removeEventListener=function(a,u,d,f){Uc(this,a,u,d,f)};function Ge(a,u){var d,f=a.G;if(f)for(d=[];f;f=f.G)d.push(f);if(a=a.M,f=u.type||u,typeof u=="string")u=new A(u,a);else if(u instanceof A)u.target=u.target||a;else{var S=u;u=new A(f,a),Mc(u,S)}S=!0;let k,U;if(d)for(U=d.length-1;U>=0;U--)k=u.g=d[U],S=Ui(k,f,!0,u)&&S;if(k=u.g=a,S=Ui(k,f,!0,u)&&S,S=Ui(k,f,!1,u)&&S,d)for(U=0;U<d.length;U++)k=u.g=d[U],S=Ui(k,f,!1,u)&&S}ze.prototype.N=function(){if(ze.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let f=0;f<d.length;f++)Li(d[f]);delete a.g[u],a.h--}}this.G=null},ze.prototype.J=function(a,u,d,f){return this.i.add(String(a),u,!1,d,f)},ze.prototype.K=function(a,u,d,f){return this.i.add(String(a),u,!0,d,f)};function Ui(a,u,d,f){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let S=!0;for(let k=0;k<u.length;++k){const U=u[k];if(U&&!U.da&&U.capture==d){const ee=U.listener,Se=U.ha||U.src;U.fa&&ya(a.i,U),S=ee.call(Se,f)!==!1&&S}}return S&&!f.defaultPrevented}function Pp(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function $c(a){a.g=Pp(()=>{a.g=null,a.i&&(a.i=!1,$c(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class kp extends b{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:$c(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Er(a){b.call(this),this.h=a,this.g={}}g(Er,b);var qc=[];function jc(a){Mi(a.g,function(u,d){this.g.hasOwnProperty(d)&&Ea(u)},a),a.g={}}Er.prototype.N=function(){Er.Z.N.call(this),jc(this)},Er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ia=o.JSON.stringify,Np=o.JSON.parse,Op=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Hc(){}function Gc(){}var Tr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ba(){A.call(this,"d")}g(ba,A);function xa(){A.call(this,"c")}g(xa,A);var wn={},Wc=null;function zi(){return Wc=Wc||new ze}wn.Ia="serverreachability";function Kc(a){A.call(this,wn.Ia,a)}g(Kc,A);function Ar(a){const u=zi();Ge(u,new Kc(u))}wn.STAT_EVENT="statevent";function Yc(a,u){A.call(this,wn.STAT_EVENT,a),this.stat=u}g(Yc,A);function We(a){const u=zi();Ge(u,new Yc(u,a))}wn.Ja="timingevent";function Qc(a,u){A.call(this,wn.Ja,a),this.size=u}g(Qc,A);function Ir(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function br(){this.g=!0}br.prototype.ua=function(){this.g=!1};function Dp(a,u,d,f,S,k){a.info(function(){if(a.g)if(k){var U="",ee=k.split("&");for(let ue=0;ue<ee.length;ue++){var Se=ee[ue].split("=");if(Se.length>1){const Ne=Se[0];Se=Se[1];const It=Ne.split("_");U=It.length>=2&&It[1]=="type"?U+(Ne+"="+Se+"&"):U+(Ne+"=redacted&")}}}else U=null;else U=k;return"XMLHTTP REQ ("+f+") [attempt "+S+"]: "+u+`
`+d+`
`+U})}function Vp(a,u,d,f,S,k,U){a.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+S+"]: "+u+`
`+d+`
`+k+" "+U})}function jn(a,u,d,f){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Mp(a,d)+(f?" "+f:"")})}function Lp(a,u){a.info(function(){return"TIMEOUT: "+u})}br.prototype.info=function(){};function Mp(a,u){if(!a.g)return u;if(!u)return null;try{const k=JSON.parse(u);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var d=k[a];if(!(d.length<2)){var f=d[1];if(Array.isArray(f)&&!(f.length<1)){var S=f[0];if(S!="noop"&&S!="stop"&&S!="close")for(let U=1;U<f.length;U++)f[U]=""}}}}return Ia(k)}catch{return u}}var Bi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xc={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Jc;function Sa(){}g(Sa,Hc),Sa.prototype.g=function(){return new XMLHttpRequest},Jc=new Sa;function xr(a){return encodeURIComponent(String(a))}function Fp(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function jt(a,u,d,f){this.j=a,this.i=u,this.l=d,this.S=f||1,this.V=new Er(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zc}function Zc(){this.i=null,this.g="",this.h=!1}var el={},Ca={};function Ra(a,u,d){a.M=1,a.A=qi(At(u)),a.u=d,a.R=!0,tl(a,null)}function tl(a,u){a.F=Date.now(),$i(a),a.B=At(a.A);var d=a.B,f=a.S;Array.isArray(f)||(f=[String(f)]),fl(d.i,"t",f),a.C=0,d=a.j.L,a.h=new Zc,a.g=Nl(a.j,d?u:null,!a.u),a.P>0&&(a.O=new kp(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,f=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(qc[0]=S.toString()),S=qc);for(let k=0;k<S.length;k++){const U=Fc(d,S[k],f||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=a.J?Vc(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Ar(),Dp(a.i,a.v,a.B,a.l,a.S,a.u)}jt.prototype.ba=function(a){a=a.target;const u=this.O;u&&Wt(a)==3?u.j():this.Y(a)},jt.prototype.Y=function(a){try{if(a==this.g)e:{const ee=Wt(this.g),Se=this.g.ya(),ue=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||El(this.g)))){this.K||ee!=4||Se==7||(Se==8||ue<=0?Ar(3):Ar(2)),Pa(this);var u=this.g.ca();this.X=u;var d=Up(this);if(this.o=u==200,Vp(this.i,this.v,this.B,this.l,this.S,ee,u),this.o){if(this.U&&!this.L){t:{if(this.g){var f,S=this.g;if((f=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(f)){var k=f;break t}}k=null}if(a=k)jn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ka(this,a);else{this.o=!1,this.m=3,We(12),En(this),Sr(this);break e}}if(this.R){a=!0;let Ne;for(;!this.K&&this.C<d.length;)if(Ne=zp(this,d),Ne==Ca){ee==4&&(this.m=4,We(14),a=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==el){this.m=4,We(15),jn(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else jn(this.i,this.l,Ne,null),ka(this,Ne);if(nl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||d.length!=0||this.h.h||(this.m=1,We(16),a=!1),this.o=this.o&&a,!a)jn(this.i,this.l,d,"[Invalid Chunked Response]"),En(this),Sr(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ua(U),U.P=!0,We(11))}}else jn(this.i,this.l,d,null),ka(this,d);ee==4&&En(this),this.o&&!this.K&&(ee==4?Cl(this.j,this):(this.o=!1,$i(this)))}else e2(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,We(12)):(this.m=0,We(13)),En(this),Sr(this)}}}catch{}finally{}};function Up(a){if(!nl(a))return a.g.la();const u=El(a.g);if(u==="")return"";let d="";const f=u.length,S=Wt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return En(a),Sr(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<f;k++)a.h.h=!0,d+=a.h.i.decode(u[k],{stream:!(S&&k==f-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function nl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function zp(a,u){var d=a.C,f=u.indexOf(`
`,d);return f==-1?Ca:(d=Number(u.substring(d,f)),isNaN(d)?el:(f+=1,f+d>u.length?Ca:(u=u.slice(f,f+d),a.C=f+d,u)))}jt.prototype.cancel=function(){this.K=!0,En(this)};function $i(a){a.T=Date.now()+a.H,rl(a,a.H)}function rl(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ir(h(a.aa,a),u)}function Pa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}jt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Lp(this.i,this.B),this.M!=2&&(Ar(),We(17)),En(this),this.m=2,Sr(this)):rl(this,this.T-a)};function Sr(a){a.j.I==0||a.K||Cl(a.j,a)}function En(a){Pa(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,jc(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function ka(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||Na(d.h,a))){if(!a.L&&Na(d.h,a)&&d.I==3){try{var f=d.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var S=f;if(S[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Ki(d),Gi(d);else break e;Fa(d),We(18)}}else d.xa=S[1],0<d.xa-d.K&&S[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ir(h(d.Va,d),6e3));al(d.h)<=1&&d.ta&&(d.ta=void 0)}else An(d,11)}else if((a.L||d.g==a)&&Ki(d),!v(u))for(S=d.Ba.g.parse(u),u=0;u<S.length;u++){let ue=S[u];const Ne=ue[0];if(!(Ne<=d.K))if(d.K=Ne,ue=ue[1],d.I==2)if(ue[0]=="c"){d.M=ue[1],d.ba=ue[2];const It=ue[3];It!=null&&(d.ka=It,d.j.info("VER="+d.ka));const In=ue[4];In!=null&&(d.za=In,d.j.info("SVER="+d.za));const Kt=ue[5];Kt!=null&&typeof Kt=="number"&&Kt>0&&(f=1.5*Kt,d.O=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const Yt=a.g;if(Yt){const Qi=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qi){var k=f.h;k.g||Qi.indexOf("spdy")==-1&&Qi.indexOf("quic")==-1&&Qi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Oa(k,k.h),k.h=null))}if(f.G){const za=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;za&&(f.wa=za,he(f.J,f.G,za))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),f=d;var U=a;if(f.na=kl(f,f.L?f.ba:null,f.W),U.L){ol(f.h,U);var ee=U,Se=f.O;Se&&(ee.H=Se),ee.D&&(Pa(ee),$i(ee)),f.g=U}else xl(f);d.i.length>0&&Wi(d)}else ue[0]!="stop"&&ue[0]!="close"||An(d,7);else d.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?An(d,7):Ma(d):ue[0]!="noop"&&d.l&&d.l.qa(ue),d.A=0)}}Ar(4)}catch{}}var Bp=class{constructor(a,u){this.g=a,this.map=u}};function il(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function sl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function al(a){return a.h?1:a.g?a.g.size:0}function Na(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Oa(a,u){a.g?a.g.add(u):a.h=u}function ol(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}il.prototype.cancel=function(){if(this.i=cl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function cl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return R(a.i)}var ll=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $p(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const f=a[d].indexOf("=");let S,k=null;f>=0?(S=a[d].substring(0,f),k=a[d].substring(f+1)):S=a[d],u(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Ht(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Ht?(this.l=a.l,Cr(this,a.j),this.o=a.o,this.g=a.g,Rr(this,a.u),this.h=a.h,Da(this,gl(a.i)),this.m=a.m):a&&(u=String(a).match(ll))?(this.l=!1,Cr(this,u[1]||"",!0),this.o=Pr(u[2]||""),this.g=Pr(u[3]||"",!0),Rr(this,u[4]),this.h=Pr(u[5]||"",!0),Da(this,u[6]||"",!0),this.m=Pr(u[7]||"")):(this.l=!1,this.i=new Nr(null,this.l))}Ht.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(kr(u,ul,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(kr(u,ul,!0),"@"),a.push(xr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(kr(d,d.charAt(0)=="/"?Hp:jp,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",kr(d,Wp)),a.join("")},Ht.prototype.resolve=function(a){const u=At(this);let d=!!a.j;d?Cr(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var f=a.h;if(d)Rr(u,a.u);else if(d=!!a.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var S=u.h.lastIndexOf("/");S!=-1&&(f=u.h.slice(0,S+1)+f)}if(S=f,S==".."||S==".")f="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){f=S.lastIndexOf("/",0)==0,S=S.split("/");const k=[];for(let U=0;U<S.length;){const ee=S[U++];ee=="."?f&&U==S.length&&k.push(""):ee==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),f&&U==S.length&&k.push("")):(k.push(ee),f=!0)}f=k.join("/")}else f=S}return d?u.h=f:d=a.i.toString()!=="",d?Da(u,gl(a.i)):d=!!a.m,d&&(u.m=a.m),u};function At(a){return new Ht(a)}function Cr(a,u,d){a.j=d?Pr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Rr(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Da(a,u,d){u instanceof Nr?(a.i=u,Kp(a.i,a.l)):(d||(u=kr(u,Gp)),a.i=new Nr(u,a.l))}function he(a,u,d){a.i.set(u,d)}function qi(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Pr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function kr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,qp),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ul=/[#\/\?@]/g,jp=/[#\?:]/g,Hp=/[#\?]/g,Gp=/[#\?@]/g,Wp=/#/g;function Nr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Tn(a){a.g||(a.g=new Map,a.h=0,a.i&&$p(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Nr.prototype,n.add=function(a,u){Tn(this),this.i=null,a=Hn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function hl(a,u){Tn(a),u=Hn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function dl(a,u){return Tn(a),u=Hn(a,u),a.g.has(u)}n.forEach=function(a,u){Tn(this),this.g.forEach(function(d,f){d.forEach(function(S){a.call(u,S,f,this)},this)},this)};function pl(a,u){Tn(a);let d=[];if(typeof u=="string")dl(a,u)&&(d=d.concat(a.g.get(Hn(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}n.set=function(a,u){return Tn(this),this.i=null,a=Hn(this,a),dl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=pl(this,a),a.length>0?String(a[0]):u):u};function fl(a,u,d){hl(a,u),d.length>0&&(a.i=null,a.g.set(Hn(a,u),R(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var d=u[f];const S=xr(d);d=pl(this,d);for(let k=0;k<d.length;k++){let U=S;d[k]!==""&&(U+="="+xr(d[k])),a.push(U)}}return this.i=a.join("&")};function gl(a){const u=new Nr;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Hn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Kp(a,u){u&&!a.j&&(Tn(a),a.i=null,a.g.forEach(function(d,f){const S=f.toLowerCase();f!=S&&(hl(this,f),fl(this,S,d))},a)),a.j=u}function Yp(a,u){const d=new br;if(o.Image){const f=new Image;f.onload=p(Gt,d,"TestLoadImage: loaded",!0,u,f),f.onerror=p(Gt,d,"TestLoadImage: error",!1,u,f),f.onabort=p(Gt,d,"TestLoadImage: abort",!1,u,f),f.ontimeout=p(Gt,d,"TestLoadImage: timeout",!1,u,f),o.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=a}else u(!1)}function Qp(a,u){const d=new br,f=new AbortController,S=setTimeout(()=>{f.abort(),Gt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:f.signal}).then(k=>{clearTimeout(S),k.ok?Gt(d,"TestPingServer: ok",!0,u):Gt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Gt(d,"TestPingServer: error",!1,u)})}function Gt(a,u,d,f,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),f(d)}catch{}}function Xp(){this.g=new Op}function Va(a){this.i=a.Sb||null,this.h=a.ab||!1}g(Va,Hc),Va.prototype.g=function(){return new ji(this.i,this.h)};function ji(a,u){ze.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(ji,ze),n=ji.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Dr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Or(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Dr(this)),this.g&&(this.readyState=3,Dr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ml(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function ml(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Or(this):Dr(this),this.readyState==3&&ml(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Or(this))},n.Na=function(a){this.g&&(this.response=a,Or(this))},n.ga=function(){this.g&&Or(this)};function Or(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Dr(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Dr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function yl(a){let u="";return Mi(a,function(d,f){u+=f,u+=":",u+=d,u+=`\r
`}),u}function La(a,u,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=yl(d),typeof a=="string"?d!=null&&xr(d):he(a,u,d))}function _e(a){ze.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(_e,ze);var Jp=/^https?$/i,Zp=["POST","PUT"];n=_e.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Jc.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){_l(this,k);return}if(a=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var S in f)d.set(S,f[S]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const k of f.keys())d.set(k,f.get(k));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Zp,u,void 0)>=0)||f||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,U]of d)this.g.setRequestHeader(k,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){_l(this,k)}};function _l(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,vl(a),Hi(a)}function vl(a){a.A||(a.A=!0,Ge(a,"complete"),Ge(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ge(this,"complete"),Ge(this,"abort"),Hi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hi(this,!0)),_e.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?wl(this):this.Xa())},n.Xa=function(){wl(this)};function wl(a){if(a.h&&typeof s<"u"){if(a.v&&Wt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ge(a,"readystatechange"),Wt(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var f;if(f=k===0){let U=String(a.D).match(ll)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),f=!Jp.test(U?U.toLowerCase():"")}d=f}if(d)Ge(a,"complete"),Ge(a,"success");else{a.o=6;try{var S=Wt(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",vl(a)}}finally{Hi(a)}}}}function Hi(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||Ge(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Wt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Wt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Np(u)}};function El(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function e2(a){const u={};a=(a.g&&Wt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<a.length;f++){if(v(a[f]))continue;var d=Fp(a[f]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[S]||[];u[S]=k,k.push(d)}xp(u,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vr(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Tl(a){this.za=0,this.i=[],this.j=new br,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Vr("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Vr("baseRetryDelayMs",5e3,a),this.Za=Vr("retryDelaySeedMs",1e4,a),this.Ta=Vr("forwardChannelMaxRetries",2,a),this.va=Vr("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new il(a&&a.concurrentRequestLimit),this.Ba=new Xp,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Tl.prototype,n.ka=8,n.I=1,n.connect=function(a,u,d,f){We(0),this.W=a,this.H=u||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.J=kl(this,null,this.W),Wi(this)};function Ma(a){if(Al(a),a.I==3){var u=a.V++,d=At(a.J);if(he(d,"SID",a.M),he(d,"RID",u),he(d,"TYPE","terminate"),Lr(a,d),u=new jt(a,a.j,u),u.M=2,u.A=qi(At(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Nl(u.j,null),u.g.ea(u.A)),u.F=Date.now(),$i(u)}Pl(a)}function Gi(a){a.g&&(Ua(a),a.g.cancel(),a.g=null)}function Al(a){Gi(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ki(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Wi(a){if(!sl(a.h)&&!a.m){a.m=!0;var u=a.Ea;Ve||y(),Le||(Ve(),Le=!0),I.add(u,a),a.D=0}}function t2(a,u){return al(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ir(h(a.Ea,a,u),Rl(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new jt(this,this.j,a);let k=this.o;if(this.U&&(k?(k=Vc(k),Mc(k,this.U)):k=this.U),this.u!==null||this.R||(S.J=k,k=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=bl(this,S,u),d=At(this.J),he(d,"RID",a),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),Lr(this,d),k&&(this.R?u="headers="+xr(yl(k))+"&"+u:this.u&&La(d,this.u,k)),Oa(this.h,S),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",u),he(d,"SID","null"),S.U=!0,Ra(S,d,null)):Ra(S,d,u),this.I=2}}else this.I==3&&(a?Il(this,a):this.i.length==0||sl(this.h)||Il(this))};function Il(a,u){var d;u?d=u.l:d=a.V++;const f=At(a.J);he(f,"SID",a.M),he(f,"RID",d),he(f,"AID",a.K),Lr(a,f),a.u&&a.o&&La(f,a.u,a.o),d=new jt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=bl(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Oa(a.h,d),Ra(d,f,u)}function Lr(a,u){a.H&&Mi(a.H,function(d,f){he(u,f,d)}),a.l&&Mi({},function(d,f){he(u,f,d)})}function bl(a,u,d){d=Math.min(a.i.length,d);const f=a.l?h(a.l.Ka,a.l,a):null;e:{var S=a.i;let ee=-1;for(;;){const Se=["count="+d];ee==-1?d>0?(ee=S[0].g,Se.push("ofs="+ee)):ee=0:Se.push("ofs="+ee);let ue=!0;for(let Ne=0;Ne<d;Ne++){var k=S[Ne].g;const It=S[Ne].map;if(k-=ee,k<0)ee=Math.max(0,S[Ne].g-100),ue=!1;else try{k="req"+k+"_"||"";try{var U=It instanceof Map?It:Object.entries(It);for(const[In,Kt]of U){let Yt=Kt;c(Kt)&&(Yt=Ia(Kt)),Se.push(k+In+"="+encodeURIComponent(Yt))}}catch(In){throw Se.push(k+"type="+encodeURIComponent("_badmap")),In}}catch{f&&f(It)}}if(ue){U=Se.join("&");break e}}U=void 0}return a=a.i.splice(0,d),u.G=a,U}function xl(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;Ve||y(),Le||(Ve(),Le=!0),I.add(u,a),a.A=0}}function Fa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ir(h(a.Da,a),Rl(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Sl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ir(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,We(10),Gi(this),Sl(this))};function Ua(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Sl(a){a.g=new jt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=At(a.na);he(u,"RID","rpc"),he(u,"SID",a.M),he(u,"AID",a.K),he(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(u,"TO",a.ia),he(u,"TYPE","xmlhttp"),Lr(a,u),a.u&&a.o&&La(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=qi(At(u)),d.u=null,d.R=!0,tl(d,a)}n.Va=function(){this.C!=null&&(this.C=null,Gi(this),Fa(this),We(19))};function Ki(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Cl(a,u){var d=null;if(a.g==u){Ki(a),Ua(a),a.g=null;var f=2}else if(Na(a.h,u))d=u.G,ol(a.h,u),f=1;else return;if(a.I!=0){if(u.o)if(f==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var S=a.D;f=zi(),Ge(f,new Qc(f,d)),Wi(a)}else xl(a);else if(S=u.m,S==3||S==0&&u.X>0||!(f==1&&t2(a,u)||f==2&&Fa(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),S){case 1:An(a,5);break;case 4:An(a,10);break;case 3:An(a,6);break;default:An(a,2)}}}function Rl(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function An(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),f=a.Ua;const S=!f;f=new Ht(f||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Cr(f,"https"),qi(f),S?Yp(f.toString(),d):Qp(f.toString(),d)}else We(2);a.I=0,a.l&&a.l.pa(u),Pl(a),Al(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function Pl(a){if(a.I=0,a.ja=[],a.l){const u=cl(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ja,u),N(a.ja,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.oa()}}function kl(a,u,d){var f=d instanceof Ht?At(d):new Ht(d);if(f.g!="")u&&(f.g=u+"."+f.g),Rr(f,f.u);else{var S=o.location;f=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;const k=new Ht(null);f&&Cr(k,f),u&&(k.g=u),S&&Rr(k,S),d&&(k.h=d),f=k}return d=a.G,u=a.wa,d&&u&&he(f,d,u),he(f,"VER",a.ka),Lr(a,f),f}function Nl(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new _e(new Va({ab:d})):new _e(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ol(){}n=Ol.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Yi(){}Yi.prototype.g=function(a,u){return new st(a,u)};function st(a,u){ze.call(this),this.g=new Tl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!v(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!v(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Gn(this)}g(st,ze),st.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},st.prototype.close=function(){Ma(this.g)},st.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ia(a),a=d);u.i.push(new Bp(u.Ya++,a)),u.I==3&&Wi(u)},st.prototype.N=function(){this.g.l=null,delete this.j,Ma(this.g),delete this.g,st.Z.N.call(this)};function Dl(a){ba.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}g(Dl,ba);function Vl(){xa.call(this),this.status=1}g(Vl,xa);function Gn(a){this.g=a}g(Gn,Ol),Gn.prototype.ra=function(){Ge(this.g,"a")},Gn.prototype.qa=function(a){Ge(this.g,new Dl(a))},Gn.prototype.pa=function(a){Ge(this.g,new Vl)},Gn.prototype.oa=function(){Ge(this.g,"b")},Yi.prototype.createWebChannel=Yi.prototype.g,st.prototype.send=st.prototype.o,st.prototype.open=st.prototype.m,st.prototype.close=st.prototype.close,Lh=function(){return new Yi},Vh=function(){return zi()},Dh=wn,go={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Bi.NO_ERROR=0,Bi.TIMEOUT=8,Bi.HTTP_ERROR=6,ls=Bi,Xc.COMPLETE="complete",Oh=Xc,Gc.EventType=Tr,Tr.OPEN="a",Tr.CLOSE="b",Tr.ERROR="c",Tr.MESSAGE="d",ze.prototype.listen=ze.prototype.J,Br=Gc,_e.prototype.listenOnce=_e.prototype.K,_e.prototype.getLastError=_e.prototype.Ha,_e.prototype.getLastErrorCode=_e.prototype.ya,_e.prototype.getStatus=_e.prototype.ca,_e.prototype.getResponseJson=_e.prototype.La,_e.prototype.getResponseText=_e.prototype.la,_e.prototype.send=_e.prototype.ea,_e.prototype.setWithCredentials=_e.prototype.Fa,Nh=_e}).apply(typeof Ji<"u"?Ji:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */class z{static FOLD_CASE=1;static LITERAL=2;static CLASS_NL=4;static DOT_NL=8;static ONE_LINE=16;static NON_GREEDY=32;static PERL_X=64;static UNICODE_GROUPS=128;static WAS_DOLLAR=256;static MATCH_NL=z.CLASS_NL|z.DOT_NL;static PERL=z.CLASS_NL|z.ONE_LINE|z.PERL_X|z.UNICODE_GROUPS;static POSIX=0;static UNANCHORED=0;static ANCHOR_START=1;static ANCHOR_BOTH=2}class P{static CODES=new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]);static toUpperCase(e){const t=String.fromCodePoint(e).toUpperCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toLowerCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){const t=String.fromCodePoint(e).toLowerCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toUpperCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}}class _{static CASE_ORBIT=new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]]);static C=[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]];static Cc=[[0,31,1],[127,159,1]];static Cf=[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]];static Co=[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]];static Cs=[[55296,57343,1]];static L=[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static foldL=[[837,837,1]];static Ll=[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]];static foldLl=[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]];static Lm=[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]];static Lo=[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static Lt=[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]];static foldLt=[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]];static Lu=[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]];static Upper=this.Lu;static foldLu=[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]];static M=[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]];static foldM=[[921,953,32],[8126,8126,1]];static Mc=[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]];static Me=[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]];static Mn=[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]];static foldMn=[[921,953,32],[8126,8126,1]];static N=[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]];static Nd=[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]];static Nl=[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]];static No=[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]];static P=[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]];static Pc=[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]];static Pd=[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]];static Pe=[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]];static Pf=[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]];static Pi=[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]];static Po=[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]];static Ps=[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]];static S=[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]];static Sc=[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]];static Sk=[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]];static Sm=[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]];static So=[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]];static Z=[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]];static Zl=[[8232,8232,1]];static Zp=[[8233,8233,1]];static Zs=[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]];static Adlam=[[125184,125259,1],[125264,125273,1],[125278,125279,1]];static Ahom=[[71424,71450,1],[71453,71467,1],[71472,71494,1]];static Anatolian_Hieroglyphs=[[82944,83526,1]];static Arabic=[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]];static Armenian=[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]];static Avestan=[[68352,68405,1],[68409,68415,1]];static Balinese=[[6912,6988,1],[6992,7038,1]];static Bamum=[[42656,42743,1],[92160,92728,1]];static Bassa_Vah=[[92880,92909,1],[92912,92917,1]];static Batak=[[7104,7155,1],[7164,7167,1]];static Bengali=[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]];static Bhaiksuki=[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]];static Bopomofo=[[746,747,1],[12549,12591,1],[12704,12735,1]];static Brahmi=[[69632,69709,1],[69714,69749,1],[69759,69759,1]];static Braille=[[10240,10495,1]];static Buginese=[[6656,6683,1],[6686,6687,1]];static Buhid=[[5952,5971,1]];static Canadian_Aboriginal=[[5120,5759,1],[6320,6389,1],[72368,72383,1]];static Carian=[[66208,66256,1]];static Caucasian_Albanian=[[66864,66915,1],[66927,66927,1]];static Chakma=[[69888,69940,1],[69942,69959,1]];static Cham=[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]];static Cherokee=[[5024,5109,1],[5112,5117,1],[43888,43967,1]];static Chorasmian=[[69552,69579,1]];static Common=[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]];static foldCommon=[[924,956,32]];static Coptic=[[994,1007,1],[11392,11507,1],[11513,11519,1]];static Cuneiform=[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]];static Cypriot=[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]];static Cypro_Minoan=[[77712,77810,1]];static Cyrillic=[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]];static Deseret=[[66560,66639,1]];static Devanagari=[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]];static Dives_Akuru=[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]];static Dogra=[[71680,71739,1]];static Duployan=[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]];static Egyptian_Hieroglyphs=[[77824,78933,1]];static Elbasan=[[66816,66855,1]];static Elymaic=[[69600,69622,1]];static Ethiopic=[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]];static Georgian=[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]];static Glagolitic=[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]];static Gothic=[[66352,66378,1]];static Grantha=[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]];static Greek=[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]];static foldGreek=[[181,837,656]];static Gujarati=[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]];static Gunjala_Gondi=[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]];static Gurmukhi=[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]];static Han=[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static Hangul=[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]];static Hanifi_Rohingya=[[68864,68903,1],[68912,68921,1]];static Hanunoo=[[5920,5940,1]];static Hatran=[[67808,67826,1],[67828,67829,1],[67835,67839,1]];static Hebrew=[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]];static Hiragana=[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]];static Imperial_Aramaic=[[67648,67669,1],[67671,67679,1]];static Inherited=[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]];static foldInherited=[[921,953,32],[8126,8126,1]];static Inscriptional_Pahlavi=[[68448,68466,1],[68472,68479,1]];static Inscriptional_Parthian=[[68416,68437,1],[68440,68447,1]];static Javanese=[[43392,43469,1],[43472,43481,1],[43486,43487,1]];static Kaithi=[[69760,69826,1],[69837,69837,1]];static Kannada=[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]];static Katakana=[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]];static Kawi=[[73472,73488,1],[73490,73530,1],[73534,73561,1]];static Kayah_Li=[[43264,43309,1],[43311,43311,1]];static Kharoshthi=[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]];static Khitan_Small_Script=[[94180,101120,6940],[101121,101589,1]];static Khmer=[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]];static Khojki=[[70144,70161,1],[70163,70209,1]];static Khudawadi=[[70320,70378,1],[70384,70393,1]];static Lao=[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]];static Latin=[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]];static Lepcha=[[7168,7223,1],[7227,7241,1],[7245,7247,1]];static Limbu=[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]];static Linear_A=[[67072,67382,1],[67392,67413,1],[67424,67431,1]];static Linear_B=[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]];static Lisu=[[42192,42239,1],[73648,73648,1]];static Lycian=[[66176,66204,1]];static Lydian=[[67872,67897,1],[67903,67903,1]];static Mahajani=[[69968,70006,1]];static Makasar=[[73440,73464,1]];static Malayalam=[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]];static Mandaic=[[2112,2139,1],[2142,2142,1]];static Manichaean=[[68288,68326,1],[68331,68342,1]];static Marchen=[[72816,72847,1],[72850,72871,1],[72873,72886,1]];static Masaram_Gondi=[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]];static Medefaidrin=[[93760,93850,1]];static Meetei_Mayek=[[43744,43766,1],[43968,44013,1],[44016,44025,1]];static Mende_Kikakui=[[124928,125124,1],[125127,125142,1]];static Meroitic_Cursive=[[68e3,68023,1],[68028,68047,1],[68050,68095,1]];static Meroitic_Hieroglyphs=[[67968,67999,1]];static Miao=[[93952,94026,1],[94031,94087,1],[94095,94111,1]];static Modi=[[71168,71236,1],[71248,71257,1]];static Mongolian=[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]];static Mro=[[92736,92766,1],[92768,92777,1],[92782,92783,1]];static Multani=[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]];static Myanmar=[[4096,4255,1],[43488,43518,1],[43616,43647,1]];static Nabataean=[[67712,67742,1],[67751,67759,1]];static Nag_Mundari=[[124112,124153,1]];static Nandinagari=[[72096,72103,1],[72106,72151,1],[72154,72164,1]];static New_Tai_Lue=[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]];static Newa=[[70656,70747,1],[70749,70753,1]];static Nko=[[1984,2042,1],[2045,2047,1]];static Nushu=[[94177,110960,16783],[110961,111355,1]];static Nyiakeng_Puachue_Hmong=[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]];static Ogham=[[5760,5788,1]];static Ol_Chiki=[[7248,7295,1]];static Old_Hungarian=[[68736,68786,1],[68800,68850,1],[68858,68863,1]];static Old_Italic=[[66304,66339,1],[66349,66351,1]];static Old_North_Arabian=[[68224,68255,1]];static Old_Permic=[[66384,66426,1]];static Old_Persian=[[66464,66499,1],[66504,66517,1]];static Old_Sogdian=[[69376,69415,1]];static Old_South_Arabian=[[68192,68223,1]];static Old_Turkic=[[68608,68680,1]];static Old_Uyghur=[[69488,69513,1]];static Oriya=[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]];static Osage=[[66736,66771,1],[66776,66811,1]];static Osmanya=[[66688,66717,1],[66720,66729,1]];static Pahawh_Hmong=[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]];static Palmyrene=[[67680,67711,1]];static Pau_Cin_Hau=[[72384,72440,1]];static Phags_Pa=[[43072,43127,1]];static Phoenician=[[67840,67867,1],[67871,67871,1]];static Psalter_Pahlavi=[[68480,68497,1],[68505,68508,1],[68521,68527,1]];static Rejang=[[43312,43347,1],[43359,43359,1]];static Runic=[[5792,5866,1],[5870,5880,1]];static Samaritan=[[2048,2093,1],[2096,2110,1]];static Saurashtra=[[43136,43205,1],[43214,43225,1]];static Sharada=[[70016,70111,1]];static Shavian=[[66640,66687,1]];static Siddham=[[71040,71093,1],[71096,71133,1]];static SignWriting=[[120832,121483,1],[121499,121503,1],[121505,121519,1]];static Sinhala=[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]];static Sogdian=[[69424,69465,1]];static Sora_Sompeng=[[69840,69864,1],[69872,69881,1]];static Soyombo=[[72272,72354,1]];static Sundanese=[[7040,7103,1],[7360,7367,1]];static Syloti_Nagri=[[43008,43052,1]];static Syriac=[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]];static Tagalog=[[5888,5909,1],[5919,5919,1]];static Tagbanwa=[[5984,5996,1],[5998,6e3,1],[6002,6003,1]];static Tai_Le=[[6480,6509,1],[6512,6516,1]];static Tai_Tham=[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]];static Tai_Viet=[[43648,43714,1],[43739,43743,1]];static Takri=[[71296,71353,1],[71360,71369,1]];static Tamil=[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]];static Tangsa=[[92784,92862,1],[92864,92873,1]];static Tangut=[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]];static Telugu=[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]];static Thaana=[[1920,1969,1]];static Thai=[[3585,3642,1],[3648,3675,1]];static Tibetan=[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]];static Tifinagh=[[11568,11623,1],[11631,11632,1],[11647,11647,1]];static Tirhuta=[[70784,70855,1],[70864,70873,1]];static Toto=[[123536,123566,1]];static Ugaritic=[[66432,66461,1],[66463,66463,1]];static Vai=[[42240,42539,1]];static Vithkuqi=[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]];static Wancho=[[123584,123641,1],[123647,123647,1]];static Warang_Citi=[[71840,71922,1],[71935,71935,1]];static Yezidi=[[69248,69289,1],[69291,69293,1],[69296,69297,1]];static Yi=[[40960,42124,1],[42128,42182,1]];static Zanabazar_Square=[[72192,72263,1]];static CATEGORIES=new Map([["C",_.C],["Cc",_.Cc],["Cf",_.Cf],["Co",_.Co],["Cs",_.Cs],["L",_.L],["Ll",_.Ll],["Lm",_.Lm],["Lo",_.Lo],["Lt",_.Lt],["Lu",_.Lu],["M",_.M],["Mc",_.Mc],["Me",_.Me],["Mn",_.Mn],["N",_.N],["Nd",_.Nd],["Nl",_.Nl],["No",_.No],["P",_.P],["Pc",_.Pc],["Pd",_.Pd],["Pe",_.Pe],["Pf",_.Pf],["Pi",_.Pi],["Po",_.Po],["Ps",_.Ps],["S",_.S],["Sc",_.Sc],["Sk",_.Sk],["Sm",_.Sm],["So",_.So],["Z",_.Z],["Zl",_.Zl],["Zp",_.Zp],["Zs",_.Zs]]);static SCRIPTS=new Map([["Adlam",_.Adlam],["Ahom",_.Ahom],["Anatolian_Hieroglyphs",_.Anatolian_Hieroglyphs],["Arabic",_.Arabic],["Armenian",_.Armenian],["Avestan",_.Avestan],["Balinese",_.Balinese],["Bamum",_.Bamum],["Bassa_Vah",_.Bassa_Vah],["Batak",_.Batak],["Bengali",_.Bengali],["Bhaiksuki",_.Bhaiksuki],["Bopomofo",_.Bopomofo],["Brahmi",_.Brahmi],["Braille",_.Braille],["Buginese",_.Buginese],["Buhid",_.Buhid],["Canadian_Aboriginal",_.Canadian_Aboriginal],["Carian",_.Carian],["Caucasian_Albanian",_.Caucasian_Albanian],["Chakma",_.Chakma],["Cham",_.Cham],["Cherokee",_.Cherokee],["Chorasmian",_.Chorasmian],["Common",_.Common],["Coptic",_.Coptic],["Cuneiform",_.Cuneiform],["Cypriot",_.Cypriot],["Cypro_Minoan",_.Cypro_Minoan],["Cyrillic",_.Cyrillic],["Deseret",_.Deseret],["Devanagari",_.Devanagari],["Dives_Akuru",_.Dives_Akuru],["Dogra",_.Dogra],["Duployan",_.Duployan],["Egyptian_Hieroglyphs",_.Egyptian_Hieroglyphs],["Elbasan",_.Elbasan],["Elymaic",_.Elymaic],["Ethiopic",_.Ethiopic],["Georgian",_.Georgian],["Glagolitic",_.Glagolitic],["Gothic",_.Gothic],["Grantha",_.Grantha],["Greek",_.Greek],["Gujarati",_.Gujarati],["Gunjala_Gondi",_.Gunjala_Gondi],["Gurmukhi",_.Gurmukhi],["Han",_.Han],["Hangul",_.Hangul],["Hanifi_Rohingya",_.Hanifi_Rohingya],["Hanunoo",_.Hanunoo],["Hatran",_.Hatran],["Hebrew",_.Hebrew],["Hiragana",_.Hiragana],["Imperial_Aramaic",_.Imperial_Aramaic],["Inherited",_.Inherited],["Inscriptional_Pahlavi",_.Inscriptional_Pahlavi],["Inscriptional_Parthian",_.Inscriptional_Parthian],["Javanese",_.Javanese],["Kaithi",_.Kaithi],["Kannada",_.Kannada],["Katakana",_.Katakana],["Kawi",_.Kawi],["Kayah_Li",_.Kayah_Li],["Kharoshthi",_.Kharoshthi],["Khitan_Small_Script",_.Khitan_Small_Script],["Khmer",_.Khmer],["Khojki",_.Khojki],["Khudawadi",_.Khudawadi],["Lao",_.Lao],["Latin",_.Latin],["Lepcha",_.Lepcha],["Limbu",_.Limbu],["Linear_A",_.Linear_A],["Linear_B",_.Linear_B],["Lisu",_.Lisu],["Lycian",_.Lycian],["Lydian",_.Lydian],["Mahajani",_.Mahajani],["Makasar",_.Makasar],["Malayalam",_.Malayalam],["Mandaic",_.Mandaic],["Manichaean",_.Manichaean],["Marchen",_.Marchen],["Masaram_Gondi",_.Masaram_Gondi],["Medefaidrin",_.Medefaidrin],["Meetei_Mayek",_.Meetei_Mayek],["Mende_Kikakui",_.Mende_Kikakui],["Meroitic_Cursive",_.Meroitic_Cursive],["Meroitic_Hieroglyphs",_.Meroitic_Hieroglyphs],["Miao",_.Miao],["Modi",_.Modi],["Mongolian",_.Mongolian],["Mro",_.Mro],["Multani",_.Multani],["Myanmar",_.Myanmar],["Nabataean",_.Nabataean],["Nag_Mundari",_.Nag_Mundari],["Nandinagari",_.Nandinagari],["New_Tai_Lue",_.New_Tai_Lue],["Newa",_.Newa],["Nko",_.Nko],["Nushu",_.Nushu],["Nyiakeng_Puachue_Hmong",_.Nyiakeng_Puachue_Hmong],["Ogham",_.Ogham],["Ol_Chiki",_.Ol_Chiki],["Old_Hungarian",_.Old_Hungarian],["Old_Italic",_.Old_Italic],["Old_North_Arabian",_.Old_North_Arabian],["Old_Permic",_.Old_Permic],["Old_Persian",_.Old_Persian],["Old_Sogdian",_.Old_Sogdian],["Old_South_Arabian",_.Old_South_Arabian],["Old_Turkic",_.Old_Turkic],["Old_Uyghur",_.Old_Uyghur],["Oriya",_.Oriya],["Osage",_.Osage],["Osmanya",_.Osmanya],["Pahawh_Hmong",_.Pahawh_Hmong],["Palmyrene",_.Palmyrene],["Pau_Cin_Hau",_.Pau_Cin_Hau],["Phags_Pa",_.Phags_Pa],["Phoenician",_.Phoenician],["Psalter_Pahlavi",_.Psalter_Pahlavi],["Rejang",_.Rejang],["Runic",_.Runic],["Samaritan",_.Samaritan],["Saurashtra",_.Saurashtra],["Sharada",_.Sharada],["Shavian",_.Shavian],["Siddham",_.Siddham],["SignWriting",_.SignWriting],["Sinhala",_.Sinhala],["Sogdian",_.Sogdian],["Sora_Sompeng",_.Sora_Sompeng],["Soyombo",_.Soyombo],["Sundanese",_.Sundanese],["Syloti_Nagri",_.Syloti_Nagri],["Syriac",_.Syriac],["Tagalog",_.Tagalog],["Tagbanwa",_.Tagbanwa],["Tai_Le",_.Tai_Le],["Tai_Tham",_.Tai_Tham],["Tai_Viet",_.Tai_Viet],["Takri",_.Takri],["Tamil",_.Tamil],["Tangsa",_.Tangsa],["Tangut",_.Tangut],["Telugu",_.Telugu],["Thaana",_.Thaana],["Thai",_.Thai],["Tibetan",_.Tibetan],["Tifinagh",_.Tifinagh],["Tirhuta",_.Tirhuta],["Toto",_.Toto],["Ugaritic",_.Ugaritic],["Vai",_.Vai],["Vithkuqi",_.Vithkuqi],["Wancho",_.Wancho],["Warang_Citi",_.Warang_Citi],["Yezidi",_.Yezidi],["Yi",_.Yi],["Zanabazar_Square",_.Zanabazar_Square]]);static FOLD_CATEGORIES=new Map([["L",_.foldL],["Ll",_.foldLl],["Lt",_.foldLt],["Lu",_.foldLu],["M",_.foldM],["Mn",_.foldMn]]);static FOLD_SCRIPT=new Map([["Common",_.foldCommon],["Greek",_.foldGreek],["Inherited",_.foldInherited]])}class Z{static MAX_RUNE=1114111;static MAX_ASCII=127;static MAX_LATIN1=255;static MAX_BMP=65535;static MIN_FOLD=65;static MAX_FOLD=125251;static is32(e,t){let r=0,i=e.length;for(;r<i;){let s=r+Math.floor((i-r)/2),o=e[s];if(o[0]<=t&&t<=o[1])return(t-o[0])%o[2]===0;t<o[0]?i=s:r=s+1}return!1}static is(e,t){if(t<=this.MAX_LATIN1){for(let r of e)if(!(t>r[1]))return t<r[0]?!1:(t-r[0])%r[2]===0;return!1}return e.length>0&&t>=e[0][0]&&this.is32(e,t)}static isUpper(e){if(e<=this.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return this.is(_.Upper,e)}static isPrint(e){return e<=this.MAX_LATIN1?e>=32&&e<127||e>=161&&e!==173:this.is(_.L,e)||this.is(_.M,e)||this.is(_.N,e)||this.is(_.P,e)||this.is(_.S,e)}static simpleFold(e){if(_.CASE_ORBIT.has(e))return _.CASE_ORBIT.get(e);const t=P.toLowerCase(e);return t!==e?t:P.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e<0||t<0||e===t)return!0;if(e<=this.MAX_ASCII&&t<=this.MAX_ASCII)return P.CODES.get("A")<=e&&e<=P.CODES.get("Z")&&(e|=32),P.CODES.get("A")<=t&&t<=P.CODES.get("Z")&&(t|=32),e===t;for(let r=this.simpleFold(e);r!==e;r=this.simpleFold(r))if(r===t)return!0;return!1}}class oe{static METACHARACTERS="\\.+*?()|[]{}^$";static EMPTY_BEGIN_LINE=1;static EMPTY_END_LINE=2;static EMPTY_BEGIN_TEXT=4;static EMPTY_END_TEXT=8;static EMPTY_WORD_BOUNDARY=16;static EMPTY_NO_WORD_BOUNDARY=32;static EMPTY_ALL=-1;static emptyInts(){return[]}static isalnum(e){return P.CODES.get("0")<=e&&e<=P.CODES.get("9")||P.CODES.get("a")<=e&&e<=P.CODES.get("z")||P.CODES.get("A")<=e&&e<=P.CODES.get("Z")}static unhex(e){return P.CODES.get("0")<=e&&e<=P.CODES.get("9")?e-P.CODES.get("0"):P.CODES.get("a")<=e&&e<=P.CODES.get("f")?e-P.CODES.get("a")+10:P.CODES.get("A")<=e&&e<=P.CODES.get("F")?e-P.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(Z.isPrint(e))this.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case P.CODES.get('"'):t+='\\"';break;case P.CODES.get("\\"):t+="\\\\";break;case P.CODES.get("	"):t+="\\t";break;case P.CODES.get(`
`):t+="\\n";break;case P.CODES.get("\r"):t+="\\r";break;case P.CODES.get("\b"):t+="\\b";break;case P.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){return String(e).split("").map(t=>t.codePointAt(0))}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return P.CODES.get("a")<=e&&e<=P.CODES.get("z")||P.CODES.get("A")<=e&&e<=P.CODES.get("Z")||P.CODES.get("0")<=e&&e<=P.CODES.get("9")||e===P.CODES.get("_")}static emptyOpContext(e,t){let r=0;return e<0&&(r|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),e===P.CODES.get(`
`)&&(r|=this.EMPTY_BEGIN_LINE),t<0&&(r|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),t===P.CODES.get(`
`)&&(r|=this.EMPTY_END_LINE),this.isWordRune(e)!==this.isWordRune(t)?r|=this.EMPTY_WORD_BOUNDARY:r|=this.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>this.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>Z.MAX_BMP?2:1}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(e));{let t=[],r=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[r++]=s:s<2048?(t[r++]=s>>6|192,t[r++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[r++]=s>>18|240,t[r++]=s>>12&63|128,t[r++]=s>>6&63|128,t[r++]=s&63|128):(t[r++]=s>>12|224,t[r++]=s>>6&63|128,t[r++]=s&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(e));{let t=[],r=0,i=0;for(;r<e.length;){let s=e[r++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){let o=e[r++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){let o=e[r++],c=e[r++],l=e[r++],h=((s&7)<<18|(o&63)<<12|(c&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(h&1023))}else{let o=e[r++],c=e[r++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|c&63)}}return t.join("")}}}const Mh=(n=[],e=0)=>{const t={};for(let r=0;r<n.length;r++){const i=n[r],s=e+r;t[i]=s,t[s]=i}return Object.freeze(t)};class Bt{static Encoding=Mh(["UTF_16","UTF_8"]);getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===Bt.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===Bt.Encoding.UTF_16}}class _1 extends Bt{constructor(e=null){super(),this.bytes=e}getEncoding(){return Bt.Encoding.UTF_8}asCharSequence(){return oe.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class kg extends Bt{constructor(e=null){super(),this.charSequence=e}getEncoding(){return Bt.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(e=>e.codePointAt(0))}length(){return this.charSequence.length}}class xs{static utf16(e){return new kg(e)}static utf8(e){return Array.isArray(e)?new _1(e):new _1(oe.stringToUtf8ByteArray(e))}}class Js extends Error{constructor(e){super(e),this.name="RE2JSException"}}class ve extends Js{constructor(e,t=null){let r=`error parsing regexp: ${e}`;t&&(r+=`: \`${t}\``),super(r),this.name="RE2JSSyntaxException",this.message=r,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}}class Ng extends Js{constructor(e){super(e),this.name="RE2JSCompileException"}}class Vt extends Js{constructor(e){super(e),this.name="RE2JSGroupException"}}class Og extends Js{constructor(e){super(e),this.name="RE2JSFlagsException"}}class Dg{static quoteReplacement(e){return e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(t=>{const r=t.codePointAt(0);return r===P.CODES["\\"]||r===P.CODES.$?`\\${t}`:t}).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,t instanceof Bt?this.resetMatcherInput(t):Array.isArray(t)?this.resetMatcherInput(xs.utf8(t)):this.resetMatcherInput(xs.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Vt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Vt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}group(e=0){if(typeof e=="string"){const i=this.namedGroups[e];if(!Number.isFinite(i))throw new Vt(`group '${e}' not found`);e=i}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new Vt(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new Vt("perhaps no match attempted");if(e===0||this.hasGroups)return;let t=this.groups[1]+1;t>this.matcherInputLength&&(t=this.matcherInputLength);const r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new Vt("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,z.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,z.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new Vt(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}return e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1]&&e++),this.genMatch(e,z.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=t,!0):!1}substring(e,t){return this.matcherInput.isUTF8Encoding()?oe.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const i=this.start(),s=this.end();return this.appendPos<i&&(r+=this.substring(this.appendPos,i)),this.appendPos=s,r+=t?this.appendReplacementInternalPerl(e):this.appendReplacementInternal(e),r}appendReplacementInternal(e){let t="",r=0;const i=e.length;for(let s=0;s<i-1;s++){if(e.codePointAt(s)===P.CODES.get("\\")){r<s&&(t+=e.substring(r,s)),s++,r=s;continue}if(e.codePointAt(s)===P.CODES.get("$")){let o=e.codePointAt(s+1);if(P.CODES.get("0")<=o&&o<=P.CODES.get("9")){let c=o-P.CODES.get("0");for(r<s&&(t+=e.substring(r,s)),s+=2;s<i&&(o=e.codePointAt(s),!(o<P.CODES.get("0")||o>P.CODES.get("9")||c*10+o-P.CODES.get("0")>this.patternGroupCount));s++)c=c*10+o-P.CODES.get("0");if(c>this.patternGroupCount)throw new Vt(`n > number of groups: ${c}`);const l=this.group(c);l!==null&&(t+=l),r=s,s--;continue}else if(o===P.CODES.get("{")){r<s&&(t+=e.substring(r,s)),s++;let c=s+1;for(;c<e.length&&e.codePointAt(c)!==P.CODES.get("}")&&e.codePointAt(c)!==P.CODES.get(" ");)c++;if(c===e.length||e.codePointAt(c)!==P.CODES.get("}"))throw new Vt("named capture group is missing trailing '}'");const l=e.substring(s+1,c);t+=this.group(l),r=c+1}}}return r<i&&(t+=e.substring(r,i)),t}appendReplacementInternalPerl(e){let t="",r=0;const i=e.length;for(let s=0;s<i-1;s++)if(e.codePointAt(s)===P.CODES.get("$")){let o=e.codePointAt(s+1);if(P.CODES.get("$")===o){r<s&&(t+=e.substring(r,s)),t+="$",s++,r=s+1;continue}else if(P.CODES.get("&")===o){r<s&&(t+=e.substring(r,s));const c=this.group(0);c!==null?t+=c:t+="$&",s++,r=s+1;continue}else if(P.CODES.get("1")<=o&&o<=P.CODES.get("9")){let c=o-P.CODES.get("0");for(r<s&&(t+=e.substring(r,s)),s+=2;s<i&&(o=e.codePointAt(s),!(o<P.CODES.get("0")||o>P.CODES.get("9")||c*10+o-P.CODES.get("0")>this.patternGroupCount));s++)c=c*10+o-P.CODES.get("0");if(c>this.patternGroupCount){t+=`$${c}`,r=s,s--;continue}const l=this.group(c);l!==null&&(t+=l),r=s,s--;continue}else if(o===P.CODES.get("<")){r<s&&(t+=e.substring(r,s)),s++;let c=s+1;for(;c<e.length&&e.codePointAt(c)!==P.CODES.get(">")&&e.codePointAt(c)!==P.CODES.get(" ");)c++;if(c===e.length||e.codePointAt(c)!==P.CODES.get(">")){t+=e.substring(s-1,c+1),r=c+1;continue}const l=e.substring(s+1,c);Object.prototype.hasOwnProperty.call(this.namedGroups,l)?t+=this.group(l):t+=`$<${l}>`,r=c+1}}return r<i&&(t+=e.substring(r,i)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let i="";for(this.reset();this.find()&&(i+=this.appendReplacement(e,r),!!t););return i+=this.appendTail(),i}}class Zt{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class Vg extends Zt{constructor(e,t=0,r=e.length){super(),this.bytes=e,this.start=t,this.end=r}step(e){if(e+=this.start,e>=this.end)return Zt.EOF();let t=this.bytes[e++]&255;return t&128?(t&224)===192?(t=t&31,e>=this.end?Zt.EOF():(t=t<<6|this.bytes[e++]&63,t<<3|2)):(t&240)===224?(t=t&15,e+1>=this.end?Zt.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|3)):(t=t&7,e+2>=this.end?Zt.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|4)):t<<3|1}index(e,t){t+=this.start;const r=this.indexOf(this.bytes,e.prefixUTF8,t);return r<0?r:r-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let i=e-1;if(t=this.bytes[i--],t>=128){let s=e-4;for(s<this.start&&(s=this.start);i>=s&&(this.bytes[i]&192)===128;)i--;i<this.start&&(i=this.start),t=this.step(i)>>3}}const r=e<this.end?this.step(e)>>3:-1;return oe.emptyOpContext(t,r)}indexOf(e,t,r=0){let i=t.length;if(i===0)return-1;let s=e.length;for(let o=r;o<=s-i;o++)for(let c=0;c<i&&e[o+c]===t[c];c++)if(c===i-1)return o;return-1}}class Lg extends Zt{constructor(e,t=0,r=e.length){super(),this.charSequence=e,this.start=t,this.end=r}step(e){if(e+=this.start,e<this.end){const t=this.charSequence.codePointAt(e);return t<<3|oe.charCount(t)}else return Zt.EOF()}index(e,t){t+=this.start;const r=this.charSequence.indexOf(e.prefix,t);return r<0?r:r-t}context(e){e+=this.start;const t=e>0&&e<=this.charSequence.length?this.charSequence.codePointAt(e-1):-1,r=e<this.charSequence.length?this.charSequence.codePointAt(e):-1;return oe.emptyOpContext(t,r)}}class we{static fromUTF8(e,t=0,r=e.length){return new Vg(e,t,r)}static fromUTF16(e,t=0,r=e.length){return new Lg(e,t,r)}}class x{static Op=Mh(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]);static isPseudoOp(e){return e>=x.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===P.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new x(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t}constructor(e){this.op=e,this.flags=0,this.subs=x.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=x.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case x.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case x.Op.EMPTY_MATCH:e+="(?:)";break;case x.Op.STAR:case x.Op.PLUS:case x.Op.QUEST:case x.Op.REPEAT:{const t=this.subs[0];switch(t.op>x.Op.CAPTURE||t.op===x.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case x.Op.STAR:e+="*";break;case x.Op.PLUS:e+="+";break;case x.Op.QUEST:e+="?";break;case x.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&z.NON_GREEDY&&(e+="?");break}case x.Op.CONCAT:{for(let t of this.subs)t.op===x.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break}case x.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case x.Op.LITERAL:this.flags&z.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=oe.escapeRune(t);this.flags&z.FOLD_CASE&&(e+=")");break;case x.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case x.Op.ANY_CHAR:e+="(?s:.)";break;case x.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==x.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case x.Op.BEGIN_TEXT:e+="\\A";break;case x.Op.END_TEXT:this.flags&z.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case x.Op.BEGIN_LINE:e+="^";break;case x.Op.END_LINE:e+="$";break;case x.Op.WORD_BOUNDARY:e+="\\b";break;case x.Op.NO_WORD_BOUNDARY:e+="\\B";break;case x.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===Z.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,i=this.runes[t+1]-1;e+=x.quoteIfHyphen(r),e+=oe.escapeRune(r),r!==i&&(e+="-",e+=x.quoteIfHyphen(i),e+=oe.escapeRune(i))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],i=this.runes[t+1];e+=x.quoteIfHyphen(r),e+=oe.escapeRune(r),r!==i&&(e+="-",e+=x.quoteIfHyphen(i),e+=oe.escapeRune(i))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===x.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof x)||this.op!==e.op)return!1;switch(this.op){case x.Op.END_TEXT:{if((this.flags&z.WAS_DOLLAR)!==(e.flags&z.WAS_DOLLAR))return!1;break}case x.Op.LITERAL:case x.Op.CHAR_CLASS:{if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break}case x.Op.ALTERNATE:case x.Op.CONCAT:{if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break}case x.Op.STAR:case x.Op.PLUS:case x.Op.QUEST:{if((this.flags&z.NON_GREEDY)!==(e.flags&z.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break}case x.Op.REPEAT:{if((this.flags&z.NON_GREEDY)!==(e.flags&z.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break}case x.Op.CAPTURE:{if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break}}return!0}}class H{static ALT=1;static ALT_MATCH=2;static CAPTURE=3;static EMPTY_WIDTH=4;static FAIL=5;static MATCH=6;static NOP=7;static RUNE=8;static RUNE1=9;static RUNE_ANY=10;static RUNE_ANY_NOT_NL=11;static isRuneOp(e){return H.RUNE<=e&&e<=H.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=oe.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=null}matchRune(e){if(this.runes.length===1){const i=this.runes[0];return this.arg&z.FOLD_CASE?Z.equalsIgnoreCase(i,e):e===i}for(let i=0;i<this.runes.length&&i<=8;i+=2){if(e<this.runes[i])return!1;if(e<=this.runes[i+1])return!0}let t=0,r=this.runes.length/2|0;for(;t<r;){const i=t+((r-t)/2|0);if(this.runes[2*i]<=e){if(e<=this.runes[2*i+1])return!0;t=i+1}else r=i}return!1}toString(){switch(this.op){case H.ALT:return`alt -> ${this.out}, ${this.arg}`;case H.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case H.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case H.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case H.MATCH:return"match";case H.FAIL:return"fail";case H.NOP:return`nop -> ${this.out}`;case H.RUNE:return this.runes===null?"rune <null>":["rune ",H.escapeRunes(this.runes),this.arg&z.FOLD_CASE?"/i":""," -> ",this.out].join("");case H.RUNE1:return`rune1 ${H.escapeRunes(this.runes)} -> ${this.out}`;case H.RUNE_ANY:return`any -> ${this.out}`;case H.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}}class Mg{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new H(e))}skipNop(e){let t=this.inst[e];for(;t.op===H.NOP||t.op===H.CAPTURE;)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!H.isRuneOp(t.op)||t.runes.length!==1)return[t.op===H.MATCH,e];for(;H.isRuneOp(t.op)&&t.runes.length===1&&!(t.arg&z.FOLD_CASE);)e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===H.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const r=this.inst[t];switch(r.op){case H.EMPTY_WIDTH:e|=r.arg;break;case H.FAIL:return-1;case H.CAPTURE:case H.NOP:break;default:break e}t=r.out}return e}next(e){const t=this.inst[e>>1];return e&1?t.arg:t.out}patch(e,t){for(;e!==0;){const r=this.inst[e>>1];e&1?(e=r.arg,r.arg=t):(e=r.out,r.out=t)}}append(e,t){if(e===0)return t;if(t===0)return e;let r=e;for(;;){const s=this.next(r);if(s===0)break;r=s}const i=this.inst[r>>1];return r&1?i.arg=t:i.out=t,e}toString(){let e="";for(let t=0;t<this.inst.length;t++){const r=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-r),e+=this.inst[t],e+=`
`}return e}}class Zi{constructor(e=0,t=0,r=!1){this.i=e,this.out=t,this.nullable=r}}class Gr{static ANY_RUNE_NOT_NL(){return[0,P.CODES.get(`
`)-1,P.CODES.get(`
`)+1,Z.MAX_RUNE]}static ANY_RUNE(){return[0,Z.MAX_RUNE]}static compileRegexp(e){const t=new Gr,r=t.compile(e);return t.prog.patch(r.out,t.newInst(H.MATCH).i),t.prog.start=r.i,t.prog}constructor(){this.prog=new Mg,this.newInst(H.FAIL)}newInst(e){return this.prog.addInst(e),new Zi(this.prog.numInst()-1,0,!0)}nop(){const e=this.newInst(H.NOP);return e.out=e.i<<1,e}fail(){return new Zi}cap(e){const t=this.newInst(H.CAPTURE);return t.out=t.i<<1,this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Zi(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(H.ALT),i=this.prog.getInst(r.i);return i.out=e.i,i.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(H.ALT),i=this.prog.getInst(r.i);return t?(i.arg=e.i,r.out=r.i<<1):(i.out=e.i,r.out=r.i<<1|1),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(H.ALT),i=this.prog.getInst(r.i);return t?(i.arg=e.i,r.out=r.i<<1):(i.out=e.i,r.out=r.i<<1|1),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Zi(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(H.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=t.i<<1,t}rune(e,t){const r=this.newInst(H.RUNE);r.nullable=!1;const i=this.prog.getInst(r.i);return i.runes=e,t&=z.FOLD_CASE,(e.length!==1||Z.simpleFold(e[0])===e[0])&&(t&=-2),i.arg=t,r.out=r.i<<1,!(t&z.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?i.op=H.RUNE1:e.length===2&&e[0]===0&&e[1]===Z.MAX_RUNE?i.op=H.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===P.CODES.get(`
`)-1&&e[2]===P.CODES.get(`
`)+1&&e[3]===Z.MAX_RUNE&&(i.op=H.RUNE_ANY_NOT_NL),r}compile(e){switch(e.op){case x.Op.NO_MATCH:return this.fail();case x.Op.EMPTY_MATCH:return this.nop();case x.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const i=this.rune([r],e.flags);t=t===null?i:this.cat(t,i)}return t}case x.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case x.Op.ANY_CHAR_NOT_NL:return this.rune(Gr.ANY_RUNE_NOT_NL(),0);case x.Op.ANY_CHAR:return this.rune(Gr.ANY_RUNE(),0);case x.Op.BEGIN_LINE:return this.empty(oe.EMPTY_BEGIN_LINE);case x.Op.END_LINE:return this.empty(oe.EMPTY_END_LINE);case x.Op.BEGIN_TEXT:return this.empty(oe.EMPTY_BEGIN_TEXT);case x.Op.END_TEXT:return this.empty(oe.EMPTY_END_TEXT);case x.Op.WORD_BOUNDARY:return this.empty(oe.EMPTY_WORD_BOUNDARY);case x.Op.NO_WORD_BOUNDARY:return this.empty(oe.EMPTY_NO_WORD_BOUNDARY);case x.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),i=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),i)}case x.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case x.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case x.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case x.Op.CONCAT:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const i=this.compile(r);t=t===null?i:this.cat(t,i)}return t}}case x.Op.ALTERNATE:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const i=this.compile(r);t=t===null?i:this.alt(t,i)}return t}}default:throw new Ng("regexp: unhandled case in compile")}}}class mt{static simplify(e){if(e===null)return null;switch(e.op){case x.Op.CAPTURE:case x.Op.CONCAT:case x.Op.ALTERNATE:{let t=e;for(let r=0;r<e.subs.length;r++){const i=e.subs[r],s=mt.simplify(i);t===e&&s!==i&&(t=x.fromRegexp(e),t.runes=null,t.subs=e.subs.slice(0,e.subs.length)),t!==e&&(t.subs[r]=s)}return t}case x.Op.STAR:case x.Op.PLUS:case x.Op.QUEST:{const t=mt.simplify(e.subs[0]);return mt.simplify1(e.op,e.flags,t,e)}case x.Op.REPEAT:{if(e.min===0&&e.max===0)return new x(x.Op.EMPTY_MATCH);const t=mt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return mt.simplify1(x.Op.STAR,e.flags,t,null);if(e.min===1)return mt.simplify1(x.Op.PLUS,e.flags,t,null);const i=new x(x.Op.CONCAT),s=[];for(let o=0;o<e.min-1;o++)s.push(t);return s.push(mt.simplify1(x.Op.PLUS,e.flags,t,null)),i.subs=s.slice(0),i}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let i=0;i<e.min;i++)r.push(t)}if(e.max>e.min){let i=mt.simplify1(x.Op.QUEST,e.flags,t,null);for(let s=e.min+1;s<e.max;s++){const o=new x(x.Op.CONCAT);o.subs=[t,i],i=mt.simplify1(x.Op.QUEST,e.flags,o,null)}if(r===null)return i;r.push(i)}if(r!==null){const i=new x(x.Op.CONCAT);return i.subs=r.slice(0),i}return new x(x.Op.NO_MATCH)}}return e}static simplify1(e,t,r,i){return r.op===x.Op.EMPTY_MATCH||e===r.op&&(t&z.NON_GREEDY)===(r.flags&z.NON_GREEDY)?r:(i!==null&&i.op===e&&(i.flags&z.NON_GREEDY)===(t&z.NON_GREEDY)&&r===i.subs[0]||(i=new x(e),i.flags=t,i.subs=[r]),i)}}class ae{constructor(e,t){this.sign=e,this.cls=t}}const v1=[48,57],w1=[9,10,12,13,32,32],E1=[48,57,65,90,95,95,97,122],T1=new Map([["\\d",new ae(1,v1)],["\\D",new ae(-1,v1)],["\\s",new ae(1,w1)],["\\S",new ae(-1,w1)],["\\w",new ae(1,E1)],["\\W",new ae(-1,E1)]]),A1=[48,57,65,90,97,122],I1=[65,90,97,122],b1=[0,127],x1=[9,9,32,32],S1=[0,31,127,127],C1=[48,57],R1=[33,126],P1=[97,122],k1=[32,126],N1=[33,47,58,64,91,96,123,126],O1=[9,13,32,32],D1=[65,90],V1=[48,57,65,90,95,95,97,122],L1=[48,57,65,70,97,102],M1=new Map([["[:alnum:]",new ae(1,A1)],["[:^alnum:]",new ae(-1,A1)],["[:alpha:]",new ae(1,I1)],["[:^alpha:]",new ae(-1,I1)],["[:ascii:]",new ae(1,b1)],["[:^ascii:]",new ae(-1,b1)],["[:blank:]",new ae(1,x1)],["[:^blank:]",new ae(-1,x1)],["[:cntrl:]",new ae(1,S1)],["[:^cntrl:]",new ae(-1,S1)],["[:digit:]",new ae(1,C1)],["[:^digit:]",new ae(-1,C1)],["[:graph:]",new ae(1,R1)],["[:^graph:]",new ae(-1,R1)],["[:lower:]",new ae(1,P1)],["[:^lower:]",new ae(-1,P1)],["[:print:]",new ae(1,k1)],["[:^print:]",new ae(-1,k1)],["[:punct:]",new ae(1,N1)],["[:^punct:]",new ae(-1,N1)],["[:space:]",new ae(1,O1)],["[:^space:]",new ae(-1,O1)],["[:upper:]",new ae(1,D1)],["[:^upper:]",new ae(-1,D1)],["[:word:]",new ae(1,V1)],["[:^word:]",new ae(-1,V1)],["[:xdigit:]",new ae(1,L1)],["[:^xdigit:]",new ae(-1,L1)]]);class $e{static charClassToString(e,t){let r="[";for(let i=0;i<t;i+=2){i>0&&(r+=" ");const s=e[i],o=e[i+1];s===o?r+=`0x${s.toString(16)}`:r+=`0x${s.toString(16)}-0x${o.toString(16)}`}return r+="]",r}static cmp(e,t,r,i){const s=e[t]-r;return s!==0?s:i-e[t+1]}static qsortIntPair(e,t,r){const i=((t+r)/2|0)&-2,s=e[i],o=e[i+1];let c=t,l=r;for(;c<=l;){for(;c<r&&$e.cmp(e,c,s,o)<0;)c+=2;for(;l>t&&$e.cmp(e,l,s,o)>0;)l-=2;if(c<=l){if(c!==l){let h=e[c];e[c]=e[l],e[l]=h,h=e[c+1],e[c+1]=e[l+1],e[l+1]=h}c+=2,l-=2}}t<l&&$e.qsortIntPair(e,t,l),c<r&&$e.qsortIntPair(e,c,r)}constructor(e=oe.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;$e.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],i=this.r[t+1];if(r<=this.r[e-1]+1){i>this.r[e-1]&&(this.r[e-1]=i);continue}this.r[e]=r,this.r[e+1]=i,e+=2}return this.len=e,this}appendLiteral(e,t){return t&z.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const i=this.r[this.len-r],s=this.r[this.len-r+1];if(e<=s+1&&i<=t+1)return e<i&&(this.r[this.len-r]=e),t>s&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=Z.MIN_FOLD&&t>=Z.MAX_FOLD)return this.appendRange(e,t);if(t<Z.MIN_FOLD||e>Z.MAX_FOLD)return this.appendRange(e,t);e<Z.MIN_FOLD&&(this.appendRange(e,Z.MIN_FOLD-1),e=Z.MIN_FOLD),t>Z.MAX_FOLD&&(this.appendRange(Z.MAX_FOLD+1,t),t=Z.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let i=Z.simpleFold(r);i!==r;i=Z.simpleFold(i))this.appendRange(i,i)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const i=e[r],s=e[r+1];t<=i-1&&this.appendRange(t,i-1),t=s+1}return t<=Z.MAX_RUNE&&this.appendRange(t,Z.MAX_RUNE),this}appendTable(e){for(let t of e){const r=t[0],i=t[1],s=t[2];if(s===1){this.appendRange(r,i);continue}for(let o=r;o<=i;o+=s)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let r of e){const i=r[0],s=r[1],o=r[2];if(o===1){t<=i-1&&this.appendRange(t,i-1),t=s+1;continue}for(let c=i;c<=s;c+=o)t<=c-1&&this.appendRange(t,c-1),t=c+1}return t<=Z.MAX_RUNE&&this.appendRange(t,Z.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const i=this.r[r],s=this.r[r+1];e<=i-1&&(this.r[t]=e,this.r[t+1]=i-1,t+=2),e=s+1}return this.len=t,e<=Z.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=Z.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new $e().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return $e.charClassToString(this.r,this.len)}}class Wr{static of(e,t){return new Wr(e,t)}constructor(e,t){this.first=e,this.second=t}}class Fg{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=oe.charCount(e),e}lookingAt(e){return this.rest().startsWith(e)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}}class Q{static ERR_INTERNAL_ERROR="regexp/syntax: internal error";static ERR_INVALID_CHAR_RANGE="invalid character class range";static ERR_INVALID_ESCAPE="invalid escape sequence";static ERR_INVALID_NAMED_CAPTURE="invalid named capture";static ERR_INVALID_PERL_OP="invalid or unsupported Perl syntax";static ERR_INVALID_REPEAT_OP="invalid nested repetition operator";static ERR_INVALID_REPEAT_SIZE="invalid repeat count";static ERR_MISSING_BRACKET="missing closing ]";static ERR_MISSING_PAREN="missing closing )";static ERR_MISSING_REPEAT_ARGUMENT="missing argument to repetition operator";static ERR_TRAILING_BACKSLASH="trailing backslash at end of expression";static ERR_DUPLICATE_NAMED_CAPTURE="duplicate capture group name";static ANY_TABLE(){return[[0,Z.MAX_RUNE,1]]}static unicodeTable(e){return e==="Any"?Wr.of(Q.ANY_TABLE(),Q.ANY_TABLE()):_.CATEGORIES.has(e)?Wr.of(_.CATEGORIES.get(e),_.FOLD_CATEGORIES.get(e)):_.SCRIPTS.has(e)?Wr.of(_.SCRIPTS.get(e),_.FOLD_SCRIPT.get(e)):null}static minFoldRune(e){if(e<Z.MIN_FOLD||e>Z.MAX_FOLD)return e;let t=e;const r=e;for(e=Z.simpleFold(e);e!==r;e=Z.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===x.Op.EMPTY_MATCH)return null;if(e.op===x.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===x.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new x(x.Op.LITERAL);return r.flags=t,r.runes=oe.stringToRunes(e),r}static parse(e,t){return new Q(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=Q.parseInt(e);if(r===-1||!e.more())return-1;let i;if(!e.lookingAt(","))i=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))i=-1;else if((i=Q.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||i===-2||i>1e3||i>=0&&r>i)throw new ve(Q.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|i&Z.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==P.CODES.get("_")&&!oe.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=P.CODES.get("0")&&e.peek()<=P.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===P.CODES.get("0")?-1:r.length>8?-2:parseFloat(r,10)}static isCharClass(e){return e.op===x.Op.LITERAL&&e.runes.length===1||e.op===x.Op.CHAR_CLASS||e.op===x.Op.ANY_CHAR_NOT_NL||e.op===x.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case x.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case x.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case x.Op.ANY_CHAR_NOT_NL:return t!==P.CODES.get(`
`);case x.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case x.Op.ANY_CHAR:break;case x.Op.ANY_CHAR_NOT_NL:Q.matchRune(t,P.CODES.get(`
`))&&(e.op=x.Op.ANY_CHAR);break;case x.Op.CHAR_CLASS:t.op===x.Op.LITERAL?e.runes=new $e(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new $e(e.runes).appendClass(t.runes).toArray();break;case x.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=x.Op.CHAR_CLASS,e.runes=new $e().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new ve(Q.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case P.CODES.get("1"):case P.CODES.get("2"):case P.CODES.get("3"):case P.CODES.get("4"):case P.CODES.get("5"):case P.CODES.get("6"):case P.CODES.get("7"):if(!e.more()||e.peek()<P.CODES.get("0")||e.peek()>P.CODES.get("7"))break;case P.CODES.get("0"):{let i=r-P.CODES.get("0");for(let s=1;s<3&&!(!e.more()||e.peek()<P.CODES.get("0")||e.peek()>P.CODES.get("7"));s++)i=i*8+e.peek()-P.CODES.get("0"),e.skip(1);return i}case P.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===P.CODES.get("{")){let o=0,c=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===P.CODES.get("}"))break;const l=oe.unhex(r);if(l<0||(c=c*16+l,c>Z.MAX_RUNE))break e;o++}if(o===0)break e;return c}const i=oe.unhex(r);if(!e.more())break;r=e.pop();const s=oe.unhex(r);if(i<0||s<0)break;return i*16+s}case P.CODES.get("a"):return P.CODES.get("\x07");case P.CODES.get("f"):return P.CODES.get("\f");case P.CODES.get("n"):return P.CODES.get(`
`);case P.CODES.get("r"):return P.CODES.get("\r");case P.CODES.get("t"):return P.CODES.get("	");case P.CODES.get("v"):return P.CODES.get("\v");default:if(!oe.isalnum(r))return r;break}throw new ve(Q.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new ve(Q.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?Q.parseEscape(e):e.pop()}static concatRunes(e,t){return[...e,...t]}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):t=new x(e),t}reuse(e){e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!x.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(e.op===x.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=x.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===x.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&Z.simpleFold(e.runes[0])===e.runes[2]&&Z.simpleFold(e.runes[2])===e.runes[0]||e.op===x.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&Z.simpleFold(e.runes[0])===e.runes[1]&&Z.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|z.FOLD_CASE))return null;e.op=x.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|z.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const i=this.stack[r-1],s=this.stack[r-2];return i.op!==x.Op.LITERAL||s.op!==x.Op.LITERAL||(i.flags&z.FOLD_CASE)!==(s.flags&z.FOLD_CASE)?!1:(s.runes=Q.concatRunes(s.runes,i.runes),e>=0?(i.runes=[e],i.flags=t,!0):(this.pop(),this.reuse(i),!1))}newLiteral(e,t){const r=this.newRegexp(x.Op.LITERAL);return r.flags=t,t&z.FOLD_CASE&&(e=Q.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,i,s,o){let c=this.flags;if(c&z.PERL_X&&(s.more()&&s.lookingAt("?")&&(s.skip(1),c^=z.NON_GREEDY),o!==-1))throw new ve(Q.ERR_INVALID_REPEAT_OP,s.from(o));const l=this.stack.length;if(l===0)throw new ve(Q.ERR_MISSING_REPEAT_ARGUMENT,s.from(i));const h=this.stack[l-1];if(x.isPseudoOp(h.op))throw new ve(Q.ERR_MISSING_REPEAT_ARGUMENT,s.from(i));const p=this.newRegexp(e);p.min=t,p.max=r,p.flags=c,p.subs=[h],this.stack[l-1]=p}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(x.Op.EMPTY_MATCH)):this.push(this.collapse(e,x.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(x.Op.NO_MATCH)):this.push(this.collapse(e,x.Op.ALTERNATE))}cleanAlt(e){e.op===x.Op.CHAR_CLASS&&(e.runes=new $e(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===Z.MAX_RUNE?(e.runes=null,e.op=x.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===P.CODES.get(`
`)-1&&e.runes[2]===P.CODES.get(`
`)+1&&e.runes[3]===Z.MAX_RUNE&&(e.runes=null,e.op=x.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let c of e)r+=c.op===t?c.subs.length:1;let i=new Array(r).fill(null),s=0;for(let c of e)c.op===t?(i.splice(s,c.subs.length,...c.subs),s+=c.subs.length,this.reuse(c)):i[s++]=c;let o=this.newRegexp(t);if(o.subs=i,t===x.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const c=o;o=o.subs[0],this.reuse(c)}return o}factor(e){if(e.length<2)return e;let t=0,r=e.length,i=0,s=null,o=0,c=0,l=0;for(let p=0;p<=r;p++){let g=null,m=0,R=0;if(p<r){let N=e[t+p];if(N.op===x.Op.CONCAT&&N.subs.length>0&&(N=N.subs[0]),N.op===x.Op.LITERAL&&(g=N.runes,m=N.runes.length,R=N.flags&z.FOLD_CASE),R===c){let L=0;for(;L<o&&L<m&&s[L]===g[L];)L++;if(L>0){o=L;continue}}}if(p!==l)if(p===l+1)e[i++]=e[t+l];else{const N=this.newRegexp(x.Op.LITERAL);N.flags=c,N.runes=s.slice(0,o);for(let K=l;K<p;K++)e[t+K]=this.removeLeadingString(e[t+K],o);const L=this.collapse(e.slice(t+l,t+p),x.Op.ALTERNATE),F=this.newRegexp(x.Op.CONCAT);F.subs=[N,L],e[i++]=F}l=p,s=g,o=m,c=R}r=i,t=0,l=0,i=0;let h=null;for(let p=0;p<=r;p++){let g=null;if(!(p<r&&(g=Q.leadingRegexp(e[t+p]),h!==null&&h.equals(g)&&(Q.isCharClass(h)||h.op===x.Op.REPEAT&&h.min===h.max&&Q.isCharClass(h.subs[0]))))){if(p!==l)if(p===l+1)e[i++]=e[t+l];else{const m=h;for(let L=l;L<p;L++){const F=L!==l;e[t+L]=this.removeLeadingRegexp(e[t+L],F)}const R=this.collapse(e.slice(t+l,t+p),x.Op.ALTERNATE),N=this.newRegexp(x.Op.CONCAT);N.subs=[m,R],e[i++]=N}l=p,h=g}}r=i,t=0,l=0,i=0;for(let p=0;p<=r;p++)if(!(p<r&&Q.isCharClass(e[t+p]))){if(p!==l)if(p===l+1)e[i++]=e[t+l];else{let g=l;for(let R=l+1;R<p;R++){const N=e[t+g],L=e[t+R];(N.op<L.op||N.op===L.op&&(N.runes!==null?N.runes.length:0)<(L.runes!==null?L.runes.length:0))&&(g=R)}const m=e[t+l];e[t+l]=e[t+g],e[t+g]=m;for(let R=l+1;R<p;R++)Q.mergeCharClass(e[t+l],e[t+R]),this.reuse(e[t+R]);this.cleanAlt(e[t+l]),e[i++]=e[t+l]}p<r&&(e[i++]=e[t+p]),l=p+1}r=i,t=0,l=0,i=0;for(let p=0;p<r;++p)p+1<r&&e[t+p].op===x.Op.EMPTY_MATCH&&e[t+p+1].op===x.Op.EMPTY_MATCH||(e[i++]=e[t+p]);return r=i,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===x.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===x.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=x.Op.EMPTY_MATCH,e.subs=null;break;case 2:{const i=e;e=e.subs[1],this.reuse(i);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===x.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=x.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===x.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:{e.op=x.Op.EMPTY_MATCH,e.subs=x.emptySubs();break}case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(x.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&z.LITERAL)return Q.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const i=new Fg(this.wholeRegexp);for(;i.more();){let o=-1;e:switch(i.peek()){case P.CODES.get("("):if(this.flags&z.PERL_X&&i.lookingAt("(?")){this.parsePerlFlags(i);break}this.op(x.Op.LEFT_PAREN).cap=++this.numCap,i.skip(1);break;case P.CODES.get("|"):this.parseVerticalBar(),i.skip(1);break;case P.CODES.get(")"):this.parseRightParen(),i.skip(1);break;case P.CODES.get("^"):this.flags&z.ONE_LINE?this.op(x.Op.BEGIN_TEXT):this.op(x.Op.BEGIN_LINE),i.skip(1);break;case P.CODES.get("$"):this.flags&z.ONE_LINE?this.op(x.Op.END_TEXT).flags|=z.WAS_DOLLAR:this.op(x.Op.END_LINE),i.skip(1);break;case P.CODES.get("."):this.flags&z.DOT_NL?this.op(x.Op.ANY_CHAR):this.op(x.Op.ANY_CHAR_NOT_NL),i.skip(1);break;case P.CODES.get("["):this.parseClass(i);break;case P.CODES.get("*"):case P.CODES.get("+"):case P.CODES.get("?"):{o=i.pos();let c=null;switch(i.pop()){case P.CODES.get("*"):c=x.Op.STAR;break;case P.CODES.get("+"):c=x.Op.PLUS;break;case P.CODES.get("?"):c=x.Op.QUEST;break}this.repeat(c,t,r,o,i,e);break}case P.CODES.get("{"):{o=i.pos();const c=Q.parseRepeat(i);if(c<0){i.rewindTo(o),this.literal(i.pop());break}t=c>>16,r=(c&Z.MAX_BMP)<<16>>16,this.repeat(x.Op.REPEAT,t,r,o,i,e);break}case P.CODES.get("\\"):{const c=i.pos();if(i.skip(1),this.flags&z.PERL_X&&i.more())switch(i.pop()){case P.CODES.get("A"):this.op(x.Op.BEGIN_TEXT);break e;case P.CODES.get("b"):this.op(x.Op.WORD_BOUNDARY);break e;case P.CODES.get("B"):this.op(x.Op.NO_WORD_BOUNDARY);break e;case P.CODES.get("C"):throw new ve(Q.ERR_INVALID_ESCAPE,"\\C");case P.CODES.get("Q"):{let g=i.rest();const m=g.indexOf("\\E");m>=0&&(g=g.substring(0,m)),i.skipString(g),i.skipString("\\E");let R=0;for(;R<g.length;){const N=g.codePointAt(R);this.literal(N),R+=oe.charCount(N)}break e}case P.CODES.get("z"):this.op(x.Op.END_TEXT);break e;default:i.rewindTo(c);break}const l=this.newRegexp(x.Op.CHAR_CLASS);if(l.flags=this.flags,i.lookingAt("\\p")||i.lookingAt("\\P")){const p=new $e;if(this.parseUnicodeClass(i,p)){l.runes=p.toArray(),this.push(l);break e}}const h=new $e;if(this.parsePerlClassEscape(i,h)){l.runes=h.toArray(),this.push(l);break e}i.rewindTo(c),this.reuse(l),this.literal(Q.parseEscape(i));break}default:this.literal(i.pop());break}e=o}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new ve(Q.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const c=r.charAt(2)==="P"?4:3,l=r.indexOf(">");if(l<0)throw new ve(Q.ERR_INVALID_NAMED_CAPTURE,r);const h=r.substring(c,l);if(e.skipString(h),e.skip(c+1),!Q.isValidCaptureName(h))throw new ve(Q.ERR_INVALID_NAMED_CAPTURE,r.substring(0,l+1));const p=this.op(x.Op.LEFT_PAREN);if(p.cap=++this.numCap,this.namedGroups[h])throw new ve(Q.ERR_DUPLICATE_NAMED_CAPTURE,h);this.namedGroups[h]=this.numCap,p.name=h;return}e.skip(2);let i=this.flags,s=1,o=!1;e:for(;e.more();){const c=e.pop();switch(c){case P.CODES.get("i"):i|=z.FOLD_CASE,o=!0;break;case P.CODES.get("m"):i&=-17,o=!0;break;case P.CODES.get("s"):i|=z.DOT_NL,o=!0;break;case P.CODES.get("U"):i|=z.NON_GREEDY,o=!0;break;case P.CODES.get("-"):if(s<0)break e;s=-1,i=~i,o=!1;break;case P.CODES.get(":"):case P.CODES.get(")"):if(s<0){if(!o)break e;i=~i}c===P.CODES.get(":")&&this.op(x.Op.LEFT_PAREN),this.flags=i;return;default:break e}}throw new ve(Q.ERR_INVALID_PERL_OP,e.from(t))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(x.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===x.Op.VERTICAL_BAR&&Q.isCharClass(this.stack[e-1])&&Q.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const i=r;r=t,t=i,this.stack[e-3]=r}return Q.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===x.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new ve(Q.ERR_INTERNAL_ERROR,"stack underflow");const t=this.pop(),r=this.pop();if(r.op!==x.Op.LEFT_PAREN)throw new ve(Q.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=r.flags,r.cap===0?this.push(t):(r.op=x.Op.CAPTURE,r.subs=[t],this.push(r))}parsePerlClassEscape(e,t){const r=e.pos();if(!(this.flags&z.PERL_X)||!e.more()||e.pop()!==P.CODES.get("\\")||!e.more())return!1;e.pop();const i=e.from(r),s=T1.has(i)?T1.get(i):null;return s===null?!1:(t.appendGroup(s,(this.flags&z.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),i=r.indexOf(":]");if(i<0)return!1;const s=r.substring(0,i+2);e.skipString(s);const o=M1.has(s)?M1.get(s):null;if(o===null)throw new ve(Q.ERR_INVALID_CHAR_RANGE,s);return t.appendGroup(o,(this.flags&z.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if(!(this.flags&z.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let i=1,s=e.pop();if(s===P.CODES.get("P")&&(i=-1),!e.more())throw e.rewindTo(r),new ve(Q.ERR_INVALID_CHAR_RANGE,e.rest());s=e.pop();let o;if(s!==P.CODES.get("{"))o=oe.runeToString(s);else{const p=e.rest(),g=p.indexOf("}");if(g<0)throw e.rewindTo(r),new ve(Q.ERR_INVALID_CHAR_RANGE,e.rest());o=p.substring(0,g),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===P.CODES.get("^")&&(i=0-i,o=o.substring(1));const c=Q.unicodeTable(o);if(c===null)throw new ve(Q.ERR_INVALID_CHAR_RANGE,e.from(r));const l=c.first,h=c.second;if(!(this.flags&z.FOLD_CASE)||h===null)t.appendTableWithSign(l,i);else{const p=new $e().appendTable(l).appendTable(h).cleanClass().toArray();t.appendClassWithSign(p,i)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(x.Op.CHAR_CLASS);r.flags=this.flags;const i=new $e;let s=1;e.more()&&e.lookingAt("^")&&(s=-1,e.skip(1),this.flags&z.CLASS_NL||i.appendRange(P.CODES.get(`
`),P.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==P.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&!(this.flags&z.PERL_X)&&!o){const p=e.rest();if(p==="-"||!p.startsWith("-]"))throw e.rewindTo(t),new ve(Q.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const c=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,i))continue;e.rewindTo(c)}if(this.parseUnicodeClass(e,i)||this.parsePerlClassEscape(e,i))continue;e.rewindTo(c);const l=Q.parseClassChar(e,t);let h=l;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(h=Q.parseClassChar(e,t),h<l)throw new ve(Q.ERR_INVALID_CHAR_RANGE,e.from(c))}this.flags&z.FOLD_CASE?i.appendFoldedRange(l,h):i.appendRange(l,h)}e.skip(1),i.cleanClass(),s<0&&i.negateClass(),r.runes=i.toArray(),this.push(r)}}class Ug{constructor(){this.inst=null,this.cap=[]}}class F1{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.denseThreads[t]=null,this.densePcs[t]=e,t}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}}class tr{static fromRE2(e){const t=new tr;return t.prog=e.prog,t.re2=e,t.q0=new F1(t.prog.numInst()),t.q1=new F1(t.prog.numInst()),t.pool=[],t.poolSize=0,t.matched=!1,t.matchcap=Array(t.prog.numCap<2?2:t.prog.numCap).fill(0),t.ncap=0,t}static fromMachine(e){const t=new tr;return t.re2=e.re2,t.prog=e.prog,t.q0=e.q0,t.q1=e.q1,t.pool=e.pool,t.poolSize=e.poolSize,t.matched=e.matched,t.matchcap=e.matchcap,t.ncap=e.ncap,t}init(e){this.ncap=e,e>this.matchcap.length?this.initNewCap(e):this.resetCap(e)}resetCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}}initNewCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}this.matchcap=Array(e).fill(0)}submatches(){return this.ncap===0?oe.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(e){let t;return this.poolSize>0?(this.poolSize--,t=this.pool[this.poolSize]):t=new Ug,t.inst=e,t}freeQueue(e,t=0){const r=e.size-t,i=this.poolSize+r;this.pool.length<i&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,i)));for(let s=t;s<e.size;s++){const o=e.denseThreads[s];o!==null&&(this.pool[this.poolSize]=o,this.poolSize++)}e.clear()}freeThread(e){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=e,this.poolSize++}match(e,t,r){const i=this.re2.cond;if(i===oe.EMPTY_ALL||(r===z.ANCHOR_START||r===z.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let s=this.q0,o=this.q1,c=e.step(t),l=c>>3,h=c&7,p=-1,g=0;c!==Zt.EOF()&&(c=e.step(t+h),p=c>>3,g=c&7);let m;for(t===0?m=oe.emptyOpContext(-1,l):m=e.context(t);;){if(s.isEmpty()){if(i&oe.EMPTY_BEGIN_TEXT&&t!==0||this.matched)break;if(this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const L=e.index(this.re2,t);if(L<0)break;t+=L,c=e.step(t),l=c>>3,h=c&7,c=e.step(t+h),p=c>>3,g=c&7}}!this.matched&&(t===0||r===z.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=t),this.add(s,this.prog.start,t,this.matchcap,m,null));const R=t+h;if(m=e.context(R),this.step(s,o,t,R,l,m,r,t===e.endPos()),h===0||this.ncap===0&&this.matched)break;t+=h,l=p,h=g,l!==-1&&(c=e.step(t+h),p=c>>3,g=c&7);const N=s;s=o,o=N}return this.freeQueue(o),this.matched}step(e,t,r,i,s,o,c,l){const h=this.re2.longest;for(let p=0;p<e.size;p++){let g=e.denseThreads[p];if(g===null)continue;if(h&&this.matched&&this.ncap>0&&this.matchcap[0]<g.cap[0]){this.freeThread(g);continue}const m=g.inst;let R=!1;switch(m.op){case H.MATCH:if(c===z.ANCHOR_BOTH&&!l)break;this.ncap>0&&(!h||!this.matched||this.matchcap[1]<r)&&(g.cap[1]=r,this.matchcap=g.cap.slice(0,this.ncap)),h||this.freeQueue(e,p+1),this.matched=!0;break;case H.RUNE:R=m.matchRune(s);break;case H.RUNE1:R=s===m.runes[0];break;case H.RUNE_ANY:R=!0;break;case H.RUNE_ANY_NOT_NL:R=s!==P.CODES.get(`
`);break;default:throw new Error("bad inst")}R&&(g=this.add(t,m.out,i,g.cap,o,g)),g!==null&&(this.freeThread(g),e.denseThreads[p]=null)}e.clear()}add(e,t,r,i,s,o){if(t===0||e.contains(t))return o;const c=e.add(t),l=this.prog.inst[t];switch(l.op){case H.FAIL:break;case H.ALT:case H.ALT_MATCH:o=this.add(e,l.out,r,i,s,o),o=this.add(e,l.arg,r,i,s,o);break;case H.EMPTY_WIDTH:l.arg&~s||(o=this.add(e,l.out,r,i,s,o));break;case H.NOP:o=this.add(e,l.out,r,i,s,o);break;case H.CAPTURE:if(l.arg<this.ncap){const h=i[l.arg];i[l.arg]=r,this.add(e,l.out,r,i,s,null),i[l.arg]=h}else o=this.add(e,l.out,r,i,s,o);break;case H.MATCH:case H.RUNE:case H.RUNE1:case H.RUNE_ANY:case H.RUNE_ANY_NOT_NL:o===null?o=this.alloc(l):o.inst=l,this.ncap>0&&o.cap!==i&&(o.cap=i.slice(0,this.ncap)),e.denseThreads[c]=o,o=null;break;default:throw new Error("unhandled")}return o}}class zg{constructor(e){this.value=e}get(){return this.value}set(e){this.value=e}compareAndSet(e,t){return this.value===e?(this.value=t,!0):!1}}class Xt{static initTest(e){const t=Xt.compile(e),r=new Xt(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r}static compile(e){return Xt.compileImpl(e,z.PERL,!1)}static compilePOSIX(e){return Xt.compileImpl(e,z.POSIX,!0)}static compileImpl(e,t,r){let i=Q.parse(e,t);const s=i.maxCap();i=mt.simplify(i);const o=Gr.compileRegexp(i),c=new Xt(e,o,s,r),[l,h]=o.prefix();return c.prefixComplete=l,c.prefix=h,c.prefixUTF8=oe.stringToUtf8ByteArray(c.prefix),c.prefix.length>0&&(c.prefixRune=c.prefix.codePointAt(0)),c.namedGroups=i.namedGroups,c}static match(e,t){return Xt.compile(e).match(t)}constructor(e,t,r=0,i=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=i,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new zg}numberOfCapturingGroups(){return this.numSubexp}get(){let e;do e=this.pooled.get();while(e&&!this.pooled.compareAndSet(e,e.next));return e}reset(){this.pooled.set(null)}put(e,t){let r=this.pooled.get();do r=this.pooled.get(),!t&&r&&(e=tr.fromMachine(e),t=!0),e.next!==r&&(e.next=r);while(!this.pooled.compareAndSet(r,e))}toString(){return this.expr}doExecute(e,t,r,i){let s=this.get(),o=!1;s?s.next!==null&&(s=tr.fromMachine(s),o=!0):(s=tr.fromRE2(this),o=!0),s.init(i);const c=s.match(e,t,r)?s.submatches():null;return this.put(s,o),c}match(e){return this.doExecute(we.fromUTF16(e),0,z.UNANCHORED,0)!==null}matchWithGroup(e,t,r,i,s){return e instanceof Bt||(e=xs.utf16(e)),this.matchMachineInput(e,t,r,i,s)}matchMachineInput(e,t,r,i,s){if(t>r)return[!1,null];const o=e.isUTF16Encoding()?we.fromUTF16(e.asCharSequence(),0,r):we.fromUTF8(e.asBytes(),0,r),c=this.doExecute(o,t,i,2*s);return c===null?[!1,null]:[!0,c]}matchUTF8(e){return this.doExecute(we.fromUTF8(e),0,z.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let i=0,s=0,o="";const c=we.fromUTF16(e);let l=0;for(;s<=e.length;){const h=this.doExecute(c,s,z.UNANCHORED,2);if(h===null||h.length===0)break;o+=e.substring(i,h[0]),(h[1]>i||h[0]===0)&&(o+=t(e.substring(h[0],h[1])),l++),i=h[1];const p=c.step(s)&7;if(s+p>h[1]?s+=p:s+1>h[1]?s++:s=h[1],l>=r)break}return o+=e.substring(i),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let i=0;i<e.length;i++)r[i]=e[i];e=r}return e}allMatches(e,t,r=i=>i){let i=[];const s=e.endPos();t<0&&(t=s+1);let o=0,c=0,l=-1;for(;c<t&&o<=s;){const h=this.doExecute(e,o,z.UNANCHORED,this.prog.numCap);if(h===null||h.length===0)break;let p=!0;if(h[1]===o){h[0]===l&&(p=!1);const g=e.step(o);g<0?o=s+1:o+=g&7}else o=h[1];l=h[1],p&&(i.push(r(this.pad(h))),c++)}return i}findUTF8(e){const t=this.doExecute(we.fromUTF8(e),0,z.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.doExecute(we.fromUTF8(e),0,z.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.doExecute(we.fromUTF16(e),0,z.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.doExecute(we.fromUTF16(e),0,z.UNANCHORED,2)}findUTF8Submatch(e){const t=this.doExecute(we.fromUTF8(e),0,z.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let i=0;i<r.length;i++)2*i<t.length&&t[2*i]>=0&&(r[i]=e.slice(t[2*i],t[2*i+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.doExecute(we.fromUTF8(e),0,z.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.doExecute(we.fromUTF16(e),0,z.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let i=0;i<r.length;i++)2*i<t.length&&t[2*i]>=0&&(r[i]=e.substring(t[2*i],t[2*i+1]));return r}findSubmatchIndex(e){return this.pad(this.doExecute(we.fromUTF16(e),0,z.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(we.fromUTF8(e),t,i=>e.slice(i[0],i[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(we.fromUTF8(e),t,i=>i.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(we.fromUTF16(e),t,i=>e.substring(i[0],i[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(we.fromUTF16(e),t,i=>i.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(we.fromUTF8(e),t,i=>{let s=new Array(i.length/2|0).fill(null);for(let o=0;o<s.length;o++)i[2*o]>=0&&(s[o]=e.slice(i[2*o],i[2*o+1]));return s});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(we.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(we.fromUTF16(e),t,i=>{let s=new Array(i.length/2|0).fill(null);for(let o=0;o<s.length;o++)i[2*o]>=0&&(s[o]=e.substring(i[2*o],i[2*o+1]));return s});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(we.fromUTF16(e),t);return r.length===0?null:r}}class dt{static CASE_INSENSITIVE=1;static DOTALL=2;static MULTILINE=4;static DISABLE_UNICODE_GROUPS=8;static LONGEST_MATCH=16;static quote(e){return oe.quoteMeta(e)}static compile(e,t=0){let r=e;if(t&dt.CASE_INSENSITIVE&&(r=`(?i)${r}`),t&dt.DOTALL&&(r=`(?s)${r}`),t&dt.MULTILINE&&(r=`(?m)${r}`),t&-32)throw new Og("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let i=z.PERL;t&dt.DISABLE_UNICODE_GROUPS&&(i&=-129);const s=new dt(e,t);return s.re2Input=Xt.compileImpl(r,i,(t&dt.LONGEST_MATCH)!==0),s}static matches(e,t){return dt.compile(e).matcher(t).matches()}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const i=new dt(e,t);return i.re2Input=r,i}constructor(e,t){this.patternInput=e,this.flagsInput=t}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.matcher(e).matches()}matcher(e){return Array.isArray(e)&&(e=xs.utf8(e)),new Dg(this,e)}split(e,t=0){const r=this.matcher(e),i=[];let s=0,o=0;for(;r.find();){if(o===0&&r.end()===0){o=r.end();continue}if(t>0&&i.length===t-1)break;if(o===r.start()){if(t===0){s+=1,o=r.end();continue}}else for(;s>0;)i.push(""),s-=1;i.push(r.substring(o,r.start())),o=r.end()}if(t===0&&o!==r.inputLength()){for(;s>0;)i.push(""),s-=1;i.push(r.substring(o,r.inputLength()))}return(t!==0||i.length===0)&&i.push(r.substring(o,r.inputLength())),i}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}}/**
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
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
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
 */let fr="12.15.0";function Bg(n){fr=n}/**
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
 */const Ln=new Hs("@firebase/firestore");function Wn(){return Ln.logLevel}function B(n,...e){if(Ln.logLevel<=re.DEBUG){const t=e.map(jo);Ln.debug(`Firestore (${fr}): ${n}`,...t)}}function $t(n,...e){if(Ln.logLevel<=re.ERROR){const t=e.map(jo);Ln.error(`Firestore (${fr}): ${n}`,...t)}}function Et(n,...e){if(Ln.logLevel<=re.WARN){const t=e.map(jo);Ln.warn(`Firestore (${fr}): ${n}`,...t)}}function jo(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function G(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Fh(n,r,t)}function Fh(n,e,t){let r=`FIRESTORE (${fr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw $t(r),new Error(r)}function j(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Fh(e,i,r)}function J(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Tt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class sn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Uh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $g{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(qe.UNAUTHENTICATED))}shutdown(){}}class qg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class jg{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){j(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new sn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new sn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new sn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(j(typeof r.accessToken=="string",31837,{l:r}),new Uh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string",2055,{h:e}),new qe(e)}}class Hg{constructor(e,t,r){this.T=e,this.P=t,this.R=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const e=this.A();return e&&this.I.set("Authorization",e),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class Gg{constructor(e,t,r){this.T=e,this.P=t,this.R=r}getToken(){return Promise.resolve(new Hg(this.T,this.P,this.R))}start(e,t){e.enqueueRetryable(()=>t(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class U1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){j(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new U1(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(j(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new U1(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Kg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Ho{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Kg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function ne(n,e){return n<e?-1:n>e?1:0}function mo(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return Xa(i)===Xa(s)?ne(i,s):Xa(i)?1:-1}return ne(n.length,e.length)}const Yg=55296,Qg=57343;function Xa(n){const e=n.charCodeAt(0);return e>=Yg&&e<=Qg}function sr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */const ar="__name__";class bt{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&G(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return bt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof bt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=bt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return ne(e.length,t.length)}static compareSegments(e,t){const r=bt.isNumericId(e),i=bt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?bt.extractNumericId(e).compare(bt.extractNumericId(t)):mo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rn.fromString(e.substring(4,e.length-2))}}class le extends bt{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new le(t)}static emptyPath(){return new le([])}}const Xg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ce extends bt{construct(e,t,r){return new Ce(e,t,r)}static isValidIdentifier(e){return Xg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ar}static keyField(){return new Ce([ar])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ce(t)}static emptyPath(){return new Ce([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(le.fromString(e))}static fromName(e){return new W(le.fromString(e).popFirst(5))}static empty(){return new W(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new le(e.slice()))}}/**
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
 */function Jg(n,e,t){if(!t)throw new q(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Zg(n,e,t,r){if(e===!0&&r===!0)throw new q(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function z1(n){if(!W.isDocumentKey(n))throw new q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xi(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Go(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function si(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Go(n);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ae(n,e){const t={typeString:n};return e&&(t.value=e),t}function Si(n,e){if(!xi(n))throw new q(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new q(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const B1=-62135596800,$1=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*$1);return new de(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<B1)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$1}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Si(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-B1;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:Ae("string",de._jsonSchemaVersion),seconds:Ae("number"),nanoseconds:Ae("number")};/**
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
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new de(0,0))}static max(){return new X(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ai=-1;function em(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new de(t+1,0):new de(t,r));return new ln(i,W.empty(),e)}function tm(n){return new ln(n.readTime,n.key,ai)}class ln{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ln(X.min(),W.empty(),ai)}static max(){return new ln(X.max(),W.empty(),ai)}}function nm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
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
 */const rm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class im{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function gr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==rm)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},l=>r(l))}),o=!0,s===i&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(i=>i?D.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new D((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let l=0;l<s;l++){const h=l;t(e[h]).next(p=>{o[h]=p,++c,c===s&&r(o)},p=>i(p))}})}static doWhile(e,t){return new D((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function sm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function mr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Zs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Zs.ce=-1;/**
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
 */const Wo=-1;function ea(n){return n==null}function oi(n){return n===0&&1/n==-1/0}function am(n){return typeof n=="number"&&Number.isInteger(n)&&!oi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function om(n){return typeof n=="string"}/**
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
 */const zh="";function cm(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=q1(e)),e=lm(n.get(t),e);return q1(e)}function lm(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case zh:t+="";break;default:t+=s}}return t}function q1(n){return n+zh+""}/**
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
 */class me{constructor(e,t){this.comparator=e,this.root=t||Fe.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new es(this.root,e,this.comparator,!1)}getReverseIterator(){return new es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new es(this.root,e,this.comparator,!0)}}class es{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Fe.RED,this.left=i??Fe.EMPTY,this.right=s??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Fe(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ie{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new j1(this.data.getIterator())}getIteratorFrom(e){return new j1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class j1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _t{constructor(e){this.fields=e,e.sort(Ce.comparator)}static empty(){return new _t([])}unionWith(e){let t=new Ie(Ce.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new _t(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return sr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */function Ss(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Un(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function um(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function Bh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class $h extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $h("Invalid base64 string: "+s):s}}(e);return new be(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const hm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function un(n){if(j(!!n,39018),typeof n=="string"){let e=0;const t=hm.exec(n);if(j(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function hn(n){return typeof n=="string"?be.fromBase64String(n):be.fromUint8Array(n)}/**
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
 */const qh="server_timestamp",jh="__type__",Hh="__previous_value__",Gh="__local_write_time__";function ta(n){return(n?.mapValue?.fields||{})[jh]?.stringValue===qh}function Ci(n){const e=n.mapValue.fields[Hh];return ta(e)?Ci(e):e}function or(n){const e=un(n.mapValue.fields[Gh].timestampValue);return new de(e.seconds,e.nanos)}/**
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
 */class dm{constructor(e,t,r,i,s,o,c,l,h,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=g}}const Cs="(default)";class ci{constructor(e,t){this.projectId=e,this.database=t||Cs}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database===Cs}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}function pm(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(n.options.projectId,e)}/**
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
 */const Wh="__type__",fm="__max__",ts={mapValue:{}},Kh="__vector__",li="value",cr={nullValue:"NULL_VALUE"},nt={booleanValue:!0},De={booleanValue:!1};function xe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ta(n)?4:gm(n)?9007199254740991:Rs(n)?10:11:G(28295,{value:n})}function gt(n,e,t){if(n===e)return!0;const r=xe(n);if(r!==xe(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return or(n).isEqual(or(e));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const c=un(s.timestampValue),l=un(o.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,o){return hn(s.bytesValue).isEqual(hn(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,o){return ye(s.geoPointValue.latitude)===ye(o.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(o.geoPointValue.longitude)}(n,e);case 2:return function(s,o,c){if("integerValue"in s&&"integerValue"in o)return ye(s.integerValue)===ye(o.integerValue);let l,h;if("doubleValue"in s&&"doubleValue"in o)l=ye(s.doubleValue),h=ye(o.doubleValue);else{if(!c?.Ee)return!1;l=ye(s.integerValue??s.doubleValue),h=ye(o.integerValue??o.doubleValue)}return l===h?!!c?.he||oi(l)===oi(h):!!(c===void 0||c.Te)&&isNaN(l)&&isNaN(h)}(n,e,t);case 9:return sr(n.arrayValue.values||[],e.arrayValue.values||[],(i,s)=>gt(i,s,t));case 10:case 11:return function(s,o,c){const l=s.mapValue.fields||{},h=o.mapValue.fields||{};if(Ss(l)!==Ss(h))return!1;for(const p in l)if(l.hasOwnProperty(p)&&(h[p]===void 0||!gt(l[p],h[p],c)))return!1;return!0}(n,e,t);default:return G(52216,{left:n})}}function ui(n,e){return(n.values||[]).find(t=>gt(t,e))!==void 0}function rt(n,e){if(n===e)return 0;const t=xe(n),r=xe(e);if(t!==r)return ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(s,o){const c=ye(s.integerValue||s.doubleValue),l=ye(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return H1(n.timestampValue,e.timestampValue);case 4:return H1(or(n),or(e));case 5:return mo(n.stringValue,e.stringValue);case 6:return function(s,o){const c=hn(s),l=hn(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const p=ne(c[h],l[h]);if(p!==0)return p}return ne(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const c=ne(ye(s.latitude),ye(o.latitude));return c!==0?c:ne(ye(s.longitude),ye(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return G1(n.arrayValue,e.arrayValue);case 10:return function(s,o){const c=s.fields||{},l=o.fields||{},h=c[li]?.arrayValue,p=l[li]?.arrayValue,g=ne(h?.values?.length||0,p?.values?.length||0);return g!==0?g:G1(h,p)}(n.mapValue,e.mapValue);case 11:return function(s,o){if(s===ts.mapValue&&o===ts.mapValue)return 0;if(s===ts.mapValue)return 1;if(o===ts.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),h=o.fields||{},p=Object.keys(h);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const m=mo(l[g],p[g]);if(m!==0)return m;const R=rt(c[l[g]],h[p[g]]);if(R!==0)return R}return ne(l.length,p.length)}(n.mapValue,e.mapValue);default:throw G(23264,{Pe:t})}}function H1(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=un(n),r=un(e),i=ne(t.seconds,r.seconds);return i!==0?i:ne(t.nanos,r.nanos)}function G1(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=rt(t[i],r[i]);if(s!==void 0&&s!==0)return s}return ne(t.length,r.length)}function lr(n){return yo(n)}function yo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=un(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return hn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return W.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=yo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${yo(t.fields[o])}`;return i+"}"}(n.mapValue):G(61005,{value:n})}function us(n){switch(xe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ci(n);return e?16+us(e):16;case 5:return 2*n.stringValue.length;case 6:return hn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+us(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Un(r.fields,(s,o)=>{i+=s.length+us(o)}),i}(n.mapValue);default:throw G(13486,{value:n})}}function St(n){return!!n&&"integerValue"in n}function Rn(n){return!!n&&"doubleValue"in n}function dn(n){return St(n)||Rn(n)}function ur(n){return!!n&&"arrayValue"in n}function lt(n){return!!n&&"nullValue"in n}function it(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function kn(n){return!!n&&"mapValue"in n}function Rs(n){return(n?.mapValue?.fields||{})[Wh]?.stringValue===Kh}function _o(n){return(n?.mapValue?.fields||{})[li]?.arrayValue}function Kr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Un(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Kr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Kr(n.arrayValue.values[t]);return e}return{...n}}function gm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===fm}/**
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
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!kn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kr(t)}setAll(e){let t=Ce.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=Kr(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());kn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return gt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];kn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Un(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Kr(this.value))}}function Yh(n){const e=[];return Un(n.fields,(t,r)=>{const i=new Ce([t]);if(kn(r)){const s=Yh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new _t(e)}/**
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
 */function na(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oi(e)?"-0":e}}function Ko(n){return{integerValue:""+n}}function Yo(n,e,t){return Number.isInteger(e)&&t?.preferIntegers||am(e)?Ko(e):na(n,e)}/**
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
 */class ra{constructor(){this._=void 0}}function mm(n,e,t){return n instanceof Ps?function(i,s){const o={fields:{[jh]:{stringValue:qh},[Gh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ta(s)&&(s=Ci(s)),s&&(o.fields[Hh]=s),{mapValue:o}}(t,e):n instanceof hi?Xh(n,e):n instanceof di?Jh(n,e):n instanceof pi?function(i,s){const o=Qh(i,s),c=Os(o)+Os(i.Re);return St(o)&&St(i.Re)?Ko(c):na(i.serializer,c)}(n,e):n instanceof ks?function(i,s){return W1(i,s,Math.min)}(n,e):n instanceof Ns?function(i,s){return W1(i,s,Math.max)}(n,e):void 0}function ym(n,e,t){return n instanceof hi?Xh(n,e):n instanceof di?Jh(n,e):t}function Qh(n,e){return n instanceof pi?dn(e)?e:{integerValue:0}:null}class Ps extends ra{}class hi extends ra{constructor(e){super(),this.elements=e}}function Xh(n,e){const t=Zh(e);for(const r of n.elements)t.some(i=>gt(i,r))||t.push(r);return{arrayValue:{values:t}}}class di extends ra{constructor(e){super(),this.elements=e}}function Jh(n,e){let t=Zh(e);for(const r of n.elements)t=t.filter(i=>!gt(i,r));return{arrayValue:{values:t}}}class Qo extends ra{constructor(e,t){super(),this.serializer=e,this.Re=t}}class pi extends Qo{}class ks extends Qo{}class Ns extends Qo{}function W1(n,e,t){if(!dn(e))return n.Re;const r=t(Os(e),Os(n.Re));return St(e)&&St(n.Re)?Ko(r):na(n.serializer,r)}function Os(n){return ye(n.integerValue||n.doubleValue)}function Zh(n){return ur(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function _m(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof hi&&i instanceof hi||r instanceof di&&i instanceof di?sr(r.elements,i.elements,gt):r instanceof pi&&i instanceof pi||r instanceof ks&&i instanceof ks||r instanceof Ns&&i instanceof Ns?gt(r.Re,i.Re):r instanceof Ps&&i instanceof Ps}(n.transform,e.transform)}class vm{constructor(e,t){this.version=e,this.transformResults=t}}class Ft{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ia{}function ed(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new nd(n.key,Ft.none()):new Ri(n.key,n.data,Ft.none());{const t=n.data,r=ct.empty();let i=new Ie(Ce.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zn(n.key,r,new _t(i.toArray()),Ft.none())}}function wm(n,e,t){n instanceof Ri?function(i,s,o){const c=i.value.clone(),l=Y1(i.fieldTransforms,s,o.transformResults);c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof zn?function(i,s,o){if(!hs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=Y1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(td(i)),l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Yr(n,e,t,r){return n instanceof Ri?function(s,o,c,l){if(!hs(s.precondition,o))return c;const h=s.value.clone(),p=Q1(s.fieldTransforms,l,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof zn?function(s,o,c,l){if(!hs(s.precondition,o))return c;const h=Q1(s.fieldTransforms,l,o),p=o.data;return p.setAll(td(s)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,o,c){return hs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function Em(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Qh(r.transform,i||null);s!=null&&(t===null&&(t=ct.empty()),t.set(r.field,s))}return t||null}function K1(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&sr(r,i,(s,o)=>_m(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ri extends ia{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zn extends ia{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function td(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Y1(n,e,t){const r=new Map;j(n.length===t.length,32656,{Ie:t.length,Ae:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,ym(o,c,t[i]))}return r}function Q1(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,mm(s,o,e))}return r}class nd extends ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tm extends ia{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ds{constructor(e,t){this.position=e,this.inclusive=t}}function X1(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),t.key):r=rt(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function J1(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!gt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class rd{}class Re extends rd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Im(e,t,r):t==="array-contains"?new Sm(e,r):t==="in"?new Cm(e,r):t==="not-in"?new Rm(e,r):t==="array-contains-any"?new Pm(e,r):new Re(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new bm(e,r):new xm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(rt(t,this.value)):t!==null&&xe(this.value)===xe(t)&&this.matchesComparison(rt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends rd{constructor(e,t){super(),this.filters=e,this.op=t,this.Ve=null}static create(e,t){return new Nt(e,t)}matches(e){return id(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Ve!==null||(this.Ve=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Ve}getFilters(){return Object.assign([],this.filters)}}function id(n){return n.op==="and"}function sd(n){return Am(n)&&id(n)}function Am(n){for(const e of n.filters)if(e instanceof Nt)return!1;return!0}function vo(n){if(n instanceof Re)return n.field.canonicalString()+n.op.toString()+lr(n.value);if(sd(n))return n.filters.map(e=>vo(e)).join(",");{const e=n.filters.map(t=>vo(t)).join(",");return`${n.op}(${e})`}}function ad(n,e){return n instanceof Re?function(r,i){return i instanceof Re&&r.op===i.op&&r.field.isEqual(i.field)&&gt(r.value,i.value)}(n,e):n instanceof Nt?function(r,i){return i instanceof Nt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&ad(o,i.filters[c]),!0):!1}(n,e):void G(19439)}function od(n){return n instanceof Re?function(t){return`${t.field.canonicalString()} ${t.op} ${lr(t.value)}`}(n):n instanceof Nt?function(t){return t.op.toString()+" {"+t.getFilters().map(od).join(" ,")+"}"}(n):"Filter"}class Im extends Re{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class bm extends Re{constructor(e,t){super(e,"in",t),this.keys=cd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class xm extends Re{constructor(e,t){super(e,"not-in",t),this.keys=cd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cd(n,e){return(e.arrayValue?.values||[]).map(t=>W.fromName(t.referenceValue))}class Sm extends Re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ur(t)&&ui(t.arrayValue,this.value)}}class Cm extends Re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ui(this.value.arrayValue,t)}}class Rm extends Re{constructor(e,t){super(e,"not-in",t)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ui(this.value.arrayValue,t)}}class Pm extends Re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ur(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ui(this.value.arrayValue,r))}}/**
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
 */class Vs{constructor(e,t="asc"){this.field=e,this.dir=t}}function km(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class je{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new je(e,0,X.min(),X.min(),X.min(),ct.empty(),0)}static newFoundDocument(e,t,r,i){return new je(e,1,t,X.min(),r,i,0)}static newNoDocument(e,t){return new je(e,2,t,X.min(),X.min(),ct.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,X.min(),X.min(),ct.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nm{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.de=null}}function Z1(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Nm(n,e,t,r,i,s,o)}function ld(n){const e=J(n);if(e.de===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>vo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ea(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>lr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>lr(r)).join(",")),e.de=t}return e.de}function ud(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!km(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ad(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!J1(n.startAt,e.startAt)&&J1(n.endAt,e.endAt)}function xn(n){return!!n.isCorePipeline}function hd(n){return!!n.path&&W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class sa{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=l,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function Om(n,e,t,r,i,s,o,c){return new sa(n,e,t,r,i,s,o,c)}function Xo(n){return new sa(n)}function eu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Dm(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Vm(n){return n.collectionGroup!==null}function Qr(n){const e=J(n);if(e.fe===null){e.fe=[];const t=new Set;for(const s of e.explicitOrderBy)e.fe.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ie(Ce.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.fe.push(new Vs(s,r))}),t.has(Ce.keyField().canonicalString())||e.fe.push(new Vs(Ce.keyField(),r))}return e.fe}function Ct(n){const e=J(n);return e.me||(e.me=Lm(e,Qr(n))),e.me}function Lm(n,e){if(n.limitType==="F")return Z1(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Vs(i.field,s)});const t=n.endAt?new Ds(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ds(n.startAt.position,n.startAt.inclusive):null;return Z1(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function wo(n,e,t){return new sa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Mm(n,e){return ud(Ct(n),Ct(e))&&n.limitType===e.limitType}function Xr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>od(i)).join(", ")}]`),ea(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>lr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>lr(i)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function aa(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Qr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,l){const h=X1(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,Qr(r),i)||r.endAt&&!function(o,c,l){const h=X1(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,Qr(r),i))}(n,e)}function Jo(n){return(e,t)=>{let r=!1;for(const i of Qr(n)){const s=Fm(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Fm(n,e,t){const r=n.field.isKeyField()?W.comparator(e.key,t.key):function(s,o,c){const l=o.data.field(s),h=c.data.field(s);return l!==null&&h!==null?rt(l,h):G(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:n.dir})}}/**
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
 */class Um{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Te,se;function zm(n){switch(n){case V.OK:return G(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function dd(n){if(n===void 0)return $t("GRPC error has no .code"),V.UNKNOWN;switch(n){case Te.OK:return V.OK;case Te.CANCELLED:return V.CANCELLED;case Te.UNKNOWN:return V.UNKNOWN;case Te.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Te.INTERNAL:return V.INTERNAL;case Te.UNAVAILABLE:return V.UNAVAILABLE;case Te.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Te.NOT_FOUND:return V.NOT_FOUND;case Te.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Te.ABORTED:return V.ABORTED;case Te.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Te.DATA_LOSS:return V.DATA_LOSS;default:return G(39323,{code:n})}}(se=Te||(Te={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Bn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Un(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Bh(this.inner)}size(){return this.innerSize}}/**
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
 */const Bm=new me(W.comparator);function Ze(){return Bm}const pd=new me(W.comparator);function Kn(...n){let e=pd;for(const t of n)e=e.insert(t.key,t);return e}function fd(n){let e=pd;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function en(){return Jr()}function gd(){return Jr()}function Jr(){return new Bn(n=>n.toString(),(n,e)=>n.isEqual(e))}const $m=new me(W.comparator),qm=new Ie(W.comparator);function te(...n){let e=qm;for(const t of n)e=e.add(t);return e}const jm=new Ie(ne);function Hm(){return jm}/**
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
 */function Gm(){return new TextEncoder}/**
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
 */const Wm=new rn([4294967295,4294967295],0);function tu(n){const e=Gm().encode(n),t=new kh;return t.update(e),new Uint8Array(t.digest())}function nu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new rn([t,r],0),new rn([i,s],0)]}class Zo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new $r(`Invalid padding: ${t}`);if(r<0)throw new $r(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $r(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new $r(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.ye=rn.fromNumber(this.ge)}we(e,t,r){let i=e.add(t.multiply(rn.fromNumber(r)));return i.compare(Wm)===1&&(i=new rn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=tu(e),[r,i]=nu(t);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);if(!this.be(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Zo(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const t=tu(e),[r,i]=nu(t);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);this.ve(o)}}ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class $r extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pi{constructor(e,t,r,i,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.augmentedDocumentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ki.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Pi(X.min(),i,new me(ne),Ze(),Ze(),te())}}class ki{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ki(r,t,te(),te(),te())}}/**
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
 */class ds{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=i}}class md{constructor(e,t){this.targetId=e,this.xe=t}}class yd{constructor(e,t,r=be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class ru{constructor(e){this.targetId=e,this.Ce=0,this.Fe=iu(),this.Oe=be.EMPTY_BYTE_STRING,this.Me=!1,this.Ne=!0}get current(){return this.Me}get resumeToken(){return this.Oe}get Le(){return this.Ce!==0}get Be(){return this.Ne}Ue(e){e.approximateByteSize()>0&&(this.Ne=!0,this.Oe=e)}ke(){let e=te(),t=te(),r=te();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new ki(this.Oe,this.Me,e,t,r)}qe(){this.Ne=!1,this.Fe=iu()}$e(e,t){this.Ne=!0,this.Fe=this.Fe.insert(e,t)}Ke(e){this.Ne=!0,this.Fe=this.Fe.remove(e)}We(){this.Ce+=1}Qe(){this.Ce-=1,j(this.Ce>=0,3241,{Ce:this.Ce,targetId:this.targetId})}Ge(){this.Ne=!0,this.Me=!0}}const Mr="WatchChangeAggregator";class Km{constructor(e){this.ze=e,this.je=new Map,this.He=Ze(),this.Je=ns(),this.Ye=Ze(),this.Ze=ns(),this.Xe=new me(ne)}et(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.tt(t,e.De):this.nt(t,e.key,e.De);for(const t of e.removedTargetIds)this.nt(t,e.key,e.De)}rt(e){this.forEachTarget(e,t=>{const r=this.je.get(t);if(r)switch(e.state){case 0:this.it(t)&&r.Ue(e.resumeToken);break;case 1:r.Qe(),r.Le||r.qe(),r.Ue(e.resumeToken);break;case 2:r.Qe(),r.Le||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.Ue(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.Ue(e.resumeToken));break;default:G(56790,{state:e.state})}else B(Mr,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}_t(e){return xn(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:hd(e)}ot(e){const t=e.targetId,r=e.xe.count,i=this.ut(t);if(i){const s=i.target;if(this._t(s))if(r===0){const o=new W(xn(s)?le.fromString(s.getPipelineDocuments()[0]):s.path);this.nt(t,o,je.newNoDocument(o,X.min()))}else j(r===1,20013,"Single document existence filter with count: "+r);else{const o=this.ct(t);if(o!==r){const c=this.lt(e),l=c?this.Et(c,e,o):1;if(l!==0){this.st(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Xe=this.Xe.insert(t,h)}}}}}lt(e){const t=e.xe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=hn(r).toUint8Array()}catch(l){if(l instanceof $h)return Et("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Zo(o,i,s)}catch(l){return Et(l instanceof $r?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}Et(e,t,r){return t.xe.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.ze.Tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.nt(t,s,null),i++)}),i}Rt(e){const t=new Map;this.je.forEach((s,o)=>{const c=this.ut(o);if(c){if(s.current&&this._t(c.target)){const l=xn(c.target)?le.fromString(c.target.getPipelineDocuments()[0]):c.target.path,h=new W(l);this.It(h).has(o)||this.At(o,h)||this.nt(o,h,je.newNoDocument(h,e))}s.Be&&(t.set(o,s.ke()),s.qe())}});let r=te();this.Ze.forEach((s,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.ut(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.He.forEach((s,o)=>o.setReadTime(e)),this.Ye.forEach((s,o)=>o.setReadTime(e));const i=new Pi(e,t,this.Xe,this.He,this.Ye,r);return this.He=Ze(),this.Je=ns(),this.Ye=Ze(),this.Ze=ns(),this.Xe=new me(ne),i}tt(e,t){const r=this.je.get(e);if(!r||!this.it(e))return void B(Mr,`addDocumentToTarget received document for unknown inactive target (${e})`);const i=this.At(e,t.key)?2:0;r.$e(t.key,i),xn(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t.key,t):this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.Ze=this.Ze.insert(t.key,this.Vt(t.key).add(e))}nt(e,t,r){const i=this.je.get(e);i&&this.it(e)?(this.At(e,t)?i.$e(t,1):i.Ke(t),this.Ze=this.Ze.insert(t,this.Vt(t).delete(e)),this.Ze=this.Ze.insert(t,this.Vt(t).add(e)),r&&(xn(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t,r):this.He=this.He.insert(t,r))):B(Mr,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.je.delete(e)}ct(e){const t=this.je.get(e);if(!t)return 0;const r=t.ke();return this.ze.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}We(e){let t=this.je.get(e);t||(B(Mr,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new ru(e),this.je.set(e,t)),t.We()}Vt(e){let t=this.Ze.get(e);return t||(t=new Ie(ne),this.Ze=this.Ze.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ie(ne),this.Je=this.Je.insert(e,t)),t}it(e){const t=this.ut(e)!==null;return t||B(Mr,"Detected inactive target",e),t}ut(e){const t=this.je.get(e);return t===void 0||t.Le?null:this.ze.dt(e)}st(e){this.je.set(e,new ru(e)),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.nt(e,t,null)})}At(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ns(){return new me(W.comparator)}function iu(){return new me(W.comparator)}const Ym={asc:"ASCENDING",desc:"DESCENDING"},Qm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xm={and:"AND",or:"OR"};class Jm{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Eo(n,e){return n.useProto3Json||ea(e)?e:{value:e}}function Ls(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ec(n){const e=un(n);return new de(e.seconds,e.nanos)}function _d(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ps(n,e){return Ls(n,e.toTimestamp())}function Rt(n){return j(!!n,49232),X.fromTimestamp(ec(n))}function tc(n,e){return To(n,e).canonicalString()}function To(n,e){const t=function(i){return new le(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function vd(n){const e=le.fromString(n);return j(Id(e),10190,{key:e.toString()}),e}function Ms(n,e){return tc(n.databaseId,e.path)}function Ja(n,e){const t=vd(e);if(t.get(1)!==n.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W(Ed(t))}function wd(n,e){return tc(n.databaseId,e)}function Zm(n){const e=vd(n);return e.length===4?le.emptyPath():Ed(e)}function Ao(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ed(n){return j(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function su(n,e,t){return{name:Ms(n,e),fields:t.value.mapValue.fields}}function e7(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,p){return h.useProto3Json?(j(p===void 0||typeof p=="string",58123),be.fromBase64String(p||"")):(j(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),be.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const p=h.code===void 0?V.UNKNOWN:dd(h.code);return new q(p,h.message||"")}(o);t=new yd(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ja(n,r.document.name),s=Rt(r.document.updateTime),o=r.document.createTime?Rt(r.document.createTime):X.min(),c=new ct({mapValue:{fields:r.document.fields}}),l=je.newFoundDocument(i,s,o,c),h=r.targetIds||[],p=r.removedTargetIds||[];t=new ds(h,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ja(n,r.document),s=r.readTime?Rt(r.readTime):X.min(),o=je.newNoDocument(i,s),c=r.removedTargetIds||[];t=new ds([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ja(n,r.document),s=r.removedTargetIds||[];t=new ds([],s,i,null)}else{if(!("filter"in e))return G(11601,{ft:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Um(i,s),c=r.targetId;t=new md(c,o)}}return t}function t7(n,e){let t;if(e instanceof Ri)t={update:su(n,e.key,e.value)};else if(e instanceof nd)t={delete:Ms(n,e.key)};else if(e instanceof zn)t={update:su(n,e.key,e.data),updateMask:h7(e.fieldMask)};else{if(!(e instanceof Tm))return G(16599,{gt:e.type});t={verify:Ms(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const c=o.transform;if(c instanceof Ps)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof hi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof di)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof pi)return{fieldPath:o.field.canonicalString(),increment:c.Re};if(c instanceof ks)return{fieldPath:o.field.canonicalString(),minimum:c.Re};if(c instanceof Ns)return{fieldPath:o.field.canonicalString(),maximum:c.Re};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ps(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(n,e.precondition)),t}function n7(n,e){return n&&n.length>0?(j(e!==void 0,14353),n.map(t=>function(i,s){let o=i.updateTime?Rt(i.updateTime):Rt(s);return o.isEqual(X.min())&&(o=Rt(s)),new vm(o,i.transformResults||[])}(t,e))):[]}function r7(n,e){return{documents:[wd(n,e.path)]}}function i7(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=wd(n,i);const s=function(h){if(h.length!==0)return Ad(Nt.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(p=>function(m){return{field:Yn(m.field),direction:c7(m.dir)}}(p))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Eo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{yt:t,parent:i}}function s7(n){let e=Zm(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){j(r===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(g){const m=Td(g);return m instanceof Nt&&sd(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(g){return g.map(m=>function(N){return new Vs(Qn(N.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(g){let m;return m=typeof g=="object"?g.value:g,ea(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(g){const m=!!g.before,R=g.values||[];return new Ds(R,m)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const m=!g.before,R=g.values||[];return new Ds(R,m)}(t.endAt)),Om(e,i,o,s,c,"F",l,h)}function a7(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function o7(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function Td(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Qn(t.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qn(t.unaryFilter.field);return Re.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qn(t.unaryFilter.field);return Re.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qn(t.unaryFilter.field);return Re.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(n):n.fieldFilter!==void 0?function(t){return Re.create(Qn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Nt.create(t.compositeFilter.filters.map(r=>Td(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(t.compositeFilter.op))}(n):G(30097,{filter:n})}function c7(n){return Ym[n]}function l7(n){return Qm[n]}function u7(n){return Xm[n]}function Yn(n){return{fieldPath:n.canonicalString()}}function Qn(n){return Ce.fromServerFormat(n.fieldPath)}function Ad(n){return n instanceof Re?function(t){if(t.op==="=="){if(it(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NAN"}};if(lt(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(it(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NAN"}};if(lt(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yn(t.field),op:l7(t.op),value:t.value}}}(n):n instanceof Nt?function(t){const r=t.getFilters().map(i=>Ad(i));return r.length===1?r[0]:{compositeFilter:{op:u7(t.op),filters:r}}}(n):G(54877,{filter:n})}function h7(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Id(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function bd(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function fi(n,e){const t={fields:{}};return e.forEach((r,i)=>{if(typeof i!="string")throw new Error(`Cannot encode map with non-string key: ${i}`);t.fields[i]=r._toProto(n)}),{mapValue:t}}function xd(n){return{stringValue:n}}/**
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
 */function oa(n){return new Jm(n,!0)}/**
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
 */class pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pt(be.fromBase64String(e))}catch(t){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pt(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Si(e,pt._jsonSchema))return pt.fromBase64String(e.bytes)}}pt._jsonSchemaVersion="firestore/bytes/1.0",pt._jsonSchema={type:Ae("string",pt._jsonSchemaVersion),bytes:Ae("string")};/**
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
 */class nc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function d7(){return new nc(ar)}/**
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
 */class Sd{constructor(e){this._methodName=e}}/**
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
 */class Pt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pt._jsonSchemaVersion}}static fromJSON(e){if(Si(e,Pt._jsonSchema))return new Pt(e.latitude,e.longitude)}}function Cd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */Pt._jsonSchemaVersion="firestore/geoPoint/1.0",Pt._jsonSchema={type:Ae("string",Pt._jsonSchemaVersion),latitude:Ae("number"),longitude:Ae("number")};class p7{bt(e){}shutdown(){}}/**
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
 */const au="ConnectivityMonitor";class ou{constructor(){this.vt=()=>this.St(),this.Dt=()=>this.xt(),this.Ct=[],this.Ft()}bt(e){this.Ct.push(e)}shutdown(){window.removeEventListener("online",this.vt),window.removeEventListener("offline",this.Dt)}Ft(){window.addEventListener("online",this.vt),window.addEventListener("offline",this.Dt)}St(){B(au,"Network connectivity changed: AVAILABLE");for(const e of this.Ct)e(0)}xt(){B(au,"Network connectivity changed: UNAVAILABLE");for(const e of this.Ct)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let rs=null;function Io(){return rs===null?rs=function(){return 268435456+Math.round(2147483648*Math.random())}():rs++,"0x"+rs.toString(16)}/**
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
 */const Za="RestConnection",f7={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class g7{get Ot(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Mt=t+"://"+e.host,this.Nt=`projects/${r}/databases/${i}`,this.Lt=this.databaseId.database===Cs?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Bt(e,t,r,i,s){const o=Io(),c=this.Ut(e,t.toUriEncodedString());B(Za,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Nt,"x-goog-request-params":this.Lt};this.kt(l,i,s);const{host:h}=new URL(c),p=js(h);return this.qt(e,c,l,r,p).then(g=>(B(Za,`Received RPC '${e}' ${o}: `,g),g),g=>{throw Et(Za,`RPC '${e}' ${o} failed with error: `,g,"url: ",c,"request:",r),g})}$t(e,t,r,i,s,o){return this.Bt(e,t,r,i,s)}kt(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Ut(e,t){const r=f7[e];let i=`${this.Mt}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class m7{constructor(e){this.Kt=e.Kt,this.Wt=e.Wt}Qt(e){this.Gt=e}zt(e){this.jt=e}Ht(e){this.Jt=e}onMessage(e){this.Yt=e}close(){this.Wt()}send(e){this.Kt(e)}Zt(){this.Gt()}Xt(){this.jt()}en(e){this.Jt(e)}tn(e){this.Yt(e)}}/**
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
 */const Be="WebChannelConnection",Fr=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(i){setTimeout(()=>{throw i},0)}})};class nr extends g7{constructor(e){super(e),this.nn=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static rn(){if(!nr.sn){const e=Vh();Fr(e,Dh.STAT_EVENT,t=>{t.stat===go.PROXY?B(Be,"STAT_EVENT: detected buffering proxy"):t.stat===go.NOPROXY&&B(Be,"STAT_EVENT: detected no buffering proxy")}),nr.sn=!0}}qt(e,t,r,i,s){const o=Io();return new Promise((c,l)=>{const h=new Nh;h.setWithCredentials(!0),h.listenOnce(Oh.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ls.NO_ERROR:const g=h.getResponseJson();B(Be,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),c(g);break;case ls.TIMEOUT:B(Be,`RPC '${e}' ${o} timed out`),l(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case ls.HTTP_ERROR:const m=h.getStatus();if(B(Be,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const N=R?.error;if(N&&N.status&&N.message){const L=function(K){const ie=K.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(ie)>=0?ie:V.UNKNOWN}(N.status);l(new q(L,N.message))}else l(new q(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new q(V.UNAVAILABLE,"Connection failed."));break;default:G(9055,{_n:e,streamId:o,an:h.getLastErrorCode(),un:h.getLastError()})}}finally{B(Be,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);B(Be,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",p,r,15)})}cn(e,t,r){const i=Io(),s=[this.Mt,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.kt(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=s.join("");B(Be,`Creating RPC '${e}' stream ${i}: ${h}`,c);const p=o.createWebChannel(h,c);this.En(p);let g=!1,m=!1;const R=new m7({Kt:N=>{m?B(Be,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(g||(B(Be,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),B(Be,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},Wt:()=>p.close()});return Fr(p,Br.EventType.OPEN,()=>{m||(B(Be,`RPC '${e}' stream ${i} transport opened.`),R.Zt())}),Fr(p,Br.EventType.CLOSE,()=>{m||(m=!0,B(Be,`RPC '${e}' stream ${i} transport closed`),R.en(),this.hn(p))}),Fr(p,Br.EventType.ERROR,N=>{m||(m=!0,Et(Be,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),R.en(new q(V.UNAVAILABLE,"The operation could not be completed")))}),Fr(p,Br.EventType.MESSAGE,N=>{if(!m){const L=N.data[0];j(!!L,16349);const F=L,K=F?.error||F[0]?.error;if(K){B(Be,`RPC '${e}' stream ${i} received error:`,K);const ie=K.status;let fe=function(Le){const I=Te[Le];if(I!==void 0)return dd(I)}(ie),Ee=K.message;ie==="NOT_FOUND"&&Ee.includes("database")&&Ee.includes("does not exist")&&Ee.includes(this.databaseId.database)&&Et(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),fe===void 0&&(fe=V.INTERNAL,Ee="Unknown error status: "+ie+" with message "+K.message),m=!0,R.en(new q(fe,Ee)),p.close()}else B(Be,`RPC '${e}' stream ${i} received:`,L),R.tn(L)}}),nr.rn(),setTimeout(()=>{R.Xt()},0),R}terminate(){this.nn.forEach(e=>e.close()),this.nn=[]}En(e){this.nn.push(e)}hn(e){this.nn=this.nn.filter(t=>t===e)}kt(e,t,r){super.kt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Lh()}}/**
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
 */function y7(n){return new nr(n)}nr.sn=!1;class Rd{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Tn=e,this.timerId=t,this.Pn=r,this.Rn=i,this.In=s,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(e){this.cancel();const t=Math.floor(this.An+this.pn()),r=Math.max(0,Date.now()-this.dn),i=Math.max(0,t-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.An} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,i,()=>(this.dn=Date.now(),e())),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
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
 */const cu="PersistentStream";class Pd{constructor(e,t,r,i,s,o,c,l){this.Tn=e,this.yn=r,this.wn=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.bn=0,this.vn=null,this.Sn=null,this.stream=null,this.Dn=0,this.xn=new Rd(e,t)}Cn(){return this.state===1||this.state===5||this.Fn()}Fn(){return this.state===2||this.state===3}start(){this.Dn=0,this.state!==4?this.auth():this.On()}async stop(){this.Cn()&&await this.close(0)}Mn(){this.state=0,this.xn.reset()}Nn(){this.Fn()&&this.vn===null&&(this.vn=this.Tn.enqueueAfterDelay(this.yn,6e4,()=>this.Ln()))}Bn(e){this.Un(),this.stream.send(e)}async Ln(){if(this.Fn())return this.close(0)}Un(){this.vn&&(this.vn.cancel(),this.vn=null)}kn(){this.Sn&&(this.Sn.cancel(),this.Sn=null)}async close(e,t){this.Un(),this.kn(),this.xn.cancel(),this.bn++,e!==4?this.xn.reset():t&&t.code===V.RESOURCE_EXHAUSTED?($t(t.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.xn.fn()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ht(t)}qn(){}auth(){this.state=1;const e=this.$n(this.bn),t=this.bn;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.bn===t&&this.Kn(r,i)},r=>{e(()=>{const i=new q(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Wn(i)})})}Kn(e,t){const r=this.$n(this.bn);this.stream=this.Qn(e,t),this.stream.Qt(()=>{r(()=>this.listener.Qt())}),this.stream.zt(()=>{r(()=>(this.state=2,this.Sn=this.Tn.enqueueAfterDelay(this.wn,1e4,()=>(this.Fn()&&(this.state=3),Promise.resolve())),this.listener.zt()))}),this.stream.Ht(i=>{r(()=>this.Wn(i))}),this.stream.onMessage(i=>{r(()=>++this.Dn==1?this.Gn(i):this.onNext(i))})}On(){this.state=5,this.xn.mn(async()=>{this.state=0,this.start()})}Wn(e){return B(cu,`close with error: ${e}`),this.stream=null,this.close(4,e)}$n(e){return t=>{this.Tn.enqueueAndForget(()=>this.bn===e?t():(B(cu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _7 extends Pd{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}Qn(e,t){return this.connection.cn("Listen",e,t)}Gn(e){return this.onNext(e)}onNext(e){this.xn.reset();const t=e7(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Rt(o.readTime):X.min()}(e);return this.listener.zn(t,r)}jn(e){const t={};t.database=Ao(this.serializer),t.addTarget=function(s,o){let c;const l=o.target;if(c=xn(l)?{pipelineQuery:o7(s,l)}:hd(l)?{documents:r7(s,l)}:{query:i7(s,l).yt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=_d(s,o.resumeToken);const h=Eo(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(X.min())>0){c.readTime=Ls(s,o.snapshotVersion.toTimestamp());const h=Eo(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=a7(this.serializer,e);r&&(t.labels=r),this.Bn(t)}Hn(e){const t={};t.database=Ao(this.serializer),t.removeTarget=e,this.Bn(t)}}class v7 extends Pd{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Jn(){return this.Dn>0}start(){this.lastStreamToken=void 0,super.start()}qn(){this.Jn&&this.Yn([])}Qn(e,t){return this.connection.cn("Write",e,t)}Gn(e){return j(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,j(!e.writeResults||e.writeResults.length===0,55816),this.listener.Zn()}onNext(e){j(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.xn.reset();const t=n7(e.writeResults,e.commitTime),r=Rt(e.commitTime);return this.listener.Xn(r,t)}er(){const e={};e.database=Ao(this.serializer),this.Bn(e)}Yn(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>t7(this.serializer,r))};this.Bn(t)}}/**
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
 */class w7{}class E7 extends w7{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.tr=!1}nr(){if(this.tr)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Bt(e,t,r,i){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Bt(e,To(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(V.UNKNOWN,s.toString())})}$t(e,t,r,i,s){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.$t(e,To(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())})}terminate(){this.tr=!0,this.connection.terminate()}}function T7(n,e,t,r){return new E7(n,e,t,r)}/**
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
 */const A7="ComponentProvider",lu=new Map;function I7(n,e,t,r,i){return new dm(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Cd(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const uu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kd=41943040;class Xe{static withCacheSize(e){return new Xe(e,Xe.DEFAULT_COLLECTION_PERCENTILE,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}Xe.DEFAULT_COLLECTION_PERCENTILE=10,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xe.DEFAULT=new Xe(kd,Xe.DEFAULT_COLLECTION_PERCENTILE,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xe.DISABLED=new Xe(-1,0,0);/**
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
 */const hu="LruGarbageCollector",b7=1048576;function du([n,e],[t,r]){const i=ne(n,t);return i===0?ne(e,r):i}class x7{constructor(e){this.rr=e,this.buffer=new Ie(du),this.ir=0}sr(){return++this.ir}_r(e){const t=[e,this.sr()];if(this.buffer.size<this.rr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();du(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class S7{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.ur(6e4)}stop(){this.ar&&(this.ar.cancel(),this.ar=null)}get started(){return this.ar!==null}ur(e){B(hu,`Garbage collection scheduled in ${e}ms`),this.ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){mr(t)?B(hu,"Ignoring IndexedDB error during garbage collection: ",t):await gr(t)}await this.ur(3e5)})}}class C7{constructor(e,t){this.cr=e,this.params=t}calculateTargetCount(e,t){return this.cr.lr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Zs.ce);const r=new x7(t);return this.cr.forEachTarget(e,i=>r._r(i.sequenceNumber)).next(()=>this.cr.Er(e,i=>r._r(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.cr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.cr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(uu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),uu):this.hr(e,t))}getCacheSize(e){return this.cr.getCacheSize(e)}hr(e,t){let r,i,s,o,c,l,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,o=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,t))).next(g=>(s=g,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),Wn()<=re.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-p}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function R7(n,e){return new C7(n,e)}/**
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
 */const Nd="firestore.googleapis.com",pu=!0;class fu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Nd,this.ssl=pu}else this.host=e.host,this.ssl=e.ssl??pu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<b7)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cd(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rc{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $g;switch(r.type){case"firstParty":return new Gg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=lu.get(t);r&&(B(A7,"Removing Datastore"),lu.delete(t),r.terminate())}(this),Promise.resolve()}}function P7(n,e,t,r={}){n=si(n,rc);const i=js(e),s=n._getSettings(),o={...s,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&O2(`https://${c}`),s.host!==Nd&&s.host!==c&&Et("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:c,ssl:i,emulatorOptions:r};if(!rr(l,o)&&(n._setSettings(l),r.mockUserToken)){let h,p;if(typeof r.mockUserToken=="string")h=r.mockUserToken,p=qe.MOCK_USER;else{h=m2(r.mockUserToken,n._app?.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new qe(g)}n._authCredentials=new qg(new Uh(h,p))}}/**
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
 */class ic{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ic(this.firestore,e,this._query)}}class ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}toJSON(){return{type:ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Si(t,ke._jsonSchema))return new ke(e,r||null,new W(le.fromString(t.referencePath)))}}ke._jsonSchemaVersion="firestore/documentReference/1.0",ke._jsonSchema={type:Ae("string",ke._jsonSchemaVersion),referencePath:Ae("string")};class gi extends ic{constructor(e,t,r){super(e,t,Xo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new W(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function Od(n,e,...t){if(n=tt(n),arguments.length===1&&(e=Ho.newId()),Jg("doc","path",e),n instanceof rc){const r=le.fromString(e,...t);return z1(r),new ke(n,null,new W(r))}{if(!(n instanceof ke||n instanceof gi))throw new q(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return z1(r),new ke(n.firestore,n instanceof gi?n.converter:null,new W(r))}}/**
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
 */class et{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:et._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Si(e,et._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new et(e.vectorValues);throw new q(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}et._jsonSchemaVersion="firestore/vectorValue/1.0",et._jsonSchema={type:Ae("string",et._jsonSchemaVersion),vectorValues:Ae("object")};/**
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
 */const k7=/^__.*__$/;class N7{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new zn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ri(e,this.data,t,this.fieldTransforms)}}function Dd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:n})}}class sc{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new sc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Fs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Dd(this.dataSource)&&k7.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class O7{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||oa(e)}createContext(e,t,r,i=!1){return new sc({dataSource:e,methodName:t,targetDoc:r,path:Ce.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function D7(n){const e=n._freezeSettings(),t=oa(n._databaseId);return new O7(n._databaseId,!!e.ignoreUndefinedProperties,t)}function V7(n,e,t,r,i,s={}){const o=n.createContext(s.merge||s.mergeFields?2:0,e,t,i);Md("Data must be an object, but it was:",o,r);const c=Vd(r,o);let l,h;if(s.merge)l=new _t(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const m=ca(e,g,t);if(!o.contains(m))throw new q(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);F7(p,m)||p.push(m)}l=new _t(p),h=o.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,h=o.fieldTransforms;return new N7(new ct(c),l,h)}function mi(n,e,t){if(Ld(n=tt(n)))return Md("Unsupported field value:",e,n),Vd(n,e);if(n instanceof Sd)return function(i,s){if(!Dd(s.dataSource))throw s.createError(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(i,s){const o=[];let c=0;for(const l of i){let h=mi(l,s.childContextForArray(c));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),c++}return{arrayValue:{values:o}}}(n,e)}return function(i,s,o){if((i=tt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Yo(s.serializer,i,o);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const c=de.fromDate(i);return{timestampValue:Ls(s.serializer,c)}}if(i instanceof de){const c=new de(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ls(s.serializer,c)}}if(i instanceof Pt)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof pt)return{bytesValue:_d(s.serializer,i._byteString)};if(i instanceof ke){const c=s.databaseId,l=i.firestore._databaseId;if(!l.isEqual(c))throw s.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:tc(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof et)return function(l,h){const p=l instanceof et?l.toArray():l;return{mapValue:{fields:{[Wh]:{stringValue:Kh},[li]:{arrayValue:{values:p.map(m=>{if(typeof m!="number")throw h.createError("VectorValues must only contain numeric values.");return na(h.serializer,m)})}}}}}}(i,s);if(bd(i))return i._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Go(i)}`)}(n,e,t)}function Vd(n,e){const t={};return Bh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Un(n,(r,i)=>{const s=mi(i,e.childContextForField(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Ld(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof de||n instanceof Pt||n instanceof pt||n instanceof ke||n instanceof Sd||n instanceof et||bd(n))}function Md(n,e,t){if(!Ld(t)||!xi(t)){const r=Go(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function ca(n,e,t){if((e=tt(e))instanceof nc)return e._internalPath;if(typeof e=="string")return M7(n,e);throw Fs("Field path arguments must be of type string or ",n,!1,void 0,t)}const L7=new RegExp("[~\\*/\\[\\]]");function M7(n,e,t){if(e.search(L7)>=0)throw Fs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new nc(...e.split("."))._internalPath}catch{throw Fs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Fs(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new q(V.INVALID_ARGUMENT,c+n+l)}function F7(n,e){return n.some(t=>t.isEqual(e))}function U7(n){return typeof n._readUserData=="function"}/**
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
 */class He{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=ct.empty();for(const i in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(i)){const s=this.optionDefinitions[i];if(i in e){const o=e[i];let c;s.nestedOptions&&xi(o)?c={mapValue:{fields:new He(s.nestedOptions).getOptionsProto(t,o)}}:o&&(c=mi(o,t)??void 0),c&&r.set(Ce.fromServerFormat(s.serverName),c)}}return r}getOptionsProto(e,t,r){const i=this._getKnownOptions(t,e);if(r){const s=new Map(um(r,(o,c)=>[Ce.fromServerFormat(c),o!==void 0?mi(o,e):null]));i.setAll(s)}return i.value.mapValue.fields??{}}}/**
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
 */function z7(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!xi(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function B7(n){return new et(n)}/**
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
 */function M(n){let e;return n instanceof $n?n:(e=xi(n)?W7(n):n instanceof Array?K7(n):Fd(n,void 0),e)}function eo(n){if(n instanceof $n)return n;if(n instanceof et)return yi(n);if(Array.isArray(n))return yi(B7(n));throw new Error("Unsupported value: "+typeof n)}function ac(n){return om(n)?j7(n):M(n)}class $n{constructor(){this._protoValueType="ProtoValue"}add(e){return new O("add",[this,M(e)],"add")}asBoolean(){if(this instanceof pn)return this;if(this instanceof yr)return new zd(this);if(this instanceof Ni)return new G7(this);if(this instanceof O)return new Ud(this);throw new q("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new O("subtract",[this,M(e)],"subtract")}multiply(e){return new O("multiply",[this,M(e)],"multiply")}divide(e){return new O("divide",[this,M(e)],"divide")}mod(e){return new O("mod",[this,M(e)],"mod")}equal(e){return new O("equal",[this,M(e)],"equal").asBoolean()}notEqual(e){return new O("not_equal",[this,M(e)],"notEqual").asBoolean()}lessThan(e){return new O("less_than",[this,M(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new O("less_than_or_equal",[this,M(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new O("greater_than",[this,M(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new O("greater_than_or_equal",[this,M(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(i=>M(i));return new O("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new O("array_contains",[this,M(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new qr(e.map(M),"arrayContainsAll"):e;return new O("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new qr(e.map(M),"arrayContainsAny"):e;return new O("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new O("array_reverse",[this])}arrayLength(){return new O("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new qr(e.map(M),"equalAny"):e;return new O("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new qr(e.map(M),"notEqualAny"):e;return new O("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new O("exists",[this],"exists").asBoolean()}charLength(){return new O("char_length",[this],"charLength")}like(e){return new O("like",[this,M(e)],"like").asBoolean()}regexContains(e){return new O("regex_contains",[this,M(e)],"regexContains").asBoolean()}regexFind(e){return new O("regex_find",[this,M(e)],"regexFind")}regexFindAll(e){return new O("regex_find_all",[this,M(e)],"regexFindAll")}regexMatch(e){return new O("regex_match",[this,M(e)],"regexMatch").asBoolean()}stringContains(e){return new O("string_contains",[this,M(e)],"stringContains").asBoolean()}startsWith(e){return new O("starts_with",[this,M(e)],"startsWith").asBoolean()}endsWith(e){return new O("ends_with",[this,M(e)],"endsWith").asBoolean()}toLower(){return new O("to_lower",[this],"toLower")}toUpper(){return new O("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(M(e)),new O("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(M(e)),new O("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(M(e)),new O("rtrim",t,"rtrim")}type(){return new O("type",[this])}isType(e){return new O("is_type",[this,yi(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(M);return new O("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new O("string_index_of",[this,M(e)],"stringIndexOf")}stringRepeat(e){return new O("string_repeat",[this,M(e)],"stringRepeat")}stringReplaceAll(e,t){return new O("string_replace_all",[this,M(e),M(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new O("string_replace_one",[this,M(e),M(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(M);return new O("concat",[this,...r],"concat")}reverse(){return new O("reverse",[this],"reverse")}arrayFilter(e,t){return new O("array_filter",[this,M(e),t],"arrayFilter")}arrayTransform(e,t){return new O("array_transform",[this,M(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new O("array_transform",[this,M(e),M(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,M(e)];return t!==void 0&&r.push(M(t)),new O("array_slice",r,"arraySlice")}arrayFirst(){return new O("array_first",[this],"arrayFirst")}arrayFirstN(e){return new O("array_first_n",[this,M(e)],"arrayFirstN")}arrayLast(){return new O("array_last",[this],"arrayLast")}arrayLastN(e){return new O("array_last_n",[this,M(e)],"arrayLastN")}arrayMaximum(){return new O("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new O("maximum_n",[this,M(e)],"arrayMaximumN")}arrayMinimum(){return new O("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new O("minimum_n",[this,M(e)],"arrayMinimumN")}arrayIndexOf(e){return new O("array_index_of",[this,M(e),M("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new O("array_index_of",[this,M(e),M("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new O("array_index_of_all",[this,M(e)],"arrayIndexOfAll")}byteLength(){return new O("byte_length",[this],"byteLength")}ceil(){return new O("ceil",[this])}floor(){return new O("floor",[this])}abs(){return new O("abs",[this])}exp(){return new O("exp",[this])}mapGet(e){return new O("map_get",[this,yi(e)],"mapGet")}mapSet(e,t,...r){const i=[this,M(e),M(t),...r.map(M)];return new O("map_set",i,"mapSet")}mapKeys(){return new O("map_keys",[this],"mapKeys")}mapValues(){return new O("map_values",[this],"mapValues")}mapEntries(){return new O("map_entries",[this],"mapEntries")}getField(e){return new O("get_field",[this,M(e)],"get_field")}count(){return at._create("count",[this],"count")}sum(){return at._create("sum",[this],"sum")}average(){return at._create("average",[this],"average")}minimum(){return at._create("minimum",[this],"minimum")}maximum(){return at._create("maximum",[this],"maximum")}first(){return at._create("first",[this],"first")}last(){return at._create("last",[this],"last")}arrayAgg(){return at._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return at._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return at._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new O("maximum",[this,...r.map(M)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new O("minimum",[this,...r.map(M)],"minimum")}vectorLength(){return new O("vector_length",[this],"vectorLength")}cosineDistance(e){return new O("cosine_distance",[this,eo(e)],"cosineDistance")}dotProduct(e){return new O("dot_product",[this,eo(e)],"dotProduct")}euclideanDistance(e){return new O("euclidean_distance",[this,eo(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new O("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new O("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new O("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new O("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new O("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new O("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new O("timestamp_add",[this,M(e),M(t)],"timestampAdd")}timestampSubtract(e,t){return new O("timestamp_subtract",[this,M(e),M(t)],"timestampSubtract")}timestampDiff(e,t){return new O("timestamp_diff",[this,ac(e),M(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,M(e)];return t&&r.push(M(t)),new O("timestamp_extract",r,"timestampExtract")}documentId(){return new O("document_id",[this],"documentId")}parent(){return new O("parent",[this],"parent")}substring(e,t){const r=M(e);return new O("substring",t===void 0?[this,r]:[this,r,M(t)],"substring")}arrayGet(e){return new O("array_get",[this,M(e)],"arrayGet")}isError(){return new O("is_error",[this],"isError").asBoolean()}ifError(e){const t=new O("if_error",[this,M(e)],"ifError");return e instanceof pn?t.asBoolean():t}isAbsent(){return new O("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new O("map_remove",[this,M(e)],"mapRemove")}mapMerge(e,...t){const r=M(e),i=t.map(M);return new O("map_merge",[this,r,...i],"mapMerge")}pow(e){return new O("pow",[this,M(e)])}trunc(e){return e===void 0?new O("trunc",[this]):new O("trunc",[this,M(e)],"trunc")}round(e){return e===void 0?new O("round",[this]):new O("round",[this,M(e)],"round")}collectionId(){return new O("collection_id",[this])}length(){return new O("length",[this])}ln(){return new O("ln",[this])}sqrt(){return new O("sqrt",[this])}stringReverse(){return new O("string_reverse",[this])}ifAbsent(e){return new O("if_absent",[this,M(e)],"ifAbsent")}ifNull(e){return new O("if_null",[this,M(e)],"ifNull")}coalesce(e,...t){return new O("coalesce",[this,M(e),...t.map(M)],"coalesce")}join(e){return new O("join",[this,M(e)],"join")}log10(){return new O("log10",[this])}arraySum(){return new O("sum",[this])}split(e){return new O("split",[this,M(e)])}timestampTruncate(e,t){const r=[this,M(e)];return t&&r.push(M(t)),new O("timestamp_trunc",r)}ascending(){return Y7(this)}descending(){return Q7(this)}as(e){return new q7(this,e,"as")}}class at{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const i=new at(e,t);return i._methodName=r,i}as(e){return new $7(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class $7{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class q7{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class qr extends $n{constructor(e,t){super(),this.Rr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.Rr.map(t=>t._toProto(e))}}}_readUserData(e){this.Rr.forEach(t=>t._readUserData(e))}}class Ni extends $n{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new O("geo_distance",[this,M(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function j7(n){return H7(n,"field")}function H7(n,e){return new Ni(typeof n=="string"?ar===n?d7()._internalPath:ca("field",n):n._internalPath,e)}class yr extends $n{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new yr(e,void 0);return t._protoValue=e,t}_toProto(e){return j(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,z7(this._protoValue)||(this._protoValue=mi(this.value,e))}}function yi(n,e){return Fd(n,"constant")}function Fd(n,e){const t=new yr(n,e);return typeof n=="boolean"?new zd(t):t}class O extends $n{constructor(e,t,r,i){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),i!==void 0&&(this._options=i)}get _optionsUtil(){return new He({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class pn extends $n{get _methodName(){return this._expr._methodName}countIf(){return at._create("count_if",[this],"countIf")}not(){return new O("not",[this],"not").asBoolean()}conditional(e,t){return new O("conditional",[this,e,t],"conditional")}ifError(e){const t=M(e),r=new O("if_error",[this,t],"ifError");return t instanceof pn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Ud extends pn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class zd extends pn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class G7 extends pn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function W7(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const i=n[r];t.push(yi(r)),t.push(M(i))}return new O("map",t,"map")}function K7(n){return function(t,r){return new O("array",t.map(i=>M(i)),r)}(n,"array")}function Y7(n){return new Bd(ac(n),"ascending","ascending")}function Q7(n){return new Bd(ac(n),"descending","descending")}class Bd{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:xd(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class ht{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class $d extends ht{get _name(){return"add_fields"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[fi(e,this.fields)]}}_readUserData(e){super._readUserData(e),fn(this.fields,e)}}class qd extends ht{get _name(){return"aggregate"}get _optionsUtil(){return new He({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[fi(e,this.accumulators),fi(e,this.groups)]}}_readUserData(e){super._readUserData(e),fn(this.groups,e),fn(this.accumulators,e)}}class jd extends ht{get _name(){return"distinct"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[fi(e,this.groups)]}}_readUserData(e){super._readUserData(e),fn(this.groups,e)}}class la extends ht{get _name(){return"collection"}get _optionsUtil(){return new He({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Vr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Vr}]}}_readUserData(e){super._readUserData(e)}}class ua extends ht{get _name(){return"collection_group"}get _optionsUtil(){return new He({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class oc extends ht{get _name(){return"database"}get _optionsUtil(){return new He({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class cc extends ht{get _name(){return"documents"}get _optionsUtil(){return new He({})}constructor(e,t){if(super(t),!e||e.length===0)throw new q(V.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(s=>s.startsWith("/")?s:"/"+s),i=new Set(r);if(i.size!==r.length)throw new q(V.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=r,this.mr=i}_toProto(e){return{...super._toProto(e),args:this.dr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class lc extends ht{get _name(){return"where"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),fn(this.condition,e)}}class _i extends ht{get _name(){return"limit"}get _optionsUtil(){return new He({})}constructor(e,t){j(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Yo(e,this.limit)]}}}class gu extends ht{get _name(){return"offset"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Yo(e,this.offset)]}}}class X7 extends ht{get _name(){return"select"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[fi(e,this.selections)]}}_readUserData(e){super._readUserData(e),fn(this.selections,e)}}class uc extends ht{get _name(){return"sort"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),fn(this.orderings,e)}}class hc extends ht{get _name(){return"replace_with"}get _optionsUtil(){return new He({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),xd(hc.pr)]}}_readUserData(e){super._readUserData(e),fn(this.map,e)}}hc.pr="full_replace";function fn(n,e){return U7(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}// Copyright 2024 Google LLC* @license
class Je{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return ha(this)}getPipelineCollectionGroup(){return dc(this)}getPipelineCollectionId(){return J7(this)}getPipelineDocuments(){return bo(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((i,s)=>{i._name!==jd.name&&i._name!==qd.name||(r="keyless"),i._name===X7.name&&r==="exact"&&(r="augmented"),i._name===$d.name&&s<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return an(this)}}function an(n){const e=n.stages[0];return e instanceof la||e instanceof ua||e instanceof oc||e instanceof cc?e._name:"unknown"}function ha(n){if(an(n)==="collection")return n.stages[0].Vr}function dc(n){if(an(n)==="collection_group")return n.stages[0].collectionId}function J7(n){switch(an(n)){case"collection":return le.fromString(ha(n)).lastSegment();case"collection_group":return dc(n);default:return}}function bo(n){if(an(n)==="documents")return n.stages[0].dr}// Copyright 2024 Google LLC* @license
class T{constructor(e,t){this.type=e,this.value=t}static vr(){return new T("ERROR",void 0)}static Sr(){return new T("UNSET",void 0)}static Dr(){return new T("NULL",cr)}static newValue(e){return lt(e)?new T("NULL",cr):function(r){return!!r&&"booleanValue"in r}(e)?new T("BOOLEAN",e):St(e)?new T("INT",e):Rn(e)?new T("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new T("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new T("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new T("BYTES",e):e.referenceValue?new T("REFERENCE",e):e.geoPointValue?new T("GEO_POINT",e):ur(e)?new T("ARRAY",e):Rs(e)?new T("VECTOR",e):kn(e)?new T("MAP",e):new T("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function Zr(n){if(!n.Cr())return n.value}function Hd(n){return n instanceof pn?n._expr:n}function Y(n){if((n=Hd(n))instanceof Ni)return new Z7(n);if(n instanceof yr)return new e4(n);if(n instanceof qr)return new t4(n);if(n instanceof O){if(n.name==="add")return new i4(n);if(n.name==="subtract")return new s4(n);if(n.name==="multiply")return new a4(n);if(n.name==="divide")return new o4(n);if(n.name==="mod")return new c4(n);if(n.name==="and")return new l4(n);if(n.name==="equal")return new E4(n);if(n.name==="not_equal")return new T4(n);if(n.name==="less_than")return new A4(n);if(n.name==="less_than_or_equal")return new I4(n);if(n.name==="greater_than")return new b4(n);if(n.name==="greater_than_or_equal")return new x4(n);if(n.name==="array_concat")return new S4(n);if(n.name==="array_reverse")return new C4(n);if(n.name==="array_contains")return new R4(n);if(n.name==="array_contains_all")return new P4(n);if(n.name==="array_contains_any")return new k4(n);if(n.name==="array_length")return new N4(n);if(n.name==="array_element")return new O4(n);if(n.name==="equal_any")return new Gd(n);if(n.name==="not_equal_any")return new h4(n);if(n.name==="is_nan")return new d4(n);if(n.name==="is_not_nan")return new p4(n);if(n.name==="is_null")return new f4(n);if(n.name==="is_not_null")return new g4(n);if(n.name==="is_error")return new m4(n);if(n.name==="exists")return new y4(n);if(n.name==="not")return new da(n);if(n.name==="or")return new u4(n);if(n.name==="xor")return new pc(n);if(n.name==="conditional")return new _4(n);if(n.name==="maximum")return new v4(n);if(n.name==="minimum")return new w4(n);if(n.name==="reverse")return new D4(n);if(n.name==="replace_first")return new V4(n);if(n.name==="replace_all")return new L4(n);if(n.name==="char_length")return new M4(n);if(n.name==="byte_length")return new F4(n);if(n.name==="like")return new U4(n);if(n.name==="regex_contains")return new z4(n);if(n.name==="regex_match")return new B4(n);if(n.name==="string_contains")return new $4(n);if(n.name==="starts_with")return new q4(n);if(n.name==="ends_with")return new j4(n);if(n.name==="to_lower")return new H4(n);if(n.name==="to_upper")return new G4(n);if(n.name==="trim")return new W4(n);if(n.name==="string_concat")return new K4(n);if(n.name==="map_get")return new Y4(n);if(n.name==="cosine_distance")return new Q4(n);if(n.name==="dot_product")return new X4(n);if(n.name==="euclidean_distance")return new J4(n);if(n.name==="vector_length")return new Z4(n);if(n.name==="unix_micros_to_timestamp")return new i3(n);if(n.name==="timestamp_to_unix_micros")return new o3(n);if(n.name==="unix_millis_to_timestamp")return new s3(n);if(n.name==="timestamp_to_unix_millis")return new c3(n);if(n.name==="unix_seconds_to_timestamp")return new a3(n);if(n.name==="timestamp_to_unix_seconds")return new l3(n);if(n.name==="timestamp_add")return new u3(n);if(n.name==="timestamp_subtract")return new h3(n)}throw new Error(`Unknown Expr : ${n}`)}class Z7{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===ar)return T.newValue({referenceValue:Ms(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return T.newValue({timestampValue:ps(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return T.newValue({timestampValue:ps(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?ta(r)?T.newValue(function(s,o){if(s.serverTimestampBehavior==="estimate")return{timestampValue:ps(s.serializer,X.fromTimestamp(or(o)))};if(s.serverTimestampBehavior==="previous"){const c=Ci(o);if(c)return c}return{nullValue:"NULL_VALUE"}}(e,r)):T.newValue(r):T.Sr()}}class e4{constructor(e){this.expr=e}evaluate(e,t){return T.newValue(this.expr._getValue())}}class t4{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.Rr.map(i=>Y(i).evaluate(e,t));return r.some(i=>i.Cr())?T.vr():T.newValue({arrayValue:{values:r.map(i=>i.value)}})}}function Ue(n){return Rn(n)?Number(n.doubleValue):Number(n.integerValue)}function Ot(n){return BigInt(n.integerValue)}const n4=BigInt("0x7fffffffffffffff"),r4=-BigInt("0x8000000000000000");class Oi{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length>=2,24778);const r=Y(this.expr.params[0]).evaluate(e,t),i=Y(this.expr.params[1]).evaluate(e,t);let s=this.Or(r,i);for(const o of this.expr.params.slice(2)){const c=Y(o).evaluate(e,t);s=this.Or(s,c)}return s}Or(e,t){if(e.Cr()||t.Cr())return T.vr();if(e.Fr()||t.Fr())return T.Dr();const r=e.value,i=t.value;if(!Rn(r)&&!St(r)||!Rn(i)&&!St(i))return T.vr();if(Rn(r)||Rn(i)){const s=this.Mr(r,i);return s?T.newValue(s):T.vr()}if(St(r)&&St(i)){const s=this.Nr(r,i);return s===void 0?T.vr():typeof s=="number"?T.newValue({doubleValue:s}):s<r4||s>n4?T.vr():T.newValue({integerValue:`${s}`})}return T.vr()}}function qt(n,e){return xe(n)!==xe(e)?"TYPE_MISMATCH":it(n)||it(e)?"NOT_EQ":lt(n)&&lt(e)?"EQ":lt(n)||lt(e)?"NULL":ur(n)&&ur(e)?function(r,i){if(r.values?.length!==i.values?.length)return"NOT_EQ";let s=!1;for(let o=0;o<(r.values?.length??0);o++){const c=r.values[o],l=i.values[o];switch(qt(c,l)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":s=!0;break;default:G(44609,{Lr:c,Br:l})}}return s?"NULL":"EQ"}(n.arrayValue,e.arrayValue):Rs(n)&&Rs(e)||kn(n)&&kn(e)?function(r,i){const s=r.fields||{},o=i.fields||{};if(Ss(s)!==Ss(o))return"NOT_EQ";let c=!1;for(const l in s)if(s.hasOwnProperty(l)){if(o[l]===void 0)return"NOT_EQ";switch(qt(s[l],o[l])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":c=!0}}return c?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,i){return gt(r,i,{Te:!1,Ee:!0,he:!0})}(n,e)?"EQ":"NOT_EQ"}class i4 extends Oi{Nr(e,t){return Ot(e)+Ot(t)}Mr(e,t){return{doubleValue:Ue(e)+Ue(t)}}}class s4 extends Oi{constructor(e){super(e),this.expr=e}Nr(e,t){return Ot(e)-Ot(t)}Mr(e,t){return{doubleValue:Ue(e)-Ue(t)}}}class a4 extends Oi{constructor(e){super(e),this.expr=e}Nr(e,t){return Ot(e)*Ot(t)}Mr(e,t){return{doubleValue:Ue(e)*Ue(t)}}}class o4 extends Oi{constructor(e){super(e),this.expr=e}Nr(e,t){const r=Ot(t);if(r!==BigInt(0))return Ot(e)/r}Mr(e,t){const r=Ue(t);return r===0?{doubleValue:oi(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Ue(e)/r}}}class c4 extends Oi{constructor(e){super(e),this.expr=e}Nr(e,t){const r=Ot(t);if(r!==BigInt(0))return Ot(e)%r}Mr(e,t){const r=Ue(t);if(r!==0)return{doubleValue:Ue(e)%r}}}class l4{constructor(e){this.expr=e}evaluate(e,t){let r=!1,i=!1;for(const s of this.expr.params){const o=Y(s).evaluate(e,t);switch(o.type){case"BOOLEAN":if(!o.value?.booleanValue)return T.newValue(De);break;case"NULL":i=!0;break;default:r=!0}}return r?T.vr():i?T.Dr():T.newValue(nt)}}class da{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===1,9634);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return T.newValue({booleanValue:!r.value?.booleanValue});case"NULL":return T.Dr();default:return T.vr()}}}class u4{constructor(e){this.expr=e}evaluate(e,t){let r=!1,i=!1;for(const s of this.expr.params){const o=Y(s).evaluate(e,t);switch(o.type){case"BOOLEAN":if(o.value?.booleanValue)return T.newValue(nt);break;case"NULL":i=!0;break;default:r=!0}}return r?T.vr():i?T.Dr():T.newValue(De)}}class pc{constructor(e){this.expr=e}evaluate(e,t){let r=!1,i=!1;for(const s of this.expr.params){const o=Y(s).evaluate(e,t);switch(o.type){case"BOOLEAN":r=pc.xor(r,!!o.value?.booleanValue);break;case"NULL":i=!0;break;default:return T.vr()}}return i?T.Dr():T.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class Gd{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===2,55094);let r=!1;const i=Y(this.expr.params[0]).evaluate(e,t);switch(i.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return T.vr()}const s=Y(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();for(const o of s.value?.arrayValue?.values??[])switch(lt(i.value)&&lt(o)?"EQ":qt(i.value,o)){case"EQ":return T.newValue(nt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:G(44608,{value:i.value,candidate:o})}return r?T.Dr():T.newValue(De)}}class h4{constructor(e){this.expr=e}evaluate(e,t){return new da(new O("not",[new O("equal_any",this.expr.params)])).evaluate(e,t)}}class d4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===1,23322);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return T.newValue(De);case"DOUBLE":return T.newValue({booleanValue:isNaN(Ue(r.value))});case"NULL":return T.Dr();default:return T.vr()}}}class p4{constructor(e){this.expr=e}evaluate(e,t){return j(this.expr.params.length===1,50406),new da(new O("not",[new O("is_nan",this.expr.params)])).evaluate(e,t)}}class f4{constructor(e){this.expr=e}evaluate(e,t){switch(j(this.expr.params.length===1,23123),Y(this.expr.params[0]).evaluate(e,t).type){case"NULL":return T.newValue(nt);case"UNSET":case"ERROR":return T.vr();default:return T.newValue(De)}}}class g4{constructor(e){this.expr=e}evaluate(e,t){return j(this.expr.params.length===1,23167),new da(new O("not",[new O("is_null",this.expr.params)])).evaluate(e,t)}}class m4{constructor(e){this.expr=e}evaluate(e,t){return j(this.expr.params.length===1,5228),Y(this.expr.params[0]).evaluate(e,t).type==="ERROR"?T.newValue(nt):T.newValue(De)}}class y4{constructor(e){this.expr=e}evaluate(e,t){switch(j(this.expr.params.length===1,6877),Y(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return T.vr();case"UNSET":return T.newValue(De);default:return T.newValue(nt)}}}class _4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===3,11706);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return r.value?.booleanValue?Y(this.expr.params[1]).evaluate(e,t):Y(this.expr.params[2]).evaluate(e,t);case"NULL":return Y(this.expr.params[2]).evaluate(e,t);default:return T.vr()}}}class v4{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(s=>Y(s).evaluate(e,t));let i;for(const s of r)switch(s.type){case"ERROR":case"UNSET":case"NULL":continue;default:i=i===void 0||rt(s.value,i.value)>0?s:i}return i===void 0?T.Dr():i}}class w4{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(s=>Y(s).evaluate(e,t));let i;for(const s of r)switch(s.type){case"ERROR":case"UNSET":case"NULL":continue;default:i=i===void 0||rt(s.value,i.value)<0?s:i}return i===void 0?T.Dr():i}}class _r{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return T.vr()}const i=Y(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ERROR":case"UNSET":return T.vr()}return this.Ur(r,i)}}class E4 extends _r{constructor(e){super(e),this.expr=e}Ur(e,t){if(e.Fr()&&t.Fr())return T.newValue(nt);if(e.Fr()||t.Fr()||it(e.value)||it(t.value)||xe(e.value)!==xe(t.value))return T.newValue(De);switch(qt(e.value,t.value)){case"EQ":return T.newValue(nt);case"NOT_EQ":return T.newValue(De);case"NULL":return T.Dr();default:G(44615,{left:e,right:t})}}}class T4 extends _r{constructor(e){super(e),this.expr=e}Ur(e,t){switch(qt(e.value,t.value)){case"EQ":return T.newValue(De);case"NOT_EQ":case"TYPE_MISMATCH":return T.newValue(nt);case"NULL":return T.Dr();default:G(44614,{left:e,right:t})}}}class A4 extends _r{constructor(e){super(e),this.expr=e}Ur(e,t){return xe(e.value)!==xe(t.value)||it(e.value)||it(t.value)?T.newValue(De):T.newValue({booleanValue:rt(e.value,t.value)<0})}}class I4 extends _r{constructor(e){super(e),this.expr=e}Ur(e,t){return xe(e.value)!==xe(t.value)||it(e.value)||it(t.value)?T.newValue(De):qt(e.value,t.value)==="EQ"?T.newValue(nt):T.newValue({booleanValue:rt(e.value,t.value)<0})}}class b4 extends _r{constructor(e){super(e),this.expr=e}Ur(e,t){return xe(e.value)!==xe(t.value)||it(e.value)||it(t.value)?T.newValue(De):T.newValue({booleanValue:rt(e.value,t.value)>0})}}class x4 extends _r{constructor(e){super(e),this.expr=e}Ur(e,t){return xe(e.value)!==xe(t.value)||it(e.value)||it(t.value)?T.newValue(De):qt(e.value,t.value)==="EQ"?T.newValue(nt):T.newValue({booleanValue:rt(e.value,t.value)>0})}}class S4{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class C4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===1,216);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"ARRAY":{const i=r.value.arrayValue?.values??[];return T.newValue({arrayValue:{values:[...i].reverse()}})}default:return T.vr()}}}class R4{constructor(e){this.expr=e}evaluate(e,t){return j(this.expr.params.length===2,52884),new Gd(new O("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class P4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===2,1392);let r=!1;const i=Y(this.expr.params[0]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}const s=Y(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const o=s.value?.arrayValue?.values??[],c=i.value?.arrayValue?.values??[];for(const l of o){let h=!1;r=!1;for(const p of c){switch(lt(l)&&lt(p)?"EQ":qt(l,p)){case"EQ":h=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:G(44613,{value:p,search:l})}if(h)break}if(!h)return T.newValue(De)}return T.newValue(nt)}}class k4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===2,2680);let r=!1;const i=Y(this.expr.params[0]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}const s=Y(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const o=s.value?.arrayValue?.values??[],c=i.value?.arrayValue?.values??[];for(const l of c)for(const h of o)switch(lt(l)&&lt(h)?"EQ":qt(l,h)){case"EQ":return T.newValue(nt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:G(44608,{value:l,search:h})}return r?T.Dr():T.newValue(De)}}class N4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===1,38605);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"ARRAY":return T.newValue({integerValue:`${r.value?.arrayValue?.values?.length??0}`});default:return T.vr()}}}class O4{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class D4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===1,1508);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"BYTES":{const i=r.value?.bytesValue;if(typeof i=="string"){const s=be.fromBase64String(i).toUint8Array();return s.reverse(),T.newValue({bytesValue:be.fromUint8Array(s).toBase64()})}return T.newValue({bytesValue:new Uint8Array(i).reverse()})}case"STRING":{const i=r.value?.stringValue,s=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(i),o=Array.from(s,c=>c.segment).reverse();return T.newValue({stringValue:o.join("")})}default:return T.vr()}}}class V4{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class L4{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class M4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===1,19400);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return T.Dr();case"STRING":{const i=function(o){let c=0;for(let l=0;l<o.length;l++){const h=o.codePointAt(l);if(h===void 0)return;if(h<=65535)if(h>=55296&&h<=57343)if(h<=56319){const p=o.codePointAt(l+1);p!==void 0&&p>=56320&&p<=57343?(c+=1,l++):c+=1}else c+=1;else c+=1;else{if(!(h<=1114111))return;c+=1,l++}}return c}(r.value.stringValue);return i===void 0?T.vr():T.newValue({integerValue:i})}default:return T.vr()}}}class F4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===1,8486);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const i=r.value?.bytesValue;return typeof i=="string"?T.newValue({integerValue:be.fromBase64String(i).toUint8Array().length}):T.newValue({integerValue:new Uint8Array(i).length})}case"STRING":{const i=function(o){let c=0;for(let l=0;l<o.length;l++){const h=o.codePointAt(l);if(h===void 0)return;if(h>=55296&&h<=57343){if(!(h<=56319))return;{const p=o.codePointAt(l+1);if(p===void 0||!(p>=56320&&p<=57343))return;c+=4,l++}}else if(h<=127)c+=1;else if(h<=2047)c+=2;else if(h<=65535)c+=3;else{if(!(h<=1114111))return;c+=4,l++}}return c}(r.value?.stringValue);return i===void 0?T.vr():T.newValue({integerValue:i})}case"NULL":return T.Dr();default:return T.vr()}}}class vr{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const i=Y(this.expr.params[0]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return T.vr()}const s=Y(this.expr.params[1]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return T.vr()}return r?T.Dr():this.kr(i.value?.stringValue,s.value?.stringValue)}}class U4 extends vr{kr(e,t){try{const r=function(o){let c="";for(let l=0;l<o.length;l++){const h=o.charAt(l);switch(h){case"_":c+=".";break;case"%":c+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":c+="\\"+h;break;default:c+=h}}return"^"+c+"$"}(t),i=dt.compile(r);return T.newValue({booleanValue:i.matches(e)})}catch(r){return Et(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),T.vr()}}}class z4 extends vr{kr(e,t){try{const r=dt.compile(t);return T.newValue({booleanValue:r.matcher(e).find()})}catch{return Et(`Invalid regex pattern found in regex_contains: ${t}, returning error`),T.vr()}}}class B4 extends vr{kr(e,t){try{return T.newValue({booleanValue:dt.compile(t).matches(e)})}catch{return Et(`Invalid regex pattern found in regex_match: ${t}, returning error`),T.vr()}}}class $4 extends vr{kr(e,t){return T.newValue({booleanValue:e.includes(t)})}}class q4 extends vr{kr(e,t){return T.newValue({booleanValue:e.startsWith(t)})}}class j4 extends vr{kr(e,t){return T.newValue({booleanValue:e.endsWith(t)})}}class H4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===1,29079);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return T.newValue({stringValue:r.value?.stringValue?.toLowerCase()});case"NULL":return T.Dr();default:return T.vr()}}}class G4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===1,60487);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return T.newValue({stringValue:r.value?.stringValue?.toUpperCase()});case"NULL":return T.Dr();default:return T.vr()}}}class W4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===1,28544);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return T.newValue({stringValue:r.value?.stringValue?.trim()});case"NULL":return T.Dr();default:return T.vr()}}}class K4{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(o=>Y(o).evaluate(e,t));let i="",s=!1;for(const o of r)switch(o.type){case"STRING":i+=o.value.stringValue;break;case"NULL":s=!0;break;default:return T.vr()}return s?T.Dr():T.newValue({stringValue:i})}}class Y4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===2,4483);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return T.Sr();case"MAP":break;default:return T.vr()}const i=Y(this.expr.params[1]).evaluate(e,t);if(i.type!=="STRING")return T.vr();const s=r.value?.mapValue?.fields?.[i.value?.stringValue];return s===void 0?T.Sr():T.newValue(s)}}class fc{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const i=Y(this.expr.params[0]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return T.vr()}const s=Y(this.expr.params[1]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const o=_o(i.value),c=_o(s.value);if(o===void 0||c===void 0||o.values?.length!==c.values?.length)return T.vr();const l=this.qr(o,c);return l===void 0||isNaN(l)?T.vr():T.newValue({doubleValue:l})}}class Q4 extends fc{qr(e,t){const r=e?.values??[],i=t?.values??[];if(r.length===0)return;let s=0,o=0,c=0;for(let h=0;h<r.length;h++){if(!dn(r[h])||!dn(i[h]))return;const p=Ue(r[h]),g=Ue(i[h]);s+=p*g,o+=p*p,c+=g*g}const l=Math.sqrt(o)*Math.sqrt(c);if(l!==0)return 1-Math.max(-1,Math.min(1,s/l))}}class X4 extends fc{qr(e,t){const r=e?.values??[],i=t?.values??[];if(r.length===0)return 0;let s=0;for(let o=0;o<r.length;o++){if(!dn(r[o])||!dn(i[o]))return;s+=Ue(r[o])*Ue(i[o])}return s}}class J4 extends fc{qr(e,t){const r=e?.values??[],i=t?.values??[];if(r.length===0)return 0;let s=0;for(let o=0;o<r.length;o++){if(!dn(r[o])||!dn(i[o]))return;const c=Ue(r[o]),l=Ue(i[o]);s+=Math.pow(c-l,2)}return Math.sqrt(s)}}class Z4{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===1,39044);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=_o(r.value);return T.newValue({integerValue:i?.values?.length??0})}case"NULL":return T.Dr();default:return T.vr()}}}const vi=BigInt(-62135596800),wi=BigInt(253402300799),Us=BigInt(1e3),on=BigInt(1e6),e3=vi*Us,t3=wi*Us+BigInt(999),n3=vi*on,r3=wi*on+BigInt(999999);function gc(n){return n>=n3&&n<=r3}function Wd(n){return n>=vi&&n<=wi}function Ei(n,e){const t=BigInt(n);return!(t<vi||t>wi)&&!(e<0||e>=1e9)&&(t!==vi||e===0)&&!(t===wi&&e>999999999)}function Kd(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function mc(n){return BigInt(n.seconds)*on+BigInt(Math.trunc(n.nanoseconds/1e3))}class yc{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return T.Dr();default:return T.vr()}}}class i3 extends yc{toTimestamp(e){if(!gc(e))return T.vr();let t=Number(e/on),r=Number(e%on*BigInt(1e3));const i=Kd(t,r);return t=i.seconds,r=i.nanos,Ei(t,r)?T.newValue({timestampValue:{seconds:t,nanos:r}}):T.vr()}}class s3 extends yc{toTimestamp(e){if(!function(o){return o>=e3&&o<=t3}(e))return T.vr();let t=Number(e/Us),r=Number(e%Us*BigInt(1e6));const i=Kd(t,r);return t=i.seconds,r=i.nanos,Ei(t,r)?T.newValue({timestampValue:{seconds:t,nanos:r}}):T.vr()}}class a3 extends yc{toTimestamp(e){if(!Wd(e))return T.vr();const t=Number(e);return T.newValue({timestampValue:{seconds:t,nanos:0}})}}class _c{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=Y(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return T.Dr();default:return T.vr()}const i=ec(r.value.timestampValue);return Ei(i.seconds,i.nanoseconds)?this.$r(i):T.vr()}}class o3 extends _c{$r(e){const t=mc(e);return gc(t)?T.newValue({integerValue:`${t.toString()}`}):T.vr()}}class c3 extends _c{$r(e){const t=mc(e),r=t/BigInt(1e3),i=t%BigInt(1e3);return r>BigInt(0)||i===BigInt(0)?T.newValue({integerValue:r.toString()}):T.newValue({integerValue:(r-BigInt(1)).toString()})}}class l3 extends _c{$r(e){const t=BigInt(e.seconds);return Wd(t)?T.newValue({integerValue:t.toString()}):T.vr()}}class Yd{constructor(e){this.expr=e}evaluate(e,t){j(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const i=Y(this.expr.params[0]).evaluate(e,t);switch(i.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return T.vr()}const s=Y(this.expr.params[1]).evaluate(e,t);let o;switch(s.type){case"STRING":if(o=function(ie){switch(ie){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(s.value.stringValue),o===void 0)return T.vr();break;case"NULL":r=!0;break;default:return T.vr()}const c=Y(this.expr.params[2]).evaluate(e,t);switch(c.type){case"INT":break;case"NULL":r=!0;break;default:return T.vr()}if(r)return T.Dr();const l=BigInt(c.value.integerValue);let h;try{switch(o){case"microsecond":h=l;break;case"millisecond":h=l*BigInt(1e3);break;case"second":h=l*BigInt(1e6);break;case"minute":h=l*BigInt(6e7);break;case"hour":h=l*BigInt(36e8);break;case"day":h=l*BigInt(864e8);break;default:return T.vr()}if(o!=="microsecond"&&l!==BigInt(0)&&h/l!==BigInt(this.Kr(o)))return T.vr()}catch(K){return Et(`Error during timestamp arithmetic: ${K}`),T.vr()}const p=ec(i.value.timestampValue);if(!Ei(p.seconds,p.nanoseconds))return T.vr();const g=mc(p),m=this.Wr(g,h);if(!gc(m))return T.vr();const R=Number(m/on),N=m%on,L=Number((N<0?N+on:N)*BigInt(1e3)),F=N<0?R-1:R;return Ei(F,L)?T.newValue({timestampValue:{seconds:F,nanos:L}}):T.vr()}Kr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class u3 extends Yd{Wr(e,t){return e+t}}class h3 extends Yd{Wr(e,t){return e-t}}function Ti(n){if((n=Hd(n))instanceof Ni)return`fld(${n.fieldName})`;if(n instanceof yr)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof ke?`ref(${t.path})`:t instanceof et?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof O)return`fn(${n.name},[${n.params.map(Ti).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.Rr.map(Ti).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function d3(n){if(n instanceof $d)return`${n._name}(${is(n.fields)})`;if(n instanceof qd){let e=`${n._name}(${is(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${is(n.groups)})`),e}if(n instanceof jd)return`${n._name}(${is(n.groups)})`;if(n instanceof la)return`${n._name}(${n.Vr})`;if(n instanceof ua)return`${n._name}(${n.collectionId})`;if(n instanceof oc)return`${n._name}()`;if(n instanceof cc)return`${n._name}(${n.dr.sort()})`;if(n instanceof lc)return`${n._name}(${Ti(n.condition)})`;if(n instanceof _i)return`${n._name}(${n.limit})`;if(n instanceof uc)return`${n._name}(${function(t){return t.map(r=>`${Ti(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function is(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${Ti(t)}`).join(",")}`}function Ut(n){return n.stages.map(e=>d3(e)).join("|")}function Qd(n,e){return Ut(n)===Ut(e)}function Pe(n){return n instanceof Je}function mu(n){return Pe(n)?Ut(n):Xr(n)}function Xd(n){return Pe(n)?Ut(n):function(t){return`${ld(Ct(t))}|lt:${t.limitType}`}(n)}function pa(n,e){return n instanceof Je&&e instanceof Je?Qd(n,e):!(n instanceof Je&&!(e instanceof Je)||!(n instanceof Je)&&e instanceof Je)&&Mm(n,e)}function Jd(n){return xn(n)?Ut(n):ld(n)}function Zd(n,e){return n instanceof Je&&e instanceof Je?Qd(n,e):!(n instanceof Je&&!(e instanceof Je)||!(n instanceof Je)&&e instanceof Je)&&ud(n,e)}/**
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
 */class p3{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&wm(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Yr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Yr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=gd();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const l=ed(o,c);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),te())}isEqual(e){return this.batchId===e.batchId&&sr(this.mutations,e.mutations,(t,r)=>K1(t,r))&&sr(this.baseMutations,e.baseMutations,(t,r)=>K1(t,r))}}class vc{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){j(e.mutations.length===r.length,58842,{Qr:e.mutations.length,Gr:r.length});let i=function(){return $m}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vc(e,t,r,i)}}/**
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
 */class f3{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Mt{constructor(e,t,r,i,s=X.min(),o=X.min(),c=be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class g3{constructor(e){this.zr=e}}function m3(n){const e=s7({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wo(e,e.limit,"L"):e}/**
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
 */class y3{constructor(){this.Hi=new _3}addToCollectionParentIndex(e,t){return this.Hi.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Hi.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(ln.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(ln.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class _3{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ie(le.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ie(le.comparator)).toArray()}}/**
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
 */class gn{constructor(e){this.Ds=e}next(){return this.Ds+=2,this.Ds}static xs(){return new gn(0)}static Cs(){return new gn(-1)}}// Copyright 2024 Google LLC* @license
function ep(n,e){let t=e;for(const r of n.stages)t=w3({serializer:n.serializer,serverTimestampBehavior:n.listenOptions?.serverTimestampBehavior},r,t);return t}function fa(n,e){return ep(n,[e]).length>0}function v3(n,e){return Pe(n)?fa(n,e):aa(n,e)}function w3(n,e,t){if(e instanceof la)return function(i,s,o){return o.filter(c=>c.isFoundDocument()&&`/${c.key.getCollectionPath().canonicalString()}`===s.Vr)}(0,e,t);if(e instanceof lc)return function(i,s,o){return o.filter(c=>{const l=Zr(Y(s.condition).evaluate(i,c));return l!==void 0&&gt(l,nt)})}(n,e,t);if(e instanceof ua)return function(i,s,o){return o.filter(c=>c.isFoundDocument()&&c.key.getCollectionPath().lastSegment()===s.collectionId)}(0,e,t);if(e instanceof oc)return function(i,s,o){return o.filter(c=>c.isFoundDocument())}(0,0,t);if(e instanceof cc)return function(i,s,o){return o.filter(c=>c.isFoundDocument()&&s.mr.has(c.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof _i)return function(i,s,o){return o.slice(0,s.limit)}(0,e,t);if(e instanceof uc)return function(i,s,o){const c=s.orderings.map(l=>({ks:Y(l.expr),direction:l.direction}));return[...o].sort((l,h)=>{for(const{ks:p,direction:g}of c){const m=Zr(p.evaluate(i,l)),R=Zr(p.evaluate(i,h)),N=rt(m??cr,R??cr);if(N!==0)return g==="ascending"?N:-N}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function xo(n){const e=function(r){for(let i=r.stages.length-1;i>=0;i--){const s=r.stages[i];if(s instanceof uc)return s.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const i of e){const s=Zr(Y(i.expr).evaluate({serializer:n.serializer},t)),o=Zr(Y(i.expr).evaluate({serializer:n.serializer},r)),c=rt(s||cr,o||cr);if(c!==0)return i.direction==="ascending"?c:-c}return 0}}function to(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof _i)return{limit:t.limit}}}/**
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
 */class E3{constructor(){this.changes=new Bn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class T3{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class A3{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Yr(r.mutation,i,_t.empty(),de.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,t,r=te()){const i=en();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Kn();return s.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=en();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,te()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=Ze();const o=Jr(),c=function(){return Jr()}();return t.forEach((l,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof zn)?s=s.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),Yr(p.mutation,h,p.mutation.getFieldMask(),de.now())):o.set(h.key,_t.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,p)=>o.set(h,p)),t.forEach((h,p)=>c.set(h,new T3(p,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Jr();let i=new me((o,c)=>o-c),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let p=r.get(l)||_t.empty();p=c.applyToLocalView(h,p),r.set(l,p);const g=(i.get(c.batchId)||te()).add(l);i=i.insert(c.batchId,g)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,p=l.value,g=gd();p.forEach(m=>{if(!s.has(m)){const R=ed(t.get(m),r.get(m));R!==null&&g.set(m,R),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return Pe(t)?this.getDocumentsMatchingPipeline(e,t,r,i):Dm(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Vm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(en());let c=ai,l=s;return o.next(h=>D.forEach(h,(p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),s.get(p)?D.resolve():this.remoteDocumentCache.getEntry(e,p).next(m=>{l=l.insert(p,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,te())).next(p=>({batchId:c,changes:fd(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(r=>{let i=Kn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Kn();return this.indexManager.getCollectionParents(e,s).next(c=>D.forEach(c,l=>{const h=function(g,m){return new sa(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>this.retrieveMatchingLocalDocuments(s,o,c=>aa(t,c)))}getDocumentsMatchingPipeline(e,t,r,i){if(an(t)==="collection_group"){const s=dc(t);let o=Kn();return this.indexManager.getCollectionParents(e,s).next(c=>D.forEach(c,l=>{const h=function(g,m){const R=g.stages.map(N=>N instanceof ua?new la(m.canonicalString(),{}):N);return new Je(g.serializer,R)}(t,l.child(s));return this.getDocumentsMatchingPipeline(e,h,r,i).next(p=>{p.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}{let s;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(o=>{switch(s=o,an(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i);case"documents":let c=te();for(const l of bo(t))c=c.add(W.fromPath(l));return this.remoteDocumentCache.getEntries(e,c);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new q("invalid-argument",`Invalid pipeline source to execute offline: ${Ut(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(s,o,c=>fa(t,c)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((s,o)=>{const c=o.getKey();t.get(c)===null&&(t=t.insert(c,je.newInvalidDocument(c)))});let i=Kn();return t.forEach((s,o)=>{const c=e.get(s);c!==void 0&&Yr(c.mutation,o,_t.empty(),de.now()),r(o)&&(i=i.insert(s,o))}),i}getOverlaysForPipeline(e,t,r){switch(an(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,le.fromString(ha(t)),r);case"collection_group":throw new q("invalid-argument",`Unexpected collection group pipeline: ${Ut(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,bo(t).map(i=>W.fromPath(i)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new q("invalid-argument",`Failed to get overlays for pipeline: ${Ut(t)}`)}}}/**
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
 */class I3{constructor(e){this.serializer=e,this.Hs=new Map,this.Js=new Map}getBundleMetadata(e,t){return D.resolve(this.Hs.get(t))}saveBundleMetadata(e,t){return this.Hs.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Rt(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Js.get(t))}saveNamedQuery(e,t){return this.Js.set(t.name,function(i){return{name:i.name,query:m3(i.bundledQuery),readTime:Rt(i.readTime)}}(t)),D.resolve()}}/**
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
 */class b3{constructor(){this.overlays=new me(W.comparator),this.Ys=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=en();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}getAllOverlays(e,t){const r=en();return this.overlays.forEach((i,s)=>{s.largestBatchId>t&&r.set(i,s)}),D.resolve(r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Hr(e,t,s)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ys.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ys.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=en(),s=t.length+1,o=new W(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new me((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=en(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const c=en(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,p)=>c.set(h,p)),!(c.size()>=i)););return D.resolve(c)}Hr(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ys.get(i.largestBatchId).delete(r.key);this.Ys.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new f3(t,r));let s=this.Ys.get(t);s===void 0&&(s=te(),this.Ys.set(t,s)),this.Ys.set(t,s.add(r.key))}}/**
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
 */class x3{constructor(){this.sessionToken=be.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class wc{constructor(){this.Zs=new Ie(Oe.Xs),this.e_=new Ie(Oe.t_)}isEmpty(){return this.Zs.isEmpty()}addReference(e,t){const r=new Oe(e,t);this.Zs=this.Zs.add(r),this.e_=this.e_.add(r)}n_(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.r_(new Oe(e,t))}i_(e,t){e.forEach(r=>this.removeReference(r,t))}s_(e){const t=new W(new le([])),r=new Oe(t,e),i=new Oe(t,e+1),s=[];return this.e_.forEachInRange([r,i],o=>{this.r_(o),s.push(o.key)}),s}__(){this.Zs.forEach(e=>this.r_(e))}r_(e){this.Zs=this.Zs.delete(e),this.e_=this.e_.delete(e)}o_(e){const t=new W(new le([])),r=new Oe(t,e),i=new Oe(t,e+1);let s=te();return this.e_.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Oe(e,0),r=this.Zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,t){this.key=e,this.a_=t}static Xs(e,t){return W.comparator(e.key,t.key)||ne(e.a_,t.a_)}static t_(e,t){return ne(e.a_,t.a_)||W.comparator(e.key,t.key)}}/**
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
 */class S3{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gs=1,this.u_=new Ie(Oe.Xs)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.gs;this.gs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new p3(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.u_=this.u_.add(new Oe(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.c_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.l_(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Wo:this.gs-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Oe(t,0),i=new Oe(t,Number.POSITIVE_INFINITY),s=[];return this.u_.forEachInRange([r,i],o=>{const c=this.c_(o.a_);s.push(c)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(ne);return t.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.u_.forEachInRange([s,o],c=>{r=r.add(c.a_)})}),D.resolve(this.E_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new W(s),0);let c=new Ie(ne);return this.u_.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(l.a_)),!0)},o),D.resolve(this.E_(c))}E_(e){const t=[];return e.forEach(r=>{const i=this.c_(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){j(this.h_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.u_;return D.forEach(t.mutations,i=>{const s=new Oe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.u_=r})}bs(e){}containsKey(e,t){const r=new Oe(t,0),i=this.u_.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}h_(e,t){return this.l_(e)}l_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}c_(e){const t=this.l_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class C3{constructor(e){this.T_=e,this.docs=function(){return new me(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.T_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let r=Ze();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():je.newInvalidDocument(i))}),D.resolve(r)}getAllEntries(e){let t=Ze();return this.docs.forEach((r,i)=>{t=t.insert(r,i.document)}),D.resolve(t)}getDocumentsMatchingQuery(e,t,r,i){let s,o;Pe(t)?(s=le.fromString(ha(t)),o=p=>fa(t,p)):(s=t.path,o=p=>aa(t,p));let c=Ze();const l=new W(s.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:p,value:{document:g}}=h.getNext();if(!s.isPrefixOf(p.path))break;p.path.length>s.length+1||nm(tm(g),r)<=0||(i.has(g.key)||o(g))&&(c=c.insert(g.key,g.mutableCopy()))}return D.resolve(c)}getAllFromCollectionGroup(e,t,r,i){G(9500)}P_(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new R3(this)}getSize(e){return D.resolve(this.size)}}class R3 extends E3{constructor(e){super(),this.zs=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.zs.addEntry(e,i)):this.zs.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.zs.getEntry(e,t)}getAllFromCache(e,t){return this.zs.getEntries(e,t)}}/**
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
 */class P3{constructor(e){this.persistence=e,this.R_=new Bn(t=>Jd(t),Zd),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.I_=0,this.A_=new wc,this.targetCount=0,this.V_=gn.xs()}forEachTarget(e,t){return this.R_.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.I_)}allocateTargetId(e){return this.highestTargetId=this.V_.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.I_&&(this.I_=t),D.resolve()}Ms(e){this.R_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.V_=new gn(t),this.highestTargetId=t),e.sequenceNumber>this.I_&&(this.I_=e.sequenceNumber)}addTargetData(e,t){return this.Ms(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Ms(t),D.resolve()}removeTargetData(e,t){return this.R_.delete(t.target),this.A_.s_(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.R_.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.R_.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.R_.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.A_.n_(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.A_.i_(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.A_.s_(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.A_.o_(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.A_.containsKey(t))}}/**
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
 */class tp{constructor(e,t){this.d_={},this.overlays={},this.f_=new Zs(0),this.m_=!1,this.m_=!0,this.p_=new x3,this.referenceDelegate=e(this),this.g_=new P3(this),this.indexManager=new y3,this.remoteDocumentCache=function(i){return new C3(i)}(r=>this.referenceDelegate.y_(r)),this.serializer=new g3(t),this.w_=new I3(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.m_=!1,Promise.resolve()}get started(){return this.m_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new b3,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.d_[e.toKey()];return r||(r=new S3(t,this.referenceDelegate),this.d_[e.toKey()]=r),r}getGlobalsCache(){return this.p_}getTargetCache(){return this.g_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.w_}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const i=new k3(this.f_.next());return this.referenceDelegate.b_(),r(i).next(s=>this.referenceDelegate.v_(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}S_(e,t){return D.or(Object.values(this.d_).map(r=>()=>r.containsKey(e,t)))}}class k3 extends im{constructor(e){super(),this.currentSequenceNumber=e}}class Ec{constructor(e){this.persistence=e,this.D_=new wc,this.x_=null}static C_(e){return new Ec(e)}get F_(){if(this.x_)return this.x_;throw G(60996)}addReference(e,t,r){return this.D_.addReference(r,t),this.F_.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.D_.removeReference(r,t),this.F_.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.F_.add(t.toString()),D.resolve()}removeTarget(e,t){this.D_.s_(t.targetId).forEach(i=>this.F_.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.F_.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}b_(){this.x_=new Set}v_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.F_,r=>{const i=W.fromPath(r);return this.O_(e,i).next(s=>{s||t.removeEntry(i,X.min())})}).next(()=>(this.x_=null,t.apply(e)))}updateLimboDocument(e,t){return this.O_(e,t).next(r=>{r?this.F_.delete(t.toString()):this.F_.add(t.toString())})}y_(e){return 0}O_(e,t){return D.or([()=>D.resolve(this.D_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.S_(e,t)])}}class zs{constructor(e,t){this.persistence=e,this.M_=new Bn(r=>cm(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=R7(this,t)}static C_(e,t){return new zs(e,t)}b_(){}v_(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}lr(e){const t=this.Ls(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Ls(e){let t=0;return this.Er(e,r=>{t++}).next(()=>t)}Er(e,t){return D.forEach(this.M_,(r,i)=>this.Us(e,r,i).next(s=>s?D.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.P_(e,o=>this.Us(e,o,t).next(c=>{c||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.M_.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.M_.set(t,e.currentSequenceNumber),D.resolve()}y_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=us(e.data.value)),t}Us(e,t,r){return D.or([()=>this.persistence.S_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.M_.get(t);return D.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Tc{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.wo=r,this.bo=i}static vo(e,t){let r=te(),i=te();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Tc(e,t.fromCache,r,i)}}/**
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
 */function N3(n,e){return W.comparator(n.key,e.key)}/**
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
 */class O3{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class D3{constructor(){this.So=!1,this.Do=!1,this.xo=100,this.Co=function(){return E2()?8:sm(vt())>0?6:4}()}initialize(e,t){this.Fo=e,this.indexManager=t,this.So=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Oo(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Mo(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new O3;return this.No(e,t,o).next(c=>{if(s.result=c,this.Do)return this.Lo(e,t,o,c.size)})}).next(()=>s.result)}Lo(e,t,r,i){return Pe(t)?D.resolve():r.documentReadCount<this.xo?(Wn()<=re.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Xr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.xo,"documents"),D.resolve()):(Wn()<=re.DEBUG&&B("QueryEngine","Query:",Xr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Co*i?(Wn()<=re.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Xr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(t))):D.resolve())}Oo(e,t){if(Pe(t))return D.resolve(null);let r=t;if(eu(r))return D.resolve(null);let i=Ct(r);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(r.limit!==null&&s===1&&(r=wo(r,null,"F"),i=Ct(r)),this.indexManager.getDocumentsMatchingTarget(e,i).next(o=>{const c=te(...o);return this.Fo.getDocuments(e,c).next(l=>this.indexManager.getMinOffset(e,i).next(h=>{const p=this.Bo(r,l);return this.Uo(r,p,c,h.readTime)?this.Oo(e,wo(r,null,"F")):this.ko(e,p,r,h)}))})))}Mo(e,t,r,i){return(Pe(t)?function(o){for(const c of o.stages){if(c instanceof _i||c instanceof gu)return!1;if(c instanceof lc){if(c.condition instanceof Ud&&c.condition._expr.name==="exists"&&c.condition._expr.params[0]instanceof Ni&&c.condition._expr.params[0].fieldName===ar)continue;return!1}}return!0}(t):eu(t))||i.isEqual(X.min())?D.resolve(null):this.Fo.getDocuments(e,r).next(s=>{const o=this.Bo(t,s);return this.Uo(t,o,r,i)?D.resolve(null):(Wn()<=re.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mu(t)),this.ko(e,o,t,em(i,ai)).next(c=>c))})}Bo(e,t){let r,i;return Pe(e)?(r=new Ie(N3),i=s=>fa(e,s)):(r=new Ie(Jo(e)),i=s=>aa(e,s)),t.forEach((s,o)=>{i(o)&&(r=r.add(o))}),r}Uo(e,t,r,i){if(Pe(e))return function(c){return c.stages.some(l=>l instanceof _i||l instanceof gu)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}No(e,t,r){return Wn()<=re.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",mu(t)),this.Fo.getDocumentsMatchingQuery(e,t,ln.min(),r)}ko(e,t,r,i){return this.Fo.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Ac="LocalStore",V3=3e8;class L3{constructor(e,t,r,i){this.persistence=e,this.qo=t,this.serializer=i,this.$o=new me(ne),this.Ko=new Bn(s=>Jd(s),Zd),this.Wo=new Map,this.Qo=e.getRemoteDocumentCache(),this.g_=e.getTargetCache(),this.w_=e.getBundleCache(),this.Go(r)}Go(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new A3(this.Qo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Qo.setIndexManager(this.indexManager),this.qo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.$o))}}function M3(n,e,t,r){return new L3(n,e,t,r)}async function np(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Go(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],c=[];let l=te();for(const h of i){o.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}for(const h of s){c.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(h=>({zo:h,removedBatchIds:o,addedBatchIds:c}))})})}function F3(n,e){const t=J(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Qo.newChangeBuffer({trackRemovals:!0});return function(c,l,h,p){const g=h.batch,m=g.keys();let R=D.resolve();return m.forEach(N=>{R=R.next(()=>p.getEntry(l,N)).next(L=>{const F=h.docVersions.get(N);j(F!==null,48541),L.version.compareTo(F)<0&&(g.applyToRemoteDocument(L,h),L.isValidDocument()&&(L.setReadTime(h.commitVersion),p.addEntry(L)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=te();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function rp(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.g_.getLastRemoteSnapshotVersion(t))}function U3(n,e){const t=J(n),r=e.snapshotVersion;let i=t.$o;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.Qo.newChangeBuffer({trackRemovals:!0});i=t.$o;const c=[];e.targetChanges.forEach((p,g)=>{const m=i.get(g);if(!m)return;c.push(t.g_.removeMatchingKeys(s,p.removedDocuments,g).next(()=>t.g_.addMatchingKeys(s,p.addedDocuments,g)));let R=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(be.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),i=i.insert(g,R),function(L,F,K){return L.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=V3?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(m,R,p)&&c.push(t.g_.updateTargetData(s,R))});let l=Ze(),h=te();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(z3(s,o,e.documentUpdates).next(p=>{l=p.jo,h=p.Ho})),!r.isEqual(X.min())){const p=t.g_.getLastRemoteSnapshotVersion(s).next(g=>t.g_.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return D.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,h)).next(()=>l)}).then(s=>(t.$o=i,s))}function z3(n,e,t){let r=te(),i=te();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Ze();return t.forEach((c,l)=>{const h=s.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):B(Ac,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{jo:o,Ho:i}})}function B3(n,e){const t=J(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Wo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $3(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.g_.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):t.g_.allocateTargetId(r).next(o=>(i=new Mt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.g_.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.$o.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.$o=t.$o.insert(r.targetId,r),t.Ko.set(e,r.targetId)),r})}async function So(n,e,t){const r=J(n),i=r.$o.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!mr(o))throw o;B(Ac,`Failed to update sequence numbers for target ${e}: ${o}`)}r.$o=r.$o.remove(e),r.Ko.delete(i.target)}function yu(n,e,t){const r=J(n);let i=X.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,p){const g=J(l),m=g.Ko.get(p);return m!==void 0?D.resolve(g.$o.get(m)):g.g_.getTargetData(h,p)}(r,o,Pe(e)?e:Ct(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.g_.getMatchingKeysForTargetId(o,c.targetId).next(l=>{s=l})}).next(()=>r.qo.getDocumentsMatchingQuery(o,e,t?i:X.min(),t?s:te())).next(c=>(q3(r,c),{documents:c,Jo:s})))}function q3(n,e){e.forEach((t,r)=>{const i=r.key.getCollectionGroup(),s=n.Wo.get(i)||X.min();r.readTime.compareTo(s)>0&&n.Wo.set(i,r.readTime)})}class _u{constructor(){this.activeTargetIds=Hm()}na(e){this.activeTargetIds=this.activeTargetIds.add(e)}ra(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ta(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class j3{constructor(){this.Ua=new _u,this.ka={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Ua.na(e),this.ka[e]||"not-current"}updateQueryState(e,t,r){this.ka[e]=t}removeLocalQueryTarget(e){this.Ua.ra(e)}isLocalQueryTarget(e){return this.Ua.activeTargetIds.has(e)}clearQueryState(e){delete this.ka[e]}getAllActiveQueryTargets(){return this.Ua.activeTargetIds}isActiveQueryTarget(e){return this.Ua.activeTargetIds.has(e)}start(){return this.Ua=new _u,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function no(){return typeof document<"u"?document:null}/**
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
 */class H3{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.qa=0,this.$a=null,this.Ka=!0}Wa(){this.qa===0&&(this.Qa("Unknown"),this.$a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.$a=null,this.Ga("Backend didn't respond within 10 seconds."),this.Qa("Offline"),Promise.resolve())))}za(e){this.state==="Online"?this.Qa("Unknown"):(this.qa++,this.qa>=1&&(this.ja(),this.Ga(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Qa("Offline")))}set(e){this.ja(),this.qa=0,e==="Online"&&(this.Ka=!1),this.Qa(e)}Qa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ga(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ka?($t(t),this.Ka=!1):B("OnlineStateTracker",t)}ja(){this.$a!==null&&(this.$a.cancel(),this.$a=null)}}/**
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
 */const Dt="RemoteStore";class G3{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ha=[],this.Ja=new Map,this.Ya=new Map,this.Za=new Map,this.Xa=new gn(1e3),this.eu=new gn(1001),this.tu=new Set,this.nu=[],this.ru=s,this.ru.bt(o=>{r.enqueueAndForget(async()=>{qn(this)&&(B(Dt,"Restarting streams for network reachability change."),await async function(l){const h=J(l);h.tu.add(4),await Di(h),h.iu.set("Unknown"),h.tu.delete(4),await ga(h)}(this))})}),this.iu=new H3(r,i)}}async function ga(n){if(qn(n))for(const e of n.nu)await e(!0)}async function Di(n){for(const e of n.nu)await e(!1)}function Co(n,e){return n.Ya.get(e)||void 0}function ip(n,e){const t=J(n),r=Co(t,e.targetId);if(r!==void 0&&t.Ja.has(r))return;const i=function(c,l){const h=Co(c,l);h!==void 0&&c.Za.delete(h);const p=function(m,R){return R%2!=0?m.eu.next():m.Xa.next()}(c,l);return c.Ya.set(l,p),c.Za.set(p,l),p}(t,e.targetId);B(Dt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new Mt(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ja.set(i,s),Sc(t)?xc(t):wr(t).Fn()&&bc(t,s)}function Ic(n,e){const t=J(n),r=wr(t),i=Co(t,e);B(Dt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),t.Ja.delete(i),t.Ya.delete(e),t.Za.delete(i),r.Fn()&&sp(t,i),t.Ja.size===0&&(r.Fn()?r.Nn():qn(t)&&t.iu.set("Unknown"))}function bc(n,e){if(n.su.We(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const t=n.Za.get(e.targetId);if(t===void 0)return void B(Dt,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}wr(n).jn(e)}function sp(n,e){n.su.We(e),wr(n).Hn(e)}function xc(n){n.su=new Km({getRemoteKeysForTarget:e=>{const t=n.Za.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):te()},dt:e=>n.Ja.get(e)||null,Tt:()=>n.datastore.serializer.databaseId}),wr(n).start(),n.iu.Wa()}function Sc(n){return qn(n)&&!wr(n).Cn()&&n.Ja.size>0}function qn(n){return J(n).tu.size===0}function ap(n){n.su=void 0}async function W3(n){n.iu.set("Online")}async function K3(n){n.Ja.forEach((e,t)=>{bc(n,e)})}async function Y3(n,e){ap(n),Sc(n)?(n.iu.za(e),xc(n)):n.iu.set("Unknown")}async function Q3(n,e,t){if(n.iu.set("Online"),e instanceof yd&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds){if(i.Ja.has(c)){const l=i.Za.get(c);l!==void 0&&(await i.remoteSyncer.rejectListen(l,o),i.Ya.delete(l),i.Za.delete(c)),i.Ja.delete(c)}i.su.removeTarget(c)}}(n,e)}catch(r){B(Dt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bs(n,r)}else if(e instanceof ds?n.su.et(e):e instanceof md?n.su.ot(e):n.su.rt(e),!t.isEqual(X.min()))try{const r=await rp(n.localStore);t.compareTo(r)>=0&&await function(s,o){const c=s.su.Rt(o);c.targetChanges.forEach((h,p)=>{if(h.resumeToken.approximateByteSize()>0){const g=s.Ja.get(p);g&&s.Ja.set(p,g.withResumeToken(h.resumeToken,o))}}),c.targetMismatches.forEach((h,p)=>{const g=s.Ja.get(h);if(!g)return;s.Ja.set(h,g.withResumeToken(be.EMPTY_BYTE_STRING,g.snapshotVersion)),sp(s,h);const m=new Mt(g.target,h,p,g.sequenceNumber);bc(s,m)});const l=function(p,g){const m=new Map;g.targetChanges.forEach((N,L)=>{const F=p.Za.get(L);F!==void 0&&m.set(F,N)});let R=new me(ne);return g.targetMismatches.forEach((N,L)=>{const F=p.Za.get(N);F!==void 0&&(R=R.insert(F,L))}),new Pi(g.snapshotVersion,m,R,g.documentUpdates,g.augmentedDocumentUpdates,g.resolvedLimboDocuments)}(s,c);return s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){B(Dt,"Failed to raise snapshot:",r),await Bs(n,r)}}async function Bs(n,e,t){if(!mr(e))throw e;n.tu.add(1),await Di(n),n.iu.set("Offline"),t||(t=()=>rp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B(Dt,"Retrying IndexedDB access"),await t(),n.tu.delete(1),await ga(n)})}function op(n,e){return e().catch(t=>Bs(n,t,e))}async function ma(n){const e=J(n),t=mn(e);let r=e.Ha.length>0?e.Ha[e.Ha.length-1].batchId:Wo;for(;X3(e);)try{const i=await B3(e.localStore,r);if(i===null){e.Ha.length===0&&t.Nn();break}r=i.batchId,J3(e,i)}catch(i){await Bs(e,i)}cp(e)&&lp(e)}function X3(n){return qn(n)&&n.Ha.length<10}function J3(n,e){n.Ha.push(e);const t=mn(n);t.Fn()&&t.Jn&&t.Yn(e.mutations)}function cp(n){return qn(n)&&!mn(n).Cn()&&n.Ha.length>0}function lp(n){mn(n).start()}async function Z3(n){mn(n).er()}async function e9(n){const e=mn(n);for(const t of n.Ha)e.Yn(t.mutations)}async function t9(n,e,t){const r=n.Ha.shift(),i=vc.from(r,e,t);await op(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ma(n)}async function n9(n,e){e&&mn(n).Jn&&await async function(r,i){if(function(o){return zm(o)&&o!==V.ABORTED}(i.code)){const s=r.Ha.shift();mn(r).Mn(),await op(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ma(r)}}(n,e),cp(n)&&lp(n)}async function vu(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),B(Dt,"RemoteStore received new credentials");const r=qn(t);t.tu.add(3),await Di(t),r&&t.iu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.tu.delete(3),await ga(t)}async function r9(n,e){const t=J(n);e?(t.tu.delete(2),await ga(t)):e||(t.tu.add(2),await Di(t),t.iu.set("Unknown"))}function wr(n){return n._u||(n._u=function(t,r,i){const s=J(t);return s.nr(),new _7(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Qt:W3.bind(null,n),zt:K3.bind(null,n),Ht:Y3.bind(null,n),zn:Q3.bind(null,n)}),n.nu.push(async e=>{e?(n._u.Mn(),Sc(n)?xc(n):n.iu.set("Unknown")):(await n._u.stop(),ap(n))})),n._u}function mn(n){return n.ou||(n.ou=function(t,r,i){const s=J(t);return s.nr(),new v7(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Qt:()=>Promise.resolve(),zt:Z3.bind(null,n),Ht:n9.bind(null,n),Zn:e9.bind(null,n),Xn:t9.bind(null,n)}),n.nu.push(async e=>{e?(n.ou.Mn(),await ma(n)):(await n.ou.stop(),n.Ha.length>0&&(B(Dt,`Stopping write stream with ${n.Ha.length} pending writes`),n.Ha=[]))})),n.ou}/**
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
 */class Cc{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new Cc(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rc(n,e){if($t("AsyncQueue",`${e}: ${n}`),mr(n))return new q(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Nn{static emptySet(e){return new Nn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=Kn(),this.sortedSet=new me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Nn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class wu{constructor(){this.au=new me(W.comparator)}track(e){const t=e.doc.key,r=this.au.get(t);r?e.type!==0&&r.type===3?this.au=this.au.insert(t,e):e.type===3&&r.type!==1?this.au=this.au.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.au=this.au.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.au=this.au.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.au=this.au.remove(t):e.type===1&&r.type===2?this.au=this.au.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.au=this.au.insert(t,{type:2,doc:e.doc}):G(63341,{ft:e,uu:r}):this.au=this.au.insert(t,e)}cu(){const e=[];return this.au.inorderTraversal((t,r)=>{e.push(r)}),e}}class hr{constructor(e,t,r,i,s,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new hr(e,t,Nn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class i9{constructor(){this.lu=void 0,this.Eu=[]}hu(){return this.Eu.some(e=>e.Tu())}}class s9{constructor(){this.queries=Eu(),this.onlineState="Unknown",this.Pu=new Set}terminate(){(function(t,r){const i=J(t),s=i.queries;i.queries=Eu(),s.forEach((o,c)=>{for(const l of c.Eu)l.onError(r)})})(this,new q(V.ABORTED,"Firestore shutting down"))}}function Eu(){return new Bn(n=>Xd(n),pa)}async function a9(n,e){const t=J(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.hu()&&e.Tu()&&(r=2):(s=new i9,r=e.Tu()?0:1);try{switch(r){case 0:s.lu=await t.onListen(i,!0);break;case 1:s.lu=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=Rc(o,`Initialization of query '${Pe(e.query)?Ut(e.query):Xr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.Eu.push(e),e.Ru(t.onlineState),s.lu&&e.Iu(s.lu)&&Pc(t)}async function o9(n,e){const t=J(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.Eu.indexOf(e);o>=0&&(s.Eu.splice(o,1),s.Eu.length===0?i=e.Tu()?0:1:!s.hu()&&e.Tu()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function c9(n,e){const t=J(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.Eu)c.Iu(i)&&(r=!0);o.lu=i}}r&&Pc(t)}function l9(n,e,t){const r=J(n),i=r.queries.get(e);if(i)for(const s of i.Eu)s.onError(t);r.queries.delete(e)}function Pc(n){n.Pu.forEach(e=>{e.next()})}var Ro;(function(n){n.Default="default",n.Cache="cache"})(Ro||(Ro={}));class u9{constructor(e,t,r){this.query=e,this.Au=t,this.Vu=!1,this.du=null,this.onlineState="Unknown",this.options=r||{}}Iu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new hr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.fu(e)&&(this.Au.next(e),t=!0):this.mu(e,this.onlineState)&&(this.pu(e),t=!0),this.du=e,t}onError(e){this.Au.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.du&&!this.Vu&&this.mu(this.du,e)&&(this.pu(this.du),t=!0),t}mu(e,t){if(!e.fromCache||!this.Tu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}fu(e){if(e.docChanges.length>0)return!0;const t=this.du&&this.du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}pu(e){e=hr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.Au.next(e)}Tu(){return this.options.source!==Ro.Cache}}/**
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
 */class up{constructor(e){this.key=e}}class hp{constructor(e){this.key=e}}class h9{constructor(e,t){this.query=e,this.Ou=t,this.Mu=null,this.hasCachedResults=!1,this.current=!1,this.Nu=te(),this.mutatedKeys=te(),this.Lu=Pe(e)?xo(e):Jo(e),this.Bu=new Nn(this.Lu)}get Uu(){return this.Ou}ku(e,t){const r=t?t.qu:new wu,i=t?t.Bu:this.Bu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const[l,h]=this.$u(this.query,i);e.inorderTraversal((g,m)=>{const R=i.get(g),N=v3(this.query,m)?m:null,L=!!R&&this.mutatedKeys.has(R.key),F=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let K=!1;R&&N?R.data.isEqual(N.data)?L!==F&&(r.track({type:3,doc:N}),K=!0):this.Ku(R,N)||(r.track({type:2,doc:N}),K=!0,(l&&this.Lu(N,l)>0||h&&this.Lu(N,h)<0)&&(c=!0)):!R&&N?(r.track({type:0,doc:N}),K=!0):R&&!N&&(r.track({type:1,doc:R}),K=!0,(l||h)&&(c=!0)),K&&(N?(o=o.add(N),s=F?s.add(g):s.delete(g)):(o=o.delete(g),s=s.delete(g)))});const p=this.Wu(this.query);if(p)if(Pe(this.query)){const g=[];o.forEach(N=>g.push(N));const m=ep(this.query,g);let R=new Nn(xo(this.query));for(const N of m)R=R.add(N);o.forEach(N=>{R.has(N.key)||(s=s.delete(N.key),r.track({type:1,doc:N}))}),o=R}else{const g=this.Qu(this.query);for(;o.size>p;){const m=g==="F"?o.last():o.first();o=o.delete(m.key),s=s.delete(m.key),r.track({type:1,doc:m})}}return{Bu:o,qu:r,Uo:c,mutatedKeys:s}}Wu(e){return Pe(e)?to(e)?.limit:e.limit||void 0}Qu(e){if(Pe(e)){const t=to(e);return t&&t.limit<0?"L":"F"}return e.limitType}$u(e,t){if(Pe(e)){const r=to(e)?.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.Wu(this.query)?t.last():null,e.limitType==="L"&&t.size===this.Wu(this.query)?t.first():null]}Ku(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Bu;this.Bu=e.Bu,this.mutatedKeys=e.mutatedKeys;const o=e.qu.cu();o.sort((p,g)=>function(R,N){const L=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{ft:F})}};return L(R)-L(N)}(p.type,g.type)||this.Lu(p.doc,g.doc)),this.Gu(r),i=i??!1;const c=t&&!i?this.zu():[],l=this.Nu.size===0&&this.current&&!i?1:0,h=l!==this.Mu;return this.Mu=l,o.length!==0||h?{snapshot:new hr(this.query,e.Bu,s,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ju:c}:{ju:c}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Bu:this.Bu,qu:new wu,mutatedKeys:this.mutatedKeys,Uo:!1},!1)):{ju:[]}}Hu(e){return!this.Ou.has(e)&&!!this.Bu.has(e)&&!this.Bu.get(e).hasLocalMutations}Gu(e){e&&(e.addedDocuments.forEach(t=>this.Ou=this.Ou.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ou=this.Ou.delete(t)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Nu;this.Nu=te(),this.Bu.forEach(r=>{this.Hu(r.key)&&(this.Nu=this.Nu.add(r.key))});const t=[];return e.forEach(r=>{this.Nu.has(r)||t.push(new hp(r))}),this.Nu.forEach(r=>{e.has(r)||t.push(new up(r))}),t}Ju(e){this.Ou=e.Jo,this.Nu=te();const t=this.ku(e.documents);return this.applyChanges(t,!0)}Yu(){return hr.fromInitialDocuments(this.query,this.Bu,this.mutatedKeys,this.Mu===0,this.hasCachedResults)}}const kc="SyncEngine";class d9{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class p9{constructor(e){this.key=e,this.Zu=!1}}class f9{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Xu={},this.ec=new Bn(c=>Xd(c),pa),this.tc=new Map,this.nc=new Set,this.rc=new me(W.comparator),this.sc=new Map,this._c=new wc,this.oc={},this.ac=new Map,this.uc=gn.Cs(),this.onlineState="Unknown",this.cc=void 0}get isPrimaryClient(){return this.cc===!0}}async function g9(n,e,t=!0){const r=yp(n);let i;const s=r.ec.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Yu()):i=await dp(r,e,t,!0),i}async function m9(n,e){const t=yp(n);await dp(t,e,!0,!1)}async function dp(n,e,t,r){const i=await $3(n.localStore,Pe(e)?e:Ct(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await y9(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&ip(n.remoteStore,i),c}async function y9(n,e,t,r,i){n.lc=(g,m,R)=>async function(L,F,K,ie){let fe=F.view.ku(K);fe.Uo&&(fe=await yu(L.localStore,F.query,!1).then(({documents:I})=>F.view.ku(I,fe)));const Ee=ie&&ie.targetChanges.get(F.targetId),Ve=ie&&ie.targetMismatches.get(F.targetId)!=null,Le=F.view.applyChanges(fe,L.isPrimaryClient,Ee,Ve);return Au(L,F.targetId,Le.ju),Le.snapshot}(n,g,m,R);const s=await yu(n.localStore,e,!0),o=new h9(e,s.Jo),c=o.ku(s.documents),l=ki.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=o.applyChanges(c,n.isPrimaryClient,l);Au(n,t,h.ju);const p=new d9(e,t,o);return n.ec.set(e,p),n.tc.has(t)?n.tc.get(t).push(e):n.tc.set(t,[e]),h.snapshot}async function _9(n,e,t){const r=J(n),i=r.ec.get(e),s=r.tc.get(i.targetId);if(s.length>1)return r.tc.set(i.targetId,s.filter(o=>!pa(o,e))),void r.ec.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await So(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Ic(r.remoteStore,i.targetId),Po(r,i.targetId)}).catch(gr)):(Po(r,i.targetId),await So(r.localStore,i.targetId,!0))}async function v9(n,e){const t=J(n),r=t.ec.get(e),i=t.tc.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ic(t.remoteStore,r.targetId))}async function w9(n,e,t){const r=S9(n);try{const i=await function(o,c){const l=J(o),h=de.now(),p=c.reduce((R,N)=>R.add(N.key),te());let g,m;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let N=Ze(),L=te();return l.Qo.getEntries(R,p).next(F=>{N=F,N.forEach((K,ie)=>{ie.isValidDocument()||(L=L.add(K))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,N)).next(F=>{g=F;const K=[];for(const ie of c){const fe=Em(ie,g.get(ie.key).overlayedDocument);fe!=null&&K.push(new zn(ie.key,fe,Yh(fe.value.mapValue),Ft.exists(!0)))}return l.mutationQueue.addMutationBatch(R,h,K,c)}).next(F=>{m=F;const K=F.applyToLocalDocumentSet(g,L);return l.documentOverlayCache.saveOverlays(R,F.batchId,K)})}).then(()=>({batchId:m.batchId,changes:fd(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,l){let h=o.oc[o.currentUser.toKey()];h||(h=new me(ne)),h=h.insert(c,l),o.oc[o.currentUser.toKey()]=h}(r,i.batchId,t),await Vi(r,i.changes),await ma(r.remoteStore)}catch(i){const s=Rc(i,"Failed to persist write");t.reject(s)}}async function pp(n,e){const t=J(n);try{const r=await U3(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.sc.get(s);o&&(j(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Zu=!0:i.modifiedDocuments.size>0?j(o.Zu,14607):i.removedDocuments.size>0&&(j(o.Zu,42227),o.Zu=!1))}),await Vi(t,r,e)}catch(r){await gr(r)}}function Tu(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ec.forEach((s,o)=>{const c=o.view.Ru(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const l=J(o);l.onlineState=c;let h=!1;l.queries.forEach((p,g)=>{for(const m of g.Eu)m.Ru(c)&&(h=!0)}),h&&Pc(l)}(r.eventManager,e),i.length&&r.Xu.zn(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function E9(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.sc.get(e),s=i&&i.key;if(s){let o=new me(W.comparator);o=o.insert(s,je.newNoDocument(s,X.min()));const c=te().add(s),l=new Pi(X.min(),new Map,new me(ne),o,Ze(),c);await pp(r,l),r.rc=r.rc.remove(s),r.sc.delete(e),Nc(r)}else await So(r.localStore,e,!1).then(()=>Po(r,e,t)).catch(gr)}async function T9(n,e){const t=J(n),r=e.batch.batchId;try{const i=await F3(t.localStore,e);gp(t,r,null),fp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Vi(t,i)}catch(i){await gr(i)}}async function A9(n,e,t){const r=J(n);try{const i=await function(o,c){const l=J(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return l.mutationQueue.lookupMutationBatch(h,c).next(g=>(j(g!==null,37113),p=g.keys(),l.mutationQueue.removeMutationBatch(h,g))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>l.localDocuments.getDocuments(h,p))})}(r.localStore,e);gp(r,e,t),fp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Vi(r,i)}catch(i){await gr(i)}}function fp(n,e){(n.ac.get(e)||[]).forEach(t=>{t.resolve()}),n.ac.delete(e)}function gp(n,e,t){const r=J(n);let i=r.oc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function Po(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.tc.get(e))n.ec.delete(r),t&&n.Xu.Ec(r,t);n.tc.delete(e),n.isPrimaryClient&&n._c.s_(e).forEach(r=>{n._c.containsKey(r)||mp(n,r)})}function mp(n,e){n.nc.delete(e.path.canonicalString());const t=n.rc.get(e);t!==null&&(Ic(n.remoteStore,t),n.rc=n.rc.remove(e),n.sc.delete(t),Nc(n))}function Au(n,e,t){for(const r of t)r instanceof up?(n._c.addReference(r.key,e),I9(n,r)):r instanceof hp?(B(kc,"Document no longer in limbo: "+r.key),n._c.removeReference(r.key,e),n._c.containsKey(r.key)||mp(n,r.key)):G(19791,{hc:r})}function I9(n,e){const t=e.key,r=t.path.canonicalString();n.rc.get(t)||n.nc.has(r)||(B(kc,"New document in limbo: "+t),n.nc.add(r),Nc(n))}function Nc(n){for(;n.nc.size>0&&n.rc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new W(le.fromString(e)),r=n.uc.next();n.sc.set(r,new p9(t)),n.rc=n.rc.insert(t,r),ip(n.remoteStore,new Mt(Ct(Xo(t.path)),r,"TargetPurposeLimboResolution",Zs.ce))}}async function Vi(n,e,t){const r=J(n),i=[],s=[],o=[];r.ec.isEmpty()||(r.ec.forEach((c,l)=>{o.push(r.lc(l,e,t).then(h=>{if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:t?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Tc.vo(l.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Xu.zn(i),await async function(l,h){const p=J(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>D.forEach(h,m=>D.forEach(m.wo,R=>p.persistence.referenceDelegate.addReference(g,m.targetId,R)).next(()=>D.forEach(m.bo,R=>p.persistence.referenceDelegate.removeReference(g,m.targetId,R)))))}catch(g){if(!mr(g))throw g;B(Ac,"Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const R=p.$o.get(m),N=R.snapshotVersion,L=R.withLastLimboFreeSnapshotVersion(N);p.$o=p.$o.insert(m,L)}}}(r.localStore,s))}async function b9(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){B(kc,"User change. New user:",e.toKey());const r=await np(t.localStore,e);t.currentUser=e,function(s,o){s.ac.forEach(c=>{c.forEach(l=>{l.reject(new q(V.CANCELLED,o))})}),s.ac.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vi(t,r.zo)}}function x9(n,e){const t=J(n),r=t.sc.get(e);if(r&&r.Zu)return te().add(r.key);{let i=te();const s=t.tc.get(e);if(!s)return i;for(const o of s??[]){const c=t.ec.get(o);i=i.unionWith(c.view.Uu)}return i}}function yp(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=x9.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=E9.bind(null,e),e.Xu.zn=c9.bind(null,e.eventManager),e.Xu.Ec=l9.bind(null,e.eventManager),e}function S9(n){const e=J(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=T9.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=A9.bind(null,e),e}class $s{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oa(e.databaseInfo.databaseId),this.sharedClientState=this.Rc(e),this.persistence=this.Ic(e),await this.persistence.start(),this.localStore=this.Ac(e),this.gcScheduler=this.Vc(e,this.localStore),this.indexBackfillerScheduler=this.dc(e,this.localStore)}Vc(e,t){return null}dc(e,t){return null}Ac(e){return M3(this.persistence,new D3,e.initialUser,this.serializer)}Ic(e){return new tp(Ec.C_,this.serializer)}Rc(e){return new j3}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$s.provider={build:()=>new $s};class C9 extends $s{constructor(e){super(),this.cacheSizeBytes=e}Vc(e,t){j(this.persistence.referenceDelegate instanceof zs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new S7(r,e.asyncQueue,t)}Ic(e){const t=this.cacheSizeBytes!==void 0?Xe.withCacheSize(this.cacheSizeBytes):Xe.DEFAULT;return new tp(r=>zs.C_(r,t),this.serializer)}}class ko{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Tu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=b9.bind(null,this.syncEngine),await r9(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new s9}()}createDatastore(e){const t=oa(e.databaseInfo.databaseId),r=y7(e.databaseInfo);return T7(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new G3(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Tu(this.syncEngine,t,0),function(){return ou.C()?new ou:new p7}())}createSyncEngine(e,t){return function(i,s,o,c,l,h,p){const g=new f9(i,s,o,c,l,h);return p&&(g.cc=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=J(t);B(Dt,"RemoteStore shutting down."),r.tu.add(5),await Di(r),r.ru.shutdown(),r.iu.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}ko.provider={build:()=>new ko};/**
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
 */class R9{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.mc(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.mc(this.observer.error,e):$t("Uncaught Error in snapshot listener:",e.toString()))}gc(){this.muted=!0}mc(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const yn="FirestoreClient";class P9{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=Ho.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(yn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(yn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Rc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ro(n,e){n.asyncQueue.verifyOperationInProgress(),B(yn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await np(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Iu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await k9(n);B(yn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>vu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>vu(e.remoteStore,i)),n._onlineComponents=e}async function k9(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B(yn,"Using user provided OfflineComponentProvider");try{await ro(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Et("Error using user provided cache. Falling back to memory cache: "+t),await ro(n,new $s)}}else B(yn,"Using default OfflineComponentProvider"),await ro(n,new C9(void 0));return n._offlineComponents}async function _p(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B(yn,"Using user provided OnlineComponentProvider"),await Iu(n,n._uninitializedComponentsProvider._online)):(B(yn,"Using default OnlineComponentProvider"),await Iu(n,new ko))),n._onlineComponents}function N9(n){return _p(n).then(e=>e.syncEngine)}async function O9(n){const e=await _p(n),t=e.eventManager;return t.onListen=g9.bind(null,e.syncEngine),t.onUnlisten=_9.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=m9.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=v9.bind(null,e.syncEngine),t}function D9(n,e,t={}){const r=new sn;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,h){const p=new R9({next:m=>{p.gc(),o.enqueueAndForget(()=>o9(s,g));const R=m.docs.has(c);!R&&m.fromCache?h.reject(new q(V.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&m.fromCache&&l&&l.source==="server"?h.reject(new q(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new u9(Xo(c.path),p,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return a9(s,g)}(await O9(n),n.asyncQueue,e,t,r)),r.promise}function V9(n,e){const t=new sn;return n.asyncQueue.enqueueAndForget(async()=>w9(await N9(n),e,t)),t.promise}/**
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
 */const bu="AsyncQueue";class xu{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new Rd(this,"async_queue_retry"),this.jc=()=>{const r=no();r&&B(bu,"Visibility state changed to "+r.visibilityState),this.xn.gn()},this.Hc=e;const t=no();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=no();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const t=new sn;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(e){if(!mr(e))throw e;B(bu,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.xn.mn(()=>this.Zc())}}Yc(e){const t=this.Hc.then(()=>(this.Qc=!0,e().catch(r=>{throw this.Wc=r,this.Qc=!1,$t("INTERNAL UNHANDLED ERROR: ",Su(r)),r}).then(r=>(this.Qc=!1,r))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const i=Cc.createAndSchedule(this,e,t,r,s=>this.Xc(s));return this.Kc.push(i),i}Jc(){this.Wc&&G(47125,{el:Su(this.Wc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function Su(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Oc extends rc{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new xu,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xu(e),this._firestoreClient=void 0,await e}}}function L9(n,e){const t=typeof n=="object"?n:ju(),r=typeof n=="string"?n:Cs,i=dr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=f2("firestore");s&&P7(i,...s)}return i}function vp(n){if(n._terminated)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||M9(n),n._firestoreClient}function M9(n){const e=n._freezeSettings(),t=I7(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new P9(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(i){const s=i?._online.build();return{_offline:i?._offline.build(s),_online:s}}(n._componentsProvider))}/**
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
 */class F9{convertValue(e,t="none"){switch(xe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Un(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){const t=e.fields?.[li].arrayValue?.values?.map(r=>ye(r.doubleValue));return new et(t)}convertGeoPoint(e){return new Pt(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ci(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(or(e));default:return null}}convertTimestamp(e){const t=un(e);return new de(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);j(Id(r),9688,{name:e});const i=new ci(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(t)||$t(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class U9 extends F9{constructor(e){super(),this.firestore=e}convertBytes(e){return new pt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,t)}}const Cu="@firebase/firestore",Ru="4.16.0";/**
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
 */class wp{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new z9(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(ca("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class z9 extends wp{data(){return super.data()}}function B9(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class jr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class On extends wp{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ca("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=On._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}On._jsonSchemaVersion="firestore/documentSnapshot/1.0",On._jsonSchema={type:Ae("string",On._jsonSchemaVersion),bundleSource:Ae("string","DocumentSnapshot"),bundleName:Ae("string"),bundle:Ae("string")};class fs extends On{data(e={}){return super.data(e)}}class ei{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new jr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new fs(this._firestore,this._userDataWriter,r.key,r,new jr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{Pe(i._snapshot.query)?xo(i._snapshot.query):Jo(i.query._query);const l=new fs(i._firestore,i._userDataWriter,c.doc.key,c.doc,new jr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new fs(i._firestore,i._userDataWriter,c.doc.key,c.doc,new jr(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),p=o.indexOf(c.doc.key)),{type:$9(c.type),doc:l,oldIndex:h,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ei._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ho.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $9(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:n})}}/**
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
 */ei._jsonSchemaVersion="firestore/querySnapshot/1.0",ei._jsonSchema={type:Ae("string",ei._jsonSchemaVersion),bundleSource:Ae("string","QuerySnapshot"),bundleName:Ae("string"),bundle:Ae("string")};/**
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
 */function q9(n){n=si(n,ke);const e=si(n.firestore,Oc),t=vp(e);return D9(t,n._key).then(r=>G9(e,n,r))}function j9(n,e,t){n=si(n,ke);const r=si(n.firestore,Oc),i=B9(n.converter,e,t),s=D7(r);return H9(r,[V7(s,"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Ft.none())])}function H9(n,e){const t=vp(n);return V9(t,e)}function G9(n,e,t){const r=t.docs.get(e._key),i=new U9(n);return new On(n,i,e._key,r,new jr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Bg(Gs),kt(new wt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new Oc(new jg(r.getProvider("auth-internal")),new Wg(o,r.getProvider("app-check-internal")),pm(o,i),o);return s={useFetchStreams:t,...s},c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),ft(Cu,Ru,e),ft(Cu,Ru,"esm2020")})();const Ep={apiKey:"AIzaSyABnvYQl4QzP1lHF4Ei_AzrDPYlMKoTXpA",authDomain:"yathralanka-2ac43.firebaseapp.com",projectId:"yathralanka-2ac43",storageBucket:"yathralanka-2ac43.firebasestorage.app",measurementId:"G-KXWXP8TGMS",appId:"1:1032179534120:web:21d200d59018319f7ca81d",messagingSenderId:"1032179534120"};console.log("Config keys being used:",Ep.projectId);const Dc=qu(Ep);a0(Dc);const cn=Q0(Dc,{persistence:bg}),Tp=L9(Dc);let E={currentScreen:"splash",user:{...os},activeSite:null,activeQuest:null,dwellTimer:null,dwellTimeLeft:900,dwellActive:!1,cooldownTimer:null,cooldownTimeLeft:300,cooldownActive:!1,cameraAttempt:1,cameraImageIndex:0,currentQuizIndex:0,quizCorrectAnswers:0,quizAnswers:[],petitionSignatures:8742,petitionSigned:!1,donationAmount:0,navStack:[]};document.addEventListener("DOMContentLoaded",()=>{$("splash")});function $(n,e=!0){e&&E.currentScreen!==n&&E.navStack.push(E.currentScreen),E.currentScreen=n,ot()}function ge(){if(E.navStack.length>0){const n=E.navStack.pop();E.currentScreen=n,ot()}else $("dashboard")}function Ke(n,e=""){E.user.xp+=n;let t="None";n2.forEach(r=>{E.user.xp>=r.threshold&&(t=r.rank)}),E.user.rank!==t&&(E.user.rank=t,Me(`New Rank Unlocked: ${t}!`)),e&&Me(`${e} (+${n} XP)`),Xn()}function Xn(){const n=cn.currentUser;if(!n)return Promise.resolve();const e=Od(Tp,"users",n.uid);return j9(e,{xp:E.user.xp,rank:E.user.rank,medals:E.user.medals,sitesVisited:E.user.sitesVisited,quizzesPassed:E.user.quizzesPassed,role:E.user.role,interests:E.user.interests,permissions:E.user.permissions,signedPetitions:E.user.signedPetitions,donatedAmount:E.user.donatedAmount,joinedEvents:E.user.joinedEvents,unlockedCoupons:E.user.unlockedCoupons,completedQuizzes:E.user.completedQuizzes,dwellTimeCompleted:E.user.dwellTimeCompleted,verifiedPhotos:E.user.verifiedPhotos},{merge:!0}).catch(t=>console.error("Error saving user profile:",t))}function Me(n){const e=document.createElement("div");e.style.cssText=`
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
  `,e.textContent=n,document.querySelector(".iphone-chassis").appendChild(e),setTimeout(()=>{e.style.animation="screenFadeIn 0.3s ease-in reverse forwards",setTimeout(()=>e.remove(),300)},2500)}function ot(){const n=document.getElementById("app-container");if(!n)return;let e="";switch(E.currentScreen){case"splash":e=W9();break;case"login":e=K9();break;case"signup":e=Y9();break;case"permissions":e=Q9();break;case"choose-role":e=X9();break;case"calibrate-compass":e=J9();break;case"how-scoring-works":e=Z9();break;case"dashboard":e=e8();break;case"directory":e=t8();break;case"heritage-trail":e=Pu("Heritage Trail");break;case"hidden-gems":e=Pu("Hidden Gems");break;case"map":e=n8();break;case"site-detail":e=r8();break;case"dwell-time":e=i8();break;case"camera":e=s8();break;case"camera-success":e=a8();break;case"camera-reject":e=o8();break;case"guidelines":e=c8();break;case"offline-sync":e=l8();break;case"quiz":e=u8();break;case"quiz-cooldown":e=h8();break;case"quests":e=d8();break;case"quest-social":e=p8();break;case"quest-food":e=f8();break;case"quest-wandering":e=g8();break;case"quest-wildlife":e=m8();break;case"quest-warrior":e=y8();break;case"activism":e=_8();break;case"petition":e=v8();break;case"donations":e=w8();break;case"cleanup":e=E8();break;case"create-event":e=T8();break;case"rewards":e=A8();break;case"rewards-list":e=I8();break;case"coupon-redeem":e=b8();break;case"rank":e=x8();break;case"leaderboard":e=S8();break;case"profile":e=C8();break;case"travel-poster":e=R8();break;case"settings":e=P8();break;default:e="<div>Screen not found</div>"}n.innerHTML=e,k8()}function W9(){return`
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
  `}function K9(){return`
    <div class="screen">
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
            <input type="email" class="form-input" placeholder="Enter email or phone" value="traveller@yathralanka.lk" id="login-email">
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Password</label>
          <div class="input-wrapper">
            <input type="password" class="form-input" placeholder="Enter password" value="password123" id="login-pass">
            <span class="input-icon-right" id="login-eye">👁️</span>
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
          <button style="border: 1px solid #dcdbd8; border-radius: 50%; width: 44px; height: 44px; background: white; font-size: 20px; cursor: pointer; display: flex; align-items: center; justify-content: center;">🍎</button>
        </div>
        
        <div style="text-align: center; font-size: 12px; margin-top: 14px; font-weight: 500;">
          Don't have an account? <span class="form-link" id="login-toggle-signup">Sign Up</span>
        </div>
      </div>
    </div>
  `}function Y9(){return`
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="signup-back">←</button>
        <div class="header-title"></div>
      </div>
      
      <div style="padding: 10px 24px; text-align: center;">
        <h2 style="font-size: 26px; font-weight: 800; margin-bottom: 6px;">Create Account</h2>
        <p style="font-size: 13px; color: var(--color-gray); margin-bottom: 20px;">Join the movement!</p>
      </div>
      
      <div class="form-card" style="margin-top: 0; padding: 18px;">
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
            <input type="password" class="form-input" placeholder="Create password" id="signup-pass">
            <span class="input-icon-right">👁️</span>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Confirm Password</label>
          <div class="input-wrapper">
            <input type="password" class="form-input" placeholder="Confirm password" id="signup-confirm">
            <span class="input-icon-right">👁️</span>
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
  `}function Q9(){const n=E.user.permissions.camera,e=E.user.permissions.notifications,t=n&&e;return`
    <div class="screen">
      <div style="padding: 30px 24px 20px 24px; text-align: center;">
        <h2 style="font-size: 26px; font-weight: 900; line-height: 1.2; margin-bottom: 8px;">We need a few permissions</h2>
        <p style="font-size: 13px; color: var(--color-gray);">These help us make your experience safe and seamless.</p>
      </div>
      
      <!-- Camera Card -->
      <div class="selection-card ${n?"selected":""}" style="margin: 10px 16px; padding: 14px;" id="perm-camera-btn">
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
      <div class="selection-card ${e?"selected":""}" style="margin: 10px 16px; padding: 14px;" id="perm-notif-btn">
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
        <button class="btn-primary" style="opacity: ${t?"1":"0.5"}; cursor: ${t?"pointer":"not-allowed"};" id="perm-continue" ${t?"":"disabled"}>Continue</button>
      </div>
      
      <div class="permission-footer-box">
        We value your privacy.<br>Location access is only requested momentarily when you verify a site visit.
      </div>
    </div>
  `}function X9(){const n=E.user.role;return`
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
  `}function J9(){const n=E.user.interests;return`
    <div class="screen">
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
  `}function Z9(){return`
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
  `}function e8(){return E.user.xp>0&&E.user.rank,`
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
      <div class="dashboard-card" style="margin-top: 10px;" id="dash-map-card">
        <h3 style="font-size: 15px; font-weight: 800;">Wanderer</h3>
        <p style="font-size: 11px; color: var(--color-gray); margin-top: 2px;">Explore the map to discover nearby Hidden Gems and the Heritage Trail.</p>
        <div class="dashboard-map-svg">
          <img src="Element Pictures/SL map on home screen.svg" alt="Sri Lanka Map" style="opacity: 0.85;">
        </div>
        <div style="position: absolute; bottom: 18px; right: 18px; width: 36px; height: 36px; background: var(--color-teal); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; cursor: pointer; box-shadow: var(--shadow-premium);">
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
      
      ${pe("home")}
    </div>
  `}function t8(){return`
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
      
      ${pe("home")}
    </div>
  `}function Pu(n){return`
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
      
      ${pe("home")}
    </div>
  `}function n8(){return`
    <div class="screen" style="padding-bottom: 0;">
      <div class="map-canvas">
        <div class="header-bar" style="position: absolute; top: 0; left: 0; background: transparent; z-index: 100;">
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
      
      ${pe("home")}
    </div>
  `}function r8(){const n=E.activeSite;if(!n)return"";const e=E.user.dwellTimeCompleted[n.id];return`
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
      
      ${pe("home")}
    </div>
  `}function i8(){const n=E.activeSite;if(!n)return"";const e=Math.floor(E.dwellTimeLeft/60),t=E.dwellTimeLeft%60,r=`${e<10?"0"+e:e}:${t<10?"0"+t:t}`,s=565.48-E.dwellTimeLeft/900*565.48,o=E.dwellTimeLeft<=0;return`
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
            <circle class="timer-progress-circle ${o?"completed":""}" cx="100" cy="100" r="90" style="stroke-dashoffset: ${s};"></circle>
          </svg>
          <div class="timer-text-display">${r}</div>
        </div>
        
        <p style="font-size: 13px; font-weight: 700; text-align: center; color: ${o?"var(--color-green-success)":"var(--color-charcoal)"}; margin-bottom: 24px; max-width: 280px; line-height: 1.4;">
          ${o?"Presence verified! You are now eligible to complete trials":"Your device must stay stationary at the site to sync presence coordinates."}
        </p>
        
        <button class="btn-primary" style="margin-bottom: 12px; opacity: ${o?"1":"0.5"};" id="dwell-continue-btn" ${o?"":"disabled"}>
          ${o?"Proceed to Trials":"Waiting..."}
        </button>
      </div>
      
      ${pe("home")}
    </div>
  `}function s8(){return`
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
  `}function a8(){const n=E.activeSite;return`
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
  `}function o8(){return`
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
  `}function c8(){return`
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
  `}function l8(){return`
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
      
      ${pe("home")}
    </div>
  `}function u8(){const n=E.activeSite;if(!n)return"";const e=n.quizzes[E.currentQuizIndex],t=E.currentQuizIndex+1,r=n.quizzes.length;return`
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
          ${e.options.map((s,o)=>`
            <button class="quiz-option-btn" data-index="${o}">
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
  `}function h8(){const n=Math.floor(E.cooldownTimeLeft/60),e=E.cooldownTimeLeft%60,t=`${n<10?"0"+n:n}:${e<10?"0"+e:e}`;return`
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
      
      ${pe("home")}
    </div>
  `}function d8(){return`
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
        ${i2.map(n=>`
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
      
      ${pe("home")}
    </div>
  `}function p8(){return`
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
      
      ${pe("home")}
    </div>
  `}function f8(){return`
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
      
      ${pe("home")}
    </div>
  `}function g8(){return`
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
      
      ${pe("home")}
    </div>
  `}function m8(){return`
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
      
      ${pe("home")}
    </div>
  `}function y8(){return`
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
      
      ${pe("home")}
    </div>
  `}function _8(){return`
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
      
      ${pe("activism")}
    </div>
  `}function v8(){const n=E.petitionSigned,e=E.petitionSignatures,t=e/1e4*100;return`
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
      
      ${pe("activism")}
    </div>
  `}function w8(){const n=E.donationAmount;return`
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
      
      ${pe("activism")}
    </div>
  `}function E8(){const n=E.user.joinedEvents.includes("site-cleanup");return`
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
      
      ${pe("activism")}
    </div>
  `}function T8(){return`
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
      
      ${pe("activism")}
    </div>
  `}function A8(){return`
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
      
      ${pe("rewards")}
    </div>
  `}function I8(){return`
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
      
      ${pe("rewards")}
    </div>
  `}function b8(){return`
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
      
      ${pe("rewards")}
    </div>
  `}function x8(){const n=[{name:"Grass Toucher",range:"0 - 99 pts",threshold:0},{name:"Wanderer",range:"100 - 249 pts",threshold:100},{name:"Tuk Tuk Trailer",range:"250 - 499 pts",threshold:250},{name:"Magahoyanna",range:"500 - 999 pts",threshold:500},{name:"Island Explorer",range:"1,000 - 2,000 pts",threshold:1e3},{name:"Lanka Legend",range:"2,000 - 5,000 pts",threshold:2e3}],e=E.user.xp,t=E.user.rank;let r=n[0];for(let s=0;s<n.length;s++){if(e<n[s].threshold){r=n[s];break}s===n.length-1&&(r={name:"Max Level",threshold:5e3})}const i=r.threshold-e;return`
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
          ${n.map(s=>{const o=e>=s.threshold;return`
              <div class="rank-timeline-row" style="opacity: ${o?"1":"0.65"};">
                <div class="timeline-checkbox ${o?"checked":""}">
                  ${o?"✓":""}
                </div>
                <div style="flex: 1;">
                  <h4 style="font-size: 12px; font-weight: 800;">${s.name}</h4>
                  <p style="font-size: 9px; color: var(--color-gray);">${s.range}</p>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
      
      ${pe("rewards")}
    </div>
  `}function S8(){let n=[...r2];if(E.user.xp>0){const e={name:(cn.currentUser&&cn.currentUser.displayName||"You")+" (Eco Explorer)",points:E.user.xp,role:E.user.role,rank:E.user.rank,isUser:!0};n.push(e)}return n.sort((e,t)=>t.points-e.points),`
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
      
      ${pe("rewards")}
    </div>
  `}function C8(){const n=E.user.xp>0?E.user.rank:"No Rank";return`
    <div class="screen">
      <div style="padding: 20px 20px 6px 20px;">
        <h2 style="font-size: 26px; font-weight: 900;">My Profile</h2>
      </div>
      
      <!-- Profile Card -->
      <div class="selection-card" style="margin: 10px 16px; padding: 14px;" id="profile-recap-trigger">
        <img src="icons/profile filled.png" alt="Profile" style="width: 44px; height: 44px; border-radius: 50%; border: 2.5px solid var(--color-teal);">
        <div style="flex: 1; margin-left: 10px;">
          <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">${cn.currentUser&&cn.currentUser.displayName||"You"}</h3>
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
      
      ${pe("profile")}
    </div>
  `}function R8(){return`
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
  `}function P8(){return`
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
  `}function pe(n){return`
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
  `}function k8(){const n=(m,R,N)=>{const L=document.getElementById(m);L&&L.addEventListener(R,N)};n("go-signin","click",()=>$("login")),n("go-signup","click",()=>$("signup")),n("login-back","click",()=>ge()),n("login-toggle-signup","click",()=>$("signup",!1)),n("login-submit","click",()=>{const m=document.getElementById("login-email").value,R=document.getElementById("login-pass").value;if(!m||!R){Me("Please fill in all fields.");return}ug(cn,m,R).then(N=>{const L=Od(Tp,"users",N.user.uid);return q9(L).then(F=>{if(E.user={...os},F.exists()){const K=F.data();E.user={...E.user,...K}}else E.user.role="Explorer";$("dashboard"),Me("Welcome back, "+(N.user.displayName||"Explorer")+"!")})}).catch(N=>{Me(N.message)})}),n("login-eye","click",()=>{const m=document.getElementById("login-pass");m&&(m.type=m.type==="password"?"text":"password")}),n("signup-back","click",()=>ge()),n("signup-toggle-login","click",()=>$("login",!1));const e=document.getElementById("signup-submit");if(e){const m=e.cloneNode(!0);e.parentNode.replaceChild(m,e),m.addEventListener("click",R=>{R.preventDefault(),R.stopPropagation(),m.disabled=!0,m.style.opacity="0.5";let N,L,F,K;try{N=document.querySelector("#signup-name").value.trim(),L=document.querySelector("#signup-user-email").value.trim(),F=document.querySelector("#signup-pass").value,K=document.querySelector("#signup-confirm").value}catch(ie){console.error("Sign up input error:",ie),m.disabled=!1,m.style.opacity="1";return}if(!N||!L||!F||!K){Me("Please fill in all fields."),m.disabled=!1,m.style.opacity="1";return}if(F!==K){Me("Passwords do not match."),m.disabled=!1,m.style.opacity="1";return}try{const ie=lg(cn,L,F),fe=new Promise((Ee,Ve)=>{setTimeout(()=>Ve(new Error("NETWORK TIMEOUT: Firebase did not respond. navigator.onLine status: "+navigator.onLine)),15e3)});Promise.race([ie,fe]).then(Ee=>(E.user={...os},dg(Ee.user,{displayName:N}).catch(Ve=>console.error("updateProfile failed:",Ve)),Xn().then(()=>{$("permissions")}).catch(Ve=>{Me("Failed to save profile: "+Ve.message),m.disabled=!1,m.style.opacity="1"}))).catch(Ee=>{Me(Ee.message),console.error("Auth error details:",Ee),m.disabled=!1,m.style.opacity="1"})}catch(ie){Me("An error occurred: "+ie.message),m.disabled=!1,m.style.opacity="1"}})}n("perm-camera-btn","click",()=>{E.user.permissions.camera=!E.user.permissions.camera,ot()}),n("perm-notif-btn","click",()=>{E.user.permissions.notifications=!E.user.permissions.notifications,ot()}),n("perm-continue","click",()=>{E.user.permissions.camera&&E.user.permissions.notifications&&(Xn(),$("choose-role"))}),n("role-back","click",()=>ge()),document.querySelectorAll("[data-role]").forEach(m=>{m.addEventListener("click",()=>{E.user.role=m.getAttribute("data-role"),ot()})}),n("role-continue","click",()=>{E.user.role&&(Xn(),$("calibrate-compass"))}),document.querySelectorAll("[data-cat]").forEach(m=>{m.addEventListener("click",()=>{const R=m.getAttribute("data-cat");E.user.interests.includes(R)?E.user.interests=E.user.interests.filter(N=>N!==R):E.user.interests.push(R),ot()})}),n("compass-continue","click",()=>{E.user.interests.length>0&&(Xn(),$("how-scoring-works"))}),n("scoring-continue","click",()=>{Xn(),$("dashboard"),Me("Onboarding complete! Initial User state initialized.")}),n("dash-map-card","click",()=>$("map")),n("dash-search-card","click",()=>$("directory")),n("dash-view-directory","click",m=>{m.stopPropagation(),$("directory")}),n("directory-back","click",()=>$("dashboard")),n("tab-trail","click",()=>{document.getElementById("tab-trail").classList.add("active"),document.getElementById("tab-gems").classList.remove("active"),as("Heritage Trail")}),n("tab-gems","click",()=>{document.getElementById("tab-trail").classList.remove("active"),document.getElementById("tab-gems").classList.add("active"),as("Hidden Gems")});const i=document.getElementById("directory-search");if(i&&i.addEventListener("input",()=>{const m=document.querySelector(".tab-btn.active").id==="tab-trail"?"Heritage Trail":"Hidden Gems";as(m,i.value)}),E.currentScreen==="directory"){const m=document.querySelector(".tab-btn.active"),R=m&&m.id==="tab-gems"?"Hidden Gems":"Heritage Trail";as(R)}n("trail-list-back","click",()=>$("directory"));const s=document.getElementById("list-search-input");s&&s.addEventListener("input",()=>{const m=document.querySelector(".header-title").textContent;so(m,s.value)}),E.currentScreen==="heritage-trail"?so("Heritage Trail"):E.currentScreen==="hidden-gems"&&so("Hidden Gems"),n("map-back","click",()=>$("dashboard")),document.querySelectorAll(".map-pin").forEach(m=>{m.addEventListener("click",R=>{R.stopPropagation();const N=m.getAttribute("data-site-id"),L=ti.find(F=>F.id===N);L&&V8(L)})});const c=document.querySelector(".map-canvas");c&&c.addEventListener("click",()=>{const m=document.getElementById("map-popup-card");m&&m.remove()}),n("site-back","click",()=>ge()),n("site-visit-now","click",()=>{E.user.dwellTimeCompleted[E.activeSite.id]?$("camera"):(E.dwellTimeLeft=900,$("dwell-time"),N8())}),n("site-quiz-btn","click",()=>{E.user.dwellTimeCompleted[E.activeSite.id]&&(E.cooldownActive?$("quiz-cooldown"):(E.currentQuizIndex=0,E.quizCorrectAnswers=0,E.quizAnswers=[],$("quiz"),No()))}),n("site-quests-btn","click",()=>{E.user.dwellTimeCompleted[E.activeSite.id]&&$("quests")}),n("dwell-back","click",()=>{clearInterval(E.dwellTimer),E.dwellActive=!1,ge()});const l=document.getElementById("dwell-timer-clicker");l&&l.addEventListener("dblclick",()=>{clearInterval(E.dwellTimer),E.dwellTimeLeft=0,E.dwellActive=!1,E.user.dwellTimeCompleted[E.activeSite.id]=!0,E.user.sitesVisited=Object.keys(E.user.dwellTimeCompleted).length,Ke(50,`Presence verified at ${E.activeSite.name}!`),ot()}),n("dwell-continue-btn","click",()=>{E.dwellTimeLeft<=0&&$("camera")}),n("camera-back","click",()=>ge()),n("camera-shutter-click","click",()=>{E.cameraAttempt===1?(E.cameraAttempt=2,$("camera-reject")):$("camera-success")}),n("camera-success-continue","click",()=>{E.user.verifiedPhotos[E.activeSite.id]=!0,Ke(10,"Landmark photo verification success!"),$("site-detail")}),n("reject-close","click",()=>$("site-detail")),n("reject-guidelines","click",()=>$("guidelines")),n("reject-retry","click",()=>$("camera")),n("guidelines-back","click",()=>ge()),n("guidelines-continue","click",()=>$("camera")),n("sync-back","click",()=>ge()),n("quiz-back","click",()=>ge()),n("quiz-end-btn","click",()=>$("site-detail"));const h=document.querySelectorAll("#quiz-options-container .quiz-option-btn");h.forEach(m=>{m.addEventListener("click",()=>{const R=parseInt(m.getAttribute("data-index")),L=E.activeSite.quizzes[E.currentQuizIndex].correctIndex;h.forEach(F=>F.disabled=!0),E.quizAnswers.push(R),R===L?(m.classList.add("correct"),m.querySelector(".quiz-circle-ico").style.background="var(--color-green-success)",E.quizCorrectAnswers++):(m.classList.add("incorrect"),m.querySelector(".quiz-circle-ico").style.background="var(--color-red-reject)",h[L].classList.add("correct"),h[L].querySelector(".quiz-circle-ico").style.background="var(--color-green-success)"),setTimeout(()=>{if(E.currentQuizIndex+1<E.activeSite.quizzes.length)E.currentQuizIndex++,ot(),No();else{const F=E.quizCorrectAnswers,K=F*10;E.user.completedQuizzes[E.activeSite.id]=!0,E.user.quizzesPassed=Object.keys(E.user.completedQuizzes).length,Ke(K,`Quiz Complete! You got ${F}/5 correct.`),E.cooldownTimeLeft=300,$("quiz-cooldown"),Ap()}},1500)})}),n("cooldown-back","click",()=>$("site-detail")),n("quests-back","click",()=>ge()),n("quest-item-social","click",()=>$("quest-social")),n("quest-item-local_food","click",()=>$("quest-food")),n("quest-item-wandering_around","click",()=>$("quest-wandering")),n("quest-item-wildlife_spotting","click",()=>$("quest-wildlife")),n("quest-item-eco_warrior","click",()=>$("quest-warrior")),n("quest-social-back","click",()=>ge()),n("quest-social-submit","click",()=>{document.getElementById("quest-social-link-input").value&&(Ke(5,"Social media post registered!"),$("quests"))}),n("quest-food-back","click",()=>ge()),n("quest-food-start","click",()=>{Ke(10,"Traditional recipe task completed!"),$("quests")}),n("quest-wandering-back","click",()=>ge()),n("quest-wandering-snap","click",()=>{Ke(60,"Rural landmark captured locally!"),$("quests")}),n("quest-wildlife-back","click",()=>ge()),n("quest-wildlife-snap","click",()=>{Ke(25,"Wildlife encounter successfully logged!"),$("quests")}),n("quest-warrior-back","click",()=>ge()),n("quest-warrior-snap","click",()=>{Ke(75,"Heritage reforestation planting logged!"),$("quests")}),n("act-link-petition","click",()=>$("petition")),n("act-link-donations","click",()=>$("donations")),n("act-link-cleanup","click",()=>$("cleanup")),n("act-link-create-event","click",()=>$("create-event")),n("petition-back","click",()=>ge()),n("petition-submit","click",()=>{E.petitionSigned||(E.petitionSigned=!0,E.petitionSignatures++,E.user.signedPetitions.push("ritigala-forest"),Ke(3,"You signed the Ritigala Protection Petition!"),ot())}),n("donations-back","click",()=>ge()),document.querySelectorAll(".donation-btn").forEach(m=>{m.addEventListener("click",()=>{const R=parseInt(m.getAttribute("data-val"));E.donationAmount=R,ot()})});const g=document.getElementById("donation-custom-input");g&&g.addEventListener("input",()=>{E.donationAmount=parseInt(g.value)||0}),n("donations-submit","click",()=>{if(E.donationAmount>0){E.user.donatedAmount+=E.donationAmount;const m=Math.min(15,Math.ceil(E.donationAmount/200));Ke(m,`Donated Rs. ${E.donationAmount} successfully!`),E.donationAmount=0,$("activism")}}),n("cleanup-back","click",()=>ge()),n("cleanup-join","click",()=>{E.user.joinedEvents.includes("site-cleanup")||(E.user.joinedEvents.push("site-cleanup"),Ke(15,"Registered for Elahera Anicut site cleanup!"),ot())}),n("create-event-back","click",()=>ge()),n("event-submit","click",()=>{const m=document.getElementById("event-location").value,R=document.getElementById("event-type").value;m&&(E.user.joinedEvents.push("community-event"),Ke(15,`Created Community event: ${R}!`),$("activism"))}),n("rew-link-list","click",()=>$("rewards-list")),n("rew-link-rank","click",()=>$("rank")),n("rew-link-leaderboard","click",()=>$("leaderboard")),n("rewards-list-back","click",()=>$("rewards")),n("rew-coupon-use","click",()=>$("coupon-redeem")),n("rew-unlock-guide","click",()=>{E.user.xp>=100&&(E.user.xp-=100,E.user.unlockedCoupons.push("guide"),Me("Unlocked Ancient Trail Guide Coupon!"),$("rewards-list"))}),n("rew-unlock-crafts","click",()=>{E.user.xp>=100&&(E.user.xp-=100,E.user.unlockedCoupons.push("crafts"),Me("Unlocked Artisan Crafts Coupon!"),$("rewards-list"))}),n("coupon-back","click",()=>ge()),n("coupon-redeem-btn","click",()=>{Me("Voucher code validated. coupon redeemed!")}),n("coupon-review-submit","click",()=>{document.getElementById("coupon-review-input").value&&(Ke(10,"Review submitted successfully!"),document.getElementById("coupon-review-input").value="")}),n("rank-back","click",()=>ge()),n("leaderboard-back","click",()=>ge()),n("leaderboard-view-full","click",()=>{Me("Rendering complete global leaderboard...")}),n("profile-recap-trigger","click",()=>$("travel-poster")),n("profile-travel-map","click",()=>$("travel-poster")),n("profile-settings","click",()=>$("settings")),n("poster-back","click",()=>ge()),n("settings-back","click",()=>ge()),n("sett-perm","click",()=>$("permissions")),n("sett-logout","click",()=>{pg(cn).then(()=>{E.user={...os},E.user.permissions={camera:!1,notifications:!1},E.petitionSignatures=8742,E.petitionSigned=!1,E.navStack=[],$("splash"),Me("Logged out successfully.")}).catch(m=>{Me("Logout failed: "+m.message)})}),n("nav-home","click",()=>$("dashboard")),n("nav-act","click",()=>$("activism")),n("nav-rew","click",()=>$("rewards")),n("nav-prof","click",()=>$("profile"))}function N8(){E.dwellActive||(E.dwellActive=!0,E.dwellTimer=setInterval(()=>{E.dwellTimeLeft>0?(E.dwellTimeLeft--,E.currentScreen==="dwell-time"&&O8()):(clearInterval(E.dwellTimer),E.dwellActive=!1,E.user.dwellTimeCompleted[E.activeSite.id]=!0,E.user.sitesVisited=Object.keys(E.user.dwellTimeCompleted).length,Ke(50,`Presence verified at ${E.activeSite.name}!`),E.currentScreen==="dwell-time"&&ot())},1e3))}function O8(){const n=document.querySelector(".timer-text-display"),e=document.querySelector(".timer-progress-circle");if(!n||!e)return;const t=Math.floor(E.dwellTimeLeft/60),r=E.dwellTimeLeft%60;n.textContent=`${t<10?"0"+t:t}:${r<10?"0"+r:r}`;const s=565.48-E.dwellTimeLeft/900*565.48;e.style.strokeDashoffset=s}let ss=15,io=null;function No(){clearInterval(io),ss=15;const n=document.getElementById("quiz-timer");n&&(n.textContent="15s"),io=setInterval(()=>{if(ss>0){ss--;const e=document.getElementById("quiz-timer");e&&(e.textContent=`${ss}s`)}else{clearInterval(io);const e=document.querySelectorAll("#quiz-options-container .quiz-option-btn");e.forEach(r=>r.disabled=!0),E.quizAnswers.push(-1);const t=E.activeSite.quizzes[E.currentQuizIndex].correctIndex;e[t]&&(e[t].classList.add("correct"),e[t].querySelector(".quiz-circle-ico").style.background="var(--color-green-success)"),setTimeout(()=>{if(E.currentQuizIndex+1<E.activeSite.quizzes.length)E.currentQuizIndex++,ot(),No();else{const r=E.quizCorrectAnswers;E.user.completedQuizzes[E.activeSite.id]=!0,E.user.quizzesPassed=Object.keys(E.user.completedQuizzes).length,Ke(r*10,`Quiz Complete! You got ${r}/5 correct.`),E.cooldownTimeLeft=300,$("quiz-cooldown"),Ap()}},1500)}},1e3)}function Ap(){E.cooldownActive||(E.cooldownActive=!0,E.cooldownTimer=setInterval(()=>{E.cooldownTimeLeft>0?(E.cooldownTimeLeft--,E.currentScreen==="quiz-cooldown"&&D8()):(clearInterval(E.cooldownTimer),E.cooldownActive=!1,E.currentScreen==="quiz-cooldown"&&$("site-detail"))},1e3))}function D8(){const n=document.querySelector(".timer-text-display"),e=document.querySelector(".timer-progress-circle");if(!n||!e)return;const t=Math.floor(E.cooldownTimeLeft/60),r=E.cooldownTimeLeft%60;n.textContent=`${t<10?"0"+t:t}:${r<10?"0"+r:r}`;const s=565.48-E.cooldownTimeLeft/300*565.48;e.style.strokeDashoffset=s}function as(n,e=""){const t=document.getElementById("directory-grid-container");if(!t)return;const r=e.toLowerCase(),i=ti.filter(s=>{const o=s.category===n,c=s.name.toLowerCase().includes(r)||s.district.toLowerCase().includes(r);return o&&c});if(i.length===0){t.innerHTML='<div style="grid-column: 1/3; text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No matching locations found</div>';return}t.innerHTML=i.map(s=>`
    <div class="location-grid-card" data-site-grid-id="${s.id}">
      <img src="${s.image}" alt="${s.name}" class="location-card-img">
      <div class="location-card-content">
        <h4 class="location-card-title">${s.name}</h4>
        <span class="location-card-sub">${s.district}</span>
        <span class="location-card-xp">${s.xpRange}</span>
      </div>
    </div>
  `).join(""),document.querySelectorAll("[data-site-grid-id]").forEach(s=>{s.addEventListener("click",()=>{const o=s.getAttribute("data-site-grid-id"),c=ti.find(l=>l.id===o);c&&(E.activeSite=c,$("site-detail"))})})}function so(n,e=""){const t=document.getElementById("list-cards-container");if(!t)return;const r=e.toLowerCase(),i=ti.filter(s=>{const o=s.category===n,c=s.name.toLowerCase().includes(r)||s.district.toLowerCase().includes(r);return o&&c});if(i.length===0){t.innerHTML='<div style="text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No matching locations found</div>';return}t.innerHTML=i.map(s=>`
    <div class="location-list-card" data-site-list-id="${s.id}">
      <img src="${s.image}" alt="${s.name}" class="location-list-img">
      <div class="location-list-content">
        <h4 style="font-size: 13px; font-weight: 800; line-height: 1.3;">${s.name}</h4>
        <span style="font-size: 10px; color: var(--color-gray); margin-top: 1px; margin-bottom: 4px;">${s.district}</span>
        <span style="font-size: 11px; font-weight: 700; color: var(--color-gold);">${s.xpRange}</span>
      </div>
    </div>
  `).join(""),document.querySelectorAll("[data-site-list-id]").forEach(s=>{s.addEventListener("click",()=>{const o=s.getAttribute("data-site-list-id"),c=ti.find(l=>l.id===o);c&&(E.activeSite=c,$("site-detail"))})})}function V8(n){const e=document.getElementById("map-popup-card");e&&e.remove();const t=document.getElementById("map-popup-container");if(!t)return;const r=document.createElement("div");r.id="map-popup-card",r.className="map-popup-card",r.innerHTML=`
    <img src="${n.image}" alt="${n.name}" class="popup-site-img">
    <div class="popup-site-info">
      <h3 style="font-size: 15px; font-weight: 800; color: var(--color-charcoal);">${n.name}</h3>
      <span style="font-size: 10px; color: var(--color-gold); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${n.category}</span>
      <span style="font-size: 11px; color: var(--color-charcoal); font-weight: 700; margin-top: 2px;">⭐ ${n.xpRange} • 📍 ${n.distance}</span>
    </div>
    <button class="btn-primary" style="width: 90px; height: 36px; font-size: 11px; padding:0 8px; gap:4px;" id="map-popup-navigate-btn">
      <span>🚀 Navigate</span>
    </button>
  `,t.appendChild(r),document.getElementById("map-popup-navigate-btn").addEventListener("click",i=>{i.stopPropagation(),E.activeSite=n,$("site-detail")}),r.addEventListener("click",i=>{i.stopPropagation(),E.activeSite=n,$("site-detail")})}
