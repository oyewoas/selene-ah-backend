require('babel-core/register');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DEV,
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    logging: false
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_TEST,
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    logging: false
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  },
  staging: {
    use_env_variable: 'DATABASE_URL'
  },
  SECRETKEY: process.env.SECRET
};
