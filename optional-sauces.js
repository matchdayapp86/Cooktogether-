/* CookTogether optional finishing sauces: added ONLY for carefully selected drier meals.
 * All sauces are original development suggestions awaiting kitchen testing.
 * Do not alter an existing recipe's ingredients, timings or steps.
 * Keep these extras opt-in; they are NOT included in Pantry or shopping automatically.
 */
(()=>{
  'use strict';
  const SAUCES={
  "greek-lamb-traybake": {
    "title": "Optional lemon & oregano yoghurt",
    "status": "Suggested addition — needs kitchen testing",
    "note": "Cooling sauce complements the lemon, oregano and salty feta. Contains milk. Extra quantities are separate from the original recipe; not automatically shopped.",
    "pairingReference": "https://www.bbcgoodfood.com/recipes/one-pan-herby-roast-lamb-with-lemon-potatoes-feta",
    "insertBefore": 10,
    "ingredients": [
      [
        "extra-sauce-0",
        "Greek yoghurt (extra)",
        180,
        "g",
        "Chilled"
      ],
      [
        "extra-sauce-1",
        "Lemon juice (extra)",
        1,
        "tbsp",
        "Fresh produce"
      ],
      [
        "extra-sauce-2",
        "Dried oregano (extra)",
        0.5,
        "tsp",
        "Cupboard"
      ],
      [
        "extra-sauce-3",
        "Olive oil (extra)",
        1,
        "tsp",
        "Cupboard"
      ]
    ],
    "task": {
      "title": "Optional: make lemon & oregano yoghurt",
      "instructions": "While the lamb finishes roasting, put 180g Greek yoghurt into a CLEAN bowl. Stir in 1 tbsp lemon juice, 0.5 tsp dried oregano and 1 tsp olive oil until smooth. Taste with a clean spoon; add a splash of cold water if you prefer it pourable. Keep chilled until the lamb is fully cooked, then serve the sauce on the side, alongside the feta if using. Do not mix yoghurt into the hot roasting tray.",
      "check": "Yoghurt is smooth and chilled; lamb has been checked for doneness separately.",
      "uses": [],
      "skills": [],
      "tools": [
        "Small bowl",
        "Spoon"
      ],
      "sourceStage": 4,
      "optionalSauce": true
    }
  },
  "dinner-sausage-veg-traybake": {
    "title": "Optional quick mustard gravy",
    "status": "Suggested addition — needs kitchen testing",
    "note": "Pourable gravy for a dry roast, without changing its oven timings. Mustard and vegetable stock may contain allergens; check labels. Extra ingredients are not automatically shopped.",
    "pairingReference": "https://www.bbcgoodfood.com/recipes/sausages-quick-onion-gravy",
    "insertBefore": 11,
    "ingredients": [
      [
        "extra-sauce-0",
        "Low-salt vegetable stock (extra)",
        250,
        "ml",
        "Cupboard"
      ],
      [
        "extra-sauce-1",
        "Wholegrain mustard (extra)",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "extra-sauce-2",
        "Cornflour (extra)",
        2,
        "tsp",
        "Cupboard"
      ]
    ],
    "task": {
      "title": "Optional: make quick mustard gravy",
      "instructions": "While the sausages finish roasting, pour 250ml low-salt vegetable stock into a CLEAN small saucepan and whisk in 1 tsp wholegrain mustard. Heat to a gentle simmer. In a cup, stir 2 tsp cornflour into 1 tbsp COLD water until smooth; gradually whisk the slurry into the simmering stock. Cook for 2–3 minutes, stirring until glossy and lightly thickened. Serve separately after checking the sausages are fully cooked. Do not rely on any uncooked sausage juices from the tray.",
      "check": "Gravy is bubbling hot, smooth and pourable; sausages are checked fully cooked.",
      "uses": [],
      "skills": [],
      "tools": [
        "Small saucepan",
        "Cup and whisk",
        "Hob"
      ],
      "sourceStage": 4,
      "optionalSauce": true
    }
  },
  "pork-schnitzel-potatoes": {
    "title": "Optional lemon & parsley butter",
    "status": "Suggested addition — needs kitchen testing",
    "note": "A sharp buttery accompaniment for crisp schnitzel; contains milk. These quantities are extra, not the butter already used to bake the pork. Not automatically shopped.",
    "pairingReference": "https://www.bbcgoodfood.com/recipes/pork-schnitzel-with-lemon-caper-butter",
    "insertBefore": 7,
    "ingredients": [
      [
        "extra-sauce-0",
        "Unsalted butter (extra)",
        35,
        "g",
        "Chilled"
      ],
      [
        "extra-sauce-1",
        "Lemon juice (extra)",
        1,
        "tbsp",
        "Fresh produce"
      ],
      [
        "extra-sauce-2",
        "Chopped fresh parsley (extra)",
        2,
        "tbsp",
        "Fresh produce"
      ]
    ],
    "task": {
      "title": "Optional: make lemon & parsley butter",
      "instructions": "While the pork schnitzel finishes cooking, melt 35g unsalted butter over LOW heat in a small clean saucepan. Remove from heat and stir in 1 tbsp lemon juice and 2 tbsp finely chopped parsley. Taste with a clean spoon. Keep warm, not boiling. Spoon a little beside the cooked pork rather than soaking its crisp breadcrumb coating. Do not use oil or melted butter from the raw pork coating bowl.",
      "check": "Sauce is warm and glossy; breaded pork is fully cooked and remains crisp.",
      "uses": [],
      "skills": [],
      "tools": [
        "Small saucepan",
        "Spoon",
        "Hob"
      ],
      "sourceStage": 4,
      "optionalSauce": true
    }
  },
  "tuna-pea-fishcakes": {
    "title": "Optional lemon & dill yoghurt dip",
    "status": "Suggested addition — needs kitchen testing",
    "note": "A fresh, cool accompaniment to crisp tuna fishcakes. Contains milk; extra ingredients are not automatically shopped.",
    "pairingReference": "https://www.bbcgoodfood.com/premium/rainbow-trout-horseradish-fishcakes-with-herby-yogurt",
    "insertBefore": 8,
    "ingredients": [
      [
        "extra-sauce-0",
        "Greek yoghurt (extra)",
        180,
        "g",
        "Chilled"
      ],
      [
        "extra-sauce-1",
        "Lemon juice (extra)",
        1,
        "tbsp",
        "Fresh produce"
      ],
      [
        "extra-sauce-2",
        "Fresh dill, finely chopped (extra)",
        1,
        "tbsp",
        "Fresh produce"
      ]
    ],
    "task": {
      "title": "Optional: make lemon & dill yoghurt dip",
      "instructions": "While the fishcakes are cooking, spoon 180g Greek yoghurt into a CLEAN bowl. Stir in 1 tbsp lemon juice and 1 tbsp finely chopped fresh dill. Mix until smooth. Taste with a clean spoon; thin with a teaspoon of cold water if needed. Keep chilled, then offer a spoonful alongside the fishcakes and tomato salad. Keep the dip away from utensils used for raw egg or uncooked fishcakes.",
      "check": "Dip is cool, lemony and spoonable; fishcakes are piping hot in their centres.",
      "uses": [],
      "skills": [],
      "tools": [
        "Small bowl",
        "Spoon"
      ],
      "sourceStage": 4,
      "optionalSauce": true
    }
  },
  "mushroom-spinach-wellingtons": {
    "title": "Optional herby vegetarian gravy",
    "status": "Suggested addition — needs kitchen testing",
    "note": "Meat-free gravy adds moisture without softening the pastry. Use vegetarian-certified stock and soy sauce. Soy may contain soya/wheat; stock may contain celery. Extras are not automatically shopped.",
    "pairingReference": "https://www.bbcgoodfood.com/recipes/next-level-vegan-wellington-with-gravy",
    "insertBefore": 12,
    "ingredients": [
      [
        "extra-sauce-0",
        "Vegetable stock (extra)",
        250,
        "ml",
        "Cupboard"
      ],
      [
        "extra-sauce-1",
        "Reduced-salt soy sauce (extra)",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "extra-sauce-2",
        "Cornflour (extra)",
        2,
        "tsp",
        "Cupboard"
      ],
      [
        "extra-sauce-3",
        "Dried thyme (extra)",
        0.5,
        "tsp",
        "Cupboard"
      ]
    ],
    "task": {
      "title": "Optional: make herby vegetarian gravy",
      "instructions": "While the wellingtons finish baking, bring 250ml vegetable stock, 1 tsp reduced-salt soy sauce and 0.5 tsp dried thyme to a gentle simmer in a CLEAN small saucepan. In a cup, stir 2 tsp cornflour into 1 tbsp COLD water until smooth. Whisk this gradually into the simmering stock and stir for 2–3 minutes until glossy. Serve beside, not over, the pastry to keep it crisp.",
      "check": "Gravy is hot and pourable and the pastry stays golden and crisp.",
      "uses": [],
      "skills": [],
      "tools": [
        "Small saucepan",
        "Cup and whisk",
        "Hob"
      ],
      "sourceStage": 4,
      "optionalSauce": true
    }
  },
  "beef-pepper-skillet": {
    "title": "Optional extra ginger-soy noodle drizzle",
    "status": "Suggested addition — needs kitchen testing",
    "note": "A modest extra serving sauce, rather than making the whole stir-fry wetter or saltier. Contains soya and possibly wheat; extra ingredients not automatically shopped.",
    "pairingReference": "https://www.recipetineats.com/beef-rice-noodles/",
    "insertBefore": 21,
    "ingredients": [
      [
        "extra-sauce-0",
        "Reduced-salt soy sauce (extra)",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "extra-sauce-1",
        "Honey (extra)",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "extra-sauce-2",
        "Cornflour (extra)",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "extra-sauce-3",
        "Lime juice (extra)",
        2,
        "tsp",
        "Fresh produce"
      ]
    ],
    "task": {
      "title": "Optional: make extra ginger-soy noodle drizzle",
      "instructions": "Once the noodles and beef are fully cooked, make a little extra drizzle in a CLEAN small saucepan. Whisk 100ml cold WATER with 1 tbsp reduced-salt soy sauce, 1 tsp honey and 1 tsp cornflour until the cornflour is fully dispersed. Heat gently, stirring, for 2–3 minutes until it starts to thicken. Turn off the heat and stir in 2 tsp lime juice. Taste a small cooled spoonful first; the noodles already contain soy sauce. Drizzle only as much as you want onto individual bowls just before serving so the noodles do not turn soggy. This sauce does not replace or alter the original soy amounts.",
      "check": "Drizzle is shiny and thin enough to pour; beef and noodles are already fully cooked.",
      "uses": [],
      "skills": [],
      "tools": [
        "Small saucepan",
        "Whisk",
        "Hob"
      ],
      "sourceStage": 4,
      "optionalSauce": true
    }
  }
};
  for (const recipe of (window.COOK_RECIPES||[])) {
    if (SAUCES[recipe.id] && !recipe.optionalSauce && recipe.mealType!=='Bakery') {
      recipe.optionalSauce=SAUCES[recipe.id];
    }
  }
  window.COOK_OPTIONAL_SAUCES=Object.freeze(SAUCES);
})();
