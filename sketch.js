
var canvas,fixedRect,movingRect;

function setup()
{
 canvas=createCanvas(800,800);
 fixedRect=createSprite(200,100,50,50);
 movingRect=createSprite(300,100,50,50);

 fixedRect.shapeColor="blue";
 movingRect.shapeColor="blue";

 fixedRect.debug=false;
 movingRect.debug=false;


}

function draw()
{
 background("gold");
 movingRect.x=mouseX;
 movingRect.y=mouseY;
 
 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 )
 {
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
 }
 else
 {
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
 }
 drawSprites();


}