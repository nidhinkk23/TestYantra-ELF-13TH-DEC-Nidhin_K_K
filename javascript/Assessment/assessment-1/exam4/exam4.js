var h1 = document.getElementsByTagName('h1')[0],
    seconds = 0, minutes = 0, hours = 0,
    t;
    const input = document.getElementById("input")

function add() {
    if(input.value !== null ){
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();

    if(input.value == seconds){
        stop()
        

    }
}

}
function timer() {
    t = setTimeout(add, 1000);
}
const btn = document.getElementById("btn")
btn.addEventListener('click',timer)






/* Stop button */
function stop() {
    clearTimeout(t);
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;

}

