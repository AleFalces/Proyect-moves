const renderCards = (data) =>{ 
    const cardContainer = document.getElementById('container')   
    data.map(movie => {
      let card = document.createElement('div')
      card.classList.add('card')
      card.innerHTML = `
      <h2 class="card-title">${movie.title}</h2>
      <p class="card-text text-nowrap bd-highlight">${movie.director}</p>
      <p class="card-text text-nowrap bd-highlight">${movie.duration}</p>
      <p class="card-text text-nowrap bd-highlight">${movie.genre}</p>
      <p class="card-text text-nowrap bd-highlight">${movie.rate}</p>
      <img src="${movie.poster}" alt="${movie.title}"  class="img" >`
      cardContainer.appendChild(card)});
    }

    module.exports = renderCards;
    
    //   Tag X tag option  
    /* const cardContainer = document.getElementById('container') 
    title.classList.add('card')
    title.innerText =movie.title
    
     let title = document.createElement('article')
    
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
      */
