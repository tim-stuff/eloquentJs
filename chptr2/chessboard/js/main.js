(function(){
	let theGridString = "";
	let theSize = 51;

	var isEven = (number) => number % 2 == 0;
	
	var changeChar = (counter) => {
		return ( isEven(counter) ? " " : "#" );
	}
	
	for (let i=0; i <= theSize; i++) {
		for (let j=0; j <= theSize; j++) {
			theGridString = theGridString + changeChar(j+i);
		}
		theGridString = theGridString + "\n";
	}
	
	console.log(theGridString);
}());
