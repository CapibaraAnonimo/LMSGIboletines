let listaNombres = new Array();
let sorteo = new Array();
let longitud = 0;
let cadena = "";

principal();


listaNombres = nombres();
for (let nombre of listaNombres) {
    alert(nombre);
}


cadena = prompt("Introduzca una cadena para cammellizarla");
alert(camelize(cadena));


longitud = prompt("Introduzca la cantidad de posibilidades del sorteo", "1");
for (let i = 0; i < longitud; i++) {
    sorteo.push(prompt("Introduzca algo"));
}
alert(sortear(sorteo));


function nombres() {
    let listaNombres = new Array();
    let tmp = "";
    do {
        tmp = prompt("Introduzca un nombre (número para salir)");
        if (isNaN(parseInt(tmp)))
            listaNombres.push(tmp);
    } while (isNaN(parseInt(tmp)));
    return listaNombres;
}

function camelize(cadena) {
    let posicion = 0;
    do {
        posicion = cadena.indexOf("-")
        cadena = cadena.slice(0, posicion) + cadena.slice(posicion + 1);
        cadena = cadena.replace(posicion, cadena.substring(posicion, posicion).toUpperCase);
    } while (cadena.indexOf("-") >= 0);
    return cadena;
}

function sortear(sorteo) {
    return sorteo[Math.floor(Math.random() * sorteo.length)];
}
function principal(){
    let lista = nombres();
    lista = camelize(lista);
    alert(sortear(lista));
}