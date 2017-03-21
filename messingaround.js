
console.log("hi");

var shape1 = new VectorObject(50, 30);
var shape2 = new VectorObject(60, 70);

function setup() {
	createCanvas(400, 400);
}

function draw() {
	
	ellipse(shape1.x, shape1.y, 50, 50);
	ellipse(shape2.x, shape2.y, 50, 50);
	var added = shape1.add(shape2);
	console.log(added.x);
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