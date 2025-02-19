const Movies = require("../models/Movie");

let validateTitle = async (req, res, next) => {
  let movieTitle = req.body.title;

  if (!movieTitle) {
    next({ message: "Movie Title is invalid", statusCode: 400 });
  } else {
    next();
  }
};

module.exports = validateTitle;
