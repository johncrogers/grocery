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
module.exports.dropForeign = () => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Running ingredients_shoppinglists dropForeign schema.`);
  return conn.schema
    .table("ingredients_shoppinglists", function(table) {
      table.dropForeign("ingredient_id");
      table.dropForeign("shoppinglist_id");
    })
    .then(() => {
      console.log(
        `  -> Table 'ingredients_shoppinglists' foreign keys dropped.`
      );
    })
    .catch(err => {
      console.log(
        `ERROR: An error occurred while dropping foreign keys in table 'ingredients_shoppinglists'.`,
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
  return conn.schema
    .dropTableIfExists("ingredients_shoppinglists")
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
