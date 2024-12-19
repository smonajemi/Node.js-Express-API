// src/models/userModel.js
import knex from '../config/db.JS';

export const createUser = (data) => knex('users').insert(data).returning('*');
export const getUserById = (id) => knex('users').where('id', id).first();
