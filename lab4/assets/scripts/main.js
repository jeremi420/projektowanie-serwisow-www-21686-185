var canvas = document.getElementById("myCanvas");
var score = document.getElementById("score");
var bestScore = document.getElementById("bestScore");
var ctx = canvas.getContext("2d");

// var x = 0;
// var y = 0;
var ballRadius = 10;
var cw = 10;
var direction = "right"
var initLength = 4;
var snake = [];
var food = null;
var interval = null;
var points = 0;
var bestPoints = 0;

var delay = 100;

function generateFood() {
    food = {
        x: Math.floor(Math.random() * (canvas.width / cw)),
        y: Math.floor(Math.random() * (canvas.height / cw)),
    };
}

function initSnake() {
    snake = [];
    for(var i = initLength-1; i >=0 ; i--) {
        snake.push({
            x: i,
            y: 0
        })
    }
}

function drawCell(x,y) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(170, 170, 170)";
    ctx.arc(
        x * cw + 6,
        y * cw + 6,
        4,
        0,
        2 * Math.PI,
        false
    );
    ctx.fill();
    ctx.closePath();
}
function drawFood() {
    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.arc(food.x * cw + 6, food.y * cw + 6, 4, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
}
function drawBorder() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
    ctx.stroke();
    ctx.closePath();
}
function collisionOccured(x, y) {
    if(x === -1 || y === -1 || x == (canvas.width / cw) || y == (canvas.height / cw)) return true;
    return false;
}
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameOver() {
    clearInterval(interval);
    score.innerHTML = "Wynik: 0";
    if(points > bestPoints) {
        bestPoints = points;
        bestScore.innerHTML = "Najlepszy wynik: " + bestPoints;
    }
    alert(`koniec gry\ntwoje punkty: ${points}\n najlepszy wynik: ${bestPoints}`);
    newGame();
}
function tick() {
    clear();
    drawBorder();
    var { x, y } = snake[0];
    switch (direction) {
        case "up":
            y = y - 1;
            break;
        case "down":
            y = y + 1;
            break;
        case "right":
            x = x + 1;
            break;
        case "left":
            x = x - 1;
            break;
    }
    var tail = {};
    if (
        collisionOccured(x, y) ||
        snake.filter((el) => el.x === x && el.y === y).length
    ) {
        return gameOver();
    }
    if(x === food.x && y === food.y) {
        generateFood();
        points = points + 1;
        score.innerHTML = "Wynik: " + points;
    } else {
        tail = snake.pop();
    }
    tail.x = x;
    tail.y = y;
    snake.unshift(tail);
    drawSnake();
    drawFood();
}
function drawSnake() {
    for (i = 0; i < snake.length; i++) {
        drawCell(snake[i].x, snake[i].y);
    }
}

function newGame() {
    direction = "right";
    points = 0;
    initSnake();
    generateFood();
    drawSnake();
    drawFood();
    drawBorder();
    interval = setInterval(tick, delay);
}

function handleKeyDown(e) {
    switch(e.keyCode) {
        case 37:
            if(direction !== "right") direction = "left";
            break;
        case 38:
            if (direction !== "down") direction = "up";
            break;
        case 39:
            if (direction !== "left") direction = "right";
            break;
        case 40:
            if (direction !== "up") direction = "down";
            break;
    }
}
document.addEventListener("keydown", handleKeyDown);

newGame();

// initSnake();
// generateFood();
// tick();