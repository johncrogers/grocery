const ingredientSeeds = require('../../_sampleData/ingredients.js').data;
const models = require('../../models/_models.js');

console.log(`TASK: ingredients - seed`);
models.ingredients.insertIngredients(ingredientSeeds);