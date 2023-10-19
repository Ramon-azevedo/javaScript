function tabuada() {
    let num = document.getElementById('txtn2')
    let tab = document.getElementById('sel2')

    if (num.value.length == 0) {
        window.alert('[Erro] Digite um número')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            tab.appendChild(item)
            c++
        }
    }
}