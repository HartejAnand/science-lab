const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;
var world,engine;


var ground;
var table;
var beaker1,beaker2;
var microscope;
var burner;
var tube1,tube2,tube3,tube4;
var glass1,glass2,glass3,glass4,glass5,glass6;
var light1,light2,wire1,wire2;
var telescope;

function setup() {

  engine = Engine.create();
  world = engine.world;
  createCanvas(windowWidth,windowHeight);


  ground = new Ground(windowWidth/2,windowHeight-5,windowWidth*4,30);
  //table
  table = new Wood(windowWidth*2/3,windowHeight*2/3,windowWidth/2,windowHeight/4);
  //science stuff
  beaker1=new Beaker(windowWidth*1.75/3,windowHeight/2,windowWidth/20,windowHeight/10);
  beaker2=new Beaker(windowWidth/2,windowHeight/2,windowWidth/18,windowHeight/8);
  microscope=new Microscope(windowWidth*2/3,windowHeight/2,windowWidth/10,windowHeight/5);
  burner=new Burner(windowWidth*1.1/3,windowHeight*5/6,windowWidth/10,windowHeight/5);
  glass1=new Glass(windowWidth*2.3/3,windowHeight/2,windowWidth/20,windowHeight/10);
  glass2=new Glass(windowWidth*2.4/3,windowHeight/2,windowWidth/20,windowHeight/10);
  glass3=new Glass(windowWidth*2.5/3,windowHeight/2,windowWidth/20,windowHeight/10);
  glass4=new Glass(windowWidth*2.325/3,windowHeight/3,windowWidth/20,windowHeight/10);
  glass5=new Glass(windowWidth*2.475/3,windowHeight/3,windowWidth/20,windowHeight/10);
  glass6=new Glass(windowWidth*2.4/3,windowHeight/4,windowWidth/20,windowHeight/10);
  //tube1=new Tube(windowWidth*1/3,windowHeight*5/6,windowWidth/10,windowHeight/5);
  telescope=new Telescope(windowWidth/6,windowHeight*2/3,windowWidth/4,windowHeight/2);

  //dangling lights
  light1=new Light(windowWidth/4,windowHeight/10,windowWidth/30,windowHeight/10);
  wire1=new Chain(light1.body,{x:windowWidth/4, y:0});
  light2=new Light(windowWidth*2.5/4,windowHeight/10,windowWidth/30,windowHeight/10);
  wire2=new Chain(light2.body,{x:windowWidth*2.5/4, y:0});


  Engine.run(engine);
}

function draw() {
  Engine.update(engine)
  background(230,230,230);  

  ground.display();
  table.display();
  beaker1.display();
  beaker2.display();
  microscope.display();
  burner.display();
  glass1.display();
  glass2.display();
  glass3.display();
  glass4.display();
  glass5.display();
  glass6.display();
  //tube1.display();
  wire1.display();
  light1.display();
  wire2.display();
  light2.display();
  telescope.display();


  drawSprites();

  textSize(windowWidth/15);
  fill(50,50,50);
  text("Fire-proof",table.body.position.x-windowWidth/8, table.body.position.y);
}

function mouseDragged(){
  Matter.Body.setPosition(burner.body, {x: mouseX , y: mouseY});
}