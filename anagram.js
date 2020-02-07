/* Create a function ‘areTheseAnagrams’ that checks if the two strings passed to it are anagrams of each other.
Example:
areTheseAnagrams(“abc”, “bca”); // returns true
areTheseAnagrams(“abc”, “cde”); // returns false*/

function areTheseAnagrams(str1, str2) {
    let leng1 = str1.length;
    let leng2 = str2.length;
    if (leng1 !== leng2) {
        return false
    }else{
        let arr1 = str1.split('').sort().join('') // I had .join in the if statement, but it works here too
        let arr2 = str2.split('').sort().join('') //split needs to be '', while join can be ' ' or ''
        if (arr1 !== arr2) {
            return false;
        }
        return true; 
    }
 }
 console.log(areTheseAnagrams('abc', 'bca'));
 console.log(areTheseAnagrams('abc', 'cde'));