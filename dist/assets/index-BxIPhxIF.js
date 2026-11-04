(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const mt=[{id:"human",name:"Human",blurb:"Fragile flesh. Stubborn soul.",skin:"#b9866b",bonus:"Balanced grip",mod:{grip:1}},{id:"mutant",name:"Mutant",blurb:"Toxic blood, iron bones.",skin:"#8aa86b",bonus:"+Armor",mod:{armor:1.18}},{id:"ghost",name:"Ghost",blurb:"Half here. All terror.",skin:"#a9b8c6",bonus:"+Top speed",mod:{speed:1.05}},{id:"ghoul",name:"Ghoul",blurb:"Dead eyes, hungry engine.",skin:"#85837d",bonus:"+Boost",mod:{boost:1.15}},{id:"demon",name:"Demon",blurb:"Hell sent its own chauffeur.",skin:"#a34a3b",bonus:"+Acceleration",mod:{accel:1.12}},{id:"demigod",name:"Demigod",blurb:"Born of thunder and rust.",skin:"#c7a465",bonus:"+All stats, +ego",mod:{speed:1.04,accel:1.04,grip:1.04}}],Mc=[{id:"male",label:"Male"},{id:"female",label:"Female"}],bo=[{id:"sharp",label:"Sharp"},{id:"round",label:"Round"},{id:"gaunt",label:"Gaunt"},{id:"broad",label:"Broad"}],da=[{id:"mohawk",label:"Mohawk"},{id:"wild",label:"Wild"},{id:"long",label:"Long"},{id:"braids",label:"Braids"},{id:"ponytail",label:"Ponytail"},{id:"buzz",label:"Buzzcut"},{id:"bald",label:"Bald"},{id:"hood",label:"Hooded"}],tr=[{id:"black",label:"Raven",value:"#151316"},{id:"brown",label:"Dirt",value:"#5b3a25"},{id:"blonde",label:"Bone",value:"#c8b07a"},{id:"red",label:"Blood",value:"#8e2a20"},{id:"white",label:"Ash",value:"#d8d2c4"},{id:"blue",label:"Cobalt",value:"#24557a"},{id:"green",label:"Toxic",value:"#517a3a"},{id:"pink",label:"Candy",value:"#a84a72"}],Ji=[{id:"blue",label:"Shocking Blue",value:"#37c8ff",glow:"#37c8ff"},{id:"green",label:"Toxic Green",value:"#7bff49",glow:"#7bff49"},{id:"amber",label:"Ember",value:"#ffb13b",glow:"#ffa020"},{id:"red",label:"Hellfire",value:"#ff3b30",glow:"#ff2a1a"},{id:"violet",label:"Witchlight",value:"#c46bff",glow:"#a94bff"},{id:"grey",label:"Dead Grey",value:"#a8adb2",glow:null},{id:"white",label:"Blind White",value:"#f2f0e8",glow:"#fffbe0"}],xo=[{id:"human",label:"Human"},{id:"cyber",label:"Cyber"},{id:"hollow",label:"Hollow"}],So=[{id:"none",label:"None"},{id:"stubble",label:"Stubble"},{id:"mustache",label:"Mustache"},{id:"goatee",label:"Goatee"},{id:"beard",label:"Full Beard"},{id:"braided",label:"Braided Beard"}],ua=[{id:"none",label:"None"},{id:"eye",label:"Eye Scar"},{id:"cheek",label:"Cheek Slash"},{id:"x",label:"Crossed"},{id:"burn",label:"Burn Mark"}],Mo=[{id:"none",label:"None"},{id:"goggles",label:"Goggles"},{id:"bandana",label:"Bandana"},{id:"horns",label:"Horns"}],xt=[{id:"dunes",name:"Shifting Dunes",short:"DUNES",icon:"≋",sky:"#4a3d33",horizon:"#c59058",fog:"#8d6a49",ground:"#a67b4b",road:"#5d544a",accent:"#f0b25c",props:["dune","rock","wreck","cactus"],elevation:3.2,grip:.92,blurb:"Buried highways and hungry quicksand."},{id:"mountains",name:"Titan's Spine",short:"MOUNTAINS",icon:"▲",sky:"#20242c",horizon:"#8496ad",fog:"#596575",ground:"#525b64",road:"#3f454c",accent:"#bdd7ec",props:["mountain","pine","rock","wreck"],elevation:10,grip:.96,blurb:"Knife-edge passes above the cloud line."},{id:"desert",name:"Ashen Desert",short:"DESERT",icon:"☼",sky:"#3a302c",horizon:"#c78d4c",fog:"#94714d",ground:"#b08c58",road:"#57514b",accent:"#ffcd6d",props:["dune","rock","wreck","bones"],elevation:2.2,grip:.94,blurb:"A furnace that remembers every skeleton."},{id:"warzone",name:"No Man’s Land",short:"WAR ZONE",icon:"✶",sky:"#2a2926",horizon:"#a76f43",fog:"#6e5a49",ground:"#6c6252",road:"#3c3b37",accent:"#ff6a3d",props:["bunker","wire","wreck","crater"],elevation:3.6,grip:.9,blurb:"Shell craters, barbed wire, and live ordnance."},{id:"rainforest",name:"Rotwood Rainforest",short:"RAINFOREST",icon:"♣",sky:"#202925",horizon:"#62806a",fog:"#3f5e50",ground:"#3c5a3a",road:"#3c403b",accent:"#7dffb0",props:["tree","fern","wreck","rock"],elevation:4.4,grip:.87,blurb:"The canopy drips acid. The roots move."},{id:"dystopia",name:"Neon Dystopia",short:"DYSTOPIA",icon:"⌁",sky:"#171326",horizon:"#7a2b6a",fog:"#3d2348",ground:"#26212e",road:"#1f1d25",accent:"#ff3fb4",props:["tower","sign","wreck","pylon"],elevation:2.8,grip:1.02,blurb:"Corporations fell. The neon never did."},{id:"mines",name:"Black Vein Mines",short:"MINES",icon:"⛏",sky:"#191b1e",horizon:"#715844",fog:"#37332e",ground:"#3b342e",road:"#2f2b28",accent:"#ffba52",props:["mine","cart","rock","pylon"],elevation:5.5,grip:.93,blurb:"Tunnels lit by leaking gas and bad decisions."},{id:"beach",name:"Dead Tide Beach",short:"BEACH",icon:"≈",sky:"#2a3238",horizon:"#9d9a80",fog:"#6a7270",ground:"#a79b7c",road:"#565653",accent:"#67e1d8",props:["palm","wreck","rock","bones"],elevation:1.6,grip:.86,blurb:"The ocean is gone. The riptide stayed."},{id:"city",name:"Ruined Metropolis",short:"CITY",icon:"▥",sky:"#1f2228",horizon:"#865c4a",fog:"#4a4443",ground:"#42403e",road:"#262629",accent:"#ff8a3d",props:["tower","wreck","sign","rubble"],elevation:2,grip:1,blurb:"Downtown is a cemetery with streetlights."},{id:"suburbs",name:"Ashfall Suburbs",short:"SUBURBS",icon:"⌂",sky:"#2b2b2e",horizon:"#9b6e58",fog:"#635b58",ground:"#5e5c53",road:"#343537",accent:"#ffae5c",props:["house","wreck","tree","rubble"],elevation:2.4,grip:.98,blurb:"White picket fences, blackened lawns."},{id:"jungle",name:"Venom Jungle",short:"JUNGLE",icon:"☣",sky:"#17251d",horizon:"#4f824e",fog:"#2e5538",ground:"#2d4b2d",road:"#333a33",accent:"#b8ff3d",props:["tree","fern","idol","wreck"],elevation:4.8,grip:.84,blurb:"Every vine is a vein. Every flower has teeth."},{id:"ice",name:"Frozen Hells",short:"ICE TUNDRA",icon:"❄",sky:"#253039",horizon:"#bcd3dd",fog:"#879aa5",ground:"#c3d5dc",road:"#4b5a62",accent:"#aef4ff",props:["ice","pine","wreck","rock"],elevation:3,grip:.72,blurb:"A white grave that goes on forever."},{id:"volcano",name:"Cinder Peak",short:"VOLCANO",icon:"♨",sky:"#221515",horizon:"#e0572b",fog:"#6d2d21",ground:"#3a2b28",road:"#2a2423",accent:"#ff8a2b",props:["lava","rock","wreck","bones"],elevation:7.5,grip:.95,blurb:"The road is cooling. Sort of."},{id:"wasteland",name:"The Great Wastes",short:"WASTELAND",icon:"⌖",sky:"#302e2b",horizon:"#9b7f5b",fog:"#655b4d",ground:"#746b59",road:"#3f3d38",accent:"#e4c264",props:["wreck","bones","rock","pylon"],elevation:2.6,grip:.91,blurb:"The world ended here. It never left."},{id:"swamp",name:"Mire of Bones",short:"SWAMP",icon:"☠",sky:"#1d2422",horizon:"#62705b",fog:"#39453d",ground:"#3b4438",road:"#33352f",accent:"#a9d96c",props:["tree","bones","fern","wreck"],elevation:2.1,grip:.78,blurb:"The mud chews. The dead watch."}],bt=[{id:"clear",name:"Clear Sky",icon:"☾",tint:"#c79a72",fog:.9,grip:1,wind:.2,hazard:"none",desc:"A rare, ugly calm."},{id:"cloudy",name:"Cloudy",icon:"☁",tint:"#8c8a8a",fog:1.1,grip:1,wind:.4,hazard:"none",desc:"The sky is a bruise."},{id:"acid",name:"Acid Rain",icon:"☢",tint:"#8db36a",fog:1.35,grip:.8,wind:.5,hazard:"acid",desc:"Green rain eats paint and skin."},{id:"storm",name:"Thunderstorm",icon:"ϟ",tint:"#6a7c9e",fog:1.45,grip:.86,wind:.8,hazard:"lightning",desc:"Lightning hunts the leader."},{id:"twister",name:"Twister",icon:"◎",tint:"#a68c6e",fog:1.5,grip:.88,wind:1.7,hazard:"tornado",desc:"The wind has a body."},{id:"hurricane",name:"Hurricane",icon:"≋",tint:"#6d8591",fog:1.55,grip:.75,wind:2.2,hazard:"wind",desc:"Crosswinds with a grudge."},{id:"flood",name:"Flood",icon:"≈",tint:"#5d7a72",fog:1.4,grip:.65,wind:.6,hazard:"water",desc:"Black water over the asphalt."},{id:"quicksand",name:"Quicksand",icon:"◉",tint:"#a48755",fog:1.25,grip:.7,wind:.5,hazard:"sink",desc:"The ground is a mouth."}],on=[{id:"easy",name:"Easy",ai:.82,reward:.8,desc:"The wasteland goes easy on you."},{id:"normal",name:"Normal",ai:.94,reward:1,desc:"A fair fight for a bad world."},{id:"hard",name:"Hard",ai:1.05,reward:1.3,desc:"Everyone wants you dead."},{id:"insane",name:"Insane",ai:1.14,reward:1.6,desc:"Drikus is watching. Smiling."}],pt=[{id:"rust_reaper",name:"Rust Reaper",klass:"Muscle",shape:"muscle",color:"#7b3b2a",accent:"#d9a441",desc:"A dead man’s V8 held together by spite.",speed:62,accel:66,grip:62,armor:50,boost:8,unlock:"start"},{id:"acid_runner",name:"Acid Runner",klass:"Buggy",shape:"buggy",color:"#586b2c",accent:"#b6ff37",desc:"Built for green rain and bad terrain.",speed:64,accel:70,grip:71,armor:45,boost:9,unlock:"mission",unlockText:"Complete “Acid Run”"},{id:"dune_worm",name:"Dune Worm",klass:"Raider",shape:"buggy",color:"#a67b45",accent:"#ffcf6a",desc:"Wide tires, wider grin. Eats dunes.",speed:67,accel:68,grip:69,armor:55,boost:8,unlock:"mission",unlockText:"Complete “Sand Delivery”"},{id:"hearse_taxi",name:"Last Ride Taxi",klass:"Hearse",shape:"sedan",color:"#232322",accent:"#ffbe3d",desc:"Fares pay double if they arrive breathing.",speed:60,accel:60,grip:65,armor:62,boost:10,unlock:"mission",unlockText:"Complete “Fare to Hell”"},{id:"anubis_chariot",name:"Anubis Chariot",klass:"God-tier",shape:"exotic",color:"#191817",accent:"#e7b93f",desc:"Ichi’s jackal-headed war barge.",speed:79,accel:78,grip:73,armor:70,boost:13,unlock:"career",unlockText:"Defeat Ichi"},{id:"cerberus_fang",name:"Cerberus Fang",klass:"Juggernaut",shape:"truck",color:"#d4d0c4",accent:"#9d1f24",desc:"Three jaws. One gearbox.",speed:74,accel:72,grip:69,armor:82,boost:12,unlock:"career",unlockText:"Defeat Chloe"},{id:"valkyrie",name:"Valkyrie",klass:"Interceptor",shape:"exotic",color:"#d8dce0",accent:"#4bc8ff",desc:"Jill’s silver spear. It only knows forward.",speed:86,accel:82,grip:75,armor:56,boost:14,unlock:"career",unlockText:"Defeat Jill"},{id:"wool_reaper",name:"Wool Reaper",klass:"Battering Ram",shape:"truck",color:"#d8d2c1",accent:"#6a1e1e",desc:"Timone’s evil sheep. It headbutts first.",speed:68,accel:74,grip:66,armor:78,boost:11,unlock:"career",unlockText:"Defeat Timone"},{id:"foxfire",name:"Foxfire",klass:"Drifter",shape:"muscle",color:"#8c3c1f",accent:"#ff8b2b",desc:"Domino’s sly little lie with a spoiler.",speed:81,accel:79,grip:84,armor:52,boost:13,unlock:"career",unlockText:"Defeat Domino"},{id:"bubble_bumper",name:"Bubble Bumper",klass:"Goof",shape:"buggy",color:"#6b3f76",accent:"#8cffcf",desc:"It shouldn’t work. It absolutely does.",speed:73,accel:77,grip:70,armor:64,boost:17,unlock:"career",unlockText:"Defeat Bubbles"},{id:"midnight_coffin",name:"Midnight Coffin",klass:"Shadow",shape:"muscle",color:"#0d0e10",accent:"#5c7c9b",desc:"Oscar’s black-on-black funeral.",speed:84,accel:80,grip:76,armor:58,boost:13,unlock:"career",unlockText:"Defeat Oscar"},{id:"boost_hog",name:"Boost Hog",klass:"Speed Freak",shape:"truck",color:"#1c1b1a",accent:"#ff5c2b",desc:"Sussie’s fat black rocket. All nitrous.",speed:82,accel:88,grip:67,armor:72,boost:20,unlock:"career",unlockText:"Defeat Sussie"},{id:"night_queen",name:"Night Queen",klass:"Royalty",shape:"exotic",color:"#0b0b10",accent:"#37c8ff",desc:"Mandy-Lee’s black throne. The blue eyes are headlights.",speed:88,accel:84,grip:80,armor:68,boost:16,unlock:"career",unlockText:"Defeat Mandy-Lee"},{id:"beast_titan",name:"Beast Titan",klass:"Demigod",shape:"truck",color:"#5b3d24",accent:"#ff7a24",desc:"Zanrich’s animal. It breathes through the grille.",speed:85,accel:83,grip:78,armor:94,boost:14,unlock:"career",unlockText:"Defeat Zanrich"},{id:"jester_chaos",name:"Jester of Chaos",klass:"Insanity",shape:"exotic",color:"#3a1c56",accent:"#66ff3b",desc:"Drikus’s punchline. Nobody is laughing.",speed:92,accel:90,grip:82,armor:75,boost:19,unlock:"career",unlockText:"Defeat Drikus the Insane"},{id:"blood_moon_gt",name:"Blood Moon GT",klass:"Event",shape:"exotic",color:"#4b0d12",accent:"#ff3d38",desc:"A special-event predator with a red halo.",speed:90,accel:87,grip:83,armor:60,boost:18,unlock:"event",unlockText:"Win the Blood Moon Cup"}],yi=[{id:"ichi",name:"Ichi",title:"Warden of the Black Nile",underboss:!0,order:1,terrain:"mines",weather:"storm",difficulty:"easy",laps:2,vehicle:"anubis_chariot",portrait:{origin:"ghoul",headgear:"anubis",skin:"#7d745d",hair:"bald",eyes:"amber",eyeStyle:"hollow",scar:"none"},quote:"Your heart weighs less than a spark plug.",desc:"Anubis-faced gatekeeper of the underworld. His chariot glows with dead gold.",reward:900},{id:"chloe",name:"Chloe",title:"The White Cerberus",underboss:!0,order:2,terrain:"ice",weather:"cloudy",difficulty:"easy",laps:2,vehicle:"cerberus_fang",portrait:{origin:"mutant",headgear:"ears",skin:"#d8d3c6",hair:"white",eyes:"red",eyeStyle:"cyber",scar:"eye",fangs:!0},quote:"Three heads. Zero patience.",desc:"A white-furred cerberus in a collar of teeth. Her vehicle growls in three-part harmony.",reward:1100},{id:"jill",name:"Jill",title:"The Majestic",underboss:!0,order:3,terrain:"mountains",weather:"hurricane",difficulty:"normal",laps:2,vehicle:"valkyrie",portrait:{origin:"demigod",headgear:"none",skin:"#d5b78f",hair:"long",hairColor:"#d8d2c4",eyes:"blue",eyeStyle:"human",scar:"none",gender:"female"},quote:"Speed is the only prayer I answer.",desc:"Poised, untouchable, and gone before the thunder lands. Her silver interceptor leaves light behind.",reward:1300},{id:"timone",name:"Timone",title:"The Evil Sheep",underboss:!0,order:4,terrain:"rainforest",weather:"acid",difficulty:"normal",laps:2,vehicle:"wool_reaper",portrait:{origin:"mutant",headgear:"ears",skin:"#c8c1ae",hair:"white",eyes:"green",eyeStyle:"human",scar:"x",wool:!0},quote:"Baa. Baa. Bleed.",desc:"A sheep with a butcher’s eyes. The flock follows him. The flock is not alive.",reward:1500},{id:"domino",name:"Domino",title:"The Sly Fox",underboss:!0,order:5,terrain:"suburbs",weather:"twister",difficulty:"normal",laps:2,vehicle:"foxfire",portrait:{origin:"mutant",headgear:"ears",skin:"#b66a3b",hair:"wild",hairColor:"#8c3c1f",eyes:"amber",eyeStyle:"human",scar:"cheek",muzzle:!0},quote:"I don’t cheat. I simply win differently.",desc:"A fox-faced trickster who cuts corners that shouldn’t exist. His car is faster than it looks.",reward:1700},{id:"bubbles",name:"Bubbles",title:"The Goof",underboss:!0,order:6,terrain:"beach",weather:"flood",difficulty:"hard",laps:2,vehicle:"bubble_bumper",portrait:{origin:"ghoul",headgear:"ears",skin:"#8e917e",hair:"mohawk",hairColor:"#a84a72",eyes:"violet",eyeStyle:"cyber",scar:"burn",muzzle:!0,goof:!0},quote:"Wanna see something stupid and incredible?",desc:"A giggling dog-shaped goof in a car that violates physics and taste. Never count him out.",reward:1900},{id:"oscar",name:"Oscar",title:"The Midnight Driver",underboss:!0,order:7,terrain:"city",weather:"clear",difficulty:"hard",laps:2,vehicle:"midnight_coffin",portrait:{origin:"ghost",headgear:"none",skin:"#6f7880",hair:"bald",eyes:"white",eyeStyle:"hollow",scar:"none",gender:"male",ghost:!0},quote:"You won’t see me. You’ll only hear the door close.",desc:"A pitch-black silhouette at the wheel of a pitch-black car. His headlights are always off.",reward:2200},{id:"sussie",name:"Sussie",title:"The Overdrive",underboss:!0,order:8,terrain:"wasteland",weather:"quicksand",difficulty:"hard",laps:3,vehicle:"boost_hog",portrait:{origin:"human",headgear:"none",skin:"#6c4938",hair:"braids",hairColor:"#151316",eyes:"amber",eyeStyle:"human",scar:"cheek",gender:"female",build:"heavy"},quote:"Big girl. Bigger boost. Bye.",desc:"A mountain of a driver with a mountain of nitrous. Most rivals only ever see her taillights.",reward:2600},{id:"mandy",name:"Mandy-Lee",title:"Queen of the Dark",boss:!0,order:9,terrain:"dystopia",weather:"acid",difficulty:"hard",laps:3,vehicle:"night_queen",portrait:{origin:"demigod",headgear:"crown",skin:"#e2c7b4",hair:"long",hairColor:"#151316",eyes:"blue",eyeStyle:"cyber",scar:"none",gender:"female"},quote:"Kneel, or be the road I drive over.",desc:"Black hair, shocking blue eyes, and a kingdom made of fear. The Queen of the Dark does not lose.",reward:5e3},{id:"zanrich",name:"Zanrich",title:"The Wild Demigod",boss:!0,order:10,terrain:"volcano",weather:"twister",difficulty:"insane",laps:2,vehicle:"beast_titan",portrait:{origin:"demigod",headgear:"horns",skin:"#8c552c",hair:"wild",hairColor:"#2b1a12",eyes:"amber",eyeStyle:"human",scar:"x",fangs:!0},quote:"STRENGTH IS THE ONLY LANGUAGE. MINE IS LOUDER.",desc:"A demigod of power and pure animal rage. His Beast Titan is a moving mountain with a hunger.",reward:7500},{id:"drikus",name:"Drikus the Insane",title:"Demigod of Insanity",boss:!0,order:11,terrain:"jungle",weather:"storm",difficulty:"insane",laps:2,vehicle:"jester_chaos",portrait:{origin:"demigod",headgear:"jester",skin:"#d7cdb5",hair:"wild",hairColor:"#3a1c56",eyes:"green",eyeStyle:"cyber",scar:"eye",fangs:!0,joker:!0,facepaint:!0},quote:"HAHAHAHA—wait, were we racing? I forgot the rules. I wrote them.",desc:"The final punchline. A demigod of insanity wearing a jester’s grin, driving a car that should not exist.",reward:12e3}],yc=yi.filter(a=>a.underboss),Ec=yi.filter(a=>a.boss),fa={transport:{name:"Transport",icon:"▣",desc:"Haul volatile cargo across hostile ground. Keep it intact."},taxi:{name:"Taxi",icon:"☎",desc:"Get the passenger there alive. Comfort pays bonuses."},race:{name:"Single Race",icon:"⚑",desc:"One track. One winner. No excuses."},cup:{name:"Cup Race",icon:"♜",desc:"Three-race championship. Points decide everything."},tournament:{name:"Tournament",icon:"♛",desc:"A brutal bracket against the wasteland’s worst."},gang:{name:"Escape Gang",icon:"☠",desc:"Survive a pack of gang vehicles until the heat dies."},police:{name:"Apocalyptic Police",icon:"✪",desc:"The last precinct wants you. Outrun the sirens."},pvp:{name:"PvP Duel",icon:"⚔",desc:"Head-to-head against a rival driver. Local AI stand-in."},event:{name:"Special Event",icon:"☄",desc:"Limited-time wasteland carnage with unique rewards."}},kn=[{id:"m_acid_run",type:"transport",name:"Acid Run",terrain:"rainforest",weather:"acid",difficulty:"normal",laps:2,dist:.18,reward:700,xp:180,cargo:"12 barrels of green acid",vehicleReward:"acid_runner",blurb:"The Rotwood is raining something that used to be water. Get the barrels through without dissolving."},{id:"m_sand_delivery",type:"transport",name:"Sand Delivery",terrain:"dunes",weather:"quicksand",difficulty:"easy",laps:2,dist:.34,reward:520,xp:140,cargo:"A live “sand engine” core",vehicleReward:"dune_worm",blurb:"The Dune Worm gang needs a core. The ground needs you. Only one of you gets what it wants."},{id:"m_fare_hell",type:"taxi",name:"Fare to Hell",terrain:"suburbs",weather:"flood",difficulty:"normal",laps:2,dist:.52,reward:760,xp:200,cargo:"A very nervous preacher",vehicleReward:"hearse_taxi",blurb:"He says he can smell sulfur. That might just be the upholstery. Keep the passenger calm."},{id:"m_scrapyard_sprint",type:"race",name:"Scrapyard Sprint",terrain:"wasteland",weather:"cloudy",difficulty:"easy",laps:3,dist:.27,reward:420,xp:120,blurb:"A quick loop around the bones of the old world. Winner takes the good tires."},{id:"m_neon_cup",type:"cup",name:"Neon Corpse Cup",terrain:"dystopia",weather:"acid",difficulty:"normal",laps:2,dist:.72,reward:1600,xp:420,blurb:"Three races under the dead neon. Corporate ghosts sponsor the carnage."},{id:"m_dead_tide_cup",type:"cup",name:"Dead Tide Cup",terrain:"beach",weather:"hurricane",difficulty:"hard",laps:2,dist:.61,reward:2300,xp:520,blurb:"Salt, wind, and three heats of bad intentions. The tide is coming back. Probably."},{id:"m_cinder_tournament",type:"tournament",name:"Cinder Peak Tournament",terrain:"volcano",weather:"twister",difficulty:"hard",laps:2,dist:.83,reward:3e3,xp:650,blurb:"A bracket of killers racing on cooling lava. The loser is not always the one who crashes."},{id:"m_gang_hunt",type:"gang",name:"Escape the Bone Gang",terrain:"swamp",weather:"storm",difficulty:"normal",laps:1,dist:.44,reward:1100,xp:280,blurb:"You took something that belonged to them. Their engines are very close now."},{id:"m_police_siege",type:"police",name:"Precinct 13 Pursuit",terrain:"city",weather:"storm",difficulty:"hard",laps:1,dist:.48,reward:1800,xp:360,blurb:"The apocalyptic police have declared you a public nuisance. Survive their attention."},{id:"m_pvp_duel",type:"pvp",name:"Rust Duel",terrain:"warzone",weather:"clear",difficulty:"normal",laps:2,dist:.29,reward:900,xp:250,blurb:"One rival. One track. An audience of crows. Local AI stand-in for PvP."},{id:"m_ice_cup",type:"cup",name:"White Death Cup",terrain:"ice",weather:"cloudy",difficulty:"hard",laps:2,dist:.66,reward:2600,xp:560,blurb:"Three heats on black ice. Studded tires are for cowards."},{id:"m_volcano_tour",type:"tournament",name:"Lava Bracket",terrain:"volcano",weather:"clear",difficulty:"insane",laps:2,dist:.91,reward:4200,xp:800,blurb:"The final bracket. Win, and the wasteland learns your name."},{id:"m_blood_moon",type:"event",name:"Blood Moon Cup",terrain:"volcano",weather:"twister",difficulty:"hard",laps:3,dist:.95,reward:5500,xp:1e3,vehicleReward:"blood_moon_gt",event:!0,blurb:"Once a blood moon, the wasteland races for the Blood Moon GT. Event reward: the car itself."}],Tc=["rainforest","dystopia","volcano"],wc=["desert","warzone","jungle"],Ac=["The road is dead. Long live the road.","Every lap is a small apocalypse.","You cannot outrun the weather. You can outdrive it.","The wasteland keeps score.","Blood is just high-viscosity oil.","Three demi-gods. Eight underbosses. One steering wheel.","Drikus is smiling somewhere. That is never good.","The dead do not honk."],yo="hellride_apocalypse_v1",Eo="hellride_slots_v1",Wr={master:.8,music:.7,sfx:.85,quality:"medium",gore:"blood",cameraShake:!0,showFps:!1,controls:"auto"};function Fl(a="female"){return{gender:a,face:"sharp",hair:"mohawk",hairColor:"black",eyeColor:"blue",eyeStyle:"human",facialHair:"none",scar:"eye",headgear:"none",skin:"#b9866b",origin:"human"}}function Bl(){return"p_"+Date.now().toString(36)+"_"+Math.random().toString(36).slice(2,7)}function Rc({name:a,gender:e,origin:t,looks:n}){return{id:Bl(),name:(a||"NAMELESS").toUpperCase().slice(0,14),gender:e||"female",origin:t||"human",looks:{...Fl(e),...n,origin:t||(n==null?void 0:n.origin)||"human"},createdAt:Date.now(),lastActive:Date.now(),autosave:null,money:650,xp:0,level:1,tutorialDone:!1,victories:0,races:0,drifts:0,bestLap:null,vehicles:["rust_reaper"],equipped:"rust_reaper",career:{defeated:[],current:0},completed:{},missionWins:0,series:null,settings:{...Wr}}}function To(a,e){try{return a?JSON.parse(a):e}catch{return e}}class Cc{constructor(){this.state=To(localStorage.getItem(yo),null),(!this.state||!Array.isArray(this.state.profiles))&&(this.state={profiles:[],currentProfileId:null}),this.slots=To(localStorage.getItem(Eo),[null,null,null])}persist(){try{localStorage.setItem(yo,JSON.stringify(this.state)),localStorage.setItem(Eo,JSON.stringify(this.slots))}catch(e){console.warn("Save failed",e)}}profiles(){return[...this.state.profiles].sort((e,t)=>(t.lastActive||0)-(e.lastActive||0))}profile(){const e=this.state.currentProfileId;return this.state.profiles.find(t=>t.id===e)||null}create(e){const t=Rc(e);return this.state.profiles.push(t),this.state.currentProfileId=t.id,this.persist(),t}login(e){const t=this.state.profiles.find(n=>n.id===e);return t?(t.lastActive=Date.now(),this.state.currentProfileId=t.id,this.persist(),t):null}logout(){this.state.currentProfileId=null,this.persist()}remove(e){this.state.profiles=this.state.profiles.filter(t=>t.id!==e),this.state.currentProfileId===e&&(this.state.currentProfileId=null),this.persist()}update(e={}){const t=this.profile();return t?(Object.assign(t,e),t.lastActive=Date.now(),this.persist(),t):null}updateSettings(e){const t=this.profile();if(t)return t.settings={...Wr,...t.settings||{},...e},this.persist(),t.settings}autosave(e="THE WASTELAND",t=""){const n=this.profile();if(!n)return null;const s=new Date;return n.autosave={at:s.getTime(),date:s.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}).toUpperCase(),time:s.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),location:String(e||"THE WASTELAND").toUpperCase(),detail:String(t||"")},n.lastActive=s.getTime(),this.persist(),n.autosave}addReward(e,t){const n=this.profile();if(!n)return;n.money+=Math.max(0,Math.round(e)),n.xp+=Math.max(0,Math.round(t));const s=Math.max(1,Math.floor(Math.sqrt(n.xp/250))+1);return n.level=Math.min(s,99),this.persist(),n}saveSlot(e){const t=this.profile();return t?(this.slots[e]={savedAt:Date.now(),name:t.name,level:t.level,money:t.money,profile:JSON.parse(JSON.stringify(t))},this.persist(),!0):!1}loadSlot(e){const t=this.slots[e];if(!(t!=null&&t.profile))return null;const n=JSON.parse(JSON.stringify(t.profile));n.id=n.id||Bl(),n.lastActive=Date.now();const s=this.state.profiles.findIndex(r=>r.id===n.id);return s>=0?this.state.profiles[s]=n:this.state.profiles.push(n),this.state.currentProfileId=n.id,this.persist(),n}clearSlot(e){this.slots[e]=null,this.persist()}hasContinue(){return this.profiles().length>0}exportProfile(){return JSON.stringify(this.profile(),null,2)}}function It(a){return"$"+Math.round(a||0).toLocaleString("en-US")}function Pn(a){if(a==null||!Number.isFinite(a))return"--:--.--";const e=Math.floor(a/60),t=Math.floor(a%60),n=Math.floor(a%1*100);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}.${String(n).padStart(2,"0")}`}function fn(a,e){const t=a.replace("#",""),n=parseInt(t.length===3?t.split("").map(o=>o+o).join(""):t,16);let s=n>>16&255,r=n>>8&255,i=n&255;return s=Math.max(0,Math.min(255,s+e)),r=Math.max(0,Math.min(255,r+e)),i=Math.max(0,Math.min(255,i+e)),`rgb(${s},${r},${i})`}function Pc(a){let e=2166136261;for(let t=0;t<a.length;t++)e^=a.charCodeAt(t),e=Math.imul(e,16777619);return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Lc(a,e,t){var n;return((n=a.find(s=>s.id===e))==null?void 0:n.value)||t}function Ic(a,e){return a.find(t=>t.id===e)||Ji[0]}function Dc(a={}){const e=a.origin||"human";return{gender:"female",face:"sharp",hair:"mohawk",hairColor:"black",eyeColor:"blue",eyeStyle:"human",facialHair:"none",scar:"none",headgear:"none",skin:(mt.find(n=>n.id===e)||mt[0]).skin,...a,origin:e}}function Fi(a,e={},t={}){const n=Dc(e),s=Math.min(2,window.devicePixelRatio||1),r=t.size||512;a.width=r*s,a.height=r*s;const i=a.getContext("2d");i.scale(r*s/512,r*s/512);const o=Pc((n.name||"")+JSON.stringify(n)),c=n.skin||"#b9866b",h=fn(c,-52),p=fn(c,40),u=Lc(tr,n.hairColor,n.hairHex||"#151316"),l=Ic(Ji,n.eyeColor),g=l.value,_=l.glow||g,f=256,d=238,m=n.face==="broad"?66:n.face==="gaunt"?52:n.face==="round"?61:58,x=n.gender==="female",M=n.origin||"human",E=t.boss,R=i.createRadialGradient(f,d-10,20,f,d,360);R.addColorStop(0,t.bg||"#361c18"),R.addColorStop(.55,"#160f10"),R.addColorStop(1,"#070708"),i.fillStyle=R,i.fillRect(0,0,512,512),i.save(),i.globalAlpha=.14,i.strokeStyle=E?"#c1121f":"#d8a44a";for(let $=0;$<9;$++){i.lineWidth=1+o()*2,i.beginPath();let Q=o()*512,De=0;i.moveTo(Q,De);for(let Oe=0;Oe<5;Oe++)Q+=(o()-.5)*70,De+=90+o()*30,i.lineTo(Q,De);i.stroke()}i.restore(),i.save(),i.translate(f,d),i.strokeStyle="rgba(205,164,74,0.18)",i.lineWidth=2,i.beginPath(),i.arc(0,0,218,.15,Math.PI*1.85),i.stroke(),i.strokeStyle="rgba(160,20,26,0.25)",i.beginPath(),i.arc(0,0,230,Math.PI*.2,Math.PI*1.55),i.stroke(),i.restore(),i.save();const A=n.jacket||(M==="ghost"?"#313943":E?"#201417":"#232327"),w=fn(A,28),L=i.createLinearGradient(0,370,0,512);L.addColorStop(0,w),L.addColorStop(1,"#0b0b0c"),i.fillStyle=L,i.beginPath(),i.moveTo(52,512),i.bezierCurveTo(58,415,122,380,190,366),i.lineTo(322,366),i.bezierCurveTo(390,380,454,415,460,512),i.closePath(),i.fill(),i.fillStyle=fn(A,42),i.beginPath(),i.moveTo(186,366),i.lineTo(256,454),i.lineTo(326,366),i.lineTo(300,354),i.lineTo(256,414),i.lineTo(212,354),i.closePath(),i.fill(),i.strokeStyle="rgba(0,0,0,0.55)",i.lineWidth=12,i.beginPath(),i.moveTo(150,402),i.lineTo(224,512),i.stroke(),i.beginPath(),i.moveTo(362,402),i.lineTo(288,512),i.stroke(),i.strokeStyle="rgba(180,38,34,0.5)",i.lineWidth=3,i.beginPath(),i.moveTo(154,406),i.lineTo(228,512),i.stroke(),i.beginPath(),i.moveTo(358,406),i.lineTo(284,512),i.stroke(),i.fillStyle="#b8a57b";for(let $=0;$<5;$++)i.beginPath(),i.arc(118+$*16,422+$*15,2.6,0,7),i.fill(),i.beginPath(),i.arc(394-$*16,422+$*15,2.6,0,7),i.fill();if(i.fillStyle="rgba(0,0,0,0.42)",i.fillRect(310,452,74,34),i.strokeStyle="rgba(190,160,100,0.5)",i.lineWidth=1.5,i.setLineDash([4,4]),i.strokeRect(314,456,66,26),i.setLineDash([]),i.fillStyle="rgba(190,160,100,0.65)",i.font="bold 14px monospace",i.textAlign="center",i.fillText("HELL",347,474),i.restore(),i.fillStyle=h,i.beginPath(),i.moveTo(f-28,320),i.lineTo(f+28,320),i.lineTo(f+34,384),i.lineTo(f-34,384),i.closePath(),i.fill(),i.fillStyle="rgba(0,0,0,0.35)",i.beginPath(),i.ellipse(f,326,31,12,0,0,7),i.fill(),n.hair==="long"||n.hair==="braids"||n.hair==="wild"||n.hair==="ponytail"){if(i.fillStyle=u,n.hair==="ponytail")i.beginPath(),i.ellipse(f+64,230,26,74,-.3,0,7),i.fill(),i.beginPath(),i.ellipse(f+84,304,20,52,-.15,0,7),i.fill();else if(i.beginPath(),i.moveTo(f-m-12,170),i.bezierCurveTo(f-m-48,270,f-m-24,370,f-m+8,400),i.lineTo(f+m-2,400),i.bezierCurveTo(f+m+34,350,f+m+38,240,f+m+8,166),i.closePath(),i.fill(),n.hair==="braids"){i.strokeStyle=fn(u,25),i.lineWidth=10;for(let $=0;$<4;$++)i.beginPath(),i.moveTo(f-m+8+$*16,300),i.quadraticCurveTo(f-m+20+$*16,360,f-m+8+$*16,420),i.stroke(),i.beginPath(),i.moveTo(f+m-8-$*16,300),i.quadraticCurveTo(f+m-20-$*16,360,f+m-8-$*16,420),i.stroke()}}const G=()=>{i.beginPath(),i.moveTo(f-m,d-32),i.bezierCurveTo(f-m-2,d-122,f+m+2,d-122,f+m,d-32),i.bezierCurveTo(f+m*.98,d+26,f+m*.66,d+84,f+(x?20:26),d+108),i.quadraticCurveTo(f,d+120,f-(x?20:26),d+108),i.bezierCurveTo(f-m*.66,d+84,f-m*.98,d+26,f-m,d-32),i.closePath()};i.fillStyle=h,i.beginPath(),i.ellipse(f-m+2,d-5,13,22,.2,0,7),i.fill(),i.beginPath(),i.ellipse(f+m-2,d-5,13,22,-.2,0,7),i.fill();const v=i.createLinearGradient(f-m,d-100,f+m,d+110);v.addColorStop(0,p),v.addColorStop(.45,c),v.addColorStop(1,h),i.fillStyle=v,G(),i.fill(),i.save(),G(),i.clip(),i.fillStyle="rgba(0,0,0,0.16)",i.beginPath(),i.ellipse(f-m*.72,d+10,18,70,.08,0,7),i.fill(),i.beginPath(),i.ellipse(f+m*.72,d+10,18,70,-.08,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.1)",i.beginPath(),i.ellipse(f-31,d+32,17,9,-.3,0,7),i.fill(),i.beginPath(),i.ellipse(f+31,d+32,17,9,.3,0,7),i.fill();for(let $=0;$<26;$++)i.fillStyle=`rgba(${30+o()*40},${22+o()*30},${18+o()*20},${.04+o()*.1})`,i.beginPath(),i.arc(f-m+o()*m*2,d-90+o()*195,1+o()*6,0,7),i.fill();i.restore();const b=d-10,k=m*.42,F=m*.28,N=Nc(n.eyeStyle,x),X=$=>{const Q=f+$*k;if(n.eyeStyle==="cyber"){i.save(),i.fillStyle="rgba(15,10,12,0.82)",i.beginPath(),i.moveTo(Q-23,b-12),i.lineTo(Q+23,b-12),i.lineTo(Q+20,b+11),i.lineTo(Q-20,b+11),i.closePath(),i.fill(),i.strokeStyle="rgba(160,140,110,0.5)",i.lineWidth=1.5,i.stroke(),i.shadowBlur=16,i.shadowColor=_,i.fillStyle=_,i.beginPath(),i.roundRect(Q-15,b-2.5,30,5,3),i.fill(),i.restore();return}if(n.eyeStyle==="hollow"){i.save();const Oe=i.createRadialGradient(Q,b,1,Q,b,22);Oe.addColorStop(0,g),Oe.addColorStop(.25,_),Oe.addColorStop(.4,"rgba(8,6,7,0.9)"),Oe.addColorStop(1,"#0a0708"),i.fillStyle=Oe,i.beginPath(),i.ellipse(Q,b,20,17,0,0,7),i.fill(),i.fillStyle="#050405",i.beginPath(),i.ellipse(Q,b,7,11,0,0,7),i.fill(),i.shadowBlur=15,i.shadowColor=_,i.fillStyle=g,i.beginPath(),i.arc(Q,b,3.4,0,7),i.fill(),i.restore();return}i.save(),i.fillStyle=M==="ghost"?"rgba(220,230,232,0.75)":"#ded7c9",i.beginPath(),i.ellipse(Q,b,F,N,0,0,7),i.fill(),i.strokeStyle="rgba(25,15,14,0.6)",i.lineWidth=1.6,i.beginPath(),i.ellipse(Q,b,F,N,0,0,7),i.stroke(),i.shadowBlur=l.glow?13:0,i.shadowColor=_;const De=i.createRadialGradient(Q,b,1,Q,b,F*.7);De.addColorStop(0,_),De.addColorStop(.55,g),De.addColorStop(1,fn(g,-55)),i.fillStyle=De,i.beginPath(),i.arc(Q,b,F*.68,0,7),i.fill(),i.shadowBlur=0,i.fillStyle="#070607",i.beginPath(),i.ellipse(Q,b,F*.22,N*.62,0,0,7),i.fill(),i.fillStyle="rgba(255,255,255,0.85)",i.beginPath(),i.arc(Q-3,b-3,2.1,0,7),i.fill(),i.strokeStyle="rgba(40,25,25,0.35)",i.lineWidth=1,i.beginPath(),i.moveTo(Q-F,b+N+2),i.quadraticCurveTo(Q,b+N+7,Q+F,b+N+2),i.stroke(),i.restore()};X(-1),X(1),i.strokeStyle=fn(u,18),i.lineWidth=x?4:6,i.lineCap="round",i.beginPath(),i.moveTo(f-k-15,b-18),i.quadraticCurveTo(f-k,b-25,f-k+14,b-17),i.stroke(),i.beginPath(),i.moveTo(f+k-14,b-17),i.quadraticCurveTo(f+k,b-25,f+k+15,b-18),i.stroke(),(n.browScar||n.scar==="eye")&&(i.strokeStyle="rgba(220,170,150,0.65)",i.lineWidth=2,i.beginPath(),i.moveTo(f+k-10,b-40),i.lineTo(f+k+16,b+7),i.stroke()),i.strokeStyle="rgba(55,30,26,0.45)",i.lineWidth=x?3:4,i.beginPath(),i.moveTo(f-2,b+8),i.quadraticCurveTo(f-8,d+35,f-13,d+39),i.stroke(),i.strokeStyle="rgba(0,0,0,0.25)",i.lineWidth=2,i.beginPath(),i.moveTo(f-14,d+41),i.quadraticCurveTo(f,d+47,f+15,d+40),i.stroke(),i.fillStyle="rgba(0,0,0,0.16)",i.beginPath(),i.ellipse(f-13,d+40,4,2.4,0,0,7),i.fill(),i.beginPath(),i.ellipse(f+13,d+40,4,2.4,0,0,7),i.fill();const O=d+70;i.strokeStyle=n.joker?"#4b0b1f":"rgba(65,26,28,0.9)",i.lineWidth=x?5:4,i.beginPath(),n.joker?(i.moveTo(f-38,O-2),i.quadraticCurveTo(f,O+24,f+38,O-2),i.stroke(),i.strokeStyle="rgba(180,20,40,0.85)",i.lineWidth=2.5,i.beginPath(),i.moveTo(f-43,O-8),i.quadraticCurveTo(f,O+30,f+43,O-8),i.stroke()):(i.moveTo(f-20,O),i.quadraticCurveTo(f,O+(x?8:4),f+20,O),i.stroke()),x&&(i.fillStyle="rgba(120,50,50,0.4)",i.beginPath(),i.ellipse(f,O+7,16,4,0,0,7),i.fill()),n.fangs&&(i.fillStyle="#e8e2d2",i.beginPath(),i.moveTo(f-19,O+2),i.lineTo(f-13,O+13),i.lineTo(f-8,O+2),i.fill(),i.beginPath(),i.moveTo(f+19,O+2),i.lineTo(f+13,O+13),i.lineTo(f+8,O+2),i.fill());const Y=n.facialHair;if(Y&&Y!=="none"){if(i.fillStyle=u,Y==="stubble")i.save(),i.globalAlpha=.25,i.beginPath(),i.ellipse(f,d+66,44,42,0,0,Math.PI),i.fill(),i.restore();else if(Y==="mustache")i.beginPath(),i.moveTo(f-24,O-7),i.quadraticCurveTo(f,O-16,f+24,O-7),i.quadraticCurveTo(f,O+3,f-24,O-7),i.fill();else if(Y==="goatee")i.beginPath(),i.ellipse(f,O+18,14,20,0,0,7),i.fill(),i.beginPath(),i.moveTo(f-20,O-8),i.quadraticCurveTo(f,O-15,f+20,O-8),i.quadraticCurveTo(f,O,f-20,O-8),i.fill();else if(i.beginPath(),i.moveTo(f-43,d+30),i.bezierCurveTo(f-50,d+108,f-20,d+128,f,d+125),i.bezierCurveTo(f+20,d+128,f+50,d+108,f+43,d+30),i.quadraticCurveTo(f+30,d+70,f,d+74),i.quadraticCurveTo(f-30,d+70,f-43,d+30),i.fill(),Y==="braided"){i.strokeStyle=fn(u,35),i.lineWidth=2;for(let $=0;$<3;$++)i.beginPath(),i.moveTo(f-18+$*18,d+95),i.lineTo(f-14+$*18,d+132),i.stroke()}}const V=n.scar;if(V==="eye")i.strokeStyle="rgba(210,155,140,0.8)",i.lineWidth=2.5,i.beginPath(),i.moveTo(f+k-6,b-44),i.lineTo(f+k+14,b+16),i.stroke(),i.strokeStyle="rgba(110,35,35,0.55)",i.lineWidth=1,i.beginPath(),i.moveTo(f+k-4,b-20),i.lineTo(f+k+9,b-16),i.stroke();else if(V==="cheek")i.strokeStyle="rgba(205,150,135,0.75)",i.lineWidth=2.2,i.beginPath(),i.moveTo(f-m+15,d+12),i.lineTo(f-m+34,d+55),i.stroke(),i.beginPath(),i.moveTo(f-m+25,d+34),i.lineTo(f-m+42,d+30),i.stroke();else if(V==="x")i.strokeStyle="rgba(200,145,130,0.8)",i.lineWidth=2.4,i.beginPath(),i.moveTo(f-50,d+18),i.lineTo(f-24,d+50),i.stroke(),i.beginPath(),i.moveTo(f-24,d+18),i.lineTo(f-50,d+50),i.stroke();else if(V==="burn"){i.save(),i.globalAlpha=.45;const $=i.createRadialGradient(f+38,d+38,2,f+38,d+38,30);$.addColorStop(0,"#6e2a25"),$.addColorStop(1,"rgba(60,20,20,0)"),i.fillStyle=$,i.beginPath(),i.arc(f+38,d+38,30,0,7),i.fill(),i.restore()}if(i.fillStyle=u,n.hair==="mohawk"){i.beginPath(),i.moveTo(f-12,d-90),i.bezierCurveTo(f-20,d-170,f+20,d-174,f+12,d-90),i.lineTo(f+42,d-82),i.bezierCurveTo(f+34,d-140,f-30,d-144,f-42,d-82),i.closePath(),i.fill(),i.fillStyle=fn(u,30);for(let $=0;$<5;$++)i.beginPath(),i.arc(f-18+$*9,d-125+$%2*6,3,0,7),i.fill()}else n.hair==="bald"||n.hair==="buzz"?(n.hair==="buzz"&&(i.save(),i.globalAlpha=.5,i.beginPath(),i.ellipse(f,d-46,m-3,50,0,Math.PI,Math.PI*2),i.fill(),i.restore()),(!V||V==="none")&&(i.strokeStyle="rgba(190,140,125,0.4)",i.lineWidth=1.5,i.beginPath(),i.moveTo(f-16,d-70),i.lineTo(f+4,d-52),i.stroke())):n.hair==="hood"?(i.fillStyle="#1c1c20",i.beginPath(),i.moveTo(f-m-24,d+40),i.bezierCurveTo(f-m-34,d-150,f+m+34,d-150,f+m+24,d+40),i.bezierCurveTo(f+m-4,d-70,f-m+4,d-70,f-m-24,d+40),i.fill()):(i.beginPath(),i.moveTo(f-m-2,d-26),i.bezierCurveTo(f-m-8,d-112,f+m+8,d-120,f+m+2,d-26),i.lineTo(f+m-6,d-20),n.hair==="wild"?(i.lineTo(f+32,d-74),i.lineTo(f+18,d-48),i.lineTo(f-4,d-82),i.lineTo(f-26,d-40)):n.hair==="long"?(i.lineTo(f+38,d-66),i.lineTo(f+8,d-42),i.lineTo(f-22,d-80),i.lineTo(f-52,d-30)):(i.lineTo(f+42,d-60),i.lineTo(f+6,d-52),i.lineTo(f-30,d-84),i.lineTo(f-58,d-20)),i.lineTo(f-m+6,d-20),i.closePath(),i.fill(),i.strokeStyle="rgba(255,255,255,0.13)",i.lineWidth=6,i.beginPath(),i.moveTo(f-38,d-94),i.quadraticCurveTo(f-6,d-116,f+30,d-82),i.stroke());if((M==="demon"||n.headgear==="horns")&&(i.fillStyle="#2a1714",i.beginPath(),i.moveTo(f-m+4,d-78),i.bezierCurveTo(f-m-38,d-150,f-m-12,d-190,f-m+10,d-128),i.closePath(),i.fill(),i.beginPath(),i.moveTo(f+m-4,d-78),i.bezierCurveTo(f+m+38,d-150,f+m+12,d-190,f+m-10,d-128),i.closePath(),i.fill(),i.strokeStyle="rgba(180,60,40,0.35)",i.lineWidth=2,i.beginPath(),i.moveTo(f-m-8,d-120),i.quadraticCurveTo(f-m-20,d-150,f-m-2,d-166),i.stroke()),n.ghost&&(i.save(),i.globalCompositeOperation="screen",i.globalAlpha=.12,i.fillStyle="#82d7e8",i.beginPath(),i.ellipse(f,d+40,m+20,160,0,0,7),i.fill(),i.restore()),n.wool){i.fillStyle="#e6e0d0";for(let $=0;$<12;$++){const Q=-Math.PI+$/11*Math.PI;i.beginPath(),i.arc(f+Math.cos(Q)*(m+2),d-40+Math.sin(Q)*65,25,0,7),i.fill()}}if((n.headgear==="anubis"||n.anubis)&&(i.fillStyle="#16110c",i.beginPath(),i.moveTo(f-m-2,d-120),i.lineTo(f-m-8,d-210),i.lineTo(f-22,d-250),i.lineTo(f-34,d-150),i.lineTo(f-m-2,d-120),i.fill(),i.beginPath(),i.moveTo(f+m+2,d-120),i.lineTo(f+m+8,d-210),i.lineTo(f+22,d-250),i.lineTo(f+34,d-150),i.lineTo(f+m+2,d-120),i.fill(),i.strokeStyle="#d8ab3c",i.lineWidth=3,i.beginPath(),i.moveTo(f-m-4,d-130),i.lineTo(f-24,d-238),i.stroke(),i.beginPath(),i.moveTo(f+m+4,d-130),i.lineTo(f+24,d-238),i.stroke(),i.strokeStyle="#e7b93f",i.lineWidth=4,i.beginPath(),i.moveTo(f-72,d-20),i.lineTo(f-22,d-20),i.quadraticCurveTo(f-34,d+20,f-60,d+8),i.stroke(),i.strokeStyle="#b98c2b",i.lineWidth=3,i.beginPath(),i.moveTo(f+22,d-18),i.lineTo(f+72,d-18),i.stroke(),i.beginPath(),i.moveTo(f+54,d-18),i.quadraticCurveTo(f+62,d+20,f+34,d+18),i.stroke(),i.fillStyle="#e7b93f",i.beginPath(),i.moveTo(f-6,d+56),i.lineTo(f+6,d+56),i.lineTo(f,d+74),i.fill()),n.headgear==="ears"||n.ears){const $=n.earColor||(n.hair==="white"?"#e2ddd1":"#b66a3b");i.fillStyle=$,i.beginPath(),i.moveTo(f-m+2,d-92),i.lineTo(f-m-44,d-218),i.lineTo(f-20,d-118),i.closePath(),i.fill(),i.beginPath(),i.moveTo(f+m-2,d-92),i.lineTo(f+m+44,d-218),i.lineTo(f+20,d-118),i.closePath(),i.fill(),i.fillStyle=n.furInner||"#6f4438",i.beginPath(),i.moveTo(f-m+4,d-108),i.lineTo(f-m-30,d-194),i.lineTo(f-26,d-126),i.closePath(),i.fill(),i.beginPath(),i.moveTo(f+m-4,d-108),i.lineTo(f+m+30,d-194),i.lineTo(f+26,d-126),i.closePath(),i.fill()}if(n.muzzle&&(i.save(),i.fillStyle=p,i.beginPath(),i.ellipse(f,d+58,34,28,0,0,7),i.fill(),i.fillStyle="rgba(20,12,12,0.9)",i.beginPath(),i.ellipse(f,d+45,11,7,0,0,7),i.fill(),i.strokeStyle="rgba(30,18,15,0.6)",i.lineWidth=1.5,i.beginPath(),i.moveTo(f,d+52),i.lineTo(f,d+65),i.stroke(),i.beginPath(),i.moveTo(f,d+65),i.quadraticCurveTo(f-12,d+75,f-18,d+64),i.stroke(),i.beginPath(),i.moveTo(f,d+65),i.quadraticCurveTo(f+12,d+75,f+18,d+64),i.stroke(),i.restore()),n.headgear==="crown"||n.crown){i.fillStyle="#141318",i.strokeStyle="#d8ab3c",i.lineWidth=3,i.beginPath(),i.moveTo(f-58,d-100),i.lineTo(f-52,d-152),i.lineTo(f-26,d-122),i.lineTo(f,d-176),i.lineTo(f+26,d-122),i.lineTo(f+52,d-152),i.lineTo(f+58,d-100),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#37c8ff";for(let $=0;$<3;$++)i.beginPath(),i.arc(f-34+$*34,d-112,4.5,0,7),i.fill()}if((n.headgear==="jester"||n.joker)&&(i.fillStyle="#3a1c56",i.beginPath(),i.moveTo(f-m+4,d-86),i.lineTo(f-88,d-210),i.lineTo(f-10,d-118),i.closePath(),i.fill(),i.fillStyle="#285c30",i.beginPath(),i.moveTo(f+m-4,d-86),i.lineTo(f+88,d-210),i.lineTo(f+10,d-118),i.closePath(),i.fill(),i.fillStyle="#c9b04a",i.beginPath(),i.arc(f-88,d-214,10,0,7),i.fill(),i.beginPath(),i.arc(f+88,d-214,10,0,7),i.fill(),i.fillStyle="rgba(180,20,40,0.6)",i.save(),i.translate(f-44,d-38),i.rotate(Math.PI/4),i.fillRect(-9,-9,18,18),i.restore(),i.save(),i.translate(f+44,d-38),i.rotate(Math.PI/4),i.fillRect(-9,-9,18,18),i.restore()),n.headgear==="goggles"&&(i.fillStyle="rgba(20,18,20,0.9)",i.beginPath(),i.roundRect(f-m-4,d-44,m*2+8,34,8),i.fill(),i.strokeStyle="#5b5044",i.lineWidth=2,i.stroke(),i.fillStyle="rgba(90,180,200,0.4)",i.beginPath(),i.ellipse(f-24,d-27,17,11,0,0,7),i.fill(),i.beginPath(),i.ellipse(f+24,d-27,17,11,0,0,7),i.fill()),n.headgear==="bandana"&&(i.fillStyle="#7a1d1d",i.beginPath(),i.moveTo(f-m-4,d-58),i.lineTo(f+m+4,d-58),i.lineTo(f+m+1,d-84),i.lineTo(f-m-1,d-84),i.fill(),i.fillStyle="#5e1414",i.beginPath(),i.moveTo(f+m+1,d-74),i.lineTo(f+m+38,d-48),i.lineTo(f+m+24,d-92),i.fill()),t.gore!=="off"){i.save(),i.globalAlpha=.65;const $=t.gore==="zombie"?"rgba(90,150,50,0.8)":"rgba(130,18,20,0.8)";i.fillStyle=$;for(let Q=0;Q<7;Q++)i.beginPath(),i.arc(80+o()*360,60+o()*420,1+o()*5,0,7),i.fill();i.restore()}const re=i.createRadialGradient(f,d,120,f,d,320);return re.addColorStop(0,"rgba(0,0,0,0)"),re.addColorStop(1,"rgba(0,0,0,0.7)"),i.fillStyle=re,i.fillRect(0,0,512,512),a}function Nc(a,e){return a==="cyber"?7:a==="hollow"?12:e?8:7}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $r="169",Uc=0,wo=1,Oc=2,zl=1,kc=2,bn=3,Nn=0,Ut=1,Yt=2,In=0,Ei=1,Ao=2,Ro=3,Co=4,Fc=5,qn=100,Bc=101,zc=102,Hc=103,Gc=104,Vc=200,Wc=201,$c=202,Xc=203,nr=204,ir=205,qc=206,Yc=207,Kc=208,jc=209,Zc=210,Jc=211,Qc=212,eh=213,th=214,sr=0,ar=1,rr=2,Ai=3,or=4,lr=5,cr=6,hr=7,Xr=0,nh=1,ih=2,Dn=0,sh=1,ah=2,rh=3,oh=4,lh=5,ch=6,hh=7,Hl=300,Ri=301,Ci=302,dr=303,ur=304,ea=306,Vs=1e3,jn=1001,fr=1002,Bt=1003,dh=1004,rs=1005,sn=1006,pa=1007,Zn=1008,Sn=1009,Gl=1010,Vl=1011,Qi=1012,qr=1013,Qn=1014,cn=1015,ts=1016,Yr=1017,Kr=1018,Pi=1020,Wl=35902,$l=1021,Xl=1022,rn=1023,ql=1024,Yl=1025,Ti=1026,Li=1027,jr=1028,Zr=1029,Kl=1030,Jr=1031,Qr=1033,Os=33776,ks=33777,Fs=33778,Bs=33779,pr=35840,mr=35841,gr=35842,vr=35843,_r=36196,br=37492,xr=37496,Sr=37808,Mr=37809,yr=37810,Er=37811,Tr=37812,wr=37813,Ar=37814,Rr=37815,Cr=37816,Pr=37817,Lr=37818,Ir=37819,Dr=37820,Nr=37821,zs=36492,Ur=36494,Or=36495,jl=36283,kr=36284,Fr=36285,Br=36286,uh=3200,fh=3201,Zl=0,ph=1,Ln="",Et="srgb",Un="srgb-linear",eo="display-p3",ta="display-p3-linear",Ws="linear",lt="srgb",$s="rec709",Xs="p3",ri=7680,Po=519,mh=512,gh=513,vh=514,Jl=515,_h=516,bh=517,xh=518,Sh=519,Lo=35044,Io="300 es",xn=2e3,qs=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,i=s.length;r<i;r++)s[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ma=Math.PI/180,zr=180/Math.PI;function ns(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[a&255]+At[a>>8&255]+At[a>>16&255]+At[a>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Ct(a,e,t){return Math.max(e,Math.min(t,a))}function Mh(a,e){return(a%e+e)%e}function ga(a,e,t){return(1-t)*a+t*e}function Bi(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ft(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,i=this.y-e.y;return this.x=r*n-i*s+e.x,this.y=r*s+i*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,s,r,i,o,c,h){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,i,o,c,h)}set(e,t,n,s,r,i,o,c,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=o,p[3]=t,p[4]=r,p[5]=c,p[6]=n,p[7]=i,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,i=n[0],o=n[3],c=n[6],h=n[1],p=n[4],u=n[7],l=n[2],g=n[5],_=n[8],f=s[0],d=s[3],m=s[6],x=s[1],M=s[4],E=s[7],R=s[2],A=s[5],w=s[8];return r[0]=i*f+o*x+c*R,r[3]=i*d+o*M+c*A,r[6]=i*m+o*E+c*w,r[1]=h*f+p*x+u*R,r[4]=h*d+p*M+u*A,r[7]=h*m+p*E+u*w,r[2]=l*f+g*x+_*R,r[5]=l*d+g*M+_*A,r[8]=l*m+g*E+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],i=e[4],o=e[5],c=e[6],h=e[7],p=e[8];return t*i*p-t*o*h-n*r*p+n*o*c+s*r*h-s*i*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],i=e[4],o=e[5],c=e[6],h=e[7],p=e[8],u=p*i-o*h,l=o*c-p*r,g=h*r-i*c,_=t*u+n*l+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/_;return e[0]=u*f,e[1]=(s*h-p*n)*f,e[2]=(o*n-s*i)*f,e[3]=l*f,e[4]=(p*t-s*c)*f,e[5]=(s*r-o*t)*f,e[6]=g*f,e[7]=(n*c-h*t)*f,e[8]=(i*t-n*r)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,i,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*i+h*o)+i+e,-s*h,s*c,-s*(-h*i+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(va.makeScale(e,t)),this}rotate(e){return this.premultiply(va.makeRotation(-e)),this}translate(e,t){return this.premultiply(va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Fe;function Ql(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ys(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function yh(){const a=Ys("canvas");return a.style.display="block",a}const Do={};function Hs(a){a in Do||(Do[a]=!0,console.warn(a))}function Eh(a,e,t){return new Promise(function(n,s){function r(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Th(a){const e=a.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wh(a){const e=a.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const No=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uo=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zi={[Un]:{transfer:Ws,primaries:$s,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a,fromReference:a=>a},[Et]:{transfer:lt,primaries:$s,luminanceCoefficients:[.2126,.7152,.0722],toReference:a=>a.convertSRGBToLinear(),fromReference:a=>a.convertLinearToSRGB()},[ta]:{transfer:Ws,primaries:Xs,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.applyMatrix3(Uo),fromReference:a=>a.applyMatrix3(No)},[eo]:{transfer:lt,primaries:Xs,luminanceCoefficients:[.2289,.6917,.0793],toReference:a=>a.convertSRGBToLinear().applyMatrix3(Uo),fromReference:a=>a.applyMatrix3(No).convertLinearToSRGB()}},Ah=new Set([Un,ta]),Je={enabled:!0,_workingColorSpace:Un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(a){if(!Ah.has(a))throw new Error(`Unsupported working color space, "${a}".`);this._workingColorSpace=a},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=zi[e].toReference,s=zi[t].fromReference;return s(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this._workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this._workingColorSpace)},getPrimaries:function(a){return zi[a].primaries},getTransfer:function(a){return a===Ln?Ws:zi[a].transfer},getLuminanceCoefficients:function(a,e=this._workingColorSpace){return a.fromArray(zi[e].luminanceCoefficients)}};function wi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function _a(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let oi;class Rh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=Ys("canvas")),oi.width=e.width,oi.height=e.height;const n=oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let i=0;i<r.length;i++)r[i]=wi(r[i]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ch=0;class ec{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=ns(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let i=0,o=s.length;i<o;i++)s[i].isDataTexture?r.push(ba(s[i].image)):r.push(ba(s[i]))}else r=ba(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ba(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Rh.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ph=0;class Lt extends Oi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=jn,s=jn,r=sn,i=Zn,o=rn,c=Sn,h=Lt.DEFAULT_ANISOTROPY,p=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ns(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=i,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vs:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vs:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Hl;Lt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*s+i[12]*r,this.y=i[1]*t+i[5]*n+i[9]*s+i[13]*r,this.z=i[2]*t+i[6]*n+i[10]*s+i[14]*r,this.w=i[3]*t+i[7]*n+i[11]*s+i[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,h=c[0],p=c[4],u=c[8],l=c[1],g=c[5],_=c[9],f=c[2],d=c[6],m=c[10];if(Math.abs(p-l)<.01&&Math.abs(u-f)<.01&&Math.abs(_-d)<.01){if(Math.abs(p+l)<.1&&Math.abs(u+f)<.1&&Math.abs(_+d)<.1&&Math.abs(h+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,E=(g+1)/2,R=(m+1)/2,A=(p+l)/4,w=(u+f)/4,L=(_+d)/4;return M>E&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=w/n):E>R?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=A/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=L/r),this.set(n,s,r,t),this}let x=Math.sqrt((d-_)*(d-_)+(u-f)*(u-f)+(l-p)*(l-p));return Math.abs(x)<.001&&(x=1),this.x=(d-_)/x,this.y=(u-f)/x,this.z=(l-p)/x,this.w=Math.acos((h+g+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lh extends Oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Lt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const i=n.count;for(let o=0;o<i;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ec(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Lh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tc extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ih extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class is{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,i,o){let c=n[s+0],h=n[s+1],p=n[s+2],u=n[s+3];const l=r[i+0],g=r[i+1],_=r[i+2],f=r[i+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=p,e[t+3]=u;return}if(o===1){e[t+0]=l,e[t+1]=g,e[t+2]=_,e[t+3]=f;return}if(u!==f||c!==l||h!==g||p!==_){let d=1-o;const m=c*l+h*g+p*_+u*f,x=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const R=Math.sqrt(M),A=Math.atan2(R,m*x);d=Math.sin(d*A)/R,o=Math.sin(o*A)/R}const E=o*x;if(c=c*d+l*E,h=h*d+g*E,p=p*d+_*E,u=u*d+f*E,d===1-o){const R=1/Math.sqrt(c*c+h*h+p*p+u*u);c*=R,h*=R,p*=R,u*=R}}e[t]=c,e[t+1]=h,e[t+2]=p,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,i){const o=n[s],c=n[s+1],h=n[s+2],p=n[s+3],u=r[i],l=r[i+1],g=r[i+2],_=r[i+3];return e[t]=o*_+p*u+c*g-h*l,e[t+1]=c*_+p*l+h*u-o*g,e[t+2]=h*_+p*g+o*l-c*u,e[t+3]=p*_-o*u-c*l-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,i=e._order,o=Math.cos,c=Math.sin,h=o(n/2),p=o(s/2),u=o(r/2),l=c(n/2),g=c(s/2),_=c(r/2);switch(i){case"XYZ":this._x=l*p*u+h*g*_,this._y=h*g*u-l*p*_,this._z=h*p*_+l*g*u,this._w=h*p*u-l*g*_;break;case"YXZ":this._x=l*p*u+h*g*_,this._y=h*g*u-l*p*_,this._z=h*p*_-l*g*u,this._w=h*p*u+l*g*_;break;case"ZXY":this._x=l*p*u-h*g*_,this._y=h*g*u+l*p*_,this._z=h*p*_+l*g*u,this._w=h*p*u-l*g*_;break;case"ZYX":this._x=l*p*u-h*g*_,this._y=h*g*u+l*p*_,this._z=h*p*_-l*g*u,this._w=h*p*u+l*g*_;break;case"YZX":this._x=l*p*u+h*g*_,this._y=h*g*u+l*p*_,this._z=h*p*_-l*g*u,this._w=h*p*u-l*g*_;break;case"XZY":this._x=l*p*u-h*g*_,this._y=h*g*u-l*p*_,this._z=h*p*_+l*g*u,this._w=h*p*u+l*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+i)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],i=t[1],o=t[5],c=t[9],h=t[2],p=t[6],u=t[10],l=n+o+u;if(l>0){const g=.5/Math.sqrt(l+1);this._w=.25/g,this._x=(p-c)*g,this._y=(r-h)*g,this._z=(i-s)*g}else if(n>o&&n>u){const g=2*Math.sqrt(1+n-o-u);this._w=(p-c)/g,this._x=.25*g,this._y=(s+i)/g,this._z=(r+h)/g}else if(o>u){const g=2*Math.sqrt(1+o-n-u);this._w=(r-h)/g,this._x=(s+i)/g,this._y=.25*g,this._z=(c+p)/g}else{const g=2*Math.sqrt(1+u-n-o);this._w=(i-s)/g,this._x=(r+h)/g,this._y=(c+p)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,i=e._w,o=t._x,c=t._y,h=t._z,p=t._w;return this._x=n*p+i*o+s*h-r*c,this._y=s*p+i*c+r*o-n*h,this._z=r*p+i*h+n*c-s*o,this._w=i*p-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,i=this._w;let o=i*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=i,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*i+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}const h=Math.sqrt(c),p=Math.atan2(h,o),u=Math.sin((1-t)*p)/h,l=Math.sin(t*p)/h;return this._w=i*u+this._w*l,this._x=n*u+this._x*l,this._y=s*u+this._y*l,this._z=r*u+this._z*l,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,i=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*i,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*i,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*i,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,i=e.y,o=e.z,c=e.w,h=2*(i*s-o*n),p=2*(o*t-r*s),u=2*(r*n-i*t);return this.x=t+c*h+i*u-o*p,this.y=n+c*p+o*h-r*u,this.z=s+c*u+r*p-i*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,i=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*i-n*c,this.z=n*o-s*i,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xa.copy(this).projectOnVector(e),this.sub(xa)}reflect(e){return this.sub(xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new C,Oo=new is;class ni{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let i=0,o=r.count;i<o;i++)e.isMesh===!0?e.getVertexPosition(i,Jt):Jt.fromBufferAttribute(r,i),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),os.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(e.matrixWorld),this.union(os)}const s=e.children;for(let r=0,i=s.length;r<i;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),ls.subVectors(this.max,Hi),li.subVectors(e.a,Hi),ci.subVectors(e.b,Hi),hi.subVectors(e.c,Hi),En.subVectors(ci,li),Tn.subVectors(hi,ci),Fn.subVectors(li,hi);let t=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-Fn.z,Fn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,Fn.z,0,-Fn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-Fn.y,Fn.x,0];return!Sa(t,li,ci,hi,ls)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,li,ci,hi,ls))?!1:(cs.crossVectors(En,Tn),t=[cs.x,cs.y,cs.z],Sa(t,li,ci,hi,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pn=[new C,new C,new C,new C,new C,new C,new C,new C],Jt=new C,os=new ni,li=new C,ci=new C,hi=new C,En=new C,Tn=new C,Fn=new C,Hi=new C,ls=new C,cs=new C,Bn=new C;function Sa(a,e,t,n,s){for(let r=0,i=a.length-3;r<=i;r+=3){Bn.fromArray(a,r);const o=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),c=e.dot(Bn),h=t.dot(Bn),p=n.dot(Bn);if(Math.max(-Math.max(c,h,p),Math.min(c,h,p))>o)return!1}return!0}const Dh=new ni,Gi=new C,Ma=new C;class ii{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Dh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,i=e.length;r<i;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Gi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(Ma)),this.expandByPoint(Gi.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new C,ya=new C,hs=new C,wn=new C,Ea=new C,ds=new C,Ta=new C;class to{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ya.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(ya);const r=e.distanceTo(t)*.5,i=-this.direction.dot(hs),o=wn.dot(this.direction),c=-wn.dot(hs),h=wn.lengthSq(),p=Math.abs(1-i*i);let u,l,g,_;if(p>0)if(u=i*c-o,l=i*o-c,_=r*p,u>=0)if(l>=-_)if(l<=_){const f=1/p;u*=f,l*=f,g=u*(u+i*l+2*o)+l*(i*u+l+2*c)+h}else l=r,u=Math.max(0,-(i*l+o)),g=-u*u+l*(l+2*c)+h;else l=-r,u=Math.max(0,-(i*l+o)),g=-u*u+l*(l+2*c)+h;else l<=-_?(u=Math.max(0,-(-i*r+o)),l=u>0?-r:Math.min(Math.max(-r,-c),r),g=-u*u+l*(l+2*c)+h):l<=_?(u=0,l=Math.min(Math.max(-r,-c),r),g=l*(l+2*c)+h):(u=Math.max(0,-(i*r+o)),l=u>0?r:Math.min(Math.max(-r,-c),r),g=-u*u+l*(l+2*c)+h);else l=i>0?-r:r,u=Math.max(0,-(i*l+o)),g=-u*u+l*(l+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ya).addScaledVector(hs,l),g}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=e.radius*e.radius;if(s>r)return null;const i=Math.sqrt(r-s),o=n-i,c=n+i;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,i,o,c;const h=1/this.direction.x,p=1/this.direction.y,u=1/this.direction.z,l=this.origin;return h>=0?(n=(e.min.x-l.x)*h,s=(e.max.x-l.x)*h):(n=(e.max.x-l.x)*h,s=(e.min.x-l.x)*h),p>=0?(r=(e.min.y-l.y)*p,i=(e.max.y-l.y)*p):(r=(e.max.y-l.y)*p,i=(e.min.y-l.y)*p),n>i||r>s||((r>n||isNaN(n))&&(n=r),(i<s||isNaN(s))&&(s=i),u>=0?(o=(e.min.z-l.z)*u,c=(e.max.z-l.z)*u):(o=(e.max.z-l.z)*u,c=(e.min.z-l.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,s,r){Ea.subVectors(t,e),ds.subVectors(n,e),Ta.crossVectors(Ea,ds);let i=this.direction.dot(Ta),o;if(i>0){if(s)return null;o=1}else if(i<0)o=-1,i=-i;else return null;wn.subVectors(this.origin,e);const c=o*this.direction.dot(ds.crossVectors(wn,ds));if(c<0)return null;const h=o*this.direction.dot(Ea.cross(wn));if(h<0||c+h>i)return null;const p=-o*wn.dot(Ta);return p<0?null:this.at(p/i,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,s,r,i,o,c,h,p,u,l,g,_,f,d){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,i,o,c,h,p,u,l,g,_,f,d)}set(e,t,n,s,r,i,o,c,h,p,u,l,g,_,f,d){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=i,m[9]=o,m[13]=c,m[2]=h,m[6]=p,m[10]=u,m[14]=l,m[3]=g,m[7]=_,m[11]=f,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/di.setFromMatrixColumn(e,0).length(),r=1/di.setFromMatrixColumn(e,1).length(),i=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*i,t[9]=n[9]*i,t[10]=n[10]*i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,i=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),p=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const l=i*p,g=i*u,_=o*p,f=o*u;t[0]=c*p,t[4]=-c*u,t[8]=h,t[1]=g+_*h,t[5]=l-f*h,t[9]=-o*c,t[2]=f-l*h,t[6]=_+g*h,t[10]=i*c}else if(e.order==="YXZ"){const l=c*p,g=c*u,_=h*p,f=h*u;t[0]=l+f*o,t[4]=_*o-g,t[8]=i*h,t[1]=i*u,t[5]=i*p,t[9]=-o,t[2]=g*o-_,t[6]=f+l*o,t[10]=i*c}else if(e.order==="ZXY"){const l=c*p,g=c*u,_=h*p,f=h*u;t[0]=l-f*o,t[4]=-i*u,t[8]=_+g*o,t[1]=g+_*o,t[5]=i*p,t[9]=f-l*o,t[2]=-i*h,t[6]=o,t[10]=i*c}else if(e.order==="ZYX"){const l=i*p,g=i*u,_=o*p,f=o*u;t[0]=c*p,t[4]=_*h-g,t[8]=l*h+f,t[1]=c*u,t[5]=f*h+l,t[9]=g*h-_,t[2]=-h,t[6]=o*c,t[10]=i*c}else if(e.order==="YZX"){const l=i*c,g=i*h,_=o*c,f=o*h;t[0]=c*p,t[4]=f-l*u,t[8]=_*u+g,t[1]=u,t[5]=i*p,t[9]=-o*p,t[2]=-h*p,t[6]=g*u+_,t[10]=l-f*u}else if(e.order==="XZY"){const l=i*c,g=i*h,_=o*c,f=o*h;t[0]=c*p,t[4]=-u,t[8]=h*p,t[1]=l*u+f,t[5]=i*p,t[9]=g*u-_,t[2]=_*u-g,t[6]=o*p,t[10]=f*u+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nh,e,Uh)}lookAt(e,t,n){const s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),An.crossVectors(n,Vt),An.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),An.crossVectors(n,Vt)),An.normalize(),us.crossVectors(Vt,An),s[0]=An.x,s[4]=us.x,s[8]=Vt.x,s[1]=An.y,s[5]=us.y,s[9]=Vt.y,s[2]=An.z,s[6]=us.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,i=n[0],o=n[4],c=n[8],h=n[12],p=n[1],u=n[5],l=n[9],g=n[13],_=n[2],f=n[6],d=n[10],m=n[14],x=n[3],M=n[7],E=n[11],R=n[15],A=s[0],w=s[4],L=s[8],G=s[12],v=s[1],b=s[5],k=s[9],F=s[13],N=s[2],X=s[6],O=s[10],Y=s[14],V=s[3],re=s[7],$=s[11],Q=s[15];return r[0]=i*A+o*v+c*N+h*V,r[4]=i*w+o*b+c*X+h*re,r[8]=i*L+o*k+c*O+h*$,r[12]=i*G+o*F+c*Y+h*Q,r[1]=p*A+u*v+l*N+g*V,r[5]=p*w+u*b+l*X+g*re,r[9]=p*L+u*k+l*O+g*$,r[13]=p*G+u*F+l*Y+g*Q,r[2]=_*A+f*v+d*N+m*V,r[6]=_*w+f*b+d*X+m*re,r[10]=_*L+f*k+d*O+m*$,r[14]=_*G+f*F+d*Y+m*Q,r[3]=x*A+M*v+E*N+R*V,r[7]=x*w+M*b+E*X+R*re,r[11]=x*L+M*k+E*O+R*$,r[15]=x*G+M*F+E*Y+R*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],i=e[1],o=e[5],c=e[9],h=e[13],p=e[2],u=e[6],l=e[10],g=e[14],_=e[3],f=e[7],d=e[11],m=e[15];return _*(+r*c*u-s*h*u-r*o*l+n*h*l+s*o*g-n*c*g)+f*(+t*c*g-t*h*l+r*i*l-s*i*g+s*h*p-r*c*p)+d*(+t*h*u-t*o*g-r*i*u+n*i*g+r*o*p-n*h*p)+m*(-s*o*p-t*c*u+t*o*l+s*i*u-n*i*l+n*c*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],i=e[4],o=e[5],c=e[6],h=e[7],p=e[8],u=e[9],l=e[10],g=e[11],_=e[12],f=e[13],d=e[14],m=e[15],x=u*d*h-f*l*h+f*c*g-o*d*g-u*c*m+o*l*m,M=_*l*h-p*d*h-_*c*g+i*d*g+p*c*m-i*l*m,E=p*f*h-_*u*h+_*o*g-i*f*g-p*o*m+i*u*m,R=_*u*c-p*f*c-_*o*l+i*f*l+p*o*d-i*u*d,A=t*x+n*M+s*E+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=x*w,e[1]=(f*l*r-u*d*r-f*s*g+n*d*g+u*s*m-n*l*m)*w,e[2]=(o*d*r-f*c*r+f*s*h-n*d*h-o*s*m+n*c*m)*w,e[3]=(u*c*r-o*l*r-u*s*h+n*l*h+o*s*g-n*c*g)*w,e[4]=M*w,e[5]=(p*d*r-_*l*r+_*s*g-t*d*g-p*s*m+t*l*m)*w,e[6]=(_*c*r-i*d*r-_*s*h+t*d*h+i*s*m-t*c*m)*w,e[7]=(i*l*r-p*c*r+p*s*h-t*l*h-i*s*g+t*c*g)*w,e[8]=E*w,e[9]=(_*u*r-p*f*r-_*n*g+t*f*g+p*n*m-t*u*m)*w,e[10]=(i*f*r-_*o*r+_*n*h-t*f*h-i*n*m+t*o*m)*w,e[11]=(p*o*r-i*u*r-p*n*h+t*u*h+i*n*g-t*o*g)*w,e[12]=R*w,e[13]=(p*f*s-_*u*s+_*n*l-t*f*l-p*n*d+t*u*d)*w,e[14]=(_*o*s-i*f*s-_*n*c+t*f*c+i*n*d-t*o*d)*w,e[15]=(i*u*s-p*o*s+p*n*c-t*u*c-i*n*l+t*o*l)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,i=e.x,o=e.y,c=e.z,h=r*i,p=r*o;return this.set(h*i+n,h*o-s*c,h*c+s*o,0,h*o+s*c,p*o+n,p*c-s*i,0,h*c-s*o,p*c+s*i,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,i){return this.set(1,n,r,0,e,1,i,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,i=t._y,o=t._z,c=t._w,h=r+r,p=i+i,u=o+o,l=r*h,g=r*p,_=r*u,f=i*p,d=i*u,m=o*u,x=c*h,M=c*p,E=c*u,R=n.x,A=n.y,w=n.z;return s[0]=(1-(f+m))*R,s[1]=(g+E)*R,s[2]=(_-M)*R,s[3]=0,s[4]=(g-E)*A,s[5]=(1-(l+m))*A,s[6]=(d+x)*A,s[7]=0,s[8]=(_+M)*w,s[9]=(d-x)*w,s[10]=(1-(l+f))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=di.set(s[0],s[1],s[2]).length();const i=di.set(s[4],s[5],s[6]).length(),o=di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qt.copy(this);const h=1/r,p=1/i,u=1/o;return Qt.elements[0]*=h,Qt.elements[1]*=h,Qt.elements[2]*=h,Qt.elements[4]*=p,Qt.elements[5]*=p,Qt.elements[6]*=p,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=r,n.y=i,n.z=o,this}makePerspective(e,t,n,s,r,i,o=xn){const c=this.elements,h=2*r/(t-e),p=2*r/(n-s),u=(t+e)/(t-e),l=(n+s)/(n-s);let g,_;if(o===xn)g=-(i+r)/(i-r),_=-2*i*r/(i-r);else if(o===qs)g=-i/(i-r),_=-i*r/(i-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=l,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,i,o=xn){const c=this.elements,h=1/(t-e),p=1/(n-s),u=1/(i-r),l=(t+e)*h,g=(n+s)*p;let _,f;if(o===xn)_=(i+r)*u,f=-2*u;else if(o===qs)_=r*u,f=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-l,c[1]=0,c[5]=2*p,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=f,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new C,Qt=new et,Nh=new C(0,0,0),Uh=new C(1,1,1),An=new C,us=new C,Vt=new C,ko=new et,Fo=new is;class dn{constructor(e=0,t=0,n=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],i=s[4],o=s[8],c=s[1],h=s[5],p=s[9],u=s[2],l=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-i,r)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-i,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(l,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-i,h));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Ct(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-p,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ko.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ko,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fo.setFromEuler(this),this.setFromQuaternion(Fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Oh=0;const Bo=new C,ui=new is,gn=new et,fs=new C,Vi=new C,kh=new C,Fh=new is,zo=new C(1,0,0),Ho=new C(0,1,0),Go=new C(0,0,1),Vo={type:"added"},Bh={type:"removed"},fi={type:"childadded",child:null},wa={type:"childremoved",child:null};class gt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new C,t=new dn,n=new is,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function i(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(i),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Fe}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.multiply(ui),this}rotateOnWorldAxis(e,t){return ui.setFromAxisAngle(e,t),this.quaternion.premultiply(ui),this}rotateX(e){return this.rotateOnAxis(zo,e)}rotateY(e){return this.rotateOnAxis(Ho,e)}rotateZ(e){return this.rotateOnAxis(Go,e)}translateOnAxis(e,t){return Bo.copy(e).applyQuaternion(this.quaternion),this.position.add(Bo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zo,e)}translateY(e){return this.translateOnAxis(Ho,e)}translateZ(e){return this.translateOnAxis(Go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Vi,fs,this.up):gn.lookAt(fs,Vi,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(gn),this.quaternion.premultiply(ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vo),fi.child=e,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bh),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vo),fi.child=e,this.dispatchEvent(fi),fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const i=this.children[n].getObjectByProperty(e,t);if(i!==void 0)return i}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,i=s.length;r<i;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,kh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Fh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,i=s.length;r<i;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,p=c.length;h<p;h++){const u=c[h];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=i(e.geometries),c=i(e.materials),h=i(e.textures),p=i(e.images),u=i(e.shapes),l=i(e.skeletons),g=i(e.animations),_=i(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),u.length>0&&(n.shapes=u),l.length>0&&(n.skeletons=l),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function i(o){const c=[];for(const h in o){const p=o[h];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gt.DEFAULT_UP=new C(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new C,vn=new C,Aa=new C,_n=new C,pi=new C,mi=new C,Wo=new C,Ra=new C,Ca=new C,Pa=new C,La=new nt,Ia=new nt,Da=new nt;class an{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),en.subVectors(e,t),s.cross(en);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){en.subVectors(s,t),vn.subVectors(n,t),Aa.subVectors(e,t);const i=en.dot(en),o=en.dot(vn),c=en.dot(Aa),h=vn.dot(vn),p=vn.dot(Aa),u=i*h-o*o;if(u===0)return r.set(0,0,0),null;const l=1/u,g=(h*c-o*p)*l,_=(i*p-o*c)*l;return r.set(1-g-_,_,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,s,r,i,o,c){return this.getBarycoord(e,t,n,s,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_n.x),c.addScaledVector(i,_n.y),c.addScaledVector(o,_n.z),c)}static getInterpolatedAttribute(e,t,n,s,r,i){return La.setScalar(0),Ia.setScalar(0),Da.setScalar(0),La.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,s),i.setScalar(0),i.addScaledVector(La,r.x),i.addScaledVector(Ia,r.y),i.addScaledVector(Da,r.z),i}static isFrontFacing(e,t,n,s){return en.subVectors(n,t),vn.subVectors(e,t),en.cross(vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),en.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let i,o;pi.subVectors(s,n),mi.subVectors(r,n),Ra.subVectors(e,n);const c=pi.dot(Ra),h=mi.dot(Ra);if(c<=0&&h<=0)return t.copy(n);Ca.subVectors(e,s);const p=pi.dot(Ca),u=mi.dot(Ca);if(p>=0&&u<=p)return t.copy(s);const l=c*u-p*h;if(l<=0&&c>=0&&p<=0)return i=c/(c-p),t.copy(n).addScaledVector(pi,i);Pa.subVectors(e,r);const g=pi.dot(Pa),_=mi.dot(Pa);if(_>=0&&g<=_)return t.copy(r);const f=g*h-c*_;if(f<=0&&h>=0&&_<=0)return o=h/(h-_),t.copy(n).addScaledVector(mi,o);const d=p*_-g*u;if(d<=0&&u-p>=0&&g-_>=0)return Wo.subVectors(r,s),o=(u-p)/(u-p+(g-_)),t.copy(s).addScaledVector(Wo,o);const m=1/(d+f+l);return i=f*m,o=l*m,t.copy(n).addScaledVector(pi,i).addScaledVector(mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Na(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Mh(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Na(i,r,e+1/3),this.g=Na(i,r,e),this.b=Na(i,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const i=s[1],o=s[2];switch(i){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],i=r.length;if(i===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=ic[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Je.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Ct(Rt.r*255,0,255))*65536+Math.round(Ct(Rt.g*255,0,255))*256+Math.round(Ct(Rt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,s=Rt.g,r=Rt.b,i=Math.max(n,s,r),o=Math.min(n,s,r);let c,h;const p=(o+i)/2;if(o===i)c=0,h=0;else{const u=i-o;switch(h=p<=.5?u/(i+o):u/(2-i-o),i){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=h,e.l=p,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Et){Je.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,s=Rt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(ps);const n=ga(Rn.h,ps.h,t),s=ga(Rn.s,ps.s,t),r=ga(Rn.l,ps.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Se;Se.NAMES=ic;let zh=0;class si extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Ei,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nr,this.blendDst=ir,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nr&&(n.blendSrc=this.blendSrc),this.blendDst!==ir&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const i=[];for(const o in r){const c=r[o];delete c.metadata,i.push(c)}return i}if(t){const r=s(e.textures),i=s(e.images);r.length>0&&(n.textures=r),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ct extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new C,ms=new ze;class wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lo,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ms.fromBufferAttribute(this,t),ms.applyMatrix3(e),this.setXY(t,ms.x,ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lo&&(e.usage=this.usage),e}}class sc extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ac extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hh=0;const jt=new et,Ua=new gt,gi=new C,Wt=new ni,Wi=new ni,yt=new C;class it extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ql(e)?ac:sc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const o=t[r];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Wt.min,Wi.min),Wt.expandByPoint(yt),yt.addVectors(Wt.max,Wi.max),Wt.expandByPoint(yt)):(Wt.expandByPoint(Wi.min),Wt.expandByPoint(Wi.max))}Wt.getCenter(n);let s=0;for(let r=0,i=e.count;r<i;r++)yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(yt));if(t)for(let r=0,i=t.length;r<i;r++){const o=t[r],c=this.morphTargetsRelative;for(let h=0,p=o.count;h<p;h++)yt.fromBufferAttribute(o,h),c&&(gi.fromBufferAttribute(e,h),yt.add(gi)),s=Math.max(s,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*n.count),4));const i=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new C,c[L]=new C;const h=new C,p=new C,u=new C,l=new ze,g=new ze,_=new ze,f=new C,d=new C;function m(L,G,v){h.fromBufferAttribute(n,L),p.fromBufferAttribute(n,G),u.fromBufferAttribute(n,v),l.fromBufferAttribute(r,L),g.fromBufferAttribute(r,G),_.fromBufferAttribute(r,v),p.sub(h),u.sub(h),g.sub(l),_.sub(l);const b=1/(g.x*_.y-_.x*g.y);isFinite(b)&&(f.copy(p).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(b),d.copy(u).multiplyScalar(g.x).addScaledVector(p,-_.x).multiplyScalar(b),o[L].add(f),o[G].add(f),o[v].add(f),c[L].add(d),c[G].add(d),c[v].add(d))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,G=x.length;L<G;++L){const v=x[L],b=v.start,k=v.count;for(let F=b,N=b+k;F<N;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new C,E=new C,R=new C,A=new C;function w(L){R.fromBufferAttribute(s,L),A.copy(R);const G=o[L];M.copy(G),M.sub(R.multiplyScalar(R.dot(G))).normalize(),E.crossVectors(A,G);const b=E.dot(c[L])<0?-1:1;i.setXYZW(L,M.x,M.y,M.z,b)}for(let L=0,G=x.length;L<G;++L){const v=x[L],b=v.start,k=v.count;for(let F=b,N=b+k;F<N;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,g=n.count;l<g;l++)n.setXYZ(l,0,0,0);const s=new C,r=new C,i=new C,o=new C,c=new C,h=new C,p=new C,u=new C;if(e)for(let l=0,g=e.count;l<g;l+=3){const _=e.getX(l+0),f=e.getX(l+1),d=e.getX(l+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,d),p.subVectors(i,r),u.subVectors(s,r),p.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),h.fromBufferAttribute(n,d),o.add(p),c.add(p),h.add(p),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(f,c.x,c.y,c.z),n.setXYZ(d,h.x,h.y,h.z)}else for(let l=0,g=t.count;l<g;l+=3)s.fromBufferAttribute(t,l+0),r.fromBufferAttribute(t,l+1),i.fromBufferAttribute(t,l+2),p.subVectors(i,r),u.subVectors(s,r),p.cross(u),n.setXYZ(l+0,p.x,p.y,p.z),n.setXYZ(l+1,p.x,p.y,p.z),n.setXYZ(l+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){const h=o.array,p=o.itemSize,u=o.normalized,l=new h.constructor(c.length*p);let g=0,_=0;for(let f=0,d=c.length;f<d;f++){o.isInterleavedBufferAttribute?g=c[f]*o.data.stride+o.offset:g=c[f]*p;for(let m=0;m<p;m++)l[_++]=h[g++]}return new wt(l,p,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new it,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=e(c,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let p=0,u=h.length;p<u;p++){const l=h[p],g=e(l,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let o=0,c=i.length;o<c;o++){const h=i[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],p=[];for(let u=0,l=h.length;u<l;u++){const g=h[u];p.push(g.toJSON(e.data))}p.length>0&&(s[c]=p,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(e.data.groups=JSON.parse(JSON.stringify(i)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const r=e.morphAttributes;for(const h in r){const p=[],u=r[h];for(let l=0,g=u.length;l<g;l++)p.push(u[l].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const i=e.groups;for(let h=0,p=i.length;h<p;h++){const u=i[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $o=new et,zn=new to,gs=new ii,Xo=new C,vs=new C,_s=new C,bs=new C,Oa=new C,xs=new C,qo=new C,Ss=new C;class Le extends gt{constructor(e=new it,t=new ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,i=s.length;r<i;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,i=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){xs.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const p=o[c],u=r[c];p!==0&&(Oa.fromBufferAttribute(u,e),i?xs.addScaledVector(Oa,p):xs.addScaledVector(Oa.sub(t),p))}t.add(xs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(gs.containsPoint(zn.origin)===!1&&(zn.intersectSphere(gs,Xo)===null||zn.origin.distanceToSquared(Xo)>(e.far-e.near)**2))&&($o.copy(r).invert(),zn.copy(e.ray).applyMatrix4($o),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,i=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,p=r.attributes.uv1,u=r.attributes.normal,l=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,f=l.length;_<f;_++){const d=l[_],m=i[d.materialIndex],x=Math.max(d.start,g.start),M=Math.min(o.count,Math.min(d.start+d.count,g.start+g.count));for(let E=x,R=M;E<R;E+=3){const A=o.getX(E),w=o.getX(E+1),L=o.getX(E+2);s=Ms(this,m,e,n,h,p,u,A,w,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),f=Math.min(o.count,g.start+g.count);for(let d=_,m=f;d<m;d+=3){const x=o.getX(d),M=o.getX(d+1),E=o.getX(d+2);s=Ms(this,i,e,n,h,p,u,x,M,E),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(i))for(let _=0,f=l.length;_<f;_++){const d=l[_],m=i[d.materialIndex],x=Math.max(d.start,g.start),M=Math.min(c.count,Math.min(d.start+d.count,g.start+g.count));for(let E=x,R=M;E<R;E+=3){const A=E,w=E+1,L=E+2;s=Ms(this,m,e,n,h,p,u,A,w,L),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const _=Math.max(0,g.start),f=Math.min(c.count,g.start+g.count);for(let d=_,m=f;d<m;d+=3){const x=d,M=d+1,E=d+2;s=Ms(this,i,e,n,h,p,u,x,M,E),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function Gh(a,e,t,n,s,r,i,o){let c;if(e.side===Ut?c=n.intersectTriangle(i,r,s,!0,o):c=n.intersectTriangle(s,r,i,e.side===Nn,o),c===null)return null;Ss.copy(o),Ss.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(Ss);return h<t.near||h>t.far?null:{distance:h,point:Ss.clone(),object:a}}function Ms(a,e,t,n,s,r,i,o,c,h){a.getVertexPosition(o,vs),a.getVertexPosition(c,_s),a.getVertexPosition(h,bs);const p=Gh(a,e,t,n,vs,_s,bs,qo);if(p){const u=new C;an.getBarycoord(qo,vs,_s,bs,u),s&&(p.uv=an.getInterpolatedAttribute(s,o,c,h,u,new ze)),r&&(p.uv1=an.getInterpolatedAttribute(r,o,c,h,u,new ze)),i&&(p.normal=an.getInterpolatedAttribute(i,o,c,h,u,new C),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const l={a:o,b:c,c:h,normal:new C,materialIndex:0};an.getNormal(vs,_s,bs,l.normal),p.face=l,p.barycoord=u}return p}class dt extends it{constructor(e=1,t=1,n=1,s=1,r=1,i=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:i};const o=this;s=Math.floor(s),r=Math.floor(r),i=Math.floor(i);const c=[],h=[],p=[],u=[];let l=0,g=0;_("z","y","x",-1,-1,n,t,e,i,r,0),_("z","y","x",1,-1,n,t,-e,i,r,1),_("x","z","y",1,1,e,n,t,s,i,2),_("x","z","y",1,-1,e,n,-t,s,i,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new at(h,3)),this.setAttribute("normal",new at(p,3)),this.setAttribute("uv",new at(u,2));function _(f,d,m,x,M,E,R,A,w,L,G){const v=E/w,b=R/L,k=E/2,F=R/2,N=A/2,X=w+1,O=L+1;let Y=0,V=0;const re=new C;for(let $=0;$<O;$++){const Q=$*b-F;for(let De=0;De<X;De++){const Oe=De*v-k;re[f]=Oe*x,re[d]=Q*M,re[m]=N,h.push(re.x,re.y,re.z),re[f]=0,re[d]=0,re[m]=A>0?1:-1,p.push(re.x,re.y,re.z),u.push(De/w),u.push(1-$/L),Y+=1}}for(let $=0;$<L;$++)for(let Q=0;Q<w;Q++){const De=l+Q+X*$,Oe=l+Q+X*($+1),q=l+(Q+1)+X*($+1),ee=l+(Q+1)+X*$;c.push(De,Oe,ee),c.push(Oe,q,ee),V+=6}o.addGroup(g,V,G),g+=V,l+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const s=a[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Dt(a){const e={};for(let t=0;t<a.length;t++){const n=Ii(a[t]);for(const s in n)e[s]=n[s]}return e}function Vh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function rc(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Wh={clone:Ii,merge:Dt};var $h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$h,this.fragmentShader=Xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const i=this.uniforms[s].value;i&&i.isTexture?t.uniforms[s]={type:"t",value:i.toJSON(e).uuid}:i&&i.isColor?t.uniforms[s]={type:"c",value:i.getHex()}:i&&i.isVector2?t.uniforms[s]={type:"v2",value:i.toArray()}:i&&i.isVector3?t.uniforms[s]={type:"v3",value:i.toArray()}:i&&i.isVector4?t.uniforms[s]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?t.uniforms[s]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?t.uniforms[s]={type:"m4",value:i.toArray()}:t.uniforms[s]={value:i}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oc extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new C,Yo=new ze,Ko=new ze;class Nt extends oc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,Yo,Ko),t.subVectors(Ko,Yo)}setViewOffset(e,t,n,s,r,i){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ma*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const i=this.view;if(this.view!==null&&this.view.enabled){const c=i.fullWidth,h=i.fullHeight;r+=i.offsetX*s/c,t-=i.offsetY*n/h,s*=i.width/c,n*=i.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,_i=1;class qh extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nt(vi,_i,e,t);s.layers=this.layers,this.add(s);const r=new Nt(vi,_i,e,t);r.layers=this.layers,this.add(r);const i=new Nt(vi,_i,e,t);i.layers=this.layers,this.add(i);const o=new Nt(vi,_i,e,t);o.layers=this.layers,this.add(o);const c=new Nt(vi,_i,e,t);c.layers=this.layers,this.add(c);const h=new Nt(vi,_i,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,i,o,c]=t;for(const h of t)this.remove(h);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),i.up.set(0,0,1),i.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),i.up.set(0,0,-1),i.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,i,o,c,h,p]=this.children,u=e.getRenderTarget(),l=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,i),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=f,e.setRenderTarget(n,5,s),e.render(t,p),e.setRenderTarget(u,l,g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class lc extends Lt{constructor(e,t,n,s,r,i,o,c,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Ri,super(e,t,n,s,r,i,o,c,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yh extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new lc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dt(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:In});r.uniforms.tEquirect.value=t;const i=new Le(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=sn),new qh(1,10,this).update(e,i),t.minFilter=o,i.geometry.dispose(),i.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,s);e.setRenderTarget(r)}}const ka=new C,Kh=new C,jh=new Fe;class $n{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ka.subVectors(n,t).cross(Kh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jh.getNormalMatrix(e),s=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new ii,ys=new C;class no{constructor(e=new $n,t=new $n,n=new $n,s=new $n,r=new $n,i=new $n){this.planes=[e,t,n,s,r,i]}set(e,t,n,s,r,i){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(i),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn){const n=this.planes,s=e.elements,r=s[0],i=s[1],o=s[2],c=s[3],h=s[4],p=s[5],u=s[6],l=s[7],g=s[8],_=s[9],f=s[10],d=s[11],m=s[12],x=s[13],M=s[14],E=s[15];if(n[0].setComponents(c-r,l-h,d-g,E-m).normalize(),n[1].setComponents(c+r,l+h,d+g,E+m).normalize(),n[2].setComponents(c+i,l+p,d+_,E+x).normalize(),n[3].setComponents(c-i,l-p,d-_,E-x).normalize(),n[4].setComponents(c-o,l-u,d-f,E-M).normalize(),t===xn)n[5].setComponents(c+o,l+u,d+f,E+M).normalize();else if(t===qs)n[5].setComponents(o,u,f,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ys.x=s.normal.x>0?e.max.x:e.min.x,ys.y=s.normal.y>0?e.max.y:e.min.y,ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cc(){let a=null,e=!1,t=null,n=null;function s(r,i){t(r,i),n=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(s),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Zh(a){const e=new WeakMap;function t(o,c){const h=o.array,p=o.usage,u=h.byteLength,l=a.createBuffer();a.bindBuffer(c,l),a.bufferData(c,h,p),o.onUploadCallback();let g;if(h instanceof Float32Array)g=a.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?g=a.HALF_FLOAT:g=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=a.SHORT;else if(h instanceof Uint32Array)g=a.UNSIGNED_INT;else if(h instanceof Int32Array)g=a.INT;else if(h instanceof Int8Array)g=a.BYTE;else if(h instanceof Uint8Array)g=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:l,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,h){const p=c.array,u=c.updateRanges;if(a.bindBuffer(h,o),u.length===0)a.bufferSubData(h,0,p);else{u.sort((g,_)=>g.start-_.start);let l=0;for(let g=1;g<u.length;g++){const _=u[l],f=u[g];f.start<=_.start+_.count+1?_.count=Math.max(_.count,f.start+f.count-_.start):(++l,u[l]=f)}u.length=l+1;for(let g=0,_=u.length;g<_;g++){const f=u[g];a.bufferSubData(h,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(a.deleteBuffer(c.buffer),e.delete(o))}function i(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:i}}class Pt extends it{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,i=t/2,o=Math.floor(n),c=Math.floor(s),h=o+1,p=c+1,u=e/o,l=t/c,g=[],_=[],f=[],d=[];for(let m=0;m<p;m++){const x=m*l-i;for(let M=0;M<h;M++){const E=M*u-r;_.push(E,-x,0),f.push(0,0,1),d.push(M/o),d.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){const M=x+h*m,E=x+h*(m+1),R=x+1+h*(m+1),A=x+1+h*m;g.push(M,E,A),g.push(E,R,A)}this.setIndex(g),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qh=`#ifdef USE_ALPHAHASH
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
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sd=`#ifdef USE_AOMAP
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
#endif`,ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rd=`#ifdef USE_BATCHING
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
#endif`,od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dd=`#ifdef USE_IRIDESCENCE
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
#endif`,ud=`#ifdef USE_BUMPMAP
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sd=`#define PI 3.141592653589793
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
} // validated`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`
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
}`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
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
}`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
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
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,$d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
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
#endif`,jd=`struct PhysicalMaterial {
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
}`,Zd=`
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
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,au=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ru=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ou=`#if defined( USE_POINTS_UV )
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
#endif`,lu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,du=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fu=`#ifdef USE_MORPHTARGETS
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
#endif`,pu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xu=`#ifdef USE_NORMALMAP
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
#endif`,Su=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Au=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ru=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Du=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ou=`float getShadowMask() {
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
}`,ku=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fu=`#ifdef USE_SKINNING
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
#endif`,Bu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zu=`#ifdef USE_SKINNING
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
#endif`,Hu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$u=`#ifdef USE_TRANSMISSION
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
#endif`,Xu=`#ifdef USE_TRANSMISSION
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
#endif`,qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ju=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ju=`uniform sampler2D t2D;
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
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ef=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sf=`#include <common>
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
}`,af=`#if DEPTH_PACKING == 3200
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
}`,rf=`#define DISTANCE
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
}`,of=`#define DISTANCE
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
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`uniform float scale;
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
}`,df=`uniform vec3 diffuse;
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
}`,uf=`#include <common>
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
}`,ff=`uniform vec3 diffuse;
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
}`,pf=`#define LAMBERT
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
}`,mf=`#define LAMBERT
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
}`,gf=`#define MATCAP
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
}`,vf=`#define MATCAP
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
}`,_f=`#define NORMAL
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
}`,bf=`#define NORMAL
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
}`,xf=`#define PHONG
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
}`,Sf=`#define PHONG
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
}`,Mf=`#define STANDARD
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
}`,yf=`#define STANDARD
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
}`,Ef=`#define TOON
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
}`,Tf=`#define TOON
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
}`,wf=`uniform float size;
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
}`,Af=`uniform vec3 diffuse;
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
}`,Rf=`#include <common>
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
}`,Cf=`uniform vec3 color;
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
}`,Pf=`uniform float rotation;
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
}`,Lf=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Jh,alphahash_pars_fragment:Qh,alphamap_fragment:ed,alphamap_pars_fragment:td,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:sd,aomap_pars_fragment:ad,batching_pars_vertex:rd,batching_vertex:od,begin_vertex:ld,beginnormal_vertex:cd,bsdfs:hd,iridescence_fragment:dd,bumpmap_pars_fragment:ud,clipping_planes_fragment:fd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:md,clipping_planes_vertex:gd,color_fragment:vd,color_pars_fragment:_d,color_pars_vertex:bd,color_vertex:xd,common:Sd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:yd,displacementmap_pars_vertex:Ed,displacementmap_vertex:Td,emissivemap_fragment:wd,emissivemap_pars_fragment:Ad,colorspace_fragment:Rd,colorspace_pars_fragment:Cd,envmap_fragment:Pd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Id,envmap_pars_vertex:Dd,envmap_physical_pars_fragment:Wd,envmap_vertex:Nd,fog_vertex:Ud,fog_pars_vertex:Od,fog_fragment:kd,fog_pars_fragment:Fd,gradientmap_pars_fragment:Bd,lightmap_pars_fragment:zd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Vd,lights_toon_fragment:$d,lights_toon_pars_fragment:Xd,lights_phong_fragment:qd,lights_phong_pars_fragment:Yd,lights_physical_fragment:Kd,lights_physical_pars_fragment:jd,lights_fragment_begin:Zd,lights_fragment_maps:Jd,lights_fragment_end:Qd,logdepthbuf_fragment:eu,logdepthbuf_pars_fragment:tu,logdepthbuf_pars_vertex:nu,logdepthbuf_vertex:iu,map_fragment:su,map_pars_fragment:au,map_particle_fragment:ru,map_particle_pars_fragment:ou,metalnessmap_fragment:lu,metalnessmap_pars_fragment:cu,morphinstance_vertex:hu,morphcolor_vertex:du,morphnormal_vertex:uu,morphtarget_pars_vertex:fu,morphtarget_vertex:pu,normal_fragment_begin:mu,normal_fragment_maps:gu,normal_pars_fragment:vu,normal_pars_vertex:_u,normal_vertex:bu,normalmap_pars_fragment:xu,clearcoat_normal_fragment_begin:Su,clearcoat_normal_fragment_maps:Mu,clearcoat_pars_fragment:yu,iridescence_pars_fragment:Eu,opaque_fragment:Tu,packing:wu,premultiplied_alpha_fragment:Au,project_vertex:Ru,dithering_fragment:Cu,dithering_pars_fragment:Pu,roughnessmap_fragment:Lu,roughnessmap_pars_fragment:Iu,shadowmap_pars_fragment:Du,shadowmap_pars_vertex:Nu,shadowmap_vertex:Uu,shadowmask_pars_fragment:Ou,skinbase_vertex:ku,skinning_pars_vertex:Fu,skinning_vertex:Bu,skinnormal_vertex:zu,specularmap_fragment:Hu,specularmap_pars_fragment:Gu,tonemapping_fragment:Vu,tonemapping_pars_fragment:Wu,transmission_fragment:$u,transmission_pars_fragment:Xu,uv_pars_fragment:qu,uv_pars_vertex:Yu,uv_vertex:Ku,worldpos_vertex:ju,background_vert:Zu,background_frag:Ju,backgroundCube_vert:Qu,backgroundCube_frag:ef,cube_vert:tf,cube_frag:nf,depth_vert:sf,depth_frag:af,distanceRGBA_vert:rf,distanceRGBA_frag:of,equirect_vert:lf,equirect_frag:cf,linedashed_vert:hf,linedashed_frag:df,meshbasic_vert:uf,meshbasic_frag:ff,meshlambert_vert:pf,meshlambert_frag:mf,meshmatcap_vert:gf,meshmatcap_frag:vf,meshnormal_vert:_f,meshnormal_frag:bf,meshphong_vert:xf,meshphong_frag:Sf,meshphysical_vert:Mf,meshphysical_frag:yf,meshtoon_vert:Ef,meshtoon_frag:Tf,points_vert:wf,points_frag:Af,shadow_vert:Rf,shadow_frag:Cf,sprite_vert:Pf,sprite_frag:Lf},se={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},ln={basic:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Se(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Dt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Dt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Se(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Dt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Dt([se.points,se.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Dt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Dt([se.common,se.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Dt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Dt([se.sprite,se.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Dt([se.common,se.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Dt([se.lights,se.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ln.physical={uniforms:Dt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Es={r:0,b:0,g:0},Gn=new dn,If=new et;function Df(a,e,t,n,s,r,i){const o=new Se(0);let c=r===!0?0:1,h,p,u=null,l=0,g=null;function _(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function f(x){let M=!1;const E=_(x);E===null?m(o,c):E&&E.isColor&&(m(E,1),M=!0);const R=a.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,i):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,i),(a.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function d(x,M){const E=_(M);E&&(E.isCubeTexture||E.mapping===ea)?(p===void 0&&(p=new Le(new dt(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ii(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Gn.copy(M.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),p.material.uniforms.envMap.value=E,p.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(If.makeRotationFromEuler(Gn)),p.material.toneMapped=Je.getTransfer(E.colorSpace)!==lt,(u!==E||l!==E.version||g!==a.toneMapping)&&(p.material.needsUpdate=!0,u=E,l=E.version,g=a.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new Le(new Pt(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ii(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.toneMapped=Je.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||l!==E.version||g!==a.toneMapping)&&(h.material.needsUpdate=!0,u=E,l=E.version,g=a.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function m(x,M){x.getRGB(Es,rc(a)),n.buffers.color.setClear(Es.r,Es.g,Es.b,M,i)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),c=M,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,m(o,c)},render:f,addToRenderList:d}}function Nf(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},s=l(null);let r=s,i=!1;function o(v,b,k,F,N){let X=!1;const O=u(F,k,b);r!==O&&(r=O,h(r.object)),X=g(v,F,k,N),X&&_(v,F,k,N),N!==null&&e.update(N,a.ELEMENT_ARRAY_BUFFER),(X||i)&&(i=!1,E(v,b,k,F),N!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return a.createVertexArray()}function h(v){return a.bindVertexArray(v)}function p(v){return a.deleteVertexArray(v)}function u(v,b,k){const F=k.wireframe===!0;let N=n[v.id];N===void 0&&(N={},n[v.id]=N);let X=N[b.id];X===void 0&&(X={},N[b.id]=X);let O=X[F];return O===void 0&&(O=l(c()),X[F]=O),O}function l(v){const b=[],k=[],F=[];for(let N=0;N<t;N++)b[N]=0,k[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:k,attributeDivisors:F,object:v,attributes:{},index:null}}function g(v,b,k,F){const N=r.attributes,X=b.attributes;let O=0;const Y=k.getAttributes();for(const V in Y)if(Y[V].location>=0){const $=N[V];let Q=X[V];if(Q===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),$===void 0||$.attribute!==Q||Q&&$.data!==Q.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function _(v,b,k,F){const N={},X=b.attributes;let O=0;const Y=k.getAttributes();for(const V in Y)if(Y[V].location>=0){let $=X[V];$===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&($=v.instanceColor));const Q={};Q.attribute=$,$&&$.data&&(Q.data=$.data),N[V]=Q,O++}r.attributes=N,r.attributesNum=O,r.index=F}function f(){const v=r.newAttributes;for(let b=0,k=v.length;b<k;b++)v[b]=0}function d(v){m(v,0)}function m(v,b){const k=r.newAttributes,F=r.enabledAttributes,N=r.attributeDivisors;k[v]=1,F[v]===0&&(a.enableVertexAttribArray(v),F[v]=1),N[v]!==b&&(a.vertexAttribDivisor(v,b),N[v]=b)}function x(){const v=r.newAttributes,b=r.enabledAttributes;for(let k=0,F=b.length;k<F;k++)b[k]!==v[k]&&(a.disableVertexAttribArray(k),b[k]=0)}function M(v,b,k,F,N,X,O){O===!0?a.vertexAttribIPointer(v,b,k,N,X):a.vertexAttribPointer(v,b,k,F,N,X)}function E(v,b,k,F){f();const N=F.attributes,X=k.getAttributes(),O=b.defaultAttributeValues;for(const Y in X){const V=X[Y];if(V.location>=0){let re=N[Y];if(re===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),re!==void 0){const $=re.normalized,Q=re.itemSize,De=e.get(re);if(De===void 0)continue;const Oe=De.buffer,q=De.type,ee=De.bytesPerElement,ve=q===a.INT||q===a.UNSIGNED_INT||re.gpuType===qr;if(re.isInterleavedBufferAttribute){const de=re.data,Ne=de.stride,we=re.offset;if(de.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)m(V.location+Ve,de.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)d(V.location+Ve);a.bindBuffer(a.ARRAY_BUFFER,Oe);for(let Ve=0;Ve<V.locationSize;Ve++)M(V.location+Ve,Q/V.locationSize,q,$,Ne*ee,(we+Q/V.locationSize*Ve)*ee,ve)}else{if(re.isInstancedBufferAttribute){for(let de=0;de<V.locationSize;de++)m(V.location+de,re.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let de=0;de<V.locationSize;de++)d(V.location+de);a.bindBuffer(a.ARRAY_BUFFER,Oe);for(let de=0;de<V.locationSize;de++)M(V.location+de,Q/V.locationSize,q,$,Q*ee,Q/V.locationSize*de*ee,ve)}}else if(O!==void 0){const $=O[Y];if($!==void 0)switch($.length){case 2:a.vertexAttrib2fv(V.location,$);break;case 3:a.vertexAttrib3fv(V.location,$);break;case 4:a.vertexAttrib4fv(V.location,$);break;default:a.vertexAttrib1fv(V.location,$)}}}}x()}function R(){L();for(const v in n){const b=n[v];for(const k in b){const F=b[k];for(const N in F)p(F[N].object),delete F[N];delete b[k]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const b=n[v.id];for(const k in b){const F=b[k];for(const N in F)p(F[N].object),delete F[N];delete b[k]}delete n[v.id]}function w(v){for(const b in n){const k=n[b];if(k[v.id]===void 0)continue;const F=k[v.id];for(const N in F)p(F[N].object),delete F[N];delete k[v.id]}}function L(){G(),i=!0,r!==s&&(r=s,h(r.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:G,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:f,enableAttribute:d,disableUnusedAttributes:x}}function Uf(a,e,t){let n;function s(h){n=h}function r(h,p){a.drawArrays(n,h,p),t.update(p,n,1)}function i(h,p,u){u!==0&&(a.drawArraysInstanced(n,h,p,u),t.update(p,n,u))}function o(h,p,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=p[_];t.update(g,n,1)}function c(h,p,u,l){if(u===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h.length;_++)i(h[_],p[_],l[_]);else{g.multiDrawArraysInstancedWEBGL(n,h,0,p,0,l,0,u);let _=0;for(let f=0;f<u;f++)_+=p[f];for(let f=0;f<l.length;f++)t.update(_,n,l[f])}}this.setMode=s,this.render=r,this.renderInstances=i,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Of(a,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function i(w){return!(w!==rn&&n.convert(w)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const L=w===ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Sn&&n.convert(w)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==cn&&!L)}function c(w){if(w==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=c(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const u=t.logarithmicDepthBuffer===!0,l=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(l===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const g=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),_=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=a.getParameter(a.MAX_TEXTURE_SIZE),d=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),m=a.getParameter(a.MAX_VERTEX_ATTRIBS),x=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),M=a.getParameter(a.MAX_VARYING_VECTORS),E=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:i,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:l,maxTextures:g,maxVertexTextures:_,maxTextureSize:f,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:R,maxSamples:A}}function kf(a){const e=this;let t=null,n=0,s=!1,r=!1;const i=new $n,o=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,l){const g=u.length!==0||l||n!==0||s;return s=l,n=u.length,g},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,l){t=p(u,l,0)},this.setState=function(u,l,g){const _=u.clippingPlanes,f=u.clipIntersection,d=u.clipShadows,m=a.get(u);if(!s||_===null||_.length===0||r&&!d)r?p(null):h();else{const x=r?0:n,M=x*4;let E=m.clippingState||null;c.value=E,E=p(_,l,M,g);for(let R=0;R!==M;++R)E[R]=t[R];m.clippingState=E,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=x}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(u,l,g,_){const f=u!==null?u.length:0;let d=null;if(f!==0){if(d=c.value,_!==!0||d===null){const m=g+f*4,x=l.matrixWorldInverse;o.getNormalMatrix(x),(d===null||d.length<m)&&(d=new Float32Array(m));for(let M=0,E=g;M!==f;++M,E+=4)i.copy(u[M]).applyMatrix4(x,o),i.normal.toArray(d,E),d[E+3]=i.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,d}}function Ff(a){let e=new WeakMap;function t(i,o){return o===dr?i.mapping=Ri:o===ur&&(i.mapping=Ci),i}function n(i){if(i&&i.isTexture){const o=i.mapping;if(o===dr||o===ur)if(e.has(i)){const c=e.get(i).texture;return t(c,i.mapping)}else{const c=i.image;if(c&&c.height>0){const h=new Yh(c.height);return h.fromEquirectangularTexture(a,i),e.set(i,h),i.addEventListener("dispose",s),t(h.texture,i.mapping)}else return null}}return i}function s(i){const o=i.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class hc extends oc{constructor(e=-1,t=1,n=1,s=-1,r=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=i,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,i=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,i=r+h*this.view.width,o-=p*this.view.offsetY,c=o-p*this.view.height}this.projectionMatrix.makeOrthographic(r,i,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Mi=4,jo=[.125,.215,.35,.446,.526,.582],Yn=20,Fa=new hc,Zo=new Se;let Ba=null,za=0,Ha=0,Ga=!1;const Xn=(1+Math.sqrt(5))/2,bi=1/Xn,Jo=[new C(-Xn,bi,0),new C(Xn,bi,0),new C(-bi,0,Xn),new C(bi,0,Xn),new C(0,Xn,-bi),new C(0,Xn,bi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Qo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,za,Ha),this._renderer.xr.enabled=Ga,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ts,format:rn,colorSpace:Un,depthBuffer:!1},s=el(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bf(r)),this._blurMaterial=zf(r,e,t)}return s}_compileMaterial(e){const t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,s){const o=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,l=p.toneMapping;p.getClearColor(Zo),p.toneMapping=Dn,p.autoClear=!1;const g=new ct({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),_=new Le(new dt,g);let f=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,f=!0):(g.color.copy(Zo),f=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(o.up.set(0,c[m],0),o.lookAt(h[m],0,0)):x===1?(o.up.set(0,0,c[m]),o.lookAt(0,h[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,h[m]));const M=this._cubeSize;Ts(s,x*M,m>2?M:0,M,M),p.setRenderTarget(s),f&&p.render(_,o),p.render(e,o)}_.geometry.dispose(),_.material.dispose(),p.toneMapping=l,p.autoClear=u,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ri||e.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tl());const r=s?this._cubemapMaterial:this._equirectMaterial,i=new Le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ts(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(i,Fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const i=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jo[(s-r-1)%Jo.length];this._blur(e,r-1,r,i,o)}t.autoClear=n}_blur(e,t,n,s,r){const i=this._pingPongRenderTarget;this._halfBlur(e,i,t,n,s,"latitudinal",r),this._halfBlur(i,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,i,o){const c=this._renderer,h=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,u=new Le(this._lodPlanes[s],h),l=h.uniforms,g=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Yn-1),f=r/_,d=isFinite(r)?1+Math.floor(p*f):Yn;d>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Yn}`);const m=[];let x=0;for(let w=0;w<Yn;++w){const L=w/f,G=Math.exp(-L*L/2);m.push(G),w===0?x+=G:w<d&&(x+=2*G)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;l.envMap.value=e.texture,l.samples.value=d,l.weights.value=m,l.latitudinal.value=i==="latitudinal",o&&(l.poleAxis.value=o);const{_lodMax:M}=this;l.dTheta.value=_,l.mipInt.value=M-n;const E=this._sizeLods[s],R=3*E*(s>M-Mi?s-M+Mi:0),A=4*(this._cubeSize-E);Ts(t,R,A,3*E,2*E),c.setRenderTarget(t),c.render(u,Fa)}}function Bf(a){const e=[],t=[],n=[];let s=a;const r=a-Mi+1+jo.length;for(let i=0;i<r;i++){const o=Math.pow(2,s);t.push(o);let c=1/o;i>a-Mi?c=jo[i-a+Mi-1]:i===0&&(c=0),n.push(c);const h=1/(o-2),p=-h,u=1+h,l=[p,p,u,p,u,u,p,p,u,u,p,u],g=6,_=6,f=3,d=2,m=1,x=new Float32Array(f*_*g),M=new Float32Array(d*_*g),E=new Float32Array(m*_*g);for(let A=0;A<g;A++){const w=A%3*2/3-1,L=A>2?0:-1,G=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];x.set(G,f*_*A),M.set(l,d*_*A);const v=[A,A,A,A,A,A];E.set(v,m*_*A)}const R=new it;R.setAttribute("position",new wt(x,f)),R.setAttribute("uv",new wt(M,d)),R.setAttribute("faceIndex",new wt(E,m)),e.push(R),s>Mi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function el(a,e,t){const n=new ei(a,e,t);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(a,e,t,n,s){a.viewport.set(e,t,n,s),a.scissor.set(e,t,n,s)}function zf(a,e,t){const n=new Float32Array(Yn),s=new C(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:io(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function tl(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function nl(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function io(){return`

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
	`}function Hf(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===dr||c===ur,p=c===Ri||c===Ci;if(h||p){let u=e.get(o);const l=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==l)return t===null&&(t=new Qo(a)),u=h?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const g=o.image;return h&&g&&g.height>0||p&&g&&s(g)?(t===null&&(t=new Qo(a)),u=h?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const h=6;for(let p=0;p<h;p++)o[p]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function i(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:i}}function Gf(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=a.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Hs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vf(a,e,t,n){const s={},r=new WeakMap;function i(u){const l=u.target;l.index!==null&&e.remove(l.index);for(const _ in l.attributes)e.remove(l.attributes[_]);for(const _ in l.morphAttributes){const f=l.morphAttributes[_];for(let d=0,m=f.length;d<m;d++)e.remove(f[d])}l.removeEventListener("dispose",i),delete s[l.id];const g=r.get(l);g&&(e.remove(g),r.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(u,l){return s[l.id]===!0||(l.addEventListener("dispose",i),s[l.id]=!0,t.memory.geometries++),l}function c(u){const l=u.attributes;for(const _ in l)e.update(l[_],a.ARRAY_BUFFER);const g=u.morphAttributes;for(const _ in g){const f=g[_];for(let d=0,m=f.length;d<m;d++)e.update(f[d],a.ARRAY_BUFFER)}}function h(u){const l=[],g=u.index,_=u.attributes.position;let f=0;if(g!==null){const x=g.array;f=g.version;for(let M=0,E=x.length;M<E;M+=3){const R=x[M+0],A=x[M+1],w=x[M+2];l.push(R,A,A,w,w,R)}}else if(_!==void 0){const x=_.array;f=_.version;for(let M=0,E=x.length/3-1;M<E;M+=3){const R=M+0,A=M+1,w=M+2;l.push(R,A,A,w,w,R)}}else return;const d=new(Ql(l)?ac:sc)(l,1);d.version=f;const m=r.get(u);m&&e.remove(m),r.set(u,d)}function p(u){const l=r.get(u);if(l){const g=u.index;g!==null&&l.version<g.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:p}}function Wf(a,e,t){let n;function s(l){n=l}let r,i;function o(l){r=l.type,i=l.bytesPerElement}function c(l,g){a.drawElements(n,g,r,l*i),t.update(g,n,1)}function h(l,g,_){_!==0&&(a.drawElementsInstanced(n,g,r,l*i,_),t.update(g,n,_))}function p(l,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,l,0,_);let d=0;for(let m=0;m<_;m++)d+=g[m];t.update(d,n,1)}function u(l,g,_,f){if(_===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)h(l[m]/i,g[m],f[m]);else{d.multiDrawElementsInstancedWEBGL(n,g,0,r,l,0,f,0,_);let m=0;for(let x=0;x<_;x++)m+=g[x];for(let x=0;x<f.length;x++)t.update(m,n,f[x])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=u}function $f(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,i,o){switch(t.calls++,i){case a.TRIANGLES:t.triangles+=o*(r/3);break;case a.LINES:t.lines+=o*(r/2);break;case a.LINE_STRIP:t.lines+=o*(r-1);break;case a.LINE_LOOP:t.lines+=o*r;break;case a.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Xf(a,e,t){const n=new WeakMap,s=new nt;function r(i,o,c){const h=i.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=p!==void 0?p.length:0;let l=n.get(o);if(l===void 0||l.count!==u){let v=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var g=v;l!==void 0&&l.texture.dispose();const _=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),f===!0&&(E=2),d===!0&&(E=3);let R=o.attributes.position.count*E,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*A*4*u),L=new tc(w,R,A,u);L.type=cn,L.needsUpdate=!0;const G=E*4;for(let b=0;b<u;b++){const k=m[b],F=x[b],N=M[b],X=R*A*4*b;for(let O=0;O<k.count;O++){const Y=O*G;_===!0&&(s.fromBufferAttribute(k,O),w[X+Y+0]=s.x,w[X+Y+1]=s.y,w[X+Y+2]=s.z,w[X+Y+3]=0),f===!0&&(s.fromBufferAttribute(F,O),w[X+Y+4]=s.x,w[X+Y+5]=s.y,w[X+Y+6]=s.z,w[X+Y+7]=0),d===!0&&(s.fromBufferAttribute(N,O),w[X+Y+8]=s.x,w[X+Y+9]=s.y,w[X+Y+10]=s.z,w[X+Y+11]=N.itemSize===4?s.w:1)}}l={count:u,texture:L,size:new ze(R,A)},n.set(o,l),o.addEventListener("dispose",v)}if(i.isInstancedMesh===!0&&i.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",i.morphTexture,t);else{let _=0;for(let d=0;d<h.length;d++)_+=h[d];const f=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(a,"morphTargetBaseInfluence",f),c.getUniforms().setValue(a,"morphTargetInfluences",h)}c.getUniforms().setValue(a,"morphTargetsTexture",l.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",l.size)}return{update:r}}function qf(a,e,t,n){let s=new WeakMap;function r(c){const h=n.render.frame,p=c.geometry,u=e.get(c,p);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(t.update(c.instanceMatrix,a.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,a.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const l=c.skeleton;s.get(l)!==h&&(l.update(),s.set(l,h))}return u}function i(){s=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:i}}class dc extends Lt{constructor(e,t,n,s,r,i,o,c,h,p=Ti){if(p!==Ti&&p!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===Ti&&(n=Qn),n===void 0&&p===Li&&(n=Pi),super(null,s,r,i,o,c,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Bt,this.minFilter=c!==void 0?c:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const uc=new Lt,il=new dc(1,1),fc=new tc,pc=new Ih,mc=new lc,sl=[],al=[],rl=new Float32Array(16),ol=new Float32Array(9),ll=new Float32Array(4);function ki(a,e,t){const n=a[0];if(n<=0||n>0)return a;const s=e*t;let r=sl[s];if(r===void 0&&(r=new Float32Array(s),sl[s]=r),e!==0){n.toArray(r,0);for(let i=1,o=0;i!==e;++i)o+=t,a[i].toArray(r,o)}return r}function St(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Mt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function na(a,e){let t=al[e];t===void 0&&(t=new Int32Array(e),al[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Yf(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Kf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;a.uniform2fv(this.addr,e),Mt(t,e)}}function jf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;a.uniform3fv(this.addr,e),Mt(t,e)}}function Zf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;a.uniform4fv(this.addr,e),Mt(t,e)}}function Jf(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;ll.set(n),a.uniformMatrix2fv(this.addr,!1,ll),Mt(t,n)}}function Qf(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;ol.set(n),a.uniformMatrix3fv(this.addr,!1,ol),Mt(t,n)}}function ep(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;rl.set(n),a.uniformMatrix4fv(this.addr,!1,rl),Mt(t,n)}}function tp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function np(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;a.uniform2iv(this.addr,e),Mt(t,e)}}function ip(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;a.uniform3iv(this.addr,e),Mt(t,e)}}function sp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;a.uniform4iv(this.addr,e),Mt(t,e)}}function ap(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function rp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;a.uniform2uiv(this.addr,e),Mt(t,e)}}function op(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;a.uniform3uiv(this.addr,e),Mt(t,e)}}function lp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;a.uniform4uiv(this.addr,e),Mt(t,e)}}function cp(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s);let r;this.type===a.SAMPLER_2D_SHADOW?(il.compareFunction=Jl,r=il):r=uc,t.setTexture2D(e||r,s)}function hp(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pc,s)}function dp(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||mc,s)}function up(a,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(a.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fc,s)}function fp(a){switch(a){case 5126:return Yf;case 35664:return Kf;case 35665:return jf;case 35666:return Zf;case 35674:return Jf;case 35675:return Qf;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return sp;case 5125:return ap;case 36294:return rp;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return up}}function pp(a,e){a.uniform1fv(this.addr,e)}function mp(a,e){const t=ki(e,this.size,2);a.uniform2fv(this.addr,t)}function gp(a,e){const t=ki(e,this.size,3);a.uniform3fv(this.addr,t)}function vp(a,e){const t=ki(e,this.size,4);a.uniform4fv(this.addr,t)}function _p(a,e){const t=ki(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function bp(a,e){const t=ki(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function xp(a,e){const t=ki(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Sp(a,e){a.uniform1iv(this.addr,e)}function Mp(a,e){a.uniform2iv(this.addr,e)}function yp(a,e){a.uniform3iv(this.addr,e)}function Ep(a,e){a.uniform4iv(this.addr,e)}function Tp(a,e){a.uniform1uiv(this.addr,e)}function wp(a,e){a.uniform2uiv(this.addr,e)}function Ap(a,e){a.uniform3uiv(this.addr,e)}function Rp(a,e){a.uniform4uiv(this.addr,e)}function Cp(a,e,t){const n=this.cache,s=e.length,r=na(t,s);St(n,r)||(a.uniform1iv(this.addr,r),Mt(n,r));for(let i=0;i!==s;++i)t.setTexture2D(e[i]||uc,r[i])}function Pp(a,e,t){const n=this.cache,s=e.length,r=na(t,s);St(n,r)||(a.uniform1iv(this.addr,r),Mt(n,r));for(let i=0;i!==s;++i)t.setTexture3D(e[i]||pc,r[i])}function Lp(a,e,t){const n=this.cache,s=e.length,r=na(t,s);St(n,r)||(a.uniform1iv(this.addr,r),Mt(n,r));for(let i=0;i!==s;++i)t.setTextureCube(e[i]||mc,r[i])}function Ip(a,e,t){const n=this.cache,s=e.length,r=na(t,s);St(n,r)||(a.uniform1iv(this.addr,r),Mt(n,r));for(let i=0;i!==s;++i)t.setTexture2DArray(e[i]||fc,r[i])}function Dp(a){switch(a){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return vp;case 35674:return _p;case 35675:return bp;case 35676:return xp;case 5124:case 35670:return Sp;case 35667:case 35671:return Mp;case 35668:case 35672:return yp;case 35669:case 35673:return Ep;case 5125:return Tp;case 36294:return wp;case 36295:return Ap;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Lp;case 36289:case 36303:case 36311:case 36292:return Ip}}class Np{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fp(t.type)}}class Up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dp(t.type)}}class Op{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,i=s.length;r!==i;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function cl(a,e){a.seq.push(e),a.map[e.id]=e}function kp(a,e,t){const n=a.name,s=n.length;for(Va.lastIndex=0;;){const r=Va.exec(n),i=Va.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&i+2===s){cl(t,h===void 0?new Np(o,a,e):new Up(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new Op(o),cl(t,u)),t=u}}}class Gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),i=e.getUniformLocation(t,r.name);kp(r,i,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,i=t.length;r!==i;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const i=e[s];i.id in t&&n.push(i)}return n}}function hl(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}const Fp=37297;let Bp=0;function zp(a,e){const t=a.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let i=s;i<r;i++){const o=i+1;n.push(`${o===e?">":" "} ${o}: ${t[i]}`)}return n.join(`
`)}function Hp(a){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(a);let n;switch(e===t?n="":e===Xs&&t===$s?n="LinearDisplayP3ToLinearSRGB":e===$s&&t===Xs&&(n="LinearSRGBToLinearDisplayP3"),a){case Un:case ta:return[n,"LinearTransferOETF"];case Et:case eo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),[n,"LinearTransferOETF"]}}function dl(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),s=a.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const i=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zp(a.getShaderSource(e),i)}else return s}function Gp(a,e){const t=Hp(e);return`vec4 ${a}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vp(a,e){let t;switch(e){case sh:t="Linear";break;case ah:t="Reinhard";break;case rh:t="Cineon";break;case oh:t="ACESFilmic";break;case ch:t="AgX";break;case hh:t="Neutral";break;case lh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ws=new C;function Wp(){Je.getLuminanceCoefficients(ws);const a=ws.x.toFixed(4),e=ws.y.toFixed(4),t=ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $p(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function Xp(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qp(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=a.getActiveAttrib(e,s),i=r.name;let o=1;r.type===a.FLOAT_MAT2&&(o=2),r.type===a.FLOAT_MAT3&&(o=3),r.type===a.FLOAT_MAT4&&(o=4),t[i]={type:r.type,location:a.getAttribLocation(e,i),locationSize:o}}return t}function Zi(a){return a!==""}function ul(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fl(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hr(a){return a.replace(Yp,jp)}const Kp=new Map;function jp(a,e){let t=ke[e];if(t===void 0){const n=Kp.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hr(t)}const Zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(a){return a.replace(Zp,Jp)}function Jp(a,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ml(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}function Qp(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===zl?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function em(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ri:case Ci:e="ENVMAP_TYPE_CUBE";break;case ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tm(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function nm(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Xr:e="ENVMAP_BLENDING_MULTIPLY";break;case nh:e="ENVMAP_BLENDING_MIX";break;case ih:e="ENVMAP_BLENDING_ADD";break}return e}function im(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function sm(a,e,t,n){const s=a.getContext(),r=t.defines;let i=t.vertexShader,o=t.fragmentShader;const c=Qp(t),h=em(t),p=tm(t),u=nm(t),l=im(t),g=$p(t),_=Xp(r),f=s.createProgram();let d,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zi).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zi).join(`
`),m.length>0&&(m+=`
`)):(d=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),m=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+u:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Vp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Gp("linearToOutputTexel",t.outputColorSpace),Wp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),i=Hr(i),i=ul(i,t),i=fl(i,t),o=Hr(o),o=ul(o,t),o=fl(o,t),i=pl(i),o=pl(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",t.glslVersion===Io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=x+d+i,E=x+m+o,R=hl(s,s.VERTEX_SHADER,M),A=hl(s,s.FRAGMENT_SHADER,E);s.attachShader(f,R),s.attachShader(f,A),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function w(b){if(a.debug.checkShaderErrors){const k=s.getProgramInfoLog(f).trim(),F=s.getShaderInfoLog(R).trim(),N=s.getShaderInfoLog(A).trim();let X=!0,O=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(X=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,f,R,A);else{const Y=dl(s,R,"vertex"),V=dl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+k+`
`+Y+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||N==="")&&(O=!1);O&&(b.diagnostics={runnable:X,programLog:k,vertexShader:{log:F,prefix:d},fragmentShader:{log:N,prefix:m}})}s.deleteShader(R),s.deleteShader(A),L=new Gs(s,f),G=qp(s,f)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let G;this.getAttributes=function(){return G===void 0&&w(this),G};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(f,Fp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bp++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=A,this}let am=0;class rm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),i=this._getShaderCacheForMaterial(e);return i.has(s)===!1&&(i.add(s),s.usedTimes++),i.has(r)===!1&&(i.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new om(e),t.set(e,n)),n}}class om{constructor(e){this.id=am++,this.code=e,this.usedTimes=0}}function lm(a,e,t,n,s,r,i){const o=new nc,c=new rm,h=new Set,p=[],u=s.logarithmicDepthBuffer,l=s.reverseDepthBuffer,g=s.vertexTextures;let _=s.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return h.add(v),v===0?"uv":`uv${v}`}function m(v,b,k,F,N){const X=F.fog,O=N.geometry,Y=v.isMeshStandardMaterial?F.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||Y),re=V&&V.mapping===ea?V.image.height:null,$=f[v.type];v.precision!==null&&(_=s.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,De=Q!==void 0?Q.length:0;let Oe=0;O.morphAttributes.position!==void 0&&(Oe=1),O.morphAttributes.normal!==void 0&&(Oe=2),O.morphAttributes.color!==void 0&&(Oe=3);let q,ee,ve,de;if($){const kt=ln[$];q=kt.vertexShader,ee=kt.fragmentShader}else q=v.vertexShader,ee=v.fragmentShader,c.update(v),ve=c.getVertexShaderID(v),de=c.getFragmentShaderID(v);const Ne=a.getRenderTarget(),we=N.isInstancedMesh===!0,Ve=N.isBatchedMesh===!0,tt=!!v.map,We=!!v.matcap,P=!!V,zt=!!v.aoMap,He=!!v.lightMap,Xe=!!v.bumpMap,Re=!!v.normalMap,rt=!!v.displacementMap,Ie=!!v.emissiveMap,T=!!v.metalnessMap,S=!!v.roughnessMap,B=v.anisotropy>0,j=v.clearcoat>0,J=v.dispersion>0,K=v.iridescence>0,be=v.sheen>0,ae=v.transmission>0,ue=B&&!!v.anisotropyMap,qe=j&&!!v.clearcoatMap,te=j&&!!v.clearcoatNormalMap,fe=j&&!!v.clearcoatRoughnessMap,Ce=K&&!!v.iridescenceMap,Pe=K&&!!v.iridescenceThicknessMap,pe=be&&!!v.sheenColorMap,Ge=be&&!!v.sheenRoughnessMap,Ue=!!v.specularMap,st=!!v.specularColorMap,I=!!v.specularIntensityMap,ce=ae&&!!v.transmissionMap,W=ae&&!!v.thicknessMap,Z=!!v.gradientMap,oe=!!v.alphaMap,he=v.alphaTest>0,$e=!!v.alphaHash,vt=!!v.extensions;let Ot=Dn;v.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Ot=a.toneMapping);const Ke={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:ee,defines:v.defines,customVertexShaderID:ve,customFragmentShaderID:de,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Ve,batchingColor:Ve&&N._colorsTexture!==null,instancing:we,instancingColor:we&&N.instanceColor!==null,instancingMorph:we&&N.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ne===null?a.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Un,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:We,envMap:P,envMapMode:P&&V.mapping,envMapCubeUVHeight:re,aoMap:zt,lightMap:He,bumpMap:Xe,normalMap:Re,displacementMap:g&&rt,emissiveMap:Ie,normalMapObjectSpace:Re&&v.normalMapType===ph,normalMapTangentSpace:Re&&v.normalMapType===Zl,metalnessMap:T,roughnessMap:S,anisotropy:B,anisotropyMap:ue,clearcoat:j,clearcoatMap:qe,clearcoatNormalMap:te,clearcoatRoughnessMap:fe,dispersion:J,iridescence:K,iridescenceMap:Ce,iridescenceThicknessMap:Pe,sheen:be,sheenColorMap:pe,sheenRoughnessMap:Ge,specularMap:Ue,specularColorMap:st,specularIntensityMap:I,transmission:ae,transmissionMap:ce,thicknessMap:W,gradientMap:Z,opaque:v.transparent===!1&&v.blending===Ei&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:he,alphaHash:$e,combine:v.combine,mapUv:tt&&d(v.map.channel),aoMapUv:zt&&d(v.aoMap.channel),lightMapUv:He&&d(v.lightMap.channel),bumpMapUv:Xe&&d(v.bumpMap.channel),normalMapUv:Re&&d(v.normalMap.channel),displacementMapUv:rt&&d(v.displacementMap.channel),emissiveMapUv:Ie&&d(v.emissiveMap.channel),metalnessMapUv:T&&d(v.metalnessMap.channel),roughnessMapUv:S&&d(v.roughnessMap.channel),anisotropyMapUv:ue&&d(v.anisotropyMap.channel),clearcoatMapUv:qe&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:te&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&d(v.sheenRoughnessMap.channel),specularMapUv:Ue&&d(v.specularMap.channel),specularColorMapUv:st&&d(v.specularColorMap.channel),specularIntensityMapUv:I&&d(v.specularIntensityMap.channel),transmissionMapUv:ce&&d(v.transmissionMap.channel),thicknessMapUv:W&&d(v.thicknessMap.channel),alphaMapUv:oe&&d(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Re||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(tt||oe),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:l,skinning:N.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ot,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&Je.getTransfer(v.map.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Yt,flipSided:v.side===Ut,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:vt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&v.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ke.vertexUv1s=h.has(1),Ke.vertexUv2s=h.has(2),Ke.vertexUv3s=h.has(3),h.clear(),Ke}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const k in v.defines)b.push(k),b.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(M(b,v),E(b,v),b.push(a.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function M(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function E(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),v.push(o.mask)}function R(v){const b=f[v.type];let k;if(b){const F=ln[b];k=Wh.clone(F.uniforms)}else k=v.uniforms;return k}function A(v,b){let k;for(let F=0,N=p.length;F<N;F++){const X=p[F];if(X.cacheKey===b){k=X,++k.usedTimes;break}}return k===void 0&&(k=new sm(a,b,v,r),p.push(k)),k}function w(v){if(--v.usedTimes===0){const b=p.indexOf(v);p[b]=p[p.length-1],p.pop(),v.destroy()}}function L(v){c.remove(v)}function G(){c.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:R,acquireProgram:A,releaseProgram:w,releaseShaderCache:L,programs:p,dispose:G}}function cm(){let a=new WeakMap;function e(i){return a.has(i)}function t(i){let o=a.get(i);return o===void 0&&(o={},a.set(i,o)),o}function n(i){a.delete(i)}function s(i,o,c){a.get(i)[o]=c}function r(){a=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function gl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function vl(){const a=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function i(u,l,g,_,f,d){let m=a[e];return m===void 0?(m={id:u.id,object:u,geometry:l,material:g,groupOrder:_,renderOrder:u.renderOrder,z:f,group:d},a[e]=m):(m.id=u.id,m.object=u,m.geometry=l,m.material=g,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=f,m.group=d),e++,m}function o(u,l,g,_,f,d){const m=i(u,l,g,_,f,d);g.transmission>0?n.push(m):g.transparent===!0?s.push(m):t.push(m)}function c(u,l,g,_,f,d){const m=i(u,l,g,_,f,d);g.transmission>0?n.unshift(m):g.transparent===!0?s.unshift(m):t.unshift(m)}function h(u,l){t.length>1&&t.sort(u||hm),n.length>1&&n.sort(l||gl),s.length>1&&s.sort(l||gl)}function p(){for(let u=e,l=a.length;u<l;u++){const g=a[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:p,sort:h}}function dm(){let a=new WeakMap;function e(n,s){const r=a.get(n);let i;return r===void 0?(i=new vl,a.set(n,[i])):s>=r.length?(i=new vl,r.push(i)):i=r[s],i}function t(){a=new WeakMap}return{get:e,dispose:t}}function um(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Se};break;case"SpotLight":t={position:new C,direction:new C,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new C,halfWidth:new C,halfHeight:new C};break}return a[e.id]=t,t}}}function fm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let pm=0;function mm(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function gm(a){const e=new um,t=fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new C);const s=new C,r=new et,i=new et;function o(h){let p=0,u=0,l=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let g=0,_=0,f=0,d=0,m=0,x=0,M=0,E=0,R=0,A=0,w=0;h.sort(mm);for(let G=0,v=h.length;G<v;G++){const b=h[G],k=b.color,F=b.intensity,N=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)p+=k.r*F,u+=k.g*F,l+=k.b*F;else if(b.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(b.sh.coefficients[O],F);w++}else if(b.isDirectionalLight){const O=e.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const Y=b.shadow,V=t.get(b);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=X,n.directionalShadowMatrix[g]=b.shadow.matrix,x++}n.directional[g]=O,g++}else if(b.isSpotLight){const O=e.get(b);O.position.setFromMatrixPosition(b.matrixWorld),O.color.copy(k).multiplyScalar(F),O.distance=N,O.coneCos=Math.cos(b.angle),O.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),O.decay=b.decay,n.spot[f]=O;const Y=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,Y.updateMatrices(b),b.castShadow&&A++),n.spotLightMatrix[f]=Y.matrix,b.castShadow){const V=t.get(b);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[f]=V,n.spotShadowMap[f]=X,E++}f++}else if(b.isRectAreaLight){const O=e.get(b);O.color.copy(k).multiplyScalar(F),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),n.rectArea[d]=O,d++}else if(b.isPointLight){const O=e.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),O.distance=b.distance,O.decay=b.decay,b.castShadow){const Y=b.shadow,V=t.get(b);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=b.shadow.matrix,M++}n.point[_]=O,_++}else if(b.isHemisphereLight){const O=e.get(b);O.skyColor.copy(b.color).multiplyScalar(F),O.groundColor.copy(b.groundColor).multiplyScalar(F),n.hemi[m]=O,m++}}d>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=u,n.ambient[2]=l;const L=n.hash;(L.directionalLength!==g||L.pointLength!==_||L.spotLength!==f||L.rectAreaLength!==d||L.hemiLength!==m||L.numDirectionalShadows!==x||L.numPointShadows!==M||L.numSpotShadows!==E||L.numSpotMaps!==R||L.numLightProbes!==w)&&(n.directional.length=g,n.spot.length=f,n.rectArea.length=d,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,L.directionalLength=g,L.pointLength=_,L.spotLength=f,L.rectAreaLength=d,L.hemiLength=m,L.numDirectionalShadows=x,L.numPointShadows=M,L.numSpotShadows=E,L.numSpotMaps=R,L.numLightProbes=w,n.version=pm++)}function c(h,p){let u=0,l=0,g=0,_=0,f=0;const d=p.matrixWorldInverse;for(let m=0,x=h.length;m<x;m++){const M=h[m];if(M.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),u++}else if(M.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),g++}else if(M.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),i.identity(),r.copy(M.matrixWorld),r.premultiply(d),i.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(i),E.halfHeight.applyMatrix4(i),_++}else if(M.isPointLight){const E=n.point[l];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(d),l++}else if(M.isHemisphereLight){const E=n.hemi[f];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(d),f++}}}return{setup:o,setupView:c,state:n}}function _l(a){const e=new gm(a),t=[],n=[];function s(p){h.camera=p,t.length=0,n.length=0}function r(p){t.push(p)}function i(p){n.push(p)}function o(){e.setup(t)}function c(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:i}}function vm(a){let e=new WeakMap;function t(s,r=0){const i=e.get(s);let o;return i===void 0?(o=new _l(a),e.set(s,[o])):r>=i.length?(o=new _l(a),i.push(o)):o=i[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class _m extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bm extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
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
}`;function Mm(a,e,t){let n=new no;const s=new ze,r=new ze,i=new nt,o=new _m({depthPacking:fh}),c=new bm,h={},p=t.maxTextureSize,u={[Nn]:Ut,[Ut]:Nn,[Yt]:Yt},l=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:xm,fragmentShader:Sm}),g=l.clone();g.defines.HORIZONTAL_PASS=1;const _=new it;_.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Le(_,l),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let m=this.type;this.render=function(A,w,L){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const G=a.getRenderTarget(),v=a.getActiveCubeFace(),b=a.getActiveMipmapLevel(),k=a.state;k.setBlending(In),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=m!==bn&&this.type===bn,N=m===bn&&this.type!==bn;for(let X=0,O=A.length;X<O;X++){const Y=A[X],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const re=V.getFrameExtents();if(s.multiply(re),r.copy(V.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/re.x),s.x=r.x*re.x,V.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/re.y),s.y=r.y*re.y,V.mapSize.y=r.y)),V.map===null||F===!0||N===!0){const Q=this.type!==bn?{minFilter:Bt,magFilter:Bt}:{};V.map!==null&&V.map.dispose(),V.map=new ei(s.x,s.y,Q),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}a.setRenderTarget(V.map),a.clear();const $=V.getViewportCount();for(let Q=0;Q<$;Q++){const De=V.getViewport(Q);i.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),k.viewport(i),V.updateMatrices(Y,Q),n=V.getFrustum(),E(w,L,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===bn&&x(V,L),V.needsUpdate=!1}m=this.type,d.needsUpdate=!1,a.setRenderTarget(G,v,b)};function x(A,w){const L=e.update(f);l.defines.VSM_SAMPLES!==A.blurSamples&&(l.defines.VSM_SAMPLES=A.blurSamples,g.defines.VSM_SAMPLES=A.blurSamples,l.needsUpdate=!0,g.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ei(s.x,s.y)),l.uniforms.shadow_pass.value=A.map.texture,l.uniforms.resolution.value=A.mapSize,l.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(w,null,L,l,f,null),g.uniforms.shadow_pass.value=A.mapPass.texture,g.uniforms.resolution.value=A.mapSize,g.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(w,null,L,g,f,null)}function M(A,w,L,G){let v=null;const b=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)v=b;else if(v=L.isPointLight===!0?c:o,a.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const k=v.uuid,F=w.uuid;let N=h[k];N===void 0&&(N={},h[k]=N);let X=N[F];X===void 0&&(X=v.clone(),N[F]=X,w.addEventListener("dispose",R)),v=X}if(v.visible=w.visible,v.wireframe=w.wireframe,G===bn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const k=a.properties.get(v);k.light=L}return v}function E(A,w,L,G,v){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===bn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const F=e.update(A),N=A.material;if(Array.isArray(N)){const X=F.groups;for(let O=0,Y=X.length;O<Y;O++){const V=X[O],re=N[V.materialIndex];if(re&&re.visible){const $=M(A,re,G,v);A.onBeforeShadow(a,A,w,L,F,$,V),a.renderBufferDirect(L,null,F,$,A,V),A.onAfterShadow(a,A,w,L,F,$,V)}}}else if(N.visible){const X=M(A,N,G,v);A.onBeforeShadow(a,A,w,L,F,X,null),a.renderBufferDirect(L,null,F,X,A,null),A.onAfterShadow(a,A,w,L,F,X,null)}}const k=A.children;for(let F=0,N=k.length;F<N;F++)E(k[F],w,L,G,v)}function R(A){A.target.removeEventListener("dispose",R);for(const L in h){const G=h[L],v=A.target.uuid;v in G&&(G[v].dispose(),delete G[v])}}}const ym={[sr]:ar,[rr]:cr,[or]:hr,[Ai]:lr,[ar]:sr,[cr]:rr,[hr]:or,[lr]:Ai};function Em(a){function e(){let I=!1;const ce=new nt;let W=null;const Z=new nt(0,0,0,0);return{setMask:function(oe){W!==oe&&!I&&(a.colorMask(oe,oe,oe,oe),W=oe)},setLocked:function(oe){I=oe},setClear:function(oe,he,$e,vt,Ot){Ot===!0&&(oe*=vt,he*=vt,$e*=vt),ce.set(oe,he,$e,vt),Z.equals(ce)===!1&&(a.clearColor(oe,he,$e,vt),Z.copy(ce))},reset:function(){I=!1,W=null,Z.set(-1,0,0,0)}}}function t(){let I=!1,ce=!1,W=null,Z=null,oe=null;return{setReversed:function(he){ce=he},setTest:function(he){he?ve(a.DEPTH_TEST):de(a.DEPTH_TEST)},setMask:function(he){W!==he&&!I&&(a.depthMask(he),W=he)},setFunc:function(he){if(ce&&(he=ym[he]),Z!==he){switch(he){case sr:a.depthFunc(a.NEVER);break;case ar:a.depthFunc(a.ALWAYS);break;case rr:a.depthFunc(a.LESS);break;case Ai:a.depthFunc(a.LEQUAL);break;case or:a.depthFunc(a.EQUAL);break;case lr:a.depthFunc(a.GEQUAL);break;case cr:a.depthFunc(a.GREATER);break;case hr:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Z=he}},setLocked:function(he){I=he},setClear:function(he){oe!==he&&(a.clearDepth(he),oe=he)},reset:function(){I=!1,W=null,Z=null,oe=null}}}function n(){let I=!1,ce=null,W=null,Z=null,oe=null,he=null,$e=null,vt=null,Ot=null;return{setTest:function(Ke){I||(Ke?ve(a.STENCIL_TEST):de(a.STENCIL_TEST))},setMask:function(Ke){ce!==Ke&&!I&&(a.stencilMask(Ke),ce=Ke)},setFunc:function(Ke,kt,un){(W!==Ke||Z!==kt||oe!==un)&&(a.stencilFunc(Ke,kt,un),W=Ke,Z=kt,oe=un)},setOp:function(Ke,kt,un){(he!==Ke||$e!==kt||vt!==un)&&(a.stencilOp(Ke,kt,un),he=Ke,$e=kt,vt=un)},setLocked:function(Ke){I=Ke},setClear:function(Ke){Ot!==Ke&&(a.clearStencil(Ke),Ot=Ke)},reset:function(){I=!1,ce=null,W=null,Z=null,oe=null,he=null,$e=null,vt=null,Ot=null}}}const s=new e,r=new t,i=new n,o=new WeakMap,c=new WeakMap;let h={},p={},u=new WeakMap,l=[],g=null,_=!1,f=null,d=null,m=null,x=null,M=null,E=null,R=null,A=new Se(0,0,0),w=0,L=!1,G=null,v=null,b=null,k=null,F=null;const N=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,O=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=O>=1):Y.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=O>=2);let V=null,re={};const $=a.getParameter(a.SCISSOR_BOX),Q=a.getParameter(a.VIEWPORT),De=new nt().fromArray($),Oe=new nt().fromArray(Q);function q(I,ce,W,Z){const oe=new Uint8Array(4),he=a.createTexture();a.bindTexture(I,he),a.texParameteri(I,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(I,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let $e=0;$e<W;$e++)I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY?a.texImage3D(ce,0,a.RGBA,1,1,Z,0,a.RGBA,a.UNSIGNED_BYTE,oe):a.texImage2D(ce+$e,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,oe);return he}const ee={};ee[a.TEXTURE_2D]=q(a.TEXTURE_2D,a.TEXTURE_2D,1),ee[a.TEXTURE_CUBE_MAP]=q(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[a.TEXTURE_2D_ARRAY]=q(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ee[a.TEXTURE_3D]=q(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),i.setClear(0),ve(a.DEPTH_TEST),r.setFunc(Ai),He(!1),Xe(wo),ve(a.CULL_FACE),P(In);function ve(I){h[I]!==!0&&(a.enable(I),h[I]=!0)}function de(I){h[I]!==!1&&(a.disable(I),h[I]=!1)}function Ne(I,ce){return p[I]!==ce?(a.bindFramebuffer(I,ce),p[I]=ce,I===a.DRAW_FRAMEBUFFER&&(p[a.FRAMEBUFFER]=ce),I===a.FRAMEBUFFER&&(p[a.DRAW_FRAMEBUFFER]=ce),!0):!1}function we(I,ce){let W=l,Z=!1;if(I){W=u.get(ce),W===void 0&&(W=[],u.set(ce,W));const oe=I.textures;if(W.length!==oe.length||W[0]!==a.COLOR_ATTACHMENT0){for(let he=0,$e=oe.length;he<$e;he++)W[he]=a.COLOR_ATTACHMENT0+he;W.length=oe.length,Z=!0}}else W[0]!==a.BACK&&(W[0]=a.BACK,Z=!0);Z&&a.drawBuffers(W)}function Ve(I){return g!==I?(a.useProgram(I),g=I,!0):!1}const tt={[qn]:a.FUNC_ADD,[Bc]:a.FUNC_SUBTRACT,[zc]:a.FUNC_REVERSE_SUBTRACT};tt[Hc]=a.MIN,tt[Gc]=a.MAX;const We={[Vc]:a.ZERO,[Wc]:a.ONE,[$c]:a.SRC_COLOR,[nr]:a.SRC_ALPHA,[Zc]:a.SRC_ALPHA_SATURATE,[Kc]:a.DST_COLOR,[qc]:a.DST_ALPHA,[Xc]:a.ONE_MINUS_SRC_COLOR,[ir]:a.ONE_MINUS_SRC_ALPHA,[jc]:a.ONE_MINUS_DST_COLOR,[Yc]:a.ONE_MINUS_DST_ALPHA,[Jc]:a.CONSTANT_COLOR,[Qc]:a.ONE_MINUS_CONSTANT_COLOR,[eh]:a.CONSTANT_ALPHA,[th]:a.ONE_MINUS_CONSTANT_ALPHA};function P(I,ce,W,Z,oe,he,$e,vt,Ot,Ke){if(I===In){_===!0&&(de(a.BLEND),_=!1);return}if(_===!1&&(ve(a.BLEND),_=!0),I!==Fc){if(I!==f||Ke!==L){if((d!==qn||M!==qn)&&(a.blendEquation(a.FUNC_ADD),d=qn,M=qn),Ke)switch(I){case Ei:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ao:a.blendFunc(a.ONE,a.ONE);break;case Ro:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Co:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ei:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ao:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case Ro:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Co:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,x=null,E=null,R=null,A.set(0,0,0),w=0,f=I,L=Ke}return}oe=oe||ce,he=he||W,$e=$e||Z,(ce!==d||oe!==M)&&(a.blendEquationSeparate(tt[ce],tt[oe]),d=ce,M=oe),(W!==m||Z!==x||he!==E||$e!==R)&&(a.blendFuncSeparate(We[W],We[Z],We[he],We[$e]),m=W,x=Z,E=he,R=$e),(vt.equals(A)===!1||Ot!==w)&&(a.blendColor(vt.r,vt.g,vt.b,Ot),A.copy(vt),w=Ot),f=I,L=!1}function zt(I,ce){I.side===Yt?de(a.CULL_FACE):ve(a.CULL_FACE);let W=I.side===Ut;ce&&(W=!W),He(W),I.blending===Ei&&I.transparent===!1?P(In):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const Z=I.stencilWrite;i.setTest(Z),Z&&(i.setMask(I.stencilWriteMask),i.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),i.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ve(a.SAMPLE_ALPHA_TO_COVERAGE):de(a.SAMPLE_ALPHA_TO_COVERAGE)}function He(I){G!==I&&(I?a.frontFace(a.CW):a.frontFace(a.CCW),G=I)}function Xe(I){I!==Uc?(ve(a.CULL_FACE),I!==v&&(I===wo?a.cullFace(a.BACK):I===Oc?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):de(a.CULL_FACE),v=I}function Re(I){I!==b&&(X&&a.lineWidth(I),b=I)}function rt(I,ce,W){I?(ve(a.POLYGON_OFFSET_FILL),(k!==ce||F!==W)&&(a.polygonOffset(ce,W),k=ce,F=W)):de(a.POLYGON_OFFSET_FILL)}function Ie(I){I?ve(a.SCISSOR_TEST):de(a.SCISSOR_TEST)}function T(I){I===void 0&&(I=a.TEXTURE0+N-1),V!==I&&(a.activeTexture(I),V=I)}function S(I,ce,W){W===void 0&&(V===null?W=a.TEXTURE0+N-1:W=V);let Z=re[W];Z===void 0&&(Z={type:void 0,texture:void 0},re[W]=Z),(Z.type!==I||Z.texture!==ce)&&(V!==W&&(a.activeTexture(W),V=W),a.bindTexture(I,ce||ee[I]),Z.type=I,Z.texture=ce)}function B(){const I=re[V];I!==void 0&&I.type!==void 0&&(a.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{a.compressedTexImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{a.compressedTexImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{a.texSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{a.texSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qe(){try{a.texStorage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{a.texStorage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{a.texImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{a.texImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(I){De.equals(I)===!1&&(a.scissor(I.x,I.y,I.z,I.w),De.copy(I))}function pe(I){Oe.equals(I)===!1&&(a.viewport(I.x,I.y,I.z,I.w),Oe.copy(I))}function Ge(I,ce){let W=c.get(ce);W===void 0&&(W=new WeakMap,c.set(ce,W));let Z=W.get(I);Z===void 0&&(Z=a.getUniformBlockIndex(ce,I.name),W.set(I,Z))}function Ue(I,ce){const Z=c.get(ce).get(I);o.get(ce)!==Z&&(a.uniformBlockBinding(ce,Z,I.__bindingPointIndex),o.set(ce,Z))}function st(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},V=null,re={},p={},u=new WeakMap,l=[],g=null,_=!1,f=null,d=null,m=null,x=null,M=null,E=null,R=null,A=new Se(0,0,0),w=0,L=!1,G=null,v=null,b=null,k=null,F=null,De.set(0,0,a.canvas.width,a.canvas.height),Oe.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),i.reset()}return{buffers:{color:s,depth:r,stencil:i},enable:ve,disable:de,bindFramebuffer:Ne,drawBuffers:we,useProgram:Ve,setBlending:P,setMaterial:zt,setFlipSided:He,setCullFace:Xe,setLineWidth:Re,setPolygonOffset:rt,setScissorTest:Ie,activeTexture:T,bindTexture:S,unbindTexture:B,compressedTexImage2D:j,compressedTexImage3D:J,texImage2D:fe,texImage3D:Ce,updateUBOMapping:Ge,uniformBlockBinding:Ue,texStorage2D:qe,texStorage3D:te,texSubImage2D:K,texSubImage3D:be,compressedTexSubImage2D:ae,compressedTexSubImage3D:ue,scissor:Pe,viewport:pe,reset:st}}function bl(a,e,t,n){const s=Tm(n);switch(t){case $l:return a*e;case ql:return a*e;case Yl:return a*e*2;case jr:return a*e/s.components*s.byteLength;case Zr:return a*e/s.components*s.byteLength;case Kl:return a*e*2/s.components*s.byteLength;case Jr:return a*e*2/s.components*s.byteLength;case Xl:return a*e*3/s.components*s.byteLength;case rn:return a*e*4/s.components*s.byteLength;case Qr:return a*e*4/s.components*s.byteLength;case Os:case ks:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Fs:case Bs:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case mr:case vr:return Math.max(a,16)*Math.max(e,8)/4;case pr:case gr:return Math.max(a,8)*Math.max(e,8)/2;case _r:case br:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case xr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Sr:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Mr:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case yr:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Er:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Tr:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case wr:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Ar:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Rr:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Cr:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Pr:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Lr:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Ir:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Dr:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Nr:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case zs:case Ur:case Or:return Math.ceil(a/4)*Math.ceil(e/4)*16;case jl:case kr:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Fr:case Br:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tm(a){switch(a){case Sn:case Gl:return{byteLength:1,components:1};case Qi:case Vl:case ts:return{byteLength:2,components:1};case Yr:case Kr:return{byteLength:2,components:4};case Qn:case qr:case cn:return{byteLength:4,components:1};case Wl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}function wm(a,e,t,n,s,r,i){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ze,p=new WeakMap;let u;const l=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,S){return g?new OffscreenCanvas(T,S):Ys("canvas")}function f(T,S,B){let j=1;const J=Ie(T);if((J.width>B||J.height>B)&&(j=B/Math.max(J.width,J.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(j*J.width),be=Math.floor(j*J.height);u===void 0&&(u=_(K,be));const ae=S?_(K,be):u;return ae.width=K,ae.height=be,ae.getContext("2d").drawImage(T,0,0,K,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+be+")."),ae}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function d(T){return T.generateMipmaps&&T.minFilter!==Bt&&T.minFilter!==sn}function m(T){a.generateMipmap(T)}function x(T,S,B,j,J=!1){if(T!==null){if(a[T]!==void 0)return a[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=S;if(S===a.RED&&(B===a.FLOAT&&(K=a.R32F),B===a.HALF_FLOAT&&(K=a.R16F),B===a.UNSIGNED_BYTE&&(K=a.R8)),S===a.RED_INTEGER&&(B===a.UNSIGNED_BYTE&&(K=a.R8UI),B===a.UNSIGNED_SHORT&&(K=a.R16UI),B===a.UNSIGNED_INT&&(K=a.R32UI),B===a.BYTE&&(K=a.R8I),B===a.SHORT&&(K=a.R16I),B===a.INT&&(K=a.R32I)),S===a.RG&&(B===a.FLOAT&&(K=a.RG32F),B===a.HALF_FLOAT&&(K=a.RG16F),B===a.UNSIGNED_BYTE&&(K=a.RG8)),S===a.RG_INTEGER&&(B===a.UNSIGNED_BYTE&&(K=a.RG8UI),B===a.UNSIGNED_SHORT&&(K=a.RG16UI),B===a.UNSIGNED_INT&&(K=a.RG32UI),B===a.BYTE&&(K=a.RG8I),B===a.SHORT&&(K=a.RG16I),B===a.INT&&(K=a.RG32I)),S===a.RGB_INTEGER&&(B===a.UNSIGNED_BYTE&&(K=a.RGB8UI),B===a.UNSIGNED_SHORT&&(K=a.RGB16UI),B===a.UNSIGNED_INT&&(K=a.RGB32UI),B===a.BYTE&&(K=a.RGB8I),B===a.SHORT&&(K=a.RGB16I),B===a.INT&&(K=a.RGB32I)),S===a.RGBA_INTEGER&&(B===a.UNSIGNED_BYTE&&(K=a.RGBA8UI),B===a.UNSIGNED_SHORT&&(K=a.RGBA16UI),B===a.UNSIGNED_INT&&(K=a.RGBA32UI),B===a.BYTE&&(K=a.RGBA8I),B===a.SHORT&&(K=a.RGBA16I),B===a.INT&&(K=a.RGBA32I)),S===a.RGB&&B===a.UNSIGNED_INT_5_9_9_9_REV&&(K=a.RGB9_E5),S===a.RGBA){const be=J?Ws:Je.getTransfer(j);B===a.FLOAT&&(K=a.RGBA32F),B===a.HALF_FLOAT&&(K=a.RGBA16F),B===a.UNSIGNED_BYTE&&(K=be===lt?a.SRGB8_ALPHA8:a.RGBA8),B===a.UNSIGNED_SHORT_4_4_4_4&&(K=a.RGBA4),B===a.UNSIGNED_SHORT_5_5_5_1&&(K=a.RGB5_A1)}return(K===a.R16F||K===a.R32F||K===a.RG16F||K===a.RG32F||K===a.RGBA16F||K===a.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(T,S){let B;return T?S===null||S===Qn||S===Pi?B=a.DEPTH24_STENCIL8:S===cn?B=a.DEPTH32F_STENCIL8:S===Qi&&(B=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qn||S===Pi?B=a.DEPTH_COMPONENT24:S===cn?B=a.DEPTH_COMPONENT32F:S===Qi&&(B=a.DEPTH_COMPONENT16),B}function E(T,S){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==Bt&&T.minFilter!==sn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){const S=T.target;S.removeEventListener("dispose",R),w(S),S.isVideoTexture&&p.delete(S)}function A(T){const S=T.target;S.removeEventListener("dispose",A),G(S)}function w(T){const S=n.get(T);if(S.__webglInit===void 0)return;const B=T.source,j=l.get(B);if(j){const J=j[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(T),Object.keys(j).length===0&&l.delete(B)}n.remove(T)}function L(T){const S=n.get(T);a.deleteTexture(S.__webglTexture);const B=T.source,j=l.get(B);delete j[S.__cacheKey],i.memory.textures--}function G(T){const S=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let J=0;J<S.__webglFramebuffer[j].length;J++)a.deleteFramebuffer(S.__webglFramebuffer[j][J]);else a.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)a.deleteFramebuffer(S.__webglFramebuffer[j]);else a.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&a.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&a.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&a.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&a.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=T.textures;for(let j=0,J=B.length;j<J;j++){const K=n.get(B[j]);K.__webglTexture&&(a.deleteTexture(K.__webglTexture),i.memory.textures--),n.remove(B[j])}n.remove(T)}let v=0;function b(){v=0}function k(){const T=v;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),v+=1,T}function F(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function N(T,S){const B=n.get(T);if(T.isVideoTexture&&Re(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(B,T,S);return}}t.bindTexture(a.TEXTURE_2D,B.__webglTexture,a.TEXTURE0+S)}function X(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Oe(B,T,S);return}t.bindTexture(a.TEXTURE_2D_ARRAY,B.__webglTexture,a.TEXTURE0+S)}function O(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Oe(B,T,S);return}t.bindTexture(a.TEXTURE_3D,B.__webglTexture,a.TEXTURE0+S)}function Y(T,S){const B=n.get(T);if(T.version>0&&B.__version!==T.version){q(B,T,S);return}t.bindTexture(a.TEXTURE_CUBE_MAP,B.__webglTexture,a.TEXTURE0+S)}const V={[Vs]:a.REPEAT,[jn]:a.CLAMP_TO_EDGE,[fr]:a.MIRRORED_REPEAT},re={[Bt]:a.NEAREST,[dh]:a.NEAREST_MIPMAP_NEAREST,[rs]:a.NEAREST_MIPMAP_LINEAR,[sn]:a.LINEAR,[pa]:a.LINEAR_MIPMAP_NEAREST,[Zn]:a.LINEAR_MIPMAP_LINEAR},$={[mh]:a.NEVER,[Sh]:a.ALWAYS,[gh]:a.LESS,[Jl]:a.LEQUAL,[vh]:a.EQUAL,[xh]:a.GEQUAL,[_h]:a.GREATER,[bh]:a.NOTEQUAL};function Q(T,S){if(S.type===cn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===sn||S.magFilter===pa||S.magFilter===rs||S.magFilter===Zn||S.minFilter===sn||S.minFilter===pa||S.minFilter===rs||S.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(T,a.TEXTURE_WRAP_S,V[S.wrapS]),a.texParameteri(T,a.TEXTURE_WRAP_T,V[S.wrapT]),(T===a.TEXTURE_3D||T===a.TEXTURE_2D_ARRAY)&&a.texParameteri(T,a.TEXTURE_WRAP_R,V[S.wrapR]),a.texParameteri(T,a.TEXTURE_MAG_FILTER,re[S.magFilter]),a.texParameteri(T,a.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(a.texParameteri(T,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(T,a.TEXTURE_COMPARE_FUNC,$[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bt||S.minFilter!==rs&&S.minFilter!==Zn||S.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");a.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function De(T,S){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));const j=S.source;let J=l.get(j);J===void 0&&(J={},l.set(j,J));const K=F(S);if(K!==T.__cacheKey){J[K]===void 0&&(J[K]={texture:a.createTexture(),usedTimes:0},i.memory.textures++,B=!0),J[K].usedTimes++;const be=J[T.__cacheKey];be!==void 0&&(J[T.__cacheKey].usedTimes--,be.usedTimes===0&&L(S)),T.__cacheKey=K,T.__webglTexture=J[K].texture}return B}function Oe(T,S,B){let j=a.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=a.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=a.TEXTURE_3D);const J=De(T,S),K=S.source;t.bindTexture(j,T.__webglTexture,a.TEXTURE0+B);const be=n.get(K);if(K.version!==be.__version||J===!0){t.activeTexture(a.TEXTURE0+B);const ae=Je.getPrimaries(Je.workingColorSpace),ue=S.colorSpace===Ln?null:Je.getPrimaries(S.colorSpace),qe=S.colorSpace===Ln||ae===ue?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let te=f(S.image,!1,s.maxTextureSize);te=rt(S,te);const fe=r.convert(S.format,S.colorSpace),Ce=r.convert(S.type);let Pe=x(S.internalFormat,fe,Ce,S.colorSpace,S.isVideoTexture);Q(j,S);let pe;const Ge=S.mipmaps,Ue=S.isVideoTexture!==!0,st=be.__version===void 0||J===!0,I=K.dataReady,ce=E(S,te);if(S.isDepthTexture)Pe=M(S.format===Li,S.type),st&&(Ue?t.texStorage2D(a.TEXTURE_2D,1,Pe,te.width,te.height):t.texImage2D(a.TEXTURE_2D,0,Pe,te.width,te.height,0,fe,Ce,null));else if(S.isDataTexture)if(Ge.length>0){Ue&&st&&t.texStorage2D(a.TEXTURE_2D,ce,Pe,Ge[0].width,Ge[0].height);for(let W=0,Z=Ge.length;W<Z;W++)pe=Ge[W],Ue?I&&t.texSubImage2D(a.TEXTURE_2D,W,0,0,pe.width,pe.height,fe,Ce,pe.data):t.texImage2D(a.TEXTURE_2D,W,Pe,pe.width,pe.height,0,fe,Ce,pe.data);S.generateMipmaps=!1}else Ue?(st&&t.texStorage2D(a.TEXTURE_2D,ce,Pe,te.width,te.height),I&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,te.width,te.height,fe,Ce,te.data)):t.texImage2D(a.TEXTURE_2D,0,Pe,te.width,te.height,0,fe,Ce,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ue&&st&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ce,Pe,Ge[0].width,Ge[0].height,te.depth);for(let W=0,Z=Ge.length;W<Z;W++)if(pe=Ge[W],S.format!==rn)if(fe!==null)if(Ue){if(I)if(S.layerUpdates.size>0){const oe=bl(pe.width,pe.height,S.format,S.type);for(const he of S.layerUpdates){const $e=pe.data.subarray(he*oe/pe.data.BYTES_PER_ELEMENT,(he+1)*oe/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,W,0,0,he,pe.width,pe.height,1,fe,$e,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,W,0,0,0,pe.width,pe.height,te.depth,fe,pe.data,0,0)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,W,Pe,pe.width,pe.height,te.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,W,0,0,0,pe.width,pe.height,te.depth,fe,Ce,pe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,W,Pe,pe.width,pe.height,te.depth,0,fe,Ce,pe.data)}else{Ue&&st&&t.texStorage2D(a.TEXTURE_2D,ce,Pe,Ge[0].width,Ge[0].height);for(let W=0,Z=Ge.length;W<Z;W++)pe=Ge[W],S.format!==rn?fe!==null?Ue?I&&t.compressedTexSubImage2D(a.TEXTURE_2D,W,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(a.TEXTURE_2D,W,Pe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&t.texSubImage2D(a.TEXTURE_2D,W,0,0,pe.width,pe.height,fe,Ce,pe.data):t.texImage2D(a.TEXTURE_2D,W,Pe,pe.width,pe.height,0,fe,Ce,pe.data)}else if(S.isDataArrayTexture)if(Ue){if(st&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ce,Pe,te.width,te.height,te.depth),I)if(S.layerUpdates.size>0){const W=bl(te.width,te.height,S.format,S.type);for(const Z of S.layerUpdates){const oe=te.data.subarray(Z*W/te.data.BYTES_PER_ELEMENT,(Z+1)*W/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,fe,Ce,oe)}S.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,Ce,te.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Pe,te.width,te.height,te.depth,0,fe,Ce,te.data);else if(S.isData3DTexture)Ue?(st&&t.texStorage3D(a.TEXTURE_3D,ce,Pe,te.width,te.height,te.depth),I&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,Ce,te.data)):t.texImage3D(a.TEXTURE_3D,0,Pe,te.width,te.height,te.depth,0,fe,Ce,te.data);else if(S.isFramebufferTexture){if(st)if(Ue)t.texStorage2D(a.TEXTURE_2D,ce,Pe,te.width,te.height);else{let W=te.width,Z=te.height;for(let oe=0;oe<ce;oe++)t.texImage2D(a.TEXTURE_2D,oe,Pe,W,Z,0,fe,Ce,null),W>>=1,Z>>=1}}else if(Ge.length>0){if(Ue&&st){const W=Ie(Ge[0]);t.texStorage2D(a.TEXTURE_2D,ce,Pe,W.width,W.height)}for(let W=0,Z=Ge.length;W<Z;W++)pe=Ge[W],Ue?I&&t.texSubImage2D(a.TEXTURE_2D,W,0,0,fe,Ce,pe):t.texImage2D(a.TEXTURE_2D,W,Pe,fe,Ce,pe);S.generateMipmaps=!1}else if(Ue){if(st){const W=Ie(te);t.texStorage2D(a.TEXTURE_2D,ce,Pe,W.width,W.height)}I&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,fe,Ce,te)}else t.texImage2D(a.TEXTURE_2D,0,Pe,fe,Ce,te);d(S)&&m(j),be.__version=K.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function q(T,S,B){if(S.image.length!==6)return;const j=De(T,S),J=S.source;t.bindTexture(a.TEXTURE_CUBE_MAP,T.__webglTexture,a.TEXTURE0+B);const K=n.get(J);if(J.version!==K.__version||j===!0){t.activeTexture(a.TEXTURE0+B);const be=Je.getPrimaries(Je.workingColorSpace),ae=S.colorSpace===Ln?null:Je.getPrimaries(S.colorSpace),ue=S.colorSpace===Ln||be===ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const qe=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!qe&&!te?fe[Z]=f(S.image[Z],!0,s.maxCubemapSize):fe[Z]=te?S.image[Z].image:S.image[Z],fe[Z]=rt(S,fe[Z]);const Ce=fe[0],Pe=r.convert(S.format,S.colorSpace),pe=r.convert(S.type),Ge=x(S.internalFormat,Pe,pe,S.colorSpace),Ue=S.isVideoTexture!==!0,st=K.__version===void 0||j===!0,I=J.dataReady;let ce=E(S,Ce);Q(a.TEXTURE_CUBE_MAP,S);let W;if(qe){Ue&&st&&t.texStorage2D(a.TEXTURE_CUBE_MAP,ce,Ge,Ce.width,Ce.height);for(let Z=0;Z<6;Z++){W=fe[Z].mipmaps;for(let oe=0;oe<W.length;oe++){const he=W[oe];S.format!==rn?Pe!==null?Ue?I&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,he.width,he.height,Pe,he.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,he.width,he.height,Pe,pe,he.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Ge,he.width,he.height,0,Pe,pe,he.data)}}}else{if(W=S.mipmaps,Ue&&st){W.length>0&&ce++;const Z=Ie(fe[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,ce,Ge,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){Ue?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,Pe,pe,fe[Z].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,fe[Z].width,fe[Z].height,0,Pe,pe,fe[Z].data);for(let oe=0;oe<W.length;oe++){const $e=W[oe].image[Z].image;Ue?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,$e.width,$e.height,Pe,pe,$e.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Ge,$e.width,$e.height,0,Pe,pe,$e.data)}}else{Ue?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,pe,fe[Z]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,Pe,pe,fe[Z]);for(let oe=0;oe<W.length;oe++){const he=W[oe];Ue?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,Pe,pe,he.image[Z]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Ge,Pe,pe,he.image[Z])}}}d(S)&&m(a.TEXTURE_CUBE_MAP),K.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ee(T,S,B,j,J,K){const be=r.convert(B.format,B.colorSpace),ae=r.convert(B.type),ue=x(B.internalFormat,be,ae,B.colorSpace);if(!n.get(S).__hasExternalTextures){const te=Math.max(1,S.width>>K),fe=Math.max(1,S.height>>K);J===a.TEXTURE_3D||J===a.TEXTURE_2D_ARRAY?t.texImage3D(J,K,ue,te,fe,S.depth,0,be,ae,null):t.texImage2D(J,K,ue,te,fe,0,be,ae,null)}t.bindFramebuffer(a.FRAMEBUFFER,T),Xe(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,j,J,n.get(B).__webglTexture,0,He(S)):(J===a.TEXTURE_2D||J>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,j,J,n.get(B).__webglTexture,K),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ve(T,S,B){if(a.bindRenderbuffer(a.RENDERBUFFER,T),S.depthBuffer){const j=S.depthTexture,J=j&&j.isDepthTexture?j.type:null,K=M(S.stencilBuffer,J),be=S.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ae=He(S);Xe(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ae,K,S.width,S.height):B?a.renderbufferStorageMultisample(a.RENDERBUFFER,ae,K,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,K,S.width,S.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,T)}else{const j=S.textures;for(let J=0;J<j.length;J++){const K=j[J],be=r.convert(K.format,K.colorSpace),ae=r.convert(K.type),ue=x(K.internalFormat,be,ae,K.colorSpace),qe=He(S);B&&Xe(S)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,qe,ue,S.width,S.height):Xe(S)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,qe,ue,S.width,S.height):a.renderbufferStorage(a.RENDERBUFFER,ue,S.width,S.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function de(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),N(S.depthTexture,0);const j=n.get(S.depthTexture).__webglTexture,J=He(S);if(S.depthTexture.format===Ti)Xe(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,j,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,j,0);else if(S.depthTexture.format===Li)Xe(S)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,j,0,J):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ne(T){const S=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",J)};j.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=j}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");de(S.__webglFramebuffer,T)}else if(B){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=a.createRenderbuffer(),ve(S.__webglDepthbuffer[j],T,!1);else{const J=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[j];a.bindRenderbuffer(a.RENDERBUFFER,K),a.framebufferRenderbuffer(a.FRAMEBUFFER,J,a.RENDERBUFFER,K)}}else if(t.bindFramebuffer(a.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=a.createRenderbuffer(),ve(S.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,J),a.framebufferRenderbuffer(a.FRAMEBUFFER,j,a.RENDERBUFFER,J)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function we(T,S,B){const j=n.get(T);S!==void 0&&ee(j.__webglFramebuffer,T,T.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),B!==void 0&&Ne(T)}function Ve(T){const S=T.texture,B=n.get(T),j=n.get(S);T.addEventListener("dispose",A);const J=T.textures,K=T.isWebGLCubeRenderTarget===!0,be=J.length>1;if(be||(j.__webglTexture===void 0&&(j.__webglTexture=a.createTexture()),j.__version=S.version,i.memory.textures++),K){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let ue=0;ue<S.mipmaps.length;ue++)B.__webglFramebuffer[ae][ue]=a.createFramebuffer()}else B.__webglFramebuffer[ae]=a.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)B.__webglFramebuffer[ae]=a.createFramebuffer()}else B.__webglFramebuffer=a.createFramebuffer();if(be)for(let ae=0,ue=J.length;ae<ue;ae++){const qe=n.get(J[ae]);qe.__webglTexture===void 0&&(qe.__webglTexture=a.createTexture(),i.memory.textures++)}if(T.samples>0&&Xe(T)===!1){B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){const ue=J[ae];B.__webglColorRenderbuffer[ae]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const qe=r.convert(ue.format,ue.colorSpace),te=r.convert(ue.type),fe=x(ue.internalFormat,qe,te,ue.colorSpace,T.isXRRenderTarget===!0),Ce=He(T);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ce,fe,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ae,a.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}a.bindRenderbuffer(a.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),ve(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(K){t.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture),Q(a.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ee(B.__webglFramebuffer[ae][ue],T,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ue);else ee(B.__webglFramebuffer[ae],T,S,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);d(S)&&m(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ae=0,ue=J.length;ae<ue;ae++){const qe=J[ae],te=n.get(qe);t.bindTexture(a.TEXTURE_2D,te.__webglTexture),Q(a.TEXTURE_2D,qe),ee(B.__webglFramebuffer,T,qe,a.COLOR_ATTACHMENT0+ae,a.TEXTURE_2D,0),d(qe)&&m(a.TEXTURE_2D)}t.unbindTexture()}else{let ae=a.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),Q(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ee(B.__webglFramebuffer[ue],T,S,a.COLOR_ATTACHMENT0,ae,ue);else ee(B.__webglFramebuffer,T,S,a.COLOR_ATTACHMENT0,ae,0);d(S)&&m(ae),t.unbindTexture()}T.depthBuffer&&Ne(T)}function tt(T){const S=T.textures;for(let B=0,j=S.length;B<j;B++){const J=S[B];if(d(J)){const K=T.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,be=n.get(J).__webglTexture;t.bindTexture(K,be),m(K),t.unbindTexture()}}}const We=[],P=[];function zt(T){if(T.samples>0){if(Xe(T)===!1){const S=T.textures,B=T.width,j=T.height;let J=a.COLOR_BUFFER_BIT;const K=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,be=n.get(T),ae=S.length>1;if(ae)for(let ue=0;ue<S.length;ue++)t.bindFramebuffer(a.FRAMEBUFFER,be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=a.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=a.STENCIL_BUFFER_BIT)),ae){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,be.__webglColorRenderbuffer[ue]);const qe=n.get(S[ue]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,qe,0)}a.blitFramebuffer(0,0,B,j,0,0,B,j,J,a.NEAREST),c===!0&&(We.length=0,P.length=0,We.push(a.COLOR_ATTACHMENT0+ue),T.depthBuffer&&T.resolveDepthBuffer===!1&&(We.push(K),P.push(K),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,P)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ae)for(let ue=0;ue<S.length;ue++){t.bindFramebuffer(a.FRAMEBUFFER,be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.RENDERBUFFER,be.__webglColorRenderbuffer[ue]);const qe=n.get(S[ue]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+ue,a.TEXTURE_2D,qe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[S])}}}function He(T){return Math.min(s.maxSamples,T.samples)}function Xe(T){const S=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Re(T){const S=i.render.frame;p.get(T)!==S&&(p.set(T,S),T.update())}function rt(T,S){const B=T.colorSpace,j=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Un&&B!==Ln&&(Je.getTransfer(B)===lt?(j!==rn||J!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=b,this.setTexture2D=N,this.setTexture2DArray=X,this.setTexture3D=O,this.setTextureCube=Y,this.rebindTextures=we,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Xe}function Am(a,e){function t(n,s=Ln){let r;const i=Je.getTransfer(s);if(n===Sn)return a.UNSIGNED_BYTE;if(n===Yr)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Kr)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Gl)return a.BYTE;if(n===Vl)return a.SHORT;if(n===Qi)return a.UNSIGNED_SHORT;if(n===qr)return a.INT;if(n===Qn)return a.UNSIGNED_INT;if(n===cn)return a.FLOAT;if(n===ts)return a.HALF_FLOAT;if(n===$l)return a.ALPHA;if(n===Xl)return a.RGB;if(n===rn)return a.RGBA;if(n===ql)return a.LUMINANCE;if(n===Yl)return a.LUMINANCE_ALPHA;if(n===Ti)return a.DEPTH_COMPONENT;if(n===Li)return a.DEPTH_STENCIL;if(n===jr)return a.RED;if(n===Zr)return a.RED_INTEGER;if(n===Kl)return a.RG;if(n===Jr)return a.RG_INTEGER;if(n===Qr)return a.RGBA_INTEGER;if(n===Os||n===ks||n===Fs||n===Bs)if(i===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pr||n===mr||n===gr||n===vr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_r||n===br||n===xr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_r||n===br)return i===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xr)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sr||n===Mr||n===yr||n===Er||n===Tr||n===wr||n===Ar||n===Rr||n===Cr||n===Pr||n===Lr||n===Ir||n===Dr||n===Nr)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sr)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mr)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yr)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Er)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tr)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wr)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ar)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rr)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cr)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pr)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lr)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ir)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dr)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nr)return i===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zs||n===Ur||n===Or)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===zs)return i===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ur)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Or)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===kr||n===Fr||n===Br)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Br)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}class Rm extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hn extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cm={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,i=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){i=!0;for(const f of e.hand.values()){const d=t.getJointPose(f,n),m=this._getHandJoint(h,f);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const p=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],l=p.position.distanceTo(u.position),g=.02,_=.005;h.inputState.pinching&&l>g+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&l<=g-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=i!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lm=`
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

}`;class Im{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Lt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mn({vertexShader:Pm,fragmentShader:Lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new Pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dm extends Oi{constructor(e,t){super();const n=this;let s=null,r=1,i=null,o="local-floor",c=1,h=null,p=null,u=null,l=null,g=null,_=null;const f=new Im,d=t.getContextAttributes();let m=null,x=null;const M=[],E=[],R=new ze;let A=null;const w=new Nt;w.layers.enable(1),w.viewport=new nt;const L=new Nt;L.layers.enable(2),L.viewport=new nt;const G=[w,L],v=new Rm;v.layers.enable(1),v.layers.enable(2);let b=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=M[q];return ee===void 0&&(ee=new Wa,M[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=M[q];return ee===void 0&&(ee=new Wa,M[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=M[q];return ee===void 0&&(ee=new Wa,M[q]=ee),ee.getHandSpace()};function F(q){const ee=E.indexOf(q.inputSource);if(ee===-1)return;const ve=M[ee];ve!==void 0&&(ve.update(q.inputSource,q.frame,h||i),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",X);for(let q=0;q<M.length;q++){const ee=E[q];ee!==null&&(E[q]=null,M[q].disconnect(ee))}b=null,k=null,f.reset(),e.setRenderTarget(m),g=null,l=null,u=null,s=null,x=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||i},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return l!==null?l:g},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",N),s.addEventListener("inputsourceschange",X),d.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){const ee={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new ei(g.framebufferWidth,g.framebufferHeight,{format:rn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let ee=null,ve=null,de=null;d.depth&&(de=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=d.stencil?Li:Ti,ve=d.stencil?Pi:Qn);const Ne={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(s,t),l=u.createProjectionLayer(Ne),s.updateRenderState({layers:[l]}),e.setPixelRatio(1),e.setSize(l.textureWidth,l.textureHeight,!1),x=new ei(l.textureWidth,l.textureHeight,{format:rn,type:Sn,depthTexture:new dc(l.textureWidth,l.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),h=null,i=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function X(q){for(let ee=0;ee<q.removed.length;ee++){const ve=q.removed[ee],de=E.indexOf(ve);de>=0&&(E[de]=null,M[de].disconnect(ve))}for(let ee=0;ee<q.added.length;ee++){const ve=q.added[ee];let de=E.indexOf(ve);if(de===-1){for(let we=0;we<M.length;we++)if(we>=E.length){E.push(ve),de=we;break}else if(E[we]===null){E[we]=ve,de=we;break}if(de===-1)break}const Ne=M[de];Ne&&Ne.connect(ve)}}const O=new C,Y=new C;function V(q,ee,ve){O.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(ve.matrixWorld);const de=O.distanceTo(Y),Ne=ee.projectionMatrix.elements,we=ve.projectionMatrix.elements,Ve=Ne[14]/(Ne[10]-1),tt=Ne[14]/(Ne[10]+1),We=(Ne[9]+1)/Ne[5],P=(Ne[9]-1)/Ne[5],zt=(Ne[8]-1)/Ne[0],He=(we[8]+1)/we[0],Xe=Ve*zt,Re=Ve*He,rt=de/(-zt+He),Ie=rt*-zt;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(rt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ne[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const T=Ve+rt,S=tt+rt,B=Xe-Ie,j=Re+(de-Ie),J=We*tt/S*T,K=P*tt/S*T;q.projectionMatrix.makePerspective(B,j,J,K,T,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function re(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ee=q.near,ve=q.far;f.texture!==null&&(f.depthNear>0&&(ee=f.depthNear),f.depthFar>0&&(ve=f.depthFar)),v.near=L.near=w.near=ee,v.far=L.far=w.far=ve,(b!==v.near||k!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,k=v.far);const de=q.parent,Ne=v.cameras;re(v,de);for(let we=0;we<Ne.length;we++)re(Ne[we],de);Ne.length===2?V(v,w,L):v.projectionMatrix.copy(w.projectionMatrix),$(q,v,de)};function $(q,ee,ve){ve===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(l===null&&g===null))return c},this.setFoveation=function(q){c=q,l!==null&&(l.fixedFoveation=q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=q)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(v)};let Q=null;function De(q,ee){if(p=ee.getViewerPose(h||i),_=ee,p!==null){const ve=p.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let de=!1;ve.length!==v.cameras.length&&(v.cameras.length=0,de=!0);for(let we=0;we<ve.length;we++){const Ve=ve[we];let tt=null;if(g!==null)tt=g.getViewport(Ve);else{const P=u.getViewSubImage(l,Ve);tt=P.viewport,we===0&&(e.setRenderTargetTextures(x,P.colorTexture,l.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(x))}let We=G[we];We===void 0&&(We=new Nt,We.layers.enable(we),We.viewport=new nt,G[we]=We),We.matrix.fromArray(Ve.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ve.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(tt.x,tt.y,tt.width,tt.height),we===0&&(v.matrix.copy(We.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),de===!0&&v.cameras.push(We)}const Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const we=u.getDepthInformation(ve[0]);we&&we.isValid&&we.texture&&f.init(e,we,s.renderState)}}for(let ve=0;ve<M.length;ve++){const de=E[ve],Ne=M[ve];de!==null&&Ne!==void 0&&Ne.update(de,ee,h||i)}Q&&Q(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),_=null}const Oe=new cc;Oe.setAnimationLoop(De),this.setAnimationLoop=function(q){Q=q},this.dispose=function(){}}}const Vn=new dn,Nm=new et;function Um(a,e){function t(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,rc(a)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,x,M,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),u(d,m)):m.isMeshPhongMaterial?(r(d,m),p(d,m)):m.isMeshStandardMaterial?(r(d,m),l(d,m),m.isMeshPhysicalMaterial&&g(d,m,E)):m.isMeshMatcapMaterial?(r(d,m),_(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),f(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(i(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?c(d,m,x,M):m.isSpriteMaterial?h(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,t(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Ut&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,t(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Ut&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,t(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,t(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const x=e.get(m),M=x.envMap,E=x.envMapRotation;M&&(d.envMap.value=M,Vn.copy(E),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),d.envMapRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(Vn)),d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,d.aoMapTransform))}function i(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform))}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function c(d,m,x,M){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*x,d.scale.value=M*.5,m.map&&(d.map.value=m.map,t(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function p(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function l(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function g(d,m,x){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ut&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,m){m.matcap&&(d.matcap.value=m.matcap)}function f(d,m){const x=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Om(a,e,t,n){let s={},r={},i=[];const o=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const E=M.program;n.uniformBlockBinding(x,E)}function h(x,M){let E=s[x.id];E===void 0&&(_(x),E=p(x),s[x.id]=E,x.addEventListener("dispose",d));const R=M.program;n.updateUBOMapping(x,R);const A=e.render.frame;r[x.id]!==A&&(l(x),r[x.id]=A)}function p(x){const M=u();x.__bindingPointIndex=M;const E=a.createBuffer(),R=x.__size,A=x.usage;return a.bindBuffer(a.UNIFORM_BUFFER,E),a.bufferData(a.UNIFORM_BUFFER,R,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,M,E),E}function u(){for(let x=0;x<o;x++)if(i.indexOf(x)===-1)return i.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(x){const M=s[x.id],E=x.uniforms,R=x.__cache;a.bindBuffer(a.UNIFORM_BUFFER,M);for(let A=0,w=E.length;A<w;A++){const L=Array.isArray(E[A])?E[A]:[E[A]];for(let G=0,v=L.length;G<v;G++){const b=L[G];if(g(b,A,G,R)===!0){const k=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let N=0;for(let X=0;X<F.length;X++){const O=F[X],Y=f(O);typeof O=="number"||typeof O=="boolean"?(b.__data[0]=O,a.bufferSubData(a.UNIFORM_BUFFER,k+N,b.__data)):O.isMatrix3?(b.__data[0]=O.elements[0],b.__data[1]=O.elements[1],b.__data[2]=O.elements[2],b.__data[3]=0,b.__data[4]=O.elements[3],b.__data[5]=O.elements[4],b.__data[6]=O.elements[5],b.__data[7]=0,b.__data[8]=O.elements[6],b.__data[9]=O.elements[7],b.__data[10]=O.elements[8],b.__data[11]=0):(O.toArray(b.__data,N),N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,k,b.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function g(x,M,E,R){const A=x.value,w=M+"_"+E;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const L=R[w];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return R[w]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function _(x){const M=x.uniforms;let E=0;const R=16;for(let w=0,L=M.length;w<L;w++){const G=Array.isArray(M[w])?M[w]:[M[w]];for(let v=0,b=G.length;v<b;v++){const k=G[v],F=Array.isArray(k.value)?k.value:[k.value];for(let N=0,X=F.length;N<X;N++){const O=F[N],Y=f(O),V=E%R,re=V%Y.boundary,$=V+re;E+=re,$!==0&&R-$<Y.storage&&(E+=R-$),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=Y.storage}}}const A=E%R;return A>0&&(E+=R-A),x.__size=E,x.__cache={},this}function f(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function d(x){const M=x.target;M.removeEventListener("dispose",d);const E=i.indexOf(M.__bindingPointIndex);i.splice(E,1),a.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const x in s)a.deleteBuffer(s[x]);i=[],s={},r={}}return{bind:c,update:h,dispose:m}}class so{constructor(e={}){const{canvas:t=yh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:i=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let l;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");l=n.getContextAttributes().alpha}else l=i;const g=new Uint32Array(4),_=new Int32Array(4);let f=null,d=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=Dn,this.toneMappingExposure=1;const M=this;let E=!1,R=0,A=0,w=null,L=-1,G=null;const v=new nt,b=new nt;let k=null;const F=new Se(0);let N=0,X=t.width,O=t.height,Y=1,V=null,re=null;const $=new nt(0,0,X,O),Q=new nt(0,0,X,O);let De=!1;const Oe=new no;let q=!1,ee=!1;const ve=new et,de=new et,Ne=new C,we=new nt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function We(){return w===null?Y:1}let P=n;function zt(y,D){return t.getContext(y,D)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$r}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",he,!1),P===null){const D="webgl2";if(P=zt(D,y),P===null)throw zt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let He,Xe,Re,rt,Ie,T,S,B,j,J,K,be,ae,ue,qe,te,fe,Ce,Pe,pe,Ge,Ue,st,I;function ce(){He=new Gf(P),He.init(),Ue=new Am(P,He),Xe=new Of(P,He,e,Ue),Re=new Em(P),Xe.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),rt=new $f(P),Ie=new cm,T=new wm(P,He,Re,Ie,Xe,Ue,rt),S=new Ff(M),B=new Hf(M),j=new Zh(P),st=new Nf(P,j),J=new Vf(P,j,rt,st),K=new qf(P,J,j,rt),Pe=new Xf(P,Xe,T),te=new kf(Ie),be=new lm(M,S,B,He,Xe,st,te),ae=new Um(M,Ie),ue=new dm,qe=new vm(He),Ce=new Df(M,S,B,Re,K,l,c),fe=new Mm(M,K,Xe),I=new Om(P,rt,Xe,Re),pe=new Uf(P,He,rt),Ge=new Wf(P,He,rt),rt.programs=be.programs,M.capabilities=Xe,M.extensions=He,M.properties=Ie,M.renderLists=ue,M.shadowMap=fe,M.state=Re,M.info=rt}ce();const W=new Dm(M,P);this.xr=W,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=He.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=He.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(y){y!==void 0&&(Y=y,this.setSize(X,O,!1))},this.getSize=function(y){return y.set(X,O)},this.setSize=function(y,D,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,O=D,t.width=Math.floor(y*Y),t.height=Math.floor(D*Y),z===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(X*Y,O*Y).floor()},this.setDrawingBufferSize=function(y,D,z){X=y,O=D,Y=z,t.width=Math.floor(y*z),t.height=Math.floor(D*z),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(v)},this.getViewport=function(y){return y.copy($)},this.setViewport=function(y,D,z,H){y.isVector4?$.set(y.x,y.y,y.z,y.w):$.set(y,D,z,H),Re.viewport(v.copy($).multiplyScalar(Y).round())},this.getScissor=function(y){return y.copy(Q)},this.setScissor=function(y,D,z,H){y.isVector4?Q.set(y.x,y.y,y.z,y.w):Q.set(y,D,z,H),Re.scissor(b.copy(Q).multiplyScalar(Y).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(y){Re.setScissorTest(De=y)},this.setOpaqueSort=function(y){V=y},this.setTransparentSort=function(y){re=y},this.getClearColor=function(y){return y.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(y=!0,D=!0,z=!0){let H=0;if(y){let U=!1;if(w!==null){const ne=w.texture.format;U=ne===Qr||ne===Jr||ne===Zr}if(U){const ne=w.texture.type,le=ne===Sn||ne===Qn||ne===Qi||ne===Pi||ne===Yr||ne===Kr,ge=Ce.getClearColor(),_e=Ce.getClearAlpha(),Ee=ge.r,Ae=ge.g,xe=ge.b;le?(g[0]=Ee,g[1]=Ae,g[2]=xe,g[3]=_e,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ee,_[1]=Ae,_[2]=xe,_[3]=_e,P.clearBufferiv(P.COLOR,0,_))}else H|=P.COLOR_BUFFER_BIT}D&&(H|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ue.dispose(),qe.dispose(),Ie.dispose(),S.dispose(),B.dispose(),K.dispose(),st.dispose(),I.dispose(),be.dispose(),W.dispose(),W.removeEventListener("sessionstart",ho),W.removeEventListener("sessionend",uo),On.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=rt.autoReset,D=fe.enabled,z=fe.autoUpdate,H=fe.needsUpdate,U=fe.type;ce(),rt.autoReset=y,fe.enabled=D,fe.autoUpdate=z,fe.needsUpdate=H,fe.type=U}function he(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function $e(y){const D=y.target;D.removeEventListener("dispose",$e),vt(D)}function vt(y){Ot(y),Ie.remove(y)}function Ot(y){const D=Ie.get(y).programs;D!==void 0&&(D.forEach(function(z){be.releaseProgram(z)}),y.isShaderMaterial&&be.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,z,H,U,ne){D===null&&(D=Ve);const le=U.isMesh&&U.matrixWorld.determinant()<0,ge=_c(y,D,z,H,U);Re.setMaterial(H,le);let _e=z.index,Ee=1;if(H.wireframe===!0){if(_e=J.getWireframeAttribute(z),_e===void 0)return;Ee=2}const Ae=z.drawRange,xe=z.attributes.position;let Qe=Ae.start*Ee,ot=(Ae.start+Ae.count)*Ee;ne!==null&&(Qe=Math.max(Qe,ne.start*Ee),ot=Math.min(ot,(ne.start+ne.count)*Ee)),_e!==null?(Qe=Math.max(Qe,0),ot=Math.min(ot,_e.count)):xe!=null&&(Qe=Math.max(Qe,0),ot=Math.min(ot,xe.count));const ut=ot-Qe;if(ut<0||ut===1/0)return;st.setup(U,H,ge,z,_e);let Ht,je=pe;if(_e!==null&&(Ht=j.get(_e),je=Ge,je.setIndex(Ht)),U.isMesh)H.wireframe===!0?(Re.setLineWidth(H.wireframeLinewidth*We()),je.setMode(P.LINES)):je.setMode(P.TRIANGLES);else if(U.isLine){let Me=H.linewidth;Me===void 0&&(Me=1),Re.setLineWidth(Me*We()),U.isLineSegments?je.setMode(P.LINES):U.isLineLoop?je.setMode(P.LINE_LOOP):je.setMode(P.LINE_STRIP)}else U.isPoints?je.setMode(P.POINTS):U.isSprite&&je.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Me=U._multiDrawStarts,Tt=U._multiDrawCounts,Ze=U._multiDrawCount,Zt=_e?j.get(_e).bytesPerElement:1,ai=Ie.get(H).currentProgram.getUniforms();for(let Gt=0;Gt<Ze;Gt++)ai.setValue(P,"_gl_DrawID",Gt),je.render(Me[Gt]/Zt,Tt[Gt])}else if(U.isInstancedMesh)je.renderInstances(Qe,ut,U.count);else if(z.isInstancedBufferGeometry){const Me=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Tt=Math.min(z.instanceCount,Me);je.renderInstances(Qe,ut,Tt)}else je.render(Qe,ut)};function Ke(y,D,z){y.transparent===!0&&y.side===Yt&&y.forceSinglePass===!1?(y.side=Ut,y.needsUpdate=!0,as(y,D,z),y.side=Nn,y.needsUpdate=!0,as(y,D,z),y.side=Yt):as(y,D,z)}this.compile=function(y,D,z=null){z===null&&(z=y),d=qe.get(z),d.init(D),x.push(d),z.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),y!==z&&y.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const H=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ne=U.material;if(ne)if(Array.isArray(ne))for(let le=0;le<ne.length;le++){const ge=ne[le];Ke(ge,z,U),H.add(ge)}else Ke(ne,z,U),H.add(ne)}),x.pop(),d=null,H},this.compileAsync=function(y,D,z=null){const H=this.compile(y,D,z);return new Promise(U=>{function ne(){if(H.forEach(function(le){Ie.get(le).currentProgram.isReady()&&H.delete(le)}),H.size===0){U(y);return}setTimeout(ne,10)}He.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let kt=null;function un(y){kt&&kt(y)}function ho(){On.stop()}function uo(){On.start()}const On=new cc;On.setAnimationLoop(un),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(y){kt=y,W.setAnimationLoop(y),y===null?On.stop():On.start()},W.addEventListener("sessionstart",ho),W.addEventListener("sessionend",uo),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,D,w),d=qe.get(y,x.length),d.init(D),x.push(d),de.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Oe.setFromProjectionMatrix(de),ee=this.localClippingEnabled,q=te.init(this.clippingPlanes,ee),f=ue.get(y,m.length),f.init(),m.push(f),W.enabled===!0&&W.isPresenting===!0){const ne=M.xr.getDepthSensingMesh();ne!==null&&oa(ne,D,-1/0,M.sortObjects)}oa(y,D,0,M.sortObjects),f.finish(),M.sortObjects===!0&&f.sort(V,re),tt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,tt&&Ce.addToRenderList(f,y),this.info.render.frame++,q===!0&&te.beginShadows();const z=d.state.shadowsArray;fe.render(z,y,D),q===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=f.opaque,U=f.transmissive;if(d.setupLights(),D.isArrayCamera){const ne=D.cameras;if(U.length>0)for(let le=0,ge=ne.length;le<ge;le++){const _e=ne[le];po(H,U,y,_e)}tt&&Ce.render(y);for(let le=0,ge=ne.length;le<ge;le++){const _e=ne[le];fo(f,y,_e,_e.viewport)}}else U.length>0&&po(H,U,y,D),tt&&Ce.render(y),fo(f,y,D);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),y.isScene===!0&&y.onAfterRender(M,y,D),st.resetDefaultState(),L=-1,G=null,x.pop(),x.length>0?(d=x[x.length-1],q===!0&&te.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function oa(y,D,z,H){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Oe.intersectsSprite(y)){H&&we.setFromMatrixPosition(y.matrixWorld).applyMatrix4(de);const le=K.update(y),ge=y.material;ge.visible&&f.push(y,le,ge,z,we.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Oe.intersectsObject(y))){const le=K.update(y),ge=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),we.copy(y.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),we.copy(le.boundingSphere.center)),we.applyMatrix4(y.matrixWorld).applyMatrix4(de)),Array.isArray(ge)){const _e=le.groups;for(let Ee=0,Ae=_e.length;Ee<Ae;Ee++){const xe=_e[Ee],Qe=ge[xe.materialIndex];Qe&&Qe.visible&&f.push(y,le,Qe,z,we.z,xe)}}else ge.visible&&f.push(y,le,ge,z,we.z,null)}}const ne=y.children;for(let le=0,ge=ne.length;le<ge;le++)oa(ne[le],D,z,H)}function fo(y,D,z,H){const U=y.opaque,ne=y.transmissive,le=y.transparent;d.setupLightsView(z),q===!0&&te.setGlobalState(M.clippingPlanes,z),H&&Re.viewport(v.copy(H)),U.length>0&&ss(U,D,z),ne.length>0&&ss(ne,D,z),le.length>0&&ss(le,D,z),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function po(y,D,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new ei(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?ts:Sn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ne=d.state.transmissionRenderTarget[H.id],le=H.viewport||v;ne.setSize(le.z,le.w);const ge=M.getRenderTarget();M.setRenderTarget(ne),M.getClearColor(F),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear(),tt&&Ce.render(z);const _e=M.toneMapping;M.toneMapping=Dn;const Ee=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),q===!0&&te.setGlobalState(M.clippingPlanes,H),ss(y,z,H),T.updateMultisampleRenderTarget(ne),T.updateRenderTargetMipmap(ne),He.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let xe=0,Qe=D.length;xe<Qe;xe++){const ot=D[xe],ut=ot.object,Ht=ot.geometry,je=ot.material,Me=ot.group;if(je.side===Yt&&ut.layers.test(H.layers)){const Tt=je.side;je.side=Ut,je.needsUpdate=!0,mo(ut,z,H,Ht,je,Me),je.side=Tt,je.needsUpdate=!0,Ae=!0}}Ae===!0&&(T.updateMultisampleRenderTarget(ne),T.updateRenderTargetMipmap(ne))}M.setRenderTarget(ge),M.setClearColor(F,N),Ee!==void 0&&(H.viewport=Ee),M.toneMapping=_e}function ss(y,D,z){const H=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ne=y.length;U<ne;U++){const le=y[U],ge=le.object,_e=le.geometry,Ee=H===null?le.material:H,Ae=le.group;ge.layers.test(z.layers)&&mo(ge,D,z,_e,Ee,Ae)}}function mo(y,D,z,H,U,ne){y.onBeforeRender(M,D,z,H,U,ne),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(M,D,z,H,y,ne),U.transparent===!0&&U.side===Yt&&U.forceSinglePass===!1?(U.side=Ut,U.needsUpdate=!0,M.renderBufferDirect(z,D,H,U,y,ne),U.side=Nn,U.needsUpdate=!0,M.renderBufferDirect(z,D,H,U,y,ne),U.side=Yt):M.renderBufferDirect(z,D,H,U,y,ne),y.onAfterRender(M,D,z,H,U,ne)}function as(y,D,z){D.isScene!==!0&&(D=Ve);const H=Ie.get(y),U=d.state.lights,ne=d.state.shadowsArray,le=U.state.version,ge=be.getParameters(y,U.state,ne,D,z),_e=be.getProgramCacheKey(ge);let Ee=H.programs;H.environment=y.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(y.isMeshStandardMaterial?B:S).get(y.envMap||H.environment),H.envMapRotation=H.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Ee===void 0&&(y.addEventListener("dispose",$e),Ee=new Map,H.programs=Ee);let Ae=Ee.get(_e);if(Ae!==void 0){if(H.currentProgram===Ae&&H.lightsStateVersion===le)return vo(y,ge),Ae}else ge.uniforms=be.getUniforms(y),y.onBeforeCompile(ge,M),Ae=be.acquireProgram(ge,_e),Ee.set(_e,Ae),H.uniforms=ge.uniforms;const xe=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(xe.clippingPlanes=te.uniform),vo(y,ge),H.needsLights=xc(y),H.lightsStateVersion=le,H.needsLights&&(xe.ambientLightColor.value=U.state.ambient,xe.lightProbe.value=U.state.probe,xe.directionalLights.value=U.state.directional,xe.directionalLightShadows.value=U.state.directionalShadow,xe.spotLights.value=U.state.spot,xe.spotLightShadows.value=U.state.spotShadow,xe.rectAreaLights.value=U.state.rectArea,xe.ltc_1.value=U.state.rectAreaLTC1,xe.ltc_2.value=U.state.rectAreaLTC2,xe.pointLights.value=U.state.point,xe.pointLightShadows.value=U.state.pointShadow,xe.hemisphereLights.value=U.state.hemi,xe.directionalShadowMap.value=U.state.directionalShadowMap,xe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,xe.spotShadowMap.value=U.state.spotShadowMap,xe.spotLightMatrix.value=U.state.spotLightMatrix,xe.spotLightMap.value=U.state.spotLightMap,xe.pointShadowMap.value=U.state.pointShadowMap,xe.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ae,H.uniformsList=null,Ae}function go(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=Gs.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function vo(y,D){const z=Ie.get(y);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function _c(y,D,z,H,U){D.isScene!==!0&&(D=Ve),T.resetTextureUnits();const ne=D.fog,le=H.isMeshStandardMaterial?D.environment:null,ge=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Un,_e=(H.isMeshStandardMaterial?B:S).get(H.envMap||le),Ee=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ae=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),xe=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,ot=!!z.morphAttributes.color;let ut=Dn;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ut=M.toneMapping);const Ht=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,je=Ht!==void 0?Ht.length:0,Me=Ie.get(H),Tt=d.state.lights;if(q===!0&&(ee===!0||y!==G)){const Kt=y===G&&H.id===L;te.setState(H,y,Kt)}let Ze=!1;H.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Tt.state.version||Me.outputColorSpace!==ge||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==_e||H.fog===!0&&Me.fog!==ne||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==te.numPlanes||Me.numIntersection!==te.numIntersection)||Me.vertexAlphas!==Ee||Me.vertexTangents!==Ae||Me.morphTargets!==xe||Me.morphNormals!==Qe||Me.morphColors!==ot||Me.toneMapping!==ut||Me.morphTargetsCount!==je)&&(Ze=!0):(Ze=!0,Me.__version=H.version);let Zt=Me.currentProgram;Ze===!0&&(Zt=as(H,D,U));let ai=!1,Gt=!1,la=!1;const ft=Zt.getUniforms(),yn=Me.uniforms;if(Re.useProgram(Zt.program)&&(ai=!0,Gt=!0,la=!0),H.id!==L&&(L=H.id,Gt=!0),ai||G!==y){Xe.reverseDepthBuffer?(ve.copy(y.projectionMatrix),Th(ve),wh(ve),ft.setValue(P,"projectionMatrix",ve)):ft.setValue(P,"projectionMatrix",y.projectionMatrix),ft.setValue(P,"viewMatrix",y.matrixWorldInverse);const Kt=ft.map.cameraPosition;Kt!==void 0&&Kt.setValue(P,Ne.setFromMatrixPosition(y.matrixWorld)),Xe.logarithmicDepthBuffer&&ft.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ft.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),G!==y&&(G=y,Gt=!0,la=!0)}if(U.isSkinnedMesh){ft.setOptional(P,U,"bindMatrix"),ft.setOptional(P,U,"bindMatrixInverse");const Kt=U.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),ft.setValue(P,"boneTexture",Kt.boneTexture,T))}U.isBatchedMesh&&(ft.setOptional(P,U,"batchingTexture"),ft.setValue(P,"batchingTexture",U._matricesTexture,T),ft.setOptional(P,U,"batchingIdTexture"),ft.setValue(P,"batchingIdTexture",U._indirectTexture,T),ft.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&ft.setValue(P,"batchingColorTexture",U._colorsTexture,T));const ca=z.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0)&&Pe.update(U,z,Zt),(Gt||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,ft.setValue(P,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(yn.envMap.value=_e,yn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(yn.envMapIntensity.value=D.environmentIntensity),Gt&&(ft.setValue(P,"toneMappingExposure",M.toneMappingExposure),Me.needsLights&&bc(yn,la),ne&&H.fog===!0&&ae.refreshFogUniforms(yn,ne),ae.refreshMaterialUniforms(yn,H,Y,O,d.state.transmissionRenderTarget[y.id]),Gs.upload(P,go(Me),yn,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Gs.upload(P,go(Me),yn,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ft.setValue(P,"center",U.center),ft.setValue(P,"modelViewMatrix",U.modelViewMatrix),ft.setValue(P,"normalMatrix",U.normalMatrix),ft.setValue(P,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Kt=H.uniformsGroups;for(let ha=0,Sc=Kt.length;ha<Sc;ha++){const _o=Kt[ha];I.update(_o,Zt),I.bind(_o,Zt)}}return Zt}function bc(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function xc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(y,D,z){Ie.get(y.texture).__webglTexture=D,Ie.get(y.depthTexture).__webglTexture=z;const H=Ie.get(y);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,D){const z=Ie.get(y);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,z=0){w=y,R=D,A=z;let H=!0,U=null,ne=!1,le=!1;if(y){const _e=Ie.get(y);if(_e.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(_e.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(_e.__hasExternalTextures)T.rebindTextures(y,Ie.get(y.texture).__webglTexture,Ie.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const xe=y.depthTexture;if(_e.__boundDepthTexture!==xe){if(xe!==null&&Ie.has(xe)&&(y.width!==xe.image.width||y.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const Ee=y.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(le=!0);const Ae=Ie.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ae[D])?U=Ae[D][z]:U=Ae[D],ne=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?U=Ie.get(y).__webglMultisampledFramebuffer:Array.isArray(Ae)?U=Ae[z]:U=Ae,v.copy(y.viewport),b.copy(y.scissor),k=y.scissorTest}else v.copy($).multiplyScalar(Y).floor(),b.copy(Q).multiplyScalar(Y).floor(),k=De;if(Re.bindFramebuffer(P.FRAMEBUFFER,U)&&H&&Re.drawBuffers(y,U),Re.viewport(v),Re.scissor(b),Re.setScissorTest(k),ne){const _e=Ie.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,z)}else if(le){const _e=Ie.get(y.texture),Ee=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,_e.__webglTexture,z||0,Ee)}L=-1},this.readRenderTargetPixels=function(y,D,z,H,U,ne,le){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){Re.bindFramebuffer(P.FRAMEBUFFER,ge);try{const _e=y.texture,Ee=_e.format,Ae=_e.type;if(!Xe.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-H&&z>=0&&z<=y.height-U&&P.readPixels(D,z,H,U,Ue.convert(Ee),Ue.convert(Ae),ne)}finally{const _e=w!==null?Ie.get(w).__webglFramebuffer:null;Re.bindFramebuffer(P.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(y,D,z,H,U,ne,le){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){const _e=y.texture,Ee=_e.format,Ae=_e.type;if(!Xe.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=y.width-H&&z>=0&&z<=y.height-U){Re.bindFramebuffer(P.FRAMEBUFFER,ge);const xe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,xe),P.bufferData(P.PIXEL_PACK_BUFFER,ne.byteLength,P.STREAM_READ),P.readPixels(D,z,H,U,Ue.convert(Ee),Ue.convert(Ae),0);const Qe=w!==null?Ie.get(w).__webglFramebuffer:null;Re.bindFramebuffer(P.FRAMEBUFFER,Qe);const ot=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Eh(P,ot,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,xe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ne),P.deleteBuffer(xe),P.deleteSync(ot),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,D=null,z=0){y.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,y=arguments[1]);const H=Math.pow(2,-z),U=Math.floor(y.image.width*H),ne=Math.floor(y.image.height*H),le=D!==null?D.x:0,ge=D!==null?D.y:0;T.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,le,ge,U,ne),Re.unbindTexture()},this.copyTextureToTexture=function(y,D,z=null,H=null,U=0){y.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,y=arguments[1],D=arguments[2],U=arguments[3]||0,z=null);let ne,le,ge,_e,Ee,Ae;z!==null?(ne=z.max.x-z.min.x,le=z.max.y-z.min.y,ge=z.min.x,_e=z.min.y):(ne=y.image.width,le=y.image.height,ge=0,_e=0),H!==null?(Ee=H.x,Ae=H.y):(Ee=0,Ae=0);const xe=Ue.convert(D.format),Qe=Ue.convert(D.type);T.setTexture2D(D,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const ot=P.getParameter(P.UNPACK_ROW_LENGTH),ut=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ht=P.getParameter(P.UNPACK_SKIP_PIXELS),je=P.getParameter(P.UNPACK_SKIP_ROWS),Me=P.getParameter(P.UNPACK_SKIP_IMAGES),Tt=y.isCompressedTexture?y.mipmaps[U]:y.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,_e),y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Ee,Ae,ne,le,xe,Qe,Tt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Ee,Ae,Tt.width,Tt.height,xe,Tt.data):P.texSubImage2D(P.TEXTURE_2D,U,Ee,Ae,ne,le,xe,Qe,Tt),P.pixelStorei(P.UNPACK_ROW_LENGTH,ot),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ht),P.pixelStorei(P.UNPACK_SKIP_ROWS,je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Me),U===0&&D.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(y,D,z=null,H=null,U=0){y.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,y=arguments[2],D=arguments[3],U=arguments[4]||0);let ne,le,ge,_e,Ee,Ae,xe,Qe,ot;const ut=y.isCompressedTexture?y.mipmaps[U]:y.image;z!==null?(ne=z.max.x-z.min.x,le=z.max.y-z.min.y,ge=z.max.z-z.min.z,_e=z.min.x,Ee=z.min.y,Ae=z.min.z):(ne=ut.width,le=ut.height,ge=ut.depth,_e=0,Ee=0,Ae=0),H!==null?(xe=H.x,Qe=H.y,ot=H.z):(xe=0,Qe=0,ot=0);const Ht=Ue.convert(D.format),je=Ue.convert(D.type);let Me;if(D.isData3DTexture)T.setTexture3D(D,0),Me=P.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)T.setTexture2DArray(D,0),Me=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const Tt=P.getParameter(P.UNPACK_ROW_LENGTH),Ze=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Zt=P.getParameter(P.UNPACK_SKIP_PIXELS),ai=P.getParameter(P.UNPACK_SKIP_ROWS),Gt=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ut.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_e),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ee),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ae),y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Me,U,xe,Qe,ot,ne,le,ge,Ht,je,ut.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Me,U,xe,Qe,ot,ne,le,ge,Ht,ut.data):P.texSubImage3D(Me,U,xe,Qe,ot,ne,le,ge,Ht,je,ut),P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ze),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Zt),P.pixelStorei(P.UNPACK_SKIP_ROWS,ai),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Gt),U===0&&D.generateMipmaps&&P.generateMipmap(Me),Re.unbindTexture()},this.initRenderTarget=function(y){Ie.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),Re.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,Re.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===eo?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===ta?"display-p3":"srgb"}}class ia{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new ia(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ao extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class km extends Lt{constructor(e=null,t=1,n=1,s,r,i,o,c,h=Bt,p=Bt,u,l){super(null,i,o,c,h,p,s,r,u,l),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xl extends wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xi=new et,Sl=new et,As=[],Ml=new ni,Fm=new et,$i=new Le,Xi=new ii;class $a extends Le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Ml.copy(e.boundingBox).applyMatrix4(xi),this.boundingBox.union(Ml)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Xi.copy(e.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Xi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,i=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[i+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xi.copy(this.boundingSphere),Xi.applyMatrix4(n),e.ray.intersectsSphere(Xi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xi),Sl.multiplyMatrices(n,xi),$i.matrixWorld=Sl,$i.raycast(e,As);for(let i=0,o=As.length;i<o;i++){const c=As[i];c.instanceId=r,c.object=this,t.push(c)}As.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new km(new Float32Array(s*this.count),s,this.count,jr,cn));const r=this.morphTexture.source.data.data;let i=0;for(let h=0;h<n.length;h++)i+=n[h];const o=this.geometry.morphTargetsRelative?1:1-i,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ks extends si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const js=new C,Zs=new C,yl=new et,qi=new to,Rs=new ii,Xa=new C,El=new C;class Gr extends gt{constructor(e=new it,t=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)js.fromBufferAttribute(t,s-1),Zs.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=js.distanceTo(Zs);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,i=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(s),Rs.radius+=r,e.ray.intersectsSphere(Rs)===!1)return;yl.copy(s).invert(),qi.copy(e.ray).applyMatrix4(yl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,p=n.index,l=n.attributes.position;if(p!==null){const g=Math.max(0,i.start),_=Math.min(p.count,i.start+i.count);for(let f=g,d=_-1;f<d;f+=h){const m=p.getX(f),x=p.getX(f+1),M=Cs(this,e,qi,c,m,x);M&&t.push(M)}if(this.isLineLoop){const f=p.getX(_-1),d=p.getX(g),m=Cs(this,e,qi,c,f,d);m&&t.push(m)}}else{const g=Math.max(0,i.start),_=Math.min(l.count,i.start+i.count);for(let f=g,d=_-1;f<d;f+=h){const m=Cs(this,e,qi,c,f,f+1);m&&t.push(m)}if(this.isLineLoop){const f=Cs(this,e,qi,c,_-1,g);f&&t.push(f)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,i=s.length;r<i;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cs(a,e,t,n,s,r){const i=a.geometry.attributes.position;if(js.fromBufferAttribute(i,s),Zs.fromBufferAttribute(i,r),t.distanceSqToSegment(js,Zs,Xa,El)>n)return;Xa.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Xa);if(!(c<e.near||c>e.far))return{distance:c,point:El.clone().applyMatrix4(a.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:a}}class ti extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tl=new et,Vr=new to,Ps=new ii,Ls=new C;class Di extends gt{constructor(e=new it,t=new ti){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,i=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),Ps.radius+=r,e.ray.intersectsSphere(Ps)===!1)return;Tl.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(Tl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,u=n.attributes.position;if(h!==null){const l=Math.max(0,i.start),g=Math.min(h.count,i.start+i.count);for(let _=l,f=g;_<f;_++){const d=h.getX(_);Ls.fromBufferAttribute(u,d),wl(Ls,d,c,s,e,t,this)}}else{const l=Math.max(0,i.start),g=Math.min(u.count,i.start+i.count);for(let _=l,f=g;_<f;_++)Ls.fromBufferAttribute(u,_),wl(Ls,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,i=s.length;r<i;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wl(a,e,t,n,s,r,i){const o=Vr.distanceSqToPoint(a);if(o<t){const c=new C;Vr.closestPointToPoint(a,c),c.applyMatrix4(n);const h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:i})}}class Ni extends Lt{constructor(e,t,n,s,r,i,o,c,h){super(e,t,n,s,r,i,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bm{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let i=1;i<=e;i++)n=this.getPoint(i/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let i;t?i=t:i=e*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-i,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===i)return s/(r-1);const p=n[s],l=n[s+1]-p,g=(i-p)/l;return(s+g)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const i=this.getPoint(s),o=this.getPoint(r),c=t||(i.isVector2?new ze:new C);return c.copy(o).sub(i).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,s=[],r=[],i=[],o=new C,c=new et;for(let g=0;g<=e;g++){const _=g/e;s[g]=this.getTangentAt(_,new C)}r[0]=new C,i[0]=new C;let h=Number.MAX_VALUE;const p=Math.abs(s[0].x),u=Math.abs(s[0].y),l=Math.abs(s[0].z);p<=h&&(h=p,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),l<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),i[0].crossVectors(s[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),i[g]=i[g-1].clone(),o.crossVectors(s[g-1],s[g]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ct(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(c.makeRotationAxis(o,_))}i[g].crossVectors(s[g],r[g])}if(t===!0){let g=Math.acos(Ct(r[0].dot(r[e]),-1,1));g/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(g=-g);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],g*_)),i[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:i}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function ro(){let a=0,e=0,t=0,n=0;function s(r,i,o,c){a=r,e=o,t=-3*r+3*i-2*o-c,n=2*r-2*i+o+c}return{initCatmullRom:function(r,i,o,c,h){s(i,o,h*(o-r),h*(c-i))},initNonuniformCatmullRom:function(r,i,o,c,h,p,u){let l=(i-r)/h-(o-r)/(h+p)+(o-i)/p,g=(o-i)/p-(c-i)/(p+u)+(c-o)/u;l*=p,g*=p,s(i,o,l,g)},calc:function(r){const i=r*r,o=i*r;return a+e*r+t*i+n*o}}}const Is=new C,qa=new ro,Ya=new ro,Ka=new ro;class zm extends Bm{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){const n=t,s=this.points,r=s.length,i=(r-(this.closed?0:1))*e;let o=Math.floor(i),c=i-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,p;this.closed||o>0?h=s[(o-1)%r]:(Is.subVectors(s[0],s[1]).add(s[0]),h=Is);const u=s[o%r],l=s[(o+1)%r];if(this.closed||o+2<r?p=s[(o+2)%r]:(Is.subVectors(s[r-1],s[r-2]).add(s[r-1]),p=Is),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(u),g),f=Math.pow(u.distanceToSquared(l),g),d=Math.pow(l.distanceToSquared(p),g);f<1e-4&&(f=1),_<1e-4&&(_=f),d<1e-4&&(d=f),qa.initNonuniformCatmullRom(h.x,u.x,l.x,p.x,_,f,d),Ya.initNonuniformCatmullRom(h.y,u.y,l.y,p.y,_,f,d),Ka.initNonuniformCatmullRom(h.z,u.z,l.z,p.z,_,f,d)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(h.x,u.x,l.x,p.x,this.tension),Ya.initCatmullRom(h.y,u.y,l.y,p.y,this.tension),Ka.initCatmullRom(h.z,u.z,l.z,p.z,this.tension));return n.set(qa.calc(c),Ya.calc(c),Ka.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Ui extends it{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],i=[],o=[],c=[],h=new C,p=new ze;i.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,l=3;u<=t;u++,l+=3){const g=n+u/t*s;h.x=e*Math.cos(g),h.y=e*Math.sin(g),i.push(h.x,h.y,h.z),o.push(0,0,1),p.x=(i[l]/e+1)/2,p.y=(i[l+1]/e+1)/2,c.push(p.x,p.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new at(i,3)),this.setAttribute("normal",new at(o,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xt extends it{constructor(e=1,t=1,n=1,s=32,r=1,i=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:i,thetaStart:o,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const p=[],u=[],l=[],g=[];let _=0;const f=[],d=n/2;let m=0;x(),i===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(p),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(g,2));function x(){const E=new C,R=new C;let A=0;const w=(t-e)/n;for(let L=0;L<=r;L++){const G=[],v=L/r,b=v*(t-e)+e;for(let k=0;k<=s;k++){const F=k/s,N=F*c+o,X=Math.sin(N),O=Math.cos(N);R.x=b*X,R.y=-v*n+d,R.z=b*O,u.push(R.x,R.y,R.z),E.set(X,w,O).normalize(),l.push(E.x,E.y,E.z),g.push(F,1-v),G.push(_++)}f.push(G)}for(let L=0;L<s;L++)for(let G=0;G<r;G++){const v=f[G][L],b=f[G+1][L],k=f[G+1][L+1],F=f[G][L+1];e>0&&(p.push(v,b,F),A+=3),t>0&&(p.push(b,k,F),A+=3)}h.addGroup(m,A,0),m+=A}function M(E){const R=_,A=new ze,w=new C;let L=0;const G=E===!0?e:t,v=E===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,d*v,0),l.push(0,v,0),g.push(.5,.5),_++;const b=_;for(let k=0;k<=s;k++){const N=k/s*c+o,X=Math.cos(N),O=Math.sin(N);w.x=G*O,w.y=d*v,w.z=G*X,u.push(w.x,w.y,w.z),l.push(0,v,0),A.x=X*.5+.5,A.y=O*.5*v+.5,g.push(A.x,A.y),_++}for(let k=0;k<s;k++){const F=R+k,N=b+k;E===!0?p.push(N,N+1,F):p.push(N+1,N,F),L+=3}h.addGroup(m,L,E===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qt extends Xt{constructor(e=1,t=1,n=32,s=1,r=!1,i=0,o=Math.PI*2){super(0,e,t,n,s,r,i,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:i,thetaLength:o}}static fromJSON(e){return new qt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sa extends it{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],i=[];o(s),h(n),p(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(i,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new C,E=new C,R=new C;for(let A=0;A<t.length;A+=3)g(t[A+0],M),g(t[A+1],E),g(t[A+2],R),c(M,E,R,x)}function c(x,M,E,R){const A=R+1,w=[];for(let L=0;L<=A;L++){w[L]=[];const G=x.clone().lerp(E,L/A),v=M.clone().lerp(E,L/A),b=A-L;for(let k=0;k<=b;k++)k===0&&L===A?w[L][k]=G:w[L][k]=G.clone().lerp(v,k/b)}for(let L=0;L<A;L++)for(let G=0;G<2*(A-L)-1;G++){const v=Math.floor(G/2);G%2===0?(l(w[L][v+1]),l(w[L+1][v]),l(w[L][v])):(l(w[L][v+1]),l(w[L+1][v+1]),l(w[L+1][v]))}}function h(x){const M=new C;for(let E=0;E<r.length;E+=3)M.x=r[E+0],M.y=r[E+1],M.z=r[E+2],M.normalize().multiplyScalar(x),r[E+0]=M.x,r[E+1]=M.y,r[E+2]=M.z}function p(){const x=new C;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const E=d(x)/2/Math.PI+.5,R=m(x)/Math.PI+.5;i.push(E,1-R)}_(),u()}function u(){for(let x=0;x<i.length;x+=6){const M=i[x+0],E=i[x+2],R=i[x+4],A=Math.max(M,E,R),w=Math.min(M,E,R);A>.9&&w<.1&&(M<.2&&(i[x+0]+=1),E<.2&&(i[x+2]+=1),R<.2&&(i[x+4]+=1))}}function l(x){r.push(x.x,x.y,x.z)}function g(x,M){const E=x*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function _(){const x=new C,M=new C,E=new C,R=new C,A=new ze,w=new ze,L=new ze;for(let G=0,v=0;G<r.length;G+=9,v+=6){x.set(r[G+0],r[G+1],r[G+2]),M.set(r[G+3],r[G+4],r[G+5]),E.set(r[G+6],r[G+7],r[G+8]),A.set(i[v+0],i[v+1]),w.set(i[v+2],i[v+3]),L.set(i[v+4],i[v+5]),R.copy(x).add(M).add(E).divideScalar(3);const b=d(R);f(A,v+0,x,b),f(w,v+2,M,b),f(L,v+4,E,b)}}function f(x,M,E,R){R<0&&x.x===1&&(i[M]=x.x-1),E.x===0&&E.z===0&&(i[M]=R/2/Math.PI+.5)}function d(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.vertices,e.indices,e.radius,e.details)}}class es extends sa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],i=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,i,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new es(e.radius,e.detail)}}class oo extends sa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new oo(e.radius,e.detail)}}class aa extends it{constructor(e=.5,t=1,n=32,s=1,r=0,i=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:i},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],h=[],p=[];let u=e;const l=(t-e)/s,g=new C,_=new ze;for(let f=0;f<=s;f++){for(let d=0;d<=n;d++){const m=r+d/n*i;g.x=u*Math.cos(m),g.y=u*Math.sin(m),c.push(g.x,g.y,g.z),h.push(0,0,1),_.x=(g.x/t+1)/2,_.y=(g.y/t+1)/2,p.push(_.x,_.y)}u+=l}for(let f=0;f<s;f++){const d=f*(n+1);for(let m=0;m<n;m++){const x=m+d,M=x,E=x+n+1,R=x+n+2,A=x+1;o.push(M,E,A),o.push(E,R,A)}}this.setIndex(o),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Kn extends it{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,i=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:i,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(i+o,Math.PI);let h=0;const p=[],u=new C,l=new C,g=[],_=[],f=[],d=[];for(let m=0;m<=n;m++){const x=[],M=m/n;let E=0;m===0&&i===0?E=.5/t:m===n&&c===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){const A=R/t;u.x=-e*Math.cos(s+A*r)*Math.sin(i+M*o),u.y=e*Math.cos(i+M*o),u.z=e*Math.sin(s+A*r)*Math.sin(i+M*o),_.push(u.x,u.y,u.z),l.copy(u).normalize(),f.push(l.x,l.y,l.z),d.push(A+E,1-M),x.push(h++)}p.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const M=p[m][x+1],E=p[m][x],R=p[m+1][x],A=p[m+1][x+1];(m!==0||i>0)&&g.push(M,E,A),(m!==n-1||c<Math.PI)&&g.push(E,R,A)}this.setIndex(g),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(f,3)),this.setAttribute("uv",new at(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ye extends si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ra extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class lo extends ra{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ja=new et,Al=new C,Rl=new C;class gc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new no,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Al.setFromMatrixPosition(e.matrixWorld),t.position.copy(Al),Rl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rl),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cl=new et,Yi=new C,Za=new C;class Hm extends gc{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Yi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yi),Za.copy(n.position),Za.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Za),n.updateMatrixWorld(),s.makeTranslation(-Yi.x,-Yi.y,-Yi.z),Cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl)}}class Jn extends ra{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gm extends gc{constructor(){super(new hc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Js extends ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Gm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vm extends ra{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class co{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Pl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Pl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$r}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$r);const Ja=new Map;function Wm(a,e,t){const n=`b${a}_${e}_${t}`;return Ja.has(n)||Ja.set(n,new dt(a,e,t)),Ja.get(n)}function Wn(a,e={}){return new Ye({color:a,...e})}function Te(a,e,t,n,s,r,i,o){const c=new Le(Wm(e,t,n),o);return c.position.set(s,r,i),a.add(c),c}function Ki(a,e,t,n,s,r){const i=new hn,o=new Xt(t,t,n,12),c=new Le(o,s);c.rotation.z=Math.PI/2,c.castShadow=!1,i.add(c);const h=new Xt(t*.56,t*.56,n+.02,8),p=new Le(h,r);p.rotation.z=Math.PI/2,i.add(p);for(let u=0;u<5;u++){const l=Te(i,.02,t*.86,.09,0,0,0,r);l.rotation.x=u/5*Math.PI}return i.position.set(a,t,e),i}function Qs(a,e={}){const t=a||{},n=new Se(t.color||"#7b3b2a"),s=new Se(t.accent||"#d9a441"),r=Wn(n),i=Wn("#141416"),o=Wn("#10151c",{transparent:!0,opacity:.9}),c=Wn(s,{emissive:s.clone().multiplyScalar(.5)}),h=new ct({color:"#fff4cf"}),p=new ct({color:"#ff2b1d"}),u=Wn("#8a8478"),l=new hn,g=t.shape||"muscle",_=[];if(g==="truck"){Te(l,2.3,.55,4.7,0,.78,0,r),Te(l,2.35,.5,2.5,0,1.16,-.9,r),Te(l,2,.62,1.25,0,1.22,1.55,r),Te(l,1.85,.5,1.35,0,1.7,-.9,o),Te(l,2.36,.16,4.75,0,.52,0,i),Te(l,2.5,.18,.4,0,.86,2.3,i),Te(l,.22,.55,.22,-.9,.85,2.35,i),Te(l,.22,.55,.22,.9,.85,2.35,i),Te(l,.35,.55,2.4,0,1.5,-.9,c);for(const m of[-.98,.98])for(const x of[-1.6,1.65])_.push(Ki(m,x,.56,.42,i,u));Te(l,.16,.85,.16,-.85,1.65,-.2,u),Te(l,.16,.85,.16,.85,1.65,-.2,u)}else if(g==="buggy"){Te(l,2.1,.42,3.7,0,.78,0,r),Te(l,1.5,.45,1.5,0,1.16,-.55,r),Te(l,1.7,.52,.9,0,1.13,.9,r),Te(l,1.3,.4,1.15,0,1.53,-.55,o);const m=Wn("#35383a");Te(l,2,.1,.1,0,1.62,-.4,m),Te(l,.1,.7,.1,-.95,1.3,-.4,m),Te(l,.1,.7,.1,.95,1.3,-.4,m),Te(l,.1,.7,.1,-.95,1.3,.5,m),Te(l,.1,.7,.1,.95,1.3,.5,m),Te(l,2.1,.14,.18,0,1.1,1.9,c);for(const x of[-1.08,1.08])for(const M of[-1.42,1.42])_.push(Ki(x,M,.62,.5,i,c))}else if(g==="sedan"){Te(l,2.08,.52,4.35,0,.73,0,r),Te(l,1.86,.55,2.1,0,1.15,-.15,r),Te(l,1.7,.38,1.85,0,1.5,-.15,o),Te(l,2.02,.12,4.4,0,.55,0,i),Te(l,1.5,.12,.8,0,1.22,-2.1,c);for(const m of[-1.02,1.02])for(const x of[-1.42,1.42])_.push(Ki(m,x,.48,.34,i,u))}else if(g==="exotic"){Te(l,2.2,.36,4.5,0,.62,0,r),Te(l,1.55,.48,1.65,0,1.02,-.45,r),Te(l,1.35,.32,1.35,0,1.32,-.45,o),Te(l,1.7,.2,1.2,0,.83,1.5,r),Te(l,2.24,.09,1.45,0,.84,-1.95,c),Te(l,.12,.42,.3,-.92,.76,-1.95,c),Te(l,.12,.42,.3,.92,.76,-1.95,c),Te(l,1.9,.08,.55,0,.38,2.35,i);for(const m of[-1.06,1.06])for(const x of[-1.5,1.46])_.push(Ki(m,x,.5,.38,i,c))}else{Te(l,2.16,.5,4.4,0,.72,0,r),Te(l,1.78,.52,2,0,1.13,-.35,r),Te(l,1.6,.38,1.7,0,1.45,-.35,o),Te(l,1.7,.18,1.35,0,.86,1.55,r),Te(l,2,.4,.14,0,.5,2.28,i),Te(l,1.75,.06,.6,0,.52,-2.15,c),Te(l,.18,.08,1.1,-.72,1,1.25,c),Te(l,.18,.08,1.1,.72,1,1.25,c);for(const m of[-1.02,1.02])for(const x of[-1.45,1.48])_.push(Ki(m,x,.49,.36,i,u))}const f=g==="truck"?1.28:g==="buggy"?1.05:.8,d=g==="truck"?2.38:g==="buggy"?1.92:2.27;for(const m of[-.68,.68])Te(l,.34,.16,.08,m,f,d,h),g!=="exotic"&&Te(l,.36,.16,.08,m,f,-2.27,p);if(g==="exotic"){Te(l,1.8,.1,.05,0,.78,2.26,new ct({color:"#bfeaff"})),Te(l,1.7,.08,.05,0,.78,-2.28,p);const m=new Le(new Pt(2.5,4.8),new ct({color:s,transparent:!0,opacity:.22,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.y=.13,l.add(m)}if(t.spikes||t.shape==="truck"||t.id==="wool_reaper"||t.id==="beast_titan"){const m=Wn("#b9b0a0");for(let x=0;x<5;x++){const M=new Le(new qt(.11,.42,5),m);M.position.set(-.8+x*.4,1.22,2.2),M.rotation.x=Math.PI/2,l.add(M)}}if(e.boss){const m=new Le(new qt(.16,.7,4),c);m.position.set(0,1.65,-.35),l.add(m)}if(e.beams)for(const m of[-.55,.55]){const x=new Le(new qt(1.4,9,12,1,!0),new ct({color:"#ffe7a8",transparent:!0,opacity:.045,depthWrite:!1,side:Yt}));x.rotation.x=Math.PI/2,x.position.set(m,.8,6.9),l.add(x)}return l.userData.wheels=_,l.userData.bodyMat=r,l.userData.accentMat=c,l.userData.tailMat=p,l.traverse(m=>{m.isMesh&&(m.frustumCulled=!0)}),l}function Ll(a,e,t){var r;const n=(r=a==null?void 0:a.userData)==null?void 0:r.wheels;if(!n)return;const s=e*t*1.9;for(const i of n)i.children[0].rotation.y+=s}function $m(a){return function(){a|=0,a=a+1831565813|0;let e=Math.imul(a^a>>>15,1|a);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Xm(){const a=document.createElement("canvas");a.width=a.height=256;const e=a.getContext("2d"),t=e.createRadialGradient(128,118,10,128,128,116);t.addColorStop(0,"#ffd9a6"),t.addColorStop(.42,"#e97b42"),t.addColorStop(.78,"#9e2d22"),t.addColorStop(1,"rgba(70,10,12,0)"),e.fillStyle=t,e.beginPath(),e.arc(128,128,126,0,7),e.fill(),e.globalCompositeOperation="multiply",e.fillStyle="rgba(60,15,15,0.4)";for(let s=0;s<16;s++)e.beginPath(),e.arc(60+Math.random()*140,60+Math.random()*140,3+Math.random()*14,0,7),e.fill();e.globalCompositeOperation="source-over",e.fillStyle="rgba(55,10,12,0.35)",e.beginPath(),e.ellipse(128,120,48,55,0,0,7),e.fill(),e.beginPath(),e.ellipse(110,112,13,17,0,0,7),e.fill(),e.beginPath(),e.ellipse(146,112,13,17,0,0,7),e.fill(),e.fillRect(122,134,12,20),e.fillStyle="rgba(55,10,12,0.25)";for(let s=0;s<5;s++)e.fillRect(112+s*7,158,4,18);const n=new Ni(a);return n.colorSpace=Et,n}class qm{constructor(e){this.canvas=e,this.active=!1,this.quality="medium",this.clock=new co,this.flash=0,this.nextBolt=2.5,this.t=0,this.init()}init(){this.renderer=new so({canvas:this.canvas,alpha:!0,antialias:this.quality!=="low",powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Et,this.scene=new ao,this.scene.fog=new ia(1839632,.017),this.camera=new Nt(47,2,.5,260),this.camera.position.set(0,5.4,19),this.camera.lookAt(0,2.2,0);const e=new lo(8952251,2757904,.55);this.scene.add(e),this.moonLight=new Js(16743493,1.4),this.moonLight.position.set(-18,20,-30),this.scene.add(this.moonLight),this.rim=new Jn(16734763,2.2,60),this.rim.position.set(-8,4,2),this.scene.add(this.rim),this.blue=new Jn(3907542,1.5,35),this.blue.position.set(7,3,-1),this.scene.add(this.blue);const t=new Le(new Pt(320,320),new Ye({color:1775639}));t.rotation.x=-Math.PI/2,this.scene.add(t);const n=new Le(new Pt(16,150),new Ye({color:2368033}));n.rotation.x=-Math.PI/2,n.position.set(4,.02,-55),n.rotation.z=-.06,this.scene.add(n);for(let f=0;f<16;f++){const d=new Le(new Pt(.34,3.5),new ct({color:12163922}));d.rotation.x=-Math.PI/2,d.rotation.z=-.06,d.position.set(4+Math.sin(-.06)*(f*8-50),.035,-50+f*8),d.rotation.z=-.06,this.scene.add(d)}for(const f of[-1,1]){const d=new Le(new Pt(.6,150),new ct({color:7166518}));d.rotation.x=-Math.PI/2,d.position.set(4+f*8,.03,-55),d.rotation.z=-.06,this.scene.add(d)}const s=$m(1337),r=new Ye({color:1052174}),i=new Ye({color:1511953});for(let f=0;f<44;f++){const d=s()>.5?1:-1,m=4+s()*12,x=10+s()*44,M=4+s()*12,E=new Le(new dt(m,x,M),s()>.5?r:i);if(E.position.set(d*(24+s()*55),x/2,-25-s()*85),E.rotation.y=s()*.5,this.scene.add(E),s()>.6){const R=new Le(new dt(m*.6,3+s()*6,M*.6),r);R.position.set(E.position.x+d*2,x+2,E.position.z),R.rotation.z=(s()-.5)*.5,this.scene.add(R)}if(s()>.35){const R=new Le(new Pt(.7,.55),new ct({color:s()>.7?10172959:5917751}));R.position.set(E.position.x-d*m*.51,x*.55,E.position.z+M*.51),R.rotation.y=d>0?-.02:.02,this.scene.add(R)}}for(let f=0;f<28;f++){const d=.3+s()*1.6,m=new Le(new es(d,0),new Ye({color:2761504,flatShading:!0}));m.position.set((s()-.5)*50,d*.4,4+s()*18),m.rotation.set(s()*3,s()*3,s()*3),this.scene.add(m)}const o=new Le(new Pt(34,34),new ct({map:Xm(),transparent:!0,depthWrite:!1,fog:!1}));o.position.set(-17,20,-78),this.scene.add(o),this.moon=o;const c={...pt[0],color:"#4a2018",accent:"#d9a441"};this.hero=Qs(c,{beams:!0,boss:!0}),this.hero.position.set(3.5,.15,3.6),this.hero.rotation.y=-.38,this.hero.scale.setScalar(1.15),this.scene.add(this.hero);const h=new Jn(16739115,2.4,14);h.position.set(3,1.6,4),this.scene.add(h);const p=new Le(new Ui(3.8,24),new ct({color:0,transparent:!0,opacity:.4,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.set(3.5,.06,3.6),this.scene.add(p),this.chains=[];for(let f=0;f<3;f++){const d=-32+f*24+s()*8,m=[];for(let E=0;E<10;E++)m.push(new C(d+Math.sin(E*.7)*.3,30-E*2.2,-18-f*8));const x=new it().setFromPoints(m),M=new Gr(x,new Ks({color:3748395}));this.scene.add(M)}this.rainCount=1400;const u=new Float32Array(this.rainCount*3);for(let f=0;f<this.rainCount;f++)u[f*3]=(s()-.5)*90,u[f*3+1]=s()*35,u[f*3+2]=-20+(s()-.5)*70;const l=new it;l.setAttribute("position",new wt(u,3)),this.rain=new Di(l,new ti({color:9085613,size:.1,transparent:!0,opacity:.5,depthWrite:!1})),this.scene.add(this.rain),this.emberCount=220;const g=new Float32Array(this.emberCount*3);for(let f=0;f<this.emberCount;f++)g[f*3]=(s()-.5)*60,g[f*3+1]=s()*20,g[f*3+2]=-30+s()*40;const _=new it;_.setAttribute("position",new wt(g,3)),this.embers=new Di(_,new ti({color:16738858,size:.18,transparent:!0,opacity:.8,depthWrite:!1})),this.scene.add(this.embers),this.boltMat=new Ks({color:14280447,transparent:!0,opacity:0}),this.bolt=new Gr(new it,this.boltMat),this.bolt.frustumCulled=!1,this.scene.add(this.bolt),this.flashLight=new Jn(12441855,0,160),this.flashLight.position.set(-15,28,-35),this.scene.add(this.flashLight),this.resize()}setQuality(e){this.quality=e,this.renderer&&(this.renderer.setPixelRatio(e==="low"?1:Math.min(e==="high"?2:1.5,window.devicePixelRatio||1)),this.rain.visible=e!=="low",this.embers.visible=e!=="low",this.resize())}resize(){if(!this.renderer)return;const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.renderer.setPixelRatio(this.quality==="low"?1:Math.min(this.quality==="high"?2:1.5,window.devicePixelRatio||1)),this.camera.aspect=e/t,this.camera.fov=e/t<.85?58:47,this.camera.updateProjectionMatrix()}start(){this.active||(this.active=!0,this.clock.getDelta(),this.loop())}stop(){this.active=!1,this.raf&&cancelAnimationFrame(this.raf)}loop(){if(!this.active)return;this.raf=requestAnimationFrame(()=>this.loop());const e=Math.min(.05,this.clock.getDelta());this.t+=e;const t=this.t;if(this.camera.position.x=Math.sin(t*.09)*1.8,this.camera.position.y=5.4+Math.sin(t*.16)*.22,this.camera.lookAt(0,2.2+Math.sin(t*.1)*.1,0),this.hero.position.y=.15+Math.sin(t*.8)*.012,this.hero.rotation.z=Math.sin(t*.6)*.004,this.rim.intensity=1.6+Math.sin(t*3.2)*.45,this.blue.intensity=1.2+Math.sin(t*2.1+1)*.4,this.rain.visible){const n=this.rain.geometry.attributes.position.array;for(let s=0;s<this.rainCount;s++)n[s*3+1]-=(18+s%5)*e,n[s*3]+=4.2*e,n[s*3+1]<0&&(n[s*3+1]=35,n[s*3]=(Math.random()-.5)*90,n[s*3+2]=-20+(Math.random()-.5)*70);this.rain.geometry.attributes.position.needsUpdate=!0}if(this.embers.visible){const n=this.embers.geometry.attributes.position.array;for(let s=0;s<this.emberCount;s++)n[s*3+1]+=(.8+s%4*.4)*e,n[s*3]+=Math.sin(t+s)*.1*e,n[s*3+1]>24&&(n[s*3+1]=0);this.embers.geometry.attributes.position.needsUpdate=!0}this.nextBolt-=e,this.flash>0?(this.flash=Math.max(0,this.flash-e*2.6),this.flashLight.intensity=this.flash*11,this.moonLight.intensity=1.4+this.flash*2.5,this.boltMat.opacity=this.flash):(this.boltMat.opacity=0,this.flashLight.intensity=0,this.moonLight.intensity=1.4),this.nextBolt<=0&&(this.nextBolt=4+Math.random()*8,this.makeBolt()),this.renderer.render(this.scene,this.camera)}makeBolt(){const e=(Math.random()-.5)*50,t=-45-Math.random()*30,n=[new C(e,32,t)];let s=e,r=32,i=t;for(let o=0;o<9;o++)s+=(Math.random()-.5)*5,r-=2.7+Math.random()*2,i+=(Math.random()-.5)*2,n.push(new C(s,r,i));this.bolt.geometry.dispose(),this.bolt.geometry=new it().setFromPoints(n),this.flash=.9,this.flashLight.position.set(e,24,t)}}class Ym{constructor(e){this.canvas=e,this.renderer=new so({canvas:e,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.outputColorSpace=Et,this.scene=new ao,this.camera=new Nt(34,1,.1,100),this.camera.position.set(4.8,2.9,7.2),this.camera.lookAt(0,.6,0);const t=new lo(9215157,1707788,.75);this.scene.add(t);const n=new Js(16756864,2.1);n.position.set(4,7,5),this.scene.add(n);const s=new Jn(16726832,2.6,16);s.position.set(-4,2,-3),this.scene.add(s);const r=new Jn(3844351,1.4,18);r.position.set(5,2,-4),this.scene.add(r),this.rings=new hn;for(let o=0;o<3;o++){const c=new Le(new aa(2.5+o*.9,2.54+o*.9,48),new ct({color:o===0?13212738:7153447,transparent:!0,opacity:o===0?.55:.25,side:Yt}));c.rotation.x=-Math.PI/2,c.position.y=.01,this.rings.add(c)}this.scene.add(this.rings);const i=new Le(new Ui(11,40),new Ye({color:1578260}));i.rotation.x=-Math.PI/2,i.position.y=-.02,this.scene.add(i),this.car=null,this.active=!1,this.t=0,this.clock=new co,this.resize()}setVehicle(e){this.car&&(this.scene.remove(this.car),this.car.traverse(t=>{var n,s,r,i,o,c,h;t.isMesh&&((s=(n=t.geometry)==null?void 0:n.dispose)==null||s.call(n),(r=t.material)!=null&&r.map&&((o=(i=t.material.map).dispose)==null||o.call(i)),(h=(c=t.material)==null?void 0:c.dispose)==null||h.call(c))})),this.car=Qs(e,{beams:!0,boss:!0}),this.car.position.y=.12,this.car.rotation.y=-.5,this.scene.add(this.car)}resize(){const e=this.canvas.parentElement;if(!e)return;const t=e.clientWidth||600,n=e.clientHeight||360;this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.fov=t/n<1?46:34,this.camera.updateProjectionMatrix()}start(){this.active||(this.active=!0,this.clock.getDelta(),this.loop())}stop(){this.active=!1,this.raf&&cancelAnimationFrame(this.raf)}loop(){if(!this.active)return;this.raf=requestAnimationFrame(()=>this.loop());const e=Math.min(.05,this.clock.getDelta());if(this.t+=e,this.car){this.car.rotation.y=-.5+Math.sin(this.t*.22)*.55,this.car.position.y=.12+Math.sin(this.t*.8)*.02;for(const t of this.car.userData.wheels||[])t.children[0].rotation.y+=e*.3}this.rings.rotation.y+=e*.04,this.renderer.render(this.scene,this.camera)}}const Be=720;function vc(a){let e=a>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Km(a){const e=document.createElement("canvas");e.width=256,e.height=512;const t=e.getContext("2d");t.fillStyle=a.road,t.fillRect(0,0,256,512);const n=vc(a.id.length*7001+11);for(let r=0;r<4500;r++){const i=20+Math.floor(n()*55);t.fillStyle=`rgba(${i},${i-3},${i-4},${.1+n()*.22})`,t.fillRect(n()*256,n()*512,1+n()*3,1+n()*2)}t.strokeStyle="rgba(4,4,5,0.45)";for(let r=0;r<12;r++){t.lineWidth=.8+n()*1.8;let i=n()*256,o=n()*512;t.beginPath(),t.moveTo(i,o);for(let c=0;c<5;c++)i+=(n()-.5)*26,o+=10+n()*30,t.lineTo(i,o);t.stroke()}t.fillStyle="rgba(205,188,142,0.55)",t.fillRect(12,0,3,512),t.fillRect(241,0,3,512),t.fillStyle="rgba(216,182,92,0.66)";for(let r=0;r<6;r++)t.fillRect(125,r*86+12,6,50);t.fillStyle="rgba(12,7,6,0.22)";for(let r=0;r<8;r++)t.beginPath(),t.ellipse(n()*256,n()*512,6+n()*24,4+n()*13,n()*3,0,7),t.fill();const s=new Ni(e);return s.wrapS=s.wrapT=Vs,s.colorSpace=Et,s.anisotropy=4,s}function jm(){const a=document.createElement("canvas");a.width=512,a.height=128;const e=a.getContext("2d");e.fillStyle="#120c0b",e.fillRect(0,0,512,128),e.fillStyle="#a3151b",e.fillRect(0,0,512,10),e.fillRect(0,118,512,10);for(let n=0;n<16;n++)e.fillStyle=n%2?"#d9c89a":"#161212",e.fillRect(n*32,104,32,24);e.font="bold 66px Impact, Arial Black, sans-serif",e.fillStyle="#e8dcc0",e.textAlign="center",e.fillText("HELLRIDE",256,76),e.font="bold 22px monospace",e.fillStyle="#d03a2a",e.fillText("S T A R T   /   F I N I S H",256,100);const t=new Ni(a);return t.colorSpace=Et,t}function Zm(){const a=document.createElement("canvas");a.width=a.height=256;const e=a.getContext("2d"),t=e.createRadialGradient(128,128,2,128,128,128);t.addColorStop(0,"rgba(255,238,190,1)"),t.addColorStop(.14,"rgba(255,185,100,0.9)"),t.addColorStop(.5,"rgba(210,80,40,0.18)"),t.addColorStop(1,"rgba(120,30,20,0)"),e.fillStyle=t,e.fillRect(0,0,256,256);const n=new Ni(a);return n.colorSpace=Et,n}function Jm(a,e){return new Mn({uniforms:{topColor:{value:new Se(a)},horizonColor:{value:new Se(e)}},vertexShader:"varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 topColor; uniform vec3 horizonColor; varying vec3 vPos;
      void main(){ float h = clamp(normalize(vPos).y * 1.4 + 0.15, 0.0, 1.0); vec3 c = mix(horizonColor, topColor, pow(h, 0.72)); gl_FragColor = vec4(c, 1.0); }`,side:Ut,depthWrite:!1,fog:!1})}class Qm{constructor({terrain:e="wasteland",weather:t="cloudy",seed:n=1,quality:s="medium"}={}){this.terrain=xt.find(r=>r.id===e)||xt[0],this.weather=bt.find(r=>r.id===t)||bt[0],this.seed=n,this.quality=s,this.rand=vc(n*7919+this.terrain.id.length*131+this.weather.id.length*17),this.width=15.5,this.group=new hn,this.t=0,this.buildCurve(),this.buildEnvironment(),this.buildRoad(),this.buildGate(),this.buildProps(),this.buildWeather()}buildCurve(){const e=this.rand,t=11,n=[],s=100+e()*36;for(let i=0;i<t;i++){const o=i/t*Math.PI*2+(e()-.5)*.2,c=s*(.72+e()*.63),h=(this.terrain.elevation||2)*(.4+.6*Math.sin(o*3+e()*.7))*(this.terrain.id==="mountains"||this.terrain.id==="volcano"?1:.35);n.push(new C(Math.cos(o)*c,h,Math.sin(o)*c))}n.push(n[0].clone()),this.curve=new zm(n,!0,"catmullrom",.5),this.samples=[];for(let i=0;i<Be;i++){const o=i/Be,c=this.curve.getPointAt(o),h=this.curve.getTangentAt(o);h.y=0,h.normalize();const p=new C(-h.z,0,h.x);this.samples.push({p:c,tan:h,right:p})}const r=this.samples.map(i=>i.p.y);for(let i=0;i<3;i++)for(let o=0;o<Be;o++){const c=r[(o-1+Be)%Be],h=r[o],p=r[(o+1)%Be];r[o]=(c+h*2+p)/4}this.computeLength(),this.samples.forEach((i,o)=>{i.p.y=r[o]})}computeLength(){let e=0;for(let t=0;t<Be;t++){const n=this.samples[t].p,s=this.samples[(t+1)%Be].p;e+=n.distanceTo(s)}this.length=e}buildEnvironment(){const e=this.terrain,t=this.weather;this.skyColor=new Se(e.sky),this.horizonColor=new Se(e.horizon).lerp(new Se(t.tint),.25),this.fogColor=new Se(e.fog).lerp(new Se(t.tint),.35),this.skyMat=Jm("#"+this.skyColor.getHexString(),"#"+this.horizonColor.getHexString()),this.sky=new Le(new Kn(450,24,12),this.skyMat),this.group.add(this.sky);const n=new Le(new Pt(55,55),new ct({map:Zm(),transparent:!0,depthWrite:!1,fog:!1}));n.position.set(-140,90,-210),n.lookAt(0,0,0),this.group.add(n),this.sun=n;const s=new lo(10794440,new Se(e.ground).multiplyScalar(.38),.9);this.group.add(s),this.hemi=s;const r=new Js(16757370,1.35);r.position.set(-60,90,-40),this.group.add(r),this.dir=r;const i=new Js(7901368,.5);i.position.set(40,30,60),this.group.add(i);const o=new Le(new Pt(600,600,1,1),new Ye({color:new Se(e.ground).multiplyScalar(.7)}));o.rotation.x=-Math.PI/2,o.position.y=-.6,this.group.add(o),this.ground=o;const c=this.rand,h=new Ye({color:new Se(e.ground).lerp(this.fogColor,.55),flatShading:!0});for(let p=0;p<26;p++){const u=p/26*Math.PI*2+c()*.15,l=220+c()*80,g=30+c()*85,_=new Le(new qt(24+c()*40,g,5+Math.floor(c()*2)),h);_.position.set(Math.cos(u)*l,g*.34-4,Math.sin(u)*l),_.rotation.y=c()*3,this.group.add(_),this.addDisposable(_)}this.addDisposable(o)}buildRoad(){const{samples:e,width:t}=this,n=t,s=66,r=[],i=[],o=[],c=[],h=[];for(let G=0;G<=Be;G++){const v=e[G%Be],b=v.p.y,k=v.p.x-v.right.x*n/2,F=v.p.z-v.right.z*n/2,N=v.p.x+v.right.x*n/2,X=v.p.z+v.right.z*n/2;r.push(k,b+.06,F,N,b+.06,X);const O=G*(this.length/Be)/7;i.push(0,O,1,O),c.push(v.p.x-v.right.x*s,b-.6,v.p.z-v.right.z*s,v.p.x-v.right.x*(n/2+.7),b-.02,v.p.z-v.right.z*(n/2+.7),v.p.x+v.right.x*(n/2+.7),b-.02,v.p.z+v.right.z*(n/2+.7),v.p.x+v.right.x*s,b-.6,v.p.z+v.right.z*s)}for(let G=0;G<Be;G++){const v=G*2,b=v+1,k=v+2,F=v+3;o.push(v,b,k,b,F,k);const N=G*4;h.push(N,N+1,N+4,N+1,N+5,N+4),h.push(N+1,N+2,N+5,N+2,N+6,N+5),h.push(N+2,N+3,N+6,N+3,N+7,N+6)}const p=new it;p.setAttribute("position",new at(r,3)),p.setAttribute("uv",new at(i,2)),p.setIndex(o),p.computeVertexNormals();const u=new Ye({map:Km(this.terrain),color:"#ffffff"}),l=new Le(p,u);this.group.add(l),this.road=l,this.addDisposable(l);const g=new it;g.setAttribute("position",new at(c,3)),g.setIndex(h),g.computeVertexNormals();const _=new Ye({color:new Se(this.terrain.ground),flatShading:!0}),f=new Le(g,_);this.group.add(f),this.land=f,this.addDisposable(f);const d=new dt(.18,.9,.18),m=new Ye({color:new Se(this.terrain.accent).multiplyScalar(.55)}),x=new $a(d,m,Math.floor(Be/10)*2),M=new gt;let E=0;for(let G=0;G<Be;G+=10){const v=e[G];for(const b of[-1,1])M.position.set(v.p.x+v.right.x*b*(n/2+1.2),v.p.y+.45,v.p.z+v.right.z*b*(n/2+1.2)),M.rotation.y=Math.atan2(v.tan.x,v.tan.z),M.updateMatrix(),x.setMatrixAt(E++,M.matrix)}x.count=E,this.group.add(x),this.addDisposable(x);const R=new Kn(.16,6,5),A=new ct({color:this.terrain.accent}),w=new $a(R,A,80);let L=0;for(let G=0;G<Be;G+=20){const v=e[G];for(const b of[-1,1])M.position.set(v.p.x+v.right.x*b*(n/2+1.25),v.p.y+1.02,v.p.z+v.right.z*b*(n/2+1.25)),M.rotation.set(0,0,0),M.updateMatrix(),w.setMatrixAt(L++,M.matrix)}w.count=L,this.group.add(w),this.addDisposable(w)}buildGate(){const e=this.samples[0],t=Math.atan2(e.tan.x,e.tan.z),n=new hn;n.position.copy(e.p),n.rotation.y=t;const s=new Ye({color:"#24211f"}),r=new Ye({color:"#8f171b"});for(const u of[-1,1]){const l=new Le(new dt(1.05,8,1.05),s);l.position.set(u*10.5,4,0),n.add(l);const g=new Le(new qt(.72,1.2,4),r);g.position.set(u*10.5,8.6,0),g.rotation.y=Math.PI/4,n.add(g)}const i=new Le(new dt(21,3.1,.32),new ct({map:jm()}));i.position.set(0,7.3,0),n.add(i);const o=document.createElement("canvas");o.width=256,o.height=64;const c=o.getContext("2d");for(let u=0;u<16;u++)for(let l=0;l<4;l++)c.fillStyle=(u+l)%2?"#e7ddc3":"#171313",c.fillRect(u*16,l*16,16,16);const h=new Ni(o);h.colorSpace=Et;const p=new Le(new Pt(this.width,3.2),new ct({map:h}));p.rotation.x=-Math.PI/2,p.position.y=.1,n.add(p),this.group.add(n),this.gate=n,this.startLights=[];for(let u=0;u<3;u++){const l=new Le(new Kn(.28,8,6),new ct({color:"#3a1010"}));l.position.set(-1.8+u*1.8,5.55,.25),n.add(l),this.startLights.push(l)}}buildProps(){const e=this.terrain.props;for(const t of e)this.buildProp(t);e.includes("wreck")||this.buildProp("wreck")}propPositions(e,t=18,n=55){const s=[],r=this.rand;for(let i=0;i<e;i++){const o=Math.floor(r()*Be),c=this.samples[o],h=r()>.5?1:-1,p=t+r()*(n-t),u=p<36?c.p.y-.15:-.5;s.push({x:c.p.x+c.right.x*h*p,y:u,z:c.p.z+c.right.z*h*p,rot:r()*Math.PI*2,scale:.7+r()*1.2,tangent:c.tan,side:h})}return s}buildInstanced(e,t,n,s){if(!n.length)return null;const r=new $a(e,t,n.length),i=new gt;return n.forEach((o,c)=>{s(i,o,c),i.updateMatrix(),r.setMatrixAt(c,i.matrix)}),this.group.add(r),this.addDisposable(r),r}buildProp(e){const t=this.terrain,n=new Se(t.ground),s=new Se(t.accent),r=new Ye({color:n.clone().multiplyScalar(.75),flatShading:!0}),i=new Ye({color:n.clone().multiplyScalar(.35),flatShading:!0}),o=new Ye({color:"#2b2927",flatShading:!0}),c=new Ye({color:"#bdb198",flatShading:!0}),h=new ct({color:s}),p=this.propPositions(e==="mountain"?14:34,e==="mountain"?40:17,e==="mountain"?100:62);if(e==="rock")this.buildInstanced(new es(1,0),r,p,(u,l)=>{u.position.set(l.x,l.y+l.scale*.6,l.z),u.rotation.set(l.rot,l.rot*1.4,l.rot*.4),u.scale.set(l.scale*2.2,l.scale*1.5,l.scale*2)});else if(e==="mountain")this.buildInstanced(new qt(1,1,5),r,p,(u,l)=>{u.position.set(l.x,l.y+l.scale*5,l.z),u.scale.set(l.scale*18,l.scale*18,l.scale*18),u.rotation.y=l.rot});else if(e==="dune")this.buildInstanced(new Kn(1,7,5),new Ye({color:n.clone().multiplyScalar(1.15)}),p,(u,l)=>{u.position.set(l.x,l.y-l.scale*.7,l.z),u.scale.set(l.scale*9,l.scale*2.5,l.scale*7)});else if(e==="pine")this.buildInstanced(new Xt(.28,.38,4,5),i,p,(u,l)=>{u.position.set(l.x,l.y+l.scale*2,l.z),u.scale.setScalar(l.scale),u.rotation.y=l.rot}),this.buildInstanced(new qt(2.4,7,6),new Ye({color:new Se(t.ground).multiplyScalar(.6),flatShading:!0}),p,(u,l)=>{u.position.set(l.x,l.y+l.scale*5.4,l.z),u.scale.set(l.scale*1.3,l.scale*1.6,l.scale*1.3),u.rotation.y=l.rot});else if(e==="tree"||e==="palm"){this.buildInstanced(new Xt(.35,.55,6,5),i,p,(l,g)=>{l.position.set(g.x,g.y+g.scale*3,g.z),l.scale.setScalar(g.scale),l.rotation.z=(g.rot-3.14)*.03});const u=new Se(t.ground).multiplyScalar(.72).lerp(new Se(t.accent),.18);this.buildInstanced(new oo(2.4,0),new Ye({color:u,flatShading:!0}),p,(l,g)=>{l.position.set(g.x,g.y+g.scale*6.4,g.z),l.scale.set(g.scale*1.5,g.scale*(e==="palm"?.55:1.2),g.scale*1.5),l.rotation.y=g.rot})}else if(e==="cactus")this.buildInstanced(new Xt(.45,.55,4.5,6),new Ye({color:"#4c6138",flatShading:!0}),p,(u,l)=>{u.position.set(l.x,l.y+l.scale*2.2,l.z),u.scale.setScalar(l.scale),u.rotation.y=l.rot});else if(e==="fern")this.buildInstanced(new qt(1.7,3.2,5),new Ye({color:"#305a2f",flatShading:!0}),p,(u,l)=>{u.position.set(l.x,l.y+l.scale*1.2,l.z),u.scale.setScalar(l.scale),u.rotation.y=l.rot});else if(e==="wreck"||e==="rubble"||e==="cart")this.buildInstanced(new dt(2.2,.9,4.6),new Ye({color:"#4c3a30",flatShading:!0}),p,(u,l)=>{u.position.set(l.x,l.y+.55,l.z),u.rotation.set((l.rot-3)*.05,l.rot,(l.rot-3)*.03),u.scale.setScalar(l.scale)}),this.buildInstanced(new dt(1.8,.7,1.8),i,p,(u,l)=>{u.position.set(l.x,l.y+1.22,l.z-.55*Math.cos(l.rot)),u.rotation.y=l.rot,u.scale.setScalar(l.scale)});else if(e==="tower"){this.buildInstanced(new dt(6,16,6),new Ye({color:n.clone().multiplyScalar(.5),flatShading:!0}),p,(l,g)=>{l.position.set(g.x,g.y+g.scale*8,g.z),l.scale.set(g.scale*1.4,g.scale*(1.5+g.rot),g.scale*1.4),l.rotation.y=g.rot*.1});const u=p.filter((l,g)=>g%3===0);this.buildInstanced(new dt(.16,2.2,.16),h,u,(l,g)=>{l.position.set(g.x+g.side*3.2,g.y+g.scale*12,g.z),l.scale.set(1,g.scale*2,1)})}else if(e==="house")this.buildInstanced(new dt(7,5,6),new Ye({color:n.clone().multiplyScalar(1.25),flatShading:!0}),p,(u,l)=>{u.position.set(l.x,l.y+l.scale*2.5,l.z),u.scale.setScalar(l.scale),u.rotation.y=l.rot}),this.buildInstanced(new qt(5.1,3,4),i,p,(u,l)=>{u.position.set(l.x,l.y+l.scale*5.8,l.z),u.scale.setScalar(l.scale),u.rotation.y=l.rot+Math.PI/4});else if(e==="bunker")this.buildInstanced(new dt(8,3.2,5),new Ye({color:"#514d42",flatShading:!0}),p,(u,l)=>{u.position.set(l.x,l.y+1.6,l.z),u.scale.setScalar(l.scale),u.rotation.y=l.rot}),this.buildInstanced(new dt(1.4,1.6,.2),o,p.filter((u,l)=>l%4===0),(u,l)=>{u.position.set(l.x,l.y+1.6,l.z),u.rotation.y=l.rot});else if(e==="pylon")this.buildInstanced(new Xt(.32,.5,10,4),o,p,(u,l)=>{u.position.set(l.x,l.y+l.scale*5,l.z),u.scale.setScalar(l.scale),u.rotation.y=l.rot}),this.buildInstanced(new dt(.12,.12,10),i,p.filter((u,l)=>l%2===0),(u,l)=>{u.position.set(l.x,l.y+l.scale*8,l.z),u.rotation.y=l.rot});else if(e==="bones")this.buildInstanced(new es(.7,0),c,p,(u,l)=>{u.position.set(l.x,l.y+.35,l.z),u.scale.set(l.scale,l.scale*.8,l.scale*1.15),u.rotation.set(l.rot,l.rot,l.rot)}),this.buildInstanced(new Xt(.18,.18,5,5),c,p.slice(0,20),(u,l)=>{u.position.set(l.x+1.5,l.y+.2,l.z),u.rotation.set(Math.PI/2,l.rot,0)});else if(e==="ice")this.buildInstanced(new qt(1.6,6,5),new Ye({color:"#bfe9f2",flatShading:!0,transparent:!0,opacity:.9}),p,(u,l)=>{u.position.set(l.x,l.y+l.scale*2,l.z),u.scale.set(l.scale,l.scale*2.5,l.scale),u.rotation.y=l.rot});else if(e==="lava"){const u=new ct({color:"#ff6a24"});this.buildInstanced(new Ui(1,10),u,p.slice(0,22),(l,g)=>{l.position.set(g.x,g.y+.08,g.z),l.rotation.x=-Math.PI/2,l.scale.set(g.scale*4,g.scale*2.4,1)}),this.buildInstanced(new qt(1,1,5),new Ye({color:"#2b1b1a",emissive:"#5c1c0e",flatShading:!0}),p,(l,g)=>{l.position.set(g.x,g.y+g.scale*2.5,g.z),l.scale.set(g.scale*2,g.scale*5,g.scale*2),l.rotation.y=g.rot})}else e==="sign"?(this.buildInstanced(new dt(.22,5,.22),o,p.filter((u,l)=>l%3===0),(u,l)=>{u.position.set(l.x,l.y+2.5,l.z),u.scale.setScalar(l.scale)}),this.buildInstanced(new dt(4.5,2,.18),h,p.filter((u,l)=>l%3===0),(u,l)=>{u.position.set(l.x,l.y+4.2,l.z),u.rotation.y=l.rot,u.scale.setScalar(l.scale)})):e==="mine"?(this.buildInstanced(new dt(7,6,5),o,p,(u,l)=>{u.position.set(l.x,l.y+3,l.z),u.rotation.y=l.rot,u.scale.setScalar(l.scale)}),this.buildInstanced(new dt(2.8,3.2,.3),new ct({color:"#0a0807"}),p,(u,l)=>{u.position.set(l.x,l.y+1.6,l.z),u.rotation.y=l.rot})):e==="idol"?(this.buildInstanced(new Xt(1.4,1.8,9,4),new Ye({color:"#55503c",flatShading:!0}),p,(u,l)=>{u.position.set(l.x,l.y+l.scale*4.5,l.z),u.scale.setScalar(l.scale),u.rotation.y=l.rot}),this.buildInstanced(new Kn(1.3,6,5),new ct({color:s}),p,(u,l)=>{u.position.set(l.x,l.y+l.scale*9.2,l.z),u.scale.setScalar(l.scale)})):e==="wire"?this.buildInstanced(new Xt(.12,.12,3,4),o,p,(u,l)=>{u.position.set(l.x,l.y+1.5,l.z),u.scale.setScalar(l.scale)}):e==="crater"&&this.buildInstanced(new Ui(1,10),new Ye({color:"#211c19"}),p,(u,l)=>{u.position.set(l.x,l.y+.05,l.z),u.rotation.x=-Math.PI/2,u.scale.set(l.scale*4,l.scale*3,1)})}buildWeather(){const e=this.weather.id,t=this.rand;if(this.precip=null,this.tornado=null,this.water=null,this.quicksand=null,this.flash=0,this.nextStrike=6,e==="acid"||e==="storm"||e==="hurricane"){const n=this.quality==="low"?600:1300,s=new Float32Array(n*3);for(let o=0;o<n;o++)s[o*3]=(t()-.5)*100,s[o*3+1]=t()*45,s[o*3+2]=(t()-.5)*100;const r=new it;r.setAttribute("position",new wt(s,3));const i=e==="acid"?"#8fdc5a":e==="storm"?"#a8bfd8":"#93b9c2";this.rain=new Di(r,new ti({color:i,size:.12,transparent:!0,opacity:.55,depthWrite:!1})),this.rain.frustumCulled=!1,this.group.add(this.rain),this.addDisposable(this.rain),this.rainCount=n}if(e==="twister"&&(this.tornado=this.makeTornado(),this.group.add(this.tornado)),e==="flood"){const n=new ct({color:"#2d4540",transparent:!0,opacity:.5,depthWrite:!1}),s=new Le(new Pt(420,420),n);s.rotation.x=-Math.PI/2,s.position.y=-.18,this.group.add(s),this.water=s,this.addDisposable(s)}if(e==="quicksand"){const n=document.createElement("canvas");n.width=n.height=128;const s=n.getContext("2d");s.fillStyle="#5a4325",s.fillRect(0,0,128,128);for(let c=0;c<48;c++)s.fillStyle=`rgba(${90+t()*60},${65+t()*40},${25+t()*30},0.5)`,s.beginPath(),s.arc(t()*128,t()*128,3+t()*14,0,7),s.fill();const r=new Ni(n),i=new Ye({map:r,color:"#c0a06a"}),o=new Le(new Pt(420,420),i);o.rotation.x=-Math.PI/2,o.position.y=-.55,this.group.add(o),this.quicksand=o,this.addDisposable(o)}if(e==="clear"||e==="cloudy"){const s=new Float32Array(480);for(let i=0;i<160;i++)s[i*3]=(t()-.5)*90,s[i*3+1]=t()*20,s[i*3+2]=(t()-.5)*90;const r=new it;r.setAttribute("position",new wt(s,3)),this.ash=new Di(r,new ti({color:e==="clear"?"#e6b27c":"#9c948c",size:.1,transparent:!0,opacity:.4,depthWrite:!1})),this.group.add(this.ash),this.addDisposable(this.ash)}this.strikeLight=new Jn(13624575,0,120),this.strikeLight.position.set(0,30,0),this.group.add(this.strikeLight),this.boltMat=new Ks({color:15134975,transparent:!0,opacity:0}),this.bolt=new Gr(new it,this.boltMat),this.bolt.frustumCulled=!1,this.group.add(this.bolt),(e==="acid"||e==="storm"||e==="hurricane"||e==="flood")&&(this.road.material.color=new Se("#a8b2ac"))}makeTornado(){const e=new hn,t=new ct({color:"#8c7b65",transparent:!0,opacity:.2,side:Yt,depthWrite:!1}),n=[];for(let i=0;i<7;i++){const o=new Le(new Xt(1.2+i*1.4,2.4+i*2.3,7,16,1,!0),t);o.position.y=3+i*5,o.userData.spin=.7+Math.random()*.8,e.add(o),n.push(o)}const s=this.samples[Math.floor(this.samples.length*.68)],r=this.rand()>.5?1:-1;return e.position.set(s.p.x+s.right.x*r*38,s.p.y-1,s.p.z+s.right.z*r*38),e.userData.rings=n,e.userData.radius=20,e}nearest(e,t=0,n=46){let s=-1,r=1/0;const i=t-n,o=t+n;for(let l=i;l<=o;l++){const g=(l%Be+Be)%Be,_=this.samples[g],f=e.x-_.p.x,d=e.z-_.p.z,m=f*f+d*d;m<r&&(r=m,s=g)}if(r>900)for(let l=0;l<Be;l+=8){const g=this.samples[l],_=e.x-g.p.x,f=e.z-g.p.z,d=_*_+f*f;d<r&&(r=d,s=l)}const c=this.samples[s],h=e.x-c.p.x,p=e.z-c.p.z,u=h*c.right.x+p*c.right.z;return{index:s,distance:Math.sqrt(r),lateral:u,sample:c}}sampleAt(e){return this.samples[(e%Be+Be)%Be]}worldAt(e,t=0,n=0){const s=this.sampleAt(e);return new C(s.p.x+s.right.x*t,s.p.y+n,s.p.z+s.right.z*t)}startPose(e=0){const t=Math.floor(e/2),n=e%2,s=18+t*13,r=this.sampleAt(s),i=(n===0?-1:1)*3.6;return{pos:new C(r.p.x+r.right.x*i,r.p.y+.02,r.p.z+r.right.z*i),yaw:Math.atan2(r.tan.x,r.tan.z),index:s,lateral:i}}applyToScene(e){e.add(this.group),e.background=this.skyColor.clone().lerp(new Se(this.weather.tint),.08);const t=.0048*this.weather.fog;e.fog=new ia(this.fogColor.getHex(),t)}update(e,t=null){this.t+=e;const n=this.weather.id;if(this.rain){const s=this.rain.geometry.attributes.position.array,r=this.weather.wind,i=n==="hurricane"?36:22;for(let o=0;o<this.rainCount;o++)s[o*3+1]-=i*e,s[o*3]+=(2.2+r*5)*e,s[o*3+2]+=r*1.4*e,s[o*3+1]<-2&&(s[o*3+1]=40,s[o*3]=(Math.random()-.5)*110,s[o*3+2]=(Math.random()-.5)*110);this.rain.geometry.attributes.position.needsUpdate=!0,this.rain.position.x=t?t.x*.35:0,this.rain.position.z=t?t.z*.35:0}if(this.ash){const s=this.ash.geometry.attributes.position.array;for(let r=0;r<160;r++)s[r*3+1]+=(.4+r%3*.3)*e,s[r*3]+=Math.sin(this.t+r)*.08*e,s[r*3+1]>20&&(s[r*3+1]=0);this.ash.geometry.attributes.position.needsUpdate=!0}if(this.tornado){for(const s of this.tornado.userData.rings)s.rotation.y+=s.userData.spin*e;this.tornado.rotation.y+=.08*e}this.water&&(this.water.material.opacity=.42+Math.sin(this.t*1.2)*.06),this.sun&&(this.sun.position.y=90+Math.sin(this.t*.1)*2),(n==="storm"||n==="acid"||n==="hurricane")&&(this.nextStrike-=e,this.flash>0?(this.flash=Math.max(0,this.flash-e*2.8),this.boltMat.opacity=this.flash,this.strikeLight.intensity=this.flash*14,this.hemi.intensity=.9+this.flash*1.6):(this.boltMat.opacity=0,this.strikeLight.intensity=0,this.hemi.intensity=.9),this.nextStrike<=0&&(this.nextStrike=5+Math.random()*7,this.triggerLightning(t)))}triggerLightning(e=null){let t=(e==null?void 0:e.x)??0,n=(e==null?void 0:e.z)??0;t+=(Math.random()-.5)*50,n+=(Math.random()-.5)*50;const s=[new C(t,45,n)];let r=t,i=45,o=n;for(let c=0;c<8;c++)r+=(Math.random()-.5)*5,i-=4+Math.random()*2.5,o+=(Math.random()-.5)*3,s.push(new C(r,i,o));return this.bolt.geometry.dispose(),this.bolt.geometry=new it().setFromPoints(s),this.flash=1,this.strikeLight.position.set(t,25,n),this.lastStrike={x:t,z:n},{x:t,z:n}}addDisposable(e){this._disposables||(this._disposables=[]),this._disposables.push(e)}dispose(){this.group.traverse(e=>{var t,n,s,r,i;if(e.isMesh||e.isPoints||e.isLine){(n=(t=e.geometry)==null?void 0:t.dispose)==null||n.call(t);const o=Array.isArray(e.material)?e.material:[e.material];for(const c of o)c&&(c.map&&((r=(s=c.map).dispose)==null||r.call(s)),(i=c.dispose)==null||i.call(c))}}),this.group.removeFromParent()}}const $t=a=>440*Math.pow(2,(a-69)/12);class eg{constructor(){this.ctx=null,this.master=null,this.music=null,this.sfxBus=null,this.vol={master:.8,music:.7,sfx:.85},this.scene=null,this.timer=null,this.nextTime=0,this.step=0,this.engine=null,this.started=!1}ensure(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.master=this.ctx.createGain(),this.music=this.ctx.createGain(),this.sfxBus=this.ctx.createGain(),this.music.connect(this.master),this.sfxBus.connect(this.master),this.master.connect(this.ctx.destination),this.applyVolumes(),this.started=!0)}applyVolumes(){if(!this.ctx)return;const e=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.vol.master,e,.05),this.music.gain.setTargetAtTime(this.vol.music*.7,e,.05),this.sfxBus.gain.setTargetAtTime(this.vol.sfx,e,.05)}setVolumes({master:e,music:t,sfx:n}={}){e!=null&&(this.vol.master=e),t!=null&&(this.vol.music=t),n!=null&&(this.vol.sfx=n),this.applyVolumes()}setScene(e){this.ensure(),this.ctx&&this.scene!==e&&(this.scene=e,this.step=0,this.nextTime=this.ctx.currentTime+.08,this.timer&&clearInterval(this.timer),e&&(this.timer=setInterval(()=>this.scheduler(),25)))}scheduler(){if(!this.ctx||!this.scene)return;const t=60/(this.scene==="race"?136:this.scene==="results"?92:74)/4;for(;this.nextTime<this.ctx.currentTime+.2;)this.playStep(this.step,this.nextTime,t),this.step=(this.step+1)%64,this.nextTime+=t}playStep(e,t,n){const s=this.scene==="menu"||this.scene==="results",r=Math.floor(e/16),i=e%16,p=(s?[[50,53,57,62],[46,50,53,58],[43,50,55,58],[45,49,52,57]]:[[38,50,53,57],[36,48,52,55],[34,46,50,53],[33,45,49,52]])[r%4];if(s){if(i===0&&(p.slice(0,3).forEach((u,l)=>this.tone($t(u),t,n*15,.055,"sawtooth",{filter:520+l*90,attack:.9,release:1.8,detune:l*3})),this.tone($t(p[0]-12),t,n*16,.07,"sine",{attack:.5,release:2})),i%2===0){const u=[0,0,7,0,10,7,0,5],l=p[0]-12+u[i/2%8];this.tone($t(l),t,n*1.7,.085,"sawtooth",{filter:340,attack:.02,release:.25})}(i===0||i===6||i===10)&&this.kick(t,i===0?.2:.12,s?82:100),i===8&&r%2===0&&this.tone($t(p[2]+24),t,1.8,.035,"triangle",{attack:.005,release:1.6}),i===12&&r===3&&this.tone($t(p[1]+12),t,1.2,.04,"sawtooth",{filter:1800,attack:.01,release:1})}else{i===0&&this.tone($t(p[0]-12),t,n*14,.1,"sawtooth",{filter:260,attack:.1,release:.6});const u=[0,0,12,0,7,0,10,12];if(i%2===0){const l=p[0]+u[i/2%8];this.tone($t(l-12),t,n*1.45,.105,"square",{filter:300,attack:.005,release:.16})}(i===0||i===6)&&p.slice(1).forEach(l=>this.tone($t(l+12),t,n*2.2,.034,"sawtooth",{filter:2100,attack:.01,release:.25,detune:4})),i===12&&r%2===1&&(this.tone($t(p[2]+12),t,n*2,.045,"square",{filter:1200,attack:.01,release:.4}),this.tone($t(p[3]+12),t+n*.5,n*1.6,.04,"square",{filter:1200,attack:.01,release:.4})),(i===0||i===4||i===8||i===12)&&this.kick(t,i===0?.22:.15,96),(i===2||i===10)&&this.snare(t,.1),i%2===1&&this.hat(t,.025)}}tone(e,t,n,s,r="sine",i={}){if(!this.ctx)return;const o=this.ctx.createOscillator(),c=this.ctx.createGain(),h=this.ctx.createBiquadFilter();o.type=r,o.frequency.setValueAtTime(e,t),i.detune&&o.detune.setValueAtTime(i.detune,t),h.type="lowpass",h.frequency.setValueAtTime(i.filter||1600,t),h.Q.value=i.q||.7;const p=i.attack??.02,u=i.release??.3;c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(Math.max(2e-4,s),t+p),c.gain.setTargetAtTime(1e-4,t+Math.max(p,n-u),Math.max(.02,u/3)),o.connect(h),h.connect(c),c.connect(this.music),o.start(t),o.stop(t+n+.1)}kick(e,t=.2,n=100){if(!this.ctx)return;const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,e),s.frequency.exponentialRampToValueAtTime(32,e+.22),r.gain.setValueAtTime(t,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.32),s.connect(r),r.connect(this.music),s.start(e),s.stop(e+.34)}snare(e,t=.1){if(!this.ctx)return;const s=this.ctx.createBuffer(1,this.ctx.sampleRate*.16,this.ctx.sampleRate),r=s.getChannelData(0);for(let h=0;h<r.length;h++)r[h]=(Math.random()*2-1)*(1-h/r.length);const i=this.ctx.createBufferSource();i.buffer=s;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=1700,o.Q.value=.8;const c=this.ctx.createGain();c.gain.value=t,i.connect(o),o.connect(c),c.connect(this.music),i.start(e)}hat(e,t=.03){if(!this.ctx)return;const s=this.ctx.createBuffer(1,this.ctx.sampleRate*.045,this.ctx.sampleRate),r=s.getChannelData(0);for(let h=0;h<r.length;h++)r[h]=(Math.random()*2-1)*Math.pow(1-h/r.length,2);const i=this.ctx.createBufferSource();i.buffer=s;const o=this.ctx.createBiquadFilter();o.type="highpass",o.frequency.value=6500;const c=this.ctx.createGain();c.gain.value=t,i.connect(o),o.connect(c),c.connect(this.music),i.start(e)}sfx(e,t={}){if(this.ensure(),!this.ctx||this.vol.sfx<=.001)return;const n=this.ctx.currentTime;this.sfxBus,e==="click"?this.blip(n,420,.06,.08,"square"):e==="back"?this.blip(n,240,.09,.07,"square"):e==="count"?this.blip(n,320,.18,.16,"square",600):e==="go"?(this.blip(n,620,.45,.2,"sawtooth",1240),this.kickSfx(n,.2,90)):e==="boost"?this.whoosh(n,.45,.16,280,1800):e==="hit"?(this.noiseSfx(n,.12,.16,420),this.blip(n,90,.16,.1,"square",40)):e==="scrape"?this.noiseSfx(n,.08,.06,2600):e==="lightning"?(this.noiseSfx(n,.7,.3,900),this.kickSfx(n,.15,70)):e==="win"?[58,62,65,70,74].forEach((s,r)=>this.musicBlip(n+r*.09,$t(s),.5,.09,"sawtooth")):e==="lose"?[58,55,51,46].forEach((s,r)=>this.musicBlip(n+r*.14,$t(s),.7,.09,"sawtooth")):e==="reward"?[70,74,77,82].forEach((s,r)=>this.blip(n+r*.07,$t(s),.35,.08,"triangle")):e==="siren"?this.siren(n):e==="thunder"?this.noiseSfx(n,1.2,.22,320):e==="ui_open"&&this.blip(n,180,.2,.08,"sawtooth",380)}blip(e,t,n,s,r="square",i=null){const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type=r,o.frequency.setValueAtTime(t,e),i&&o.frequency.exponentialRampToValueAtTime(i,e+n),c.gain.setValueAtTime(s,e),c.gain.exponentialRampToValueAtTime(1e-4,e+n),o.connect(c),c.connect(this.sfxBus),o.start(e),o.stop(e+n+.02)}blip2(e,t,n,s,r,i="square"){this.blip(e,t,s,r,i,n)}kickSfx(e,t,n){const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,e),s.frequency.exponentialRampToValueAtTime(30,e+.28),r.gain.setValueAtTime(t,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.3),s.connect(r),r.connect(this.sfxBus),s.start(e),s.stop(e+.32)}noiseSfx(e,t,n,s){const r=t,i=this.ctx.createBuffer(1,this.ctx.sampleRate*r,this.ctx.sampleRate),o=i.getChannelData(0);for(let u=0;u<o.length;u++)o[u]=(Math.random()*2-1)*Math.pow(1-u/o.length,1.4);const c=this.ctx.createBufferSource();c.buffer=i;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.value=s;const p=this.ctx.createGain();p.gain.value=n,c.connect(h),h.connect(p),p.connect(this.sfxBus),c.start(e)}whoosh(e,t,n,s,r){const i=t,o=this.ctx.createBuffer(1,this.ctx.sampleRate*i,this.ctx.sampleRate),c=o.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=(Math.random()*2-1)*Math.sin(l/c.length*Math.PI);const h=this.ctx.createBufferSource();h.buffer=o;const p=this.ctx.createBiquadFilter();p.type="bandpass",p.Q.value=1.2,p.frequency.setValueAtTime(s,e),p.frequency.exponentialRampToValueAtTime(r,e+t);const u=this.ctx.createGain();u.gain.value=n,h.connect(p),p.connect(u),u.connect(this.sfxBus),h.start(e)}siren(e){const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(580,e),t.frequency.linearRampToValueAtTime(940,e+.35),t.frequency.linearRampToValueAtTime(580,e+.7),n.gain.setValueAtTime(1e-4,e),n.gain.linearRampToValueAtTime(.08,e+.05),n.gain.linearRampToValueAtTime(1e-4,e+.75),t.connect(n),n.connect(this.sfxBus),t.start(e),t.stop(e+.8)}musicBlip(e,t,n,s,r){const i=this.ctx.createOscillator(),o=this.ctx.createGain();i.type=r,i.frequency.setValueAtTime(t,e),o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(s,e+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+n),i.connect(o),o.connect(this.music),i.start(e),i.stop(e+n+.02)}startEngine(){if(this.ensure(),!this.ctx||this.engine)return;const e=this.ctx.createOscillator(),t=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();e.type="sawtooth",t.type="square",e.frequency.value=45,t.frequency.value=90,n.type="lowpass",n.frequency.value=420,n.Q.value=1.4,s.gain.value=1e-4,e.connect(n),t.connect(n),n.connect(s),s.connect(this.sfxBus),e.start(),t.start(),s.gain.setTargetAtTime(.045,this.ctx.currentTime,.5),this.engine={o1:e,o2:t,f:n,g:s}}updateEngine(e,t=0,n=!1){if(!this.engine||!this.ctx)return;const s=this.ctx.currentTime,r=Math.min(1,e/60);this.engine.o1.frequency.setTargetAtTime(42+r*150+(n?60:0),s,.06),this.engine.o2.frequency.setTargetAtTime(84+r*290+(n?110:0),s,.06),this.engine.f.frequency.setTargetAtTime(300+r*1200+t*240,s,.1),this.engine.g.gain.setTargetAtTime(.028+r*.035+(n?.02:0),s,.08)}stopEngine(){if(!this.engine||!this.ctx)return;const e=this.engine;e.g.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.15),setTimeout(()=>{try{e.o1.stop(),e.o2.stop()}catch{}},500),this.engine=null}stopAll(){this.timer&&clearInterval(this.timer),this.timer=null,this.scene=null,this.stopEngine()}}const ye=new eg,Ds=[{name:"Marrow",origin:"ghoul",vehicle:"rust_reaper",color:"#4e4b3f",accent:"#b6a25a"},{name:"Vex",origin:"mutant",vehicle:"acid_runner",color:"#43552b",accent:"#b6ff37"},{name:"Sister Ash",origin:"ghost",vehicle:"hearse_taxi",color:"#2a3138",accent:"#9fc4d6"},{name:"Grimm",origin:"demon",vehicle:"midnight_coffin",color:"#251314",accent:"#ff3b30"},{name:"Halo",origin:"demigod",vehicle:"valkyrie",color:"#b8b2a2",accent:"#ffcf6a"},{name:"Cinder",origin:"human",vehicle:"dune_worm",color:"#7e4d2d",accent:"#ff8a3d"},{name:"Pale Kid",origin:"ghost",vehicle:"bubble_bumper",color:"#5d4a66",accent:"#b6ffcf"},{name:"Brick",origin:"mutant",vehicle:"wool_reaper",color:"#7b745f",accent:"#8f171b"}],nn=(a,e,t)=>Math.max(e,Math.min(t,a)),Ns=(a,e,t)=>a+(e-a)*t,ji=a=>`hsl(${Math.round(120-nn(a,0,100)*1.2)} 82% ${Math.round(52-nn(a,0,100)*.14)}%)`,Il=(a,e)=>{let t=a-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t},Si=Object.fromEntries(pt.map(a=>[a.id,a])),Dl=["rust_reaper","acid_runner","dune_worm","hearse_taxi","foxfire","bubble_bumper","midnight_coffin","boost_hog"];class tg{constructor(e,t){this.canvas=e,this.opts=t,this.settings=t.settings||{},this.profile=t.profile,this.terrain=xt.find(n=>n.id===t.terrain)||xt[0],this.weather=bt.find(n=>n.id===t.weather)||bt[0],this.mode=t.mode||"race",this.laps=t.laps||2,this.difficulty=t.difficulty||{id:"normal",ai:.94},this.boss=t.bossId?yi.find(n=>n.id===t.bossId):null,this.vehicle=Si[t.vehicleId]||pt[0],this.origin=mt.find(n=>{var s;return n.id===((s=this.profile)==null?void 0:s.origin)})||mt[0],this.paused=!1,this.finished=!1,this.finishing=0,this.clock=new co,this.elapsed=0,this.t=0,this.hudTimer=0,this.mapTimer=0,this.shake=0,this.steerSmooth=0,this.input={left:!1,right:!1,accel:!1,brake:!1,handbrake:!1,nitro:!1,special:!1},this.specialCharge=100,this.specialActive=0,this.specialLatch=!1,this.specialColor=this.origin.id==="demon"?"#ff3b30":this.origin.id==="ghost"?"#8be7ff":this.origin.id==="mutant"?"#8cff3b":this.origin.id==="ghoul"?"#c9d36a":this.origin.id==="demigod"?"#ffd166":"#ff9a3d",this.specialName={human:"ADRENALINE",mutant:"TOXIC RAM",ghost:"PHASE",ghoul:"FEAST",demon:"HELLFIRE",demigod:"THUNDERCLAP"}[this.origin.id]||"SPECIAL",this.tutorial=this.mode==="tutorial"?{step:0,progress:0,throttleTime:0,steerTime:0,brakeTime:0,nitroUses:0,shown:!1}:null,this.raceTime=0,this.lapStart=0,this.bestLap=null,this.nitro=100,this.boostTime=0,this.hull=100,this.zoneDamage={front:0,left:0,right:0,rear:0},this.respawnInvuln=0,this.respawns=0,this.lastCheckpoint={index:18,lap:1},this.cargo=100,this.comfort=100,this.escapeLeft=t.escapeTime||60,this.gore=this.settings.gore||"blood",this.impact=[],this.collisionCooldown=0,this.wallCooldown=0,this.lastStrike=null,this.firstStepTime=0,this.state="countdown",this.countdown=4.2,this.hudWarningCd=0,this.position=1,this.finishOrder=0,this.onFinish=t.onFinish||(()=>{}),this.onPause=t.onPause||(()=>{}),this.onQuit=t.onQuit||(()=>{}),this.initRenderer(),this.initScene(),this.buildHUD(),this.bind(),this.audioStarted=!1,this.loop=this.loop.bind(this),this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize),document.addEventListener("visibilitychange",this.onVisibility),this.raf=requestAnimationFrame(this.loop)}initRenderer(){this.renderer=this.canvas._hellrideRenderer,this.renderer||(this.renderer=new so({canvas:this.canvas,antialias:this.settings.quality!=="low",powerPreference:"high-performance"}),this.renderer.outputColorSpace=Et,this.canvas._hellrideRenderer=this.renderer);const e=this.settings.quality||"medium";this.renderer.setPixelRatio(e==="low"?1:Math.min(e==="high"?2:1.5,window.devicePixelRatio||1)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.renderer.setClearColor(723725,1)}initScene(){this.scene=new ao,this.camera=new Nt(62,window.innerWidth/window.innerHeight,.3,500),this.track=new Qm({terrain:this.terrain.id,weather:this.weather.id,seed:this.opts.seed||Math.floor(Math.random()*9999),quality:this.settings.quality}),this.track.applyToScene(this.scene),this.racers=[],this.player=this.makePlayer(),this.lastCheckpoint={index:this.player.index,lap:1},this.buildOpponents(),this.updatePositions(),this.light=new Vm(16777215,.05),this.scene.add(this.light);const e=new Le(new aa(2.5,3.1,40),new ct({color:this.specialColor,transparent:!0,opacity:.75,depthWrite:!1,side:Yt}));e.rotation.x=-Math.PI/2,e.position.y=.12,e.visible=!1,this.player.car.add(e),this.specialRing=e,this.camera.position.set(this.player.pos.x,this.player.pos.y+4,this.player.pos.z-10),this.camera.lookAt(this.player.pos),this.flashEl=null}makePlayer(){var r;const e=this.track.startPose(0),t=Qs(this.vehicle);t.position.copy(e.pos),t.rotation.y=e.yaw,t.traverse(i=>{i.isMesh&&(i.frustumCulled=!0)}),this.scene.add(t);const n=this.origin.mod||{},s={maxSpeed:(26+this.vehicle.speed*.3)*(n.speed||1)*this.weather.grip**.1,accel:(7.5+this.vehicle.accel*.16)*(n.accel||1),grip:(.62+this.vehicle.grip*.006)*(n.grip||1)*this.terrain.grip*this.weather.grip,armor:this.vehicle.armor*(n.armor||1),boost:this.vehicle.boost};return{id:"player",name:((r=this.profile)==null?void 0:r.name)||"YOU",isPlayer:!0,car:t,pos:e.pos.clone(),yaw:e.yaw,speed:0,maxSpeed:s.maxSpeed,stats:s,index:e.index,prevIndex:e.index,lap:1,lateral:e.lateral,finished:!1,finishOrder:null,finishTime:null,lastLapAt:0,lapTimes:[],collCount:0,offset:0,damage:0,_v:new C}}buildOpponents(){var n,s;const e=this.mode==="gang"||this.mode==="police";let t=[];if(e){const r=this.mode==="police";for(let i=0;i<(r?3:4);i++)t.push({name:r?["Unit 13","Unit 09","Precinct 77"][i]:["Bone Fang","Rust Maw","Grave Crawler","Dust Throat"][i],origin:r?"ghost":"demon",vehicle:r?"midnight_coffin":"rust_reaper",color:r?"#111820":["#583427","#3e3228","#2a2722","#4b3b2b"][i],accent:r?i%2?"#ff3b30":"#3f8cff":"#c35b2c",pursuit:!0})}else if(this.mode==="pvp"){const r=Ds[Math.floor(Math.random()*Ds.length)];t.push({...r,name:"RIVAL · "+r.name})}else if(this.boss){t.push({name:this.boss.name,boss:!0,origin:this.boss.portrait.origin,vehicle:this.boss.vehicle,color:(n=Si[this.boss.vehicle])==null?void 0:n.color,accent:(s=Si[this.boss.vehicle])==null?void 0:s.accent,skill:1.02});const r=Ds.filter(i=>i.name!=="Marrow");for(let i=0;i<4;i++)t.push({...r[(i+this.boss.order)%r.length],name:r[(i+this.boss.order)%r.length].name})}else{const r=this.mode==="tutorial"?3:5,i=[...Ds].sort(()=>Math.random()-.5);for(let o=0;o<r;o++)t.push(i[o%i.length])}t.forEach((r,i)=>{const o=Si[r.vehicle]||Si[Dl[i%Dl.length]],c=Qs({...o,color:r.color||o.color,accent:r.accent||o.accent},{boss:r.boss}),h=this.track.startPose(i+1);c.position.copy(h.pos),c.rotation.y=h.yaw,this.scene.add(c);const p=r.skill||.9+i%3*.035,u={maxSpeed:26+o.speed*.29,accel:7+o.accel*.13,grip:.6+o.grip*.005},l={id:"ai_"+i,name:r.name,isPlayer:!1,car:c,pos:h.pos.clone(),yaw:h.yaw,speed:0,maxSpeed:u.maxSpeed,stats:u,index:h.index,prevIndex:h.index,lap:1,lateral:h.lateral,lane:h.lateral,finished:!1,finishOrder:null,finishTime:null,skill:p,boss:!!r.boss,pursuit:!!r.pursuit,wobble:Math.random()*8,carDef:r,colors:{accent:r.accent||o.accent,color:r.color||o.color},lastCollision:0};this.racers.push(l)}),this.racers.unshift(this.player)}buildHUD(){const e=document.getElementById("race-ui");if(!e)return;const t={tutorial:"TUTORIAL · FIRST BLOOD",race:"SINGLE RACE",pvp:"PVP DUEL",boss:"BOSS CHALLENGE",transport:"TRANSPORT",taxi:"TAXI",gang:"ESCAPE GANG",police:"APOCALYPTIC POLICE",cup:"CUP CHAMPIONSHIP",tournament:"TOURNAMENT"};e.innerHTML=`
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
    `,this.el={pos:document.getElementById("hudPos"),lap:document.getElementById("hudLap"),time:document.getElementById("hudTime"),objBar:document.getElementById("hudObjBar"),objLabel:document.getElementById("hudObjLabel"),objMain:document.getElementById("hudObjMain"),objSub:document.getElementById("hudObjSub"),speed:document.getElementById("hudSpeed"),nitro:document.getElementById("hudNitro"),hull:document.getElementById("hudHull"),special:document.getElementById("hudSpecial"),specialLabel:document.getElementById("hudSpecialLabel"),specialWrap:document.getElementById("hudSpecialWrap"),count:document.getElementById("hudCount"),tutorial:document.getElementById("hudTutorial"),warning:document.getElementById("hudWarning"),toast:document.getElementById("hudToast"),flash:document.getElementById("hudFlash"),minimap:document.getElementById("hudMinimap"),dmgPct:document.getElementById("hudDmgPct"),dmgFront:document.getElementById("dmgFront"),dmgLeft:document.getElementById("dmgLeft"),dmgRight:document.getElementById("dmgRight"),dmgRear:document.getElementById("dmgRear"),tutBanner:document.getElementById("hudTutBanner")},this.mapCtx=this.el.minimap.getContext("2d"),this.mapBounds=this.track.samples.reduce((n,s)=>(n.minX=Math.min(n.minX,s.p.x),n.maxX=Math.max(n.maxX,s.p.x),n.minZ=Math.min(n.minZ,s.p.z),n.maxZ=Math.max(n.maxZ,s.p.z),n),{minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0}),document.getElementById("racePause").addEventListener("click",()=>{ye.sfx("click"),this.requestPause()}),e.querySelectorAll("#touchControls button").forEach(n=>{const s=n.dataset.key,r=o=>{o.preventDefault(),this.input[s]=!0,n.classList.add("active"),ye.ensure()},i=o=>{o.preventDefault(),this.input[s]=!1,n.classList.remove("active")};n.addEventListener("pointerdown",r),n.addEventListener("pointerup",i),n.addEventListener("pointercancel",i),n.addEventListener("pointerleave",i),n.addEventListener("contextmenu",o=>o.preventDefault())})}bind(){this.keyHandler=e=>{const t=e.key.toLowerCase();["arrowleft","arrowright","arrowup","arrowdown"," ","shift"].includes(t)&&e.preventDefault(),(t==="a"||t==="arrowleft")&&(this.input.left=!0),(t==="d"||t==="arrowright")&&(this.input.right=!0),(t==="w"||t==="arrowup")&&(this.input.accel=!0),(t==="s"||t==="arrowdown")&&(this.input.brake=!0),t==="q"&&(this.input.handbrake=!0),(t===" "||t==="shift")&&(this.input.nitro=!0),(t==="f"||t==="e")&&(this.input.special=!0),(t==="escape"||t==="p")&&this.requestPause(),t==="m"&&(ye.setVolumes({master:ye.vol.master>0?0:.8}),this.toast(ye.vol.master>0?"SOUND ON":"MUTED"))},this.keyUp=e=>{const t=e.key.toLowerCase();(t==="a"||t==="arrowleft")&&(this.input.left=!1),(t==="d"||t==="arrowright")&&(this.input.right=!1),(t==="w"||t==="arrowup")&&(this.input.accel=!1),(t==="s"||t==="arrowdown")&&(this.input.brake=!1),t==="q"&&(this.input.handbrake=!1),(t===" "||t==="shift")&&(this.input.nitro=!1),(t==="f"||t==="e")&&(this.input.special=!1)},this.blur=()=>{for(const e in this.input)this.input[e]=!1},this.onVisibility=()=>{document.hidden&&this.state==="racing"&&this.requestPause()},window.addEventListener("keydown",this.keyHandler),window.addEventListener("keyup",this.keyUp),window.addEventListener("blur",this.blur)}resize(){this.renderer&&(this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.fov=window.innerWidth/window.innerHeight<.85?72:62,this.camera.updateProjectionMatrix())}async startAudio(){this.audioStarted||(this.audioStarted=!0,ye.ensure(),ye.setScene("race"),ye.startEngine())}requestPause(){this.finished||(this.paused=!this.paused,this.paused?(ye.stopEngine(),this.onPause(!0)):(ye.startEngine(),this.onPause(!1),this.clock.getDelta()))}resume(){this.paused&&(this.paused=!1,ye.startEngine(),this.onPause(!1),this.clock.getDelta())}toast(e,t=1400){var n;(n=this.el)!=null&&n.toast&&(this.el.toast.textContent=e,this.el.toast.classList.add("show"),clearTimeout(this._toastTimer),this._toastTimer=setTimeout(()=>{var s;return(s=this.el)==null?void 0:s.toast.classList.remove("show")},t))}loop(){if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);const e=Math.min(.045,this.clock.getDelta());this.paused||this.update(e),this.renderer.render(this.scene,this.camera)}update(e){if(this.t+=e,this.state==="countdown"){this.countdown-=e,this.updateCountdown(),this.updateAI(e,!0),this.track.update(e,this.player.pos),this.updateCamera(e,!0),this.updateHUD(e);return}this.state!=="racing"&&this.state!=="finished"||(this.state==="racing"&&(this.raceTime+=e,(this.mode==="gang"||this.mode==="police")&&(this.escapeLeft-=e,this.escapeLeft<=0&&(this.escapeLeft=0,this.finishRace("escaped")))),this.state==="racing"?(this.updatePlayer(e),this.updateAI(e,!1),this.handleWeather(e),this.updatePositions(),this.updateTutorial(e)):(this.player.speed=Math.max(0,this.player.speed-12*e),this.player.pos.addScaledVector(new C(Math.sin(this.player.yaw),0,Math.cos(this.player.yaw)),this.player.speed*e),this.updateAI(e,!1)),this.finishing>0&&(this.finishing-=e,this.finishing<=0&&this.deliverResults()),this.track.update(e,this.player.pos),this.updateCamera(e,!1),this.updateImpactParticles(e),this.updateHUD(e))}updateCountdown(){var s,r,i;const e=this.countdown;let t="";e>3.2?t="READY":e>2.2?t="3":e>1.2?t="2":e>.2?t="1":t="GO",(s=this.el)!=null&&s.count&&(this.el.count.textContent=t,this.el.count.className="rh-count show "+(t==="GO"?"go":""));const n=Math.max(0,Math.min(3,Math.ceil((4.2-e)/1.1)));this.track.startLights.forEach((o,c)=>{const h=c<n;o.material.color.set(h?n>=3?"#7bff49":"#ff2b1d":"#3a1010")}),this.countdown<=0&&(this.state="racing",(r=this.el)!=null&&r.count&&(this.el.count.textContent="GO",this.el.count.className="rh-count show go"),setTimeout(()=>{var o;(o=this.el)!=null&&o.count&&(this.el.count.className="rh-count")},650),(i=this.el)!=null&&i.tutBanner&&setTimeout(()=>this.el.tutBanner.classList.add("hide"),2500),ye.sfx("go"),this.startAudio(),this.lapStart=0,this.updateTutorialHUD()),Math.floor(e*2)!==Math.floor((e+.016)*2)&&e<3.2&&e>.2&&ye.sfx("count")}statsForPlayer(){return this.player.stats}activateSpecial(){const e=this.player;this.specialCharge=0,this.specialActive=4.2,this.specialLatch=!0;const t=this.origin.id;if(ye.sfx("boost"),t==="human")this.nitro=100,this.hull=Math.min(100,this.hull+8);else if(t==="ghoul")this.hull=Math.min(100,this.hull+30),this.nitro=Math.min(100,this.nitro+40);else if(t==="mutant"){for(const n of this.racers){if(n.isPlayer)continue;const s=Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z);if(s<18){const r=(n.pos.x-e.pos.x)/(s||1),i=(n.pos.z-e.pos.z)/(s||1);n.pos.x+=r*5,n.pos.z+=i*5,n.speed*=.62}}this.shake=Math.max(this.shake,.9),this.impactAt(e.pos,2)}else if(t==="demon"){for(const n of this.racers){if(n.isPlayer)continue;Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z)<22&&(n.speed*=.65)}this.impactAt(e.pos,1.4)}else if(t==="demigod"){for(const n of this.racers){if(n.isPlayer)continue;Math.hypot(n.pos.x-e.pos.x,n.pos.z-e.pos.z)<50&&(n.speed*=.72)}this.track.triggerLightning(e.pos),this.flashScreen(),ye.sfx("lightning")}this.toast(`${this.specialName} — ACTIVE`,1500),this.specialRing&&(this.specialRing.visible=!0,this.specialRing.material.color.set(this.specialColor))}updatePlayer(e){var F;const t=this.player,n=this.input,s=t.stats,r=Math.abs(t.speed),i=nn(r/t.maxSpeed,0,1.4),o=s.grip*(this.weather.id==="flood"?.82:1);let c=(n.left?-1:0)+(n.right?1:0);this.steerSmooth=Ns(this.steerSmooth,c,1-Math.pow(.001,e));const h=this.steerSmooth,p=n.handbrake;this.specialActive>0?this.specialActive=Math.max(0,this.specialActive-e):this.specialCharge<100&&(this.specialCharge=Math.min(100,this.specialCharge+e*(100/21))),n.special&&!this.specialLatch&&this.specialCharge>=100&&this.activateSpecial(),this.specialLatch=n.special;const u=this.specialActive>0;n.nitro&&this.nitro>1&&t.speed>4?(this.nitro=Math.max(0,this.nitro-e*28),this.boostTime=.18,(!this._boostSound||this.t-this._boostSound>.6)&&(ye.sfx("boost"),this._boostSound=this.t)):(this.nitro=Math.min(100,this.nitro+e*(3.4+s.boost*.08)),this.boostTime=Math.max(0,this.boostTime-e));const g=this.boostTime>0,_=t.maxSpeed*(g?1.34:1)*(u?1.12:1)*(this.weather.id==="flood"?.88:1);if(n.accel)t.speed+=s.accel*(g?1.55:1)*(u?1.16:1)*e,this.tutorial&&(this.tutorial.throttleTime+=e);else if(n.brake)t.speed>.4?t.speed-=s.accel*2.05*e:t.speed-=s.accel*.62*e,this.tutorial&&(this.tutorial.brakeTime+=e);else{const N=Math.sign(t.speed);t.speed-=N*(1.6+r*.11)*e,Math.abs(t.speed)<.25&&(t.speed=0)}if(p){const N=Math.sign(t.speed);t.speed-=N*s.accel*(t.speed>0?1.05:.4)*e,this.shake=Math.max(this.shake,.12)}g&&(t.speed+=s.accel*.55*e),Math.abs(h)>.4&&r>3&&this.tutorial&&(this.tutorial.steerTime+=e),t.speed>_&&(t.speed=Ns(t.speed,_,1-Math.pow(.2,e))),t.speed=nn(t.speed,-12,Math.max(_,1));let f=(1.55-i*.34)*o*nn(r/6,0,1)*(r>26?1.08:1);p&&(f*=1.62),t.yaw+=h*f*e*(n.brake&&t.speed>0?.78:1),t.drifting=p&&r>14;const d=new C(Math.sin(t.yaw),0,Math.cos(t.yaw)),x=this.track.nearest(t.pos,t.index,36).sample.right;let M=this.weather.wind;if(this.weather.id==="twister"&&this.track.tornado){const N=t.pos.x-this.track.tornado.position.x,X=t.pos.z-this.track.tornado.position.z,O=Math.hypot(N,X);if(O<34){const Y=(1-O/34)*22;t.pos.x+=N/(O+.01)*Y*e,t.pos.z+=X/(O+.01)*Y*e,M+=2.5*(1-O/34),this.shake=Math.max(this.shake,.4*(1-O/34)),this.t>(this._tornadoWarn||0)&&(this.warn("TWISTER PULL"),this._tornadoWarn=this.t+4)}}const E=M*.85*(.35+i);t.pos.x+=(d.x*t.speed+x.x*E)*e,t.pos.z+=(d.z*t.speed+x.z*E)*e;const R=this.track.nearest(t.pos,t.index,40),A=this.track.width/2,w=R.lateral,L=Math.abs(w)>A+.5;if(L&&(t.speed-=t.speed*(this.weather.id==="quicksand"?1.4:.7)*e,this.shake=Math.max(this.shake,.16*nn(Math.abs(w)/(A+5),0,1)),this.weather.id==="quicksand"&&Math.abs(w)>A+2&&(t.speed=Math.max(0,t.speed-12*e),this.t>(this._sandWarn||0)&&(this.warn("QUICKSAND — GET BACK ON THE ROAD"),this._sandWarn=this.t+3),this.cargo>0&&(this.cargo=Math.max(0,this.cargo-e*4)))),Math.abs(w)>A+3.4){const N=Math.sign(w);t.pos.x-=x.x*N*(Math.abs(w)-A-3.4),t.pos.z-=x.z*N*(Math.abs(w)-A-3.4),t.speed*=.7,this.lastCollisionAt=this.t,this.wallCooldown<=0&&(this.impactAt(t.pos,1),this.damagePlayer(4+Math.abs(t.speed)*.18,w>0?"right":"left"),this.wallCooldown=.5,this.shake=Math.max(this.shake,.6),ye.sfx("hit"))}this.wallCooldown=Math.max(0,this.wallCooldown-e),this.collisionCooldown=Math.max(0,this.collisionCooldown-e),this.respawnInvuln=Math.max(0,this.respawnInvuln-e);const G=this.track.sampleAt(R.index-3),v=this.track.sampleAt(R.index+3),b=-Math.atan2(v.p.y-G.p.y,10),k=R.sample.p.y+.02;if(t.pos.y=k,t.index=R.index,t.lateral=w,t.car.position.copy(t.pos),t.car.rotation.set(b,t.yaw,-h*i*.07,"YXZ"),Ll(t.car,t.speed,e),(F=t.car.userData.tailMat)==null||F.color.set(n.brake||t.speed<1?"#ff2b1d":"#7a1714"),t.prevIndex>Be*.72&&R.index<Be*.28){t.lap++;const N=this.raceTime-t.lastLapAt;t.lastLapAt=this.raceTime,t.lapTimes.push(N),(this.bestLap==null||N<this.bestLap)&&(this.bestLap=N),this.state==="racing"&&t.lap>this.laps&&this.mode!=="gang"&&this.mode!=="police"&&this.finishRace("finished"),this.tutorial&&this.toast(`LAP ${Math.min(t.lap,this.laps)} / ${this.laps} · ${Pn(N)}`,1500),this.lastCheckpoint={index:0,lap:t.lap}}else if(t.prevIndex<Be*.28&&R.index>Be*.72)t.lap=Math.max(1,t.lap-1);else{const N=Math.floor(Be/4),X=Math.floor(R.index/N)*N;X>this.lastCheckpoint.index&&(this.lastCheckpoint={index:X,lap:t.lap})}t.prevIndex=R.index,L&&t.speed>12&&Math.random()<e*18&&this.spawnDust(t.pos,L);for(const N of this.racers){if(N.isPlayer||N.finished)continue;const X=t.pos.x-N.pos.x,O=t.pos.z-N.pos.z,Y=Math.hypot(X,O);if(Y<2.25&&this.collisionCooldown<=0){this.collisionCooldown=.4;const V=X/(Y||1),re=O/(Y||1);t.pos.x+=V*(2.25-Y)*.6,t.pos.z+=re*(2.25-Y)*.6,N.pos.x-=V*.5,N.pos.z-=re*.5,t.speed*=.88,N.speed*=.9;const $=N.pos.x-t.pos.x,Q=N.pos.z-t.pos.z,De=$*Math.sin(t.yaw)+Q*Math.cos(t.yaw),Oe=$*Math.cos(t.yaw)-Q*Math.sin(t.yaw),q=Math.abs(De)>=Math.abs(Oe)?De>0?"front":"rear":Oe>0?"right":"left";this.damagePlayer(3,q),this.impactAt(t.pos,.7),this.shake=Math.max(this.shake,.35),ye.sfx("hit"),this.cargo>0&&(this.cargo=Math.max(0,this.cargo-6)),this.comfort>0&&(this.comfort=Math.max(0,this.comfort-10)),N.pursuit&&this.damagePlayer(4,"rear")}}if(this.weather.id==="acid"&&Math.random()<e*.6&&this.damagePlayer(.6,Math.random()<.5?"left":"right"),this.tutorial&&this.input.nitro&&this.nitro<99.8&&!this.tutorial._nitroFlag&&(this.tutorial._nitroFlag=!0,this.tutorial.nitroUses++),this.input.nitro||this.tutorial&&(this.tutorial._nitroFlag=!1),this.specialRing&&(this.specialRing.visible=this.specialActive>0,this.specialRing.visible)){this.specialRing.rotation.z+=e*3.4;const N=1+Math.sin(this.t*8)*.12;this.specialRing.scale.setScalar(N),this.specialRing.material.opacity=.55+Math.sin(this.t*10)*.2}this.dustCd=Math.max(0,(this.dustCd||0)-e),ye.updateEngine(Math.abs(t.speed)/Math.max(1,t.maxSpeed),n.accel?1:0,g),this.shake=Math.max(0,this.shake-e*1.5)}updateAI(e,t=!1){const n=this.player;for(const s of this.racers){if(s.isPlayer)continue;if(s.finished)s.speed=Math.max(0,s.speed-8*e);else{const l=this.track.nearest(s.pos,s.index,38);s.index=l.index;const g=10+Math.floor(s.speed*.6),_=this.track.sampleAt(l.index+6);this.track.sampleAt(l.index+g);let f;if(s.pursuit&&!t){const v=s.wobble+this.t*.5;f=new C(n.pos.x+Math.cos(v)*1.6,n.pos.y,n.pos.z+Math.sin(v)*1.6)}else{const v=Math.sin(this.t*.5+s.wobble)*1.1;f=this.track.worldAt(l.index+g,nn(s.lane+v,-this.track.width*.32,this.track.width*.32),.2)}const d=Math.atan2(f.x-s.pos.x,f.z-s.pos.z),m=Il(d,s.yaw),x=(1.8-nn(s.speed/s.maxSpeed,0,1)*.35)*e*(s.pursuit?1.25:1);s.yaw+=nn(m,-x,x);const M=Math.abs(Il(Math.atan2(_.tan.x,_.tan.z),Math.atan2(l.sample.tan.x,l.sample.tan.z)));let E=1-nn(M*.45,0,.22),R=1;const A=s.lap*Be+s.index,w=n.lap*Be+n.index,L=A-w;L<-60?R=1.075:L>70&&(R=.93),this.mode==="tutorial"&&(R=.72);const G=s.maxSpeed*s.skill*this.difficulty.ai*E*R*(this.weather.id==="flood"?.9:1)*(t?0:1);s.speed<G?s.speed+=s.stats.accel*e*(s.pursuit?1.18:1):s.speed=Ns(s.speed,G,1-Math.pow(.5,e)),t&&(s.speed=0),s.speed=Math.max(0,s.speed)}const r=new C(Math.sin(s.yaw),0,Math.cos(s.yaw));s.pos.x+=r.x*s.speed*e,s.pos.z+=r.z*s.speed*e;const i=this.track.nearest(s.pos,s.index,42),o=this.track.width/2;let c=i.lateral;if(Math.abs(c)>o+2.2){const l=Math.sign(c);s.pos.x-=i.sample.right.x*l*(Math.abs(c)-o-2.2),s.pos.z-=i.sample.right.z*l*(Math.abs(c)-o-2.2),s.speed*=.94}s.pos.y=i.sample.p.y+.02,s.lateral=i.lateral;const h=this.track.sampleAt(i.index-3),p=this.track.sampleAt(i.index+3),u=-Math.atan2(p.p.y-h.p.y,10);s.car.position.copy(s.pos),s.car.rotation.set(u,s.yaw,Math.sin(this.t*3+s.wobble)*.012,"YXZ"),Ll(s.car,s.speed,e),s.prevIndex>Be*.72&&i.index<Be*.28?(s.lap++,!s.finished&&s.lap>this.laps&&this.mode!=="gang"&&this.mode!=="police"&&(s.finished=!0,s.finishOrder=++this.finishOrder,s.finishTime=this.raceTime)):s.prevIndex<Be*.28&&i.index>Be*.72&&(s.lap=Math.max(1,s.lap-1)),s.prevIndex=i.index,s.index=i.index}}handleWeather(e){const t=this.player;if(!this.track.lastStrike||this.track.lastStrike===this.lastStrike)return;this.lastStrike=this.track.lastStrike;const n=t.pos.x-this.lastStrike.x,s=t.pos.z-this.lastStrike.z;Math.hypot(n,s)<17?(this.damagePlayer(14,"front"),this.shake=Math.max(this.shake,1),this.impactAt(t.pos,1.4),this.flashScreen(),this.warn("LIGHTNING STRIKE — HULL DAMAGED"),ye.sfx("lightning"),t.speed*=.6):this.t>(this._lightWarn||0)&&(this.warn("LIGHTNING NEARBY"),this._lightWarn=this.t+6)}damagePlayer(e,t=null){if(this.state!=="racing"||this.respawnInvuln>0)return;if(this.specialActive>0){if(this.origin.id==="ghost")return;this.origin.id==="mutant"?e*=.45:this.origin.id==="demigod"&&(e*=.72)}if(!t){const s=Math.random();t=s<.4?"front":s<.6?"left":s<.8?"right":"rear"}const n=t==="front"||t==="rear"?1.15:.95;this.zoneDamage[t]=Math.min(100,this.zoneDamage[t]+e*n),this.hull=Math.max(0,this.hull-e),this.hull<=0&&this.respawnAtCheckpoint()}respawnAtCheckpoint(){var s;if(this.state!=="racing")return;const e=this.lastCheckpoint||{index:18,lap:1},t=this.track.sampleAt(e.index),n=this.player;n.pos.set(t.p.x,t.p.y+.02,t.p.z),n.yaw=Math.atan2(t.tan.x,t.tan.z),n.speed=0,n.index=e.index,n.prevIndex=e.index,n.lateral=0,n.car.position.copy(n.pos),n.car.rotation.set(0,n.yaw,0,"YXZ"),this.lastCheckpoint={index:e.index,lap:e.lap||n.lap},this.hull=100,this.zoneDamage={front:0,left:0,right:0,rear:0},this.respawnInvuln=2.4,this.respawns++,this.shake=0,this.collisionCooldown=1.2,this.wallCooldown=1.2,this.camera.position.set(n.pos.x-Math.sin(n.yaw)*10,n.pos.y+6,n.pos.z-Math.cos(n.yaw)*10),this.toast("WRECKED · RESTARTED AT CHECKPOINT",2200),this.warn("CHECKPOINT RESTART · HULL RESTORED"),(s=this.el)!=null&&s.count&&(this.el.count.textContent="CHECKPOINT",this.el.count.className="rh-count show go",clearTimeout(this._cpCountT),this._cpCountT=setTimeout(()=>{var r;(r=this.el)!=null&&r.count&&(this.el.count.className="rh-count")},1100)),ye.sfx("hit"),setTimeout(()=>ye.sfx("go"),180),this.updateHUD(.1)}updatePositions(){const e=[...this.racers].sort((t,n)=>t.finished&&n.finished?t.finishOrder-n.finishOrder:t.finished?-1:n.finished?1:n.lap*Be+n.index-(t.lap*Be+t.index));this.standings=e,this.position=e.findIndex(t=>t.isPlayer)+1}updateCamera(e,t){const n=this.player,s=nn(n.speed/(n.maxSpeed||40),0,1.3),r=window.innerWidth/Math.max(1,window.innerHeight)<.85,i=(r?13.4:8.6)+s*(r?2.1:2.5),o=new C(n.pos.x-Math.sin(n.yaw)*i,n.pos.y+(r?5.6:3.9)+s*.4,n.pos.z-Math.cos(n.yaw)*i),c=1-Math.pow(9e-4,e);this.camera.position.lerp(o,c),this.shake>.01&&this.settings.cameraShake!==!1&&(this.camera.position.x+=(Math.random()-.5)*this.shake*.45,this.camera.position.y+=(Math.random()-.5)*this.shake*.3);const h=new C(n.pos.x+Math.sin(n.yaw)*(r?6:7),n.pos.y+(r?2.1:1.5),n.pos.z+Math.cos(n.yaw)*(r?6:7));this.camera.lookAt(h);const p=(r?70:62)+s*7+(this.boostTime>0?4:0);this.camera.fov=Ns(this.camera.fov,p,1-Math.pow(.02,e)),this.camera.updateProjectionMatrix(),this.track.tornado&&(this.track.tornado.rotation.y+=e*.2)}updateTutorial(e){if(!this.tutorial||this.state!=="racing")return;const t=this.tutorial;t.step===0&&t.throttleTime>.8?this.completeTutorialStep("THROTTLE"):t.step===1&&t.steerTime>.65?this.completeTutorialStep("STEERING"):t.step===2&&t.nitroUses>0?this.completeTutorialStep("NITRO"):t.step===3&&t.brakeTime>.45&&this.completeTutorialStep("BRAKING"),this.updateTutorialHUD()}completeTutorialStep(e){this.tutorial&&(ye.sfx("reward"),this.toast(`${e} — LEARNED`,1300),this.tutorial.step++,this.tutorial.step>4&&(this.tutorial.step=4),this.updateTutorialHUD())}updateTutorialHUD(){var s;if(!this.tutorial||!((s=this.el)!=null&&s.tutorial))return;const e=[["ACCELERATE","Hold <kbd>W</kbd> / <kbd>↑</kbd> or the ACCEL pedal. Speed is survival."],["TURN","Use <kbd>A</kbd> <kbd>D</kbd> / <kbd>←</kbd> <kbd>→</kbd> or the left-side TURN pedals."],["NITRO","Tap <kbd>SPACE</kbd> or N₂O. The blue meter refills over time."],["STOP / REVERSE","Hold <kbd>S</kbd> / <kbd>↓</kbd> to stop, then reverse. <kbd>Q</kbd> is the HANDBRAKE."],["SPECIAL","Tap <kbd>F</kbd> / ✦ when charged. Then finish the lap and survive the weather."]],[t,n]=e[Math.min(4,this.tutorial.step)];this.el.tutorial.innerHTML=`<div class="tut-kicker">TUTORIAL · ${Math.min(5,this.tutorial.step+1)}/5</div><b>${t}</b><p>${n}</p>`,this.el.tutorial.classList.add("show")}updateHUD(e){if(this.el){if(this.hudTimer+=e,this.hudTimer>.06){this.hudTimer=0;const t=this.player;this.el.pos.textContent=`${this.position}/${this.racers.length}`;const n=this.mode==="gang"||this.mode==="police"?"—":`${Math.min(t.lap,this.laps)}/${this.laps}`;this.el.lap.textContent=n,this.el.time.textContent=Pn(this.raceTime),this.el.speed.textContent=Math.round(Math.abs(t.speed)*3.4),this.el.nitro.style.width=this.nitro+"%",this.el.hull.style.width=this.hull+"%",this.specialActive>0?(this.el.special.style.width="100%",this.el.specialLabel.textContent=this.specialName+" ACTIVE",this.el.specialWrap.classList.add("active"),this.el.specialWrap.classList.remove("ready")):(this.el.special.style.width=this.specialCharge+"%",this.el.specialLabel.textContent=this.specialCharge>=100?this.specialName+" READY":this.specialName+" "+Math.floor(this.specialCharge)+"%",this.el.specialWrap.classList.toggle("ready",this.specialCharge>=100),this.el.specialWrap.classList.remove("active")),this.hull<35?this.el.hull.classList.add("danger"):this.el.hull.classList.remove("danger");const s=100-this.hull;if(this.el.dmgPct&&(this.el.dmgPct.textContent=`${Math.round(s)}%`,this.el.dmgPct.style.color=ji(s),this.el.dmgFront.style.background=ji(this.zoneDamage.front),this.el.dmgLeft.style.background=ji(this.zoneDamage.left),this.el.dmgRight.style.background=ji(this.zoneDamage.right),this.el.dmgRear.style.background=ji(this.zoneDamage.rear)),this.tutorial){const r=document.getElementById("hudObjBar");r&&(r.style.width=`${this.tutorial.step*20}%`),this.el.objSub.textContent=`Tutorial ${Math.min(5,this.tutorial.step+1)}/5`}else this.mode==="transport"?(this.el.objLabel.textContent="CARGO INTEGRITY",this.el.objMain.textContent=`${Math.round(this.cargo)}%`,this.el.objBar.style.width=this.cargo+"%",this.el.objSub.textContent=this.cargo>60?"Fragile. Keep it off the walls.":this.cargo>0?"Cargo failing! Find the line.":"CARGO LOST",this.el.objBar.classList.toggle("danger",this.cargo<35)):this.mode==="taxi"?(this.el.objLabel.textContent="PASSENGER COMFORT",this.el.objMain.textContent=`${Math.round(this.comfort)}%`,this.el.objBar.style.width=this.comfort+"%",this.el.objSub.textContent=this.comfort>60?"Keep the fare breathing.":"The passenger is screaming.",this.el.objBar.classList.toggle("danger",this.comfort<35)):this.mode==="gang"||this.mode==="police"?(this.el.objLabel.textContent="SURVIVE",this.el.objMain.textContent=Pn(this.escapeLeft).slice(0,5),this.el.objBar.style.width=`${Math.max(0,Math.min(100,this.escapeLeft/(this.opts.escapeTime||60)*100))}%`,this.el.objSub.textContent=`HULL ${Math.round(this.hull)}% · ${this.mode==="police"?"PRECINCT 13":"BONE GANG"}`):(this.el.objLabel.textContent="OBJECTIVE",this.el.objMain.textContent=this.boss?`BEAT ${this.boss.name.toUpperCase()}`:"WIN THE RACE",this.el.objBar.style.width=`${Math.max(0,100-(this.position-1)*22)}%`,this.el.objSub.textContent=this.position===1?"LEADING":`${this.position-1} DRIVER${this.position>2?"S":""} AHEAD`,this.el.objBar.classList.toggle("danger",!1));this.weather.id==="hurricane"?this.el.warning.textContent="CROSSWIND · HOLD THE LINE":this.weather.id==="twister"?this.el.warning.textContent="TWISTER · DO NOT GET PULLED IN":this.weather.id==="flood"?this.el.warning.textContent="FLOODED ROAD · LOW GRIP":this.weather.id==="acid"?this.el.warning.textContent="ACID RAIN · HULL CORRODING":this.weather.id==="storm"?this.el.warning.textContent="THUNDERSTORM · LIGHTNING ACTIVE":this.weather.id==="quicksand"?this.el.warning.textContent="QUICKSAND · STAY ON ASPHALT":this.el.warning.textContent=""}this.mapTimer+=e,this.mapTimer>.13&&(this.mapTimer=0,this.drawMinimap())}}drawMinimap(){if(!this.mapCtx)return;const e=this.mapCtx,t=300,n=300,s=this.mapBounds,r=34,i=s.maxX-s.minX,o=s.maxZ-s.minZ,c=(t-r*2)/Math.max(i,o),h=(t-i*c)/2,p=(n-o*c)/2,u=(f,d)=>[h+(f-s.minX)*c,p+(d-s.minZ)*c];e.clearRect(0,0,t,n),e.fillStyle="rgba(8,8,9,0.55)",e.beginPath(),e.roundRect(0,0,t,n,18),e.fill(),e.strokeStyle="rgba(216,164,74,0.3)",e.lineWidth=2,e.stroke(),e.strokeStyle="rgba(230,220,190,0.72)",e.lineWidth=4,e.lineJoin="round",e.beginPath();for(let f=0;f<=Be;f+=8){const d=this.track.sampleAt(f),[m,x]=u(d.p.x,d.p.z);f===0?e.moveTo(m,x):e.lineTo(m,x)}e.closePath(),e.stroke();const l=this.track.samples[0],[g,_]=u(l.p.x,l.p.z);e.fillStyle="#e8dcc0",e.fillRect(g-3,_-3,6,6);for(const f of this.racers){const[d,m]=u(f.pos.x,f.pos.z);f.isPlayer?(e.save(),e.translate(d,m),e.rotate(-f.yaw+Math.PI),e.fillStyle="#ff4136",e.shadowBlur=12,e.shadowColor="#ff4136",e.beginPath(),e.moveTo(0,-9),e.lineTo(6,6),e.lineTo(0,2),e.lineTo(-6,6),e.closePath(),e.fill(),e.restore()):(e.fillStyle=f.boss?"#ffd166":f.pursuit?"#6aa6ff":"rgba(220,215,200,0.75)",e.beginPath(),e.arc(d,m,f.boss?5:3.2,0,7),e.fill())}e.save(),e.translate(t-30,28),e.strokeStyle="rgba(120,220,255,0.75)",e.lineWidth=2,e.beginPath(),e.moveTo(-12,0),e.lineTo(10,0),e.stroke(),e.beginPath(),e.moveTo(4,-4),e.lineTo(10,0),e.lineTo(4,4),e.stroke(),e.restore()}updateImpactParticles(e){for(let t=this.impact.length-1;t>=0;t--){const n=this.impact[t];if(n.life-=e,n.life<=0){this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.impact.splice(t,1);continue}n.mesh.position.y+=e*1.8,n.mesh.material.opacity=Math.max(0,n.life/.55)}}impactAt(e,t=1){var c,h,p,u,l,g;const n=this.gore==="off"?"#ffc46a":this.gore==="zombie"?"#6fbf38":"#a3151b",s=18,r=new Float32Array(s*3);for(let _=0;_<s;_++)r[_*3]=(Math.random()-.5)*2.4*t,r[_*3+1]=Math.random()*2,r[_*3+2]=(Math.random()-.5)*2.4*t;const i=new it;i.setAttribute("position",new wt(r,3));const o=new Di(i,new ti({color:n,size:.36,transparent:!0,opacity:1,depthWrite:!1}));o.position.copy(e),this.scene.add(o),this.impact.push({mesh:o,life:.55}),this.gore!=="off"&&((h=(c=this.el)==null?void 0:c.flash)==null||h.classList.remove("gore"),(u=(p=this.el)==null?void 0:p.flash)==null||u.offsetWidth,(g=(l=this.el)==null?void 0:l.flash)==null||g.classList.add("gore"),setTimeout(()=>{var _,f;return(f=(_=this.el)==null?void 0:_.flash)==null?void 0:f.classList.remove("gore")},280))}spawnDust(e){if(this.dustCd>0)return;this.dustCd=.04;const t=new Float32Array(9);for(let r=0;r<3;r++)t[r*3]=(Math.random()-.5)*1.4,t[r*3+1]=.2+Math.random(),t[r*3+2]=(Math.random()-.5)*1.4;const n=new it;n.setAttribute("position",new wt(t,3));const s=new Di(n,new ti({color:"#b8a078",size:.55,transparent:!0,opacity:.6,depthWrite:!1}));s.position.copy(e),this.scene.add(s),this.impact.push({mesh:s,life:.4})}flashScreen(){var e;(e=this.el)!=null&&e.flash&&(this.el.flash.classList.remove("lightning"),this.el.flash.offsetWidth,this.el.flash.classList.add("lightning"),setTimeout(()=>{var t,n;return(n=(t=this.el)==null?void 0:t.flash)==null?void 0:n.classList.remove("lightning")},320))}warn(e){var t;(t=this.el)!=null&&t.warning&&(this.el.warning.textContent=e,this.el.warning.classList.remove("pulse"),this.el.warning.offsetWidth,this.el.warning.classList.add("pulse"))}finishRace(e){var n,s;if(this.state!=="racing")return;this.state="finished",this.finishReason=e,this.finished=!0;const t=this.player;t.finished=!0,t.finishOrder=++this.finishOrder,t.finishTime=this.raceTime,this.updatePositions(),this.finishing=1.4,ye.stopEngine(),e==="finished"||e==="escaped"?ye.sfx("win"):ye.sfx("lose"),(n=this.el)!=null&&n.count&&(this.el.count.textContent=e==="wrecked"?"WRECKED":"FINISH",this.el.count.className="rh-count show "+(e==="wrecked"?"lose":"go")),(s=this.el)!=null&&s.tutorial&&this.el.tutorial.classList.remove("show"),this.updateHUD(.1)}deliverResults(){var r;if(this.delivered)return;this.delivered=!0;const e=[...this.racers].sort((i,o)=>i.finished&&o.finished?i.finishOrder-o.finishOrder:i.finished?-1:o.finished?1:o.lap*Be+o.index-(i.lap*Be+i.index)),t=e.findIndex(i=>i.isPlayer)+1,n=this.finishReason==="escaped"?!0:this.finishReason==="finished"?t===1||this.mode==="transport"||this.mode==="taxi":!1,s={mode:this.mode,reason:this.finishReason,success:n,position:t,total:this.racers.length,time:this.raceTime,bestLap:this.bestLap,hull:this.hull,cargo:this.cargo,comfort:this.comfort,laps:this.laps,terrain:this.terrain.id,weather:this.weather.id,bossId:((r=this.boss)==null?void 0:r.id)||null,standings:e.map(i=>{var o,c,h;return{name:i.isPlayer?this.player.name:i.name,isPlayer:!!i.isPlayer,boss:!!i.boss,vehicle:i.isPlayer?this.vehicle.name:((c=Si[(o=i.carDef)==null?void 0:o.vehicle])==null?void 0:c.name)||((h=i.carDef)==null?void 0:h.name)||"Rust Bucket",time:i.finishTime,finished:i.finished}})};this.onFinish(s)}setPaused(e){e!==this.paused&&(this.paused=e,e?ye.stopEngine():(ye.startEngine(),this.clock.getDelta()))}dispose(){this.disposed=!0,this.raf&&cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.resize),window.removeEventListener("keydown",this.keyHandler),window.removeEventListener("keyup",this.keyUp),window.removeEventListener("blur",this.blur),document.removeEventListener("visibilitychange",this.onVisibility),clearTimeout(this._toastTimer),ye.stopEngine(),ye.setScene("menu"),this.track.dispose();for(const e of this.impact)e.mesh.geometry.dispose(),e.mesh.material.dispose();this.impact=[],document.getElementById("race-ui").innerHTML="",this.renderer.setClearColor(723725,1)}}const ng=`
<svg viewBox="0 0 64 64" class="skull-icon" aria-hidden="true">
  <path d="M32 3C16 3 8 14 8 28c0 9 4 15 10 19l1 9c0 3 2 5 5 5h16c3 0 5-2 5-5l1-9c6-4 10-10 10-19C56 14 48 3 32 3Z" fill="currentColor"/>
  <path d="M19 27c0-6 4-10 10-10s9 4 9 9c0 5-3 8-8 9l-1 6h-7l-1-7c-2-2-2-4-2-7Zm20 0c0-5 3-9 8-9 5 0 9 4 9 10 0 3-1 5-3 7l-1 7h-7l-1-6c-3-1-5-4-5-9Z" fill="#090809"/>
  <path d="M27 24c2 0 3 2 3 4s-1 4-3 4-3-2-3-4 1-4 3-4Zm20 0c2 0 3 2 3 4s-1 4-3 4-3-2-3-4 1-4 3-4Z" fill="currentColor"/>
  <path d="M26 46h12v5H26zM22 50h4v6h-4zm16 0h4v6h-4z" fill="#090809"/>
  <path d="M15 12 5 2M49 12 59 2" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
</svg>`;function Nl({compact:a=!1}={}){return`
  <div class="brand ${a?"compact":""}">
    <div class="brand-kicker"><span></span> WASTELAND VELOCITY <span></span></div>
    <h1 class="brand-title"><span class="brand-hell">HELL</span><span class="brand-ride">RIDE</span></h1>
    <div class="brand-sub">
      <i class="brand-slash"></i>
      <span>APOCALYPSE</span>
      <i class="brand-slash"></i>
    </div>
    <p class="brand-tag">DRIVE · BLEED · REPEAT</p>
  </div>`}function Ul(){return`
  <svg viewBox="0 0 70 620" class="chain-svg" preserveAspectRatio="none">
    <g fill="none" stroke="currentColor" stroke-width="5">
      <path d="M35 0v620" opacity=".25"/>
      ${Array.from({length:19},(a,e)=>`<ellipse cx="35" cy="${8+e*32}" rx="${e%2?8:12}" ry="${e%2?15:18}" stroke-width="${e%2?4:5}" opacity="${.45+e%3*.14}"/>`).join("")}
    </g>
  </svg>`}function ig(){return`
  <div class="decor-layer">
    <div class="blood-splash blood-1"></div>
    <div class="blood-splash blood-2"></div>
    <div class="blood-splash blood-3"></div>
    <div class="chain chain-left">${Ul()}</div>
    <div class="chain chain-right">${Ul()}</div>
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
  </div>`}const sg=`
<h3>TERMS OF THE WASTELAND</h3>
<p><b>1. This is a game.</b> HELLRIDE: APOCALYPSE is a fictional, single-player browser game. All drivers, demigods, gangs, police, violence, gore, and apocalyptic weather are fictional. Nothing here is advice for real driving or survival.</p>
<p><b>2. Your profile.</b> Your profile, progress, vehicles, settings, and save slots are stored locally in this browser using <code>localStorage</code>. Clearing site data deletes your progress. There is no account recovery, no cloud save, and no personal data leaves this device.</p>
<p><b>3. Content controls.</b> The Gore setting can be set to Off, Blood, or Zombie Green Blood. Blood and body parts are stylized and low-resolution by design. This game is intended for teen and mature players.</p>
<p><b>4. Single player / local PvP.</b> “PvP” is a local duel against AI rivals in this build; it does not connect to other players or the internet. “Open map” quests are accessed from the mission map, not a continuous free-roam simulation.</p>
<p><b>5. Fair use.</b> Do not resell, misrepresent, or redistribute the game as your own work. Fonts are used under the SIL Open Font License. All other code and art are procedurally generated for this project.</p>
<p><b>6. No warranty.</b> The wasteland is provided “as is”. If a demigod eats your save file, that is canon.</p>
<p class="terms-foot">By continuing, you accept that the road is dead and you are still driving on it.</p>
`,me=(a,e=document)=>e.querySelector(a),ht=(a,e=document)=>[...e.querySelectorAll(a)],ie=a=>String(a??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ag=(a,e,t)=>Math.max(e,Math.min(t,a)),tn=a=>a[Math.floor(Math.random()*a.length)],Qa=a=>{const e=["TH","ST","ND","RD"][a%100>10&&a%100<14?0:a%10]||"TH";return`${a}${e}`},rg=["#b9866b","#8c5b43","#6c4938","#d3a17d","#e0b99b","#4f3429","#a9b8c6","#8aa86b"],og=[{id:"ice",x:150,y:112,rx:122,ry:72,rot:-8},{id:"mountains",x:334,y:94,rx:112,ry:66,rot:7},{id:"wasteland",x:520,y:120,rx:128,ry:68,rot:-4},{id:"jungle",x:735,y:132,rx:120,ry:72,rot:6},{id:"rainforest",x:872,y:250,rx:112,ry:84,rot:-10},{id:"dunes",x:155,y:282,rx:112,ry:78,rot:8},{id:"desert",x:330,y:260,rx:112,ry:82,rot:-5},{id:"warzone",x:505,y:272,rx:110,ry:76,rot:5},{id:"city",x:665,y:308,rx:118,ry:84,rot:-7},{id:"suburbs",x:812,y:402,rx:104,ry:78,rot:9},{id:"volcano",x:142,y:475,rx:112,ry:92,rot:-6},{id:"mines",x:324,y:452,rx:110,ry:86,rot:7},{id:"swamp",x:530,y:478,rx:116,ry:88,rot:-4},{id:"beach",x:742,y:548,rx:122,ry:76,rot:8},{id:"dystopia",x:884,y:532,rx:100,ry:82,rot:-9}],Ol={m_acid_run:[80,28],m_sand_delivery:[15,42],m_fare_hell:[73,57],m_scrapyard_sprint:[50,62],m_neon_cup:[91,73],m_dead_tide_cup:[74,84],m_cinder_tournament:[46,81],m_gang_hunt:[52,43],m_police_siege:[63,39],m_pvp_duel:[36,37],m_ice_cup:[20,16],m_volcano_tour:[15,73],m_blood_moon:[8,56]},lg=[{id:"all",name:"All Contracts"},{id:"race",name:"Races"},{id:"job",name:"Jobs"},{id:"pursuit",name:"Pursuits"},{id:"event",name:"Events"}];function kl(a,e){return e==="all"?!0:e==="race"?["race","cup","tournament","pvp"].includes(a.type):e==="job"?["transport","taxi"].includes(a.type):e==="pursuit"?["gang","police"].includes(a.type):e==="event"?a.type==="event":!0}function Us(a){return a&&(a.settings={...Wr,...a.settings||{}},a.career=a.career||{defeated:[],current:0},a.career.defeated=a.career.defeated||[],a.completed=a.completed||{},a.vehicles=a.vehicles||["rust_reaper"],a.equipped=a.equipped||"rust_reaper",a.money=a.money||0,a.xp=a.xp||0,a.level=a.level||1,a.looks={...Fl(a.gender||"female"),...a.looks||{}},a)}class cg{constructor(){this.store=new Cc,this.app=me("#app"),this.modals=me("#modals"),this.decor=me("#decor"),this.menuBg=new qm(me("#menu-bg")),this.menuBg.setQuality("medium"),this.decor.innerHTML=ig(),this.screen="boot",this.filter="all",this.selectedMission=kn[0],this.selectedVehicle="rust_reaper",this.draft=null,this.race=null,this.activeLaunch=null,this.series=null,this.garagePreview=null,this.mapOpen=!1,this.draftRandom=0,this._lastQuote="",this.bindGlobal(),this.store.persist(),setTimeout(()=>this.route("login"),120),window.hellride=this}bindGlobal(){this.audioPrimed=!1,document.addEventListener("pointerdown",()=>{if(this.audioPrimed)ye.ensure();else{this.audioPrimed=!0,ye.ensure();const e=this.store.profile();e&&ye.setVolumes(e.settings),["login","menu","create","map","career","garage","settings","events"].includes(this.screen)&&ye.setScene("menu")}},{capture:!0}),document.addEventListener("click",e=>{const t=e.target.closest("button");t&&!t.dataset.silent&&(t.dataset.action==="back"||t.classList.contains("modal-x")?ye.sfx("back"):ye.sfx("click"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.modals.firstElementChild&&!this.race&&this.closeModal()}),window.addEventListener("resize",()=>{var e,t;(t=(e=this.menuBg)==null?void 0:e.resize)==null||t.call(e)})}route(e){this.screen=e,document.body.dataset.screen=e,window.scrollTo(0,0);const t=["login","create","menu"].includes(e);this.decor.style.display=t?"block":"none";const n=me("#menu-bg");n&&(n.style.visibility=t?"visible":"hidden"),t?this.menuBg.start():this.menuBg.stop(),e!=="garage"&&this.garagePreview&&(this.garagePreview.stop(),this.garagePreview=null),e==="login"?this.renderLogin():e==="create"?this.renderCreate():e==="menu"?this.renderMenu():e==="map"?this.renderMap():e==="career"?this.renderCareer():e==="garage"?this.renderGarage():e==="settings"?this.renderSettings():e==="events"&&this.renderEvents()}startMenuMusic(){const e=this.store.profile();ye.ensure(),e&&ye.setVolumes(e.settings),ye.setScene("menu")}toast(e,t=""){const n=me("#global-toast");n.textContent=e,n.className="global-toast show "+t,clearTimeout(this._toastT),this._toastT=setTimeout(()=>{n.className="global-toast "+t},2400)}showModal(e,t=""){this.modals.innerHTML=`<div class="modal-backdrop" data-modal-backdrop><div class="modal ${t}" role="dialog" aria-modal="true">${e}</div></div>`,document.body.classList.add("modal-open");const n=this.modals.firstElementChild;return n.addEventListener("click",s=>{s.target===n&&!n.dataset.locked&&this.closeModal()}),ht("[data-modal-close]",this.modals).forEach(s=>s.addEventListener("click",()=>this.closeModal())),this.modals.firstElementChild}closeModal(){this.modals.innerHTML="",document.body.classList.remove("modal-open")}paintPortraits(e=document){ht("canvas[data-profile]",e).forEach(t=>{var s;const n=this.store.state.profiles.find(r=>r.id===t.dataset.profile);n&&Fi(t,{...n.looks,name:n.name},{size:220,gore:(s=n.settings)==null?void 0:s.gore})}),ht("canvas[data-boss]",e).forEach(t=>{const n=yi.find(s=>s.id===t.dataset.boss);n&&Fi(t,{...n.portrait,name:n.name},{size:360,boss:!0,gore:"blood",bg:n.boss?"#2c1113":"#211713"})})}renderLogin(){const e=this.store.profiles();this.app.innerHTML=`
      <section class="screen login-screen">
        <div class="screen-inner login-grid">
          <div class="login-copy">
            ${Nl()}
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
                  <button class="profile-card" data-login="${t.id}" aria-label="Log in as ${ie(t.name)}">
                    <canvas class="profile-avatar" data-profile="${t.id}" width="220" height="220"></canvas>
                    <span class="profile-copy">
                      <b>${ie(t.name)}</b>
                      <span>LEVEL ${t.level} · ${It(t.money)}</span>
                      <em>${t.tutorialDone?"Tutorial cleared":"Tutorial pending"} · ${t.career.defeated.length}/11 bosses broken</em>
                    </span>
                    <span class="profile-enter">ENTER ▶</span>
                  </button>
                  <button class="profile-del" data-del="${t.id}" aria-label="Delete profile">✕</button>
                </div>`).join("")}
            </div>`:`
              <div class="empty-profiles">
                <div class="empty-skull">${ng}</div>
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
      </section>`,this.paintPortraits(this.app),this.bindLogin(),this.store.profile()&&this.startMenuMusic()}bindLogin(){var e,t,n;ht("[data-login]",this.app).forEach(s=>s.addEventListener("click",()=>{const r=this.store.login(s.dataset.login);r&&(Us(r),this.store.persist(),this.startMenuMusic(),this.route("menu"),this.toast(`WELCOME BACK, ${r.name}`,"good"))})),ht("[data-del]",this.app).forEach(s=>s.addEventListener("click",r=>{r.stopPropagation();const i=this.store.state.profiles.find(o=>o.id===s.dataset.del);i&&(this.showModal(`
        <div class="modal-kicker danger-text">DELETE PROFILE</div>
        <h2>BURY ${ie(i.name)}?</h2>
        <p class="modal-lede">The driver, their garage, their kills and their saves will be gone. There is no resurrection in this wasteland.</p>
        <div class="modal-actions">
          <button class="btn btn-ghost" data-modal-close>CANCEL</button>
          <button class="btn btn-danger" data-confirm-del="${i.id}">DELETE FOREVER</button>
        </div>`),me("[data-confirm-del]",this.modals).addEventListener("click",()=>{this.store.remove(i.id),this.closeModal(),this.renderLogin(),this.toast("PROFILE ERASED","bad")}))})),(e=me('[data-action="new-profile"]',this.app))==null||e.addEventListener("click",()=>this.startCreate()),(t=me('[data-action="terms"]',this.app))==null||t.addEventListener("click",()=>this.showTerms()),(n=me('[data-action="how"]',this.app))==null||n.addEventListener("click",()=>this.showHowTo())}showTerms(){this.showModal(`<div class="modal-kicker">LEGAL · THE FINE PRINT</div>${sg}<div class="modal-actions"><button class="btn btn-primary" data-modal-close>I ACCEPT THE APOCALYPSE</button></div>`,"legal-modal")}showHowTo(){this.showModal(`
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
      <div class="modal-actions"><button class="btn btn-primary" data-modal-close>BACK TO THE ROAD</button></div>`,"how-modal")}startCreate(){this.draft={name:"",gender:"female",origin:"human",face:"sharp",hair:"mohawk",hairColor:"black",eyeStyle:"human",eyeColor:"blue",facialHair:"none",scar:"eye",headgear:"none",skin:mt[0].skin},this.route("create")}chipOptions(e,t,n,s={}){return t.map(r=>{const i=r.value||r.id,o=n===i?" active":"";return s.colors?`<button class="swatch${o}" data-field="${e}" data-value="${i}" title="${ie(r.label)}"><i style="background:${r.value}"></i><span>${ie(r.label)}</span></button>`:`<button class="chip${o}" data-field="${e}" data-value="${i}">${ie(r.label)}</button>`}).join("")}renderCreate(){const e=this.draft||{},t=mt.find(n=>n.id===e.origin)||mt[0];this.app.innerHTML=`
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
            <p class="preview-bonus" id="previewBonus"><b>ORIGIN BONUS:</b> ${ie(t.bonus)}</p>
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
              <input id="nameInput" class="text-input" maxlength="14" autocomplete="off" spellcheck="false" placeholder="ENTER NAME" value="${ie(e.name)}" />
            </div>
            <div class="field">
              <label>GENDER</label>
              <div class="segmented">${Mc.map(n=>`<button class="seg${e.gender===n.id?" active":""}" data-field="gender" data-value="${n.id}">${n.label}</button>`).join("")}</div>
            </div>
            <div class="field">
              <label>ORIGIN <span>all origins are playable</span></label>
              <div class="origin-grid">
                ${mt.map((n,s)=>`<button class="origin-card${e.origin===n.id?" active":""}" data-field="origin" data-value="${n.id}">
                  <b>${["☥","☣","◌","☠","♆","ϟ"][s]}</b>
                  <span>${n.name.toUpperCase()}</span>
                  <em>${n.bonus}</em>
                </button>`).join("")}
              </div>
            </div>
            <div class="field">
              <label>SKIN TONE</label>
              <div class="chips">${rg.map(n=>`<button class="swatch simple${e.skin===n?" active":""}" data-field="skin" data-value="${n}" aria-label="Skin tone"><i style="background:${n}"></i></button>`).join("")}</div>
            </div>
            <div class="form-grid">
              <div class="field"><label>FACE STYLE</label><div class="chips">${this.chipOptions("face",bo,e.face)}</div></div>
              <div class="field"><label>HAIR STYLE</label><div class="chips">${this.chipOptions("hair",da,e.hair)}</div></div>
              <div class="field wide"><label>HAIR COLOR</label><div class="chips swatches">${this.chipOptions("hairColor",tr,e.hairColor,{colors:!0})}</div></div>
              <div class="field"><label>EYES</label><div class="chips">${this.chipOptions("eyeStyle",xo,e.eyeStyle)}</div></div>
              <div class="field"><label>EYE COLOR</label><div class="chips swatches">${this.chipOptions("eyeColor",Ji,e.eyeColor,{colors:!0})}</div></div>
              <div class="field"><label>FACIAL HAIR</label><div class="chips">${this.chipOptions("facialHair",So,e.facialHair)}</div></div>
              <div class="field"><label>SCARS</label><div class="chips">${this.chipOptions("scar",ua,e.scar)}</div></div>
              <div class="field wide"><label>ACCESSORY</label><div class="chips">${this.chipOptions("headgear",Mo,e.headgear)}</div></div>
            </div>
            <div class="create-actions">
              <button class="btn btn-ghost" data-action="back">◀ BACK</button>
              <button class="btn btn-primary btn-large" data-action="create-submit">ENTER THE WASTELAND ▶</button>
            </div>
            <p class="hint">Profile is stored locally. You can save to three manual slots in Settings.</p>
          </div>
        </div>
        <div class="screen-foot"><span>IDENTITY IS A WEAPON</span><span>${mt.length} ORIGINS · ${da.length} HAIRSTYLES · ${ua.length} SCARS · ${Ji.length} EYE COLORS</span></div>
      </section>`,this.paintCreatePreview(),this.bindCreate()}paintCreatePreview(){const e=this.draft,t=me("#createPortrait",this.app);if(!t)return;Fi(t,{...e,name:e.name},{size:512,gore:"blood",bg:"#2a1113"});const n=mt.find(r=>r.id===e.origin)||mt[0];me("#previewName").textContent=(e.name||"UNNAMED").toUpperCase(),me("#previewMeta").textContent=`${e.gender.toUpperCase()} · ${n.name.toUpperCase()} · LEVEL 1`,me("#previewBonus").innerHTML=`<b>ORIGIN BONUS:</b> ${ie(n.bonus)}`;const s=me(".portrait-stamp",this.app);s&&(s.textContent=n.name.toUpperCase())}bindCreate(){var t,n,s;const e=me("#nameInput",this.app);e.addEventListener("input",()=>{this.draft.name=e.value.toUpperCase().slice(0,14),me("#previewName").textContent=this.draft.name||"UNNAMED"}),ht("[data-field]",this.app).forEach(r=>r.addEventListener("click",()=>{const{field:i,value:o}=r.dataset;if(i){if(this.draft[i]=o,ht(`[data-field="${i}"]`,this.app).forEach(c=>c.classList.toggle("active",c.dataset.value===o)),i==="origin"){const c=mt.find(h=>h.id===o);c&&(this.draft.skin=c.skin,ht('[data-field="skin"]',this.app).forEach(h=>h.classList.toggle("active",h.dataset.value===c.skin)))}this.paintCreatePreview()}})),(t=me('[data-action="randomize"]',this.app))==null||t.addEventListener("click",()=>{const r=this.draft;r.face=tn(bo).id,r.hair=tn(da).id,r.hairColor=tn(tr).id,r.eyeColor=tn(Ji).id,r.eyeStyle=tn(xo).id,r.facialHair=tn(So).id,r.scar=tn(ua).id,r.headgear=tn(Mo).id,r.origin=tn(mt).id,r.gender=Math.random()>.5?"female":"male",r.skin=(mt.find(i=>i.id===r.origin)||mt[0]).skin,this.renderCreate(),this.toast("NEW FACE, SAME BAD FUTURE","good")}),(n=me('[data-action="back"]',this.app))==null||n.addEventListener("click",()=>this.route("login")),(s=me('[data-action="create-submit"]',this.app))==null||s.addEventListener("click",()=>{const r=(me("#nameInput",this.app).value||"").trim().toUpperCase().slice(0,14)||"NAMELESS";mt.find(o=>o.id===this.draft.origin)||mt[0];const i=this.store.create({name:r,gender:this.draft.gender,origin:this.draft.origin,looks:{...this.draft,name:r,origin:this.draft.origin}});Us(i),this.store.login(i.id),this.startMenuMusic(),this.route("menu"),this.toast(`PROFILE CREATED · ${i.name}`,"good")})}getProfile(){const e=this.store.profile();return e?Us(e):null}bossState(e){const t=this.getProfile();if(!t)return"locked";if(t.career.defeated.includes(e.id))return"defeated";const n=t.career.defeated.length;return e.order<=n+1?"available":"locked"}nextBoss(){const e=this.getProfile();return e&&yi.find(t=>!e.career.defeated.includes(t.id)&&t.order<=e.career.defeated.length+1)||null}xpProgress(e){const t=e.level||1,n=250*Math.pow(t-1,2),s=250*Math.pow(t,2);return ag(((e.xp||0)-n)/Math.max(1,s-n),0,1)}renderMenu(){const e=this.getProfile();if(!e)return this.route("login");const t=tn(Ac.filter(h=>h!==this._lastQuote));this._lastQuote=t;const n=this.nextBoss(),s=e.vehicles.length,r=(e.settings.master||0)<=.01,i=bt[(new Date().getDate()+e.level)%bt.length],o=pt.find(h=>h.id===e.equipped)||pt[0],c=this.xpProgress(e);this.app.innerHTML=`
      <section class="screen menu-screen">
        <header class="menu-hud">
          <button class="profile-hud" data-action="profile">
            <canvas class="hud-avatar" data-profile="${e.id}" width="180" height="180"></canvas>
            <span><b>${ie(e.name)}</b><em>LEVEL ${e.level} · ${ie((mt.find(h=>h.id===e.origin)||mt[0]).name.toUpperCase())}</em><span class="xp-mini"><i style="width:${Math.round(c*100)}%"></i></span></span>
          </button>
          <div class="hud-money">
            <span>SCRAP</span><b>${It(e.money)}</b>
          </div>
          <div class="hud-car">
            <span>ACTIVE VEHICLE</span><b>${ie(o.name)}</b>
          </div>
          <div class="top-actions">
            <button class="icon-btn" data-action="mute" aria-label="Toggle sound">${r?"🔇":"🔊"}</button>
            <button class="icon-btn" data-action="fullscreen" aria-label="Fullscreen">⛶</button>
            <button class="icon-btn" data-action="logout" aria-label="Log out">⏻</button>
          </div>
        </header>
        <div class="menu-main">
          <div class="menu-left">
            ${Nl()}
            <p class="menu-lede">${ie(t)}</p>
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
                <span class="mn">05</span><span class="mt"><b>GARAGE</b><em>${s}/${pt.length} vehicles acquired</em></span><span class="ma">▶</span>
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
                    <b>${ie(n.name)}</b>
                    <em>${ie(n.title)}</em>
                  </div>
                </div>
                <p class="next-quote">“${ie(n.quote)}”</p>
                <div class="next-meta"><span>${xt.find(h=>h.id===n.terrain).short}</span><span>${bt.find(h=>h.id===n.weather).name}</span><span>${n.laps} LAPS</span></div>
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
                <div><b>${e.bestLap?Pn(e.bestLap):"—"}</b><span>BEST LAP</span></div>
              </div>
              <div class="weather-line"><i>${i.icon}</i><div><b>${i.name.toUpperCase()}</b><span>${i.desc}</span></div><em>WIND ${i.wind.toFixed(1)}</em></div>
            </div>
            <div class="autosave-note">
              <span class="save-dot"></span>
              <div class="autosave-copy">
                <b>AUTOSAVED</b>
                <span>${e.autosave?`${ie(e.autosave.date)} · ${ie(e.autosave.time)}`:"LOCAL PROFILE"}</span>
                <em>${e.autosave?ie(e.autosave.location):"NO SAVE YET"}</em>
              </div>
            </div>
          </aside>
        </div>
        <div class="screen-foot"><span>HELLRIDE: APOCALYPSE</span><span>BUILT FOR TOUCH · WASD ON DESKTOP</span><span>v1.0</span></div>
      </section>`,this.paintPortraits(this.app),this.bindMenu(),this.startMenuMusic()}bindMenu(){const e=this.getProfile(),t={missions:()=>this.route("map"),career:()=>this.route("career"),garage:()=>this.route("garage"),settings:()=>this.route("settings")};ht("[data-action]",this.app).forEach(n=>n.addEventListener("click",()=>{const s=n.dataset.action;if(s==="start")e.tutorialDone?this.route("map"):this.startTutorial();else if(s==="continue")e.tutorialDone?this.route("map"):(this.showModal('<div class="modal-kicker">TRAINING INCOMPLETE</div><h2>THE WASTELAND IS WAITING</h2><p class="modal-lede">Your first race is a tutorial of the controls and survival systems. Finish it before the map opens — or jump in and learn by bleeding.</p><div class="modal-actions"><button class="btn btn-ghost" data-modal-close>STAY</button><button class="btn btn-primary" data-action="skip-tutorial">OPEN MAP ANYWAY</button></div>'),me('[data-action="skip-tutorial"]',this.modals).addEventListener("click",()=>{this.closeModal(),this.route("map")}));else if(t[s])t[s]();else if(s==="next-boss"){const r=this.nextBoss();r&&this.launchBoss(r)}else s==="profile"?this.showProfile():s==="logout"?this.confirmLogout():s==="mute"?this.toggleMute():s==="fullscreen"?this.toggleFullscreen():s==="exit"&&this.showExit()}))}showProfile(){const e=this.getProfile();if(!e)return;const t=mt.find(r=>r.id===e.origin)||mt[0],n=pt.find(r=>r.id===e.equipped)||pt[0];this.showModal(`
      <div class="profile-modal-grid">
        <div class="portrait-frame"><canvas id="profileBig" width="420" height="420"></canvas><span class="portrait-stamp">${t.name.toUpperCase()}</span></div>
        <div>
          <div class="modal-kicker">DRIVER DOSSIER</div>
          <h2>${ie(e.name)}</h2>
          <p class="modal-lede">${ie(t.blurb)} <b>${ie(t.bonus)}.</b></p>
          <div class="stat-grid">
            <div><b>${e.victories||0}</b><span>WINS</span></div>
            <div><b>${e.races||0}</b><span>RACES</span></div>
            <div><b>${e.career.defeated.length}/11</b><span>BOSSES</span></div>
            <div><b>${It(e.money)}</b><span>SCRAP</span></div>
          </div>
          <div class="dossier-line"><span>ACTIVE VEHICLE</span><b>${ie(n.name)}</b></div>
          <div class="dossier-line"><span>TUTORIAL</span><b>${e.tutorialDone?"CLEARED":"PENDING"}</b></div>
          <div class="dossier-line"><span>BEST LAP</span><b>${e.bestLap?Pn(e.bestLap):"NO DATA"}</b></div>
          <div class="dossier-line"><span>LAST AUTOSAVE</span><b>${e.autosave?`${ie(e.autosave.date)} · ${ie(e.autosave.time)}`:"NONE"}</b></div>
          <div class="dossier-line"><span>SAVED AT</span><b>${e.autosave?ie(e.autosave.location):"—"}</b></div>
          <div class="modal-actions"><button class="btn btn-primary" data-modal-close>BACK</button></div>
        </div>
      </div>`);const s=me("#profileBig",this.modals);Fi(s,{...e.looks,name:e.name},{size:420,bg:"#2b1113",gore:e.settings.gore})}confirmLogout(){this.showModal('<div class="modal-kicker">END SESSION</div><h2>LOG OUT?</h2><p class="modal-lede">Your progress is autosaved. The wasteland will keep your grave warm.</p><div class="modal-actions"><button class="btn btn-ghost" data-modal-close>CANCEL</button><button class="btn btn-danger" data-action="do-logout">LOG OUT</button></div>'),me('[data-action="do-logout"]',this.modals).addEventListener("click",()=>{this.store.logout(),this.store.persist(),this.closeModal(),this.route("login")})}toggleMute(){const e=this.getProfile();if(e){if((e.settings.master||0)>.01)this._preMute=e.settings.master,this.store.updateSettings({master:0}),ye.setVolumes({master:0}),this.toast("SOUND OFF","");else{const t=this._preMute||.8;this.store.updateSettings({master:t}),ye.setVolumes({master:t}),this.toast("SOUND ON","good")}this.renderMenu()}}toggleFullscreen(){var e,t,n,s,r;document.fullscreenElement?(r=document.exitFullscreen)==null||r.call(document):((s=(t=(e=document.documentElement).requestFullscreen)==null?void 0:(n=t.call(e)).catch)==null||s.call(n,()=>{}),this.toast("FULLSCREEN REQUESTED","good"))}showExit(){this.showModal(`
      <div class="modal-kicker danger-text">EXIT GAME</div>
      <h2>ABANDON THE WASTELAND?</h2>
      <p class="modal-lede">The browser cannot be closed by a web page. Logging out returns you to profile access. Your save remains on this device until you delete it.</p>
      <div class="modal-actions">
        <button class="btn btn-ghost" data-modal-close>KEEP DRIVING</button>
        <button class="btn btn-danger" data-action="exit-logout">LOG OUT &amp; EXIT</button>
      </div>`),me('[data-action="exit-logout"]',this.modals).addEventListener("click",()=>{this.store.logout(),this.closeModal(),this.route("login"),this.toast("THE WASTELAND WILL WAIT","bad")})}mapSvg(){const e=og.map(n=>{const s=xt.find(r=>r.id===n.id)||xt[0];return`
        <g class="map-zone" transform="translate(${n.x} ${n.y}) rotate(${n.rot})">
          <ellipse rx="${n.rx}" ry="${n.ry}" fill="${s.ground}" opacity=".26"/>
          <ellipse rx="${n.rx}" ry="${n.ry}" fill="none" stroke="${s.accent}" stroke-opacity=".38" stroke-dasharray="5 7" stroke-width="2"/>
          <text y="${n.ry-10}" text-anchor="middle" class="zone-name">${ie(s.short)}</text>
          <text y="${n.ry+8}" text-anchor="middle" class="zone-icon">${s.icon}</text>
        </g>`}).join(""),t=Object.values(Ol).map(([n,s])=>`${n*10},${s*6.8}`).join(" ");return`
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
      </svg>`}renderMap(){var p;const e=this.getProfile();if(!e)return this.route("login");const t=kn.filter(u=>kl(u,this.filter));t.find(u=>u.id===this.selectedMission.id)||(this.selectedMission=t[0]||kn[0]);const n=this.selectedMission,s=xt.find(u=>u.id===n.terrain),r=bt.find(u=>u.id===n.weather),i=on.find(u=>u.id===n.difficulty)||on[1],o=e.completed[n.id],c=fa[n.type],h=n.type==="cup"||n.type==="tournament"?3:null;this.app.innerHTML=`
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
            <span><b>${ie(e.name)}</b><em>LVL ${e.level} · ${It(e.money)}</em></span>
          </div>
        </header>
        <div class="map-layout">
          <div class="map-main">
            <div class="map-toolbar">
              <div class="filter-row">
                ${lg.map(u=>`<button class="filter-chip${this.filter===u.id?" active":""}" data-filter="${u.id}">${u.name}<b>${kn.filter(l=>kl(l,u.id)).length}</b></button>`).join("")}
              </div>
              <div class="map-sky"><i>${bt[(e.level+new Date().getDate())%8].icon}</i> SKY: ${bt[(e.level+new Date().getDate())%8].name.toUpperCase()} <span>LIVE</span></div>
            </div>
            <div class="map-stage" id="mapStage">
              ${this.mapSvg()}
              <div class="map-pins">
                ${t.map(u=>{const[l,g]=Ol[u.id]||[50,50],_=fa[u.type],f=e.completed[u.id];return`<button class="map-pin ${u.type} ${this.selectedMission.id===u.id?"selected":""} ${f?"done":""} ${u.type==="event"?"event-pin":""}" style="left:${l}%;top:${g}%" data-mission="${u.id}" aria-label="${ie(u.name)}">
                    <span class="pin-head"><i>${_.icon}</i></span>
                    <span class="pin-tag"><b>${ie(u.name)}</b><em>${xt.find(d=>d.id===u.terrain).short} · ${_.name}</em></span>
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
            <h2 class="mission-name">${ie(n.name)}</h2>
            <p class="mission-blurb">${ie(n.blurb)}</p>
            <div class="mission-chips">
              <span><i>${s.icon}</i>${s.name}</span>
              <span><i>${r.icon}</i>${r.name}</span>
              <span class="${i.id}">${i.name}</span>
              <span>${h?`3 HEATS · ${n.laps} LAPS`:n.type==="gang"||n.type==="police"?"SURVIVE 60s":`${n.laps} LAPS`}</span>
            </div>
            <div class="objective-box">
              <b>OBJECTIVE</b>
              <p>${n.type==="transport"?"Deliver the cargo. Keep integrity above zero. Walls are expensive.":n.type==="taxi"?"Deliver the passenger. Comfort above zero. They paid in advance.":n.type==="gang"||n.type==="police"?"Survive 60 seconds of pursuit. Hull zero means a closed casket.":n.type==="pvp"?"Beat your rival. Local AI stand-in. No excuses.":n.type==="cup"||n.type==="tournament"?"Score at least 20 championship points across three heats.":"Finish first. Weather does not care about your feelings."}</p>
            </div>
            ${n.vehicleReward?`<div class="vehicle-reward"><span class="vr-icon">${n.event?"☄":"⚙"}</span><div><b>VEHICLE UNLOCK</b><span>${ie(((p=pt.find(u=>u.id===n.vehicleReward))==null?void 0:p.name)||n.vehicleReward)}</span></div>${e.vehicles.includes(n.vehicleReward)?"<em>OWNED</em>":"<em>REWARD</em>"}</div>`:""}
            <div class="reward-grid">
              <div><span>BOUNTY</span><b>${It(n.reward)}</b></div>
              <div><span>XP</span><b>${n.xp}</b></div>
              <div><span>RISK</span><b class="risk-${i.id}">${i.name.toUpperCase()}</b></div>
            </div>
            <div class="weather-note"><i>${r.icon}</i><span><b>${r.name.toUpperCase()}</b>${r.desc}</span><em>GRIP ${(r.grip*100).toFixed(0)}% · WIND ${r.wind.toFixed(1)}</em></div>
            <button class="btn btn-danger btn-block btn-large" data-action="launch-mission" data-mission="${n.id}">${o?"REPLAY CONTRACT":"ACCEPT CONTRACT"} ▶</button>
            <p class="panel-hint">Single player · Local save · PvP is AI</p>
          </aside>
        </div>
        <div class="screen-foot"><span>WASTELAND OPERATIONS</span><span>${t.length} CONTRACTS VISIBLE</span><span>☠ ${e.career.defeated.length}/11 BOSSES</span></div>
      </section>`,this.paintPortraits(this.app),this.bindMap()}bindMap(){var e,t,n,s,r,i;ht("[data-filter]",this.app).forEach(o=>o.addEventListener("click",()=>{this.filter=o.dataset.filter,this.renderMap()})),ht("[data-mission]",this.app).forEach(o=>o.addEventListener("click",c=>{if(o.dataset.action==="launch-mission")return;const h=kn.find(p=>p.id===o.dataset.mission);h&&(this.selectedMission=h,this.renderMap())})),(e=me('[data-action="launch-mission"]',this.app))==null||e.addEventListener("click",()=>this.launchMission(this.selectedMission)),(t=me('[data-action="back"]',this.app))==null||t.addEventListener("click",()=>this.route("menu")),(n=me('[data-action="career"]',this.app))==null||n.addEventListener("click",()=>this.route("career")),(s=me('[data-action="garage"]',this.app))==null||s.addEventListener("click",()=>this.route("garage")),(r=me('[data-action="events"]',this.app))==null||r.addEventListener("click",()=>this.route("events")),(i=me('[data-action="settings"]',this.app))==null||i.addEventListener("click",()=>this.route("settings"))}buildRounds(e){let t;return e.type==="cup"?t=[e.terrain,...Tc.filter(n=>n!==e.terrain)].slice(0,3):e.type==="tournament"?t=[e.terrain,...wc.filter(n=>n!==e.terrain)].slice(0,3):t=[e.terrain],t.map((n,s)=>({terrain:n,weather:s===0?e.weather:tn(bt).id,laps:e.laps}))}launchMission(e){if(!this.getProfile())return;if(e.type==="cup"||e.type==="tournament"){const r=this.buildRounds(e);this.series={mission:e,rounds:r,index:0,points:0,results:[],success:!1},this.activeLaunch={source:"mission",mission:e,series:this.series,config:null},this.startHeat(0);return}const n=e.type==="event"?"race":e.type;this.series=null;const s={mode:n,terrain:e.terrain,weather:e.weather,laps:e.laps,difficulty:e.difficulty,missionId:e.id,escapeTime:60};this.activeLaunch={source:"mission",mission:e,config:s},this.startRace(s)}startHeat(e){const t=this.series;if(!t)return;const n=t.rounds[e];t.index=e,this.getProfile();const s={mode:t.mission.type,terrain:n.terrain,weather:n.weather,laps:n.laps,difficulty:t.mission.difficulty,missionId:t.mission.id,seriesHeat:e+1,seriesTotal:t.rounds.length,escapeTime:60};this.activeLaunch.config=s,this.startRace(s)}startTutorial(){if(!this.getProfile())return;this.series=null;const t={mode:"tutorial",terrain:"wasteland",weather:"cloudy",laps:1,difficulty:"easy",escapeTime:60};this.activeLaunch={source:"tutorial",config:t},this.startRace(t)}launchBoss(e){if(this.bossState(e)==="locked"){this.toast("LOCKED · BREAK THE EARLIER BOSSES FIRST","bad");return}this.closeModal(),this.series=null;const n={mode:"boss",terrain:e.terrain,weather:e.weather,laps:e.laps,difficulty:e.difficulty,bossId:e.id,escapeTime:60};this.activeLaunch={source:"boss",boss:e,config:n},this.startRace(n)}renderCareer(){const e=this.getProfile();if(!e)return this.route("login");const t=e.career.defeated.length,n=yc.map(r=>this.bossCard(r)).join(""),s=Ec.map(r=>this.bossCard(r,!0)).join("");this.app.innerHTML=`
      <section class="screen career-screen">
        <header class="sub-hud">
          <button class="btn btn-ghost btn-small" data-action="back">◀ MENU</button>
          <div class="sub-title"><span class="kicker">THE LADDER</span><h2>CAREER</h2></div>
          <div class="sub-nav"><button class="sub-nav-btn" data-action="map">MISSIONS</button><button class="sub-nav-btn" data-action="garage">GARAGE</button><button class="sub-nav-btn" data-action="events">EVENTS</button></div>
          <div class="sub-profile"><canvas class="mini-avatar" data-profile="${e.id}" width="140" height="140"></canvas><span><b>${ie(e.name)}</b><em>${t}/11 BROKEN</em></span></div>
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
            <div class="boss-grid mains">${s}</div>
          </div>
          <div class="career-rules panel">
            <div><b>01 · ORDER MATTERS</b><p>Only the next boss in the ladder can be challenged. Defeated bosses can be replayed for scrap, but not for duplicate vehicles.</p></div>
            <div><b>02 · THEIR CARS</b><p>Every boss drops their signature vehicle on first victory. Equip it in the Garage.</p></div>
            <div><b>03 · MAIN EVENT</b><p>Mandy-Lee, Zanrich and Drikus unlock only after all eight underbosses are broken. They do not accept apologies.</p></div>
          </div>
        </div>
        <div class="screen-foot"><span>CAREER LADDER</span><span>${t}/11 BROKEN</span><span>THE ROAD IS DEAD · LONG LIVE THE ROAD</span></div>
      </section>`,this.paintPortraits(this.app),this.bindSubnav(),ht("[data-boss-card]",this.app).forEach(r=>r.addEventListener("click",()=>{const i=yi.find(o=>o.id===r.dataset.bossCard);i&&this.showBossModal(i)}))}bossCard(e,t=!1){const n=this.bossState(e),s=pt.find(r=>r.id===e.vehicle);return`<button class="boss-card ${n} ${t?"main":""}" data-boss-card="${e.id}">
      <div class="boss-art"><canvas data-boss="${e.id}" width="360" height="360"></canvas><div class="boss-rank">${String(e.order).padStart(2,"0")}</div></div>
      <div class="boss-info">
        <span class="boss-tag">${t?"DEMIGOD":"UNDERBOSS"}</span>
        <b>${ie(e.name)}</b>
        <em>${ie(e.title)}</em>
        <div class="boss-meta"><span>${xt.find(r=>r.id===e.terrain).short}</span><span>${bt.find(r=>r.id===e.weather).name}</span><span>${e.laps} LAPS</span></div>
        <div class="boss-reward"><span>VEHICLE</span><b>${ie((s==null?void 0:s.name)||e.vehicle)}</b></div>
      </div>
      <div class="boss-status ${n}">${n==="defeated"?"☠ BROKEN":n==="available"?"⚑ CHALLENGE":"🔒 LOCKED"}</div>
    </button>`}showBossModal(e){var c;const t=this.bossState(e),n=pt.find(h=>h.id===e.vehicle),s=xt.find(h=>h.id===e.terrain),r=bt.find(h=>h.id===e.weather),i=on.find(h=>h.id===e.difficulty)||on[1],o=this.getProfile();this.showModal(`
      <div class="boss-modal-grid">
        <div class="boss-modal-art">
          <canvas id="bossBig" width="460" height="460"></canvas>
          <div class="boss-modal-stamp">${t==="defeated"?"BROKEN":"TARGET"}</div>
        </div>
        <div class="boss-modal-copy">
          <div class="modal-kicker">${e.underboss?"UNDERBOSS":"MAIN BOSS"} · #${String(e.order).padStart(2,"0")}</div>
          <h2>${ie(e.name)}</h2>
          <h3>${ie(e.title)}</h3>
          <p class="boss-quote">“${ie(e.quote)}”</p>
          <p class="modal-lede">${ie(e.desc)}</p>
          <div class="mission-chips">
            <span><i>${s.icon}</i>${s.name}</span><span><i>${r.icon}</i>${r.name}</span><span class="${i.id}">${i.name}</span><span>${e.laps} LAPS</span>
          </div>
          <div class="vehicle-reward"><span class="vr-icon">⚙</span><div><b>VEHICLE DROP</b><span>${ie((n==null?void 0:n.name)||e.vehicle)}</span></div>${o.vehicles.includes(e.vehicle)?"<em>OWNED</em>":"<em>FIRST WIN</em>"}</div>
          <div class="reward-grid"><div><span>BOUNTY</span><b>${It(e.reward)}</b></div><div><span>XP</span><b>${250+e.order*60}</b></div><div><span>STATUS</span><b>${t.toUpperCase()}</b></div></div>
          ${t==="available"||t==="defeated"?`<button class="btn btn-danger btn-block btn-large" data-action="challenge-boss">${t==="defeated"?"REMATCH · SCRAP ONLY":"CHALLENGE "+ie(e.name.toUpperCase())} ▶</button>`:`<div class="locked-callout"><b>LOCKED</b><p>Break boss #${e.order-1} first. The ladder does not negotiate.</p></div>`}
        </div>
      </div>`),Fi(me("#bossBig",this.modals),{...e.portrait,name:e.name},{size:460,boss:!0,bg:"#2a1012"}),(c=me('[data-action="challenge-boss"]',this.modals))==null||c.addEventListener("click",()=>this.launchBoss(e))}vbar(e,t,n=""){return`<div class="stat-bar ${n}"><span>${e}</span><div><i style="width:${t}%"></i></div><b>${t}</b></div>`}garageDetail(e,t){const n=this.getProfile().equipped===e.id;return`
      <div class="garage-detail-head">
        <div><span class="kicker">${ie(e.klass)} · ${t?"ACQUIRED":"LOCKED"}</span><h2>${ie(e.name)}</h2></div>
        <span class="garage-color" style="--c:${e.color}"></span>
      </div>
      <p class="garage-desc">${ie(e.desc)}</p>
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
        ${t?`<button class="btn ${n?"btn-ghost":"btn-primary"} btn-block btn-large" data-action="equip" ${n?"disabled":""}>${n?"✓ EQUIPPED":"EQUIP VEHICLE"}</button>`:`<button class="btn btn-ghost btn-block btn-large" disabled>🔒 ${ie(e.unlockText||"LOCKED")}</button>`}
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
              <div class="stage-label"><b>${ie(t.name)}</b><span>${ie(t.klass)}</span></div>
            </div>
            <div class="garage-hint">DRAG NOT REQUIRED · PREVIEW ROTATES · FULLY PROCEDURAL</div>
          </div>
          <div class="garage-detail panel" id="garageDetail">${this.garageDetail(t,n)}</div>
        </div>
        <div class="garage-strip-wrap">
          <div class="garage-strip-head"><span class="kicker">ACQUIRED THROUGH MISSIONS · CAREER · EVENTS</span><span>${e.vehicles.length} UNLOCKED</span></div>
          <div class="vehicle-strip">
            ${pt.map(r=>{const i=e.vehicles.includes(r.id);return`<button class="vehicle-card${r.id===t.id?" selected":""}${i?"":" locked"}" data-vehicle="${r.id}">
                <span class="vehicle-swatch" style="--c:${r.color};--a:${r.accent}"><i></i></span>
                <b>${ie(r.name)}</b><em>${ie(r.klass)}</em>
                <span class="vehicle-state">${i?e.equipped===r.id?"EQUIPPED":"OWNED":"🔒"}</span>
              </button>`}).join("")}
          </div>
        </div>
        <div class="screen-foot"><span>GARAGE · 16 MACHINES</span><span>EVERY KILL LEAVES A CAR</span><span>${It(e.money)}</span></div>
      </section>`,this.paintPortraits(this.app),this.bindSubnav();const s=me("#garageCanvas",this.app);this.garagePreview=new Ym(s),this.garagePreview.setVehicle(t),this.garagePreview.start(),setTimeout(()=>{var r,i;return(i=(r=this.garagePreview)==null?void 0:r.resize)==null?void 0:i.call(r)},30),ht("[data-vehicle]",this.app).forEach(r=>r.addEventListener("click",()=>{this.selectedVehicle=r.dataset.vehicle,this.updateGarageUI()})),this.bindGarageAction()}updateGarageUI(){var o;const e=this.getProfile(),t=pt.find(c=>c.id===this.selectedVehicle);if(!t)return;const n=e.vehicles.includes(t.id);me("#garageDetail",this.app).innerHTML=this.garageDetail(t,n),ht("[data-vehicle]",this.app).forEach(c=>c.classList.toggle("selected",c.dataset.vehicle===t.id));const s=me(".stage-label",this.app);s&&(s.innerHTML=`<b>${ie(t.name)}</b><span>${ie(t.klass)}</span>`);const r=me(".stage-glow",this.app);r&&r.style.setProperty("--c",t.accent);const i=me(".stage-status",this.app);i&&(i.textContent=n?"READY":"RESTRICTED",i.classList.toggle("owned",n)),(o=this.garagePreview)==null||o.setVehicle(t),this.bindGarageAction()}bindGarageAction(){var e;(e=me('[data-action="equip"]',this.app))==null||e.addEventListener("click",()=>{const t=this.getProfile(),n=pt.find(s=>s.id===this.selectedVehicle);!n||!t.vehicles.includes(n.id)||(this.store.update({equipped:n.id}),ye.sfx("reward"),this.toast(`${n.name.toUpperCase()} EQUIPPED`,"good"),this.updateGarageUI())})}bindSubnav(){const e={back:"menu",map:"map",career:"career",garage:"garage",events:"events",settings:"settings",menu:"menu"};ht("[data-action]",this.app).forEach(t=>{const n=t.dataset.action;e[n]&&t.addEventListener("click",()=>this.route(e[n]))})}sliderRow(e,t,n,s=1,r=.01){return`<div class="slider-row"><label for="${e}">${t}</label><input id="${e}" type="range" min="0" max="${s}" step="${r}" value="${n}" /><b id="${e}Val">${Math.round(n*100)}</b></div>`}renderSettings(){const e=this.getProfile();if(!e)return this.route("login");const t=e.settings,n=this.store.slots||[null,null,null];this.app.innerHTML=`
      <section class="screen settings-screen">
        <header class="sub-hud">
          <button class="btn btn-ghost btn-small" data-action="back">◀ MENU</button>
          <div class="sub-title"><span class="kicker">SYSTEM</span><h2>SETTINGS</h2></div>
          <div class="sub-nav"><button class="sub-nav-btn" data-action="map">MISSIONS</button><button class="sub-nav-btn" data-action="career">CAREER</button><button class="sub-nav-btn" data-action="garage">GARAGE</button></div>
          <div class="sub-profile"><canvas class="mini-avatar" data-profile="${e.id}" width="140" height="140"></canvas><span><b>${ie(e.name)}</b><em>PROFILE SETTINGS</em></span></div>
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
              <div class="setting-line"><span>VIDEO QUALITY</span><div class="segmented">${["low","medium","high"].map(s=>`<button class="seg${t.quality===s?" active":""}" data-quality="${s}">${s.toUpperCase()}</button>`).join("")}</div></div>
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
                ${[0,1,2].map(s=>{const r=n[s];return`<div class="save-slot ${r?"filled":""}">
                    <div class="slot-index">0${s+1}</div>
                    <div class="slot-info">
                      <b>${r?ie(r.name):"EMPTY SLOT"}</b>
                      <span>${r?`LVL ${r.level} · ${It(r.money)} · ${new Date(r.savedAt).toLocaleString()}`:"No manual save"}</span>
                    </div>
                    <div class="slot-actions">
                      <button class="btn btn-small ${r?"btn-ghost":"btn-primary"}" data-save="${s}">SAVE</button>
                      <button class="btn btn-small btn-ghost" data-load="${s}" ${r?"":"disabled"}>LOAD</button>
                      <button class="icon-btn small" data-clear="${s}" ${r?"":"disabled"} aria-label="Delete slot">✕</button>
                    </div>
                  </div>`}).join("")}
              </div>
              <p class="settings-note">Autosave writes after every mission, purchase and setting. Manual slots snapshot the current profile.</p>
            </div>
            <div class="settings-card panel">
              <div class="panel-head"><div><span class="kicker">LEGAL</span><h3>THE FINE PRINT</h3></div></div>
              <div class="legal-buttons">
                <button class="btn btn-ghost" data-action="terms">TERMS &amp; CONDITIONS</button>
                <button class="btn btn-ghost" data-action="how">HOW TO PLAY</button>
              </div>
              <div class="dossier-line"><span>PROFILE</span><b>${ie(e.name)} · LVL ${e.level}</b></div>
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
      </section>`,this.paintPortraits(this.app),this.bindSubnav(),this.bindSettings()}bindSettings(){var n,s,r,i,o,c;if(!this.getProfile())return;const t=(h,p)=>{const u=Number(p);this.store.updateSettings({[h]:u}),ye.setVolumes({[h==="master"?"master":h==="music"?"music":"sfx"]:u});const l=document.getElementById(h==="master"?"volMasterVal":h==="music"?"volMusicVal":"volSfxVal");l&&(l.textContent=Math.round(u*100))};[["volMaster","master"],["volMusic","music"],["volSfx","sfx"]].forEach(([h,p])=>{var u;(u=me("#"+h,this.app))==null||u.addEventListener("input",l=>t(p,l.target.value))}),ht("[data-quality]",this.app).forEach(h=>h.addEventListener("click",()=>{const p=h.dataset.quality;this.store.updateSettings({quality:p}),ht("[data-quality]",this.app).forEach(u=>u.classList.toggle("active",u.dataset.quality===p)),this.menuBg.setQuality(p),this.toast(`VIDEO QUALITY · ${p.toUpperCase()}`,"good")})),(n=me('[data-toggle="cameraShake"]',this.app))==null||n.addEventListener("click",h=>{const p=h.currentTarget,u=!this.getProfile().settings.cameraShake;this.store.updateSettings({cameraShake:u}),p.classList.toggle("on",u),p.innerHTML=`<i></i><b>${u?"ON":"OFF"}</b>`}),ht("[data-gore]",this.app).forEach(h=>h.addEventListener("click",()=>{const p=h.dataset.gore;this.store.updateSettings({gore:p}),ht("[data-gore]",this.app).forEach(u=>u.classList.toggle("active",u.dataset.gore===p)),this.toast(`GORE · ${p.toUpperCase()}`,p==="zombie"?"good":"")})),ht("[data-save]",this.app).forEach(h=>h.addEventListener("click",()=>{this.store.saveSlot(Number(h.dataset.save)),this.toast("MANUAL SAVE WRITTEN","good"),this.renderSettings()})),ht("[data-load]",this.app).forEach(h=>h.addEventListener("click",()=>{const p=Number(h.dataset.load),u=this.store.slots[p];u&&(this.showModal(`<div class="modal-kicker">LOAD SAVE</div><h2>OVERWRITE CURRENT PROFILE?</h2><p class="modal-lede">Load <b>${ie(u.name)}</b> from ${new Date(u.savedAt).toLocaleString()}? Current unsaved changes to this profile will be replaced.</p><div class="modal-actions"><button class="btn btn-ghost" data-modal-close>CANCEL</button><button class="btn btn-primary" data-action="confirm-load">LOAD SAVE</button></div>`),me('[data-action="confirm-load"]',this.modals).addEventListener("click",()=>{const l=this.store.loadSlot(p);this.closeModal(),l&&(Us(l),ye.setVolumes(l.settings),this.toast("SAVE LOADED · "+l.name,"good"),this.route("settings"))}))})),ht("[data-clear]",this.app).forEach(h=>h.addEventListener("click",()=>{this.store.clearSlot(Number(h.dataset.clear)),this.toast("SAVE SLOT ERASED","bad"),this.renderSettings()})),(s=me('[data-action="terms"]',this.app))==null||s.addEventListener("click",()=>this.showTerms()),(r=me('[data-action="how"]',this.app))==null||r.addEventListener("click",()=>this.showHowTo()),(i=me('[data-action="mute"]',this.app))==null||i.addEventListener("click",()=>{this.toggleMuteFromSettings()}),(o=me('[data-action="logout"]',this.app))==null||o.addEventListener("click",()=>this.confirmLogout()),(c=me('[data-action="delete-profile"]',this.app))==null||c.addEventListener("click",()=>{const h=this.getProfile();this.showModal(`<div class="modal-kicker danger-text">DELETE PROFILE</div><h2>ERASE ${ie(h.name)}?</h2><p class="modal-lede">Every boss, every car, every manual save and every bad decision will be deleted from this browser. This cannot be undone.</p><div class="modal-actions"><button class="btn btn-ghost" data-modal-close>CANCEL</button><button class="btn btn-danger" data-action="confirm-delete">ERASE EVERYTHING</button></div>`),me('[data-action="confirm-delete"]',this.modals).addEventListener("click",()=>{this.store.remove(h.id),this.closeModal(),this.route("login"),this.toast("PROFILE ERASED","bad")})})}toggleMuteFromSettings(){const e=this.getProfile();if(!e)return;const t=e.settings.master>.01;this.store.updateSettings({master:t?0:this._preMute||.8}),ye.setVolumes({master:t?0:this._preMute||.8}),this.renderSettings()}getDailyEvent(){const t=new Date().toISOString().slice(0,10);let n=0;for(const o of t)n=n*31+o.charCodeAt(0)>>>0;const s=xt[n%xt.length],r=bt[(n>>4)%bt.length],i=["normal","hard","insane"];return{id:"daily_"+t,type:"race",name:"Daily Death Trial",terrain:s.id,weather:r.id,difficulty:i[n%3],laps:2,reward:1200+n%900,xp:280,event:!0,blurb:`The wasteland resets its cruelty every day. Today it chose ${s.name} under ${r.name.toLowerCase()}. One race. One bounty. No repeats after midnight.`,daily:!0}}renderEvents(){var o,c;const e=this.getProfile();if(!e)return this.route("login");const t=kn.find(h=>h.id==="m_blood_moon"),n=this.getDailyEvent(),s=pt.find(h=>h.id===t.vehicleReward),r=e.completed[t.id],i=e.completed[n.id];this.app.innerHTML=`
      <section class="screen events-screen">
        <header class="sub-hud">
          <button class="btn btn-ghost btn-small" data-action="back">◀ MENU</button>
          <div class="sub-title"><span class="kicker">LIMITED CARNAGE</span><h2>SPECIAL EVENTS</h2></div>
          <div class="sub-nav"><button class="sub-nav-btn" data-action="map">MISSIONS</button><button class="sub-nav-btn" data-action="career">CAREER</button><button class="sub-nav-btn" data-action="garage">GARAGE</button></div>
          <div class="sub-profile"><canvas class="mini-avatar" data-profile="${e.id}" width="140" height="140"></canvas><span><b>${ie(e.name)}</b><em>${It(e.money)}</em></span></div>
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
              <p>Three laps on Cinder Peak while a twister peels the mountain apart. Win, and the <b>${ie(s.name)}</b> is yours — a 90-speed predator with a red halo and no conscience.</p>
              <div class="mission-chips"><span><i>♨</i>Cinder Peak</span><span><i>◎</i>Twister</span><span class="hard">Hard</span><span>3 LAPS</span></div>
              <div class="event-reward">
                <span class="event-car-chip" style="--c:${s.color};--a:${s.accent}"></span>
                <div><span>VEHICLE UNLOCK</span><b>${ie(s.name)}</b><em>${e.vehicles.includes(s.id)?"ALREADY OWNED":"FIRST WIN ONLY"}</em></div>
                <strong>${It(t.reward)}</strong>
              </div>
              <button class="btn btn-danger btn-large" data-event="${t.id}">${r?"REPLAY BLOOD MOON":"ENTER BLOOD MOON CUP"} ▶</button>
            </div>
          </div>
          <div class="event-grid">
            <div class="event-card panel">
              <div class="event-card-top"><span class="event-live">LIVE</span><span class="kicker">${new Date().toISOString().slice(0,10)}</span></div>
              <h3>DAILY DEATH TRIAL</h3>
              <p>${ie(n.blurb)}</p>
              <div class="mission-chips"><span><i>${xt.find(h=>h.id===n.terrain).icon}</i>${xt.find(h=>h.id===n.terrain).short}</span><span><i>${bt.find(h=>h.id===n.weather).icon}</i>${bt.find(h=>h.id===n.weather).name}</span><span class="${n.difficulty}">${n.difficulty.toUpperCase()}</span></div>
              <div class="reward-grid"><div><span>BOUNTY</span><b>${It(n.reward)}</b></div><div><span>XP</span><b>${n.xp}</b></div><div><span>STATUS</span><b>${i?"CLEARED":"OPEN"}</b></div></div>
              <button class="btn btn-primary btn-block" data-daily="1">${i?"RUN AGAIN":"RUN TODAY’S TRIAL"} ▶</button>
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
      </section>`,this.paintPortraits(this.app),this.bindSubnav(),ht("[data-event]",this.app).forEach(h=>h.addEventListener("click",()=>{const p=kn.find(u=>u.id===h.dataset.event);p&&this.launchMission(p)})),(o=me("[data-daily]",this.app))==null||o.addEventListener("click",()=>{this.launchSpecialEvent(this.getDailyEvent())}),(c=me("[data-bounty]",this.app))==null||c.addEventListener("click",()=>{const h={id:"bounty_"+Date.now(),type:"race",name:"Boneyard Bounty",terrain:"wasteland",weather:"cloudy",difficulty:"normal",laps:2,reward:500,xp:150,blurb:"A quick loop through the bones of the old world."};this.launchSpecialEvent(h)})}launchSpecialEvent(e){const t={mode:"race",terrain:e.terrain,weather:e.weather,laps:e.laps,difficulty:e.difficulty,missionId:e.id,escapeTime:60};this.series=null,this.activeLaunch={source:"mission",mission:e,config:t},this.startRace(t)}startRace(e){var r;const t=this.getProfile();if(!t)return this.route("login");this.race&&(this.race.dispose(),this.race=null),this.closeModal(),(r=this.garagePreview)==null||r.stop(),this.garagePreview=null,this.menuBg.stop(),this.decor.style.display="none",this.screen="race",document.body.dataset.screen="race",window.scrollTo(0,0),ye.ensure(),ye.setVolumes(t.settings),ye.setScene("race");const n=on.find(i=>i.id===e.difficulty)||on[1],s=new tg(me("#race-canvas"),{mode:e.mode,terrain:e.terrain,weather:e.weather,laps:e.laps,difficulty:n,bossId:e.bossId,vehicleId:t.equipped,profile:t,settings:{...t.settings,quality:t.settings.quality},escapeTime:e.escapeTime,seed:Math.floor(Math.random()*99999),onFinish:i=>this.handleRaceResult(i),onPause:i=>{i?this.showPause():this.closeModal()}});s.updatePositions(),this.race=s}restartRace(){const e=this.activeLaunch;e!=null&&e.config&&(this.closeModal(),this.race&&(this.race.dispose(),this.race=null),this.startRace({...e.config}))}retryContract(){const e=this.activeLaunch;if(e)if(this.closeModal(),this.race&&(this.race.dispose(),this.race=null),e.series){const t=e.series.mission,n=this.buildRounds(t);this.series={mission:t,rounds:n,index:0,points:0,results:[],success:!1},e.series=this.series,this.startHeat(0)}else e.config&&this.startRace({...e.config})}quitRace(){var n;this.closeModal();const e=this.activeLaunch;this.race&&(this.race.dispose(),this.race=null),this.series=null,this.activeLaunch=null;const t=e==null?void 0:e.source;t==="boss"?this.route("career"):t==="tutorial"?this.route("menu"):(n=e==null?void 0:e.mission)!=null&&n.event?this.route("events"):this.route("map")}showPause(){var s,r,i;const e=this.activeLaunch;if(!e)return;const t=!!e.series;this.showModal(`
      <div class="modal-kicker">ENGINE IDLE</div>
      <h2>PAUSED</h2>
      <p class="modal-lede">${t?`Championship heat ${e.series.index+1} of ${e.series.rounds.length} · ${e.series.points} points`:e.source==="boss"?`Boss challenge · ${ie(((s=e.boss)==null?void 0:s.name)||"")}`:e.source==="tutorial"?"Tutorial · first blood":"Contract in progress"}</p>
      <div class="pause-stats">
        <div><span>TERRAIN</span><b>${ie(((r=xt.find(o=>o.id===e.config.terrain))==null?void 0:r.name)||"")}</b></div>
        <div><span>WEATHER</span><b>${ie(((i=bt.find(o=>o.id===e.config.weather))==null?void 0:i.name)||"")}</b></div>
        <div><span>MODE</span><b>${e.config.mode.toUpperCase()}</b></div>
      </div>
      <div class="modal-actions pause-actions">
        <button class="btn btn-primary btn-large" data-action="resume">▶ RESUME</button>
        <button class="btn btn-ghost" data-action="checkpoint">⟲ CHECKPOINT</button>
        <button class="btn btn-ghost" data-action="restart">⟳ RESTART</button>
        <button class="btn btn-ghost" data-action="pause-mute">${(this.getProfile().settings.master||0)>.01?"🔊 MUTE":"🔇 UNMUTE"}</button>
        <button class="btn btn-danger" data-action="quit-race">QUIT RACE</button>
      </div>
      <p class="panel-hint">CHECKPOINT restarts at the last checkpoint with a repaired hull. RESTART re-runs this heat. Quitting abandons the contract and any unclaimed bounty.</p>`,"pause-modal");const n=me(".modal-backdrop",this.modals);n&&(n.dataset.locked="1"),me('[data-action="resume"]',this.modals).addEventListener("click",()=>{var o;this.closeModal(),(o=this.race)==null||o.resume()}),me('[data-action="checkpoint"]',this.modals).addEventListener("click",()=>{var o,c;this.closeModal(),(o=this.race)==null||o.respawnAtCheckpoint(),(c=this.race)==null||c.resume()}),me('[data-action="restart"]',this.modals).addEventListener("click",()=>this.restartRace()),me('[data-action="quit-race"]',this.modals).addEventListener("click",()=>this.quitRace()),me('[data-action="pause-mute"]',this.modals).addEventListener("click",()=>{const c=this.getProfile().settings.master>.01;this.store.updateSettings({master:c?0:this._preMute||.8}),ye.setVolumes({master:c?0:this._preMute||.8}),this.showPause()})}unlockVehicle(e){const t=this.getProfile();return!t||!e||t.vehicles.includes(e)?!1:(t.vehicles.push(e),this.store.persist(),!0)}applyRaceStats(e){const t=this.getProfile();t.races=(t.races||0)+1,e.position===1&&(t.victories=(t.victories||0)+1),e.bestLap&&(!t.bestLap||e.bestLap<t.bestLap)&&(t.bestLap=e.bestLap),this.store.persist()}pointsForPosition(e){return[10,8,6,4,2,1][e-1]||0}handleRaceResult(e){const t=this.activeLaunch;if(!t)return;this.race&&this.race.setPaused(!0),this.applyRaceStats(e);const n=xt.find(l=>l.id===e.terrain),s=(n==null?void 0:n.name)||"THE WASTELAND",r=t.boss?`BOSS · ${t.boss.name}`:t.mission?`${t.mission.event?"EVENT":"CONTRACT"} · ${t.mission.name}`:"FIRST BLOOD TUTORIAL";if(t.series){const l=t.series,g=this.pointsForPosition(e.position);if(l.points+=g,l.results.push({...e,points:g}),e.reason!=="wrecked"&&this.store.autosave(s,`${t.series.mission.name} · HEAT ${l.index+1}`),!(l.index>=l.rounds.length-1))this.showSeriesHeat(e,g);else{l.success=l.points>=20;const f=l.mission,d=on.find(E=>E.id===f.difficulty)||on[1];let m=Math.round(f.reward*(l.points/30)*d.reward),x=Math.round(f.xp*(l.points/30)),M=null;if(l.success){m=Math.round(f.reward*d.reward),x=f.xp,f.vehicleReward&&(M=this.unlockVehicle(f.vehicleReward)?f.vehicleReward:null);const E=this.getProfile(),R=E.completed[f.id]||{wins:0,bestPos:99};E.completed[f.id]={wins:R.wins+1,bestPos:Math.min(R.bestPos||99,e.position)},this.store.persist()}else{const E=this.getProfile();if(l.points>0){const R=E.completed[f.id]||{wins:0,bestPos:99};E.completed[f.id]={wins:R.wins,bestPos:Math.min(R.bestPos||99,e.position)},this.store.persist()}}this.store.addReward(m,x),this.store.autosave(s,`${f.name} · ${l.success?"CUP WON":"SERIES FINAL"}`),this.showRaceResults(e,{success:l.success,money:m,xp:x,unlock:M,title:l.success?"CUP CHAMPION":"SERIES LOST",subtitle:`${f.name.toUpperCase()} · ${l.points}/30 POINTS`,series:l,source:"mission",mission:f})}return}let i=e.success;t.source==="tutorial"&&(i=e.reason==="finished");let o=0,c=0,h=null,p="";const u=this.getProfile();if(t.source==="tutorial")o=i?500:80,c=i?180:30,i&&(u.tutorialDone=!0),p=i?"YOU CAN DRIVE. NOW SURVIVE.":"THE WASTELAND EXPECTS BETTER";else if(t.source==="boss"){const l=t.boss;i?(o=u.career.defeated.includes(l.id)?Math.round(l.reward*.3):l.reward,c=260+l.order*55,u.career.defeated.includes(l.id)||u.career.defeated.push(l.id),u.career.current=u.career.defeated.length,h=u.vehicles.includes(l.vehicle)?null:this.unlockVehicle(l.vehicle)?l.vehicle:null,p=l.boss?"A DEMIGOD HAS FALLEN":"AN UNDERBOSS HAS FALLEN"):(o=150,c=40,p="THE LADDER DOES NOT MOVE"),this.store.persist()}else if(t.source==="mission"){const l=t.mission,g=on.find(_=>_.id===l.difficulty)||on[1];if(i){o=Math.round(l.reward*g.reward),c=l.xp,l.type==="transport"&&(o=Math.round(o*(.65+e.cargo/200))),l.type==="taxi"&&(o=Math.round(o*(.65+e.comfort/200))),(l.type==="gang"||l.type==="police")&&(o=Math.round(o*(.7+e.hull/300))),l.vehicleReward&&(h=u.vehicles.includes(l.vehicleReward)?null:this.unlockVehicle(l.vehicleReward)?l.vehicleReward:null);const _=u.completed[l.id]||{wins:0,bestPos:99};u.completed[l.id]={wins:_.wins+1,bestPos:Math.min(_.bestPos||99,e.position)},p=l.event?"EVENT CLEARED · REWARD CLAIMED":"CONTRACT CLEARED"}else o=90,c=35,p=e.reason==="wrecked"?"YOUR CAR BECAME A GRAVE":"THE CONTRACT REMAINS OPEN",u.completed[l.id]&&(u.completed[l.id].bestPos=Math.min(u.completed[l.id].bestPos||99,e.position));this.store.persist()}this.store.addReward(o,c),i&&this.store.autosave(s,r),this.showRaceResults(e,{success:i,money:o,xp:c,unlock:h,title:i?t.source==="boss"?"BOSS BROKEN":t.source==="tutorial"?"TUTORIAL CLEARED":e.reason==="escaped"?"YOU ESCAPED":"CONTRACT CLEARED":e.reason==="wrecked"?"WRECKED":"DEFEAT",subtitle:p,source:t.source,mission:t.mission,boss:t.boss})}showSeriesHeat(e,t){const n=this.series,s=n.mission,r=n.rounds[n.index+1],i=xt.find(h=>h.id===(r==null?void 0:r.terrain)),o=bt.find(h=>h.id===(r==null?void 0:r.weather));this.showModal(`
      <div class="results-shell series-shell">
        <div class="result-banner ${e.position===1?"win":""}">
          <div class="result-kicker">${ie(s.name.toUpperCase())} · HEAT ${n.index+1}/${n.rounds.length}</div>
          <h1>HEAT ${e.position===1?"WON":"CLEARED"}</h1>
          <p>${Qa(e.position)} place · +${t} championship points</p>
        </div>
        <div class="series-scoreboard">
          <div class="series-big"><b>${n.points}</b><span>/ 30 PTS</span><em>${n.points>=20?"CHAMPIONSHIP PACE":"NEED 20 TO WIN THE CUP"}</em></div>
          <div class="series-heats">${n.results.map((h,p)=>`<div class="series-heat"><span>H${p+1}</span><b>${Qa(h.position)}</b><em>+${h.points}</em></div>`).join("")}<div class="series-heat empty"><span>H${n.index+2}</span><b>?</b><em>?</em></div></div>
        </div>
        ${r?`<div class="next-heat-card"><span class="kicker">NEXT HEAT</span><h3>${ie((i==null?void 0:i.name)||"")} <i>${o==null?void 0:o.icon}</i> ${ie((o==null?void 0:o.name)||"")}</h3><p>${ie((o==null?void 0:o.desc)||"")} · ${r.laps} laps · difficulty remains brutal.</p></div>`:""}
        <div class="modal-actions">
          <button class="btn btn-primary btn-large" data-action="next-heat">START HEAT ${n.index+2} ▶</button>
          <button class="btn btn-ghost" data-action="abandon-series">ABANDON SERIES</button>
        </div>
        <p class="panel-hint">Points: 1st 10 · 2nd 8 · 3rd 6 · 4th 4 · 5th 2 · 6th 1 · Target 20/30</p>
      </div>`,"results-modal series-modal");const c=me(".modal-backdrop",this.modals);c&&(c.dataset.locked="1"),document.body.classList.add("modal-open","result-open"),me('[data-action="next-heat"]',this.modals).addEventListener("click",()=>{this.closeModal(),document.body.classList.remove("result-open"),this.race&&(this.race.dispose(),this.race=null),this.startHeat(n.index+1)}),me('[data-action="abandon-series"]',this.modals).addEventListener("click",()=>{this.closeModal(),document.body.classList.remove("result-open"),this.race&&(this.race.dispose(),this.race=null),this.series=null,this.activeLaunch=null,this.route("map")})}showRaceResults(e,t){var d,m;const n=this.getProfile(),s=xt.find(x=>x.id===e.terrain),r=bt.find(x=>x.id===e.weather),i=t.mission,o=t.boss,c=t.series,h=t.unlock?pt.find(x=>x.id===t.unlock):null,p=t.source,u=t.title,l=t.success?"win":e.reason==="wrecked"?"wreck":"lose",g=p==="boss"?"RETURN TO CAREER":p==="tutorial"?"ENTER THE WASTELAND":p==="event"||i!=null&&i.event?"RETURN TO EVENTS":"RETURN TO MAP",_=o?`${o.name} · ${o.title}`:i?i.name:p==="tutorial"?"First Blood Tutorial":"Wasteland Race";this.showModal(`
      <div class="results-shell">
        <div class="result-banner ${l}">
          <div class="result-kicker">${o?o.boss?"MAIN BOSS":"UNDERBOSS":i?((d=fa[i.type])==null?void 0:d.name)||"CONTRACT":"RACE"} · ${(s==null?void 0:s.short)||""}</div>
          <h1>${ie(u)}</h1>
          <p>${ie(t.subtitle||"")}</p>
          ${c?`<div class="series-final-points"><b>${c.points}</b><span>/ 30 PTS</span><em>${c.success?"CHAMPION":"TARGET 20"}</em></div>`:""}
        </div>
        <div class="results-body">
          <div class="results-left">
            <div class="result-position">
              <div class="position-big">${Qa(e.position)}</div>
              <div><span>FINISH POSITION</span><b>OF ${e.total} DRIVERS</b></div>
              ${t.success?'<div class="result-seal">☠<span>CLEARED</span></div>':""}
            </div>
            <div class="result-stats">
              <div><span>TIME</span><b>${Pn(e.time)}</b></div>
              <div><span>BEST LAP</span><b>${Pn(e.bestLap)}</b></div>
              <div><span>MISSION</span><b>${ie(_)}</b></div>
              <div><span>CONDITIONS</span><b>${(r==null?void 0:r.name)||""} · ${(s==null?void 0:s.name)||""}</b></div>
            </div>
            ${i&&(i.type==="transport"||i.type==="taxi")?`
              <div class="objective-results">
                <div><span>${i.type==="transport"?"CARGO":"COMFORT"}</span><div class="rh-bar"><i style="width:${i.type==="transport"?e.cargo:e.comfort}%"></i></div><b>${Math.round(i.type==="transport"?e.cargo:e.comfort)}%</b></div>
                <div><span>HULL</span><div class="rh-bar"><i style="width:${e.hull}%"></i></div><b>${Math.round(e.hull)}%</b></div>
              </div>`:""}
            ${(i==null?void 0:i.type)==="gang"||(i==null?void 0:i.type)==="police"?`<div class="objective-results"><div><span>HULL</span><div class="rh-bar"><i style="width:${e.hull}%"></i></div><b>${Math.round(e.hull)}%</b></div></div>`:""}
            <div class="reward-panel">
              <div class="reward-line"><span>BOUNTY</span><b>${It(t.money)}</b></div>
              <div class="reward-line"><span>EXPERIENCE</span><b>+${t.xp} XP</b></div>
              ${t.money===0?'<p class="reward-note">No bounty for a failed contract. The car repairs are also your problem.</p>':""}
            </div>
            ${n.autosave?`<div class="result-autosave"><span class="save-dot"></span><div><b>AUTOSAVED</b><span>${ie(n.autosave.date)} · ${ie(n.autosave.time)}</span><em>${ie(n.autosave.location)}</em></div></div>`:""}
            ${h?`<div class="unlock-banner"><span class="unlock-icon">⚙</span><div><span>NEW VEHICLE ACQUIRED</span><b>${ie(h.name)}</b><em>${ie(h.desc)}</em></div><button class="btn btn-small btn-primary" data-action="result-garage">GARAGE</button></div>`:""}
            ${o&&t.success&&!h&&n.vehicles.includes(o.vehicle)?`<div class="unlock-banner owned"><span class="unlock-icon">✓</span><div><span>VEHICLE</span><b>${ie(((m=pt.find(x=>x.id===o.vehicle))==null?void 0:m.name)||"")}</b><em>Already in your garage.</em></div></div>`:""}
            ${p==="tutorial"&&t.success?'<div class="tutorial-complete"><b>TUTORIAL COMPLETE</b><p>The map is open. 13 contracts, 11 bosses, 15 territories and 8 weather hells are waiting. Your special move is tied to your origin — use it when the meter is full.</p></div>':""}
          </div>
          <div class="results-right">
            <div class="standings-head"><span>FINAL STANDINGS</span><b>${e.total} DRIVERS</b></div>
            <div class="standings">
              ${e.standings.map((x,M)=>`<div class="standing ${x.isPlayer?"player":""} ${x.boss?"boss":""}">
                <span class="standing-pos">${String(M+1).padStart(2,"0")}</span>
                <div><b>${ie(x.name)}</b><em>${ie(x.vehicle)}</em></div>
                <span class="standing-time">${x.finished?Pn(x.time):"DNF"}</span>
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
      </div>`,"results-modal");const f=me(".modal-backdrop",this.modals);f&&(f.dataset.locked="1"),document.body.classList.add("modal-open","result-open"),me('[data-action="retry"]',this.modals).addEventListener("click",()=>{document.body.classList.remove("result-open"),this.retryContract()}),ht('[data-action="result-garage"]',this.modals).forEach(x=>x.addEventListener("click",()=>{document.body.classList.remove("result-open"),this.closeModal(),this.race&&(this.race.dispose(),this.race=null),this.activeLaunch=null,this.series=null,this.route("garage")})),me('[data-action="result-continue"]',this.modals).addEventListener("click",()=>{var E,R,A;document.body.classList.remove("result-open"),this.closeModal(),this.race&&(this.race.dispose(),this.race=null);const x=(E=this.activeLaunch)==null?void 0:E.source,M=(A=(R=this.activeLaunch)==null?void 0:R.mission)==null?void 0:A.event;this.activeLaunch=null,this.series=null,x==="boss"?this.route("career"):x==="tutorial"?this.route("map"):M?this.route("events"):this.route("map")})}}const er=document.getElementById("boot-splash");new cg;requestAnimationFrame(()=>{requestAnimationFrame(()=>{er&&(er.classList.add("done"),setTimeout(()=>er.remove(),900)),document.body.classList.add("ready")})});
