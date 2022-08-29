/*
The case of the Python Syndicate
Stage 3


Officer: 7857621
CaseNum: 301-2-13466862-7857621

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Rocky kray has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Rocky kray object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var pawelKarpinskiImg;
var countessHamiltonImg;
var bonesKarpinskiImg;
var rockyKrayImg;
var cecilKarpinskiImg;
var robbieKrayImg;

var rockyKrayObject;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	robbieKrayImg = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	rockyKrayObject = {
		x: 115,
		y: 309,
		image: rockyKrayImg
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(rockyKrayObject.image, rockyKrayObject.x, rockyKrayObject.y);
    image(pawelKarpinskiImg, rockyKrayObject.x, rockyKrayObject.y-269);
    image(countessHamiltonImg, rockyKrayObject.x+293, rockyKrayObject.y-269);
    image(bonesKarpinskiImg, rockyKrayObject.x+586, rockyKrayObject.y-269);
    image(cecilKarpinskiImg, rockyKrayObject.x+293, rockyKrayObject.y);
    image(robbieKrayImg, rockyKrayObject.x+586, rockyKrayObject.y);

	//image(pawelKarpinskiImg, 115, 40);
	//image(countessHamiltonImg, 408, 40);
	//image(bonesKarpinskiImg, 701, 40);
	//image(cecilKarpinskiImg, 408, 309);
	//image(robbieKrayImg, 701, 309);

}