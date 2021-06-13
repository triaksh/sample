var player;
var snake;
var snakegroup;
var score=0;
var wins=0;
var carrot;

function preload() {
  //load game assets
}


function setup() {
  createCanvas(600,600)
  player=createSprite(40,560,30,30)
  carrot=createSprite(560,40,30,30)
  snakegroup = new Group()
}

function draw() {
  background("black")
  player.shapeColor="pink"
  carrot.shapeColor="orange"
  stroke("red")
  noFill()
  ellipse(50,50,40,40)
  if(keyDown("up")){
    player.y = player.y - 4.5
  }
  if(keyDown("down")){
    player.y = player.y + 4.5
  }
  if(keyDown("left")){
    player.x = player.x - 4.5
  }
  if(keyDown("right")){
    player.x = player.x + 4.5
  }
  generatesnakes()
  for(var i=0;i<snakegroup.length;i++){
    var temp=snakegroup.get(i)
    if (player.isTouching(temp)){
      score++
      temp.destroy()
      temp=null
      player.x=40
      player.y = 560
    }
  }
  if(player.isTouching(carrot)){
      wins++
      player.x=40
      player.y = 560
  }
  textSize(20)
  text("lost;"+score,500,100)
  text("won;"+wins,500,140)
  if(player.x<30 && player.x>70 && player.y<30 && player.y>70 ){
    text("...how",200,200);
    player.x=40;
    player.y=560;
  }
  drawSprites()
}

function generatesnakes(){
  if (frameCount%8==0){
  snake = createSprite(50,50,random(25,50),5)
  snake.shapeColor="lime"
  snake.velocityX=random(-1,5)
  snake.velocityY=random(-1,5)
  snakegroup.add(snake)
  }
}