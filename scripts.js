let valid = document.querySelector(".alert-success").classList;
let invalid = document.querySelector(".alert-danger").classList;
document.getElementById("mail").addEventListener("click", () => {
	valid.add("d-none");
	invalid.add("d-none");
	let input = prompt("Enter your Email:");
	let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if (regex.test(input)) {
		valid.remove("d-none");
	} else {
		invalid.remove("d-none");
	}
});
document.getElementById("post").addEventListener("click", () => {
	valid.add("d-none");
	invalid.add("d-none");
	let input = prompt("Enter your Post Code:");
	let regex = /^[0-9]{4}$/;
	if (regex.test(input)) {
		valid.remove("d-none");
	} else {
		invalid.remove("d-none");
	}
});
document.getElementById("phone").addEventListener("click", () => {
	valid.add("d-none");
	invalid.add("d-none");
	let input = prompt("Enter your Phone Number:");
    let regex = /^(\+)?(88)?01[0-9]{9}$/;
	if (regex.test(input)) {
		valid.remove("d-none");
	} else {
		invalid.remove("d-none");
	}
});
