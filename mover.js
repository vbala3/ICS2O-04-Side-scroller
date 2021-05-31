//changed some of the numbers
class Mover {
  constructor(img) {
    this.pos = createVector(0, 300);
    this.vel = createVector(1, 0);
    this.acc = createVector(0, 0);
    this.pic = img;
    this.score = 0;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    fill("white");
    image(this.pic, this.pos.x, this.pos.y, 50, 50);
    textSize(20);
    text("SCORE: " + this.score, this.pos.x + 140, 380);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  edges() {
    if (this.pos.y > 350) {
      this.vel.y *= -0.5;
      this.pos.y = 350;
    }
    //makes the hero not go off screen
    if (this.pos.y < 0) {
      this.pos.y = 1;
      this.vel.y *= -0.1;
    }
  }

  hit(o) {
    if (
      o.pos.x >= this.pos.x &&
      o.pos.x <= this.pos.x + 80 &&
      o.pos.y >= this.pos.y &&
      o.pos.y <= this.pos.y + 80
    ) {
      o.pos.y = -400;
      this.score++;
    }
  }
}
