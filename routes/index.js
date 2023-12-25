var express = require('express');
var router = express.Router();

const state = {
  tasks: []
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// delete 
router.post('/render', function(req, res, next) {
  res.json(state);
});

// add 
router.post('/add', function(req, res, next) {
  var n = req.body.text;
  state.tasks.push({text:n});
  console.log(state.tasks);
});
// delete 
router.post("/delete", (req, res, next) => {
  console.log('aerg')
  const taskId = parseInt(req.params.taskId);
  if (isNaN(taskId)) {
    return res.status(400).json({ error: "任務id無效" });
  }
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex > -1) {
    const taskText = tasks[taskIndex].text;
    tasks.splice(taskIndex, 1);
    res.json({ message: "任務刪除成功", taskId: taskId, text: taskText });
    console.log({ message: "任務刪除成功", taskId: taskId, text: taskText });
  } else {
    res.status(404).json({ error: "無相同任務與此ID匹配" });
  }
});
module.exports = router;
