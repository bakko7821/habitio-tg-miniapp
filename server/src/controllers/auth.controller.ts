import { Request, Response } from 'express';
import db from '../models';
import { verifyTelegramInitData } from '../utils/verifyTelegramInitData';

export const telegramAuth = async (req: Request, res: Response) => {
  try {
    const { initData, user } = req.body;

    if (!initData || !user) {
      return res.status(400).json({ error: 'Invalid payload' });
    }

    const isValid = verifyTelegramInitData(
      initData,
      process.env.TELEGRAM_BOT_TOKEN as string
    );

    if (!isValid) {
      return res.status(401).json({ error: 'Invalid Telegram initData' });
    }

    const {
      id,
      first_name,
      last_name,
      username,
      photo_url,
      language_code,
      is_premium,
    } = user;

    let dbUser = await db.User.findOne({
      where: { telegramId: id },
    });

    if (!dbUser) {
      dbUser = await db.User.create({
        telegramId: id,
        firstName: first_name,
        lastName: last_name,
        username,
        photoUrl: photo_url,
        languageCode: language_code,
        isPremium: is_premium,
      });
    } else {
      const updates: Partial<typeof dbUser> = {};

      if (dbUser.firstName !== first_name) updates.firstName = first_name;
      if (dbUser.lastName !== last_name) updates.lastName = last_name;
      if (dbUser.username !== username) updates.username = username;
      if (dbUser.photoUrl !== photo_url) updates.photoUrl = photo_url;
      if (dbUser.languageCode !== language_code)
        updates.languageCode = language_code;
      if (dbUser.isPremium !== is_premium)
        updates.isPremium = is_premium;

      if (Object.keys(updates).length > 0) {
        await dbUser.update(updates);
      }
    }

    return res.json(dbUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Telegram auth failed' });
  }
};
