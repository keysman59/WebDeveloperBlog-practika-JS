var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
	modal.style.display = "block";

}
span.onclick = function() {
	modal.styel.display	= "none";
}

window.onclick = function(event) {
	if (event.target == modal) {

	}
}