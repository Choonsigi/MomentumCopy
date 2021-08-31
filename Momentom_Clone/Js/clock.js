const Clock = document.querySelector('h2#clock');

function getDate() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0'); 
    Clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getDate();
setInterval(getDate, 1000);