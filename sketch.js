var hira , cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,
cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,
cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22;

var car ,target;
var edges;
var hira_img , target_img;
var cd1_img,bg,result;
function preload(){
    hira_img = loadAnimation("fish2.png");
  target_img = loadAnimation("treasure2.png");
  cd1_img = loadAnimation("coral.jpg");
  result = loadAnimation("win2.png");
} 
function setup(){
  createCanvas(windowWidth,windowHeight);
  
    // Moving background
  bg=createSprite(width/2,200);
  bg.addAnimation("background",cd1_img);
  bg.scale = 2;
  //bg.velocityX = -5; 
  
  hira=createSprite(45,25,18,18);
  hira.addAnimation("trex",hira_img);
  hira.scale = 0.2;
  //hira.debug = true;
  hira.setCollider("circle",0,0,10);

  // X position , Y position , width , height   
    cardboard1 = createSprite(50,120,100,20);
    cardboard1.shapeColor = "#32CD32";
    cardboard2 = createSprite(150,20,20,40);
      cardboard2.shapeColor = "#32CD32";
     cardboard3 = createSprite(700,height-100,150,20);
      cardboard3.shapeColor = "#32CD32";
     cardboard4 = createSprite(720,300,20,210);
      cardboard4.shapeColor = "#32CD32";
     cardboard5 = createSprite(130,210,150,20);
       cardboard5.shapeColor = "#32CD32";
     cardboard6 = createSprite(width-70,height-100,100,20);
       cardboard6.shapeColor = "#32CD32";
     cardboard7 = createSprite(400,120,20,150);
       cardboard7.shapeColor = "#32CD32";
     cardboard8 = createSprite(300,20,200,20);
       cardboard8.shapeColor = "#32CD32";
     cardboard9 = createSprite(500,70,20,150);
       cardboard9.shapeColor = "#32CD32";
     cardboard10 = createSprite(200,150,150,20);
       cardboard10.shapeColor = "#32CD32";
     cardboard11 = createSprite(750,50,100,20);
       cardboard11.shapeColor = "#32CD32";
     cardboard12 = createSprite(10,125,20,150);
       cardboard12.shapeColor = "#32CD32";
     cardboard13 = createSprite(220,250,20,100);
       cardboard13.shapeColor = "#32CD32";
     cardboard14 = createSprite(600,100,150,20);
       cardboard14.shapeColor = "#32CD32";
     cardboard15 = createSprite(100,300,20,100);
       cardboard15.shapeColor = "#32CD32";
     cardboard16 = createSprite(180,height-100,150,20);
       cardboard16.shapeColor = "#32CD32";
     cardboard17 = createSprite(30,height-200,20,100);
       cardboard17.shapeColor = "#32CD32";
     cardboard18 = createSprite(175,352,20,100);
       cardboard18.shapeColor = "#32CD32";
     cardboard19 = createSprite(280,290,20,100);
       cardboard19.shapeColor = "#32CD32";
     cardboard20 = createSprite(350,270,120,20);
       cardboard20.shapeColor = "#32CD32";
     cardboard21 = createSprite(250,390,100,20);
       cardboard21.shapeColor = "#32CD32";
     cardboard22 = createSprite(330,370,20,100);
       cardboard22.shapeColor = "#32CD32";
    cardboard23 = createSprite(450,310,100,20);
       cardboard23.shapeColor = "#32CD32";
     cardboard24 = createSprite(width-20,352,20,100);
       cardboard24.shapeColor = "#32CD32";
     cardboard25 = createSprite(width-70,352,20,100);
       cardboard25.shapeColor = "#32CD32";
     cardboard26 = createSprite(450,380,20,100);
       cardboard26.shapeColor = "#32CD32";
     cardboard27 = createSprite(350,420,120,20);
       cardboard27.shapeColor = "#32CD32";
     cardboard28 = createSprite(550,250,100,20);
       cardboard28.shapeColor = "#32CD32";
     cardboard29 = createSprite(width-300,height-500,20,180);
       cardboard29.shapeColor = "#32CD32";
  
       cardboard30 = createSprite(600,height-100,20,150);
       cardboard30.shapeColor = "#32CD32";

       cardboard31 = createSprite(width-200,height-200,200,20);
       cardboard31.shapeColor = "#32CD32";

       cardboard32 = createSprite(width-450,height-550,280,20);
       cardboard32.shapeColor = "#32CD32";

       cardboard33 = createSprite(width-600,height-470,200,20);
       cardboard33.shapeColor = "#32CD32";

       cardboard34 = createSprite(600,height-170,200,20);
       cardboard34.shapeColor = "#32CD32";

       cardboard35 = createSprite(850,400,20,210);
       cardboard35.shapeColor = "#32CD32";
  
       cardboard36 = createSprite(width-460,400,100,20);
       cardboard36.shapeColor = "#32CD32";

       cardboard37 = createSprite(width-440,250,20,210);
       cardboard37.shapeColor = "#32CD32";

       cardboard38 = createSprite(width-460,height-50,100,20);
       cardboard38.shapeColor = "#32CD32";

       cardboard39 = createSprite(width-460,height-10,20,80);
       cardboard39.shapeColor = "#32CD32";

       cardboard40 = createSprite(width-300,height-250,20,80);
       cardboard40.shapeColor = "#32CD32";

       cardboard41 = createSprite(width-300,height-300,200,20);
       cardboard41.shapeColor = "#32CD32";
       cardboard42 = createSprite(width-100,height-500,20,200);
       cardboard42.shapeColor = "#32CD32";
       cardboard43 = createSprite(width-180,height-500,200,20);
       cardboard43.shapeColor = "#32CD32";
       cardboard44 = createSprite(width-470,height-600,20,80);
       cardboard44.shapeColor = "#32CD32";
       cardboard45 = createSprite(width-990,height-80,20,200);
       cardboard45.shapeColor = "#32CD32";
       cardboard46 = createSprite(120,height-50,20,80);
       cardboard46.shapeColor = "#32CD32";
       cardboard46 = createSprite(140,height-180,200,20);
       cardboard46.shapeColor = "#32CD32";
       cardboard47 = createSprite(width-770,height-290,20,200);
       cardboard47.shapeColor = "#32CD32";
      
   target = createSprite(width-200,height-70,10,50);
    target.addAnimation("target",target_img);
    //target.debug = true;
    target.setCollider("circle",0,0,180);
    target.scale = 0.5;

}
function draw (){
  
  background("teal");
  
  
if ( hira.bounce(target))  
{
  var win= createSprite(width/2,height/2,10,50);
  win.addAnimation("win",result);
  win.scale = 1;
  hira.velocityX = 0;
  hira.velocityY = 0;
  target.velocityX = 0;
  target.velocityY = 0;
  }
  
 if (keyDown(UP_ARROW)){
   hira.velocityX = 0;
   hira.velocityY = -2;
  }
    if (keyDown(DOWN_ARROW)) {
    hira.velocityX = 0;
   hira.velocityY = 2;
  }
   if (keyDown(RIGHT_ARROW)) {
    hira.velocityX = 2;
   hira.velocityY = 0;
  }
   if (keyDown(LEFT_ARROW)) {
    hira.velocityX = -2;
   hira.velocityY = 0;
  }
  
  edges = createEdgeSprites();
  hira.bounceOff(edges);
  //target.bounceOff(edges[0]);
  
 if (hira.isTouching(cardboard1)||hira.isTouching(cardboard2)||
hira.isTouching(cardboard3)||hira.isTouching(cardboard4)||
hira.isTouching(cardboard5)||hira.isTouching(cardboard6)||
hira.isTouching(cardboard7)||hira.isTouching(cardboard8)||
hira.isTouching(cardboard9)||hira.isTouching(cardboard10)||
hira.isTouching(cardboard11)||hira.isTouching(cardboard12)||
hira.isTouching(cardboard13)||hira.isTouching(cardboard14)||
hira.isTouching(cardboard15)||hira.isTouching(cardboard16)||
hira.isTouching(cardboard17)||hira.isTouching(cardboard18)||
hira.isTouching(cardboard19)||hira.isTouching(cardboard20)||
hira.isTouching(cardboard21)||hira.isTouching(cardboard22)||
hira.isTouching(cardboard23)||hira.isTouching(cardboard24)||
hira.isTouching(cardboard25)||hira.isTouching(cardboard26)||
hira.isTouching(cardboard27)||hira.isTouching(cardboard28)||
hira.isTouching(cardboard29)||hira.isTouching(cardboard30)||
hira.isTouching(cardboard31)||hira.isTouching(cardboard32)||
hira.isTouching(cardboard33)||hira.isTouching(cardboard34)||
hira.isTouching(cardboard35)||hira.isTouching(cardboard36)||
hira.isTouching(cardboard37)||hira.isTouching(cardboard38)||
hira.isTouching(cardboard39)||hira.isTouching(cardboard40)||
hira.isTouching(cardboard41)||hira.isTouching(cardboard42)||
hira.isTouching(cardboard43)||hira.isTouching(cardboard44)||
hira.isTouching(cardboard45)||hira.isTouching(cardboard46)||hira.isTouching(cardboard47) )
{
  hira.x = 45;
  hira.y = 25;
  hira.velocityX = 0;
  hira.velocityY = 0;
}
  
  drawSprites();
}