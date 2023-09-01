function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //loop to create more lines
  for(var i =0; i<=20; i++){
    //increases with each loop iteration
    var lineUp = 0 + (i * 20);
    //decreases with each loop iteration
    var lineDown = 400 - (i * 20);
    //upper right lines
    line(lineDown, 0, 400,lineDown);
    //lower left lines
    line(lineDown, 400, 0,lineDown);
    //upper left lines
    line(lineUp,0,0,lineDown);
    //lower right lines
    line(400,lineUp,lineDown,400);
    //left to right lines
    line(0,lineUp,400,lineDown);
    //up to down lines
    line(lineUp,0,lineDown,400);
  }
}