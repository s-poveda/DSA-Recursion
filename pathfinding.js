const smallMaze = [
	[' ', ' ', ' '],
	[' ', '*', ' '],
	[' ', ' ', 'e'],
];
const maze = [
	[' ', ' ', ' ', '*', ' ', ' ', ' '],
	['*', '*', ' ', '*', ' ', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', '*', '*', '*', '*', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

// function pathFinder(maze, startCoords = { x: 0, y: 0 }) {
// 	const { x, y } = startCoords;
// 	if (maze[y][x] == 'e') return 'e';
//
// 	maze[y][x] = '-'; //this is a mark for spaces already traveled through
//
// }

/**
 * Solve the maze
 * Approach: Recursively go in every direction we can!  If we go out of bounds
 * or hit a wall, then that possible solution is out, so return false.
 * If we hit the exit we've found a path through.
 * We need to keep track of the steps we've taken, so pass an array through
 * each recursive call, adding the new step in.
 *
 * But, a problem! If we go in every direction, every time, then we would end
 * up with an infinite recursion, where we step LRLRLRLR... never getting
 * anywhere at all. How do we stop that?  We can mark a position in the maze
 * as visited, and end the recursion if we have already been there.
 */
function findPath(maze, x = 0, y = 0, steps = []) {
	if (x < 0 || x >= maze.length || y < 0 || y >= maze[x].length) {
		// We are out of bounds
		return false;
	}
	const current = maze[x][y];
	if (current === 'e') {
		// We have found the exit
		return steps;
	} else if (current === '*') {
		// We have hit a wall
		return false;
	} else if (current === 'v') {
		// We have visited this point already
		return false;
	}
	// Mark that we've visited this point
	maze[x][y] = 'v';
	// Notice how we don't mutate the steps array directly, so the step doesn't
	// leak into the other recursive calls
	return (
		findPath(maze, x - 1, y, [...steps, 'U']) ||
		findPath(maze, x + 1, y, [...steps, 'D']) ||
		findPath(maze, x, y - 1, [...steps, 'L']) ||
		findPath(maze, x, y + 1, [...steps, 'R'])
	);
}

console.log(findPath(maze));

// Edge case: No maze
console.log(findPath([]));

// Edge case: No exit
console.log(
	findPath([
		['', ''],
		['', ''],
	])
);

// Edge case: Unreachable exit
console.log(
	findPath([
		['', '*'],
		['*', 'e'],
	])
);

/**
 * All solutions to the maze
 * Approach: Same as before, but now if we hit the exit, we add the solution
 * to an array, but keep recursing, looking for other solutions.
 * One problem: marking a part of the maze as visited as we are looking for
 * one possible solution, doesn't mean that it is visited as we search for
 * other solutions. This means that we can't directly mutate the maze.
 */
function findPaths(maze, x = 0, y = 0, steps = [], solutions = []) {
	if (x < 0 || x >= maze.length || y < 0 || y >= maze[x].length) {
		return solutions;
	}
	const current = maze[x][y];
	if (current === 'e') {
		return [...solutions, steps];
	} else if (current === '*') {
		return solutions;
	} else if (current === 'v') {
		return solutions;
	}

	const newMaze = maze.map((row, xIndex) =>
		row.map((value, yIndex) => {
			if (xIndex === x && yIndex === y) {
				return 'v';
			} else {
				return value;
			}
		})
	);
	solutions = findPaths(newMaze, x - 1, y, [...steps, 'U'], solutions);
	solutions = findPaths(newMaze, x + 1, y, [...steps, 'D'], solutions);
	solutions = findPaths(newMaze, x, y - 1, [...steps, 'L'], solutions);
	solutions = findPaths(newMaze, x, y + 1, [...steps, 'R'], solutions);
	return solutions;
}
const maze2 = [
	[' ', ' ', ' ', '*', ' ', ' ', ' '],
	['*', '*', ' ', '*', ' ', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', '*', '*', '*', '*', '*', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];
console.log(findPaths(maze2));
// Edge case: No maze
console.log(findPaths([]));
// Edge case: No exit
console.log(
	findPaths([
		['', ''],
		['', ''],
	])
);
// Edge case: Unreachable exit
console.log(
	findPaths([
		['', '*'],
		['*', 'e'],
	])
);
