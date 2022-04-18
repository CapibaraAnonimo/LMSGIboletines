document.body.addEventListener("mousemove", muestraInformacion);
document.body.addEventListener("mousedown", muestraInformacion);
document.body.addEventListener("keypress", muestraInformacion);

function muestraInformacion(mensaje) {
    let info = document.getElementById("info");
    if (mensaje.type === "mousemove" || mensaje.type === "mousedown") {
        info.innerHTML = '<h1>' + mensaje.type + '</h1>';


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
        if (mensaje.type === "mousedown") {
            info.style.cssText = "border: black 2px solid;" +
                "width: fit-content;" +
                "padding: 10px;" +
                "position: fixed;" +
                "background-color: #FFFFCC;";
        }
    } else if (mensaje.type === "keypress") {
        info.innerHTML = '<h1>' + mensaje.type + '</h1>';
        info.innerHTML += '<p>' + "Carácter [" + mensaje.key + "]" + '</p>';
        info.innerHTML += '<p>' + "Codigo [" + mensaje.keyCode + "]" + '</p>';
        info.style.cssText = "border: black 2px solid;" +
            "width: fit-content;" +
            "padding: 10px;" +
            "position: fixed;" +
            "background-color: #CCE6FF;";
    }
}