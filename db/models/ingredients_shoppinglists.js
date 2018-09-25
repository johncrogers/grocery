module.exports.insert = data => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Inserting ingredients_shoppinglists...`);
  return conn("ingredients_shoppinglists")
    .insert(data)
    .then(() => {
      console.log(`  -> Successfully inserted ingredients_shoppinglist data.`);
    })
    .catch(err => {
      console.log(
        `ERROR: An error occurred when inserting ingredients_shoppinglists.`,
        err
      );
      return err;
    });
};

module.exports.select = (query, columns) => {
  const conn = require("../conn.js").conn;
  console.log(`  -> Retrieving ingredients_shoppinglists...`);
  columns ? console.log(`  -> using:`, columns) : (columns = "*");
  if (query) {
    return conn
      .select(columns)
      .from("ingredients_shoppinglists")
      .where(query)
      .then(rows => {
        console.log(`  -> Successfully pulled row data.`);
        return rows;
      })
      .catch(err => {
        console.log(
          `ERROR: An error occurred when retrieving ingredients_shoppinglists.`,
          err
        );
        return err;
      });
  }
  return conn
    .select(columns)
    .from("ingredients_shoppinglists")
    .then(rows => {
      console.log(`  -> Successfully pulled row data.`);
      return rows;
    })
    .catch(err => {
      console.log(
        `ERROR: An error occurred when retrieving ingredients_shoppinglists.`,
        err
      );
      return err;
    });
};
