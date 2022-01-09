var Score=0;
function preload(){
Bg=loadImage("Bg.png");
Bun=loadImage("Bun.png");
Wolf=loadImage("Wolf.png");
Hawk=loadImage("Hawk.png");
Carrot=loadImage("Ca3.png")
}
function setup() {
  createCanvas(800,745);
  edges=createEdgeSprites();
  player=createSprite(40,40,70,70);
  player.scale=0.2;
  player.addImage(Bun);
  goal=createSprite(770,700,50,50);
  goal.scale=0.4;
  goal.addImage(Carrot);
  B1=createSprite(400, 150,70,20);
  B2=createSprite(550, 400,70,20);
  B3=createSprite(550, 500,70,20);
  B4=createSprite(200, 700,70,20);
  B1.scale=0.1;
  B1.addImage(Hawk);
  B2.scale=0.1;
  B2.addImage(Hawk);
  B3.scale=0.1;
  B3.addImage(Hawk);
  B4.scale=0.1;
  B4.addImage(Hawk);
  B1.velocityX=-20;
  B2.velocityY=20;
  B3.velocityX=-20;
  B4.velocityY=20;
  WG= new Group();
 }
function draw() {  
  background(Bg);  
  player.shapeColor="yellow";
  goal.shapeColor="purple";
  B1.shapeColor="blue";
  B2.shapeColor="blue";
  B3.shapeColor="blue";
  B4.shapeColor="blue";
stroke("magenta");
noFill();
ellipse(400,400,70,20);
GW();
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);

  B1.bounceOff(edges[0]);
  B1.bounceOff(edges[1]);
  B1.bounceOff(edges[2]);
  B1.bounceOff(edges[3]);

  B2.bounceOff(edges[0]);
  B2.bounceOff(edges[1]);
  B2.bounceOff(edges[2]);
  B2.bounceOff(edges[3]);

  B3.bounceOff(edges[0]);
  B3.bounceOff(edges[1]);
  B3.bounceOff(edges[2]);
  B3.bounceOff(edges[3]);

  B4.bounceOff(edges[0]);
  B4.bounceOff(edges[1]);
  B4.bounceOff(edges[2]);
  B4.bounceOff(edges[3]);
  if(keyDown("up")){
    player.y=player.y-3;
  }
  if(keyDown("down")){
    player.y=player.y+3;
  }
  if(keyDown("right")){
    player.x=player.x+3;
  }
  if(keyDown("left")){
    player.x=player.x-3;
  }
  if(player.isTouching(B1)){
    text("You Lose.",400,400);
    player.x=40;
    player.y=40;
    Score=Score-1;
  }
  if(player.isTouching(B2)){
    text("You Lose.",400,400);
    player.x=40;
    player.y=40;
    Score=Score-1;
  }
  if(player.isTouching(B3)){
    text("You Lose.",400,400);
    player.x=40;
    player.y=40;
    Score=Score-1;
  }
  if(player.isTouching(B4)){
    text("You Lose.",400,400);
    player.x=40;
    player.y=40;
    Score=Score-1;
  }
  if(player.isTouching(WG)){
    text("You Lose.",400,400);
    player.x=40;
    player.y=40;
    Score=Score-1;
  }
  if(player.isTouching(goal)){
    text("You Win!",400,400);
    Score=Score+1;
    player.x=40;
    player.y=40;
  }

  function GW(){
    if(frameCount%60==0){
      var Worms=createSprite(400,400,60,5);
      Worms.addImage(Wolf);
      Worms.scale=0.08;
      Worms.velocityX=random(-5,10);
      Worms.velocityY=random(-5,10);
      WG.add(Worms);
    }
  }
  drawSprites();
  stroke("green");
  textSize(20);
  text("Your Score:"+Score,600,60);
}