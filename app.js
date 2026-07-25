
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

const languageData={
"en-US":{name:"Inglés",words:[["👋","Hello","Hola"],["🙏","Thank you","Gracias"],["😊","Happy","Feliz"],["⭐","Star","Estrella"],["🎵","Music","Música"],["🎂","Birthday","Cumpleaños"],["❤️","Friend","Amigo"],["🌈","Colors","Colores"]],phrases:[["Hello!","¡Hola!"],["My name is Sparkly.","Mi nombre es Sparkly."],["How are you?","¿Cómo estás?"],["I am happy!","¡Estoy feliz!"],["Let’s sing together!","¡Cantemos juntos!"]],song:["Hello, hello, how are you?","I am happy, yes I am!","Clap your hands and sing with me,","Sparkly friends for everyone!"]},
"fr-FR":{name:"Francés",words:[["👋","Bonjour","Hola"],["🙏","Merci","Gracias"],["😊","Heureux","Feliz"],["⭐","Étoile","Estrella"],["🎵","Musique","Música"],["🎂","Anniversaire","Cumpleaños"],["❤️","Ami","Amigo"],["🌈","Couleurs","Colores"]],phrases:[["Bonjour!","¡Hola!"],["Je m'appelle Sparkly.","Me llamo Sparkly."],["Comment ça va?","¿Cómo estás?"],["Je suis heureux!","¡Estoy feliz!"],["Chantons ensemble!","¡Cantemos juntos!"]],song:["Bonjour, bonjour, comment ça va?","Je suis heureux, me voilà!","Tape des mains et chante avec moi,","Les amis de Sparkly sont là!"]},
"it-IT":{name:"Italiano",words:[["👋","Ciao","Hola"],["🙏","Grazie","Gracias"],["😊","Felice","Feliz"],["⭐","Stella","Estrella"],["🎵","Musica","Música"],["🎂","Compleanno","Cumpleaños"],["❤️","Amico","Amigo"],["🌈","Colori","Colores"]],phrases:[["Ciao!","¡Hola!"],["Mi chiamo Sparkly.","Me llamo Sparkly."],["Come stai?","¿Cómo estás?"],["Sono felice!","¡Estoy feliz!"],["Cantiamo insieme!","¡Cantemos juntos!"]],song:["Ciao, ciao, come stai?","Sono felice, lo sai!","Batti le mani e canta con me,","Sparkly è amico di te!"]},
"pt-BR":{name:"Portugués",words:[["👋","Olá","Hola"],["🙏","Obrigado","Gracias"],["😊","Feliz","Feliz"],["⭐","Estrela","Estrella"],["🎵","Música","Música"],["🎂","Aniversário","Cumpleaños"],["❤️","Amigo","Amigo"],["🌈","Cores","Colores"]],phrases:[["Olá!","¡Hola!"],["Meu nome é Sparkly.","Mi nombre es Sparkly."],["Como você está?","¿Cómo estás?"],["Eu estou feliz!","¡Estoy feliz!"],["Vamos cantar juntos!","¡Cantemos juntos!"]],song:["Olá, olá, como vai?","Estou feliz, muito mais!","Bata palmas e cante também,","Com Sparkly tudo vai bem!"]},
"de-DE":{name:"Alemán",words:[["👋","Hallo","Hola"],["🙏","Danke","Gracias"],["😊","Glücklich","Feliz"],["⭐","Stern","Estrella"],["🎵","Musik","Música"],["🎂","Geburtstag","Cumpleaños"],["❤️","Freund","Amigo"],["🌈","Farben","Colores"]],phrases:[["Hallo!","¡Hola!"],["Ich heiße Sparkly.","Me llamo Sparkly."],["Wie geht es dir?","¿Cómo estás?"],["Ich bin glücklich!","¡Estoy feliz!"],["Lass uns zusammen singen!","¡Cantemos juntos!"]],song:["Hallo, hallo, wie geht es dir?","Ich bin glücklich, sing mit mir!","Klatsch in die Hände, eins, zwei, drei,","Sparkly-Freunde sind dabei!"]},
"ja-JP":{name:"Japonés",words:[["👋","こんにちは","Hola"],["🙏","ありがとう","Gracias"],["😊","うれしい","Feliz"],["⭐","ほし","Estrella"],["🎵","おんがく","Música"],["🎂","たんじょうび","Cumpleaños"],["❤️","ともだち","Amigo"],["🌈","いろ","Colores"]],phrases:[["こんにちは!","¡Hola!"],["わたしはスパークリーです。","Soy Sparkly."],["げんきですか?","¿Cómo estás?"],["うれしいです!","¡Estoy feliz!"],["いっしょにうたいましょう!","¡Cantemos juntos!"]],song:["こんにちは、こんにちは","いっしょにうたいましょう","てをたたいて、にこにこ","スパークリーとあそぼう"]},
"ko-KR":{name:"Coreano",words:[["👋","안녕하세요","Hola"],["🙏","감사합니다","Gracias"],["😊","행복해요","Feliz"],["⭐","별","Estrella"],["🎵","음악","Música"],["🎂","생일","Cumpleaños"],["❤️","친구","Amigo"],["🌈","색깔","Colores"]],phrases:[["안녕하세요!","¡Hola!"],["저는 스파클리예요.","Soy Sparkly."],["잘 지내요?","¿Cómo estás?"],["행복해요!","¡Estoy feliz!"],["같이 노래해요!","¡Cantemos juntos!"]],song:["안녕, 안녕, 반가워요","함께 노래 불러요","손뼉 치고 웃어 봐요","스파클리와 놀아요"]},
"zh-CN":{name:"Mandarín",words:[["👋","你好","Hola"],["🙏","谢谢","Gracias"],["😊","开心","Feliz"],["⭐","星星","Estrella"],["🎵","音乐","Música"],["🎂","生日","Cumpleaños"],["❤️","朋友","Amigo"],["🌈","颜色","Colores"]],phrases:[["你好!","¡Hola!"],["我叫 Sparkly。","Me llamo Sparkly."],["你好吗?","¿Cómo estás?"],["我很开心!","¡Estoy feliz!"],["我们一起唱歌吧!","¡Cantemos juntos!"]],song:["你好，你好，你好吗","我很开心一起唱","拍拍手呀笑一笑","Sparkly 朋友都来到"]}
};
let currentLang="en-US",currentPhraseIndex=0,languageQuestion=null;
function languagePack(){return languageData[currentLang]}
function renderLanguage(){
 const p=languagePack();
 $('#languageTitle').textContent='Palabras básicas en '+p.name;
 $('#songLanguageLabel').textContent=p.name;
 $('#wordGrid').innerHTML=p.words.map((w,i)=>`<div class="word-card"><div class="emoji">${w[0]}</div><h3>${w[1]}</h3><p>${w[2]}</p><button onclick="speakLanguageWord(${i})">🔊 ESCUCHAR</button></div>`).join('');
 $('#languageSongLyrics').innerHTML=p.song.map(x=>`<div>${escapeHtml(x)}</div>`).join('');
 currentPhraseIndex=0;renderPhrase();newLanguageQuestion();updateLanguageStars()
}
$$('.lang-card').forEach(b=>b.addEventListener('click',()=>{$$('.lang-card').forEach(x=>x.classList.remove('active'));b.classList.add('active');currentLang=b.dataset.lang;renderLanguage()}));
$$('.language-tab').forEach(b=>b.addEventListener('click',()=>{
 $$('.language-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');
 $$('.language-panel').forEach(x=>x.classList.remove('active'));
 $('#language'+b.dataset.languageTab.charAt(0).toUpperCase()+b.dataset.languageTab.slice(1)).classList.add('active')
}));
function speakText(text,lang=currentLang){if(!('speechSynthesis'in window)){alert('Este navegador no puede reproducir voz.');return}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=lang;u.rate=.78;u.pitch=1.08;speechSynthesis.speak(u)}
function speakLanguageWord(i){speakText(languagePack().words[i][1]);addLanguageStars(1)}
function renderPhrase(){const p=languagePack().phrases[currentPhraseIndex];$('#talkPhrase').textContent=p[0];$('#talkMeaning').textContent=p[1];$('#speechResult').textContent='Presiona el micrófono y repite la frase.'}
function speakCurrentPhrase(){speakText(languagePack().phrases[currentPhraseIndex][0])}
function nextPhrase(){currentPhraseIndex=(currentPhraseIndex+1)%languagePack().phrases.length;renderPhrase();speakCurrentPhrase()}
function previousPhrase(){currentPhraseIndex=(currentPhraseIndex-1+languagePack().phrases.length)%languagePack().phrases.length;renderPhrase();speakCurrentPhrase()}
function normalizeSpeech(s){return (s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^\p{L}\p{N}\s]/gu,'').trim()}
function startPronunciation(){
 const R=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!R){$('#speechResult').textContent='Prueba esta función en Chrome o Edge.';return}
 const r=new R();r.lang=currentLang;r.interimResults=false;r.maxAlternatives=3;$('#speechResult').textContent='🎙️ Escuchando…';
 r.onresult=e=>{const heard=e.results[0][0].transcript,target=languagePack().phrases[currentPhraseIndex][0],a=normalizeSpeech(heard),b=normalizeSpeech(target),words=b.split(/\s+/),m=words.filter(w=>a.includes(w)).length,score=Math.round(m/Math.max(words.length,1)*100);
 if(score>=70){$('#speechResult').innerHTML=`⭐ ¡Excelente! Escuché: <b>${escapeHtml(heard)}</b>`;addLanguageStars(5)}else{$('#speechResult').innerHTML=`💜 Escuché: <b>${escapeHtml(heard)}</b><br>Inténtalo otra vez.`}};
 r.onerror=()=>$('#speechResult').textContent='No pude escuchar. Revisa el permiso del micrófono.';r.start()
}
function newLanguageQuestion(){
 const p=languagePack(),ci=Math.floor(Math.random()*p.words.length),c=p.words[ci];let opts=[c[1]];
 while(opts.length<4){const x=p.words[Math.floor(Math.random()*p.words.length)][1];if(!opts.includes(x))opts.push(x)}
 opts.sort(()=>Math.random()-.5);languageQuestion={answer:c[1]};$('#languageQuestion').textContent=`¿Cómo se dice “${c[2]}” en ${p.name}?`;
 $('#languageOptions').innerHTML=opts.map(x=>`<button onclick="answerLanguage('${encodeURIComponent(x)}',this)">${x}</button>`).join('');$('#languageFeedback').innerHTML=''
}
function answerLanguage(v,btn){const x=decodeURIComponent(v);$$('#languageOptions button').forEach(b=>b.disabled=true);if(x===languageQuestion.answer){btn.classList.add('correct');$('#languageFeedback').innerHTML='<h2>🎉 ¡Correcto!</h2>';speakText(x);addLanguageStars(4)}else{btn.classList.add('wrong');$('#languageFeedback').innerHTML=`<h2>La respuesta era: ${escapeHtml(languageQuestion.answer)}</h2>`;speakText(languageQuestion.answer)}}
function singLanguageSong(){const l=languagePack().song;let i=0;speakText(l[i]);const t=setInterval(()=>{i++;if(i>=l.length){clearInterval(t);addLanguageStars(6);return}speakText(l[i])},2800)}
function addLanguageStars(n){localStorage.languageStars=+(localStorage.languageStars||0)+n;updateLanguageStars();addStars(n)}
function updateLanguageStars(){if($('#languageStars'))$('#languageStars').textContent=localStorage.languageStars||0}
renderLanguage();


// ===== MUNDO PARTY PLANET V8 =====
let v8Playlist='all',v8CurrentSongId=null,v8Videos=[],v8Drawings=[],currentStoryIndex=0,paintCtx=null,painting=false;
const v8Stories=[
 {icon:'⭐',title:'La estrellita que compartía su luz',value:'Compartir',text:'Había una vez una estrellita llamada Luma que brillaba sobre Party Planet. Una noche vio a una nube pequeña que tenía miedo de la oscuridad. Luma se acercó y compartió un poquito de su luz. La nube comprendió que cuando compartimos, nuestra alegría no se hace pequeña: se multiplica. Desde entonces, las dos iluminaban juntas el cielo y ayudaban a quien necesitara esperanza.'},
 {icon:'🐶',title:'Sparkly cuida a un perrito',value:'Cuidado de mascotas',text:'Sparkly encontró un perrito cansado cerca del jardín. Le dio agua, buscó a un adulto y preparó un lugar seguro para que descansara. Las Chespitas ayudaron a encontrar a su familia. Sparkly aprendió que las mascotas sienten, necesitan alimento, cariño, atención veterinaria y un hogar donde siempre sean respetadas.'},
 {icon:'🌈',title:'Las Chespitas y el arcoíris de la amistad',value:'Amistad',text:'Un día desaparecieron los colores de Party Planet. Cada Chespita tenía guardado un color, pero ninguno podía formar el arcoíris por sí solo. Cuando decidieron unirlos, el cielo volvió a llenarse de luz. Comprendieron que cada persona es diferente y que la amistad crece cuando respetamos y celebramos esas diferencias.'},
 {icon:'🌱',title:'El jardín de los buenos hábitos',value:'Responsabilidad',text:'En el jardín mágico, cada buen hábito hacía crecer una flor. Lavarse las manos, ordenar los juguetes, dormir temprano y hablar con respeto llenaban el jardín de colores. Sparkly descubrió que los pequeños hábitos de cada día pueden crear grandes cambios.'},
 {icon:'🎤',title:'La canción que tenía miedo de salir',value:'Confianza',text:'Una canción vivía escondida dentro de una cajita musical porque temía que a nadie le gustara. Las Chespitas la escucharon y le dijeron que su voz era única. Cuando la canción se atrevió a salir, todos comenzaron a cantar. Aprendió que ser valiente no significa no tener miedo, sino intentarlo a pesar del miedo.'},
 {icon:'🌎',title:'Un saludo alrededor del mundo',value:'Diversidad',text:'Sparkly viajó por muchos países y aprendió que las personas saludan de diferentes maneras. Escuchó hello, bonjour, ciao, olá, hallo, konnichiwa y ni hao. Aunque las palabras eran distintas, todas llevaban el mismo deseo: reconocer al otro con alegría y respeto.'}
];

const v8Missions=[
 {id:'language',icon:'🌍',title:'Practica un idioma',desc:'Gana al menos una estrella en Sparkly Idiomas',reward:5},
 {id:'song',icon:'🎵',title:'Escucha una canción',desc:'Reproduce una canción completa o empieza una',reward:4},
 {id:'story',icon:'📚',title:'Lee un cuento',desc:'Termina uno de los cuentos de Sparkly',reward:6},
 {id:'game',icon:'🎮',title:'Juega y aprende',desc:'Completa una actividad o juego',reward:5},
 {id:'drawing',icon:'🎨',title:'Crea un dibujo',desc:'Guarda una obra en el Taller de Arte',reward:7},
 {id:'karaoke',icon:'🎤',title:'Canta karaoke',desc:'Comienza una canción en Karaoke',reward:8}
];

function v8SongMeta(song){
 const n=(song.name||'').toLowerCase();
 let character='Party Planet',category='party';
 if(n.includes('chespita'))character='Chespitas';
 else if(n.includes('sparkly'))character='Sparkly';
 else if(n.includes('estrell'))character='Estrellita';
 else if(n.includes('cangur'))character='Cangurito';
 if(n.includes('vocal')||n.includes('número')||n.includes('color')||n.includes('aprende'))category='learn';
 return {character,category}
}
function setV8Playlist(p){v8Playlist=p;$$('.playlist-chip').forEach(x=>x.classList.remove('active'));event?.target?.classList.add('active');renderV8Music()}
function renderV8Music(){
 if(!$('#v8MusicGrid'))return;
 const q=($('#musicSearchV8')?.value||'').toLowerCase(),cf=$('#musicCharacterFilter')?.value||'all';
 let list=songs.filter(s=>s.name.toLowerCase().includes(q));
 list=list.filter(s=>{const m=v8SongMeta(s);return cf==='all'||m.character===cf});
 if(v8Playlist==='favorites')list=list.filter(s=>s.favorite);
 if(v8Playlist==='party')list=list.filter(s=>v8SongMeta(s).category==='party');
 if(v8Playlist==='learn')list=list.filter(s=>v8SongMeta(s).category==='learn');
 $('#v8MusicGrid').innerHTML=list.map(s=>{const m=v8SongMeta(s);return `<article class="v8-media-card">
  <div class="v8-media-cover">${m.character==='Chespitas'?'👭':m.character==='Sparkly'?'🟣':m.character==='Estrellita'?'⭐':m.character==='Cangurito'?'🦘':'🎵'}</div>
  <div class="v8-media-info"><h3>${escapeHtml(s.name)}</h3><p>${m.character} · ${m.category==='learn'?'Aprende':'Fiesta'}</p>
  <div class="v8-media-actions"><button onclick="playV8Song(${s.id})">▶ ESCUCHAR</button><button onclick="toggleFavorite(${s.id});setTimeout(renderV8Music,100)">⭐</button><button onclick="go('karaoke');setTimeout(()=>{$('#karaokeSelect').value='${s.id}'},100)">🎤</button></div></div></article>`}).join('')||'<div class="feature-card"><h2>Sube canciones para verlas aquí.</h2></div>'
}
$('#musicSearchV8')?.addEventListener('input',renderV8Music);
$('#musicCharacterFilter')?.addEventListener('change',renderV8Music);
function playV8Song(id){const s=songs.find(x=>x.id===id);if(!s)return;v8CurrentSongId=id;$('#v8NowTitle').textContent=s.name;$('#v8NowMeta').textContent=v8SongMeta(s).character;$('#v8Audio').src=URL.createObjectURL(s.blob);$('#v8Audio').play();completeMission('song')}
function toggleCurrentV8Favorite(){if(v8CurrentSongId){toggleFavorite(v8CurrentSongId);setTimeout(renderV8Music,100)}}
function shuffleV8Music(){if(!songs.length)return;playV8Song(songs[Math.floor(Math.random()*songs.length)].id)}
const oldRenderSongsV8=renderSongs;renderSongs=function(){oldRenderSongsV8();renderV8Music()};

function loadV8Videos(){
 if(!db)return;
 if(!db.objectStoreNames.contains('videos')){v8Videos=JSON.parse(localStorage.v8VideoMeta||'[]');renderV8Videos();return}
 const r=db.transaction('videos','readonly').objectStore('videos').getAll();r.onsuccess=()=>{v8Videos=r.result;renderV8Videos()}
}
async function saveLocalVideo(){
 const title=$('#videoTitleInput').value.trim(),type=$('#videoTypeInput').value,file=$('#videoFileInput').files[0];
 if(!title||!file){alert('Escribe un título y selecciona un video.');return}
 if(file.size>150*1024*1024){alert('El video debe pesar menos de 150 MB.');return}
 try{
   const db2=await openV8DB();const tx=db2.transaction('videos','readwrite');tx.objectStore('videos').add({title,type,blob:file,size:file.size,created:Date.now()});
   tx.oncomplete=()=>{$('#videoTitleInput').value='';$('#videoFileInput').value='';loadV8Videos()}
 }catch(e){alert('No se pudo guardar el video en este dispositivo.')}
}
function openV8DB(){return new Promise((res,rej)=>{const r=indexedDB.open('SparklyV8',1);r.onupgradeneeded=e=>{const d=e.target.result;if(!d.objectStoreNames.contains('videos'))d.createObjectStore('videos',{keyPath:'id',autoIncrement:true});if(!d.objectStoreNames.contains('drawings'))d.createObjectStore('drawings',{keyPath:'id',autoIncrement:true})};r.onsuccess=e=>res(e.target.result);r.onerror=()=>rej(r.error)})}
async function loadV8Videos(){try{const d=await openV8DB();const r=d.transaction('videos','readonly').objectStore('videos').getAll();r.onsuccess=()=>{v8Videos=r.result;renderV8Videos()}}catch(e){}}
function renderV8Videos(){if(!$('#videoGridV8'))return;$('#videoGridV8').innerHTML=v8Videos.map(v=>`<article class="v8-media-card"><div class="video-thumb">🎬</div><div class="v8-media-info"><h3>${escapeHtml(v.title)}</h3><p>${escapeHtml(v.type)} · ${(v.size/1024/1024).toFixed(1)} MB</p><div class="v8-media-actions"><button onclick="playVideoV8(${v.id})">▶ VER</button><button onclick="deleteVideoV8(${v.id})">🗑️</button></div></div></article>`).join('')||'<div class="feature-card"><h2>No hay videos guardados.</h2></div>'}
async function playVideoV8(id){const v=v8Videos.find(x=>x.id===id);if(!v)return;$('#videoPlayerV8').src=URL.createObjectURL(v.blob);$('#videoModalV8').classList.add('open');$('#videoPlayerV8').play()}
function closeVideoV8(){$('#videoPlayerV8').pause();$('#videoModalV8').classList.remove('open')}
async function deleteVideoV8(id){if(!confirm('¿Eliminar este video?'))return;const d=await openV8DB();const tx=d.transaction('videos','readwrite');tx.objectStore('videos').delete(id);tx.oncomplete=loadV8Videos}

function renderStories(){$('#storyGrid').innerHTML=v8Stories.map((s,i)=>`<article class="story-card"><div class="story-icon">${s.icon}</div><h3>${s.title}</h3><p>Valor: ${s.value}</p><button onclick="openStory(${i})">ABRIR CUENTO</button></article>`).join('')}
function openStory(i){currentStoryIndex=i;const s=v8Stories[i];$('#storyTitle').textContent=s.title;$('#storyText').textContent=s.text;scrollTo({top:$('#storyReader').offsetTop-20,behavior:'smooth'})}
function readStoryAloud(){const s=v8Stories[currentStoryIndex];if(!s)return;speakText(s.title+'. '+s.text,'es-MX')}
function stopStory(){if('speechSynthesis'in window)speechSynthesis.cancel()}
function completeStory(){completeMission('story');addStars(5);alert('⭐ ¡Ganaste 5 estrellas por terminar el cuento!')}

function initCanvasV8(){
 const c=$('#drawingCanvas');if(!c)return;paintCtx=c.getContext('2d');paintCtx.fillStyle='white';paintCtx.fillRect(0,0,c.width,c.height);paintCtx.lineCap='round';
 const pos=e=>{const r=c.getBoundingClientRect(),p=e.touches?e.touches[0]:e;return{x:(p.clientX-r.left)*c.width/r.width,y:(p.clientY-r.top)*c.height/r.height}};
 const start=e=>{painting=true;const p=pos(e);paintCtx.beginPath();paintCtx.moveTo(p.x,p.y);e.preventDefault()};
 const move=e=>{if(!painting)return;const p=pos(e);paintCtx.strokeStyle=$('#paintColor').value;paintCtx.lineWidth=+$('#paintSize').value;paintCtx.lineTo(p.x,p.y);paintCtx.stroke();e.preventDefault()};
 const end=()=>painting=false;
 c.addEventListener('mousedown',start);c.addEventListener('mousemove',move);addEventListener('mouseup',end);c.addEventListener('touchstart',start,{passive:false});c.addEventListener('touchmove',move,{passive:false});c.addEventListener('touchend',end)
}
function clearCanvasV8(){if(!paintCtx)return;paintCtx.fillStyle='white';paintCtx.fillRect(0,0,1000,600)}
function addSparklyStamp(){if(!paintCtx)return;paintCtx.font='110px serif';paintCtx.fillText('🟣',420,330)}
function addStarStamp(){if(!paintCtx)return;paintCtx.font='110px serif';paintCtx.fillText('⭐',420,330)}
async function saveDrawingV8(){const c=$('#drawingCanvas'),data=c.toDataURL('image/png');const d=await openV8DB();const tx=d.transaction('drawings','readwrite');tx.objectStore('drawings').add({data,created:Date.now()});tx.oncomplete=()=>{loadDrawingsV8();completeMission('drawing');addStars(7);alert('🎨 Dibujo guardado y 7 estrellas ganadas')}}
async function loadDrawingsV8(){try{const d=await openV8DB();const r=d.transaction('drawings','readonly').objectStore('drawings').getAll();r.onsuccess=()=>{v8Drawings=r.result;$('#savedDrawings').innerHTML=v8Drawings.map(x=>`<img src="${x.data}" alt="Dibujo guardado">`).join('')}}catch(e){}}

function missionKey(id){return 'v8Mission_'+new Date().toISOString().slice(0,10)+'_'+id}
function completeMission(id){if(localStorage[missionKey(id)])return;localStorage[missionKey(id)]='1';renderMissions()}
function claimMission(id,reward){if(!localStorage[missionKey(id)]){alert('Primero completa la misión.');return}const ck=missionKey(id)+'_claimed';if(localStorage[ck]){alert('Esta recompensa ya fue recogida.');return}localStorage[ck]='1';addStars(reward);renderMissions();alert(`🏅 Ganaste ${reward} estrellas`)}
function renderMissions(){if(!$('#missionGrid'))return;$('#missionGrid').innerHTML=v8Missions.map(m=>{const done=!!localStorage[missionKey(m.id)],claimed=!!localStorage[missionKey(m.id)+'_claimed'];return `<article class="mission-card ${done?'done':''}"><span>${m.icon}</span><h3>${m.title}</h3><p>${m.desc}</p><p>Recompensa: ⭐ ${m.reward}</p><button onclick="claimMission('${m.id}',${m.reward})">${claimed?'RECOGIDA':done?'RECOGER':'PENDIENTE'}</button></article>`}).join('')}
const oldAddLanguageStarsV8=addLanguageStars;addLanguageStars=function(n){oldAddLanguageStarsV8(n);completeMission('language')}
const oldAddStarsV8=addStars;addStars=function(n){oldAddStarsV8(n);if(n>0)completeMission('game')}
const oldStartKaraokeV8=startKaraoke;startKaraoke=function(){oldStartKaraokeV8();completeMission('karaoke')}

function saveV8ParentControls(){localStorage.dailyMinutes=$('#dailyMinutes').value;localStorage.videoPermission=$('#videoPermission').checked;localStorage.communityPermission=$('#communityPermission').checked;alert('Controles guardados')}
function updateV8ParentControls(){if(!$('#dailyMinutes'))return;$('#dailyMinutes').value=localStorage.dailyMinutes||45;$('#videoPermission').checked=localStorage.videoPermission==='true';$('#communityPermission').checked=localStorage.communityPermission==='true';$('#usageToday').textContent='Tiempo aproximado de uso hoy: '+Math.floor((Date.now()-(+(sessionStorage.v8Start||Date.now())))/60000)+' minutos'}
sessionStorage.v8Start=sessionStorage.v8Start||Date.now();
setInterval(updateV8ParentControls,30000);

const oldGoV8=go;go=function(id){oldGoV8(id);if(id==='mundoMusical')renderV8Music();if(id==='videos')loadV8Videos();if(id==='cuentos')renderStories();if(id==='arte'){setTimeout(initCanvasV8,100);loadDrawingsV8()}if(id==='misiones')renderMissions();if(id==='padres')updateV8ParentControls()};

renderStories();renderMissions();setTimeout(()=>{renderV8Music();loadV8Videos();loadDrawingsV8()},500);
