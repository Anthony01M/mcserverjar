/* Card hover dimming effect */
document.addEventListener('DOMContentLoaded', function () {
	const features = document.getElementById('features');
	if (!features) return;

	features.addEventListener('mouseover', function (event) {
		const card = event.target.closest('.card');
		if (!card) return;
		const cards = features.querySelectorAll('.card');
		cards.forEach(c => {
			if (c !== card) c.classList.add('dim');
		});
	});

	features.addEventListener('mouseout', function (event) {
		const card = event.target.closest('.card');
		if (!card) return;
		if (!card.contains(event.relatedTarget)) {
			const cards = features.querySelectorAll('.card');
			setTimeout(() => cards.forEach(c => c.classList.remove('dim')), 100);
		}
	});
});

/* Typewriter effect */
window.addEventListener('load', async (event) => {
	const phrases = [
		'The sole website required for obtaining your Minecraft server jars.',
		'The singular website indispensable for locating your Minecraft server jars.',
		'The one-stop website for discovering your Minecraft server jars.',
		'The exclusive website for sourcing your Minecraft server jars.',
		'The primary website for accessing your Minecraft server jars.',
		'The essential website for procuring your Minecraft server jars.',
		'The solitary website for acquiring your Minecraft server jars.'
	];

	const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
	try {
		new Typewriter('.typing', {
			strings: randomPhrase,
			autoStart: true,
			loop: false,
			delay: 25,
			speed: 15,
			startDelay: 0,
			deleteSpeed: 50,
			pauseFor: 2000,
			cursor: ''
		});
	} catch (e) {
		error("Notice: Service loading issues detected, features may be affected.");
	}
});

/* Scroll to top button */
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
	const btn = document.getElementById("myBtn");
	if (!btn) return;
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		btn.style.display = "block";
	} else {
		btn.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

/* FAQ Accordion */
var acc = document.getElementsByClassName("question");
for (var i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		for (var j = 0; j < acc.length; j++) {
			if (acc[j] !== this) {
				acc[j].classList.remove("on");
				var panel = acc[j].nextElementSibling;
				if (panel) panel.style.maxHeight = null;
			}
		}
		this.classList.toggle("on");
		var panel = this.nextElementSibling;
		if (!panel) return;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

/* Mobile navigation */
const menu = document.querySelector('.menu');
const nav = document.querySelector('.mobile-nav');
if (menu && nav) {
	menu.addEventListener('click', () => {
		nav.classList.toggle('active');
	});
}

window.addEventListener('resize', () => {
	if (nav && nav.classList.contains('active') && window.innerWidth > 920) {
		nav.classList.remove('active');
	}
});

/* Swiper slider */
if (typeof Swiper !== 'undefined') {
	try {
		var imageSlider = new Swiper('.image-slider', {
			autoplay: {
				delay: 2000,
				disableOnInteraction: false
			},
			loop: true,
			spaceBetween: 30,
			slidesPerView: 5,
			breakpoints: {
				580: { slidesPerView: 1, spaceBetween: 10 },
				768: { slidesPerView: 2, spaceBetween: 20 },
				992: { slidesPerView: 3, spaceBetween: 20 },
				1200: { slidesPerView: 4, spaceBetween: 20 }
			}
		});
	} catch (e) {
		error("Notice: Service loading issues detected, features may be affected.");
	}
}

/* Header scroll effect */
var header = document.querySelector("header");
if (header) {
	window.addEventListener("scroll", function () {
		if (window.scrollY > 0) {
			header.classList.add("scrolled");
		} else {
			header.classList.remove("scrolled");
		}
	});
}

/* Error notice */
function error(message) {
	if (document.getElementById("notice")) return;
	var notice = document.createElement("div");
	notice.id = "notice";
	notice.style.backgroundColor = 'rgb(255, 3, 3)';
	notice.style.color = '#fff';
	notice.style.padding = '10px';
	notice.style.textAlign = 'center';
	notice.style.fontWeight = 'bold';
	notice.style.position = 'relative';
	notice.style.zIndex = '9999';
	notice.innerText = message;

	var close = document.createElement("span");
	close.style.position = 'absolute';
	close.style.right = '15px';
	close.style.top = '50%';
	close.style.transform = 'translateY(-50%)';
	close.style.cursor = 'pointer';
	close.style.marginLeft = '10px';
	close.innerText = '✕';
	close.addEventListener('click', function () {
		notice.style.display = 'none';
	});

	notice.appendChild(close);

	var nav = document.querySelector(".navbar");
	if (nav && nav.parentNode) {
		nav.parentNode.insertBefore(notice, nav);
	}
}