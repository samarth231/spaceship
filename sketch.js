var iss,spaceBg,spaceCraft1,spaceCraft2,spaceCraft3,spaceCraft4
var hasDocked = false
var isS
var spaceCraft;

function preload(){
  iss = loadImage("./s/iss.png");
  spaceBg = loadImage("./s/spacebg.jpg");
  spaceCraft1 = loadImage("./s/spacecraft1.png");
  spaceCraft2 = loadImage("./s/spacecraft2.png");
  spaceCraft3 = loadImage("./s/spacecraft3.png");
  spaceCraft4 = loadImage("./s/spacecraft4.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  isS = createSprite(500,500,80,80);
  isS.addAnimation("iss",iss);
  spaceCraft = createSprite(380,650,20,20);
  spaceCraft.addAnimation("spacecraft",spaceCraft1);
  spaceCraft.scale = 0.3;
}

function draw() {
  background(spaceBg);  


  
    //C41 //TA
    
    if (keyIsDown(RIGHT_ARROW)) {
      spaceCraft.changeAnimation("right",spaceCraft4);
      spaceCraft.x = spaceCraft.x+1;
     }

      if (keyIsDown(LEFT_ARROW)) {
       spaceCraft.changeAnimation("left",spaceCraft3);
       spaceCraft.x = spaceCraft.x-1;
      }

      if (keyIsDown(UP_ARROW)) {
        spaceCraft.changeAnimation("up",spaceCraft2);
        spaceCraft.y = spaceCraft.y-1;
       }
    

  

  drawSprites();
}
