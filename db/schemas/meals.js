module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running meals createTable schema.');
  return conn.schema
    .createTable("meals", function(table) {
      table.string("name"); 
table.string("type"); 
table.integer("photo_id");
        table.foreign("photo_id").references("photos.id"); 

      table.increments();
    })
    .then(() => {
      console.log('  -> Table "meals" created.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while creating table "meals".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running meals dropTable schema.');
  return conn
    .raw("DROP TABLE meals CASCADE")
    .then(() => {
      console.log('  -> Table "meals" dropped.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while dropping table "meals".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
