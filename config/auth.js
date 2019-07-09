module.exports.verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['key'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerHeader
        next();
    } else {
        res.status(403).send('Login terlebih dahulu')
    }
}