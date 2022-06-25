let p = "";
const input = document.querySelector('search');
const searchBtn = document.querySelector('#search-btn');

function fetchBooks(){
	const url = 'https://mmulahvictor.github.io/data/db.json'
fetch(url)
	.then(response => response.json())
	.then(data => {
	// console.log(data)
	let array = data.Books
	// console.log(array)
	array.forEach(book =>{
	// console.log(book.title)

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
	document.querySelector('#row').innerHTML = p
	})
})}
fetchBooks()
	//search for a book
const fetchName=()=>{
    let value = input.value;
    fetch(`url${value}`)
    .then(response => response.json())
    .then(shows=>{
        p.innerHTML="";
        shows.results.forEach(element => {
            createElements(element)
        });
    })}

// search by enter key
    input.addEventListener("keyup", function(event) {
        console.log(event.key)
        if(event.keyCode >= 48 && event.keyCode <= 90) {
            searchBtn.innerHTML = event.key
        }        
        if (event.keyCode === 13) {
         event.preventDefault();
         fetchName()
        }
      });

	