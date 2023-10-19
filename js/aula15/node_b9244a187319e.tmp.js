let fases = [5,2,9,4,0]

fases[5] = 8
fases.push(6)
fases.length
fases.sort()
console.log(fases)

for (let fas = 4; fas <= fases.length; fas-- ) {
    console.log(`voce está no nível ${fas} logo seu número é ${fases[fas]}`)
}