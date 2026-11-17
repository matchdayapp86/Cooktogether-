# Cook Together

Static cooking app served from `main` by GitHub Pages. Open `index.html` through a static server; there is no build or package-install step.

## Instructional illustrations

The approved illustrated instruction cards appear beside performed prep/cooking actions and in Cooking School. The Get Ready and Cook Along selectors use the same action-level matching; merely mentioning a prepared ingredient does not trigger artwork. Previews open in a native modal dialog with written equivalents, keyboard focus handling and Escape dismissal. They do not change recipe progress, portions or pantry stock.

- `illustration-ui.js`: core action selection, compact previews and enlargement.
- `illustration-action-matching.js`: additional action-specific matching, disambiguation (such as ginger versus cheese grating), and suppression of mismatched old continuation hints.
- `assets/techniques/catalog-extra.js`: the remaining approved Work artwork captions and image assignments.
- `assets/techniques/*.webp`: 54 individual images: 10 previously installed, 44 newly added. The alternative `slice-carrot-rounds.webp` is stored but intentionally not displayed alongside the existing carrot-slicing image, leaving 53 active image techniques. Legacy SVG diagrams remain in the repository for historical reference but are no longer displayed.
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

The browser checks render the current cooking tasks and inspect the ingredient prep notes. They exercise portion scaling, prep checkboxes/review, illustration dismissal and focus, saved progress, timer expiry/extensions/stop, favourites, meal planning, shopping purchases, pantry updates, School search/categories, asset decoding and 320/360/390/768/1280px layouts. Chromium viewport emulation does not replace testing on physical iOS/Android devices or a kitchen trial.

## Illustration integration, 17 November 2026

- Get Ready uses the named ingredient and its actual prep note. Cook Along uses the task's performed action. Cooking School provides a dedicated technique lesson, including a separate Baking & mixing section.
- If a task does not have a matching approved illustration, it retains written guidance; never fall back to the obsolete SVG placeholders.
- A screenshot or illustration is not a food-safety or doneness check; follow written food-safety instructions.
- Original six-panel Work sheets were split into separate WebP assets and linked to technique keys. Image files are not to be repeated merely because an ingredient is mentioned.
- `tests/illustrations.cjs` checks active image assets and action matching; `tests/browser.cjs` additionally checks the UI in Chromium when Playwright is installed.

## Cook-along task placement repair

The cook-along now retains the same approved artwork at the action itself, even if
it was already shown in Get Ready. Removed exclusions that hid explicit vegetable
prep tasks. `illustration-task-matching.js` supplies 18 reviewed placements for
pronouns, combined actions and measured ingredients that the general matcher missed.
These match the recipe and complete authored instruction, not the step number;
update the placement if that instruction changes. Portion scaling does not change
selection. Later instructions that only add prepared ingredients remain unchanged.

Run `node tests/task-illustrations.cjs` from the repository root to check the actual
task renderer, portion scaling, reorder resilience, and prepared-ingredient guards.

## Traybake instructions and optional timer alerts (17 November 2026)

- The chicken traybake's onion-wedging task now lists the recipe's red onions in the task-specific ingredient amounts. Roasting vegetables also lists the vegetables rather than the glaze ingredients.
- The honey-mustard chicken task explicitly distinguishes the half of the glaze in the original bowl from the untouched half reserved in a clean bowl for the final five minutes.
- Cooking reminders have a 0–100% alarm-volume slider, saved in browser storage; three stronger pitched dings repeat about every 15 seconds for overdue unacknowledged timers while the browser permits audio. Test the sound and raise the phone's media volume too.
- Optional phone notifications can be enabled only by a user tap. They use `timer-alert-sw.js` for notification display and reopening the app; the service worker is **not** a background timer scheduler.
- Android and other mobile browsers throttle or suspend JavaScript and sound after switching apps or locking the screen. Notifications, audio and vibration may be delayed or blocked, especially if the site is closed. These features **do not** guarantee an on-time background alarm; use the phone's Clock timer for important cooking reminders until a native app provides alarm scheduling.
- Run `node tests/traybake-timers.cjs` for the onion/glaze and timed midpoint-reminder regression checks and `node tests/browser.cjs` for volume-control UI checks in a browser-enabled environment.
