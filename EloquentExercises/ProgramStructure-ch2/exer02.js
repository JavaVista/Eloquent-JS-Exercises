/*
 *
 * Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of * the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
 *
 * When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" * * for numbers divisible by only one of those).
 *
 */

// using a conditional (ternary) operator [an operator accepting three operands]
let num = 100;
for (let i = 1; i <= num; i++) {
	(i % 5 === 0 && i % 3 === 0) ? console.log('FizzBuzz') : (i % 3 === 0)? console.log('Fizz') : (i % 5 === 0) ? console.log('Buzz') : console.log(i);
};


// using the classic if-else statement
function fizzBuzz(number) {
	let result;
	for (let n = 1; n <= number; n++) {
		if (n % 15 === 0) {
			result = n + ' FizzBuzz';
		} else if (n % 3 === 0) {
			result = n + ' Fizz';
		} else if (n % 5 === 0) {
			result = n + ' Buzz';
		} else {
			result = n;
		}
	 console.log(result);
	}
}

fizzBuzz(20);


// using another shorter classic if statement
for (let n = 1; n <= 100; n++) {
    let result = '';
    if (n % 3 === 0) result += 'Fizz';
    if (n % 5 === 0) result += 'Buzz';
    console.log(result || n);
}