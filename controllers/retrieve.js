const Todo = require("../models/Todo.js");

module.exports = async function retrieveTodo(req, res) {
    try {
        const todo = await Todo.find();
        res.status(200).json(todo);
        
    } catch (err) {
        res.status(503).json(err);
    }
};