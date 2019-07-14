var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');
dotenv.config();

var Controller = module.exports;

var Model = require('../models/index');

// List semua buku
Controller.getAll = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (err, userData) => {
        if (err) {
            res.status(400).json({
                error: true,
                error_message: err
            })
        } else {
            Model.Book.findAll()
                .then(bukus => res.status(200).json({
                    message: 'Data semua buku',
                    data: bukus
                }))
                .catch(e => res.json({
                    error: true,
                    error_message: e
                }));
        }
    })
}

// Lihat detail pesanan
Controller.getDetail = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (err, userData) => {
        if (err) {
            res.status(400).json({
                error: true,
                error_message: err
            })
        } else {
            Model.Book.findOne({
                where: {
                    id: req.params.id
                }
            }).then(buku => {
                if (buku !== null) {
                    res.status(200).json({
                        message: 'Detail buku',
                        data: buku
                    })
                } else {
                    res.status(400).json({
                        message: 'Buku tidak ada !'
                    })
                }
            }).catch(e => res.json({
                error: true,
                error_message: e
            }))
        }
    })
}

// Tambah data buku baru (admin)
Controller.AddBuku = (req, res) => {
    jwt.verify(req.token, process.env.SECRETKEY, (err, userData) => {
        if (err) {
            res.status(400).json({
                error: true,
                error_message: err
            })
        } else {
            if (userData.roles == 'admin' || userData.roles == 'Admin') {
                Model.Book.create({
                    judul: req.body.judul,
                    pengarang: req.body.pengarang,
                    penerbit: req.body.penerbit,
                    tahun_terbit: req.body.tahun_terbit
                }).then(buku => res.status(201).json({
                    message: 'Berhasil menyimpan',
                    data: buku
                })).catch(e => res.json({
                    error: true,
                    error_message: e
                }))
            } else {
                res.status(403).json({
                    message: 'Anda tidak mempunyai akses untuk melakukan ini'
                })
            }
        }
    })
}

// Edit data buku (admin)
Controller.EditBuku = (req, res) => {

}


// Delete data buku (admin)
Controller.DeleteBuku = (req, res) => {

}