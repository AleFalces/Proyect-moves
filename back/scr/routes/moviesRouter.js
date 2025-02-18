const {Router} = require('express');
const { getAllmovies, createMoviecontroller, getMovieByid} = require('../controllers');

let moviesRouter = Router();

moviesRouter.get('/', getAllmovies)
moviesRouter.post('/', createMoviecontroller )
moviesRouter.get('/:id', getMovieByid)

module.exports = moviesRouter;