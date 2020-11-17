const express = require("express");
const router = express.Router();

const {
    gettodo,
    addtodo,
    deletetodo,
    updatetodo,
    getTodoForUpdate
} = require("../controllers/todoController");

router.get("/", gettodo);
router.post("/", addtodo);
router.post("/:id", deletetodo);
router.post("/updatetodo/:id", updatetodo);
router.get("/update/:id", getTodoForUpdate);
module.exports = router