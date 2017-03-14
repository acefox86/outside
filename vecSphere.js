var x = 50;
var y = 50;
//var location;
//var velocity;
var xVec;
var yVec;

function setup() {
	createCanvas(600, 600);
	background(100);
	frameRate(10);
	var location = new PVector(100,100);
	//var velocity = new PVector(10,10);
	//x = 50;
	//y = 50;
	console.log("hi");
}

function draw() {
	var location = new PVector(x,y);
//	var velocity = new PVector(60,.01);
	background(100);
	//console.log("hey");
    //location.add(velocity);
	location.x = location.x + 5;
	console.log("nl: " + location.x);
	location.display();
	//ellipse(location.x, location.y, 100,100);
}


function PVector(xLoc, yLoc) {
	this.xVec = xLoc;
	this.yVec = yLoc;
	
	this.add = function (PVector) {
		xVec = xVec + PVector.x;
		yVec = yVec + PVector.y;
		console.log("in add");
		console.log("this.x: " + this.x);
		console.log("this.y: " + this.y);
		console.log("vector.x: " + PVector.x);
	}
	
	this.display = function () {
		ellipse(this.x,this.y, 20, 20);
	}
}