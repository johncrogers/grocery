module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log("  -> Running ingredients_carts createTable schema.");
  return conn.schema
    .createTable("ingredients_carts", function(table) {
      table.integer("meal_id");
      table.foreign("meal_id").references("meals.id");
      table.integer("ingredient_id");
      table.foreign("ingredient_id").references("ingredients.id");
      table.decimal("purchase_quantity");
      table.string("prep_note");

      table.increments();
    })
    .then(() => {
      console.log('  -> Table "ingredients_carts" created.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while creating table "ingredients_carts".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log("  -> Running ingredients_carts dropTable schema.");
  return conn
    .raw("DROP TABLE ingredients_carts CASCADE")
    .then(() => {
      console.log('  -> Table "ingredients_carts" dropped.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while dropping table "ingredients_carts".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
