
const LANGS={"en": ["INGLÉS", "🇬🇧", "en-US"], "fr": ["FRANCÉS", "🇫🇷", "fr-FR"], "it": ["ITALIANO", "🇮🇹", "it-IT"], "de": ["ALEMÁN", "🇩🇪", "de-DE"], "pt": ["PORTUGUÉS", "🇧🇷", "pt-BR"], "ja": ["JAPONÉS", "🇯🇵", "ja-JP"], "ko": ["COREANO", "🇰🇷", "ko-KR"], "zh": ["CHINO", "🇨🇳", "zh-CN"]};
const CATS=[["saludos", "👋", "Saludos"], ["familia", "👨‍👩‍👧", "Familia"], ["colores", "🌈", "Colores"], ["numeros", "🔢", "Números"], ["animales", "🐯", "Animales"], ["alimentos", "🍎", "Alimentos"], ["frutas", "🍓", "Frutas"], ["escuela", "🎒", "Escuela"], ["casa", "🏠", "Casa"], ["ropa", "👕", "Ropa"], ["juguetes", "🧸", "Juguetes"], ["emociones", "😀", "Emociones"], ["clima", "🌤️", "Clima"], ["profesiones", "👷", "Profesiones"], ["transporte", "🚗", "Transporte"], ["verbos", "🏃", "Verbos"]];
const WORDS=[{"emoji": "👋", "category": "saludos", "es": "hola", "en": "hello", "fr": "bonjour", "it": "ciao", "de": "hallo", "pt": "olá", "ja": "こんにちは", "ko": "안녕하세요", "zh": "你好"}, {"emoji": "🙏", "category": "saludos", "es": "gracias", "en": "thank you", "fr": "merci", "it": "grazie", "de": "danke", "pt": "obrigado", "ja": "ありがとう", "ko": "감사합니다", "zh": "谢谢"}, {"emoji": "👨‍👩‍👧", "category": "familia", "es": "familia", "en": "family", "fr": "famille", "it": "famiglia", "de": "Familie", "pt": "família", "ja": "家族", "ko": "가족", "zh": "家庭"}, {"emoji": "🔴", "category": "colores", "es": "rojo", "en": "red", "fr": "rouge", "it": "rosso", "de": "rot", "pt": "vermelho", "ja": "赤", "ko": "빨강", "zh": "红色"}, {"emoji": "🔵", "category": "colores", "es": "azul", "en": "blue", "fr": "bleu", "it": "blu", "de": "blau", "pt": "azul", "ja": "青", "ko": "파랑", "zh": "蓝色"}, {"emoji": "1️⃣", "category": "numeros", "es": "uno", "en": "one", "fr": "un", "it": "uno", "de": "eins", "pt": "um", "ja": "一", "ko": "하나", "zh": "一"}, {"emoji": "2️⃣", "category": "numeros", "es": "dos", "en": "two", "fr": "deux", "it": "due", "de": "zwei", "pt": "dois", "ja": "二", "ko": "둘", "zh": "二"}, {"emoji": "🐶", "category": "animales", "es": "perro", "en": "dog", "fr": "chien", "it": "cane", "de": "Hund", "pt": "cachorro", "ja": "犬", "ko": "개", "zh": "狗"}, {"emoji": "🐱", "category": "animales", "es": "gato", "en": "cat", "fr": "chat", "it": "gatto", "de": "Katze", "pt": "gato", "ja": "猫", "ko": "고양이", "zh": "猫"}, {"emoji": "🍎", "category": "alimentos", "es": "manzana", "en": "apple", "fr": "pomme", "it": "mela", "de": "Apfel", "pt": "maçã", "ja": "りんご", "ko": "사과", "zh": "苹果"}, {"emoji": "🍓", "category": "frutas", "es": "fresa", "en": "strawberry", "fr": "fraise", "it": "fragola", "de": "Erdbeere", "pt": "morango", "ja": "いちご", "ko": "딸기", "zh": "草莓"}, {"emoji": "🎒", "category": "escuela", "es": "mochila", "en": "backpack", "fr": "sac à dos", "it": "zaino", "de": "Rucksack", "pt": "mochila", "ja": "リュック", "ko": "가방", "zh": "书包"}, {"emoji": "🏠", "category": "casa", "es": "casa", "en": "house", "fr": "maison", "it": "casa", "de": "Haus", "pt": "casa", "ja": "家", "ko": "집", "zh": "房子"}, {"emoji": "👕", "category": "ropa", "es": "camisa", "en": "shirt", "fr": "chemise", "it": "camicia", "de": "Hemd", "pt": "camisa", "ja": "シャツ", "ko": "셔츠", "zh": "衬衫"}, {"emoji": "🧸", "category": "juguetes", "es": "oso", "en": "teddy bear", "fr": "ours", "it": "orsacchiotto", "de": "Teddybär", "pt": "urso", "ja": "テディベア", "ko": "곰인형", "zh": "泰迪熊"}, {"emoji": "😀", "category": "emociones", "es": "feliz", "en": "happy", "fr": "heureux", "it": "felice", "de": "glücklich", "pt": "feliz", "ja": "うれしい", "ko": "행복한", "zh": "开心"}, {"emoji": "🌤️", "category": "clima", "es": "soleado", "en": "sunny", "fr": "ensoleillé", "it": "soleggiato", "de": "sonnig", "pt": "ensolarado", "ja": "晴れ", "ko": "맑음", "zh": "晴朗"}, {"emoji": "👩‍⚕️", "category": "profesiones", "es": "doctora", "en": "doctor", "fr": "médecin", "it": "dottoressa", "de": "Ärztin", "pt": "médica", "ja": "医者", "ko": "의사", "zh": "医生"}, {"emoji": "🚗", "category": "transporte", "es": "carro", "en": "car", "fr": "voiture", "it": "auto", "de": "Auto", "pt": "carro", "ja": "車", "ko": "자동차", "zh": "汽车"}, {"emoji": "🏃", "category": "verbos", "es": "correr", "en": "run", "fr": "courir", "it": "correre", "de": "laufen", "pt": "correr", "ja": "走る", "ko": "달리다", "zh": "跑"}];
let state={
  stars:Number(localStorage.pp16stars||1250),
  gems:Number(localStorage.pp16gems||35),
  learned:new Set(JSON.parse(localStorage.pp16learned||"[]")),
  favs:new Set(JSON.parse(localStorage.pp16favs||"[]")),
  lang:localStorage.pp16lang||"en",
  avatar:localStorage.pp16avatar||"👧🏻",
  color:"#ffd734"
};
const songs=["Bienvenidos a Party Planet","El Cangurito Bailarín","Las Chespitas Ye Ye","La Estrellita de Party Planet"];
const stories=[
  ["La fuente de las sonrisas","En el corazón de Party Planet, cada sonrisa encendía una chispa de luz. Las Chespitas descubrieron que compartir alegría hacía brillar todo el planeta."],
  ["El salto del Cangurito","El Cangurito Bailarín quería llegar hasta una estrella. Aprendió que con práctica, paciencia y amigos, cada salto podía llegar más alto."]
];
const events=[["🎂","Cumpleaños mágico","Crea una celebración especial"],["🎄","Navidad","Canciones y juegos navideños"],["🎃","Halloween","Disfraces y aventuras"],["🇲🇽","Fiesta mexicana","Música, colores y tradiciones"]];
function save(){localStorage.pp16stars=state.stars;localStorage.pp16gems=state.gems;localStorage.pp16learned=JSON.stringify([...state.learned]);localStorage.pp16favs=JSON.stringify([...state.favs]);localStorage.pp16lang=state.lang;localStorage.pp16avatar=state.avatar}
function sync(){starsTop.textContent=state.stars;gemsTop.textContent=state.gems}
function go(name){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));document.getElementById("screen-"+name).classList.add("active");document.querySelectorAll("#mainNav button").forEach(b=>b.classList.toggle("active",b.dataset.screen===name));render(name);scrollTo(0,0)}
function render(name){if(name==="home")renderHome();if(name==="karaoke")renderKaraoke();if(name==="stories")renderStories();if(name==="games")renderGames();if(name==="languages")renderLanguagesV27();if(name==="study")renderStudy();if(name==="color")renderColor();if(name==="avatar")renderAvatar();if(name==="music")renderMusicV22();if(name==="rewards")renderRewards();if(name==="store")renderStore();if(name==="events")renderEvents();if(name==="settings")renderSettings();if(name==="vip")renderVIP();if(name==="parents")renderParents();if(name==="admin")renderAdmin();if(name==="cloud")renderCloud();if(name==="analytics")renderAnalytics();if(name==="animals")renderAnimals();if(name==="puzzle")renderPuzzle();if(name==="syllables")renderSyllables();if(name==="piano")renderPiano();if(name==="musicgames")renderMusicGames();if(name==="math")renderMath();if(name==="snakes")renderSnakesV30();if(name==="profile")renderProfile31();if(name==="missions")renderMissions31();if(name==="universe")renderUniverse31();if(name==="pet")renderPet31();if(name==="moregames")renderMoreGames31();if(name==="storymaker")renderStoryMaker31();if(name==="studio")renderStudio31();if(name==="dance")renderDance31();if(name==="creativity")renderCreativity31();if(name==="calendar")renderCalendar31();if(name==="learningmode")renderLearningMode31()}
function title(icon,name,desc){return `<div class="screen-title"><div><h2>${icon} ${name}</h2><p>${desc}</p></div><span>⭐ ${state.stars}</span></div>`}
function renderHome(){
  document.getElementById("screen-home").innerHTML = `
    <section class="v25-home-top">
      <div class="home-logo-panel">
        <img src="assets/images/logo_party_planet_v25.png" alt="Party Planet">
      </div>
      <div class="home-welcome-card">
        <h2>¡Bienvenidos a Party Planet!</h2>
        <p>Aprende, canta y diviértete con Sparkly, Las Chespitas, Estrellita y el Cangurito Bailarín.</p>
        <div class="home-cta-row">
          <button class="v20-sing" onclick="go('karaoke')">🎤 ¡A CANTAR!</button>
          <button class="v20-learn" onclick="go('study')">🚀 ¡A APRENDER!</button>
          <button class="v20-vip" onclick="go('vip')">👑 HAZTE VIP</button>
        </div>
      </div>
    </section>

    <section class="v25-banner">
      <img src="assets/images/inicio_visual.png" alt="Party Planet con Sparkly, Las Chespitas y el Cangurito Bailarín">
      <button class="v25-overlay v25-parents" onclick="openParentGate()" aria-label="Para padres"></button>
      <button class="v25-overlay v25-wallet" onclick="go('rewards')" aria-label="Premios y recompensas"></button>
      <button class="v25-overlay v25-karaoke" onclick="go('karaoke')" aria-label="Abrir karaoke"></button>
      <button class="v25-overlay v25-languages" onclick="go('languages')" aria-label="Abrir idiomas"></button>
      <button class="v25-overlay v25-games" onclick="go('games')" aria-label="Abrir juegos"></button>
      <button class="v25-overlay v25-stories" onclick="go('stories')" aria-label="Abrir cuentos"></button>
      <button class="v25-overlay v25-color" onclick="go('color')" aria-label="Abrir colorea"></button>
      <button class="v25-overlay v25-avatar" onclick="go('avatar')" aria-label="Abrir personaliza"></button>
    </section>

    <section class="v25-activity-grid">
      <button class="v25-action-card pink" onclick="go('karaoke')"><span>🎤</span><b>Karaoke</b><small>Canta tus canciones</small></button>
      <button class="v25-action-card blue" onclick="go('stories')"><span>📚</span><b>Cuentos</b><small>Historias divertidas</small></button>
      <button class="v25-action-card purple" onclick="go('games')"><span>🎮</span><b>Juegos</b><small>Retos y diversión</small></button>
      <button class="v25-action-card green" onclick="go('languages')"><span>🌍</span><b>Idiomas</b><small>Aprende palabras</small></button>
      <button class="v25-action-card orange" onclick="go('color')"><span>🎨</span><b>Colorea</b><small>Pinta y crea</small></button>
      <button class="v25-action-card red" onclick="go('music')"><span>🎵</span><b>Música</b><small>Escucha y baila</small></button>
    </section>

    <section class="v26-learning-heading">
      <h3>🎉 Nuevos juegos educativos</h3>
      <p>Toca una actividad para comenzar.</p>
    </section>
    <section class="v26-learning-grid">
      <button onclick="go('animals')" class="v26-game-card animal-card"><span>🐶</span><b>Sonidos de animales</b><small>Escucha, reconoce y juega</small></button>
      <button onclick="go('puzzle')" class="v26-game-card puzzle-card"><span>🧩</span><b>Puzzle Kids</b><small>Arma el rompecabezas</small></button>
      <button onclick="go('syllables')" class="v26-game-card syllable-card"><span>🔤</span><b>Aprende a leer</b><small>Palabras por sílabas</small></button>
      <button onclick="go('piano')" class="v26-game-card piano-card"><span>🎹</span><b>Piano niño</b><small>Toca notas y canciones</small></button>
      <button onclick="go('musicgames')" class="v26-game-card music-card"><span>🎶</span><b>Juegos musicales</b><small>Ritmo, memoria y canciones</small></button>
      <button onclick="go('math')" class="v26-game-card math-card"><span>➕</span><b>Matemáticas</b><small>Suma, resta, multiplica y divide</small></button>
    </section>

    <section class="v31-mega-heading"><h3>🌟 Mega Universo Party Planet</h3><p>Personaliza, aprende, crea, canta, baila y completa misiones.</p></section><section class="v31-mega-grid"><button onclick="go('universe')"><span>🪐</span><b>Universo</b><small>Viaja entre planetas</small></button><button onclick="go('profile')"><span>👤</span><b>Mi perfil</b><small>Crea tu avatar</small></button><button onclick="go('missions')"><span>🎯</span><b>Misiones</b><small>Gana premios</small></button><button onclick="go('pet')"><span>🐣</span><b>Mascota</b><small>Cuídala y juega</small></button><button onclick="go('storymaker')"><span>✨</span><b>Crea cuentos</b><small>Historias mágicas</small></button><button onclick="go('studio')"><span>🎙️</span><b>Estudio</b><small>Graba tu voz</small></button><button onclick="go('dance')"><span>💃</span><b>Baila</b><small>Sigue los pasos</small></button><button onclick="go('creativity')"><span>🖍️</span><b>Creatividad</b><small>Dibuja y diseña</small></button><button onclick="go('calendar')"><span>📅</span><b>Calendario</b><small>Eventos especiales</small></button><button onclick="go('learningmode')"><span>🎓</span><b>Modo escolar</b><small>Preescolar o primaria</small></button></section><section class="v20-carousel">
      <button onclick="go('study')">
        <img src="assets/images/estrellita.jpg" alt="Estrellita">
        <span>Aventura espacial</span>
      </button>
      <button onclick="go('games')">
        <img src="assets/images/cangurito.jpg" alt="Cangurito">
        <span>Cangurito Star</span>
      </button>
      <button onclick="go('stories')">
        <img src="assets/images/chespitas.jpg" alt="Las Chespitas">
        <span>Vaqueritas cósmicas</span>
      </button>
      <button onclick="go('music')">
        <img src="assets/images/sparkly.jpg" alt="Sparkly">
        <span>Cumpleaños feliz</span>
      </button>
      <button onclick="go('home')">
        <img src="assets/images/logo_party_planet_v25.png" alt="Party Planet">
        <span>Party Planet</span>
      </button>
    </section>`;
}
function renderKaraoke(){document.getElementById("screen-karaoke").innerHTML=title("🎤","Karaoke","Elige una canción y sigue la letra")+`<div class="screen-character-banner"><img src="assets/images/sparkly.jpg" alt="Sparkly"><div><h3>Canta con Sparkly</h3><p>Elige una canción y sigue la letra.</p></div></div><div class="panel karaoke-box"><select id="karaokeSong" onchange="resetLyrics()">${songs.map(s=>`<option>${s}</option>`).join("")}</select><div id="lyrics" class="lyrics">Presiona comenzar para cantar.</div><button class="action-btn" onclick="startKaraoke()">▶ Comenzar</button><button class="action-btn" onclick="finishActivity('¡Cantaste una canción!',5)">✅ Terminé</button></div>`}
let lyricTimer;
function resetLyrics(){clearInterval(lyricTimer);lyrics.textContent="Presiona comenzar para cantar."}
function startKaraoke(){clearInterval(lyricTimer);let lines=["En Party Planet vamos a cantar","con estrellas vamos a brillar","las Chespitas vienen a bailar","¡y Sparkly nos invita a soñar!"],i=0;lyrics.innerHTML="";lyricTimer=setInterval(()=>{lyrics.innerHTML=lines.slice(0,i+1).map((x,j)=>j===i?`<b>${x}</b>`:x).join("<br>");speak(lines[i],"es-MX");i++;if(i===lines.length)clearInterval(lyricTimer)},1400)}
function renderStories(){document.getElementById("screen-stories").innerHTML=title("📖","Cuentos","Historias con narración")+`<div class="screen-character-banner"><img src="assets/images/chespitas.jpg" alt="Las Chespitas"><div><h3>Cuentos con Las Chespitas</h3><p>Historias llenas de magia y amistad.</p></div></div>`+stories.map((s,i)=>`<article class="panel story-card"><h3>${s[0]}</h3><p>${s[1]}</p><button class="action-btn" onclick="speakStory(${i})">🔊 Escuchar</button><button class="action-btn" onclick="finishActivity('Cuento completado',4)">⭐ Terminé</button></article>`).join("")}
function speakStory(i){speak(stories[i][1],"es-MX")}
function renderGames(){document.getElementById("screen-games").innerHTML=title("🎮","Juegos","Todos los juegos funcionan")+`<div class="featured-game-card" onclick="go(\'snakes\')"><div class="featured-game-icon">🐍🪜</div><div><h3>Serpientes y Escaleras</h3><p>Juega con Sparkly, las dos Chespitas y el Cangurito, lanzando el dado uno por uno.</p></div><button class="action-btn">Jugar</button></div>`+`<div class="screen-character-banner"><img src="assets/images/cangurito.jpg" alt="Cangurito Bailarín"><div><h3>Juega con el Cangurito</h3><p>Retos, memoria, números y colores.</p></div></div><div class="feature-grid"><button class="feature-card blue" onclick="memoryGame()"><span>🧠</span>Memorama</button><button class="feature-card pink" onclick="numberGame()"><span>🔢</span>Números</button><button class="feature-card green" onclick="colorGame()"><span>🌈</span>Colores</button><button class="feature-card orange" onclick="starGame()"><span>⭐</span>Atrapa estrellas</button></div><div id="gameArea" class="panel game-area">Elige un juego.</div>`}
function memoryGame(){let a=["⭐","🎤","🦘","🎈"],arr=[...a,...a].sort(()=>Math.random()-.5);window.mem={arr,open:[],done:[]};gameArea.innerHTML=`<h3>Encuentra las parejas</h3><div class="memory">${arr.map((x,i)=>`<button id="m${i}" onclick="flip(${i})">${`❓`}</button>`).join("")}</div>`}
function flip(i){let m=mem;if(m.open.includes(i)||m.done.includes(i))return;document.getElementById("m"+i).textContent=m.arr[i];m.open.push(i);if(m.open.length===2){let[a,b]=m.open;if(m.arr[a]===m.arr[b]){m.done.push(a,b);m.open=[];if(m.done.length===m.arr.length)finishActivity("¡Memorama completo!",8)}else setTimeout(()=>{document.getElementById("m"+a).textContent="❓";document.getElementById("m"+b).textContent="❓";m.open=[]},700)}}
function numberGame(){gameArea.innerHTML=`<h3>¿Cuánto es 3 + 2?</h3><div class="feature-grid"><button class="feature-card purple" onclick="wrong()">4</button><button class="feature-card green" onclick="finishActivity('¡Correcto!',5)">5</button><button class="feature-card orange" onclick="wrong()">6</button></div>`}
function colorGame(){gameArea.innerHTML=`<h3>¿Cuál es el color del sol?</h3><div class="feature-grid"><button class="feature-card blue" onclick="wrong()">Azul</button><button class="feature-card yellow" onclick="finishActivity('¡Correcto!',5)">Amarillo</button><button class="feature-card pink" onclick="wrong()">Rosa</button></div>`}
function starGame(){window.hits=0;gameArea.innerHTML=`<h3>Atrapa 5 estrellas</h3><p id="hitText">0 de 5</p><button style="font-size:70px;border:0;background:none" onclick="hit()">⭐</button>`}
function hit(){hits++;hitText.textContent=`${hits} de 5`;if(hits===5)finishActivity("¡Atrapaste todas!",6)}
function wrong(){toast("Intenta otra vez")}
function renderLanguages(){let s=document.getElementById("screen-languages");s.innerHTML=title("🌍","Idiomas","Busca, escucha, aprende y guarda")+`<div id="langTabs" class="lang-tabs"></div><div class="toolbar"><input id="wordSearch" placeholder="🔎 Buscar palabra..." oninput="renderWordList()"><select id="catFilter" onchange="renderWordList()"></select><button onclick="randomWord()">🔀 Aleatoria</button></div><div class="stats"><span>Disponibles: <b>5,000+</b></span><span>Aprendidas: <b id="learnedStat">${state.learned.size}</b></span><span>Favoritas: <b id="favStat">${state.favs.size}</b></span></div><div id="catGrid" class="category-grid"></div><div id="wordGrid" class="word-grid"></div>`;langTabs.innerHTML=Object.entries(LANGS).map(([k,v])=>`<button class="${k===state.lang?"active":""}" onclick="setLang('${k}')">${v[1]}<br>${v[0]}</button>`).join("");catFilter.innerHTML='<option value="all">Todas las categorías</option>'+CATS.map(c=>`<option value="${c[0]}">${c[2]}</option>`).join("");let cols=["#087fda","#4a22c7","#d80c81","#0c9564","#1c58d4","#9f168f","#a44d11","#087d7c"];catGrid.innerHTML=CATS.map((c,i)=>`<button style="background:${cols[i%cols.length]}" onclick="chooseCat('${c[0]}')"><span>${c[1]}</span>${c[2]}</button>`).join("");renderWordList()}
function setLang(k){state.lang=k;save();renderLanguages()}
function chooseCat(c){catFilter.value=c;renderWordList();wordGrid.scrollIntoView({behavior:"smooth"})}
function filteredWords(){let q=(wordSearch?.value||"").toLowerCase(),c=catFilter?.value||"all";return WORDS.filter(w=>(c==="all"||w.category===c)&&(!q||w.es.toLowerCase().includes(q)||String(w[state.lang]).toLowerCase().includes(q)))}
function renderWordList(list=null){let a=list||filteredWords();wordGrid.innerHTML=a.map(w=>`<article class="word"><div class="emoji">${w.emoji}</div><h3>${w.es}</h3><p>${w[state.lang]}</p><button onclick="speak('${String(w[state.lang]).replaceAll("'","&#39;")}','${LANGS[state.lang][2]}')">🔊</button><button onclick="learnWord('${w.es}')">⭐</button><button onclick="favWord('${w.es}')">${state.favs.has(w.es)?"❤️":"🤍"}</button></article>`).join("")||"<p>No se encontraron palabras.</p>"}
function learnWord(k){state.learned.add(k);state.stars+=10;save();sync();renderLanguages();toast("¡Aprendida! +10 ⭐")}
function favWord(k){state.favs.has(k)?state.favs.delete(k):state.favs.add(k);save();renderLanguages()}
function randomWord(){let w=WORDS[Math.floor(Math.random()*WORDS.length)];renderWordList([w]);speak(w[state.lang],LANGS[state.lang][2])}
function renderStudy(){let w=WORDS[Math.floor(Math.random()*WORDS.length)];document.getElementById("screen-study").innerHTML=title("🎓","Modo estudio","Una palabra nueva cada vez")+`<div class="screen-character-banner"><img src="assets/images/estrellita.jpg" alt="Estrellita"><div><h3>Aprende con Estrellita</h3><p>Cada palabra nueva enciende una estrella.</p></div></div><div class="panel" style="text-align:center"><div style="font-size:100px">${w.emoji}</div><h1>${w.es}</h1><h2 style="color:#78eaff">${w[state.lang]}</h2><button class="action-btn" onclick="speak('${String(w[state.lang]).replaceAll("'","&#39;")}','${LANGS[state.lang][2]}')">🔊 Escuchar</button><button class="action-btn" onclick="learnWord('${w.es}');renderStudy()">⭐ Aprendida</button><button class="action-btn" onclick="renderStudy()">➡ Siguiente</button></div>`}
function renderColor(){document.getElementById("screen-color").innerHTML=title("🎨","Colorea","Elige un color y toca la estrella")+`<div class="panel paint-area"><div class="palette">${["#ff4fa3","#6d35d8","#23a8ff","#ffd642","#34cf7a","#ff7a22"].map(c=>`<button style="background:${c}" onclick="setPaint('${c}')"></button>`).join("")}</div><div id="paintStar" class="paint-star" onclick="finishActivity('¡Dibujo guardado!',4)">★</div><button class="action-btn" onclick="finishActivity('¡Dibujo guardado!',4)">Guardar dibujo</button></div>`;paintStar.style.color=state.color}
function setPaint(c){state.color=c;paintStar.style.color=c}
function renderAvatar(){document.getElementById("screen-avatar").innerHTML=title("👕","Personaliza","Crea tu personaje")+`<div class="panel avatar-stage"><div id="avatarFace" class="avatar-face">${state.avatar}</div><div class="avatar-options">${["👧🏻","👧🏼","👦🏻","👦🏽","🧑🏻","🧑🏽"].map(a=>`<button onclick="setAvatar('${a}')">${a}</button>`).join("")}</div><button class="action-btn" onclick="finishActivity('Avatar guardado',3)">Guardar avatar</button></div>`}
function setAvatar(a){state.avatar=a;save();avatarFace.textContent=a}
function renderMusic(){document.getElementById("screen-music").innerHTML=title("🎵","Música","Reproduce una demostración")+`<div class="song-list">${songs.map((s,i)=>`<div class="song"><div><b>${s}</b><br><small>Party Planet</small></div><button class="action-btn" onclick="playSong(${i})">▶</button></div>`).join("")}</div>`}
function playSong(i){speak(`Reproduciendo ${songs[i]}. Aquí podrás colocar el archivo de audio oficial.`,"es-MX");toast("Demostración de audio")}
function renderRewards(){let pct=Math.min(100,state.learned.size*10);document.getElementById("screen-rewards").innerHTML=title("🏆","Recompensas","Gana estrellas con cada actividad")+`<div class="panel"><h3>Progreso de aprendizaje</h3><div class="progress"><div style="width:${pct}%"></div></div><p>${state.learned.size} palabras aprendidas</p></div><div class="reward-grid"><button class="reward-card yellow" onclick="redeem(50,'Sticker de Sparkly')"><span>✨</span>Sticker<br>50 ⭐</button><button class="reward-card pink" onclick="redeem(100,'Sombrero del Cangurito')"><span>🤠</span>Sombrero<br>100 ⭐</button><button class="reward-card blue" onclick="redeem(150,'Fondo espacial')"><span>🌌</span>Fondo<br>150 ⭐</button></div>`}
function redeem(cost,item){if(state.stars<cost)return toast("Necesitas más estrellas");state.stars-=cost;save();sync();renderRewards();toast(`Desbloqueaste: ${item}`)}
function renderStore(){document.getElementById("screen-store").innerHTML=title("🛍️","Tienda","Catálogo demostrativo protegido")+`<div class="product-grid"><button class="product-card pink" onclick="adultPurchase('Velas Party Planet')"><span>🎂</span>Velas</button><button class="product-card blue" onclick="adultPurchase('Globos Party Planet')"><span>🎈</span>Globos</button><button class="product-card purple" onclick="adultPurchase('Diademas Party Planet')"><span>👑</span>Diademas</button><button class="product-card green" onclick="adultPurchase('Serpentinas Party Planet')"><span>🎉</span>Serpentinas</button></div>`}
function adultPurchase(item){let a=prompt("Área para adultos: ¿cuánto es 8 + 7?");if(a==="15")toast(`${item} agregado al carrito de demostración`);else toast("Compra bloqueada")}
function renderEvents(){document.getElementById("screen-events").innerHTML=title("🗓️","Eventos","Temporadas especiales")+`<div class="event-grid">${events.map(e=>`<button class="event-card purple" onclick="openEvent('${e[1]}','${e[2]}')"><span>${e[0]}</span>${e[1]}<small>${e[2]}</small></button>`).join("")}</div>`}
function openEvent(n,d){modalBody.innerHTML=`<h2>${n}</h2><p>${d}</p><button class="action-btn" onclick="closeModal()">Entrar al evento</button>`;modal.classList.remove("hidden")}
function renderSettings(){document.getElementById("screen-settings").innerHTML=title("⚙️","Ajustes","Configura la experiencia")+`<div class="panel settings-list"><label>Volumen de voz<input id="vol" type="range" min="0" max="100" value="80"></label><label>Velocidad<select><option>Lenta</option><option selected>Normal</option><option>Rápida</option></select></label><label><input type="checkbox" checked> Sonidos infantiles</label><label><input type="checkbox" checked> Bloquear compras</label><button class="action-btn" onclick="toast('Ajustes guardados')">Guardar</button></div>`}
function renderVIP(){document.getElementById("screen-vip").innerHTML=title("👑","Membresía VIP","Contenido especial")+`<div class="panel" style="text-align:center"><h1>VIP Party Planet</h1><p>Desbloquea canciones, juegos, cuentos y personajes especiales.</p><button class="action-btn" onclick="adultPurchase('Membresía VIP')">Solicitar con un adulto</button></div>`}
function renderParents(){document.getElementById("screen-parents").innerHTML=title("👥","Área para padres","Control y progreso")+`<div class="panel"><p><b>Estrellas:</b> ${state.stars}</p><p><b>Palabras aprendidas:</b> ${state.learned.size}</p><p><b>Favoritas:</b> ${state.favs.size}</p><button class="action-btn" onclick="resetProgress()">Reiniciar progreso</button></div>`}
function openParentGate(){let a=prompt("Área para adultos: ¿cuánto es 9 + 4?");if(a==="13")go("parents");else toast("Respuesta incorrecta")}
function resetProgress(){if(confirm("¿Borrar el progreso guardado?")){state.stars=1250;state.gems=35;state.learned.clear();state.favs.clear();save();sync();renderParents();toast("Progreso reiniciado")}}
function finishActivity(msg,n){state.stars+=n;save();sync();toast(`${msg} +${n} ⭐`)}
function speak(text,locale="es-MX"){speechSynthesis.cancel();let u=new SpeechSynthesisUtterance(text);u.lang=locale;u.rate=.82;u.pitch=1.12;speechSynthesis.speak(u)}
function closeModal(){modal.classList.add("hidden")}
function toast(m){let t=document.getElementById("toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1900)}

// ===== V21: Biblioteca local y panel de administrador =====
const ADMIN_PASSWORD_KEY="pp21_admin_password";
if(!localStorage.getItem(ADMIN_PASSWORD_KEY)) localStorage.setItem(ADMIN_PASSWORD_KEY,"PartyPlanet21");

let dbPromise=null;
function openSongDB(){
  if(dbPromise) return dbPromise;
  dbPromise=new Promise((resolve,reject)=>{
    const req=indexedDB.open("PartyPlanetSongs",1);
    req.onupgradeneeded=()=>{
      const db=req.result;
      if(!db.objectStoreNames.contains("songs")){
        const store=db.createObjectStore("songs",{keyPath:"id",autoIncrement:true});
        store.createIndex("title","title",{unique:false});
      }
    };
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error);
  });
  return dbPromise;
}
async function dbAllSongs(){
  const db=await openSongDB();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction("songs","readonly");
    const req=tx.objectStore("songs").getAll();
    req.onsuccess=()=>resolve(req.result||[]);
    req.onerror=()=>reject(req.error);
  });
}
async function dbAddSong(song){
  const db=await openSongDB();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction("songs","readwrite");
    const req=tx.objectStore("songs").add(song);
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error);
  });
}
async function dbDeleteSong(id){
  const db=await openSongDB();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction("songs","readwrite");
    const req=tx.objectStore("songs").delete(id);
    req.onsuccess=()=>resolve();
    req.onerror=()=>reject(req.error);
  });
}
function fileToDataURL(file){
  return new Promise((resolve,reject)=>{
    const r=new FileReader();
    r.onload=()=>resolve(r.result);
    r.onerror=()=>reject(r.error);
    r.readAsDataURL(file);
  });
}
function openAdminGate(){
  const pass=prompt("Contraseña de administrador");
  if(pass===localStorage.getItem(ADMIN_PASSWORD_KEY)) go("admin");
  else toast("Contraseña incorrecta");
}
async function renderAdmin(){
  const el=document.getElementById("screen-admin");
  const songs=await dbAllSongs();
  el.innerHTML=title("🔐","Administrador de canciones","Solo para Party Planet")+`
  <div class="admin-note">Contraseña inicial: <b>PartyPlanet21</b>. Cámbiala desde este panel.</div>
  <div class="admin-layout">
    <section class="admin-form">
      <h3>➕ Agregar canción</h3>
      <label>Título<input id="admTitle" placeholder="Nombre de la canción"></label>
      <label>Artista<select id="admArtist"><option>Las Chespitas</option><option>Sparkly</option><option>Cangurito Bailarín</option><option>Estrellita</option><option>Party Planet</option></select></label>
      <label>Categoría<select id="admCategory"><option>Aprendizaje</option><option>Cumpleaños</option><option>Navidad</option><option>Vaqueritas</option><option>Patines</option><option>K-Pop infantil</option><option>Canciones de cuna</option><option>Otros</option></select></label>
      <label>Idioma<select id="admLanguage"><option>Español</option><option>Inglés</option><option>Francés</option><option>Portugués</option><option>Otro</option></select></label>
      <label>Portada<input id="admCover" type="file" accept="image/*"></label>
      <label>Archivo de audio<input id="admAudio" type="file" accept="audio/*"></label>
      <label>Letra<textarea id="admLyrics" placeholder="Pega aquí la letra de la canción"></textarea></label>
      <label><input id="admKaraoke" type="checkbox" checked> Activar en Karaoke</label>
      <label><input id="admVip" type="checkbox"> Solo VIP</label>
      <button onclick="saveAdminSong()">💾 Guardar canción</button>
      <button onclick="changeAdminPassword()">🔑 Cambiar contraseña</button><button onclick="go('cloud')">☁️ Configurar nube</button><button onclick="go('analytics')">📊 Estadísticas</button>
    </section>
    <section class="admin-library">
      <h3>🎵 Canciones guardadas (${songs.length})</h3>
      <div id="adminSongList">${songs.length?songs.map(s=>`
        <article class="admin-song">
          <img src="${s.cover||'assets/images/logo_sparkly.jpg'}" alt="">
          <div><b>${escapeHtml(s.title)}</b><br><small>${escapeHtml(s.artist)} · ${escapeHtml(s.category)} · ${escapeHtml(s.language)}</small></div>
          <div><button onclick="previewAdminSong(${s.id})">▶</button><button class="danger" onclick="removeAdminSong(${s.id})">🗑️</button></div>
        </article>`).join(""):"<p>Aún no has subido canciones.</p>"}</div>
    </section>
  </div>`;
}
async function saveAdminSong(){
  const title=document.getElementById("admTitle").value.trim();
  const audioFile=document.getElementById("admAudio").files[0];
  if(!title) return toast("Escribe el título");
  if(!audioFile) return toast("Selecciona un archivo de audio");
  const coverFile=document.getElementById("admCover").files[0];
  const song={
    title,
    artist:document.getElementById("admArtist").value,
    category:document.getElementById("admCategory").value,
    language:document.getElementById("admLanguage").value,
    lyrics:document.getElementById("admLyrics").value,
    karaoke:document.getElementById("admKaraoke").checked,
    vip:document.getElementById("admVip").checked,
    audio:await fileToDataURL(audioFile),
    cover:coverFile?await fileToDataURL(coverFile):"assets/images/logo_sparkly.jpg",
    createdAt:new Date().toISOString()
  };
  await dbAddSong(song);
  track("uploads");
  toast("Canción guardada");
  renderAdmin();
}
async function removeAdminSong(id){
  if(!confirm("¿Borrar esta canción? Solo el administrador puede hacerlo.")) return;
  await dbDeleteSong(id);
  toast("Canción eliminada");
  renderAdmin();
}
async function previewAdminSong(id){
  const songs=await dbAllSongs();
  const s=songs.find(x=>x.id===id);
  if(!s) return;
  modalBody.innerHTML=`<h2>${escapeHtml(s.title)}</h2><img src="${s.cover}" style="width:180px;height:180px;object-fit:cover;border-radius:18px"><p>${escapeHtml(s.artist)}</p><audio controls autoplay src="${s.audio}" style="width:100%"></audio>`;
  modal.classList.remove("hidden");
}
function changeAdminPassword(){
  const current=prompt("Contraseña actual");
  if(current!==localStorage.getItem(ADMIN_PASSWORD_KEY)) return toast("Contraseña incorrecta");
  const next=prompt("Nueva contraseña");
  if(!next||next.length<6) return toast("Usa al menos 6 caracteres");
  localStorage.setItem(ADMIN_PASSWORD_KEY,next);
  toast("Contraseña cambiada");
}
function escapeHtml(v){
  return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}
async function renderMusic(){
  const custom=await dbAllSongs();
  const defaults=songs.map((title,i)=>({id:"d"+i,title,artist:"Party Planet",category:"Demo",cover:"assets/images/logo_sparkly.jpg",audio:null}));
  const all=[...custom,...defaults];
  document.getElementById("screen-music").innerHTML=title("🎵","Música","Tus canciones de Party Planet")+`<div class="song-list">${all.map(s=>`
    <div class="song">
      <img class="song-cover" src="${s.cover||'assets/images/logo_sparkly.jpg'}">
      <div><b>${escapeHtml(s.title)}</b><br><small>${escapeHtml(s.artist||"Party Planet")} · ${escapeHtml(s.category||"")}</small></div>
      <button class="action-btn" onclick="${typeof s.id==="number"?`playStoredSong(${s.id})`:`playSong(${String(s.id).slice(1)})`}">▶</button>
    </div>`).join("")}</div>`;
}
async function playStoredSong(id){
  const all=await dbAllSongs(); const s=all.find(x=>x.id===id); if(!s)return;
  modalBody.innerHTML=`<h2>${escapeHtml(s.title)}</h2><img src="${s.cover}" style="width:180px;height:180px;object-fit:cover;border-radius:18px"><p>${escapeHtml(s.artist)}</p><audio controls autoplay src="${s.audio}" style="width:100%"></audio>`;
  modal.classList.remove("hidden");
}
async function renderKaraoke(){
  const all=(await dbAllSongs()).filter(s=>s.karaoke);
  const el=document.getElementById("screen-karaoke");
  if(!all.length){
    el.innerHTML=title("🎤","Karaoke","Sube canciones desde el panel administrador")+`<div class="panel karaoke-box"><p>No hay canciones de karaoke guardadas.</p><button class="action-btn" onclick="openAdminGate()">🔐 Abrir administrador</button></div>`;
    return;
  }
  el.innerHTML=title("🎤","Karaoke","Elige una canción y sigue la letra")+`
    <div class="panel karaoke-player">
      <img id="karaokeCover" src="${all[0].cover}">
      <div>
        <select id="karaokeStoredSelect" onchange="loadStoredKaraoke()">${all.map(s=>`<option value="${s.id}">${escapeHtml(s.title)} — ${escapeHtml(s.artist)}</option>`).join("")}</select>
        <audio id="karaokeAudio" controls src="${all[0].audio}" style="width:100%;margin:12px 0"></audio>
        <div id="lyrics" class="lyrics">${(all[0].lyrics||"Esta canción todavía no tiene letra.").replace(/\n/g,"<br>")}</div>
        <button class="action-btn" onclick="finishActivity('¡Cantaste una canción!',5)">✅ Terminé</button>
      </div>
    </div>`;
}
async function loadStoredKaraoke(){
  const all=await dbAllSongs();
  const id=Number(document.getElementById("karaokeStoredSelect").value);
  const s=all.find(x=>x.id===id); if(!s)return;
  karaokeCover.src=s.cover; karaokeAudio.src=s.audio; lyrics.innerHTML=(s.lyrics||"Sin letra").replace(/\n/g,"<br>");
}

sync();go("home");
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});


// ===== PARTY PLANET V22 CLOUD EDITION =====
const CLOUD_CONFIG_KEY = "pp22_cloud_config";
const CLOUD_MODE_KEY = "pp22_cloud_mode";
const ANALYTICS_KEY = "pp22_analytics";
if(!localStorage.getItem(CLOUD_MODE_KEY)) localStorage.setItem(CLOUD_MODE_KEY,"local");

function getAnalytics(){
  return JSON.parse(localStorage.getItem(ANALYTICS_KEY)||'{"plays":0,"karaoke":0,"uploads":0,"favorites":0,"lastOpen":null}');
}
function setAnalytics(data){localStorage.setItem(ANALYTICS_KEY,JSON.stringify(data))}
function track(metric){
  const a=getAnalytics(); a[metric]=(a[metric]||0)+1; a.lastOpen=new Date().toISOString(); setAnalytics(a);
}
function cloudMode(){return localStorage.getItem(CLOUD_MODE_KEY)||"local"}
function cloudConfigured(){
  try{
    const c=JSON.parse(localStorage.getItem(CLOUD_CONFIG_KEY)||"{}");
    return !!(c.apiKey&&c.projectId&&c.storageBucket);
  }catch(e){return false}
}
function cloudStatusHtml(){
  const configured=cloudConfigured();
  return `<div class="cloud-status"><div><span class="cloud-dot ${configured?'online':''}"></span><b>${configured?'Nube configurada':'Modo local activo'}</b><div><small>${configured?'La aplicación está lista para conectarse al proyecto Firebase indicado.':'Todo funciona en esta computadora. Agrega las claves Firebase cuando quieras sincronizar.'}</small></div></div><button class="action-btn" onclick="go('cloud')">☁️ Configurar nube</button></div>`;
}
async function cloudAllSongs(){
  // V22 includes an adapter point. Until Firebase credentials and SDK are installed,
  // IndexedDB remains the safe working source.
  return await dbAllSongs();
}
async function renderCloud(){
  const cfg=JSON.parse(localStorage.getItem(CLOUD_CONFIG_KEY)||"{}");
  const el=document.getElementById("screen-cloud");
  el.innerHTML=title("☁️","Party Planet Cloud","Conecta la aplicación con tu proyecto Firebase")+cloudStatusHtml()+`
  <div class="v22-grid">
    <section class="v22-card cloud-form">
      <h3>🔧 Datos del proyecto</h3>
      <label>API Key<input id="fbApiKey" value="${escapeHtml(cfg.apiKey||"")}" placeholder="AIza..."></label>
      <label>Project ID<input id="fbProjectId" value="${escapeHtml(cfg.projectId||"")}" placeholder="party-planet-app"></label>
      <label>Storage Bucket<input id="fbBucket" value="${escapeHtml(cfg.storageBucket||"")}" placeholder="party-planet-app.appspot.com"></label>
      <label>Auth Domain<input id="fbAuth" value="${escapeHtml(cfg.authDomain||"")}" placeholder="party-planet-app.firebaseapp.com"></label>
      <button class="action-btn" onclick="saveCloudConfig()">💾 Guardar configuración</button>
      <button class="action-btn" onclick="clearCloudConfig()">🧹 Volver a modo local</button>
    </section>
    <section class="v22-card">
      <h3>📋 Qué sincronizará</h3>
      <p>🎵 Canciones, portadas y letras</p>
      <p>🎤 Contenido de karaoke</p>
      <p>💎 Contenido VIP y gratuito</p>
      <p>📊 Reproducciones y favoritos</p>
      <p>🌍 Categorías e idiomas</p>
    </section>
    <section class="v22-card">
      <h3>🔒 Seguridad recomendada</h3>
      <p>Usa Firebase Authentication para el administrador.</p>
      <p>Los niños tendrán acceso de lectura únicamente.</p>
      <p>Solo la cuenta administradora podrá subir, editar o borrar.</p>
    </section>
  </div>
  <div class="v22-card" style="margin-top:14px">
    <h3>Archivo de configuración esperado</h3>
    <div class="setup-code">firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com"
}</div>
    <p><b>Importante:</b> guardar estas claves prepara la aplicación, pero para activar la sincronización real debes crear el proyecto Firebase y publicar la app en un servidor HTTPS.</p>
  </div>`;
}
function saveCloudConfig(){
  const cfg={
    apiKey:document.getElementById("fbApiKey").value.trim(),
    projectId:document.getElementById("fbProjectId").value.trim(),
    storageBucket:document.getElementById("fbBucket").value.trim(),
    authDomain:document.getElementById("fbAuth").value.trim()
  };
  if(!cfg.apiKey||!cfg.projectId||!cfg.storageBucket) return toast("Faltan datos obligatorios");
  localStorage.setItem(CLOUD_CONFIG_KEY,JSON.stringify(cfg));
  localStorage.setItem(CLOUD_MODE_KEY,"cloud-ready");
  toast("Configuración de nube guardada");
  renderCloud();
}
function clearCloudConfig(){
  localStorage.removeItem(CLOUD_CONFIG_KEY);
  localStorage.setItem(CLOUD_MODE_KEY,"local");
  toast("Modo local activado");
  renderCloud();
}
async function renderAnalytics(){
  const a=getAnalytics();
  const songs=await dbAllSongs();
  document.getElementById("screen-analytics").innerHTML=title("📊","Estadísticas","Actividad en este dispositivo")+cloudStatusHtml()+`
  <div class="v22-grid">
    <div class="v22-card"><h3>▶ Reproducciones</h3><div class="metric">${a.plays||0}</div></div>
    <div class="v22-card"><h3>🎤 Karaokes</h3><div class="metric">${a.karaoke||0}</div></div>
    <div class="v22-card"><h3>📤 Canciones subidas</h3><div class="metric">${songs.length}</div></div>
    <div class="v22-card"><h3>❤️ Favoritos</h3><div class="metric">${a.favorites||0}</div></div>
    <div class="v22-card"><h3>💎 Canciones VIP</h3><div class="metric">${songs.filter(s=>s.vip).length}</div></div>
    <div class="v22-card"><h3>🌍 Idiomas</h3><div class="metric">${new Set(songs.map(s=>s.language)).size}</div></div>
  </div>`;
}
async function renderMusicV22(){
  const custom=await cloudAllSongs();
  const search=(document.getElementById("musicSearch")?.value||"").toLowerCase();
  const category=document.getElementById("musicCategory")?.value||"";
  const language=document.getElementById("musicLanguage")?.value||"";
  const filtered=custom.filter(s=>
    (!search||(`${s.title} ${s.artist} ${s.category}`.toLowerCase().includes(search))) &&
    (!category||s.category===category) &&
    (!language||s.language===language)
  );
  const categories=[...new Set(custom.map(s=>s.category).filter(Boolean))];
  const languages=[...new Set(custom.map(s=>s.language).filter(Boolean))];
  document.getElementById("screen-music").innerHTML=title("🎵","Biblioteca musical","Busca por canción, personaje, categoría o idioma")+cloudStatusHtml()+`
    <div class="filter-row">
      <input id="musicSearch" placeholder="🔎 Buscar canción" value="${escapeHtml(search)}" oninput="renderMusicV22()">
      <select id="musicCategory" onchange="renderMusicV22()"><option value="">Todas las categorías</option>${categories.map(c=>`<option ${category===c?'selected':''}>${escapeHtml(c)}</option>`).join("")}</select>
      <select id="musicLanguage" onchange="renderMusicV22()"><option value="">Todos los idiomas</option>${languages.map(l=>`<option ${language===l?'selected':''}>${escapeHtml(l)}</option>`).join("")}</select>
      <button class="action-btn" onclick="openAdminGate()">➕ Subir canción</button>
      <button class="action-btn" onclick="go('analytics')">📊 Estadísticas</button>
    </div>
    <div class="library-grid">${filtered.length?filtered.map(s=>`
      <article class="library-card">
        <img src="${s.cover||'assets/images/logo_sparkly.jpg'}" alt="">
        <div class="body">
          <b>${escapeHtml(s.title)}</b><br><small>${escapeHtml(s.artist)}</small><br>
          <span class="badge">${escapeHtml(s.category)}</span>
          <span class="badge">${escapeHtml(s.language)}</span>
          ${s.vip?'<span class="badge vip">👑 VIP</span>':''}
          <button onclick="playStoredSongV22(${s.id})">▶ Escuchar</button>
        </div>
      </article>`).join(""):"<p>No hay canciones que coincidan.</p>"}</div>`;
}
async function playStoredSongV22(id){
  track("plays");
  return playStoredSong(id);
}

// V23 movimiento y reacciones
const MOTION_KEY="pp23_motion";
function applyMotionPreference(){const reduced=false; localStorage.setItem(MOTION_KEY,"full");document.body.classList.toggle("motion-reduced",reduced);const b=document.querySelector(".motion-toggle");if(b){b.textContent=reduced?"🌙":"✨";b.title=reduced?"Activar movimiento":"Reducir movimiento";}}
function toggleMotion(){const reduced=!document.body.classList.contains("motion-reduced");localStorage.setItem(MOTION_KEY,reduced?"reduced":"full");applyMotionPreference();toast(reduced?"Movimiento reducido":"Movimiento activado");}
function createConfetti(amount=34){if(document.body.classList.contains("motion-reduced"))return;const colors=["#ffdf32","#ff47ba","#4cddff","#8e55ff","#42e887","#ff7a2e"];for(let i=0;i<amount;i++){const p=document.createElement("i");p.className="confetti-piece";p.style.left=Math.random()*100+"vw";p.style.background=colors[i%colors.length];p.style.animationDelay=Math.random()*.55+"s";document.body.appendChild(p);setTimeout(()=>p.remove(),2600);}}
function sparkleAt(x,y){if(document.body.classList.contains("motion-reduced"))return;for(let i=0;i<10;i++){const s=document.createElement("i");s.className="spark-burst";s.style.left=x+"px";s.style.top=y+"px";const a=Math.PI*2*i/10,d=35+Math.random()*55;s.style.setProperty("--dx",Math.cos(a)*d+"px");s.style.setProperty("--dy",Math.sin(a)*d+"px");document.body.appendChild(s);setTimeout(()=>s.remove(),1000);}}
document.addEventListener("click",e=>{const x=e.target.closest("button,.character-card,.library-card,.v20-carousel button");if(x){const r=x.getBoundingClientRect();sparkleAt(r.left+r.width/2,r.top+r.height/2);}});
applyMotionPreference();setTimeout(()=>createConfetti(20),700);

document.addEventListener("DOMContentLoaded",()=>{document.body.classList.remove("motion-reduced");localStorage.setItem("pp23_motion","full");setTimeout(()=>{if(typeof createConfetti==="function")createConfetti(36)},400);});


// ======================================================
// PARTY PLANET V26 — JUEGOS EDUCATIVOS INTERACTIVOS
// ======================================================
const animalData=[
  {name:"Perro",emoji:"🐶",sound:"guau guau",freq:[180,120]},
  {name:"Gato",emoji:"🐱",sound:"miau",freq:[420,520]},
  {name:"Vaca",emoji:"🐮",sound:"muuu",freq:[105,85]},
  {name:"Pato",emoji:"🦆",sound:"cuac cuac",freq:[520,390]},
  {name:"León",emoji:"🦁",sound:"grrrr",freq:[90,60]},
  {name:"Oveja",emoji:"🐑",sound:"beee",freq:[300,260]},
  {name:"Caballo",emoji:"🐴",sound:"hiiii",freq:[240,480]},
  {name:"Cerdito",emoji:"🐷",sound:"oinc oinc",freq:[210,250]}
];
let animalQuizAnswer=null;

function audioCtx(){
  if(!window.ppAudioCtx) window.ppAudioCtx=new (window.AudioContext||window.webkitAudioContext)();
  return window.ppAudioCtx;
}
function synthTone(freq=440,duration=.3,type="sine",volume=.18,start=0){
  const ctx=audioCtx(), osc=ctx.createOscillator(), gain=ctx.createGain();
  osc.type=type;osc.frequency.value=freq;
  gain.gain.setValueAtTime(0.001,ctx.currentTime+start);
  gain.gain.exponentialRampToValueAtTime(volume,ctx.currentTime+start+.02);
  gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+start+duration);
  osc.connect(gain);gain.connect(ctx.destination);
  osc.start(ctx.currentTime+start);osc.stop(ctx.currentTime+start+duration+.03);
}
function speakText(text,rate=.8,pitch=1.2){
  if(!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang="es-MX";u.rate=rate;u.pitch=pitch;
  speechSynthesis.speak(u);
}
function playAnimal(index){
  const a=animalData[index];
  synthTone(a.freq[0],.28,"sawtooth",.12);
  synthTone(a.freq[1],.38,"triangle",.11,.18);
  setTimeout(()=>speakText(`${a.name}. ${a.sound}`,.72,1.25),350);
  sparkleAt(innerWidth/2,innerHeight/2);
}
function newAnimalQuiz(){
  animalQuizAnswer=Math.floor(Math.random()*animalData.length);
  const choices=[animalQuizAnswer];
  while(choices.length<3){
    const x=Math.floor(Math.random()*animalData.length);
    if(!choices.includes(x))choices.push(x);
  }
  choices.sort(()=>Math.random()-.5);
  document.getElementById("animalQuiz").innerHTML=`
    <h3>🔊 Escucha y toca el animal correcto</h3>
    <button class="action-btn" onclick="playAnimal(${animalQuizAnswer})">▶ Escuchar otra vez</button>
    <div class="animal-choices">${choices.map(i=>`<button onclick="answerAnimal(${i})">${animalData[i].emoji}<small>${animalData[i].name}</small></button>`).join("")}</div>`;
  playAnimal(animalQuizAnswer);
}
function answerAnimal(i){
  if(i===animalQuizAnswer){createConfetti(30);toast("¡Correcto!");state.stars+=5;sync();setTimeout(newAnimalQuiz,700)}
  else toast("Intenta otra vez");
}
function renderAnimals(){
  document.getElementById("screen-animals").innerHTML=title("🐾","Sonidos de animales","Toca cada animal para escucharlo")+`
  <div class="animal-grid">${animalData.map((a,i)=>`<button onclick="playAnimal(${i})"><span>${a.emoji}</span><b>${a.name}</b><small>🔊 ${a.sound}</small></button>`).join("")}</div>
  <div id="animalQuiz" class="panel animal-quiz"><button class="action-btn" onclick="newAnimalQuiz()">🎯 Jugar: adivina el animal</button></div>`;
}

const puzzleImages=[
  {name:"Sparkly",src:"assets/images/sparkly.jpg"},
  {name:"Cangurito",src:"assets/images/cangurito.jpg"},
  {name:"Estrellita",src:"assets/images/estrellita.jpg"},
  {name:"Las Chespitas",src:"assets/images/chespitas.jpg"}
];
let puzzleState={image:0,tiles:[],moves:0};
function shuffleArray(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function startPuzzle(imageIndex=0){
  puzzleState.image=imageIndex;puzzleState.moves=0;puzzleState.tiles=shuffleArray([...Array(9).keys()]);
  if(puzzleState.tiles.every((v,i)=>v===i)) [puzzleState.tiles[0],puzzleState.tiles[1]]=[puzzleState.tiles[1],puzzleState.tiles[0]];
  drawPuzzle();
}
function drawPuzzle(){
  const p=puzzleImages[puzzleState.image];
  const board=document.getElementById("puzzleBoard");
  if(!board)return;
  board.innerHTML=puzzleState.tiles.map((tile,pos)=>{
    const row=Math.floor(tile/3),col=tile%3;
    return `<button draggable="true" data-pos="${pos}" onclick="selectPuzzleTile(${pos})" style="background-image:url('${p.src}');background-position:${col*50}% ${row*50}%"></button>`;
  }).join("");
  document.getElementById("puzzleMoves").textContent=puzzleState.moves;
}
let selectedPuzzleTile=null;
function selectPuzzleTile(pos){
  if(selectedPuzzleTile===null){selectedPuzzleTile=pos;document.querySelectorAll("#puzzleBoard button")[pos].classList.add("selected");return}
  [puzzleState.tiles[selectedPuzzleTile],puzzleState.tiles[pos]]=[puzzleState.tiles[pos],puzzleState.tiles[selectedPuzzleTile]];
  selectedPuzzleTile=null;puzzleState.moves++;drawPuzzle();
  if(puzzleState.tiles.every((v,i)=>v===i)){createConfetti(50);toast("¡Rompecabezas completado!");state.stars+=15;sync();}
}
function renderPuzzle(){
  document.getElementById("screen-puzzle").innerHTML=title("🧩","Puzzle Kids","Toca dos piezas para intercambiarlas")+`
  <div class="puzzle-toolbar">${puzzleImages.map((p,i)=>`<button onclick="startPuzzle(${i})">${p.name}</button>`).join("")}<span>Movimientos: <b id="puzzleMoves">0</b></span></div>
  <div id="puzzleBoard" class="puzzle-board"></div>
  <p class="game-hint">Elige dos cuadros para cambiar sus lugares hasta completar la imagen.</p>`;
  startPuzzle(0);
}

const syllableWords=[
  {word:"CASA",parts:["CA","SA"],emoji:"🏠"},
  {word:"MESA",parts:["ME","SA"],emoji:"🪑"},
  {word:"LUNA",parts:["LU","NA"],emoji:"🌙"},
  {word:"PATO",parts:["PA","TO"],emoji:"🦆"},
  {word:"GATO",parts:["GA","TO"],emoji:"🐱"},
  {word:"PELOTA",parts:["PE","LO","TA"],emoji:"⚽"},
  {word:"MARIPOSA",parts:["MA","RI","PO","SA"],emoji:"🦋"},
  {word:"ESTRELLA",parts:["ES","TRE","LLA"],emoji:"⭐"}
];
let syllableIndex=0, builtSyllables=[];
function renderSyllableWord(){
  const w=syllableWords[syllableIndex];
  builtSyllables=[];
  const shuffled=shuffleArray([...w.parts]);
  document.getElementById("syllableGame").innerHTML=`
    <div class="syllable-emoji">${w.emoji}</div>
    <h3>Forma la palabra</h3>
    <div id="builtWord" class="built-word">_ _ _</div>
    <div class="syllable-options">${shuffled.map(p=>`<button onclick="chooseSyllable('${p}')">${p}</button>`).join("")}</div>
    <button class="action-btn" onclick="speakText('${w.word.toLowerCase()}',.65,1.25)">🔊 Escuchar palabra</button>`;
  speakText(w.word.toLowerCase(),.7,1.2);
}
function chooseSyllable(part){
  builtSyllables.push(part);
  const w=syllableWords[syllableIndex];
  document.getElementById("builtWord").textContent=builtSyllables.join(" - ");
  speakText(part.toLowerCase(),.62,1.3);
  if(builtSyllables.length===w.parts.length){
    if(builtSyllables.join("")===w.word){
      createConfetti(35);toast("¡Muy bien!");state.stars+=8;sync();
      syllableIndex=(syllableIndex+1)%syllableWords.length;setTimeout(renderSyllableWord,900);
    }else{
      toast("Orden incorrecto. Intenta de nuevo.");
      setTimeout(renderSyllableWord,800);
    }
  }
}
function renderSyllables(){
  document.getElementById("screen-syllables").innerHTML=title("🔤","Aprende a leer con sílabas","Une las sílabas y forma palabras")+`
  <div class="syllable-lessons">
    <button onclick="speakText('ma, me, mi, mo, mu',.65,1.25)">MA ME MI MO MU</button>
    <button onclick="speakText('pa, pe, pi, po, pu',.65,1.25)">PA PE PI PO PU</button>
    <button onclick="speakText('la, le, li, lo, lu',.65,1.25)">LA LE LI LO LU</button>
    <button onclick="speakText('sa, se, si, so, su',.65,1.25)">SA SE SI SO SU</button>
  </div>
  <div id="syllableGame" class="panel syllable-game"></div>`;
  renderSyllableWord();
}

const pianoNotes=[
  {n:"DO",f:261.63,key:"A"},{n:"RE",f:293.66,key:"S"},{n:"MI",f:329.63,key:"D"},
  {n:"FA",f:349.23,key:"F"},{n:"SOL",f:392,key:"G"},{n:"LA",f:440,key:"H"},
  {n:"SI",f:493.88,key:"J"},{n:"DO",f:523.25,key:"K"}
];
let recording=[],recordingStart=0,isRecording=false;
function playPianoNote(i){
  const n=pianoNotes[i];synthTone(n.f,.55,"sine",.2);synthTone(n.f*2,.3,"triangle",.05);
  const key=document.querySelector(`[data-piano="${i}"]`);
  if(key){key.classList.add("playing");setTimeout(()=>key.classList.remove("playing"),180)}
  if(isRecording)recording.push({i,t:Date.now()-recordingStart});
}
function toggleRecording(){
  isRecording=!isRecording;
  const b=document.getElementById("recordBtn");
  if(isRecording){recording=[];recordingStart=Date.now();b.textContent="⏹️ Detener";toast("Grabando melodía")}
  else{b.textContent="⏺️ Grabar";toast("Melodía guardada")}
}
function playRecording(){
  if(!recording.length)return toast("Primero graba una melodía");
  recording.forEach(x=>setTimeout(()=>playPianoNote(x.i),x.t));
}
function playKidsSong(){
  const melody=[0,0,4,4,5,5,4,3,3,2,2,1,1,0];
  melody.forEach((n,i)=>setTimeout(()=>playPianoNote(n),i*420));
}
function renderPiano(){
  document.getElementById("screen-piano").innerHTML=title("🎹","Piano para niños","Toca las teclas y crea tu canción")+`
  <div class="piano-controls">
    <button id="recordBtn" class="action-btn" onclick="toggleRecording()">⏺️ Grabar</button>
    <button class="action-btn" onclick="playRecording()">▶ Reproducir</button>
    <button class="action-btn" onclick="playKidsSong()">⭐ Canción de ejemplo</button>
  </div>
  <div class="kids-piano">${pianoNotes.map((n,i)=>`<button data-piano="${i}" onclick="playPianoNote(${i})"><b>${n.n}</b><small>${n.key}</small></button>`).join("")}</div>
  <p class="game-hint">También puedes usar las teclas A, S, D, F, G, H, J y K.</p>`;
}
document.addEventListener("keydown",e=>{
  const i=pianoNotes.findIndex(n=>n.key===e.key.toUpperCase());
  if(i>=0 && document.getElementById("screen-piano")?.classList.contains("active"))playPianoNote(i);
});

let rhythmSequence=[],rhythmPlayer=[],rhythmLevel=3;
function playRhythmSequence(){
  rhythmPlayer=[];
  rhythmSequence=Array.from({length:rhythmLevel},()=>Math.floor(Math.random()*4));
  rhythmSequence.forEach((n,i)=>setTimeout(()=>flashRhythm(n),i*650));
}
function flashRhythm(n){
  const b=document.querySelector(`[data-rhythm="${n}"]`);
  if(!b)return;
  b.classList.add("lit");synthTone([261,330,392,523][n],.32,"triangle",.18);
  setTimeout(()=>b.classList.remove("lit"),280);
}
function pressRhythm(n){
  flashRhythm(n);rhythmPlayer.push(n);
  const pos=rhythmPlayer.length-1;
  if(rhythmPlayer[pos]!==rhythmSequence[pos]){toast("Casi. Intenta de nuevo.");setTimeout(playRhythmSequence,700);return}
  if(rhythmPlayer.length===rhythmSequence.length){
    createConfetti(30);toast("¡Ritmo correcto!");state.stars+=10;sync();rhythmLevel=Math.min(8,rhythmLevel+1);setTimeout(playRhythmSequence,900);
  }
}
function renderMusicGames(){
  document.getElementById("screen-musicgames").innerHTML=title("🎶","Música y juegos interactivos","Imita el ritmo y gana estrellas")+`
  <div class="music-game-panel">
    <h3>🌈 Memoria musical</h3>
    <p>Escucha la secuencia y repítela.</p>
    <div class="rhythm-pads">
      <button data-rhythm="0" onclick="pressRhythm(0)">🥁</button>
      <button data-rhythm="1" onclick="pressRhythm(1)">🔔</button>
      <button data-rhythm="2" onclick="pressRhythm(2)">⭐</button>
      <button data-rhythm="3" onclick="pressRhythm(3)">🎵</button>
    </div>
    <button class="action-btn" onclick="playRhythmSequence()">▶ Comenzar ritmo</button>
  </div>
  <div class="v26-mini-games">
    <button onclick="go('piano')"><span>🎹</span><b>Piano libre</b></button>
    <button onclick="go('karaoke')"><span>🎤</span><b>Canta conmigo</b></button>
    <button onclick="go('music')"><span>🎧</span><b>Escucha canciones</b></button>
  </div>`;
}


// ======================================================
// PARTY PLANET V27 — UNIVERSO DE PALABRAS
// ======================================================
const V27_LANGUAGE_DATA={"en": {"name": "English", "flag": "🇺🇸", "locale": "en-US", "categories": {"Animales": [{"es": "perro", "word": "dog"}, {"es": "gato", "word": "cat"}, {"es": "león", "word": "lion"}, {"es": "tigre", "word": "tiger"}, {"es": "elefante", "word": "elephant"}, {"es": "conejo", "word": "rabbit"}, {"es": "caballo", "word": "horse"}, {"es": "vaca", "word": "cow"}, {"es": "pato", "word": "duck"}, {"es": "pájaro", "word": "bird"}, {"es": "pez", "word": "fish"}, {"es": "mariposa", "word": "butterfly"}], "Colores": [{"es": "rojo", "word": "red"}, {"es": "azul", "word": "blue"}, {"es": "amarillo", "word": "yellow"}, {"es": "verde", "word": "green"}, {"es": "rosa", "word": "pink"}, {"es": "morado", "word": "purple"}, {"es": "naranja", "word": "orange"}, {"es": "negro", "word": "black"}, {"es": "blanco", "word": "white"}, {"es": "café", "word": "brown"}, {"es": "gris", "word": "gray"}, {"es": "dorado", "word": "gold"}], "Familia": [{"es": "mamá", "word": "mother"}, {"es": "papá", "word": "father"}, {"es": "hermano", "word": "brother"}, {"es": "hermana", "word": "sister"}, {"es": "abuela", "word": "grandmother"}, {"es": "abuelo", "word": "grandfather"}, {"es": "bebé", "word": "baby"}, {"es": "familia", "word": "family"}, {"es": "tía", "word": "aunt"}, {"es": "tío", "word": "uncle"}, {"es": "primo", "word": "cousin"}, {"es": "amigo", "word": "friend"}], "Escuela": [{"es": "escuela", "word": "school"}, {"es": "maestro", "word": "teacher"}, {"es": "libro", "word": "book"}, {"es": "lápiz", "word": "pencil"}, {"es": "cuaderno", "word": "notebook"}, {"es": "borrador", "word": "eraser"}, {"es": "pupitre", "word": "desk"}, {"es": "clase", "word": "class"}, {"es": "tarea", "word": "homework"}, {"es": "letra", "word": "letter"}, {"es": "número", "word": "number"}, {"es": "computadora", "word": "computer"}], "Comida": [{"es": "manzana", "word": "apple"}, {"es": "plátano", "word": "banana"}, {"es": "naranja", "word": "orange"}, {"es": "fresa", "word": "strawberry"}, {"es": "pan", "word": "bread"}, {"es": "leche", "word": "milk"}, {"es": "agua", "word": "water"}, {"es": "arroz", "word": "rice"}, {"es": "queso", "word": "cheese"}, {"es": "pastel", "word": "cake"}, {"es": "galleta", "word": "cookie"}, {"es": "helado", "word": "ice cream"}], "Casa": [{"es": "casa", "word": "house"}, {"es": "puerta", "word": "door"}, {"es": "ventana", "word": "window"}, {"es": "cama", "word": "bed"}, {"es": "mesa", "word": "table"}, {"es": "silla", "word": "chair"}, {"es": "cocina", "word": "kitchen"}, {"es": "baño", "word": "bathroom"}, {"es": "jardín", "word": "garden"}, {"es": "lámpara", "word": "lamp"}, {"es": "sofá", "word": "sofa"}, {"es": "juguete", "word": "toy"}], "Cuerpo": [{"es": "cabeza", "word": "head"}, {"es": "ojo", "word": "eye"}, {"es": "oreja", "word": "ear"}, {"es": "nariz", "word": "nose"}, {"es": "boca", "word": "mouth"}, {"es": "mano", "word": "hand"}, {"es": "pie", "word": "foot"}, {"es": "brazo", "word": "arm"}, {"es": "pierna", "word": "leg"}, {"es": "cabello", "word": "hair"}, {"es": "diente", "word": "tooth"}, {"es": "corazón", "word": "heart"}], "Naturaleza": [{"es": "sol", "word": "sun"}, {"es": "luna", "word": "moon"}, {"es": "estrella", "word": "star"}, {"es": "nube", "word": "cloud"}, {"es": "lluvia", "word": "rain"}, {"es": "árbol", "word": "tree"}, {"es": "flor", "word": "flower"}, {"es": "montaña", "word": "mountain"}, {"es": "río", "word": "river"}, {"es": "mar", "word": "sea"}, {"es": "cielo", "word": "sky"}, {"es": "bosque", "word": "forest"}], "Transporte": [{"es": "carro", "word": "car"}, {"es": "autobús", "word": "bus"}, {"es": "tren", "word": "train"}, {"es": "avión", "word": "airplane"}, {"es": "barco", "word": "boat"}, {"es": "bicicleta", "word": "bicycle"}, {"es": "motocicleta", "word": "motorcycle"}, {"es": "camión", "word": "truck"}, {"es": "cohete", "word": "rocket"}, {"es": "estación", "word": "station"}, {"es": "camino", "word": "road"}, {"es": "rueda", "word": "wheel"}], "Emociones": [{"es": "feliz", "word": "happy"}, {"es": "triste", "word": "sad"}, {"es": "enojado", "word": "angry"}, {"es": "asustado", "word": "afraid"}, {"es": "sorprendido", "word": "surprised"}, {"es": "cansado", "word": "tired"}, {"es": "emocionado", "word": "excited"}, {"es": "tranquilo", "word": "calm"}, {"es": "amor", "word": "love"}, {"es": "amable", "word": "kind"}, {"es": "valiente", "word": "brave"}, {"es": "orgulloso", "word": "proud"}]}}, "fr": {"name": "Français", "flag": "🇫🇷", "locale": "fr-FR", "categories": {"Animales": [{"es": "perro", "word": "chien"}, {"es": "gato", "word": "chat"}, {"es": "león", "word": "lion"}, {"es": "tigre", "word": "tigre"}, {"es": "elefante", "word": "éléphant"}, {"es": "conejo", "word": "lapin"}, {"es": "caballo", "word": "cheval"}, {"es": "vaca", "word": "vache"}, {"es": "pato", "word": "canard"}, {"es": "pájaro", "word": "oiseau"}, {"es": "pez", "word": "poisson"}, {"es": "mariposa", "word": "papillon"}], "Colores": [{"es": "rojo", "word": "rouge"}, {"es": "azul", "word": "bleu"}, {"es": "amarillo", "word": "jaune"}, {"es": "verde", "word": "vert"}, {"es": "rosa", "word": "rose"}, {"es": "morado", "word": "violet"}, {"es": "naranja", "word": "orange"}, {"es": "negro", "word": "noir"}, {"es": "blanco", "word": "blanc"}, {"es": "café", "word": "marron"}, {"es": "gris", "word": "gris"}, {"es": "dorado", "word": "doré"}], "Familia": [{"es": "mamá", "word": "mère"}, {"es": "papá", "word": "père"}, {"es": "hermano", "word": "frère"}, {"es": "hermana", "word": "sœur"}, {"es": "abuela", "word": "grand-mère"}, {"es": "abuelo", "word": "grand-père"}, {"es": "bebé", "word": "bébé"}, {"es": "familia", "word": "famille"}, {"es": "tía", "word": "tante"}, {"es": "tío", "word": "oncle"}, {"es": "primo", "word": "cousin"}, {"es": "amigo", "word": "ami"}], "Escuela": [{"es": "escuela", "word": "école"}, {"es": "maestro", "word": "professeur"}, {"es": "libro", "word": "livre"}, {"es": "lápiz", "word": "crayon"}, {"es": "cuaderno", "word": "cahier"}, {"es": "borrador", "word": "gomme"}, {"es": "pupitre", "word": "bureau"}, {"es": "clase", "word": "classe"}, {"es": "tarea", "word": "devoirs"}, {"es": "letra", "word": "lettre"}, {"es": "número", "word": "nombre"}, {"es": "computadora", "word": "ordinateur"}], "Comida": [{"es": "manzana", "word": "pomme"}, {"es": "plátano", "word": "banane"}, {"es": "naranja", "word": "orange"}, {"es": "fresa", "word": "fraise"}, {"es": "pan", "word": "pain"}, {"es": "leche", "word": "lait"}, {"es": "agua", "word": "eau"}, {"es": "arroz", "word": "riz"}, {"es": "queso", "word": "fromage"}, {"es": "pastel", "word": "gâteau"}, {"es": "galleta", "word": "biscuit"}, {"es": "helado", "word": "glace"}], "Casa": [{"es": "casa", "word": "maison"}, {"es": "puerta", "word": "porte"}, {"es": "ventana", "word": "fenêtre"}, {"es": "cama", "word": "lit"}, {"es": "mesa", "word": "table"}, {"es": "silla", "word": "chaise"}, {"es": "cocina", "word": "cuisine"}, {"es": "baño", "word": "salle de bain"}, {"es": "jardín", "word": "jardin"}, {"es": "lámpara", "word": "lampe"}, {"es": "sofá", "word": "canapé"}, {"es": "juguete", "word": "jouet"}], "Cuerpo": [{"es": "cabeza", "word": "tête"}, {"es": "ojo", "word": "œil"}, {"es": "oreja", "word": "oreille"}, {"es": "nariz", "word": "nez"}, {"es": "boca", "word": "bouche"}, {"es": "mano", "word": "main"}, {"es": "pie", "word": "pied"}, {"es": "brazo", "word": "bras"}, {"es": "pierna", "word": "jambe"}, {"es": "cabello", "word": "cheveux"}, {"es": "diente", "word": "dent"}, {"es": "corazón", "word": "cœur"}], "Naturaleza": [{"es": "sol", "word": "soleil"}, {"es": "luna", "word": "lune"}, {"es": "estrella", "word": "étoile"}, {"es": "nube", "word": "nuage"}, {"es": "lluvia", "word": "pluie"}, {"es": "árbol", "word": "arbre"}, {"es": "flor", "word": "fleur"}, {"es": "montaña", "word": "montagne"}, {"es": "río", "word": "rivière"}, {"es": "mar", "word": "mer"}, {"es": "cielo", "word": "ciel"}, {"es": "bosque", "word": "forêt"}], "Transporte": [{"es": "carro", "word": "voiture"}, {"es": "autobús", "word": "bus"}, {"es": "tren", "word": "train"}, {"es": "avión", "word": "avion"}, {"es": "barco", "word": "bateau"}, {"es": "bicicleta", "word": "vélo"}, {"es": "motocicleta", "word": "moto"}, {"es": "camión", "word": "camion"}, {"es": "cohete", "word": "fusée"}, {"es": "estación", "word": "gare"}, {"es": "camino", "word": "route"}, {"es": "rueda", "word": "roue"}], "Emociones": [{"es": "feliz", "word": "heureux"}, {"es": "triste", "word": "triste"}, {"es": "enojado", "word": "fâché"}, {"es": "asustado", "word": "effrayé"}, {"es": "sorprendido", "word": "surpris"}, {"es": "cansado", "word": "fatigué"}, {"es": "emocionado", "word": "enthousiaste"}, {"es": "tranquilo", "word": "calme"}, {"es": "amor", "word": "amour"}, {"es": "amable", "word": "gentil"}, {"es": "valiente", "word": "courageux"}, {"es": "orgulloso", "word": "fier"}]}}, "it": {"name": "Italiano", "flag": "🇮🇹", "locale": "it-IT", "categories": {"Animales": [{"es": "perro", "word": "cane"}, {"es": "gato", "word": "gatto"}, {"es": "león", "word": "leone"}, {"es": "tigre", "word": "tigre"}, {"es": "elefante", "word": "elefante"}, {"es": "conejo", "word": "coniglio"}, {"es": "caballo", "word": "cavallo"}, {"es": "vaca", "word": "mucca"}, {"es": "pato", "word": "anatra"}, {"es": "pájaro", "word": "uccello"}, {"es": "pez", "word": "pesce"}, {"es": "mariposa", "word": "farfalla"}], "Colores": [{"es": "rojo", "word": "rosso"}, {"es": "azul", "word": "blu"}, {"es": "amarillo", "word": "giallo"}, {"es": "verde", "word": "verde"}, {"es": "rosa", "word": "rosa"}, {"es": "morado", "word": "viola"}, {"es": "naranja", "word": "arancione"}, {"es": "negro", "word": "nero"}, {"es": "blanco", "word": "bianco"}, {"es": "café", "word": "marrone"}, {"es": "gris", "word": "grigio"}, {"es": "dorado", "word": "oro"}], "Familia": [{"es": "mamá", "word": "mamma"}, {"es": "papá", "word": "papà"}, {"es": "hermano", "word": "fratello"}, {"es": "hermana", "word": "sorella"}, {"es": "abuela", "word": "nonna"}, {"es": "abuelo", "word": "nonno"}, {"es": "bebé", "word": "bambino"}, {"es": "familia", "word": "famiglia"}, {"es": "tía", "word": "zia"}, {"es": "tío", "word": "zio"}, {"es": "primo", "word": "cugino"}, {"es": "amigo", "word": "amico"}], "Escuela": [{"es": "escuela", "word": "scuola"}, {"es": "maestro", "word": "insegnante"}, {"es": "libro", "word": "libro"}, {"es": "lápiz", "word": "matita"}, {"es": "cuaderno", "word": "quaderno"}, {"es": "borrador", "word": "gomma"}, {"es": "pupitre", "word": "banco"}, {"es": "clase", "word": "classe"}, {"es": "tarea", "word": "compiti"}, {"es": "letra", "word": "lettera"}, {"es": "número", "word": "numero"}, {"es": "computadora", "word": "computer"}], "Comida": [{"es": "manzana", "word": "mela"}, {"es": "plátano", "word": "banana"}, {"es": "naranja", "word": "arancia"}, {"es": "fresa", "word": "fragola"}, {"es": "pan", "word": "pane"}, {"es": "leche", "word": "latte"}, {"es": "agua", "word": "acqua"}, {"es": "arroz", "word": "riso"}, {"es": "queso", "word": "formaggio"}, {"es": "pastel", "word": "torta"}, {"es": "galleta", "word": "biscotto"}, {"es": "helado", "word": "gelato"}], "Casa": [{"es": "casa", "word": "casa"}, {"es": "puerta", "word": "porta"}, {"es": "ventana", "word": "finestra"}, {"es": "cama", "word": "letto"}, {"es": "mesa", "word": "tavolo"}, {"es": "silla", "word": "sedia"}, {"es": "cocina", "word": "cucina"}, {"es": "baño", "word": "bagno"}, {"es": "jardín", "word": "giardino"}, {"es": "lámpara", "word": "lampada"}, {"es": "sofá", "word": "divano"}, {"es": "juguete", "word": "giocattolo"}], "Cuerpo": [{"es": "cabeza", "word": "testa"}, {"es": "ojo", "word": "occhio"}, {"es": "oreja", "word": "orecchio"}, {"es": "nariz", "word": "naso"}, {"es": "boca", "word": "bocca"}, {"es": "mano", "word": "mano"}, {"es": "pie", "word": "piede"}, {"es": "brazo", "word": "braccio"}, {"es": "pierna", "word": "gamba"}, {"es": "cabello", "word": "capelli"}, {"es": "diente", "word": "dente"}, {"es": "corazón", "word": "cuore"}], "Naturaleza": [{"es": "sol", "word": "sole"}, {"es": "luna", "word": "luna"}, {"es": "estrella", "word": "stella"}, {"es": "nube", "word": "nuvola"}, {"es": "lluvia", "word": "pioggia"}, {"es": "árbol", "word": "albero"}, {"es": "flor", "word": "fiore"}, {"es": "montaña", "word": "montagna"}, {"es": "río", "word": "fiume"}, {"es": "mar", "word": "mare"}, {"es": "cielo", "word": "cielo"}, {"es": "bosque", "word": "foresta"}], "Transporte": [{"es": "carro", "word": "auto"}, {"es": "autobús", "word": "autobus"}, {"es": "tren", "word": "treno"}, {"es": "avión", "word": "aereo"}, {"es": "barco", "word": "barca"}, {"es": "bicicleta", "word": "bicicletta"}, {"es": "motocicleta", "word": "motocicletta"}, {"es": "camión", "word": "camion"}, {"es": "cohete", "word": "razzo"}, {"es": "estación", "word": "stazione"}, {"es": "camino", "word": "strada"}, {"es": "rueda", "word": "ruota"}], "Emociones": [{"es": "feliz", "word": "felice"}, {"es": "triste", "word": "triste"}, {"es": "enojado", "word": "arrabbiato"}, {"es": "asustado", "word": "spaventato"}, {"es": "sorprendido", "word": "sorpreso"}, {"es": "cansado", "word": "stanco"}, {"es": "emocionado", "word": "emozionato"}, {"es": "tranquilo", "word": "calmo"}, {"es": "amor", "word": "amore"}, {"es": "amable", "word": "gentile"}, {"es": "valiente", "word": "coraggioso"}, {"es": "orgulloso", "word": "orgoglioso"}]}}, "de": {"name": "Deutsch", "flag": "🇩🇪", "locale": "de-DE", "categories": {"Animales": [{"es": "perro", "word": "Hund"}, {"es": "gato", "word": "Katze"}, {"es": "león", "word": "Löwe"}, {"es": "tigre", "word": "Tiger"}, {"es": "elefante", "word": "Elefant"}, {"es": "conejo", "word": "Kaninchen"}, {"es": "caballo", "word": "Pferd"}, {"es": "vaca", "word": "Kuh"}, {"es": "pato", "word": "Ente"}, {"es": "pájaro", "word": "Vogel"}, {"es": "pez", "word": "Fisch"}, {"es": "mariposa", "word": "Schmetterling"}], "Colores": [{"es": "rojo", "word": "rot"}, {"es": "azul", "word": "blau"}, {"es": "amarillo", "word": "gelb"}, {"es": "verde", "word": "grün"}, {"es": "rosa", "word": "rosa"}, {"es": "morado", "word": "lila"}, {"es": "naranja", "word": "orange"}, {"es": "negro", "word": "schwarz"}, {"es": "blanco", "word": "weiß"}, {"es": "café", "word": "braun"}, {"es": "gris", "word": "grau"}, {"es": "dorado", "word": "gold"}], "Familia": [{"es": "mamá", "word": "Mutter"}, {"es": "papá", "word": "Vater"}, {"es": "hermano", "word": "Bruder"}, {"es": "hermana", "word": "Schwester"}, {"es": "abuela", "word": "Großmutter"}, {"es": "abuelo", "word": "Großvater"}, {"es": "bebé", "word": "Baby"}, {"es": "familia", "word": "Familie"}, {"es": "tía", "word": "Tante"}, {"es": "tío", "word": "Onkel"}, {"es": "primo", "word": "Cousin"}, {"es": "amigo", "word": "Freund"}], "Escuela": [{"es": "escuela", "word": "Schule"}, {"es": "maestro", "word": "Lehrer"}, {"es": "libro", "word": "Buch"}, {"es": "lápiz", "word": "Bleistift"}, {"es": "cuaderno", "word": "Heft"}, {"es": "borrador", "word": "Radiergummi"}, {"es": "pupitre", "word": "Schreibtisch"}, {"es": "clase", "word": "Klasse"}, {"es": "tarea", "word": "Hausaufgaben"}, {"es": "letra", "word": "Buchstabe"}, {"es": "número", "word": "Zahl"}, {"es": "computadora", "word": "Computer"}], "Comida": [{"es": "manzana", "word": "Apfel"}, {"es": "plátano", "word": "Banane"}, {"es": "naranja", "word": "Orange"}, {"es": "fresa", "word": "Erdbeere"}, {"es": "pan", "word": "Brot"}, {"es": "leche", "word": "Milch"}, {"es": "agua", "word": "Wasser"}, {"es": "arroz", "word": "Reis"}, {"es": "queso", "word": "Käse"}, {"es": "pastel", "word": "Kuchen"}, {"es": "galleta", "word": "Keks"}, {"es": "helado", "word": "Eis"}], "Casa": [{"es": "casa", "word": "Haus"}, {"es": "puerta", "word": "Tür"}, {"es": "ventana", "word": "Fenster"}, {"es": "cama", "word": "Bett"}, {"es": "mesa", "word": "Tisch"}, {"es": "silla", "word": "Stuhl"}, {"es": "cocina", "word": "Küche"}, {"es": "baño", "word": "Badezimmer"}, {"es": "jardín", "word": "Garten"}, {"es": "lámpara", "word": "Lampe"}, {"es": "sofá", "word": "Sofa"}, {"es": "juguete", "word": "Spielzeug"}], "Cuerpo": [{"es": "cabeza", "word": "Kopf"}, {"es": "ojo", "word": "Auge"}, {"es": "oreja", "word": "Ohr"}, {"es": "nariz", "word": "Nase"}, {"es": "boca", "word": "Mund"}, {"es": "mano", "word": "Hand"}, {"es": "pie", "word": "Fuß"}, {"es": "brazo", "word": "Arm"}, {"es": "pierna", "word": "Bein"}, {"es": "cabello", "word": "Haare"}, {"es": "diente", "word": "Zahn"}, {"es": "corazón", "word": "Herz"}], "Naturaleza": [{"es": "sol", "word": "Sonne"}, {"es": "luna", "word": "Mond"}, {"es": "estrella", "word": "Stern"}, {"es": "nube", "word": "Wolke"}, {"es": "lluvia", "word": "Regen"}, {"es": "árbol", "word": "Baum"}, {"es": "flor", "word": "Blume"}, {"es": "montaña", "word": "Berg"}, {"es": "río", "word": "Fluss"}, {"es": "mar", "word": "Meer"}, {"es": "cielo", "word": "Himmel"}, {"es": "bosque", "word": "Wald"}], "Transporte": [{"es": "carro", "word": "Auto"}, {"es": "autobús", "word": "Bus"}, {"es": "tren", "word": "Zug"}, {"es": "avión", "word": "Flugzeug"}, {"es": "barco", "word": "Boot"}, {"es": "bicicleta", "word": "Fahrrad"}, {"es": "motocicleta", "word": "Motorrad"}, {"es": "camión", "word": "Lastwagen"}, {"es": "cohete", "word": "Rakete"}, {"es": "estación", "word": "Bahnhof"}, {"es": "camino", "word": "Straße"}, {"es": "rueda", "word": "Rad"}], "Emociones": [{"es": "feliz", "word": "glücklich"}, {"es": "triste", "word": "traurig"}, {"es": "enojado", "word": "wütend"}, {"es": "asustado", "word": "ängstlich"}, {"es": "sorprendido", "word": "überrascht"}, {"es": "cansado", "word": "müde"}, {"es": "emocionado", "word": "aufgeregt"}, {"es": "tranquilo", "word": "ruhig"}, {"es": "amor", "word": "Liebe"}, {"es": "amable", "word": "freundlich"}, {"es": "valiente", "word": "mutig"}, {"es": "orgulloso", "word": "stolz"}]}}, "pt": {"name": "Português", "flag": "🇧🇷", "locale": "pt-BR", "categories": {"Animales": [{"es": "perro", "word": "cão"}, {"es": "gato", "word": "gato"}, {"es": "león", "word": "leão"}, {"es": "tigre", "word": "tigre"}, {"es": "elefante", "word": "elefante"}, {"es": "conejo", "word": "coelho"}, {"es": "caballo", "word": "cavalo"}, {"es": "vaca", "word": "vaca"}, {"es": "pato", "word": "pato"}, {"es": "pájaro", "word": "pássaro"}, {"es": "pez", "word": "peixe"}, {"es": "mariposa", "word": "borboleta"}], "Colores": [{"es": "rojo", "word": "vermelho"}, {"es": "azul", "word": "azul"}, {"es": "amarillo", "word": "amarelo"}, {"es": "verde", "word": "verde"}, {"es": "rosa", "word": "rosa"}, {"es": "morado", "word": "roxo"}, {"es": "naranja", "word": "laranja"}, {"es": "negro", "word": "preto"}, {"es": "blanco", "word": "branco"}, {"es": "café", "word": "marrom"}, {"es": "gris", "word": "cinza"}, {"es": "dorado", "word": "dourado"}], "Familia": [{"es": "mamá", "word": "mãe"}, {"es": "papá", "word": "pai"}, {"es": "hermano", "word": "irmão"}, {"es": "hermana", "word": "irmã"}, {"es": "abuela", "word": "avó"}, {"es": "abuelo", "word": "avô"}, {"es": "bebé", "word": "bebê"}, {"es": "familia", "word": "família"}, {"es": "tía", "word": "tia"}, {"es": "tío", "word": "tio"}, {"es": "primo", "word": "primo"}, {"es": "amigo", "word": "amigo"}], "Escuela": [{"es": "escuela", "word": "escola"}, {"es": "maestro", "word": "professor"}, {"es": "libro", "word": "livro"}, {"es": "lápiz", "word": "lápis"}, {"es": "cuaderno", "word": "caderno"}, {"es": "borrador", "word": "borracha"}, {"es": "pupitre", "word": "carteira"}, {"es": "clase", "word": "aula"}, {"es": "tarea", "word": "lição de casa"}, {"es": "letra", "word": "letra"}, {"es": "número", "word": "número"}, {"es": "computadora", "word": "computador"}], "Comida": [{"es": "manzana", "word": "maçã"}, {"es": "plátano", "word": "banana"}, {"es": "naranja", "word": "laranja"}, {"es": "fresa", "word": "morango"}, {"es": "pan", "word": "pão"}, {"es": "leche", "word": "leite"}, {"es": "agua", "word": "água"}, {"es": "arroz", "word": "arroz"}, {"es": "queso", "word": "queijo"}, {"es": "pastel", "word": "bolo"}, {"es": "galleta", "word": "biscoito"}, {"es": "helado", "word": "sorvete"}], "Casa": [{"es": "casa", "word": "casa"}, {"es": "puerta", "word": "porta"}, {"es": "ventana", "word": "janela"}, {"es": "cama", "word": "cama"}, {"es": "mesa", "word": "mesa"}, {"es": "silla", "word": "cadeira"}, {"es": "cocina", "word": "cozinha"}, {"es": "baño", "word": "banheiro"}, {"es": "jardín", "word": "jardim"}, {"es": "lámpara", "word": "lâmpada"}, {"es": "sofá", "word": "sofá"}, {"es": "juguete", "word": "brinquedo"}], "Cuerpo": [{"es": "cabeza", "word": "cabeça"}, {"es": "ojo", "word": "olho"}, {"es": "oreja", "word": "orelha"}, {"es": "nariz", "word": "nariz"}, {"es": "boca", "word": "boca"}, {"es": "mano", "word": "mão"}, {"es": "pie", "word": "pé"}, {"es": "brazo", "word": "braço"}, {"es": "pierna", "word": "perna"}, {"es": "cabello", "word": "cabelo"}, {"es": "diente", "word": "dente"}, {"es": "corazón", "word": "coração"}], "Naturaleza": [{"es": "sol", "word": "sol"}, {"es": "luna", "word": "lua"}, {"es": "estrella", "word": "estrela"}, {"es": "nube", "word": "nuvem"}, {"es": "lluvia", "word": "chuva"}, {"es": "árbol", "word": "árvore"}, {"es": "flor", "word": "flor"}, {"es": "montaña", "word": "montanha"}, {"es": "río", "word": "rio"}, {"es": "mar", "word": "mar"}, {"es": "cielo", "word": "céu"}, {"es": "bosque", "word": "floresta"}], "Transporte": [{"es": "carro", "word": "carro"}, {"es": "autobús", "word": "ônibus"}, {"es": "tren", "word": "trem"}, {"es": "avión", "word": "avião"}, {"es": "barco", "word": "barco"}, {"es": "bicicleta", "word": "bicicleta"}, {"es": "motocicleta", "word": "motocicleta"}, {"es": "camión", "word": "caminhão"}, {"es": "cohete", "word": "foguete"}, {"es": "estación", "word": "estação"}, {"es": "camino", "word": "estrada"}, {"es": "rueda", "word": "roda"}], "Emociones": [{"es": "feliz", "word": "feliz"}, {"es": "triste", "word": "triste"}, {"es": "enojado", "word": "bravo"}, {"es": "asustado", "word": "assustado"}, {"es": "sorprendido", "word": "surpreso"}, {"es": "cansado", "word": "cansado"}, {"es": "emocionado", "word": "animado"}, {"es": "tranquilo", "word": "calmo"}, {"es": "amor", "word": "amor"}, {"es": "amable", "word": "gentil"}, {"es": "valiente", "word": "corajoso"}, {"es": "orgulloso", "word": "orgulhoso"}]}}, "ja": {"name": "日本語", "flag": "🇯🇵", "locale": "ja-JP", "categories": {"Animales": [{"es": "perro", "word": "犬"}, {"es": "gato", "word": "猫"}, {"es": "león", "word": "ライオン"}, {"es": "tigre", "word": "トラ"}, {"es": "elefante", "word": "ぞう"}, {"es": "conejo", "word": "うさぎ"}, {"es": "caballo", "word": "うま"}, {"es": "vaca", "word": "うし"}, {"es": "pato", "word": "あひる"}, {"es": "pájaro", "word": "とり"}, {"es": "pez", "word": "さかな"}, {"es": "mariposa", "word": "ちょう"}], "Colores": [{"es": "rojo", "word": "あか"}, {"es": "azul", "word": "あお"}, {"es": "amarillo", "word": "きいろ"}, {"es": "verde", "word": "みどり"}, {"es": "rosa", "word": "ピンク"}, {"es": "morado", "word": "むらさき"}, {"es": "naranja", "word": "オレンジ"}, {"es": "negro", "word": "くろ"}, {"es": "blanco", "word": "しろ"}, {"es": "café", "word": "ちゃいろ"}, {"es": "gris", "word": "はいいろ"}, {"es": "dorado", "word": "きんいろ"}], "Familia": [{"es": "mamá", "word": "おかあさん"}, {"es": "papá", "word": "おとうさん"}, {"es": "hermano", "word": "おとうと"}, {"es": "hermana", "word": "いもうと"}, {"es": "abuela", "word": "おばあさん"}, {"es": "abuelo", "word": "おじいさん"}, {"es": "bebé", "word": "あかちゃん"}, {"es": "familia", "word": "かぞく"}, {"es": "tía", "word": "おば"}, {"es": "tío", "word": "おじ"}, {"es": "primo", "word": "いとこ"}, {"es": "amigo", "word": "ともだち"}], "Escuela": [{"es": "escuela", "word": "がっこう"}, {"es": "maestro", "word": "せんせい"}, {"es": "libro", "word": "ほん"}, {"es": "lápiz", "word": "えんぴつ"}, {"es": "cuaderno", "word": "ノート"}, {"es": "borrador", "word": "けしゴム"}, {"es": "pupitre", "word": "つくえ"}, {"es": "clase", "word": "クラス"}, {"es": "tarea", "word": "しゅくだい"}, {"es": "letra", "word": "もじ"}, {"es": "número", "word": "すうじ"}, {"es": "computadora", "word": "コンピューター"}], "Comida": [{"es": "manzana", "word": "りんご"}, {"es": "plátano", "word": "バナナ"}, {"es": "naranja", "word": "オレンジ"}, {"es": "fresa", "word": "いちご"}, {"es": "pan", "word": "パン"}, {"es": "leche", "word": "ぎゅうにゅう"}, {"es": "agua", "word": "みず"}, {"es": "arroz", "word": "ごはん"}, {"es": "queso", "word": "チーズ"}, {"es": "pastel", "word": "ケーキ"}, {"es": "galleta", "word": "クッキー"}, {"es": "helado", "word": "アイスクリーム"}], "Casa": [{"es": "casa", "word": "いえ"}, {"es": "puerta", "word": "ドア"}, {"es": "ventana", "word": "まど"}, {"es": "cama", "word": "ベッド"}, {"es": "mesa", "word": "テーブル"}, {"es": "silla", "word": "いす"}, {"es": "cocina", "word": "キッチン"}, {"es": "baño", "word": "おふろ"}, {"es": "jardín", "word": "にわ"}, {"es": "lámpara", "word": "ランプ"}, {"es": "sofá", "word": "ソファ"}, {"es": "juguete", "word": "おもちゃ"}], "Cuerpo": [{"es": "cabeza", "word": "あたま"}, {"es": "ojo", "word": "め"}, {"es": "oreja", "word": "みみ"}, {"es": "nariz", "word": "はな"}, {"es": "boca", "word": "くち"}, {"es": "mano", "word": "て"}, {"es": "pie", "word": "あし"}, {"es": "brazo", "word": "うで"}, {"es": "pierna", "word": "あし"}, {"es": "cabello", "word": "かみ"}, {"es": "diente", "word": "は"}, {"es": "corazón", "word": "こころ"}], "Naturaleza": [{"es": "sol", "word": "たいよう"}, {"es": "luna", "word": "つき"}, {"es": "estrella", "word": "ほし"}, {"es": "nube", "word": "くも"}, {"es": "lluvia", "word": "あめ"}, {"es": "árbol", "word": "き"}, {"es": "flor", "word": "はな"}, {"es": "montaña", "word": "やま"}, {"es": "río", "word": "かわ"}, {"es": "mar", "word": "うみ"}, {"es": "cielo", "word": "そら"}, {"es": "bosque", "word": "もり"}], "Transporte": [{"es": "carro", "word": "くるま"}, {"es": "autobús", "word": "バス"}, {"es": "tren", "word": "でんしゃ"}, {"es": "avión", "word": "ひこうき"}, {"es": "barco", "word": "ふね"}, {"es": "bicicleta", "word": "じてんしゃ"}, {"es": "motocicleta", "word": "バイク"}, {"es": "camión", "word": "トラック"}, {"es": "cohete", "word": "ロケット"}, {"es": "estación", "word": "えき"}, {"es": "camino", "word": "みち"}, {"es": "rueda", "word": "くるま"}], "Emociones": [{"es": "feliz", "word": "うれしい"}, {"es": "triste", "word": "かなしい"}, {"es": "enojado", "word": "おこっている"}, {"es": "asustado", "word": "こわい"}, {"es": "sorprendido", "word": "びっくり"}, {"es": "cansado", "word": "つかれた"}, {"es": "emocionado", "word": "わくわく"}, {"es": "tranquilo", "word": "おだやか"}, {"es": "amor", "word": "あい"}, {"es": "amable", "word": "やさしい"}, {"es": "valiente", "word": "ゆうかん"}, {"es": "orgulloso", "word": "ほこらしい"}]}}, "ko": {"name": "한국어", "flag": "🇰🇷", "locale": "ko-KR", "categories": {"Animales": [{"es": "perro", "word": "개"}, {"es": "gato", "word": "고양이"}, {"es": "león", "word": "사자"}, {"es": "tigre", "word": "호랑이"}, {"es": "elefante", "word": "코끼리"}, {"es": "conejo", "word": "토끼"}, {"es": "caballo", "word": "말"}, {"es": "vaca", "word": "소"}, {"es": "pato", "word": "오리"}, {"es": "pájaro", "word": "새"}, {"es": "pez", "word": "물고기"}, {"es": "mariposa", "word": "나비"}], "Colores": [{"es": "rojo", "word": "빨강"}, {"es": "azul", "word": "파랑"}, {"es": "amarillo", "word": "노랑"}, {"es": "verde", "word": "초록"}, {"es": "rosa", "word": "분홍"}, {"es": "morado", "word": "보라"}, {"es": "naranja", "word": "주황"}, {"es": "negro", "word": "검정"}, {"es": "blanco", "word": "하양"}, {"es": "café", "word": "갈색"}, {"es": "gris", "word": "회색"}, {"es": "dorado", "word": "금색"}], "Familia": [{"es": "mamá", "word": "엄마"}, {"es": "papá", "word": "아빠"}, {"es": "hermano", "word": "남자 형제"}, {"es": "hermana", "word": "여자 형제"}, {"es": "abuela", "word": "할머니"}, {"es": "abuelo", "word": "할아버지"}, {"es": "bebé", "word": "아기"}, {"es": "familia", "word": "가족"}, {"es": "tía", "word": "이모"}, {"es": "tío", "word": "삼촌"}, {"es": "primo", "word": "사촌"}, {"es": "amigo", "word": "친구"}], "Escuela": [{"es": "escuela", "word": "학교"}, {"es": "maestro", "word": "선생님"}, {"es": "libro", "word": "책"}, {"es": "lápiz", "word": "연필"}, {"es": "cuaderno", "word": "공책"}, {"es": "borrador", "word": "지우개"}, {"es": "pupitre", "word": "책상"}, {"es": "clase", "word": "수업"}, {"es": "tarea", "word": "숙제"}, {"es": "letra", "word": "글자"}, {"es": "número", "word": "숫자"}, {"es": "computadora", "word": "컴퓨터"}], "Comida": [{"es": "manzana", "word": "사과"}, {"es": "plátano", "word": "바나나"}, {"es": "naranja", "word": "오렌지"}, {"es": "fresa", "word": "딸기"}, {"es": "pan", "word": "빵"}, {"es": "leche", "word": "우유"}, {"es": "agua", "word": "물"}, {"es": "arroz", "word": "밥"}, {"es": "queso", "word": "치즈"}, {"es": "pastel", "word": "케이크"}, {"es": "galleta", "word": "쿠키"}, {"es": "helado", "word": "아이스크림"}], "Casa": [{"es": "casa", "word": "집"}, {"es": "puerta", "word": "문"}, {"es": "ventana", "word": "창문"}, {"es": "cama", "word": "침대"}, {"es": "mesa", "word": "탁자"}, {"es": "silla", "word": "의자"}, {"es": "cocina", "word": "부엌"}, {"es": "baño", "word": "화장실"}, {"es": "jardín", "word": "정원"}, {"es": "lámpara", "word": "램프"}, {"es": "sofá", "word": "소파"}, {"es": "juguete", "word": "장난감"}], "Cuerpo": [{"es": "cabeza", "word": "머리"}, {"es": "ojo", "word": "눈"}, {"es": "oreja", "word": "귀"}, {"es": "nariz", "word": "코"}, {"es": "boca", "word": "입"}, {"es": "mano", "word": "손"}, {"es": "pie", "word": "발"}, {"es": "brazo", "word": "팔"}, {"es": "pierna", "word": "다리"}, {"es": "cabello", "word": "머리카락"}, {"es": "diente", "word": "이"}, {"es": "corazón", "word": "마음"}], "Naturaleza": [{"es": "sol", "word": "태양"}, {"es": "luna", "word": "달"}, {"es": "estrella", "word": "별"}, {"es": "nube", "word": "구름"}, {"es": "lluvia", "word": "비"}, {"es": "árbol", "word": "나무"}, {"es": "flor", "word": "꽃"}, {"es": "montaña", "word": "산"}, {"es": "río", "word": "강"}, {"es": "mar", "word": "바다"}, {"es": "cielo", "word": "하늘"}, {"es": "bosque", "word": "숲"}], "Transporte": [{"es": "carro", "word": "자동차"}, {"es": "autobús", "word": "버스"}, {"es": "tren", "word": "기차"}, {"es": "avión", "word": "비행기"}, {"es": "barco", "word": "배"}, {"es": "bicicleta", "word": "자전거"}, {"es": "motocicleta", "word": "오토바이"}, {"es": "camión", "word": "트럭"}, {"es": "cohete", "word": "로켓"}, {"es": "estación", "word": "역"}, {"es": "camino", "word": "길"}, {"es": "rueda", "word": "바퀴"}], "Emociones": [{"es": "feliz", "word": "행복한"}, {"es": "triste", "word": "슬픈"}, {"es": "enojado", "word": "화난"}, {"es": "asustado", "word": "무서운"}, {"es": "sorprendido", "word": "놀란"}, {"es": "cansado", "word": "피곤한"}, {"es": "emocionado", "word": "신나는"}, {"es": "tranquilo", "word": "차분한"}, {"es": "amor", "word": "사랑"}, {"es": "amable", "word": "친절한"}, {"es": "valiente", "word": "용감한"}, {"es": "orgulloso", "word": "자랑스러운"}]}}, "zh": {"name": "中文", "flag": "🇨🇳", "locale": "zh-CN", "categories": {"Animales": [{"es": "perro", "word": "狗"}, {"es": "gato", "word": "猫"}, {"es": "león", "word": "狮子"}, {"es": "tigre", "word": "老虎"}, {"es": "elefante", "word": "大象"}, {"es": "conejo", "word": "兔子"}, {"es": "caballo", "word": "马"}, {"es": "vaca", "word": "牛"}, {"es": "pato", "word": "鸭子"}, {"es": "pájaro", "word": "鸟"}, {"es": "pez", "word": "鱼"}, {"es": "mariposa", "word": "蝴蝶"}], "Colores": [{"es": "rojo", "word": "红色"}, {"es": "azul", "word": "蓝色"}, {"es": "amarillo", "word": "黄色"}, {"es": "verde", "word": "绿色"}, {"es": "rosa", "word": "粉色"}, {"es": "morado", "word": "紫色"}, {"es": "naranja", "word": "橙色"}, {"es": "negro", "word": "黑色"}, {"es": "blanco", "word": "白色"}, {"es": "café", "word": "棕色"}, {"es": "gris", "word": "灰色"}, {"es": "dorado", "word": "金色"}], "Familia": [{"es": "mamá", "word": "妈妈"}, {"es": "papá", "word": "爸爸"}, {"es": "hermano", "word": "兄弟"}, {"es": "hermana", "word": "姐妹"}, {"es": "abuela", "word": "奶奶"}, {"es": "abuelo", "word": "爷爷"}, {"es": "bebé", "word": "婴儿"}, {"es": "familia", "word": "家庭"}, {"es": "tía", "word": "阿姨"}, {"es": "tío", "word": "叔叔"}, {"es": "primo", "word": "表兄弟"}, {"es": "amigo", "word": "朋友"}], "Escuela": [{"es": "escuela", "word": "学校"}, {"es": "maestro", "word": "老师"}, {"es": "libro", "word": "书"}, {"es": "lápiz", "word": "铅笔"}, {"es": "cuaderno", "word": "笔记本"}, {"es": "borrador", "word": "橡皮"}, {"es": "pupitre", "word": "课桌"}, {"es": "clase", "word": "课堂"}, {"es": "tarea", "word": "作业"}, {"es": "letra", "word": "字母"}, {"es": "número", "word": "数字"}, {"es": "computadora", "word": "电脑"}], "Comida": [{"es": "manzana", "word": "苹果"}, {"es": "plátano", "word": "香蕉"}, {"es": "naranja", "word": "橙子"}, {"es": "fresa", "word": "草莓"}, {"es": "pan", "word": "面包"}, {"es": "leche", "word": "牛奶"}, {"es": "agua", "word": "水"}, {"es": "arroz", "word": "米饭"}, {"es": "queso", "word": "奶酪"}, {"es": "pastel", "word": "蛋糕"}, {"es": "galleta", "word": "饼干"}, {"es": "helado", "word": "冰淇淋"}], "Casa": [{"es": "casa", "word": "房子"}, {"es": "puerta", "word": "门"}, {"es": "ventana", "word": "窗户"}, {"es": "cama", "word": "床"}, {"es": "mesa", "word": "桌子"}, {"es": "silla", "word": "椅子"}, {"es": "cocina", "word": "厨房"}, {"es": "baño", "word": "浴室"}, {"es": "jardín", "word": "花园"}, {"es": "lámpara", "word": "灯"}, {"es": "sofá", "word": "沙发"}, {"es": "juguete", "word": "玩具"}], "Cuerpo": [{"es": "cabeza", "word": "头"}, {"es": "ojo", "word": "眼睛"}, {"es": "oreja", "word": "耳朵"}, {"es": "nariz", "word": "鼻子"}, {"es": "boca", "word": "嘴巴"}, {"es": "mano", "word": "手"}, {"es": "pie", "word": "脚"}, {"es": "brazo", "word": "手臂"}, {"es": "pierna", "word": "腿"}, {"es": "cabello", "word": "头发"}, {"es": "diente", "word": "牙齿"}, {"es": "corazón", "word": "心"}], "Naturaleza": [{"es": "sol", "word": "太阳"}, {"es": "luna", "word": "月亮"}, {"es": "estrella", "word": "星星"}, {"es": "nube", "word": "云"}, {"es": "lluvia", "word": "雨"}, {"es": "árbol", "word": "树"}, {"es": "flor", "word": "花"}, {"es": "montaña", "word": "山"}, {"es": "río", "word": "河流"}, {"es": "mar", "word": "大海"}, {"es": "cielo", "word": "天空"}, {"es": "bosque", "word": "森林"}], "Transporte": [{"es": "carro", "word": "汽车"}, {"es": "autobús", "word": "公交车"}, {"es": "tren", "word": "火车"}, {"es": "avión", "word": "飞机"}, {"es": "barco", "word": "船"}, {"es": "bicicleta", "word": "自行车"}, {"es": "motocicleta", "word": "摩托车"}, {"es": "camión", "word": "卡车"}, {"es": "cohete", "word": "火箭"}, {"es": "estación", "word": "车站"}, {"es": "camino", "word": "道路"}, {"es": "rueda", "word": "轮子"}], "Emociones": [{"es": "feliz", "word": "开心"}, {"es": "triste", "word": "伤心"}, {"es": "enojado", "word": "生气"}, {"es": "asustado", "word": "害怕"}, {"es": "sorprendido", "word": "惊讶"}, {"es": "cansado", "word": "累"}, {"es": "emocionado", "word": "兴奋"}, {"es": "tranquilo", "word": "平静"}, {"es": "amor", "word": "爱"}, {"es": "amable", "word": "友善"}, {"es": "valiente", "word": "勇敢"}, {"es": "orgulloso", "word": "自豪"}]}}};
let v27Lang="en",v27Category="Animales",v27Search="",v27Page=1;
const V27_WORDS_PER_PAGE=24;
const V27_FAV_KEY="pp27_language_favorites";

function v27Favorites(){
  try{return JSON.parse(localStorage.getItem(V27_FAV_KEY)||"[]")}catch(e){return []}
}
function toggleLanguageFavorite(code,word){
  let fav=v27Favorites();
  const key=code+"|"+word;
  if(fav.includes(key)) fav=fav.filter(x=>x!==key); else fav.push(key);
  localStorage.setItem(V27_FAV_KEY,JSON.stringify(fav));
  renderLanguagesV27();
}
function speakLanguageWord(word,locale){
  if(!("speechSynthesis" in window)) return toast("Este navegador no permite pronunciación");
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(word);
  u.lang=locale;u.rate=.72;u.pitch=1.1;
  speechSynthesis.speak(u);
}
function setV27Language(code){v27Lang=code;v27Page=1;renderLanguagesV27()}
function setV27Category(cat){v27Category=cat;v27Page=1;renderLanguagesV27()}
function searchV27Words(value){v27Search=value.toLowerCase().trim();v27Page=1;renderLanguagesV27()}
function loadMoreV27(){v27Page++;renderLanguagesV27()}

function renderLanguagesV27(){
  const lang=V27_LANGUAGE_DATA[v27Lang];
  const favorites=v27Favorites();
  const allCategories=Object.keys(lang.categories);
  let words=[];
  if(v27Category==="Favoritas"){
    for(const [cat,list] of Object.entries(lang.categories)){
      list.forEach(w=>{if(favorites.includes(v27Lang+"|"+w.word))words.push({...w,category:cat})})
    }
  } else {
    words=(lang.categories[v27Category]||[]).map(w=>({...w,category:v27Category}));
  }
  if(v27Search){
    words=[];
    for(const [cat,list] of Object.entries(lang.categories)){
      list.forEach(w=>{
        if((w.word+" "+w.es+" "+cat).toLowerCase().includes(v27Search)) words.push({...w,category:cat})
      })
    }
  }
  const visible=words.slice(0,v27Page*V27_WORDS_PER_PAGE);
  const total=Object.values(lang.categories).reduce((n,a)=>n+a.length,0);
  document.getElementById("screen-languages").innerHTML=title("🌍","Universo de palabras","Aprende, escucha y guarda tus palabras favoritas")+`
    <section class="language-hero-v27">
      <div><span class="language-planet">🪐</span><h3>${lang.flag} ${lang.name}</h3><p><b>${total}</b> palabras organizadas en ${allCategories.length} categorías.</p></div>
      <div class="language-stats-v27"><span>⭐ Favoritas: ${favorites.filter(x=>x.startsWith(v27Lang+"|")).length}</span><span>📚 Mostradas: ${visible.length}</span></div>
    </section>
    <div class="lang-tabs-v27">${Object.entries(V27_LANGUAGE_DATA).map(([code,l])=>`<button class="${v27Lang===code?'active':''}" onclick="setV27Language('${code}')">${l.flag}<span>${l.name}</span></button>`).join("")}</div>
    <div class="language-toolbar-v27">
      <input value="${escapeHtml(v27Search)}" oninput="searchV27Words(this.value)" placeholder="🔎 Buscar en todas las categorías">
      <button onclick="setV27Category('Favoritas')">⭐ Mis favoritas</button>
      <button onclick="speakLanguageWord('${lang.name}','${lang.locale}')">🔊 Escuchar idioma</button>
    </div>
    <div class="language-categories-v27">${allCategories.map(cat=>`<button class="${v27Category===cat&&!v27Search?'active':''}" onclick="setV27Category('${cat}')"><span>${categoryEmojiV27(cat)}</span>${cat}</button>`).join("")}</div>
    <section class="language-word-grid-v27">
      ${visible.length?visible.map(w=>{
        const key=v27Lang+"|"+w.word, saved=favorites.includes(key);
        return `<article class="language-word-card-v27">
          <div class="word-category-v27">${categoryEmojiV27(w.category)} ${w.category}</div>
          <h3>${escapeHtml(w.word)}</h3>
          <p>${escapeHtml(w.es)}</p>
          <div>
            <button onclick="speakLanguageWord('${String(w.word).replace(/'/g,"\\'")}','${lang.locale}')">🔊 Escuchar</button>
            <button class="${saved?'saved':''}" onclick="toggleLanguageFavorite('${v27Lang}','${String(w.word).replace(/'/g,"\\'")}')">${saved?'★':'☆'}</button>
          </div>
        </article>`
      }).join(""):`<div class="panel"><h3>No encontramos palabras.</h3><p>Prueba otra categoría o búsqueda.</p></div>`}
    </section>
    ${visible.length<words.length?`<button class="load-more-v27" onclick="loadMoreV27()">➕ Cargar más palabras</button>`:""}
  `;
}
function categoryEmojiV27(cat){
  return ({"Animales":"🐾","Colores":"🎨","Familia":"👨‍👩‍👧","Escuela":"🏫","Comida":"🍎","Casa":"🏠","Cuerpo":"🖐️","Naturaleza":"🌳","Transporte":"🚀","Emociones":"😊","Favoritas":"⭐"})[cat]||"✨";
}


// ======================================================
// PARTY PLANET V28 — MATEMÁTICAS PARA NIÑOS
// ======================================================
let mathMode="add";
let mathLevel=1;
let mathQuestion=null;
let mathScore=0;
let mathStreak=0;
let mathAnswered=0;

const mathModes={
  add:{name:"Sumar",symbol:"+",emoji:"➕",color:"pink"},
  subtract:{name:"Restar",symbol:"−",emoji:"➖",color:"blue"},
  multiply:{name:"Multiplicar",symbol:"×",emoji:"✖️",color:"purple"},
  divide:{name:"Dividir",symbol:"÷",emoji:"➗",color:"green"}
};

function setMathMode(mode){
  mathMode=mode;
  mathScore=0;
  mathStreak=0;
  mathAnswered=0;
  newMathQuestion();
}
function setMathLevel(level){
  mathLevel=Number(level);
  mathScore=0;
  mathStreak=0;
  mathAnswered=0;
  newMathQuestion();
}
function randomInt(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}
function createMathQuestion(){
  let a,b,answer;
  const max=[10,20,50][mathLevel-1]||10;

  if(mathMode==="add"){
    a=randomInt(0,max);
    b=randomInt(0,max);
    answer=a+b;
  }else if(mathMode==="subtract"){
    a=randomInt(0,max);
    b=randomInt(0,a);
    answer=a-b;
  }else if(mathMode==="multiply"){
    const multMax=[5,10,12][mathLevel-1]||5;
    a=randomInt(1,multMax);
    b=randomInt(1,multMax);
    answer=a*b;
  }else{
    const divMax=[5,10,12][mathLevel-1]||5;
    b=randomInt(1,divMax);
    answer=randomInt(1,divMax);
    a=b*answer;
  }

  const wrongs=new Set();
  while(wrongs.size<3){
    let candidate=answer+randomInt(-6,6);
    if(candidate>=0 && candidate!==answer) wrongs.add(candidate);
  }
  const options=[answer,...wrongs].sort(()=>Math.random()-.5);
  return {a,b,answer,options};
}
function newMathQuestion(){
  mathQuestion=createMathQuestion();
  renderMath();
  setTimeout(()=>speakMathQuestion(),250);
}
function speakMathQuestion(){
  if(!mathQuestion)return;
  const m=mathModes[mathMode];
  const phrases={
    add:`¿Cuánto es ${mathQuestion.a} más ${mathQuestion.b}?`,
    subtract:`¿Cuánto es ${mathQuestion.a} menos ${mathQuestion.b}?`,
    multiply:`¿Cuánto es ${mathQuestion.a} por ${mathQuestion.b}?`,
    divide:`¿Cuánto es ${mathQuestion.a} dividido entre ${mathQuestion.b}?`
  };
  speakText(phrases[mathMode],.72,1.18);
}
function answerMath(value){
  if(!mathQuestion)return;
  mathAnswered++;
  if(Number(value)===mathQuestion.answer){
    mathScore++;
    mathStreak++;
    state.stars+=5;
    sync();
    createConfetti(28);
    toast("¡Correcto! Ganaste 5 estrellas");
    speakText("¡Muy bien!",.75,1.3);
    setTimeout(newMathQuestion,850);
  }else{
    mathStreak=0;
    toast("Casi. Intenta otra vez");
    speakText("Intenta otra vez",.78,1.2);
    const wrong=document.querySelector(`[data-math-answer="${value}"]`);
    if(wrong){
      wrong.classList.add("wrong");
      setTimeout(()=>wrong.classList.remove("wrong"),500);
    }
  }
}
function mathVisual(){
  if(!mathQuestion)return "";
  const limit=Math.min(mathQuestion.a,20);
  if(mathMode==="add" || mathMode==="subtract"){
    return `<div class="math-objects">${Array.from({length:limit},(_,i)=>`<span>${i<10?"⭐":"🪐"}</span>`).join("")}${mathQuestion.a>20?`<b>+${mathQuestion.a-20}</b>`:""}</div>`;
  }
  if(mathMode==="multiply"){
    return `<div class="math-groups">${Array.from({length:Math.min(mathQuestion.a,8)},()=>`<div>${Array.from({length:Math.min(mathQuestion.b,8)},()=>"<span>⭐</span>").join("")}</div>`).join("")}</div>`;
  }
  return `<div class="math-division"><span>${mathQuestion.a} 🍬</span><p>Repartidos entre ${mathQuestion.b} niños</p></div>`;
}
function renderMath(){
  if(!mathQuestion) mathQuestion=createMathQuestion();
  const m=mathModes[mathMode];
  document.getElementById("screen-math").innerHTML=title("➕","Matemáticas para niños","Suma, resta, multiplica y divide jugando")+`
    <section class="math-dashboard">
      <div class="math-mode-tabs">
        ${Object.entries(mathModes).map(([key,v])=>`<button class="${mathMode===key?'active':''}" onclick="setMathMode('${key}')"><span>${v.emoji}</span>${v.name}</button>`).join("")}
      </div>
      <div class="math-levels">
        <b>Nivel:</b>
        <button class="${mathLevel===1?'active':''}" onclick="setMathLevel(1)">🌱 Fácil</button>
        <button class="${mathLevel===2?'active':''}" onclick="setMathLevel(2)">🚀 Medio</button>
        <button class="${mathLevel===3?'active':''}" onclick="setMathLevel(3)">🌟 Difícil</button>
      </div>
      <div class="math-stats">
        <span>⭐ Puntos: <b>${mathScore}</b></span>
        <span>🔥 Racha: <b>${mathStreak}</b></span>
        <span>📝 Ejercicios: <b>${mathAnswered}</b></span>
      </div>
    </section>

    <section class="math-game-card ${m.color}">
      <div class="math-character">🪐</div>
      <p class="math-instruction">Resuelve la operación</p>
      <div class="math-operation">
        <span>${mathQuestion.a}</span>
        <strong>${m.symbol}</strong>
        <span>${mathQuestion.b}</span>
        <strong>=</strong>
        <span class="question-mark">?</span>
      </div>
      ${mathVisual()}
      <div class="math-answer-grid">
        ${mathQuestion.options.map(n=>`<button data-math-answer="${n}" onclick="answerMath(${n})">${n}</button>`).join("")}
      </div>
      <div class="math-actions">
        <button class="action-btn" onclick="speakMathQuestion()">🔊 Escuchar</button>
        <button class="action-btn" onclick="newMathQuestion()">🔄 Otro ejercicio</button>
      </div>
    </section>

    <section class="math-lessons">
      <button onclick="showMathLesson('add')"><span>🍎</span><b>Aprender a sumar</b><small>Juntar cantidades</small></button>
      <button onclick="showMathLesson('subtract')"><span>🎈</span><b>Aprender a restar</b><small>Quitar cantidades</small></button>
      <button onclick="showMathLesson('multiply')"><span>⭐</span><b>Tablas de multiplicar</b><small>Grupos iguales</small></button>
      <button onclick="showMathLesson('divide')"><span>🍬</span><b>Aprender a dividir</b><small>Repartir en partes iguales</small></button>
    </section>`;
}
function showMathLesson(type){
  const lessons={
    add:{title:"Sumar es juntar",text:"Si tienes 2 estrellas y recibes 3 más, ahora tienes 5 estrellas.",example:"2 + 3 = 5",emoji:"⭐⭐ + ⭐⭐⭐"},
    subtract:{title:"Restar es quitar",text:"Si tienes 5 globos y se van 2, quedan 3 globos.",example:"5 − 2 = 3",emoji:"🎈🎈🎈🎈🎈"},
    multiply:{title:"Multiplicar son grupos iguales",text:"Tres grupos de 2 estrellas forman 6 estrellas.",example:"3 × 2 = 6",emoji:"⭐⭐  ⭐⭐  ⭐⭐"},
    divide:{title:"Dividir es repartir",text:"Si repartimos 8 dulces entre 2 niños, cada uno recibe 4.",example:"8 ÷ 2 = 4",emoji:"🍬🍬🍬🍬  |  🍬🍬🍬🍬"}
  };
  const l=lessons[type];
  modalBody.innerHTML=`<div class="math-lesson-modal"><div class="lesson-emoji">${l.emoji}</div><h2>${l.title}</h2><p>${l.text}</p><div class="lesson-example">${l.example}</div><button class="action-btn" onclick="speakText('${l.text.replace(/'/g,"\\'")}',.72,1.2)">🔊 Escuchar explicación</button></div>`;
  modal.classList.remove("hidden");
}


// ======================================================
// PARTY PLANET V29 — SERPIENTES Y ESCALERAS
// ======================================================
const snakesLadders = {
  ladders: {3:22, 8:30, 20:41, 28:55, 36:62, 50:72, 71:92},
  snakes: {27:5, 40:18, 54:31, 68:45, 79:58, 87:66, 98:74}
};
let snakeGame = {
  player:1,
  cpu:1,
  turn:"player",
  rolling:false,
  finished:false,
  lastRoll:1,
  message:"¡Lanza el dado para comenzar!"
};

function resetSnakeGame(){
  snakeGame={player:1,cpu:1,turn:"player",rolling:false,finished:false,lastRoll:1,message:"¡Lanza el dado para comenzar!"};
  renderSnakes();
}
function boardCellNumber(row,col){
  const fromBottom=9-row;
  const base=fromBottom*10;
  return fromBottom%2===0 ? base+col+1 : base+(10-col);
}
function renderSnakeBoard(){
  let html="";
  for(let row=0;row<10;row++){
    for(let col=0;col<10;col++){
      const n=boardCellNumber(row,col);
      const isLadder=snakesLadders.ladders[n];
      const isSnake=snakesLadders.snakes[n];
      const playerHere=snakeGame.player===n;
      const cpuHere=snakeGame.cpu===n;
      html+=`<div class="snake-cell ${isLadder?'ladder-cell':''} ${isSnake?'snake-cell-start':''}">
        <span class="cell-number">${n}</span>
        ${isLadder?'<span class="cell-special">🪜</span>':''}
        ${isSnake?'<span class="cell-special">🐍</span>':''}
        <div class="tokens">
          ${playerHere?'<span class="token player-token">🚀</span>':''}
          ${cpuHere?'<span class="token cpu-token">🛸</span>':''}
        </div>
      </div>`;
    }
  }
  return html;
}
function renderSnakes(){
  document.getElementById("screen-snakes").innerHTML=title("🐍🪜","Serpientes y Escaleras","Llega a la casilla 100 antes que la nave rival")+`
    <section class="snakes-layout">
      <div class="snakes-board-wrap">
        <div class="snakes-board">${renderSnakeBoard()}</div>
      </div>
      <aside class="snakes-panel">
        <div class="turn-card ${snakeGame.turn==='player'?'your-turn':'cpu-turn'}">
          <h3>${snakeGame.turn==='player'?'🚀 Tu turno':'🛸 Turno de la nave rival'}</h3>
          <p>${snakeGame.message}</p>
        </div>
        <div class="dice-box">
          <div id="snakeDice" class="snake-dice">${diceFace(snakeGame.lastRoll)}</div>
          <button class="roll-dice-btn" onclick="rollSnakeDice()" ${snakeGame.rolling||snakeGame.turn!=='player'||snakeGame.finished?'disabled':''}>🎲 Lanzar dado</button>
        </div>
        <div class="snake-score">
          <div><span>🚀</span><b>Tu ficha</b><strong>Casilla ${snakeGame.player}</strong></div>
          <div><span>🛸</span><b>Rival</b><strong>Casilla ${snakeGame.cpu}</strong></div>
        </div>
        <div class="snake-rules">
          <h4>Cómo jugar</h4>
          <p>🪜 Las escaleras te hacen subir.</p>
          <p>🐍 Las serpientes te hacen bajar.</p>
          <p>🏁 Gana quien llegue primero a 100.</p>
        </div>
        <button class="action-btn" onclick="resetSnakeGame()">🔄 Juego nuevo</button>
      </aside>
    </section>`;
}
function diceFace(n){
  return ["","⚀","⚁","⚂","⚃","⚄","⚅"][n]||"⚀";
}
function rollSnakeDice(){
  if(snakeGame.rolling||snakeGame.finished||snakeGame.turn!=="player")return;
  snakeGame.rolling=true;
  let count=0;
  const die=document.getElementById("snakeDice");
  const timer=setInterval(()=>{
    const r=Math.floor(Math.random()*6)+1;
    snakeGame.lastRoll=r;
    if(die){die.textContent=diceFace(r);die.classList.add("rolling")}
    count++;
    if(count>=10){
      clearInterval(timer);
      if(die)die.classList.remove("rolling");
      const finalRoll=Math.floor(Math.random()*6)+1;
      snakeGame.lastRoll=finalRoll;
      moveSnakeToken("player",finalRoll);
    }
  },80);
}
function moveSnakeToken(who,roll){
  let current=snakeGame[who];
  let target=current+roll;
  if(target>100) target=current;
  snakeGame[who]=target;
  snakeGame.message=(who==="player"?"Sacaste ":"La nave rival sacó ")+roll;
  renderSnakes();

  setTimeout(()=>{
    const ladder=snakesLadders.ladders[snakeGame[who]];
    const snake=snakesLadders.snakes[snakeGame[who]];
    if(ladder){
      snakeGame.message="¡Subiste por una escalera!";
      speakText("¡Subiste por una escalera!",.78,1.25);
      snakeGame[who]=ladder;
      createConfetti(20);
    }else if(snake){
      snakeGame.message="¡Oh no! Una serpiente te hizo bajar.";
      speakText("Una serpiente te hizo bajar",.8,1.1);
      snakeGame[who]=snake;
    }
    renderSnakes();

    setTimeout(()=>{
      if(snakeGame[who]>=100){
        snakeGame.finished=true;
        if(who==="player"){
          snakeGame.message="¡Ganaste! Llegaste al planeta 100.";
          state.stars+=25;sync();createConfetti(70);speakText("¡Felicidades, ganaste!",.72,1.3);
        }else{
          snakeGame.message="La nave rival ganó. ¡Inténtalo otra vez!";
          speakText("La nave rival ganó. Inténtalo otra vez.",.8,1.1);
        }
        renderSnakes();
        return;
      }
      snakeGame.turn=who==="player"?"cpu":"player";
      snakeGame.rolling=false;
      renderSnakes();
      if(snakeGame.turn==="cpu") setTimeout(cpuSnakeTurn,700);
    },650);
  },500);
}
function cpuSnakeTurn(){
  if(snakeGame.finished)return;
  snakeGame.rolling=true;
  renderSnakes();
  let c=0;
  const timer=setInterval(()=>{
    snakeGame.lastRoll=Math.floor(Math.random()*6)+1;
    const die=document.getElementById("snakeDice");
    if(die){die.textContent=diceFace(snakeGame.lastRoll);die.classList.add("rolling")}
    c++;
    if(c>=8){
      clearInterval(timer);
      const die2=document.getElementById("snakeDice");
      if(die2)die2.classList.remove("rolling");
      const r=Math.floor(Math.random()*6)+1;
      snakeGame.lastRoll=r;
      moveSnakeToken("cpu",r);
    }
  },90);
}


// ======================================================
// PARTY PLANET V30 — SERPIENTES Y ESCALERAS DE 4 JUGADORES
// ======================================================
const V30_SL_MAP = {
  ladders: {3:22, 8:30, 20:41, 28:55, 36:62, 50:72, 71:92},
  snakes: {27:5, 40:18, 54:31, 68:45, 79:58, 87:66, 98:74}
};

const V30_CHARACTERS = [
  {id:"sparkly", name:"Sparkly", short:"SP", image:"assets/images/sparkly.jpg", tokenColor:"#ffcf2d"},
  {id:"chespita_mayor", name:"Chespita 1", short:"C1", image:"assets/images/chespitas.jpg", tokenColor:"#ff4fb2"},
  {id:"chespita_dos", name:"Chespita 2", short:"C2", image:"assets/images/chespitas.jpg", tokenColor:"#44d4ff"},
  {id:"cangurito", name:"Cangurito", short:"CA", image:"assets/images/cangurito.jpg", tokenColor:"#60e67b"}
];

let v30SelectedCharacter = "sparkly";
let v30Game = null;

function v30InitGame(){
  const chars = V30_CHARACTERS.map(c => ({
    ...c,
    position: 1,
    finished: false
  }));
  const startIndex = chars.findIndex(c => c.id === v30SelectedCharacter);
  const ordered = [...chars.slice(startIndex), ...chars.slice(0, startIndex)];
  v30Game = {
    players: ordered,
    current: 0,
    rolling: false,
    finished: false,
    lastRoll: 1,
    message: "Elige tu personaje y lanza el dado uno por uno."
  };
}

function v30SelectCharacter(id){
  v30SelectedCharacter = id;
  v30InitGame();
  renderSnakesV30();
}

function v30CurrentPlayer(){
  if(!v30Game) v30InitGame();
  return v30Game.players[v30Game.current];
}

function v30BoardCellNumber(row,col){
  const fromBottom = 9 - row;
  const base = fromBottom * 10;
  return fromBottom % 2 === 0 ? base + col + 1 : base + (10 - col);
}

function v30DiceFace(n){
  return ["","⚀","⚁","⚂","⚃","⚄","⚅"][n] || "⚀";
}

function renderSnakesV30(){
  if(!v30Game) v30InitGame();
  const current = v30CurrentPlayer();
  document.getElementById("screen-snakes").innerHTML = title("🐍🪜","Serpientes y Escaleras","Escoge tu personaje y tira el dado uno por uno para los 4 jugadores") + `
    <section class="v30-setup-strip">
      <h3>👑 Elige tu personaje</h3>
      <div class="v30-character-picker">
        ${V30_CHARACTERS.map(c => `
          <button class="v30-character-card ${v30SelectedCharacter===c.id?'active':''}" onclick="v30SelectCharacter('${c.id}')">
            <img src="${c.image}" alt="${c.name}">
            <b>${c.name}</b>
            <small>${v30SelectedCharacter===c.id?'Tú juegas con este personaje':'Elegir'}</small>
          </button>
        `).join("")}
      </div>
    </section>

    <section class="v30-snakes-layout">
      <div class="v30-board-wrap">
        <div class="v30-board">${v30RenderBoard()}</div>
      </div>

      <aside class="v30-side">
        <div class="v30-turn-card">
          <div class="v30-turn-top">
            <img src="${current.image}" alt="${current.name}">
            <div>
              <h3>Turno de ${current.name}</h3>
              <p>${v30Game.message}</p>
            </div>
          </div>
          <div class="v30-dice-area">
            <div id="v30Dice" class="v30-dice">${v30DiceFace(v30Game.lastRoll)}</div>
            <button class="v30-roll-btn" onclick="v30RollDice()" ${v30Game.rolling||v30Game.finished?'disabled':''}>🎲 Tirar dado</button>
          </div>
        </div>

        <div class="v30-player-list">
          ${v30Game.players.map((p,idx) => `
            <article class="v30-player-item ${idx===v30Game.current && !v30Game.finished?'active-turn':''}">
              <img src="${p.image}" alt="${p.name}">
              <div class="v30-player-meta">
                <b>${p.name}${p.id===v30SelectedCharacter?' · Tú':''}</b>
                <small>Casilla ${p.position}${p.finished?' · Llegó a la meta':''}</small>
              </div>
              <button class="v30-mini-roll ${idx===v30Game.current && !v30Game.finished?'enabled':''}" onclick="v30RollDice()" ${idx===v30Game.current && !v30Game.finished && !v30Game.rolling ? '' : 'disabled'}>Tirar</button>
            </article>
          `).join("")}
        </div>

        <div class="v30-rules">
          <h4>Cómo jugar</h4>
          <p>🎲 Se tira el dado uno por uno.</p>
          <p>🪜 Las escaleras te hacen subir.</p>
          <p>🐍 Las serpientes te hacen bajar.</p>
          <p>🏁 Gana quien llegue primero a 100.</p>
          <p>⭐ Si tu personaje gana, ganas 30 estrellas.</p>
        </div>

        <button class="action-btn" onclick="v30NewGame()">🔄 Juego nuevo</button>
      </aside>
    </section>
  `;
}

function v30RenderBoard(){
  let html = "";
  for(let row=0; row<10; row++){
    for(let col=0; col<10; col++){
      const n = v30BoardCellNumber(row,col);
      const ladder = V30_SL_MAP.ladders[n];
      const snake = V30_SL_MAP.snakes[n];
      const playersHere = v30Game.players.filter(p => p.position === n);
      html += `<div class="v30-cell ${ladder?'ladder-cell':''} ${snake?'snake-start':''}">
        <span class="v30-cell-number">${n}</span>
        ${ladder?'<span class="v30-cell-icon">🪜</span>':''}
        ${snake?'<span class="v30-cell-icon">🐍</span>':''}
        <div class="v30-tokens">
          ${playersHere.map(p=>`<span class="v30-token" style="background:${p.tokenColor}" title="${p.name}">${p.short}</span>`).join("")}
        </div>
      </div>`;
    }
  }
  return html;
}

function v30RollDice(){
  if(!v30Game || v30Game.rolling || v30Game.finished) return;
  v30Game.rolling = true;
  const die = document.getElementById("v30Dice");
  let steps = 0;
  const timer = setInterval(() => {
    const r = Math.floor(Math.random()*6)+1;
    v30Game.lastRoll = r;
    if(die){
      die.textContent = v30DiceFace(r);
      die.classList.add("rolling");
    }
    steps++;
    if(steps>=10){
      clearInterval(timer);
      const finalRoll = Math.floor(Math.random()*6)+1;
      v30Game.lastRoll = finalRoll;
      if(die){
        die.classList.remove("rolling");
        die.textContent = v30DiceFace(finalRoll);
      }
      v30MoveCurrentPlayer(finalRoll);
    }
  }, 85);
}

function v30MoveCurrentPlayer(roll){
  const player = v30CurrentPlayer();
  let target = player.position + roll;
  if(target > 100) target = player.position;
  player.position = target;
  v30Game.message = `${player.name} sacó ${roll}.`;
  renderSnakesV30();

  setTimeout(() => {
    const ladder = V30_SL_MAP.ladders[player.position];
    const snake = V30_SL_MAP.snakes[player.position];
    if(ladder){
      player.position = ladder;
      v30Game.message = `¡${player.name} subió por una escalera!`;
      speakText(`${player.name} subió por una escalera`, .76, 1.2);
      createConfetti(18);
    }else if(snake){
      player.position = snake;
      v30Game.message = `¡${player.name} cayó en una serpiente!`;
      speakText(`${player.name} cayó en una serpiente`, .8, 1.08);
    }
    renderSnakesV30();

    setTimeout(() => {
      if(player.position >= 100){
        player.finished = true;
        v30Game.finished = true;
        const isUser = player.id === v30SelectedCharacter;
        if(isUser){
          state.stars += 30;
          sync();
          createConfetti(80);
          v30Game.message = `¡Ganaste con ${player.name}! Llegaste a la meta.`;
          speakText(`Felicidades. Ganaste con ${player.name}`, .72, 1.28);
        } else {
          v30Game.message = `${player.name} ganó la partida. ¡Inténtalo otra vez!`;
          speakText(`${player.name} ganó la partida`, .78, 1.12);
        }
        renderSnakesV30();
        return;
      }
      v30Game.current = (v30Game.current + 1) % v30Game.players.length;
      v30Game.rolling = false;
      v30Game.message = `Ahora le toca a ${v30CurrentPlayer().name}.`;
      renderSnakesV30();
    }, 650);
  }, 480);
}

function v30NewGame(){
  v30InitGame();
  renderSnakesV30();
}


const K31={profile:'pp31_profile',missions:'pp31_missions',pet:'pp31_pet',mode:'pp31_mode'};
function g31(k,d){try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}}function s31(k,v){localStorage.setItem(k,JSON.stringify(v))}
function renderProfile31(){const p=g31(K31.profile,{name:'Pequeño astronauta',age:6,character:'Sparkly',avatar:'🚀'});document.getElementById('screen-profile').innerHTML=title('👤','Mi perfil','Crea tu perfil infantil')+`<div class="v31-two"><section class="v31-preview"><div>${p.avatar}</div><h3>${escapeHtml(p.name)}</h3><p>${p.age} años · ${p.character}</p></section><section class="panel v31-form"><label>Nombre<input id="p31n" value="${escapeHtml(p.name)}"></label><label>Edad<input id="p31a" type="number" min="3" max="12" value="${p.age}"></label><label>Personaje<select id="p31c"><option>Sparkly</option><option>Chespita 1</option><option>Chespita 2</option><option>Cangurito</option><option>Estrellita</option></select></label><label>Avatar<div class="v31-avatars">${['🚀','⭐','🪐','🎤','🦘','🌈'].map(a=>`<button onclick="p31v.value='${a}'">${a}</button>`).join('')}</div><input id="p31v" value="${p.avatar}" readonly></label><button class="action-btn" onclick="saveProfile31()">Guardar</button></section></div>`;p31c.value=p.character}
function saveProfile31(){s31(K31.profile,{name:p31n.value||'Pequeño astronauta',age:+p31a.value||6,character:p31c.value,avatar:p31v.value||'🚀'});toast('Perfil guardado');createConfetti(15);renderProfile31()}
function getM31(){let m=g31(K31.missions,null),d=new Date().toISOString().slice(0,10);if(!m||m.date!==d){m={date:d,items:[['words','Aprende 5 palabras','🌍',10],['math','Resuelve 3 operaciones','➕',10],['song','Canta una canción','🎤',10],['puzzle','Completa un puzzle','🧩',15],['game','Juega Serpientes y Escaleras','🐍',15]].map(x=>({id:x[0],text:x[1],icon:x[2],reward:x[3],done:false}))};s31(K31.missions,m)}return m}
function toggleM31(id){let m=getM31(),i=m.items.find(x=>x.id===id);if(!i.done){i.done=true;state.stars+=i.reward;sync();createConfetti(20)}s31(K31.missions,m);renderMissions31()}
function renderMissions31(){let m=getM31(),d=m.items.filter(x=>x.done).length;document.getElementById('screen-missions').innerHTML=title('🎯','Misiones diarias','Completa retos y gana estrellas')+`<div class="v31-progress"><i style="width:${d/m.items.length*100}%"></i></div><div class="v31-missions">${m.items.map(i=>`<button class="${i.done?'done':''}" onclick="toggleM31('${i.id}')"><span>${i.icon}</span><b>${i.text}</b><small>${i.done?'Completada':'+'+i.reward+' estrellas'}</small></button>`).join('')}</div>`}
function renderUniverse31(){let p=[['➕','Matemáticas','math'],['🌍','Idiomas','languages'],['🎵','Música','musicgames'],['📚','Cuentos','stories'],['🐾','Animales','animals'],['🎮','Juegos','games'],['🎨','Creatividad','creativity'],['🎓','Escolar','learningmode']];document.getElementById('screen-universe').innerHTML=title('🪐','Universo Party Planet','Viaja a cada planeta')+`<div class="v31-universe"><div class="v31-core">✨<b>PARTY PLANET</b></div>${p.map((x,i)=>`<button style="--i:${i}" onclick="go('${x[2]}')"><span>${x[0]}</span><b>${x[1]}</b></button>`).join('')}</div>`}
function getPet31(){return g31(K31.pet,{name:'Sparkly Bebé',type:'⭐',food:70,happy:75,clean:80,energy:65,hat:'🎀'})}
function pet31(a){let p=getPet31();if(a==='feed')p.food=Math.min(100,p.food+20);if(a==='play')p.happy=Math.min(100,p.happy+20);if(a==='bath')p.clean=Math.min(100,p.clean+20);if(a==='sleep')p.energy=Math.min(100,p.energy+25);if(a==='dress')p.hat=['🎀','👑','🤠','🕶️'][Math.floor(Math.random()*4)];s31(K31.pet,p);renderPet31()}
function renderPet31(){let p=getPet31();document.getElementById('screen-pet').innerHTML=title('🐣','Mascota virtual','Cuida a tu pequeño amigo')+`<div class="v31-two"><section class="v31-pet"><div class="hat">${p.hat}</div><div class="body">${p.type}</div><h3>${p.name}</h3></section><section class="panel">${[['Hambre',p.food,'🍎'],['Felicidad',p.happy,'😊'],['Limpieza',p.clean,'🛁'],['Energía',p.energy,'⚡']].map(x=>`<div class="v31-stat"><span>${x[2]} ${x[0]}</span><div><i style="width:${x[1]}%"></i></div></div>`).join('')}<div class="v31-pet-actions"><button onclick="pet31('feed')">🍎 Comer</button><button onclick="pet31('play')">🎾 Jugar</button><button onclick="pet31('bath')">🛁 Bañar</button><button onclick="pet31('sleep')">🌙 Dormir</button><button onclick="pet31('dress')">👕 Vestir</button></div></section></div>`}
function renderMoreGames31(){let g=[['🧠','Memorama'],['🔍','Diferencias'],['🌀','Laberinto'],['✏️','Une los puntos'],['🧩','Ordena la historia'],['❓','Adivina'],['🔤','Sopa de letras'],['🎨','Clasifica colores'],['🔢','Cuenta objetos'],['🔁','Patrones'],['⬅️➡️','Derecha e izquierda'],['🧩','Puzzle Kids']];document.getElementById('screen-moregames').innerHTML=title('🕹️','Más juegos','Colección de retos infantiles')+`<div class="v31-games">${g.map(x=>`<button onclick="modalBody.innerHTML='<h2>${x[1]}</h2><p>Juego interactivo de demostración.</p>';modal.classList.remove('hidden')"><span>${x[0]}</span><b>${x[1]}</b></button>`).join('')}</div>`}
function renderStoryMaker31(){document.getElementById('screen-storymaker').innerHTML=title('✨','Creador de cuentos','Elige y crea una historia')+`<div class="panel v31-storyform"><select id="stc"><option>Sparkly</option><option>Las Chespitas</option><option>Cangurito</option></select><select id="stp"><option>un planeta de dulces</option><option>una fiesta cósmica</option><option>un bosque de estrellas</option></select><select id="sta"><option>perdió una estrella mágica</option><option>encontró un mapa secreto</option><option>ayudó a un amigo</option></select><button class="action-btn" onclick="makeStory31()">Crear cuento</button></div><div id="story31" class="panel">Tu cuento aparecerá aquí.</div>`}
function makeStory31(){let t=`Había una vez ${stc.value}, que viajó a ${stp.value}. Allí ${sta.value}. Con valor y amistad resolvió la aventura y todos celebraron en Party Planet.`;story31.innerHTML=`<h3>Tu cuento</h3><p>${t}</p><button class="action-btn" onclick="speakText('${t.replace(/'/g,"\\'")}',.72,1.15)">Escuchar</button>`;createConfetti(15)}
let mr31=null,ch31=[],url31=null;async function startRec31(){try{let s=await navigator.mediaDevices.getUserMedia({audio:true});ch31=[];mr31=new MediaRecorder(s);mr31.ondataavailable=e=>ch31.push(e.data);mr31.onstop=()=>{url31=URL.createObjectURL(new Blob(ch31,{type:'audio/webm'}));s.getTracks().forEach(t=>t.stop());renderStudio31()};mr31.start();toast('Grabando')}catch(e){toast('No se permitió el micrófono')}}function stopRec31(){if(mr31&&mr31.state==='recording')mr31.stop()}
function renderStudio31(){document.getElementById('screen-studio').innerHTML=title('🎙️','Estudio infantil','Graba tu voz con ayuda de un adulto')+`<div class="panel v31-studio"><div>🎙️</div><button class="action-btn" onclick="startRec31()">Grabar</button><button class="action-btn" onclick="stopRec31()">Detener</button>${url31?`<audio controls src="${url31}"></audio>`:'<p>Aún no hay grabación.</p>'}</div>`}
const dm31=[['👏','Aplaude'],['⬆️','Brinca'],['🔄','Gira'],['➡️','Derecha'],['⬅️','Izquierda'],['🙌','Manos arriba']];let dt31=null,di31=0;function startDance31(){clearInterval(dt31);di31=0;showDance31();dt31=setInterval(()=>{di31=(di31+1)%dm31.length;showDance31()},2200)}function showDance31(){let m=dm31[di31];danceMove31.innerHTML=`<span>${m[0]}</span><b>${m[1]}</b>`;speakText(m[1],.8,1.25)}function renderDance31(){document.getElementById('screen-dance').innerHTML=title('💃','Baila con Party Planet','Sigue los movimientos')+`<div class="v31-dance"><img src="assets/images/cangurito.jpg"><div id="danceMove31"><span>🎵</span><b>¡Listos!</b></div><button class="action-btn" onclick="startDance31()">Empezar</button></div>`}
let ctx31=null,draw31=false,last31=null;function setupCanvas31(){let c=document.getElementById('cv31');if(!c)return;c.width=c.clientWidth*devicePixelRatio;c.height=420*devicePixelRatio;ctx31=c.getContext('2d');ctx31.scale(devicePixelRatio,devicePixelRatio);ctx31.lineWidth=8;ctx31.lineCap='round';ctx31.strokeStyle='#ff2ead';c.onpointerdown=e=>{draw31=true;last31=[e.offsetX,e.offsetY]};c.onpointermove=e=>{if(!draw31)return;ctx31.beginPath();ctx31.moveTo(...last31);ctx31.lineTo(e.offsetX,e.offsetY);ctx31.stroke();last31=[e.offsetX,e.offsetY]};c.onpointerup=c.onpointerleave=()=>draw31=false}
function renderCreativity31(){document.getElementById('screen-creativity').innerHTML=title('🖍️','Zona creativa','Dibuja, colorea y diseña')+`<div class="v31-palette">${['#ff2ead','#29baf0','#ffcf2d','#60df81','#7b42e9','#111'].map(c=>`<button style="background:${c}" onclick="ctx31.strokeStyle='${c}'"></button>`).join('')}<button class="action-btn" onclick="ctx31.clearRect(0,0,9999,9999)">Limpiar</button></div><canvas id="cv31" class="v31-canvas"></canvas>`;setTimeout(setupCanvas31,50)}
function renderCalendar31(){let e=[['💖','14 de febrero','Amistad'],['🎈','30 de abril','Día del Niño'],['🌷','10 de mayo','Día de las Madres'],['🇲🇽','15 de septiembre','Fiesta Mexicana'],['🎃','31 de octubre','Halloween'],['🎄','24 de diciembre','Navidad']];document.getElementById('screen-calendar').innerHTML=title('📅','Calendario mágico','Fechas especiales')+`<div class="v31-calendar">${e.map(x=>`<article><span>${x[0]}</span><b>${x[1]}</b><h3>${x[2]}</h3><button onclick="toast('Actividad desbloqueada')">Ver actividades</button></article>`).join('')}</div>`}
function renderLearningMode31(){let m=g31(K31.mode,'Preescolar');document.getElementById('screen-learningmode').innerHTML=title('🎓','Modo escolar','Elige el nivel')+`<div class="v31-modes"><button class="${m==='Preescolar'?'active':''}" onclick="s31(K31.mode,'Preescolar');renderLearningMode31()"><span>🧸</span><b>Preescolar</b><small>Vocales, colores, animales, números y sonidos.</small></button><button class="${m==='Primaria'?'active':''}" onclick="s31(K31.mode,'Primaria');renderLearningMode31()"><span>📘</span><b>Primaria</b><small>Lectura, matemáticas, ortografía, ciencias e idiomas.</small></button></div>`}


// ======================================================
// PARTY PLANET V32 — CUENTOS ILUSTRADOS DE LAS CHESPITAS
// ======================================================
const V32_STORY_BOOKS = [
  {
    title: "Las Chespitas y la Estrella Perdida",
    cover: "assets/images/chespitas.jpg",
    summary: "Una aventura larga y mágica donde Las Chespitas recorren Party Planet para devolverle la luz a una estrella muy especial.",
    pages: [
      {
        image: "assets/images/chespitas.jpg",
        title: "Capítulo 1 · Una noche sin brillo",
        text: "Era una noche tranquila en Party Planet. Las luces de colores brillaban, los planetas bailaban lentamente y Las Chespitas se preparaban para un gran concierto. De pronto, la pequeña Estrellita dejó de brillar. El cielo se volvió un poco más oscuro y la música perdió su chispa. Las Chespitas se miraron con sorpresa y decidieron ayudarla antes de que la fiesta mágica se apagara por completo."
      },
      {
        image: "assets/images/estrellita.jpg",
        title: "Capítulo 2 · El mapa de luz",
        text: "Estrellita les explicó que su brillo estaba escondido en tres lugares: el Bosque de los Globos, el Río de Confeti y la Montaña Musical. Para encontrarlo, debían seguir un mapa dorado que solo aparecía cuando se decía en voz alta: \"amistad, alegría y valentía\". Las Chespitas tomaron el mapa, se abrazaron muy fuerte y comenzaron su aventura con pasos llenos de emoción."
      },
      {
        image: "assets/images/cangurito.jpg",
        title: "Capítulo 3 · El salto valiente",
        text: "En el Bosque de los Globos las esperaba el Cangurito Bailarín. Para conseguir la primera chispa de luz, todos tenían que cruzar un camino saltando de globo en globo sin caer. Las Chespitas cantaron una canción para darse ánimo y el Cangurito mostró los saltos más altos. Gracias al trabajo en equipo, alcanzaron una burbuja brillante donde estaba escondida la primera chispa de Estrellita."
      },
      {
        image: "assets/images/sparkly.jpg",
        title: "Capítulo 4 · El río de confeti",
        text: "Más adelante encontraron a Sparkly, quien navegaba alegremente por el Río de Confeti. Él les contó que la segunda chispa estaba al fondo de una lluvia de papelitos de colores que giraban como remolino. Las Chespitas, con ayuda de Sparkly, formaron una rueda, giraron despacito y siguieron el compás de la música hasta descubrir una cajita luminosa. Al abrirla, el río entero se iluminó con destellos plateados y la segunda chispa apareció."
      },
      {
        image: "assets/images/inicio_visual.png",
        title: "Capítulo 5 · El concierto de las estrellas",
        text: "La última chispa estaba en la Montaña Musical. Allí, Las Chespitas comprendieron que no bastaba con buscarla: tenían que cantar con el corazón. Entonces subieron al escenario, tomaron aire y dedicaron una canción a la amistad, la alegría y la esperanza. La montaña vibró, la tercera chispa se encendió y volvió a unirse con las otras dos. Estrellita recuperó su brillo, el cielo volvió a iluminarse y Party Planet celebró con un concierto inolvidable. Desde esa noche, todos recordaron que cuando se canta y se comparte amor, siempre aparece una nueva luz."
      }
    ]
  },
  {
    title: "Las Chespitas en el Bosque de los Globos",
    cover: "assets/images/inicio_visual.png",
    summary: "Un libro de aventuras y amistad donde Las Chespitas ayudan a los habitantes del Bosque de los Globos a recuperar sus colores.",
    pages: [
      {
        image: "assets/images/inicio_visual.png",
        title: "Capítulo 1 · El bosque en silencio",
        text: "Una mañana, Las Chespitas recibieron una invitación urgente del Bosque de los Globos. Algo extraño ocurría allí: los globos ya no flotaban, los colores estaban pálidos y las risas se escuchaban muy bajitas. Cuando llegaron, vieron que los senderos estaban quietos y que los animalitos del bosque miraban al cielo con tristeza."
      },
      {
        image: "assets/images/chespitas.jpg",
        title: "Capítulo 2 · La llave de los colores",
        text: "En el centro del bosque encontraron un libro antiguo con una llave dibujada en la portada. El libro contaba que los colores solo regresaban cuando alguien realizaba tres actos de bondad: ayudar a un amigo, cantar para alegrar a otro y compartir lo mejor de su corazón. Las Chespitas supieron enseguida que esa era su misión."
      },
      {
        image: "assets/images/cangurito.jpg",
        title: "Capítulo 3 · Una carrera con alegría",
        text: "El primer acto de bondad llegó cuando el Cangurito Bailarín quiso participar en la carrera del bosque, pero su globo guía se había desinflado. Las Chespitas lo animaron, buscaron cintas de colores y juntas fabricaron un globo nuevo. El Cangurito dio un gran salto, sonrió muy feliz y, como por arte de magia, el color amarillo volvió a los caminos del bosque."
      },
      {
        image: "assets/images/sparkly.jpg",
        title: "Capítulo 4 · Canción entre los árboles",
        text: "Después encontraron a Sparkly tratando de encender unas lucecitas enredadas entre los árboles. Las Chespitas cantaron una melodía suave para darle confianza y pronto todos los pajaritos se unieron al coro. Las hojas comenzaron a moverse como si bailaran y el color rosa volvió a las flores que adornaban el bosque."
      },
      {
        image: "assets/images/estrellita.jpg",
        title: "Capítulo 5 · El brillo compartido",
        text: "Faltaba el último acto. Estrellita apareció con una pequeña chispa que no podía sostener sola. Entonces Las Chespitas compartieron con ella abrazos, palabras bonitas y una promesa: nunca dejar sola a la alegría. En ese instante, una ola de color azul, verde, rosa y dorado recorrió todo el Bosque de los Globos. Los globos volvieron a elevarse, los caminos se llenaron de música y los habitantes agradecieron con una gran fiesta. Las Chespitas aprendieron que la bondad tiene el poder de devolverle el color al mundo."
      }
    ]
  },
  {
    title: "Las Chespitas y la Fiesta del Gran Planetario",
    cover: "assets/images/sparkly.jpg",
    summary: "Las Chespitas organizan la celebración más importante de Party Planet y descubren que una fiesta verdadera se construye con unión, creatividad y cariño.",
    pages: [
      {
        image: "assets/images/sparkly.jpg",
        title: "Capítulo 1 · Una invitación gigante",
        text: "Cada año, en Party Planet se celebraba la Fiesta del Gran Planetario, una reunión donde todos los personajes mostraban sus talentos. Ese año, Las Chespitas fueron elegidas para organizarla. Al principio sintieron nervios, porque había mucho por hacer: decorar, ensayar canciones, preparar juegos y recibir a todos los invitados con una sonrisa enorme."
      },
      {
        image: "assets/images/chespitas.jpg",
        title: "Capítulo 2 · Los preparativos",
        text: "Las Chespitas comenzaron por repartir tareas. Una se encargó de la música, otra de los adornos y ambas trabajaron juntas en la bienvenida. Eligieron cintas brillantes, estrellas colgantes y un arco de globos tan grande que parecía una puerta al universo. También ensayaron una canción especial para que cada niño se sintiera importante desde el momento de entrar."
      },
      {
        image: "assets/images/cangurito.jpg",
        title: "Capítulo 3 · El problema inesperado",
        text: "Cuando casi todo estaba listo, el viento cósmico pasó muy rápido por el escenario y desacomodó parte de la decoración. El Cangurito Bailarín quiso ayudar enseguida, pero con tanto apuro se enredó entre serpentinas y listones. Las Chespitas respiraron profundo y recordaron que los problemas se resuelven mejor con calma y alegría. Así que organizaron una cadena de ayuda para volver a poner todo en su lugar."
      },
      {
        image: "assets/images/inicio_visual.png",
        title: "Capítulo 4 · Una fiesta para todos",
        text: "Sparkly llegó con una idea maravillosa: convertir la fiesta en un recorrido por estaciones. Habría una zona para cantar, otra para bailar, otra para juegos y una más para aprender palabras y números. Las Chespitas adoraron la propuesta porque así cada niño podría divertirse a su manera. Poco a poco, el gran planetario comenzó a transformarse en un universo de sonrisas."
      },
      {
        image: "assets/images/logo_party_planet_v25.png",
        title: "Capítulo 5 · El mejor final",
        text: "Cuando llegaron los invitados, todo brillaba. Hubo canciones, bailes, juegos y abrazos por todos lados. Las Chespitas abrieron la fiesta con su canción especial y al terminar escucharon un aplauso tan grande que sintieron el corazón lleno de emoción. Comprendieron que la mejor parte de organizar una gran celebración no era la decoración ni las luces, sino ver felices a los demás. Y así, la Fiesta del Gran Planetario se convirtió en una historia que todos quisieron volver a leer una y otra vez."
      }
    ]
  }
];
let v32CurrentBook = 0;
let v32CurrentPage = 0;

function renderStories(){
  const book = V32_STORY_BOOKS[v32CurrentBook];
  const pages = book.pages;
  const progress = ((v32CurrentPage+1)/pages.length)*100;
  document.getElementById("screen-stories").innerHTML = title("📚","Cuentos ilustrados","Libros largos de aventuras de Las Chespitas") + `
    <section class="v32-story-hero">
      <img src="assets/images/chespitas.jpg" alt="Las Chespitas">
      <div>
        <h3>Biblioteca de aventuras de Las Chespitas</h3>
        <p>Aquí encontrarás cuentos más largos, con varias páginas e ilustraciones, como si fueran libros infantiles.</p>
      </div>
    </section>

    <section class="story-library-v32">
      ${V32_STORY_BOOKS.map((b,i)=>`
        <article class="story-book-card-v32 ${i===v32CurrentBook?'active':''}">
          <img src="${b.cover}" alt="${b.title}">
          <div class="story-book-meta-v32">
            <h3>${b.title}</h3>
            <p>${b.summary}</p>
            <div class="story-book-actions-v32">
              <button class="action-btn" onclick="openStoryBookV32(${i})">📖 Abrir libro</button>
              <button class="action-btn" onclick="readCurrentPageV32(${i},0)">🔊 Escuchar inicio</button>
            </div>
          </div>
        </article>
      `).join("")}
    </section>

    <section class="story-reader-v32">
      <div class="story-reader-top-v32">
        <div>
          <h3>${book.title}</h3>
          <p>Página ${v32CurrentPage+1} de ${pages.length}</p>
        </div>
        <div class="story-progress-v32"><i style="width:${progress}%"></i></div>
      </div>

      <div class="story-open-book-v32">
        <div class="story-page-image-v32">
          <img src="${pages[v32CurrentPage].image}" alt="${pages[v32CurrentPage].title}">
          <span>Ilustración del cuento</span>
        </div>
        <div class="story-page-text-v32">
          <h4>${pages[v32CurrentPage].title}</h4>
          <p>${pages[v32CurrentPage].text}</p>
        </div>
      </div>

      <div class="story-page-dots-v32">
        ${pages.map((_,i)=>`<button class="${i===v32CurrentPage?'active':''}" onclick="goToStoryPageV32(${i})">${i+1}</button>`).join("")}
      </div>

      <div class="story-reader-controls-v32">
        <button class="action-btn" onclick="prevStoryPageV32()" ${v32CurrentPage===0?'disabled':''}>⬅ Página anterior</button>
        <button class="action-btn" onclick="readCurrentPageV32()">🔊 Escuchar página</button>
        <button class="action-btn" onclick="nextStoryPageV32()">Página siguiente ➡</button>
        <button class="action-btn" onclick="finishActivity('¡Leíste un cuento de Las Chespitas!', 8)">⭐ Terminé el cuento</button>
      </div>
    </section>`;
}

function openStoryBookV32(index){
  v32CurrentBook = index;
  v32CurrentPage = 0;
  renderStories();
  const el = document.querySelector('.story-reader-v32');
  if(el) el.scrollIntoView({behavior:'smooth'});
}
function goToStoryPageV32(page){ v32CurrentPage = page; renderStories(); }
function prevStoryPageV32(){ if(v32CurrentPage>0){v32CurrentPage--; renderStories();} }
function nextStoryPageV32(){
  const pages = V32_STORY_BOOKS[v32CurrentBook].pages;
  if(v32CurrentPage < pages.length-1){ v32CurrentPage++; renderStories(); }
  else { finishActivity('¡Terminaste el libro!', 10); }
}
function readCurrentPageV32(bookIndex=null,pageIndex=null){
  const b = bookIndex===null ? v32CurrentBook : bookIndex;
  const p = pageIndex===null ? v32CurrentPage : pageIndex;
  const page = V32_STORY_BOOKS[b].pages[p];
  speak(`${page.title}. ${page.text}`, 'es-MX');
}
