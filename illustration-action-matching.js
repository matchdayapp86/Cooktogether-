/* Action-specific CookTogether illustrations, 2026-11-17.
 * Called after the original matcher so existing tested recipes keep working.
 * Never infer that an already-prepared ingredient needs another prep lesson.
 */
(() => {
  'use strict';
  const illustrations = window.CookIllustrations;
  if (!illustrations) throw new Error('CookIllustrations must be loaded first');
  const original = illustrations.select;
  const has = (t, pattern) => new RegExp('\\b(?:' + pattern + ')\\b').test(t);
  const prepared = /\b(?:already|pre[- ]?cut|pre[- ]?diced|pre[- ]?sliced|ready[- ]?chopped)\b/;
  const connectors = '(?:the|a|an|each|both|fresh|finely|thinly|evenly|peeled|washed|raw|firm|extra-firm|cooked|red|white|brown|large|small|whole|two|one|some|the|more|of|into|in|our|your|your prepared)';
  const perform = (clause, ingredient, verb, food) => {
    const named = new RegExp('\\b(?:' + verb + ')\\b(?:\\s+' + connectors + ')*\\s+(?:' + food + ')\\b').test(clause);
    const scoped = ingredient && has(ingredient,food) && has(clause,verb);
    return Boolean(named || scoped);
  };
  illustrations.select = function selectApproved(instruction, context={}) {
    const text = String(instruction || '').toLowerCase().replace(/[’']/g,"'");
    const ingredient = String(context.ingredient || '').toLowerCase();
    const old = [...original(instruction,context)];
    const remove = key => {const i=old.indexOf(key);if(i>=0)old.splice(i,1);};
    // The newly-approved 'grate' card shows cheese on a box grater, NOT ginger, apple or onion.
    if (!has(text+' '+ingredient,'cheddar|cheese|parmesan|mozzarella')) remove('grate');
    const keys = [...old];
    const add = key => {if(illustrations.catalog[key]&&!keys.includes(key))keys.push(key);};
    const drop = key => {const i=keys.indexOf(key);if(i>=0)keys.splice(i,1);};
    for(const clause of text.split(/[.;]|\bthen\b/).map(x=>x.trim())) {
      if (!clause || prepared.test(clause.slice(0,12))) continue;
      const act=(verb,food)=>perform(clause,ingredient,verb,food);
      const named=food=>has(clause+' '+ingredient,food);
      const fmt=pattern=>has(clause,pattern);
      // Carrot: choose ONE picture for dice, batons, rounds or simply peeling.
      if (act('dice|cube','carrots?') || (act('cut|chop','carrots?')&&fmt('dice|diced|cubes?'))) {add('carrot-dice');drop('carrot-slice');}
      else if(act('cut|slice|make','carrots?')&&fmt('batons?|sticks|matchsticks')) {add('carrot-batons');drop('carrot-slice');}
      else if(act('peel','carrots?')&&!fmt('dice|diced|cube|cubes|slice|batons?|sticks|matchsticks')) add('peel-carrot');
      if (act('grate','(?:fresh )?ginger')&&!fmt('ginger paste|ground ginger')) add('ginger-grate');
      if(act('chop|slice','(?:fresh )?(?:herbs?|parsley|coriander|cilantro|mint|basil|dill|chives)') && !has(clause+' '+ingredient,'dried|powdered')) add('herbs-chop');
      if(act('slice|chop|cut|prepare','leeks?') && !has(clause+' '+ingredient,'already cooked')) add('leeks-prep');
      if(act('slice|cut','potatoes?') && fmt('slices?|rounds?')&&!fmt('wedges?|cubes?|batons?')) add('potato-slices');
      if(act('dice|cube','aubergines?|eggplants?')||(act('cut','aubergines?|eggplants?')&&fmt('cubes?|chunks?'))) add('aubergine-cube');
      if (act('drain|rinse','(?:canned |tinned )?(?:beans?|chickpeas?|cannellini|kidney beans?|black beans?)') && !fmt('dried|uncooked|raw')) add('beans-drain-rinse');
      if(act('peel|cube|dice|cut|prepare','(?:butternut )?squash') && !fmt('roasted|cooked')) add('butternut-squash');
      if(act('cut|separate|break','cauliflower')&&fmt('florets?')) add('cauliflower-florets');
      if(act('slice|cut','(?:raw )?chicken(?: breasts?| fillets?)?')&&fmt('strips?')&&!fmt('cubes?|dice|diced')&&!has(clause+' '+ingredient,'leftover|pre-cooked')) add('chicken-strips');
      if(act('cut|slice','courgettes?|zucchinis?')&&fmt('half.moons?|semi.circles?')) add('courgette-half-moons');
      else if(act('dice|cube','courgettes?|zucchinis?')||(act('cut|chop','courgettes?|zucchinis?')&&fmt('cubes?|diced'))) add('courgette-dice');
      if(act('slice|cut','halloumi')) add('halloumi-slice');
      if((act('dice|cube','(?:firm |extra.firm )?tofu')||(act('cut','(?:firm |extra.firm )?tofu')&&fmt('cubes?|chunks?')))&&!has(clause+' '+ingredient,'silken'))add('tofu-cube');
      if((act('dice|chop','(?:fresh |large |cherry )?tomatoes?')||(act('cut','tomatoes?')&&fmt('cubes?|dice')))&&!has(clause+' '+ingredient,'tinned|canned|passata')) add('tomato-dice');
      else if(act('halve|cut','cherry tomatoes?')&&fmt('half|halves|halve')) add('cherry-tomatoes-halved');
      else if(act('cut|slice','(?:fresh |large )?tomatoes?')&&fmt('wedges?'))add('tomato-wedges');
      else if(act('slice|cut','tomatoes?')&&fmt('slice|slices?|rounds?')&&!fmt('wedges?|cubes?|diced|cherry'))add('tomato-slice');
      if(act('dice|cube','apples?')||(act('cut','apples?')&&fmt('cubes?|dice')))add('apple-dice');
      else if(act('slice|cut','apples?')&&fmt('slices?|wedges?')) add('apple-slice');
      if(act('prepare|halve|slice|cut|peel','avocados?')&&!prepared.test(clause))add('avocado-prep');
      if(act('slice|cut','bananas?')&&fmt('slice|slices?|rounds?'))add('banana-slice');
      if(act('dice|chop|slice|cut|trim|prepare','celery')&&!has(clause+' '+ingredient,'celery seed|celery salt|celery powder'))add('celery-prep');
      if(act('shred|slice|cut','(?:leafy )?(?:greens?|cabbage|kale|collards?)')&&fmt('shred|thin strips?|finely slice'))add('leafy-greens-shred');
      if(act('shred|pull','(?:fully )?(?:cooked |roast |poached )?chicken')&&!has(clause+' '+ingredient,'raw|uncooked'))add('chicken-shred-cooked');
      if(act('make|peel|slice|cut|shave','cucumbers?')&&fmt('ribbons?'))add('cucumber-ribbons');
      else if(act('dice|cube','cucumbers?')||(act('cut','cucumbers?')&&fmt('cubes?|diced')))add('cucumber-dice');
      else if(act('quarter|cut','cucumbers?')&&fmt('quarter|quarters?|quarter.circles?'))add('cucumber-quarter');
      if(act('peel','(?:boiled |hard.boiled )?eggs?')&&has(clause+' '+ingredient,'boiled|hard.boiled'))add('boiled-egg-peel');
      if(/\bcream\b[^.;]{0,35}\b(?:butter|sugar)\b/.test(clause)||/\bbeat\b[^.;]{0,35}\bbutter\b[^.;]{0,35}\bsugar\b/.test(clause)&&fmt('pale|fluffy'))add('cream-butter-sugar');
      if(/\brub\b[^.;]{0,25}\bbutter\b[^.;]{0,35}\b(?:into|with)\b[^.;]{0,12}\bflour\b/.test(clause))add('rub-butter-into-flour');
      if(/\bline\b[^.;]{0,32}\b(?:baking |cake |loaf |muffin )?tins?\b/.test(clause)||/\bline\b[^.;]{0,25}\b(?:tray|tin|pan)\b[^.;]{0,25}\b(?:parchment|baking paper|greaseproof)\b/.test(clause))add('line-baking-tin');
      if(act('dice|chop','mushrooms?')||(act('cut','mushrooms?')&&fmt('dice|cubes?|small pieces'))){add('dice-mushrooms');drop('mushroom-slice');}
      if(act('cube|dice','paneer|feta')||(act('cut','paneer|feta')&&fmt('cubes?|dice')))add('cube-paneer-or-feta');
    }
    return keys;
  };
})();