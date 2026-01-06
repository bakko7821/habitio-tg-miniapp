import { 
    type NonAttribute, 
    type Association, 
    Model, 
    InferAttributes, 
    InferCreationAttributes, 
    CreationOptional, 
    DataTypes } from "sequelize"
import { HabitIcon } from "./HabitIcon"
import { HabitLog } from "./HabitLog"
import sequelize from "../../config/database"

export class Habit extends Model<
  InferAttributes<Habit, { omit: "icon" | "logs" }>,
  InferCreationAttributes<Habit, { omit: "icon" | "logs" }>
> {
  declare id: CreationOptional<number>
  declare user_id: number
  declare name: string

  declare icon?: NonAttribute<HabitIcon>
  declare logs?: NonAttribute<HabitLog[]>

  declare static associations: {
    icon: Association<Habit, HabitIcon>
    logs: Association<Habit, HabitLog>
  }
}

Habit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "habits",
  }
)
