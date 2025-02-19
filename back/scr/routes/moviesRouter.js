const { Router } = require("express");
const {
  getAllmovies,
  createMoviecontroller,
  getMovieByid,
  movieByName,
} = require("../controllers");

let moviesRouter = Router();

moviesRouter.get("/", getAllmovies);
moviesRouter.get("/byName", movieByName);
moviesRouter.post("/", createMoviecontroller);
moviesRouter.get("/:id", getMovieByid);

module.exports = moviesRouter;
