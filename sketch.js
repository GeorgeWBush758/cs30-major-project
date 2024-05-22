//8080

let state = "start";
let radius = 50;




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
  rect(CENTER, CENTER, 50);
  color("red");
}















