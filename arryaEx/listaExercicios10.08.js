
//Exercício 01
function verificaTriangulo(x, y, z) {

    if ((x < y + z) || (y < x + z) || (z < x + y)) {

        if (x == y && y == z && z == x) {
            console.log("É um triângulo equilátero!")
        } else if (x == y || y == z || z == x) {
            console.log("É um triângulo isósceles!")
        } else if (x != y && y != z && z != x) {
            console.log("É um triângulo escaleno!")
        }

    } else {
        console.log("Não é um triângulo!")
    }

} 


console.log("Exercício 01")
verificaTriangulo(4, 7, 6)
console.log("-----------------------------")

//Exercício 02
function decomporNota(valor) {
    
    nota100 = Math.trunc(valor / 100)
    valor = valor - nota100 * 100

    nota50 = Math.trunc(valor / 50)
    valor = valor - nota50 * 50

    nota10 = Math.trunc(valor / 10)
    valor = valor - nota10 * 10

    nota5 = Math.trunc(valor / 5)
    valor = valor - nota5 * 5

    nota1 = Math.trunc(valor)
    valor = valor - nota1

    console.log("Notas de 100: " + nota100)
    console.log("Notas de 50: " + nota50)
    console.log("Notas de 10: " + nota10)
    console.log("Notas de 5: " + nota5)
    console.log("Moedas de 1: " + nota1)
    console.log("Resto: " + valor)

}

console.log("Exercício 02")
decomporNota(250)
console.log("-----------------------------")

//Exercício 03
function taxaDetran(ano, valor) {
    if (ano < 1990) {
        taxa = 0.01
    } else if (ano >= 1990) {
        taxa = 0.015
    }

    imposto = valor * taxa
    console.log("Imposto a ser pago: " + imposto)
}

console.log("Exercício 03")
taxaDetran(1995, 7600)
console.log("-----------------------------")

//Exercício 04
function aumentoSalario(salario, cargo) {

    if(cargo == 101) {
        aumento = 0.1
    } else if (cargo == 102) {
        aumento = 0.2
    } else if (cargo == 103) {
        aumento = 0.3
    } else {
        aumento = 0.4
    }

    salarioComAumento = salario + (salario * aumento)

    console.log("Salário antigo: " + salario)
    console.log("Salário com aumento: " + salarioComAumento)
    console.log("Diferença: " + (salarioComAumento - salario))
}

console.log("Exercício 04")
aumentoSalario(1200, 102)
console.log("-----------------------------")

//Exercício 05
function creditoEspecial(saldo) {
    if (saldo >= 0 && saldo <= 200){
        percentualCredito = 0
    } else if (saldo >= 201 && saldo <= 400) {
        percentualCredito = 0.2
    } else if (saldo >= 401 && saldo <= 600) {
        percentualCredito = 0.3
    } else if (saldo >= 601) {
        percentualCredito = 0.4
    }

    credito = saldo * percentualCredito

    console.log("Saldo médio: " + saldo)
    console.log("Crédito: " + credito)
}

console.log("Exercício 05")
creditoEspecial(450)
console.log("-----------------------------")

//Exercício 06
function lanchonete(codigo, qtd) {

    //Cachorro quente : 1
    //Bauru : 2
    //Misto quente : 3
    //Hamburguer : 4
    //Cheeseburger : 5
    //Refrigerante : 6

    if (codigo == 1) {
        preco = 11
    } else if (codigo == 2) {
        preco = 8.5
    } else if (codigo == 3) {
        preco = 8
    } else if (codigo == 4) {
        preco = 9
    } else if (codigo == 5) {
        preco = 10
    } else if (codigo == 6) {
        preco = 4.5
    }

    total = preco * qtd

    console.log("Total do pedido: " + total + " Reais")

}

console.log("Exercício 06")
lanchonete(2, 5)
console.log("-----------------------------")
