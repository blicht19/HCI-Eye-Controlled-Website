// TODO: Add Background Image
// TODO: Add Borders
// TODO: Add Variable Speed
// TODO: Spawn many small, few big cells

let button, mainCell, gameOver;
let enemyCells = [];

function setup() {
    let gameCanvas = createCanvas(window.innerWidth * 0.8, window.innerHeight * 0.8);
    gameCanvas.parent("game-box");

    gameSetup();
}

function gameSetup() {
    noLoop();
    gameOver = false;
    //TODO: Add class to make button look nicer
    button = createButton('Start');
    button.size(100, 50);
    button.position((width - 50) / 2, (height - 100) / 2);
    button.parent("game-box");
    button.mousePressed(startGame);

    mainCell = new Cell(width / 2, height / 2, height / 5, 'red');
    enemyCells = [];
    //TODO: Block out range of starting cell for enemies to spawn
    enemyCells = Array.from({ length: 20 }, () => new Cell(
        random(-width, 2 * width),
        random(-height, 2 * height),
        random(height / 4)
    ));

    background('#BCBBBA');
    enemyCells.forEach(cell => cell.show());
    mainCell.show();

}

function startGame() {
    button.hide();
    loop();
}

function draw() {
    background('#BCBBBA');
    mainCell.show();

    enemyCells.forEach((cell, i, arr) => {
        // mainCell stays in the middle while enemies all move at the same heading
        let v = createVector(mouseX, mouseY);
        v.sub(mainCell.pos);
        cell.move(v.heading());

        cell.show();

        // Checks if mainCell consumes any smaller cell
        if (cell.pos.dist(mainCell.pos) < (0.5 * (cell.d + mainCell.d))) {
            if (cell.d <= mainCell.d) {
                mainCell.d += cell.d * 0.1;
                arr.splice(i, 1);
            } else {
                gameOver = true;
            }
        }
    })

    if (gameOver) {
        window.alert("Game Over. Play Again?");
        gameSetup();
    } 
}