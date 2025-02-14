let axios = require('axios')

let movies = []

module.exports = {
    getMovies : async () => {
        if(!movies.length){    
       let fetchMovies = await axios.get('https://students-api.up.railway.app/movies');
       movies = fetchMovies.data;
       return movies;
    } else {
        return movies
    }
    },	

    createMovie : async (newMovie) => {
        
         const CreatedMovie = {
            title: newMovie.title,
            rate: newMovie.rate,
            director: newMovie.director,
            year: newMovie.year,
            rating: newMovie.rating,
            genre: newMovie.genre,
            poster: newMovie.poster,
            duration: newMovie.duration,
         }
      return movies.push(CreatedMovie)
      }
    
}
    
    
