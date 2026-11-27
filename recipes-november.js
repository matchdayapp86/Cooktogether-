/* 45 original development recipes. Not kitchen-tested. */
(()=>{
 const additions=[
  {
    "id": "chicken-olive-cacciatore",
    "title": "Chicken, olive and tomato cacciatore with mash",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 65,
    "servings": 4,
    "cost": 0,
    "description": "Olives and oregano give the tomato sauce a savoury Mediterranean flavour. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Chicken",
      "New to test"
    ],
    "allergens": [
      "Milk",
      "Celery (stock)",
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "chicken-thighs",
        "Boneless skinless chicken thighs",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "mushrooms",
        "Mushrooms",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "chopped-tomatoes",
        "Tinned chopped tomatoes",
        400,
        "g",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        200,
        "ml",
        "Cupboard"
      ],
      [
        "olives",
        "Pitted olives",
        70,
        "g",
        "Cupboard"
      ],
      [
        "dried-oregano",
        "Dried oregano",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "potatoes",
        "Potatoes",
        800,
        "g",
        "Fresh produce"
      ],
      [
        "milk",
        "Milk",
        100,
        "ml",
        "Chilled"
      ],
      [
        "butter",
        "Butter",
        25,
        "g",
        "Chilled"
      ]
    ],
    "steps": [
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mushrooms: Wipe clean and cut into thin slices. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat.",
      "On a separate board, cut the chicken thighs into 4cm pieces. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Lower the heat to medium. Cook the onion and mushrooms in the same pan for 8 minutes, stirring. Add garlic for 1 minute, then tomatoes, stock, olives and oregano. Stir to lift the browned bits.",
      "Return the chicken and its juices. Cover and simmer gently for 25–30 minutes, stirring occasionally. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Meanwhile cover the potatoes with cold water in a saucepan. Bring to a boil, then simmer for 15–20 minutes until a fork slides through. Drain carefully, return to the pan off the heat, and mash with the measured milk and butter.",
      "Spoon the chicken and tomato sauce alongside the mash."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "mushrooms",
          "potatoes"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mushrooms: Wipe clean and cut into thin slices. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "On a separate board, cut the chicken thighs into 4cm pieces. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Brown the meat",
        "uses": [
          "chicken-thighs",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 2
      },
      {
        "title": "Build the tomato sauce",
        "uses": [
          "onion",
          "garlic",
          "mushrooms",
          "chopped-tomatoes",
          "chicken-stock",
          "olives",
          "dried-oregano"
        ],
        "instructions": "Lower the heat to medium. Cook the onion and mushrooms in the same pan for 8 minutes, stirring. Add garlic for 1 minute, then tomatoes, stock, olives and oregano. Stir to lift the browned bits.",
        "check": "Sauce is gently bubbling.",
        "skills": [],
        "tools": [
          "Pan from the previous step",
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Simmer the chicken",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "Return the chicken and its juices. Cover and simmer gently for 25–30 minutes, stirring occasionally. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Chicken is cooked through and tender.",
        "skills": [],
        "tools": [
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Make the mash",
        "uses": [
          "potatoes",
          "milk",
          "butter"
        ],
        "instructions": "Meanwhile cover the potatoes with cold water in a saucepan. Bring to a boil, then simmer for 15–20 minutes until a fork slides through. Drain carefully, return to the pan off the heat, and mash with the measured milk and butter.",
        "check": "Potatoes have no hard pieces; mash is smooth.",
        "skills": [],
        "tools": [
          "Saucepan"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Spoon the chicken and tomato sauce alongside the mash.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "chicken-thighs": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "mushrooms": "Wipe clean and cut into thin slices.",
      "olive-oil": "Measure the amount shown.",
      "chopped-tomatoes": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "olives": "Measure the amount shown.",
      "dried-oregano": "Measure the amount shown.",
      "potatoes": "Peel and cut into 2cm chunks.",
      "milk": "Measure the amount shown.",
      "butter": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed."
    },
    "flavour": "Olives and oregano give the tomato sauce a savoury Mediterranean flavour.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Milk",
        "Celery (stock)",
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/2865685/cacciatore-chicken"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/2865685/cacciatore-chicken"
  },
  {
    "id": "chicken-adobo-rice",
    "title": "Peppery vinegar-and-soy chicken adobo with rice",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 60,
    "servings": 4,
    "cost": 0,
    "description": "A tangy, peppery sauce balances vinegar with savoury soy. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Chicken",
      "New to test"
    ],
    "allergens": [
      "Soya",
      "Wheat (soy sauce)",
      "Wheat",
      "Sulphites (check vinegar)"
    ],
    "ingredients": [
      [
        "chicken-thighs",
        "Boneless skinless chicken thighs",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "garlic",
        "Garlic",
        6,
        "cloves",
        "Fresh produce"
      ],
      [
        "vegetable-oil",
        "Vegetable oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "soy-sauce",
        "Reduced-salt soy sauce",
        3,
        "tbsp",
        "Cupboard"
      ],
      [
        "cider-vinegar",
        "Cider vinegar",
        4,
        "tbsp",
        "Cupboard"
      ],
      [
        "water",
        "Water",
        200,
        "ml",
        "Kitchen basics"
      ],
      [
        "brown-sugar",
        "Brown sugar",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "black-pepper",
        "Ground black pepper",
        0.5,
        "tsp",
        "Cupboard"
      ],
      [
        "bay-leaves",
        "Dried bay leaves",
        2,
        "whole",
        "Cupboard"
      ],
      [
        "rice",
        "Long-grain rice",
        280,
        "g",
        "Cupboard"
      ],
      [
        "broccoli",
        "Broccoli",
        300,
        "g",
        "Fresh produce"
      ]
    ],
    "steps": [
      "Garlic: Peel and crush with a garlic press, or finely chop. Broccoli: Wash and cut into small florets. Prepare these before handling raw meat.",
      "On a separate board, cut each thigh into 4cm pieces. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the oil in a deep frying pan over medium-high heat. Brown the chicken for 6–8 minutes, turning regularly. Use batches if needed; it will finish cooking in the sauce.",
      "Lower the heat. Add garlic for 30 seconds, then soy sauce, vinegar, measured water, sugar, pepper and bay leaves. Bring to a gentle bubble.",
      "Cover and simmer for 25 minutes, stirring occasionally. Uncover for a further 5–10 minutes until the sauce lightly coats a spoon. Add a splash of water if drying before the chicken is cooked. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "Boil the broccoli in a separate pan for 4–6 minutes until tender, then drain carefully.",
      "Remove and discard the bay leaves. Serve chicken and sauce with rice and broccoli."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "garlic",
          "broccoli"
        ],
        "instructions": "Garlic: Peel and crush with a garlic press, or finely chop. Broccoli: Wash and cut into small florets. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "On a separate board, cut each thigh into 4cm pieces. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Brown the chicken",
        "uses": [
          "chicken-thighs",
          "vegetable-oil"
        ],
        "instructions": "Heat the oil in a deep frying pan over medium-high heat. Brown the chicken for 6–8 minutes, turning regularly. Use batches if needed; it will finish cooking in the sauce.",
        "check": "Chicken has colour but still needs simmering.",
        "skills": [],
        "tools": [
          "Large frying pan"
        ],
        "sourceStage": 2
      },
      {
        "title": "Add the sharp savoury sauce",
        "uses": [
          "garlic",
          "soy-sauce",
          "cider-vinegar",
          "water",
          "brown-sugar",
          "black-pepper",
          "bay-leaves"
        ],
        "instructions": "Lower the heat. Add garlic for 30 seconds, then soy sauce, vinegar, measured water, sugar, pepper and bay leaves. Bring to a gentle bubble.",
        "check": "Liquid is gently bubbling around the chicken.",
        "skills": [],
        "tools": [
          "Clean utensils for the action described"
        ],
        "sourceStage": 3
      },
      {
        "title": "Simmer and reduce",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "Cover and simmer for 25 minutes, stirring occasionally. Uncover for a further 5–10 minutes until the sauce lightly coats a spoon. Add a splash of water if drying before the chicken is cooked. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Chicken is cooked through; the sauce is concentrated but not dry.",
        "skills": [],
        "tools": [
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 5
      },
      {
        "title": "Cook broccoli",
        "uses": [
          "broccoli"
        ],
        "instructions": "Boil the broccoli in a separate pan for 4–6 minutes until tender, then drain carefully.",
        "check": "A fork pierces the stems.",
        "skills": [],
        "tools": [
          "Clean utensils for the action described"
        ],
        "sourceStage": 6
      },
      {
        "title": "Finish and serve",
        "uses": [
          "bay-leaves"
        ],
        "instructions": "Remove and discard the bay leaves. Serve chicken and sauce with rice and broccoli.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 7
      }
    ],
    "prep": {
      "chicken-thighs": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "vegetable-oil": "Measure the amount shown.",
      "soy-sauce": "Measure the amount shown.",
      "cider-vinegar": "Measure the amount shown.",
      "water": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "brown-sugar": "Measure the amount shown.",
      "black-pepper": "Measure the amount shown.",
      "bay-leaves": "Measure the amount shown.",
      "rice": "Measure the amount shown.",
      "broccoli": "Wash and cut into small florets."
    },
    "flavour": "A tangy, peppery sauce balances vinegar with savoury soy.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Soya",
        "Wheat (soy sauce)",
        "Wheat",
        "Sulphites (check vinegar)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/chicken-adobo"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/chicken-adobo"
  },
  {
    "id": "chicken-coconut-lime-soup",
    "title": "Coconut-lime chicken noodle soup",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 40,
    "servings": 4,
    "cost": 0,
    "description": "Coconut milk softens ginger and lime in a fragrant soup. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Chicken",
      "New to test"
    ],
    "allergens": [
      "Fish",
      "Egg",
      "Wheat",
      "Celery (stock)",
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "chicken-breast",
        "Boneless skinless chicken breast",
        600,
        "g",
        "Meat & fish"
      ],
      [
        "mushrooms",
        "Mushrooms",
        200,
        "g",
        "Fresh produce"
      ],
      [
        "fresh-ginger",
        "Fresh ginger",
        20,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        2,
        "cloves",
        "Fresh produce"
      ],
      [
        "coconut-milk",
        "Coconut milk",
        400,
        "ml",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        700,
        "ml",
        "Cupboard"
      ],
      [
        "fish-sauce",
        "Fish sauce",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "lime",
        "Lime",
        2,
        "whole",
        "Fresh produce"
      ],
      [
        "egg-noodles",
        "Dried egg noodles",
        200,
        "g",
        "Cupboard"
      ],
      [
        "spinach",
        "Baby spinach",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "fresh-coriander",
        "Fresh coriander",
        15,
        "g",
        "Fresh produce"
      ]
    ],
    "steps": [
      "Mushrooms: Wipe clean and cut into thin slices. Fresh ginger: Peel and finely grate. Garlic: Peel and crush with a garlic press, or finely chop. Lime: Wash, cut in half and squeeze into a bowl; remove pips. Baby spinach: Wash and drain. Fresh coriander: Rinse, dry and roughly chop. Prepare these before handling raw meat.",
      "On a separate board, slice chicken into strips about 1cm thick. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Put stock, coconut milk, mushrooms, ginger and garlic in a large saucepan. Bring to a gentle simmer and cook for 8 minutes, stirring; do not let it boil over.",
      "Slide the raw chicken strips into the simmering soup and separate with a clean spoon. Simmer for 10–12 minutes, stirring carefully. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Cook noodles in a separate pan following their packet. Drain carefully and divide between bowls.",
      "Stir spinach into the soup for 2 minutes until wilted.",
      "Turn off the heat. Stir in the fish sauce and half the lime juice, taste with a clean spoon and add more lime juice if wanted. Ladle over the noodles and scatter with coriander."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "mushrooms",
          "fresh-ginger",
          "garlic",
          "lime",
          "spinach",
          "fresh-coriander"
        ],
        "instructions": "Mushrooms: Wipe clean and cut into thin slices. Fresh ginger: Peel and finely grate. Garlic: Peel and crush with a garlic press, or finely chop. Lime: Wash, cut in half and squeeze into a bowl; remove pips. Baby spinach: Wash and drain. Fresh coriander: Rinse, dry and roughly chop. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "chicken-breast"
        ],
        "instructions": "On a separate board, slice chicken into strips about 1cm thick. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Warm the soup base",
        "uses": [
          "mushrooms",
          "fresh-ginger",
          "garlic",
          "coconut-milk",
          "chicken-stock"
        ],
        "instructions": "Put stock, coconut milk, mushrooms, ginger and garlic in a large saucepan. Bring to a gentle simmer and cook for 8 minutes, stirring; do not let it boil over.",
        "check": "Mushrooms have softened and the liquid is gently bubbling.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Heatproof spoon"
        ],
        "sourceStage": 2
      },
      {
        "title": "Poach the chicken",
        "uses": [
          "chicken-breast"
        ],
        "instructions": "Slide the raw chicken strips into the simmering soup and separate with a clean spoon. Simmer for 10–12 minutes, stirring carefully. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "The thickest strips are cooked through.",
        "skills": [],
        "tools": [
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Cook the noodles",
        "uses": [
          "egg-noodles"
        ],
        "instructions": "Cook noodles in a separate pan following their packet. Drain carefully and divide between bowls.",
        "check": "Noodles are tender and separated.",
        "skills": [],
        "tools": [
          "Clean utensils for the action described"
        ],
        "sourceStage": 4
      },
      {
        "title": "Wilt the spinach",
        "uses": [
          "spinach"
        ],
        "instructions": "Stir spinach into the soup for 2 minutes until wilted.",
        "check": "Leaves have softened.",
        "skills": [],
        "tools": [
          "Heatproof spoon"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [
          "fish-sauce",
          "lime",
          "fresh-coriander"
        ],
        "instructions": "Turn off the heat. Stir in the fish sauce and half the lime juice, taste with a clean spoon and add more lime juice if wanted. Ladle over the noodles and scatter with coriander.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "chicken-breast": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "mushrooms": "Wipe clean and cut into thin slices.",
      "fresh-ginger": "Peel and finely grate.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "coconut-milk": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "fish-sauce": "Measure the amount shown.",
      "lime": "Wash, cut in half and squeeze into a bowl; remove pips.",
      "egg-noodles": "Measure the amount shown.",
      "spinach": "Wash and drain.",
      "fresh-coriander": "Rinse, dry and roughly chop."
    },
    "flavour": "Coconut milk softens ginger and lime in a fragrant soup.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Fish",
        "Egg",
        "Wheat",
        "Celery (stock)",
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "chicken-black-bean-enchiladas",
    "title": "Chicken and black bean enchiladas",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 65,
    "servings": 4,
    "cost": 0,
    "description": "Smoky tomato sauce and beans make a generous baked tortilla filling. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Chicken",
      "New to test"
    ],
    "allergens": [
      "Wheat",
      "Milk"
    ],
    "ingredients": [
      [
        "chicken-breast",
        "Boneless skinless chicken breast",
        600,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "peppers",
        "Mixed peppers",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        2,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "ground-cumin",
        "Ground cumin",
        2,
        "tsp",
        "Cupboard"
      ],
      [
        "smoked-paprika",
        "Smoked paprika",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "passata",
        "Passata",
        600,
        "g",
        "Cupboard"
      ],
      [
        "black-beans",
        "Canned black beans, drained weight",
        240,
        "g",
        "Cupboard"
      ],
      [
        "tortillas",
        "Flour tortillas",
        8,
        "whole",
        "Bakery"
      ],
      [
        "cheddar",
        "Cheddar",
        100,
        "g",
        "Chilled"
      ]
    ],
    "steps": [
      "Onion: Peel and finely dice. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
      "On a separate board, cut chicken into 2cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat oil in a large frying pan over medium heat. Soften onion and peppers for 7 minutes. Add chicken and cook for 8–10 minutes, turning regularly. Add garlic, cumin and paprika for the final minute. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Drain and rinse the canned beans. Add them and half the passata to the chicken. Simmer for 5 minutes until hot and thick enough to spoon. Heat oven to 180°C fan / 200°C conventional.",
      "Spoon a little of the remaining passata into a baking dish. Divide filling evenly between the tortillas, roll each around it and arrange seam-side down. Spoon all remaining passata over the rolls.",
      "Grate cheddar over the top. Bake for 20–25 minutes until the sauce bubbles at the centre and cheese is melted.",
      "Leave the dish on a heatproof surface for 3 minutes before serving; use oven gloves."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "peppers",
          "garlic"
        ],
        "instructions": "Onion: Peel and finely dice. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "chicken-breast"
        ],
        "instructions": "On a separate board, cut chicken into 2cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Cook the filling",
        "uses": [
          "chicken-breast",
          "olive-oil",
          "onion",
          "peppers",
          "garlic",
          "ground-cumin",
          "smoked-paprika"
        ],
        "instructions": "Heat oil in a large frying pan over medium heat. Soften onion and peppers for 7 minutes. Add chicken and cook for 8–10 minutes, turning regularly. Add garlic, cumin and paprika for the final minute. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Chicken is fully cooked before filling the tortillas.",
        "skills": [],
        "tools": [
          "Large frying pan",
          "Food thermometer"
        ],
        "sourceStage": 2
      },
      {
        "title": "Add beans and sauce",
        "uses": [
          "black-beans",
          "passata"
        ],
        "instructions": "Drain and rinse the canned beans. Add them and half the passata to the chicken. Simmer for 5 minutes until hot and thick enough to spoon. Heat oven to 180°C fan / 200°C conventional.",
        "check": "Filling is hot and not watery.",
        "skills": [],
        "tools": [
          "Oven gloves"
        ],
        "sourceStage": 3
      },
      {
        "title": "Fill the tortillas",
        "uses": [
          "tortillas",
          "passata"
        ],
        "instructions": "Spoon a little of the remaining passata into a baking dish. Divide filling evenly between the tortillas, roll each around it and arrange seam-side down. Spoon all remaining passata over the rolls.",
        "check": "Rolls fit snugly with their tops covered in sauce.",
        "skills": [],
        "tools": [
          "Baking dish",
          "Spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Bake with cheese",
        "uses": [
          "cheddar"
        ],
        "instructions": "Grate cheddar over the top. Bake for 20–25 minutes until the sauce bubbles at the centre and cheese is melted.",
        "check": "The centre is piping hot.",
        "skills": [],
        "tools": [
          "Grater"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Leave the dish on a heatproof surface for 3 minutes before serving; use oven gloves.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "chicken-breast": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "peppers": "Wash, remove stalks, seeds and white ribs; cut into 2cm squares.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "ground-cumin": "Measure the amount shown.",
      "smoked-paprika": "Measure the amount shown.",
      "passata": "Measure the amount shown.",
      "black-beans": "Use ready-cooked canned beans. Drain and rinse, then weigh the amount shown; buy enough tins to provide that drained weight.",
      "tortillas": "Measure the amount shown.",
      "cheddar": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed."
    },
    "flavour": "Smoky tomato sauce and beans make a generous baked tortilla filling.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Wheat",
        "Milk"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "chicken-caesar-salad",
    "title": "Warm chicken Caesar-style salad with croutons",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 40,
    "servings": 4,
    "cost": 0,
    "description": "A creamy, tangy dressing and crisp croutons turn salad into a full meal. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Chicken",
      "New to test"
    ],
    "allergens": [
      "Wheat",
      "Milk",
      "Egg",
      "Fish (Worcestershire sauce)",
      "Mustard (check mayonnaise)",
      "Fish (check sauce)"
    ],
    "ingredients": [
      [
        "chicken-breast",
        "Boneless skinless chicken breast",
        600,
        "g",
        "Meat & fish"
      ],
      [
        "lettuce",
        "Romaine lettuce",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "bread",
        "Crusty bread",
        200,
        "g",
        "Bakery"
      ],
      [
        "olive-oil",
        "Olive oil",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "mayonnaise",
        "Mayonnaise",
        3,
        "tbsp",
        "Cupboard"
      ],
      [
        "greek-yoghurt",
        "Plain Greek yoghurt",
        100,
        "g",
        "Chilled"
      ],
      [
        "lemon",
        "Lemon",
        1,
        "whole",
        "Fresh produce"
      ],
      [
        "parmesan",
        "Parmesan",
        50,
        "g",
        "Chilled"
      ],
      [
        "worcestershire-sauce",
        "Worcestershire sauce",
        1,
        "tbsp",
        "Cupboard"
      ]
    ],
    "steps": [
      "Romaine lettuce: Separate leaves, wash and dry thoroughly. Lemon: Wash, cut in half and squeeze into a bowl; remove pips. Prepare these before handling raw meat.",
      "Heat oven to 180°C fan / 200°C conventional. Cut bread into 2cm cubes, toss with half the measured oil on a tray, and bake for 10–15 minutes, turning halfway, until crisp.",
      "On a separate board, slice chicken horizontally into cutlets about 1.5cm thick. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the remaining oil in a frying pan over medium heat. Cook cutlets for about 5–7 minutes per side, in batches if needed. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Finely grate the Parmesan. Mix mayonnaise, yoghurt, Worcestershire sauce, half the Parmesan and half the lemon juice in a clean bowl. Taste and add more lemon juice if desired.",
      "Rest cooked chicken on a clean plate off the heat for 3 minutes, then slice. Tear lettuce into bite-size pieces. Toss with dressing and croutons, top with chicken and the remaining Parmesan."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "lettuce",
          "lemon"
        ],
        "instructions": "Romaine lettuce: Separate leaves, wash and dry thoroughly. Lemon: Wash, cut in half and squeeze into a bowl; remove pips. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Toast the croutons",
        "uses": [
          "bread",
          "olive-oil"
        ],
        "instructions": "Heat oven to 180°C fan / 200°C conventional. Cut bread into 2cm cubes, toss with half the measured oil on a tray, and bake for 10–15 minutes, turning halfway, until crisp.",
        "check": "Bread cubes are crisp and golden.",
        "skills": [],
        "tools": [
          "Knife",
          "Board",
          "Baking tray"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "chicken-breast"
        ],
        "instructions": "On a separate board, slice chicken horizontally into cutlets about 1.5cm thick. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 2
      },
      {
        "title": "Cook the chicken",
        "uses": [
          "chicken-breast",
          "olive-oil"
        ],
        "instructions": "Heat the remaining oil in a frying pan over medium heat. Cook cutlets for about 5–7 minutes per side, in batches if needed. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Cutlets are cooked through.",
        "skills": [],
        "tools": [
          "Large frying pan",
          "Food thermometer"
        ],
        "sourceStage": 3
      },
      {
        "title": "Mix the dressing",
        "uses": [
          "mayonnaise",
          "greek-yoghurt",
          "lemon",
          "parmesan",
          "worcestershire-sauce"
        ],
        "instructions": "Finely grate the Parmesan. Mix mayonnaise, yoghurt, Worcestershire sauce, half the Parmesan and half the lemon juice in a clean bowl. Taste and add more lemon juice if desired.",
        "check": "Dressing is smooth and tangy.",
        "skills": [],
        "tools": [
          "Mixing bowl",
          "Grater"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [
          "lettuce",
          "parmesan"
        ],
        "instructions": "Rest cooked chicken on a clean plate off the heat for 3 minutes, then slice. Tear lettuce into bite-size pieces. Toss with dressing and croutons, top with chicken and the remaining Parmesan.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "chicken-breast": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "lettuce": "Separate leaves, wash and dry thoroughly.",
      "bread": "Cut into slices or cubes when instructed.",
      "olive-oil": "Measure the amount shown.",
      "mayonnaise": "Measure the amount shown.",
      "greek-yoghurt": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed.",
      "lemon": "Wash, cut in half and squeeze into a bowl; remove pips.",
      "parmesan": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed.",
      "worcestershire-sauce": "Measure the amount shown."
    },
    "flavour": "A creamy, tangy dressing and crisp croutons turn salad into a full meal.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Wheat",
        "Milk",
        "Egg",
        "Fish (Worcestershire sauce)",
        "Mustard (check mayonnaise)",
        "Fish (check sauce)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "chicken-harissa-chickpea-stew",
    "title": "Harissa chicken and chickpea stew with couscous",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 55,
    "servings": 4,
    "cost": 0,
    "description": "Harissa brings warm chilli flavour, balanced with cool yoghurt. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Chicken",
      "New to test"
    ],
    "allergens": [
      "Wheat",
      "Milk",
      "Celery (stock)",
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "chicken-thighs",
        "Boneless skinless chicken thighs",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "carrots",
        "Carrots",
        200,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "harissa-paste",
        "Harissa paste",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "chopped-tomatoes",
        "Tinned chopped tomatoes",
        400,
        "g",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        300,
        "ml",
        "Cupboard"
      ],
      [
        "chickpeas",
        "Canned chickpeas, drained weight",
        240,
        "g",
        "Cupboard"
      ],
      [
        "couscous",
        "Couscous",
        250,
        "g",
        "Cupboard"
      ],
      [
        "greek-yoghurt",
        "Plain Greek yoghurt",
        100,
        "g",
        "Chilled"
      ]
    ],
    "steps": [
      "Onion: Peel and finely dice. Carrots: Peel and cut into small 1cm cubes. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
      "On a separate board, cut thighs into 3cm pieces. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Reduce heat to medium. Cook onion and carrots in the same pan for 8 minutes, stirring. Add garlic and harissa for 1 minute.",
      "Return chicken and juices. Add tomatoes, stock and drained, rinsed chickpeas. Cover and simmer gently for 25–30 minutes, stirring occasionally. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Put couscous in a heatproof bowl. Add the amount of boiling water stated on its packet, cover and leave for the packet standing time. Fluff by separating grains with a fork.",
      "Serve the stew over couscous, with yoghurt spooned onto individual portions to soften the heat."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "carrots",
          "garlic"
        ],
        "instructions": "Onion: Peel and finely dice. Carrots: Peel and cut into small 1cm cubes. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "On a separate board, cut thighs into 3cm pieces. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Brown the meat",
        "uses": [
          "chicken-thighs",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 2
      },
      {
        "title": "Soften the vegetables",
        "uses": [
          "onion",
          "carrots",
          "garlic",
          "harissa-paste"
        ],
        "instructions": "Reduce heat to medium. Cook onion and carrots in the same pan for 8 minutes, stirring. Add garlic and harissa for 1 minute.",
        "check": "Onion has softened; spices smell fragrant.",
        "skills": [],
        "tools": [
          "Pan from the previous step",
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Simmer the stew",
        "uses": [
          "chicken-thighs",
          "chopped-tomatoes",
          "chicken-stock",
          "chickpeas"
        ],
        "instructions": "Return chicken and juices. Add tomatoes, stock and drained, rinsed chickpeas. Cover and simmer gently for 25–30 minutes, stirring occasionally. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Chicken and carrots are tender and the stew is hot throughout.",
        "skills": [],
        "tools": [
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Hydrate couscous",
        "uses": [
          "couscous"
        ],
        "instructions": "Put couscous in a heatproof bowl. Add the amount of boiling water stated on its packet, cover and leave for the packet standing time. Fluff by separating grains with a fork.",
        "check": "Couscous has no hard grains.",
        "skills": [],
        "tools": [
          "Heatproof bowl",
          "Lid or plate",
          "Fork"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [
          "greek-yoghurt"
        ],
        "instructions": "Serve the stew over couscous, with yoghurt spooned onto individual portions to soften the heat.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "chicken-thighs": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "harissa-paste": "Measure the amount shown.",
      "chopped-tomatoes": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "chickpeas": "Use ready-cooked canned beans. Drain and rinse, then weigh the amount shown; buy enough tins to provide that drained weight.",
      "couscous": "Measure the amount shown.",
      "greek-yoghurt": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed."
    },
    "flavour": "Harissa brings warm chilli flavour, balanced with cool yoghurt.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Wheat",
        "Milk",
        "Celery (stock)",
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "jerk-chicken-rice-beans",
    "title": "Jerk-style chicken with coconut rice and beans",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 60,
    "servings": 4,
    "cost": 0,
    "description": "A spicy jerk coating contrasts with mild coconut rice and cooling cucumber. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Chicken",
      "New to test"
    ],
    "allergens": [
      "Check jerk paste and stock labels"
    ],
    "ingredients": [
      [
        "chicken-thighs",
        "Boneless skinless chicken thighs",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "jerk-paste",
        "Jerk paste",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "vegetable-oil",
        "Vegetable oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "rice",
        "Long-grain rice",
        280,
        "g",
        "Cupboard"
      ],
      [
        "coconut-milk",
        "Coconut milk",
        200,
        "ml",
        "Cupboard"
      ],
      [
        "water",
        "Water",
        360,
        "ml",
        "Kitchen basics"
      ],
      [
        "kidney-beans",
        "Canned kidney beans, drained weight",
        240,
        "g",
        "Cupboard"
      ],
      [
        "spring-onions",
        "Spring onions",
        60,
        "g",
        "Fresh produce"
      ],
      [
        "lime",
        "Lime",
        1,
        "whole",
        "Fresh produce"
      ],
      [
        "cucumber",
        "Cucumber",
        250,
        "g",
        "Fresh produce"
      ]
    ],
    "steps": [
      "Spring onions: Trim, rinse and finely slice. Lime: Wash, cut in half and squeeze into a bowl; remove pips. Cucumber: Wash and dice. Prepare these before handling raw meat.",
      "On a separate board, leave the boneless thighs whole and open them out so they lie flat. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat oven to 190°C fan / 210°C conventional. Mix jerk paste with oil, coat both sides of the chicken and arrange on a lined tray without overlap. Discard any coating left in the raw-chicken bowl and wash utensils. Roast for 25–35 minutes, turning halfway. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Rinse the rice. Put in a lidded saucepan with coconut milk, measured water and spring onions. Bring to a simmer, stir once, cover and turn heat very low. Cook for 15 minutes; check packet guidance for your rice and add a little boiling water if still hard and dry.",
      "Drain and rinse the canned beans. Fold through rice, cover and cook gently for 5 minutes until beans are steaming throughout. Turn off heat and stand covered for 5 minutes.",
      "Rest cooked chicken off the heat for 3 minutes. Serve with the rice, diced cucumber and squeezed lime to taste."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "spring-onions",
          "lime",
          "cucumber"
        ],
        "instructions": "Spring onions: Trim, rinse and finely slice. Lime: Wash, cut in half and squeeze into a bowl; remove pips. Cucumber: Wash and dice. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "On a separate board, leave the boneless thighs whole and open them out so they lie flat. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Coat and roast",
        "uses": [
          "chicken-thighs",
          "jerk-paste",
          "vegetable-oil"
        ],
        "instructions": "Heat oven to 190°C fan / 210°C conventional. Mix jerk paste with oil, coat both sides of the chicken and arrange on a lined tray without overlap. Discard any coating left in the raw-chicken bowl and wash utensils. Roast for 25–35 minutes, turning halfway. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Chicken is cooked through; spice coating is not burnt.",
        "skills": [],
        "tools": [
          "Baking tray",
          "Tongs",
          "Thermometer"
        ],
        "sourceStage": 2
      },
      {
        "title": "Cook coconut rice",
        "uses": [
          "rice",
          "coconut-milk",
          "water",
          "spring-onions"
        ],
        "instructions": "Rinse the rice. Put in a lidded saucepan with coconut milk, measured water and spring onions. Bring to a simmer, stir once, cover and turn heat very low. Cook for 15 minutes; check packet guidance for your rice and add a little boiling water if still hard and dry.",
        "check": "Rice has absorbed most liquid and is nearly tender.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Warm the beans in the rice",
        "uses": [
          "kidney-beans"
        ],
        "instructions": "Drain and rinse the canned beans. Fold through rice, cover and cook gently for 5 minutes until beans are steaming throughout. Turn off heat and stand covered for 5 minutes.",
        "check": "Beans are hot and rice is tender.",
        "skills": [],
        "tools": [
          "Clean utensils for the action described"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [
          "lime",
          "cucumber"
        ],
        "instructions": "Rest cooked chicken off the heat for 3 minutes. Serve with the rice, diced cucumber and squeezed lime to taste.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "chicken-thighs": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "jerk-paste": "Measure the amount shown.",
      "vegetable-oil": "Measure the amount shown.",
      "rice": "Measure the amount shown.",
      "coconut-milk": "Measure the amount shown.",
      "water": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "kidney-beans": "Use ready-cooked canned beans. Drain and rinse, then weigh the amount shown; buy enough tins to provide that drained weight.",
      "spring-onions": "Trim, rinse and finely slice.",
      "lime": "Wash, cut in half and squeeze into a bowl; remove pips.",
      "cucumber": "Wash and dice."
    },
    "flavour": "A spicy jerk coating contrasts with mild coconut rice and cooling cucumber.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Check jerk paste and stock labels"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/jerk-chicken"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/jerk-chicken"
  },
  {
    "id": "chicken-sweetcorn-chowder",
    "title": "Chicken, sweetcorn and potato chowder",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 50,
    "servings": 4,
    "cost": 0,
    "description": "Sweetcorn and leeks add sweetness to a creamy, filling soup. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Chicken",
      "New to test"
    ],
    "allergens": [
      "Milk",
      "Wheat",
      "Celery (stock)",
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "chicken-breast",
        "Boneless skinless chicken breast",
        600,
        "g",
        "Meat & fish"
      ],
      [
        "leeks",
        "Leeks",
        200,
        "g",
        "Fresh produce"
      ],
      [
        "potatoes",
        "Potatoes",
        400,
        "g",
        "Fresh produce"
      ],
      [
        "butter",
        "Butter",
        25,
        "g",
        "Chilled"
      ],
      [
        "plain-flour",
        "Plain flour",
        25,
        "g",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        650,
        "ml",
        "Cupboard"
      ],
      [
        "milk",
        "Milk",
        400,
        "ml",
        "Chilled"
      ],
      [
        "sweetcorn",
        "Frozen sweetcorn",
        250,
        "g",
        "Frozen"
      ],
      [
        "bread",
        "Crusty bread",
        200,
        "g",
        "Bakery"
      ]
    ],
    "steps": [
      "Leeks: Trim roots and tough tops, split lengthways, rinse grit between layers and thinly slice. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat.",
      "On a separate board, cut chicken into 2cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Melt butter in a large saucepan over medium-low heat. Cook leeks for 7 minutes, stirring, until soft. Stir in flour for 1 minute to make a paste.",
      "Add stock a small splash at a time, stirring smooth after each addition. Stir in milk and potatoes. Bring to a gentle simmer and cook for 10 minutes, stirring along the base. Do not boil hard.",
      "Add chicken and frozen sweetcorn. Simmer gently for 12–15 minutes, stirring often, and follow any longer sweetcorn packet time. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "If too thick, loosen with a little hot water. Ladle into bowls and serve with sliced bread."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "leeks",
          "potatoes"
        ],
        "instructions": "Leeks: Trim roots and tough tops, split lengthways, rinse grit between layers and thinly slice. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "chicken-breast"
        ],
        "instructions": "On a separate board, cut chicken into 2cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Start the chowder",
        "uses": [
          "leeks",
          "butter",
          "plain-flour"
        ],
        "instructions": "Melt butter in a large saucepan over medium-low heat. Cook leeks for 7 minutes, stirring, until soft. Stir in flour for 1 minute to make a paste.",
        "check": "Leeks are soft and no dry flour remains.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Heatproof spoon"
        ],
        "sourceStage": 2
      },
      {
        "title": "Add liquid and potatoes",
        "uses": [
          "chicken-stock",
          "milk",
          "potatoes"
        ],
        "instructions": "Add stock a small splash at a time, stirring smooth after each addition. Stir in milk and potatoes. Bring to a gentle simmer and cook for 10 minutes, stirring along the base. Do not boil hard.",
        "check": "Potatoes are beginning to soften; liquid is smooth.",
        "skills": [],
        "tools": [
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Cook the chicken and corn",
        "uses": [
          "chicken-breast",
          "sweetcorn"
        ],
        "instructions": "Add chicken and frozen sweetcorn. Simmer gently for 12–15 minutes, stirring often, and follow any longer sweetcorn packet time. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Chicken is cooked through and potatoes are soft.",
        "skills": [],
        "tools": [
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [
          "bread"
        ],
        "instructions": "If too thick, loosen with a little hot water. Ladle into bowls and serve with sliced bread.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "chicken-breast": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "leeks": "Trim roots and tough tops, split lengthways, rinse grit between layers and thinly slice.",
      "potatoes": "Peel and cut into 2cm chunks.",
      "butter": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed.",
      "plain-flour": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "milk": "Measure the amount shown.",
      "sweetcorn": "Keep frozen until cooking; follow its packet cooking time.",
      "bread": "Cut into slices or cubes when instructed."
    },
    "flavour": "Sweetcorn and leeks add sweetness to a creamy, filling soup.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Milk",
        "Wheat",
        "Celery (stock)",
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "chicken-mushroom-risotto",
    "title": "Chicken and mushroom risotto",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 55,
    "servings": 4,
    "cost": 0,
    "description": "Mushrooms and Parmesan give the rice a deep savoury flavour. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Chicken",
      "New to test"
    ],
    "allergens": [
      "Milk",
      "Celery (stock)",
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "chicken-breast",
        "Boneless skinless chicken breast",
        600,
        "g",
        "Meat & fish"
      ],
      [
        "mushrooms",
        "Mushrooms",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "onion",
        "Onion",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        2,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "risotto-rice",
        "Risotto rice",
        300,
        "g",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        1200,
        "ml",
        "Cupboard"
      ],
      [
        "parmesan",
        "Parmesan",
        60,
        "g",
        "Chilled"
      ],
      [
        "butter",
        "Butter",
        20,
        "g",
        "Chilled"
      ]
    ],
    "steps": [
      "Mushrooms: Wipe clean and cut into thin slices. Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
      "On a separate board, cut chicken into 2cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat oil in a wide pan over medium heat. Cook chicken and mushrooms for 10–12 minutes, turning regularly; use batches if crowded. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Transfer to a clean bowl.",
      "Melt butter in the same pan. Soften onion over medium-low heat for 6 minutes, then garlic for 1 minute. Add dry risotto rice and stir for 1 minute until coated.",
      "Keep prepared stock hot in another saucepan. Add a ladle to the rice and stir until mostly absorbed, then add another. Continue for 20–25 minutes, stirring frequently. Use hot water if stock runs out before rice is tender.",
      "Return cooked chicken, mushrooms and their juices. Stir gently for 3–5 minutes until steaming hot throughout. Turn off heat and stir in finely grated Parmesan.",
      "Serve straight away. Cool any leftover rice quickly in shallow portions and refrigerate ideally within one hour; use within 24 hours and reheat only once."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "mushrooms",
          "onion",
          "garlic"
        ],
        "instructions": "Mushrooms: Wipe clean and cut into thin slices. Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "chicken-breast"
        ],
        "instructions": "On a separate board, cut chicken into 2cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Cook chicken and mushrooms",
        "uses": [
          "chicken-breast",
          "mushrooms",
          "olive-oil"
        ],
        "instructions": "Heat oil in a wide pan over medium heat. Cook chicken and mushrooms for 10–12 minutes, turning regularly; use batches if crowded. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Transfer to a clean bowl.",
        "check": "Chicken is cooked through.",
        "skills": [],
        "tools": [
          "Mixing bowl",
          "Large frying pan",
          "Food thermometer"
        ],
        "sourceStage": 2
      },
      {
        "title": "Toast the rice",
        "uses": [
          "onion",
          "garlic",
          "butter",
          "risotto-rice"
        ],
        "instructions": "Melt butter in the same pan. Soften onion over medium-low heat for 6 minutes, then garlic for 1 minute. Add dry risotto rice and stir for 1 minute until coated.",
        "check": "Rice is glossy and onion is soft.",
        "skills": [],
        "tools": [
          "Pan from the previous step",
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Add stock gradually",
        "uses": [
          "chicken-stock",
          "risotto-rice"
        ],
        "instructions": "Keep prepared stock hot in another saucepan. Add a ladle to the rice and stir until mostly absorbed, then add another. Continue for 20–25 minutes, stirring frequently. Use hot water if stock runs out before rice is tender.",
        "check": "Rice is tender with a slight bite; mixture flows gently rather than sitting dry.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Return chicken and finish",
        "uses": [
          "chicken-breast",
          "mushrooms",
          "parmesan"
        ],
        "instructions": "Return cooked chicken, mushrooms and their juices. Stir gently for 3–5 minutes until steaming hot throughout. Turn off heat and stir in finely grated Parmesan.",
        "check": "Everything is hot throughout and the risotto is creamy.",
        "skills": [],
        "tools": [
          "Heatproof spoon",
          "Grater"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve straight away. Cool any leftover rice quickly in shallow portions and refrigerate ideally within one hour; use within 24 hours and reheat only once.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "chicken-breast": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "mushrooms": "Wipe clean and cut into thin slices.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "risotto-rice": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "parmesan": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed.",
      "butter": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed."
    },
    "flavour": "Mushrooms and Parmesan give the rice a deep savoury flavour.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Milk",
        "Celery (stock)",
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "chicken-cashew-lettuce-cups",
    "title": "Cashew chicken lettuce cups with rice",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 40,
    "servings": 4,
    "cost": 0,
    "description": "Crunchy lettuce and cashews balance a sticky savoury chicken filling. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Chicken",
      "New to test"
    ],
    "allergens": [
      "Cashews",
      "Soya",
      "Wheat"
    ],
    "ingredients": [
      [
        "chicken-breast",
        "Boneless skinless chicken breast",
        600,
        "g",
        "Meat & fish"
      ],
      [
        "carrots",
        "Carrots",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "spring-onions",
        "Spring onions",
        60,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        2,
        "cloves",
        "Fresh produce"
      ],
      [
        "fresh-ginger",
        "Fresh ginger",
        15,
        "g",
        "Fresh produce"
      ],
      [
        "vegetable-oil",
        "Vegetable oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "soy-sauce",
        "Reduced-salt soy sauce",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "honey",
        "Honey",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "lime",
        "Lime",
        1,
        "whole",
        "Fresh produce"
      ],
      [
        "cashews",
        "Unsalted cashews",
        60,
        "g",
        "Cupboard"
      ],
      [
        "lettuce",
        "Romaine lettuce",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "rice",
        "Long-grain rice",
        250,
        "g",
        "Cupboard"
      ]
    ],
    "steps": [
      "Carrots: Peel and cut into small 1cm cubes. Spring onions: Trim, rinse and finely slice. Garlic: Peel and crush with a garlic press, or finely chop. Fresh ginger: Peel and finely grate. Lime: Wash, cut in half and squeeze into a bowl; remove pips. Romaine lettuce: Separate leaves, wash and dry thoroughly. Prepare these before handling raw meat.",
      "On a separate board, cut chicken into small 1cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "Heat oil in a wide frying pan over medium-high heat. Cook carrots for 4 minutes. Add chicken and cook for 8–10 minutes, turning frequently. Add spring onions, garlic and ginger for the final minute. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Stir soy sauce, honey, cashews and a splash of water through the cooked filling. Bubble for 2 minutes until glossy.",
      "Arrange clean dry lettuce leaves on plates. Spoon in the hot chicken mixture and squeeze over lime to taste. Serve rice alongside; fold the leaves around the filling to eat."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "carrots",
          "spring-onions",
          "garlic",
          "fresh-ginger",
          "lime",
          "lettuce"
        ],
        "instructions": "Carrots: Peel and cut into small 1cm cubes. Spring onions: Trim, rinse and finely slice. Garlic: Peel and crush with a garlic press, or finely chop. Fresh ginger: Peel and finely grate. Lime: Wash, cut in half and squeeze into a bowl; remove pips. Romaine lettuce: Separate leaves, wash and dry thoroughly. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "chicken-breast"
        ],
        "instructions": "On a separate board, cut chicken into small 1cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 2
      },
      {
        "title": "Cook chicken and vegetables",
        "uses": [
          "chicken-breast",
          "carrots",
          "spring-onions",
          "garlic",
          "fresh-ginger",
          "vegetable-oil"
        ],
        "instructions": "Heat oil in a wide frying pan over medium-high heat. Cook carrots for 4 minutes. Add chicken and cook for 8–10 minutes, turning frequently. Add spring onions, garlic and ginger for the final minute. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Chicken is fully cooked and carrots have softened.",
        "skills": [],
        "tools": [
          "Large frying pan",
          "Food thermometer"
        ],
        "sourceStage": 3
      },
      {
        "title": "Glaze the filling",
        "uses": [
          "soy-sauce",
          "honey",
          "cashews"
        ],
        "instructions": "Stir soy sauce, honey, cashews and a splash of water through the cooked filling. Bubble for 2 minutes until glossy.",
        "check": "Filling is coated, not swimming in liquid.",
        "skills": [],
        "tools": [
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [
          "lettuce",
          "lime"
        ],
        "instructions": "Arrange clean dry lettuce leaves on plates. Spoon in the hot chicken mixture and squeeze over lime to taste. Serve rice alongside; fold the leaves around the filling to eat.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "chicken-breast": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "spring-onions": "Trim, rinse and finely slice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "fresh-ginger": "Peel and finely grate.",
      "vegetable-oil": "Measure the amount shown.",
      "soy-sauce": "Measure the amount shown.",
      "honey": "Measure the amount shown.",
      "lime": "Wash, cut in half and squeeze into a bowl; remove pips.",
      "cashews": "Measure the amount shown.",
      "lettuce": "Separate leaves, wash and dry thoroughly.",
      "rice": "Measure the amount shown."
    },
    "flavour": "Crunchy lettuce and cashews balance a sticky savoury chicken filling.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Cashews",
        "Soya",
        "Wheat"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "pork-pulled-sliders",
    "title": "Smoky pulled pork rolls with crunchy slaw",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 300,
    "servings": 4,
    "cost": 0,
    "description": "Slow roasting makes the pork tender enough to pull into smoky rolls. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Pork",
      "New to test"
    ],
    "allergens": [
      "Wheat",
      "Egg",
      "Mustard (mayonnaise)",
      "Sulphites (check vinegar)",
      "Mustard (check mayonnaise)"
    ],
    "ingredients": [
      [
        "pork-shoulder",
        "Boneless skinless pork shoulder",
        1000,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        200,
        "g",
        "Fresh produce"
      ],
      [
        "smoked-paprika",
        "Smoked paprika",
        2,
        "tsp",
        "Cupboard"
      ],
      [
        "brown-sugar",
        "Brown sugar",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "cider-vinegar",
        "Cider vinegar",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "water",
        "Water",
        200,
        "ml",
        "Kitchen basics"
      ],
      [
        "bbq-sauce",
        "Barbecue sauce",
        4,
        "tbsp",
        "Cupboard"
      ],
      [
        "bread-rolls",
        "Bread rolls",
        4,
        "whole",
        "Bakery"
      ],
      [
        "cabbage",
        "White cabbage",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "carrots",
        "Carrots",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "mayonnaise",
        "Mayonnaise",
        2,
        "tbsp",
        "Cupboard"
      ]
    ],
    "steps": [
      "Onion: Peel and finely dice. White cabbage: Remove the hard core and finely shred the leaves. Carrots: Peel and coarsely grate the whole carrots. Prepare these before handling raw meat.",
      "Heat oven to 140°C fan / 160°C conventional. Put onion in a deep ovenproof casserole. Rub pork with paprika and sugar, place on top and pour vinegar and water around it. Cover tightly with an oven-safe lid. Wash hands after raw pork.",
      "Roast for 4–5 hours. Check liquid after 2 hours and add a little hot water if the base is drying; replace lid promptly. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. It must also pull apart easily with two forks; if still firm, continue covered and recheck every 30 minutes.",
      "Keep the shredded cabbage. Use the prepared grated carrot. Mix with mayonnaise in a clean bowl and refrigerate until serving.",
      "Rest pork off the heat for 15 minutes. Lift onto a clean board, discard any string and large fatty pieces, then pull apart with forks. Stir through barbecue sauce and enough hot cooking liquid to keep it juicy.",
      "Split rolls, fill with hot pork and serve slaw alongside. Larger joints need extra cooking time; use tenderness as well as the temperature check."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "cabbage",
          "carrots"
        ],
        "instructions": "Onion: Peel and finely dice. White cabbage: Remove the hard core and finely shred the leaves. Carrots: Peel and coarsely grate the whole carrots. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Set up the covered roast",
        "uses": [
          "pork-shoulder",
          "onion",
          "smoked-paprika",
          "brown-sugar",
          "cider-vinegar",
          "water"
        ],
        "instructions": "Heat oven to 140°C fan / 160°C conventional. Put onion in a deep ovenproof casserole. Rub pork with paprika and sugar, place on top and pour vinegar and water around it. Cover tightly with an oven-safe lid. Wash hands after raw pork.",
        "check": "Lid fits tightly and liquid sits around the pork.",
        "skills": [],
        "tools": [
          "Lidded casserole"
        ],
        "sourceStage": 1
      },
      {
        "title": "Cook until it pulls apart",
        "uses": [
          "pork-shoulder"
        ],
        "instructions": "Roast for 4–5 hours. Check liquid after 2 hours and add a little hot water if the base is drying; replace lid promptly. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. It must also pull apart easily with two forks; if still firm, continue covered and recheck every 30 minutes.",
        "check": "Pork is cooked through and shreds without force.",
        "skills": [],
        "tools": [
          "Food thermometer"
        ],
        "sourceStage": 2
      },
      {
        "title": "Mix the slaw",
        "uses": [
          "cabbage",
          "carrots",
          "mayonnaise"
        ],
        "instructions": "Keep the shredded cabbage. Use the prepared grated carrot. Mix with mayonnaise in a clean bowl and refrigerate until serving.",
        "check": "Slaw is coated and chilled.",
        "skills": [],
        "tools": [
          "Mixing bowl",
          "Grater"
        ],
        "sourceStage": 3
      },
      {
        "title": "Pull and sauce",
        "uses": [
          "pork-shoulder",
          "bbq-sauce"
        ],
        "instructions": "Rest pork off the heat for 15 minutes. Lift onto a clean board, discard any string and large fatty pieces, then pull apart with forks. Stir through barbecue sauce and enough hot cooking liquid to keep it juicy.",
        "check": "Pork is shredded and moist.",
        "skills": [],
        "tools": [
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [
          "bread-rolls"
        ],
        "instructions": "Split rolls, fill with hot pork and serve slaw alongside. Larger joints need extra cooking time; use tenderness as well as the temperature check.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "pork-shoulder": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "smoked-paprika": "Measure the amount shown.",
      "brown-sugar": "Measure the amount shown.",
      "cider-vinegar": "Measure the amount shown.",
      "water": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "bbq-sauce": "Measure the amount shown.",
      "bread-rolls": "Measure the amount shown.",
      "cabbage": "Remove the hard core and finely shred the leaves.",
      "carrots": "Peel and coarsely grate the whole carrots for the slaw.",
      "mayonnaise": "Measure the amount shown."
    },
    "flavour": "Slow roasting makes the pork tender enough to pull into smoky rolls.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Wheat",
        "Egg",
        "Mustard (mayonnaise)",
        "Sulphites (check vinegar)",
        "Mustard (check mayonnaise)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/pulled-pork"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/pulled-pork"
  },
  {
    "id": "pork-toad-hole",
    "title": "Toad-in-the-hole with onion gravy and peas",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 75,
    "servings": 4,
    "cost": 0,
    "description": "Crisp Yorkshire-pudding batter, sausages and onion gravy. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Pork",
      "New to test"
    ],
    "allergens": [
      "Wheat",
      "Egg",
      "Milk",
      "Check sausages and gravy"
    ],
    "ingredients": [
      [
        "pork-sausages",
        "Pork sausages",
        8,
        "whole",
        "Meat & fish"
      ],
      [
        "plain-flour",
        "Plain flour",
        140,
        "g",
        "Cupboard"
      ],
      [
        "eggs",
        "Medium eggs",
        3,
        "whole",
        "Chilled"
      ],
      [
        "milk",
        "Milk",
        220,
        "ml",
        "Chilled"
      ],
      [
        "vegetable-oil",
        "Vegetable oil",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "onion",
        "Onion",
        200,
        "g",
        "Fresh produce"
      ],
      [
        "gravy-granules",
        "Onion gravy granules",
        3,
        "tbsp",
        "Cupboard"
      ],
      [
        "water",
        "Water",
        450,
        "ml",
        "Kitchen basics"
      ],
      [
        "frozen-peas",
        "Frozen peas",
        300,
        "g",
        "Frozen"
      ]
    ],
    "steps": [
      "Onion: Peel and finely dice. Prepare these before handling raw meat.",
      "Put flour in a bowl. Beat in eggs, then add milk gradually while whisking until smooth. Leave to stand while the oven heats. Do not taste raw batter.",
      "Heat oven to 200°C fan / 220°C conventional. Put sausages and half the oil in a deep metal roasting tin roughly 25 × 30cm. Roast for 15 minutes, turning halfway.",
      "Using dry oven gloves, set the hot tin on a heatproof surface. Pour batter around the sausages; hot fat may spit. Return immediately to the oven for 30–35 minutes. Keep the oven door shut until the batter is well risen; opening it early can make the batter collapse. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Meanwhile soften onion in the remaining oil in a saucepan over medium-low heat for 15–20 minutes, stirring regularly. Make gravy with the measured granules and water, checking the product dilution and adjusting as directed. Stir into onions and simmer for 3 minutes.",
      "Cook peas in a separate pan following the packet and drain.",
      "Cut the toad-in-the-hole into portions using clean utensils; serve with gravy and peas."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion"
        ],
        "instructions": "Onion: Peel and finely dice. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Mix the batter",
        "uses": [
          "plain-flour",
          "eggs",
          "milk"
        ],
        "instructions": "Put flour in a bowl. Beat in eggs, then add milk gradually while whisking until smooth. Leave to stand while the oven heats. Do not taste raw batter.",
        "check": "Batter is smooth and pourable.",
        "skills": [],
        "tools": [
          "Bowl",
          "Whisk"
        ],
        "sourceStage": 1
      },
      {
        "title": "Start the sausages",
        "uses": [
          "pork-sausages",
          "vegetable-oil"
        ],
        "instructions": "Heat oven to 200°C fan / 220°C conventional. Put sausages and half the oil in a deep metal roasting tin roughly 25 × 30cm. Roast for 15 minutes, turning halfway.",
        "check": "Sausages are beginning to brown; they are not finished.",
        "skills": [],
        "tools": [
          "Metal roasting tin",
          "Oven gloves"
        ],
        "sourceStage": 2
      },
      {
        "title": "Add batter and bake",
        "uses": [
          "plain-flour",
          "eggs",
          "milk"
        ],
        "instructions": "Using dry oven gloves, set the hot tin on a heatproof surface. Pour batter around the sausages; hot fat may spit. Return immediately to the oven for 30–35 minutes. Keep the oven door shut until the batter is well risen; opening it early can make the batter collapse. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Batter is risen and set, not wet underneath; sausages are cooked through.",
        "skills": [],
        "tools": [
          "Oven gloves",
          "Food thermometer"
        ],
        "sourceStage": 3
      },
      {
        "title": "Make gravy",
        "uses": [
          "onion",
          "vegetable-oil",
          "gravy-granules",
          "water"
        ],
        "instructions": "Meanwhile soften onion in the remaining oil in a saucepan over medium-low heat for 15–20 minutes, stirring regularly. Make gravy with the measured granules and water, checking the product dilution and adjusting as directed. Stir into onions and simmer for 3 minutes.",
        "check": "Onions are soft and gravy is hot.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook peas",
        "uses": [
          "frozen-peas"
        ],
        "instructions": "Cook peas in a separate pan following the packet and drain.",
        "check": "Peas are cooked and hot.",
        "skills": [],
        "tools": [
          "Clean utensils for the action described"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Cut the toad-in-the-hole into portions using clean utensils; serve with gravy and peas.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "pork-sausages": "Keep refrigerated. Follow packet cooking guidance if it requires longer than the recipe.",
      "plain-flour": "Measure the amount shown.",
      "eggs": "Crack into a cup, check for shell, then use as the task directs. Wash hands after handling shells.",
      "milk": "Measure the amount shown.",
      "vegetable-oil": "Measure the amount shown.",
      "onion": "Peel and finely dice.",
      "gravy-granules": "Measure the amount shown.",
      "water": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "frozen-peas": "Keep frozen until cooking; follow its packet cooking time."
    },
    "flavour": "Crisp Yorkshire-pudding batter, sausages and onion gravy.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Wheat",
        "Egg",
        "Milk",
        "Check sausages and gravy"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/toad-hole-4-easy-steps"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/toad-hole-4-easy-steps"
  },
  {
    "id": "pork-peanut-noodles",
    "title": "Spicy pork and peanut noodles",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 35,
    "servings": 4,
    "cost": 0,
    "description": "A creamy peanut sauce with a little chilli coats crumbled pork and noodles. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Pork",
      "New to test"
    ],
    "allergens": [
      "Peanuts",
      "Soya",
      "Wheat",
      "Egg"
    ],
    "ingredients": [
      [
        "pork-mince",
        "Pork mince",
        600,
        "g",
        "Meat & fish"
      ],
      [
        "egg-noodles",
        "Dried egg noodles",
        280,
        "g",
        "Cupboard"
      ],
      [
        "cabbage",
        "White cabbage",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "fresh-ginger",
        "Fresh ginger",
        20,
        "g",
        "Fresh produce"
      ],
      [
        "vegetable-oil",
        "Vegetable oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "peanut-butter",
        "Smooth peanut butter",
        3,
        "tbsp",
        "Cupboard"
      ],
      [
        "soy-sauce",
        "Reduced-salt soy sauce",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "chilli-flakes",
        "Chilli flakes",
        0.5,
        "tsp",
        "Cupboard"
      ],
      [
        "water",
        "Water",
        150,
        "ml",
        "Kitchen basics"
      ],
      [
        "lime",
        "Lime",
        1,
        "whole",
        "Fresh produce"
      ]
    ],
    "steps": [
      "White cabbage: Remove the hard core and finely shred the leaves. Garlic: Peel and crush with a garlic press, or finely chop. Fresh ginger: Peel and finely grate. Lime: Wash, cut in half and squeeze into a bowl; remove pips. Prepare these before handling raw meat.",
      "Whisk peanut butter, soy sauce, chilli flakes and the measured warm water in a bowl until smooth.",
      "Heat oil in a wide pan over medium-high heat. Add pork and break up clumps with a spoon. Cook for 8–10 minutes, stirring and turning, then add garlic and ginger for 1 minute. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Add cabbage and a splash of water to the pork. Cook for 4–5 minutes, stirring, until tender.",
      "Cook noodles separately following the packet; drain carefully.",
      "Stir peanut sauce and noodles into the hot pork for 2 minutes until everything is steaming hot. Turn off the heat and squeeze lime over individual bowls to taste."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "cabbage",
          "garlic",
          "fresh-ginger",
          "lime"
        ],
        "instructions": "White cabbage: Remove the hard core and finely shred the leaves. Garlic: Peel and crush with a garlic press, or finely chop. Fresh ginger: Peel and finely grate. Lime: Wash, cut in half and squeeze into a bowl; remove pips. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Mix peanut sauce",
        "uses": [
          "peanut-butter",
          "soy-sauce",
          "chilli-flakes",
          "water"
        ],
        "instructions": "Whisk peanut butter, soy sauce, chilli flakes and the measured warm water in a bowl until smooth.",
        "check": "Sauce is pourable.",
        "skills": [],
        "tools": [
          "Bowl",
          "Whisk"
        ],
        "sourceStage": 1
      },
      {
        "title": "Cook pork mince",
        "uses": [
          "pork-mince",
          "vegetable-oil",
          "garlic",
          "fresh-ginger"
        ],
        "instructions": "Heat oil in a wide pan over medium-high heat. Add pork and break up clumps with a spoon. Cook for 8–10 minutes, stirring and turning, then add garlic and ginger for 1 minute. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Mince is cooked through with no raw clumps.",
        "skills": [],
        "tools": [
          "Large frying pan",
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 2
      },
      {
        "title": "Soften cabbage",
        "uses": [
          "cabbage"
        ],
        "instructions": "Add cabbage and a splash of water to the pork. Cook for 4–5 minutes, stirring, until tender.",
        "check": "Cabbage has softened.",
        "skills": [],
        "tools": [
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Cook noodles",
        "uses": [
          "egg-noodles"
        ],
        "instructions": "Cook noodles separately following the packet; drain carefully.",
        "check": "Noodles are tender.",
        "skills": [],
        "tools": [
          "Clean utensils for the action described"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [
          "lime"
        ],
        "instructions": "Stir peanut sauce and noodles into the hot pork for 2 minutes until everything is steaming hot. Turn off the heat and squeeze lime over individual bowls to taste.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "pork-mince": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "egg-noodles": "Measure the amount shown.",
      "cabbage": "Remove the hard core and finely shred the leaves.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "fresh-ginger": "Peel and finely grate.",
      "vegetable-oil": "Measure the amount shown.",
      "peanut-butter": "Measure the amount shown.",
      "soy-sauce": "Measure the amount shown.",
      "chilli-flakes": "Measure the amount shown.",
      "water": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "lime": "Wash, cut in half and squeeze into a bowl; remove pips."
    },
    "flavour": "A creamy peanut sauce with a little chilli coats crumbled pork and noodles.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Peanuts",
        "Soya",
        "Wheat",
        "Egg"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "pork-sweet-sour-pineapple",
    "title": "Sweet-and-sour pork with pineapple rice",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 40,
    "servings": 4,
    "cost": 0,
    "description": "Pineapple, vinegar and a glossy tomato sauce give sweet-and-sour contrast. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Pork",
      "New to test"
    ],
    "allergens": [
      "Soya",
      "Wheat",
      "Sulphites (check vinegar)"
    ],
    "ingredients": [
      [
        "pork-tenderloin",
        "Pork tenderloin",
        600,
        "g",
        "Meat & fish"
      ],
      [
        "peppers",
        "Mixed peppers",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "onion",
        "Onion",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "pineapple",
        "Canned pineapple chunks in juice, drained weight",
        250,
        "g",
        "Cupboard"
      ],
      [
        "vegetable-oil",
        "Vegetable oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "ketchup",
        "Tomato ketchup",
        3,
        "tbsp",
        "Cupboard"
      ],
      [
        "cider-vinegar",
        "Cider vinegar",
        3,
        "tbsp",
        "Cupboard"
      ],
      [
        "soy-sauce",
        "Reduced-salt soy sauce",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "brown-sugar",
        "Brown sugar",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "cornflour",
        "Cornflour",
        15,
        "g",
        "Cupboard"
      ],
      [
        "water",
        "Water",
        180,
        "ml",
        "Kitchen basics"
      ],
      [
        "rice",
        "Long-grain rice",
        280,
        "g",
        "Cupboard"
      ]
    ],
    "steps": [
      "Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Onion: Peel and finely dice. Prepare these before handling raw meat.",
      "On a separate board, cut pork into 2cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "Mix cornflour with the cold measured water first, then stir in ketchup, vinegar, soy sauce and sugar until smooth.",
      "Heat oil in a wide pan over medium-high heat. Cook pork for 8–10 minutes, turning regularly, in batches if needed. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Transfer to a clean plate. Cook onion and peppers in the same pan for 6–8 minutes until softened.",
      "Drain pineapple. Return pork and add pineapple, then stir the prepared sauce again and pour it in. Bubble for 3–4 minutes, stirring, until glossy and hot throughout.",
      "Spoon over the cooked rice."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "peppers",
          "onion"
        ],
        "instructions": "Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Onion: Peel and finely dice. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "pork-tenderloin"
        ],
        "instructions": "On a separate board, cut pork into 2cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 2
      },
      {
        "title": "Mix the sauce",
        "uses": [
          "ketchup",
          "cider-vinegar",
          "soy-sauce",
          "brown-sugar",
          "cornflour",
          "water"
        ],
        "instructions": "Mix cornflour with the cold measured water first, then stir in ketchup, vinegar, soy sauce and sugar until smooth.",
        "check": "No dry cornflour lumps remain.",
        "skills": [],
        "tools": [
          "Jug",
          "Fork"
        ],
        "sourceStage": 3
      },
      {
        "title": "Cook pork and vegetables",
        "uses": [
          "pork-tenderloin",
          "vegetable-oil",
          "peppers",
          "onion"
        ],
        "instructions": "Heat oil in a wide pan over medium-high heat. Cook pork for 8–10 minutes, turning regularly, in batches if needed. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Transfer to a clean plate. Cook onion and peppers in the same pan for 6–8 minutes until softened.",
        "check": "Pork is cooked through and vegetables are tender.",
        "skills": [],
        "tools": [
          "Large frying pan",
          "Pan from the previous step",
          "Food thermometer"
        ],
        "sourceStage": 4
      },
      {
        "title": "Combine and thicken",
        "uses": [
          "pork-tenderloin",
          "pineapple"
        ],
        "instructions": "Drain pineapple. Return pork and add pineapple, then stir the prepared sauce again and pour it in. Bubble for 3–4 minutes, stirring, until glossy and hot throughout.",
        "check": "Sauce coats the food and has no chalky taste.",
        "skills": [],
        "tools": [
          "Heatproof spoon"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Spoon over the cooked rice.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "pork-tenderloin": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "peppers": "Wash, remove stalks, seeds and white ribs; cut into 2cm squares.",
      "onion": "Peel and finely dice.",
      "pineapple": "Drain, retaining some juice separately if the task asks for it.",
      "vegetable-oil": "Measure the amount shown.",
      "ketchup": "Measure the amount shown.",
      "cider-vinegar": "Measure the amount shown.",
      "soy-sauce": "Measure the amount shown.",
      "brown-sugar": "Measure the amount shown.",
      "cornflour": "Measure the amount shown.",
      "water": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "rice": "Measure the amount shown."
    },
    "flavour": "Pineapple, vinegar and a glossy tomato sauce give sweet-and-sour contrast.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Soya",
        "Wheat",
        "Sulphites (check vinegar)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/sweet-sour-pork"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/sweet-sour-pork"
  },
  {
    "id": "pork-balsamic-roast",
    "title": "Balsamic pork tenderloin with roast vegetables",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 65,
    "servings": 4,
    "cost": 0,
    "description": "Balsamic vinegar and honey make a sharp-sweet pan sauce. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Pork",
      "New to test"
    ],
    "allergens": [
      "Celery (stock)",
      "Sulphites (vinegar)",
      "Sulphites (check vinegar)",
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "pork-tenderloin",
        "Pork tenderloin",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "potatoes",
        "Potatoes",
        700,
        "g",
        "Fresh produce"
      ],
      [
        "carrots",
        "Carrots",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "onion",
        "Onion",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "balsamic-vinegar",
        "Balsamic vinegar",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "honey",
        "Honey",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "dried-thyme",
        "Dried thyme",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "veg-stock",
        "Prepared vegetable stock",
        150,
        "ml",
        "Cupboard"
      ]
    ],
    "steps": [
      "Potatoes: Peel and cut into 2cm chunks. Carrots: Peel and cut into small 1cm cubes. Onion: Peel and finely dice. Prepare these before handling raw meat.",
      "Heat oven to 190°C fan / 210°C conventional. Toss prepared potatoes, carrots and onion with half the oil in a large roasting tin. Spread out and roast for 25 minutes, turning halfway.",
      "Mix vinegar, honey, thyme and stock in a clean jug.",
      "Pat pork dry with kitchen paper; discard paper and wash hands. Heat remaining oil in a frying pan over medium-high heat. Brown the whole tenderloin for 5–6 minutes, turning to colour all sides. It is not cooked yet.",
      "Lay pork on the vegetable tray and pour the glaze around it. Roast for 20–30 minutes, turning vegetables once, until potatoes are tender. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Move pork to a clean board and leave undisturbed off the heat for 5 minutes. Slice and serve with vegetables and the cooked tray sauce; use oven gloves."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "potatoes",
          "carrots",
          "onion"
        ],
        "instructions": "Potatoes: Peel and cut into 2cm chunks. Carrots: Peel and cut into small 1cm cubes. Onion: Peel and finely dice. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Roast vegetables",
        "uses": [
          "potatoes",
          "carrots",
          "onion",
          "olive-oil"
        ],
        "instructions": "Heat oven to 190°C fan / 210°C conventional. Toss prepared potatoes, carrots and onion with half the oil in a large roasting tin. Spread out and roast for 25 minutes, turning halfway.",
        "check": "Vegetables are beginning to soften.",
        "skills": [],
        "tools": [
          "Oven gloves"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare the glaze",
        "uses": [
          "balsamic-vinegar",
          "honey",
          "dried-thyme",
          "veg-stock"
        ],
        "instructions": "Mix vinegar, honey, thyme and stock in a clean jug.",
        "check": "Honey is dissolved.",
        "skills": [],
        "tools": [
          "Measuring jug"
        ],
        "sourceStage": 2
      },
      {
        "title": "Sear the pork",
        "uses": [
          "pork-tenderloin",
          "olive-oil"
        ],
        "instructions": "Pat pork dry with kitchen paper; discard paper and wash hands. Heat remaining oil in a frying pan over medium-high heat. Brown the whole tenderloin for 5–6 minutes, turning to colour all sides. It is not cooked yet.",
        "check": "Pork has colour on the outside.",
        "skills": [],
        "tools": [
          "Large frying pan"
        ],
        "sourceStage": 3
      },
      {
        "title": "Finish in the oven",
        "uses": [
          "pork-tenderloin"
        ],
        "instructions": "Lay pork on the vegetable tray and pour the glaze around it. Roast for 20–30 minutes, turning vegetables once, until potatoes are tender. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Pork is cooked through and vegetables are tender.",
        "skills": [],
        "tools": [
          "Baking tray",
          "Food thermometer"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Move pork to a clean board and leave undisturbed off the heat for 5 minutes. Slice and serve with vegetables and the cooked tray sauce; use oven gloves.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "pork-tenderloin": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "potatoes": "Peel and cut into 2cm chunks.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "onion": "Peel and finely dice.",
      "olive-oil": "Measure the amount shown.",
      "balsamic-vinegar": "Measure the amount shown.",
      "honey": "Measure the amount shown.",
      "dried-thyme": "Measure the amount shown.",
      "veg-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution."
    },
    "flavour": "Balsamic vinegar and honey make a sharp-sweet pan sauce.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Celery (stock)",
        "Sulphites (vinegar)",
        "Sulphites (check vinegar)",
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "pork-white-bean-braise",
    "title": "Pork and white bean tomato braise",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 125,
    "servings": 4,
    "cost": 0,
    "description": "Tender pork and creamy white beans in a herby tomato sauce. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Pork",
      "New to test"
    ],
    "allergens": [
      "Wheat",
      "Celery (stock)",
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "pork-shoulder",
        "Boneless skinless pork shoulder",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "carrots",
        "Carrots",
        200,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "chopped-tomatoes",
        "Tinned chopped tomatoes",
        400,
        "g",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        350,
        "ml",
        "Cupboard"
      ],
      [
        "cannellini-beans",
        "Canned cannellini beans, drained weight",
        480,
        "g",
        "Cupboard"
      ],
      [
        "dried-thyme",
        "Dried thyme",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "bread",
        "Crusty bread",
        200,
        "g",
        "Bakery"
      ]
    ],
    "steps": [
      "Onion: Peel and finely dice. Carrots: Peel and cut into small 1cm cubes. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
      "On a separate board, cut pork into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Lower heat. Cook onion and carrots in the same pan for 8 minutes, stirring. Add garlic for 1 minute, then tomatoes, stock and thyme.",
      "Return pork and juices, cover and simmer very gently for 75–90 minutes, stirring occasionally. Add a little hot water if drying. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep cooking if the pork still resists a fork.",
      "Drain and rinse beans, stir them into the braise and simmer for 10 minutes until steaming throughout.",
      "Serve in bowls with sliced bread for the sauce."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "carrots",
          "garlic"
        ],
        "instructions": "Onion: Peel and finely dice. Carrots: Peel and cut into small 1cm cubes. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "pork-shoulder"
        ],
        "instructions": "On a separate board, cut pork into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Brown the meat",
        "uses": [
          "pork-shoulder",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 2
      },
      {
        "title": "Make the braising liquid",
        "uses": [
          "onion",
          "carrots",
          "garlic",
          "chopped-tomatoes",
          "chicken-stock",
          "dried-thyme"
        ],
        "instructions": "Lower heat. Cook onion and carrots in the same pan for 8 minutes, stirring. Add garlic for 1 minute, then tomatoes, stock and thyme.",
        "check": "Liquid is simmering.",
        "skills": [],
        "tools": [
          "Pan from the previous step",
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Braise until tender",
        "uses": [
          "pork-shoulder"
        ],
        "instructions": "Return pork and juices, cover and simmer very gently for 75–90 minutes, stirring occasionally. Add a little hot water if drying. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep cooking if the pork still resists a fork.",
        "check": "Pork is cooked through and fork-tender.",
        "skills": [],
        "tools": [
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Heat beans",
        "uses": [
          "cannellini-beans"
        ],
        "instructions": "Drain and rinse beans, stir them into the braise and simmer for 10 minutes until steaming throughout.",
        "check": "Beans are hot and sauce coats the pork.",
        "skills": [],
        "tools": [
          "Heatproof spoon"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [
          "bread"
        ],
        "instructions": "Serve in bowls with sliced bread for the sauce.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "pork-shoulder": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "chopped-tomatoes": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "cannellini-beans": "Use ready-cooked canned beans. Drain and rinse, then weigh the amount shown; buy enough tins to provide that drained weight.",
      "dried-thyme": "Measure the amount shown.",
      "bread": "Cut into slices or cubes when instructed."
    },
    "flavour": "Tender pork and creamy white beans in a herby tomato sauce.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Wheat",
        "Celery (stock)",
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "bacon-leek-creamy-spaghetti",
    "title": "Bacon and leek spaghetti",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 35,
    "servings": 4,
    "cost": 0,
    "description": "Sweet leeks and smoky bacon make a creamy pasta sauce without raw egg. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Pork",
      "New to test"
    ],
    "allergens": [
      "Wheat",
      "Milk"
    ],
    "ingredients": [
      [
        "bacon",
        "Bacon rashers",
        250,
        "g",
        "Chilled"
      ],
      [
        "leeks",
        "Leeks",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        2,
        "cloves",
        "Fresh produce"
      ],
      [
        "spaghetti",
        "Spaghetti",
        320,
        "g",
        "Cupboard"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "double-cream",
        "Double cream",
        150,
        "ml",
        "Chilled"
      ],
      [
        "parmesan",
        "Parmesan",
        50,
        "g",
        "Chilled"
      ],
      [
        "frozen-peas",
        "Frozen peas",
        200,
        "g",
        "Frozen"
      ]
    ],
    "steps": [
      "Leeks: Trim roots and tough tops, split lengthways, rinse grit between layers and thinly slice. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
      "Cook spaghetti in boiling water following its packet. Add frozen peas for their full packet cooking time before the pasta is due to finish. Reserve a mug of cooking water using a heatproof jug, then drain.",
      "Use kitchen scissors or a separate board to cut bacon into short strips. Heat oil in a wide frying pan over medium heat and cook bacon for 6–10 minutes, stirring, until thoroughly cooked and steaming hot. Wash equipment after handling raw bacon.",
      "Add leeks to the bacon pan and cook over medium-low heat for 8 minutes, stirring. Add garlic for the final minute.",
      "Add cream and simmer gently for 2 minutes. Finely grate Parmesan, turn off heat and stir it into the sauce.",
      "Toss drained pasta and peas through the sauce. Add reserved pasta water a small splash at a time until the sauce coats the strands. Serve immediately."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "leeks",
          "garlic"
        ],
        "instructions": "Leeks: Trim roots and tough tops, split lengthways, rinse grit between layers and thinly slice. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Cook pasta and peas",
        "uses": [
          "spaghetti",
          "frozen-peas"
        ],
        "instructions": "Cook spaghetti in boiling water following its packet. Add frozen peas for their full packet cooking time before the pasta is due to finish. Reserve a mug of cooking water using a heatproof jug, then drain.",
        "check": "Pasta is tender and peas have cooked for the required time.",
        "skills": [],
        "tools": [
          "Measuring jug"
        ],
        "sourceStage": 1
      },
      {
        "title": "Cook bacon",
        "uses": [
          "bacon",
          "olive-oil"
        ],
        "instructions": "Use kitchen scissors or a separate board to cut bacon into short strips. Heat oil in a wide frying pan over medium heat and cook bacon for 6–10 minutes, stirring, until thoroughly cooked and steaming hot. Wash equipment after handling raw bacon.",
        "check": "Bacon is cooked through.",
        "skills": [],
        "tools": [
          "Large frying pan",
          "Heatproof spoon",
          "Knife and stable board"
        ],
        "sourceStage": 2
      },
      {
        "title": "Soften leeks",
        "uses": [
          "leeks",
          "garlic"
        ],
        "instructions": "Add leeks to the bacon pan and cook over medium-low heat for 8 minutes, stirring. Add garlic for the final minute.",
        "check": "Leeks are soft, not browned hard.",
        "skills": [],
        "tools": [
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Make the sauce",
        "uses": [
          "double-cream",
          "parmesan"
        ],
        "instructions": "Add cream and simmer gently for 2 minutes. Finely grate Parmesan, turn off heat and stir it into the sauce.",
        "check": "Cheese is melted into the cream.",
        "skills": [],
        "tools": [
          "Heatproof spoon",
          "Grater"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Toss drained pasta and peas through the sauce. Add reserved pasta water a small splash at a time until the sauce coats the strands. Serve immediately.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "bacon": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed.",
      "leeks": "Trim roots and tough tops, split lengthways, rinse grit between layers and thinly slice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "spaghetti": "Measure the amount shown.",
      "olive-oil": "Measure the amount shown.",
      "double-cream": "Measure the amount shown.",
      "parmesan": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed.",
      "frozen-peas": "Keep frozen until cooking; follow its packet cooking time."
    },
    "flavour": "Sweet leeks and smoky bacon make a creamy pasta sauce without raw egg.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Wheat",
        "Milk"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "ham-potato-gratin",
    "title": "Ham, leek and potato gratin",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 85,
    "servings": 4,
    "cost": 0,
    "description": "A creamy potato bake using cooked ham and sweet leeks. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Pork",
      "New to test"
    ],
    "allergens": [
      "Milk",
      "Wheat"
    ],
    "ingredients": [
      [
        "cooked-ham",
        "Ready-to-eat cooked ham",
        400,
        "g",
        "Chilled"
      ],
      [
        "leeks",
        "Leeks",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "potatoes",
        "Potatoes",
        800,
        "g",
        "Fresh produce"
      ],
      [
        "milk",
        "Milk",
        500,
        "ml",
        "Chilled"
      ],
      [
        "butter",
        "Butter",
        30,
        "g",
        "Chilled"
      ],
      [
        "plain-flour",
        "Plain flour",
        30,
        "g",
        "Cupboard"
      ],
      [
        "cheddar",
        "Cheddar",
        100,
        "g",
        "Chilled"
      ],
      [
        "frozen-peas",
        "Frozen peas",
        300,
        "g",
        "Frozen"
      ]
    ],
    "steps": [
      "Leeks: Trim roots and tough tops, split lengthways, rinse grit between layers and thinly slice. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat.",
      "Slice the prepared potato chunks into pieces about 5mm thick. Simmer in water for 8–10 minutes until nearly tender, then drain carefully. Heat oven to 180°C fan / 200°C conventional.",
      "Melt butter in a saucepan over medium-low heat. Cook leeks for 8 minutes, stirring, until soft.",
      "Stir flour into leeks for 1 minute. Add milk a small splash at a time, stirring smooth after each addition. Simmer gently for 3–4 minutes until it coats a spoon.",
      "Dice the ready-to-eat ham. Layer ham and potatoes in a deep baking dish, pour over sauce and grate cheddar over the top. Bake for 30–35 minutes until bubbling at the centre and potatoes are fully tender.",
      "Cook peas following the packet and drain.",
      "Leave gratin on a heatproof surface for 5 minutes before serving with peas. The dish remains hot."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "leeks",
          "potatoes"
        ],
        "instructions": "Leeks: Trim roots and tough tops, split lengthways, rinse grit between layers and thinly slice. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Slice and partly cook potatoes",
        "uses": [
          "potatoes"
        ],
        "instructions": "Slice the prepared potato chunks into pieces about 5mm thick. Simmer in water for 8–10 minutes until nearly tender, then drain carefully. Heat oven to 180°C fan / 200°C conventional.",
        "check": "Potatoes bend slightly but still hold their shape.",
        "skills": [],
        "tools": [
          "Oven gloves",
          "Knife and stable board"
        ],
        "sourceStage": 1
      },
      {
        "title": "Cook leeks",
        "uses": [
          "leeks",
          "butter"
        ],
        "instructions": "Melt butter in a saucepan over medium-low heat. Cook leeks for 8 minutes, stirring, until soft.",
        "check": "Leeks are tender.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Heatproof spoon"
        ],
        "sourceStage": 2
      },
      {
        "title": "Make white sauce",
        "uses": [
          "plain-flour",
          "milk"
        ],
        "instructions": "Stir flour into leeks for 1 minute. Add milk a small splash at a time, stirring smooth after each addition. Simmer gently for 3–4 minutes until it coats a spoon.",
        "check": "Sauce is smooth and thickened.",
        "skills": [],
        "tools": [
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Assemble and bake",
        "uses": [
          "cooked-ham",
          "potatoes",
          "cheddar"
        ],
        "instructions": "Dice the ready-to-eat ham. Layer ham and potatoes in a deep baking dish, pour over sauce and grate cheddar over the top. Bake for 30–35 minutes until bubbling at the centre and potatoes are fully tender.",
        "check": "Ham and sauce are steaming hot throughout and potatoes are soft.",
        "skills": [],
        "tools": [
          "Baking dish",
          "Grater",
          "Knife and stable board"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook peas",
        "uses": [
          "frozen-peas"
        ],
        "instructions": "Cook peas following the packet and drain.",
        "check": "Peas are hot.",
        "skills": [],
        "tools": [
          "Clean utensils for the action described"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Leave gratin on a heatproof surface for 5 minutes before serving with peas. The dish remains hot.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "cooked-ham": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed.",
      "leeks": "Trim roots and tough tops, split lengthways, rinse grit between layers and thinly slice.",
      "potatoes": "Peel and cut into 2cm chunks.",
      "milk": "Measure the amount shown.",
      "butter": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed.",
      "plain-flour": "Measure the amount shown.",
      "cheddar": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed.",
      "frozen-peas": "Keep frozen until cooking; follow its packet cooking time."
    },
    "flavour": "A creamy potato bake using cooked ham and sweet leeks.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Milk",
        "Wheat"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "pork-cabbage-rice-pan",
    "title": "Pork, cabbage and caraway rice pan",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 45,
    "servings": 4,
    "cost": 0,
    "description": "Caraway and sweet paprika give this cabbage pan a distinctive warm flavour. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Pork",
      "New to test"
    ],
    "allergens": [
      "Milk",
      "Celery (stock)",
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "pork-mince",
        "Pork mince",
        600,
        "g",
        "Meat & fish"
      ],
      [
        "cabbage",
        "White cabbage",
        350,
        "g",
        "Fresh produce"
      ],
      [
        "onion",
        "Onion",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        2,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "caraway",
        "Caraway seeds",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "sweet-paprika",
        "Sweet paprika",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "chopped-tomatoes",
        "Tinned chopped tomatoes",
        400,
        "g",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        150,
        "ml",
        "Cupboard"
      ],
      [
        "rice",
        "Long-grain rice",
        280,
        "g",
        "Cupboard"
      ],
      [
        "sour-cream",
        "Sour cream",
        100,
        "g",
        "Chilled"
      ]
    ],
    "steps": [
      "White cabbage: Remove the hard core and finely shred the leaves. Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "Heat oil in a deep frying pan over medium-high heat. Add pork mince, break into small clumps and cook for 8–10 minutes, stirring.",
      "Add onion and cabbage. Cook over medium heat for 8 minutes, stirring. Add garlic, caraway and paprika for the final minute.",
      "Stir in tomatoes and stock. Cover and simmer gently for 15 minutes, stirring occasionally. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Serve over rice with sour cream spooned onto each portion."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "cabbage",
          "onion",
          "garlic"
        ],
        "instructions": "White cabbage: Remove the hard core and finely shred the leaves. Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Brown the pork",
        "uses": [
          "pork-mince",
          "olive-oil"
        ],
        "instructions": "Heat oil in a deep frying pan over medium-high heat. Add pork mince, break into small clumps and cook for 8–10 minutes, stirring.",
        "check": "Mince is separated and beginning to brown.",
        "skills": [],
        "tools": [
          "Large frying pan",
          "Heatproof spoon"
        ],
        "sourceStage": 2
      },
      {
        "title": "Soften cabbage and onion",
        "uses": [
          "cabbage",
          "onion",
          "garlic",
          "caraway",
          "sweet-paprika"
        ],
        "instructions": "Add onion and cabbage. Cook over medium heat for 8 minutes, stirring. Add garlic, caraway and paprika for the final minute.",
        "check": "Cabbage is softening.",
        "skills": [],
        "tools": [
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Simmer",
        "uses": [
          "pork-mince",
          "chopped-tomatoes",
          "chicken-stock"
        ],
        "instructions": "Stir in tomatoes and stock. Cover and simmer gently for 15 minutes, stirring occasionally. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Pork is cooked through and cabbage is tender.",
        "skills": [],
        "tools": [
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [
          "sour-cream"
        ],
        "instructions": "Serve over rice with sour cream spooned onto each portion.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "pork-mince": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "cabbage": "Remove the hard core and finely shred the leaves.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "caraway": "Measure the amount shown.",
      "sweet-paprika": "Measure the amount shown.",
      "chopped-tomatoes": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "rice": "Measure the amount shown.",
      "sour-cream": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed."
    },
    "flavour": "Caraway and sweet paprika give this cabbage pan a distinctive warm flavour.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Milk",
        "Celery (stock)",
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "pork-stuffed-courgettes",
    "title": "Pork-stuffed courgette boats",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 70,
    "servings": 4,
    "cost": 0,
    "description": "Tender courgettes hold a savoury pork filling beneath melted cheese. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Pork",
      "New to test"
    ],
    "allergens": [
      "Milk",
      "Wheat"
    ],
    "ingredients": [
      [
        "pork-mince",
        "Pork mince",
        600,
        "g",
        "Meat & fish"
      ],
      [
        "courgette",
        "Courgettes",
        1000,
        "g",
        "Fresh produce"
      ],
      [
        "onion",
        "Onion",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        2,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "passata",
        "Passata",
        500,
        "g",
        "Cupboard"
      ],
      [
        "dried-oregano",
        "Dried oregano",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "cheddar",
        "Cheddar",
        100,
        "g",
        "Chilled"
      ],
      [
        "couscous",
        "Couscous",
        250,
        "g",
        "Cupboard"
      ]
    ],
    "steps": [
      "Courgettes: Wash; follow the task for cutting. Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
      "Heat oven to 180°C fan / 200°C conventional. Halve courgettes lengthways. Use a teaspoon to scoop out the centres, leaving a wall about 1cm thick. Chop the scooped flesh and keep it for the filling. Set shells cut-side up in a baking dish.",
      "Heat oil in a frying pan. Cook onion and chopped courgette centres over medium heat for 6 minutes. Add pork and break up clumps; cook 8–10 minutes, then garlic and oregano for 1 minute. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Stir half the passata into pork and simmer for 5 minutes. Spoon into courgette shells. Pour remaining passata around the boats and scatter grated cheddar over them.",
      "Cover the dish with foil and bake for 20 minutes. Remove foil carefully and bake for 15 minutes more until courgettes are tender and the centre of the filling is steaming hot.",
      "Cover couscous with the boiling water amount stated on its packet in a heatproof bowl. Cover for the packet standing time, then fluff with a fork.",
      "Serve the stuffed boats and their tomato sauce with couscous."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "courgette",
          "onion",
          "garlic"
        ],
        "instructions": "Courgettes: Wash; follow the task for cutting. Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Hollow the courgettes",
        "uses": [
          "courgette"
        ],
        "instructions": "Heat oven to 180°C fan / 200°C conventional. Halve courgettes lengthways. Use a teaspoon to scoop out the centres, leaving a wall about 1cm thick. Chop the scooped flesh and keep it for the filling. Set shells cut-side up in a baking dish.",
        "check": "Shells have intact bases.",
        "skills": [],
        "tools": [
          "Board",
          "Knife",
          "Teaspoon",
          "Baking dish"
        ],
        "sourceStage": 1
      },
      {
        "title": "Cook pork filling",
        "uses": [
          "pork-mince",
          "onion",
          "garlic",
          "olive-oil",
          "dried-oregano"
        ],
        "instructions": "Heat oil in a frying pan. Cook onion and chopped courgette centres over medium heat for 6 minutes. Add pork and break up clumps; cook 8–10 minutes, then garlic and oregano for 1 minute. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Pork is cooked through.",
        "skills": [],
        "tools": [
          "Large frying pan",
          "Food thermometer"
        ],
        "sourceStage": 2
      },
      {
        "title": "Fill the boats",
        "uses": [
          "passata",
          "courgette",
          "cheddar"
        ],
        "instructions": "Stir half the passata into pork and simmer for 5 minutes. Spoon into courgette shells. Pour remaining passata around the boats and scatter grated cheddar over them.",
        "check": "Filling is divided evenly and sauce sits around the shells.",
        "skills": [],
        "tools": [
          "Heatproof spoon",
          "Grater"
        ],
        "sourceStage": 3
      },
      {
        "title": "Bake",
        "uses": [
          "courgette"
        ],
        "instructions": "Cover the dish with foil and bake for 20 minutes. Remove foil carefully and bake for 15 minutes more until courgettes are tender and the centre of the filling is steaming hot.",
        "check": "Courgette walls are tender to a knife.",
        "skills": [],
        "tools": [
          "Clean utensils for the action described"
        ],
        "sourceStage": 4
      },
      {
        "title": "Prepare couscous",
        "uses": [
          "couscous"
        ],
        "instructions": "Cover couscous with the boiling water amount stated on its packet in a heatproof bowl. Cover for the packet standing time, then fluff with a fork.",
        "check": "Grains are tender.",
        "skills": [],
        "tools": [
          "Mixing bowl"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the stuffed boats and their tomato sauce with couscous.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "pork-mince": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "courgette": "Wash; follow the task for cutting.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "passata": "Measure the amount shown.",
      "dried-oregano": "Measure the amount shown.",
      "cheddar": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed.",
      "couscous": "Measure the amount shown."
    },
    "flavour": "Tender courgettes hold a savoury pork filling beneath melted cheese.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Milk",
        "Wheat"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "beef-paprika-goulash",
    "title": "Paprika beef goulash with rice",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 190,
    "servings": 4,
    "cost": 0,
    "description": "Sweet paprika, peppers and caraway make a rich Hungarian-inspired braise. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Beef",
      "New to test"
    ],
    "allergens": [
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "diced-beef",
        "Beef braising steak",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "peppers",
        "Mixed peppers",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "sweet-paprika",
        "Sweet paprika",
        2,
        "tsp",
        "Cupboard"
      ],
      [
        "caraway",
        "Caraway seeds",
        0.5,
        "tsp",
        "Cupboard"
      ],
      [
        "tomato-puree",
        "Tomato purée",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "chopped-tomatoes",
        "Tinned chopped tomatoes",
        400,
        "g",
        "Cupboard"
      ],
      [
        "beef-stock",
        "Prepared beef stock",
        350,
        "ml",
        "Cupboard"
      ],
      [
        "rice",
        "Long-grain rice",
        280,
        "g",
        "Cupboard"
      ]
    ],
    "steps": [
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Prepare these before handling raw meat.",
      "On a separate board, cut braising steak into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Lower heat to medium. Soften onion in the same pan for 7 minutes, stirring. Add garlic and all the other ingredients listed for this task. Stir over medium-low heat for 2 minutes; lower heat if spices catch.",
      "Return beef and its juices. Add the liquid ingredients listed here and stir. Bring to a gentle simmer, cover and cook on very low heat for 2–2½ hours, stirring occasionally. Add a little hot water if the base begins to dry. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Continue cooking if a fork does not pass easily into the meat.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "If the sauce is thin once the meat is tender, uncover and simmer for 5–10 minutes. Serve over rice."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "peppers"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "diced-beef"
        ],
        "instructions": "On a separate board, cut braising steak into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Brown the meat",
        "uses": [
          "diced-beef",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 2
      },
      {
        "title": "Build the braising base",
        "uses": [
          "onion",
          "garlic",
          "peppers",
          "sweet-paprika",
          "caraway",
          "tomato-puree"
        ],
        "instructions": "Lower heat to medium. Soften onion in the same pan for 7 minutes, stirring. Add garlic and all the other ingredients listed for this task. Stir over medium-low heat for 2 minutes; lower heat if spices catch.",
        "check": "Onion is softened and the base smells fragrant.",
        "skills": [],
        "tools": [
          "Pan from the previous step",
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Braise gently",
        "uses": [
          "diced-beef",
          "chopped-tomatoes",
          "beef-stock"
        ],
        "instructions": "Return beef and its juices. Add the liquid ingredients listed here and stir. Bring to a gentle simmer, cover and cook on very low heat for 2–2½ hours, stirring occasionally. Add a little hot water if the base begins to dry. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Continue cooking if a fork does not pass easily into the meat.",
        "check": "Beef is fully cooked and fork-tender.",
        "skills": [],
        "tools": [
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "If the sauce is thin once the meat is tender, uncover and simmer for 5–10 minutes. Serve over rice.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "diced-beef": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "peppers": "Wash, remove stalks, seeds and white ribs; cut into 2cm squares.",
      "sweet-paprika": "Measure the amount shown.",
      "caraway": "Measure the amount shown.",
      "tomato-puree": "Measure the amount shown.",
      "chopped-tomatoes": "Measure the amount shown.",
      "beef-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "rice": "Measure the amount shown."
    },
    "flavour": "Sweet paprika, peppers and caraway make a rich Hungarian-inspired braise.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/beef-goulash"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/beef-goulash"
  },
  {
    "id": "beef-coconut-lemongrass",
    "title": "Slow-braised coconut and lemongrass beef",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 190,
    "servings": 4,
    "cost": 0,
    "description": "A rich coconut curry scented with lemongrass, ginger and warm spices. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Beef",
      "New to test",
      "Curry"
    ],
    "allergens": [
      "Soya",
      "Wheat"
    ],
    "ingredients": [
      [
        "diced-beef",
        "Beef braising steak",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "fresh-ginger",
        "Fresh ginger",
        25,
        "g",
        "Fresh produce"
      ],
      [
        "lemongrass-paste",
        "Lemongrass paste",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "ground-coriander",
        "Ground coriander",
        2,
        "tsp",
        "Cupboard"
      ],
      [
        "turmeric",
        "Ground turmeric",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "chilli-flakes",
        "Chilli flakes",
        0.5,
        "tsp",
        "Cupboard"
      ],
      [
        "coconut-milk",
        "Coconut milk",
        400,
        "ml",
        "Cupboard"
      ],
      [
        "water",
        "Water",
        250,
        "ml",
        "Kitchen basics"
      ],
      [
        "soy-sauce",
        "Reduced-salt soy sauce",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "rice",
        "Long-grain rice",
        280,
        "g",
        "Cupboard"
      ]
    ],
    "steps": [
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Fresh ginger: Peel and finely grate. Prepare these before handling raw meat.",
      "On a separate board, cut braising steak into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Lower heat to medium. Soften onion in the same pan for 7 minutes, stirring. Add garlic and all the other ingredients listed for this task. Stir over medium-low heat for 2 minutes; lower heat if spices catch.",
      "Return beef and its juices. Add the liquid ingredients listed here and stir. Bring to a gentle simmer, cover and cook on very low heat for 2–2½ hours, stirring occasionally. Add a little hot water if the base begins to dry. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Continue cooking if a fork does not pass easily into the meat.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "Once beef is tender, uncover and simmer for 10–15 minutes, stirring frequently, until the sauce clings to it. Serve over rice."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "fresh-ginger"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Fresh ginger: Peel and finely grate. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "diced-beef"
        ],
        "instructions": "On a separate board, cut braising steak into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Brown the meat",
        "uses": [
          "diced-beef",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 2
      },
      {
        "title": "Build the braising base",
        "uses": [
          "onion",
          "garlic",
          "fresh-ginger",
          "lemongrass-paste",
          "ground-coriander",
          "turmeric",
          "chilli-flakes"
        ],
        "instructions": "Lower heat to medium. Soften onion in the same pan for 7 minutes, stirring. Add garlic and all the other ingredients listed for this task. Stir over medium-low heat for 2 minutes; lower heat if spices catch.",
        "check": "Onion is softened and the base smells fragrant.",
        "skills": [],
        "tools": [
          "Pan from the previous step",
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Braise gently",
        "uses": [
          "diced-beef",
          "coconut-milk",
          "water",
          "soy-sauce"
        ],
        "instructions": "Return beef and its juices. Add the liquid ingredients listed here and stir. Bring to a gentle simmer, cover and cook on very low heat for 2–2½ hours, stirring occasionally. Add a little hot water if the base begins to dry. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Continue cooking if a fork does not pass easily into the meat.",
        "check": "Beef is fully cooked and fork-tender.",
        "skills": [],
        "tools": [
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Once beef is tender, uncover and simmer for 10–15 minutes, stirring frequently, until the sauce clings to it. Serve over rice.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "diced-beef": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "fresh-ginger": "Peel and finely grate.",
      "lemongrass-paste": "Measure the amount shown.",
      "ground-coriander": "Measure the amount shown.",
      "turmeric": "Measure the amount shown.",
      "chilli-flakes": "Measure the amount shown.",
      "coconut-milk": "Measure the amount shown.",
      "water": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "soy-sauce": "Measure the amount shown.",
      "rice": "Measure the amount shown."
    },
    "flavour": "A rich coconut curry scented with lemongrass, ginger and warm spices.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Soya",
        "Wheat"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/beef-rendang-turmeric-rice"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/beef-rendang-turmeric-rice"
  },
  {
    "id": "beef-japanese-style-curry",
    "title": "Japanese-style beef, carrot and potato curry",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 190,
    "servings": 4,
    "cost": 0,
    "description": "A mild, thick curry with tender beef and soft root vegetables. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Beef",
      "New to test",
      "Curry"
    ],
    "allergens": [
      "Wheat",
      "Celery (check stock)",
      "Soya"
    ],
    "ingredients": [
      [
        "diced-beef",
        "Beef braising steak",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "carrots",
        "Carrots",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "potatoes",
        "Potatoes",
        400,
        "g",
        "Fresh produce"
      ],
      [
        "curry-powder",
        "Mild curry powder",
        2,
        "tsp",
        "Cupboard"
      ],
      [
        "plain-flour",
        "Plain flour",
        25,
        "g",
        "Cupboard"
      ],
      [
        "beef-stock",
        "Prepared beef stock",
        700,
        "ml",
        "Cupboard"
      ],
      [
        "soy-sauce",
        "Reduced-salt soy sauce",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "ketchup",
        "Tomato ketchup",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "rice",
        "Long-grain rice",
        280,
        "g",
        "Cupboard"
      ]
    ],
    "steps": [
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat.",
      "On a separate board, cut braising steak into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Lower heat to medium. Soften onion in the same pan for 7 minutes, stirring. Add garlic and all the other ingredients listed for this task. Stir over medium-low heat for 2 minutes; lower heat if spices catch.",
      "Return beef and its juices. Add the liquid ingredients listed here and stir. Bring to a gentle simmer, cover and cook on very low heat for 2–2½ hours, stirring occasionally. Add a little hot water if the base begins to dry. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Continue cooking if a fork does not pass easily into the meat.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "Stir carefully so the potatoes do not break up completely; add a little hot water if too thick. Serve over rice."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "potatoes"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "diced-beef"
        ],
        "instructions": "On a separate board, cut braising steak into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Brown the meat",
        "uses": [
          "diced-beef",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 2
      },
      {
        "title": "Build the braising base",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "potatoes",
          "curry-powder",
          "plain-flour"
        ],
        "instructions": "Lower heat to medium. Soften onion in the same pan for 7 minutes, stirring. Add garlic and all the other ingredients listed for this task. Stir over medium-low heat for 2 minutes; lower heat if spices catch.",
        "check": "Onion is softened and the base smells fragrant.",
        "skills": [],
        "tools": [
          "Pan from the previous step",
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Braise gently",
        "uses": [
          "diced-beef",
          "beef-stock",
          "soy-sauce",
          "ketchup"
        ],
        "instructions": "Return beef and its juices. Add the liquid ingredients listed here and stir. Bring to a gentle simmer, cover and cook on very low heat for 2–2½ hours, stirring occasionally. Add a little hot water if the base begins to dry. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Continue cooking if a fork does not pass easily into the meat.",
        "check": "Beef is fully cooked and fork-tender.",
        "skills": [],
        "tools": [
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Stir carefully so the potatoes do not break up completely; add a little hot water if too thick. Serve over rice.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "diced-beef": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "potatoes": "Peel and cut into 2cm chunks.",
      "curry-powder": "Measure the amount shown.",
      "plain-flour": "Measure the amount shown.",
      "beef-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "soy-sauce": "Measure the amount shown.",
      "ketchup": "Measure the amount shown.",
      "rice": "Measure the amount shown."
    },
    "flavour": "A mild, thick curry with tender beef and soft root vegetables.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Wheat",
        "Celery (check stock)",
        "Soya"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "beef-mushroom-barley-soup",
    "title": "Beef, mushroom and barley soup",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 190,
    "servings": 4,
    "cost": 0,
    "description": "Pearl barley thickens a hearty beef and mushroom broth. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Beef",
      "New to test"
    ],
    "allergens": [
      "Celery",
      "Barley (gluten)",
      "Celery (check stock)",
      "Wheat"
    ],
    "ingredients": [
      [
        "diced-beef",
        "Beef braising steak",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "carrots",
        "Carrots",
        200,
        "g",
        "Fresh produce"
      ],
      [
        "celery",
        "Celery",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "mushrooms",
        "Mushrooms",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "pearl-barley",
        "Pearl barley",
        100,
        "g",
        "Cupboard"
      ],
      [
        "dried-thyme",
        "Dried thyme",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "beef-stock",
        "Prepared beef stock",
        1400,
        "ml",
        "Cupboard"
      ],
      [
        "bread",
        "Crusty bread",
        200,
        "g",
        "Bakery"
      ]
    ],
    "steps": [
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Celery: Wash and finely slice. Mushrooms: Wipe clean and cut into thin slices. Prepare these before handling raw meat.",
      "On a separate board, cut braising steak into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Lower heat to medium. Soften onion in the same pan for 7 minutes, stirring. Add garlic and all the other ingredients listed for this task. Stir over medium-low heat for 2 minutes; lower heat if spices catch.",
      "Return beef and its juices. Add the liquid ingredients listed here and stir. Bring to a gentle simmer, cover and cook on very low heat for 2–2½ hours, stirring occasionally. Add a little hot water if the base begins to dry. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Continue cooking if a fork does not pass easily into the meat.",
      "Check barley has no hard centre and vegetables are tender; add hot water if you prefer a thinner soup. Serve with sliced bread."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "celery",
          "mushrooms"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Celery: Wash and finely slice. Mushrooms: Wipe clean and cut into thin slices. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "diced-beef"
        ],
        "instructions": "On a separate board, cut braising steak into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Brown the meat",
        "uses": [
          "diced-beef",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 2
      },
      {
        "title": "Build the braising base",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "celery",
          "mushrooms",
          "pearl-barley",
          "dried-thyme"
        ],
        "instructions": "Lower heat to medium. Soften onion in the same pan for 7 minutes, stirring. Add garlic and all the other ingredients listed for this task. Stir over medium-low heat for 2 minutes; lower heat if spices catch.",
        "check": "Onion is softened and the base smells fragrant.",
        "skills": [],
        "tools": [
          "Pan from the previous step",
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Braise gently",
        "uses": [
          "diced-beef",
          "beef-stock"
        ],
        "instructions": "Return beef and its juices. Add the liquid ingredients listed here and stir. Bring to a gentle simmer, cover and cook on very low heat for 2–2½ hours, stirring occasionally. Add a little hot water if the base begins to dry. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Continue cooking if a fork does not pass easily into the meat.",
        "check": "Beef is fully cooked and fork-tender.",
        "skills": [],
        "tools": [
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [
          "bread"
        ],
        "instructions": "Check barley has no hard centre and vegetables are tender; add hot water if you prefer a thinner soup. Serve with sliced bread.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "diced-beef": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "celery": "Wash and finely slice.",
      "mushrooms": "Wipe clean and cut into thin slices.",
      "pearl-barley": "Measure the amount shown.",
      "dried-thyme": "Measure the amount shown.",
      "beef-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "bread": "Cut into slices or cubes when instructed."
    },
    "flavour": "Pearl barley thickens a hearty beef and mushroom broth.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Celery",
        "Barley (gluten)",
        "Celery (check stock)",
        "Wheat"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "steak-chimichurri-couscous",
    "title": "Steak with parsley chimichurri and couscous",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 40,
    "servings": 4,
    "cost": 0,
    "description": "A fresh vinegar-and-parsley sauce brightens pan-cooked steak. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Beef",
      "New to test"
    ],
    "allergens": [
      "Wheat",
      "Sulphites (vinegar)",
      "Sulphites (check vinegar)"
    ],
    "ingredients": [
      [
        "beef-steak",
        "Beef rump steak",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "fresh-parsley",
        "Fresh parsley",
        30,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        2,
        "cloves",
        "Fresh produce"
      ],
      [
        "red-wine-vinegar",
        "Red wine vinegar",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "olive-oil",
        "Olive oil",
        3,
        "tbsp",
        "Cupboard"
      ],
      [
        "chilli-flakes",
        "Chilli flakes",
        0.25,
        "tsp",
        "Cupboard"
      ],
      [
        "couscous",
        "Couscous",
        280,
        "g",
        "Cupboard"
      ],
      [
        "cucumber",
        "Cucumber",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "lemon",
        "Lemon",
        1,
        "whole",
        "Fresh produce"
      ]
    ],
    "steps": [
      "Fresh parsley: Rinse, dry and finely chop. Garlic: Peel and crush with a garlic press, or finely chop. Cucumber: Wash and dice. Lemon: Wash, cut in half and squeeze into a bowl; remove pips. Prepare these before handling raw meat.",
      "Mix chopped parsley, crushed garlic, vinegar, chilli flakes and two thirds of the measured oil in a clean bowl. Set aside, away from raw steak.",
      "Put couscous in a heatproof bowl and add the packet amount of boiling water. Cover for the packet standing time, fluff with a fork, then add cucumber and lemon juice to taste.",
      "On a separate board, cut steak into strips about 1cm thick. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat remaining oil in a large frying pan over medium-high heat. Cook steak strips in uncrowded batches for about 4–6 minutes, turning until cooked throughout. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Rest cooked steak on a clean plate off the heat for 3 minutes. Serve over couscous with the fresh parsley sauce."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "fresh-parsley",
          "garlic",
          "cucumber",
          "lemon"
        ],
        "instructions": "Fresh parsley: Rinse, dry and finely chop. Garlic: Peel and crush with a garlic press, or finely chop. Cucumber: Wash and dice. Lemon: Wash, cut in half and squeeze into a bowl; remove pips. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Mix the green sauce",
        "uses": [
          "fresh-parsley",
          "garlic",
          "red-wine-vinegar",
          "olive-oil",
          "chilli-flakes"
        ],
        "instructions": "Mix chopped parsley, crushed garlic, vinegar, chilli flakes and two thirds of the measured oil in a clean bowl. Set aside, away from raw steak.",
        "check": "Herbs are evenly coated.",
        "skills": [],
        "tools": [
          "Mixing bowl"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare couscous",
        "uses": [
          "couscous",
          "cucumber",
          "lemon"
        ],
        "instructions": "Put couscous in a heatproof bowl and add the packet amount of boiling water. Cover for the packet standing time, fluff with a fork, then add cucumber and lemon juice to taste.",
        "check": "Couscous is tender and cucumber stays crisp.",
        "skills": [],
        "tools": [
          "Mixing bowl"
        ],
        "sourceStage": 2
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "beef-steak"
        ],
        "instructions": "On a separate board, cut steak into strips about 1cm thick. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 3
      },
      {
        "title": "Cook steak strips",
        "uses": [
          "beef-steak",
          "olive-oil"
        ],
        "instructions": "Heat remaining oil in a large frying pan over medium-high heat. Cook steak strips in uncrowded batches for about 4–6 minutes, turning until cooked throughout. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Steak strips are cooked through.",
        "skills": [],
        "tools": [
          "Large frying pan",
          "Food thermometer"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Rest cooked steak on a clean plate off the heat for 3 minutes. Serve over couscous with the fresh parsley sauce.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "beef-steak": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "fresh-parsley": "Rinse, dry and finely chop.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "red-wine-vinegar": "Measure the amount shown.",
      "olive-oil": "Measure the amount shown.",
      "chilli-flakes": "Measure the amount shown.",
      "couscous": "Measure the amount shown.",
      "cucumber": "Wash and dice.",
      "lemon": "Wash, cut in half and squeeze into a bowl; remove pips."
    },
    "flavour": "A fresh vinegar-and-parsley sauce brightens pan-cooked steak.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Wheat",
        "Sulphites (vinegar)",
        "Sulphites (check vinegar)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "beef-baked-empanadas",
    "title": "Baked beef and olive empanadas",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 80,
    "servings": 4,
    "cost": 0,
    "description": "Handheld beef pastries with cumin, peppers and savoury olives. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Beef",
      "New to test"
    ],
    "allergens": [
      "Wheat",
      "Egg",
      "Milk (some pastry)",
      "Milk (check pastry)"
    ],
    "ingredients": [
      [
        "beef-mince",
        "Lean beef mince",
        500,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "peppers",
        "Mixed peppers",
        200,
        "g",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "ground-cumin",
        "Ground cumin",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "smoked-paprika",
        "Smoked paprika",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "tomato-puree",
        "Tomato purée",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "water",
        "Water",
        100,
        "ml",
        "Kitchen basics"
      ],
      [
        "olives",
        "Pitted olives",
        60,
        "g",
        "Cupboard"
      ],
      [
        "shortcrust-pastry",
        "Ready-rolled shortcrust pastry",
        500,
        "g",
        "Chilled"
      ],
      [
        "eggs",
        "Medium eggs",
        1,
        "whole",
        "Chilled"
      ],
      [
        "lettuce",
        "Romaine lettuce",
        200,
        "g",
        "Fresh produce"
      ],
      [
        "cucumber",
        "Cucumber",
        200,
        "g",
        "Fresh produce"
      ]
    ],
    "steps": [
      "Onion: Peel and finely dice. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Romaine lettuce: Separate leaves, wash and dry thoroughly. Cucumber: Wash and dice. Prepare these before handling raw meat.",
      "Heat oil in a frying pan over medium heat. Soften onion and peppers for 7 minutes. Add beef and break up clumps; cook for 8–10 minutes. Add cumin, paprika and purée, stir for 1 minute, then add water and chopped olives. Simmer for 5 minutes until the mixture is fairly dry. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Spread filling in a shallow bowl and leave for about 20 minutes until no longer hot enough to soften pastry. Do not leave cooked food at room temperature for longer than necessary. Heat oven to 180°C fan / 200°C conventional.",
      "Unroll pastry on its paper. Cut into large equal squares, sharing the pastry evenly for two parcels per person. Divide filling between them, leaving a 1cm clear border. Fold each into a triangle and press edges firmly with a fork.",
      "Beat the egg and brush lightly over the parcels. Cut a small steam slit in each. Bake on a lined tray for 25–30 minutes until golden with cooked bases and steaming-hot centres. Discard unused egg wash.",
      "Leave parcels on a rack for 5 minutes before eating; filling stays hot. Serve with washed lettuce and cucumber."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "peppers",
          "lettuce",
          "cucumber"
        ],
        "instructions": "Onion: Peel and finely dice. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Romaine lettuce: Separate leaves, wash and dry thoroughly. Cucumber: Wash and dice. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Cook the filling",
        "uses": [
          "beef-mince",
          "onion",
          "peppers",
          "olive-oil",
          "ground-cumin",
          "smoked-paprika",
          "tomato-puree",
          "water",
          "olives"
        ],
        "instructions": "Heat oil in a frying pan over medium heat. Soften onion and peppers for 7 minutes. Add beef and break up clumps; cook for 8–10 minutes. Add cumin, paprika and purée, stir for 1 minute, then add water and chopped olives. Simmer for 5 minutes until the mixture is fairly dry. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Beef is cooked through and filling is not watery.",
        "skills": [],
        "tools": [
          "Large frying pan",
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 1
      },
      {
        "title": "Cool the filling",
        "uses": [
          "beef-mince"
        ],
        "instructions": "Spread filling in a shallow bowl and leave for about 20 minutes until no longer hot enough to soften pastry. Do not leave cooked food at room temperature for longer than necessary. Heat oven to 180°C fan / 200°C conventional.",
        "check": "Filling is cool enough to handle.",
        "skills": [],
        "tools": [
          "Mixing bowl",
          "Oven gloves"
        ],
        "sourceStage": 2
      },
      {
        "title": "Fill pastry parcels",
        "uses": [
          "shortcrust-pastry"
        ],
        "instructions": "Unroll pastry on its paper. Cut into large equal squares, sharing the pastry evenly for two parcels per person. Divide filling between them, leaving a 1cm clear border. Fold each into a triangle and press edges firmly with a fork.",
        "check": "Edges are sealed with no filling trapped in the seam.",
        "skills": [],
        "tools": [
          "Knife",
          "Fork",
          "Baking tray"
        ],
        "sourceStage": 3
      },
      {
        "title": "Glaze and bake",
        "uses": [
          "eggs"
        ],
        "instructions": "Beat the egg and brush lightly over the parcels. Cut a small steam slit in each. Bake on a lined tray for 25–30 minutes until golden with cooked bases and steaming-hot centres. Discard unused egg wash.",
        "check": "Pastry is cooked underneath and the centres are hot.",
        "skills": [],
        "tools": [
          "Baking tray",
          "Knife and stable board"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [
          "lettuce",
          "cucumber"
        ],
        "instructions": "Leave parcels on a rack for 5 minutes before eating; filling stays hot. Serve with washed lettuce and cucumber.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "beef-mince": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "peppers": "Wash, remove stalks, seeds and white ribs; cut into 2cm squares.",
      "olive-oil": "Measure the amount shown.",
      "ground-cumin": "Measure the amount shown.",
      "smoked-paprika": "Measure the amount shown.",
      "tomato-puree": "Measure the amount shown.",
      "water": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "olives": "Measure the amount shown.",
      "shortcrust-pastry": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed.",
      "eggs": "Crack into a cup, check for shell, then use as the task directs. Wash hands after handling shells.",
      "lettuce": "Separate leaves, wash and dry thoroughly.",
      "cucumber": "Wash and dice."
    },
    "flavour": "Handheld beef pastries with cumin, peppers and savoury olives.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Wheat",
        "Egg",
        "Milk (some pastry)",
        "Milk (check pastry)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "beef-sloppy-joe-rolls",
    "title": "Smoky sloppy Joe rolls",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 40,
    "servings": 4,
    "cost": 0,
    "description": "A thick, smoky tomato mince filling for soft rolls. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Beef",
      "New to test"
    ],
    "allergens": [
      "Wheat",
      "Fish (Worcestershire sauce)",
      "Egg",
      "Mustard (mayonnaise)",
      "Fish (check sauce)",
      "Mustard (check mayonnaise)"
    ],
    "ingredients": [
      [
        "beef-mince",
        "Lean beef mince",
        600,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "peppers",
        "Mixed peppers",
        200,
        "g",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "passata",
        "Passata",
        350,
        "g",
        "Cupboard"
      ],
      [
        "ketchup",
        "Tomato ketchup",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "worcestershire-sauce",
        "Worcestershire sauce",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "smoked-paprika",
        "Smoked paprika",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "bread-rolls",
        "Bread rolls",
        4,
        "whole",
        "Bakery"
      ],
      [
        "cabbage",
        "White cabbage",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "mayonnaise",
        "Mayonnaise",
        2,
        "tbsp",
        "Cupboard"
      ]
    ],
    "steps": [
      "Onion: Peel and finely dice. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. White cabbage: Remove the hard core and finely shred the leaves. Prepare these before handling raw meat.",
      "Heat oil in a large frying pan over medium heat. Soften onion and peppers for 7 minutes. Add mince, break it up and cook for 8–10 minutes, turning and stirring.",
      "Stir in passata, ketchup, Worcestershire sauce and paprika. Simmer uncovered for 15 minutes, stirring occasionally, until thick enough to sit in a roll without running out. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Mix shredded cabbage with mayonnaise in a clean bowl. Refrigerate until serving.",
      "Split the rolls and spoon in the hot filling. Serve the slaw alongside and provide forks for any filling that escapes."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "peppers",
          "cabbage"
        ],
        "instructions": "Onion: Peel and finely dice. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. White cabbage: Remove the hard core and finely shred the leaves. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Cook mince and vegetables",
        "uses": [
          "beef-mince",
          "onion",
          "peppers",
          "olive-oil"
        ],
        "instructions": "Heat oil in a large frying pan over medium heat. Soften onion and peppers for 7 minutes. Add mince, break it up and cook for 8–10 minutes, turning and stirring.",
        "check": "Mince is broken into small cooked clumps.",
        "skills": [],
        "tools": [
          "Large frying pan",
          "Heatproof spoon"
        ],
        "sourceStage": 1
      },
      {
        "title": "Make the smoky filling",
        "uses": [
          "passata",
          "ketchup",
          "worcestershire-sauce",
          "smoked-paprika",
          "beef-mince"
        ],
        "instructions": "Stir in passata, ketchup, Worcestershire sauce and paprika. Simmer uncovered for 15 minutes, stirring occasionally, until thick enough to sit in a roll without running out. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Mince is cooked through and sauce is thick.",
        "skills": [],
        "tools": [
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 2
      },
      {
        "title": "Mix slaw",
        "uses": [
          "cabbage",
          "mayonnaise"
        ],
        "instructions": "Mix shredded cabbage with mayonnaise in a clean bowl. Refrigerate until serving.",
        "check": "Cabbage is lightly coated.",
        "skills": [],
        "tools": [
          "Mixing bowl"
        ],
        "sourceStage": 3
      },
      {
        "title": "Finish and serve",
        "uses": [
          "bread-rolls"
        ],
        "instructions": "Split the rolls and spoon in the hot filling. Serve the slaw alongside and provide forks for any filling that escapes.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 4
      }
    ],
    "prep": {
      "beef-mince": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "peppers": "Wash, remove stalks, seeds and white ribs; cut into 2cm squares.",
      "olive-oil": "Measure the amount shown.",
      "passata": "Measure the amount shown.",
      "ketchup": "Measure the amount shown.",
      "worcestershire-sauce": "Measure the amount shown.",
      "smoked-paprika": "Measure the amount shown.",
      "bread-rolls": "Measure the amount shown.",
      "cabbage": "Remove the hard core and finely shred the leaves.",
      "mayonnaise": "Measure the amount shown."
    },
    "flavour": "A thick, smoky tomato mince filling for soft rolls.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Wheat",
        "Fish (Worcestershire sauce)",
        "Egg",
        "Mustard (mayonnaise)",
        "Fish (check sauce)",
        "Mustard (check mayonnaise)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "beef-broccoli-black-bean",
    "title": "Beef and broccoli in black bean sauce",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 35,
    "servings": 4,
    "cost": 0,
    "description": "Fermented black bean sauce gives beef and broccoli a deep savoury finish. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Beef",
      "New to test"
    ],
    "allergens": [
      "Soya",
      "Wheat (check sauce)"
    ],
    "ingredients": [
      [
        "beef-steak",
        "Beef rump steak",
        600,
        "g",
        "Meat & fish"
      ],
      [
        "broccoli",
        "Broccoli",
        350,
        "g",
        "Fresh produce"
      ],
      [
        "peppers",
        "Mixed peppers",
        200,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        2,
        "cloves",
        "Fresh produce"
      ],
      [
        "fresh-ginger",
        "Fresh ginger",
        20,
        "g",
        "Fresh produce"
      ],
      [
        "vegetable-oil",
        "Vegetable oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "black-bean-sauce",
        "Black bean stir-fry sauce",
        3,
        "tbsp",
        "Cupboard"
      ],
      [
        "water",
        "Water",
        150,
        "ml",
        "Kitchen basics"
      ],
      [
        "cornflour",
        "Cornflour",
        10,
        "g",
        "Cupboard"
      ],
      [
        "rice",
        "Long-grain rice",
        280,
        "g",
        "Cupboard"
      ]
    ],
    "steps": [
      "Broccoli: Wash and cut into small florets. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Garlic: Peel and crush with a garlic press, or finely chop. Fresh ginger: Peel and finely grate. Prepare these before handling raw meat.",
      "On a separate board, slice steak across the grain into strips about 5mm thick. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "Boil broccoli in a saucepan for 3 minutes, then drain; it will finish in the stir-fry.",
      "Stir cornflour into the cold measured water, then mix in the black bean sauce.",
      "Heat oil in a wide frying pan over high heat. Cook beef in uncrowded batches for 3–5 minutes, turning until cooked throughout. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Transfer to a clean plate.",
      "Cook peppers in the same pan over medium-high heat for 4 minutes. Add garlic and ginger for 30 seconds, then broccoli, beef and the stirred sauce. Bubble for 3 minutes, stirring, until thick and hot throughout.",
      "Serve immediately over rice."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "broccoli",
          "peppers",
          "garlic",
          "fresh-ginger"
        ],
        "instructions": "Broccoli: Wash and cut into small florets. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Garlic: Peel and crush with a garlic press, or finely chop. Fresh ginger: Peel and finely grate. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "beef-steak"
        ],
        "instructions": "On a separate board, slice steak across the grain into strips about 5mm thick. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 1
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 2
      },
      {
        "title": "Part-cook broccoli",
        "uses": [
          "broccoli"
        ],
        "instructions": "Boil broccoli in a saucepan for 3 minutes, then drain; it will finish in the stir-fry.",
        "check": "Stems are beginning to soften.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Mix sauce",
        "uses": [
          "black-bean-sauce",
          "water",
          "cornflour"
        ],
        "instructions": "Stir cornflour into the cold measured water, then mix in the black bean sauce.",
        "check": "No flour lumps remain.",
        "skills": [],
        "tools": [
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook beef",
        "uses": [
          "beef-steak",
          "vegetable-oil"
        ],
        "instructions": "Heat oil in a wide frying pan over high heat. Cook beef in uncrowded batches for 3–5 minutes, turning until cooked throughout. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Transfer to a clean plate.",
        "check": "Beef is cooked through.",
        "skills": [],
        "tools": [
          "Large frying pan",
          "Food thermometer"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish the stir-fry",
        "uses": [
          "broccoli",
          "peppers",
          "garlic",
          "fresh-ginger",
          "beef-steak"
        ],
        "instructions": "Cook peppers in the same pan over medium-high heat for 4 minutes. Add garlic and ginger for 30 seconds, then broccoli, beef and the stirred sauce. Bubble for 3 minutes, stirring, until thick and hot throughout.",
        "check": "Broccoli is tender and sauce coats the food.",
        "skills": [],
        "tools": [
          "Pan from the previous step",
          "Heatproof spoon"
        ],
        "sourceStage": 6
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve immediately over rice.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 7
      }
    ],
    "prep": {
      "beef-steak": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "broccoli": "Wash and cut into small florets.",
      "peppers": "Wash, remove stalks, seeds and white ribs; cut into 2cm squares.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "fresh-ginger": "Peel and finely grate.",
      "vegetable-oil": "Measure the amount shown.",
      "black-bean-sauce": "Measure the amount shown.",
      "water": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "cornflour": "Measure the amount shown.",
      "rice": "Measure the amount shown."
    },
    "flavour": "Fermented black bean sauce gives beef and broccoli a deep savoury finish.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Soya",
        "Wheat (check sauce)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "beef-lemon-orzo-soup",
    "title": "Beef meatball, lemon and orzo soup",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 50,
    "servings": 4,
    "cost": 0,
    "description": "Small meatballs and pasta in a bright lemony broth. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Beef",
      "New to test"
    ],
    "allergens": [
      "Wheat",
      "Egg",
      "Celery (stock)",
      "Celery",
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "beef-mince",
        "Lean beef mince",
        500,
        "g",
        "Meat & fish"
      ],
      [
        "breadcrumbs",
        "Dried breadcrumbs",
        40,
        "g",
        "Cupboard"
      ],
      [
        "eggs",
        "Medium eggs",
        1,
        "whole",
        "Chilled"
      ],
      [
        "dried-oregano",
        "Dried oregano",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "carrots",
        "Carrots",
        200,
        "g",
        "Fresh produce"
      ],
      [
        "celery",
        "Celery",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "onion",
        "Onion",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "beef-stock",
        "Prepared beef stock",
        1400,
        "ml",
        "Cupboard"
      ],
      [
        "orzo",
        "Orzo",
        200,
        "g",
        "Cupboard"
      ],
      [
        "spinach",
        "Baby spinach",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "lemon",
        "Lemon",
        1,
        "whole",
        "Fresh produce"
      ]
    ],
    "steps": [
      "Carrots: Peel and cut into small 1cm cubes. Celery: Wash and finely slice. Onion: Peel and finely dice. Baby spinach: Wash and drain. Lemon: Wash, cut in half and squeeze into a bowl; remove pips. Prepare these before handling raw meat.",
      "Beat egg in a bowl, then gently mix with beef, breadcrumbs and oregano. Roll with clean hands into balls about 2.5cm across. Keep chilled while the soup base cooks. Wash hands and equipment after raw mince.",
      "Heat oil in a large saucepan over medium heat. Cook carrot, celery and onion for 8 minutes, stirring, until beginning to soften.",
      "Add stock and bring to a gentle simmer. Lower meatballs into the liquid with a spoon. Simmer for 15 minutes, turning them gently once. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Add orzo to the bubbling soup and cook for its packet time, stirring along the base so it does not stick. Add hot water if too thick.",
      "Stir spinach into the hot soup for 2 minutes until wilted. Turn off heat and add lemon juice a little at a time to taste before serving."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "carrots",
          "celery",
          "onion",
          "spinach",
          "lemon"
        ],
        "instructions": "Carrots: Peel and cut into small 1cm cubes. Celery: Wash and finely slice. Onion: Peel and finely dice. Baby spinach: Wash and drain. Lemon: Wash, cut in half and squeeze into a bowl; remove pips. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Shape small meatballs",
        "uses": [
          "beef-mince",
          "breadcrumbs",
          "eggs",
          "dried-oregano"
        ],
        "instructions": "Beat egg in a bowl, then gently mix with beef, breadcrumbs and oregano. Roll with clean hands into balls about 2.5cm across. Keep chilled while the soup base cooks. Wash hands and equipment after raw mince.",
        "check": "Balls are evenly sized.",
        "skills": [],
        "tools": [
          "Bowl",
          "Plate"
        ],
        "sourceStage": 1
      },
      {
        "title": "Soften soup vegetables",
        "uses": [
          "carrots",
          "celery",
          "onion",
          "olive-oil"
        ],
        "instructions": "Heat oil in a large saucepan over medium heat. Cook carrot, celery and onion for 8 minutes, stirring, until beginning to soften.",
        "check": "Vegetables have softened slightly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Heatproof spoon"
        ],
        "sourceStage": 2
      },
      {
        "title": "Poach the meatballs",
        "uses": [
          "beef-stock",
          "beef-mince"
        ],
        "instructions": "Add stock and bring to a gentle simmer. Lower meatballs into the liquid with a spoon. Simmer for 15 minutes, turning them gently once. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "The largest meatballs are fully cooked.",
        "skills": [],
        "tools": [
          "Food thermometer"
        ],
        "sourceStage": 3
      },
      {
        "title": "Cook orzo",
        "uses": [
          "orzo"
        ],
        "instructions": "Add orzo to the bubbling soup and cook for its packet time, stirring along the base so it does not stick. Add hot water if too thick.",
        "check": "Orzo has no hard centre.",
        "skills": [],
        "tools": [
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [
          "spinach",
          "lemon"
        ],
        "instructions": "Stir spinach into the hot soup for 2 minutes until wilted. Turn off heat and add lemon juice a little at a time to taste before serving.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "beef-mince": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "breadcrumbs": "Measure the amount shown.",
      "eggs": "Crack into a cup, check for shell, then use as the task directs. Wash hands after handling shells.",
      "dried-oregano": "Measure the amount shown.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "celery": "Wash and finely slice.",
      "onion": "Peel and finely dice.",
      "olive-oil": "Measure the amount shown.",
      "beef-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "orzo": "Measure the amount shown.",
      "spinach": "Wash and drain.",
      "lemon": "Wash, cut in half and squeeze into a bowl; remove pips."
    },
    "flavour": "Small meatballs and pasta in a bright lemony broth.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Wheat",
        "Egg",
        "Celery (stock)",
        "Celery",
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "beef-picadillo-rice",
    "title": "Beef, olive and raisin picadillo with rice",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 45,
    "servings": 4,
    "cost": 0,
    "description": "Olives and a small amount of raisins create a distinctive sweet-savoury mince dish. A development recipe with ingredient amounts for four people; use the portion selector to adjust.",
    "tags": [
      "Beef",
      "New to test"
    ],
    "allergens": [],
    "ingredients": [
      [
        "beef-mince",
        "Lean beef mince",
        600,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "peppers",
        "Mixed peppers",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "ground-cumin",
        "Ground cumin",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "ground-cinnamon",
        "Ground cinnamon",
        0.25,
        "tsp",
        "Cupboard"
      ],
      [
        "chopped-tomatoes",
        "Tinned chopped tomatoes",
        400,
        "g",
        "Cupboard"
      ],
      [
        "olives",
        "Pitted olives",
        70,
        "g",
        "Cupboard"
      ],
      [
        "raisins",
        "Raisins",
        40,
        "g",
        "Cupboard"
      ],
      [
        "water",
        "Water",
        100,
        "ml",
        "Kitchen basics"
      ],
      [
        "rice",
        "Long-grain rice",
        280,
        "g",
        "Cupboard"
      ]
    ],
    "steps": [
      "Onion: Peel and finely dice. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "Heat oil in a deep frying pan over medium heat. Soften onion and peppers for 7 minutes. Add mince and break up clumps; cook for 8–10 minutes, stirring. Add garlic for the final minute.",
      "Stir in cumin and cinnamon, then tomatoes, chopped olives, raisins and the measured water.",
      "Simmer uncovered for 15–20 minutes, stirring occasionally, until thick. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
      "Taste the cooked sauce before adding any salt, because olives are salty. Serve over rice."
    ],
    "beginnerTasks": [
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "peppers",
          "garlic"
        ],
        "instructions": "Onion: Peel and finely dice. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Garlic: Peel and crush with a garlic press, or finely chop. Prepare these before handling raw meat.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 0
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Cook vegetables and mince",
        "uses": [
          "beef-mince",
          "onion",
          "peppers",
          "garlic",
          "olive-oil"
        ],
        "instructions": "Heat oil in a deep frying pan over medium heat. Soften onion and peppers for 7 minutes. Add mince and break up clumps; cook for 8–10 minutes, stirring. Add garlic for the final minute.",
        "check": "Mince is separated and browning.",
        "skills": [],
        "tools": [
          "Large frying pan",
          "Heatproof spoon"
        ],
        "sourceStage": 2
      },
      {
        "title": "Add sweet-savoury flavours",
        "uses": [
          "ground-cumin",
          "ground-cinnamon",
          "chopped-tomatoes",
          "olives",
          "raisins",
          "water"
        ],
        "instructions": "Stir in cumin and cinnamon, then tomatoes, chopped olives, raisins and the measured water.",
        "check": "Spices are distributed through the sauce.",
        "skills": [],
        "tools": [
          "Heatproof spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Simmer",
        "uses": [
          "beef-mince"
        ],
        "instructions": "Simmer uncovered for 15–20 minutes, stirring occasionally, until thick. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder.",
        "check": "Mince is cooked through and raisins have softened.",
        "skills": [],
        "tools": [
          "Food thermometer",
          "Heatproof spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Taste the cooked sauce before adding any salt, because olives are salty. Serve over rice.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 5
      }
    ],
    "prep": {
      "beef-mince": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "peppers": "Wash, remove stalks, seeds and white ribs; cut into 2cm squares.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "ground-cumin": "Measure the amount shown.",
      "ground-cinnamon": "Measure the amount shown.",
      "chopped-tomatoes": "Measure the amount shown.",
      "olives": "Measure the amount shown.",
      "raisins": "Measure the amount shown.",
      "water": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "rice": "Measure the amount shown."
    },
    "flavour": "Olives and a small amount of raisins create a distinctive sweet-savoury mince dish.",
    "family": "Serve hot. Use mild versions of sauces if preferred. Larger quantities may need batches and extra time; do not crowd pans. Check product labels and use-by dates.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [],
    "reference": "https://www.food.gov.uk/safety-hygiene/cooking-your-food"
  },
  {
    "id": "slow-chicken-white-bean",
    "title": "Slow-cooker chicken and white bean chilli",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 410,
    "servings": 4,
    "cost": 0,
    "description": "A mild, creamy white-bean chilli with lime. Slow cooker: LOW for 6 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Chicken",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Celery (check stock)",
      "Milk"
    ],
    "ingredients": [
      [
        "chicken-thighs",
        "Boneless skinless chicken thighs",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "peppers",
        "Mixed peppers",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "cannellini-beans",
        "Canned cannellini beans, drained weight",
        480,
        "g",
        "Cupboard"
      ],
      [
        "ground-cumin",
        "Ground cumin",
        2,
        "tsp",
        "Cupboard"
      ],
      [
        "chilli-flakes",
        "Chilli flakes",
        0.5,
        "tsp",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        350,
        "ml",
        "Cupboard"
      ],
      [
        "sour-cream",
        "Sour cream",
        100,
        "g",
        "Chilled"
      ],
      [
        "lime",
        "Lime",
        1,
        "whole",
        "Fresh produce"
      ],
      [
        "rice",
        "Long-grain rice",
        250,
        "g",
        "Cupboard"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Lime: Wash, cut in half and squeeze into a bowl; remove pips. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 6 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
      "Switch off the cooker, then stir in the measured sour cream. Do not boil after adding it. Stir in the measured lime juice to taste just before serving.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating. For rice, cool ideally within one hour, use within 24 hours and reheat only once."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "peppers",
          "lime"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Lime: Wash, cut in half and squeeze into a bowl; remove pips. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 2
      },
      {
        "title": "Brown the meat",
        "uses": [
          "chicken-thighs",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 3
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "peppers",
          "cannellini-beans",
          "ground-cumin",
          "chilli-flakes",
          "chicken-stock"
        ],
        "instructions": "Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook on LOW",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "Set the slow cooker to LOW and cook for 6 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Food thermometer"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish the sauce",
        "uses": [
          "sour-cream",
          "lime"
        ],
        "instructions": "Switch off the cooker, then stir in the measured sour cream. Do not boil after adding it. Stir in the measured lime juice to taste just before serving.",
        "check": "Finish ingredients are combined and the sauce has the stated consistency.",
        "skills": [],
        "tools": [
          "Cup",
          "Spoon"
        ],
        "sourceStage": 6
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 7
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating. For rice, cool ideally within one hour, use within 24 hours and reheat only once.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 8
      }
    ],
    "prep": {
      "chicken-thighs": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "peppers": "Wash, remove stalks, seeds and white ribs; cut into 2cm squares.",
      "cannellini-beans": "Use ready-cooked canned beans. Drain and rinse, then weigh the amount shown; buy enough tins to provide that drained weight.",
      "ground-cumin": "Measure the amount shown.",
      "chilli-flakes": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "sour-cream": "Keep chilled until needed; grate cheese, dice ham or bacon, or unroll pastry when instructed.",
      "lime": "Wash, cut in half and squeeze into a bowl; remove pips.",
      "rice": "Measure the amount shown."
    },
    "flavour": "A mild, creamy white-bean chilli with lime.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Celery (check stock)",
        "Milk"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/slow-cooker-pulled-chicken"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/slow-cooker-pulled-chicken",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-chicken-honey-garlic",
    "title": "Slow-cooker honey-garlic chicken",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 410,
    "servings": 4,
    "cost": 0,
    "description": "Sweet garlic-soy sauce, thickened at the end. Slow cooker: LOW for 6 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Chicken",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Soya",
      "Wheat",
      "Sulphites (check vinegar)",
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "chicken-thighs",
        "Boneless skinless chicken thighs",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "carrots",
        "Carrots",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "soy-sauce",
        "Reduced-salt soy sauce",
        3,
        "tbsp",
        "Cupboard"
      ],
      [
        "honey",
        "Honey",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "cider-vinegar",
        "Cider vinegar",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        250,
        "ml",
        "Cupboard"
      ],
      [
        "cornflour",
        "Cornflour",
        15,
        "g",
        "Cupboard"
      ],
      [
        "rice",
        "Long-grain rice",
        280,
        "g",
        "Cupboard"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 6 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
      "Mix the cornflour with an equal volume of cold water in a cup. Stir into the cooker, switch to HIGH, cover and cook for 20–30 minutes until thickened.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating. For rice, cool ideally within one hour, use within 24 hours and reheat only once."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "carrots"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 2
      },
      {
        "title": "Brown the meat",
        "uses": [
          "chicken-thighs",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 3
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "soy-sauce",
          "honey",
          "cider-vinegar",
          "chicken-stock"
        ],
        "instructions": "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook on LOW",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "Set the slow cooker to LOW and cook for 6 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Food thermometer"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish the sauce",
        "uses": [
          "cornflour"
        ],
        "instructions": "Mix the cornflour with an equal volume of cold water in a cup. Stir into the cooker, switch to HIGH, cover and cook for 20–30 minutes until thickened.",
        "check": "Finish ingredients are combined and the sauce has the stated consistency.",
        "skills": [],
        "tools": [
          "Cup",
          "Spoon"
        ],
        "sourceStage": 6
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 7
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating. For rice, cool ideally within one hour, use within 24 hours and reheat only once.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 8
      }
    ],
    "prep": {
      "chicken-thighs": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "soy-sauce": "Measure the amount shown.",
      "honey": "Measure the amount shown.",
      "cider-vinegar": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "cornflour": "Measure the amount shown.",
      "rice": "Measure the amount shown."
    },
    "flavour": "Sweet garlic-soy sauce, thickened at the end.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Soya",
        "Wheat",
        "Sulphites (check vinegar)",
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/slow-cooker-pulled-chicken"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/slow-cooker-pulled-chicken",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-chicken-lemon-olive",
    "title": "Slow-cooker lemon, olive and potato chicken",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 410,
    "servings": 4,
    "cost": 0,
    "description": "A herby chicken supper with potatoes cooked in the sauce. Slow cooker: LOW for 6 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Chicken",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Celery (check stock)",
      "Wheat"
    ],
    "ingredients": [
      [
        "chicken-thighs",
        "Boneless skinless chicken thighs",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "potatoes",
        "Potatoes",
        600,
        "g",
        "Fresh produce"
      ],
      [
        "carrots",
        "Carrots",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "olives",
        "Pitted olives",
        70,
        "g",
        "Cupboard"
      ],
      [
        "dried-oregano",
        "Dried oregano",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        350,
        "ml",
        "Cupboard"
      ],
      [
        "lemon",
        "Lemon",
        1,
        "whole",
        "Fresh produce"
      ],
      [
        "bread",
        "Crusty bread",
        150,
        "g",
        "Bakery"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Potatoes: Peel and cut into 2cm chunks. Carrots: Peel and cut into small 1cm cubes. Lemon: Wash, cut in half and squeeze into a bowl; remove pips. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 6 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
      "Stir in the measured lemon juice to taste just before serving.",
      "Slice the bread or split the rolls just before serving.",
      "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "potatoes",
          "carrots",
          "lemon"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Potatoes: Peel and cut into 2cm chunks. Carrots: Peel and cut into small 1cm cubes. Lemon: Wash, cut in half and squeeze into a bowl; remove pips. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 2
      },
      {
        "title": "Brown the meat",
        "uses": [
          "chicken-thighs",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 3
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "potatoes",
          "carrots",
          "olives",
          "dried-oregano",
          "chicken-stock"
        ],
        "instructions": "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook on LOW",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "Set the slow cooker to LOW and cook for 6 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Food thermometer"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish the sauce",
        "uses": [
          "lemon"
        ],
        "instructions": "Stir in the measured lemon juice to taste just before serving.",
        "check": "Finish ingredients are combined and the sauce has the stated consistency.",
        "skills": [],
        "tools": [
          "Cup",
          "Spoon"
        ],
        "sourceStage": 6
      },
      {
        "title": "Prepare the bread",
        "uses": [
          "bread"
        ],
        "instructions": "Slice the bread or split the rolls just before serving.",
        "check": "Bread is portioned.",
        "skills": [],
        "tools": [
          "Board",
          "Bread knife"
        ],
        "sourceStage": 7
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 8
      }
    ],
    "prep": {
      "chicken-thighs": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "potatoes": "Peel and cut into 2cm chunks.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "olives": "Measure the amount shown.",
      "dried-oregano": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "lemon": "Wash, cut in half and squeeze into a bowl; remove pips.",
      "bread": "Cut into slices or cubes when instructed."
    },
    "flavour": "A herby chicken supper with potatoes cooked in the sauce.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Celery (check stock)",
        "Wheat"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/slow-cooker-chicken-casserole"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/slow-cooker-chicken-casserole",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-chicken-apricot",
    "title": "Slow-cooker apricot and chickpea chicken",
    "category": "Chicken",
    "mealType": "Dinner",
    "emoji": "🍗",
    "theme": "golden",
    "time": 410,
    "servings": 4,
    "cost": 0,
    "description": "Apricots add gentle sweetness to a cumin-spiced chicken stew. Slow cooker: LOW for 6 hours, plus preparation and finishing. Serve with mash or oven wedges. Fixed four-portion batch.",
    "tags": [
      "Chicken",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "chicken-thighs",
        "Boneless skinless chicken thighs",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "carrots",
        "Carrots",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "chickpeas",
        "Canned chickpeas, drained weight",
        240,
        "g",
        "Cupboard"
      ],
      [
        "dried-apricots",
        "Dried apricots",
        100,
        "g",
        "Cupboard"
      ],
      [
        "ground-cumin",
        "Ground cumin",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "ground-cinnamon",
        "Ground cinnamon",
        0.25,
        "tsp",
        "Cupboard"
      ],
      [
        "chopped-tomatoes",
        "Tinned chopped tomatoes",
        400,
        "g",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        200,
        "ml",
        "Cupboard"
      ],
      [
        "potatoes",
        "Floury potatoes",
        800,
        "g",
        "Fresh produce"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Peel and finely dice the onion. Peel and crush the garlic. Peel the carrots and cut them into 1 cm cubes. Halve the apricots. Drain and rinse the chickpeas.",
      "Keep the boneless, skinless chicken thighs whole. Take them out of the fridge when you are ready to load the slow cooker or to brown them first. Wash your hands after handling raw chicken.",
      "You can put the raw thighs straight into the slow cooker. For extra colour and flavour, heat 1 tbsp of the olive oil in a heavy frying pan over medium-high heat. Brown the whole thighs for 5–7 minutes per batch, turning to colour both sides, then move straight on to load the cooker.",
      "Put the diced carrots at the bottom of the slow cooker. Add the whole thighs straight from the fridge, or add the browned thighs and any juices if you chose to brown them. Add the onion, garlic, chickpeas, apricots, cumin, cinnamon, tomatoes and stock. If you skipped browning, add 1 tbsp of the olive oil now. Spoon some of the liquid over the thighs and fit the lid.",
      "Set the slow cooker to LOW and cook for about 6 hours with the lid on. Do not use WARM to cook raw food. Once the cooker is running, read the next step so you know when to start your side. When the chicken is due to finish, check it as follows. Check the thickest part of the largest thighs with a clean food thermometer. It should reach at least 75°C for 30 seconds. If the chicken is below temperature or still firm, carry on cooking and check again.",
      "Choose either mash or wedges and start your side while the chicken finishes. For wedges, allow about three quarters of an hour including prep and preheating. Heat the oven to 180°C fan. Scrub the potatoes and cut them lengthways into wedges about 2 cm thick at the widest point. Toss with the tablespoon of olive oil reserved for the side and spread in one layer on a lined tray. Roast for 25–30 minutes, turning halfway through, until golden and tender. For mash, allow about half an hour including prep. Peel the potatoes, cut them into 2.5 cm chunks and cover them with cold water in a saucepan. Bring to the boil, then simmer for 15–20 minutes until a fork slides in easily. Save a little cooking water, drain the potatoes and let them steam-dry briefly. Mash with the tablespoon of olive oil reserved for the side and add a splash of the cooking water if needed.",
      "Serve the chicken and its sauce with your mash or wedges. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables, apricots and chickpeas",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "dried-apricots",
          "chickpeas"
        ],
        "instructions": "Peel and finely dice the onion. Peel and crush the garlic. Peel the carrots and cut them into 1 cm cubes. Halve the apricots. Drain and rinse the chickpeas.",
        "check": "The vegetables, apricots and chickpeas are ready before you handle the chicken.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press",
          "Sieve"
        ],
        "sourceStage": 1
      },
      {
        "title": "Get the whole chicken thighs ready",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "Keep the boneless, skinless chicken thighs whole. Take them out of the fridge when you are ready to load the slow cooker or to brown them first. Wash your hands after handling raw chicken.",
        "check": "The thighs are whole and ready for the cooker.",
        "skills": [],
        "tools": [
          "Tongs"
        ],
        "sourceStage": 2
      },
      {
        "title": "Optional: brown the whole thighs",
        "uses": [
          "chicken-thighs",
          "olive-oil"
        ],
        "instructions": "You can put the raw thighs straight into the slow cooker. For extra colour and flavour, heat 1 tbsp of the olive oil in a heavy frying pan over medium-high heat. Brown the whole thighs for 5–7 minutes per batch, turning to colour both sides, then move straight on to load the cooker.",
        "check": "Go straight to the next step, whether you browned the thighs or kept them raw.",
        "skills": [],
        "tools": [
          "Heavy frying pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 3
      },
      {
        "title": "Load the cooker",
        "uses": [
          "carrots",
          "chicken-thighs",
          "onion",
          "garlic",
          "chickpeas",
          "dried-apricots",
          "ground-cumin",
          "ground-cinnamon",
          "chopped-tomatoes",
          "chicken-stock",
          "olive-oil"
        ],
        "instructions": "Put the diced carrots at the bottom of the slow cooker. Add the whole thighs straight from the fridge, or add the browned thighs and any juices if you chose to brown them. Add the onion, garlic, chickpeas, apricots, cumin, cinnamon, tomatoes and stock. If you skipped browning, add 1 tbsp of the olive oil now. Spoon some of the liquid over the thighs and fit the lid.",
        "check": "The ingredients are in the slow cooker and within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook on LOW",
        "uses": [
          "chicken-thighs"
        ],
        "instructions": "Set the slow cooker to LOW and cook for about 6 hours with the lid on. Do not use WARM to cook raw food. Once the cooker is running, read the next step so you know when to start your side. When the chicken is due to finish, check it as follows. Check the thickest part of the largest thighs with a clean food thermometer. It should reach at least 75°C for 30 seconds. If the chicken is below temperature or still firm, carry on cooking and check again.",
        "check": "The chicken is cooked through and fork-tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Food thermometer"
        ],
        "sourceStage": 5
      },
      {
        "title": "Choose mash or oven wedges",
        "uses": [
          "potatoes",
          "olive-oil"
        ],
        "instructions": "Choose either mash or wedges and start your side while the chicken finishes. For wedges, allow about three quarters of an hour including prep and preheating. Heat the oven to 180°C fan. Scrub the potatoes and cut them lengthways into wedges about 2 cm thick at the widest point. Toss with the tablespoon of olive oil reserved for the side and spread in one layer on a lined tray. Roast for 25–30 minutes, turning halfway through, until golden and tender. For mash, allow about half an hour including prep. Peel the potatoes, cut them into 2.5 cm chunks and cover them with cold water in a saucepan. Bring to the boil, then simmer for 15–20 minutes until a fork slides in easily. Save a little cooking water, drain the potatoes and let them steam-dry briefly. Mash with the tablespoon of olive oil reserved for the side and add a splash of the cooking water if needed.",
        "check": "The mash is soft and smooth, or the wedges are golden and tender in the middle.",
        "skills": [],
        "tools": [
          "Non-slip board, knife and fork",
          "Oven tray and spatula for wedges",
          "Saucepan, colander and masher for mash"
        ],
        "sourceStage": 6
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the chicken and its sauce with your mash or wedges. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 7
      }
    ],
    "prep": {
      "chicken-thighs": "Keep the boneless, skinless thighs whole and chilled until you are ready to cook.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure 1 tbsp for the chicken and set aside a second tablespoon for your chosen potato side.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "chickpeas": "Use ready-cooked canned beans. Drain and rinse, then weigh the amount shown; buy enough tins to provide that drained weight.",
      "dried-apricots": "Cut each apricot in half with clean kitchen scissors.",
      "ground-cumin": "Measure the amount shown.",
      "ground-cinnamon": "Measure the amount shown.",
      "chopped-tomatoes": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "potatoes": "Choose floury potatoes such as Maris Piper. Prepare them in the side step while the slow cooker finishes."
    },
    "flavour": "Apricots add gentle sweetness to a cumin-spiced chicken stew.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Home tester found the original quantities and timings accurate on 26 November 2026. The potato sides are not kitchen-tested with this recipe yet.",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/slow-cooker-chicken-casserole",
      "https://www.bbcgoodfood.com/recipes/slow-cooker-chicken-chasseur"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/slow-cooker-chicken-casserole",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-pork-pear",
    "title": "Slow-cooker pork and pear casserole",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 530,
    "servings": 4,
    "cost": 0,
    "description": "Pears soften into a savoury pork and thyme sauce. Slow cooker: LOW for 8 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Pork",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Sulphites (check vinegar)",
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "pork-shoulder",
        "Boneless skinless pork shoulder",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "pears",
        "Pears",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "carrots",
        "Carrots",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "dried-thyme",
        "Dried thyme",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "cider-vinegar",
        "Cider vinegar",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        350,
        "ml",
        "Cupboard"
      ],
      [
        "cornflour",
        "Cornflour",
        15,
        "g",
        "Cupboard"
      ],
      [
        "potatoes",
        "Potatoes",
        700,
        "g",
        "Fresh produce"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Pears: Wash, core and cut into 2cm chunks. Carrots: Peel and cut into small 1cm cubes. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
      "Mix the cornflour with an equal volume of cold water in a cup. Stir into the cooker, switch to HIGH, cover and cook for 20–30 minutes until thickened.",
      "Near serving time, cover prepared potatoes with water in a pan. Bring to a boil and simmer for 15–20 minutes until a fork slides through. Drain carefully.",
      "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "pears",
          "carrots",
          "potatoes"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Pears: Wash, core and cut into 2cm chunks. Carrots: Peel and cut into small 1cm cubes. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "pork-shoulder"
        ],
        "instructions": "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 2
      },
      {
        "title": "Brown the meat",
        "uses": [
          "pork-shoulder",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 3
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "pears",
          "carrots",
          "dried-thyme",
          "cider-vinegar",
          "chicken-stock"
        ],
        "instructions": "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook on LOW",
        "uses": [
          "pork-shoulder"
        ],
        "instructions": "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Food thermometer"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish the sauce",
        "uses": [
          "cornflour"
        ],
        "instructions": "Mix the cornflour with an equal volume of cold water in a cup. Stir into the cooker, switch to HIGH, cover and cook for 20–30 minutes until thickened.",
        "check": "Finish ingredients are combined and the sauce has the stated consistency.",
        "skills": [],
        "tools": [
          "Cup",
          "Spoon"
        ],
        "sourceStage": 6
      },
      {
        "title": "Boil potatoes",
        "uses": [
          "potatoes"
        ],
        "instructions": "Near serving time, cover prepared potatoes with water in a pan. Bring to a boil and simmer for 15–20 minutes until a fork slides through. Drain carefully.",
        "check": "Potatoes are tender.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Colander"
        ],
        "sourceStage": 7
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 8
      }
    ],
    "prep": {
      "pork-shoulder": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "pears": "Wash, core and cut into 2cm chunks.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "dried-thyme": "Measure the amount shown.",
      "cider-vinegar": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "cornflour": "Measure the amount shown.",
      "potatoes": "Peel and cut into 2cm chunks."
    },
    "flavour": "Pears soften into a savoury pork and thyme sauce.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Sulphites (check vinegar)",
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/slow-cooker-pork-casserole"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/slow-cooker-pork-casserole",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-pork-orange-cumin",
    "title": "Slow-cooker orange and cumin pork rolls",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 530,
    "servings": 4,
    "cost": 0,
    "description": "Citrus and cumin season tender pork for soft rolls. Slow cooker: LOW for 8 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Pork",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Celery (check stock)",
      "Wheat"
    ],
    "ingredients": [
      [
        "pork-shoulder",
        "Boneless skinless pork shoulder",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "peppers",
        "Mixed peppers",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "ground-cumin",
        "Ground cumin",
        2,
        "tsp",
        "Cupboard"
      ],
      [
        "smoked-paprika",
        "Smoked paprika",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "tomato-puree",
        "Tomato purée",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "orange",
        "Orange juice",
        200,
        "ml",
        "Chilled"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        150,
        "ml",
        "Cupboard"
      ],
      [
        "bread-rolls",
        "Bread rolls",
        4,
        "whole",
        "Bakery"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
      "Slice the bread or split the rolls just before serving.",
      "Use two clean forks to pull the cooked pork into small strands. Moisten with its hot sauce, fill the split rolls and serve immediately."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "peppers"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "pork-shoulder"
        ],
        "instructions": "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 2
      },
      {
        "title": "Brown the meat",
        "uses": [
          "pork-shoulder",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 3
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "peppers",
          "ground-cumin",
          "smoked-paprika",
          "tomato-puree",
          "orange",
          "chicken-stock"
        ],
        "instructions": "Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook on LOW",
        "uses": [
          "pork-shoulder"
        ],
        "instructions": "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Food thermometer"
        ],
        "sourceStage": 5
      },
      {
        "title": "Prepare the bread",
        "uses": [
          "bread-rolls"
        ],
        "instructions": "Slice the bread or split the rolls just before serving.",
        "check": "Bread is portioned.",
        "skills": [],
        "tools": [
          "Board",
          "Bread knife"
        ],
        "sourceStage": 6
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Use two clean forks to pull the cooked pork into small strands. Moisten with its hot sauce, fill the split rolls and serve immediately.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 7
      }
    ],
    "prep": {
      "pork-shoulder": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "peppers": "Wash, remove stalks, seeds and white ribs; cut into 2cm squares.",
      "ground-cumin": "Measure the amount shown.",
      "smoked-paprika": "Measure the amount shown.",
      "tomato-puree": "Measure the amount shown.",
      "orange": "Measure the amount shown; use juice, not cordial.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "bread-rolls": "Measure the amount shown."
    },
    "flavour": "Citrus and cumin season tender pork for soft rolls.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Celery (check stock)",
        "Wheat"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/slow-cooker-pork-shoulder"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/slow-cooker-pork-shoulder",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-pork-mushroom-mustard",
    "title": "Slow-cooker mustard and mushroom pork",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 530,
    "servings": 4,
    "cost": 0,
    "description": "A creamy mustard sauce added after the pork becomes tender. Slow cooker: LOW for 8 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Pork",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Mustard",
      "Celery (check stock)",
      "Milk"
    ],
    "ingredients": [
      [
        "pork-shoulder",
        "Boneless skinless pork shoulder",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "mushrooms",
        "Mushrooms",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "carrots",
        "Carrots",
        200,
        "g",
        "Fresh produce"
      ],
      [
        "dijon-mustard",
        "Dijon mustard",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "dried-thyme",
        "Dried thyme",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        300,
        "ml",
        "Cupboard"
      ],
      [
        "double-cream",
        "Double cream",
        100,
        "ml",
        "Chilled"
      ],
      [
        "cornflour",
        "Cornflour",
        15,
        "g",
        "Cupboard"
      ],
      [
        "potatoes",
        "Potatoes",
        700,
        "g",
        "Fresh produce"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mushrooms: Wipe clean and cut into thin slices. Carrots: Peel and cut into small 1cm cubes. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
      "Mix the cornflour with an equal volume of cold water in a cup. Stir into the cooker, switch to HIGH, cover and cook for 20–30 minutes until thickened. Switch off the cooker, then stir in the measured double cream. Do not boil after adding it.",
      "Near serving time, cover prepared potatoes with water in a pan. Bring to a boil and simmer for 15–20 minutes until a fork slides through. Drain carefully.",
      "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "mushrooms",
          "carrots",
          "potatoes"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mushrooms: Wipe clean and cut into thin slices. Carrots: Peel and cut into small 1cm cubes. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "pork-shoulder"
        ],
        "instructions": "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 2
      },
      {
        "title": "Brown the meat",
        "uses": [
          "pork-shoulder",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 3
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "mushrooms",
          "carrots",
          "dijon-mustard",
          "dried-thyme",
          "chicken-stock"
        ],
        "instructions": "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook on LOW",
        "uses": [
          "pork-shoulder"
        ],
        "instructions": "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Food thermometer"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish the sauce",
        "uses": [
          "double-cream",
          "cornflour"
        ],
        "instructions": "Mix the cornflour with an equal volume of cold water in a cup. Stir into the cooker, switch to HIGH, cover and cook for 20–30 minutes until thickened. Switch off the cooker, then stir in the measured double cream. Do not boil after adding it.",
        "check": "Finish ingredients are combined and the sauce has the stated consistency.",
        "skills": [],
        "tools": [
          "Cup",
          "Spoon"
        ],
        "sourceStage": 6
      },
      {
        "title": "Boil potatoes",
        "uses": [
          "potatoes"
        ],
        "instructions": "Near serving time, cover prepared potatoes with water in a pan. Bring to a boil and simmer for 15–20 minutes until a fork slides through. Drain carefully.",
        "check": "Potatoes are tender.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Colander"
        ],
        "sourceStage": 7
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 8
      }
    ],
    "prep": {
      "pork-shoulder": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "mushrooms": "Wipe clean and cut into thin slices.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "dijon-mustard": "Measure the amount shown.",
      "dried-thyme": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "double-cream": "Measure the amount shown.",
      "cornflour": "Measure the amount shown.",
      "potatoes": "Peel and cut into 2cm chunks."
    },
    "flavour": "A creamy mustard sauce added after the pork becomes tender.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Mustard",
        "Celery (check stock)",
        "Milk"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/slow-cooker-pork-casserole"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/slow-cooker-pork-casserole",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-sausage-bean",
    "title": "Slow-cooker sausage and smoky bean casserole",
    "category": "Pork",
    "mealType": "Dinner",
    "emoji": "🍖",
    "theme": "peach",
    "time": 530,
    "servings": 4,
    "cost": 0,
    "description": "Sausages and canned white beans in a smoky tomato sauce. Slow cooker: LOW for 8 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Pork",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Celery (check stock)",
      "Wheat"
    ],
    "ingredients": [
      [
        "pork-sausages",
        "Pork sausages",
        8,
        "whole",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "peppers",
        "Mixed peppers",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "cannellini-beans",
        "Canned cannellini beans, drained weight",
        480,
        "g",
        "Cupboard"
      ],
      [
        "smoked-paprika",
        "Smoked paprika",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "chopped-tomatoes",
        "Tinned chopped tomatoes",
        400,
        "g",
        "Cupboard"
      ],
      [
        "chicken-stock",
        "Prepared chicken stock",
        200,
        "ml",
        "Cupboard"
      ],
      [
        "bread",
        "Crusty bread",
        200,
        "g",
        "Bakery"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "On a separate board, cut each sausage into chunky pieces. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
      "Slice the bread or split the rolls just before serving.",
      "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "peppers"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "pork-sausages"
        ],
        "instructions": "On a separate board, cut each sausage into chunky pieces. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 2
      },
      {
        "title": "Brown the meat",
        "uses": [
          "pork-sausages",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 3
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "peppers",
          "cannellini-beans",
          "smoked-paprika",
          "chopped-tomatoes",
          "chicken-stock"
        ],
        "instructions": "Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook on LOW",
        "uses": [
          "pork-sausages"
        ],
        "instructions": "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Food thermometer"
        ],
        "sourceStage": 5
      },
      {
        "title": "Prepare the bread",
        "uses": [
          "bread"
        ],
        "instructions": "Slice the bread or split the rolls just before serving.",
        "check": "Bread is portioned.",
        "skills": [],
        "tools": [
          "Board",
          "Bread knife"
        ],
        "sourceStage": 6
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 7
      }
    ],
    "prep": {
      "pork-sausages": "Keep refrigerated. Follow packet cooking guidance if it requires longer than the recipe.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "peppers": "Wash, remove stalks, seeds and white ribs; cut into 2cm squares.",
      "cannellini-beans": "Use ready-cooked canned beans. Drain and rinse, then weigh the amount shown; buy enough tins to provide that drained weight.",
      "smoked-paprika": "Measure the amount shown.",
      "chopped-tomatoes": "Measure the amount shown.",
      "chicken-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "bread": "Cut into slices or cubes when instructed."
    },
    "flavour": "Sausages and canned white beans in a smoky tomato sauce.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Celery (check stock)",
        "Wheat"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/smoky-slow-cooker-pork-with-boston-baked-beans"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/smoky-slow-cooker-pork-with-boston-baked-beans",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-beef-brisket",
    "title": "Slow-cooker brisket with onion gravy",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 530,
    "servings": 4,
    "cost": 0,
    "description": "Fork-tender brisket pieces with a rich onion gravy. Slow cooker: LOW for 8 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Beef",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Fish (check sauce)",
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "beef-brisket",
        "Boneless beef brisket",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "carrots",
        "Carrots",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "tomato-puree",
        "Tomato purée",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "worcestershire-sauce",
        "Worcestershire sauce",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "dried-thyme",
        "Dried thyme",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "beef-stock",
        "Prepared beef stock",
        400,
        "ml",
        "Cupboard"
      ],
      [
        "cornflour",
        "Cornflour",
        15,
        "g",
        "Cupboard"
      ],
      [
        "potatoes",
        "Potatoes",
        700,
        "g",
        "Fresh produce"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
      "Mix the cornflour with an equal volume of cold water in a cup. Stir into the cooker, switch to HIGH, cover and cook for 20–30 minutes until thickened.",
      "Near serving time, cover prepared potatoes with water in a pan. Bring to a boil and simmer for 15–20 minutes until a fork slides through. Drain carefully.",
      "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "potatoes"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "beef-brisket"
        ],
        "instructions": "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 2
      },
      {
        "title": "Brown the meat",
        "uses": [
          "beef-brisket",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 3
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "tomato-puree",
          "worcestershire-sauce",
          "dried-thyme",
          "beef-stock"
        ],
        "instructions": "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook on LOW",
        "uses": [
          "beef-brisket"
        ],
        "instructions": "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Food thermometer"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish the sauce",
        "uses": [
          "cornflour"
        ],
        "instructions": "Mix the cornflour with an equal volume of cold water in a cup. Stir into the cooker, switch to HIGH, cover and cook for 20–30 minutes until thickened.",
        "check": "Finish ingredients are combined and the sauce has the stated consistency.",
        "skills": [],
        "tools": [
          "Cup",
          "Spoon"
        ],
        "sourceStage": 6
      },
      {
        "title": "Boil potatoes",
        "uses": [
          "potatoes"
        ],
        "instructions": "Near serving time, cover prepared potatoes with water in a pan. Bring to a boil and simmer for 15–20 minutes until a fork slides through. Drain carefully.",
        "check": "Potatoes are tender.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Colander"
        ],
        "sourceStage": 7
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 8
      }
    ],
    "prep": {
      "beef-brisket": "Keep chilled and fully thawed; cut as instructed.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "tomato-puree": "Measure the amount shown.",
      "worcestershire-sauce": "Measure the amount shown.",
      "dried-thyme": "Measure the amount shown.",
      "beef-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "cornflour": "Measure the amount shown.",
      "potatoes": "Peel and cut into 2cm chunks."
    },
    "flavour": "Fork-tender brisket pieces with a rich onion gravy.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Fish (check sauce)",
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/collection/slow-cooker-recipes"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/collection/slow-cooker-recipes",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-beef-stout-roots",
    "title": "Slow-cooker stout beef with root vegetables",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 530,
    "servings": 4,
    "cost": 0,
    "description": "Stout and sweet roots make a deep, savoury beef stew. Slow cooker: LOW for 8 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Beef",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Barley (gluten)",
      "Celery (check stock)",
      "Wheat"
    ],
    "ingredients": [
      [
        "diced-beef",
        "Beef braising steak",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "carrots",
        "Carrots",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "parsnips",
        "Parsnips",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "tomato-puree",
        "Tomato purée",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "dried-thyme",
        "Dried thyme",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "stout",
        "Stout beer",
        250,
        "ml",
        "Cupboard"
      ],
      [
        "beef-stock",
        "Prepared beef stock",
        200,
        "ml",
        "Cupboard"
      ],
      [
        "bread",
        "Crusty bread",
        200,
        "g",
        "Bakery"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Parsnips: Peel and cut into small 1cm cubes. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
      "Slice the bread or split the rolls just before serving.",
      "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "parsnips"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Parsnips: Peel and cut into small 1cm cubes. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "diced-beef"
        ],
        "instructions": "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 2
      },
      {
        "title": "Brown the meat",
        "uses": [
          "diced-beef",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 3
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "parsnips",
          "tomato-puree",
          "dried-thyme",
          "stout",
          "beef-stock"
        ],
        "instructions": "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook on LOW",
        "uses": [
          "diced-beef"
        ],
        "instructions": "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Food thermometer"
        ],
        "sourceStage": 5
      },
      {
        "title": "Prepare the bread",
        "uses": [
          "bread"
        ],
        "instructions": "Slice the bread or split the rolls just before serving.",
        "check": "Bread is portioned.",
        "skills": [],
        "tools": [
          "Board",
          "Bread knife"
        ],
        "sourceStage": 6
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 7
      }
    ],
    "prep": {
      "diced-beef": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "parsnips": "Peel and cut into small 1cm cubes.",
      "tomato-puree": "Measure the amount shown.",
      "dried-thyme": "Measure the amount shown.",
      "stout": "Measure the amount shown.",
      "beef-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "bread": "Cut into slices or cubes when instructed."
    },
    "flavour": "Stout and sweet roots make a deep, savoury beef stew.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Barley (gluten)",
        "Celery (check stock)",
        "Wheat"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/collection/slow-cooker-recipes"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/collection/slow-cooker-recipes",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-beef-black-bean",
    "title": "Slow-cooker chunky beef and black bean chilli",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 530,
    "servings": 4,
    "cost": 0,
    "description": "Braising steak makes a chunky chilli with soft black beans. Slow cooker: LOW for 8 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Beef",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "diced-beef",
        "Beef braising steak",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "peppers",
        "Mixed peppers",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "black-beans",
        "Canned black beans, drained weight",
        480,
        "g",
        "Cupboard"
      ],
      [
        "ground-cumin",
        "Ground cumin",
        2,
        "tsp",
        "Cupboard"
      ],
      [
        "smoked-paprika",
        "Smoked paprika",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "chilli-flakes",
        "Chilli flakes",
        0.5,
        "tsp",
        "Cupboard"
      ],
      [
        "chopped-tomatoes",
        "Tinned chopped tomatoes",
        400,
        "g",
        "Cupboard"
      ],
      [
        "beef-stock",
        "Prepared beef stock",
        200,
        "ml",
        "Cupboard"
      ],
      [
        "rice",
        "Long-grain rice",
        250,
        "g",
        "Cupboard"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating. For rice, cool ideally within one hour, use within 24 hours and reheat only once."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "peppers"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "diced-beef"
        ],
        "instructions": "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 2
      },
      {
        "title": "Brown the meat",
        "uses": [
          "diced-beef",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 3
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "peppers",
          "black-beans",
          "ground-cumin",
          "smoked-paprika",
          "chilli-flakes",
          "chopped-tomatoes",
          "beef-stock"
        ],
        "instructions": "Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook on LOW",
        "uses": [
          "diced-beef"
        ],
        "instructions": "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Food thermometer"
        ],
        "sourceStage": 5
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 6
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating. For rice, cool ideally within one hour, use within 24 hours and reheat only once.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 7
      }
    ],
    "prep": {
      "diced-beef": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "peppers": "Wash, remove stalks, seeds and white ribs; cut into 2cm squares.",
      "black-beans": "Use ready-cooked canned beans. Drain and rinse, then weigh the amount shown; buy enough tins to provide that drained weight.",
      "ground-cumin": "Measure the amount shown.",
      "smoked-paprika": "Measure the amount shown.",
      "chilli-flakes": "Measure the amount shown.",
      "chopped-tomatoes": "Measure the amount shown.",
      "beef-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "rice": "Measure the amount shown."
    },
    "flavour": "Braising steak makes a chunky chilli with soft black beans.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/collection/slow-cooker-recipes"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/collection/slow-cooker-recipes",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-beef-wine-olive",
    "title": "Slow-cooker red-wine beef with olives",
    "category": "Beef",
    "mealType": "Dinner",
    "emoji": "🥩",
    "theme": "warm",
    "time": 530,
    "servings": 4,
    "cost": 0,
    "description": "Olives and red wine bring a savoury richness to slow-cooked beef. Slow cooker: LOW for 8 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Beef",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Sulphites",
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "diced-beef",
        "Beef braising steak",
        650,
        "g",
        "Meat & fish"
      ],
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "carrots",
        "Carrots",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "mushrooms",
        "Mushrooms",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "olives",
        "Pitted olives",
        70,
        "g",
        "Cupboard"
      ],
      [
        "tomato-puree",
        "Tomato purée",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "dried-oregano",
        "Dried oregano",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "red-wine",
        "Red wine",
        200,
        "ml",
        "Cupboard"
      ],
      [
        "beef-stock",
        "Prepared beef stock",
        250,
        "ml",
        "Cupboard"
      ],
      [
        "potatoes",
        "Potatoes",
        700,
        "g",
        "Fresh produce"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Mushrooms: Wipe clean and cut into thin slices. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
      "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
      "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
      "Near serving time, cover prepared potatoes with water in a pan. Bring to a boil and simmer for 15–20 minutes until a fork slides through. Drain carefully.",
      "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use fully thawed meat from the fridge, never frozen meat. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "mushrooms",
          "potatoes"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Mushrooms: Wipe clean and cut into thin slices. Potatoes: Peel and cut into 2cm chunks. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Prepare the meat",
        "uses": [
          "diced-beef"
        ],
        "instructions": "On a separate board, cut the meat into 3cm cubes. Keep it chilled until the pan is ready. Wash hands, knife and board afterwards; do not wash raw meat.",
        "check": "Pieces are the stated size; raw-meat equipment is set aside for cleaning.",
        "skills": [],
        "tools": [
          "Separate board",
          "Knife"
        ],
        "sourceStage": 2
      },
      {
        "title": "Brown the meat",
        "uses": [
          "diced-beef",
          "olive-oil"
        ],
        "instructions": "Heat the measured olive oil in a large heavy pan over medium-high heat. Add the meat in a single layer, in batches if necessary, and brown for 5–7 minutes, turning regularly. Move to a plate; it is not fully cooked yet and must return to the pan.",
        "check": "Surfaces have browned; the meat still needs the following cooking stage.",
        "skills": [],
        "tools": [
          "Heavy pan",
          "Tongs",
          "Plate"
        ],
        "sourceStage": 3
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "mushrooms",
          "olives",
          "tomato-puree",
          "dried-oregano",
          "red-wine",
          "beef-stock"
        ],
        "instructions": "Put the prepared root vegetables at the bottom of the cooker. Add browned meat and juices, onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook on LOW",
        "uses": [
          "diced-beef"
        ],
        "instructions": "Set the slow cooker to LOW and cook for 8 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check the meat and the centre of the dish. Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Meat must also be tender to a fork; continue on LOW and check again if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Food thermometer"
        ],
        "sourceStage": 5
      },
      {
        "title": "Boil potatoes",
        "uses": [
          "potatoes"
        ],
        "instructions": "Near serving time, cover prepared potatoes with water in a pan. Bring to a boil and simmer for 15–20 minutes until a fork slides through. Drain carefully.",
        "check": "Potatoes are tender.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Colander"
        ],
        "sourceStage": 6
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 7
      }
    ],
    "prep": {
      "diced-beef": "Keep refrigerated; use a separate board for raw meat and wash hands and utensils afterwards. Do not wash raw meat.",
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "mushrooms": "Wipe clean and cut into thin slices.",
      "olives": "Measure the amount shown.",
      "tomato-puree": "Measure the amount shown.",
      "dried-oregano": "Measure the amount shown.",
      "red-wine": "Measure the amount shown.",
      "beef-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "potatoes": "Peel and cut into 2cm chunks."
    },
    "flavour": "Olives and red wine bring a savoury richness to slow-cooked beef.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Sulphites",
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Check the thickest centre with a clean food thermometer: at least 75°C maintained for 30 seconds. If it is below that, cook longer and check again. The timer is only a reminder. Keep raw meat and its utensils separate from ready-to-eat food."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/collection/slow-cooker-recipes"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/collection/slow-cooker-recipes",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-sweet-potato-chickpea",
    "title": "Slow-cooker sweet potato and chickpea curry",
    "category": "Vegetarian",
    "mealType": "Dinner",
    "emoji": "🥕",
    "theme": "golden",
    "time": 410,
    "servings": 4,
    "cost": 0,
    "description": "A mild coconut curry with sweet potatoes, chickpeas and spinach. Slow cooker: LOW for 6 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Vegetarian",
      "Slow Cooker",
      "New to test",
      "Curry"
    ],
    "allergens": [
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "sweet-potatoes",
        "Sweet potatoes",
        600,
        "g",
        "Fresh produce"
      ],
      [
        "chickpeas",
        "Canned chickpeas, drained weight",
        480,
        "g",
        "Cupboard"
      ],
      [
        "curry-paste",
        "Mild curry paste",
        2,
        "tbsp",
        "Cupboard"
      ],
      [
        "coconut-milk",
        "Coconut milk",
        400,
        "ml",
        "Cupboard"
      ],
      [
        "veg-stock",
        "Prepared vegetable stock",
        200,
        "ml",
        "Cupboard"
      ],
      [
        "spinach",
        "Baby spinach",
        150,
        "g",
        "Fresh produce"
      ],
      [
        "rice",
        "Long-grain rice",
        250,
        "g",
        "Cupboard"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Sweet potatoes: Scrub and cut into 2cm chunks. Baby spinach: Wash and drain. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "Heat the oil in a frying pan over medium heat. Soften the onion for 6–8 minutes, stirring.",
      "Put the prepared root vegetables at the bottom of the cooker. Add the softened onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 6 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check that the vegetables are completely tender and the dish is steaming hot throughout. Continue cooking if still firm.",
      "Stir in the washed spinach, cover on HIGH for 10 minutes until wilted and the dish is steaming throughout.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating. For rice, cool ideally within one hour, use within 24 hours and reheat only once."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "sweet-potatoes",
          "spinach"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Sweet potatoes: Scrub and cut into 2cm chunks. Baby spinach: Wash and drain. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Soften the onion",
        "uses": [
          "onion",
          "olive-oil"
        ],
        "instructions": "Heat the oil in a frying pan over medium heat. Soften the onion for 6–8 minutes, stirring.",
        "check": "Onion has softened.",
        "skills": [],
        "tools": [
          "Frying pan",
          "Spoon"
        ],
        "sourceStage": 2
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "sweet-potatoes",
          "chickpeas",
          "curry-paste",
          "coconut-milk",
          "veg-stock"
        ],
        "instructions": "Put the prepared root vegetables at the bottom of the cooker. Add the softened onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Cook on LOW",
        "uses": [],
        "instructions": "Set the slow cooker to LOW and cook for 6 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check that the vegetables are completely tender and the dish is steaming hot throughout. Continue cooking if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Fork"
        ],
        "sourceStage": 4
      },
      {
        "title": "Finish the sauce",
        "uses": [
          "spinach"
        ],
        "instructions": "Stir in the washed spinach, cover on HIGH for 10 minutes until wilted and the dish is steaming throughout.",
        "check": "Finish ingredients are combined and the sauce has the stated consistency.",
        "skills": [],
        "tools": [
          "Cup",
          "Spoon"
        ],
        "sourceStage": 5
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 6
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating. For rice, cool ideally within one hour, use within 24 hours and reheat only once.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 7
      }
    ],
    "prep": {
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "sweet-potatoes": "Scrub and cut into 2cm chunks.",
      "chickpeas": "Use ready-cooked canned beans. Drain and rinse, then weigh the amount shown; buy enough tins to provide that drained weight.",
      "curry-paste": "Measure the amount shown.",
      "coconut-milk": "Measure the amount shown.",
      "veg-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "spinach": "Wash and drain.",
      "rice": "Measure the amount shown."
    },
    "flavour": "A mild coconut curry with sweet potatoes, chickpeas and spinach.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Use ready-cooked canned beans; never raw dried kidney beans. Follow the cooker manual and cook until all vegetables and lentils are tender and the whole dish is steaming hot."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/slow-cooker-vegetable-curry"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/slow-cooker-vegetable-curry",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-root-lentil",
    "title": "Slow-cooker root vegetable and red lentil stew",
    "category": "Vegetarian",
    "mealType": "Dinner",
    "emoji": "🥕",
    "theme": "golden",
    "time": 410,
    "servings": 4,
    "cost": 0,
    "description": "Red lentils thicken a filling root-vegetable stew. Slow cooker: LOW for 6 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Vegetarian",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Celery (check stock)",
      "Wheat"
    ],
    "ingredients": [
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "carrots",
        "Carrots",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "parsnips",
        "Parsnips",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "red-lentils",
        "Dried red split lentils",
        180,
        "g",
        "Cupboard"
      ],
      [
        "ground-cumin",
        "Ground cumin",
        2,
        "tsp",
        "Cupboard"
      ],
      [
        "smoked-paprika",
        "Smoked paprika",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "chopped-tomatoes",
        "Tinned chopped tomatoes",
        400,
        "g",
        "Cupboard"
      ],
      [
        "veg-stock",
        "Prepared vegetable stock",
        750,
        "ml",
        "Cupboard"
      ],
      [
        "bread",
        "Crusty bread",
        200,
        "g",
        "Bakery"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Parsnips: Peel and cut into small 1cm cubes. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "Heat the oil in a frying pan over medium heat. Soften the onion for 6–8 minutes, stirring.",
      "Put the prepared root vegetables at the bottom of the cooker. Add the softened onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 6 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check that the vegetables and red lentils are completely tender and the dish is steaming hot throughout. Continue cooking if still firm.",
      "Slice the bread or split the rolls just before serving.",
      "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "parsnips"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Carrots: Peel and cut into small 1cm cubes. Parsnips: Peel and cut into small 1cm cubes. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Soften the onion",
        "uses": [
          "onion",
          "olive-oil"
        ],
        "instructions": "Heat the oil in a frying pan over medium heat. Soften the onion for 6–8 minutes, stirring.",
        "check": "Onion has softened.",
        "skills": [],
        "tools": [
          "Frying pan",
          "Spoon"
        ],
        "sourceStage": 2
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "carrots",
          "parsnips",
          "red-lentils",
          "ground-cumin",
          "smoked-paprika",
          "chopped-tomatoes",
          "veg-stock"
        ],
        "instructions": "Put the prepared root vegetables at the bottom of the cooker. Add the softened onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Cook on LOW",
        "uses": [],
        "instructions": "Set the slow cooker to LOW and cook for 6 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check that the vegetables and red lentils are completely tender and the dish is steaming hot throughout. Continue cooking if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Fork"
        ],
        "sourceStage": 4
      },
      {
        "title": "Prepare the bread",
        "uses": [
          "bread"
        ],
        "instructions": "Slice the bread or split the rolls just before serving.",
        "check": "Bread is portioned.",
        "skills": [],
        "tools": [
          "Board",
          "Bread knife"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "parsnips": "Peel and cut into small 1cm cubes.",
      "red-lentils": "Rinse in a sieve under cold water; these are not dried kidney beans.",
      "ground-cumin": "Measure the amount shown.",
      "smoked-paprika": "Measure the amount shown.",
      "chopped-tomatoes": "Measure the amount shown.",
      "veg-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "bread": "Cut into slices or cubes when instructed."
    },
    "flavour": "Red lentils thicken a filling root-vegetable stew.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Celery (check stock)",
        "Wheat"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Use ready-cooked canned beans; never raw dried kidney beans. Follow the cooker manual and cook until all vegetables and lentils are tender and the whole dish is steaming hot."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/slow-cooker-spiced-root-lentil-casserole"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/slow-cooker-spiced-root-lentil-casserole",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  },
  {
    "id": "slow-smoky-three-bean",
    "title": "Slow-cooker smoky three-bean hotpot",
    "category": "Vegetarian",
    "mealType": "Dinner",
    "emoji": "🥕",
    "theme": "golden",
    "time": 410,
    "servings": 4,
    "cost": 0,
    "description": "Three ready-cooked canned beans simmer into a smoky vegetable hotpot. Slow cooker: LOW for 6 hours, plus preparation and finishing. Fixed four-portion batch.",
    "tags": [
      "Vegetarian",
      "Slow Cooker",
      "New to test"
    ],
    "allergens": [
      "Celery (check stock)"
    ],
    "ingredients": [
      [
        "onion",
        "Onion",
        180,
        "g",
        "Fresh produce"
      ],
      [
        "garlic",
        "Garlic",
        3,
        "cloves",
        "Fresh produce"
      ],
      [
        "olive-oil",
        "Olive oil",
        1,
        "tbsp",
        "Cupboard"
      ],
      [
        "kidney-beans",
        "Canned kidney beans, drained weight",
        240,
        "g",
        "Cupboard"
      ],
      [
        "black-beans",
        "Canned black beans, drained weight",
        240,
        "g",
        "Cupboard"
      ],
      [
        "cannellini-beans",
        "Canned cannellini beans, drained weight",
        240,
        "g",
        "Cupboard"
      ],
      [
        "peppers",
        "Mixed peppers",
        300,
        "g",
        "Fresh produce"
      ],
      [
        "carrots",
        "Carrots",
        250,
        "g",
        "Fresh produce"
      ],
      [
        "smoked-paprika",
        "Smoked paprika",
        2,
        "tsp",
        "Cupboard"
      ],
      [
        "ground-cumin",
        "Ground cumin",
        1,
        "tsp",
        "Cupboard"
      ],
      [
        "chopped-tomatoes",
        "Tinned chopped tomatoes",
        400,
        "g",
        "Cupboard"
      ],
      [
        "veg-stock",
        "Prepared vegetable stock",
        250,
        "ml",
        "Cupboard"
      ],
      [
        "rice",
        "Long-grain rice",
        250,
        "g",
        "Cupboard"
      ]
    ],
    "steps": [
      "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
      "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Carrots: Peel and cut into small 1cm cubes. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
      "Heat the oil in a frying pan over medium heat. Soften the onion for 6–8 minutes, stirring.",
      "Put the prepared root vegetables at the bottom of the cooker. Add the softened onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
      "Set the slow cooker to LOW and cook for 6 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check that the vegetables are completely tender and the dish is steaming hot throughout. Continue cooking if still firm.",
      "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
      "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating. For rice, cool ideally within one hour, use within 24 hours and reheat only once."
    ],
    "beginnerTasks": [
      {
        "title": "Check the slow cooker and batch size",
        "uses": [],
        "instructions": "This is a fixed batch for four people. Use a slow cooker around 3.5–4.5 litres only if this quantity meets its manual minimum and maximum fill levels; aim for roughly half to two-thirds full. Do not double the batch in the same pot. Follow the manual for preheating. Start cooking straight after loading: do not use a delayed start. Use commercially canned, ready-cooked beans wherever listed; never substitute raw dried kidney beans. Set an appliance timer or phone alarm too: a webpage reminder may not sound while the page is closed or the phone suspends it.",
        "check": "Cooker capacity and ingredient preparation match this method.",
        "skills": [],
        "tools": [
          "Slow cooker and its manual"
        ],
        "sourceStage": 0
      },
      {
        "title": "Prepare the vegetables first",
        "uses": [
          "onion",
          "garlic",
          "peppers",
          "carrots"
        ],
        "instructions": "Onion: Peel and finely dice. Garlic: Peel and crush with a garlic press, or finely chop. Mixed peppers: Wash, remove stalks, seeds and white ribs; cut into 2cm squares. Carrots: Peel and cut into small 1cm cubes. Prepare these before handling raw meat. Keep ingredients for finishing and side dishes covered in the fridge until their steps; hold peeled side-dish potatoes covered in cold water in the fridge, then drain before cooking.",
        "check": "The vegetables are prepared and kept separate from raw meat.",
        "skills": [],
        "tools": [
          "Non-slip board",
          "Knife",
          "Garlic press or grater where needed"
        ],
        "sourceStage": 1
      },
      {
        "title": "Soften the onion",
        "uses": [
          "onion",
          "olive-oil"
        ],
        "instructions": "Heat the oil in a frying pan over medium heat. Soften the onion for 6–8 minutes, stirring.",
        "check": "Onion has softened.",
        "skills": [],
        "tools": [
          "Frying pan",
          "Spoon"
        ],
        "sourceStage": 2
      },
      {
        "title": "Load the cooker",
        "uses": [
          "onion",
          "garlic",
          "kidney-beans",
          "black-beans",
          "cannellini-beans",
          "peppers",
          "carrots",
          "smoked-paprika",
          "ground-cumin",
          "chopped-tomatoes",
          "veg-stock"
        ],
        "instructions": "Put the prepared root vegetables at the bottom of the cooker. Add the softened onion and garlic. Add all the other ingredients listed for this task, including the measured liquid. Drain and rinse any canned beans first. Stir carefully and fit the lid. Do not put the ceramic insert directly on a hob.",
        "check": "The listed ingredients are in the pot, within its fill limits.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Spoon"
        ],
        "sourceStage": 3
      },
      {
        "title": "Cook on LOW",
        "uses": [],
        "instructions": "Set the slow cooker to LOW and cook for 6 hours with the lid on. Do not use WARM to cook raw food. Avoid repeatedly lifting the lid. At the end, check that the vegetables are completely tender and the dish is steaming hot throughout. Continue cooking if still firm.",
        "check": "The dish is hot throughout and its meat or vegetables are fully tender.",
        "skills": [],
        "tools": [
          "Slow cooker",
          "Fork"
        ],
        "sourceStage": 4
      },
      {
        "title": "Cook the rice",
        "uses": [
          "rice"
        ],
        "instructions": "While the main dish finishes, cook the measured rice in a separate saucepan using the water amount, heat and time on its packet. Start the packet reminder when cooking begins. Drain only if the packet method requires it.",
        "check": "Rice is tender with no hard centre. Serve promptly.",
        "skills": [],
        "tools": [
          "Saucepan",
          "Measuring jug",
          "Sieve if needed"
        ],
        "sourceStage": 5
      },
      {
        "title": "Finish and serve",
        "uses": [],
        "instructions": "Serve the finished dish with the prepared side. Cool leftovers in small portions and refrigerate promptly; follow the food-safety guidance for storage and reheating. For rice, cool ideally within one hour, use within 24 hours and reheat only once.",
        "check": "The food is fully cooked and served hot.",
        "skills": [],
        "tools": [
          "Clean serving utensils",
          "Plates or bowls"
        ],
        "sourceStage": 6
      }
    ],
    "prep": {
      "onion": "Peel and finely dice.",
      "garlic": "Peel and crush with a garlic press, or finely chop.",
      "olive-oil": "Measure the amount shown.",
      "kidney-beans": "Use ready-cooked canned beans. Drain and rinse, then weigh the amount shown; buy enough tins to provide that drained weight.",
      "black-beans": "Use ready-cooked canned beans. Drain and rinse, then weigh the amount shown; buy enough tins to provide that drained weight.",
      "cannellini-beans": "Use ready-cooked canned beans. Drain and rinse, then weigh the amount shown; buy enough tins to provide that drained weight.",
      "peppers": "Wash, remove stalks, seeds and white ribs; cut into 2cm squares.",
      "carrots": "Peel and cut into small 1cm cubes.",
      "smoked-paprika": "Measure the amount shown.",
      "ground-cumin": "Measure the amount shown.",
      "chopped-tomatoes": "Measure the amount shown.",
      "veg-stock": "Measure prepared liquid, not dry stock powder; make stock to the packet dilution.",
      "rice": "Measure the amount shown."
    },
    "flavour": "Three ready-cooked canned beans simmer into a smoky vegetable hotpot.",
    "family": "This fixed batch serves four. Use the stated cooker capacity and manual fill limits. Cook extra batches separately, not by doubling quantities in the same pot.",
    "reviewStatus": "Research-informed development recipe — not kitchen-tested by CookTogether",
    "instructionVersion": 31,
    "safety": {
      "recipeAllergens": [
        "Celery (check stock)"
      ],
      "checkLabels": [
        "Read every sauce, stock, bread and seasoning label; brands and substitutions can change allergens."
      ],
      "cooking": "Use ready-cooked canned beans; never raw dried kidney beans. Follow the cooker manual and cook until all vegetables and lentils are tender and the whole dish is steaming hot."
    },
    "references": [
      "https://www.bbcgoodfood.com/recipes/slow-cooker-vegetable-curry"
    ],
    "reference": "https://www.bbcgoodfood.com/recipes/slow-cooker-vegetable-curry",
    "cookingMethod": "Slow Cooker",
    "fixedBatch": true,
    "batchNote": "Fixed batch: four portions. Slow-cooker liquid and fill levels depend on capacity, so this recipe is not automatically scaled. Use the cooker size and fill guidance in the first task."
  }
];
 const existing=new Set(window.COOK_RECIPES.map(r=>r.id));
 for(const recipe of additions){if(existing.has(recipe.id))throw new Error("Duplicate recipe: "+recipe.id);window.COOK_RECIPES.push(recipe);existing.add(recipe.id);}
})();
