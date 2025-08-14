const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const commentInput = document.getElementById("commentInput");
const donationInput = document.getElementById("donationInput");
const productDonation = document.getElementById("productDonation");

contactForm.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(nameInput.value);
	validate();
});

const validate = () => {
	if (nameInput.value === "" || nameInput.value === "1") {
		console.log("Please enter a valid input");
	} else {
		const display = `Thank you ${nameInput.value} for your donation item of ${donationInput.value}`;
		productDonation.textContent = display;
		console.log(display);
	}
};
