/* CookTogether · optional accompaniments.
   Independently drafted, research-informed development additions: NOT kitchen-tested.
   Quantities are extras for 4 diners and are scaled in the UI. Original recipes/timings stay unchanged.
   sources are pairing references, NOT imported/copyrighted instructions. */
window.COOK_OPTIONAL_SAUCES = Object.freeze({
  "chicken-roast": {
    name:"Lemon, honey & mustard sauce", minutes:5,
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
    name:"Garlic, lemon & oregano yoghurt", minutes:3,
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
    name:"Quick onion gravy", minutes:15,
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
    name:"Lemon & caper butter", minutes:3,
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
    name:"Easy lemon tartare-style sauce", minutes:4,
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
    name:"Creamy burger sauce", minutes:3,
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
    name:"Vegetarian onion gravy", minutes:15,
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
  }
});
