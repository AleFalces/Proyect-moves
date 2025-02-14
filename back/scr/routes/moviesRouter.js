const {Router} = require('express');
const { moviesController } = require('../controllers');

let moviesRouter = Router();

moviesRouter.get('/', moviesController)


module.exports = moviesRouter;