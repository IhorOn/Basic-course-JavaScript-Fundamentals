let circle = document.querySelector('.content__circle');
let counter = document.querySelector('.circle__counter');

// randomMove();
moveCircle(400, 250);
setTimeout(moveCircle, 2000, 50, 150);

function moveCircle(x, y) {
    let circleStyle = window.getComputedStyle(circle);
    let circleY = parseInt(circleStyle.getPropertyValue('top'));
    let circleX = parseInt(circleStyle.getPropertyValue('left'));

    let time = 1000;
    let n = time / 5;
    let stepX = x / n;
    let stepY = y / n;
    let currentX = 0;
    let currentY = 0;
    currentX = circleX - currentX
    currentY = circleY - currentY
    let step = 0;
    console.log(currentX,currentY)
    console.log(circleX,circleY)
    setInterval(() => {
        step++;

        if (n <= step) {
            circle.style.background = 'blue';
            counter.innerHTML = 2;
        } else {
            currentX += stepX;
            currentY += stepY;
            circle.style.top = currentY + stepY + 'px';
            circle.style.left = currentX + stepX + 'px';
        }
    }, 5);
}

function randomMove() {
    let randomBool = getRandomNumber(0, 1);
    let randomNext = getRandomNumber(0, 2);
    let randomPositoin = getRandomNumber(0, 400);

    let circleStyle = window.getComputedStyle(circle);
    let circleY = parseInt(circleStyle.getPropertyValue('top'));
    let circleX = parseInt(circleStyle.getPropertyValue('left'));

    setInterval(() => { 
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
        }, 1000);
}

// function randomMove() {
//     let randomBool = getRandomNumber(0, 1);
//     let randomPositoin = getRandomNumber(0, 400);

//     if (randomBool == true) {
//         moveCircle(400, randomPositoin);
//     } else {
//         moveCircle(randomPositoin, 400);
//     }
// }

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

