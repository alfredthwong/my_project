import express from "express";
import {
    addTodo,
    updateTodo,
    deleteTodo,
    getTodos,
    getTodo
} from "../controllers/todo.controllers.js";

const router = express.Router();

router.post("/", addTodo);

router.get("/", getTodos);

router.get("/:id", getTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;