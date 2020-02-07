/* Exercise 3: Pythagorean Theorem 
Use the Pythagorean Theorem to create a function ‘getHypotenuseLength’ that uses parameters ‘a’ and ‘b’ to 
calculate the length of the hypotenuse of a right triangle. If a or b is less or equal to 0, then return 0.
Example:
getHypotenuseLength(3,4); // returns 5*/

function getHypotenuseLength(a, b) {
    let lengHyp = 0;
    if (a < 0 || b < 0) {
        return 0;
    }else{
        lengHyp = Math.sqrt((a*a) + (b*b));
    }
    return lengHyp;
}
console.log(getHypotenuseLength(3, 4));