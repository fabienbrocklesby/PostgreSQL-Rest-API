import { db } from '../../utils/database.js';

export const index = async () => {
  const data = await db.query('SELECT * FROM posts');
  return data.rows;
};
