var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');
dotenv.config();

var Controller = module.exports;

var Model = require('../models/index');

Controller.getAll = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (err, userData) => {
        if (err) {
            res.status(400).json({
                error: true,
                error_message: err
            })
        } else {
            Model.Book.findAll()
                .then(books => res.status(200).json({
                    message: 'Data semua buku',
                    data: books
                }))
                .catch(e => res.json({
                    error: true,
                    error_message: e
                }));
        }
    })
}