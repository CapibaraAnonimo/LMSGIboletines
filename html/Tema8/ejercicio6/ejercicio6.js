let numeroDNI = 0;
let letraDNI;
let posicionLetra = 0;
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

nuermoDNI = prompt("Introduzca el número del DNI", "0");
letraDNI = prompt("Introduzca la letra del DNI", "T").toUpperCase();
if (~~numeroDNI > 0 || ~~numeroDNI < 99999999) {
    posicionLetra = ~~numeroDNI%23;
    if(letras[posicionLetra] === letraDNI)
        alert("Su DNI es válido");
    else
        alert("Su DNI no es válido");
} else
    alert("Número no valido");

