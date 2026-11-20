/* Recipe nutrition from listed edible ingredients. Source records live in nutrition-data.js. */
(() => {
  'use strict';
  const data = window.CookNutritionData;
  const fields = ['Energy (kcal)', 'Energy (kJ)', 'Protein', 'Carbohydrate', 'Fat', 'Saturates', 'Sugars', 'Fibre', 'Salt'];
  const cofid = 'https://www.gov.uk/government/publications/composition-of-foods-integrated-dataset-cofid';
  const usda = 'https://fdc.nal.usda.gov/download-datasets/';
  const html = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'})[c]);

  function referenceFor(id, name, unit) {
    if (id === 'eggs' && /medium/i.test(name)) return 'medium-eggs';
    if (id === 'butter' && /unsalted/i.test(name)) return 'unsalted-butter';
    if (id === 'soy-sauce' && /reduced.salt/i.test(name)) return 'less-salt-soy';
    if (id === 'tortillas' && /large/i.test(name)) return 'large-tortillas';
    if (id === 'sweetcorn' && unit === 'g' && /frozen/i.test(name)) return 'frozen-sweetcorn';
    return id;
  }

  function ingredient(id, name, quantity, unit, scale) {
    const key = referenceFor(id, name, unit);
    const entry = Object.hasOwn(data.foods, key) ? data.foods[key] : null;
    const conversions = data.units[key];
    const base = entry?.[3] || 'g';
    let factor = unit === base ? 1 : conversions?.[unit];
    if (base === 'ml' && !factor) factor = {tsp:5, tbsp:15, litre:1000}[unit];
    const amount = Number.isFinite(factor) ? quantity * scale * factor : null;
    const values = amount === null ? null : entry?.[2].map(value => value === null ? null : value * amount / 100);
    return {name, entry, amount, base, values: values || fields.map(() => null)};
  }

  function sum(lines) {
    return fields.map((_, i) => {
      const values = lines.map(line => line.values[i]);
      return values.includes(null) ? null : values.reduce((total, value) => total + value, 0);
    });
  }

  function calculate(recipe, portions, sauce) {
    const ingredients = recipe.ingredients.filter(i => i[2] > 0).map(i => ingredient(...i.slice(0, 4), portions / recipe.servings));
    const extras = (sauce?.ingredients || []).map(([name, quantity, unit]) => {
      const label = name.replace(/ \((?:extra|vegetarian)\)$/i, '').toLowerCase();
      return ingredient(data.sauceKeys[label], name, quantity, unit, portions / 4);
    });
    return {ingredients, extras, batch: sum(ingredients), withSauce: extras.length ? sum([...ingredients, ...extras]) : null};
  }

  function format(value, index) {
    if (value === null) return '—';
    if (index < 2) return Math.round(value).toLocaleString('en-GB');
    const digits = index === 8 ? 2 : 1;
    const threshold = 10 ** -digits;
    if (value > 0 && value < threshold) return '&lt;' + threshold + ' g';
    return value.toLocaleString('en-GB', {maximumFractionDigits:digits}) + ' g';
  }

  function table(columns) {
    return '<table><thead><tr><th scope="col">Nutrient</th>' +
      columns.map(([label]) => '<th scope="col">' + html(label) + '</th>').join('') +
      '</tr></thead><tbody>' + fields.map((label, i) =>
        '<tr><th scope="row">' + label + '</th>' + columns.map(([, values]) => '<td>' + format(values[i], i) + '</td>').join('') + '</tr>'
      ).join('') + '</tbody></table>';
  }

  function perServing(values, portions) {
    return values.map(v => v === null ? null : v / portions);
  }

  function ingredientRows(items, portions) {
    return items.map(({name, entry, amount, base, values}) => {
      const heading = '<summary>' + html(name) + '</summary>';
      if (!entry) return '<details>' + heading + '<p>Nutrition data unavailable.</p></details>';
      const [source, description, reference] = entry;
      const [url, sourceName] = source.startsWith('UK:') ? [cofid, 'UK CoFID ' + source.slice(3)] :
        source.startsWith('US:') ? [usda, 'USDA SR28 ' + source.slice(3)] : [source, 'UK product label'];
      const quantityNote = amount === null ? '<p>Nutrition for the recipe quantity is unavailable because its edible weight is unknown.</p>' :
        '<p>About ' + html((amount / portions).toLocaleString('en-GB',{maximumFractionDigits:1})) + ' ' + base + ' per serving.</p>';
      return '<details>' + heading + quantityNote +
        table([['Per 100 ' + base, reference], ['In one serving', perServing(values, portions)]]) +
        '<p>Reference food: ' + html(description) + '. <a href="' + html(url) + '" target="_blank" rel="noopener">' + html(sourceName) + '</a></p></details>';
    }).join('');
  }

  function render(recipe, portions, sauce, sauceSelected, keepOpen) {
    const result = calculate(recipe, portions, sauce);
    const selected = sauceSelected && result.withSauce ? result.withSauce : result.batch;
    const energy = selected[0] === null ? '' : ' · ' + format(selected[0] / portions, 0) + ' kcal per serving';
    const input = [...result.ingredients, ...result.extras];
    const incomplete = input.some(line => line.values.includes(null));
    const key = recipe.breakfast?.base || recipe.id;
    return '<details class="recipe-nutrition" data-nutrition-recipe="' + html(key) + '"' + (keepOpen ? ' open' : '') +
      '><summary>Nutrition estimates' + energy + '</summary>' +
      '<p>Based on listed ingredients before cooking, or their ready-to-use form. Brands, edible weights, cooking losses and unmeasured seasoning can affect the result.</p>' +
      '<h3>Recipe' + (sauce ? ' without sauce' : '') + '</h3>' +
      table([['Per serving', perServing(result.batch, portions)], ['Whole recipe (' + portions + ')', result.batch]]) +
      (result.withSauce ? '<h3>Recipe with ' + html(sauce.name) + '</h3>' +
        (sauceSelected ? '<p>Included in your planned meal.</p>' : '') +
        table([['Per serving', perServing(result.withSauce, portions)], ['Whole recipe (' + portions + ')', result.withSauce]]) : '') +
      (incomplete ? '<p>— means source data or a weight is missing for that nutrient. A recipe total is shown when all listed ingredients contribute a known value.</p>' : '') +
      '<h3>Ingredients</h3>' + ingredientRows(result.ingredients, portions) +
      (result.extras.length ? '<h3>Optional sauce ingredients</h3>' + ingredientRows(result.extras, portions) : '') +
      '</details>';
  }

  window.CookNutrition = {calculate, render};
})();
