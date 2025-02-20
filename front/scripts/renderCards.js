const renderCards = (data) => {
  const cardContainer = document.getElementById("container");
  data.map((movie) => {
    let theCard = document.createElement("div");
    theCard.innerHTML = `
      <h2 class="card-title">${movie.title}</h2>
      <p class="card-text"> Director: ${movie.director}</p>
      <p class="card-text"> Duration: ${movie.duration}</p>
      <p class="card-text"> Genres: ${movie.genre}</p>
      <p class="card-text"> Rate: ${movie.rate} ⭐</p>
      <img src="${movie.poster}" alt="${movie.title}"  class="img" >`;
    theCard.classList.add("theCard");
    cardContainer.appendChild(theCard);
  });
};

module.exports = renderCards;
