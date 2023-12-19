var express = require('express');
var router = express.Router();

const state = {
  tasks: []
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/render', function(req, res, next) {
  res.json(state);
});

router.post('/add', function(req, res, next) {
  var n = req.body.newTaskElement;
  state.tasks.push({text:n});
  console.log(state.tasks);
});

module.exports = router;
