const grid = [[0, 1, 2], [3, 4, 5]];
deepMap(grid, item => 10 * item);


function deepMap(newGrid, func) {
	let arrItem = []
	newGrid = grid.map(item => {
		let arrNum = []

		arrItem.push(arrNum)
		
		item.map(num => {
			arrNum.push(func(num))
		})
	})
	console.log(arrItem)
}



