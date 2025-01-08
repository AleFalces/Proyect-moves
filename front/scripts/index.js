console.log(tempData); 
const cardContainer = document.getElementById('content')   

tempData.map(movie => {
    const card = document.createElement('article')
    let title = document.createElement('article')
    title.classList.add('card')
    title.innerText =movie.title
    cardContainer.appendChild(title)

    let director = document.createElement('article')
    director.innerText = tempData[0].director
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
    cardContainer.appendChild(poster)

    // innerHTML option
  /*   card.classList.add('card')
    card.innerHTML = `
    <h2>${movie.title}</h2>
    <p>${movie.director}</p>
    <p>${movie.duration}</p>
    <p>${movie.genre}</p>
    <p>${movie.rate}</p>
    <img src="${movie.poster}" alt="${movie.title}">
    `
    cardContainer.appendChild(card) */

})

// button unused mettods
/* const catchButton = document.getElementById( 'btn')
function clickbutton (){
    const catchContent = document.getElementById('content') 
    let title = document.createElement('article')
    title.classList.add('card')
    title.innerText = tempData[0].title
    catchContent.appendChild(title)

    let director = document.createElement('article')
    director.innerText = tempData[0].director
    catchContent.appendChild(director)  

    let duration = document.createElement('article')
    duration.innerText = tempData[0].duration
    catchContent.appendChild(duration)  

    let genre = document.createElement('article')
    genre.innerText = tempData[0].genre
    catchContent.appendChild(genre)  

    let rate = document.createElement('article')
    rate.innerText = tempData[0].rate
    catchContent.appendChild(rate)  

    let poster = document.createElement('img')
    poster.src = tempData[0].poster
    catchContent.appendChild(poster)  
     
};



 catchButton.addEventListener('click',  clickbutton) */
 



;

 