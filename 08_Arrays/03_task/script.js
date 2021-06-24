let set = [
    [2, 32, 1],
    [12, 45, 5],
    [56, 81, 7]
];

let setCon = [].concat(set[0], set[1], set[2]).sort((a, b) => a - b);
let setSort = [[], [], []];

setCon.forEach((number, index) => {
    if (index <= 2) {
        setSort[0].push(number)
    } else if (index <= 5) {
        setSort[1].push(number)
    } else if (index <= 8) {
        setSort[2].push(number)
    }
});

console.log(setSort);







