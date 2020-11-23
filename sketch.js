
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var treeIMG,treeSprite;
var boyIMG,boySprite;
var stone;
var engine, world;

function preload()
{
	treeIMG=loadImage("sprites/Plucking mangoes/tree.png")
	boyIMG=loadImage("sprites/Plucking mangoes/boy.png")
	
}

function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER)

	treeSprite=createSprite(1100, 300, 10,10);
	treeSprite.addImage(treeIMG)
	treeSprite.scale=0.4

    boySprite=createSprite(500, 470, 10,10);
	boySprite.addImage(boyIMG)
	boySprite.scale=0.10


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Create the Bodies Here.


	Engine.run(engine);

	stone = new Stone(100,100)
	
  
	slingshot = new Slingshot(stone.body, {x: 200, y:100});

}

function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 slingshot.display();
 stone.display();
}

//function mouseDragged(){
    //Matter.Body.setPosition(stone.body, {x: mouseX, y:mouseY});
//}
//function mouseReleased(){
   //slingshot.fly();
//}


