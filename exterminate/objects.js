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