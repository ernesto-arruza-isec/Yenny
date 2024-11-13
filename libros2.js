document.addEventListener('DOMContentLoaded', function () {
    // Cargar los libros al iniciar la página
    cargarLibros();
});



async function cargarLibros() {
    try {
        const response = await fetch('tarjetas2.json');
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
    contenedorLibros.innerHTML = '';

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

        if (libro.nombre === "Mejor que ayer") {
            libroDiv.style.cursor = "pointer";
            libroDiv.addEventListener('click', () => {
                window.location.href = "comprar2.html";
            });
        }

        contenedorLibros.appendChild(libroDiv);
    });
}

// Función para filtrar los libros según la categoría seleccionada
function cambiarFiltro(libros, categoria) {
    const librosFiltrados = libros.filter(libro => libro.categoria.toLowerCase() === categoria.toLowerCase());
    renderizarLibros(librosFiltrados);
}

class HeaderComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<nav class="navegacion">
        <div class="superior">
            <p>ENVÍO GRATIS EN PRODUCTOS SELECCIONADOS</p>
        </div>
        <div class="inferior">
            <div class="logo">
                <a href="index.html"><img src="img/logo-de-yenny.png" alt="Logo Yenny"></a>
            </div>
            <div class="menu">
                <div class="desplegable">
                    <a href="#">LIBROS</a>
                    <ul class="desplegable-contenido">
                        <li><a href="libros.html">Novelas Juveniles</a></li>
                        <li><a href="libros2.html">Novelas Románticas</a></li>
                        <li><a href="libros3.html">Novelas Emergentes</a></li>
                    </ul>
                </div>
                <a href="formescritores.html">ESCRITORES EMERGENTES</a>
                <a href="mediosdepago.html">MEDIOS DE PAGO</a>
            </div>
            <div class="iconos">
                <img src="img/icono-de-lupa.png" alt="Buscar">
                <img src="img/icono-de-carrito.png" alt="Carrito">
            </div>
        </div>
    </nav>`;
    }
  }
  customElements.define('header-component', HeaderComponent);