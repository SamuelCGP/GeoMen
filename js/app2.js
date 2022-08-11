import Triangle from "./classes/triangle.js";

document.getElementById("generateButton").addEventListener("click", generateTriangle)

function generateTriangle() {
	const d1Index = document.querySelector('#Numd1'); //pegando o valor dos lados
    const d2Index = document.querySelector('#Numd2');
    const d3Index = document.querySelector('#Numd3');
	var d1 = parseFloat(d1Index.value) //armazenando os valores e mudando a proporção pra ficar melhor na figura
    var d2 = parseFloat(d2Index.value)
    var d3 = parseFloat(d3Index.value)
	if (d1 + d2 <= d3 || d1 + d3 <= d2 || d2 + d3 <= d1) { //Problema da desigualdade 
        document.getElementById("warning").style.display = 'inline';
        return
    } else {
        document.getElementById("warning").style.display = 'none';
    }
	console.log("")

	const areaTag = document.getElementById("areaTag");
	const triangle = new Triangle(d1, d2, d3);
	areaTag.innerHTML = "Area: " + Math.round(triangle.getArea()*100)/100 + "m²";

	if (d1 >= d2 && d1 >= d3) { //armazenando os valores e mudando a proporção pra ficar melhor na figura
		var q = d1
		d1 = 80 //Esse 80 serve para ficar maior o triângulo no canvas
		d2 = (d2*80)/q;
    	d3 = (d3*80)/q;
	} else if (d2 >= d3 && d2 >= d1) {
		var q = d2
		d2 = 80
		d1 = (d1*80)/q;
		d3 = (d3*80)/q;
	} else if (d3 >= d2 && d3 >= d1) {
		var q = d3
		d3 = 80
		d1 = (d1*80)/q;
		d2 = (d2*80)/q;
	}
	const drawTriangle = new Triangle(d1, d2, d3);
	drawTriangle.draw()
}