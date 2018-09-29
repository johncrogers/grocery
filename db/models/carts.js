module.exports.insert = data => {
  const conn = require("../conn.js").conn;
  console.log('  -> Inserting carts...');
  return conn("carts")
    .insert(data)
    .then(() => {
      console.log('  -> Successfully inserted cartsdata.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when inserting carts.', err);
      return err;
    });
};

module.exports.select = (query, columns) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Retrieving carts...');
  columns ? console.log('  -> using: ', columns) : (columns = "*");
  if (query) {
    return conn
      .select(columns)
      .from("carts")
      .where(query)
      .then(rows => {
        console.log('  -> Successfully pulled row data.');
        return rows;
      })
      .catch(err => {
        console.log(
          'ERROR: An error occurred when retrieving carts.',
          err
        );
        return err;
      });
  }
  return conn
    .select(columns)
    .from("carts")
    .then(rows => {
      console.log('  -> Successfully pulled row data.');
      return rows;
    })
    .catch(err => {
      console.log('ERROR: An error occurred when retrieving carts.', err);
      return err;
    });
};
module.exports.update = (query, change) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Updating carts...');
  return conn("carts")
    .where(query.target, query.matcher, query.value)
    .update(change.target, change.value)
    .then(() => {
      console.log('  -> Successfully updated row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when updating carts.', err);
      return err;
    });
};
module.exports.delete = query => {
  const conn = require("../conn.js").conn;
  console.log('  -> Deleting carts...');
  return conn("carts")
    .where(query.target, query.matcher, query.value)
    .del()
    .then(() => {
      console.log('  -> Successfully deleted row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when deleting carts.', err);
      return err;
    });
};