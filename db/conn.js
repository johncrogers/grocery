console.log(`  -> Aquiring connection to database: GroceryApplication...`);
// console.log(`Host:`, process.env.DB_HOST);
// console.log(`User:`, process.env.DB_USER);
// console.log(`Password:`, process.env.DB_PASSWORD);
// console.log(`Database:`, process.env.DB_DATABASE);


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