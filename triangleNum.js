console.log((function triangleNum(nth){
	let sum = 0;
	if(nth === 0) return sum;
	while (nth > 0) {
		sum += nth;
		nth--;
	}
	return sum;
})
(9));
