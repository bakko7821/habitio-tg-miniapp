import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
} from "sequelize"
import sequelize from "../../config/database"
import { Habit } from "./Habit"

export class HabitIcon extends Model<
  InferAttributes<HabitIcon, { omit: "habit" }>,
  InferCreationAttributes<HabitIcon, { omit: "habit" }>
> {
  declare id: CreationOptional<number>
  declare habit_id: number
  declare url: string
  declare color: string

  declare habit?: NonAttribute<Habit>
}

HabitIcon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    habit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "habit_icons",
  }
)
