import sequelize from '../config/database';
import { Habit } from './Habits/Habit';
import { HabitIcon } from './Habits/HabitIcon';
import { HabitLog } from './Habits/HabitLog';
import UserModel, { User } from './user.model';

UserModel(sequelize);

const db = {
  sequelize,
  User,
};

export default db;

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

export { Habit, HabitIcon, HabitLog }

