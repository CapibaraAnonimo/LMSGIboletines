let cadena = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
alert(ordenar(cadena));

function ordenar(cadena) {
    let aux;
    for (let i = cadena.length - 1; i > 0; i--) {
        if(cadena[i] < cadena[0]){
            aux = cadena[i];
            cadena.unshift(i, 1, 0, aux);
            i = cadena.length;
        }
        return cadena
    }
}