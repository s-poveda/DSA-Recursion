console.log((function toBinary(num) {
	if (num === 0 || num === 1) return num.toString();
	return `${toBinary(num >> 1)}${num % 2}`;
})(255));
