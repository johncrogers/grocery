module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running ingredients createTable schema.');
  return conn.schema
    .createTable("ingredients", function(table) {
      table.string("name"); 
table.decimal("price"); 
table.string("department"); 
table.text("purchasing_note"); 

      table.increments();
    })
    .then(() => {
      console.log('  -> Table "ingredients" created.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while creating table "ingredients".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running ingredients dropTable schema.');
  return conn
    .raw("DROP TABLE ingredients CASCADE")
    .then(() => {
      console.log('  -> Table "ingredients" dropped.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while dropping table "ingredients".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
