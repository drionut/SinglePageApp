// call this after body has loaded
function isLoaded() {
	preloader();
}

// preloader sidebar
var headerVw = 1;
function preloader() {
	var header = document.getElementById("header");
	if (headerVw < 100) {
		setTimeout(function () {
			headerVw += 2;
			header.style.width = headerVw + "vw";
			preloader();
		}, 20);
	}
	if (headerVw >= 100) {
		//
		fadeIn("nav");
		fadeIn("content");
		fadeIn("timeline");
	}
}

//
function fadeIn(elementId) {
	var element = document.getElementById(elementId);
	element.classList.add("fade-in");
}
