console.log("hello from reading from js");

function setup(){
    var myCanvas=createCanvas(800,250);
    //link to id mySketch from header tag
    myCanvas.parent('mySketch');
}

var d=20;

function draw(){
fill(100,0,0);
rect(50,50,100,100);
}

function draw(){
    if (mouseIsPressed){
        fill(0);
        if (d<50){
            d++;
        }
    } else {
        fill(255);
    }
ellipse(mouseX, mouseY, d,d);
}