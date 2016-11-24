/**
 * Created by Peter Nedelchev <peter.krasimirov@gmail.com>.
 */
function validateCustomNumber(value, errorId) {
    if(/^[1-9]([0-9]{1,9})?(\.[1-9]{1,5})?$/.test(value)) {
        document.getElementById(errorId).innerHTML = "This is correct format";
        return true;
    }
    document.getElementById(errorId).innerHTML = "Incorrect format";
    return false;
}
