module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running dishes_meals createTable schema.');
  return conn.schema
    .createTable("dishes_meals", function(table) {
      table.integer("dish_id");
        table.foreign("dish_id").references("dishes.id"); 
table.integer("meal_id");
        table.foreign("meal_id").references("meals.id"); 

      table.increments();
    })
    .then(() => {
      console.log('  -> Table "dishes_meals" created.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while creating table "dishes_meals".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running dishes_meals dropTable schema.');
  return conn
    .raw("DROP TABLE dishes_meals CASCADE")
    .then(() => {
      console.log('  -> Table "dishes_meals" dropped.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while dropping table "dishes_meals".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
