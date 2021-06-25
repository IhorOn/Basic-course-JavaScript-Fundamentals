let set = [
    [2, 32, 1],
    [12, 45, 5],
    [56, 81, 7]
];

let setWidth = set[0].length;
let setHeight = set.length;

let setCon = [].concat(set[0], set[1], set[2]).sort((a, b) => a - b); //second

let setSort = [[], [], []]; // first

setCon.forEach((number, index) => {
    if (index <= 2) { //third
        setSort[0].push(number)
    } else if (index <= 5) {
        setSort[1].push(number)
    } else if (index <= 8) {
        setSort[2].push(number)
    }
});

console.log(setSort);







