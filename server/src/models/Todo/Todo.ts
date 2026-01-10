import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes
} from "sequelize"
import sequelize from "../../config/database"

export class Todo extends Model<
  InferAttributes<Todo>,
  InferCreationAttributes<Todo>
> {
  declare id: CreationOptional<number>
  declare user_id: number
  declare name: string
  declare checked: CreationOptional<boolean>
  declare date: string
}

Todo.init(
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

    checked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },

    date: {
      type: DataTypes.DATEONLY, // 🔥 важно
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "todos",
    timestamps: true,
  }
)
