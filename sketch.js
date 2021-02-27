
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof, rope, bgImg;

function preload(){
	bgImg = loadImage("bg.png");
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(490,100,250,30);

	bob1 = new Bob(330,450);
	bob2 = new Bob(410,450);
	bob3 = new Bob(490,450);
	bob4 = new Bob(570,450);
	bob5 = new Bob(650,450);

	rope1 = new Rope(bob1.body,{x : 330, y : 100});
	rope2 = new Rope(bob2.body,{x : 410, y : 100});
	rope3 = new Rope(bob3.body,{x : 490, y : 100});
	rope4 = new Rope(bob4.body,{x : 570, y : 100});
	rope5 = new Rope(bob5.body,{x : 650, y : 100});

	World.gravity = 0;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  
  drawSprites();
 
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(bob1.body,bob1.body.position,{x:-420,y:0});

	}
}

