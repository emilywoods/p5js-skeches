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
  this.accn = p5.Vector.fromAngle(random(-TWO_PI, TWO_PI));


  this.update = function() {
    var mouse = createVector(mouseX, mouseY);
    this.accn.rotate(0.1);
    this.accn.normalize();
    this.accn.mult(0.1);

    //p5.Vector is static - not called on a particular instance of the object itself, it's called on the idea of the object
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
