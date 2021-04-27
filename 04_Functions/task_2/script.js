function pow(x, n) {
    x = +prompt('Число?');
    n = +prompt('Степень?');
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log(pow());
