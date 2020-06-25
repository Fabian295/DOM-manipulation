// Keyboard events in the Browser
//ev.char || ev.charCode || ev.which
// keydown keyup keypress

document.addEventListener('DOMContentLoaded', init);

function init() {
	let txt = document.getElementById('txt');
	txt.addEventListener('keydown', anyKey);
	document.body.addEventListener('keydown', anyKey);
}

function anyKey(e) {
	console.log(e.type, e.target);
	let target = e.currentTarget;
	let tag = target.tagName;
	let char = e.char || e.charCode || e.which;
	console.log(char, tag);
	let s = String.fromCharCode(char);
	console.log(s);
	// switch (char) {
	// 	case 37:
	// 		console.log('LEFT');
	// 		break;
	// 	case 40:
	// 		console.log('DOWN');
	// 		break;
	// }
}
