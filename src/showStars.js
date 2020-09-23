'use strict'

if (process.argv.length != 3) {
    console.log(`usage: node showStars.js number`)
    process.exit(1)
    /*  // exit the program with code status 1 */
}

/* // Verifier que l'argument passé à notre programme peut être converti en nombre */
if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(1)
}

// Nous somme OK
let nb = Number(process.argv[2])
showStars(nb)
