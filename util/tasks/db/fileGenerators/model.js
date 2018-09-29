module.exports.importStatement = tableName => {
  return `module.exports.${tableName} = require("./${tableName}.js");`;
};
module.exports.template = tableName => {
  return `module.exports.insert = data => {
  const conn = require("../conn.js").conn;
  console.log('  -> Inserting ${tableName}...');
  return conn("${tableName}")
    .insert(data)
    .then(() => {
      console.log('  -> Successfully inserted ${tableName}data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when inserting ${tableName}.', err);
      return err;
    });
};

module.exports.select = (query, columns) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Retrieving ${tableName}...');
  columns ? console.log('  -> using: ', columns) : (columns = "*");
  if (query) {
    return conn
      .select(columns)
      .from("${tableName}")
      .where(query)
      .then(rows => {
        console.log('  -> Successfully pulled row data.');
        return rows;
      })
      .catch(err => {
        console.log(
          'ERROR: An error occurred when retrieving ${tableName}.',
          err
        );
        return err;
      });
  }
  return conn
    .select(columns)
    .from("${tableName}")
    .then(rows => {
      console.log('  -> Successfully pulled row data.');
      return rows;
    })
    .catch(err => {
      console.log('ERROR: An error occurred when retrieving ${tableName}.', err);
      return err;
    });
};
module.exports.update = (query, change) => {
  const conn = require("../conn.js").conn;
  console.log('  -> Updating ${tableName}...');
  return conn("${tableName}")
    .where(query.target, query.matcher, query.value)
    .update(change.target, change.value)
    .then(() => {
      console.log('  -> Successfully updated row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when updating ${tableName}.', err);
      return err;
    });
};
module.exports.delete = query => {
  const conn = require("../conn.js").conn;
  console.log('  -> Deleting ${tableName}...');
  return conn("${tableName}")
    .where(query.target, query.matcher, query.value)
    .del()
    .then(() => {
      console.log('  -> Successfully deleted row data.');
    })
    .catch(err => {
      console.log('ERROR: An error occurred when deleting ${tableName}.', err);
      return err;
    });
};`;
};
