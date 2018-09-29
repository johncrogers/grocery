module.exports.insert = data => {
  const conn = require("../conn.js").conn;
  console.log('  -> Inserting times...');
  return conn("times")
    .insert(data)
    .then(() => {
      console.log('  -> Successfully inserted timesdata.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when inserting times.', err);
      return err;
    });
};

module.exports.select = (query, columns) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Retrieving times...');
  columns ? console.log('  -> using: ', columns) : (columns = "*");
  if (query) {
    return conn
      .select(columns)
      .from("times")
      .where(query)
      .then(rows => {
        console.log('  -> Successfully pulled row data.');
        return rows;
      })
      .catch(err => {
        console.log(
          'ERROR: An error occurred when retrieving times.',
          err
        );
        return err;
      });
  }
  return conn
    .select(columns)
    .from("times")
    .then(rows => {
      console.log('  -> Successfully pulled row data.');
      return rows;
    })
    .catch(err => {
      console.log('ERROR: An error occurred when retrieving times.', err);
      return err;
    });
};
module.exports.update = (query, change) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Updating times...');
  return conn("times")
    .where(query.target, query.matcher, query.value)
    .update(change.target, change.value)
    .then(() => {
      console.log('  -> Successfully updated row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when updating times.', err);
      return err;
    });
};
module.exports.delete = query => {
  const conn = require("../conn.js").conn;
  console.log('  -> Deleting times...');
  return conn("times")
    .where(query.target, query.matcher, query.value)
    .del()
    .then(() => {
      console.log('  -> Successfully deleted row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when deleting times.', err);
      return err;
    });
};