
const renderCards = require('./renderCards')



$.get("https://students-api.up.railway.app/movies", (data, status) => {
  renderCards(data)
  });
  




 