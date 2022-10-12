// TODO: Add Background Image
let button;

function setup() {
    let gameCanvas = createCanvas(window.innerWidth * 0.8, window.innerHeight * 0.8);
    gameCanvas.parent("game-box");
    
    noLoop();

    button = createButton('Start');
    button.size(100,50);
    button.position((width-50)/2, (height-100)/2);
    button.parent("game-box");
    button.mousePressed(startGame);
}

function startGame() {
    button.hide();
    loop();
}

function draw() {
    background("#BCBBBA");

}