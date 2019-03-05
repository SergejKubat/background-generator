var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");
var text = document.querySelector("h3");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	text.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);