const express = require('express');

const router = express.Router();
const addTodo = require('../controllers/add.js');
const updateTodo = require('../controllers/update.js');
const deleteTodo = require('../controllers/delete.js');
const retrieveTodo = require('../controllers/retrieve.js');

// 1. Add a Todo
router.post('/add', addTodo);

// 2. Update a Todo
router.patch('/update', updateTodo);

// 3. Delete a Todo
router.delete('/delete', deleteTodo);

// 4. Retrieve all Todos
router.get('/retrieve', retrieveTodo);


module.exports = router;