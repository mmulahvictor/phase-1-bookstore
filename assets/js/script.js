const url = 'https://mmulahvictor.github.io/data/db.json'
let p = "";

document.querySelector('#book-form').addEventListener('submit', handleSubmit)

function handleSubmit(e){
	e.preventDefault()
	let bookObj = {
		title: e.target.title.value,
		author: e.target.author.value,
		imgUrl: e.target.imgUrl.value,
		price: e.target.price.value,
		review: e.target.review.value,
		description: e.target.description.value,
		source: e.target.source.value
	}
	fetchBooks(bookObj)
	newBook(bookObj)
}

function fetchBooks(){
fetch(url)
	.then(response => response.json())
	.then(data => {
	let array = data.Books
	array.forEach(book =>{

			p += `
				<div class="col-md-6 rem">
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

function newBook(bookObj){

	fetch(url,{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body:JSON.stringify(bookObj)
	})
	.then(res => res.json())
	.then(book => console.log(book))
}


function initialize(){
	fetchBooks()
	
}
initialize()

	//search for a book
// let input = document.querySelector('search');
// const searchBtn = document.querySelector('#search-btn');

// const fetchName=()=>{
//     let value = input.value;
//     fetch(`url${value}`)
//     .then(response => response.json())
//     .then(data=>{
// 		let shows = data.Books;
//         p.innerHTML="";
//         shows.results.forEach(element => {
//             createElements(element)
//         });
//     })}

// // search by enter key
//     input.addEventListener("keyup", (event) => {
//         console.log(event.key)
//         if(event.keyCode >= 48 && event.keyCode <= 90) {
//             searchBtn.innerHTML = event.key
//         }
//         if (event.keyCode === 13) {
//          event.preventDefault();
//          fetchName()
//         }
//       });