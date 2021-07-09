var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");


}


function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


  
//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);

  rabbit.x = World.mouseX;


  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApples();
  
  drawSprites();
}

function spawnApples() {
if(framecount % 80 === 0){
apple = createSprite(200,100,10,10);
apple.addImage(appleImg);
apple.x = Math.round(random(100,300));
apple.velocityY = 2;





}
}




































