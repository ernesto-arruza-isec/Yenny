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