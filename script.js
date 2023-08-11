

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

let tools = document.getElementById("tools").innerHTML;
let html = document.getElementById("html").innerHTML;
let css = document.getElementById("css").innerHTML;
let javaScript= document.getElementById("javaScript").innerHTML;
let game = document.getElementById("game").innerHTML;

function showTools() {
    document.getElementById("tools").innerHTML = tools;
    document.getElementById("html").innerHTML = '';
    document.getElementById("css").innerHTML = '';
    document.getElementById("javaScript").innerHTML = '';
    document.getElementById("game").innerHTML = '';

}
function showHTML() {
    document.getElementById("tools").innerHTML = '';
    document.getElementById("html").innerHTML = html;
    document.getElementById("css").innerHTML = '';
    document.getElementById("javaScript").innerHTML = '';
    document.getElementById("game").innerHTML = '';

}
function showCSS() {
    document.getElementById("tools").innerHTML = '';
    document.getElementById("html").innerHTML = '';
    document.getElementById("css").innerHTML = css
    document.getElementById("javaScript").innerHTML = '';
    document.getElementById("game").innerHTML = '';

}
function showJavaScript() {
    document.getElementById("tools").innerHTML = '';
    document.getElementById("html").innerHTML = '';
    document.getElementById("css").innerHTML = '';
    document.getElementById("javaScript").innerHTML = javaScript
    document.getElementById("game").innerHTML = '';

}
function showGame() {
    document.getElementById("tools").innerHTML = '';
    document.getElementById("html").innerHTML = '';
    document.getElementById("css").innerHTML = '';
    document.getElementById("javaScript").innerHTML = '';
    document.getElementById("game").innerHTML = game

}


function playHead1() {
    document.getElementById("head").innerHTML =
        '<button onclick= "playHead4()>◀</button> <img src="img/head1.png" /><button onclick= "playHead2()>▶</button> <br />';
}
function playHead2() {
document.getElementById("head").innerHTML = '<button onclick= "playHead3()>◀</button><img src="img/head2.png" /><buttononclick= "playHead3()>▶</button> <br />'
}
function playHead3() {
document.getElementById("head").innerHTML = '<button onclick= "playHead2()>◀</button><img src="img/head3.png" /><buttononclick= "playHead4()>▶</button> <br />'
}
function playHead4() {
document.getElementById("head").innerHTML = '<button onclick= "playHead1()>◀</button><img src="img/head4.png" /><buttononclick= "playHead1()>▶</button> <br />'
}