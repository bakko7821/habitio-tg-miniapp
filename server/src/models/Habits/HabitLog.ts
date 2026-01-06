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

export class HabitLog extends Model<
  InferAttributes<HabitLog, { omit: "habit" }>,
  InferCreationAttributes<HabitLog, { omit: "habit" }>
> {
  declare id: CreationOptional<number>
  declare habit_id: number
  declare date: string
  declare status: boolean
  declare value?: number | null

  declare habit?: NonAttribute<Habit>
}

HabitLog.init(
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
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "habit_logs",
    indexes: [
      {
        unique: true,
        fields: ["habit_id", "date"],
      },
    ],
  }
)
