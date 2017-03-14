//var x;
//var y;
var location;
var velocity;

function setup() {
	createCanvas(600, 600);
	background(100);
	frameRate(10);
	location = new PVector(100,100);
	velocity = new PVector(10,10);
	console.log("hi");
}

function draw() {
	//location = new PVector(100,100);
	//velocity = new PVector(50,50);

	//console.log("hey");
	location.add(velocity);
	//location.x++;
	console.log(location.x);
	location.display();
	//ellipse(location.x, location.y, 50,50);
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