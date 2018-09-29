module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running shoppinglists createTable schema.');
  return conn.schema
    .createTable("shoppinglists", function(table) {
      table.string("name"); 
table.string("date"); 
table.integer("ingredient_id");
        table.foreign("ingredient_id").references("ingredients.id"); 
table.integer("user_id");
        table.foreign("user_id").references("users.id"); 

      table.increments();
    })
    .then(() => {
      console.log('  -> Table "shoppinglists" created.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while creating table "shoppinglists".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running shoppinglists dropTable schema.');
  return conn
    .raw("DROP TABLE shoppinglists CASCADE")
    .then(() => {
      console.log('  -> Table "shoppinglists" dropped.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while dropping table "shoppinglists".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
