import Triangle from "./classes/triangle.js";

document.getElementById("generateButton").addEventListener("click", generateTriangle)

function generateTriangle() {
	const d1Index = document.querySelector('#Numd1'); //pegando o valor dos lados
    const d2Index = document.querySelector('#Numd2');
    const d3Index = document.querySelector('#Numd3');
	var d1 = (d1Index.value / d1Index.value) * 50; //armazenando os valores e mudando a proporção pra ficar melhor na figura
    var d2 = (d2Index.value / d1Index.value) * 50;
    var d3 = (d3Index.value / d1Index.value) * 50;

	console.log(d1, d2, d3)
	const areaTag = document.getElementById("areaTag");
	const triangle = new Triangle(d1/50, d2/50, d3/50);
	areaTag.innerHTML = "Area: " + Math.round(triangle.getArea());

	const drawTriangle = new Triangle(d1, d2, d3);
	drawTriangle.draw()
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
