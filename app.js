
const state={stars:0,gamesDone:0};
const screens=[...document.querySelectorAll('.screen')];
function openScreen(id){screens.forEach(s=>s.classList.toggle('active',s.id===id));scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openScreen(b.dataset.open)));
document.getElementById('homeBtn').addEventListener('click',()=>openScreen('home'));
function reward(n=5){state.stars+=n;state.gamesDone++;document.getElementById('stars').textContent=state.stars+' estrellas';document.getElementById('gamesDone').textContent=state.gamesDone+' actividades';document.getElementById('progressBar').style.width=Math.min(100,state.gamesDone*10)+'%';}
function speak(text){if(!('speechSynthesis'in window))return; speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text);u.lang='es-MX';u.pitch=1.3;u.rate=.9;speechSynthesis.speak(u);}
document.getElementById('welcomeBtn').addEventListener('click',()=>speak('Hola, somos Las Chespitas. Bienvenido a Party Planet. Vamos a cantar, jugar y aprender juntos.'));

const icons=['⭐','🎈','🎂','🟣','🎤','🎨','🦘','🎁'];
let flipped=[],matched=0,moves=0;
function buildMemory(){
 const arr=[...icons,...icons].sort(()=>Math.random()-.5),grid=document.getElementById('memoryGrid');
 grid.innerHTML='';flipped=[];matched=0;moves=0;document.getElementById('memoryStatus').textContent='Movimientos: 0';
 arr.forEach((icon,i)=>{const b=document.createElement('button');b.className='memory-card';b.textContent='?';b.dataset.icon=icon;b.dataset.i=i;
 b.addEventListener('click',()=>flipCard(b));grid.appendChild(b);});
}
function flipCard(b){
 if(b.classList.contains('flipped')||b.classList.contains('matched')||flipped.length===2)return;
 b.classList.add('flipped');b.textContent=b.dataset.icon;flipped.push(b);
 if(flipped.length===2){moves++;document.getElementById('memoryStatus').textContent='Movimientos: '+moves;
  setTimeout(()=>{const[a,c]=flipped;if(a.dataset.icon===c.dataset.icon){a.classList.add('matched');c.classList.add('matched');matched+=2;
   if(matched===16){document.getElementById('memoryStatus').textContent='¡Ganaste 10 estrellas!';reward(10);speak('¡Excelente! Completaste el memorama.');}}
  else{a.classList.remove('flipped');c.classList.remove('flipped');a.textContent='?';c.textContent='?';}flipped=[];},650);}
}
buildMemory();document.getElementById('resetMemory').addEventListener('click',buildMemory);

const found=new Set();
document.querySelectorAll('.hotspot').forEach(h=>h.addEventListener('click',()=>{found.add(h.dataset.diff);h.classList.add('found');
 document.getElementById('differenceStatus').textContent=`Encontradas: ${found.size} de 3`;
 if(found.size===3){reward(10);speak('¡Muy bien! Encontraste todas las diferencias.');}}));

const riddles=[
 {q:'Tengo agujas y no sé coser. ¿Qué soy?',a:['Un reloj','Una nube','Un globo'],ok:0},
 {q:'Soy redonda y brillo de noche. ¿Qué soy?',a:['La luna','Una mesa','Un zapato'],ok:0},
 {q:'Sube y baja, pero no se mueve de su lugar. ¿Qué es?',a:['La escalera','El sol','El pastel'],ok:0},
 {q:'Tengo colores y aparezco después de la lluvia.',a:['Arcoíris','Sombrero','Caramelo'],ok:0}
];let ri=0;
function showRiddle(){const r=riddles[ri%riddles.length];document.getElementById('riddleQuestion').textContent=r.q;const box=document.getElementById('riddleOptions');box.innerHTML='';
 r.a.forEach((x,i)=>{const b=document.createElement('button');b.textContent=x;b.addEventListener('click',()=>{if(i===r.ok){document.getElementById('riddleStatus').textContent='¡Correcto! Ganaste 5 estrellas.';reward(5);speak('¡Correcto! Muy bien.');ri++;setTimeout(showRiddle,900);}else{document.getElementById('riddleStatus').textContent='Inténtalo otra vez.';}});box.appendChild(b);});}
showRiddle();

const canvas=document.getElementById('colorCanvas'),ctx=canvas.getContext('2d');let drawing=false,color='#ec4899';
function setupCanvas(){ctx.fillStyle='white';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.strokeStyle='#6d28d9';ctx.lineWidth=8;ctx.strokeRect(90,80,580,330);
 ctx.font='110px serif';ctx.fillText('⭐',180,270);ctx.fillText('🎈',410,270);ctx.fillText('🎂',555,280);}
setupCanvas();
const colors=['#ec4899','#7c3aed','#38bdf8','#fde047','#22c55e','#ef4444','#f97316','#111827','#ffffff'];
const palette=document.getElementById('palette');colors.forEach(c=>{const b=document.createElement('button');b.className='swatch';b.style.background=c;b.setAttribute('aria-label','Elegir color');b.addEventListener('click',()=>color=c);palette.appendChild(b);});
function pos(e){const r=canvas.getBoundingClientRect(),p=e.touches?e.touches[0]:e;return{x:(p.clientX-r.left)*canvas.width/r.width,y:(p.clientY-r.top)*canvas.height/r.height};}
function start(e){drawing=true;const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);e.preventDefault();}
function move(e){if(!drawing)return;const p=pos(e);ctx.strokeStyle=color;ctx.lineWidth=document.getElementById('brushSize').value;ctx.lineCap='round';ctx.lineTo(p.x,p.y);ctx.stroke();e.preventDefault();}
function end(){drawing=false;}
['mousedown','touchstart'].forEach(x=>canvas.addEventListener(x,start));['mousemove','touchmove'].forEach(x=>canvas.addEventListener(x,move));['mouseup','mouseleave','touchend'].forEach(x=>canvas.addEventListener(x,end));
document.getElementById('clearCanvas').addEventListener('click',setupCanvas);
document.getElementById('saveCanvas').addEventListener('click',()=>{const a=document.createElement('a');a.download='mi-dibujo-party-planet.png';a.href=canvas.toDataURL();a.click();reward(5);});

const songs={
 party:['Vamos todos a Party Planet','donde empieza la diversión','con Las Chespitas vamos a cantar','y con Sparkly vamos a bailar'],
 stars:['Vueltas, vueltas y estrellitas','brilla la pista al comenzar','mueve tus manos hacia arriba','y da una vuelta sin parar'],
 skates:['Mis patines ya están listos','rueda, rueda con emoción','Party Planet tiene ritmo','y Las Chespitas el corazón']
};let karaokeTimer=null,li=0;
function renderLyrics(){const key=document.getElementById('songSelect').value,lines=songs[key];document.getElementById('lyricsBox').innerHTML=lines.map((l,i)=>`<div class="${i===li?'line-active':''}">${l}</div>`).join('');}
renderLyrics();document.getElementById('songSelect').addEventListener('change',()=>{li=0;renderLyrics();});
document.getElementById('startKaraoke').addEventListener('click',()=>{clearInterval(karaokeTimer);li=0;renderLyrics();karaokeTimer=setInterval(()=>{li++;if(li>=songs[document.getElementById('songSelect').value].length){clearInterval(karaokeTimer);reward(10);speak('¡Bravo! Cantaste con Las Chespitas.');li=0;}renderLyrics();},2200);});
document.getElementById('stopKaraoke').addEventListener('click',()=>clearInterval(karaokeTimer));
document.getElementById('trackUpload').addEventListener('change',e=>{const f=e.target.files[0];if(f)document.getElementById('audioPlayer').src=URL.createObjectURL(f);});

document.querySelectorAll('.lesson').forEach(b=>b.addEventListener('click',()=>{speak(b.dataset.lesson);reward(3);}));
const charSel=document.getElementById('characterSelect'),accSel=document.getElementById('accessorySelect');
function avatar(){document.getElementById('avatar').textContent=charSel.value.split(' ')[0];document.getElementById('avatarAccessory').textContent=accSel.value;}
charSel.addEventListener('change',avatar);accSel.addEventListener('change',avatar);
document.querySelectorAll('.purchase').forEach(b=>b.addEventListener('click',()=>document.getElementById('purchaseMessage').textContent='Plan seleccionado. Falta conectar el cobro real con App Store, Google Play o una pasarela segura.'));
if('serviceWorker' in navigator){navigator.serviceWorker.register('service-worker.js').catch(()=>{});}

/* ===== V12: Canciones privadas ===== */
const DB_NAME='PartyPlanetV12DB', STORE='songs';
function openDB(){return new Promise((resolve,reject)=>{const req=indexedDB.open(DB_NAME,1);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(STORE))db.createObjectStore(STORE,{keyPath:'id',autoIncrement:true});};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
async function allSongs(){const db=await openDB();return new Promise((resolve,reject)=>{const r=db.transaction(STORE,'readonly').objectStore(STORE).getAll();r.onsuccess=()=>resolve(r.result||[]);r.onerror=()=>reject(r.error);});}
async function putSong(song){const db=await openDB();return new Promise((resolve,reject)=>{const r=db.transaction(STORE,'readwrite').objectStore(STORE).put(song);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});}
async function deleteSong(id){const db=await openDB();return new Promise((resolve,reject)=>{const r=db.transaction(STORE,'readwrite').objectStore(STORE).delete(id);r.onsuccess=()=>resolve();r.onerror=()=>reject(r.error);});}
function fileToDataURL(file){return new Promise((resolve,reject)=>{if(!file){resolve('');return;}const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=()=>reject(r.error);r.readAsDataURL(file);});}
function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
let adminUnlocked=false;
async function hashText(text){const data=new TextEncoder().encode(text),hash=await crypto.subtle.digest('SHA-256',data);return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('');}
function refreshAdminAccess(){const configured=!!localStorage.getItem('pp_admin_hash');document.getElementById('adminSetup').style.display=configured?'none':'block';document.getElementById('adminLogin').style.display=configured&&!adminUnlocked?'block':'none';document.getElementById('adminPanel').style.display=adminUnlocked?'block':'none';}
document.getElementById('saveAdminPin').addEventListener('click',async()=>{const a=document.getElementById('newAdminPin').value,b=document.getElementById('confirmAdminPin').value;if(!/^\d{6}$/.test(a)){document.getElementById('setupStatus').textContent='El PIN debe tener exactamente 6 dígitos.';return;}if(a!==b){document.getElementById('setupStatus').textContent='Los PIN no coinciden.';return;}localStorage.setItem('pp_admin_hash',await hashText(a));adminUnlocked=true;refreshAdminAccess();renderSongs();});
document.getElementById('loginAdmin').addEventListener('click',async()=>{const pin=document.getElementById('adminPin').value,hash=await hashText(pin);if(hash===localStorage.getItem('pp_admin_hash')){adminUnlocked=true;document.getElementById('loginStatus').textContent='Acceso correcto.';refreshAdminAccess();renderSongs();}else document.getElementById('loginStatus').textContent='PIN incorrecto.';});
document.getElementById('logoutAdmin').addEventListener('click',()=>{adminUnlocked=false;document.getElementById('adminPin').value='';refreshAdminAccess();});
document.getElementById('saveSong').addEventListener('click',async()=>{if(!adminUnlocked)return;const title=document.getElementById('songTitle').value.trim(),audio=document.getElementById('songFile').files[0],cover=document.getElementById('coverFile').files[0];if(!title||!audio){document.getElementById('adminStatus').textContent='Escribe el título y selecciona un audio.';return;}const song={title,category:document.getElementById('songCategory').value,lyrics:document.getElementById('songLyrics').value,published:document.getElementById('songPublished').checked,audio:await fileToDataURL(audio),cover:await fileToDataURL(cover),createdAt:Date.now()};await putSong(song);document.getElementById('songTitle').value='';document.getElementById('songLyrics').value='';document.getElementById('songFile').value='';document.getElementById('coverFile').value='';document.getElementById('adminStatus').textContent='Canción guardada correctamente.';await renderSongs();});
async function renderSongs(){const songs=(await allSongs()).sort((a,b)=>b.createdAt-a.createdAt),pub=document.getElementById('publicSongs'),adm=document.getElementById('adminSongs'),empty=document.getElementById('songsEmpty');pub.innerHTML='';adm.innerHTML='';const published=songs.filter(s=>s.published);empty.style.display=published.length?'none':'block';published.forEach(s=>{const c=document.createElement('div');c.className='card';c.innerHTML=`${s.cover?`<img class="song-cover" src="${s.cover}" alt="Portada de ${esc(s.title)}">`:'<div class="song-cover" style="display:grid;place-items:center;font-size:4rem">🎵</div>'}<h3>${esc(s.title)}</h3><p>${esc(s.category)}</p><audio controls style="width:100%" src="${s.audio}"></audio>${s.lyrics?`<details><summary>Ver letra</summary><p style="white-space:pre-wrap">${esc(s.lyrics)}</p></details>`:''}`;pub.appendChild(c);});if(adminUnlocked)songs.forEach(s=>{const c=document.createElement('div');c.className='card';c.innerHTML=`<h3>${esc(s.title)}</h3><p>${esc(s.category)} • ${s.published?'Publicada':'Oculta'}</p><audio controls style="width:100%" src="${s.audio}"></audio><div class="song-actions"><button class="btn secondary toggleSong" data-id="${s.id}">${s.published?'Ocultar':'Publicar'}</button><button class="btn deleteSong" data-id="${s.id}" style="background:#b91c1c">Eliminar</button></div>`;adm.appendChild(c);});adm.querySelectorAll('.toggleSong').forEach(b=>b.addEventListener('click',async()=>{const song=songs.find(s=>s.id===Number(b.dataset.id));song.published=!song.published;await putSong(song);renderSongs();}));adm.querySelectorAll('.deleteSong').forEach(b=>b.addEventListener('click',async()=>{if(adminUnlocked&&confirm('¿Eliminar esta canción?')){await deleteSong(Number(b.dataset.id));renderSongs();}}));}
refreshAdminAccess();renderSongs();

/* ===== V12: Idiomas ampliados ===== */
const vocabulary={
en:{
'Saludos':[['Hola','Hello','👋'],['Buenos días','Good morning','🌞'],['Buenas noches','Good night','🌙'],['Adiós','Goodbye','👋'],['Por favor','Please','🙏'],['Gracias','Thank you','💛']],
'Familia':[['Mamá','Mom','👩'],['Papá','Dad','👨'],['Hermana','Sister','👧'],['Hermano','Brother','👦'],['Abuela','Grandmother','👵'],['Abuelo','Grandfather','👴']],
'Colores':[['Rojo','Red','🔴'],['Azul','Blue','🔵'],['Amarillo','Yellow','🟡'],['Verde','Green','🟢'],['Rosa','Pink','🌸'],['Morado','Purple','🟣'],['Naranja','Orange','🟠'],['Blanco','White','⚪']],
'Números':[['Uno','One','1️⃣'],['Dos','Two','2️⃣'],['Tres','Three','3️⃣'],['Cuatro','Four','4️⃣'],['Cinco','Five','5️⃣'],['Seis','Six','6️⃣'],['Siete','Seven','7️⃣'],['Ocho','Eight','8️⃣'],['Nueve','Nine','9️⃣'],['Diez','Ten','🔟']],
'Animales':[['Perro','Dog','🐶'],['Gato','Cat','🐱'],['Pájaro','Bird','🐦'],['Pez','Fish','🐟'],['Caballo','Horse','🐴'],['Conejo','Rabbit','🐰'],['León','Lion','🦁'],['Elefante','Elephant','🐘']],
'Comida':[['Manzana','Apple','🍎'],['Plátano','Banana','🍌'],['Fresa','Strawberry','🍓'],['Pan','Bread','🍞'],['Leche','Milk','🥛'],['Agua','Water','💧'],['Pastel','Cake','🎂'],['Queso','Cheese','🧀']],
'Escuela':[['Libro','Book','📘'],['Lápiz','Pencil','✏️'],['Mochila','Backpack','🎒'],['Maestra','Teacher','👩‍🏫'],['Escuela','School','🏫'],['Tijeras','Scissors','✂️']],
'Cuerpo':[['Cabeza','Head','🙂'],['Mano','Hand','✋'],['Pie','Foot','🦶'],['Ojos','Eyes','👀'],['Nariz','Nose','👃'],['Boca','Mouth','👄']],
'Emociones':[['Feliz','Happy','😊'],['Triste','Sad','😢'],['Enojado','Angry','😠'],['Asustado','Scared','😨'],['Sorprendido','Surprised','😮'],['Cansado','Tired','😴']]
},
fr:{
'Saludos':[['Hola','Bonjour','👋'],['Buenas noches','Bonne nuit','🌙'],['Adiós','Au revoir','👋'],['Por favor',"S'il vous plaît",'🙏'],['Gracias','Merci','💛']],
'Colores':[['Rojo','Rouge','🔴'],['Azul','Bleu','🔵'],['Amarillo','Jaune','🟡'],['Verde','Vert','🟢'],['Rosa','Rose','🌸'],['Morado','Violet','🟣']],
'Números':[['Uno','Un','1️⃣'],['Dos','Deux','2️⃣'],['Tres','Trois','3️⃣'],['Cuatro','Quatre','4️⃣'],['Cinco','Cinq','5️⃣'],['Diez','Dix','🔟']],
'Animales':[['Perro','Chien','🐶'],['Gato','Chat','🐱'],['Pájaro','Oiseau','🐦'],['Pez','Poisson','🐟'],['Caballo','Cheval','🐴'],['Conejo','Lapin','🐰']]
},
it:{
'Saludos':[['Hola','Ciao','👋'],['Buenos días','Buongiorno','🌞'],['Buenas noches','Buona notte','🌙'],['Adiós','Arrivederci','👋'],['Por favor','Per favore','🙏'],['Gracias','Grazie','💛']],
'Colores':[['Rojo','Rosso','🔴'],['Azul','Blu','🔵'],['Amarillo','Giallo','🟡'],['Verde','Verde','🟢'],['Rosa','Rosa','🌸'],['Morado','Viola','🟣']],
'Números':[['Uno','Uno','1️⃣'],['Dos','Due','2️⃣'],['Tres','Tre','3️⃣'],['Cuatro','Quattro','4️⃣'],['Cinco','Cinque','5️⃣'],['Diez','Dieci','🔟']],
'Animales':[['Perro','Cane','🐶'],['Gato','Gatto','🐱'],['Pájaro','Uccello','🐦'],['Pez','Pesce','🐟'],['Caballo','Cavallo','🐴'],['Conejo','Coniglio','🐰']]
}};
let quizItem=null;
function langCode(){return document.getElementById('languageSelect').value;}
function populateCategories(){const select=document.getElementById('categorySelect'),cats=Object.keys(vocabulary[langCode()]);select.innerHTML=cats.map(c=>`<option>${c}</option>`).join('');renderWords();}
function renderWords(){const lang=langCode(),cat=document.getElementById('categorySelect').value,items=vocabulary[lang][cat]||[],grid=document.getElementById('wordGrid');grid.innerHTML='';items.forEach(([es,tr,em])=>{const c=document.createElement('div');c.className='card word';c.innerHTML=`<span class="emoji">${em}</span><div><strong>${esc(es)}</strong><br><span>${esc(tr)}</span></div><button class="btn secondary">🔊</button>`;c.querySelector('button').addEventListener('click',()=>{const u=new SpeechSynthesisUtterance(tr);u.lang=lang==='en'?'en-US':lang==='fr'?'fr-FR':'it-IT';u.rate=.8;u.pitch=1.15;speechSynthesis.cancel();speechSynthesis.speak(u);});grid.appendChild(c);});}
document.getElementById('languageSelect').addEventListener('change',populateCategories);
document.getElementById('categorySelect').addEventListener('change',renderWords);
document.getElementById('startLanguageQuiz').addEventListener('click',()=>{const lang=langCode(),cat=document.getElementById('categorySelect').value,items=vocabulary[lang][cat],correct=items[Math.floor(Math.random()*items.length)],all=Object.values(vocabulary[lang]).flat(),wrong=all.filter(x=>x[1]!==correct[1]).sort(()=>Math.random()-.5).slice(0,2),options=[correct,...wrong].sort(()=>Math.random()-.5);quizItem=correct;document.getElementById('languageQuizBox').style.display='block';document.getElementById('languageQuestion').textContent=`¿Cómo se dice “${correct[0]}”?`;const box=document.getElementById('languageOptions');box.innerHTML='';options.forEach(o=>{const b=document.createElement('button');b.textContent=o[1];b.addEventListener('click',()=>{if(o[1]===quizItem[1]){document.getElementById('languageStatus').textContent='¡Correcto! Ganaste 5 estrellas.';reward(5);speak('¡Muy bien! Respuesta correcta.');}else document.getElementById('languageStatus').textContent='Inténtalo nuevamente.';});box.appendChild(b);});});
populateCategories();
