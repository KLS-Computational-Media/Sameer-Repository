function setup() {
  createCanvas(400, 400);
  var i=0;
  confetti = [];
  for (let i = 0; i < 100; i++) {
    confetti[i] = new Confetti(random(0,width), random(-height, 0),   random(3,5));
  }
}
function draw() {
  background(100,200,200);
  stroke(55,200,55);
  strokeWeight(30)
  line(0,315,400,315);
  noStroke();  
  fill(150,75,0);
  rect(0,330,400,70);
  fill(255,235,0);
  arc(300,300,100,100,PI,0);
  rect(50,200,15,100);
  rect(70,200,15,100);
  rect(110,200,15,100);
  rect(130,200,15,100);
  rect(50,200,90,20);
  rect(190,150,50,20);
  rect(200,135,10,20);
  fill(0);
  ellipse(205,155,5);
  fill(250,100,200);
  triangle(210,150,220,130,230,150);
  fill(10,160,200);
  quad(212,146,215,140,225,140,228,146)
  translate(width / 2, height / 2);
  fill(255,235,0);
  rotate(45);
  rect(-47,-20,20,100);
  rotate(-45);
  translate(-width / 2, -height / 2);
  if (mouseButton){
    for(j=0;j<confetti.length;j++){
      confetti[j].makeConfetti();
    }
  }
}
class Confetti{
  constructor(xx,yy,zz){
    this.x = xx;
    this.y = yy;
    this.speed = zz;
    this.r = random(0,255);
    this.g = random(0,255);
    this.b = random(0,255);
    this.spin = random(0,100);
  }
  makeConfetti(){
    fill(this.r,this.g,this.b);
    push();
    rectMode(CENTER);
    rect(this.x,this.y,10,5);
    pop();
    this.y+=this.speed;
    this.spin+=0.1;
  }
}