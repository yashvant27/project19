var bananaImage;
var obstacleImage;
var obstacleGroup;
var background;
var score;
var player_running;
var edges;

function preload() {
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png")
}

function setup() {
  createCanvas(500, 400);
  ground = createSprite(200, 200, 400, 400)
  ground.addImage(backImage)
  player = createSprite(50, 330, 10, 10)
  player.addAnimation("player", player_running)
  player.scale = 0.2
  edges = createEdgeSprites()


  bananaGroup = new Group();
  obstacleGroup = new Group();
  score=0
}

function draw() {
  background(220);
  ground.velocityX = -3;
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }

  if (keyDown("space")) {
    player.velocityY = -05;
  }
  player.velocityY = player.velocityY + 0.1
  player.collide(edges[3])
  banana()
  stone()


  
  switch(score){
    case 10:player.scale=0.12
      break;
    case 20:player.scale=0.14
      break;  
    case 30:player.scale=0.16
      break;  
    case 40:player.scale=0.18
      break;  
      default: break;
  }
  if(bananaGroup.isTouching(player)){
    bananaGroup.destroyEach()
    score=score+2
  }
  
  drawSprites()
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score"+score,350,25)
}

function banana() {
  if (World.frameCount % 90 === 0) {
    var banana = createSprite(510, random(150, 230), 10, 10);
    banana.addAnimation("Banana", bananaImage);
    banana.scale = 0.05;
    banana.lifetime = 200;
    banana.velocityX = -5;
    bananaGroup.add(banana);
    text("Score:" + score, 500, 50)

  }

}
function stone() {
  if (World.frameCount % 150 === 0) {
    var stone = createSprite(510,380, 10, 10);
    stone.addAnimation("stone", obstacleImage);
    stone.scale = 0.4;
    stone.lifetime = 200;
    stone.velocityX = -5;
    obstacleGroup.add(stone);
  }

}