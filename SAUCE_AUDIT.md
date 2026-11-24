# CookTogether V1 sauce audit — 17 November 2026

## Scope and approach
Reviewed the 116 primary recipes in `window.COOK_RECIPES` and the four older fallback/legacy recipes. Sauce presence is not inferred from the dish name alone: recipe ingredients and steps are checked for cooking liquid, glaze, gravy, yoghurt, dressing, dip, moisture from tomatoes, and intended texture. These fourteen additions are **research-informed development recipes, NOT kitchen tested**; an online reference does not validate exact CookTogether quantities or timings.

## Fourteen additions selected

| Recipe ID | New optional side sauce | Rationale | Important constraint |
|---|---|---|---|
| chicken-roast | Lemon, honey & mustard sauce | Honey glaze caramelises; little pourable tray liquid remains | Original 55-minute dish/steps/glaze unchanged; sauce uses NEW, clean ingredients |
| greek-lamb-traybake | Garlic, lemon & oregano yoghurt | Cool acidity for roast lamb and potato | Do not add yoghurt to hot roasting tray |
| dinner-sausage-veg-traybake | Quick onion gravy | Sauces roast sausages and potatoes separately | Do not rely on sausage drippings that have not been cooked through |
| pork-schnitzel-potatoes | Lemon & caper butter | Acid and butter contrast breadcrumb crust | Serve separately to preserve crispness |
| tuna-pea-fishcakes | Lemon tartare-style dip | Moisture/acidity for crisp fishcakes | Egg/mustard possible in mayonnaise |
| beef-burgers-wedges | Creamy burger sauce | Spread/dip, not a cooking liquid | Added ingredients beyond existing ketchup |
| mushroom-spinach-wellingtons | Vegetarian onion gravy | Pastry main benefits from savoury gravy | Use vegetarian-labelled stock; gravy served alongside |


## Seven further researched sauce options

| Recipe ID | Optional accompaniment | Reason | Safety consideration |
|---|---|---|---|
| beef-pepper-skillet | Teriyaki & lime noodle sauce | The beef and garlic noodles are lightly coated in the original method. A separate teriyaki-lime sauce gives an optional saucier finish without changing the stir-fry. | Teriyaki sauce commonly contains soy and wheat. Check the bottle for allergens and salt, and do not reuse any sauce that touched raw beef. |
| beef-sesame-rice | Light ginger-sesame drizzle | A light drizzle gives the rice extra moisture without soaking the browned beef or masking its existing soy-honey glaze. | Contains soya and sesame; soy sauce may contain wheat. Check all labels and be careful of salt. |
| breakfast-avocado-burritos | Lime & smoked paprika yoghurt | Cooling citrus yoghurt works with chipotle eggs and avocado; serving it inside the wrap avoids a messy extra pan sauce. | Contains milk. Keep yoghurt refrigerated until use and use clean utensils. |
| breakfast-pepper-potato-hash | Smoky lemon yoghurt | A cool, lightly smoky spoonable sauce balances the golden potatoes, peppers, feta and eggs. | Contains milk. Keep yoghurt chilled until serving. Check feta separately for allergens. |
| breakfast-potato-spinach-frittata | Fresh herby tomato salsa | A fresh chopped salsa adds brightness to rich cheese-and-potato frittata without making the eggs watery during cooking. | Wash fresh produce. Keep the salsa separate from raw egg and check that the frittata is fully cooked. |
| lunch-lemon-chickpea-couscous | Creamy lemon tahini drizzle | A nutty pourable dressing complements lemon and chickpeas for people who want a creamier couscous bowl. | Contains sesame. Check the tahini label for other allergens; handle cooked couscous using the original recipe storage guidance. |
| bakery-apple-crumble | Warm vanilla custard | Warm custard is a familiar accompaniment to apple crumble, keeping the crisp topping intact until the moment it is served. | Ready-made custard typically contains milk and may contain egg. Check label and storage instructions. Use a clean saucepan. |

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


## Further pairing references

- **beef-pepper-skillet (Teriyaki & lime noodle sauce):** [published pairing](https://www.justonecookbook.com/teriyaki-sauce/), [published pairing](https://www.recipetineats.com/teriyaki-beef-stir-fry/).
- **beef-sesame-rice (Light ginger-sesame drizzle):** [published pairing](https://www.justonecookbook.com/yakiniku-sauce/), [published pairing](https://www.justonecookbook.com/teriyaki-sauce/).
- **breakfast-avocado-burritos (Lime & smoked paprika yoghurt):** [published pairing](https://www.bbcgoodfood.com/recipes/kebab-shop-yogurt-garlic-sauce).
- **breakfast-pepper-potato-hash (Smoky lemon yoghurt):** [published pairing](https://www.recipetineats.com/lemon-yogurt-sauce/).
- **breakfast-potato-spinach-frittata (Fresh herby tomato salsa):** [published pairing](https://www.jamieoliver.com/recipes/vegetables/classic-tomato-salsa/).
- **lunch-lemon-chickpea-couscous (Creamy lemon tahini drizzle):** [published pairing](https://www.themediterraneandish.com/tahini-sauce-recipe-how-to-make-tahini/).
- **bakery-apple-crumble (Warm vanilla custard):** [published pairing](https://www.bbcgoodfood.com/recipes/collection/custard-recipes), [published pairing](https://www.bbcgoodfood.com/recipes/collection/apple-crumble-recipes).

## Full disposition of all 116 main recipes

The disposition reflects whether an **additional** sauce is justified. Unchanged recipes may already have gravy, broth, dressing, tomato sauce or a suitable finishing component, or be better served without one.

| # | Recipe | Decision |
|---:|---|---|
| 1 | Deeply savoury shepherd’s pie | No extra proposed — keep original sauce/moisture/flavour |
| 2 | Smoky lamb koftas with lemon-garlic yoghurt | No extra proposed — keep original sauce/moisture/flavour |
| 3 | Sticky apricot lamb & chickpea tagine | No extra proposed — keep original sauce/moisture/flavour |
| 4 | Sizzling smoky chicken fajitas | No extra proposed — keep original sauce/moisture/flavour |
| 5 | Creamy basil chicken pasta with burst tomatoes | No extra proposed — keep original sauce/moisture/flavour |
| 6 | Sticky honey-mustard chicken traybake | Offer optional: Lemon, honey & mustard sauce |
| 7 | Rich smoky beef chilli with lime rice | No extra proposed — keep original sauce/moisture/flavour |
| 8 | Sunday-style rich beef bolognese | No extra proposed — keep original sauce/moisture/flavour |
| 9 | Slow-cooked beef & onion casserole | No extra proposed — keep original sauce/moisture/flavour |
| 10 | Silky roasted-garlic tomato pasta | No extra proposed — keep original sauce/moisture/flavour |
| 11 | Golden mushroom & parmesan-style risotto | No extra proposed — keep original sauce/moisture/flavour |
| 12 | Harissa-roasted veg & crispy halloumi bowls | No extra proposed — keep original sauce/moisture/flavour |
| 13 | Lemon-garlic salmon with crispy potatoes | No extra proposed — keep original sauce/moisture/flavour |
| 14 | Cheesy golden tuna & sweetcorn pasta bake | No extra proposed — keep original sauce/moisture/flavour |
| 15 | Zesty lemon-herb cod parcels | No extra proposed — keep original sauce/moisture/flavour |
| 16 | Cheesy sausage, tomato & spinach gnocchi | No extra proposed — keep original sauce/moisture/flavour |
| 17 | Golden pork chops with sticky apple-mustard pan sauce | No extra proposed — keep original sauce/moisture/flavour |
| 18 | Sticky ginger-lime pork noodle stir-fry | No extra proposed — keep original sauce/moisture/flavour |
| 19 | Creamy coconut chickpea & spinach curry | No extra proposed — keep original sauce/moisture/flavour |
| 20 | Slow-simmered smoky lentil ragù | No extra proposed — keep original sauce/moisture/flavour |
| 21 | Smoky three-bean chilli with lime rice | No extra proposed — keep original sauce/moisture/flavour |
| 22 | Sizzling veggie fajitas with smoky beans and lime | No extra proposed — keep original sauce/moisture/flavour |
| 23 | Minty lamb meatballs with lemon couscous | No extra proposed — keep original sauce/moisture/flavour |
| 24 | Garlicky Greek-style lamb & potato traybake | Offer optional: Garlic, lemon & oregano yoghurt |
| 25 | Spiced lamb & aubergine rice bowls | No extra proposed — keep original sauce/moisture/flavour |
| 26 | Sticky ginger chicken rice bowls | No extra proposed — keep original sauce/moisture/flavour |
| 27 | Lemony chicken, spinach & orzo | No extra proposed — keep original sauce/moisture/flavour |
| 28 | Creamy garlic chicken & mushrooms | No extra proposed — keep original sauce/moisture/flavour |
| 29 | Sweet-savoury beef & sesame rice bowls | Offer optional: Light ginger-sesame drizzle |
| 30 | Peppery beef strips with garlic noodles | Offer optional: Teriyaki & lime noodle sauce |
| 31 | Beef & sweet potato cottage pie | No extra proposed — keep original sauce/moisture/flavour |
| 32 | Roasted sweet potato & black bean enchiladas | No extra proposed — keep original sauce/moisture/flavour |
| 33 | Tomato paneer & pea masala | No extra proposed — keep original sauce/moisture/flavour |
| 34 | Creamy spinach & mushroom gnocchi | No extra proposed — keep original sauce/moisture/flavour |
| 35 | Smoky cod & butter bean tomato skillet | No extra proposed — keep original sauce/moisture/flavour |
| 36 | Miso-glazed salmon & crunchy cucumber rice | No extra proposed — keep original sauce/moisture/flavour |
| 37 | Crispy baked fish tacos with lime slaw | No extra proposed — keep original sauce/moisture/flavour |
| 38 | Ginger-sesame pork noodles | No extra proposed — keep original sauce/moisture/flavour |
| 39 | Apple & sage pork meatballs with mash | No extra proposed — keep original sauce/moisture/flavour |
| 40 | Smoky pork & pepper rice skillet | No extra proposed — keep original sauce/moisture/flavour |
| 41 | Roasted cauliflower & red lentil curry | No extra proposed — keep original sauce/moisture/flavour |
| 42 | Bright lemon chickpea & spinach orzo | No extra proposed — keep original sauce/moisture/flavour |
| 43 | Smoky tofu & peanut noodles | No extra proposed — keep original sauce/moisture/flavour |
| 44 | Creamy banana and cinnamon porridge | Keep as written — extra sauce not appropriate |
| 45 | Soft scrambled eggs on toast | Keep as written — extra sauce not appropriate |
| 46 | Thin breakfast pancakes with lemon | Keep as written — extra sauce not appropriate |
| 47 | Sausage, pepper and potato traybake | Offer optional: Quick onion gravy |
| 48 | Tomato, carrot and red lentil soup | No extra proposed — keep original sauce/moisture/flavour |
| 49 | Everyday plain scones — makes 8 | Keep as written — extra sauce not appropriate |
| 50 | Ripe banana muffins — makes 12 | Keep as written — extra sauce not appropriate |
| 51 | Simple buttermilk soda bread — 1 loaf | Keep as written — extra sauce not appropriate |
| 52 | Golden syrup flapjack — 12 squares | Keep as written — extra sauce not appropriate |
| 53 | Smoky chicken and pepper lunch wraps | No extra proposed — keep original sauce/moisture/flavour |
| 54 | Cheddar and tomato pan toasties | Keep as written — extra sauce not appropriate |
| 55 | Hummus and crunchy vegetable pittas | Keep as written — extra sauce not appropriate |
| 56 | Lemon chickpea and roasted-pepper couscous | Offer optional: Creamy lemon tahini drizzle |
| 57 | Egg mayonnaise and cress sandwiches | Keep as written — extra sauce not appropriate |
| 58 | Jacket potatoes with beans and cheddar | Keep as written — extra sauce not appropriate |
| 59 | Smoky pepper shakshuka | No extra proposed — keep original sauce/moisture/flavour |
| 60 | Ginger chicken noodle soup | Keep as written — extra sauce not appropriate |
| 61 | Mature cheddar and chive scones — makes 6 | Keep as written — extra sauce not appropriate |
| 62 | Berry and yoghurt overnight oats | Keep as written — extra sauce not appropriate |
| 63 | Cinnamon French toast with berries | No extra proposed — keep original sauce/moisture/flavour |
| 64 | Crispy potato, pepper and egg hash | Offer optional: Smoky lemon yoghurt |
| 65 | Avocado and scrambled egg breakfast burritos | Offer optional: Lime & smoked paprika yoghurt |
| 66 | Potato, spinach and cheddar frittata | Offer optional: Fresh herby tomato salsa |
| 67 | Creamy garlic mushrooms on sourdough | No extra proposed — keep original sauce/moisture/flavour |
| 68 | Crunchy seed granola with yoghurt and berries | Keep as written — extra sauce not appropriate |
| 69 | Vegetable and white bean minestrone | Keep as written — extra sauce not appropriate |
| 70 | Leek and potato soup with crusty bread | Keep as written — extra sauce not appropriate |
| 71 | Coronation chicken sandwiches | No extra proposed — keep original sauce/moisture/flavour |
| 72 | Tuna and white bean salad with lemon dressing | No extra proposed — keep original sauce/moisture/flavour |
| 73 | Cheesy black bean quesadillas | No extra proposed — keep original sauce/moisture/flavour |
| 74 | Chickpea falafel pittas with lemon yoghurt | No extra proposed — keep original sauce/moisture/flavour |
| 75 | Greek salad with warm flatbreads | No extra proposed — keep original sauce/moisture/flavour |
| 76 | Mozzarella, pesto and roasted pepper ciabatta | Keep as written — extra sauce not appropriate |
| 77 | Carrot and coriander soup with bread | Keep as written — extra sauce not appropriate |
| 78 | Courgette and feta fritters with yoghurt | No extra proposed — keep original sauce/moisture/flavour |
| 79 | Beetroot, lentil and quinoa salad | No extra proposed — keep original sauce/moisture/flavour |
| 80 | Chicken tikka masala with basmati rice | No extra proposed — keep original sauce/moisture/flavour |
| 81 | Crispy chicken katsu curry with rice | No extra proposed — keep original sauce/moisture/flavour |
| 82 | Peanut satay chicken with cucumber rice | No extra proposed — keep original sauce/moisture/flavour |
| 83 | Chicken and chorizo jambalaya | Keep as written — extra sauce not appropriate |
| 84 | One-pan chicken biryani with yoghurt | Keep as written — extra sauce not appropriate |
| 85 | Chicken and leek puff pastry pie | No extra proposed — keep original sauce/moisture/flavour |
| 86 | Barbecue turkey meatloaf with beans | No extra proposed — keep original sauce/moisture/flavour |
| 87 | Crispy chicken parmesan with spaghetti | No extra proposed — keep original sauce/moisture/flavour |
| 88 | Lemon and oregano chicken souvlaki pittas | No extra proposed — keep original sauce/moisture/flavour |
| 89 | Homemade beef burgers with potato wedges | Offer optional: Creamy burger sauce |
| 90 | Beef lasagne with creamy cheese topping | No extra proposed — keep original sauce/moisture/flavour |
| 91 | Beef and mushroom stroganoff with rice | No extra proposed — keep original sauce/moisture/flavour |
| 92 | Lamb keema with peas and rice | No extra proposed — keep original sauce/moisture/flavour |
| 93 | Lancashire lamb hotpot | No extra proposed — keep original sauce/moisture/flavour |
| 94 | Steak and ale puff pastry pie | No extra proposed — keep original sauce/moisture/flavour |
| 95 | Beef meatballs in tomato sauce with spaghetti | No extra proposed — keep original sauce/moisture/flavour |
| 96 | Fish pie with cheddar mash | No extra proposed — keep original sauce/moisture/flavour |
| 97 | Prawn and pea paella-style rice | Keep as written — extra sauce not appropriate |
| 98 | Crispy pork schnitzel with new potatoes | Offer optional: Lemon & caper butter |
| 99 | Sausage and green lentil casserole | No extra proposed — keep original sauce/moisture/flavour |
| 100 | Tuna and pea fishcakes with tomato salad | Offer optional: Easy lemon tartare-style sauce |
| 101 | Sweet-sour aubergine caponata with ciabatta | No extra proposed — keep original sauce/moisture/flavour |
| 102 | Spinach and ricotta cannelloni | No extra proposed — keep original sauce/moisture/flavour |
| 103 | Butternut squash and red lentil dhal | No extra proposed — keep original sauce/moisture/flavour |
| 104 | Lemony butter beans and kale on toast | No extra proposed — keep original sauce/moisture/flavour |
| 105 | Lentil and aubergine moussaka | No extra proposed — keep original sauce/moisture/flavour |
| 106 | Tofu and vegetable egg-fried rice | No extra proposed — keep original sauce/moisture/flavour |
| 107 | Mushroom and spinach pastry wellingtons | Offer optional: Vegetarian onion gravy |
| 108 | Rice and chickpea stuffed peppers | No extra proposed — keep original sauce/moisture/flavour |
| 109 | Sweet potato and peanut stew with rice | No extra proposed — keep original sauce/moisture/flavour |
| 110 | Broccoli and cheddar pasta bake | No extra proposed — keep original sauce/moisture/flavour |
| 111 | Chocolate brownies — makes 12 squares | Keep as written — extra sauce not appropriate |
| 112 | Lemon drizzle loaf — makes 10 slices | Keep as written — extra sauce not appropriate |
| 113 | Chocolate chip cookies — makes 12 large cookies | Keep as written — extra sauce not appropriate |
| 114 | Rosemary focaccia — makes 12 pieces | Keep as written — extra sauce not appropriate |
| 115 | Victoria sponge — makes 10 slices | Keep as written — extra sauce not appropriate |
| 116 | Bramley apple crumble — serves 6 | Offer optional: Warm vanilla custard |

## 24 November addition

Lentil cottage pie with cheesy mash brings the primary recipe count to 117. Its lentil and mushroom filling already includes a thick stock-based sauce, so it needs no separate sauce.
