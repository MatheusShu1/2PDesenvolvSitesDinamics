function JogoDaVelha(){
    matriz = Array(3)
    for(i = 0; i < 3; i++){
        matriz[i] = Array(3)
    }
}

JogoDaVelha()
cont = 0
for(linha = 0; linha < 3; linha++){
    for (coluna = 0; coluna < 3; coluna++){
        cont = cont + 1
        matriz[linha][coluna] = cont
    }
}

for (i = 0; i < 3; i++){
    console.log(matriz[i])
}

// Estudar isso: readline
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What's your name?`, numero => {
    console.log(`Hi ${name}!`)
    readline.close()
  })
  
function Escolhas(){
    conta = 0
    for (linha = 0; linha < 3; linha++){
        for (coluna = 0; coluna < 3; coluna++){
            if (numero == matriz[linha][coluna]){
                matriz[linha][coluna] = -1
            }
        }
    }
}

Escolhas()

console.log()
for (i = 0; i < 3; i++){
    console.log(matriz[i])
}