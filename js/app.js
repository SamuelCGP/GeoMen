import Rectangle from "./classes/rectangle.js";

document.getElementById("generateButton").addEventListener("click", generateSquare)

function generateSquare(){
    var largura = parseFloat(document.getElementById("width").value);
    var altura = parseFloat(document.getElementById("height").value);

    if(isNaN(largura) || isNaN(altura)) return;

    const areaTag = document.getElementById("areaTag")
	const rectangle = new Rectangle(largura, altura);
    areaTag.innerHTML = "Area = " + Math.round(rectangle.getArea());

	if (largura > altura && largura > 30) altura = (30*altura)/largura
	else if (altura > largura && altura > 30) largura = (30*largura)/altura
	const drawRectangle = new Rectangle(largura, altura)
    drawRectangle.draw();
}

/*
function drawTriangle(a = 20, b = 20, c = 20) {
	const canvas = document.querySelector("#canvas");

	const startX = 150;
	const startY = 50;

	if (!canvas.getContext) {
		return;
	}
	const ctx = canvas.getContext("2d");
	ctx.lineWidth = 1;

	ctx.beginPath();
	ctx.moveTo(startX, startY);
	ctx.lineTo(100, 100);
	ctx.lineTo(200, 100);
	ctx.fill();
}
*/
