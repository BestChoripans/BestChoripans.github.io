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
	/* take the cl time and transform it to AM-PM format */
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = " AM";

	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = " PM";
	} else if (hour == 0) {
		hr = 12;
		am_pm = " AM";
	}

	hour =
		hour < 10 ? "0" + hour : hour;
		min = min < 10 ? "0" + min : min;
		sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		am_pm;

		document.getElementById(
			"clock"
		).innerHTML = currentTime;
}

showTime();

function delay (URL) { 
	/* Delay for the sound can be hear */
    setTimeout( function() { window.location = URL }, 500 );
}