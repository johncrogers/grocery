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
  return conn.schema
    .dropTableIfExists("users")
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

module.exports.dropForeign = () => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Running users dropForeign schema.`);
  return conn.schema
    .table("users", function(table) {
      table.dropForeign("user_id");
    })
    .then(() => {
      console.log(`  -> Table 'users' foreign keys dropped.`);
    })
    .catch(err => {
      console.log(
        `ERROR: An error occurred while dropping foreign keys in table 'users'.`,
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
