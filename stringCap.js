/* Exercise 6: String Capitalization ✅
Create a function ‘capitalize’ that takes a single string parameter.  The function should return a string with the 
first letter in each word from the input string capitalized.
Example:
capitalize(“i love to code!”); // returns “I Love To Code!”*/

//This first one capitalizes ONLY the first letter of the whole string:
function cap(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}
console.log(cap('i love to code!'));


function cap(sentence) {
    let str = sentence.split(' ');
    let empty = [];
    for (let i = 0; i < str.length; i++) {
    empty.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
    }
    return empty.join(' '); //if there is no space between quotes, it's ILoveToCode!
}
console.log(cap('i love to code!')); 