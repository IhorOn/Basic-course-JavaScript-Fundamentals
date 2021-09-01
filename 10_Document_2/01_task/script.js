function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

let random = getRandomArbitrary(0, 400);
let circle = document.querySelector('.content__circle');
let counter = document.querySelector('.circle__counter');
let time = 1000;
let clearInt = setInterval(moveCircle, 5, 300, 100);
let currentX = 0;
let currentY = 0;
let n = time / 5;

function moveCircle(x, y) {
    let stepX = x / n;
    let stepY = y / n;

    currentX += stepX;
    currentY += stepY;
    
    if (currentY >= 400 || currentX >= 400) {
        clearInterval(clearInt);
        circle.style.background = 'blue';
        counter.innerHTML = 2;
    } else {
        currentX++;
        currentY++;
        circle.style.top = currentY + 'px';
        circle.style.left = currentX + 'px';
    }
};

// circle.style.top = random + 'px';
// circle.style.left = '400px'


