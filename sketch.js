
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1 ,mango2 ,mango3 ,mango4 ,mango5 ,mango6 ,mango7 ,mango8 ,mango9;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;


	mango1=new mango(1100,100,30);
	mango2=new mango(900,50,30);
	mango3=new mango(1100,120,30);
	mango4=new mango(1000,100,30);
	mango5=new mango(1100,150,30);
	mango6=new mango(1200,80,30);
	mango7=new mango(970,150,30);
	mango8=new mango(1170,60,30);
	mango9=new mango(1000,160,30);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone=new stone(230,400,20,20);

	slingshot = new slingsht(stone.body,{x:230, y:400});
	
	Engine.run(engine);

}

function draw() {

  background("lightblue");
  textSize(25);
  text("PRESS SPACE TO GET ANOTHER STONE TO PLAY",250,100);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stone.display();
  slingshot.display();

  groundObject.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);

  drawSprites();


}

function mouseDragged(){
    Matter.Body.setPosition(stone.body , {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectCollision(lstone,lmango)
{
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance <= lstone.r + lmango.r)
  {
	  Matter.Body.setStatic(lmango.body,false);
  }
}
function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x : 230,y : 400});
		chain.attach(stone.body);
	}
}

// 9550376304

