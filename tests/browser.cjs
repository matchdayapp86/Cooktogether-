// Run with a localhost static server: node tests/browser.cjs [base URL]
// Playwright must be installed in the environment. No production test hooks are added.
const {chromium} = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = (process.argv[2] || 'http://127.0.0.1:8000').replace(/\/$/,'');
const artifacts = process.env.COOK_TEST_ARTIFACTS || '/tmp/cooktogether-tests';
fs.mkdirSync(artifacts,{recursive:true});
const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
// Instrument a browser-only response to inspect exhaustive data and state, while
// the interaction checks below still use the actual buttons and event handlers.
const hooks=`window.cookTest={
 recipes:RECIPES,prepNoteForStart,renderBeginnerTask,categoryMatch,schoolLessons:COOKING_SCHOOL_LESSONS,
 getState:()=>state,getTimers:()=>beginnerTimers,getProgress:()=>guideProgress(),
 expireTimers:()=>{beginnerTimers.forEach(t=>t.deadline=Date.now()-1000);tickBeginnerTimers();},
 open:(id,index)=>{openCookAlong(id);guideProgress().step=index+1;save();renderCookAlong();},
 renderAll:()=>{guideServings=4;return RECIPES.flatMap(r=>guideTasks(r).map((t,i)=>({recipe:r.id,index:i,html:renderBeginnerTask(r,i),keys:CookIllustrations.select(t.instructions,{recipeId:r.id,taskIndex:i,skills:t.skills})})));}
};`;
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',headless:true,args:['--no-sandbox']});
 try {
 const context=await browser.newContext({viewport:{width:390,height:844}});
 const page=await context.newPage(); page.setDefaultTimeout(7000); const errors=[]; const broken=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)broken.push(r.status()+' '+r.url());});
 await page.route(base+'/',route=>route.fulfill({contentType:'text/html',body:html.replace('// Single-file demo intentionally',hooks+'\n// Single-file demo intentionally')}));
 await page.goto(base+'/');
 assert.equal(await page.locator('.beginner-home-choice').count(),3);
 const rendered=await page.evaluate(()=>cookTest.renderAll());
 assert(rendered.length>1000);
 for(const t of rendered){
   assert(!t.html.includes('undefined'),t.recipe+' '+t.index);
   for(const key of t.keys)assert(fs.existsSync(path.join(__dirname,'../assets/techniques',key+'.svg')));
 }
 const prep=await page.evaluate(()=>cookTest.recipes.flatMap(r=>r.ingredients.map(i=>({recipe:r.id,ingredient:i[1],note:cookTest.prepNoteForStart(r,i),keys:CookIllustrations.select(cookTest.prepNoteForStart(r,i),{ingredient:i[1].toLowerCase()})}))));
 for(const row of prep.filter(r=>/onion/i.test(r.ingredient))){
  assert(row.keys.length>0,'Missing onion action: '+JSON.stringify(row));
  assert(/root/.test(row.note),'Missing root instruction: '+row.recipe);
 }
 fs.writeFileSync(path.join(artifacts,'illustration-audit.json'),JSON.stringify({tasks:rendered.map(({html,...t})=>t),prep},null,2));
 console.log(`Rendered ${rendered.length} cooking tasks; checked ${prep.length} prep notes, including ${prep.filter(r=>/onion/i.test(r.ingredient)).length} onions.`);
 // Normal recipe/portion/guide interaction.
 await page.locator('[data-action="go-recipes"]').first().click();
 await page.locator('#recipe-search').fill('shepherd');
 await page.locator('[data-action="recipe"][data-id="shepherds-pie"]').first().click();
 await page.locator('#recipe-view-portions').selectOption('2');
 await page.locator('[data-action="guide-start"]').click();
 assert((await page.locator('.guide-meta').innerText()).includes('2 portions'));
 const onion=page.locator('.beginner-ready-item').filter({hasText:'Onion'}).first();
 assert((await onion.innerText()).includes('flat-side down'));
 await onion.locator('input').check();
 const prepButton=onion.locator('[data-illustration="dice"]');await prepButton.click();
 assert(await page.locator('#illustration-dialog').evaluate(d=>d.open));
 await page.keyboard.press('Tab');
 assert(await page.evaluate(()=>document.getElementById('illustration-dialog').contains(document.activeElement)));
 await page.keyboard.press('Escape');
 assert(!await page.locator('#illustration-dialog').evaluate(d=>d.open));
 assert(await prepButton.evaluate(b=>b===document.activeElement));
 assert(await onion.locator('input').isChecked());
 await page.locator('[data-action="guide-next"]').click();
 for(let i=0;i<4;i++)await page.locator('[data-action="guide-next"]').click();
 assert((await page.locator('.beginner-task-heading h3').innerText()).includes('onion'));
 await page.locator('.beginner-task [data-illustration="dice"]').click();
 await page.locator('[data-close-illustration]').click();
 assert.equal(await page.evaluate(()=>cookTest.getProgress().step),5);
 await page.locator('[data-action="guide-prep"]').click();
 assert(await page.locator('[data-action="guide-resume-prep"]').first().isVisible());
 assert(await page.locator('.beginner-ready-item').filter({hasText:'Onion'}).first().locator('input').isChecked());
 await page.locator('[data-action="guide-resume-prep"]').first().click();
 assert.equal(await page.evaluate(()=>cookTest.getProgress().step),5);
 await page.reload();
 await page.locator('[data-action="recipe"][data-id="shepherds-pie"]').first().click();
 await page.locator('#recipe-view-portions').selectOption('2');
 await page.locator('[data-action="guide-start"]').click();
 assert.equal(await page.evaluate(()=>cookTest.getProgress().step),5);
 // Named timers, compact bar, expiry, extensions, and stop.
 await page.evaluate(()=>cookTest.open('shepherds-pie',3));
 await page.locator('[data-action="beginner-start-timer"]').first().click();
 assert.equal(await page.locator('.beginner-timer-bar').count(),1);
 assert.equal(await page.locator('#beginner-timer-details').count(),0);
 await page.locator('[data-action="beginner-toggle-timers"]').click();
 assert.equal(await page.locator('.beginner-running-timer').count(),1);
 const firstDeadline=await page.evaluate(()=>cookTest.getTimers()[0].deadline);
 await page.locator('[data-action="beginner-extend-timer"][data-minutes="2"]').click();
 assert.equal(await page.evaluate(()=>cookTest.getTimers()[0].deadline),firstDeadline+120000);
 await page.evaluate(()=>cookTest.expireTimers());
 assert((await page.locator('.beginner-timer-bar').innerText()).includes('Time to check'));
 await page.locator('[data-action="beginner-stop-timer"]').click();
 assert.equal(await page.locator('.beginner-timer-bar').count(),0);
 // Recipe favourites and weekly plan still feed shopping and pantry.
 await page.locator('[data-action="guide-close"]').click();
 await page.locator('[data-action="close-modal"]').click();
 await page.locator('#recipe-search').fill('shepherd');
 const favorite=page.locator('[data-action="favorite"][data-id="shepherds-pie"]');
 await favorite.click();
 assert((await page.evaluate(()=>cookTest.getState().favorites)).includes('shepherds-pie'));
 await page.locator('[data-action="recipe"][data-id="shepherds-pie"]').first().click();
 await page.locator('#meal-day').selectOption('Monday');
 await page.locator('#meal-portions').selectOption('2');
 await page.locator('[data-action="add-meal"]').click();
 assert.equal(await page.evaluate(()=>cookTest.getState().plan.Monday.servings),2);
 await page.locator('[data-page="shopping"]:visible').first().click();
 assert(await page.locator('.shopping-item').count()>0);
 const shoppingCount=await page.locator('.shopping-item').count();
 const buyKey=await page.locator('[data-action="tick-ingredient"]').first().getAttribute('data-key');
 const stockBefore=await page.evaluate(key=>cookTest.getState().inventory[key]?.qty||0,buyKey);
 await page.locator('[data-action="tick-ingredient"]').first().click();
 assert(await page.evaluate(key=>cookTest.getState().purchased.some(p=>p.key===key),buyKey));
 await page.locator('[data-action="purchased-to-pantry"]').first().click();
 assert(await page.evaluate(({key,before})=>(cookTest.getState().inventory[key]?.qty||0)>before,{key:buyKey,before:stockBefore}));
 assert(await page.evaluate(()=>Object.keys(cookTest.getState().inventory).length)>0);
 assert((await page.locator('.shopping-item').count())>=shoppingCount-1);
 await page.locator('[data-page="pantry"]:visible').first().click();
 assert(await page.locator('.pantry-stock-row').count()>0);
 console.log('Portions, prep checkboxes, zoom/focus/Escape, saved progress, prep review, timers, planning, shopping and pantry passed.');
 // Every screen and a four-illustration task at phone, tablet and desktop widths.
 for(const width of [320,360,390,768,1280]){
   await page.setViewportSize({width,height:844});
   for(const screen of ['home','recipes','school','planner','shopping','pantry','household','settings']){
     await page.goto(base+'/#'+screen);
     assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),screen+' overflow at '+width);
   }
   await page.evaluate(()=>cookTest.open('beef-pepper-skillet',2));
   assert.equal(await page.locator('.beginner-task [data-illustration]').count(),4);
   assert(await page.locator('.guide-shell').evaluate(e=>e.scrollWidth<=e.clientWidth+1),'guide overflow at '+width);
   assert(await page.locator('.guide-scroller').evaluate(e=>e.scrollWidth<=e.clientWidth+1),'scroller overflow at '+width);
   for(const box of await page.locator('.beginner-task .action-illustration').evaluateAll(es=>es.map(e=>({width:e.offsetWidth,height:e.offsetHeight}))))assert(box.width<=132&&box.height<=120,'preview too large');
   await page.screenshot({path:path.join(artifacts,'task-'+width+'.png'),fullPage:true});
   await page.locator('[data-illustration]').first().click();
   assert(await page.locator('#illustration-dialog').evaluate(e=>e.scrollWidth<=e.clientWidth+1),'zoom overflow at '+width);
   await page.screenshot({path:path.join(artifacts,'zoom-'+width+'.png')});
   await page.keyboard.press('Escape');
   await page.locator('[data-action="guide-close"]').click();
   await page.locator('[data-action="close-modal"]').click();
 }
 // School category and search include all new lessons; same asset as task and prep.
 await page.goto(base+'/#school');
 const lessonCount=await page.evaluate(()=>cookTest.schoolLessons.length);
 assert.equal(await page.locator('.school-lesson').count(),lessonCount);
 await page.locator('#school-search').fill('spring onion');
 assert.equal(await page.locator('.school-lesson').count(),1);
 await page.locator('.school-lesson>summary').click();
 assert.equal(await page.locator('.school-lesson [data-illustration="spring-onion"]').count(),1);
 await page.locator('.school-lesson [data-illustration]').click();
 assert.equal(await page.locator('#illustration-title').innerText(),'Slice spring onions');
 await page.keyboard.press('Escape');
 await page.locator('#school-search').fill('');
 await page.locator('[data-action="school-filter"][data-filter="Knife & prep skills"]').click();
 assert.equal(await page.locator('.school-lesson').count(),12);
 const vegetarian=await page.evaluate(()=>cookTest.recipes.filter(r=>cookTest.categoryMatch(r,'Vegetarian')).map(r=>r.mealType));
 assert(!vegetarian.includes('Bakery'));
 // Decode every authored asset in the actual browser.
 const images=await page.evaluate(async()=>{
  return await Promise.all(Object.keys(CookIllustrations.catalog).map(async key=>{const image=new Image();image.src='assets/techniques/'+key+'.svg';try{await image.decode();return {key,ok:image.naturalWidth>0};}catch{return {key,ok:false};}}));
 });
 assert(images.every(i=>i.ok),'SVG decode failed');
 assert.deepEqual(errors,[]);assert.deepEqual(broken,[]);
 console.log(`All ${lessonCount} School lessons, search/category filters, 5 viewport widths, 31 image decodes, and vegetarian filter passed. No page errors or failed requests.`);
 console.log('Screenshots and full mapping audit: '+artifacts);
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
