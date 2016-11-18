/**
 * Created by Peter Nedelchev <peter.krasimirov@gmail.com>.
 */

function loadXml() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("source").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "employee.json", true);
    xhttp.send();
}