module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Running ingredients_shoppinglists createTable schema.`);
  return conn.schema
    .createTable("ingredients_shoppinglists", function(table) {
      table.increments();
      table.string("status");
      table.integer("ingredient_id");
      table.foreign("ingredient_id").references("ingredients.id");
      table.integer("shoppinglist_id");
      table.foreign("shoppinglist_id").references("shoppinglists.id");
      table.decimal("price_per_unit");
      table.decimal("purchase_volume");
      table.decimal("relative_unit");
      table.decimal("relative_volume");
    })
    .then(() => {
      console.log(`  -> Table 'ingredients_shoppinglists' created.`);
    })
    .catch(err => {
      console.log(
        `ERROR: An error occurred while creating table 'ingredients_shoppinglists'.`,
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Running ingredients_shoppinglists dropTable schema.`);
  return conn
    .raw("DROP TABLE ingredients_shoppinglists CASCADE")
    .then(() => {
      console.log(`  -> Table 'ingredients_shoppinglists' dropped.`);
    })
    .catch(err => {
      console.log(
        `ERROR: An error occurred while dropping table 'ingredients_shoppinglists'.`,
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
