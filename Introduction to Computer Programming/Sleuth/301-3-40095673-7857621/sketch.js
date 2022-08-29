/*
The case of the Python Syndicate
Stage 4

Officer: 7857621
CaseNum: 301-3-40095673-7857621

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var bonesKarpinskiImg;
var countessHamiltonImg;
var annaKarpinskiImg;
var cecilKarpinskiImg;
var pawelKarpinskiImg;
var linaLovelaceImg;

var annaKarpinskiObj;


//declare your new objects below
var bonesKarpinskiObj;
var countessHamiltonObj;
var cecilKarpinskiObj;
var pawelKarpinskiObj;
var linaLovelaceObj;

var bonesKarpinskiXCoord = 115;
var bonesKarpinskiYCoord = 40;
var countessHamiltonXCoord = 408;
var countessHamiltonYCoord = 40;
var cecilKarpinskiXCoord = 115;
var cecilKarpinskiYCoord = 309;
var pawelKarpinskiXCoord = 408;
var pawelKarpinskiYCoord = 309;
var linaLovelaceXCoord = 701;
var linaLovelaceYCoord = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	linaLovelaceImg = loadImage("lina.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	annaKarpinskiObj = {
		x: 701,
		y: 40,
		image: annaKarpinskiImg
	};



	//define your new objects below
    createCanvas(photoBoard.width, photoBoard.height);
	bonesKarpinskiObj = {
		x: 115,
		y: 40,
		image: bonesKarpinskiImg
	};
    createCanvas(photoBoard.width, photoBoard.height);
	countessHamiltonObj = {
		x: 408,
		y: 40,
		image: countessHamiltonImg
	};
    createCanvas(photoBoard.width, photoBoard.height);
	cecilKarpinskiObj = {
		x: 115,
		y: 309,
		image: cecilKarpinskiImg
	};
    createCanvas(photoBoard.width, photoBoard.height);
	pawelKarpinskiObj = {
		x: 408,
		y: 309,
		image: pawelKarpinskiImg
	};
    createCanvas(photoBoard.width, photoBoard.height);
	linaLovelaceObj = {
		x: 701,
		y: 309,
		image: linaLovelaceImg
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiObj.image, bonesKarpinskiObj.x, bonesKarpinskiObj.y);
	image(countessHamiltonObj.image, countessHamiltonObj.x, countessHamiltonObj.y);
	image(annaKarpinskiObj.image, annaKarpinskiObj.x, annaKarpinskiObj.y);
	image(cecilKarpinskiObj.image, cecilKarpinskiObj.x, cecilKarpinskiObj.y);
	image(pawelKarpinskiObj.image, pawelKarpinskiObj.x, pawelKarpinskiObj.y);
	image(linaLovelaceObj.image, linaLovelaceObj.x, linaLovelaceObj.y);


}