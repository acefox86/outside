



var xoff = 50.0;
var yoff = 50.0
var colorX = 50.0;
var colorY = 50.0;
var oCounter = 0;
var oPlural = 0;

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
	console.log(width);
	yoff = yoff + .02;
	console.log("yoff: " + yoff);
	var o = noise(yoff) * height;
	oCounter++;
	oPlural += o;
	console.log("o: " + o);
	console.log("oCounter" + oCounter);
	console.log("average: " + (oPlural/oCounter));
	colorX = colorX + .2;
	var clr = noise(colorX) * 255;
	colorY = colorY + .1;
	var clrY = noise(colorY) * 255;
	fill(clr, 200, clrY);
	ellipse(n, o, 60, 60);
	console.log("hello");
	//sphere1 = new Sphere(10, 10, 40, 40);

}