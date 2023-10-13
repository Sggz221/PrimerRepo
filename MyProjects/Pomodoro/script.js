let r = document.querySelector(":root")
let toggle = document.getElementById("darkmode");
let workTitle = document.getElementById('estudio');
let breakTitle = document.getElementById('descanso');
let audio = document.getElementById("audio");
let workTime = 25;
let breakTime = 5;
let breakCount = 0;
let seconds = 0;
let intervalID = null; // Variable para el identificador del intervalo
//Cambiar modo
toggle.onclick = function(){
    if(toggle.classList.contains("disabled")){
        r.style.setProperty("--color-fuente", "rgb(255, 235, 254)");
        r.style.setProperty("--color-primario", "rgb(24, 29, 42)");
        toggle.classList.remove("disabled");
        toggle.classList.add("active");
    }else if(toggle.classList.contains("active")){
        r.style.setProperty("--color-fuente", "#3A2739ff");
        r.style.setProperty("--color-primario", "#BFD4E5ff");
        toggle.classList.remove("active");
        toggle.classList.add("disabled");
    }
}   
// Inicializa el contador en la ventana
window.onload = () => {
    resetTimer();
};

function resetTimer() {
    if (intervalID) {
        clearInterval(intervalID); // Detiene el temporizador (si existe)
    }
    
    seconds = 0;
    document.getElementById('minutos').innerHTML = workTime;
    document.getElementById('segundos').innerHTML = '00';
    breakCount = 0;
    workTitle.classList.add('active');
    breakTitle.classList.remove('active');
}

function start() {
    resetTimer(); // Reinicia el temporizador antes de iniciar uno nuevo

    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';

    seconds = 59;
    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    var timerFunction = () => {
        document.getElementById('minutos').innerHTML = workMinutes;
        document.getElementById('segundos').innerHTML = seconds;

        seconds = seconds - 1;

        if (seconds === 0) {
            workMinutes = workMinutes - 1;
            if (workMinutes === -1) {
                audio.play();
                if (breakCount % 2 === 0) {
                    workMinutes = breakMinutes;
                    breakCount++
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                } else {
                    workMinutes = workTime;
                    breakCount++
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    intervalID = setInterval(timerFunction, 1000);
}

function resetf() {
    resetTimer(); // Reinicia el temporizador y detiene el intervalo
    document.getElementById('start').style.display = 'block';
    document.getElementById('reset').style.display = 'none';
}
