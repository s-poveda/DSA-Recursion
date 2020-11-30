console.log((function factorial(num) {
	if (num === 2) return 2;
	return factorial(num - 1) * num;
})(5)); // 120
