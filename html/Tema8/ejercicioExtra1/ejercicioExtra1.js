let tam = +prompt("Introduce el tamaño del array", "5");
let lista = [];
let numero = 0;
let suma = 0;


for (let i = 0; i < tam; i++) {
    numero = +prompt("Introduzca un número", "0");
    lista.push(numero);
    suma += numero;
}

for (let l of lista) {
    alert(l)
}
alert("La suma es " + suma);

do {
    numero = +prompt("Introduzca un número no negativo (negativo para salir)", "0")
    if (numero >= 0){
        suma -= lista.shift();
        suma += numero;
        lista.push(numero);
        alert("La suma es " + suma)
    }
}while(numero >= 0);

