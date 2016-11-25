/**
 * Created by Peter Nedelchev <peter.krasimirov@gmail.com>.
 */
function validateCustomNumber(value, element) {
    if(/^[1-9]([0-9]{1,9})?((\.|,)[1-9]{1,5})?$/.test(value)) {
       element.innerHTML = "This is correct format";
        return true;
    }
    element.innerHTML = "Incorrect format";
    return false;
}

exports.validate = validateCustomNumber;