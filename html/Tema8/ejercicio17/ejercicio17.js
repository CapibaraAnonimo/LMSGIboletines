document.body.addEventListener("mousemove", muestraInformacion)

function muestraInformacion(mensaje) {
    let info = document.getElementById("info");
    info.innerHTML = '<h1>' + mensaje[0] + '</h1>';
    for (let i = 1; i < mensaje.length; i++) {
        info.innerHTML += '<p>' + mensaje[i] + '</p>';
    }
}