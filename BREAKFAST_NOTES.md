# Breakfast expansion — 18 November 2026

Adds 13 development recipes (24 breakfast recipes total): configurable full English,
bacon sandwich, sausage bap, bacon/egg muffin, sausage/egg/cheese muffin, vegetarian
cooked breakfast; apple overnight oats, cheesy beans on toast, spinach/cheese omelette,
tofu scramble, banana/peanut toast, fruit/yoghurt bowls and steel-cut oats.

Breakfast choices are immutable recipe variants encoded in validated IDs. This lets
existing plans, shopping, ingredient-use review, backups and cook-along progress use
the same resolved ingredients without a separate mutable global preference. A method
or quantity change starts a distinct guide. A zero component removes its ingredients
and tasks. Sandwiches must retain a filling. Counts are per person, not per household.

Oven/hob and air-fryer/hob methods are offered for cooked breakfasts. Bacon-only
sandwiches label the first method Hob because no oven cooking is necessary. The air
fryer instructions explain batches and optional oven hot holding. Estimates allow
sequential beginner cooking; appliance capacity can increase total time.

Pressure cooking is limited to steel-cut oats in a compatible Instant Pot electric
pressure cooker. Four portions form a fixed batch with 720 ml water, a half-full limit,
manual checks and a full natural pressure release. It is not a generic oven conversion
or a method for stovetop pressure cookers. Other recipes have no pressure switch.

Method comparisons:
- https://www.bbcgoodfood.com/recipes/air-fryer-sausages
- https://www.bbcgoodfood.com/videos/easy-air-fryer-bacon
- https://www.bbcgoodfood.com/howto/guide/how-cook-sausages
- https://www.bbcgoodfood.com/recipes/overnight-oats
- https://www.bbcgoodfood.com/recipes/tofu-scramble
- https://instantpot.com/blogs/recipes/steel-cut-oats-easy-camping-breakfast
- https://www.food.gov.uk/safety-hygiene/cooking-your-food
- https://www.gov.uk/food-hygiene-businesses/cooking

These are original development recipes, not claimed kitchen-tested recipes.

Validation: `node tests/breakfasts.cjs` exercises the real app resolver, renderers,
shopping aggregation, backup validation and change handler, alongside all 125 full
English count combinations. Existing sauce, traybake/timer and illustration tests pass.
Headless Chromium could not launch in this workspace; mobile layout and actual
appliance cooking still need manual testing.
