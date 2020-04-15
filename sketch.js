const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var engine;
var world;
var rain = [];
var individualRain;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world1;
  Engine.run(engine);


  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 

  individualRain = new Rain(random(0, 800),1);

  rain.push(indivitulrain);

  rain.display();
  rain.remove();

}