window.onload = inicializar;
function inicializar() {
    document.getElementById("boton1").addEventListener("click", abrirVentana, false);
}
let ventana;
function abrirVentana() {
    
    ventana = open("http://localhost:4200/admin", "Ventana");
}

