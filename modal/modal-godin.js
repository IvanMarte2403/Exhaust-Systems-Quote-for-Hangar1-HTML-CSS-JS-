


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



// ======Catalizador=======

var iconosCatalizador = document.querySelectorAll('#modal-Godin-producto-catalizadores-de-alto-flujo i');

iconosCatalizador.forEach(function(icono) {
    icono.addEventListener('click', function() {
        // Obten el id del icono
        var idIcono = icono.id;

        // Si el producto ya fue seleccionado, deseleccionarlo
        if (sistemaDeEscape.catalizador === idIcono) {
            sistemaDeEscape.catalizador = null;
            icono.classList.remove('fa-check');
            icono.classList.add('fa-plus');
            icono.style.color = '';
        } else {
            // Si otro producto fue seleccionado previamente, deseleccionarlo
            if (sistemaDeEscape.catalizador ) {
                var iconoAnterior = document.getElementById(sistemaDeEscape.catalizador);
                iconoAnterior.classList.remove('fa-check');
                iconoAnterior.classList.add('fa-plus');
                iconoAnterior.style.color = '';
            }

            // Seleccionar el nuevo producto
            sistemaDeEscape.catalizador = idIcono;
            icono.classList.remove('fa-plus');
            icono.classList.add('fa-check');
            icono.style.color = 'green';
        }
    });
});

// ========Downpipe=========


var iconosDownpipe = document.querySelectorAll('#modal-Godin-producto-downpipe i');

iconosDownpipe.forEach(function(icono) {
    icono.addEventListener('click', function() {
        // Obten el id del icono
        var idIcono = icono.id;

        // Si el producto ya fue seleccionado, deseleccionarlo
        if (sistemaDeEscape.downpipe === idIcono) {
            sistemaDeEscape.downpipe = null;
            icono.classList.remove('fa-check');
            icono.classList.add('fa-plus');
            icono.style.color = '';
        } else {
            // Si otro producto fue seleccionado previamente, deseleccionarlo
            if (sistemaDeEscape.downpipe) {
                var iconoAnterior = document.getElementById(sistemaDeEscape.downpipe);
                iconoAnterior.classList.remove('fa-check');
                iconoAnterior.classList.add('fa-plus');
                iconoAnterior.style.color = '';
            }

            // Seleccionar el nuevo producto
            sistemaDeEscape.downpipe = idIcono;
            icono.classList.remove('fa-plus');
            icono.classList.add('fa-check');
            icono.style.color = 'green';
        }       
    });
});