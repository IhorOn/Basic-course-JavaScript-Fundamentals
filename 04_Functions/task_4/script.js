function checkPrimery(num) {
    let isPrime = true;
    
    for (let i = 2; i < num; i++) {
        if (num % i !== 0) continue;
        isPrime = false;
    }

    return isPrime;
}

console.log(checkPrimery(109));
