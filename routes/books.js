var express = require('express');
var Router = express.Router();

var bookController = require('../controllers/bookController');

var Auth = require('../config/auth');

/*
    User can see all list books with authentication api
    @ Fajri
*/
Router.get('/', Auth.verifyToken, bookController.getAll);

Router.get('/detail/:id', Auth.verifyToken, bookController.getDetail);

Router.post('/create', Auth.verifyToken, bookController.AddBuku);

Router.put('/update/:id', Auth.verifyToken, bookController.EditBuku);

Router.delete('/delete/:id', Auth.verifyToken, bookController.DeleteBuku);

Router.post('/order', Auth.verifyToken, bookController.OrderBuku);

module.exports = Router;
