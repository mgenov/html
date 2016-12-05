function isFraction(value) {
  var numbers = /^[0-9]{1,10}[.,]{1}([0-9]{1,5})$/;

  if ((value.indexOf(".") == -1) && (value.indexOf(",") == -1)) {
    value = value + ".0";
  }

  if (value.match(numbers)) {
    return true;
  }

  return false
}

function checkFractionValue() {
  var fraction = document.getElementById("input").value;
  if (isFraction(fraction)) {
    document.getElementById("result").value = "True";
  } else {
    document.getElementById("result").value = "False";
  }
}
