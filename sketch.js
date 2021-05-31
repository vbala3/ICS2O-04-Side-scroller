/*Changes made:
1. Object oriented change - made another enemy using a class and changed the images to stars for both the enemy and hero
2. 3 algorithmic changes - changed the amount of enemies that spawn, made it so the hero cannot go off screen, added a tutoriel, changed the starting and ending screen slightly
*/

let hero;
let force;
let gravity;
let sNum = 0;
let enemys = [];
let img;

function setup() {
  createCanvas(400, 400);
  //changed how the hero looks
  img = loadImage("star.png");
  img2 = loadImage("star2.png");
  img3 = loadImage("star3.jpeg");

  hero = new Mover(img);
  force = createVector(-0.01, 0);
  gravity = createVector(0, 0.01);

  //changed the number of enemies that spawn
  for (let i = 0; i < 60; i++) {
    enemys.push(new Startwo(img2));
  }
  //added another enemy
  for (let i = 0; i < 60; i++) {
    enemys.push(new Starthree(img3));
  }
}

function keyPressed() {
  if (key == " ") {
    let jump = createVector(0, -1);
    hero.applyForce(jump);
  }
}

function mousePressed() {
  sNum++;
}

function draw() {
  if (sNum % 4 === 0) {
    open();
  } else if (sNum % 4 == 1) {
    tutorial();
  } else if (sNum % 4 === 2) {
    game();
  } else if (sNum % 4 === 3) {
    close();
  }
}

//changed opening scene slightly
function open() {
  background(20, 200, 10);
  textSize(18);
  fill("black");
  text("Welcome to the game Constellation Catcher!", 17, 180);
  fill("white");
  textSize(20);
  text("Click anywhere to continue!", 80, 220);
}

//added a tutorial
function tutorial() {
  background(200, 200, 200);
  fill("purple");
  text("The game is simple, just click the space", 20, 100);
  text("button to jump and try to hit as many of the", 10, 140);
  text("other stars as you can to increase your", 15, 180);
  text("score! Try to get the highest score you can!", 10, 220);
  text("What are you waiting for? Click to begin!", 18, 260);
}

//made a slightly better finnish screen
function close() {
  background(10, 200, 200);
  textSize(25);
  fill("black");
  text("Thanks for playing! Play again?", 23, 200);
}

function game() {
  background(10, 30, 20);

  hero.applyForce(gravity);
  translate(-hero.pos.x + 100, 0);
  hero.update();
  hero.show();
  hero.edges();

  for (let i = 0; i < enemys.length; i++) {
    enemys[i].show();
    enemys[i].update();
    hero.hit(enemys[i]);
  }
}
