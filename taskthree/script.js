/**
 * Created by Peter Nedelchev <peter.krasimirov@gmail.com>.
 */

function validateUserRegistrationForm(form) {
    validateFormField(/^[a-zA-z]{1,15}/, form.firstName.value, 'firstNameAlert', 'Bad name');
    validateFormField(/^[a-zA-z]{1,15}/, form.lastname.value, 'lastNameAlert', 'Bad name');
    validateFormField(/\d{10}/, form.egn.value, 'egn_alert', 'Egn is exact 10 digits');
    if(form.age.value < 18 || 118 > form.age.value) {
        document.getElementById("ageAlert").innerHTML = "Incorrect age";
        return;
    }
    validateFormField(/^[a-zA-z0-9]{1,100}/, form.address.value, 'addressAlert', 'Address ');
    validateFormField(/^([a-zA-z0-9]{6,18})$/, form.password.value, 'passwordAlert', 'Only letters and digits');
    if (form.password.value != form.passConfirm.value) {
        document.getElementById("passConfAlert").innerHTML = "Password doesn't match";
        return;
    }
}

function validateFormField(regex, fieldValue, errorFieldId, errorMessage) {
    if (!regex.test(fieldValue)) {
        document.getElementById(errorFieldId).innerHTML = errorMessage;
        return;
    }
    document.getElementById(errorFieldId).innerHTML = "";
}