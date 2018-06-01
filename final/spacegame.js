var scene;
var ship;
var timer;
var time;
var gui;
var score = 0;


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

    time = 0;
    timer.reset();
    score = 0;
    scene.start();
}

function init() {
    gui = document.getElementById('gui');
    timer = new Timer();
    scene = new Scene();
    scene.setSize(800,700);
    ship = new Ship();
    starfield = new Sprite(scene, 'https://pm1.narvii.com/6391/4889ac29fcb0d63d61ad3fa050e71f8d032e8271_hq.jpg', 2000,1000);
    starfield.setSpeed(0);
    scene.start();
}
function update() {
   scene.clear(); 
   checkTime();
   updateGUI();
   starfield.update();
    ship.checkKeys();
   ship.update(); 
}