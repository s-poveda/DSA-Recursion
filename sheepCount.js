function countSheep(num) {
	if (num === 0) return console.log('All sheep jumped over the fence');
	console.log(`${num}: Another sheep jumps over the fence`);
	countSheep(num - 1);
}

countSheep(6);
