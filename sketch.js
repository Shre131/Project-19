var monkey, bananaGroup, obstacleGroup, gameState,score, ground;
var monkeyImage, obstacleImage, bananaImage;




function preload() {
monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png",);
bananaImage=loadImage("banana.png");
obstacleImage=loadImage("stone.png");
}


function setup() {
  createCanvas(400,400);


monkey=createSprite(100,340,20,50);
monkey.addAnimation("monkeyImage", monkeyImage);
monkey.scale=0.1;

 ground=createSprite(400,350,800,10);

ground.x=ground.width/2;

 obstacleGroup=new Group();

 bananaGroup=new Group();

 score=0;

 gameState="play";


 
}

function draw() {
  background(255,255,255);  
  
  background(0);
 
  
  monkey.collide(ground);
  
  
  
  
  if(gameState==="play"){
    
  ground.velocityX=-4;
  console.log(monkey.y)
  if (keyDown("space") && monkey.y>=312.3) {
    monkey.velocityY=-17;
  }
   monkey.velocityY = monkey.velocityY + 0.8;
   
   if (ground.x < 0){
      ground.x = ground.width/2;
    }


if(monkey.isTouching(bananaGroup)){
  bananaGroup.destroyEach();

  score=score+2;

  
  
}

switch(score){
  case 4:monkey.scale=0.12;
  break;
  
  case 6:monkey.scale=0.14;
  break;

  case 8:monkey.scale=0.16;
  break;

  case 10:monkey.scale=0.18;
  break;
}

if(monkey.isTouching(obstacleGroup)){
  gameState="end";
}

spawnBanana();
spawnObstacles();



}

else if(gameState==="end"){
    monkey.velocityY=0;
   bananaGroup.destroyEach();
   bananaGroup.setVelocityXEach(0);
   obstacleGroup.setVelocityXEach(0);
   monkey.visible=false;
   

   fill("white");
textSize(20);
textFont("Comic Sans MS");

  strokeWeight(1);
text("GAME OVER!",130,200);

    }

stroke("cyan");
textSize(20);
textFont("Comic Sans MS");
fill("cyan");

text("Survival Time:"+score, 100, 50);


    

  
  
  
  drawSprites();


}


function spawnObstacles() {
  if (frameCount%300===0) {
  var obstacle=createSprite(400,319,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.15;
  obstacle.lifetime=200;
  obstacleGroup.add(obstacle);
  obstacle.velocityX=-5;

  obstacle.setCollider("circle",0,0,80);
 
}

}

function spawnBanana() {      
  if (frameCount%120===0) {
  var banana=createSprite(400,random(150,350),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.05;
  banana.lifetime=200;
  bananaGroup.add(banana);
  banana.velocityX=-5;
  
}
}