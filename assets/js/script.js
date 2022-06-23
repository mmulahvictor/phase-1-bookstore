let url = 'http://localhost:3000/Books'
const searchInput = document.querySelector("[data-search]")
let p = ""
const input = document.querySelector('search')
const searchBtn = document.querySelector('#search-btn');
// const resultHeading = document.querySelector('#result-heading');
// const cocktailsElement = document.querySelector('#cocktails');

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
                	        <a href="#" class="btn btn-danger">${book.price}</a>
                	    </div>
                	</div>
            	</div>
			`

			// searchBtn.addEventListener("click", getBooks) 
			// 	const getBooks = () =>{
			// 		input.value.trim();
			// 		fetch(`${url}${input}`)
			// 		.then(resp => resp.json())
			// 		.then(data =>{
			// 			console.log(data)
			// 			if(data.title){
			// 				data.title.forEach(title =>{
			// 					p += `
			// 	<div class="col-md-4 rem">
            //     <div class="card" style="width:400px">
            //         <img class="card-img-top" src= ${book.imgUrl} style="width:100%">
            //         <div class="card-body">
            //             <h4 class="card-title text-danger">J${book.title}</h4>
            //             <p class="card-text">${book.description}</p>
            //             <a href="#" class="btn btn-danger">${book.price}</a>
            //         </div>
            //     	</div>
            // 	</div>
			// `
			// 				})
			// 			}
			// 		})
			// 	}
			// 	const value = e.target.value.toLowerCase()
				
				// if (title.includes(value)) {
				// 	divc.style.color = "red"
				// }else{
				// 	// div.created.className = "hidden"
				// }
			
	})
	document.querySelector('#row').innerHTML = p
})}
	fetchBooks()