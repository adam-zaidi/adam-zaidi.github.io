var blockImg;
var block1;
var block2;
let clack;
let clack_sound;

let count = 0;
let digits = 7;
let countDiv;
let timeSteps = 10 ** (digits - 1);
let m2 = Math.pow(100, digits - 1);

function preload() {
  clack = loadSound("data/clack.wav");
}

function setup() {
  createCanvas(windowWidth, 300);
  block1 = new Block(100, 100, 1, 0, 0);
  block2 = new Block(500, 200, m2, -0.5 / timeSteps, 20);
  countDiv = createDiv(count);
  countDiv.style('font-size', '50pt');
  slider = createSlider(1,8,1);
  blockImg = loadImage("hellointernet.png");

	clack_sound = false;
}

function draw() {
	digits = slider.value();
  background(200);
	m2 = Math.pow(100, digits - 1);
  block2.m = m2;
	clack_sound = false;

  for (let i = 0; i < timeSteps; i++) {
    if (block1.collide(block2)) {
      const v1 = block1.bounce(block2);
      const v2 = block2.bounce(block1);
      block1.v = v1;
      block2.v = v2;
      clack_sound = true;
      count++;
    }

    if (block1.hitWall()) {
      block1.reverse();
      clack_sound = true;
      count++;
    }

    block1.update();
    block2.update();
  }

  if (clack_sound) {
    clack.play();
  }
  block1.show();
  block2.show();

  countDiv.html(nf(count, digits));
}