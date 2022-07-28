var bird = {
            x: 100,
            y: 250,
            size: 30,
            crashed: false
}

var acceleration = 0.1;
var gravity = 3;

function setup () {
  createCanvas(500, 500);
}

function draw () {
  background(0)

  ellipse(bird.x, bird.y, bird.size, bird.size)

  move();
}

function move () {

  if (!bird.crashed) {
    bird.y+=gravity;
    gravity += acceleration
  }

  if (bird.y >= 470) {
    bird.crashed = true;
  }
}

function keyPressed () {
  if (keyCode == 32) {
    gravity = -7;
  }
}