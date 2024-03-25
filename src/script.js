// Evento de carga del contenido del documento
document.addEventListener("DOMContentLoaded", function () {
    var numbers = document.querySelectorAll('.Portfolio-score-positive');

    // Iterar sobre los elementos y animar los números
    numbers.forEach(function (number) {
        // Obtener el texto del número sin el signo y convertirlo a un número flotante
        var score = parseFloat(number.textContent.replace('%', ''));

        // Establecer el valor inicial como cero
        number.textContent = '0.00%';

        // Llamar a la función para animar el número final
        animateValue(number, 0, score, 1500);
    });
});

// Función para animar el número
function animateValue(element, start, end, duration) {
    var range = end - start; // Rango entre el valor inicial y final
    var current = start; // Valor actual inicial
    var increment = end > start ? 1 : -1; // Dirección del incremento
    var stepTime = Math.abs(Math.floor(duration / range)); // Tiempo entre pasos
    var timer = setInterval(function () {
        current += increment; // Incrementar el valor actual
        // Actualizar el texto del elemento con el valor actual
        element.textContent = current.toFixed(2) + '%';
        // Detener la animación cuando se alcanza el valor final
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}