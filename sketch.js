
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, leftSide, rightSide, ball;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;
	
    var ball_options ={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
    ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);
    ground = new Ground(width/2,570,width,20);
	leftSide = new Ground(1000,500,20,120);
	rightSide = new Ground(1200,500,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  ellipse(ball.position.x,ball.position.y,20,20);
  ground.display();
  leftSide.display();
  rightSide.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, ball.position,{x:85, y:-85});
  }
}



