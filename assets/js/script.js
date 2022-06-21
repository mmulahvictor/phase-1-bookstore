fetch('http://localhost:3000/Books')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));