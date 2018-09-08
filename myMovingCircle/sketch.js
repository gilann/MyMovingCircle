var circleX = 0;
var circleY = 0;
var sizeE = 5;
function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(0,0,200);
	ellipse(circleX, circleY, sizeE, sizeE);
	fill (200,0,255);
	sizeE = (sizeE+1)%120; 
	circleX= (circleX+5)%600;
	circleY = (circleY+5)%600;

}
