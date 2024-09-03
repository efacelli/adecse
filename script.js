document.addEventListener('DOMContentLoaded', function() {
    const botonMostrar = document.getElementById('mostrarAsesoramiento');
    const detalles = document.getElementById('detallesAsesoramiento');

    botonMostrar.addEventListener('click', function() {
        if (detalles.style.display === 'none') {
            detalles.style.display = 'block';
            botonMostrar.textContent = 'Ocultar detalles';
        } else {
            detalles.style.display = 'none';
            botonMostrar.textContent = 'Para un asesoramiento más personalizado';
        }
    });
});

function contactUs() {
    window.location.href = "mailto:adecse04@hotmail.com";
}