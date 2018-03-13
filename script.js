/*zad 1*/
const  first = 'Hello';
const second = 'World';

console.log(`${first} ${second}`);


/*zad 2*/
const multiply = (numone, numtwo = 2) => numone * numtwo;

console.log(multiply(6));


/*zad 3*/
function average(...numbers) {
	let avr = numbers.reduce((x, y) => x + y, 0);
	return avr / numbers.length;
}

console.log(average(1, 3));
console.log(average(1, 3, 6, 6));


/*zad 4*/
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 5];
console.log(average(...grades));


/*zad 5*/
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,firstName, , lastName] = array;

console.log(firstName, lastName);