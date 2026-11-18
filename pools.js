// Items grouped by the stat they mainly give, used to fill each build's item tier list to 30.
// Source: brotato.wiki.spellsandguns.com/Items effects (v1.1.15.4), fetched 2026-11-16.
// Number = item rarity tier (4 = Tier IV). Items with a big drawback on the wiki are left out,
// including every item that adds Curse (the site advises keeping Curse low on Danger 5).
// Which items need Abyssal Terrors comes from AT_ITEMS in unlocks.js.
window.POOLS = {
pct:{"Ashes":4,"Heavy Bullets":4,"Lantern":4,"Potato":4,"Spider":4,"Coil":3,"Power Generator":3,"Silver Bullet":3,"Vigilante Ring":3,"Cauldron":2,"Medal":2,"Missile":2,"Pearl":2,"Ritual":2,"Gentle Alien":1,"Injection":1,"Small Fish":1},
melee:{"Big Arms":4,"Mammoth":4,"Robot Arm":4,"Alloy":3,"Scarf":3,"Wheat":3,"Mastery":2,"Riposte":2,"Saltwater":2,"Boxing Glove":1,"Charcoal":1,"Claw Tree":1,"Defective Steroids":1,"Goat Skull":1,"Hedgehog":1},
ranged:{"Big Arms":4,"Heavy Bullets":4,"Alloy":3,"Honey":3,"Wheat":3,"Reinforced Steel":2,"Scope":2,"Small Magazine":2,"Feather":1,"Hedgehog":1,"Lens":1,"Mutation":1},
elemental:{"Greek Fire":4,"Wolf Helmet":4,"Alloy":3,"Candle":3,"Strange Book":3,"Will-o'-Wisp":3,"Blazemander":2,"Campfire":2,"Energy Bracelet":2,"Fuel Tank":2,"Incendiary Turret":2,"Snowball":2,"Tyler":2,"Book":1,"Boiling Water":1,"Charcoal":1,"Mutation":1,"Scared Sausage":1,"Snake":1,"Toxic Sludge":1},
eng:{"Exoskeleton":4,"Explosive Turret":4,"Robot Arm":4,"Alloy":3,"Improved Tools":3,"Laser Turret":3,"Nail":3,"Shackles":3,"Strange Book":3,"Toolbox":3,"Wandering Bot":3,"Bot-O-Mine":2,"Cog":2,"Compass":2,"Garden":2,"Incendiary Turret":2,"Medical Turret":2,"Metal Detector":2,"Pile of Books":2,"Pocket Factory":2,"Reinforced Steel":2,"Tyler":2,"Book":1,"Duct Tape":1,"Landmines":1,"Pencil":1,"Turret":1},
atkspd:{"Ashes":4,"Potato":4,"Spider":4,"Crystal":3,"Improved Tools":3,"Poisonous Tonic":3,"Banner":2,"Saltwater":2,"Small Magazine":2,"Coffee":1,"Gummy Berserker":1},
crit:{"Exoskeleton":4,"Night Goggles":4,"Alloy":3,"Poisonous Tonic":3,"Energy Bracelet":2,"Eyepatch":2,"Pile of Books":2,"Sunglasses":2,"Tentacle":2,"Claw Tree":1,"Insanity":1},
maxhp:{"Grind's Magical Leaf":4,"Octopus":4,"Panda":4,"Potato":4,"Torture":4,"Alien Baby":3,"Shmoop":3,"Stone Skin":3,"Warrior Helmet":3,"Acid":2,"Medal":2,"Padding":2,"Spicy Sauce":2,"Alien Worm":1,"Broken Mouth":1,"Cake":1,"Defective Steroids":1,"Gentle Alien":1,"Jelly":1},
armor:{"Exoskeleton":4,"Potato":4,"Sifd's Relic":4,"Warrior Helmet":3,"Leather Vest":2,"Medal":2,"Metal Plate":2,"Duct Tape":1,"Helmet":1},
dodge:{"Cape":4,"Jet Pack":4,"Potato":4,"Adrenaline":3,"Chameleon":3,"Clover":3,"Ghost Outfit":3,"Gambling Token":2,"Leather Vest":2,"Feather":1,"Peaceful Bee":1},
regen:{"Grind's Magical Leaf":4,"Mammoth":4,"Octopus":4,"Potato":4,"Regeneration Potion":4,"Torture":4,"Candle":3,"Scarf":3,"Shmoop":3,"Baby Squid":2,"Blood Leech":2,"Campfire":2,"Doc Moth":2,"Lure":2,"Alien Worm":1,"Mushroom":1,"Penguin":1,"Plant":1},
lifesteal:{"Cape":4,"Grind's Magical Leaf":4,"Octopus":4,"Potato":4,"Mouse":3,"Blood Leech":2,"Decomposing Flesh":2,"Doc Moth":2,"Ritual":2,"Whetstone":2,"Bat":1,"Butterfly":1,"Fresh Meat":1},
speed:{"Exoskeleton":4,"Jet Pack":4,"Potato":4,"Scarf":3,"Wings":3,"Clockwork Wasp":2,"Compass":2,"Medal":2,"Saltwater":2,"Beanie":1,"Terrified Onion":1},
luck:{"Lucky Coin":4,"Panda":4,"Potato":4,"Wolf Helmet":4,"Bowler Hat":3,"Clover":3,"Lucky Charm":3,"Metal Detector":2,"Shady Potion":2,"Lost Duck":1,"Propeller Hat":1},
econ:{"Bowler Hat":3,"Crown":3,"Hunting Trophy":3,"Starfish":3,"Tractor":3,"Wheat":3,"Dangerous Bunny":2,"Little Frog":2,"Metal Detector":2,"Piggy Bank":2,"Recycling Machine":2,"Spyglass":2,"Wheelbarrow":2,"White Flag":2,"Bag":1,"Coupon":1,"Fertilizer":1,"Lootworm":1,"Peaceful Bee":1},
explosions:{"Explosive Turret":4,"Honey":3,"Plastic Explosive":3,"Rip and Tear":3,"Sunken Bell":3,"Spicy Sauce":2,"Dynamite":1,"Landmines":1},
range:{"Ashes":4,"Heavy Bullets":4,"Lantern":4,"Night Goggles":4,"Poisonous Tonic":3,"Shackles":3,"Wings":3,"Banner":2,"Scope":2,"Spyglass":2,"Baby Gecko":1,"Glasses":1,"Gummy Berserker":1},
xp:{"Diploma":4,"Bean Teacher":3},
pets:{"Scapegoat":4,"Jellyshield":3,"Wandering Bot":3,"Blazemander":2,"Bonk Dog":2,"Bot-O-Mine":2,"Catling Gun":2,"Doc Moth":2,"Lootworm":1,"Ratzilla":1}
};
