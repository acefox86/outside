var location;

function setup() {
	createCanvas(600, 600);
	background(100);
	frameRate(100);
	location = new PVector(100,100);
}

function draw() {
	ellipse(location.x, location.y, 50,50);
}


function PVector(xLoc, yLoc) {
	this.x = xLoc;
	this.y = yLoc;
}