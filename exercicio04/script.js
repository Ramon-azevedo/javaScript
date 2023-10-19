function tabuada() {
    var num = document.getElementById('txtn2')
    var se = document.getElementById('sel2')

    if (num.value.length == 0) {
        window.alert('[Erro] Digite um Número')
    } else {
        var n = Number(num.value)
        var t = 1
        se.innerHTML = ''
        while (t <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${t} = ${n*t}`
            item.value = `se${t}`
            se.appendChild(item)
            t++
        }
    }
}