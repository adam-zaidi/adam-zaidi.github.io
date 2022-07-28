var clicked = false;
var clicks = 0;


var time = 20;

var gameStart = true;

var s = 260;

var square = 320;

var startScreen = false;

var setup = function () {
  createCanvas(600,600);
  setInterval(countDown, 1000);
}

var draw = function() {
  background(239,373,224);
  noStroke();
  

  textSize(50);
  if (startScreen) {
    drawStartScreen();
  }
  if (gameStart && !startScreen) {
    
    fill(100,100,100)
    text("Click the Square!", 100, 70)
    fill(230);
    rect(190,190,200,200);
    fill(255);
    rect(200,200,200,200);
    fill(0,0,0);
    fill(100);
      
    text(time, s, 500);
      
    if (time < 0.001) {
      gameStart = false;
    }
      
   
      
    fill(100);
      
    text("" + clicks, 270, 140);

  } else if (!gameStart) {  
    drawLoseScreen();
  }
};
  

var restart = function() {
  clicks = 0;
  time = 21;
  gameStart = true;
  square = 320;
}

function drawStartScreen () {
  background(239,373,224);

  fill(100,100,100);
  text("Clicker Game", 150,100);

  fill(255);
  rect(150,250,300,100);

  fill(220,220,220);
  rect(154,254,292,92);

  fill(100);
  text("Start",250,315);
}

function drawLoseScreen () {
  fill(100,100,100)
  text("Your Score was "+clicks+" Clicks", 10,300);

  textSize(30)
  text("High Score is 211 Clicks", 20,450)

  textSize(40)
  fill(220,220,220)
  rect(191, 56, 234,64)

  fill(255,255,255)
  rect(193, 58, 230,60)

  fill(0,0,0)
  text("Play Again?", 200,100)

  textSize(20)
  text("Tell Adam if you beat the highscore and what your score was", 20,590)
}

function countDown () {
  if (!startScreen) {
    time -= 1;
  }
}

var mouseClicked = function() {
  if (setMouseClick(mouseX,mouseY,150,250,300,100) && startScreen) {
    startScreen = false;
  }

  if (setMouseClick(mouseX,mouseY,200,200,200,200) && time > 0) {
    clicked = true;
    clicks += 1;
    
  }
  
  if (setMouseClick(mouseX,mouseY,193,56,234,64) && !gameStart) {
    console.log("hi")
    restart()
  }
  
};

function setMouseClick (mouseX,mouseY,x,y,w,h) {
  if (mouseX > x-1 && mouseX < x+w+1 && mouseY > y-1 && mouseY < y+h+1) {
    return true;
  } else {
    return false;
  }
}