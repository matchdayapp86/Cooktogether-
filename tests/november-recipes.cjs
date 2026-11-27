const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const noop=()=>{},listeners={},elements={};
const element=()=>({innerHTML:'',value:'',style:{},classList:{add:noop,remove:noop,toggle:noop},addEventListener:noop,querySelectorAll:()=>[],querySelector:()=>null,append:noop,setAttribute:noop,focus:noop});
const sandbox={console,window:{addEventListener:noop,matchMedia:()=>({matches:false,addEventListener:noop})},document:{addEventListener:(k,f)=>listeners[k]=f,querySelectorAll:()=>[],querySelector:()=>null,getElementById:id=>elements[id]||(elements[id]=element()),body:element(),createElement:element},localStorage:{getItem:()=>null,setItem:noop},setInterval:noop,setTimeout:noop,clearInterval:noop,clearTimeout:noop,navigator:{},location:{},URL,Date};
vm.createContext(sandbox);
const html=fs.readFileSync('index.html','utf8');
for(const m of html.matchAll(/<script(?: src="([^"]+)")?>([\s\S]*?)<\/script>/g)){
 let code=m[1]?fs.readFileSync(m[1].split('?')[0],'utf8'):m[2];
 code=code.replace('const initial=location.hash.slice(1);',`window.testApi={recipes:RECIPES,resolve:recipeById,tasks:guideTasks,render:renderBeginnerTask,shop:shopIngredients,picker:(f)=>{pickerFilter=f;pickerQuery="";return filteredPickerRecipes()},browse:(f)=>{filter=f;search="";return recipeResults()},reminders:reminderOptions,actions:taskTurnReminders,start:startBeginnerTimer,timers:()=>beginnerTimers,dismiss:dismissBeginnerTimer,getState:()=>state,show:showRecipe,validate:validateImport,defaults:defaultState,favourites:()=>{filter='Favourites';return recipeResults()},setPortions:n=>guideServings=n};return;const initial=location.hash.slice(1);`);
 vm.runInContext(code,sandbox);sandbox.CookIllustrations=sandbox.window.CookIllustrations;
}
const a=sandbox.window.testApi,b=sandbox.window.CookBreakfast;

const added=a.recipes.filter(r=>r.instructionVersion===31),slow=added.filter(r=>r.cookingMethod==='Slow Cooker');
assert.equal(added.length,45);assert.equal(slow.length,15);
for(const cat of ['Chicken','Pork','Beef'])assert.equal(added.filter(r=>r.category===cat&&!r.cookingMethod).length,10);
assert.equal(new Set(a.recipes.map(r=>r.id)).size,a.recipes.length);
assert.equal(new Set(a.recipes.map(r=>r.title.toLowerCase())).size,a.recipes.length);
assert.equal(a.picker('Slow Cooker').length,15);
const browse=a.browse('Slow Cooker');for(const r of slow)assert(browse.includes(r.id));assert(!browse.includes('data-id="chicken-roast"'));
const curryIds = [
  'chickpea-curry', 'paneer-pea-masala', 'roasted-cauliflower-lentils',
  'chicken-tikka-masala-rice', 'chicken-katsu-rice', 'lamb-keema-peas',
  'squash-red-lentil-dhal', 'chicken-poondu-milagu-kuzhambu',
  'beef-coconut-lemongrass', 'beef-japanese-style-curry', 'slow-sweet-potato-chickpea'
];
assert.deepEqual(Array.from(a.picker('Curry'), r => r.id), curryIds);
assert.deepEqual(Array.from(a.browse('Curry').matchAll(/<article[^>]*data-id="([^"]+)"/g), match => match[1]), curryIds);
assert(a.picker('Chicken').some(r => r.id === 'chicken-poondu-milagu-kuzhambu'));
assert(a.picker('Vegetarian').some(r => r.id === 'paneer-pea-masala'));
assert(a.picker('Slow Cooker').some(r => r.id === 'slow-sweet-potato-chickpea'));

let missingNutrition=new Set();
for(const r of added){
 assert(r.ingredients.every(i=>i[2]>0&&Number.isFinite(i[2])));
 assert(r.beginnerTasks.length>=5);
 assert(r.reviewStatus.includes('not kitchen-tested'));
 assert.equal(r.steps.join('|'),r.beginnerTasks.map(t=>t.instructions).join('|'));
 for(const n of (r.fixedBatch?[4]:[1,2,4,6])){
  a.setPortions(n);for(let index=0;index<r.beginnerTasks.length;index++){const html=a.render(r,index);assert(!html.includes('undefined'));assert(html.includes('Do this'));}
  const nutrition=sandbox.window.CookNutrition.calculate(r,n);
  assert(nutrition.batch.every(x=>x===null||Number.isFinite(x)));
  for(const i of nutrition.ingredients)if(!i.entry||i.amount===null)missingNutrition.add(i.name);
 }
 a.getState().plan={Monday:{id:r.id,servings:4}};a.getState().cooked={};
 const shopping=a.shop();for(const i of r.ingredients.filter(i=>i[0]!=='water'))assert(shopping.some(s=>s.id===i[0]),r.id+' missing shopping item '+i[0]);
 if(r.fixedBatch){
  assert(r.batchNote.includes('four'));assert(r.beginnerTasks[0].instructions.includes('minimum and maximum'));
  const cooking=r.beginnerTasks.find(t=>t.title==='Cook on LOW');assert(cooking);assert(cooking.instructions.includes('Do not use WARM'));
  assert(a.reminders(cooking.instructions).some(t=>t.seconds===(r.category==='Chicken'||r.category==='Vegetarian'?21600:28800)));
 }
}
console.log('PASS: 30 distinct standard recipes + 15 slow-cooker recipes; browse/picker, step rendering at portions, shopping, fixed batches and long timers.');
console.log('Nutrition references not yet available for: '+[...missingNutrition].join(', '));
