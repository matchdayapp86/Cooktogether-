// Render the real recipe functions with DOM stubs; this does not replace browser layout testing.
const fs=require('fs'),vm=require('vm');
const noop=()=>{};const element={innerHTML:'',style:{},classList:{add:noop,remove:noop,toggle:noop},addEventListener:noop,querySelectorAll:()=>[],querySelector:()=>null,append:noop,setAttribute:noop};
const s={console,window:{addEventListener:noop,matchMedia:()=>({matches:false,addEventListener:noop})},document:{addEventListener:noop,querySelectorAll:()=>[],querySelector:()=>null,getElementById:()=>element,body:element,createElement:()=>element},localStorage:{getItem:()=>null,setItem:noop},setInterval:noop,setTimeout:noop,clearInterval:noop,clearTimeout:noop, navigator:{},location:{},URL,Date};s.window.window=s.window;vm.createContext(s);
for(const n of ['assets/techniques/catalog.js','assets/techniques/catalog-extra.js','illustration-ui.js','illustration-action-matching.js','illustration-task-matching.js'])vm.runInContext(fs.readFileSync(n,'utf8'),s);
s.CookIllustrations=s.window.CookIllustrations;
const html=fs.readFileSync('index.html','utf8');
for(const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
 vm.runInContext(m[1].replace('const initial=location.hash.slice(1);', `window.testApi={recipes:RECIPES,tasks:guideTasks,render:renderBeginnerTask,setPortions:n=>guideServings=n}; return; const initial=location.hash.slice(1);`),s);
}
const assert=require('node:assert/strict');
const api=s.window.testApi, illustrations=s.window.CookIllustrations;
const cases=[
 ['chicken-roast',1,['potato-prep','carrot-batons']],
 ['chicken-fajitas',2,['slice-onion','pepper-strips']],
 ['beef-pepper-skillet',2,['pepper-strips','slice-onion','ginger-grate','garlic']],
 ['pesto-chicken',5,['chicken-cube']],
 ['halloumi-couscous',1,['courgette-dice','pepper-dice']],
 ['halloumi-couscous',7,['halloumi-slice']],
 ['lamb-aubergine-rice',0,['aubergine-cube']],
 ['beef-pepper-skillet',6,['beef-strips']],
 ['sweet-potato-enchiladas',1,['potato-prep']],
 ['spinach-mushroom-gnocchi',0,['mushroom-slice']],
 ['pork-apple-meatballs',8,['apple-dice']],
 ['smoky-tofu-peanut-noodles',0,['tofu-cube']],
 ['lunch-chicken-pepper-wraps',8,['chicken-strips']],
 ['lunch-cheddar-tomato-toasties',0,['grate']],
 ['lunch-cheddar-tomato-toasties',1,['tomato-slice']],
 ['lunch-hummus-crunch-pittas',4,['cucumber-quarter']],
 ['lunch-egg-cress-sandwiches',4,['boiled-egg-peel']],
 ['lunch-jackets-beans-cheese',5,['grate']]
];
for(const portions of [2,4,6]){
 api.setPortions(portions);
 for(const [id,index,keys] of cases){
  const r=api.recipes.find(r=>r.id===id),instruction=api.tasks(r)[index].instructions;
  const output=api.render(r,index);
  assert.deepEqual([...illustrations.selectTask(instruction,{recipeId:id,taskIndex:index})],keys,id);
  assert(keys.some(key=>illustrations.imageSrc(key)),id+' has an approved guide');
  for(const key of keys.filter(key=>illustrations.imageSrc(key)))assert(output.includes('data-illustration="'+key+'"'),id+' '+key+' at '+portions+' portions');
  // Reordering a task preserves its illustrations; a new instruction cannot inherit them.
  assert.deepEqual([...illustrations.selectTask(instruction,{recipeId:id,taskIndex:999})],keys);
  assert.equal(illustrations.render(illustrations.selectTask('Add the already prepared ingredients.',{recipeId:id,taskIndex:index})), '');
 }
}
for(const [id,index] of [['chicken-fajitas',6],['beef-pepper-skillet',12],['beef-pepper-skillet',13]]){
 assert(!api.render(api.recipes.find(r=>r.id===id),index).includes('data-illustration='),'No repeat prep on '+id+':'+index);
}
let count=0;
for(const r of api.recipes)for(let i=0;i<api.tasks(r).length;i++){
 const output=api.render(r,i);assert(!output.includes('undefined'),r.id+':'+i);
 for(const match of output.matchAll(/<img src="(assets\/techniques\/[^" ]+)"/g))assert(fs.existsSync(match[1]),match[1]);
 count++;
}
console.log(`Checked ${cases.length} repaired placements at 2/4/6 portions, task reordering, prepared-ingredient exclusions, and rendered ${count} tasks.`);
