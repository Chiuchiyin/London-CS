/*
201 - The case of Judge Hopper
Stage 2 - Hopper’s House

Officer: 7857621
CaseNum: 201-1-32072646-7857621

On entering the house you’re immediately confronted by a trail of blood spatters leading up to the master bedroom. It’s clear that Judge Hopper was abducted from here. What’s more, the clues splayed across the bed sheets indicate a private life a little more exciting than a district judge would admit in public. Somehow these clues connect, you just need to join them together.

Use the triangle function to join the blood spatters on the clues and make the connection.

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

    // write the code to connect the blood splatter below
    triangle(405, 216, 601, 448, 984, 341)

}
