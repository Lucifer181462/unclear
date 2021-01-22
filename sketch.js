
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, log1, log2, log3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ball = new Ball(100, 300, 10, 10);

	log1 = new Log(505, 305, 70, 70);

	ground = new Ground(width / 2, 400, width, 10);
  
}


function draw() {

	

  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ball.display();
  log1.display();
  
	 keyPressed();
}


function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.Body, ball.Body.position,
			{x:85,
				y:-85})
	}
}
