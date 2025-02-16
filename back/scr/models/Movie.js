const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    rate: Number,
    director: String,
    year: Number,
    genre: Array,
    poster: String,
    duration: String
})

let Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;