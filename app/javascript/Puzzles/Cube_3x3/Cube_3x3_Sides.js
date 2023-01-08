// ------------------ Variables
let set_pos = [
		// Bottom layer
	  [-1, -1,  1], [ 0, -1,  1], [ 1, -1,  1],
	  [-1, -1,  0], [ 0, -1,  0], [ 1, -1,  0],
	  [-1, -1, -1], [ 0, -1, -1], [ 1, -1, -1],

		// Middle layer
	  [-1,  0,  1], [ 0,  0,  1], [ 1,  0,  1],
	  [-1,  0,  0], [ 0,  0,  0], [ 1,  0,  0],
      [-1,  0, -1], [ 0,  0, -1], [ 1,  0, -1],

		// Upper layer
	  [-1,  1,  1], [ 0,  1,  1], [ 1,  1,  1],
	  [-1,  1,  0], [ 0,  1,  0], [ 1,  1,  0],
	  [-1,  1, -1], [ 0,  1, -1], [ 1,  1, -1]
];

let state_sides = {
	0: [0, 1, 2, 9, 10, 11, 18, 19, 20],
	1: [18, 19, 20, 21, 22, 23, 24, 25, 26],
	2: [2, 5, 8, 11, 14, 17, 20, 23, 26],
	3: [8, 7, 6, 17, 16, 15, 26, 25, 24],
	4: [6, 3, 0, 15, 12, 9, 24, 21, 18],
	5: [6, 7, 8, 3, 4, 5, 0, 1, 2]
};

let axes = {
	0: 'z',
	1: 'y',
	2: 'x',
	3: 'z',
	4: 'x',
	5: 'y'
};

let borders = {
	0: [1, 2],
	1: [2, 0],
	2: [1, 3],
	3: [1, 4],
	4: [1, 0],
	5: [0, 2]
};

let opposite_side = {
	0: 3,
	1: 5,
	2: 4,
	3: 0,
	4: 2,
	5: 1
};


// ------------------ Exports
export { set_pos, state_sides, axes, borders, opposite_side };