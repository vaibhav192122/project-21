var bullet, speed, weight;
var wall, thickness;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,53);
  thickness=random(22,83);
  bullet=createSprite(50,200,20,50);
  wall=createSprite(1200,200,thickness,height/2);
}

function draw() {
  background("black"); 
  
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;

  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (damage>10){
    wall.shapeColor=color(225,0,0);}

  if (damage<10){
    wall.shapeColor=color(0,225,0);}

  }

  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;}
    return false;

}