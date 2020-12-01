const factorial = require('./factorial');

console.log((function makeAnagram( str, anagrams = []) {
	if (anagrams.length === factorial(str.length)) return anagrams;

})('abc'));
