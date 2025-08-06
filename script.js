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
// Carrusel
let imagenes = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];
let indice = 0;

function mostrarImagen() {
    document.getElementById("imagen-carrusel").src = imagenes[indice];
}

function siguiente() {
    indice = (indice + 1) % imagenes.length;
    mostrarImagen();
}

function anterior() {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
}

// Modal
function abrirModal() {
    document.getElementById("miModal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}

// Cerrar modal si se hace clic fuera del contenido
window.onclick = function(event) {
    let modal = document.getElementById("miModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function obtenerUsuario() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const usuario = data.results[0];

            document.getElementById("fotoUsuario").src = usuario.picture.large;
            document.getElementById("nombreUsuario").textContent = `${usuario.name.first} ${usuario.name.last}`;
            document.getElementById("paisUsuario").textContent = `País: ${usuario.location.country}`;
            document.getElementById("usuario").style.display = "block";
        })
        .catch(error => {
            console.error("Error al obtener usuario:", error);
            alert("Hubo un error al obtener el usuario. Intenta de nuevo.");
        });
}
