const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
const World=Matter.World;
const Engine=Matter.Engine;
function setup() {
  createCanvas(3000,800);
  engine=Engine.create()
  world=engine.world;
  ball=new Ball(1000,400);
  rope=new Rope(ball.body,{x:1000,y:150});
  ground=new Ground(1500,680,3000,10);
  box1=new Box(900,630);
  box2=new Box(850,630);
  box3=new Box(800,630);
  box4=new Box(750,630);
  box5=new Box(700,630);
  box6=new Box(875,530);
  box7=new Box(825,530);
  box8=new Box(775,530);
  box9=new Box(725,530);
  box10=new Box(850,430);
  box11=new Box(800,430);
  box12=new Box(750,430);
  box13=new Box(825,330);
  box14=new Box(775,330);
  box15=new Box(800,230);
}

function draw() {
  Engine.update(engine);
  background(0);  
  ball.display();
  rope.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display()
  box9.display();
  box10.display();
  box11.display();
  box12.display()
  box13.display();
  box14.display();
  box15.display()
}

function mouseDragged(){
  Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}