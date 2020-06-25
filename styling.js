// styling.js
/*
element.className
element.classList.add()
element.classList.remove()
element.classList.toggle()
element.style.propName = value
element.style.cssText = ""
window.getComputedStyle(element)
*/

let main = document.querySelector('main');
let ul = main.querySelector('ul');
let h1 = document.querySelector('header h1');
let foot = document.querySelector('#foot p');

main.className = 'some abc';
main.id = 'main';
main.title = 'mouseover text';

foot.classList.add('some');
foot.classList.toggle('other');

// Voor meerdere stylen, code is zoals in css tusse de { }
// foot.style.cssText = 'letter-spacing: 5px; font-style: italic;';

const handleClick = () => {
	foot.classList.toggle('other');
};

const backgroundClick = () => {
	foot.style.backgroundColor = 'salmon';
};

const cssClick = () => {
	foot.style.cssText = 'letter-spacing: 5px; font-style: italic;';
};

//  Om te zien wat voor styles er in de browser/document worden uitgevoerd op een bepaald element
let computed = window.getComputedStyle(ul);
console.log(computed);
console.log(computed.item(200));
console.log(computed.getPropertyValue('background-color'));
console.log(computed.getPropertyValue('color'));
console.log(computed.getPropertyValue('height'));
