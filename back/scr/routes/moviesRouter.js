const { Router } = require("express");
const {
  getAllmovies,
  createMoviecontroller,
  getMovieByid,
  movieByName,
} = require("../controllers");
const validateId = require("../Middlewares/validateId");
const validateTitle = require("../Middlewares/validateTitle");
const validateCreateMovies = require("../Middlewares/validateCreateRoute");

let moviesRouter = Router();

moviesRouter.get("/", getAllmovies);
moviesRouter.get("/bytitle", validateTitle, movieByName);
moviesRouter.post("/newmovie", validateCreateMovies, createMoviecontroller);
moviesRouter.get("/:id", validateId, getMovieByid);

module.exports = moviesRouter;
