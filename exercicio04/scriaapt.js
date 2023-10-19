function tabuada() {
    var num = document.getElementById('txtn2')
    let tab = document.getElementById('sel2')

    if (num.value.length == 0) {
        window.alert('Porfavor Digite um número')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''

        for(var d = 1;d <= 10;d++) {
            var item = document.createElement('option')
            item.text = `${n} / ${d} = ${n/d}`
            tab.appendChild(item)
        }
    }
}