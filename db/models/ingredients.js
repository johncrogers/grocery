module.exports.insert = data => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Inserting ingredients...`);
  return conn("ingredients")
    .insert(data)
    .then(() => {
      console.log(`  -> Successfully inserted ingredient data.`);
    })
    .catch(err => {
      console.log(`ERROR: An error occurred when inserting ingredients.`, err);
      return err;
    });
};

module.exports.select = (query, columns) => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Retrieving ingredients...`);
  columns ? console.log(`  -> using:`, columns) : (columns = "*");
  if (query) {
    return conn
      .select(columns)
      .from("ingredients")
      .where(query)
      .then(rows => {
        console.log(`  -> Successfully pulled row data.`);
        return rows;
      })
      .catch(err => {
        console.log(
          `ERROR: An error occurred when retrieving ingredients.`,
          err
        );
        return err;
      });
  }
  return conn
    .select(columns)
    .from("ingredients")
    .then(rows => {
      console.log(`  -> Successfully pulled row data.`);
      return rows;
    })
    .catch(err => {
      console.log(`ERROR: An error occurred when retrieving ingredients.`, err);
      return err;
    });
};
