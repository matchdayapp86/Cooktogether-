const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const sandbox = {window: {}, document: {addEventListener(){}}};
vm.createContext(sandbox);
for (const name of ['assets/techniques/catalog.js','assets/techniques/catalog-extra.js','illustration-ui.js','illustration-action-matching.js']) vm.runInContext(fs.readFileSync(path.join(root,name),'utf8'),sandbox);
const {select,catalog,render,imageSrc} = sandbox.window.CookIllustrations;
const cases = [
 ['Peel and finely dice the onion.',['dice']],
 ['Dice onion and season with pepper.',['dice']],
 ['Slice tomatoes and add onion.',['tomato-slice']],
 ['Wash potatoes and cut carrots.',[]],
 ['Finely dice half the red onion.',['dice']],
 ['Grate or finely mince the red onion.',[]],
 ['Slice peppers and onion.',['slice-onion','pepper-strips']],
 ['Slice onions into wedges and courgette into thick half-moons.',['onion-wedges']],
 ['Quarter red onions and add them to the tray.',['onion-wedges']],
 ['Slice cucumber into thin ribbons and spring onions into rings.',['spring-onion','cucumber-ribbons']],
 ['Turn to medium; soften diced onion and pepper for 6–8 minutes.',['soften']],
 ['Add finely chopped onion and carrots to the pan.',[]],
 ['Mix beef, finely diced onion and egg briefly.',[]],
 ['Mix lamb with the diced onion, crushed garlic and chopped mint.',[]],
 ['Add crushed garlic, chilli powder and tomato purée.',[]],
 ['Peel and crush the garlic.',['garlic']],
 ['Finely chop garlic.',['garlic-chop']],
 ['Deseed and dice the peppers.',['pepper-dice']],
 ['Drain and chop jarred roasted peppers into 1cm pieces.',[]],
 ['Halve the peppers and deseed.',['pepper-prep']],
 ['Cook rice noodles according to the pack and drain.',['noodles','drain']],
 ['Cook rice following its packet instructions.',['rice']],
 ['Stir risotto rice into the softened onion.',[]],
 ['Add rice to the sauce and stock; cover.',[]],
 ['Add the drained pasta and gently toss so every piece is covered.',[]],
 ['Add about 4 tablespoons reserved pasta water, mixing until smooth.',[]],
 ['Cook pasta for 2 minutes less than its pack time.',['pasta']],
 ['Cook spaghetti in salted water and save half a mug of cooking water.',['pasta']],
 ['Peel enough bananas; mash with a fork.',[]],
 ['Mash chickpeas coarsely with cumin.',[]],
 ['Let mash cool until comfortable to handle.',[]],
 ['Taste and serve over mash.',[]],
 ['Drain well, mash with butter and keep warm.',['mash']],
 ['Drain and chop jarred roasted peppers.',[]],
 ['Fry mushrooms until their liquid evaporates and edges brown.',['mushrooms']],
 ['While they cook, wash and deseed the peppers.',['pepper-prep']],
 ['Uncover and cook for 5 minutes more until peppers are tender.',[]],
 ['Make a well, add eggs and a splash of milk; gradually whisk in the remaining milk.',['whisk']],
 ['Add milk gradually, whisking smooth after each addition.',[]], // explicit recipe continuation
 ['Add spinach and stir until it wilts.',['spinach']],
 ['Preheat the oven to 200°C fan.',[]],
 ['Bake for 20 minutes until golden.',['roast']],
 ['Use a clean probe to check the centre reaches 75°C for 30 seconds.',['probe']],
 ['Fold flour into the mixture.',['fold']],
 ['Fold the tortilla over the filling.',[]],
 ['Knead the dough for 8 minutes.',['knead']],
 ['Do not knead soda bread.',[]]
];
assert.deepEqual([...select('Turn the frying-pan heat down to medium. Add the onion and carrots to the pan used for the lamb. Cook for 6–8 minutes, stirring across the base, until the onion softens.',{recipeId:'shepherds-pie',taskIndex:9})],['soften']);
for (const [text, expected] of cases) assert.deepEqual([...select(text)].sort(),expected.sort(),text);
for (const [ingredient,note,key] of [
 ['onion','Peel and dice finely.','dice'],
 ['onion','Peel and slice very thinly.','slice-onion'],
 ['red onion','Peel and cut into eight wedges.','onion-wedges'],
 ['spring onions','Wash, trim roots and slice into rings.','spring-onion'],
 ['garlic','Peel and finely chop.','garlic-chop']
]) assert(select(note,{ingredient}).includes(key),ingredient+': '+note);
for (const [key,info] of Object.entries(catalog)) assert.equal(info.steps.length,3,key);
const approved=Object.keys(catalog).filter(key=>imageSrc(key));
assert.equal(approved.length,53,'all approved illustration types available');
for(const key of approved){
 const src=imageSrc(key);
 assert(src && src.endsWith('.webp'),key+' approved WebP file');
 const data=fs.readFileSync(path.join(root,src));
 assert.equal(data.subarray(0,4).toString(),'RIFF',key+' RIFF header');
 assert.equal(data.subarray(8,12).toString(),'WEBP',key+' WEBP header');
 assert(render([key]).includes('.webp'),key+' card present');
}
assert.equal(render(['roux','pasta','mushrooms']),'','legacy diagrams must not render');
for(const [instruction,ctx,key] of [
 ['Slice the carrots into rounds.',{},'carrot-slice'],
 ['Slice mushrooms into even pieces.',{},'mushroom-slice'],
 ['Cut the raw chicken breast into even cubes.',{},'chicken-cube'],
 ['Cut beef into thin strips across the grain.',{},'beef-strips'],
 ['Cut potatoes into wedges.',{},'potato-wedges'],
 ['Cut broccoli into small florets.',{},'broccoli-florets'],
 ['Dice the peppers into cubes.',{},'pepper-dice'],
 ['Crush the garlic clove.',{},'garlic']
]) assert(select(instruction,ctx).includes(key),instruction);
assert(!select('Add cooked chicken cubes to the pan.').includes('chicken-cube'));
assert(!select('Add sliced carrots and chopped mushrooms to the pan.').includes('carrot-slice'));

const additional=[
 ['Dice carrots into small cubes','carrot-dice'],['Cut carrot into batons','carrot-batons'],['Peel the carrot','peel-carrot'],
 ['Grate fresh ginger','ginger-grate'],['Chop fresh parsley','herbs-chop'],['Slice leeks','leeks-prep'],
 ['Slice potatoes into rounds','potato-slices'],['Cut aubergine into cubes','aubergine-cube'],
 ['Drain and rinse canned beans','beans-drain-rinse'],['Cube butternut squash','butternut-squash'],
 ['Cut cauliflower into florets','cauliflower-florets'],['Slice chicken breast into strips','chicken-strips'],
 ['Slice courgette into half-moons','courgette-half-moons'],['Slice halloumi','halloumi-slice'],
 ['Cube firm tofu','tofu-cube'],['Dice tomatoes','tomato-dice'],['Slice tomatoes into rounds','tomato-slice'],
 ['Cut tomatoes into wedges','tomato-wedges'],['Slice apples','apple-slice'],['Prepare avocado','avocado-prep'],
 ['Slice banana','banana-slice'],['Trim celery','celery-prep'],['Halve cherry tomatoes','cherry-tomatoes-halved'],
 ['Shred cooked chicken','chicken-shred-cooked'],['Dice courgette','courgette-dice'],['Dice cucumber','cucumber-dice'],
 ['Make cucumber ribbons','cucumber-ribbons'],['Shred cabbage into thin strips','leafy-greens-shred'],
 ['Dice apple','apple-dice'],['Peel the hard-boiled egg','boiled-egg-peel'],
 ['Cream butter and sugar','cream-butter-sugar'],['Quarter cucumber','cucumber-quarter'],
 ['Rub butter into flour','rub-butter-into-flour'],['Line the baking tin with parchment','line-baking-tin'],
 ['Dice mushrooms','dice-mushrooms'],['Cube feta','cube-paneer-or-feta']
];
for(const [action,key] of additional)assert(select(action).includes(key),action+': '+key);
for(const [action,key] of [
 ['Add diced tomatoes and grated cheese','tomato-dice'],
 ['Add pre-cut chicken strips to the pan','chicken-strips'],
 ['Add chopped herbs and sliced onions','herbs-chop'],
 ['Grate fresh ginger','grate'],
 ['Grate the red onion','grate'],
 ['Slice silken tofu','tofu-cube'],
 ['Add sliced carrots to the pan','carrot-slice']
])assert(!select(action).includes(key),'wrong artwork on '+action);
assert.equal(imageSrc('slice-carrot-rounds'),null,'duplicate carrot illustration not displayed');
console.log(cases.length+' base cases, '+additional.length+' new matches, 7 false-positive guards and '+approved.length+' WebP guides passed.');

