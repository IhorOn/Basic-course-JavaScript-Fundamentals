let circle = document.querySelector('.content__circle');
let counter = document.querySelector('.circle__counter');
let time = 1000;
let currentX = 0;
let currentY = 0;
let n = time / 5;

randomMove();

function moveCircle(x, y) {
    let stepX = x / n;
    let stepY = y / n;

    let clearInt = setInterval(() => {
        currentX += stepX;
        currentY += stepY;

    if (currentY >= y || currentX >= x) {
        // clearInterval(clearInt);
        circle.style.background = 'blue';
        counter.innerHTML = 2;
        randomMove();
    } else {
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

