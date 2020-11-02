const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var score = 0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  ground1 = new Ground (400,300,300,10);
  box1 = new box (330,235,30,40);
  box2 = new box (360,235,30,40);
  box3 = new box (390,235,30,40);
  box4 = new box (420,235,30,40);
  box5 = new box (450,235,30,40);
  box6 = new box (360,195,30,40);
  box7 = new box (390,195,30,40);
  box8 = new box (420,195,30,40);
  box9 = new box (390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot (polygon,{x:100,y:200});

  
  
}

function draw() {
 
  Engine.update(engine); 
  text("Score  " + score, width-300, 50);
 
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  
  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();

  ellipseMode(RADIUS);
  ellipse(polygon.position.x,polygon.position.y,20,20)

  slingShot.display();

  ground1.display();
  
}

function mouseDragged(){
      Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingShot.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bgcolour = "black";
  }
  else{
      bgcolour = "yellow";
  }
}