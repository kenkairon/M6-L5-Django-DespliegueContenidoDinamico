// Event listener para el botón de cerrar sesión
document.getElementById('logout').addEventListener('click', function (e) {
    e.preventDefault(); // Evita la acción por defecto de seguir el enlace

    // Mostrar el mensaje de confirmación usando SweetAlert
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas cerrar sesión?",
        iconHtml: '<i class="bi bi-exclamation-circle-fill" style="font-size: 80px; color: #f39c12;"></i>', // Icono de Bootstrap
        showCancelButton: true,
        confirmButtonText: 'Sí, cerrar sesión',
        cancelButtonText: 'Cancelar',
        customClass: {
            popup: 'custom-popup', // Personaliza el cuadro de la alerta
            title: 'custom-title', // Personaliza el título
            confirmButton: 'custom-confirm-button', // Personaliza el botón de confirmar
            cancelButton: 'custom-cancel-button' // Personaliza el botón de cancelar
        },
        willOpen: () => {
            // Añadir la clase de rotación tipo manecillas de reloj al icono cuando se abre la alerta
            const icon = document.querySelector('.swal2-icon');
            if (icon) {
                icon.classList.add('rotate-icon-clockwise'); // Añadir la clase de rotación tipo reloj
            }
        },
        willClose: () => {
            // Eliminar la clase de rotación cuando la alerta se cierre
            const icon = document.querySelector('.swal2-icon');
            if (icon) {
                icon.classList.remove('rotate-icon-clockwise'); // Eliminar la clase de rotación
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Añadir un retraso antes de redirigir para que el usuario tenga tiempo de ver la alerta
            setTimeout(() => {
                window.location.href = '/logout'; // Cambia '/logout' por la URL real de logout
            }, 1000); // Retraso de 1000 milisegundos (1 segundo)
        }
    });
});







