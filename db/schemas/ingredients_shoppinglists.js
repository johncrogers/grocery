module.exports.createTable = () => {
  const conn = require('../conn.js').conn;
  console.log(`  -> Running ingredients_shoppinglists createTable schema.`);
  return conn.schema.createTable('ingredients_shoppinglists', function (table) {
    table.increments();
    table.foreign('ingredient_id')
      .references('ingredients.id');
    table.foreign('shoppinglist_id')
      .references('shoppinglists.id');
  }).then(() => {
    console.log(`  -> Table 'ingredients_shoppinglists' created.`);
  }).catch((err) => {
    console.log(`ERROR: An error occurred while creating table 'ingredients_shoppinglists'.`, err);
  }).finally(() => {
    conn.destroy();
  });
}
module.exports.dropTable = () => {
  const conn = require('../conn.js').conn;
  console.log(`  -> Running ingredients_shoppinglists dropTable schema.`);
  return conn.schema.dropTable('ingredients_shoppinglists').then(() => {
    console.log(`  -> Table 'ingredients_shoppinglists' dropped.`);
  }).catch((err) => {
    console.log(`ERROR: An error occurred while dropping table 'ingredients_shoppinglists'.`, err);
  }).finally(() => {
    conn.destroy();
  });
}