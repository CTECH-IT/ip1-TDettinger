// Put your JavaScript here

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d")

let x = canvas.width / 2;
let y = canvas.height / 2;

let paddleHeight = 75;
let paddleWidth = 10;
let paddleX = (canvas.height - paddleHeight) / 2;

let ballRadius = 10;

function drawPaddle1() {
    ctx.beginPath();
    ctx.rect(canvas.width - paddleWidth, paddleX, paddleWidth, paddleHeight);
    ctx.strokeStyle = "#0095DD";
    ctx.stroke();
    ctx.closePath();
}
function drawPaddle2() {
    ctx.beginPath();
    ctx.rect(0, paddleX, paddleWidth, paddleHeight);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}


function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPaddle1();
    drawPaddle2();

    drawBall();

}

let interval = setInterval(draw, 10);