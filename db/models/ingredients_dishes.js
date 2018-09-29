module.exports.insert = data => {
  const conn = require("../conn.js").conn;
  console.log('  -> Inserting ingredients_dishes...');
  return conn("ingredients_dishes")
    .insert(data)
    .then(() => {
      console.log('  -> Successfully inserted ingredients_dishesdata.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when inserting ingredients_dishes.', err);
      return err;
    });
};

module.exports.select = (query, columns) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Retrieving ingredients_dishes...');
  columns ? console.log('  -> using: ', columns) : (columns = "*");
  if (query) {
    return conn
      .select(columns)
      .from("ingredients_dishes")
      .where(query)
      .then(rows => {
        console.log('  -> Successfully pulled row data.');
        return rows;
      })
      .catch(err => {
        console.log(
          'ERROR: An error occurred when retrieving ingredients_dishes.',
          err
        );
        return err;
      });
  }
  return conn
    .select(columns)
    .from("ingredients_dishes")
    .then(rows => {
      console.log('  -> Successfully pulled row data.');
      return rows;
    })
    .catch(err => {
      console.log('ERROR: An error occurred when retrieving ingredients_dishes.', err);
      return err;
    });
};
module.exports.update = (query, change) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Updating ingredients_dishes...');
  return conn("ingredients_dishes")
    .where(query.target, query.matcher, query.value)
    .update(change.target, change.value)
    .then(() => {
      console.log('  -> Successfully updated row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when updating ingredients_dishes.', err);
      return err;
    });
};
module.exports.delete = query => {
  const conn = require("../conn.js").conn;
  console.log('  -> Deleting ingredients_dishes...');
  return conn("ingredients_dishes")
    .where(query.target, query.matcher, query.value)
    .del()
    .then(() => {
      console.log('  -> Successfully deleted row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when deleting ingredients_dishes.', err);
      return err;
    });
};