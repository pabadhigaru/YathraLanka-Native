(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const Le={xp:0,rank:"None",medals:0,sitesVisited:0,quizzesPassed:0,permissions:{camera:!1,notifications:!1},role:"",interests:[],signedPetitions:[],donatedAmount:0,joinedEvents:[],unlockedCoupons:[],completedQuizzes:{},dwellTimeCompleted:{},verifiedPhotos:{}},Kn=[{rank:"Grass Toucher",range:[0,99],threshold:0},{rank:"Wanderer",range:[100,249],threshold:100},{rank:"Tuk Tuk Trailer",range:[250,499],threshold:250},{rank:"Magahoyanna",range:[500,999],threshold:500},{rank:"Island Explorer",range:[1e3,2e3],threshold:1e3},{rank:"Lanka Legend",range:[2e3,5e3],threshold:2e3}],Yn=[{name:"Suranga M",points:5820,role:"Explorer",rank:"Lanka Legend"},{name:"Anjali R.",points:5330,role:"Volunteer",rank:"Lanka Legend"},{name:"Dilhani",points:3540,role:"Organizer",rank:"Island Explorer"},{name:"Mihiranga T.",points:1160,role:"Quiz Master",rank:"Island Explorer"}],we=[{id:"mihintale",name:"Mihintale",district:"Anuradhapura District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"220km",openStatus:"Open now",description:"The sacred mountain peak revered as the birthplace of Buddhism in the country, marked by ancient monastic ruins, rock inscriptions, and pristine natural reserves.",image:"Element Pictures/Mihintale.JPG",latitude:8.3508,longitude:80.5186,referenceImage:"Element Pictures/Mihintale.JPG",quizzes:[{question:"What is the significance of the Mihintale rock peak in Sri Lankan history?",options:["It was the first capital of Sri Lanka","It is the site where Buddhism was introduced by Arahat Mahinda","It is a royal palace built by Kashyapa","It is a natural seaport of the ancient era"],correctIndex:1},{question:"Who was the reigning Sri Lankan king when Arahat Mahinda visited Mihintale?",options:["King Dutusgemunu","King Devanampiyatissa","King Kashyapa","King Vijayabahu I"],correctIndex:1},{question:"Which of the following ancient structures is famous for its elephant carvings at Mihintale?",options:["The Kantaka Cetiya Vahalkada","The Aradhana Gala peak","The Ambasthala Dagoba","The Sinha Pokuna (Lion Pond)"],correctIndex:0},{question:"What unique function did the Mihintale Hospital serve in antiquity?",options:["It was a military barracks","It is one of the oldest recorded hospitals in the world, with stone bath tubs for herbal treatment","It was a royal treasury","It was a university for astronomy"],correctIndex:1},{question:"What is the name of the famous massive pond situated halfway up the Mihintale mountain?",options:["Basawakkulama reservoir","Kaludiya Pokuna (Black Water Pond)","Abhayagiri pond","Tissa Wewa"],correctIndex:1}]},{id:"sigiriya",name:"Sigiriya",district:"Matale District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"160km",openStatus:"Open now",description:"An ancient rock fortress constructed by King Kashyapa, celebrated for its advanced water gardens, stunning fifth-century frescoes of celestial maidens, and the colossal lion paw gate.",image:"Element Pictures/Sigiriya.jpg",latitude:7.957,longitude:80.7603,referenceImage:"Element Pictures/Sigiriya-LionRock.jpg",quizzes:[{question:"Which Sri Lankan king created the Sigiriya Rock Fortress?",options:["King Devanampiyatissa","King Dutugemunu","King Kashyapa","King Parakramabahu I"],correctIndex:2},{question:"Sigiriya is globally famous for which ancient artistic creations painted on the rock face?",options:["Carvings of war elephants","Fresco paintings of celestial maidens (Sigiri Apsaras)","Stone inscriptions in Brahmi script","Sculptures of sleeping lions"],correctIndex:1},{question:"What structure stands at the entrance to the final palace summit at Sigiriya?",options:["A massive bronze dragon gate","Colossal Lion Paws carved out of stone","Two giant cobra statues","A double-moat drawbridge"],correctIndex:1},{question:"What is the purpose of the highly polished 'Mirror Wall' at Sigiriya?",options:["To reflect sunrays and blind enemies","It was used by the king to view his reflection","It contains ancient graffiti poems written by visitors dating back to the 8th century","It was a military signaling device"],correctIndex:2},{question:"Which unique layout style is utilized in Sigiriya's royal pleasure gardens?",options:["Terraced mountain farming layout","Symmetrical hydraulic water gardens, boulders, and terraced gardens","Traditional dry zone scrub jungle","A maze of vertical underground caves"],correctIndex:1}]},{id:"ruwanweliseya",name:"Ruwanweliseya",district:"Anuradhapura District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"215km",openStatus:"Open now",description:"A monumental bubble-shaped stupa built by King Dutugemunu in the ancient capital Anuradhapura, venerated as a marvel of ancient civil engineering and Buddhist architecture.",image:"Element Pictures/Ruwanweliseya.jpg",latitude:8.3503,longitude:80.3962,referenceImage:"Element Pictures/Donations Stupa.jpg",quizzes:[{question:"Which ancient monarch initiated the construction of the sacred Ruwanweliseya Stupa?",options:["King Valagamba","King Devanampiyatissa","King Dutugemunu","King Mahasen"],correctIndex:2},{question:"What geometrical shape is the main dome of the Ruwanweliseya Stupa traditionally based on?",options:["Dhanyakara (Heap of Paddy shape)","Bubbulakara (Bubble shape)","Padmakara (Lotus shape)","Ghantakara (Bell shape)"],correctIndex:1},{question:"Which unique feature circles the base platform of the Ruwanweliseya stupa outer wall?",options:["A wall of brick-carved elephants standing side-by-side (Elephant Wall)","A deep circular moat filled with lotus flowers","A ring of bronze spears","Statues of ancient Buddhist kings"],correctIndex:0},{question:"Which architectural components are situated at the four cardinal entrances of the stupa?",options:["Fresco caves","Vahalkadas (decorative frontispieces)","Stone drawbridges","Hydraulic fountains"],correctIndex:1},{question:"What materials were historically used in the foundation of Ruwanweliseya to support its immense weight?",options:["Solid iron sheets and heavy granite blocks","Layers of crushed stones, clay, lead sheets, and a plaster mixture reinforced with animal hide","Hollow wooden logs filled with dry sand","Baked clay pots piled on top of each other"],correctIndex:1}]},{id:"temple_of_tooth",name:"Temple of the Tooth",district:"Kandy District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"115km",openStatus:"Open now",description:"The royal palace complex of Kandy housing the sacred tooth relic of Gautama Buddha, symbolizing sovereignty, rich Kandyan architecture, and royal heritage.",image:"Element Pictures/Temple of the tooth.jpg",latitude:7.2936,longitude:80.6413,referenceImage:"Element Pictures/Temple of the tooth.jpg",quizzes:[{question:"Where is the Sri Dalada Maligawa (Temple of the Sacred Tooth Relic) located?",options:["Anuradhapura","Polonnaruwa","Kandy","Jaffna"],correctIndex:2},{question:"Historically, what did possession of the Sacred Tooth Relic represent for Sri Lankan monarchs?",options:["Command over the merchant fleets","The divine right and legitimate authority to rule the country","Immunity from foreign invasions","Direct control over the pearl fisheries"],correctIndex:1},{question:"What is the name of the octagonal pavilion building situated at the front of the Kandy Temple?",options:["Pattirippuwa","Sandakada Pahana","Vahalkada","Gedige"],correctIndex:0},{question:"Which major annual cultural procession parading Kandy features the sacred casket?",options:["The Duruthu Perahera","The Esala Perahera","The Vesak Kalapaya","The Katharagama festival"],correctIndex:1},{question:"What decorative motif characterizes the surrounding protective walls of Kandy Lake and the temple moat?",options:["Lion posture carvings","Diyarella Bemma (Wave swell wall) and clouds pattern openings","Bronze spikes","Lotus petal panels"],correctIndex:1}]},{id:"dowa_rock_temple",name:"Dowa Rock Temple",district:"Badulla District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"180km",openStatus:"Open now",description:"A historic cave temple tucked in the Uva province hills, famous for its massive unfinished 38-foot tall standing Buddha statue carved directly into a sheer rock cliff.",image:"Element Pictures/Dowa Rock Temple.jpg",latitude:6.8202,longitude:81.0255,referenceImage:"Element Pictures/Dowa Rock Temple.jpg",quizzes:[{question:"What is the most prominent visual attraction at the Dowa Rock Temple?",options:["A golden reclining Buddha statue","A massive, unfinished 38-foot tall standing Buddha statue carved directly into the rock face","An underground crystal spring","A wall painted entirely with ancient map routes"],correctIndex:1},{question:"Which ancient monarch is locally credited with establishing the cave sanctuary at Dowa?",options:["King Dutugemunu","King Valagamba (Vattagamani Abhaya)","King Kashyapa","King Devanampiyatissa"],correctIndex:1},{question:"The rock carvings at Dowa show influences of which historical artistic school?",options:["Modern abstract sculpture","Late Anuradhapura and early Polonnaruwa regional rock art styles","Roman classical sculpting","Chola dynasty metalworks"],correctIndex:1},{question:"What unique reptile motif is painted on the ceiling of the shrine cave protecting the shrine?",options:["A three-headed cobra battling a giant viper","A giant sea turtle","A coiled python guardian","A green forest lizard"],correctIndex:0},{question:"Dowa Rock Temple is situated close to which popular hill station town in Badulla?",options:["Nuwara Eliya","Ella","Haputale","Bandarawela"],correctIndex:3}]},{id:"ritigala_monastery",name:"Ritigala Monastery",district:"Anuradhapura District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"195km",openStatus:"Open now",description:"An ancient mountain range housing the mysterious ruins of a forest-dwelling monastery, renowned for its austere architecture (Padhanaghara), beautiful stone paths, bathing pools, and herbal gardens.",image:"Element Pictures/Ritigala Monastery.jpg",latitude:8.1139,longitude:80.6558,referenceImage:"Element Pictures/Ritigala Monastery.jpg",quizzes:[{question:"What is unique about the ancient monastic structures (Padhanagharas) found at Ritigala?",options:["They are decorated with gold leaf and gems","They are completely devoid of any decorative carvings, prioritizing deep ascetic isolation and simple stone geometry","They are built on high stilts in dry mud","They have massive stupas surrounding them"],correctIndex:1},{question:"Which community of forest-dwelling monks historically inhabited the secluded peaks of Ritigala?",options:["The Tapovana monks (Pamsukulika fraternity)","Foreign Roman monks","Royal guards","Spice merchants"],correctIndex:0},{question:"What botanical anomaly makes the peak of Ritigala different from the surrounding dry zone plains?",options:["It has no vegetation due to volcanic activity","It contains a unique microclimate supporting wet-zone flora, medicinal herbs, and rare orchids on the misty summit","It grows only pine and fir trees","It is completely covered in swamp mangrove plants"],correctIndex:1},{question:"What impressive stone structures connect the ancient cells and platforms of Ritigala?",options:["Hanging vine suspension bridges","Meticulously paved stone-cut walkways and steps traversing the dense forest slopes","Hollow clay pipelines","Symmetrical marble corridors"],correctIndex:1},{question:"Which massive circular stone pond structure lies near the entrance of the Ritigala ruins?",options:["Banda Pokuna (large bathing pool with stone steps)","Sinha Pokuna","Kaludiya Pokuna","Tissa Wewa"],correctIndex:0}]},{id:"yudaganawa",name:"Yudaganawa",district:"Badulla District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"230km",openStatus:"Open now",description:"One of the largest colossal stupas in Sri Lanka, constructed in the 12th century, historical battlefield where King Dutugemunu and his brother Tissa fought for sovereignty.",image:"Element Pictures/Yudaganawa.jpg",latitude:6.7292,longitude:81.2831,referenceImage:"Element Pictures/Yudaganawa.jpg",quizzes:[{question:"What historic event occurred at the site of Yudaganawa in the Uva region?",options:["The final coronation of King Parakramabahu","The battlefield clash between brothers Prince Dutugemunu and Prince Tissa over the state crown","The signing of the Kandyan Convention","The first planting of the sacred Bo Tree"],correctIndex:1},{question:"What is unique about the structural layout of the Yudaganawa Stupa?",options:["It is built on a massive elevated wooden deck","It is a colossal, flat-topped semi-finished stupa (Kota Vehera style)","It is carved entirely out of a single piece of green rock","It has five rings of defensive moats surrounding it"],correctIndex:1},{question:"Yudaganawa is situated in the proximity of which historic town in the Moneragala/Badulla area?",options:["Buttala","Wellawaya","Ella","Mahiyanganaya"],correctIndex:0},{question:"What does the name 'Yudaganawa' literally translate to in Sinhala?",options:["Peaceful garden","Arena of Battle / Battleground","Temple of Sovereignty","Elephant lake"],correctIndex:1},{question:"Which of the following is found near Yudaganawa, representing ancient irrigation marvels?",options:["Yudaganawa Wewa (irrigation tank)","Senanayake Samudra","Kala Wewa","Parakrama Samudra"],correctIndex:0}]},{id:"pilikuttuwa",name:"Pilikuttuwa Temple",district:"Gampaha District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"35km",openStatus:"Open now",description:"An ancient forest cave sanctuary close to Colombo, famous for housing 99 drip-ledged caves, historic murals, wooden bridge over natural water flows, and pre-historic rock formations.",image:"Element Pictures/Pilikuttuwa Temple.jpg",latitude:7.0709,longitude:80.0384,referenceImage:"Element Pictures/Pilikuttuwa Temple.jpg",quizzes:[{question:"What is the primary natural and historical feature of the Pilikuttuwa Temple complex?",options:["A massive multi-tiered stone pagoda","A dense network of 99 drip-ledged rock shelter caves used by ancient monks","A natural volcanic geyser","A salt desert flat"],correctIndex:1},{question:"What famous historic bridge structure is preserved within the Pilikuttuwa sanctuary?",options:["A massive iron drawbridge","An ancient Dutch-era wooden canopy bridge spanning a stream","A marble arched bridge","A hanging bamboo rope bridge"],correctIndex:1},{question:"Which period of Sri Lankan art do the interior temple cave murals and frescoes at Pilikuttuwa belong to?",options:["Anuradhapura Period","Kandyan Kingdom and early colonial transitions","Modern contemporary art","Prehistoric stone paintings"],correctIndex:1},{question:"Which historic king took refuge in the caves of Pilikuttuwa during foreign invasions?",options:["King Kashyapa","King Valagamba","King Vijayabahu","King Dutugemunu"],correctIndex:1},{question:"What does the drip-ledge (Kataraya) on the caves of Pilikuttuwa do?",options:["It funnels drinking water into inside stone cups","It diverts monsoon rainwater away from entering the cave shelters, keeping the interior dry","It serves as a climbing groove for soldiers","It represents royal lineage crowns"],correctIndex:1}]},{id:"maligawila",name:"Maligawila Statue",district:"Moneragala District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"240km",openStatus:"Open now",description:"The home of a colossal 7th-century standing Buddha statue carved out of a single limestone rock, considered one of the absolute masterpieces of ancient sculpting.",image:"Element Pictures/maligawila buddha statue.jpg",latitude:6.7352,longitude:81.3392,referenceImage:"Element Pictures/maligawila buddha statue.jpg",quizzes:[{question:"What masterpiece of Sri Lankan limestone sculpture is found at Maligawila?",options:["A massive sleeping clay Buddha","A colossal 36-foot standing Buddha statue carved out of a single crystalline limestone block","A gold-plated stupa dome","A row of terracotta warriors"],correctIndex:1},{question:"Which ancient prince is historically credited with crafting this massive statue in the 7th century?",options:["Prince Kashyapa","Prince Agrabodhi","Prince Dutugemunu","Prince Valagamba"],correctIndex:1},{question:"Which neighboring site at Maligawila features a giant statue of Avalokiteshvara Bodhisattva?",options:["Dambegoda (Dambegoda Bodhisattva Statue)","Sigiriya rock","Buduruvagala caves","Aukana"],correctIndex:0},{question:"What state of preservation was the Maligawila Buddha found in during the late 20th century before restoration?",options:["Fully intact under a pristine dome","Fallen, broken into several massive segments in the dense jungle","Partially buried in beach sand dunes","Submerged in a large reservoir lake"],correctIndex:1},{question:"What architectural feature originally enclosed the massive standing Buddha statue?",options:["A circular brick and stone Image House (Patimaghara)","A simple open-air wood canopy","A series of deep stone trenches","A tall metal tower"],correctIndex:0}]},{id:"ibbankatuwa",name:"Ibbankatuwa Tombs",district:"Matale District",category:"Hidden Gems",xpRange:"75 - 100 XP",minXp:75,maxXp:100,distance:"150km",openStatus:"Open now",description:"A famous megalithic prehistoric burial ground dating back to the Iron Age, showcasing stone cist graves, ancient pottery, beads, and advanced early societal burials.",image:"Element Pictures/Ibbankatuwa Tombs.JPG",latitude:7.8596,longitude:80.6481,referenceImage:"Element Pictures/Ibbankatuwa Tombs.JPG",quizzes:[{question:"What unique prehistoric archaeological site is found at Ibbankatuwa?",options:["An ancient palace courtyard","A massive Megalithic Cist Burial Ground from the protohistoric Iron Age (dating back 2500+ years)","An ancient port for gem ships","A prehistoric tool-making cave"],correctIndex:1},{question:"What typical shape do the grave chambers (cists) at Ibbankatuwa have?",options:["Circular deep stone wells","Four granite slab walls forming a rectangular box capped with a large stone cover slab","Triangular pyramids built from clay","Hollow logs buried vertically"],correctIndex:1},{question:"Which of the following artifacts were found inside the cist tombs, proving ancient trade connections?",options:["Roman gold coins","Beads made of carnelian, onyx, agate, clay pottery urns containing ashes, and copper tools","Porcelain plates from China","Bronze guns"],correctIndex:1},{question:"The residents of the pre-historic Ibbankatuwa era primarily used which major metal classification?",options:["Only flint stone tools","Iron and Copper (Megalithic Iron Age culture)","Aluminum and Steel","Pure Platinum"],correctIndex:1},{question:"Near which major central province city is the Ibbankatuwa Megalithic Site situated?",options:["Kandy","Dambulla","Jaffna","Negombo"],correctIndex:1}]},{id:"galle_fort",name:"Galle Fort",district:"Galle District",category:"Heritage Trail",xpRange:"25 - 80 XP",minXp:25,maxXp:80,distance:"125km",openStatus:"Open now",description:"A coastal fortress built by the Portuguese, heavily fortified by the Dutch, blending European military architecture and South Asian traditions.",image:"Element Pictures/Galle Fort.jpg",latitude:6.0267,longitude:80.2167,referenceImage:"Element Pictures/Galle Fort.jpg",quizzes:[{question:"Which European nation first constructed fortifications in Galle before the Dutch expanded it?",options:["The British","The Portuguese","The French","The Spanish"],correctIndex:1},{question:"What is the famous white structure standing on the Utrecht Bastion overlooking the ocean in Galle Fort?",options:["The Clock Tower","The Galle Lighthouse","The Dutch Reformed Church dome","The Maritime Museum tower"],correctIndex:1},{question:"Galle Fort is recognized globally under which prestigious classification?",options:["A Biosphere Reserve","A UNESCO World Heritage Site","An industrial trade zone","A national sanctuary park"],correctIndex:1},{question:"What is the name of the narrow stone gateway featuring a coat of arms of the VOC Dutch East India Company?",options:["The Galle Old Gate","The Lighthouse gate","The Main Bastion drawbridge","The Sea Gate"],correctIndex:0},{question:"What architectural feature characterizes the traditional Dutch villa residential lanes in Galle Fort?",options:["Tall modern glass high-rises","Verandah houses, terracotta tile roofs, pillared arches, and paved stone inner courtyards","Circular wood log cabins","Subterranean cave rooms"],correctIndex:1}]}],Xn=[{id:"social_media",name:"Social Media Presence",description:"Share about your visit",xp:5,duration:"10 mins",icon:"icons/social media presence icon.png"},{id:"local_food",name:"Local Food",description:"Try a traditional dish",xp:5,duration:"20 mins",icon:"icons/local food icon.png"},{id:"wandering_around",name:"Wandering Around",description:"Visit a nearby site",xp:5,duration:"20 mins",icon:"icons/Wandering Around icon.png"},{id:"wildlife_spotting",name:"Wildlife Spotting",description:"Spot and record an animal",xp:5,duration:"20 mins",icon:"icons/Wildlife Spotting icon.png"},{id:"eco_warrior",name:"Eco-Warrior",description:"Conserve the environment",xp:10,duration:"15 mins",icon:"icons/Eco Warrior icon.png"}],Jn=()=>{};var Ut={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=function(t){const e=[];let i=0;for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);r<128?e[i++]=r:r<2048?(e[i++]=r>>6|192,e[i++]=r&63|128):(r&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++n)&1023),e[i++]=r>>18|240,e[i++]=r>>12&63|128,e[i++]=r>>6&63|128,e[i++]=r&63|128):(e[i++]=r>>12|224,e[i++]=r>>6&63|128,e[i++]=r&63|128)}return e},Qn=function(t){const e=[];let i=0,n=0;for(;i<t.length;){const r=t[i++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[i++];e[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[i++],a=t[i++],c=t[i++],l=((r&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const s=t[i++],a=t[i++];e[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Ti={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<t.length;r+=3){const s=t[r],a=r+1<t.length,c=a?t[r+1]:0,l=r+2<t.length,d=l?t[r+2]:0,g=s>>2,u=(s&3)<<4|c>>4;let h=(c&15)<<2|d>>6,y=d&63;l||(y=64,a||(h=64)),n.push(i[g],i[u],i[h],i[y])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ei(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<t.length;){const s=i[t.charAt(r++)],c=r<t.length?i[t.charAt(r)]:0;++r;const d=r<t.length?i[t.charAt(r)]:64;++r;const u=r<t.length?i[t.charAt(r)]:64;if(++r,s==null||c==null||d==null||u==null)throw new Zn;const h=s<<2|c>>4;if(n.push(h),d!==64){const y=c<<4&240|d>>2;if(n.push(y),u!==64){const w=d<<6&192|u;n.push(w)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const er=function(t){const e=Ei(t);return Ti.encodeByteArray(e,!0)},Si=function(t){return er(t).replace(/\./g,"")},Pi=function(t){try{return Ti.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ir=()=>tr().__FIREBASE_DEFAULTS__,nr=()=>{if(typeof process>"u"||typeof Ut>"u")return;const t=Ut.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rr=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pi(t[1]);return e&&JSON.parse(e)},xt=()=>{try{return Jn()||ir()||nr()||rr()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sr=t=>xt()?.emulatorHosts?.[t],Ai=()=>xt()?.config,Ci=t=>xt()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,n)=>{i?this.reject(i):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ar(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function or(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Li(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lr(){const t=_();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Di(){try{return typeof indexedDB=="object"}catch{return!1}}function Oi(){return new Promise((t,e)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),t(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(i){e(i)}})}function dr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="FirebaseError";class N extends Error{constructor(e,i,n){super(i),this.code=e,this.customData=n,this.name=ur,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oe.prototype.create)}}class oe{constructor(e,i,n){this.service=e,this.serviceName=i,this.errors=n}create(e,...i){const n=i[0]||{},r=`${this.service}/${e}`,s=this.errors[e],a=s?pr(s,n):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new N(r,c,n)}}function pr(t,e){return t.replace(hr,(i,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const hr=/\{\$([^}]+)}/g;function fr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ie(t,e){if(t===e)return!0;const i=Object.keys(t),n=Object.keys(e);for(const r of i){if(!n.includes(r))return!1;const s=t[r],a=e[r];if(qt(s)&&qt(a)){if(!ie(s,a))return!1}else if(s!==a)return!1}for(const r of n)if(!i.includes(r))return!1;return!0}function qt(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){const e=[];for(const[i,n]of Object.entries(t))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ve(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,s]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function ye(t){const e=t.indexOf("?");if(!e)return"";const i=t.indexOf("#",e);return t.substring(e,i>0?i:void 0)}function gr(t,e){const i=new mr(t,e);return i.subscribe.bind(i)}class mr{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,n){let r;if(e===void 0&&i===void 0&&n===void 0)throw new Error("Missing Observer.");vr(e,["next","error","complete"])?r=e:r={next:e,error:i,complete:n},r.next===void 0&&(r.next=Ze),r.error===void 0&&(r.error=Ze),r.complete===void 0&&(r.complete=Ze);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vr(t,e){if(typeof t!="object"||t===null)return!1;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}function Ze(){}/**
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
 */const yr=1e3,br=2,wr=4*60*60*1e3,xr=.5;function Bt(t,e=yr,i=br){const n=e*Math.pow(i,t),r=Math.round(xr*n*(Math.random()-.5)*2);return Math.min(wr,n+r)}/**
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
 */function P(t){return t&&t._delegate?t._delegate:t}/**
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
 */function kt(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kr(t){return(await fetch(t,{credentials:"include"})).ok}class z{constructor(e,i,n){this.name=e,this.instanceFactory=i,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Z="[DEFAULT]";/**
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
 */class Ir{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const n=new Ri;if(this.instancesDeferred.set(i,n),this.isInitialized(i)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:i});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){const i=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Er(e))try{this.getOrInitializeService({instanceIdentifier:Z})}catch{}for(const[i,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(i);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(e=Z){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Z){return this.instances.has(e)}getOptions(e=Z){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:i});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&a.resolve(r)}return r}onInit(e,i){const n=this.normalizeInstanceIdentifier(i),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,i){const n=this.onInitCallbacks.get(i);if(n)for(const r of n)try{r(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:_r(e),options:i}),this.instances.set(e,n),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Z){return this.component?this.component.multipleInstances?e:Z:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _r(t){return t===Z?void 0:t}function Er(t){return t.instantiationMode==="EAGER"}/**
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
 */class Tr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new Ir(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(m||(m={}));const Sr={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},Pr=m.INFO,Ar={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},Cr=(t,e,...i)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),r=Ar[e];if(r)console[r](`[${n}]  ${t.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class It{constructor(e){this.name=e,this._logLevel=Pr,this._logHandler=Cr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in m))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...e),this._logHandler(this,m.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...e),this._logHandler(this,m.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,m.INFO,...e),this._logHandler(this,m.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,m.WARN,...e),this._logHandler(this,m.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...e),this._logHandler(this,m.ERROR,...e)}}const Rr=(t,e)=>e.some(i=>t instanceof i);let Ft,jt;function Lr(){return Ft||(Ft=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dr(){return jt||(jt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zi=new WeakMap,ut=new WeakMap,Ni=new WeakMap,et=new WeakMap,_t=new WeakMap;function Or(t){const e=new Promise((i,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{i(X(t.result)),r()},a=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(i=>{i instanceof IDBCursor&&zi.set(i,t)}).catch(()=>{}),_t.set(e,t),e}function zr(t){if(ut.has(t))return;const e=new Promise((i,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{i(),r()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});ut.set(t,e)}let pt={get(t,e,i){if(t instanceof IDBTransaction){if(e==="done")return ut.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ni.get(t);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return X(t[e])},set(t,e,i){return t[e]=i,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nr(t){pt=t(pt)}function Mr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const n=t.call(tt(this),e,...i);return Ni.set(n,e.sort?e.sort():[e]),X(n)}:Dr().includes(t)?function(...e){return t.apply(tt(this),e),X(zi.get(this))}:function(...e){return X(t.apply(tt(this),e))}}function $r(t){return typeof t=="function"?Mr(t):(t instanceof IDBTransaction&&zr(t),Rr(t,Lr())?new Proxy(t,pt):t)}function X(t){if(t instanceof IDBRequest)return Or(t);if(et.has(t))return et.get(t);const e=$r(t);return e!==t&&(et.set(t,e),_t.set(e,t)),e}const tt=t=>_t.get(t);function Mi(t,e,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){const a=indexedDB.open(t,e),c=X(a);return n&&a.addEventListener("upgradeneeded",l=>{n(X(a.result),l.oldVersion,l.newVersion,X(a.transaction),l)}),i&&a.addEventListener("blocked",l=>i(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Ur=["get","getKey","getAll","getAllKeys","count"],qr=["put","add","delete","clear"],it=new Map;function Wt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(it.get(e))return it.get(e);const i=e.replace(/FromIndex$/,""),n=e!==i,r=qr.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||Ur.includes(i)))return;const s=async function(a,...c){const l=this.transaction(a,r?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[i](...c),r&&l.done]))[0]};return it.set(e,s),s}Nr(t=>({...t,get:(e,i,n)=>Wt(e,i)||t.get(e,i,n),has:(e,i)=>!!Wt(e,i)||t.has(e,i)}));/**
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
 */class Br{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(Fr(i)){const n=i.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(i=>i).join(" ")}}function Fr(t){return t.getComponent()?.type==="VERSION"}const ht="@firebase/app",Ht="0.15.0";/**
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
 */const q=new It("@firebase/app"),jr="@firebase/app-compat",Wr="@firebase/analytics-compat",Hr="@firebase/analytics",Vr="@firebase/app-check-compat",Gr="@firebase/app-check",Kr="@firebase/auth",Yr="@firebase/auth-compat",Xr="@firebase/database",Jr="@firebase/data-connect",Qr="@firebase/database-compat",Zr="@firebase/functions",es="@firebase/functions-compat",ts="@firebase/installations",is="@firebase/installations-compat",ns="@firebase/messaging",rs="@firebase/messaging-compat",ss="@firebase/performance",as="@firebase/performance-compat",os="@firebase/remote-config",cs="@firebase/remote-config-compat",ls="@firebase/storage",ds="@firebase/storage-compat",us="@firebase/firestore",ps="@firebase/ai",hs="@firebase/firestore-compat",fs="firebase",gs="12.15.0";/**
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
 */const ft="[DEFAULT]",ms={[ht]:"fire-core",[jr]:"fire-core-compat",[Hr]:"fire-analytics",[Wr]:"fire-analytics-compat",[Gr]:"fire-app-check",[Vr]:"fire-app-check-compat",[Kr]:"fire-auth",[Yr]:"fire-auth-compat",[Xr]:"fire-rtdb",[Jr]:"fire-data-connect",[Qr]:"fire-rtdb-compat",[Zr]:"fire-fn",[es]:"fire-fn-compat",[ts]:"fire-iid",[is]:"fire-iid-compat",[ns]:"fire-fcm",[rs]:"fire-fcm-compat",[ss]:"fire-perf",[as]:"fire-perf-compat",[os]:"fire-rc",[cs]:"fire-rc-compat",[ls]:"fire-gcs",[ds]:"fire-gcs-compat",[us]:"fire-fst",[hs]:"fire-fst-compat",[ps]:"fire-vertex","fire-js":"fire-js",[fs]:"fire-js-all"};/**
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
 */const Me=new Map,vs=new Map,gt=new Map;function Vt(t,e){try{t.container.addComponent(e)}catch(i){q.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function B(t){const e=t.name;if(gt.has(e))return q.debug(`There were multiple attempts to register component ${e}.`),!1;gt.set(e,t);for(const i of Me.values())Vt(i,t);for(const i of vs.values())Vt(i,t);return!0}function ge(t,e){const i=t.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),t.container.getProvider(e)}function A(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ys={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},J=new oe("app","Firebase",ys);/**
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
 */class bs{constructor(e,i,n){this._isDeleted=!1,this._options={...e},this._config={...i},this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new z("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw J.create("app-deleted",{appName:this._name})}}/**
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
 */const _e=gs;function $i(t,e={}){let i=t;typeof e!="object"&&(e={name:e});const n={name:ft,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw J.create("bad-app-name",{appName:String(r)});if(i||(i=Ai()),!i)throw J.create("no-options");const s=Me.get(r);if(s){if(ie(i,s.options)&&ie(n,s.config))return s;throw J.create("duplicate-app",{appName:r})}const a=new Tr(r);for(const l of gt.values())a.addComponent(l);const c=new bs(i,n,a);return Me.set(r,c),c}function Ui(t=ft){const e=Me.get(t);if(!e&&t===ft&&Ai())return $i();if(!e)throw J.create("no-app",{appName:t});return e}function L(t,e,i){let n=ms[t]??t;i&&(n+=`-${i}`);const r=n.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const a=[`Unable to register library "${n}" with version "${e}":`];r&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),q.warn(a.join(" "));return}B(new z(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const ws="firebase-heartbeat-database",xs=1,xe="firebase-heartbeat-store";let nt=null;function qi(){return nt||(nt=Mi(ws,xs,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xe)}catch(i){console.warn(i)}}}}).catch(t=>{throw J.create("idb-open",{originalErrorMessage:t.message})})),nt}async function ks(t){try{const i=(await qi()).transaction(xe),n=await i.objectStore(xe).get(Bi(t));return await i.done,n}catch(e){if(e instanceof N)q.warn(e.message);else{const i=J.create("idb-get",{originalErrorMessage:e?.message});q.warn(i.message)}}}async function Gt(t,e){try{const n=(await qi()).transaction(xe,"readwrite");await n.objectStore(xe).put(e,Bi(t)),await n.done}catch(i){if(i instanceof N)q.warn(i.message);else{const n=J.create("idb-set",{originalErrorMessage:i?.message});q.warn(n.message)}}}function Bi(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Is=1024,_s=30;class Es{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Ss(i),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Kt();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(r=>r.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:i}),this._heartbeatsCache.heartbeats.length>_s){const r=Ps(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){q.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kt(),{heartbeatsToSend:i,unsentEntries:n}=Ts(this._heartbeatsCache.heartbeats),r=Si(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return q.warn(e),""}}}function Kt(){return new Date().toISOString().substring(0,10)}function Ts(t,e=Is){const i=[];let n=t.slice();for(const r of t){const s=i.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),Yt(i)>e){s.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),Yt(i)>e){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}class Ss{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Di()?Oi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await ks(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Gt(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Gt(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Yt(t){return Si(JSON.stringify({version:2,heartbeats:t})).length}function Ps(t){if(t.length===0)return-1;let e=0,i=t[0].date;for(let n=1;n<t.length;n++)t[n].date<i&&(i=t[n].date,e=n);return e}/**
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
 */function As(t){B(new z("platform-logger",e=>new Br(e),"PRIVATE")),B(new z("heartbeat",e=>new Es(e),"PRIVATE")),L(ht,Ht,t),L(ht,Ht,"esm2020"),L("fire-js","")}As("");var Cs="firebase",Rs="12.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */L(Cs,Rs,"app");const Fi="@firebase/installations",Et="0.6.22";/**
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
 */const ji=1e4,Wi=`w:${Et}`,Hi="FIS_v2",Ls="https://firebaseinstallations.googleapis.com/v1",Ds=60*60*1e3,Os="installations",zs="Installations";/**
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
 */const Ns={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ne=new oe(Os,zs,Ns);function Vi(t){return t instanceof N&&t.code.includes("request-failed")}/**
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
 */function Gi({projectId:t}){return`${Ls}/projects/${t}/installations`}function Ki(t){return{token:t.token,requestStatus:2,expiresIn:$s(t.expiresIn),creationTime:Date.now()}}async function Yi(t,e){const n=(await e.json()).error;return ne.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Xi({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Ms(t,{refreshToken:e}){const i=Xi(t);return i.append("Authorization",Us(e)),i}async function Ji(t){const e=await t();return e.status>=500&&e.status<600?t():e}function $s(t){return Number(t.replace("s","000"))}function Us(t){return`${Hi} ${t}`}/**
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
 */async function qs({appConfig:t,heartbeatServiceProvider:e},{fid:i}){const n=Gi(t),r=Xi(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={fid:i,authVersion:Hi,appId:t.appId,sdkVersion:Wi},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await Ji(()=>fetch(n,c));if(l.ok){const d=await l.json();return{fid:d.fid||i,registrationStatus:2,refreshToken:d.refreshToken,authToken:Ki(d.authToken)}}else throw await Yi("Create Installation",l)}/**
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
 */function Qi(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Bs(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Fs=/^[cdef][\w-]{21}$/,mt="";function js(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const i=Ws(t);return Fs.test(i)?i:mt}catch{return mt}}function Ws(t){return Bs(t).substr(0,22)}/**
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
 */function Ve(t){return`${t.appName}!${t.appId}`}/**
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
 */const Zi=new Map;function en(t,e){const i=Ve(t);tn(i,e),Hs(i,e)}function tn(t,e){const i=Zi.get(t);if(i)for(const n of i)n(e)}function Hs(t,e){const i=Vs();i&&i.postMessage({key:t,fid:e}),Gs()}let ee=null;function Vs(){return!ee&&"BroadcastChannel"in self&&(ee=new BroadcastChannel("[Firebase] FID Change"),ee.onmessage=t=>{tn(t.data.key,t.data.fid)}),ee}function Gs(){Zi.size===0&&ee&&(ee.close(),ee=null)}/**
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
 */const Ks="firebase-installations-database",Ys=1,re="firebase-installations-store";let rt=null;function Tt(){return rt||(rt=Mi(Ks,Ys,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(re)}}})),rt}async function $e(t,e){const i=Ve(t),r=(await Tt()).transaction(re,"readwrite"),s=r.objectStore(re),a=await s.get(i);return await s.put(e,i),await r.done,(!a||a.fid!==e.fid)&&en(t,e.fid),e}async function nn(t){const e=Ve(t),n=(await Tt()).transaction(re,"readwrite");await n.objectStore(re).delete(e),await n.done}async function Ge(t,e){const i=Ve(t),r=(await Tt()).transaction(re,"readwrite"),s=r.objectStore(re),a=await s.get(i),c=e(a);return c===void 0?await s.delete(i):await s.put(c,i),await r.done,c&&(!a||a.fid!==c.fid)&&en(t,c.fid),c}/**
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
 */async function St(t){let e;const i=await Ge(t.appConfig,n=>{const r=Xs(n),s=Js(t,r);return e=s.registrationPromise,s.installationEntry});return i.fid===mt?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function Xs(t){const e=t||{fid:js(),registrationStatus:0};return rn(e)}function Js(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(ne.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=Qs(t,i);return{installationEntry:i,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Zs(t)}:{installationEntry:e}}async function Qs(t,e){try{const i=await qs(t,e);return $e(t.appConfig,i)}catch(i){throw Vi(i)&&i.customData.serverCode===409?await nn(t.appConfig):await $e(t.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function Zs(t){let e=await Xt(t.appConfig);for(;e.registrationStatus===1;)await Qi(100),e=await Xt(t.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:n}=await St(t);return n||i}return e}function Xt(t){return Ge(t,e=>{if(!e)throw ne.create("installation-not-found");return rn(e)})}function rn(t){return ea(t)?{fid:t.fid,registrationStatus:0}:t}function ea(t){return t.registrationStatus===1&&t.registrationTime+ji<Date.now()}/**
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
 */async function ta({appConfig:t,heartbeatServiceProvider:e},i){const n=ia(t,i),r=Ms(t,i),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const a={installation:{sdkVersion:Wi,appId:t.appId}},c={method:"POST",headers:r,body:JSON.stringify(a)},l=await Ji(()=>fetch(n,c));if(l.ok){const d=await l.json();return Ki(d)}else throw await Yi("Generate Auth Token",l)}function ia(t,{fid:e}){return`${Gi(t)}/${e}/authTokens:generate`}/**
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
 */async function Pt(t,e=!1){let i;const n=await Ge(t.appConfig,s=>{if(!sn(s))throw ne.create("not-registered");const a=s.authToken;if(!e&&sa(a))return s;if(a.requestStatus===1)return i=na(t,e),s;{if(!navigator.onLine)throw ne.create("app-offline");const c=oa(s);return i=ra(t,c),c}});return i?await i:n.authToken}async function na(t,e){let i=await Jt(t.appConfig);for(;i.authToken.requestStatus===1;)await Qi(100),i=await Jt(t.appConfig);const n=i.authToken;return n.requestStatus===0?Pt(t,e):n}function Jt(t){return Ge(t,e=>{if(!sn(e))throw ne.create("not-registered");const i=e.authToken;return ca(i)?{...e,authToken:{requestStatus:0}}:e})}async function ra(t,e){try{const i=await ta(t,e),n={...e,authToken:i};return await $e(t.appConfig,n),i}catch(i){if(Vi(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await nn(t.appConfig);else{const n={...e,authToken:{requestStatus:0}};await $e(t.appConfig,n)}throw i}}function sn(t){return t!==void 0&&t.registrationStatus===2}function sa(t){return t.requestStatus===2&&!aa(t)}function aa(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ds}function oa(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function ca(t){return t.requestStatus===1&&t.requestTime+ji<Date.now()}/**
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
 */async function la(t){const e=t,{installationEntry:i,registrationPromise:n}=await St(e);return n?n.catch(console.error):Pt(e).catch(console.error),i.fid}/**
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
 */async function da(t,e=!1){const i=t;return await ua(i),(await Pt(i,e)).token}async function ua(t){const{registrationPromise:e}=await St(t);e&&await e}/**
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
 */function pa(t){if(!t||!t.options)throw st("App Configuration");if(!t.name)throw st("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!t.options[i])throw st(i);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function st(t){return ne.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="installations",ha="installations-internal",fa=t=>{const e=t.getProvider("app").getImmediate(),i=pa(e),n=ge(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},ga=t=>{const e=t.getProvider("app").getImmediate(),i=ge(e,an).getImmediate();return{getId:()=>la(i),getToken:r=>da(i,r)}};function ma(){B(new z(an,fa,"PUBLIC")),B(new z(ha,ga,"PRIVATE"))}ma();L(Fi,Et);L(Fi,Et,"esm2020");/**
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
 */const Ue="analytics",va="firebase_id",ya="origin",ba=60*1e3,wa="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",At="https://www.googletagmanager.com/gtag/js";/**
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
 */const I=new It("@firebase/analytics");/**
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
 */const xa={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},S=new oe("analytics","Analytics",xa);/**
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
 */function ka(t){if(!t.startsWith(At)){const e=S.create("invalid-gtag-resource",{gtagURL:t});return I.warn(e.message),""}return t}function on(t){return Promise.all(t.map(e=>e.catch(i=>i)))}function Ia(t,e){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(t,e)),i}function _a(t,e){const i=Ia("firebase-js-sdk-policy",{createScriptURL:ka}),n=document.createElement("script"),r=`${At}?l=${t}&id=${e}`;n.src=i?i?.createScriptURL(r):r,n.async=!0,document.head.appendChild(n)}function Ea(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Ta(t,e,i,n,r,s){const a=n[r];try{if(a)await e[a];else{const l=(await on(i)).find(d=>d.measurementId===r);l&&await e[l.appId]}}catch(c){I.error(c)}t("config",r,s)}async function Sa(t,e,i,n,r){try{let s=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const c=await on(i);for(const l of a){const d=c.find(u=>u.measurementId===l),g=d&&e[d.appId];if(g)s.push(g);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",n,r||{})}catch(s){I.error(s)}}function Pa(t,e,i,n){async function r(s,...a){try{if(s==="event"){const[c,l]=a;await Sa(t,e,i,c,l)}else if(s==="config"){const[c,l]=a;await Ta(t,e,i,n,c,l)}else if(s==="consent"){const[c,l]=a;t("consent",c,l)}else if(s==="get"){const[c,l,d]=a;t("get",c,l,d)}else if(s==="set"){const[c]=a;t("set",c)}else t(s,...a)}catch(c){I.error(c)}}return r}function Aa(t,e,i,n,r){let s=function(...a){window[n].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=Pa(s,t,e,i),{gtagCore:s,wrappedGtag:window[r]}}function Ca(t){const e=window.document.getElementsByTagName("script");for(const i of Object.values(e))if(i.src&&i.src.includes(At)&&i.src.includes(t))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=30,La=1e3;class Da{constructor(e={},i=La){this.throttleMetadata=e,this.intervalMillis=i}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,i){this.throttleMetadata[e]=i}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const cn=new Da;function Oa(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function za(t){const{appId:e,apiKey:i}=t,n={method:"GET",headers:Oa(i)},r=wa.replace("{app-id}",e),s=await fetch(r,n);if(s.status!==200&&s.status!==304){let a="";try{const c=await s.json();c.error?.message&&(a=c.error.message)}catch{}throw S.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function Na(t,e=cn,i){const{appId:n,apiKey:r,measurementId:s}=t.options;if(!n)throw S.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:n};throw S.create("no-api-key")}const a=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Ua;return setTimeout(async()=>{c.abort()},ba),ln({appId:n,apiKey:r,measurementId:s},a,c,e)}async function ln(t,{throttleEndTimeMillis:e,backoffCount:i},n,r=cn){const{appId:s,measurementId:a}=t;try{await Ma(n,e)}catch(c){if(a)return I.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:s,measurementId:a};throw c}try{const c=await za(t);return r.deleteThrottleMetadata(s),c}catch(c){const l=c;if(!$a(l)){if(r.deleteThrottleMetadata(s),a)return I.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:s,measurementId:a};throw c}const d=Number(l?.customData?.httpStatus)===503?Bt(i,r.intervalMillis,Ra):Bt(i,r.intervalMillis),g={throttleEndTimeMillis:Date.now()+d,backoffCount:i+1};return r.setThrottleMetadata(s,g),I.debug(`Calling attemptFetch again in ${d} millis`),ln(t,g,n,r)}}function Ma(t,e){return new Promise((i,n)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(i,r);t.addEventListener(()=>{clearTimeout(s),n(S.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function $a(t){if(!(t instanceof N)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ua{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qa(t,e,i,n,r){if(r&&r.global){t("event",i,n);return}else{const s=await e,a={...n,send_to:s};t("event",i,a)}}async function Ba(t,e,i,n){if(n&&n.global){const r={};for(const s of Object.keys(i))r[`user_properties.${s}`]=i[s];return t("set",r),Promise.resolve()}else{const r=await e;t("config",r,{update:!0,user_properties:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(){if(Di())try{await Oi()}catch(t){return I.warn(S.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return I.warn(S.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ja(t,e,i,n,r,s,a){const c=Na(t);c.then(h=>{i[h.measurementId]=h.appId,t.options.measurementId&&h.measurementId!==t.options.measurementId&&I.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>I.error(h)),e.push(c);const l=Fa().then(h=>{if(h)return n.getId()}),[d,g]=await Promise.all([c,l]);Ca(s)||_a(s,d.measurementId),r("js",new Date);const u=a?.config??{};return u[ya]="firebase",u.update=!0,g!=null&&(u[va]=g),r("config",d.measurementId,u),d.measurementId}/**
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
 */class Wa{constructor(e){this.app=e}_delete(){return delete de[this.app.options.appId],Promise.resolve()}}let de={},Qt=[];const Zt={};let at="dataLayer",Ha="gtag",ei,Ct,ti=!1;function Va(){const t=[];if(Li()&&t.push("This is a browser extension environment."),dr()||t.push("Cookies are not available."),t.length>0){const e=t.map((n,r)=>`(${r+1}) ${n}`).join(" "),i=S.create("invalid-analytics-context",{errorInfo:e});I.warn(i.message)}}function Ga(t,e,i){Va();const n=t.options.appId;if(!n)throw S.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)I.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw S.create("no-api-key");if(de[n]!=null)throw S.create("already-exists",{id:n});if(!ti){Ea(at);const{wrappedGtag:s,gtagCore:a}=Aa(de,Qt,Zt,at,Ha);Ct=s,ei=a,ti=!0}return de[n]=ja(t,Qt,Zt,e,ei,at,i),new Wa(t)}function Ka(t=Ui()){t=P(t);const e=ge(t,Ue);return e.isInitialized()?e.getImmediate():Ya(t)}function Ya(t,e={}){const i=ge(t,Ue);if(i.isInitialized()){const r=i.getImmediate();if(ie(e,i.getOptions()))return r;throw S.create("already-initialized")}return i.initialize({options:e})}function Xa(t,e,i){t=P(t),Ba(Ct,de[t.app.options.appId],e,i).catch(n=>I.error(n))}function Ja(t,e,i,n){t=P(t),qa(Ct,de[t.app.options.appId],e,i,n).catch(r=>I.error(r))}const ii="@firebase/analytics",ni="0.10.22";function Qa(){B(new z(Ue,(e,{options:i})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Ga(n,r,i)},"PUBLIC")),B(new z("analytics-internal",t,"PRIVATE")),L(ii,ni),L(ii,ni,"esm2020");function t(e){try{const i=e.getProvider(Ue).getImmediate();return{logEvent:(n,r,s)=>Ja(i,n,r,s),setUserProperties:(n,r)=>Xa(i,n,r)}}catch(i){throw S.create("interop-component-reg-failed",{reason:i})}}}Qa();function dn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Za=dn,un=new oe("auth","Firebase",dn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new It("@firebase/auth");function eo(t,...e){qe.logLevel<=m.WARN&&qe.warn(`Auth (${_e}): ${t}`,...e)}function De(t,...e){qe.logLevel<=m.ERROR&&qe.error(`Auth (${_e}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,...e){throw Rt(t,...e)}function D(t,...e){return Rt(t,...e)}function pn(t,e,i){const n={...Za(),[e]:i};return new oe("auth","Firebase",n).create(e,{appName:t.name})}function U(t){return pn(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rt(t,...e){if(typeof t!="string"){const i=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(i,...n)}return un.create(t,...e)}function f(t,e,...i){if(!t)throw Rt(e,...i)}function M(t){const e="INTERNAL ASSERTION FAILED: "+t;throw De(e),new Error(e)}function F(t,e){t||M(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof self<"u"&&self.location?.href||""}function to(){return ri()==="http:"||ri()==="https:"}function ri(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(to()||Li()||"connection"in navigator)?navigator.onLine:!0}function no(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,i){this.shortDelay=e,this.longDelay=i,F(i>e,"Short delay should be less than long delay!"),this.isMobile=ar()||cr()}get(){return io()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){F(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{static initialize(e,i,n){this.fetchImpl=e,i&&(this.headersImpl=i),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;M("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;M("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;M("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ao=new Ee(3e4,6e4);function Q(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function j(t,e,i,n,r={}){return fn(t,r,async()=>{let s={},a={};n&&(e==="GET"?a=n:s={body:JSON.stringify(n)});const c=Ie({...a,key:t.config.apiKey}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:l,...s};return or()||(d.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&kt(t.emulatorConfig.host)&&(d.credentials="include"),hn.fetch()(await gn(t,t.config.apiHost,i,c),d)})}async function fn(t,e,i){t._canInitEmulator=!1;const n={...ro,...e};try{const r=new co(t),s=await Promise.race([i(),r.promise]);r.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ae(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ae(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Ae(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Ae(t,"user-disabled",a);const g=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw pn(t,g,d);R(t,g)}}catch(r){if(r instanceof N)throw r;R(t,"network-request-failed",{message:String(r)})}}async function Te(t,e,i,n,r={}){const s=await j(t,e,i,n,r);return"mfaPendingCredential"in s&&R(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function gn(t,e,i,n){const r=`${e}${i}?${n}`,s=t,a=s.config.emulator?Lt(t.config,r):`${t.config.apiScheme}://${r}`;return so.includes(i)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function oo(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class co{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,n)=>{this.timer=setTimeout(()=>n(D(this.auth,"network-request-failed")),ao.get())})}}function Ae(t,e,i){const n={appName:t.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const r=D(t,e,n);return r.customData._tokenResponse=i,r}function si(t){return t!==void 0&&t.enterprise!==void 0}class lo{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return oo(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function uo(t,e){return j(t,"GET","/v2/recaptchaConfig",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t,e){return j(t,"POST","/v1/accounts:delete",e)}async function Be(t,e){return j(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ho(t,e=!1){const i=P(t),n=await i.getIdToken(e),r=Dt(n);f(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,a=s?.sign_in_provider;return{claims:r,token:n,authTime:be(ot(r.auth_time)),issuedAtTime:be(ot(r.iat)),expirationTime:be(ot(r.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function ot(t){return Number(t)*1e3}function Dt(t){const[e,i,n]=t.split(".");if(e===void 0||i===void 0||n===void 0)return De("JWT malformed, contained fewer than 3 sections"),null;try{const r=Pi(i);return r?JSON.parse(r):(De("Failed to decode base64 JWT payload"),null)}catch(r){return De("Caught error parsing JWT payload as JSON",r?.toString()),null}}function ai(t){const e=Dt(t);return f(e,"internal-error"),f(typeof e.exp<"u","internal-error"),f(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fe(t,e,i=!1){if(i)return e;try{return await e}catch(n){throw n instanceof N&&fo(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function fo({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=be(this.lastLoginAt),this.creationTime=be(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fe(t){const e=t.auth,i=await t.getIdToken(),n=await fe(t,Be(e,{idToken:i}));f(n?.users.length,e,"internal-error");const r=n.users[0];t._notifyReloadListener(r);const s=r.providerUserInfo?.length?mn(r.providerUserInfo):[],a=vo(t.providerData,s),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!a?.length,d=c?l:!1,g={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new yt(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,g)}async function mo(t){const e=P(t);await Fe(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vo(t,e){return[...t.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function mn(t){return t.map(({providerId:e,...i})=>({providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t,e){const i=await fn(t,{},async()=>{const n=Ie({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,a=await gn(t,r,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:n};return t.emulatorConfig&&kt(t.emulatorConfig.host)&&(l.credentials="include"),hn.fetch()(a,l)});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function bo(t,e){return j(t,"POST","/v2/accounts:revokeToken",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){f(e.idToken,"internal-error"),f(typeof e.idToken<"u","internal-error"),f(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ai(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){f(e.length!==0,"internal-error");const i=ai(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(f(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:n,refreshToken:r,expiresIn:s}=await yo(e,i);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,i,n){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,i){const{refreshToken:n,accessToken:r,expirationTime:s}=i,a=new ue;return n&&(f(typeof n=="string","internal-error",{appName:e}),a.refreshToken=n),r&&(f(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),s&&(f(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ue,this.toJSON())}_performRefresh(){return M("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t,e){f(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class C{constructor({uid:e,auth:i,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new go(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new yt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const i=await fe(this,this.stsTokenManager.getToken(this.auth,e));return f(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return ho(this,e)}reload(){return mo(this)}_assign(e){this!==e&&(f(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>({...i})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new C({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return i.metadata._copy(this.metadata),i}_onReload(e){f(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),i&&await Fe(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(A(this.auth.app))return Promise.reject(U(this.auth));const e=await this.getIdToken();return await fe(this,po(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){const n=i.displayName??void 0,r=i.email??void 0,s=i.phoneNumber??void 0,a=i.photoURL??void 0,c=i.tenantId??void 0,l=i._redirectEventId??void 0,d=i.createdAt??void 0,g=i.lastLoginAt??void 0,{uid:u,emailVerified:h,isAnonymous:y,providerData:w,stsTokenManager:E}=i;f(u&&E,e,"internal-error");const Je=ue.fromJSON(this.name,E);f(typeof u=="string",e,"internal-error"),W(n,e.name),W(r,e.name),f(typeof h=="boolean",e,"internal-error"),f(typeof y=="boolean",e,"internal-error"),W(s,e.name),W(a,e.name),W(c,e.name),W(l,e.name),W(d,e.name),W(g,e.name);const Qe=new C({uid:u,auth:e,email:r,emailVerified:h,displayName:n,isAnonymous:y,photoURL:a,phoneNumber:s,tenantId:c,stsTokenManager:Je,createdAt:d,lastLoginAt:g});return w&&Array.isArray(w)&&(Qe.providerData=w.map(Gn=>({...Gn}))),l&&(Qe._redirectEventId=l),Qe}static async _fromIdTokenResponse(e,i,n=!1){const r=new ue;r.updateFromServerResponse(i);const s=new C({uid:i.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Fe(s),s}static async _fromGetAccountInfoResponse(e,i,n){const r=i.users[0];f(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?mn(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!s?.length,c=new ue;c.updateFromIdToken(n);const l=new C({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new yt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!s?.length};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Map;function $(t){F(t instanceof Function,"Expected a class definition");let e=oi.get(t);return e?(F(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,oi.set(t,e),e)}/**
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
 */class vn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}vn.type="NONE";const ci=vn;/**
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
 */function Oe(t,e,i){return`firebase:${t}:${e}:${i}`}class pe{constructor(e,i,n){this.persistence=e,this.auth=i,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=Oe(this.userKey,r.apiKey,s),this.fullPersistenceKey=Oe("persistence",r.apiKey,s),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await Be(this.auth,{idToken:e}).catch(()=>{});return i?C._fromGetAccountInfoResponse(this.auth,i,e):null}return C._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,n="authUser"){if(!i.length)return new pe($(ci),e,n);const r=(await Promise.all(i.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=r[0]||$(ci);const a=Oe(n,e.config.apiKey,e.name);let c=null;for(const d of i)try{const g=await d._get(a);if(g){let u;if(typeof g=="string"){const h=await Be(e,{idToken:g}).catch(()=>{});if(!h)break;u=await C._fromGetAccountInfoResponse(e,h,g)}else u=C._fromJSON(e,g);d!==s&&(c=u),s=d;break}}catch{}const l=r.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new pe(s,e,n):(s=l[0],c&&await s._set(a,c.toJSON()),await Promise.all(i.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new pe(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(In(e))return"Blackberry";if(_n(e))return"Webos";if(bn(e))return"Safari";if((e.includes("chrome/")||wn(e))&&!e.includes("edge/"))return"Chrome";if(kn(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(i);if(n?.length===2)return n[1]}return"Other"}function yn(t=_()){return/firefox\//i.test(t)}function bn(t=_()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wn(t=_()){return/crios\//i.test(t)}function xn(t=_()){return/iemobile/i.test(t)}function kn(t=_()){return/android/i.test(t)}function In(t=_()){return/blackberry/i.test(t)}function _n(t=_()){return/webos/i.test(t)}function Ot(t=_()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wo(t=_()){return Ot(t)&&!!window.navigator?.standalone}function xo(){return lr()&&document.documentMode===10}function En(t=_()){return Ot(t)||kn(t)||_n(t)||In(t)||/windows phone/i.test(t)||xn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e=[]){let i;switch(t){case"Browser":i=li(_());break;case"Worker":i=`${li(_())}-${t}`;break;default:i=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${_e}/${n}`}/**
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
 */class ko{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const n=s=>new Promise((a,c)=>{try{const l=e(s);a(l)}catch(l){c(l)}});n.onAbort=i,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const n of this.queue)await n(e),n.onAbort&&i.push(n.onAbort)}catch(n){i.reverse();for(const r of i)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
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
 */async function Io(t,e={}){return j(t,"GET","/v2/passwordPolicy",Q(t,e))}/**
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
 */const _o=6;class Eo{constructor(e){const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=i.minPasswordLength??_o,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const i={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,i),this.validatePasswordCharacterOptions(e,i),i.isValid&&(i.isValid=i.meetsMinPasswordLength??!0),i.isValid&&(i.isValid=i.meetsMaxPasswordLength??!0),i.isValid&&(i.isValid=i.containsLowercaseLetter??!0),i.isValid&&(i.isValid=i.containsUppercaseLetter??!0),i.isValid&&(i.isValid=i.containsNumericCharacter??!0),i.isValid&&(i.isValid=i.containsNonAlphanumericCharacter??!0),i}validatePasswordLengthOptions(e,i){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(i.meetsMinPasswordLength=e.length>=n),r&&(i.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(i,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,i,n,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,i,n,r){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new di(this),this.idTokenSubscription=new di(this),this.beforeStateQueue=new ko(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=un,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=$(i)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Be(this,{idToken:e}),n=await C._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(n)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(A(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,a=n?._redirectEventId,c=await this.tryRedirectSignIn(e);(!s||s===a)&&c?.user&&(n=c.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(s){n=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return f(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Fe(e)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=no()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(A(this.app))return Promise.reject(U(this));const i=e?P(e):null;return i&&f(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&f(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return A(this.app)?Promise.reject(U(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return A(this.app)?Promise.reject(U(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Io(this),i=new Eo(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new oe("auth","Firebase",e())}onAuthStateChanged(e,i,n){return this.registerStateListener(this.authStateSubscription,e,i,n)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,n){return this.registerStateListener(this.idTokenSubscription,e,i,n)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(n.tenantId=this.tenantId),await bo(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,i){const n=await this.getOrInitRedirectPersistenceManager(i);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&$(e)||this._popupRedirectResolver;f(i,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[$(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,n,r){if(this._deleted)return()=>{};const s=typeof i=="function"?i:i.next.bind(i);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(f(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof i=="function"){const l=e.addObserver(i,n,r);return()=>{a=!0,l()}}else{const l=e.addObserver(i);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return f(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const i=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();i&&(e["X-Firebase-Client"]=i);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(A(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&eo(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ce(t){return P(t)}class di{constructor(e){this.auth=e,this.observer=null,this.addObserver=gr(i=>this.observer=i)}get next(){return f(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ke={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function So(t){Ke=t}function Sn(t){return Ke.loadJS(t)}function Po(){return Ke.recaptchaEnterpriseScript}function Ao(){return Ke.gapiScript}function Co(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Ro{constructor(){this.enterprise=new Lo}ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}class Lo{ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}const Do="recaptcha-enterprise",Pn="NO_RECAPTCHA",ui="onFirebaseAuthREInstanceReady";class H{constructor(e){this.type=Do,this.auth=ce(e)}async verify(e="verify",i=!1){async function n(s){if(!i){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{uo(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new lo(l);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(l=>{c(l)})})}function r(s,a,c){const l=window.grecaptcha;si(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(Pn)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ro().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{n(this.auth).then(async c=>{if(!i&&si(window.grecaptcha)&&H.scriptInjectionDeferred)await H.scriptInjectionDeferred.promise,r(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Po();l.length!==0&&(l+=c+`&onload=${ui}`),H.scriptInjectionDeferred=new Ri,window[ui]=()=>{H.scriptInjectionDeferred?.resolve()},Sn(l).then(()=>H.scriptInjectionDeferred?.promise).then(()=>{r(c,s,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}H.scriptInjectionDeferred=null;async function pi(t,e,i,n=!1,r=!1){const s=new H(t);let a;if(r)a=Pn;else try{a=await s.verify(i)}catch{a=await s.verify(i,!0)}const c={...e};if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function bt(t,e,i,n,r){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await pi(t,e,i,i==="getOobCode");return n(t,s)}else return n(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await pi(t,e,i,i==="getOobCode");return n(t,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t,e){const i=ge(t,"auth");if(i.isInitialized()){const r=i.getImmediate(),s=i.getOptions();if(ie(s,e??{}))return r;R(r,"already-initialized")}return i.initialize({options:e})}function zo(t,e){const i=e?.persistence||[],n=(Array.isArray(i)?i:[i]).map($);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e?.popupRedirectResolver)}function No(t,e,i){const n=ce(t);f(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,s=An(e),{host:a,port:c}=Mo(e),l=c===null?"":`:${c}`,d={url:`${s}//${a}${l}/`},g=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){f(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),f(ie(d,n.config.emulator)&&ie(g,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=d,n.emulatorConfig=g,n.settings.appVerificationDisabledForTesting=!0,kt(a)?kr(`${s}//${a}${l}`):$o()}function An(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Mo(t){const e=An(t),i=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!i)return{host:"",port:null};const n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const s=r[1];return{host:s,port:hi(n.substr(s.length+1))}}else{const[s,a]=n.split(":");return{host:s,port:hi(a)}}}function hi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $o(){function t(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return M("not implemented")}_getIdTokenResponse(e){return M("not implemented")}_linkToIdToken(e,i){return M("not implemented")}_getReauthenticationResolver(e){return M("not implemented")}}async function Uo(t,e){return j(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t,e){return Te(t,"POST","/v1/accounts:signInWithPassword",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t,e){return Te(t,"POST","/v1/accounts:signInWithEmailLink",Q(t,e))}async function Fo(t,e){return Te(t,"POST","/v1/accounts:signInWithEmailLink",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends zt{constructor(e,i,n,r=null){super("password",n),this._email=e,this._password=i,this._tenantId=r}static _fromEmailAndPassword(e,i){return new ke(e,i,"password")}static _fromEmailAndCode(e,i,n=null){return new ke(e,i,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i?.email&&i?.password){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bt(e,i,"signInWithPassword",qo);case"emailLink":return Bo(e,{email:this._email,oobCode:this._password});default:R(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":const n={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bt(e,n,"signUpPassword",Uo);case"emailLink":return Fo(e,{idToken:i,email:this._email,oobCode:this._password});default:R(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(t,e){return Te(t,"POST","/v1/accounts:signInWithIdp",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="http://localhost";class se extends zt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new se(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):R("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...s}=i;if(!n||!r)return null;const a=new se(n,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const i=this.buildRequest();return he(e,i)}_linkToIdToken(e,i){const n=this.buildRequest();return n.idToken=i,he(e,n)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,he(e,i)}buildRequest(){const e={requestUri:jo,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Ie(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ho(t){const e=ve(ye(t)).link,i=e?ve(ye(e)).deep_link_id:null,n=ve(ye(t)).deep_link_id;return(n?ve(ye(n)).link:null)||n||i||e||t}class Nt{constructor(e){const i=ve(ye(e)),n=i.apiKey??null,r=i.oobCode??null,s=Wo(i.mode??null);f(n&&r&&s,"argument-error"),this.apiKey=n,this.operation=s,this.code=r,this.continueUrl=i.continueUrl??null,this.languageCode=i.lang??null,this.tenantId=i.tenantId??null}static parseLink(e){const i=Ho(e);try{return new Nt(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(){this.providerId=me.PROVIDER_ID}static credential(e,i){return ke._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const n=Nt.parseLink(i);return f(n,"argument-error"),ke._fromEmailAndCode(e,n.code,n.tenantId)}}me.PROVIDER_ID="password";me.EMAIL_PASSWORD_SIGN_IN_METHOD="password";me.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Se extends Cn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends Se{constructor(){super("facebook.com")}static credential(e){return se._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return V.credential(e.oauthAccessToken)}catch{return null}}}V.FACEBOOK_SIGN_IN_METHOD="facebook.com";V.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G extends Se{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return se._fromParams({providerId:G.PROVIDER_ID,signInMethod:G.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return G.credentialFromTaggedObject(e)}static credentialFromError(e){return G.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:n}=e;if(!i&&!n)return null;try{return G.credential(i,n)}catch{return null}}}G.GOOGLE_SIGN_IN_METHOD="google.com";G.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K extends Se{constructor(){super("github.com")}static credential(e){return se._fromParams({providerId:K.PROVIDER_ID,signInMethod:K.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return K.credentialFromTaggedObject(e)}static credentialFromError(e){return K.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return K.credential(e.oauthAccessToken)}catch{return null}}}K.GITHUB_SIGN_IN_METHOD="github.com";K.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y extends Se{constructor(){super("twitter.com")}static credential(e,i){return se._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Y.credentialFromTaggedObject(e)}static credentialFromError(e){return Y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:n}=e;if(!i||!n)return null;try{return Y.credential(i,n)}catch{return null}}}Y.TWITTER_SIGN_IN_METHOD="twitter.com";Y.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t,e){return Te(t,"POST","/v1/accounts:signUp",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,n,r=!1){const s=await C._fromIdTokenResponse(e,n,r),a=fi(n);return new ae({user:s,providerId:a,_tokenResponse:n,operationType:i})}static async _forOperation(e,i,n){await e._updateTokensIfNecessary(n,!0);const r=fi(n);return new ae({user:e,providerId:r,_tokenResponse:n,operationType:i})}}function fi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends N{constructor(e,i,n,r){super(i.code,i.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,je.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:i.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,i,n,r){return new je(e,i,n,r)}}function Rn(t,e,i,n){return(e==="reauthenticate"?i._getReauthenticationResolver(t):i._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?je._fromErrorAndOperation(t,s,e,n):s})}async function Go(t,e,i=!1){const n=await fe(t,e._linkToIdToken(t.auth,await t.getIdToken()),i);return ae._forOperation(t,"link",n)}/**
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
 */async function Ko(t,e,i=!1){const{auth:n}=t;if(A(n.app))return Promise.reject(U(n));const r="reauthenticate";try{const s=await fe(t,Rn(n,r,e,t),i);f(s.idToken,n,"internal-error");const a=Dt(s.idToken);f(a,n,"internal-error");const{sub:c}=a;return f(t.uid===c,n,"user-mismatch"),ae._forOperation(t,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&R(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e,i=!1){if(A(t.app))return Promise.reject(U(t));const n="signIn",r=await Rn(t,n,e),s=await ae._fromIdTokenResponse(t,n,r);return i||await t._updateCurrentUser(s.user),s}async function Yo(t,e){return Ln(ce(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(t){const e=ce(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Xo(t,e,i){if(A(t.app))return Promise.reject(U(t));const n=ce(t),a=await bt(n,{returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vo).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Dn(t),l}),c=await ae._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(c.user),c}function Jo(t,e,i){return A(t.app)?Promise.reject(U(t)):Yo(P(t),me.credential(e,i)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Dn(t),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qo(t,e){return j(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t,{displayName:e,photoURL:i}){if(e===void 0&&i===void 0)return;const n=P(t),s={idToken:await n.getIdToken(),displayName:e,photoUrl:i,returnSecureToken:!0},a=await fe(n,Qo(n.auth,s));n.displayName=a.displayName||null,n.photoURL=a.photoUrl||null;const c=n.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=n.displayName,c.photoURL=n.photoURL),await n._updateTokensIfNecessary(a)}function ec(t,e,i,n){return P(t).onIdTokenChanged(e,i,n)}function tc(t,e,i){return P(t).beforeAuthStateChanged(e,i)}function ic(t){return P(t).signOut()}const We="__sak";/**
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
 */class On{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(We,"1"),this.storage.removeItem(We),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=1e3,rc=10;class zn extends On{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=En(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const n=this.storage.getItem(i),r=this.localCache[i];n!==r&&e(i,r,n)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const n=e.key;i?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(n);!i&&this.localCache[n]===a||this.notifyListeners(n,a)},s=this.storage.getItem(n);xo()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,rc):r()}notifyListeners(e,i){this.localCache[e]=i;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:n}),!0)})},nc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}zn.type="LOCAL";const sc=zn;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends On{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}Nn.type="SESSION";const Mn=Nn;/**
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
 */function ac(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Ye{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(r=>r.isListeningto(e));if(i)return i;const n=new Ye(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:n,eventType:r,data:s}=i.data,a=this.handlersMap[r];if(!a?.size)return;i.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const c=Array.from(a).map(async d=>d(i.origin,s)),l=await ac(c);i.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:l})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ye.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t="",e=10){let i="";for(let n=0;n<e;n++)i+=Math.floor(Math.random()*10);return t+i}/**
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
 */class oc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((c,l)=>{const d=Mt("",20);r.port1.start();const g=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:r,onMessage(u){const h=u;if(h.data.eventId===d)switch(h.data.status){case"ack":clearTimeout(g),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(h.data.response);break;default:clearTimeout(g),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:i},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return window}function cc(t){O().location.href=t}/**
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
 */function $n(){return typeof O().WorkerGlobalScope<"u"&&typeof O().importScripts=="function"}async function lc(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dc(){return navigator?.serviceWorker?.controller||null}function uc(){return $n()?self:null}/**
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
 */const Un="firebaseLocalStorageDb",pc=1,He="firebaseLocalStorage",qn="fbase_key";class Pe{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Xe(t,e){return t.transaction([He],e?"readwrite":"readonly").objectStore(He)}function hc(){const t=indexedDB.deleteDatabase(Un);return new Pe(t).toPromise()}function Bn(){const t=indexedDB.open(Un,pc);return new Promise((e,i)=>{t.addEventListener("error",()=>{i(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(He,{keyPath:qn})}catch(r){i(r)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(He)?e(n):(n.close(),await hc(),e(await Bn()))})})}async function gi(t,e,i){const n=Xe(t,!0).put({[qn]:e,value:i});return new Pe(n).toPromise()}async function fc(t,e){const i=Xe(t,!1).get(e),n=await new Pe(i).toPromise();return n===void 0?null:n.value}function mi(t,e){const i=Xe(t,!0).delete(e);return new Pe(i).toPromise()}const gc=800,mc=3;class Fn{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Bn(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let i=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(i++>mc)throw n;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return $n()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ye._getInstance(uc()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await lc(),!this.activeServiceWorker)return;this.sender=new oc(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await gi(e,We,"1"),await mi(e,We)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(n=>gi(n,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(n=>fc(n,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>mi(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Xe(r,!1).getAll();return new Pe(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),i.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),i.push(r));return i}notifyListeners(e,i){this.localCache[e]=i;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fn.type="LOCAL";const vc=Fn;new Ee(3e4,6e4);/**
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
 */function yc(t,e){return e?$(e):(f(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $t extends zt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return he(e,this._buildIdpRequest())}_linkToIdToken(e,i){return he(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return he(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function bc(t){return Ln(t.auth,new $t(t),t.bypassAuthState)}function wc(t){const{auth:e,user:i}=t;return f(i,e,"internal-error"),Ko(i,new $t(t),t.bypassAuthState)}async function xc(t){const{auth:e,user:i}=t;return f(i,e,"internal-error"),Go(i,new $t(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,i,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:n,postBody:r,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:i,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bc;case"linkViaPopup":case"linkViaRedirect":return xc;case"reauthViaPopup":case"reauthViaRedirect":return wc;default:R(this.auth,"internal-error")}}resolve(e){F(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){F(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=new Ee(2e3,1e4);class le extends jn{constructor(e,i,n,r,s){super(e,i,r,s),this.provider=n,this.authWindow=null,this.pollId=null,le.currentPopupAction&&le.currentPopupAction.cancel(),le.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return f(e,this.auth,"internal-error"),e}async onExecution(){F(this.filter.length===1,"Popup operations only handle one event");const e=Mt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(D(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(D(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,le.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(D(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kc.get())};e()}}le.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="pendingRedirect",ze=new Map;class _c extends jn{constructor(e,i,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,n),this.eventId=null}async execute(){let e=ze.get(this.auth._key());if(!e){try{const n=await Ec(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(i){e=()=>Promise.reject(i)}ze.set(this.auth._key(),e)}return this.bypassAuthState||ze.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ec(t,e){const i=Pc(e),n=Sc(t);if(!await n._isAvailable())return!1;const r=await n._get(i)==="true";return await n._remove(i),r}function Tc(t,e){ze.set(t._key(),e)}function Sc(t){return $(t._redirectPersistence)}function Pc(t){return Oe(Ic,t.config.apiKey,t.name)}async function Ac(t,e,i=!1){if(A(t.app))return Promise.reject(U(t));const n=ce(t),r=yc(n,e),a=await new _c(n,r,i).execute();return a&&!i&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=10*60*1e3;class Rc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(i=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lc(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){if(e.error&&!Wn(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";i.onError(D(this.auth,n))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const n=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cc&&this.cachedEventUids.clear(),this.cachedEventUids.has(vi(e))}saveEventToCache(e){this.cachedEventUids.add(vi(e)),this.lastProcessedEventTime=Date.now()}}function vi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Wn({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Lc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wn(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(t,e={}){return j(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zc=/^https?/;async function Nc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Dc(t);for(const i of e)try{if(Mc(i))return}catch{}R(t,"unauthorized-domain")}function Mc(t){const e=vt(),{protocol:i,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&n===""?i==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&a.hostname===n}if(!zc.test(i))return!1;if(Oc.test(t))return n===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
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
 */const $c=new Ee(3e4,6e4);function yi(){const t=O().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let i=0;i<t.CP.length;i++)t.CP[i]=null}}function Uc(t){return new Promise((e,i)=>{function n(){yi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yi(),i(D(t,"network-request-failed"))},timeout:$c.get()})}if(O().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(O().gapi?.load)n();else{const r=Co("iframefcb");return O()[r]=()=>{gapi.load?n():i(D(t,"network-request-failed"))},Sn(`${Ao()}?onload=${r}`).catch(s=>i(s))}}).catch(e=>{throw Ne=null,e})}let Ne=null;function qc(t){return Ne=Ne||Uc(t),Ne}/**
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
 */const Bc=new Ee(5e3,15e3),Fc="__/auth/iframe",jc="emulator/auth/iframe",Wc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vc(t){const e=t.config;f(e.authDomain,t,"auth-domain-config-required");const i=e.emulator?Lt(e,jc):`https://${t.config.authDomain}/${Fc}`,n={apiKey:e.apiKey,appName:t.name,v:_e},r=Hc.get(t.config.apiHost);r&&(n.eid=r);const s=t._getFrameworks();return s.length&&(n.fw=s.join(",")),`${i}?${Ie(n).slice(1)}`}async function Gc(t){const e=await qc(t),i=O().gapi;return f(i,t,"internal-error"),e.open({where:document.body,url:Vc(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wc,dontclear:!0},n=>new Promise(async(r,s)=>{await n.restyle({setHideOnLeave:!1});const a=D(t,"network-request-failed"),c=O().setTimeout(()=>{s(a)},Bc.get());function l(){O().clearTimeout(c),r(n)}n.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const Kc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yc=500,Xc=600,Jc="_blank",Qc="http://localhost";class bi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zc(t,e,i,n=Yc,r=Xc){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l={...Kc,width:n.toString(),height:r.toString(),top:s,left:a},d=_().toLowerCase();i&&(c=wn(d)?Jc:i),yn(d)&&(e=e||Qc,l.scrollbars="yes");const g=Object.entries(l).reduce((h,[y,w])=>`${h}${y}=${w},`,"");if(wo(d)&&c!=="_self")return el(e||"",c),new bi(null);const u=window.open(e||"",c,g);f(u,t,"popup-blocked");try{u.focus()}catch{}return new bi(u)}function el(t,e){const i=document.createElement("a");i.href=t,i.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}/**
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
 */const tl="__/auth/handler",il="emulator/auth/handler",nl=encodeURIComponent("fac");async function wi(t,e,i,n,r,s){f(t.config.authDomain,t,"auth-domain-config-required"),f(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:i,redirectUrl:n,v:_e,eventId:r};if(e instanceof Cn){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",fr(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,u]of Object.entries({}))a[g]=u}if(e instanceof Se){const g=e.getScopes().filter(u=>u!=="");g.length>0&&(a.scopes=g.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const l=await t._getAppCheckToken(),d=l?`#${nl}=${encodeURIComponent(l)}`:"";return`${rl(t)}?${Ie(c).slice(1)}${d}`}function rl({config:t}){return t.emulator?Lt(t,il):`https://${t.authDomain}/${tl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="webStorageSupport";class sl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mn,this._completeRedirectFn=Ac,this._overrideRedirectResult=Tc}async _openPopup(e,i,n,r){F(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await wi(e,i,n,vt(),r);return Zc(e,s,Mt())}async _openRedirect(e,i,n,r){await this._originValidation(e);const s=await wi(e,i,n,vt(),r);return cc(s),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:r,promise:s}=this.eventManagers[i];return r?Promise.resolve(r):(F(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[i]={promise:n},n.catch(()=>{delete this.eventManagers[i]}),n}async initAndGetManager(e){const i=await Gc(e),n=new Rc(e);return i.register("authEvent",r=>(f(r?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=i,n}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(ct,{type:ct},r=>{const s=r?.[0]?.[ct];s!==void 0&&i(!!s),R(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=Nc(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return En()||bn()||Ot()}}const al=sl;var xi="@firebase/auth",ki="1.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){f(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ll(t){B(new z("auth",(e,{options:i})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=n.options;f(a&&!a.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tn(t)},d=new To(n,r,s,l);return zo(d,i),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,n)=>{e.getProvider("auth-internal").initialize()})),B(new z("auth-internal",e=>{const i=ce(e.getProvider("auth").getImmediate());return(n=>new ol(n))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),L(xi,ki,cl(t)),L(xi,ki,"esm2020")}/**
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
 */const dl=5*60,ul=Ci("authIdTokenMaxAge")||dl;let Ii=null;const pl=t=>async e=>{const i=e&&await e.getIdTokenResult(),n=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(n&&n>ul)return;const r=i?.token;Ii!==r&&(Ii=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function hl(t=Ui()){const e=ge(t,"auth");if(e.isInitialized())return e.getImmediate();const i=Oo(t,{popupRedirectResolver:al,persistence:[vc,sc,Mn]}),n=Ci("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const a=pl(s.toString());tc(i,a,()=>a(i.currentUser)),ec(i,c=>a(c))}}const r=sr("auth");return r&&No(i,`http://${r}`),i}function fl(){return document.getElementsByTagName("head")?.[0]??document}So({loadJS(t){return new Promise((e,i)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=r=>{const s=D("internal-error");s.customData=r,i(s)},n.type="text/javascript",n.charset="UTF-8",fl().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ll("Browser");const gl={apiKey:"AIzaSyABnvYQl4QzP1lHF4Ei_AzrDPYlMKoTXpA",authDomain:"yathralanka-2ac43.firebaseapp.com",projectId:"yathralanka-2ac43",storageBucket:"yathralanka-2ac43.firebasestorage.app",measurementId:"G-KXWXP8TGMS",appId:"1:1032179534120:web:21d200d59018319f7ca81d",messagingSenderId:"1032179534120"},Hn=$i(gl);Ka(Hn);const te=hl(Hn);let o={currentScreen:"splash",user:{...Le},activeSite:null,dwellTimer:null,dwellTimeLeft:900,dwellActive:!1,cooldownTimer:null,cooldownTimeLeft:300,cooldownActive:!1,cameraAttempt:1,currentQuizIndex:0,quizCorrectAnswers:0,quizAnswers:[],petitionSignatures:8742,petitionSigned:!1,donationAmount:0,navStack:[]};document.addEventListener("DOMContentLoaded",()=>{p("splash")});function p(t,e=!0){e&&o.currentScreen!==t&&o.navStack.push(o.currentScreen),o.currentScreen=t,T()}function b(){if(o.navStack.length>0){const t=o.navStack.pop();o.currentScreen=t,T()}else p("dashboard")}function k(t,e=""){o.user.xp+=t;let i="None";Kn.forEach(n=>{o.user.xp>=n.threshold&&(i=n.rank)}),o.user.rank!==i&&(o.user.rank=i,x(`New Rank Unlocked: ${i}!`)),e&&x(`${e} (+${t} XP)`)}function x(t){const e=document.createElement("div");e.style.cssText=`
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
  `,e.textContent=t,document.querySelector(".iphone-chassis").appendChild(e),setTimeout(()=>{e.style.animation="screenFadeIn 0.3s ease-in reverse forwards",setTimeout(()=>e.remove(),300)},2500)}function T(){const t=document.getElementById("app-container");if(!t)return;let e="";switch(o.currentScreen){case"splash":e=ml();break;case"login":e=vl();break;case"signup":e=yl();break;case"permissions":e=bl();break;case"choose-role":e=wl();break;case"calibrate-compass":e=xl();break;case"how-scoring-works":e=kl();break;case"dashboard":e=Il();break;case"directory":e=_l();break;case"heritage-trail":e=_i("Heritage Trail");break;case"hidden-gems":e=_i("Hidden Gems");break;case"map":e=El();break;case"site-detail":e=Tl();break;case"dwell-time":e=Sl();break;case"camera":e=Pl();break;case"camera-success":e=Al();break;case"camera-reject":e=Cl();break;case"guidelines":e=Rl();break;case"offline-sync":e=Ll();break;case"quiz":e=Dl();break;case"quiz-cooldown":e=Ol();break;case"quests":e=zl();break;case"quest-social":e=Nl();break;case"quest-food":e=Ml();break;case"quest-wandering":e=$l();break;case"quest-wildlife":e=Ul();break;case"quest-warrior":e=ql();break;case"activism":e=Bl();break;case"petition":e=Fl();break;case"donations":e=jl();break;case"cleanup":e=Wl();break;case"create-event":e=Hl();break;case"rewards":e=Vl();break;case"rewards-list":e=Gl();break;case"coupon-redeem":e=Kl();break;case"rank":e=Yl();break;case"leaderboard":e=Xl();break;case"profile":e=Jl();break;case"travel-poster":e=Ql();break;case"settings":e=Zl();break;default:e="<div>Screen not found</div>"}t.innerHTML=e,ed()}function ml(){return`
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
  `}function vl(){return`
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
  `}function yl(){return`
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
  `}function bl(){const t=o.user.permissions.camera,e=o.user.permissions.notifications,i=t&&e;return`
    <div class="screen">
      <div style="padding: 30px 24px 20px 24px; text-align: center;">
        <h2 style="font-size: 26px; font-weight: 900; line-height: 1.2; margin-bottom: 8px;">We need a few permissions</h2>
        <p style="font-size: 13px; color: var(--color-gray);">These help us make your experience safe and seamless.</p>
      </div>
      
      <!-- Camera Card -->
      <div class="selection-card ${t?"selected":""}" style="margin: 10px 16px; padding: 14px;" id="perm-camera-btn">
        <div class="permission-icon-box">
          <img src="icons/camera.png" alt="Camera">
        </div>
        <div style="flex: 1;">
          <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">Camera</h3>
          <p style="font-size: 11px; color: var(--color-gray);">Used to scan, capture and verify your visits</p>
        </div>
        <div class="check-circle ${t?"checked":""}">
          ${t?"✓":""}
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
        <button class="btn-primary" style="opacity: ${i?"1":"0.5"}; cursor: ${i?"pointer":"not-allowed"};" id="perm-continue" ${i?"":"disabled"}>Continue</button>
      </div>
      
      <div class="permission-footer-box">
        We value your privacy.<br>Location access is only requested momentarily when you verify a site visit.
      </div>
    </div>
  `}function wl(){const t=o.user.role;return`
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
        ${[{key:"Explorer",title:"Explorer",desc:"Visit places, learn & earn"},{key:"Volunteer",title:"Volunteer",desc:"Join cleanups & activities"},{key:"Organizer",title:"Organizer",desc:"Organize events & petitions"},{key:"Quiz Master",title:"Quiz Master",desc:"Do quizzes & earn points"}].map(i=>`
          <div class="selection-card ${t===i.key?"selected":""}" style="color: var(--color-charcoal); padding: 14px;" data-role="${i.key}">
            <div style="flex: 1;">
              <h3 class="selection-card-title">${i.title}</h3>
              <p class="selection-card-desc">${i.desc}</p>
            </div>
          </div>
        `).join("")}
      </div>
      
      <div style="padding: 20px; margin-top: auto;">
        <button class="btn-primary" style="opacity: ${t?"1":"0.5"};" id="role-continue" ${t?"":"disabled"}>Continue</button>
      </div>
    </div>
  `}function xl(){const t=o.user.interests;return`
    <div class="screen">
      <div style="padding: 30px 24px 10px 24px; text-align: center;">
        <h2 style="font-size: 26px; font-weight: 900; line-height: 1.2; margin-bottom: 6px;">Calibrate Your Compass</h2>
        <p style="font-size: 13px; color: var(--color-gray);">Select your primary interests to personalize your adventure.</p>
      </div>
      
      <div class="grid-2x2">
        ${[{key:"Nature & Outdoors",title:"Nature & Outdoors",desc:"Mountains, Waterfalls, Hikes",icon:"icons/Nature & Outdoors.png"},{key:"Heritage & History",title:"Heritage & History",desc:"Ancient ruins, Temples, Forts",icon:"icons/Heritage & History.png"},{key:"Beaches & Coastal",title:"Beaches & Coastal",desc:"Surfing, Relaxation, Marine",icon:"icons/Beaches & Coastal.png"},{key:"Cultural Immersion",title:"Cultural Immersion",desc:"Local foods, Crafts, Festivals",icon:"icons/cultural immersion.png"}].map(i=>`
            <div class="grid-item-card ${t.includes(i.key)?"selected":""}" data-cat="${i.key}">
              <img src="${i.icon}" alt="${i.title}">
              <div class="grid-item-title">${i.title}</div>
              <div class="grid-item-subtitle">${i.desc}</div>
            </div>
          `).join("")}
      </div>
      
      <div style="padding: 20px; margin-top: auto;">
        <button class="btn-primary" style="opacity: ${t.length>0?"1":"0.5"};" id="compass-continue" ${t.length>0?"":"disabled"}>Continue</button>
      </div>
    </div>
  `}function kl(){return`
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
  `}function Il(){return o.user.xp>0&&o.user.rank,`
    <div class="screen">
      <div style="padding: 20px 20px 6px 20px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h2 style="font-size: 26px; font-weight: 900; line-height: 1.1;">Central Dashboard</h2>
          <p style="font-size: 12px; color: var(--color-gray); margin-top: 4px;">Welcome back, ${o.user.role||"Traveller"}!</p>
        </div>
        <div class="badge-tag" style="background: var(--color-gold); color: var(--color-charcoal);">
          🌟 ${o.user.xp} XP
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
      
      ${v("home")}
    </div>
  `}function _l(){return`
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
      
      ${v("home")}
    </div>
  `}function _i(t){return`
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="trail-list-back">←</button>
        <div class="header-title">${t}</div>
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
      
      ${v("home")}
    </div>
  `}function El(){return`
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
      
      ${v("home")}
    </div>
  `}function Tl(){const t=o.activeSite;if(!t)return"";const e=o.user.dwellTimeCompleted[t.id];return`
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar" style="position: absolute; top: 0; left: 0; z-index: 10; width: 100%;">
        <button class="back-button" id="site-back" style="background: rgba(255,255,255,0.8); border-radius: 50%; width:32px; height:32px; justify-content:center; padding:0; color:var(--color-charcoal);">←</button>
      </div>
      
      <img src="${t.image}" alt="${t.name}" class="detail-banner">
      
      <div style="padding: 16px;">
        <h2 style="font-size: 24px; font-weight: 900; margin-bottom: 2px;">${t.name}</h2>
        <p style="font-size: 12px; color: var(--color-gray); font-weight: 700; margin-bottom: 12px;">${t.district}</p>
        
        <p style="font-size: 13px; color: var(--color-charcoal); line-height: 1.5; margin-bottom: 16px;">${t.description}</p>
        
        <div class="site-detail-info-row">
          <div class="info-column">
            <span class="info-column-label">XP Scale</span>
            <span>${t.xpRange}</span>
          </div>
          <div class="info-column" style="border-left: 1.5px solid var(--color-light-gray); border-right: 1.5px solid var(--color-light-gray);">
            <span class="info-column-label">Distance</span>
            <span>${t.distance}</span>
          </div>
          <div class="info-column">
            <span class="info-column-label">Status</span>
            <span style="color: var(--color-green-success);">${t.openStatus}</span>
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
      
      ${v("home")}
    </div>
  `}function Sl(){const t=o.activeSite;if(!t)return"";const e=Math.floor(o.dwellTimeLeft/60),i=o.dwellTimeLeft%60,n=`${e<10?"0"+e:e}:${i<10?"0"+i:i}`,s=565.48-o.dwellTimeLeft/900*565.48,a=o.dwellTimeLeft<=0;return`
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="dwell-back">←</button>
        <div class="header-title">${t.name}</div>
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
          <div class="timer-text-display">${n}</div>
        </div>
        
        <p style="font-size: 13px; font-weight: 700; text-align: center; color: ${a?"var(--color-green-success)":"var(--color-charcoal)"}; margin-bottom: 24px; max-width: 280px; line-height: 1.4;">
          ${a?"Presence verified! You are now eligible to complete trials":"Your device must stay stationary at the site to sync presence coordinates."}
        </p>
        
        <button class="btn-primary" style="margin-bottom: 12px; opacity: ${a?"1":"0.5"};" id="dwell-continue-btn" ${a?"":"disabled"}>
          ${a?"Proceed to Trials":"Waiting..."}
        </button>
      </div>
      
      ${v("home")}
    </div>
  `}function Pl(){return`
    <div class="screen" style="padding-bottom: 0; background: black; color: white;">
      <div class="header-bar" style="position: absolute; top: 0; left: 0; z-index: 100;">
        <button class="back-button" id="camera-back" style="background: rgba(0,0,0,0.5); border-radius: 50%; width:32px; height:32px; justify-content:center;">✕</button>
        <div class="header-title">Frame the monument</div>
      </div>
      
      <div class="camera-viewfinder">
        <!-- Camera Background Picture -->
        <img src="${o.activeSite.image}" alt="Camera Viewfinder" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.85;">
        
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
  `}function Al(){const t=o.activeSite;return`
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
          <img src="${t.image}" alt="Captured">
          <div class="compare-label">Your Photo</div>
        </div>
        <div class="compare-card">
          <img src="${t.referenceImage}" alt="Reference">
          <div class="compare-label">Reference</div>
        </div>
      </div>
      
      <button class="btn-primary" style="margin-top: auto; width: 100%;" id="camera-success-continue">Continue</button>
    </div>
  `}function Cl(){return`
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
  `}function Rl(){return`
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
  `}function Ll(){return`
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
          <p style="font-size: 10px; color: var(--color-gray);">${o.user.rank==="None"?"No Rank":o.user.rank} • ${o.user.xp} pts</p>
        </div>
      </div>
      
      ${v("home")}
    </div>
  `}function Dl(){const t=o.activeSite;if(!t)return"";const e=t.quizzes[o.currentQuizIndex],i=o.currentQuizIndex+1,n=t.quizzes.length;return`
    <div class="screen">
      <div class="header-bar">
        <button class="back-button" id="quiz-back">←</button>
        <div class="header-title">Quiz</div>
      </div>
      
      <div style="padding: 10px 20px;">
        <div class="progress-bar-container">
          <div class="progress-bar-fill" style="width: ${i/n*100}%;"></div>
        </div>
        
        <p style="font-size: 12px; color: var(--color-gray); font-weight: 700; margin-bottom: 12px; text-align: center;">Question ${i} of ${n}</p>
        
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
  `}function Ol(){const t=Math.floor(o.cooldownTimeLeft/60),e=o.cooldownTimeLeft%60,i=`${t<10?"0"+t:t}:${e<10?"0"+e:e}`;return`
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
            <circle class="timer-progress-circle" cx="100" cy="100" r="90" style="stroke-dashoffset: ${565.48-o.cooldownTimeLeft/300*565.48};"></circle>
          </svg>
          <div class="timer-text-display">${i}</div>
        </div>
        
        <h3 style="font-size: 16px; font-weight: 900; color: var(--color-charcoal); margin-bottom: 8px;">All Quizzes are Locked Until 00:00</h3>
        <img src="icons/quiz cooldown lock.png" alt="Lock" class="cooldown-lock-icon">
        
        <p style="font-size: 11px; color: var(--color-gray); line-height: 1.5; max-width: 280px; margin-bottom: 20px;">
          Multiple attempts are paused across the platform to ensure dedicated learning and authentic impact. Please reflect before re-engaging.
        </p>
      </div>
      
      ${v("home")}
    </div>
  `}function zl(){return`
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
        ${Xn.map(t=>`
          <div class="selection-card" style="padding: 12px; align-items: center;" id="quest-item-${t.id}">
            <img src="${t.icon}" alt="${t.name}" style="width: 32px; height: 32px;">
            <div style="flex: 1; margin-left: 10px;">
              <h3 style="font-size: 13px; font-weight: 800;">${t.name}</h3>
              <p style="font-size: 11px; color: var(--color-gray);">${t.description}</p>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 11px; font-weight: 700; color: var(--color-gold); display: block;">⭐ ${t.xp} pts</span>
              <span style="font-size: 9px; color: var(--color-gray);">⏱️ ${t.duration}</span>
            </div>
          </div>
        `).join("")}
      </div>
      
      ${v("home")}
    </div>
  `}function Nl(){return`
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
      
      ${v("home")}
    </div>
  `}function Ml(){return`
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
      
      ${v("home")}
    </div>
  `}function $l(){return`
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
      
      ${v("home")}
    </div>
  `}function Ul(){return`
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
      
      ${v("home")}
    </div>
  `}function ql(){return`
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
      
      ${v("home")}
    </div>
  `}function Bl(){return`
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
      
      ${v("activism")}
    </div>
  `}function Fl(){const t=o.petitionSigned,e=o.petitionSignatures,i=e/1e4*100;return`
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
            <div class="progress-bar-fill" style="width: ${i}%;"></div>
          </div>
          <p style="font-size: 10px; color: var(--color-gray); text-align: center; font-weight: 600;">you earn 3xp for signing</p>
        </div>
        
        <button class="btn-primary" style="background: ${t?"var(--color-green-success)":"var(--color-gold)"}; color: ${t?"white":"var(--color-charcoal)"};" id="petition-submit" ${t?"disabled":""}>
          ${t?"✓ Petition Signed":"Sign Petition"}
        </button>
      </div>
      
      ${v("activism")}
    </div>
  `}function jl(){const t=o.donationAmount;return`
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="donations-back">←</button>
        <div class="header-title">Your donation can restore this stupa</div>
      </div>
      
      <div style="padding: 0 16px;">
        <img src="Element Pictures/Donations Stupa.jpg" alt="Donations" style="width: 100%; height: 160px; border-radius: 16px; object-fit: cover; box-shadow: var(--shadow-premium); margin-bottom: 16px;">
        
        <div class="donation-btn-grid">
          <button class="donation-btn ${t===500?"active":""}" data-val="500">Rs. 500</button>
          <button class="donation-btn ${t===1e3?"active":""}" data-val="1000">Rs. 1000</button>
          <button class="donation-btn ${t===2500?"active":""}" data-val="2500">Rs. 2500</button>
        </div>
        
        <div class="form-card" style="margin: 0 0 12px 0; padding: 12px 16px;">
          <label style="font-size: 11px; font-weight: 700; color: var(--color-gray); text-align: center; display: block; margin-bottom: 6px;">Other amount</label>
          <input type="number" class="form-input" style="text-align: center; font-size: 18px; font-weight: 800;" placeholder="Enter amount" value="${t||""}" id="donation-custom-input">
        </div>
        
        <p style="font-size: 10px; color: var(--color-gray); text-align: center; font-weight: 700; margin-bottom: 20px;">earn upto 15xp</p>
        
        <button class="btn-primary" id="donations-submit">Donate Now</button>
        
        <p style="font-size: 9px; color: var(--color-gray); text-align: center; margin-top: 14px; font-weight: 700;">secure payment powered by Payhere</p>
      </div>
      
      ${v("activism")}
    </div>
  `}function Wl(){const t=o.user.joinedEvents.includes("site-cleanup");return`
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
        
        <button class="btn-primary" style="background: ${t?"var(--color-green-success)":"var(--color-gold)"}; color: ${t?"white":"var(--color-charcoal)"};" id="cleanup-join" ${t?"disabled":""}>
          ${t?"✓ Joined Cleanup":"Join Event"}
        </button>
      </div>
      
      ${v("activism")}
    </div>
  `}function Hl(){return`
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
      
      ${v("activism")}
    </div>
  `}function Vl(){return`
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
      
      ${v("rewards")}
    </div>
  `}function Gl(){return`
    <div class="screen" style="padding-bottom: 80px;">
      <div class="header-bar">
        <button class="back-button" id="rewards-list-back">←</button>
        <div class="header-title">Your Rewards</div>
      </div>
      
      <div style="padding: 10px 20px; display: flex; justify-content: space-between; align-items: center;">
        <p style="font-size: 11px; color: var(--color-gray); max-width: 220px; line-height: 1.4;">Convert your impact into experiences. Redeem coupons and unlock unique souvenirs.</p>
        <span class="badge-tag" style="background: var(--color-gold); color: var(--color-charcoal); font-weight: 800;">${o.user.xp} Total Points</span>
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
        <div class="reward-coupon-card" style="opacity: ${o.user.xp>=100?"1":"0.7"};">
          <img src="Element Pictures/Trail Guide.webp" alt="Guide" class="reward-coupon-img">
          <div style="flex: 1;">
            <h3 style="font-size: 12px; font-weight: 900; line-height: 1.3;">20% off Ancient Trail Guide</h3>
            <p style="font-size: 9px; color: var(--color-gray); margin-top: 2px;">Expert guide for Mihintale walks.</p>
            <span style="font-size: 8px; font-weight: 700; color: var(--color-gray);">Unlock: 100 XP (Tap to unlock)</span>
          </div>
          <button class="btn-outline" style="width: 80px; height: 32px; font-size: 10px; padding: 0; color: var(--color-gray);" id="rew-unlock-guide" ${o.user.xp>=100?"":"disabled"}>Unlock Guide</button>
        </div>
        
        <!-- Card 3: locked Artisan Crafts -->
        <div class="reward-coupon-card" style="opacity: ${o.user.xp>=100?"1":"0.7"};">
          <img src="Element Pictures/Artisan Crafts.jpg.webp" alt="Crafts" class="reward-coupon-img">
          <div style="flex: 1;">
            <h3 style="font-size: 12px; font-weight: 900; line-height: 1.3;">10% off Artisan Crafts</h3>
            <p style="font-size: 9px; color: var(--color-gray); margin-top: 2px;">Authentic local handicraft store.</p>
            <span style="font-size: 8px; font-weight: 700; color: var(--color-gray);">Unlock: 100 XP (Tap to unlock)</span>
          </div>
          <button class="btn-outline" style="width: 80px; height: 32px; font-size: 10px; padding: 0; color: var(--color-gray);" id="rew-unlock-crafts" ${o.user.xp>=100?"":"disabled"}>Unlock Coupon</button>
        </div>
      </div>
      
      ${v("rewards")}
    </div>
  `}function Kl(){return`
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
      
      ${v("rewards")}
    </div>
  `}function Yl(){const t=[{name:"Grass Toucher",range:"0 - 99 pts",threshold:0},{name:"Wanderer",range:"100 - 249 pts",threshold:100},{name:"Tuk Tuk Trailer",range:"250 - 499 pts",threshold:250},{name:"Magahoyanna",range:"500 - 999 pts",threshold:500},{name:"Island Explorer",range:"1,000 - 2,000 pts",threshold:1e3},{name:"Lanka Legend",range:"2,000 - 5,000 pts",threshold:2e3}],e=o.user.xp,i=o.user.rank;let n=t[0];for(let s=0;s<t.length;s++){if(e<t[s].threshold){n=t[s];break}s===t.length-1&&(n={name:"Max Level",threshold:5e3})}const r=n.threshold-e;return`
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
            ${i==="None"?"No Rank":i}
          </div>
        </div>
        
        <p style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">${e} / ${n.threshold} pts</p>
        <p style="font-size: 10px; color: #a9cbd0; margin-bottom: 20px;">
          ${r>0?`Only ${r} pts to next rank!`:"Max rank reached!"}
        </p>
        
        <!-- Rank timeline ckeckboxes -->
        <div style="display: flex; flex-direction: column; gap: 10px; width: 100%; color: var(--color-charcoal);">
          ${t.map(s=>{const a=e>=s.threshold;return`
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
      
      ${v("rewards")}
    </div>
  `}function Xl(){let t=[...Yn];if(o.user.xp>0){const e={name:(te.currentUser&&te.currentUser.displayName||"You")+" (Eco Explorer)",points:o.user.xp,role:o.user.role,rank:o.user.rank,isUser:!0};t.push(e)}return t.sort((e,i)=>i.points-e.points),`
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
        ${t.map((e,i)=>`
          <div class="leaderboard-row ${e.isUser?"highlighted":""}">
            <span class="leaderboard-rank">${i+1}</span>
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
      
      ${v("rewards")}
    </div>
  `}function Jl(){const t=o.user.xp>0?o.user.rank:"No Rank";return`
    <div class="screen">
      <div style="padding: 20px 20px 6px 20px;">
        <h2 style="font-size: 26px; font-weight: 900;">My Profile</h2>
      </div>
      
      <!-- Profile Card -->
      <div class="selection-card" style="margin: 10px 16px; padding: 14px;" id="profile-recap-trigger">
        <img src="icons/profile filled.png" alt="Profile" style="width: 44px; height: 44px; border-radius: 50%; border: 2.5px solid var(--color-teal);">
        <div style="flex: 1; margin-left: 10px;">
          <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 2px;">${te.currentUser&&te.currentUser.displayName||"You"}</h3>
          <p style="font-size: 11px; color: var(--color-gray); font-weight: 700;">${t} • ${o.user.xp} pts</p>
        </div>
      </div>
      
      <!-- Stats grid -->
      <div style="display: flex; gap: 12px; padding: 0 16px; margin: 12px 0 20px 0;">
        <div style="flex:1; background:var(--color-white); border-radius:12px; padding:12px 8px; text-align:center; box-shadow:var(--shadow-premium);">
          <span style="font-size: 18px; font-weight: 900; color: var(--color-charcoal); display:block;">${o.user.medals}</span>
          <span style="font-size: 9px; font-weight: 700; color: var(--color-gray); text-transform:uppercase;">Medals</span>
        </div>
        <div style="flex:1; background:var(--color-white); border-radius:12px; padding:12px 8px; text-align:center; box-shadow:var(--shadow-premium);">
          <span style="font-size: 18px; font-weight: 900; color: var(--color-charcoal); display:block;">${o.user.sitesVisited}</span>
          <span style="font-size: 9px; font-weight: 700; color: var(--color-gray); text-transform:uppercase;">Sites Visited</span>
        </div>
        <div style="flex:1; background:var(--color-white); border-radius:12px; padding:12px 8px; text-align:center; box-shadow:var(--shadow-premium);">
          <span style="font-size: 18px; font-weight: 900; color: var(--color-charcoal); display:block;">${o.user.quizzesPassed}</span>
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
      
      ${v("profile")}
    </div>
  `}function Ql(){return`
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
            <span class="poster-stat-value">${o.user.sitesVisited}</span>
            <span class="poster-stat-label">Sites Verified</span>
          </div>
          
          <div class="poster-stat-block">
            <img src="icons/activism filled.png" alt="Events" class="poster-stat-icon">
            <span class="poster-stat-value">${o.user.joinedEvents.length}</span>
            <span class="poster-stat-label">Conservation Events</span>
          </div>
          
          <div class="poster-stat-block">
            <img src="icons/trophy empty.png" alt="Quizzes" class="poster-stat-icon">
            <span class="poster-stat-value">${o.user.quizzesPassed}</span>
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
  `}function Zl(){return`
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
  `}function v(t){return`
    <div class="bottom-nav">
      <div class="nav-item ${t==="home"?"active":""}" id="nav-home">
        <img src="${t==="home"?"icons/home filled.png":"icons/home empty.png"}" alt="Home" class="nav-icon">
        <span>Home</span>
      </div>
      <div class="nav-item ${t==="activism"?"active":""}" id="nav-act">
        <img src="${t==="activism"?"icons/activism filled.png":"icons/activism empty.png"}" alt="Activism" class="nav-icon">
        <span>Activism</span>
      </div>
      <div class="nav-item ${t==="rewards"?"active":""}" id="nav-rew">
        <img src="${t==="rewards"?"icons/trophy filled.png":"icons/trophy empty.png"}" alt="Rewards" class="nav-icon">
        <span>Rewards</span>
      </div>
      <div class="nav-item ${t==="profile"?"active":""}" id="nav-prof">
        <img src="${t==="profile"?"icons/profile filled.png":"icons/profile empty.png"}" alt="Profile" class="nav-icon">
        <span>Profile</span>
      </div>
    </div>
  `}function ed(){const t=(u,h,y)=>{const w=document.getElementById(u);w&&w.addEventListener(h,y)};t("go-signin","click",()=>p("login")),t("go-signup","click",()=>p("signup")),t("login-back","click",()=>b()),t("login-toggle-signup","click",()=>p("signup",!1)),t("login-submit","click",()=>{const u=document.getElementById("login-email").value,h=document.getElementById("login-pass").value;if(!u||!h){x("Please fill in all fields.");return}Jo(te,u,h).then(y=>{o.user={...Le},o.user.role="Explorer",p("permissions"),x("Welcome back, "+(y.user.displayName||"Explorer")+"!")}).catch(y=>{x(y.message)})}),t("login-eye","click",()=>{const u=document.getElementById("login-pass");u&&(u.type=u.type==="password"?"text":"password")}),t("signup-back","click",()=>b()),t("signup-toggle-login","click",()=>p("login",!1)),t("signup-submit","click",()=>{const u=document.querySelector("#signup-name").value.trim(),h=document.querySelector("#signup-user-email").value.trim(),y=document.querySelector("#signup-pass").value,w=document.querySelector("#signup-confirm").value;if(!u||!h||!y||!w){x("Please fill in all fields.");return}if(y!==w){x("Passwords do not match.");return}Xo(te,h,y).then(E=>Zo(E.user,{displayName:u})).then(()=>{o.user={...Le},p("permissions"),x("Account created successfully!")}).catch(E=>{x(E.message)})}),t("perm-camera-btn","click",()=>{o.user.permissions.camera=!o.user.permissions.camera,T()}),t("perm-notif-btn","click",()=>{o.user.permissions.notifications=!o.user.permissions.notifications,T()}),t("perm-continue","click",()=>{o.user.permissions.camera&&o.user.permissions.notifications&&p("choose-role")}),t("role-back","click",()=>b()),document.querySelectorAll("[data-role]").forEach(u=>{u.addEventListener("click",()=>{o.user.role=u.getAttribute("data-role"),T()})}),t("role-continue","click",()=>{o.user.role&&p("calibrate-compass")}),document.querySelectorAll("[data-cat]").forEach(u=>{u.addEventListener("click",()=>{const h=u.getAttribute("data-cat");o.user.interests.includes(h)?o.user.interests=o.user.interests.filter(y=>y!==h):o.user.interests.push(h),T()})}),t("compass-continue","click",()=>{o.user.interests.length>0&&p("how-scoring-works")}),t("scoring-continue","click",()=>{p("dashboard"),x("Onboarding complete! Initial User state initialized.")}),t("dash-map-card","click",()=>p("map")),t("dash-search-card","click",()=>p("directory")),t("dash-view-directory","click",u=>{u.stopPropagation(),p("directory")}),t("directory-back","click",()=>p("dashboard")),t("tab-trail","click",()=>{document.getElementById("tab-trail").classList.add("active"),document.getElementById("tab-gems").classList.remove("active"),Re("Heritage Trail")}),t("tab-gems","click",()=>{document.getElementById("tab-trail").classList.remove("active"),document.getElementById("tab-gems").classList.add("active"),Re("Hidden Gems")});const n=document.getElementById("directory-search");if(n&&n.addEventListener("input",()=>{const u=document.querySelector(".tab-btn.active").id==="tab-trail"?"Heritage Trail":"Hidden Gems";Re(u,n.value)}),o.currentScreen==="directory"){const u=document.querySelector(".tab-btn.active"),h=u&&u.id==="tab-gems"?"Hidden Gems":"Heritage Trail";Re(h)}t("trail-list-back","click",()=>p("directory"));const r=document.getElementById("list-search-input");r&&r.addEventListener("input",()=>{const u=document.querySelector(".header-title").textContent;dt(u,r.value)}),o.currentScreen==="heritage-trail"?dt("Heritage Trail"):o.currentScreen==="hidden-gems"&&dt("Hidden Gems"),t("map-back","click",()=>p("dashboard")),document.querySelectorAll(".map-pin").forEach(u=>{u.addEventListener("click",h=>{h.stopPropagation();const y=u.getAttribute("data-site-id"),w=we.find(E=>E.id===y);w&&rd(w)})});const a=document.querySelector(".map-canvas");a&&a.addEventListener("click",()=>{const u=document.getElementById("map-popup-card");u&&u.remove()}),t("site-back","click",()=>b()),t("site-visit-now","click",()=>{o.user.dwellTimeCompleted[o.activeSite.id]?p("camera"):(o.dwellTimeLeft=900,p("dwell-time"),td())}),t("site-quiz-btn","click",()=>{o.user.dwellTimeCompleted[o.activeSite.id]&&(o.cooldownActive?p("quiz-cooldown"):(o.currentQuizIndex=0,o.quizCorrectAnswers=0,o.quizAnswers=[],p("quiz"),wt()))}),t("site-quests-btn","click",()=>{o.user.dwellTimeCompleted[o.activeSite.id]&&p("quests")}),t("dwell-back","click",()=>{clearInterval(o.dwellTimer),o.dwellActive=!1,b()});const c=document.getElementById("dwell-timer-clicker");c&&c.addEventListener("dblclick",()=>{clearInterval(o.dwellTimer),o.dwellTimeLeft=0,o.dwellActive=!1,o.user.dwellTimeCompleted[o.activeSite.id]=!0,o.user.sitesVisited=Object.keys(o.user.dwellTimeCompleted).length,k(50,`Presence verified at ${o.activeSite.name}!`),T()}),t("dwell-continue-btn","click",()=>{o.dwellTimeLeft<=0&&p("camera")}),t("camera-back","click",()=>b()),t("camera-shutter-click","click",()=>{o.cameraAttempt===1?(o.cameraAttempt=2,p("camera-reject")):p("camera-success")}),t("camera-success-continue","click",()=>{o.user.verifiedPhotos[o.activeSite.id]=!0,k(10,"Landmark photo verification success!"),p("site-detail")}),t("reject-close","click",()=>p("site-detail")),t("reject-guidelines","click",()=>p("guidelines")),t("reject-retry","click",()=>p("camera")),t("guidelines-back","click",()=>b()),t("guidelines-continue","click",()=>p("camera")),t("sync-back","click",()=>b()),t("quiz-back","click",()=>b()),t("quiz-end-btn","click",()=>p("site-detail"));const l=document.querySelectorAll("#quiz-options-container .quiz-option-btn");l.forEach(u=>{u.addEventListener("click",()=>{const h=parseInt(u.getAttribute("data-index")),w=o.activeSite.quizzes[o.currentQuizIndex].correctIndex;l.forEach(E=>E.disabled=!0),o.quizAnswers.push(h),h===w?(u.classList.add("correct"),u.querySelector(".quiz-circle-ico").style.background="var(--color-green-success)",o.quizCorrectAnswers++):(u.classList.add("incorrect"),u.querySelector(".quiz-circle-ico").style.background="var(--color-red-reject)",l[w].classList.add("correct"),l[w].querySelector(".quiz-circle-ico").style.background="var(--color-green-success)"),setTimeout(()=>{if(o.currentQuizIndex+1<o.activeSite.quizzes.length)o.currentQuizIndex++,T(),wt();else{const E=o.quizCorrectAnswers,Je=E*10;o.user.completedQuizzes[o.activeSite.id]=!0,o.user.quizzesPassed=Object.keys(o.user.completedQuizzes).length,k(Je,`Quiz Complete! You got ${E}/5 correct.`),o.cooldownTimeLeft=300,p("quiz-cooldown"),Vn()}},1500)})}),t("cooldown-back","click",()=>p("site-detail")),t("quests-back","click",()=>b()),t("quest-item-social","click",()=>p("quest-social")),t("quest-item-local_food","click",()=>p("quest-food")),t("quest-item-wandering_around","click",()=>p("quest-wandering")),t("quest-item-wildlife_spotting","click",()=>p("quest-wildlife")),t("quest-item-eco_warrior","click",()=>p("quest-warrior")),t("quest-social-back","click",()=>b()),t("quest-social-submit","click",()=>{document.getElementById("quest-social-link-input").value&&(k(5,"Social media post registered!"),p("quests"))}),t("quest-food-back","click",()=>b()),t("quest-food-start","click",()=>{k(10,"Traditional recipe task completed!"),p("quests")}),t("quest-wandering-back","click",()=>b()),t("quest-wandering-snap","click",()=>{k(60,"Rural landmark captured locally!"),p("quests")}),t("quest-wildlife-back","click",()=>b()),t("quest-wildlife-snap","click",()=>{k(25,"Wildlife encounter successfully logged!"),p("quests")}),t("quest-warrior-back","click",()=>b()),t("quest-warrior-snap","click",()=>{k(75,"Heritage reforestation planting logged!"),p("quests")}),t("act-link-petition","click",()=>p("petition")),t("act-link-donations","click",()=>p("donations")),t("act-link-cleanup","click",()=>p("cleanup")),t("act-link-create-event","click",()=>p("create-event")),t("petition-back","click",()=>b()),t("petition-submit","click",()=>{o.petitionSigned||(o.petitionSigned=!0,o.petitionSignatures++,o.user.signedPetitions.push("ritigala-forest"),k(3,"You signed the Ritigala Protection Petition!"),T())}),t("donations-back","click",()=>b()),document.querySelectorAll(".donation-btn").forEach(u=>{u.addEventListener("click",()=>{const h=parseInt(u.getAttribute("data-val"));o.donationAmount=h,T()})});const g=document.getElementById("donation-custom-input");g&&g.addEventListener("input",()=>{o.donationAmount=parseInt(g.value)||0}),t("donations-submit","click",()=>{if(o.donationAmount>0){o.user.donatedAmount+=o.donationAmount;const u=Math.min(15,Math.ceil(o.donationAmount/200));k(u,`Donated Rs. ${o.donationAmount} successfully!`),o.donationAmount=0,p("activism")}}),t("cleanup-back","click",()=>b()),t("cleanup-join","click",()=>{o.user.joinedEvents.includes("site-cleanup")||(o.user.joinedEvents.push("site-cleanup"),k(15,"Registered for Elahera Anicut site cleanup!"),T())}),t("create-event-back","click",()=>b()),t("event-submit","click",()=>{const u=document.getElementById("event-location").value,h=document.getElementById("event-type").value;u&&(o.user.joinedEvents.push("community-event"),k(15,`Created Community event: ${h}!`),p("activism"))}),t("rew-link-list","click",()=>p("rewards-list")),t("rew-link-rank","click",()=>p("rank")),t("rew-link-leaderboard","click",()=>p("leaderboard")),t("rewards-list-back","click",()=>p("rewards")),t("rew-coupon-use","click",()=>p("coupon-redeem")),t("rew-unlock-guide","click",()=>{o.user.xp>=100&&(o.user.xp-=100,o.user.unlockedCoupons.push("guide"),x("Unlocked Ancient Trail Guide Coupon!"),p("rewards-list"))}),t("rew-unlock-crafts","click",()=>{o.user.xp>=100&&(o.user.xp-=100,o.user.unlockedCoupons.push("crafts"),x("Unlocked Artisan Crafts Coupon!"),p("rewards-list"))}),t("coupon-back","click",()=>b()),t("coupon-redeem-btn","click",()=>{x("Voucher code validated. coupon redeemed!")}),t("coupon-review-submit","click",()=>{document.getElementById("coupon-review-input").value&&(k(10,"Review submitted successfully!"),document.getElementById("coupon-review-input").value="")}),t("rank-back","click",()=>b()),t("leaderboard-back","click",()=>b()),t("leaderboard-view-full","click",()=>{x("Rendering complete global leaderboard...")}),t("profile-recap-trigger","click",()=>p("travel-poster")),t("profile-travel-map","click",()=>p("travel-poster")),t("profile-settings","click",()=>p("settings")),t("poster-back","click",()=>b()),t("settings-back","click",()=>b()),t("sett-perm","click",()=>p("permissions")),t("sett-logout","click",()=>{ic(te).then(()=>{o.user={...Le},o.user.permissions={camera:!1,notifications:!1},o.petitionSignatures=8742,o.petitionSigned=!1,o.navStack=[],p("splash"),x("Logged out successfully.")}).catch(u=>{x("Logout failed: "+u.message)})}),t("nav-home","click",()=>p("dashboard")),t("nav-act","click",()=>p("activism")),t("nav-rew","click",()=>p("rewards")),t("nav-prof","click",()=>p("profile"))}function td(){o.dwellActive||(o.dwellActive=!0,o.dwellTimer=setInterval(()=>{o.dwellTimeLeft>0?(o.dwellTimeLeft--,o.currentScreen==="dwell-time"&&id()):(clearInterval(o.dwellTimer),o.dwellActive=!1,o.user.dwellTimeCompleted[o.activeSite.id]=!0,o.user.sitesVisited=Object.keys(o.user.dwellTimeCompleted).length,k(50,`Presence verified at ${o.activeSite.name}!`),o.currentScreen==="dwell-time"&&T())},1e3))}function id(){const t=document.querySelector(".timer-text-display"),e=document.querySelector(".timer-progress-circle");if(!t||!e)return;const i=Math.floor(o.dwellTimeLeft/60),n=o.dwellTimeLeft%60;t.textContent=`${i<10?"0"+i:i}:${n<10?"0"+n:n}`;const s=565.48-o.dwellTimeLeft/900*565.48;e.style.strokeDashoffset=s}let Ce=15,lt=null;function wt(){clearInterval(lt),Ce=15;const t=document.getElementById("quiz-timer");t&&(t.textContent="15s"),lt=setInterval(()=>{if(Ce>0){Ce--;const e=document.getElementById("quiz-timer");e&&(e.textContent=`${Ce}s`)}else{clearInterval(lt);const e=document.querySelectorAll("#quiz-options-container .quiz-option-btn");e.forEach(n=>n.disabled=!0),o.quizAnswers.push(-1);const i=o.activeSite.quizzes[o.currentQuizIndex].correctIndex;e[i]&&(e[i].classList.add("correct"),e[i].querySelector(".quiz-circle-ico").style.background="var(--color-green-success)"),setTimeout(()=>{if(o.currentQuizIndex+1<o.activeSite.quizzes.length)o.currentQuizIndex++,T(),wt();else{const n=o.quizCorrectAnswers;o.user.completedQuizzes[o.activeSite.id]=!0,o.user.quizzesPassed=Object.keys(o.user.completedQuizzes).length,k(n*10,`Quiz Complete! You got ${n}/5 correct.`),o.cooldownTimeLeft=300,p("quiz-cooldown"),Vn()}},1500)}},1e3)}function Vn(){o.cooldownActive||(o.cooldownActive=!0,o.cooldownTimer=setInterval(()=>{o.cooldownTimeLeft>0?(o.cooldownTimeLeft--,o.currentScreen==="quiz-cooldown"&&nd()):(clearInterval(o.cooldownTimer),o.cooldownActive=!1,o.currentScreen==="quiz-cooldown"&&p("site-detail"))},1e3))}function nd(){const t=document.querySelector(".timer-text-display"),e=document.querySelector(".timer-progress-circle");if(!t||!e)return;const i=Math.floor(o.cooldownTimeLeft/60),n=o.cooldownTimeLeft%60;t.textContent=`${i<10?"0"+i:i}:${n<10?"0"+n:n}`;const s=565.48-o.cooldownTimeLeft/300*565.48;e.style.strokeDashoffset=s}function Re(t,e=""){const i=document.getElementById("directory-grid-container");if(!i)return;const n=e.toLowerCase(),r=we.filter(s=>{const a=s.category===t,c=s.name.toLowerCase().includes(n)||s.district.toLowerCase().includes(n);return a&&c});if(r.length===0){i.innerHTML='<div style="grid-column: 1/3; text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No matching locations found</div>';return}i.innerHTML=r.map(s=>`
    <div class="location-grid-card" data-site-grid-id="${s.id}">
      <img src="${s.image}" alt="${s.name}" class="location-card-img">
      <div class="location-card-content">
        <h4 class="location-card-title">${s.name}</h4>
        <span class="location-card-sub">${s.district}</span>
        <span class="location-card-xp">${s.xpRange}</span>
      </div>
    </div>
  `).join(""),document.querySelectorAll("[data-site-grid-id]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-site-grid-id"),c=we.find(l=>l.id===a);c&&(o.activeSite=c,p("site-detail"))})})}function dt(t,e=""){const i=document.getElementById("list-cards-container");if(!i)return;const n=e.toLowerCase(),r=we.filter(s=>{const a=s.category===t,c=s.name.toLowerCase().includes(n)||s.district.toLowerCase().includes(n);return a&&c});if(r.length===0){i.innerHTML='<div style="text-align: center; color: var(--color-gray); padding: 20px; font-size:12px;">No matching locations found</div>';return}i.innerHTML=r.map(s=>`
    <div class="location-list-card" data-site-list-id="${s.id}">
      <img src="${s.image}" alt="${s.name}" class="location-list-img">
      <div class="location-list-content">
        <h4 style="font-size: 13px; font-weight: 800; line-height: 1.3;">${s.name}</h4>
        <span style="font-size: 10px; color: var(--color-gray); margin-top: 1px; margin-bottom: 4px;">${s.district}</span>
        <span style="font-size: 11px; font-weight: 700; color: var(--color-gold);">${s.xpRange}</span>
      </div>
    </div>
  `).join(""),document.querySelectorAll("[data-site-list-id]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-site-list-id"),c=we.find(l=>l.id===a);c&&(o.activeSite=c,p("site-detail"))})})}function rd(t){const e=document.getElementById("map-popup-card");e&&e.remove();const i=document.getElementById("map-popup-container");if(!i)return;const n=document.createElement("div");n.id="map-popup-card",n.className="map-popup-card",n.innerHTML=`
    <img src="${t.image}" alt="${t.name}" class="popup-site-img">
    <div class="popup-site-info">
      <h3 style="font-size: 15px; font-weight: 800; color: var(--color-charcoal);">${t.name}</h3>
      <span style="font-size: 10px; color: var(--color-gold); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${t.category}</span>
      <span style="font-size: 11px; color: var(--color-charcoal); font-weight: 700; margin-top: 2px;">⭐ ${t.xpRange} • 📍 ${t.distance}</span>
    </div>
    <button class="btn-primary" style="width: 90px; height: 36px; font-size: 11px; padding:0 8px; gap:4px;" id="map-popup-navigate-btn">
      <span>🚀 Navigate</span>
    </button>
  `,i.appendChild(n),document.getElementById("map-popup-navigate-btn").addEventListener("click",r=>{r.stopPropagation(),o.activeSite=t,p("site-detail")}),n.addEventListener("click",r=>{r.stopPropagation(),o.activeSite=t,p("site-detail")})}
