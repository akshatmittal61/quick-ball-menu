const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-li a");

navBtn.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("Clicked");
	nav.classList.toggle("nav-open");
});

navLinks.forEach((l) => {
	l.addEventListener("click", () => {
		nav.classList.remove("nav-open");
	});
});
