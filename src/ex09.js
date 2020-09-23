'use strict'
/*
ex09.js:
Ecrivez une fonction biggest qui retourne le plus grand élément d'une liste de nombre.
biggest([99, 100, 101, 1]) // returns 101
*/
//corr. d'apres Ioannis@ethersjs

function biggest(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}
