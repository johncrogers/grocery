module.exports.insertUsers = data => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Inserting users...`);
  return conn("users")
    .insert(data)
    .then(() => {
      console.log(`  -> Successfully inserted user data.`);
    })
    .catch(err => {
      console.log(`ERROR: An error occurred when inserting users.`, err);
      return err;
    });
};

module.exports.selectUsers = (query, columns) => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Retrieving users...`);
  columns ? console.log(`  -> using:`, columns) : (columns = "*");
  if (query) {
    return conn
      .select(columns)
      .from("users")
      .where(query)
      .then(rows => {
        console.log(`  -> Successfully pulled row data.`);
        return rows;
      })
      .catch(err => {
        console.log(`ERROR: An error occurred when retrieving users.`, err);
        return err;
      });
  }
  return conn
    .select(columns)
    .from("users")
    .then(rows => {
      console.log(`  -> Successfully pulled row data.`);
      return rows;
    })
    .catch(err => {
      console.log(`ERROR: An error occurred when retrieving users.`, err);
      return err;
    });
};
