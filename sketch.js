
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	var canvas = createCanvas(700,800);

  engine = Engine.create();
	world = engine.world;

  paper1 = new Paper(150,750,50,50);
  
  dustbin2 = new Dustbin(500,height-60,250,20);
  dustbin1 = new Dustbin(634,height-112.5,20,125);
  dustbin3 = new Dustbin(380,height-112.5,20,125)

  var options = {
    isStatic: true
  }
	ground = Bodies.rectangle(width/2,height-40,width,20,options);
  World.add(world, ground);
  
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  rect(ground.position.x,ground.position.y,width,20);
  paper1.display(); 
  dustbin2.display();
  dustbin1.display();
  dustbin3.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paper1.body,paper1.body.position,{x:17,y:-17});
  }
}

