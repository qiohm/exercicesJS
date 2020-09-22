'use strict'
/*
ex08.js:
Ecrivez une fonction isPalindrome qui prend une string en paramètre. 
Cette fonction retourne true si le paramètre est un palindrome sinon retourne false.
isPalindrome('tenet') // retruns true
isPalindrome('Alyra') // returns false
*/

const isPalindrome = (str) => {
    str = str.toLowerCase()
    return str.split('').reverse().join('') == str
}
console.log(isPalindrome('Tenet'))
console.log(isPalindrome('Alyra'))
console.log(isPalindrome('xanax'))
console.log(isPalindrome('rêver'))
