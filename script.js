

// selectNoLayout();
// function selectNoLayout() {
//     document.getElementById('card').style.cssFloat = "none"
// };
// selectVerticalLayout();
// function selectVerticalLayout() {
//     selectNoLayout();
//     document.getElementById('card').style.gridTemplateColumns = "auto auto auto auto auto"
// };
// selectHorizontalLayout();
// function selectHorizontalLayout() {
//     selectNoLayout();
//     document.getElementById('card').style.gridTemplateRows = "auto auto auto auto auto"
// };
// selectGridLayout();
// function selectGridLayout() {
//     selectNoLayout();
//     document.getElementById('card').style.gridTemplateColumns = "auto auto auto"
// };


let tools = document.getElementById("tools").innerHTML = `De to viktigste verktøyene vi skal bruke er disse:
<ul>
  <li>
    Koderedigeringsprogrammet
    <a href="https://code.visualstudio.com/"> Visual Studio Code </a>
    <br />Vi skal bruke noen <i>extensions:</i>
    <ul>
      <li>JavaScript-booster</li>
      <li>es6-string-html</li>
      <li>live-server</li>
      <li>live-share</li>
    </ul>
  </li>

  <li>
    Nettleseren
    <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a>
  </li>
</ul>`;
let html = document.getElementById("html").innerHTML = `Vi bruker HTML til å definere et dokument.
<ul>
  <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
  <li>Tagger for grunnleggende formatering av tekst</li>
  <li><tt>&lt;div&gt;</tt></li>
  <li><tt>&lt;input type="text"&gt;</tt></li>
  <li><tt>&lt;button&gt;</tt></li>
  <li>
    <a href="https://www.w3schools.com/html/default.asp" target="_new"
      >W3Schools HTML Tutorial</a
    >
  </li>
  <li>
    <a href="https://www.w3schools.com/tags/default.asp" target="_new"
      >W3Schools HTML Reference</a
    >
  </li>
</ul>`

let css = document.getElementById("css").innerHTML = `Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter,
utseende og lignende.
<ul>
  <li><tt>background-color</tt></li>
  <li><tt>color</tt></li>
  <li><tt>padding</tt></li>
  <li><tt>margin</tt></li>
  <li><tt>border</tt></li>
  <li><tt>text-align</tt></li>
  <li><tt>font-size</tt></li>
  <li>
    <a
      href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
      target="_new"
      >Flexbox</a
    >
  </li>
  <li>
    <a
      href="https://css-tricks.com/snippets/css/complete-guide-grid/"
      target="_new"
      >Grid</a
    >
  </li>
  <li>
    <a href="https://www.w3schools.com/css/default.asp" target="_new"
      >W3Schools CSS Tutorial</a
    >
  </li>
  <li>
    <a href="https://www.w3schools.com/cssref/default.asp" target="_new"
      >W3Schools CSS Reference</a
    >
  </li>
</ul>`
let javaScript= document.getElementById("javaScript").innerHTML =` Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal
lære grunnleggende programmering ved å manipulere HTML- og CSS-kode på
en nettside ved hjelp av JavaScript.
<ul>
  <li>
    Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi
    heller å følge kurset vårt på Moodle.
  </li>
  <li>
    <a href="https://www.w3schools.com/jsref/default.asp" target="_new"
      >W3Schools JavaScript Reference</a
    >
  </li>
</ul>`
let game = document.getElementById("game").innerHTML = ` <div id="head">
<button onclick="playHead4()">◀</button
><img src="img/head1.png" /><button onclick="playHead2()">▶</button>
<br />
</div>
<div id="body">
<button onclick="playBody4()">◀</button
    ><img src="img/body1.png" /><button onclick="playBody2()">▶</button>
    <br />
</div>
<div id="legs">
<button onclick="playLegs4()">◀</button
    ><img src="img/legs1.png" /><button onclick="playLegs2()">▶</button>
    <br />
</div>`

clearHTML()

function clearHTML() {
    document.getElementById("tools").innerHTML = '';
    document.getElementById("html").innerHTML = '';
    document.getElementById("css").innerHTML = '';
    document.getElementById("javaScript").innerHTML = '';
    document.getElementById("game").innerHTML = '';
}
function showTools() {
    clearHTML();
    document.getElementById("tools").innerHTML = tools;
}
function showHTML() {
    clearHTML();
    document.getElementById("html").innerHTML = html;
}
function showCSS() {
    clearHTML();
    document.getElementById("css").innerHTML = css;
}
function showJavaScript() {
    clearHTML();
    document.getElementById("javaScript").innerHTML = javaScript;
}
function showGame() {
    clearHTML();
    document.getElementById("game").innerHTML = game;
}

playHead1()
function playHead1() {
    document.getElementById("head").innerHTML = `<button onclick="playHead4()">◀</button
    ><img src="img/head1.png" /><button onclick="playHead2()">▶</button>
    <br />`
}
function playHead2() {
    document.getElementById("head").innerHTML = `<button onclick="playHead1()">◀</button
    ><img src="img/head2.png" /><button onclick="playHead3()">▶</button>
    <br />`
}
function playHead3() {
    document.getElementById("head").innerHTML = `<button onclick="playHead2()">◀</button
    ><img src="img/head3.png" /><button onclick="playHead4()">▶</button>
    <br />`
}
function playHead4() {
    document.getElementById("head").innerHTML = `<button onclick="playHead3()">◀</button
    ><img src="img/head4.png" /><button onclick="playHead1()">▶</button>
    <br />`
}

playBody1()
function playBody1() {
    document.getElementById("body").innerHTML = `<button onclick="playBody4()">◀</button
    ><img src="img/body1.png" /><button onclick="playBody2()">▶</button>
    <br />`;
}
function playBody2() {
    document.getElementById("body").innerHTML = `<button onclick="playBody1()">◀</button
    ><img src="img/body2.png" /><button onclick="playBody3()">▶</button>
    <br />`;
}
function playBody3() {
    document.getElementById("body").innerHTML = `<button onclick="playBody2()">◀</button
    ><img src="img/body3.png" /><button onclick="playBody4()">▶</button>
    <br />`;
}
function playBody4() {
    document.getElementById("body").innerHTML = `<button onclick="playBody3()">◀</button
    ><img src="img/body4.png" /><button onclick="playBody1()">▶</button>
    <br />`;
}

playLegs1()
function playLegs1() {
    document.getElementById("legs").innerHTML = `<button onclick="playLegs4()">◀</button
    ><img src="img/legs1.png" /><button onclick="playLegs2()">▶</button>
    <br />`;
}
function playLegs2() {
    document.getElementById("legs").innerHTML = `<button onclick="playLegs1()">◀</button
    ><img src="img/legs2.png" /><button onclick="playLegs3()">▶</button>
    <br />`;
}
function playLegs3() {
    document.getElementById("legs").innerHTML = `<button onclick="playLegs2()">◀</button
    ><img src="img/legs3.png" /><button onclick="playLegs4()">▶</button>
    <br />`;
}
function playLegs4() {
    document.getElementById("legs").innerHTML = `<button onclick="playLegs3()">◀</button
    ><img src="img/legs4.png" /><button onclick="playLegs1()">▶</button>
    <br />`;
}