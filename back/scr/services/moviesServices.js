const Movies = require("../models/Movie");

module.exports = {
  getMovies: async () => {
    const allmovies = await Movies.find();
    return allmovies;
  },

  createMovie: async (newMovie) => {
    const CreatedMovie = await Movies.create(newMovie);
    return CreatedMovie;
  },

  getMovieByid: async (id) => {
    const movieId = await Movies.findById(id);
    return movieId;
  },

  getMovieByName: async (movieName) => {
    let movieByName = await Movies.findOne({ title: movieName });
    return movieByName;
  },
};
