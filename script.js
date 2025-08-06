function mostrarAlerta() {
    alert("¡Esta es una alerta simple!");
}

function confirmar() {
    let resultado = confirm("¿Estás seguro de continuar?");
    alert("Elegiste: " + (resultado ? "Sí" : "No"));
}

function solicitarNombre() {
    let nombre = prompt("¿Cuál es tu nombre?");
    if (nombre) {
        alert("Hola, " + nombre + "!");
    }
}
