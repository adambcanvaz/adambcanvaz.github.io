// Coordinate Systems and User Events
// Adam Besbes
// September 10, 2025
// A first look at interactive programs with p5.js


function setup() { //runs ONCE at the start
  createCanvas(400, 400);
  print(windowWidth, windowHeight, width, height);
  // windowwidthL current browser width
  // width: canvas width
}

function draw() { //runs over and over
  //targeting 60 frames per second (fps)
  // STRIVE to keep draw() clean and tidy
  background(220);  // draws a big solid rectangle
  // 0 - black    255 - white
  drawTwoCircles();
}

function drawTwoCircles() { //[ALT][SHIFT][F] -> Autoformat
  // draws two circles, one at a fixed location
  // and one at the mouse location.

  // Draw order:
  // Later a thing is "drawn" (further down in draw())
  // The higher it is in the draw stack

  fill(0, 255, 0); // colors are a bit like picking up a marker, 
                   // or flling a paintbrush with paint...
     //R,  G,  B
  circle(mouseX, mouseY, 30);
  fill(255, 50, 255)
  circle(width / 2, height / 2, 100)
}