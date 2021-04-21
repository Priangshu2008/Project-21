var fixSprite1, fixSprite2,  fixSprite3,  fixSprite4 ;
var movingSprite;
var music;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

movingSprite=createSprite(random(10,750),100,40,40);
movingSprite.shapeColor=("white");
movingSprite.velocityX=6;
movingSprite.velocityY=9;


fixSprite1=createSprite(100,590,180,20);
fixSprite1.shapeColor=("red");

fixSprite2=createSprite(300,590,180,20);
fixSprite2.shapeColor=("green");

fixSprite3=createSprite(500,590,180,20);
fixSprite3.shapeColor=("blue");

fixSprite4=createSprite(700,590,180,20);
fixSprite4.shapeColor=("yellow");

}

function draw() {
    background(rgb(10,10,10));

   edges=createEdgeSprites();
   movingSprite.bounceOff(edges);

    

if(movingSprite.isTouching(fixSprite4)){
  music.play()
  movingSprite.shapeColor=("yellow");
  movingSprite.bounceOff(fixSprite4); 

}




 if(movingSprite.isTouching(fixSprite3)){
  music.stop()
  movingSprite.shapeColor=("blue");
  movingSprite.velocityX=0;
  movingSprite.velocityY=0;

}

 if(movingSprite.isTouching(fixSprite2)){
  music.play()
  movingSprite.shapeColor=("green");
  movingSprite.bounceOff(fixSprite2)
  

}

 if(movingSprite.isTouching(fixSprite1)){
  music.play()
  movingSprite.shapeColor=("red");
  movingSprite.bounceOff(fixSprite1)

}

if (movingSprite.y<0){
  music.stop()
  movingSprite.velocityY=3
}



drawSprites()



}










