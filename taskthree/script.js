/**
 * Created by Peter Nedelchev <peter.krasimirov@gmail.com>.
 */

function validator(form) {
    validate(/^[a-zA-z]{1,15}/, form.firstname.value, 'firstname_alert', 'Bad name');
    validate(/^[a-zA-z]{1,15}/, form.lastname.value, 'lastname_alert', 'Bad name');
    validate(/\d{10}/, form.egn.value, 'egn_alert', 'Egn is exact 10 digits');
    if(form.age.value < 18 || 118 > form.age.value) {
        document.getElementById("age_alert").innerHTML = "Incorrect age";
        return;
    }
    validate(/^[a-zA-z0-9]{1,100}/, form.address.value, 'address_alert', 'Address ');
    validate(/^([a-zA-z0-9]{6,18})$/, form.password.value, 'password_alert', 'Only letters and digits');
    if (password != confirmedPass) {
        document.getElementById("passconf_alert").innerHTML = "Password doesn't match";
        return;
    }
}

function validate(regex, value, errorId, message) {
    if (!regex.test(value)) {
        document.getElementById(errorId).innerHTML = message;
        return;
    }
    document.getElementById(errorId).innerHTML = "";
}