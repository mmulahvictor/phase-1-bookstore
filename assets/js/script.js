const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6b1f82b533msh87ecd04ffcee0f1p12cea3jsn1b1eb3217562',
		'X-RapidAPI-Host': 'bookshelves.p.rapidapi.com'
	}
};

fetch('https://bookshelves.p.rapidapi.com/books', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));