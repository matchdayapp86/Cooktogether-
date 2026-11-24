'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const script=fs.readFileSync(path.join(root,'sauce-options.js'),'utf8');
const css=fs.readFileSync(path.join(root,'sauce-options.css'),'utf8');
const sandbox={window:{}};
vm.runInNewContext(script,sandbox,{filename:'sauce-options.js'});
const sauces=sandbox.window.COOK_OPTIONAL_SAUCES;
const ids=['chicken-roast','greek-lamb-traybake','dinner-sausage-veg-traybake','pork-schnitzel-potatoes','tuna-pea-fishcakes','beef-burgers-wedges','mushroom-spinach-wellingtons','beef-pepper-skillet','beef-sesame-rice','breakfast-avocado-burritos','breakfast-pepper-potato-hash','breakfast-potato-spinach-frittata','lunch-lemon-chickpea-couscous','bakery-apple-crumble'];
assert.deepEqual(Object.keys(sauces).sort(),ids.sort());
assert.match(html,/<script src="sauce-options\.js\?v=[^"]+"><\/script>/);
assert.match(html,/<link rel="stylesheet" href="sauce-options\.css\?v=[^"]+">/);
for(const marker of ['renderGuideSauceChoice','renderGuideSauceStage','renderRecipeSauceCard','guide-sauce-toggle','sauce-add-shopping','sauceEnabled']){
  assert.ok(html.includes(marker),'Missing UI integration: '+marker);
}
for(const [id,s] of Object.entries(sauces)){
  assert.ok(s.name&&s.steps.length>=3&&s.ingredients.length>=1,'Incomplete sauce: '+id);
  assert.ok(s.sources.length>=1&&s.sources.every(url=>url.startsWith('https://')),'Missing references: '+id);
  assert.ok(s.minutes>0&&s.minutes<=20,'Unrealistic preparation time: '+id);
  for(const [name,amount,unit] of s.ingredients){
    assert.ok(name&&Number.isFinite(amount)&&amount>0&&unit,'Invalid ingredient for '+id);
  }
}

const recipeStart=html.indexOf('window.COOK_RECIPES = ')+ 'window.COOK_RECIPES = '.length;
const recipeEnd=html.indexOf(';'+String.fromCharCode(10)+'window.COOK_LEGACY_RECIPES',recipeStart);
assert(recipeStart>0&&recipeEnd>recipeStart,'Cannot audit primary recipes');
const recipes=JSON.parse(html.slice(recipeStart,recipeEnd));
assert.equal(recipes.length,117,'Recipe inventory changed; refresh the audit');
assert(ids.every(id=>recipes.some(r=>r.id===id)),'Optional sauce assigned to missing recipe');
assert(!Object.keys(sauces).some(id=>['salmon-traybake','fish-pie-cheddar-mash','pork-chops','lamb-koftas','pesto-chicken','chicken-fajitas','chicken-tikka-masala-rice','lentil-cottage-pie'].includes(id)),'Existing sauce duplicated');
assert(Object.keys(sauces).length===14,'Expected 14 optional sauces');
assert.match(sauces['chicken-roast'].steps.join(' '),/raw chicken/i,'Raw chicken marinade protection missing');
assert.match(html,/"id": "chicken-roast"[\s\S]{0,8500}?"time": 55/,'Original traybake cooking time changed');
assert.ok(css.includes('.optional-sauce-card'));
const inlineScripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>m[1]).filter(x=>x.trim());
inlineScripts.forEach((text,i)=>new vm.Script(text,{filename:'index-inline-'+i+'.js'}));
console.log('Optional sauce data, safe pairing, base timing, UI wiring and inline JavaScript syntax: PASS ('+ids.length+' additions).');
