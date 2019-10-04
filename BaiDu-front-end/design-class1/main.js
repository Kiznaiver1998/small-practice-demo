window.onload = function function_name(argument) {
	var title = document.getElementById('title');
	var change = document.getElementById('change');
	var underline = document.getElementsByTagName('hr')[0];
	var display = false;
	change.onclick = function () {
		display = !display;
		title.style.color = display? "blue" : "black";
		underline.style.width = display? "150px" : "0";
	}
}