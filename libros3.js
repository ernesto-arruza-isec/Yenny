document.addEventListener('DOMContentLoaded', function () {
    // Cargar los libros al iniciar la página
    cargarLibros();
});

async function cargarLibros() {
    try {
        const response = await fetch('tarjetas3.json');
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
