let url = 'https://mmulahvictor.github.io/data/db.json'
let p = ""
const input = document.querySelector('search')
const searchBtn = document.querySelector('#search-btn');

function fetchBooks(){
fetch(url)
	.then(response => response.json())
	.then(data => {
	
	data.forEach(book =>{
		
		let divc = document.createElement('div')
		divc.className = "created"
		divc.innerHTML = p
		document.querySelector('#row').appendChild(divc)

			p += `
				<div class="col-md-4 rem">
                	<div class="card" style="width:400px">
                	    <img class="card-img-top" src= ${book.imgUrl} style="width:100%">
                	    <div class="card-body">
                	        <h4 class="card-title text-danger">J${book.title}</h4>
                	        <p class="card-text">${book.description}</p>
                	        <a href="#" class="btn btn-danger" onclick="myFunction()">${book.price}</a>
                	    </div>
                	</div>
            	</div>
			`
		function lookForBook(){
			let search = document.querySelector('search').value
			const books = book.find(x => x.title == search);
			alert(books?.title || "not found!")
			return false
		}
			
			
	})
	document.querySelector('#row').innerHTML = p
})}
	fetchBooks()