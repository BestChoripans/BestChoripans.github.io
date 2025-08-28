/* -- Functions -- */
if (localStorage.panoramaMovement == undefined) {
	localStorage.panoramaMovement = "true";
} else if (localStorage.panoramaMovement == "false") {
	document.body.style.animation = "none";
}

function clickSound() {
	/* Play a click sound when you click a button */
	document.getElementById("click").play();
}

setInterval(showTime, 1000);

function showTime() {
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

showTime();

function delay (URL) { 
	/* Delay for the sound can be hear */
    setTimeout( function() { window.location = URL }, 500 );
}