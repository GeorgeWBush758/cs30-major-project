//8080
let x;
let y; 
let dx;
let dy;
let radius = 50;
let state = "start";






function setup() {
  createCanvas(windowWidth, windowHeight);
  text("hello", 50,50);


  x = width / 2;
  y = height / 2;
  dx = 5;
  dy = 5;



}

function draw() {
  background(220);
  


  
  if (state === "start") {
    showInstructions();
    

  }
  else if (state === "game") {
    background("cyan");


    displayPlatform();
    displayBricks();
    drawCircle();
    moveCircle();
    bounceOffWall();

  }
}

function showInstructions() {
  background("black");
  fill("red");
  textSize(50);
  text("Breakout", width/2, height/2);
  text("click to begin", width/2, height/1.70);
  
  
  
  textAlign(CENTER);

}







function mousePressed() {
  if (state ==="start" && mousePressed) {
    state = "game";
  }
}

function drawCircle() {
  //display circle
  fill("red");
  circle(x, y, 30);
}

function moveCircle() {
  //move circle
  x += dx;
  y += dy;
}

function bounceOffWall() {
  //bounce if needed
  if (x + radius >= width || x - radius <= 0) {
    dx = -1 * dx;
    
    console.log("bounced!");
  }
  if (y + radius >= height || y - radius <= 0) {
    dy = -1 * dy;
  
    console.log("bounced!");
  }
}


 

function displayPlatform() {
  rect(mouseX, 700, 180, 15);
  
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
  rect(1500, 110, 50, 45);


  //third row 
  rect(10, 170, 150, 45);
  rect(200, 170, 150, 45);
  rect(400, 170, 150, 45);
  rect(600, 170, 150, 45);
  rect(800, 170, 150, 45);
  rect(1000, 170, 150, 45);
  rect(1200, 170, 150, 45);
  rect(1400, 170, 150, 45);
  // fourth row
  rect(10, 230, 50, 45);
  rect(100, 230, 150, 45);
  rect(300, 230, 150, 45);
  rect(500, 230, 150, 45);
  rect(700, 230, 150, 45);
  rect(900, 230, 150, 45);
  rect(1100, 230, 150, 45);
  rect(1300, 230, 150, 45);
  rect(1500, 230, 50, 45);



}


// class Brick 

// make array for brick 

// add the math i ++ stuff









