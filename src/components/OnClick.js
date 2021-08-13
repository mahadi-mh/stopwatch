let second = 0;
let minute = 0;
let interval;
// let time = document.getElementById('time');


export function start() {
    interval = setInterval(timeCount, 1000);
}


function timeCount() {
    second++;
    if (second <= 59) {
        if (second <= 9) {
            document.getElementById('time').innerHTML = `${minute}:0${second}`
        }
        else {
            document.getElementById('time').innerHTML = `${minute}:${second}`
        }
    }
    else {
        minute++;
        second = 0;
        document.getElementById('time').innerHTML = `${minute}:0${second}`
    }
}


export function stop() {
    clearInterval(interval)
}


export function reset() {
    clearInterval(interval)
    minute = 0;
    second = 0;
    document.getElementById('time').innerHTML = `0:00`;
}

