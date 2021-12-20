var torre
var fantasma

function preload(){
  fantasm=loadAnimation("ghost-jumping.png","ghost-standing.png")
  port=loadImage("door.png")
  torr=loadImage("tower.png")
  bas=loadImage("climber.png")
}

function setup(){
  createCanvas(600,600)
  torre=createSprite(300,300)
  torre.addImage(torr)
  fantasma=createSprite(300,300)
  fantasma.addAnimation("fantasma",fantasm)
  fantasma.scale=0.3
  bases=createGroup()
  portas=createGroup()
}

function draw(){
  torre.velocityY=5
  if(torre.y>400){
    torre.y=300
  }
  fantasma.velocityY=fantasma.velocityY+0.8
  if(keyDown("space")){
    fantasma.velocityY=-20
  }
  if(keyDown("a")){
  fantasma.x-=5
  }
  if(keyDown("d")){
    fantasma.x+=5
  }
  fantasma.collide(bases)
  gerarPortas()
  drawSprites()
  if(fantasma.y>630){
    bases.destroyEach()
    portas.destroyEach()
    fantasma.velocityY=0
    torre.y=0
    textSize(30)
    fill("white")
    text("Game Over",235,300)
    
  }
}

function gerarPortas() {
  //escreva o código aqui para gerar portas na torre
  if(frameCount%70===0){
  var porta=createSprite(Math.round(random(100,500)),-50,10,10)
  porta.velocityY=5
  porta.addAnimation("porta",port)
  var base=createSprite(porta.x,0,10,10)
  base.addImage("base",bas)
  base.velocityY=5
  base.scale=0.7
  base.lifetime=600/4
  base.depth=base.depth
  fantasma.depth=base.depth+1
  bases.add(base)
  portas.add(porta)

  
  }
}


