var wall,bullet;
var speed,weight;
var thichness;
var damage;
function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83);

  speed=random(223,321);

  weight=random(30,52);

  wall=createSprite(1200, 200, thichness,height/2);
  wall.shapeColor=rgb(80,80,80);

  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="white";
  bullet.velocityX=speed;

  damage=((0.5*weight*speed*speed)/(thickness*thickness*thickness));
 
  
}

function draw() {
  background(0);  

  isColiding(wall,bullet);

  drawSprites();

}

function isColiding(object1,object2){
  if(object1.x-object2.x<=object1.width/2 + object2.width/2 && object2.x-object1.x<object1.width/2 + object2.width/2){
     if(damage<=10){
     object2.shapeColor=rgb(0,255,0);
    }
    if(damage>10){
      object2.shapeColor=rgb(255,0,0);
    }
    object1.velocityX=0;
    object2.velocityX=0;

  }
  if(object1.x-object2.x<=object1.heigth/2 + object2.height/2 && object2.x-object1.x<object1.height/2 + object2.height/2){
    
    if(damage<=10){
      object2.shapeColor=rgb(0,255,0);
    }
    if(damage>10){
      object2.shapeColor=rgb(255,0,0);
    }
    object1.velocityX=0;
    object2.velocityX=0;

 }
}