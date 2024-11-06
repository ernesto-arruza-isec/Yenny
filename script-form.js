/* https://magicloops.dev/es */
function enviarMail(email, nombre, apellido, mensaje) {
    // Por si necesito usar letrs o simbolos raros
    const emailEncoded = encodeURIComponent(email);
    const nombreEncoded = encodeURIComponent(nombre);
    const apellidoEncoded = encodeURIComponent(apellido);
    const mensajeEncoded = encodeURIComponent(mensaje);
 //Ahora necesitamos la url de la api junto a los valores codificados
 //La api la cree en magicloops.dev y envia el mail a mi casilla personal.
 
    const url = `https://magicloops.dev/api/loop/run/b1170560-50d7-48f2-9dd9-799d7739cd6e?email=${emailEncoded}&nombre=${nombreEncoded}&apellido=${apellidoEncoded}&mensaje=${mensajeEncoded}`;

    fetch(url)//Envia una peticion a la api
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data); // Esperemos que sea un mensaje de ok y estatus 200 jaja
            return true;
        })
        .catch(error => {
            console.error('Hubo un error:', error);
            return 0;
        });
}
function enviarCorreo(){
    const email = document.getElementById("email").value;
    const usuario = document.getElementById("nombreUsuario").value;
    const apellido = document.getElementById("apellidoUsuario").value;
    const mensaje = document.getElementById("mensajeUsuario").value;
    enviarMail(email,usuario,apellido,mensaje);
    return false;
}
/* enviarMail('prueba@pruebafacu.com', 'Facu', 'Romero', 'Hola curso, es una prueba'); */
