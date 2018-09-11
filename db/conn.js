console.log(`Aquiring connection to database: GroceryApplication...`);

module.exports.conn = require('knex')({
  client: 'pg',
  version: '7.4.3',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }
});