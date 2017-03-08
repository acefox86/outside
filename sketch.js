var sphere1;
var x = 50;
var y = 50;

function setup() {
	createCanvas(500,500);
	//stroke(200);
	fill(255, 204)
	background(100);
	frameRate(10);
	//noStroke();
	sphere1 = new Sphere(50, 50, 40, 40);
	//sphere2 = new Sphere
}

function draw() {
	
	//ellipse(x, y, 60, 60);
	console.log("hello");
	//sphere1 = new Sphere(10, 10, 40, 40);
	sphere1.step();
	sphere1.display();
	
}

//function Sphere


function Sphere(x, y, w, h) {
	this.xLoc = x;
	this.yLoc = y;
	this.sWidth = w;
	this.sHeight = h;
	
	this.step = function() {
		var stepX = random(10);
		var stepY = random(10);
		if (x < 100) {
			x += stepX;
			y += stepY;
		} else {
			x -= stepX;
			y -= stepY;
		}
		console.log(x);
	}

	this.display = function() {
		fill(35, 4, 16)
		ellipse(x, y, this.sWidth, this.sHeight);
	}
}


