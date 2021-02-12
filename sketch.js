function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  var hr
  var mn
  var sc
  var scAngle
  var mnAngle
  var hrAngle

  angleMode(DEGREES)

}

function draw() {
  background(255,255,255); 
  sc=second()
  hr=hour()
  mn=minute()
  scAngle=map(sc,0,60,0,360) 
  push()
  //translate(sc.position.x,sc.position.y)
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  mnAngle=map(mn,0,60,0,360)
  push()
  //translate(mn.position.x,mn.position.y)
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  hrAngle=map(hr,0,60%12,0,360)
  push()
  //translate(hr.position.x,hr.position.y)
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  
  drawSprites();
}