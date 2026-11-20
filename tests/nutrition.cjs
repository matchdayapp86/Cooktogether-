const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const read = file => fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
const context = vm.createContext({window: {}});
const html = read('index.html');
const start = html.indexOf('window.COOK_RECIPES =');
vm.runInContext(html.slice(start, html.indexOf('</script>', start)), context);
for (const file of ['breakfast-options.js', 'sauce-options.js', 'nutrition-data.js', 'nutrition.js']) {
  vm.runInContext(read(file), context, {filename: file});
}

const {COOK_RECIPES: recipes, COOK_OPTIONAL_SAUCES: sauces, CookBreakfast, CookNutrition} = context.window;
const {calculate, render} = CookNutrition;
const closeTo = (left, right) => assert(Math.abs(left - right) < 1e-8, left + ' differs from ' + right);

for (const recipe of recipes) {
  const sauce = sauces[recipe.id];
  const single = calculate(recipe, 1, sauce);
  const doubled = calculate(recipe, 2, sauce);
  assert(single.batch[0] > 0, 'Missing recipe energy: ' + recipe.id);
  if (sauce) assert(single.withSauce[0] > single.batch[0], 'Missing sauce energy: ' + recipe.id);
  for (const line of [...single.ingredients, ...single.extras]) {
    assert(line.entry, 'No reference for ' + recipe.id + ' / ' + line.name);
    assert(line.amount > 0, 'No edible weight for ' + recipe.id + ' / ' + line.name);
    assert(line.values.every(value => value === null || (Number.isFinite(value) && value >= 0)), line.name);
  }
  single.batch.forEach((value, index) => {
    if (value === null) assert.equal(doubled.batch[index], null);
    else closeTo(doubled.batch[index], value * 2);
  });
}

const breakfast = recipes.find(recipe => recipe.id === 'breakfast-full-english');
const fewerEggs = CookBreakfast.changed(breakfast, 'eggs', 0);
const original = calculate(breakfast, 4);
const withoutEggs = calculate(fewerEggs, 4);
const eggs = original.ingredients.find(line => line.name === 'Large eggs');
closeTo(original.batch[2] - withoutEggs.batch[2], eggs.values[2]);
const airFryer = CookBreakfast.changed(breakfast, 'method', 'air');
assert.deepEqual(calculate(airFryer, 4).batch, original.batch);

const roast = recipes.find(recipe => recipe.id === 'chicken-roast');
const roastSauce = sauces[roast.id];
const roastResult = calculate(roast, 4, roastSauce);
closeTo(roastResult.withSauce[8], roastResult.batch[8] + roastResult.extras.reduce((sum, line) => sum + line.values[8], 0));
assert.match(render(roast, 4, roastSauce, true, true), /open><summary>Nutrition estimates.*Included in your planned meal/);
assert.match(render(roast, 4, roastSauce, false, false), /Per 100 g.*In one serving/);

const edgeCase = {id: 'unknown', servings: 1, ingredients: [['unknown', '<ingredient>', 10, 'g']]};
const unknown = calculate(edgeCase, 1);
assert(unknown.batch.every(value => value === null));
assert.match(render(edgeCase, 1), /&lt;ingredient&gt;.*Nutrition data unavailable/);

const scaled = {servings: 1, ingredients: [['chickpeas', 'Chickpeas', 1, 'tin'], ['veg-stock', 'Prepared vegetable stock', 0.5, 'litre']]};
const lines = calculate(scaled, 1).ingredients;
assert.equal(lines[0].amount, 240);
assert.equal(lines[1].amount, 500);
console.log('Nutrition checked for ' + recipes.length + ' recipes and ' + Object.keys(sauces).length + ' optional sauces.');
