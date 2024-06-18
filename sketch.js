//8080
let x;
let y; 
let dx;
let dy;
let radius = 50;
let state = "start";

let randomColor = ["red", "blue", "green", "yellow", "purple", "orange", ];


let hit1 = false;


let brickArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  text("hello", 50,50);


  x = width / 2;
  y = height / 2;
  dx = 5; 
  dy = 5;

  spawnBricks();

}

function draw() {
  background(220);
  




  
  if (state === "start") {
    showInstructions();
    

  }
  else if (state === "game") {
    background("cyan");

    //paddle
    rect(mouseX, 700, 180, 15);
    
    //ball
    circle(x, y, 30);
    
    //paddle hitting ball?
    hit1 = collideRectCircle(mouseX, 700, 180, 15, x, y, 30);
    if (hit1) {
      dy *= -1;
    }



    // if (circle(x, y, 30) === height(400)) {
    //   state === showDeath();
    //   console.log = "hello";
    // }




    for (let brick of brickArray) {
      brick.display();

      if (brick.isColliding(x, y, 30)) {
        console.log("COLLIDING");
        dy *= -1;
        brickArray.splice(brickArray.indexOf(brick), 1);
      }
    }
   
   
    

    

    moveCircle();
    bounceOffWall();

  }
}

function showInstructions() {
  background("black");
  fill("red");
  textSize(50);
  text("Breakout", width/2, height/5);
  text("made by heath clarke", width/2, height/3.8);
  text("***instrunctions***", width/2, height/1.70);
  text("< use the (mouse) to move the platform and hit the bricks up top >", width/2, height/1.50);
  text("< pretend to have fun >", width/2, height/1.35); 
  fill("green");
  text("< Click The Screen To Start >", width/2, height/1.15);

  
  
  textAlign(CENTER);

}


function showDeath() {
  background("black");
  fill("red");
  textSize(50);
  text("you died", width/2,  height/2);
  text("Dont Bother Retrying If You're This Bad :) ", width/2, height/1.70);
}

function showWin() {
  background("black");
  fill("green");
  textSize(50);
  text("you won", width/2,  height/2);

}




function spawnBricks() {
  for (let x = 10; x < width; x += 200) {
    let brick = new Brick(x, 10, 150, 45);
    brickArray.push(brick);
  }

  for (let x = 10; x < width; x += 200) {
    let brick = new Brick(x, 70, 150, 45);
    brickArray.push(brick);
  }

  for (let x = 10; x < width; x += 200) {
    let brick = new Brick(x, 130, 150, 45);
    brickArray.push(brick);
  }

  for (let x = 10; x < width; x += 200) {
    let brick = new Brick(x, 190, 150, 45);
    brickArray.push(brick);
  }

  for (let x = 10; x < width; x += 200) {
    let brick = new Brick(x, 250, 150, 45);
    brickArray.push(brick);
  }
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
    showDeath();
  }
}


 

//function displayPlatform() {
//  rect(mouseX, 700, 180, 15);
// 
//}



class Brick {
  constructor(x, y, rectWidth, rectHeight) {
    this.x = x;
    this.y = y;
    this.width = rectWidth;
    this.height = rectHeight; 
    // this.r = random(0,255); 
    // this.g = random(0,255); 
    // this.b = random(0,255); 
  }
  
  display() {
    fill(random(0,255), random(0,255), random(0,255));
    rect(this.x, this.y, this.width, this.height);
  }

  isColliding(x, y, radius) {
    return collideRectCircle(this.x, this.y, this.width, this.height, x, y, radius);
  }
  
}





// class Brick 

// make array for brick 

// add the math i ++ stuff









