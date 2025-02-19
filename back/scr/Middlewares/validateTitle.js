let validateTitle = async (req, res, next) => {
  let { title } = req.body;
  console.log(title);
  if (typeof title !== "string" || title === "") {
    next({ message: "Movie Title is invalid", statusCode: 400 });
  } else {
    next();
  }
};

module.exports = validateTitle;
