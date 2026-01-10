import {
  DataTypes,
  Model,
  CreationOptional,
} from "sequelize"
import sequelize from "../../config/database"

export class User extends Model {
  declare id: CreationOptional<number>
  declare telegramId: number
  declare firstName: string
  declare lastName?: string | null
  declare username?: string | null
  declare photoUrl?: string | null
  declare languageCode?: string | null
  declare isPremium?: boolean | null
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    telegramId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    photoUrl: DataTypes.TEXT,
    languageCode: DataTypes.STRING(10),
    isPremium: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
)
