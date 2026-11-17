/* CookTogether · optional accompaniments.
   Independently drafted, research-informed development additions: NOT kitchen-tested.
   Quantities are extras for 4 diners and are scaled in the UI. Original recipes/timings stay unchanged.
   sources are pairing references, NOT imported/copyrighted instructions. */
window.COOK_OPTIONAL_SAUCES = Object.freeze({
  "chicken-roast": {
    name:"Lemon, honey & mustard sauce", minutes:5, afterTask:10, timingCue:"Make this 5-minute sauce during the chicken's final glazing period, before resting and serving. Keep raw-chicken marinade out of the saucepan.",
    why:"The original honey glaze caramelises on the chicken; make a separate pourable sauce for the plate.",
    ingredients:[["Chicken stock (extra)",200,"ml"],["Dijon mustard (extra)",1,"tsp"],["Honey (extra)",1,"tsp"],["Lemon juice (extra)",10,"ml"],["Cornflour",1,"tsp"]],
    steps:[
      "Use a clean small saucepan and clean spoon. Add the measured chicken stock, Dijon mustard and honey. This is a NEW mixture: do not reuse any marinade or brush that touched raw chicken.",
      "Heat over medium heat until gently bubbling. Stir in the measured lemon juice and simmer for about 2 minutes, stirring occasionally.",
      "In a cup, mix the measured cornflour with about 2 teaspoons of COLD water until smooth. Stir into the bubbling sauce a little at a time; simmer for about 1 minute until glossy and lightly thickened.",
      "Taste with a CLEAN spoon. If you have fully cooked, unburnt roasting juices, you can add a spoonful. Serve the sauce separately over the cooked chicken and potatoes."
    ],
    check:"The sauce is smooth, lightly coats a spoon and has simmered after the cornflour was added. A little thinner is better than gluey.",
    safety:"Check stock ingredients for allergens. Mustard is an allergen. Never add uncooked chicken marinade to a ready-to-serve sauce.",
    sources:["https://www.bbcgoodfood.com/recipes/honey-mustard-sauce","https://www.bbcgoodfood.com/recipes/roast-chicken-roots-lemon-poppy-seed-sauce","https://www.recipetineats.com/honey-mustard-chicken/"]
  },
  "greek-lamb-traybake": {
    name:"Garlic, lemon & oregano yoghurt", minutes:3, afterTask:10, timingCue:"Make the yoghurt sauce in a clean bowl while the fully cooked lamb rests; do not combine with raw-lamb juices.",
    why:"A cool, tangy yoghurt sauce offsets the roasted lamb, garlic, oregano and potatoes.",
    ingredients:[["Plain Greek-style yoghurt",150,"g"],["Lemon juice (extra)",15,"ml"],["Garlic clove (extra)",1,"cloves"],["Dried oregano (extra)",0.5,"tsp"]],
    steps:[
      "Use a clean bowl and spoon. Peel the extra garlic clove and crush it finely using a garlic press or the side of a knife.",
      "Add the measured yoghurt, lemon juice, garlic and oregano. Stir until evenly combined.",
      "Taste with a clean spoon. Add a splash of cold water if you would prefer a looser sauce. Spoon alongside the fully cooked lamb, not into the hot roasting tray."
    ],
    check:"Creamy and spoonable with no large lumps of garlic.",
    safety:"Contains milk. Keep the yoghurt chilled until making the sauce; do not mix it with raw lamb marinade.",
    sources:["https://www.bbcgoodfood.com/recipes/garlic-yogurt","https://www.bbcgoodfood.com/recipes/greek-tzatziki","https://www.themediterraneandish.com/greek-chicken-souvlaki-recipe-tzatziki/"]
  },
  "dinner-sausage-veg-traybake": {
    name:"Quick onion gravy", minutes:15, afterTask:10, timingCue:"Start the 30–35 minute roasting timer now. Make onion gravy while sausages roast, then return to check doneness; turn sausages and vegetables halfway through.",
    why:"A mild savoury gravy suits roasted sausages, potatoes and peppers without softening them in the oven.",
    ingredients:[["Onion (extra)",1,"whole"],["Olive oil (extra)",1,"tbsp"],["Plain flour",1,"tbsp"],["Vegetable stock",250,"ml"]],
    steps:[
      "Peel the extra onion, halve it and slice into thin half-moons. Heat the measured olive oil in a small saucepan over medium-low heat.",
      "Add the onion and stir occasionally for 8–10 minutes until softened and lightly golden. Reduce the heat if it starts to burn.",
      "Sprinkle in the measured flour. Stir for 1 minute so no dry flour remains, then slowly add the measured stock while stirring to prevent lumps.",
      "Simmer gently for 3–4 minutes, stirring until the gravy has thickened. Taste with a clean spoon and serve beside the fully cooked sausages."
    ],
    check:"Onion is soft, gravy pours from a spoon and no raw flour taste remains.",
    safety:"Wheat in plain flour; check stock labels for allergens. Do not use uncooked sausage juices.",
    sources:["https://www.bbcgoodfood.com/recipes/sausages-quick-onion-gravy","https://www.bbcgoodfood.com/recipes/bangers-n-mash-with-onion-gravy","https://www.deliaonline.com/recipes/occasions/christmas/christmas-stuffings-and-sauces/onion-gravy"]
  },
  "pork-schnitzel-potatoes": {
    name:"Lemon & caper butter", minutes:3, afterTask:7, timingCue:"Make this butter sauce immediately before serving, after preparing the potatoes and peas, keeping the crispy coating intact.",
    why:"Sharp lemon and capers balance the crisp breadcrumb coating; offer it on the side to keep it crunchy.",
    ingredients:[["Unsalted butter (extra)",30,"g"],["Capers, drained",1,"tbsp"],["Lemon juice (extra)",15,"ml"]],
    steps:[
      "Drain the measured capers through a sieve. Melt the butter in a small saucepan over low heat; keep it moving so it does not scorch.",
      "Add the capers and gently bubble for about 1 minute. Remove the pan from the heat and stir in the lemon juice carefully because it may spit.",
      "Taste with a clean spoon. Spoon just a little over each cooked schnitzel, or serve in a jug to keep the breadcrumb crust crisp."
    ],
    check:"Butter is melted and glossy, with lemon flavour and capers throughout; not black or burnt.",
    safety:"Contains milk; check capers for added allergens. Sauce is for cooked pork only.",
    sources:["https://www.bbcgoodfood.com/recipes/pork-schnitzel-with-lemon-caper-butter"]
  },
  "tuna-pea-fishcakes": {
    name:"Easy lemon tartare-style sauce", minutes:4, afterTask:5, timingCue:"Make this cold sauce while shaped fishcakes chill, BEFORE handling raw egg to coat them. Keep the sauce refrigerated until serving.",
    why:"A cool lemony dip suits crisp fishcakes and brings moisture to the plate.",
    ingredients:[["Mayonnaise",60,"g"],["Gherkins",30,"g"],["Lemon juice",10,"ml"],["Dried dill",0.5,"tsp"]],
    steps:[
      "Drain the gherkins and finely dice them into pieces about the size of rice grains. Use a clean board and knife.",
      "Put the measured mayonnaise, chopped gherkins, lemon juice and dill into a clean bowl. Stir until mixed.",
      "Taste with a clean spoon and adjust with a few drops of lemon juice if wanted. Serve COLD in a separate dish alongside the hot fishcakes."
    ],
    check:"The gherkin is finely chopped and evenly mixed into a smooth sauce.",
    safety:"Mayonnaise commonly contains egg and sometimes mustard. Check the label. Keep chilled until serving.",
    sources:["https://www.bbcgoodfood.com/recipes/fish-cakes-tartare-sauce","https://www.bbcgoodfood.com/recipes/feelgood-fish-cakes","https://www.greatbritishchefs.com/recipes/homemade-tartare-sauce-recipe"]
  },
  "beef-burgers-wedges": {
    name:"Creamy burger sauce", minutes:3, afterTask:2, timingCue:"Make burger sauce with clean equipment before touching raw beef. Chill the sauce until assembling the cooked burgers.",
    why:"A tangy spread works with juicy burgers and crisp wedges instead of adding liquid to the frying pan.",
    ingredients:[["Mayonnaise",60,"g"],["Tomato ketchup (extra)",30,"g"],["American mustard",1,"tsp"],["Gherkins",25,"g"]],
    steps:[
      "Drain the measured gherkins and chop them very finely using a clean knife and board.",
      "Put the measured mayonnaise, ketchup and mustard in a clean bowl. Add the gherkins and stir until even.",
      "Use a clean spoon to spread a little inside each burger bun once the burgers are fully cooked, or serve separately as a dip for wedges."
    ],
    check:"Smooth, creamy and easy to spread with small pieces of gherkin.",
    safety:"Mayonnaise may contain egg and mustard; mustard is also an allergen. Refrigerate until serving.",
    sources:["https://www.bbcgoodfood.com/recipes/classic-burger-sauce","https://www.bbcgoodfood.com/recipes/burger-bowl"]
  },
  "mushroom-spinach-wellingtons": {
    name:"Vegetarian onion gravy", minutes:15, afterTask:12, timingCue:"Start the 25–30 minute baking timer now. Make vegetarian gravy while the wellingtons bake; then return to check and rest them.",
    why:"The pastry wellingtons are deliberately crisp; spoon rich gravy alongside rather than over the top.",
    ingredients:[["Onion",1,"whole"],["Olive oil (extra)",1,"tbsp"],["Plain flour",1,"tbsp"],["Vegetable stock (vegetarian)",300,"ml"]],
    steps:[
      "Peel the onion, halve it and slice thinly. Warm the measured oil in a saucepan over medium-low heat.",
      "Add onion and cook gently for 8–10 minutes, stirring often, until soft and golden.",
      "Add the flour and stir continuously for 1 minute. Gradually pour in the measured vegetarian stock while stirring so the gravy stays smooth.",
      "Simmer for 3–4 minutes until gently thickened. Taste with a clean spoon and serve beside the baked wellingtons, keeping the pastry crisp."
    ],
    check:"Soft onion in smooth, pourable gravy without floury lumps.",
    safety:"Contains wheat; check the vegetable stock is vegetarian and inspect its allergen label.",
    sources:["https://www.bbcgoodfood.com/recipes/next-level-vegan-wellington-with-gravy","https://www.bbcgoodfood.com/recipes/collection/gravy-recipes","https://www.greatbritishchefs.com/how-to-cook/how-to-make-vegetarian-gravy"]
  },
  "beef-pepper-skillet": {
    name:"Teriyaki & lime noodle sauce", minutes:4, afterTask:4, timingCue:"Make this sauce before removing beef from the fridge. Set it aside separately, and rewarm gently just before serving if needed.",
    why:"The beef and garlic noodles are lightly coated in the original method. A separate teriyaki-lime sauce gives an optional saucier finish without changing the stir-fry.",
    ingredients:[["Teriyaki sauce (extra)",2,"tbsp"],["Lime juice (extra)",15,"ml"],["Cornflour",1,"tsp"]],
    steps:[
      "In a clean small saucepan mix the measured teriyaki sauce with 150ml COLD water. Set it over medium heat and bring to a gentle simmer.",
      "In a cup stir the measured cornflour with 2 tsp COLD water until smooth. Stir gradually into the hot saucepan and simmer for 1–2 minutes, stirring until lightly glossy.",
      "Take the saucepan off the heat. Stir in the measured lime juice, then taste with a clean spoon. The original noodles already contain soy sauce: spoon a LITTLE sauce over first and only add more if needed.",
      "Serve separately or toss with the completely cooked beef and noodles just before plating. Do not pour extra sauce into the stir-fry while the beef is still cooking."
    ],
    check:"A thin, glossy, pourable sauce that is not excessively salty; the beef is cooked safely and served hot.",
    safety:"Teriyaki sauce commonly contains soy and wheat. Check the bottle for allergens and salt, and do not reuse any sauce that touched raw beef.",
    sources:["https://www.justonecookbook.com/teriyaki-sauce/","https://www.recipetineats.com/teriyaki-beef-stir-fry/"]
  },
  "beef-sesame-rice": {
    name:"Light ginger-sesame drizzle", minutes:4, afterTask:3, timingCue:"Mix this drizzle before starting the beef frying steps so you can serve the rice bowls promptly.",
    why:"A light drizzle gives the rice extra moisture without soaking the browned beef or masking its existing soy-honey glaze.",
    ingredients:[["Reduced-salt soy sauce (extra)",1,"tbsp"],["Honey (extra)",1,"tsp"],["Sesame oil (extra)",0.5,"tsp"],["Cornflour",1,"tsp"]],
    steps:[
      "In a small clean saucepan combine the measured soy sauce, honey, sesame oil and 120ml water. Bring to a very gentle simmer while stirring.",
      "Mix the measured cornflour with 2 tsp COLD water in a cup. Stir a little at a time into the saucepan; simmer gently for about 1 minute until lightly glossy.",
      "Taste with a CLEAN spoon. The beef is already seasoned with soy sauce, so add just one spoonful to each cooked rice bowl at first. Do not add salt without tasting."
    ],
    check:"Thin enough to drizzle rather than a thick or salty syrup. Beef is safely cooked before adding the sauce.",
    safety:"Contains soya and sesame; soy sauce may contain wheat. Check all labels and be careful of salt.",
    sources:["https://www.justonecookbook.com/yakiniku-sauce/","https://www.justonecookbook.com/teriyaki-sauce/"]
  },
  "breakfast-avocado-burritos": {
    name:"Lime & smoked paprika yoghurt", minutes:3, afterTask:1, timingCue:"Mix the yoghurt sauce before cooking eggs, keeping it chilled until you fill the burritos.",
    why:"Cooling citrus yoghurt works with chipotle eggs and avocado; serving it inside the wrap avoids a messy extra pan sauce.",
    ingredients:[["Plain yoghurt",120,"g"],["Lime juice",10,"ml"],["Smoked paprika",0.25,"tsp"]],
    steps:[
      "In a CLEAN bowl stir together the measured yoghurt, lime juice and smoked paprika until evenly mixed.",
      "Taste with a clean spoon; add a few drops more lime only if you prefer it sharper. Keep chilled until the burritos are being assembled.",
      "Add a small spoonful to the cooked eggs and avocado before folding the warm tortilla. Do not overfill or the burritos will leak."
    ],
    check:"The yoghurt is smooth and thick enough to spoon; the scrambled eggs are fully set.",
    safety:"Contains milk. Keep yoghurt refrigerated until use and use clean utensils.",
    sources:["https://www.bbcgoodfood.com/recipes/kebab-shop-yogurt-garlic-sauce"]
  },
  "breakfast-pepper-potato-hash": {
    name:"Smoky lemon yoghurt", minutes:3, afterTask:9, timingCue:"Start the 7–12 minute oven timer first, then make this yoghurt sauce while the eggs set. Return to check the eggs are cooked.",
    why:"A cool, lightly smoky spoonable sauce balances the golden potatoes, peppers, feta and eggs.",
    ingredients:[["Greek yoghurt",160,"g"],["Lemon juice",15,"ml"],["Smoked paprika (extra)",0.25,"tsp"]],
    steps:[
      "While the eggs finish setting, put the measured Greek yoghurt into a clean bowl.",
      "Add the lemon juice and smoked paprika and stir until smooth. Taste with a clean spoon, then keep chilled until the hash is plated.",
      "Add a little yoghurt to the side of each plate only when the egg whites are fully set and the recipe is safely cooked."
    ],
    check:"The sauce is cool, spoonable and lightly tangy; the eggs are done to the original recipe instructions.",
    safety:"Contains milk. Keep yoghurt chilled until serving. Check feta separately for allergens.",
    sources:["https://www.recipetineats.com/lemon-yogurt-sauce/"]
  },
  "breakfast-potato-spinach-frittata": {
    name:"Fresh herby tomato salsa", minutes:5, afterTask:7, timingCue:"Start the 12–18 minute baking timer first, then make salsa while the frittata bakes. Return to check the centre.",
    why:"A fresh chopped salsa adds brightness to rich cheese-and-potato frittata without making the eggs watery during cooking.",
    ingredients:[["Cherry tomatoes (extra)",200,"g"],["Lemon juice",5,"ml"],["Olive oil (extra)",1,"tsp"],["Dried oregano",0.5,"tsp"]],
    steps:[
      "Wash and dry the measured cherry tomatoes, remove any stalks, then cut them into small even pieces on a stable board.",
      "Mix the tomatoes in a clean bowl with the measured lemon juice, olive oil and oregano.",
      "Let stand for 2 minutes, then taste with a clean spoon. Spoon alongside slices of the fully set frittata instead of into the ovenproof pan."
    ],
    check:"Tomatoes are finely chopped and fresh; the frittata centre has no runny egg.",
    safety:"Wash fresh produce. Keep the salsa separate from raw egg and check that the frittata is fully cooked.",
    sources:["https://www.jamieoliver.com/recipes/vegetables/classic-tomato-salsa/"]
  },
  "lunch-lemon-chickpea-couscous": {
    name:"Creamy lemon tahini drizzle", minutes:4, afterTask:11, timingCue:"Mix the tahini drizzle after tossing the couscous, just before tasting and serving.",
    why:"A nutty pourable dressing complements lemon and chickpeas for people who want a creamier couscous bowl.",
    ingredients:[["Tahini",2,"tbsp"],["Lemon juice (extra)",15,"ml"],["Ground cumin",0.25,"tsp"]],
    steps:[
      "Spoon the measured tahini into a clean small bowl and add the lemon juice and cumin.",
      "Stir well, adding COLD water one tablespoon at a time. The tahini may thicken at first; continue stirring until smooth and pourable, normally after 2–3 tbsp water.",
      "Taste with a clean spoon. Spoon a little over the finished couscous just before serving; the original bowl already contains lemon and oil, so do not drench it."
    ],
    check:"A smooth, pourable drizzle, not a thick paste. Couscous remains fluffy rather than soggy.",
    safety:"Contains sesame. Check the tahini label for other allergens; handle cooked couscous using the original recipe storage guidance.",
    sources:["https://www.themediterraneandish.com/tahini-sauce-recipe-how-to-make-tahini/"]
  },
  "bakery-apple-crumble": {
    name:"Warm vanilla custard", minutes:5, afterTask:8, timingCue:"Warm the custard as the baked crumble rests for 10 minutes, immediately before serving.",
    why:"Warm custard is a familiar accompaniment to apple crumble, keeping the crisp topping intact until the moment it is served.",
    ingredients:[["Ready-made vanilla custard",500,"ml"]],
    steps:[
      "Before the apple crumble is served, pour the measured ready-made custard into a clean saucepan. Check the packet for heating and storage instructions.",
      "Warm over LOW heat, stirring regularly, until heated through as directed on its label. Do not let it catch on the bottom or boil if the packet advises against boiling.",
      "Pour a little custard into a jug or spoon beside each portion of warm crumble so the topping stays crisp."
    ],
    check:"Custard is smooth and heated according to its packet instructions, and the crumble topping remains crisp.",
    safety:"Ready-made custard typically contains milk and may contain egg. Check label and storage instructions. Use a clean saucepan.",
    sources:["https://www.bbcgoodfood.com/recipes/collection/custard-recipes","https://www.bbcgoodfood.com/recipes/collection/apple-crumble-recipes"]
  }

});
