module.exports.insert = data => {
  const conn = require("../conn.js").conn;
  console.log('  -> Inserting shoppinglists...');
  return conn("shoppinglists")
    .insert(data)
    .then(() => {
      console.log('  -> Successfully inserted shoppinglistsdata.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when inserting shoppinglists.', err);
      return err;
    });
};

module.exports.select = (query, columns) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Retrieving shoppinglists...');
  columns ? console.log('  -> using: ', columns) : (columns = "*");
  if (query) {
    return conn
      .select(columns)
      .from("shoppinglists")
      .where(query)
      .then(rows => {
        console.log('  -> Successfully pulled row data.');
        return rows;
      })
      .catch(err => {
        console.log(
          'ERROR: An error occurred when retrieving shoppinglists.',
          err
        );
        return err;
      });
  }
  return conn
    .select(columns)
    .from("shoppinglists")
    .then(rows => {
      console.log('  -> Successfully pulled row data.');
      return rows;
    })
    .catch(err => {
      console.log('ERROR: An error occurred when retrieving shoppinglists.', err);
      return err;
    });
};
module.exports.update = (query, change) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Updating shoppinglists...');
  return conn("shoppinglists")
    .where(query.target, query.matcher, query.value)
    .update(change.target, change.value)
    .then(() => {
      console.log('  -> Successfully updated row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when updating shoppinglists.', err);
      return err;
    });
};
module.exports.delete = query => {
  const conn = require("../conn.js").conn;
  console.log('  -> Deleting shoppinglists...');
  return conn("shoppinglists")
    .where(query.target, query.matcher, query.value)
    .del()
    .then(() => {
      console.log('  -> Successfully deleted row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when deleting shoppinglists.', err);
      return err;
    });
};