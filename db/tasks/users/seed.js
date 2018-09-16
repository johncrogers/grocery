const userSeeds = require('../../_sampleData/users.js').data;
const models = require('../../models/_models.js');

console.log(`TASK: Users - seed`);
models.users.insertUsers(userSeeds);