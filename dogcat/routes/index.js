var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'express'})
});

/* GET home page. */
router.get('/dog', function(req, res, next) {
  res.send("Woof, I'm a dog");
});

router.get('/cat', function(req, res, next) {
  res.render('index', { title: "Meow I'm a cat" });
});

module.exports = router;
