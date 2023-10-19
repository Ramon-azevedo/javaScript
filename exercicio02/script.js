function varificar() {
    var agora =  new Date()
    var anoa = agora.getFullYear()
    var data = document.getElementById('ano2')
    var res = document.getElementById('res')

    if(data.value.length == 0 || data.value > anoa) {
        window.alert ('[Erro] Verifique os dados e tente novamente')
    } else {
        var idade = anoa - Number(data.value)
        var sexo = document.getElementsByName('sex')
        var genero = ''
        var imag = document.getElementById('foto')
        imag.style.width = '200px'
        imag.style.height = '200px'
        imag.style.borderRadius = '50%'
        res.style.textAlign = 'center'
        if(sexo[0].checked) {
            genero  = 'Homem'
            if(idade >= 0 && idade < 14) {
                //criança
                imag.src = 'img/criança m.jpg'
            } else if(idade <= 21) {
                //adolescente
                imag.src = 'img/adolescente m.jpg'
            } else if (idade <= 50) {
                //adulto
                imag.src = 'img/adulto m.jpg'
            } else {
                //idoso
                imag.src = 'img/idoso m.jpg'
            }

        }

        if(sexo[1].checked) {
            genero  = 'Mulher'
            if(idade >= 0 && idade < 14) {
                //criança
                imag.src = 'img/criança f.jpg'
            } else if(idade <= 21) {
                //adolescente
                imag.src = 'img/adolescente f.jpg'
            } else if (idade <= 50) {
                //adulto
                imag.src = 'img/adulto f.jpg'
            } else {
                //idoso
                imag.src = 'img/idosa f.jpg'
            }
         
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(imag)
        
    }


}