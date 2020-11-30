console.log((function fibonacci(target) {
	if (target === 0) return 0;
	if (target === 1) return 1;
	return currentTerm = fibonacci(target - 1) + fibonacci(target - 2);
})(7)) // 13
