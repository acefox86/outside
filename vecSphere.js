

/*Below is the first  attempt which giving me so much trouble*/


var location = new PVector(50,50);
//var bg = 100;
var velocity = new PVector(10,10);

function setup() {
	createCanvas(600, 600);
	//background(bg);
	frameRate(10);
	//location = createVector(100,100);
	//velocity = createVector (5,5);
	//location = new PVector(50, 50);
	//velocity = new PVector(10,10);

	console.log("hi");
}

function draw() {
	//var location = new PVector (10, 69);
	//var location = new PVector (30, 56);
	fill(200);
	ellipse(50,50,50,50);
	background(100);
	/*
	//location.add(velocity);
	//location.display();
	if (location.x > width || location.x < 0) {
		velocity.x = (velocity.x * -1);
	}
	if (location.y > height || location.y < 0) {
		velocity.y = (velocity.y * -1);
	}*/
	background(144);
}


function PVector(x, y) {
	this.x = x;
	this.y = y;
}	
	/*this.add = function (PVector) {
		xVec = xVec + PVector.x;
		yVec = yVec + PVector.y;
		console.log("in add");
		console.log("this.x: " + this.x);
		console.log("this.y: " + this.y);
		console.log("vector.x: " + PVector.x);
	}
	
	this.display = function () {
		ellipse(this.xVec,this.yVec, 20, 20);
	}
}


*/