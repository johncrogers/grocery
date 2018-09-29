// npm run task db generateSchema tableName
const schemas = require("../../../db/schemas/_schemas.js");
const schemaBuilder = require("./fileGenerators/schema.js");
const modelBuilder = require("./fileGenerators/model.js");
module.exports.paths = {
  schemas: "./db/schemas/",
  models: "./db/models/"
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

  let fileName = process.argv[4] + ".js";
  let contents = schemaBuilder.template(process.argv[4]);
  console.log(`Creating schema file: ${fileName}`);
  fs.writeFile(this.paths.schemas + fileName, contents, err => {
    if (err) {
      console.log(`Error when writing new schema file:`, err);
    } else {
      console.log(`  -> Reading _schemas.js module.`);
      fs.readFile(this.paths.schemas + "_schemas.js", "utf8", (err, data) => {
        if (err) {
          console.log(`Error when reading schemas module:`, err);
        } else {
          let newSchemaModule = data.split("\n");
          if (!newSchemaModule[newSchemaModule.length - 1].length) {
            newSchemaModule.pop();
          }
          newSchemaModule.push(schemaBuilder.importStatement(process.argv[4]));
          newSchemaModule = newSchemaModule.join("\n");
          console.log(`  -> Adding import to _schemas.js module.`);
          fs.writeFile(
            this.paths.schemas + "_schemas.js",
            newSchemaModule,
            err => {
              if (err) {
                console.log(`Error when adding import statement:`, err);
              } else {
                console.log(`  -> Success. New schema built.`);
              }
            }
          );
        }
      });
    }
  });
};
module.exports.generateModel = () => {
  const fs = require("fs");

  let fileName = process.argv[4] + ".js";
  let contents = modelBuilder.template(process.argv[4]);
  console.log(`Creating model file: ${fileName}`);
  fs.writeFile(this.paths.models + fileName, contents, err => {
    if (err) {
      console.log(`Error when writing new model file:`, err);
    } else {
      console.log(`  -> Reading _models.js module.`);
      fs.readFile(this.paths.models + "_models.js", "utf8", (err, data) => {
        if (err) {
          console.log(`Error when reading models module:`, err);
        } else {
          let newModelModule = data.split("\n");
          if (!newModelModule[newModelModule.length - 1].length) {
            newModelModule.pop();
          }
          newModelModule.push(modelBuilder.importStatement(process.argv[4]));
          newModelModule = newModelModule.join("\n");
          console.log(`  -> Adding import to _models.js module.`);
          fs.writeFile(
            this.paths.models + "_models.js",
            newModelModule,
            err => {
              if (err) {
                console.log(`Error when adding import statement:`, err);
              } else {
                console.log(`  -> Success. New schema built.`);
              }
            }
          );
        }
      });
    }
  });
};
