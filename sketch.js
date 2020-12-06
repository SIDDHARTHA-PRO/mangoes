
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render=Matter.Render;
var boyImage,launcherobj,stoneobj,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12
function preload()
{
	boy=loadImage("images/boy.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	ground= new Ground(width/2,670,1000,10)
    stoneobj= new stone(130,540,30)
	tree= new Tree(900,680,50,50)
	launcherobj= new launcher(stoneobj.body,{x:130,y:540})
	  m1=new  Mangoes(800,250,30);
	  m2=new  Mangoes(720,250,30);
	  m3=new  Mangoes(750,350,30);
	  m4=new  Mangoes(800,350,30);
	  m5=new  Mangoes(900,350,30);
	  m6=new  Mangoes(850,350,30);
	  m7=new  Mangoes(600,350,30);
	  m8=new  Mangoes(650,390,30);
	  m9=new  Mangoes(950,350,30);
	  m10=new Mangoes(820,300,30);
	  m11=new Mangoes(800,350,30);
	  m12=new Mangoes(680,300,30);


	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("brown");
  ground.display();
  tree.display();
  image (boy,80,480,250,250)
  stoneobj.display();
 launcherobj.display();
 m1.display();
 m2.display();
 m3.display();
 m4.display();
 m5.display();
 m6.display();
 m7.display();
 m8.display();
 m9.display();
 m10.display();
 m11.display();
 m12.display();
 detectollision(stoneobj,m1);
 detectollision(stoneobj,m2);
 detectollision(stoneobj,m3);
 detectollision(stoneobj,m4);
 detectollision(stoneobj,m5);
 detectollision(stoneobj,m6);
 detectollision(stoneobj,m7);
 detectollision(stoneobj,m8);
 detectollision(stoneobj,m9);
 detectollision(stoneobj,m10);
 detectollision(stoneobj,m11);
 detectollision(stoneobj,m12);
}
 function mouseDragged(){
 {
	 Matter.Body.setPosition(stoneobj.body, {x:mouseX, y:mouseY}) 
 }
 
 
}

function mouseReleased()
{
	launcherobj.fly();
}
function detectollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
    {

  	  Matter.Body.setStatic(lmango.body,false);
    }

  
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneobj.body, {x:235, y:420}) 
		launcherobj.attach(stoneobj.body);
	}
}
