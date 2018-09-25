module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Running 'users' createTable schema.`);
  return conn.schema
    .createTable("users", function(table) {
      table.increments();
      table.string("name");
      table.string("password");
    })
    .then(() => {
      console.log(`  -> Table 'users' created.`);
    })
    .catch(err => {
      console.log(
        `ERROR: An error occurred while creating table 'users'.`,
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Running 'users' dropTable schema.`);
  return conn
    .raw("DROP TABLE users CASCADE")
    .then(() => {
      console.log(`  -> Table 'users' dropped.`);
    })
    .catch(err => {
      console.log(
        `ERROR: An error occurred while dropping table 'users'.`,
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
