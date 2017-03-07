var sphere1;
var x = 50;
var y = 50;

function setup() {
	createCanvas(500,500);
	//stroke(200);
	fill(255, 204)
	background(100);
	frameRate(50);
	//noStroke();
	//sphere1 = new sphere(10, 10, 40, 40);
}

function draw() {
	
	ellipse(x, y, 60, 60);
	//sphere1 = new sphere(10, 10, 40, 40);
	//sphere1.display();
	x++;
	y++;
}

function sphere(x, y, w, h) {
	this.xLoc = x;
	this.yLoc = y;
	this.sWidth = w;
	this.sHeight = h;

	this.display = function() {
		fill(35, 4, 16)
		ellipse(xLoc, yLoc, sWidth, sHeight);
	}
}