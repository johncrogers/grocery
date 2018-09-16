module.exports.insertShoppinglists = (data) => {
  const conn = require('../conn.js').conn;
  console.log(`  -> Inserting shoppinglists...`);
  return conn('shoppinglists').insert(data).then(() => {
    console.log(`  -> Successfully inserted shoppinglist data.`);
  }).catch((err) => {
    console.log(`ERROR: An error occurred when inserting shoppinglists.`, err);
    return err;
  });
}

module.exports.selectShoppinglist = (query, columns) => {
  const conn = require('../conn.js').conn;
  console.log(`  -> Retrieving shoppinglists...`);
  columns ? console.log(`  -> using:`, columns) : columns = '*';
  if (query) {
    return conn.select(columns).from('shoppinglists').where(query).then((rows) => {
      console.log(`  -> Successfully pulled row data.`);
      return rows;
    }).catch((err) => {
      console.log(`ERROR: An error occurred when retrieving shoppinglists.`, err);
      return err;
    });
  }
  return conn.select(columns).from('shoppinglists').then((rows) => {
    console.log(`  -> Successfully pulled row data.`);
    return rows;
  }).catch((err) => {
    console.log(`ERROR: An error occurred when retrieving shoppinglists.`, err);
    return err;
  });
}