let time = 1;
let interval;


export function start() {
    interval = setInterval(() => {
        document.getElementById('time').innerHTML = time++;
    },1000)
}


export function stop() {
    clearInterval(interval)
}


export function reset() {
    clearInterval(interval)
    time = 0;
    document.getElementById('time').innerHTML = time;
}

