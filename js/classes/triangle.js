export default class Triangle {
    constructor(d1,d2,d3) {
        this.d1 = d1;
        this.d2 = d2;
        this.d3 = d3;

        var s = (d1 + d2 + d3)/2;
        this.area = Math.sqrt(s*(s-d1)*(s-d2)*(s-d3));
    }

    getArea() {
        return this.area;
    }

    draw() {
        const c = document.querySelector("#canvas");
		if (!c.getContext) return;
        var ctx=c.getContext("2d");


        var arcA = Math.acos((this.d1**2 + this.d3**2 - this.d2**2)/(2 * this.d1 * this.d3)); //Lei dos cossenos
        var arcB = Math.acos((this.d1**2 + this.d2**2 - this.d3**2)/(2*this.d1*this.d2));
        var arcC =  Math.acos((this.d2**2 + this.d3**2 - this.d1**2)/(2*this.d2*this.d3));
        var tetaA = (arcA*180)/Math.PI; var tetaB = (arcB*180)/Math.PI; var tetaC = (arcC*180)/Math.PI
        console.log("")
        console.log("Ângulo A: " + Math.round(tetaA*100)/100 + "°"+ "\nÂngulo B: " + Math.round(tetaB*100)/100 + "°" + "\nÂngulo C: " + Math.round(tetaC*100)/100 + "°")

        var startX = 300/2, startY = (140 + (this.d2*Math.sin(arcC)))/2,
        xA = startX - (this.d3/2),//Coordenadas por meio dos valores
        xB = xA + this.d1*Math.cos(arcA),
        xC = startX + (this.d3/2),
        yA = startY,
        yB = startY - this.d2*Math.sin(arcC),
        yC = yA

        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.clearRect(0,0,c.width,c.height) //Comando pra limpar o canvas
        ctx.moveTo(xA,yA)//vértice A
        ctx.lineTo(xB,yB) //vértice B
        ctx.lineTo(xC,yC) //vértice C
        ctx.closePath() //linha para o vértice B

        const Red = Math.floor(Math.random() * 255);
		const Green = Math.floor(Math.random() * 255);
		const Blue = Math.floor(Math.random() * 255);

		ctx.fillStyle = `rgb(${Red}, ${Green}, ${Blue})`;
		ctx.fill();
    }
}