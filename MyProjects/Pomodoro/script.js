//variables

let workTitle = document.getElementById('estudio');
let breakTitle = document.getElementById('descanso');

let workTime = 25;
let breakTime = 5;

let seconds = '00';

//display
window.onload = () =>{
    document.getElementById('minutos').innerHTML = workTime;
    document.getElementById('segundos').innerHTML = seconds;

    workTitle.classList.add('active');
}

//empezar temporizador

function start(){
    //cambiar boton
    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';


    //cambiar el tiempo
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    //cuenta atras

    let timerFunction =() =>{
        //cambiar el display
        document.getElementById('minutos').innerHTML = workMinutes;
        document.getElementById('segundos').innerHTML = seconds;

        //comenzar
        seconds = seconds -1;

        if(seconds ===0){
            workMinutes = workMinutes -1;
            if(workMinutes===-1){
                if(breakCount%2===0){
                    //comenzar descanso
                    workMinutes = breakMinutes;
                    breakCount++

                    //cambiar panel
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                }else{
                    //continuar estudio
                    workMinutes = workTime;
                    breakCount++

                    //camiar panel
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    //comenzar cuenta atras

    setInterval(timerFunction, 1000); //1000 = 1s



}