
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
function render(name){if(name==="home")renderHome();if(name==="karaoke")renderKaraoke();if(name==="stories")renderStories();if(name==="games")renderGames();if(name==="languages")renderLanguages();if(name==="study")renderStudy();if(name==="color")renderColor();if(name==="avatar")renderAvatar();if(name==="music")renderMusicV22();if(name==="rewards")renderRewards();if(name==="store")renderStore();if(name==="events")renderEvents();if(name==="settings")renderSettings();if(name==="vip")renderVIP();if(name==="parents")renderParents();if(name==="admin")renderAdmin();if(name==="cloud")renderCloud();if(name==="analytics")renderAnalytics()}
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
