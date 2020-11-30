function powerCalculator(base, exponent) {
	if ( exponent === 0)  return 1;
	if ( exponent < 0) return 'exponent should be >= 0';
	return base * powerCalculator(base, exponent - 1);
}

console.log(powerCalculator(100,2));
console.log(powerCalculator(10,-2));
