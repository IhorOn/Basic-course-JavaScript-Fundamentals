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

let liquidsRevers = {
	1.36: 'H',
	1: 'W',
	0.87: 'A',
	0.8: 'O',
};

let honey = 'H';
let water = 'W';
let alcohol = 'A';
let oil = 'O';

function transformToNumber(array) {
	let arrWidth = array[0].length;
	let arrHeight = array.length;

	for (let i = 0; i < arrHeight; i++) {
		let newArr = array[i];
		for (let j = 0; j < arrWidth; j++) {
			newArr[j] = liquids[newArr[j]];
		}
	}
};
transformToNumber(set)

let sortingArr = [];

function sorting(array) {
	let arrWidth = array[0].length;
	let arrHeight = array.length;

	for (let i = 0; i < arrHeight; i++) {
		let newArr = [];
		sortingArr.push(newArr);
	}

	let arrCon = [];

	for (let i = 0; i < arrHeight; i++) {
		arrCon = arrCon.concat(array[i]);
	}

	arrCon.sort((a, b) => a - b);

	for (let i = 0; i < arrCon.length; i++) {
		for (let j = 0; j < arrHeight; j++) {
			if (j * arrWidth <= i && i < (j + 1) * arrWidth) {
				sortingArr[j].push(arrCon[i]);
			};
		}
	}
};

sorting(set);

function transformToString(array) {
	let arrWidth = array[0].length;
	let arrHeight = array.length;

	for (let i = 0; i < arrHeight; i++) {
		let newArr = array[i];
		for (let j = 0; j < arrWidth; j++) {
			newArr[j] = liquidsRevers[newArr[j]];
		}
	}
};

transformToString(sortingArr);

console.log(sortingArr);







