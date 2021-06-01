
function hotpo(num) {
    for (let i = 1; i <= num; i++) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = 3 * num + 1;
        }
        console.log(num)
    }
}
console.log(hotpo(23))