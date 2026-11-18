const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const noop=()=>{},listeners={},elements={};
const element=()=>({innerHTML:'',value:'',style:{},classList:{add:noop,remove:noop,toggle:noop},addEventListener:noop,querySelectorAll:()=>[],querySelector:()=>null,append:noop,setAttribute:noop,focus:noop});
const sandbox={console,window:{addEventListener:noop,matchMedia:()=>({matches:false,addEventListener:noop})},document:{addEventListener:(k,f)=>listeners[k]=f,querySelectorAll:()=>[],querySelector:()=>null,getElementById:id=>elements[id]||(elements[id]=element()),body:element(),createElement:element},localStorage:{getItem:()=>null,setItem:noop},setInterval:noop,setTimeout:noop,clearInterval:noop,clearTimeout:noop,navigator:{},location:{},URL,Date};
vm.createContext(sandbox);
const html=fs.readFileSync('index.html','utf8');
for(const m of html.matchAll(/<script(?: src="([^"]+)")?>([\s\S]*?)<\/script>/g)){
 let code=m[1]?fs.readFileSync(m[1].split('?')[0],'utf8'):m[2];
 code=code.replace('const initial=location.hash.slice(1);',`window.testApi={recipes:RECIPES,resolve:recipeById,tasks:guideTasks,render:renderBeginnerTask,shop:shopIngredients,getState:()=>state,show:showRecipe,validate:validateImport,defaults:defaultState,setPortions:n=>guideServings=n};return;const initial=location.hash.slice(1);`);
 vm.runInContext(code,sandbox);sandbox.CookIllustrations=sandbox.window.CookIllustrations;
}
const a=sandbox.window.testApi,b=sandbox.window.CookBreakfast;
assert.equal(a.recipes.filter(r=>r.mealType==='Breakfast').length,24);
assert.equal(new Set(a.recipes.map(r=>r.id)).size,a.recipes.length);
const ids=['breakfast-full-english','breakfast-bacon-sandwich','breakfast-sausage-bap','breakfast-bacon-egg-muffin','breakfast-sausage-egg-muffin','breakfast-veggie-cooked'];
for(const id of ids){
 const r=a.resolve(id);
 for(const method of ['oven','air']){
 const v=b.changed(r,'method',method);assert(v);assert.equal(v.breakfast.method,method);
 assert(!v.steps.some(s=>s.includes(method==='air'?'25–30 minutes, turning':'Cook at 180°C for about 10–15')));
 for(const t of v.beginnerTasks)for(const key of t.uses)assert(v.ingredients.some(i=>i[0]===key),id+': '+key);
 for(let n=0;n<v.beginnerTasks.length;n++)assert(a.render(v,n).includes(v.beginnerTasks[n].title));
 }
}
for(let sausages=0;sausages<=4;sausages++)for(let bacon=0;bacon<=4;bacon++)for(let eggs=0;eggs<=4;eggs++){
 const r=a.resolve(`breakfast-full-english~${sausages}~${bacon}~${eggs}~air`);assert(r);
 for(const [id,n] of [['pork-sausages',sausages],['back-bacon',bacon],['eggs',eggs]])assert.equal(r.ingredients.find(i=>i[0]===id)?.[2]||0,n*4);
 for(const t of r.beginnerTasks)for(const id of t.uses)assert(r.ingredients.some(i=>i[0]===id));
}
for(const id of ['breakfast-full-english~9~2~1~air','breakfast-full-english~2~2~1~pressure','breakfast-bacon-sandwich~1~2~0~air','breakfast-bacon-sandwich~0~0~0~air','breakfast-steel-cut-oats~air','breakfast-full-english~2~2~1~air~junk'])assert(!a.resolve(id),id);
const first='breakfast-full-english~3~1~2~air',second='breakfast-full-english~1~0~1~oven';
a.getState().plan={Monday:{id:first,servings:2},Tuesday:{id:second,servings:4}};a.getState().cooked={};
const shop=a.shop();
assert.equal(shop.find(i=>i.id==='pork-sausages').qty,10);
assert.equal(shop.find(i=>i.id==='back-bacon').qty,2);
assert.equal(shop.find(i=>i.id==='eggs').qty,8);
const backup=a.validate({...a.defaults(),version:1,plan:a.getState().plan});assert.equal(backup.plan.Monday.id,first);assert.equal(backup.plan.Tuesday.id,second);
a.show(first,'Monday');assert(elements['modal-root'].innerHTML.includes('For 2 people: 6 sausages, 2 bacon rashers, 4 eggs'));
// Real change handler must change only this plan entry and preserve the servings.
listeners.change({target:{dataset:{breakfastChoice:'bacon'},value:'0'}});
assert.equal(a.getState().plan.Monday.id,'breakfast-full-english~3~0~2~air');assert.equal(a.getState().plan.Monday.servings,2);assert.equal(a.getState().plan.Tuesday.id,second);
assert(!a.shop().some(i=>i.id==='back-bacon'));
for(const method of ['hob','pressure']){
 const r=a.resolve('breakfast-steel-cut-oats~'+method);assert(r.fixedBatch);assert.equal(r.servings,4);assert.equal(r.ingredients.find(i=>i[0]==='water')[2],720);
 assert.equal(r.steps.some(s=>s.includes('High Pressure for 12 minutes')),method==='pressure');
 if(method==='pressure')assert(r.steps.some(s=>s.includes('Do not quick-release')));
}
for(const r of a.recipes.filter(r=>r.id.startsWith('breakfast-'))){
 assert(r.beginnerTasks.length);for(const t of r.beginnerTasks){assert(t.check&&t.instructions&&t.title);for(const id of t.uses)assert(r.ingredients.some(i=>i[0]===id),r.id+': '+id);}
}
console.log('PASS: 13 new breakfasts; 125 quantity combinations; method-specific steps; zero omissions; real shopping totals; backup restore; isolated planned changes; fixed pressure-cooker batch.');
