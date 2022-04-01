function anade() {
    let nuevo = document.createElement('li')
    let viejo = document.getElementById("lista");
    nuevo.innerHTML = "Nodo nuevo";
    viejo.appendChild(nuevo);
}