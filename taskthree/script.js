/**
 * Created by Peter Nedelchev <peter.krasimirov@gmail.com>.
 */

function validator() {
    var firstName = document.forms["myForm"]["firstname"].value;
    var lastName = document.forms["myForm"]["lastname"].value;
    var egn = document.forms["myForm"]["egn"].value;
    var age = document.forms["myForm"]["age"].value;
    var address = document.forms["myForm"]["address"].value;
    var password = document.forms["myForm"]["password"].value;
    var confirmedPass = document.forms["myForm"]["passconfirm"].value;
    var passRegEx = new RegExp("[a-z][0-9]{6-18}");
    if (firstName.length < 1 || firstName.length > 15) {
        alert("First name should be between 1 and 15 symbols");
        return false;
    }
    if (lastName.length < 1 || lastName.length > 15) {
        alert("Last name should be between 1 and 15 symbols");
        return false;
    }
    if (egn.length != 10) {
        alert("EGN should be exactly 10 symbols");
        return false;
    }
    if (age < 18 || age >118) {
        alert("Age should be between 18 and 118");
        return false;
    }
    // if () {
    //     alert("Address should be between 1 and 100 symbols");
    //     return false;
    // }
    if ( password.match(passRegEx)) {
        alert("Last name should be between 1 and 15 symbols");
        return false;
    }


}
