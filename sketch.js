//8080

let state = "start";
let radius = 50;

let x;
let y; 
let dx;
let dy;



function setup() {
  createCanvas(windowWidth, windowHeight);
  text("hello", 50,50);
}

function draw() {
  background(220);
  


  
  if (state === "start") {
    fill("red");
    text("hello", width/2, height/2);
    background("black");
    textSize(50);
    textAlign(CENTER);

  }
  if (state === "game") {
    background("white");


    displayPlatform();
    displayBall();
    displayBricks();

  }
}

function mousePressed() {
  if (state ==="start" && mousePressed) {
    state = "game";
  }
}






 

function displayPlatform() {
  rect(mouseX, 700, 130, 15);
  
}

function displayBall() {
  circle(width/2, height/2, 50);

}

function displayBricks() {
  rect(10, 50, 150, 45);
  rect(200, 50, 150, 45);
  rect(400, 50, 150, 45);
  rect(600, 50, 150, 45);
  rect(800, 50, 150, 45);
  rect(1000, 50, 150, 45);
  rect(1200, 50, 150, 45);
  rect(1400, 50, 150, 45);
  //second row 
  rect(10, 110, 50, 45);
  rect(100, 110, 150, 45);
  rect(300, 110, 150, 45);
  rect(500, 110, 150, 45);
  rect(700, 110, 150, 45);
  rect(900, 110, 150, 45); 
  rect(1100, 110, 150, 45); 
  rect(1300, 110, 150, 45);

  //third row 
  rect(10, 170, 150, 45);
  rect(200, 170, 150, 45);
  rect(400, 170, 150, 45);
  rect(600, 170, 150, 45);
  rect(800, 170, 150, 45);
  rect(1000, 170, 150, 45);
  rect(1200, 170, 150, 45);
  rect(1400, 170, 150, 45);



}


// class Brick 

// make array for brick 









