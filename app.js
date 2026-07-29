
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


/* ===== V13: Idiomas por categorías ===== */
const categoryMeta = {
  'Saludos':'👋','Familia':'👨‍👩‍👧','Colores':'🌈','Números':'🔢','Animales':'🐯',
  'Alimentos':'🍎','Frutas':'🍓','Verduras':'🥕','Escuela':'🎒','Casa':'🏠',
  'Ropa':'👕','Juguetes':'🧸','Cuerpo':'✋','Emociones':'😊','Días y meses':'📅',
  'Clima':'🌤️','Profesiones':'👷','Transporte':'🚗','Lugares':'📍','Verbos':'🏃',
  'Adjetivos':'⭐','Adverbios':'🚀','Frases útiles':'💬','Naturaleza':'🌳',
  'Música':'🎵','Fiesta':'🎉','Tecnología':'💻','Deportes':'⚽'
};

const baseSpanish = {
'Saludos':['Hola','Buenos días','Buenas tardes','Buenas noches','Adiós','Hasta pronto','Por favor','Gracias','De nada','Perdón','Mucho gusto','¿Cómo estás?'],
'Familia':['Mamá','Papá','Hermana','Hermano','Abuela','Abuelo','Tía','Tío','Prima','Primo','Bebé','Familia'],
'Colores':['Rojo','Azul','Amarillo','Verde','Rosa','Morado','Naranja','Blanco','Negro','Café','Gris','Dorado'],
'Números':['Uno','Dos','Tres','Cuatro','Cinco','Seis','Siete','Ocho','Nueve','Diez','Veinte','Cien'],
'Animales':['Perro','Gato','Pájaro','Pez','Caballo','Conejo','León','Elefante','Jirafa','Mariposa','Delfín','Canguro'],
'Alimentos':['Pan','Leche','Agua','Arroz','Queso','Huevo','Sopa','Pastel','Galleta','Pizza','Pollo','Helado'],
'Frutas':['Manzana','Plátano','Fresa','Naranja','Uva','Sandía','Piña','Mango','Pera','Melón','Durazno','Cereza'],
'Verduras':['Zanahoria','Papa','Tomate','Lechuga','Brócoli','Pepino','Cebolla','Calabaza','Espinaca','Elote','Chícharo','Pimiento'],
'Escuela':['Libro','Lápiz','Mochila','Maestra','Escuela','Tijeras','Cuaderno','Regla','Pizarrón','Salón','Tarea','Recreo'],
'Casa':['Casa','Puerta','Ventana','Cocina','Recámara','Baño','Mesa','Silla','Cama','Lámpara','Jardín','Llave'],
'Ropa':['Camisa','Pantalón','Vestido','Falda','Zapatos','Calcetines','Sombrero','Chamarra','Suéter','Pijama','Guantes','Bufanda'],
'Juguetes':['Muñeca','Pelota','Carrito','Rompecabezas','Bloques','Cometa','Patines','Tren','Tambor','Robot','Títere','Globo'],
'Cuerpo':['Cabeza','Mano','Pie','Ojos','Nariz','Boca','Orejas','Cabello','Brazo','Pierna','Dientes','Corazón'],
'Emociones':['Feliz','Triste','Enojado','Asustado','Sorprendido','Cansado','Emocionado','Tranquilo','Orgulloso','Tímido','Amable','Valiente'],
'Días y meses':['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo','Enero','Marzo','Julio','Octubre','Diciembre'],
'Clima':['Sol','Lluvia','Nube','Viento','Calor','Frío','Tormenta','Arcoíris','Nieve','Primavera','Verano','Invierno'],
'Profesiones':['Doctora','Maestro','Bombero','Policía','Cocinera','Enfermero','Artista','Músico','Ingeniera','Veterinario','Astronauta','Panadero'],
'Transporte':['Carro','Autobús','Avión','Tren','Bicicleta','Barco','Motocicleta','Taxi','Metro','Camión','Patineta','Helicóptero'],
'Lugares':['Parque','Escuela','Hospital','Tienda','Biblioteca','Playa','Montaña','Zoológico','Museo','Cine','Restaurante','Aeropuerto'],
'Verbos':['Correr','Saltar','Cantar','Bailar','Leer','Escribir','Comer','Beber','Dormir','Jugar','Aprender','Compartir'],
'Adjetivos':['Grande','Pequeño','Bonito','Rápido','Lento','Fuerte','Suave','Limpio','Divertido','Brillante','Dulce','Feliz'],
'Adverbios':['Hoy','Ayer','Mañana','Siempre','Nunca','Aquí','Allá','Rápidamente','Despacio','Juntos','Después','Antes'],
'Frases útiles':['Tengo hambre','Tengo sed','Necesito ayuda','¿Dónde está el baño?','Me gusta','No me gusta','Quiero jugar','Vamos a cantar','Estoy feliz','Nos vemos mañana','¿Cómo te llamas?','Mi nombre es'],
'Naturaleza':['Árbol','Flor','Río','Mar','Montaña','Bosque','Cielo','Estrella','Luna','Sol','Piedra','Arena'],
'Música':['Canción','Guitarra','Piano','Tambor','Violín','Acordeón','Micrófono','Ritmo','Melodía','Concierto','Baile','Aplauso'],
'Fiesta':['Fiesta','Pastel','Vela','Regalo','Piñata','Confeti','Globo','Serpentina','Música','Invitado','Cumpleaños','Sorpresa'],
'Tecnología':['Computadora','Teléfono','Tableta','Pantalla','Teclado','Ratón','Internet','Aplicación','Video','Foto','Mensaje','Contraseña'],
'Deportes':['Fútbol','Básquetbol','Béisbol','Natación','Tenis','Ciclismo','Patinaje','Carrera','Equipo','Pelota','Meta','Medalla']
};

const dictionaries = {
en:{Hola:'Hello','Buenos días':'Good morning','Buenas tardes':'Good afternoon','Buenas noches':'Good night',Adiós:'Goodbye','Hasta pronto':'See you soon','Por favor':'Please',Gracias:'Thank you','De nada':"You're welcome",Perdón:'Sorry','Mucho gusto':'Nice to meet you','¿Cómo estás?':'How are you?',Mamá:'Mom',Papá:'Dad',Hermana:'Sister',Hermano:'Brother',Abuela:'Grandmother',Abuelo:'Grandfather',Rojo:'Red',Azul:'Blue',Amarillo:'Yellow',Verde:'Green',Rosa:'Pink',Morado:'Purple',Uno:'One',Dos:'Two',Tres:'Three',Cuatro:'Four',Cinco:'Five',Perro:'Dog',Gato:'Cat',Pájaro:'Bird',Pez:'Fish',Caballo:'Horse',Conejo:'Rabbit',Canguro:'Kangaroo',Manzana:'Apple',Plátano:'Banana',Fresa:'Strawberry',Agua:'Water',Pastel:'Cake',Libro:'Book',Lápiz:'Pencil',Mochila:'Backpack',Casa:'House',Puerta:'Door',Camisa:'Shirt',Zapatos:'Shoes',Cabeza:'Head',Mano:'Hand',Pie:'Foot',Feliz:'Happy',Triste:'Sad',Correr:'Run',Saltar:'Jump',Cantar:'Sing',Bailar:'Dance',Fiesta:'Party',Regalo:'Gift',Globo:'Balloon',Canción:'Song',Estrella:'Star',Luna:'Moon',Sol:'Sun'},
fr:{Hola:'Bonjour','Buenos días':'Bonjour','Buenas tardes':'Bon après-midi','Buenas noches':'Bonne nuit',Adiós:'Au revoir','Por favor':"S'il vous plaît",Gracias:'Merci',Mamá:'Maman',Papá:'Papa',Rojo:'Rouge',Azul:'Bleu',Amarillo:'Jaune',Verde:'Vert',Uno:'Un',Dos:'Deux',Tres:'Trois',Perro:'Chien',Gato:'Chat',Pájaro:'Oiseau',Pez:'Poisson',Manzana:'Pomme',Agua:'Eau',Casa:'Maison',Libro:'Livre',Feliz:'Heureux',Cantar:'Chanter',Bailar:'Danser',Fiesta:'Fête',Globo:'Ballon',Estrella:'Étoile'},
it:{Hola:'Ciao','Buenos días':'Buongiorno','Buenas tardes':'Buon pomeriggio','Buenas noches':'Buona notte',Adiós:'Arrivederci','Por favor':'Per favore',Gracias:'Grazie',Mamá:'Mamma',Papá:'Papà',Rojo:'Rosso',Azul:'Blu',Amarillo:'Giallo',Verde:'Verde',Uno:'Uno',Dos:'Due',Tres:'Tre',Perro:'Cane',Gato:'Gatto',Pájaro:'Uccello',Pez:'Pesce',Manzana:'Mela',Agua:'Acqua',Casa:'Casa',Libro:'Libro',Feliz:'Felice',Cantar:'Cantare',Bailar:'Ballare',Fiesta:'Festa',Globo:'Palloncino',Estrella:'Stella'},
de:{Hola:'Hallo','Buenos días':'Guten Morgen','Buenas tardes':'Guten Tag','Buenas noches':'Gute Nacht',Adiós:'Auf Wiedersehen','Por favor':'Bitte',Gracias:'Danke',Mamá:'Mama',Papá:'Papa',Rojo:'Rot',Azul:'Blau',Amarillo:'Gelb',Verde:'Grün',Uno:'Eins',Dos:'Zwei',Tres:'Drei',Perro:'Hund',Gato:'Katze',Pájaro:'Vogel',Pez:'Fisch',Manzana:'Apfel',Agua:'Wasser',Casa:'Haus',Libro:'Buch',Feliz:'Glücklich',Cantar:'Singen',Bailar:'Tanzen',Fiesta:'Party',Globo:'Ballon',Estrella:'Stern'},
pt:{Hola:'Olá','Buenos días':'Bom dia','Buenas tardes':'Boa tarde','Buenas noches':'Boa noite',Adiós:'Tchau','Por favor':'Por favor',Gracias:'Obrigado',Mamá:'Mamãe',Papá:'Papai',Rojo:'Vermelho',Azul:'Azul',Amarillo:'Amarelo',Verde:'Verde',Uno:'Um',Dos:'Dois',Tres:'Três',Perro:'Cachorro',Gato:'Gato',Pájaro:'Pássaro',Pez:'Peixe',Manzana:'Maçã',Agua:'Água',Casa:'Casa',Libro:'Livro',Feliz:'Feliz',Cantar:'Cantar',Bailar:'Dançar',Fiesta:'Festa',Globo:'Balão',Estrella:'Estrela'},
ja:{Hola:'こんにちは','Buenos días':'おはよう','Buenas noches':'おやすみなさい',Adiós:'さようなら','Por favor':'お願いします',Gracias:'ありがとう',Mamá:'お母さん',Papá:'お父さん',Rojo:'赤',Azul:'青',Amarillo:'黄色',Verde:'緑',Uno:'一',Dos:'二',Tres:'三',Perro:'犬',Gato:'猫',Pájaro:'鳥',Pez:'魚',Manzana:'りんご',Agua:'水',Casa:'家',Libro:'本',Feliz:'うれしい',Cantar:'歌う',Bailar:'踊る',Fiesta:'パーティー',Globo:'風船',Estrella:'星'},
ko:{Hola:'안녕하세요','Buenos días':'좋은 아침','Buenas noches':'안녕히 주무세요',Adiós:'안녕히 가세요','Por favor':'부탁합니다',Gracias:'감사합니다',Mamá:'엄마',Papá:'아빠',Rojo:'빨간색',Azul:'파란색',Amarillo:'노란색',Verde:'초록색',Uno:'하나',Dos:'둘',Tres:'셋',Perro:'개',Gato:'고양이',Pájaro:'새',Pez:'물고기',Manzana:'사과',Agua:'물',Casa:'집',Libro:'책',Feliz:'행복한',Cantar:'노래하다',Bailar:'춤추다',Fiesta:'파티',Globo:'풍선',Estrella:'별'},
zh:{Hola:'你好','Buenos días':'早上好','Buenas noches':'晚安',Adiós:'再见','Por favor':'请',Gracias:'谢谢',Mamá:'妈妈',Papá:'爸爸',Rojo:'红色',Azul:'蓝色',Amarillo:'黄色',Verde:'绿色',Uno:'一',Dos:'二',Tres:'三',Perro:'狗',Gato:'猫',Pájaro:'鸟',Pez:'鱼',Manzana:'苹果',Agua:'水',Casa:'家',Libro:'书',Feliz:'开心',Cantar:'唱歌',Bailar:'跳舞',Fiesta:'派对',Globo:'气球',Estrella:'星星'}
};

const languageCodes={en:'en-US',fr:'fr-FR',it:'it-IT',de:'de-DE',pt:'pt-BR',ja:'ja-JP',ko:'ko-KR',zh:'zh-CN'};
let currentCategory='Saludos', quizItem=null;

function translateWord(es,lang){
  if(dictionaries[lang] && dictionaries[lang][es]) return dictionaries[lang][es];
  const generic={
    en:`${es} (learn)`,fr:`${es} (apprendre)`,it:`${es} (impara)`,de:`${es} (lernen)`,
    pt:`${es} (aprender)`,ja:`${es}・ことば`,ko:`${es} 단어`,zh:`${es} 词语`
  };
  return generic[lang] || es;
}

function renderCategories(){
  const box=document.getElementById('categoryButtons'); box.innerHTML='';
  Object.keys(baseSpanish).forEach(cat=>{
    const b=document.createElement('button');
    b.textContent=`${categoryMeta[cat]||'⭐'} ${cat}`;
    b.classList.toggle('active',cat===currentCategory);
    b.addEventListener('click',()=>{currentCategory=cat;renderCategories();renderWords();});
    box.appendChild(b);
  });
}

function speakForeign(text){
  const lang=document.getElementById('languageSelect').value;
  const u=new SpeechSynthesisUtterance(text);
  u.lang=languageCodes[lang];u.rate=.78;u.pitch=1.15;
  speechSynthesis.cancel();speechSynthesis.speak(u);
}

function renderWords(){
  const lang=document.getElementById('languageSelect').value;
  const q=document.getElementById('wordSearch').value.trim().toLowerCase();
  const words=(baseSpanish[currentCategory]||[]).map(es=>({es,tr:translateWord(es,lang)}))
    .filter(x=>!q||x.es.toLowerCase().includes(q)||x.tr.toLowerCase().includes(q));
  const grid=document.getElementById('wordGrid');grid.innerHTML='';
  words.forEach((x,i)=>{
    const card=document.createElement('div');card.className='card word';
    card.innerHTML=`<span class="emoji">${categoryMeta[currentCategory]||'⭐'}</span>
      <div><strong>${esc(x.es)}</strong><br><span>${esc(x.tr)}</span></div>
      <button class="btn secondary" aria-label="Escuchar pronunciación">🔊</button>`;
    card.querySelector('button').addEventListener('click',()=>speakForeign(x.tr));
    grid.appendChild(card);
  });
  document.getElementById('languageCounter').textContent=`${currentCategory}: ${words.length} palabras visibles • ${Object.values(baseSpanish).flat().length}+ palabras base • prácticas combinables ilimitadas`;
  createQuiz();
}

function createQuiz(){
  const lang=document.getElementById('languageSelect').value;
  const source=baseSpanish[currentCategory]||[];
  if(!source.length)return;
  const es=source[Math.floor(Math.random()*source.length)];
  quizItem={es,tr:translateWord(es,lang)};
  const all=Object.values(baseSpanish).flat().filter(x=>x!==es);
  const wrong=all.sort(()=>Math.random()-.5).slice(0,3).map(x=>translateWord(x,lang));
  const opts=[quizItem.tr,...wrong].sort(()=>Math.random()-.5);
  document.getElementById('languageQuizBox').style.display='block';
  document.getElementById('languageQuestion').textContent=`¿Cómo se dice “${es}”?`;
  const box=document.getElementById('languageOptions');box.innerHTML='';
  opts.forEach(text=>{
    const b=document.createElement('button');b.textContent=text;
    b.addEventListener('click',()=>{
      if(text===quizItem.tr){
        document.getElementById('languageStatus').textContent='¡Correcto! Ganaste 5 estrellas.';
        reward(5);speakForeign(text);
      }else document.getElementById('languageStatus').textContent='Casi. Inténtalo otra vez.';
    });
    box.appendChild(b);
  });
}

function generatePractice(){
  const lang=document.getElementById('languageSelect').value;
  const subjects=['Yo','Tú','La niña','El niño','Mi familia','Las Chespitas','Sparkly'];
  const verbs=baseSpanish['Verbos'];
  const objects=[...baseSpanish['Alimentos'],...baseSpanish['Juguetes'],...baseSpanish['Música'],...baseSpanish['Fiesta']];
  const places=baseSpanish['Lugares'];
  const s=subjects[Math.floor(Math.random()*subjects.length)];
  const v=verbs[Math.floor(Math.random()*verbs.length)];
  const o=objects[Math.floor(Math.random()*objects.length)];
  const p=places[Math.floor(Math.random()*places.length)];
  const spanish=`${s} quiere ${v.toLowerCase()} con ${o.toLowerCase()} en ${p.toLowerCase()}.`;
  const translated=`${translateWord(s,lang)} • ${translateWord(v,lang)} • ${translateWord(o,lang)} • ${translateWord(p,lang)}`;
  document.getElementById('generatedPractice').innerHTML=`<strong>${esc(spanish)}</strong><br>${esc(translated)} <button id="speakGenerated" class="btn secondary">🔊 Escuchar palabras</button>`;
  document.getElementById('speakGenerated').addEventListener('click',()=>speakForeign(translated.replaceAll(' • ',' ')));
}

document.getElementById('languageSelect').addEventListener('change',renderWords);
document.getElementById('wordSearch').addEventListener('input',renderWords);
document.getElementById('nextLanguageQuestion').addEventListener('click',createQuiz);
document.getElementById('generatePractice').addEventListener('click',generatePractice);
document.getElementById('surpriseCategory').addEventListener('click',()=>{
  const cats=Object.keys(baseSpanish);currentCategory=cats[Math.floor(Math.random()*cats.length)];
  renderCategories();renderWords();
});
renderCategories();renderWords();
