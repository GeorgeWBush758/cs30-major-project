//8080
let x;
let y; 
let dx;
let dy;
let radius = 50;
let state = "start";

let hit = false;




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

    rect(mouseX, 700, 180, 15);
    circle(x, y, 30);
    hit = collideRectCircle(mouseX, 700, 180, 15, x, y, 50);

    if (hit) {
      dy *= -1;
    }
   
   
   
    //displayPlatform();
    displayBricks();
    // drawCircle();
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

//function drawCircle() {
//  //display circle
// fill("red");
// circle(x, y, 30);
// }

function moveCircle() {
  //move circle
  x += dx;
  y += dy;
}

function bounceOffWall() {
  //bounce if needed
  if (x + radius >= width || x - radius <= 0) {
    dx = -1 * dx;
  }
  if (y + radius >= height || y - radius <= 0) {
    dy = -1 * dy;
  }
}


 

//function displayPlatform() {
//  rect(mouseX, 700, 180, 15);
// 
//}










function displayBricks() {
  rect(10, 10, 150, 45);
  rect(200, 10, 150, 45);
  rect(400, 10, 150, 45);
  rect(600, 10, 150, 45);
  rect(800, 10, 150, 45);
  rect(1000, 10, 150, 45);
  rect(1200, 10, 150, 45);
  rect(1400, 10, 150, 45);
  //second row 
  rect(10, 70, 50, 45);
  rect(100, 70, 150, 45);
  rect(300, 70, 150, 45);
  rect(500, 70, 150, 45);
  rect(700, 70, 150, 45);
  rect(900, 70, 150, 45); 
  rect(1100, 70, 150, 45); 
  rect(1300, 70, 150, 45);
  rect(1500, 70, 50, 45);


  //third row 
  rect(10, 130, 150, 45);
  rect(200, 130, 150, 45);
  rect(400, 130, 150, 45);
  rect(600, 130, 150, 45);
  rect(800, 130, 150, 45);
  rect(1000, 130, 150, 45);
  rect(1200, 130, 150, 45);
  rect(1400, 130, 150, 45);
  // fourth row
  rect(10, 190, 50, 45);
  rect(100, 190, 150, 45);
  rect(300, 190, 150, 45);
  rect(500, 190, 150, 45);
  rect(700, 190, 150, 45);
  rect(900, 190, 150, 45);
  rect(1100, 190, 150, 45);
  rect(1300, 190, 150, 45);
  rect(1500, 190, 50, 45);



}


// class Brick 

// make array for brick 

// add the math i ++ stuff









