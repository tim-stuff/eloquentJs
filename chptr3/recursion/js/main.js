//let Person = require('./definePerson.js');
'use strict';

// let Tim = new Person("Timothy","Daigle",34,72,212);

const isEven = (n) => {
	n = n > 0 ? n : -n;
	if (!n) {
		return true;
	} else if (n === 1) {
		return false;
	} else {
		return isEven(n-2);
	}
}

// Tim.printBmi();