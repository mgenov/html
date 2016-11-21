/**
 * Created by Peter Nedelchev <peter.krasimirov@gmail.com>.
 */

function loadXml(method, file, elementId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(elementId).innerHTML = this.responseText;
        }
    };
    xhttp.open(method, file, true);
    xhttp.send();
}