

function validarFormulario() {
    var nombreUsuario = document.getElementById("Nombre").value;
    var formulario = document.getElementById("Formulario");
    var validador = true;

    if (nombreUsuario.length > 1) {
        console.log("Nombre correcto");
        document.getElementById("errorNombre").style.visibility = "hidden";
    } else {
        validador = false;
        document.getElementById("errorNombre").style.visibility = "visible";
    }

    if (validador == true) {
        formulario.submit();
    }

    if (validador) {
        window.location.href = "formularioenviado.html";
    }
}
setTimeout(function() {
    document.getElementById("loading").style.display = "none";
}, 2000);
setTimeout(function() {
    document.getElementById("contenedorDelForm").className = "contenedor-formulario-enviado-total";
    document.getElementById("contenedorDelForm").style.transform = "translateY(0)"
    document.getElementById("contenedorDelForm").style.opacity = "1"
    /*
    transform: translateY(0);
    opacity: 1;*/
}, 3000);

function validarFormulario() {
    var validador = true;

    var nombreUsuario = document.getElementById("Nombre").value;
    if (nombreUsuario.length > 1) {
        document.getElementById("errorNombre").style.visibility = "hidden";
    } else {
        validador = false;
        document.getElementById("errorNombre").style.visibility = "visible";
    }

    var apellidoUsuario = document.getElementById("Apellido").value;
    if (apellidoUsuario.length > 1) {
        document.getElementById("errorApellido").style.visibility = "hidden";
    } else {
        validador = false;
        document.getElementById("errorApellido").style.visibility = "visible";
    }

    var mailUsuario = document.getElementById("Mail").value;
    if (mailUsuario.includes("@")) {
        document.getElementById("errorMail").style.visibility = "hidden";
    } else {
        validador = false;
        document.getElementById("errorMail").style.visibility = "visible";
    }

    var nombreObra = document.getElementById("NombreObra").value;
    if (nombreObra.length > 1) {
        document.getElementById("errorNombreObra").style.visibility = "hidden";
    } else {
        validador = false;
        document.getElementById("errorNombreObra").style.visibility = "visible";
    }

    var generoObra = document.getElementById("GeneroObra").value;
    if (generoObra.length > 1) {
        document.getElementById("errorGeneroObra").style.visibility = "hidden";
    } else {
        validador = false;
        document.getElementById("errorGeneroObra").style.visibility = "visible";
    }

    var precioObra = document.getElementById("PrecioObra").value;
    if (!isNaN(precioObra) && precioObra > 0) {
        document.getElementById("errorPrecioObra").style.visibility = "hidden";
    } else {
        validador = false;
        document.getElementById("errorPrecioObra").style.visibility = "visible";
    }

    var idiomaObra = document.getElementById("IdiomaObra").value;
    if (idiomaObra.length > 1) {
        document.getElementById("errorIdiomaObra").style.visibility = "hidden";
    } else {
        validador = false;
        document.getElementById("errorIdiomaObra").style.visibility = "visible";
    }

    var edadObra = document.getElementById("EdadObra").value;
    if (!isNaN(edadObra) && edadObra > 0) {
        document.getElementById("errorEdadObra").style.visibility = "hidden";
    } else {
        validador = false;
        document.getElementById("errorEdadObra").style.visibility = "visible";
    }

    var descripcionObra = document.getElementById("DescripcionObra").value;
    if (descripcionObra.length > 10) { 
        document.getElementById("errorDescripcionObra").style.visibility = "hidden";
    } else {
        validador = false;
        document.getElementById("errorDescripcionObra").style.visibility = "visible";
    }

    if (validador) {
        window.location.href = "formularioenviado.html";
    }
}

