//This is a random walk

var sphere1;
var x = 50;
var y = 50;

function setup() {
	createCanvas(500,500);
	//stroke(200);
	fill(255, 204)
	//background(100);
	frameRate(10);
	//noStroke();
	sphere1 = new Sphere(250, 250, 40, 40);
	//sphere2 = new Sphere
}

function draw() {
	//clear();
	//ellipse(x, y, 60, 60);
	console.log("hello");
	//sphere1 = new Sphere(10, 10, 40, 40);
	background(100);
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
		
		var stepX = 3;
		var stepY = 3;
		
		//Sphere tends to the right
		if (randomNum < .4) {
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
		fill(255, 0, 0)
		ellipse(x, y, this.sWidth, this.sHeight);
	}
}


