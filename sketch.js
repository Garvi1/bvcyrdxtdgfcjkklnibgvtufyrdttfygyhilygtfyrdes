const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var umbrella;
var maxDrops = 100;
var Drops = []
var t1,t2,t3,t4;
var thundercreated = 0;
var thunder;
function preload(){
    t1 = loadImage('1.png')
    t2 = loadImage('2.png')
    t3 = loadImage('3.png')
    t4 = loadImage('4.png')
}

function setup(){
createCanvas(400,400)

//umbrella = new Umbrella(200,300)
for(var i=0; i<maxDrops; i++){
    maxDrops.push(new createDrop(random(0,400),random(0,400)));  
        }
engine = Engine.create();
world = engine.world;    
}

function draw(){
    Engine.update(engine);
    for(var i=0; i<maxDrops; i++){
    Drops[i].showDrops()
    Drops[i].update()
    }
  //  umbrella.display()
    var rand =  Math.round(random(1,4));
    if(frameCount%80==0){
        thundercreated = frameCount
        thunder = createSprite(random(10,370),random(10,370)
        ,10,10)
        switch(rand){
            case 1:thunder.addImage(t1)
            break;
            case 2:thunder.addImage(t2)
            break;
            case 3:thunder.addImage(t3)
            break;
            case 4:thunder.addImage(t4)
            break;
            default:break;
        }
    }
    
    
    drawSprites();
}   

