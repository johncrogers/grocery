module.exports.importStatement = tableName => {
  return `module.exports.${tableName} = require("./${tableName}.js");`;
};
module.exports.buildRowString = tableName => {
  const { tables } = require("./../../appConfig.js");
  return tables[tableName]
    .map(column => {
      return `table.${column[1]}("${column[0]}"); `;
    })
    .join("");
};
module.exports.template = tableName => {
  return `module.exports.createTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running ${tableName} createTable schema.');
  return conn.schema
    .createTable("${tableName}", function(table) {
      ${this.buildRowString(tableName)}
      table.increments();
    })
    .then(() => {
      console.log('  -> Table "${tableName}" created.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while creating table "${tableName}".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
module.exports.dropTable = () => {
  const conn = require("../conn.js").conn;
  console.log('  -> Running ${tableName} dropTable schema.');
  return conn
    .raw("DROP TABLE ${tableName} CASCADE")
    .then(() => {
      console.log('  -> Table "${tableName}" dropped.');
    })
    .catch(err => {
      console.log(
        'ERROR: An error occurred while dropping table "${tableName}".',
        err
      );
    })
    .finally(() => {
      conn.destroy();
    });
};
`;
};
