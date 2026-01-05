import {
  DataTypes,
  Model,
  Optional,
  Sequelize,
} from 'sequelize';

interface UserAttributes {
  id: number;
  telegramId: number;
  firstName: string;
  lastName?: string | null;
  username?: string | null;
  photoUrl?: string | null;
  languageCode?: string | null;
  isPremium?: boolean | null;
}

interface UserCreationAttributes
  extends Optional<UserAttributes, 'id'> {}

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public telegramId!: number;
  public firstName!: string;
  public lastName!: string | null;
  public username!: string | null;
  public photoUrl!: string | null;
  public languageCode!: string | null;
  public isPremium!: boolean | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default (sequelize: Sequelize) => {
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

      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      username: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      photoUrl: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      languageCode: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },

      isPremium: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: true,
      indexes: [
        {
          unique: true,
          fields: ['telegramId'],
        },
      ],
    }
  );

  return User;
};
