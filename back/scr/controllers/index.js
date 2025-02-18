const moviesServices = require('../services/moviesServices');
let catchErros = require("../utils/catchErrors")

let  getAllmovies = async (req, res) => {
    let allMovies = await moviesServices.getMovies()
    res.status(200).json(allMovies)
}

let createMoviecontroller = async (req, res) => {
  let newMovie = req.body;
  let movies = await moviesServices.getMovies();
  let movieExists = movies.find(movie => movie.title === newMovie.title);
  if(movieExists){
      res.status(400).send('Movie already exists')
  }
  else {
      moviesServices.createMovie(newMovie);
      res.status(201).json(newMovie);
  }}

 let  getMovieByid = async (req, res) => {
    let id = req.params.id;
    const movieId = await moviesServices.getMovieByid(id);
    if(movieId === null){
      res.status(404).send('Movie not found')}
    else{
        res.status(200).json(movieId);

    }

  }

module.exports = { 
    getAllmovies : catchErros(getAllmovies),
    createMoviecontroller : catchErros(createMoviecontroller),
    getMovieByid : catchErros(getMovieByid)
};