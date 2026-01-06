import { Router } from "express"
import { getHabitsByUser } from "../controllers/habit.controller"

const router = Router()

router.get("/habits/:user_id", getHabitsByUser)

export default router
