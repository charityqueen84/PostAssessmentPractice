/* Exercise 1: Summation 
Create a JavaScript function ‘summation’ that takes 2 parameters, ‘num1’ and ‘num2’.  The function should return 
the sum of all whole numbers between num1 and num2 inclusive.
Example:
summation(4, 10); // returns ‘49’
summation(10, 4); // returns ‘0’*/

function summation(num1, num2) {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
}
console.log(summation(4, 10));