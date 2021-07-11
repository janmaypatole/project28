
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var stone 
var tree
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);v

console.log("hi")
	engine = Engine.create();
	world = engine.world;

	
   stone = new Stone(200,400,40,50)
   tree = new Tree(400,400,30,20)

   console.log("hi")

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();
  stone.display();
  
  drawSprites();
 
}



