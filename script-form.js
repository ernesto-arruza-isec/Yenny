function enviarMail(email, nombre, apellido, mensaje) {
    const emailEncoded = encodeURIComponent(email);
    const nombreEncoded = encodeURIComponent(nombre);
    const apellidoEncoded = encodeURIComponent(apellido);
    const mensajeEncoded = encodeURIComponent(mensaje);

    const url = `https://magicloops.dev/api/loop/run/b1170560-50d7-48f2-9dd9-799d7739cd6e?email=${emailEncoded}&nombre=${nombreEncoded}&apellido=${apellidoEncoded}&mensaje=${mensajeEncoded}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            return true;
        })
        .catch(error => {
            console.error('Hubo un error:', error);
            return false;
        });
}

function enviarCorreo() {
    const email = document.getElementById("email").value.trim();
    const nombre = document.getElementById("nombreUsuario").value.trim();
    const apellido = document.getElementById("apellidoUsuario").value.trim();
    const mensaje = document.getElementById("mensajeUsuario").value.trim();

    // Seleccionar los elementos para mostrar errores
    const emailError = document.getElementById("emailError");
    const nombreError = document.getElementById("nombreError");
    const apellidoError = document.getElementById("apellidoError");
    const mensajeError = document.getElementById("mensajeError");

    // Limpiar errores previos
    emailError.style.display = "none";
    nombreError.style.display = "none";
    apellidoError.style.display = "none";
    mensajeError.style.display = "none";

    let isValid = true;

    // Validar email manualmente
    if (email.length === 0) {
        emailError.innerText = "Complete este campo";
        emailError.style.display = "block";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.innerText = "Agregue un mail válido";
        emailError.style.display = "block";
        isValid = false;
    }

    // Validar nombre
    if (nombre.length === 0) {
        nombreError.innerText = "Complete este campo";
        nombreError.style.display = "block";
        isValid = false;
    }

    // Validar apellido
    if (apellido.length === 0) {
        apellidoError.innerText = "Complete este campo";
        apellidoError.style.display = "block";
        isValid = false;
    }

    // Validar mensaje
    if (mensaje.length === 0) {
        mensajeError.innerText = "Complete este campo";
        mensajeError.style.display = "block";
        isValid = false;
    }

    // Si no es válido, detener el envío
    if (!isValid) {
        return false;
    }

    // Si todo está bien, enviar el correo
    return enviarMail(email, nombre, apellido, mensaje);
}
