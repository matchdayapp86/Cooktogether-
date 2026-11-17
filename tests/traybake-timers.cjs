// Render the real recipe functions with DOM stubs; this does not replace browser layout testing.
const fs=require('fs'),vm=require('vm');
const noop=()=>{};const element={innerHTML:'',style:{},classList:{add:noop,remove:noop,toggle:noop},addEventListener:noop,querySelectorAll:()=>[],querySelector:()=>null,append:noop,setAttribute:noop};
const s={console,window:{addEventListener:noop,matchMedia:()=>({matches:false,addEventListener:noop})},document:{addEventListener:noop,querySelectorAll:()=>[],querySelector:()=>null,getElementById:()=>element,body:element,createElement:()=>element},localStorage:{getItem:()=>null,setItem:noop},setInterval:noop,setTimeout:noop,clearInterval:noop,clearTimeout:noop, navigator:{},location:{},URL,Date};s.window.window=s.window;vm.createContext(s);
for(const n of ['assets/techniques/catalog.js','assets/techniques/catalog-extra.js','illustration-ui.js','illustration-action-matching.js','illustration-task-matching.js'])vm.runInContext(fs.readFileSync(n,'utf8'),s);
s.CookIllustrations=s.window.CookIllustrations;
const html=fs.readFileSync('index.html','utf8');
for(const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
 vm.runInContext(m[1].replace('const initial=location.hash.slice(1);', `window.testApi={recipes:RECIPES,tasks:guideTasks,render:renderBeginnerTask,setPortions:n=>guideServings=n,start:startBeginnerTimer,timers:()=>beginnerTimers,dismiss:dismissBeginnerTimer,extend:extendBeginnerTimer,tick:tickBeginnerTimers}; return; const initial=location.hash.slice(1);`),s);
}

const assert=require('node:assert/strict'),api=s.window.testApi;
const recipe=api.recipes.find(r=>r.id==='chicken-roast');
for(const index of [3,8]){
 const task=api.tasks(recipe)[index];
 const before=Date.now();api.start(recipe,task,index,1200);
 let timers=api.timers().filter(t=>t.id.startsWith(recipe.id+'|'+index+'|'));
 assert.equal(timers.length,2);
 let turn=timers.find(t=>t.id.endsWith('|turn')),cook=timers.find(t=>!t.id.endsWith('|turn'));
 assert.equal(turn.title,'Turn the vegetables');
 assert.equal(cook.deadline-turn.deadline,600000);
 assert(turn.deadline>=before+600000&&turn.deadline<=Date.now()+600000);
 assert(cook.title.includes('Check the traybake'));
 assert(api.render(recipe,index).includes('10-minute reminder'));
 // Repeated starts replace both timers instead of accumulating duplicates.
 api.start(recipe,task,index,1200);
 timers=api.timers().filter(t=>t.id.startsWith(recipe.id+'|'+index+'|'));
 assert.equal(timers.length,2);
 turn=timers.find(t=>t.id.endsWith('|turn'));cook=timers.find(t=>!t.id.endsWith('|turn'));
 const end=cook.deadline;
 turn.deadline=Date.now()-100;api.tick();
 assert.equal(turn.alertedAt,turn.deadline);assert.equal(cook.alertedAt,undefined);
 api.dismiss(turn.id);assert(api.timers().some(t=>t.id===cook.id));assert.equal(cook.deadline,end);
 api.extend(cook.id,2);assert.equal(cook.deadline,end+120000);
 api.dismiss(cook.id);
}
// Ordinary timers retain their original single-timer behaviour and title.
const other=api.recipes.find(r=>r.id==='chicken-fajitas'),task=api.tasks(other)[5];
api.start(other,task,5,300);assert.equal(api.timers().length,1);assert.equal(api.timers()[0].title,task.title);
console.log('Both traybake stages: paired deadlines, labels, restart, midpoint expiry, independent dismissal and extension passed; ordinary timer unchanged.');
