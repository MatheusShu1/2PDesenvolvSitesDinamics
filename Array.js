parents = ['Darth', 'Luke', 1, false]

console.log(parents)

parents[1] = 2 - 1

console.log(parents)

parents.pop()

console.log(parents)

parents.unshift('mamãe')

console.log(parents)

function ArrumarArray(){

    teste = parents.slice(0,3)

    console.log(teste)
}

matriz = Array(3)


// Fazendo a matriz
for (i = 0; i < 3; i++){
    matriz[i] = Array(3)
}

// Varrendo a matriz
for (linha = 0; linha < 3; linha++){
    for (coluna = 0; coluna < 3; coluna++){
        matriz[linha][coluna] = ''
    }
}

// Iniciando funções
function soma(a,b){
    return a+b
}
result = soma(2,4)
console.log(result)

// Função anônima
raiz = function (n){
    n**0.5
    return n
}
console.log(raiz(9))

// Função arrow
raiz1 = (n) => {
    return n**0.5
}

// Versão simplificada
raiz3 = n => n**0.5