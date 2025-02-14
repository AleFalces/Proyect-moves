const express = require('express');
const router = require('./routes/routers');

const app = express();


app.use(router)



module.exports = app;