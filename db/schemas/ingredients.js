module.exports.createTable = () => {
  const conn = require('../conn.js').conn;
  console.log(`  -> Running ingredients createTable schema.`);
  return conn.schema.createTable('ingredients', function (table) {
    table.increments();
    table.string('name');
    table.string('department');
    table.string('purchasing_note');
    table.decimal('price');
  }).then(() => {
    console.log(`  -> Table 'ingredients' created.`);
  }).catch((err) => {
    console.log(`ERROR: An error occurred while creating table 'ingredients'.`, err);
  }).finally(() => {
    conn.destroy();
  });
}
module.exports.dropTable = () => {
  const conn = require('../conn.js').conn;
  console.log(`  -> Running ingredients dropTable schema.`);
  return conn.schema.dropTable('ingredients').then(() => {
    console.log(`  -> Table 'ingredients' dropped.`);
  }).catch((err) => {
    console.log(`ERROR: An error occurred while dropping table 'ingredients'.`, err);
  }).finally(() => {
    conn.destroy();
  });
}