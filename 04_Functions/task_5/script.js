function primeNumber(num) {

    mark:
    for (let i = 2; i < num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                continue mark;
            }
        }
        console.log(i);
    }
}
primeNumber(120);


// function isPrimeNumber(n) {
//     let result;

//     for (let i = 2; i < n; i++) {
//         if (checkPrimery() === i)
//             return result;
//     }
    
   
// }

// console.log(isPrimeNumber(10));

// function checkPrimery(num) {
//     let isPrime = true;
    
//     for (let i = 2; i < num; i++) {
//         if (num % i !== 0) continue;
//         isPrime = false;
//     }

//     return isPrime;
// }

// console.log(checkPrimery(109));



