/*
The case of the Python Syndicate
Stage 2


Officer: 7857621
CaseNum: 301-1-70085787-7857621

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Pawel karpinski

- The variables for Pawel karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Pawel karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var robbie_kray_image;
var rocky_kray_image;
var countess_hamilton_image;
var bones_karpinski_image;
var pawel_karpinski_image;
var anna_karpinski_image;


var pawel_karpinski_pos_x = 408;
var pawel_karpinski_pos_y = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbie_kray_image = loadImage("krayBrothers2.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawel_karpinski_image, pawel_karpinski_pos_x, pawel_karpinski_pos_y);
    image(robbie_kray_image, pawel_karpinski_pos_x - 293, pawel_karpinski_pos_y - 269);
    image(rocky_kray_image, pawel_karpinski_pos_x, pawel_karpinski_pos_y - 269);
    image(countess_hamilton_image, pawel_karpinski_pos_x + 293, pawel_karpinski_pos_y - 269);
    image(bones_karpinski_image, pawel_karpinski_pos_x - 293, pawel_karpinski_pos_y);
    image(anna_karpinski_image, pawel_karpinski_pos_x + 293, pawel_karpinski_pos_y);

	//image(robbie_kray_image, 115, 40);
	//image(rocky_kray_image, 408, 40);
	//image(countess_hamilton_image, 701, 40);
	//image(bones_karpinski_image, 115, 309);
	//image(anna_karpinski_image, 701, 309);

}