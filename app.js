(function(){
"use strict";
var AND="Kumolix/Mobilix-Launcher-for-Minecraft", WIN="Kumolix/Mobilix-Launcher-PC";
var $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var lang="ru", store={};
try{lang=localStorage.getItem("mx-lang")||((navigator.language||"").slice(0,2)==="ru"?"ru":"en")}catch(e){lang=(navigator.language||"").slice(0,2)==="ru"?"ru":"en"}
if(lang!=="ru"&&lang!=="en")lang="en";

/* ---------- тексты ---------- */
var EN={
 nav_label:"Sections",nav_features:"Features",nav_platforms:"Platforms",nav_install:"Install",nav_changes:"What's new",nav_faq:"FAQ",
 h1:"Minecraft Java, wherever you are",
 lead:"Mobilix runs Minecraft Java on your phone without PojavLauncher, and soon on Windows. Its own Java runtime, mods in two taps, playing with friends over the network without touching your router.",
 dl_android:"Download for Android",dl_android_fallback:"APK from GitHub",dl_win:"Download for Windows",dl_win_soon:"Coming soon, .exe",
 req:"Android 9 or newer, arm64",soon_badge:"Windows: soon",
 feat_t:"What Mobilix can do",
 pl_t:"One launcher, two screens",pl_sub:"Android is ready. The desktop version is a separate app; you'll hear about its release here and in Telegram.",
 pl_a_st:"Available",pl_a_p:"Its own Java 21 and 25 launch, LWJGL and OpenGL on top of OpenGL ES, on-screen controls. Works on Android 9+ with an arm64 processor.",pl_a_btn:"Download APK",
 pl_w_st:"Coming soon",pl_w_p:"The same Mobilix for your computer: an .exe installer, versions and mods, the catalog. The first build lands in the next few days, and the download button on this page will switch on by itself.",pl_w_btn:"Follow the release",
 pc_t:"How it looks on a computer",pc1:"Home screen",pc2:"Versions: download, select, delete",pc3:"Modrinth and CurseForge catalog",pc4:"Your own themes",pc5:"Settings",sh_t:"How it looks on a phone",sh1:"Home screen",sh2:"Mod catalog",sh3:"Quick graphics settings",sh4:"Choosing a game version",
 inst_t:"How to install",chg_t:"What's new",loading:"Loading versions…",faq_t:"Questions and answers",
 f_all:"All Android versions",f_bug:"Report a bug",f_priv:"Privacy",f_note:"Mobilix is not affiliated with Mojang or Microsoft. Minecraft is a trademark of Mojang AB.",
 fe:[["Own Java runtime","Java 21 and 25 ship inside the app. Nothing to install, no PojavLauncher."],
  ["Every version","From old releases to the newest 26.x, vanilla, Fabric, Forge, NeoForge and Quilt."],
  ["Mod catalog","Search Modrinth and CurseForge, install in two taps. Missing dependencies are downloaded for you."],
  ["Crash autofix","A crash comes with a plain explanation and a button that repairs the usual causes."],
  ["Play with friends","Open your world to friends over the network. No router setup, no port forwarding."],
  ["Macros","Record a swap, a quick bite or a shield block once and fire it from a single on-screen button."],
  ["Touch controls","Move, resize and recolor every button. Combos, toggles, your own layouts."],
  ["Graphics presets","Switch render distance, shaders and resolution quickly, right before you play."]],
 st:{android:[["Download the APK","Open the Download for Android button above, or the latest release on GitHub."],["Allow installing","Android will ask to allow installs from your browser or file manager. Allow it once."],["Install and open","Tap the downloaded file, install, and start Mobilix."],["Pick a version","Choose a game version, tap Play. The first launch downloads the game files."]],
  win:[["Download the .exe","The Windows build is coming in a few days. This button turns on by itself."],["Run the installer","Windows may show a SmartScreen warning for a new app; choose More info, then Run anyway."],["Sign in or play offline","Add a profile and pick a game version."],["Press Play","Mods and versions work the same way as on Android."]]},
 faq:[["Is there a Windows version?","Yes, it is being finished and will be released in the next few days as an .exe. When it appears, the Download for Windows button at the top of this page turns on automatically, and the code lives in the GitHub • Windows repository."],
  ["Is it free?","Yes. Mobilix is free and open source. You need your own copy of Minecraft Java Edition to play online."],
  ["Which phones work?","Android 9 or newer with an arm64 processor and at least 4 GB of RAM. 6 GB and more is better for mods."],
  ["Is it PojavLauncher?","No. Mobilix has its own runtime and launch code, written separately."],
  ["Which mods and loaders work?","Fabric, Forge, NeoForge and Quilt. Heavy mods and shaders depend on your phone."],
  ["The game crashed. What now?","Open the crash screen and use the autofix button. If it does not help, send the log in the Telegram chat or open an issue on GitHub."],
  ["Can I play with friends?","Yes, over the network. Open the world from the launcher and share the invite."],
  ["Is it safe?","The code is public, builds are made by GitHub Actions, and the APK is attached to every release."]],
 dl:"Download",latest:"latest",none:"No Windows releases yet. They will appear here after the first build.",fail:"Could not load versions. See them on GitHub.",
 rel:"Open on GitHub",dls:" downloads",wnote:"Windows build in the next days"
};
var RU={};
var FE_RU=[["Свой Java-рантайм","Java 21 и 25 лежат внутри приложения. Ничего ставить не нужно, PojavLauncher не требуется."],
  ["Любые версии","От старых релизов до новейших 26.x: чистый клиент, Fabric, Forge, NeoForge и Quilt."],
  ["Каталог модов","Поиск по Modrinth и CurseForge, установка в два касания. Недостающие зависимости докачиваются сами."],
  ["Автопочинка вылетов","После вылета вы видите понятное объяснение и кнопку, которая чинит частые причины."],
  ["Игра с друзьями","Откройте мир друзьям по сети. Без настройки роутера и проброса портов."],
  ["Макросы","Запишите свап, быстрый перекус или блок щитом один раз и запускайте одной кнопкой на экране."],
  ["Экранное управление","Двигайте, растягивайте и красьте любые кнопки. Комбинации, переключатели, свои раскладки."],
  ["Пресеты графики","Дальность прорисовки, шейдеры и разрешение меняются за пару касаний перед игрой."]];
var ST_RU={android:[["Скачайте APK","Нажмите «Скачать для Android» выше или откройте последний релиз на GitHub."],["Разрешите установку","Android спросит разрешение на установку из браузера или файлового менеджера. Разрешите один раз."],["Установите и откройте","Нажмите на скачанный файл, установите и запустите Mobilix."],["Выберите версию","Выберите версию игры и нажмите «Играть». При первом запуске докачаются файлы игры."]],
  win:[["Скачайте .exe","Версия для Windows выйдет через пару дней. Эта кнопка включится сама."],["Запустите установщик","Windows может показать предупреждение SmartScreen для нового приложения: выберите «Подробнее», затем «Выполнить в любом случае»."],["Войдите или играйте офлайн","Добавьте профиль и выберите версию игры."],["Нажмите «Играть»","Моды и версии работают так же, как на Android."]]};
var FAQ_RU=[["Будет ли версия для ПК?","Да, её дорабатывают и выпустят через пару дней в виде .exe. Когда она появится, кнопка «Скачать для Windows» вверху страницы включится автоматически, а код лежит в репозитории GitHub • Windows."],
  ["Это бесплатно?","Да. Mobilix бесплатный и с открытым кодом. Для игры по сети нужна ваша собственная копия Minecraft Java Edition."],
  ["Какие телефоны подходят?","Android 9 и новее, процессор arm64 и не меньше 4 ГБ памяти. Для модов лучше 6 ГБ и больше."],
  ["Это PojavLauncher?","Нет. У Mobilix собственный рантайм и код запуска, написанные отдельно."],
  ["Какие моды и загрузчики работают?","Fabric, Forge, NeoForge и Quilt. Тяжёлые моды и шейдеры зависят от телефона."],
  ["Игра вылетела. Что делать?","Откройте экран вылета и нажмите кнопку автопочинки. Если не помогло, отправьте лог в чат Telegram или создайте issue на GitHub."],
  ["Можно играть с друзьями?","Да, по сети. Откройте мир из лаунчера и отправьте приглашение."],
  ["Это безопасно?","Код открыт, сборки делает GitHub Actions, а APK приложен к каждому релизу."]];
var RUX={dl:"Скачать",latest:"последняя",none:"Релизов для Windows пока нет. Они появятся здесь после первой сборки.",fail:"Не удалось загрузить версии. Посмотрите их на GitHub.",rel:"Открыть на GitHub",dls:" скачиваний",wnote:"Сборка для Windows в ближайшие дни"};

/* ---------- пиксельные иконки ---------- */
var PAL={g:"#3db254",d:"#1b7f37",k:"#13264a",w:"#ffffff",y:"#f2a93b",r:"#d9534f",b:"#4a8ee0",s:"#9aa9c2"};
var SPR=[
 ["..kkkk..",".kggggk.","kgwggwgk","kggggggk","kgddddgk","kggggggk",".kggggk.","..kkkk.."],
 ["kkkkkkkk","kgggbbgk","kgggbbgk","kddddddk","kggggggk","kgyygggk","kgyygggk","kkkkkkkk"],
 ["kkkkkkk.","kggggggk","kgwwwwgk","kgwddwgk","kgwwwwgk","kggggggk","kkkkkkkk","........"],
 ["...kk...","..krrk..","..krrk..","kkkrrkkk","krrrrrrk","kkkrrkkk","..krrk..","...kk..."],
 ["..kkkk..",".kyyyyk.","kykkkkyk","kyk..kyk","kykkkkyk","kyyyyyyk","kyyyyyyk","kkkkkkkk"],
 ["....kk..","...kyyk.","..kyyk..",".kyyyyk.","..kyyk..","..kyk...",".kyk....","kkk....."],
 ["..k..k..",".kgk.kgk","kkgkkkgk",".kgggggk",".kgwgwgk",".kgggggk","..kkkkk.","........"],
 ["kkkkkkkk","kssssssk","kskkkksk","kssssssk","kskkkksk","kssssssk","kskggksk","kkkkkkkk"]
];
function sprite(m){
 var s='<svg viewBox="0 0 8 8" aria-hidden="true" focusable="false">';
 m.forEach(function(row,y){for(var x=0;x<8;x++){var c=row.charAt(x);if(c!==".")s+='<rect x="'+x+'" y="'+y+'" width="1" height="1" fill="'+PAL[c]+'"/>'}});
 return s+"</svg>";
}
function numSvg(n){
 var P={1:["..k..",".kk..","..k..","..k..",".kkk."],2:[".kkk.","k...k","..kk.",".k...","kkkkk"],3:["kkkk.","....k",".kkk.","....k","kkkk."],4:["k..k.","k..k.","kkkkk","...k.","...k."]}[n];
 var s='<svg class="pxn" viewBox="0 0 5 5" width="30" height="30" aria-hidden="true" shape-rendering="crispEdges" fill="currentColor">';
 P.forEach(function(r,y){for(var x=0;x<5;x++)if(r.charAt(x)==="k")s+='<rect x="'+x+'" y="'+y+'" width="1" height="1"/>'});
 return s+"</svg>";
}

/* ---------- отрисовка ---------- */
function T(k){var d=lang==="en"?EN:RU;return d[k]!==undefined?d[k]:(EN[k]!==undefined&&lang==="en"?EN[k]:RU[k])}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function ui(k){return lang==="en"?EN[k]:RUX[k]}
$$("[data-i18n]").forEach(function(el){RU[el.getAttribute("data-i18n")]=el.textContent});
$$("[data-i18n-aria]").forEach(function(el){RU[el.getAttribute("data-i18n-aria")]=el.getAttribute("aria-label")});

var tabInst="android", tabChg="android";
function renderFeats(){
 var data=lang==="en"?EN.fe:FE_RU;
 $("#feats").innerHTML=data.map(function(f,i){return "<li>"+sprite(SPR[i])+"<div><h3>"+esc(f[0])+"</h3><p>"+esc(f[1])+"</p></div></li>"}).join("");
}
function renderSteps(){
 var data=(lang==="en"?EN.st:ST_RU)[tabInst];
 $("#steps").innerHTML=data.map(function(s,i){return '<li><span class="sn">'+numSvg(i+1)+"</span><h3>"+esc(s[0])+"</h3><p>"+esc(s[1])+"</p></li>"}).join("");
}
function renderFaq(){
 var data=lang==="en"?EN.faq:FAQ_RU;
 $("#faqbox").innerHTML=data.map(function(q){return "<details><summary>"+esc(q[0])+'</summary><div class="body"><p>'+esc(q[1])+"</p></div></details>"}).join("");
}
function applyLang(){
 document.documentElement.lang=lang;
 $$("[data-i18n]").forEach(function(el){var v=T(el.getAttribute("data-i18n"));if(v!==undefined)el.textContent=v});
 $$("[data-i18n-aria]").forEach(function(el){el.setAttribute("aria-label",T(el.getAttribute("data-i18n-aria")))});
 $$(".lang button").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-lang")===lang)});
 document.title=lang==="en"?"Mobilix: Minecraft Java on phone and PC":"Mobilix: Minecraft Java на телефоне и ПК";
 renderFeats();renderSteps();renderFaq();renderDownloads();renderLog();
}
$$(".lang button").forEach(function(b){b.addEventListener("click",function(){lang=b.getAttribute("data-lang");try{localStorage.setItem("mx-lang",lang)}catch(e){}applyLang()})});

/* вкладки */
function bindTabs(attr,cb){
 $$("["+attr+"]").forEach(function(b){b.addEventListener("click",function(){
  $$("["+attr+"]").forEach(function(x){x.setAttribute("aria-selected",x===b)});
  cb(b.getAttribute(attr));
 })});
}
bindTabs("data-tab",function(v){tabInst=v;renderSteps()});
bindTabs("data-chg",function(v){tabChg=v;renderLog()});

/* ОС */
var isWin=/Windows/i.test(navigator.userAgent);
if(isWin){document.body.classList.add("is-win");tabInst="win";
 $$("[data-tab]").forEach(function(x){x.setAttribute("aria-selected",x.getAttribute("data-tab")==="win")})}

/* ---------- данные GitHub ---------- */
var rel={android:null,win:null}, stats=null;
function getJson(u){return fetch(u,{headers:{Accept:"application/vnd.github+json"}}).then(function(r){if(!r.ok)throw new Error(r.status);return r.json()})}
function mb(n){return (n/1048576).toFixed(0)+" MB"}
function renderDownloads(){
 var a=rel.android&&rel.android[0];
 if(a){
  var apk=(a.assets||[]).filter(function(x){return /\.apk$/i.test(x.name)})[0];
  if(apk)$("#dl-android").href=apk.browser_download_url,$("#pl-android").href=apk.browser_download_url;
  $("#dl-android-info").textContent=(a.tag_name||a.name)+(apk?", "+mb(apk.size):"");
 }
 var w=rel.win&&rel.win.filter(function(r){return !r.draft&&(r.assets||[]).some(function(x){return /\.(exe|msi)$/i.test(x.name)})})[0];
 var btn=$("#dl-win");
 if(w){
  var ex=w.assets.filter(function(x){return /\.(exe|msi)$/i.test(x.name)})[0];
  btn.href=ex.browser_download_url;btn.removeAttribute("aria-disabled");
  $("#dl-win-info").textContent=(w.tag_name||w.name)+", "+mb(ex.size);
  $("#pl-win").href=ex.browser_download_url;$("#pl-win").textContent=ui("dl")+" .exe";
  $("#pl-win-st").textContent=ui("latest")==="latest"?"Available":"Доступно";
  var dot=$(".plat.soon-plat .dot");if(dot)dot.classList.remove("wait");
  $(".soon").hidden=true;
 }
 var c=$("#count");
 if(stats&&stats>0){c.hidden=false;c.textContent=stats.toLocaleString(lang==="en"?"en-US":"ru-RU")+ui("dls")}
}
function renderLog(){
 var list=rel[tabChg],box=$("#log");
 if(list===null){box.innerHTML='<p class="meta">'+esc(T("loading"))+"</p>";return}
 list=list.filter(function(r){return !r.draft});
 if(!list.length){box.innerHTML='<p class="meta">'+esc(ui("none"))+"</p>";return}
 box.innerHTML=list.slice(0,12).map(function(r,i){
  var d=new Date(r.published_at||r.created_at).toLocaleDateString(lang==="en"?"en-US":"ru-RU",{year:"numeric",month:"long",day:"numeric"});
  return "<details"+(i===0?" open":"")+"><summary><b class=\"ver\">"+esc(r.tag_name||r.name)+'</b><span class="date">'+esc(d)+'</span></summary><div class="body">'+notes(r.body||"",r.html_url)+"</div></details>";
 }).join("");
}
function notes(body,url){
 body=body.replace(/\r/g,"");
 var m=body.search(/^\s*RU:/m),en=body,ru="";
 if(m>=0){en=body.slice(0,m);ru=body.slice(m).replace(/^\s*RU:\s*/,"")}
 var part=(lang==="ru"&&ru)?ru:en;
 var lines=part.split("\n").map(function(l){return l.trim()}).filter(Boolean);
 var items=lines.filter(function(l){return /^[-*]\s+/.test(l)}).map(function(l){return l.replace(/^[-*]\s+/,"")});
 var html=items.length?"<ul>"+items.map(function(t){return "<li>"+esc(t).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>")+"</li>"}).join("")+"</ul>":"";
 return html+'<p class="meta"><a href="'+esc(url)+'">'+esc(ui("rel"))+"</a></p>";
}

function load(){
 getJson("https://api.github.com/repos/"+AND+"/releases?per_page=20").then(function(r){
  rel.android=r;
  var t=0;r.forEach(function(x){(x.assets||[]).forEach(function(a){t+=a.download_count||0})});
  stats=t;renderDownloads();renderLog();
 }).catch(function(){
  fetch("stats.json").then(function(r){return r.json()}).then(function(j){
   rel.android=j.android&&j.android.releases||[];stats=j.android&&j.android.downloads||0;renderDownloads();renderLog();
  }).catch(function(){rel.android=[];$("#log").innerHTML='<p class="meta">'+esc(ui("fail"))+"</p>"});
 });
 getJson("https://api.github.com/repos/"+WIN+"/releases?per_page=20").then(function(r){rel.win=r;renderDownloads();renderLog()})
  .catch(function(){rel.win=[];renderLog()});
}
applyLang();load();
})();
