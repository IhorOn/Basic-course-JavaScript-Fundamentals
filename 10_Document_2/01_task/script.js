function getRandom() {
  return Math.random();
}
console.log(getRandom());

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(0, 500));

let circle = document.querySelector('.content__circle');

let content = document.querySelector('.content');

circle.style.left = '400px'
circle.style.top = '220px'