let set = [
    [2, 32, 1],
    [12, 45, 5],
    [56, 81, 7]
];

let setWidth = set[0].length;
let setHeight = set.length;

let setSort = [];

for (let i = 0; i < setHeight; i++) {
    let newArr = [];
    setSort.push(newArr);
}

let setCon = [];

for (let i = 0; i < setHeight; i++) {
    setCon.concat(set[i]);
}
setCon.sort((a, b) => a - b)

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







