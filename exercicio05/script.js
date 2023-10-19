let num = document.getElementById('txtn2')
let lista = document.getElementById('camp2')
let res = document.getElementById('res')
var valores = []


function inNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (inNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value))
        var cont = document.createElement('option')
        cont.text = `Valor ${Number(num.value)} adicionado.`
        lista.appendChild(cont)
    } else {
        window.alert('Número inválido ou já existente.')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
} 

function finalizar() {
   if(valores.length == 0) {
        window.alert('Porfavor digite um número!')
   } else {
    var tot = valores.length
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`

        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        let media = 0
        for (var pos = 0; pos < valores.length; pos++) {
            soma += valores[pos]
            media = soma / tot
            if(valores[pos] >= maior) 
                maior = valores[pos]
        
            if(valores[pos] <= menor) 
                menor = valores[pos]

           
 
        }

        res.innerHTML += `<p>O maior número cadastrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número cadastrado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p> A Média dos números cadastrados é ${media}`
   }
   
}













