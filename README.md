# Cook Together

Static cooking app served from `main` by GitHub Pages. Open `index.html` through a static server; there is no build or package-install step.

## Instructional illustrations

The same authored illustration catalog appears beside performed prep/cooking actions and in Cooking School. Previews open in a native modal dialog with written equivalents, keyboard focus handling and Escape dismissal. They do not change recipe progress, portions or pantry stock.

- `illustration-ui.js`: action selection, explicit continuation records, compact previews and enlargement.
- `assets/techniques/*.webp`: ten approved individual illustrated guides, optimised for mobile. Legacy SVG diagrams remain in the repository for historical reference but are no longer displayed.
- `illustrations.css`: responsive previews and zoom dialog.
- `index.html`: Get Ready instructions, task integration and School lessons.

Placement distinguishes instructions such as “dice onion” from “add diced onion”. It separates bulb onion dice/slices/wedges, spring onions, grated onion, garlic chopping/crushing, pepper strips/dice/intact halves, plain rice and rice noodles. Already-roasted jarred peppers do not get raw-pepper deseeding diagrams. Continuation records cover tasks whose ingredient or action is established immediately beforehand; review those records when reordering tasks.

Approved illustrations are full-colour instruction cards; the recipe's written instructions remain authoritative and images never prove doneness. Actions without a new approved illustration retain their written instructions without showing old SVG diagrams. New pictures are deliberately matched to performed actions, not mentions of prepared ingredients. The recipes remain development recipes awaiting kitchen testing.

## Checks

```sh
node tests/illustrations.cjs
python -m http.server 8000 --bind 127.0.0.1
# In a second terminal, with Playwright and Chromium available:
node tests/browser.cjs http://127.0.0.1:8000
```

`CHROMIUM_PATH` overrides `/usr/bin/chromium`. Browser test screenshots and the complete task/prep placement audit go to `/tmp/cooktogether-tests` (override with `COOK_TEST_ARTIFACTS`). Tests inject inspection hooks into a browser response; no test hooks are shipped in the app.

The browser checks render all 1,192 tasks and inspect all 1,081 ingredient prep notes. They exercise portion scaling, prep checkboxes/review, illustration dismissal and focus, saved progress, timer expiry/extensions/stop, favourites, meal planning, shopping purchases, pantry updates, School search/categories, asset decoding and 320/360/390/768/1280px layouts. Chromium viewport emulation does not replace testing on physical iOS/Android devices or a kitchen trial.
