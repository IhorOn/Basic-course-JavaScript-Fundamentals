const grid = [[0, 1, 2], [3, 4, 5]];
deepMap(grid, item => 10 * item);

function deepMap(newGrid, func) {
	newGrid = grid.map(item => {
		item.map(num => {
			func(num)
			console.log(func(num));
		})
	})
}



