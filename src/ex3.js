const count = (min, max, step) => {
    for (let n = min; n >= max; n += step) {
        console.log(count(n))
    }
}
