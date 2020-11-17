const Todo = require("../models/todo");

const gettodo = async(req, res) => {
    try {
        const todos = await Todo.find();
        if (!todos) {
            return res.status(400).json({ error: "Error in getting todos" });
        }
        res.render("index", {
            todolist: todos
        });
    } catch (e) {
        return res.status(400).json({
            error: e,
        });
    }
};

const addtodo = (req, res) => {
    var todolist = {
        task: req.body.task,
        targetDate: req.body.targetDate
    }

    Todo.create(todolist, function(err, todolist) {
        if (err) {
            console.log(err);
        }
        res.redirect("/");
        //res.json(todolist)

    });

};

const deletetodo = async(req, res) => {
    try {
        const result = await Todo.deleteOne({ _id: req.params.id })
        if (!result) {
            return res.status(400).json({ error: "Error in deleting book" })
        }
        res.redirect("/");
    } catch (e) {
        return res.status(400).json({ error: e })
    }
}

const updatetodo = async(req, res) => {
    try {

        const result = await Todo.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
        if (!result) {
            return res.status(400).json({ error: "Error in updating " })
        }
        res.redirect("/");
    } catch (e) {
        return res.status(400).json({ error: e })
    }
}


const getTodoForUpdate = async(req, res) => {
    try {
        await Todo.findById(req.params.id, (err, todos) => {
            if (err) {
                return res.status(404).json({
                    message: "Error uy"
                })
            }
            // console.log(task);

            res.render("task/update", { todolist: todos })
        })
    } catch (e) {
        return res.status(404).json({
            message: "Error uyy!",
            err: e
        })
    }

};

module.exports = { gettodo, addtodo, deletetodo, updatetodo, getTodoForUpdate };