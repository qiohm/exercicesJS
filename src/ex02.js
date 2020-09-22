'use strict'
/*
ex02.js
Ecrivez un programme qui affiche tous les nombres de 100 à 0 avec un interval de 2 entre chaque nombre. L'output du programe:
100
98
96
94
..etc
4
2
0
*/

/*
for (let countdown = 100; countdown >= 0; countdown -= 2) {
    console.log(countdown)
}
*/

let cDown = 100
while (cDown >= 0) {
    console.log(cDown)
    cDown -= 2
}
