function min(a, b) {
    a = +prompt('Первое число?')
    b = +prompt('Второе число?')

  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min());