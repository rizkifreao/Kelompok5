var express = require('express');
var Router = express.Router();

var bookController = require('../controllers/bookController');

var Auth = require('../config/auth');

/*
    User can see all list books with authentication api
    @ Fajri
*/
Router.get('/', Auth.verifyToken, bookController.getAll);

// lihat detail buku
Router.get('/detail/:id', Auth.verifyToken, bookController.getDetail);

// membuat data buku baru (admin)
Router.post('/create', Auth.verifyToken, bookController.AddBuku);

// edit data buku (admin)
Router.put('/update/:id', Auth.verifyToken, bookController.EditBuku);

// hapus data buku (admin)
Router.delete('/delete/:id', Auth.verifyToken, bookController.DeleteBuku);

// order book
Router.post('/order', Auth.verifyToken, bookController.OrderBuku);

module.exports = Router;
