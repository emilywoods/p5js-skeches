var moon;
var planet;
var planetImg;
var millisecond;
var halffOrbit, noHalfOrbits;

function preload(){
  planetImg = loadImage('planet.png');
  rocketImg = loadImage('spaceship.png');
}

function setup() {
  createCanvas(700, 700);
  planet = new Planet(createVector(width/2, height/2),planetImg);
  halffOrbit = 1000*planet.halffOrbit;
  moon = new Moon();
  rocket = new Rocket(rocketImg);
}

function draw() {
  background('#0c0831');
  millisecond = millis();

  var forceMoon = planet.calculateAttraction(moon);
  var forceRocket = planet.calculateAttraction(rocket);

  moon.applyForce(forceMoon);
  moon.update();
  rocket.applyForce(forceRocket);
  rocket.update();

  noHalfOrbits = millisecond/(1000*halffOrbit);
  console.log(noHalfOrbits);
  if (floor(noHalfOrbits)%2 ==0) {
    moon.display();
    rocket.display();
    planet.display();
  } else {
    planet.display();
    moon.display();
    rocket.display();
  };

}
