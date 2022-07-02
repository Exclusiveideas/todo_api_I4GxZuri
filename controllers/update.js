const Todo = require("../models/Todo.js");

module.exports = async function updateTodo(req, res) {
    if(!req?.body) {
        res.status(402).json("Todo's properties to be updated are required");
        return;
    }

    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.query.id, {
            ...req?.body
        }, { new: true});

        res.status(200).json(updatedTodo);
        
    } catch (err) {
        res.status(503).json(err);
    }
};