module.exports.createTable = () => {
  const conn = require('../conn.js').conn;
  console.log(`  -> Running 'shoppinglists' createTable schema.`);
  return conn.schema.createTable('shoppinglists', function (table) {
    table.increments();
    table.string('name');
  }).then(() => {
    console.log(`  -> Table 'shoppinglists' created.`);
  }).catch((err) => {
    console.log(`ERROR: An error occurred while creating table 'shoppinglists'.`, err);
  }).finally(() => {
    conn.destroy();
  });
}
module.exports.dropTable = () => {
  const conn = require('../conn.js').conn;
  console.log(`  -> Running 'shoppinglists' dropTable schema.`);
  return conn.schema.dropTable('shoppinglists').then(() => {
    console.log(`  -> Table 'shoppinglists' dropped.`);
  }).catch((err) => {
    console.log(`ERROR: An error occurred while dropping table 'shoppinglists'.`, err);
  }).finally(() => {
    conn.destroy();
  });
}