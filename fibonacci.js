console.log((function fibonacci(target) {
	if (target < 0) throw new Error('Buddy... just stop');
	if (target === 0 || target === 1) return target;
	let last = 1, beforeLast = 0;
	for (null; target - 2 >= 0; target--) {
		const sum = last + beforeLast;
		beforeLast = last;
		last = sum;
	}
	return last;
})(5)) // 13
