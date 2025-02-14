let axios = require('axios')



module.exports = {
    getMovies : async () => {
       let fetchMovies = await axios.get('https://students-api.up.railway.app/movies');

       return fetchMovies.data;
    }

}
    
    
