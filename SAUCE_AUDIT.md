# CookTogether V1 sauce audit — 17 November 2026

## Scope and approach
Reviewed the 116 primary recipes in `window.COOK_RECIPES` and the four older fallback/legacy recipes. Sauce presence is not inferred from the dish name alone: recipe ingredients and steps are checked for cooking liquid, glaze, gravy, yoghurt, dressing, dip, moisture from tomatoes, and intended texture. These additions are **research-informed development recipes, NOT kitchen tested**; an online reference does not validate exact CookTogether quantities or timings.

## Seven additions selected

| Recipe ID | New optional side sauce | Rationale | Important constraint |
|---|---|---|---|
| chicken-roast | Lemon, honey & mustard sauce | Honey glaze caramelises; little pourable tray liquid remains | Original 55-minute dish/steps/glaze unchanged; sauce uses NEW, clean ingredients |
| greek-lamb-traybake | Garlic, lemon & oregano yoghurt | Cool acidity for roast lamb and potato | Do not add yoghurt to hot roasting tray |
| dinner-sausage-veg-traybake | Quick onion gravy | Sauces roast sausages and potatoes separately | Do not rely on sausage drippings that have not been cooked through |
| pork-schnitzel-potatoes | Lemon & caper butter | Acid and butter contrast breadcrumb crust | Serve separately to preserve crispness |
| tuna-pea-fishcakes | Lemon tartare-style dip | Moisture/acidity for crisp fishcakes | Egg/mustard possible in mayonnaise |
| beef-burgers-wedges | Creamy burger sauce | Spread/dip, not a cooking liquid | Added ingredients beyond existing ketchup |
| mushroom-spinach-wellingtons | Vegetarian onion gravy | Pastry main benefits from savoury gravy | Use vegetarian-labelled stock; gravy served alongside |

## Existing sauces, glazes or liquid: do not double up
- `salmon-traybake`: already includes a lemon, garlic, dill and wholegrain-mustard dressing.
- `cod-parcels`: the parcels release lemon-herb/tomato cooking juices intentionally served over couscous.
- `rice-chickpea-stuffed-peppers`: the rice and chickpeas are baked in passata and tomato sauce.
- `pork-apple-meatballs`: the pork meatballs already simmer in stock with Dijon, making a pan sauce.
- `chicken-souvlaki-pittas`: Greek yoghurt already served in the pitta.
- `lunch-black-bean-quesadillas`: yoghurt and lime already served.
- `halloumi-couscous`, `lamb-koftas`, `crunchy-fish-tacos`: already feature a yoghurt accompaniment.
- Chilli, curries, stews, ragùs, Bolognese, creamy pasta, fish pie, katsu curry and other moist casseroles are primarily complete sauce-based recipes.
- Breakfasts, bakery items, sandwiches, soups, porridge and salad-style recipes are not automatically candidates: extra sauce can make them worse or simply duplicate a suitable accompaniment.

## Research references and independently drafted pairings
- [Good Food honey-mustard sauce](https://www.bbcgoodfood.com/recipes/honey-mustard-sauce) and [RecipeTin Eats honey-mustard chicken](https://www.recipetineats.com/honey-mustard-chicken/) support the honey, mustard and stock pairing.
- [Good Food garlic yoghurt](https://www.bbcgoodfood.com/recipes/garlic-yogurt) and [The Mediterranean Dish souvlaki with tzatziki](https://www.themediterraneandish.com/greek-chicken-souvlaki-recipe-tzatziki/) support a garlic-lemon yoghurt side for Greek flavours.
- [Good Food sausages with quick onion gravy](https://www.bbcgoodfood.com/recipes/sausages-quick-onion-gravy) and [Delia onion gravy](https://www.deliaonline.com/recipes/occasions/christmas/christmas-stuffings-and-sauces/onion-gravy) support the onion-stock gravy style.
- [Good Food pork schnitzel with lemon-caper butter](https://www.bbcgoodfood.com/recipes/pork-schnitzel-with-lemon-caper-butter) supports the butter/caper pairing.
- [Good Food fishcakes with tartare](https://www.bbcgoodfood.com/recipes/fish-cakes-tartare-sauce) and [Great British Chefs homemade tartare sauce](https://www.greatbritishchefs.com/recipes/homemade-tartare-sauce-recipe) support tartare-style fishcake dip.
- [Good Food classic burger sauce](https://www.bbcgoodfood.com/recipes/classic-burger-sauce) supports a mayonnaise-mustard-ketchup-gherkin burger spread.
- [Great British Chefs vegetarian gravy](https://www.greatbritishchefs.com/how-to-cook/how-to-make-vegetarian-gravy) supports vegetarian gravy beside Wellington.

CookTogether sauce preparations are independently written and not copied from these sources.

## App behaviour and outstanding QA
1. Original recipe `ingredients`, original `steps`, `beginnerTasks`, heat and time are not changed.
2. Each sauce is offered on its recipe details and in the **Get Ready** step; the cook opts in or skips. When chosen, it becomes a guided step before the original final serving task.
3. Ingredient quantities scale to the selected number of people. Extras may be manually added to the existing Shopping list with a single click. They do **not** auto-deduct from Pantry when the recipe is marked cooked.
4. Extras are excluded from base recipe cost and base shopping estimate. Do not silently treat them as existing recipe ingredients.
5. A new clean saucepan/bowl is required for sauce; raw meat marinade is never reused without adequate cooking.
6. Regression test: `node tests/optional-sauces.cjs`. Browser/device QA is still required for modal navigation, Next/Back, shopping quantities, allergen labels and multitimer behaviour before broad release.
7. Kitchen-test each sauce separately before changing its status or publishing it as tested.

## Later work, after user testing
Review whether optional sauce extras should integrate automatically into per-day planner shopping and pantry usage records; the current one-click manual Shopping entry deliberately avoids modifying tested core recipe data.
