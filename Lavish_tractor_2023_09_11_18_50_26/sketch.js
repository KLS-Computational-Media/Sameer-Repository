function setup() {
  createCanvas(400, 400);
}

function draw() {
  var c = mouseX + 3;
  var d;
  if (!mouseIsPressed) {
    d = mouseY * 2;
  } else {
    d = 255 - mouseY;
  }
  stroke(c, 255 - c, 255 - d);
  background(c, d, mouseY - mouseX);
  fill(130, d, c);
  strokeWeight(1);
  rect(1, 1, 20, 20);
  fill(150, c, d);
  rect(1, 379, 20, 20);
  fill(c, 0, d);
  rect(379, 379, 20, 20);
  fill(d, 100, c);
  rect(379, 1, 20, 20);
  fill(d, c, d);
  strokeWeight(30);
  rect(150, 150, 100, 100, 20);
}
