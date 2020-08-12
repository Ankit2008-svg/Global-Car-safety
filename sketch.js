var car1, wall1, car2, wall2, car3, wall3, car4, wall4;
var speed, weight;
var l1,l2,l3,l4,l5;

function setup() {

  createCanvas(1300,800);

  car1=createSprite(100, 100, 60, 40);
  car1.shapeColor="white";
  car2=createSprite(100, 300, 60, 40);
  car2.shapeColor="white";
  car3=createSprite(100, 500, 60, 40);
  car3.shapeColor="white";
  car4=createSprite(100, 700, 60, 40);
  car4.shapeColor="white";

  wall1=createSprite(1250, 100, 40, 70);
  wall1.shapeColor="grey";
  wall2=createSprite(1250, 300, 40, 70);
  wall2.shapeColor="gray";
  wall3=createSprite(1250, 500, 40, 70);
  wall3.shapeColor="grey";
  wall4=createSprite(1250, 700, 40, 70);
  wall4.shapeColor="grey";

  l1=createSprite(650,200,1300,5);
  l1.shapeColor="white";
  l2=createSprite(650,400,1300,5);
  l2.shapeColor="white";
  l3=createSprite(650,600,1300,5);
  l3.shapeColor="white";
  l4=createSprite(650,5,1300,5);
  l4.shapeColor="white";
  l5=createSprite(650,795,1300,5);
  l5.shapeColor="white";

  speed = random(55,90);
  weight = random(400,1500);
  
  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
   
}

function draw() {
  background(0,0,0);  
  
  if(wall1.x - car1.x < (car1.width + wall1.width)/2) {
    car1.velocityX= 0;
    
    var deformation=0.7* weight *speed* speed/22509; 
    
    if(deformation> 180){
      car1.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100) {
      car1.shapeColor=color(230,230,0);
    }
    if(deformation<100 && deformation>30){
    car1.shapeColor=color(0,255,0);
    }
  }

  if(wall2.x - car2.x < (car2.width + wall2.width)/2) {
    car2.velocityX= 0;
    var deformation=0.5* weight *speed* speed/22509; 
    
    if(deformation> 180){
      car2.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100) {
      car2.shapeColor=color(230,230,0);
    }
    if(deformation<100){
    car2.shapeColor=color(0,255,0);
    }
  }

  if(wall3.x - car3.x < (car3.width + wall3.width)/2) {
    car3.velocityX= 0;
    var deformation=0.6* weight *speed* speed/22509; 
    if(deformation> 180){
      car3.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100) {
      car3.shapeColor=color(230,230,0);
    }
    if(deformation<100){
    car3.shapeColor=color(0,255,0);
    }
  }

  if(wall4.x - car4.x < (car4.width + wall4.width)/2) {
    car4.velocityX= 0;
    var deformation=0.9* weight *speed* speed/22509; 
    if(deformation> 180){
      car4.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100) {
      car4.shapeColor=color(230,230,0);
    }
    if(deformation<100){
    car.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}
