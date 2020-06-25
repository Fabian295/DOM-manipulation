//  history.js
//  window.history
//  window.location
//  pushState, replaceState, history.state, popstate, hashchange
// http:// sub.example.com :80 /path/filename.html
// ?query=string&num=1
// #hashvalue - comes after the querystring
// 127.0.0.1 localhost

document.addEventListener('DOMContentLoaded', () => {
	// const state = { page_id: 1, user_id: 5 };
	// const title = 'history';
	// const url = 'hello.html';
	// const url = 'hello-world.html';

	// history.pushState(state, title, url);
	// history.pushState({"abc":123}, "title", url);  //add to the array
	//history.replaceState({"abc":123}, "title", url);   //replace current entry
	// history.pushState(null, 'Title', 'pretend.html');
	//add listeners to buttons and links that navigate
	document.getElementById('link').addEventListener('click', c);
	document.getElementById('btn').addEventListener('click', c);
	//intercept initial load incase there is a hash value or state
	//add listeners for hashchange and popstate
	// document.getElementById('btn').addEventListener('popstate,', ps);
	// btn.addEventListener('hashchange', hc);
	// btn.addEventListener('click', hc);
	window.addEventListener('hashchange', hc);
	window.addEventListener('popstate', ps);
});

function c(ev) {
	show('clicked');
	ev.preventDefault();
	let href = ev.currentTarget.href;
	let pid = ev.currentTarget.getAttribute('data-person');
	// let pid = ev.currentTarget.getAttribute('data-person');
	console.log(ev.currentTarget);
	console.log(ev.target);
	show(href);
	// history.pushState({ pid: pid }, 'title', href);
	history.replaceState({ pid: pid }, 'title', href);
	loadPerson();
	// console.log(pid);
}

function loadPerson() {
	show('LoadPerson');
	// let hs = history.state;
	// show(hs);
	// console.log(hs);
	// let data = hs[pid];
	let hs = JSON.stringify(history.state);
	let data = JSON.parse(hs);
	show(data);
	show(data.pid);
	console.log(data);
	console.log(data.pid);
}

function hc(event) {
	let n = event.newURL;
	let o = event.oldURL;
	show('hashchange');
	let lh = location.hash;
	console.log(n);
	console.log(o);
	console.log(lh);
}
function ps(ev) {
	// console.log(ev.state);
	show('popstate');
}

function show(output) {
	let p = document.createElement('p');
	p.textContent = output;
	document.getElementById('output').appendChild(p);
	setTimeout((_) => {
		document.getElementById('output').removeChild(p);
	}, 4000);
}

// show('location.history: ' + history.state);
// history.pushState({ page_id: 1, user_id: 5 }, 'Yo', 'groet.html');
// show('location.href: ' + location.href);
//show('location.search: ' + location.search);
// show('location.hash: ' + location.hash);
// history.go(-3);
//history.back();
//history.forward();
// history.push('http://www.google.com');
//location.reload();
// location.replace('http://www.google.com');
// show('history.state:' + history.state);
