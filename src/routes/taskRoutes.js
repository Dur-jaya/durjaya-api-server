const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// These should point to valid functions
router.get('/tasks', taskController.getTasks);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
