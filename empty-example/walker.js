var walk;
var walkers =[];
var maxWalkers = 50;
var mousePosition;
var randomwalker;
var x,y;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(72, 61, 139);
  displayWalker();
  if (mouseIsPressed) {
    createWalker();
  }
}

function Walker(x,y) {
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
//  this.acceleration = p5.Vector.fromAngle(random(-TWO_PI, TWO_PI));

  this.update = function(){
    if (mouseIsPressed) {
      var direction = createVector(mouseX, mouseY);
      this.acceleration = p5.Vector.sub(direction, this.position)
      this.acceleration.rotate(0.1);
      this.acceleration.normalize();
      this.acceleration.mult(0.1);

      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
    }
  }

  this.display = function() {
    stroke(random(150),100,random(50));
    strokeWeight(7);
    rect(this.position.x, this.position.y,20,20);
  }
}

function createWalker() {
  if(walkers.length == maxWalkers){
    walkers.shift();
    }
  if (frameCount% 3 ==0){
    mousePosition = createVector(mouseX, mouseY);
    randomwalker = new Walker(mousePosition.x, mousePosition.y);
    walkers.push(randomwalker);
  }
}

 function displayWalker() {
   for (var i = walkers.length -1; i>0; i--){
     walkers[i].update;
     walkers[i].display;
   }

}
