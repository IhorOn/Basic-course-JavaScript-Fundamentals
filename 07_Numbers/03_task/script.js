
function hotpo(num) {
    let number = num;
    let counter = 0;

    while (number !== 1) {
        if (number % 2 === 0) {
            number = number / 2;
        } else  {
            number = 3 * number + 1;
        }

        counter++;
        console.log(number)
    }
    return counter;
}

console.log(hotpo(23));

