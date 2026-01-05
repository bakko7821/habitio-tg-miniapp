import sequelize from '../config/database';
import UserModel, { User } from './user.model';

UserModel(sequelize);

const db = {
  sequelize,
  User,
};

export default db;
