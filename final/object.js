function Fly() {
   tFly = new Sprite(scene, "https://korokorocafe.files.wordpress.com/2014/07/anime_onigiri.png",25,25);
   tFly.setSpeed(10);
   tFly.wriggle = function() {
       newDir = (Math.random() * 90)-45;
       this.changeAngleBy(newDir);
       
   };
   
   tFly.reset = function(){
       newX =  Math.random() * this.cWidth;
       newY = Math.random() * this.cHeight;
       this.setPosition(newX, newY);
   };
   tFly.reset();
   return tFly;
}

function Ship(){
    tShip = new Sprite(scene, "https://a.fsdn.com/con/app/proj/partartspace/screenshots/Spaceship15.png/245/183/1", 100,100);
    tShip.maxSpeed = 10;
    tShip.minSpeed = -3;
    tShip.setSpeed(0);
    tShip.setAngle(0);
    
    tShip.checkKeys = function(){
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
    
    return tShip;
}
