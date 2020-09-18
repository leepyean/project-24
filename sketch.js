
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin, dustbin2, dustbin3, paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(1200, 510, 20, 200)
	dustbin2 = new Dustbin(1000, 510, 20, 200)
	dustbin3 = new Dustbin(1100, 600, 200, 20)
	paperObject = new Paper(200, 450, 70)
	groundObject=new Ground(width/2,620,width,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
  groundObject.display();
  
  drawSprites();
 
}
 function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:130, y:-145})
	}
 }


