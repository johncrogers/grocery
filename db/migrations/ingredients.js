import conn from '../conn.js';

module.exports.createTable = conn.schema.createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.string('department');
  table.string('note');
  table.integer('price');
}).then(() => {
  console.log(`  -> Table created.`);
});
module.exports.dropTable = conn.schema.dropTable('users').then(() => {
  console.log(`  -> Table dropped.`);
});