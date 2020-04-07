$(function() {
	t = document.createElement("input");
	document.body.appendChild(t);
	t.focus();
	document.execCommand("paste");
	document.title = t.value;
	console.log(t.value);
	document.body.removeChild(t);
});