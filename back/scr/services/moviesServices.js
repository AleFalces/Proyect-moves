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
        const allmovies = await Movies.find();
        return allmovies;
    },	

     
    createMovie : async (newMovie) => {
    
         const CreatedMovie = await Movies.create(newMovie);
      return CreatedMovie;
      },

     getMovieByid : async (id) => {
         const movieId = await Movies.findById(id);
         return movieId;
     },
}
    
    
