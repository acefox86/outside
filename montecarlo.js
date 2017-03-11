
var x = 50;
var y = 50;

function setup() {
	createCanvas(600, 600);
	//stroke(200);
	fill(255, 204)
	background(100);
	frameRate(10);
	//noStroke();
	sphere1 = new Sphere(250, 250, 40, 40);
}

function draw() {
	
	ellipse(x, y, 60, 60);
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
		
		var randomNum1 = random(50,60);
		var randomNum2 = random(50,60);
		//var prob = (randomNum1 * randomNum1);
		console.log(randomNum1);
		console.log(randomNum2);
		//console.log(prob);
		var stepX = 1;
		var stepY = 1;
		var randomNum = random();

		if (randomNum2 < randomNum1) {
			stepX = randomNum1;
			stepY = randomNum1;
			console.log("aow!");
		}
		

		//var stepX = floor(randomGaussian(50, 1));
		//var stepY = floor(randomGaussian(10,10));
		
		//Nested if statements keep sphere on page
		if (randomNum < .25) {
			x += stepX;
			if (x > 500 || x < 0) {
				x -= stepX;
			}
		} else if (randomNum < .5) {
			y += stepY;
			if (y > 500 || y < 0) {
				y -= stepY;
			}
		} else if (randomNum < .75) {
			x -= stepX;
			if (x > 500 || x < 0) {
				x += stepX;
			}
		} else {
			y -= stepY;
			if (y > 500 || y < 0) {
				y += stepY;
			}
		}
		console.log(x);
	}

	this.display = function() {
		var color1 = randomGaussian(125, 50);
		var color2 = randomGaussian(200, 25);
		var color3 = randomGaussian(200, 10);
		fill(color1, color2, color3);
		ellipse(x, y, this.sWidth, this.sHeight);
	}
}


