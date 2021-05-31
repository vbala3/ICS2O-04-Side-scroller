class Starthree {
  constructor(img) {
    //added another enemy
    this.pos = createVector(random(2000), random(300));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.pic = img;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    fill("green");
    image(this.pic, this.pos.x, this.pos.y, 50, 50);
  }
}
