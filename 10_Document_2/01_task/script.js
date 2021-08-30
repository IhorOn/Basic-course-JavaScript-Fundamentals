function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
};

let random = getRandomArbitrary(0, 400);
let circle = document.querySelector('.content__circle');
let counter = document.querySelector('.circle__counter');
let position = 0;
let clearInt = setInterval(moveCircle, 5);

function moveCircle() {
    if (position == 400) {
        clearInterval(clearInt);
        circle.style.background = 'blue';
        counter.innerHTML = 2;
    } else {
        position++;
        circle.style.top = position + 'px';
        circle.style.left = position + 'px';
    }
}

// circle.style.top = random + 'px';
// circle.style.left = '400px'


