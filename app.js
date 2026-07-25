
let db, songs=[], recordings=[], mediaRecorder, chunks=[], karaokeTimer, deferredPrompt, quizState=null, memoryState=null;
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

function go(id){
  $$('.screen').forEach(x=>x.classList.remove('active'));
  $('#'+id).classList.add('active');
  $$('.menu-btn').forEach(x=>x.classList.toggle('active',x.dataset.screen===id));
  if(id==='padres') updateParentSummary();
  scrollTo(0,0);
}
$$('.menu-btn').forEach(b=>b.onclick=()=>b.dataset.screen==='padres'?openParentGate():go(b.dataset.screen));

function lesson(t,x){
  $('#modalTitle').textContent=t; $('#modalText').textContent='Repite cantando: '+x;
  $('#modal').classList.add('open');
  if(localStorage.voiceEnabled!=='false' && 'speechSynthesis'in window){
    speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(x);u.lang='es-MX';u.rate=.82;u.pitch=1.18;speechSynthesis.speak(u)
  }
}
function closeModal(){ $('#modal').classList.remove('open') }
function addStars(n){
  const s=+(localStorage.stars||125)+n; localStorage.stars=s;
  localStorage.activities=+(localStorage.activities||0)+1; updateStats()
}
function updateStats(){
  const s=+(localStorage.stars||125);
  $$('[data-stars]').forEach(x=>x.textContent=s);
  $$('[data-level]').forEach(x=>x.textContent=Math.floor(s/50)+1);
  $$('.achievement').forEach(x=>x.classList.toggle('locked',s<+x.dataset.need));
}

const req=indexedDB.open('SparklyV5',2);
req.onupgradeneeded=e=>{
  db=e.target.result;
  if(!db.objectStoreNames.contains('songs')) db.createObjectStore('songs',{keyPath:'id',autoIncrement:true});
  if(!db.objectStoreNames.contains('recordings')) db.createObjectStore('recordings',{keyPath:'id',autoIncrement:true});
};
req.onsuccess=e=>{db=e.target.result;loadSongs();loadRecordings()};

$('#audioInput').onchange=e=>{
  [...e.target.files].forEach(file=>{
    if(file.size>50*1024*1024){alert('Cada canción debe pesar menos de 50 MB.');return}
    const tx=db.transaction('songs','readwrite');
    tx.objectStore('songs').add({name:file.name,blob:file,size:file.size,favorite:false,lyrics:''});
    tx.oncomplete=loadSongs
  }); e.target.value=''
};
function loadSongs(){
  if(!db)return;
  const r=db.transaction('songs','readonly').objectStore('songs').getAll();
  r.onsuccess=()=>{songs=r.result;renderSongs()}
}
function renderSongs(){
  const q=($('#songSearch')?.value||'').toLowerCase(), filter=$('#songFilter')?.value||'all';
  const filtered=songs.filter(s=>s.name.toLowerCase().includes(q)&&(filter==='all'||s.favorite));
  const row=s=>`<div class="song">
    <b>🎵 ${escapeHtml(s.name)}</b><small>${(s.size/1024/1024).toFixed(1)} MB</small>
    <button onclick="playSongById(${s.id})">▶</button>
    <button class="fav-btn ${s.favorite?'active':''}" onclick="toggleFavorite(${s.id})">⭐</button>
    <button onclick="deleteSong(${s.id})">🗑️</button></div>`;
  $('#songList').innerHTML=filtered.map(row).join('')||'<p>Todavía no hay canciones.</p>';
  $('#libraryList').innerHTML=songs.map(row).join('')||'<p>Todavía no hay canciones.</p>';
  $('#karaokeSelect').innerHTML='<option value="">Selecciona una canción</option>'+songs.map(s=>`<option value="${s.id}">${escapeHtml(s.name)}</option>`).join('');
}
$('#songSearch')?.addEventListener('input',renderSongs); $('#songFilter')?.addEventListener('change',renderSongs);
function playSongById(id){const s=songs.find(x=>x.id===id);if(!s)return;const a=new Audio(URL.createObjectURL(s.blob));a.volume=+($('#volumeControl')?.value||1);a.play()}
function toggleFavorite(id){const s=songs.find(x=>x.id===id);if(!s)return;s.favorite=!s.favorite;const tx=db.transaction('songs','readwrite');tx.objectStore('songs').put(s);tx.oncomplete=renderSongs}
function deleteSong(id){if(!confirm('¿Eliminar esta canción?'))return;const tx=db.transaction('songs','readwrite');tx.objectStore('songs').delete(id);tx.oncomplete=loadSongs}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}

function selectedSong(){return songs.find(s=>s.id===+$('#karaokeSelect').value)}
function defaultLyrics(){return ['Brilla, brilla, Chespita','con tu luz de corazón','canta, juega y da una vuelta','llena todo de ilusión','Sparkly llega sonriendo','y comienza la función']}
function startKaraoke(){
  const s=selectedSong(); if(!s){alert('Selecciona una canción');return}
  const player=$('#karaokePlayer'); player.src=URL.createObjectURL(s.blob);player.volume=+($('#volumeControl')?.value||1);player.play();
  const lines=(s.lyrics||'').split('\n').map(x=>x.trim()).filter(Boolean); const use=lines.length?lines:defaultLyrics();
  $('#lyrics').innerHTML=use.map(x=>`<div>${escapeHtml(x)}</div>`).join('');
  let i=0; const ds=$$('#lyrics div'); ds[0]?.classList.add('active-line');clearInterval(karaokeTimer);
  const interval=Math.max(1800,(player.duration&&isFinite(player.duration)?player.duration*1000/use.length:2500));
  karaokeTimer=setInterval(()=>{ds.forEach(x=>x.classList.remove('active-line'));i++;if(i>=ds.length){clearInterval(karaokeTimer);addStars(5);return}ds[i].classList.add('active-line')},interval)
}
function stopKaraoke(){clearInterval(karaokeTimer);$('#karaokePlayer').pause();$('#karaokePlayer').currentTime=0}
function showLyricsEditor(){const s=selectedSong();if(!s){alert('Selecciona una canción');return}$('#lyricsEditor').value=s.lyrics||defaultLyrics().join('\n');$('#lyricsModal').classList.add('open')}
function closeLyricsEditor(){$('#lyricsModal').classList.remove('open')}
function saveLyrics(){const s=selectedSong();if(!s)return;s.lyrics=$('#lyricsEditor').value;const tx=db.transaction('songs','readwrite');tx.objectStore('songs').put(s);tx.oncomplete=()=>{closeLyricsEditor();alert('Letra guardada')}}
function toggleInstrumental(){const p=$('#karaokePlayer');p.playbackRate=p.playbackRate===1?.85:1;alert(p.playbackRate===1?'Modo normal':'Modo ensayo lento')}

async function toggleRecord(){
  const btn=$('#recordBtn'),status=$('#recordStatus');
  if(mediaRecorder&&mediaRecorder.state==='recording'){mediaRecorder.stop();btn.textContent='🎙️ GRABAR VOZ';btn.classList.remove('recording-pulse');status.textContent='Guardando…';return}
  try{
    const stream=await navigator.mediaDevices.getUserMedia({audio:true});chunks=[];mediaRecorder=new MediaRecorder(stream);
    mediaRecorder.ondataavailable=e=>chunks.push(e.data);
    mediaRecorder.onstop=()=>{const blob=new Blob(chunks,{type:'audio/webm'});const tx=db.transaction('recordings','readwrite');tx.objectStore('recordings').add({name:'Grabación '+new Date().toLocaleString('es-MX'),blob,size:blob.size});tx.oncomplete=loadRecordings;stream.getTracks().forEach(t=>t.stop());status.textContent='Grabación guardada'};
    mediaRecorder.start();btn.textContent='⏹️ DETENER';btn.classList.add('recording-pulse');status.textContent='Grabando…'
  }catch(e){alert('Autoriza el micrófono en el navegador')}
}
function loadRecordings(){if(!db)return;const r=db.transaction('recordings','readonly').objectStore('recordings').getAll();r.onsuccess=()=>{recordings=r.result;renderRecordings()}}
function renderRecordings(){
  $('#recordList').innerHTML=recordings.map(r=>`<div class="record-item"><b>${escapeHtml(r.name)}</b><button onclick="playRecording(${r.id})">▶</button><button onclick="downloadRecording(${r.id})">⬇️</button><button onclick="deleteRecording(${r.id})">🗑️</button></div>`).join('')||'<p>No hay grabaciones.</p>'
}
function playRecording(id){const r=recordings.find(x=>x.id===id);new Audio(URL.createObjectURL(r.blob)).play()}
function downloadRecording(id){const r=recordings.find(x=>x.id===id),a=document.createElement('a');a.href=URL.createObjectURL(r.blob);a.download=r.name+'.webm';a.click()}
function deleteRecording(id){const tx=db.transaction('recordings','readwrite');tx.objectStore('recordings').delete(id);tx.oncomplete=loadRecordings}

const quizData={
 vocales:{q:'¿Cuál es una vocal?',a:['A','B','M','T'],ok:0,say:'Busca la vocal A'},
 numeros:{q:'¿Qué número viene después del 2?',a:['1','3','5','8'],ok:1,say:'Busca el número tres'},
 colores:{q:'¿Cuál es el color del sol?',a:['Azul','Amarillo','Morado','Negro'],ok:1,say:'Busca amarillo'},
 animales:{q:'¿Cuál animal dice miau?',a:['León','Gato','Perro','Pato'],ok:1,say:'Busca el gato'},
 figuras:{q:'¿Cuál tiene tres lados?',a:['Círculo','Cuadrado','Triángulo','Estrella'],ok:2,say:'Busca el triángulo'},
 emociones:{q:'¿Cómo te sientes cuando sonríes?',a:['Feliz','Enojado','Asustado','Dormido'],ok:0,say:'Busca feliz'}
};
function startQuiz(type){quizState={...quizData[type],type};renderQuiz();lesson('Escucha',quizState.say)}
function renderQuiz(){$('#quizBox').innerHTML=`<h2>${quizState.q}</h2><div class="quiz-options">${quizState.a.map((x,i)=>`<button onclick="answerQuiz(${i})">${x}</button>`).join('')}</div>`}
function answerQuiz(i){if(i===quizState.ok){$('#quizBox').innerHTML='<h2>🎉 ¡Muy bien!</h2>';addStars(3)}else{$('#quizBox').insertAdjacentHTML('beforeend','<p>Inténtalo otra vez.</p>')}}

function startStarGame(){
  let score=0,time=15;$('#gameArea').innerHTML=`<h2>Atrapa 10 estrellas</h2><p id="gameScore">0 / 10</p><button id="starTarget" class="star-target">⭐</button><p id="gameTime">15 segundos</p>`;
  const target=$('#starTarget');target.onclick=()=>{score++;$('#gameScore').textContent=score+' / 10';target.style.marginLeft=(Math.random()*65-30)+'%';if(score>=10){addStars(10);$('#gameArea').innerHTML='<h2>🏆 ¡Ganaste 10 estrellas!</h2>'}};
  const t=setInterval(()=>{time--;if($('#gameTime'))$('#gameTime').textContent=time+' segundos';if(time<=0){clearInterval(t);if(score<10)$('#gameArea').innerHTML='<h2>Se terminó el tiempo. ¡Inténtalo nuevamente!</h2>'}},1000)
}
function startMemoryGame(){
  const vals=['🌈','🐯','⭐','🎵','🌈','🐯','⭐','🎵'].sort(()=>Math.random()-.5);memoryState={vals,open:[],done:[]};
  $('#gameArea').innerHTML='<h2>Encuentra las parejas</h2><div class="memory-grid">'+vals.map((v,i)=>`<button class="memory-card" id="mc${i}" onclick="flipCard(${i})">${v}</button>`).join('')+'</div>'
}
function flipCard(i){
  if(memoryState.open.includes(i)||memoryState.done.includes(i)||memoryState.open.length===2)return;
  memoryState.open.push(i);$('#mc'+i).classList.add('open');
  if(memoryState.open.length===2){const[a,b]=memoryState.open;if(memoryState.vals[a]===memoryState.vals[b]){memoryState.done.push(a,b);$('#mc'+a).classList.add('done');$('#mc'+b).classList.add('done');memoryState.open=[];if(memoryState.done.length===8){addStars(8);$('#gameArea').insertAdjacentHTML('beforeend','<h2>🎉 ¡Memoria completa!</h2>')}}else setTimeout(()=>{$('#mc'+a).classList.remove('open');$('#mc'+b).classList.remove('open');memoryState.open=[]},800)}
}
function startSongGuess(){if(!songs.length){$('#gameArea').innerHTML='<h2>Primero sube una canción.</h2>';return}const s=songs[Math.floor(Math.random()*songs.length)];const a=new Audio(URL.createObjectURL(s.blob));a.currentTime=0;a.play();setTimeout(()=>a.pause(),5000);$('#gameArea').innerHTML=`<h2>Escucha 5 segundos</h2><input id="guessInput" placeholder="Nombre de la canción"><button class="big-pink" onclick="checkSongGuess(${s.id})">RESPONDER</button>`}
function checkSongGuess(id){const s=songs.find(x=>x.id===id),g=$('#guessInput').value.toLowerCase();if(s.name.toLowerCase().includes(g)&&g.length>2){$('#gameArea').innerHTML='<h2>🎉 ¡Correcto!</h2>';addStars(5)}else $('#gameArea').insertAdjacentHTML('beforeend',`<p>Era: ${escapeHtml(s.name)}</p>`)}

function openParentGate(){$('#pinInput').value='';$('#pinModal').classList.add('open')}
function closePin(){$('#pinModal').classList.remove('open')}
function verifyPin(){if($('#pinInput').value===(localStorage.parentPin||'1234')){closePin();go('padres')}else alert('PIN incorrecto')}
function savePin(){const p=$('#newPin').value;if(!/^\d{4}$/.test(p)){alert('Escribe 4 números');return}localStorage.parentPin=p;$('#newPin').value='';alert('PIN actualizado')}
function saveProfile(){localStorage.childName=$('#childName').value;localStorage.childAge=$('#childAge').value;alert('Perfil guardado');updateParentSummary()}
function updateParentSummary(){$('#childName').value=localStorage.childName||'';$('#childAge').value=localStorage.childAge||'';$('#safeMode').checked=localStorage.safeMode!=='false';$('#voiceEnabled').checked=localStorage.voiceEnabled!=='false';$('#parentSummary').innerHTML=`Nombre: <b>${escapeHtml(localStorage.childName||'Sin nombre')}</b><br>Edad: <b>${localStorage.childAge||'Sin registrar'}</b><br>Estrellas: <b>${localStorage.stars||125}</b><br>Actividades completadas: <b>${localStorage.activities||0}</b><br>Canciones guardadas: <b>${songs.length}</b><br>Grabaciones: <b>${recordings.length}</b>`}
$('#safeMode')?.addEventListener('change',e=>localStorage.safeMode=e.target.checked);
$('#voiceEnabled')?.addEventListener('change',e=>localStorage.voiceEnabled=e.target.checked);
function resetProgress(){if(confirm('¿Reiniciar estrellas y actividades?')){localStorage.stars=0;localStorage.activities=0;updateStats();updateParentSummary()}}

function printDiploma(){const name=localStorage.childName||'Pequeña Estrella',stars=localStorage.stars||125;const w=window.open('','_blank');w.document.write(`<html><body style="font-family:Arial;text-align:center;padding:70px;border:20px solid #7a28df"><h1 style="font-size:52px;color:#e51a7a">DIPLOMA SPARKLY PARTY PLANET</h1><h2>Se otorga a</h2><h1 style="font-size:60px">${escapeHtml(name)}</h1><p style="font-size:28px">por aprender, cantar y divertirse, logrando ${stars} estrellas.</p><div style="font-size:100px">⭐🏆⭐</div><p>Party Planet — Donde la fiesta comienza</p><script>window.print()<\/script></body></html>`);w.document.close()}

$('#volumeControl')?.addEventListener('input',e=>{$('#karaokePlayer').volume=+e.target.value;localStorage.volume=e.target.value});
function toggleCompact(){document.body.classList.toggle('compact');localStorage.compact=document.body.classList.contains('compact')}
function exportData(){const data={childName:localStorage.childName,childAge:localStorage.childAge,stars:localStorage.stars,activities:localStorage.activities,parentPin:localStorage.parentPin,safeMode:localStorage.safeMode,voiceEnabled:localStorage.voiceEnabled};const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));a.download='respaldo-sparkly-v5.json';a.click()}
$('#importData')?.addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);Object.entries(d).forEach(([k,v])=>v!=null&&(localStorage[k]=v));location.reload()}catch{alert('Archivo no válido')}};r.readAsText(f)});

window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').hidden=false});
$('#installBtn')?.addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').hidden=true});

if(localStorage.compact==='true')document.body.classList.add('compact');
$('#volumeControl').value=localStorage.volume||1; updateStats();
if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
