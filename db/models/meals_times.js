module.exports.insert = data => {
  const conn = require("../conn.js").conn;
  console.log('  -> Inserting meals_times...');
  return conn("meals_times")
    .insert(data)
    .then(() => {
      console.log('  -> Successfully inserted meals_timesdata.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when inserting meals_times.', err);
      return err;
    });
};

module.exports.select = (query, columns) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Retrieving meals_times...');
  columns ? console.log('  -> using: ', columns) : (columns = "*");
  if (query) {
    return conn
      .select(columns)
      .from("meals_times")
      .where(query)
      .then(rows => {
        console.log('  -> Successfully pulled row data.');
        return rows;
      })
      .catch(err => {
        console.log(
          'ERROR: An error occurred when retrieving meals_times.',
          err
        );
        return err;
      });
  }
  return conn
    .select(columns)
    .from("meals_times")
    .then(rows => {
      console.log('  -> Successfully pulled row data.');
      return rows;
    })
    .catch(err => {
      console.log('ERROR: An error occurred when retrieving meals_times.', err);
      return err;
    });
};
module.exports.update = (query, change) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Updating meals_times...');
  return conn("meals_times")
    .where(query.target, query.matcher, query.value)
    .update(change.target, change.value)
    .then(() => {
      console.log('  -> Successfully updated row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when updating meals_times.', err);
      return err;
    });
};
module.exports.delete = query => {
  const conn = require("../conn.js").conn;
  console.log('  -> Deleting meals_times...');
  return conn("meals_times")
    .where(query.target, query.matcher, query.value)
    .del()
    .then(() => {
      console.log('  -> Successfully deleted row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when deleting meals_times.', err);
      return err;
    });
};