/* Reviewed task placements for actions whose subject is in a preceding sentence.
 * Match recipe AND the complete authored instruction, never a fragile step number.
 * Keep the original instruction here: portion scaling is presentation-only.
 * Do not copy every prep guide into each task that merely uses that ingredient.
 */
(() => {
  const illustrations = window.CookIllustrations;
  const reviewed = [
  {
    "recipeId": "chicken-roast",
    "instruction": "Chop potatoes into 2 cm chunks and carrots into slim batons.",
    "keys": [
      "potato-prep",
      "carrot-batons"
    ]
  },
  {
    "recipeId": "chicken-fajitas",
    "instruction": "Slice peppers and onion.",
    "keys": [
      "slice-onion",
      "pepper-strips"
    ]
  },
  {
    "recipeId": "beef-pepper-skillet",
    "instruction": "While they cook, wash and deseed the peppers, slice them and the red onion into thin strips, peel and finely grate the ginger, and peel and crush the garlic.",
    "keys": [
      "pepper-strips",
      "slice-onion",
      "ginger-grate",
      "garlic"
    ]
  },
  {
    "recipeId": "pesto-chicken",
    "instruction": "On a separate board, cut it into even bite-size pieces and wash your hands and equipment afterwards—do not wash raw chicken.",
    "keys": [
      "chicken-cube"
    ]
  },
  {
    "recipeId": "halloumi-couscous",
    "instruction": "Chop courgettes and peppers into bite-size pieces.",
    "keys": [
      "courgette-dice",
      "pepper-dice"
    ]
  },
  {
    "recipeId": "halloumi-couscous",
    "instruction": "Pat halloumi dry and slice into 8 pieces.",
    "keys": [
      "halloumi-slice"
    ]
  },
  {
    "recipeId": "lamb-aubergine-rice",
    "instruction": "Rinse the aubergine, dice into 2cm pieces and salt lightly.",
    "keys": [
      "aubergine-cube"
    ]
  },
  {
    "recipeId": "beef-pepper-skillet",
    "instruction": "Pat the beef dry with kitchen paper; if starting with a whole steak, cut into even thin strips with a separate clean board and knife.",
    "keys": [
      "beef-strips"
    ]
  },
  {
    "recipeId": "sweet-potato-enchiladas",
    "instruction": "Peel and dice sweet potato into small even cubes.",
    "keys": [
      "potato-prep"
    ]
  },
  {
    "recipeId": "spinach-mushroom-gnocchi",
    "instruction": "Wipe mushrooms clean and slice.",
    "keys": [
      "mushroom-slice"
    ]
  },
  {
    "recipeId": "pork-apple-meatballs",
    "instruction": "Cut the apple reserved for the gravy into roughly 1 cm cubes. When the first 11-minute meatball simmer ends, stir in the apple and, for a slightly sweeter gravy, 1.5 tsp brown sugar (optional). Cover the pan and simmer for 4 minutes.",
    "keys": [
      "apple-dice"
    ]
  },
  {
    "recipeId": "smoky-tofu-peanut-noodles",
    "instruction": "Press firm tofu gently between clean kitchen towels to remove excess moisture; cut into even cubes.",
    "keys": [
      "tofu-cube"
    ]
  },
  {
    "recipeId": "lunch-chicken-pepper-wraps",
    "instruction": "On a separate board, use a clean knife to cut it into even strips about 1 cm thick.",
    "keys": [
      "chicken-strips"
    ]
  },
  {
    "recipeId": "lunch-cheddar-tomato-toasties",
    "instruction": "Grate 160g cheddar.",
    "keys": [
      "grate"
    ]
  },
  {
    "recipeId": "lunch-cheddar-tomato-toasties",
    "instruction": "Wash and dry both tomatoes, remove the tough stalk ends and cut into thin 3–4 mm slices; pat with kitchen paper so the toasties do not become soggy.",
    "keys": [
      "tomato-slice"
    ]
  },
  {
    "recipeId": "lunch-hummus-crunch-pittas",
    "instruction": "Cut it lengthways into quarters and slice each quarter into thin pieces about 3 mm thick.",
    "keys": [
      "cucumber-quarter"
    ]
  },
  {
    "recipeId": "lunch-egg-cress-sandwiches",
    "instruction": "Crack and peel all six eggs, checking for pieces of shell.",
    "keys": [
      "boiled-egg-peel"
    ]
  },
  {
    "recipeId": "lunch-jackets-beans-cheese",
    "instruction": "During the last 10 minutes of baking, grate 120g cheddar and return it to the fridge until needed.",
    "keys": [
      "grate"
    ]
  }
];
  const placements = new Map(reviewed.map(row => [row.recipeId + '\n' + row.instruction, row.keys]));
  illustrations.selectTask = function(instruction, context = {}) {
    const keys = placements.get(context.recipeId + '\n' + instruction);
    return keys ? [...keys] : illustrations.select(instruction, context);
  };
})();
