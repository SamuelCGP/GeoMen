export default class Rectangle {
	constructor(largura, altura) {
		this.largura = largura;
		this.altura = altura;

		this.area = largura * altura;
	}

	getArea() {
		return this.area;
	}

	draw() {
		const canvas = document.querySelector("#canvas");
		if (!canvas.getContext) return;

		const ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		let x = Math.floor((300 - this.largura * 10) / 2);
		let y = Math.floor((150 - this.altura * 5) / 2);

		ctx.lineWidth = 1;

		ctx.beginPath();
		ctx.moveTo(x, y);
		y += this.altura * 5;
		ctx.lineTo(x, y);
		x += this.largura * 10;
		ctx.lineTo(x, y);
		console.log(x, y);
		y -= this.altura * 5;
		ctx.lineTo(x, y);

		const Red = Math.floor(Math.random() * 255);
		const Green = Math.floor(Math.random() * 255);
		const Blue = Math.floor(Math.random() * 255);

		ctx.fillStyle = `rgb(${Red}, ${Green}, ${Blue})`;
		ctx.fill();
	}
}
