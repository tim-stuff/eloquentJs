let isEven = (n) => {
	n = n > 0 ? n : -n;
	if (!n) {
		return true;
	} else if (n === 1) {
		return false;
	} else {
		return isEven(n-2);
	}
}
	
