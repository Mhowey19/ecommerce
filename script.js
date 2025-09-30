document.addEventListener("DOMContentLoaded", () => {
	const menuIcon = document.getElementById("menuIcon");
	const navList = document.querySelector(".nav-list");

	menuIcon.addEventListener("click", () => {
		navList.classList.toggle("show");
	});
});
