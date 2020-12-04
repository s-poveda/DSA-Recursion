console.log((function stringSplitter(str, char, results = []){
	if (!str.length) return results;
	results.push(str.substr(0,1));
	return 	stringSplitter(str.substr(1), char, results)
	// .filter(c => c !== char);
// TODO: finish this
})
('abc/2/t', '/'));
