const moviesServices = require('../services/moviesServices');

module.exports = { 

    moviesController : async (req, res) => {
       let movies = await moviesServices.getMovies()
       if(!movies.length){
           res.status(404).send('No movies found')
       }
       else {
        res.status(200).json(movies)
       }
        
    },

//      createMovie : async (req, res) => {
//         re
};