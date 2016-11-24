var namesRegex = /[a-zA-Z]+$/;
var idRegex = /[0-9]{10}$/;
var ageRegex = /1[8-9]|[2-9][0-9]|10[0-9]|11[0-8]$/;
var adresRegex = /[a-zA-Z0-9]{1,100}$/;
var passRegex = /[a-zA-Z0-9]{6,18}$/;

function validateUserForm(form) {
	validation(namesRegex, form.fname.value, "fnameError", "First Name should be between 1 and 15 charcters");
	validation(namesRegex, form.lname.value, "lnameError", "Last Name should be between 1 and 15 charcters");
	validation(idRegex, form.egn.value, "egnError", "ID should be with 10 numbers");
	validation(ageRegex, form.age.value, "ageError", "Age should be number between 18 and 118");
	validation(adresRegex, form.adres.value, "adresError", "Address should contain alphanumerics between 1 to 100");
	validation(passRegex, form.pass.value, "passError", "Password should contain alphanumerics between 6 to 18");
	validateConfirmPass(form.pass.value, form.confirmpass.value);
}

function validation(regex, value, errorId, message) {
	if (!regex.test(value)) {
		document.getElementById(errorId).innerHTML = message;
		return;
	}
	document.getElementById(errorId).innerHTML = "";
}

function validateConfirmPass(pass, confirmpass) {
	if (pass == confirmpass) {
		document.getElementById("confirmpassError").innerHTML = "";
		return;
	}
	document.getElementById("confirmpassError").innerHTML = "Password does not match";
}