// Web Storage, twee soorten:
//  1. localStorage
//  2. sessionStorage
//  JSON
// voorbeelden van methods:
// setItem(), getItem(),
// clear() - erase alles
// removeItem( key ) -delete one item
// key( index ) - get the name of one item

// Zijn kinderen van het Window object, dus kan het 'window.' gedeelte weglaten

// Werken beiden op de zelfde wijze en hebben dezelfde methods
// Alles is volgens key - value pairs
// Enige verschil is dat sessionStorage aan een tijd is gebonden, na afsluiten van de browser,tab,website, etc vervalt deze
localStorage;
sessionStorage;

// Zo voeg een  item toe  aan de localStorage, let op moet als  een string toegevoegd worden
localStorage.setItem('dude', 'Jeffrey Lebowski');
// Item aanhalen uit de localStorage
let val = localStorage.getItem('dude');
// console.log(val);

// complexer voorbeeld
let options = {
	name: 'Walter',
	game: 'bowling',
	weapons: [ 'uzi', 'pistol', 'anger' ]
};
let str = JSON.stringify(options);

localStorage.setItem('TheDude', str);

let original = localStorage.getItem('TheDude');

// console.log(original);
// let obj = JSON.parse(original);
// console.log(obj);
// console.log(obj.weapons[2]);

// let cols = localStorage.key([ 1 ]);
// let col2 = localStorage.key([ 0 ]);
// console.log(cols);
// console.log(col2);

let col = {
	name: 'Fabian',
	prof: 'Developer',
	spec: 'Code'
};

let colz = {
	name: 'Fabian Kanhai',
	prof: 'Software Developer',
	spec: 'Code'
};

let colStr = JSON.stringify(col);
let colObj = JSON.parse(colStr);
let colStrz = JSON.stringify(colz);
let colObjz = JSON.parse(colStrz);

// localStorage.clear('colObj');
localStorage.setItem('col', colStr);
localStorage.getItem('col');
localStorage.setItem('colz', colObjz);
localStorage.getItem('colz');
