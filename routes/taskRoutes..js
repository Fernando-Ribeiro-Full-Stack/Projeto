const express = require('express')
const router = express.Router()

const taskController = require('../controllers/controller/taskController')

router.get('/add', taskController.createTask)
router.get('/', taskController.showTasks)
module.exports = router