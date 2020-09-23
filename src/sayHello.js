'use strict'

// % node sayHello.js prenom nom
// % node sayHello.js prenom

if (process.argv.length != 3) {
    console.log(`usage: node sayHello.js name`)
    process.exit(1) // exit the program with code status 1
}

let prenom = process.argv[2]
//let nom = process.argv[3]
/* console.log(`Salut ${prenom} ${nom}`) */
console.log(`Salut ${prenom}`)
