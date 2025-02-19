const moviesServices = require("../services/moviesServices");
let catchErros = require("../utils/catchErrors");

let getAllmovies = async (req, res) => {
  let allMovies = await moviesServices.getMovies();
  res.status(200).json(allMovies);
};

let getMovieByid = async (req, res, next) => {
  let id = req.params.id;
  const movieId = await moviesServices.getMovieByid(id);
  if (movieId === null) {
    next({ message: "Movie not Found", statusCode: 400 });
  } else {
    res.status(200).json(movieId);
  }
};

let movieByName = async (req, res, next) => {
  let movieName = req.body.title;

  let ByName = await moviesServices.getMovieByName(movieName);
  if (ByName === null) {
    next({ message: "Movie not Found", statusCode: 400 });
  } else {
    res.status(200).json(ByName);
  }
};
let createMoviecontroller = async (req, res) => {
  let newMovie = req.body.title;
  let movies = await moviesServices.getMovies();
  let movieExists = movies.find((movie) => movie.title === newMovie);
  if (movieExists) {
    res.status(400).send("Movie already exists");
  } else {
    moviesServices.createMovie(newMovie);
    res.status(201).json(newMovie);
  }
};

module.exports = {
  getAllmovies: catchErros(getAllmovies),
  createMoviecontroller: catchErros(createMoviecontroller),
  getMovieByid: catchErros(getMovieByid),
  movieByName: catchErros(movieByName),
};
