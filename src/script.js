// let circularProgress = document.querySelector(".Graphic-circular-progress"),
// progressValue = document.querySelector(".Graphic-progress-value");

// let progressStarValue = 0,
// progressEndValue1 = 83,
// progressEndValue2 = 95,
// speed = 10;


// let progress1 = setInterval(()=>{
//     progressStarValue++;

//     progressValue.textContent = `${progressStarValue}%`
//     circularProgress.style.background = `conic-gradient(var(--graphic-color) ${progressStarValue * 3.6}deg, var(--opacity-color) 0deg)`

//     if(progressStarValue == progressEndValue1) {
//         clearInterval(progress1)
//     }

// }, speed)

window.addEventListener('load', function() {
    let circularProgress = document.querySelectorAll(".Graphic-circular-progress"),
        progressValue = document.querySelectorAll(".Graphic-progress-value");

    let progressStarValue = 0,
        progressEndValues = [83, 95], // Porcentajes finales para cada gráfico
        speed = 10;

    for (let i = 0; i < circularProgress.length; i++) {
        animateProgress(circularProgress[i], progressValue[i], progressEndValues[i]);
    }

    function animateProgress(circularProgress, progressValue, progressEndValue) {
        let progress = 0;

        let progressInterval = setInterval(() => {
            progress++;
            progressValue.textContent = `${progress}%`;
            circularProgress.style.background = `conic-gradient(var(--graphic-color) ${progress * 3.6}deg, var(--opacity-color) 0deg)`;

            if (progress === progressEndValue) {
                clearInterval(progressInterval);
            }
        }, speed);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos con la clase 'Portfolio-score-positive'
    var numbers = document.querySelectorAll('.Portfolio-score-positive');
    
    // Iterar sobre los elementos y animar los números
    numbers.forEach(function(number) {
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
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        element.textContent = current.toFixed(2) + '%';
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}


