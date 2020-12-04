console.log(
	(function organize(orgObj, indent = '') {
		const titles = Object.keys(orgObj);
		if (!titles.length) return '';
		return titles.reduce((message, title)=> {
			return message += `${indent + title}\n${organize(orgObj[title], indent + '    ')}`
		}, '');
	})
	({
		Zuckerberg: {
			Schroepfer: {
				Bosworth: {
					Steve: {},
					Kyle: {},
					Andra: {},
				},
				Zhao: {
					Richie: {},
					Sofia: {},
					Jen: {},
				},
			},
			Schrage: {
				VanDyck: {
					Sabrina: {},
					Michelle: {},
					Josh: {},
				},
				Swain: {
					Blanch: {},
					Tom: {},
					Joe: {},
				},
			},
			Sandberg: {
				Goler: {
					Eddie: {},
					Julie: {},
					Annie: {},
				},
				Hernandez: {
					Rowi: {},
					Inga: {},
					Morgan: {},
				},
				Moissinac: {
					Amy: {},
					Chuck: {},
					Vinni: {},
				},
				Kelley: {
					Eric: {},
					Ana: {},
					Wes: {},
				},
			},
		},
	})
);
