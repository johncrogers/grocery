// npm run task section task tableName
const tasks = {
  genesis: require("./genesis/genesis.js"),
  db: require("./db/db.js"),
  api: require("./api/api.js"),
  controllers: require("./controllers/controllers.js")
};

console.log(`TASK RUNNER:`);
let section = process.argv[2];
let task = process.argv[3];
tasks[section][task]();
