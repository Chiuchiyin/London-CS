/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 7857621
CaseNum: 201-3-62624571-7857621

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    stroke(255, 0, 0);
    beginShape();
    vertex(525,534);
    vertex(521,557);
    vertex(504,574);
    vertex(491,566);
    vertex(494,527);
    vertex(470,460);
    vertex(414,437);
    vertex(410,401);
    vertex(398,382);
    vertex(403,367);
    vertex(400,353);
    vertex(417,336);
    vertex(427,306);
    vertex(447,306);
    vertex(464,286);
    vertex(470,257);
    vertex(440,248);
    vertex(424,254);
    vertex(412,239);
    vertex(418,227);
    vertex(500,241);
    vertex(500,295);
    vertex(541,297);
    vertex(565,292);
    vertex(647,255);
    vertex(680,250);
    vertex(690,270);
    vertex(751,261);
    vertex(785,290);
    vertex(709,302);
    vertex(709,310);
    vertex(761,301);
    vertex(802,352);
    vertex(770,355);
    vertex(734,334);
    vertex(728,335);
    vertex(758,365);
    vertex(720,385);
    vertex(602,397);
    vertex(547,401);
    vertex(524,399);
    vertex(495,412);
    vertex(503,461);
    vertex(517,477);
    endShape(CLOSE);

}
