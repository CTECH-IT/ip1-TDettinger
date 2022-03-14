// Put your JavaScript here

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d")

let x = canvas.width / 2;
let y = canvas.height / 2;

let paddleHeight = 75;
let paddleWidth = 10;
let paddleX = (canvas.height - paddleHeight) / 2;

let dx = 2;
let dy = -2;

let ballRadius = 10;

let UpPressed = false;
let DownPressed = false;

let score = 000;

function restart() {
    document.location.reload();
    clearInterval(interval);
}

function waitingKeypress() {
    return new Promise((resolve) => {
      document.addEventListener('keydown', onKeyHandler);
      function onKeyHandler(e) {
        if (e.keyCode === 13) {
          document.removeEventListener('keydown', onKeyHandler);
          resolve();
        }
      }
    });
  }

function myFunction() {
    document.getElementById("myDialog").open = true;
    clearInterval(interval);
    

}

function speed() {
    2 * dx
}

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

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPaddle1();
    drawPaddle2();

    drawBall();

   drawScore();

    // paddle controls
    if (UpPressed) {
        paddleX -= 7;
        if (paddleX < 0) {
            paddleX = 0;
        }
    }
    else if (DownPressed) {
        paddleX += 7;
        if (paddleX + paddleHeight > canvas.height) {
            paddleX = canvas.height - paddleHeight;
        }
    }


    // change the x and y values for the ball
    x += dx;
    y += dy;


    /*
    // check if we have gone off the board
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    
    if (y + dy < ballRadius) { //ceiling check
        dy = -dy;
    }
    
    if (y - dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {// side check
        if (y > paddleX && y < paddleX + paddleHeight) { // paddle check
            dx = -dx;
        } else { // it hit the wall!
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval); // Needed for browser to end game
        }
    }
    */


    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        if(y > paddleX && y < paddleX + paddleHeight + 10) {
            dx = -dx;
        
        } else {
            myFunction(); 
            
            


        }
    
    } 
    /*
    if (x - dx < ballRadius) { // wall check
        dx = -dx;
    } else if (x + dx > canvas.width-ballRadius) {
        if(x < canvas.width && x > paddleX + paddleHeight) {
            dx = -dx;
        } else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
        }
    } */
}


function keyDownHandler(e) {
    if (e.key == "Up" || e.key == "ArrowUp") {
        UpPressed = true;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        DownPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Up" || e.key == "ArrowUp") {
        UpPressed = false;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        DownPressed = false;
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let interval = setInterval(draw, 10);

function mouseMoveHandler(e) {
    let relativeY = e.clientY - canvas.offsetTop;
    if (relativeY > 0 && relativeY < canvas.height) {
        paddleX = relativeY - paddleHeight / 2;
    }
}

document.addEventListener("mousemove", mouseMoveHandler, false);

function points() {
    score++;
}

function speed() {
    dy = 1.3 * dy;
    dx = 1.3 * dx;
}

function speed2() {
    dy = 1.3 * dy;
    dx = 1.3 * dx;
}

function speed3() {
    dy = 1.2 * dy;
    dx = 1.4 * dx;
}


let interval2 = setInterval(points, 1000);
let interval3 = setInterval(speed, 10000);
let interval4 = setInterval(speed2, 20000);
let interval5 = setInterval(speed3, 30000);
