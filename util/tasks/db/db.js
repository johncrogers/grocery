// npm run task db generateSchema tableName
const schemas = require("../../../db/schemas/_schemas.js");
const schemaBuilder = require("./schemaBuilder.js");
module.exports.paths = {
  schemas: "db/schemas/",
  models: "db/models/"
};
module.exports.create = () => {
  let table = process.argv[4];
  schemas[table].createTable();
};
module.exports.drop = () => {
  let table = process.argv[4];
  schemas[table].dropTable();
};
module.exports.seed = () => {
  const data = require("../../../db/_sampleData/_data.js");
  const models = require("../../../db/models/_models.js");
  let table = process.argv[4];
  models[table].insert(data[table]);
};
module.exports.generateSchema = () => {
  const fs = require("fs");
  let schemas = require("./../../../db/schemas/_schemas.js");

  let fileName = process.argv[4] + ".js";
  let path = this.paths.schemas;
  let contents = schemaBuilder.template(process.argv[4]);

  console.log(`Creating schema file: ${fileName}`);
  fs.writeFile(path + fileName, contents, err => {
    if (err) {
      console.log(`ERROR:`, err);
    }
  });
};
