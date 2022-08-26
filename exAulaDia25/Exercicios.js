//exercicio 1
function tri(x, y, z) {
    if (x + y > z && z + x > y && y + z > x) {
        if (x == y && y == z && z == x) {
            return "Triangulo equilátero"

        }
        if (x == y || x == z || y == x || y == z) {
            return "Triangulo isóceles"
        } else if (x !== y && y !== z && z !== x) {
            return "Triangulo Escaleno"
        }


    } else {
        return "não é um triangulo!"
    }

    return true
}
//console.log(tri(100, 4, 1))

//Exercício 02
function decompor(valor) {

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

    return true

}

//console.log("Exercício 02")
//decompor(250)
//console.log("-----------------------------")

//Exercício 03
function taxa(ano, valor) {
    if (ano < 1990) {
        taxa = 0.01
    } else if (ano >= 1990) {
        taxa = 0.015
    }

    imposto = valor * taxa
    console.log("Imposto a ser pago: " + imposto)

    return true
}

//console.log("Exercício 03")
//taxa(1990, 12500)


//Exercício 04
function aumentoSalario(salario, cargo) {

    if (cargo == 101) {
        aumento = 0.1
    } else if (cargo == 102) {
        aumento = 0.2
    } else if (cargo == 103) {
        aumento = 0.3
    } else {
        aumento = 0.4
    }

    salarioAumentado = salario + (salario * aumento)

    console.log("Salário antigo: " + salario)
    console.log("Salário com aumento: " + salarioAumentado)
    console.log("Diferença: " + (salarioAumentado - salario))

    return true
}

//console.log("Exercício 04")
//aumentoSalario(1440, 103)
//console.log("-----------------------------")

//Exercício 05
function creditoEspecial(saldo) {
    if (saldo >= 0 && saldo <= 200) {
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

    return true
}

//console.log("Exercício 05")
//creditoEspecial(500)
//console.log("-----------------------------")

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

    return true
}
//console.log("Exercício 06")
//lanchonete(4, 8)
//console.log("-----------------------------")

module.exports = {
    exercicioUm: tri,
    exercicioDois: decompor,
    exercicioTres: taxa,
    exercicioQuatro: aumentoSalario,
    exercicioCinco: creditoEspecial,
    exercicioSeis: lanchonete

}