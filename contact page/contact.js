const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const commentInput = document.getElementById("commentInput");

contactForm.addEventListener("submit", (e) => {
	e.preventDefault();
	formValidation();
});

const formValidation = () => {
	if (nameInput == "") {
		console.log("Must be a valid name input");
	}
	if (emailInput == "") {
		console.log("PIZZQ");
	}
};
