var scene;
var paddle;
var ball;

var CHANGE=5;


function Paddle() {
    tpaddle = new Sprite(scene, "paddle.png", 100, 19);
    tpaddle.setAngle(180);
    tpaddle.setSpeed(0);

    tpaddle.checkKeys = function() {
        if (keysDown[K_UP]) {
            this.changeYby(-CHANGE);
            if (this.y - this.width / 2 < 0) {
                this.setY(this.width / 2);
            }
        }

        if (keysDown[K_DOWN]) {
            this.changeYby(CHANGE);
            if (this.y + this.width / 2 > scene.height) {
                this.setY(scene.height - this.width / 2);
            }
        }

    };
    
    return tpaddle;
}

function init() {

    scene = new Scene();
    scene.setSize(300,300);
    paddle = new Paddle();
    paddle2 = new Paddle();
    paddle2.setSpeed(10);
    paddle2.setBoundAction(BOUNCE);
    paddle.setPosition(15, scene.height / 2);
    paddle2.setPosition(scene.width - 15, scene.height / 2);
    ball = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_5/redBall.png", 50, 50);
    ball.setMoveAngle(30);
    ball.setSpeed(10);
    ball.setBoundAction(BOUNCE);
    
    scene.start();
    

}

function update() {
    scene.clear();
    paddle.checkKeys();
    paddle.update();
    paddle2.update();
    ball.update();
}