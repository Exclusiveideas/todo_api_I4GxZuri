const Todo = require("../models/Todo.js");

async function addTodo(req, res) {
    const todo = req.body
    if(!todo?.title || !todo?.description) { 
        res.status(400).send("Incorrect Todo Properties");
        return;
    }

    const newTodo = new Todo(todo);
    try {
        const savedTodo = await newTodo.save();
        res.status(200).json(savedTodo);
    } catch (err) {
        res.status(500).json(err)
    }
}
module.exports = addTodo;