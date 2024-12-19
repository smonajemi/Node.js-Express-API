import Knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const knex = Knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

knex.raw('SELECT 1')
  .then(() => {
    console.log('DB connected successfully!');
  })
  .catch((err) => {
    console.error('DB connection failed:', err.message);
    process.exit(1);
  });

export default knex;
