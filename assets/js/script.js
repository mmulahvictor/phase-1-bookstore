let url = 'http://localhost:3000/Books'

fetch(url)
	.then(response => response.json())
	.then(data => {
		let html = ""
		data.map(value => {
			// console.log(value.price)
			html += `
				<div class="col-md-4">
                <div class="card" style="width:400px">
                    <img class="card-img-top" src= ${value.imgUrl} style="width:100%">
                    <div class="card-body">
                        <h4 class="card-title">J${value.title}</h4>
                        <p class="card-text">${value.description}</p>
                        <a href="#" class="btn btn-primary">${value.price}</a>
                    </div>
                </div>
            </div>
			`
		})
		document.getElementById('row').innerHTML = html
	})