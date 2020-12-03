console.log((function makeAnagrams(str, base = '') {
	if (str.length == 1) return base + str;
	let result = [];
 for (let i = 0; i < str.length; i++) {
	 // Create a new string, omitting the value at position i
	 let substring = str.slice(0, i) + str.slice(i + 1);
	 result = result.concat(makeAnagrams(substring,  base + str[i]));
 }
 return result;
})('abcd'));
