var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("pick");


// 當使用者input了color1和color2的顏色，會改變為背景色
// 漸層色 linear-gradient(to direction, color1, color2, ...);
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


// 網頁一打開就讓原本的input顏色成為背景色
setGradient();


// 按按鈕後產生隨機的顏色給color input
function pickNewColor1() {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	color1.value = "#" + randomColor;
	setGradient();
}

function pickNewColor2() {
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + randomColor;
	setGradient();
}


button.addEventListener("click", pickNewColor1);
button.addEventListener("click", pickNewColor2);


//如何生成隨機顏色？去google "How to generate a random color in JS" by css-tricks"