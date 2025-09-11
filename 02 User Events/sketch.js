// User Events + Day 1 Challenge
// Adam Besbes
// September 11, 2025

// GLOBAL VARIABLES HERE
let circleColor = false;
// declaration    initializatiom

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  challenge(); // coordinate system challenge
}

function keyPressed(){
  // this is special EVENT function, gets
  // automatically called anytime a keyboard
  // button is pressed.
  print("Key was pressed");
  circleColor = !circleColor;

  // how to tell WHICH KEY was pressed???
}

function challenge() {
  // draw 5 hollow circles, in 4 corners and
  // center position, 50px in diameter each
  noFill();
  if(circleColor){ // circleColor === true
    fill(255,0,0);
  }
  stroke(16, 33, 148);
  strokeWeight(10);  

  // 5 circles
  circle(200,200,50);
  circle(400,400,50);
  circle(0,0,50);
  circle(400,0,50);
  circle(0 ,400,50);
}