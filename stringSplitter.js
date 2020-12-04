console.log((function stringSplitter(str, splitChar) {
	if (str.length === 1 || !splitChar) return [str];
	if (!str.length) return '';
	const strArr = [];
	let lastSplitCharInd = 0;
	for (let i = 0; i < str.length; i++) {
		if(str[i] === splitChar) {
			strArr.push(str.substr(lastSplitCharInd, i - lastSplitCharInd));
			lastSplitCharInd = i +1;
		}
	}
	strArr.push(str.substr(lastSplitCharInd));
	return strArr;
})
('abc/2/t', '/'));
