import db from '../../utils/database.js';

export const index = async () => {
  const data = await db.query('SELECT * FROM posts');
  return data.rows;
};

export const createPost = async ({ title, body }) => {
  const data = await db.query('INSERT INTO posts (title, body) VALUES ($1, $2) RETURNING "id"', [title, body]);
  return data.rows;
};

export const findById = async (id) => {
  const data = await db.query('SELECT * FROM posts WHERE id = $1', [id]);
  return data.rows;
};

export const updatePost = async (id, { title, body }) => {
  const data = await db.query('UPDATE posts SET title = $1, body = $2 WHERE id = $3 RETURNING *', [title, body, id]);
  return data.rows;
};

export const deletePost = async (id) => {
  const data = await db.query('DELETE FROM posts WHERE id = $1', [id]);
  return data.rows;
};
