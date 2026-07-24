
let db, uploaded=[], mediaRecorder, chunks=[], lyricTimer=null;
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

$$('.nav').forEach(b=>b.addEventListener('click',()=>showScreen(b.dataset.screen)));

function showScreen(id){
  $$('.screen').forEach(s=>s.classList.remove('active'));
  $('#'+id).classList.add('active');
  $$('.nav').forEach(b=>b.classList.toggle('active',b.dataset.screen===id));
  window.scrollTo({top:0,behavior:'smooth'});
}
function openModal(title,text,url=''){
  $('#modalTitle').textContent=title; $('#modalText').textContent=text;
  const p=$('#player'); p.src=url; p.style.display=url?'block':'none';
  $('#modal').classList.add('open');
}
function closeModal(){const p=$('#player');p.pause();$('#modal').classList.remove('open')}
function speak(text){if('speechSynthesis'in window){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='es-MX';u.rate=.82;u.pitch=1.22;speechSynthesis.speak(u)}}
function lesson(title,text){openModal(title,'Repite cantando: '+text);speak(text)}
function addStars(n=3){let s=Number(localStorage.getItem('stars')||0)+n;localStorage.setItem('stars',s);updateStats();closeModal()}
function updateStats(){const s=Number(localStorage.getItem('stars')||0);$$('[data-stars]').forEach(x=>x.textContent=s);$$('[data-level]').forEach(x=>x.textContent=Math.floor(s/20)+1)}
function demoSong(name){openModal(name,'Aquí podrás colocar la pista oficial y sincronizar la letra. También puedes usar el modo karaoke de demostración.')}

const req=indexedDB.open('SparklyPartyPlanetV3',1);
req.onupgradeneeded=e=>{db=e.target.result;if(!db.objectStoreNames.contains('songs'))db.createObjectStore('songs',{keyPath:'id',autoIncrement:true});if(!db.objectStoreNames.contains('recordings'))db.createObjectStore('recordings',{keyPath:'id',autoIncrement:true})};
req.onsuccess=e=>{db=e.target.result;loadSongs();loadRecordings()};

$('#fileInput').addEventListener('change',e=>{
 [...e.target.files].forEach(file=>{
   const tx=db.transaction('songs','readwrite');
   tx.objectStore('songs').add({name:file.name,size:file.size,type:file.type,blob:file});
   tx.oncomplete=loadSongs;
 }); e.target.value='';
});
function loadSongs(){if(!db)return;const r=db.transaction('songs','readonly').objectStore('songs').getAll();r.onsuccess=()=>{uploaded=r.result;renderSongs()}}
function renderSongs(){
 const list=$('#songList');list.innerHTML='';
 if(!uploaded.length){list.innerHTML='<div style="text-align:center;padding:12px">Todavía no has subido canciones.</div>';return}
 uploaded.forEach(song=>{
  const row=document.createElement('div');row.className='song-row';
  row.innerHTML=`<b>🎵 ${escapeHtml(song.name)}</b><span>${(song.size/1024/1024).toFixed(1)} MB</span><button class="circle">▶</button><button class="circle">🗑️</button>`;
  row.children[2].onclick=()=>openModal(song.name,'Canción guardada en este dispositivo.',URL.createObjectURL(song.blob));
  row.children[3].onclick=()=>deleteSong(song.id);
  list.appendChild(row);
 })
}
function deleteSong(id){if(!confirm('¿Borrar esta canción?'))return;const tx=db.transaction('songs','readwrite');tx.objectStore('songs').delete(id);tx.oncomplete=loadSongs}

const demoLyrics=[
 'Brilla, brilla, Chespita',
 'con tu luz de corazón',
 'canta, juega y da una vuelta',
 'llena todo de ilusión',
 'Sparkly llega sonriendo',
 'y comienza la función'
];
function startKaraoke(){
 clearInterval(lyricTimer);
 const box=$('#lyrics');box.innerHTML=demoLyrics.map((x,i)=>`<div class="lyric-line" data-i="${i}">${x}</div>`).join('');
 let i=0;$$('.lyric-line').forEach(x=>x.classList.remove('active'));$$('.lyric-line')[0].classList.add('active');
 lyricTimer=setInterval(()=>{i++;$$('.lyric-line').forEach(x=>x.classList.remove('active'));if(i>=demoLyrics.length){clearInterval(lyricTimer);addStars(5);return}$$('.lyric-line')[i].classList.add('active')},2500);
}
async function toggleRecord(){
 const btn=$('#recordBtn');
 if(mediaRecorder && mediaRecorder.state==='recording'){mediaRecorder.stop();btn.classList.remove('recording');btn.textContent='🎙️';$('#recordStatus').textContent='Grabación terminada';return}
 try{
  const stream=await navigator.mediaDevices.getUserMedia({audio:true});
  chunks=[];mediaRecorder=new MediaRecorder(stream);
  mediaRecorder.ondataavailable=e=>chunks.push(e.data);
  mediaRecorder.onstop=()=>{
    const blob=new Blob(chunks,{type:'audio/webm'});const tx=db.transaction('recordings','readwrite');
    tx.objectStore('recordings').add({name:'Grabación '+new Date().toLocaleString('es-MX'),blob,size:blob.size});
    tx.oncomplete=loadRecordings;stream.getTracks().forEach(t=>t.stop());
  };
  mediaRecorder.start();btn.classList.add('recording');btn.textContent='⏹️';$('#recordStatus').textContent='Grabando...';
 }catch(e){alert('El navegador necesita permiso para usar el micrófono.')}
}
function loadRecordings(){if(!db)return;const r=db.transaction('recordings','readonly').objectStore('recordings').getAll();r.onsuccess=()=>renderRecordings(r.result)}
function renderRecordings(items){const list=$('#recordingList');list.innerHTML=items.length?'':'<p>No hay grabaciones todavía.</p>';items.forEach(item=>{const row=document.createElement('div');row.className='song-row';row.innerHTML=`<b>🎤 ${escapeHtml(item.name)}</b><span>${(item.size/1024).toFixed(0)} KB</span><button class="circle">▶</button><button class="circle">🗑️</button>`;row.children[2].onclick=()=>openModal(item.name,'Tu grabación',URL.createObjectURL(item.blob));row.children[3].onclick=()=>{const tx=db.transaction('recordings','readwrite');tx.objectStore('recordings').delete(item.id);tx.oncomplete=loadRecordings};list.appendChild(row)})}
function saveProfile(){localStorage.setItem('childName',$('#childName').value||'Pequeña estrella');$('#profileName').textContent=localStorage.getItem('childName');alert('Perfil guardado')}
function loadProfile(){const n=localStorage.getItem('childName')||'Pequeña estrella';$('#profileName').textContent=n;$('#childName').value=n}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
updateStats();loadProfile();
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
