let printable = "";
for ( let i = 1; i <= 100; i ++ ) {
	printable = "";
	if (i % 3 == 0) printable = "Fizz";
	if (i % 5 == 0) printable = printable + "Buzz";
	console.log(printable ? printable : i);
}
