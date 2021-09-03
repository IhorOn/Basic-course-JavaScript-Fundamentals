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

        if (currentY >= y && currentX >= x) {
        clearInterval(clearInt);
        circle.style.background = 'blue';
        counter.innerHTML = 2;
    } else {
        circle.style.top = currentY + stepY + 'px';
        circle.style.left = currentX + stepX + 'px';
    }
    }, 5);
    console.log(x, y);
}

function randomMove() {
    let randomBool = getRandomNumber(0, 1);
    let randomPositoin = getRandomNumber(0, 400);

    if (randomBool == true) {
        moveCircle(400, randomPositoin);
        // console.log('true')
    } else {
        moveCircle(randomPositoin, 400);
        // console.log('false')
    }
    // console.log(randomBool, randomPositoin)
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



