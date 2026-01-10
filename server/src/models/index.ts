import sequelize from "../config/database"

import { User } from "./User/User"
import { Habit } from "./Habits/Habit"
import { HabitIcon } from "./Habits/HabitIcon"
import { HabitLog } from "./Habits/HabitLog"
import { Todo } from "./Todo/Todo"

/* ========= HABITS ========= */

// Habit → Icon
Habit.hasOne(HabitIcon, {
  foreignKey: "habit_id",
  as: "icon",
})
HabitIcon.belongsTo(Habit, {
  foreignKey: "habit_id",
})

// Habit → Logs
Habit.hasMany(HabitLog, {
  foreignKey: "habit_id",
  as: "logs",
})
HabitLog.belongsTo(Habit, {
  foreignKey: "habit_id",
})

/* ========= USER ========= */

User.hasMany(Habit, {
  foreignKey: "user_id",
  as: "habits",
})
Habit.belongsTo(User, {
  foreignKey: "user_id",
})

User.hasMany(Todo, {
  foreignKey: "user_id",
  as: "todos",
})
Todo.belongsTo(User, {
  foreignKey: "user_id",
})

export default{
  sequelize,
  User,
  Habit,
  HabitIcon,
  HabitLog,
  Todo,
}
