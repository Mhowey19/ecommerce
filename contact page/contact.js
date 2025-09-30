const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const commentInput = document.getElementById("commentInput");
const phoneInput = document.getElementById("phoneInput");
const message = document.getElementById("message");
// Regex patterns
const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;
const textRegex = /^[a-zA-Z\s]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
contactForm.addEventListener("submit", (e) => {
	e.preventDefault();
	validate();
});

const validate = () => {
	if (emailRegex.test(emailInput.value)) {
		nameInput.style.borderColor = "#ccc";
	} else {
		emailInput.style.borderColor = "red";
	}

	if (textRegex.test(nameInput.value)) {
		nameInput.style.borderColor = "#ccc";
	} else {
		nameInput.style.borderColor = "red";
	}

	if (phoneRegex.test(phoneInput.value)) {
		phoneInput.style.borderColor = "#ccc";
	} else {
		phoneInput.style.borderColor = "red";
	}

	if (emailRegex.test(emailInput.value) && textRegex.test(nameInput.value) && phoneRegex.test(phoneInput.value)) {
		message.textContent = `Thank you ${nameInput.value}, for your concern. Our contact number is 123-456-7890`;
	}
};
