let timerInterval;
let remainingTime = 0;
let isPaused = false;

const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

const resetBtn = document.querySelector(".btn button:nth-child(1)");
const pauseBtn = document.querySelector(".btn button:nth-child(2)");
const setBtn = document.querySelector(".btn button:nth-child(3)");

function updateInputs(time) {
    let hrs = Math.floor(time / 3600);
    let mins = Math.floor((time % 3600) / 60);
    let secs = time % 60;

    hoursInput.value = hrs.toString().padStart(2, "0");
    minutesInput.value = mins.toString().padStart(2, "0");
    secondsInput.value = secs.toString().padStart(2, "0");
}

function startTimer() {
    clearInterval(timerInterval);

    let hrs = parseInt(hoursInput.value) || 0;
    let mins = parseInt(minutesInput.value) || 0;
    let secs = parseInt(secondsInput.value) || 0;

    remainingTime = hrs * 3600 + mins * 60 + secs;

    if (remainingTime <= 0) {
        alert("Please set a valid time!");
        return;
    }

    timerInterval = setInterval(() => {
        if (!isPaused) {
            remainingTime--;

            updateInputs(remainingTime);

            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                alert("⏰ Time's up!");
            }
        }
    }, 1000);
}

function pauseTimer() {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? "Resume" : "Pause";
}

function resetTimer() {
    clearInterval(timerInterval);
    remainingTime = 0;
    isPaused = false;
    pauseBtn.textContent = "Pause";
    hoursInput.value = "00";
    minutesInput.value = "00";
    secondsInput.value = "00";
}

// Event listeners
setBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);