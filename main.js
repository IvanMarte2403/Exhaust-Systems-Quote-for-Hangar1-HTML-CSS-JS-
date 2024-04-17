document.getElementById('tipoAuto').addEventListener('change', function() {
    var valorSeleccionado = this.value;
    console.log(valorSeleccionado);
});

var modalAbierto = null;
var sistemaDeEscape = {
    segmentoCoche: document.getElementById('tipoAuto').value,
    terminalEscape: null,
    sistemaEscape: null,
    crossOver: null,
    downpipe: null,
    silenciador: null,
    resonador: null,
    juntasFlexibles: null,
    headers: null
}

// ======Asignación de Productos=======

var enlaces = document.querySelectorAll('.productos-cotizador a');

// =========Tipo De Auto & Mostrado de Modal==========
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function(e) {
        //Evita que el enlace navegue a otra página 
        e.preventDefault();
        //Obten el id del enlace

        var idEnlace = enlace.id;
        console.log('idEnlace: ' + idEnlace);
        //Usar el id del enlace para obtenerel modal correspondiente 
        var tipoAuto = document.getElementById('tipoAuto').value;

        // console.log('tipoAuto: ' + tipoAuto);
        console.log('modal-' + tipoAuto + '-'+ idEnlace);

        //Si hay un modal abierto, cierralo
        if (modalAbierto){
            modalAbierto.style.display = 'none';
        }

        var modal = document.getElementById('modal-' + tipoAuto + '-'+ idEnlace);

        console.log(modal);

        //Mostrar el Modal

        modal.style.display = 'block';
        modalAbierto = modal;

        });
    });


// ==============================================================   
    // ========Sistemas de Escape Godin=========

    var iconos = document.querySelectorAll('#modal-Godin-producto-terminales i');

    iconos.forEach(function(icono) {
        icono.addEventListener('click', function() {
            // Obten el id del icono
            var idIcono = icono.id;
    
            // Si el producto ya fue seleccionado, deseleccionarlo
            if (sistemaDeEscape.terminalEscape === idIcono) {
                sistemaDeEscape.terminalEscape = null;
                icono.classList.remove('fa-check');
                icono.classList.add('fa-plus');
                icono.style.color = '';
            } else {
                // Si otro producto fue seleccionado previamente, deseleccionarlo
                if (sistemaDeEscape.terminalEscape) {
                    var iconoAnterior = document.getElementById(sistemaDeEscape.terminalEscape);
                    iconoAnterior.classList.remove('fa-check');
                    iconoAnterior.classList.add('fa-plus');
                    iconoAnterior.style.color = '';
                }
    
                // Seleccionar el nuevo producto
                sistemaDeEscape.terminalEscape = idIcono;
                icono.classList.remove('fa-plus');
                icono.classList.add('fa-check');
                icono.style.color = 'green';
            }
        });
    });

    var iconosSistemaDeEscape = document.querySelectorAll('#modal-Godin-producto-sistema-de-escape i');

    var iconoSistemaDeEscape = document.querySelectorAll('#modal-Godin-producto-sistema-de-escape i');

iconoSistemaDeEscape.forEach(function(icono) {
    icono.addEventListener('click', function() {
        // Obten el id del icono
        var idIcono = icono.id;

        // Si el producto ya fue seleccionado, deseleccionarlo
        if (sistemaDeEscape.sistemaEscape === idIcono) {
            sistemaDeEscape.sistemaEscape = null;
            icono.classList.remove('fa-check');
            icono.classList.add('fa-plus');
            icono.style.color = '';
        } else {
            // Si otro producto fue seleccionado previamente, deseleccionarlo
            if (sistemaDeEscape.sistemaEscape) {
                var iconoAnterior = document.getElementById(sistemaDeEscape.sistemaEscape);
                iconoAnterior.classList.remove('fa-check');
                iconoAnterior.classList.add('fa-plus');
                iconoAnterior.style.color = '';
            }

            // Seleccionar el nuevo producto
            sistemaDeEscape.sistemaEscape = idIcono;
            icono.classList.remove('fa-plus');
            icono.classList.add('fa-check');
            icono.style.color = 'green';
        }
    });
});


// ==========Crossoverr==========

var iconosCrossOver = document.querySelectorAll('#modal-Godin-producto-crossover i');

iconosCrossOver.forEach(function(icono) {
    icono.addEventListener('click', function() {
        // Obten el id del icono
        var idIcono = icono.id;

        // Si el producto ya fue seleccionado, deseleccionarlo
        if (sistemaDeEscape.crossOver === idIcono) {
            sistemaDeEscape.crossOver = null;
            icono.classList.remove('fa-check');
            icono.classList.add('fa-plus');
            icono.style.color = '';
        } else {
            // Si otro producto fue seleccionado previamente, deseleccionarlo
            if (sistemaDeEscape.crossOver) {
                var iconoAnterior = document.getElementById(sistemaDeEscape.crossOver);
                iconoAnterior.classList.remove('fa-check');
                iconoAnterior.classList.add('fa-plus');
                iconoAnterior.style.color = '';
            }

            // Seleccionar el nuevo producto
            sistemaDeEscape.crossOver = idIcono;
            icono.classList.remove('fa-plus');
            icono.classList.add('fa-check');
            icono.style.color = 'green';
        }
    });
});



// =====================Aplicaciones del botón de Cotizar=====================
var rutasImagenes = {
    terminalEscape: 'productos/terminales/',
    sistemaEscape: 'productos/sistema-de-escape/',
    crossOver: 'productos/crossover/'
    // Agrega aquí las rutas para las demás propiedades si las necesitas
};

document.getElementById('boton-cotizar').addEventListener('click', function(e) {
    e.preventDefault();

    // Verifica si al menos una de las propiedades requeridas no es nula
    if (!sistemaDeEscape.terminalEscape && !sistemaDeEscape.sistemaEscape && !sistemaDeEscape.crossOver && !sistemaDeEscape.downpipe && !sistemaDeEscape.silenciador && !sistemaDeEscape.resonador && !sistemaDeEscape.juntasFlexibles && !sistemaDeEscape.headers) {
        // Si todas las propiedades son nulas, no muestres el modal y termina la ejecución de la función
        return;
    }

    // Obten el contenedor de imágenes
    var contenedorImagenes = document.getElementById('imagenes-cotizacion');

    // Limpia el contenedor de imágenes
    contenedorImagenes.innerHTML = '';

    // Agrega las imágenes de los productos seleccionados
    for (var producto in sistemaDeEscape) {
        if (producto !== 'segmentoCoche' && sistemaDeEscape[producto]) {
            var imagen = document.createElement('img');
            imagen.src = rutasImagenes[producto] + sistemaDeEscape[producto] + '.png';
            contenedorImagenes.appendChild(imagen);
        }
    }

    // Oculta todos los modales
    var modales = document.querySelectorAll('.modal');
    modales.forEach(function(modal) {
        modal.style.display = 'none';
    });

    // Muestra el modal de cotización
    document.getElementById('modal-cotizacion').style.display = 'block';
});