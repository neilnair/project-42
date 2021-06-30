var hr 
var mn
var sc

var hrAngle,mnAngle,scAngle
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  translate(200,200)
  rotate(-90)
hr = hour();
mn = minute();
sc = second();
scAngle = map(sc,0,60,0,360)
mnAngle = map(mn,0,60,0,360)
hrAngle = map(hr%12,0,12,0,360)
//drawing second hand
push();
rotate(scAngle)
stroke("blue");
strokeWeight(7);
line(0,0,100,0)
pop();
//drawing minute hand
push();
rotate(mnAngle)
stroke("green")
strokeWeight(7);
line(0,0,70,0)
pop();
//drawing hour hand
push();
rotate(hrAngle)
stroke("green")
strokeWeight(7);
line(0,0,50,0)
pop();
//drawing center point
stroke("black")
point(0,0)
//drawing arc
strokeWeight(10);
//seconds arc
stroke("blue")
arc(0,0,300,300,0,scAngle)
//minutes arc
stroke("green")
arc(0,0,280,280,0,mnAngle)
//hours arc
stroke("red")
arc(0,0,260,260,0,hrAngle)

  drawSprites();
}
