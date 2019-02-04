var x = 50;
var state = true;

function setup(){
  createCanvas(1000, 500);
}

function draw(){
    clear();
    ellipse(x, 50, 80, 80);
    if(state) x++;
    else x --;
    if(x > 500) state = false;
    else if(x < 10) state = true;
}