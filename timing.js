// Define timer data as an array of objects
const timersData = [
    { id: 'Blink', label: 'Blink', duration: 150 },
    { id: 'Teleport', label: 'Teleport', duration: 100 },
    { id: 'Patroler', label: 'Patroler', duration: 90 },
    { id: 'Excitement', label: 'Excitement', duration: 100 },
    { id: 'Abnormal', label: 'Abnormal', duration: 90 },
    // Add more timers here as needed
];

let timers = [];

// Function to start or stop a timer
function toggleTimer(timerIndex) {
    const timer = timersData[timerIndex];
    if (timers[timerIndex]) {
        clearInterval(timers[timerIndex].id);
        timers[timerIndex] = null;
        document.getElementById(`time${timer.id}`).innerHTML = timer.label;
    } else {
        let timeLeft = timer.duration;
        document.getElementById(`time${timer.id}`).innerHTML = `${timer.label} - ${timeLeft}`;

        timers[timerIndex] = {
            id: setInterval(function () {
                timeLeft--;
                document.getElementById(`time${timer.id}`).innerHTML = `${timer.label} - ${timeLeft}`;

                if (timeLeft === 0) {
                    alert(`${timer.label} is up`);
                    clearInterval(timers[timerIndex].id);
                    timers[timerIndex] = null;
                    document.getElementById(`time${timer.id}`).innerHTML = timer.label;
                }
            }, 1000)
        };
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Event listeners for each timer
    timersData.forEach((timer, index) => {
        document.getElementById(`time${timer.id}`).addEventListener('click', function () {
            toggleTimer(index);
        });
    });

    // Event listener for Reset button
    document.getElementById('timeReset').addEventListener('click', function () {
        timers.forEach(function (timer, index) {
            if (timer) {
                clearInterval(timer.id);
                timers[index] = null;
                document.getElementById(`time${timersData[index].id}`).innerHTML = timersData[index].label;
            }
        });
    });
});



console.log("timing loaded")