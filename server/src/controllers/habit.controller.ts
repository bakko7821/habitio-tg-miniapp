import { Request, Response } from "express"
import { Habit, HabitIcon, HabitLog } from "../models"

export const getHabitsByUser = async (req: Request, res: Response) => {
  const { user_id } = req.params

  const habits = await Habit.findAll({
    where: { user_id },
    include: [
      {
        model: HabitIcon,
        as: "icon",
      },
      {
        model: HabitLog,
        as: "logs",
      },
    ],
    order: [[{ model: HabitLog, as: "logs" }, "date", "ASC"]],
  })

  const result = habits.map((habit) => {
    const logs = habit.logs ?? []

    const weeksMap: Record<string, any[]> = {}

    for (const log of logs) {
      const dayName = new Date(log.date)
        .toLocaleDateString("en-US", { weekday: "long" })
        .toLowerCase()

      if (!weeksMap[dayName]) weeksMap[dayName] = []

      weeksMap[dayName].push({
        date: log.date,
        status: log.status,
        value: log.value,
      })
    }

    return {
      id: habit.id,
      name: habit.name,
      icon: habit.icon,
      weeks: Object.entries(weeksMap).map(([name, days]) => ({
        name,
        days,
      })),
    }
  })

  res.json(result)
}
