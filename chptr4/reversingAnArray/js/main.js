let anArray = [1,2,3,4,5,6,7,8,9];

function reverseArray(originalArray) {
	let newArray = [];
	originalArray.forEach((item) => {
		newArray.unshift(item);
	});
	return newArray;
}

function reverseArrayInPlace(reversedArray){
	let indexValue
	for (let i = 0; i < Math.floor(reversedArray.length/2); i++) {
		indexValue = reversedArray[i];
		reversedArray[i] = reversedArray[reversedArray.length - 1 - i];
		reversedArray[reversedArray.length - 1 - i] = indexValue;
	}
}