const Todo = require("../models/Todo.js");

module.exports = async function deleteTodo(req, res) {
    const id = req.query.id
    if(!id) {
        res.status(401).json("Todo's ID is required")
        return
    }

    try {
        await Todo.findByIdAndDelete(id); 
        res.status(200).json(`Todo with ID of ${id} has been deleted`);
    } catch (err) {
        res.status(501).json(err);
    }
};