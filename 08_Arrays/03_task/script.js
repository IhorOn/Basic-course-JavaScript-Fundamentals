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

let liquidsRevers = tableRevers(liquids);
let sortingArr = [];
let arrConcat = [];
let arrWidth = set[0].length;
let arrHeight = set.length;

transformTypeElem(set, liquids);

copyStructure(set);

expandToList(set);

arrConcat.sort((a, b) => a - b);

recordsSourceArray(arrConcat);

transformTypeElem(sortingArr, liquidsRevers);

function tableRevers(liquids) {
	let liquidsRevers = {};

	for (let key in liquids) {
		liquidsRevers[liquids[key]] = key;
	};

	return liquidsRevers;
};

function transformTypeElem(array, table) {
	for (let i = 0; i < arrHeight; i++) {
		let newArr = array[i];
		for (let j = 0; j < arrWidth; j++) {
			newArr[j] = table[newArr[j]];
		};
	};
};

function copyStructure() {
	for (let i = 0; i < arrHeight; i++) {
		let newArr = [];
		sortingArr.push(newArr);
	}
};

function expandToList(array) {
	for (let i = 0; i < arrHeight; i++) {
		arrConcat = arrConcat.concat(array[i]);
	};
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







