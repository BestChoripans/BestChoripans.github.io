// ---- PANORAMA ---- \\
if (localStorage.panoramaMovement == undefined) {
	localStorage.panoramaMovement = "true";
} else if (localStorage.panoramaMovement == "false") {
	document.body.style.animation = "none";
}

// ---- FUNCTIONS ---- \\

function clickSound() {
    // BUTTON CLICK SOUND EFFECT \\
	document.getElementById("click").play();
}

setInterval(showTime, 1000);

function showTime() {
    // current time in chile xD \\
    let time = new Date();

    let options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "America/Santiago"
    };

    let currentTime = time.toLocaleString("en-US", options);

    document.getElementById("clock").innerHTML = currentTime;
}

function delay (URL) { 
	// Delay for the click sound effect XD \\
    setTimeout( function() { window.location = URL }, 500 );
}

document.addEventListener('DOMContentLoaded', () => {
    const buttonlist = document.querySelector('.button-list');
    const logo = document.querySelector('.logo')
    setTimeout(() => {
        buttonlist.classList.add('show');
    }, 250);
    setTimeout(() => {
        logo.classList.add('show');
    }, 250)
});