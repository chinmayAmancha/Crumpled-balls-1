class paper{
	constructor(){
		var options = {
			isStatic: false,
			restitution: 0.3,
			friction: 0.5,
			density: 1.2
		}
	}
}

class dustbin{

}

class Ground{

}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  
  drawSprites();
 
  keyPressed();
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



