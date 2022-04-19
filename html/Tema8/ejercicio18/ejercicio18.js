let cuerpo = document.body;
cuerpo.addEventListener("mousemove", mostrarPosicion);
cuerpo.innerHTML += "Body"
cuerpo.style.cssText += "font-size = 40px" +
    "width 1500px;" +
    "height = 1500px;" +
    "background-color = black;";


function mostrarPosicion(data) {
    alert("Se entra");
    let info;
    if (!document.body.hasChildNodes()) {
        document.body.appendChild(document.createElement("div"));
        info = document.querySelector("body div");
    } else {
        info = document.querySelector("body div");
    }
    document.body.style.cssText += "width = 100px;" +
        "background-color = black;";

    if (data.clientX >= window.screenX / 2 && data.clientY >= window.screenY / 2) {
        info.innerHTML += "El cursor está arriba a la izquierda";
    }
}