
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
function render(name){if(name==="home")renderHome();if(name==="karaoke")renderKaraoke();if(name==="stories")renderStories();if(name==="games")renderGames();if(name==="languages")renderLanguages();if(name==="study")renderStudy();if(name==="color")renderColor();if(name==="avatar")renderAvatar();if(name==="music")renderMusic();if(name==="rewards")renderRewards();if(name==="store")renderStore();if(name==="events")renderEvents();if(name==="settings")renderSettings();if(name==="vip")renderVIP();if(name==="parents")renderParents()}
function title(icon,name,desc){return `<div class="screen-title"><div><h2>${icon} ${name}</h2><p>${desc}</p></div><span>⭐ ${state.stars}</span></div>`}
function renderHome(){
  document.getElementById("screen-home").innerHTML = `
    <section class="v20-header">
      <div class="v20-mini-brand">
        <img src="assets/images/chespitas.jpg" alt="Las Chespitas">
        <span>LAS CHESPITAS</span>
      </div>

      <div class="v20-title">
        <h2>¡APRENDE, CANTA Y DIVIÉRTETE!</h2>
      </div>

      <div class="v20-header-actions">
        <button class="v20-sing" onclick="go('karaoke')">🎤 ¡A CANTAR!</button>
        <button class="v20-learn" onclick="go('study')">🚀 ¡A APRENDER!</button>
        <button class="v20-vip" onclick="go('vip')">👑 HAZTE VIP</button>
      </div>
    </section>

    <div class="v20-main">
      <nav class="v20-capsule">
        <button class="active" onclick="go('home')">🏠 <span>INICIO</span></button>
        <button onclick="go('karaoke')">🎵 <span>KARAOKE</span></button>
        <button onclick="go('stories')">📚 <span>CUENTOS</span></button>
        <button onclick="go('games')">🎮 <span>JUEGOS</span></button>
        <button onclick="go('languages')">🌍 <span>IDIOMAS</span></button>
        <button onclick="go('color')">🎨 <span>COLOREA</span></button>
        <button onclick="go('rewards')">🎁 <span>PREMIOS</span></button>
      </nav>

      <div class="v20-content">
        <section class="v20-banner">
          <img src="assets/images/inicio_visual.png" alt="Party Planet con Sparkly, Las Chespitas y el Cangurito Bailarín">

          <button class="v20-overlay v20-parents" onclick="openParentGate()" aria-label="Para padres"></button>
          <button class="v20-overlay v20-wallet" onclick="go('rewards')" aria-label="Ver estrellas y premios"></button>
          <button class="v20-overlay v20-banner-karaoke" onclick="go('karaoke')" aria-label="Abrir karaoke"></button>
          <button class="v20-overlay v20-banner-languages" onclick="go('languages')" aria-label="Abrir idiomas"></button>
          <button class="v20-overlay v20-banner-games" onclick="go('games')" aria-label="Abrir juegos"></button>
          <button class="v20-overlay v20-banner-stories" onclick="go('stories')" aria-label="Abrir cuentos"></button>
          <button class="v20-overlay v20-banner-color" onclick="go('color')" aria-label="Abrir colorea"></button>
          <button class="v20-overlay v20-banner-avatar" onclick="go('avatar')" aria-label="Abrir personaliza"></button>
        </section>

        <section class="v20-carousel">
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
          <button onclick="go('avatar')">
            <img src="assets/images/logo_sparkly.jpg" alt="Sparkly Party Planet">
            <span>Explorador Sparkly</span>
          </button>
        </section>
      </div>
    </div>`;
}
function renderKaraoke(){document.getElementById("screen-karaoke").innerHTML=title("🎤","Karaoke","Elige una canción y sigue la letra")+`<div class="screen-character-banner"><img src="assets/images/sparkly.jpg" alt="Sparkly"><div><h3>Canta con Sparkly</h3><p>Elige una canción y sigue la letra.</p></div></div><div class="panel karaoke-box"><select id="karaokeSong" onchange="resetLyrics()">${songs.map(s=>`<option>${s}</option>`).join("")}</select><div id="lyrics" class="lyrics">Presiona comenzar para cantar.</div><button class="action-btn" onclick="startKaraoke()">▶ Comenzar</button><button class="action-btn" onclick="finishActivity('¡Cantaste una canción!',5)">✅ Terminé</button></div>`}
let lyricTimer;
function resetLyrics(){clearInterval(lyricTimer);lyrics.textContent="Presiona comenzar para cantar."}
function startKaraoke(){clearInterval(lyricTimer);let lines=["En Party Planet vamos a cantar","con estrellas vamos a brillar","las Chespitas vienen a bailar","¡y Sparkly nos invita a soñar!"],i=0;lyrics.innerHTML="";lyricTimer=setInterval(()=>{lyrics.innerHTML=lines.slice(0,i+1).map((x,j)=>j===i?`<b>${x}</b>`:x).join("<br>");speak(lines[i],"es-MX");i++;if(i===lines.length)clearInterval(lyricTimer)},1400)}
function renderStories(){document.getElementById("screen-stories").innerHTML=title("📖","Cuentos","Historias con narración")+`<div class="screen-character-banner"><img src="assets/images/chespitas.jpg" alt="Las Chespitas"><div><h3>Cuentos con Las Chespitas</h3><p>Historias llenas de magia y amistad.</p></div></div>`+stories.map((s,i)=>`<article class="panel story-card"><h3>${s[0]}</h3><p>${s[1]}</p><button class="action-btn" onclick="speakStory(${i})">🔊 Escuchar</button><button class="action-btn" onclick="finishActivity('Cuento completado',4)">⭐ Terminé</button></article>`).join("")}
function speakStory(i){speak(stories[i][1],"es-MX")}
function renderGames(){document.getElementById("screen-games").innerHTML=title("🎮","Juegos","Todos los juegos funcionan")+`<div class="screen-character-banner"><img src="assets/images/cangurito.jpg" alt="Cangurito Bailarín"><div><h3>Juega con el Cangurito</h3><p>Retos, memoria, números y colores.</p></div></div><div class="feature-grid"><button class="feature-card blue" onclick="memoryGame()"><span>🧠</span>Memorama</button><button class="feature-card pink" onclick="numberGame()"><span>🔢</span>Números</button><button class="feature-card green" onclick="colorGame()"><span>🌈</span>Colores</button><button class="feature-card orange" onclick="starGame()"><span>⭐</span>Atrapa estrellas</button></div><div id="gameArea" class="panel game-area">Elige un juego.</div>`}
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
sync();go("home");
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(()=>{});
