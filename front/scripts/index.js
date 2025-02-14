
const renderCards = require('./renderCards')
const axios = require('axios')


let fetchData = async () => {
  let response = await axios.get('https://students-api.up.railway.app/movies')
  
  renderCards(response.data)

}
fetchData()