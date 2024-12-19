import knex from '../config/db.js';

export const createUser = async (userData) => {
  const [user] = await knex('users').insert(userData).returning('*');
  return user;
};

export const getUserById = async (id) => {
  const user = await knex('users').where('id', id).first();
  return user;
};
