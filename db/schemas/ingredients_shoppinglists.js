module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log("  -> Running ingredients_shoppinglists createTable schema.");
  return conn.schema
    .createTable("ingredients_shoppinglists", function(table) {
      table.integer("shoppinglist_id");
      table.foreign("shoppinglist_id").references("shoppinglists.id");
      table.integer("ingredient_id");
      table.foreign("ingredient_id").references("ingredients.id");
      table.decimal("purchase_quantity");
      table.string("prep_note");

      table.increments();
    })
    .then(() => {
      console.log('  -> Table "ingredients_shoppinglists" created.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while creating table "ingredients_shoppinglists".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log("  -> Running ingredients_shoppinglists dropTable schema.");
  return conn
    .raw("DROP TABLE ingredients_shoppinglists CASCADE")
    .then(() => {
      console.log('  -> Table "ingredients_shoppinglists" dropped.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while dropping table "ingredients_shoppinglists".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
