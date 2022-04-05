document.body.addEventListener("mousemove", muestraInformacion)

function muestraInformacion(mensaje) {
    let info = document.getElementById("info");
    info.innerHTML = '<h1>' + "Ratón" + '</h1>';


    for (let i = 1; i < mensaje.length; i++) {
        info.innerHTML += '<p>' + mensaje[i] + '</p>';
    }


    info.innerHTML += '<p>' + "Navegador [" + mensaje.clientX + ", " + mensaje.clientY + "]" + '</p>';
    info.innerHTML += '<p>' + "Pagina [" + mensaje.pageX + ", " + mensaje.pageY + "]" + '</p>';
    info.style.cssText = "border: black 2px solid;" +
        "width: fit-content;" +
        "padding: 10px;" +
        "position: fixed;" +
        "background-color: white;";
}