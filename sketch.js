
var tom,jerry;
var tomImage,jerryImage;
var tomImg,jerryImg;
var bg,bgImage;
function preload() {

    
    //load the images here
    tomImage = loadImage("images/cat1.png");
    tomImg = loadAnimation("images/cat2.png","images/cat3.png");

    jerryImage = loadImage("images/mouse1.png");
    jerryImg = loadAnimation("images/mouse2.png","images/mouse3.png");
    
    bgImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     
    var bg = createSprite(500,300,1800,800);
    bg.addImage(bgImage);
    bg.scale = 1.5;
    
    var tom = createSprite(800,610,40,40);
    tom.addImage(tomImage);
    //tom.addAnimation(tomImg);
    tom.scale= 0.2;
    
    var jerry = createSprite(120,610,20,20);
    jerry.addImage(jerryImage);
    //jerry.addAnimation(jerryImg);
    jerry.scale= 0.2;
    
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
