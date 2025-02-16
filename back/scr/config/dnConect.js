const mongoose = require('mongoose');

const dbConnect = async () => {
  await  mongoose.connect('mongodb+srv://alefalces:154089058@movies.85tyl.mongodb.net/');
};

module.exports = dbConnect;