var y = 10;

function setup() {
	createCanvas(500,500);
	stroke(200);
	frameRate(20);
}

function draw() {
	ellipse(10, 10, 10, y);
	/*background(100);
	y = y - 1;
	if (y < 0); {
		y = height;
	}
	line(0, y, width, y);*/
	y++;
}