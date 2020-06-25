const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// delete/remove item event
itemList.addEventListener('click', removeItem);

// Filter event for searchbox
filter.addEventListener('keyup', filterItems);

// Add Item
function addItem(e) {
	e.preventDefault();
	console.log('test');

	//Get input value
	let newItem = document.getElementById('item').value;
	// Create new li element
	let li = document.createElement('li');
	// Add  class
	li.className = 'list-group-item';
	console.log(li);
	// Add tex node with input value
	li.appendChild(document.createTextNode(newItem));

	// Create delete element
	const deleteBtn = document.createElement('button');
	// Add classes to deleteBtn
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
	// Append text node
	deleteBtn.appendChild(document.createTextNode('X'));
	// Append button to li
	li.appendChild(deleteBtn);
	// function boxClear() {
	// 	let box = document.getElementById('item');
	// 	box.textContent = '';
	// }
	// boxClear();
}

// Remove item
function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('Are you sure?')) {
			const li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

// Filter Items
function filterItems(e) {
	// convert text to lower case
	const text = e.target.value.toLowerCase();
	console.log(text.indexOf(text));
	// get li's
	const items = itemList.getElementsByTagName('li');
	// convert to array
	Array.from(items).forEach(function(item) {
		const itemName = item.firstChild.textContent;
		if (itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}
