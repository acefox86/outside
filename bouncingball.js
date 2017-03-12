var x = 100;
var y = 550;
var xSpeed = 10;
var ySpeed = 10;

function setup() {
	createCanvas(600, 600);
	//stroke(200);
	background(100);
	frameRate(100);
	//noStroke();
}

function draw() {
	background(100);
	ellipse(x, y, 50, 50);
	x = x + xSpeed;
	y = y + ySpeed;
	
	if (x > width || x < 0) {
		xSpeed = (xSpeed * -1);
	}
	if (y > height || y < 0) {
		ySpeed = (ySpeed * -1);
	}
	console.log(x);
	console.log(y);
}