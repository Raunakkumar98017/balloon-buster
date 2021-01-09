// create variables
var bow, bow_animation, blueballoonGroup,                         blueballoon_animation, pinkballoonGroup,                     pinkballoon_animation,redballoonGroup,
    redballoon_animation,  greenballoonGroup,                     greenballoon_animation,ground,                               arrow,arrowGroup,arrowImage;                      
var groundImage; 

var score=0;

//load all the image and animation
  function preload(){
        bow_animation= loadAnimation("bow0.png")

        blueballoon_animation =                                         loadAnimation("blue_balloon0.png")

        pinkballoon_animation =                                         loadAnimation("pink_balloon0.png")

        redballoon_animation=                                          loadAnimation("red_balloon0.png")

        greenballoon_animation=                                        loadAnimation("green_balloon0.png")

        groundImage = loadImage("background0.png")

         arrowImage = loadImage("arrow0.png")
  }

  function setup() {
        createCanvas(550, 450);
// create ground
        ground= createSprite(15,15,550,450)
        ground.addImage(groundImage);
        ground.scale=2.7

    // create bow
        bow= createSprite(530,225,10,50);
        bow.addAnimation("up&down", bow_animation)
// create groups
        arrowGroup = new Group();
        blueballoonGroup = new Group();
        redballoonGroup = new Group();
        greenballoonGroup = new Group();
        pinkballoonGroup = new Group();
    
  }

  function draw() {
      background("white");
      bow.y= mouseY

         ground.velocityX=4

       if (ground.x>450) {

             ground.x = ground.width/2;

          }

       if ( keyDown("space")) {

            Arrow() ;

          

          }
   var balloon = Math.round(random(1,4));

      if (World.frameCount%110===0) {

            if(balloon===1){

              blueballoon();

            }  else if (balloon===2){

              redballoon();

            } else if ( balloon===3){

              pinkballoon();

            } else if(balloon===4){

              greenballoon();
            }


     }
 
       if(arrowGroup.isTouching(blueballoonGroup)){
         blueballoonGroup.destroyEach();
         arrowGroup.destroyEach();
         score=score+2
       }
      
     
       if(arrowGroup.isTouching(redballoonGroup)){
         redballoonGroup.destroyEach();
         arrowGroup.destroyEach();
         score=score+4
       }
      

       if(arrowGroup.isTouching(pinkballoonGroup)){
         pinkballoonGroup.destroyEach();
         arrowGroup.destroyEach();
         score=score+3
       }
      
    
       if(arrowGroup.isTouching(greenballoonGroup)){
        greenballoonGroup.destroyEach();
         arrowGroup.destroyEach();
         score=score+5
       }

 
    drawSprites() ;
    fill("black");
    textSize(20);
   text("score ="+score,20,30);
}
  function blueballoon() {
    var blueballoon=   createSprite(0,10,15,15);
    
    blueballoon.addAnimation("balloon",  blueballoon_animation)
    
    blueballoon.y=Math.round(random(20,400));
    
    blueballoon.velocityX=2;
    
    blueballoon.scale=0.1;
    
    blueballoon.lifetime = 290;
    
    blueballoonGroup.add(blueballoon);
  }

  function redballoon() {
    
    var redballoon=   createSprite(0,10,15,15);
   
    redballoon.addAnimation("balloon",  redballoon_animation)
   
    redballoon.y=Math.round(random(20,400));
   
    redballoon.velocityX=2;
   
    redballoon.scale=0.1;
    
    
    redballoon.lifetime = 290;
    
    redballoonGroup.add(redballoon);
  }
  function pinkballoon() {
   
    var pinkballoon=   createSprite(0,10,15,15);
  
    pinkballoon.addAnimation("balloon",  pinkballoon_animation)
    
    pinkballoon.y=Math.round(random(20,400));
   
    pinkballoon.velocityX=2;
   
    pinkballoon.scale=1.2
    
    pinkballoon.lifetime = 290;
    
    pinkballoonGroup.add(pinkballoon);
  }

  function greenballoon() {
   
    var greenballoon=   createSprite(0,10,15,15);
    
    greenballoon.addAnimation("balloon",  greenballoon_animation)
   
    greenballoon.y=Math.round(random(20,400));
    
    greenballoon.velocityX=2;
   
    greenballoon.scale=0.1;
    
    greenballoon.lifetime = 290;
    
    greenballoonGroup.add(greenballoon);
  }

function Arrow() {
       
      arrow = createSprite(530,225,20,40);

      arrow.addImage(arrowImage);

      arrow.velocityX = -6;
     
      arrow.y = bow.y;   

      arrow.scale = 0.4;
      
      arrow.lifetime = 110;
     
      arrowGroup.add(arrow);
}