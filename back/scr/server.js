const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("dev"));

app.use(cors());
app.use(express.json());
app.use(router);

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && "body" in err) {
    res.status(400).json({ message: "Invalid JSON format" });
  } else {
    res
      .status(err.statusCode || 500)
      .json(err.message || "Internal server error");
  }
});

module.exports = app;
