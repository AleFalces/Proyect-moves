 const { Router } = require('express');
 const { moviesController } = require('../controllers/controllers');

const router = Router();

router.get('/', moviesController)

 module.exports = router;