var game;
var starfield;
var ship;

function Cake(){
    tcake = new Sprite(game, "https://i.pinimg.com/originals/b1/7d/85/b17d8508df6819ba59caee031e6b9ed6.png", 25,25);
    tcake.setPosition(100,180);
    
    return tcake;
}

function Ship(){
    tShip = new Sprite(game, "https://media.giphy.com/media/HiAkI3OZy8sq4/giphy.gif",50,50);
    
    
      
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

function init(){
    
    game = new Scene(); 
    starfield = new Sprite(game, 'https://www.publicdomainpictures.net/pictures/190000/velka/black-background-1468370534d5s.jpg', 2000, 1000);
    starfield.setSpeed(0);
    ship = new Ship();
    cake = new Cake();

    
    game.start();
}

function update(){
    game.clear();
    starfield.update();
    ship.update();
    ship.checkKeys();
    cake.update();

    
    
}
