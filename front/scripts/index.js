/* console.log(tempData);  */


$.get("https://students-api.up.railway.app/movies", (data, status) => {
  console.log("soy data de aca",data)
  const cardContainer = document.getElementById('content')   
  data.map(movie => {
    let card = document.createElement('article')
    card.classList.add('card')
   card.innerHTML = `
   <h2>${movie.title}</h2>
   <p>${movie.director}</p>
   <p>${movie.duration}</p>
   <p>${movie.genre}</p>
   <p>${movie.rate}</p>
   <img src="${movie.poster}" alt="${movie.title}">
   `
   cardContainer.appendChild(card) });
 /*    Tag X tag option  
      let title = document.createElement('article')
      title.classList.add('card')
      title.innerText =movie.title
      cardContainer.appendChild(title)
  
      let director = document.createElement('article')
      director.innerText = movie.director
      cardContainer.appendChild(director)  
  
      let duration = document.createElement('article')
      duration.innerText = movie.duration
      cardContainer.appendChild(duration)  
  
      let genre = document.createElement('article')
      genre.innerText = movie.genre
      cardContainer.appendChild(genre)  
  
      let rate = document.createElement('article')
      rate.innerText = movie.rate
      cardContainer.appendChild(rate)  
  
      let poster = document.createElement('img')
      poster.src = movie.poster
      cardContainer.appendChild(poster) */
})

// button unused mettods
/* const catchButton = document.getElementById( 'btn')

function clickbutton (){};

 catchButton.addEventListener('click',  clickbutton) */
 



;

 