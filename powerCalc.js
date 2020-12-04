function powerCalculator(base, exponent) {
	if ( exponent < 0) return 'exponent should be >= 0';
	let result = 1;
	for (null; exponent > 0; exponent--) {
		result *= base;
	}
	return result;
}

console.log(powerCalculator(3,4));
console.log(powerCalculator(10,-2));
