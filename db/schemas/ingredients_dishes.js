module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running ingredients_dishes createTable schema.');
  return conn.schema
    .createTable("ingredients_dishes", function(table) {
      table.integer("meal_id");
        table.foreign("meal_id").references("meals.id"); 
table.integer("ingredient_id");
        table.foreign("ingredient_id").references("ingredients.id"); 
table.decimal("ingredient_volume"); 
table.string("prep_note"); 

      table.increments();
    })
    .then(() => {
      console.log('  -> Table "ingredients_dishes" created.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while creating table "ingredients_dishes".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running ingredients_dishes dropTable schema.');
  return conn
    .raw("DROP TABLE ingredients_dishes CASCADE")
    .then(() => {
      console.log('  -> Table "ingredients_dishes" dropped.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while dropping table "ingredients_dishes".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
