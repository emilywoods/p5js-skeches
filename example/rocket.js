function Rocket(rocketImg){
  this.position = createVector(700, 300);
  this.velocity = createVector();
  this.acceleration = createVector(0,5);
  this.rocketImg = rocketImg;
  this.mass = 3;

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
    image(this.rocketImg, this.position.x, this.position.y);
  };
}




}
