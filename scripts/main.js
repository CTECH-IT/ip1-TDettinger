// Put your JavaScript here

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d")

let x = canvas.width / 2;
let y = canvas.height / 2;

let paddleHeight = 75;
let paddleWidth = 10;
let paddleX = (canvas.height - paddleHeight) / 2;

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.width - paddleWidth, paddleHeight, paddleWidth);
    ctx.strokeStyle = "rgba(0, 0, 225, 0.5)";
    ctx.stroke();
    ctx.closePath();
}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPaddle();
}

let interval = setInterval(draw, 10);