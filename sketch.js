var hr = hour();
text('Current second: \n' + sec, 5, 50);
var min = minute();
text('Current minute: \n' + min, 5, 50);
var sec = second();
text('Current hour:\n' + hr, 5, 50);

angleMode(DEGREES);

map(){
  secAngle=map(sec,0,60,0,360)
  minAngle=map(min,0,60,0,360)
  hrAngle=map(hr,0,60,0,360)
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

