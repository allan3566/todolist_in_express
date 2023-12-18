var express = require('express');
var router = express.Router();

let tasks = ['fff'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/render', function(req, res, next) {
  res.json(tasks);
});

router.post('/add', function(req, res, next) {
  var n = req.body;
  tasks.push({text:n});
  res.json(tasks);
  console.log(tasks);
});

module.exports = router;
