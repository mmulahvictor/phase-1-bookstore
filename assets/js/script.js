let url = 'http://localhost:3000/Books'
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", (e) => {
	const value = e.target.value
	// users.forEach(data =>{
	// 	const isVisible = data.title.includes(value) || data.author.includes(value)
	// 	data.element.classList.toggle("hide", !isVisible)
		console.log(users)
	// })
})

fetch(url)
	.then(response => response.json())
	.then(data => {

		let html = ""
		users = data.map(value => {
			// console.log(value.price)
			html += `
				<div class="col-md-4">
                <div class="card" style="width:400px">
                    <img class="card-img-top" src= ${value.imgUrl} style="width:100%">
                    <div class="card-body">
                        <h4 class="card-title text-danger">J${value.title}</h4>
                        <p class="card-text">${value.description}</p>
                        <a href="#" class="btn btn-danger">${value.price}</a>
                    </div>
                </div>
            </div>
			`
			return { title: data.title, author: data.author, element: html }
		})
		document.getElementById('row').innerHTML = html
	})