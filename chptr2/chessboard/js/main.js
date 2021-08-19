//var isEven = (number) => number % 2 == 0;

var changeChar = (counter) => {
	return counter % 2 == 0 ? " " : "#";
}

var buildString = (boardSize) => {
	let theGridString = "";
	for (let i=0; i < boardSize; i++) {
		for (let j=0; j < boardSize; j++) {
			theGridString += changeChar(j+i);
		}
		theGridString += "\n";
	}
	console.log(theGridString);
}
