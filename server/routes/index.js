var express = require('express');
const controller = require('../controllers/IndexController');
var router = express.Router();

/* GET home page. */
router.get('/', controller.index);
router.get('/posts', controller.posts);
router.get('/alerts', controller.alerts);
router.get('/explorer', controller.explorer);
router.get('/login', controller.login);
router.get('/more', controller.more);
router.get('/profile', controller.profile);
router.get('/savedItems', controller.savedItems);
module.exports = router;
