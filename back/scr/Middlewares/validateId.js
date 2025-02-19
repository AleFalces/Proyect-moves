const mongoose = require("mongoose");

let validateId = async (req, res, next) => {
  let { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    next();
  } else {
    next({ message: "Movie id is Invalid", statusCode: 400 });
  }
};

module.exports = validateId;
