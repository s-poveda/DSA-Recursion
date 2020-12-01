function factorial(num) {
	if (num < 0) throw new Error('Number must be greater than 0');
	if (num === 1 || num === 0) return num;
	if (num === 2) return 2;
	return factorial(num - 1) * num;
}

console.log(factorial(4));

module.exports = factorial;
