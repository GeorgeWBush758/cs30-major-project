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

let array1 = [];


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
  
  
  //second row //////////////////////////////////////////////////////////////////////////////////////////////////////////

  rect(10, 70, 50, 45);
  circle(x, y, 30);
  hit10 = collideRectCircle(10, 70, 50, 45, x, y, 50);

  if (hit10) {
    dy *= -1;
  }
 
  ///// 2

  rect(100, 70, 150, 45);
  circle(x, y, 30);
  hit11 = collideRectCircle(100, 70, 150, 45, x, y, 50);

  if (hit11) {
    dy *= -1;
  }

  /////// 3

  rect(300, 70, 150, 45);
  circle(x, y, 30);
  hit12 = collideRectCircle(300, 70, 150, 45, x, y, 50);

  if (hit12) {
    dy *= -1;
  }

  /////// 4
  rect(500, 70, 150, 45);
  circle(x, y, 30);
  hit13 = collideRectCircle(500, 70, 150, 45, x, y, 50);

  if (hit13) {
    dy *= -1;
  }
 
  /////// 5

  rect(700, 70, 150, 45);
  circle(x, y, 30);
  hit14 = collideRectCircle(700, 70, 150, 45, x, y, 50);

  if (hit14) {
    dy *= -1;
  }

  ////// 6

  rect(900, 70, 150, 45);
  circle(x, y, 30);
  hit15 = collideRectCircle(900, 70, 150, 45, x, y, 50);

  if (hit15) {
    dy *= -1;
  }

  ////// 7
  rect(1100, 70, 150, 45);
  circle(x, y, 30);
  hit16 = collideRectCircle(1100, 70, 150, 45, x, y, 50);

  if (hit16) {
    dy *= -1;
  }

  ///////// 8

  rect(1300, 70, 150, 45);
  circle(x, y, 30);
  hit17 = collideRectCircle(1300, 70, 150, 45, x, y, 50);

  if (hit17) {
    dy *= -1;
  }

  /////// 9

  rect(1500, 70, 150, 45);
  circle(x, y, 30);
  hit18 = collideRectCircle(1500, 70, 150, 45, x, y, 50);

  if (hit18) {
    dy *= -1;
  }



  //third row  /////////////////////////////////////////////////////////////////////////////////////////////////

  rect(10, 130, 150, 45);
  circle(x, y, 30);
  hit19 = collideRectCircle(10, 130, 150, 45, x, y, 50);

  if (hit19) {
    dy *= -1;
  }
 
  ///// 2

  rect(200, 130, 150, 45);
  circle(x, y, 30);
  hit20 = collideRectCircle(200, 130, 150, 45, x, y, 50);

  if (hit20) {
    dy *= -1;
  }

  /////// 3

  rect(400, 130, 150, 45);
  circle(x, y, 30);
  hit21 = collideRectCircle(400, 130, 150, 45, x, y, 50);

  if (hit21) {
    dy *= -1;
  }

  /////// 4
  rect(600, 130, 150, 45);
  circle(x, y, 30);
  hit22 = collideRectCircle(600, 130, 150, 45, x, y, 50);

  if (hit22) {
    dy *= -1;
  }
 
  /////// 5

  rect(800, 130, 150, 45);
  circle(x, y, 30);
  hit23 = collideRectCircle(800, 130, 150, 45, x, y, 50);

  if (hit23) {
    dy *= -1;
  }

  ////// 6

  rect(1000, 130, 150, 45);
  circle(x, y, 30);
  hit24 = collideRectCircle(1000, 130, 150, 45, x, y, 50);

  if (hit24) {
    dy *= -1;
  }

  ////// 7
  rect(1200, 130, 150, 45);
  circle(x, y, 30);
  hit25 = collideRectCircle(1200, 130, 150, 45, x, y, 50);

  if (hit25) {
    dy *= -1;
  }

  ///////// 8

  rect(1400, 130, 150, 45);
  circle(x, y, 30);
  hit26 = collideRectCircle(1400, 130, 150, 45, x, y, 50);

  if (hit26) {
    dy *= -1;
  }


  // fourth row /////////////////////////////////////////////////////////////////////////////////////////////////
  
  rect(10, 190, 50, 45);
  circle(x, y, 30);
  hit27 = collideRectCircle(10, 190, 50, 45, x, y, 50);

  if (hit27) {
    dy *= -1;
  }
 
  ///// 2

  rect(100, 190, 150, 45);
  circle(x, y, 30);
  hit28 = collideRectCircle(100, 190, 150, 45, x, y, 50);

  if (hit28) {
    dy *= -1;
  }

  /////// 3

  rect(300, 190, 150, 45);
  circle(x, y, 30);
  hit29 = collideRectCircle(300, 190, 150, 45, x, y, 50);

  if (hit29) {
    dy *= -1;
  }

  /////// 4
  rect(500, 190, 150, 45);
  circle(x, y, 30);
  hit30 = collideRectCircle(500, 190, 150, 45, x, y, 50);

  if (hit30) {
    dy *= -1;
  }
 
  /////// 5

  rect(700, 190, 150, 45);
  circle(x, y, 30);
  hit31 = collideRectCircle(700, 190, 150, 45, x, y, 50);

  if (hit31) {
    dy *= -1;
  }

  ////// 6

  rect(900, 190, 150, 45);
  circle(x, y, 30);
  hit32 = collideRectCircle(900, 190, 150, 45, x, y, 50);

  if (hit32) {
    dy *= -1;
  }

  ////// 7
  rect(1100, 190, 150, 45);
  circle(x, y, 30);
  hit33 = collideRectCircle(1100, 190, 150, 45, x, y, 50);
  // array1.push(rect(1100, 190, 150, 45));

  if (hit33) {
    dy *= -1;
    array1.slice(0,0);
  }

  ///////// 8

  rect(1300, 190, 150, 45);
  circle(x, y, 30);
  hit34 = collideRectCircle(1300, 190, 150, 45, x, y, 50);

  if (hit34) {
    dy *= -1;
  }
  
  ///////// 9

  rect(1500, 190, 50, 45);
  circle(x, y, 30);
  hit35 = collideRectCircle(1500, 190, 50, 45, x, y, 50);
  
  if (hit35) {
    dy *= -1;
  }
  
  
  
  
  



}


// class Brick 

// make array for brick 

// add the math i ++ stuff









