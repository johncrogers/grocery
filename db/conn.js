var conn = require('knex')({
  client: 'pg',
  version: '7.4.3',
  connection: {
    host: '127.0.0.1',
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'myapp_test'
  }
});

export default conn;