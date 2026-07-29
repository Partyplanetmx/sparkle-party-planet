
const sections=[...document.querySelectorAll('.screen')];
let stars=Number(localStorage.getItem('pp_stars')||0);
let activities=Number(localStorage.getItem('pp_activities')||0);
const songs=[
 {title:'Bienvenidos a Party Planet',cat:'Bienvenida'},
 {title:'El Cangurito Bailarín',cat:'Baile'},
 {title:'Las Chespitas Ye Ye',cat:'Pop infantil'},
 {title:'La Estrellita de Party Planet',cat:'Balada'}
];
function updateStats(){
 document.querySelectorAll('#starCount,#rewardStars,#parentStars').forEach(e=>e.textContent=stars);
 document.getElementById('activityCount').textContent=activities;
}
function openSection(id){sections.forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');scrollTo(0,0);updateStats()}
function goHome(){openSection('home')}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
function award(n,msg){stars+=n;activities++;localStorage.setItem('pp_stars',stars);localStorage.setItem('pp_activities',activities);updateStats();toast(`${msg} +${n} ⭐`)}
function speak(text,pitch=1.25){speechSynthesis.cancel();let u=new SpeechSynthesisUtterance(text);u.lang='es-MX';u.pitch=pitch;u.rate=.9;speechSynthesis.speak(u)}
function speakWelcome(){speak('¡Hola! Bienvenidos a Party Planet. Soy Sparkly. Vamos a cantar, jugar, bailar y aprender juntos.');award(1,'¡Bienvenida escuchada!')}
function renderMusic(){const box=document.getElementById('musicList');box.innerHTML=songs.map((s,i)=>`<div class="song"><div><b>${s.title}</b><br><small>${s.cat}</small></div><button class="primary" onclick="demoSong(${i})">▶</button></div>`).join('')}
function demoSong(i){speak(`Próximamente podrás escuchar ${songs[i].title}. Agrega tu archivo de música en la carpeta de audios.`)}
let lyricTimer;
function startKaraoke(){clearInterval(lyricTimer);const lines=['Salta, salta, cangurito','mueve las patitas con emoción','gira, gira, da un brinquito','¡Party Planet es diversión!'];let i=0;const el=document.getElementById('lyrics');el.innerHTML='';lyricTimer=setInterval(()=>{el.innerHTML=lines.slice(0,i+1).map((x,j)=>j===i?`<b>${x}</b>`:x).join('<br>');speak(lines[i],1.35);i++;if(i===lines.length)clearInterval(lyricTimer)},1500)}
function startMemory(){
 const emojis=['⭐','🎈','🎤','🦘'];let arr=[...emojis,...emojis].sort(()=>Math.random()-.5),opened=[],done=[];
 gameArea.innerHTML=`<h3>Encuentra las parejas</h3><div class="memory">${arr.map((x,i)=>`<button id="m${i}" onclick="flip(${i},'${x}')">❓</button>`).join('')}</div>`;
 window.memoryData={arr,opened,done};
}
function flip(i,x){let d=memoryData;if(d.opened.includes(i)||d.done.includes(i))return;document.getElementById('m'+i).textContent=x;d.opened.push(i);if(d.opened.length===2){let[a,b]=d.opened;if(d.arr[a]===d.arr[b]){d.done.push(a,b);d.opened=[];if(d.done.length===d.arr.length)award(5,'¡Completaste el memorama!')}else setTimeout(()=>{document.getElementById('m'+a).textContent='❓';document.getElementById('m'+b).textContent='❓';d.opened=[]},700)}}
function startStars(){let hits=0;gameArea.innerHTML=`<h3>Atrapa 5 estrellas</h3><div id="hitText">0 de 5</div><button class="target-star" onclick="hitStar()">⭐</button>`;window.hitStar=()=>{hits++;document.getElementById('hitText').textContent=`${hits} de 5`;if(hits===5){award(4,'¡Atrapaste todas las estrellas!');startStars()}}}
function quiz(title,q,answers,correct,reward=2){gameArea.innerHTML=`<h3>${title}</h3><p style="font-size:28px">${q}</p><div class="choice">${answers.map((a,i)=>`<button onclick="${i===correct?`award(${reward},'¡Respuesta correcta!')`:`toast('Intenta otra vez')`}">${a}</button>`).join('')}</div>`}
function startNumbers(){quiz('Números','¿Cuánto es 2 + 3?',['4','5','6','7'],1)}
function startColors(){quiz('Colores','¿Cuál es el color del sol?',['Azul','Amarillo','Morado','Rosa'],1)}
function startLetters(){quiz('Vocales','¿Cuál de estas letras es una vocal?',['M','P','A','T'],2)}
function startDance(){gameArea.innerHTML='<h3>Sigue el ritmo</h3><p style="font-size:50px">👏 👏 🙌 💃</p><button class="primary" onclick="award(3,\'¡Seguiste el ritmo!\')">¡Lo hice!</button>';speak('Dos aplausos, manos arriba y a bailar')}
function lesson(type){
 const data={
 vocales:['Las vocales son A, E, I, O, U.','A E I O U'],
 numeros:['Vamos a contar: uno, dos, tres, cuatro, cinco.','1 2 3 4 5'],
 colores:['Rojo, azul, amarillo, verde y morado.','🔴 🔵 🟡 🟢 🟣'],
 valores:['Compartir, respetar y ayudar nos hace brillar.','🤝 💖 ⭐']
 };let d=data[type];lessonArea.innerHTML=`<h3>${d[1]}</h3><p>${d[0]}</p><button class="primary" onclick="speak('${d[0]}');award(2,'¡Lección completada!')">Escuchar y completar</button>`
}
function paint(c){document.getElementById('paintStar').style.color=c}
function readStory(){const p=document.querySelector('.story p').textContent;speak(p,1.15);award(2,'¡Escuchaste un cuento!')}
function parentGate(){let a=prompt('Área para adultos: ¿cuánto es 7 + 5?');if(a==='12')openSection('parents');else toast('Respuesta incorrecta')}
function resetProgress(){if(confirm('¿Deseas borrar las estrellas y actividades?')){stars=0;activities=0;localStorage.clear();updateStats();toast('Progreso reiniciado')}}
renderMusic();updateStats();
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{})}
