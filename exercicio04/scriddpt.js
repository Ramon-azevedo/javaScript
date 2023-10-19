function tabuada() {
    var num = document.getElementById('txtn2')
    var tab = document.getElementById('sel2')

    if(num.value.length == 0) {
        window.alert('[Erro] Digite um Número')
    } else {
        var t = 1
        var n = Number(num.value)
        tab.innerHTML = ''

        while (t <= 10) {
            var item = document.createElement('option')
            item.text = `${n} - ${t} = ${n-t}`
            tab.appendChild(item)
            t++
        }
    }
}