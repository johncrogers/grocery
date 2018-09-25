const schemas = require("../../db/schemas/_schemas.js");

module.exports.create = () => {
  let table = process.argv[4];
  schemas[table].createTable();
};
module.exports.drop = () => {
  let table = process.argv[4];
  schemas[table].dropTable();
};
module.exports.seed = () => {
  const data = require("./../../db/_sampleData/_data.js");
  const models = require("./../../db/models/_models.js");
  let table = process.argv[4];
  models[table].insert(data[table]);
};
