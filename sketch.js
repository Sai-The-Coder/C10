
var trex ,trex_running,cloudimage,groundimage,ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
cloudimage = loadImage("cloud.png");
groundimage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)

  
  trex  = createSprite(30,170,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale = 0.5

ground = createSprite(200,180,600,20)
ground.addImage("ground",groundimage)
ground.x = ground.width / 2
}

function draw(){
  background("cyan")
ground.velocityX =-50
  if(keyDown("space")){
    trex.velocityY = -5
  }

  if(ground.x < 0 ){
    ground.x = ground.width / 2 
  }

  trex.velocityY = trex.velocityY + 0.5 
  trex.collide(ground)
drawSprites()
}
