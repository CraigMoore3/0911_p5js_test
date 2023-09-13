// A p5js take on Mondrian's Upside-Down Picture as hung in the MoMA
// https://www.theguardian.com/artanddesign/2022/oct/28/mondrian-painting-has-been-hanging-upside-down-for-75-years

let canvasWidth = 900;
let canvasHeight = 900;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noStroke();
}

function draw() {
  background(255,250,245);
  
  fill(0);
  rect(0, 0, 10, 900);
  rect(0, 700, 900, 10);
  rect(700, 250, 10, 650);
  rect(700, 250, 200, 10);
  rect(700, 325, 200, 10);
  rect(250, 0, 10, 700);
  rect(500, 325, 10, 375);
  rect(500, 325, 200, 10);
  rect(500, 425, 400, 10);

  rect(350, 485, 210, 10);
  rect(350,485,10,220);

  rect(560, 425, 10, 70);
  rect(650, 325, 10, 100);
  rect(650, 375, 50, 10);

  rect(200, 0, 10, 300);
  rect(200, 40, 50, 10);
  rect(0,290,250,10);
  rect(0,180,250,10);
  rect(640, 640, 10, 60);
  rect(500, 640, 400, 10);

  rect(360, 640, 50, 10);
  rect(410, 490, 10, 220);

  // Red
  fill(255,0,0);
  rect(710, 710, 190, 190);
  rect(660, 335, 40, 40,);
  rect(10,190,240,100);
  rect(360, 650, 50, 50);

  // Blue
  fill(0,0,255);
  rect(510, 335, 140, 90);
  rect(10, 300, 240, 400);
  rect(650, 650, 50, 50);
  rect(710, 435, 200, 205);
  
  // Yellow
  fill(255,255,0);
  rect(710, 260, 190, 65);
  rect(210, 0, 40, 40);
  rect(510, 435, 50, 50);
  rect(510, 650, 130, 50);
}
