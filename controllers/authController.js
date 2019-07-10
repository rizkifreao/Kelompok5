const bcrypt = require('bcryptjs');
const dotnv = require('dotenv');
const jwt = require('jsonwebtoken');
dotnv.config();

const model = require('../models/index');

const Contrroller = module.exports;

Contrroller.Register = (req, res) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    model.User.findOrCreate({
            where: {
                email: req.body.email
            },
            defaults: {
                username: req.body.username,
                email: req.body.email,
                email: req.body.email,
                password: hash,
                roles: req.body.roles
            }
        })
        .then(user => {
            if (user[1] == true) {
                res.status(201).json({
                    message: "Registrasi berhasil..",
                    data: user[0]
                })
            } else {
                res.status(400).send('Email sudah digunakan, gunakan email lain !!')
            }
        })
        .catch(e => res.status(400).json({
            error: true,
            message: e
        }))
}

Contrroller.Login = (req, res) => {
    model.User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (!user) {
            res.sendStatus(400).send('User tidak ada !!')
        }

        bcrypt.compare(req.body.password, user.get('password'), function (err, isMatch) {
            if (err) {
                res.status(400).json({
                    message: "Password error",
                    error: err
                })
            }

            if (isMatch) {
                jwt.sign({
                        id: user.get('id'),
                        roles: user.get('roles')
                    },
                    process.env.SECRETKEY, (error, token) => {
                        res.json({
                            message: 'Login Berhasil',
                            token: token,
                        });
                    })
            } else {
                res.status(400).send('Password salah !!')
            }
        })
    })
}