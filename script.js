// ---- CONSTANTS ----
const clock = document.getElementById("clock");
const click = document.getElementById("click");
const bl = document.querySelector('.button-list');
const ico = document.querySelector('.logo')

// ---- FUNCTIONS ---- \\

function clickSound() {
    // - button click sound - \\
	click.play();
}

setInterval(showTime, 1000);

function showTime() {
    // - Current time in Chile - \\
    let time = new Date();

    let options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/Santiago"
    };

    let currentTime = time.toLocaleString("en-US", options);

    clock.innerHTML = currentTime;
}

function delay (URL) {
	// - Delay for the button click sound - \\
    setTimeout( function() { window.location = URL }, 500 );
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        bl.classList.add('show');
    }, 250);
    setTimeout(() => {
        ico.classList.add('show');
    }, 250)
});

// ---- PANORAMA ---- \\
if (localStorage.panoramaMovement == undefined) {
	localStorage.panoramaMovement = "true";
} else if (localStorage.panoramaMovement == "false") {
	document.body.style.animation = "none";
}