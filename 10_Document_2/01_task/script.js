function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
let random = getRandomArbitrary(0, 500);

let circle = document.querySelector('.content__circle');

let content = document.querySelector('.content');

circle.style.top = random + 'px';
circle.style.left = '400px'

