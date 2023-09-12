// A p5js take on Mondrian's Upside-Down Picture as hung in the MoMA
// https://www.theguardian.com/artanddesign/2022/oct/28/mondrian-painting-has-been-hanging-upside-down-for-75-years

let canvasWidth = 900;
let canvasHeight = 900;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  // noStroke();
}

function draw() {
  background(255,250,245);
  fill(255, 0, 0);

  // Vertical Rectangles
  rect(0, 0, 18, 900);
  rect(30, 0, 20, 900);
  rect(90, 0, 20, 900);
  rect(310, 0, 20, 900);
  rect(365, 0, 20, 900);
  rect(500, 0, 20, 900);
  rect(560, 0, 20, 900);
  rect(760, 0, 20, 900);
  rect(835, 0, 20, 900);
  rect(870, 0, 20, 900);

  // Horizontal Rectangles
  fill(255, 255, 0);
  rect(0, 10, 900, 20);
  rect(0, 40, 900, 20);
  rect(0, 150, 900, 20);
  rect(0, 285, 900, 20);
  rect(0, 320, 900, 20);
  rect(0, 390, 900, 20);
  rect(0, 540, 900, 20);
  rect(0, 575, 900, 20);
  rect(0, 720, 900, 20);
  rect(0, 790, 900, 20);
  rect(0, 820, 900, 20);
  rect(0, 845, 900, 20);
  rect(0, 870, 900, 20);
  rect(0, 893, 900, 20);
}
