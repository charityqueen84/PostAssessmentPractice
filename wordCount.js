/* Create a function ‘wordCount’ that takes a string parameter named ‘sentence’. The function should return the 
count of words in the ‘sentence’ parameter string. A word is considered any series of characters (letter, number, punctuation) */

function wordCount(sentence) {
    let sum = 0;
    let words = sentence.split(' '); //splitting into an array
    let wordsFilt = words.filter(function(noSpace) { //filtering out the spaces
        return noSpace !== ''; //this CANNOT have a space between the '', otherwise is counts each space as a character
    }); 
    return wordsFilt.length; //don't need a for loop because all we want is the count, and we get that from .length
    }
    
    
    console.log(wordCount('Hi    my '))

