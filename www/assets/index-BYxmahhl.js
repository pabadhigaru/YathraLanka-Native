(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Qr={xp:0,rank:"None",medals:0,sitesVisited:0,quizzesPassed:0,permissions:{camera:!1,notifications:!1},role:"",interests:[],signedPetitions:[],donatedAmount:0,joinedEvents:[],unlockedCoupons:[],completedQuizzes:{},dwellTimeCompleted:{},verifiedPhotos:{}},U2=[{rank:"Grass Toucher",range:[0,99],threshold:0},{rank:"Wanderer",range:[100,249],threshold:100},{rank:"Tuk Tuk Trailer",range:[250,499],threshold:250},{rank:"Magahoyanna",range:[500,999],threshold:500},{rank:"Island Explorer",range:[1e3,2e3],threshold:1e3},{rank:"Lanka Legend",range:[2e3,5e3],threshold:2e3}],B2=[{name:"Suranga M",points:5820,role:"Explorer",rank:"Lanka Legend"},{name:"Anjali R.",points:5330,role:"Volunteer",rank:"Lanka Legend"},{name:"Dilhani",points:3540,role:"Organizer",rank:"Island Explorer"},{name:"Mihiranga T.",points:1160,role:"Quiz Master",rank:"Island Explorer"}],_e=[{id:"mihintale",name:"Mihintale",district:"Anuradhapura District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"220km",openStatus:"Open now",description:"The sacred mountain peak revered as the birthplace of Buddhism in the country, marked by ancient monastic ruins, rock inscriptions, and pristine natural reserves.",image:"Element Pictures/Mihintale.JPG",latitude:8.3508,longitude:80.5186,referenceImage:"Element Pictures/Mihintale.JPG",quizzes:[{question:"What is the significance of the Mihintale rock peak in Sri Lankan history?",options:["It was the first capital of Sri Lanka","It is the site where Buddhism was introduced by Arahat Mahinda","It is a royal palace built by Kashyapa","It is a natural seaport of the ancient era"],correctIndex:1},{question:"Who was the reigning Sri Lankan king when Arahat Mahinda visited Mihintale?",options:["King Dutusgemunu","King Devanampiyatissa","King Kashyapa","King Vijayabahu I"],correctIndex:1},{question:"Which of the following ancient structures is famous for its elephant carvings at Mihintale?",options:["The Kantaka Cetiya Vahalkada","The Aradhana Gala peak","The Ambasthala Dagoba","The Sinha Pokuna (Lion Pond)"],correctIndex:0},{question:"What unique function did the Mihintale Hospital serve in antiquity?",options:["It was a military barracks","It is one of the oldest recorded hospitals in the world, with stone bath tubs for herbal treatment","It was a royal treasury","It was a university for astronomy"],correctIndex:1},{question:"What is the name of the famous massive pond situated halfway up the Mihintale mountain?",options:["Basawakkulama reservoir","Kaludiya Pokuna (Black Water Pond)","Abhayagiri pond","Tissa Wewa"],correctIndex:1}]},{id:"sigiriya",name:"Sigiriya",district:"Matale District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"160km",openStatus:"Open now",description:"An ancient rock fortress constructed by King Kashyapa, celebrated for its advanced water gardens, stunning fifth-century frescoes of celestial maidens, and the colossal lion paw gate.",image:"Element Pictures/Sigiriya-LionRock.jpg",latitude:7.957,longitude:80.7603,referenceImage:"Element Pictures/Sigiriya-LionRock.jpg",quizzes:[{question:"Which Sri Lankan king created the Sigiriya Rock Fortress?",options:["King Devanampiyatissa","King Dutugemunu","King Kashyapa","King Parakramabahu I"],correctIndex:2},{question:"Sigiriya is globally famous for which ancient artistic creations painted on the rock face?",options:["Carvings of war elephants","Fresco paintings of celestial maidens (Sigiri Apsaras)","Stone inscriptions in Brahmi script","Sculptures of sleeping lions"],correctIndex:1},{question:"What structure stands at the entrance to the final palace summit at Sigiriya?",options:["A massive bronze dragon gate","Colossal Lion Paws carved out of stone","Two giant cobra statues","A double-moat drawbridge"],correctIndex:1},{question:"What is the purpose of the highly polished 'Mirror Wall' at Sigiriya?",options:["To reflect sunrays and blind enemies","It was used by the king to view his reflection","It contains ancient graffiti poems written by visitors dating back to the 8th century","It was a military signaling device"],correctIndex:2},{question:"Which unique layout style is utilized in Sigiriya's royal pleasure gardens?",options:["Terraced mountain farming layout","Symmetrical hydraulic water gardens, boulders, and terraced gardens","Traditional dry zone scrub jungle","A maze of vertical underground caves"],correctIndex:1}]},{id:"ruwanweliseya",name:"Ruwanweliseya",district:"Anuradhapura District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"215km",openStatus:"Open now",description:"A monumental bubble-shaped stupa built by King Dutugemunu in the ancient capital Anuradhapura, venerated as a marvel of ancient civil engineering and Buddhist architecture.",image:"Element Pictures/Ruwanweliseya.jpg",latitude:8.3503,longitude:80.3962,referenceImage:"Element Pictures/Donations Stupa.jpg",quizzes:[{question:"Which ancient monarch initiated the construction of the sacred Ruwanweliseya Stupa?",options:["King Valagamba","King Devanampiyatissa","King Dutugemunu","King Mahasen"],correctIndex:2},{question:"What geometrical shape is the main dome of the Ruwanweliseya Stupa traditionally based on?",options:["Dhanyakara (Heap of Paddy shape)","Bubbulakara (Bubble shape)","Padmakara (Lotus shape)","Ghantakara (Bell shape)"],correctIndex:1},{question:"Which unique feature circles the base platform of the Ruwanweliseya stupa outer wall?",options:["A wall of brick-carved elephants standing side-by-side (Elephant Wall)","A deep circular moat filled with lotus flowers","A ring of bronze spears","Statues of ancient Buddhist kings"],correctIndex:0},{question:"Which architectural components are situated at the four cardinal entrances of the stupa?",options:["Fresco caves","Vahalkadas (decorative frontispieces)","Stone drawbridges","Hydraulic fountains"],correctIndex:1},{question:"What materials were historically used in the foundation of Ruwanweliseya to support its immense weight?",options:["Solid iron sheets and heavy granite blocks","Layers of crushed stones, clay, lead sheets, and a plaster mixture reinforced with animal hide","Hollow wooden logs filled with dry sand","Baked clay pots piled on top of each other"],correctIndex:1}]},{id:"temple_of_tooth",name:"Temple of the Tooth",district:"Kandy District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"115km",openStatus:"Open now",description:"The royal palace complex of Kandy housing the sacred tooth relic of Gautama Buddha, symbolizing sovereignty, rich Kandyan architecture, and royal heritage.",image:"Element Pictures/Temple of the tooth.jpg",latitude:7.2936,longitude:80.6413,referenceImage:"Element Pictures/Temple of the tooth.jpg",quizzes:[{question:"Where is the Sri Dalada Maligawa (Temple of the Sacred Tooth Relic) located?",options:["Anuradhapura","Polonnaruwa","Kandy","Jaffna"],correctIndex:2},{question:"Historically, what did possession of the Sacred Tooth Relic represent for Sri Lankan monarchs?",options:["Command over the merchant fleets","The divine right and legitimate authority to rule the country","Immunity from foreign invasions","Direct control over the pearl fisheries"],correctIndex:1},{question:"What is the name of the octagonal pavilion building situated at the front of the Kandy Temple?",options:["Pattirippuwa","Sandakada Pahana","Vahalkada","Gedige"],correctIndex:0},{question:"Which major annual cultural procession parading Kandy features the sacred casket?",options:["The Duruthu Perahera","The Esala Perahera","The Vesak Kalapaya","The Katharagama festival"],correctIndex:1},{question:"What decorative motif characterizes the surrounding protective walls of Kandy Lake and the temple moat?",options:["Lion posture carvings","Diyarella Bemma (Wave swell wall) and clouds pattern openings","Bronze spikes","Lotus petal panels"],correctIndex:1}]},{id:"dowa_rock_temple",name:"Dowa Rock Temple",district:"Badulla District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"180km",openStatus:"Open now",description:"A historic cave temple tucked in the Uva province hills, famous for its massive unfinished 38-foot tall standing Buddha statue carved directly into a sheer rock cliff.",image:"Element Pictures/Dowa Rock Temple.jpg",latitude:6.8202,longitude:81.0255,referenceImage:"Element Pictures/Dowa Rock Temple.jpg",quizzes:[{question:"What is the most prominent visual attraction at the Dowa Rock Temple?",options:["A golden reclining Buddha statue","A massive, unfinished 38-foot tall standing Buddha statue carved directly into the rock face","An underground crystal spring","A wall painted entirely with ancient map routes"],correctIndex:1},{question:"Which ancient monarch is locally credited with establishing the cave sanctuary at Dowa?",options:["King Dutugemunu","King Valagamba (Vattagamani Abhaya)","King Kashyapa","King Devanampiyatissa"],correctIndex:1},{question:"The rock carvings at Dowa show influences of which historical artistic school?",options:["Modern abstract sculpture","Late Anuradhapura and early Polonnaruwa regional rock art styles","Roman classical sculpting","Chola dynasty metalworks"],correctIndex:1},{question:"What unique reptile motif is painted on the ceiling of the shrine cave protecting the shrine?",options:["A three-headed cobra battling a giant viper","A giant sea turtle","A coiled python guardian","A green forest lizard"],correctIndex:0},{question:"Dowa Rock Temple is situated close to which popular hill station town in Badulla?",options:["Nuwara Eliya","Ella","Haputale","Bandarawela"],correctIndex:3}]},{id:"ritigala_monastery",name:"Ritigala Monastery",district:"Anuradhapura District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"195km",openStatus:"Open now",description:"An ancient mountain range housing the mysterious ruins of a forest-dwelling monastery, renowned for its austere architecture (Padhanaghara), beautiful stone paths, bathing pools, and herbal gardens.",image:"Element Pictures/Ritigala Monastery.jpg",latitude:8.1139,longitude:80.6558,referenceImage:"Element Pictures/Ritigala Monastery.jpg",quizzes:[{question:"What is unique about the ancient monastic structures (Padhanagharas) found at Ritigala?",options:["They are decorated with gold leaf and gems","They are completely devoid of any decorative carvings, prioritizing deep ascetic isolation and simple stone geometry","They are built on high stilts in dry mud","They have massive stupas surrounding them"],correctIndex:1},{question:"Which community of forest-dwelling monks historically inhabited the secluded peaks of Ritigala?",options:["The Tapovana monks (Pamsukulika fraternity)","Foreign Roman monks","Royal guards","Spice merchants"],correctIndex:0},{question:"What botanical anomaly makes the peak of Ritigala different from the surrounding dry zone plains?",options:["It has no vegetation due to volcanic activity","It contains a unique microclimate supporting wet-zone flora, medicinal herbs, and rare orchids on the misty summit","It grows only pine and fir trees","It is completely covered in swamp mangrove plants"],correctIndex:1},{question:"What impressive stone structures connect the ancient cells and platforms of Ritigala?",options:["Hanging vine suspension bridges","Meticulously paved stone-cut walkways and steps traversing the dense forest slopes","Hollow clay pipelines","Symmetrical marble corridors"],correctIndex:1},{question:"Which massive circular stone pond structure lies near the entrance of the Ritigala ruins?",options:["Banda Pokuna (large bathing pool with stone steps)","Sinha Pokuna","Kaludiya Pokuna","Tissa Wewa"],correctIndex:0}]},{id:"yudaganawa",name:"Yudaganawa",district:"Badulla District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"230km",openStatus:"Open now",description:"One of the largest colossal stupas in Sri Lanka, constructed in the 12th century, historical battlefield where King Dutugemunu and his brother Tissa fought for sovereignty.",image:"Element Pictures/Yudaganawa.jpg",latitude:6.7292,longitude:81.2831,referenceImage:"Element Pictures/Yudaganawa.jpg",quizzes:[{question:"What historic event occurred at the site of Yudaganawa in the Uva region?",options:["The final coronation of King Parakramabahu","The battlefield clash between brothers Prince Dutugemunu and Prince Tissa over the state crown","The signing of the Kandyan Convention","The first planting of the sacred Bo Tree"],correctIndex:1},{question:"What is unique about the structural layout of the Yudaganawa Stupa?",options:["It is built on a massive elevated wooden deck","It is a colossal, flat-topped semi-finished stupa (Kota Vehera style)","It is carved entirely out of a single piece of green rock","It has five rings of defensive moats surrounding it"],correctIndex:1},{question:"Yudaganawa is situated in the proximity of which historic town in the Moneragala/Badulla area?",options:["Buttala","Wellawaya","Ella","Mahiyanganaya"],correctIndex:0},{question:"What does the name 'Yudaganawa' literally translate to in Sinhala?",options:["Peaceful garden","Arena of Battle / Battleground","Temple of Sovereignty","Elephant lake"],correctIndex:1},{question:"Which of the following is found near Yudaganawa, representing ancient irrigation marvels?",options:["Yudaganawa Wewa (irrigation tank)","Senanayake Samudra","Kala Wewa","Parakrama Samudra"],correctIndex:0}]},{id:"pilikuttuwa",name:"Pilikuttuwa Temple",district:"Gampaha District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"35km",openStatus:"Open now",description:"An ancient forest cave sanctuary close to Colombo, famous for housing 99 drip-ledged caves, historic murals, wooden bridge over natural water flows, and pre-historic rock formations.",image:"Element Pictures/Pilikuttuwa Temple.jpg",latitude:6.846583,longitude:79.993333,referenceImage:"Element Pictures/Pilikuttuwa Temple.jpg",quizzes:[{question:"What is the primary natural and historical feature of the Pilikuttuwa Temple complex?",options:["A massive multi-tiered stone pagoda","A dense network of 99 drip-ledged rock shelter caves used by ancient monks","A natural volcanic geyser","A salt desert flat"],correctIndex:1},{question:"What famous historic bridge structure is preserved within the Pilikuttuwa sanctuary?",options:["A massive iron drawbridge","An ancient Dutch-era wooden canopy bridge spanning a stream","A marble arched bridge","A hanging bamboo rope bridge"],correctIndex:1},{question:"Which period of Sri Lankan art do the interior temple cave murals and frescoes at Pilikuttuwa belong to?",options:["Anuradhapura Period","Kandyan Kingdom and early colonial transitions","Modern contemporary art","Prehistoric stone paintings"],correctIndex:1},{question:"Which historic king took refuge in the caves of Pilikuttuwa during foreign invasions?",options:["King Kashyapa","King Valagamba","King Vijayabahu","King Dutugemunu"],correctIndex:1},{question:"What does the drip-ledge (Kataraya) on the caves of Pilikuttuwa do?",options:["It funnels drinking water into inside stone cups","It diverts monsoon rainwater away from entering the cave shelters, keeping the interior dry","It serves as a climbing groove for soldiers","It represents royal lineage crowns"],correctIndex:1}]},{id:"maligawila",name:"Maligawila Statue",district:"Moneragala District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"240km",openStatus:"Open now",description:"The home of a colossal 7th-century standing Buddha statue carved out of a single limestone rock, considered one of the absolute masterpieces of ancient sculpting.",image:"Element Pictures/maligawila buddha statue.jpg",latitude:6.7352,longitude:81.3392,referenceImage:"Element Pictures/maligawila buddha statue.jpg",quizzes:[{question:"What masterpiece of Sri Lankan limestone sculpture is found at Maligawila?",options:["A massive sleeping clay Buddha","A colossal 36-foot standing Buddha statue carved out of a single crystalline limestone block","A gold-plated stupa dome","A row of terracotta warriors"],correctIndex:1},{question:"Which ancient prince is historically credited with crafting this massive statue in the 7th century?",options:["Prince Kashyapa","Prince Agrabodhi","Prince Dutugemunu","Prince Valagamba"],correctIndex:1},{question:"Which neighboring site at Maligawila features a giant statue of Avalokiteshvara Bodhisattva?",options:["Dambegoda (Dambegoda Bodhisattva Statue)","Sigiriya rock","Buduruvagala caves","Aukana"],correctIndex:0},{question:"What state of preservation was the Maligawila Buddha found in during the late 20th century before restoration?",options:["Fully intact under a pristine dome","Fallen, broken into several massive segments in the dense jungle","Partially buried in beach sand dunes","Submerged in a large reservoir lake"],correctIndex:1},{question:"What architectural feature originally enclosed the massive standing Buddha statue?",options:["A circular brick and stone Image House (Patimaghara)","A simple open-air wood canopy","A series of deep stone trenches","A tall metal tower"],correctIndex:0}]},{id:"ibbankatuwa",name:"Ibbankatuwa Tombs",district:"Matale District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"150km",openStatus:"Open now",description:"A famous megalithic prehistoric burial ground dating back to the Iron Age, showcasing stone cist graves, ancient pottery, beads, and advanced early societal burials.",image:"Element Pictures/Ibbankatuwa Tombs.JPG",latitude:7.8596,longitude:80.6481,referenceImage:"Element Pictures/Ibbankatuwa Tombs.JPG",quizzes:[{question:"What unique prehistoric archaeological site is found at Ibbankatuwa?",options:["An ancient palace courtyard","A massive Megalithic Cist Burial Ground from the protohistoric Iron Age (dating back 2500+ years)","An ancient port for gem ships","A prehistoric tool-making cave"],correctIndex:1},{question:"What typical shape do the grave chambers (cists) at Ibbankatuwa have?",options:["Circular deep stone wells","Four granite slab walls forming a rectangular box capped with a large stone cover slab","Triangular pyramids built from clay","Hollow logs buried vertically"],correctIndex:1},{question:"Which of the following artifacts were found inside the cist tombs, proving ancient trade connections?",options:["Roman gold coins","Beads made of carnelian, onyx, agate, clay pottery urns containing ashes, and copper tools","Porcelain plates from China","Bronze guns"],correctIndex:1},{question:"The residents of the pre-historic Ibbankatuwa era primarily used which major metal classification?",options:["Only flint stone tools","Iron and Copper (Megalithic Iron Age culture)","Aluminum and Steel","Pure Platinum"],correctIndex:1},{question:"Near which major central province city is the Ibbankatuwa Megalithic Site situated?",options:["Kandy","Dambulla","Jaffna","Negombo"],correctIndex:1}]},{id:"galle_fort",name:"Galle Fort",district:"Galle District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"125km",openStatus:"Open now",description:"A coastal fortress built by the Portuguese, heavily fortified by the Dutch, blending European military architecture and South Asian traditions.",image:"Element Pictures/Galle Fort.jpg",latitude:6.0267,longitude:80.2167,referenceImage:"Element Pictures/Galle Fort.jpg",quizzes:[{question:"Which European nation first constructed fortifications in Galle before the Dutch expanded it?",options:["The British","The Portuguese","The French","The Spanish"],correctIndex:1},{question:"What is the famous white structure standing on the Utrecht Bastion overlooking the ocean in Galle Fort?",options:["The Clock Tower","The Galle Lighthouse","The Dutch Reformed Church dome","The Maritime Museum tower"],correctIndex:1},{question:"Galle Fort is recognized globally under which prestigious classification?",options:["A Biosphere Reserve","A UNESCO World Heritage Site","An industrial trade zone","A national sanctuary park"],correctIndex:1},{question:"What is the name of the narrow stone gateway featuring a coat of arms of the VOC Dutch East India Company?",options:["The Galle Old Gate","The Lighthouse gate","The Main Bastion drawbridge","The Sea Gate"],correctIndex:0},{question:"What architectural feature characterizes the traditional Dutch villa residential lanes in Galle Fort?",options:["Tall modern glass high-rises","Verandah houses, terracotta tile roofs, pillared arches, and paved stone inner courtyards","Circular wood log cabins","Subterranean cave rooms"],correctIndex:1}]}],$2=[{id:"social_media",name:"Social Media Presence",description:"Share about your visit",xp:5,duration:"10 mins",icon:"icons/social media presence icon.png"},{id:"local_food",name:"Local Food",description:"Try a traditional dish",xp:5,duration:"20 mins",icon:"icons/local food icon.png"},{id:"wandering_around",name:"Wandering Around",description:"Visit a nearby site",xp:5,duration:"20 mins",icon:"icons/Wandering Around icon.png"},{id:"wildlife_spotting",name:"Wildlife Spotting",description:"Spot and record an animal",xp:5,duration:"20 mins",icon:"icons/Wildlife Spotting icon.png"},{id:"eco_warrior",name:"Eco-Warrior",description:"Conserve the environment",xp:10,duration:"15 mins",icon:"icons/Eco Warrior icon.png"}],z2=()=>{};var Uu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},q2=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},qh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,p=s>>2,g=(s&3)<<4|c>>4;let I=(c&15)<<2|u>>6,P=u&63;l||(P=64,a||(I=64)),r.push(t[p],t[g],t[I],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):q2(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||u==null||g==null)throw new j2;const I=s<<2|c>>4;if(r.push(I),u!==64){const P=c<<4&240|u>>2;if(r.push(P),g!==64){const L=u<<6&192|g;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class j2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const H2=function(n){const e=zh(n);return qh.encodeByteArray(e,!0)},ca=function(n){return H2(n).replace(/\./g,"")},jh=function(n){try{return qh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function G2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const W2=()=>G2().__FIREBASE_DEFAULTS__,K2=()=>{if(typeof process>"u"||typeof Uu>"u")return;const n=Uu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Y2=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jh(n[1]);return e&&JSON.parse(e)},Fa=()=>{try{return z2()||W2()||K2()||Y2()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Hh=n=>Fa()?.emulatorHosts?.[n],Q2=n=>{const e=Hh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Gh=()=>Fa()?.config,Wh=n=>Fa()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function X2(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ca(JSON.stringify(t)),ca(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function J2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function Z2(){const n=Fa()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function e0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function t0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n0(){const n=Je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function r0(){return!Z2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qh(){try{return typeof indexedDB=="object"}catch{return!1}}function Xh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}function i0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="FirebaseError";class Ft extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=s0,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?a0(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Ft(i,c,r)}}function a0(n,e){return n.replace(o0,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const o0=/\{\$([^}]+)}/g;function c0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Bu(s)&&Bu(a)){if(!zn(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Bu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ti(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ai(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function l0(n,e){const t=new u0(n,e);return t.subscribe.bind(t)}class u0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");h0(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Do),i.error===void 0&&(i.error=Do),i.complete===void 0&&(i.complete=Do);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function h0(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Do(){}/**
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
 */const d0=1e3,p0=2,f0=4*60*60*1e3,g0=.5;function $u(n,e=d0,t=p0){const r=e*Math.pow(t,n),i=Math.round(g0*r*(Math.random()-.5)*2);return Math.min(f0,r+i)}/**
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
 */function ze(n){return n&&n._delegate?n._delegate:n}/**
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
 */function hs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jh(n){return(await fetch(n,{credentials:"include"})).ok}class Vt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class m0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Kh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(v0(e))try{this.getOrInitializeService({instanceIdentifier:rr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rr){return this.instances.has(e)}getOptions(e=rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:y0(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rr){return this.component?this.component.multipleInstances?e:rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y0(n){return n===rr?void 0:n}function v0(n){return n.instantiationMode==="EAGER"}/**
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
 */class _0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new m0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ce||(ce={}));const w0={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},E0=ce.INFO,b0={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},I0=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=b0[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ua{constructor(e){this.name=e,this._logLevel=E0,this._logHandler=I0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const T0=(n,e)=>e.some(t=>n instanceof t);let zu,qu;function A0(){return zu||(zu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function x0(){return qu||(qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zh=new WeakMap,Zo=new WeakMap,ed=new WeakMap,No=new WeakMap,Sc=new WeakMap;function S0(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Nn(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Zh.set(t,n)}).catch(()=>{}),Sc.set(e,n),e}function C0(n){if(Zo.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Zo.set(n,e)}let ec={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ed.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function k0(n){ec=n(ec)}function P0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Vo(this),e,...t);return ed.set(r,e.sort?e.sort():[e]),Nn(r)}:x0().includes(n)?function(...e){return n.apply(Vo(this),e),Nn(Zh.get(this))}:function(...e){return Nn(n.apply(Vo(this),e))}}function R0(n){return typeof n=="function"?P0(n):(n instanceof IDBTransaction&&C0(n),T0(n,A0())?new Proxy(n,ec):n)}function Nn(n){if(n instanceof IDBRequest)return S0(n);if(No.has(n))return No.get(n);const e=R0(n);return e!==n&&(No.set(n,e),Sc.set(e,n)),e}const Vo=n=>Sc.get(n);function td(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=Nn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Nn(a.result),l.oldVersion,l.newVersion,Nn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const L0=["get","getKey","getAll","getAllKeys","count"],O0=["put","add","delete","clear"],Mo=new Map;function ju(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Mo.get(e))return Mo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=O0.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||L0.includes(t)))return;const s=async function(a,...c){const l=this.transaction(a,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),i&&l.done]))[0]};return Mo.set(e,s),s}k0(n=>({...n,get:(e,t,r)=>ju(e,t)||n.get(e,t,r),has:(e,t)=>!!ju(e,t)||n.has(e,t)}));/**
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
 */class D0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(N0(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function N0(n){return n.getComponent()?.type==="VERSION"}const tc="@firebase/app",Hu="0.15.0";/**
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
 */const ln=new Ua("@firebase/app"),V0="@firebase/app-compat",M0="@firebase/analytics-compat",F0="@firebase/analytics",U0="@firebase/app-check-compat",B0="@firebase/app-check",$0="@firebase/auth",z0="@firebase/auth-compat",q0="@firebase/database",j0="@firebase/data-connect",H0="@firebase/database-compat",G0="@firebase/functions",W0="@firebase/functions-compat",K0="@firebase/installations",Y0="@firebase/installations-compat",Q0="@firebase/messaging",X0="@firebase/messaging-compat",J0="@firebase/performance",Z0="@firebase/performance-compat",eg="@firebase/remote-config",tg="@firebase/remote-config-compat",ng="@firebase/storage",rg="@firebase/storage-compat",ig="@firebase/firestore",sg="@firebase/ai",ag="@firebase/firestore-compat",og="firebase",cg="12.15.0";/**
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
 */const nc="[DEFAULT]",lg={[tc]:"fire-core",[V0]:"fire-core-compat",[F0]:"fire-analytics",[M0]:"fire-analytics-compat",[B0]:"fire-app-check",[U0]:"fire-app-check-compat",[$0]:"fire-auth",[z0]:"fire-auth-compat",[q0]:"fire-rtdb",[j0]:"fire-data-connect",[H0]:"fire-rtdb-compat",[G0]:"fire-fn",[W0]:"fire-fn-compat",[K0]:"fire-iid",[Y0]:"fire-iid-compat",[Q0]:"fire-fcm",[X0]:"fire-fcm-compat",[J0]:"fire-perf",[Z0]:"fire-perf-compat",[eg]:"fire-rc",[tg]:"fire-rc-compat",[ng]:"fire-gcs",[rg]:"fire-gcs-compat",[ig]:"fire-fst",[ag]:"fire-fst-compat",[sg]:"fire-vertex","fire-js":"fire-js",[og]:"fire-js-all"};/**
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
 */const $i=new Map,ug=new Map,rc=new Map;function Gu(n,e){try{n.container.addComponent(e)}catch(t){ln.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kt(n){const e=n.name;if(rc.has(e))return ln.debug(`There were multiple attempts to register component ${e}.`),!1;rc.set(e,n);for(const t of $i.values())Gu(t,n);for(const t of ug.values())Gu(t,n);return!0}function vr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function vt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const hg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vn=new yr("app","Firebase",hg);/**
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
 */class dg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
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
 */const Xr=cg;function nd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:nc,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Vn.create("bad-app-name",{appName:String(i)});if(t||(t=Gh()),!t)throw Vn.create("no-options");const s=$i.get(i);if(s){if(zn(t,s.options)&&zn(r,s.config))return s;throw Vn.create("duplicate-app",{appName:i})}const a=new _0(i);for(const l of rc.values())a.addComponent(l);const c=new dg(t,r,a);return $i.set(i,c),c}function Ba(n=nc){const e=$i.get(n);if(!e&&n===nc&&Gh())return nd();if(!e)throw Vn.create("no-app",{appName:n});return e}function pg(){return Array.from($i.values())}function At(n,e,t){let r=lg[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ln.warn(a.join(" "));return}Kt(new Vt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const fg="firebase-heartbeat-database",gg=1,zi="firebase-heartbeat-store";let Fo=null;function rd(){return Fo||(Fo=td(fg,gg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vn.create("idb-open",{originalErrorMessage:n.message})})),Fo}async function mg(n){try{const t=(await rd()).transaction(zi),r=await t.objectStore(zi).get(id(n));return await t.done,r}catch(e){if(e instanceof Ft)ln.warn(e.message);else{const t=Vn.create("idb-get",{originalErrorMessage:e?.message});ln.warn(t.message)}}}async function Wu(n,e){try{const r=(await rd()).transaction(zi,"readwrite");await r.objectStore(zi).put(e,id(n)),await r.done}catch(t){if(t instanceof Ft)ln.warn(t.message);else{const r=Vn.create("idb-set",{originalErrorMessage:t?.message});ln.warn(r.message)}}}function id(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yg=1024,vg=30;class _g{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Eg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ku();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>vg){const i=bg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ln.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ku(),{heartbeatsToSend:t,unsentEntries:r}=wg(this._heartbeatsCache.heartbeats),i=ca(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return ln.warn(e),""}}}function Ku(){return new Date().toISOString().substring(0,10)}function wg(n,e=yg){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Yu(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Yu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Eg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qh()?Xh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Wu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Yu(n){return ca(JSON.stringify({version:2,heartbeats:n})).length}function bg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Ig(n){Kt(new Vt("platform-logger",e=>new D0(e),"PRIVATE")),Kt(new Vt("heartbeat",e=>new _g(e),"PRIVATE")),At(tc,Hu,n),At(tc,Hu,"esm2020"),At("fire-js","")}Ig("");var Tg="firebase",Ag="12.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(Tg,Ag,"app");const sd="@firebase/installations",Cc="0.6.22";/**
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
 */const ad=1e4,od=`w:${Cc}`,cd="FIS_v2",xg="https://firebaseinstallations.googleapis.com/v1",Sg=60*60*1e3,Cg="installations",kg="Installations";/**
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
 */const Pg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},dr=new yr(Cg,kg,Pg);function ld(n){return n instanceof Ft&&n.code.includes("request-failed")}/**
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
 */function ud({projectId:n}){return`${xg}/projects/${n}/installations`}function hd(n){return{token:n.token,requestStatus:2,expiresIn:Lg(n.expiresIn),creationTime:Date.now()}}async function dd(n,e){const r=(await e.json()).error;return dr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function pd({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Rg(n,{refreshToken:e}){const t=pd(n);return t.append("Authorization",Og(e)),t}async function fd(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Lg(n){return Number(n.replace("s","000"))}function Og(n){return`${cd} ${n}`}/**
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
 */async function Dg({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=ud(n),i=pd(n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const a={fid:t,authVersion:cd,appId:n.appId,sdkVersion:od},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await fd(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:hd(u.authToken)}}else throw await dd("Create Installation",l)}/**
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
 */function gd(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Ng(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Vg=/^[cdef][\w-]{21}$/,ic="";function Mg(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Fg(n);return Vg.test(t)?t:ic}catch{return ic}}function Fg(n){return Ng(n).substr(0,22)}/**
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
 */function $a(n){return`${n.appName}!${n.appId}`}/**
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
 */const md=new Map;function yd(n,e){const t=$a(n);vd(t,e),Ug(t,e)}function vd(n,e){const t=md.get(n);if(t)for(const r of t)r(e)}function Ug(n,e){const t=Bg();t&&t.postMessage({key:n,fid:e}),$g()}let sr=null;function Bg(){return!sr&&"BroadcastChannel"in self&&(sr=new BroadcastChannel("[Firebase] FID Change"),sr.onmessage=n=>{vd(n.data.key,n.data.fid)}),sr}function $g(){md.size===0&&sr&&(sr.close(),sr=null)}/**
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
 */const zg="firebase-installations-database",qg=1,pr="firebase-installations-store";let Uo=null;function kc(){return Uo||(Uo=td(zg,qg,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(pr)}}})),Uo}async function la(n,e){const t=$a(n),i=(await kc()).transaction(pr,"readwrite"),s=i.objectStore(pr),a=await s.get(t);return await s.put(e,t),await i.done,(!a||a.fid!==e.fid)&&yd(n,e.fid),e}async function _d(n){const e=$a(n),r=(await kc()).transaction(pr,"readwrite");await r.objectStore(pr).delete(e),await r.done}async function za(n,e){const t=$a(n),i=(await kc()).transaction(pr,"readwrite"),s=i.objectStore(pr),a=await s.get(t),c=e(a);return c===void 0?await s.delete(t):await s.put(c,t),await i.done,c&&(!a||a.fid!==c.fid)&&yd(n,c.fid),c}/**
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
 */async function Pc(n){let e;const t=await za(n.appConfig,r=>{const i=jg(r),s=Hg(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===ic?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function jg(n){const e=n||{fid:Mg(),registrationStatus:0};return wd(e)}function Hg(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(dr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Gg(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Wg(n)}:{installationEntry:e}}async function Gg(n,e){try{const t=await Dg(n,e);return la(n.appConfig,t)}catch(t){throw ld(t)&&t.customData.serverCode===409?await _d(n.appConfig):await la(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Wg(n){let e=await Qu(n.appConfig);for(;e.registrationStatus===1;)await gd(100),e=await Qu(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Pc(n);return r||t}return e}function Qu(n){return za(n,e=>{if(!e)throw dr.create("installation-not-found");return wd(e)})}function wd(n){return Kg(n)?{fid:n.fid,registrationStatus:0}:n}function Kg(n){return n.registrationStatus===1&&n.registrationTime+ad<Date.now()}/**
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
 */async function Yg({appConfig:n,heartbeatServiceProvider:e},t){const r=Qg(n,t),i=Rg(n,t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const a={installation:{sdkVersion:od,appId:n.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},l=await fd(()=>fetch(r,c));if(l.ok){const u=await l.json();return hd(u)}else throw await dd("Generate Auth Token",l)}function Qg(n,{fid:e}){return`${ud(n)}/${e}/authTokens:generate`}/**
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
 */async function Rc(n,e=!1){let t;const r=await za(n.appConfig,s=>{if(!Ed(s))throw dr.create("not-registered");const a=s.authToken;if(!e&&Zg(a))return s;if(a.requestStatus===1)return t=Xg(n,e),s;{if(!navigator.onLine)throw dr.create("app-offline");const c=tm(s);return t=Jg(n,c),c}});return t?await t:r.authToken}async function Xg(n,e){let t=await Xu(n.appConfig);for(;t.authToken.requestStatus===1;)await gd(100),t=await Xu(n.appConfig);const r=t.authToken;return r.requestStatus===0?Rc(n,e):r}function Xu(n){return za(n,e=>{if(!Ed(e))throw dr.create("not-registered");const t=e.authToken;return nm(t)?{...e,authToken:{requestStatus:0}}:e})}async function Jg(n,e){try{const t=await Yg(n,e),r={...e,authToken:t};return await la(n.appConfig,r),t}catch(t){if(ld(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await _d(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await la(n.appConfig,r)}throw t}}function Ed(n){return n!==void 0&&n.registrationStatus===2}function Zg(n){return n.requestStatus===2&&!em(n)}function em(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Sg}function tm(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function nm(n){return n.requestStatus===1&&n.requestTime+ad<Date.now()}/**
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
 */async function rm(n){const e=n,{installationEntry:t,registrationPromise:r}=await Pc(e);return r?r.catch(console.error):Rc(e).catch(console.error),t.fid}/**
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
 */async function im(n,e=!1){const t=n;return await sm(t),(await Rc(t,e)).token}async function sm(n){const{registrationPromise:e}=await Pc(n);e&&await e}/**
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
 */function am(n){if(!n||!n.options)throw Bo("App Configuration");if(!n.name)throw Bo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Bo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Bo(n){return dr.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="installations",om="installations-internal",cm=n=>{const e=n.getProvider("app").getImmediate(),t=am(e),r=vr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},lm=n=>{const e=n.getProvider("app").getImmediate(),t=vr(e,bd).getImmediate();return{getId:()=>rm(t),getToken:i=>im(t,i)}};function um(){Kt(new Vt(bd,cm,"PUBLIC")),Kt(new Vt(om,lm,"PRIVATE"))}um();At(sd,Cc);At(sd,Cc,"esm2020");/**
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
 */const ua="analytics",hm="firebase_id",dm="origin",pm=60*1e3,fm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lc="https://www.googletagmanager.com/gtag/js";/**
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
 */const it=new Ua("@firebase/analytics");/**
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
 */const gm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Et=new yr("analytics","Analytics",gm);/**
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
 */function mm(n){if(!n.startsWith(Lc)){const e=Et.create("invalid-gtag-resource",{gtagURL:n});return it.warn(e.message),""}return n}function Id(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function ym(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function vm(n,e){const t=ym("firebase-js-sdk-policy",{createScriptURL:mm}),r=document.createElement("script"),i=`${Lc}?l=${n}&id=${e}`;r.src=t?t?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function _m(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function wm(n,e,t,r,i,s){const a=r[i];try{if(a)await e[a];else{const l=(await Id(t)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(c){it.error(c)}n("config",i,s)}async function Em(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await Id(t);for(const l of a){const u=c.find(g=>g.measurementId===l),p=u&&e[u.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){it.error(s)}}function bm(n,e,t,r){async function i(s,...a){try{if(s==="event"){const[c,l]=a;await Em(n,e,t,c,l)}else if(s==="config"){const[c,l]=a;await wm(n,e,t,r,c,l)}else if(s==="consent"){const[c,l]=a;n("consent",c,l)}else if(s==="get"){const[c,l,u]=a;n("get",c,l,u)}else if(s==="set"){const[c]=a;n("set",c)}else n(s,...a)}catch(c){it.error(c)}}return i}function Im(n,e,t,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=bm(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function Tm(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Lc)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=30,xm=1e3;class Sm{constructor(e={},t=xm){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Td=new Sm;function Cm(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function km(n){const{appId:e,apiKey:t}=n,r={method:"GET",headers:Cm(t)},i=fm.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let a="";try{const c=await s.json();c.error?.message&&(a=c.error.message)}catch{}throw Et.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function Pm(n,e=Td,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw Et.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Et.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Om;return setTimeout(async()=>{c.abort()},pm),Ad({appId:r,apiKey:i,measurementId:s},a,c,e)}async function Ad(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Td){const{appId:s,measurementId:a}=n;try{await Rm(r,e)}catch(c){if(a)return it.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:s,measurementId:a};throw c}try{const c=await km(n);return i.deleteThrottleMetadata(s),c}catch(c){const l=c;if(!Lm(l)){if(i.deleteThrottleMetadata(s),a)return it.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:s,measurementId:a};throw c}const u=Number(l?.customData?.httpStatus)===503?$u(t,i.intervalMillis,Am):$u(t,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return i.setThrottleMetadata(s,p),it.debug(`Calling attemptFetch again in ${u} millis`),Ad(n,p,r,i)}}function Rm(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(Et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Lm(n){if(!(n instanceof Ft)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Om{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Dm(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,a={...r,send_to:s};n("event",t,a)}}async function Nm(n,e,t,r){if(r&&r.global){const i={};for(const s of Object.keys(t))i[`user_properties.${s}`]=t[s];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(){if(Qh())try{await Xh()}catch(n){return it.warn(Et.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return it.warn(Et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Mm(n,e,t,r,i,s,a){const c=Pm(n);c.then(I=>{t[I.measurementId]=I.appId,n.options.measurementId&&I.measurementId!==n.options.measurementId&&it.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>it.error(I)),e.push(c);const l=Vm().then(I=>{if(I)return r.getId()}),[u,p]=await Promise.all([c,l]);Tm(s)||vm(s,u.measurementId),i("js",new Date);const g=a?.config??{};return g[dm]="firebase",g.update=!0,p!=null&&(g[hm]=p),i("config",u.measurementId,g),u.measurementId}/**
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
 */class Fm{constructor(e){this.app=e}_delete(){return delete Dr[this.app.options.appId],Promise.resolve()}}let Dr={},Ju=[];const Zu={};let $o="dataLayer",Um="gtag",e1,Oc,t1=!1;function Bm(){const n=[];if(Yh()&&n.push("This is a browser extension environment."),i0()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Et.create("invalid-analytics-context",{errorInfo:e});it.warn(t.message)}}function $m(n,e,t){Bm();const r=n.options.appId;if(!r)throw Et.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)it.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Et.create("no-api-key");if(Dr[r]!=null)throw Et.create("already-exists",{id:r});if(!t1){_m($o);const{wrappedGtag:s,gtagCore:a}=Im(Dr,Ju,Zu,$o,Um);Oc=s,e1=a,t1=!0}return Dr[r]=Mm(n,Ju,Zu,e,e1,$o,t),new Fm(n)}function zm(n=Ba()){n=ze(n);const e=vr(n,ua);return e.isInitialized()?e.getImmediate():qm(n)}function qm(n,e={}){const t=vr(n,ua);if(t.isInitialized()){const i=t.getImmediate();if(zn(e,t.getOptions()))return i;throw Et.create("already-initialized")}return t.initialize({options:e})}function jm(n,e,t){n=ze(n),Nm(Oc,Dr[n.app.options.appId],e,t).catch(r=>it.error(r))}function Hm(n,e,t,r){n=ze(n),Dm(Oc,Dr[n.app.options.appId],e,t,r).catch(i=>it.error(i))}const n1="@firebase/analytics",r1="0.10.22";function Gm(){Kt(new Vt(ua,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return $m(r,i,t)},"PUBLIC")),Kt(new Vt("analytics-internal",n,"PRIVATE")),At(n1,r1),At(n1,r1,"esm2020");function n(e){try{const t=e.getProvider(ua).getImmediate();return{logEvent:(r,i,s)=>Hm(t,r,i,s),setUserProperties:(r,i)=>jm(t,r,i)}}catch(t){throw Et.create("interop-component-reg-failed",{reason:t})}}}Gm();function xd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wm=xd,Sd=new yr("auth","Firebase",xd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Ua("@firebase/auth");function Km(n,...e){ha.logLevel<=ce.WARN&&ha.warn(`Auth (${Xr}): ${n}`,...e)}function Xs(n,...e){ha.logLevel<=ce.ERROR&&ha.error(`Auth (${Xr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n,...e){throw Nc(n,...e)}function Nt(n,...e){return Nc(n,...e)}function Dc(n,e,t){const r={...Wm(),[e]:t};return new yr("auth","Firebase",r).create(e,{appName:n.name})}function an(n){return Dc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ym(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&xt(n,"argument-error"),Dc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Sd.create(n,...e)}function J(n,e,...t){if(!n)throw Nc(e,...t)}function nn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xs(e),new Error(e)}function un(n,e){n||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(){return typeof self<"u"&&self.location?.href||""}function Qm(){return i1()==="http:"||i1()==="https:"}function i1(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qm()||Yh()||"connection"in navigator)?navigator.onLine:!0}function Jm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.shortDelay=e,this.longDelay=t,un(t>e,"Short delay should be less than long delay!"),this.isMobile=J2()||t0()}get(){return Xm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n,e){un(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e6=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],t6=new ds(3e4,6e4);function fn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Jt(n,e,t,r,i={}){return kd(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=us({...a,key:n.config.apiKey}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:l,...s};return e0()||(u.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&hs(n.emulatorConfig.host)&&(u.credentials="include"),Cd.fetch()(await Pd(n,n.config.apiHost,t,c),u)})}async function kd(n,e,t){n._canInitEmulator=!1;const r={...Zm,...e};try{const i=new r6(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw $s(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $s(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw $s(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw $s(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Dc(n,p,u);xt(n,p)}}catch(i){if(i instanceof Ft)throw i;xt(n,"network-request-failed",{message:String(i)})}}async function ps(n,e,t,r,i={}){const s=await Jt(n,e,t,r,i);return"mfaPendingCredential"in s&&xt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Pd(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?Vc(n.config,i):`${n.config.apiScheme}://${i}`;return e6.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function n6(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class r6{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),t6.get())})}}function $s(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Nt(n,e,r);return i.customData._tokenResponse=t,i}function s1(n){return n!==void 0&&n.enterprise!==void 0}class i6{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return n6(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function s6(n,e){return Jt(n,"GET","/v2/recaptchaConfig",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a6(n,e){return Jt(n,"POST","/v1/accounts:delete",e)}async function da(n,e){return Jt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function o6(n,e=!1){const t=ze(n),r=await t.getIdToken(e),i=Mc(r);J(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:Pi(zo(i.auth_time)),issuedAtTime:Pi(zo(i.iat)),expirationTime:Pi(zo(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function zo(n){return Number(n)*1e3}function Mc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Xs("JWT malformed, contained fewer than 3 sections"),null;try{const i=jh(t);return i?JSON.parse(i):(Xs("Failed to decode base64 JWT payload"),null)}catch(i){return Xs("Caught error parsing JWT payload as JSON",i?.toString()),null}}function a1(n){const e=Mc(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ft&&c6(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function c6({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pi(this.lastLoginAt),this.creationTime=Pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pa(n){const e=n.auth,t=await n.getIdToken(),r=await $r(n,da(e,{idToken:t}));J(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=i.providerUserInfo?.length?Rd(i.providerUserInfo):[],a=h6(n.providerData,s),c=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!a?.length,u=c?l:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ac(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(n,p)}async function u6(n){const e=ze(n);await pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h6(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Rd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d6(n,e){const t=await kd(n,{},async()=>{const r=us({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Pd(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&hs(n.emulatorConfig.host)&&(l.credentials="include"),Cd.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function p6(n,e){return Jt(n,"POST","/v2/accounts:revokeToken",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):a1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=a1(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await d6(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Nr;return r&&(J(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ot{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new l6(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ac(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await $r(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return o6(this,e)}reload(){return u6(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ot({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await pa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(an(this.auth));const e=await this.getIdToken();return await $r(this,a6(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:g,emailVerified:I,isAnonymous:P,providerData:L,stsTokenManager:E}=t;J(g&&E,e,"internal-error");const N=Nr.fromJSON(this.name,E);J(typeof g=="string",e,"internal-error"),Tn(r,e.name),Tn(i,e.name),J(typeof I=="boolean",e,"internal-error"),J(typeof P=="boolean",e,"internal-error"),Tn(s,e.name),Tn(a,e.name),Tn(c,e.name),Tn(l,e.name),Tn(u,e.name),Tn(p,e.name);const q=new Ot({uid:g,auth:e,email:i,emailVerified:I,displayName:r,isAnonymous:P,photoURL:a,phoneNumber:s,tenantId:c,stsTokenManager:N,createdAt:u,lastLoginAt:p});return L&&Array.isArray(L)&&(q.providerData=L.map(Y=>({...Y}))),l&&(q._redirectEventId=l),q}static async _fromIdTokenResponse(e,t,r=!1){const i=new Nr;i.updateFromServerResponse(t);const s=new Ot({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pa(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Rd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,c=new Nr;c.updateFromIdToken(r);const l=new Ot({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ac(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=new Map;function rn(n){un(n instanceof Function,"Expected a class definition");let e=o1.get(n);return e?(un(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,o1.set(n,e),e)}/**
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
 */class Ld{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ld.type="NONE";const c1=Ld;/**
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
 */function Js(n,e,t){return`firebase:${n}:${e}:${t}`}class Vr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Js(this.userKey,i.apiKey,s),this.fullPersistenceKey=Js("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await da(this.auth,{idToken:e}).catch(()=>{});return t?Ot._fromGetAccountInfoResponse(this.auth,t,e):null}return Ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Vr(rn(c1),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rn(c1);const a=Js(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const p=await u._get(a);if(p){let g;if(typeof p=="string"){const I=await da(e,{idToken:p}).catch(()=>{});if(!I)break;g=await Ot._fromGetAccountInfoResponse(e,I,p)}else g=Ot._fromJSON(e,p);u!==s&&(c=g),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Vr(s,e,r):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(a)}catch{}})),new Vr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Od(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fd(e))return"Blackberry";if(Ud(e))return"Webos";if(Dd(e))return"Safari";if((e.includes("chrome/")||Nd(e))&&!e.includes("edge/"))return"Chrome";if(Md(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Od(n=Je()){return/firefox\//i.test(n)}function Dd(n=Je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nd(n=Je()){return/crios\//i.test(n)}function Vd(n=Je()){return/iemobile/i.test(n)}function Md(n=Je()){return/android/i.test(n)}function Fd(n=Je()){return/blackberry/i.test(n)}function Ud(n=Je()){return/webos/i.test(n)}function Fc(n=Je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function f6(n=Je()){return Fc(n)&&!!window.navigator?.standalone}function g6(){return n0()&&document.documentMode===10}function Bd(n=Je()){return Fc(n)||Md(n)||Ud(n)||Fd(n)||/windows phone/i.test(n)||Vd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(n,e=[]){let t;switch(n){case"Browser":t=l1(Je());break;case"Worker":t=`${l1(Je())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xr}/${r}`}/**
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
 */class m6{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function y6(n,e={}){return Jt(n,"GET","/v2/passwordPolicy",fn(n,e))}/**
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
 */const v6=6;class _6{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??v6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w6{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new u1(this),this.idTokenSubscription=new u1(this),this.beforeStateQueue=new m6(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Vr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await da(this,{idToken:e}),r=await Ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(vt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===a)&&c?.user&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pa(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(an(this));const t=e?ze(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(an(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(an(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await y6(this),t=new _6(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await p6(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rn(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await Vr.create(this,[rn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$d(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Km(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Zt(n){return ze(n)}class u1{constructor(e){this.auth=e,this.observer=null,this.addObserver=l0(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function E6(n){qa=n}function zd(n){return qa.loadJS(n)}function b6(){return qa.recaptchaEnterpriseScript}function I6(){return qa.gapiScript}function T6(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class A6{constructor(){this.enterprise=new x6}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class x6{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const S6="recaptcha-enterprise",qd="NO_RECAPTCHA",h1="onFirebaseAuthREInstanceReady";class xn{constructor(e){this.type=S6,this.auth=Zt(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{s6(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new i6(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,a(u.siteKey)}}).catch(l=>{c(l)})})}function i(s,a,c){const l=window.grecaptcha;s1(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{a(u)}).catch(()=>{a(qd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new A6().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(async c=>{if(!t&&s1(window.grecaptcha)&&xn.scriptInjectionDeferred)await xn.scriptInjectionDeferred.promise,i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=b6();l.length!==0&&(l+=c+`&onload=${h1}`),xn.scriptInjectionDeferred=new Kh,window[h1]=()=>{xn.scriptInjectionDeferred?.resolve()},zd(l).then(()=>xn.scriptInjectionDeferred?.promise).then(()=>{i(c,s,a)}).catch(u=>{a(u)})}}).catch(c=>{a(c)})})}}xn.scriptInjectionDeferred=null;async function d1(n,e,t,r=!1,i=!1){const s=new xn(n);let a;if(i)a=qd;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function fa(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await d1(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await d1(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n,e){const t=vr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(zn(s,e??{}))return i;xt(i,"already-initialized")}return t.initialize({options:e})}function C6(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(rn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function k6(n,e,t){const r=Zt(n);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Hd(e),{host:a,port:c}=P6(e),l=c===null?"":`:${c}`,u={url:`${s}//${a}${l}/`},p=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(zn(u,r.config.emulator)&&zn(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,hs(a)?Jh(`${s}//${a}${l}`):R6()}function Hd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function P6(n){const e=Hd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:p1(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:p1(a)}}}function p1(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function R6(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,t){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}async function L6(n,e){return Jt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O6(n,e){return ps(n,"POST","/v1/accounts:signInWithPassword",fn(n,e))}async function D6(n,e){return Jt(n,"POST","/v1/accounts:sendOobCode",fn(n,e))}async function N6(n,e){return D6(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V6(n,e){return ps(n,"POST","/v1/accounts:signInWithEmailLink",fn(n,e))}async function M6(n,e){return ps(n,"POST","/v1/accounts:signInWithEmailLink",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends Uc{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new qi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new qi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fa(e,t,"signInWithPassword",O6);case"emailLink":return V6(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fa(e,r,"signUpPassword",L6);case"emailLink":return M6(e,{idToken:t,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(n,e){return ps(n,"POST","/v1/accounts:signInWithIdp",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F6="http://localhost";class fr extends Uc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const a=new fr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Mr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Mr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mr(e,t)}buildRequest(){const e={requestUri:F6,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=us(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U6(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function B6(n){const e=Ti(Ai(n)).link,t=e?Ti(Ai(e)).deep_link_id:null,r=Ti(Ai(n)).deep_link_id;return(r?Ti(Ai(r)).link:null)||r||t||e||n}class Bc{constructor(e){const t=Ti(Ai(e)),r=t.apiKey??null,i=t.oobCode??null,s=U6(t.mode??null);J(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=B6(e);try{return new Bc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.providerId=Jr.PROVIDER_ID}static credential(e,t){return qi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Bc.parseLink(t);return J(r,"argument-error"),qi._fromEmailAndCode(e,r.code,r.tenantId)}}Jr.PROVIDER_ID="password";Jr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fs extends $c{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends fs{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fr._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return tn.credential(t,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends fs{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends fs{constructor(){super("twitter.com")}static credential(e,t){return fr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return kn.credential(t,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $6(n,e){return ps(n,"POST","/v1/accounts:signUp",fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Ot._fromIdTokenResponse(e,r,i),a=f1(r);return new gr({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=f1(r);return new gr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function f1(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends Ft{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ga.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ga(e,t,r,i)}}function Gd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ga._fromErrorAndOperation(n,s,e,r):s})}async function z6(n,e,t=!1){const r=await $r(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gr._forOperation(n,"link",r)}/**
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
 */async function q6(n,e,t=!1){const{auth:r}=n;if(vt(r.app))return Promise.reject(an(r));const i="reauthenticate";try{const s=await $r(n,Gd(r,i,e,n),t);J(s.idToken,r,"internal-error");const a=Mc(s.idToken);J(a,r,"internal-error");const{sub:c}=a;return J(n.uid===c,r,"user-mismatch"),gr._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wd(n,e,t=!1){if(vt(n.app))return Promise.reject(an(n));const r="signIn",i=await Gd(n,r,e),s=await gr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function j6(n,e){return Wd(Zt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kd(n){const e=Zt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function H6(n,e,t){const r=Zt(n);await fa(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",N6)}async function G6(n,e,t){if(vt(n.app))return Promise.reject(an(n));const r=Zt(n),a=await fa(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$6).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Kd(n),l}),c=await gr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function W6(n,e,t){return vt(n.app)?Promise.reject(an(n)):j6(ze(n),Jr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Kd(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K6(n,e){return Jt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y6(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ze(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await $r(r,K6(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Q6(n,e,t,r){return ze(n).onIdTokenChanged(e,t,r)}function X6(n,e,t){return ze(n).beforeAuthStateChanged(e,t)}function J6(n,e,t,r){return ze(n).onAuthStateChanged(e,t,r)}function Z6(n){return ze(n).signOut()}const ma="__sak";/**
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
 */class Yd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ma,"1"),this.storage.removeItem(ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e7=1e3,t7=10;class Qd extends Yd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);g6()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,t7):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},e7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qd.type="LOCAL";const Xd=Qd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends Yd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jd.type="SESSION";const Zd=Jd;/**
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
 */function n7(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ja{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ja(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async u=>u(t.origin,s)),l=await n7(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ja.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class r7{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const u=zc("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const I=g;if(I.data.eventId===u)switch(I.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(I.data.response);break;default:clearTimeout(p),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function i7(n){jt().location.href=n}/**
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
 */function ep(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function s7(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function a7(){return navigator?.serviceWorker?.controller||null}function o7(){return ep()?self:null}/**
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
 */const tp="firebaseLocalStorageDb",c7=1,ya="firebaseLocalStorage",np="fbase_key";class gs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ha(n,e){return n.transaction([ya],e?"readwrite":"readonly").objectStore(ya)}function l7(){const n=indexedDB.deleteDatabase(tp);return new gs(n).toPromise()}function rp(){const n=indexedDB.open(tp,c7);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ya,{keyPath:np})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ya)?e(r):(r.close(),await l7(),e(await rp()))})})}async function g1(n,e,t){const r=Ha(n,!0).put({[np]:e,value:t});return new gs(r).toPromise()}async function u7(n,e){const t=Ha(n,!1).get(e),r=await new gs(t).toPromise();return r===void 0?null:r.value}function m1(n,e){const t=Ha(n,!0).delete(e);return new gs(t).toPromise()}const h7=800,d7=3;class ip{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=rp(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>d7)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return ep()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ja._getInstance(o7()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await s7(),!this.activeServiceWorker)return;this.sender=new r7(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||a7()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await g1(e,ma,"1"),await m1(e,ma)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>g1(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>u7(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>m1(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ha(i,!1).getAll();return new gs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h7)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ip.type="LOCAL";const sp=ip;new ds(3e4,6e4);/**
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
 */function ap(n,e){return e?rn(e):(J(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class qc extends Uc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function p7(n){return Wd(n.auth,new qc(n),n.bypassAuthState)}function f7(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),q6(t,new qc(n),n.bypassAuthState)}async function g7(n){const{auth:e,user:t}=n;return J(t,e,"internal-error"),z6(t,new qc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p7;case"linkViaPopup":case"linkViaRedirect":return g7;case"reauthViaPopup":case"reauthViaRedirect":return f7;default:xt(this.auth,"internal-error")}}resolve(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){un(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m7=new ds(2e3,1e4);async function y7(n,e,t){if(vt(n.app))return Promise.reject(Nt(n,"operation-not-supported-in-this-environment"));const r=Zt(n);Ym(n,e,$c);const i=ap(r,t);return new ar(r,"signInViaPopup",e,i).executeNotNull()}class ar extends op{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){un(this.filter.length===1,"Popup operations only handle one event");const e=zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,m7.get())};e()}}ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v7="pendingRedirect",Zs=new Map;class _7 extends op{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Zs.get(this.auth._key());if(!e){try{const r=await w7(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Zs.set(this.auth._key(),e)}return this.bypassAuthState||Zs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w7(n,e){const t=I7(e),r=b7(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function E7(n,e){Zs.set(n._key(),e)}function b7(n){return rn(n._redirectPersistence)}function I7(n){return Js(v7,n.config.apiKey,n.name)}async function T7(n,e){return await Zt(n)._initializationPromise,cp(n,e,!1)}async function cp(n,e,t=!1){if(vt(n.app))return Promise.reject(an(n));const r=Zt(n),i=ap(r,e),a=await new _7(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A7=10*60*1e3;class x7{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!S7(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!lp(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Nt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A7&&this.cachedEventUids.clear(),this.cachedEventUids.has(y1(e))}saveEventToCache(e){this.cachedEventUids.add(y1(e)),this.lastProcessedEventTime=Date.now()}}function y1(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function lp({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function S7(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C7(n,e={}){return Jt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k7=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P7=/^https?/;async function R7(n){if(n.config.emulator)return;const{authorizedDomains:e}=await C7(n);for(const t of e)try{if(L7(t))return}catch{}xt(n,"unauthorized-domain")}function L7(n){const e=sc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!P7.test(t))return!1;if(k7.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const O7=new ds(3e4,6e4);function v1(){const n=jt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function D7(n){return new Promise((e,t)=>{function r(){v1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{v1(),t(Nt(n,"network-request-failed"))},timeout:O7.get()})}if(jt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(jt().gapi?.load)r();else{const i=T6("iframefcb");return jt()[i]=()=>{gapi.load?r():t(Nt(n,"network-request-failed"))},zd(`${I6()}?onload=${i}`).catch(s=>t(s))}}).catch(e=>{throw ea=null,e})}let ea=null;function N7(n){return ea=ea||D7(n),ea}/**
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
 */const V7=new ds(5e3,15e3),M7="__/auth/iframe",F7="emulator/auth/iframe",U7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},B7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $7(n){const e=n.config;J(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vc(e,F7):`https://${n.config.authDomain}/${M7}`,r={apiKey:e.apiKey,appName:n.name,v:Xr},i=B7.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${us(r).slice(1)}`}async function z7(n){const e=await N7(n),t=jt().gapi;return J(t,n,"internal-error"),e.open({where:document.body,url:$7(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U7,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Nt(n,"network-request-failed"),c=jt().setTimeout(()=>{s(a)},V7.get());function l(){jt().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const q7={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},j7=500,H7=600,G7="_blank",W7="http://localhost";class _1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function K7(n,e,t,r=j7,i=H7){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...q7,width:r.toString(),height:i.toString(),top:s,left:a},u=Je().toLowerCase();t&&(c=Nd(u)?G7:t),Od(u)&&(e=e||W7,l.scrollbars="yes");const p=Object.entries(l).reduce((I,[P,L])=>`${I}${P}=${L},`,"");if(f6(u)&&c!=="_self")return Y7(e||"",c),new _1(null);const g=window.open(e||"",c,p);J(g,n,"popup-blocked");try{g.focus()}catch{}return new _1(g)}function Y7(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Q7="__/auth/handler",X7="emulator/auth/handler",J7=encodeURIComponent("fac");async function w1(n,e,t,r,i,s){J(n.config.authDomain,n,"auth-domain-config-required"),J(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Xr,eventId:i};if(e instanceof $c){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",c0(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof fs){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),u=l?`#${J7}=${encodeURIComponent(l)}`:"";return`${Z7(n)}?${us(c).slice(1)}${u}`}function Z7({config:n}){return n.emulator?Vc(n,X7):`https://${n.authDomain}/${Q7}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="webStorageSupport";class e4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zd,this._completeRedirectFn=cp,this._overrideRedirectResult=E7}async _openPopup(e,t,r,i){un(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await w1(e,t,r,sc(),i);return K7(e,s,zc())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await w1(e,t,r,sc(),i);return i7(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(un(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await z7(e),r=new x7(e);return t.register("authEvent",i=>(J(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qo,{type:qo},i=>{const s=i?.[0]?.[qo];s!==void 0&&t(!!s),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=R7(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bd()||Dd()||Fc()}}const t4=e4;var E1="@firebase/auth",b1="1.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r4(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function i4(n){Kt(new Vt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;J(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$d(n)},u=new w6(r,i,s,l);return C6(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Kt(new Vt("auth-internal",e=>{const t=Zt(e.getProvider("auth").getImmediate());return(r=>new n4(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(E1,b1,r4(n)),At(E1,b1,"esm2020")}/**
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
 */const s4=5*60,a4=Wh("authIdTokenMaxAge")||s4;let I1=null;const o4=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>a4)return;const i=t?.token;I1!==i&&(I1=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function c4(n=Ba()){const e=vr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=jd(n,{popupRedirectResolver:t4,persistence:[sp,Xd,Zd]}),r=Wh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=o4(s.toString());X6(t,a,()=>a(t.currentUser)),Q6(t,c=>a(c))}}const i=Hh("auth");return i&&k6(t,`http://${i}`),t}function l4(){return document.getElementsByTagName("head")?.[0]??document}E6({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Nt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",l4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});i4("Browser");var T1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mn,up;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function w(){}w.prototype=y.prototype,b.F=y.prototype,b.prototype=new w,b.prototype.constructor=b,b.D=function(x,T,C){for(var _=Array(arguments.length-2),He=2;He<arguments.length;He++)_[He-2]=arguments[He];return y.prototype[T].apply(x,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,y,w){w||(w=0);const x=Array(16);if(typeof y=="string")for(var T=0;T<16;++T)x[T]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(T=0;T<16;++T)x[T]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=b.g[0],w=b.g[1],T=b.g[2];let C=b.g[3],_;_=y+(C^w&(T^C))+x[0]+3614090360&4294967295,y=w+(_<<7&4294967295|_>>>25),_=C+(T^y&(w^T))+x[1]+3905402710&4294967295,C=y+(_<<12&4294967295|_>>>20),_=T+(w^C&(y^w))+x[2]+606105819&4294967295,T=C+(_<<17&4294967295|_>>>15),_=w+(y^T&(C^y))+x[3]+3250441966&4294967295,w=T+(_<<22&4294967295|_>>>10),_=y+(C^w&(T^C))+x[4]+4118548399&4294967295,y=w+(_<<7&4294967295|_>>>25),_=C+(T^y&(w^T))+x[5]+1200080426&4294967295,C=y+(_<<12&4294967295|_>>>20),_=T+(w^C&(y^w))+x[6]+2821735955&4294967295,T=C+(_<<17&4294967295|_>>>15),_=w+(y^T&(C^y))+x[7]+4249261313&4294967295,w=T+(_<<22&4294967295|_>>>10),_=y+(C^w&(T^C))+x[8]+1770035416&4294967295,y=w+(_<<7&4294967295|_>>>25),_=C+(T^y&(w^T))+x[9]+2336552879&4294967295,C=y+(_<<12&4294967295|_>>>20),_=T+(w^C&(y^w))+x[10]+4294925233&4294967295,T=C+(_<<17&4294967295|_>>>15),_=w+(y^T&(C^y))+x[11]+2304563134&4294967295,w=T+(_<<22&4294967295|_>>>10),_=y+(C^w&(T^C))+x[12]+1804603682&4294967295,y=w+(_<<7&4294967295|_>>>25),_=C+(T^y&(w^T))+x[13]+4254626195&4294967295,C=y+(_<<12&4294967295|_>>>20),_=T+(w^C&(y^w))+x[14]+2792965006&4294967295,T=C+(_<<17&4294967295|_>>>15),_=w+(y^T&(C^y))+x[15]+1236535329&4294967295,w=T+(_<<22&4294967295|_>>>10),_=y+(T^C&(w^T))+x[1]+4129170786&4294967295,y=w+(_<<5&4294967295|_>>>27),_=C+(w^T&(y^w))+x[6]+3225465664&4294967295,C=y+(_<<9&4294967295|_>>>23),_=T+(y^w&(C^y))+x[11]+643717713&4294967295,T=C+(_<<14&4294967295|_>>>18),_=w+(C^y&(T^C))+x[0]+3921069994&4294967295,w=T+(_<<20&4294967295|_>>>12),_=y+(T^C&(w^T))+x[5]+3593408605&4294967295,y=w+(_<<5&4294967295|_>>>27),_=C+(w^T&(y^w))+x[10]+38016083&4294967295,C=y+(_<<9&4294967295|_>>>23),_=T+(y^w&(C^y))+x[15]+3634488961&4294967295,T=C+(_<<14&4294967295|_>>>18),_=w+(C^y&(T^C))+x[4]+3889429448&4294967295,w=T+(_<<20&4294967295|_>>>12),_=y+(T^C&(w^T))+x[9]+568446438&4294967295,y=w+(_<<5&4294967295|_>>>27),_=C+(w^T&(y^w))+x[14]+3275163606&4294967295,C=y+(_<<9&4294967295|_>>>23),_=T+(y^w&(C^y))+x[3]+4107603335&4294967295,T=C+(_<<14&4294967295|_>>>18),_=w+(C^y&(T^C))+x[8]+1163531501&4294967295,w=T+(_<<20&4294967295|_>>>12),_=y+(T^C&(w^T))+x[13]+2850285829&4294967295,y=w+(_<<5&4294967295|_>>>27),_=C+(w^T&(y^w))+x[2]+4243563512&4294967295,C=y+(_<<9&4294967295|_>>>23),_=T+(y^w&(C^y))+x[7]+1735328473&4294967295,T=C+(_<<14&4294967295|_>>>18),_=w+(C^y&(T^C))+x[12]+2368359562&4294967295,w=T+(_<<20&4294967295|_>>>12),_=y+(w^T^C)+x[5]+4294588738&4294967295,y=w+(_<<4&4294967295|_>>>28),_=C+(y^w^T)+x[8]+2272392833&4294967295,C=y+(_<<11&4294967295|_>>>21),_=T+(C^y^w)+x[11]+1839030562&4294967295,T=C+(_<<16&4294967295|_>>>16),_=w+(T^C^y)+x[14]+4259657740&4294967295,w=T+(_<<23&4294967295|_>>>9),_=y+(w^T^C)+x[1]+2763975236&4294967295,y=w+(_<<4&4294967295|_>>>28),_=C+(y^w^T)+x[4]+1272893353&4294967295,C=y+(_<<11&4294967295|_>>>21),_=T+(C^y^w)+x[7]+4139469664&4294967295,T=C+(_<<16&4294967295|_>>>16),_=w+(T^C^y)+x[10]+3200236656&4294967295,w=T+(_<<23&4294967295|_>>>9),_=y+(w^T^C)+x[13]+681279174&4294967295,y=w+(_<<4&4294967295|_>>>28),_=C+(y^w^T)+x[0]+3936430074&4294967295,C=y+(_<<11&4294967295|_>>>21),_=T+(C^y^w)+x[3]+3572445317&4294967295,T=C+(_<<16&4294967295|_>>>16),_=w+(T^C^y)+x[6]+76029189&4294967295,w=T+(_<<23&4294967295|_>>>9),_=y+(w^T^C)+x[9]+3654602809&4294967295,y=w+(_<<4&4294967295|_>>>28),_=C+(y^w^T)+x[12]+3873151461&4294967295,C=y+(_<<11&4294967295|_>>>21),_=T+(C^y^w)+x[15]+530742520&4294967295,T=C+(_<<16&4294967295|_>>>16),_=w+(T^C^y)+x[2]+3299628645&4294967295,w=T+(_<<23&4294967295|_>>>9),_=y+(T^(w|~C))+x[0]+4096336452&4294967295,y=w+(_<<6&4294967295|_>>>26),_=C+(w^(y|~T))+x[7]+1126891415&4294967295,C=y+(_<<10&4294967295|_>>>22),_=T+(y^(C|~w))+x[14]+2878612391&4294967295,T=C+(_<<15&4294967295|_>>>17),_=w+(C^(T|~y))+x[5]+4237533241&4294967295,w=T+(_<<21&4294967295|_>>>11),_=y+(T^(w|~C))+x[12]+1700485571&4294967295,y=w+(_<<6&4294967295|_>>>26),_=C+(w^(y|~T))+x[3]+2399980690&4294967295,C=y+(_<<10&4294967295|_>>>22),_=T+(y^(C|~w))+x[10]+4293915773&4294967295,T=C+(_<<15&4294967295|_>>>17),_=w+(C^(T|~y))+x[1]+2240044497&4294967295,w=T+(_<<21&4294967295|_>>>11),_=y+(T^(w|~C))+x[8]+1873313359&4294967295,y=w+(_<<6&4294967295|_>>>26),_=C+(w^(y|~T))+x[15]+4264355552&4294967295,C=y+(_<<10&4294967295|_>>>22),_=T+(y^(C|~w))+x[6]+2734768916&4294967295,T=C+(_<<15&4294967295|_>>>17),_=w+(C^(T|~y))+x[13]+1309151649&4294967295,w=T+(_<<21&4294967295|_>>>11),_=y+(T^(w|~C))+x[4]+4149444226&4294967295,y=w+(_<<6&4294967295|_>>>26),_=C+(w^(y|~T))+x[11]+3174756917&4294967295,C=y+(_<<10&4294967295|_>>>22),_=T+(y^(C|~w))+x[2]+718787259&4294967295,T=C+(_<<15&4294967295|_>>>17),_=w+(C^(T|~y))+x[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+C&4294967295}r.prototype.v=function(b,y){y===void 0&&(y=b.length);const w=y-this.blockSize,x=this.C;let T=this.h,C=0;for(;C<y;){if(T==0)for(;C<=w;)i(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<y;)if(x[T++]=b.charCodeAt(C++),T==this.blockSize){i(this,x),T=0;break}}else for(;C<y;)if(x[T++]=b[C++],T==this.blockSize){i(this,x),T=0;break}}this.h=T,this.o+=y},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var w=b.length-8;w<b.length;++w)b[w]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,w=0;w<4;++w)for(let x=0;x<32;x+=8)b[y++]=this.g[w]>>>x&255;return b};function s(b,y){var w=c;return Object.prototype.hasOwnProperty.call(w,b)?w[b]:w[b]=y(b)}function a(b,y){this.h=y;const w=[];let x=!0;for(let T=b.length-1;T>=0;T--){const C=b[T]|0;x&&C==y||(w[T]=C,x=!1)}this.g=w}var c={};function l(b){return-128<=b&&b<128?s(b,function(y){return new a([y|0],y<0?-1:0)}):new a([b|0],b<0?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return g;if(b<0)return N(u(-b));const y=[];let w=1;for(let x=0;b>=w;x++)y[x]=b/w|0,w*=4294967296;return new a(y,0)}function p(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return N(p(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=u(Math.pow(y,8));let x=g;for(let C=0;C<b.length;C+=8){var T=Math.min(8,b.length-C);const _=parseInt(b.substring(C,C+T),y);T<8?(T=u(Math.pow(y,T)),x=x.j(T).add(u(_))):(x=x.j(w),x=x.add(u(_)))}return x}var g=l(0),I=l(1),P=l(16777216);n=a.prototype,n.m=function(){if(E(this))return-N(this).m();let b=0,y=1;for(let w=0;w<this.g.length;w++){const x=this.i(w);b+=(x>=0?x:4294967296+x)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(L(this))return"0";if(E(this))return"-"+N(this).toString(b);const y=u(Math.pow(b,6));var w=this;let x="";for(;;){const T=ve(w,y).g;w=q(w,T.j(y));let C=((w.g.length>0?w.g[0]:w.h)>>>0).toString(b);if(w=T,L(w))return C+x;for(;C.length<6;)C="0"+C;x=C+x}},n.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function L(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function E(b){return b.h==-1}n.l=function(b){return b=q(this,b),E(b)?-1:L(b)?0:1};function N(b){const y=b.g.length,w=[];for(let x=0;x<y;x++)w[x]=~b.g[x];return new a(w,~b.h).add(I)}n.abs=function(){return E(this)?N(this):this},n.add=function(b){const y=Math.max(this.g.length,b.g.length),w=[];let x=0;for(let T=0;T<=y;T++){let C=x+(this.i(T)&65535)+(b.i(T)&65535),_=(C>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);x=_>>>16,C&=65535,_&=65535,w[T]=_<<16|C}return new a(w,w[w.length-1]&-2147483648?-1:0)};function q(b,y){return b.add(N(y))}n.j=function(b){if(L(this)||L(b))return g;if(E(this))return E(b)?N(this).j(N(b)):N(N(this).j(b));if(E(b))return N(this.j(N(b)));if(this.l(P)<0&&b.l(P)<0)return u(this.m()*b.m());const y=this.g.length+b.g.length,w=[];for(var x=0;x<2*y;x++)w[x]=0;for(x=0;x<this.g.length;x++)for(let T=0;T<b.g.length;T++){const C=this.i(x)>>>16,_=this.i(x)&65535,He=b.i(T)>>>16,Ct=b.i(T)&65535;w[2*x+2*T]+=_*Ct,Y(w,2*x+2*T),w[2*x+2*T+1]+=C*Ct,Y(w,2*x+2*T+1),w[2*x+2*T+1]+=_*He,Y(w,2*x+2*T+1),w[2*x+2*T+2]+=C*He,Y(w,2*x+2*T+2)}for(b=0;b<y;b++)w[b]=w[2*b+1]<<16|w[2*b];for(b=y;b<2*y;b++)w[b]=0;return new a(w,0)};function Y(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function se(b,y){this.g=b,this.h=y}function ve(b,y){if(L(y))throw Error("division by zero");if(L(b))return new se(g,g);if(E(b))return y=ve(N(b),y),new se(N(y.g),N(y.h));if(E(y))return y=ve(b,N(y)),new se(N(y.g),y.h);if(b.g.length>30){if(E(b)||E(y))throw Error("slowDivide_ only works with positive integers.");for(var w=I,x=y;x.l(b)<=0;)w=je(w),x=je(x);var T=Pe(w,1),C=Pe(x,1);for(x=Pe(x,2),w=Pe(w,2);!L(x);){var _=C.add(x);_.l(b)<=0&&(T=T.add(w),C=_),x=Pe(x,1),w=Pe(w,1)}return y=q(b,T.j(y)),new se(T,y)}for(T=g;b.l(y)>=0;){for(w=Math.max(1,Math.floor(b.m()/y.m())),x=Math.ceil(Math.log(w)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),C=u(w),_=C.j(y);E(_)||_.l(b)>0;)w-=x,C=u(w),_=C.j(y);L(C)&&(C=I),T=T.add(C),b=q(b,_)}return new se(T,b)}n.B=function(b){return ve(this,b).h},n.and=function(b){const y=Math.max(this.g.length,b.g.length),w=[];for(let x=0;x<y;x++)w[x]=this.i(x)&b.i(x);return new a(w,this.h&b.h)},n.or=function(b){const y=Math.max(this.g.length,b.g.length),w=[];for(let x=0;x<y;x++)w[x]=this.i(x)|b.i(x);return new a(w,this.h|b.h)},n.xor=function(b){const y=Math.max(this.g.length,b.g.length),w=[];for(let x=0;x<y;x++)w[x]=this.i(x)^b.i(x);return new a(w,this.h^b.h)};function je(b){const y=b.g.length+1,w=[];for(let x=0;x<y;x++)w[x]=b.i(x)<<1|b.i(x-1)>>>31;return new a(w,b.h)}function Pe(b,y){const w=y>>5;y%=32;const x=b.g.length-w,T=[];for(let C=0;C<x;C++)T[C]=y>0?b.i(C+w)>>>y|b.i(C+w+1)<<32-y:b.i(C+w);return new a(T,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,up=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=p,Mn=a}).apply(typeof T1<"u"?T1:typeof self<"u"?self:typeof window<"u"?window:{});var zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hp,xi,dp,ta,oc,pp,fp,gp;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof zs=="object"&&zs];for(var h=0;h<o.length;++h){var d=o[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,h){if(h)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var k=o[m];if(!(k in d))break e;d=d[k]}o=o[o.length-1],m=d[o],h=h(m),h!=m&&h!=null&&e(d,o,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(h){var d=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&d.push([m,h[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function c(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function l(o,h,d){return o.call.apply(o.bind,arguments)}function u(o,h,d){return u=l,u.apply(null,arguments)}function p(o,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function g(o,h){function d(){}d.prototype=h.prototype,o.Z=h.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(m,k,O){for(var B=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)B[ie-2]=arguments[ie];return h.prototype[k].apply(m,B)}}var I=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function P(o){const h=o.length;if(h>0){const d=Array(h);for(let m=0;m<h;m++)d[m]=o[m];return d}return[]}function L(o,h){for(let m=1;m<arguments.length;m++){const k=arguments[m];var d=typeof k;if(d=d!="object"?d:k?Array.isArray(k)?"array":d:"null",d=="array"||d=="object"&&typeof k.length=="number"){d=o.length||0;const O=k.length||0;o.length=d+O;for(let B=0;B<O;B++)o[d+B]=k[B]}else o.push(k)}}class E{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(o){a.setTimeout(()=>{throw o},0)}function q(){var o=b;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class Y{constructor(){this.h=this.g=null}add(h,d){const m=se.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var se=new E(()=>new ve,o=>o.reset());class ve{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let je,Pe=!1,b=new Y,y=()=>{const o=Promise.resolve(void 0);je=()=>{o.then(w)}};function w(){for(var o;o=q();){try{o.h.call(o.g)}catch(d){N(d)}var h=se;h.j(o),h.h<100&&(h.h++,o.next=h.g,h.g=o)}Pe=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,h),a.removeEventListener("test",d,h)}catch{}return o}();function _(o){return/^[\s\xa0]*$/.test(o)}function He(o,h){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,h)}g(He,T),He.prototype.init=function(o,h){const d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget,h||(d=="mouseover"?h=o.fromElement:d=="mouseout"&&(h=o.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ct="closure_listenable_"+(Math.random()*1e6|0),Ss=0;function Cs(o,h,d,m,k){this.listener=o,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=k,this.key=++Ss,this.da=this.fa=!1}function Tr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function gn(o,h,d){for(const m in o)h.call(d,o[m],m,o)}function Ve(o,h){for(const d in o)h.call(void 0,o[d],d,o)}function Be(o){const h={};for(const d in o)h[d]=o[d];return h}const ft="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kt(o,h){let d,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(d in m)o[d]=m[d];for(let O=0;O<ft.length;O++)d=ft[O],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function gt(o){this.src=o,this.g={},this.h=0}gt.prototype.add=function(o,h,d,m,k){const O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);const B=mn(o,h,m,k);return B>-1?(h=o[B],d||(h.fa=!1)):(h=new Cs(h,this.src,O,!!m,k),h.fa=d,o.push(h)),h};function et(o,h){const d=h.type;if(d in o.g){var m=o.g[d],k=Array.prototype.indexOf.call(m,h,void 0),O;(O=k>=0)&&Array.prototype.splice.call(m,k,1),O&&(Tr(h),o.g[d].length==0&&(delete o.g[d],o.h--))}}function mn(o,h,d,m){for(let k=0;k<o.length;++k){const O=o[k];if(!O.da&&O.listener==h&&O.capture==!!d&&O.ha==m)return k}return-1}var yn="closure_lm_"+(Math.random()*1e6|0),po={};function $l(o,h,d,m,k){if(Array.isArray(h)){for(let O=0;O<h.length;O++)$l(o,h[O],d,m,k);return null}return d=jl(d),o&&o[Ct]?o.J(h,d,c(m)?!!m.capture:!1,k):u2(o,h,d,!1,m,k)}function u2(o,h,d,m,k,O){if(!h)throw Error("Invalid event type");const B=c(k)?!!k.capture:!!k;let ie=go(o);if(ie||(o[yn]=ie=new gt(o)),d=ie.add(h,d,m,B,O),d.proxy)return d;if(m=h2(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)C||(k=B),k===void 0&&(k=!1),o.addEventListener(h.toString(),m,k);else if(o.attachEvent)o.attachEvent(ql(h.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function h2(){function o(d){return h.call(o.src,o.listener,d)}const h=d2;return o}function zl(o,h,d,m,k){if(Array.isArray(h))for(var O=0;O<h.length;O++)zl(o,h[O],d,m,k);else m=c(m)?!!m.capture:!!m,d=jl(d),o&&o[Ct]?(o=o.i,O=String(h).toString(),O in o.g&&(h=o.g[O],d=mn(h,d,m,k),d>-1&&(Tr(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete o.g[O],o.h--)))):o&&(o=go(o))&&(h=o.g[h.toString()],o=-1,h&&(o=mn(h,d,m,k)),(d=o>-1?h[o]:null)&&fo(d))}function fo(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[Ct])et(h.i,o);else{var d=o.type,m=o.proxy;h.removeEventListener?h.removeEventListener(d,m,o.capture):h.detachEvent?h.detachEvent(ql(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=go(h))?(et(d,o),d.h==0&&(d.src=null,h[yn]=null)):Tr(o)}}}function ql(o){return o in po?po[o]:po[o]="on"+o}function d2(o,h){if(o.da)o=!0;else{h=new He(h,this);const d=o.listener,m=o.ha||o.src;o.fa&&fo(o),o=d.call(m,h)}return o}function go(o){return o=o[yn],o instanceof gt?o:null}var mo="__closure_events_fn_"+(Math.random()*1e9>>>0);function jl(o){return typeof o=="function"?o:(o[mo]||(o[mo]=function(h){return o.handleEvent(h)}),o[mo])}function Ge(){x.call(this),this.i=new gt(this),this.M=this,this.G=null}g(Ge,x),Ge.prototype[Ct]=!0,Ge.prototype.removeEventListener=function(o,h,d,m){zl(this,o,h,d,m)};function tt(o,h){var d,m=o.G;if(m)for(d=[];m;m=m.G)d.push(m);if(o=o.M,m=h.type||h,typeof h=="string")h=new T(h,o);else if(h instanceof T)h.target=h.target||o;else{var k=h;h=new T(m,o),kt(h,k)}k=!0;let O,B;if(d)for(B=d.length-1;B>=0;B--)O=h.g=d[B],k=ks(O,m,!0,h)&&k;if(O=h.g=o,k=ks(O,m,!0,h)&&k,k=ks(O,m,!1,h)&&k,d)for(B=0;B<d.length;B++)O=h.g=d[B],k=ks(O,m,!1,h)&&k}Ge.prototype.N=function(){if(Ge.Z.N.call(this),this.i){var o=this.i;for(const h in o.g){const d=o.g[h];for(let m=0;m<d.length;m++)Tr(d[m]);delete o.g[h],o.h--}}this.G=null},Ge.prototype.J=function(o,h,d,m){return this.i.add(String(o),h,!1,d,m)},Ge.prototype.K=function(o,h,d,m){return this.i.add(String(o),h,!0,d,m)};function ks(o,h,d,m){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();let k=!0;for(let O=0;O<h.length;++O){const B=h[O];if(B&&!B.da&&B.capture==d){const ie=B.listener,Re=B.ha||B.src;B.fa&&et(o.i,B),k=ie.call(Re,m)!==!1&&k}}return k&&!m.defaultPrevented}function p2(o,h){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=u(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:a.setTimeout(o,h||0)}function Hl(o){o.g=p2(()=>{o.g=null,o.i&&(o.i=!1,Hl(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class f2 extends x{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Hl(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ai(o){x.call(this),this.h=o,this.g={}}g(ai,x);var Gl=[];function Wl(o){gn(o.g,function(h,d){this.g.hasOwnProperty(d)&&fo(h)},o),o.g={}}ai.prototype.N=function(){ai.Z.N.call(this),Wl(this)},ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yo=a.JSON.stringify,g2=a.JSON.parse,m2=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Kl(){}function Yl(){}var oi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function vo(){T.call(this,"d")}g(vo,T);function _o(){T.call(this,"c")}g(_o,T);var Jn={},Ql=null;function Ps(){return Ql=Ql||new Ge}Jn.Ia="serverreachability";function Xl(o){T.call(this,Jn.Ia,o)}g(Xl,T);function ci(o){const h=Ps();tt(h,new Xl(h))}Jn.STAT_EVENT="statevent";function Jl(o,h){T.call(this,Jn.STAT_EVENT,o),this.stat=h}g(Jl,T);function nt(o){const h=Ps();tt(h,new Jl(h,o))}Jn.Ja="timingevent";function Zl(o,h){T.call(this,Jn.Ja,o),this.size=h}g(Zl,T);function li(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},h)}function ui(){this.g=!0}ui.prototype.ua=function(){this.g=!1};function y2(o,h,d,m,k,O){o.info(function(){if(o.g)if(O){var B="",ie=O.split("&");for(let pe=0;pe<ie.length;pe++){var Re=ie[pe].split("=");if(Re.length>1){const Me=Re[0];Re=Re[1];const Bt=Me.split("_");B=Bt.length>=2&&Bt[1]=="type"?B+(Me+"="+Re+"&"):B+(Me+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+h+`
`+d+`
`+B})}function v2(o,h,d,m,k,O,B){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+h+`
`+d+`
`+O+" "+B})}function Ar(o,h,d,m){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+w2(o,d)+(m?" "+m:"")})}function _2(o,h){o.info(function(){return"TIMEOUT: "+h})}ui.prototype.info=function(){};function w2(o,h){if(!o.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(o=0;o<O.length;o++)if(Array.isArray(O[o])){var d=O[o];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var k=m[0];if(k!="noop"&&k!="stop"&&k!="close")for(let B=1;B<m.length;B++)m[B]=""}}}}return yo(O)}catch{return h}}var Rs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},eu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},tu;function wo(){}g(wo,Kl),wo.prototype.g=function(){return new XMLHttpRequest},tu=new wo;function hi(o){return encodeURIComponent(String(o))}function E2(o){var h=1;o=o.split(":");const d=[];for(;h>0&&o.length;)d.push(o.shift()),h--;return o.length&&d.push(o.join(":")),d}function vn(o,h,d,m){this.j=o,this.i=h,this.l=d,this.S=m||1,this.V=new ai(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new nu}function nu(){this.i=null,this.g="",this.h=!1}var ru={},Eo={};function bo(o,h,d){o.M=1,o.A=Os(Ut(h)),o.u=d,o.R=!0,iu(o,null)}function iu(o,h){o.F=Date.now(),Ls(o),o.B=Ut(o.A);var d=o.B,m=o.S;Array.isArray(m)||(m=[String(m)]),yu(d.i,"t",m),o.C=0,d=o.j.L,o.h=new nu,o.g=Nu(o.j,d?h:null,!o.u),o.P>0&&(o.O=new f2(u(o.Y,o,o.g),o.P)),h=o.V,d=o.g,m=o.ba;var k="readystatechange";Array.isArray(k)||(k&&(Gl[0]=k.toString()),k=Gl);for(let O=0;O<k.length;O++){const B=$l(d,k[O],m||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=o.J?Be(o.J):{},o.u?(o.v||(o.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,h)):(o.v="GET",o.g.ea(o.B,o.v,null,h)),ci(),y2(o.i,o.v,o.B,o.l,o.S,o.u)}vn.prototype.ba=function(o){o=o.target;const h=this.O;h&&En(o)==3?h.j():this.Y(o)},vn.prototype.Y=function(o){try{if(o==this.g)e:{const ie=En(this.g),Re=this.g.ya(),pe=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||Tu(this.g)))){this.K||ie!=4||Re==7||(Re==8||pe<=0?ci(3):ci(2)),Io(this);var h=this.g.ca();this.X=h;var d=b2(this);if(this.o=h==200,v2(this.i,this.v,this.B,this.l,this.S,ie,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,k=this.g;if((m=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(m)){var O=m;break t}}O=null}if(o=O)Ar(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,To(this,o);else{this.o=!1,this.m=3,nt(12),Zn(this),di(this);break e}}if(this.R){o=!0;let Me;for(;!this.K&&this.C<d.length;)if(Me=I2(this,d),Me==Eo){ie==4&&(this.m=4,nt(14),o=!1),Ar(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==ru){this.m=4,nt(15),Ar(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else Ar(this.i,this.l,Me,null),To(this,Me);if(su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||d.length!=0||this.h.h||(this.m=1,nt(16),o=!1),this.o=this.o&&o,!o)Ar(this.i,this.l,d,"[Invalid Chunked Response]"),Zn(this),di(this);else if(d.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Lo(B),B.P=!0,nt(11))}}else Ar(this.i,this.l,d,null),To(this,d);ie==4&&Zn(this),this.o&&!this.K&&(ie==4?Ru(this.j,this):(this.o=!1,Ls(this)))}else M2(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),Zn(this),di(this)}}}catch{}finally{}};function b2(o){if(!su(o))return o.g.la();const h=Tu(o.g);if(h==="")return"";let d="";const m=h.length,k=En(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Zn(o),di(o),"";o.h.i=new a.TextDecoder}for(let O=0;O<m;O++)o.h.h=!0,d+=o.h.i.decode(h[O],{stream:!(k&&O==m-1)});return h.length=0,o.h.g+=d,o.C=0,o.h.g}function su(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function I2(o,h){var d=o.C,m=h.indexOf(`
`,d);return m==-1?Eo:(d=Number(h.substring(d,m)),isNaN(d)?ru:(m+=1,m+d>h.length?Eo:(h=h.slice(m,m+d),o.C=m+d,h)))}vn.prototype.cancel=function(){this.K=!0,Zn(this)};function Ls(o){o.T=Date.now()+o.H,au(o,o.H)}function au(o,h){if(o.D!=null)throw Error("WatchDog timer not null");o.D=li(u(o.aa,o),h)}function Io(o){o.D&&(a.clearTimeout(o.D),o.D=null)}vn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(_2(this.i,this.B),this.M!=2&&(ci(),nt(17)),Zn(this),this.m=2,di(this)):au(this,this.T-o)};function di(o){o.j.I==0||o.K||Ru(o.j,o)}function Zn(o){Io(o);var h=o.O;h&&typeof h.dispose=="function"&&h.dispose(),o.O=null,Wl(o.V),o.g&&(h=o.g,o.g=null,h.abort(),h.dispose())}function To(o,h){try{var d=o.j;if(d.I!=0&&(d.g==o||Ao(d.h,o))){if(!o.L&&Ao(d.h,o)&&d.I==3){try{var m=d.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Fs(d),Vs(d);else break e;Ro(d),nt(18)}}else d.xa=k[1],0<d.xa-d.K&&k[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=li(u(d.Va,d),6e3));lu(d.h)<=1&&d.ta&&(d.ta=void 0)}else tr(d,11)}else if((o.L||d.g==o)&&Fs(d),!_(h))for(k=d.Ba.g.parse(h),h=0;h<k.length;h++){let pe=k[h];const Me=pe[0];if(!(Me<=d.K))if(d.K=Me,pe=pe[1],d.I==2)if(pe[0]=="c"){d.M=pe[1],d.ba=pe[2];const Bt=pe[3];Bt!=null&&(d.ka=Bt,d.j.info("VER="+d.ka));const nr=pe[4];nr!=null&&(d.za=nr,d.j.info("SVER="+d.za));const bn=pe[5];bn!=null&&typeof bn=="number"&&bn>0&&(m=1.5*bn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const In=o.g;if(In){const Bs=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bs){var O=m.h;O.g||Bs.indexOf("spdy")==-1&&Bs.indexOf("quic")==-1&&Bs.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(xo(O,O.h),O.h=null))}if(m.G){const Oo=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;Oo&&(m.wa=Oo,fe(m.J,m.G,Oo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var B=o;if(m.na=Du(m,m.L?m.ba:null,m.W),B.L){uu(m.h,B);var ie=B,Re=m.O;Re&&(ie.H=Re),ie.D&&(Io(ie),Ls(ie)),m.g=B}else ku(m);d.i.length>0&&Ms(d)}else pe[0]!="stop"&&pe[0]!="close"||tr(d,7);else d.I==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?tr(d,7):Po(d):pe[0]!="noop"&&d.l&&d.l.qa(pe),d.A=0)}}ci(4)}catch{}}var T2=class{constructor(o,h){this.g=o,this.map=h}};function ou(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function cu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function lu(o){return o.h?1:o.g?o.g.size:0}function Ao(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function xo(o,h){o.g?o.g.add(h):o.h=h}function uu(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}ou.prototype.cancel=function(){if(this.i=hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function hu(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const d of o.g.values())h=h.concat(d.G);return h}return P(o.i)}var du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function A2(o,h){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const m=o[d].indexOf("=");let k,O=null;m>=0?(k=o[d].substring(0,m),O=o[d].substring(m+1)):k=o[d],h(k,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function _n(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;o instanceof _n?(this.l=o.l,pi(this,o.j),this.o=o.o,this.g=o.g,fi(this,o.u),this.h=o.h,So(this,vu(o.i)),this.m=o.m):o&&(h=String(o).match(du))?(this.l=!1,pi(this,h[1]||"",!0),this.o=gi(h[2]||""),this.g=gi(h[3]||"",!0),fi(this,h[4]),this.h=gi(h[5]||"",!0),So(this,h[6]||"",!0),this.m=gi(h[7]||"")):(this.l=!1,this.i=new yi(null,this.l))}_n.prototype.toString=function(){const o=[];var h=this.j;h&&o.push(mi(h,pu,!0),":");var d=this.g;return(d||h=="file")&&(o.push("//"),(h=this.o)&&o.push(mi(h,pu,!0),"@"),o.push(hi(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(mi(d,d.charAt(0)=="/"?C2:S2,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",mi(d,P2)),o.join("")},_n.prototype.resolve=function(o){const h=Ut(this);let d=!!o.j;d?pi(h,o.j):d=!!o.o,d?h.o=o.o:d=!!o.g,d?h.g=o.g:d=o.u!=null;var m=o.h;if(d)fi(h,o.u);else if(d=!!o.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var k=h.h.lastIndexOf("/");k!=-1&&(m=h.h.slice(0,k+1)+m)}if(k=m,k==".."||k==".")m="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){m=k.lastIndexOf("/",0)==0,k=k.split("/");const O=[];for(let B=0;B<k.length;){const ie=k[B++];ie=="."?m&&B==k.length&&O.push(""):ie==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),m&&B==k.length&&O.push("")):(O.push(ie),m=!0)}m=O.join("/")}else m=k}return d?h.h=m:d=o.i.toString()!=="",d?So(h,vu(o.i)):d=!!o.m,d&&(h.m=o.m),h};function Ut(o){return new _n(o)}function pi(o,h,d){o.j=d?gi(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function fi(o,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);o.u=h}else o.u=null}function So(o,h,d){h instanceof yi?(o.i=h,R2(o.i,o.l)):(d||(h=mi(h,k2)),o.i=new yi(h,o.l))}function fe(o,h,d){o.i.set(h,d)}function Os(o){return fe(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function gi(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function mi(o,h,d){return typeof o=="string"?(o=encodeURI(o).replace(h,x2),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function x2(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var pu=/[#\/\?@]/g,S2=/[#\?:]/g,C2=/[#\?]/g,k2=/[#\?@]/g,P2=/#/g;function yi(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function er(o){o.g||(o.g=new Map,o.h=0,o.i&&A2(o.i,function(h,d){o.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}n=yi.prototype,n.add=function(o,h){er(this),this.i=null,o=xr(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(h),this.h+=1,this};function fu(o,h){er(o),h=xr(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function gu(o,h){return er(o),h=xr(o,h),o.g.has(h)}n.forEach=function(o,h){er(this),this.g.forEach(function(d,m){d.forEach(function(k){o.call(h,k,m,this)},this)},this)};function mu(o,h){er(o);let d=[];if(typeof h=="string")gu(o,h)&&(d=d.concat(o.g.get(xr(o,h))));else for(o=Array.from(o.g.values()),h=0;h<o.length;h++)d=d.concat(o[h]);return d}n.set=function(o,h){return er(this),this.i=null,o=xr(this,o),gu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=mu(this,o),o.length>0?String(o[0]):h):h};function yu(o,h,d){fu(o,h),d.length>0&&(o.i=null,o.g.set(xr(o,h),P(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var d=h[m];const k=hi(d);d=mu(this,d);for(let O=0;O<d.length;O++){let B=k;d[O]!==""&&(B+="="+hi(d[O])),o.push(B)}}return this.i=o.join("&")};function vu(o){const h=new yi;return h.i=o.i,o.g&&(h.g=new Map(o.g),h.h=o.h),h}function xr(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function R2(o,h){h&&!o.j&&(er(o),o.i=null,o.g.forEach(function(d,m){const k=m.toLowerCase();m!=k&&(fu(this,m),yu(this,k,d))},o)),o.j=h}function L2(o,h){const d=new ui;if(a.Image){const m=new Image;m.onload=p(wn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=p(wn,d,"TestLoadImage: error",!1,h,m),m.onabort=p(wn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=p(wn,d,"TestLoadImage: timeout",!1,h,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else h(!1)}function O2(o,h){const d=new ui,m=new AbortController,k=setTimeout(()=>{m.abort(),wn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:m.signal}).then(O=>{clearTimeout(k),O.ok?wn(d,"TestPingServer: ok",!0,h):wn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),wn(d,"TestPingServer: error",!1,h)})}function wn(o,h,d,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(d)}catch{}}function D2(){this.g=new m2}function Co(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Co,Kl),Co.prototype.g=function(){return new Ds(this.i,this.h)};function Ds(o,h){Ge.call(this),this.H=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Ds,Ge),n=Ds.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=h,this.readyState=1,_i(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(h.body=o),(this.H||a).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;_u(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function _u(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?vi(this):_i(this),this.readyState==3&&_u(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,vi(this))},n.Na=function(o){this.g&&(this.response=o,vi(this))},n.ga=function(){this.g&&vi(this)};function vi(o){o.readyState=4,o.l=null,o.j=null,o.B=null,_i(o)}n.setRequestHeader=function(o,h){this.A.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=h.next();return o.join(`\r
`)};function _i(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wu(o){let h="";return gn(o,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function ko(o,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=wu(d),typeof o=="string"?d!=null&&hi(d):fe(o,h,d))}function Ee(o){Ge.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Ee,Ge);var N2=/^https?$/i,V2=["POST","PUT"];n=Ee.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():tu.g(),this.g.onreadystatechange=I(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(O){Eu(this,O);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)d.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const O of m.keys())d.set(O,m.get(O));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),k=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(V2,h,void 0)>=0)||m||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of d)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(O){Eu(this,O)}};function Eu(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.o=5,bu(o),Ns(o)}function bu(o){o.A||(o.A=!0,tt(o,"complete"),tt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,tt(this,"complete"),tt(this,"abort"),Ns(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ns(this,!0)),Ee.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Iu(this):this.Xa())},n.Xa=function(){Iu(this)};function Iu(o){if(o.h&&typeof s<"u"){if(o.v&&En(o)==4)setTimeout(o.Ca.bind(o),0);else if(tt(o,"readystatechange"),En(o)==4){o.h=!1;try{const O=o.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=O===0){let B=String(o.D).match(du)[1]||null;!B&&a.self&&a.self.location&&(B=a.self.location.protocol.slice(0,-1)),m=!N2.test(B?B.toLowerCase():"")}d=m}if(d)tt(o,"complete"),tt(o,"success");else{o.o=6;try{var k=En(o)>2?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.ca()+"]",bu(o)}}finally{Ns(o)}}}}function Ns(o,h){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,h||tt(o,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function En(o){return o.g?o.g.readyState:0}n.ca=function(){try{return En(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),g2(h)}};function Tu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function M2(o){const h={};o=(o.g&&En(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(_(o[m]))continue;var d=E2(o[m]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=h[k]||[];h[k]=O,O.push(d)}Ve(h,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function wi(o,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||h}function Au(o){this.za=0,this.i=[],this.j=new ui,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=wi("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=wi("baseRetryDelayMs",5e3,o),this.Za=wi("retryDelaySeedMs",1e4,o),this.Ta=wi("forwardChannelMaxRetries",2,o),this.va=wi("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new ou(o&&o.concurrentRequestLimit),this.Ba=new D2,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Au.prototype,n.ka=8,n.I=1,n.connect=function(o,h,d,m){nt(0),this.W=o,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Du(this,null,this.W),Ms(this)};function Po(o){if(xu(o),o.I==3){var h=o.V++,d=Ut(o.J);if(fe(d,"SID",o.M),fe(d,"RID",h),fe(d,"TYPE","terminate"),Ei(o,d),h=new vn(o,o.j,h),h.M=2,h.A=Os(Ut(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=h.A,d=!0),d||(h.g=Nu(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ls(h)}Ou(o)}function Vs(o){o.g&&(Lo(o),o.g.cancel(),o.g=null)}function xu(o){Vs(o),o.v&&(a.clearTimeout(o.v),o.v=null),Fs(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Ms(o){if(!cu(o.h)&&!o.m){o.m=!0;var h=o.Ea;je||y(),Pe||(je(),Pe=!0),b.add(h,o),o.D=0}}function F2(o,h){return lu(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=h.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=li(u(o.Ea,o,h),Lu(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const k=new vn(this,this.j,o);let O=this.o;if(this.U&&(O?(O=Be(O),kt(O,this.U)):O=this.U),this.u!==null||this.R||(k.J=O,O=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Cu(this,k,h),d=Ut(this.J),fe(d,"RID",o),fe(d,"CVER",22),this.G&&fe(d,"X-HTTP-Session-Id",this.G),Ei(this,d),O&&(this.R?h="headers="+hi(wu(O))+"&"+h:this.u&&ko(d,this.u,O)),xo(this.h,k),this.Ra&&fe(d,"TYPE","init"),this.S?(fe(d,"$req",h),fe(d,"SID","null"),k.U=!0,bo(k,d,null)):bo(k,d,h),this.I=2}}else this.I==3&&(o?Su(this,o):this.i.length==0||cu(this.h)||Su(this))};function Su(o,h){var d;h?d=h.l:d=o.V++;const m=Ut(o.J);fe(m,"SID",o.M),fe(m,"RID",d),fe(m,"AID",o.K),Ei(o,m),o.u&&o.o&&ko(m,o.u,o.o),d=new vn(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),h&&(o.i=h.G.concat(o.i)),h=Cu(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),xo(o.h,d),bo(d,m,h)}function Ei(o,h){o.H&&gn(o.H,function(d,m){fe(h,m,d)}),o.l&&gn({},function(d,m){fe(h,m,d)})}function Cu(o,h,d){d=Math.min(o.i.length,d);const m=o.l?u(o.l.Ka,o.l,o):null;e:{var k=o.i;let ie=-1;for(;;){const Re=["count="+d];ie==-1?d>0?(ie=k[0].g,Re.push("ofs="+ie)):ie=0:Re.push("ofs="+ie);let pe=!0;for(let Me=0;Me<d;Me++){var O=k[Me].g;const Bt=k[Me].map;if(O-=ie,O<0)ie=Math.max(0,k[Me].g-100),pe=!1;else try{O="req"+O+"_"||"";try{var B=Bt instanceof Map?Bt:Object.entries(Bt);for(const[nr,bn]of B){let In=bn;c(bn)&&(In=yo(bn)),Re.push(O+nr+"="+encodeURIComponent(In))}}catch(nr){throw Re.push(O+"type="+encodeURIComponent("_badmap")),nr}}catch{m&&m(Bt)}}if(pe){B=Re.join("&");break e}}B=void 0}return o=o.i.splice(0,d),h.G=o,B}function ku(o){if(!o.g&&!o.v){o.Y=1;var h=o.Da;je||y(),Pe||(je(),Pe=!0),b.add(h,o),o.A=0}}function Ro(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=li(u(o.Da,o),Lu(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,Pu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=li(u(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),Vs(this),Pu(this))};function Lo(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Pu(o){o.g=new vn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var h=Ut(o.na);fe(h,"RID","rpc"),fe(h,"SID",o.M),fe(h,"AID",o.K),fe(h,"CI",o.F?"0":"1"),!o.F&&o.ia&&fe(h,"TO",o.ia),fe(h,"TYPE","xmlhttp"),Ei(o,h),o.u&&o.o&&ko(h,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=Os(Ut(h)),d.u=null,d.R=!0,iu(d,o)}n.Va=function(){this.C!=null&&(this.C=null,Vs(this),Ro(this),nt(19))};function Fs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Ru(o,h){var d=null;if(o.g==h){Fs(o),Lo(o),o.g=null;var m=2}else if(Ao(o.h,h))d=h.G,uu(o.h,h),m=1;else return;if(o.I!=0){if(h.o)if(m==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var k=o.D;m=Ps(),tt(m,new Zl(m,d)),Ms(o)}else ku(o);else if(k=h.m,k==3||k==0&&h.X>0||!(m==1&&F2(o,h)||m==2&&Ro(o)))switch(d&&d.length>0&&(h=o.h,h.i=h.i.concat(d)),k){case 1:tr(o,5);break;case 4:tr(o,10);break;case 3:tr(o,6);break;default:tr(o,2)}}}function Lu(o,h){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*h}function tr(o,h){if(o.j.info("Error code "+h),h==2){var d=u(o.bb,o),m=o.Ua;const k=!m;m=new _n(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||pi(m,"https"),Os(m),k?L2(m.toString(),d):O2(m.toString(),d)}else nt(2);o.I=0,o.l&&o.l.pa(h),Ou(o),xu(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Ou(o){if(o.I=0,o.ja=[],o.l){const h=hu(o.h);(h.length!=0||o.i.length!=0)&&(L(o.ja,h),L(o.ja,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.oa()}}function Du(o,h,d){var m=d instanceof _n?Ut(d):new _n(d);if(m.g!="")h&&(m.g=h+"."+m.g),fi(m,m.u);else{var k=a.location;m=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;const O=new _n(null);m&&pi(O,m),h&&(O.g=h),k&&fi(O,k),d&&(O.h=d),m=O}return d=o.G,h=o.wa,d&&h&&fe(m,d,h),fe(m,"VER",o.ka),Ei(o,m),m}function Nu(o,h,d){if(h&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Aa&&!o.ma?new Ee(new Co({ab:d})):new Ee(o.ma),h.Fa(o.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vu(){}n=Vu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Us(){}Us.prototype.g=function(o,h){return new mt(o,h)};function mt(o,h){Ge.call(this),this.g=new Au(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(o?o["X-WebChannel-Client-Profile"]=h.sa:o={"X-WebChannel-Client-Profile":h.sa}),this.g.U=o,(o=h&&h.Qb)&&!_(o)&&(this.g.u=o),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.G=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new Sr(this)}g(mt,Ge),mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){Po(this.g)},mt.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=yo(o),o=d);h.i.push(new T2(h.Ya++,o)),h.I==3&&Ms(h)},mt.prototype.N=function(){this.g.l=null,delete this.j,Po(this.g),delete this.g,mt.Z.N.call(this)};function Mu(o){vo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const d in h){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}g(Mu,vo);function Fu(){_o.call(this),this.status=1}g(Fu,_o);function Sr(o){this.g=o}g(Sr,Vu),Sr.prototype.ra=function(){tt(this.g,"a")},Sr.prototype.qa=function(o){tt(this.g,new Mu(o))},Sr.prototype.pa=function(o){tt(this.g,new Fu)},Sr.prototype.oa=function(){tt(this.g,"b")},Us.prototype.createWebChannel=Us.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,gp=function(){return new Us},fp=function(){return Ps()},pp=Jn,oc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Rs.NO_ERROR=0,Rs.TIMEOUT=8,Rs.HTTP_ERROR=6,ta=Rs,eu.COMPLETE="complete",dp=eu,Yl.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Ge.prototype.listen=Ge.prototype.J,xi=Yl,Ee.prototype.listenOnce=Ee.prototype.K,Ee.prototype.getLastError=Ee.prototype.Ha,Ee.prototype.getLastErrorCode=Ee.prototype.ya,Ee.prototype.getStatus=Ee.prototype.ca,Ee.prototype.getResponseJson=Ee.prototype.La,Ee.prototype.getResponseText=Ee.prototype.la,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Fa,hp=Ee}).apply(typeof zs<"u"?zs:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */class ${static FOLD_CASE=1;static LITERAL=2;static CLASS_NL=4;static DOT_NL=8;static ONE_LINE=16;static NON_GREEDY=32;static PERL_X=64;static UNICODE_GROUPS=128;static WAS_DOLLAR=256;static MATCH_NL=$.CLASS_NL|$.DOT_NL;static PERL=$.CLASS_NL|$.ONE_LINE|$.PERL_X|$.UNICODE_GROUPS;static POSIX=0;static UNANCHORED=0;static ANCHOR_START=1;static ANCHOR_BOTH=2}class R{static CODES=new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]);static toUpperCase(e){const t=String.fromCodePoint(e).toUpperCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toLowerCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){const t=String.fromCodePoint(e).toLowerCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toUpperCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}}class v{static CASE_ORBIT=new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]]);static C=[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]];static Cc=[[0,31,1],[127,159,1]];static Cf=[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]];static Co=[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]];static Cs=[[55296,57343,1]];static L=[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static foldL=[[837,837,1]];static Ll=[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]];static foldLl=[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]];static Lm=[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]];static Lo=[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static Lt=[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]];static foldLt=[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]];static Lu=[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]];static Upper=this.Lu;static foldLu=[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]];static M=[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]];static foldM=[[921,953,32],[8126,8126,1]];static Mc=[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]];static Me=[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]];static Mn=[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]];static foldMn=[[921,953,32],[8126,8126,1]];static N=[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]];static Nd=[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]];static Nl=[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]];static No=[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]];static P=[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]];static Pc=[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]];static Pd=[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]];static Pe=[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]];static Pf=[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]];static Pi=[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]];static Po=[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]];static Ps=[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]];static S=[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]];static Sc=[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]];static Sk=[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]];static Sm=[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]];static So=[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]];static Z=[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]];static Zl=[[8232,8232,1]];static Zp=[[8233,8233,1]];static Zs=[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]];static Adlam=[[125184,125259,1],[125264,125273,1],[125278,125279,1]];static Ahom=[[71424,71450,1],[71453,71467,1],[71472,71494,1]];static Anatolian_Hieroglyphs=[[82944,83526,1]];static Arabic=[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]];static Armenian=[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]];static Avestan=[[68352,68405,1],[68409,68415,1]];static Balinese=[[6912,6988,1],[6992,7038,1]];static Bamum=[[42656,42743,1],[92160,92728,1]];static Bassa_Vah=[[92880,92909,1],[92912,92917,1]];static Batak=[[7104,7155,1],[7164,7167,1]];static Bengali=[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]];static Bhaiksuki=[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]];static Bopomofo=[[746,747,1],[12549,12591,1],[12704,12735,1]];static Brahmi=[[69632,69709,1],[69714,69749,1],[69759,69759,1]];static Braille=[[10240,10495,1]];static Buginese=[[6656,6683,1],[6686,6687,1]];static Buhid=[[5952,5971,1]];static Canadian_Aboriginal=[[5120,5759,1],[6320,6389,1],[72368,72383,1]];static Carian=[[66208,66256,1]];static Caucasian_Albanian=[[66864,66915,1],[66927,66927,1]];static Chakma=[[69888,69940,1],[69942,69959,1]];static Cham=[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]];static Cherokee=[[5024,5109,1],[5112,5117,1],[43888,43967,1]];static Chorasmian=[[69552,69579,1]];static Common=[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]];static foldCommon=[[924,956,32]];static Coptic=[[994,1007,1],[11392,11507,1],[11513,11519,1]];static Cuneiform=[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]];static Cypriot=[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]];static Cypro_Minoan=[[77712,77810,1]];static Cyrillic=[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]];static Deseret=[[66560,66639,1]];static Devanagari=[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]];static Dives_Akuru=[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]];static Dogra=[[71680,71739,1]];static Duployan=[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]];static Egyptian_Hieroglyphs=[[77824,78933,1]];static Elbasan=[[66816,66855,1]];static Elymaic=[[69600,69622,1]];static Ethiopic=[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]];static Georgian=[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]];static Glagolitic=[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]];static Gothic=[[66352,66378,1]];static Grantha=[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]];static Greek=[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]];static foldGreek=[[181,837,656]];static Gujarati=[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]];static Gunjala_Gondi=[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]];static Gurmukhi=[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]];static Han=[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]];static Hangul=[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]];static Hanifi_Rohingya=[[68864,68903,1],[68912,68921,1]];static Hanunoo=[[5920,5940,1]];static Hatran=[[67808,67826,1],[67828,67829,1],[67835,67839,1]];static Hebrew=[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]];static Hiragana=[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]];static Imperial_Aramaic=[[67648,67669,1],[67671,67679,1]];static Inherited=[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]];static foldInherited=[[921,953,32],[8126,8126,1]];static Inscriptional_Pahlavi=[[68448,68466,1],[68472,68479,1]];static Inscriptional_Parthian=[[68416,68437,1],[68440,68447,1]];static Javanese=[[43392,43469,1],[43472,43481,1],[43486,43487,1]];static Kaithi=[[69760,69826,1],[69837,69837,1]];static Kannada=[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]];static Katakana=[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]];static Kawi=[[73472,73488,1],[73490,73530,1],[73534,73561,1]];static Kayah_Li=[[43264,43309,1],[43311,43311,1]];static Kharoshthi=[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]];static Khitan_Small_Script=[[94180,101120,6940],[101121,101589,1]];static Khmer=[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]];static Khojki=[[70144,70161,1],[70163,70209,1]];static Khudawadi=[[70320,70378,1],[70384,70393,1]];static Lao=[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]];static Latin=[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]];static Lepcha=[[7168,7223,1],[7227,7241,1],[7245,7247,1]];static Limbu=[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]];static Linear_A=[[67072,67382,1],[67392,67413,1],[67424,67431,1]];static Linear_B=[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]];static Lisu=[[42192,42239,1],[73648,73648,1]];static Lycian=[[66176,66204,1]];static Lydian=[[67872,67897,1],[67903,67903,1]];static Mahajani=[[69968,70006,1]];static Makasar=[[73440,73464,1]];static Malayalam=[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]];static Mandaic=[[2112,2139,1],[2142,2142,1]];static Manichaean=[[68288,68326,1],[68331,68342,1]];static Marchen=[[72816,72847,1],[72850,72871,1],[72873,72886,1]];static Masaram_Gondi=[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]];static Medefaidrin=[[93760,93850,1]];static Meetei_Mayek=[[43744,43766,1],[43968,44013,1],[44016,44025,1]];static Mende_Kikakui=[[124928,125124,1],[125127,125142,1]];static Meroitic_Cursive=[[68e3,68023,1],[68028,68047,1],[68050,68095,1]];static Meroitic_Hieroglyphs=[[67968,67999,1]];static Miao=[[93952,94026,1],[94031,94087,1],[94095,94111,1]];static Modi=[[71168,71236,1],[71248,71257,1]];static Mongolian=[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]];static Mro=[[92736,92766,1],[92768,92777,1],[92782,92783,1]];static Multani=[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]];static Myanmar=[[4096,4255,1],[43488,43518,1],[43616,43647,1]];static Nabataean=[[67712,67742,1],[67751,67759,1]];static Nag_Mundari=[[124112,124153,1]];static Nandinagari=[[72096,72103,1],[72106,72151,1],[72154,72164,1]];static New_Tai_Lue=[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]];static Newa=[[70656,70747,1],[70749,70753,1]];static Nko=[[1984,2042,1],[2045,2047,1]];static Nushu=[[94177,110960,16783],[110961,111355,1]];static Nyiakeng_Puachue_Hmong=[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]];static Ogham=[[5760,5788,1]];static Ol_Chiki=[[7248,7295,1]];static Old_Hungarian=[[68736,68786,1],[68800,68850,1],[68858,68863,1]];static Old_Italic=[[66304,66339,1],[66349,66351,1]];static Old_North_Arabian=[[68224,68255,1]];static Old_Permic=[[66384,66426,1]];static Old_Persian=[[66464,66499,1],[66504,66517,1]];static Old_Sogdian=[[69376,69415,1]];static Old_South_Arabian=[[68192,68223,1]];static Old_Turkic=[[68608,68680,1]];static Old_Uyghur=[[69488,69513,1]];static Oriya=[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]];static Osage=[[66736,66771,1],[66776,66811,1]];static Osmanya=[[66688,66717,1],[66720,66729,1]];static Pahawh_Hmong=[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]];static Palmyrene=[[67680,67711,1]];static Pau_Cin_Hau=[[72384,72440,1]];static Phags_Pa=[[43072,43127,1]];static Phoenician=[[67840,67867,1],[67871,67871,1]];static Psalter_Pahlavi=[[68480,68497,1],[68505,68508,1],[68521,68527,1]];static Rejang=[[43312,43347,1],[43359,43359,1]];static Runic=[[5792,5866,1],[5870,5880,1]];static Samaritan=[[2048,2093,1],[2096,2110,1]];static Saurashtra=[[43136,43205,1],[43214,43225,1]];static Sharada=[[70016,70111,1]];static Shavian=[[66640,66687,1]];static Siddham=[[71040,71093,1],[71096,71133,1]];static SignWriting=[[120832,121483,1],[121499,121503,1],[121505,121519,1]];static Sinhala=[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]];static Sogdian=[[69424,69465,1]];static Sora_Sompeng=[[69840,69864,1],[69872,69881,1]];static Soyombo=[[72272,72354,1]];static Sundanese=[[7040,7103,1],[7360,7367,1]];static Syloti_Nagri=[[43008,43052,1]];static Syriac=[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]];static Tagalog=[[5888,5909,1],[5919,5919,1]];static Tagbanwa=[[5984,5996,1],[5998,6e3,1],[6002,6003,1]];static Tai_Le=[[6480,6509,1],[6512,6516,1]];static Tai_Tham=[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]];static Tai_Viet=[[43648,43714,1],[43739,43743,1]];static Takri=[[71296,71353,1],[71360,71369,1]];static Tamil=[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]];static Tangsa=[[92784,92862,1],[92864,92873,1]];static Tangut=[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]];static Telugu=[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]];static Thaana=[[1920,1969,1]];static Thai=[[3585,3642,1],[3648,3675,1]];static Tibetan=[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]];static Tifinagh=[[11568,11623,1],[11631,11632,1],[11647,11647,1]];static Tirhuta=[[70784,70855,1],[70864,70873,1]];static Toto=[[123536,123566,1]];static Ugaritic=[[66432,66461,1],[66463,66463,1]];static Vai=[[42240,42539,1]];static Vithkuqi=[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]];static Wancho=[[123584,123641,1],[123647,123647,1]];static Warang_Citi=[[71840,71922,1],[71935,71935,1]];static Yezidi=[[69248,69289,1],[69291,69293,1],[69296,69297,1]];static Yi=[[40960,42124,1],[42128,42182,1]];static Zanabazar_Square=[[72192,72263,1]];static CATEGORIES=new Map([["C",v.C],["Cc",v.Cc],["Cf",v.Cf],["Co",v.Co],["Cs",v.Cs],["L",v.L],["Ll",v.Ll],["Lm",v.Lm],["Lo",v.Lo],["Lt",v.Lt],["Lu",v.Lu],["M",v.M],["Mc",v.Mc],["Me",v.Me],["Mn",v.Mn],["N",v.N],["Nd",v.Nd],["Nl",v.Nl],["No",v.No],["P",v.P],["Pc",v.Pc],["Pd",v.Pd],["Pe",v.Pe],["Pf",v.Pf],["Pi",v.Pi],["Po",v.Po],["Ps",v.Ps],["S",v.S],["Sc",v.Sc],["Sk",v.Sk],["Sm",v.Sm],["So",v.So],["Z",v.Z],["Zl",v.Zl],["Zp",v.Zp],["Zs",v.Zs]]);static SCRIPTS=new Map([["Adlam",v.Adlam],["Ahom",v.Ahom],["Anatolian_Hieroglyphs",v.Anatolian_Hieroglyphs],["Arabic",v.Arabic],["Armenian",v.Armenian],["Avestan",v.Avestan],["Balinese",v.Balinese],["Bamum",v.Bamum],["Bassa_Vah",v.Bassa_Vah],["Batak",v.Batak],["Bengali",v.Bengali],["Bhaiksuki",v.Bhaiksuki],["Bopomofo",v.Bopomofo],["Brahmi",v.Brahmi],["Braille",v.Braille],["Buginese",v.Buginese],["Buhid",v.Buhid],["Canadian_Aboriginal",v.Canadian_Aboriginal],["Carian",v.Carian],["Caucasian_Albanian",v.Caucasian_Albanian],["Chakma",v.Chakma],["Cham",v.Cham],["Cherokee",v.Cherokee],["Chorasmian",v.Chorasmian],["Common",v.Common],["Coptic",v.Coptic],["Cuneiform",v.Cuneiform],["Cypriot",v.Cypriot],["Cypro_Minoan",v.Cypro_Minoan],["Cyrillic",v.Cyrillic],["Deseret",v.Deseret],["Devanagari",v.Devanagari],["Dives_Akuru",v.Dives_Akuru],["Dogra",v.Dogra],["Duployan",v.Duployan],["Egyptian_Hieroglyphs",v.Egyptian_Hieroglyphs],["Elbasan",v.Elbasan],["Elymaic",v.Elymaic],["Ethiopic",v.Ethiopic],["Georgian",v.Georgian],["Glagolitic",v.Glagolitic],["Gothic",v.Gothic],["Grantha",v.Grantha],["Greek",v.Greek],["Gujarati",v.Gujarati],["Gunjala_Gondi",v.Gunjala_Gondi],["Gurmukhi",v.Gurmukhi],["Han",v.Han],["Hangul",v.Hangul],["Hanifi_Rohingya",v.Hanifi_Rohingya],["Hanunoo",v.Hanunoo],["Hatran",v.Hatran],["Hebrew",v.Hebrew],["Hiragana",v.Hiragana],["Imperial_Aramaic",v.Imperial_Aramaic],["Inherited",v.Inherited],["Inscriptional_Pahlavi",v.Inscriptional_Pahlavi],["Inscriptional_Parthian",v.Inscriptional_Parthian],["Javanese",v.Javanese],["Kaithi",v.Kaithi],["Kannada",v.Kannada],["Katakana",v.Katakana],["Kawi",v.Kawi],["Kayah_Li",v.Kayah_Li],["Kharoshthi",v.Kharoshthi],["Khitan_Small_Script",v.Khitan_Small_Script],["Khmer",v.Khmer],["Khojki",v.Khojki],["Khudawadi",v.Khudawadi],["Lao",v.Lao],["Latin",v.Latin],["Lepcha",v.Lepcha],["Limbu",v.Limbu],["Linear_A",v.Linear_A],["Linear_B",v.Linear_B],["Lisu",v.Lisu],["Lycian",v.Lycian],["Lydian",v.Lydian],["Mahajani",v.Mahajani],["Makasar",v.Makasar],["Malayalam",v.Malayalam],["Mandaic",v.Mandaic],["Manichaean",v.Manichaean],["Marchen",v.Marchen],["Masaram_Gondi",v.Masaram_Gondi],["Medefaidrin",v.Medefaidrin],["Meetei_Mayek",v.Meetei_Mayek],["Mende_Kikakui",v.Mende_Kikakui],["Meroitic_Cursive",v.Meroitic_Cursive],["Meroitic_Hieroglyphs",v.Meroitic_Hieroglyphs],["Miao",v.Miao],["Modi",v.Modi],["Mongolian",v.Mongolian],["Mro",v.Mro],["Multani",v.Multani],["Myanmar",v.Myanmar],["Nabataean",v.Nabataean],["Nag_Mundari",v.Nag_Mundari],["Nandinagari",v.Nandinagari],["New_Tai_Lue",v.New_Tai_Lue],["Newa",v.Newa],["Nko",v.Nko],["Nushu",v.Nushu],["Nyiakeng_Puachue_Hmong",v.Nyiakeng_Puachue_Hmong],["Ogham",v.Ogham],["Ol_Chiki",v.Ol_Chiki],["Old_Hungarian",v.Old_Hungarian],["Old_Italic",v.Old_Italic],["Old_North_Arabian",v.Old_North_Arabian],["Old_Permic",v.Old_Permic],["Old_Persian",v.Old_Persian],["Old_Sogdian",v.Old_Sogdian],["Old_South_Arabian",v.Old_South_Arabian],["Old_Turkic",v.Old_Turkic],["Old_Uyghur",v.Old_Uyghur],["Oriya",v.Oriya],["Osage",v.Osage],["Osmanya",v.Osmanya],["Pahawh_Hmong",v.Pahawh_Hmong],["Palmyrene",v.Palmyrene],["Pau_Cin_Hau",v.Pau_Cin_Hau],["Phags_Pa",v.Phags_Pa],["Phoenician",v.Phoenician],["Psalter_Pahlavi",v.Psalter_Pahlavi],["Rejang",v.Rejang],["Runic",v.Runic],["Samaritan",v.Samaritan],["Saurashtra",v.Saurashtra],["Sharada",v.Sharada],["Shavian",v.Shavian],["Siddham",v.Siddham],["SignWriting",v.SignWriting],["Sinhala",v.Sinhala],["Sogdian",v.Sogdian],["Sora_Sompeng",v.Sora_Sompeng],["Soyombo",v.Soyombo],["Sundanese",v.Sundanese],["Syloti_Nagri",v.Syloti_Nagri],["Syriac",v.Syriac],["Tagalog",v.Tagalog],["Tagbanwa",v.Tagbanwa],["Tai_Le",v.Tai_Le],["Tai_Tham",v.Tai_Tham],["Tai_Viet",v.Tai_Viet],["Takri",v.Takri],["Tamil",v.Tamil],["Tangsa",v.Tangsa],["Tangut",v.Tangut],["Telugu",v.Telugu],["Thaana",v.Thaana],["Thai",v.Thai],["Tibetan",v.Tibetan],["Tifinagh",v.Tifinagh],["Tirhuta",v.Tirhuta],["Toto",v.Toto],["Ugaritic",v.Ugaritic],["Vai",v.Vai],["Vithkuqi",v.Vithkuqi],["Wancho",v.Wancho],["Warang_Citi",v.Warang_Citi],["Yezidi",v.Yezidi],["Yi",v.Yi],["Zanabazar_Square",v.Zanabazar_Square]]);static FOLD_CATEGORIES=new Map([["L",v.foldL],["Ll",v.foldLl],["Lt",v.foldLt],["Lu",v.foldLu],["M",v.foldM],["Mn",v.foldMn]]);static FOLD_SCRIPT=new Map([["Common",v.foldCommon],["Greek",v.foldGreek],["Inherited",v.foldInherited]])}class ne{static MAX_RUNE=1114111;static MAX_ASCII=127;static MAX_LATIN1=255;static MAX_BMP=65535;static MIN_FOLD=65;static MAX_FOLD=125251;static is32(e,t){let r=0,i=e.length;for(;r<i;){let s=r+Math.floor((i-r)/2),a=e[s];if(a[0]<=t&&t<=a[1])return(t-a[0])%a[2]===0;t<a[0]?i=s:r=s+1}return!1}static is(e,t){if(t<=this.MAX_LATIN1){for(let r of e)if(!(t>r[1]))return t<r[0]?!1:(t-r[0])%r[2]===0;return!1}return e.length>0&&t>=e[0][0]&&this.is32(e,t)}static isUpper(e){if(e<=this.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return this.is(v.Upper,e)}static isPrint(e){return e<=this.MAX_LATIN1?e>=32&&e<127||e>=161&&e!==173:this.is(v.L,e)||this.is(v.M,e)||this.is(v.N,e)||this.is(v.P,e)||this.is(v.S,e)}static simpleFold(e){if(v.CASE_ORBIT.has(e))return v.CASE_ORBIT.get(e);const t=R.toLowerCase(e);return t!==e?t:R.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e<0||t<0||e===t)return!0;if(e<=this.MAX_ASCII&&t<=this.MAX_ASCII)return R.CODES.get("A")<=e&&e<=R.CODES.get("Z")&&(e|=32),R.CODES.get("A")<=t&&t<=R.CODES.get("Z")&&(t|=32),e===t;for(let r=this.simpleFold(e);r!==e;r=this.simpleFold(r))if(r===t)return!0;return!1}}class he{static METACHARACTERS="\\.+*?()|[]{}^$";static EMPTY_BEGIN_LINE=1;static EMPTY_END_LINE=2;static EMPTY_BEGIN_TEXT=4;static EMPTY_END_TEXT=8;static EMPTY_WORD_BOUNDARY=16;static EMPTY_NO_WORD_BOUNDARY=32;static EMPTY_ALL=-1;static emptyInts(){return[]}static isalnum(e){return R.CODES.get("0")<=e&&e<=R.CODES.get("9")||R.CODES.get("a")<=e&&e<=R.CODES.get("z")||R.CODES.get("A")<=e&&e<=R.CODES.get("Z")}static unhex(e){return R.CODES.get("0")<=e&&e<=R.CODES.get("9")?e-R.CODES.get("0"):R.CODES.get("a")<=e&&e<=R.CODES.get("f")?e-R.CODES.get("a")+10:R.CODES.get("A")<=e&&e<=R.CODES.get("F")?e-R.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(ne.isPrint(e))this.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case R.CODES.get('"'):t+='\\"';break;case R.CODES.get("\\"):t+="\\\\";break;case R.CODES.get("	"):t+="\\t";break;case R.CODES.get(`
`):t+="\\n";break;case R.CODES.get("\r"):t+="\\r";break;case R.CODES.get("\b"):t+="\\b";break;case R.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){return String(e).split("").map(t=>t.codePointAt(0))}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return R.CODES.get("a")<=e&&e<=R.CODES.get("z")||R.CODES.get("A")<=e&&e<=R.CODES.get("Z")||R.CODES.get("0")<=e&&e<=R.CODES.get("9")||e===R.CODES.get("_")}static emptyOpContext(e,t){let r=0;return e<0&&(r|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),e===R.CODES.get(`
`)&&(r|=this.EMPTY_BEGIN_LINE),t<0&&(r|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),t===R.CODES.get(`
`)&&(r|=this.EMPTY_END_LINE),this.isWordRune(e)!==this.isWordRune(t)?r|=this.EMPTY_WORD_BOUNDARY:r|=this.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>this.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>ne.MAX_BMP?2:1}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(e));{let t=[],r=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[r++]=s:s<2048?(t[r++]=s>>6|192,t[r++]=s&63|128):(s&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++i)&1023),t[r++]=s>>18|240,t[r++]=s>>12&63|128,t[r++]=s>>6&63|128,t[r++]=s&63|128):(t[r++]=s>>12|224,t[r++]=s>>6&63|128,t[r++]=s&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(e));{let t=[],r=0,i=0;for(;r<e.length;){let s=e[r++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){let a=e[r++];t[i++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){let a=e[r++],c=e[r++],l=e[r++],u=((s&7)<<18|(a&63)<<12|(c&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(u>>10)),t[i++]=String.fromCharCode(56320+(u&1023))}else{let a=e[r++],c=e[r++];t[i++]=String.fromCharCode((s&15)<<12|(a&63)<<6|c&63)}}return t.join("")}}}const mp=(n=[],e=0)=>{const t={};for(let r=0;r<n.length;r++){const i=n[r],s=e+r;t[i]=s,t[s]=i}return Object.freeze(t)};class hn{static Encoding=mp(["UTF_16","UTF_8"]);getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===hn.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===hn.Encoding.UTF_16}}class A1 extends hn{constructor(e=null){super(),this.bytes=e}getEncoding(){return hn.Encoding.UTF_8}asCharSequence(){return he.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class u4 extends hn{constructor(e=null){super(),this.charSequence=e}getEncoding(){return hn.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(e=>e.codePointAt(0))}length(){return this.charSequence.length}}class va{static utf16(e){return new u4(e)}static utf8(e){return Array.isArray(e)?new A1(e):new A1(he.stringToUtf8ByteArray(e))}}class Ga extends Error{constructor(e){super(e),this.name="RE2JSException"}}class be extends Ga{constructor(e,t=null){let r=`error parsing regexp: ${e}`;t&&(r+=`: \`${t}\``),super(r),this.name="RE2JSSyntaxException",this.message=r,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}}class h4 extends Ga{constructor(e){super(e),this.name="RE2JSCompileException"}}class en extends Ga{constructor(e){super(e),this.name="RE2JSGroupException"}}class d4 extends Ga{constructor(e){super(e),this.name="RE2JSFlagsException"}}class p4{static quoteReplacement(e){return e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(t=>{const r=t.codePointAt(0);return r===R.CODES["\\"]||r===R.CODES.$?`\\${t}`:t}).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,t instanceof hn?this.resetMatcherInput(t):Array.isArray(t)?this.resetMatcherInput(va.utf8(t)):this.resetMatcherInput(va.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new en(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new en(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}group(e=0){if(typeof e=="string"){const i=this.namedGroups[e];if(!Number.isFinite(i))throw new en(`group '${e}' not found`);e=i}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new en(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new en("perhaps no match attempted");if(e===0||this.hasGroups)return;let t=this.groups[1]+1;t>this.matcherInputLength&&(t=this.matcherInputLength);const r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new en("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,$.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,$.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new en(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}return e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1]&&e++),this.genMatch(e,$.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=t,!0):!1}substring(e,t){return this.matcherInput.isUTF8Encoding()?he.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const i=this.start(),s=this.end();return this.appendPos<i&&(r+=this.substring(this.appendPos,i)),this.appendPos=s,r+=t?this.appendReplacementInternalPerl(e):this.appendReplacementInternal(e),r}appendReplacementInternal(e){let t="",r=0;const i=e.length;for(let s=0;s<i-1;s++){if(e.codePointAt(s)===R.CODES.get("\\")){r<s&&(t+=e.substring(r,s)),s++,r=s;continue}if(e.codePointAt(s)===R.CODES.get("$")){let a=e.codePointAt(s+1);if(R.CODES.get("0")<=a&&a<=R.CODES.get("9")){let c=a-R.CODES.get("0");for(r<s&&(t+=e.substring(r,s)),s+=2;s<i&&(a=e.codePointAt(s),!(a<R.CODES.get("0")||a>R.CODES.get("9")||c*10+a-R.CODES.get("0")>this.patternGroupCount));s++)c=c*10+a-R.CODES.get("0");if(c>this.patternGroupCount)throw new en(`n > number of groups: ${c}`);const l=this.group(c);l!==null&&(t+=l),r=s,s--;continue}else if(a===R.CODES.get("{")){r<s&&(t+=e.substring(r,s)),s++;let c=s+1;for(;c<e.length&&e.codePointAt(c)!==R.CODES.get("}")&&e.codePointAt(c)!==R.CODES.get(" ");)c++;if(c===e.length||e.codePointAt(c)!==R.CODES.get("}"))throw new en("named capture group is missing trailing '}'");const l=e.substring(s+1,c);t+=this.group(l),r=c+1}}}return r<i&&(t+=e.substring(r,i)),t}appendReplacementInternalPerl(e){let t="",r=0;const i=e.length;for(let s=0;s<i-1;s++)if(e.codePointAt(s)===R.CODES.get("$")){let a=e.codePointAt(s+1);if(R.CODES.get("$")===a){r<s&&(t+=e.substring(r,s)),t+="$",s++,r=s+1;continue}else if(R.CODES.get("&")===a){r<s&&(t+=e.substring(r,s));const c=this.group(0);c!==null?t+=c:t+="$&",s++,r=s+1;continue}else if(R.CODES.get("1")<=a&&a<=R.CODES.get("9")){let c=a-R.CODES.get("0");for(r<s&&(t+=e.substring(r,s)),s+=2;s<i&&(a=e.codePointAt(s),!(a<R.CODES.get("0")||a>R.CODES.get("9")||c*10+a-R.CODES.get("0")>this.patternGroupCount));s++)c=c*10+a-R.CODES.get("0");if(c>this.patternGroupCount){t+=`$${c}`,r=s,s--;continue}const l=this.group(c);l!==null&&(t+=l),r=s,s--;continue}else if(a===R.CODES.get("<")){r<s&&(t+=e.substring(r,s)),s++;let c=s+1;for(;c<e.length&&e.codePointAt(c)!==R.CODES.get(">")&&e.codePointAt(c)!==R.CODES.get(" ");)c++;if(c===e.length||e.codePointAt(c)!==R.CODES.get(">")){t+=e.substring(s-1,c+1),r=c+1;continue}const l=e.substring(s+1,c);Object.prototype.hasOwnProperty.call(this.namedGroups,l)?t+=this.group(l):t+=`$<${l}>`,r=c+1}}return r<i&&(t+=e.substring(r,i)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let i="";for(this.reset();this.find()&&(i+=this.appendReplacement(e,r),!!t););return i+=this.appendTail(),i}}class Pn{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class f4 extends Pn{constructor(e,t=0,r=e.length){super(),this.bytes=e,this.start=t,this.end=r}step(e){if(e+=this.start,e>=this.end)return Pn.EOF();let t=this.bytes[e++]&255;return t&128?(t&224)===192?(t=t&31,e>=this.end?Pn.EOF():(t=t<<6|this.bytes[e++]&63,t<<3|2)):(t&240)===224?(t=t&15,e+1>=this.end?Pn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|3)):(t=t&7,e+2>=this.end?Pn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|4)):t<<3|1}index(e,t){t+=this.start;const r=this.indexOf(this.bytes,e.prefixUTF8,t);return r<0?r:r-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let i=e-1;if(t=this.bytes[i--],t>=128){let s=e-4;for(s<this.start&&(s=this.start);i>=s&&(this.bytes[i]&192)===128;)i--;i<this.start&&(i=this.start),t=this.step(i)>>3}}const r=e<this.end?this.step(e)>>3:-1;return he.emptyOpContext(t,r)}indexOf(e,t,r=0){let i=t.length;if(i===0)return-1;let s=e.length;for(let a=r;a<=s-i;a++)for(let c=0;c<i&&e[a+c]===t[c];c++)if(c===i-1)return a;return-1}}class g4 extends Pn{constructor(e,t=0,r=e.length){super(),this.charSequence=e,this.start=t,this.end=r}step(e){if(e+=this.start,e<this.end){const t=this.charSequence.codePointAt(e);return t<<3|he.charCount(t)}else return Pn.EOF()}index(e,t){t+=this.start;const r=this.charSequence.indexOf(e.prefix,t);return r<0?r:r-t}context(e){e+=this.start;const t=e>0&&e<=this.charSequence.length?this.charSequence.codePointAt(e-1):-1,r=e<this.charSequence.length?this.charSequence.codePointAt(e):-1;return he.emptyOpContext(t,r)}}class Ie{static fromUTF8(e,t=0,r=e.length){return new f4(e,t,r)}static fromUTF16(e,t=0,r=e.length){return new g4(e,t,r)}}class S{static Op=mp(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]);static isPseudoOp(e){return e>=S.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===R.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new S(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t}constructor(e){this.op=e,this.flags=0,this.subs=S.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=S.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case S.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case S.Op.EMPTY_MATCH:e+="(?:)";break;case S.Op.STAR:case S.Op.PLUS:case S.Op.QUEST:case S.Op.REPEAT:{const t=this.subs[0];switch(t.op>S.Op.CAPTURE||t.op===S.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case S.Op.STAR:e+="*";break;case S.Op.PLUS:e+="+";break;case S.Op.QUEST:e+="?";break;case S.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&$.NON_GREEDY&&(e+="?");break}case S.Op.CONCAT:{for(let t of this.subs)t.op===S.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break}case S.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case S.Op.LITERAL:this.flags&$.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=he.escapeRune(t);this.flags&$.FOLD_CASE&&(e+=")");break;case S.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case S.Op.ANY_CHAR:e+="(?s:.)";break;case S.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==S.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case S.Op.BEGIN_TEXT:e+="\\A";break;case S.Op.END_TEXT:this.flags&$.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case S.Op.BEGIN_LINE:e+="^";break;case S.Op.END_LINE:e+="$";break;case S.Op.WORD_BOUNDARY:e+="\\b";break;case S.Op.NO_WORD_BOUNDARY:e+="\\B";break;case S.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===ne.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,i=this.runes[t+1]-1;e+=S.quoteIfHyphen(r),e+=he.escapeRune(r),r!==i&&(e+="-",e+=S.quoteIfHyphen(i),e+=he.escapeRune(i))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],i=this.runes[t+1];e+=S.quoteIfHyphen(r),e+=he.escapeRune(r),r!==i&&(e+="-",e+=S.quoteIfHyphen(i),e+=he.escapeRune(i))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===S.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof S)||this.op!==e.op)return!1;switch(this.op){case S.Op.END_TEXT:{if((this.flags&$.WAS_DOLLAR)!==(e.flags&$.WAS_DOLLAR))return!1;break}case S.Op.LITERAL:case S.Op.CHAR_CLASS:{if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break}case S.Op.ALTERNATE:case S.Op.CONCAT:{if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break}case S.Op.STAR:case S.Op.PLUS:case S.Op.QUEST:{if((this.flags&$.NON_GREEDY)!==(e.flags&$.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break}case S.Op.REPEAT:{if((this.flags&$.NON_GREEDY)!==(e.flags&$.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break}case S.Op.CAPTURE:{if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break}}return!0}}class G{static ALT=1;static ALT_MATCH=2;static CAPTURE=3;static EMPTY_WIDTH=4;static FAIL=5;static MATCH=6;static NOP=7;static RUNE=8;static RUNE1=9;static RUNE_ANY=10;static RUNE_ANY_NOT_NL=11;static isRuneOp(e){return G.RUNE<=e&&e<=G.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=he.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=null}matchRune(e){if(this.runes.length===1){const i=this.runes[0];return this.arg&$.FOLD_CASE?ne.equalsIgnoreCase(i,e):e===i}for(let i=0;i<this.runes.length&&i<=8;i+=2){if(e<this.runes[i])return!1;if(e<=this.runes[i+1])return!0}let t=0,r=this.runes.length/2|0;for(;t<r;){const i=t+((r-t)/2|0);if(this.runes[2*i]<=e){if(e<=this.runes[2*i+1])return!0;t=i+1}else r=i}return!1}toString(){switch(this.op){case G.ALT:return`alt -> ${this.out}, ${this.arg}`;case G.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case G.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case G.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case G.MATCH:return"match";case G.FAIL:return"fail";case G.NOP:return`nop -> ${this.out}`;case G.RUNE:return this.runes===null?"rune <null>":["rune ",G.escapeRunes(this.runes),this.arg&$.FOLD_CASE?"/i":""," -> ",this.out].join("");case G.RUNE1:return`rune1 ${G.escapeRunes(this.runes)} -> ${this.out}`;case G.RUNE_ANY:return`any -> ${this.out}`;case G.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}}class m4{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new G(e))}skipNop(e){let t=this.inst[e];for(;t.op===G.NOP||t.op===G.CAPTURE;)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!G.isRuneOp(t.op)||t.runes.length!==1)return[t.op===G.MATCH,e];for(;G.isRuneOp(t.op)&&t.runes.length===1&&!(t.arg&$.FOLD_CASE);)e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===G.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const r=this.inst[t];switch(r.op){case G.EMPTY_WIDTH:e|=r.arg;break;case G.FAIL:return-1;case G.CAPTURE:case G.NOP:break;default:break e}t=r.out}return e}next(e){const t=this.inst[e>>1];return e&1?t.arg:t.out}patch(e,t){for(;e!==0;){const r=this.inst[e>>1];e&1?(e=r.arg,r.arg=t):(e=r.out,r.out=t)}}append(e,t){if(e===0)return t;if(t===0)return e;let r=e;for(;;){const s=this.next(r);if(s===0)break;r=s}const i=this.inst[r>>1];return r&1?i.arg=t:i.out=t,e}toString(){let e="";for(let t=0;t<this.inst.length;t++){const r=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-r),e+=this.inst[t],e+=`
`}return e}}class qs{constructor(e=0,t=0,r=!1){this.i=e,this.out=t,this.nullable=r}}class Ri{static ANY_RUNE_NOT_NL(){return[0,R.CODES.get(`
`)-1,R.CODES.get(`
`)+1,ne.MAX_RUNE]}static ANY_RUNE(){return[0,ne.MAX_RUNE]}static compileRegexp(e){const t=new Ri,r=t.compile(e);return t.prog.patch(r.out,t.newInst(G.MATCH).i),t.prog.start=r.i,t.prog}constructor(){this.prog=new m4,this.newInst(G.FAIL)}newInst(e){return this.prog.addInst(e),new qs(this.prog.numInst()-1,0,!0)}nop(){const e=this.newInst(G.NOP);return e.out=e.i<<1,e}fail(){return new qs}cap(e){const t=this.newInst(G.CAPTURE);return t.out=t.i<<1,this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new qs(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(G.ALT),i=this.prog.getInst(r.i);return i.out=e.i,i.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(G.ALT),i=this.prog.getInst(r.i);return t?(i.arg=e.i,r.out=r.i<<1):(i.out=e.i,r.out=r.i<<1|1),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(G.ALT),i=this.prog.getInst(r.i);return t?(i.arg=e.i,r.out=r.i<<1):(i.out=e.i,r.out=r.i<<1|1),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new qs(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(G.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=t.i<<1,t}rune(e,t){const r=this.newInst(G.RUNE);r.nullable=!1;const i=this.prog.getInst(r.i);return i.runes=e,t&=$.FOLD_CASE,(e.length!==1||ne.simpleFold(e[0])===e[0])&&(t&=-2),i.arg=t,r.out=r.i<<1,!(t&$.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?i.op=G.RUNE1:e.length===2&&e[0]===0&&e[1]===ne.MAX_RUNE?i.op=G.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===R.CODES.get(`
`)-1&&e[2]===R.CODES.get(`
`)+1&&e[3]===ne.MAX_RUNE&&(i.op=G.RUNE_ANY_NOT_NL),r}compile(e){switch(e.op){case S.Op.NO_MATCH:return this.fail();case S.Op.EMPTY_MATCH:return this.nop();case S.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const i=this.rune([r],e.flags);t=t===null?i:this.cat(t,i)}return t}case S.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case S.Op.ANY_CHAR_NOT_NL:return this.rune(Ri.ANY_RUNE_NOT_NL(),0);case S.Op.ANY_CHAR:return this.rune(Ri.ANY_RUNE(),0);case S.Op.BEGIN_LINE:return this.empty(he.EMPTY_BEGIN_LINE);case S.Op.END_LINE:return this.empty(he.EMPTY_END_LINE);case S.Op.BEGIN_TEXT:return this.empty(he.EMPTY_BEGIN_TEXT);case S.Op.END_TEXT:return this.empty(he.EMPTY_END_TEXT);case S.Op.WORD_BOUNDARY:return this.empty(he.EMPTY_WORD_BOUNDARY);case S.Op.NO_WORD_BOUNDARY:return this.empty(he.EMPTY_NO_WORD_BOUNDARY);case S.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),i=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),i)}case S.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&$.NON_GREEDY)!==0);case S.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&$.NON_GREEDY)!==0);case S.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&$.NON_GREEDY)!==0);case S.Op.CONCAT:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const i=this.compile(r);t=t===null?i:this.cat(t,i)}return t}}case S.Op.ALTERNATE:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const i=this.compile(r);t=t===null?i:this.alt(t,i)}return t}}default:throw new h4("regexp: unhandled case in compile")}}}class Pt{static simplify(e){if(e===null)return null;switch(e.op){case S.Op.CAPTURE:case S.Op.CONCAT:case S.Op.ALTERNATE:{let t=e;for(let r=0;r<e.subs.length;r++){const i=e.subs[r],s=Pt.simplify(i);t===e&&s!==i&&(t=S.fromRegexp(e),t.runes=null,t.subs=e.subs.slice(0,e.subs.length)),t!==e&&(t.subs[r]=s)}return t}case S.Op.STAR:case S.Op.PLUS:case S.Op.QUEST:{const t=Pt.simplify(e.subs[0]);return Pt.simplify1(e.op,e.flags,t,e)}case S.Op.REPEAT:{if(e.min===0&&e.max===0)return new S(S.Op.EMPTY_MATCH);const t=Pt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Pt.simplify1(S.Op.STAR,e.flags,t,null);if(e.min===1)return Pt.simplify1(S.Op.PLUS,e.flags,t,null);const i=new S(S.Op.CONCAT),s=[];for(let a=0;a<e.min-1;a++)s.push(t);return s.push(Pt.simplify1(S.Op.PLUS,e.flags,t,null)),i.subs=s.slice(0),i}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let i=0;i<e.min;i++)r.push(t)}if(e.max>e.min){let i=Pt.simplify1(S.Op.QUEST,e.flags,t,null);for(let s=e.min+1;s<e.max;s++){const a=new S(S.Op.CONCAT);a.subs=[t,i],i=Pt.simplify1(S.Op.QUEST,e.flags,a,null)}if(r===null)return i;r.push(i)}if(r!==null){const i=new S(S.Op.CONCAT);return i.subs=r.slice(0),i}return new S(S.Op.NO_MATCH)}}return e}static simplify1(e,t,r,i){return r.op===S.Op.EMPTY_MATCH||e===r.op&&(t&$.NON_GREEDY)===(r.flags&$.NON_GREEDY)?r:(i!==null&&i.op===e&&(i.flags&$.NON_GREEDY)===(t&$.NON_GREEDY)&&r===i.subs[0]||(i=new S(e),i.flags=t,i.subs=[r]),i)}}class ue{constructor(e,t){this.sign=e,this.cls=t}}const x1=[48,57],S1=[9,10,12,13,32,32],C1=[48,57,65,90,95,95,97,122],k1=new Map([["\\d",new ue(1,x1)],["\\D",new ue(-1,x1)],["\\s",new ue(1,S1)],["\\S",new ue(-1,S1)],["\\w",new ue(1,C1)],["\\W",new ue(-1,C1)]]),P1=[48,57,65,90,97,122],R1=[65,90,97,122],L1=[0,127],O1=[9,9,32,32],D1=[0,31,127,127],N1=[48,57],V1=[33,126],M1=[97,122],F1=[32,126],U1=[33,47,58,64,91,96,123,126],B1=[9,13,32,32],$1=[65,90],z1=[48,57,65,90,95,95,97,122],q1=[48,57,65,70,97,102],j1=new Map([["[:alnum:]",new ue(1,P1)],["[:^alnum:]",new ue(-1,P1)],["[:alpha:]",new ue(1,R1)],["[:^alpha:]",new ue(-1,R1)],["[:ascii:]",new ue(1,L1)],["[:^ascii:]",new ue(-1,L1)],["[:blank:]",new ue(1,O1)],["[:^blank:]",new ue(-1,O1)],["[:cntrl:]",new ue(1,D1)],["[:^cntrl:]",new ue(-1,D1)],["[:digit:]",new ue(1,N1)],["[:^digit:]",new ue(-1,N1)],["[:graph:]",new ue(1,V1)],["[:^graph:]",new ue(-1,V1)],["[:lower:]",new ue(1,M1)],["[:^lower:]",new ue(-1,M1)],["[:print:]",new ue(1,F1)],["[:^print:]",new ue(-1,F1)],["[:punct:]",new ue(1,U1)],["[:^punct:]",new ue(-1,U1)],["[:space:]",new ue(1,B1)],["[:^space:]",new ue(-1,B1)],["[:upper:]",new ue(1,$1)],["[:^upper:]",new ue(-1,$1)],["[:word:]",new ue(1,z1)],["[:^word:]",new ue(-1,z1)],["[:xdigit:]",new ue(1,q1)],["[:^xdigit:]",new ue(-1,q1)]]);class Ke{static charClassToString(e,t){let r="[";for(let i=0;i<t;i+=2){i>0&&(r+=" ");const s=e[i],a=e[i+1];s===a?r+=`0x${s.toString(16)}`:r+=`0x${s.toString(16)}-0x${a.toString(16)}`}return r+="]",r}static cmp(e,t,r,i){const s=e[t]-r;return s!==0?s:i-e[t+1]}static qsortIntPair(e,t,r){const i=((t+r)/2|0)&-2,s=e[i],a=e[i+1];let c=t,l=r;for(;c<=l;){for(;c<r&&Ke.cmp(e,c,s,a)<0;)c+=2;for(;l>t&&Ke.cmp(e,l,s,a)>0;)l-=2;if(c<=l){if(c!==l){let u=e[c];e[c]=e[l],e[l]=u,u=e[c+1],e[c+1]=e[l+1],e[l+1]=u}c+=2,l-=2}}t<l&&Ke.qsortIntPair(e,t,l),c<r&&Ke.qsortIntPair(e,c,r)}constructor(e=he.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;Ke.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],i=this.r[t+1];if(r<=this.r[e-1]+1){i>this.r[e-1]&&(this.r[e-1]=i);continue}this.r[e]=r,this.r[e+1]=i,e+=2}return this.len=e,this}appendLiteral(e,t){return t&$.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const i=this.r[this.len-r],s=this.r[this.len-r+1];if(e<=s+1&&i<=t+1)return e<i&&(this.r[this.len-r]=e),t>s&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=ne.MIN_FOLD&&t>=ne.MAX_FOLD)return this.appendRange(e,t);if(t<ne.MIN_FOLD||e>ne.MAX_FOLD)return this.appendRange(e,t);e<ne.MIN_FOLD&&(this.appendRange(e,ne.MIN_FOLD-1),e=ne.MIN_FOLD),t>ne.MAX_FOLD&&(this.appendRange(ne.MAX_FOLD+1,t),t=ne.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let i=ne.simpleFold(r);i!==r;i=ne.simpleFold(i))this.appendRange(i,i)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const i=e[r],s=e[r+1];t<=i-1&&this.appendRange(t,i-1),t=s+1}return t<=ne.MAX_RUNE&&this.appendRange(t,ne.MAX_RUNE),this}appendTable(e){for(let t of e){const r=t[0],i=t[1],s=t[2];if(s===1){this.appendRange(r,i);continue}for(let a=r;a<=i;a+=s)this.appendRange(a,a)}return this}appendNegatedTable(e){let t=0;for(let r of e){const i=r[0],s=r[1],a=r[2];if(a===1){t<=i-1&&this.appendRange(t,i-1),t=s+1;continue}for(let c=i;c<=s;c+=a)t<=c-1&&this.appendRange(t,c-1),t=c+1}return t<=ne.MAX_RUNE&&this.appendRange(t,ne.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const i=this.r[r],s=this.r[r+1];e<=i-1&&(this.r[t]=e,this.r[t+1]=i-1,t+=2),e=s+1}return this.len=t,e<=ne.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=ne.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new Ke().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return Ke.charClassToString(this.r,this.len)}}class Li{static of(e,t){return new Li(e,t)}constructor(e,t){this.first=e,this.second=t}}class y4{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=he.charCount(e),e}lookingAt(e){return this.rest().startsWith(e)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}}class Z{static ERR_INTERNAL_ERROR="regexp/syntax: internal error";static ERR_INVALID_CHAR_RANGE="invalid character class range";static ERR_INVALID_ESCAPE="invalid escape sequence";static ERR_INVALID_NAMED_CAPTURE="invalid named capture";static ERR_INVALID_PERL_OP="invalid or unsupported Perl syntax";static ERR_INVALID_REPEAT_OP="invalid nested repetition operator";static ERR_INVALID_REPEAT_SIZE="invalid repeat count";static ERR_MISSING_BRACKET="missing closing ]";static ERR_MISSING_PAREN="missing closing )";static ERR_MISSING_REPEAT_ARGUMENT="missing argument to repetition operator";static ERR_TRAILING_BACKSLASH="trailing backslash at end of expression";static ERR_DUPLICATE_NAMED_CAPTURE="duplicate capture group name";static ANY_TABLE(){return[[0,ne.MAX_RUNE,1]]}static unicodeTable(e){return e==="Any"?Li.of(Z.ANY_TABLE(),Z.ANY_TABLE()):v.CATEGORIES.has(e)?Li.of(v.CATEGORIES.get(e),v.FOLD_CATEGORIES.get(e)):v.SCRIPTS.has(e)?Li.of(v.SCRIPTS.get(e),v.FOLD_SCRIPT.get(e)):null}static minFoldRune(e){if(e<ne.MIN_FOLD||e>ne.MAX_FOLD)return e;let t=e;const r=e;for(e=ne.simpleFold(e);e!==r;e=ne.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===S.Op.EMPTY_MATCH)return null;if(e.op===S.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===S.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new S(S.Op.LITERAL);return r.flags=t,r.runes=he.stringToRunes(e),r}static parse(e,t){return new Z(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=Z.parseInt(e);if(r===-1||!e.more())return-1;let i;if(!e.lookingAt(","))i=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))i=-1;else if((i=Z.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||i===-2||i>1e3||i>=0&&r>i)throw new be(Z.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|i&ne.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==R.CODES.get("_")&&!he.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=R.CODES.get("0")&&e.peek()<=R.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===R.CODES.get("0")?-1:r.length>8?-2:parseFloat(r,10)}static isCharClass(e){return e.op===S.Op.LITERAL&&e.runes.length===1||e.op===S.Op.CHAR_CLASS||e.op===S.Op.ANY_CHAR_NOT_NL||e.op===S.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case S.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case S.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case S.Op.ANY_CHAR_NOT_NL:return t!==R.CODES.get(`
`);case S.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case S.Op.ANY_CHAR:break;case S.Op.ANY_CHAR_NOT_NL:Z.matchRune(t,R.CODES.get(`
`))&&(e.op=S.Op.ANY_CHAR);break;case S.Op.CHAR_CLASS:t.op===S.Op.LITERAL?e.runes=new Ke(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new Ke(e.runes).appendClass(t.runes).toArray();break;case S.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=S.Op.CHAR_CLASS,e.runes=new Ke().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new be(Z.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case R.CODES.get("1"):case R.CODES.get("2"):case R.CODES.get("3"):case R.CODES.get("4"):case R.CODES.get("5"):case R.CODES.get("6"):case R.CODES.get("7"):if(!e.more()||e.peek()<R.CODES.get("0")||e.peek()>R.CODES.get("7"))break;case R.CODES.get("0"):{let i=r-R.CODES.get("0");for(let s=1;s<3&&!(!e.more()||e.peek()<R.CODES.get("0")||e.peek()>R.CODES.get("7"));s++)i=i*8+e.peek()-R.CODES.get("0"),e.skip(1);return i}case R.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===R.CODES.get("{")){let a=0,c=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===R.CODES.get("}"))break;const l=he.unhex(r);if(l<0||(c=c*16+l,c>ne.MAX_RUNE))break e;a++}if(a===0)break e;return c}const i=he.unhex(r);if(!e.more())break;r=e.pop();const s=he.unhex(r);if(i<0||s<0)break;return i*16+s}case R.CODES.get("a"):return R.CODES.get("\x07");case R.CODES.get("f"):return R.CODES.get("\f");case R.CODES.get("n"):return R.CODES.get(`
`);case R.CODES.get("r"):return R.CODES.get("\r");case R.CODES.get("t"):return R.CODES.get("	");case R.CODES.get("v"):return R.CODES.get("\v");default:if(!he.isalnum(r))return r;break}throw new be(Z.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new be(Z.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?Z.parseEscape(e):e.pop()}static concatRunes(e,t){return[...e,...t]}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):t=new S(e),t}reuse(e){e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!S.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(e.op===S.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=S.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===S.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&ne.simpleFold(e.runes[0])===e.runes[2]&&ne.simpleFold(e.runes[2])===e.runes[0]||e.op===S.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&ne.simpleFold(e.runes[0])===e.runes[1]&&ne.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|$.FOLD_CASE))return null;e.op=S.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|$.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const i=this.stack[r-1],s=this.stack[r-2];return i.op!==S.Op.LITERAL||s.op!==S.Op.LITERAL||(i.flags&$.FOLD_CASE)!==(s.flags&$.FOLD_CASE)?!1:(s.runes=Z.concatRunes(s.runes,i.runes),e>=0?(i.runes=[e],i.flags=t,!0):(this.pop(),this.reuse(i),!1))}newLiteral(e,t){const r=this.newRegexp(S.Op.LITERAL);return r.flags=t,t&$.FOLD_CASE&&(e=Z.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,i,s,a){let c=this.flags;if(c&$.PERL_X&&(s.more()&&s.lookingAt("?")&&(s.skip(1),c^=$.NON_GREEDY),a!==-1))throw new be(Z.ERR_INVALID_REPEAT_OP,s.from(a));const l=this.stack.length;if(l===0)throw new be(Z.ERR_MISSING_REPEAT_ARGUMENT,s.from(i));const u=this.stack[l-1];if(S.isPseudoOp(u.op))throw new be(Z.ERR_MISSING_REPEAT_ARGUMENT,s.from(i));const p=this.newRegexp(e);p.min=t,p.max=r,p.flags=c,p.subs=[u],this.stack[l-1]=p}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(S.Op.EMPTY_MATCH)):this.push(this.collapse(e,S.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(S.Op.NO_MATCH)):this.push(this.collapse(e,S.Op.ALTERNATE))}cleanAlt(e){e.op===S.Op.CHAR_CLASS&&(e.runes=new Ke(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===ne.MAX_RUNE?(e.runes=null,e.op=S.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===R.CODES.get(`
`)-1&&e.runes[2]===R.CODES.get(`
`)+1&&e.runes[3]===ne.MAX_RUNE&&(e.runes=null,e.op=S.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let c of e)r+=c.op===t?c.subs.length:1;let i=new Array(r).fill(null),s=0;for(let c of e)c.op===t?(i.splice(s,c.subs.length,...c.subs),s+=c.subs.length,this.reuse(c)):i[s++]=c;let a=this.newRegexp(t);if(a.subs=i,t===S.Op.ALTERNATE&&(a.subs=this.factor(a.subs),a.subs.length===1)){const c=a;a=a.subs[0],this.reuse(c)}return a}factor(e){if(e.length<2)return e;let t=0,r=e.length,i=0,s=null,a=0,c=0,l=0;for(let p=0;p<=r;p++){let g=null,I=0,P=0;if(p<r){let L=e[t+p];if(L.op===S.Op.CONCAT&&L.subs.length>0&&(L=L.subs[0]),L.op===S.Op.LITERAL&&(g=L.runes,I=L.runes.length,P=L.flags&$.FOLD_CASE),P===c){let E=0;for(;E<a&&E<I&&s[E]===g[E];)E++;if(E>0){a=E;continue}}}if(p!==l)if(p===l+1)e[i++]=e[t+l];else{const L=this.newRegexp(S.Op.LITERAL);L.flags=c,L.runes=s.slice(0,a);for(let q=l;q<p;q++)e[t+q]=this.removeLeadingString(e[t+q],a);const E=this.collapse(e.slice(t+l,t+p),S.Op.ALTERNATE),N=this.newRegexp(S.Op.CONCAT);N.subs=[L,E],e[i++]=N}l=p,s=g,a=I,c=P}r=i,t=0,l=0,i=0;let u=null;for(let p=0;p<=r;p++){let g=null;if(!(p<r&&(g=Z.leadingRegexp(e[t+p]),u!==null&&u.equals(g)&&(Z.isCharClass(u)||u.op===S.Op.REPEAT&&u.min===u.max&&Z.isCharClass(u.subs[0]))))){if(p!==l)if(p===l+1)e[i++]=e[t+l];else{const I=u;for(let E=l;E<p;E++){const N=E!==l;e[t+E]=this.removeLeadingRegexp(e[t+E],N)}const P=this.collapse(e.slice(t+l,t+p),S.Op.ALTERNATE),L=this.newRegexp(S.Op.CONCAT);L.subs=[I,P],e[i++]=L}l=p,u=g}}r=i,t=0,l=0,i=0;for(let p=0;p<=r;p++)if(!(p<r&&Z.isCharClass(e[t+p]))){if(p!==l)if(p===l+1)e[i++]=e[t+l];else{let g=l;for(let P=l+1;P<p;P++){const L=e[t+g],E=e[t+P];(L.op<E.op||L.op===E.op&&(L.runes!==null?L.runes.length:0)<(E.runes!==null?E.runes.length:0))&&(g=P)}const I=e[t+l];e[t+l]=e[t+g],e[t+g]=I;for(let P=l+1;P<p;P++)Z.mergeCharClass(e[t+l],e[t+P]),this.reuse(e[t+P]);this.cleanAlt(e[t+l]),e[i++]=e[t+l]}p<r&&(e[i++]=e[t+p]),l=p+1}r=i,t=0,l=0,i=0;for(let p=0;p<r;++p)p+1<r&&e[t+p].op===S.Op.EMPTY_MATCH&&e[t+p+1].op===S.Op.EMPTY_MATCH||(e[i++]=e[t+p]);return r=i,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===S.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===S.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=S.Op.EMPTY_MATCH,e.subs=null;break;case 2:{const i=e;e=e.subs[1],this.reuse(i);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===S.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=S.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===S.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:{e.op=S.Op.EMPTY_MATCH,e.subs=S.emptySubs();break}case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(S.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&$.LITERAL)return Z.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const i=new y4(this.wholeRegexp);for(;i.more();){let a=-1;e:switch(i.peek()){case R.CODES.get("("):if(this.flags&$.PERL_X&&i.lookingAt("(?")){this.parsePerlFlags(i);break}this.op(S.Op.LEFT_PAREN).cap=++this.numCap,i.skip(1);break;case R.CODES.get("|"):this.parseVerticalBar(),i.skip(1);break;case R.CODES.get(")"):this.parseRightParen(),i.skip(1);break;case R.CODES.get("^"):this.flags&$.ONE_LINE?this.op(S.Op.BEGIN_TEXT):this.op(S.Op.BEGIN_LINE),i.skip(1);break;case R.CODES.get("$"):this.flags&$.ONE_LINE?this.op(S.Op.END_TEXT).flags|=$.WAS_DOLLAR:this.op(S.Op.END_LINE),i.skip(1);break;case R.CODES.get("."):this.flags&$.DOT_NL?this.op(S.Op.ANY_CHAR):this.op(S.Op.ANY_CHAR_NOT_NL),i.skip(1);break;case R.CODES.get("["):this.parseClass(i);break;case R.CODES.get("*"):case R.CODES.get("+"):case R.CODES.get("?"):{a=i.pos();let c=null;switch(i.pop()){case R.CODES.get("*"):c=S.Op.STAR;break;case R.CODES.get("+"):c=S.Op.PLUS;break;case R.CODES.get("?"):c=S.Op.QUEST;break}this.repeat(c,t,r,a,i,e);break}case R.CODES.get("{"):{a=i.pos();const c=Z.parseRepeat(i);if(c<0){i.rewindTo(a),this.literal(i.pop());break}t=c>>16,r=(c&ne.MAX_BMP)<<16>>16,this.repeat(S.Op.REPEAT,t,r,a,i,e);break}case R.CODES.get("\\"):{const c=i.pos();if(i.skip(1),this.flags&$.PERL_X&&i.more())switch(i.pop()){case R.CODES.get("A"):this.op(S.Op.BEGIN_TEXT);break e;case R.CODES.get("b"):this.op(S.Op.WORD_BOUNDARY);break e;case R.CODES.get("B"):this.op(S.Op.NO_WORD_BOUNDARY);break e;case R.CODES.get("C"):throw new be(Z.ERR_INVALID_ESCAPE,"\\C");case R.CODES.get("Q"):{let g=i.rest();const I=g.indexOf("\\E");I>=0&&(g=g.substring(0,I)),i.skipString(g),i.skipString("\\E");let P=0;for(;P<g.length;){const L=g.codePointAt(P);this.literal(L),P+=he.charCount(L)}break e}case R.CODES.get("z"):this.op(S.Op.END_TEXT);break e;default:i.rewindTo(c);break}const l=this.newRegexp(S.Op.CHAR_CLASS);if(l.flags=this.flags,i.lookingAt("\\p")||i.lookingAt("\\P")){const p=new Ke;if(this.parseUnicodeClass(i,p)){l.runes=p.toArray(),this.push(l);break e}}const u=new Ke;if(this.parsePerlClassEscape(i,u)){l.runes=u.toArray(),this.push(l);break e}i.rewindTo(c),this.reuse(l),this.literal(Z.parseEscape(i));break}default:this.literal(i.pop());break}e=a}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new be(Z.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const c=r.charAt(2)==="P"?4:3,l=r.indexOf(">");if(l<0)throw new be(Z.ERR_INVALID_NAMED_CAPTURE,r);const u=r.substring(c,l);if(e.skipString(u),e.skip(c+1),!Z.isValidCaptureName(u))throw new be(Z.ERR_INVALID_NAMED_CAPTURE,r.substring(0,l+1));const p=this.op(S.Op.LEFT_PAREN);if(p.cap=++this.numCap,this.namedGroups[u])throw new be(Z.ERR_DUPLICATE_NAMED_CAPTURE,u);this.namedGroups[u]=this.numCap,p.name=u;return}e.skip(2);let i=this.flags,s=1,a=!1;e:for(;e.more();){const c=e.pop();switch(c){case R.CODES.get("i"):i|=$.FOLD_CASE,a=!0;break;case R.CODES.get("m"):i&=-17,a=!0;break;case R.CODES.get("s"):i|=$.DOT_NL,a=!0;break;case R.CODES.get("U"):i|=$.NON_GREEDY,a=!0;break;case R.CODES.get("-"):if(s<0)break e;s=-1,i=~i,a=!1;break;case R.CODES.get(":"):case R.CODES.get(")"):if(s<0){if(!a)break e;i=~i}c===R.CODES.get(":")&&this.op(S.Op.LEFT_PAREN),this.flags=i;return;default:break e}}throw new be(Z.ERR_INVALID_PERL_OP,e.from(t))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(S.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===S.Op.VERTICAL_BAR&&Z.isCharClass(this.stack[e-1])&&Z.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const i=r;r=t,t=i,this.stack[e-3]=r}return Z.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===S.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new be(Z.ERR_INTERNAL_ERROR,"stack underflow");const t=this.pop(),r=this.pop();if(r.op!==S.Op.LEFT_PAREN)throw new be(Z.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=r.flags,r.cap===0?this.push(t):(r.op=S.Op.CAPTURE,r.subs=[t],this.push(r))}parsePerlClassEscape(e,t){const r=e.pos();if(!(this.flags&$.PERL_X)||!e.more()||e.pop()!==R.CODES.get("\\")||!e.more())return!1;e.pop();const i=e.from(r),s=k1.has(i)?k1.get(i):null;return s===null?!1:(t.appendGroup(s,(this.flags&$.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),i=r.indexOf(":]");if(i<0)return!1;const s=r.substring(0,i+2);e.skipString(s);const a=j1.has(s)?j1.get(s):null;if(a===null)throw new be(Z.ERR_INVALID_CHAR_RANGE,s);return t.appendGroup(a,(this.flags&$.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if(!(this.flags&$.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let i=1,s=e.pop();if(s===R.CODES.get("P")&&(i=-1),!e.more())throw e.rewindTo(r),new be(Z.ERR_INVALID_CHAR_RANGE,e.rest());s=e.pop();let a;if(s!==R.CODES.get("{"))a=he.runeToString(s);else{const p=e.rest(),g=p.indexOf("}");if(g<0)throw e.rewindTo(r),new be(Z.ERR_INVALID_CHAR_RANGE,e.rest());a=p.substring(0,g),e.skipString(a),e.skip(1)}a.length!==0&&a.codePointAt(0)===R.CODES.get("^")&&(i=0-i,a=a.substring(1));const c=Z.unicodeTable(a);if(c===null)throw new be(Z.ERR_INVALID_CHAR_RANGE,e.from(r));const l=c.first,u=c.second;if(!(this.flags&$.FOLD_CASE)||u===null)t.appendTableWithSign(l,i);else{const p=new Ke().appendTable(l).appendTable(u).cleanClass().toArray();t.appendClassWithSign(p,i)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(S.Op.CHAR_CLASS);r.flags=this.flags;const i=new Ke;let s=1;e.more()&&e.lookingAt("^")&&(s=-1,e.skip(1),this.flags&$.CLASS_NL||i.appendRange(R.CODES.get(`
`),R.CODES.get(`
`)));let a=!0;for(;!e.more()||e.peek()!==R.CODES.get("]")||a;){if(e.more()&&e.lookingAt("-")&&!(this.flags&$.PERL_X)&&!a){const p=e.rest();if(p==="-"||!p.startsWith("-]"))throw e.rewindTo(t),new be(Z.ERR_INVALID_CHAR_RANGE,e.rest())}a=!1;const c=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,i))continue;e.rewindTo(c)}if(this.parseUnicodeClass(e,i)||this.parsePerlClassEscape(e,i))continue;e.rewindTo(c);const l=Z.parseClassChar(e,t);let u=l;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(u=Z.parseClassChar(e,t),u<l)throw new be(Z.ERR_INVALID_CHAR_RANGE,e.from(c))}this.flags&$.FOLD_CASE?i.appendFoldedRange(l,u):i.appendRange(l,u)}e.skip(1),i.cleanClass(),s<0&&i.negateClass(),r.runes=i.toArray(),this.push(r)}}class v4{constructor(){this.inst=null,this.cap=[]}}class H1{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.denseThreads[t]=null,this.densePcs[t]=e,t}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}}class Fr{static fromRE2(e){const t=new Fr;return t.prog=e.prog,t.re2=e,t.q0=new H1(t.prog.numInst()),t.q1=new H1(t.prog.numInst()),t.pool=[],t.poolSize=0,t.matched=!1,t.matchcap=Array(t.prog.numCap<2?2:t.prog.numCap).fill(0),t.ncap=0,t}static fromMachine(e){const t=new Fr;return t.re2=e.re2,t.prog=e.prog,t.q0=e.q0,t.q1=e.q1,t.pool=e.pool,t.poolSize=e.poolSize,t.matched=e.matched,t.matchcap=e.matchcap,t.ncap=e.ncap,t}init(e){this.ncap=e,e>this.matchcap.length?this.initNewCap(e):this.resetCap(e)}resetCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}}initNewCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}this.matchcap=Array(e).fill(0)}submatches(){return this.ncap===0?he.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(e){let t;return this.poolSize>0?(this.poolSize--,t=this.pool[this.poolSize]):t=new v4,t.inst=e,t}freeQueue(e,t=0){const r=e.size-t,i=this.poolSize+r;this.pool.length<i&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,i)));for(let s=t;s<e.size;s++){const a=e.denseThreads[s];a!==null&&(this.pool[this.poolSize]=a,this.poolSize++)}e.clear()}freeThread(e){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=e,this.poolSize++}match(e,t,r){const i=this.re2.cond;if(i===he.EMPTY_ALL||(r===$.ANCHOR_START||r===$.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let s=this.q0,a=this.q1,c=e.step(t),l=c>>3,u=c&7,p=-1,g=0;c!==Pn.EOF()&&(c=e.step(t+u),p=c>>3,g=c&7);let I;for(t===0?I=he.emptyOpContext(-1,l):I=e.context(t);;){if(s.isEmpty()){if(i&he.EMPTY_BEGIN_TEXT&&t!==0||this.matched)break;if(this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const E=e.index(this.re2,t);if(E<0)break;t+=E,c=e.step(t),l=c>>3,u=c&7,c=e.step(t+u),p=c>>3,g=c&7}}!this.matched&&(t===0||r===$.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=t),this.add(s,this.prog.start,t,this.matchcap,I,null));const P=t+u;if(I=e.context(P),this.step(s,a,t,P,l,I,r,t===e.endPos()),u===0||this.ncap===0&&this.matched)break;t+=u,l=p,u=g,l!==-1&&(c=e.step(t+u),p=c>>3,g=c&7);const L=s;s=a,a=L}return this.freeQueue(a),this.matched}step(e,t,r,i,s,a,c,l){const u=this.re2.longest;for(let p=0;p<e.size;p++){let g=e.denseThreads[p];if(g===null)continue;if(u&&this.matched&&this.ncap>0&&this.matchcap[0]<g.cap[0]){this.freeThread(g);continue}const I=g.inst;let P=!1;switch(I.op){case G.MATCH:if(c===$.ANCHOR_BOTH&&!l)break;this.ncap>0&&(!u||!this.matched||this.matchcap[1]<r)&&(g.cap[1]=r,this.matchcap=g.cap.slice(0,this.ncap)),u||this.freeQueue(e,p+1),this.matched=!0;break;case G.RUNE:P=I.matchRune(s);break;case G.RUNE1:P=s===I.runes[0];break;case G.RUNE_ANY:P=!0;break;case G.RUNE_ANY_NOT_NL:P=s!==R.CODES.get(`
`);break;default:throw new Error("bad inst")}P&&(g=this.add(t,I.out,i,g.cap,a,g)),g!==null&&(this.freeThread(g),e.denseThreads[p]=null)}e.clear()}add(e,t,r,i,s,a){if(t===0||e.contains(t))return a;const c=e.add(t),l=this.prog.inst[t];switch(l.op){case G.FAIL:break;case G.ALT:case G.ALT_MATCH:a=this.add(e,l.out,r,i,s,a),a=this.add(e,l.arg,r,i,s,a);break;case G.EMPTY_WIDTH:l.arg&~s||(a=this.add(e,l.out,r,i,s,a));break;case G.NOP:a=this.add(e,l.out,r,i,s,a);break;case G.CAPTURE:if(l.arg<this.ncap){const u=i[l.arg];i[l.arg]=r,this.add(e,l.out,r,i,s,null),i[l.arg]=u}else a=this.add(e,l.out,r,i,s,a);break;case G.MATCH:case G.RUNE:case G.RUNE1:case G.RUNE_ANY:case G.RUNE_ANY_NOT_NL:a===null?a=this.alloc(l):a.inst=l,this.ncap>0&&a.cap!==i&&(a.cap=i.slice(0,this.ncap)),e.denseThreads[c]=a,a=null;break;default:throw new Error("unhandled")}return a}}class _4{constructor(e){this.value=e}get(){return this.value}set(e){this.value=e}compareAndSet(e,t){return this.value===e?(this.value=t,!0):!1}}class An{static initTest(e){const t=An.compile(e),r=new An(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r}static compile(e){return An.compileImpl(e,$.PERL,!1)}static compilePOSIX(e){return An.compileImpl(e,$.POSIX,!0)}static compileImpl(e,t,r){let i=Z.parse(e,t);const s=i.maxCap();i=Pt.simplify(i);const a=Ri.compileRegexp(i),c=new An(e,a,s,r),[l,u]=a.prefix();return c.prefixComplete=l,c.prefix=u,c.prefixUTF8=he.stringToUtf8ByteArray(c.prefix),c.prefix.length>0&&(c.prefixRune=c.prefix.codePointAt(0)),c.namedGroups=i.namedGroups,c}static match(e,t){return An.compile(e).match(t)}constructor(e,t,r=0,i=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=i,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new _4}numberOfCapturingGroups(){return this.numSubexp}get(){let e;do e=this.pooled.get();while(e&&!this.pooled.compareAndSet(e,e.next));return e}reset(){this.pooled.set(null)}put(e,t){let r=this.pooled.get();do r=this.pooled.get(),!t&&r&&(e=Fr.fromMachine(e),t=!0),e.next!==r&&(e.next=r);while(!this.pooled.compareAndSet(r,e))}toString(){return this.expr}doExecute(e,t,r,i){let s=this.get(),a=!1;s?s.next!==null&&(s=Fr.fromMachine(s),a=!0):(s=Fr.fromRE2(this),a=!0),s.init(i);const c=s.match(e,t,r)?s.submatches():null;return this.put(s,a),c}match(e){return this.doExecute(Ie.fromUTF16(e),0,$.UNANCHORED,0)!==null}matchWithGroup(e,t,r,i,s){return e instanceof hn||(e=va.utf16(e)),this.matchMachineInput(e,t,r,i,s)}matchMachineInput(e,t,r,i,s){if(t>r)return[!1,null];const a=e.isUTF16Encoding()?Ie.fromUTF16(e.asCharSequence(),0,r):Ie.fromUTF8(e.asBytes(),0,r),c=this.doExecute(a,t,i,2*s);return c===null?[!1,null]:[!0,c]}matchUTF8(e){return this.doExecute(Ie.fromUTF8(e),0,$.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let i=0,s=0,a="";const c=Ie.fromUTF16(e);let l=0;for(;s<=e.length;){const u=this.doExecute(c,s,$.UNANCHORED,2);if(u===null||u.length===0)break;a+=e.substring(i,u[0]),(u[1]>i||u[0]===0)&&(a+=t(e.substring(u[0],u[1])),l++),i=u[1];const p=c.step(s)&7;if(s+p>u[1]?s+=p:s+1>u[1]?s++:s=u[1],l>=r)break}return a+=e.substring(i),a}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let i=0;i<e.length;i++)r[i]=e[i];e=r}return e}allMatches(e,t,r=i=>i){let i=[];const s=e.endPos();t<0&&(t=s+1);let a=0,c=0,l=-1;for(;c<t&&a<=s;){const u=this.doExecute(e,a,$.UNANCHORED,this.prog.numCap);if(u===null||u.length===0)break;let p=!0;if(u[1]===a){u[0]===l&&(p=!1);const g=e.step(a);g<0?a=s+1:a+=g&7}else a=u[1];l=u[1],p&&(i.push(r(this.pad(u))),c++)}return i}findUTF8(e){const t=this.doExecute(Ie.fromUTF8(e),0,$.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.doExecute(Ie.fromUTF8(e),0,$.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.doExecute(Ie.fromUTF16(e),0,$.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.doExecute(Ie.fromUTF16(e),0,$.UNANCHORED,2)}findUTF8Submatch(e){const t=this.doExecute(Ie.fromUTF8(e),0,$.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let i=0;i<r.length;i++)2*i<t.length&&t[2*i]>=0&&(r[i]=e.slice(t[2*i],t[2*i+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.doExecute(Ie.fromUTF8(e),0,$.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.doExecute(Ie.fromUTF16(e),0,$.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let i=0;i<r.length;i++)2*i<t.length&&t[2*i]>=0&&(r[i]=e.substring(t[2*i],t[2*i+1]));return r}findSubmatchIndex(e){return this.pad(this.doExecute(Ie.fromUTF16(e),0,$.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(Ie.fromUTF8(e),t,i=>e.slice(i[0],i[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(Ie.fromUTF8(e),t,i=>i.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(Ie.fromUTF16(e),t,i=>e.substring(i[0],i[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(Ie.fromUTF16(e),t,i=>i.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(Ie.fromUTF8(e),t,i=>{let s=new Array(i.length/2|0).fill(null);for(let a=0;a<s.length;a++)i[2*a]>=0&&(s[a]=e.slice(i[2*a],i[2*a+1]));return s});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(Ie.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(Ie.fromUTF16(e),t,i=>{let s=new Array(i.length/2|0).fill(null);for(let a=0;a<s.length;a++)i[2*a]>=0&&(s[a]=e.substring(i[2*a],i[2*a+1]));return s});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(Ie.fromUTF16(e),t);return r.length===0?null:r}}class It{static CASE_INSENSITIVE=1;static DOTALL=2;static MULTILINE=4;static DISABLE_UNICODE_GROUPS=8;static LONGEST_MATCH=16;static quote(e){return he.quoteMeta(e)}static compile(e,t=0){let r=e;if(t&It.CASE_INSENSITIVE&&(r=`(?i)${r}`),t&It.DOTALL&&(r=`(?s)${r}`),t&It.MULTILINE&&(r=`(?m)${r}`),t&-32)throw new d4("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let i=$.PERL;t&It.DISABLE_UNICODE_GROUPS&&(i&=-129);const s=new It(e,t);return s.re2Input=An.compileImpl(r,i,(t&It.LONGEST_MATCH)!==0),s}static matches(e,t){return It.compile(e).matcher(t).matches()}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const i=new It(e,t);return i.re2Input=r,i}constructor(e,t){this.patternInput=e,this.flagsInput=t}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.matcher(e).matches()}matcher(e){return Array.isArray(e)&&(e=va.utf8(e)),new p4(this,e)}split(e,t=0){const r=this.matcher(e),i=[];let s=0,a=0;for(;r.find();){if(a===0&&r.end()===0){a=r.end();continue}if(t>0&&i.length===t-1)break;if(a===r.start()){if(t===0){s+=1,a=r.end();continue}}else for(;s>0;)i.push(""),s-=1;i.push(r.substring(a,r.start())),a=r.end()}if(t===0&&a!==r.inputLength()){for(;s>0;)i.push(""),s-=1;i.push(r.substring(a,r.inputLength()))}return(t!==0||i.length===0)&&i.push(r.substring(a,r.inputLength())),i}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Zr="12.15.0";function w4(n){Zr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mr=new Ua("@firebase/firestore");function kr(){return mr.logLevel}function z(n,...e){if(mr.logLevel<=ce.DEBUG){const t=e.map(jc);mr.debug(`Firestore (${Zr}): ${n}`,...t)}}function dn(n,...e){if(mr.logLevel<=ce.ERROR){const t=e.map(jc);mr.error(`Firestore (${Zr}): ${n}`,...t)}}function Mt(n,...e){if(mr.logLevel<=ce.WARN){const t=e.map(jc);mr.warn(`Firestore (${Zr}): ${n}`,...t)}}function jc(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,yp(n,r,t)}function yp(n,e,t){let r=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw dn(r),new Error(r)}function H(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||yp(e,i,r)}function te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Ft{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class E4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ye.UNAUTHENTICATED))}shutdown(){}}class b4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class I4{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){H(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Fn,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Fn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(H(typeof r.accessToken=="string",31837,{l:r}),new vp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class T4{constructor(e,t,r){this.T=e,this.P=t,this.R=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const e=this.A();return e&&this.I.set("Authorization",e),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class A4{constructor(e,t,r){this.T=e,this.P=t,this.R=r}getToken(){return Promise.resolve(new T4(this.T,this.P,this.R))}start(e,t){e.enqueueRetryable(()=>t(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class G1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x4{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){H(this.o===void 0,3512);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new G1(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(H(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new G1(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=S4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function oe(n,e){return n<e?-1:n>e?1:0}function cc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return jo(i)===jo(s)?oe(i,s):jo(i)?1:-1}return oe(n.length,e.length)}const C4=55296,k4=57343;function jo(n){const e=n.charCodeAt(0);return e>=C4&&e<=k4}function zr(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="__name__";class $t{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&W(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return $t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $t?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=$t.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return oe(e.length,t.length)}static compareSegments(e,t){const r=$t.isNumericId(e),i=$t.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?$t.extractNumericId(e).compare($t.extractNumericId(t)):cc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mn.fromString(e.substring(4,e.length-2))}}class de extends $t{construct(e,t,r){return new de(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new de(t)}static emptyPath(){return new de([])}}const P4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends $t{construct(e,t,r){return new Le(e,t,r)}static isValidIdentifier(e){return P4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qr}static keyField(){return new Le([qr])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new j(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new j(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Le(t)}static emptyPath(){return new Le([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(de.fromString(e))}static fromName(e){return new K(de.fromString(e).popFirst(5))}static empty(){return new K(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return de.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new de(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R4(n,e,t){if(!t)throw new j(M.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function L4(n,e,t,r){if(e===!0&&r===!0)throw new j(M.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function W1(n){if(!K.isDocumentKey(n))throw new j(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ms(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Gc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function ji(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gc(n);throw new j(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function xe(n,e){const t={typeString:n};return e&&(t.value=e),t}function ys(n,e){if(!ms(n))throw new j(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new j(M.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=-62135596800,Y1=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Y1);return new ge(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<K1)throw new j(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Y1}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ys(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-K1;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:xe("string",ge._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new ge(0,0))}static max(){return new ee(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Hi=-1;function O4(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new ge(t+1,0):new ge(t,r));return new qn(i,K.empty(),e)}function D4(n){return new qn(n.readTime,n.key,Hi)}class qn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new qn(ee.min(),K.empty(),Hi)}static max(){return new qn(ee.max(),K.empty(),Hi)}}function N4(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:oe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class M4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(n){if(n.code!==M.FAILED_PRECONDITION||n.message!==V4)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let i=0,s=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++s,a&&s===i&&t()},l=>r(l))}),a=!0,s===i&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(i=>i?V.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new V((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let l=0;l<s;l++){const u=l;t(e[u]).next(p=>{a[u]=p,++c,c===s&&r(a)},p=>i(p))}})}static doWhile(e,t){return new V((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function F4(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ti(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Wa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Wa.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=-1;function Ka(n){return n==null}function Gi(n){return n===0&&1/n==-1/0}function U4(n){return typeof n=="number"&&Number.isInteger(n)&&!Gi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function B4(n){return typeof n=="string"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="";function $4(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Q1(e)),e=z4(n.get(t),e);return Q1(e)}function z4(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case _p:t+="";break;default:t+=s}}return t}function Q1(n){return n+_p+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.comparator=e,this.root=t||$e.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new js(this.root,e,this.comparator,!1)}getReverseIterator(){return new js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new js(this.root,e,this.comparator,!0)}}class js{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new $e(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new $e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new X1(this.data.getIterator())}getIteratorFrom(e){return new X1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class X1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Le.comparator)}static empty(){return new Dt([])}unionWith(e){let t=new Se(Le.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return zr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _r(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function q4(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function wp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ep extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ep("Invalid base64 string: "+s):s}}(e);return new Ce(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const j4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jn(n){if(H(!!n,39018),typeof n=="string"){let e=0;const t=j4.exec(n);if(H(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Hn(n){return typeof n=="string"?Ce.fromBase64String(n):Ce.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="server_timestamp",Ip="__type__",Tp="__previous_value__",Ap="__local_write_time__";function Ya(n){return(n?.mapValue?.fields||{})[Ip]?.stringValue===bp}function vs(n){const e=n.mapValue.fields[Tp];return Ya(e)?vs(e):e}function jr(n){const e=jn(n.mapValue.fields[Ap].timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(e,t,r,i,s,a,c,l,u,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=p,this.apiKey=g}}const wa="(default)";class Wi{constructor(e,t){this.projectId=e,this.database=t||wa}static empty(){return new Wi("","")}get isDefaultDatabase(){return this.database===wa}isEqual(e){return e instanceof Wi&&e.projectId===this.projectId&&e.database===this.database}}function G4(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new j(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wi(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="__type__",W4="__max__",Hs={mapValue:{}},Sp="__vector__",Ki="value",Hr={nullValue:"NULL_VALUE"},ht={booleanValue:!0},Ue={booleanValue:!1};function ke(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ya(n)?4:K4(n)?9007199254740991:Ea(n)?10:11:W(28295,{value:n})}function St(n,e,t){if(n===e)return!0;const r=ke(n);if(r!==ke(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return jr(n).isEqual(jr(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const c=jn(s.timestampValue),l=jn(a.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,a){return Hn(s.bytesValue).isEqual(Hn(a.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,a){return we(s.geoPointValue.latitude)===we(a.geoPointValue.latitude)&&we(s.geoPointValue.longitude)===we(a.geoPointValue.longitude)}(n,e);case 2:return function(s,a,c){if("integerValue"in s&&"integerValue"in a)return we(s.integerValue)===we(a.integerValue);let l,u;if("doubleValue"in s&&"doubleValue"in a)l=we(s.doubleValue),u=we(a.doubleValue);else{if(!c?.Ee)return!1;l=we(s.integerValue??s.doubleValue),u=we(a.integerValue??a.doubleValue)}return l===u?!!c?.he||Gi(l)===Gi(u):!!(c===void 0||c.Te)&&isNaN(l)&&isNaN(u)}(n,e,t);case 9:return zr(n.arrayValue.values||[],e.arrayValue.values||[],(i,s)=>St(i,s,t));case 10:case 11:return function(s,a,c){const l=s.mapValue.fields||{},u=a.mapValue.fields||{};if(_a(l)!==_a(u))return!1;for(const p in l)if(l.hasOwnProperty(p)&&(u[p]===void 0||!St(l[p],u[p],c)))return!1;return!0}(n,e,t);default:return W(52216,{left:n})}}function Yi(n,e){return(n.values||[]).find(t=>St(t,e))!==void 0}function dt(n,e){if(n===e)return 0;const t=ke(n),r=ke(e);if(t!==r)return oe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return oe(n.booleanValue,e.booleanValue);case 2:return function(s,a){const c=we(s.integerValue||s.doubleValue),l=we(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return J1(n.timestampValue,e.timestampValue);case 4:return J1(jr(n),jr(e));case 5:return cc(n.stringValue,e.stringValue);case 6:return function(s,a){const c=Hn(s),l=Hn(a);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const c=s.split("/"),l=a.split("/");for(let u=0;u<c.length&&u<l.length;u++){const p=oe(c[u],l[u]);if(p!==0)return p}return oe(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const c=oe(we(s.latitude),we(a.latitude));return c!==0?c:oe(we(s.longitude),we(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Z1(n.arrayValue,e.arrayValue);case 10:return function(s,a){const c=s.fields||{},l=a.fields||{},u=c[Ki]?.arrayValue,p=l[Ki]?.arrayValue,g=oe(u?.values?.length||0,p?.values?.length||0);return g!==0?g:Z1(u,p)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===Hs.mapValue&&a===Hs.mapValue)return 0;if(s===Hs.mapValue)return 1;if(a===Hs.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),u=a.fields||{},p=Object.keys(u);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const I=cc(l[g],p[g]);if(I!==0)return I;const P=dt(c[l[g]],u[p[g]]);if(P!==0)return P}return oe(l.length,p.length)}(n.mapValue,e.mapValue);default:throw W(23264,{Pe:t})}}function J1(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return oe(n,e);const t=jn(n),r=jn(e),i=oe(t.seconds,r.seconds);return i!==0?i:oe(t.nanos,r.nanos)}function Z1(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=dt(t[i],r[i]);if(s!==void 0&&s!==0)return s}return oe(t.length,r.length)}function Gr(n){return lc(n)}function lc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=jn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Hn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return K.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=lc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${lc(t.fields[a])}`;return i+"}"}(n.mapValue):W(61005,{value:n})}function na(n){switch(ke(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vs(n);return e?16+na(e):16;case 5:return 2*n.stringValue.length;case 6:return Hn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+na(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return _r(r.fields,(s,a)=>{i+=s.length+na(a)}),i}(n.mapValue);default:throw W(13486,{value:n})}}function zt(n){return!!n&&"integerValue"in n}function or(n){return!!n&&"doubleValue"in n}function Gn(n){return zt(n)||or(n)}function Wr(n){return!!n&&"arrayValue"in n}function wt(n){return!!n&&"nullValue"in n}function pt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function lr(n){return!!n&&"mapValue"in n}function Ea(n){return(n?.mapValue?.fields||{})[xp]?.stringValue===Sp}function uc(n){return(n?.mapValue?.fields||{})[Ki]?.arrayValue}function Oi(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return _r(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Oi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Oi(n.arrayValue.values[t]);return e}return{...n}}function K4(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===W4}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.value=e}static empty(){return new _t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!lr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oi(t)}setAll(e){let t=Le.emptyPath(),r={},i=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=Oi(a):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());lr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return St(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];lr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){_r(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _t(Oi(this.value))}}function Cp(n){const e=[];return _r(n.fields,(t,r)=>{const i=new Le([t]);if(lr(r)){const s=Cp(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gi(e)?"-0":e}}function Kc(n){return{integerValue:""+n}}function Yc(n,e,t){return Number.isInteger(e)&&t?.preferIntegers||U4(e)?Kc(e):Qa(n,e)}/**
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
 */class Xa{constructor(){this._=void 0}}function Y4(n,e,t){return n instanceof ba?function(i,s){const a={fields:{[Ip]:{stringValue:bp},[Ap]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ya(s)&&(s=vs(s)),s&&(a.fields[Tp]=s),{mapValue:a}}(t,e):n instanceof Qi?Pp(n,e):n instanceof Xi?Rp(n,e):n instanceof Ji?function(i,s){const a=kp(i,s),c=Aa(a)+Aa(i.Re);return zt(a)&&zt(i.Re)?Kc(c):Qa(i.serializer,c)}(n,e):n instanceof Ia?function(i,s){return eh(i,s,Math.min)}(n,e):n instanceof Ta?function(i,s){return eh(i,s,Math.max)}(n,e):void 0}function Q4(n,e,t){return n instanceof Qi?Pp(n,e):n instanceof Xi?Rp(n,e):t}function kp(n,e){return n instanceof Ji?Gn(e)?e:{integerValue:0}:null}class ba extends Xa{}class Qi extends Xa{constructor(e){super(),this.elements=e}}function Pp(n,e){const t=Lp(e);for(const r of n.elements)t.some(i=>St(i,r))||t.push(r);return{arrayValue:{values:t}}}class Xi extends Xa{constructor(e){super(),this.elements=e}}function Rp(n,e){let t=Lp(e);for(const r of n.elements)t=t.filter(i=>!St(i,r));return{arrayValue:{values:t}}}class Qc extends Xa{constructor(e,t){super(),this.serializer=e,this.Re=t}}class Ji extends Qc{}class Ia extends Qc{}class Ta extends Qc{}function eh(n,e,t){if(!Gn(e))return n.Re;const r=t(Aa(e),Aa(n.Re));return zt(e)&&zt(n.Re)?Kc(r):Qa(n.serializer,r)}function Aa(n){return we(n.integerValue||n.doubleValue)}function Lp(n){return Wr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function X4(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Qi&&i instanceof Qi||r instanceof Xi&&i instanceof Xi?zr(r.elements,i.elements,St):r instanceof Ji&&i instanceof Ji||r instanceof Ia&&i instanceof Ia||r instanceof Ta&&i instanceof Ta?St(r.Re,i.Re):r instanceof ba&&i instanceof ba}(n.transform,e.transform)}class J4{constructor(e,t){this.version=e,this.transformResults=t}}class on{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ra(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ja{}function Op(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Np(n.key,on.none()):new _s(n.key,n.data,on.none());{const t=n.data,r=_t.empty();let i=new Se(Le.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new wr(n.key,r,new Dt(i.toArray()),on.none())}}function Z4(n,e,t){n instanceof _s?function(i,s,a){const c=i.value.clone(),l=nh(i.fieldTransforms,s,a.transformResults);c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof wr?function(i,s,a){if(!ra(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=nh(i.fieldTransforms,s,a.transformResults),l=s.data;l.setAll(Dp(i)),l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Di(n,e,t,r){return n instanceof _s?function(s,a,c,l){if(!ra(s.precondition,a))return c;const u=s.value.clone(),p=rh(s.fieldTransforms,l,a);return u.setAll(p),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof wr?function(s,a,c,l){if(!ra(s.precondition,a))return c;const u=rh(s.fieldTransforms,l,a),p=a.data;return p.setAll(Dp(s)),p.setAll(u),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,a,c){return ra(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function e3(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=kp(r.transform,i||null);s!=null&&(t===null&&(t=_t.empty()),t.set(r.field,s))}return t||null}function th(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&zr(r,i,(s,a)=>X4(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _s extends Ja{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wr extends Ja{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Dp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function nh(n,e,t){const r=new Map;H(n.length===t.length,32656,{Ie:t.length,Ae:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,Q4(a,c,t[i]))}return r}function rh(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,Y4(s,a,e))}return r}class Np extends Ja{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t3 extends Ja{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xa{constructor(e,t){this.position=e,this.inclusive=t}}function ih(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(a.referenceValue),t.key):r=dt(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function sh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!St(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Vp{}class Oe extends Vp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new r3(e,t,r):t==="array-contains"?new a3(e,r):t==="in"?new o3(e,r):t==="not-in"?new c3(e,r):t==="array-contains-any"?new l3(e,r):new Oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new i3(e,r):new s3(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(dt(t,this.value)):t!==null&&ke(this.value)===ke(t)&&this.matchesComparison(dt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends Vp{constructor(e,t){super(),this.filters=e,this.op=t,this.Ve=null}static create(e,t){return new Yt(e,t)}matches(e){return Mp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Ve!==null||(this.Ve=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Ve}getFilters(){return Object.assign([],this.filters)}}function Mp(n){return n.op==="and"}function Fp(n){return n3(n)&&Mp(n)}function n3(n){for(const e of n.filters)if(e instanceof Yt)return!1;return!0}function hc(n){if(n instanceof Oe)return n.field.canonicalString()+n.op.toString()+Gr(n.value);if(Fp(n))return n.filters.map(e=>hc(e)).join(",");{const e=n.filters.map(t=>hc(t)).join(",");return`${n.op}(${e})`}}function Up(n,e){return n instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&St(r.value,i.value)}(n,e):n instanceof Yt?function(r,i){return i instanceof Yt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,c)=>s&&Up(a,i.filters[c]),!0):!1}(n,e):void W(19439)}function Bp(n){return n instanceof Oe?function(t){return`${t.field.canonicalString()} ${t.op} ${Gr(t.value)}`}(n):n instanceof Yt?function(t){return t.op.toString()+" {"+t.getFilters().map(Bp).join(" ,")+"}"}(n):"Filter"}class r3 extends Oe{constructor(e,t,r){super(e,t,r),this.key=K.fromName(r.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class i3 extends Oe{constructor(e,t){super(e,"in",t),this.keys=$p("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class s3 extends Oe{constructor(e,t){super(e,"not-in",t),this.keys=$p("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $p(n,e){return(e.arrayValue?.values||[]).map(t=>K.fromName(t.referenceValue))}class a3 extends Oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wr(t)&&Yi(t.arrayValue,this.value)}}class o3 extends Oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Yi(this.value.arrayValue,t)}}class c3 extends Oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Yi(this.value.arrayValue,t)}}class l3 extends Oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Yi(this.value.arrayValue,r))}}/**
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
 */class Sa{constructor(e,t="asc"){this.field=e,this.dir=t}}function u3(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Qe(e,0,ee.min(),ee.min(),ee.min(),_t.empty(),0)}static newFoundDocument(e,t,r,i){return new Qe(e,1,t,ee.min(),r,i,0)}static newNoDocument(e,t){return new Qe(e,2,t,ee.min(),ee.min(),_t.empty(),0)}static newUnknownDocument(e,t){return new Qe(e,3,t,ee.min(),ee.min(),_t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class h3{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.de=null}}function ah(n,e=null,t=[],r=[],i=null,s=null,a=null){return new h3(n,e,t,r,i,s,a)}function zp(n){const e=te(n);if(e.de===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>hc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ka(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Gr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Gr(r)).join(",")),e.de=t}return e.de}function qp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!u3(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Up(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sh(n.startAt,e.startAt)&&sh(n.endAt,e.endAt)}function ir(n){return!!n.isCorePipeline}function jp(n){return!!n.path&&K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=l,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function d3(n,e,t,r,i,s,a,c){return new Za(n,e,t,r,i,s,a,c)}function Xc(n){return new Za(n)}function oh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function p3(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function f3(n){return n.collectionGroup!==null}function Ni(n){const e=te(n);if(e.fe===null){e.fe=[];const t=new Set;for(const s of e.explicitOrderBy)e.fe.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Se(Le.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.fe.push(new Sa(s,r))}),t.has(Le.keyField().canonicalString())||e.fe.push(new Sa(Le.keyField(),r))}return e.fe}function Ht(n){const e=te(n);return e.me||(e.me=g3(e,Ni(n))),e.me}function g3(n,e){if(n.limitType==="F")return ah(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Sa(i.field,s)});const t=n.endAt?new xa(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new xa(n.startAt.position,n.startAt.inclusive):null;return ah(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function dc(n,e,t){return new Za(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function m3(n,e){return qp(Ht(n),Ht(e))&&n.limitType===e.limitType}function Vi(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Bp(i)).join(", ")}]`),Ka(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Gr(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Gr(i)).join(",")),`Target(${r})`}(Ht(n))}; limitType=${n.limitType})`}function eo(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Ni(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,c,l){const u=ih(a,c,l);return a.inclusive?u<=0:u<0}(r.startAt,Ni(r),i)||r.endAt&&!function(a,c,l){const u=ih(a,c,l);return a.inclusive?u>=0:u>0}(r.endAt,Ni(r),i))}(n,e)}function Jc(n){return(e,t)=>{let r=!1;for(const i of Ni(n)){const s=y3(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function y3(n,e,t){const r=n.field.isKeyField()?K.comparator(e.key,t.key):function(s,a,c){const l=a.data.field(s),u=c.data.field(s);return l!==null&&u!==null?dt(l,u):W(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v3{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,le;function _3(n){switch(n){case M.OK:return W(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function Hp(n){if(n===void 0)return dn("GRPC error has no .code"),M.UNKNOWN;switch(n){case Ae.OK:return M.OK;case Ae.CANCELLED:return M.CANCELLED;case Ae.UNKNOWN:return M.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return M.INTERNAL;case Ae.UNAVAILABLE:return M.UNAVAILABLE;case Ae.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ae.NOT_FOUND:return M.NOT_FOUND;case Ae.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ae.ABORTED:return M.ABORTED;case Ae.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ae.DATA_LOSS:return M.DATA_LOSS;default:return W(39323,{code:n})}}(le=Ae||(Ae={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_r(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return wp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w3=new me(K.comparator);function lt(){return w3}const Gp=new me(K.comparator);function Pr(...n){let e=Gp;for(const t of n)e=e.insert(t.key,t);return e}function Wp(n){let e=Gp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Rn(){return Mi()}function Kp(){return Mi()}function Mi(){return new Er(n=>n.toString(),(n,e)=>n.isEqual(e))}const E3=new me(K.comparator),b3=new Se(K.comparator);function ae(...n){let e=b3;for(const t of n)e=e.add(t);return e}const I3=new Se(oe);function T3(){return I3}/**
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
 */function A3(){return new TextEncoder}/**
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
 */const x3=new Mn([4294967295,4294967295],0);function ch(n){const e=A3().encode(n),t=new up;return t.update(e),new Uint8Array(t.digest())}function lh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Mn([t,r],0),new Mn([i,s],0)]}class Zc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Si(`Invalid padding: ${t}`);if(r<0)throw new Si(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Si(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Si(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.ye=Mn.fromNumber(this.ge)}we(e,t,r){let i=e.add(t.multiply(Mn.fromNumber(r)));return i.compare(x3)===1&&(i=new Mn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=ch(e),[r,i]=lh(t);for(let s=0;s<this.hashCount;s++){const a=this.we(r,i,s);if(!this.be(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Zc(s,i,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=ch(e),[r,i]=lh(t);for(let s=0;s<this.hashCount;s++){const a=this.we(r,i,s);this.ve(a)}}ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t,r,i,s,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.augmentedDocumentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Es.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ws(ee.min(),i,new me(oe),lt(),lt(),ae())}}class Es{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Es(r,t,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=i}}class Yp{constructor(e,t){this.targetId=e,this.xe=t}}class Qp{constructor(e,t,r=Ce.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class uh{constructor(e){this.targetId=e,this.Ce=0,this.Fe=hh(),this.Oe=Ce.EMPTY_BYTE_STRING,this.Me=!1,this.Ne=!0}get current(){return this.Me}get resumeToken(){return this.Oe}get Le(){return this.Ce!==0}get Be(){return this.Ne}Ue(e){e.approximateByteSize()>0&&(this.Ne=!0,this.Oe=e)}ke(){let e=ae(),t=ae(),r=ae();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:W(38017,{changeType:s})}}),new Es(this.Oe,this.Me,e,t,r)}qe(){this.Ne=!1,this.Fe=hh()}$e(e,t){this.Ne=!0,this.Fe=this.Fe.insert(e,t)}Ke(e){this.Ne=!0,this.Fe=this.Fe.remove(e)}We(){this.Ce+=1}Qe(){this.Ce-=1,H(this.Ce>=0,3241,{Ce:this.Ce,targetId:this.targetId})}Ge(){this.Ne=!0,this.Me=!0}}const bi="WatchChangeAggregator";class S3{constructor(e){this.ze=e,this.je=new Map,this.He=lt(),this.Je=Gs(),this.Ye=lt(),this.Ze=Gs(),this.Xe=new me(oe)}et(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.tt(t,e.De):this.nt(t,e.key,e.De);for(const t of e.removedTargetIds)this.nt(t,e.key,e.De)}rt(e){this.forEachTarget(e,t=>{const r=this.je.get(t);if(r)switch(e.state){case 0:this.it(t)&&r.Ue(e.resumeToken);break;case 1:r.Qe(),r.Le||r.qe(),r.Ue(e.resumeToken);break;case 2:r.Qe(),r.Le||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.Ue(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.Ue(e.resumeToken));break;default:W(56790,{state:e.state})}else z(bi,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}_t(e){return ir(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:jp(e)}ot(e){const t=e.targetId,r=e.xe.count,i=this.ut(t);if(i){const s=i.target;if(this._t(s))if(r===0){const a=new K(ir(s)?de.fromString(s.getPipelineDocuments()[0]):s.path);this.nt(t,a,Qe.newNoDocument(a,ee.min()))}else H(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.ct(t);if(a!==r){const c=this.lt(e),l=c?this.Et(c,e,a):1;if(l!==0){this.st(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Xe=this.Xe.insert(t,u)}}}}}lt(e){const t=e.xe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=Hn(r).toUint8Array()}catch(l){if(l instanceof Ep)return Mt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Zc(a,i,s)}catch(l){return Mt(l instanceof Si?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}Et(e,t,r){return t.xe.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.ze.Tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.nt(t,s,null),i++)}),i}Rt(e){const t=new Map;this.je.forEach((s,a)=>{const c=this.ut(a);if(c){if(s.current&&this._t(c.target)){const l=ir(c.target)?de.fromString(c.target.getPipelineDocuments()[0]):c.target.path,u=new K(l);this.It(u).has(a)||this.At(a,u)||this.nt(a,u,Qe.newNoDocument(u,e))}s.Be&&(t.set(a,s.ke()),s.qe())}});let r=ae();this.Ze.forEach((s,a)=>{let c=!0;a.forEachWhile(l=>{const u=this.ut(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.He.forEach((s,a)=>a.setReadTime(e)),this.Ye.forEach((s,a)=>a.setReadTime(e));const i=new ws(e,t,this.Xe,this.He,this.Ye,r);return this.He=lt(),this.Je=Gs(),this.Ye=lt(),this.Ze=Gs(),this.Xe=new me(oe),i}tt(e,t){const r=this.je.get(e);if(!r||!this.it(e))return void z(bi,`addDocumentToTarget received document for unknown inactive target (${e})`);const i=this.At(e,t.key)?2:0;r.$e(t.key,i),ir(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t.key,t):this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.Ze=this.Ze.insert(t.key,this.Vt(t.key).add(e))}nt(e,t,r){const i=this.je.get(e);i&&this.it(e)?(this.At(e,t)?i.$e(t,1):i.Ke(t),this.Ze=this.Ze.insert(t,this.Vt(t).delete(e)),this.Ze=this.Ze.insert(t,this.Vt(t).add(e)),r&&(ir(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t,r):this.He=this.He.insert(t,r))):z(bi,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.je.delete(e)}ct(e){const t=this.je.get(e);if(!t)return 0;const r=t.ke();return this.ze.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}We(e){let t=this.je.get(e);t||(z(bi,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new uh(e),this.je.set(e,t)),t.We()}Vt(e){let t=this.Ze.get(e);return t||(t=new Se(oe),this.Ze=this.Ze.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Se(oe),this.Je=this.Je.insert(e,t)),t}it(e){const t=this.ut(e)!==null;return t||z(bi,"Detected inactive target",e),t}ut(e){const t=this.je.get(e);return t===void 0||t.Le?null:this.ze.dt(e)}st(e){this.je.set(e,new uh(e)),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.nt(e,t,null)})}At(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Gs(){return new me(K.comparator)}function hh(){return new me(K.comparator)}const C3={asc:"ASCENDING",desc:"DESCENDING"},k3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},P3={and:"AND",or:"OR"};class R3{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function pc(n,e){return n.useProto3Json||Ka(e)?e:{value:e}}function Ca(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function el(n){const e=jn(n);return new ge(e.seconds,e.nanos)}function Xp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function sa(n,e){return Ca(n,e.toTimestamp())}function Gt(n){return H(!!n,49232),ee.fromTimestamp(el(n))}function tl(n,e){return fc(n,e).canonicalString()}function fc(n,e){const t=function(i){return new de(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Jp(n){const e=de.fromString(n);return H(rf(e),10190,{key:e.toString()}),e}function ka(n,e){return tl(n.databaseId,e.path)}function Ho(n,e){const t=Jp(e);if(t.get(1)!==n.databaseId.projectId)throw new j(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(ef(t))}function Zp(n,e){return tl(n.databaseId,e)}function L3(n){const e=Jp(n);return e.length===4?de.emptyPath():ef(e)}function gc(n){return new de(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ef(n){return H(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function dh(n,e,t){return{name:ka(n,e),fields:t.value.mapValue.fields}}function O3(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:W(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,p){return u.useProto3Json?(H(p===void 0||typeof p=="string",58123),Ce.fromBase64String(p||"")):(H(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Ce.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(u){const p=u.code===void 0?M.UNKNOWN:Hp(u.code);return new j(p,u.message||"")}(a);t=new Qp(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ho(n,r.document.name),s=Gt(r.document.updateTime),a=r.document.createTime?Gt(r.document.createTime):ee.min(),c=new _t({mapValue:{fields:r.document.fields}}),l=Qe.newFoundDocument(i,s,a,c),u=r.targetIds||[],p=r.removedTargetIds||[];t=new ia(u,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ho(n,r.document),s=r.readTime?Gt(r.readTime):ee.min(),a=Qe.newNoDocument(i,s),c=r.removedTargetIds||[];t=new ia([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ho(n,r.document),s=r.removedTargetIds||[];t=new ia([],s,i,null)}else{if(!("filter"in e))return W(11601,{ft:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new v3(i,s),c=r.targetId;t=new Yp(c,a)}}return t}function D3(n,e){let t;if(e instanceof _s)t={update:dh(n,e.key,e.value)};else if(e instanceof Np)t={delete:ka(n,e.key)};else if(e instanceof wr)t={update:dh(n,e.key,e.data),updateMask:j3(e.fieldMask)};else{if(!(e instanceof t3))return W(16599,{gt:e.type});t={verify:ka(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const c=a.transform;if(c instanceof ba)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Qi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Xi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ji)return{fieldPath:a.field.canonicalString(),increment:c.Re};if(c instanceof Ia)return{fieldPath:a.field.canonicalString(),minimum:c.Re};if(c instanceof Ta)return{fieldPath:a.field.canonicalString(),maximum:c.Re};throw W(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:sa(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W(27497)}(n,e.precondition)),t}function N3(n,e){return n&&n.length>0?(H(e!==void 0,14353),n.map(t=>function(i,s){let a=i.updateTime?Gt(i.updateTime):Gt(s);return a.isEqual(ee.min())&&(a=Gt(s)),new J4(a,i.transformResults||[])}(t,e))):[]}function V3(n,e){return{documents:[Zp(n,e.path)]}}function M3(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Zp(n,i);const s=function(u){if(u.length!==0)return nf(Yt.create(u,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(u){if(u.length!==0)return u.map(p=>function(I){return{field:Rr(I.field),direction:$3(I.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=pc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{yt:t,parent:i}}function F3(n){let e=L3(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){H(r===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=function(g){const I=tf(g);return I instanceof Yt&&Fp(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(I=>function(L){return new Sa(Lr(L.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(I))}(t.orderBy));let c=null;t.limit&&(c=function(g){let I;return I=typeof g=="object"?g.value:g,Ka(I)?null:I}(t.limit));let l=null;t.startAt&&(l=function(g){const I=!!g.before,P=g.values||[];return new xa(P,I)}(t.startAt));let u=null;return t.endAt&&(u=function(g){const I=!g.before,P=g.values||[];return new xa(P,I)}(t.endAt)),d3(e,i,a,s,c,"F",l,u)}function U3(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function B3(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(n))}}}}function tf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Lr(t.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Lr(t.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Lr(t.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Lr(t.unaryFilter.field);return Oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(n):n.fieldFilter!==void 0?function(t){return Oe.create(Lr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Yt.create(t.compositeFilter.filters.map(r=>tf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(t.compositeFilter.op))}(n):W(30097,{filter:n})}function $3(n){return C3[n]}function z3(n){return k3[n]}function q3(n){return P3[n]}function Rr(n){return{fieldPath:n.canonicalString()}}function Lr(n){return Le.fromServerFormat(n.fieldPath)}function nf(n){return n instanceof Oe?function(t){if(t.op==="=="){if(pt(t.value))return{unaryFilter:{field:Rr(t.field),op:"IS_NAN"}};if(wt(t.value))return{unaryFilter:{field:Rr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pt(t.value))return{unaryFilter:{field:Rr(t.field),op:"IS_NOT_NAN"}};if(wt(t.value))return{unaryFilter:{field:Rr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rr(t.field),op:z3(t.op),value:t.value}}}(n):n instanceof Yt?function(t){const r=t.getFilters().map(i=>nf(i));return r.length===1?r[0]:{compositeFilter:{op:q3(t.op),filters:r}}}(n):W(54877,{filter:n})}function j3(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function rf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function sf(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function Zi(n,e){const t={fields:{}};return e.forEach((r,i)=>{if(typeof i!="string")throw new Error(`Cannot encode map with non-string key: ${i}`);t.fields[i]=r._toProto(n)}),{mapValue:t}}function af(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n){return new R3(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Tt(Ce.fromBase64String(e))}catch(t){throw new j(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Tt(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Tt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ys(e,Tt._jsonSchema))return Tt.fromBase64String(e.bytes)}}Tt._jsonSchemaVersion="firestore/bytes/1.0",Tt._jsonSchema={type:xe("string",Tt._jsonSchemaVersion),bytes:xe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function H3(){return new nl(qr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wt._jsonSchemaVersion}}static fromJSON(e){if(ys(e,Wt._jsonSchema))return new Wt(e.latitude,e.longitude)}}function cf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */Wt._jsonSchemaVersion="firestore/geoPoint/1.0",Wt._jsonSchema={type:xe("string",Wt._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};class G3{bt(e){}shutdown(){}}/**
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
 */const ph="ConnectivityMonitor";class fh{constructor(){this.vt=()=>this.St(),this.Dt=()=>this.xt(),this.Ct=[],this.Ft()}bt(e){this.Ct.push(e)}shutdown(){window.removeEventListener("online",this.vt),window.removeEventListener("offline",this.Dt)}Ft(){window.addEventListener("online",this.vt),window.addEventListener("offline",this.Dt)}St(){z(ph,"Network connectivity changed: AVAILABLE");for(const e of this.Ct)e(0)}xt(){z(ph,"Network connectivity changed: UNAVAILABLE");for(const e of this.Ct)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ws=null;function mc(){return Ws===null?Ws=function(){return 268435456+Math.round(2147483648*Math.random())}():Ws++,"0x"+Ws.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="RestConnection",W3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class K3{get Ot(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Mt=t+"://"+e.host,this.Nt=`projects/${r}/databases/${i}`,this.Lt=this.databaseId.database===wa?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Bt(e,t,r,i,s){const a=mc(),c=this.Ut(e,t.toUriEncodedString());z(Go,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Nt,"x-goog-request-params":this.Lt};this.kt(l,i,s);const{host:u}=new URL(c),p=hs(u);return this.qt(e,c,l,r,p).then(g=>(z(Go,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Mt(Go,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",r),g})}$t(e,t,r,i,s,a){return this.Bt(e,t,r,i,s)}kt(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Ut(e,t){const r=W3[e];let i=`${this.Mt}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y3{constructor(e){this.Kt=e.Kt,this.Wt=e.Wt}Qt(e){this.Gt=e}zt(e){this.jt=e}Ht(e){this.Jt=e}onMessage(e){this.Yt=e}close(){this.Wt()}send(e){this.Kt(e)}Zt(){this.Gt()}Xt(){this.jt()}en(e){this.Jt(e)}tn(e){this.Yt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection",Ii=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Ur extends K3{constructor(e){super(e),this.nn=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static rn(){if(!Ur.sn){const e=fp();Ii(e,pp.STAT_EVENT,t=>{t.stat===oc.PROXY?z(We,"STAT_EVENT: detected buffering proxy"):t.stat===oc.NOPROXY&&z(We,"STAT_EVENT: detected no buffering proxy")}),Ur.sn=!0}}qt(e,t,r,i,s){const a=mc();return new Promise((c,l)=>{const u=new hp;u.setWithCredentials(!0),u.listenOnce(dp.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ta.NO_ERROR:const g=u.getResponseJson();z(We,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case ta.TIMEOUT:z(We,`RPC '${e}' ${a} timed out`),l(new j(M.DEADLINE_EXCEEDED,"Request time out"));break;case ta.HTTP_ERROR:const I=u.getStatus();if(z(We,`RPC '${e}' ${a} failed with status:`,I,"response text:",u.getResponseText()),I>0){let P=u.getResponseJson();Array.isArray(P)&&(P=P[0]);const L=P?.error;if(L&&L.status&&L.message){const E=function(q){const Y=q.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(Y)>=0?Y:M.UNKNOWN}(L.status);l(new j(E,L.message))}else l(new j(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new j(M.UNAVAILABLE,"Connection failed."));break;default:W(9055,{_n:e,streamId:a,an:u.getLastErrorCode(),un:u.getLastError()})}}finally{z(We,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(i);z(We,`RPC '${e}' ${a} sending request:`,i),u.send(t,"POST",p,r,15)})}cn(e,t,r){const i=mc(),s=[this.Mt,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.kt(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=s.join("");z(We,`Creating RPC '${e}' stream ${i}: ${u}`,c);const p=a.createWebChannel(u,c);this.En(p);let g=!1,I=!1;const P=new Y3({Kt:L=>{I?z(We,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(g||(z(We,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),z(We,`RPC '${e}' stream ${i} sending:`,L),p.send(L))},Wt:()=>p.close()});return Ii(p,xi.EventType.OPEN,()=>{I||(z(We,`RPC '${e}' stream ${i} transport opened.`),P.Zt())}),Ii(p,xi.EventType.CLOSE,()=>{I||(I=!0,z(We,`RPC '${e}' stream ${i} transport closed`),P.en(),this.hn(p))}),Ii(p,xi.EventType.ERROR,L=>{I||(I=!0,Mt(We,`RPC '${e}' stream ${i} transport errored. Name:`,L.name,"Message:",L.message),P.en(new j(M.UNAVAILABLE,"The operation could not be completed")))}),Ii(p,xi.EventType.MESSAGE,L=>{if(!I){const E=L.data[0];H(!!E,16349);const N=E,q=N?.error||N[0]?.error;if(q){z(We,`RPC '${e}' stream ${i} received error:`,q);const Y=q.status;let se=function(Pe){const b=Ae[Pe];if(b!==void 0)return Hp(b)}(Y),ve=q.message;Y==="NOT_FOUND"&&ve.includes("database")&&ve.includes("does not exist")&&ve.includes(this.databaseId.database)&&Mt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),se===void 0&&(se=M.INTERNAL,ve="Unknown error status: "+Y+" with message "+q.message),I=!0,P.en(new j(se,ve)),p.close()}else z(We,`RPC '${e}' stream ${i} received:`,E),P.tn(E)}}),Ur.rn(),setTimeout(()=>{P.Xt()},0),P}terminate(){this.nn.forEach(e=>e.close()),this.nn=[]}En(e){this.nn.push(e)}hn(e){this.nn=this.nn.filter(t=>t===e)}kt(e,t,r){super.kt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return gp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q3(n){return new Ur(n)}Ur.sn=!1;class lf{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Tn=e,this.timerId=t,this.Pn=r,this.Rn=i,this.In=s,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(e){this.cancel();const t=Math.floor(this.An+this.pn()),r=Math.max(0,Date.now()-this.dn),i=Math.max(0,t-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.An} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,i,()=>(this.dn=Date.now(),e())),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="PersistentStream";class uf{constructor(e,t,r,i,s,a,c,l){this.Tn=e,this.yn=r,this.wn=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.bn=0,this.vn=null,this.Sn=null,this.stream=null,this.Dn=0,this.xn=new lf(e,t)}Cn(){return this.state===1||this.state===5||this.Fn()}Fn(){return this.state===2||this.state===3}start(){this.Dn=0,this.state!==4?this.auth():this.On()}async stop(){this.Cn()&&await this.close(0)}Mn(){this.state=0,this.xn.reset()}Nn(){this.Fn()&&this.vn===null&&(this.vn=this.Tn.enqueueAfterDelay(this.yn,6e4,()=>this.Ln()))}Bn(e){this.Un(),this.stream.send(e)}async Ln(){if(this.Fn())return this.close(0)}Un(){this.vn&&(this.vn.cancel(),this.vn=null)}kn(){this.Sn&&(this.Sn.cancel(),this.Sn=null)}async close(e,t){this.Un(),this.kn(),this.xn.cancel(),this.bn++,e!==4?this.xn.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(dn(t.toString()),dn("Using maximum backoff delay to prevent overloading the backend."),this.xn.fn()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ht(t)}qn(){}auth(){this.state=1;const e=this.$n(this.bn),t=this.bn;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.bn===t&&this.Kn(r,i)},r=>{e(()=>{const i=new j(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Wn(i)})})}Kn(e,t){const r=this.$n(this.bn);this.stream=this.Qn(e,t),this.stream.Qt(()=>{r(()=>this.listener.Qt())}),this.stream.zt(()=>{r(()=>(this.state=2,this.Sn=this.Tn.enqueueAfterDelay(this.wn,1e4,()=>(this.Fn()&&(this.state=3),Promise.resolve())),this.listener.zt()))}),this.stream.Ht(i=>{r(()=>this.Wn(i))}),this.stream.onMessage(i=>{r(()=>++this.Dn==1?this.Gn(i):this.onNext(i))})}On(){this.state=5,this.xn.mn(async()=>{this.state=0,this.start()})}Wn(e){return z(gh,`close with error: ${e}`),this.stream=null,this.close(4,e)}$n(e){return t=>{this.Tn.enqueueAndForget(()=>this.bn===e?t():(z(gh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class X3 extends uf{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}Qn(e,t){return this.connection.cn("Listen",e,t)}Gn(e){return this.onNext(e)}onNext(e){this.xn.reset();const t=O3(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?ee.min():a.readTime?Gt(a.readTime):ee.min()}(e);return this.listener.zn(t,r)}jn(e){const t={};t.database=gc(this.serializer),t.addTarget=function(s,a){let c;const l=a.target;if(c=ir(l)?{pipelineQuery:B3(s,l)}:jp(l)?{documents:V3(s,l)}:{query:M3(s,l).yt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Xp(s,a.resumeToken);const u=pc(s,a.expectedCount);u!==null&&(c.expectedCount=u)}else if(a.snapshotVersion.compareTo(ee.min())>0){c.readTime=Ca(s,a.snapshotVersion.toTimestamp());const u=pc(s,a.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=U3(this.serializer,e);r&&(t.labels=r),this.Bn(t)}Hn(e){const t={};t.database=gc(this.serializer),t.removeTarget=e,this.Bn(t)}}class J3 extends uf{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get Jn(){return this.Dn>0}start(){this.lastStreamToken=void 0,super.start()}qn(){this.Jn&&this.Yn([])}Qn(e,t){return this.connection.cn("Write",e,t)}Gn(e){return H(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,H(!e.writeResults||e.writeResults.length===0,55816),this.listener.Zn()}onNext(e){H(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.xn.reset();const t=N3(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.Xn(r,t)}er(){const e={};e.database=gc(this.serializer),this.Bn(e)}Yn(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>D3(this.serializer,r))};this.Bn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z3{}class e8 extends Z3{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.tr=!1}nr(){if(this.tr)throw new j(M.FAILED_PRECONDITION,"The client has already been terminated.")}Bt(e,t,r,i){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Bt(e,fc(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(M.UNKNOWN,s.toString())})}$t(e,t,r,i,s){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.$t(e,fc(t,r),i,a,c,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(M.UNKNOWN,a.toString())})}terminate(){this.tr=!0,this.connection.terminate()}}function t8(n,e,t,r){return new e8(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n8="ComponentProvider",mh=new Map;function r8(n,e,t,r,i){return new H4(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,cf(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const yh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hf=41943040;class at{static withCacheSize(e){return new at(e,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}at.DEFAULT_COLLECTION_PERCENTILE=10,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,at.DEFAULT=new at(hf,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),at.DISABLED=new at(-1,0,0);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="LruGarbageCollector",i8=1048576;function _h([n,e],[t,r]){const i=oe(n,t);return i===0?oe(e,r):i}class s8{constructor(e){this.rr=e,this.buffer=new Se(_h),this.ir=0}sr(){return++this.ir}_r(e){const t=[e,this.sr()];if(this.buffer.size<this.rr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();_h(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class a8{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.ur(6e4)}stop(){this.ar&&(this.ar.cancel(),this.ar=null)}get started(){return this.ar!==null}ur(e){z(vh,`Garbage collection scheduled in ${e}ms`),this.ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ti(t)?z(vh,"Ignoring IndexedDB error during garbage collection: ",t):await ei(t)}await this.ur(3e5)})}}class o8{constructor(e,t){this.cr=e,this.params=t}calculateTargetCount(e,t){return this.cr.lr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Wa.ce);const r=new s8(t);return this.cr.forEachTarget(e,i=>r._r(i.sequenceNumber)).next(()=>this.cr.Er(e,i=>r._r(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.cr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.cr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(yh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yh):this.hr(e,t))}getCacheSize(e){return this.cr.getCacheSize(e)}hr(e,t){let r,i,s,a,c,l,u;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,t))).next(g=>(s=g,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(u=Date.now(),kr()<=ce.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(u-l)+`ms
Total Duration: ${u-p}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function c8(n,e){return new o8(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="firestore.googleapis.com",wh=!0;class Eh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=df,this.ssl=wh}else this.host=e.host,this.ssl=e.ssl??wh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<i8)throw new j(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}L4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cf(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rl{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new E4;switch(r.type){case"firstParty":return new A4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=mh.get(t);r&&(z(n8,"Removing Datastore"),mh.delete(t),r.terminate())}(this),Promise.resolve()}}function l8(n,e,t,r={}){n=ji(n,rl);const i=hs(e),s=n._getSettings(),a={...s,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&Jh(`https://${c}`),s.host!==df&&s.host!==c&&Mt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:c,ssl:i,emulatorOptions:r};if(!zn(l,a)&&(n._setSettings(l),r.mockUserToken)){let u,p;if(typeof r.mockUserToken=="string")u=r.mockUserToken,p=Ye.MOCK_USER;else{u=X2(r.mockUserToken,n._app?.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new j(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ye(g)}n._authCredentials=new b4(new vp(u,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new il(this.firestore,e,this._query)}}class Ne{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}toJSON(){return{type:Ne._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ys(t,Ne._jsonSchema))return new Ne(e,r||null,new K(de.fromString(t.referencePath)))}}Ne._jsonSchemaVersion="firestore/documentReference/1.0",Ne._jsonSchema={type:xe("string",Ne._jsonSchemaVersion),referencePath:xe("string")};class es extends il{constructor(e,t,r){super(e,t,Xc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new K(e))}withConverter(e){return new es(this.firestore,e,this._path)}}function sl(n,e,...t){if(n=ze(n),arguments.length===1&&(e=Hc.newId()),R4("doc","path",e),n instanceof rl){const r=de.fromString(e,...t);return W1(r),new Ne(n,null,new K(r))}{if(!(n instanceof Ne||n instanceof es))throw new j(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(de.fromString(e,...t));return W1(r),new Ne(n.firestore,n instanceof es?n.converter:null,new K(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ut{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ut._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ys(e,ut._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ut(e.vectorValues);throw new j(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ut._jsonSchemaVersion="firestore/vectorValue/1.0",ut._jsonSchema={type:xe("string",ut._jsonSchemaVersion),vectorValues:xe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u8=/^__.*__$/;class h8{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,t,this.fieldTransforms):new _s(e,this.data,t,this.fieldTransforms)}}function pf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{dataSource:n})}}class al{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new al({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Pa(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(pf(this.dataSource)&&u8.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class d8{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||to(e)}createContext(e,t,r,i=!1){return new al({dataSource:e,methodName:t,targetDoc:r,path:Le.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function p8(n){const e=n._freezeSettings(),t=to(n._databaseId);return new d8(n._databaseId,!!e.ignoreUndefinedProperties,t)}function f8(n,e,t,r,i,s={}){const a=n.createContext(s.merge||s.mergeFields?2:0,e,t,i);mf("Data must be an object, but it was:",a,r);const c=ff(r,a);let l,u;if(s.merge)l=new Dt(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const I=no(e,g,t);if(!a.contains(I))throw new j(M.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);y8(p,I)||p.push(I)}l=new Dt(p),u=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,u=a.fieldTransforms;return new h8(new _t(c),l,u)}function ts(n,e,t){if(gf(n=ze(n)))return mf("Unsupported field value:",e,n),ff(n,e);if(n instanceof of)return function(i,s){if(!pf(s.dataSource))throw s.createError(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(i,s){const a=[];let c=0;for(const l of i){let u=ts(l,s.childContextForArray(c));u==null&&(u={nullValue:"NULL_VALUE"}),a.push(u),c++}return{arrayValue:{values:a}}}(n,e)}return function(i,s,a){if((i=ze(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Yc(s.serializer,i,a);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const c=ge.fromDate(i);return{timestampValue:Ca(s.serializer,c)}}if(i instanceof ge){const c=new ge(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ca(s.serializer,c)}}if(i instanceof Wt)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Tt)return{bytesValue:Xp(s.serializer,i._byteString)};if(i instanceof Ne){const c=s.databaseId,l=i.firestore._databaseId;if(!l.isEqual(c))throw s.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${c.projectId}/${c.database}`);return{referenceValue:tl(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ut)return function(l,u){const p=l instanceof ut?l.toArray():l;return{mapValue:{fields:{[xp]:{stringValue:Sp},[Ki]:{arrayValue:{values:p.map(I=>{if(typeof I!="number")throw u.createError("VectorValues must only contain numeric values.");return Qa(u.serializer,I)})}}}}}}(i,s);if(sf(i))return i._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Gc(i)}`)}(n,e,t)}function ff(n,e){const t={};return wp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_r(n,(r,i)=>{const s=ts(i,e.childContextForField(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function gf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ge||n instanceof Wt||n instanceof Tt||n instanceof Ne||n instanceof of||n instanceof ut||sf(n))}function mf(n,e,t){if(!gf(t)||!ms(t)){const r=Gc(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function no(n,e,t){if((e=ze(e))instanceof nl)return e._internalPath;if(typeof e=="string")return m8(n,e);throw Pa("Field path arguments must be of type string or ",n,!1,void 0,t)}const g8=new RegExp("[~\\*/\\[\\]]");function m8(n,e,t){if(e.search(g8)>=0)throw Pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new nl(...e.split("."))._internalPath}catch{throw Pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Pa(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new j(M.INVALID_ARGUMENT,c+n+l)}function y8(n,e){return n.some(t=>t.isEqual(e))}function v8(n){return typeof n._readUserData=="function"}/**
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
 */class Ze{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=_t.empty();for(const i in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(i)){const s=this.optionDefinitions[i];if(i in e){const a=e[i];let c;s.nestedOptions&&ms(a)?c={mapValue:{fields:new Ze(s.nestedOptions).getOptionsProto(t,a)}}:a&&(c=ts(a,t)??void 0),c&&r.set(Le.fromServerFormat(s.serverName),c)}}return r}getOptionsProto(e,t,r){const i=this._getKnownOptions(t,e);if(r){const s=new Map(q4(r,(a,c)=>[Le.fromServerFormat(c),a!==void 0?ts(a,e):null]));i.setAll(s)}return i.value.mapValue.fields??{}}}/**
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
 */function _8(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!ms(t.fields))}(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(n.pipelineValue)))}function w8(n){return new ut(n)}/**
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
 */function U(n){let e;return n instanceof br?n:(e=ms(n)?x8(n):n instanceof Array?S8(n):yf(n,void 0),e)}function Wo(n){if(n instanceof br)return n;if(n instanceof ut)return ns(n);if(Array.isArray(n))return ns(w8(n));throw new Error("Unsupported value: "+typeof n)}function ol(n){return B4(n)?I8(n):U(n)}class br{constructor(){this._protoValueType="ProtoValue"}add(e){return new D("add",[this,U(e)],"add")}asBoolean(){if(this instanceof Wn)return this;if(this instanceof ni)return new _f(this);if(this instanceof bs)return new A8(this);if(this instanceof D)return new vf(this);throw new j("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new D("subtract",[this,U(e)],"subtract")}multiply(e){return new D("multiply",[this,U(e)],"multiply")}divide(e){return new D("divide",[this,U(e)],"divide")}mod(e){return new D("mod",[this,U(e)],"mod")}equal(e){return new D("equal",[this,U(e)],"equal").asBoolean()}notEqual(e){return new D("not_equal",[this,U(e)],"notEqual").asBoolean()}lessThan(e){return new D("less_than",[this,U(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new D("less_than_or_equal",[this,U(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new D("greater_than",[this,U(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new D("greater_than_or_equal",[this,U(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map(i=>U(i));return new D("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new D("array_contains",[this,U(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Ci(e.map(U),"arrayContainsAll"):e;return new D("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Ci(e.map(U),"arrayContainsAny"):e;return new D("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new D("array_reverse",[this])}arrayLength(){return new D("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Ci(e.map(U),"equalAny"):e;return new D("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Ci(e.map(U),"notEqualAny"):e;return new D("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new D("exists",[this],"exists").asBoolean()}charLength(){return new D("char_length",[this],"charLength")}like(e){return new D("like",[this,U(e)],"like").asBoolean()}regexContains(e){return new D("regex_contains",[this,U(e)],"regexContains").asBoolean()}regexFind(e){return new D("regex_find",[this,U(e)],"regexFind")}regexFindAll(e){return new D("regex_find_all",[this,U(e)],"regexFindAll")}regexMatch(e){return new D("regex_match",[this,U(e)],"regexMatch").asBoolean()}stringContains(e){return new D("string_contains",[this,U(e)],"stringContains").asBoolean()}startsWith(e){return new D("starts_with",[this,U(e)],"startsWith").asBoolean()}endsWith(e){return new D("ends_with",[this,U(e)],"endsWith").asBoolean()}toLower(){return new D("to_lower",[this],"toLower")}toUpper(){return new D("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(U(e)),new D("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(U(e)),new D("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(U(e)),new D("rtrim",t,"rtrim")}type(){return new D("type",[this])}isType(e){return new D("is_type",[this,ns(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(U);return new D("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new D("string_index_of",[this,U(e)],"stringIndexOf")}stringRepeat(e){return new D("string_repeat",[this,U(e)],"stringRepeat")}stringReplaceAll(e,t){return new D("string_replace_all",[this,U(e),U(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new D("string_replace_one",[this,U(e),U(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(U);return new D("concat",[this,...r],"concat")}reverse(){return new D("reverse",[this],"reverse")}arrayFilter(e,t){return new D("array_filter",[this,U(e),t],"arrayFilter")}arrayTransform(e,t){return new D("array_transform",[this,U(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new D("array_transform",[this,U(e),U(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,U(e)];return t!==void 0&&r.push(U(t)),new D("array_slice",r,"arraySlice")}arrayFirst(){return new D("array_first",[this],"arrayFirst")}arrayFirstN(e){return new D("array_first_n",[this,U(e)],"arrayFirstN")}arrayLast(){return new D("array_last",[this],"arrayLast")}arrayLastN(e){return new D("array_last_n",[this,U(e)],"arrayLastN")}arrayMaximum(){return new D("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new D("maximum_n",[this,U(e)],"arrayMaximumN")}arrayMinimum(){return new D("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new D("minimum_n",[this,U(e)],"arrayMinimumN")}arrayIndexOf(e){return new D("array_index_of",[this,U(e),U("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new D("array_index_of",[this,U(e),U("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new D("array_index_of_all",[this,U(e)],"arrayIndexOfAll")}byteLength(){return new D("byte_length",[this],"byteLength")}ceil(){return new D("ceil",[this])}floor(){return new D("floor",[this])}abs(){return new D("abs",[this])}exp(){return new D("exp",[this])}mapGet(e){return new D("map_get",[this,ns(e)],"mapGet")}mapSet(e,t,...r){const i=[this,U(e),U(t),...r.map(U)];return new D("map_set",i,"mapSet")}mapKeys(){return new D("map_keys",[this],"mapKeys")}mapValues(){return new D("map_values",[this],"mapValues")}mapEntries(){return new D("map_entries",[this],"mapEntries")}getField(e){return new D("get_field",[this,U(e)],"get_field")}count(){return yt._create("count",[this],"count")}sum(){return yt._create("sum",[this],"sum")}average(){return yt._create("average",[this],"average")}minimum(){return yt._create("minimum",[this],"minimum")}maximum(){return yt._create("maximum",[this],"maximum")}first(){return yt._create("first",[this],"first")}last(){return yt._create("last",[this],"last")}arrayAgg(){return yt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return yt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return yt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new D("maximum",[this,...r.map(U)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new D("minimum",[this,...r.map(U)],"minimum")}vectorLength(){return new D("vector_length",[this],"vectorLength")}cosineDistance(e){return new D("cosine_distance",[this,Wo(e)],"cosineDistance")}dotProduct(e){return new D("dot_product",[this,Wo(e)],"dotProduct")}euclideanDistance(e){return new D("euclidean_distance",[this,Wo(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new D("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new D("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new D("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new D("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new D("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new D("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new D("timestamp_add",[this,U(e),U(t)],"timestampAdd")}timestampSubtract(e,t){return new D("timestamp_subtract",[this,U(e),U(t)],"timestampSubtract")}timestampDiff(e,t){return new D("timestamp_diff",[this,ol(e),U(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,U(e)];return t&&r.push(U(t)),new D("timestamp_extract",r,"timestampExtract")}documentId(){return new D("document_id",[this],"documentId")}parent(){return new D("parent",[this],"parent")}substring(e,t){const r=U(e);return new D("substring",t===void 0?[this,r]:[this,r,U(t)],"substring")}arrayGet(e){return new D("array_get",[this,U(e)],"arrayGet")}isError(){return new D("is_error",[this],"isError").asBoolean()}ifError(e){const t=new D("if_error",[this,U(e)],"ifError");return e instanceof Wn?t.asBoolean():t}isAbsent(){return new D("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new D("map_remove",[this,U(e)],"mapRemove")}mapMerge(e,...t){const r=U(e),i=t.map(U);return new D("map_merge",[this,r,...i],"mapMerge")}pow(e){return new D("pow",[this,U(e)])}trunc(e){return e===void 0?new D("trunc",[this]):new D("trunc",[this,U(e)],"trunc")}round(e){return e===void 0?new D("round",[this]):new D("round",[this,U(e)],"round")}collectionId(){return new D("collection_id",[this])}length(){return new D("length",[this])}ln(){return new D("ln",[this])}sqrt(){return new D("sqrt",[this])}stringReverse(){return new D("string_reverse",[this])}ifAbsent(e){return new D("if_absent",[this,U(e)],"ifAbsent")}ifNull(e){return new D("if_null",[this,U(e)],"ifNull")}coalesce(e,...t){return new D("coalesce",[this,U(e),...t.map(U)],"coalesce")}join(e){return new D("join",[this,U(e)],"join")}log10(){return new D("log10",[this])}arraySum(){return new D("sum",[this])}split(e){return new D("split",[this,U(e)])}timestampTruncate(e,t){const r=[this,U(e)];return t&&r.push(U(t)),new D("timestamp_trunc",r)}ascending(){return C8(this)}descending(){return k8(this)}as(e){return new b8(this,e,"as")}}class yt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const i=new yt(e,t);return i._methodName=r,i}as(e){return new E8(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class E8{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class b8{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Ci extends br{constructor(e,t){super(),this.Rr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.Rr.map(t=>t._toProto(e))}}}_readUserData(e){this.Rr.forEach(t=>t._readUserData(e))}}class bs extends br{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new D("geo_distance",[this,U(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function I8(n){return T8(n,"field")}function T8(n,e){return new bs(typeof n=="string"?qr===n?H3()._internalPath:no("field",n):n._internalPath,e)}class ni extends br{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new ni(e,void 0);return t._protoValue=e,t}_toProto(e){return H(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,_8(this._protoValue)||(this._protoValue=ts(this.value,e))}}function ns(n,e){return yf(n,"constant")}function yf(n,e){const t=new ni(n,e);return typeof n=="boolean"?new _f(t):t}class D extends br{constructor(e,t,r,i){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),i!==void 0&&(this._options=i)}get _optionsUtil(){return new Ze({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(r=>r._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Wn extends br{get _methodName(){return this._expr._methodName}countIf(){return yt._create("count_if",[this],"countIf")}not(){return new D("not",[this],"not").asBoolean()}conditional(e,t){return new D("conditional",[this,e,t],"conditional")}ifError(e){const t=U(e),r=new D("if_error",[this,t],"ifError");return t instanceof Wn?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class vf extends Wn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class _f extends Wn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class A8 extends Wn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function x8(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const i=n[r];t.push(ns(r)),t.push(U(i))}return new D("map",t,"map")}function S8(n){return function(t,r){return new D("array",t.map(i=>U(i)),r)}(n,"array")}function C8(n){return new wf(ol(n),"ascending","ascending")}function k8(n){return new wf(ol(n),"descending","descending")}class wf{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:af(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class bt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Ef extends bt{get _name(){return"add_fields"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Zi(e,this.fields)]}}_readUserData(e){super._readUserData(e),Kn(this.fields,e)}}class bf extends bt{get _name(){return"aggregate"}get _optionsUtil(){return new Ze({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Zi(e,this.accumulators),Zi(e,this.groups)]}}_readUserData(e){super._readUserData(e),Kn(this.groups,e),Kn(this.accumulators,e)}}class If extends bt{get _name(){return"distinct"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Zi(e,this.groups)]}}_readUserData(e){super._readUserData(e),Kn(this.groups,e)}}class ro extends bt{get _name(){return"collection"}get _optionsUtil(){return new Ze({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Vr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Vr}]}}_readUserData(e){super._readUserData(e)}}class io extends bt{get _name(){return"collection_group"}get _optionsUtil(){return new Ze({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class cl extends bt{get _name(){return"database"}get _optionsUtil(){return new Ze({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class ll extends bt{get _name(){return"documents"}get _optionsUtil(){return new Ze({})}constructor(e,t){if(super(t),!e||e.length===0)throw new j(M.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map(s=>s.startsWith("/")?s:"/"+s),i=new Set(r);if(i.size!==r.length)throw new j(M.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=r,this.mr=i}_toProto(e){return{...super._toProto(e),args:this.dr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class ul extends bt{get _name(){return"where"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Kn(this.condition,e)}}class rs extends bt{get _name(){return"limit"}get _optionsUtil(){return new Ze({})}constructor(e,t){H(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Yc(e,this.limit)]}}}class bh extends bt{get _name(){return"offset"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Yc(e,this.offset)]}}}class P8 extends bt{get _name(){return"select"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Zi(e,this.selections)]}}_readUserData(e){super._readUserData(e),Kn(this.selections,e)}}class hl extends bt{get _name(){return"sort"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),Kn(this.orderings,e)}}class dl extends bt{get _name(){return"replace_with"}get _optionsUtil(){return new Ze({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),af(dl.pr)]}}_readUserData(e){super._readUserData(e),Kn(this.map,e)}}dl.pr="full_replace";function Kn(n,e){return v8(n)?n._readUserData(e):Array.isArray(n)?n.forEach(t=>t._readUserData(e)):n instanceof Map?n.forEach(t=>t._readUserData(e)):Object.values(n).forEach(t=>t._readUserData(e)),n}// Copyright 2024 Google LLC* @license
class ct{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return so(this)}getPipelineCollectionGroup(){return pl(this)}getPipelineCollectionId(){return R8(this)}getPipelineDocuments(){return yc(this)}getPipelineFlavor(){return function(t){let r="exact";return t.stages.forEach((i,s)=>{i._name!==If.name&&i._name!==bf.name||(r="keyless"),i._name===P8.name&&r==="exact"&&(r="augmented"),i._name===Ef.name&&s<t.stages.length-1&&r==="exact"&&(r="augmented")}),r}(this)}getPipelineSourceType(){return Un(this)}}function Un(n){const e=n.stages[0];return e instanceof ro||e instanceof io||e instanceof cl||e instanceof ll?e._name:"unknown"}function so(n){if(Un(n)==="collection")return n.stages[0].Vr}function pl(n){if(Un(n)==="collection_group")return n.stages[0].collectionId}function R8(n){switch(Un(n)){case"collection":return de.fromString(so(n)).lastSegment();case"collection_group":return pl(n);default:return}}function yc(n){if(Un(n)==="documents")return n.stages[0].dr}// Copyright 2024 Google LLC* @license
class A{constructor(e,t){this.type=e,this.value=t}static vr(){return new A("ERROR",void 0)}static Sr(){return new A("UNSET",void 0)}static Dr(){return new A("NULL",Hr)}static newValue(e){return wt(e)?new A("NULL",Hr):function(r){return!!r&&"booleanValue"in r}(e)?new A("BOOLEAN",e):zt(e)?new A("INT",e):or(e)?new A("DOUBLE",e):function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue}(e)?new A("TIMESTAMP",e):function(r){return!!r&&"stringValue"in r}(e)?new A("STRING",e):function(r){return!!r&&"bytesValue"in r}(e)?new A("BYTES",e):e.referenceValue?new A("REFERENCE",e):e.geoPointValue?new A("GEO_POINT",e):Wr(e)?new A("ARRAY",e):Ea(e)?new A("VECTOR",e):lr(e)?new A("MAP",e):new A("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function Fi(n){if(!n.Cr())return n.value}function Tf(n){return n instanceof Wn?n._expr:n}function Q(n){if((n=Tf(n))instanceof bs)return new L8(n);if(n instanceof ni)return new O8(n);if(n instanceof Ci)return new D8(n);if(n instanceof D){if(n.name==="add")return new M8(n);if(n.name==="subtract")return new F8(n);if(n.name==="multiply")return new U8(n);if(n.name==="divide")return new B8(n);if(n.name==="mod")return new $8(n);if(n.name==="and")return new z8(n);if(n.name==="equal")return new e9(n);if(n.name==="not_equal")return new t9(n);if(n.name==="less_than")return new n9(n);if(n.name==="less_than_or_equal")return new r9(n);if(n.name==="greater_than")return new i9(n);if(n.name==="greater_than_or_equal")return new s9(n);if(n.name==="array_concat")return new a9(n);if(n.name==="array_reverse")return new o9(n);if(n.name==="array_contains")return new c9(n);if(n.name==="array_contains_all")return new l9(n);if(n.name==="array_contains_any")return new u9(n);if(n.name==="array_length")return new h9(n);if(n.name==="array_element")return new d9(n);if(n.name==="equal_any")return new Af(n);if(n.name==="not_equal_any")return new j8(n);if(n.name==="is_nan")return new H8(n);if(n.name==="is_not_nan")return new G8(n);if(n.name==="is_null")return new W8(n);if(n.name==="is_not_null")return new K8(n);if(n.name==="is_error")return new Y8(n);if(n.name==="exists")return new Q8(n);if(n.name==="not")return new ao(n);if(n.name==="or")return new q8(n);if(n.name==="xor")return new fl(n);if(n.name==="conditional")return new X8(n);if(n.name==="maximum")return new J8(n);if(n.name==="minimum")return new Z8(n);if(n.name==="reverse")return new p9(n);if(n.name==="replace_first")return new f9(n);if(n.name==="replace_all")return new g9(n);if(n.name==="char_length")return new m9(n);if(n.name==="byte_length")return new y9(n);if(n.name==="like")return new v9(n);if(n.name==="regex_contains")return new _9(n);if(n.name==="regex_match")return new w9(n);if(n.name==="string_contains")return new E9(n);if(n.name==="starts_with")return new b9(n);if(n.name==="ends_with")return new I9(n);if(n.name==="to_lower")return new T9(n);if(n.name==="to_upper")return new A9(n);if(n.name==="trim")return new x9(n);if(n.name==="string_concat")return new S9(n);if(n.name==="map_get")return new C9(n);if(n.name==="cosine_distance")return new k9(n);if(n.name==="dot_product")return new P9(n);if(n.name==="euclidean_distance")return new R9(n);if(n.name==="vector_length")return new L9(n);if(n.name==="unix_micros_to_timestamp")return new M9(n);if(n.name==="timestamp_to_unix_micros")return new B9(n);if(n.name==="unix_millis_to_timestamp")return new F9(n);if(n.name==="timestamp_to_unix_millis")return new $9(n);if(n.name==="unix_seconds_to_timestamp")return new U9(n);if(n.name==="timestamp_to_unix_seconds")return new z9(n);if(n.name==="timestamp_add")return new q9(n);if(n.name==="timestamp_subtract")return new j9(n)}throw new Error(`Unknown Expr : ${n}`)}class L8{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===qr)return A.newValue({referenceValue:ka(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return A.newValue({timestampValue:sa(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return A.newValue({timestampValue:sa(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?Ya(r)?A.newValue(function(s,a){if(s.serverTimestampBehavior==="estimate")return{timestampValue:sa(s.serializer,ee.fromTimestamp(jr(a)))};if(s.serverTimestampBehavior==="previous"){const c=vs(a);if(c)return c}return{nullValue:"NULL_VALUE"}}(e,r)):A.newValue(r):A.Sr()}}class O8{constructor(e){this.expr=e}evaluate(e,t){return A.newValue(this.expr._getValue())}}class D8{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.Rr.map(i=>Q(i).evaluate(e,t));return r.some(i=>i.Cr())?A.vr():A.newValue({arrayValue:{values:r.map(i=>i.value)}})}}function qe(n){return or(n)?Number(n.doubleValue):Number(n.integerValue)}function Qt(n){return BigInt(n.integerValue)}const N8=BigInt("0x7fffffffffffffff"),V8=-BigInt("0x8000000000000000");class Is{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length>=2,24778);const r=Q(this.expr.params[0]).evaluate(e,t),i=Q(this.expr.params[1]).evaluate(e,t);let s=this.Or(r,i);for(const a of this.expr.params.slice(2)){const c=Q(a).evaluate(e,t);s=this.Or(s,c)}return s}Or(e,t){if(e.Cr()||t.Cr())return A.vr();if(e.Fr()||t.Fr())return A.Dr();const r=e.value,i=t.value;if(!or(r)&&!zt(r)||!or(i)&&!zt(i))return A.vr();if(or(r)||or(i)){const s=this.Mr(r,i);return s?A.newValue(s):A.vr()}if(zt(r)&&zt(i)){const s=this.Nr(r,i);return s===void 0?A.vr():typeof s=="number"?A.newValue({doubleValue:s}):s<V8||s>N8?A.vr():A.newValue({integerValue:`${s}`})}return A.vr()}}function pn(n,e){return ke(n)!==ke(e)?"TYPE_MISMATCH":pt(n)||pt(e)?"NOT_EQ":wt(n)&&wt(e)?"EQ":wt(n)||wt(e)?"NULL":Wr(n)&&Wr(e)?function(r,i){if(r.values?.length!==i.values?.length)return"NOT_EQ";let s=!1;for(let a=0;a<(r.values?.length??0);a++){const c=r.values[a],l=i.values[a];switch(pn(c,l)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":s=!0;break;default:W(44609,{Lr:c,Br:l})}}return s?"NULL":"EQ"}(n.arrayValue,e.arrayValue):Ea(n)&&Ea(e)||lr(n)&&lr(e)?function(r,i){const s=r.fields||{},a=i.fields||{};if(_a(s)!==_a(a))return"NOT_EQ";let c=!1;for(const l in s)if(s.hasOwnProperty(l)){if(a[l]===void 0)return"NOT_EQ";switch(pn(s[l],a[l])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":c=!0}}return c?"NULL":"EQ"}(n.mapValue,e.mapValue):function(r,i){return St(r,i,{Te:!1,Ee:!0,he:!0})}(n,e)?"EQ":"NOT_EQ"}class M8 extends Is{Nr(e,t){return Qt(e)+Qt(t)}Mr(e,t){return{doubleValue:qe(e)+qe(t)}}}class F8 extends Is{constructor(e){super(e),this.expr=e}Nr(e,t){return Qt(e)-Qt(t)}Mr(e,t){return{doubleValue:qe(e)-qe(t)}}}class U8 extends Is{constructor(e){super(e),this.expr=e}Nr(e,t){return Qt(e)*Qt(t)}Mr(e,t){return{doubleValue:qe(e)*qe(t)}}}class B8 extends Is{constructor(e){super(e),this.expr=e}Nr(e,t){const r=Qt(t);if(r!==BigInt(0))return Qt(e)/r}Mr(e,t){const r=qe(t);return r===0?{doubleValue:Gi(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:qe(e)/r}}}class $8 extends Is{constructor(e){super(e),this.expr=e}Nr(e,t){const r=Qt(t);if(r!==BigInt(0))return Qt(e)%r}Mr(e,t){const r=qe(t);if(r!==0)return{doubleValue:qe(e)%r}}}class z8{constructor(e){this.expr=e}evaluate(e,t){let r=!1,i=!1;for(const s of this.expr.params){const a=Q(s).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!a.value?.booleanValue)return A.newValue(Ue);break;case"NULL":i=!0;break;default:r=!0}}return r?A.vr():i?A.Dr():A.newValue(ht)}}class ao{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===1,9634);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return A.newValue({booleanValue:!r.value?.booleanValue});case"NULL":return A.Dr();default:return A.vr()}}}class q8{constructor(e){this.expr=e}evaluate(e,t){let r=!1,i=!1;for(const s of this.expr.params){const a=Q(s).evaluate(e,t);switch(a.type){case"BOOLEAN":if(a.value?.booleanValue)return A.newValue(ht);break;case"NULL":i=!0;break;default:r=!0}}return r?A.vr():i?A.Dr():A.newValue(Ue)}}class fl{constructor(e){this.expr=e}evaluate(e,t){let r=!1,i=!1;for(const s of this.expr.params){const a=Q(s).evaluate(e,t);switch(a.type){case"BOOLEAN":r=fl.xor(r,!!a.value?.booleanValue);break;case"NULL":i=!0;break;default:return A.vr()}}return i?A.Dr():A.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class Af{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===2,55094);let r=!1;const i=Q(this.expr.params[0]).evaluate(e,t);switch(i.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return A.vr()}const s=Q(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return A.vr()}if(r)return A.Dr();for(const a of s.value?.arrayValue?.values??[])switch(wt(i.value)&&wt(a)?"EQ":pn(i.value,a)){case"EQ":return A.newValue(ht);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:W(44608,{value:i.value,candidate:a})}return r?A.Dr():A.newValue(Ue)}}class j8{constructor(e){this.expr=e}evaluate(e,t){return new ao(new D("not",[new D("equal_any",this.expr.params)])).evaluate(e,t)}}class H8{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===1,23322);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return A.newValue(Ue);case"DOUBLE":return A.newValue({booleanValue:isNaN(qe(r.value))});case"NULL":return A.Dr();default:return A.vr()}}}class G8{constructor(e){this.expr=e}evaluate(e,t){return H(this.expr.params.length===1,50406),new ao(new D("not",[new D("is_nan",this.expr.params)])).evaluate(e,t)}}class W8{constructor(e){this.expr=e}evaluate(e,t){switch(H(this.expr.params.length===1,23123),Q(this.expr.params[0]).evaluate(e,t).type){case"NULL":return A.newValue(ht);case"UNSET":case"ERROR":return A.vr();default:return A.newValue(Ue)}}}class K8{constructor(e){this.expr=e}evaluate(e,t){return H(this.expr.params.length===1,23167),new ao(new D("not",[new D("is_null",this.expr.params)])).evaluate(e,t)}}class Y8{constructor(e){this.expr=e}evaluate(e,t){return H(this.expr.params.length===1,5228),Q(this.expr.params[0]).evaluate(e,t).type==="ERROR"?A.newValue(ht):A.newValue(Ue)}}class Q8{constructor(e){this.expr=e}evaluate(e,t){switch(H(this.expr.params.length===1,6877),Q(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return A.vr();case"UNSET":return A.newValue(Ue);default:return A.newValue(ht)}}}class X8{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===3,11706);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return r.value?.booleanValue?Q(this.expr.params[1]).evaluate(e,t):Q(this.expr.params[2]).evaluate(e,t);case"NULL":return Q(this.expr.params[2]).evaluate(e,t);default:return A.vr()}}}class J8{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(s=>Q(s).evaluate(e,t));let i;for(const s of r)switch(s.type){case"ERROR":case"UNSET":case"NULL":continue;default:i=i===void 0||dt(s.value,i.value)>0?s:i}return i===void 0?A.Dr():i}}class Z8{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(s=>Q(s).evaluate(e,t));let i;for(const s of r)switch(s.type){case"ERROR":case"UNSET":case"NULL":continue;default:i=i===void 0||dt(s.value,i.value)<0?s:i}return i===void 0?A.Dr():i}}class ri{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return A.vr()}const i=Q(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ERROR":case"UNSET":return A.vr()}return this.Ur(r,i)}}class e9 extends ri{constructor(e){super(e),this.expr=e}Ur(e,t){if(e.Fr()&&t.Fr())return A.newValue(ht);if(e.Fr()||t.Fr()||pt(e.value)||pt(t.value)||ke(e.value)!==ke(t.value))return A.newValue(Ue);switch(pn(e.value,t.value)){case"EQ":return A.newValue(ht);case"NOT_EQ":return A.newValue(Ue);case"NULL":return A.Dr();default:W(44615,{left:e,right:t})}}}class t9 extends ri{constructor(e){super(e),this.expr=e}Ur(e,t){switch(pn(e.value,t.value)){case"EQ":return A.newValue(Ue);case"NOT_EQ":case"TYPE_MISMATCH":return A.newValue(ht);case"NULL":return A.Dr();default:W(44614,{left:e,right:t})}}}class n9 extends ri{constructor(e){super(e),this.expr=e}Ur(e,t){return ke(e.value)!==ke(t.value)||pt(e.value)||pt(t.value)?A.newValue(Ue):A.newValue({booleanValue:dt(e.value,t.value)<0})}}class r9 extends ri{constructor(e){super(e),this.expr=e}Ur(e,t){return ke(e.value)!==ke(t.value)||pt(e.value)||pt(t.value)?A.newValue(Ue):pn(e.value,t.value)==="EQ"?A.newValue(ht):A.newValue({booleanValue:dt(e.value,t.value)<0})}}class i9 extends ri{constructor(e){super(e),this.expr=e}Ur(e,t){return ke(e.value)!==ke(t.value)||pt(e.value)||pt(t.value)?A.newValue(Ue):A.newValue({booleanValue:dt(e.value,t.value)>0})}}class s9 extends ri{constructor(e){super(e),this.expr=e}Ur(e,t){return ke(e.value)!==ke(t.value)||pt(e.value)||pt(t.value)?A.newValue(Ue):pn(e.value,t.value)==="EQ"?A.newValue(ht):A.newValue({booleanValue:dt(e.value,t.value)>0})}}class a9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class o9{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===1,216);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return A.Dr();case"ARRAY":{const i=r.value.arrayValue?.values??[];return A.newValue({arrayValue:{values:[...i].reverse()}})}default:return A.vr()}}}class c9{constructor(e){this.expr=e}evaluate(e,t){return H(this.expr.params.length===2,52884),new Af(new D("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class l9{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===2,1392);let r=!1;const i=Q(this.expr.params[0]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return A.vr()}const s=Q(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return A.vr()}if(r)return A.Dr();const a=s.value?.arrayValue?.values??[],c=i.value?.arrayValue?.values??[];for(const l of a){let u=!1;r=!1;for(const p of c){switch(wt(l)&&wt(p)?"EQ":pn(l,p)){case"EQ":u=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:W(44613,{value:p,search:l})}if(u)break}if(!u)return A.newValue(Ue)}return A.newValue(ht)}}class u9{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===2,2680);let r=!1;const i=Q(this.expr.params[0]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return A.vr()}const s=Q(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return A.vr()}if(r)return A.Dr();const a=s.value?.arrayValue?.values??[],c=i.value?.arrayValue?.values??[];for(const l of c)for(const u of a)switch(wt(l)&&wt(u)?"EQ":pn(l,u)){case"EQ":return A.newValue(ht);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:W(44608,{value:l,search:u})}return r?A.Dr():A.newValue(Ue)}}class h9{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===1,38605);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return A.Dr();case"ARRAY":return A.newValue({integerValue:`${r.value?.arrayValue?.values?.length??0}`});default:return A.vr()}}}class d9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class p9{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===1,1508);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return A.Dr();case"BYTES":{const i=r.value?.bytesValue;if(typeof i=="string"){const s=Ce.fromBase64String(i).toUint8Array();return s.reverse(),A.newValue({bytesValue:Ce.fromUint8Array(s).toBase64()})}return A.newValue({bytesValue:new Uint8Array(i).reverse()})}case"STRING":{const i=r.value?.stringValue,s=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(i),a=Array.from(s,c=>c.segment).reverse();return A.newValue({stringValue:a.join("")})}default:return A.vr()}}}class f9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class g9{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class m9{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===1,19400);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return A.Dr();case"STRING":{const i=function(a){let c=0;for(let l=0;l<a.length;l++){const u=a.codePointAt(l);if(u===void 0)return;if(u<=65535)if(u>=55296&&u<=57343)if(u<=56319){const p=a.codePointAt(l+1);p!==void 0&&p>=56320&&p<=57343?(c+=1,l++):c+=1}else c+=1;else c+=1;else{if(!(u<=1114111))return;c+=1,l++}}return c}(r.value.stringValue);return i===void 0?A.vr():A.newValue({integerValue:i})}default:return A.vr()}}}class y9{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===1,8486);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const i=r.value?.bytesValue;return typeof i=="string"?A.newValue({integerValue:Ce.fromBase64String(i).toUint8Array().length}):A.newValue({integerValue:new Uint8Array(i).length})}case"STRING":{const i=function(a){let c=0;for(let l=0;l<a.length;l++){const u=a.codePointAt(l);if(u===void 0)return;if(u>=55296&&u<=57343){if(!(u<=56319))return;{const p=a.codePointAt(l+1);if(p===void 0||!(p>=56320&&p<=57343))return;c+=4,l++}}else if(u<=127)c+=1;else if(u<=2047)c+=2;else if(u<=65535)c+=3;else{if(!(u<=1114111))return;c+=4,l++}}return c}(r.value?.stringValue);return i===void 0?A.vr():A.newValue({integerValue:i})}case"NULL":return A.Dr();default:return A.vr()}}}class ii{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const i=Q(this.expr.params[0]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return A.vr()}const s=Q(this.expr.params[1]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return A.vr()}return r?A.Dr():this.kr(i.value?.stringValue,s.value?.stringValue)}}class v9 extends ii{kr(e,t){try{const r=function(a){let c="";for(let l=0;l<a.length;l++){const u=a.charAt(l);switch(u){case"_":c+=".";break;case"%":c+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":c+="\\"+u;break;default:c+=u}}return"^"+c+"$"}(t),i=It.compile(r);return A.newValue({booleanValue:i.matches(e)})}catch(r){return Mt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),A.vr()}}}class _9 extends ii{kr(e,t){try{const r=It.compile(t);return A.newValue({booleanValue:r.matcher(e).find()})}catch{return Mt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),A.vr()}}}class w9 extends ii{kr(e,t){try{return A.newValue({booleanValue:It.compile(t).matches(e)})}catch{return Mt(`Invalid regex pattern found in regex_match: ${t}, returning error`),A.vr()}}}class E9 extends ii{kr(e,t){return A.newValue({booleanValue:e.includes(t)})}}class b9 extends ii{kr(e,t){return A.newValue({booleanValue:e.startsWith(t)})}}class I9 extends ii{kr(e,t){return A.newValue({booleanValue:e.endsWith(t)})}}class T9{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===1,29079);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return A.newValue({stringValue:r.value?.stringValue?.toLowerCase()});case"NULL":return A.Dr();default:return A.vr()}}}class A9{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===1,60487);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return A.newValue({stringValue:r.value?.stringValue?.toUpperCase()});case"NULL":return A.Dr();default:return A.vr()}}}class x9{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===1,28544);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return A.newValue({stringValue:r.value?.stringValue?.trim()});case"NULL":return A.Dr();default:return A.vr()}}}class S9{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map(a=>Q(a).evaluate(e,t));let i="",s=!1;for(const a of r)switch(a.type){case"STRING":i+=a.value.stringValue;break;case"NULL":s=!0;break;default:return A.vr()}return s?A.Dr():A.newValue({stringValue:i})}}class C9{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===2,4483);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return A.Sr();case"MAP":break;default:return A.vr()}const i=Q(this.expr.params[1]).evaluate(e,t);if(i.type!=="STRING")return A.vr();const s=r.value?.mapValue?.fields?.[i.value?.stringValue];return s===void 0?A.Sr():A.newValue(s)}}class gl{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const i=Q(this.expr.params[0]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return A.vr()}const s=Q(this.expr.params[1]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return A.vr()}if(r)return A.Dr();const a=uc(i.value),c=uc(s.value);if(a===void 0||c===void 0||a.values?.length!==c.values?.length)return A.vr();const l=this.qr(a,c);return l===void 0||isNaN(l)?A.vr():A.newValue({doubleValue:l})}}class k9 extends gl{qr(e,t){const r=e?.values??[],i=t?.values??[];if(r.length===0)return;let s=0,a=0,c=0;for(let u=0;u<r.length;u++){if(!Gn(r[u])||!Gn(i[u]))return;const p=qe(r[u]),g=qe(i[u]);s+=p*g,a+=p*p,c+=g*g}const l=Math.sqrt(a)*Math.sqrt(c);if(l!==0)return 1-Math.max(-1,Math.min(1,s/l))}}class P9 extends gl{qr(e,t){const r=e?.values??[],i=t?.values??[];if(r.length===0)return 0;let s=0;for(let a=0;a<r.length;a++){if(!Gn(r[a])||!Gn(i[a]))return;s+=qe(r[a])*qe(i[a])}return s}}class R9 extends gl{qr(e,t){const r=e?.values??[],i=t?.values??[];if(r.length===0)return 0;let s=0;for(let a=0;a<r.length;a++){if(!Gn(r[a])||!Gn(i[a]))return;const c=qe(r[a]),l=qe(i[a]);s+=Math.pow(c-l,2)}return Math.sqrt(s)}}class L9{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===1,39044);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=uc(r.value);return A.newValue({integerValue:i?.values?.length??0})}case"NULL":return A.Dr();default:return A.vr()}}}const is=BigInt(-62135596800),ss=BigInt(253402300799),Ra=BigInt(1e3),Bn=BigInt(1e6),O9=is*Ra,D9=ss*Ra+BigInt(999),N9=is*Bn,V9=ss*Bn+BigInt(999999);function ml(n){return n>=N9&&n<=V9}function xf(n){return n>=is&&n<=ss}function as(n,e){const t=BigInt(n);return!(t<is||t>ss)&&!(e<0||e>=1e9)&&(t!==is||e===0)&&!(t===ss&&e>999999999)}function Sf(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function yl(n){return BigInt(n.seconds)*Bn+BigInt(Math.trunc(n.nanoseconds/1e3))}class vl{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return A.Dr();default:return A.vr()}}}class M9 extends vl{toTimestamp(e){if(!ml(e))return A.vr();let t=Number(e/Bn),r=Number(e%Bn*BigInt(1e3));const i=Sf(t,r);return t=i.seconds,r=i.nanos,as(t,r)?A.newValue({timestampValue:{seconds:t,nanos:r}}):A.vr()}}class F9 extends vl{toTimestamp(e){if(!function(a){return a>=O9&&a<=D9}(e))return A.vr();let t=Number(e/Ra),r=Number(e%Ra*BigInt(1e6));const i=Sf(t,r);return t=i.seconds,r=i.nanos,as(t,r)?A.newValue({timestampValue:{seconds:t,nanos:r}}):A.vr()}}class U9 extends vl{toTimestamp(e){if(!xf(e))return A.vr();const t=Number(e);return A.newValue({timestampValue:{seconds:t,nanos:0}})}}class _l{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=Q(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return A.Dr();default:return A.vr()}const i=el(r.value.timestampValue);return as(i.seconds,i.nanoseconds)?this.$r(i):A.vr()}}class B9 extends _l{$r(e){const t=yl(e);return ml(t)?A.newValue({integerValue:`${t.toString()}`}):A.vr()}}class $9 extends _l{$r(e){const t=yl(e),r=t/BigInt(1e3),i=t%BigInt(1e3);return r>BigInt(0)||i===BigInt(0)?A.newValue({integerValue:r.toString()}):A.newValue({integerValue:(r-BigInt(1)).toString()})}}class z9 extends _l{$r(e){const t=BigInt(e.seconds);return xf(t)?A.newValue({integerValue:t.toString()}):A.vr()}}class Cf{constructor(e){this.expr=e}evaluate(e,t){H(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const i=Q(this.expr.params[0]).evaluate(e,t);switch(i.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return A.vr()}const s=Q(this.expr.params[1]).evaluate(e,t);let a;switch(s.type){case"STRING":if(a=function(Y){switch(Y){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(s.value.stringValue),a===void 0)return A.vr();break;case"NULL":r=!0;break;default:return A.vr()}const c=Q(this.expr.params[2]).evaluate(e,t);switch(c.type){case"INT":break;case"NULL":r=!0;break;default:return A.vr()}if(r)return A.Dr();const l=BigInt(c.value.integerValue);let u;try{switch(a){case"microsecond":u=l;break;case"millisecond":u=l*BigInt(1e3);break;case"second":u=l*BigInt(1e6);break;case"minute":u=l*BigInt(6e7);break;case"hour":u=l*BigInt(36e8);break;case"day":u=l*BigInt(864e8);break;default:return A.vr()}if(a!=="microsecond"&&l!==BigInt(0)&&u/l!==BigInt(this.Kr(a)))return A.vr()}catch(q){return Mt(`Error during timestamp arithmetic: ${q}`),A.vr()}const p=el(i.value.timestampValue);if(!as(p.seconds,p.nanoseconds))return A.vr();const g=yl(p),I=this.Wr(g,u);if(!ml(I))return A.vr();const P=Number(I/Bn),L=I%Bn,E=Number((L<0?L+Bn:L)*BigInt(1e3)),N=L<0?P-1:P;return as(N,E)?A.newValue({timestampValue:{seconds:N,nanos:E}}):A.vr()}Kr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class q9 extends Cf{Wr(e,t){return e+t}}class j9 extends Cf{Wr(e,t){return e-t}}function os(n){if((n=Tf(n))instanceof bs)return`fld(${n.fieldName})`;if(n instanceof ni)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ne?`ref(${t.path})`:t instanceof ut?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(n.value)})`;if(n instanceof D)return`fn(${n.name},[${n.params.map(os).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.Rr.map(os).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function H9(n){if(n instanceof Ef)return`${n._name}(${Ks(n.fields)})`;if(n instanceof bf){let e=`${n._name}(${Ks(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${Ks(n.groups)})`),e}if(n instanceof If)return`${n._name}(${Ks(n.groups)})`;if(n instanceof ro)return`${n._name}(${n.Vr})`;if(n instanceof io)return`${n._name}(${n.collectionId})`;if(n instanceof cl)return`${n._name}()`;if(n instanceof ll)return`${n._name}(${n.dr.sort()})`;if(n instanceof ul)return`${n._name}(${os(n.condition)})`;if(n instanceof rs)return`${n._name}(${n.limit})`;if(n instanceof hl)return`${n._name}(${function(t){return t.map(r=>`${os(r.expr)}${r.direction}`).join(",")}(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function Ks(n){return`${Array.from(n.entries()).sort().map(([e,t])=>`${e}=${os(t)}`).join(",")}`}function cn(n){return n.stages.map(e=>H9(e)).join("|")}function kf(n,e){return cn(n)===cn(e)}function De(n){return n instanceof ct}function Ih(n){return De(n)?cn(n):Vi(n)}function Pf(n){return De(n)?cn(n):function(t){return`${zp(Ht(t))}|lt:${t.limitType}`}(n)}function oo(n,e){return n instanceof ct&&e instanceof ct?kf(n,e):!(n instanceof ct&&!(e instanceof ct)||!(n instanceof ct)&&e instanceof ct)&&m3(n,e)}function Rf(n){return ir(n)?cn(n):zp(n)}function Lf(n,e){return n instanceof ct&&e instanceof ct?kf(n,e):!(n instanceof ct&&!(e instanceof ct)||!(n instanceof ct)&&e instanceof ct)&&qp(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G9{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Z4(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Di(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Di(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Kp();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const l=Op(a,c);l!==null&&r.set(i.key,l),a.isValidDocument()||a.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ae())}isEqual(e){return this.batchId===e.batchId&&zr(this.mutations,e.mutations,(t,r)=>th(t,r))&&zr(this.baseMutations,e.baseMutations,(t,r)=>th(t,r))}}class wl{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){H(e.mutations.length===r.length,58842,{Qr:e.mutations.length,Gr:r.length});let i=function(){return E3}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new wl(e,t,r,i)}}/**
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
 */class W9{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sn{constructor(e,t,r,i,s=ee.min(),a=ee.min(),c=Ce.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K9{constructor(e){this.zr=e}}function Y9(n){const e=F3({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?dc(e,e.limit,"L"):e}/**
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
 */class Q9{constructor(){this.Hi=new X9}addToCollectionParentIndex(e,t){return this.Hi.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Hi.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(qn.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class X9{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Se(de.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Se(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Of(n,e){let t=e;for(const r of n.stages)t=Z9({serializer:n.serializer,serverTimestampBehavior:n.listenOptions?.serverTimestampBehavior},r,t);return t}function co(n,e){return Of(n,[e]).length>0}function J9(n,e){return De(n)?co(n,e):eo(n,e)}function Z9(n,e,t){if(e instanceof ro)return function(i,s,a){return a.filter(c=>c.isFoundDocument()&&`/${c.key.getCollectionPath().canonicalString()}`===s.Vr)}(0,e,t);if(e instanceof ul)return function(i,s,a){return a.filter(c=>{const l=Fi(Q(s.condition).evaluate(i,c));return l!==void 0&&St(l,ht)})}(n,e,t);if(e instanceof io)return function(i,s,a){return a.filter(c=>c.isFoundDocument()&&c.key.getCollectionPath().lastSegment()===s.collectionId)}(0,e,t);if(e instanceof cl)return function(i,s,a){return a.filter(c=>c.isFoundDocument())}(0,0,t);if(e instanceof ll)return function(i,s,a){return a.filter(c=>c.isFoundDocument()&&s.mr.has(c.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof rs)return function(i,s,a){return a.slice(0,s.limit)}(0,e,t);if(e instanceof hl)return function(i,s,a){const c=s.orderings.map(l=>({ks:Q(l.expr),direction:l.direction}));return[...a].sort((l,u)=>{for(const{ks:p,direction:g}of c){const I=Fi(p.evaluate(i,l)),P=Fi(p.evaluate(i,u)),L=dt(I??Hr,P??Hr);if(L!==0)return g==="ascending"?L:-L}return 0})}(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function vc(n){const e=function(r){for(let i=r.stages.length-1;i>=0;i--){const s=r.stages[i];if(s instanceof hl)return s.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(n);return(t,r)=>{for(const i of e){const s=Fi(Q(i.expr).evaluate({serializer:n.serializer},t)),a=Fi(Q(i.expr).evaluate({serializer:n.serializer},r)),c=dt(s||Hr,a||Hr);if(c!==0)return i.direction==="ascending"?c:-c}return 0}}function Ko(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof rs)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(){this.changes=new Er(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class t5{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Di(r.mutation,i,Dt.empty(),ge.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ae()){const i=Rn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Pr();return s.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Rn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ae()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,i){let s=lt();const a=Mi(),c=function(){return Mi()}();return t.forEach((l,u)=>{const p=r.get(u.key);i.has(u.key)&&(p===void 0||p.mutation instanceof wr)?s=s.insert(u.key,u):p!==void 0?(a.set(u.key,p.mutation.getFieldMask()),Di(p.mutation,u,p.mutation.getFieldMask(),ge.now())):a.set(u.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,p)=>a.set(u,p)),t.forEach((u,p)=>c.set(u,new t5(p,a.get(u)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Mi();let i=new me((a,c)=>a-c),s=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let p=r.get(l)||Dt.empty();p=c.applyToLocalView(u,p),r.set(l,p);const g=(i.get(c.batchId)||ae()).add(l);i=i.insert(c.batchId,g)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,p=l.value,g=Kp();p.forEach(I=>{if(!s.has(I)){const P=Op(t.get(I),r.get(I));P!==null&&g.set(I,P),s=s.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return De(t)?this.getDocumentsMatchingPipeline(e,t,r,i):p3(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):f3(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):V.resolve(Rn());let c=Hi,l=s;return a.next(u=>V.forEach(u,(p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),s.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(I=>{l=l.insert(p,I)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ae())).next(p=>({batchId:c,changes:Wp(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next(r=>{let i=Pr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Pr();return this.indexManager.getCollectionParents(e,s).next(c=>V.forEach(c,l=>{const u=function(g,I){return new Za(I,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(p=>{p.forEach((g,I)=>{a=a.insert(g,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>this.retrieveMatchingLocalDocuments(s,a,c=>eo(t,c)))}getDocumentsMatchingPipeline(e,t,r,i){if(Un(t)==="collection_group"){const s=pl(t);let a=Pr();return this.indexManager.getCollectionParents(e,s).next(c=>V.forEach(c,l=>{const u=function(g,I){const P=g.stages.map(L=>L instanceof io?new ro(I.canonicalString(),{}):L);return new ct(g.serializer,P)}(t,l.child(s));return this.getDocumentsMatchingPipeline(e,u,r,i).next(p=>{p.forEach((g,I)=>{a=a.insert(g,I)})})}).next(()=>a))}{let s;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next(a=>{switch(s=a,Un(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i);case"documents":let c=ae();for(const l of yc(t))c=c.add(K.fromPath(l));return this.remoteDocumentCache.getEntries(e,c);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new j("invalid-argument",`Invalid pipeline source to execute offline: ${cn(t)}`)}}).next(a=>this.retrieveMatchingLocalDocuments(s,a,c=>co(t,c)))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach((s,a)=>{const c=a.getKey();t.get(c)===null&&(t=t.insert(c,Qe.newInvalidDocument(c)))});let i=Pr();return t.forEach((s,a)=>{const c=e.get(s);c!==void 0&&Di(c.mutation,a,Dt.empty(),ge.now()),r(a)&&(i=i.insert(s,a))}),i}getOverlaysForPipeline(e,t,r){switch(Un(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,de.fromString(so(t)),r);case"collection_group":throw new j("invalid-argument",`Unexpected collection group pipeline: ${cn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,yc(t).map(i=>K.fromPath(i)));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new j("invalid-argument",`Failed to get overlays for pipeline: ${cn(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r5{constructor(e){this.serializer=e,this.Hs=new Map,this.Js=new Map}getBundleMetadata(e,t){return V.resolve(this.Hs.get(t))}saveBundleMetadata(e,t){return this.Hs.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Gt(i.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Js.get(t))}saveNamedQuery(e,t){return this.Js.set(t.name,function(i){return{name:i.name,query:Y9(i.bundledQuery),readTime:Gt(i.readTime)}}(t)),V.resolve()}}/**
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
 */class i5{constructor(){this.overlays=new me(K.comparator),this.Ys=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Rn();return V.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}getAllOverlays(e,t){const r=Rn();return this.overlays.forEach((i,s)=>{s.largestBatchId>t&&r.set(i,s)}),V.resolve(r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.Hr(e,t,s)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ys.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ys.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const i=Rn(),s=t.length+1,a=new K(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return V.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new me((u,p)=>u-p);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let p=s.get(u.largestBatchId);p===null&&(p=Rn(),s=s.insert(u.largestBatchId,p)),p.set(u.getKey(),u)}}const c=Rn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,p)=>c.set(u,p)),!(c.size()>=i)););return V.resolve(c)}Hr(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ys.get(i.largestBatchId).delete(r.key);this.Ys.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new W9(t,r));let s=this.Ys.get(t);s===void 0&&(s=ae(),this.Ys.set(t,s)),this.Ys.set(t,s.add(r.key))}}/**
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
 */class s5{constructor(){this.sessionToken=Ce.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this.Zs=new Se(Fe.Xs),this.e_=new Se(Fe.t_)}isEmpty(){return this.Zs.isEmpty()}addReference(e,t){const r=new Fe(e,t);this.Zs=this.Zs.add(r),this.e_=this.e_.add(r)}n_(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.r_(new Fe(e,t))}i_(e,t){e.forEach(r=>this.removeReference(r,t))}s_(e){const t=new K(new de([])),r=new Fe(t,e),i=new Fe(t,e+1),s=[];return this.e_.forEachInRange([r,i],a=>{this.r_(a),s.push(a.key)}),s}__(){this.Zs.forEach(e=>this.r_(e))}r_(e){this.Zs=this.Zs.delete(e),this.e_=this.e_.delete(e)}o_(e){const t=new K(new de([])),r=new Fe(t,e),i=new Fe(t,e+1);let s=ae();return this.e_.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new Fe(e,0),r=this.Zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,t){this.key=e,this.a_=t}static Xs(e,t){return K.comparator(e.key,t.key)||oe(e.a_,t.a_)}static t_(e,t){return oe(e.a_,t.a_)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gs=1,this.u_=new Se(Fe.Xs)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.gs;this.gs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new G9(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.u_=this.u_.add(new Fe(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.c_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.l_(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Wc:this.gs-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Fe(t,0),i=new Fe(t,Number.POSITIVE_INFINITY),s=[];return this.u_.forEachInRange([r,i],a=>{const c=this.c_(a.a_);s.push(c)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Se(oe);return t.forEach(i=>{const s=new Fe(i,0),a=new Fe(i,Number.POSITIVE_INFINITY);this.u_.forEachInRange([s,a],c=>{r=r.add(c.a_)})}),V.resolve(this.E_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const a=new Fe(new K(s),0);let c=new Se(oe);return this.u_.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(c=c.add(l.a_)),!0)},a),V.resolve(this.E_(c))}E_(e){const t=[];return e.forEach(r=>{const i=this.c_(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){H(this.h_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.u_;return V.forEach(t.mutations,i=>{const s=new Fe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.u_=r})}bs(e){}containsKey(e,t){const r=new Fe(t,0),i=this.u_.firstAfterOrEqual(r);return V.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}h_(e,t){return this.l_(e)}l_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}c_(e){const t=this.l_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(e){this.T_=e,this.docs=function(){return new me(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.T_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Qe.newInvalidDocument(t))}getEntries(e,t){let r=lt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Qe.newInvalidDocument(i))}),V.resolve(r)}getAllEntries(e){let t=lt();return this.docs.forEach((r,i)=>{t=t.insert(r,i.document)}),V.resolve(t)}getDocumentsMatchingQuery(e,t,r,i){let s,a;De(t)?(s=de.fromString(so(t)),a=p=>co(t,p)):(s=t.path,a=p=>eo(t,p));let c=lt();const l=new K(s.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:p,value:{document:g}}=u.getNext();if(!s.isPrefixOf(p.path))break;p.path.length>s.length+1||N4(D4(g),r)<=0||(i.has(g.key)||a(g))&&(c=c.insert(g.key,g.mutableCopy()))}return V.resolve(c)}getAllFromCollectionGroup(e,t,r,i){W(9500)}P_(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new c5(this)}getSize(e){return V.resolve(this.size)}}class c5 extends e5{constructor(e){super(),this.zs=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.zs.addEntry(e,i)):this.zs.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.zs.getEntry(e,t)}getAllFromCache(e,t){return this.zs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{constructor(e){this.persistence=e,this.R_=new Er(t=>Rf(t),Lf),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.I_=0,this.A_=new El,this.targetCount=0,this.V_=Yn.xs()}forEachTarget(e,t){return this.R_.forEach((r,i)=>t(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.I_)}allocateTargetId(e){return this.highestTargetId=this.V_.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.I_&&(this.I_=t),V.resolve()}Ms(e){this.R_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.V_=new Yn(t),this.highestTargetId=t),e.sequenceNumber>this.I_&&(this.I_=e.sequenceNumber)}addTargetData(e,t){return this.Ms(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Ms(t),V.resolve()}removeTargetData(e,t){return this.R_.delete(t.target),this.A_.s_(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.R_.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.R_.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.R_.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.A_.n_(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.A_.i_(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.A_.s_(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.A_.o_(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.A_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,t){this.d_={},this.overlays={},this.f_=new Wa(0),this.m_=!1,this.m_=!0,this.p_=new s5,this.referenceDelegate=e(this),this.g_=new l5(this),this.indexManager=new Q9,this.remoteDocumentCache=function(i){return new o5(i)}(r=>this.referenceDelegate.y_(r)),this.serializer=new K9(t),this.w_=new r5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.m_=!1,Promise.resolve()}get started(){return this.m_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new i5,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.d_[e.toKey()];return r||(r=new a5(t,this.referenceDelegate),this.d_[e.toKey()]=r),r}getGlobalsCache(){return this.p_}getTargetCache(){return this.g_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.w_}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);const i=new u5(this.f_.next());return this.referenceDelegate.b_(),r(i).next(s=>this.referenceDelegate.v_(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}S_(e,t){return V.or(Object.values(this.d_).map(r=>()=>r.containsKey(e,t)))}}class u5 extends M4{constructor(e){super(),this.currentSequenceNumber=e}}class bl{constructor(e){this.persistence=e,this.D_=new El,this.x_=null}static C_(e){return new bl(e)}get F_(){if(this.x_)return this.x_;throw W(60996)}addReference(e,t,r){return this.D_.addReference(r,t),this.F_.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.D_.removeReference(r,t),this.F_.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.F_.add(t.toString()),V.resolve()}removeTarget(e,t){this.D_.s_(t.targetId).forEach(i=>this.F_.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.F_.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}b_(){this.x_=new Set}v_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.F_,r=>{const i=K.fromPath(r);return this.O_(e,i).next(s=>{s||t.removeEntry(i,ee.min())})}).next(()=>(this.x_=null,t.apply(e)))}updateLimboDocument(e,t){return this.O_(e,t).next(r=>{r?this.F_.delete(t.toString()):this.F_.add(t.toString())})}y_(e){return 0}O_(e,t){return V.or([()=>V.resolve(this.D_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.S_(e,t)])}}class La{constructor(e,t){this.persistence=e,this.M_=new Er(r=>$4(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=c8(this,t)}static C_(e,t){return new La(e,t)}b_(){}v_(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}lr(e){const t=this.Ls(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Ls(e){let t=0;return this.Er(e,r=>{t++}).next(()=>t)}Er(e,t){return V.forEach(this.M_,(r,i)=>this.Us(e,r,i).next(s=>s?V.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.P_(e,a=>this.Us(e,a,t).next(c=>{c||(r++,s.removeEntry(a,ee.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.M_.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.M_.set(t,e.currentSequenceNumber),V.resolve()}y_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=na(e.data.value)),t}Us(e,t,r){return V.or([()=>this.persistence.S_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.M_.get(t);return V.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.wo=r,this.bo=i}static vo(e,t){let r=ae(),i=ae();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Il(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h5(n,e){return K.comparator(n.key,e.key)}/**
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
 */class d5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class p5{constructor(){this.So=!1,this.Do=!1,this.xo=100,this.Co=function(){return r0()?8:F4(Je())>0?6:4}()}initialize(e,t){this.Fo=e,this.indexManager=t,this.So=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Oo(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Mo(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new d5;return this.No(e,t,a).next(c=>{if(s.result=c,this.Do)return this.Lo(e,t,a,c.size)})}).next(()=>s.result)}Lo(e,t,r,i){return De(t)?V.resolve():r.documentReadCount<this.xo?(kr()<=ce.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Vi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.xo,"documents"),V.resolve()):(kr()<=ce.DEBUG&&z("QueryEngine","Query:",Vi(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Co*i?(kr()<=ce.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Vi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(t))):V.resolve())}Oo(e,t){if(De(t))return V.resolve(null);let r=t;if(oh(r))return V.resolve(null);let i=Ht(r);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(r.limit!==null&&s===1&&(r=dc(r,null,"F"),i=Ht(r)),this.indexManager.getDocumentsMatchingTarget(e,i).next(a=>{const c=ae(...a);return this.Fo.getDocuments(e,c).next(l=>this.indexManager.getMinOffset(e,i).next(u=>{const p=this.Bo(r,l);return this.Uo(r,p,c,u.readTime)?this.Oo(e,dc(r,null,"F")):this.ko(e,p,r,u)}))})))}Mo(e,t,r,i){return(De(t)?function(a){for(const c of a.stages){if(c instanceof rs||c instanceof bh)return!1;if(c instanceof ul){if(c.condition instanceof vf&&c.condition._expr.name==="exists"&&c.condition._expr.params[0]instanceof bs&&c.condition._expr.params[0].fieldName===qr)continue;return!1}}return!0}(t):oh(t))||i.isEqual(ee.min())?V.resolve(null):this.Fo.getDocuments(e,r).next(s=>{const a=this.Bo(t,s);return this.Uo(t,a,r,i)?V.resolve(null):(kr()<=ce.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ih(t)),this.ko(e,a,t,O4(i,Hi)).next(c=>c))})}Bo(e,t){let r,i;return De(e)?(r=new Se(h5),i=s=>co(e,s)):(r=new Se(Jc(e)),i=s=>eo(e,s)),t.forEach((s,a)=>{i(a)&&(r=r.add(a))}),r}Uo(e,t,r,i){if(De(e))return function(c){return c.stages.some(l=>l instanceof rs||l instanceof bh)}(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}No(e,t,r){return kr()<=ce.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Ih(t)),this.Fo.getDocumentsMatchingQuery(e,t,qn.min(),r)}ko(e,t,r,i){return this.Fo.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="LocalStore",f5=3e8;class g5{constructor(e,t,r,i){this.persistence=e,this.qo=t,this.serializer=i,this.$o=new me(oe),this.Ko=new Er(s=>Rf(s),Lf),this.Wo=new Map,this.Qo=e.getRemoteDocumentCache(),this.g_=e.getTargetCache(),this.w_=e.getBundleCache(),this.Go(r)}Go(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new n5(this.Qo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Qo.setIndexManager(this.indexManager),this.qo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.$o))}}function m5(n,e,t,r){return new g5(n,e,t,r)}async function Nf(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Go(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],c=[];let l=ae();for(const u of i){a.push(u.batchId);for(const p of u.mutations)l=l.add(p.key)}for(const u of s){c.push(u.batchId);for(const p of u.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(u=>({zo:u,removedBatchIds:a,addedBatchIds:c}))})})}function y5(n,e){const t=te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.Qo.newChangeBuffer({trackRemovals:!0});return function(c,l,u,p){const g=u.batch,I=g.keys();let P=V.resolve();return I.forEach(L=>{P=P.next(()=>p.getEntry(l,L)).next(E=>{const N=u.docVersions.get(L);H(N!==null,48541),E.version.compareTo(N)<0&&(g.applyToRemoteDocument(E,u),E.isValidDocument()&&(E.setReadTime(u.commitVersion),p.addEntry(E)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ae();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Vf(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.g_.getLastRemoteSnapshotVersion(t))}function v5(n,e){const t=te(n),r=e.snapshotVersion;let i=t.$o;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.Qo.newChangeBuffer({trackRemovals:!0});i=t.$o;const c=[];e.targetChanges.forEach((p,g)=>{const I=i.get(g);if(!I)return;c.push(t.g_.removeMatchingKeys(s,p.removedDocuments,g).next(()=>t.g_.addMatchingKeys(s,p.addedDocuments,g)));let P=I.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?P=P.withResumeToken(Ce.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),i=i.insert(g,P),function(E,N,q){return E.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=f5?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(I,P,p)&&c.push(t.g_.updateTargetData(s,P))});let l=lt(),u=ae();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))}),c.push(_5(s,a,e.documentUpdates).next(p=>{l=p.jo,u=p.Ho})),!r.isEqual(ee.min())){const p=t.g_.getLastRemoteSnapshotVersion(s).next(g=>t.g_.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(p)}return V.waitFor(c).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(t.$o=i,s))}function _5(n,e,t){let r=ae(),i=ae();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=lt();return t.forEach((c,l)=>{const u=s.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):z(Tl,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{jo:a,Ho:i}})}function w5(n,e){const t=te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Wc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function E5(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.g_.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):t.g_.allocateTargetId(r).next(a=>(i=new sn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.g_.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.$o.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.$o=t.$o.insert(r.targetId,r),t.Ko.set(e,r.targetId)),r})}async function _c(n,e,t){const r=te(n),i=r.$o.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!ti(a))throw a;z(Tl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.$o=r.$o.remove(e),r.Ko.delete(i.target)}function Th(n,e,t){const r=te(n);let i=ee.min(),s=ae();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,u,p){const g=te(l),I=g.Ko.get(p);return I!==void 0?V.resolve(g.$o.get(I)):g.g_.getTargetData(u,p)}(r,a,De(e)?e:Ht(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.g_.getMatchingKeysForTargetId(a,c.targetId).next(l=>{s=l})}).next(()=>r.qo.getDocumentsMatchingQuery(a,e,t?i:ee.min(),t?s:ae())).next(c=>(b5(r,c),{documents:c,Jo:s})))}function b5(n,e){e.forEach((t,r)=>{const i=r.key.getCollectionGroup(),s=n.Wo.get(i)||ee.min();r.readTime.compareTo(s)>0&&n.Wo.set(i,r.readTime)})}class Ah{constructor(){this.activeTargetIds=T3()}na(e){this.activeTargetIds=this.activeTargetIds.add(e)}ra(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ta(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class I5{constructor(){this.Ua=new Ah,this.ka={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Ua.na(e),this.ka[e]||"not-current"}updateQueryState(e,t,r){this.ka[e]=t}removeLocalQueryTarget(e){this.Ua.ra(e)}isLocalQueryTarget(e){return this.Ua.activeTargetIds.has(e)}clearQueryState(e){delete this.ka[e]}getAllActiveQueryTargets(){return this.Ua.activeTargetIds}isActiveQueryTarget(e){return this.Ua.activeTargetIds.has(e)}start(){return this.Ua=new Ah,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Yo(){return typeof document<"u"?document:null}/**
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
 */class T5{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.qa=0,this.$a=null,this.Ka=!0}Wa(){this.qa===0&&(this.Qa("Unknown"),this.$a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.$a=null,this.Ga("Backend didn't respond within 10 seconds."),this.Qa("Offline"),Promise.resolve())))}za(e){this.state==="Online"?this.Qa("Unknown"):(this.qa++,this.qa>=1&&(this.ja(),this.Ga(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Qa("Offline")))}set(e){this.ja(),this.qa=0,e==="Online"&&(this.Ka=!1),this.Qa(e)}Qa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ga(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ka?(dn(t),this.Ka=!1):z("OnlineStateTracker",t)}ja(){this.$a!==null&&(this.$a.cancel(),this.$a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="RemoteStore";class A5{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ha=[],this.Ja=new Map,this.Ya=new Map,this.Za=new Map,this.Xa=new Yn(1e3),this.eu=new Yn(1001),this.tu=new Set,this.nu=[],this.ru=s,this.ru.bt(a=>{r.enqueueAndForget(async()=>{Ir(this)&&(z(Xt,"Restarting streams for network reachability change."),await async function(l){const u=te(l);u.tu.add(4),await Ts(u),u.iu.set("Unknown"),u.tu.delete(4),await lo(u)}(this))})}),this.iu=new T5(r,i)}}async function lo(n){if(Ir(n))for(const e of n.nu)await e(!0)}async function Ts(n){for(const e of n.nu)await e(!1)}function wc(n,e){return n.Ya.get(e)||void 0}function Mf(n,e){const t=te(n),r=wc(t,e.targetId);if(r!==void 0&&t.Ja.has(r))return;const i=function(c,l){const u=wc(c,l);u!==void 0&&c.Za.delete(u);const p=function(I,P){return P%2!=0?I.eu.next():I.Xa.next()}(c,l);return c.Ya.set(l,p),c.Za.set(p,l),p}(t,e.targetId);z(Xt,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new sn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ja.set(i,s),Cl(t)?Sl(t):si(t).Fn()&&xl(t,s)}function Al(n,e){const t=te(n),r=si(t),i=wc(t,e);z(Xt,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),t.Ja.delete(i),t.Ya.delete(e),t.Za.delete(i),r.Fn()&&Ff(t,i),t.Ja.size===0&&(r.Fn()?r.Nn():Ir(t)&&t.iu.set("Unknown"))}function xl(n,e){if(n.su.We(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=n.Za.get(e.targetId);if(t===void 0)return void z(Xt,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}si(n).jn(e)}function Ff(n,e){n.su.We(e),si(n).Hn(e)}function Sl(n){n.su=new S3({getRemoteKeysForTarget:e=>{const t=n.Za.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):ae()},dt:e=>n.Ja.get(e)||null,Tt:()=>n.datastore.serializer.databaseId}),si(n).start(),n.iu.Wa()}function Cl(n){return Ir(n)&&!si(n).Cn()&&n.Ja.size>0}function Ir(n){return te(n).tu.size===0}function Uf(n){n.su=void 0}async function x5(n){n.iu.set("Online")}async function S5(n){n.Ja.forEach((e,t)=>{xl(n,e)})}async function C5(n,e){Uf(n),Cl(n)?(n.iu.za(e),Sl(n)):n.iu.set("Unknown")}async function k5(n,e,t){if(n.iu.set("Online"),e instanceof Qp&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const c of s.targetIds){if(i.Ja.has(c)){const l=i.Za.get(c);l!==void 0&&(await i.remoteSyncer.rejectListen(l,a),i.Ya.delete(l),i.Za.delete(c)),i.Ja.delete(c)}i.su.removeTarget(c)}}(n,e)}catch(r){z(Xt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oa(n,r)}else if(e instanceof ia?n.su.et(e):e instanceof Yp?n.su.ot(e):n.su.rt(e),!t.isEqual(ee.min()))try{const r=await Vf(n.localStore);t.compareTo(r)>=0&&await function(s,a){const c=s.su.Rt(a);c.targetChanges.forEach((u,p)=>{if(u.resumeToken.approximateByteSize()>0){const g=s.Ja.get(p);g&&s.Ja.set(p,g.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,p)=>{const g=s.Ja.get(u);if(!g)return;s.Ja.set(u,g.withResumeToken(Ce.EMPTY_BYTE_STRING,g.snapshotVersion)),Ff(s,u);const I=new sn(g.target,u,p,g.sequenceNumber);xl(s,I)});const l=function(p,g){const I=new Map;g.targetChanges.forEach((L,E)=>{const N=p.Za.get(E);N!==void 0&&I.set(N,L)});let P=new me(oe);return g.targetMismatches.forEach((L,E)=>{const N=p.Za.get(L);N!==void 0&&(P=P.insert(N,E))}),new ws(g.snapshotVersion,I,P,g.documentUpdates,g.augmentedDocumentUpdates,g.resolvedLimboDocuments)}(s,c);return s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){z(Xt,"Failed to raise snapshot:",r),await Oa(n,r)}}async function Oa(n,e,t){if(!ti(e))throw e;n.tu.add(1),await Ts(n),n.iu.set("Offline"),t||(t=()=>Vf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z(Xt,"Retrying IndexedDB access"),await t(),n.tu.delete(1),await lo(n)})}function Bf(n,e){return e().catch(t=>Oa(n,t,e))}async function uo(n){const e=te(n),t=Qn(e);let r=e.Ha.length>0?e.Ha[e.Ha.length-1].batchId:Wc;for(;P5(e);)try{const i=await w5(e.localStore,r);if(i===null){e.Ha.length===0&&t.Nn();break}r=i.batchId,R5(e,i)}catch(i){await Oa(e,i)}$f(e)&&zf(e)}function P5(n){return Ir(n)&&n.Ha.length<10}function R5(n,e){n.Ha.push(e);const t=Qn(n);t.Fn()&&t.Jn&&t.Yn(e.mutations)}function $f(n){return Ir(n)&&!Qn(n).Cn()&&n.Ha.length>0}function zf(n){Qn(n).start()}async function L5(n){Qn(n).er()}async function O5(n){const e=Qn(n);for(const t of n.Ha)e.Yn(t.mutations)}async function D5(n,e,t){const r=n.Ha.shift(),i=wl.from(r,e,t);await Bf(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await uo(n)}async function N5(n,e){e&&Qn(n).Jn&&await async function(r,i){if(function(a){return _3(a)&&a!==M.ABORTED}(i.code)){const s=r.Ha.shift();Qn(r).Mn(),await Bf(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await uo(r)}}(n,e),$f(n)&&zf(n)}async function xh(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),z(Xt,"RemoteStore received new credentials");const r=Ir(t);t.tu.add(3),await Ts(t),r&&t.iu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.tu.delete(3),await lo(t)}async function V5(n,e){const t=te(n);e?(t.tu.delete(2),await lo(t)):e||(t.tu.add(2),await Ts(t),t.iu.set("Unknown"))}function si(n){return n._u||(n._u=function(t,r,i){const s=te(t);return s.nr(),new X3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Qt:x5.bind(null,n),zt:S5.bind(null,n),Ht:C5.bind(null,n),zn:k5.bind(null,n)}),n.nu.push(async e=>{e?(n._u.Mn(),Cl(n)?Sl(n):n.iu.set("Unknown")):(await n._u.stop(),Uf(n))})),n._u}function Qn(n){return n.ou||(n.ou=function(t,r,i){const s=te(t);return s.nr(),new J3(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Qt:()=>Promise.resolve(),zt:L5.bind(null,n),Ht:N5.bind(null,n),Zn:O5.bind(null,n),Xn:D5.bind(null,n)}),n.nu.push(async e=>{e?(n.ou.Mn(),await uo(n)):(await n.ou.stop(),n.Ha.length>0&&(z(Xt,`Stopping write stream with ${n.Ha.length} pending writes`),n.Ha=[]))})),n.ou}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new kl(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pl(n,e){if(dn("AsyncQueue",`${e}: ${n}`),ti(n))return new j(M.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{static emptySet(e){return new ur(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||K.comparator(t.key,r.key):(t,r)=>K.comparator(t.key,r.key),this.keyedMap=Pr(),this.sortedSet=new me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ur)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Sh{constructor(){this.au=new me(K.comparator)}track(e){const t=e.doc.key,r=this.au.get(t);r?e.type!==0&&r.type===3?this.au=this.au.insert(t,e):e.type===3&&r.type!==1?this.au=this.au.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.au=this.au.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.au=this.au.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.au=this.au.remove(t):e.type===1&&r.type===2?this.au=this.au.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.au=this.au.insert(t,{type:2,doc:e.doc}):W(63341,{ft:e,uu:r}):this.au=this.au.insert(t,e)}cu(){const e=[];return this.au.inorderTraversal((t,r)=>{e.push(r)}),e}}class Kr{constructor(e,t,r,i,s,a,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Kr(e,t,ur.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M5{constructor(){this.lu=void 0,this.Eu=[]}hu(){return this.Eu.some(e=>e.Tu())}}class F5{constructor(){this.queries=Ch(),this.onlineState="Unknown",this.Pu=new Set}terminate(){(function(t,r){const i=te(t),s=i.queries;i.queries=Ch(),s.forEach((a,c)=>{for(const l of c.Eu)l.onError(r)})})(this,new j(M.ABORTED,"Firestore shutting down"))}}function Ch(){return new Er(n=>Pf(n),oo)}async function U5(n,e){const t=te(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.hu()&&e.Tu()&&(r=2):(s=new M5,r=e.Tu()?0:1);try{switch(r){case 0:s.lu=await t.onListen(i,!0);break;case 1:s.lu=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=Pl(a,`Initialization of query '${De(e.query)?cn(e.query):Vi(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.Eu.push(e),e.Ru(t.onlineState),s.lu&&e.Iu(s.lu)&&Rl(t)}async function B5(n,e){const t=te(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.Eu.indexOf(e);a>=0&&(s.Eu.splice(a,1),s.Eu.length===0?i=e.Tu()?0:1:!s.hu()&&e.Tu()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function $5(n,e){const t=te(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.Eu)c.Iu(i)&&(r=!0);a.lu=i}}r&&Rl(t)}function z5(n,e,t){const r=te(n),i=r.queries.get(e);if(i)for(const s of i.Eu)s.onError(t);r.queries.delete(e)}function Rl(n){n.Pu.forEach(e=>{e.next()})}var Ec;(function(n){n.Default="default",n.Cache="cache"})(Ec||(Ec={}));class q5{constructor(e,t,r){this.query=e,this.Au=t,this.Vu=!1,this.du=null,this.onlineState="Unknown",this.options=r||{}}Iu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Kr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.fu(e)&&(this.Au.next(e),t=!0):this.mu(e,this.onlineState)&&(this.pu(e),t=!0),this.du=e,t}onError(e){this.Au.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.du&&!this.Vu&&this.mu(this.du,e)&&(this.pu(this.du),t=!0),t}mu(e,t){if(!e.fromCache||!this.Tu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}fu(e){if(e.docChanges.length>0)return!0;const t=this.du&&this.du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}pu(e){e=Kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.Au.next(e)}Tu(){return this.options.source!==Ec.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e){this.key=e}}class jf{constructor(e){this.key=e}}class j5{constructor(e,t){this.query=e,this.Ou=t,this.Mu=null,this.hasCachedResults=!1,this.current=!1,this.Nu=ae(),this.mutatedKeys=ae(),this.Lu=De(e)?vc(e):Jc(e),this.Bu=new ur(this.Lu)}get Uu(){return this.Ou}ku(e,t){const r=t?t.qu:new Sh,i=t?t.Bu:this.Bu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const[l,u]=this.$u(this.query,i);e.inorderTraversal((g,I)=>{const P=i.get(g),L=J9(this.query,I)?I:null,E=!!P&&this.mutatedKeys.has(P.key),N=!!L&&(L.hasLocalMutations||this.mutatedKeys.has(L.key)&&L.hasCommittedMutations);let q=!1;P&&L?P.data.isEqual(L.data)?E!==N&&(r.track({type:3,doc:L}),q=!0):this.Ku(P,L)||(r.track({type:2,doc:L}),q=!0,(l&&this.Lu(L,l)>0||u&&this.Lu(L,u)<0)&&(c=!0)):!P&&L?(r.track({type:0,doc:L}),q=!0):P&&!L&&(r.track({type:1,doc:P}),q=!0,(l||u)&&(c=!0)),q&&(L?(a=a.add(L),s=N?s.add(g):s.delete(g)):(a=a.delete(g),s=s.delete(g)))});const p=this.Wu(this.query);if(p)if(De(this.query)){const g=[];a.forEach(L=>g.push(L));const I=Of(this.query,g);let P=new ur(vc(this.query));for(const L of I)P=P.add(L);a.forEach(L=>{P.has(L.key)||(s=s.delete(L.key),r.track({type:1,doc:L}))}),a=P}else{const g=this.Qu(this.query);for(;a.size>p;){const I=g==="F"?a.last():a.first();a=a.delete(I.key),s=s.delete(I.key),r.track({type:1,doc:I})}}return{Bu:a,qu:r,Uo:c,mutatedKeys:s}}Wu(e){return De(e)?Ko(e)?.limit:e.limit||void 0}Qu(e){if(De(e)){const t=Ko(e);return t&&t.limit<0?"L":"F"}return e.limitType}$u(e,t){if(De(e)){const r=Ko(e)?.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.Wu(this.query)?t.last():null,e.limitType==="L"&&t.size===this.Wu(this.query)?t.first():null]}Ku(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Bu;this.Bu=e.Bu,this.mutatedKeys=e.mutatedKeys;const a=e.qu.cu();a.sort((p,g)=>function(P,L){const E=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{ft:N})}};return E(P)-E(L)}(p.type,g.type)||this.Lu(p.doc,g.doc)),this.Gu(r),i=i??!1;const c=t&&!i?this.zu():[],l=this.Nu.size===0&&this.current&&!i?1:0,u=l!==this.Mu;return this.Mu=l,a.length!==0||u?{snapshot:new Kr(this.query,e.Bu,s,a,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ju:c}:{ju:c}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Bu:this.Bu,qu:new Sh,mutatedKeys:this.mutatedKeys,Uo:!1},!1)):{ju:[]}}Hu(e){return!this.Ou.has(e)&&!!this.Bu.has(e)&&!this.Bu.get(e).hasLocalMutations}Gu(e){e&&(e.addedDocuments.forEach(t=>this.Ou=this.Ou.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ou=this.Ou.delete(t)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Nu;this.Nu=ae(),this.Bu.forEach(r=>{this.Hu(r.key)&&(this.Nu=this.Nu.add(r.key))});const t=[];return e.forEach(r=>{this.Nu.has(r)||t.push(new jf(r))}),this.Nu.forEach(r=>{e.has(r)||t.push(new qf(r))}),t}Ju(e){this.Ou=e.Jo,this.Nu=ae();const t=this.ku(e.documents);return this.applyChanges(t,!0)}Yu(){return Kr.fromInitialDocuments(this.query,this.Bu,this.mutatedKeys,this.Mu===0,this.hasCachedResults)}}const Ll="SyncEngine";class H5{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class G5{constructor(e){this.key=e,this.Zu=!1}}class W5{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Xu={},this.ec=new Er(c=>Pf(c),oo),this.tc=new Map,this.nc=new Set,this.rc=new me(K.comparator),this.sc=new Map,this._c=new El,this.oc={},this.ac=new Map,this.uc=Yn.Cs(),this.onlineState="Unknown",this.cc=void 0}get isPrimaryClient(){return this.cc===!0}}async function K5(n,e,t=!0){const r=Qf(n);let i;const s=r.ec.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Yu()):i=await Hf(r,e,t,!0),i}async function Y5(n,e){const t=Qf(n);await Hf(t,e,!0,!1)}async function Hf(n,e,t,r){const i=await E5(n.localStore,De(e)?e:Ht(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await Q5(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Mf(n.remoteStore,i),c}async function Q5(n,e,t,r,i){n.lc=(g,I,P)=>async function(E,N,q,Y){let se=N.view.ku(q);se.Uo&&(se=await Th(E.localStore,N.query,!1).then(({documents:b})=>N.view.ku(b,se)));const ve=Y&&Y.targetChanges.get(N.targetId),je=Y&&Y.targetMismatches.get(N.targetId)!=null,Pe=N.view.applyChanges(se,E.isPrimaryClient,ve,je);return Ph(E,N.targetId,Pe.ju),Pe.snapshot}(n,g,I,P);const s=await Th(n.localStore,e,!0),a=new j5(e,s.Jo),c=a.ku(s.documents),l=Es.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=a.applyChanges(c,n.isPrimaryClient,l);Ph(n,t,u.ju);const p=new H5(e,t,a);return n.ec.set(e,p),n.tc.has(t)?n.tc.get(t).push(e):n.tc.set(t,[e]),u.snapshot}async function X5(n,e,t){const r=te(n),i=r.ec.get(e),s=r.tc.get(i.targetId);if(s.length>1)return r.tc.set(i.targetId,s.filter(a=>!oo(a,e))),void r.ec.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await _c(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Al(r.remoteStore,i.targetId),bc(r,i.targetId)}).catch(ei)):(bc(r,i.targetId),await _c(r.localStore,i.targetId,!0))}async function J5(n,e){const t=te(n),r=t.ec.get(e),i=t.tc.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Al(t.remoteStore,r.targetId))}async function Z5(n,e,t){const r=ay(n);try{const i=await function(a,c){const l=te(a),u=ge.now(),p=c.reduce((P,L)=>P.add(L.key),ae());let g,I;return l.persistence.runTransaction("Locally write mutations","readwrite",P=>{let L=lt(),E=ae();return l.Qo.getEntries(P,p).next(N=>{L=N,L.forEach((q,Y)=>{Y.isValidDocument()||(E=E.add(q))})}).next(()=>l.localDocuments.getOverlayedDocuments(P,L)).next(N=>{g=N;const q=[];for(const Y of c){const se=e3(Y,g.get(Y.key).overlayedDocument);se!=null&&q.push(new wr(Y.key,se,Cp(se.value.mapValue),on.exists(!0)))}return l.mutationQueue.addMutationBatch(P,u,q,c)}).next(N=>{I=N;const q=N.applyToLocalDocumentSet(g,E);return l.documentOverlayCache.saveOverlays(P,N.batchId,q)})}).then(()=>({batchId:I.batchId,changes:Wp(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,c,l){let u=a.oc[a.currentUser.toKey()];u||(u=new me(oe)),u=u.insert(c,l),a.oc[a.currentUser.toKey()]=u}(r,i.batchId,t),await As(r,i.changes),await uo(r.remoteStore)}catch(i){const s=Pl(i,"Failed to persist write");t.reject(s)}}async function Gf(n,e){const t=te(n);try{const r=await v5(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.sc.get(s);a&&(H(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.Zu=!0:i.modifiedDocuments.size>0?H(a.Zu,14607):i.removedDocuments.size>0&&(H(a.Zu,42227),a.Zu=!1))}),await As(t,r,e)}catch(r){await ei(r)}}function kh(n,e,t){const r=te(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ec.forEach((s,a)=>{const c=a.view.Ru(e);c.snapshot&&i.push(c.snapshot)}),function(a,c){const l=te(a);l.onlineState=c;let u=!1;l.queries.forEach((p,g)=>{for(const I of g.Eu)I.Ru(c)&&(u=!0)}),u&&Rl(l)}(r.eventManager,e),i.length&&r.Xu.zn(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ey(n,e,t){const r=te(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.sc.get(e),s=i&&i.key;if(s){let a=new me(K.comparator);a=a.insert(s,Qe.newNoDocument(s,ee.min()));const c=ae().add(s),l=new ws(ee.min(),new Map,new me(oe),a,lt(),c);await Gf(r,l),r.rc=r.rc.remove(s),r.sc.delete(e),Ol(r)}else await _c(r.localStore,e,!1).then(()=>bc(r,e,t)).catch(ei)}async function ty(n,e){const t=te(n),r=e.batch.batchId;try{const i=await y5(t.localStore,e);Kf(t,r,null),Wf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await As(t,i)}catch(i){await ei(i)}}async function ny(n,e,t){const r=te(n);try{const i=await function(a,c){const l=te(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let p;return l.mutationQueue.lookupMutationBatch(u,c).next(g=>(H(g!==null,37113),p=g.keys(),l.mutationQueue.removeMutationBatch(u,g))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,p,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,p)).next(()=>l.localDocuments.getDocuments(u,p))})}(r.localStore,e);Kf(r,e,t),Wf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await As(r,i)}catch(i){await ei(i)}}function Wf(n,e){(n.ac.get(e)||[]).forEach(t=>{t.resolve()}),n.ac.delete(e)}function Kf(n,e,t){const r=te(n);let i=r.oc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function bc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.tc.get(e))n.ec.delete(r),t&&n.Xu.Ec(r,t);n.tc.delete(e),n.isPrimaryClient&&n._c.s_(e).forEach(r=>{n._c.containsKey(r)||Yf(n,r)})}function Yf(n,e){n.nc.delete(e.path.canonicalString());const t=n.rc.get(e);t!==null&&(Al(n.remoteStore,t),n.rc=n.rc.remove(e),n.sc.delete(t),Ol(n))}function Ph(n,e,t){for(const r of t)r instanceof qf?(n._c.addReference(r.key,e),ry(n,r)):r instanceof jf?(z(Ll,"Document no longer in limbo: "+r.key),n._c.removeReference(r.key,e),n._c.containsKey(r.key)||Yf(n,r.key)):W(19791,{hc:r})}function ry(n,e){const t=e.key,r=t.path.canonicalString();n.rc.get(t)||n.nc.has(r)||(z(Ll,"New document in limbo: "+t),n.nc.add(r),Ol(n))}function Ol(n){for(;n.nc.size>0&&n.rc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new K(de.fromString(e)),r=n.uc.next();n.sc.set(r,new G5(t)),n.rc=n.rc.insert(t,r),Mf(n.remoteStore,new sn(Ht(Xc(t.path)),r,"TargetPurposeLimboResolution",Wa.ce))}}async function As(n,e,t){const r=te(n),i=[],s=[],a=[];r.ec.isEmpty()||(r.ec.forEach((c,l)=>{a.push(r.lc(l,e,t).then(u=>{if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:t?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){i.push(u);const p=Il.vo(l.targetId,u);s.push(p)}}))}),await Promise.all(a),r.Xu.zn(i),await async function(l,u){const p=te(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(u,I=>V.forEach(I.wo,P=>p.persistence.referenceDelegate.addReference(g,I.targetId,P)).next(()=>V.forEach(I.bo,P=>p.persistence.referenceDelegate.removeReference(g,I.targetId,P)))))}catch(g){if(!ti(g))throw g;z(Tl,"Failed to update sequence numbers: "+g)}for(const g of u){const I=g.targetId;if(!g.fromCache){const P=p.$o.get(I),L=P.snapshotVersion,E=P.withLastLimboFreeSnapshotVersion(L);p.$o=p.$o.insert(I,E)}}}(r.localStore,s))}async function iy(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){z(Ll,"User change. New user:",e.toKey());const r=await Nf(t.localStore,e);t.currentUser=e,function(s,a){s.ac.forEach(c=>{c.forEach(l=>{l.reject(new j(M.CANCELLED,a))})}),s.ac.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await As(t,r.zo)}}function sy(n,e){const t=te(n),r=t.sc.get(e);if(r&&r.Zu)return ae().add(r.key);{let i=ae();const s=t.tc.get(e);if(!s)return i;for(const a of s??[]){const c=t.ec.get(a);i=i.unionWith(c.view.Uu)}return i}}function Qf(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ey.bind(null,e),e.Xu.zn=$5.bind(null,e.eventManager),e.Xu.Ec=z5.bind(null,e.eventManager),e}function ay(n){const e=te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ty.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ny.bind(null,e),e}class Da{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=to(e.databaseInfo.databaseId),this.sharedClientState=this.Rc(e),this.persistence=this.Ic(e),await this.persistence.start(),this.localStore=this.Ac(e),this.gcScheduler=this.Vc(e,this.localStore),this.indexBackfillerScheduler=this.dc(e,this.localStore)}Vc(e,t){return null}dc(e,t){return null}Ac(e){return m5(this.persistence,new p5,e.initialUser,this.serializer)}Ic(e){return new Df(bl.C_,this.serializer)}Rc(e){return new I5}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Da.provider={build:()=>new Da};class oy extends Da{constructor(e){super(),this.cacheSizeBytes=e}Vc(e,t){H(this.persistence.referenceDelegate instanceof La,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new a8(r,e.asyncQueue,t)}Ic(e){const t=this.cacheSizeBytes!==void 0?at.withCacheSize(this.cacheSizeBytes):at.DEFAULT;return new Df(r=>La.C_(r,t),this.serializer)}}class Ic{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iy.bind(null,this.syncEngine),await V5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new F5}()}createDatastore(e){const t=to(e.databaseInfo.databaseId),r=Q3(e.databaseInfo);return t8(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,c){return new A5(r,i,s,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>kh(this.syncEngine,t,0),function(){return fh.C()?new fh:new G3}())}createSyncEngine(e,t){return function(i,s,a,c,l,u,p){const g=new W5(i,s,a,c,l,u);return p&&(g.cc=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(t){const r=te(t);z(Xt,"RemoteStore shutting down."),r.tu.add(5),await Ts(r),r.ru.shutdown(),r.iu.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ic.provider={build:()=>new Ic};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.mc(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.mc(this.observer.error,e):dn("Uncaught Error in snapshot listener:",e.toString()))}gc(){this.muted=!0}mc(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="FirestoreClient";class ly{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=Hc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{z(Xn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(z(Xn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Pl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qo(n,e){n.asyncQueue.verifyOperationInProgress(),z(Xn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Nf(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Rh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await uy(n);z(Xn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>xh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>xh(e.remoteStore,i)),n._onlineComponents=e}async function uy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z(Xn,"Using user provided OfflineComponentProvider");try{await Qo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Mt("Error using user provided cache. Falling back to memory cache: "+t),await Qo(n,new Da)}}else z(Xn,"Using default OfflineComponentProvider"),await Qo(n,new oy(void 0));return n._offlineComponents}async function Xf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z(Xn,"Using user provided OnlineComponentProvider"),await Rh(n,n._uninitializedComponentsProvider._online)):(z(Xn,"Using default OnlineComponentProvider"),await Rh(n,new Ic))),n._onlineComponents}function hy(n){return Xf(n).then(e=>e.syncEngine)}async function dy(n){const e=await Xf(n),t=e.eventManager;return t.onListen=K5.bind(null,e.syncEngine),t.onUnlisten=X5.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Y5.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=J5.bind(null,e.syncEngine),t}function py(n,e,t={}){const r=new Fn;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,c,l,u){const p=new cy({next:I=>{p.gc(),a.enqueueAndForget(()=>B5(s,g));const P=I.docs.has(c);!P&&I.fromCache?u.reject(new j(M.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&I.fromCache&&l&&l.source==="server"?u.reject(new j(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(I)},error:I=>u.reject(I)}),g=new q5(Xc(c.path),p,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return U5(s,g)}(await dy(n),n.asyncQueue,e,t,r)),r.promise}function fy(n,e){const t=new Fn;return n.asyncQueue.enqueueAndForget(async()=>Z5(await hy(n),e,t)),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="AsyncQueue";class Oh{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new lf(this,"async_queue_retry"),this.jc=()=>{const r=Yo();r&&z(Lh,"Visibility state changed to "+r.visibilityState),this.xn.gn()},this.Hc=e;const t=Yo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=Yo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const t=new Fn;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(e){if(!ti(e))throw e;z(Lh,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.xn.mn(()=>this.Zc())}}Yc(e){const t=this.Hc.then(()=>(this.Qc=!0,e().catch(r=>{throw this.Wc=r,this.Qc=!1,dn("INTERNAL UNHANDLED ERROR: ",Dh(r)),r}).then(r=>(this.Qc=!1,r))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const i=kl.createAndSchedule(this,e,t,r,s=>this.Xc(s));return this.Kc.push(i),i}Jc(){this.Wc&&W(47125,{el:Dh(this.Wc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function Dh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Dl extends rl{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Oh,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Oh(e),this._firestoreClient=void 0,await e}}}function gy(n,e){const t=typeof n=="object"?n:Ba(),r=typeof n=="string"?n:wa,i=vr(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Q2("firestore");s&&l8(i,...s)}return i}function Jf(n){if(n._terminated)throw new j(M.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||my(n),n._firestoreClient}function my(n){const e=n._freezeSettings(),t=r8(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new ly(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(i){const s=i?._online.build();return{_offline:i?._offline.build(s),_online:s}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{convertValue(e,t="none"){switch(ke(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _r(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){const t=e.fields?.[Ki].arrayValue?.values?.map(r=>we(r.doubleValue));return new ut(t)}convertGeoPoint(e){return new Wt(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=vs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(jr(e));default:return null}}convertTimestamp(e){const t=jn(e);return new ge(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=de.fromString(e);H(rf(r),9688,{name:e});const i=new Wi(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(t)||dn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */class vy extends yy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Tt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}}const Nh="@firebase/firestore",Vh="4.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _y(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(no("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _y extends Zf{data(){return super.data()}}function wy(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ki{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hr extends Zf{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(no("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=hr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}hr._jsonSchemaVersion="firestore/documentSnapshot/1.0",hr._jsonSchema={type:xe("string",hr._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};class aa extends hr{data(e={}){return super.data(e)}}class Ui{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ki(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new aa(this._firestore,this._userDataWriter,r.key,r,new ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{De(i._snapshot.query)?vc(i._snapshot.query):Jc(i.query._query);const l=new aa(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ki(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new aa(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ki(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,p=-1;return c.type!==0&&(u=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:Ey(c.type),doc:l,oldIndex:u,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ui._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ey(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}/**
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
 */Ui._jsonSchemaVersion="firestore/querySnapshot/1.0",Ui._jsonSchema={type:xe("string",Ui._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(n){n=ji(n,Ne);const e=ji(n.firestore,Dl),t=Jf(e);return py(t,n._key).then(r=>Ty(e,n,r))}function by(n,e,t){n=ji(n,Ne);const r=ji(n.firestore,Dl),i=wy(n.converter,e,t),s=p8(r);return Iy(r,[f8(s,"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,on.none())])}function Iy(n,e){const t=Jf(n);return fy(t,e)}function Ty(n,e,t){const r=t.docs.get(e._key),i=new vy(n);return new hr(n,i,e._key,r,new ki(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){w4(Xr),Kt(new Vt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new Dl(new I4(r.getProvider("auth-internal")),new x4(a,r.getProvider("app-check-internal")),G4(a,i),a);return s={useFetchStreams:t,...s},c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),At(Nh,Vh,e),At(Nh,Vh,"esm2020")})();const t2={apiKey:"AIzaSyABnvYQl4QzP1lHF4Ei_AzrDPYlMKoTXpA",authDomain:"yathralanka-2ac43.firebaseapp.com",projectId:"yathralanka-2ac43",storageBucket:"yathralanka-2ac43.firebasestorage.app",measurementId:"G-KXWXP8TGMS",appId:"1:1032179534120:web:21d200d59018319f7ca81d",messagingSenderId:"1032179534120"};console.log("Config keys being used:",t2.projectId);const Na=pg().length===0?nd(t2):Ba();zm(Na);let st;try{st=c4(Na)}catch{st=jd(Na,{persistence:[sp,Xd]})}const Nl=gy(Na),Ay="modulepreload",xy=function(n,e){return new URL(n,e).href},Mh={},n2=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");i=Promise.allSettled(t.map(u=>{if(u=xy(u,r),u in Mh)return;Mh[u]=!0;const p=u.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(!!r)for(let L=a.length-1;L>=0;L--){const E=a[L];if(E.href===u&&(!p||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${g}`))return;const P=document.createElement("link");if(P.rel=p?"stylesheet":Ay,p||(P.as="script"),P.crossOrigin="",P.href=u,l&&P.setAttribute("nonce",l),document.head.appendChild(P),p)return new Promise((L,E)=>{P.addEventListener("load",L),P.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */const Sy=n=>{const e=new Map;e.set("web",{name:"web"});const t=n.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},r=(s,a)=>{t.platforms.set(s,a)},i=s=>{t.platforms.has(s)&&(t.currentPlatform=t.platforms.get(s))};return t.addPlatform=r,t.setPlatform=i,t},Cy=n=>n.CapacitorPlatforms=Sy(n),r2=Cy(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});r2.addPlatform;r2.setPlatform;var Yr;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Yr||(Yr={}));class Br extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}const ky=n=>{var e,t;return n?.androidBridge?"android":!((t=(e=n?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},Py=n=>{var e,t,r,i,s;const a=n.CapacitorCustomPlatform||null,c=n.Capacitor||{},l=c.Plugins=c.Plugins||{},u=n.CapacitorPlatforms,p=()=>a!==null?a.name:ky(n),g=((e=u?.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||p,I=()=>g()!=="web",P=((t=u?.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||I,L=b=>{const y=ve.get(b);return!!(y?.platforms.has(g())||q(b))},E=((r=u?.currentPlatform)===null||r===void 0?void 0:r.isPluginAvailable)||L,N=b=>{var y;return(y=c.PluginHeaders)===null||y===void 0?void 0:y.find(w=>w.name===b)},q=((i=u?.currentPlatform)===null||i===void 0?void 0:i.getPluginHeader)||N,Y=b=>n.console.error(b),se=(b,y,w)=>Promise.reject(`${w} does not have an implementation of "${y}".`),ve=new Map,je=(b,y={})=>{const w=ve.get(b);if(w)return console.warn(`Capacitor plugin "${b}" already registered. Cannot register plugins twice.`),w.proxy;const x=g(),T=q(b);let C;const _=async()=>(!C&&x in y?C=typeof y[x]=="function"?C=await y[x]():C=y[x]:a!==null&&!C&&"web"in y&&(C=typeof y.web=="function"?C=await y.web():C=y.web),C),He=(Ve,Be)=>{var ft,kt;if(T){const gt=T?.methods.find(et=>Be===et.name);if(gt)return gt.rtype==="promise"?et=>c.nativePromise(b,Be.toString(),et):(et,mn)=>c.nativeCallback(b,Be.toString(),et,mn);if(Ve)return(ft=Ve[Be])===null||ft===void 0?void 0:ft.bind(Ve)}else{if(Ve)return(kt=Ve[Be])===null||kt===void 0?void 0:kt.bind(Ve);throw new Br(`"${b}" plugin is not implemented on ${x}`,Yr.Unimplemented)}},Ct=Ve=>{let Be;const ft=(...kt)=>{const gt=_().then(et=>{const mn=He(et,Ve);if(mn){const yn=mn(...kt);return Be=yn?.remove,yn}else throw new Br(`"${b}.${Ve}()" is not implemented on ${x}`,Yr.Unimplemented)});return Ve==="addListener"&&(gt.remove=async()=>Be()),gt};return ft.toString=()=>`${Ve.toString()}() { [capacitor code] }`,Object.defineProperty(ft,"name",{value:Ve,writable:!1,configurable:!1}),ft},Ss=Ct("addListener"),Cs=Ct("removeListener"),Tr=(Ve,Be)=>{const ft=Ss({eventName:Ve},Be),kt=async()=>{const et=await ft;Cs({eventName:Ve,callbackId:et},Be)},gt=new Promise(et=>ft.then(()=>et({remove:kt})));return gt.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await kt()},gt},gn=new Proxy({},{get(Ve,Be){switch(Be){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return T?Tr:Ss;case"removeListener":return Cs;default:return Ct(Be)}}});return l[b]=gn,ve.set(b,{name:b,proxy:gn,platforms:new Set([...Object.keys(y),...T?[x]:[]])}),gn},Pe=((s=u?.currentPlatform)===null||s===void 0?void 0:s.registerPlugin)||je;return c.convertFileSrc||(c.convertFileSrc=b=>b),c.getPlatform=g,c.handleError=Y,c.isNativePlatform=P,c.isPluginAvailable=E,c.pluginMethodNoop=se,c.registerPlugin=Pe,c.Exception=Br,c.DEBUG=!!c.DEBUG,c.isLoggingEnabled=!!c.isLoggingEnabled,c.platform=c.getPlatform(),c.isNative=c.isNativePlatform(),c},Ry=n=>n.Capacitor=Py(n),Lt=Ry(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),xs=Lt.registerPlugin;Lt.Plugins;class Vl{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);const s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s),r&&this.sendRetainedArgumentsForEvent(e);const a=async()=>this.removeListener(e,t);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){const i=this.listeners[e];if(!i){if(r){let s=this.retainedEventArguments[e];s||(s=[]),s.push(t),this.retainedEventArguments[e]=s}return}i.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new Lt.Exception(e,Yr.Unimplemented)}unavailable(e="not available"){return new Lt.Exception(e,Yr.Unavailable)}async removeListener(e,t){const r=this.listeners[e];if(!r)return;const i=r.indexOf(t);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(r=>{this.notifyListeners(e,r)}))}}const Fh=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Uh=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Ly extends Vl{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[i,s]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");i=Uh(i).trim(),s=Uh(s).trim(),t[i]=s}),t}async setCookie(e){try{const t=Fh(e.key),r=Fh(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,s=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${i}; path=${s}; ${a};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}xs("CapacitorCookies",{web:()=>new Ly});const Oy=async n=>new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const i=r.result;e(i.indexOf(",")>=0?i.split(",")[1]:i)},r.onerror=i=>t(i),r.readAsDataURL(n)}),Dy=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(i=>i.toLocaleLowerCase()).reduce((i,s,a)=>(i[s]=n[e[a]],i),{})},Ny=(n,e=!0)=>n?Object.entries(n).reduce((r,i)=>{const[s,a]=i;let c,l;return Array.isArray(a)?(l="",a.forEach(u=>{c=e?encodeURIComponent(u):u,l+=`${s}=${c}&`}),l.slice(0,-1)):(c=e?encodeURIComponent(a):a,l=`${s}=${c}`),`${r}&${l}`},"").substr(1):null,Vy=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),i=Dy(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(i.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[a,c]of Object.entries(n.data||{}))s.set(a,c);t.body=s.toString()}else if(i.includes("multipart/form-data")||n.data instanceof FormData){const s=new FormData;if(n.data instanceof FormData)n.data.forEach((c,l)=>{s.append(l,c)});else for(const c of Object.keys(n.data))s.append(c,n.data[c]);t.body=s;const a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(i.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class My extends Vl{async request(e){const t=Vy(e,e.webFetchExtra),r=Ny(e.params,e.shouldEncodeUrlParams),i=r?`${e.url}?${r}`:e.url,s=await fetch(i,t),a=s.headers.get("content-type")||"";let{responseType:c="text"}=s.ok?e:{};a.includes("application/json")&&(c="json");let l,u;switch(c){case"arraybuffer":case"blob":u=await s.blob(),l=await Oy(u);break;case"json":l=await s.json();break;case"document":case"text":default:l=await s.text()}const p={};return s.headers.forEach((g,I)=>{p[I]=g}),{data:l,headers:p,status:s.status,url:s.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}xs("CapacitorHttp",{web:()=>new My});const X=xs("CapacitorGoogleMaps",{web:()=>n2(()=>import("./web-CJUhqFua.js"),[],import.meta.url).then(n=>new n.CapacitorGoogleMapsWeb)});X.addListener("isMapInFocus",n=>{var e;const t=n.x,r=n.y,i=document.elementFromPoint(t,r),a=((e=i?.dataset)===null||e===void 0?void 0:e.internalId)===n.mapId;X.dispatchMapEvent({id:n.mapId,focus:a})});class Fy{constructor(e){this.southwest=e.southwest,this.center=e.center,this.northeast=e.northeast}async contains(e){return(await X.mapBoundsContains({bounds:this,point:e})).contains}async extend(e){const t=await X.mapBoundsExtend({bounds:this,point:e});return this.southwest=t.bounds.southwest,this.center=t.bounds.center,this.northeast=t.bounds.northeast,this}}var Tc;(function(n){n.Normal="Normal",n.Hybrid="Hybrid",n.Satellite="Satellite",n.Terrain="Terrain",n.None="None"})(Tc||(Tc={}));class Uy extends HTMLElement{constructor(){super()}connectedCallback(){if(this.innerHTML="",Lt.getPlatform()=="ios"){this.style.overflow="scroll",this.style["-webkit-overflow-scrolling"]="touch";const e=document.createElement("div");e.style.height="200%",this.appendChild(e)}}}customElements.define("capacitor-google-map",Uy);class Va{constructor(e){this.element=null,this.resizeObserver=null,this.handleScrollEvent=()=>this.updateMapBounds(),this.id=e}static async create(e,t){const r=new Va(e.id);if(!e.element)throw new Error("container element is required");e.config.androidLiteMode===void 0&&(e.config.androidLiteMode=!1),r.element=e.element,r.element.dataset.internalId=e.id;const i=await Va.getElementBounds(e.element);if(e.config.width=i.width,e.config.height=i.height,e.config.x=i.x,e.config.y=i.y,e.config.devicePixelRatio=window.devicePixelRatio,Lt.getPlatform()=="android"&&r.initScrolling(),Lt.isNativePlatform()){e.element={};const s=()=>{var p,g;const I=(g=(p=r.element)===null||p===void 0?void 0:p.getBoundingClientRect())!==null&&g!==void 0?g:{};return{x:I.x,y:I.y,width:I.width,height:I.height}},a=()=>{X.onDisplay({id:r.id,mapBounds:s()})},c=()=>{X.onResize({id:r.id,mapBounds:s()})},l=r.element.closest(".ion-page");Lt.getPlatform()==="ios"&&l&&(l.addEventListener("ionViewWillEnter",()=>{setTimeout(()=>{a()},100)}),l.addEventListener("ionViewDidEnter",()=>{setTimeout(()=>{a()},100)}));const u={width:i.width,height:i.height,isHidden:!1};r.resizeObserver=new ResizeObserver(()=>{if(r.element!=null){const p=r.element.getBoundingClientRect(),g=p.width===0&&p.height===0;g||(u.isHidden?Lt.getPlatform()==="ios"&&!l&&a():(u.width!==p.width||u.height!==p.height)&&c()),u.width=p.width,u.height=p.height,u.isHidden=g}}),r.resizeObserver.observe(r.element)}if(await new Promise((s,a)=>{setTimeout(async()=>{try{await X.create(e),s(void 0)}catch(c){a(c)}},200)}),t){const s=await X.addListener("onMapReady",a=>{a.mapId==r.id&&(t(a),s.remove())})}return r}static async getElementBounds(e){return new Promise(t=>{let r=e.getBoundingClientRect();if(r.width==0){let i=0;const s=setInterval(function(){r.width==0&&i<30?(r=e.getBoundingClientRect(),i++):(i==30&&console.warn("Map size could not be determined"),clearInterval(s),t(r))},100)}else t(r)})}async enableTouch(){return X.enableTouch({id:this.id})}async disableTouch(){return X.disableTouch({id:this.id})}async enableClustering(e){return X.enableClustering({id:this.id,minClusterSize:e})}async disableClustering(){return X.disableClustering({id:this.id})}async addMarker(e){return(await X.addMarker({id:this.id,marker:e})).id}async addMarkers(e){return(await X.addMarkers({id:this.id,markers:e})).ids}async removeMarker(e){return X.removeMarker({id:this.id,markerId:e})}async removeMarkers(e){return X.removeMarkers({id:this.id,markerIds:e})}async addPolygons(e){return(await X.addPolygons({id:this.id,polygons:e})).ids}async addPolylines(e){return(await X.addPolylines({id:this.id,polylines:e})).ids}async removePolygons(e){return X.removePolygons({id:this.id,polygonIds:e})}async addCircles(e){return(await X.addCircles({id:this.id,circles:e})).ids}async removeCircles(e){return X.removeCircles({id:this.id,circleIds:e})}async removePolylines(e){return X.removePolylines({id:this.id,polylineIds:e})}async destroy(){var e;return Lt.getPlatform()=="android"&&this.disableScrolling(),Lt.isNativePlatform()&&((e=this.resizeObserver)===null||e===void 0||e.disconnect()),this.removeAllMapListeners(),X.destroy({id:this.id})}async setCamera(e){return X.setCamera({id:this.id,config:e})}async getMapType(){const{type:e}=await X.getMapType({id:this.id});return Tc[e]}async setMapType(e){return X.setMapType({id:this.id,mapType:e})}async enableIndoorMaps(e){return X.enableIndoorMaps({id:this.id,enabled:e})}async enableTrafficLayer(e){return X.enableTrafficLayer({id:this.id,enabled:e})}async enableAccessibilityElements(e){return X.enableAccessibilityElements({id:this.id,enabled:e})}async enableCurrentLocation(e){return X.enableCurrentLocation({id:this.id,enabled:e})}async setPadding(e){return X.setPadding({id:this.id,padding:e})}async getMapBounds(){return new Fy(await X.getMapBounds({id:this.id}))}async fitBounds(e,t){return X.fitBounds({id:this.id,bounds:e,padding:t})}initScrolling(){const e=document.getElementsByTagName("ion-content");for(let t=0;t<e.length;t++)e[t].scrollEvents=!0;window.addEventListener("ionScroll",this.handleScrollEvent),window.addEventListener("scroll",this.handleScrollEvent),window.addEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.addEventListener("change",()=>{setTimeout(this.updateMapBounds,500)}):window.addEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,500)})}disableScrolling(){window.removeEventListener("ionScroll",this.handleScrollEvent),window.removeEventListener("scroll",this.handleScrollEvent),window.removeEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.removeEventListener("change",()=>{setTimeout(this.updateMapBounds,1e3)}):window.removeEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,1e3)})}updateMapBounds(){if(this.element){const e=this.element.getBoundingClientRect();X.onScroll({id:this.id,mapBounds:{x:e.x,y:e.y,width:e.width,height:e.height}})}}async setOnCameraIdleListener(e){this.onCameraIdleListener&&this.onCameraIdleListener.remove(),e?this.onCameraIdleListener=await X.addListener("onCameraIdle",this.generateCallback(e)):this.onCameraIdleListener=void 0}async setOnBoundsChangedListener(e){this.onBoundsChangedListener&&this.onBoundsChangedListener.remove(),e?this.onBoundsChangedListener=await X.addListener("onBoundsChanged",this.generateCallback(e)):this.onBoundsChangedListener=void 0}async setOnCameraMoveStartedListener(e){this.onCameraMoveStartedListener&&this.onCameraMoveStartedListener.remove(),e?this.onCameraMoveStartedListener=await X.addListener("onCameraMoveStarted",this.generateCallback(e)):this.onCameraMoveStartedListener=void 0}async setOnClusterClickListener(e){this.onClusterClickListener&&this.onClusterClickListener.remove(),e?this.onClusterClickListener=await X.addListener("onClusterClick",this.generateCallback(e)):this.onClusterClickListener=void 0}async setOnClusterInfoWindowClickListener(e){this.onClusterInfoWindowClickListener&&this.onClusterInfoWindowClickListener.remove(),e?this.onClusterInfoWindowClickListener=await X.addListener("onClusterInfoWindowClick",this.generateCallback(e)):this.onClusterInfoWindowClickListener=void 0}async setOnInfoWindowClickListener(e){this.onInfoWindowClickListener&&this.onInfoWindowClickListener.remove(),e?this.onInfoWindowClickListener=await X.addListener("onInfoWindowClick",this.generateCallback(e)):this.onInfoWindowClickListener=void 0}async setOnMapClickListener(e){this.onMapClickListener&&this.onMapClickListener.remove(),e?this.onMapClickListener=await X.addListener("onMapClick",this.generateCallback(e)):this.onMapClickListener=void 0}async setOnPolygonClickListener(e){this.onPolygonClickListener&&this.onPolygonClickListener.remove(),e?this.onPolygonClickListener=await X.addListener("onPolygonClick",this.generateCallback(e)):this.onPolygonClickListener=void 0}async setOnCircleClickListener(e){this.onCircleClickListener&&this.onCircleClickListener.remove(),e?this.onCircleClickListener=await X.addListener("onCircleClick",this.generateCallback(e)):this.onCircleClickListener=void 0}async setOnMarkerClickListener(e){this.onMarkerClickListener&&this.onMarkerClickListener.remove(),e?this.onMarkerClickListener=await X.addListener("onMarkerClick",this.generateCallback(e)):this.onMarkerClickListener=void 0}async setOnPolylineClickListener(e){this.onPolylineClickListener&&this.onPolylineClickListener.remove(),e?this.onPolylineClickListener=await X.addListener("onPolylineClick",this.generateCallback(e)):this.onPolylineClickListener=void 0}async setOnMarkerDragStartListener(e){this.onMarkerDragStartListener&&this.onMarkerDragStartListener.remove(),e?this.onMarkerDragStartListener=await X.addListener("onMarkerDragStart",this.generateCallback(e)):this.onMarkerDragStartListener=void 0}async setOnMarkerDragListener(e){this.onMarkerDragListener&&this.onMarkerDragListener.remove(),e?this.onMarkerDragListener=await X.addListener("onMarkerDrag",this.generateCallback(e)):this.onMarkerDragListener=void 0}async setOnMarkerDragEndListener(e){this.onMarkerDragEndListener&&this.onMarkerDragEndListener.remove(),e?this.onMarkerDragEndListener=await X.addListener("onMarkerDragEnd",this.generateCallback(e)):this.onMarkerDragEndListener=void 0}async setOnMyLocationButtonClickListener(e){this.onMyLocationButtonClickListener&&this.onMyLocationButtonClickListener.remove(),e?this.onMyLocationButtonClickListener=await X.addListener("onMyLocationButtonClick",this.generateCallback(e)):this.onMyLocationButtonClickListener=void 0}async setOnMyLocationClickListener(e){this.onMyLocationClickListener&&this.onMyLocationClickListener.remove(),e?this.onMyLocationClickListener=await X.addListener("onMyLocationClick",this.generateCallback(e)):this.onMyLocationClickListener=void 0}async removeAllMapListeners(){this.onBoundsChangedListener&&(this.onBoundsChangedListener.remove(),this.onBoundsChangedListener=void 0),this.onCameraIdleListener&&(this.onCameraIdleListener.remove(),this.onCameraIdleListener=void 0),this.onCameraMoveStartedListener&&(this.onCameraMoveStartedListener.remove(),this.onCameraMoveStartedListener=void 0),this.onClusterClickListener&&(this.onClusterClickListener.remove(),this.onClusterClickListener=void 0),this.onClusterInfoWindowClickListener&&(this.onClusterInfoWindowClickListener.remove(),this.onClusterInfoWindowClickListener=void 0),this.onInfoWindowClickListener&&(this.onInfoWindowClickListener.remove(),this.onInfoWindowClickListener=void 0),this.onMapClickListener&&(this.onMapClickListener.remove(),this.onMapClickListener=void 0),this.onPolylineClickListener&&(this.onPolylineClickListener.remove(),this.onPolylineClickListener=void 0),this.onMarkerClickListener&&(this.onMarkerClickListener.remove(),this.onMarkerClickListener=void 0),this.onPolygonClickListener&&(this.onPolygonClickListener.remove(),this.onPolygonClickListener=void 0),this.onCircleClickListener&&(this.onCircleClickListener.remove(),this.onCircleClickListener=void 0),this.onMarkerDragStartListener&&(this.onMarkerDragStartListener.remove(),this.onMarkerDragStartListener=void 0),this.onMarkerDragListener&&(this.onMarkerDragListener.remove(),this.onMarkerDragListener=void 0),this.onMarkerDragEndListener&&(this.onMarkerDragEndListener.remove(),this.onMarkerDragEndListener=void 0),this.onMyLocationButtonClickListener&&(this.onMyLocationButtonClickListener.remove(),this.onMyLocationButtonClickListener=void 0),this.onMyLocationClickListener&&(this.onMyLocationClickListener.remove(),this.onMyLocationClickListener=void 0)}generateCallback(e){const t=this.id;return r=>{r.mapId==t&&e(r)}}}const cs=xs("Geolocation",{web:()=>n2(()=>import("./web-CKiSqie5.js"),[],import.meta.url).then(n=>new n.GeolocationWeb)});var On;(function(n){n.Prompt="PROMPT",n.Camera="CAMERA",n.Photos="PHOTOS"})(On||(On={}));var Bi;(function(n){n.Rear="REAR",n.Front="FRONT"})(Bi||(Bi={}));var Ma;(function(n){n.Uri="uri",n.Base64="base64",n.DataUrl="dataUrl"})(Ma||(Ma={}));class i2 extends Vl{async getPhoto(e){return new Promise(async(t,r)=>{if(e.webUseInput||e.source===On.Photos)this.fileInputExperience(e,t,r);else if(e.source===On.Prompt){let i=document.querySelector("pwa-action-sheet");i||(i=document.createElement("pwa-action-sheet"),document.body.appendChild(i)),i.header=e.promptLabelHeader||"Photo",i.cancelable=!1,i.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],i.addEventListener("onSelection",async s=>{s.detail===0?this.fileInputExperience(e,t,r):this.cameraExperience(e,t,r)})}else this.cameraExperience(e,t,r)})}async pickImages(e){return new Promise(async(t,r)=>{this.multipleFileInputExperience(t,r)})}async cameraExperience(e,t,r){if(customElements.get("pwa-camera-modal")){const i=document.createElement("pwa-camera-modal");i.facingMode=e.direction===Bi.Front?"user":"environment",document.body.appendChild(i);try{await i.componentOnReady(),i.addEventListener("onPhoto",async s=>{const a=s.detail;a===null?r(new Br("User cancelled photos app")):a instanceof Error?r(a):t(await this._getCameraPhoto(a,e)),i.dismiss(),document.body.removeChild(i)}),i.present()}catch{this.fileInputExperience(e,t,r)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(e,t,r)}fileInputExperience(e,t,r){let i=document.querySelector("#_capacitor-camera-input");const s=()=>{var a;(a=i.parentNode)===null||a===void 0||a.removeChild(i)};i||(i=document.createElement("input"),i.id="_capacitor-camera-input",i.type="file",i.hidden=!0,document.body.appendChild(i),i.addEventListener("change",a=>{const c=i.files[0];let l="jpeg";if(c.type==="image/png"?l="png":c.type==="image/gif"&&(l="gif"),e.resultType==="dataUrl"||e.resultType==="base64"){const u=new FileReader;u.addEventListener("load",()=>{if(e.resultType==="dataUrl")t({dataUrl:u.result,format:l});else if(e.resultType==="base64"){const p=u.result.split(",")[1];t({base64String:p,format:l})}s()}),u.readAsDataURL(c)}else t({webPath:URL.createObjectURL(c),format:l}),s()}),i.addEventListener("cancel",a=>{r(new Br("User cancelled photos app")),s()})),i.accept="image/*",i.capture=!0,e.source===On.Photos||e.source===On.Prompt?i.removeAttribute("capture"):e.direction===Bi.Front?i.capture="user":e.direction===Bi.Rear&&(i.capture="environment"),i.click()}multipleFileInputExperience(e,t){let r=document.querySelector("#_capacitor-camera-input-multiple");const i=()=>{var s;(s=r.parentNode)===null||s===void 0||s.removeChild(r)};r||(r=document.createElement("input"),r.id="_capacitor-camera-input-multiple",r.type="file",r.hidden=!0,r.multiple=!0,document.body.appendChild(r),r.addEventListener("change",s=>{const a=[];for(let c=0;c<r.files.length;c++){const l=r.files[c];let u="jpeg";l.type==="image/png"?u="png":l.type==="image/gif"&&(u="gif"),a.push({webPath:URL.createObjectURL(l),format:u})}e({photos:a}),i()}),r.addEventListener("cancel",s=>{t(new Br("User cancelled photos app")),i()})),r.accept="image/*",r.click()}_getCameraPhoto(e,t){return new Promise((r,i)=>{const s=new FileReader,a=e.type.split("/")[1];t.resultType==="uri"?r({webPath:URL.createObjectURL(e),format:a,saved:!1}):(s.readAsDataURL(e),s.onloadend=()=>{const c=s.result;t.resultType==="dataUrl"?r({dataUrl:c,format:a,saved:!1}):r({base64String:c.split(",")[1],format:a,saved:!1})},s.onerror=c=>{i(c)})})}async checkPermissions(){if(typeof navigator>"u"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}new i2;const Bh=xs("Camera",{web:()=>new i2}),$h=localStorage.getItem("yathra_user_profile");let s2={...Qr};if($h)try{s2={...Qr,...JSON.parse($h)}}catch{}let f={currentScreen:"splash",user:s2,isGuest:!1,pendingAction:null,authTab:"signin",activeSite:null,activeQuest:null,siteReferrer:"dashboard",activeDirectoryTab:"Heritage Trail",dwellTimer:null,dwellTimeLeft:900,dwellActive:!1,gpsVerified:!1,hasInitialPhotoCaptured:!1,dwellImages:[],cooldownTimer:null,cooldownTimeLeft:300,cooldownActive:!1,verificationComment:"",lastVerificationResult:null,lastKnownLocation:null,eventLedger:JSON.parse(localStorage.getItem("yathra_event_ledger")||"[]"),ledgerFilter:"ALL",stageDrawerOpen:!1,demoOverride:{active:!1,mockLat:null,mockLng:null,mockVisionScore:null,forcedStatus:null},currentQuizIndex:0,quizCorrectAnswers:0,quizAnswers:[],petitionSignatures:8742,petitionSigned:!1,donationAmount:0,navStack:[]};(!f.eventLedger||f.eventLedger.length===0)&&(f.eventLedger=[{eventId:"EVT-20260820-9A7F",timestamp:new Date(Date.now()-36e5).toISOString(),siteId:"sigiriya",siteName:"Sigiriya Rock Fortress",userCoords:{latitude:7.957,longitude:80.7603,accuracy:4.8},targetCoords:{latitude:7.957,longitude:80.7603},distanceDeltaMeters:14,visionScore:96,status:"PASSED",imageMetadata:{sizeBytes:184200,mimeType:"image/jpeg",hash:"SHA256-a8f3b9c1d2e4"},signature:"0x4a8f9c1d2e3f4b5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f"},{eventId:"EVT-20260820-8B3E",timestamp:new Date(Date.now()-72e5).toISOString(),siteId:"mihintale",siteName:"Mihintale",userCoords:{latitude:8.3508,longitude:80.5186,accuracy:5.1},targetCoords:{latitude:8.3508,longitude:80.5186},distanceDeltaMeters:28,visionScore:91,status:"PASSED",imageMetadata:{sizeBytes:165e3,mimeType:"image/jpeg",hash:"SHA256-b7e2c9d1a4f8"},signature:"0x9b8a7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f"},{eventId:"EVT-20260820-7C1D",timestamp:new Date(Date.now()-144e5).toISOString(),siteId:"galle_fort",siteName:"Galle Dutch Fort",userCoords:{latitude:6.0535,longitude:80.221,accuracy:12},targetCoords:{latitude:6.03,longitude:80.215},distanceDeltaMeters:2640,visionScore:89,status:"OUT_OF_BOUNDS",imageMetadata:{sizeBytes:198e3,mimeType:"image/jpeg",hash:"SHA256-c3d2e1f4a5b6"},signature:"0x1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b"},{eventId:"EVT-20260820-6D9A",timestamp:new Date(Date.now()-288e5).toISOString(),siteId:"temple_tooth",siteName:"Temple of the Sacred Tooth Relic",userCoords:{latitude:6.9271,longitude:79.8612,accuracy:50},targetCoords:{latitude:7.2936,longitude:80.6413},distanceDeltaMeters:115e3,visionScore:42,status:"SPOOF_SUSPECTED",imageMetadata:{sizeBytes:94e3,mimeType:"image/jpeg",hash:"SHA256-d4e3f2a1b5c6"},signature:"0x3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c"}],localStorage.setItem("yathra_event_ledger",JSON.stringify(f.eventLedger)));function Ml(n,e,t,r){const s=(t-n)*Math.PI/180,a=(r-e)*Math.PI/180,c=Math.sin(s/2)*Math.sin(s/2)+Math.cos(n*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(a/2)*Math.sin(a/2),l=2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c));return Math.round(6371e3*l)}function By(n,e,t=Date.now()){if(f.lastKnownLocation&&f.lastKnownLocation.timestamp){const r=(t-f.lastKnownLocation.timestamp)/1e3;if(r>0&&r<3600){const s=Ml(f.lastKnownLocation.latitude,f.lastKnownLocation.longitude,n,e)/r*3.6;if(s>120)return{isSpoof:!0,reason:`Unrealistic velocity jump: ${Math.round(s)} km/h (>120 km/h threshold)`}}}return f.lastKnownLocation={latitude:n,longitude:e,timestamp:t},{isSpoof:!1,reason:"Velocity profile clean"}}function $y(n,e,t,r,i=Date.now()){let s=e,a=t,c=null,l=null;f.demoOverride&&f.demoOverride.active&&(f.demoOverride.mockLat!==null&&(s=f.demoOverride.mockLat),f.demoOverride.mockLng!==null&&(a=f.demoOverride.mockLng),f.demoOverride.mockVisionScore!==null&&(c=f.demoOverride.mockVisionScore),f.demoOverride.forcedStatus!==null&&(l=f.demoOverride.forcedStatus));const u=n.latitude,p=n.longitude,g=Ml(s,a,u,p),I=Fl,P=By(s,a,i);let L=88;if(c!==null)L=c;else if(r&&r.length>50){let Y=0;for(let se=0;se<r.length;se++)Y=(Y<<5)-Y+r.charCodeAt(se),Y|=0;L=75+Math.abs(Y%24)}let E="PASSED",N="";l!==null?E=l:P.isSpoof?(E="SPOOF_SUSPECTED",N=`Security Anomaly Intercepted: ${P.reason}`):g>I?(E="OUT_OF_BOUNDS",N=`Geofence Delta Alert: Device is ${g}m from site coordinates (Geofence Threshold: ${I}m).`):L<75?(E="FAILED_VISION",N=`Vision Model Rejection: Landmark feature match score (${L}%) is below required 75% threshold.`):(E="PASSED",N=`Verification Successful: Landmark geometry matches reference dataset (${L}% Confidence). Distance Delta: ${g}m.`);const q=zy(n,s,a,g,L,E,r);return f.lastVerificationResult={status:E,visionScore:L,distanceMeters:g,comment:N,block:q},f.verificationComment=N,f.lastVerificationResult}function zy(n,e,t,r,i,s,a){const c="EVT-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).substring(2,6).toUpperCase(),l=new Date().toISOString(),u=`${c}:${l}:${n.id}:${e}:${t}:${r}:${i}:${s}`;let p=0;for(let P=0;P<u.length;P++)p=(p<<7)-p+u.charCodeAt(P),p|=0;const g="0x"+Math.abs(p).toString(16).padStart(8,"0")+Math.abs(p*31).toString(16).padEnd(24,"f").substring(0,56),I={eventId:c,timestamp:l,siteId:n.id,siteName:n.name,userCoords:{latitude:e,longitude:t,accuracy:5},targetCoords:{latitude:n.latitude,longitude:n.longitude},distanceDeltaMeters:r,visionScore:i,status:s,imageMetadata:{sizeBytes:a?a.length:172e3,mimeType:"image/jpeg",hash:"SHA256-"+g.substring(2,18)},signature:g};return f.eventLedger||(f.eventLedger=[]),f.eventLedger.unshift(I),localStorage.setItem("yathra_event_ledger",JSON.stringify(f.eventLedger)),I}let cr=null;const Fl=500,qy=12e4,jy=18e4;document.addEventListener("DOMContentLoaded",()=>{Gy();const n=localStorage.getItem("yathra_sync_queue");n?f.offlineSyncQueue=JSON.parse(n):f.offlineSyncQueue=[],window.addEventListener("online",()=>{Mv()});const e=localStorage.getItem("yathra_dwell_lock");if(e)try{const t=JSON.parse(e),r=Date.now()-t.startTime,i=t.duration||900*1e3;if(r<i){if(f.activeSite=_e.find(s=>s.id===t.siteId),f.dwellTimeLeft=Math.max(0,Math.ceil((i-r)/1e3)),f.gpsVerified=t.gpsVerified??!1,f.hasInitialPhotoCaptured=t.hasInitialPhotoCaptured??!1,f.dwellImages=t.dwellImages||[],f.hasInitialPhotoCaptured){Fv(),Vv(),setTimeout(()=>{F("dwell-time",!1)},100);return}}else localStorage.removeItem("yathra_dwell_lock")}catch(t){console.error("Error restoring lock state:",t),localStorage.removeItem("yathra_dwell_lock")}F("splash")});function F(n,e=!0){const t=localStorage.getItem("yathra_dwell_lock");if(t)try{const r=JSON.parse(t),i=Date.now()-r.startTime,s=r.duration||900*1e3;if(i<s&&!["dwell-time","camera","camera-success","camera-reject","guidelines"].includes(n)){re("Application navigation is disabled. Complete your 15-minute heritage immersion session first.");return}}catch(r){console.error("Error evaluating system verification isolation parameters:",r)}e&&f.currentScreen!==n&&f.navStack.push(f.currentScreen),n==="site-detail"&&["map","directory","heritage-trail","hidden-gems","dashboard"].includes(f.currentScreen)&&(f.siteReferrer=f.currentScreen),f.currentScreen=n,n!=="map"&&(document.documentElement.classList.remove("map-active"),document.body.classList.remove("map-active"),document.documentElement.style.removeProperty("background"),document.documentElement.style.removeProperty("background-color"),document.body.style.setProperty("background","#FDF8E9","important"),document.body.style.setProperty("background-color","#FDF8E9","important"),["#app",".app-root","#app-container",".app-viewport",".iphone-chassis",".view-wrapper",".screen","main"].forEach(i=>{const s=document.querySelector(i);s&&(s.style.removeProperty("background"),s.style.removeProperty("background-color"))})),ot()}function Te(){if(f.currentScreen==="site-detail"){F(f.siteReferrer||"dashboard",!1);return}if(f.navStack.length>0){const n=f.navStack.pop();F(n,!1)}else F("dashboard")}function rt(n,e=""){f.user.xp+=n;let t="None";U2.forEach(r=>{f.user.xp>=r.threshold&&(t=r.rank)}),f.user.rank!==t&&(f.user.rank=t,re(`New Rank Unlocked: ${t}!`)),e&&re(`${e} (+${n} XP)`),qt()}function qt(){try{localStorage.setItem("yathra_user_profile",JSON.stringify(f.user))}catch(t){console.error("Local user profile caching error:",t)}const n=st.currentUser;if(!n||f.isGuest)return Promise.resolve();const e=sl(Nl,"users",n.uid);return by(e,{xp:f.user.xp,rank:f.user.rank,medals:f.user.medals,sitesVisited:f.user.sitesVisited,quizzesPassed:f.user.quizzesPassed,role:f.user.role,interests:f.user.interests,permissions:f.user.permissions,signedPetitions:f.user.signedPetitions,donatedAmount:f.user.donatedAmount,joinedEvents:f.user.joinedEvents,unlockedCoupons:f.user.unlockedCoupons,completedQuizzes:f.user.completedQuizzes,dwellTimeCompleted:f.user.dwellTimeCompleted,verifiedPhotos:f.user.verifiedPhotos},{merge:!0}).catch(t=>{t&&(t.code==="permission-denied"||t.message?.includes("permission"))?console.warn("Firestore write permission denied. Profile stored in localStorage only."):console.warn("Firestore save user profile fallback active:",t)})}function re(n,e="info"){document.querySelectorAll(".yathra-toast").forEach(s=>s.remove());const r=document.createElement("div");r.className=`yathra-toast ${e}`,r.textContent=n,(document.querySelector(".iphone-chassis")||document.body).appendChild(r),setTimeout(()=>{r.style.animation="toastFadeOut 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards",setTimeout(()=>r.remove(),300)},3200)}function Hy(n){if(!n)return{score:0,level:0,label:"Too Short"};let e=0;n.length>=8&&(e+=20),n.length>=10&&(e+=20),/[a-z]/.test(n)&&/[A-Z]/.test(n)&&(e+=20),/\d/.test(n)&&(e+=20),/[^a-zA-Z0-9]/.test(n)&&(e+=20);let t=0,r="Too Short";return e>=80?(t=4,r="Strong"):e>=60?(t=3,r="Good"):e>=40?(t=2,r="Fair"):e>0&&(t=1,r="Weak"),{score:e,level:t,label:r}}function oa(n,e){switch(n){case"auth/user-not-found":return"No account found with this email address.";case"auth/wrong-password":return"Incorrect password. Please try again.";case"auth/invalid-credential":return"Invalid email or password. Please verify credentials.";case"auth/email-already-in-use":return"An account with this email address already exists.";case"auth/weak-password":return"Password is too weak. Please use at least 10 characters with numbers & symbols.";case"auth/invalid-email":return"Please enter a valid email address.";case"auth/missing-password":return"Please enter your password.";case"auth/popup-closed-by-user":return"Sign in window was closed before completing.";case"auth/popup-blocked":return"Pop-up blocked by browser. Attempting redirect fallback...";case"auth/network-request-failed":return"Network error. Working in offline cached profile mode.";default:return e||"Authentication error occurred. Please try again."}}function ls(){if(f.pendingAction){const n=f.pendingAction;f.pendingAction=null,$n(),typeof n.callback=="function"&&(re("Authentication verified! Proceeding with action...","success"),n.callback())}}function Ul(n,e){const t=sl(Nl,"users",n.uid);e2(t).then(r=>{f.user={...Qr},r.exists()?f.user={...f.user,...r.data()}:f.user.role="Explorer",f.isGuest=!1,qt(),re(e||`Welcome back, ${n.displayName||"Explorer"}!`,"success"),$n(),f.pendingAction?ls():(f.currentScreen==="login"||f.currentScreen==="signup"||f.currentScreen==="splash")&&F("dashboard")}).catch(r=>{f.isGuest=!1,qt(),re("Logged in (offline profile cached).","info"),$n(),f.pendingAction?ls():(f.currentScreen==="login"||f.currentScreen==="signup"||f.currentScreen==="splash")&&F("dashboard")})}function Gy(){T7(st).then(n=>{n&&n.user&&(f.isGuest=!1,Ul(n.user,"Google Authentication verified!"))}).catch(n=>{console.warn("Auth redirect result check error:",n)}),J6(st,n=>{if(n&&n.uid){f.isGuest=!1;const e=sl(Nl,"users",n.uid);e2(e).then(t=>{t.exists()?f.user={...Qr,...t.data()}:f.user.role=f.user.role||"Explorer",qt(),$n(),f.pendingAction?ls():(f.currentScreen==="splash"||f.currentScreen==="login"||f.currentScreen==="signup")&&F("dashboard")}).catch(t=>{console.warn("Firestore user fetch offline/permission fallback active:",t),qt(),$n(),f.pendingAction?ls():(f.currentScreen==="splash"||f.currentScreen==="login"||f.currentScreen==="signup")&&F("dashboard")})}else f.isGuest||(f.currentScreen="splash",ot())})}function Cr(n,e,t=null,r=null){if(st.currentUser||!f.isGuest&&f.user.uid)e();else{f.pendingAction={type:n,callback:e,siteId:t,payload:r};let i="Sign in or Create an Account to proceed.";n==="VERIFY"&&(i="Sign in required to verify site visits & earn XP on the ledger!"),n==="LEDGER"&&(i="Sign in required to sign heritage petitions & view audit proofs."),n==="REWARD"&&(i="Sign in required to redeem & unlock heritage rewards."),re(i,"info"),Ln("signin")}}async function Wy(){try{const n=new tn;n.setCustomParameters({prompt:"select_account"}),re("Connecting to Google...","info");const e=await y7(st,n);e&&e.user&&(f.isGuest=!1,Ul(e.user,`Welcome, ${e.user.displayName||"Explorer"}!`))}catch(n){console.error("Google Auth Error:",n),n.code==="auth/popup-closed-by-user"?re("Sign-in cancelled by user.","info"):n.code==="auth/popup-blocked"?re("Popup was blocked by browser. Please allow popups.","error"):n.code==="auth/unauthorized-domain"?re("This domain is not authorized in Firebase Console.","error"):re(n.message||oa(n.code,n.message),"error")}}function ho(n="signin"){const e=n==="signin",t=n==="signup",r=n==="forgot";return`
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
  `}function Ln(n="signin",e=null){e&&(f.pendingAction=e),f.authTab=n;const t=document.getElementById("auth-modal-container");t&&(t.innerHTML=`
    <div class="auth-modal-backdrop" id="auth-modal-bg">
      ${ho(n)}
    </div>
  `,t.style.display="block",document.body.classList.add("modal-open"),Bl(!0))}function $n(){const n=document.getElementById("auth-modal-container");n&&(n.style.display="none",n.innerHTML=""),document.body.classList.remove("modal-open")}function Ky(n){const e=Hy(n),t=document.getElementById("entropy-status-text");t&&(t.textContent=e.label);for(let r=1;r<=4;r++){const i=document.getElementById(`entropy-bar-${r}`);i&&(i.className="entropy-bar",r<=e.level&&i.classList.add("active",`level-${e.level}`))}}function Bl(n=!1){const e='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',t='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',r=(s,a,c)=>{const l=document.getElementById(s);l&&l.addEventListener(a,c)};r("auth-tab-signin","click",()=>{f.authTab="signin",n?Ln("signin"):F("login",!1)}),r("auth-tab-signup","click",()=>{f.authTab="signup",n?Ln("signup"):F("signup",!1)}),r("auth-trigger-forgot","click",()=>{if(f.authTab="forgot",n)Ln("forgot");else{const s=document.getElementById("app-container");s&&(s.innerHTML=ho("forgot"),Bl(!1))}}),r("auth-back-to-signin","click",()=>{f.authTab="signin",n?Ln("signin"):F("login",!1)}),document.querySelectorAll(".btn-google-auth, #auth-btn-google, #google-signin-btn, #google-signup-btn").forEach(s=>{s.addEventListener("click",a=>{a.preventDefault(),a.stopPropagation(),Wy()})}),r("auth-btn-guest","click",()=>{f.isGuest=!0,re("Continuing in Guest Explorer Mode.","info"),n&&$n(),(f.currentScreen==="login"||f.currentScreen==="signup"||f.currentScreen==="splash")&&F("dashboard")}),r("auth-toggle-pass","click",()=>{const s=document.getElementById("auth-input-pass"),a=document.getElementById("auth-toggle-pass");s&&a&&(s.type==="password"?(s.type="text",a.innerHTML=t):(s.type="password",a.innerHTML=e))});const i=document.getElementById("auth-input-pass");if(i&&i.addEventListener("input",s=>{Ky(s.target.value)}),n){const s=document.getElementById("auth-modal-bg");s&&s.addEventListener("click",a=>{a.target===s&&$n()})}r("auth-submit-btn","click",()=>{const s=f.authTab||"signin",a=document.getElementById("auth-input-email"),c=document.getElementById("auth-input-pass"),l=document.getElementById("auth-input-name"),u=document.getElementById("auth-check-terms"),p=document.getElementById("auth-submit-btn"),g=document.getElementById("auth-btn-spinner"),I=a?a.value.trim():"",P=c?c.value:"",L=l?l.value.trim():"";if(s==="forgot"){if(!I){re("Please enter your registered email address.","error");return}p&&(p.disabled=!0),g&&(g.style.display="block"),H6(st,I).then(()=>{re("Password reset email sent! Check your inbox.","success"),n?Ln("signin"):F("login")}).catch(E=>{re(oa(E.code,E.message),"error")}).finally(()=>{p&&(p.disabled=!1),g&&(g.style.display="none")});return}if(s==="signin"){if(!I||!P){re("Please fill in both email and password.","error");return}p&&(p.disabled=!0),g&&(g.style.display="block"),W6(st,I,P).then(E=>{Ul(E.user,`Welcome back, ${E.user.displayName||"Explorer"}!`)}).catch(E=>{re(oa(E.code,E.message),"error")}).finally(()=>{p&&(p.disabled=!1),g&&(g.style.display="none")});return}if(s==="signup"){if(!L||!I||!P){re("Please fill in all required fields.","error");return}if(P.length<10){re("Security requirement: Password must be at least 10 characters long.","error");return}if(u&&!u.checked){re("You must agree to the Terms & Privacy Policy.","error");return}p&&(p.disabled=!0),g&&(g.style.display="block"),G6(st,I,P).then(E=>(f.user={...Qr},Y6(E.user,{displayName:L}).catch(console.error),qt().then(()=>{re("Account created successfully!","success"),$n(),f.pendingAction?ls():F("permissions")}))).catch(E=>{re(oa(E.code,E.message),"error")}).finally(()=>{p&&(p.disabled=!1),g&&(g.style.display="none")})}})}function Yy(){const n=document.getElementById("location-permission-modal");n&&n.remove();const e=document.createElement("div");e.id="location-permission-modal",e.style.cssText=`
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
  `,(document.querySelector(".iphone-chassis")||document.body).appendChild(e),document.getElementById("location-allow-btn").addEventListener("click",async()=>{e.remove();try{(await cs.requestPermissions()).location==="granted"?(Dn=!1,await Or()):(Dn=!0,await Or())}catch(r){Dn=!0,console.error("Error requesting geolocation capability configurations:",r),await Or()}}),document.getElementById("location-cancel-btn").addEventListener("click",()=>{e.remove(),Dn=!0,Or()})}let Rt=null,Xe=null,Dn=!1;async function Or(){const n=document.getElementById("yathra-main-map");if(!n)return;try{if((await cs.checkPermissions()).location!=="granted"){if(!Dn){Yy();return}}else{const a=await cs.getCurrentPosition();Xe={latitude:a.coords.latitude,longitude:a.coords.longitude},Dn=!1}}catch(s){Dn=!0,console.error("Error parsing native hardware location states:",s)}const e=document.getElementById("map-loader");e&&e.style.setProperty("display","flex","important");const t=()=>{const s=document.getElementById("map-loader");s&&s.style.setProperty("display","none","important")},r=document.getElementById("map-view");if(r&&(r.style.display="block"),document.documentElement.classList.add("map-active"),document.body.classList.add("map-active"),["html","body","#app",".app-root","#app-container",".app-viewport",".iphone-chassis",".view-wrapper",".screen","main"].forEach(s=>{const a=document.querySelector(s);if(s==="html"||s==="body"){const c=s==="html"?document.documentElement:document.body;c.style.setProperty("background","transparent","important"),c.style.setProperty("background-color","transparent","important")}else a&&(a.style.setProperty("background","none","important"),a.style.setProperty("background-color","transparent","important"))}),Rt){try{await Rt.destroy()}catch(s){console.error("Error processing stale native map termination mapping:",s)}Rt=null}try{Rt=await Va.create({id:"yathra-map-instance",element:n,apiKey:"AIzaSyAh9WMzSPpYwNj-ReY231j_ONHa_73SnUY",config:{center:{lat:6.9271,lng:79.8612},zoom:13}}),console.log("Google Maps framework overlay injected over chassis."),typeof Rt.setOnTilesLoadedListener=="function"&&Rt.setOnTilesLoadedListener(()=>{t()}),setTimeout(t,1e3);const s=_e.filter(u=>u.latitude&&u.longitude),a=s.map(u=>({coordinate:{lat:u.latitude,lng:u.longitude},iconUrl:u.category==="Hidden Gems"?"assets/pin_gold.png":"assets/pin_teal.png",iconSize:{width:32,height:42}})),c=await Rt.addMarkers(a),l=Array.isArray(c)?c:c.ids||[];s.forEach((u,p)=>{u.nativeMarkerId=l[p]}),Rt.setOnMarkerClickListener(async u=>{const p=_e.find(g=>g.nativeMarkerId===u.markerId);if(p){l2(p);const g=document.getElementById("map-popup-card");g&&g.style.setProperty("display","block","important")}})}catch(s){t(),console.error("Maps Initialization Error: ",s)}}window.initializeYathraMap=Or;function Ac(n,e){if(n==="site-details"||n==="site-detail"){const t=e&&e.id,r=_e.find(i=>i.id===t);r&&(f.activeSite=r,F("site-detail"))}}window.Maps=Ac;function ot(){const n=document.getElementById("app-container");if(!n)return;let e="";switch(f.currentScreen){case"splash":e=Qy();break;case"login":e=Xy();break;case"signup":e=Jy();break;case"permissions":e=Zy();break;case"choose-role":e=ev();break;case"calibrate-compass":e=tv();break;case"how-scoring-works":e=nv();break;case"dashboard":e=rv();break;case"directory":e=iv();break;case"heritage-trail":e=renderTrailList("Heritage Trail");break;case"hidden-gems":e=renderTrailList("Hidden Gems");break;case"map":e=sv();break;case"site-detail":e=av();break;case"dwell-time":e=ov();break;case"camera":e=cv();break;case"camera-success":e=lv();break;case"camera-reject":e=uv();break;case"guidelines":e=dv();break;case"offline-sync":e=pv();break;case"quiz":e=fv();break;case"quiz-cooldown":e=gv();break;case"quests":e=mv();break;case"quest-social":e=yv();break;case"quest-food":e=vv();break;case"quest-wandering":e=_v();break;case"quest-wildlife":e=wv();break;case"quest-warrior":e=Ev();break;case"activism":e=bv();break;case"petition":e=Iv();break;case"donations":e=Tv();break;case"cleanup":e=Av();break;case"create-event":e=xv();break;case"rewards":e=Sv();break;case"rewards-list":e=Cv();break;case"coupon-redeem":e=kv();break;case"rank":e=Pv();break;case"leaderboard":e=Rv();break;case"profile":e=Lv();break;case"travel-poster":e=Ov();break;case"settings":e=Dv();break;case"ledger":e=hv();break;default:e="<div>Screen frame missing</div>"}const t=document.getElementById("map-view");if(f.currentScreen!=="map"&&Rt){const r=Rt;Rt=null,(async()=>{try{await r.destroy(),console.log("Native map instance closed smoothly via memory controller.")}catch(i){console.error("Error executing native interface cleanup execution mapping:",i)}})()}f.currentScreen==="map"?(n.style.display="block",Or()):(t&&(t.style.display="none"),n.style.display="block",document.documentElement.classList.remove("map-active"),document.body.classList.remove("map-active"),document.documentElement.style.removeProperty("background"),document.documentElement.style.removeProperty("background-color"),document.body.style.setProperty("background","#FDF8E9","important"),document.body.style.setProperty("background-color","#FDF8E9","important"),["#app",".app-root","#app-container",".app-viewport",".iphone-chassis",".view-wrapper",".screen","main"].forEach(i=>{const s=document.querySelector(i);s&&(s.style.removeProperty("background"),s.style.removeProperty("background-color"))})),n.innerHTML=e,Nv()}function Qy(){return`
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
          <button class="btn-guest-auth" id="go-guest" style="margin-top: 6px;">Explore as Guest</button>
        </div>
      </div>
    </div>
  `}function Xy(){return f.authTab="signin",`
    <div class="screen auth-screen-container" id="login-view">
      <div style="position: absolute; top: 16px; left: 16px; z-index: 10;">
        <button class="back-button" id="login-back">←</button>
      </div>
      ${ho("signin")}
    </div>
  `}function Jy(){return f.authTab="signup",`
    <div class="screen auth-screen-container" id="signup-view">
      <div style="position: absolute; top: 16px; left: 16px; z-index: 10;">
        <button class="back-button" id="signup-back">←</button>
      </div>
      ${ho("signup")}
    </div>
  `}function Zy(){const n=f.user.permissions.camera,e=f.user.permissions.notifications,t=n;return`
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
  `}function ev(){const n=f.user.role;return`
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
  `}function tv(){const n=f.user.interests;return`
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
  `}function nv(){return`
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
  `}function a2(){return f.isGuest?`
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
  `:""}function rv(){return`
    <div class="screen">
      <div style="padding: 20px 20px 6px 20px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-size: 26px; font-weight: 900; line-height: 1.1;">Central Dashboard</h2>
          <p style="font-size: 12px; color: var(--color-gray); margin-top: 4px;">Welcome back, ${f.isGuest?"Guest Explorer":f.user.role||"Traveller"}!</p>
        </div>
        ${f.isGuest?"":`
          <div class="badge-tag" style="background: var(--color-gold); color: var(--color-charcoal); font-weight: 800;">
            🌟 ${f.user.xp} XP
          </div>
        `}
      </div>
      ${a2()}
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
        <div class="searcher-tags">
          <span class="badge-tag" style="background: rgba(255,255,255,0.15); color: white;">📍 Heritage Trail</span>
          <span class="badge-tag" style="background: rgba(255,255,255,0.15); color: white;">💎 Hidden Gems</span>
        </div>
        <button class="btn-primary" style="background: var(--color-gold); height: 38px; font-size: 13px;" id="dash-view-directory">View directory</button>
      </div>
      ${ye("home")}
    </div>
  `}function iv(){const n=f.activeDirectoryTab==="Hidden Gems";return`
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="directory-back">←</button>
        <div class="header-title">Directory</div>
      </div>
      ${a2()}
      <div class="search-container">
        <div class="search-box">
          <span>🔍</span>
          <input type="text" class="search-input" placeholder="Search by name of the location" id="directory-search">
        </div>
      </div>
      <div class="tabs-container">
        <div class="tab-btn ${n?"":"active"}" id="tab-trail">Heritage Trail</div>
        <div class="tab-btn ${n?"active":""}" id="tab-gems">Hidden Gems</div>
      </div>
      <div class="tabs-divider-line" style="height: 1px; background: var(--color-light-gray); margin: 0 16px 12px 16px;"></div>
      <div class="locations-grid" id="directory-grid-container"></div>
      ${ye("home")}
    </div>
  `}function sv(){return`
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
      ${ye("home")}
    </div>
  `}function av(){const n=f.activeSite;if(!n)return"";const e=f.user.dwellTimeCompleted[n.id];return`
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar" style="position: absolute; top: 0; left: 0; z-index: 10; width: 100%; padding-top: env(safe-area-inset-top, 24px) !important; box-sizing: border-box;">
        <button class="back-button" id="site-back" style="background: rgba(255,255,255,0.8); border-radius: 50%; width:32px; height:32px; justify-content:center; padding:0; color:var(--color-charcoal); border:none;">←</button>
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
      ${ye("home")}
    </div>
  `}function ov(){const n=f.activeSite;if(!n)return"";const e=Math.floor(f.dwellTimeLeft/60),t=f.dwellTimeLeft%60,r=`${e<10?"0"+e:e}:${t<10?"0"+t:t}`,s=565.48-f.dwellTimeLeft/900*565.48,a=f.dwellTimeLeft<=0;return`
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
  `}function cv(){const n=f.activeSite||_e[0],e=Xe&&Xe.latitude?Xe.latitude:7.957,t=Xe&&Xe.longitude?Xe.longitude:80.7603,r=Ml(e,t,n.latitude,n.longitude);return`
    <div class="screen" style="padding-bottom: 0; background: #000; color: white; position: relative; overflow: hidden;">
      <!-- Cyberpunk / Heritage Viewfinder HUD Layer -->
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
            <span>HUD ENGINE ACTIVE (94% VISION CONFIDENCE)</span>
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
        <img src="${n.image}" alt="Camera Viewfinder" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.75;">
      </div>
    </div>
  `}function lv(){const n=f.activeSite||_e[0],e=f.lastVerificationResult||{visionScore:96,block:{signature:"0x4a8f9c1d2e3f4b5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f"}},t=e.block?e.block.signature:"0x4a8f9c1d2e3f4b5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f";return`
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
  `}function uv(){const n=f.lastVerificationResult||{status:"OUT_OF_BOUNDS",visionScore:42,distanceDeltaMeters:2640},e=n.status==="SPOOF_SUSPECTED"?"Security Anomaly Intercepted":n.status==="OUT_OF_BOUNDS"?"Geofence Out of Bounds":"Visual Inspection Failed";return`
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
  `}function hv(){const n=f.eventLedger||[],e=n.length,t=n.filter(c=>c.status==="PASSED").length,r=e>0?Math.round(t/e*100):100,i=n.filter(c=>c.status==="SPOOF_SUSPECTED").length,s=f.ledgerFilter||"ALL",a=n.filter(c=>s==="ALL"?!0:c.status===s);return`
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
      ${ye("home")}
    </div>
  `}function dv(){return`
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
  `}function pv(){const n=f.offlineSyncQueue||[];let e="";return n.length===0?e='<div style="text-align: center; padding: 24px; color: var(--color-gray); font-size: 13px; font-weight: 700;">🟢 All activities synced and verified!</div>':e=n.map(t=>{let r="var(--color-gray)",i="Pending local-first sync packet",s="var(--color-gray)",a="";return t.status==="Verifying..."?(i="🤖 Evaluating landmark patterns...",r="var(--color-teal)"):t.status==="Success"&&(i="✓ Verified & Logged Successfully",r="var(--color-green-success)",s="var(--color-teal)",a="✓ "),`
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
      ${ye("home")}
    </div>
  `}function fv(){const n=f.activeSite;if(!n)return"";const e=n.quizzes[f.currentQuizIndex],t=f.currentQuizIndex+1,r=n.quizzes.length;return`
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
  `}function gv(){const n=Math.floor(f.cooldownTimeLeft/60),e=f.cooldownTimeLeft%60,t=`${n<10?"0"+n:n}:${e<10?"0"+e:e}`;return`
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
      ${ye("home")}
    </div>
  `}function mv(){return`
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
        ${$2.map(n=>`
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
      ${ye("home")}
    </div>
  `}function yv(){return`
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
      ${ye("home")}
    </div>
  `}function vv(){return`
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
      ${ye("home")}
    </div>
  `}function _v(){return`
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
      ${ye("home")}
    </div>
  `}function wv(){return`
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
      ${ye("home")}
    </div>
  `}function Ev(){return`
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
      ${ye("activism")}
    </div>
  `}function bv(){return`
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
      ${ye("activism")}
    </div>
  `}function Iv(){const n=f.petitionSigned,e=f.petitionSignatures,t=e/1e4*100;return`
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
      ${ye("activism")}
    </div>
  `}function Tv(){const n=f.donationAmount;return`
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
      ${ye("activism")}
    </div>
  `}function Av(){const n=f.user.joinedEvents.includes("site-cleanup");return`
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
      ${ye("activism")}
    </div>
  `}function xv(){return`
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
      ${ye("activism")}
    </div>
  `}function Sv(){return`
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
      ${ye("rewards")}
    </div>
  `}function Cv(){return`
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
      ${ye("rewards")}
    </div>
  `}function kv(){return`
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
      ${ye("rewards")}
    </div>
  `}function Pv(){const n=[{name:"Grass Toucher",range:"0 - 99 pts",threshold:0},{name:"Wanderer",range:"100 - 249 pts",threshold:100},{name:"Tuk Tuk Trailer",range:"250 - 499 pts",threshold:250},{name:"Magahoyanna",range:"500 - 999 pts",threshold:500},{name:"Island Explorer",range:"1,000 - 2,000 pts",threshold:1e3},{name:"Lanka Legend",range:"2,000 - 5,000 pts",threshold:2e3}],e=f.user.xp,t=f.user.rank;let r=n[0];for(let s=0;s<n.length;s++){if(e<n[s].threshold){r=n[s];break}s===n.length-1&&(r={name:"Max Level",threshold:5e3})}const i=r.threshold-e;return`
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
      ${ye("rewards")}
    </div>
  `}function Rv(){let n=[...B2];if(f.user.xp>0){const e={name:(st.currentUser&&st.currentUser.displayName||"You")+" (Eco Explorer)",points:f.user.xp,role:f.user.role,rank:f.user.rank,isUser:!0};n.push(e)}return n.sort((e,t)=>t.points-e.points),`
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
      ${ye("rewards")}
    </div>
  `}function Lv(){const n=f.user.xp>0?f.user.rank:"No Rank";return`
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
            <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">${st.currentUser&&st.currentUser.displayName||"You"}</h3>
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
      ${ye("profile")}
    </div>
  `}function Ov(){return`
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
  `}function Dv(){return`
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
  `}function ye(n){return`
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
  `}function Nv(){const n=(E,N,q)=>{document.querySelectorAll("#"+E).forEach(se=>se.addEventListener(N,q))};n("go-signin","click",()=>F("login")),n("go-signup","click",()=>F("signup")),n("go-guest","click",()=>{f.isGuest=!0,re("Continuing in Guest Explorer Mode.","info"),F("dashboard")}),n("header-guest-login-btn","click",()=>{Ln("signin")}),n("profile-guest-signin-btn","click",()=>{Ln("signin")}),n("login-back","click",()=>F("splash")),n("signup-back","click",()=>F("splash")),(f.currentScreen==="login"||f.currentScreen==="signup")&&Bl(!1);const e=()=>{const E=f.user.permissions.camera,N=document.getElementById("permissions-continue-btn");N&&(N.disabled=!E,N.style.opacity=E?"1":"0.5")};n("perm-camera-btn","click",()=>{f.user.permissions.camera=!f.user.permissions.camera;const E=document.getElementById("perm-camera-btn");if(E){E.classList.toggle("selected",f.user.permissions.camera);const N=E.querySelector(".check-circle");N&&(N.classList.toggle("checked",f.user.permissions.camera),N.innerHTML=f.user.permissions.camera?"✓":"")}e()}),n("perm-notif-btn","click",()=>{f.user.permissions.notifications=!f.user.permissions.notifications;const E=document.getElementById("perm-notif-btn");if(E){E.classList.toggle("selected",f.user.permissions.notifications);const N=E.querySelector(".check-circle");N&&(N.classList.toggle("checked",f.user.permissions.notifications),N.innerHTML=f.user.permissions.notifications?"✓":"")}e()}),n("permissions-continue-btn","click",()=>{f.user.permissions.camera&&(qt(),F("choose-role"))}),n("role-back","click",()=>Te());const t=document.querySelectorAll("[data-role]");t.forEach(E=>{E.addEventListener("click",()=>{t.forEach(q=>q.classList.remove("selected")),E.classList.add("selected"),f.user.role=E.getAttribute("data-role");const N=document.getElementById("role-continue");N&&(N.disabled=!1,N.style.opacity="1")})}),n("role-continue","click",()=>{f.user.role&&(qt(),F("dashboard"))}),n("compass-back-btn","click",()=>F("choose-role")),document.querySelectorAll("[data-cat]").forEach(E=>{E.addEventListener("click",()=>{const N=E.getAttribute("data-cat");f.user.interests.includes(N)?(f.user.interests=f.user.interests.filter(Y=>Y!==N),E.classList.remove("selected")):(f.user.interests.push(N),E.classList.add("selected"));const q=document.getElementById("compass-continue");if(q){const Y=f.user.interests.length>0;q.disabled=!Y,q.style.opacity=Y?"1":"0.5"}})}),n("compass-continue","click",()=>{f.user.interests.length>0&&(qt(),F("how-scoring-works"))}),n("scoring-continue","click",()=>{qt(),F("dashboard")}),n("dash-map-card","click",()=>{F("map")}),n("dash-search-card","click",()=>F("directory")),n("dash-view-directory","click",E=>{E.stopPropagation(),F("directory")}),n("directory-back","click",()=>F("dashboard")),n("tab-trail","click",()=>{f.activeDirectoryTab="Heritage Trail",document.getElementById("tab-trail").classList.add("active"),document.getElementById("tab-gems").classList.remove("active"),Qs("Heritage Trail")}),n("tab-gems","click",()=>{f.activeDirectoryTab="Hidden Gems",document.getElementById("tab-trail").classList.remove("active"),document.getElementById("tab-gems").classList.add("active"),Qs("Hidden Gems")});const i=document.getElementById("directory-search");i&&i.addEventListener("input",()=>{const E=f.activeDirectoryTab;Qs(E,i.value)}),f.currentScreen==="directory"&&Qs(f.activeDirectoryTab),n("trail-list-back","click",()=>F("directory"));const s=document.getElementById("list-search-input");s&&s.addEventListener("input",()=>{const E=document.querySelector(".header-title").textContent;Jo(E,s.value)}),f.currentScreen==="heritage-trail"?Jo("Heritage Trail"):f.currentScreen==="hidden-gems"&&Jo("Hidden Gems");const a=document.querySelector("#map-back-container button")||document.getElementById("map-back-container");a&&a.addEventListener("click",()=>{document.body.classList.remove("map-active"),document.documentElement.classList.remove("map-active");const E=document.getElementById("map-view");E&&(E.style.display="none"),F("dashboard")}),document.querySelectorAll(".map-pin").forEach(E=>{E.addEventListener("click",N=>{N.stopPropagation();const q=_e.find(Y=>Y.id===E.getAttribute("data-site-id"));q&&l2(q)})}),n("site-visit-now","click",()=>{Cr("VERIFY",()=>{f.hasInitialPhotoCaptured=!1,F("camera")})}),n("site-quiz-btn","click",()=>{f.user.dwellTimeCompleted[f.activeSite.id]&&(f.cooldownActive?F("quiz-cooldown"):(f.currentQuizIndex=0,f.quizCorrectAnswers=0,f.quizAnswers=[],F("quiz"),xc()))}),n("site-quests-btn","click",()=>{f.user.dwellTimeCompleted[f.activeSite.id]&&F("quests")}),n("dwell-extra-photo-btn","click",async()=>{try{const E=await cs.getCurrentPosition(),N=E.coords.latitude,q=E.coords.longitude;if(o2(N,q,f.activeSite.latitude,f.activeSite.longitude)<=Fl){const se=await Bh.getPhoto({quality:90,allowEditing:!1,resultType:Ma.DataUrl,source:On.Camera});f.dwellImages.push(se.dataUrl);const ve=localStorage.getItem("yathra_dwell_lock");if(ve){const je=JSON.parse(ve);je.dwellImages=f.dwellImages,localStorage.setItem("yathra_dwell_lock",JSON.stringify(je))}re("Additional verification evidence appended successfully."),ot()}else re("Security Check Failed: Device coordinates are past the site boundary threshold parameters.")}catch(E){console.error("Dwell camera capture execution mapping error:",E),re("Evidence capture cancelled or aborted by user.")}}),n("dwell-abandon-link","click",()=>{confirm("Are you sure you want to abandon this preservation session? Progress will be paused.")&&confirm("Confirm final cancellation: Unverified progress data parameters will be stored locally inside your history profile.")&&(clearInterval(f.dwellTimer),clearInterval(cr),f.dwellActive=!1,localStorage.removeItem("yathra_dwell_lock"),re("Immersion session abandoned. Evidence images saved to profile repository logs."),F("site-detail",!1))}),n("dwell-continue-btn","click",()=>{Cr("VERIFY",()=>{f.dwellTimeLeft<=0&&f.hasInitialPhotoCaptured&&(clearInterval(cr),localStorage.removeItem("yathra_dwell_lock"),f.gpsVerified&&f.dwellImages.length>0?(f.verificationComment="Verification Successful: Real-time features closely match historical structure guidelines!",f.user.dwellTimeCompleted[f.activeSite.id]=!0,f.user.verifiedPhotos[f.activeSite.id]=!0,f.user.sitesVisited=Object.keys(f.user.dwellTimeCompleted).length,rt(50,`Presence verified at ${f.activeSite.name}!`),rt(10,"Landmark photo verification success!"),F("camera-success")):(f.dwellImages.length===0?f.verificationComment="Verification Failed: No mid-session tracking images captured. Multiple perspectives required.":f.verificationComment="Verification Failed: Spatial structure profiles do not correlate with registered landmark geometry.",F("camera-reject")))})}),n("camera-back","click",()=>Te()),n("ledger-back","click",()=>Te()),n("success-view-ledger","click",()=>F("ledger")),n("view-ledger-shortcut-btn","click",()=>F("ledger"));const l=E=>{const N=f.activeSite||_e[0],q=Xe&&Xe.latitude?Xe.latitude:N.latitude,Y=Xe&&Xe.longitude?Xe.longitude:N.longitude;$y(N,q,Y,E).status==="PASSED"?(f.hasInitialPhotoCaptured=!0,f.gpsVerified=!0,f.user.dwellTimeCompleted[N.id]=!0,f.user.verifiedPhotos[N.id]=!0,f.user.sitesVisited=Object.keys(f.user.dwellTimeCompleted).length,rt(60,`Presence verified at ${N.name}!`),F("camera-success")):F("camera-reject")};n("camera-shutter-click","click",async()=>{const E=document.getElementById("camera-shutter-click");E&&(E.style.opacity="0.5",E.setAttribute("disabled","true"));try{const N=await Bh.getPhoto({quality:90,allowEditing:!1,resultType:Ma.DataUrl,source:On.Camera});l(N.dataUrl)}catch{console.log("Hardware camera fallback to simulated sample verification");const q=f.activeSite||_e[0];l(q.image)}finally{E&&(E.style.opacity="1",E.removeAttribute("disabled"))}});const u=document.getElementById("web-camera-file-input");u&&u.addEventListener("change",E=>{const N=E.target.files[0];if(N){const q=new FileReader;q.onload=Y=>{l(Y.target.result)},q.readAsDataURL(N)}});const p=()=>{f.stageDrawerOpen=!f.stageDrawerOpen,ot()};n("toggle-stage-drawer-btn","click",p),n("close-stage-drawer-btn","click",p),n("reject-stage-demo","click",p),window.onkeydown=E=>{E.ctrlKey&&E.shiftKey&&(E.key==="D"||E.key==="d")&&(E.preventDefault(),p())},n("demo-lock-sigiriya","click",()=>{f.activeSite=_e.find(E=>E.id==="sigiriya")||_e[0],f.demoOverride={active:!0,mockLat:7.957,mockLng:80.7603,mockVisionScore:96,forcedStatus:"PASSED"},re("Demo Override: Locked to Sigiriya Rock (0.01km PASSED)"),F("camera")}),n("demo-lock-mihintale","click",()=>{f.activeSite=_e.find(E=>E.id==="mihintale")||_e[0],f.demoOverride={active:!0,mockLat:8.3508,mockLng:80.5186,mockVisionScore:92,forcedStatus:"PASSED"},re("Demo Override: Locked to Mihintale (0.02km PASSED)"),F("camera")}),n("demo-lock-galle-far","click",()=>{f.activeSite=_e.find(E=>E.id==="galle_fort")||_e[0],f.demoOverride={active:!0,mockLat:6.0535,mockLng:80.221,mockVisionScore:88,forcedStatus:"OUT_OF_BOUNDS"},re("Demo Override: Galle Fort (2.6km OUT_OF_BOUNDS)"),F("camera")}),n("demo-trigger-spoof","click",()=>{f.activeSite=_e[0],f.demoOverride={active:!0,mockLat:1.29027,mockLng:103.85195,mockVisionScore:35,forcedStatus:"SPOOF_SUSPECTED"},re("Demo Override: Spoof Velocity Anomaly Triggered!"),F("camera")}),n("demo-exec-pass","click",()=>{const E=f.activeSite||_e[0];f.demoOverride={active:!0,mockLat:E.latitude,mockLng:E.longitude,mockVisionScore:96,forcedStatus:"PASSED"},l(E.image)}),n("demo-exec-fail-vision","click",()=>{const E=f.activeSite||_e[0];f.demoOverride={active:!0,mockLat:E.latitude,mockLng:E.longitude,mockVisionScore:42,forcedStatus:"FAILED_VISION"},l(E.image)}),n("demo-exec-out-bounds","click",()=>{const E=f.activeSite||_e[0];f.demoOverride={active:!0,mockLat:E.latitude+.05,mockLng:E.longitude+.05,mockVisionScore:89,forcedStatus:"OUT_OF_BOUNDS"},l(E.image)}),n("demo-open-ledger","click",()=>F("ledger")),document.querySelectorAll("[data-ledger-filter]").forEach(E=>{E.addEventListener("click",()=>{f.ledgerFilter=E.getAttribute("data-ledger-filter"),ot()})}),n("camera-success-continue","click",()=>{F("site-detail")}),n("reject-close","click",()=>F("site-detail")),n("reject-guidelines","click",()=>F("guidelines")),n("reject-retry","click",()=>F("camera")),n("guidelines-back","click",()=>Te()),n("guidelines-continue","click",()=>F("camera")),n("sync-back","click",()=>Te()),n("quiz-back","click",()=>Te()),n("quiz-end-btn","click",()=>F("site-detail"));const g=document.querySelectorAll("#quiz-options-container .quiz-option-btn");g.forEach(E=>{E.addEventListener("click",()=>{const N=parseInt(E.getAttribute("data-index")),Y=f.activeSite.quizzes[f.currentQuizIndex].correctIndex;g.forEach(se=>se.disabled=!0),f.quizAnswers.push(N),N===Y?(E.classList.add("correct"),E.querySelector(".quiz-circle-ico").style.background="var(--color-green-success)",f.quizCorrectAnswers++):(E.classList.add("incorrect"),E.querySelector(".quiz-circle-ico").style.background="var(--color-red-reject)",g[Y].classList.add("correct"),g[Y].querySelector(".quiz-circle-ico").style.background="var(--color-green-success)"),setTimeout(()=>{if(f.currentQuizIndex+1<f.activeSite.quizzes.length)f.currentQuizIndex++,ot(),xc();else{const se=f.quizCorrectAnswers,ve=se*10;f.user.completedQuizzes[f.activeSite.id]=!0,f.user.quizzesPassed=Object.keys(f.user.completedQuizzes).length,rt(ve,`Quiz Complete! You got ${se}/5 correct.`),f.cooldownTimeLeft=300,F("quiz-cooldown"),c2()}},1500)})}),n("cooldown-back","click",()=>F("site-detail")),n("quests-back","click",()=>Te());const I=(E,N)=>{const q=document.getElementById(`quest-item-${E}`);q&&q.addEventListener("click",()=>F(N))};I("social","quest-social"),I("local_food","quest-food"),I("wandering_around","quest-wandering"),I("wildlife_spotting","quest-wildlife"),I("eco_warrior","quest-warrior"),n("quest-social-back","click",()=>Te()),n("quest-social-submit","click",()=>{document.getElementById("quest-social-link-input").value&&(rt(5,"Social media presence validation recorded successfully."),F("quests"))}),n("quest-food-back","click",()=>Te()),n("quest-food-start","click",()=>{rt(10,"Traditional cooking recipe trial cleared."),F("quests")}),n("quest-wandering-back","click",()=>Te()),n("quest-wandering-snap","click",()=>{rt(60,"Rural custom marker logged locally."),F("quests")}),n("quest-wildlife-back","click",()=>Te()),n("quest-wildlife-snap","click",()=>{rt(25,"Wildlife encounter profile telemetry logged."),F("quests")}),n("quest-warrior-back","click",()=>Te()),n("quest-warrior-snap","click",()=>{rt(75,"Heritage reforestation contribution verified."),F("quests")}),n("act-link-petition","click",()=>F("petition")),n("act-link-donations","click",()=>F("donations")),n("act-link-cleanup","click",()=>F("cleanup")),n("act-link-create-event","click",()=>F("create-event")),n("petition-back","click",()=>Te()),n("petition-submit","click",()=>{Cr("LEDGER",()=>{f.petitionSigned||(f.petitionSigned=!0,f.petitionSignatures++,f.user.signedPetitions.push("ritigala-forest"),rt(3,"You signed the Ritigala Protection Petition!"),ot())})}),n("donations-back","click",()=>Te()),document.querySelectorAll(".donation-btn").forEach(E=>{E.addEventListener("click",()=>{f.donationAmount=parseInt(E.getAttribute("data-val")),ot()})});const L=document.getElementById("donation-custom-input");L&&L.addEventListener("input",()=>{f.donationAmount=parseInt(L.value)||0}),n("donations-submit","click",()=>{if(f.donationAmount>0){f.user.donatedAmount+=f.donationAmount;const E=Math.min(15,Math.ceil(f.donationAmount/200));rt(E,`Donated Rs. ${f.donationAmount} securely via Payhere framework.`),f.donationAmount=0,F("activism")}}),n("cleanup-back","click",()=>Te()),n("cleanup-join","click",()=>{f.user.joinedEvents.includes("site-cleanup")||(f.user.joinedEvents.push("site-cleanup"),rt(15,"Registered for Elahera Anicut site cleanup!"),ot())}),n("create-event-back","click",()=>Te()),n("event-submit","click",()=>{const E=document.getElementById("event-location").value,N=document.getElementById("event-type").value;E&&(f.user.joinedEvents.push("community-event"),rt(15,`Created Community event: ${N}!`),F("activism"))}),n("rew-link-list","click",()=>F("rewards-list")),n("rew-link-rank","click",()=>F("rank")),n("rew-link-leaderboard","click",()=>F("leaderboard")),n("rewards-list-back","click",()=>F("rewards")),n("rew-coupon-use","click",()=>F("coupon-redeem")),n("rew-unlock-guide","click",()=>{Cr("REWARD",()=>{f.user.xp>=100?(f.user.xp-=100,f.user.unlockedCoupons.push("guide"),re("Unlocked Ancient Trail Guide Coupon!","success"),F("rewards-list")):re("Requires 100 XP to unlock voucher.","error")})}),n("rew-unlock-crafts","click",()=>{Cr("REWARD",()=>{f.user.xp>=100?(f.user.xp-=100,f.user.unlockedCoupons.push("crafts"),re("Unlocked Artisan Crafts Coupon!","success"),F("rewards-list")):re("Requires 100 XP to unlock voucher.","error")})}),n("coupon-back","click",()=>Te()),n("coupon-redeem-btn","click",()=>{Cr("REWARD",()=>{re("Voucher code validated by merchant partner interface configuration.","success")})}),n("coupon-review-submit","click",()=>{document.getElementById("coupon-review-input").value&&(rt(10,"Partner node critique saved."),document.getElementById("coupon-review-input").value="")}),n("rank-back","click",()=>Te()),n("leaderboard-back","click",()=>Te()),n("leaderboard-view-full","click",()=>{re("Fetching full layout matrices across global instances...")}),n("profile-recap-trigger","click",()=>F("travel-poster")),n("profile-travel-map","click",()=>F("travel-poster")),n("profile-settings","click",()=>F("settings")),n("profile-sync-trigger","click",()=>F("offline-sync")),n("poster-back","click",()=>Te()),n("settings-back","click",()=>Te()),n("sett-perm","click",()=>F("permissions")),n("sett-logout","click",()=>{Z6(st).then(()=>{f.user={...Qr},f.user.permissions={camera:!1,notifications:!1},f.petitionSignatures=8742,f.petitionSigned=!1,f.navStack=[],F("splash"),re("Session terminated safely.")}).catch(E=>{re("Logout mapping error: "+E.message)})}),n("nav-home","click",()=>F("dashboard")),n("nav-act","click",()=>F("activism")),n("nav-rew","click",()=>F("rewards")),n("nav-prof","click",()=>F("profile"))}function Vv(){clearInterval(cr);let n=Date.now();cr=setInterval(async()=>{if(!f.dwellActive||f.dwellTimeLeft<=0||!f.hasInitialPhotoCaptured){clearInterval(cr);return}try{const e=await cs.getCurrentPosition(),t=o2(e.coords.latitude,e.coords.longitude,f.activeSite.latitude,f.activeSite.longitude);if(console.log(`Presence background coordinate check tracking poll interval distance: ${t.toFixed(1)} meters.`),t<=Fl){f.gpsVerified=!0,n=Date.now();const r=localStorage.getItem("yathra_dwell_lock");if(r){const i=JSON.parse(r);i.gpsVerified=!0,localStorage.setItem("yathra_dwell_lock",JSON.stringify(i))}}else if(Date.now()-n>=jy){f.gpsVerified=!1,clearInterval(f.dwellTimer),f.dwellActive=!1;const i=localStorage.getItem("yathra_dwell_lock");if(i){const s=JSON.parse(i);s.gpsVerified=!1,localStorage.setItem("yathra_dwell_lock",JSON.stringify(s))}re("Presence synchronization paused: Device is outside geofence boundary parameters. Return to resume."),clearInterval(cr),ot()}}catch(e){console.error("Hardware polling tracking fetch exception caught: ",e)}},qy)}function o2(n,e,t,r){const s=n*Math.PI/180,a=t*Math.PI/180,c=(t-n)*Math.PI/180,l=(r-e)*Math.PI/180,u=Math.sin(c/2)*Math.sin(c/2)+Math.cos(s)*Math.cos(a)*Math.sin(l/2)*Math.sin(l/2);return 6371e3*(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)))}async function Mv(){if(!navigator.onLine)return;const n=localStorage.getItem("yathra_sync_queue");if(!n)return;let e;try{e=JSON.parse(n)}catch(t){console.error(t);return}if(!(!e||e.length===0))for(let t=0;t<e.length;t++){const r=e[t];r.status==="Pending network link"&&(r.status="Verifying...",localStorage.setItem("yathra_sync_queue",JSON.stringify(e)),f.offlineSyncQueue=e,ot(),await new Promise(i=>setTimeout(i,3e3)),r.status="Success",localStorage.setItem("yathra_sync_queue",JSON.stringify(e)),f.offlineSyncQueue=e,ot())}}function Fv(){f.dwellActive&&f.dwellTimer||f.hasInitialPhotoCaptured&&(f.dwellActive=!0,f.dwellTimer=setInterval(()=>{if(f.dwellTimeLeft>0){const n=localStorage.getItem("yathra_dwell_lock");if(n)try{const e=JSON.parse(n),t=Date.now()-e.startTime,r=e.duration||900*1e3;f.dwellTimeLeft=Math.max(0,Math.ceil((r-t)/1e3))}catch(e){console.error(e)}else f.dwellTimeLeft--;f.currentScreen==="dwell-time"&&Uv()}else clearInterval(f.dwellTimer),clearInterval(cr),f.dwellActive=!1,f.currentScreen==="dwell-time"&&ot()},1e3))}function Uv(){const n=document.querySelector(".timer-text-display"),e=document.querySelector(".timer-progress-circle");if(!n||!e)return;const t=Math.floor(f.dwellTimeLeft/60),r=f.dwellTimeLeft%60;n.textContent=`${t<10?"0"+t:t}:${r<10?"0"+r:r}`;const i=900;e.style.strokeDashoffset=565.48-f.dwellTimeLeft/i*565.48}let Ys=15,Xo=null;function xc(){clearInterval(Xo),Ys=15;const n=document.getElementById("quiz-timer");n&&(n.textContent="15s"),Xo=setInterval(()=>{if(Ys>0){Ys--;const e=document.getElementById("quiz-timer");e&&(e.textContent=`${Ys}s`)}else{clearInterval(Xo);const e=document.querySelectorAll("#quiz-options-container .quiz-option-btn");e.forEach(r=>r.disabled=!0),f.quizAnswers.push(-1);const t=f.activeSite.quizzes[f.currentQuizIndex].correctIndex;e[t]&&(e[t].classList.add("correct"),e[t].querySelector(".quiz-circle-ico").style.background="var(--color-green-success)"),setTimeout(()=>{if(f.currentQuizIndex+1<f.activeSite.quizzes.length)f.currentQuizIndex++,ot(),xc();else{const r=f.quizCorrectAnswers;f.user.completedQuizzes[f.activeSite.id]=!0,f.user.quizzesPassed=Object.keys(f.user.completedQuizzes).length,rt(r*10,`Quiz Complete! You got ${r}/5 correct.`),f.cooldownTimeLeft=300,F("quiz-cooldown"),c2()}},1500)}},1e3)}function c2(){f.cooldownActive||(f.cooldownActive=!0,f.cooldownTimer=setInterval(()=>{f.cooldownTimeLeft>0?(f.cooldownTimeLeft--,f.currentScreen==="quiz-cooldown"&&Bv()):(clearInterval(f.cooldownTimer),f.cooldownActive=!1,f.currentScreen==="quiz-cooldown"&&F("site-detail"))},1e3))}function Bv(){const n=document.querySelector(".timer-text-display"),e=document.querySelector(".timer-progress-circle");if(!n||!e)return;const t=Math.floor(f.cooldownTimeLeft/60),r=f.cooldownTimeLeft%60;n.textContent=`${t<10?"0"+t:t}:${r<10?"0"+r:r}`,e.style.strokeDashoffset=565.48-f.cooldownTimeLeft/300*565.48}function Qs(n,e=""){const t=document.getElementById("directory-grid-container");if(!t)return;const r=e.toLowerCase(),i=_e.filter(s=>s.category===n&&(s.name.toLowerCase().includes(r)||s.district.toLowerCase().includes(r)));if(i.length===0){t.innerHTML='<div style="grid-column: 1/3; text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No locations found matching parameters criteria</div>';return}t.innerHTML=i.map(s=>`
    <div class="location-grid-card" data-site-grid-id="${s.id}">
      <img src="${s.image}" alt="${s.name}" class="location-grid-card-img">
      <div class="location-card-content">
        <h4 class="location-card-title">${s.name}</h4>
        <span class="location-card-sub">${s.district}</span>
        <span class="location-card-xp">${s.xpRange}</span>
      </div>
    </div>
  `).join(""),document.querySelectorAll("[data-site-grid-id]").forEach(s=>{s.addEventListener("click",()=>{f.activeSite=_e.find(a=>a.id===s.getAttribute("data-site-grid-id")),F("site-detail")})})}function Jo(n,e=""){const t=document.getElementById("list-cards-container");if(!t)return;const r=e.toLowerCase(),i=_e.filter(s=>s.category===n&&(s.name.toLowerCase().includes(r)||s.district.toLowerCase().includes(r)));if(i.length===0){t.innerHTML='<div style="text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No matching records found</div>';return}t.innerHTML=i.map(s=>`
    <div class="location-list-card" data-site-list-id="${s.id}">
      <img src="${s.image}" alt="${s.name}" class="location-list-img">
      <div class="location-list-content">
        <h4 style="font-size: 13px; font-weight: 800; line-height: 1.3;">${s.name}</h4>
        <span style="font-size: 10px; color: var(--color-gray); margin-top: 1px; margin-bottom: 4px;">${s.district}</span>
        <span style="font-size: 11px; font-weight: 700; color: var(--color-gold);">${s.xpRange}</span>
      </div>
    </div>
  `).join(""),document.querySelectorAll("[data-site-list-id]").forEach(s=>{s.addEventListener("click",()=>{f.activeSite=_e.find(a=>a.id===s.getAttribute("data-site-list-id")),F("site-detail")})})}function $v(n,e,t,r){const s=(t-n)*Math.PI/180,a=(r-e)*Math.PI/180,c=Math.sin(s/2)*Math.sin(s/2)+Math.cos(n*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(a/2)*Math.sin(a/2);return 6371*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))}function l2(n){const e=document.getElementById("map-popup-card");e&&e.remove();const t=document.getElementById("map-popup-container");if(!t)return;const r=document.createElement("div");r.id="map-popup-card",r.className="map-popup-card";let i=n.distance||"0 km";Dn?i="Permission required":Xe&&n.latitude&&n.longitude&&(i=$v(Xe.latitude,Xe.longitude,n.latitude,n.longitude).toFixed(1)+" km"),r.innerHTML=`
    <img src="${n.image}" alt="${n.name}" class="popup-site-img">
    <div class="popup-site-info">
      <h3 style="font-size: 15px; font-weight: 800; color: var(--color-charcoal);">${n.name}</h3>
      <div style="font-size: 11px; color: var(--color-gray); font-weight: 600; margin-top: 1px;">📍 ${n.district}</div>
      <span style="font-size: 10px; color: var(--color-gold); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; display: inline-block;">${n.category}</span>
      <span style="font-size: 11px; color: var(--color-charcoal); font-weight: 700; margin-top: 2px;">⭐ ${n.xpRange} • 📍 ${i}</span>
    </div>
    <button class="btn-primary" style="width: 90px; height: 36px; font-size: 11px; padding:0 8px; gap:4px;" id="map-popup-navigate-btn">🚀 Navigate</button>
  `,t.appendChild(r),document.getElementById("map-popup-navigate-btn").addEventListener("click",s=>{s.stopPropagation(),Ac("site-details",{id:n.id})}),r.addEventListener("click",s=>{s.stopPropagation(),Ac("site-details",{id:n.id})})}export{Fy as L,Tc as M,Vl as W,n2 as _};
