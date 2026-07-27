
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
