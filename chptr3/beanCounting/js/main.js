let countBs = (string) => {
	let bCounter = 0;
	for (let i = 0; i < string.length-1; i++) {
		if (string[i] === "B") bCounter ++;
	}
	return bCounter;
}

let countChar = (string,searchString) => {
	let charCounter = 0;
	for (let i = 0; i < string.length-1; i++) {
		if (string[i] === searchString) charCounter ++;
	}
	return charCounter;
}
