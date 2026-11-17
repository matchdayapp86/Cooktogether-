/* Optional accompaniments selected after the 116-recipe audit, 17 November 2026.
 * These are ORIGINAL development sauce directions, paired against published methods.
 * None has been kitchen-tested. Baseline recipes, their cook times and ingredients are untouched.
 * An existing sauce/dressing/gravy is normally a reason NOT to add another.
 */
(() => {
 'use strict';
 const recipes=window.COOK_RECIPES;
 if(!Array.isArray(recipes))return;
 const reviewed=[];
 function add(id,title,beforeTitle,ingredients,instructions,check,note,reference,tools=['Small bowl','Spoon']) {
   const r=recipes.find(item=>item.id===id);
   if(!r||r.optionalSauce)throw Error('Sauce mapping missing or duplicated: '+id);
   if(!r.beginnerTasks?.some(task=>task.title===beforeTitle))throw Error('Sauce step anchor changed: '+id+' / '+beforeTitle);
   r.optionalSauce={
     title:'Optional '+title,
     status:'Suggested accompaniment — NOT yet kitchen-tested',
     note,reference,beforeTitle,
     ingredients:ingredients.map(([name,amount,unit,aisle],index)=>['extra-'+id+'-'+index,name,amount,unit,aisle]),
     task:{title:'Optional: make '+title,instructions,check,
       uses:[],skills:[],tools,sourceStage:3,optionalSauce:true}
   };
   reviewed.push(id);
 }
 const fresh='Fresh produce',cup='Cupboard',chill='Chilled',frozen='Frozen';
 add('dinner-sausage-veg-traybake','light mustard gravy',
   'Serve only once the sausages are fully cooked',
   [['Reduced-salt chicken or vegetable stock',250,'ml',cup],['Dijon mustard',1,'tsp',cup],['Cornflour',2,'tsp',cup]],
   'While the traybake finishes, pour 250ml reduced-salt chicken or vegetable stock into a small saucepan, then whisk in 1 tsp Dijon mustard. Bring to a gentle simmer. Separately mix 2 tsp cornflour with 2 tbsp COLD water until smooth. Add the cornflour mixture a little at a time while stirring; simmer for 2 minutes until lightly thickened. Taste before adding salt. Keep the gravy separate from the roasting tray; serve alongside the fully cooked sausages and vegetables.',
   'The gravy is hot and pourable, without lumps. The sausages have been checked for doneness separately.',
   'A separate gravy, so the potatoes and sausages can roast and colour properly.',
   'https://www.bbcgoodfood.com/recipes/english-mustard-sauce',['Small saucepan','Whisk','Small cup']);
 add('greek-lamb-traybake','cucumber and mint yoghurt',
   'Serve straight from the tray',
   [['Greek yoghurt',200,'g',chill],['Cucumber',0.5,'whole',fresh],['Lemon juice',1,'tbsp',fresh],['Dried mint',0.5,'tsp',cup]],
   'While the lamb roasts, wash half a cucumber, grate it coarsely, then squeeze the grated cucumber in clean kitchen paper to remove excess water. Stir it into 200g Greek yoghurt with 1 tbsp lemon juice and 0.5 tsp dried mint. Taste and season lightly. Keep covered in the fridge until serving. Spoon onto the plate only after the lamb is safely cooked.',
   'The sauce is cool and thick enough to dollop, not watery. Keep the yoghurt refrigerated until needed.',
   'The cool yoghurt contrasts with the lemon, oregano and garlic roasted lamb; this is not a gravy.',
   'https://www.themediterraneandish.com/tzatziki-sauce-recipe/comment-page-1/',['Grater','Small bowl','Spoon','Kitchen paper']);
 add('beef-sesame-rice','ginger and sesame drizzle',
   'Serve over hot rice with spring onion and sesame seeds',
   [['Reduced-salt soy sauce (extra)',1,'tbsp',cup],['Honey (extra)',1,'tsp',cup],['Sesame oil (extra)',0.5,'tsp',cup],['Cornflour',1,'tsp',cup]],
   'In a small saucepan whisk 1 tbsp reduced-salt soy sauce, 1 tsp honey, 0.5 tsp sesame oil and 120ml water. Bring just to a simmer. Mix 1 tsp cornflour with 2 tsp COLD water in a cup, then stir in gradually. Simmer for 1–2 minutes until lightly glossy and pourable. Spoon a little over each bowl, tasting before adding more because the beef already contains soy sauce.',
   'Light and pourable, not a thick salty coating. Use only as much as needed.',
   'A little extra moisture for the rice bowls without increasing the beef frying liquid.',
   'https://www.justonecookbook.com/yakiniku-sauce/',['Small saucepan','Whisk','Small cup']);
 add('beef-pepper-skillet','teriyaki-lime noodle sauce',
   'Divide into four bowls and serve straight away',
   [['Teriyaki sauce (extra)',2,'tbsp',cup],['Cornflour',1,'tsp',cup],['Lime juice (extra)',1,'tbsp',fresh]],
   'While the noodles finish, mix 2 tbsp shop-bought teriyaki sauce with 150ml water in a small saucepan. Heat to a gentle simmer. Stir 1 tsp cornflour into 2 tsp COLD water, add gradually and simmer for 1–2 minutes until thinly glossy. Take off the heat and stir in 1 tbsp lime juice. Taste a little with the already-seasoned noodles before adding more: the original recipe contains soy sauce, so too much extra teriyaki can make it salty. Spoon over at the table or toss in just before serving.',
   'Sauce is lightly thickened and not overly salty. Beef and noodles are cooked completely before serving.',
   'Based on the actual cooking feedback that these garlic noodles benefit from more sauce, but the original seasoning remains unchanged.',
   'https://www.justonecookbook.com/teriyaki-sauce/',['Small saucepan','Whisk','Small cup']);
 add('pork-schnitzel-potatoes','lemon mustard yoghurt dip',
   'Serve schnitzel with potatoes, peas and lemon',
   [['Plain yoghurt',180,'g',chill],['Dijon mustard',1,'tsp',cup],['Lemon juice',1,'tbsp',fresh]],
   'While the pork bakes, put 180g plain yoghurt in a clean bowl. Stir in 1 tsp Dijon mustard and 1 tbsp lemon juice. Taste and add another small squeeze of lemon only if needed. Keep chilled until serving. Offer on the side, not over the schnitzel, so its breadcrumb coating remains crisp.',
   'Smooth and lightly tangy. Do not use the bowl or utensils from raw pork or the egg coating.',
   'A cool dipping sauce complements the lemon garnish without softening the crisp pork.',
   'https://www.recipetineats.com/lemon-yogurt-sauce/');
 add('tuna-pea-fishcakes','quick tartare yoghurt sauce',
   'Toss leaves and tomatoes with remaining oil and serve alongside',
   [['Plain yoghurt',120,'g',chill],['Mayonnaise',2,'tbsp',chill],['Gherkins',2,'whole',cup],['Lemon juice',1,'tsp',fresh]],
   'While the fishcakes are heating, finely chop 2 small gherkins. Mix with 120g plain yoghurt, 2 tbsp mayonnaise and 1 tsp lemon juice in a clean bowl. Taste and add a little pepper if wanted. Keep refrigerated until the fishcakes are hot and ready; serve as a dip so the coating stays crisp.',
   'The gherkins are finely chopped and the sauce is cold. Fishcakes are piping hot through the centre.',
   'A lighter variation of classic tartare sauce for fishcakes.',
   'https://www.bbcgoodfood.com/recipes/fish-cakes-tartare-sauce');
 add('mushroom-spinach-wellingtons','vegetarian mushroom gravy',
   'Rest 5 minutes before serving',
   [['Chestnut mushrooms (extra)',150,'g',fresh],['Vegetable stock',250,'ml',cup],['Cornflour',2,'tsp',cup],['Olive oil (extra)',1,'tsp',cup]],
   'While the wellingtons bake, wipe 150g chestnut mushrooms clean and slice thinly. Heat 1 tsp olive oil in a small pan; fry mushrooms over medium heat for 4–5 minutes until browned. Add 250ml vegetable stock and simmer. In a cup mix 2 tsp cornflour with 2 tbsp COLD water, then pour into the bubbling stock a little at a time, stirring until glossy and pourable after 1–2 minutes. Taste, keeping salt light. Serve in a jug alongside the rested wellingtons to keep the pastry crisp.',
   'Gravy is glossy and mushroom pieces are cooked through; the pastry remains crisp.',
   'A separate savoury gravy for a dry pastry dinner. Use vegetarian-labelled stock.',
   'https://www.bbcgoodfood.com/recipes/next-level-vegan-wellington-with-gravy',['Small frying pan','Knife and board','Small cup','Spoon']);
 add('tofu-vegetable-fried-rice','sesame and lime drizzle',
   'Serve immediately',
   [['Reduced-salt soy sauce (extra)',1,'tbsp',cup],['Lime juice',1,'tbsp',fresh],['Sesame oil (extra)',0.5,'tsp',cup],['Caster sugar',1,'tsp',cup]],
   'In a clean bowl stir together 1 tbsp reduced-salt soy sauce, 1 tbsp lime juice, 0.5 tsp sesame oil, 1 tsp caster sugar and 2 tbsp cold water until the sugar dissolves. Taste a drop with the rice before adding it, as the original rice already has soy sauce. Drizzle a little onto each bowl only once the rice is cooked, steaming hot and ready to serve. Do not leave cooked rice standing while making the dressing.',
   'The dressing tastes balanced and the cooked rice is served promptly.',
   'An optional finishing drizzle, not an extra stir-frying step or a replacement for the original soy seasoning.',
   'https://www.justonecookbook.com/yakiniku-sauce/');
 add('breakfast-avocado-burritos','zesty yoghurt drizzle',
   'Fold in the sides, roll up and serve immediately',
   [['Plain yoghurt',120,'g',chill],['Lime juice',2,'tsp',fresh],['Smoked paprika',0.25,'tsp',cup]],
   'Before filling the tortillas, stir 120g plain yoghurt with 2 tsp lime juice and 0.25 tsp smoked paprika in a clean bowl. Taste and keep chilled until ready. Add a spoonful to each burrito just before folding it; do not overfill because the wraps may leak.',
   'The drizzle is tangy and spoonable; the scrambled eggs are fully set.',
   'Adds a cooling contrast to chipotle and avocado without altering the egg cooking method.',
   'https://www.bbcgoodfood.com/recipes/kebab-shop-yogurt-garlic-sauce');
 add('breakfast-pepper-potato-hash','smoky lemon yoghurt',
   'Divide between plates',
   [['Greek yoghurt',160,'g',chill],['Lemon juice',1,'tbsp',fresh],['Smoked paprika (extra)',0.25,'tsp',cup]],
   'While the eggs set in the oven, mix 160g Greek yoghurt, 1 tbsp lemon juice and 0.25 tsp smoked paprika in a small clean bowl. Keep chilled. Spoon a little over the plated potato hash after the eggs are fully cooked.',
   'Cool and lightly smoky; the eggs are cooked to the doneness required by the recipe.',
   'A cool sauce to contrast with smoky crisp potatoes and feta.',
   'https://www.recipetineats.com/lemon-yogurt-sauce/');
 add('breakfast-potato-spinach-frittata','quick herby tomato salsa',
   'Rest 3 minutes',
   [['Cherry tomatoes',200,'g',fresh],['Lemon juice',1,'tsp',fresh],['Olive oil (extra)',1,'tsp',cup],['Dried oregano',0.5,'tsp',cup]],
   'While the frittata bakes, wash and finely dice 200g cherry tomatoes. Stir with 1 tsp lemon juice, 1 tsp olive oil and 0.5 tsp dried oregano. Taste, then let stand in a clean bowl until the fully set frittata is ready. Spoon alongside rather than onto the hot pan.',
   'Tomatoes are diced, salsa tastes fresh, and the frittata has no runny egg in the centre.',
   'Fresh salsa brightens the rich cheese and potatoes without making the egg mixture watery.',
   'https://www.jamieoliver.com/recipes/vegetables/classic-tomato-salsa/',['Stable board','Sharp knife','Small bowl']);
 add('lunch-lemon-chickpea-couscous','tahini and lemon drizzle',
   'Divide between four bowls and serve promptly',
   [['Tahini',2,'tbsp',cup],['Lemon juice (extra)',1,'tbsp',fresh],['Ground cumin',0.25,'tsp',cup]],
   'In a small clean bowl stir 2 tbsp tahini with 1 tbsp lemon juice and 0.25 tsp ground cumin. Add COLD water 1 tbsp at a time, stirring well after each addition, until you have a loose pourable dressing, about 2–3 tbsp water. Tahini can thicken before it loosens; keep stirring. Taste, then drizzle over the finished couscous. This is extra dressing, not a replacement for the lemon and oil already in the original recipe.',
   'Smooth and pourable with no lumps; do not add so much that the couscous becomes soggy.',
   'Optional nutty dressing for someone who wants a creamier couscous bowl.',
   'https://www.themediterraneandish.com/tahini-sauce-recipe-how-to-make-tahini/');
 add('breakfast-cinnamon-french-toast','warm berry compote',
   'Serve the toast with berries and a share of the maple syrup',
   [['Frozen mixed berries',200,'g',frozen],['Caster sugar',2,'tsp',cup]],
   'While the French toast cooks, put 200g frozen mixed berries, 2 tsp caster sugar and 2 tbsp water into a small saucepan. Heat gently, stirring every minute, for about 5–7 minutes until the berries are softened, bubbling and juicy. If it becomes too thick, add a splash of water. Spoon over the fully cooked French toast just before serving.',
   'The fruit sauce is hot and spoonable, and the toast is fully cooked.',
   'A warm fruit sauce instead of buying a separate syrup.',
   'https://www.bbcgoodfood.com/recipes/quick-summer-compote',['Small saucepan','Spoon']);
 add('bakery-apple-crumble','warm vanilla custard',
   'Rest for 10 minutes before dividing into six portions',
   [['Ready-made vanilla custard',500,'ml',chill]],
   'While the apple crumble rests, pour 500ml ready-made vanilla custard into a clean saucepan. Warm over LOW heat, stirring frequently, until steaming hot but not boiling, following the packet heating instructions. Remove from heat and spoon a little beside each serving of crumble. Alternatively, use chilled custard according to its label.',
   'Custard is heated according to the pack instructions and the crumble is ready to serve.',
   'A familiar serving option for warm apple crumble; buying ready-made custard keeps it beginner-friendly.',
   'https://www.bbcgoodfood.com/howto/guide/how-make-perfect-cake',['Small saucepan','Spoon']);
 // An already proposed but untested sauce is retained unchanged.
 const roast=recipes.find(r=>r.id==='chicken-roast');
 if(!roast?.optionalSauce)throw Error('Original roast sauce missing');
 roast.optionalSauce.beforeTitle='Rest chicken 3 minutes';
 window.COOK_SAUCE_AUDIT={total:recipes.length,added:reviewed.length,all:[roast.id,...reviewed],reviewedAt:'2026-11-17'};
})();
