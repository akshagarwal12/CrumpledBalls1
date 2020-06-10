var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var paper,ground1,basket
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(200,350,50)


	

	//Create a Ground
	ground1 = new Ground (400, 650, 800, 100 );
	bottom=new Ground(600,585,200,30)
	left= new Ground(500,540,30,120)
	right= new Ground(700,540,30,120)

	Engine.run(engine);
  
}




function draw() {

  
  rectMode(CENTER);
  background(0);
	ground1.display();
	paper.display();
	bottom.display();
	left.display();
	right.display();
  drawSprites();
 
}
function keyPressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-180})
	}

}



