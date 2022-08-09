export default class Triangle {
    constructor(d1,d2,d3) {
        this.d1 = d1;
        this.d2 = d2;
        this.d3 = d3;

        var s = (a+b+c)/2;
        this.area = Math.round(Math.sqrt(s*(s-a)*(s-b)*(s-c))*100)/100;
    }

    getArea() {
        return this.area;
    }

    anglesBySide() {
        arcA = Math.acos((d1**2 + d3**2 - d2**2)/(2*d1*d3)); //Lei dos cossenos
        arcB = Math.acos((d1**2 + d2**2 - d3**2)/(2*d1*d2));
        arcC =  Math.acos((d2**2 + d3**2 - d1**2)/(2*d2*d3));
        tetaA = (arcA*180)/Math.PI; tetaB = (arcB*180)/Math.PI; tetaC = (arcC*180)/Math.PI
        xA = 0,xB = d1*Math.cos(arcA), xC = (d1*Math.sin(arcB))/Math.sin(arcC), //Coordenadas por meio dos valores
        yA = d1*Math.sin(arcA), yB = 0, yC = d1*Math.sin(arcA)
    }

    draw() {
        const canvas = document.querySelector("#canvas");
		if (!canvas.getContext) return;

        
    }
}