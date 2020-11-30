console.log((function reverseString(str) {
	if (str.length === 0) return '';
	return str.substr(-1) + reverseString(str.substr(0, str.length -1));
})('hello'));
