



console.log("hi");

var shape1 = new VectorObject(50, 30);
var shape2 = new VectorObject(10, 5);

function setup() {
	createCanvas(500, 500);
	frameRate(0);
}

function draw() {
	background(100, 200, 200);
	fill(50, 60, 70);
	ellipse(shape1.x, shape1.y, 50, 50);
	
	//var added = shape1.add(shape2);
	shape1 = shape1.add(shape2);
	//console.log(added.x);
	
	ellipse(shape1.x, shape1.y, 30, 30);

	if (shape1.x > width || shape1.x < 0) {
		shape2.x = (shape2.x * -1);
	}
	if (shape1.y > height || shape1.y < 0) {
		shape2.y = (shape2.y * -1);
	}
}

function VectorObject (x,y) {
	this.x = x;
	this.y = y;
}

VectorObject.prototype.add = function (VecObj) {
	
	var addedX = this.x + VecObj.x;
	var addedY = this.y + VecObj.y;


	return new VectorObject(addedX, addedY);
}

console.log(shape1.x);