module.exports.insert = data => {
  const conn = require("../conn.js").conn;
  console.log('  -> Inserting dishes_meals...');
  return conn("dishes_meals")
    .insert(data)
    .then(() => {
      console.log('  -> Successfully inserted dishes_mealsdata.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when inserting dishes_meals.', err);
      return err;
    });
};

module.exports.select = (query, columns) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Retrieving dishes_meals...');
  columns ? console.log('  -> using: ', columns) : (columns = "*");
  if (query) {
    return conn
      .select(columns)
      .from("dishes_meals")
      .where(query)
      .then(rows => {
        console.log('  -> Successfully pulled row data.');
        return rows;
      })
      .catch(err => {
        console.log(
          'ERROR: An error occurred when retrieving dishes_meals.',
          err
        );
        return err;
      });
  }
  return conn
    .select(columns)
    .from("dishes_meals")
    .then(rows => {
      console.log('  -> Successfully pulled row data.');
      return rows;
    })
    .catch(err => {
      console.log('ERROR: An error occurred when retrieving dishes_meals.', err);
      return err;
    });
};
module.exports.update = (query, change) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Updating dishes_meals...');
  return conn("dishes_meals")
    .where(query.target, query.matcher, query.value)
    .update(change.target, change.value)
    .then(() => {
      console.log('  -> Successfully updated row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when updating dishes_meals.', err);
      return err;
    });
};
module.exports.delete = query => {
  const conn = require("../conn.js").conn;
  console.log('  -> Deleting dishes_meals...');
  return conn("dishes_meals")
    .where(query.target, query.matcher, query.value)
    .del()
    .then(() => {
      console.log('  -> Successfully deleted row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when deleting dishes_meals.', err);
      return err;
    });
};