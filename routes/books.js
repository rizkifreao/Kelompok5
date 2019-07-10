var express = require('express');
var Router = express.Router();

var bookController = require('../controllers/bookController');

var Auth = require('../config/auth');

/* 
    User can see all list books with authentication api
    @ Rizki
*/
Router.get('/', Auth.verifyToken, bookController.getAll);

module.exports = Router;