//fetch using a Request and a Headers objects
//using jsonplaceholder for the data

const uri = 'http://jsonplaceholder.typicode.com/users';

//new Request(uri)
//new Request(uri, options)
//options - method, headers, body, mode
//methods:  GET, POST, PUT, DELETE, OPTIONS

//new Headers()
// headers.append(name, value)
// Content-Type, Content-Length, Accept, Accept-Language,
// X-Requested-With, User-Agent
let h = new Headers();
h.append('Accept', 'application/json');

let req = new Request(uri, {
	method: 'POST',
	headers: h,
	mode: 'cors'
});

fetch(req)
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('BAD HTTP stuff');
		}
	})
	.then((jsonData) => {
		console.log(jsonData);
	})
	.catch((err) => {
		console.log('ERROR:', err.message);
	});
