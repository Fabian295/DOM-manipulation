const init = function() {
	let t1, t2, div1, temp, div2, cln;
	t1 = document.getElementById('target1');
	t2 = document.getElementById('target2');

	//for (n = 0; n < 5; n++) {
	for (i = 0; i < 5; i++) {
		div1 = document.querySelector('.advertisement');
		// div2 = document.querySelector('[type="text/html"]');
		t1.appendChild(div1.cloneNode(true));

		//}
		//};
		temp = document.querySelector('[type="text/html"]');
		cln = temp.cloneNode(true);
		div2 = cln.textContent;
		t2.innerHTML = div2;
		// t2.appendChild(div2);
		// div2 = document.querySelector('[type="text/html"]');
		// cln = temp.cloneNode(true);
		// div2 = cln.textContent;
		// // let tx = t2.innerHTML;
		// t2.appendChild(div2.cloneNode(true));
	}
};

document.addEventListener('DOMContentLoaded', init);
