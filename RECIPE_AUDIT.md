# Catalogue audit — 18 November 2026

Scope: 129 currently available recipes, including 13 configurable/new breakfasts;
1,243 authored tasks rendered in the application test harness. This is a content
and software audit, not proof that every recipe is fault-free or kitchen-tested.

## Repairs

- 215 ingredient-display corrections logged, including previously unreferenced
  eggs, herbs, spices, apricots, sauces, bread and pastry ingredients. Every listed
  ingredient now has at least one relevant task reference. This invariant alone
  does not prove correct quantities or complete method coverage.
- 38 wording changes logged: explain resting, chilling and steam-drying; repeat
  existing measured splits at the action instead of relying on prep-screen notes;
  clarify where both halves of the fajita seasoning and oil are used.
- Removed equipment-only ingredient displays and specific incorrect inherited
  amounts in the hash, tagine and fajita steps. Kept the prior kofta repairs.
- Added action reminders to 40 timed steps in the base catalogue. Halfway alerts
  use the first doneness-check duration; explicit intervals use their stated gap.
  Occasional checks supplement, rather than replace, regular attention. The UI
  lists actual scheduled times. Koftas retain alerts at 3, 6 and 9 minutes.
- Removed canned-bean instructions from a dried-lentil task and from tasks using
  already-drained beans. Removed whisking help where eggs are already beaten.
  Cooling help no longer introduces unrelated cake/mash examples.
- Increased retained timer capacity so several action reminders do not displace
  the main cooking timers at the old 12-timer limit.

`recipe-audit-changes.json` records per-task ingredient/wording changes. Shared UI
and reminder fixes are recorded in the code diff rather than that data file.

## Checks

`tests/recipe-audit.cjs` renders all 1,243 tasks, validates references and ingredient
coverage, checks schedules stay inside cooking durations, preserves kofta alerts,
and verifies independent timer dismissal. The breakfast, sauces, illustration
placement and traybake timer suites also pass. The older traybake test now recognises
the `turn-0` IDs introduced by the preceding kofta change.

Safety comparisons: https://www.food.gov.uk/safety-hygiene/cooking-your-food and
https://www.gov.uk/government/publications/home-food-fact-checker/home-food-fact-checker.
Existing verified cooking temperatures and base cooking durations were preserved.

## Limits

No new kitchen tests were performed. Recipe yields, flavour, appliance variability
and exact cooking durations cannot be certified by these code checks. Browser
layout and Android background alarm delivery were not verified in this environment.
Illustration regression tests cover known placements and false positives; they do
not constitute a visual review of every image in every recipe. Continued real-cook
feedback is needed, especially for combined tasks, large portions and substitutions.
