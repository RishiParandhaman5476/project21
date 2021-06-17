var canvas;
var music;
var box1
var box2
var box3
var box4
var square

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(0, 580, 360, 30);
    box1.shapeColor = "blue";

    box2 = createSprite(295, 580, 200 ,30);
    box2.shapeColor = "orange";

    box3 = createSprite(515, 580, 200 ,30);
    box3.shapeColor = "red";

    box4 = createSprite(740, 580, 220 ,30);
    box4.shapeColor = "green";
    //create box sprite and give velocity
square = createSprite(random(20, 750), 100 ,40, 40);
square.shapeColor = "white";
square.velocityX = 4;
square.velocityY = 8;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
 edges = createEdgeSprites();
square.bounceOff(edges);

if(box1.isTouching(square)){
square.bounceOff(box1)
square.shapeColor = "blue";
music.play();
}

if(box2.isTouching(square)){
    square.bounceOff(box2)
    square.shapeColor = "orange";
    music.play();    
    square.velocityX = 0;
    square.velocityY = 0;
}
    
if(box3.isTouching(square)){
    square.bounceOff(box3)
    square.shapeColor = "red";
    music.play();
}
    
if(box4.isTouching(square)){
    square.bounceOff(box4)
    square.shapeColor = "green";
    music.play();
}
drawSprites();
    //add condition to check if box touching surface and make it box
}
