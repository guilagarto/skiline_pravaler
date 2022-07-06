var express = require('express');
const controller = require('../controllers/IndexController');
var router = express.Router();

/* GET home page. */
router.get('/', controller.index);
router.get('/posts', controller.posts);
module.exports = router;
