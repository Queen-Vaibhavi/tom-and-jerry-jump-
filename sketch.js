
var tom,jerry;
var tomImage1,jerryImage1;
var tomImage2,jerryImage2;
var tomImage3,jerryImage3;
var bgImage;

function preload() {

    
    //load the images here
    tomImage1 = loadAnimation("images/cat1.png");
    tomImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImage3 = loadAnimation("images/cat4.png");

    jerryImage1 = loadAnimation("images/mouse1.png");
    jerryImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImage3 = loadAnimation("images/mouse4.png");
    
    bgImage = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     
    
    tom = createSprite(800,610,40,40);
    tom.addAnimation("tomSitting",tomImage1);
    tom.scale = 0.2;

    
    jerry = createSprite(120,610,20,20);
    jerry.addAnimation("jerryCheese",jerryImage1);
    jerry.scale = 0.15;

tom.setCollider("rectangle",0,0,150,100);
jerry.setCollider("rectangle",0,0,150,100);

tom.debug = true;
jerry.debug = true;

    
}

function draw() {

    background(bgImage);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
         tom.velocityX = 0;
         tom.addAnimation("tomStopping",tomImage3);
         tom.changeAnimation("tomStopping");

         jerry.addAnimation("jerryMagnify",jerryImage3);
        jerry.changeAnimation("jerryMagnify");
   
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tomRunning",tomImage2);
        tom.changeAnimation("tomRunning");

        jerry.addAnimation("jerryDancing",jerryImage2);
        jerry.changeAnimation("jerryDancing");
   
    }
}
