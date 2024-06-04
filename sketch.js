//8080
let x;
let y; 
let dx;
let dy;
let radius = 50;
let state = "start";

let hit1 = false;
let hit2 = false;
let hit3 = false;
let hit4 = false;
let hit5 = false;
let hit6 = false;
let hit7 = false;
let hit8 = false;
let hit9 = false;
let hit10 = false;
let hit11 = false;
let hit12 = false;
let hit13 = false;
let hit14 = false;
let hit15 = false;
let hit16 = false;
let hit17 = false;
let hit18 = false;
let hit19 = false;
let hit20 = false;
let hit21 = false;
let hit22 = false;
let hit23 = false;
let hit24 = false;
let hit25 = false;
let hit26 = false;
let hit27 = false;
let hit28 = false;
let hit29 = false;
let hit30 = false;
let hit31 = false;
let hit32 = false;
let hit33 = false;
let hit34 = false;
let hit35 = false;




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
    hit1 = collideRectCircle(mouseX, 700, 180, 15, x, y, 50);

    if (hit1) {
      dy *= -1;
    }

   
   
   
    
    displayBricks();
    

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
  circle(x, y, 30);
  hit2 = collideRectCircle(10, 10, 150, 45, x, y, 50);

  if (hit2) {
    dy *= -1;
  }

  ////

  rect(200, 10, 150, 45);
  circle(x, y, 30);
  hit3 = collideRectCircle(200, 10, 150, 45, x, y, 50);

  if (hit3) {
    dy *= -1;
  }

  ////

  rect(400, 10, 150, 45);
  circle(x, y, 30);
  hit4 = collideRectCircle(400, 10, 150, 45, x, y, 50);

  if (hit4) {
    dy *= -1;
  }

  ////

  rect(600, 10, 150, 45);
  circle(x, y, 30);
  hit5 = collideRectCircle(600, 10, 150, 45, x, y, 50);

  if (hit5) {
    dy *= -1;
  }

  /////

  rect(800, 10, 150, 45);
  circle(x, y, 30);
  hit6 = collideRectCircle(800, 10, 150, 45, x, y, 50);

  if (hit6) {
    dy *= -1;
  }

  //////

  rect(1000, 10, 150, 45);
  circle(x, y, 30);
  hit7 = collideRectCircle(1000, 10, 150, 45, x, y, 50);

  if (hit7) {
    dy *= -1;
  }

  /////
  
  rect(1200, 10, 150, 45);
  circle(x, y, 30);
  hit8 = collideRectCircle(1200, 10, 150, 45, x, y, 50);

  if (hit8) {
    dy *= -1;
  }

  /////

  rect(1400, 10, 150, 45);
  circle(x, y, 30);
  hit9 = collideRectCircle(1400, 10, 150, 45, x, y, 50);

  if (hit9) {
    dy *= -1;
  }
  
  
  //second row 

  rect(10, 70, 50, 45);
  circle(x, y, 30);
  hit10 = collideRectCircle(10, 70, 50, 45, x, y, 50);

  if (hit10) {
    dy *= -1;
  }

  /////

  rect(100, 70, 150, 45);
  circle(x, y, 30);
  hit11 = collideRectCircle(100, 70, 150, 45, x, y, 50);

  if (hit11) {
    dy *= -1;
  }


 
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









