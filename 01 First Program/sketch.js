// Project Title
// Adam Besbes
// Date
// Interactive Programs
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() { //runs ONCE at the start
  createCanvas(windowWidth, windowHeight);
}

function draw() { //runs over and over
                  //targeting 60 frames per second (fps)
  //background(220);
  fill(255,mouseX,0);
  circle(mouseX, mouseY, 30);
}
