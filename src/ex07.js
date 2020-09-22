'use strict'
/*
ex07.js:
En partant de l'exercice précédent ecrivez une fonction calc qui prend 3 paramètres: 
1 string qui correspondra à l'opérateur arithmétique et 2 nombres sur lesquels on appliquera l'opérateur. 
La fonction calc devra utiliser les fonctions définies dans l'exercice précédent.
let nb1 = calc('+', 10, 11) // nb1 === 21
let nb2 = calc('-', 6, 4) // nb2 === 2
let nb3 = calc('*', 4, 5) // nb3 === 20
let nb4 = calc('/', 10, 2) // nb4 == 5
*/

const add = (a, b) => {
    return a + b
}

const sub = (a, b) => {
    return a - b
}

const mul = (a, b) => {
    return a * b
}

const div = (a, b) => {
    return a / b
}

/* const calc = (op, a, b) => {
    if (op==='+') {
        add(a,b)
    } else if 
        (op==='-') {
            sub(a,b)
         } else if 
            (op==='*') {
                mul(a,b)
            } else if 
                (op==='\') {
                    div(a,b)
                }
                else {
                    console.log('42 is the answer to life, the universe and everything that matters')
                }
            }
    
    */

const calc = (op, a, b) => {
    switch (op) {
        case '+':
            return add(a, b)
        case '-':
            return sub(a, b)
        case '*':
            return mul(a, b)
        case '/':
            return div(a, b)
        default:
            console.log('Nop: unknown operator')
    }
}

console.log(calc('*', 7, 6))
