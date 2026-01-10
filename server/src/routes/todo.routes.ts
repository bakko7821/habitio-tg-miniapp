import { Router } from "express"
import { addTodo, getTodosByUser, getTodayTodosByUser } from "../controllers/todo.controller"

const router = Router()

router.post("/new-todo", addTodo)
router.get("/today/:userId", getTodayTodosByUser)
router.get("/:userId", getTodosByUser)

export default router
