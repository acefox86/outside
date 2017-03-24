
console.log("hi");

var locAtion = new VectorObject(50, 30);
var veloCity = new VectorObject(10, 10);
var accelEration = new VectorObject(-0.005, 0.01);

var locAtion2 = new VectorObject(20, 20);
var veloCity2 = new VectorObject(50,1);
var accelEration2// = new VectorObject(Math.random(), Math.random())
var topSpeed;

function setup() {
	createCanvas(500, 500);
	frameRate(20);
}

function draw() {
	background(100, 200, 200);
	fill(50, 60, 70);
	
	accelEration2 = new VectorObject(-Math.random(), Math.random());
	ellipse(locAtion2.x, locAtion2.y, 30, 30);
	veloCity2 = veloCity2.add(accelEration2);
	locAtion2 = locAtion2.add(veloCity2);

	fill(90, 30, 50);
	
	ellipse(locAtion.x, locAtion.y, 50, 50);
	veloCity = veloCity.add(accelEration);
    locAtion = locAtion.add(veloCity);

	console.log("accelEration.x: " + accelEration.x);
	console.log("accelEration.y: " + accelEration.y);
	console.log("veloCity.x: " + veloCity.x);
	console.log("veloCity.y: " + veloCity.y);
	
	console.log("accelEration2.x: " + accelEration2.x);
	console.log("accelEration2.y: " + accelEration2.y);
	console.log("locAtion2.x: " + locAtion2.x);
	console.log("locAtion2.y: " + locAtion2.y);

	if (locAtion2.x > width || locAtion2.x < 0) {
		veloCity2.x = (veloCity2.x * -1);
	}
	if (locAtion2.y > height || locAtion2.y < 0) {
		veloCity2.y = (veloCity2.y * -1);
	}

	if (locAtion.x > width || locAtion.x < 0) {
		veloCity.x = (veloCity.x * -1);
	}
	if (locAtion.y > height || locAtion.y < 0) {
		veloCity.y = (veloCity.y * -1);
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

VectorObject.prototype.limit = function () {
  //if()
}