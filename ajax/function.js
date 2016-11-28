function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			runFunction(this);
		}
	};
	xhttp.open("GET", "file.xml", true);
	xhttp.send();
}
function runFunction(xml) {
	var i;
	var xmlDoc = xml.responseXML;
	var table = "<tr><th>Author of the book</th><th>Topic of the book</th></tr>";
	var x = xmlDoc.getElementsByTagName("book");
	for (i = 0; i < x.length; i++) {
		table += "<tr><td>" + x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue + "</td><td>" + x[i].getElementsByTagName("topic")[0].childNodes[0].nodeValue + "</th></tr>";
	}
	document.getElementById("demo").innerHTML = table;
}