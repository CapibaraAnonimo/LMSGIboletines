let cuerpo = document.body;
cuerpo.style.cssText += "margin: 0;" +
    "height: 100vh;"
cuerpo.addEventListener("mousemove", mostrarPosicion);


function mostrarPosicion(data) {
    let info;
    if (cuerpo.querySelectorAll("body div").length === 0) {
        cuerpo.appendChild(document.createElement("div"));
        info = document.querySelector("body div");
    } else {
        info = document.querySelector("body div");
    }

    if (data.clientX >= (screen.width / 2) && data.clientY >= (screen.height / 2)) {
        info.innerHTML = "El cursor está abajo a la derecha";
    } else if (data.clientX >= (screen.width / 2) && data.clientY < (screen.height / 2)) {
        info.innerHTML = "El cursor está arriba a la derecha";
    } else if (data.clientX < (screen.width / 2) && data.clientY >= (screen.height / 2)) {
        info.innerHTML = "El cursor está abajo a la izquierda";
    } else if (data.clientX < (screen.width / 2) && data.clientY < (screen.height / 2)) {
        info.innerHTML = "El cursor está arriba a la izquierda";
    }
}