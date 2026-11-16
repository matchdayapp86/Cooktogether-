/* Shared action diagrams for preparation, cooking tasks and Cooking School.
 * Match a performed action, never an ingredient or a legacy skill tag alone.
 * Past participles (diced onion, crushed garlic) describe an already-prepared item.
 */
(() => {
  const catalog = window.COOK_ILLUSTRATIONS;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function select(instruction, context = {}) {
    const text = String(instruction || '').toLowerCase().replace(/[’']/g, "'");
    // Split into local clauses so "dice cucumber; add onion" cannot imply dicing onion.
    const clauses = text.split(/[.;]|\bthen\b/).map(s => s.trim());
    const found = [];
    const add = key => { if (catalog[key] && !found.includes(key)) found.push(key); };
    for (const clause of clauses) {
      const ingredient = context.ingredient || '';
      const onion = /\bonions?\b/.test(clause) || /onion/.test(ingredient);
      const spring = /spring[- ]onions?/.test(clause + ' ' + ingredient);
      // A prep note can omit the ingredient name because it labels that ingredient.
      const near = (verb, food) => new RegExp('\\b(?:' + verb + ')\\b(?:\\s+(?:the|a|an|each|both|red|white|brown|peeled|washed|raw|sweet|finely|thinly|evenly|half|of|two|one|eight|diced|sliced|chopped|into|small|even|bite-size|chunks|pieces|and|or|crush|dice|slice|cut|grate|peel|trim|halve|quarters?))*\\s+(?:' + food + ')\\b').test(clause);
      const prepVerb = /\b(?:dice|chop|slice|cut|grate|quarter)\b/.test(clause);
      if (onion && prepVerb) {
        const direct = verb => near(verb, '(?:spring[- ]|red |white |brown )?onions?') || (/onion/.test(ingredient) && new RegExp('\\b(?:'+verb+')\\b').test(clause));
        if (spring && (direct('slice|chop|trim') || /\bslice\b[^.;]{0,50}\band spring onions/.test(clause))) add('spring-onion');
        else if (!spring) {
          if (direct('grate') || /\bgrate (?:or finely mince )?(?:the )?(?:red )?onion/.test(clause)) add('grate');
          else if ((direct('quarter') || /\b(?:cut|slice)\b[^.;]{0,35}\bwedges\b/.test(clause)) && onion) add('onion-wedges');
          else if (direct('dice|chop|mince')) add('dice');
          else if (direct('slice') || /\bslice (?:peppers|them) and (?:the )?(?:red )?onion/.test(clause)) add('slice-onion');
          // "Peel the red onions and cut into eight wedges each."
          else if (/onion/.test(ingredient) && /\bwedges\b/.test(clause)) add('onion-wedges');
        }
      }
      if (near('crush', 'garlic') || (/garlic/.test(ingredient) && /\bcrush\b/.test(clause))) add('garlic');
      else if (near('chop|mince', 'garlic') || (/garlic/.test(ingredient) && /\b(?:chop|mince)\b/.test(clause))) add('garlic-chop');
      if (near('grate', '(?:fresh )?ginger|cheddar|cheese|apple') || (!onion && !/garlic/.test(ingredient) && ingredient && /\bgrate\b/.test(clause))) add('grate');
      const pepper = /\bpeppers?\b/.test(clause) || /pepper/.test(ingredient) && !/black|white|ground/.test(ingredient);
      const pepperAction=near('halve|deseed|de-seed|slice|dice|cut|chop', 'peppers?') || /pepper/.test(ingredient) && /\b(?:halve|deseed|de-seed|slice|dice|cut|chop)\b/.test(clause);
      if (pepper && pepperAction && !/jarred|in a jar|roasted peppers/.test(clause+' '+ingredient) && /\b(?:deseed|de-seed|slice|dice|cut)\b/.test(clause) && !/\b(?:peppercorn|season)\b/.test(clause)) {
        if (near('dice', 'peppers?') || /pepper/.test(ingredient) && /\bdice\b/.test(clause)) add('pepper-dice');
        else if (/\b(?:slice|strips)\b/.test(clause) && (near('slice|deseed|de-seed|cut', 'peppers?') || /pepper/.test(ingredient))) add('pepper-strips');
        else if (/\b(?:dice|chop|chunks|cubes)\b/.test(clause)) add('pepper-dice');
        else add('pepper-prep');
      }
      const potato = /\bpotatoes\b/.test(clause) || /potato/.test(ingredient);
      const potatoCut=near('cube|cut|chop', 'potatoes') || /potato/.test(ingredient) && /\b(?:cube|cut|chop)\b/.test(clause) || /\bpotatoes(?: and|,)? cut (?:them |into |evenly)/.test(clause);
      if (potato && potatoCut && !/\b(?:slice|slices|wedges|batons|rounds)\b/.test(clause)) add('potato-prep');
      if (near('boil', '(?:sliced )?potatoes') || potato && /\bboil\b/.test(clause) && !/\bdo not boil\b/.test(clause)) add('potato-boil');
      if (/\b(?:cook|boil) (?:the )?(?:dried |dry )?(?:pasta|spaghetti|penne|tagliatelle|linguine)\b|\badd (?:the )?(?:weighed )?(?:dried|dry) pasta\b/.test(clause) && !/\b(?:cooked|drained) (?:pasta|spaghetti)\b/.test(clause)) add('pasta');
      if (/\b(?:cook|soak|boil|prepare)\b[^.;]{0,35}\bnoodles\b/.test(clause) && !/\bcooked noodles\b/.test(clause)) add('noodles');
      if (/\bcook (?:the )?(?:plain |basmati |brown |white )?rice\b/.test(clause) && /pack/.test(clause) && !/noodles|risotto|paella|biryani/.test(clause)) add('rice');
      if (/\bdrain\b/.test(clause) && !/\b(?:beans|chickpeas|tinned|canned|lentils|tuna|tofu|jarred|mushroom|mushrooms|peppers)\b/.test(clause) && (/hot water|colander|pasta|spaghetti|noodles|potato|steam-dry|broccoli/.test(clause) || context.skills?.includes('drain'))) add('drain');
      if (/(?:^|,|\band\b)\s*(?:then\s+)?mash\b/.test(clause) && !/banana|chickpea|beans/.test(text)) add('mash');
      if (near('soften|fry|cook', 'onions?|carrots?|peppers?|vegetables?') && !/stir-fry|deeply golden/.test(clause) && !/\b(?:raw|chicken|beef|pork|lamb)\b/.test(clause)) add('soften');
      if (/\bbrown\b[^.;]{0,30}\b(?:mince|beef|lamb|meat)\b/.test(clause) && !/\bbrown (?:rice|sugar)\b/.test(clause)) add(/mince/.test(clause) ? 'brown-mince' : 'brown-pieces');
      if (near('brown|fry', 'mushrooms') && /brown|golden|evaporat/.test(clause)) add('mushrooms');
      if (/\b(?:bring|keep|lower|reduce|simmer)\b/.test(clause) && /\bsimmer\b/.test(clause) && !/\b(?:if|extra time)\b/.test(clause)) add('simmer');
      if (/\breduce\b/.test(clause) && /sauce|liquid|glossy|thicken|uncovered/.test(clause) && !/reduce (?:the )?heat/.test(clause)) add('reduce');
      if (/\b(?:stir|cook|add)\b/.test(clause) && /\bflour\b/.test(clause) && /\b(?:butter|roux|paste)\b/.test(clause)) add('roux');
      if (/\b(?:whisk|add|pour)\b/.test(clause) && /\b(?:milk|stock)\b/.test(clause) && /\b(?:gradually|splash|roux|little at a time)\b/.test(clause) && /\bwhisk\b/.test(text) && !/eggs|dough|batter/.test(text)) add('milk-sauce');
      if (/\b(?:add|stir|wilt)\b/.test(clause) && /\bspinach\b/.test(clause) && /\bwilt(?:s|ed)?\b/.test(clause)) add('spinach');
      if (/\bwhisk\b/.test(clause) && !found.includes('milk-sauce') && !/cream cheese|electric whisk|roux|sauce portion|saucepan/.test(clause)) add('whisk');
      if (/\bfold\b/.test(clause) && /flour|mixture|batter|egg whites/.test(clause) && !/pastry|wrap|tortilla/.test(clause)) add('fold');
      if (/\bknead\b/.test(clause) && !/\b(?:not|avoid|don't) knead\b/.test(clause) && !/scone|soda/.test(clause)) add('knead');
      if (/\b(?:probe|thermometer)\b/.test(clause) && /\b(?:use|insert|check)\b/.test(clause)) add('probe');
      if (/\b(?:bake|roast)\b/.test(clause) && !/\b(?:before|if|until ready to) (?:you )?(?:bake|roast)\b/.test(clause)) add('roast');
    }
    // Reviewed continuations: the food or performed action is named in the preceding task.
    const continuations={
      'shepherds-pie:5':['brown-mince'],'shepherds-pie:6':['brown-mince'],'shepherds-pie:8':['mash'],
      'chicken-roast:1':['potato-prep'],'chicken-fajitas:2':['slice-onion','pepper-strips'],
      'beef-pepper-skillet:2':['slice-onion','pepper-strips','grate','garlic'],
      'creamy-chicken-mushroom:0':['potato-prep','potato-boil'],
      'mushroom-risotto:2':['soften'],'sausage-gnocchi:2':['soften'],
      'beef-sesame-rice:4':['brown-mince'],
      'broccoli-cheddar-pasta-bake:4':['roux'],
      'fish-pie-cheddar-mash:5':['roux','milk-sauce'],
      'broccoli-cheddar-pasta-bake:5':['milk-sauce'],
      'breakfast-lemon-pancakes:1':['whisk']
    };
    const explicit=continuations[context.recipeId+':'+context.taskIndex];
    if(explicit)return explicit;
    // Authored continuation: this task manages the potato pan started immediately before it.
    if (context.recipeId === 'shepherds-pie' && context.taskIndex === 3) return ['potato-boil'];
    return found;
  }
  function render(keys) {
    const valid = [...new Set(keys)].filter(k => catalog[k]);
    if (!valid.length) return '';
    return `<aside class="action-illustrations" aria-label="Illustrated actions">${valid.map(key => {
      const info = catalog[key];
      return `<button type="button" class="action-illustration" data-illustration="${key}" aria-label="Enlarge: ${escape(info.title)}" aria-haspopup="dialog"><img src="assets/techniques/${key}.svg" width="720" height="240" alt="${escape(info.steps.join('. '))}" loading="lazy"><span>${escape(info.title)}</span><small>Tap to enlarge ↗</small></button>`;
    }).join('')}</aside>`;
  }
  let opener;
  function enlarge(key, button) {
    const info = catalog[key];
    if (!info) return;
    let dialog = document.getElementById('illustration-dialog');
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.id = 'illustration-dialog';
      dialog.className = 'illustration-dialog';
      dialog.setAttribute('aria-labelledby', 'illustration-title');
      document.body.append(dialog);
      dialog.addEventListener('click', event => { if (event.target === dialog || event.target.closest('[data-close-illustration]')) dialog.close(); });
      dialog.addEventListener('close', () => { opener?.focus({preventScroll: true}); });
      dialog.addEventListener('keydown', event => {
        if (event.key === 'Tab') {
          event.preventDefault();
          dialog.querySelector('[data-close-illustration]').focus();
        }
      });
    }
    opener = button;
    dialog.innerHTML = `<header><h2 id="illustration-title">${escape(info.title)}</h2><button type="button" data-close-illustration aria-label="Close illustration" autofocus>×</button></header><img src="assets/techniques/${key}.svg" alt="${escape(info.steps.join('. '))}" width="720" height="240"><ol>${info.steps.map(step => `<li>${escape(step)}</li>`).join('')}</ol><p>${escape(info.note)}</p><small>Simplified action diagram. Follow the task’s written instructions and doneness checks.</small>`;
    dialog.showModal();
  }
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-illustration]');
    if (button) enlarge(button.dataset.illustration, button);
  });
  window.CookIllustrations = {select, render, catalog};
})();
