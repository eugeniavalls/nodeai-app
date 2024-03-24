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



