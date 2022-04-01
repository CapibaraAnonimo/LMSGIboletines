function muestraOculta(posicion) {
    let enlaceId = "enlace_";
    let pId = "contenidos_";

    enlaceId = enlaceId + (posicion + 1);
    pId = pId + (posicion + 1);

    if (document.getElementById(pId).style.display !== "none") {
        document.getElementById(pId).style.display === "none";
    }
}