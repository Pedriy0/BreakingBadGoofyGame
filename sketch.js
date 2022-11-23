var PLAY = 1
var END = 0

var ww,wwmo,wwded,wwdedost
var ground, invground,groundimg
var obstucalo,obstucaloimg,persecutor,persecutormo
var obstucalogroup
var score =0
var game = PLAY



function preload(){
wwmo = loadAnimation("left.png","switch.png","right.png","switch.png");
wwdedost = loadImage("honk.png");
groundimg = loadImage("fundo.png");
obstucaloimg = loadImage("obstucalo.png");
persecutormo = loadAnimation("perse1.png","perse2.png","perse3.png");
}

function setup() {
 
    createCanvas(700,300);


ground= createSprite(200,180,400,20)
ground.addImage("ground",groundimg)
ground.scale = 1
invground = createSprite(350,260,1000,1)
invground.visible = false 


ww = createSprite(120,260,50,50);
ww.addAnimation("mo",wwmo);
ww.setCollider("rectangle", 0, 0, 20, 80);
ww.scale = 1.2

obstucalogroup = new Group()
obstucalogroup.setColliderEach('rectangle',0,0,20,80);

wwded = createSprite(120,200,50,50)
wwded.addImage(wwdedost)
wwded.scale = 0.2
wwded.visible = false 
}

function draw() {

if (game === PLAY){
 if (keyDown("space") && ww.y >+ 200) {
    ww.velocityY = -13; }

 
 ww.velocityY = ww.velocityY + 0.8;

 ground.velocityX = -3
 if (ground.x < 0){
    ground.x = ground.width/2 }

persecs()
if (obstucalogroup.isTouching(ww)){
    game = END
}
}
else if (game === END ) {

    wwded.visible = true
    ww.visible = false
    ground.velocityX = 0
    obstucalogroup.setLifetimeEach(-1)
    obstucalogroup.setVelocityXEach(0);
    
}

 ww.collide(invground)
 drawSprites()
}

function persecs() {

if (frameCount % 60 === 0) {
obstucalo = createSprite(900,220,10,40)
obstucalo.addImage(obstucaloimg)
    obstucalo.velocityX = -6
    obstucalo.lifetime = 300
    obstucalo.scale = 0.05
    obstucalogroup.add(obstucalo)
}

}