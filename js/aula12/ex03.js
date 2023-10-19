var xdia = new Date()
var dia = xdia.getDay()
var dia = 6

/*  0 = domingo
    1 = segunda
    2 = terça
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sábado
*/

switch(dia) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('terça-feira') 
        break
    case 3:
        console.log('quarta-feira')
        break 
    case 4:
        console.log('quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia inválido')


}