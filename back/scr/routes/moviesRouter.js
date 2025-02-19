const { Router } = require("express");
const {
  getAllmovies,
  createMoviecontroller,
  getMovieByid,
  movieByName,
} = require("../controllers");
const validateId = require("../Middlewares/validateId");
const validateTitle = require("../Middlewares/validateTitle");

let moviesRouter = Router();

moviesRouter.get("/", getAllmovies);
moviesRouter.get("/bytitle", validateTitle, movieByName);
moviesRouter.post("/", createMoviecontroller);
moviesRouter.get("/:id", validateId, getMovieByid);

module.exports = moviesRouter;
