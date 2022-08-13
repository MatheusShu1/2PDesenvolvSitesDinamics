// Essa é a função de espera no console.
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

// Essas são as cores das fontes no TERMINAL (executar no terminal para poder ver)
var black = "\x1b[30m"
var red = "\x1b[31m"
var green = "\x1b[32m"
var yellow = "\x1b[33m"
var blue = "\x1b[34m"
var magenta = "\x1b[35m"
var cyan = "\x1b[36m"
var white = "\x1b[37m"

// INSIRA OS VALORES AQUI! ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Esse é um if que compreende todo o código. Pra poder rodar, as variáveis dentro das chamadas das funções devem ter algum valor inserido.
// Após o valor ser adicionado, descomentar a função do exercício que quer que seja executado.
var a = 0
var b = 0
var c = 0

if (a == 0 && b == 0 && c == 0){
    console.log(red + "Por favor, insira pelo menos um valor em uma das variáveis no código para executar o programa!" + white)
    console.log(yellow + "1 -" + white + " Exercício um: variáveis " + red + "a/b/c " + white + "para os lados do triângulo.")
    console.log(yellow + "2 -" + white + " Exercício dois: variável " + red + "a" + white + " para o valor a ser decomposto.")
    console.log(yellow + "3 -" + white + " Exercício três: variáveis " + red + "a" + white + " para ano e " + red + "b" + white + " para valor do carro.")
    console.log(yellow + "4 -" + white + " Exercício quatro: variáveis " + red + "a" + white + " para o código de cargo e " + red + "b" + white + " para o salário atual.")
    console.log(yellow + "5 -" + white + " Exercício cinco: variável " + red + "a" + white + " para o saldo do cliente.")
    console.log(yellow + "6 -" + white + " Exercício seis: variáveis " + red + "a" + white + " para o código de item do pedido e " + red + "b" + white + " para a quantidade. O cardápio é: ")
    console.log(blue + "6.1 -" + white + " Cachorro Quente - Código " + green + "1")
    console.log(blue + "6.2 -" + white + " Bauru - Código " + green + "2")
    console.log(blue + "6.3 -" + white + " Misto Quente - Código " + green + "3")
    console.log(blue + "6.4 -" + white + " Hamburguer - Código " + green + "4")
    console.log(blue + "6.5 -" + white + " Cheeseburguer - Código " + green + "5")
    console.log(blue + "6.6 -" + white + " Refrigerante - Código " + green + "6")

} else {
    // DESCOMENTE OS EXERCÍCIOS AQUI! ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Exercicio1(a, b, c)
    // Exercicio2(a)
    // Exercicio3(a, b)
    // Exercicio4(a, b)
    // Exercicio5(a)
    // Exercicio6(a, b)

async function Exercicio1(a, b, c){

    console.clear()
    console.log(yellow + "1 - Dados três valores X, Y e Z, verificar se eles podem ser os comprimentos dos lados de um triângulo.")
    await delay(2)
    console.log("Se forem, verificar se é um triângulo equilátero, isósceles ou escalenos.")
    await delay(2)
    console.log("Se eles não formarem um triângulo, escrever uma mensagem." + white)
    
    var X = a
    var Y = b
    var Z = c

    await delay(3)
    console.log(blue + "Valor X: " + white + X)
    await delay(1)
    console.log(blue + "Valor Y: " + white + Y)
    await delay(1)
    console.log(blue + "Valor Z: " + white + Z)

    await delay(2)
    if((X <= (Y + Z)) && (Y <= (X + Z)) && (Z <= (Y + X))){
        if(X == Y == Z){
            console.log(green + "Este é um triângulo equilátero!" + white)
        } else if (X == Y || X == Z || Y == Z){
            console.log(green + "Este é um triângulo isósceles!" + white)
        } else if (X != Y != Z){
            console.log(green + "Este é um triângulo escaleno!" + white)
        }
    } else {
        console.log(green + "Este não é um triângulo!" + white)
    }
    console.log(yellow + "==================================================================================================================" + white)
}

async function Exercicio2(a){

    console.clear()
    console.log(yellow + "2 - Escrever um algoritmo que leia um valor em reais.")
    await delay(2)
    console.log("Calcule qual o menor número possível de notas de 100, 50, 10, 5 e 1 em que o valor lido pode ser decomposto.")
    await delay(5)
    console.log("Escrever o valor lido e a relação de notas necessárias." + white)

    var valor2 = a
    var cem = Math.trunc(valor2 / 100)
    var quantcem = cem * 100
    var cinquenta = Math.trunc((valor2 - quantcem) / 50)
    var quantcinquenta = cinquenta * 50
    var dez = Math.trunc((valor2 - quantcem - quantcinquenta) / 10)
    var quantdez = dez * 10
    var cinco = Math.trunc((valor2 - quantcem - quantcinquenta - quantdez) / 5)
    var quantcinco = cinco * 5
    var um = Math.trunc((valor2 - quantcem - quantcinquenta - quantdez - quantcinco) / 1)

    await delay(2)
    console.log(blue + "Valor: " + white + valor2)
    await delay(2)
    console.log(green + "Iremos precisar de " + cem + " notas de 100, " + cinquenta + " notas de 50, " + dez + " notas de 10, " + cinco + " notas de 5 e " + um + " notas de 1." + white)
    console.log(yellow + "==================================================================================================================" + white)
}

async function Exercicio3(a, b){

    console.clear()
    console.log(yellow + "3 - Num determinado Estado, para transferências de veículos, o DETRAN cobra uma taxa de 1% para carros fabricados antes de 1990 e uma taxa de 1.5% para os fabricados de 1990 em diante.")
    await delay(7)
    console.log("Elabore um algoritmo que leia o ano e o valor de tabela do carro, calcule e informe o imposto a ser pago." + white)

    var ano = a
    var valor = b
    var imposto = 0
    if(ano < 1990){
        imposto = valor * 0.01
    } else {
        imposto = valor * 0.015
    }

    await delay(5)
    console.log(blue + "Ano: " + white + ano)
    await delay(1)
    console.log(blue + "Valor do carro: " + white + valor)
    await delay(2)
    console.log(green + "O valor de imposto à ser pago para o DETRAN é " + imposto + " reais." + white)
    console.log(yellow + "==================================================================================================================" + white)
}

async function Exercicio4(a, b){

    console.clear()
    console.log(yellow + "4 - Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo.")
    await delay(2)
    console.log("Faça um algoritmo que leia o salário e o cargo de um funcionário e calcule o novo salário.")
    await delay(2)
    console.log("Se o cargo do funcionário não estiver na tabela, ele deverá, então, receber 40% de aumento.")
    await delay(2)
    console.log("Mostre o salário antigo, o novo salário e a diferença." + white)

    var cargo = a
    var salario = b
    if (cargo == 101){
        salario += salario*0.1
    } else if (cargo == 102){
        salario += salario*0.2
    } else if (cargo == 103){
        salario += salario*0.3
    } else {
        salario += salario*0.4
    }

    await delay(3)
    console.log(blue + "Salário antigo: " + white + b + " reais.")
    await delay(1)
    console.log(blue + "Novo salário: " + white + salario + " reais.")
    await delay(1)
    console.log(green + "Aumento de " + (salario - b) + " reais." + white)
    console.log(yellow + "==================================================================================================================" + white)
}

async function Exercicio5(a){

    console.clear()
    console.log(yellow + "5 - Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano.")
    await delay(3)
    console.log("Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito.")
    await delay(2)
    console.log("Mostre uma mensagem informando o saldo médio e o valor do crédito.")

    var saldo = a
    var flag = 0
    var credito = 0
    if (saldo < 201){
        flag = 1
    } else if (saldo > 200 && saldo < 401){
        credito = saldo*0.2
    } else if (saldo > 400 && saldo < 601){
        credito = saldo*0.3
    } else if (saldo > 600){
        credito = saldo*0.4
    }

    await delay(3)
    console.log(blue + "Saldo: " + white + saldo)
    if (flag == 1){
        await delay(1)
        console.log(red + "Não há nehum valor a ser creditado!" + white)
    } else {
        await delay(1)
        console.log(green + "Crédito: " + white + credito)
    }

    console.log(yellow + "==================================================================================================================" + white)
}

async function Exercicio6(a, b){

    console.clear()
    console.log(yellow + "6 - Para uma lanchonete, escrever um algoritmo que leia o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche." + white)

    var codigo = a
    var quant = b
    var valor = 0
    var flag = 0
    if (codigo == 1 && quant > 0){
        valor = quant * 11
    } else if (codigo == 2 && quant > 0){
        valor = quant * 8.5
    } else if (codigo == 3 && quant > 0){
        valor = quant * 8
    } else if (codigo == 4 && quant > 0){
        valor = quant * 9
    } else if (codigo == 5 && quant > 0){
        valor = quant * 10
    } else if (codigo == 6 && quant > 0){
        valor = quant * 4.5
    } else {
        flag = 1
    }

    await delay(5)
    if (flag == 1){
        console.log(red + "Pedido inválido! Por favor, refaça seu pedido." + white)
    } else {
        console.log(green + "Seu pedido de código " + codigo + " com " + quant + " de quantidade, ficou no valor de " + valor + " reais. Muito obrigado!" + white)
    }

    console.log(yellow + "==================================================================================================================" + white)
}
}