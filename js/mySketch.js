// p5 file

console.log("this is mysketch.js comment");

var Eye e1, e2; 

function setup() {
  createCanvas(800, 250);
  smooth();
  noStroke();
  e1 = new Eye(200, 145, 75);
  e2 = new Eye(300, 145, 75);  
}

function draw() {
  background(10);

//face
  noStroke();
  fill(75);
  ellipse(250, 175, 240, 190);
  triangle(132, 65, 136, 170, 331, 155);
  triangle(366, 65, 357, 170, 186, 143);
  fill(240);
  
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
  e1.update(touchX, touchY);
  e2.update(touchX, touchY);

  e1.display();
  e2.display();
}

class Eye {
  var ex, ey;
  var createCanvas;
  var angle = 0.0;

  Eye(var x, var y, var s) {
    ex = x;
    ey = y;
    createCanvas = s;
  }

  function update(var mx, var my) {
    angle = atan2(my-ey, mx-ex);
  }

  function display() {
    push();
    translate(ex, ey);
    fill(255);
    ellipse(0, 0, createCanvas, createCanvas);
    rotate(angle);
    fill(153);
    ellipse(createCanvas/4, 0, createCanvas/2, createCanvas/2);
    pop();
  }
}