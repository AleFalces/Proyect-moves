let validateCreateMovies = async (req, res, next) => {
  let { title, rate, director, year, poster, duration, genre } = req.body;
  if (typeof title !== "string" || title === "") {
    next({ message: "Movie Title is invalid", statusCode: 400 });
  }
  if (typeof rate !== "number" || rate < 0 || rate > 10) {
    next({ message: "Movie rate is invalid", statusCode: 400 });
  }
  if (typeof director !== "string" || director === "") {
    next({ message: "Movie director is invalid", statusCode: 400 });
  }
  if (typeof year !== "number" || year <= 1888 || year >= 2026) {
    next({ message: "Movie year is invalid", statusCode: 400 });
  }
  if (typeof poster !== "string" || poster === "") {
    next({ message: "Movie poster is invalid", statusCode: 400 });
  }
  if (typeof duration !== "string" || duration === "") {
    next({ message: "Movie duration is invalid", statusCode: 400 });
  }
  if (!Array.isArray(genre) || genre.length === 0) {
    next({ message: "Movie genre is invalid", statusCode: 400 });
  } else {
    next();
  }
};

module.exports = validateCreateMovies;
