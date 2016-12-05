function validate() {
    var fraction = document.getElementById("input").value;
    var numbers = /^[0-9]{1,10}[.,]{1}([0-9]{1,5})$/;

    if ((fraction.indexOf(".") == -1) && (fraction.indexOf(",") == -1)) {
        fraction = fraction + ".0";
    }

    if (fraction.match(numbers)) {
        document.getElementById("result").value = "True";
    } else {
        document.getElementById("result").value = "False";
    }
}