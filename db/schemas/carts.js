module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running carts createTable schema.');
  return conn.schema
    .createTable("carts", function(table) {
      table.string("name"); 
table.string("date"); 
table.integer("ingredient_id");
        table.foreign("ingredient_id").references("ingredients.id"); 
table.integer("user_id");
        table.foreign("user_id").references("users.id"); 

      table.increments();
    })
    .then(() => {
      console.log('  -> Table "carts" created.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while creating table "carts".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running carts dropTable schema.');
  return conn
    .raw("DROP TABLE carts CASCADE")
    .then(() => {
      console.log('  -> Table "carts" dropped.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while dropping table "carts".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
