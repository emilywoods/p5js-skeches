var w;

function setup() {
  createCanvas(600, 600);
  w = new Walker();
}

function draw() {
  background(51);
  w.update();
  w.display();
}

function Walker() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);

  this.update = function() {
    this.accn = createVector(0.25*random(-1,1), 0.25*random(-1,1));
    this.vel.add(this.accn);
    this.pos.add(this.vel);
  }

  this.display = function() {
    fill(20, 75, 200);
    ellipse(this.pos.x, this.pos.y, 20, 20);
    fill(200,1,0);
    ellipse(this.pos.x, this.pos.y, 5, 5)
  }
}
