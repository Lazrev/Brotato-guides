// Viable builds per character, keyed by name in guides.js.
// k: m = melee, r = ranged, x = no weapons (pets / body). s = best starting weapon.
// w = weapon progression [waves 1-6, waves 7-12, waves 13-20]. x = why it works.
// Starting weapons for the 50 base-game characters are checked against the Fextralife wiki's
// per-character "Starting weapons" lists (brotato.wiki.fextralife.com/Characters, edited
// 20 Aug 2026). DLC characters (AT, PD) are not on that list and are unverified.
// Progressions are recommendations: shops vary run to run.
window.BUILDS = {
"Loud":[
 {n:"Slingshot bounce",k:"r",s:"Slingshot",w:["Slingshot plus a second Slingshot or SMG; combine to Tier II","Fill to six Slingshots, push to Tier III; add Ricochet","Tier III-IV Slingshots; swap two for Flamethrowers if found"],x:"Bounces turn +50% enemies into chain kills and more materials."},
 {n:"Shotgun spread",k:"r",s:"SMG",w:["SMG, buy Double Barrel Shotguns as they appear","Four to six Double Barrel Shotguns at Tier II-III","Tier IV Double Barrels; Flamethrower for the last slots"],x:"Pierce clears the extra enemies Loud brings."}],
"King":[
 {n:"Tier IV Pistols",k:"r",s:"Pistol",w:["Pistol (starts Tier II); lock Pistols, combine toward Tier III","First Tier IV Pistol by wave 7-8; keep at most two Tier I weapons","Six Tier IV Pistols; take Chain Gun or Gatling Laser if offered"],x:"Every Tier IV weapon adds +25% damage and attack speed."},
 {n:"Tier IV Knives",k:"m",s:"Knife",w:["Knife (starts Tier II); lock Knife copies and combine","Push two Knives to Tier IV by wave 10","Six Tier IV Knives; Excalibur if offered"],x:"Knife crits pair with King's Luck and the Tier IV bonus."}],
"Golem":[
 {n:"Armor shield",k:"m",s:"Spiky Shield",w:["Spiky Shield plus a second Shield; Tier II","Four to six Spiky Shields at Tier III as Armor climbs","Tier IV Shields; Potato Thrower in spare slots"],x:"Spiky Shield damage scales with Armor, which Golem boosts 33%."},
 {n:"Slingshot to SMG",k:"r",s:"Slingshot",w:["Slingshot; buy SMGs or Slingshots","Six SMGs or Slingshots at Tier II-III","Tier IV; swap in Potato Thrower (scales with Max HP)"],x:"Simple sustained damage while Max HP and Armor do the defending."}],
"Creature":[
 {n:"SMG curse",k:"r",s:"SMG",w:["SMG plus a second SMG; lock items for Fish Hook curses","Six SMGs at Tier II-III, cursed when possible","Tier IV SMGs; keep fights close as Range decays"],x:"Fast multi-hit weapons get the most from flat Curse damage."},
 {n:"Knife curse",k:"m",s:"Knife",w:["Knife plus Shuriken or Knife","Six Knives at Tier II-III","Tier IV Knives or Fists"],x:"Melee ignores the -10 Range per wave."}],
"Technomage":[
 {n:"Wand turrets",k:"r",s:"Wand",w:["Wand plus Taser; buy every structure","Wands to Tier II-III; Thunder Sword if offered","Wands, Thunder Swords or Particle Accelerators"],x:"Structures raise Elemental Damage and Elemental Damage speeds up structures."},
 {n:"Wrench structures",k:"m",s:"Wrench",w:["Wrench plus Screwdriver for free structures","More Wrenches as structure slots fill","Swap to Thunder Swords late for elemental damage"],x:"Each Wrench and Screwdriver adds another structure to feed the loop."}],
"Crazy":[
 {n:"Six Knives",k:"m",s:"Knife",w:["Starting Knife plus Knife; combine to Tier II","Six Knives at Tier II-III; stack Crit Chance","Tier III-IV Knives"],x:"+100 Range on Precise weapons lets Knives reach half the screen."},
 {n:"Thief Daggers",k:"m",s:"Thief Dagger",w:["Starting Knife plus Thief Dagger","Fill with Thief Daggers for crit-kill materials","Tier III-IV Daggers; Claws if Attack Speed piled up"],x:"Same reach as Knives, with extra materials on crit kills."}],
"Engineer":[
 {n:"Wrench turrets",k:"m",s:"Wrench",w:["Starting Wrench plus a second Wrench","Six Wrenches; each one places a turret","Keep Wrenches all run; upgrade with spare materials"],x:"Turrets do the killing; Engineering is boosted 25%."},
 {n:"Screwdriver mines",k:"m",s:"Screwdriver",w:["Starting Wrench plus Screwdrivers","Mix three Wrenches and three Screwdrivers","Tier III-IV Wrenches and Screwdrivers"],x:"Landmines cover the ground the turrets miss."}],
"Demon":[
 {n:"HP scaling",k:"r",s:"Wand",w:["Wand; buy SMGs or Slingshots, spend HP carefully","Potato Thrower and Rock as they appear (scale with Max HP)","Potato Throwers; Excalibur late if offered"],x:"Weapons that scale with Max HP turn Demon's HP pool into damage."}],
"Buccaneer":[
 {n:"Blunderbuss reload",k:"r",s:"Blunderbuss",w:["Blunderbuss plus a second Blunderbuss","Four to six Blunderbusses; add Rocket Launchers","Blunderbusses, Nuclear Launchers or Sniper Guns"],x:"Material pickups reset cooldowns, so slow big hitters fire constantly."},
 {n:"Mace",k:"m",s:"Mace",w:["Mace plus a second Mace","Six Maces at Tier II-III","Tier IV Maces"],x:"The melee version of the same long-cooldown trick."}],
"Artificer":[
 {n:"Rocket explosions",k:"r",s:"Wrench",w:["Wrench or Screwdriver for the Tool bonus","Rocket Launchers and Grenade Launchers as they appear","Rocket Launchers; Nuclear Launcher as the capstone"],x:"Only explosions and Tools deal real damage, and explosions get +175%."},
 {n:"Shredder and Sledge",k:"m",s:"Screwdriver",w:["Screwdriver or Wrench","Shredders for explosive pierce","Plasma Sledges and Shredders"],x:"Explosive melee hits get the same explosion bonus."}],
"Doctor":[
 {n:"Medical melee",k:"m",s:"Scissors",w:["Scissors; combine to Tier II","Swap to Circular Saws as they appear","Six Tier III-IV Circular Saws"],x:"Medical weapons get +200% attack speed and heal on hit."},
 {n:"Medical Gun",k:"r",s:"Medical Gun",w:["Medical Gun plus a second Medical Gun","Six Medical Guns at Tier II-III","Tier IV Medical Guns; Ricochet helps"],x:"The same healing loop from a safe distance."}],
"Diver":[
 {n:"Harpoon + Knives",k:"m",s:"Knife",w:["Free Harpoon Gun plus Knives","One or two Harpoons, the rest Knives or Thief Daggers","Tier III-IV Knives; keep one Harpoon to mark targets"],x:"Harpoon marks targets for +300% damage; Precise crits do the killing."},
 {n:"Harpoon + Shurikens",k:"r",s:"Shuriken",w:["Free Harpoon Gun plus Shurikens","Shurikens to Tier II-III","Tier IV Shurikens with one Harpoon"],x:"Precise ranged crits; still marked by the Harpoon."}],
"Explorer":[
 {n:"Slingshot clear",k:"r",s:"Crossbow",w:["Crossbow; buy Slingshots, farm trees each wave","Slingshots and SMGs at Tier II-III","Tier IV Slingshots; Flamethrower late"],x:"Wave clear makes room to farm trees on the big map."},
 {n:"Tree farmer",k:"m",s:"Hatchet",w:["Hatchet or Pruner for trees","Keep two tree weapons, add Slingshots","Swap tree weapons for damage once crates flow"],x:"Faster tree kills mean more crates and fruit early."}],
"Ranger":[
 {n:"Pistols to SMGs",k:"r",s:"Pistol",w:["Starting Pistol plus Pistols","SMGs or Double Barrel Shotguns at Tier II-III","Miniguns, Double Barrels or Combat Shotguns (PD); Chain Gun on sight"],x:"Ranged Damage counts 50% more and you start with +50 Range."},
 {n:"Shotgun",k:"r",s:"Double Barrel Shotgun",w:["Starting Pistol plus Double Barrel Shotgun","Four to six Double Barrels","Tier IV Double Barrels or Combat Shotguns (PD)"],x:"Pierce for wave clear on top of Ranger's damage bonus."}],
"Knight":[
 {n:"Spiky Shield",k:"m",s:"Hammer",w:["Hammer (starts Tier II); buy Spiky Shields","Spiky Shields as Armor climbs","Plasma Sledges or Tier IV Shields"],x:"Armor is both defense and +2 Melee Damage per point."},
 {n:"Big swings",k:"m",s:"Sword",w:["Sword (Tier II)","Hammers or Jousting Lances","Plasma Sledges, Thunder Swords"],x:"Attack Speed is halved, so wide high-damage sweeps win."}],
"Brawler":[
 {n:"Fists",k:"m",s:"Fist",w:["Starting Fist plus Fist","Six Fists; swap in Flaming Brass Knuckles","Power Fists at Tier III-IV"],x:"Unarmed weapons get +50% attack speed and the class Dodge bonus."},
 {n:"Claws",k:"m",s:"Claw",w:["Starting Fist plus Claw","Claws if Attack Speed items keep showing","Tier IV Claws mixed with Power Fists"],x:"Claws reward heavy Attack Speed stacking."}],
"Archaeologist":[
 {n:"Meat Tenderizer",k:"m",s:"Meat Tenderizer",w:["Meat Tenderizer; buy regen","More Tenderizers; Mecha upgrades on them","Tier III-IV Tenderizers"],x:"Damage scales with HP Regeneration, which keeps you alive while digging."},
 {n:"Machine Gun",k:"r",s:"Machine Gun",w:["Machine Gun","Four to six Machine Guns","Tier IV Machine Guns"],x:"Clears around the dig site from where you stand."}],
"Masochist":[
 {n:"Spiky Shield",k:"m",s:"Spiky Shield",w:["Spiky Shield; take small hits","Spiky Shields as Armor grows","Tier IV Shields; Flamethrower late"],x:"Armor-scaling damage on a character that wants to be hit."},
 {n:"Scissors",k:"m",s:"Scissors",w:["Scissors","Scissors to Circular Saws","Tier IV Circular Saws"],x:"Extra healing to keep absorbing hits."}],
"Jack":[
 {n:"Pistols",k:"r",s:"Revolver",w:["Revolver; buy Pistols","Pistols at Tier II-III; Double Barrel Shotgun","Sniper Guns or Tier IV Pistols"],x:"Pure single-target damage for elites and bosses."},
 {n:"Knife crit",k:"m",s:"Knife",w:["Knife","Knives to Tier III","Tier IV Knives"],x:"Big crits for tanky single targets."}],
"Lucky":[
 {n:"Luck instruments",k:"r",s:"Slingshot",w:["Slingshot; buy Lutes or Pan Flutes (DLC) from the shop","Lutes and Pan Flutes at Tier II-III","Tier IV instruments"],x:"Instruments scale with Luck, Lucky's main stat. They can't be picked at the start."},
 {n:"Slingshot",k:"r",s:"Slingshot",w:["Slingshot","Slingshots at Tier II-III","Tier IV Slingshots"],x:"Base-game version; Luck still drives better shops."}],
"Mutant":[
 {n:"SMG",k:"r",s:"SMG",w:["SMG","SMGs at Tier II-III (weapons aren't marked up)","Tier IV SMGs"],x:"Level-ups carry the stats; upgrade weapons freely."},
 {n:"Shotgun",k:"r",s:"Double Barrel Shotgun",w:["Double Barrel Shotgun","Four to six Double Barrels","Tier IV Double Barrels"],x:"Pierce for wave clear."}],
"Soldier":[
 {n:"Minigun turret",k:"r",s:"SMG",w:["SMG; stop to shoot","Miniguns; Chain Gun on sight","Rocket and Nuclear Launchers"],x:"+50% damage and attack speed while standing still."}],
"Cryptid":[
 {n:"Claws",k:"m",s:"Claw",w:["Claw; protect trees","Claws and Fists","Tier IV Claws"],x:"-100 Range makes short precise melee the best fit."},
 {n:"Knives",k:"m",s:"Knife",w:["Knife","Knives to Tier III","Tier IV Knives"],x:"Precise and short, safe around trees."}],
"Lich":[
 {n:"Life-steal melee",k:"m",s:"Scissors",w:["Scissors","Circular Saws or Sharp Tooth (AT)","Tier IV Circular Saws"],x:"Every heal fires a Max HP-scaled hit."},
 {n:"Medical Gun",k:"r",s:"Medical Gun",w:["Medical Gun","Medical Guns at Tier II-III","Tier IV Medical Guns"],x:"Ranged healing keeps the passive firing."}],
"Old":[
 {n:"Sweeping melee",k:"m",s:"Chopper",w:["Chopper; buy Sickles or Swords","Swords or Circular Saws","Tier IV sweepers"],x:"The small map brings enemies into your sweeps."},
 {n:"Shotgun",k:"r",s:"Double Barrel Shotgun",w:["Double Barrel Shotgun","Double Barrels plus turrets","Tier IV Double Barrels"],x:"Pierce works well in the crowded small map."}],
"Builder":[
 {n:"Medical support",k:"m",s:"Scissors",w:["Scissors for healing","Circular Saws","Keep them upgraded; the turret does the work"],x:"Your weapons keep you alive while the Builder's Turret grows."},
 {n:"Harvest hands",k:"m",s:"Hand",w:["Hand for Harvesting","More Hands","Swap to Medical weapons late"],x:"Extra materials to leave on the ground for the turret."}],
"Curious":[
 {n:"SMG chaser",k:"r",s:"SMG",w:["SMG","SMGs or Pistols (no duplicate items, weapons are fine)","Tier IV SMGs or Double Barrels"],x:"Fast single-target damage for the loot aliens."}],
"Entrepreneur":[
 {n:"Wrench economy",k:"m",s:"Hand",w:["Hand for Harvesting","Wrenches for flat Engineering scaling","Tier IV Wrenches"],x:"%Damage is halved, so flat scaling wins."},
 {n:"Flat ranged",k:"r",s:"Pistol",w:["Pistol; buy SMGs","SMGs at Tier II-III","Tier IV SMGs"],x:"Flat Ranged Damage scaling with a spend-to-zero shop."}],
"Mage":[
 {n:"Wands",k:"r",s:"Wand",w:["Wand plus Taser","Wands to Tier II-III; Fireball","Wands and Flamethrowers"],x:"Burning spreads from the starting Snake."},
 {n:"Thunder Swords",k:"m",s:"Lightning Shiv",w:["Lightning Shiv","Thunder Swords as they appear","Tier IV Thunder Swords"],x:"Elemental melee for the same burn build."}],
"Chef":[
 {n:"Burn and shoot",k:"r",s:"SMG",w:["SMG; Sausage lights enemies","SMGs or Shotguns at Tier II-III","Tier IV SMGs or Double Barrels"],x:"+200% physical damage against burning enemies."},
 {n:"Torch and Knives",k:"m",s:"Torch",w:["Torch for burning","Knives at Tier II-III","Tier IV Knives, one Torch"],x:"One burn source, the rest physical melee."}],
"Beast Master":[
 {n:"Pets only",k:"x",s:"None (Rat pet)",w:["Buy every pet: Bonk Dog, Catling Gun","Blazemander, Bot-O-Mine, Ratzilla","Mosquitor (PD), Hungry Hungry Dinosaur (PD)"],x:"Can't equip weapons; pets scale with all four damage stats."}],
"Cyborg":[
 {n:"Miniguns",k:"r",s:"Minigun",w:["Starting Minigun plus SMG","Miniguns at Tier II-III","Tier IV Miniguns"],x:"Ranged Damage counts triple, then feeds your turrets."}],
"Gladiator":[
 {n:"Six different melee",k:"m",s:"Spear",w:["Spear; buy a different melee weapon each shop","Add Sword, Hammer, Circular Saw (all different)","Higher tiers from the shop: Thunder Sword, Mace (AT)"],x:"+20% attack speed per different weapon."}],
"Multitasker":[
 {n:"Twelve Sticks",k:"m",s:"Stick",w:["Sticks","Fill toward twelve Sticks","Upgrade Sticks with spare materials"],x:"Each Stick boosts the others."},
 {n:"SMG swarm",k:"r",s:"SMG",w:["SMG","Many cheap SMGs","Upgrade the best SMGs"],x:"Quantity over quality with flat damage."}],
"Wildling":[
 {n:"Sticks",k:"m",s:"Stick",w:["Starting Stick plus Sticks","Six Tier II Sticks","Stats and items do the late scaling"],x:"30% Life Steal on Primitive weapons; weapons cap at Tier II."},
 {n:"Slingshots",k:"r",s:"Slingshot",w:["Starting Stick plus Slingshot","Tier II Slingshots","Stats and items do the late scaling"],x:"Primitive ranged version with the same Life Steal."}],
"Bull":[
 {n:"Body explosions",k:"x",s:"None",w:["Regen, Max HP, Armor","Explosion Damage and size","Max HP, Armor"],x:"Can't equip weapons; you explode when hit."}],
"Hunter":[
 {n:"Sniper",k:"r",s:"Crossbow",w:["Crossbow or Pistol","Crossbows and Pistols at Tier II-III","Sniper Guns"],x:"+1% damage per 10 Range with boosted crit."}],
"Captain":[
 {n:"One sword",k:"m",s:"Sword",w:["One Sword only for XP","Captain's Sword; start filling slots after wave 10","Full six weapons"],x:"Empty slots give +60% XP each early."},
 {n:"One Slingshot",k:"r",s:"Slingshot",w:["One Slingshot","Fill slots after wave 10","Tier IV Slingshots"],x:"Same plan from range."}],
"Speedy":[
 {n:"Jousting Lance",k:"m",s:"Jousting Lance",w:["Jousting Lance","Lances at Tier II-III","Tier IV Lances"],x:"Lance damage scales with Speed."},
 {n:"Spear",k:"m",s:"Spear",w:["Spear or Torch","Spears at Tier II-III","Tier IV Spears"],x:"Speed still adds Melee Damage."}],
"Well Rounded":[
 {n:"SMG",k:"r",s:"SMG",w:["SMG","SMGs at Tier II-III","Tier IV SMGs"],x:"Clean slate: commit to one damage type."},
 {n:"Slingshot",k:"r",s:"Slingshot",w:["Slingshot","Slingshots at Tier II-III","Tier IV Slingshots"],x:"Bounce wave clear."}],
"Survivor":[
 {n:"Crate loadout",k:"r",s:"Starting extra weapon",w:["Whatever crates give","Keep the best eight","Upgrade the strongest"],x:"Weapons come only from crates; build general stats."}],
"Arsonist":[
 {n:"Molotov fire",k:"r",s:"Molotov Cocktail",w:["Molotov Cocktail","Fireball, Icicle","Tier IV Molotovs"],x:"Explosions become fire puddles."},
 {n:"Brass Knuckles",k:"m",s:"Flaming Brass Knuckles",w:["Flaming Brass Knuckles","More Brass Knuckles","Tier IV Brass Knuckles"],x:"Burning melee feeds the puddles."}],
"Veteran":[
 {n:"Machine Gun",k:"r",s:"Machine Gun",w:["Machine Gun","Machine Guns with pierce","Tier IV Machine Guns"],x:"Clears the extra horde waves."},
 {n:"Combat Shotgun",k:"r",s:"Combat Shotgun",w:["Combat Shotgun","Combat Shotguns at Tier II-III","Tier IV Combat Shotguns"],x:"Pierce for hordes."}],
"Poacher":[
 {n:"Zone shotgun",k:"r",s:"Combat Shotgun",w:["Combat Shotgun","Combat Shotguns or SMGs","Tier IV Combat Shotguns"],x:"Kill inside the hunting zone for damage stacks."},
 {n:"Slingshot",k:"r",s:"Slingshot",w:["Slingshot","Slingshots at Tier II-III","Tier IV Slingshots"],x:"Bounces inside the zone."}],
"Droid":[
 {n:"Fast ranged",k:"r",s:"Combat Shotgun",w:["Combat Shotgun","Machine Guns or SMGs; Mecha parts on one type","Tier IV of your Mecha weapon"],x:"Mecha upgrades focus on one weapon type."}],
"Variant":[
 {n:"Meat Tenderizer",k:"m",s:"Meat Tenderizer",w:["Meat Tenderizer","Tenderizers at Tier II-III","Tier IV Tenderizers"],x:"Steady melee while items mutate."},
 {n:"Machine Gun",k:"r",s:"Machine Gun",w:["Machine Gun","Machine Guns at Tier II-III","Tier IV Machine Guns"],x:"Ranged option for acid-heavy waves."}],
"Mad Scientist":[
 {n:"Mecha shotgun",k:"r",s:"Combat Shotgun",w:["Combat Shotgun","Mecha upgrades on Combat Shotguns","Tier IV Combat Shotguns"],x:"Keep Mecha parts on one weapon type."}],
"One Armed":[
 {n:"Single Claw",k:"m",s:"Claw",w:["Claw; buy Claw copies","Combine Claws upward","Tier IV Claw"],x:"+200% attack speed on your one weapon."},
 {n:"Single Shotgun",k:"r",s:"Double Barrel Shotgun",w:["Double Barrel Shotgun","Combine copies upward","Tier IV Double Barrel"],x:"One weapon, doubled %Damage."}],
"Ghost":[
 {n:"Ethereal",k:"m",s:"Ghost Scepter",w:["Ghost Scepter, Axe or Flint","Ethereal weapons grow with kills","Tier IV Ethereal weapons; Scythe if offered"],x:"+10 damage with Ethereal weapons."}],
"Sick":[
 {n:"Fast melee",k:"m",s:"Sharp Tooth",w:["Sharp Tooth or Fist","Sharp Tooth or Knives","Tier IV fast melee"],x:"Constant hits keep Life Steal ahead of the drain."},
 {n:"SMG",k:"r",s:"SMG",w:["SMG","SMGs at Tier II-III","Tier IV SMGs"],x:"Fast ranged Life Steal."}],
"Pacifist":[
 {n:"Harvest survival",k:"m",s:"Hand",w:["Hand for Harvesting","Pruner or Taser to slow","Damage weapons only if you want boss kills"],x:"You're paid for enemies left alive."}],
"Saver":[
 {n:"Cheap melee",k:"m",s:"Chopper",w:["Chopper","Keep cheap weapons","Upgrade only for the wave 20 boss"],x:"Spending lowers your damage bonus."},
 {n:"Cheap ranged",k:"r",s:"Pistol",w:["Pistol","Keep cheap weapons","Upgrade only for the boss"],x:"Same plan from range."}],
"Streamer":[
 {n:"SMG",k:"r",s:"SMG",w:["SMG","SMGs or Combat Shotguns (PD)","Tier IV SMGs"],x:"Move to fight for +40% damage and attack speed."}],
"Baby":[
 {n:"Bulk Sticks",k:"m",s:"Stick",w:["Stick; one slot per level","Sticks or Sickles for each new slot","Upgrade the best"],x:"Every level is a weapon slot."},
 {n:"Bulk SMGs",k:"r",s:"Pistol",w:["Pistol; buy SMGs","Cheap SMGs for new slots","Upgrade the best"],x:"Cheap in bulk."}],
"Vampire":[
 {n:"SMG",k:"r",s:"SMG",w:["SMG","SMGs at Tier II-III","Flamethrowers late"],x:"Fast weapons keep Life Steal topping you up."},
 {n:"Knives",k:"m",s:"Knife",w:["Knife","Knives at Tier II-III","Tier IV Knives"],x:"Fast melee Life Steal."}],
"Chunky":[
 {n:"Potato Thrower",k:"r",s:"Rock",w:["Rock","Potato Throwers as they appear","Tier IV Potato Throwers"],x:"Scales with Max HP."},
 {n:"Spiky Shield",k:"m",s:"Spiky Shield",w:["Spiky Shield","Shields at Tier II-III","Tier IV Shields"],x:"Armor-scaling melee for a slow tank."}],
"Generalist":[
 {n:"3 + 3 split",k:"r",s:"SMG",w:["SMG plus Knife","Three SMGs or Harpoon Guns, three Knives or Swords","Tier IV of both"],x:"Ranged Damage adds 2 Melee each."}],
"Farmer":[
 {n:"Pruner start",k:"m",s:"Pruner",w:["Pruner","Any strong weapon once money arrives","Tier IV of your choice"],x:"Survive cheaply, then outspend."}],
"Fisherman":[
 {n:"Spears",k:"m",s:"Spear",w:["Spear or Sickle","Spears at Tier II-III","Tier IV Spears"],x:"Reach for the special fish enemies."}],
"Dwarf":[
 {n:"Hammers",k:"m",s:"Hammer",w:["Hammer","War Hammer, Mace","Tier IV Hammers"],x:"Wide swings that kill six or more give Engineering."}],
"Druid":[
 {n:"Luck instruments",k:"r",s:"Lute",w:["Lute or Pan Flute","Instruments at Tier II-III","Tier IV instruments"],x:"Luck from fruit drives the damage."},
 {n:"Slingshot",k:"r",s:"Slingshot",w:["Slingshot","Slingshots at Tier II-III","Tier IV Slingshots"],x:"Fallback without instruments."}],
"Hiker":[
 {n:"Jousting Lance",k:"m",s:"Jousting Lance",w:["Jousting Lance","Lances at Tier II-III","Tier IV Lances"],x:"Scales with Speed; you never stop moving."}],
"Renegade":[
 {n:"Shotguns",k:"r",s:"Double Barrel Shotgun",w:["Double Barrel Shotgun or SMG","Shotguns at Tier II-III","Flamethrower late"],x:"+2 projectiles on spread weapons."}],
"Vagabond":[
 {n:"Gun mix",k:"r",s:"Revolver",w:["Revolver","Six different Gun-class weapons","Higher tiers from the shop"],x:"Every weapon counts for class bonuses."}],
"Glutton":[
 {n:"Shredder clear",k:"r",s:"Shredder",w:["Shredder; buy Pan Flutes (PD) or Lutes for Luck","Shredders or instruments at Tier II-III","Tier IV of your main weapon"],x:"Wave clear keeps you at full HP so fruit adds explosion damage."},
 {n:"Melee sweep",k:"m",s:"Chopper",w:["Chopper","Choppers at Tier II-III","Tier IV Choppers"],x:"Sweeps through the crowd where you eat fruit."}],
"Arms Dealer":[
 {n:"Shop rebuild",k:"r",s:"Pistol",w:["Pistol (the only starting option)","Rebuild six weapons each shop","Highest tiers the shop shows"],x:"Weapons are 95% off but vanish each shop."}],
"Romantic":[
 {n:"Sweeping melee",k:"m",s:"Sword",w:["Sword or Spear","Swords at Tier II-III; Flute for charm","Tier IV Swords"],x:"+50 melee Range on sweeps."}],
"Caveman":[
 {n:"Primitive melee",k:"m",s:"Stick",w:["Sticks, Spears, Torch","Cacti Club; burn spares for light","Tier IV Primitive weapons"],x:"Burning weapons powers Primitive weapons."}],
"Time Shifter":[
 {n:"Boomerang",k:"r",s:"Boomerang",w:["Boomerang","Boomerangs at Tier II-III","Tier IV Boomerangs"],x:"Reliable wave clear for scrambled waves."}],
"Gangster":[
 {n:"Pistols",k:"r",s:"Pistol",w:["Pistol","Pistols or Shotguns","Tier IV Pistols"],x:"Single-target damage for elites."},
 {n:"Knives",k:"m",s:"Knife",w:["Knife","Knives at Tier II-III","Tier IV Knives"],x:"Crit for elites."}],
"Sailor":[
 {n:"Blunderbuss",k:"r",s:"Blunderbuss",w:["Blunderbuss (Tier II)","Blunderbusses at Tier III","Tier IV Blunderbusses"],x:"+200% Naval damage against cursed enemies."},
 {n:"Anchor",k:"m",s:"Anchor",w:["Anchor or Captain's Sword (Tier II)","Naval melee at Tier III","Tier IV Naval melee"],x:"Melee Naval option."}],
"Ogre":[
 {n:"Hammers",k:"m",s:"Hammer",w:["Hammer","Mace","Plasma Sledge"],x:"Overkill hits make enemies explode."}],
"Apprentice":[
 {n:"Quarterstaff",k:"m",s:"Quarterstaff",w:["Quarterstaff or Sword","Melee at Tier II-III","Tier IV melee"],x:"+2 Melee Damage per level."}],
"Wounded":[
 {n:"Long range",k:"r",s:"Slingshot",w:["Slingshot or Boomerang (PD)","Rail Gun if offered","Tier IV long-range clear"],x:"Kill everything before it reaches you."}]
};
