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

  createMoviecontroller : async (req, res) => {
    let newMovie = req.body;
    let movies = await moviesServices.getMovies();
    let movieExists = movies.find(movie => movie.title === newMovie.title);
    if(movieExists){
        res.status(400).send('Movie already exists')
    }
    else {
        moviesServices.createMovie(newMovie);
        res.status(201).json(newMovie)
    }}
};