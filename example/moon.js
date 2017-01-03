function Moon() {
  this.position = createVector(150,150);
  this.velocity = createVector();
  this.acceleration = createVector(2,0);
  this.mass = 2;
  this.radius = this.mass*10;

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acceleration.add(f);
  };

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.set(0,0);
  };

  this.display = function() {
    fill(213,209,180);
    ellipse(this.position.x, this.position.y, this.radius*2, this.radius*2);
    fill(122,111,97);
    ellipse(this.position.x -2, this.position.y-2, this.mass*4, this.mass*4);
    ellipse(this.position.x +this.mass*6, this.position.y-this.mass*4, this.mass*5, this.mass*6);
    ellipse(this.position.x -this.mass*4, this.position.y+this.mass*5, this.mass*5, this.mass*5);
  }
}
