# Major project proposal

## Description
- mega man type game (have a stick figure or dude with an arm gun that can shoot) make him go through muliple levels shooting (enemys) 

## Needs to have 
make breakout game 
- make a movable platform thats moved with the (W,A,S,D) keys 
- make a constant moving ball that only moves if (the space bar) is pressed 
- make the bricks that break on contact with the ball
- background 


## Nice to have
breakout game 
- sound effects 
- interactive scene, (start, end, and game screen)
- shine of life, add color, 































let state = "start";
let radius = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  


  
  if (state === "start") {
    background("black");
    fill("");
    text("hello");
    textSize(50);
    textAlign(CENTER);

  }
  if (state === "game") {
    background("white");
  }
}

function mousePressed() {
  if (state ==="start" && mousePressed) {
    state = "game";
  }
}

function movePlatform() {
  if (key === "a") {
    //move platform
  }
  if (key === "s") {
    //move platform
  }
  if (key === "d") {
    //move platform
  }
  if (key === "a") {
    //move platform
  }
}

function displayPlatform() {
  rect(mouseX, mouseY, 50);
}
function ball() {
  circle();
}
