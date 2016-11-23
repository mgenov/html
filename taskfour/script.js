/**
 * Created by Peter Nedelchev <peter.krasimirov@gmail.com>.
 */
function calculate(element_id) {
    var expression = document.getElementById(element_id).value;
    document.getElementById(element_id).value = eval(expression);
}

function append(element_id, value) {
    document.getElementById(element_id).value += value;
}

function clean(element_id) {
    document.getElementById(element_id).value = "";
}

function clearLast(element_id) {
    var value = document.getElementById(element_id).value;
    document.getElementById(element_id).value = value.slice(0, value.length - 1);
}

