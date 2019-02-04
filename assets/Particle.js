class Particle{
  /*
  float x, y, speed, xDir, yDir, xMax, yMax;
  var numNodes;
  double distances[];
  Particle neighbors[];
  Particle nodes[];
  */

  constructor (xMax, yMax, maxSpeed, speedScale, numNeighbors, sameDir, numNodes, nodes){
    this.x = random(xMax);
    this.y = random(yMax);
    this.xMax = xMax;
    this.yMax = yMax;
    this.numNodes = numNodes;
    this.nodes = nodes;
    this.speed = random(maxSpeed) / speedScale;
    this.xDir = random(2) - 1;
    this.yDir = random(2) - 1;
    if(sameDir){
      xDir = Math.abs(xDir);
      yDir = Math.abs(yDir);
    }
    this.distances = new Array(numNeighbors);
    this.neighbors = new Array(numNeighbors);
    for(var i = 0; i < numNeighbors; i++){
      this.distances[i] = 0;
    }
    return this;
  }
  
  applyMovement(){ 
    var x = this.x;
    var y = this.y;
    var speed = this.speed;
    var xDir = this.xDir;
    var yDir = this.yDir;
    var xMax = this.xMax;
    var yMax = this.yMax;

    x = (x + (speed * xDir));
    y = (y + (speed * yDir));
    if(x < 0){
      x = 0;
      xDir = -xDir;
    }
    if(y < 0){
      y = 0;
      yDir = -yDir;
    }
    if(x >xMax){
      x = xMax;
      xDir = -xDir;
    }
    if(y > yMax){
      y = yMax;
      yDir = -yDir;
    }
  }
  
  getNeighbors(){
    var currDist = new Array(this.neighbors.length);
    var tmp;
    var nodes = this.nodes;
    var x = this.x;
    var y = this.y;
    var neighbors = this.neighbors
    for(var i = 0; i < this.neighbors.length; i++){
      currDist[i] = 9999999;
    }
    for(var i = 0; i < this.neighbors.length; i++){
      this.neighbors[i] = null;
    }
    
    for(var i = 0; i < this.numNodes; i++){
      if(nodes[i] != this){
        tmp = Math.sqrt(Math.pow((x - nodes[i].x), 2) + Math.pow((y - nodes[i].y), 2));

        if(nodes[i].x <= x && nodes[i].y <= y && tmp < currDist[0]){
          currDist[0] = tmp;
          neighbors[0] = nodes[i];
        }
        else if(nodes[i].x >= x && nodes[i].y <= y && tmp < currDist[1]){
          currDist[1] = tmp;
          neighbors[1] = nodes[i];
        }
        else if(nodes[i].x >= x && nodes[i].y >= y && tmp < currDist[2]){
          currDist[2] = tmp;
          neighbors[2] = nodes[i];
        }
        else if(nodes[i].x <= x && nodes[i].y >= y && tmp < currDist[3]){
          currDist[3] = tmp;
          neighbors[3] = nodes[i];
        }
      }
    }
    for(var i = 0; i < neighbors.length; i++){
      if(neighbors[i] == null){
         var t = new Particle();
        switch(i){
          case 0:
            neighbors[i] = t;
            t.x = 0;
            t.y = 0;
            break;
          case 1:
            neighbors[i] = t;
            t.x = xMax;
            t.y = 0;
            break;
          case 2:
            neighbors[i] = t;
            t.x = xMax;
            t.y = yMax;
            break;
          case 3:
            neighbors[i] = t;
            t.x = 0;
            t.y = yMax;
            break;
        }
      }
    }
  }
  
  maxArrayVal(arr){
    var val = arr[0];
    for(var i = 1; i < arr.length; i++){
      if(arr[i] > val) val = arr[i];
    }
    return val;
  }
}
