/* console.log(tempData);  */


$.get("https://students-api.up.railway.app/movies", (data, status) => {
  
  const cardContainer = document.getElementById('content')   
  data.map(movie => {
    let card = document.createElement('div')
    card.classList.add('card')
    let title = document.createElement('article')
    title.classList.add('card')
    title.innerText =movie.title
    
    
    let director = document.createElement('article')
    director.innerText = movie.director
    
    let duration = document.createElement('article')
    duration.innerText = movie.duration
    
    let genre = document.createElement('article')
    genre.innerText = movie.genre
    
    let rate = document.createElement('article')
    rate.innerText = movie.rate
    
    let poster = document.createElement('img')
    poster.src = movie.poster
    
    card.appendChild(title)
    card.appendChild(director) 
    card.appendChild(duration)
    card.appendChild(genre)
    card.appendChild(rate)
    card.appendChild(poster) 
 /*    card.innerHTML = `
    <h2>${movie.title}</h2>
    <p>${movie.director}</p>
    <p>${movie.duration}</p>
    <p>${movie.genre}</p>
    <p>${movie.rate}</p>
    <img src="${movie.poster}" alt="${movie.title}">` */
    cardContainer.appendChild(card) });
    //   Tag X tag option  
  })
  
// button unused mettods
/* const catchButton = document.getElementById( 'btn')

function clickbutton (){};


 catchButton.addEventListener('click',  clickbutton) */
 



;

 