var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let a = 1;
  let b = 2;

  let hasil = (a && b);
  res.send(hasil);
});

module.exports = router;