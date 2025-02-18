const moviesServices = require('../services/moviesServices');

module.exports = { 

    getAllmovies : async (req, res) => {
       
       try{
        let allMovies = await moviesServices.getMovies()
        res.status(200).json(allMovies)
    } catch(err){
        res.status(404).send('No movies found')
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
        res.status(201).json(newMovie);
    }},

    getMovieByid: async (req, res) => {
        let id = req.params.id;
        try{
            const movieId = await moviesServices.getMovieByid(id);
                res.status(200).json(movieId);
        } catch(err){
            res.status(400).send("this movie does not exist");
        }

    }

};