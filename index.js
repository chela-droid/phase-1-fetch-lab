function fetchBooks() {

  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then(function(response){
    return response.json ();

  })
  .then(function(data){
    renderBooks(data)
  })
  .catch(function(error){
    console.log(error)
  })




  // .then((json) => console.log(json));
  
}

// function renderBooks(books) {
  // const main = document.querySelector('main');
  // books.forEach(book => {
    // const h2 = document.createElement('h2');
    // h2.innerHTML = book.name;
    // main.appendChild(h2);
  // });
// }

// document.addEventListener('DOMContentLoaded', function() {
  // fetchBooks();
// });

//  function renderBooks(){

//  }
//renders book titles into the DOM by passing a JSON object to renderBooks


  // document.addEventListener('DOMContentLoaded',function(){
  //   fetchBooks();

  // });
 


