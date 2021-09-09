let circle = document.querySelector('.content__circle');
let counter = document.querySelector('.circle__counter');
let switchColor = true;
let counterNumber = 1;

randomMove();

function moveCircle(x, y) {
    let circleStyle = window.getComputedStyle(circle);
    let circleY = parseInt(circleStyle.getPropertyValue('top'));
    let circleX = parseInt(circleStyle.getPropertyValue('left'));

    let time = 1000;
    let n = time / 5;
    let currentX = circleX;
    let currentY = circleY;
    let stepX = (x - currentX) / n;
    let stepY = (y - currentY) / n;
    let step = 0;

    let stopInterval = setInterval(() => {
        step++;

        if (n < step) {
            touchBall();
            clearInterval(stopInterval);
        } else {
            currentX += stepX;
            currentY += stepY;
            circle.style.top = Math.round(currentY) + 'px';
            circle.style.left = Math.round(currentX) + 'px';
        }
    }, 5);
}

function touchBall() {
    counter.innerHTML = counterNumber;
    counterNumber++;
    switchColor = !switchColor;

    if (switchColor) {
        circle.style.background = 'red';
    } else {
        circle.style.background = 'blue';
    }
}

function randomMove() {
    
    setInterval(() => {

        let randomBool = getRandomNumber(0, 1);
        let randomNext = getRandomNumber(0, 2);
        let randomPositoin = getRandomNumber(0, 400);

        let circleStyle = window.getComputedStyle(circle);
        let circleY = parseInt(circleStyle.getPropertyValue('top'));
        let circleX = parseInt(circleStyle.getPropertyValue('left'));
            
        if (circleX == 0 && circleY == 0) {
            if (randomBool == 0) {
                moveCircle(400, randomPositoin);
            } else {
                moveCircle(randomPositoin, 400);
            }
        } else if (circleX == 0 && circleY == 400) {
            if (randomBool == 0) {
                moveCircle(randomPositoin, 0);
            } else {
                moveCircle(400, randomPositoin);
            }
        } else if (circleX == 400 && circleY == 0) {
            if (randomBool == 0) {
                moveCircle(0, randomPositoin);
            } else {
                moveCircle(randomPositoin, 400);
            }
        } else if (circleX == 400 && circleY == 400) {
            if (randomBool == 0) {
                moveCircle(0, randomPositoin);
            } else {
                moveCircle(randomPositoin, 0);
            }
        } else if (circleX == 400) {
            if (randomNext == 0) {
                moveCircle(randomPositoin, 0);
            } else if (randomNext == 1) {
                moveCircle(0, randomPositoin);
            } else {
                moveCircle(randomPositoin, 400);
            }
        } else if (circleY == 400) {
            if (randomNext == 0) {
                moveCircle(0, randomPositoin);
            } else if (randomNext == 1) {
                moveCircle(randomPositoin, 0);
            } else {
                moveCircle(400, randomPositoin);
            }
        } else if (circleX == 0) {
            if (randomNext == 0) {
                moveCircle(randomPositoin, 0);
            } else if (randomNext == 1) {
                moveCircle(400, randomPositoin);
            } else {
                moveCircle(randomPositoin, 400);
            }
        } else if (circleY == 0) {
            if (randomNext == 0) {
                moveCircle(400, randomPositoin);
            } else if (randomNext == 1) {
                moveCircle(randomPositoin, 400);
            } else {
                moveCircle(0, randomPositoin);
            }
        }

    }, 100);
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

