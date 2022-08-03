import Rectangle from "./classes/rectangle.js";

document.getElementById("generateButton").addEventListener("click", generateSquare)

function generateSquare(){
    const largura = parseInt(document.getElementById("largura").value);
    const altura = parseInt(document.getElementById("altura").value);

    if(isNaN(largura) || isNaN(altura)) return;

    const rectangle = new Rectangle(largura, altura);
    rectangle.draw();

    const areaTag = document.getElementById("areaTag")
    areaTag.innerHTML = "Área = " + rectangle.getArea();
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
