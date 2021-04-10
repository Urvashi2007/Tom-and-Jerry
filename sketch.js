var mouse,mouseImg,mouseImg1,mouseImg2
var cat ,catImg,catImg1,catImg2
var garden,gardenImg
function preload() {
    //load the images here
    mouseImg=loadAnimation("images/mouse1.png")
    mouseImg1=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg2=loadAnimation("images/mouse4.png")
    catImg=loadAnimation("images/cat1.png")
    catImg1=loadAnimation("images/cat2.png","images/cat3.png")
    catImg2=loadAnimation("images/cat4.png")
    gardenImg=loadAnimation("images/garden.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   mouse=createSprite(200,600)
   mouse.addAnimation("mouseStanding",mouseImg)
   mouse.scale=0.15
   cat=createSprite(200,600)
   cat.addAnimation("catSleeping",catImg)
   cat.scale=0.2
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityx=0
    cat.addAnimation("cat",catImg2)
    cat.x=300
    cat.scale=0.2
    mouse.addAnimation("mouse",mouseImg2)
    mouse.scale=0.15

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode==LEFT_ARROW){
    cat.velocityx=-5
    cat.addAnimation("catRunning",catImg1)
    cat.changeAnimation("catRunnong",catImg1)
    mouse.addAnimation("mouseTeasing",mouseImg1)
    mouse.changeAnimation("mouseTeasing",mouseImg1)
    
    mouse.frameDelay=25
}

}
