const renderCards = require('./renderCards.js')


$.get("https://students-api.up.railway.app/movies", (data, status) => {
    renderCards(data)
  });
  




 