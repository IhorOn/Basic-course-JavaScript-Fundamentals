function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

let random = getRandomArbitrary(0, 400);
let circle = document.querySelector('.content__circle');
let counter = document.querySelector('.circle__counter');
let position = 0;
let clearInt = setInterval(moveCircle, 5, 390,112);

function moveCircle(x,y) {
    if (x == 400 || y == 400) {
        clearInterval(clearInt);
        circle.style.background = 'blue';
        counter.innerHTML = 2;
    } else {
        x += 2;
        y += 2;
        circle.style.top = x + 'px';
        circle.style.left = y + 'px';
    }
}

// circle.style.top = random + 'px';
// circle.style.left = '400px'


