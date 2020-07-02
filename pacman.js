var pm = {
  x: 200,
  v: 5,
  y: 200,
  mo: 0,
  mc: 0,
}
var n 

function setup() {
  createCanvas(400, 400);
  frameRate(30);
  n=2
}

function draw() {
  background(0);
  noStroke();
  fill(255, 204, 0)
  arc(pm.x,pm.y,40,40,pm.mo,pm.mc)
  if (keyCode == 37){
    pm.x= pm.x - pm.v
    pm.mo = 12/PI
    pm.mc = 8/PI
  } else if (keyCode == 38) {
    pm.y= pm.y - pm.v
    pm.mo= 17/PI
    pm.mc= 13/PI
  } else if (keyCode == 39) {
    pm.x= pm.x + pm.v
    pm.mo= 22/PI
    pm.mc= 18/PI
  } else if (keyCode == 40) {
    pm.y= pm.y + pm.v
    pm.mo = 7/PI
    pm.mc = 3/PI
  } 
  if (pm.x == 400) {
    pm.x = 0
  } else if (pm.x == 0) {
    pm.x = 400
  } 
  if (pm.y == 400) {
    pm.y = 0
  } else if (pm.y == 0) {
    pm.y = 400
  }

  if (n%2==0){
    pm.mo=PI
    pm.mc=PI
  } n = n+1
}