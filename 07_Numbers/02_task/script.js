function sum(a, b) {
    if (a.indexOf('px') != -1 && b.indexOf('px') != -1) {
        sum = parseFloat(a) + parseFloat(b) + a.slice(-2);
        return sum;

    } else if (a.indexOf('rem') != -1 && b.indexOf('rem') != -1) {
        sum = parseFloat(a) + parseFloat(b) + a.slice(-3);
        return sum;
    } else if (a.indexOf('em') != -1 && b.indexOf('em') != -1) {
        sum = parseFloat(a) + parseFloat(b) + a.slice(-2);

    } else if (a.indexOf('%') != -1 && b.indexOf('%') != -1) {
        sum = parseFloat(a) + parseFloat(b) + a.slice(-1);
        return sum;

    } else {
        sum = 'Error'
        return sum;
    }
}

console.log(sum('100px', '50px'));