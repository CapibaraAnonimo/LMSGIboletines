let cadena = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
alert(ordenar(cadena));

function ordenar(cadena) {
    for (let i = 0; i < cadena.length - 1; i++) {
        for (let j = 0; j < cadena.length - i - 1; j++) {
            if (cadena[j + 1] < cadena[j]) {
                [cadena[j], cadena[j + 1]] = [cadena[j + 1], cadena[j]];
            }
        }
    }
    return cadena;
}