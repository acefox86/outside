var xoff = 50.0;
var yoff = 50.0
var colorX = 50.0;


function setup() {
	createCanvas(600, 600);
	//stroke(200);
	fill(255, 204)
	background(100);
	frameRate(10);
	//noStroke();
}

function draw() {
	//background(100);
	xoff = xoff + .01;
	var n = noise(xoff) * width;
	yoff = yoff + .02;
	var o = noise(yoff) * height;
	colorX = colorX + .2;
	var clr = noise(colorX) * 255;
	fill(clr);
	ellipse(n, o, 60, 60);
	console.log("hello");
	//sphere1 = new Sphere(10, 10, 40, 40);

}