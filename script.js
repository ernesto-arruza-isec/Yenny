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

var botonMostrarTodo = document.querySelector(".mostrar-todo2");

botonMostrarTodo.addEventListener("click", function() {
    alert("Estamos trabajando para agregar más libros a esta sección");
});


document.addEventListener('DOMContentLoaded', function () {
    const botonIzq = document.querySelector('.boton-izq');
    const botonMedio = document.querySelector('.boton-medio');
    const botonDer = document.querySelector('.boton-der');
    const tarjetasDiv = document.querySelector('.tarjetas');
    const botones = document.querySelectorAll('.boton-izq, .boton-medio, .boton-der');

    function actualizarTarjetas(imagenes) {
        tarjetasDiv.innerHTML = '';
        imagenes.forEach((imagen, index) => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta');

            const img = document.createElement('img');
            img.src = `img/libros/libro ${imagen}.webp`;
            img.alt = `Libro ${imagen}`;
            tarjeta.appendChild(img);

            const nombreLibro = document.createElement('p');
            nombreLibro.textContent = `Libro ${imagen}`;
            tarjeta.appendChild(nombreLibro);

            const precio = document.createElement('p');
            precio.textContent = `$25.000`;
            tarjeta.appendChild(precio);

            tarjetasDiv.appendChild(tarjeta);
        });
    }

    function seleccionarBoton(boton) {
        botones.forEach(function (btn) {
            btn.classList.remove('boton-activo');
        });
        boton.classList.add('boton-activo');
    }


    botonIzq.addEventListener('click', function () {
        seleccionarBoton(botonIzq);
        const imagenesPopulares = [11, 2, 3];
        actualizarTarjetas(imagenesPopulares);
    });

    botonMedio.addEventListener('click', function () {
        seleccionarBoton(botonMedio);
        const imagenesIndNacional = [4, 5, 6];
        actualizarTarjetas(imagenesIndNacional);
    });

    botonDer.addEventListener('click', function () {
        seleccionarBoton(botonDer);
        const imagenesEmergentes = [7, 8, 9];
        actualizarTarjetas(imagenesEmergentes);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const elementsToAnimate = document.querySelectorAll('.banner');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkAnimation() {
        elementsToAnimate.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkAnimation);
    checkAnimation();
});

document.addEventListener('DOMContentLoaded', function () {
    // Cargar los libros al iniciar la página
    cargarLibros();
});

async function cargarLibros() {
    try {
        const response = await fetch('tarjetas.json');
        const librosData = await response.json();

        // Crear objetos de la clase Libro
        const libros = librosData.map(libro => new Libro(libro.nombre, libro.precio, libro.foto, libro.alt, libro.categoria));

        // Renderizar todos los libros al cargar la página
        renderizarLibros(libros);

        // Añadir eventos a los botones de filtrado
        document.getElementById('btn-industria-nacional').addEventListener('click', () => {
            cambiarFiltro(libros, 'Industria Nacional');
        });

        document.getElementById('btn-mas-populares').addEventListener('click', () => {
            cambiarFiltro(libros, 'Más populares');
        });

        document.getElementById('btn-nuevos-ingresos').addEventListener('click', () => {
            cambiarFiltro(libros, 'Nuevos ingresos');
        });
    } catch (error) {
        console.error('Error al cargar los libros:', error);
    }
}

// Definir la clase Libro
class Libro {
    constructor(nombre, precio, foto, alt, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
        this.alt = alt;
        this.categoria = categoria;
    }
}

// Función para renderizar los libros en la página
function renderizarLibros(libros) {
    const contenedorLibros = document.getElementById('contenedor-libros');
    contenedorLibros.innerHTML = ''; // Limpiar contenedor

    libros.forEach(libro => {
        const libroDiv = document.createElement('div');
        libroDiv.classList.add('libro');
        libroDiv.innerHTML = `
            <img src="${libro.foto}" alt="${libro.alt}">
            <div class="info-libro">
                <h4>${libro.nombre}</h4>
                <p>${libro.precio}</p>
            </div>
        `;
        contenedorLibros.appendChild(libroDiv);
    });
}

// Función para filtrar los libros según la categoría seleccionada
function cambiarFiltro(libros, categoria) {
    const librosFiltrados = libros.filter(libro => libro.categoria.toLowerCase() === categoria.toLowerCase());
    renderizarLibros(librosFiltrados);
}
