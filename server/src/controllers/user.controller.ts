import { Request, Response } from 'express';
import db from '../models';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await db.User.create(req.body);
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
