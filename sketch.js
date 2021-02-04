const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 
  var option = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,option);
  World.add(world,ground);
  console.log(ground);
  
  var ball_option = {
    restitution: 1
  }
  ball= Bodies.circle(200,200,25,ball_option);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  fill("orange")
  rectMode(CENTER);
   rect (ground.position.x,ground.position.y,400,20);

   ellipseMode(CENTER);
   ellipse(ball.position.x,ball.position.y,25,25);
}