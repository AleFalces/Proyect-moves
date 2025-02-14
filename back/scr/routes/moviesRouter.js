const {Router} = require('express');
const { moviesController, createMoviecontroller} = require('../controllers');

let moviesRouter = Router();

moviesRouter.get('/', moviesController)
moviesRouter.post('/', createMoviecontroller )

module.exports = moviesRouter;