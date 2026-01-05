import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import db from './models';

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync({ alter: true });

    console.log('DB connected');

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error('Startup error:', error);
  }
})();
