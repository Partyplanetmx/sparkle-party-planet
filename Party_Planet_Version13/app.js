
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

const languageNames={"en": ["Inglés", "en-US"], "fr": ["Francés", "fr-FR"], "de": ["Alemán", "de-DE"], "it": ["Italiano", "it-IT"], "pt": ["Portugués", "pt-BR"], "ja": ["Japonés", "ja-JP"], "ko": ["Coreano", "ko-KR"], "zh": ["Chino mandarín", "zh-CN"], "ru": ["Ruso", "ru-RU"], "ar": ["Árabe", "ar-SA"], "hi": ["Hindi", "hi-IN"]};
const languageWords=[{"emoji": "👋", "category": "saludos", "es": "hola", "en": "hello", "fr": "bonjour", "de": "hallo", "it": "ciao", "pt": "olá", "ja": "こんにちは", "ko": "안녕하세요", "zh": "你好", "ru": "привет", "ar": "مرحبا", "hi": "नमस्ते"}, {"emoji": "👋", "category": "saludos", "es": "adiós", "en": "goodbye", "fr": "au revoir", "de": "auf Wiedersehen", "it": "arrivederci", "pt": "tchau", "ja": "さようなら", "ko": "안녕히 가세요", "zh": "再见", "ru": "до свидания", "ar": "مع السلامة", "hi": "अलविदा"}, {"emoji": "🙏", "category": "saludos", "es": "por favor", "en": "please", "fr": "s'il vous plaît", "de": "bitte", "it": "per favore", "pt": "por favor", "ja": "お願いします", "ko": "부탁합니다", "zh": "请", "ru": "пожалуйста", "ar": "من فضلك", "hi": "कृपया"}, {"emoji": "💖", "category": "saludos", "es": "gracias", "en": "thank you", "fr": "merci", "de": "danke", "it": "grazie", "pt": "obrigado", "ja": "ありがとう", "ko": "감사합니다", "zh": "谢谢", "ru": "спасибо", "ar": "شكرا", "hi": "धन्यवाद"}, {"emoji": "🏠", "category": "hogar", "es": "casa", "en": "house", "fr": "maison", "de": "Haus", "it": "casa", "pt": "casa", "ja": "家", "ko": "집", "zh": "房子", "ru": "дом", "ar": "منزل", "hi": "घर"}, {"emoji": "🚪", "category": "hogar", "es": "puerta", "en": "door", "fr": "porte", "de": "Tür", "it": "porta", "pt": "porta", "ja": "ドア", "ko": "문", "zh": "门", "ru": "дверь", "ar": "باب", "hi": "दरवाज़ा"}, {"emoji": "🪟", "category": "hogar", "es": "ventana", "en": "window", "fr": "fenêtre", "de": "Fenster", "it": "finestra", "pt": "janela", "ja": "窓", "ko": "창문", "zh": "窗户", "ru": "окно", "ar": "نافذة", "hi": "खिड़की"}, {"emoji": "🛏️", "category": "hogar", "es": "cama", "en": "bed", "fr": "lit", "de": "Bett", "it": "letto", "pt": "cama", "ja": "ベッド", "ko": "침대", "zh": "床", "ru": "кровать", "ar": "سرير", "hi": "बिस्तर"}, {"emoji": "🐶", "category": "animales", "es": "perro", "en": "dog", "fr": "chien", "de": "Hund", "it": "cane", "pt": "cachorro", "ja": "犬", "ko": "개", "zh": "狗", "ru": "собака", "ar": "كلب", "hi": "कुत्ता"}, {"emoji": "🐱", "category": "animales", "es": "gato", "en": "cat", "fr": "chat", "de": "Katze", "it": "gatto", "pt": "gato", "ja": "猫", "ko": "고양이", "zh": "猫", "ru": "кошка", "ar": "قطة", "hi": "बिल्ली"}, {"emoji": "🦁", "category": "animales", "es": "león", "en": "lion", "fr": "lion", "de": "Löwe", "it": "leone", "pt": "leão", "ja": "ライオン", "ko": "사자", "zh": "狮子", "ru": "лев", "ar": "أسد", "hi": "शेर"}, {"emoji": "🐘", "category": "animales", "es": "elefante", "en": "elephant", "fr": "éléphant", "de": "Elefant", "it": "elefante", "pt": "elefante", "ja": "象", "ko": "코끼리", "zh": "大象", "ru": "слон", "ar": "فيل", "hi": "हाथी"}, {"emoji": "🍎", "category": "comida", "es": "manzana", "en": "apple", "fr": "pomme", "de": "Apfel", "it": "mela", "pt": "maçã", "ja": "りんご", "ko": "사과", "zh": "苹果", "ru": "яблоко", "ar": "تفاحة", "hi": "सेब"}, {"emoji": "🍌", "category": "comida", "es": "plátano", "en": "banana", "fr": "banane", "de": "Banane", "it": "banana", "pt": "banana", "ja": "バナナ", "ko": "바나나", "zh": "香蕉", "ru": "банан", "ar": "موز", "hi": "केला"}, {"emoji": "🍞", "category": "comida", "es": "pan", "en": "bread", "fr": "pain", "de": "Brot", "it": "pane", "pt": "pão", "ja": "パン", "ko": "빵", "zh": "面包", "ru": "хлеб", "ar": "خبز", "hi": "रोटी"}, {"emoji": "💧", "category": "comida", "es": "agua", "en": "water", "fr": "eau", "de": "Wasser", "it": "acqua", "pt": "água", "ja": "水", "ko": "물", "zh": "水", "ru": "вода", "ar": "ماء", "hi": "पानी"}, {"emoji": "🔴", "category": "colores", "es": "rojo", "en": "red", "fr": "rouge", "de": "rot", "it": "rosso", "pt": "vermelho", "ja": "赤", "ko": "빨강", "zh": "红色", "ru": "красный", "ar": "أحمر", "hi": "लाल"}, {"emoji": "🔵", "category": "colores", "es": "azul", "en": "blue", "fr": "bleu", "de": "blau", "it": "blu", "pt": "azul", "ja": "青", "ko": "파랑", "zh": "蓝色", "ru": "синий", "ar": "أزرق", "hi": "नीला"}, {"emoji": "🟡", "category": "colores", "es": "amarillo", "en": "yellow", "fr": "jaune", "de": "gelb", "it": "giallo", "pt": "amarelo", "ja": "黄色", "ko": "노랑", "zh": "黄色", "ru": "жёлтый", "ar": "أصفر", "hi": "पीला"}, {"emoji": "🟢", "category": "colores", "es": "verde", "en": "green", "fr": "vert", "de": "grün", "it": "verde", "pt": "verde", "ja": "緑", "ko": "초록", "zh": "绿色", "ru": "зелёный", "ar": "أخضر", "hi": "हरा"}, {"emoji": "1️⃣", "category": "numeros", "es": "uno", "en": "one", "fr": "un", "de": "eins", "it": "uno", "pt": "um", "ja": "一", "ko": "하나", "zh": "一", "ru": "один", "ar": "واحد", "hi": "एक"}, {"emoji": "2️⃣", "category": "numeros", "es": "dos", "en": "two", "fr": "deux", "de": "zwei", "it": "due", "pt": "dois", "ja": "二", "ko": "둘", "zh": "二", "ru": "два", "ar": "اثنان", "hi": "दो"}, {"emoji": "3️⃣", "category": "numeros", "es": "tres", "en": "three", "fr": "trois", "de": "drei", "it": "tre", "pt": "três", "ja": "三", "ko": "셋", "zh": "三", "ru": "три", "ar": "ثلاثة", "hi": "तीन"}, {"emoji": "4️⃣", "category": "numeros", "es": "cuatro", "en": "four", "fr": "quatre", "de": "vier", "it": "quattro", "pt": "quatro", "ja": "四", "ko": "넷", "zh": "四", "ru": "четыре", "ar": "أربعة", "hi": "चार"}, {"emoji": "5️⃣", "category": "numeros", "es": "cinco", "en": "five", "fr": "cinq", "de": "fünf", "it": "cinque", "pt": "cinco", "ja": "五", "ko": "다섯", "zh": "五", "ru": "пять", "ar": "خمسة", "hi": "पाँच"}, {"emoji": "😀", "category": "emociones", "es": "feliz", "en": "happy", "fr": "heureux", "de": "glücklich", "it": "felice", "pt": "feliz", "ja": "うれしい", "ko": "행복한", "zh": "开心", "ru": "счастливый", "ar": "سعيد", "hi": "खुश"}, {"emoji": "😢", "category": "emociones", "es": "triste", "en": "sad", "fr": "triste", "de": "traurig", "it": "triste", "pt": "triste", "ja": "悲しい", "ko": "슬픈", "zh": "伤心", "ru": "грустный", "ar": "حزين", "hi": "उदास"}, {"emoji": "😮", "category": "emociones", "es": "sorprendido", "en": "surprised", "fr": "surpris", "de": "überrascht", "it": "sorpreso", "pt": "surpreso", "ja": "びっくり", "ko": "놀란", "zh": "惊讶", "ru": "удивлённый", "ar": "متفاجئ", "hi": "हैरान"}, {"emoji": "👨‍👩‍👧", "category": "familia", "es": "familia", "en": "family", "fr": "famille", "de": "Familie", "it": "famiglia", "pt": "família", "ja": "家族", "ko": "가족", "zh": "家庭", "ru": "семья", "ar": "عائلة", "hi": "परिवार"}, {"emoji": "👩", "category": "familia", "es": "mamá", "en": "mom", "fr": "maman", "de": "Mama", "it": "mamma", "pt": "mamãe", "ja": "お母さん", "ko": "엄마", "zh": "妈妈", "ru": "мама", "ar": "أمي", "hi": "माँ"}, {"emoji": "👨", "category": "familia", "es": "papá", "en": "dad", "fr": "papa", "de": "Papa", "it": "papà", "pt": "papai", "ja": "お父さん", "ko": "아빠", "zh": "爸爸", "ru": "папа", "ar": "أبي", "hi": "पिता"}, {"emoji": "☀️", "category": "naturaleza", "es": "sol", "en": "sun", "fr": "soleil", "de": "Sonne", "it": "sole", "pt": "sol", "ja": "太陽", "ko": "태양", "zh": "太阳", "ru": "солнце", "ar": "شمس", "hi": "सूरज"}, {"emoji": "🌙", "category": "naturaleza", "es": "luna", "en": "moon", "fr": "lune", "de": "Mond", "it": "luna", "pt": "lua", "ja": "月", "ko": "달", "zh": "月亮", "ru": "луна", "ar": "قمر", "hi": "चाँद"}, {"emoji": "⭐", "category": "naturaleza", "es": "estrella", "en": "star", "fr": "étoile", "de": "Stern", "it": "stella", "pt": "estrela", "ja": "星", "ko": "별", "zh": "星星", "ru": "звезда", "ar": "نجمة", "hi": "तारा"}, {"emoji": "🌳", "category": "naturaleza", "es": "árbol", "en": "tree", "fr": "arbre", "de": "Baum", "it": "albero", "pt": "árvore", "ja": "木", "ko": "나무", "zh": "树", "ru": "дерево", "ar": "شجرة", "hi": "पेड़"}, {"emoji": "🏫", "category": "escuela", "es": "escuela", "en": "school", "fr": "école", "de": "Schule", "it": "scuola", "pt": "escola", "ja": "学校", "ko": "학교", "zh": "学校", "ru": "школа", "ar": "مدرسة", "hi": "स्कूल"}, {"emoji": "📘", "category": "escuela", "es": "libro", "en": "book", "fr": "livre", "de": "Buch", "it": "libro", "pt": "livro", "ja": "本", "ko": "책", "zh": "书", "ru": "книга", "ar": "كتاب", "hi": "किताब"}, {"emoji": "✏️", "category": "escuela", "es": "lápiz", "en": "pencil", "fr": "crayon", "de": "Bleistift", "it": "matita", "pt": "lápis", "ja": "鉛筆", "ko": "연필", "zh": "铅笔", "ru": "карандаш", "ar": "قلم رصاص", "hi": "पेंसिल"}, {"emoji": "🚗", "category": "transporte", "es": "carro", "en": "car", "fr": "voiture", "de": "Auto", "it": "auto", "pt": "carro", "ja": "車", "ko": "자동차", "zh": "汽车", "ru": "машина", "ar": "سيارة", "hi": "कार"}, {"emoji": "🚲", "category": "transporte", "es": "bicicleta", "en": "bicycle", "fr": "vélo", "de": "Fahrrad", "it": "bicicletta", "pt": "bicicleta", "ja": "自転車", "ko": "자전거", "zh": "自行车", "ru": "велосипед", "ar": "دراجة", "hi": "साइकिल"}, {"emoji": "✈️", "category": "transporte", "es": "avión", "en": "airplane", "fr": "avion", "de": "Flugzeug", "it": "aereo", "pt": "avião", "ja": "飛行機", "ko": "비행기", "zh": "飞机", "ru": "самолёт", "ar": "طائرة", "hi": "हवाई जहाज़"}];
let visibleWords=12;
let currentDaily=null;

function initLanguages(){
 const ls=document.getElementById('languageSelect'),cs=document.getElementById('categorySelect');
 ls.innerHTML=Object.entries(languageNames).map(([k,v])=>`<option value="${k}">${v[0]}</option>`).join('');
 cs.innerHTML='<option value="all">Todas las categorías</option>'+["animales", "colores", "comida", "emociones", "escuela", "familia", "hogar", "naturaleza", "numeros", "saludos", "transporte"].map(c=>`<option value="${c}">${c[0].toUpperCase()+c.slice(1)}</option>`).join('');
 renderLanguageWords();randomWord(false);
}
function filteredLanguageWords(){
 const lang=document.getElementById('languageSelect').value;
 const cat=document.getElementById('categorySelect').value;
 const q=document.getElementById('wordSearch').value.trim().toLowerCase();
 return languageWords.filter(w=>(cat==='all'||w.category===cat)&&(!q||w.es.toLowerCase().includes(q)||String(w[lang]).toLowerCase().includes(q)));
}
function renderLanguageWords(){
 visibleWords=12;
 const lang=document.getElementById('languageSelect').value;
 const words=filteredLanguageWords();
 document.getElementById('languageStats').textContent=`${words.length} palabras disponibles · ${languageNames[lang][0]}`;
 document.getElementById('wordGrid').innerHTML=words.slice(0,visibleWords).map((w,i)=>`<article class="word-card"><div class="emoji">${w.emoji}</div><h4>${w.es}</h4><p>${w[lang]}</p><button onclick="speakLanguageWord(${i})">🔊 Escuchar</button></article>`).join('') || '<div class="card">No encontramos esa palabra. Prueba otra búsqueda.</div>';
 randomWord(false);
}
function speakText(text,locale){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=locale;u.rate=.78;u.pitch=1.18;speechSynthesis.speak(u)}
function speakLanguageWord(index){
 const lang=document.getElementById('languageSelect').value,w=filteredLanguageWords()[index];if(w)speakText(w[lang],languageNames[lang][1]);
}
function loadMoreWords(){
 visibleWords+=12;const lang=document.getElementById('languageSelect').value,words=filteredLanguageWords();
 document.getElementById('wordGrid').innerHTML=words.slice(0,visibleWords).map((w,i)=>`<article class="word-card"><div class="emoji">${w.emoji}</div><h4>${w.es}</h4><p>${w[lang]}</p><button onclick="speakLanguageWord(${i})">🔊 Escuchar</button></article>`).join('');
}
function randomWord(speakIt=true){
 const lang=document.getElementById('languageSelect').value,words=filteredLanguageWords();if(!words.length)return;
 currentDaily=words[Math.floor(Math.random()*words.length)];
 document.getElementById('dailyNative').textContent=currentDaily.es;
 document.getElementById('dailyTranslation').textContent=currentDaily[lang];
 if(speakIt)speakText(currentDaily[lang],languageNames[lang][1]);
}
function speakDailyWord(){if(currentDaily){const lang=document.getElementById('languageSelect').value;speakText(currentDaily[lang],languageNames[lang][1]);}}
function startLanguageQuiz(){
 const lang=document.getElementById('languageSelect').value,words=filteredLanguageWords();if(words.length<4)return toast('Elige una categoría con más palabras');
 const correct=words[Math.floor(Math.random()*words.length)];
 const wrong=words.filter(w=>w!==correct).sort(()=>Math.random()-.5).slice(0,3);
 const options=[correct,...wrong].sort(()=>Math.random()-.5);
 const q=document.getElementById('languageQuiz');q.style.display='block';
 q.innerHTML=`<h3>¿Cómo se dice “${correct.es}” en ${languageNames[lang][0]}?</h3><div class="quiz-options">${options.map(o=>`<button onclick="${o===correct?`award(3,'¡Palabra correcta!');startLanguageQuiz()`:`toast('Intenta otra vez')`}">${o[lang]}</button>`).join('')}</div>`;
 q.scrollIntoView({behavior:'smooth'});
}

renderMusic();updateStats();initLanguages();
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{})}
