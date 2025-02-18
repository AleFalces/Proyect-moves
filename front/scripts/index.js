
const renderCards = require('./renderCards')
const axios = require('axios')


let fetchData = async () => {
  let response = await axios.get('http://localhost:3000/movies')
 
  
  
  renderCards(response.data)

}
fetchData()