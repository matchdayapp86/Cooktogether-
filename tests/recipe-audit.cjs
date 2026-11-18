const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const noop=()=>{},listeners={},elements={};
const element=()=>({innerHTML:'',value:'',style:{},classList:{add:noop,remove:noop,toggle:noop},addEventListener:noop,querySelectorAll:()=>[],querySelector:()=>null,append:noop,setAttribute:noop,focus:noop});
const sandbox={console,window:{addEventListener:noop,matchMedia:()=>({matches:false,addEventListener:noop})},document:{addEventListener:(k,f)=>listeners[k]=f,querySelectorAll:()=>[],querySelector:()=>null,getElementById:id=>elements[id]||(elements[id]=element()),body:element(),createElement:element},localStorage:{getItem:()=>null,setItem:noop},setInterval:noop,setTimeout:noop,clearInterval:noop,clearTimeout:noop,navigator:{},location:{},URL,Date};
vm.createContext(sandbox);
const html=fs.readFileSync('index.html','utf8');
for(const m of html.matchAll(/<script(?: src="([^"]+)")?>([\s\S]*?)<\/script>/g)){
 let code=m[1]?fs.readFileSync(m[1].split('?')[0],'utf8'):m[2];
 code=code.replace('const initial=location.hash.slice(1);',`window.testApi={recipes:RECIPES,resolve:recipeById,tasks:guideTasks,render:renderBeginnerTask,shop:shopIngredients,reminders:reminderOptions,actions:taskTurnReminders,start:startBeginnerTimer,timers:()=>beginnerTimers,dismiss:dismissBeginnerTimer,getState:()=>state,show:showRecipe,validate:validateImport,defaults:defaultState,favourites:()=>{filter='Favourites';return recipeResults()},setPortions:n=>guideServings=n};return;const initial=location.hash.slice(1);`);
 vm.runInContext(code,sandbox);sandbox.CookIllustrations=sandbox.window.CookIllustrations;
}
const a=sandbox.window.testApi,b=sandbox.window.CookBreakfast;
let taskCount=0,actionSteps=0;
for(const r of a.recipes){
 const ids=r.ingredients.map(i=>i[0]);assert.equal(new Set(ids).size,ids.length,r.id+' duplicate ingredient');
 const used=new Set();
 for(const [n,t] of r.beginnerTasks.entries()){
  taskCount++;assert(t.instructions&&t.title&&t.check,r.id+' incomplete task');
  for(const id of t.uses){assert(ids.includes(id),r.id+' unknown '+id);used.add(id);}
  const rendered=a.render(r,n);assert(rendered.includes('Do this'));
  assert(!rendered.includes('undefined'),r.id+' undefined UI');
  const options=a.reminders(t.instructions);
  for(const option of options){const cues=a.actions(r,t,option.seconds);if(cues.length)actionSteps++;for(const c of cues)assert(c.seconds>0&&c.seconds<option.seconds,r.id+' reminder outside cooking period');}
 }
 for(const id of ids)assert(used.has(id),r.id+' ingredient missing from every task: '+id);
}
const r=a.resolve('halloumi-couscous'),task=r.beginnerTasks.find(t=>/Roast 22/.test(t.instructions));
assert.equal(a.actions(r,task,1320)[0].seconds,660);
const lamb=a.resolve('lamb-koftas'),kofta=lamb.beginnerTasks.find(t=>/Fry koftas/.test(t.instructions));
assert.equal(a.actions(lamb,kofta,600).map(c=>c.seconds).join(','),'180,360,540');
assert.equal(a.actions(r,{instructions:'Bake for 30 minutes without turning.'},1800).length,0);
assert.equal(a.actions(r,{instructions:'Fry for 15 minutes, turning every 5 minutes.'},900).map(c=>c.seconds).join(','),'300,600');
assert.equal(a.reminders('Check the centre is 75°C for 30 seconds.').length,0);
// Starting a replacement duration for the same action must not leave stale cues.
a.start(r,task,4,1320);assert.equal(a.timers().length,2);
a.start(r,task,4,1320);assert.equal(a.timers().length,2);
const main=a.timers().find(t=>!t.id.includes('|turn-'));a.dismiss(a.timers().find(t=>t.id.includes('|turn-')).id);assert(a.timers().includes(main));
for(const [id,index,key] of [['lamb-tagine',5,'dried-apricots'],['breakfast-pepper-potato-hash',6,'eggs'],['fish-pie-cheddar-mash',6,'dijon-mustard'],['beef-lasagne',7,'lasagne-sheets']])assert(a.resolve(id).beginnerTasks[index].uses.includes(key));
assert(!a.render(a.resolve('roasted-cauliflower-lentils'),4).includes('Drain and rinse canned beans'));
assert(a.resolve('chicken-roast').beginnerTasks[10].instructions.includes('Resting means'));
console.log(`PASS: ${a.recipes.length} recipes, ${taskCount} tasks rendered; all ingredients linked; ${actionSteps} timed action steps; kofta schedules, halfway deadlines and independent dismissal.`);
