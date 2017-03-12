var x = 100;
var y = 550;
var xSpeed = 10;
var ySpeed = 10;
var sphereAsVector;
var xVec;
var yVec;

function setup() {
	createCanvas(600, 600);
	//stroke(200);
	background(100);
	frameRate(100);
	//noStroke();
	sphereAsVector = new PVector(200, 100);
	translate(width/2,height/2);
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

	ellipse(sphereAsVector.xVec, sphereAsVector.yVec, 50, 50);

	var mouseLoc = new PVector(mouseX, mouseY);
	var center = new PVector(width/2, height/2);
	console.log("width/2: " + width/2);
	mouseLoc.sub(center);
	console.log("mouseX: " + mouseX);
	console.log("mouseY: " + mouseY);
	console.log("mouseLoc.xVec: " + mouseLoc.xVec);
	console.log("mouseLoc.yVec: " + mouseLoc.yVec);
	//translate(width/2,height/2);
	line (300, 300, mouseLoc.xVec, mouseLoc.yVec);
}

function PVector(xLoc, yLoc) {
	this.xVec = xLoc;
	this.yVec = yLoc;

	this.add = function(PVector) {
		xVec = xVec + PVector.x;
		yVec = yVec + PVector.y;
	}

	this.sub = function(PVector) {
		xVec = xVec - PVector.x;
		yVec = yVec - PVector.y;
	}
}