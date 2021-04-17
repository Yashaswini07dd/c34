const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18; 
var  slingshot;
var ball;

//var gameState = "onSling";



function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (500,790,1000,30);
    box1 = new Box (850,780,40,40);
    box2 = new Box (890,780,40,40);
    box3 = new Box (850,780,40,40);
    box4 = new Box (890,780,40,40);
    box5 = new Box (850,780,40,40);
    box6 = new Box (890,780,40,40);
    box7 = new Box (850,780,40,40);
    box8 = new Box (890,780,40,40);
    box9 = new Box (850,780,40,40);
    box10 = new Box (890,780,40,40);
    box11 = new Box (850,780,40,40);
    box12 = new Box (890,780,40,40);
    box13 = new Box (850,780,40,40);
    box14 = new Box (890,780,40,40);
    box15 = new Box (850,780,40,40);
    box16 = new Box (890,780,40,40);
    box17 = new Box (850,780,40,40);
    box18 = new Box (890,780,40,40);
   slingshot = new SlingShot(ball.body,{x:600, y:50});

ball = new Ball(600,600,70);






}

function draw(){
   
    background("lightblue");
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
box2.display();
box3.display();

box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();

ball.display();
slingshot.display();





}

//function mouseDragged(){
   // if (gameState!=="launched"){
      //  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
   // }
//}



