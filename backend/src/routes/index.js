import express from "express";
import todoRoutes from "./todo.routes.js";

const router = express.Router();

router.use("/todos", todoRoutes);

router.use("/", function(req, res) {
    res.send("Hello World!")
})

export default router;