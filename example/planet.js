function Planet(position, planetImg){
  this.position = position;
  this.planetImg = planetImg;
  this.mass = 20;
  this.G = 2;
  this.radius = this.planetImg.width/2
  this.volume = 4/3*PI*pow(this.radius,3);

  this.calculateAttraction = function(moon) {
    var force = p5.Vector.sub(this.position, moon.position);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    var strength = (this.G * this.mass * moon.mass)/ (distance * distance);
    force.mult(strength);
    return force;
  }

  this.halffOrbit = function(){
    sqrt(3*PI/this.G*(this.mass/this.volume));
  }
  
  this.display = function() {
   image(this.planetImg, this.position.x - this.planetImg.width/2, this.position.y - this.planetImg.height/2);
  }
}
