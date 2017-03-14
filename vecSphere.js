//var x;
//var y;
//var location;
//var velocity;

function setup() {
	createCanvas(600, 600);
	background(100);
	frameRate(10);
	var location = new PVector(100,100);
	var velocity = new PVector(10,10);
	console.log("hi");
}

function draw() {
	//var location = new PVector(100,100);
	//var velocity = new PVector(300,50);
	background(100);
	//console.log("hey");
//	location.add(velocity);
	//location.x++;
	console.log(location.x);
//	location.display();
	ellipse(location.x, location.y, 100,100);
}


function PVector(xLoc, yLoc) {
	this.x = xLoc;
	this.y = yLoc;
	this.add = function (vector) {
		this.x += vector.x;
		this.y += vector.y;
		console.log("in add");
		console.log("this.x: " + this.x);
		console.log("this.y: " + this.y);
		console.log("vector.x: " + vector.x);
	}
	this.display = function () {
		ellipse(this.x,this.y, 20, 20);
	}
}