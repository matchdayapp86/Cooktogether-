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
const ids=['chicken-roast','greek-lamb-traybake','dinner-sausage-veg-traybake','pork-schnitzel-potatoes','tuna-pea-fishcakes','beef-burgers-wedges','mushroom-spinach-wellingtons'];
assert.deepEqual(Object.keys(sauces).sort(),ids.sort());
assert.match(html,/<script src="sauce-options\.js\?v=[^"]+"><\/script>/);
assert.match(html,/<link rel="stylesheet" href="sauce-options\.css\?v=[^"]+">/);
for(const marker of ['renderGuideSauceChoice','renderGuideSauceStage','renderRecipeSauceCard','guide-sauce-toggle','sauce-add-shopping','sauceEnabled']){
  assert.ok(html.includes(marker),'Missing UI integration: '+marker);
}
for(const [id,s] of Object.entries(sauces)){
  assert.ok(s.name&&s.steps.length>=3&&s.ingredients.length>=3,'Incomplete sauce: '+id);
  assert.ok(s.sources.length>=1&&s.sources.every(url=>url.startsWith('https://')),'Missing references: '+id);
  assert.ok(s.minutes>0&&s.minutes<=20,'Unrealistic preparation time: '+id);
  for(const [name,amount,unit] of s.ingredients){
    assert.ok(name&&Number.isFinite(amount)&&amount>0&&unit,'Invalid ingredient for '+id);
  }
}
assert.match(sauces['chicken-roast'].steps.join(' '),/raw chicken/i,'Raw chicken marinade protection missing');
assert.match(html,/"id": "chicken-roast"[\s\S]{0,8500}?"time": 55/,'Original traybake cooking time changed');
assert.ok(css.includes('.optional-sauce-card'));
const inlineScripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(m=>m[1]).filter(x=>x.trim());
inlineScripts.forEach((text,i)=>new vm.Script(text,{filename:'index-inline-'+i+'.js'}));
console.log('Optional sauce data, safe pairing, base timing, UI wiring and inline JavaScript syntax: PASS ('+ids.length+' additions).');
