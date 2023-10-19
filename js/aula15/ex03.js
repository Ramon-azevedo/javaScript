let fases = [5,2,9,4,0]

fases[5] = 8
fases.push(6)
fases.length
console.log(fases)

for (let fas = 6; fas <= fases.length && fas >= 0; fas-- ) {
    console.log(`voce está no nível ${fas} logo seu número é ${fases[fas]}`)
}