import Rectangle from "./classes/rectangle.js";

document.getElementById("generateButton").addEventListener("click", generateSquare)

function generateSquare() {
    var largura = parseFloat(document.getElementById("width").value);
    var altura = parseFloat(document.getElementById("height").value);

    if (isNaN(largura) || isNaN(altura)) return;

    const areaTag = document.getElementById("areaTag")
    const rectangle = new Rectangle(largura, altura);
    areaTag.innerHTML = "Area = " + Math.round(rectangle.getArea()) + "m²";

    if (largura > altura && largura > 30) altura = (30 * altura) / largura
    else if (altura > largura && altura > 30) largura = (30 * largura) / altura
    const drawRectangle = new Rectangle(largura, altura)
    drawRectangle.draw();
}