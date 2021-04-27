function primeNumber(num) {
    num = prompt('Number?');

    mark:
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j <= i; j++) {
            if (i % j === 0) {
                continue mark;
            }
        }
        console.log(i);
    }
}

primeNumber();