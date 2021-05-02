var tom,jerry;
var tomImage,jerryImage;
var tomimg,jerryimg;
var bg,bgImage;
function preload() {

    
    //load the images here
    tomImage = loadImage("images/cat1.png");
    tomimg = loadAnimation("images/cat2.png","images/cat3.png");

    jerryImage = loadImage("images/mouse1.png");
    jerryimg = loadAnimation("images/mouse2.png","images/mouse3.png");
    
    bgImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     
    var bg = createSprite(1000,1000,1800,800);
    bg.addImage(bgImage);
    bg.scale = 5;
    
    var tom = createSprite(500,800,20,20);
    tom.addAnimation(tomImage);
    tom.scale= 0.7;
    
    var jerry = createSprite(800,500,20,20);
    jerry.addAnimation(jerryImage);
    jerry.scale= 0.7;
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning",tomimg);
        tom.changeAnimation("tomRunning");
    }
}
