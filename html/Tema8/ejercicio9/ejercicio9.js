let cadena;
cadena = prompt("Introduzca una cadena");
alert(mayus(cadena));



function mayus(cadena){
    let numMayus = 0;
    let numMinus = 0;
    let cad;
    for (let letra of cadena) {
        if(letra === letra.toUpperCase())
            numMayus++;
        else
            numMinus ++;
    }
    if(numMinus === 0)
        cad = "La cadena está en mayúsculas";
    else if (numMayus === 0)
        cad = "La cadena está en minúscula";
    else
        cad = "La cadena está compuesta por letras mayúsculas y minúsculas";
    return cad;

}