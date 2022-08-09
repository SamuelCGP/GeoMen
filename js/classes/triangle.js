export default class Triangle {
    constructor(d1,d2,d3) {
        this.d1 = d1;
        this.d2 = d2;
        this.d3 = d3;

        var s = (d1+d2+d3)/2;
        this.area = Math.round(Math.sqrt(s*(s-d1)*(s-d2)*(s-d3))*100)/100;
    }

    getArea() {
        return this.area;
    }

    draw() {
        const c = document.querySelector("#canvas");
		if (!canvas.getContext) return;

        var arcA = Math.acos((this.d1**2 + this.d3**2 - this.d2**2)/(2*this.d1*this.d3)); //Lei dos cossenos
        var arcB = Math.acos((this.d1**2 + this.d2**2 - this.d3**2)/(2*this.d1*this.d2));
        var arcC =  Math.acos((this.d2**2 + this.d3**2 - this.d1**2)/(2*this.d2*this.d3));
        var tetaA = (arcA*180)/Math.PI; var tetaB = (arcB*180)/Math.PI; var tetaC = (arcC*180)/Math.PI
        var xA = 0,xB = this.d1*Math.cos(arcA), xC = (this.d1*Math.sin(arcB))/Math.sin(arcC), //Coordenadas por meio dos valores
        yA = this.d1*Math.sin(arcA), yB = 0, yC = this.d1*Math.sin(arcA)
        if (xB < xA) { //Caso em que o ângulo de A era obtuso
            xA = this.d3*Math.cos(arcC); yA = 0
            xC = 0; yC = this.d3*Math.sin(arcC)
            xB = (this.d3*Math.sin(arcA))/Math.sin(arcB); yB = yC //Mudando apenas o modo de representação do triângulo
        }

        var ctx=c.getContext("2d");
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.clearRect(0,0,c.width,c.height) //Comando pra limpar o canvas
        ctx.moveTo(xA,yA) //vértice A
        ctx.lineTo(xB,yB) //vértice B
        ctx.lineTo(xC,yC) //vértice C
        ctx.closePath() //linha para o vértice B

        const Red = Math.floor(Math.random() * 255);
		const Green = Math.floor(Math.random() * 255);
		const Blue = Math.floor(Math.random() * 255);

		ctx.fillStyle = `rgb(${Red}, ${Green}, ${Blue})`;
		ctx.fill();
        console.log("AAAAAAA")
    }
}