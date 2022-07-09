const url = 'https://mmulahvictor.github.io/data/db.json'
let p = "";
let input = document.querySelector( '#submit' );
document.querySelector( '#book-form' ).addEventListener( 'submit', handleSubmit )

//create a new book list
function handleSubmit ( e ) {
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
    fetchBooks( bookObj )
}

//fetch books from API
function fetchBooks () {
    fetch( url )
        .then( response => response.json() )
        .then( data => {
            let array = data.Books
            array.forEach( data => {

                // add event listeners for the search input
                input.addEventListener( "submit", ( e ) => {
                    e.preventDefault()
                    let target = document.querySelector( '#search' )
                    const value = target.value
                    let title1 = data.title;
                    let author1 = data.author;

                    if ( title1 === "56 Days" )
                    {
                        console.log( "yes" )
                    } else
                    {
                        let div9 = document.querySelector( '.rem' )
                        console.log( div9 )
                        div9.remove()
                        console.log( "no" );
                    }
                    input.reset()
                } )

                //manipulate html content with js
                let rem = document.createElement( 'div' )
                rem.className = "col-md-6 rem"
                let card = document.createElement( "div" )
                card.className = "card"
                card.style.width = "400px"
                rem.appendChild( card )
                let img = document.createElement( "img" )
                img.className = "card-img-top"
                img.src = data.imgUrl
                card.appendChild( img )
                let divCard = document.createElement( "div" )
                divCard.className = "card-body"
                card.appendChild( divCard )
                let h4 = document.createElement( "h4" )
                h4.className = "card-title text-danger"
                h4.textContent = data.title
                divCard.appendChild( h4 )
                let p = document.createElement( "p" )
                p.className = "card-text"
                p.textContent = data.description
                divCard.appendChild( p )
                let a = document.createElement( "a" )
                a.className = "btn btn-danger"
                a.textContent = data.price
                divCard.appendChild( a )

                let row = document.querySelector( '#row' )
                row.appendChild( rem )
            } )
        } )
}
fetchBooks()