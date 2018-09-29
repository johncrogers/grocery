module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running photos createTable schema.');
  return conn.schema
    .createTable("photos", function(table) {
      table.string("name"); 
table.text("description"); 

      table.increments();
    })
    .then(() => {
      console.log('  -> Table "photos" created.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while creating table "photos".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running photos dropTable schema.');
  return conn
    .raw("DROP TABLE photos CASCADE")
    .then(() => {
      console.log('  -> Table "photos" dropped.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while dropping table "photos".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
