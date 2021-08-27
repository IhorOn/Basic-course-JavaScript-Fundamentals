function getRandom() {
  return Math.random();
}
console.log(getRandom());

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(0, 500))