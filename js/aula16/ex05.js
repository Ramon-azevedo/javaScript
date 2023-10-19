function fatorial(n) {
    var fatorial = 1
    for (let f = n; f > 1; f--) {
        fatorial *= f
    }
    return fatorial
}

console.log(fatorial(2))