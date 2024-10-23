
function mensajeMostrar(){
    alert("Estamos trabajando para agregar más libros a esta sección");
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
                <a>MEDIOS DE PAGO</a>
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

