document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const mensaje = document.getElementById('mensaje');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const horario = document.getElementById('horario').value;
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        const reserva = {
            horario: horario,
            nombre: nombre,
            email: email
        };

        // Aquí deberías enviar la reserva a tu servidor para almacenarla en una base de datos
        // Por ahora, simplemente mostraremos un mensaje de confirmación
        mostrarMensaje('Reserva realizada con éxito. Te esperamos en ' + horario);

        // Limpia el formulario después de la reserva
        formulario.reset();
    });

    function mostrarMensaje(mensajeText) {
        mensaje.textContent = mensajeText;
        mensaje.style.display = 'block';

        // Oculta el mensaje después de 5 segundos
        setTimeout(function() {
            mensaje.style.display = 'none';
        }, 5000);
    }
});
