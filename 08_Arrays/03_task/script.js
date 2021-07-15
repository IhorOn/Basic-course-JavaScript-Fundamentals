let set = [
	['H', 'H', 'W', 'O'],
	['W', 'W', 'O', 'W'],
	['H', 'H', 'O', 'O'],
];

let liquids = {
	'H': 1.36,
	'W': 1,
	'A': 0.87,
	'O': 0.8,
};

let liquidsRevers = {};
let sortingArr = [];
let arrConcat = [];
let arrWidth = set[0].length;
let arrHeight = set.length;

tableRevers(liquids);

transformTypeElem(set, liquids);

copyOriginalArray(set);

concatToOneArray(set);

sortArray(arrConcat);

recordsSourceArray(arrConcat);

transformTypeElem(sortingArr, liquidsRevers);

function tableRevers(liquids) {
	for (let key in liquids) {
		liquidsRevers[liquids[key]] = key;
	};
};

function transformTypeElem(array, table) {
	for (let i = 0; i < arrHeight; i++) {
		let newArr = array[i];
		for (let j = 0; j < arrWidth; j++) {
			newArr[j] = table[newArr[j]];
		};
	};
};

function copyOriginalArray() {
	for (let i = 0; i < arrHeight; i++) {
		let newArr = [];
		sortingArr.push(newArr);
	}
};

function concatToOneArray(array) {
	for (let i = 0; i < arrHeight; i++) {
		arrConcat = arrConcat.concat(array[i]);
	};
};

function sortArray(array) {
	array.sort((a, b) => a - b);
};

function recordsSourceArray(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < arrHeight; j++) {
			if (j * arrWidth <= i && i < (j + 1) * arrWidth) {
				sortingArr[j].push(arrConcat[i]);
			};
		};
	};
};

console.log(sortingArr);







