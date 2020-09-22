'use strict'
/*
Ecrivez une fonction showStars qui prend en paramètre un nombre nbStars et qui affiche sur le terminal comme suit:
showStars(3)
output:
*
**
***
*/

/* const showStar = (nbStar) => {
    for (let star = '*'; star.length <= nbStar; star += '*') {
        console.log(star)
    }
}
showStar(3)
showStar(10)
 */

const showStars = (nbStars) => {
    for (let s = 1; s <= nbStars; s += 1) {
        console.log('*'.repeat(s))
    }
}

showStars(5)
