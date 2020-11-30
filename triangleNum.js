console.log((function triangleNum(nth){
	if (nth === 1) return 1;
	return nth + triangleNum(nth -1);
})
(9));
