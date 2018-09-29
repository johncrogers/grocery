module.exports.insert = data => {
  const conn = require("../conn.js").conn;
  console.log('  -> Inserting meals...');
  return conn("meals")
    .insert(data)
    .then(() => {
      console.log('  -> Successfully inserted mealsdata.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when inserting meals.', err);
      return err;
    });
};

module.exports.select = (query, columns) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Retrieving meals...');
  columns ? console.log('  -> using: ', columns) : (columns = "*");
  if (query) {
    return conn
      .select(columns)
      .from("meals")
      .where(query)
      .then(rows => {
        console.log('  -> Successfully pulled row data.');
        return rows;
      })
      .catch(err => {
        console.log(
          'ERROR: An error occurred when retrieving meals.',
          err
        );
        return err;
      });
  }
  return conn
    .select(columns)
    .from("meals")
    .then(rows => {
      console.log('  -> Successfully pulled row data.');
      return rows;
    })
    .catch(err => {
      console.log('ERROR: An error occurred when retrieving meals.', err);
      return err;
    });
};
module.exports.update = (query, change) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Updating meals...');
  return conn("meals")
    .where(query.target, query.matcher, query.value)
    .update(change.target, change.value)
    .then(() => {
      console.log('  -> Successfully updated row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when updating meals.', err);
      return err;
    });
};
module.exports.delete = query => {
  const conn = require("../conn.js").conn;
  console.log('  -> Deleting meals...');
  return conn("meals")
    .where(query.target, query.matcher, query.value)
    .del()
    .then(() => {
      console.log('  -> Successfully deleted row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when deleting meals.', err);
      return err;
    });
};