let cadena;
cadena = prompt("Introduzca una cadena", "");
if (palindromo(cadena))
    alert("La cadena es un palíndromo");
else
    alert("La cadena no es un palíndromo");


function palindromo(cadena) {
    let pal = true;
    let cad = cadena.toLowerCase().replaceAll(" ", "");
    let j = cad.length - 1;
    for (let i = 0; i !== j && i <= j; i++, j--) {
        if (cad.charAt(i) !== cad.charAt(j)) {
            i = 1;
            j = 3;
            pal = false;
        }
    }
    return pal;
}