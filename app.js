
let db;let uploaded=[];
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);

$$('.nav').forEach(b=>b.addEventListener('click',()=>showScreen(b.dataset.screen)));

function showScreen(id){
  $$('.screen').forEach(s=>s.classList.remove('active'));
  $('#'+id).classList.add('active');
  $$('.nav').forEach(b=>b.classList.toggle('active',b.dataset.screen===id));
  window.scrollTo({top:0,behavior:'smooth'});
}
function openModal(title,text,url=''){
  $('#modalTitle').textContent=title;$('#modalText').textContent=text;
  const p=$('#player');p.src=url;p.style.display=url?'block':'none';
  $('#modal').classList.add('open');
}
function closeModal(){const p=$('#player');p.pause();$('#modal').classList.remove('open')}
function speak(text){if('speechSynthesis'in window){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='es-MX';u.rate=.82;u.pitch=1.22;speechSynthesis.speak(u)}}
function lesson(title,text){openModal(title,'Repite cantando: '+text);speak(text)}
function addStars(n=3){let s=Number(localStorage.getItem('stars')||0)+n;localStorage.setItem('stars',s);updateStats();closeModal()}
function updateStats(){const s=Number(localStorage.getItem('stars')||0);$$('[data-stars]').forEach(x=>x.textContent=s);$$('[data-level]').forEach(x=>x.textContent=Math.floor(s/20)+1)}
function demoSong(name){openModal(name,'Aquí podrás colocar la pista oficial y sincronizar la letra. Mientras tanto puedes subir el audio en “Mis canciones”.')}

const req=indexedDB.open('SparklyPartyPlanetV2',1);
req.onupgradeneeded=e=>{db=e.target.result;if(!db.objectStoreNames.contains('songs'))db.createObjectStore('songs',{keyPath:'id',autoIncrement:true})};
req.onsuccess=e=>{db=e.target.result;loadSongs()};
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
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
updateStats();
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
