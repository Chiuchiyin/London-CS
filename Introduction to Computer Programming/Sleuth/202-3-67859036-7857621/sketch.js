/*

Officer: 7857621
CaseNum: 202-3-67859036-7857621

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce pink filled text with green outline in RonsFont font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(623,460);
	textSize(29);
}

function draw()
{
	background(255);

	fill(255,165,0);
	stroke(0,255,0);
	textFont(Melissa);
	//text("I", 192,184);
	fill(255,192,203);
	stroke(0,0,255);
	textFont(Ballpointprint);
	//text("and", 104,249);
	//text("ney", 234,87);
	textFont(Diggity);
	//text("?", 466,151);
	textFont(RonsFont);
	//text("ed", 91,151);
	fill(255,165,0);
	stroke(255,0,255);
	textFont(Diggity);
	//text("For", 7,307);
	fill(255,192,203);
	stroke(0,255,0);
	textFont(Ballpointprint);
	//text("yours,", 93,307);
	fill(255,165,0);
	stroke(0,0,255);
	textFont(Diggity);
	//text("ever", 38,307);
	fill(255,255,0);
	textFont(Melissa);
	//text("more", 145,184);
	stroke(255,0,0);
	textFont(RonsFont);
	//text("The", 334,184);
	//text("avoiding", 338,151);
	fill(255,192,203);
	stroke(255,0,255);
	//text("s", 386,120);
	fill(255,165,0);
	textFont(Ballpointprint);
	//text("of", 170,87);
	//text("are", 443,120);
	stroke(0,0,0);
	//text("mo", 210,87);
	//text("no", 22,120);
	stroke(0,255,0);
	textFont(Diggity);
	//text("you", 65,87);
	fill(0,255,255);
	stroke(0,0,255);
	//text("sort", 155,249);
	fill(255,165,0);
	stroke(0,0,0);
	//text("break", 38,249);
	fill(0,255,255);
	textFont(Ballpointprint);
	//text("darling", 48,29);
	fill(255,192,203);
	stroke(0,255,0);
	textFont(Melissa);
	//text("nce.", 541,184);
	fill(0,255,255);
	stroke(0,0,0);
	textFont(RonsFont);
	//text("so", 492,120);
	textFont(Melissa);
	//text("re", 162,120);
	fill(255,255,0);
	//text("igno", 133,120);
	fill(255,165,0);
	//text("sure", 8,184);
	push();
	fill(255,192,203);
	stroke(0,255,0);
	textFont(RonsFont);
	text("I", 372,87);
	text("safe", 206,220);
	pop();
	stroke(255,0,0);
	textFont(Diggity);
	//text("can", 207,184);
	fill(255,192,203);
	stroke(0,0,0);
	textFont(Ballpointprint);
	//text("Are", 10,87);
	fill(255,255,0);
	stroke(255,0,0);
	//text("Perhaps", 286,220);
	stroke(0,255,0);
	textFont(RonsFont);
	//text("all", 258,249);
	textFont(Ballpointprint);
	//text("mes.", 192,151);
	textFont(Diggity);
	//text("we", 381,220);
	stroke(255,0,0);
	textFont(Melissa);
	//text("away", 512,220);
	stroke(0,0,255);
	textFont(RonsFont);
	//text("Bob,", 132,29);
	fill(255,165,0);
	stroke(255,0,255);
	textFont(Diggity);
	//text("can", 559,87);
	//text("much", 87,184);
	//text("?", 264,220);
	fill(255,192,203);
	stroke(0,0,0);
	textFont(RonsFont);
	//text("If", 303,87);
	fill(255,255,0);
	stroke(0,255,0);
	textFont(Melissa);
	//text("si", 516,184);
	//text("send", 447,87);
	//text("go", 487,220);
	stroke(255,0,255);
	textFont(Diggity);
	//text("I", 545,87);
	push();
	fill(255,192,203);
	textFont(Ballpointprint);
	//text("these", 186,120);
	//text("someti", 130,151);
	pop();
	stroke(0,0,255);
	textFont(Ballpointprint);
	//text("this", 207,249);
	//text("I'm", 488,151);
	fill(255,192,203);
	stroke(0,255,0);
	textFont(Diggity);
	//text("a", 15,249);
	//text("cash.", 490,87);
	push();
	stroke(255,0,255);
	textFont(RonsFont);
	//text("for", 562,220);
	pop();
	textFont(RonsFont);
	text("can", 397,87);
	text("guard", 15,151);
	text("you", 288,151);
	text("the", 470,184);
	text("delay", 332,120);
	text("take", 249,184);
	fill(0,255,255);
	textFont(Melissa);
	//text("?", 287,87);
	//text("isy", 36,365);
	fill(255,165,0);
	textFont(Ballpointprint);
	//text("our", 19,220);
	//text("secrets,", 378,184);
	push();
	fill(255,192,203);
	stroke(255,0,0);
	textFont(Melissa);
	//text("so,", 341,87);
	pop();
	stroke(255,0,255);
	textFont(Melissa);
	//text("me", 436,151);
	push();
	textFont(Diggity);
	//text("short", 108,87);
	pop();
	stroke(0,0,255);
	//text("how", 49,184);
	//text("ual", 306,120);
	//text("out.", 292,249);
	push();
	fill(0,255,255);
	stroke(0,0,0);
	textFont(Ballpointprint);
	//text("onger", 62,120);
	pop();
	stroke(255,0,0);
	//text("le", 529,184);
	push();
	textFont(Ballpointprint);
	//text("l", 57,120);
	pop();
	//text("My", 16,29);
	//text("not", 554,151);
	fill(0,255,255);
	stroke(255,0,255);
	//text("Da", 16,365);
	//text("Are", 252,151);
	//text("You", 408,120);
	stroke(255,0,0);
	//text("Is", 577,184);
	textFont(RonsFont);
	//text("x", 65,365);
	stroke(255,0,255);
	textFont(Melissa);
	//text("contin", 260,120);
	textFont(RonsFont);
	//text("relationship", 61,220);
	//text("?", 314,184);
	stroke(0,0,0);
	textFont(Diggity);
	//text("should", 421,220);



}
