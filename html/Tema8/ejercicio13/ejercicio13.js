window.onload = function () {
    // Número de enlaces de la página
    let enlaces = document.querySelectorAll("a").length;
    alert(enlaces);

    // Dirección del penúltimo enlace
    let todosLosEnlaces = document.querySelectorAll("a")
    let penultimoEnlace = todosLosEnlaces[enlaces - 2];
    alert(penultimoEnlace)

    // Número de enlaces que apuntan a http://prueba
    let enlacesPrueba = 0;
    for (let t of todosLosEnlaces) {
        if (t.href === "http://prueba/")
            enlacesPrueba = enlacesPrueba + 1;
    }
    alert(enlacesPrueba);

    // Número de enlaces del tercer párrafo
    let parrafos = document.querySelectorAll("p");
    let enlacesParrafo = parrafos[2].querySelectorAll("a").length;
    alert(enlacesParrafo);


};