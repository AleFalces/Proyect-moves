let axios = require('axios')
const Movies = require('../models/Movie')


// let movies = []
// if(!movies.length){    
    // let fetchMovies = await axios.get('https://students-api.up.railway.app/movies');
    // movies = fetchMovies.data;
    // return movies;
    // } else {
        // return movies
        // }
        
module.exports = {
            getMovies : async () => {
        const allmovies = await Movies.find()
        return allmovies;
    },	


    // createMovie : async (newMovie) => {
        
    //      const CreatedMovie = {
    //         title: newMovie.title,
    //         rate: newMovie.rate,
    //         director: newMovie.director,
    //         year: newMovie.year,
    //         rating: newMovie.rating,
    //         genre: newMovie.genre,
    //         poster: newMovie.poster,
    //         duration: newMovie.duration,
    //      }
    //   return movies.push(CreatedMovie)
    //   }
    
}
    
    
