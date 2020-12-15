const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.xhr,'123')

  res.render('index', { title: 'Express' });
  //res.send(express.static('dist', options))


});

module.exports = router;
