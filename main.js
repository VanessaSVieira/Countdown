const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

function countdown() {
    const lancamentoDate = new Date('2022-12-24T00:00:00');
    const currentDate = new Date();

    const totalSeconds = (lancamentoDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


countdown();

setInterval(countdown, 1000);


function iniciaModal(modalID) {
        const modal = document.getElementById(modalID);
            if(modal) {
            modal.classList.add('mostrar');
            modal.addEventListener('click', (e) => {
                if(e.target.id == modalID || e.target.className == 'button-close') {
                    modal.classList.remove('mostrar');
            }
        });
    }
}

const teste = document.querySelector('.button');
teste.addEventListener('click', () => iniciaModal('modal-inscricao'));