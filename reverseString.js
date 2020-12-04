console.log((function reverseString(str) {
	if (str.length <= 1) return str;
	return str.substr(-1) + reverseString(str.substr(0, str.length -1));
})('hello'));
