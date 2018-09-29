module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running times createTable schema.');
  return conn.schema
    .createTable("times", function(table) {
      table.integer("slot"); 
table.string("day"); 

      table.increments();
    })
    .then(() => {
      console.log('  -> Table "times" created.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while creating table "times".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running times dropTable schema.');
  return conn
    .raw("DROP TABLE times CASCADE")
    .then(() => {
      console.log('  -> Table "times" dropped.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while dropping table "times".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
