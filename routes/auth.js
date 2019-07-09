var express = require('express');
var router = express.Router();

/* GET home page. */
const Auth = require('../controllers/authController');

const authConfig = require('../config/auth');

router.post('/login', Auth.Login);
router.post('/register', Auth.Register);


module.exports = router;