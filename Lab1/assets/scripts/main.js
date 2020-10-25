let minutes = 0;
let seconds = 0;
let timer = document.getElementById("timer");

function tick() {
    seconds = seconds + 1;
    if (seconds == 60) {
        seconds = 0;
        minutes = minutes + 1;
    }
    const secondsStr = seconds < 10 ? "0" + seconds : seconds.toString();
    const minutesStr = minutes < 10 ? "0" + minutes : minutes.toString();
    timer.innerText = "czas na stronie " + minutesStr + ":" + secondsStr;
}

setInterval(tick, 1000);
