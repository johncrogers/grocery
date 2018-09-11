const conn = require('../conn.js').conn;

module.exports.createTable = () => {
  console.log(`Running ingredients createTable schema.`);
  return conn.schema.createTable('ingredients', function (table) {
    table.increments();
    table.string('name');
    table.string('department');
    table.string('note');
    table.integer('price');
  }).then(() => {
    console.log(`Table 'ingredients' created.`);
  }).catch((err) => {
    console.log(`Error while creating table. ERR:`, err);
  }).finally(() => {
    conn.destroy();
  });
}
module.exports.dropTable = () => {
  console.log(`Running ingredients dropTable schema.`);
  return conn.schema.dropTable('ingredients').then(() => {
    console.log(`Table 'ingredients' dropped.`);
  }).catch((err) => {
    console.log(`Error while dropping table. ERR:`, err);
  }).finally(() => {
    conn.destroy();
  });
}