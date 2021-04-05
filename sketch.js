
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1,stone1,tree1;
var mango1,mango2,mango3,mango4,mango5;
var base1,base2,base3,base4,base5;

var boyIMG,treeIMG,stoneIMG,mangoIMG,slingshotIMG,fortIMG;
var ground1,slingshot1;

var wall1,wall2,wall3;

function preload()
{
	//boyIMG=loadImage("Images/boy.png");
	//treeIMG=loadImage("Images/tree.png");
	stoneImg=loadImage("stone.png");
	mangoIMG=loadImage("mango.png");
	slingshotIMG=loadImage("Slingshot.jpg");
	fortIMG=loadImage("fort.png")

}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	ground1=new ground(800,750,1600,100);
	World.add(world,ground1);

	wall1=new ground(600,220,20,200);
	World.add(world,wall1);

	wall2=new ground(800,600,20,150);
	World.add(world,wall2);

	wall3=new ground(1150,170,20,240);
	World.add(world,wall3);

	
	stone1=new Stone(210,500);
	World.add(world,stone1);

	mango1=new mango(1000,450);
	World.add(world,mango1);
	base1=new Basefix(985,480,40,10);
	World.add(world,base1);
	
	mango2=new mango(1400,400);
	World.add(world,mango2);
	base2=new Basefix(1385,430,40,10);
	World.add(world,base2);

	mango3=new mango(900,250);
	World.add(world,mango3);
	base3=new Basefix(885,280,40,10);
	World.add(world,base3);

	mango4=new mango(1300,300);
	World.add(world,mango4);
	base4=new Basefix(1285,330,40,10);
	World.add(world,base4);

	mango5=new mango(1150,470);
	World.add(world,mango5);
	base5=new Basefix(1135,500,40,10);
	World.add(world,base5);

	slingshot1=new SlingShot(stone1.body,{x:125, y:600});
	World.add(world,slingshot1);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");

  ground1.display();

  

  

  //image(boyIMG,190,450,150,350);
  //image(treeIMG,800,0,750,800);
  image(slingshotIMG,150,600,50,100);
  image(fortIMG,800,100,750,600);

  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  //base1.display();
  //base2.display();
  //base3.display();
  //base4.display();
  //base5.display();

  wall1.display();
  wall2.display();
  wall3.display();

  //slingshot1.display();


  drawSprites();
 

  
}


function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot1.attach(stone1.body);
	}
}
