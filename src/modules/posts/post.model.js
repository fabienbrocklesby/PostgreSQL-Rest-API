import { db } from '../../utils/database.js';

export const index = async () => {
  const data = await db.query('SELECT * FROM posts');
  return data.rows;
};

export const createPost = async ({ title, body }) => {
  const data = await db.query('INSERT INTO posts (title, body) VALUES ($1, $2) RETURNING "id"', [title, body]);
  return data.rows;
};
