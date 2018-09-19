module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Running 'shoppinglists' createTable schema.`);
  return conn.schema
    .createTable("shoppinglists", function(table) {
      table.increments();
      table.string("name");
      table.timestamp("created_at").defaultTo(conn.fn.now());
      table.integer("user_id");
      table.foreign("user_id").references("users.id");
    })
    .then(() => {
      console.log(`  -> Table 'shoppinglists' created.`);
    })
    .catch(err => {
      console.log(
        `ERROR: An error occurred while creating table 'shoppinglists'.`,
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropForeign = () => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Running shoppinglists dropForeign schema.`);
  return conn.schema
    .table("shoppinglists", function(table) {
      table.dropForeign("user_id");
    })
    .then(() => {
      console.log(`  -> Table 'shoppinglists' foreign keys dropped.`);
    })
    .catch(err => {
      console.log(
        `ERROR: An error occurred while dropping foreign keys in table 'shoppinglists'.`,
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Running 'shoppinglists' dropTable schema.`);
  return conn.schema
    .dropTableIfExists("shoppinglists")
    .then(() => {
      console.log(`  -> Table 'shoppinglists' dropped.`);
    })
    .catch(err => {
      console.log(
        `ERROR: An error occurred while dropping table 'shoppinglists'.`,
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
