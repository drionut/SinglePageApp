// call this after body has loaded
function isLoaded() {
	preloader();
	addActive();
}

// preloader sidebar
var headerVw = 1;
function preloader() {
	var header = document.getElementById("header");
	var slideshow = document.getElementById("slideshow");
	if (headerVw < 100) {
		setTimeout(function () {
			headerVw += 2;
			header.style.width = headerVw + "vw";
			preloader();
			// slideshow.innerHTML = "Just another portfolio";
		}, 20);
	}
	if (headerVw >= 100) {
		//
		fadeIn("nav");
		fadeIn("content");
		fadeIn("timeline");
		showSlides(slideIndex);
	}
}

//
function fadeIn(elementId) {
	var element = document.getElementById(elementId);
	element.classList.add("fade-in");
}

function addActive() {
	var links = document.getElementsByClassName("nav-link");
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
		});
	}
}

// slideshow
var slideIndex = 1;

// Next/previous controls
function changeSlide(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var slideshow = document.getElementById("slideshow");
	var dots = document.getElementById("dots");
	var dot = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace("dot active-dot", "dot");
	}
	slideshow.style.display = "block";
	slides[slideIndex - 1].style.display = "block";
	dots.style.display = "block";
	dot[slideIndex - 1].classList.add("active-dot");
}
