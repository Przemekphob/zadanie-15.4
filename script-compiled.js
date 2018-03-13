'use strict';

/*zad 1*/
var first = 'Hello';
var second = 'World';

console.log(first + ' ' + second);

/*zad 2*/
var multiply = function multiply(numone) {
	var numtwo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	return numone * numtwo;
};

console.log(multiply(6));

/*zad 3*/
function average() {
	for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
		numbers[_key] = arguments[_key];
	}

	var avr = numbers.reduce(function (x, y) {
		return x + y;
	}, 0);
	return avr / numbers.length;
}

console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

/*zad 4*/
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 5];
console.log(average.apply(undefined, grades));

/*zad 5*/
var array = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = array[2],
    lastName = array[4];


console.log(firstName, lastName);
