var img;
 
function preload()
{
  // load image
  img = loadImage("planet.png");
}
 
function setup() 
{
  // set canvas size
  createCanvas(400, 250); 
}
 
function draw() 
{
  background(255);
 
  // display image (img, x, y)
  image(img, 0, 0); 
}