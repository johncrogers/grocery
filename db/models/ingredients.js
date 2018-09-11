const conn = require('../conn.js').conn;

module.exports.insertIngredients = (data) => {
  console.log(`Inserting rows into ingredients...`, data);
  return conn('ingredients').insert(data).then(() => {
    console.log(`Rows successfully inserted.`);
  }).catch((err) => {
    console.log(`Error occurred when inserting rows. ERR:`, err);
    return err;
  });
}

module.exports.selectIngredients = (columns) => {
  console.log(`Selecting rows from ingredients...`);
  console.log(`  -> using:`, columns);
  return conn.select(columns).from('ingredients').then((rows) => {
    console.log(`Successfully pulled row data.`);
    return rows;
  }).catch((err) => {
    console.log(`Error occurred when pulling rows. ERR:`, err);
    return err;
  });
}