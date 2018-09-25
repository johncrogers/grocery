const tasks = {
  db: require("./db.js")
};

console.log(`TASK RUNNER:`);
let section = process.argv[2];
let task = process.argv[3];
tasks[section][task]();
