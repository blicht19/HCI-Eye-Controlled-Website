// TODO: Add Background Image
let button, mainCell;
let foes = [];

function setup() {
    let gameCanvas = createCanvas(window.innerWidth * 0.8, window.innerHeight * 0.8);
    gameCanvas.parent("game-box");

    noLoop();

    button = createButton('Start');
    button.size(100, 50);
    button.position((width - 50) / 2, (height - 100) / 2);
    button.parent("game-box");
    button.mousePressed(startGame);

    mainCell = new Cell(width / 2, height / 2, height / 5, 'red');

    //TODO: Block out range of starting cell for enemies to spawn
    enemyCells = Array.from({ length: 10 }, () => new Cell(
        random(width),
        random(height),
        random(height / 4)
    ));
}

function startGame() {
    button.hide();
    loop();
}

function draw() {
    background("#BCBBBA");
    mainCell.show();

    enemyCells.forEach((enemy) => {
        enemy.show();
    })
}