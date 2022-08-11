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
}
console.log(tri(100, 4, 1))

function reais(valor, cem, cinquenta, vinte, dez, cinco, dois,um){
    return 
}

