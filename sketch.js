const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11;
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;

var Ground1, Ground2, Ground3;

var chain;
var poly;
var ball;
var hexImg;
var score;

function preload() {

    polyImg = loadImage("poly.png");
   

  }
  
  function setup() {
  
    createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;
  
    
    strokeWeight(2);
    score=0;
  
    block1 = new Block(600, 260, 30, 40);
    block2 = new Block(570, 260, 30, 40);
    block3 = new Block(540, 260, 30, 40);
    block4 = new Block(630, 260, 30, 40);
    block5 = new Block(660, 260, 30, 40);
  
  
    block6 = new Block(585, 220, 30, 40);
    block7 = new Block(555, 220, 30, 40);
    block8 = new Block(615, 220, 30, 40);
    block9 = new Block(645, 220, 30, 40);
  
  
    block10 = new Block(600, 170, 30, 40);
    block11 = new Block(570, 180, 30, 40);
    block12 = new Block(630, 180, 30, 40);
  
  
    block13 = new Block(600, 140, 30, 40);
  
    ground1 = new Ground(600,285,200,10);
    ground2 = new Ground(900, 195, 200, 10);
    ground3 = new Ground(750, 600, 1500, 20);
  
  
    block14 = new Block(900, 170, 30, 40);
    block15 = new Block(930, 170, 30, 40);
    block16 = new Block(870, 170, 30, 40);
    block17 = new Block(840, 170, 30, 40);
    block18 = new Block(960, 170, 30, 40);
  
  
    block19 = new Block(900, 140, 30, 40);
    block20 = new Block(930, 140, 30, 40);

    poly = new Poly(55, 190, 30, 30);
  
    ball = Bodies.circle(50, 200, 20);
    World.add(world, ball);
  
    chain = new Chain(this.ball,{x:150, y:160});

    
     
  }
  
  function draw() {
  
    background("turquoise");
  
    Engine.update(engine);
    fill("black");
    textSize(25)
    text("SCORE:"+ score ,1150,80);
   
  
    fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
  
    fill("lightBlue");
    block6.display();
    block7.display();
    block8.display();
    block9.display();
  
    fill(rgb("lavender"));
    block10.display();
    block11.display();
    block12.display(); 
    block13.display();
  
    fill("lime");
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
  
    fill("orange");
    block19.display();
    block20.display();
   

    chain.display();
  
    imageMode(CENTER);
    image(polyImg, ball.position.x, ball.position.y, 50, 45);
  
  
    ground1.display();
    ground2.display();
    ground3.display();
    block1.score();
      block2.score();
      block3.score();
      block4.score();
      block5.score();
      block6.score();
      block7.score();
      block8.score();
      block9.score();
      block10.score();
      block12.score();
      block13.score();
      block14.score();
      block15.score();
      block16.score();
      block17.score();
      block18.score();
      block19.score();
      block20.score();
   

  
  
  }
  
  
  function mouseDragged() {
  
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
  
  }
  
  
  function mouseReleased() {
  
    chain.fly();
  
  }
  
  
  function keyPressed() {
  
      if(keyCode === 32) {
       
          chain.attach(this.ball);
    }
    
  }
