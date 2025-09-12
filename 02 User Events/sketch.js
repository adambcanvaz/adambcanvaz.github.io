// User Events + Day 1 Challenge
// Adam Besbes
// September 11, 2025

// GLOBAL VARIABLES HERE...
// can only work with "simple" data in this
// section of code. No system variables are
// available until in setup(), ... after canvas is made

let circleColor = false;
let currentColor = "white";
let x; let y = 300;
let tSize = 50; // for text-font size
// declaration    initializatiom

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  x = width / 2;
}

function draw() {
  background(220);
  challenge(); // coordinate system challenge (circles)
  movement();
  rect(x, y, 60, 30);
  mouseReport();
}

function mouseReport() {
  // inspect some of the built-ins (system variables)
  // for working with the mouse

  fill(0);
  stroke(0, 200, 45);
  let src = mouseX + ", " + mouseY + ", " + mouseIsPressed + ", " + mouseButton;
  textSize(tSize);
  text(src, mouseX, mouseY);
}

function mousePressed(){
  // function automatically called ONE per mouse click
  // interaction
  tSize = random(10, 80);
}

function movement() {
  // check the keyboard presses each frame
  // and move the rectangle accordingly

  /*if(keyCode === RIGHT_ARROW && keyIsPressed){
    x+=5;
  }
  else if(keyCode === LEFT_ARROW && keyIsPressed){
    x-=5;
  }*/

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }
}


// ------------------------------------------------------

function keyPressed() {
  // this is special EVENT function, gets
  // automatically called anytime a keyboard
  // button is pressed.

  print("Key was pressed");
  if (key === "g") {
    currentColor = "green";
  }
  else if (keyCode === SHIFT) {
    currentColor = "aqua";
  }
  else if (key === "w") {
    currentColor = "white";
  }
  circleColor = !circleColor;

  // how to tell WHICH KEY was pressed???
}

function challenge() {
  // draw 5 hollow circles, in 4 corners and
  // center position, 50px in diameter each
  noFill();
  if (circleColor) { // circleColor === true
    fill(currentColor);
  }
  // personal add ons
  stroke(16, 33, 148);
  strokeWeight(5);

  // 5 circles
  circle(200, 200, 50);
  circle(400, 400, 50);
  circle(0, 0, 50);
  circle(400, 0, 50);
  circle(0, 400, 50);
}