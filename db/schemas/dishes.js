module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running dishes createTable schema.');
  return conn.schema
    .createTable("dishes", function(table) {
      table.string("name"); 
table.integer("photo_id");
        table.foreign("photo_id").references("photos.id"); 

      table.increments();
    })
    .then(() => {
      console.log('  -> Table "dishes" created.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while creating table "dishes".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running dishes dropTable schema.');
  return conn
    .raw("DROP TABLE dishes CASCADE")
    .then(() => {
      console.log('  -> Table "dishes" dropped.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while dropping table "dishes".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
