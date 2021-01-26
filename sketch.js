const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player,invi1,invi2,pet,inviCirc,inviLine1,inviLine2,aliensGroup,bg,bulletsGroup

var playerImg,bulletsImg,petImg,alienImage1,alienImage2,backgroundImg

function preload(){
	playerImg = loadImage("images/playerShip.png");
	bulletsImg = loadImage("images/bullet.png");
	petImg = loadImage("images/pet.png");
	alienImage1 = loadImage("images/alienShip1.png");
	alienImage2 = loadImage("images/alienShip2.png");
	backgroundImg = loadImage("images/background1.png");
}

function setup(){
	createCanvas(displayWidth,displayHeight);

	engine = Engine.create();
	world = engine.world;

	bg = createSprite(displayWidth/2,displayHeight/2);
	bg.addImage(backgroundImg);
	bg.scale=3


	inviCirc = createSprite(displayWidth/2,displayHeight/2+160,500,500);
	inviCirc.visible = false;

	player = createSprite(displayWidth/2,displayHeight/2+160);
	player.addImage(playerImg);
	player.scale = 0.3;

	invi1=createSprite(20,340+160,20,100);
	invi1.visible=false;

	invi2=createSprite(displayWidth-20,displayHeight-380+160,20,100);
	invi2.visible=false;
	
	pet = createSprite(500,500);
	pet.addImage(petImg);
	pet.scale=0.1


	aliensGroup = new Group();	

	Engine.run(engine);
  
}


function draw(){
  rectMode(CENTER);
  background(0);

 if(keyCode === 39){
	 player.velocityX=5
 }

 if(keyCode === 37){
	 player.velocityX=-5
 }

 if(player.isTouching(invi1)){
	 player.velocityX=1;
 }

 if(player.isTouching(invi2)){
	 player.velocityX=-1
 }

 if(keyWentDown("space")){
	 createBullet();
 }

 player.debug=false;
 player.setCollider("circle",0,0,150);

 spawnAlien1();
 spawnAlien2();

 
 drawSprites();
 
}

function createBullet() {
	var bullets = createSprite(100, 100, 60, 10);
	bullets.addImage(bulletsImg);
	bullets.x = player.x;
	bullets.y = player.y-30;
	bullets.velocityY = -4;
	bullets.lifetime = 100;
	bullets.scale = 0.5;
	bulletsGroup.add(bullets);
	 
  }
  
function spawnAlien1(){

	if(frameCount%150===0){
    var aliens = createSprite(200,200);
	aliens.addImage(alienImage1);
	aliens.scale = 0.2;
	aliens.x = Math.round(random(50,1000));
	aliens.y = Math.round(random(0,50));
	aliens.velocityY = 1;
	aliens.lifetime=600;
	aliensGroup.add(aliens);
	}
}

function spawnAlien2(){

	if(frameCount%150===0){
		var alien = createSprite(200,200);
		alien.addImage(alienImage2);
		alien.scale = 0.2;
		alien.x = Math.round(random(50,1000));
		alien.y = Math.round(random(0,50));
		alien.velocityY = 1;
		alien.lifetime=600
		aliensGroup.add(alien);
		}

}
