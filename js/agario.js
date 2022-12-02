// TODO: Add Background Image
// TODO: Add Borders
// TODO: Add Variable Speed
// TODO: Spawn many small, few big cells
// TODO: Make other cells move

let button, mainCell, gameOver;
let enemyCells = [];
let eyeX, eyeY;

function setup() {
    window.saveDataAcrossSessions = true
    webgazer.setGazeListener((data, timestamp) => {
        eyeX = data.x;
        eyeY = data.y;
    }).begin()
    let gameCanvas = createCanvas(window.innerWidth * 0.8, window.innerHeight * 0.8);
    gameCanvas.parent("game-box");

    gameSetup();
}

function gameSetup() {
    
    background('#BCBBBA');
    gameOver = false;
    //TODO: Add class to make button look nicer
    button = createButton('Start');
    button.size(100, 50);
    button.position((width - 50) / 2, (height - 100) / 2);
    button.parent("game-box");
    button.mousePressed(startGame);

    mainCell = new Cell(width / 2, height / 2, height / 5, 'red');
    enemyCells = [];
    enemyCells.length = 20;
    for(let i = 0; i < 20; i++)
    {
        while(true) {
            let cell = new Cell(
                random(-width, 2 * width),
                random(-height, 2 * height),
                random(height / 4)
            );
            if(cell.pos.dist(mainCell.pos) < (0.5 * (cell.d + mainCell.d))) {
                continue;
            }
            else {
                enemyCells[i] = cell;
                break;
            }
        }
    }

    background('#BCBBBA');
    enemyCells.forEach(cell => cell.show());
    resetMatrix();
    mainCell.show();
    noLoop();
}

function startGame() {
    button.hide();
    loop();
}

function draw() {
    background('#BCBBBA');
    
    let v = createVector(eyeX, eyeY);
    v.sub(createVector(width/2, height/2));
    mainCell.move(v.heading() - PI);

    translate(width/2-mainCell.pos.x, height/2-mainCell.pos.y);

    mainCell.show();
    enemyCells.forEach((cell, i, arr) => {
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