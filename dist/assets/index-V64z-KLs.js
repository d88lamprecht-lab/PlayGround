(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const mt=[{id:"human",name:"Human",blurb:"Fragile flesh. Stubborn soul.",skin:"#b9866b",bonus:"Balanced grip",mod:{grip:1}},{id:"mutant",name:"Mutant",blurb:"Toxic blood, iron bones.",skin:"#8aa86b",bonus:"+Armor",mod:{armor:1.18}},{id:"ghost",name:"Ghost",blurb:"Half here. All terror.",skin:"#a9b8c6",bonus:"+Top speed",mod:{speed:1.05}},{id:"ghoul",name:"Ghoul",blurb:"Dead eyes, hungry engine.",skin:"#85837d",bonus:"+Boost",mod:{boost:1.15}},{id:"demon",name:"Demon",blurb:"Hell sent its own chauffeur.",skin:"#a34a3b",bonus:"+Acceleration",mod:{accel:1.12}},{id:"demigod",name:"Demigod",blurb:"Born of thunder and rust.",skin:"#c7a465",bonus:"+All stats, +ego",mod:{speed:1.04,accel:1.04,grip:1.04}}],ah=[{id:"male",label:"Male"},{id:"female",label:"Female"}],Bo=[{id:"sharp",label:"Sharp"},{id:"round",label:"Round"},{id:"gaunt",label:"Gaunt"},{id:"broad",label:"Broad"}],Aa=[{id:"mohawk",label:"Mohawk"},{id:"wild",label:"Wild"},{id:"long",label:"Long"},{id:"braids",label:"Braids"},{id:"ponytail",label:"Ponytail"},{id:"buzz",label:"Buzzcut"},{id:"bald",label:"Bald"},{id:"hood",label:"Hooded"}],vr=[{id:"black",label:"Raven",value:"#151316"},{id:"brown",label:"Dirt",value:"#5b3a25"},{id:"blonde",label:"Bone",value:"#c8b07a"},{id:"red",label:"Blood",value:"#8e2a20"},{id:"white",label:"Ash",value:"#d8d2c4"},{id:"blue",label:"Cobalt",value:"#24557a"},{id:"green",label:"Toxic",value:"#517a3a"},{id:"pink",label:"Candy",value:"#a84a72"}],is=[{id:"blue",label:"Shocking Blue",value:"#37c8ff",glow:"#37c8ff"},{id:"green",label:"Toxic Green",value:"#7bff49",glow:"#7bff49"},{id:"amber",label:"Ember",value:"#ffb13b",glow:"#ffa020"},{id:"red",label:"Hellfire",value:"#ff3b30",glow:"#ff2a1a"},{id:"violet",label:"Witchlight",value:"#c46bff",glow:"#a94bff"},{id:"grey",label:"Dead Grey",value:"#a8adb2",glow:null},{id:"white",label:"Blind White",value:"#f2f0e8",glow:"#fffbe0"}],zo=[{id:"human",label:"Human"},{id:"cyber",label:"Cyber"},{id:"hollow",label:"Hollow"}],Ho=[{id:"none",label:"None"},{id:"stubble",label:"Stubble"},{id:"mustache",label:"Mustache"},{id:"goatee",label:"Goatee"},{id:"beard",label:"Full Beard"},{id:"braided",label:"Braided Beard"}],Ra=[{id:"none",label:"None"},{id:"eye",label:"Eye Scar"},{id:"cheek",label:"Cheek Slash"},{id:"x",label:"Crossed"},{id:"burn",label:"Burn Mark"}],Go=[{id:"none",label:"None"},{id:"goggles",label:"Goggles"},{id:"bandana",label:"Bandana"},{id:"horns",label:"Horns"}],yt=[{id:"dunes",name:"Shifting Dunes",short:"DUNES",icon:"≋",sky:"#4a3d33",horizon:"#c59058",fog:"#8d6a49",ground:"#a67b4b",road:"#5d544a",accent:"#f0b25c",props:["dune","rock","wreck","cactus"],elevation:3.2,grip:.92,blurb:"Buried highways and hungry quicksand."},{id:"mountains",name:"Titan's Spine",short:"MOUNTAINS",icon:"▲",sky:"#20242c",horizon:"#8496ad",fog:"#596575",ground:"#525b64",road:"#3f454c",accent:"#bdd7ec",props:["mountain","pine","rock","wreck"],elevation:10,grip:.96,blurb:"Knife-edge passes above the cloud line."},{id:"desert",name:"Ashen Desert",short:"DESERT",icon:"☼",sky:"#3a302c",horizon:"#c78d4c",fog:"#94714d",ground:"#b08c58",road:"#57514b",accent:"#ffcd6d",props:["dune","rock","wreck","bones"],elevation:2.2,grip:.94,blurb:"A furnace that remembers every skeleton."},{id:"warzone",name:"No Man’s Land",short:"WAR ZONE",icon:"✶",sky:"#2a2926",horizon:"#a76f43",fog:"#6e5a49",ground:"#6c6252",road:"#3c3b37",accent:"#ff6a3d",props:["bunker","wire","wreck","crater"],elevation:3.6,grip:.9,blurb:"Shell craters, barbed wire, and live ordnance."},{id:"rainforest",name:"Rotwood Rainforest",short:"RAINFOREST",icon:"♣",sky:"#202925",horizon:"#62806a",fog:"#3f5e50",ground:"#3c5a3a",road:"#3c403b",accent:"#7dffb0",props:["tree","fern","wreck","rock"],elevation:4.4,grip:.87,blurb:"The canopy drips acid. The roots move."},{id:"dystopia",name:"Neon Dystopia",short:"DYSTOPIA",icon:"⌁",sky:"#171326",horizon:"#7a2b6a",fog:"#3d2348",ground:"#26212e",road:"#1f1d25",accent:"#ff3fb4",props:["tower","sign","wreck","pylon"],elevation:2.8,grip:1.02,blurb:"Corporations fell. The neon never did."},{id:"mines",name:"Black Vein Mines",short:"MINES",icon:"⛏",sky:"#191b1e",horizon:"#715844",fog:"#37332e",ground:"#3b342e",road:"#2f2b28",accent:"#ffba52",props:["mine","cart","rock","pylon"],elevation:5.5,grip:.93,blurb:"Tunnels lit by leaking gas and bad decisions."},{id:"beach",name:"Dead Tide Beach",short:"BEACH",icon:"≈",sky:"#2a3238",horizon:"#9d9a80",fog:"#6a7270",ground:"#a79b7c",road:"#565653",accent:"#67e1d8",props:["palm","wreck","rock","bones"],elevation:1.6,grip:.86,blurb:"The ocean is gone. The riptide stayed."},{id:"city",name:"Ruined Metropolis",short:"CITY",icon:"▥",sky:"#1f2228",horizon:"#865c4a",fog:"#4a4443",ground:"#42403e",road:"#262629",accent:"#ff8a3d",props:["tower","wreck","sign","rubble"],elevation:2,grip:1,blurb:"Downtown is a cemetery with streetlights."},{id:"suburbs",name:"Ashfall Suburbs",short:"SUBURBS",icon:"⌂",sky:"#2b2b2e",horizon:"#9b6e58",fog:"#635b58",ground:"#5e5c53",road:"#343537",accent:"#ffae5c",props:["house","wreck","tree","rubble"],elevation:2.4,grip:.98,blurb:"White picket fences, blackened lawns."},{id:"jungle",name:"Venom Jungle",short:"JUNGLE",icon:"☣",sky:"#17251d",horizon:"#4f824e",fog:"#2e5538",ground:"#2d4b2d",road:"#333a33",accent:"#b8ff3d",props:["tree","fern","idol","wreck"],elevation:4.8,grip:.84,blurb:"Every vine is a vein. Every flower has teeth."},{id:"ice",name:"Frozen Hells",short:"ICE TUNDRA",icon:"❄",sky:"#253039",horizon:"#bcd3dd",fog:"#879aa5",ground:"#c3d5dc",road:"#4b5a62",accent:"#aef4ff",props:["ice","pine","wreck","rock"],elevation:3,grip:.72,blurb:"A white grave that goes on forever."},{id:"volcano",name:"Cinder Peak",short:"VOLCANO",icon:"♨",sky:"#221515",horizon:"#e0572b",fog:"#6d2d21",ground:"#3a2b28",road:"#2a2423",accent:"#ff8a2b",props:["lava","rock","wreck","bones"],elevation:7.5,grip:.95,blurb:"The road is cooling. Sort of."},{id:"wasteland",name:"The Great Wastes",short:"WASTELAND",icon:"⌖",sky:"#302e2b",horizon:"#9b7f5b",fog:"#655b4d",ground:"#746b59",road:"#3f3d38",accent:"#e4c264",props:["wreck","bones","rock","pylon"],elevation:2.6,grip:.91,blurb:"The world ended here. It never left."},{id:"swamp",name:"Mire of Bones",short:"SWAMP",icon:"☠",sky:"#1d2422",horizon:"#62705b",fog:"#39453d",ground:"#3b4438",road:"#33352f",accent:"#a9d96c",props:["tree","bones","fern","wreck"],elevation:2.1,grip:.78,blurb:"The mud chews. The dead watch."}],bt=[{id:"clear",name:"Clear Sky",icon:"☾",tint:"#c79a72",fog:.9,grip:1,wind:.2,hazard:"none",desc:"A rare, ugly calm."},{id:"cloudy",name:"Cloudy",icon:"☁",tint:"#8c8a8a",fog:1.1,grip:1,wind:.4,hazard:"none",desc:"The sky is a bruise."},{id:"acid",name:"Acid Rain",icon:"☢",tint:"#8db36a",fog:1.35,grip:.8,wind:.5,hazard:"acid",desc:"Green rain eats paint and skin."},{id:"storm",name:"Thunderstorm",icon:"ϟ",tint:"#6a7c9e",fog:1.45,grip:.86,wind:.8,hazard:"lightning",desc:"Lightning hunts the leader."},{id:"twister",name:"Twister",icon:"◎",tint:"#a68c6e",fog:1.5,grip:.88,wind:1.7,hazard:"tornado",desc:"The wind has a body."},{id:"hurricane",name:"Hurricane",icon:"≋",tint:"#6d8591",fog:1.55,grip:.75,wind:2.2,hazard:"wind",desc:"Crosswinds with a grudge."},{id:"flood",name:"Flood",icon:"≈",tint:"#5d7a72",fog:1.4,grip:.65,wind:.6,hazard:"water",desc:"Black water over the asphalt."},{id:"quicksand",name:"Quicksand",icon:"◉",tint:"#a48755",fog:1.25,grip:.7,wind:.5,hazard:"sink",desc:"The ground is a mouth."}],cn=[{id:"easy",name:"Easy",ai:.82,reward:.8,desc:"The wasteland goes easy on you."},{id:"normal",name:"Normal",ai:.94,reward:1,desc:"A fair fight for a bad world."},{id:"hard",name:"Hard",ai:1.05,reward:1.3,desc:"Everyone wants you dead."},{id:"insane",name:"Insane",ai:1.14,reward:1.6,desc:"Drikus is watching. Smiling."}],pt=[{id:"rust_reaper",name:"Rust Reaper",klass:"Muscle",shape:"muscle",color:"#7b3b2a",accent:"#d9a441",desc:"A dead man’s V8 held together by spite.",speed:62,accel:66,grip:62,armor:50,boost:8,unlock:"start"},{id:"acid_runner",name:"Acid Runner",klass:"Buggy",shape:"buggy",color:"#586b2c",accent:"#b6ff37",desc:"Built for green rain and bad terrain.",speed:64,accel:70,grip:71,armor:45,boost:9,unlock:"mission",unlockText:"Complete “Acid Run”"},{id:"dune_worm",name:"Dune Worm",klass:"Raider",shape:"buggy",color:"#a67b45",accent:"#ffcf6a",desc:"Wide tires, wider grin. Eats dunes.",speed:67,accel:68,grip:69,armor:55,boost:8,unlock:"mission",unlockText:"Complete “Sand Delivery”"},{id:"hearse_taxi",name:"Last Ride Taxi",klass:"Hearse",shape:"sedan",color:"#232322",accent:"#ffbe3d",desc:"Fares pay double if they arrive breathing.",speed:60,accel:60,grip:65,armor:62,boost:10,unlock:"mission",unlockText:"Complete “Fare to Hell”"},{id:"anubis_chariot",name:"Anubis Chariot",klass:"God-tier",shape:"exotic",color:"#191817",accent:"#e7b93f",desc:"Ichi’s jackal-headed war barge.",speed:79,accel:78,grip:73,armor:70,boost:13,unlock:"career",unlockText:"Defeat Ichi"},{id:"cerberus_fang",name:"Cerberus Fang",klass:"Juggernaut",shape:"truck",color:"#d4d0c4",accent:"#9d1f24",desc:"Three jaws. One gearbox.",speed:74,accel:72,grip:69,armor:82,boost:12,unlock:"career",unlockText:"Defeat Chloe"},{id:"valkyrie",name:"Valkyrie",klass:"Interceptor",shape:"exotic",color:"#d8dce0",accent:"#4bc8ff",desc:"Jill’s silver spear. It only knows forward.",speed:86,accel:82,grip:75,armor:56,boost:14,unlock:"career",unlockText:"Defeat Jill"},{id:"wool_reaper",name:"Wool Reaper",klass:"Battering Ram",shape:"truck",color:"#d8d2c1",accent:"#6a1e1e",desc:"Timone’s evil sheep. It headbutts first.",speed:68,accel:74,grip:66,armor:78,boost:11,unlock:"career",unlockText:"Defeat Timone"},{id:"foxfire",name:"Foxfire",klass:"Drifter",shape:"muscle",color:"#8c3c1f",accent:"#ff8b2b",desc:"Domino’s sly little lie with a spoiler.",speed:81,accel:79,grip:84,armor:52,boost:13,unlock:"career",unlockText:"Defeat Domino"},{id:"bubble_bumper",name:"Bubble Bumper",klass:"Goof",shape:"buggy",color:"#6b3f76",accent:"#8cffcf",desc:"It shouldn’t work. It absolutely does.",speed:73,accel:77,grip:70,armor:64,boost:17,unlock:"career",unlockText:"Defeat Bubbles"},{id:"midnight_coffin",name:"Midnight Coffin",klass:"Shadow",shape:"muscle",color:"#0d0e10",accent:"#5c7c9b",desc:"Oscar’s black-on-black funeral.",speed:84,accel:80,grip:76,armor:58,boost:13,unlock:"career",unlockText:"Defeat Oscar"},{id:"boost_hog",name:"Boost Hog",klass:"Speed Freak",shape:"truck",color:"#1c1b1a",accent:"#ff5c2b",desc:"Sussie’s fat black rocket. All nitrous.",speed:82,accel:88,grip:67,armor:72,boost:20,unlock:"career",unlockText:"Defeat Sussie"},{id:"night_queen",name:"Night Queen",klass:"Royalty",shape:"exotic",color:"#0b0b10",accent:"#37c8ff",desc:"Mandy-Lee’s black throne. The blue eyes are headlights.",speed:88,accel:84,grip:80,armor:68,boost:16,unlock:"career",unlockText:"Defeat Mandy-Lee"},{id:"beast_titan",name:"Beast Titan",klass:"Demigod",shape:"truck",color:"#5b3d24",accent:"#ff7a24",desc:"Zanrich’s animal. It breathes through the grille.",speed:85,accel:83,grip:78,armor:94,boost:14,unlock:"career",unlockText:"Defeat Zanrich"},{id:"jester_chaos",name:"Jester of Chaos",klass:"Insanity",shape:"exotic",color:"#3a1c56",accent:"#66ff3b",desc:"Drikus’s punchline. Nobody is laughing.",speed:92,accel:90,grip:82,armor:75,boost:19,unlock:"career",unlockText:"Defeat Drikus the Insane"},{id:"blood_moon_gt",name:"Blood Moon GT",klass:"Event",shape:"exotic",color:"#4b0d12",accent:"#ff3d38",desc:"A special-event predator with a red halo.",speed:90,accel:87,grip:83,armor:60,boost:18,unlock:"event",unlockText:"Win the Blood Moon Cup"}],Ca={title:"The Crownroad War",intro:"When the old world burned, the racing circuits became borders and the finish line became law. Mandy-Lee crowned herself Queen of Racing, then sent her generals to seize every road worth owning. You arrive with a patched car, no allies, and one rule: the wasteland belongs to whoever can hold the wheel.",chapters:[{title:"I · Ashes at the Starting Line",text:"The first invitation is a wrecked car left across your path, its hood stamped with Mandy-Lee’s crown. The Queen has outlawed independent races; every road now pays her toll. You have a patched engine, a half-empty tank, and no crew. Win the first scraps of territory and the scattered settlements begin to whisper your name."},{title:"II · The Generals’ Road",text:"Ichi weighs your nerve in the Black Nile mines. Chloe sends her hellhound pack across the frozen border. Jill cuts through the mountain storm like a silver blade, while Timone rolls a wall of armored fleece out of the Rotwood. Each victory opens a route and exposes the truth: the generals are not merely guarding roads. They are diverting fuel, steel, and food toward the Queen’s hidden capital."},{title:"III · No Safe Shoulder",text:"The closer you get to the capital, the less the races resemble races. Domino turns the suburbs into a maze of false shortcuts. Bubbles makes the flooded coast a laughing demolition pit. Oscar waits in the blackout streets, where an engine note is the only warning. At the edge of the wasteland, Sussie burns through the Queen’s last reserve of boost fuel in a three-lap chase. Break the final underboss and the whole frontier rises behind you—but Mandy-Lee has already heard the revolt coming."},{title:"IV · The Queen’s Redline",text:"Mandy-Lee meets you beneath the dead neon, crowned in black steel and surrounded by the machines she took from every defeated rival. She offers one bargain: kneel, keep your car, and live under her flag. Refuse, and the capital becomes a single brutal circuit. The Queen drives to erase the rebellion in one night. Beat her, and the crown is yours to refuse—or claim."},{title:"V · The Beast and the Last Laugh",text:"The crown was never the finish. Zanrich, the Wild Demigod, tears open the volcano road to prove that strength answers to no ruler. His Beast Titan turns the climb into a moving landslide. Then Drikus, King of Insanity, summons the survivors to the jungle for a final race beneath a sky split by lightning. The route changes, the rules collapse, and every rival you spared—or inspired—rides the storm with you. Cross the last line, and decide what racing will mean in a world that has forgotten how to choose."}]},Pi=[{id:"ichi",name:"Ichi",title:"Warden of the Black Nile",underboss:!0,order:1,terrain:"mines",weather:"storm",difficulty:"easy",laps:2,vehicle:"anubis_chariot",portrait:{origin:"ghoul",headgear:"anubis",skin:"#7d745d",hair:"bald",eyes:"amber",eyeStyle:"hollow",scar:"none"},quote:"Your heart weighs less than a spark plug.",desc:"General Ichi, the jackal-faced commander of the Black Nile. He weighs every challenger like the dead and sends the unworthy into the mines.",story:"Ichi was the first general to swear his wheels to Mandy-Lee. He believes the old law of the scales still rules the wasteland: only the strong deserve a road. Beat him, and his dead-gold chariot becomes your first proof that the Queen can be challenged.",reward:900},{id:"chloe",name:"Chloe",title:"The White Cerberus",underboss:!0,order:2,terrain:"ice",weather:"cloudy",difficulty:"easy",laps:2,vehicle:"cerberus_fang",portrait:{origin:"mutant",headgear:"ears",skin:"#d8d3c6",hair:"white",eyes:"red",eyeStyle:"cyber",scar:"eye",fangs:!0},quote:"Three heads. Zero patience.",desc:"General Chloe is the White Cerberus, a hound of hell who runs the Queen’s frozen border. Her three-part engine growl is the last warning before the pack hits.",story:"Chloe turned a pack of abandoned war-hounds into the Queen’s most feared patrol. She treats the frozen pass as her kennel and every trespasser as prey. Survive her hunt and the Cerberus Fang is yours.",reward:1100},{id:"jill",name:"Jill",title:"The Majestic",underboss:!0,order:3,terrain:"mountains",weather:"hurricane",difficulty:"normal",laps:2,vehicle:"valkyrie",portrait:{origin:"demigod",headgear:"none",skin:"#d5b78f",hair:"long",hairColor:"#d8d2c4",eyes:"blue",eyeStyle:"human",scar:"none",gender:"female"},quote:"Speed is the only prayer I answer.",desc:"Poised, untouchable, and gone before the thunder lands. Her silver interceptor leaves light behind.",story:"Jill rules the mountain pass from the seat of a silver interceptor, arriving only when the storm is loud enough to hide her engine. She once raced for the Queen because no one else could keep up. Show her that the road can belong to more than the fastest, and the Valkyrie will carry your revolt through the clouds.",reward:1300},{id:"timone",name:"Timone",title:"The Evil Sheep",underboss:!0,order:4,terrain:"rainforest",weather:"acid",difficulty:"normal",laps:2,vehicle:"wool_reaper",portrait:{origin:"mutant",headgear:"ears",skin:"#c8c1ae",hair:"white",eyes:"green",eyeStyle:"human",scar:"x",wool:!0},quote:"Baa. Baa. Bleed.",desc:"Timone, the white-fluffy general, leads a woolly convoy through the Rotwood. Beneath the soft fleece is a hard-eyed tactician who never lets the flock fall out of formation.",story:"The Queen gave Timone the ruined greenbelt and a regiment of armored livestock. He made the flock into a moving wall, then made the wall feared. Scatter his formation and the Wool Reaper is yours.",reward:1500},{id:"domino",name:"Domino",title:"The Sly Fox",underboss:!0,order:5,terrain:"suburbs",weather:"twister",difficulty:"normal",laps:2,vehicle:"foxfire",portrait:{origin:"mutant",headgear:"ears",skin:"#b66a3b",hair:"wild",hairColor:"#8c3c1f",eyes:"amber",eyeStyle:"human",scar:"cheek",muzzle:!0},quote:"I don’t cheat. I simply win differently.",desc:"Domino is the Wild One: a fox-faced outlaw who answers to no flag, not even the Queen’s. He cuts across rooftops, dry creek beds, and any boundary foolish enough to stay still.",story:"Domino joined Mandy-Lee’s ladder for the thrill of breaking it from within. No one can tell whether he serves the Queen or merely enjoys watching her generals lose. Beat him on his own crooked route and earn the Foxfire.",reward:1700},{id:"bubbles",name:"Bubbles",title:"The Goof",underboss:!0,order:6,terrain:"beach",weather:"flood",difficulty:"hard",laps:2,vehicle:"bubble_bumper",portrait:{origin:"ghoul",headgear:"ears",skin:"#8e917e",hair:"mohawk",hairColor:"#a84a72",eyes:"violet",eyeStyle:"cyber",scar:"burn",muzzle:!0,goof:!0},quote:"Wanna see something stupid and incredible?",desc:"A giggling dog-shaped goof in a car that violates physics and taste. Never count him out.",story:"Bubbles was hired to make the coast patrols laugh right up until the water rose over their doors. Now he rules the flooded causeway with a grin, a rubber-horn laugh, and a bumper car that can shove a truck into the tide. Outlast the chaos and you may discover the joke was always on the Queen.",reward:1900},{id:"oscar",name:"Oscar",title:"The Midnight Driver",underboss:!0,order:7,terrain:"city",weather:"clear",difficulty:"hard",laps:2,vehicle:"midnight_coffin",portrait:{origin:"ghost",headgear:"none",skin:"#6f7880",hair:"bald",eyes:"white",eyeStyle:"hollow",scar:"none",gender:"male",ghost:!0},quote:"You won’t see me. You’ll only hear the door close.",desc:"A pitch-black silhouette at the wheel of a pitch-black car. His headlights are always off.",story:"Oscar keeps the blackout district quiet for Mandy-Lee. His midnight patrol takes confiscated cars to the capital and leaves their owners to walk home through the dark. He knows every unlit tunnel and every engine that should not be running. Find the coffin before it finds you, and the people of the city will get their headlights back.",reward:2200},{id:"sussie",name:"Sussie",title:"The Overdrive",underboss:!0,order:8,terrain:"wasteland",weather:"quicksand",difficulty:"hard",laps:3,vehicle:"boost_hog",portrait:{origin:"human",headgear:"none",skin:"#6c4938",hair:"braids",hairColor:"#151316",eyes:"amber",eyeStyle:"human",scar:"cheek",gender:"female",build:"heavy"},quote:"Big girl. Bigger boost. Bye.",desc:"Sussie is the gluttonous speed demon of the wasteland: she devours fuel, scrap, and the distance between herself and the finish line. Her boost-heavy black rocket leaves rivals choking in the dust.",story:"Sussie began as a scavenger who ate whatever the wasteland offered. Now she consumes entire race fields for the Queen’s prize purse. Outlast her appetite for speed and the Boost Hog becomes your ride.",reward:2600},{id:"mandy",name:"Mandy-Lee",title:"Queen of the Dark",boss:!0,order:9,terrain:"dystopia",weather:"acid",difficulty:"hard",laps:3,vehicle:"night_queen",portrait:{origin:"demigod",headgear:"crown",skin:"#e2c7b4",hair:"long",hairColor:"#151316",eyes:"blue",eyeStyle:"cyber",scar:"none",gender:"female"},quote:"Kneel, or be the road I drive over.",desc:"Black hair, shocking blue eyes, and a kingdom made of fear. The Queen of the Dark does not lose.",story:"Mandy-Lee did not inherit the wasteland; she won it one finish line at a time. She made racing law, turned champions into generals, and hoarded the fuel that could keep whole settlements alive. In the Night Queen she finally meets a challenger who has dismantled her ladder from the bottom up. This is not a title defense. It is the Queen’s last chance to make the wasteland believe there was never another choice.",reward:5e3},{id:"zanrich",name:"Zanrich",title:"The Wild Demigod",boss:!0,order:10,terrain:"volcano",weather:"twister",difficulty:"insane",laps:2,vehicle:"beast_titan",portrait:{origin:"demigod",headgear:"horns",skin:"#8c552c",hair:"wild",hairColor:"#2b1a12",eyes:"amber",eyeStyle:"human",scar:"x",fangs:!0},quote:"STRENGTH IS THE ONLY LANGUAGE. MINE IS LOUDER.",desc:"A demigod of power and pure animal rage. His Beast Titan is a moving mountain with a hunger.",story:"The Queen’s defeat breaks her flag, not the old hunger for power. Zanrich answers the open throne with a challenge carved into the volcano road: take the summit or be buried below it. He believes mercy is weakness and every alliance temporary. The Beast Titan is built to turn the climb into a wreckage field; beat him there, and the survivors will know the new order cannot be seized by force alone.",reward:7500},{id:"drikus",name:"Drikus the Insane",title:"Demigod of Insanity",boss:!0,order:11,terrain:"jungle",weather:"storm",difficulty:"insane",laps:2,vehicle:"jester_chaos",portrait:{origin:"demigod",headgear:"jester",skin:"#d7cdb5",hair:"wild",hairColor:"#3a1c56",eyes:"green",eyeStyle:"cyber",scar:"eye",fangs:!0,joker:!0,facepaint:!0},quote:"HAHAHAHA—wait, were we racing? I forgot the rules. I wrote them.",desc:"The final punchline. A demigod of insanity wearing a jester’s grin, driving a car that should not exist.",story:"Drikus has watched the Queen fall and the Beast lose. He calls the survivors to the jungle, where the bridges move, the beacons lie, and the course is rewritten while the engines are running. He says the wasteland is only free if nobody can control what happens next. To defeat the King of Insanity, you will need more than a faster car: every rival you turned into an ally must help hold the route together long enough to finish the race.",reward:12e3}],rh=Pi.filter(a=>a.underboss),oh=Pi.filter(a=>a.boss),Pa={transport:{name:"Transport",icon:"▣",desc:"Haul volatile cargo across hostile ground. Keep it intact."},taxi:{name:"Taxi",icon:"☎",desc:"Get the passenger there alive. Comfort pays bonuses."},race:{name:"Single Race",icon:"⚑",desc:"One track. One winner. No excuses."},cup:{name:"Cup Race",icon:"♜",desc:"Three-race championship. Points decide everything."},tournament:{name:"Tournament",icon:"♛",desc:"A brutal bracket against the wasteland’s worst."},gang:{name:"Escape Gang",icon:"☠",desc:"Survive a pack of gang vehicles until the heat dies."},police:{name:"Apocalyptic Police",icon:"✪",desc:"The last precinct wants you. Outrun the sirens."},pvp:{name:"PvP Duel",icon:"⚔",desc:"Head-to-head against a rival driver. Local AI stand-in."},event:{name:"Special Event",icon:"☄",desc:"Limited-time wasteland carnage with unique rewards."}},Bn=[{id:"m_acid_run",type:"transport",name:"Acid Run",terrain:"rainforest",weather:"acid",difficulty:"normal",laps:2,dist:.18,reward:700,xp:180,cargo:"12 barrels of green acid",vehicleReward:"acid_runner",blurb:"The Rotwood is raining something that used to be water. Get the barrels through without dissolving."},{id:"m_sand_delivery",type:"transport",name:"Sand Delivery",terrain:"dunes",weather:"quicksand",difficulty:"easy",laps:2,dist:.34,reward:520,xp:140,cargo:"A live “sand engine” core",vehicleReward:"dune_worm",blurb:"The Dune Worm gang needs a core. The ground needs you. Only one of you gets what it wants."},{id:"m_fare_hell",type:"taxi",name:"Fare to Hell",terrain:"suburbs",weather:"flood",difficulty:"normal",laps:2,dist:.52,reward:760,xp:200,cargo:"A very nervous preacher",vehicleReward:"hearse_taxi",blurb:"He says he can smell sulfur. That might just be the upholstery. Keep the passenger calm."},{id:"m_scrapyard_sprint",type:"race",name:"Scrapyard Sprint",terrain:"wasteland",weather:"cloudy",difficulty:"easy",laps:3,dist:.27,reward:420,xp:120,blurb:"A quick loop around the bones of the old world. Winner takes the good tires."},{id:"m_neon_cup",type:"cup",name:"Neon Corpse Cup",terrain:"dystopia",weather:"acid",difficulty:"normal",laps:2,dist:.72,reward:1600,xp:420,blurb:"Three races under the dead neon. Corporate ghosts sponsor the carnage."},{id:"m_dead_tide_cup",type:"cup",name:"Dead Tide Cup",terrain:"beach",weather:"hurricane",difficulty:"hard",laps:2,dist:.61,reward:2300,xp:520,blurb:"Salt, wind, and three heats of bad intentions. The tide is coming back. Probably."},{id:"m_cinder_tournament",type:"tournament",name:"Cinder Peak Tournament",terrain:"volcano",weather:"twister",difficulty:"hard",laps:2,dist:.83,reward:3e3,xp:650,blurb:"A bracket of killers racing on cooling lava. The loser is not always the one who crashes."},{id:"m_gang_hunt",type:"gang",name:"Escape the Bone Gang",terrain:"swamp",weather:"storm",difficulty:"normal",laps:1,dist:.44,reward:1100,xp:280,blurb:"You took something that belonged to them. Their engines are very close now."},{id:"m_police_siege",type:"police",name:"Precinct 13 Pursuit",terrain:"city",weather:"storm",difficulty:"hard",laps:1,dist:.48,reward:1800,xp:360,blurb:"The apocalyptic police have declared you a public nuisance. Survive their attention."},{id:"m_pvp_duel",type:"pvp",name:"Rust Duel",terrain:"warzone",weather:"clear",difficulty:"normal",laps:2,dist:.29,reward:900,xp:250,blurb:"One rival. One track. An audience of crows. Local AI stand-in for PvP."},{id:"m_ice_cup",type:"cup",name:"White Death Cup",terrain:"ice",weather:"cloudy",difficulty:"hard",laps:2,dist:.66,reward:2600,xp:560,blurb:"Three heats on black ice. Studded tires are for cowards."},{id:"m_volcano_tour",type:"tournament",name:"Lava Bracket",terrain:"volcano",weather:"clear",difficulty:"insane",laps:2,dist:.91,reward:4200,xp:800,blurb:"The final bracket. Win, and the wasteland learns your name."},{id:"m_blood_moon",type:"event",name:"Blood Moon Cup",terrain:"volcano",weather:"twister",difficulty:"hard",laps:3,dist:.95,reward:5500,xp:1e3,vehicleReward:"blood_moon_gt",event:!0,blurb:"Once a blood moon, the wasteland races for the Blood Moon GT. Event reward: the car itself."}],lh=["rainforest","dystopia","volcano"],ch=["desert","warzone","jungle"],hh=["The road is dead. Long live the road.","Every lap is a small apocalypse.","You cannot outrun the weather. You can outdrive it.","The wasteland keeps score.","Blood is just high-viscosity oil.","Three demi-gods. Eight underbosses. One steering wheel.","Drikus is smiling somewhere. That is never good.","The dead do not honk."],Vo="hellride_apocalypse_v1",Wo="hellride_slots_v1",oo={master:.8,music:.7,sfx:.85,quality:"medium",gore:"blood",cameraShake:!0,showFps:!1,controls:"auto"};function uc(a="female"){return{gender:a,face:"sharp",hair:"mohawk",hairColor:"black",eyeColor:"blue",eyeStyle:"human",facialHair:"none",scar:"eye",headgear:"none",skin:"#b9866b",origin:"human"}}function fc(){return"p_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,7)}function dh({name:a,gender:e,origin:t,looks:n}){return{id:fc(),name:(a||"NAMELESS").toUpperCase().slice(0,14),gender:e||"female",origin:t||"human",looks:{...uc(e),...n,origin:t||(n==null?void 0:n.origin)||"human"},createdAt:Date.now(),lastActive:Date.now(),autosave:null,money:650,xp:0,level:1,tutorialDone:!1,victories:0,races:0,drifts:0,bestLap:null,vehicles:["rust_reaper"],equipped:"rust_reaper",career:{defeated:[],current:0},completed:{},missionWins:0,series:null,settings:{...oo}}}function $o(a,e){try{return a?JSON.parse(a):e}catch{return e}}class uh{constructor(){this.state=$o(localStorage.getItem(Vo),null),(!this.state||!Array.isArray(this.state.profiles))&&(this.state={profiles:[],currentProfileId:null}),this.slots=$o(localStorage.getItem(Wo),[null,null,null])}persist(){try{localStorage.setItem(Vo,JSON.stringify(this.state)),localStorage.setItem(Wo,JSON.stringify(this.slots))}catch(e){console.warn("Save failed",e)}}profiles(){return[...this.state.profiles].sort((e,t)=>(t.lastActive||0)-(e.lastActive||0))}profile(){const e=this.state.currentProfileId;return this.state.profiles.find(t=>t.id===e)||null}create(e){const t=dh(e);return this.state.profiles.push(t),this.state.currentProfileId=t.id,this.persist(),t}login(e){const t=this.state.profiles.find(n=>n.id===e);return t?(t.lastActive=Date.now(),this.state.currentProfileId=t.id,this.persist(),t):null}logout(){this.state.currentProfileId=null,this.persist()}remove(e){this.state.profiles=this.state.profiles.filter(t=>t.id!==e),this.state.currentProfileId===e&&(this.state.currentProfileId=null),this.persist()}update(e={}){const t=this.profile();return t?(Object.assign(t,e),t.lastActive=Date.now(),this.persist(),t):null}updateSettings(e){const t=this.profile();if(t)return t.settings={...oo,...t.settings||{},...e},this.persist(),t.settings}autosave(e="THE WASTELAND",t=""){const n=this.profile();if(!n)return null;const i=new Date;return n.autosave={at:i.getTime(),date:i.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}).toUpperCase(),time:i.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),location:String(e||"THE WASTELAND").toUpperCase(),detail:String(t||"")},n.lastActive=i.getTime(),this.persist(),n.autosave}addReward(e,t){const n=this.profile();if(!n)return;n.money+=Math.max(0,Math.round(e)),n.xp+=Math.max(0,Math.round(t));const i=Math.max(1,Math.floor(Math.sqrt(n.xp/250))+1);return n.level=Math.min(i,99),this.persist(),n}saveSlot(e){const t=this.profile();return t?(this.slots[e]={savedAt:Date.now(),name:t.name,level:t.level,money:t.money,profile:JSON.parse(JSON.stringify(t))},this.persist(),!0):!1}loadSlot(e){const t=this.slots[e];if(!(t!=null&&t.profile))return null;const n=JSON.parse(JSON.stringify(t.profile));n.id=n.id||fc(),n.lastActive=Date.now();const i=this.state.profiles.findIndex(r=>r.id===n.id);return i>=0?this.state.profiles[i]=n:this.state.profiles.push(n),this.state.currentProfileId=n.id,this.persist(),n}clearSlot(e){this.slots[e]=null,this.persist()}hasContinue(){return this.profiles().length>0}exportProfile(){return JSON.stringify(this.profile(),null,2)}}function It(a){return"$"+Math.round(a||0).toLocaleString("en-US")}function In(a){if(a==null||!Number.isFinite(a))return"--:--.--";const e=Math.floor(a/60),t=Math.floor(a%60),n=Math.floor(a%1*100);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}.${String(n).padStart(2,"0")}`}function mn(a,e){const t=a.replace("#",""),n=parseInt(t.length===3?t.split("").map(o=>o+o).join(""):t,16);let i=n>>16&255,r=n>>8&255,s=n&255;return i=Math.max(0,Math.min(255,i+e)),r=Math.max(0,Math.min(255,r+e)),s=Math.max(0,Math.min(255,s+e)),`rgb(${i},${r},${s})`}function fh(a){let e=2166136261;for(let t=0;t<a.length;t++)e^=a.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ph(a,e,t){var n;return((n=a.find(i=>i.id===e))==null?void 0:n.value)||t}function mh(a,e){return a.find(t=>t.id===e)||is[0]}function gh(a={}){const e=a.origin||"human";return{gender:"female",face:"sharp",hair:"mohawk",hairColor:"black",eyeColor:"blue",eyeStyle:"human",facialHair:"none",scar:"none",headgear:"none",skin:(mt.find(n=>n.id===e)||mt[0]).skin,...a,origin:e}}function Wi(a,e={},t={}){const n=gh(e),i=Math.min(2,window.devicePixelRatio||1),r=t.size||512;a.width=r*i,a.height=r*i;const s=a.getContext("2d");s.scale(r*i/512,r*i/512);const o=fh((n.name||"")+JSON.stringify(n)),c=n.skin||"#b9866b",h=mn(c,-52),f=mn(c,40),d=ph(vr,n.hairColor,n.hairHex||"#151316"),l=mh(is,n.eyeColor),g=l.value,v=l.glow||g,m=256,u=238,p=n.face==="broad"?66:n.face==="gaunt"?52:n.face==="round"?61:58,x=n.gender==="female",b=n.origin||"human",M=t.boss,C=s.createRadialGradient(m,u-10,20,m,u,360);C.addColorStop(0,t.bg||"#361c18"),C.addColorStop(.55,"#160f10"),C.addColorStop(1,"#070708"),s.fillStyle=C,s.fillRect(0,0,512,512),s.save(),s.globalAlpha=.14,s.strokeStyle=M?"#c1121f":"#d8a44a";for(let $=0;$<9;$++){s.lineWidth=1+o()*2,s.beginPath();let Q=o()*512,De=0;s.moveTo(Q,De);for(let ke=0;ke<5;ke++)Q+=(o()-.5)*70,De+=90+o()*30,s.lineTo(Q,De);s.stroke()}s.restore(),s.save(),s.translate(m,u),s.strokeStyle="rgba(205,164,74,0.18)",s.lineWidth=2,s.beginPath(),s.arc(0,0,218,.15,Math.PI*1.85),s.stroke(),s.strokeStyle="rgba(160,20,26,0.25)",s.beginPath(),s.arc(0,0,230,Math.PI*.2,Math.PI*1.55),s.stroke(),s.restore(),s.save();const A=n.jacket||(b==="ghost"?"#313943":M?"#201417":"#232327"),T=mn(A,28),P=s.createLinearGradient(0,370,0,512);P.addColorStop(0,T),P.addColorStop(1,"#0b0b0c"),s.fillStyle=P,s.beginPath(),s.moveTo(52,512),s.bezierCurveTo(58,415,122,380,190,366),s.lineTo(322,366),s.bezierCurveTo(390,380,454,415,460,512),s.closePath(),s.fill(),s.fillStyle=mn(A,42),s.beginPath(),s.moveTo(186,366),s.lineTo(256,454),s.lineTo(326,366),s.lineTo(300,354),s.lineTo(256,414),s.lineTo(212,354),s.closePath(),s.fill(),s.strokeStyle="rgba(0,0,0,0.55)",s.lineWidth=12,s.beginPath(),s.moveTo(150,402),s.lineTo(224,512),s.stroke(),s.beginPath(),s.moveTo(362,402),s.lineTo(288,512),s.stroke(),s.strokeStyle="rgba(180,38,34,0.5)",s.lineWidth=3,s.beginPath(),s.moveTo(154,406),s.lineTo(228,512),s.stroke(),s.beginPath(),s.moveTo(358,406),s.lineTo(284,512),s.stroke(),s.fillStyle="#b8a57b";for(let $=0;$<5;$++)s.beginPath(),s.arc(118+$*16,422+$*15,2.6,0,7),s.fill(),s.beginPath(),s.arc(394-$*16,422+$*15,2.6,0,7),s.fill();if(s.fillStyle="rgba(0,0,0,0.42)",s.fillRect(310,452,74,34),s.strokeStyle="rgba(190,160,100,0.5)",s.lineWidth=1.5,s.setLineDash([4,4]),s.strokeRect(314,456,66,26),s.setLineDash([]),s.fillStyle="rgba(190,160,100,0.65)",s.font="bold 14px monospace",s.textAlign="center",s.fillText("HELL",347,474),s.restore(),s.fillStyle=h,s.beginPath(),s.moveTo(m-28,320),s.lineTo(m+28,320),s.lineTo(m+34,384),s.lineTo(m-34,384),s.closePath(),s.fill(),s.fillStyle="rgba(0,0,0,0.35)",s.beginPath(),s.ellipse(m,326,31,12,0,0,7),s.fill(),n.hair==="long"||n.hair==="braids"||n.hair==="wild"||n.hair==="ponytail"){if(s.fillStyle=d,n.hair==="ponytail")s.beginPath(),s.ellipse(m+64,230,26,74,-.3,0,7),s.fill(),s.beginPath(),s.ellipse(m+84,304,20,52,-.15,0,7),s.fill();else if(s.beginPath(),s.moveTo(m-p-12,170),s.bezierCurveTo(m-p-48,270,m-p-24,370,m-p+8,400),s.lineTo(m+p-2,400),s.bezierCurveTo(m+p+34,350,m+p+38,240,m+p+8,166),s.closePath(),s.fill(),n.hair==="braids"){s.strokeStyle=mn(d,25),s.lineWidth=10;for(let $=0;$<4;$++)s.beginPath(),s.moveTo(m-p+8+$*16,300),s.quadraticCurveTo(m-p+20+$*16,360,m-p+8+$*16,420),s.stroke(),s.beginPath(),s.moveTo(m+p-8-$*16,300),s.quadraticCurveTo(m+p-20-$*16,360,m+p-8-$*16,420),s.stroke()}}const H=()=>{s.beginPath(),s.moveTo(m-p,u-32),s.bezierCurveTo(m-p-2,u-122,m+p+2,u-122,m+p,u-32),s.bezierCurveTo(m+p*.98,u+26,m+p*.66,u+84,m+(x?20:26),u+108),s.quadraticCurveTo(m,u+120,m-(x?20:26),u+108),s.bezierCurveTo(m-p*.66,u+84,m-p*.98,u+26,m-p,u-32),s.closePath()};s.fillStyle=h,s.beginPath(),s.ellipse(m-p+2,u-5,13,22,.2,0,7),s.fill(),s.beginPath(),s.ellipse(m+p-2,u-5,13,22,-.2,0,7),s.fill();const _=s.createLinearGradient(m-p,u-100,m+p,u+110);_.addColorStop(0,f),_.addColorStop(.45,c),_.addColorStop(1,h),s.fillStyle=_,H(),s.fill(),s.save(),H(),s.clip(),s.fillStyle="rgba(0,0,0,0.16)",s.beginPath(),s.ellipse(m-p*.72,u+10,18,70,.08,0,7),s.fill(),s.beginPath(),s.ellipse(m+p*.72,u+10,18,70,-.08,0,7),s.fill(),s.fillStyle="rgba(255,255,255,0.1)",s.beginPath(),s.ellipse(m-31,u+32,17,9,-.3,0,7),s.fill(),s.beginPath(),s.ellipse(m+31,u+32,17,9,.3,0,7),s.fill();for(let $=0;$<26;$++)s.fillStyle=`rgba(${30+o()*40},${22+o()*30},${18+o()*20},${.04+o()*.1})`,s.beginPath(),s.arc(m-p+o()*p*2,u-90+o()*195,1+o()*6,0,7),s.fill();s.restore();const y=u-10,k=p*.42,F=p*.28,N=vh(n.eyeStyle,x),X=$=>{const Q=m+$*k;if(n.eyeStyle==="cyber"){s.save(),s.fillStyle="rgba(15,10,12,0.82)",s.beginPath(),s.moveTo(Q-23,y-12),s.lineTo(Q+23,y-12),s.lineTo(Q+20,y+11),s.lineTo(Q-20,y+11),s.closePath(),s.fill(),s.strokeStyle="rgba(160,140,110,0.5)",s.lineWidth=1.5,s.stroke(),s.shadowBlur=16,s.shadowColor=v,s.fillStyle=v,s.beginPath(),s.roundRect(Q-15,y-2.5,30,5,3),s.fill(),s.restore();return}if(n.eyeStyle==="hollow"){s.save();const ke=s.createRadialGradient(Q,y,1,Q,y,22);ke.addColorStop(0,g),ke.addColorStop(.25,v),ke.addColorStop(.4,"rgba(8,6,7,0.9)"),ke.addColorStop(1,"#0a0708"),s.fillStyle=ke,s.beginPath(),s.ellipse(Q,y,20,17,0,0,7),s.fill(),s.fillStyle="#050405",s.beginPath(),s.ellipse(Q,y,7,11,0,0,7),s.fill(),s.shadowBlur=15,s.shadowColor=v,s.fillStyle=g,s.beginPath(),s.arc(Q,y,3.4,0,7),s.fill(),s.restore();return}s.save(),s.fillStyle=b==="ghost"?"rgba(220,230,232,0.75)":"#ded7c9",s.beginPath(),s.ellipse(Q,y,F,N,0,0,7),s.fill(),s.strokeStyle="rgba(25,15,14,0.6)",s.lineWidth=1.6,s.beginPath(),s.ellipse(Q,y,F,N,0,0,7),s.stroke(),s.shadowBlur=l.glow?13:0,s.shadowColor=v;const De=s.createRadialGradient(Q,y,1,Q,y,F*.7);De.addColorStop(0,v),De.addColorStop(.55,g),De.addColorStop(1,mn(g,-55)),s.fillStyle=De,s.beginPath(),s.arc(Q,y,F*.68,0,7),s.fill(),s.shadowBlur=0,s.fillStyle="#070607",s.beginPath(),s.ellipse(Q,y,F*.22,N*.62,0,0,7),s.fill(),s.fillStyle="rgba(255,255,255,0.85)",s.beginPath(),s.arc(Q-3,y-3,2.1,0,7),s.fill(),s.strokeStyle="rgba(40,25,25,0.35)",s.lineWidth=1,s.beginPath(),s.moveTo(Q-F,y+N+2),s.quadraticCurveTo(Q,y+N+7,Q+F,y+N+2),s.stroke(),s.restore()};X(-1),X(1),s.strokeStyle=mn(d,18),s.lineWidth=x?4:6,s.lineCap="round",s.beginPath(),s.moveTo(m-k-15,y-18),s.quadraticCurveTo(m-k,y-25,m-k+14,y-17),s.stroke(),s.beginPath(),s.moveTo(m+k-14,y-17),s.quadraticCurveTo(m+k,y-25,m+k+15,y-18),s.stroke(),(n.browScar||n.scar==="eye")&&(s.strokeStyle="rgba(220,170,150,0.65)",s.lineWidth=2,s.beginPath(),s.moveTo(m+k-10,y-40),s.lineTo(m+k+16,y+7),s.stroke()),s.strokeStyle="rgba(55,30,26,0.45)",s.lineWidth=x?3:4,s.beginPath(),s.moveTo(m-2,y+8),s.quadraticCurveTo(m-8,u+35,m-13,u+39),s.stroke(),s.strokeStyle="rgba(0,0,0,0.25)",s.lineWidth=2,s.beginPath(),s.moveTo(m-14,u+41),s.quadraticCurveTo(m,u+47,m+15,u+40),s.stroke(),s.fillStyle="rgba(0,0,0,0.16)",s.beginPath(),s.ellipse(m-13,u+40,4,2.4,0,0,7),s.fill(),s.beginPath(),s.ellipse(m+13,u+40,4,2.4,0,0,7),s.fill();const O=u+70;s.strokeStyle=n.joker?"#4b0b1f":"rgba(65,26,28,0.9)",s.lineWidth=x?5:4,s.beginPath(),n.joker?(s.moveTo(m-38,O-2),s.quadraticCurveTo(m,O+24,m+38,O-2),s.stroke(),s.strokeStyle="rgba(180,20,40,0.85)",s.lineWidth=2.5,s.beginPath(),s.moveTo(m-43,O-8),s.quadraticCurveTo(m,O+30,m+43,O-8),s.stroke()):(s.moveTo(m-20,O),s.quadraticCurveTo(m,O+(x?8:4),m+20,O),s.stroke()),x&&(s.fillStyle="rgba(120,50,50,0.4)",s.beginPath(),s.ellipse(m,O+7,16,4,0,0,7),s.fill()),n.fangs&&(s.fillStyle="#e8e2d2",s.beginPath(),s.moveTo(m-19,O+2),s.lineTo(m-13,O+13),s.lineTo(m-8,O+2),s.fill(),s.beginPath(),s.moveTo(m+19,O+2),s.lineTo(m+13,O+13),s.lineTo(m+8,O+2),s.fill());const Y=n.facialHair;if(Y&&Y!=="none"){if(s.fillStyle=d,Y==="stubble")s.save(),s.globalAlpha=.25,s.beginPath(),s.ellipse(m,u+66,44,42,0,0,Math.PI),s.fill(),s.restore();else if(Y==="mustache")s.beginPath(),s.moveTo(m-24,O-7),s.quadraticCurveTo(m,O-16,m+24,O-7),s.quadraticCurveTo(m,O+3,m-24,O-7),s.fill();else if(Y==="goatee")s.beginPath(),s.ellipse(m,O+18,14,20,0,0,7),s.fill(),s.beginPath(),s.moveTo(m-20,O-8),s.quadraticCurveTo(m,O-15,m+20,O-8),s.quadraticCurveTo(m,O,m-20,O-8),s.fill();else if(s.beginPath(),s.moveTo(m-43,u+30),s.bezierCurveTo(m-50,u+108,m-20,u+128,m,u+125),s.bezierCurveTo(m+20,u+128,m+50,u+108,m+43,u+30),s.quadraticCurveTo(m+30,u+70,m,u+74),s.quadraticCurveTo(m-30,u+70,m-43,u+30),s.fill(),Y==="braided"){s.strokeStyle=mn(d,35),s.lineWidth=2;for(let $=0;$<3;$++)s.beginPath(),s.moveTo(m-18+$*18,u+95),s.lineTo(m-14+$*18,u+132),s.stroke()}}const V=n.scar;if(V==="eye")s.strokeStyle="rgba(210,155,140,0.8)",s.lineWidth=2.5,s.beginPath(),s.moveTo(m+k-6,y-44),s.lineTo(m+k+14,y+16),s.stroke(),s.strokeStyle="rgba(110,35,35,0.55)",s.lineWidth=1,s.beginPath(),s.moveTo(m+k-4,y-20),s.lineTo(m+k+9,y-16),s.stroke();else if(V==="cheek")s.strokeStyle="rgba(205,150,135,0.75)",s.lineWidth=2.2,s.beginPath(),s.moveTo(m-p+15,u+12),s.lineTo(m-p+34,u+55),s.stroke(),s.beginPath(),s.moveTo(m-p+25,u+34),s.lineTo(m-p+42,u+30),s.stroke();else if(V==="x")s.strokeStyle="rgba(200,145,130,0.8)",s.lineWidth=2.4,s.beginPath(),s.moveTo(m-50,u+18),s.lineTo(m-24,u+50),s.stroke(),s.beginPath(),s.moveTo(m-24,u+18),s.lineTo(m-50,u+50),s.stroke();else if(V==="burn"){s.save(),s.globalAlpha=.45;const $=s.createRadialGradient(m+38,u+38,2,m+38,u+38,30);$.addColorStop(0,"#6e2a25"),$.addColorStop(1,"rgba(60,20,20,0)"),s.fillStyle=$,s.beginPath(),s.arc(m+38,u+38,30,0,7),s.fill(),s.restore()}if(s.fillStyle=d,n.hair==="mohawk"){s.beginPath(),s.moveTo(m-12,u-90),s.bezierCurveTo(m-20,u-170,m+20,u-174,m+12,u-90),s.lineTo(m+42,u-82),s.bezierCurveTo(m+34,u-140,m-30,u-144,m-42,u-82),s.closePath(),s.fill(),s.fillStyle=mn(d,30);for(let $=0;$<5;$++)s.beginPath(),s.arc(m-18+$*9,u-125+$%2*6,3,0,7),s.fill()}else n.hair==="bald"||n.hair==="buzz"?(n.hair==="buzz"&&(s.save(),s.globalAlpha=.5,s.beginPath(),s.ellipse(m,u-46,p-3,50,0,Math.PI,Math.PI*2),s.fill(),s.restore()),(!V||V==="none")&&(s.strokeStyle="rgba(190,140,125,0.4)",s.lineWidth=1.5,s.beginPath(),s.moveTo(m-16,u-70),s.lineTo(m+4,u-52),s.stroke())):n.hair==="hood"?(s.fillStyle="#1c1c20",s.beginPath(),s.moveTo(m-p-24,u+40),s.bezierCurveTo(m-p-34,u-150,m+p+34,u-150,m+p+24,u+40),s.bezierCurveTo(m+p-4,u-70,m-p+4,u-70,m-p-24,u+40),s.fill()):(s.beginPath(),s.moveTo(m-p-2,u-26),s.bezierCurveTo(m-p-8,u-112,m+p+8,u-120,m+p+2,u-26),s.lineTo(m+p-6,u-20),n.hair==="wild"?(s.lineTo(m+32,u-74),s.lineTo(m+18,u-48),s.lineTo(m-4,u-82),s.lineTo(m-26,u-40)):n.hair==="long"?(s.lineTo(m+38,u-66),s.lineTo(m+8,u-42),s.lineTo(m-22,u-80),s.lineTo(m-52,u-30)):(s.lineTo(m+42,u-60),s.lineTo(m+6,u-52),s.lineTo(m-30,u-84),s.lineTo(m-58,u-20)),s.lineTo(m-p+6,u-20),s.closePath(),s.fill(),s.strokeStyle="rgba(255,255,255,0.13)",s.lineWidth=6,s.beginPath(),s.moveTo(m-38,u-94),s.quadraticCurveTo(m-6,u-116,m+30,u-82),s.stroke());if((b==="demon"||n.headgear==="horns")&&(s.fillStyle="#2a1714",s.beginPath(),s.moveTo(m-p+4,u-78),s.bezierCurveTo(m-p-38,u-150,m-p-12,u-190,m-p+10,u-128),s.closePath(),s.fill(),s.beginPath(),s.moveTo(m+p-4,u-78),s.bezierCurveTo(m+p+38,u-150,m+p+12,u-190,m+p-10,u-128),s.closePath(),s.fill(),s.strokeStyle="rgba(180,60,40,0.35)",s.lineWidth=2,s.beginPath(),s.moveTo(m-p-8,u-120),s.quadraticCurveTo(m-p-20,u-150,m-p-2,u-166),s.stroke()),n.ghost&&(s.save(),s.globalCompositeOperation="screen",s.globalAlpha=.12,s.fillStyle="#82d7e8",s.beginPath(),s.ellipse(m,u+40,p+20,160,0,0,7),s.fill(),s.restore()),n.wool){s.fillStyle="#e6e0d0";for(let $=0;$<12;$++){const Q=-Math.PI+$/11*Math.PI;s.beginPath(),s.arc(m+Math.cos(Q)*(p+2),u-40+Math.sin(Q)*65,25,0,7),s.fill()}}if((n.headgear==="anubis"||n.anubis)&&(s.fillStyle="#16110c",s.beginPath(),s.moveTo(m-p-2,u-120),s.lineTo(m-p-8,u-210),s.lineTo(m-22,u-250),s.lineTo(m-34,u-150),s.lineTo(m-p-2,u-120),s.fill(),s.beginPath(),s.moveTo(m+p+2,u-120),s.lineTo(m+p+8,u-210),s.lineTo(m+22,u-250),s.lineTo(m+34,u-150),s.lineTo(m+p+2,u-120),s.fill(),s.strokeStyle="#d8ab3c",s.lineWidth=3,s.beginPath(),s.moveTo(m-p-4,u-130),s.lineTo(m-24,u-238),s.stroke(),s.beginPath(),s.moveTo(m+p+4,u-130),s.lineTo(m+24,u-238),s.stroke(),s.strokeStyle="#e7b93f",s.lineWidth=4,s.beginPath(),s.moveTo(m-72,u-20),s.lineTo(m-22,u-20),s.quadraticCurveTo(m-34,u+20,m-60,u+8),s.stroke(),s.strokeStyle="#b98c2b",s.lineWidth=3,s.beginPath(),s.moveTo(m+22,u-18),s.lineTo(m+72,u-18),s.stroke(),s.beginPath(),s.moveTo(m+54,u-18),s.quadraticCurveTo(m+62,u+20,m+34,u+18),s.stroke(),s.fillStyle="#e7b93f",s.beginPath(),s.moveTo(m-6,u+56),s.lineTo(m+6,u+56),s.lineTo(m,u+74),s.fill()),n.headgear==="ears"||n.ears){const $=n.earColor||(n.hair==="white"?"#e2ddd1":"#b66a3b");s.fillStyle=$,s.beginPath(),s.moveTo(m-p+2,u-92),s.lineTo(m-p-44,u-218),s.lineTo(m-20,u-118),s.closePath(),s.fill(),s.beginPath(),s.moveTo(m+p-2,u-92),s.lineTo(m+p+44,u-218),s.lineTo(m+20,u-118),s.closePath(),s.fill(),s.fillStyle=n.furInner||"#6f4438",s.beginPath(),s.moveTo(m-p+4,u-108),s.lineTo(m-p-30,u-194),s.lineTo(m-26,u-126),s.closePath(),s.fill(),s.beginPath(),s.moveTo(m+p-4,u-108),s.lineTo(m+p+30,u-194),s.lineTo(m+26,u-126),s.closePath(),s.fill()}if(n.muzzle&&(s.save(),s.fillStyle=f,s.beginPath(),s.ellipse(m,u+58,34,28,0,0,7),s.fill(),s.fillStyle="rgba(20,12,12,0.9)",s.beginPath(),s.ellipse(m,u+45,11,7,0,0,7),s.fill(),s.strokeStyle="rgba(30,18,15,0.6)",s.lineWidth=1.5,s.beginPath(),s.moveTo(m,u+52),s.lineTo(m,u+65),s.stroke(),s.beginPath(),s.moveTo(m,u+65),s.quadraticCurveTo(m-12,u+75,m-18,u+64),s.stroke(),s.beginPath(),s.moveTo(m,u+65),s.quadraticCurveTo(m+12,u+75,m+18,u+64),s.stroke(),s.restore()),n.headgear==="crown"||n.crown){s.fillStyle="#141318",s.strokeStyle="#d8ab3c",s.lineWidth=3,s.beginPath(),s.moveTo(m-58,u-100),s.lineTo(m-52,u-152),s.lineTo(m-26,u-122),s.lineTo(m,u-176),s.lineTo(m+26,u-122),s.lineTo(m+52,u-152),s.lineTo(m+58,u-100),s.closePath(),s.fill(),s.stroke(),s.fillStyle="#37c8ff";for(let $=0;$<3;$++)s.beginPath(),s.arc(m-34+$*34,u-112,4.5,0,7),s.fill()}if((n.headgear==="jester"||n.joker)&&(s.fillStyle="#3a1c56",s.beginPath(),s.moveTo(m-p+4,u-86),s.lineTo(m-88,u-210),s.lineTo(m-10,u-118),s.closePath(),s.fill(),s.fillStyle="#285c30",s.beginPath(),s.moveTo(m+p-4,u-86),s.lineTo(m+88,u-210),s.lineTo(m+10,u-118),s.closePath(),s.fill(),s.fillStyle="#c9b04a",s.beginPath(),s.arc(m-88,u-214,10,0,7),s.fill(),s.beginPath(),s.arc(m+88,u-214,10,0,7),s.fill(),s.fillStyle="rgba(180,20,40,0.6)",s.save(),s.translate(m-44,u-38),s.rotate(Math.PI/4),s.fillRect(-9,-9,18,18),s.restore(),s.save(),s.translate(m+44,u-38),s.rotate(Math.PI/4),s.fillRect(-9,-9,18,18),s.restore()),n.headgear==="goggles"&&(s.fillStyle="rgba(20,18,20,0.9)",s.beginPath(),s.roundRect(m-p-4,u-44,p*2+8,34,8),s.fill(),s.strokeStyle="#5b5044",s.lineWidth=2,s.stroke(),s.fillStyle="rgba(90,180,200,0.4)",s.beginPath(),s.ellipse(m-24,u-27,17,11,0,0,7),s.fill(),s.beginPath(),s.ellipse(m+24,u-27,17,11,0,0,7),s.fill()),n.headgear==="bandana"&&(s.fillStyle="#7a1d1d",s.beginPath(),s.moveTo(m-p-4,u-58),s.lineTo(m+p+4,u-58),s.lineTo(m+p+1,u-84),s.lineTo(m-p-1,u-84),s.fill(),s.fillStyle="#5e1414",s.beginPath(),s.moveTo(m+p+1,u-74),s.lineTo(m+p+38,u-48),s.lineTo(m+p+24,u-92),s.fill()),t.gore!=="off"){s.save(),s.globalAlpha=.65;const $=t.gore==="zombie"?"rgba(90,150,50,0.8)":"rgba(130,18,20,0.8)";s.fillStyle=$;for(let Q=0;Q<7;Q++)s.beginPath(),s.arc(80+o()*360,60+o()*420,1+o()*5,0,7),s.fill();s.restore()}const re=s.createRadialGradient(m,u,120,m,u,320);return re.addColorStop(0,"rgba(0,0,0,0)"),re.addColorStop(1,"rgba(0,0,0,0.7)"),s.fillStyle=re,s.fillRect(0,0,512,512),a}function vh(a,e){return a==="cyber"?7:a==="hollow"?12:e?8:7}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lo="169",_h=0,Xo=1,xh=2,pc=1,bh=2,yn=3,On=0,Ot=1,Yt=2,Nn=0,Li=1,qo=2,Yo=3,Ko=4,yh=5,Kn=100,Sh=101,Mh=102,Eh=103,Th=104,wh=200,Ah=201,Rh=202,Ch=203,_r=204,xr=205,Ph=206,Lh=207,Ih=208,Dh=209,Nh=210,Uh=211,Oh=212,kh=213,Fh=214,br=0,yr=1,Sr=2,Ni=3,Mr=4,Er=5,Tr=6,wr=7,co=0,Bh=1,zh=2,Un=0,Hh=1,Gh=2,Vh=3,Wh=4,$h=5,Xh=6,qh=7,mc=300,Ui=301,Oi=302,Ar=303,Rr=304,ma=306,cs=1e3,Jn=1001,Cr=1002,Ht=1003,Yh=1004,bs=1005,an=1006,La=1007,Qn=1008,Mn=1009,gc=1010,vc=1011,hs=1012,ho=1013,ti=1014,dn=1015,gs=1016,uo=1017,fo=1018,ki=1020,_c=35902,xc=1021,bc=1022,on=1023,yc=1024,Sc=1025,Ii=1026,Fi=1027,po=1028,mo=1029,Mc=1030,go=1031,vo=1033,Js=33776,Qs=33777,ea=33778,ta=33779,Pr=35840,Lr=35841,Ir=35842,Dr=35843,Nr=36196,Ur=37492,Or=37496,kr=37808,Fr=37809,Br=37810,zr=37811,Hr=37812,Gr=37813,Vr=37814,Wr=37815,$r=37816,Xr=37817,qr=37818,Yr=37819,Kr=37820,Zr=37821,na=36492,jr=36494,Jr=36495,Ec=36283,Qr=36284,eo=36285,to=36286,Kh=3200,Zh=3201,Tc=0,jh=1,Dn="",St="srgb",kn="srgb-linear",_o="display-p3",ga="display-p3-linear",aa="linear",lt="srgb",ra="rec709",oa="p3",di=7680,Zo=519,Jh=512,Qh=513,ed=514,wc=515,td=516,nd=517,id=518,sd=519,jo=35044,Jo="300 es",Sn=2e3,la=2001;class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qo=1234567;const ss=Math.PI/180,ds=180/Math.PI;function ri(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[a&255]+Ct[a>>8&255]+Ct[a>>16&255]+Ct[a>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function At(a,e,t){return Math.max(e,Math.min(t,a))}function xo(a,e){return(a%e+e)%e}function ad(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function rd(a,e,t){return a!==e?(t-a)/(e-a):0}function as(a,e,t){return(1-t)*a+t*e}function od(a,e,t,n){return as(a,e,1-Math.exp(-t*n))}function ld(a,e=1){return e-Math.abs(xo(a,e*2)-e)}function cd(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function hd(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function dd(a,e){return a+Math.floor(Math.random()*(e-a+1))}function ud(a,e){return a+Math.random()*(e-a)}function fd(a){return a*(.5-Math.random())}function pd(a){a!==void 0&&(Qo=a);let e=Qo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function md(a){return a*ss}function gd(a){return a*ds}function vd(a){return(a&a-1)===0&&a!==0}function _d(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function xd(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function bd(a,e,t,n,i){const r=Math.cos,s=Math.sin,o=r(t/2),c=s(t/2),h=r((e+n)/2),f=s((e+n)/2),d=r((e-n)/2),l=s((e-n)/2),g=r((n-e)/2),v=s((n-e)/2);switch(i){case"XYX":a.set(o*f,c*d,c*l,o*h);break;case"YZY":a.set(c*l,o*f,c*d,o*h);break;case"ZXZ":a.set(c*d,c*l,o*f,o*h);break;case"XZX":a.set(o*f,c*v,c*g,o*h);break;case"YXY":a.set(c*g,o*f,c*v,o*h);break;case"ZYZ":a.set(c*v,c*g,o*f,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ai(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Dt(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Ia={DEG2RAD:ss,RAD2DEG:ds,generateUUID:ri,clamp:At,euclideanModulo:xo,mapLinear:ad,inverseLerp:rd,lerp:as,damp:od,pingpong:ld,smoothstep:cd,smootherstep:hd,randInt:dd,randFloat:ud,randFloatSpread:fd,seededRandom:pd,degToRad:md,radToDeg:gd,isPowerOfTwo:vd,ceilPowerOfTwo:_d,floorPowerOfTwo:xd,setQuaternionFromProperEuler:bd,normalize:Dt,denormalize:Ai};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,r,s,o,c,h){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,c,h)}set(e,t,n,i,r,s,o,c,h){const f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=s,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[3],c=n[6],h=n[1],f=n[4],d=n[7],l=n[2],g=n[5],v=n[8],m=i[0],u=i[3],p=i[6],x=i[1],b=i[4],M=i[7],C=i[2],A=i[5],T=i[8];return r[0]=s*m+o*x+c*C,r[3]=s*u+o*b+c*A,r[6]=s*p+o*M+c*T,r[1]=h*m+f*x+d*C,r[4]=h*u+f*b+d*A,r[7]=h*p+f*M+d*T,r[2]=l*m+g*x+v*C,r[5]=l*u+g*b+v*A,r[8]=l*p+g*M+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],c=e[6],h=e[7],f=e[8];return t*s*f-t*o*h-n*r*f+n*o*c+i*r*h-i*s*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],c=e[6],h=e[7],f=e[8],d=f*s-o*h,l=o*c-f*r,g=h*r-s*c,v=t*d+n*l+i*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/v;return e[0]=d*m,e[1]=(i*h-f*n)*m,e[2]=(o*n-i*s)*m,e[3]=l*m,e[4]=(f*t-i*c)*m,e[5]=(i*r-o*t)*m,e[6]=g*m,e[7]=(n*c-h*t)*m,e[8]=(s*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*s+h*o)+s+e,-i*h,i*c,-i*(-h*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Da.makeScale(e,t)),this}rotate(e){return this.premultiply(Da.makeRotation(-e)),this}translate(e,t){return this.premultiply(Da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new Be;function Ac(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ca(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function yd(){const a=ca("canvas");return a.style.display="block",a}const el={};function ia(a){a in el||(el[a]=!0,console.warn(a))}function Sd(a,e,t){return new Promise(function(n,i){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Md(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ed(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tl=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nl=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$i={[kn]:{transfer:aa,primaries:ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a,fromReference:a=>a},[St]:{transfer:lt,primaries:ra,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[ga]:{transfer:aa,primaries:oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.applyMatrix3(nl),fromReference:a=>a.applyMatrix3(tl)},[_o]:{transfer:lt,primaries:oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.convertSRGBToLinear().applyMatrix3(nl),fromReference:a=>a.applyMatrix3(tl).convertLinearToSRGB()}},Td=new Set([kn,ga]),Je={enabled:!0,_workingColorSpace:kn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Td.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=$i[e].toReference,i=$i[t].fromReference;return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return $i[a].primaries},getTransfer:function(a){return a===Dn?aa:$i[a].transfer},getLuminanceCoefficients:function(a,e=this._workingColorSpace){return a.fromArray($i[e].luminanceCoefficients)}};function Di(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Na(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ui;class wd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=ca("canvas")),ui.width=e.width,ui.height=e.height;const n=ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ca("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Di(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ad=0;class Rc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Ua(i[s].image)):r.push(Ua(i[s]))}else r=Ua(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ua(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?wd.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rd=0;class Lt extends Gi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Jn,i=Jn,r=an,s=Qn,o=on,c=Mn,h=Lt.DEFAULT_ANISOTROPY,f=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=ri(),this.name="",this.source=new Rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=mc;Lt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,h=c[0],f=c[4],d=c[8],l=c[1],g=c[5],v=c[9],m=c[2],u=c[6],p=c[10];if(Math.abs(f-l)<.01&&Math.abs(d-m)<.01&&Math.abs(v-u)<.01){if(Math.abs(f+l)<.1&&Math.abs(d+m)<.1&&Math.abs(v+u)<.1&&Math.abs(h+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,M=(g+1)/2,C=(p+1)/2,A=(f+l)/4,T=(d+m)/4,P=(v+u)/4;return b>M&&b>C?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=T/n):M>C?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=P/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=T/r,i=P/r),this.set(n,i,r,t),this}let x=Math.sqrt((u-v)*(u-v)+(d-m)*(d-m)+(l-f)*(l-f));return Math.abs(x)<.001&&(x=1),this.x=(u-v)/x,this.y=(d-m)/x,this.z=(l-f)/x,this.w=Math.acos((h+g+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cd extends Gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends Cd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cc extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pd extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,o){let c=n[i+0],h=n[i+1],f=n[i+2],d=n[i+3];const l=r[s+0],g=r[s+1],v=r[s+2],m=r[s+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=f,e[t+3]=d;return}if(o===1){e[t+0]=l,e[t+1]=g,e[t+2]=v,e[t+3]=m;return}if(d!==m||c!==l||h!==g||f!==v){let u=1-o;const p=c*l+h*g+f*v+d*m,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const C=Math.sqrt(b),A=Math.atan2(C,p*x);u=Math.sin(u*A)/C,o=Math.sin(o*A)/C}const M=o*x;if(c=c*u+l*M,h=h*u+g*M,f=f*u+v*M,d=d*u+m*M,u===1-o){const C=1/Math.sqrt(c*c+h*h+f*f+d*d);c*=C,h*=C,f*=C,d*=C}}e[t]=c,e[t+1]=h,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,s){const o=n[i],c=n[i+1],h=n[i+2],f=n[i+3],d=r[s],l=r[s+1],g=r[s+2],v=r[s+3];return e[t]=o*v+f*d+c*g-h*l,e[t+1]=c*v+f*l+h*d-o*g,e[t+2]=h*v+f*g+o*l-c*d,e[t+3]=f*v-o*d-c*l-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,s=e._order,o=Math.cos,c=Math.sin,h=o(n/2),f=o(i/2),d=o(r/2),l=c(n/2),g=c(i/2),v=c(r/2);switch(s){case"XYZ":this._x=l*f*d+h*g*v,this._y=h*g*d-l*f*v,this._z=h*f*v+l*g*d,this._w=h*f*d-l*g*v;break;case"YXZ":this._x=l*f*d+h*g*v,this._y=h*g*d-l*f*v,this._z=h*f*v-l*g*d,this._w=h*f*d+l*g*v;break;case"ZXY":this._x=l*f*d-h*g*v,this._y=h*g*d+l*f*v,this._z=h*f*v+l*g*d,this._w=h*f*d-l*g*v;break;case"ZYX":this._x=l*f*d-h*g*v,this._y=h*g*d+l*f*v,this._z=h*f*v-l*g*d,this._w=h*f*d+l*g*v;break;case"YZX":this._x=l*f*d+h*g*v,this._y=h*g*d+l*f*v,this._z=h*f*v-l*g*d,this._w=h*f*d-l*g*v;break;case"XZY":this._x=l*f*d-h*g*v,this._y=h*g*d-l*f*v,this._z=h*f*v+l*g*d,this._w=h*f*d+l*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],o=t[5],c=t[9],h=t[2],f=t[6],d=t[10],l=n+o+d;if(l>0){const g=.5/Math.sqrt(l+1);this._w=.25/g,this._x=(f-c)*g,this._y=(r-h)*g,this._z=(s-i)*g}else if(n>o&&n>d){const g=2*Math.sqrt(1+n-o-d);this._w=(f-c)/g,this._x=.25*g,this._y=(i+s)/g,this._z=(r+h)/g}else if(o>d){const g=2*Math.sqrt(1+o-n-d);this._w=(r-h)/g,this._x=(i+s)/g,this._y=.25*g,this._z=(c+f)/g}else{const g=2*Math.sqrt(1+d-n-o);this._w=(s-i)/g,this._x=(r+h)/g,this._y=(c+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,o=t._x,c=t._y,h=t._z,f=t._w;return this._x=n*f+s*o+i*h-r*c,this._y=i*f+s*c+r*o-n*h,this._z=r*f+s*h+n*c-i*o,this._w=s*f-n*o-i*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*s+t*this._w,this._x=g*n+t*this._x,this._y=g*i+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const h=Math.sqrt(c),f=Math.atan2(h,o),d=Math.sin((1-t)*f)/h,l=Math.sin(t*f)/h;return this._w=s*d+this._w*l,this._x=n*d+this._x*l,this._y=i*d+this._y*l,this._z=r*d+this._z*l,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,o=e.z,c=e.w,h=2*(s*i-o*n),f=2*(o*t-r*i),d=2*(r*n-s*t);return this.x=t+c*h+s*d-o*f,this.y=n+c*f+o*h-r*d,this.z=i+c*d+r*f-s*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*s-n*c,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oa.copy(this).projectOnVector(e),this.sub(Oa)}reflect(e){return this.sub(Oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oa=new R,il=new vs;class oi{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Qt):Qt.fromBufferAttribute(r,s),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xi),Ss.subVectors(this.max,Xi),fi.subVectors(e.a,Xi),pi.subVectors(e.b,Xi),mi.subVectors(e.c,Xi),wn.subVectors(pi,fi),An.subVectors(mi,pi),zn.subVectors(fi,mi);let t=[0,-wn.z,wn.y,0,-An.z,An.y,0,-zn.z,zn.y,wn.z,0,-wn.x,An.z,0,-An.x,zn.z,0,-zn.x,-wn.y,wn.x,0,-An.y,An.x,0,-zn.y,zn.x,0];return!ka(t,fi,pi,mi,Ss)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,fi,pi,mi,Ss))?!1:(Ms.crossVectors(wn,An),t=[Ms.x,Ms.y,Ms.z],ka(t,fi,pi,mi,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new R,new R,new R,new R,new R,new R,new R,new R],Qt=new R,ys=new oi,fi=new R,pi=new R,mi=new R,wn=new R,An=new R,zn=new R,Xi=new R,Ss=new R,Ms=new R,Hn=new R;function ka(a,e,t,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){Hn.fromArray(a,r);const o=i.x*Math.abs(Hn.x)+i.y*Math.abs(Hn.y)+i.z*Math.abs(Hn.z),c=e.dot(Hn),h=t.dot(Hn),f=n.dot(Hn);if(Math.max(-Math.max(c,h,f),Math.min(c,h,f))>o)return!1}return!0}const Ld=new oi,qi=new R,Fa=new R;class li{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ld.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(qi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(Fa)),this.expandByPoint(qi.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new R,Ba=new R,Es=new R,Rn=new R,za=new R,Ts=new R,Ha=new R;class bo{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ba.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(Ba);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Es),o=Rn.dot(this.direction),c=-Rn.dot(Es),h=Rn.lengthSq(),f=Math.abs(1-s*s);let d,l,g,v;if(f>0)if(d=s*c-o,l=s*o-c,v=r*f,d>=0)if(l>=-v)if(l<=v){const m=1/f;d*=m,l*=m,g=d*(d+s*l+2*o)+l*(s*d+l+2*c)+h}else l=r,d=Math.max(0,-(s*l+o)),g=-d*d+l*(l+2*c)+h;else l=-r,d=Math.max(0,-(s*l+o)),g=-d*d+l*(l+2*c)+h;else l<=-v?(d=Math.max(0,-(-s*r+o)),l=d>0?-r:Math.min(Math.max(-r,-c),r),g=-d*d+l*(l+2*c)+h):l<=v?(d=0,l=Math.min(Math.max(-r,-c),r),g=l*(l+2*c)+h):(d=Math.max(0,-(s*r+o)),l=d>0?r:Math.min(Math.max(-r,-c),r),g=-d*d+l*(l+2*c)+h);else l=s>0?-r:r,d=Math.max(0,-(s*l+o)),g=-d*d+l*(l+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ba).addScaledVector(Es,l),g}intersectSphere(e,t){vn.subVectors(e.center,this.origin);const n=vn.dot(this.direction),i=vn.dot(vn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,o,c;const h=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,l=this.origin;return h>=0?(n=(e.min.x-l.x)*h,i=(e.max.x-l.x)*h):(n=(e.max.x-l.x)*h,i=(e.min.x-l.x)*h),f>=0?(r=(e.min.y-l.y)*f,s=(e.max.y-l.y)*f):(r=(e.max.y-l.y)*f,s=(e.min.y-l.y)*f),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),d>=0?(o=(e.min.z-l.z)*d,c=(e.max.z-l.z)*d):(o=(e.max.z-l.z)*d,c=(e.min.z-l.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,i,r){za.subVectors(t,e),Ts.subVectors(n,e),Ha.crossVectors(za,Ts);let s=this.direction.dot(Ha),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Rn.subVectors(this.origin,e);const c=o*this.direction.dot(Ts.crossVectors(Rn,Ts));if(c<0)return null;const h=o*this.direction.dot(za.cross(Rn));if(h<0||c+h>s)return null;const f=-o*Rn.dot(Ha);return f<0?null:this.at(f/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,i,r,s,o,c,h,f,d,l,g,v,m,u){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,o,c,h,f,d,l,g,v,m,u)}set(e,t,n,i,r,s,o,c,h,f,d,l,g,v,m,u){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=s,p[9]=o,p[13]=c,p[2]=h,p[6]=f,p[10]=d,p[14]=l,p[3]=g,p[7]=v,p[11]=m,p[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gi.setFromMatrixColumn(e,0).length(),r=1/gi.setFromMatrixColumn(e,1).length(),s=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(i),h=Math.sin(i),f=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const l=s*f,g=s*d,v=o*f,m=o*d;t[0]=c*f,t[4]=-c*d,t[8]=h,t[1]=g+v*h,t[5]=l-m*h,t[9]=-o*c,t[2]=m-l*h,t[6]=v+g*h,t[10]=s*c}else if(e.order==="YXZ"){const l=c*f,g=c*d,v=h*f,m=h*d;t[0]=l+m*o,t[4]=v*o-g,t[8]=s*h,t[1]=s*d,t[5]=s*f,t[9]=-o,t[2]=g*o-v,t[6]=m+l*o,t[10]=s*c}else if(e.order==="ZXY"){const l=c*f,g=c*d,v=h*f,m=h*d;t[0]=l-m*o,t[4]=-s*d,t[8]=v+g*o,t[1]=g+v*o,t[5]=s*f,t[9]=m-l*o,t[2]=-s*h,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const l=s*f,g=s*d,v=o*f,m=o*d;t[0]=c*f,t[4]=v*h-g,t[8]=l*h+m,t[1]=c*d,t[5]=m*h+l,t[9]=g*h-v,t[2]=-h,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const l=s*c,g=s*h,v=o*c,m=o*h;t[0]=c*f,t[4]=m-l*d,t[8]=v*d+g,t[1]=d,t[5]=s*f,t[9]=-o*f,t[2]=-h*f,t[6]=g*d+v,t[10]=l-m*d}else if(e.order==="XZY"){const l=s*c,g=s*h,v=o*c,m=o*h;t[0]=c*f,t[4]=-d,t[8]=h*f,t[1]=l*d+m,t[5]=s*f,t[9]=g*d-v,t[2]=v*d-g,t[6]=o*f,t[10]=m*d+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Id,e,Dd)}lookAt(e,t,n){const i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Cn.crossVectors(n,$t),Cn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Cn.crossVectors(n,$t)),Cn.normalize(),ws.crossVectors($t,Cn),i[0]=Cn.x,i[4]=ws.x,i[8]=$t.x,i[1]=Cn.y,i[5]=ws.y,i[9]=$t.y,i[2]=Cn.z,i[6]=ws.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],o=n[4],c=n[8],h=n[12],f=n[1],d=n[5],l=n[9],g=n[13],v=n[2],m=n[6],u=n[10],p=n[14],x=n[3],b=n[7],M=n[11],C=n[15],A=i[0],T=i[4],P=i[8],H=i[12],_=i[1],y=i[5],k=i[9],F=i[13],N=i[2],X=i[6],O=i[10],Y=i[14],V=i[3],re=i[7],$=i[11],Q=i[15];return r[0]=s*A+o*_+c*N+h*V,r[4]=s*T+o*y+c*X+h*re,r[8]=s*P+o*k+c*O+h*$,r[12]=s*H+o*F+c*Y+h*Q,r[1]=f*A+d*_+l*N+g*V,r[5]=f*T+d*y+l*X+g*re,r[9]=f*P+d*k+l*O+g*$,r[13]=f*H+d*F+l*Y+g*Q,r[2]=v*A+m*_+u*N+p*V,r[6]=v*T+m*y+u*X+p*re,r[10]=v*P+m*k+u*O+p*$,r[14]=v*H+m*F+u*Y+p*Q,r[3]=x*A+b*_+M*N+C*V,r[7]=x*T+b*y+M*X+C*re,r[11]=x*P+b*k+M*O+C*$,r[15]=x*H+b*F+M*Y+C*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],o=e[5],c=e[9],h=e[13],f=e[2],d=e[6],l=e[10],g=e[14],v=e[3],m=e[7],u=e[11],p=e[15];return v*(+r*c*d-i*h*d-r*o*l+n*h*l+i*o*g-n*c*g)+m*(+t*c*g-t*h*l+r*s*l-i*s*g+i*h*f-r*c*f)+u*(+t*h*d-t*o*g-r*s*d+n*s*g+r*o*f-n*h*f)+p*(-i*o*f-t*c*d+t*o*l+i*s*d-n*s*l+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],o=e[5],c=e[6],h=e[7],f=e[8],d=e[9],l=e[10],g=e[11],v=e[12],m=e[13],u=e[14],p=e[15],x=d*u*h-m*l*h+m*c*g-o*u*g-d*c*p+o*l*p,b=v*l*h-f*u*h-v*c*g+s*u*g+f*c*p-s*l*p,M=f*m*h-v*d*h+v*o*g-s*m*g-f*o*p+s*d*p,C=v*d*c-f*m*c-v*o*l+s*m*l+f*o*u-s*d*u,A=t*x+n*b+i*M+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(m*l*r-d*u*r-m*i*g+n*u*g+d*i*p-n*l*p)*T,e[2]=(o*u*r-m*c*r+m*i*h-n*u*h-o*i*p+n*c*p)*T,e[3]=(d*c*r-o*l*r-d*i*h+n*l*h+o*i*g-n*c*g)*T,e[4]=b*T,e[5]=(f*u*r-v*l*r+v*i*g-t*u*g-f*i*p+t*l*p)*T,e[6]=(v*c*r-s*u*r-v*i*h+t*u*h+s*i*p-t*c*p)*T,e[7]=(s*l*r-f*c*r+f*i*h-t*l*h-s*i*g+t*c*g)*T,e[8]=M*T,e[9]=(v*d*r-f*m*r-v*n*g+t*m*g+f*n*p-t*d*p)*T,e[10]=(s*m*r-v*o*r+v*n*h-t*m*h-s*n*p+t*o*p)*T,e[11]=(f*o*r-s*d*r-f*n*h+t*d*h+s*n*g-t*o*g)*T,e[12]=C*T,e[13]=(f*m*i-v*d*i+v*n*l-t*m*l-f*n*u+t*d*u)*T,e[14]=(v*o*i-s*m*i-v*n*c+t*m*c+s*n*u-t*o*u)*T,e[15]=(s*d*i-f*o*i+f*n*c-t*d*c-s*n*l+t*o*l)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,o=e.y,c=e.z,h=r*s,f=r*o;return this.set(h*s+n,h*o-i*c,h*c+i*o,0,h*o+i*c,f*o+n,f*c-i*s,0,h*c-i*o,f*c+i*s,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,o=t._z,c=t._w,h=r+r,f=s+s,d=o+o,l=r*h,g=r*f,v=r*d,m=s*f,u=s*d,p=o*d,x=c*h,b=c*f,M=c*d,C=n.x,A=n.y,T=n.z;return i[0]=(1-(m+p))*C,i[1]=(g+M)*C,i[2]=(v-b)*C,i[3]=0,i[4]=(g-M)*A,i[5]=(1-(l+p))*A,i[6]=(u+x)*A,i[7]=0,i[8]=(v+b)*T,i[9]=(u-x)*T,i[10]=(1-(l+m))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=gi.set(i[0],i[1],i[2]).length();const s=gi.set(i[4],i[5],i[6]).length(),o=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const h=1/r,f=1/s,d=1/o;return en.elements[0]*=h,en.elements[1]*=h,en.elements[2]*=h,en.elements[4]*=f,en.elements[5]*=f,en.elements[6]*=f,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,t.setFromRotationMatrix(en),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,i,r,s,o=Sn){const c=this.elements,h=2*r/(t-e),f=2*r/(n-i),d=(t+e)/(t-e),l=(n+i)/(n-i);let g,v;if(o===Sn)g=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===la)g=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=l,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,s,o=Sn){const c=this.elements,h=1/(t-e),f=1/(n-i),d=1/(s-r),l=(t+e)*h,g=(n+i)*f;let v,m;if(o===Sn)v=(s+r)*d,m=-2*d;else if(o===la)v=r*d,m=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-l,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=m,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new R,en=new et,Id=new R(0,0,0),Dd=new R(1,1,1),Cn=new R,ws=new R,$t=new R,sl=new et,al=new vs;class un{constructor(e=0,t=0,n=0,i=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],o=i[8],c=i[1],h=i[5],f=i[9],d=i[2],l=i[6],g=i[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(l,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-At(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return al.setFromEuler(this),this.setFromQuaternion(al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Pc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nd=0;const rl=new R,vi=new vs,_n=new et,As=new R,Yi=new R,Ud=new R,Od=new vs,ol=new R(1,0,0),ll=new R(0,1,0),cl=new R(0,0,1),hl={type:"added"},kd={type:"removed"},_i={type:"childadded",child:null},Ga={type:"childremoved",child:null};class vt extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new R,t=new un,n=new vs,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new Be}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(ll,e)}rotateZ(e){return this.rotateOnAxis(cl,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(ll,e)}translateZ(e){return this.translateOnAxis(cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Yi,As,this.up):_n.lookAt(As,Yi,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(_n),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hl),_i.child=e,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kd),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hl),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,e,Ud),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,Od,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,f=c.length;h<f;h++){const d=c[h];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),h=s(e.textures),f=s(e.images),d=s(e.shapes),l=s(e.skeletons),g=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),l.length>0&&(n.skeletons=l),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=i,n;function s(o){const c=[];for(const h in o){const f=o[h];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new R(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new R,xn=new R,Va=new R,bn=new R,xi=new R,bi=new R,dl=new R,Wa=new R,$a=new R,Xa=new R,qa=new it,Ya=new it,Ka=new it;class rn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){tn.subVectors(i,t),xn.subVectors(n,t),Va.subVectors(e,t);const s=tn.dot(tn),o=tn.dot(xn),c=tn.dot(Va),h=xn.dot(xn),f=xn.dot(Va),d=s*h-o*o;if(d===0)return r.set(0,0,0),null;const l=1/d,g=(h*c-o*f)*l,v=(s*f-o*c)*l;return r.set(1-g-v,v,g)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,i,r,s,o,c){return this.getBarycoord(e,t,n,i,bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bn.x),c.addScaledVector(s,bn.y),c.addScaledVector(o,bn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,s){return qa.setScalar(0),Ya.setScalar(0),Ka.setScalar(0),qa.fromBufferAttribute(e,t),Ya.fromBufferAttribute(e,n),Ka.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(qa,r.x),s.addScaledVector(Ya,r.y),s.addScaledVector(Ka,r.z),s}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),xn.subVectors(e,t),tn.cross(xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),tn.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,o;xi.subVectors(i,n),bi.subVectors(r,n),Wa.subVectors(e,n);const c=xi.dot(Wa),h=bi.dot(Wa);if(c<=0&&h<=0)return t.copy(n);$a.subVectors(e,i);const f=xi.dot($a),d=bi.dot($a);if(f>=0&&d<=f)return t.copy(i);const l=c*d-f*h;if(l<=0&&c>=0&&f<=0)return s=c/(c-f),t.copy(n).addScaledVector(xi,s);Xa.subVectors(e,r);const g=xi.dot(Xa),v=bi.dot(Xa);if(v>=0&&g<=v)return t.copy(r);const m=g*h-c*v;if(m<=0&&h>=0&&v<=0)return o=h/(h-v),t.copy(n).addScaledVector(bi,o);const u=f*v-g*d;if(u<=0&&d-f>=0&&g-v>=0)return dl.subVectors(r,i),o=(d-f)/(d-f+(g-v)),t.copy(i).addScaledVector(dl,o);const p=1/(u+m+l);return s=m*p,o=l*p,t.copy(n).addScaledVector(xi,s).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Rs={h:0,s:0,l:0};function Za(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=xo(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Za(s,r,e+1/3),this.g=Za(s,r,e),this.b=Za(s,r,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=Lc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Je.fromWorkingColorSpace(Pt.copy(this),e),Math.round(At(Pt.r*255,0,255))*65536+Math.round(At(Pt.g*255,0,255))*256+Math.round(At(Pt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,r=Pt.b,s=Math.max(n,i,r),o=Math.min(n,i,r);let c,h;const f=(o+s)/2;if(o===s)c=0,h=0;else{const d=s-o;switch(h=f<=.5?d/(s+o):d/(2-s-o),s){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=h,e.l=f,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=St){Je.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Rs);const n=as(Pn.h,Rs.h,t),i=as(Pn.s,Rs.s,t),r=as(Pn.l,Rs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Se;Se.NAMES=Lc;let Fd=0;class ci extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Li,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_r,this.blendDst=xr,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_r&&(n.blendSrc=this.blendSrc),this.blendDst!==xr&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ht extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new R,Cs=new fe;class Rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jo,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jo&&(e.usage=this.usage),e}}class Ic extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dc extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bd=0;const jt=new et,ja=new vt,yi=new R,Xt=new oi,Ki=new oi,Tt=new R;class st extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ac(e)?Dc:Ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return ja.lookAt(e),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Xt.min,Ki.min),Xt.expandByPoint(Tt),Tt.addVectors(Xt.max,Ki.max),Xt.expandByPoint(Tt)):(Xt.expandByPoint(Ki.min),Xt.expandByPoint(Ki.max))}Xt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)Tt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],c=this.morphTargetsRelative;for(let h=0,f=o.count;h<f;h++)Tt.fromBufferAttribute(o,h),c&&(yi.fromBufferAttribute(e,h),Tt.add(yi)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new R,c[P]=new R;const h=new R,f=new R,d=new R,l=new fe,g=new fe,v=new fe,m=new R,u=new R;function p(P,H,_){h.fromBufferAttribute(n,P),f.fromBufferAttribute(n,H),d.fromBufferAttribute(n,_),l.fromBufferAttribute(r,P),g.fromBufferAttribute(r,H),v.fromBufferAttribute(r,_),f.sub(h),d.sub(h),g.sub(l),v.sub(l);const y=1/(g.x*v.y-v.x*g.y);isFinite(y)&&(m.copy(f).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(y),u.copy(d).multiplyScalar(g.x).addScaledVector(f,-v.x).multiplyScalar(y),o[P].add(m),o[H].add(m),o[_].add(m),c[P].add(u),c[H].add(u),c[_].add(u))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,H=x.length;P<H;++P){const _=x[P],y=_.start,k=_.count;for(let F=y,N=y+k;F<N;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new R,M=new R,C=new R,A=new R;function T(P){C.fromBufferAttribute(i,P),A.copy(C);const H=o[P];b.copy(H),b.sub(C.multiplyScalar(C.dot(H))).normalize(),M.crossVectors(A,H);const y=M.dot(c[P])<0?-1:1;s.setXYZW(P,b.x,b.y,b.z,y)}for(let P=0,H=x.length;P<H;++P){const _=x[P],y=_.start,k=_.count;for(let F=y,N=y+k;F<N;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,g=n.count;l<g;l++)n.setXYZ(l,0,0,0);const i=new R,r=new R,s=new R,o=new R,c=new R,h=new R,f=new R,d=new R;if(e)for(let l=0,g=e.count;l<g;l+=3){const v=e.getX(l+0),m=e.getX(l+1),u=e.getX(l+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,u),f.subVectors(s,r),d.subVectors(i,r),f.cross(d),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),h.fromBufferAttribute(n,u),o.add(f),c.add(f),h.add(f),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(u,h.x,h.y,h.z)}else for(let l=0,g=t.count;l<g;l+=3)i.fromBufferAttribute(t,l+0),r.fromBufferAttribute(t,l+1),s.fromBufferAttribute(t,l+2),f.subVectors(s,r),d.subVectors(i,r),f.cross(d),n.setXYZ(l+0,f.x,f.y,f.z),n.setXYZ(l+1,f.x,f.y,f.z),n.setXYZ(l+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const h=o.array,f=o.itemSize,d=o.normalized,l=new h.constructor(c.length*f);let g=0,v=0;for(let m=0,u=c.length;m<u;m++){o.isInterleavedBufferAttribute?g=c[m]*o.data.stride+o.offset:g=c[m]*f;for(let p=0;p<f;p++)l[v++]=h[g++]}return new Rt(l,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new st,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],h=e(c,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let f=0,d=h.length;f<d;f++){const l=h[f],g=e(l,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const h=s[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],f=[];for(let d=0,l=h.length;d<l;d++){const g=h[d];f.push(g.toJSON(e.data))}f.length>0&&(i[c]=f,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const f=i[h];this.setAttribute(h,f.clone(t))}const r=e.morphAttributes;for(const h in r){const f=[],d=r[h];for(let l=0,g=d.length;l<g;l++)f.push(d[l].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let h=0,f=s.length;h<f;h++){const d=s[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new et,Gn=new bo,Ps=new li,fl=new R,Ls=new R,Is=new R,Ds=new R,Ja=new R,Ns=new R,pl=new R,Us=new R;class Ne extends vt{constructor(e=new st,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ns.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const f=o[c],d=r[c];f!==0&&(Ja.fromBufferAttribute(d,e),s?Ns.addScaledVector(Ja,f):Ns.addScaledVector(Ja.sub(t),f))}t.add(Ns)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),Gn.copy(e.ray).recast(e.near),!(Ps.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(Ps,fl)===null||Gn.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(ul.copy(r).invert(),Gn.copy(e.ray).applyMatrix4(ul),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,f=r.attributes.uv1,d=r.attributes.normal,l=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,m=l.length;v<m;v++){const u=l[v],p=s[u.materialIndex],x=Math.max(u.start,g.start),b=Math.min(o.count,Math.min(u.start+u.count,g.start+g.count));for(let M=x,C=b;M<C;M+=3){const A=o.getX(M),T=o.getX(M+1),P=o.getX(M+2);i=Os(this,p,e,n,h,f,d,A,T,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=u.materialIndex,t.push(i))}}else{const v=Math.max(0,g.start),m=Math.min(o.count,g.start+g.count);for(let u=v,p=m;u<p;u+=3){const x=o.getX(u),b=o.getX(u+1),M=o.getX(u+2);i=Os(this,s,e,n,h,f,d,x,b,M),i&&(i.faceIndex=Math.floor(u/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,m=l.length;v<m;v++){const u=l[v],p=s[u.materialIndex],x=Math.max(u.start,g.start),b=Math.min(c.count,Math.min(u.start+u.count,g.start+g.count));for(let M=x,C=b;M<C;M+=3){const A=M,T=M+1,P=M+2;i=Os(this,p,e,n,h,f,d,A,T,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=u.materialIndex,t.push(i))}}else{const v=Math.max(0,g.start),m=Math.min(c.count,g.start+g.count);for(let u=v,p=m;u<p;u+=3){const x=u,b=u+1,M=u+2;i=Os(this,s,e,n,h,f,d,x,b,M),i&&(i.faceIndex=Math.floor(u/3),t.push(i))}}}}function zd(a,e,t,n,i,r,s,o){let c;if(e.side===Ot?c=n.intersectTriangle(s,r,i,!0,o):c=n.intersectTriangle(i,r,s,e.side===On,o),c===null)return null;Us.copy(o),Us.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(Us);return h<t.near||h>t.far?null:{distance:h,point:Us.clone(),object:a}}function Os(a,e,t,n,i,r,s,o,c,h){a.getVertexPosition(o,Ls),a.getVertexPosition(c,Is),a.getVertexPosition(h,Ds);const f=zd(a,e,t,n,Ls,Is,Ds,pl);if(f){const d=new R;rn.getBarycoord(pl,Ls,Is,Ds,d),i&&(f.uv=rn.getInterpolatedAttribute(i,o,c,h,d,new fe)),r&&(f.uv1=rn.getInterpolatedAttribute(r,o,c,h,d,new fe)),s&&(f.normal=rn.getInterpolatedAttribute(s,o,c,h,d,new R),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const l={a:o,b:c,c:h,normal:new R,materialIndex:0};rn.getNormal(Ls,Is,Ds,l.normal),f.face=l,f.barycoord=d}return f}class gt extends st{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const c=[],h=[],f=[],d=[];let l=0,g=0;v("z","y","x",-1,-1,n,t,e,s,r,0),v("z","y","x",1,-1,n,t,-e,s,r,1),v("x","z","y",1,1,e,n,t,i,s,2),v("x","z","y",1,-1,e,n,-t,i,s,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(d,2));function v(m,u,p,x,b,M,C,A,T,P,H){const _=M/T,y=C/P,k=M/2,F=C/2,N=A/2,X=T+1,O=P+1;let Y=0,V=0;const re=new R;for(let $=0;$<O;$++){const Q=$*y-F;for(let De=0;De<X;De++){const ke=De*_-k;re[m]=ke*x,re[u]=Q*b,re[p]=N,h.push(re.x,re.y,re.z),re[m]=0,re[u]=0,re[p]=A>0?1:-1,f.push(re.x,re.y,re.z),d.push(De/T),d.push(1-$/P),Y+=1}}for(let $=0;$<P;$++)for(let Q=0;Q<T;Q++){const De=l+Q+X*$,ke=l+Q+X*($+1),q=l+(Q+1)+X*($+1),ee=l+(Q+1)+X*$;c.push(De,ke,ee),c.push(ke,q,ee),V+=6}o.addGroup(g,V,H),g+=V,l+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bi(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nt(a){const e={};for(let t=0;t<a.length;t++){const n=Bi(a[t]);for(const i in n)e[i]=n[i]}return e}function Hd(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Nc(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Gd={clone:Bi,merge:Nt};var Vd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bi(e.uniforms),this.uniformsGroups=Hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Uc extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new R,ml=new fe,gl=new fe;class Ut extends Uc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,ml,gl),t.subVectors(gl,ml)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ss*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,h=s.fullHeight;r+=s.offsetX*i/c,t-=s.offsetY*n/h,i*=s.width/c,n*=s.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,Mi=1;class $d extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ut(Si,Mi,e,t);i.layers=this.layers,this.add(i);const r=new Ut(Si,Mi,e,t);r.layers=this.layers,this.add(r);const s=new Ut(Si,Mi,e,t);s.layers=this.layers,this.add(s);const o=new Ut(Si,Mi,e,t);o.layers=this.layers,this.add(o);const c=new Ut(Si,Mi,e,t);c.layers=this.layers,this.add(c);const h=new Ut(Si,Mi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,s,o,c]=t;for(const h of t)this.remove(h);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,h,f]=this.children,d=e.getRenderTarget(),l=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,s),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(d,l,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Oc extends Lt{constructor(e,t,n,i,r,s,o,c,h,f){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,i,r,s,o,c,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xd extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Oc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gt(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Nn});r.uniforms.tEquirect.value=t;const s=new Ne(i,r),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=an),new $d(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}const Qa=new R,qd=new R,Yd=new Be;class qn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qa.subVectors(n,t).cross(qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yd.getNormalMatrix(e),i=this.coplanarPoint(Qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new li,ks=new R;class yo{constructor(e=new qn,t=new qn,n=new qn,i=new qn,r=new qn,s=new qn){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],c=i[3],h=i[4],f=i[5],d=i[6],l=i[7],g=i[8],v=i[9],m=i[10],u=i[11],p=i[12],x=i[13],b=i[14],M=i[15];if(n[0].setComponents(c-r,l-h,u-g,M-p).normalize(),n[1].setComponents(c+r,l+h,u+g,M+p).normalize(),n[2].setComponents(c+s,l+f,u+v,M+x).normalize(),n[3].setComponents(c-s,l-f,u-v,M-x).normalize(),n[4].setComponents(c-o,l-d,u-m,M-b).normalize(),t===Sn)n[5].setComponents(c+o,l+d,u+m,M+b).normalize();else if(t===la)n[5].setComponents(o,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ks.x=i.normal.x>0?e.max.x:e.min.x,ks.y=i.normal.y>0?e.max.y:e.min.y,ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kc(){let a=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Kd(a){const e=new WeakMap;function t(o,c){const h=o.array,f=o.usage,d=h.byteLength,l=a.createBuffer();a.bindBuffer(c,l),a.bufferData(c,h,f),o.onUploadCallback();let g;if(h instanceof Float32Array)g=a.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?g=a.HALF_FLOAT:g=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=a.SHORT;else if(h instanceof Uint32Array)g=a.UNSIGNED_INT;else if(h instanceof Int32Array)g=a.INT;else if(h instanceof Int8Array)g=a.BYTE;else if(h instanceof Uint8Array)g=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:l,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,h){const f=c.array,d=c.updateRanges;if(a.bindBuffer(h,o),d.length===0)a.bufferSubData(h,0,f);else{d.sort((g,v)=>g.start-v.start);let l=0;for(let g=1;g<d.length;g++){const v=d[l],m=d[g];m.start<=v.start+v.count+1?v.count=Math.max(v.count,m.start+m.count-v.start):(++l,d[l]=m)}d.length=l+1;for(let g=0,v=d.length;g<v;g++){const m=d[g];a.bufferSubData(h,m.start*f.BYTES_PER_ELEMENT,f,m.start,m.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(a.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:i,remove:r,update:s}}class Kt extends st{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,o=Math.floor(n),c=Math.floor(i),h=o+1,f=c+1,d=e/o,l=t/c,g=[],v=[],m=[],u=[];for(let p=0;p<f;p++){const x=p*l-s;for(let b=0;b<h;b++){const M=b*d-r;v.push(M,-x,0),m.push(0,0,1),u.push(b/o),u.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const b=x+h*p,M=x+h*(p+1),C=x+1+h*(p+1),A=x+1+h*p;g.push(b,M,A),g.push(M,C,A)}this.setIndex(g),this.setAttribute("position",new tt(v,3)),this.setAttribute("normal",new tt(m,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,su=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ou=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Au=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ou=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ku=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ku=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ju=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ff=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$f=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_p=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Zd,alphahash_pars_fragment:jd,alphamap_fragment:Jd,alphamap_pars_fragment:Qd,alphatest_fragment:eu,alphatest_pars_fragment:tu,aomap_fragment:nu,aomap_pars_fragment:iu,batching_pars_vertex:su,batching_vertex:au,begin_vertex:ru,beginnormal_vertex:ou,bsdfs:lu,iridescence_fragment:cu,bumpmap_pars_fragment:hu,clipping_planes_fragment:du,clipping_planes_pars_fragment:uu,clipping_planes_pars_vertex:fu,clipping_planes_vertex:pu,color_fragment:mu,color_pars_fragment:gu,color_pars_vertex:vu,color_vertex:_u,common:xu,cube_uv_reflection_fragment:bu,defaultnormal_vertex:yu,displacementmap_pars_vertex:Su,displacementmap_vertex:Mu,emissivemap_fragment:Eu,emissivemap_pars_fragment:Tu,colorspace_fragment:wu,colorspace_pars_fragment:Au,envmap_fragment:Ru,envmap_common_pars_fragment:Cu,envmap_pars_fragment:Pu,envmap_pars_vertex:Lu,envmap_physical_pars_fragment:Gu,envmap_vertex:Iu,fog_vertex:Du,fog_pars_vertex:Nu,fog_fragment:Uu,fog_pars_fragment:Ou,gradientmap_pars_fragment:ku,lightmap_pars_fragment:Fu,lights_lambert_fragment:Bu,lights_lambert_pars_fragment:zu,lights_pars_begin:Hu,lights_toon_fragment:Vu,lights_toon_pars_fragment:Wu,lights_phong_fragment:$u,lights_phong_pars_fragment:Xu,lights_physical_fragment:qu,lights_physical_pars_fragment:Yu,lights_fragment_begin:Ku,lights_fragment_maps:Zu,lights_fragment_end:ju,logdepthbuf_fragment:Ju,logdepthbuf_pars_fragment:Qu,logdepthbuf_pars_vertex:ef,logdepthbuf_vertex:tf,map_fragment:nf,map_pars_fragment:sf,map_particle_fragment:af,map_particle_pars_fragment:rf,metalnessmap_fragment:of,metalnessmap_pars_fragment:lf,morphinstance_vertex:cf,morphcolor_vertex:hf,morphnormal_vertex:df,morphtarget_pars_vertex:uf,morphtarget_vertex:ff,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:vf,normal_vertex:_f,normalmap_pars_fragment:xf,clearcoat_normal_fragment_begin:bf,clearcoat_normal_fragment_maps:yf,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:Mf,opaque_fragment:Ef,packing:Tf,premultiplied_alpha_fragment:wf,project_vertex:Af,dithering_fragment:Rf,dithering_pars_fragment:Cf,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:Lf,shadowmap_pars_fragment:If,shadowmap_pars_vertex:Df,shadowmap_vertex:Nf,shadowmask_pars_fragment:Uf,skinbase_vertex:Of,skinning_pars_vertex:kf,skinning_vertex:Ff,skinnormal_vertex:Bf,specularmap_fragment:zf,specularmap_pars_fragment:Hf,tonemapping_fragment:Gf,tonemapping_pars_fragment:Vf,transmission_fragment:Wf,transmission_pars_fragment:$f,uv_pars_fragment:Xf,uv_pars_vertex:qf,uv_vertex:Yf,worldpos_vertex:Kf,background_vert:Zf,background_frag:jf,backgroundCube_vert:Jf,backgroundCube_frag:Qf,cube_vert:ep,cube_frag:tp,depth_vert:np,depth_frag:ip,distanceRGBA_vert:sp,distanceRGBA_frag:ap,equirect_vert:rp,equirect_frag:op,linedashed_vert:lp,linedashed_frag:cp,meshbasic_vert:hp,meshbasic_frag:dp,meshlambert_vert:up,meshlambert_frag:fp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:vp,meshphong_vert:_p,meshphong_frag:xp,meshphysical_vert:bp,meshphysical_frag:yp,meshtoon_vert:Sp,meshtoon_frag:Mp,points_vert:Ep,points_frag:Tp,shadow_vert:wp,shadow_frag:Ap,sprite_vert:Rp,sprite_frag:Cp},se={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},hn={basic:{uniforms:Nt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Nt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Se(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Nt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Nt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Nt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Se(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Nt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Nt([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Nt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Nt([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Nt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Nt([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Nt([se.common,se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Nt([se.lights,se.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};hn.physical={uniforms:Nt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Fs={r:0,b:0,g:0},Wn=new un,Pp=new et;function Lp(a,e,t,n,i,r,s){const o=new Se(0);let c=r===!0?0:1,h,f,d=null,l=0,g=null;function v(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function m(x){let b=!1;const M=v(x);M===null?p(o,c):M&&M.isColor&&(p(M,1),b=!0);const C=a.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(a.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function u(x,b){const M=v(b);M&&(M.isCubeTexture||M.mapping===ma)?(f===void 0&&(f=new Ne(new gt(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Bi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),Wn.copy(b.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(Wn)),f.material.toneMapped=Je.getTransfer(M.colorSpace)!==lt,(d!==M||l!==M.version||g!==a.toneMapping)&&(f.material.needsUpdate=!0,d=M,l=M.version,g=a.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new Ne(new Kt(2,2),new En({name:"BackgroundMaterial",uniforms:Bi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=Je.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||l!==M.version||g!==a.toneMapping)&&(h.material.needsUpdate=!0,d=M,l=M.version,g=a.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function p(x,b){x.getRGB(Fs,Nc(a)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,b,s)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:m,addToRenderList:u}}function Ip(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=l(null);let r=i,s=!1;function o(_,y,k,F,N){let X=!1;const O=d(F,k,y);r!==O&&(r=O,h(r.object)),X=g(_,F,k,N),X&&v(_,F,k,N),N!==null&&e.update(N,a.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,M(_,y,k,F),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return a.createVertexArray()}function h(_){return a.bindVertexArray(_)}function f(_){return a.deleteVertexArray(_)}function d(_,y,k){const F=k.wireframe===!0;let N=n[_.id];N===void 0&&(N={},n[_.id]=N);let X=N[y.id];X===void 0&&(X={},N[y.id]=X);let O=X[F];return O===void 0&&(O=l(c()),X[F]=O),O}function l(_){const y=[],k=[],F=[];for(let N=0;N<t;N++)y[N]=0,k[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:k,attributeDivisors:F,object:_,attributes:{},index:null}}function g(_,y,k,F){const N=r.attributes,X=y.attributes;let O=0;const Y=k.getAttributes();for(const V in Y)if(Y[V].location>=0){const $=N[V];let Q=X[V];if(Q===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),$===void 0||$.attribute!==Q||Q&&$.data!==Q.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function v(_,y,k,F){const N={},X=y.attributes;let O=0;const Y=k.getAttributes();for(const V in Y)if(Y[V].location>=0){let $=X[V];$===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&($=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&($=_.instanceColor));const Q={};Q.attribute=$,$&&$.data&&(Q.data=$.data),N[V]=Q,O++}r.attributes=N,r.attributesNum=O,r.index=F}function m(){const _=r.newAttributes;for(let y=0,k=_.length;y<k;y++)_[y]=0}function u(_){p(_,0)}function p(_,y){const k=r.newAttributes,F=r.enabledAttributes,N=r.attributeDivisors;k[_]=1,F[_]===0&&(a.enableVertexAttribArray(_),F[_]=1),N[_]!==y&&(a.vertexAttribDivisor(_,y),N[_]=y)}function x(){const _=r.newAttributes,y=r.enabledAttributes;for(let k=0,F=y.length;k<F;k++)y[k]!==_[k]&&(a.disableVertexAttribArray(k),y[k]=0)}function b(_,y,k,F,N,X,O){O===!0?a.vertexAttribIPointer(_,y,k,N,X):a.vertexAttribPointer(_,y,k,F,N,X)}function M(_,y,k,F){m();const N=F.attributes,X=k.getAttributes(),O=y.defaultAttributeValues;for(const Y in X){const V=X[Y];if(V.location>=0){let re=N[Y];if(re===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(re=_.instanceColor)),re!==void 0){const $=re.normalized,Q=re.itemSize,De=e.get(re);if(De===void 0)continue;const ke=De.buffer,q=De.type,ee=De.bytesPerElement,_e=q===a.INT||q===a.UNSIGNED_INT||re.gpuType===ho;if(re.isInterleavedBufferAttribute){const de=re.data,Ue=de.stride,Ae=re.offset;if(de.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)p(V.location+Ve,de.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)u(V.location+Ve);a.bindBuffer(a.ARRAY_BUFFER,ke);for(let Ve=0;Ve<V.locationSize;Ve++)b(V.location+Ve,Q/V.locationSize,q,$,Ue*ee,(Ae+Q/V.locationSize*Ve)*ee,_e)}else{if(re.isInstancedBufferAttribute){for(let de=0;de<V.locationSize;de++)p(V.location+de,re.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let de=0;de<V.locationSize;de++)u(V.location+de);a.bindBuffer(a.ARRAY_BUFFER,ke);for(let de=0;de<V.locationSize;de++)b(V.location+de,Q/V.locationSize,q,$,Q*ee,Q/V.locationSize*de*ee,_e)}}else if(O!==void 0){const $=O[Y];if($!==void 0)switch($.length){case 2:a.vertexAttrib2fv(V.location,$);break;case 3:a.vertexAttrib3fv(V.location,$);break;case 4:a.vertexAttrib4fv(V.location,$);break;default:a.vertexAttrib1fv(V.location,$)}}}}x()}function C(){P();for(const _ in n){const y=n[_];for(const k in y){const F=y[k];for(const N in F)f(F[N].object),delete F[N];delete y[k]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const y=n[_.id];for(const k in y){const F=y[k];for(const N in F)f(F[N].object),delete F[N];delete y[k]}delete n[_.id]}function T(_){for(const y in n){const k=n[y];if(k[_.id]===void 0)continue;const F=k[_.id];for(const N in F)f(F[N].object),delete F[N];delete k[_.id]}}function P(){H(),s=!0,r!==i&&(r=i,h(r.object))}function H(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:H,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:m,enableAttribute:u,disableUnusedAttributes:x}}function Dp(a,e,t){let n;function i(h){n=h}function r(h,f){a.drawArrays(n,h,f),t.update(f,n,1)}function s(h,f,d){d!==0&&(a.drawArraysInstanced(n,h,f,d),t.update(f,n,d))}function o(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=f[v];t.update(g,n,1)}function c(h,f,d,l){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<h.length;v++)s(h[v],f[v],l[v]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,f,0,l,0,d);let v=0;for(let m=0;m<d;m++)v+=f[m];for(let m=0;m<l.length;m++)t.update(v,n,l[m])}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Np(a,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){return!(T!==on&&n.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===gs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Mn&&n.convert(T)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==dn&&!P)}function c(T){if(T==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const f=c(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const d=t.logarithmicDepthBuffer===!0,l=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(l===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const g=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_TEXTURE_SIZE),u=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),p=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),b=a.getParameter(a.MAX_VARYING_VECTORS),M=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,A=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:l,maxTextures:g,maxVertexTextures:v,maxTextureSize:m,maxCubemapSize:u,maxAttributes:p,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:C,maxSamples:A}}function Up(a){const e=this;let t=null,n=0,i=!1,r=!1;const s=new qn,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,l){const g=d.length!==0||l||n!==0||i;return i=l,n=d.length,g},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,l){t=f(d,l,0)},this.setState=function(d,l,g){const v=d.clippingPlanes,m=d.clipIntersection,u=d.clipShadows,p=a.get(d);if(!i||v===null||v.length===0||r&&!u)r?f(null):h();else{const x=r?0:n,b=x*4;let M=p.clippingState||null;c.value=M,M=f(v,l,b,g);for(let C=0;C!==b;++C)M[C]=t[C];p.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,l,g,v){const m=d!==null?d.length:0;let u=null;if(m!==0){if(u=c.value,v!==!0||u===null){const p=g+m*4,x=l.matrixWorldInverse;o.getNormalMatrix(x),(u===null||u.length<p)&&(u=new Float32Array(p));for(let b=0,M=g;b!==m;++b,M+=4)s.copy(d[b]).applyMatrix4(x,o),s.normal.toArray(u,M),u[M+3]=s.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,u}}function Op(a){let e=new WeakMap;function t(s,o){return o===Ar?s.mapping=Ui:o===Rr&&(s.mapping=Oi),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Ar||o===Rr)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const h=new Xd(c.height);return h.fromEquirectangularTexture(a,s),e.set(s,h),s.addEventListener("dispose",i),t(h.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Fc extends Uc{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,s=r+h*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,vl=[.125,.215,.35,.446,.526,.582],Zn=20,er=new Fc,_l=new Se;let tr=null,nr=0,ir=0,sr=!1;const Yn=(1+Math.sqrt(5))/2,Ei=1/Yn,xl=[new R(-Yn,Ei,0),new R(Yn,Ei,0),new R(-Ei,0,Yn),new R(Ei,0,Yn),new R(0,Yn,-Ei),new R(0,Yn,Ei),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){tr=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tr,nr,ir),this._renderer.xr.enabled=sr,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tr=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:gs,format:on,colorSpace:kn,depthBuffer:!1},i=yl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kp(r)),this._blurMaterial=Fp(r,e,t)}return i}_compileMaterial(e){const t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,er)}_sceneToCubeUV(e,t,n,i){const o=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,l=f.toneMapping;f.getClearColor(_l),f.toneMapping=Un,f.autoClear=!1;const g=new ht({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),v=new Ne(new gt,g);let m=!1;const u=e.background;u?u.isColor&&(g.color.copy(u),e.background=null,m=!0):(g.color.copy(_l),m=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(h[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,h[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,h[p]));const b=this._cubeSize;Bs(i,x*b,p>2?b:0,b,b),f.setRenderTarget(i),m&&f.render(v,o),f.render(e,o)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=l,f.autoClear=d,e.background=u}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ui||e.mapping===Oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Bs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,er)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xl[(i-r-1)%xl.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,o){const c=this._renderer,h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Ne(this._lodPlanes[i],h),l=h.uniforms,g=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Zn-1),m=r/v,u=isFinite(r)?1+Math.floor(f*m):Zn;u>Zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Zn}`);const p=[];let x=0;for(let T=0;T<Zn;++T){const P=T/m,H=Math.exp(-P*P/2);p.push(H),T===0?x+=H:T<u&&(x+=2*H)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;l.envMap.value=e.texture,l.samples.value=u,l.weights.value=p,l.latitudinal.value=s==="latitudinal",o&&(l.poleAxis.value=o);const{_lodMax:b}=this;l.dTheta.value=v,l.mipInt.value=b-n;const M=this._sizeLods[i],C=3*M*(i>b-Ri?i-b+Ri:0),A=4*(this._cubeSize-M);Bs(t,C,A,3*M,2*M),c.setRenderTarget(t),c.render(d,er)}}function kp(a){const e=[],t=[],n=[];let i=a;const r=a-Ri+1+vl.length;for(let s=0;s<r;s++){const o=Math.pow(2,i);t.push(o);let c=1/o;s>a-Ri?c=vl[s-a+Ri-1]:s===0&&(c=0),n.push(c);const h=1/(o-2),f=-h,d=1+h,l=[f,f,d,f,d,d,f,f,d,d,f,d],g=6,v=6,m=3,u=2,p=1,x=new Float32Array(m*v*g),b=new Float32Array(u*v*g),M=new Float32Array(p*v*g);for(let A=0;A<g;A++){const T=A%3*2/3-1,P=A>2?0:-1,H=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(H,m*v*A),b.set(l,u*v*A);const _=[A,A,A,A,A,A];M.set(_,p*v*A)}const C=new st;C.setAttribute("position",new Rt(x,m)),C.setAttribute("uv",new Rt(b,u)),C.setAttribute("faceIndex",new Rt(M,p)),e.push(C),i>Ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yl(a,e,t){const n=new ni(a,e,t);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Fp(a,e,t){const n=new Float32Array(Zn),i=new R(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Sl(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ml(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function So(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bp(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===Ar||c===Rr,f=c===Ui||c===Oi;if(h||f){let d=e.get(o);const l=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==l)return t===null&&(t=new bl(a)),d=h?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const g=o.image;return h&&g&&g.height>0||f&&g&&i(g)?(t===null&&(t=new bl(a)),d=h?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let c=0;const h=6;for(let f=0;f<h;f++)o[f]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function zp(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ia("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hp(a,e,t,n){const i={},r=new WeakMap;function s(d){const l=d.target;l.index!==null&&e.remove(l.index);for(const v in l.attributes)e.remove(l.attributes[v]);for(const v in l.morphAttributes){const m=l.morphAttributes[v];for(let u=0,p=m.length;u<p;u++)e.remove(m[u])}l.removeEventListener("dispose",s),delete i[l.id];const g=r.get(l);g&&(e.remove(g),r.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(d,l){return i[l.id]===!0||(l.addEventListener("dispose",s),i[l.id]=!0,t.memory.geometries++),l}function c(d){const l=d.attributes;for(const v in l)e.update(l[v],a.ARRAY_BUFFER);const g=d.morphAttributes;for(const v in g){const m=g[v];for(let u=0,p=m.length;u<p;u++)e.update(m[u],a.ARRAY_BUFFER)}}function h(d){const l=[],g=d.index,v=d.attributes.position;let m=0;if(g!==null){const x=g.array;m=g.version;for(let b=0,M=x.length;b<M;b+=3){const C=x[b+0],A=x[b+1],T=x[b+2];l.push(C,A,A,T,T,C)}}else if(v!==void 0){const x=v.array;m=v.version;for(let b=0,M=x.length/3-1;b<M;b+=3){const C=b+0,A=b+1,T=b+2;l.push(C,A,A,T,T,C)}}else return;const u=new(Ac(l)?Dc:Ic)(l,1);u.version=m;const p=r.get(d);p&&e.remove(p),r.set(d,u)}function f(d){const l=r.get(d);if(l){const g=d.index;g!==null&&l.version<g.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:f}}function Gp(a,e,t){let n;function i(l){n=l}let r,s;function o(l){r=l.type,s=l.bytesPerElement}function c(l,g){a.drawElements(n,g,r,l*s),t.update(g,n,1)}function h(l,g,v){v!==0&&(a.drawElementsInstanced(n,g,r,l*s,v),t.update(g,n,v))}function f(l,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,l,0,v);let u=0;for(let p=0;p<v;p++)u+=g[p];t.update(u,n,1)}function d(l,g,v,m){if(v===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<l.length;p++)h(l[p]/s,g[p],m[p]);else{u.multiDrawElementsInstancedWEBGL(n,g,0,r,l,0,m,0,v);let p=0;for(let x=0;x<v;x++)p+=g[x];for(let x=0;x<m.length;x++)t.update(p,n,m[x])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Vp(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wp(a,e,t){const n=new WeakMap,i=new it;function r(s,o,c){const h=s.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let l=n.get(o);if(l===void 0||l.count!==d){let _=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var g=_;l!==void 0&&l.texture.dispose();const v=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,u=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),m===!0&&(M=2),u===!0&&(M=3);let C=o.attributes.position.count*M,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*d),P=new Cc(T,C,A,d);P.type=dn,P.needsUpdate=!0;const H=M*4;for(let y=0;y<d;y++){const k=p[y],F=x[y],N=b[y],X=C*A*4*y;for(let O=0;O<k.count;O++){const Y=O*H;v===!0&&(i.fromBufferAttribute(k,O),T[X+Y+0]=i.x,T[X+Y+1]=i.y,T[X+Y+2]=i.z,T[X+Y+3]=0),m===!0&&(i.fromBufferAttribute(F,O),T[X+Y+4]=i.x,T[X+Y+5]=i.y,T[X+Y+6]=i.z,T[X+Y+7]=0),u===!0&&(i.fromBufferAttribute(N,O),T[X+Y+8]=i.x,T[X+Y+9]=i.y,T[X+Y+10]=i.z,T[X+Y+11]=N.itemSize===4?i.w:1)}}l={count:d,texture:P,size:new fe(C,A)},n.set(o,l),o.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",s.morphTexture,t);else{let v=0;for(let u=0;u<h.length;u++)v+=h[u];const m=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(a,"morphTargetBaseInfluence",m),c.getUniforms().setValue(a,"morphTargetInfluences",h)}c.getUniforms().setValue(a,"morphTargetsTexture",l.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",l.size)}return{update:r}}function $p(a,e,t,n){let i=new WeakMap;function r(c){const h=n.render.frame,f=c.geometry,d=e.get(c,f);if(i.get(d)!==h&&(e.update(d),i.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==h&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const l=c.skeleton;i.get(l)!==h&&(l.update(),i.set(l,h))}return d}function s(){i=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:s}}class Bc extends Lt{constructor(e,t,n,i,r,s,o,c,h,f=Ii){if(f!==Ii&&f!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ii&&(n=ti),n===void 0&&f===Fi&&(n=ki),super(null,i,r,s,o,c,f,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=c!==void 0?c:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zc=new Lt,El=new Bc(1,1),Hc=new Cc,Gc=new Pd,Vc=new Oc,Tl=[],wl=[],Al=new Float32Array(16),Rl=new Float32Array(9),Cl=new Float32Array(4);function Vi(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Tl[i];if(r===void 0&&(r=new Float32Array(i),Tl[i]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(r,o)}return r}function Mt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Et(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function va(a,e){let t=wl[e];t===void 0&&(t=new Int32Array(e),wl[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Xp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function qp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;a.uniform2fv(this.addr,e),Et(t,e)}}function Yp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;a.uniform3fv(this.addr,e),Et(t,e)}}function Kp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;a.uniform4fv(this.addr,e),Et(t,e)}}function Zp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;Cl.set(n),a.uniformMatrix2fv(this.addr,!1,Cl),Et(t,n)}}function jp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;Rl.set(n),a.uniformMatrix3fv(this.addr,!1,Rl),Et(t,n)}}function Jp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Mt(t,n))return;Al.set(n),a.uniformMatrix4fv(this.addr,!1,Al),Et(t,n)}}function Qp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function em(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;a.uniform2iv(this.addr,e),Et(t,e)}}function tm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;a.uniform3iv(this.addr,e),Et(t,e)}}function nm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;a.uniform4iv(this.addr,e),Et(t,e)}}function im(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function sm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;a.uniform2uiv(this.addr,e),Et(t,e)}}function am(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;a.uniform3uiv(this.addr,e),Et(t,e)}}function rm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;a.uniform4uiv(this.addr,e),Et(t,e)}}function om(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let r;this.type===a.SAMPLER_2D_SHADOW?(El.compareFunction=wc,r=El):r=zc,t.setTexture2D(e||r,i)}function lm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gc,i)}function cm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vc,i)}function hm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hc,i)}function dm(a){switch(a){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return Kp;case 35674:return Zp;case 35675:return jp;case 35676:return Jp;case 5124:case 35670:return Qp;case 35667:case 35671:return em;case 35668:case 35672:return tm;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return am;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return hm}}function um(a,e){a.uniform1fv(this.addr,e)}function fm(a,e){const t=Vi(e,this.size,2);a.uniform2fv(this.addr,t)}function pm(a,e){const t=Vi(e,this.size,3);a.uniform3fv(this.addr,t)}function mm(a,e){const t=Vi(e,this.size,4);a.uniform4fv(this.addr,t)}function gm(a,e){const t=Vi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function vm(a,e){const t=Vi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function _m(a,e){const t=Vi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function xm(a,e){a.uniform1iv(this.addr,e)}function bm(a,e){a.uniform2iv(this.addr,e)}function ym(a,e){a.uniform3iv(this.addr,e)}function Sm(a,e){a.uniform4iv(this.addr,e)}function Mm(a,e){a.uniform1uiv(this.addr,e)}function Em(a,e){a.uniform2uiv(this.addr,e)}function Tm(a,e){a.uniform3uiv(this.addr,e)}function wm(a,e){a.uniform4uiv(this.addr,e)}function Am(a,e,t){const n=this.cache,i=e.length,r=va(t,i);Mt(n,r)||(a.uniform1iv(this.addr,r),Et(n,r));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||zc,r[s])}function Rm(a,e,t){const n=this.cache,i=e.length,r=va(t,i);Mt(n,r)||(a.uniform1iv(this.addr,r),Et(n,r));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Gc,r[s])}function Cm(a,e,t){const n=this.cache,i=e.length,r=va(t,i);Mt(n,r)||(a.uniform1iv(this.addr,r),Et(n,r));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Vc,r[s])}function Pm(a,e,t){const n=this.cache,i=e.length,r=va(t,i);Mt(n,r)||(a.uniform1iv(this.addr,r),Et(n,r));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Hc,r[s])}function Lm(a){switch(a){case 5126:return um;case 35664:return fm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return vm;case 35676:return _m;case 5124:case 35670:return xm;case 35667:case 35671:return bm;case 35668:case 35672:return ym;case 35669:case 35673:return Sm;case 5125:return Mm;case 36294:return Em;case 36295:return Tm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}class Im{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dm(t.type)}}class Dm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lm(t.type)}}class Nm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ar=/(\w+)(\])?(\[|\.)?/g;function Pl(a,e){a.seq.push(e),a.map[e.id]=e}function Um(a,e,t){const n=a.name,i=n.length;for(ar.lastIndex=0;;){const r=ar.exec(n),s=ar.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&s+2===i){Pl(t,h===void 0?new Im(o,a,e):new Dm(o,a,e));break}else{let d=t.map[o];d===void 0&&(d=new Nm(o),Pl(t,d)),t=d}}}class sa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),s=e.getUniformLocation(t,r.name);Um(r,s,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,s=t.length;r!==s;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Ll(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const Om=37297;let km=0;function Fm(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=i;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function Bm(a){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(a);let n;switch(e===t?n="":e===oa&&t===ra?n="LinearDisplayP3ToLinearSRGB":e===ra&&t===oa&&(n="LinearSRGBToLinearDisplayP3"),a){case kn:case ga:return[n,"LinearTransferOETF"];case St:case _o:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[n,"LinearTransferOETF"]}}function Il(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Fm(a.getShaderSource(e),s)}else return i}function zm(a,e){const t=Bm(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hm(a,e){let t;switch(e){case Hh:t="Linear";break;case Gh:t="Reinhard";break;case Vh:t="Cineon";break;case Wh:t="ACESFilmic";break;case Xh:t="AgX";break;case qh:t="Neutral";break;case $h:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zs=new R;function Gm(){Je.getLuminanceCoefficients(zs);const a=zs.x.toFixed(4),e=zs.y.toFixed(4),t=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vm(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function Wm(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $m(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),s=r.name;let o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function ns(a){return a!==""}function Dl(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function no(a){return a.replace(Xm,Ym)}const qm=new Map;function Ym(a,e){let t=Fe[e];if(t===void 0){const n=qm.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return no(t)}const Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(a){return a.replace(Km,Zm)}function Zm(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ol(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jm(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===bh?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jm(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ui:case Oi:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qm(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function eg(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case co:e="ENVMAP_BLENDING_MULTIPLY";break;case Bh:e="ENVMAP_BLENDING_MIX";break;case zh:e="ENVMAP_BLENDING_ADD";break}return e}function tg(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ng(a,e,t,n){const i=a.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=jm(t),h=Jm(t),f=Qm(t),d=eg(t),l=tg(t),g=Vm(t),v=Wm(r),m=i.createProgram();let u,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ns).join(`
`),u.length>0&&(u+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ns).join(`
`),p.length>0&&(p+=`
`)):(u=[Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),p=[Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Un?Hm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,zm("linearToOutputTexel",t.outputColorSpace),Gm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),s=no(s),s=Dl(s,t),s=Nl(s,t),o=no(o),o=Dl(o,t),o=Nl(o,t),s=Ul(s),o=Ul(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,p=["#define varying in",t.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=x+u+s,M=x+p+o,C=Ll(i,i.VERTEX_SHADER,b),A=Ll(i,i.FRAGMENT_SHADER,M);i.attachShader(m,C),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function T(y){if(a.debug.checkShaderErrors){const k=i.getProgramInfoLog(m).trim(),F=i.getShaderInfoLog(C).trim(),N=i.getShaderInfoLog(A).trim();let X=!0,O=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(X=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,m,C,A);else{const Y=Il(i,C,"vertex"),V=Il(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+k+`
`+Y+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||N==="")&&(O=!1);O&&(y.diagnostics={runnable:X,programLog:k,vertexShader:{log:F,prefix:u},fragmentShader:{log:N,prefix:p}})}i.deleteShader(C),i.deleteShader(A),P=new sa(i,m),H=$m(i,m)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let H;this.getAttributes=function(){return H===void 0&&T(this),H};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(m,Om)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=km++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=A,this}let ig=0;class sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ag(e),t.set(e,n)),n}}class ag{constructor(e){this.id=ig++,this.code=e,this.usedTimes=0}}function rg(a,e,t,n,i,r,s){const o=new Pc,c=new sg,h=new Set,f=[],d=i.logarithmicDepthBuffer,l=i.reverseDepthBuffer,g=i.vertexTextures;let v=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return h.add(_),_===0?"uv":`uv${_}`}function p(_,y,k,F,N){const X=F.fog,O=N.geometry,Y=_.isMeshStandardMaterial?F.environment:null,V=(_.isMeshStandardMaterial?t:e).get(_.envMap||Y),re=V&&V.mapping===ma?V.image.height:null,$=m[_.type];_.precision!==null&&(v=i.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,De=Q!==void 0?Q.length:0;let ke=0;O.morphAttributes.position!==void 0&&(ke=1),O.morphAttributes.normal!==void 0&&(ke=2),O.morphAttributes.color!==void 0&&(ke=3);let q,ee,_e,de;if($){const Ft=hn[$];q=Ft.vertexShader,ee=Ft.fragmentShader}else q=_.vertexShader,ee=_.fragmentShader,c.update(_),_e=c.getVertexShaderID(_),de=c.getFragmentShaderID(_);const Ue=a.getRenderTarget(),Ae=N.isInstancedMesh===!0,Ve=N.isBatchedMesh===!0,nt=!!_.map,We=!!_.matcap,L=!!V,Gt=!!_.aoMap,He=!!_.lightMap,Xe=!!_.bumpMap,Ce=!!_.normalMap,rt=!!_.displacementMap,Ie=!!_.emissiveMap,w=!!_.metalnessMap,S=!!_.roughnessMap,B=_.anisotropy>0,Z=_.clearcoat>0,J=_.dispersion>0,K=_.iridescence>0,be=_.sheen>0,ae=_.transmission>0,ue=B&&!!_.anisotropyMap,qe=Z&&!!_.clearcoatMap,te=Z&&!!_.clearcoatNormalMap,pe=Z&&!!_.clearcoatRoughnessMap,Pe=K&&!!_.iridescenceMap,Le=K&&!!_.iridescenceThicknessMap,me=be&&!!_.sheenColorMap,Ge=be&&!!_.sheenRoughnessMap,Oe=!!_.specularMap,at=!!_.specularColorMap,I=!!_.specularIntensityMap,ce=ae&&!!_.transmissionMap,W=ae&&!!_.thicknessMap,j=!!_.gradientMap,oe=!!_.alphaMap,he=_.alphaTest>0,$e=!!_.alphaHash,_t=!!_.extensions;let kt=Un;_.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(kt=a.toneMapping);const Ke={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:ee,defines:_.defines,customVertexShaderID:_e,customFragmentShaderID:de,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,batching:Ve,batchingColor:Ve&&N._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&N.instanceColor!==null,instancingMorph:Ae&&N.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ue===null?a.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:kn,alphaToCoverage:!!_.alphaToCoverage,map:nt,matcap:We,envMap:L,envMapMode:L&&V.mapping,envMapCubeUVHeight:re,aoMap:Gt,lightMap:He,bumpMap:Xe,normalMap:Ce,displacementMap:g&&rt,emissiveMap:Ie,normalMapObjectSpace:Ce&&_.normalMapType===jh,normalMapTangentSpace:Ce&&_.normalMapType===Tc,metalnessMap:w,roughnessMap:S,anisotropy:B,anisotropyMap:ue,clearcoat:Z,clearcoatMap:qe,clearcoatNormalMap:te,clearcoatRoughnessMap:pe,dispersion:J,iridescence:K,iridescenceMap:Pe,iridescenceThicknessMap:Le,sheen:be,sheenColorMap:me,sheenRoughnessMap:Ge,specularMap:Oe,specularColorMap:at,specularIntensityMap:I,transmission:ae,transmissionMap:ce,thicknessMap:W,gradientMap:j,opaque:_.transparent===!1&&_.blending===Li&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:he,alphaHash:$e,combine:_.combine,mapUv:nt&&u(_.map.channel),aoMapUv:Gt&&u(_.aoMap.channel),lightMapUv:He&&u(_.lightMap.channel),bumpMapUv:Xe&&u(_.bumpMap.channel),normalMapUv:Ce&&u(_.normalMap.channel),displacementMapUv:rt&&u(_.displacementMap.channel),emissiveMapUv:Ie&&u(_.emissiveMap.channel),metalnessMapUv:w&&u(_.metalnessMap.channel),roughnessMapUv:S&&u(_.roughnessMap.channel),anisotropyMapUv:ue&&u(_.anisotropyMap.channel),clearcoatMapUv:qe&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:te&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&u(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:me&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&u(_.sheenRoughnessMap.channel),specularMapUv:Oe&&u(_.specularMap.channel),specularColorMapUv:at&&u(_.specularColorMap.channel),specularIntensityMapUv:I&&u(_.specularIntensityMap.channel),transmissionMapUv:ce&&u(_.transmissionMap.channel),thicknessMapUv:W&&u(_.thicknessMap.channel),alphaMapUv:oe&&u(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ce||B),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(nt||oe),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:l,skinning:N.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:ke,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:kt,decodeVideoTexture:nt&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Yt,flipSided:_.side===Ot,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_t&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&_.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ke.vertexUv1s=h.has(1),Ke.vertexUv2s=h.has(2),Ke.vertexUv3s=h.has(3),h.clear(),Ke}function x(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const k in _.defines)y.push(k),y.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(b(y,_),M(y,_),y.push(a.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function b(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function M(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),_.push(o.mask)}function C(_){const y=m[_.type];let k;if(y){const F=hn[y];k=Gd.clone(F.uniforms)}else k=_.uniforms;return k}function A(_,y){let k;for(let F=0,N=f.length;F<N;F++){const X=f[F];if(X.cacheKey===y){k=X,++k.usedTimes;break}}return k===void 0&&(k=new ng(a,y,_,r),f.push(k)),k}function T(_){if(--_.usedTimes===0){const y=f.indexOf(_);f[y]=f[f.length-1],f.pop(),_.destroy()}}function P(_){c.remove(_)}function H(){c.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:C,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:f,dispose:H}}function og(){let a=new WeakMap;function e(s){return a.has(s)}function t(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function n(s){a.delete(s)}function i(s,o,c){a.get(s)[o]=c}function r(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function lg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function kl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Fl(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(d,l,g,v,m,u){let p=a[e];return p===void 0?(p={id:d.id,object:d,geometry:l,material:g,groupOrder:v,renderOrder:d.renderOrder,z:m,group:u},a[e]=p):(p.id=d.id,p.object=d,p.geometry=l,p.material=g,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=m,p.group=u),e++,p}function o(d,l,g,v,m,u){const p=s(d,l,g,v,m,u);g.transmission>0?n.push(p):g.transparent===!0?i.push(p):t.push(p)}function c(d,l,g,v,m,u){const p=s(d,l,g,v,m,u);g.transmission>0?n.unshift(p):g.transparent===!0?i.unshift(p):t.unshift(p)}function h(d,l){t.length>1&&t.sort(d||lg),n.length>1&&n.sort(l||kl),i.length>1&&i.sort(l||kl)}function f(){for(let d=e,l=a.length;d<l;d++){const g=a[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:f,sort:h}}function cg(){let a=new WeakMap;function e(n,i){const r=a.get(n);let s;return r===void 0?(s=new Fl,a.set(n,[s])):i>=r.length?(s=new Fl,r.push(s)):s=r[i],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function hg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Se};break;case"SpotLight":t={position:new R,direction:new R,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new R,halfWidth:new R,halfHeight:new R};break}return a[e.id]=t,t}}}function dg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let ug=0;function fg(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function pg(a){const e=new hg,t=dg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new R);const i=new R,r=new et,s=new et;function o(h){let f=0,d=0,l=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let g=0,v=0,m=0,u=0,p=0,x=0,b=0,M=0,C=0,A=0,T=0;h.sort(fg);for(let H=0,_=h.length;H<_;H++){const y=h[H],k=y.color,F=y.intensity,N=y.distance,X=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)f+=k.r*F,d+=k.g*F,l+=k.b*F;else if(y.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(y.sh.coefficients[O],F);T++}else if(y.isDirectionalLight){const O=e.get(y);if(O.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const Y=y.shadow,V=t.get(y);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=X,n.directionalShadowMatrix[g]=y.shadow.matrix,x++}n.directional[g]=O,g++}else if(y.isSpotLight){const O=e.get(y);O.position.setFromMatrixPosition(y.matrixWorld),O.color.copy(k).multiplyScalar(F),O.distance=N,O.coneCos=Math.cos(y.angle),O.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),O.decay=y.decay,n.spot[m]=O;const Y=y.shadow;if(y.map&&(n.spotLightMap[C]=y.map,C++,Y.updateMatrices(y),y.castShadow&&A++),n.spotLightMatrix[m]=Y.matrix,y.castShadow){const V=t.get(y);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[m]=V,n.spotShadowMap[m]=X,M++}m++}else if(y.isRectAreaLight){const O=e.get(y);O.color.copy(k).multiplyScalar(F),O.halfWidth.set(y.width*.5,0,0),O.halfHeight.set(0,y.height*.5,0),n.rectArea[u]=O,u++}else if(y.isPointLight){const O=e.get(y);if(O.color.copy(y.color).multiplyScalar(y.intensity),O.distance=y.distance,O.decay=y.decay,y.castShadow){const Y=y.shadow,V=t.get(y);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=y.shadow.matrix,b++}n.point[v]=O,v++}else if(y.isHemisphereLight){const O=e.get(y);O.skyColor.copy(y.color).multiplyScalar(F),O.groundColor.copy(y.groundColor).multiplyScalar(F),n.hemi[p]=O,p++}}u>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=l;const P=n.hash;(P.directionalLength!==g||P.pointLength!==v||P.spotLength!==m||P.rectAreaLength!==u||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==b||P.numSpotShadows!==M||P.numSpotMaps!==C||P.numLightProbes!==T)&&(n.directional.length=g,n.spot.length=m,n.rectArea.length=u,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=g,P.pointLength=v,P.spotLength=m,P.rectAreaLength=u,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=b,P.numSpotShadows=M,P.numSpotMaps=C,P.numLightProbes=T,n.version=ug++)}function c(h,f){let d=0,l=0,g=0,v=0,m=0;const u=f.matrixWorldInverse;for(let p=0,x=h.length;p<x;p++){const b=h[p];if(b.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(u),d++}else if(b.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(u),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(u),g++}else if(b.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(u),s.identity(),r.copy(b.matrixWorld),r.premultiply(u),s.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),v++}else if(b.isPointLight){const M=n.point[l];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(u),l++}else if(b.isHemisphereLight){const M=n.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(u),m++}}}return{setup:o,setupView:c,state:n}}function Bl(a){const e=new pg(a),t=[],n=[];function i(f){h.camera=f,t.length=0,n.length=0}function r(f){t.push(f)}function s(f){n.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:s}}function mg(a){let e=new WeakMap;function t(i,r=0){const s=e.get(i);let o;return s===void 0?(o=new Bl(a),e.set(i,[o])):r>=s.length?(o=new Bl(a),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class gg extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vg extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bg(a,e,t){let n=new yo;const i=new fe,r=new fe,s=new it,o=new gg({depthPacking:Zh}),c=new vg,h={},f=t.maxTextureSize,d={[On]:Ot,[Ot]:On,[Yt]:Yt},l=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:_g,fragmentShader:xg}),g=l.clone();g.defines.HORIZONTAL_PASS=1;const v=new st;v.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ne(v,l),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let p=this.type;this.render=function(A,T,P){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||A.length===0)return;const H=a.getRenderTarget(),_=a.getActiveCubeFace(),y=a.getActiveMipmapLevel(),k=a.state;k.setBlending(Nn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=p!==yn&&this.type===yn,N=p===yn&&this.type!==yn;for(let X=0,O=A.length;X<O;X++){const Y=A[X],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const re=V.getFrameExtents();if(i.multiply(re),r.copy(V.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(r.x=Math.floor(f/re.x),i.x=r.x*re.x,V.mapSize.x=r.x),i.y>f&&(r.y=Math.floor(f/re.y),i.y=r.y*re.y,V.mapSize.y=r.y)),V.map===null||F===!0||N===!0){const Q=this.type!==yn?{minFilter:Ht,magFilter:Ht}:{};V.map!==null&&V.map.dispose(),V.map=new ni(i.x,i.y,Q),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}a.setRenderTarget(V.map),a.clear();const $=V.getViewportCount();for(let Q=0;Q<$;Q++){const De=V.getViewport(Q);s.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),k.viewport(s),V.updateMatrices(Y,Q),n=V.getFrustum(),M(T,P,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===yn&&x(V,P),V.needsUpdate=!1}p=this.type,u.needsUpdate=!1,a.setRenderTarget(H,_,y)};function x(A,T){const P=e.update(m);l.defines.VSM_SAMPLES!==A.blurSamples&&(l.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,l.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ni(i.x,i.y)),l.uniforms.shadow_pass.value=A.map.texture,l.uniforms.resolution.value=A.mapSize,l.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(T,null,P,l,m,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(T,null,P,g,m,null)}function b(A,T,P,H){let _=null;const y=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(y!==void 0)_=y;else if(_=P.isPointLight===!0?c:o,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=_.uuid,F=T.uuid;let N=h[k];N===void 0&&(N={},h[k]=N);let X=N[F];X===void 0&&(X=_.clone(),N[F]=X,T.addEventListener("dispose",C)),_=X}if(_.visible=T.visible,_.wireframe=T.wireframe,H===yn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:d[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const k=a.properties.get(_);k.light=P}return _}function M(A,T,P,H,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===yn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const F=e.update(A),N=A.material;if(Array.isArray(N)){const X=F.groups;for(let O=0,Y=X.length;O<Y;O++){const V=X[O],re=N[V.materialIndex];if(re&&re.visible){const $=b(A,re,H,_);A.onBeforeShadow(a,A,T,P,F,$,V),a.renderBufferDirect(P,null,F,$,A,V),A.onAfterShadow(a,A,T,P,F,$,V)}}}else if(N.visible){const X=b(A,N,H,_);A.onBeforeShadow(a,A,T,P,F,X,null),a.renderBufferDirect(P,null,F,X,A,null),A.onAfterShadow(a,A,T,P,F,X,null)}}const k=A.children;for(let F=0,N=k.length;F<N;F++)M(k[F],T,P,H,_)}function C(A){A.target.removeEventListener("dispose",C);for(const P in h){const H=h[P],_=A.target.uuid;_ in H&&(H[_].dispose(),delete H[_])}}}const yg={[br]:yr,[Sr]:Tr,[Mr]:wr,[Ni]:Er,[yr]:br,[Tr]:Sr,[wr]:Mr,[Er]:Ni};function Sg(a){function e(){let I=!1;const ce=new it;let W=null;const j=new it(0,0,0,0);return{setMask:function(oe){W!==oe&&!I&&(a.colorMask(oe,oe,oe,oe),W=oe)},setLocked:function(oe){I=oe},setClear:function(oe,he,$e,_t,kt){kt===!0&&(oe*=_t,he*=_t,$e*=_t),ce.set(oe,he,$e,_t),j.equals(ce)===!1&&(a.clearColor(oe,he,$e,_t),j.copy(ce))},reset:function(){I=!1,W=null,j.set(-1,0,0,0)}}}function t(){let I=!1,ce=!1,W=null,j=null,oe=null;return{setReversed:function(he){ce=he},setTest:function(he){he?_e(a.DEPTH_TEST):de(a.DEPTH_TEST)},setMask:function(he){W!==he&&!I&&(a.depthMask(he),W=he)},setFunc:function(he){if(ce&&(he=yg[he]),j!==he){switch(he){case br:a.depthFunc(a.NEVER);break;case yr:a.depthFunc(a.ALWAYS);break;case Sr:a.depthFunc(a.LESS);break;case Ni:a.depthFunc(a.LEQUAL);break;case Mr:a.depthFunc(a.EQUAL);break;case Er:a.depthFunc(a.GEQUAL);break;case Tr:a.depthFunc(a.GREATER);break;case wr:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}j=he}},setLocked:function(he){I=he},setClear:function(he){oe!==he&&(a.clearDepth(he),oe=he)},reset:function(){I=!1,W=null,j=null,oe=null}}}function n(){let I=!1,ce=null,W=null,j=null,oe=null,he=null,$e=null,_t=null,kt=null;return{setTest:function(Ke){I||(Ke?_e(a.STENCIL_TEST):de(a.STENCIL_TEST))},setMask:function(Ke){ce!==Ke&&!I&&(a.stencilMask(Ke),ce=Ke)},setFunc:function(Ke,Ft,pn){(W!==Ke||j!==Ft||oe!==pn)&&(a.stencilFunc(Ke,Ft,pn),W=Ke,j=Ft,oe=pn)},setOp:function(Ke,Ft,pn){(he!==Ke||$e!==Ft||_t!==pn)&&(a.stencilOp(Ke,Ft,pn),he=Ke,$e=Ft,_t=pn)},setLocked:function(Ke){I=Ke},setClear:function(Ke){kt!==Ke&&(a.clearStencil(Ke),kt=Ke)},reset:function(){I=!1,ce=null,W=null,j=null,oe=null,he=null,$e=null,_t=null,kt=null}}}const i=new e,r=new t,s=new n,o=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,l=[],g=null,v=!1,m=null,u=null,p=null,x=null,b=null,M=null,C=null,A=new Se(0,0,0),T=0,P=!1,H=null,_=null,y=null,k=null,F=null;const N=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,O=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=O>=1):Y.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=O>=2);let V=null,re={};const $=a.getParameter(a.SCISSOR_BOX),Q=a.getParameter(a.VIEWPORT),De=new it().fromArray($),ke=new it().fromArray(Q);function q(I,ce,W,j){const oe=new Uint8Array(4),he=a.createTexture();a.bindTexture(I,he),a.texParameteri(I,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(I,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let $e=0;$e<W;$e++)I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY?a.texImage3D(ce,0,a.RGBA,1,1,j,0,a.RGBA,a.UNSIGNED_BYTE,oe):a.texImage2D(ce+$e,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,oe);return he}const ee={};ee[a.TEXTURE_2D]=q(a.TEXTURE_2D,a.TEXTURE_2D,1),ee[a.TEXTURE_CUBE_MAP]=q(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[a.TEXTURE_2D_ARRAY]=q(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ee[a.TEXTURE_3D]=q(a.TEXTURE_3D,a.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),s.setClear(0),_e(a.DEPTH_TEST),r.setFunc(Ni),He(!1),Xe(Xo),_e(a.CULL_FACE),L(Nn);function _e(I){h[I]!==!0&&(a.enable(I),h[I]=!0)}function de(I){h[I]!==!1&&(a.disable(I),h[I]=!1)}function Ue(I,ce){return f[I]!==ce?(a.bindFramebuffer(I,ce),f[I]=ce,I===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=ce),I===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ae(I,ce){let W=l,j=!1;if(I){W=d.get(ce),W===void 0&&(W=[],d.set(ce,W));const oe=I.textures;if(W.length!==oe.length||W[0]!==a.COLOR_ATTACHMENT0){for(let he=0,$e=oe.length;he<$e;he++)W[he]=a.COLOR_ATTACHMENT0+he;W.length=oe.length,j=!0}}else W[0]!==a.BACK&&(W[0]=a.BACK,j=!0);j&&a.drawBuffers(W)}function Ve(I){return g!==I?(a.useProgram(I),g=I,!0):!1}const nt={[Kn]:a.FUNC_ADD,[Sh]:a.FUNC_SUBTRACT,[Mh]:a.FUNC_REVERSE_SUBTRACT};nt[Eh]=a.MIN,nt[Th]=a.MAX;const We={[wh]:a.ZERO,[Ah]:a.ONE,[Rh]:a.SRC_COLOR,[_r]:a.SRC_ALPHA,[Nh]:a.SRC_ALPHA_SATURATE,[Ih]:a.DST_COLOR,[Ph]:a.DST_ALPHA,[Ch]:a.ONE_MINUS_SRC_COLOR,[xr]:a.ONE_MINUS_SRC_ALPHA,[Dh]:a.ONE_MINUS_DST_COLOR,[Lh]:a.ONE_MINUS_DST_ALPHA,[Uh]:a.CONSTANT_COLOR,[Oh]:a.ONE_MINUS_CONSTANT_COLOR,[kh]:a.CONSTANT_ALPHA,[Fh]:a.ONE_MINUS_CONSTANT_ALPHA};function L(I,ce,W,j,oe,he,$e,_t,kt,Ke){if(I===Nn){v===!0&&(de(a.BLEND),v=!1);return}if(v===!1&&(_e(a.BLEND),v=!0),I!==yh){if(I!==m||Ke!==P){if((u!==Kn||b!==Kn)&&(a.blendEquation(a.FUNC_ADD),u=Kn,b=Kn),Ke)switch(I){case Li:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case qo:a.blendFunc(a.ONE,a.ONE);break;case Yo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ko:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Li:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case qo:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Yo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Ko:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,x=null,M=null,C=null,A.set(0,0,0),T=0,m=I,P=Ke}return}oe=oe||ce,he=he||W,$e=$e||j,(ce!==u||oe!==b)&&(a.blendEquationSeparate(nt[ce],nt[oe]),u=ce,b=oe),(W!==p||j!==x||he!==M||$e!==C)&&(a.blendFuncSeparate(We[W],We[j],We[he],We[$e]),p=W,x=j,M=he,C=$e),(_t.equals(A)===!1||kt!==T)&&(a.blendColor(_t.r,_t.g,_t.b,kt),A.copy(_t),T=kt),m=I,P=!1}function Gt(I,ce){I.side===Yt?de(a.CULL_FACE):_e(a.CULL_FACE);let W=I.side===Ot;ce&&(W=!W),He(W),I.blending===Li&&I.transparent===!1?L(Nn):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),i.setMask(I.colorWrite);const j=I.stencilWrite;s.setTest(j),j&&(s.setMask(I.stencilWriteMask),s.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),s.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_e(a.SAMPLE_ALPHA_TO_COVERAGE):de(a.SAMPLE_ALPHA_TO_COVERAGE)}function He(I){H!==I&&(I?a.frontFace(a.CW):a.frontFace(a.CCW),H=I)}function Xe(I){I!==_h?(_e(a.CULL_FACE),I!==_&&(I===Xo?a.cullFace(a.BACK):I===xh?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):de(a.CULL_FACE),_=I}function Ce(I){I!==y&&(X&&a.lineWidth(I),y=I)}function rt(I,ce,W){I?(_e(a.POLYGON_OFFSET_FILL),(k!==ce||F!==W)&&(a.polygonOffset(ce,W),k=ce,F=W)):de(a.POLYGON_OFFSET_FILL)}function Ie(I){I?_e(a.SCISSOR_TEST):de(a.SCISSOR_TEST)}function w(I){I===void 0&&(I=a.TEXTURE0+N-1),V!==I&&(a.activeTexture(I),V=I)}function S(I,ce,W){W===void 0&&(V===null?W=a.TEXTURE0+N-1:W=V);let j=re[W];j===void 0&&(j={type:void 0,texture:void 0},re[W]=j),(j.type!==I||j.texture!==ce)&&(V!==W&&(a.activeTexture(W),V=W),a.bindTexture(I,ce||ee[I]),j.type=I,j.texture=ce)}function B(){const I=re[V];I!==void 0&&I.type!==void 0&&(a.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{a.compressedTexImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{a.compressedTexImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{a.texSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{a.texSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qe(){try{a.texStorage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{a.texStorage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{a.texImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{a.texImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){De.equals(I)===!1&&(a.scissor(I.x,I.y,I.z,I.w),De.copy(I))}function me(I){ke.equals(I)===!1&&(a.viewport(I.x,I.y,I.z,I.w),ke.copy(I))}function Ge(I,ce){let W=c.get(ce);W===void 0&&(W=new WeakMap,c.set(ce,W));let j=W.get(I);j===void 0&&(j=a.getUniformBlockIndex(ce,I.name),W.set(I,j))}function Oe(I,ce){const j=c.get(ce).get(I);o.get(ce)!==j&&(a.uniformBlockBinding(ce,j,I.__bindingPointIndex),o.set(ce,j))}function at(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},V=null,re={},f={},d=new WeakMap,l=[],g=null,v=!1,m=null,u=null,p=null,x=null,b=null,M=null,C=null,A=new Se(0,0,0),T=0,P=!1,H=null,_=null,y=null,k=null,F=null,De.set(0,0,a.canvas.width,a.canvas.height),ke.set(0,0,a.canvas.width,a.canvas.height),i.reset(),r.reset(),s.reset()}return{buffers:{color:i,depth:r,stencil:s},enable:_e,disable:de,bindFramebuffer:Ue,drawBuffers:Ae,useProgram:Ve,setBlending:L,setMaterial:Gt,setFlipSided:He,setCullFace:Xe,setLineWidth:Ce,setPolygonOffset:rt,setScissorTest:Ie,activeTexture:w,bindTexture:S,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:pe,texImage3D:Pe,updateUBOMapping:Ge,uniformBlockBinding:Oe,texStorage2D:qe,texStorage3D:te,texSubImage2D:K,texSubImage3D:be,compressedTexSubImage2D:ae,compressedTexSubImage3D:ue,scissor:Le,viewport:me,reset:at}}function zl(a,e,t,n){const i=Mg(n);switch(t){case xc:return a*e;case yc:return a*e;case Sc:return a*e*2;case po:return a*e/i.components*i.byteLength;case mo:return a*e/i.components*i.byteLength;case Mc:return a*e*2/i.components*i.byteLength;case go:return a*e*2/i.components*i.byteLength;case bc:return a*e*3/i.components*i.byteLength;case on:return a*e*4/i.components*i.byteLength;case vo:return a*e*4/i.components*i.byteLength;case Js:case Qs:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Lr:case Dr:return Math.max(a,16)*Math.max(e,8)/4;case Pr:case Ir:return Math.max(a,8)*Math.max(e,8)/2;case Nr:case Ur:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Or:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case kr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Fr:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Br:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case zr:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Hr:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Gr:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Vr:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Wr:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case $r:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case qr:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Yr:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Kr:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Zr:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case na:case jr:case Jr:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Ec:case Qr:return Math.ceil(a/4)*Math.ceil(e/4)*8;case eo:case to:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mg(a){switch(a){case Mn:case gc:return{byteLength:1,components:1};case hs:case vc:case gs:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case ti:case ho:case dn:return{byteLength:4,components:1};case _c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function Eg(a,e,t,n,i,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new fe,f=new WeakMap;let d;const l=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,S){return g?new OffscreenCanvas(w,S):ca("canvas")}function m(w,S,B){let Z=1;const J=Ie(w);if((J.width>B||J.height>B)&&(Z=B/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor(Z*J.width),be=Math.floor(Z*J.height);d===void 0&&(d=v(K,be));const ae=S?v(K,be):d;return ae.width=K,ae.height=be,ae.getContext("2d").drawImage(w,0,0,K,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+be+")."),ae}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function u(w){return w.generateMipmaps&&w.minFilter!==Ht&&w.minFilter!==an}function p(w){a.generateMipmap(w)}function x(w,S,B,Z,J=!1){if(w!==null){if(a[w]!==void 0)return a[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=S;if(S===a.RED&&(B===a.FLOAT&&(K=a.R32F),B===a.HALF_FLOAT&&(K=a.R16F),B===a.UNSIGNED_BYTE&&(K=a.R8)),S===a.RED_INTEGER&&(B===a.UNSIGNED_BYTE&&(K=a.R8UI),B===a.UNSIGNED_SHORT&&(K=a.R16UI),B===a.UNSIGNED_INT&&(K=a.R32UI),B===a.BYTE&&(K=a.R8I),B===a.SHORT&&(K=a.R16I),B===a.INT&&(K=a.R32I)),S===a.RG&&(B===a.FLOAT&&(K=a.RG32F),B===a.HALF_FLOAT&&(K=a.RG16F),B===a.UNSIGNED_BYTE&&(K=a.RG8)),S===a.RG_INTEGER&&(B===a.UNSIGNED_BYTE&&(K=a.RG8UI),B===a.UNSIGNED_SHORT&&(K=a.RG16UI),B===a.UNSIGNED_INT&&(K=a.RG32UI),B===a.BYTE&&(K=a.RG8I),B===a.SHORT&&(K=a.RG16I),B===a.INT&&(K=a.RG32I)),S===a.RGB_INTEGER&&(B===a.UNSIGNED_BYTE&&(K=a.RGB8UI),B===a.UNSIGNED_SHORT&&(K=a.RGB16UI),B===a.UNSIGNED_INT&&(K=a.RGB32UI),B===a.BYTE&&(K=a.RGB8I),B===a.SHORT&&(K=a.RGB16I),B===a.INT&&(K=a.RGB32I)),S===a.RGBA_INTEGER&&(B===a.UNSIGNED_BYTE&&(K=a.RGBA8UI),B===a.UNSIGNED_SHORT&&(K=a.RGBA16UI),B===a.UNSIGNED_INT&&(K=a.RGBA32UI),B===a.BYTE&&(K=a.RGBA8I),B===a.SHORT&&(K=a.RGBA16I),B===a.INT&&(K=a.RGBA32I)),S===a.RGB&&B===a.UNSIGNED_INT_5_9_9_9_REV&&(K=a.RGB9_E5),S===a.RGBA){const be=J?aa:Je.getTransfer(Z);B===a.FLOAT&&(K=a.RGBA32F),B===a.HALF_FLOAT&&(K=a.RGBA16F),B===a.UNSIGNED_BYTE&&(K=be===lt?a.SRGB8_ALPHA8:a.RGBA8),B===a.UNSIGNED_SHORT_4_4_4_4&&(K=a.RGBA4),B===a.UNSIGNED_SHORT_5_5_5_1&&(K=a.RGB5_A1)}return(K===a.R16F||K===a.R32F||K===a.RG16F||K===a.RG32F||K===a.RGBA16F||K===a.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(w,S){let B;return w?S===null||S===ti||S===ki?B=a.DEPTH24_STENCIL8:S===dn?B=a.DEPTH32F_STENCIL8:S===hs&&(B=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ti||S===ki?B=a.DEPTH_COMPONENT24:S===dn?B=a.DEPTH_COMPONENT32F:S===hs&&(B=a.DEPTH_COMPONENT16),B}function M(w,S){return u(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ht&&w.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function C(w){const S=w.target;S.removeEventListener("dispose",C),T(S),S.isVideoTexture&&f.delete(S)}function A(w){const S=w.target;S.removeEventListener("dispose",A),H(S)}function T(w){const S=n.get(w);if(S.__webglInit===void 0)return;const B=w.source,Z=l.get(B);if(Z){const J=Z[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(w),Object.keys(Z).length===0&&l.delete(B)}n.remove(w)}function P(w){const S=n.get(w);a.deleteTexture(S.__webglTexture);const B=w.source,Z=l.get(B);delete Z[S.__cacheKey],s.memory.textures--}function H(w){const S=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let J=0;J<S.__webglFramebuffer[Z].length;J++)a.deleteFramebuffer(S.__webglFramebuffer[Z][J]);else a.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)a.deleteFramebuffer(S.__webglFramebuffer[Z]);else a.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&a.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&a.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&a.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=w.textures;for(let Z=0,J=B.length;Z<J;Z++){const K=n.get(B[Z]);K.__webglTexture&&(a.deleteTexture(K.__webglTexture),s.memory.textures--),n.remove(B[Z])}n.remove(w)}let _=0;function y(){_=0}function k(){const w=_;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),_+=1,w}function F(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function N(w,S){const B=n.get(w);if(w.isVideoTexture&&Ce(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(B,w,S);return}}t.bindTexture(a.TEXTURE_2D,B.__webglTexture,a.TEXTURE0+S)}function X(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){ke(B,w,S);return}t.bindTexture(a.TEXTURE_2D_ARRAY,B.__webglTexture,a.TEXTURE0+S)}function O(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){ke(B,w,S);return}t.bindTexture(a.TEXTURE_3D,B.__webglTexture,a.TEXTURE0+S)}function Y(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){q(B,w,S);return}t.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+S)}const V={[cs]:a.REPEAT,[Jn]:a.CLAMP_TO_EDGE,[Cr]:a.MIRRORED_REPEAT},re={[Ht]:a.NEAREST,[Yh]:a.NEAREST_MIPMAP_NEAREST,[bs]:a.NEAREST_MIPMAP_LINEAR,[an]:a.LINEAR,[La]:a.LINEAR_MIPMAP_NEAREST,[Qn]:a.LINEAR_MIPMAP_LINEAR},$={[Jh]:a.NEVER,[sd]:a.ALWAYS,[Qh]:a.LESS,[wc]:a.LEQUAL,[ed]:a.EQUAL,[id]:a.GEQUAL,[td]:a.GREATER,[nd]:a.NOTEQUAL};function Q(w,S){if(S.type===dn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===an||S.magFilter===La||S.magFilter===bs||S.magFilter===Qn||S.minFilter===an||S.minFilter===La||S.minFilter===bs||S.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(w,a.TEXTURE_WRAP_S,V[S.wrapS]),a.texParameteri(w,a.TEXTURE_WRAP_T,V[S.wrapT]),(w===a.TEXTURE_3D||w===a.TEXTURE_2D_ARRAY)&&a.texParameteri(w,a.TEXTURE_WRAP_R,V[S.wrapR]),a.texParameteri(w,a.TEXTURE_MAG_FILTER,re[S.magFilter]),a.texParameteri(w,a.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(a.texParameteri(w,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(w,a.TEXTURE_COMPARE_FUNC,$[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ht||S.minFilter!==bs&&S.minFilter!==Qn||S.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");a.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function De(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",C));const Z=S.source;let J=l.get(Z);J===void 0&&(J={},l.set(Z,J));const K=F(S);if(K!==w.__cacheKey){J[K]===void 0&&(J[K]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,B=!0),J[K].usedTimes++;const be=J[w.__cacheKey];be!==void 0&&(J[w.__cacheKey].usedTimes--,be.usedTimes===0&&P(S)),w.__cacheKey=K,w.__webglTexture=J[K].texture}return B}function ke(w,S,B){let Z=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=a.TEXTURE_3D);const J=De(w,S),K=S.source;t.bindTexture(Z,w.__webglTexture,a.TEXTURE0+B);const be=n.get(K);if(K.version!==be.__version||J===!0){t.activeTexture(a.TEXTURE0+B);const ae=Je.getPrimaries(Je.workingColorSpace),ue=S.colorSpace===Dn?null:Je.getPrimaries(S.colorSpace),qe=S.colorSpace===Dn||ae===ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let te=m(S.image,!1,i.maxTextureSize);te=rt(S,te);const pe=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type);let Le=x(S.internalFormat,pe,Pe,S.colorSpace,S.isVideoTexture);Q(Z,S);let me;const Ge=S.mipmaps,Oe=S.isVideoTexture!==!0,at=be.__version===void 0||J===!0,I=K.dataReady,ce=M(S,te);if(S.isDepthTexture)Le=b(S.format===Fi,S.type),at&&(Oe?t.texStorage2D(a.TEXTURE_2D,1,Le,te.width,te.height):t.texImage2D(a.TEXTURE_2D,0,Le,te.width,te.height,0,pe,Pe,null));else if(S.isDataTexture)if(Ge.length>0){Oe&&at&&t.texStorage2D(a.TEXTURE_2D,ce,Le,Ge[0].width,Ge[0].height);for(let W=0,j=Ge.length;W<j;W++)me=Ge[W],Oe?I&&t.texSubImage2D(a.TEXTURE_2D,W,0,0,me.width,me.height,pe,Pe,me.data):t.texImage2D(a.TEXTURE_2D,W,Le,me.width,me.height,0,pe,Pe,me.data);S.generateMipmaps=!1}else Oe?(at&&t.texStorage2D(a.TEXTURE_2D,ce,Le,te.width,te.height),I&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,te.width,te.height,pe,Pe,te.data)):t.texImage2D(a.TEXTURE_2D,0,Le,te.width,te.height,0,pe,Pe,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ce,Le,Ge[0].width,Ge[0].height,te.depth);for(let W=0,j=Ge.length;W<j;W++)if(me=Ge[W],S.format!==on)if(pe!==null)if(Oe){if(I)if(S.layerUpdates.size>0){const oe=zl(me.width,me.height,S.format,S.type);for(const he of S.layerUpdates){const $e=me.data.subarray(he*oe/me.data.BYTES_PER_ELEMENT,(he+1)*oe/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,W,0,0,he,me.width,me.height,1,pe,$e,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,te.depth,pe,me.data,0,0)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,W,Le,me.width,me.height,te.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,W,0,0,0,me.width,me.height,te.depth,pe,Pe,me.data):t.texImage3D(a.TEXTURE_2D_ARRAY,W,Le,me.width,me.height,te.depth,0,pe,Pe,me.data)}else{Oe&&at&&t.texStorage2D(a.TEXTURE_2D,ce,Le,Ge[0].width,Ge[0].height);for(let W=0,j=Ge.length;W<j;W++)me=Ge[W],S.format!==on?pe!==null?Oe?I&&t.compressedTexSubImage2D(a.TEXTURE_2D,W,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(a.TEXTURE_2D,W,Le,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&t.texSubImage2D(a.TEXTURE_2D,W,0,0,me.width,me.height,pe,Pe,me.data):t.texImage2D(a.TEXTURE_2D,W,Le,me.width,me.height,0,pe,Pe,me.data)}else if(S.isDataArrayTexture)if(Oe){if(at&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ce,Le,te.width,te.height,te.depth),I)if(S.layerUpdates.size>0){const W=zl(te.width,te.height,S.format,S.type);for(const j of S.layerUpdates){const oe=te.data.subarray(j*W/te.data.BYTES_PER_ELEMENT,(j+1)*W/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,pe,Pe,oe)}S.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,Pe,te.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Le,te.width,te.height,te.depth,0,pe,Pe,te.data);else if(S.isData3DTexture)Oe?(at&&t.texStorage3D(a.TEXTURE_3D,ce,Le,te.width,te.height,te.depth),I&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,Pe,te.data)):t.texImage3D(a.TEXTURE_3D,0,Le,te.width,te.height,te.depth,0,pe,Pe,te.data);else if(S.isFramebufferTexture){if(at)if(Oe)t.texStorage2D(a.TEXTURE_2D,ce,Le,te.width,te.height);else{let W=te.width,j=te.height;for(let oe=0;oe<ce;oe++)t.texImage2D(a.TEXTURE_2D,oe,Le,W,j,0,pe,Pe,null),W>>=1,j>>=1}}else if(Ge.length>0){if(Oe&&at){const W=Ie(Ge[0]);t.texStorage2D(a.TEXTURE_2D,ce,Le,W.width,W.height)}for(let W=0,j=Ge.length;W<j;W++)me=Ge[W],Oe?I&&t.texSubImage2D(a.TEXTURE_2D,W,0,0,pe,Pe,me):t.texImage2D(a.TEXTURE_2D,W,Le,pe,Pe,me);S.generateMipmaps=!1}else if(Oe){if(at){const W=Ie(te);t.texStorage2D(a.TEXTURE_2D,ce,Le,W.width,W.height)}I&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,pe,Pe,te)}else t.texImage2D(a.TEXTURE_2D,0,Le,pe,Pe,te);u(S)&&p(Z),be.__version=K.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function q(w,S,B){if(S.image.length!==6)return;const Z=De(w,S),J=S.source;t.bindTexture(a.TEXTURE_CUBE_MAP,w.__webglTexture,a.TEXTURE0+B);const K=n.get(J);if(J.version!==K.__version||Z===!0){t.activeTexture(a.TEXTURE0+B);const be=Je.getPrimaries(Je.workingColorSpace),ae=S.colorSpace===Dn?null:Je.getPrimaries(S.colorSpace),ue=S.colorSpace===Dn||be===ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const qe=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let j=0;j<6;j++)!qe&&!te?pe[j]=m(S.image[j],!0,i.maxCubemapSize):pe[j]=te?S.image[j].image:S.image[j],pe[j]=rt(S,pe[j]);const Pe=pe[0],Le=r.convert(S.format,S.colorSpace),me=r.convert(S.type),Ge=x(S.internalFormat,Le,me,S.colorSpace),Oe=S.isVideoTexture!==!0,at=K.__version===void 0||Z===!0,I=J.dataReady;let ce=M(S,Pe);Q(a.TEXTURE_CUBE_MAP,S);let W;if(qe){Oe&&at&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ce,Ge,Pe.width,Pe.height);for(let j=0;j<6;j++){W=pe[j].mipmaps;for(let oe=0;oe<W.length;oe++){const he=W[oe];S.format!==on?Le!==null?Oe?I&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,he.width,he.height,Le,he.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,Ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,0,0,he.width,he.height,Le,me,he.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe,Ge,he.width,he.height,0,Le,me,he.data)}}}else{if(W=S.mipmaps,Oe&&at){W.length>0&&ce++;const j=Ie(pe[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,ce,Ge,j.width,j.height)}for(let j=0;j<6;j++)if(te){Oe?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe[j].width,pe[j].height,Le,me,pe[j].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,pe[j].width,pe[j].height,0,Le,me,pe[j].data);for(let oe=0;oe<W.length;oe++){const $e=W[oe].image[j].image;Oe?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,$e.width,$e.height,Le,me,$e.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,Ge,$e.width,$e.height,0,Le,me,$e.data)}}else{Oe?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Le,me,pe[j]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,Le,me,pe[j]);for(let oe=0;oe<W.length;oe++){const he=W[oe];Oe?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,0,0,Le,me,he.image[j]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,oe+1,Ge,Le,me,he.image[j])}}}u(S)&&p(a.TEXTURE_CUBE_MAP),K.__version=J.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ee(w,S,B,Z,J,K){const be=r.convert(B.format,B.colorSpace),ae=r.convert(B.type),ue=x(B.internalFormat,be,ae,B.colorSpace);if(!n.get(S).__hasExternalTextures){const te=Math.max(1,S.width>>K),pe=Math.max(1,S.height>>K);J===a.TEXTURE_3D||J===a.TEXTURE_2D_ARRAY?t.texImage3D(J,K,ue,te,pe,S.depth,0,be,ae,null):t.texImage2D(J,K,ue,te,pe,0,be,ae,null)}t.bindFramebuffer(a.FRAMEBUFFER,w),Xe(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Z,J,n.get(B).__webglTexture,0,He(S)):(J===a.TEXTURE_2D||J>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,Z,J,n.get(B).__webglTexture,K),t.bindFramebuffer(a.FRAMEBUFFER,null)}function _e(w,S,B){if(a.bindRenderbuffer(a.RENDERBUFFER,w),S.depthBuffer){const Z=S.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,K=b(S.stencilBuffer,J),be=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ae=He(S);Xe(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ae,K,S.width,S.height):B?a.renderbufferStorageMultisample(a.RENDERBUFFER,ae,K,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,K,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,w)}else{const Z=S.textures;for(let J=0;J<Z.length;J++){const K=Z[J],be=r.convert(K.format,K.colorSpace),ae=r.convert(K.type),ue=x(K.internalFormat,be,ae,K.colorSpace),qe=He(S);B&&Xe(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,qe,ue,S.width,S.height):Xe(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,qe,ue,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,ue,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function de(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);const Z=n.get(S.depthTexture).__webglTexture,J=He(S);if(S.depthTexture.format===Ii)Xe(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,Z,0);else if(S.depthTexture.format===Fi)Xe(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ue(w){const S=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Z}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");de(S.__webglFramebuffer,w)}else if(B){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=a.createRenderbuffer(),_e(S.__webglDepthbuffer[Z],w,!1);else{const J=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];a.bindRenderbuffer(a.RENDERBUFFER,K),a.framebufferRenderbuffer(a.FRAMEBUFFER,J,a.RENDERBUFFER,K)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=a.createRenderbuffer(),_e(S.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,J),a.framebufferRenderbuffer(a.FRAMEBUFFER,Z,a.RENDERBUFFER,J)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ae(w,S,B){const Z=n.get(w);S!==void 0&&ee(Z.__webglFramebuffer,w,w.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),B!==void 0&&Ue(w)}function Ve(w){const S=w.texture,B=n.get(w),Z=n.get(S);w.addEventListener("dispose",A);const J=w.textures,K=w.isWebGLCubeRenderTarget===!0,be=J.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=a.createTexture()),Z.__version=S.version,s.memory.textures++),K){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let ue=0;ue<S.mipmaps.length;ue++)B.__webglFramebuffer[ae][ue]=a.createFramebuffer()}else B.__webglFramebuffer[ae]=a.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)B.__webglFramebuffer[ae]=a.createFramebuffer()}else B.__webglFramebuffer=a.createFramebuffer();if(be)for(let ae=0,ue=J.length;ae<ue;ae++){const qe=n.get(J[ae]);qe.__webglTexture===void 0&&(qe.__webglTexture=a.createTexture(),s.memory.textures++)}if(w.samples>0&&Xe(w)===!1){B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const ue=J[ae];B.__webglColorRenderbuffer[ae]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const qe=r.convert(ue.format,ue.colorSpace),te=r.convert(ue.type),pe=x(ue.internalFormat,qe,te,ue.colorSpace,w.isXRRenderTarget===!0),Pe=He(w);a.renderbufferStorageMultisample(a.RENDERBUFFER,Pe,pe,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ae,a.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}a.bindRenderbuffer(a.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),_e(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(K){t.bindTexture(a.TEXTURE_CUBE_MAP,Z.__webglTexture),Q(a.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ee(B.__webglFramebuffer[ae][ue],w,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else ee(B.__webglFramebuffer[ae],w,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);u(S)&&p(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ae=0,ue=J.length;ae<ue;ae++){const qe=J[ae],te=n.get(qe);t.bindTexture(a.TEXTURE_2D,te.__webglTexture),Q(a.TEXTURE_2D,qe),ee(B.__webglFramebuffer,w,qe,a.COLOR_ATTACHMENT0+ae,a.TEXTURE_2D,0),u(qe)&&p(a.TEXTURE_2D)}t.unbindTexture()}else{let ae=a.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),Q(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ee(B.__webglFramebuffer[ue],w,S,a.COLOR_ATTACHMENT0,ae,ue);else ee(B.__webglFramebuffer,w,S,a.COLOR_ATTACHMENT0,ae,0);u(S)&&p(ae),t.unbindTexture()}w.depthBuffer&&Ue(w)}function nt(w){const S=w.textures;for(let B=0,Z=S.length;B<Z;B++){const J=S[B];if(u(J)){const K=w.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,be=n.get(J).__webglTexture;t.bindTexture(K,be),p(K),t.unbindTexture()}}}const We=[],L=[];function Gt(w){if(w.samples>0){if(Xe(w)===!1){const S=w.textures,B=w.width,Z=w.height;let J=a.COLOR_BUFFER_BIT;const K=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,be=n.get(w),ae=S.length>1;if(ae)for(let ue=0;ue<S.length;ue++)t.bindFramebuffer(a.FRAMEBUFFER,be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=a.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=a.STENCIL_BUFFER_BIT)),ae){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,be.__webglColorRenderbuffer[ue]);const qe=n.get(S[ue]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,qe,0)}a.blitFramebuffer(0,0,B,Z,0,0,B,Z,J,a.NEAREST),c===!0&&(We.length=0,L.length=0,We.push(a.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.resolveDepthBuffer===!1&&(We.push(K),L.push(K),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,L)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<S.length;ue++){t.bindFramebuffer(a.FRAMEBUFFER,be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,be.__webglColorRenderbuffer[ue]);const qe=n.get(S[ue]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,qe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const S=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[S])}}}function He(w){return Math.min(i.maxSamples,w.samples)}function Xe(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ce(w){const S=s.render.frame;f.get(w)!==S&&(f.set(w,S),w.update())}function rt(w,S){const B=w.colorSpace,Z=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==kn&&B!==Dn&&(Je.getTransfer(B)===lt?(Z!==on||J!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=y,this.setTexture2D=N,this.setTexture2DArray=X,this.setTexture3D=O,this.setTextureCube=Y,this.rebindTextures=Ae,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Xe}function Tg(a,e){function t(n,i=Dn){let r;const s=Je.getTransfer(i);if(n===Mn)return a.UNSIGNED_BYTE;if(n===uo)return a.UNSIGNED_SHORT_4_4_4_4;if(n===fo)return a.UNSIGNED_SHORT_5_5_5_1;if(n===_c)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===gc)return a.BYTE;if(n===vc)return a.SHORT;if(n===hs)return a.UNSIGNED_SHORT;if(n===ho)return a.INT;if(n===ti)return a.UNSIGNED_INT;if(n===dn)return a.FLOAT;if(n===gs)return a.HALF_FLOAT;if(n===xc)return a.ALPHA;if(n===bc)return a.RGB;if(n===on)return a.RGBA;if(n===yc)return a.LUMINANCE;if(n===Sc)return a.LUMINANCE_ALPHA;if(n===Ii)return a.DEPTH_COMPONENT;if(n===Fi)return a.DEPTH_STENCIL;if(n===po)return a.RED;if(n===mo)return a.RED_INTEGER;if(n===Mc)return a.RG;if(n===go)return a.RG_INTEGER;if(n===vo)return a.RGBA_INTEGER;if(n===Js||n===Qs||n===ea||n===ta)if(s===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pr||n===Lr||n===Ir||n===Dr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nr||n===Ur||n===Or)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nr||n===Ur)return s===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Or)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kr||n===Fr||n===Br||n===zr||n===Hr||n===Gr||n===Vr||n===Wr||n===$r||n===Xr||n===qr||n===Yr||n===Kr||n===Zr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kr)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fr)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Br)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zr)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hr)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gr)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vr)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wr)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$r)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xr)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qr)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yr)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kr)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zr)return s===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===na||n===jr||n===Jr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===na)return s===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ec||n===Qr||n===eo||n===to)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}class wg extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ln extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ag={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){s=!0;for(const m of e.hand.values()){const u=t.getJointPose(m,n),p=this._getHandJoint(h,m);u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=u.radius),p.visible=u!==null}const f=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],l=f.position.distanceTo(d.position),g=.02,v=.005;h.inputState.pinching&&l>g+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&l<=g-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Lt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new En({vertexShader:Rg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new Kt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lg extends Gi{constructor(e,t){super();const n=this;let i=null,r=1,s=null,o="local-floor",c=1,h=null,f=null,d=null,l=null,g=null,v=null;const m=new Pg,u=t.getContextAttributes();let p=null,x=null;const b=[],M=[],C=new fe;let A=null;const T=new Ut;T.layers.enable(1),T.viewport=new it;const P=new Ut;P.layers.enable(2),P.viewport=new it;const H=[T,P],_=new wg;_.layers.enable(1),_.layers.enable(2);let y=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=b[q];return ee===void 0&&(ee=new rr,b[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=b[q];return ee===void 0&&(ee=new rr,b[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=b[q];return ee===void 0&&(ee=new rr,b[q]=ee),ee.getHandSpace()};function F(q){const ee=M.indexOf(q.inputSource);if(ee===-1)return;const _e=b[ee];_e!==void 0&&(_e.update(q.inputSource,q.frame,h||s),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",X);for(let q=0;q<b.length;q++){const ee=M[q];ee!==null&&(M[q]=null,b[q].disconnect(ee))}y=null,k=null,m.reset(),e.setRenderTarget(p),g=null,l=null,d=null,i=null,x=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||s},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return l!==null?l:g},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",N),i.addEventListener("inputsourceschange",X),u.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const ee={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new ni(g.framebufferWidth,g.framebufferHeight,{format:on,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:u.stencil})}else{let ee=null,_e=null,de=null;u.depth&&(de=u.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=u.stencil?Fi:Ii,_e=u.stencil?ki:ti);const Ue={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};d=new XRWebGLBinding(i,t),l=d.createProjectionLayer(Ue),i.updateRenderState({layers:[l]}),e.setPixelRatio(1),e.setSize(l.textureWidth,l.textureHeight,!1),x=new ni(l.textureWidth,l.textureHeight,{format:on,type:Mn,depthTexture:new Bc(l.textureWidth,l.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:u.stencil,colorSpace:e.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),h=null,s=await i.requestReferenceSpace(o),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(q){for(let ee=0;ee<q.removed.length;ee++){const _e=q.removed[ee],de=M.indexOf(_e);de>=0&&(M[de]=null,b[de].disconnect(_e))}for(let ee=0;ee<q.added.length;ee++){const _e=q.added[ee];let de=M.indexOf(_e);if(de===-1){for(let Ae=0;Ae<b.length;Ae++)if(Ae>=M.length){M.push(_e),de=Ae;break}else if(M[Ae]===null){M[Ae]=_e,de=Ae;break}if(de===-1)break}const Ue=b[de];Ue&&Ue.connect(_e)}}const O=new R,Y=new R;function V(q,ee,_e){O.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(_e.matrixWorld);const de=O.distanceTo(Y),Ue=ee.projectionMatrix.elements,Ae=_e.projectionMatrix.elements,Ve=Ue[14]/(Ue[10]-1),nt=Ue[14]/(Ue[10]+1),We=(Ue[9]+1)/Ue[5],L=(Ue[9]-1)/Ue[5],Gt=(Ue[8]-1)/Ue[0],He=(Ae[8]+1)/Ae[0],Xe=Ve*Gt,Ce=Ve*He,rt=de/(-Gt+He),Ie=rt*-Gt;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(rt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ue[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const w=Ve+rt,S=nt+rt,B=Xe-Ie,Z=Ce+(de-Ie),J=We*nt/S*w,K=L*nt/S*w;q.projectionMatrix.makePerspective(B,Z,J,K,w,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function re(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ee=q.near,_e=q.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),_.near=P.near=T.near=ee,_.far=P.far=T.far=_e,(y!==_.near||k!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,k=_.far);const de=q.parent,Ue=_.cameras;re(_,de);for(let Ae=0;Ae<Ue.length;Ae++)re(Ue[Ae],de);Ue.length===2?V(_,T,P):_.projectionMatrix.copy(T.projectionMatrix),$(q,_,de)};function $(q,ee,_e){_e===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ds*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(l===null&&g===null))return c},this.setFoveation=function(q){c=q,l!==null&&(l.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(_)};let Q=null;function De(q,ee){if(f=ee.getViewerPose(h||s),v=ee,f!==null){const _e=f.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let de=!1;_e.length!==_.cameras.length&&(_.cameras.length=0,de=!0);for(let Ae=0;Ae<_e.length;Ae++){const Ve=_e[Ae];let nt=null;if(g!==null)nt=g.getViewport(Ve);else{const L=d.getViewSubImage(l,Ve);nt=L.viewport,Ae===0&&(e.setRenderTargetTextures(x,L.colorTexture,l.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(x))}let We=H[Ae];We===void 0&&(We=new Ut,We.layers.enable(Ae),We.viewport=new it,H[Ae]=We),We.matrix.fromArray(Ve.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ve.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(nt.x,nt.y,nt.width,nt.height),Ae===0&&(_.matrix.copy(We.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),de===!0&&_.cameras.push(We)}const Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Ae=d.getDepthInformation(_e[0]);Ae&&Ae.isValid&&Ae.texture&&m.init(e,Ae,i.renderState)}}for(let _e=0;_e<b.length;_e++){const de=M[_e],Ue=b[_e];de!==null&&Ue!==void 0&&Ue.update(de,ee,h||s)}Q&&Q(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),v=null}const ke=new kc;ke.setAnimationLoop(De),this.setAnimationLoop=function(q){Q=q},this.dispose=function(){}}}const $n=new un,Ig=new et;function Dg(a,e){function t(u,p){u.matrixAutoUpdate===!0&&u.updateMatrix(),p.value.copy(u.matrix)}function n(u,p){p.color.getRGB(u.fogColor.value,Nc(a)),p.isFog?(u.fogNear.value=p.near,u.fogFar.value=p.far):p.isFogExp2&&(u.fogDensity.value=p.density)}function i(u,p,x,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(u,p):p.isMeshToonMaterial?(r(u,p),d(u,p)):p.isMeshPhongMaterial?(r(u,p),f(u,p)):p.isMeshStandardMaterial?(r(u,p),l(u,p),p.isMeshPhysicalMaterial&&g(u,p,M)):p.isMeshMatcapMaterial?(r(u,p),v(u,p)):p.isMeshDepthMaterial?r(u,p):p.isMeshDistanceMaterial?(r(u,p),m(u,p)):p.isMeshNormalMaterial?r(u,p):p.isLineBasicMaterial?(s(u,p),p.isLineDashedMaterial&&o(u,p)):p.isPointsMaterial?c(u,p,x,b):p.isSpriteMaterial?h(u,p):p.isShadowMaterial?(u.color.value.copy(p.color),u.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(u,p){u.opacity.value=p.opacity,p.color&&u.diffuse.value.copy(p.color),p.emissive&&u.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(u.map.value=p.map,t(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.bumpMap&&(u.bumpMap.value=p.bumpMap,t(p.bumpMap,u.bumpMapTransform),u.bumpScale.value=p.bumpScale,p.side===Ot&&(u.bumpScale.value*=-1)),p.normalMap&&(u.normalMap.value=p.normalMap,t(p.normalMap,u.normalMapTransform),u.normalScale.value.copy(p.normalScale),p.side===Ot&&u.normalScale.value.negate()),p.displacementMap&&(u.displacementMap.value=p.displacementMap,t(p.displacementMap,u.displacementMapTransform),u.displacementScale.value=p.displacementScale,u.displacementBias.value=p.displacementBias),p.emissiveMap&&(u.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,u.emissiveMapTransform)),p.specularMap&&(u.specularMap.value=p.specularMap,t(p.specularMap,u.specularMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest);const x=e.get(p),b=x.envMap,M=x.envMapRotation;b&&(u.envMap.value=b,$n.copy(M),$n.x*=-1,$n.y*=-1,$n.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),u.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler($n)),u.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=p.reflectivity,u.ior.value=p.ior,u.refractionRatio.value=p.refractionRatio),p.lightMap&&(u.lightMap.value=p.lightMap,u.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,u.lightMapTransform)),p.aoMap&&(u.aoMap.value=p.aoMap,u.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,u.aoMapTransform))}function s(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,p.map&&(u.map.value=p.map,t(p.map,u.mapTransform))}function o(u,p){u.dashSize.value=p.dashSize,u.totalSize.value=p.dashSize+p.gapSize,u.scale.value=p.scale}function c(u,p,x,b){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.size.value=p.size*x,u.scale.value=b*.5,p.map&&(u.map.value=p.map,t(p.map,u.uvTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function h(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.rotation.value=p.rotation,p.map&&(u.map.value=p.map,t(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,t(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function f(u,p){u.specular.value.copy(p.specular),u.shininess.value=Math.max(p.shininess,1e-4)}function d(u,p){p.gradientMap&&(u.gradientMap.value=p.gradientMap)}function l(u,p){u.metalness.value=p.metalness,p.metalnessMap&&(u.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,u.metalnessMapTransform)),u.roughness.value=p.roughness,p.roughnessMap&&(u.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,u.roughnessMapTransform)),p.envMap&&(u.envMapIntensity.value=p.envMapIntensity)}function g(u,p,x){u.ior.value=p.ior,p.sheen>0&&(u.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),u.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(u.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,u.sheenColorMapTransform)),p.sheenRoughnessMap&&(u.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,u.sheenRoughnessMapTransform))),p.clearcoat>0&&(u.clearcoat.value=p.clearcoat,u.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(u.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,u.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(u.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&u.clearcoatNormalScale.value.negate())),p.dispersion>0&&(u.dispersion.value=p.dispersion),p.iridescence>0&&(u.iridescence.value=p.iridescence,u.iridescenceIOR.value=p.iridescenceIOR,u.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(u.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,u.iridescenceMapTransform)),p.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),p.transmission>0&&(u.transmission.value=p.transmission,u.transmissionSamplerMap.value=x.texture,u.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(u.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,u.transmissionMapTransform)),u.thickness.value=p.thickness,p.thicknessMap&&(u.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=p.attenuationDistance,u.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(u.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(u.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=p.specularIntensity,u.specularColor.value.copy(p.specularColor),p.specularColorMap&&(u.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,u.specularColorMapTransform)),p.specularIntensityMap&&(u.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,u.specularIntensityMapTransform))}function v(u,p){p.matcap&&(u.matcap.value=p.matcap)}function m(u,p){const x=e.get(p).light;u.referencePosition.value.setFromMatrixPosition(x.matrixWorld),u.nearDistance.value=x.shadow.camera.near,u.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ng(a,e,t,n){let i={},r={},s=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,b){const M=b.program;n.uniformBlockBinding(x,M)}function h(x,b){let M=i[x.id];M===void 0&&(v(x),M=f(x),i[x.id]=M,x.addEventListener("dispose",u));const C=b.program;n.updateUBOMapping(x,C);const A=e.render.frame;r[x.id]!==A&&(l(x),r[x.id]=A)}function f(x){const b=d();x.__bindingPointIndex=b;const M=a.createBuffer(),C=x.__size,A=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,M),a.bufferData(a.UNIFORM_BUFFER,C,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,b,M),M}function d(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(x){const b=i[x.id],M=x.uniforms,C=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,b);for(let A=0,T=M.length;A<T;A++){const P=Array.isArray(M[A])?M[A]:[M[A]];for(let H=0,_=P.length;H<_;H++){const y=P[H];if(g(y,A,H,C)===!0){const k=y.__offset,F=Array.isArray(y.value)?y.value:[y.value];let N=0;for(let X=0;X<F.length;X++){const O=F[X],Y=m(O);typeof O=="number"||typeof O=="boolean"?(y.__data[0]=O,a.bufferSubData(a.UNIFORM_BUFFER,k+N,y.__data)):O.isMatrix3?(y.__data[0]=O.elements[0],y.__data[1]=O.elements[1],y.__data[2]=O.elements[2],y.__data[3]=0,y.__data[4]=O.elements[3],y.__data[5]=O.elements[4],y.__data[6]=O.elements[5],y.__data[7]=0,y.__data[8]=O.elements[6],y.__data[9]=O.elements[7],y.__data[10]=O.elements[8],y.__data[11]=0):(O.toArray(y.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,k,y.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function g(x,b,M,C){const A=x.value,T=b+"_"+M;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const P=C[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(x){const b=x.uniforms;let M=0;const C=16;for(let T=0,P=b.length;T<P;T++){const H=Array.isArray(b[T])?b[T]:[b[T]];for(let _=0,y=H.length;_<y;_++){const k=H[_],F=Array.isArray(k.value)?k.value:[k.value];for(let N=0,X=F.length;N<X;N++){const O=F[N],Y=m(O),V=M%C,re=V%Y.boundary,$=V+re;M+=re,$!==0&&C-$<Y.storage&&(M+=C-$),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=Y.storage}}}const A=M%C;return A>0&&(M+=C-A),x.__size=M,x.__cache={},this}function m(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function u(x){const b=x.target;b.removeEventListener("dispose",u);const M=s.indexOf(b.__bindingPointIndex);s.splice(M,1),a.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const x in i)a.deleteBuffer(i[x]);s=[],i={},r={}}return{bind:c,update:h,dispose:p}}class Mo{constructor(e={}){const{canvas:t=yd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let l;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");l=n.getContextAttributes().alpha}else l=s;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this.toneMapping=Un,this.toneMappingExposure=1;const b=this;let M=!1,C=0,A=0,T=null,P=-1,H=null;const _=new it,y=new it;let k=null;const F=new Se(0);let N=0,X=t.width,O=t.height,Y=1,V=null,re=null;const $=new it(0,0,X,O),Q=new it(0,0,X,O);let De=!1;const ke=new yo;let q=!1,ee=!1;const _e=new et,de=new et,Ue=new R,Ae=new it,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function We(){return T===null?Y:1}let L=n;function Gt(E,D){return t.getContext(E,D)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lo}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",he,!1),L===null){const D="webgl2";if(L=Gt(D,E),L===null)throw Gt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let He,Xe,Ce,rt,Ie,w,S,B,Z,J,K,be,ae,ue,qe,te,pe,Pe,Le,me,Ge,Oe,at,I;function ce(){He=new zp(L),He.init(),Oe=new Tg(L,He),Xe=new Np(L,He,e,Oe),Ce=new Sg(L),Xe.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),rt=new Vp(L),Ie=new og,w=new Eg(L,He,Ce,Ie,Xe,Oe,rt),S=new Op(b),B=new Bp(b),Z=new Kd(L),at=new Ip(L,Z),J=new Hp(L,Z,rt,at),K=new $p(L,J,Z,rt),Le=new Wp(L,Xe,w),te=new Up(Ie),be=new rg(b,S,B,He,Xe,at,te),ae=new Dg(b,Ie),ue=new cg,qe=new mg(He),Pe=new Lp(b,S,B,Ce,K,l,c),pe=new bg(b,K,Xe),I=new Ng(L,rt,Xe,Ce),me=new Dp(L,He,rt),Ge=new Gp(L,He,rt),rt.programs=be.programs,b.capabilities=Xe,b.extensions=He,b.properties=Ie,b.renderLists=ue,b.shadowMap=pe,b.state=Ce,b.info=rt}ce();const W=new Lg(b,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(E){E!==void 0&&(Y=E,this.setSize(X,O,!1))},this.getSize=function(E){return E.set(X,O)},this.setSize=function(E,D,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,O=D,t.width=Math.floor(E*Y),t.height=Math.floor(D*Y),z===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(X*Y,O*Y).floor()},this.setDrawingBufferSize=function(E,D,z){X=E,O=D,Y=z,t.width=Math.floor(E*z),t.height=Math.floor(D*z),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,D,z,G){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,D,z,G),Ce.viewport(_.copy($).multiplyScalar(Y).round())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,D,z,G){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,D,z,G),Ce.scissor(y.copy(Q).multiplyScalar(Y).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(E){Ce.setScissorTest(De=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){re=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(E=!0,D=!0,z=!0){let G=0;if(E){let U=!1;if(T!==null){const ie=T.texture.format;U=ie===vo||ie===go||ie===mo}if(U){const ie=T.texture.type,le=ie===Mn||ie===ti||ie===hs||ie===ki||ie===uo||ie===fo,ve=Pe.getClearColor(),xe=Pe.getClearAlpha(),Te=ve.r,Re=ve.g,ye=ve.b;le?(g[0]=Te,g[1]=Re,g[2]=ye,g[3]=xe,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Te,v[1]=Re,v[2]=ye,v[3]=xe,L.clearBufferiv(L.COLOR,0,v))}else G|=L.COLOR_BUFFER_BIT}D&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ue.dispose(),qe.dispose(),Ie.dispose(),S.dispose(),B.dispose(),K.dispose(),at.dispose(),I.dispose(),be.dispose(),W.dispose(),W.removeEventListener("sessionstart",Lo),W.removeEventListener("sessionend",Io),Fn.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=rt.autoReset,D=pe.enabled,z=pe.autoUpdate,G=pe.needsUpdate,U=pe.type;ce(),rt.autoReset=E,pe.enabled=D,pe.autoUpdate=z,pe.needsUpdate=G,pe.type=U}function he(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $e(E){const D=E.target;D.removeEventListener("dispose",$e),_t(D)}function _t(E){kt(E),Ie.remove(E)}function kt(E){const D=Ie.get(E).programs;D!==void 0&&(D.forEach(function(z){be.releaseProgram(z)}),E.isShaderMaterial&&be.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,z,G,U,ie){D===null&&(D=Ve);const le=U.isMesh&&U.matrixWorld.determinant()<0,ve=th(E,D,z,G,U);Ce.setMaterial(G,le);let xe=z.index,Te=1;if(G.wireframe===!0){if(xe=J.getWireframeAttribute(z),xe===void 0)return;Te=2}const Re=z.drawRange,ye=z.attributes.position;let Qe=Re.start*Te,ot=(Re.start+Re.count)*Te;ie!==null&&(Qe=Math.max(Qe,ie.start*Te),ot=Math.min(ot,(ie.start+ie.count)*Te)),xe!==null?(Qe=Math.max(Qe,0),ot=Math.min(ot,xe.count)):ye!=null&&(Qe=Math.max(Qe,0),ot=Math.min(ot,ye.count));const ut=ot-Qe;if(ut<0||ut===1/0)return;at.setup(U,G,ve,z,xe);let Vt,Ze=me;if(xe!==null&&(Vt=Z.get(xe),Ze=Ge,Ze.setIndex(Vt)),U.isMesh)G.wireframe===!0?(Ce.setLineWidth(G.wireframeLinewidth*We()),Ze.setMode(L.LINES)):Ze.setMode(L.TRIANGLES);else if(U.isLine){let Me=G.linewidth;Me===void 0&&(Me=1),Ce.setLineWidth(Me*We()),U.isLineSegments?Ze.setMode(L.LINES):U.isLineLoop?Ze.setMode(L.LINE_LOOP):Ze.setMode(L.LINE_STRIP)}else U.isPoints?Ze.setMode(L.POINTS):U.isSprite&&Ze.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ze.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ze.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Me=U._multiDrawStarts,wt=U._multiDrawCounts,je=U._multiDrawCount,Jt=xe?Z.get(xe).bytesPerElement:1,hi=Ie.get(G).currentProgram.getUniforms();for(let Wt=0;Wt<je;Wt++)hi.setValue(L,"_gl_DrawID",Wt),Ze.render(Me[Wt]/Jt,wt[Wt])}else if(U.isInstancedMesh)Ze.renderInstances(Qe,ut,U.count);else if(z.isInstancedBufferGeometry){const Me=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,wt=Math.min(z.instanceCount,Me);Ze.renderInstances(Qe,ut,wt)}else Ze.render(Qe,ut)};function Ke(E,D,z){E.transparent===!0&&E.side===Yt&&E.forceSinglePass===!1?(E.side=Ot,E.needsUpdate=!0,xs(E,D,z),E.side=On,E.needsUpdate=!0,xs(E,D,z),E.side=Yt):xs(E,D,z)}this.compile=function(E,D,z=null){z===null&&(z=E),u=qe.get(z),u.init(D),x.push(u),z.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),E!==z&&E.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const G=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let le=0;le<ie.length;le++){const ve=ie[le];Ke(ve,z,U),G.add(ve)}else Ke(ie,z,U),G.add(ie)}),x.pop(),u=null,G},this.compileAsync=function(E,D,z=null){const G=this.compile(E,D,z);return new Promise(U=>{function ie(){if(G.forEach(function(le){Ie.get(le).currentProgram.isReady()&&G.delete(le)}),G.size===0){U(E);return}setTimeout(ie,10)}He.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ft=null;function pn(E){Ft&&Ft(E)}function Lo(){Fn.stop()}function Io(){Fn.start()}const Fn=new kc;Fn.setAnimationLoop(pn),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(E){Ft=E,W.setAnimationLoop(E),E===null?Fn.stop():Fn.start()},W.addEventListener("sessionstart",Lo),W.addEventListener("sessionend",Io),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,D,T),u=qe.get(E,x.length),u.init(D),x.push(u),de.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ke.setFromProjectionMatrix(de),ee=this.localClippingEnabled,q=te.init(this.clippingPlanes,ee),m=ue.get(E,p.length),m.init(),p.push(m),W.enabled===!0&&W.isPresenting===!0){const ie=b.xr.getDepthSensingMesh();ie!==null&&Ma(ie,D,-1/0,b.sortObjects)}Ma(E,D,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(V,re),nt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,nt&&Pe.addToRenderList(m,E),this.info.render.frame++,q===!0&&te.beginShadows();const z=u.state.shadowsArray;pe.render(z,E,D),q===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,U=m.transmissive;if(u.setupLights(),D.isArrayCamera){const ie=D.cameras;if(U.length>0)for(let le=0,ve=ie.length;le<ve;le++){const xe=ie[le];No(G,U,E,xe)}nt&&Pe.render(E);for(let le=0,ve=ie.length;le<ve;le++){const xe=ie[le];Do(m,E,xe,xe.viewport)}}else U.length>0&&No(G,U,E,D),nt&&Pe.render(E),Do(m,E,D);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(b,E,D),at.resetDefaultState(),P=-1,H=null,x.pop(),x.length>0?(u=x[x.length-1],q===!0&&te.setGlobalState(b.clippingPlanes,u.state.camera)):u=null,p.pop(),p.length>0?m=p[p.length-1]:m=null};function Ma(E,D,z,G){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ke.intersectsSprite(E)){G&&Ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(de);const le=K.update(E),ve=E.material;ve.visible&&m.push(E,le,ve,z,Ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ke.intersectsObject(E))){const le=K.update(E),ve=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ae.copy(E.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ae.copy(le.boundingSphere.center)),Ae.applyMatrix4(E.matrixWorld).applyMatrix4(de)),Array.isArray(ve)){const xe=le.groups;for(let Te=0,Re=xe.length;Te<Re;Te++){const ye=xe[Te],Qe=ve[ye.materialIndex];Qe&&Qe.visible&&m.push(E,le,Qe,z,Ae.z,ye)}}else ve.visible&&m.push(E,le,ve,z,Ae.z,null)}}const ie=E.children;for(let le=0,ve=ie.length;le<ve;le++)Ma(ie[le],D,z,G)}function Do(E,D,z,G){const U=E.opaque,ie=E.transmissive,le=E.transparent;u.setupLightsView(z),q===!0&&te.setGlobalState(b.clippingPlanes,z),G&&Ce.viewport(_.copy(G)),U.length>0&&_s(U,D,z),ie.length>0&&_s(ie,D,z),le.length>0&&_s(le,D,z),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function No(E,D,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[G.id]===void 0&&(u.state.transmissionRenderTarget[G.id]=new ni(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?gs:Mn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ie=u.state.transmissionRenderTarget[G.id],le=G.viewport||_;ie.setSize(le.z,le.w);const ve=b.getRenderTarget();b.setRenderTarget(ie),b.getClearColor(F),N=b.getClearAlpha(),N<1&&b.setClearColor(16777215,.5),b.clear(),nt&&Pe.render(z);const xe=b.toneMapping;b.toneMapping=Un;const Te=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),u.setupLightsView(G),q===!0&&te.setGlobalState(b.clippingPlanes,G),_s(E,z,G),w.updateMultisampleRenderTarget(ie),w.updateRenderTargetMipmap(ie),He.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ye=0,Qe=D.length;ye<Qe;ye++){const ot=D[ye],ut=ot.object,Vt=ot.geometry,Ze=ot.material,Me=ot.group;if(Ze.side===Yt&&ut.layers.test(G.layers)){const wt=Ze.side;Ze.side=Ot,Ze.needsUpdate=!0,Uo(ut,z,G,Vt,Ze,Me),Ze.side=wt,Ze.needsUpdate=!0,Re=!0}}Re===!0&&(w.updateMultisampleRenderTarget(ie),w.updateRenderTargetMipmap(ie))}b.setRenderTarget(ve),b.setClearColor(F,N),Te!==void 0&&(G.viewport=Te),b.toneMapping=xe}function _s(E,D,z){const G=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ie=E.length;U<ie;U++){const le=E[U],ve=le.object,xe=le.geometry,Te=G===null?le.material:G,Re=le.group;ve.layers.test(z.layers)&&Uo(ve,D,z,xe,Te,Re)}}function Uo(E,D,z,G,U,ie){E.onBeforeRender(b,D,z,G,U,ie),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(b,D,z,G,E,ie),U.transparent===!0&&U.side===Yt&&U.forceSinglePass===!1?(U.side=Ot,U.needsUpdate=!0,b.renderBufferDirect(z,D,G,U,E,ie),U.side=On,U.needsUpdate=!0,b.renderBufferDirect(z,D,G,U,E,ie),U.side=Yt):b.renderBufferDirect(z,D,G,U,E,ie),E.onAfterRender(b,D,z,G,U,ie)}function xs(E,D,z){D.isScene!==!0&&(D=Ve);const G=Ie.get(E),U=u.state.lights,ie=u.state.shadowsArray,le=U.state.version,ve=be.getParameters(E,U.state,ie,D,z),xe=be.getProgramCacheKey(ve);let Te=G.programs;G.environment=E.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(E.isMeshStandardMaterial?B:S).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Te===void 0&&(E.addEventListener("dispose",$e),Te=new Map,G.programs=Te);let Re=Te.get(xe);if(Re!==void 0){if(G.currentProgram===Re&&G.lightsStateVersion===le)return ko(E,ve),Re}else ve.uniforms=be.getUniforms(E),E.onBeforeCompile(ve,b),Re=be.acquireProgram(ve,xe),Te.set(xe,Re),G.uniforms=ve.uniforms;const ye=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=te.uniform),ko(E,ve),G.needsLights=ih(E),G.lightsStateVersion=le,G.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Re,G.uniformsList=null,Re}function Oo(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=sa.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function ko(E,D){const z=Ie.get(E);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function th(E,D,z,G,U){D.isScene!==!0&&(D=Ve),w.resetTextureUnits();const ie=D.fog,le=G.isMeshStandardMaterial?D.environment:null,ve=T===null?b.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:kn,xe=(G.isMeshStandardMaterial?B:S).get(G.envMap||le),Te=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Re=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ye=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,ot=!!z.morphAttributes.color;let ut=Un;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ut=b.toneMapping);const Vt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ze=Vt!==void 0?Vt.length:0,Me=Ie.get(G),wt=u.state.lights;if(q===!0&&(ee===!0||E!==H)){const Zt=E===H&&G.id===P;te.setState(G,E,Zt)}let je=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==wt.state.version||Me.outputColorSpace!==ve||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==xe||G.fog===!0&&Me.fog!==ie||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==te.numPlanes||Me.numIntersection!==te.numIntersection)||Me.vertexAlphas!==Te||Me.vertexTangents!==Re||Me.morphTargets!==ye||Me.morphNormals!==Qe||Me.morphColors!==ot||Me.toneMapping!==ut||Me.morphTargetsCount!==Ze)&&(je=!0):(je=!0,Me.__version=G.version);let Jt=Me.currentProgram;je===!0&&(Jt=xs(G,D,U));let hi=!1,Wt=!1,Ea=!1;const ft=Jt.getUniforms(),Tn=Me.uniforms;if(Ce.useProgram(Jt.program)&&(hi=!0,Wt=!0,Ea=!0),G.id!==P&&(P=G.id,Wt=!0),hi||H!==E){Xe.reverseDepthBuffer?(_e.copy(E.projectionMatrix),Md(_e),Ed(_e),ft.setValue(L,"projectionMatrix",_e)):ft.setValue(L,"projectionMatrix",E.projectionMatrix),ft.setValue(L,"viewMatrix",E.matrixWorldInverse);const Zt=ft.map.cameraPosition;Zt!==void 0&&Zt.setValue(L,Ue.setFromMatrixPosition(E.matrixWorld)),Xe.logarithmicDepthBuffer&&ft.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ft.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,Wt=!0,Ea=!0)}if(U.isSkinnedMesh){ft.setOptional(L,U,"bindMatrix"),ft.setOptional(L,U,"bindMatrixInverse");const Zt=U.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),ft.setValue(L,"boneTexture",Zt.boneTexture,w))}U.isBatchedMesh&&(ft.setOptional(L,U,"batchingTexture"),ft.setValue(L,"batchingTexture",U._matricesTexture,w),ft.setOptional(L,U,"batchingIdTexture"),ft.setValue(L,"batchingIdTexture",U._indirectTexture,w),ft.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&ft.setValue(L,"batchingColorTexture",U._colorsTexture,w));const Ta=z.morphAttributes;if((Ta.position!==void 0||Ta.normal!==void 0||Ta.color!==void 0)&&Le.update(U,z,Jt),(Wt||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,ft.setValue(L,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Tn.envMap.value=xe,Tn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(Tn.envMapIntensity.value=D.environmentIntensity),Wt&&(ft.setValue(L,"toneMappingExposure",b.toneMappingExposure),Me.needsLights&&nh(Tn,Ea),ie&&G.fog===!0&&ae.refreshFogUniforms(Tn,ie),ae.refreshMaterialUniforms(Tn,G,Y,O,u.state.transmissionRenderTarget[E.id]),sa.upload(L,Oo(Me),Tn,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(sa.upload(L,Oo(Me),Tn,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ft.setValue(L,"center",U.center),ft.setValue(L,"modelViewMatrix",U.modelViewMatrix),ft.setValue(L,"normalMatrix",U.normalMatrix),ft.setValue(L,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Zt=G.uniformsGroups;for(let wa=0,sh=Zt.length;wa<sh;wa++){const Fo=Zt[wa];I.update(Fo,Jt),I.bind(Fo,Jt)}}return Jt}function nh(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function ih(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,D,z){Ie.get(E.texture).__webglTexture=D,Ie.get(E.depthTexture).__webglTexture=z;const G=Ie.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const z=Ie.get(E);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,z=0){T=E,C=D,A=z;let G=!0,U=null,ie=!1,le=!1;if(E){const xe=Ie.get(E);if(xe.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(xe.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(xe.__hasExternalTextures)w.rebindTextures(E,Ie.get(E.texture).__webglTexture,Ie.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ye=E.depthTexture;if(xe.__boundDepthTexture!==ye){if(ye!==null&&Ie.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(le=!0);const Re=Ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?U=Re[D][z]:U=Re[D],ie=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?U=Ie.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[z]:U=Re,_.copy(E.viewport),y.copy(E.scissor),k=E.scissorTest}else _.copy($).multiplyScalar(Y).floor(),y.copy(Q).multiplyScalar(Y).floor(),k=De;if(Ce.bindFramebuffer(L.FRAMEBUFFER,U)&&G&&Ce.drawBuffers(E,U),Ce.viewport(_),Ce.scissor(y),Ce.setScissorTest(k),ie){const xe=Ie.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe.__webglTexture,z)}else if(le){const xe=Ie.get(E.texture),Te=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.__webglTexture,z||0,Te)}P=-1},this.readRenderTargetPixels=function(E,D,z,G,U,ie,le){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(ve=ve[le]),ve){Ce.bindFramebuffer(L.FRAMEBUFFER,ve);try{const xe=E.texture,Te=xe.format,Re=xe.type;if(!Xe.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-G&&z>=0&&z<=E.height-U&&L.readPixels(D,z,G,U,Oe.convert(Te),Oe.convert(Re),ie)}finally{const xe=T!==null?Ie.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(E,D,z,G,U,ie,le){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(ve=ve[le]),ve){const xe=E.texture,Te=xe.format,Re=xe.type;if(!Xe.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-G&&z>=0&&z<=E.height-U){Ce.bindFramebuffer(L.FRAMEBUFFER,ve);const ye=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),L.readPixels(D,z,G,U,Oe.convert(Te),Oe.convert(Re),0);const Qe=T!==null?Ie.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,Qe);const ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Sd(L,ot,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ye),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer(ye),L.deleteSync(ot),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,z=0){E.isTexture!==!0&&(ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-z),U=Math.floor(E.image.width*G),ie=Math.floor(E.image.height*G),le=D!==null?D.x:0,ve=D!==null?D.y:0;w.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,le,ve,U,ie),Ce.unbindTexture()},this.copyTextureToTexture=function(E,D,z=null,G=null,U=0){E.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],D=arguments[2],U=arguments[3]||0,z=null);let ie,le,ve,xe,Te,Re;z!==null?(ie=z.max.x-z.min.x,le=z.max.y-z.min.y,ve=z.min.x,xe=z.min.y):(ie=E.image.width,le=E.image.height,ve=0,xe=0),G!==null?(Te=G.x,Re=G.y):(Te=0,Re=0);const ye=Oe.convert(D.format),Qe=Oe.convert(D.type);w.setTexture2D(D,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const ot=L.getParameter(L.UNPACK_ROW_LENGTH),ut=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Vt=L.getParameter(L.UNPACK_SKIP_PIXELS),Ze=L.getParameter(L.UNPACK_SKIP_ROWS),Me=L.getParameter(L.UNPACK_SKIP_IMAGES),wt=E.isCompressedTexture?E.mipmaps[U]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,xe),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Te,Re,ie,le,ye,Qe,wt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Te,Re,wt.width,wt.height,ye,wt.data):L.texSubImage2D(L.TEXTURE_2D,U,Te,Re,ie,le,ye,Qe,wt),L.pixelStorei(L.UNPACK_ROW_LENGTH,ot),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Me),U===0&&D.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(E,D,z=null,G=null,U=0){E.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,E=arguments[2],D=arguments[3],U=arguments[4]||0);let ie,le,ve,xe,Te,Re,ye,Qe,ot;const ut=E.isCompressedTexture?E.mipmaps[U]:E.image;z!==null?(ie=z.max.x-z.min.x,le=z.max.y-z.min.y,ve=z.max.z-z.min.z,xe=z.min.x,Te=z.min.y,Re=z.min.z):(ie=ut.width,le=ut.height,ve=ut.depth,xe=0,Te=0,Re=0),G!==null?(ye=G.x,Qe=G.y,ot=G.z):(ye=0,Qe=0,ot=0);const Vt=Oe.convert(D.format),Ze=Oe.convert(D.type);let Me;if(D.isData3DTexture)w.setTexture3D(D,0),Me=L.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)w.setTexture2DArray(D,0),Me=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const wt=L.getParameter(L.UNPACK_ROW_LENGTH),je=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Jt=L.getParameter(L.UNPACK_SKIP_PIXELS),hi=L.getParameter(L.UNPACK_SKIP_ROWS),Wt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Te),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Me,U,ye,Qe,ot,ie,le,ve,Vt,Ze,ut.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,U,ye,Qe,ot,ie,le,ve,Vt,ut.data):L.texSubImage3D(Me,U,ye,Qe,ot,ie,le,ve,Vt,Ze,ut),L.pixelStorei(L.UNPACK_ROW_LENGTH,wt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,je),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Jt),L.pixelStorei(L.UNPACK_SKIP_ROWS,hi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Wt),U===0&&D.generateMipmaps&&L.generateMipmap(Me),Ce.unbindTexture()},this.initRenderTarget=function(E){Ie.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),Ce.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Ce.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===_o?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===ga?"display-p3":"srgb"}}class _a{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new _a(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Eo extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ug extends Lt{constructor(e=null,t=1,n=1,i,r,s,o,c,h=Ht,f=Ht,d,l){super(null,s,o,c,h,f,i,r,d,l),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hl extends Rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ti=new et,Gl=new et,Hs=[],Vl=new oi,Og=new et,Zi=new Ne,ji=new li;class or extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Og)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),Vl.copy(e.boundingBox).applyMatrix4(Ti),this.boundingBox.union(Vl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),ji.copy(e.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(ji)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,s=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[s+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),e.ray.intersectsSphere(ji)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ti),Gl.multiplyMatrices(n,Ti),Zi.matrixWorld=Gl,Zi.raycast(e,Hs);for(let s=0,o=Hs.length;s<o;s++){const c=Hs[s];c.instanceId=r,c.object=this,t.push(c)}Hs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ug(new Float32Array(i*this.count),i,this.count,po,dn));const r=this.morphTexture.source.data.data;let s=0;for(let h=0;h<n.length;h++)s+=n[h];const o=this.geometry.morphTargetsRelative?1:1-s,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ha extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const da=new R,ua=new R,Wl=new et,Ji=new bo,Gs=new li,lr=new R,$l=new R;class io extends vt{constructor(e=new st,t=new ha){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)da.fromBufferAttribute(t,i-1),ua.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=da.distanceTo(ua);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(i),Gs.radius+=r,e.ray.intersectsSphere(Gs)===!1)return;Wl.copy(i).invert(),Ji.copy(e.ray).applyMatrix4(Wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,f=n.index,l=n.attributes.position;if(f!==null){const g=Math.max(0,s.start),v=Math.min(f.count,s.start+s.count);for(let m=g,u=v-1;m<u;m+=h){const p=f.getX(m),x=f.getX(m+1),b=Vs(this,e,Ji,c,p,x);b&&t.push(b)}if(this.isLineLoop){const m=f.getX(v-1),u=f.getX(g),p=Vs(this,e,Ji,c,m,u);p&&t.push(p)}}else{const g=Math.max(0,s.start),v=Math.min(l.count,s.start+s.count);for(let m=g,u=v-1;m<u;m+=h){const p=Vs(this,e,Ji,c,m,m+1);p&&t.push(p)}if(this.isLineLoop){const m=Vs(this,e,Ji,c,v-1,g);m&&t.push(m)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vs(a,e,t,n,i,r){const s=a.geometry.attributes.position;if(da.fromBufferAttribute(s,i),ua.fromBufferAttribute(s,r),t.distanceSqToSegment(da,ua,lr,$l)>n)return;lr.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(lr);if(!(c<e.near||c>e.far))return{distance:c,point:$l.clone().applyMatrix4(a.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:a}}class ii extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xl=new et,so=new bo,Ws=new li,$s=new R;class zi extends vt{constructor(e=new st,t=new ii){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=r,e.ray.intersectsSphere(Ws)===!1)return;Xl.copy(i).invert(),so.copy(e.ray).applyMatrix4(Xl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,d=n.attributes.position;if(h!==null){const l=Math.max(0,s.start),g=Math.min(h.count,s.start+s.count);for(let v=l,m=g;v<m;v++){const u=h.getX(v);$s.fromBufferAttribute(d,u),ql($s,u,c,i,e,t,this)}}else{const l=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let v=l,m=g;v<m;v++)$s.fromBufferAttribute(d,v),ql($s,v,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ql(a,e,t,n,i,r,s){const o=so.distanceSqToPoint(a);if(o<t){const c=new R;so.closestPointToPoint(a,c),c.applyMatrix4(n);const h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class si extends Lt{constructor(e,t,n,i,r,s,o,c,h){super(e,t,n,i,r,s,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),h=n[i]-s,h<0)o=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===s)return i/(r-1);const f=n[i],l=n[i+1]-f,g=(s-f)/l;return(i+g)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),o=this.getPoint(r),c=t||(s.isVector2?new fe:new R);return c.copy(o).sub(s).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,i=[],r=[],s=[],o=new R,c=new et;for(let g=0;g<=e;g++){const v=g/e;i[g]=this.getTangentAt(v,new R)}r[0]=new R,s[0]=new R;let h=Number.MAX_VALUE;const f=Math.abs(i[0].x),d=Math.abs(i[0].y),l=Math.abs(i[0].z);f<=h&&(h=f,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),l<=h&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),s[g]=s[g-1].clone(),o.crossVectors(i[g-1],i[g]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(At(i[g-1].dot(i[g]),-1,1));r[g].applyMatrix4(c.makeRotationAxis(o,v))}s[g].crossVectors(i[g],r[g])}if(t===!0){let g=Math.acos(At(r[0].dot(r[e]),-1,1));g/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(g=-g);for(let v=1;v<=e;v++)r[v].applyMatrix4(c.makeRotationAxis(i[v],g*v)),s[v].crossVectors(i[v],r[v])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class To extends fn{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new fe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),l=c-this.aX,g=h-this.aY;c=l*f-g*d+this.aX,h=l*d+g*f+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class kg extends To{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}}function wo(){let a=0,e=0,t=0,n=0;function i(r,s,o,c){a=r,e=o,t=-3*r+3*s-2*o-c,n=2*r-2*s+o+c}return{initCatmullRom:function(r,s,o,c,h){i(s,o,h*(o-r),h*(c-s))},initNonuniformCatmullRom:function(r,s,o,c,h,f,d){let l=(s-r)/h-(o-r)/(h+f)+(o-s)/f,g=(o-s)/f-(c-s)/(f+d)+(c-o)/d;l*=f,g*=f,i(s,o,l,g)},calc:function(r){const s=r*r,o=s*r;return a+e*r+t*s+n*o}}}const Xs=new R,cr=new wo,hr=new wo,dr=new wo;class Wc extends fn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let o=Math.floor(s),c=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,f;this.closed||o>0?h=i[(o-1)%r]:(Xs.subVectors(i[0],i[1]).add(i[0]),h=Xs);const d=i[o%r],l=i[(o+1)%r];if(this.closed||o+2<r?f=i[(o+2)%r]:(Xs.subVectors(i[r-1],i[r-2]).add(i[r-1]),f=Xs),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let v=Math.pow(h.distanceToSquared(d),g),m=Math.pow(d.distanceToSquared(l),g),u=Math.pow(l.distanceToSquared(f),g);m<1e-4&&(m=1),v<1e-4&&(v=m),u<1e-4&&(u=m),cr.initNonuniformCatmullRom(h.x,d.x,l.x,f.x,v,m,u),hr.initNonuniformCatmullRom(h.y,d.y,l.y,f.y,v,m,u),dr.initNonuniformCatmullRom(h.z,d.z,l.z,f.z,v,m,u)}else this.curveType==="catmullrom"&&(cr.initCatmullRom(h.x,d.x,l.x,f.x,this.tension),hr.initCatmullRom(h.y,d.y,l.y,f.y,this.tension),dr.initCatmullRom(h.z,d.z,l.z,f.z,this.tension));return n.set(cr.calc(c),hr.calc(c),dr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yl(a,e,t,n,i){const r=(n-e)*.5,s=(i-t)*.5,o=a*a,c=a*o;return(2*t-2*n+r+s)*c+(-3*t+3*n-2*r-s)*o+r*a+t}function Fg(a,e){const t=1-a;return t*t*e}function Bg(a,e){return 2*(1-a)*a*e}function zg(a,e){return a*a*e}function rs(a,e,t,n){return Fg(a,e)+Bg(a,t)+zg(a,n)}function Hg(a,e){const t=1-a;return t*t*t*e}function Gg(a,e){const t=1-a;return 3*t*t*a*e}function Vg(a,e){return 3*(1-a)*a*a*e}function Wg(a,e){return a*a*a*e}function os(a,e,t,n,i){return Hg(a,e)+Gg(a,t)+Vg(a,n)+Wg(a,i)}class $c extends fn{constructor(e=new fe,t=new fe,n=new fe,i=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new fe){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(os(e,i.x,r.x,s.x,o.x),os(e,i.y,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $g extends fn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(os(e,i.x,r.x,s.x,o.x),os(e,i.y,r.y,s.y,o.y),os(e,i.z,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xc extends fn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xg extends fn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qc extends fn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(rs(e,i.x,r.x,s.x),rs(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qg extends fn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(rs(e,i.x,r.x,s.x),rs(e,i.y,r.y,s.y),rs(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yc extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),o=r-s,c=i[s===0?s:s-1],h=i[s],f=i[s>i.length-2?i.length-1:s+1],d=i[s>i.length-3?i.length-1:s+2];return n.set(Yl(o,c.x,h.x,f.x,d.x),Yl(o,c.y,h.y,f.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new fe().fromArray(i))}return this}}var Kl=Object.freeze({__proto__:null,ArcCurve:kg,CatmullRomCurve3:Wc,CubicBezierCurve:$c,CubicBezierCurve3:$g,EllipseCurve:To,LineCurve:Xc,LineCurve3:Xg,QuadraticBezierCurve:qc,QuadraticBezierCurve3:qg,SplineCurve:Yc});class Yg extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const s=i[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-s/c;return o.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,c=s.getPoints(o);for(let h=0;h<c.length;h++){const f=c[h];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Kl[i.type]().fromJSON(i))}return this}}class Zl extends Yg{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Xc(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new qc(this.currentPoint.clone(),new fe(e,t),new fe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,s){const o=new $c(this.currentPoint.clone(),new fe(e,t),new fe(n,i),new fe(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Yc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,s){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,s),this}absarc(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this}ellipse(e,t,n,i,r,s,o,c){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+h,t+f,n,i,r,s,o,c),this}absellipse(e,t,n,i,r,s,o,c){const h=new To(e,t,n,i,r,s,o,c);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Hi extends st{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],s=[],o=[],c=[],h=new R,f=new fe;s.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,l=3;d<=t;d++,l+=3){const g=n+d/t*i;h.x=e*Math.cos(g),h.y=e*Math.sin(g),s.push(h.x,h.y,h.z),o.push(0,0,1),f.x=(s[l]/e+1)/2,f.y=(s[l+1]/e+1)/2,c.push(f.x,f.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bt extends st{constructor(e=1,t=1,n=1,i=32,r=1,s=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:c};const h=this;i=Math.floor(i),r=Math.floor(r);const f=[],d=[],l=[],g=[];let v=0;const m=[],u=n/2;let p=0;x(),s===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(f),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(g,2));function x(){const M=new R,C=new R;let A=0;const T=(t-e)/n;for(let P=0;P<=r;P++){const H=[],_=P/r,y=_*(t-e)+e;for(let k=0;k<=i;k++){const F=k/i,N=F*c+o,X=Math.sin(N),O=Math.cos(N);C.x=y*X,C.y=-_*n+u,C.z=y*O,d.push(C.x,C.y,C.z),M.set(X,T,O).normalize(),l.push(M.x,M.y,M.z),g.push(F,1-_),H.push(v++)}m.push(H)}for(let P=0;P<i;P++)for(let H=0;H<r;H++){const _=m[H][P],y=m[H+1][P],k=m[H+1][P+1],F=m[H][P+1];e>0&&(f.push(_,y,F),A+=3),t>0&&(f.push(y,k,F),A+=3)}h.addGroup(p,A,0),p+=A}function b(M){const C=v,A=new fe,T=new R;let P=0;const H=M===!0?e:t,_=M===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,u*_,0),l.push(0,_,0),g.push(.5,.5),v++;const y=v;for(let k=0;k<=i;k++){const N=k/i*c+o,X=Math.cos(N),O=Math.sin(N);T.x=H*O,T.y=u*_,T.z=H*X,d.push(T.x,T.y,T.z),l.push(0,_,0),A.x=X*.5+.5,A.y=O*.5*_+.5,g.push(A.x,A.y),v++}for(let k=0;k<i;k++){const F=C+k,N=y+k;M===!0?f.push(N,N+1,F):f.push(N+1,N,F),P+=3}h.addGroup(p,P,M===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zt extends Bt{constructor(e=1,t=1,n=32,i=1,r=!1,s=0,o=Math.PI*2){super(0,e,t,n,i,r,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:s,thetaLength:o}}static fromJSON(e){return new zt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xa extends st{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],s=[];o(i),h(n),f(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const b=new R,M=new R,C=new R;for(let A=0;A<t.length;A+=3)g(t[A+0],b),g(t[A+1],M),g(t[A+2],C),c(b,M,C,x)}function c(x,b,M,C){const A=C+1,T=[];for(let P=0;P<=A;P++){T[P]=[];const H=x.clone().lerp(M,P/A),_=b.clone().lerp(M,P/A),y=A-P;for(let k=0;k<=y;k++)k===0&&P===A?T[P][k]=H:T[P][k]=H.clone().lerp(_,k/y)}for(let P=0;P<A;P++)for(let H=0;H<2*(A-P)-1;H++){const _=Math.floor(H/2);H%2===0?(l(T[P][_+1]),l(T[P+1][_]),l(T[P][_])):(l(T[P][_+1]),l(T[P+1][_+1]),l(T[P+1][_]))}}function h(x){const b=new R;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(x),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function f(){const x=new R;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];const M=u(x)/2/Math.PI+.5,C=p(x)/Math.PI+.5;s.push(M,1-C)}v(),d()}function d(){for(let x=0;x<s.length;x+=6){const b=s[x+0],M=s[x+2],C=s[x+4],A=Math.max(b,M,C),T=Math.min(b,M,C);A>.9&&T<.1&&(b<.2&&(s[x+0]+=1),M<.2&&(s[x+2]+=1),C<.2&&(s[x+4]+=1))}}function l(x){r.push(x.x,x.y,x.z)}function g(x,b){const M=x*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function v(){const x=new R,b=new R,M=new R,C=new R,A=new fe,T=new fe,P=new fe;for(let H=0,_=0;H<r.length;H+=9,_+=6){x.set(r[H+0],r[H+1],r[H+2]),b.set(r[H+3],r[H+4],r[H+5]),M.set(r[H+6],r[H+7],r[H+8]),A.set(s[_+0],s[_+1]),T.set(s[_+2],s[_+3]),P.set(s[_+4],s[_+5]),C.copy(x).add(b).add(M).divideScalar(3);const y=u(C);m(A,_+0,x,y),m(T,_+2,b,y),m(P,_+4,M,y)}}function m(x,b,M,C){C<0&&x.x===1&&(s[b]=x.x-1),M.x===0&&M.z===0&&(s[b]=C/2/Math.PI+.5)}function u(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.vertices,e.indices,e.radius,e.details)}}class us extends xa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new us(e.radius,e.detail)}}class Kc extends Zl{constructor(e){super(e),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Zl().fromJSON(i))}return this}}const Kg={triangulate:function(a,e,t=2){const n=e&&e.length,i=n?e[0]*t:a.length;let r=Zc(a,0,i,t,!0);const s=[];if(!r||r.next===r.prev)return s;let o,c,h,f,d,l,g;if(n&&(r=e0(a,e,r,t)),a.length>80*t){o=h=a[0],c=f=a[1];for(let v=t;v<i;v+=t)d=a[v],l=a[v+1],d<o&&(o=d),l<c&&(c=l),d>h&&(h=d),l>f&&(f=l);g=Math.max(h-o,f-c),g=g!==0?32767/g:0}return fs(r,s,t,o,c,g,0),s}};function Zc(a,e,t,n,i){let r,s;if(i===d0(a,e,t,n)>0)for(r=e;r<t;r+=n)s=jl(r,a[r],a[r+1],s);else for(r=t-n;r>=e;r-=n)s=jl(r,a[r],a[r+1],s);return s&&ba(s,s.next)&&(ms(s),s=s.next),s}function ai(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&(ba(t,t.next)||dt(t.prev,t,t.next)===0)){if(ms(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fs(a,e,t,n,i,r,s){if(!a)return;!s&&r&&a0(a,n,i,r);let o=a,c,h;for(;a.prev!==a.next;){if(c=a.prev,h=a.next,r?jg(a,n,i,r):Zg(a)){e.push(c.i/t|0),e.push(a.i/t|0),e.push(h.i/t|0),ms(a),a=h.next,o=h.next;continue}if(a=h,a===o){s?s===1?(a=Jg(ai(a),e,t),fs(a,e,t,n,i,r,2)):s===2&&Qg(a,e,t,n,i,r):fs(ai(a),e,t,n,i,r,1);break}}}function Zg(a){const e=a.prev,t=a,n=a.next;if(dt(e,t,n)>=0)return!1;const i=e.x,r=t.x,s=n.x,o=e.y,c=t.y,h=n.y,f=i<r?i<s?i:s:r<s?r:s,d=o<c?o<h?o:h:c<h?c:h,l=i>r?i>s?i:s:r>s?r:s,g=o>c?o>h?o:h:c>h?c:h;let v=n.next;for(;v!==e;){if(v.x>=f&&v.x<=l&&v.y>=d&&v.y<=g&&Ci(i,o,r,c,s,h,v.x,v.y)&&dt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function jg(a,e,t,n){const i=a.prev,r=a,s=a.next;if(dt(i,r,s)>=0)return!1;const o=i.x,c=r.x,h=s.x,f=i.y,d=r.y,l=s.y,g=o<c?o<h?o:h:c<h?c:h,v=f<d?f<l?f:l:d<l?d:l,m=o>c?o>h?o:h:c>h?c:h,u=f>d?f>l?f:l:d>l?d:l,p=ao(g,v,e,t,n),x=ao(m,u,e,t,n);let b=a.prevZ,M=a.nextZ;for(;b&&b.z>=p&&M&&M.z<=x;){if(b.x>=g&&b.x<=m&&b.y>=v&&b.y<=u&&b!==i&&b!==s&&Ci(o,f,c,d,h,l,b.x,b.y)&&dt(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=g&&M.x<=m&&M.y>=v&&M.y<=u&&M!==i&&M!==s&&Ci(o,f,c,d,h,l,M.x,M.y)&&dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=g&&b.x<=m&&b.y>=v&&b.y<=u&&b!==i&&b!==s&&Ci(o,f,c,d,h,l,b.x,b.y)&&dt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=x;){if(M.x>=g&&M.x<=m&&M.y>=v&&M.y<=u&&M!==i&&M!==s&&Ci(o,f,c,d,h,l,M.x,M.y)&&dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Jg(a,e,t){let n=a;do{const i=n.prev,r=n.next.next;!ba(i,r)&&jc(i,n,n.next,r)&&ps(i,r)&&ps(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ms(n),ms(n.next),n=a=r),n=n.next}while(n!==a);return ai(n)}function Qg(a,e,t,n,i,r){let s=a;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&l0(s,o)){let c=Jc(s,o);s=ai(s,s.next),c=ai(c,c.next),fs(s,e,t,n,i,r,0),fs(c,e,t,n,i,r,0);return}o=o.next}s=s.next}while(s!==a)}function e0(a,e,t,n){const i=[];let r,s,o,c,h;for(r=0,s=e.length;r<s;r++)o=e[r]*n,c=r<s-1?e[r+1]*n:a.length,h=Zc(a,o,c,n,!1),h===h.next&&(h.steiner=!0),i.push(o0(h));for(i.sort(t0),r=0;r<i.length;r++)t=n0(i[r],t);return t}function t0(a,e){return a.x-e.x}function n0(a,e){const t=i0(a,e);if(!t)return e;const n=Jc(t,a);return ai(n,n.next),ai(t,t.next)}function i0(a,e){let t=e,n=-1/0,i;const r=a.x,s=a.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const l=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(l<=r&&l>n&&(n=l,i=t.x<t.next.x?t:t.next,l===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,h=i.y;let f=1/0,d;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Ci(s<h?r:n,s,c,h,s<h?n:r,s,t.x,t.y)&&(d=Math.abs(s-t.y)/(r-t.x),ps(t,a)&&(d<f||d===f&&(t.x>i.x||t.x===i.x&&s0(i,t)))&&(i=t,f=d)),t=t.next;while(t!==o);return i}function s0(a,e){return dt(a.prev,a,e.prev)<0&&dt(e.next,a,a.next)<0}function a0(a,e,t,n){let i=a;do i.z===0&&(i.z=ao(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,r0(i)}function r0(a){let e,t,n,i,r,s,o,c,h=1;do{for(t=a,a=null,r=null,s=0;t;){for(s++,n=t,o=0,e=0;e<h&&(o++,n=n.nextZ,!!n);e++);for(c=h;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:a=i,i.prevZ=r,r=i;t=n}r.nextZ=null,h*=2}while(s>1);return a}function ao(a,e,t,n,i){return a=(a-t)*i|0,e=(e-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function o0(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function Ci(a,e,t,n,i,r,s,o){return(i-s)*(e-o)>=(a-s)*(r-o)&&(a-s)*(n-o)>=(t-s)*(e-o)&&(t-s)*(r-o)>=(i-s)*(n-o)}function l0(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!c0(a,e)&&(ps(a,e)&&ps(e,a)&&h0(a,e)&&(dt(a.prev,a,e.prev)||dt(a,e.prev,e))||ba(a,e)&&dt(a.prev,a,a.next)>0&&dt(e.prev,e,e.next)>0)}function dt(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function ba(a,e){return a.x===e.x&&a.y===e.y}function jc(a,e,t,n){const i=Ys(dt(a,e,t)),r=Ys(dt(a,e,n)),s=Ys(dt(t,n,a)),o=Ys(dt(t,n,e));return!!(i!==r&&s!==o||i===0&&qs(a,t,e)||r===0&&qs(a,n,e)||s===0&&qs(t,a,n)||o===0&&qs(t,e,n))}function qs(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function Ys(a){return a>0?1:a<0?-1:0}function c0(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&jc(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function ps(a,e){return dt(a.prev,a,a.next)<0?dt(a,e,a.next)>=0&&dt(a,a.prev,e)>=0:dt(a,e,a.prev)<0||dt(a,a.next,e)<0}function h0(a,e){let t=a,n=!1;const i=(a.x+e.x)/2,r=(a.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function Jc(a,e){const t=new ro(a.i,a.x,a.y),n=new ro(e.i,e.x,e.y),i=a.next,r=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function jl(a,e,t,n){const i=new ro(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ms(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function ro(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function d0(a,e,t,n){let i=0;for(let r=e,s=t-n;r<t;r+=n)i+=(a[s]-a[r])*(a[r+1]+a[s+1]),s=r;return i}class ls{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ls.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Jl(e),Ql(n,e);let s=e.length;t.forEach(Jl);for(let c=0;c<t.length;c++)i.push(s),s+=t[c].length,Ql(n,t[c]);const o=Kg.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Jl(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function Ql(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class Ao extends xa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ao(e.radius,e.detail)}}class ya extends st{constructor(e=.5,t=1,n=32,i=1,r=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:s},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],h=[],f=[];let d=e;const l=(t-e)/i,g=new R,v=new fe;for(let m=0;m<=i;m++){for(let u=0;u<=n;u++){const p=r+u/n*s;g.x=d*Math.cos(p),g.y=d*Math.sin(p),c.push(g.x,g.y,g.z),h.push(0,0,1),v.x=(g.x/t+1)/2,v.y=(g.y/t+1)/2,f.push(v.x,v.y)}d+=l}for(let m=0;m<i;m++){const u=m*(n+1);for(let p=0;p<n;p++){const x=p+u,b=x,M=x+n+1,C=x+n+2,A=x+1;o.push(b,M,A),o.push(M,C,A)}}this.setIndex(o),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ro extends st{constructor(e=new Kc([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],s=[];let o=0,c=0;if(Array.isArray(e)===!1)h(e);else for(let f=0;f<e.length;f++)h(e[f]),this.addGroup(o,c,f),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new tt(i,3)),this.setAttribute("normal",new tt(r,3)),this.setAttribute("uv",new tt(s,2));function h(f){const d=i.length/3,l=f.extractPoints(t);let g=l.shape;const v=l.holes;ls.isClockWise(g)===!1&&(g=g.reverse());for(let u=0,p=v.length;u<p;u++){const x=v[u];ls.isClockWise(x)===!0&&(v[u]=x.reverse())}const m=ls.triangulateShape(g,v);for(let u=0,p=v.length;u<p;u++){const x=v[u];g=g.concat(x)}for(let u=0,p=g.length;u<p;u++){const x=g[u];i.push(x.x,x.y,0),r.push(0,0,1),s.push(x.x,x.y)}for(let u=0,p=m.length;u<p;u++){const x=m[u],b=x[0]+d,M=x[1]+d,C=x[2]+d;n.push(b,M,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return u0(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const s=t[e.shapes[i]];n.push(s)}return new Ro(n,e.curveSegments)}}function u0(a,e){if(e.shapes=[],Array.isArray(a))for(let t=0,n=a.length;t<n;t++){const i=a[t];e.shapes.push(i.uuid)}else e.shapes.push(a.uuid);return e}class jn extends st{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let h=0;const f=[],d=new R,l=new R,g=[],v=[],m=[],u=[];for(let p=0;p<=n;p++){const x=[],b=p/n;let M=0;p===0&&s===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){const A=C/t;d.x=-e*Math.cos(i+A*r)*Math.sin(s+b*o),d.y=e*Math.cos(s+b*o),d.z=e*Math.sin(i+A*r)*Math.sin(s+b*o),v.push(d.x,d.y,d.z),l.copy(d).normalize(),m.push(l.x,l.y,l.z),u.push(A+M,1-b),x.push(h++)}f.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const b=f[p][x+1],M=f[p][x],C=f[p+1][x],A=f[p+1][x+1];(p!==0||s>0)&&g.push(b,M,A),(p!==n-1||c<Math.PI)&&g.push(M,C,A)}this.setIndex(g),this.setAttribute("position",new tt(v,3)),this.setAttribute("normal",new tt(m,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ye extends ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sa extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Co extends Sa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ur=new et,ec=new R,tc=new R;class Qc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ec.setFromMatrixPosition(e.matrixWorld),t.position.copy(ec),tc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tc),t.updateMatrixWorld(),ur.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ur)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const nc=new et,Qi=new R,fr=new R;class f0 extends Qc{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qi),fr.copy(n.position),fr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fr),n.updateMatrixWorld(),i.makeTranslation(-Qi.x,-Qi.y,-Qi.z),nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc)}}class ei extends Sa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new f0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class p0 extends Qc{constructor(){super(new Fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fa extends Sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new p0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class m0 extends Sa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Po{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ic(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ic();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ic(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);const pr=new Map;function g0(a,e,t){const n=`b${a}_${e}_${t}`;return pr.has(n)||pr.set(n,new gt(a,e,t)),pr.get(n)}function Xn(a,e={}){return new Ye({color:a,...e})}function we(a,e,t,n,i,r,s,o){const c=new Ne(g0(e,t,n),o);return c.position.set(i,r,s),a.add(c),c}function es(a,e,t,n,i,r){const s=new ln,o=new Bt(t,t,n,12),c=new Ne(o,i);c.rotation.z=Math.PI/2,c.castShadow=!1,s.add(c);const h=new Bt(t*.56,t*.56,n+.02,8),f=new Ne(h,r);f.rotation.z=Math.PI/2,s.add(f);for(let d=0;d<5;d++){const l=we(s,.02,t*.86,.09,0,0,0,r);l.rotation.x=d/5*Math.PI}return s.position.set(a,t,e),s}function pa(a,e={}){const t=a||{},n=new Se(t.color||"#7b3b2a"),i=new Se(t.accent||"#d9a441"),r=Xn(n),s=Xn("#141416"),o=Xn("#10151c",{transparent:!0,opacity:.9}),c=Xn(i,{emissive:i.clone().multiplyScalar(.5)}),h=new ht({color:"#fff4cf"}),f=new ht({color:"#ff2b1d"}),d=Xn("#8a8478"),l=new ln,g=t.shape||"muscle",v=[];if(g==="truck"){we(l,2.3,.55,4.7,0,.78,0,r),we(l,2.35,.5,2.5,0,1.16,-.9,r),we(l,2,.62,1.25,0,1.22,1.55,r),we(l,1.85,.5,1.35,0,1.7,-.9,o),we(l,2.36,.16,4.75,0,.52,0,s),we(l,2.5,.18,.4,0,.86,2.3,s),we(l,.22,.55,.22,-.9,.85,2.35,s),we(l,.22,.55,.22,.9,.85,2.35,s),we(l,.35,.55,2.4,0,1.5,-.9,c);for(const p of[-.98,.98])for(const x of[-1.6,1.65])v.push(es(p,x,.56,.42,s,d));we(l,.16,.85,.16,-.85,1.65,-.2,d),we(l,.16,.85,.16,.85,1.65,-.2,d)}else if(g==="buggy"){we(l,2.1,.42,3.7,0,.78,0,r),we(l,1.5,.45,1.5,0,1.16,-.55,r),we(l,1.7,.52,.9,0,1.13,.9,r),we(l,1.3,.4,1.15,0,1.53,-.55,o);const p=Xn("#35383a");we(l,2,.1,.1,0,1.62,-.4,p),we(l,.1,.7,.1,-.95,1.3,-.4,p),we(l,.1,.7,.1,.95,1.3,-.4,p),we(l,.1,.7,.1,-.95,1.3,.5,p),we(l,.1,.7,.1,.95,1.3,.5,p),we(l,2.1,.14,.18,0,1.1,1.9,c);for(const x of[-1.08,1.08])for(const b of[-1.42,1.42])v.push(es(x,b,.62,.5,s,c))}else if(g==="sedan"){we(l,2.08,.52,4.35,0,.73,0,r),we(l,1.86,.55,2.1,0,1.15,-.15,r),we(l,1.7,.38,1.85,0,1.5,-.15,o),we(l,2.02,.12,4.4,0,.55,0,s),we(l,1.5,.12,.8,0,1.22,-2.1,c);for(const p of[-1.02,1.02])for(const x of[-1.42,1.42])v.push(es(p,x,.48,.34,s,d))}else if(g==="exotic"){we(l,2.2,.36,4.5,0,.62,0,r),we(l,1.55,.48,1.65,0,1.02,-.45,r),we(l,1.35,.32,1.35,0,1.32,-.45,o),we(l,1.7,.2,1.2,0,.83,1.5,r),we(l,2.24,.09,1.45,0,.84,-1.95,c),we(l,.12,.42,.3,-.92,.76,-1.95,c),we(l,.12,.42,.3,.92,.76,-1.95,c),we(l,1.9,.08,.55,0,.38,2.35,s);for(const p of[-1.06,1.06])for(const x of[-1.5,1.46])v.push(es(p,x,.5,.38,s,c))}else{we(l,2.16,.5,4.4,0,.72,0,r),we(l,1.78,.52,2,0,1.13,-.35,r),we(l,1.6,.38,1.7,0,1.45,-.35,o),we(l,1.7,.18,1.35,0,.86,1.55,r),we(l,2,.4,.14,0,.5,2.28,s),we(l,1.75,.06,.6,0,.52,-2.15,c),we(l,.18,.08,1.1,-.72,1,1.25,c),we(l,.18,.08,1.1,.72,1,1.25,c);for(const p of[-1.02,1.02])for(const x of[-1.45,1.48])v.push(es(p,x,.49,.36,s,d))}const m=g==="truck"?1.28:g==="buggy"?1.05:.8,u=g==="truck"?2.38:g==="buggy"?1.92:2.27;for(const p of[-.68,.68])we(l,.34,.16,.08,p,m,u,h),g!=="exotic"&&we(l,.36,.16,.08,p,m,-2.27,f);if(g==="exotic"){we(l,1.8,.1,.05,0,.78,2.26,new ht({color:"#bfeaff"})),we(l,1.7,.08,.05,0,.78,-2.28,f);const p=new Ne(new Kt(2.5,4.8),new ht({color:i,transparent:!0,opacity:.22,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.13,l.add(p)}if(t.spikes||t.shape==="truck"||t.id==="wool_reaper"||t.id==="beast_titan"){const p=Xn("#b9b0a0");for(let x=0;x<5;x++){const b=new Ne(new zt(.11,.42,5),p);b.position.set(-.8+x*.4,1.22,2.2),b.rotation.x=Math.PI/2,l.add(b)}}if(e.boss){const p=new Ne(new zt(.16,.7,4),c);p.position.set(0,1.65,-.35),l.add(p)}if(e.beams)for(const p of[-.55,.55]){const x=new Ne(new zt(1.4,9,12,1,!0),new ht({color:"#ffe7a8",transparent:!0,opacity:.045,depthWrite:!1,side:Yt}));x.rotation.x=Math.PI/2,x.position.set(p,.8,6.9),l.add(x)}return l.userData.wheels=v,l.userData.bodyMat=r,l.userData.accentMat=c,l.userData.tailMat=f,l.traverse(p=>{p.isMesh&&(p.frustumCulled=!0)}),l}function sc(a,e,t){var r;const n=(r=a==null?void 0:a.userData)==null?void 0:r.wheels;if(!n)return;const i=e*t*1.9;for(const s of n)s.children[0].rotation.y+=i}function ac(a){return function(){a|=0,a=a+1831565813|0;let e=Math.imul(a^a>>>15,1|a);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function v0(){const a=document.createElement("canvas");a.width=a.height=256;const e=a.getContext("2d"),t=e.createRadialGradient(128,118,10,128,128,116);t.addColorStop(0,"#ffd9a6"),t.addColorStop(.42,"#e97b42"),t.addColorStop(.78,"#9e2d22"),t.addColorStop(1,"rgba(70,10,12,0)"),e.fillStyle=t,e.beginPath(),e.arc(128,128,126,0,7),e.fill(),e.globalCompositeOperation="multiply",e.fillStyle="rgba(60,15,15,0.4)";for(let i=0;i<16;i++)e.beginPath(),e.arc(60+Math.random()*140,60+Math.random()*140,3+Math.random()*14,0,7),e.fill();e.globalCompositeOperation="source-over",e.fillStyle="rgba(55,10,12,0.35)",e.beginPath(),e.ellipse(128,120,48,55,0,0,7),e.fill(),e.beginPath(),e.ellipse(110,112,13,17,0,0,7),e.fill(),e.beginPath(),e.ellipse(146,112,13,17,0,0,7),e.fill(),e.fillRect(122,134,12,20),e.fillStyle="rgba(55,10,12,0.25)";for(let i=0;i<5;i++)e.fillRect(112+i*7,158,4,18);const n=new si(a);return n.colorSpace=St,n}class _0{constructor(e){this.canvas=e,this.active=!1,this.quality="medium",this.clock=new Po,this.flash=0,this.nextBolt=2.5,this.t=0,this.init()}init(){this.renderer=new Mo({canvas:this.canvas,alpha:!0,antialias:this.quality!=="low",powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=St,this.scene=new Eo,this.scene.fog=new _a(1839632,.017),this.camera=new Ut(47,2,.5,260),this.camera.position.set(0,5.4,19),this.camera.lookAt(0,2.2,0);const e=new Co(8952251,2757904,.55);this.scene.add(e),this.moonLight=new fa(16743493,1.4),this.moonLight.position.set(-18,20,-30),this.scene.add(this.moonLight),this.rim=new ei(16734763,2.2,60),this.rim.position.set(-8,4,2),this.scene.add(this.rim),this.blue=new ei(3907542,1.5,35),this.blue.position.set(7,3,-1),this.scene.add(this.blue);const t=new Ne(new Kt(320,320),new Ye({color:5324844}));t.rotation.x=-Math.PI/2,this.scene.add(t);const n=document.createElement("canvas");n.width=256,n.height=512;const i=n.getContext("2d");i.fillStyle="#795b3b",i.fillRect(0,0,256,512);const r=ac(8217);for(let x=0;x<2600;x++){const b=r()>.5?"209,166,108":"32,25,18";i.fillStyle=`rgba(${b},${.08+r()*.22})`,i.fillRect(r()*256,r()*512,1+r()*4,1+r()*3)}for(const x of[70,186]){const b=i.createLinearGradient(x-15,0,x+15,0);b.addColorStop(0,"rgba(24,18,13,0)"),b.addColorStop(.5,"rgba(24,18,13,0.52)"),b.addColorStop(1,"rgba(24,18,13,0)"),i.fillStyle=b,i.fillRect(x-15,0,30,512),i.strokeStyle="rgba(218,177,116,0.16)",i.lineWidth=2,i.beginPath(),i.moveTo(x+10,0),i.lineTo(x+10,512),i.stroke()}const s=new si(n);s.wrapS=s.wrapT=cs,s.colorSpace=St;const o=new Ne(new Kt(15,180),new Ye({map:s}));o.rotation.x=-Math.PI/2,o.position.set(4,.025,-55),o.rotation.z=-.06,this.scene.add(o);const c=ac(1337),h=(x,b,M,C)=>{const A=new Kc;A.moveTo(-150,b);for(const[P,H]of M)A.lineTo(P,H);A.lineTo(150,b),A.lineTo(150,-20),A.lineTo(-150,-20),A.closePath();const T=new Ne(new Ro(A),new ht({color:C,fog:!1}));T.position.z=x,this.scene.add(T)};h(-112,0,[[-150,7],[-126,8],[-112,13],[-96,13],[-82,8],[-52,9],[-28,17],[-7,18],[8,11],[35,10],[58,15],[78,15],[94,8],[122,7],[140,11],[150,10]],3351325),h(-96,0,[[-150,5],[-126,7],[-110,7],[-96,12],[-76,12],[-61,6],[-34,7],[-12,12],[8,12],[25,7],[48,8],[68,13],[87,13],[106,6],[132,7],[150,9]],2169368);for(let x=0;x<28;x++){const b=.3+c()*1.6,M=new Ne(new us(b,0),new Ye({color:2761504,flatShading:!0}));M.position.set((c()-.5)*50,b*.4,4+c()*18),M.rotation.set(c()*3,c()*3,c()*3),this.scene.add(M)}for(let x=0;x<34;x++){const M=(c()>.5?1:-1)*(11+c()*30),C=-38+c()*58,A=.35+c()*.9,T=new ln,P=new Ne(new Bt(.035,.09,A,4),new Ye({color:4602919,flatShading:!0}));P.position.y=A*.45,T.add(P);for(let H=0;H<3;H++){const _=new Ne(new zt(A*.17,A*(.55+c()*.3),4),new Ye({color:H%2?5001518:5857337,flatShading:!0}));_.position.set((c()-.5)*A*.7,A*(.45+c()*.45),(c()-.5)*A*.5),_.rotation.z=(c()-.5)*1.2,T.add(_)}T.position.set(M,0,C),this.scene.add(T)}const f=new Ne(new Kt(34,34),new ht({map:v0(),transparent:!0,depthWrite:!1,fog:!1}));f.position.set(-17,20,-78),this.scene.add(f),this.moon=f;const d={...pt[0],color:"#4a2018",accent:"#d9a441"};this.hero=pa(d,{beams:!0,boss:!0}),this.hero.position.set(3.5,.15,3.6),this.hero.rotation.y=-.38,this.hero.scale.setScalar(1.15),this.scene.add(this.hero);const l=new ei(16739115,2.4,14);l.position.set(3,1.6,4),this.scene.add(l);const g=new Ne(new Hi(3.8,24),new ht({color:0,transparent:!0,opacity:.4,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.position.set(3.5,.06,3.6),this.scene.add(g),this.chains=[];for(let x=0;x<3;x++){const b=-32+x*24+c()*8,M=[];for(let T=0;T<10;T++)M.push(new R(b+Math.sin(T*.7)*.3,30-T*2.2,-18-x*8));const C=new st().setFromPoints(M),A=new io(C,new ha({color:3748395}));this.scene.add(A)}this.rainCount=1400;const v=new Float32Array(this.rainCount*3);for(let x=0;x<this.rainCount;x++)v[x*3]=(c()-.5)*90,v[x*3+1]=c()*35,v[x*3+2]=-20+(c()-.5)*70;const m=new st;m.setAttribute("position",new Rt(v,3)),this.rain=new zi(m,new ii({color:9085613,size:.1,transparent:!0,opacity:.5,depthWrite:!1})),this.scene.add(this.rain),this.emberCount=220;const u=new Float32Array(this.emberCount*3);for(let x=0;x<this.emberCount;x++)u[x*3]=(c()-.5)*60,u[x*3+1]=c()*20,u[x*3+2]=-30+c()*40;const p=new st;p.setAttribute("position",new Rt(u,3)),this.embers=new zi(p,new ii({color:16738858,size:.18,transparent:!0,opacity:.8,depthWrite:!1})),this.scene.add(this.embers),this.boltMat=new ha({color:14280447,transparent:!0,opacity:0}),this.bolt=new io(new st,this.boltMat),this.bolt.frustumCulled=!1,this.scene.add(this.bolt),this.flashLight=new ei(12441855,0,160),this.flashLight.position.set(-15,28,-35),this.scene.add(this.flashLight),this.resize()}setQuality(e){this.quality=e,this.renderer&&(this.renderer.setPixelRatio(e==="low"?1:Math.min(e==="high"?2:1.5,window.devicePixelRatio||1)),this.rain.visible=e!=="low",this.embers.visible=e!=="low",this.resize())}resize(){if(!this.renderer)return;const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.renderer.setPixelRatio(this.quality==="low"?1:Math.min(this.quality==="high"?2:1.5,window.devicePixelRatio||1)),this.camera.aspect=e/t,this.camera.fov=e/t<.85?58:47,this.camera.updateProjectionMatrix()}start(){this.active||(this.active=!0,this.clock.getDelta(),this.loop())}stop(){this.active=!1,this.raf&&cancelAnimationFrame(this.raf)}loop(){if(!this.active)return;this.raf=requestAnimationFrame(()=>this.loop());const e=Math.min(.05,this.clock.getDelta());this.t+=e;const t=this.t;if(this.camera.position.x=Math.sin(t*.09)*1.8,this.camera.position.y=5.4+Math.sin(t*.16)*.22,this.camera.lookAt(0,2.2+Math.sin(t*.1)*.1,0),this.hero.position.y=.15+Math.sin(t*.8)*.012,this.hero.rotation.z=Math.sin(t*.6)*.004,this.rim.intensity=1.6+Math.sin(t*3.2)*.45,this.blue.intensity=1.2+Math.sin(t*2.1+1)*.4,this.rain.visible){const n=this.rain.geometry.attributes.position.array;for(let i=0;i<this.rainCount;i++)n[i*3+1]-=(18+i%5)*e,n[i*3]+=4.2*e,n[i*3+1]<0&&(n[i*3+1]=35,n[i*3]=(Math.random()-.5)*90,n[i*3+2]=-20+(Math.random()-.5)*70);this.rain.geometry.attributes.position.needsUpdate=!0}if(this.embers.visible){const n=this.embers.geometry.attributes.position.array;for(let i=0;i<this.emberCount;i++)n[i*3+1]+=(.8+i%4*.4)*e,n[i*3]+=Math.sin(t+i)*.1*e,n[i*3+1]>24&&(n[i*3+1]=0);this.embers.geometry.attributes.position.needsUpdate=!0}this.nextBolt-=e,this.flash>0?(this.flash=Math.max(0,this.flash-e*2.6),this.flashLight.intensity=this.flash*11,this.moonLight.intensity=1.4+this.flash*2.5,this.boltMat.opacity=this.flash):(this.boltMat.opacity=0,this.flashLight.intensity=0,this.moonLight.intensity=1.4),this.nextBolt<=0&&(this.nextBolt=4+Math.random()*8,this.makeBolt()),this.renderer.render(this.scene,this.camera)}makeBolt(){const e=(Math.random()-.5)*50,t=-45-Math.random()*30,n=[new R(e,32,t)];let i=e,r=32,s=t;for(let o=0;o<9;o++)i+=(Math.random()-.5)*5,r-=2.7+Math.random()*2,s+=(Math.random()-.5)*2,n.push(new R(i,r,s));this.bolt.geometry.dispose(),this.bolt.geometry=new st().setFromPoints(n),this.flash=.9,this.flashLight.position.set(e,24,t)}}class x0{constructor(e){this.canvas=e,this.renderer=new Mo({canvas:e,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.outputColorSpace=St,this.scene=new Eo,this.camera=new Ut(34,1,.1,100),this.camera.position.set(4.8,2.9,7.2),this.camera.lookAt(0,.6,0),this.cameraTarget={azimuth:.59,elevation:.27},this.cameraCurrent={...this.cameraTarget},this.cameraRadius=8.7,this.cameraCurrentRadius=this.cameraRadius,this.cameraLookAt=new R(0,.6,0),this.dragging=!1,this.lastPointerX=0,this.bindCameraControls();const t=new Co(9215157,1707788,.75);this.scene.add(t);const n=new fa(16756864,2.1);n.position.set(4,7,5),this.scene.add(n);const i=new ei(16726832,2.6,16);i.position.set(-4,2,-3),this.scene.add(i);const r=new ei(3844351,1.4,18);r.position.set(5,2,-4),this.scene.add(r),this.rings=new ln;for(let o=0;o<3;o++){const c=new Ne(new ya(2.5+o*.9,2.54+o*.9,48),new ht({color:o===0?13212738:7153447,transparent:!0,opacity:o===0?.55:.25,side:Yt}));c.rotation.x=-Math.PI/2,c.position.y=.01,this.rings.add(c)}this.scene.add(this.rings);const s=new Ne(new Hi(11,40),new Ye({color:1578260}));s.rotation.x=-Math.PI/2,s.position.y=-.02,this.scene.add(s),this.car=null,this.active=!1,this.t=0,this.clock=new Po,this.resize()}setVehicle(e){this.car&&(this.scene.remove(this.car),this.car.traverse(t=>{var n,i,r,s,o,c,h;t.isMesh&&((i=(n=t.geometry)==null?void 0:n.dispose)==null||i.call(n),(r=t.material)!=null&&r.map&&((o=(s=t.material.map).dispose)==null||o.call(s)),(h=(c=t.material)==null?void 0:c.dispose)==null||h.call(c))})),this.car=pa(e,{beams:!0,boss:!0}),this.car.position.y=.12,this.car.rotation.y=-.5,this.scene.add(this.car)}bindCameraControls(){var t;this.canvas.style.touchAction="none",this.canvas.addEventListener("pointerdown",n=>{n.button===0&&(this.dragging=!0,this.lastPointerX=n.clientX,this.lastPointerY=n.clientY,this.canvas.setPointerCapture(n.pointerId))}),this.canvas.addEventListener("pointermove",n=>{if(!this.dragging)return;const i=n.clientX-this.lastPointerX,r=n.clientY-this.lastPointerY;this.lastPointerX=n.clientX,this.lastPointerY=n.clientY,this.cameraTarget.azimuth-=i*.008,this.cameraTarget.elevation=Ia.clamp(this.cameraTarget.elevation+r*.006,-.02,.85)});const e=()=>{this.dragging=!1};this.canvas.addEventListener("pointerup",e),this.canvas.addEventListener("pointercancel",e),this.canvas.addEventListener("wheel",n=>{n.preventDefault(),this.cameraRadius=Ia.clamp(this.cameraRadius+n.deltaY*.008,6,12)},{passive:!1}),(t=this.canvas.parentElement)==null||t.querySelectorAll("[data-camera-angle]").forEach(n=>{n.addEventListener("click",()=>{const r={front:{azimuth:.59,elevation:.27},side:{azimuth:Math.PI/2,elevation:.2},rear:{azimuth:Math.PI,elevation:.24}}[n.dataset.cameraAngle];r?this.cameraTarget={...r}:n.dataset.cameraAngle==="reset"&&(this.cameraTarget={azimuth:.59,elevation:.27},this.cameraRadius=8.7)})})}resize(){const e=this.canvas.parentElement;if(!e)return;const t=e.clientWidth||600,n=e.clientHeight||360;this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.fov=t/n<1?46:34,this.camera.updateProjectionMatrix()}start(){this.active||(this.active=!0,this.clock.getDelta(),this.loop())}stop(){this.active=!1,this.raf&&cancelAnimationFrame(this.raf)}loop(){if(!this.active)return;this.raf=requestAnimationFrame(()=>this.loop());const e=Math.min(.05,this.clock.getDelta());this.t+=e;const t=1-Math.exp(-8*e),n=Ia.euclideanModulo(this.cameraTarget.azimuth-this.cameraCurrent.azimuth+Math.PI,Math.PI*2)-Math.PI;this.cameraCurrent.azimuth+=n*t,this.cameraCurrent.elevation+=(this.cameraTarget.elevation-this.cameraCurrent.elevation)*t,this.cameraCurrentRadius+=(this.cameraRadius-this.cameraCurrentRadius)*t;const i=Math.cos(this.cameraCurrent.elevation)*this.cameraCurrentRadius;if(this.camera.position.set(Math.sin(this.cameraCurrent.azimuth)*i,this.cameraLookAt.y+Math.sin(this.cameraCurrent.elevation)*this.cameraCurrentRadius,Math.cos(this.cameraCurrent.azimuth)*i),this.camera.lookAt(this.cameraLookAt),this.car){this.car.position.y=.12+Math.sin(this.t*.8)*.02;for(const r of this.car.userData.wheels||[])r.children[0].rotation.y+=e*.3}this.rings.rotation.y+=e*.04,this.renderer.render(this.scene,this.camera)}}const ze=720;function eh(a){let e=a>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function b0(a){const e=document.createElement("canvas");e.width=256,e.height=512;const t=e.getContext("2d");t.fillStyle=a.road,t.fillRect(0,0,256,512);const n=eh(a.id.length*7001+11);for(let r=0;r<6200;r++){const s=n()>.5?"115,91,62":"25,22,18";t.fillStyle=`rgba(${s},${.08+n()*.2})`,t.fillRect(n()*256,n()*512,1+n()*4,1+n()*3)}for(const r of[72,184]){const s=(n()-.5)*8,o=t.createLinearGradient(r-13,0,r+13,0);o.addColorStop(0,"rgba(15,12,10,0)"),o.addColorStop(.5,"rgba(15,12,10,0.34)"),o.addColorStop(1,"rgba(15,12,10,0)"),t.fillStyle=o,t.fillRect(r+s-13,0,26,512),t.strokeStyle="rgba(191,151,99,0.12)",t.lineWidth=2,t.beginPath(),t.moveTo(r+s+10,0),t.lineTo(r+s+10,512),t.stroke()}for(let r=0;r<24;r++){const s=n()*512;t.fillStyle=`rgba(205,164,108,${.025+n()*.05})`,t.fillRect(18+n()*36,s,150+n()*75,1+n()*3)}t.fillStyle="rgba(12,7,6,0.2)";for(let r=0;r<8;r++)t.beginPath(),t.ellipse(n()*256,n()*512,6+n()*24,4+n()*13,n()*3,0,7),t.fill();const i=new si(e);return i.wrapS=i.wrapT=cs,i.colorSpace=St,i.anisotropy=4,i}function y0(){const a=document.createElement("canvas");a.width=512,a.height=128;const e=a.getContext("2d");e.fillStyle="#120c0b",e.fillRect(0,0,512,128),e.fillStyle="#a3151b",e.fillRect(0,0,512,10),e.fillRect(0,118,512,10);for(let n=0;n<16;n++)e.fillStyle=n%2?"#d9c89a":"#161212",e.fillRect(n*32,104,32,24);e.font="bold 66px Impact, Arial Black, sans-serif",e.fillStyle="#e8dcc0",e.textAlign="center",e.fillText("HELLRIDE",256,76),e.font="bold 22px monospace",e.fillStyle="#d03a2a",e.fillText("S T A R T   /   F I N I S H",256,100);const t=new si(a);return t.colorSpace=St,t}function S0(){const a=document.createElement("canvas");a.width=a.height=256;const e=a.getContext("2d"),t=e.createRadialGradient(128,128,2,128,128,128);t.addColorStop(0,"rgba(255,238,190,1)"),t.addColorStop(.14,"rgba(255,185,100,0.9)"),t.addColorStop(.5,"rgba(210,80,40,0.18)"),t.addColorStop(1,"rgba(120,30,20,0)"),e.fillStyle=t,e.fillRect(0,0,256,256);const n=new si(a);return n.colorSpace=St,n}function M0(a,e){return new En({uniforms:{topColor:{value:new Se(a)},horizonColor:{value:new Se(e)}},vertexShader:"varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 topColor; uniform vec3 horizonColor; varying vec3 vPos;
      void main(){ float h = clamp(normalize(vPos).y * 1.4 + 0.15, 0.0, 1.0); vec3 c = mix(horizonColor, topColor, pow(h, 0.72)); gl_FragColor = vec4(c, 1.0); }`,side:Ot,depthWrite:!1,fog:!1})}class E0{constructor({terrain:e="wasteland",weather:t="cloudy",seed:n=1,quality:i="medium"}={}){this.terrain=yt.find(r=>r.id===e)||yt[0],this.weather=bt.find(r=>r.id===t)||bt[0],this.seed=n,this.quality=i,this.rand=eh(n*7919+this.terrain.id.length*131+this.weather.id.length*17),this.width=15.5,this.group=new ln,this.t=0,this.buildCurve(),this.buildEnvironment(),this.buildRoad(),this.buildGate(),this.buildProps(),this.buildWeather()}buildCurve(){const e=this.rand,t=11,n=[],i=100+e()*36;for(let s=0;s<t;s++){const o=s/t*Math.PI*2+(e()-.5)*.2,c=i*(.72+e()*.63),h=(this.terrain.elevation||2)*(.4+.6*Math.sin(o*3+e()*.7))*(this.terrain.id==="mountains"||this.terrain.id==="volcano"?1:.35);n.push(new R(Math.cos(o)*c,h,Math.sin(o)*c))}n.push(n[0].clone()),this.curve=new Wc(n,!0,"catmullrom",.5),this.samples=[];for(let s=0;s<ze;s++){const o=s/ze,c=this.curve.getPointAt(o),h=this.curve.getTangentAt(o);h.y=0,h.normalize();const f=new R(-h.z,0,h.x);this.samples.push({p:c,tan:h,right:f})}const r=this.samples.map(s=>s.p.y);for(let s=0;s<3;s++)for(let o=0;o<ze;o++){const c=r[(o-1+ze)%ze],h=r[o],f=r[(o+1)%ze];r[o]=(c+h*2+f)/4}this.computeLength(),this.samples.forEach((s,o)=>{s.p.y=r[o]})}computeLength(){let e=0;for(let t=0;t<ze;t++){const n=this.samples[t].p,i=this.samples[(t+1)%ze].p;e+=n.distanceTo(i)}this.length=e}buildEnvironment(){const e=this.terrain,t=this.weather;this.skyColor=new Se(e.sky),this.horizonColor=new Se(e.horizon).lerp(new Se(t.tint),.25),this.fogColor=new Se(e.fog).lerp(new Se(t.tint),.35),this.skyMat=M0("#"+this.skyColor.getHexString(),"#"+this.horizonColor.getHexString()),this.sky=new Ne(new jn(450,24,12),this.skyMat),this.group.add(this.sky);const n=new Ne(new Kt(55,55),new ht({map:S0(),transparent:!0,depthWrite:!1,fog:!1}));n.position.set(-140,90,-210),n.lookAt(0,0,0),this.group.add(n),this.sun=n;const i=new Co(10794440,new Se(e.ground).multiplyScalar(.38),.9);this.group.add(i),this.hemi=i;const r=new fa(16757370,1.35);r.position.set(-60,90,-40),this.group.add(r),this.dir=r;const s=new fa(7901368,.5);s.position.set(40,30,60),this.group.add(s);const o=new Ne(new Kt(600,600,1,1),new Ye({color:new Se(e.ground).multiplyScalar(.7)}));o.rotation.x=-Math.PI/2,o.position.y=-.6,this.group.add(o),this.ground=o;const c=this.rand,h=new Ye({color:new Se(e.ground).lerp(this.fogColor,.55),flatShading:!0});for(let f=0;f<26;f++){const d=f/26*Math.PI*2+c()*.15,l=220+c()*80,g=30+c()*85,v=new Ne(new zt(24+c()*40,g,5+Math.floor(c()*2)),h);v.position.set(Math.cos(d)*l,g*.34-4,Math.sin(d)*l),v.rotation.y=c()*3,this.group.add(v),this.addDisposable(v)}this.addDisposable(o)}buildRoad(){const{samples:e,width:t}=this,n=t,i=66,r=[],s=[],o=[],c=[],h=[];for(let H=0;H<=ze;H++){const _=e[H%ze],y=_.p.y,k=_.p.x-_.right.x*n/2,F=_.p.z-_.right.z*n/2,N=_.p.x+_.right.x*n/2,X=_.p.z+_.right.z*n/2;r.push(k,y+.06,F,N,y+.06,X);const O=H*(this.length/ze)/7;s.push(0,O,1,O),c.push(_.p.x-_.right.x*i,y-.6,_.p.z-_.right.z*i,_.p.x-_.right.x*(n/2+.7),y-.02,_.p.z-_.right.z*(n/2+.7),_.p.x+_.right.x*(n/2+.7),y-.02,_.p.z+_.right.z*(n/2+.7),_.p.x+_.right.x*i,y-.6,_.p.z+_.right.z*i)}for(let H=0;H<ze;H++){const _=H*2,y=_+1,k=_+2,F=_+3;o.push(_,y,k,y,F,k);const N=H*4;h.push(N,N+1,N+4,N+1,N+5,N+4),h.push(N+1,N+2,N+5,N+2,N+6,N+5),h.push(N+2,N+3,N+6,N+3,N+7,N+6)}const f=new st;f.setAttribute("position",new tt(r,3)),f.setAttribute("uv",new tt(s,2)),f.setIndex(o),f.computeVertexNormals();const d=new Ye({map:b0(this.terrain),color:"#ffffff"}),l=new Ne(f,d);this.group.add(l),this.road=l,this.addDisposable(l);const g=new st;g.setAttribute("position",new tt(c,3)),g.setIndex(h),g.computeVertexNormals();const v=new Ye({color:new Se(this.terrain.ground),flatShading:!0}),m=new Ne(g,v);this.group.add(m),this.land=m,this.addDisposable(m);const u=new gt(.18,.9,.18),p=new Ye({color:new Se(this.terrain.accent).multiplyScalar(.55)}),x=new or(u,p,Math.floor(ze/10)*2),b=new vt;let M=0;for(let H=0;H<ze;H+=10){const _=e[H];for(const y of[-1,1])b.position.set(_.p.x+_.right.x*y*(n/2+1.2),_.p.y+.45,_.p.z+_.right.z*y*(n/2+1.2)),b.rotation.y=Math.atan2(_.tan.x,_.tan.z),b.updateMatrix(),x.setMatrixAt(M++,b.matrix)}x.count=M,this.group.add(x),this.addDisposable(x);const C=new jn(.16,6,5),A=new ht({color:this.terrain.accent}),T=new or(C,A,80);let P=0;for(let H=0;H<ze;H+=20){const _=e[H];for(const y of[-1,1])b.position.set(_.p.x+_.right.x*y*(n/2+1.25),_.p.y+1.02,_.p.z+_.right.z*y*(n/2+1.25)),b.rotation.set(0,0,0),b.updateMatrix(),T.setMatrixAt(P++,b.matrix)}T.count=P,this.group.add(T),this.addDisposable(T)}buildGate(){const e=this.samples[0],t=Math.atan2(e.tan.x,e.tan.z),n=new ln;n.position.copy(e.p),n.rotation.y=t;const i=new Ye({color:"#24211f"}),r=new Ye({color:"#8f171b"});for(const d of[-1,1]){const l=new Ne(new gt(1.05,8,1.05),i);l.position.set(d*10.5,4,0),n.add(l);const g=new Ne(new zt(.72,1.2,4),r);g.position.set(d*10.5,8.6,0),g.rotation.y=Math.PI/4,n.add(g)}const s=new Ne(new gt(21,3.1,.32),new ht({map:y0()}));s.position.set(0,7.3,0),n.add(s);const o=document.createElement("canvas");o.width=256,o.height=64;const c=o.getContext("2d");for(let d=0;d<16;d++)for(let l=0;l<4;l++)c.fillStyle=(d+l)%2?"#e7ddc3":"#171313",c.fillRect(d*16,l*16,16,16);const h=new si(o);h.colorSpace=St;const f=new Ne(new Kt(this.width,3.2),new ht({map:h}));f.rotation.x=-Math.PI/2,f.position.y=.1,n.add(f),this.group.add(n),this.gate=n,this.startLights=[];for(let d=0;d<3;d++){const l=new Ne(new jn(.28,8,6),new ht({color:"#3a1010"}));l.position.set(-1.8+d*1.8,5.55,.25),n.add(l),this.startLights.push(l)}}buildProps(){const e=this.terrain.props;for(const t of e)this.buildProp(t);e.includes("wreck")||this.buildProp("wreck")}propPositions(e,t=18,n=55){const i=[],r=this.rand;for(let s=0;s<e;s++){const o=Math.floor(r()*ze),c=this.samples[o],h=r()>.5?1:-1,f=t+r()*(n-t),d=f<36?c.p.y-.15:-.5;i.push({x:c.p.x+c.right.x*h*f,y:d,z:c.p.z+c.right.z*h*f,rot:r()*Math.PI*2,scale:.7+r()*1.2,tangent:c.tan,side:h})}return i}buildInstanced(e,t,n,i){if(!n.length)return null;const r=new or(e,t,n.length),s=new vt;return n.forEach((o,c)=>{i(s,o,c),s.updateMatrix(),r.setMatrixAt(c,s.matrix)}),this.group.add(r),this.addDisposable(r),r}buildProp(e){const t=this.terrain,n=new Se(t.ground),i=new Se(t.accent),r=new Ye({color:n.clone().multiplyScalar(.75),flatShading:!0}),s=new Ye({color:n.clone().multiplyScalar(.35),flatShading:!0}),o=new Ye({color:"#2b2927",flatShading:!0}),c=new Ye({color:"#bdb198",flatShading:!0}),h=new ht({color:i}),f=this.propPositions(e==="mountain"?14:34,e==="mountain"?40:17,e==="mountain"?100:62);if(e==="rock")this.buildInstanced(new us(1,0),r,f,(d,l)=>{d.position.set(l.x,l.y+l.scale*.6,l.z),d.rotation.set(l.rot,l.rot*1.4,l.rot*.4),d.scale.set(l.scale*2.2,l.scale*1.5,l.scale*2)});else if(e==="mountain")this.buildInstanced(new zt(1,1,5),r,f,(d,l)=>{d.position.set(l.x,l.y+l.scale*5,l.z),d.scale.set(l.scale*18,l.scale*18,l.scale*18),d.rotation.y=l.rot});else if(e==="dune")this.buildInstanced(new jn(1,7,5),new Ye({color:n.clone().multiplyScalar(1.15)}),f,(d,l)=>{d.position.set(l.x,l.y-l.scale*.7,l.z),d.scale.set(l.scale*9,l.scale*2.5,l.scale*7)});else if(e==="pine")this.buildInstanced(new Bt(.28,.38,4,5),s,f,(d,l)=>{d.position.set(l.x,l.y+l.scale*2,l.z),d.scale.setScalar(l.scale),d.rotation.y=l.rot}),this.buildInstanced(new zt(2.4,7,6),new Ye({color:new Se(t.ground).multiplyScalar(.6),flatShading:!0}),f,(d,l)=>{d.position.set(l.x,l.y+l.scale*5.4,l.z),d.scale.set(l.scale*1.3,l.scale*1.6,l.scale*1.3),d.rotation.y=l.rot});else if(e==="tree"||e==="palm"){this.buildInstanced(new Bt(.35,.55,6,5),s,f,(l,g)=>{l.position.set(g.x,g.y+g.scale*3,g.z),l.scale.setScalar(g.scale),l.rotation.z=(g.rot-3.14)*.03});const d=new Se(t.ground).multiplyScalar(.72).lerp(new Se(t.accent),.18);this.buildInstanced(new Ao(2.4,0),new Ye({color:d,flatShading:!0}),f,(l,g)=>{l.position.set(g.x,g.y+g.scale*6.4,g.z),l.scale.set(g.scale*1.5,g.scale*(e==="palm"?.55:1.2),g.scale*1.5),l.rotation.y=g.rot})}else if(e==="cactus")this.buildInstanced(new Bt(.45,.55,4.5,6),new Ye({color:"#4c6138",flatShading:!0}),f,(d,l)=>{d.position.set(l.x,l.y+l.scale*2.2,l.z),d.scale.setScalar(l.scale),d.rotation.y=l.rot});else if(e==="fern")this.buildInstanced(new zt(1.7,3.2,5),new Ye({color:"#305a2f",flatShading:!0}),f,(d,l)=>{d.position.set(l.x,l.y+l.scale*1.2,l.z),d.scale.setScalar(l.scale),d.rotation.y=l.rot});else if(e==="wreck"||e==="rubble"||e==="cart")this.buildInstanced(new gt(2.2,.9,4.6),new Ye({color:"#4c3a30",flatShading:!0}),f,(d,l)=>{d.position.set(l.x,l.y+.55,l.z),d.rotation.set((l.rot-3)*.05,l.rot,(l.rot-3)*.03),d.scale.setScalar(l.scale)}),this.buildInstanced(new gt(1.8,.7,1.8),s,f,(d,l)=>{d.position.set(l.x,l.y+1.22,l.z-.55*Math.cos(l.rot)),d.rotation.y=l.rot,d.scale.setScalar(l.scale)});else if(e==="tower"){this.buildInstanced(new gt(6,16,6),new Ye({color:n.clone().multiplyScalar(.5),flatShading:!0}),f,(l,g)=>{l.position.set(g.x,g.y+g.scale*8,g.z),l.scale.set(g.scale*1.4,g.scale*(1.5+g.rot),g.scale*1.4),l.rotation.y=g.rot*.1});const d=f.filter((l,g)=>g%3===0);this.buildInstanced(new gt(.16,2.2,.16),h,d,(l,g)=>{l.position.set(g.x+g.side*3.2,g.y+g.scale*12,g.z),l.scale.set(1,g.scale*2,1)})}else if(e==="house")this.buildInstanced(new gt(7,5,6),new Ye({color:n.clone().multiplyScalar(1.25),flatShading:!0}),f,(d,l)=>{d.position.set(l.x,l.y+l.scale*2.5,l.z),d.scale.setScalar(l.scale),d.rotation.y=l.rot}),this.buildInstanced(new zt(5.1,3,4),s,f,(d,l)=>{d.position.set(l.x,l.y+l.scale*5.8,l.z),d.scale.setScalar(l.scale),d.rotation.y=l.rot+Math.PI/4});else if(e==="bunker")this.buildInstanced(new gt(8,3.2,5),new Ye({color:"#514d42",flatShading:!0}),f,(d,l)=>{d.position.set(l.x,l.y+1.6,l.z),d.scale.setScalar(l.scale),d.rotation.y=l.rot}),this.buildInstanced(new gt(1.4,1.6,.2),o,f.filter((d,l)=>l%4===0),(d,l)=>{d.position.set(l.x,l.y+1.6,l.z),d.rotation.y=l.rot});else if(e==="pylon")this.buildInstanced(new Bt(.32,.5,10,4),o,f,(d,l)=>{d.position.set(l.x,l.y+l.scale*5,l.z),d.scale.setScalar(l.scale),d.rotation.y=l.rot}),this.buildInstanced(new gt(.12,.12,10),s,f.filter((d,l)=>l%2===0),(d,l)=>{d.position.set(l.x,l.y+l.scale*8,l.z),d.rotation.y=l.rot});else if(e==="bones")this.buildInstanced(new us(.7,0),c,f,(d,l)=>{d.position.set(l.x,l.y+.35,l.z),d.scale.set(l.scale,l.scale*.8,l.scale*1.15),d.rotation.set(l.rot,l.rot,l.rot)}),this.buildInstanced(new Bt(.18,.18,5,5),c,f.slice(0,20),(d,l)=>{d.position.set(l.x+1.5,l.y+.2,l.z),d.rotation.set(Math.PI/2,l.rot,0)});else if(e==="ice")this.buildInstanced(new zt(1.6,6,5),new Ye({color:"#bfe9f2",flatShading:!0,transparent:!0,opacity:.9}),f,(d,l)=>{d.position.set(l.x,l.y+l.scale*2,l.z),d.scale.set(l.scale,l.scale*2.5,l.scale),d.rotation.y=l.rot});else if(e==="lava"){const d=new ht({color:"#ff6a24"});this.buildInstanced(new Hi(1,10),d,f.slice(0,22),(l,g)=>{l.position.set(g.x,g.y+.08,g.z),l.rotation.x=-Math.PI/2,l.scale.set(g.scale*4,g.scale*2.4,1)}),this.buildInstanced(new zt(1,1,5),new Ye({color:"#2b1b1a",emissive:"#5c1c0e",flatShading:!0}),f,(l,g)=>{l.position.set(g.x,g.y+g.scale*2.5,g.z),l.scale.set(g.scale*2,g.scale*5,g.scale*2),l.rotation.y=g.rot})}else e==="sign"?(this.buildInstanced(new gt(.22,5,.22),o,f.filter((d,l)=>l%3===0),(d,l)=>{d.position.set(l.x,l.y+2.5,l.z),d.scale.setScalar(l.scale)}),this.buildInstanced(new gt(4.5,2,.18),h,f.filter((d,l)=>l%3===0),(d,l)=>{d.position.set(l.x,l.y+4.2,l.z),d.rotation.y=l.rot,d.scale.setScalar(l.scale)})):e==="mine"?(this.buildInstanced(new gt(7,6,5),o,f,(d,l)=>{d.position.set(l.x,l.y+3,l.z),d.rotation.y=l.rot,d.scale.setScalar(l.scale)}),this.buildInstanced(new gt(2.8,3.2,.3),new ht({color:"#0a0807"}),f,(d,l)=>{d.position.set(l.x,l.y+1.6,l.z),d.rotation.y=l.rot})):e==="idol"?(this.buildInstanced(new Bt(1.4,1.8,9,4),new Ye({color:"#55503c",flatShading:!0}),f,(d,l)=>{d.position.set(l.x,l.y+l.scale*4.5,l.z),d.scale.setScalar(l.scale),d.rotation.y=l.rot}),this.buildInstanced(new jn(1.3,6,5),new ht({color:i}),f,(d,l)=>{d.position.set(l.x,l.y+l.scale*9.2,l.z),d.scale.setScalar(l.scale)})):e==="wire"?this.buildInstanced(new Bt(.12,.12,3,4),o,f,(d,l)=>{d.position.set(l.x,l.y+1.5,l.z),d.scale.setScalar(l.scale)}):e==="crater"&&this.buildInstanced(new Hi(1,10),new Ye({color:"#211c19"}),f,(d,l)=>{d.position.set(l.x,l.y+.05,l.z),d.rotation.x=-Math.PI/2,d.scale.set(l.scale*4,l.scale*3,1)})}buildWeather(){const e=this.weather.id,t=this.rand;if(this.precip=null,this.tornado=null,this.water=null,this.quicksand=null,this.flash=0,this.nextStrike=6,e==="acid"||e==="storm"||e==="hurricane"){const n=this.quality==="low"?600:1300,i=new Float32Array(n*3);for(let o=0;o<n;o++)i[o*3]=(t()-.5)*100,i[o*3+1]=t()*45,i[o*3+2]=(t()-.5)*100;const r=new st;r.setAttribute("position",new Rt(i,3));const s=e==="acid"?"#8fdc5a":e==="storm"?"#a8bfd8":"#93b9c2";this.rain=new zi(r,new ii({color:s,size:.12,transparent:!0,opacity:.55,depthWrite:!1})),this.rain.frustumCulled=!1,this.group.add(this.rain),this.addDisposable(this.rain),this.rainCount=n}if(e==="twister"&&(this.tornado=this.makeTornado(),this.group.add(this.tornado)),e==="flood"){const n=new ht({color:"#2d4540",transparent:!0,opacity:.5,depthWrite:!1}),i=new Ne(new Kt(420,420),n);i.rotation.x=-Math.PI/2,i.position.y=-.18,this.group.add(i),this.water=i,this.addDisposable(i)}if(e==="quicksand"){const n=document.createElement("canvas");n.width=n.height=128;const i=n.getContext("2d");i.fillStyle="#5a4325",i.fillRect(0,0,128,128);for(let c=0;c<48;c++)i.fillStyle=`rgba(${90+t()*60},${65+t()*40},${25+t()*30},0.5)`,i.beginPath(),i.arc(t()*128,t()*128,3+t()*14,0,7),i.fill();const r=new si(n),s=new Ye({map:r,color:"#c0a06a"}),o=new Ne(new Kt(420,420),s);o.rotation.x=-Math.PI/2,o.position.y=-.55,this.group.add(o),this.quicksand=o,this.addDisposable(o)}if(e==="clear"||e==="cloudy"){const i=new Float32Array(480);for(let s=0;s<160;s++)i[s*3]=(t()-.5)*90,i[s*3+1]=t()*20,i[s*3+2]=(t()-.5)*90;const r=new st;r.setAttribute("position",new Rt(i,3)),this.ash=new zi(r,new ii({color:e==="clear"?"#e6b27c":"#9c948c",size:.1,transparent:!0,opacity:.4,depthWrite:!1})),this.group.add(this.ash),this.addDisposable(this.ash)}this.strikeLight=new ei(13624575,0,120),this.strikeLight.position.set(0,30,0),this.group.add(this.strikeLight),this.boltMat=new ha({color:15134975,transparent:!0,opacity:0}),this.bolt=new io(new st,this.boltMat),this.bolt.frustumCulled=!1,this.group.add(this.bolt),(e==="acid"||e==="storm"||e==="hurricane"||e==="flood")&&(this.road.material.color=new Se("#a8b2ac"))}makeTornado(){const e=new ln,t=new ht({color:"#8c7b65",transparent:!0,opacity:.2,side:Yt,depthWrite:!1}),n=[];for(let s=0;s<7;s++){const o=new Ne(new Bt(1.2+s*1.4,2.4+s*2.3,7,16,1,!0),t);o.position.y=3+s*5,o.userData.spin=.7+Math.random()*.8,e.add(o),n.push(o)}const i=this.samples[Math.floor(this.samples.length*.68)],r=this.rand()>.5?1:-1;return e.position.set(i.p.x+i.right.x*r*38,i.p.y-1,i.p.z+i.right.z*r*38),e.userData.rings=n,e.userData.radius=20,e}nearest(e,t=0,n=46){let i=-1,r=1/0;const s=t-n,o=t+n;for(let l=s;l<=o;l++){const g=(l%ze+ze)%ze,v=this.samples[g],m=e.x-v.p.x,u=e.z-v.p.z,p=m*m+u*u;p<r&&(r=p,i=g)}if(r>900)for(let l=0;l<ze;l+=8){const g=this.samples[l],v=e.x-g.p.x,m=e.z-g.p.z,u=v*v+m*m;u<r&&(r=u,i=l)}const c=this.samples[i],h=e.x-c.p.x,f=e.z-c.p.z,d=h*c.right.x+f*c.right.z;return{index:i,distance:Math.sqrt(r),lateral:d,sample:c}}sampleAt(e){return this.samples[(e%ze+ze)%ze]}worldAt(e,t=0,n=0){const i=this.sampleAt(e);return new R(i.p.x+i.right.x*t,i.p.y+n,i.p.z+i.right.z*t)}startPose(e=0){const t=Math.floor(e/2),n=e%2,i=18+t*13,r=this.sampleAt(i),s=(n===0?-1:1)*3.6;return{pos:new R(r.p.x+r.right.x*s,r.p.y+.02,r.p.z+r.right.z*s),yaw:Math.atan2(r.tan.x,r.tan.z),index:i,lateral:s}}applyToScene(e){e.add(this.group),e.background=this.skyColor.clone().lerp(new Se(this.weather.tint),.08);const t=.0048*this.weather.fog;e.fog=new _a(this.fogColor.getHex(),t)}update(e,t=null){this.t+=e;const n=this.weather.id;if(this.rain){const i=this.rain.geometry.attributes.position.array,r=this.weather.wind,s=n==="hurricane"?36:22;for(let o=0;o<this.rainCount;o++)i[o*3+1]-=s*e,i[o*3]+=(2.2+r*5)*e,i[o*3+2]+=r*1.4*e,i[o*3+1]<-2&&(i[o*3+1]=40,i[o*3]=(Math.random()-.5)*110,i[o*3+2]=(Math.random()-.5)*110);this.rain.geometry.attributes.position.needsUpdate=!0,this.rain.position.x=t?t.x*.35:0,this.rain.position.z=t?t.z*.35:0}if(this.ash){const i=this.ash.geometry.attributes.position.array;for(let r=0;r<160;r++)i[r*3+1]+=(.4+r%3*.3)*e,i[r*3]+=Math.sin(this.t+r)*.08*e,i[r*3+1]>20&&(i[r*3+1]=0);this.ash.geometry.attributes.position.needsUpdate=!0}if(this.tornado){for(const i of this.tornado.userData.rings)i.rotation.y+=i.userData.spin*e;this.tornado.rotation.y+=.08*e}this.water&&(this.water.material.opacity=.42+Math.sin(this.t*1.2)*.06),this.sun&&(this.sun.position.y=90+Math.sin(this.t*.1)*2),(n==="storm"||n==="acid"||n==="hurricane")&&(this.nextStrike-=e,this.flash>0?(this.flash=Math.max(0,this.flash-e*2.8),this.boltMat.opacity=this.flash,this.strikeLight.intensity=this.flash*14,this.hemi.intensity=.9+this.flash*1.6):(this.boltMat.opacity=0,this.strikeLight.intensity=0,this.hemi.intensity=.9),this.nextStrike<=0&&(this.nextStrike=5+Math.random()*7,this.triggerLightning(t)))}triggerLightning(e=null){let t=(e==null?void 0:e.x)??0,n=(e==null?void 0:e.z)??0;t+=(Math.random()-.5)*50,n+=(Math.random()-.5)*50;const i=[new R(t,45,n)];let r=t,s=45,o=n;for(let c=0;c<8;c++)r+=(Math.random()-.5)*5,s-=4+Math.random()*2.5,o+=(Math.random()-.5)*3,i.push(new R(r,s,o));return this.bolt.geometry.dispose(),this.bolt.geometry=new st().setFromPoints(i),this.flash=1,this.strikeLight.position.set(t,25,n),this.lastStrike={x:t,z:n},{x:t,z:n}}addDisposable(e){this._disposables||(this._disposables=[]),this._disposables.push(e)}dispose(){this.group.traverse(e=>{var t,n,i,r,s;if(e.isMesh||e.isPoints||e.isLine){(n=(t=e.geometry)==null?void 0:t.dispose)==null||n.call(t);const o=Array.isArray(e.material)?e.material:[e.material];for(const c of o)c&&(c.map&&((r=(i=c.map).dispose)==null||r.call(i)),(s=c.dispose)==null||s.call(c))}}),this.group.removeFromParent()}}const qt=a=>440*Math.pow(2,(a-69)/12);class T0{constructor(){this.ctx=null,this.master=null,this.music=null,this.sfxBus=null,this.vol={master:.8,music:.7,sfx:.85},this.scene=null,this.timer=null,this.nextTime=0,this.step=0,this.engine=null,this.started=!1}ensure(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.music=this.ctx.createGain(),this.sfxBus=this.ctx.createGain(),this.music.connect(this.master),this.sfxBus.connect(this.master),this.master.connect(this.ctx.destination),this.applyVolumes(),this.started=!0)}applyVolumes(){if(!this.ctx)return;const e=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.vol.master,e,.05),this.music.gain.setTargetAtTime(this.vol.music*.7,e,.05),this.sfxBus.gain.setTargetAtTime(this.vol.sfx,e,.05)}setVolumes({master:e,music:t,sfx:n}={}){e!=null&&(this.vol.master=e),t!=null&&(this.vol.music=t),n!=null&&(this.vol.sfx=n),this.applyVolumes()}setScene(e){this.ensure(),this.ctx&&this.scene!==e&&(this.scene=e,this.step=0,this.nextTime=this.ctx.currentTime+.08,this.timer&&clearInterval(this.timer),e&&(this.timer=setInterval(()=>this.scheduler(),25)))}scheduler(){if(!this.ctx||!this.scene)return;const t=60/(this.scene==="race"?136:this.scene==="results"?92:74)/4;for(;this.nextTime<this.ctx.currentTime+.2;)this.playStep(this.step,this.nextTime,t),this.step=(this.step+1)%64,this.nextTime+=t}playStep(e,t,n){const i=this.scene==="menu"||this.scene==="results",r=Math.floor(e/16),s=e%16,f=(i?[[50,53,57,62],[46,50,53,58],[43,50,55,58],[45,49,52,57]]:[[38,50,53,57],[36,48,52,55],[34,46,50,53],[33,45,49,52]])[r%4];if(i){if(s===0&&(f.slice(0,3).forEach((d,l)=>this.tone(qt(d),t,n*15,.055,"sawtooth",{filter:520+l*90,attack:.9,release:1.8,detune:l*3})),this.tone(qt(f[0]-12),t,n*16,.07,"sine",{attack:.5,release:2})),s%2===0){const d=[0,0,7,0,10,7,0,5],l=f[0]-12+d[s/2%8];this.tone(qt(l),t,n*1.7,.085,"sawtooth",{filter:340,attack:.02,release:.25})}(s===0||s===6||s===10)&&this.kick(t,s===0?.2:.12,i?82:100),s===8&&r%2===0&&this.tone(qt(f[2]+24),t,1.8,.035,"triangle",{attack:.005,release:1.6}),s===12&&r===3&&this.tone(qt(f[1]+12),t,1.2,.04,"sawtooth",{filter:1800,attack:.01,release:1})}else{s===0&&this.tone(qt(f[0]-12),t,n*14,.1,"sawtooth",{filter:260,attack:.1,release:.6});const d=[0,0,12,0,7,0,10,12];if(s%2===0){const l=f[0]+d[s/2%8];this.tone(qt(l-12),t,n*1.45,.105,"square",{filter:300,attack:.005,release:.16})}(s===0||s===6)&&f.slice(1).forEach(l=>this.tone(qt(l+12),t,n*2.2,.034,"sawtooth",{filter:2100,attack:.01,release:.25,detune:4})),s===12&&r%2===1&&(this.tone(qt(f[2]+12),t,n*2,.045,"square",{filter:1200,attack:.01,release:.4}),this.tone(qt(f[3]+12),t+n*.5,n*1.6,.04,"square",{filter:1200,attack:.01,release:.4})),(s===0||s===4||s===8||s===12)&&this.kick(t,s===0?.22:.15,96),(s===2||s===10)&&this.snare(t,.1),s%2===1&&this.hat(t,.025)}}tone(e,t,n,i,r="sine",s={}){if(!this.ctx)return;const o=this.ctx.createOscillator(),c=this.ctx.createGain(),h=this.ctx.createBiquadFilter();o.type=r,o.frequency.setValueAtTime(e,t),s.detune&&o.detune.setValueAtTime(s.detune,t),h.type="lowpass",h.frequency.setValueAtTime(s.filter||1600,t),h.Q.value=s.q||.7;const f=s.attack??.02,d=s.release??.3;c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(Math.max(2e-4,i),t+f),c.gain.setTargetAtTime(1e-4,t+Math.max(f,n-d),Math.max(.02,d/3)),o.connect(h),h.connect(c),c.connect(this.music),o.start(t),o.stop(t+n+.1)}kick(e,t=.2,n=100){if(!this.ctx)return;const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(n,e),i.frequency.exponentialRampToValueAtTime(32,e+.22),r.gain.setValueAtTime(t,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.32),i.connect(r),r.connect(this.music),i.start(e),i.stop(e+.34)}snare(e,t=.1){if(!this.ctx)return;const i=this.ctx.createBuffer(1,this.ctx.sampleRate*.16,this.ctx.sampleRate),r=i.getChannelData(0);for(let h=0;h<r.length;h++)r[h]=(Math.random()*2-1)*(1-h/r.length);const s=this.ctx.createBufferSource();s.buffer=i;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=1700,o.Q.value=.8;const c=this.ctx.createGain();c.gain.value=t,s.connect(o),o.connect(c),c.connect(this.music),s.start(e)}hat(e,t=.03){if(!this.ctx)return;const i=this.ctx.createBuffer(1,this.ctx.sampleRate*.045,this.ctx.sampleRate),r=i.getChannelData(0);for(let h=0;h<r.length;h++)r[h]=(Math.random()*2-1)*Math.pow(1-h/r.length,2);const s=this.ctx.createBufferSource();s.buffer=i;const o=this.ctx.createBiquadFilter();o.type="highpass",o.frequency.value=6500;const c=this.ctx.createGain();c.gain.value=t,s.connect(o),o.connect(c),c.connect(this.music),s.start(e)}sfx(e,t={}){if(this.ensure(),!this.ctx||this.vol.sfx<=.001)return;const n=this.ctx.currentTime;this.sfxBus,e==="click"?this.blip(n,420,.06,.08,"square"):e==="back"?this.blip(n,240,.09,.07,"square"):e==="count"?this.blip(n,320,.18,.16,"square",600):e==="go"?(this.blip(n,620,.45,.2,"sawtooth",1240),this.kickSfx(n,.2,90)):e==="boost"?this.whoosh(n,.45,.16,280,1800):e==="hit"?(this.noiseSfx(n,.12,.16,420),this.blip(n,90,.16,.1,"square",40)):e==="scrape"?this.noiseSfx(n,.08,.06,2600):e==="lightning"?(this.noiseSfx(n,.7,.3,900),this.kickSfx(n,.15,70)):e==="win"?[58,62,65,70,74].forEach((i,r)=>this.musicBlip(n+r*.09,qt(i),.5,.09,"sawtooth")):e==="lose"?[58,55,51,46].forEach((i,r)=>this.musicBlip(n+r*.14,qt(i),.7,.09,"sawtooth")):e==="reward"?[70,74,77,82].forEach((i,r)=>this.blip(n+r*.07,qt(i),.35,.08,"triangle")):e==="siren"?this.siren(n):e==="thunder"?this.noiseSfx(n,1.2,.22,320):e==="ui_open"&&this.blip(n,180,.2,.08,"sawtooth",380)}blip(e,t,n,i,r="square",s=null){const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type=r,o.frequency.setValueAtTime(t,e),s&&o.frequency.exponentialRampToValueAtTime(s,e+n),c.gain.setValueAtTime(i,e),c.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(c),c.connect(this.sfxBus),o.start(e),o.stop(e+n+.02)}blip2(e,t,n,i,r,s="square"){this.blip(e,t,i,r,s,n)}kickSfx(e,t,n){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(n,e),i.frequency.exponentialRampToValueAtTime(30,e+.28),r.gain.setValueAtTime(t,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.3),i.connect(r),r.connect(this.sfxBus),i.start(e),i.stop(e+.32)}noiseSfx(e,t,n,i){const r=t,s=this.ctx.createBuffer(1,this.ctx.sampleRate*r,this.ctx.sampleRate),o=s.getChannelData(0);for(let d=0;d<o.length;d++)o[d]=(Math.random()*2-1)*Math.pow(1-d/o.length,1.4);const c=this.ctx.createBufferSource();c.buffer=s;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.value=i;const f=this.ctx.createGain();f.gain.value=n,c.connect(h),h.connect(f),f.connect(this.sfxBus),c.start(e)}whoosh(e,t,n,i,r){const s=t,o=this.ctx.createBuffer(1,this.ctx.sampleRate*s,this.ctx.sampleRate),c=o.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=(Math.random()*2-1)*Math.sin(l/c.length*Math.PI);const h=this.ctx.createBufferSource();h.buffer=o;const f=this.ctx.createBiquadFilter();f.type="bandpass",f.Q.value=1.2,f.frequency.setValueAtTime(i,e),f.frequency.exponentialRampToValueAtTime(r,e+t);const d=this.ctx.createGain();d.gain.value=n,h.connect(f),f.connect(d),d.connect(this.sfxBus),h.start(e)}siren(e){const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(580,e),t.frequency.linearRampToValueAtTime(940,e+.35),t.frequency.linearRampToValueAtTime(580,e+.7),n.gain.setValueAtTime(1e-4,e),n.gain.linearRampToValueAtTime(.08,e+.05),n.gain.linearRampToValueAtTime(1e-4,e+.75),t.connect(n),n.connect(this.sfxBus),t.start(e),t.stop(e+.8)}musicBlip(e,t,n,i,r){const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type=r,s.frequency.setValueAtTime(t,e),o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(i,e+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+n),s.connect(o),o.connect(this.music),s.start(e),s.stop(e+n+.02)}startEngine(){if(this.ensure(),!this.ctx||this.engine)return;const e=this.ctx.createOscillator(),t=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();e.type="sawtooth",t.type="square",e.frequency.value=45,t.frequency.value=90,n.type="lowpass",n.frequency.value=420,n.Q.value=1.4,i.gain.value=1e-4,e.connect(n),t.connect(n),n.connect(i),i.connect(this.sfxBus),e.start(),t.start(),i.gain.setTargetAtTime(.045,this.ctx.currentTime,.5),this.engine={o1:e,o2:t,f:n,g:i}}updateEngine(e,t=0,n=!1){if(!this.engine||!this.ctx)return;const i=this.ctx.currentTime,r=Math.min(1,e/60);this.engine.o1.frequency.setTargetAtTime(42+r*150+(n?60:0),i,.06),this.engine.o2.frequency.setTargetAtTime(84+r*290+(n?110:0),i,.06),this.engine.f.frequency.setTargetAtTime(300+r*1200+t*240,i,.1),this.engine.g.gain.setTargetAtTime(.028+r*.035+(n?.02:0),i,.08)}stopEngine(){if(!this.engine||!this.ctx)return;const e=this.engine;e.g.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.15),setTimeout(()=>{try{e.o1.stop(),e.o2.stop()}catch{}},500),this.engine=null}stopAll(){this.timer&&clearInterval(this.timer),this.timer=null,this.scene=null,this.stopEngine()}}const Ee=new T0,Ks=[{name:"Marrow",origin:"ghoul",vehicle:"rust_reaper",color:"#4e4b3f",accent:"#b6a25a",story:"A graveyard mechanic who learned to race by dragging engines out of the dead. Marrow keeps a tally of every rival he has buried and swears your name will be the last mark."},{name:"Vex",origin:"mutant",vehicle:"acid_runner",color:"#43552b",accent:"#b6ff37",story:"Vex grew up in the refinery runoff, where a quick turn meant the difference between a clean lung and a melted one. Every race is a test of how much poison a body can turn into speed."},{name:"Sister Ash",origin:"ghost",vehicle:"hearse_taxi",color:"#2a3138",accent:"#9fc4d6",story:"Once a funeral driver for the last towns with lights, Sister Ash now carries the names of the lost across the circuit. She races so the dead are remembered before the living forget."},{name:"Grimm",origin:"demon",vehicle:"midnight_coffin",color:"#251314",accent:"#ff3b30",story:"Grimm made a pact with the night and paid for it in daylight. He appears wherever the road runs black, collecting wagers, secrets, and the occasional soul."},{name:"Halo",origin:"demigod",vehicle:"valkyrie",color:"#b8b2a2",accent:"#ffcf6a",story:"A fallen sky-knight who abandoned the throne roads after seeing what the Queen did to the ground below. Halo still fights by a code, though the wasteland keeps trying to break it."},{name:"Cinder",origin:"human",vehicle:"dune_worm",color:"#7e4d2d",accent:"#ff8a3d",story:"Cinder was a courier between the desert settlements, threading storms with medicine strapped to the chassis. When the routes became battle lines, she kept driving—and learned to deliver a warning at full throttle."},{name:"Pale Kid",origin:"ghost",vehicle:"bubble_bumper",color:"#5d4a66",accent:"#b6ffcf",story:"No one knows where the Pale Kid came from, only that the little car appears at midnight and vanishes before dawn. The Kid treats every race as a game, and every finish as a promise to come back."},{name:"Brick",origin:"mutant",vehicle:"wool_reaper",color:"#7b745f",accent:"#8f171b",story:"Brick is the last bouncer from the old arena circuit, a wall of muscle with a soft spot for battered machines. He believes a car—and a person—deserves one more chance after the first wreck."}],w0=[{name:"Bone Fang",story:"The gang’s tracker, Bone Fang marks escape routes with teeth wired to the guardrails."},{name:"Rust Maw",story:"Rust Maw strips abandoned cars for armor and wears every stolen plate like a trophy."},{name:"Grave Crawler",story:"A tunnel runner who knows the old drainage maps better than the roads above."},{name:"Dust Throat",story:"Dust Throat rides point through the storms, calling targets by the sound of their engines."}].map((a,e)=>({...a,origin:"demon",vehicle:"rust_reaper",color:["#583427","#3e3228","#2a2722","#4b3b2b"][e],accent:"#c35b2c",pursuit:!0})),A0=[{name:"Unit 13",story:"Unit 13 is a silent patrol car whose driver still follows the evacuation orders issued before the world ended."},{name:"Unit 09",story:"Unit 09 was rebuilt from a checkpoint interceptor and sent back onto the road with its original arrest list intact."},{name:"Precinct 77",story:"Precinct 77 is the last mobile command unit of a dead jurisdiction, enforcing laws no town remembers."}].map((a,e)=>({...a,origin:"ghost",vehicle:"midnight_coffin",color:"#111820",accent:e%2?"#ff3b30":"#3f8cff",pursuit:!0})),sn=(a,e,t)=>Math.max(e,Math.min(t,a)),Zs=(a,e,t)=>a+(e-a)*t,ts=a=>`hsl(${Math.round(Math.max(0,120-sn(a,0,100)*1.6))} 85% ${Math.round(50-sn(a,0,100)*.1)}%)`,rc=(a,e)=>{let t=a-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t},wi=Object.fromEntries(pt.map(a=>[a.id,a])),oc=["rust_reaper","acid_runner","dune_worm","hearse_taxi","foxfire","bubble_bumper","midnight_coffin","boost_hog"];class R0{constructor(e,t){this.canvas=e,this.opts=t,this.settings=t.settings||{},this.profile=t.profile,this.terrain=yt.find(n=>n.id===t.terrain)||yt[0],this.weather=bt.find(n=>n.id===t.weather)||bt[0],this.mode=t.mode||"race",this.laps=t.laps||2,this.difficulty=t.difficulty||{id:"normal",ai:.94},this.boss=t.bossId?Pi.find(n=>n.id===t.bossId):null,this.vehicle=wi[t.vehicleId]||pt[0],this.origin=mt.find(n=>{var i;return n.id===((i=this.profile)==null?void 0:i.origin)})||mt[0],this.paused=!1,this.finished=!1,this.finishing=0,this.clock=new Po,this.elapsed=0,this.t=0,this.hudTimer=0,this.mapTimer=0,this.shake=0,this.steerSmooth=0,this.input={left:!1,right:!1,accel:!1,brake:!1,handbrake:!1,nitro:!1,special:!1},this.specialCharge=100,this.specialActive=0,this.specialLatch=!1,this.specialColor=this.origin.id==="demon"?"#ff3b30":this.origin.id==="ghost"?"#8be7ff":this.origin.id==="mutant"?"#8cff3b":this.origin.id==="ghoul"?"#c9d36a":this.origin.id==="demigod"?"#ffd166":"#ff9a3d",this.specialName={human:"ADRENALINE",mutant:"TOXIC RAM",ghost:"PHASE",ghoul:"FEAST",demon:"HELLFIRE",demigod:"THUNDERCLAP"}[this.origin.id]||"SPECIAL",this.tutorial=this.mode==="tutorial"?{step:0,progress:0,throttleTime:0,steerTime:0,brakeTime:0,nitroUses:0,shown:!1}:null,this.raceTime=0,this.lapStart=0,this.bestLap=null,this.nitro=100,this.boostTime=0,this.hull=100,this.zoneDamage={front:0,left:0,right:0,rear:0},this.respawnInvuln=0,this.respawns=0,this.lastCheckpoint={index:18,lap:1},this.cargo=100,this.comfort=100,this.escapeLeft=t.escapeTime||60,this.gore=this.settings.gore||"blood",this.impact=[],this.collisionCooldown=0,this.wallCooldown=0,this.lastStrike=null,this.firstStepTime=0,this.state="countdown",this.countdown=4.2,this.hudWarningCd=0,this.warnHold=0,this.position=1,this.finishOrder=0,this.onFinish=t.onFinish||(()=>{}),this.onPause=t.onPause||(()=>{}),this.onQuit=t.onQuit||(()=>{}),this.initRenderer(),this.initScene(),this.buildHUD(),this.bind(),this.audioStarted=!1,this.loop=this.loop.bind(this),this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize),document.addEventListener("visibilitychange",this.onVisibility),this.raf=requestAnimationFrame(this.loop)}initRenderer(){this.renderer=this.canvas._hellrideRenderer,this.renderer||(this.renderer=new Mo({canvas:this.canvas,antialias:this.settings.quality!=="low",powerPreference:"high-performance"}),this.renderer.outputColorSpace=St,this.canvas._hellrideRenderer=this.renderer);const e=this.settings.quality||"medium";this.renderer.setPixelRatio(e==="low"?1:Math.min(e==="high"?2:1.5,window.devicePixelRatio||1)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.setClearColor(723725,1)}initScene(){this.scene=new Eo,this.camera=new Ut(62,window.innerWidth/window.innerHeight,.3,500),this.track=new E0({terrain:this.terrain.id,weather:this.weather.id,seed:this.opts.seed||Math.floor(Math.random()*9999),quality:this.settings.quality}),this.track.applyToScene(this.scene),this.racers=[],this.player=this.makePlayer(),this.lastCheckpoint={index:this.player.index,lap:1},this.buildOpponents(),this.updatePositions(),this.light=new m0(16777215,.05),this.scene.add(this.light);const e=new Ne(new ya(2.5,3.1,40),new ht({color:this.specialColor,transparent:!0,opacity:.75,depthWrite:!1,side:Yt}));e.rotation.x=-Math.PI/2,e.position.y=.12,e.visible=!1,this.player.car.add(e),this.specialRing=e,this.camera.position.set(this.player.pos.x,this.player.pos.y+4,this.player.pos.z-10),this.camera.lookAt(this.player.pos),this.flashEl=null}makePlayer(){var r;const e=this.track.startPose(0),t=pa(this.vehicle);t.position.copy(e.pos),t.rotation.y=e.yaw,t.traverse(s=>{s.isMesh&&(s.frustumCulled=!0)}),this.scene.add(t);const n=this.origin.mod||{},i={maxSpeed:(26+this.vehicle.speed*.3)*(n.speed||1)*this.weather.grip**.1,accel:(7.5+this.vehicle.accel*.16)*(n.accel||1),grip:(.62+this.vehicle.grip*.006)*(n.grip||1)*this.terrain.grip*this.weather.grip,armor:this.vehicle.armor*(n.armor||1),boost:this.vehicle.boost};return{id:"player",name:((r=this.profile)==null?void 0:r.name)||"YOU",isPlayer:!0,car:t,pos:e.pos.clone(),yaw:e.yaw,speed:0,maxSpeed:i.maxSpeed,stats:i,index:e.index,prevIndex:e.index,lap:1,lateral:e.lateral,finished:!1,finishOrder:null,finishTime:null,lastLapAt:0,lapTimes:[],collCount:0,offset:0,damage:0,_v:new R}}buildOpponents(){var n,i;const e=this.mode==="gang"||this.mode==="police";let t=[];if(e)t=[...this.mode==="police"?A0:w0];else if(this.mode==="pvp"){const r=Ks[Math.floor(Math.random()*Ks.length)];t.push({...r,name:"RIVAL · "+r.name})}else if(this.boss){t.push({name:this.boss.name,boss:!0,origin:this.boss.portrait.origin,vehicle:this.boss.vehicle,color:(n=wi[this.boss.vehicle])==null?void 0:n.color,accent:(i=wi[this.boss.vehicle])==null?void 0:i.accent,skill:1.02});const r=Ks.filter(s=>s.name!=="Marrow");for(let s=0;s<4;s++)t.push({...r[(s+this.boss.order)%r.length],name:r[(s+this.boss.order)%r.length].name})}else{const r=this.mode==="tutorial"?3:5,s=[...Ks].sort(()=>Math.random()-.5);for(let o=0;o<r;o++)t.push(s[o%s.length])}t.forEach((r,s)=>{const o=wi[r.vehicle]||wi[oc[s%oc.length]],c=pa({...o,color:r.color||o.color,accent:r.accent||o.accent},{boss:r.boss}),h=this.track.startPose(s+1);c.position.copy(h.pos),c.rotation.y=h.yaw,this.scene.add(c);const f=r.skill||.9+s%3*.035,d={maxSpeed:26+o.speed*.29,accel:7+o.accel*.13,grip:.6+o.grip*.005},l={id:"ai_"+s,name:r.name,isPlayer:!1,car:c,pos:h.pos.clone(),yaw:h.yaw,speed:0,maxSpeed:d.maxSpeed,stats:d,index:h.index,prevIndex:h.index,lap:1,lateral:h.lateral,lane:h.lateral,finished:!1,finishOrder:null,finishTime:null,skill:f,boss:!!r.boss,pursuit:!!r.pursuit,wobble:Math.random()*8,carDef:r,colors:{accent:r.accent||o.accent,color:r.color||o.color},lastCollision:0};this.racers.push(l)}),this.racers.unshift(this.player)}buildHUD(){const e=document.getElementById("race-ui");if(!e)return;const t={tutorial:"TUTORIAL · FIRST BLOOD",race:"SINGLE RACE",pvp:"PVP DUEL",boss:"BOSS CHALLENGE",transport:"TRANSPORT",taxi:"TAXI",gang:"ESCAPE GANG",police:"APOCALYPTIC POLICE",cup:"CUP CHAMPIONSHIP",tournament:"TOURNAMENT"};e.innerHTML=`
      <div class="race-hud" id="raceHud">
        <div class="rh-top">
          <div class="rh-block rh-pos"><span>POSITION</span><b id="hudPos">6/6</b></div>
          <div class="rh-block"><span>LAP</span><b id="hudLap">1/${this.laps}</b></div>
          <div class="rh-block"><span>TIME</span><b id="hudTime">00:00.00</b></div>
          <div class="rh-mode">
            <div class="rh-mode-name">${t[this.mode]||"RACE"}</div>
            <div class="rh-weather"><i>${this.weather.icon}</i> ${this.weather.name.toUpperCase()} <em>WIND ${this.weather.wind.toFixed(1)}</em></div>
          </div>
          <button class="rh-pause" id="racePause" aria-label="Pause">❚❚</button>
        </div>
        <div class="rh-objective" id="hudObjective">
          <div class="rh-obj-label" id="hudObjLabel">OBJECTIVE</div>
          <div class="rh-obj-main" id="hudObjMain">${this.mode==="taxi"?"Passenger comfort":this.mode==="transport"?"Cargo integrity":this.mode==="gang"||this.mode==="police"?"Survive the pursuit":"Win the race"}</div>
          <div class="rh-bar"><i id="hudObjBar"></i></div>
          <div class="rh-obj-sub" id="hudObjSub"></div>
        </div>
        <div class="rh-damage" id="hudDamage">
          <div class="rh-dmg-head"><span>VEHICLE DAMAGE</span><b id="hudDmgPct">0%</b></div>
          <div class="rh-dmg-car">
            <span class="rh-dmg-part front" id="dmgFront"><em>FRONT</em></span>
            <span class="rh-dmg-part left" id="dmgLeft"><em>L</em></span>
            <span class="rh-dmg-core"></span>
            <span class="rh-dmg-part right" id="dmgRight"><em>R</em></span>
            <span class="rh-dmg-part rear" id="dmgRear"><em>REAR</em></span>
          </div>
          <div class="rh-dmg-legend"><span>GOOD</span><i></i><span>BAD</span></div>
        </div>
        <div class="rh-minimap-wrap"><canvas id="hudMinimap" width="300" height="300"></canvas><div class="rh-map-label">${this.terrain.short}</div></div>
        <div class="rh-speedo">
          <div class="rh-speed-num"><b id="hudSpeed">0</b><span>KM/H</span></div>
          <div class="rh-nitro" id="hudNitroWrap"><span>NITRO</span><div class="rh-nitro-track"><i id="hudNitro"></i></div></div>
          <div class="rh-hull"><span>HULL</span><div class="rh-hull-track"><i id="hudHull"></i></div></div>
          <div class="rh-special" id="hudSpecialWrap"><span id="hudSpecialLabel">${this.specialName}</span><div class="rh-special-track"><i id="hudSpecial"></i></div></div>
        </div>
        <div class="rh-touch" id="touchControls">
          <div class="rh-steer">
            <button data-key="left" aria-label="Turn left"><b>◀</b><span>TURN</span></button>
            <button data-key="right" aria-label="Turn right"><b>▶</b><span>TURN</span></button>
          </div>
          <div class="rh-pedals">
            <div class="rh-pedal-row">
              <button data-key="nitro" class="rh-nitro-btn" aria-label="Nitro"><b>N₂O</b><span>NITRO</span></button>
              <button data-key="special" class="rh-special-btn" aria-label="Special move"><b>✦</b><span>${this.specialName}</span></button>
            </div>
            <div class="rh-pedal-row">
              <button data-key="brake" class="rh-brake" aria-label="Stop or reverse"><b>▼</b><span>STOP / REV</span></button>
              <button data-key="handbrake" class="rh-handbrake" aria-label="Handbrake"><b>HB</b><span>DRIFT</span></button>
              <button data-key="accel" class="rh-accel" aria-label="Accelerate"><b>▲</b><span>ACCEL</span></button>
            </div>
          </div>
        </div>
        <div class="rh-warning" id="hudWarning"></div>
        <div class="rh-toast" id="hudToast"></div>
        <div class="rh-count" id="hudCount"></div>
        <div class="rh-tutorial" id="hudTutorial"></div>
        <div class="rh-flash" id="hudFlash"></div>
        <div class="rh-tut-banner" id="hudTutBanner">${this.tutorial?"<b>WAKE UP, DRIVER.</b><span>Grip the wheel. The wasteland does not forgive.</span>":""}</div>
      </div>
    `,this.el={pos:document.getElementById("hudPos"),lap:document.getElementById("hudLap"),time:document.getElementById("hudTime"),objBar:document.getElementById("hudObjBar"),objLabel:document.getElementById("hudObjLabel"),objMain:document.getElementById("hudObjMain"),objSub:document.getElementById("hudObjSub"),speed:document.getElementById("hudSpeed"),nitro:document.getElementById("hudNitro"),hull:document.getElementById("hudHull"),special:document.getElementById("hudSpecial"),specialLabel:document.getElementById("hudSpecialLabel"),specialWrap:document.getElementById("hudSpecialWrap"),count:document.getElementById("hudCount"),tutorial:document.getElementById("hudTutorial"),warning:document.getElementById("hudWarning"),toast:document.getElementById("hudToast"),flash:document.getElementById("hudFlash"),minimap:document.getElementById("hudMinimap"),dmgPct:document.getElementById("hudDmgPct"),dmgFront:document.getElementById("dmgFront"),dmgLeft:document.getElementById("dmgLeft"),dmgRight:document.getElementById("dmgRight"),dmgRear:document.getElementById("dmgRear"),tutBanner:document.getElementById("hudTutBanner")},this.mapCtx=this.el.minimap.getContext("2d"),this.mapBounds=this.track.samples.reduce((n,i)=>(n.minX=Math.min(n.minX,i.p.x),n.maxX=Math.max(n.maxX,i.p.x),n.minZ=Math.min(n.minZ,i.p.z),n.maxZ=Math.max(n.maxZ,i.p.z),n),{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}),document.getElementById("racePause").addEventListener("click",()=>{Ee.sfx("click"),this.requestPause()}),e.querySelectorAll("#touchControls button").forEach(n=>{const i=n.dataset.key,r=o=>{o.preventDefault(),this.input[i]=!0,n.classList.add("active"),Ee.ensure()},s=o=>{o.preventDefault(),this.input[i]=!1,n.classList.remove("active")};n.addEventListener("pointerdown",r),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),n.addEventListener("pointerleave",s),n.addEventListener("contextmenu",o=>o.preventDefault())})}bind(){this.keyHandler=e=>{const t=e.key.toLowerCase();["arrowleft","arrowright","arrowup","arrowdown"," ","shift"].includes(t)&&e.preventDefault(),(t==="a"||t==="arrowleft")&&(this.input.left=!0),(t==="d"||t==="arrowright")&&(this.input.right=!0),(t==="w"||t==="arrowup")&&(this.input.accel=!0),(t==="s"||t==="arrowdown")&&(this.input.brake=!0),t==="q"&&(this.input.handbrake=!0),(t===" "||t==="shift")&&(this.input.nitro=!0),(t==="f"||t==="e")&&(this.input.special=!0),(t==="escape"||t==="p")&&this.requestPause(),t==="m"&&(Ee.setVolumes({master:Ee.vol.master>0?0:.8}),this.toast(Ee.vol.master>0?"SOUND ON":"MUTED"))},this.keyUp=e=>{const t=e.key.toLowerCase();(t==="a"||t==="arrowleft")&&(this.input.left=!1),(t==="d"||t==="arrowright")&&(this.input.right=!1),(t==="w"||t==="arrowup")&&(this.input.accel=!1),(t==="s"||t==="arrowdown")&&(this.input.brake=!1),t==="q"&&(this.input.handbrake=!1),(t===" "||t==="shift")&&(this.input.nitro=!1),(t==="f"||t==="e")&&(this.input.special=!1)},this.blur=()=>{for(const e in this.input)this.input[e]=!1},this.onVisibility=()=>{document.hidden&&this.state==="racing"&&this.requestPause()},window.addEventListener("keydown",this.keyHandler),window.addEventListener("keyup",this.keyUp),window.addEventListener("blur",this.blur)}resize(){this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.fov=window.innerWidth/window.innerHeight<.85?72:62,this.camera.updateProjectionMatrix())}async startAudio(){this.audioStarted||(this.audioStarted=!0,Ee.ensure(),Ee.setScene("race"),Ee.startEngine())}requestPause(){this.finished||(this.paused=!this.paused,this.paused?(Ee.stopEngine(),this.onPause(!0)):(Ee.startEngine(),this.onPause(!1),this.clock.getDelta()))}resume(){this.paused&&(this.paused=!1,Ee.startEngine(),this.onPause(!1),this.clock.getDelta())}toast(e,t=1400){var n;(n=this.el)!=null&&n.toast&&(this.el.toast.textContent=e,this.el.toast.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{var i;return(i=this.el)==null?void 0:i.toast.classList.remove("show")},t))}loop(){if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);const e=Math.min(.045,this.clock.getDelta());this.paused||this.update(e),this.renderer.render(this.scene,this.camera)}update(e){if(this.t+=e,this.state==="countdown"){this.countdown-=e,this.updateCountdown(),this.updateAI(e,!0),this.track.update(e,this.player.pos),this.updateCamera(e,!0),this.updateHUD(e);return}this.state!=="racing"&&this.state!=="finished"||(this.state==="racing"&&(this.raceTime+=e,(this.mode==="gang"||this.mode==="police")&&(this.escapeLeft-=e,this.escapeLeft<=0&&(this.escapeLeft=0,this.finishRace("escaped")))),this.state==="racing"?(this.updatePlayer(e),this.updateAI(e,!1),this.handleWeather(e),this.updatePositions(),this.updateTutorial(e)):(this.player.speed=Math.max(0,this.player.speed-12*e),this.player.pos.addScaledVector(new R(Math.sin(this.player.yaw),0,Math.cos(this.player.yaw)),this.player.speed*e),this.updateAI(e,!1)),this.finishing>0&&(this.finishing-=e,this.finishing<=0&&this.deliverResults()),this.track.update(e,this.player.pos),this.updateCamera(e,!1),this.updateImpactParticles(e),this.updateHUD(e))}updateCountdown(){var i,r,s;const e=this.countdown;let t="";e>3.2?t="READY":e>2.2?t="3":e>1.2?t="2":e>.2?t="1":t="GO",(i=this.el)!=null&&i.count&&(this.el.count.textContent=t,this.el.count.className="rh-count show "+(t==="GO"?"go":""));const n=Math.max(0,Math.min(3,Math.ceil((4.2-e)/1.1)));this.track.startLights.forEach((o,c)=>{const h=c<n;o.material.color.set(h?n>=3?"#7bff49":"#ff2b1d":"#3a1010")}),this.countdown<=0&&(this.state="racing",(r=this.el)!=null&&r.count&&(this.el.count.textContent="GO",this.el.count.className="rh-count show go"),setTimeout(()=>{var o;(o=this.el)!=null&&o.count&&(this.el.count.className="rh-count")},650),(s=this.el)!=null&&s.tutBanner&&setTimeout(()=>this.el.tutBanner.classList.add("hide"),2500),Ee.sfx("go"),this.startAudio(),this.lapStart=0,this.updateTutorialHUD()),Math.floor(e*2)!==Math.floor((e+.016)*2)&&e<3.2&&e>.2&&Ee.sfx("count")}statsForPlayer(){return this.player.stats}activateSpecial(){const e=this.player;this.specialCharge=0,this.specialActive=4.2,this.specialLatch=!0;const t=this.origin.id;if(Ee.sfx("boost"),t==="human")this.nitro=100,this.hull=Math.min(100,this.hull+8);else if(t==="ghoul")this.hull=Math.min(100,this.hull+30),this.nitro=Math.min(100,this.nitro+40);else if(t==="mutant"){for(const n of this.racers){if(n.isPlayer)continue;const i=Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z);if(i<18){const r=(n.pos.x-e.pos.x)/(i||1),s=(n.pos.z-e.pos.z)/(i||1);n.pos.x+=r*5,n.pos.z+=s*5,n.speed*=.62}}this.shake=Math.max(this.shake,.9),this.impactAt(e.pos,2)}else if(t==="demon"){for(const n of this.racers){if(n.isPlayer)continue;Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z)<22&&(n.speed*=.65)}this.impactAt(e.pos,1.4)}else if(t==="demigod"){for(const n of this.racers){if(n.isPlayer)continue;Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z)<50&&(n.speed*=.72)}this.track.triggerLightning(e.pos),this.flashScreen(),Ee.sfx("lightning")}this.toast(`${this.specialName} — ACTIVE`,1500),this.specialRing&&(this.specialRing.visible=!0,this.specialRing.material.color.set(this.specialColor))}updatePlayer(e){var F;const t=this.player,n=this.input,i=t.stats,r=Math.abs(t.speed),s=sn(r/t.maxSpeed,0,1.4),o=i.grip*(this.weather.id==="flood"?.82:1);let c=(n.left?-1:0)+(n.right?1:0);this.steerSmooth=Zs(this.steerSmooth,c,1-Math.pow(.001,e));const h=this.steerSmooth,f=n.handbrake;this.specialActive>0?this.specialActive=Math.max(0,this.specialActive-e):this.specialCharge<100&&(this.specialCharge=Math.min(100,this.specialCharge+e*(100/21))),n.special&&!this.specialLatch&&this.specialCharge>=100&&this.activateSpecial(),this.specialLatch=n.special;const d=this.specialActive>0;n.nitro&&this.nitro>1&&t.speed>4?(this.nitro=Math.max(0,this.nitro-e*28),this.boostTime=.18,(!this._boostSound||this.t-this._boostSound>.6)&&(Ee.sfx("boost"),this._boostSound=this.t)):(this.nitro=Math.min(100,this.nitro+e*(3.4+i.boost*.08)),this.boostTime=Math.max(0,this.boostTime-e));const g=this.boostTime>0,v=t.maxSpeed*(g?1.34:1)*(d?1.12:1)*(this.weather.id==="flood"?.88:1);if(n.accel)t.speed+=i.accel*(g?1.55:1)*(d?1.16:1)*e,this.tutorial&&(this.tutorial.throttleTime+=e);else if(n.brake)t.speed>.4?t.speed-=i.accel*2.05*e:t.speed-=i.accel*.62*e,this.tutorial&&(this.tutorial.brakeTime+=e);else{const N=Math.sign(t.speed);t.speed-=N*(1.6+r*.11)*e,Math.abs(t.speed)<.25&&(t.speed=0)}if(f){const N=Math.sign(t.speed);t.speed-=N*i.accel*(t.speed>0?1.05:.4)*e,this.shake=Math.max(this.shake,.12)}g&&(t.speed+=i.accel*.55*e),Math.abs(h)>.4&&r>3&&this.tutorial&&(this.tutorial.steerTime+=e),t.speed>v&&(t.speed=Zs(t.speed,v,1-Math.pow(.2,e))),t.speed=sn(t.speed,-12,Math.max(v,1));let m=(1.55-s*.34)*o*sn(r/6,0,1)*(r>26?1.08:1);f&&(m*=1.62),t.yaw+=h*m*e*(n.brake&&t.speed>0?.78:1),t.drifting=f&&r>14;const u=new R(Math.sin(t.yaw),0,Math.cos(t.yaw)),x=this.track.nearest(t.pos,t.index,36).sample.right;let b=this.weather.wind;if(this.weather.id==="twister"&&this.track.tornado){const N=t.pos.x-this.track.tornado.position.x,X=t.pos.z-this.track.tornado.position.z,O=Math.hypot(N,X);if(O<34){const Y=(1-O/34)*22;t.pos.x+=N/(O+.01)*Y*e,t.pos.z+=X/(O+.01)*Y*e,b+=2.5*(1-O/34),this.shake=Math.max(this.shake,.4*(1-O/34)),this.t>(this._tornadoWarn||0)&&(this.warn("TWISTER PULL"),this._tornadoWarn=this.t+4)}}const M=b*.85*(.35+s);t.pos.x+=(u.x*t.speed+x.x*M)*e,t.pos.z+=(u.z*t.speed+x.z*M)*e;const C=this.track.nearest(t.pos,t.index,40),A=this.track.width/2,T=C.lateral,P=Math.abs(T)>A+.5;if(P&&(t.speed-=t.speed*(this.weather.id==="quicksand"?1.4:.7)*e,this.shake=Math.max(this.shake,.16*sn(Math.abs(T)/(A+5),0,1)),this.weather.id==="quicksand"&&Math.abs(T)>A+2&&(t.speed=Math.max(0,t.speed-12*e),this.t>(this._sandWarn||0)&&(this.warn("QUICKSAND — GET BACK ON THE ROAD"),this._sandWarn=this.t+3),this.cargo>0&&(this.cargo=Math.max(0,this.cargo-e*4)))),Math.abs(T)>A+3.4){const N=Math.sign(T);t.pos.x-=x.x*N*(Math.abs(T)-A-3.4),t.pos.z-=x.z*N*(Math.abs(T)-A-3.4),t.speed*=.7,this.lastCollisionAt=this.t,this.wallCooldown<=0&&(this.impactAt(t.pos,1),this.damagePlayer(4+Math.abs(t.speed)*.18,T>0?"right":"left"),this.wallCooldown=.5,this.shake=Math.max(this.shake,.6),Ee.sfx("hit"))}this.wallCooldown=Math.max(0,this.wallCooldown-e),this.collisionCooldown=Math.max(0,this.collisionCooldown-e),this.respawnInvuln=Math.max(0,this.respawnInvuln-e),this.warnHold=Math.max(0,this.warnHold-e);const H=this.track.sampleAt(C.index-3),_=this.track.sampleAt(C.index+3),y=-Math.atan2(_.p.y-H.p.y,10),k=C.sample.p.y+.02;if(t.pos.y=k,t.index=C.index,t.lateral=T,t.car.position.copy(t.pos),t.car.rotation.set(y,t.yaw,-h*s*.07,"YXZ"),sc(t.car,t.speed,e),(F=t.car.userData.tailMat)==null||F.color.set(n.brake||t.speed<1?"#ff2b1d":"#7a1714"),t.prevIndex>ze*.72&&C.index<ze*.28){t.lap++;const N=this.raceTime-t.lastLapAt;t.lastLapAt=this.raceTime,t.lapTimes.push(N),(this.bestLap==null||N<this.bestLap)&&(this.bestLap=N),this.state==="racing"&&t.lap>this.laps&&this.mode!=="gang"&&this.mode!=="police"&&this.finishRace("finished"),this.tutorial&&this.toast(`LAP ${Math.min(t.lap,this.laps)} / ${this.laps} · ${In(N)}`,1500),this.lastCheckpoint={index:0,lap:t.lap}}else if(t.prevIndex<ze*.28&&C.index>ze*.72)t.lap=Math.max(1,t.lap-1);else{const N=Math.floor(ze/4),X=Math.floor(C.index/N)*N;X>this.lastCheckpoint.index&&(this.lastCheckpoint={index:X,lap:t.lap})}t.prevIndex=C.index,P&&t.speed>12&&Math.random()<e*18&&this.spawnDust(t.pos,P);for(const N of this.racers){if(N.isPlayer||N.finished)continue;const X=t.pos.x-N.pos.x,O=t.pos.z-N.pos.z,Y=Math.hypot(X,O);if(Y<2.25&&this.collisionCooldown<=0){this.collisionCooldown=.4;const V=X/(Y||1),re=O/(Y||1);t.pos.x+=V*(2.25-Y)*.6,t.pos.z+=re*(2.25-Y)*.6,N.pos.x-=V*.5,N.pos.z-=re*.5,t.speed*=.88,N.speed*=.9;const $=N.pos.x-t.pos.x,Q=N.pos.z-t.pos.z,De=$*Math.sin(t.yaw)+Q*Math.cos(t.yaw),ke=$*Math.cos(t.yaw)-Q*Math.sin(t.yaw),q=Math.abs(De)>=Math.abs(ke)?De>0?"front":"rear":ke>0?"right":"left";this.damagePlayer(3,q),this.impactAt(t.pos,.7),this.shake=Math.max(this.shake,.35),Ee.sfx("hit"),this.cargo>0&&(this.cargo=Math.max(0,this.cargo-6)),this.comfort>0&&(this.comfort=Math.max(0,this.comfort-10)),N.pursuit&&this.damagePlayer(4,"rear")}}if(this.weather.id==="acid"&&Math.random()<e*.6&&this.damagePlayer(.6,Math.random()<.5?"left":"right"),this.tutorial&&this.input.nitro&&this.nitro<99.8&&!this.tutorial._nitroFlag&&(this.tutorial._nitroFlag=!0,this.tutorial.nitroUses++),this.input.nitro||this.tutorial&&(this.tutorial._nitroFlag=!1),this.specialRing&&(this.specialRing.visible=this.specialActive>0,this.specialRing.visible)){this.specialRing.rotation.z+=e*3.4;const N=1+Math.sin(this.t*8)*.12;this.specialRing.scale.setScalar(N),this.specialRing.material.opacity=.55+Math.sin(this.t*10)*.2}this.dustCd=Math.max(0,(this.dustCd||0)-e),Ee.updateEngine(Math.abs(t.speed)/Math.max(1,t.maxSpeed),n.accel?1:0,g),this.shake=Math.max(0,this.shake-e*1.5)}updateAI(e,t=!1){const n=this.player;for(const i of this.racers){if(i.isPlayer)continue;if(i.finished)i.speed=Math.max(0,i.speed-8*e);else{const l=this.track.nearest(i.pos,i.index,38);i.index=l.index;const g=10+Math.floor(i.speed*.6),v=this.track.sampleAt(l.index+6);this.track.sampleAt(l.index+g);let m;if(i.pursuit&&!t){const _=i.wobble+this.t*.5;m=new R(n.pos.x+Math.cos(_)*1.6,n.pos.y,n.pos.z+Math.sin(_)*1.6)}else{const _=Math.sin(this.t*.5+i.wobble)*1.1;m=this.track.worldAt(l.index+g,sn(i.lane+_,-this.track.width*.32,this.track.width*.32),.2)}const u=Math.atan2(m.x-i.pos.x,m.z-i.pos.z),p=rc(u,i.yaw),x=(1.8-sn(i.speed/i.maxSpeed,0,1)*.35)*e*(i.pursuit?1.25:1);i.yaw+=sn(p,-x,x);const b=Math.abs(rc(Math.atan2(v.tan.x,v.tan.z),Math.atan2(l.sample.tan.x,l.sample.tan.z)));let M=1-sn(b*.45,0,.22),C=1;const A=i.lap*ze+i.index,T=n.lap*ze+n.index,P=A-T;P<-60?C=1.075:P>70&&(C=.93),this.mode==="tutorial"&&(C=.72);const H=i.maxSpeed*i.skill*this.difficulty.ai*M*C*(this.weather.id==="flood"?.9:1)*(t?0:1);i.speed<H?i.speed+=i.stats.accel*e*(i.pursuit?1.18:1):i.speed=Zs(i.speed,H,1-Math.pow(.5,e)),t&&(i.speed=0),i.speed=Math.max(0,i.speed)}const r=new R(Math.sin(i.yaw),0,Math.cos(i.yaw));i.pos.x+=r.x*i.speed*e,i.pos.z+=r.z*i.speed*e;const s=this.track.nearest(i.pos,i.index,42),o=this.track.width/2;let c=s.lateral;if(Math.abs(c)>o+2.2){const l=Math.sign(c);i.pos.x-=s.sample.right.x*l*(Math.abs(c)-o-2.2),i.pos.z-=s.sample.right.z*l*(Math.abs(c)-o-2.2),i.speed*=.94}i.pos.y=s.sample.p.y+.02,i.lateral=s.lateral;const h=this.track.sampleAt(s.index-3),f=this.track.sampleAt(s.index+3),d=-Math.atan2(f.p.y-h.p.y,10);i.car.position.copy(i.pos),i.car.rotation.set(d,i.yaw,Math.sin(this.t*3+i.wobble)*.012,"YXZ"),sc(i.car,i.speed,e),i.prevIndex>ze*.72&&s.index<ze*.28?(i.lap++,!i.finished&&i.lap>this.laps&&this.mode!=="gang"&&this.mode!=="police"&&(i.finished=!0,i.finishOrder=++this.finishOrder,i.finishTime=this.raceTime)):i.prevIndex<ze*.28&&s.index>ze*.72&&(i.lap=Math.max(1,i.lap-1)),i.prevIndex=s.index,i.index=s.index}}handleWeather(e){const t=this.player;if(!this.track.lastStrike||this.track.lastStrike===this.lastStrike)return;this.lastStrike=this.track.lastStrike;const n=t.pos.x-this.lastStrike.x,i=t.pos.z-this.lastStrike.z;Math.hypot(n,i)<17?(this.damagePlayer(14,"front"),this.shake=Math.max(this.shake,1),this.impactAt(t.pos,1.4),this.flashScreen(),this.warn("LIGHTNING STRIKE — HULL DAMAGED"),Ee.sfx("lightning"),t.speed*=.6):this.t>(this._lightWarn||0)&&(this.warn("LIGHTNING NEARBY"),this._lightWarn=this.t+6)}damagePlayer(e,t=null){if(this.state!=="racing"||this.respawnInvuln>0)return;if(this.specialActive>0){if(this.origin.id==="ghost")return;this.origin.id==="mutant"?e*=.45:this.origin.id==="demigod"&&(e*=.72)}if(!t){const i=Math.random();t=i<.4?"front":i<.6?"left":i<.8?"right":"rear"}const n=t==="front"||t==="rear"?1.15:.95;this.zoneDamage[t]=Math.min(100,this.zoneDamage[t]+e*n),this.hull=Math.max(0,this.hull-e),this.hull<=0&&this.respawnAtCheckpoint()}respawnAtCheckpoint(){var i;if(this.state!=="racing")return;const e=this.lastCheckpoint||{index:18,lap:1},t=this.track.sampleAt(e.index),n=this.player;n.pos.set(t.p.x,t.p.y+.02,t.p.z),n.yaw=Math.atan2(t.tan.x,t.tan.z),n.speed=0,n.index=e.index,n.prevIndex=e.index,n.lateral=0,n.car.position.copy(n.pos),n.car.rotation.set(0,n.yaw,0,"YXZ"),this.lastCheckpoint={index:e.index,lap:e.lap||n.lap},this.hull=100,this.zoneDamage={front:0,left:0,right:0,rear:0},this.respawnInvuln=2.4,this.respawns++,this.shake=0,this.collisionCooldown=1.2,this.wallCooldown=1.2,this.camera.position.set(n.pos.x-Math.sin(n.yaw)*10,n.pos.y+6,n.pos.z-Math.cos(n.yaw)*10),this.toast("WRECKED · RESTARTED AT CHECKPOINT",2200),this.warn("CHECKPOINT RESTART · HULL RESTORED"),(i=this.el)!=null&&i.count&&(this.el.count.textContent="CHECKPOINT",this.el.count.className="rh-count show go",clearTimeout(this._cpCountT),this._cpCountT=setTimeout(()=>{var r;(r=this.el)!=null&&r.count&&(this.el.count.className="rh-count")},1100)),Ee.sfx("hit"),setTimeout(()=>Ee.sfx("go"),180),this.updateHUD(.1)}updatePositions(){const e=[...this.racers].sort((t,n)=>t.finished&&n.finished?t.finishOrder-n.finishOrder:t.finished?-1:n.finished?1:n.lap*ze+n.index-(t.lap*ze+t.index));this.standings=e,this.position=e.findIndex(t=>t.isPlayer)+1}updateCamera(e,t){const n=this.player,i=sn(n.speed/(n.maxSpeed||40),0,1.3),r=window.innerWidth/Math.max(1,window.innerHeight)<.85,s=(r?13.4:8.6)+i*(r?2.1:2.5),o=new R(n.pos.x-Math.sin(n.yaw)*s,n.pos.y+(r?5.6:3.9)+i*.4,n.pos.z-Math.cos(n.yaw)*s),c=1-Math.pow(9e-4,e);this.camera.position.lerp(o,c),this.shake>.01&&this.settings.cameraShake!==!1&&(this.camera.position.x+=(Math.random()-.5)*this.shake*.45,this.camera.position.y+=(Math.random()-.5)*this.shake*.3);const h=new R(n.pos.x+Math.sin(n.yaw)*(r?6:7),n.pos.y+(r?2.1:1.5),n.pos.z+Math.cos(n.yaw)*(r?6:7));this.camera.lookAt(h);const f=(r?70:62)+i*7+(this.boostTime>0?4:0);this.camera.fov=Zs(this.camera.fov,f,1-Math.pow(.02,e)),this.camera.updateProjectionMatrix(),this.track.tornado&&(this.track.tornado.rotation.y+=e*.2)}updateTutorial(e){if(!this.tutorial||this.state!=="racing")return;const t=this.tutorial;t.step===0&&t.throttleTime>.8?this.completeTutorialStep("THROTTLE"):t.step===1&&t.steerTime>.65?this.completeTutorialStep("STEERING"):t.step===2&&t.nitroUses>0?this.completeTutorialStep("NITRO"):t.step===3&&t.brakeTime>.45&&this.completeTutorialStep("BRAKING"),this.updateTutorialHUD()}completeTutorialStep(e){this.tutorial&&(Ee.sfx("reward"),this.toast(`${e} — LEARNED`,1300),this.tutorial.step++,this.tutorial.step>4&&(this.tutorial.step=4),this.updateTutorialHUD())}updateTutorialHUD(){var i;if(!this.tutorial||!((i=this.el)!=null&&i.tutorial))return;const e=[["ACCELERATE","Hold <kbd>W</kbd> / <kbd>↑</kbd> or the ACCEL pedal. Speed is survival."],["TURN","Use <kbd>A</kbd> <kbd>D</kbd> / <kbd>←</kbd> <kbd>→</kbd> or the left-side TURN pedals."],["NITRO","Tap <kbd>SPACE</kbd> or N₂O. The blue meter refills over time."],["STOP / REVERSE","Hold <kbd>S</kbd> / <kbd>↓</kbd> to stop, then reverse. <kbd>Q</kbd> is the HANDBRAKE."],["SPECIAL","Tap <kbd>F</kbd> / ✦ when charged. Then finish the lap and survive the weather."]],[t,n]=e[Math.min(4,this.tutorial.step)];this.el.tutorial.innerHTML=`<div class="tut-kicker">TUTORIAL · ${Math.min(5,this.tutorial.step+1)}/5</div><b>${t}</b><p>${n}</p>`,this.el.tutorial.classList.add("show")}updateHUD(e){if(this.el){if(this.hudTimer+=e,this.hudTimer>.06){this.hudTimer=0;const t=this.player;this.el.pos.textContent=`${this.position}/${this.racers.length}`;const n=this.mode==="gang"||this.mode==="police"?"—":`${Math.min(t.lap,this.laps)}/${this.laps}`;this.el.lap.textContent=n,this.el.time.textContent=In(this.raceTime),this.el.speed.textContent=Math.round(Math.abs(t.speed)*3.4),this.el.nitro.style.width=this.nitro+"%",this.el.hull.style.width=this.hull+"%",this.specialActive>0?(this.el.special.style.width="100%",this.el.specialLabel.textContent=this.specialName+" ACTIVE",this.el.specialWrap.classList.add("active"),this.el.specialWrap.classList.remove("ready")):(this.el.special.style.width=this.specialCharge+"%",this.el.specialLabel.textContent=this.specialCharge>=100?this.specialName+" READY":this.specialName+" "+Math.floor(this.specialCharge)+"%",this.el.specialWrap.classList.toggle("ready",this.specialCharge>=100),this.el.specialWrap.classList.remove("active")),this.hull<35?this.el.hull.classList.add("danger"):this.el.hull.classList.remove("danger");const i=100-this.hull;if(this.el.dmgPct&&(this.el.dmgPct.textContent=`${Math.round(i)}%`,this.el.dmgPct.style.color=ts(i),this.el.dmgFront.style.background=ts(this.zoneDamage.front),this.el.dmgLeft.style.background=ts(this.zoneDamage.left),this.el.dmgRight.style.background=ts(this.zoneDamage.right),this.el.dmgRear.style.background=ts(this.zoneDamage.rear)),this.tutorial){const r=document.getElementById("hudObjBar");r&&(r.style.width=`${this.tutorial.step*20}%`),this.el.objSub.textContent=`Tutorial ${Math.min(5,this.tutorial.step+1)}/5`}else this.mode==="transport"?(this.el.objLabel.textContent="CARGO INTEGRITY",this.el.objMain.textContent=`${Math.round(this.cargo)}%`,this.el.objBar.style.width=this.cargo+"%",this.el.objSub.textContent=this.cargo>60?"Fragile. Keep it off the walls.":this.cargo>0?"Cargo failing! Find the line.":"CARGO LOST",this.el.objBar.classList.toggle("danger",this.cargo<35)):this.mode==="taxi"?(this.el.objLabel.textContent="PASSENGER COMFORT",this.el.objMain.textContent=`${Math.round(this.comfort)}%`,this.el.objBar.style.width=this.comfort+"%",this.el.objSub.textContent=this.comfort>60?"Keep the fare breathing.":"The passenger is screaming.",this.el.objBar.classList.toggle("danger",this.comfort<35)):this.mode==="gang"||this.mode==="police"?(this.el.objLabel.textContent="SURVIVE",this.el.objMain.textContent=In(this.escapeLeft).slice(0,5),this.el.objBar.style.width=`${Math.max(0,Math.min(100,this.escapeLeft/(this.opts.escapeTime||60)*100))}%`,this.el.objSub.textContent=`HULL ${Math.round(this.hull)}% · ${this.mode==="police"?"PRECINCT 13":"BONE GANG"}`):(this.el.objLabel.textContent="OBJECTIVE",this.el.objMain.textContent=this.boss?`BEAT ${this.boss.name.toUpperCase()}`:"WIN THE RACE",this.el.objBar.style.width=`${Math.max(0,100-(this.position-1)*22)}%`,this.el.objSub.textContent=this.position===1?"LEADING":`${this.position-1} DRIVER${this.position>2?"S":""} AHEAD`,this.el.objBar.classList.toggle("danger",!1));this.warnHold<=0&&(this.weather.id==="hurricane"?this.el.warning.textContent="CROSSWIND · HOLD THE LINE":this.weather.id==="twister"?this.el.warning.textContent="TWISTER · DO NOT GET PULLED IN":this.weather.id==="flood"?this.el.warning.textContent="FLOODED ROAD · LOW GRIP":this.weather.id==="acid"?this.el.warning.textContent="ACID RAIN · HULL CORRODING":this.weather.id==="storm"?this.el.warning.textContent="THUNDERSTORM · LIGHTNING ACTIVE":this.weather.id==="quicksand"?this.el.warning.textContent="QUICKSAND · STAY ON ASPHALT":this.el.warning.textContent="")}this.mapTimer+=e,this.mapTimer>.13&&(this.mapTimer=0,this.drawMinimap())}}drawMinimap(){if(!this.mapCtx)return;const e=this.mapCtx,t=300,n=300,i=this.mapBounds,r=34,s=i.maxX-i.minX,o=i.maxZ-i.minZ,c=(t-r*2)/Math.max(s,o),h=(t-s*c)/2,f=(n-o*c)/2,d=(m,u)=>[h+(m-i.minX)*c,f+(u-i.minZ)*c];e.clearRect(0,0,t,n),e.fillStyle="rgba(8,8,9,0.55)",e.beginPath(),e.roundRect(0,0,t,n,18),e.fill(),e.strokeStyle="rgba(216,164,74,0.3)",e.lineWidth=2,e.stroke(),e.strokeStyle="rgba(230,220,190,0.72)",e.lineWidth=4,e.lineJoin="round",e.beginPath();for(let m=0;m<=ze;m+=8){const u=this.track.sampleAt(m),[p,x]=d(u.p.x,u.p.z);m===0?e.moveTo(p,x):e.lineTo(p,x)}e.closePath(),e.stroke();const l=this.track.samples[0],[g,v]=d(l.p.x,l.p.z);e.fillStyle="#e8dcc0",e.fillRect(g-3,v-3,6,6);for(const m of this.racers){const[u,p]=d(m.pos.x,m.pos.z);m.isPlayer?(e.save(),e.translate(u,p),e.rotate(-m.yaw+Math.PI),e.fillStyle="#ff4136",e.shadowBlur=12,e.shadowColor="#ff4136",e.beginPath(),e.moveTo(0,-9),e.lineTo(6,6),e.lineTo(0,2),e.lineTo(-6,6),e.closePath(),e.fill(),e.restore()):(e.fillStyle=m.boss?"#ffd166":m.pursuit?"#6aa6ff":"rgba(220,215,200,0.75)",e.beginPath(),e.arc(u,p,m.boss?5:3.2,0,7),e.fill())}e.save(),e.translate(t-30,28),e.strokeStyle="rgba(120,220,255,0.75)",e.lineWidth=2,e.beginPath(),e.moveTo(-12,0),e.lineTo(10,0),e.stroke(),e.beginPath(),e.moveTo(4,-4),e.lineTo(10,0),e.lineTo(4,4),e.stroke(),e.restore()}updateImpactParticles(e){for(let t=this.impact.length-1;t>=0;t--){const n=this.impact[t];if(n.life-=e,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.impact.splice(t,1);continue}n.mesh.position.y+=e*1.8,n.mesh.material.opacity=Math.max(0,n.life/.55)}}impactAt(e,t=1){var c,h,f,d,l,g;const n=this.gore==="off"?"#ffc46a":this.gore==="zombie"?"#6fbf38":"#a3151b",i=18,r=new Float32Array(i*3);for(let v=0;v<i;v++)r[v*3]=(Math.random()-.5)*2.4*t,r[v*3+1]=Math.random()*2,r[v*3+2]=(Math.random()-.5)*2.4*t;const s=new st;s.setAttribute("position",new Rt(r,3));const o=new zi(s,new ii({color:n,size:.36,transparent:!0,opacity:1,depthWrite:!1}));o.position.copy(e),this.scene.add(o),this.impact.push({mesh:o,life:.55}),this.gore!=="off"&&((h=(c=this.el)==null?void 0:c.flash)==null||h.classList.remove("gore"),(d=(f=this.el)==null?void 0:f.flash)==null||d.offsetWidth,(g=(l=this.el)==null?void 0:l.flash)==null||g.classList.add("gore"),setTimeout(()=>{var v,m;return(m=(v=this.el)==null?void 0:v.flash)==null?void 0:m.classList.remove("gore")},280))}spawnDust(e){if(this.dustCd>0)return;this.dustCd=.04;const t=new Float32Array(9);for(let r=0;r<3;r++)t[r*3]=(Math.random()-.5)*1.4,t[r*3+1]=.2+Math.random(),t[r*3+2]=(Math.random()-.5)*1.4;const n=new st;n.setAttribute("position",new Rt(t,3));const i=new zi(n,new ii({color:"#b8a078",size:.55,transparent:!0,opacity:.6,depthWrite:!1}));i.position.copy(e),this.scene.add(i),this.impact.push({mesh:i,life:.4})}flashScreen(){var e;(e=this.el)!=null&&e.flash&&(this.el.flash.classList.remove("lightning"),this.el.flash.offsetWidth,this.el.flash.classList.add("lightning"),setTimeout(()=>{var t,n;return(n=(t=this.el)==null?void 0:t.flash)==null?void 0:n.classList.remove("lightning")},320))}warn(e){var t;(t=this.el)!=null&&t.warning&&(this.warnHold=2.2,this.el.warning.textContent=e,this.el.warning.classList.remove("pulse"),this.el.warning.offsetWidth,this.el.warning.classList.add("pulse"))}finishRace(e){var n,i;if(this.state!=="racing")return;this.state="finished",this.finishReason=e,this.finished=!0;const t=this.player;t.finished=!0,t.finishOrder=++this.finishOrder,t.finishTime=this.raceTime,this.updatePositions(),this.finishing=1.4,Ee.stopEngine(),e==="finished"||e==="escaped"?Ee.sfx("win"):Ee.sfx("lose"),(n=this.el)!=null&&n.count&&(this.el.count.textContent=e==="wrecked"?"WRECKED":"FINISH",this.el.count.className="rh-count show "+(e==="wrecked"?"lose":"go")),(i=this.el)!=null&&i.tutorial&&this.el.tutorial.classList.remove("show"),this.updateHUD(.1)}deliverResults(){var r;if(this.delivered)return;this.delivered=!0;const e=[...this.racers].sort((s,o)=>s.finished&&o.finished?s.finishOrder-o.finishOrder:s.finished?-1:o.finished?1:o.lap*ze+o.index-(s.lap*ze+s.index)),t=e.findIndex(s=>s.isPlayer)+1,n=this.finishReason==="escaped"?!0:this.finishReason==="finished"?t===1||this.mode==="transport"||this.mode==="taxi":!1,i={mode:this.mode,reason:this.finishReason,success:n,position:t,total:this.racers.length,time:this.raceTime,bestLap:this.bestLap,hull:this.hull,cargo:this.cargo,comfort:this.comfort,laps:this.laps,terrain:this.terrain.id,weather:this.weather.id,bossId:((r=this.boss)==null?void 0:r.id)||null,standings:e.map(s=>{var o,c,h;return{name:s.isPlayer?this.player.name:s.name,isPlayer:!!s.isPlayer,boss:!!s.boss,vehicle:s.isPlayer?this.vehicle.name:((c=wi[(o=s.carDef)==null?void 0:o.vehicle])==null?void 0:c.name)||((h=s.carDef)==null?void 0:h.name)||"Rust Bucket",time:s.finishTime,finished:s.finished}})};this.onFinish(i)}setPaused(e){e!==this.paused&&(this.paused=e,e?Ee.stopEngine():(Ee.startEngine(),this.clock.getDelta()))}dispose(){this.disposed=!0,this.raf&&cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.resize),window.removeEventListener("keydown",this.keyHandler),window.removeEventListener("keyup",this.keyUp),window.removeEventListener("blur",this.blur),document.removeEventListener("visibilitychange",this.onVisibility),clearTimeout(this._toastTimer),Ee.stopEngine(),Ee.setScene("menu"),this.track.dispose();for(const e of this.impact)e.mesh.geometry.dispose(),e.mesh.material.dispose();this.impact=[],document.getElementById("race-ui").innerHTML="",this.renderer.setClearColor(723725,1)}}const C0=`
<svg viewBox="0 0 64 64" class="skull-icon" aria-hidden="true">
  <path d="M32 3C16 3 8 14 8 28c0 9 4 15 10 19l1 9c0 3 2 5 5 5h16c3 0 5-2 5-5l1-9c6-4 10-10 10-19C56 14 48 3 32 3Z" fill="currentColor"/>
  <path d="M19 27c0-6 4-10 10-10s9 4 9 9c0 5-3 8-8 9l-1 6h-7l-1-7c-2-2-2-4-2-7Zm20 0c0-5 3-9 8-9 5 0 9 4 9 10 0 3-1 5-3 7l-1 7h-7l-1-6c-3-1-5-4-5-9Z" fill="#090809"/>
  <path d="M27 24c2 0 3 2 3 4s-1 4-3 4-3-2-3-4 1-4 3-4Zm20 0c2 0 3 2 3 4s-1 4-3 4-3-2-3-4 1-4 3-4Z" fill="currentColor"/>
  <path d="M26 46h12v5H26zM22 50h4v6h-4zm16 0h4v6h-4z" fill="#090809"/>
  <path d="M15 12 5 2M49 12 59 2" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
</svg>`;function lc({compact:a=!1}={}){return`
  <div class="brand ${a?"compact":""}">
    <div class="brand-kicker"><span></span> WASTELAND VELOCITY <span></span></div>
    <h1 class="brand-title"><span class="brand-hell">HELL</span><span class="brand-ride">RIDE</span></h1>
    <div class="brand-sub">
      <i class="brand-slash"></i>
      <span>APOCALYPSE</span>
      <i class="brand-slash"></i>
    </div>
    <p class="brand-tag">DRIVE · BLEED · REPEAT</p>
  </div>`}function cc(){return`
  <svg viewBox="0 0 70 620" class="chain-svg" preserveAspectRatio="none">
    <g fill="none" stroke="currentColor" stroke-width="5">
      <path d="M35 0v620" opacity=".25"/>
      ${Array.from({length:19},(a,e)=>`<ellipse cx="35" cy="${8+e*32}" rx="${e%2?8:12}" ry="${e%2?15:18}" stroke-width="${e%2?4:5}" opacity="${.45+e%3*.14}"/>`).join("")}
    </g>
  </svg>`}function P0(){return`
  <div class="decor-layer">
    <div class="blood-splash blood-1"></div>
    <div class="blood-splash blood-2"></div>
    <div class="blood-splash blood-3"></div>
    <div class="chain chain-left">${cc()}</div>
    <div class="chain chain-right">${cc()}</div>
    <svg class="bone-pile" viewBox="0 0 280 150" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" opacity=".8">
        <path d="M30 122c25-23 45-25 67-9M211 118c-27-16-48-12-63 4M104 137c9-17 21-25 36-27"/>
        <path d="M90 117c-4-13 4-21 16-19 8 1 11 8 7 17-3 8-17 10-23 2Z"/>
        <path d="M168 120c5-15 19-18 27-9 5 6 1 15-7 18-9 3-17 1-20-9Z"/>
        <path d="M43 118l-12-8m12 8-9 13m168-12 13-8m-13 8 9 14"/>
      </g>
      <path d="M126 100c0-12 5-18 13-18 9 0 14 7 14 18l-3 21h-21l-3-21Z" fill="currentColor" opacity=".7"/>
      <circle cx="135" cy="96" r="3.4" fill="#090809"/><circle cx="145" cy="96" r="3.4" fill="#090809"/>
    </svg>
    <svg class="hanging-hook" viewBox="0 0 120 200" aria-hidden="true">
      <path d="M19 0v60c0 27 34 28 34 0V42" fill="none" stroke="currentColor" stroke-width="7"/>
      <path d="M53 47c0-10 7-17 16-17 20 0 26 19 11 32-8 7-21 4-23-8" fill="none" stroke="currentColor" stroke-width="6"/>
    </svg>
    <div class="ember-field"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
  </div>`}const L0=`
<h3>TERMS OF THE WASTELAND</h3>
<p><b>1. This is a game.</b> HELLRIDE: APOCALYPSE is a fictional, single-player browser game. All drivers, demigods, gangs, police, violence, gore, and apocalyptic weather are fictional. Nothing here is advice for real driving or survival.</p>
<p><b>2. Your profile.</b> Your profile, progress, vehicles, settings, and save slots are stored locally in this browser using <code>localStorage</code>. Clearing site data deletes your progress. There is no account recovery, no cloud save, and no personal data leaves this device.</p>
<p><b>3. Content controls.</b> The Gore setting can be set to Off, Blood, or Zombie Green Blood. Blood and body parts are stylized and low-resolution by design. This game is intended for teen and mature players.</p>
<p><b>4. Single player / local PvP.</b> “PvP” is a local duel against AI rivals in this build; it does not connect to other players or the internet. “Open map” quests are accessed from the mission map, not a continuous free-roam simulation.</p>
<p><b>5. Fair use.</b> Do not resell, misrepresent, or redistribute the game as your own work. Fonts are used under the SIL Open Font License. All other code and art are procedurally generated for this project.</p>
<p><b>6. No warranty.</b> The wasteland is provided “as is”. If a demigod eats your save file, that is canon.</p>
<p class="terms-foot">By continuing, you accept that the road is dead and you are still driving on it.</p>
`,ge=(a,e=document)=>e.querySelector(a),ct=(a,e=document)=>[...e.querySelectorAll(a)],ne=a=>String(a??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),I0=(a,e,t)=>Math.max(e,Math.min(t,a)),nn=a=>a[Math.floor(Math.random()*a.length)],mr=a=>{const e=["TH","ST","ND","RD"][a%100>10&&a%100<14?0:a%10]||"TH";return`${a}${e}`},D0=["#b9866b","#8c5b43","#6c4938","#d3a17d","#e0b99b","#4f3429","#a9b8c6","#8aa86b"],N0=[{id:"ice",x:150,y:112,rx:122,ry:72,rot:-8},{id:"mountains",x:334,y:94,rx:112,ry:66,rot:7},{id:"wasteland",x:520,y:120,rx:128,ry:68,rot:-4},{id:"jungle",x:735,y:132,rx:120,ry:72,rot:6},{id:"rainforest",x:872,y:250,rx:112,ry:84,rot:-10},{id:"dunes",x:155,y:282,rx:112,ry:78,rot:8},{id:"desert",x:330,y:260,rx:112,ry:82,rot:-5},{id:"warzone",x:505,y:272,rx:110,ry:76,rot:5},{id:"city",x:665,y:308,rx:118,ry:84,rot:-7},{id:"suburbs",x:812,y:402,rx:104,ry:78,rot:9},{id:"volcano",x:142,y:475,rx:112,ry:92,rot:-6},{id:"mines",x:324,y:452,rx:110,ry:86,rot:7},{id:"swamp",x:530,y:478,rx:116,ry:88,rot:-4},{id:"beach",x:742,y:548,rx:122,ry:76,rot:8},{id:"dystopia",x:884,y:532,rx:100,ry:82,rot:-9}],hc={m_acid_run:[80,28],m_sand_delivery:[15,42],m_fare_hell:[73,57],m_scrapyard_sprint:[50,62],m_neon_cup:[91,73],m_dead_tide_cup:[74,84],m_cinder_tournament:[46,81],m_gang_hunt:[52,43],m_police_siege:[63,39],m_pvp_duel:[36,37],m_ice_cup:[20,16],m_volcano_tour:[15,73],m_blood_moon:[8,56]},U0=[{id:"all",name:"All Contracts"},{id:"race",name:"Races"},{id:"job",name:"Jobs"},{id:"pursuit",name:"Pursuits"},{id:"event",name:"Events"}];function dc(a,e){return e==="all"?!0:e==="race"?["race","cup","tournament","pvp"].includes(a.type):e==="job"?["transport","taxi"].includes(a.type):e==="pursuit"?["gang","police"].includes(a.type):e==="event"?a.type==="event":!0}function js(a){return a&&(a.settings={...oo,...a.settings||{}},a.career=a.career||{defeated:[],current:0},a.career.defeated=a.career.defeated||[],a.completed=a.completed||{},a.vehicles=a.vehicles||["rust_reaper"],a.equipped=a.equipped||"rust_reaper",a.money=a.money||0,a.xp=a.xp||0,a.level=a.level||1,a.looks={...uc(a.gender||"female"),...a.looks||{}},a)}class O0{constructor(){this.store=new uh,this.app=ge("#app"),this.modals=ge("#modals"),this.decor=ge("#decor"),this.menuBg=new _0(ge("#menu-bg")),this.menuBg.setQuality("medium"),this.decor.innerHTML=P0(),this.screen="boot",this.filter="all",this.selectedMission=Bn[0],this.selectedVehicle="rust_reaper",this.draft=null,this.race=null,this.activeLaunch=null,this.series=null,this.garagePreview=null,this.mapOpen=!1,this.draftRandom=0,this._lastQuote="",this.bindGlobal(),this.store.persist(),setTimeout(()=>this.route("login"),120),window.hellride=this}bindGlobal(){this.audioPrimed=!1,document.addEventListener("pointerdown",()=>{if(this.audioPrimed)Ee.ensure();else{this.audioPrimed=!0,Ee.ensure();const e=this.store.profile();e&&Ee.setVolumes(e.settings),["login","menu","create","map","career","garage","settings","events"].includes(this.screen)&&Ee.setScene("menu")}},{capture:!0}),document.addEventListener("click",e=>{const t=e.target.closest("button");t&&!t.dataset.silent&&(t.dataset.action==="back"||t.classList.contains("modal-x")?Ee.sfx("back"):Ee.sfx("click"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.modals.firstElementChild&&!this.race&&this.closeModal()}),window.addEventListener("resize",()=>{var e,t;(t=(e=this.menuBg)==null?void 0:e.resize)==null||t.call(e)})}route(e){this.screen=e,document.body.dataset.screen=e,window.scrollTo(0,0);const t=["login","create","menu"].includes(e);this.decor.style.display=t?"block":"none";const n=ge("#menu-bg");n&&(n.style.visibility=t?"visible":"hidden"),t?this.menuBg.start():this.menuBg.stop(),e!=="garage"&&this.garagePreview&&(this.garagePreview.stop(),this.garagePreview=null),e==="login"?this.renderLogin():e==="create"?this.renderCreate():e==="menu"?this.renderMenu():e==="map"?this.renderMap():e==="career"?this.renderCareer():e==="garage"?this.renderGarage():e==="settings"?this.renderSettings():e==="events"&&this.renderEvents()}startMenuMusic(){const e=this.store.profile();Ee.ensure(),e&&Ee.setVolumes(e.settings),Ee.setScene("menu")}toast(e,t=""){const n=ge("#global-toast");n.textContent=e,n.className="global-toast show "+t,clearTimeout(this._toastT),this._toastT=setTimeout(()=>{n.className="global-toast "+t},2400)}showModal(e,t=""){this.modals.innerHTML=`<div class="modal-backdrop" data-modal-backdrop><div class="modal ${t}" role="dialog" aria-modal="true">${e}</div></div>`,document.body.classList.add("modal-open");const n=this.modals.firstElementChild;return n.addEventListener("click",i=>{i.target===n&&!n.dataset.locked&&this.closeModal()}),ct("[data-modal-close]",this.modals).forEach(i=>i.addEventListener("click",()=>this.closeModal())),this.modals.firstElementChild}closeModal(){this.modals.innerHTML="",document.body.classList.remove("modal-open")}paintPortraits(e=document){ct("canvas[data-profile]",e).forEach(t=>{var i;const n=this.store.state.profiles.find(r=>r.id===t.dataset.profile);n&&Wi(t,{...n.looks,name:n.name},{size:220,gore:(i=n.settings)==null?void 0:i.gore})}),ct("canvas[data-boss]",e).forEach(t=>{const n=Pi.find(i=>i.id===t.dataset.boss);n&&Wi(t,{...n.portrait,name:n.name},{size:360,boss:!0,gore:"blood",bg:n.boss?"#2c1113":"#211713"})})}renderLogin(){const e=this.store.profiles();this.app.innerHTML=`
      <section class="screen login-screen">
        <div class="screen-inner login-grid">
          <div class="login-copy">
            ${lc()}
            <p class="login-lede">The oceans are acid. The roads are bones. The only law left is a finish line — and three demigods who refuse to lose.</p>
            <div class="world-stats">
              <div><b>15</b><span>DEAD TERRITORIES</span></div>
              <div><b>8</b><span>WEATHER HELLS</span></div>
              <div><b>11</b><span>BOSS DRIVERS</span></div>
              <div><b>∞</b><span>BAD DECISIONS</span></div>
            </div>
            <div class="login-badges">
              <span>☠ Single player</span><span>☣ 15 terrains</span><span>ϟ Living weather</span><span>⚙ Mobile controls</span>
            </div>
            <div class="login-links">
              <button class="link-btn" data-action="terms">TERMS &amp; CONDITIONS</button>
              <button class="link-btn" data-action="how">HOW TO PLAY</button>
            </div>
          </div>
          <aside class="panel login-panel">
            <div class="panel-head">
              <div><span class="kicker">PROFILE ACCESS</span><h2>WHO'S DRIVING?</h2></div>
              <b class="record-count">${String(e.length).padStart(2,"0")} ON RECORD</b>
            </div>
            ${e.length?`<div class="profile-list">
              ${e.map(t=>`
                <div class="profile-row">
                  <button class="profile-card" data-login="${t.id}" aria-label="Log in as ${ne(t.name)}">
                    <canvas class="profile-avatar" data-profile="${t.id}" width="220" height="220"></canvas>
                    <span class="profile-copy">
                      <b>${ne(t.name)}</b>
                      <span>LEVEL ${t.level} · ${It(t.money)}</span>
                      <em>${t.tutorialDone?"Tutorial cleared":"Tutorial pending"} · ${t.career.defeated.length}/11 bosses broken</em>
                    </span>
                    <span class="profile-enter">ENTER ▶</span>
                  </button>
                  <button class="profile-del" data-del="${t.id}" aria-label="Delete profile">✕</button>
                </div>`).join("")}
            </div>`:`
              <div class="empty-profiles">
                <div class="empty-skull">${C0}</div>
                <b>NO SURVIVORS ON RECORD</b>
                <p>The wasteland is empty. Make a driver worth haunting it.</p>
              </div>`}
            <button class="btn btn-primary btn-large" data-action="new-profile">${e.length?"CREATE ANOTHER SURVIVOR":"CREATE YOUR SURVIVOR"}</button>
            <div class="panel-foot">
              <span>LOCAL PROFILE · NO SIGN-UP</span>
              <span>AUTOSAVE ${this.store.profile()?"ON":"READY"}</span>
            </div>
          </aside>
        </div>
        <div class="screen-foot"><span>HELLRIDE: APOCALYPSE</span><span>BUILD 1.0 · WASTELAND VELOCITY</span><span>NO GODS. THREE DEMIGODS.</span></div>
      </section>`,this.paintPortraits(this.app),this.bindLogin(),this.store.profile()&&this.startMenuMusic()}bindLogin(){var e,t,n;ct("[data-login]",this.app).forEach(i=>i.addEventListener("click",()=>{const r=this.store.login(i.dataset.login);r&&(js(r),this.store.persist(),this.startMenuMusic(),this.route("menu"),this.toast(`WELCOME BACK, ${r.name}`,"good"))})),ct("[data-del]",this.app).forEach(i=>i.addEventListener("click",r=>{r.stopPropagation();const s=this.store.state.profiles.find(o=>o.id===i.dataset.del);s&&(this.showModal(`
        <div class="modal-kicker danger-text">DELETE PROFILE</div>
        <h2>BURY ${ne(s.name)}?</h2>
        <p class="modal-lede">The driver, their garage, their kills and their saves will be gone. There is no resurrection in this wasteland.</p>
        <div class="modal-actions">
          <button class="btn btn-ghost" data-modal-close>CANCEL</button>
          <button class="btn btn-danger" data-confirm-del="${s.id}">DELETE FOREVER</button>
        </div>`),ge("[data-confirm-del]",this.modals).addEventListener("click",()=>{this.store.remove(s.id),this.closeModal(),this.renderLogin(),this.toast("PROFILE ERASED","bad")}))})),(e=ge('[data-action="new-profile"]',this.app))==null||e.addEventListener("click",()=>this.startCreate()),(t=ge('[data-action="terms"]',this.app))==null||t.addEventListener("click",()=>this.showTerms()),(n=ge('[data-action="how"]',this.app))==null||n.addEventListener("click",()=>this.showHowTo())}showTerms(){this.showModal(`<div class="modal-kicker">LEGAL · THE FINE PRINT</div>${L0}<div class="modal-actions"><button class="btn btn-primary" data-modal-close>I ACCEPT THE APOCALYPSE</button></div>`,"legal-modal")}showHowTo(){this.showModal(`
      <div class="modal-kicker">FIELD MANUAL</div>
      <h2>HOW TO NOT DIE</h2>
      <div class="how-grid">
        <div><b>LEFT SIDE</b><p>Two turn pedals. Left turns left. Right turns right. Physics does the arguing.</p></div>
        <div><b>RIGHT SIDE</b><p>Accelerate, stop/reverse, handbrake, nitro and your origin's special move. Five pedals, one bad idea.</p></div>
        <div><b>WEATHER</b><p>Wind pushes. Acid eats. Lightning strikes. Quicksand drinks. Read the warning strip.</p></div>
        <div><b>OBJECTIVES</b><p>Win races. Protect cargo. Keep the fare breathing. Outrun police. Survive the pack.</p></div>
        <div><b>BOSSES</b><p>Eight underbosses guard the ladder. Then Mandy-Lee, Zanrich and Drikus the Insane.</p></div>
        <div><b>SAVE</b><p>Everything autosaves. Three manual slots live in Settings.</p></div>
      </div>
      <div class="modal-actions"><button class="btn btn-primary" data-modal-close>BACK TO THE ROAD</button></div>`,"how-modal")}startCreate(){this.draft={name:"",gender:"female",origin:"human",face:"sharp",hair:"mohawk",hairColor:"black",eyeStyle:"human",eyeColor:"blue",facialHair:"none",scar:"eye",headgear:"none",skin:mt[0].skin},this.route("create")}chipOptions(e,t,n,i={}){return t.map(r=>{const s=r.value||r.id,o=n===s?" active":"";return i.colors?`<button class="swatch${o}" data-field="${e}" data-value="${s}" title="${ne(r.label)}"><i style="background:${r.value}"></i><span>${ne(r.label)}</span></button>`:`<button class="chip${o}" data-field="${e}" data-value="${s}">${ne(r.label)}</button>`}).join("")}renderCreate(){const e=this.draft||{},t=mt.find(n=>n.id===e.origin)||mt[0];this.app.innerHTML=`
      <section class="screen create-screen">
        <div class="screen-inner create-grid">
          <div class="create-preview panel">
            <div class="preview-kicker">SURVIVOR FILE · 001</div>
            <div class="portrait-frame big">
              <canvas id="createPortrait" width="512" height="512"></canvas>
              <div class="scanlines"></div>
              <span class="portrait-stamp">${t.name.toUpperCase()}</span>
            </div>
            <div class="preview-id">
              <b id="previewName">UNNAMED</b>
              <span id="previewMeta">${e.gender.toUpperCase()} · ${t.name.toUpperCase()} · LEVEL 1</span>
            </div>
            <p class="preview-bonus" id="previewBonus"><b>ORIGIN BONUS:</b> ${ne(t.bonus)}</p>
            <button class="btn btn-ghost" data-action="randomize">⟳ RANDOMIZE FACE</button>
            <div class="preview-warning">☠ Appearance is permanent. The wasteland does not do refunds.</div>
          </div>
          <div class="create-form panel">
            <div class="panel-head">
              <div><span class="kicker">NEW PROFILE</span><h2>BUILD A SURVIVOR</h2></div>
              <button class="modal-x inline" data-action="back" aria-label="Back">✕</button>
            </div>
            <div class="field name-field">
              <label for="nameInput">DRIVER NAME <span>type anything · max 14</span></label>
              <input id="nameInput" class="text-input" maxlength="14" autocomplete="off" spellcheck="false" placeholder="ENTER NAME" value="${ne(e.name)}" />
            </div>
            <div class="field">
              <label>GENDER</label>
              <div class="segmented">${ah.map(n=>`<button class="seg${e.gender===n.id?" active":""}" data-field="gender" data-value="${n.id}">${n.label}</button>`).join("")}</div>
            </div>
            <div class="field">
              <label>ORIGIN <span>all origins are playable</span></label>
              <div class="origin-grid">
                ${mt.map((n,i)=>`<button class="origin-card${e.origin===n.id?" active":""}" data-field="origin" data-value="${n.id}">
                  <b>${["☥","☣","◌","☠","♆","ϟ"][i]}</b>
                  <span>${n.name.toUpperCase()}</span>
                  <em>${n.bonus}</em>
                </button>`).join("")}
              </div>
            </div>
            <div class="field">
              <label>SKIN TONE</label>
              <div class="chips">${D0.map(n=>`<button class="swatch simple${e.skin===n?" active":""}" data-field="skin" data-value="${n}" aria-label="Skin tone"><i style="background:${n}"></i></button>`).join("")}</div>
            </div>
            <div class="form-grid">
              <div class="field"><label>FACE STYLE</label><div class="chips">${this.chipOptions("face",Bo,e.face)}</div></div>
              <div class="field"><label>HAIR STYLE</label><div class="chips">${this.chipOptions("hair",Aa,e.hair)}</div></div>
              <div class="field wide"><label>HAIR COLOR</label><div class="chips swatches">${this.chipOptions("hairColor",vr,e.hairColor,{colors:!0})}</div></div>
              <div class="field"><label>EYES</label><div class="chips">${this.chipOptions("eyeStyle",zo,e.eyeStyle)}</div></div>
              <div class="field"><label>EYE COLOR</label><div class="chips swatches">${this.chipOptions("eyeColor",is,e.eyeColor,{colors:!0})}</div></div>
              <div class="field"><label>FACIAL HAIR</label><div class="chips">${this.chipOptions("facialHair",Ho,e.facialHair)}</div></div>
              <div class="field"><label>SCARS</label><div class="chips">${this.chipOptions("scar",Ra,e.scar)}</div></div>
              <div class="field wide"><label>ACCESSORY</label><div class="chips">${this.chipOptions("headgear",Go,e.headgear)}</div></div>
            </div>
            <div class="create-actions">
              <button class="btn btn-ghost" data-action="back">◀ BACK</button>
              <button class="btn btn-primary btn-large" data-action="create-submit">ENTER THE WASTELAND ▶</button>
            </div>
            <p class="hint">Profile is stored locally. You can save to three manual slots in Settings.</p>
          </div>
        </div>
        <div class="screen-foot"><span>IDENTITY IS A WEAPON</span><span>${mt.length} ORIGINS · ${Aa.length} HAIRSTYLES · ${Ra.length} SCARS · ${is.length} EYE COLORS</span></div>
      </section>`,this.paintCreatePreview(),this.bindCreate()}paintCreatePreview(){const e=this.draft,t=ge("#createPortrait",this.app);if(!t)return;Wi(t,{...e,name:e.name},{size:512,gore:"blood",bg:"#2a1113"});const n=mt.find(r=>r.id===e.origin)||mt[0];ge("#previewName").textContent=(e.name||"UNNAMED").toUpperCase(),ge("#previewMeta").textContent=`${e.gender.toUpperCase()} · ${n.name.toUpperCase()} · LEVEL 1`,ge("#previewBonus").innerHTML=`<b>ORIGIN BONUS:</b> ${ne(n.bonus)}`;const i=ge(".portrait-stamp",this.app);i&&(i.textContent=n.name.toUpperCase())}bindCreate(){var t,n,i;const e=ge("#nameInput",this.app);e.addEventListener("input",()=>{this.draft.name=e.value.toUpperCase().slice(0,14),ge("#previewName").textContent=this.draft.name||"UNNAMED"}),ct("[data-field]",this.app).forEach(r=>r.addEventListener("click",()=>{const{field:s,value:o}=r.dataset;if(s){if(this.draft[s]=o,ct(`[data-field="${s}"]`,this.app).forEach(c=>c.classList.toggle("active",c.dataset.value===o)),s==="origin"){const c=mt.find(h=>h.id===o);c&&(this.draft.skin=c.skin,ct('[data-field="skin"]',this.app).forEach(h=>h.classList.toggle("active",h.dataset.value===c.skin)))}this.paintCreatePreview()}})),(t=ge('[data-action="randomize"]',this.app))==null||t.addEventListener("click",()=>{const r=this.draft;r.face=nn(Bo).id,r.hair=nn(Aa).id,r.hairColor=nn(vr).id,r.eyeColor=nn(is).id,r.eyeStyle=nn(zo).id,r.facialHair=nn(Ho).id,r.scar=nn(Ra).id,r.headgear=nn(Go).id,r.origin=nn(mt).id,r.gender=Math.random()>.5?"female":"male",r.skin=(mt.find(s=>s.id===r.origin)||mt[0]).skin,this.renderCreate(),this.toast("NEW FACE, SAME BAD FUTURE","good")}),(n=ge('[data-action="back"]',this.app))==null||n.addEventListener("click",()=>this.route("login")),(i=ge('[data-action="create-submit"]',this.app))==null||i.addEventListener("click",()=>{const r=(ge("#nameInput",this.app).value||"").trim().toUpperCase().slice(0,14)||"NAMELESS";mt.find(o=>o.id===this.draft.origin)||mt[0];const s=this.store.create({name:r,gender:this.draft.gender,origin:this.draft.origin,looks:{...this.draft,name:r,origin:this.draft.origin}});js(s),this.store.login(s.id),this.startMenuMusic(),this.route("menu"),this.toast(`PROFILE CREATED · ${s.name}`,"good")})}getProfile(){const e=this.store.profile();return e?js(e):null}bossState(e){const t=this.getProfile();if(!t)return"locked";if(t.career.defeated.includes(e.id))return"defeated";const n=t.career.defeated.length;return e.order<=n+1?"available":"locked"}nextBoss(){const e=this.getProfile();return e&&Pi.find(t=>!e.career.defeated.includes(t.id)&&t.order<=e.career.defeated.length+1)||null}xpProgress(e){const t=e.level||1,n=250*Math.pow(t-1,2),i=250*Math.pow(t,2);return I0(((e.xp||0)-n)/Math.max(1,i-n),0,1)}renderMenu(){const e=this.getProfile();if(!e)return this.route("login");const t=nn(hh.filter(h=>h!==this._lastQuote));this._lastQuote=t;const n=this.nextBoss(),i=e.vehicles.length,r=(e.settings.master||0)<=.01,s=bt[(new Date().getDate()+e.level)%bt.length],o=pt.find(h=>h.id===e.equipped)||pt[0],c=this.xpProgress(e);this.app.innerHTML=`
      <section class="screen menu-screen">
        <header class="menu-hud">
          <button class="profile-hud" data-action="profile">
            <canvas class="hud-avatar" data-profile="${e.id}" width="180" height="180"></canvas>
            <span><b>${ne(e.name)}</b><em>LEVEL ${e.level} · ${ne((mt.find(h=>h.id===e.origin)||mt[0]).name.toUpperCase())}</em><span class="xp-mini"><i style="width:${Math.round(c*100)}%"></i></span></span>
          </button>
          <div class="hud-money">
            <span>SCRAP</span><b>${It(e.money)}</b>
          </div>
          <div class="hud-car">
            <span>ACTIVE VEHICLE</span><b>${ne(o.name)}</b>
          </div>
          <div class="top-actions">
            <button class="icon-btn" data-action="mute" aria-label="Toggle sound">${r?"🔇":"🔊"}</button>
            <button class="icon-btn" data-action="fullscreen" aria-label="Fullscreen">⛶</button>
            <button class="icon-btn" data-action="logout" aria-label="Log out">⏻</button>
          </div>
        </header>
        <div class="menu-main">
          <div class="menu-left">
            ${lc()}
            <p class="menu-lede">${ne(t)}</p>
            <nav class="main-nav">
              <button class="menu-btn primary" data-action="start">
                <span class="mn">01</span>
                <span class="mt"><b>START GAME</b><em>${e.tutorialDone?"Open the wasteland map":"Tutorial: controls + first lap"}</em></span>
                <span class="ma">▶</span>
              </button>
              <button class="menu-btn" data-action="continue">
                <span class="mn">02</span>
                <span class="mt"><b>CONTINUE</b><em>${e.career.defeated.length}/11 bosses · ${It(e.money)}</em></span>
                <span class="ma">▶</span>
              </button>
              <button class="menu-btn" data-action="missions">
                <span class="mn">03</span><span class="mt"><b>MISSIONS</b><em>Open map · 13 contracts + events</em></span><span class="ma">▶</span>
              </button>
              <button class="menu-btn" data-action="career">
                <span class="mn">04</span><span class="mt"><b>CAREER</b><em>8 underbosses · 3 demigods</em></span><span class="ma">▶</span>
              </button>
              <button class="menu-btn" data-action="garage">
                <span class="mn">05</span><span class="mt"><b>GARAGE</b><em>${i}/${pt.length} vehicles acquired</em></span><span class="ma">▶</span>
              </button>
              <button class="menu-btn" data-action="settings">
                <span class="mn">06</span><span class="mt"><b>SETTINGS</b><em>Sound · video · gore · saves · terms</em></span><span class="ma">⚙</span>
              </button>
              <button class="menu-btn danger" data-action="exit">
                <span class="mn">07</span><span class="mt"><b>EXIT GAME</b><em>Leave the wasteland</em></span><span class="ma">⏻</span>
              </button>
            </nav>
          </div>
          <aside class="menu-side">
            <div class="next-contract panel">
              <div class="panel-kicker"><span>NEXT CONTRACT</span><b>${n?"#"+String(n.order).padStart(2,"0"):"CLEARED"}</b></div>
              ${n?`
                <div class="next-boss">
                  <canvas class="next-portrait" data-boss="${n.id}" width="360" height="360"></canvas>
                  <div>
                    <span class="boss-tag">${n.underboss?"UNDERBOSS":"MAIN BOSS"}</span>
                    <b>${ne(n.name)}</b>
                    <em>${ne(n.title)}</em>
                  </div>
                </div>
                <p class="next-quote">“${ne(n.quote)}”</p>
                <div class="next-meta"><span>${yt.find(h=>h.id===n.terrain).short}</span><span>${bt.find(h=>h.id===n.weather).name}</span><span>${n.laps} LAPS</span></div>
                <div class="reward-line"><span>BOUNTY</span><b>${It(n.reward)}</b></div>
                <button class="btn btn-danger btn-block" data-action="next-boss">CHALLENGE ${n.name.toUpperCase()}</button>
              `:`
                <div class="all-clear"><span>☠</span><b>THE WASTELAND BOWS</b><p>Every boss is broken. Keep racing for blood and scrap.</p><button class="btn btn-primary btn-block" data-action="missions">KEEP DRIVING</button></div>
              `}
            </div>
            <div class="menu-stats panel">
              <div class="panel-kicker"><span>DRIVER RECORD</span><b>${e.tutorialDone?"ACTIVE":"TRAINEE"}</b></div>
              <div class="stat-grid">
                <div><b>${e.victories||0}</b><span>WINS</span></div>
                <div><b>${e.races||0}</b><span>RACES</span></div>
                <div><b>${e.career.defeated.length}</b><span>BOSSES</span></div>
                <div><b>${e.bestLap?In(e.bestLap):"—"}</b><span>BEST LAP</span></div>
              </div>
              <div class="weather-line"><i>${s.icon}</i><div><b>${s.name.toUpperCase()}</b><span>${s.desc}</span></div><em>WIND ${s.wind.toFixed(1)}</em></div>
            </div>
            <div class="autosave-note">
              <span class="save-dot"></span>
              <div class="autosave-copy">
                <b>AUTOSAVED</b>
                <span>${e.autosave?`${ne(e.autosave.date)} · ${ne(e.autosave.time)}`:"LOCAL PROFILE"}</span>
                <em>${e.autosave?ne(e.autosave.location):"NO SAVE YET"}</em>
              </div>
            </div>
          </aside>
        </div>
        <div class="screen-foot"><span>HELLRIDE: APOCALYPSE</span><span>BUILT FOR TOUCH · WASD ON DESKTOP</span><span>v1.0</span></div>
      </section>`,this.paintPortraits(this.app),this.bindMenu(),this.startMenuMusic()}bindMenu(){const e=this.getProfile(),t={missions:()=>this.route("map"),career:()=>this.route("career"),garage:()=>this.route("garage"),settings:()=>this.route("settings")};ct("[data-action]",this.app).forEach(n=>n.addEventListener("click",()=>{const i=n.dataset.action;if(i==="start")e.tutorialDone?this.route("map"):this.startTutorial();else if(i==="continue")e.tutorialDone?this.route("map"):(this.showModal('<div class="modal-kicker">TRAINING INCOMPLETE</div><h2>THE WASTELAND IS WAITING</h2><p class="modal-lede">Your first race is a tutorial of the controls and survival systems. Finish it before the map opens — or jump in and learn by bleeding.</p><div class="modal-actions"><button class="btn btn-ghost" data-modal-close>STAY</button><button class="btn btn-primary" data-action="skip-tutorial">OPEN MAP ANYWAY</button></div>'),ge('[data-action="skip-tutorial"]',this.modals).addEventListener("click",()=>{this.closeModal(),this.route("map")}));else if(t[i])t[i]();else if(i==="next-boss"){const r=this.nextBoss();r&&this.launchBoss(r)}else i==="profile"?this.showProfile():i==="logout"?this.confirmLogout():i==="mute"?this.toggleMute():i==="fullscreen"?this.toggleFullscreen():i==="exit"&&this.showExit()}))}showProfile(){const e=this.getProfile();if(!e)return;const t=mt.find(r=>r.id===e.origin)||mt[0],n=pt.find(r=>r.id===e.equipped)||pt[0];this.showModal(`
      <div class="profile-modal-grid">
        <div class="portrait-frame"><canvas id="profileBig" width="420" height="420"></canvas><span class="portrait-stamp">${t.name.toUpperCase()}</span></div>
        <div>
          <div class="modal-kicker">DRIVER DOSSIER</div>
          <h2>${ne(e.name)}</h2>
          <p class="modal-lede">${ne(t.blurb)} <b>${ne(t.bonus)}.</b></p>
          <div class="stat-grid">
            <div><b>${e.victories||0}</b><span>WINS</span></div>
            <div><b>${e.races||0}</b><span>RACES</span></div>
            <div><b>${e.career.defeated.length}/11</b><span>BOSSES</span></div>
            <div><b>${It(e.money)}</b><span>SCRAP</span></div>
          </div>
          <div class="dossier-line"><span>ACTIVE VEHICLE</span><b>${ne(n.name)}</b></div>
          <div class="dossier-line"><span>TUTORIAL</span><b>${e.tutorialDone?"CLEARED":"PENDING"}</b></div>
          <div class="dossier-line"><span>BEST LAP</span><b>${e.bestLap?In(e.bestLap):"NO DATA"}</b></div>
          <div class="dossier-line"><span>LAST AUTOSAVE</span><b>${e.autosave?`${ne(e.autosave.date)} · ${ne(e.autosave.time)}`:"NONE"}</b></div>
          <div class="dossier-line"><span>SAVED AT</span><b>${e.autosave?ne(e.autosave.location):"—"}</b></div>
          <div class="modal-actions"><button class="btn btn-primary" data-modal-close>BACK</button></div>
        </div>
      </div>`);const i=ge("#profileBig",this.modals);Wi(i,{...e.looks,name:e.name},{size:420,bg:"#2b1113",gore:e.settings.gore})}confirmLogout(){this.showModal('<div class="modal-kicker">END SESSION</div><h2>LOG OUT?</h2><p class="modal-lede">Your progress is autosaved. The wasteland will keep your grave warm.</p><div class="modal-actions"><button class="btn btn-ghost" data-modal-close>CANCEL</button><button class="btn btn-danger" data-action="do-logout">LOG OUT</button></div>'),ge('[data-action="do-logout"]',this.modals).addEventListener("click",()=>{this.store.logout(),this.store.persist(),this.closeModal(),this.route("login")})}toggleMute(){const e=this.getProfile();if(e){if((e.settings.master||0)>.01)this._preMute=e.settings.master,this.store.updateSettings({master:0}),Ee.setVolumes({master:0}),this.toast("SOUND OFF","");else{const t=this._preMute||.8;this.store.updateSettings({master:t}),Ee.setVolumes({master:t}),this.toast("SOUND ON","good")}this.renderMenu()}}toggleFullscreen(){var e,t,n,i,r;document.fullscreenElement?(r=document.exitFullscreen)==null||r.call(document):((i=(t=(e=document.documentElement).requestFullscreen)==null?void 0:(n=t.call(e)).catch)==null||i.call(n,()=>{}),this.toast("FULLSCREEN REQUESTED","good"))}showExit(){this.showModal(`
      <div class="modal-kicker danger-text">EXIT GAME</div>
      <h2>ABANDON THE WASTELAND?</h2>
      <p class="modal-lede">The browser cannot be closed by a web page. Logging out returns you to profile access. Your save remains on this device until you delete it.</p>
      <div class="modal-actions">
        <button class="btn btn-ghost" data-modal-close>KEEP DRIVING</button>
        <button class="btn btn-danger" data-action="exit-logout">LOG OUT &amp; EXIT</button>
      </div>`),ge('[data-action="exit-logout"]',this.modals).addEventListener("click",()=>{this.store.logout(),this.closeModal(),this.route("login"),this.toast("THE WASTELAND WILL WAIT","bad")})}mapSvg(){const e=N0.map(n=>{const i=yt.find(r=>r.id===n.id)||yt[0];return`
        <g class="map-zone" transform="translate(${n.x} ${n.y}) rotate(${n.rot})">
          <ellipse rx="${n.rx}" ry="${n.ry}" fill="${i.ground}" opacity=".26"/>
          <ellipse rx="${n.rx}" ry="${n.ry}" fill="none" stroke="${i.accent}" stroke-opacity=".38" stroke-dasharray="5 7" stroke-width="2"/>
          <text y="${n.ry-10}" text-anchor="middle" class="zone-name">${ne(i.short)}</text>
          <text y="${n.ry+8}" text-anchor="middle" class="zone-icon">${i.icon}</text>
        </g>`}).join(""),t=Object.values(hc).map(([n,i])=>`${n*10},${i*6.8}`).join(" ");return`
      <svg class="wasteland-map-svg" viewBox="0 0 1000 680" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="mapSky" cx="48%" cy="42%" r="75%">
            <stop offset="0" stop-color="#37261f"/><stop offset=".55" stop-color="#201714"/><stop offset="1" stop-color="#0b0a0a"/>
          </radialGradient>
          <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="rgba(220,183,115,.055)" stroke-width="1"/>
          </pattern>
          <filter id="softGlow"><feGaussianBlur stdDeviation="7" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          <pattern id="hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="rgba(0,0,0,.18)" stroke-width="3"/>
          </pattern>
        </defs>
        <rect width="1000" height="680" fill="url(#mapSky)"/>
        <rect width="1000" height="680" fill="url(#mapGrid)"/>
        <g opacity=".85">${e}</g>
        <g class="map-rivers">
          <path d="M-40 540 C120 470 170 390 260 340 S430 350 510 300 S680 390 760 300 S880 210 1030 240" fill="none" stroke="#33524f" stroke-opacity=".35" stroke-width="18"/>
          <path d="M-20 190 C140 240 230 190 330 210 S520 150 630 210 S820 200 1020 160" fill="none" stroke="#4d4132" stroke-opacity=".42" stroke-width="16"/>
        </g>
        <polyline points="${t}" fill="none" stroke="#b8965e" stroke-opacity=".25" stroke-width="5" stroke-dasharray="2 9" stroke-linecap="round"/>
        <g class="map-frame">
          <path d="M32 32h180M32 32v120" fill="none" stroke="#b8975e" stroke-opacity=".55" stroke-width="2"/>
          <path d="M968 32H788M968 32v120" fill="none" stroke="#b8975e" stroke-opacity=".55" stroke-width="2"/>
          <path d="M32 648h180M32 648v-120" fill="none" stroke="#b8975e" stroke-opacity=".55" stroke-width="2"/>
          <path d="M968 648H788M968 648v-120" fill="none" stroke="#b8975e" stroke-opacity=".55" stroke-width="2"/>
          <text x="500" y="52" text-anchor="middle" class="map-title-svg">THE GREAT WASTES</text>
          <text x="500" y="70" text-anchor="middle" class="map-sub-svg">15 TERRITORIES · 8 WEATHER HELLS · NO EXIT</text>
          <g transform="translate(924 600)" class="compass">
            <circle r="30" fill="none" stroke="#b8975e" stroke-opacity=".45"/>
            <path d="M0-25 7 4 0 0-7 4Z" fill="#d3aa62" opacity=".9"/>
            <text y="45" text-anchor="middle">N</text>
          </g>
        </g>
      </svg>`}renderMap(){var f;const e=this.getProfile();if(!e)return this.route("login");const t=Bn.filter(d=>dc(d,this.filter));t.find(d=>d.id===this.selectedMission.id)||(this.selectedMission=t[0]||Bn[0]);const n=this.selectedMission,i=yt.find(d=>d.id===n.terrain),r=bt.find(d=>d.id===n.weather),s=cn.find(d=>d.id===n.difficulty)||cn[1],o=e.completed[n.id],c=Pa[n.type],h=n.type==="cup"||n.type==="tournament"?3:null;this.app.innerHTML=`
      <section class="screen map-screen">
        <header class="sub-hud">
          <button class="btn btn-ghost btn-small" data-action="back">◀ MENU</button>
          <div class="sub-title"><span class="kicker">OPERATIONS</span><h2>WASTELAND MAP</h2></div>
          <div class="sub-nav">
            <button class="sub-nav-btn" data-action="career">CAREER</button>
            <button class="sub-nav-btn" data-action="garage">GARAGE</button>
            <button class="sub-nav-btn" data-action="events">EVENTS <i class="live-dot"></i></button>
            <button class="sub-nav-btn" data-action="settings">SETTINGS</button>
          </div>
          <div class="sub-profile">
            <canvas class="mini-avatar" data-profile="${e.id}" width="140" height="140"></canvas>
            <span><b>${ne(e.name)}</b><em>LVL ${e.level} · ${It(e.money)}</em></span>
          </div>
        </header>
        <div class="map-layout">
          <div class="map-main">
            <div class="map-toolbar">
              <div class="filter-row">
                ${U0.map(d=>`<button class="filter-chip${this.filter===d.id?" active":""}" data-filter="${d.id}">${d.name}<b>${Bn.filter(l=>dc(l,d.id)).length}</b></button>`).join("")}
              </div>
              <div class="map-sky"><i>${bt[(e.level+new Date().getDate())%8].icon}</i> SKY: ${bt[(e.level+new Date().getDate())%8].name.toUpperCase()} <span>LIVE</span></div>
            </div>
            <div class="map-stage" id="mapStage">
              ${this.mapSvg()}
              <div class="map-pins">
                ${t.map(d=>{const[l,g]=hc[d.id]||[50,50],v=Pa[d.type],m=e.completed[d.id];return`<button class="map-pin ${d.type} ${this.selectedMission.id===d.id?"selected":""} ${m?"done":""} ${d.type==="event"?"event-pin":""}" style="left:${l}%;top:${g}%" data-mission="${d.id}" aria-label="${ne(d.name)}">
                    <span class="pin-head"><i>${v.icon}</i></span>
                    <span class="pin-tag"><b>${ne(d.name)}</b><em>${yt.find(u=>u.id===d.terrain).short} · ${v.name}</em></span>
                  </button>`}).join("")}
              </div>
              <div class="map-legend"><span><i class="pin-dot race"></i> RACE</span><span><i class="pin-dot job"></i> JOB</span><span><i class="pin-dot pursuit"></i> PURSUIT</span><span><i class="pin-dot event"></i> EVENT</span></div>
            </div>
            <div class="map-note"><span>☠</span> OPEN MAP QUESTS · SELECT A PIN · SECTORS ARE REPRESENTATIVE, NOT WALKABLE</div>
          </div>
          <aside class="mission-panel panel">
            <div class="mission-head">
              <span class="mission-type"><i>${c.icon}</i>${c.name.toUpperCase()}</span>
              ${o?`<span class="completed-stamp">CLEARED ×${o.wins}</span>`:n.event?'<span class="event-stamp">LIMITED EVENT</span>':'<span class="new-stamp">OPEN</span>'}
            </div>
            <h2 class="mission-name">${ne(n.name)}</h2>
            <p class="mission-blurb">${ne(n.blurb)}</p>
            <div class="mission-chips">
              <span><i>${i.icon}</i>${i.name}</span>
              <span><i>${r.icon}</i>${r.name}</span>
              <span class="${s.id}">${s.name}</span>
              <span>${h?`3 HEATS · ${n.laps} LAPS`:n.type==="gang"||n.type==="police"?"SURVIVE 60s":`${n.laps} LAPS`}</span>
            </div>
            <div class="objective-box">
              <b>OBJECTIVE</b>
              <p>${n.type==="transport"?"Deliver the cargo. Keep integrity above zero. Walls are expensive.":n.type==="taxi"?"Deliver the passenger. Comfort above zero. They paid in advance.":n.type==="gang"||n.type==="police"?"Survive 60 seconds of pursuit. Hull zero means a closed casket.":n.type==="pvp"?"Beat your rival. Local AI stand-in. No excuses.":n.type==="cup"||n.type==="tournament"?"Score at least 20 championship points across three heats.":"Finish first. Weather does not care about your feelings."}</p>
            </div>
            ${n.vehicleReward?`<div class="vehicle-reward"><span class="vr-icon">${n.event?"☄":"⚙"}</span><div><b>VEHICLE UNLOCK</b><span>${ne(((f=pt.find(d=>d.id===n.vehicleReward))==null?void 0:f.name)||n.vehicleReward)}</span></div>${e.vehicles.includes(n.vehicleReward)?"<em>OWNED</em>":"<em>REWARD</em>"}</div>`:""}
            <div class="reward-grid">
              <div><span>BOUNTY</span><b>${It(n.reward)}</b></div>
              <div><span>XP</span><b>${n.xp}</b></div>
              <div><span>RISK</span><b class="risk-${s.id}">${s.name.toUpperCase()}</b></div>
            </div>
            <div class="weather-note"><i>${r.icon}</i><span><b>${r.name.toUpperCase()}</b>${r.desc}</span><em>GRIP ${(r.grip*100).toFixed(0)}% · WIND ${r.wind.toFixed(1)}</em></div>
            <button class="btn btn-danger btn-block btn-large" data-action="launch-mission" data-mission="${n.id}">${o?"REPLAY CONTRACT":"ACCEPT CONTRACT"} ▶</button>
            <p class="panel-hint">Single player · Local save · PvP is AI</p>
          </aside>
        </div>
        <div class="screen-foot"><span>WASTELAND OPERATIONS</span><span>${t.length} CONTRACTS VISIBLE</span><span>☠ ${e.career.defeated.length}/11 BOSSES</span></div>
      </section>`,this.paintPortraits(this.app),this.bindMap()}bindMap(){var e,t,n,i,r,s;ct("[data-filter]",this.app).forEach(o=>o.addEventListener("click",()=>{this.filter=o.dataset.filter,this.renderMap()})),ct("[data-mission]",this.app).forEach(o=>o.addEventListener("click",c=>{if(o.dataset.action==="launch-mission")return;const h=Bn.find(f=>f.id===o.dataset.mission);h&&(this.selectedMission=h,this.renderMap())})),(e=ge('[data-action="launch-mission"]',this.app))==null||e.addEventListener("click",()=>this.launchMission(this.selectedMission)),(t=ge('[data-action="back"]',this.app))==null||t.addEventListener("click",()=>this.route("menu")),(n=ge('[data-action="career"]',this.app))==null||n.addEventListener("click",()=>this.route("career")),(i=ge('[data-action="garage"]',this.app))==null||i.addEventListener("click",()=>this.route("garage")),(r=ge('[data-action="events"]',this.app))==null||r.addEventListener("click",()=>this.route("events")),(s=ge('[data-action="settings"]',this.app))==null||s.addEventListener("click",()=>this.route("settings"))}buildRounds(e){let t;return e.type==="cup"?t=[e.terrain,...lh.filter(n=>n!==e.terrain)].slice(0,3):e.type==="tournament"?t=[e.terrain,...ch.filter(n=>n!==e.terrain)].slice(0,3):t=[e.terrain],t.map((n,i)=>({terrain:n,weather:i===0?e.weather:nn(bt).id,laps:e.laps}))}launchMission(e){if(!this.getProfile())return;if(e.type==="cup"||e.type==="tournament"){const r=this.buildRounds(e);this.series={mission:e,rounds:r,index:0,points:0,results:[],success:!1},this.activeLaunch={source:"mission",mission:e,series:this.series,config:null},this.startHeat(0);return}const n=e.type==="event"?"race":e.type;this.series=null;const i={mode:n,terrain:e.terrain,weather:e.weather,laps:e.laps,difficulty:e.difficulty,missionId:e.id,escapeTime:60};this.activeLaunch={source:"mission",mission:e,config:i},this.startRace(i)}startHeat(e){const t=this.series;if(!t)return;const n=t.rounds[e];t.index=e,this.getProfile();const i={mode:t.mission.type,terrain:n.terrain,weather:n.weather,laps:n.laps,difficulty:t.mission.difficulty,missionId:t.mission.id,seriesHeat:e+1,seriesTotal:t.rounds.length,escapeTime:60};this.activeLaunch.config=i,this.startRace(i)}startTutorial(){if(!this.getProfile())return;this.series=null;const t={mode:"tutorial",terrain:"wasteland",weather:"cloudy",laps:1,difficulty:"easy",escapeTime:60};this.activeLaunch={source:"tutorial",config:t},this.startRace(t)}launchBoss(e){if(this.bossState(e)==="locked"){this.toast("LOCKED · BREAK THE EARLIER BOSSES FIRST","bad");return}this.closeModal(),this.series=null;const n={mode:"boss",terrain:e.terrain,weather:e.weather,laps:e.laps,difficulty:e.difficulty,bossId:e.id,escapeTime:60};this.activeLaunch={source:"boss",boss:e,config:n},this.startRace(n)}renderCareer(){const e=this.getProfile();if(!e)return this.route("login");const t=e.career.defeated.length,n=rh.map(r=>this.bossCard(r)).join(""),i=oh.map(r=>this.bossCard(r,!0)).join("");this.app.innerHTML=`
      <section class="screen career-screen">
        <header class="sub-hud">
          <button class="btn btn-ghost btn-small" data-action="back">◀ MENU</button>
          <div class="sub-title"><span class="kicker">THE LADDER</span><h2>CAREER</h2></div>
          <div class="sub-nav"><button class="sub-nav-btn" data-action="map">MISSIONS</button><button class="sub-nav-btn" data-action="garage">GARAGE</button><button class="sub-nav-btn" data-action="events">EVENTS</button></div>
          <div class="sub-profile"><canvas class="mini-avatar" data-profile="${e.id}" width="140" height="140"></canvas><span><b>${ne(e.name)}</b><em>${t}/11 BROKEN</em></span></div>
        </header>
        <div class="career-inner">
          <div class="career-hero">
            <div>
              <span class="kicker">NO SHORTCUTS · NO MERCY</span>
              <h1>BREAK THE <span>WASTELAND</span></h1>
              <p>Eight underbosses stand between you and the three demigods at the top of the food chain. Beat them in order. Take their cars. Break their legends.</p>
            </div>
            <div class="career-progress">
              <div class="progress-ring" style="--p:${t/11*360}deg"><b>${t}</b><span>/ 11</span></div>
              <div class="progress-copy"><b>${t<8?"UNDERBOSS LADDER":t<11?"MAIN EVENT UNLOCKED":"WASTELAND BOWS"}</b><span>${t<8?`${8-t} underboss${8-t===1?"":"es"} remain`:t<11?`${11-t} demigod${11-t===1?"":"s"} remain`:"Every throne is yours."}</span></div>
            </div>
          </div>
          <section class="campaign-story panel">
            <div class="campaign-story-heading"><span class="kicker">THE CAMPAIGN</span><h2>${ne(Ca.title)}</h2></div>
            <p class="campaign-intro">${ne(Ca.intro)}</p>
            <div class="campaign-chapters">${Ca.chapters.map(r=>`<article><h3>${ne(r.title)}</h3><p>${ne(r.text)}</p></article>`).join("")}</div>
          </section>
          <div class="ladder">
            <div class="ladder-head"><span class="kicker">TIER 01</span><h3>THE EIGHT UNDERBOSSES</h3><p>The gatekeepers. Each one guards a vehicle, a territory, and a reason to hate you.</p></div>
            <div class="boss-grid">${n}</div>
          </div>
          <div class="main-event">
            <div class="main-event-title">
              <span class="kicker danger-text">TIER 02 · THE MAIN EVENT</span>
              <h2>THREE DEMIGODS</h2>
              <p>The Queen of the Dark. The Wild Demigod. The Demigod of Insanity. Finish all eight underbosses to open the throne room.</p>
            </div>
            <div class="boss-grid mains">${i}</div>
          </div>
          <div class="career-rules panel">
            <div><b>01 · ORDER MATTERS</b><p>Only the next boss in the ladder can be challenged. Defeated bosses can be replayed for scrap, but not for duplicate vehicles.</p></div>
            <div><b>02 · THEIR CARS</b><p>Every boss drops their signature vehicle on first victory. Equip it in the Garage.</p></div>
            <div><b>03 · MAIN EVENT</b><p>Mandy-Lee, Zanrich and Drikus unlock only after all eight underbosses are broken. They do not accept apologies.</p></div>
          </div>
        </div>
        <div class="screen-foot"><span>CAREER LADDER</span><span>${t}/11 BROKEN</span><span>THE ROAD IS DEAD · LONG LIVE THE ROAD</span></div>
      </section>`,this.paintPortraits(this.app),this.bindSubnav(),ct("[data-boss-card]",this.app).forEach(r=>r.addEventListener("click",()=>{const s=Pi.find(o=>o.id===r.dataset.bossCard);s&&this.showBossModal(s)}))}bossCard(e,t=!1){const n=this.bossState(e),i=pt.find(r=>r.id===e.vehicle);return`<button class="boss-card ${n} ${t?"main":""}" data-boss-card="${e.id}">
      <div class="boss-art"><canvas data-boss="${e.id}" width="360" height="360"></canvas><div class="boss-rank">${String(e.order).padStart(2,"0")}</div></div>
      <div class="boss-info">
        <span class="boss-tag">${t?"DEMIGOD":"UNDERBOSS"}</span>
        <b>${ne(e.name)}</b>
        <em>${ne(e.title)}</em>
        <div class="boss-meta"><span>${yt.find(r=>r.id===e.terrain).short}</span><span>${bt.find(r=>r.id===e.weather).name}</span><span>${e.laps} LAPS</span></div>
        <div class="boss-reward"><span>VEHICLE</span><b>${ne((i==null?void 0:i.name)||e.vehicle)}</b></div>
      </div>
      <div class="boss-status ${n}">${n==="defeated"?"☠ BROKEN":n==="available"?"⚑ CHALLENGE":"🔒 LOCKED"}</div>
    </button>`}showBossModal(e){var c;const t=this.bossState(e),n=pt.find(h=>h.id===e.vehicle),i=yt.find(h=>h.id===e.terrain),r=bt.find(h=>h.id===e.weather),s=cn.find(h=>h.id===e.difficulty)||cn[1],o=this.getProfile();this.showModal(`
      <div class="boss-modal-grid">
        <div class="boss-modal-art">
          <canvas id="bossBig" width="460" height="460"></canvas>
          <div class="boss-modal-stamp">${t==="defeated"?"BROKEN":"TARGET"}</div>
        </div>
        <div class="boss-modal-copy">
          <div class="modal-kicker">${e.underboss?"UNDERBOSS":"MAIN BOSS"} · #${String(e.order).padStart(2,"0")}</div>
          <h2>${ne(e.name)}</h2>
          <h3>${ne(e.title)}</h3>
          <p class="boss-quote">“${ne(e.quote)}”</p>
          <p class="modal-lede">${ne(e.desc)}</p>
          <div class="boss-story"><span>ON THE CROWNROAD</span><p>${ne(e.story||e.desc)}</p></div>
          <div class="mission-chips">
            <span><i>${i.icon}</i>${i.name}</span><span><i>${r.icon}</i>${r.name}</span><span class="${s.id}">${s.name}</span><span>${e.laps} LAPS</span>
          </div>
          <div class="vehicle-reward"><span class="vr-icon">⚙</span><div><b>VEHICLE DROP</b><span>${ne((n==null?void 0:n.name)||e.vehicle)}</span></div>${o.vehicles.includes(e.vehicle)?"<em>OWNED</em>":"<em>FIRST WIN</em>"}</div>
          <div class="reward-grid"><div><span>BOUNTY</span><b>${It(e.reward)}</b></div><div><span>XP</span><b>${250+e.order*60}</b></div><div><span>STATUS</span><b>${t.toUpperCase()}</b></div></div>
          ${t==="available"||t==="defeated"?`<button class="btn btn-danger btn-block btn-large" data-action="challenge-boss">${t==="defeated"?"REMATCH · SCRAP ONLY":"CHALLENGE "+ne(e.name.toUpperCase())} ▶</button>`:`<div class="locked-callout"><b>LOCKED</b><p>Break boss #${e.order-1} first. The ladder does not negotiate.</p></div>`}
        </div>
      </div>`),Wi(ge("#bossBig",this.modals),{...e.portrait,name:e.name},{size:460,boss:!0,bg:"#2a1012"}),(c=ge('[data-action="challenge-boss"]',this.modals))==null||c.addEventListener("click",()=>this.launchBoss(e))}vbar(e,t,n=""){return`<div class="stat-bar ${n}"><span>${e}</span><div><i style="width:${t}%"></i></div><b>${t}</b></div>`}garageDetail(e,t){const n=this.getProfile().equipped===e.id;return`
      <div class="garage-detail-head">
        <div><span class="kicker">${ne(e.klass)} · ${t?"ACQUIRED":"LOCKED"}</span><h2>${ne(e.name)}</h2></div>
        <span class="garage-color" style="--c:${e.color}"></span>
      </div>
      <p class="garage-desc">${ne(e.desc)}</p>
      <div class="garage-stats">
        ${this.vbar("SPEED",e.speed)}
        ${this.vbar("ACCELERATION",e.accel)}
        ${this.vbar("HANDLING",e.grip)}
        ${this.vbar("ARMOR",e.armor)}
        ${this.vbar("NITRO",e.boost*4.5,"nitro")}
      </div>
      <div class="unlock-line">
        <span>${t?"SOURCE":"UNLOCK"}</span>
        <b>${e.unlock==="start"?"Starter vehicle":e.unlockText||(e.unlock==="career"?"Career reward":"Mission reward")}</b>
      </div>
      <div class="garage-equip-row">
        ${t?`<button class="btn ${n?"btn-ghost":"btn-primary"} btn-block btn-large" data-action="equip" ${n?"disabled":""}>${n?"✓ EQUIPPED":"EQUIP VEHICLE"}</button>`:`<button class="btn btn-ghost btn-block btn-large" disabled>🔒 ${ne(e.unlockText||"LOCKED")}</button>`}
      </div>`}renderGarage(){const e=this.getProfile();if(!e)return this.route("login");let t=pt.find(r=>r.id===this.selectedVehicle);t||(t=pt.find(r=>r.id===e.equipped)||pt[0]),this.selectedVehicle=t.id;const n=e.vehicles.includes(t.id);this.app.innerHTML=`
      <section class="screen garage-screen">
        <header class="sub-hud">
          <button class="btn btn-ghost btn-small" data-action="back">◀ MENU</button>
          <div class="sub-title"><span class="kicker">THE BONEYARD</span><h2>GARAGE</h2></div>
          <div class="sub-nav"><button class="sub-nav-btn" data-action="map">MISSIONS</button><button class="sub-nav-btn" data-action="career">CAREER</button><button class="sub-nav-btn" data-action="events">EVENTS</button></div>
          <div class="sub-profile"><span class="garage-credit"><b>${e.vehicles.length}</b> / ${pt.length} ACQUIRED</span><span class="garage-scrap">${It(e.money)}</span></div>
        </header>
        <div class="garage-layout">
          <div class="garage-stage-wrap panel">
            <div class="stage-top"><span class="kicker">VEHICLE BAY · 07</span><span class="stage-status ${n?"owned":""}">${n?"READY":"RESTRICTED"}</span></div>
            <div class="garage-stage" id="garageStage">
              <canvas id="garageCanvas"></canvas>
              <div class="stage-glow" style="--c:${t.accent}"></div>
              <div class="stage-floor"></div>
              <div class="garage-angle-controls" aria-label="Vehicle camera angles">
                <button type="button" data-camera-angle="front" aria-label="Front three-quarter view">FRONT</button>
                <button type="button" data-camera-angle="side" aria-label="Side view">SIDE</button>
                <button type="button" data-camera-angle="rear" aria-label="Rear view">REAR</button>
                <button type="button" data-camera-angle="reset" aria-label="Reset camera">RESET</button>
              </div>
              <div class="stage-label"><b>${ne(t.name)}</b><span>${ne(t.klass)}</span></div>
            </div>
            <div class="garage-hint">DRAG TO ORBIT · SCROLL TO ZOOM · PICK AN ANGLE</div>
          </div>
          <div class="garage-detail panel" id="garageDetail">${this.garageDetail(t,n)}</div>
        </div>
        <div class="garage-strip-wrap">
          <div class="garage-strip-head"><span class="kicker">ACQUIRED THROUGH MISSIONS · CAREER · EVENTS</span><span>${e.vehicles.length} UNLOCKED</span></div>
          <div class="vehicle-strip">
            ${pt.map(r=>{const s=e.vehicles.includes(r.id);return`<button class="vehicle-card${r.id===t.id?" selected":""}${s?"":" locked"}" data-vehicle="${r.id}">
                <span class="vehicle-swatch" style="--c:${r.color};--a:${r.accent}"><i></i></span>
                <b>${ne(r.name)}</b><em>${ne(r.klass)}</em>
                <span class="vehicle-state">${s?e.equipped===r.id?"EQUIPPED":"OWNED":"🔒"}</span>
              </button>`}).join("")}
          </div>
        </div>
        <div class="screen-foot"><span>GARAGE · 16 MACHINES</span><span>EVERY KILL LEAVES A CAR</span><span>${It(e.money)}</span></div>
      </section>`,this.paintPortraits(this.app),this.bindSubnav();const i=ge("#garageCanvas",this.app);this.garagePreview=new x0(i),this.garagePreview.setVehicle(t),this.garagePreview.start(),setTimeout(()=>{var r,s;return(s=(r=this.garagePreview)==null?void 0:r.resize)==null?void 0:s.call(r)},30),ct("[data-vehicle]",this.app).forEach(r=>r.addEventListener("click",()=>{this.selectedVehicle=r.dataset.vehicle,this.updateGarageUI()})),this.bindGarageAction()}updateGarageUI(){var o;const e=this.getProfile(),t=pt.find(c=>c.id===this.selectedVehicle);if(!t)return;const n=e.vehicles.includes(t.id);ge("#garageDetail",this.app).innerHTML=this.garageDetail(t,n),ct("[data-vehicle]",this.app).forEach(c=>c.classList.toggle("selected",c.dataset.vehicle===t.id));const i=ge(".stage-label",this.app);i&&(i.innerHTML=`<b>${ne(t.name)}</b><span>${ne(t.klass)}</span>`);const r=ge(".stage-glow",this.app);r&&r.style.setProperty("--c",t.accent);const s=ge(".stage-status",this.app);s&&(s.textContent=n?"READY":"RESTRICTED",s.classList.toggle("owned",n)),(o=this.garagePreview)==null||o.setVehicle(t),this.bindGarageAction()}bindGarageAction(){var e;(e=ge('[data-action="equip"]',this.app))==null||e.addEventListener("click",()=>{const t=this.getProfile(),n=pt.find(i=>i.id===this.selectedVehicle);!n||!t.vehicles.includes(n.id)||(this.store.update({equipped:n.id}),Ee.sfx("reward"),this.toast(`${n.name.toUpperCase()} EQUIPPED`,"good"),this.updateGarageUI())})}bindSubnav(){const e={back:"menu",map:"map",career:"career",garage:"garage",events:"events",settings:"settings",menu:"menu"};ct("[data-action]",this.app).forEach(t=>{const n=t.dataset.action;e[n]&&t.addEventListener("click",()=>this.route(e[n]))})}sliderRow(e,t,n,i=1,r=.01){return`<div class="slider-row"><label for="${e}">${t}</label><input id="${e}" type="range" min="0" max="${i}" step="${r}" value="${n}" /><b id="${e}Val">${Math.round(n*100)}</b></div>`}renderSettings(){const e=this.getProfile();if(!e)return this.route("login");const t=e.settings,n=this.store.slots||[null,null,null];this.app.innerHTML=`
      <section class="screen settings-screen">
        <header class="sub-hud">
          <button class="btn btn-ghost btn-small" data-action="back">◀ MENU</button>
          <div class="sub-title"><span class="kicker">SYSTEM</span><h2>SETTINGS</h2></div>
          <div class="sub-nav"><button class="sub-nav-btn" data-action="map">MISSIONS</button><button class="sub-nav-btn" data-action="career">CAREER</button><button class="sub-nav-btn" data-action="garage">GARAGE</button></div>
          <div class="sub-profile"><canvas class="mini-avatar" data-profile="${e.id}" width="140" height="140"></canvas><span><b>${ne(e.name)}</b><em>PROFILE SETTINGS</em></span></div>
        </header>
        <div class="settings-grid">
          <div class="settings-col">
            <div class="settings-card panel">
              <div class="panel-head"><div><span class="kicker">AUDIO</span><h3>SOUND MIXER</h3></div><button class="icon-btn" data-action="mute">${t.master>.01?"🔊":"🔇"}</button></div>
              ${this.sliderRow("volMaster","MASTER",t.master)}
              ${this.sliderRow("volMusic","MUSIC · DARK ORCHESTRA",t.music)}
              ${this.sliderRow("volSfx","SFX · ENGINES &amp; VIOLENCE",t.sfx)}
              <p class="settings-note">The score is generated live with classical strings, organ, brass and timpani. No audio files are streamed.</p>
            </div>
            <div class="settings-card panel">
              <div class="panel-head"><div><span class="kicker">VIDEO</span><h3>PERFORMANCE</h3></div></div>
              <div class="setting-line"><span>VIDEO QUALITY</span><div class="segmented">${["low","medium","high"].map(i=>`<button class="seg${t.quality===i?" active":""}" data-quality="${i}">${i.toUpperCase()}</button>`).join("")}</div></div>
              <div class="setting-line"><span>CAMERA SHAKE</span><button class="toggle ${t.cameraShake?"on":""}" data-toggle="cameraShake"><i></i><b>${t.cameraShake?"ON":"OFF"}</b></button></div>
              <p class="settings-note">Mobile-friendly: low disables rain density and caps rendering resolution. High uses device pixel ratio up to 2×.</p>
            </div>
            <div class="settings-card panel">
              <div class="panel-head"><div><span class="kicker">CONTENT</span><h3>GORE LEVEL</h3></div></div>
              <div class="gore-options">
                <button class="${t.gore==="off"?"active":""}" data-gore="off"><i class="gore-swatch off"></i><b>OFF</b><span>Impact sparks only</span></button>
                <button class="${t.gore==="blood"?"active":""}" data-gore="blood"><i class="gore-swatch blood"></i><b>BLOOD</b><span>Classic red mist</span></button>
                <button class="${t.gore==="zombie"?"active":""}" data-gore="zombie"><i class="gore-swatch zombie"></i><b>ZOMBIE</b><span>Toxic green blood</span></button>
              </div>
              <p class="settings-note">Gore is stylized particles and screen splashes. The dead do not sue.</p>
            </div>
          </div>
          <div class="settings-col">
            <div class="settings-card panel">
              <div class="panel-head"><div><span class="kicker">SAVE / LOAD</span><h3>THREE SLOTS</h3></div><span class="record-count">AUTOSAVE ACTIVE</span></div>
              <div class="save-slots">
                ${[0,1,2].map(i=>{const r=n[i];return`<div class="save-slot ${r?"filled":""}">
                    <div class="slot-index">0${i+1}</div>
                    <div class="slot-info">
                      <b>${r?ne(r.name):"EMPTY SLOT"}</b>
                      <span>${r?`LVL ${r.level} · ${It(r.money)} · ${new Date(r.savedAt).toLocaleString()}`:"No manual save"}</span>
                    </div>
                    <div class="slot-actions">
                      <button class="btn btn-small ${r?"btn-ghost":"btn-primary"}" data-save="${i}">SAVE</button>
                      <button class="btn btn-small btn-ghost" data-load="${i}" ${r?"":"disabled"}>LOAD</button>
                      <button class="icon-btn small" data-clear="${i}" ${r?"":"disabled"} aria-label="Delete slot">✕</button>
                    </div>
                  </div>`}).join("")}
              </div>
              <p class="settings-note">Autosave writes the profile after every cleared tutorial, contract, boss and cup heat — stamped with date, time and location. Manual slots snapshot the current profile.</p>
            </div>
            <div class="settings-card panel">
              <div class="panel-head"><div><span class="kicker">LEGAL</span><h3>THE FINE PRINT</h3></div></div>
              <div class="legal-buttons">
                <button class="btn btn-ghost" data-action="terms">TERMS &amp; CONDITIONS</button>
                <button class="btn btn-ghost" data-action="how">HOW TO PLAY</button>
              </div>
              <div class="dossier-line"><span>PROFILE</span><b>${ne(e.name)} · LVL ${e.level}</b></div>
              <div class="dossier-line"><span>SAVE STORAGE</span><b>LOCAL BROWSER</b></div>
              <div class="dossier-line"><span>BUILD</span><b>HELLRIDE 1.0</b></div>
            </div>
            <div class="settings-card panel danger-panel">
              <div class="panel-head"><div><span class="kicker danger-text">DANGER ZONE</span><h3>END THINGS</h3></div></div>
              <div class="danger-row"><span>Return to profile access.</span><button class="btn btn-ghost btn-small" data-action="logout">LOG OUT</button></div>
              <div class="danger-row"><span>Erase this driver and all progress.</span><button class="btn btn-danger btn-small" data-action="delete-profile">DELETE PROFILE</button></div>
            </div>
          </div>
        </div>
        <div class="screen-foot"><span>SETTINGS</span><span>SOUND · VIDEO · GORE · SAVES · TERMS</span><span>AUTOSAVED</span></div>
      </section>`,this.paintPortraits(this.app),this.bindSubnav(),this.bindSettings()}bindSettings(){var n,i,r,s,o,c;if(!this.getProfile())return;const t=(h,f)=>{const d=Number(f);this.store.updateSettings({[h]:d}),Ee.setVolumes({[h==="master"?"master":h==="music"?"music":"sfx"]:d});const l=document.getElementById(h==="master"?"volMasterVal":h==="music"?"volMusicVal":"volSfxVal");l&&(l.textContent=Math.round(d*100))};[["volMaster","master"],["volMusic","music"],["volSfx","sfx"]].forEach(([h,f])=>{var d;(d=ge("#"+h,this.app))==null||d.addEventListener("input",l=>t(f,l.target.value))}),ct("[data-quality]",this.app).forEach(h=>h.addEventListener("click",()=>{const f=h.dataset.quality;this.store.updateSettings({quality:f}),ct("[data-quality]",this.app).forEach(d=>d.classList.toggle("active",d.dataset.quality===f)),this.menuBg.setQuality(f),this.toast(`VIDEO QUALITY · ${f.toUpperCase()}`,"good")})),(n=ge('[data-toggle="cameraShake"]',this.app))==null||n.addEventListener("click",h=>{const f=h.currentTarget,d=!this.getProfile().settings.cameraShake;this.store.updateSettings({cameraShake:d}),f.classList.toggle("on",d),f.innerHTML=`<i></i><b>${d?"ON":"OFF"}</b>`}),ct("[data-gore]",this.app).forEach(h=>h.addEventListener("click",()=>{const f=h.dataset.gore;this.store.updateSettings({gore:f}),ct("[data-gore]",this.app).forEach(d=>d.classList.toggle("active",d.dataset.gore===f)),this.toast(`GORE · ${f.toUpperCase()}`,f==="zombie"?"good":"")})),ct("[data-save]",this.app).forEach(h=>h.addEventListener("click",()=>{this.store.saveSlot(Number(h.dataset.save)),this.toast("MANUAL SAVE WRITTEN","good"),this.renderSettings()})),ct("[data-load]",this.app).forEach(h=>h.addEventListener("click",()=>{const f=Number(h.dataset.load),d=this.store.slots[f];d&&(this.showModal(`<div class="modal-kicker">LOAD SAVE</div><h2>OVERWRITE CURRENT PROFILE?</h2><p class="modal-lede">Load <b>${ne(d.name)}</b> from ${new Date(d.savedAt).toLocaleString()}? Current unsaved changes to this profile will be replaced.</p><div class="modal-actions"><button class="btn btn-ghost" data-modal-close>CANCEL</button><button class="btn btn-primary" data-action="confirm-load">LOAD SAVE</button></div>`),ge('[data-action="confirm-load"]',this.modals).addEventListener("click",()=>{const l=this.store.loadSlot(f);this.closeModal(),l&&(js(l),Ee.setVolumes(l.settings),this.toast("SAVE LOADED · "+l.name,"good"),this.route("settings"))}))})),ct("[data-clear]",this.app).forEach(h=>h.addEventListener("click",()=>{this.store.clearSlot(Number(h.dataset.clear)),this.toast("SAVE SLOT ERASED","bad"),this.renderSettings()})),(i=ge('[data-action="terms"]',this.app))==null||i.addEventListener("click",()=>this.showTerms()),(r=ge('[data-action="how"]',this.app))==null||r.addEventListener("click",()=>this.showHowTo()),(s=ge('[data-action="mute"]',this.app))==null||s.addEventListener("click",()=>{this.toggleMuteFromSettings()}),(o=ge('[data-action="logout"]',this.app))==null||o.addEventListener("click",()=>this.confirmLogout()),(c=ge('[data-action="delete-profile"]',this.app))==null||c.addEventListener("click",()=>{const h=this.getProfile();this.showModal(`<div class="modal-kicker danger-text">DELETE PROFILE</div><h2>ERASE ${ne(h.name)}?</h2><p class="modal-lede">Every boss, every car, every manual save and every bad decision will be deleted from this browser. This cannot be undone.</p><div class="modal-actions"><button class="btn btn-ghost" data-modal-close>CANCEL</button><button class="btn btn-danger" data-action="confirm-delete">ERASE EVERYTHING</button></div>`),ge('[data-action="confirm-delete"]',this.modals).addEventListener("click",()=>{this.store.remove(h.id),this.closeModal(),this.route("login"),this.toast("PROFILE ERASED","bad")})})}toggleMuteFromSettings(){const e=this.getProfile();if(!e)return;const t=e.settings.master>.01;this.store.updateSettings({master:t?0:this._preMute||.8}),Ee.setVolumes({master:t?0:this._preMute||.8}),this.renderSettings()}getDailyEvent(){const t=new Date().toISOString().slice(0,10);let n=0;for(const o of t)n=n*31+o.charCodeAt(0)>>>0;const i=yt[n%yt.length],r=bt[(n>>4)%bt.length],s=["normal","hard","insane"];return{id:"daily_"+t,type:"race",name:"Daily Death Trial",terrain:i.id,weather:r.id,difficulty:s[n%3],laps:2,reward:1200+n%900,xp:280,event:!0,blurb:`The wasteland resets its cruelty every day. Today it chose ${i.name} under ${r.name.toLowerCase()}. One race. One bounty. No repeats after midnight.`,daily:!0}}renderEvents(){var o,c;const e=this.getProfile();if(!e)return this.route("login");const t=Bn.find(h=>h.id==="m_blood_moon"),n=this.getDailyEvent(),i=pt.find(h=>h.id===t.vehicleReward),r=e.completed[t.id],s=e.completed[n.id];this.app.innerHTML=`
      <section class="screen events-screen">
        <header class="sub-hud">
          <button class="btn btn-ghost btn-small" data-action="back">◀ MENU</button>
          <div class="sub-title"><span class="kicker">LIMITED CARNAGE</span><h2>SPECIAL EVENTS</h2></div>
          <div class="sub-nav"><button class="sub-nav-btn" data-action="map">MISSIONS</button><button class="sub-nav-btn" data-action="career">CAREER</button><button class="sub-nav-btn" data-action="garage">GARAGE</button></div>
          <div class="sub-profile"><canvas class="mini-avatar" data-profile="${e.id}" width="140" height="140"></canvas><span><b>${ne(e.name)}</b><em>${It(e.money)}</em></span></div>
        </header>
        <div class="events-inner">
          <div class="event-hero">
            <div class="event-hero-art">
              <div class="blood-moon"></div>
              <div class="event-car-silhouette"></div>
              <span class="event-ribbon">EVENT REWARD</span>
            </div>
            <div class="event-hero-copy">
              <span class="kicker danger-text">BLOOD MOON · LIMITED</span>
              <h1>BLOOD MOON CUP</h1>
              <p>Three laps on Cinder Peak while a twister peels the mountain apart. Win, and the <b>${ne(i.name)}</b> is yours — a 90-speed predator with a red halo and no conscience.</p>
              <div class="mission-chips"><span><i>♨</i>Cinder Peak</span><span><i>◎</i>Twister</span><span class="hard">Hard</span><span>3 LAPS</span></div>
              <div class="event-reward">
                <span class="event-car-chip" style="--c:${i.color};--a:${i.accent}"></span>
                <div><span>VEHICLE UNLOCK</span><b>${ne(i.name)}</b><em>${e.vehicles.includes(i.id)?"ALREADY OWNED":"FIRST WIN ONLY"}</em></div>
                <strong>${It(t.reward)}</strong>
              </div>
              <button class="btn btn-danger btn-large" data-event="${t.id}">${r?"REPLAY BLOOD MOON":"ENTER BLOOD MOON CUP"} ▶</button>
            </div>
          </div>
          <div class="event-grid">
            <div class="event-card panel">
              <div class="event-card-top"><span class="event-live">LIVE</span><span class="kicker">${new Date().toISOString().slice(0,10)}</span></div>
              <h3>DAILY DEATH TRIAL</h3>
              <p>${ne(n.blurb)}</p>
              <div class="mission-chips"><span><i>${yt.find(h=>h.id===n.terrain).icon}</i>${yt.find(h=>h.id===n.terrain).short}</span><span><i>${bt.find(h=>h.id===n.weather).icon}</i>${bt.find(h=>h.id===n.weather).name}</span><span class="${n.difficulty}">${n.difficulty.toUpperCase()}</span></div>
              <div class="reward-grid"><div><span>BOUNTY</span><b>${It(n.reward)}</b></div><div><span>XP</span><b>${n.xp}</b></div><div><span>STATUS</span><b>${s?"CLEARED":"OPEN"}</b></div></div>
              <button class="btn btn-primary btn-block" data-daily="1">${s?"RUN AGAIN":"RUN TODAY’S TRIAL"} ▶</button>
            </div>
            <div class="event-card panel locked-event">
              <div class="event-card-top"><span class="event-live dark">SEALED</span><span class="kicker">FUTURE EVENT</span></div>
              <h3>THE DEMIGOD INVITATIONAL</h3>
              <p>Once all eleven bosses are broken, the wasteland opens its final invitation. Twelve laps. All three demigods. One car left running.</p>
              <div class="locked-callout"><b>${e.career.defeated.length}/11 BOSSES</b><p>Break every boss to reveal the final event.</p></div>
              <div class="progress-line"><i style="width:${e.career.defeated.length/11*100}%"></i></div>
              <button class="btn btn-ghost btn-block" disabled>LOCKED BY CAREER</button>
            </div>
            <div class="event-card panel">
              <div class="event-card-top"><span class="event-live">ALWAYS ON</span><span class="kicker">FREE ROAM</span></div>
              <h3>THE BONEYARD BOUNTY</h3>
              <p>A rotating single race through the scrapyard. No vehicle reward. Pure scrap, pure XP, pure bad intentions.</p>
              <div class="mission-chips"><span><i>⌖</i>The Great Wastes</span><span><i>☁</i>Cloudy</span><span class="normal">Normal</span><span>2 LAPS</span></div>
              <div class="reward-grid"><div><span>BOUNTY</span><b>$500</b></div><div><span>XP</span><b>150</b></div><div><span>STATUS</span><b>OPEN</b></div></div>
              <button class="btn btn-primary btn-block" data-bounty="1">RUN BOUNTY ▶</button>
            </div>
          </div>
        </div>
        <div class="screen-foot"><span>SPECIAL EVENTS</span><span>VEHICLES EARNED, NOT BOUGHT</span><span>THE MOON IS BLEEDING</span></div>
      </section>`,this.paintPortraits(this.app),this.bindSubnav(),ct("[data-event]",this.app).forEach(h=>h.addEventListener("click",()=>{const f=Bn.find(d=>d.id===h.dataset.event);f&&this.launchMission(f)})),(o=ge("[data-daily]",this.app))==null||o.addEventListener("click",()=>{this.launchSpecialEvent(this.getDailyEvent())}),(c=ge("[data-bounty]",this.app))==null||c.addEventListener("click",()=>{const h={id:"bounty_"+Date.now(),type:"race",name:"Boneyard Bounty",terrain:"wasteland",weather:"cloudy",difficulty:"normal",laps:2,reward:500,xp:150,blurb:"A quick loop through the bones of the old world."};this.launchSpecialEvent(h)})}launchSpecialEvent(e){const t={mode:"race",terrain:e.terrain,weather:e.weather,laps:e.laps,difficulty:e.difficulty,missionId:e.id,escapeTime:60};this.series=null,this.activeLaunch={source:"mission",mission:e,config:t},this.startRace(t)}startRace(e){var r;const t=this.getProfile();if(!t)return this.route("login");this.race&&(this.race.dispose(),this.race=null),this.closeModal(),(r=this.garagePreview)==null||r.stop(),this.garagePreview=null,this.menuBg.stop(),this.decor.style.display="none",this.screen="race",document.body.dataset.screen="race",window.scrollTo(0,0),Ee.ensure(),Ee.setVolumes(t.settings),Ee.setScene("race");const n=cn.find(s=>s.id===e.difficulty)||cn[1],i=new R0(ge("#race-canvas"),{mode:e.mode,terrain:e.terrain,weather:e.weather,laps:e.laps,difficulty:n,bossId:e.bossId,vehicleId:t.equipped,profile:t,settings:{...t.settings,quality:t.settings.quality},escapeTime:e.escapeTime,seed:Math.floor(Math.random()*99999),onFinish:s=>this.handleRaceResult(s),onPause:s=>{s?this.showPause():this.closeModal()}});i.updatePositions(),this.race=i}restartRace(){const e=this.activeLaunch;e!=null&&e.config&&(this.closeModal(),this.race&&(this.race.dispose(),this.race=null),this.startRace({...e.config}))}retryContract(){const e=this.activeLaunch;if(e)if(this.closeModal(),this.race&&(this.race.dispose(),this.race=null),e.series){const t=e.series.mission,n=this.buildRounds(t);this.series={mission:t,rounds:n,index:0,points:0,results:[],success:!1},e.series=this.series,this.startHeat(0)}else e.config&&this.startRace({...e.config})}quitRace(){var n;this.closeModal();const e=this.activeLaunch;this.race&&(this.race.dispose(),this.race=null),this.series=null,this.activeLaunch=null;const t=e==null?void 0:e.source;t==="boss"?this.route("career"):t==="tutorial"?this.route("menu"):(n=e==null?void 0:e.mission)!=null&&n.event?this.route("events"):this.route("map")}showPause(){var i,r,s;const e=this.activeLaunch;if(!e)return;const t=!!e.series;this.showModal(`
      <div class="modal-kicker">ENGINE IDLE</div>
      <h2>PAUSED</h2>
      <p class="modal-lede">${t?`Championship heat ${e.series.index+1} of ${e.series.rounds.length} · ${e.series.points} points`:e.source==="boss"?`Boss challenge · ${ne(((i=e.boss)==null?void 0:i.name)||"")}`:e.source==="tutorial"?"Tutorial · first blood":"Contract in progress"}</p>
      <div class="pause-stats">
        <div><span>TERRAIN</span><b>${ne(((r=yt.find(o=>o.id===e.config.terrain))==null?void 0:r.name)||"")}</b></div>
        <div><span>WEATHER</span><b>${ne(((s=bt.find(o=>o.id===e.config.weather))==null?void 0:s.name)||"")}</b></div>
        <div><span>MODE</span><b>${e.config.mode.toUpperCase()}</b></div>
      </div>
      <div class="modal-actions pause-actions">
        <button class="btn btn-primary btn-large" data-action="resume">▶ RESUME</button>
        <button class="btn btn-ghost" data-action="checkpoint">⟲ CHECKPOINT</button>
        <button class="btn btn-ghost" data-action="restart">⟳ RESTART</button>
        <button class="btn btn-ghost" data-action="pause-mute">${(this.getProfile().settings.master||0)>.01?"🔊 MUTE":"🔇 UNMUTE"}</button>
        <button class="btn btn-danger" data-action="quit-race">QUIT RACE</button>
      </div>
      <p class="panel-hint">CHECKPOINT restarts at the last checkpoint with a repaired hull. RESTART re-runs this heat. Quitting abandons the contract and any unclaimed bounty.</p>`,"pause-modal");const n=ge(".modal-backdrop",this.modals);n&&(n.dataset.locked="1"),ge('[data-action="resume"]',this.modals).addEventListener("click",()=>{var o;this.closeModal(),(o=this.race)==null||o.resume()}),ge('[data-action="checkpoint"]',this.modals).addEventListener("click",()=>{var o,c;this.closeModal(),(o=this.race)==null||o.respawnAtCheckpoint(),(c=this.race)==null||c.resume()}),ge('[data-action="restart"]',this.modals).addEventListener("click",()=>this.restartRace()),ge('[data-action="quit-race"]',this.modals).addEventListener("click",()=>this.quitRace()),ge('[data-action="pause-mute"]',this.modals).addEventListener("click",()=>{const c=this.getProfile().settings.master>.01;this.store.updateSettings({master:c?0:this._preMute||.8}),Ee.setVolumes({master:c?0:this._preMute||.8}),this.showPause()})}unlockVehicle(e){const t=this.getProfile();return!t||!e||t.vehicles.includes(e)?!1:(t.vehicles.push(e),this.store.persist(),!0)}applyRaceStats(e){const t=this.getProfile();t.races=(t.races||0)+1,e.position===1&&(t.victories=(t.victories||0)+1),e.bestLap&&(!t.bestLap||e.bestLap<t.bestLap)&&(t.bestLap=e.bestLap),this.store.persist()}pointsForPosition(e){return[10,8,6,4,2,1][e-1]||0}handleRaceResult(e){const t=this.activeLaunch;if(!t)return;this.race&&this.race.setPaused(!0),this.applyRaceStats(e);const n=yt.find(l=>l.id===e.terrain),i=(n==null?void 0:n.name)||"THE WASTELAND",r=t.boss?`BOSS · ${t.boss.name}`:t.mission?`${t.mission.event?"EVENT":"CONTRACT"} · ${t.mission.name}`:"FIRST BLOOD TUTORIAL";if(t.series){const l=t.series,g=this.pointsForPosition(e.position);if(l.points+=g,l.results.push({...e,points:g}),e.reason!=="wrecked"&&this.store.autosave(i,`${t.series.mission.name} · HEAT ${l.index+1}`),!(l.index>=l.rounds.length-1))this.showSeriesHeat(e,g);else{l.success=l.points>=20;const m=l.mission,u=cn.find(M=>M.id===m.difficulty)||cn[1];let p=Math.round(m.reward*(l.points/30)*u.reward),x=Math.round(m.xp*(l.points/30)),b=null;if(l.success){p=Math.round(m.reward*u.reward),x=m.xp,m.vehicleReward&&(b=this.unlockVehicle(m.vehicleReward)?m.vehicleReward:null);const M=this.getProfile(),C=M.completed[m.id]||{wins:0,bestPos:99};M.completed[m.id]={wins:C.wins+1,bestPos:Math.min(C.bestPos||99,e.position)},this.store.persist()}else{const M=this.getProfile();if(l.points>0){const C=M.completed[m.id]||{wins:0,bestPos:99};M.completed[m.id]={wins:C.wins,bestPos:Math.min(C.bestPos||99,e.position)},this.store.persist()}}this.store.addReward(p,x),this.store.autosave(i,`${m.name} · ${l.success?"CUP WON":"SERIES FINAL"}`),this.showRaceResults(e,{success:l.success,autosaved:!0,money:p,xp:x,unlock:b,title:l.success?"CUP CHAMPION":"SERIES LOST",subtitle:`${m.name.toUpperCase()} · ${l.points}/30 POINTS`,series:l,source:"mission",mission:m})}return}let s=e.success;t.source==="tutorial"&&(s=e.reason==="finished");let o=0,c=0,h=null,f="";const d=this.getProfile();if(t.source==="tutorial")o=s?500:80,c=s?180:30,s&&(d.tutorialDone=!0),f=s?"YOU CAN DRIVE. NOW SURVIVE.":"THE WASTELAND EXPECTS BETTER";else if(t.source==="boss"){const l=t.boss;s?(o=d.career.defeated.includes(l.id)?Math.round(l.reward*.3):l.reward,c=260+l.order*55,d.career.defeated.includes(l.id)||d.career.defeated.push(l.id),d.career.current=d.career.defeated.length,h=d.vehicles.includes(l.vehicle)?null:this.unlockVehicle(l.vehicle)?l.vehicle:null,f=l.boss?"A DEMIGOD HAS FALLEN":"AN UNDERBOSS HAS FALLEN"):(o=150,c=40,f="THE LADDER DOES NOT MOVE"),this.store.persist()}else if(t.source==="mission"){const l=t.mission,g=cn.find(v=>v.id===l.difficulty)||cn[1];if(s){o=Math.round(l.reward*g.reward),c=l.xp,l.type==="transport"&&(o=Math.round(o*(.65+e.cargo/200))),l.type==="taxi"&&(o=Math.round(o*(.65+e.comfort/200))),(l.type==="gang"||l.type==="police")&&(o=Math.round(o*(.7+e.hull/300))),l.vehicleReward&&(h=d.vehicles.includes(l.vehicleReward)?null:this.unlockVehicle(l.vehicleReward)?l.vehicleReward:null);const v=d.completed[l.id]||{wins:0,bestPos:99};d.completed[l.id]={wins:v.wins+1,bestPos:Math.min(v.bestPos||99,e.position)},f=l.event?"EVENT CLEARED · REWARD CLAIMED":"CONTRACT CLEARED"}else o=90,c=35,f=e.reason==="wrecked"?"YOUR CAR BECAME A GRAVE":"THE CONTRACT REMAINS OPEN",d.completed[l.id]&&(d.completed[l.id].bestPos=Math.min(d.completed[l.id].bestPos||99,e.position));this.store.persist()}this.store.addReward(o,c),s&&this.store.autosave(i,r),this.showRaceResults(e,{success:s,autosaved:s,money:o,xp:c,unlock:h,title:s?t.source==="boss"?"BOSS BROKEN":t.source==="tutorial"?"TUTORIAL CLEARED":e.reason==="escaped"?"YOU ESCAPED":"CONTRACT CLEARED":e.reason==="wrecked"?"WRECKED":"DEFEAT",subtitle:f,source:t.source,mission:t.mission,boss:t.boss})}showSeriesHeat(e,t){const n=this.series,i=n.mission,r=n.rounds[n.index+1],s=yt.find(h=>h.id===(r==null?void 0:r.terrain)),o=bt.find(h=>h.id===(r==null?void 0:r.weather));this.showModal(`
      <div class="results-shell series-shell">
        <div class="result-banner ${e.position===1?"win":""}">
          <div class="result-kicker">${ne(i.name.toUpperCase())} · HEAT ${n.index+1}/${n.rounds.length}</div>
          <h1>HEAT ${e.position===1?"WON":"CLEARED"}</h1>
          <p>${mr(e.position)} place · +${t} championship points</p>
        </div>
        <div class="series-scoreboard">
          <div class="series-big"><b>${n.points}</b><span>/ 30 PTS</span><em>${n.points>=20?"CHAMPIONSHIP PACE":"NEED 20 TO WIN THE CUP"}</em></div>
          <div class="series-heats">${n.results.map((h,f)=>`<div class="series-heat"><span>H${f+1}</span><b>${mr(h.position)}</b><em>+${h.points}</em></div>`).join("")}<div class="series-heat empty"><span>H${n.index+2}</span><b>?</b><em>?</em></div></div>
        </div>
        ${r?`<div class="next-heat-card"><span class="kicker">NEXT HEAT</span><h3>${ne((s==null?void 0:s.name)||"")} <i>${o==null?void 0:o.icon}</i> ${ne((o==null?void 0:o.name)||"")}</h3><p>${ne((o==null?void 0:o.desc)||"")} · ${r.laps} laps · difficulty remains brutal.</p></div>`:""}
        <div class="modal-actions">
          <button class="btn btn-primary btn-large" data-action="next-heat">START HEAT ${n.index+2} ▶</button>
          <button class="btn btn-ghost" data-action="abandon-series">ABANDON SERIES</button>
        </div>
        <p class="panel-hint">Points: 1st 10 · 2nd 8 · 3rd 6 · 4th 4 · 5th 2 · 6th 1 · Target 20/30</p>
      </div>`,"results-modal series-modal");const c=ge(".modal-backdrop",this.modals);c&&(c.dataset.locked="1"),document.body.classList.add("modal-open","result-open"),ge('[data-action="next-heat"]',this.modals).addEventListener("click",()=>{this.closeModal(),document.body.classList.remove("result-open"),this.race&&(this.race.dispose(),this.race=null),this.startHeat(n.index+1)}),ge('[data-action="abandon-series"]',this.modals).addEventListener("click",()=>{this.closeModal(),document.body.classList.remove("result-open"),this.race&&(this.race.dispose(),this.race=null),this.series=null,this.activeLaunch=null,this.route("map")})}showRaceResults(e,t){var u,p;const n=this.getProfile(),i=yt.find(x=>x.id===e.terrain),r=bt.find(x=>x.id===e.weather),s=t.mission,o=t.boss,c=t.series,h=t.unlock?pt.find(x=>x.id===t.unlock):null,f=t.source,d=t.title,l=t.success?"win":e.reason==="wrecked"?"wreck":"lose",g=f==="boss"?"RETURN TO CAREER":f==="tutorial"?"ENTER THE WASTELAND":f==="event"||s!=null&&s.event?"RETURN TO EVENTS":"RETURN TO MAP",v=o?`${o.name} · ${o.title}`:s?s.name:f==="tutorial"?"First Blood Tutorial":"Wasteland Race";this.showModal(`
      <div class="results-shell">
        <div class="result-banner ${l}">
          <div class="result-kicker">${o?o.boss?"MAIN BOSS":"UNDERBOSS":s?((u=Pa[s.type])==null?void 0:u.name)||"CONTRACT":"RACE"} · ${(i==null?void 0:i.short)||""}</div>
          <h1>${ne(d)}</h1>
          <p>${ne(t.subtitle||"")}</p>
          ${c?`<div class="series-final-points"><b>${c.points}</b><span>/ 30 PTS</span><em>${c.success?"CHAMPION":"TARGET 20"}</em></div>`:""}
        </div>
        <div class="results-body">
          <div class="results-left">
            <div class="result-position">
              <div class="position-big">${mr(e.position)}</div>
              <div><span>FINISH POSITION</span><b>OF ${e.total} DRIVERS</b></div>
              ${t.success?'<div class="result-seal">☠<span>CLEARED</span></div>':""}
            </div>
            <div class="result-stats">
              <div><span>TIME</span><b>${In(e.time)}</b></div>
              <div><span>BEST LAP</span><b>${In(e.bestLap)}</b></div>
              <div><span>MISSION</span><b>${ne(v)}</b></div>
              <div><span>CONDITIONS</span><b>${(r==null?void 0:r.name)||""} · ${(i==null?void 0:i.name)||""}</b></div>
            </div>
            ${s&&(s.type==="transport"||s.type==="taxi")?`
              <div class="objective-results">
                <div><span>${s.type==="transport"?"CARGO":"COMFORT"}</span><div class="rh-bar"><i style="width:${s.type==="transport"?e.cargo:e.comfort}%"></i></div><b>${Math.round(s.type==="transport"?e.cargo:e.comfort)}%</b></div>
                <div><span>HULL</span><div class="rh-bar"><i style="width:${e.hull}%"></i></div><b>${Math.round(e.hull)}%</b></div>
              </div>`:""}
            ${(s==null?void 0:s.type)==="gang"||(s==null?void 0:s.type)==="police"?`<div class="objective-results"><div><span>HULL</span><div class="rh-bar"><i style="width:${e.hull}%"></i></div><b>${Math.round(e.hull)}%</b></div></div>`:""}
            <div class="reward-panel">
              <div class="reward-line"><span>BOUNTY</span><b>${It(t.money)}</b></div>
              <div class="reward-line"><span>EXPERIENCE</span><b>+${t.xp} XP</b></div>
              ${t.money===0?'<p class="reward-note">No bounty for a failed contract. The car repairs are also your problem.</p>':""}
            </div>
            ${t.autosaved&&n.autosave?`<div class="result-autosave"><span class="save-dot"></span><div><b>AUTOSAVED</b><span>${ne(n.autosave.date)} · ${ne(n.autosave.time)}</span><em>${ne(n.autosave.location)}</em></div></div>`:""}
            ${h?`<div class="unlock-banner"><span class="unlock-icon">⚙</span><div><span>NEW VEHICLE ACQUIRED</span><b>${ne(h.name)}</b><em>${ne(h.desc)}</em></div><button class="btn btn-small btn-primary" data-action="result-garage">GARAGE</button></div>`:""}
            ${o&&t.success&&!h&&n.vehicles.includes(o.vehicle)?`<div class="unlock-banner owned"><span class="unlock-icon">✓</span><div><span>VEHICLE</span><b>${ne(((p=pt.find(x=>x.id===o.vehicle))==null?void 0:p.name)||"")}</b><em>Already in your garage.</em></div></div>`:""}
            ${f==="tutorial"&&t.success?'<div class="tutorial-complete"><b>TUTORIAL COMPLETE</b><p>The map is open. 13 contracts, 11 bosses, 15 territories and 8 weather hells are waiting. Your special move is tied to your origin — use it when the meter is full.</p></div>':""}
          </div>
          <div class="results-right">
            <div class="standings-head"><span>FINAL STANDINGS</span><b>${e.total} DRIVERS</b></div>
            <div class="standings">
              ${e.standings.map((x,b)=>`<div class="standing ${x.isPlayer?"player":""} ${x.boss?"boss":""}">
                <span class="standing-pos">${String(b+1).padStart(2,"0")}</span>
                <div><b>${ne(x.name)}</b><em>${ne(x.vehicle)}</em></div>
                <span class="standing-time">${x.finished?In(x.time):"DNF"}</span>
                ${x.boss?'<i class="boss-star">☠</i>':""}
              </div>`).join("")}
            </div>
          </div>
        </div>
        <div class="result-actions">
          <button class="btn btn-ghost" data-action="retry">⟳ ${c?"REPLAY SERIES":"RETRY"}</button>
          <button class="btn btn-ghost" data-action="result-garage">GARAGE</button>
          <button class="btn btn-primary btn-large" data-action="result-continue">${g} ▶</button>
        </div>
      </div>`,"results-modal");const m=ge(".modal-backdrop",this.modals);m&&(m.dataset.locked="1"),document.body.classList.add("modal-open","result-open"),ge('[data-action="retry"]',this.modals).addEventListener("click",()=>{document.body.classList.remove("result-open"),this.retryContract()}),ct('[data-action="result-garage"]',this.modals).forEach(x=>x.addEventListener("click",()=>{document.body.classList.remove("result-open"),this.closeModal(),this.race&&(this.race.dispose(),this.race=null),this.activeLaunch=null,this.series=null,this.route("garage")})),ge('[data-action="result-continue"]',this.modals).addEventListener("click",()=>{var M,C,A;document.body.classList.remove("result-open"),this.closeModal(),this.race&&(this.race.dispose(),this.race=null);const x=(M=this.activeLaunch)==null?void 0:M.source,b=(A=(C=this.activeLaunch)==null?void 0:C.mission)==null?void 0:A.event;this.activeLaunch=null,this.series=null,x==="boss"?this.route("career"):x==="tutorial"?this.route("map"):b?this.route("events"):this.route("map")})}}const gr=document.getElementById("boot-splash");new O0;requestAnimationFrame(()=>{requestAnimationFrame(()=>{gr&&(gr.classList.add("done"),setTimeout(()=>gr.remove(),900)),document.body.classList.add("ready")})});
