// -----------------------------------------------------------------------------
// HELLRIDE: APOCALYPSE — static world data
// -----------------------------------------------------------------------------

export const GAME_TITLE = 'HELLRIDE'
export const GAME_SUBTITLE = 'APOCALYPSE'

export const ORIGINS = [
  { id: 'human', name: 'Human', blurb: 'Fragile flesh. Stubborn soul.', skin: '#b9866b', bonus: 'Balanced grip', mod: { grip: 1.0 } },
  { id: 'mutant', name: 'Mutant', blurb: 'Toxic blood, iron bones.', skin: '#8aa86b', bonus: '+Armor', mod: { armor: 1.18 } },
  { id: 'ghost', name: 'Ghost', blurb: 'Half here. All terror.', skin: '#a9b8c6', bonus: '+Top speed', mod: { speed: 1.05 } },
  { id: 'ghoul', name: 'Ghoul', blurb: 'Dead eyes, hungry engine.', skin: '#85837d', bonus: '+Boost', mod: { boost: 1.15 } },
  { id: 'demon', name: 'Demon', blurb: 'Hell sent its own chauffeur.', skin: '#a34a3b', bonus: '+Acceleration', mod: { accel: 1.12 } },
  { id: 'demigod', name: 'Demigod', blurb: 'Born of thunder and rust.', skin: '#c7a465', bonus: '+All stats, +ego', mod: { speed: 1.04, accel: 1.04, grip: 1.04 } }
]

export const GENDERS = [
  { id: 'male', label: 'Male' },
  { id: 'female', label: 'Female' }
]

export const FACE_STYLES = [
  { id: 'sharp', label: 'Sharp' },
  { id: 'round', label: 'Round' },
  { id: 'gaunt', label: 'Gaunt' },
  { id: 'broad', label: 'Broad' }
]

export const HAIR_STYLES = [
  { id: 'mohawk', label: 'Mohawk' },
  { id: 'wild', label: 'Wild' },
  { id: 'long', label: 'Long' },
  { id: 'braids', label: 'Braids' },
  { id: 'ponytail', label: 'Ponytail' },
  { id: 'buzz', label: 'Buzzcut' },
  { id: 'bald', label: 'Bald' },
  { id: 'hood', label: 'Hooded' }
]

export const HAIR_COLORS = [
  { id: 'black', label: 'Raven', value: '#151316' },
  { id: 'brown', label: 'Dirt', value: '#5b3a25' },
  { id: 'blonde', label: 'Bone', value: '#c8b07a' },
  { id: 'red', label: 'Blood', value: '#8e2a20' },
  { id: 'white', label: 'Ash', value: '#d8d2c4' },
  { id: 'blue', label: 'Cobalt', value: '#24557a' },
  { id: 'green', label: 'Toxic', value: '#517a3a' },
  { id: 'pink', label: 'Candy', value: '#a84a72' }
]

export const EYE_COLORS = [
  { id: 'blue', label: 'Shocking Blue', value: '#37c8ff', glow: '#37c8ff' },
  { id: 'green', label: 'Toxic Green', value: '#7bff49', glow: '#7bff49' },
  { id: 'amber', label: 'Ember', value: '#ffb13b', glow: '#ffa020' },
  { id: 'red', label: 'Hellfire', value: '#ff3b30', glow: '#ff2a1a' },
  { id: 'violet', label: 'Witchlight', value: '#c46bff', glow: '#a94bff' },
  { id: 'grey', label: 'Dead Grey', value: '#a8adb2', glow: null },
  { id: 'white', label: 'Blind White', value: '#f2f0e8', glow: '#fffbe0' }
]

export const EYE_STYLES = [
  { id: 'human', label: 'Human' },
  { id: 'cyber', label: 'Cyber' },
  { id: 'hollow', label: 'Hollow' }
]

export const FACIAL_HAIR = [
  { id: 'none', label: 'None' },
  { id: 'stubble', label: 'Stubble' },
  { id: 'mustache', label: 'Mustache' },
  { id: 'goatee', label: 'Goatee' },
  { id: 'beard', label: 'Full Beard' },
  { id: 'braided', label: 'Braided Beard' }
]

export const SCARS = [
  { id: 'none', label: 'None' },
  { id: 'eye', label: 'Eye Scar' },
  { id: 'cheek', label: 'Cheek Slash' },
  { id: 'x', label: 'Crossed' },
  { id: 'burn', label: 'Burn Mark' }
]

export const HEADGEAR = [
  { id: 'none', label: 'None' },
  { id: 'goggles', label: 'Goggles' },
  { id: 'bandana', label: 'Bandana' },
  { id: 'horns', label: 'Horns' }
]

// ---------------------------------------------------------------------------
// Terrain — 15 apocalyptic biomes
// ---------------------------------------------------------------------------
export const TERRAINS = [
  {
    id: 'dunes', name: 'Shifting Dunes', short: 'DUNES', icon: '≋',
    sky: '#4a3d33', horizon: '#c59058', fog: '#8d6a49', ground: '#a67b4b', road: '#5d544a',
    accent: '#f0b25c', props: ['dune', 'rock', 'wreck', 'cactus'], elevation: 3.2, grip: 0.92,
    blurb: 'Buried highways and hungry quicksand.'
  },
  {
    id: 'mountains', name: "Titan's Spine", short: 'MOUNTAINS', icon: '▲',
    sky: '#20242c', horizon: '#8496ad', fog: '#596575', ground: '#525b64', road: '#3f454c',
    accent: '#bdd7ec', props: ['mountain', 'pine', 'rock', 'wreck'], elevation: 10, grip: 0.96,
    blurb: 'Knife-edge passes above the cloud line.'
  },
  {
    id: 'desert', name: 'Ashen Desert', short: 'DESERT', icon: '☼',
    sky: '#3a302c', horizon: '#c78d4c', fog: '#94714d', ground: '#b08c58', road: '#57514b',
    accent: '#ffcd6d', props: ['dune', 'rock', 'wreck', 'bones'], elevation: 2.2, grip: 0.94,
    blurb: 'A furnace that remembers every skeleton.'
  },
  {
    id: 'warzone', name: 'No Man’s Land', short: 'WAR ZONE', icon: '✶',
    sky: '#2a2926', horizon: '#a76f43', fog: '#6e5a49', ground: '#6c6252', road: '#3c3b37',
    accent: '#ff6a3d', props: ['bunker', 'wire', 'wreck', 'crater'], elevation: 3.6, grip: 0.9,
    blurb: 'Shell craters, barbed wire, and live ordnance.'
  },
  {
    id: 'rainforest', name: 'Rotwood Rainforest', short: 'RAINFOREST', icon: '♣',
    sky: '#202925', horizon: '#62806a', fog: '#3f5e50', ground: '#3c5a3a', road: '#3c403b',
    accent: '#7dffb0', props: ['tree', 'fern', 'wreck', 'rock'], elevation: 4.4, grip: 0.87,
    blurb: 'The canopy drips acid. The roots move.'
  },
  {
    id: 'dystopia', name: 'Neon Dystopia', short: 'DYSTOPIA', icon: '⌁',
    sky: '#171326', horizon: '#7a2b6a', fog: '#3d2348', ground: '#26212e', road: '#1f1d25',
    accent: '#ff3fb4', props: ['tower', 'sign', 'wreck', 'pylon'], elevation: 2.8, grip: 1.02,
    blurb: 'Corporations fell. The neon never did.'
  },
  {
    id: 'mines', name: 'Black Vein Mines', short: 'MINES', icon: '⛏',
    sky: '#191b1e', horizon: '#715844', fog: '#37332e', ground: '#3b342e', road: '#2f2b28',
    accent: '#ffba52', props: ['mine', 'cart', 'rock', 'pylon'], elevation: 5.5, grip: 0.93,
    blurb: 'Tunnels lit by leaking gas and bad decisions.'
  },
  {
    id: 'beach', name: 'Dead Tide Beach', short: 'BEACH', icon: '≈',
    sky: '#2a3238', horizon: '#9d9a80', fog: '#6a7270', ground: '#a79b7c', road: '#565653',
    accent: '#67e1d8', props: ['palm', 'wreck', 'rock', 'bones'], elevation: 1.6, grip: 0.86,
    blurb: 'The ocean is gone. The riptide stayed.'
  },
  {
    id: 'city', name: 'Ruined Metropolis', short: 'CITY', icon: '▥',
    sky: '#1f2228', horizon: '#865c4a', fog: '#4a4443', ground: '#42403e', road: '#262629',
    accent: '#ff8a3d', props: ['tower', 'wreck', 'sign', 'rubble'], elevation: 2.0, grip: 1.0,
    blurb: 'Downtown is a cemetery with streetlights.'
  },
  {
    id: 'suburbs', name: 'Ashfall Suburbs', short: 'SUBURBS', icon: '⌂',
    sky: '#2b2b2e', horizon: '#9b6e58', fog: '#635b58', ground: '#5e5c53', road: '#343537',
    accent: '#ffae5c', props: ['house', 'wreck', 'tree', 'rubble'], elevation: 2.4, grip: 0.98,
    blurb: 'White picket fences, blackened lawns.'
  },
  {
    id: 'jungle', name: 'Venom Jungle', short: 'JUNGLE', icon: '☣',
    sky: '#17251d', horizon: '#4f824e', fog: '#2e5538', ground: '#2d4b2d', road: '#333a33',
    accent: '#b8ff3d', props: ['tree', 'fern', 'idol', 'wreck'], elevation: 4.8, grip: 0.84,
    blurb: 'Every vine is a vein. Every flower has teeth.'
  },
  {
    id: 'ice', name: 'Frozen Hells', short: 'ICE TUNDRA', icon: '❄',
    sky: '#253039', horizon: '#bcd3dd', fog: '#879aa5', ground: '#c3d5dc', road: '#4b5a62',
    accent: '#aef4ff', props: ['ice', 'pine', 'wreck', 'rock'], elevation: 3.0, grip: 0.72,
    blurb: 'A white grave that goes on forever.'
  },
  {
    id: 'volcano', name: 'Cinder Peak', short: 'VOLCANO', icon: '♨',
    sky: '#221515', horizon: '#e0572b', fog: '#6d2d21', ground: '#3a2b28', road: '#2a2423',
    accent: '#ff8a2b', props: ['lava', 'rock', 'wreck', 'bones'], elevation: 7.5, grip: 0.95,
    blurb: 'The road is cooling. Sort of.'
  },
  {
    id: 'wasteland', name: 'The Great Wastes', short: 'WASTELAND', icon: '⌖',
    sky: '#302e2b', horizon: '#9b7f5b', fog: '#655b4d', ground: '#746b59', road: '#3f3d38',
    accent: '#e4c264', props: ['wreck', 'bones', 'rock', 'pylon'], elevation: 2.6, grip: 0.91,
    blurb: 'The world ended here. It never left.'
  },
  {
    id: 'swamp', name: 'Mire of Bones', short: 'SWAMP', icon: '☠',
    sky: '#1d2422', horizon: '#62705b', fog: '#39453d', ground: '#3b4438', road: '#33352f',
    accent: '#a9d96c', props: ['tree', 'bones', 'fern', 'wreck'], elevation: 2.1, grip: 0.78,
    blurb: 'The mud chews. The dead watch.'
  }
]

export const WEATHERS = [
  { id: 'clear', name: 'Clear Sky', icon: '☾', tint: '#c79a72', fog: 0.9, grip: 1.0, wind: 0.2, hazard: 'none', desc: 'A rare, ugly calm.' },
  { id: 'cloudy', name: 'Cloudy', icon: '☁', tint: '#8c8a8a', fog: 1.1, grip: 1.0, wind: 0.4, hazard: 'none', desc: 'The sky is a bruise.' },
  { id: 'acid', name: 'Acid Rain', icon: '☢', tint: '#8db36a', fog: 1.35, grip: 0.8, wind: 0.5, hazard: 'acid', desc: 'Green rain eats paint and skin.' },
  { id: 'storm', name: 'Thunderstorm', icon: 'ϟ', tint: '#6a7c9e', fog: 1.45, grip: 0.86, wind: 0.8, hazard: 'lightning', desc: 'Lightning hunts the leader.' },
  { id: 'twister', name: 'Twister', icon: '◎', tint: '#a68c6e', fog: 1.5, grip: 0.88, wind: 1.7, hazard: 'tornado', desc: 'The wind has a body.' },
  { id: 'hurricane', name: 'Hurricane', icon: '≋', tint: '#6d8591', fog: 1.55, grip: 0.75, wind: 2.2, hazard: 'wind', desc: 'Crosswinds with a grudge.' },
  { id: 'flood', name: 'Flood', icon: '≈', tint: '#5d7a72', fog: 1.4, grip: 0.65, wind: 0.6, hazard: 'water', desc: 'Black water over the asphalt.' },
  { id: 'quicksand', name: 'Quicksand', icon: '◉', tint: '#a48755', fog: 1.25, grip: 0.7, wind: 0.5, hazard: 'sink', desc: 'The ground is a mouth.' }
]

export const DIFFICULTIES = [
  { id: 'easy', name: 'Easy', ai: 0.82, reward: 0.8, desc: 'The wasteland goes easy on you.' },
  { id: 'normal', name: 'Normal', ai: 0.94, reward: 1.0, desc: 'A fair fight for a bad world.' },
  { id: 'hard', name: 'Hard', ai: 1.05, reward: 1.3, desc: 'Everyone wants you dead.' },
  { id: 'insane', name: 'Insane', ai: 1.14, reward: 1.6, desc: 'Drikus is watching. Smiling.' }
]

export const RACE_LENGTHS = [
  { id: 'short', name: 'Short', laps: [2, 5], desc: '2–5 laps · quick violence' },
  { id: 'medium', name: 'Medium', laps: [2, 3], desc: '2–3 laps · a proper haul' },
  { id: 'long', name: 'Long', laps: [1, 2], desc: '1–2 laps · endurance hell' }
]

// ---------------------------------------------------------------------------
// Vehicles
// ---------------------------------------------------------------------------
export const VEHICLES = [
  {
    id: 'rust_reaper', name: 'Rust Reaper', klass: 'Muscle', shape: 'muscle',
    color: '#7b3b2a', accent: '#d9a441', desc: 'A dead man’s V8 held together by spite.',
    speed: 62, accel: 66, grip: 62, armor: 50, boost: 8, unlock: 'start'
  },
  {
    id: 'acid_runner', name: 'Acid Runner', klass: 'Buggy', shape: 'buggy',
    color: '#586b2c', accent: '#b6ff37', desc: 'Built for green rain and bad terrain.',
    speed: 64, accel: 70, grip: 71, armor: 45, boost: 9, unlock: 'mission', unlockText: 'Complete “Acid Run”'
  },
  {
    id: 'dune_worm', name: 'Dune Worm', klass: 'Raider', shape: 'buggy',
    color: '#a67b45', accent: '#ffcf6a', desc: 'Wide tires, wider grin. Eats dunes.',
    speed: 67, accel: 68, grip: 69, armor: 55, boost: 8, unlock: 'mission', unlockText: 'Complete “Sand Delivery”'
  },
  {
    id: 'hearse_taxi', name: 'Last Ride Taxi', klass: 'Hearse', shape: 'sedan',
    color: '#232322', accent: '#ffbe3d', desc: 'Fares pay double if they arrive breathing.',
    speed: 60, accel: 60, grip: 65, armor: 62, boost: 10, unlock: 'mission', unlockText: 'Complete “Fare to Hell”'
  },
  {
    id: 'anubis_chariot', name: 'Anubis Chariot', klass: 'God-tier', shape: 'exotic',
    color: '#191817', accent: '#e7b93f', desc: 'Ichi’s jackal-headed war barge.',
    speed: 79, accel: 78, grip: 73, armor: 70, boost: 13, unlock: 'career', unlockText: 'Defeat Ichi'
  },
  {
    id: 'cerberus_fang', name: 'Cerberus Fang', klass: 'Juggernaut', shape: 'truck',
    color: '#d4d0c4', accent: '#9d1f24', desc: 'Three jaws. One gearbox.',
    speed: 74, accel: 72, grip: 69, armor: 82, boost: 12, unlock: 'career', unlockText: 'Defeat Chloe'
  },
  {
    id: 'valkyrie', name: 'Valkyrie', klass: 'Interceptor', shape: 'exotic',
    color: '#d8dce0', accent: '#4bc8ff', desc: 'Jill’s silver spear. It only knows forward.',
    speed: 86, accel: 82, grip: 75, armor: 56, boost: 14, unlock: 'career', unlockText: 'Defeat Jill'
  },
  {
    id: 'wool_reaper', name: 'Wool Reaper', klass: 'Battering Ram', shape: 'truck',
    color: '#d8d2c1', accent: '#6a1e1e', desc: 'Timone’s evil sheep. It headbutts first.',
    speed: 68, accel: 74, grip: 66, armor: 78, boost: 11, unlock: 'career', unlockText: 'Defeat Timone'
  },
  {
    id: 'foxfire', name: 'Foxfire', klass: 'Drifter', shape: 'muscle',
    color: '#8c3c1f', accent: '#ff8b2b', desc: 'Domino’s sly little lie with a spoiler.',
    speed: 81, accel: 79, grip: 84, armor: 52, boost: 13, unlock: 'career', unlockText: 'Defeat Domino'
  },
  {
    id: 'bubble_bumper', name: 'Bubble Bumper', klass: 'Goof', shape: 'buggy',
    color: '#6b3f76', accent: '#8cffcf', desc: 'It shouldn’t work. It absolutely does.',
    speed: 73, accel: 77, grip: 70, armor: 64, boost: 17, unlock: 'career', unlockText: 'Defeat Bubbles'
  },
  {
    id: 'midnight_coffin', name: 'Midnight Coffin', klass: 'Shadow', shape: 'muscle',
    color: '#0d0e10', accent: '#5c7c9b', desc: 'Oscar’s black-on-black funeral.',
    speed: 84, accel: 80, grip: 76, armor: 58, boost: 13, unlock: 'career', unlockText: 'Defeat Oscar'
  },
  {
    id: 'boost_hog', name: 'Boost Hog', klass: 'Speed Freak', shape: 'truck',
    color: '#1c1b1a', accent: '#ff5c2b', desc: 'Sussie’s fat black rocket. All nitrous.',
    speed: 82, accel: 88, grip: 67, armor: 72, boost: 20, unlock: 'career', unlockText: 'Defeat Sussie'
  },
  {
    id: 'night_queen', name: 'Night Queen', klass: 'Royalty', shape: 'exotic',
    color: '#0b0b10', accent: '#37c8ff', desc: 'Mandy-Lee’s black throne. The blue eyes are headlights.',
    speed: 88, accel: 84, grip: 80, armor: 68, boost: 16, unlock: 'career', unlockText: 'Defeat Mandy-Lee'
  },
  {
    id: 'beast_titan', name: 'Beast Titan', klass: 'Demigod', shape: 'truck',
    color: '#5b3d24', accent: '#ff7a24', desc: 'Zanrich’s animal. It breathes through the grille.',
    speed: 85, accel: 83, grip: 78, armor: 94, boost: 14, unlock: 'career', unlockText: 'Defeat Zanrich'
  },
  {
    id: 'jester_chaos', name: 'Jester of Chaos', klass: 'Insanity', shape: 'exotic',
    color: '#3a1c56', accent: '#66ff3b', desc: 'Drikus’s punchline. Nobody is laughing.',
    speed: 92, accel: 90, grip: 82, armor: 75, boost: 19, unlock: 'career', unlockText: 'Defeat Drikus the Insane'
  },
  {
    id: 'blood_moon_gt', name: 'Blood Moon GT', klass: 'Event', shape: 'exotic',
    color: '#4b0d12', accent: '#ff3d38', desc: 'A special-event predator with a red halo.',
    speed: 90, accel: 87, grip: 83, armor: 60, boost: 18, unlock: 'event', unlockText: 'Win the Blood Moon Cup'
  }
]

// ---------------------------------------------------------------------------
// Career story and boss roster
// ---------------------------------------------------------------------------
export const CAMPAIGN_STORY = {
  title: 'The Crownroad War',
  intro: 'When the old world burned, the racing circuits became borders and the finish line became law. Mandy-Lee crowned herself Queen of Racing, then sent her generals to seize every road worth owning. You arrive with a patched car, no allies, and one rule: the wasteland belongs to whoever can hold the wheel.',
  chapters: [
    {
      title: 'I · Ashes at the Starting Line',
      text: 'The first invitation is a wrecked car left across your path, its hood stamped with Mandy-Lee’s crown. The Queen has outlawed independent races; every road now pays her toll. You have a patched engine, a half-empty tank, and no crew. Win the first scraps of territory and the scattered settlements begin to whisper your name.'
    },
    {
      title: 'II · The Generals’ Road',
      text: 'Ichi weighs your nerve in the Black Nile mines. Chloe sends her hellhound pack across the frozen border. Jill cuts through the mountain storm like a silver blade, while Timone rolls a wall of armored fleece out of the Rotwood. Each victory opens a route and exposes the truth: the generals are not merely guarding roads. They are diverting fuel, steel, and food toward the Queen’s hidden capital.'
    },
    {
      title: 'III · No Safe Shoulder',
      text: 'The closer you get to the capital, the less the races resemble races. Domino turns the suburbs into a maze of false shortcuts. Bubbles makes the flooded coast a laughing demolition pit. Oscar waits in the blackout streets, where an engine note is the only warning. At the edge of the wasteland, Sussie burns through the Queen’s last reserve of boost fuel in a three-lap chase. Break the final underboss and the whole frontier rises behind you—but Mandy-Lee has already heard the revolt coming.'
    },
    {
      title: 'IV · The Queen’s Redline',
      text: 'Mandy-Lee meets you beneath the dead neon, crowned in black steel and surrounded by the machines she took from every defeated rival. She offers one bargain: kneel, keep your car, and live under her flag. Refuse, and the capital becomes a single brutal circuit. The Queen drives to erase the rebellion in one night. Beat her, and the crown is yours to refuse—or claim.'
    },
    {
      title: 'V · The Beast and the Last Laugh',
      text: 'The crown was never the finish. Zanrich, the Wild Demigod, tears open the volcano road to prove that strength answers to no ruler. His Beast Titan turns the climb into a moving landslide. Then Drikus, King of Insanity, summons the survivors to the jungle for a final race beneath a sky split by lightning. The route changes, the rules collapse, and every rival you spared—or inspired—rides the storm with you. Cross the last line, and decide what racing will mean in a world that has forgotten how to choose.'
    }
  ]
}

export const BOSSES = [
  {
    id: 'ichi', name: 'Ichi', title: 'Warden of the Black Nile', underboss: true, order: 1,
    terrain: 'mines', weather: 'storm', difficulty: 'easy', laps: 2,
    vehicle: 'anubis_chariot', portrait: { origin: 'ghoul', headgear: 'anubis', skin: '#7d745d', hair: 'bald', eyes: 'amber', eyeStyle: 'hollow', scar: 'none' },
    quote: 'Your heart weighs less than a spark plug.',
    desc: 'General Ichi, the jackal-faced commander of the Black Nile. He weighs every challenger like the dead and sends the unworthy into the mines.',
    story: 'Ichi was the first general to swear his wheels to Mandy-Lee. He believes the old law of the scales still rules the wasteland: only the strong deserve a road. Beat him, and his dead-gold chariot becomes your first proof that the Queen can be challenged.',
    reward: 900
  },
  {
    id: 'chloe', name: 'Chloe', title: 'The White Cerberus', underboss: true, order: 2,
    terrain: 'ice', weather: 'cloudy', difficulty: 'easy', laps: 2,
    vehicle: 'cerberus_fang', portrait: { origin: 'mutant', headgear: 'ears', skin: '#d8d3c6', hair: 'white', eyes: 'red', eyeStyle: 'cyber', scar: 'eye', fangs: true },
    quote: 'Three heads. Zero patience.',
    desc: 'General Chloe is the White Cerberus, a hound of hell who runs the Queen’s frozen border. Her three-part engine growl is the last warning before the pack hits.',
    story: 'Chloe turned a pack of abandoned war-hounds into the Queen’s most feared patrol. She treats the frozen pass as her kennel and every trespasser as prey. Survive her hunt and the Cerberus Fang is yours.',
    reward: 1100
  },
  {
    id: 'jill', name: 'Jill', title: 'The Majestic', underboss: true, order: 3,
    terrain: 'mountains', weather: 'hurricane', difficulty: 'normal', laps: 2,
    vehicle: 'valkyrie', portrait: { origin: 'demigod', headgear: 'none', skin: '#d5b78f', hair: 'long', hairColor: '#d8d2c4', eyes: 'blue', eyeStyle: 'human', scar: 'none', gender: 'female' },
    quote: 'Speed is the only prayer I answer.',
    desc: 'Poised, untouchable, and gone before the thunder lands. Her silver interceptor leaves light behind.',
    story: 'Jill rules the mountain pass from the seat of a silver interceptor, arriving only when the storm is loud enough to hide her engine. She once raced for the Queen because no one else could keep up. Show her that the road can belong to more than the fastest, and the Valkyrie will carry your revolt through the clouds.',
    reward: 1300
  },
  {
    id: 'timone', name: 'Timone', title: 'The Evil Sheep', underboss: true, order: 4,
    terrain: 'rainforest', weather: 'acid', difficulty: 'normal', laps: 2,
    vehicle: 'wool_reaper', portrait: { origin: 'mutant', headgear: 'ears', skin: '#c8c1ae', hair: 'white', eyes: 'green', eyeStyle: 'human', scar: 'x', wool: true },
    quote: 'Baa. Baa. Bleed.',
    desc: 'Timone, the white-fluffy general, leads a woolly convoy through the Rotwood. Beneath the soft fleece is a hard-eyed tactician who never lets the flock fall out of formation.',
    story: 'The Queen gave Timone the ruined greenbelt and a regiment of armored livestock. He made the flock into a moving wall, then made the wall feared. Scatter his formation and the Wool Reaper is yours.',
    reward: 1500
  },
  {
    id: 'domino', name: 'Domino', title: 'The Sly Fox', underboss: true, order: 5,
    terrain: 'suburbs', weather: 'twister', difficulty: 'normal', laps: 2,
    vehicle: 'foxfire', portrait: { origin: 'mutant', headgear: 'ears', skin: '#b66a3b', hair: 'wild', hairColor: '#8c3c1f', eyes: 'amber', eyeStyle: 'human', scar: 'cheek', muzzle: true },
    quote: 'I don’t cheat. I simply win differently.',
    desc: 'Domino is the Wild One: a fox-faced outlaw who answers to no flag, not even the Queen’s. He cuts across rooftops, dry creek beds, and any boundary foolish enough to stay still.',
    story: 'Domino joined Mandy-Lee’s ladder for the thrill of breaking it from within. No one can tell whether he serves the Queen or merely enjoys watching her generals lose. Beat him on his own crooked route and earn the Foxfire.',
    reward: 1700
  },
  {
    id: 'bubbles', name: 'Bubbles', title: 'The Goof', underboss: true, order: 6,
    terrain: 'beach', weather: 'flood', difficulty: 'hard', laps: 2,
    vehicle: 'bubble_bumper', portrait: { origin: 'ghoul', headgear: 'ears', skin: '#8e917e', hair: 'mohawk', hairColor: '#a84a72', eyes: 'violet', eyeStyle: 'cyber', scar: 'burn', muzzle: true, goof: true },
    quote: 'Wanna see something stupid and incredible?',
    desc: 'A giggling dog-shaped goof in a car that violates physics and taste. Never count him out.',
    story: 'Bubbles was hired to make the coast patrols laugh right up until the water rose over their doors. Now he rules the flooded causeway with a grin, a rubber-horn laugh, and a bumper car that can shove a truck into the tide. Outlast the chaos and you may discover the joke was always on the Queen.',
    reward: 1900
  },
  {
    id: 'oscar', name: 'Oscar', title: 'The Midnight Driver', underboss: true, order: 7,
    terrain: 'city', weather: 'clear', difficulty: 'hard', laps: 2,
    vehicle: 'midnight_coffin', portrait: { origin: 'ghost', headgear: 'none', skin: '#6f7880', hair: 'bald', eyes: 'white', eyeStyle: 'hollow', scar: 'none', gender: 'male', ghost: true },
    quote: 'You won’t see me. You’ll only hear the door close.',
    desc: 'A pitch-black silhouette at the wheel of a pitch-black car. His headlights are always off.',
    story: 'Oscar keeps the blackout district quiet for Mandy-Lee. His midnight patrol takes confiscated cars to the capital and leaves their owners to walk home through the dark. He knows every unlit tunnel and every engine that should not be running. Find the coffin before it finds you, and the people of the city will get their headlights back.',
    reward: 2200
  },
  {
    id: 'sussie', name: 'Sussie', title: 'The Overdrive', underboss: true, order: 8,
    terrain: 'wasteland', weather: 'quicksand', difficulty: 'hard', laps: 3,
    vehicle: 'boost_hog', portrait: { origin: 'human', headgear: 'none', skin: '#6c4938', hair: 'braids', hairColor: '#151316', eyes: 'amber', eyeStyle: 'human', scar: 'cheek', gender: 'female', build: 'heavy' },
    quote: 'Big girl. Bigger boost. Bye.',
    desc: 'Sussie is the gluttonous speed demon of the wasteland: she devours fuel, scrap, and the distance between herself and the finish line. Her boost-heavy black rocket leaves rivals choking in the dust.',
    story: 'Sussie began as a scavenger who ate whatever the wasteland offered. Now she consumes entire race fields for the Queen’s prize purse. Outlast her appetite for speed and the Boost Hog becomes your ride.',
    reward: 2600
  },
  {
    id: 'mandy', name: 'Mandy-Lee', title: 'Queen of the Dark', boss: true, order: 9,
    terrain: 'dystopia', weather: 'acid', difficulty: 'hard', laps: 3,
    vehicle: 'night_queen', portrait: { origin: 'demigod', headgear: 'crown', skin: '#e2c7b4', hair: 'long', hairColor: '#151316', eyes: 'blue', eyeStyle: 'cyber', scar: 'none', gender: 'female' },
    quote: 'Kneel, or be the road I drive over.',
    desc: 'Black hair, shocking blue eyes, and a kingdom made of fear. The Queen of the Dark does not lose.',
    story: 'Mandy-Lee did not inherit the wasteland; she won it one finish line at a time. She made racing law, turned champions into generals, and hoarded the fuel that could keep whole settlements alive. In the Night Queen she finally meets a challenger who has dismantled her ladder from the bottom up. This is not a title defense. It is the Queen’s last chance to make the wasteland believe there was never another choice.',
    reward: 5000
  },
  {
    id: 'zanrich', name: 'Zanrich', title: 'The Wild Demigod', boss: true, order: 10,
    terrain: 'volcano', weather: 'twister', difficulty: 'insane', laps: 2,
    vehicle: 'beast_titan', portrait: { origin: 'demigod', headgear: 'horns', skin: '#8c552c', hair: 'wild', hairColor: '#2b1a12', eyes: 'amber', eyeStyle: 'human', scar: 'x', fangs: true },
    quote: 'STRENGTH IS THE ONLY LANGUAGE. MINE IS LOUDER.',
    desc: 'A demigod of power and pure animal rage. His Beast Titan is a moving mountain with a hunger.',
    story: 'The Queen’s defeat breaks her flag, not the old hunger for power. Zanrich answers the open throne with a challenge carved into the volcano road: take the summit or be buried below it. He believes mercy is weakness and every alliance temporary. The Beast Titan is built to turn the climb into a wreckage field; beat him there, and the survivors will know the new order cannot be seized by force alone.',
    reward: 7500
  },
  {
    id: 'drikus', name: 'Drikus the Insane', title: 'Demigod of Insanity', boss: true, order: 11,
    terrain: 'jungle', weather: 'storm', difficulty: 'insane', laps: 2,
    vehicle: 'jester_chaos', portrait: { origin: 'demigod', headgear: 'jester', skin: '#d7cdb5', hair: 'wild', hairColor: '#3a1c56', eyes: 'green', eyeStyle: 'cyber', scar: 'eye', fangs: true, joker: true, facepaint: true },
    quote: 'HAHAHAHA—wait, were we racing? I forgot the rules. I wrote them.',
    desc: 'The final punchline. A demigod of insanity wearing a jester’s grin, driving a car that should not exist.',
    story: 'Drikus has watched the Queen fall and the Beast lose. He calls the survivors to the jungle, where the bridges move, the beacons lie, and the course is rewritten while the engines are running. He says the wasteland is only free if nobody can control what happens next. To defeat the King of Insanity, you will need more than a faster car: every rival you turned into an ally must help hold the route together long enough to finish the race.',
    reward: 12000
  }
]

export const UNDERBOSSES = BOSSES.filter(b => b.underboss)
export const MAIN_BOSSES = BOSSES.filter(b => b.boss)

// ---------------------------------------------------------------------------
// Mission generation. Static, hand-authored quest board.
// ---------------------------------------------------------------------------
export const MISSION_TYPES = {
  transport: { name: 'Transport', icon: '▣', desc: 'Haul volatile cargo across hostile ground. Keep it intact.' },
  taxi: { name: 'Taxi', icon: '☎', desc: 'Get the passenger there alive. Comfort pays bonuses.' },
  race: { name: 'Single Race', icon: '⚑', desc: 'One track. One winner. No excuses.' },
  cup: { name: 'Cup Race', icon: '♜', desc: 'Three-race championship. Points decide everything.' },
  tournament: { name: 'Tournament', icon: '♛', desc: 'A brutal bracket against the wasteland’s worst.' },
  gang: { name: 'Escape Gang', icon: '☠', desc: 'Survive a pack of gang vehicles until the heat dies.' },
  police: { name: 'Apocalyptic Police', icon: '✪', desc: 'The last precinct wants you. Outrun the sirens.' },
  pvp: { name: 'PvP Duel', icon: '⚔', desc: 'Head-to-head against a rival driver. Local AI stand-in.' },
  event: { name: 'Special Event', icon: '☄', desc: 'Limited-time wasteland carnage with unique rewards.' }
}

export const MISSIONS = [
  {
    id: 'm_acid_run', type: 'transport', name: 'Acid Run', terrain: 'rainforest', weather: 'acid',
    difficulty: 'normal', laps: 2, dist: 0.18, reward: 700, xp: 180,
    cargo: '12 barrels of green acid', vehicleReward: 'acid_runner',
    blurb: 'The Rotwood is raining something that used to be water. Get the barrels through without dissolving.'
  },
  {
    id: 'm_sand_delivery', type: 'transport', name: 'Sand Delivery', terrain: 'dunes', weather: 'quicksand',
    difficulty: 'easy', laps: 2, dist: 0.34, reward: 520, xp: 140,
    cargo: 'A live “sand engine” core', vehicleReward: 'dune_worm',
    blurb: 'The Dune Worm gang needs a core. The ground needs you. Only one of you gets what it wants.'
  },
  {
    id: 'm_fare_hell', type: 'taxi', name: 'Fare to Hell', terrain: 'suburbs', weather: 'flood',
    difficulty: 'normal', laps: 2, dist: 0.52, reward: 760, xp: 200,
    cargo: 'A very nervous preacher', vehicleReward: 'hearse_taxi',
    blurb: 'He says he can smell sulfur. That might just be the upholstery. Keep the passenger calm.'
  },
  {
    id: 'm_scrapyard_sprint', type: 'race', name: 'Scrapyard Sprint', terrain: 'wasteland', weather: 'cloudy',
    difficulty: 'easy', laps: 3, dist: 0.27, reward: 420, xp: 120,
    blurb: 'A quick loop around the bones of the old world. Winner takes the good tires.'
  },
  {
    id: 'm_neon_cup', type: 'cup', name: 'Neon Corpse Cup', terrain: 'dystopia', weather: 'acid',
    difficulty: 'normal', laps: 2, dist: 0.72, reward: 1600, xp: 420,
    blurb: 'Three races under the dead neon. Corporate ghosts sponsor the carnage.'
  },
  {
    id: 'm_dead_tide_cup', type: 'cup', name: 'Dead Tide Cup', terrain: 'beach', weather: 'hurricane',
    difficulty: 'hard', laps: 2, dist: 0.61, reward: 2300, xp: 520,
    blurb: 'Salt, wind, and three heats of bad intentions. The tide is coming back. Probably.'
  },
  {
    id: 'm_cinder_tournament', type: 'tournament', name: 'Cinder Peak Tournament', terrain: 'volcano', weather: 'twister',
    difficulty: 'hard', laps: 2, dist: 0.83, reward: 3000, xp: 650,
    blurb: 'A bracket of killers racing on cooling lava. The loser is not always the one who crashes.'
  },
  {
    id: 'm_gang_hunt', type: 'gang', name: 'Escape the Bone Gang', terrain: 'swamp', weather: 'storm',
    difficulty: 'normal', laps: 1, dist: 0.44, reward: 1100, xp: 280,
    blurb: 'You took something that belonged to them. Their engines are very close now.'
  },
  {
    id: 'm_police_siege', type: 'police', name: 'Precinct 13 Pursuit', terrain: 'city', weather: 'storm',
    difficulty: 'hard', laps: 1, dist: 0.48, reward: 1800, xp: 360,
    blurb: 'The apocalyptic police have declared you a public nuisance. Survive their attention.'
  },
  {
    id: 'm_pvp_duel', type: 'pvp', name: 'Rust Duel', terrain: 'warzone', weather: 'clear',
    difficulty: 'normal', laps: 2, dist: 0.29, reward: 900, xp: 250,
    blurb: 'One rival. One track. An audience of crows. Local AI stand-in for PvP.'
  },
  {
    id: 'm_ice_cup', type: 'cup', name: 'White Death Cup', terrain: 'ice', weather: 'cloudy',
    difficulty: 'hard', laps: 2, dist: 0.66, reward: 2600, xp: 560,
    blurb: 'Three heats on black ice. Studded tires are for cowards.'
  },
  {
    id: 'm_volcano_tour', type: 'tournament', name: 'Lava Bracket', terrain: 'volcano', weather: 'clear',
    difficulty: 'insane', laps: 2, dist: 0.91, reward: 4200, xp: 800,
    blurb: 'The final bracket. Win, and the wasteland learns your name.'
  },
  {
    id: 'm_blood_moon', type: 'event', name: 'Blood Moon Cup', terrain: 'volcano', weather: 'twister',
    difficulty: 'hard', laps: 3, dist: 0.95, reward: 5500, xp: 1000,
    vehicleReward: 'blood_moon_gt', event: true,
    blurb: 'Once a blood moon, the wasteland races for the Blood Moon GT. Event reward: the car itself.'
  }
]

export const CUP_ROUNDS = ['rainforest', 'dystopia', 'volcano']
export const TOURNAMENT_ROUNDS = ['desert', 'warzone', 'jungle']

export const TUTORIAL = {
  terrain: 'wasteland',
  weather: 'cloudy',
  laps: 1,
  title: 'WAKE UP, DRIVER',
  steps: [
    { id: 'throttle', text: 'Hold the ACCELERATION pedal, or W / ↑. The wasteland only respects speed.', keys: 'W / ↑ / ACCELERATE' },
    { id: 'steer', text: 'Turn with the LEFT and RIGHT pedals, or A / D and ← →.', keys: 'A D / ← → / TURN' },
    { id: 'boost', text: 'Tap NITRO (SPACE) for a boost. The blue meter refills over time.', keys: 'SPACE / NITRO' },
    { id: 'brake', text: 'STOP / REVERSE with S / ↓. HANDBRAKE with Q for hard drifts.', keys: 'S / ↓ / Q' },
    { id: 'finish', text: 'Special moves charge over time. Finish the lap. Survive the weather.', keys: 'F / SPECIAL · FINISH' }
  ]
}

export const MENU_QUOTES = [
  'The road is dead. Long live the road.',
  'Every lap is a small apocalypse.',
  'You cannot outrun the weather. You can outdrive it.',
  'The wasteland keeps score.',
  'Blood is just high-viscosity oil.',
  'Three demi-gods. Eight underbosses. One steering wheel.',
  'Drikus is smiling somewhere. That is never good.',
  'The dead do not honk.'
]
