module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running meals_times createTable schema.');
  return conn.schema
    .createTable("meals_times", function(table) {
      table.integer("meal_id");
        table.foreign("meal_id").references("meals.id"); 
table.integer("time_id");
        table.foreign("time_id").references("times.id"); 
table.string("week"); 

      table.increments();
    })
    .then(() => {
      console.log('  -> Table "meals_times" created.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while creating table "meals_times".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running meals_times dropTable schema.');
  return conn
    .raw("DROP TABLE meals_times CASCADE")
    .then(() => {
      console.log('  -> Table "meals_times" dropped.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while dropping table "meals_times".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
