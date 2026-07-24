
let db,songs=[];const q=s=>document.querySelector(s),qa=s=>document.querySelectorAll(s);
qa('nav button').forEach(b=>b.onclick=()=>show(b.dataset.screen));
function show(id){qa('.screen').forEach(x=>x.classList.remove('active'));q('#'+id).classList.add('active');qa('nav button').forEach(x=>x.classList.toggle('active',x.dataset.screen===id));scrollTo(0,0)}
function modal(t,x,u=''){q('#mt').textContent=t;q('#mx').textContent=x;q('#player').src=u;q('#player').style.display=u?'block':'none';q('#modal').classList.add('open')}
function closeM(){q('#player').pause();q('#modal').classList.remove('open')}
function lesson(t,x){modal(t,'Repite cantando: '+x);if('speechSynthesis'in window){let u=new SpeechSynthesisUtterance(x);u.lang='es-MX';u.rate=.82;u.pitch=1.25;speechSynthesis.speak(u)}}
function stars(){let s=+(localStorage.stars||0)+3;localStorage.stars=s;stats();closeM()}
function stats(){let s=+(localStorage.stars||0);qa('[data-stars]').forEach(x=>x.textContent=s);qa('[data-level]').forEach(x=>x.textContent=Math.floor(s/20)+1)}
const r=indexedDB.open('SparklyDB',1);r.onupgradeneeded=e=>{db=e.target.result;db.createObjectStore('songs',{keyPath:'id',autoIncrement:true})};r.onsuccess=e=>{db=e.target.result;load()}
q('#file').onchange=e=>{[...e.target.files].forEach(f=>{let t=db.transaction('songs','readwrite');t.objectStore('songs').add({name:f.name,size:f.size,blob:f});t.oncomplete=load});e.target.value=''}
function load(){let t=db.transaction('songs','readonly').objectStore('songs').getAll();t.onsuccess=()=>{songs=t.result;render()}}
function render(){q('#list').innerHTML=songs.length?'':'<p style="text-align:center">Todavía no has subido canciones.</p>';songs.forEach(s=>{let d=document.createElement('div');d.className='song';d.innerHTML=`<b>🎵 ${s.name}</b><button>▶</button><button>🗑️</button>`;d.children[1].onclick=()=>modal(s.name,'Canción guardada en este dispositivo.',URL.createObjectURL(s.blob));d.children[2].onclick=()=>del(s.id);q('#list').appendChild(d)})}
function del(id){let t=db.transaction('songs','readwrite');t.objectStore('songs').delete(id);t.oncomplete=load}
stats();if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
