var Square = {
	x: 2560 / 2,
	y: 1440 / 2,
	speed: 15
}

Listener.createHoldEvent("w", () => {Square.y -= Square.speed;});
Listener.createHoldEvent("s", () => {Square.y += Square.speed;});
Listener.createHoldEvent("a", () => {Square.x -= Square.speed;});
Listener.createHoldEvent("d", () => {Square.x += Square.speed;});

var context = document.getElementById("main").getContext("2d");

var animate = setInterval(() => {
	context.clearRect(0, 0, 2560, 1440);
	context.fillStyle = "red";
	context.strokeStyle = "red";
	context.fillRect(Square.x - 20, Square.y - 20, 40, 40);
	context.beginPath();
	context.moveTo(2560 / 2, 1440 / 2);
	context.lineTo(Square.x, Square.y);
	context.stroke();
}, 1000 / 60);