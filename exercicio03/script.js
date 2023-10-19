function Contar() {
    var ini = document.getElementById('ini')
    var fi = document.getElementById('fim2')
    var pa = document.getElementById('passo2')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fi.value.length == 0 || pa.value.length == 0) {
        window.alert('[Erro] faltam dados...')
    } else {
        var i = Number(ini.value)
        var f = Number(fi.value)
        var p = Number(pa.value)
        res.innerHTML = 'Contando: '
        if(p == 0) {
            window.alert('Impossível contar ! (começando automático no passo 1)')
            p = 1
        }

        if (i <= f) {
            for(var c = i;c <= f;c += p) {
                res.innerHTML += ` ${c}\u{1F603} `
            }
        } else {
            for(var c = i;c >= f;c -= p) {
                res.innerHTML += ` ${c}\u{1F603} `
            }
        }
        
    }
}