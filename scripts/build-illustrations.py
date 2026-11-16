"""Build the shared, hand-authored cooking diagrams. No external image service required."""
from pathlib import Path
from html import escape
import json
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets/techniques'
OUT.mkdir(parents=True, exist_ok=True)
INK='#285346'; GREEN='#739e79'; GOLD='#e5b666'; RED='#cf7457'; BLUE='#90bdca'
def path(d, fill='none', stroke=INK, width=3, extra=''):
 return f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{width}" stroke-linecap="round" stroke-linejoin="round" {extra}/>'
def rect(x,y,w,h,fill,rx=5): return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{INK}" stroke-width="2"/>'
def circle(x,y,r,fill): return f'<circle cx="{x}" cy="{y}" r="{r}" fill="{fill}" stroke="{INK}" stroke-width="2"/>'
def arrow(x,y,dx=42,dy=0):
 return path(f'M{x} {y} l{dx} {dy}')+path(f'M{x+dx-(7 if dx>0 else -7)} {y+dy-6} l{7 if dx>0 else -7} 6 l{-7 if dx>0 else 7} 6') if dy==0 else path(f'M{x} {y} l{dx} {dy}')+path(f'M{x+dx-6} {y+dy-7} l6 7 l6 -7')
def board(): return rect(21,111,178,13,'#e6cfaa')
def knife(x=117,y=51): return path(f'M{x} {y} h52 v15 h-52 l-20 -7 Z','#d9e2df')+rect(x+52,y,28,15,INK,3)
def overhead_board(): return rect(20,40,182,91,'#e6cfaa',10)
def root(x=49,y=87): return path(f'M{x} {y} l-10 -6 m10 6 l-12 0 m12 0 l-10 7',stroke='#9e805c',width=2)
def onion(cuts=0):
 # Overhead view of a peeled half resting on its flat cut face. Root stays at left.
 s=overhead_board()+path('M51 83 Q73 48 124 53 Q174 55 178 85 Q174 117 124 118 Q73 119 51 91 Z','#ead7e6')+root()
 if cuts:
  s+=''.join(path(f'M76 {y} H174',stroke=INK,width=2) for y in [68,80,92,104])
 else:
  s+=''.join(path(f'M{57+i*14} 85 Q{100+i*7} {55+i*4} {170-i*8} 85 Q{100+i*7} {115-i*4} {57+i*14} 85',stroke='#af8da5',width=1) for i in range(4))
 return s

def cubes(color='#ead7e6',size=13):
 return board()+''.join(rect(49+c*24+(r%2)*5,63+r*20,size,size,color,2) for r in range(3) for c in range(5))
def slices(spring=False):
 s=board()
 for i in range(6):
  if spring: s+=circle(56+i*22,84+(i%2)*10,10,'#bfd3a4')+circle(56+i*22,84+(i%2)*10,4,'#fffdf5')
  else: s+=path(f'M{42+i*24} 104 q-15 -35 12 -50 l3 7 q-19 13 -8 40 Z','#ead7e6',width=2)
 return s

def wedges():
 return board()+''.join(path(f'M{x} 105 Q{x-6} 67 {x+31} 52 L{x+36} 78 Z','#ead7e6')+root(x,105)+path(f'M{x+5} 99 L{x+29} 60',stroke='#af8da5',width=2) for x in [44,99,151])

def pepper(mode):
 s=board()
 if mode==0: return s+path('M78 52 Q52 42 47 68 L50 106 L98 106 L101 68 Q96 44 78 52 Z',RED)+path('M77 52 q-4 -18 12 -18',stroke=GREEN,width=6)+path('M125 57 q39 -18 49 21 l-8 28 h-48 Z','#f2b398')+''.join(circle(x,y,3,'#fff4cc') for x,y in [(140,73),(151,82),(135,93),(155,66)])
 if mode==1: return s+''.join(path(f'M{x} 61 q-12 18 0 45 l9 0 q-10 -28 0 -45 Z',RED,width=2) for x in [52,77,102,127,152])
 return cubes(RED)
def potato(mode): return board()+(''.join(path(f'M{x} 104 l-7 -27 l20 -12 l23 17 l-8 25 Z',GOLD) for x in [44,107,153]) if mode else path('M57 96 C26 62 83 32 116 47 C175 46 184 110 128 110 Z',GOLD))
def pan(contents='',liquid=False,lid=False):
 s=rect(31,70,143,47,'#e0e9e4',10)+path('M174 82 h29',stroke=INK,width=9)
 if liquid: s+=path('M37 83 h131',stroke=BLUE,width=5)
 s+=contents
 if lid: s+=path('M27 66 Q103 36 179 66 Z','#b9cec2')+rect(92,43,22,8,INK,3)
 return s

def bubbles(n=4): return ''.join(circle(48+i*24,80-(i%2)*9,3 if n<6 else 6,BLUE) for i in range(n))
def spoon(): return path('M151 32 L118 88',stroke='#b48b59',width=7)+path('M118 78 q-18 3 -13 18 q12 10 22 -2 Z','#b48b59')
def mince(): return ''.join(path(f'M{x} {y} l10 -4 l8 7 l-11 4 Z','#a97c59',width=1.5) for x,y in [(49,91),(71,87),(93,98),(113,86),(137,100),(56,103),(143,87)])
def pieces(mush=False,color='#b58259'): return ''.join(path(f'M{x} 100 q-20 -28 0 -30 q20 2 13 22 l-9 0 v8 Z','#c7a57d') if mush else rect(x,85+(x%3)*3,22,18,color,4) for x in [47,85,126])
def veg(): return ''.join(rect(x,87+(x%3)*4,12,10,'#dbc7d4' if x%2 else GOLD,2) for x in [46,68,91,112,137])
def steam(): return ''.join(path(f'M{x} 55 q-9 -9 0 -17 q8 -9 0 -16',stroke='#8da999',width=2) for x in [65,103,139])
def bowl(contents=''): return path('M37 73 H173 Q168 127 105 127 Q43 124 37 73 Z','#e0e9e4')+contents
def whisk(): return path('M139 29 L105 90',stroke=INK,width=5)+path('M105 66 Q70 88 91 103 Q111 114 124 76 M105 66 Q90 97 96 102 M105 66 Q111 96 96 102',width=2)
def jug(): return path('M48 27 h49 l-8 36 h-34 Z','#e0e9e4')+path('M97 32 q24 0 12 21 h-15')+path('M63 66 l24 23',stroke=BLUE,width=5)
def grater(stage=0):
 s=board()+path('M90 37 h48 l11 72 H77 Z','#d9e2df')+path('M99 37 v-9 h28 v9')
 for x in [96,112,128]:
  for y in [53,70,87]: s+=path(f'M{x} {y} l3 0',width=3)
 s+=path('M66 43 l20 8 l-6 25 l-21 -8 Z',GOLD)+arrow(56,70,0,28)
 if stage: s+=''.join(path(f'M{x} 116 l8 -4',stroke=GOLD) for x in [84,100,116,134,149])
 return s

def press(stage=0):
 s=board()+path('M75 66 h36 v22 H75 Z','#d9e2df')+path('M79 66 L44 36 M107 65 L143 33',width=8)+path('M80 91 v7 m9 -7 v9 m9 -9 v7',stroke='#cfb680',width=3)
 if stage==0: s+=path('M131 102 Q113 77 137 65 Q159 86 147 105 Z','#f1dfb1')
 return s

def drain(stage):
 return path('M43 73 h132 Q165 120 109 120 Q52 120 43 73 Z','#c4d4cd')+path('M28 127 h168',stroke=BLUE)+''.join(circle(x,y,2,INK) for x,y in [(65,87),(91,92),(119,93),(147,86),(80,106),(136,105)])+(''.join(path(f'M{x} 120 v15',stroke=BLUE,width=2) for x in [85,108,131]) if stage else pan().replace('','',1)+arrow(166,48,0,18))
def mash(stage):
 return pan(path('M45 101 q16 -30 33 0 q16 -32 32 0 q18 -33 44 0',GOLD)+path('M103 30 v54 M80 84 h46 v15 H80 Z',width=5))+(arrow(157,35,0,28) if stage else steam())
def oven(stage):
 return rect(43,28,129,105,'#e0e9e4',9)+rect(55,54,105,66,'#718c80',4)+circle(66,40,4,GOLD)+circle(86,40,4,GOLD)+(path('M68 101 h79 v-10 H68 Z',GOLD) if stage else '')+path('M65 70 h84',stroke='#d9e2df')+(arrow(18,95,26,0) if not stage else steam())
def probe(stage):
 return path('M44 113 q-17 -58 52 -51 q57 -24 72 43 Z','#b58259')+path('M133 42 l-33 46',stroke=INK,width=4)+rect(124,20,49,27,'#dbe9dc',5)+f'<text x="148" y="39" text-anchor="middle" fill="{INK}" font-size="12">{("75°C" if stage else "°C")}</text>'
def dough(stage): return board()+path('M49 105 Q25 58 92 55 Q164 49 174 102 Z',GOLD)+(path('M91 61 Q158 66 112 95 Q76 88 91 61 Z','#eed09a') if stage else arrow(60,42,92))
def rice(stage): return pan(''.join(path(f'M{x} 96 l8 -3',stroke=GOLD,width=3) for x in [48,65,82,99,116,133,150]),liquid=stage==0,lid=stage==1)
def pasta(stage,noodle=False):
 return pan(''.join(path(f'M{x} 89 q-10 10 0 18 q10 -8 0 -18' if noodle else f'M{x} 90 l11 10',stroke=GOLD,width=4) for x in [49,73,97,121,145]),liquid=True)+ (steam() if stage else arrow(102,32,0,30))
def sauce(stage): return pan(path('M39 97 Q78 81 107 96 T167 96',stroke='#e5c988',width=9))+ (whisk() if stage else spoon())
def spinach(stage): return pan(''.join(path(f'M{x} 103 q-24 -31 4 -34 q27 18 -4 34 Z',GREEN) for x in [51,82,115,145]) if not stage else ''.join(path(f'M{x} 104 q-12 -14 7 -20 q16 8 -7 20 Z',GREEN) for x in [52,78,102,128,148]))+spoon()
# Each diagram has a distinct action, a sequence and a written equivalent used in the zoom dialog.
D={}
def add(key,title,captions,scenes,note): D[key]={'title':title,'steps':captions,'note':note};
# Store scenes separately; metadata contains no executable strings.
SC={}
def define(key,title,captions,scenes,note='Use the recipe’s quantities, heat and timing.'): add(key,title,captions,scenes,note); SC[key]=scenes

define('dice','Dice an onion',['Halve, peel; flat side down','Cut strips; stop before root','Cut across into small cubes'],[onion(),onion(1)+arrow(179,34,-85),cubes()], 'Keep the root intact while cutting. Tuck fingertips away from the blade; discard the root at the end. No horizontal cut is needed.')
define('slice-onion','Slice an onion',['Halve through root and peel','Flat side down; slice across','Separate even half-moons'],[onion(),onion()+''.join(path(f'M{x} 55 v62',width=2) for x in [87,109,131,153]),slices()], 'Keep fingers curled back and discard the hard root. Use the thickness stated in the recipe.')
define('onion-wedges','Cut onion wedges',['Halve through the root; peel','Cut halves through the root','Keep wedges joined at root'],[onion(),onion()+path('M54 87 L169 63 M54 87 L176 87 M54 87 L169 111',width=2),wedges()], 'Cut each half into the number of wedges in the recipe, keeping a little root to hold the layers together.')
define('spring-onion','Slice spring onions',['Wash; trim roots and tired tops','Lay on board; slice across','Keep white and green as asked'],[board()+path('M51 106 L143 46 M65 111 L157 51',stroke=GREEN,width=10),board()+knife()+path('M51 106 L143 46',stroke=GREEN,width=10),slices(True)], 'Spring onions need trimming and washing, not the peeling method used for bulb onions.')
define('grate','Grate on a stable grater',['Peel or trim as instructed','Grate downwards; collect below','Stop before fingers reach teeth'],[grater(),grater(1),bowl(path('M66 95 l22 -5 m-9 15 l34 -7 m-8 -12 l29 4',stroke=GOLD,width=4))], 'Keep the grater stable. Leave a small end piece rather than grating close to your fingertips; keep any juices needed by the recipe.')
define('garlic','Crush garlic with a press',['Separate and peel the cloves','Squeeze peeled cloves in press','Scrape paste off with a spoon'],[board()+path('M81 105 Q55 78 95 48 Q139 75 120 107 Z','#f1dfb1'),press(),press(1)], 'The illustration shows a garlic press. If you use a knife, finely chop on a stable board with fingers clear of the blade.')
define('garlic-chop','Finely chop garlic',['Peel; place on stable board','Cut slices then small pieces','Chop into fine, even pieces'],[board()+path('M81 105 Q55 78 95 48 Q139 75 120 107 Z','#f1dfb1'),board()+''.join(rect(x,75,7,24,'#f1dfb1',2) for x in [62,77,92,107,122])+knife(),cubes('#f1dfb1',7)], 'Keep fingertips tucked back. Chopped garlic is different from whole cloves or garlic paste.')
define('pepper-prep','Deseed a pepper',['Cut open as the recipe says','Remove stalk, seeds and ribs','Keep required halves or sections'],[pepper(0),pepper(0)+arrow(164,49,0,30),board()+path('M56 105 Q40 62 68 56 Q87 53 94 75 L93 105 Z','#f2b398')+path('M125 105 Q110 64 137 56 Q163 53 173 78 L165 105 Z','#f2b398')], 'For stuffed peppers, keep the halves intact. Cut strips or cubes only if the recipe asks for them.')
define('pepper-strips','Deseed and slice peppers',['Quarter; remove stalk and seeds','Lay sections flat; cut strips','Keep strips a similar width'],[pepper(0),pepper(1)+knife(),pepper(1)])
define('pepper-dice','Deseed and dice peppers',['Remove stalk, seeds and ribs','Cut flat sections into strips','Cut across strips into cubes'],[pepper(0),pepper(1),pepper(2)])
define('potato-prep','Cut potato chunks',['Wash; peel if asked','Make a flat base; cut steadily','Cut even recipe-sized chunks'],[potato(0),potato(0)+knife(),potato(1)], 'This diagram is for chunks, not wedges, thin slices or whole baking potatoes. Follow the size in the recipe.')
define('potato-boil','Boil potato pieces',['Cover raw pieces with cold water','Bring to boil; lower to simmer','Test a piece with a fork'],[pan(pieces(color=GOLD),True),pan(bubbles(),True)+steam(),board()+path('M90 108 l-8 -29 l32 -9 l19 29 Z',GOLD)+path('M110 35 v50 m-9 -50 v20 h18 V35',width=3)], 'For mash, the fork should slide into the centre easily. For parboiling, use the firmer texture in the task. Handle the test piece with a spoon.')
define('pasta','Boil dried pasta',['Add to boiling water; stir','Cook for the packet timing','Cool a piece; test the centre'],[pasta(0),pasta(1),board()+path('M80 80 l44 23',stroke=GOLD,width=12)], 'Leave space below the pan rim. Save cooking water before draining if the recipe asks for it.')
define('noodles','Prepare packet noodles',['Read: soak, boil or stir-fry?','Use packet method and timing','Check texture before draining'],[rect(66,28,84,91,'#f5dfb2')+path('M80 65 h55 m-55 15 h55 m-55 15 h35'),pasta(1,True),drain(1)], 'Noodles vary. The hot-water scene applies only if the packet calls for it; some noodles go straight into a stir-fry.')
define('rice','Cook plain rice by its packet',['Measure packet water ratio','Use packet heat and lid position','Rest or drain as packet says'],[rice(0),rice(1),rice(2)], 'This is plain rice only. Do not apply this method to risotto, paella, biryani or rice simmering in sauce. The covered pan illustrates absorption only.')
define('drain','Drain hot food',['Save water first if needed','Colander secure in clear sink','Pour slowly; avoid the steam'],[jug()+pan(),drain(1),drain(1)+path('M133 22 l37 12 l-9 24 l-42 -15 Z','#e0e9e4')+path('M121 44 Q112 49 109 68',stroke=BLUE,width=5)+steam()], 'Use a heat-safe colander and dry oven gloves for hot handles. Carry the pan with both hands; keep face and hands clear of steam.')
define('mash','Mash cooked potatoes',['Drain; let excess steam escape','Press down with a masher','Work in stated butter or milk'],[pan(pieces(color=GOLD))+steam(),mash(1),mash(0)], 'Use fully cooked potato pieces. Do not use a blade blender, which can make mash gluey.')
define('soften','Soften vegetables',['Spread prepared veg in the pan','Stir across the base regularly','Stop at the recipe’s texture'],[pan(veg()),pan(veg())+spoon(),pan(veg())], 'Use the heat in the task. Lower it if the edges darken before the centres soften.')
define('brown-mince','Brown mince',['Spread mince in an uncrowded pan','Break clumps; let patches brown','Turn and repeat in small pieces'],[pan(mince()),pan(mince())+spoon(),pan(mince())], 'Brown patches develop flavour. Colour alone does not establish safe cooking; complete the recipe and doneness checks.')
define('brown-pieces','Brown meat in batches',['Place pieces in a single layer','Let underside colour; turn','Remove only when recipe says'],[pan(pieces()),pan(pieces())+arrow(85,49),pan(pieces())], 'Use tongs and uncrowded batches. A browned surface does not mean the centre is cooked.')
define('mushrooms','Brown mushrooms',['Spread in one layer','Let released water evaporate','Turn; look for golden edges'],[pan(pieces(True),True),pan(pieces(True))+steam(),pan(pieces(True))+spoon()])
define('simmer','Keep a gentle simmer',['Bring liquid up to bubbling','Lower heat: small slow bubbles','Stir and use lid as instructed'],[pan(bubbles(6),True),pan(bubbles(3),True),pan(bubbles(3),True)+spoon()], 'A simmer has small bubbles breaking slowly, not a vigorous rolling boil. Use the task’s lid position.')
define('reduce','Reduce a sauce',['Remove lid as instructed','Simmer gently; liquid evaporates','Stop at the stated thickness'],[pan(bubbles(4),True),pan(bubbles(3))+steam(),sauce(0)], 'Stir across the bottom and corners. A thicker sauce is not a food-safety check.')
define('roux','Make a pale roux',['Add flour to melted butter','Stir to moisten all the flour','Cook pale paste before milk'],[sauce(0),sauce(0)+spoon(),sauce(1)], 'Keep a white-sauce roux pale and follow the cooking time in the recipe. No dry flour should remain.')
define('milk-sauce','Whisk liquid into a roux',['Add a small splash first','Whisk until completely smooth','Repeat gradually; stir the base'],[jug()+sauce(1),sauce(1),sauce(1)], 'Use the measured milk or stock named in the task. Do not pour the whole jug in at once.')
define('spinach','Wilt spinach',['Add washed, drained leaves','Turn through the hot pan','Stop when leaves collapse'],[spinach(0),spinach(0)+arrow(62,47),spinach(1)])
define('whisk','Whisk a mixture',['Steady the bowl on the surface','Whisk through the whole mixture','Check for unmixed streaks'],[bowl()+whisk(),bowl()+whisk()+arrow(52,49),bowl(path('M64 96 q40 -18 80 0',GOLD,width=6))])
define('fold','Fold a mixture gently',['Cut down through the middle','Sweep along base; lift over','Turn bowl; repeat gently'],[bowl()+path('M105 28 v69',stroke='#b48b59',width=8),bowl()+path('M71 87 Q97 117 144 83',stroke='#b48b59',width=7),bowl()+path('M70 53 Q105 30 143 54',width=3)], 'Use a large spoon or flexible spatula. Stop when dry streaks disappear; avoid vigorous beating.')
define('knead','Knead yeast dough',['Stretch with heel of hand','Fold the dough back over itself','Turn and repeat until elastic'],[dough(0),dough(1),dough(1)+arrow(61,39,70)], 'For yeast dough only. Use the recipe’s work surface and time; do not apply to scones or soda bread.')
define('probe','Check the centre temperature',['Probe thickest part or centre','Avoid bone and the hot pan','Hold target for required time'],[probe(0),probe(0),probe(1)], 'For food needing thorough cooking, one FSA combination is 75°C for 30 seconds, or 70°C for 2 minutes. Cook longer if below target; clean the probe before rechecking.')
define('roast','Bake or roast in the oven',['Preheat to the task’s setting','Place tray with space around it','Use gloves; check the centre'],[oven(0),oven(1),oven(1)], 'Follow the recipe’s actual temperature and food check. A browned surface does not show the centre is safely cooked.')
for key,info in D.items():
 groups=[]
 for n,(caption,scene) in enumerate(zip(info['steps'],SC[key])):
  groups.append(f'<g transform="translate({n*240},0)"><rect x="5" y="8" width="230" height="224" rx="18" fill="{["#f3f6eb","#eef4ed","#fbf1e3"][n]}"/><circle cx="25" cy="29" r="12" fill="{INK}"/><text x="25" y="34" text-anchor="middle" fill="white" font-size="14" font-weight="700">{n+1}</text><g transform="translate(8,25)">{scene}</g><foreignObject x="18" y="169" width="204" height="57"><div xmlns="http://www.w3.org/1999/xhtml" style="font:600 16px/1.25 system-ui;color:{INK};text-align:center">{escape(caption)}</div></foreignObject></g>')
 # SVG text (rather than foreignObject) renders reliably as an HTML image in all browsers.
 import re, textwrap
 for n,caption in enumerate(info['steps']):
  wrapped=textwrap.wrap(caption,25)
  replacement='<text x="120" y="185" text-anchor="middle" fill="'+INK+'" font-family="system-ui,sans-serif" font-size="15" font-weight="600">'+''.join(f'<tspan x="120" dy="{0 if i==0 else 19}">{escape(line)}</tspan>' for i,line in enumerate(wrapped))+'</text>'
  groups[n]=re.sub(r'<foreignObject.*?</foreignObject>',replacement,groups[n])
 svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 240" role="img" aria-labelledby="title desc"><title id="title">{escape(info["title"])}</title><desc id="desc">{escape(". ".join(info["steps"])+". "+info["note"])}</desc>{"".join(groups)}</svg>\n'
 (OUT/f'{key}.svg').write_text(svg)
(ROOT/'assets/techniques/catalog.js').write_text('window.COOK_ILLUSTRATIONS = '+json.dumps(D,indent=2,ensure_ascii=False)+';\n')
print(f'Built {len(D)} instructional diagrams')
