/* Exercise 2: Object Key Value Properties 
Create a function ‘printKeyValues’ that takes in a single parameter.  The function should log all the 
key value pairs in the passed in object to the console in the format shown in the example.
Example:
var myObj = {
“key1”: “value1”,
“key2”: “value2”,
“key three”: “value3”
};
printKeyValues(myObj);  // prints the text below to the console
key1: value1
key2: value2
key three: value3
*/

let myObj = {
    'name' : 'Charity',
    'food' : 'pizza',
    'subject' : 'space',
    'like' : 'hiking'
}
function printKeyValues(human) {
    for (person in myObj) {
        console.log(person + ': ' + myObj[person]);
    }
}
printKeyValues(myObj);