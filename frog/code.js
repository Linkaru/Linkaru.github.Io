var scene;
var fly;
var frog;
var flies;
var NUMFLIES = 3;
var MAXTIME = 10;
var timer;
var time;
var gui;
var score = 0;

function Fly() {
   //sets a temporary sprite object
   tFly = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_7/fly.png",20,20);
   //sets the speed of the sprite object
   tFly.setSpeed(10);
   //create a function to simulate a fly's flight pattern.
   tFly.wriggle = function() {
       //random fly angle--improve this later
       newDir = (Math.random() * 90)-45;
       this.changeAngleBy(newDir);
       
   };
   
   tFly.reset = function(){
       //set new random position
       newX =  Math.random() * this.cWidth;
       newY = Math.random() * this.cHeight;
       this.setPosition(newX, newY);
   };
   tFly.reset();
   return tFly;
}

function Frog(){
    tFrog = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_7/frog.png", 50,50);
    tFrog.maxSpeed = 10;
    tFrog.minSpeed = -3;
    tFrog.setSpeed(0);
    tFrog.setAngle(0);
    
    tFrog.checkKeys = function(){
        if(keysDown[K_LEFT]){
            this.changeMoveAngleBy(-5);
        }
        if(keysDown[K_RIGHT]){
            this.changeMoveAngleBy(5);
        }
        if(keysDown[K_UP]){
            this.changeSpeedBy(1);
        }
        if(keysDown[K_DOWN]){
            this.changeSpeedBy(-1);
            if(this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);
            }
        }
    };
    
    return tFrog;
}

function checkCollisions(indexFly){
    if(frog.collidesWith(flies[indexFly])){
        flies[indexFly].reset();
        score += 10;
    }
}

function setupFlies(){
    flies = [];
    for(var i = 0; i < NUMFLIES; i++){
        flies.push(new Fly());
    }
}

function checkTime(){
    time = timer.getElapsedTime();
    if(time > MAXTIME){
        scene.stop();
    }
}

function updateGUI(){
    gui.innerHTML = "Score: " + score + "  Time: " + time;
}

function restart(){
   // document.location.href = "";
    time = 0;
    timer.reset();
    score = 0;
    scene.start();
}
//sets the scene,calls the update function,creates the sprites
function init() {
    gui = document.getElementById('gui');
    timer = new Timer();
    scene = new Scene();
    scene.setBG("green");
    scene.setSize(300,400);
    setupFlies();
    frog = new Frog();
    leaves = new Sprite(scene, 'http://aharrisbooks.net/h5g/h5g_7/leaves.png', 400,450);
    leaves.setSpeed(0);
    scene.start();
}
//makes things move,draws things to the canvas,

function update() {
    //clears scene 
   scene.clear(); 
   checkTime();
   updateGUI();
   //MOVE THINGS
   leaves.update();
   
    for(var i=0; i < flies.length; i++){
        flies[i].wriggle;
        checkCollisions(i);
        flies[i].update();
    }   
    
   frog.checkKeys();
   //REDRAW THINGS
   frog.update(); 
}