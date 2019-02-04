var rows = 10;
var cols = 10;
var fields = new Array(rows * cols)
var fieldSize = 100

function setup(){
  createCanvas(1000, 500);
  var n = 0;
  
  for(var i = 0; i < rows; i++){
    for(var j = 0; j < cols; j++){
      fields[n] = new Field(j*fieldSize, i*fieldSize, fieldSize, fieldSize, false, 2);
      n++;
    }
  }  
}

function draw(){
  clear();
  background(0);
  for(var i = 0; i < fields.length; i++){
    fields[i].step();
  }
  for(var i = 0; i < fields.length; i++){
    fields[i].draw();
  }
}

function mouseClicked(){
  setup();
}