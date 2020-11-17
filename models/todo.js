const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let todoSchema = Schema({
    task: { type: String, required: true },
    targetDate: { type: String, required: true }
});

const todos = mongoose.model("todo", todoSchema);

module.exports = todos;