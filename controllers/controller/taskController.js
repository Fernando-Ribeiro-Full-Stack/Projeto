const task = require('../models/task')

module.exports = class taskController{

static createTask(req,res){
  res.render('tasks/create')
}

static showTasks(req,res){
  res.render('tasks/all')
}
}