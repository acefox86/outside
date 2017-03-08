//This is a random walk

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
	sphere1 = new Sphere(250, 250, 40, 40);
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
		var randomNum = random();
		
		var stepX = 10;
		var stepY = 10;
		if (randomNum < .25) {
			x += stepX;
		} else if (randomNum < .5) {
			y += stepY;
		} else if (randomNum < .75) {
			x -= stepX;
		} else {
			y -= stepY;
		}
		console.log(x);
	}

	this.display = function() {
		fill(35, 4, 16)
		ellipse(x, y, this.sWidth, this.sHeight);
	}
}


