const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var object_options ={
    isStatic:true
  }
  object = Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);

}

function draw() {
  background("black"); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,80,50);
  drawSprites();
}