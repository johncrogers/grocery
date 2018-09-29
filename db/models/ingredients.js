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
module.exports.update = (query, change) => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Updating ingredients...`);
  return conn("ingredients")
    .where(query.target, query.matcher, query.value)
    .update(change.target, change.value)
    .then(() => {
      console.log(`  -> Successfully updated row data.`);
    })
    .catch(err => {
      console.log(`ERROR: An error occurred when updating ingredients.`, err);
      return err;
    });
};
module.exports.delete = query => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Deleting ingredients...`);
  return conn("ingredients")
    .where(query.target, query.matcher, query.value)
    .del()
    .then(() => {
      console.log(`  -> Successfully deleted row data.`);
    })
    .catch(err => {
      console.log(`ERROR: An error occurred when deleting ingredients.`, err);
      return err;
    });
};
