console.log("reading from js");

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
}

function draw() {
    //draw background
    background(10);
    for (var i = 0; i < 800; i += 25) {
        for (var j = 0; j < 250; j += 25) {
            noStroke();
        }
    }
    drawCat();
    eyesMove();
    drawLaser();
} 

function drawCat() {
    noStroke();
    ellipseMode(CENTER);

//draw head 
  noStroke();
  fill(75);
  ellipse(250, 175, 240, 190);
  triangle(132, 65, 136, 170, 331, 155);
  triangle(366, 65, 357, 170, 186, 143);
  
//nose
  noStroke();
  fill(100);
  triangle(235, 190, 265, 190, 250, 215);
    
//mouth
  stroke(100);
  strokeWeight(2);
  line (250, 200, 250, 225);
  line (235, 225, 265, 225);
  
//left&right paw
  stroke(50);
  strokeWeight(2);
  ellipse(175, 235, 80, 50);
  ellipse(325, 235, 80, 50);

//left&right paw lines
  line (160, 235, 160, 280);
  line (175, 235, 175, 280);
  line (190, 235, 190, 280);
 
  line (310, 235, 310, 280);
  line (325, 235, 325, 280);
  line (340, 235, 340, 280);

//eyes
  fill(255);
  ellipse(305, 150, 70, 70);
  ellipse(195, 150, 70, 70);
}

function eyesMove() {
    //move eyes based on which quadrant the mouse is in
    //left quadrant
    if (mouseX < 275 && mouseY < 200 ) {
        fill(153);
        ellipse(300, 145, 40, 40);
        ellipse(180, 145, 40, 40);
    }
    if (mouseX < 275 && mouseY < 400 && mouseY > 200) {
        fill(153);
        ellipse(300, 150, 40, 40);
        ellipse(180, 150, 40, 40);
    }
    if (mouseX < 275 && mouseY > 400) {
        fill(153);
        ellipse(300, 155, 40, 40);
        ellipse(180, 155, 40, 40);
    }
    //top quadrant
    if (mouseX > 275 && mouseX < 525 && mouseY < 125) {
        fill(153);
        ellipse(310, 140, 40, 40);
        ellipse(190, 140, 40, 40);
    }
    if (mouseX > 275 && mouseX < 525 && mouseY > 125) {
        fill(153);
        ellipse(310, 160, 40, 40);
        ellipse(190, 160, 40, 40);
    }
    //right quadrant
    if (mouseX > 275 && mouseY < 200) {
        fill(153);
        ellipse(320, 145, 40, 40);
        ellipse(200, 145, 40, 40);
    }
    if (mouseX > 275 && mouseY > 200 && mouseY < 400) {
        fill(153);
        ellipse(320, 150, 40, 40);
        ellipse(200, 150, 40, 40);
    }
    if (mouseX > 275 && mouseY > 400) {
        fill(153);
        ellipse(320, 155, 40, 40);
        ellipse(200, 155, 40, 40);
    }
}

function drawLaser() {
    noStroke();
    fill("#C60209");
    ellipse(mouseX, mouseY, 10, 10);
}