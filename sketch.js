const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas;
var engine,world;

var ground;
var ball;

function setup() {
  canvas=createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic:true
  };
  ground = Bodies.rectangle(400,380,800,20,ground_options);
  World.add(world,ground);

  console.log(ground.position.x+","+ground.position.y);

  var ball_options={
    restitution:0.8
  }
  ball = Bodies.circle(400,100,20,ball_options);
  World.add(world,ball);
  
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,800,20);
  fill("blue")
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20)
  
}