module.exports.insert = data => {
  const conn = require("../conn.js").conn;
  console.log('  -> Inserting ingredients_shoppinglists...');
  return conn("ingredients_shoppinglists")
    .insert(data)
    .then(() => {
      console.log('  -> Successfully inserted ingredients_shoppinglistsdata.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when inserting ingredients_shoppinglists.', err);
      return err;
    });
};

module.exports.select = (query, columns) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Retrieving ingredients_shoppinglists...');
  columns ? console.log('  -> using: ', columns) : (columns = "*");
  if (query) {
    return conn
      .select(columns)
      .from("ingredients_shoppinglists")
      .where(query)
      .then(rows => {
        console.log('  -> Successfully pulled row data.');
        return rows;
      })
      .catch(err => {
        console.log(
          'ERROR: An error occurred when retrieving ingredients_shoppinglists.',
          err
        );
        return err;
      });
  }
  return conn
    .select(columns)
    .from("ingredients_shoppinglists")
    .then(rows => {
      console.log('  -> Successfully pulled row data.');
      return rows;
    })
    .catch(err => {
      console.log('ERROR: An error occurred when retrieving ingredients_shoppinglists.', err);
      return err;
    });
};
module.exports.update = (query, change) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Updating ingredients_shoppinglists...');
  return conn("ingredients_shoppinglists")
    .where(query.target, query.matcher, query.value)
    .update(change.target, change.value)
    .then(() => {
      console.log('  -> Successfully updated row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when updating ingredients_shoppinglists.', err);
      return err;
    });
};
module.exports.delete = query => {
  const conn = require("../conn.js").conn;
  console.log('  -> Deleting ingredients_shoppinglists...');
  return conn("ingredients_shoppinglists")
    .where(query.target, query.matcher, query.value)
    .del()
    .then(() => {
      console.log('  -> Successfully deleted row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when deleting ingredients_shoppinglists.', err);
      return err;
    });
};