var express = require('express');
var router = express.Router();

const state = {
  tasks: []
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// render 
router.post('/render', function(req, res, next) {
  res.json(state);
});

// add 
router.post('/add', function(req, res, next) {
  const n = req.body.text;
  state.tasks.push({text:n});
  res.json({ message: "node-add succ", task: state.tasks });
  console.log({ message: "node-add succ", task: state.tasks });
});
// delete 
router.post('/del', (req, res, next) => {
  const n = req.body.id;
  const taskIndex = state.tasks.findIndex((tasks) => tasks.text === n);
  
  if (taskIndex!==-1) {
    state.tasks.splice(taskIndex, 1);
    res.json({ message: "node-del succ", taskId: n });
    console.log({ message: "node-del succ", taskId: n });
  } else {
    res.status(404).json({ error: "can't find ID" });
  }
});

// edit working
router.post('/edit', (req, res, next) => {
  const n = req.body.id;
  const taskIndex = state.tasks.findIndex((tasks) => tasks.text === n);
  
  if (taskIndex!==-1) {
    state.tasks[taskIndex]="test";
    res.json({ message: "node-edit succ", taskId: n });
    console.log({ message: "node-edit succ", taskId: n });
  } else {
    res.status(404).json({ error: "can't find ID" });
  }
});
module.exports = router;
