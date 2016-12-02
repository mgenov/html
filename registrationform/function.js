function validateForm() {
    var firstname = document.registration.firstname;
    var lastname = document.registration.lastname;
    var egn = document.registration.egn;
    var age = document.registration.age;
    var address = document.registration.address;
    var password = document.registration.password;

    if ((validate(firstname, 1, 15)) && (validate(lastname, 1, 15)) && (egn_validate(egn, 10)) &&
        (age_validate(age, 18, 118)) && (validate(address, 1, 100)) && (password_validate(password, 6, 18)) &&
        (confpassword_validate(confirmpassword, password))) {
        return false;
    }

    function validate(nameOrAddress, x, y) {
        var fnlength = nameOrAddress.value.length;
        var string = "The " + nameOrAddress.name + " should be between " + x + " and " + y + " symbols.";
        if (fnlength > y || fnlength < x) {
            alert(string);
            asd.focus();
            return false;
        }
        return true;
    }

    function egn_validate(egn, length) {
        var numbers = /[0-9]+$/;
        var egnlength = egn.value.length;
        if (egnlength > length || egnlength < length || !egn.value.match(numbers)) {
            alert("The EGN should be exactly " + length + " numbers.");
            egn.focus();
            return false;
        }
        return true;
    }

    function age_validate(age, x, y) {
        var numbers = /[0-9]+$/;
        if (age.value > y || age.value < x || !age.value.match(numbers)) {
            alert("The age should be between " + x + " and " + y + ".");
            age.focus();
            return false;
        }
        return true;
    }

    function password_validate(password, x, y) {
        var letters = /[0-9a-zA-Z]+$/;
        var passlength = password.value.length;
        if (passlength > y || passlength < x || !password.value.match(letters)) {
            alert("The password should be between " + x + " and " + y + " symbols, latin and numbers only.");
            password.focus();
            return false;
        }
        return true;
    }
}