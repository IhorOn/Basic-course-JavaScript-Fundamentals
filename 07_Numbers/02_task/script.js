function calc(a, b) {

    if (a.includes('px', -2) && b.includes('px', -2)) {
        sum = parseFloat(a) + parseFloat(b) + a.slice(-2);

    } else if (a.includes('rem', -3) && b.includes('rem', -3)) {
        sum = parseFloat(a) + parseFloat(b) + a.slice(-3);

    } else if (a.includes('em', -2) && b.includes('em', -2)) {
        sum = parseFloat(a) + parseFloat(b) + a.slice(-2);

    } else if (a.includes('%', -1) && b.includes('%', -1)) {
        sum = parseFloat(a) + parseFloat(b) + a.slice(-1);

    } else {
        sum = 'Error';
    }
    return sum;
}

console.log(calc('10px', '500px'));
console.log(calc('20%', '30%'));
console.log(calc('3rem', '2.6rem'));
console.log(calc('10em', '20%'));