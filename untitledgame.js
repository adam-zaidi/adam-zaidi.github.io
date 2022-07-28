var player;
var game_over_bool;

var velocity;

var left;
var right;
var up;
var down;

var score;

var startScreen = true;

var tutorialScreen = false;

var image1;

function setup () {
  createCanvas(500,500);

  image1 = loadImage("untitledgametut.png");
  
  player = {x:220,y:220,size:30};
  game_over_bool = false;

  velocity = 1;

  left = false;
  right = true;
  up = false;
  down = false;

  score = 0;
}

function draw () {
  background(0);
  if (startScreen) {
    draw_start_screen();
  }
  if (tutorialScreen) {
    draw_tutorial_screen();
  }
  if (!game_over_bool && !startScreen) {
    do_player();
    do_score();
  } else if (game_over_bool && !startScreen) {
    fill(100);
    rect(100,200,300,100);

    textSize(40);
    fill(200);
    text("GAME OVER",125,265);
    
    textSize(30);
    text("PRESS 'R' TO RESTART",90,370);

    fill(200);
    textSize(20);
    text("Score: " + score, 10,470);
  }
}

function draw_start_screen () {
  background(0);

  noStroke();
  textSize(50)

  fill(255);
  text("Untitled Game", 78,73);
  text("Untitled Game", 80,75);

  fill(20);
  rect(100,150,300,100);

  fill(255);
  text("Start",190,220);
  text("Start",192,222);

  fill(20);
  rect(100,300,300,100);

  fill(255);
  text("How to Play",110,360);
  text("How to Play",112,362);
}

function do_player () {
  fill(255,0,0);
  rect(player.x,player.y,player.size,player.size);

  if (left) {
    player.x -= velocity;
  }
  if (right) {
    player.x += velocity;
  }
  if (up) {
    player.y -= velocity;
  }
  if (down) {
    player.y += velocity;
  }

  if (player.x < 0 || player.x > 470 || player.y < 0 || player.y > 470) {
    game_over_bool = true;
  }
}

function draw_tutorial_screen () {
  image(image1,0,0,500,500);

  textSize(20);
  text("PRESS 'N' TO CONTINUE",250,480)
}

function do_score () {
  score += 1;
  
  fill(200);
  textSize(20);
  text("Score: " + score, 10,470);
}

function restart () {
  player = {x:220,y:220,size:30};
  game_over_bool = false;

  left = false;
  right = true;
  up = false;
  down = false;

  velocity = 1;

  score = 0;
}

function keyPressed () {
  if (keyCode == 37 && !left) {
    velocity += 0.5;
    left = true;
    up = false;
    right = false;
    down = false;
  }
  if (keyCode == 38 && !up) {
    velocity += 0.5;
    left = false;
    up = true;
    right = false;
    down = false;
  }
  if (keyCode == 39 && !right) {
    velocity += 0.5;
    left = false;
    up = false;
    right = true;
    down = false;
  }
  if (keyCode == 40 && !down) {
    velocity += 0.5;
    left = false;
    up = false;
    right = false;
    down = true;
  }

  if (keyCode == 82) {
    restart();
  }

  if (keyCode == 78) {
    tutorialScreen = false;
  }
}

function mouseClicked () {
  if (setMouseClick(mouseX,mouseY,100,150,300,100)) {
    startScreen = false;
  }

  if (setMouseClick(mouseX,mouseY,100,300,300,100)) {
    tutorialScreen = true;
    console.log("asd")
  }
}

function setMouseClick (mouseX,mouseY,x,y,w,h) {
  if (mouseX > x-1 && mouseX < x+w+1 && mouseY > y-1 && mouseY < y+h+1) {
    return true;
  } else {
    return false;
  }
}