// Long-form "Deep dive" content for some characters, shown on the guide page under the build tabs.
// Folded in from the earlier separate Brawler and Doctor guide pages (written Nov 2026).
// window.DEEP["<name>"] = { lead, sections:[{h, p, head:[], rows:[[]], notes:[]}], sources:[[label, url]] }
// Ratings marked as synthesis are this site's read of the character's kit, not a published ranking.
window.DEEP = {
"Brawler": {
  lead: "Brawler is a dodge-tank who wins by stacking six Unarmed weapons: the +50% attack speed and the Unarmed set bonus (+3% Dodge at 2 weapons up to +15% at 6) both only reach full value at six.",
  sections: [
    { h: "Weapons", p: "Fist is the backbone and Power Fist is the finisher. Every slot should be Unarmed so the attack speed and Dodge set bonus both apply.",
      head: ["Tier","Weapon","Class","Tiers sold","Why"],
      rows: [
        ["S","Power Fist","Unarmed, Explosive","III–IV only","40/60 damage, 25%/50% chance to explode on hit. Unlocked by winning a Brawler run. Best late-game Unarmed weapon."],
        ["S","Fist","Unarmed","I–IV","8/16/32/64 damage, 100% Melee scaling, 0.78–0.59s. Cheap, combines fast, carries the whole early game."],
        ["A","Flaming Brass Knuckles","Unarmed, Elemental","II–IV","Same stats as Fist plus burning damage, so a straight upgrade. Swap Fists for these when offered."],
        ["A","Claw","Unarmed, Precise","I–IV","Scales with both Attack Speed and Melee Damage, and adds the Precise crit bonus. Strong if you stack Attack Speed."],
        ["B","Hand","Unarmed, Support","I–IV","+3/+6/+12/+25 Harvesting and big knockback, low damage. One early Hand for economy, sell later."],
        ["A","Cestus (PD)","Blunt, Unarmed","II–IV","25/50/100 damage (100% Melee), 1.29–1.1s, and base damage doubles at +10 Knockback (fandom wiki). Unarmed, so it keeps Brawler's bonus."]
      ],
      notes: [
        "Only identical weapons of the same tier combine, so each extra weapon type slows your upgrades. Run one or two types (for example Fists plus Power Fists).",
        "Skip non-Unarmed weapons. They lose the +50% attack speed and break the Dodge set bonus, and ranged ones also eat the -50 Ranged Damage.",
        "The -50 Range is less bad than it looks on melee: less range means slightly faster swings, just a smaller hit area."
      ] },
    { h: "Item ratings by wave", p: "Early waves buy economy and Melee Damage; mid waves fill Dodge to 60% and add healing; late waves turn Dodge into attack speed and boss damage. S = buy on sight, C = skip.",
      head: ["Item","Rarity","Waves 1–6","Waves 7–12","Waves 13–20","Why"],
      rows: [
        ["Retromation's Hoodie","IV","—","S","S","+2% Attack Speed per 1% Dodge, -80 Range. At 60% Dodge that's +120% Attack Speed."],
        ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range (offsets your -50)."],
        ["Blindfold","—","A","S","A","Dodge plus Attack Speed. Skip if already at 60% Dodge."],
        ["Beanie","—","A","A","B","Speed and effective attack speed by lowering Range."],
        ["Bloody Hand","—","B","A","S","+10% Life Steal and +2% Damage per 1% Life Steal. Fists hit constantly, so Life Steal triggers a lot."],
        ["Cape","IV","—","A","A","+20% Dodge, +5% Life Steal; the -2 to each damage stat is minor late."],
        ["Cute Monkey","I","A","A","B","Consumable healing works well when you live in melee range."],
        ["Coffee","I","A","A","B","+10% Attack Speed, -2% Damage. Core for Claw Brawler."],
        ["Bag, Coupon","I","S","B","C","Economy; buy early, stop by mid-game."],
        ["Power Generator","III","B","A","A","+1% Damage per 1% permanent Speed; good with a 10–20% Speed target."],
        ["Scarf (AT)","III","—","A","B","+4 Melee Damage, +4 HP Regen, +4% Speed; enemies 25% faster next wave."],
        ["Leather Vest","II","A","B","C","+6% Dodge, +2 Armor. Great early, dead once you hit the cap."],
        ["Explosive Shells","IV","—","B","A","+60% Explosion Damage. Only with 3+ Power Fists."],
        ["Silver Bullet","III","—","B","A","+25% vs bosses and elites for the wave-20 double boss."],
        ["Sharp Bullet, Ricochet","various","C","C","C","Ranged items do nothing for Unarmed weapons."],
        ["Knot (AT)","III","C","C","C","Blocks combining, which is how Fist builds scale."]
      ],
      notes: [
        "Dodge caps at 60%. Once you're there, pass on +Dodge items and spend on Max HP, Armor and healing.",
        "Community advice on Dodge is split: some say ignore it and build Armor. This guide takes the view that Brawler is one of the few characters where Dodge pays, because the Unarmed set gives it for free.",
        "Stats for Blindfold, Beanie, Bloody Hand and Cute Monkey are summarized from community posts; confirm the numbers in the in-game tooltip."
      ] },
    { h: "Fossils (Primal Dread)", p: "Jaw and Left Leg are the fossils worth chasing. Each fossil's bonus grows with how many you hold, so commit to 3+ or skip them.",
      head: ["Fossil","Scales with fossil count","Downside","Rating"],
      rows: [
        ["Jaw","+1% Life Steal, +1% per fossil held","-3 HP Regen","A: on-hit healing on fast fists"],
        ["Left Leg","+3% Speed, +2% per fossil held","-3% Crit Chance","A for Fist builds (Fist crit is only 1%), B for Claw"],
        ["Spine","+2 HP Regen, +1 per fossil","-5% Damage","B"],
        ["Right Arm","+1 Max HP, +1 per fossil held","-2% Dodge","C: costs your main defense, unless you're over the 60% cap"],
        ["Tooth","Count only","-2 Max HP","C: only to push the count"],
        ["Tail","+3 Harvesting per fossil held (base +5 Harvesting)","-3 Max HP","C: pure economy, no combat stat (in-game card: Unique, 129 coins)"],
        ["Right Leg","+15 Range, +5 per fossil held","-4% Attack Speed","B: eats into Brawler's -50 Range, but costs a slice of the attack speed Fists live on"],
        ["Left Arm","+3 Armor, +1 per fossil held","-3% Speed","C: small armor for a Brawler that already dodges"],
        ["Skull","+10% Damage, +3% per fossil held","-5% Dodge","B: big damage, but costs the Dodge Brawler leans on"]
      ] },
    { h: "Pets", p: "Jellyshield is the best pet for Brawler. Attack Speed never speeds up pets, so Brawler's +50% doesn't help them.",
      head: ["Pet","Effect","Rating"],
      rows: [
        ["Jellyshield","Orbits you and blocks projectiles (limit 3)","S: ranged enemies are what kill a melee Dodge build"],
        ["Bonk Dog","Melee pet; unlocked by equipping 6 Melee-scaling weapons, which Brawler does naturally","A"],
        ["Doc Moth","Aura doubles HP Regen and Life Steal","A with a Life Steal build"],
        ["Mosquitor (PD)","Shoots for 5 (+75% Ranged Damage); hit enemies take 30% more damage for 5s","A: the debuff matters, not its own damage"],
        ["Lootworm","Collects materials, 10% chance to double each","A in waves 1–6"],
        ["Dino Egg (PD)","Defend it 3 more waves to hatch an Ammosaurus","B if bought by wave 10"],
        ["Hungry Hungry Dinosaur (PD)","Eats fruit for stacking damage","C: steals the fruit you heal from"],
        ["Catling Gun","Ranged-damage pet","C: your -50 Ranged Damage hurts it"]
      ] },
    { h: "DLC notes", notes: [
        "Primal Dread: go Mecha. Mechanize one weapon type (your Power Fists or Fists) and pick Life Steal or damage rolls; mechanizing costs more each time.",
        "Plastic Boots (Tier III) stops Mecha oil and Mutant acid puddles from affecting you. High priority for any melee run on the Jungle map.",
        "Virus (Tier III): 25% chance to charm evolved enemies below 50% HP.",
        "Abyssal Terrors Curse: cursed items get stronger but enemies do too. Keep Curse low on Danger 5.",
        "Primal Dread launched November 2, 2026, so fossil and pet ratings are untested on Brawler."
      ] }
  ],
  sources: [
    ["Brotato Wiki – Brawler","https://brotato.wiki.spellsandguns.com/Brawler"],
    ["Brotato Wiki – Fist","https://brotato.wiki.spellsandguns.com/Fist"],
    ["Brotato Wiki – Power Fist","https://brotato.wiki.spellsandguns.com/Power_Fist"],
    ["Brotato Wiki – Claw","https://brotato.wiki.spellsandguns.com/Claw"],
    ["Brotato Wiki – Hand","https://brotato.wiki.spellsandguns.com/Hand"],
    ["Brotato Wiki – Flaming Brass Knuckles","https://brotato.wiki.spellsandguns.com/Flaming_Brass_Knuckles"],
    ["Brotato Wiki – Unarmed class","https://brotato.wiki.spellsandguns.com/Unarmed"],
    ["Steam – Recommended build with Brawler","https://steamcommunity.com/app/1942280/discussions/0/3770109979126244831"],
    ["TrueAchievements – Danger 5 dodge-tank build","https://www.trueachievements.com/a422858/danger-5-achievement"],
    ["number13 – Brawler build","https://en.number13.de/brotato-brawler-build/"],
    ["RogueRanker – Brotato tier list","https://rogueranker.com/brotato-tier-list/"],
    ["Primal Dread guide (fossils)","https://dq7reimagined.com/brotato-primal-dread/"],
    ["Brotato Unpacked – Pet mechanics","https://brotato.unpacked.wiki/topics/pets/"],
    ["Primal Dread Evolution guide","https://tposegaming.com/brotato-primal-dread-evolution/"],
    ["Brotato Wiki – Abyssal Terrors DLC","https://brotato.wiki.spellsandguns.com/Abyssal_Terrors_DLC"]
  ]
},
"Doctor": {
  lead: "Doctor is a regen tank whose only real damage comes from Medical weapons. Regen counts double and Armor counts half, so every choice should feed Medical attack speed, HP Regeneration or survival.",
  sections: [
    { h: "Weapons", p: "Only four weapons get Doctor's +200% attack speed: Medical Gun, Scissors, Circular Saw and (with Primal Dread) Meat Tenderizer. Pick one or two and stack them.",
      head: ["Tier","Weapon","Class","Type","Why"],
      rows: [
        ["S","Circular Saw","Blade, Medical","Melee sweep","Only sold from Tier II up. 45–60% lifesteal, fast sweep, and two class bonuses (Blade + Medical). Needs some Melee Damage."],
        ["S (PD)","Meat Tenderizer","Blunt, Medical","Melee sweep","Scales 100–150% with both Melee Damage and HP Regen, so Doctor's doubled regen also drives its damage. The slow 1.25–1.50s cooldown is fixed by his +200%."],
        ["A","Medical Gun","Medical, Gun","Ranged, 400 range","50–65% lifesteal and the safest playstyle. Weak against hordes without pierce or bounce."],
        ["B","Scissors","Medical, Precise","Melee","Good starter, but falls off. Swap to Saws once you can."],
        ["Late swap","Gatling Laser, Nuclear Launcher","—","Ranged","Endless-only option once your general Attack Speed is positive. Pair with Ricochet or Explosive Shells."]
      ],
      notes: [
        "The Meat Tenderizer rating is this site's own call, not tested community data. Treat it as the top pick to try, not a proven one.",
        "Don't mix in non-Medical weapons early. Doctor's -100% Attack Speed makes them nearly useless, and each one weakens the Medical set bonus (+1 to +5 HP Regen).",
        "Pierce fixes the Medical Gun's horde problem, so Bandana and Sharp Bullet matter more for Doctor than for most characters."
      ] },
    { h: "Item ratings by wave", p: "Early waves reward economy, mid waves sustain and attack speed, late waves boss damage. S = buy on sight, C = skip.",
      head: ["Item","Rarity","Waves 1–6","Waves 7–12","Waves 13–20","Why"],
      rows: [
        ["Doc Moth (pet)","II–IV","S","S","S","Doubles HP Regen and Life Steal inside its aura, on top of Doctor's doubled regen."],
        ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range. The -1 Armor per wave barely matters when Armor counts half."],
        ["Bag","I","S","B","C","+15 materials per crate."],
        ["Coffee","I","A","A","B","+10% Attack Speed for -2% Damage. Cheap, stacks."],
        ["Sharp Bullet, Bandana","I / —","A","S","A","+1 pierce. Medical Gun builds only."],
        ["Lucky Charm","III","A","A","B","+30 Luck: better shops and more crates."],
        ["Power Generator","III","B","A","A","+1% Damage per 1% permanent Speed. Pairs with a 100–110% Speed target."],
        ["Cape","IV","—","A","A","+5% Life Steal, +20% Dodge. The -2 to each damage stat stings early, fine late."],
        ["Retromation's Hoodie","IV","—","A","A","Attack Speed from Dodge. The -80 Range hurts Medical Gun, not Saws or Tenderizers."],
        ["Scarf (AT)","III","—","A","B","+4 HP Regen, +4 Melee Damage, +4% Speed. Enemies are 25% faster next wave."],
        ["Leather Vest","II","B","A","B","+6% Dodge. The +2 Armor is halved, but Dodge is your real defense."],
        ["Silver Bullet","III","—","B","S","+25% damage against bosses and elites, where Doctor runs usually fail."],
        ["Ricochet","IV","—","B","A","+1 bounce for -25% Damage. Medical Gun, or an Endless explosive swap."],
        ["Coral (AT)","II","B","B","C","+10 HP Regen while standing still, -10 Range. Medical Gun builds only."],
        ["Broken Mouth, Exoskeleton, Goblet","various","C","C","C","Each costs HP Regen, which Doctor loses at double value."],
        ["Knot (AT)","III","C","C","C","Blocks weapon upgrades and combining."]
      ],
      notes: [ "Armor-only items rank low throughout: every point is halved for Doctor." ] },
    { h: "Fossils (Primal Dread)", p: "Spine is the one fossil Doctor should chase: its regen grows with every fossil you hold, and Doctor counts it double. Fossils only pay off when you commit to 3 or more.",
      head: ["Fossil","Rarity","Scales with fossil count","Downside","Rating"],
      rows: [
        ["Spine","II","+2 HP Regen, +1 per fossil (6 fossils = +6)","-5% Damage","S: about +12 regen at 6 fossils for Doctor"],
        ["Right Arm","II","+1 Max HP, +1 per fossil held","-2% Dodge","B: a little more HP for regen to work with"],
        ["Left Leg","II","+3% Speed, +2% per fossil held","-3% Crit Chance","B: fits Power Generator and the speed target"],
        ["Jaw","II","+1% Life Steal, +1% per fossil held","-3 HP Regen","C: the regen cost hurts Doctor, and Medical weapons already carry 45–65% lifesteal"],
        ["Tooth","I","Counts toward the total only","-2 Max HP","C: only to push the count"],
        ["Tail","II","+3 Harvesting per fossil held (base +5 Harvesting)","-3 Max HP","C: Harvesting only, and the Max HP cost hurts regen builds (in-game card: Unique, 129 coins)"],
        ["Right Leg","II","+15 Range, +5 per fossil held","-4% Attack Speed","C: Range isn't a regen stat and the attack speed cost slows lifesteal"],
        ["Left Arm","III","+3 Armor, +1 per fossil held","-3% Speed","C: armor counts half for Doctor"],
        ["Skull","III","+10% Damage, +3% per fossil held","-5% Dodge","A: the best damage fossil"]
      ],
      notes: [ "Take Spine whenever you see it. Add a second and third fossil only if the shop also offers Right Arm or Left Leg. Five fossils in one run also unlocks the Caveman character." ] },
    { h: "Pets", p: "Doc Moth is the only pet that changes how Doctor plays. Attack Speed never speeds up a pet's attacks, so Doctor's +200% does nothing for them.",
      head: ["Pet","Effect","Rating"],
      rows: [
        ["Doc Moth","Aura (radius 200) doubles HP Regen and Life Steal. Limit 4. Price 55.","S at every wave. Stay in the aura during big fights."],
        ["Mosquitor (PD)","Shoots for 5 (+75% Ranged Damage). Hit enemies take 30% more damage for 5s; copies refresh, not stack.","A: one copy raises your damage, Doctor's weak spot"],
        ["Jellyshield","Orbits you and blocks projectiles. Limit 3.","A on the Jungle and late waves"],
        ["Lootworm","Collects materials, 10% chance to double each. Unique.","A in waves 1–6, falls off later"],
        ["Hungry Hungry Dinosaur (PD)","12–14 (+25% Max HP) damage, +5 per fruit it eats this wave. Price 80.","B: scales with Max HP, but eats your healing fruit"],
        ["Catling Gun","Shoots for 10 (+60% Ranged Damage). Faster when you stay close.","B for Medical Gun builds, C for melee"],
        ["Dino Egg (PD)","Defend it 3 more waves to hatch an Ammosaurus. Price 65, limit 1.","B if bought by wave 10"],
        ["Bonk Dog, Bot-O-Mine, Blazemander, Ratzilla, Mouse, Scapegoat","Melee, Engineering, Elemental or Max HP pets","C: they scale off stats Doctor doesn't build"]
      ] },
    { h: "DLC notes", notes: [
        "Primal Dread: go Mecha. Mecha parts mechanize one weapon at a time and can roll HP Regen or Life Steal. Pick one weapon type first, since costs rise with each upgrade.",
        "Mutation copies items randomly, and its acid puddles punish melee Doctors who stand in packs.",
        "Plastic Boots (Tier III) stops oil and acid puddles from affecting you on either evolution path.",
        "Virus (Tier III): 25% chance to charm evolved enemies below 50% HP. Solid on the Jungle map.",
        "Abyssal Terrors Curse: Doctor can take a moderate amount because regen handles chip damage, but keep it low on Danger 5, where boss DPS checks are already the weak point.",
        "Primal Dread launched November 2, 2026, so fossil, pet and Meat Tenderizer advice is early."
      ] }
  ],
  sources: [
    ["Brotato Wiki – Doctor","https://brotato.wiki.spellsandguns.com/Doctor"],
    ["Brotato Wiki – Circular Saw","https://brotato.wiki.spellsandguns.com/Circular_Saw"],
    ["Brotato Wiki – Medical Gun","https://brotato.wiki.spellsandguns.com/Medical_Gun"],
    ["Brotato Wiki – Scissors","https://brotato.wiki.spellsandguns.com/Scissors"],
    ["brotato-builds.com – Doctor build guide","https://brotato-builds.com/builds/Doctor"],
    ["Brotato Unpacked – Meat Tenderizer","https://brotato.unpacked.wiki/weapons/meat-tenderizer/"],
    ["SteamAH – Danger 5 guide","https://steamah.com/brotato-danger-5-guide/"],
    ["Primal Dread guide (fossils)","https://dq7reimagined.com/brotato-primal-dread/"],
    ["brotato-builds.com – Primal Dread item list","https://brotato-builds.com/primal-dread"],
    ["Brotato Fandom – Items and pets","https://brotato.fandom.com/wiki/Items"],
    ["Brotato Unpacked – Pet mechanics","https://brotato.unpacked.wiki/topics/pets/"],
    ["Primal Dread Evolution guide","https://tposegaming.com/brotato-primal-dread-evolution/"],
    ["Brotato Wiki – Curse","https://brotato.wiki.spellsandguns.com/Curse"],
    ["Brotato Wiki – Abyssal Terrors DLC","https://brotato.wiki.spellsandguns.com/Abyssal_Terrors_DLC"]
  ]
}
};

// ---- Shared data for the batch-written deep dives (S tier, Nov 17 2026) ----
// Fossil stats: in-game cards (Tail, Left Arm, Left Leg, Right Leg) and the Primal Dread guide.
// Pet effects: wiki Items page and the pet notes above. Ratings are per character (site synthesis).
(function(){
  var FOSSILS = {
    "Spine":["II","+2 HP Regen, +1 per fossil held","-5% Damage"],
    "Jaw":["II","+1% Life Steal, +1% per fossil held","-3 HP Regen"],
    "Right Arm":["II","+1 Max HP, +1 per fossil held","-2% Dodge"],
    "Skull":["III","+10% Damage, +3% per fossil held","-5% Dodge"],
    "Left Leg":["II","+3% Speed, +2% per fossil held","-3% Crit Chance"],
    "Right Leg":["II","+15 Range, +5 per fossil held","-4% Attack Speed"],
    "Left Arm":["III","+3 Armor, +1 per fossil held","-3% Speed"],
    "Tail":["II","+5 Harvesting, +3 per fossil held","-3 Max HP"],
    "Tooth":["I","Counts toward the fossil total only","-2 Max HP"]
  };
  var PETS = {
    "Jellyshield":"Orbits you and blocks projectiles. Limit 3.",
    "Doc Moth":"Aura doubles HP Regen and Life Steal while you stand in it.",
    "Mosquitor (PD)":"Shoots for 5 (+75% Ranged Damage); hit enemies take 30% more damage for 5s.",
    "Lootworm":"Collects materials and breaks trees; 10% chance to double each material.",
    "Catling Gun":"Shoots for 10 (+60% Ranged Damage); attacks twice as fast while you stay close.",
    "Bonk Dog":"Hits for 10 (60%); every 5s dashes for 8 (+40%) explosive area damage.",
    "Blazemander":"Every 4s shoots burning projectiles in all directions; hit enemies burn for 5x3 (+50%).",
    "Bot-O-Mine":"A structure that shoots for 10 (+100%) and drops a landmine every 5s.",
    "Scapegoat":"Enemies target it instead of you; stand next to it to revive it. Tier IV.",
    "Hungry Hungry Dinosaur (PD)":"12–14 (+25% Max HP) damage, +5 for each fruit it eats this wave.",
    "Dino Egg (PD)":"Defend it for 3 more waves to hatch an Ammosaurus.",
    "Ratzilla":"Hits for 5 (+10%)."
  };
  var ORDER = {S:0, A:1, B:2, C:3};
  function rank(r){ var k = r.charAt(0); return k in ORDER ? ORDER[k] : 4; }
  function fossilSection(p, ratings, notes){
    var rows = Object.keys(ratings).map(function(n){ var f = FOSSILS[n]; return [n, f[0], f[1], f[2], ratings[n]]; })
      .sort(function(a,b){ return rank(a[4]) - rank(b[4]); });
    if(!ratings.Skull){ var s = FOSSILS.Skull; rows.push(["Skull", s[0], s[1], s[2], "A: big damage if you can spare Dodge"]); }
    return { h:"Fossils (Primal Dread)", p:p, head:["Fossil","Rarity","Scales with fossil count","Downside","Rating"], rows:rows,
      notes:(notes||[]).concat(["Every fossil's bonus grows with how many fossils you hold, so commit to 3 or more or skip them. Five fossils in one run also unlocks the Caveman character."]) };
  }
  function petSection(p, ratings){
    return { h:"Pets", p:p, head:["Pet","Effect","Rating"],
      rows: Object.keys(ratings).map(function(n){ return [n, PETS[n], ratings[n]]; }).sort(function(a,b){ return rank(a[2]) - rank(b[2]); }) };
  }
  var WIKI = "https://brotato.wiki.spellsandguns.com/";
  function src(name, extra){
    return [["Brotato Wiki – " + name.replace(/_/g, " "), WIKI + name], ["Brotato Wiki – Weapons (damage, cooldown, tiers)", WIKI + "Weapons"],
      ["Brotato Wiki – Items (effects, rarity)", WIKI + "Items"]].concat(extra || [],
      [["brotato-builds.com tier list","https://brotato-builds.com/tierlist"], ["Primal Dread guide (fossils)","https://dq7reimagined.com/brotato-primal-dread/"],
       ["Brotato Unpacked – Pet mechanics","https://brotato.unpacked.wiki/topics/pets/"]]);
  }
  var ITEM_HEAD = ["Item","Rarity","Waves 1–6","Waves 7–12","Waves 13–20","Why"];
  var WPN_HEAD = ["Tier","Weapon","Class","Tiers sold","Why"];
  var D = window.DEEP;

  D["Loud"] = {
    lead: "Loud gets +30% Damage from wave 1 and 50% more enemies every wave. More enemies means more kills, materials and XP, as long as your weapons can clear them. Harvesting drops by 3 at the end of each wave, so Loud lives on kills, not farming.",
    sections: [
      { h:"Weapons", p:"Pick weapons that hit more than one enemy: bounce, pierce or burn. Single-target weapons fall behind the extra enemies.", head:WPN_HEAD,
        rows: [
          ["S","Slingshot","Primitive","I–IV","10/13/16/20 damage (80% Ranged), 1.22–1.10s, 300 range. Bounces 1/2/3/4 times, so each shot clears more of Loud's bigger waves."],
          ["S","Double Barrel Shotgun","Gun","I–IV","4 pellets of 3/6/9 damage (6 pellets of 9 at Tier IV), 80–100% Ranged. Each pellet pierces 2 enemies (3 at Tier IV), -30% per pierce."],
          ["A","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s, 400 range. High damage per second but no pierce. A good starter, weaker than bounce or pierce late."],
          ["A","Flamethrower","Elemental, Heavy","II–IV","Pierces 99 enemies and burns them for 1x3/3x5/5x8 (100% Elemental). Only sold from Tier II, and it needs Elemental Damage, so it fills the last slots."],
          ["B","Shredder","Gun, Explosive","I–IV","Only 5–25 damage (50% Ranged), but pierces 3 at full damage and explodes on 50–100% of hits."],
          ["C","Sniper Gun","Gun, Precise","III–IV","50/80 damage on a 2.4s cooldown. Its 5–8 splinters don't make up for one shot every 2.4 seconds against 50% more enemies."]
        ],
        notes: [ "Ricochet's -25% Damage costs less on Loud: the +30% covers most of it.", "Pierce items (Sharp Bullet, Bandana) stack with shotgun pierce and turn the SMG into a crowd weapon." ] },
      { h:"Item ratings by wave", p:"Early: economy and cheap area damage. Mid: bounce and attack speed. Late: boss damage and defense. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bag","I","S","B","C","+15 materials per crate, -1% Speed."],
          ["Coupon","I","A","B","C","-5% item prices."],
          ["Alien Eyes","II","A","A","B","Fires 6 eyes around you every 3s for 6 (+50%) each. Free area damage."],
          ["Cyberball","II","A","A","C","25% chance on any kill to hit a random enemy. Loud gets more kills, so it triggers more often."],
          ["Baby Elephant","I","A","B","C","25% chance to hit a random enemy when you pick up a material."],
          ["Sharp Bullet","I","A","A","B","+1 pierce, -5% Damage, -20% piercing damage."],
          ["Ricochet","IV","—","S","A","+1 bounce on every projectile for -25% Damage."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range; -1 Armor each wave."],
          ["Rip and Tear","III","—","A","A","Enemies have a 20% chance to explode for 10 (+50%) on death. Loud's win reward; more enemies, more explosions."],
          ["Jellyshield","III","B","A","A","Blocks projectiles. 50% more enemies means 50% more shooters."],
          ["Silver Bullet","III","—","A","S","+25% damage against bosses and elites."],
          ["Spider","IV","—","B","B","+12% Damage and -5 Harvesting (which Loud doesn't need), but only +6% Attack Speed per different weapon, and Loud runs one type."],
          ["Gentle Alien","I","B","C","C","+5% Damage and +2 Max HP for another +5% enemies on top of Loud's +50%."],
          ["Piggy Bank, Wheelbarrow, Fertilizer","II / II / I","C","C","C","Savings and Harvesting items. Loud loses 3 Harvesting every wave, and kills pay better."]
        ] },
      fossilSection("Right Arm and Left Arm add the defense Loud's extra enemies demand. Right Leg suits Slingshots and Shotguns.",
        {"Right Arm":"A: Max HP for a character who takes more hits","Left Arm":"A: Armor for the same reason","Right Leg":"B: more Range for bouncing and piercing guns; -4% Attack Speed",
         "Left Leg":"B: Speed for kiting bigger waves","Spine":"B: regen, but -5% Damage","Jaw":"B: Life Steal procs a lot with this many targets","Tail":"C: Harvesting drains every wave","Tooth":"C: only to push the count"}),
      petSection("Pets that protect you or take aggro beat damage pets: Loud already has the damage.",
        {"Jellyshield":"S: more enemies means more projectiles to block","Scapegoat":"A: pulls part of the bigger waves off you","Mosquitor (PD)":"A: the +30% damage taken stacks with Loud's +30%",
         "Lootworm":"A in waves 1–6: more kills, more drops to double","Catling Gun":"B for ranged builds","Doc Moth":"B with a Life Steal item or two","Bonk Dog":"C: low damage for the slot"}),
      { h:"DLC notes", notes: [
          "Abyssal Terrors: Ashes is the best item Loud can find; buy it whenever it shows.",
          "Black Flag (AT) adds another +10% enemies with +10% enemy health and damage. Only take it if your wave clear is already comfortable.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("Loud", [["Brotato Wiki – Rip and Tear", WIKI + "Rip_and_Tear"]])
  };

  D["King"] = {
    lead: "King has +50 Luck and gains +25% Damage and +25% Attack Speed for every Tier IV weapon, up to +150% each with six. Every Tier I weapon costs 15% of both. Items count too: +5 Max HP for each different Tier IV item, -2 Max HP for each different Tier I item. The starting weapon is Tier II, so you never begin in the penalty.",
    sections: [
      { h:"Weapons", p:"Pick one weapon type, lock its copies and combine upward. Two identical weapons of the same tier combine into the next tier, so one type reaches Tier IV fastest.", head:WPN_HEAD,
        rows: [
          ["S","Pistol","Gun","I–IV","12/20/30/50 damage (100% Ranged), 1.20–0.87s, 400 range, pierces 1. Cheap copies (10/22/45/91), so it's the fastest to six Tier IVs."],
          ["S","Knife","Precise","I–IV","9–25 damage (80% Melee), crits for x2.5 to x4 at 20–50% chance. Same cheap price curve as Pistol."],
          ["A","Excalibur","Legendary, Blade","IV only","200 damage (200% Melee and 200% Max HP), 0.66s, but -2 Armor for every weapon you hold. King's win reward. Counts as a Tier IV weapon."],
          ["A","Chain Gun","Legendary, Gun","IV only","2x3 damage (100% Ranged and 100% Engineering) every 0.073s, with a 2.04s pause every 100 shots."],
          ["A","Gatling Laser","Legendary, Heavy","IV only","10 damage (100% Ranged) every 0.073s, pierces 3. Take it over a Tier III Pistol if it shows up."],
          ["B","Thief Dagger","Precise","I–IV","6–30 damage (50% Melee); a crit kill has a 50–80% chance to drop an extra material. Economy start, then sell."],
          ["C","Any extra Tier I weapon","—","—","-15% Damage and -15% Attack Speed each. Combine or sell them; never hold more than two."]
        ],
        notes: [ "Your first Tier IV weapon around wave 7–8 is the turning point. Every Tier IV after it adds another 25% of both.",
                 "Legendary weapons are Tier IV only, so each one you buy counts straight away." ] },
      { h:"Item ratings by wave", p:"Early: economy that speeds up combining. Mid: anything that raises item tiers. Late: as many different Tier IV items as you can, for +5 Max HP each. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Anvil","IV","—","S","S","Upgrades a random weapon each time you enter a shop. Free tiers on the way to six Tier IVs, and +5 Max HP as a Tier IV item."],
          ["Goldfish (AT)","III","A","S","A","Items in the next reroll are one tier higher. More Tier IV items, more +5 Max HP."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Bag","I","S","B","C","+15 materials per crate. A Tier I item, so it also costs 2 Max HP."],
          ["Coupon","I","A","B","C","-5% item prices. Also a Tier I item (-2 Max HP)."],
          ["Tree","I","A","B","C","More trees, so more fruit and materials. Tier I item (-2 Max HP)."],
          ["Recycling Machine","II","A","A","B","+35% materials from recycling. King recycles a lot of low-tier weapons."],
          ["Cyberball","II","A","B","C","25% chance on a kill to hit a random enemy."],
          ["Seashell (AT)","IV","—","A","S","Every 5th projectile of each ranged weapon fires +3 projectiles, -10% Damage. Pistol builds."],
          ["Lantern (AT)","IV","—","A","S","+10% Damage, +50 Range, +15 Knockback and a knockback pulse every 3s. Knife builds."],
          ["Silver Bullet","III","—","B","A","+25% damage against bosses and elites."],
          ["Broken Mouth","I","B","C","C","+5 Max HP, -1 HP Regen. As a Tier I item it nets only +3 Max HP."],
          ["Knot (AT)","III","C","C","C","+15% Damage and +15 Max HP, but weapons can't be upgraded or recycled. Stops King's whole plan."]
        ],
        notes: [ "The Max HP bonus counts different items, so a second copy of the same Tier IV item adds nothing to it. Same for the Tier I penalty: one Bag costs 2, a second Bag costs nothing more." ] },
      fossilSection("Fossils are Tier I–III items, so none of them adds to King's Tier IV bonus. Take them for their own stats only.",
        {"Right Arm":"A: Max HP, and King has no Dodge to lose","Left Arm":"B: +3 Armor, +1 per fossil; Excalibur builds lose Armor per weapon",
         "Right Leg":"B: Range for Pistols; -4% Attack Speed","Left Leg":"B: Speed; -3% Crit Chance hurts Knives","Spine":"B: regen for -5% Damage","Jaw":"B: Life Steal",
         "Tail":"C: Harvesting only","Tooth":"C: a Tier I item, so King also loses 2 Max HP"}),
      petSection("Scapegoat is a Tier IV item, so it also adds +5 Max HP. Lootworm is Tier I, so it costs 2 Max HP.",
        {"Scapegoat":"A: takes aggro, and counts toward King's Tier IV item bonus","Jellyshield":"A: blocks projectiles","Mosquitor (PD)":"A: +30% damage taken on whatever it hits",
         "Lootworm":"A in waves 1–6 for the economy, despite the -2 Max HP","Catling Gun":"B for Pistol builds that stay close","Doc Moth":"B with Life Steal","Bonk Dog":"B for Knife builds"}),
      { h:"DLC notes", notes: [
          "Abyssal Terrors: Goldfish, Seashell and Lantern all point at King's Tier IV goal. Knot is the one AT item to never buy.",
          "Fish Hook (AT) can curse locked items. Cursed items get stronger, but enemies do too; on Danger 5 keep Curse low.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("King", [["Brotato Wiki – Anvil", WIKI + "Anvil"], ["Brotato Wiki – Abyssal Terrors DLC", WIKI + "Abyssal_Terrors_DLC"]])
  };

  D["Golem"] = {
    lead: "Golem starts with +20 Max HP, and every Max HP and Armor change counts 33% more. Golem can't heal in any way during a wave: no HP Regen, Life Steal, fruit or Medikit. HP resets between waves. Below 50% HP it gains +40% Attack Speed and +20% Speed.",
    sections: [
      { h:"Weapons", p:"Weapons that scale with Armor or Max HP turn Golem's defensive bonuses into damage.", head:WPN_HEAD,
        rows: [
          ["S","Spiky Shield","Medieval, Blunt","I–IV","10/15/20/30 damage scaling with 100/125/150/200% of your Armor, 1.16–1.01s. Golem's +33% Armor feeds its damage directly."],
          ["A","Potato Thrower","Support","II–IV","3/5/10 damage (40% Ranged and 20% Max HP) every 0.45–0.28s, 500 range. Scales with the Max HP you're already stacking."],
          ["A","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s, 400 range. Simple damage while your stats defend."],
          ["A","Slingshot","Primitive","I–IV","10–20 damage (80% Ranged), bounces 1–4 times."],
          ["B","Spoon","Blunt","I–IV","10–25 damage (50% Melee and 15–25% Max HP)."],
          ["C","Chopper","Blade","I–IV","Scales with 15–30% Max HP, but its bonus heal from consumables does nothing for Golem."],
          ["C","Sharp Tooth","Primitive, Precise","I–IV","Scales with Life Steal, which Golem has no reason to build."]
        ],
        notes: [ "Under 50% HP is Golem's power state: +40% Attack Speed and +20% Speed. Don't buy defense to stay above half; buy enough to survive the bottom half." ] },
      { h:"Item ratings by wave", p:"Max HP and Armor first, Dodge second. Any item whose main effect is healing is wasted. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Stone Skin","III","S","S","A","+1 Max HP for every Armor, -6% Attack Speed. Golem's win reward; both stats are boosted 33%."],
          ["Warrior Helmet","III","A","A","A","+3 Armor, +5 Max HP, -5% Speed."],
          ["Helmet","I","A","B","C","+1 Armor, -2% Speed."],
          ["Metal Plate","II","A","A","B","+2 Armor, -3% Damage."],
          ["Leather Vest","II","A","A","B","+2 Armor and +6% Dodge for -3 Max HP."],
          ["Padding","II","A","A","B","+3 Max HP, +1 per 80 materials held."],
          ["Exoskeleton","IV","—","S","A","+3 Armor, +5% Crit, +5 Engineering, +5% Speed. Its -2 HP Regen and -2% Life Steal cost Golem nothing."],
          ["Cape","IV","—","A","A","+20% Dodge. The +5% Life Steal is wasted."],
          ["Retromation's Hoodie","IV","—","A","A","+2% Attack Speed per 1% Dodge, -80 Range. Shield and short-range builds."],
          ["Jellyshield","III","B","A","S","Blocks projectiles. With no healing, every blocked hit counts."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Silver Bullet","III","—","A","S","+25% damage against bosses and elites."],
          ["Torture","IV","C","C","C","+15 Max HP, but its 5 HP per second is healing, which Golem can't use. Expensive for the HP alone."],
          ["Bloody Hand","IV","C","C","C","You take 1 damage per second and Golem can't use the Life Steal to recover it."],
          ["Weird Ghost","I","C","C","C","You start the next wave at 1 HP, and Golem can't heal back up."]
        ],
        notes: [ "Skip every HP Regen and Life Steal item. The guide's Avoid list covers them; the wiki confirms even Medikit can't heal Golem." ] },
      fossilSection("Right Arm and Left Arm are made for Golem: both stats get the 33% boost.",
        {"Right Arm":"S: Max HP, boosted 33%","Left Arm":"A: +3 Armor, +1 per fossil, boosted 33%","Left Leg":"B: Speed for kiting","Right Leg":"B: Range for ranged builds; -4% Attack Speed",
         "Spine":"C: HP Regen does nothing, and it costs 5% Damage","Jaw":"C: Life Steal does nothing","Tail":"C: -3 Max HP","Tooth":"C: -2 Max HP"}),
      petSection("Golem can't heal, so pets that stop hits are worth more than for anyone else.",
        {"Jellyshield":"S: every blocked projectile is HP you can't get back otherwise","Scapegoat":"A: enemies chase it instead of you",
         "Hungry Hungry Dinosaur (PD)":"A: scales with Max HP, and it eats fruit Golem can't use anyway","Mosquitor (PD)":"A: the damage debuff",
         "Lootworm":"A in waves 1–6","Bonk Dog":"B","Doc Moth":"C: doubles healing Golem doesn't have"}),
      { h:"DLC notes", notes: [
          "Primal Dread: Plastic Boots (Tier III) stops oil and acid puddles from affecting you. Puddle damage is HP Golem can't recover.",
          "Abyssal Terrors: Ashes costs 1 Armor every wave, which Golem feels more than most. Still worth it for +20% Damage and Attack Speed.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("Golem", [["Brotato Wiki – Spiky Shield", WIKI + "Spiky_Shield"], ["Brotato Wiki – Stone Skin", WIKI + "Stone_Skin"]])
  };

  D["Creature"] = {
    lead: "Creature (Abyssal Terrors) adds 35% of your Curse to weapon damage and gains +1 Curse every level, so damage grows all run without damage items. It starts with a cursed Fish Hook. At the end of every wave it loses 10 Range and 5% XP Gain, so the run pushes you toward close, fast weapons.",
    sections: [
      { h:"Weapons", p:"Fast weapons add the Curse bonus on every hit, and melee weapons don't care about the Range loss.", head:WPN_HEAD,
        rows: [
          ["S","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s. The most hits per second of any starter, so the most Curse damage. Keep fights close as Range shrinks."],
          ["A","Fist","Unarmed","I–IV","8/16/32/64 damage (100% Melee), 0.78–0.59s, 150 range. Short range already, so the Range loss barely matters."],
          ["A","Knife","Precise","I–IV","9–25 damage (80% Melee), crits for x2.5 to x4. Melee, so Range decay doesn't hurt it."],
          ["A","Shuriken","Precise","I–IV","7–15 damage, 0.87–0.70s, crits bounce 1–4 times. 350 range, so it feels the decay late."],
          ["B","Spiky Shield","Medieval, Blunt","I–IV","Scales with Armor; useful if you go heavy defense against Curse-buffed enemies."],
          ["C","Long-range weapons","—","—","Crossbow, Sniper Gun, Rocket Launcher: 10 Range off every wave adds up, and these lose the most."]
        ],
        notes: [ "Lock anything you want in the shop: Fish Hook gives locked items a 20% chance to come back cursed, which raises their stats and your Curse." ] },
      { h:"Item ratings by wave", p:"Curse is damage for Creature, but it also buffs enemies, so keep defense rising with it. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Fish Hook (AT)","II","S","A","B","20% chance to curse locked items and weapons when you leave the shop; +1 Curse."],
          ["Barnacle (AT)","III","A","A","B","+35% stats from level-up upgrades, +1 Curse per level. Creature's win reward."],
          ["Black Flag (AT)","III","A","A","B","+5 Curse and +1 material per cursed kill, but +10% enemies, enemy health and enemy damage."],
          ["Corrupted Shard (AT)","I","A","B","C","+3% Damage, +1 Curse. Cheap Curse."],
          ["Coffee","I","A","A","B","+10% Attack Speed, -2% Damage. More hits, more Curse damage."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, and +100 Range to undo ten waves of decay."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Retromation's Hoodie","IV","—","A","A","+2% Attack Speed per 1% Dodge, -80 Range. Fine for melee, bad for SMG."],
          ["Bloody Hand","IV","—","A","S","+10% Life Steal and +2% Damage per 1% Life Steal; you take 1 damage per second."],
          ["Jellyshield","III","B","A","A","Blocks projectiles from Curse-buffed enemies."],
          ["Silver Bullet","III","—","A","S","+25% damage against bosses and elites."],
          ["Lantern (AT), Wings","IV / III","C","C","C","Range items: the site's builds skip them, since Creature sheds 10 Range every wave."]
        ],
        notes: [ "Curse on Danger 5: every point raises enemies too. Match each Curse jump with Armor or Max HP." ] },
      fossilSection("Defensive fossils help most, because Creature's Curse keeps making enemies tougher.",
        {"Right Arm":"A: Max HP to keep pace with Curse-buffed enemies","Left Arm":"A: +3 Armor, +1 per fossil","Jaw":"B: Life Steal, good with Bloody Hand",
         "Left Leg":"B: Speed","Spine":"B: regen for -5% Damage","Right Leg":"C: the Range comes back off at 10 per wave","Tail":"C: Harvesting only","Tooth":"C: only to push the count"}),
      petSection("Pets don't get Creature's Curse damage, so pick them for defense.",
        {"Jellyshield":"A: blocks projectiles","Scapegoat":"A: takes aggro","Mosquitor (PD)":"A: +30% damage taken on top of your Curse damage","Lootworm":"A in waves 1–6",
         "Catling Gun":"B: fires faster while you stay close, which Creature does anyway","Doc Moth":"B with Bloody Hand or Life Steal","Bonk Dog":"B for melee builds"}),
      { h:"DLC notes", notes: [
          "Creature is an Abyssal Terrors character, and its whole kit is built on that DLC's Curse system.",
          "Primal Dread: Plastic Boots (Tier III) stops oil and acid puddles, which matters for a character that has to fight up close.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("Creature", [["Brotato Wiki – Curse", WIKI + "Curse"], ["Brotato Wiki – Abyssal Terrors DLC", WIKI + "Abyssal_Terrors_DLC"]])
  };

  D["Technomage"] = {
    lead: "Technomage starts with 2 Turrets. Each structure gives +2 Elemental Damage, and each point of permanent Elemental Damage gives structures +5% attack speed, so every purchase feeds the other half. Melee and Ranged Damage changes are reduced by 100%, and levels need 75% more XP.",
    sections: [
      { h:"Weapons", p:"Use Elemental weapons. Anything scaling with Melee or Ranged Damage gets nothing from items.", head:WPN_HEAD,
        rows: [
          ["S","Wand","Elemental","I–IV","1 hit plus 3x3/5x5/8x6/12x9 burning (100% Elemental), 0.87–0.53s, 350–425 range, pierces 1."],
          ["A","Particle Accelerator","Heavy, Elemental","III–IV","60/120 damage (100% Elemental and 100% Engineering), burns for 8x8/10x10, pierces, 800 range. Technomage's win reward."],
          ["A","Thunder Sword","Blade, Elemental","III–IV","40/75 damage (125/150% Melee and Elemental); each hit fires 2/4 slowing projectiles for 100% Elemental."],
          ["A","Icicle","Precise, Elemental","I–IV","10/20/30/40 damage (100% Elemental), 400 range, pierces 1."],
          ["A","Taser","Support, Elemental","I–IV","7x1 up to 14x4 damage (80–50% Elemental) that slows enemies around each projectile."],
          ["B","Wrench","Tool","I–IV","Spawns a Turret / Incendiary / Laser / Explosive Turret by tier. Each one is a structure, so +2 Elemental Damage. Its own hits scale with Melee Damage, so ignore them."],
          ["B","Screwdriver","Tool","I–IV","Drops a landmine every 12/9/6/3s for 10 (100% Engineering) damage."],
          ["C","Melee or Ranged weapons","—","—","Their scaling stat is frozen at its base value for Technomage."]
        ],
        notes: [ "Engineering still makes turrets hit harder, so Engineering items are fair game." ] },
      { h:"Item ratings by wave", p:"Every structure and every Elemental Damage item, in that order. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Turret","I","S","A","B","Structure: shoots for 10 (+80%). +2 Elemental Damage."],
          ["Incendiary Turret","II","S","A","B","Structure: flames for 8x5 (+33%) burning. +2 Elemental Damage."],
          ["Pocket Factory","II","S","A","B","+2 Engineering, and every tree you kill spawns a turret."],
          ["Laser Turret","III","A","S","A","Structure: piercing shots for 20 (+125%)."],
          ["Explosive Turret","IV","—","A","S","Structure: explosive shots for 25 (+150%) in an area."],
          ["Medical Turret","II","A","A","B","Structure that heals you for 3 (+5%). Counts for the +2 Elemental."],
          ["Tyler","II","A","A","B","Spawns a little guy firing 10 piercing lightning bolts for 12 (+90%+90%)."],
          ["Improved Tools","III","A","S","A","+10% Attack Speed and faster structures."],
          ["Wolf Helmet","IV","—","S","S","+10 Elemental Damage and +20 Luck; -5 Engineering."],
          ["Strange Book","III","A","A","A","+1 Engineering per permanent Elemental Damage."],
          ["Fuel Tank","II","A","A","B","+4 Elemental Damage. Its -1 Melee and -1 Ranged cost Technomage nothing."],
          ["Snake","I","A","A","B","Burning spreads to one more enemy; -1 Max HP."],
          ["Greek Fire","IV","—","A","S","Burning also deals 10% of the enemy's current HP (1% on bosses and elites)."],
          ["Wandering Bot","III","—","A","A","A bot that slows nearby enemies."],
          ["Robot Arm","IV","—","A","A","+3 Engineering at the end of every wave; the Melee half is wasted, and -1 Max HP each wave."],
          ["Big Arms, Heavy Bullets, Scope","IV / IV / II","C","C","C","Melee and Ranged Damage items are reduced 100%."]
        ] },
      fossilSection("Defensive fossils help the turrets do the work; nothing in a fossil boosts Elemental Damage.",
        {"Right Arm":"A: Max HP while turrets carry","Left Arm":"A: +3 Armor, +1 per fossil","Left Leg":"B: Speed for kiting around your turrets",
         "Spine":"B: regen for -5% Damage","Right Leg":"B: Range for Wands and Icicles; -4% Attack Speed","Jaw":"C: Life Steal procs off your weapons, not turrets",
         "Tail":"C: Harvesting only","Tooth":"C: only to push the count"}),
      petSection("Bot-O-Mine is a structure, so it also adds +2 Elemental Damage.",
        {"Bot-O-Mine":"S: a structure, so +2 Elemental Damage on top of its shots and mines","Blazemander":"A: burning stacks with Snake and Greek Fire",
         "Jellyshield":"A: blocks projectiles","Scapegoat":"A: holds enemies near your turrets","Lootworm":"A in waves 1–6","Mosquitor (PD)":"B: its own shots scale with Ranged Damage, but the +30% damage taken helps turrets",
         "Doc Moth":"B with Medical Turret","Catling Gun":"C: Ranged Damage scaling"}),
      { h:"DLC notes", notes: [
          "Abyssal Terrors: Lighthouse gives +20 Engineering but -1 Engineering per structure, so it shrinks as Technomage builds. Take it early or not at all.",
          "Primal Dread: Plastic Boots (Tier III) stops oil and acid puddles from affecting you.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("Technomage", [["Brotato Wiki – Particle Accelerator", WIKI + "Particle_Accelerator"], ["Brotato Wiki – Structures", WIKI + "Structure"]])
  };

  // ---- A tier (Nov 17 2026). Brawler and Doctor already have deep dives above. ----
  D["Crazy"] = {
    lead: "Crazy gets +100 Range with Precise weapons and +25% Attack Speed, and starts with a Knife. The wiki notes the Range bonus applies in full to melee weapons, where normal Range is halved, but not to weapons that scale with Range, such as Crossbow. The costs: -30% Dodge, -10 Engineering and -10 Ranged Damage.",
    sections: [
      { h:"Weapons", p:"Precise melee weapons get the full +100 Range, so Knives and Daggers hit from half the screen.", head:WPN_HEAD,
        rows: [
          ["S","Knife","Precise","I–IV","9/13/18/25 damage (80% Melee), 1.01–0.78s, crits for x2.5 / x3 / x3.5 / x4 at 20–50% chance."],
          ["S","Thief Dagger","Precise","I–IV","6–30 damage (50% Melee), 20–40% crit. A crit kill has a 50–80% chance to drop a material."],
          ["A","Claw","Unarmed, Precise","I–IV","5–25 damage scaling with Melee Damage and 15–30% of Attack Speed, 0.78–0.61s. Good once Attack Speed piles up."],
          ["A","Scissors","Medical, Precise","I–IV","5–20 damage (80% Melee) with 40–60% lifesteal. Defense for a character with no Dodge."],
          ["B","Shuriken","Precise","I–IV","7–15 damage, crits bounce 1–4 times. Already 350 range, so it gains less from the bonus."],
          ["B","Sharp Tooth","Primitive, Precise","I–IV","5–15 damage scaling with 50% Melee and 50–100% Life Steal."],
          ["C","Crossbow","Precise, Medieval","I–IV","The wiki says Crazy's Range bonus doesn't apply to Range-scaling weapons like this one."]
        ],
        notes: [ "Hunting Trophy (Crazy's win reward) and Thief Dagger both turn crit kills into materials. Together they fund the whole run." ] },
      { h:"Item ratings by wave", p:"Crit Chance and Melee Damage for offense, Armor, Max HP and Life Steal for defense. Dodge starts 30 points down, so skip it. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Hunting Trophy","III","S","S","A","33% chance to gain 1 material on a crit kill."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Coffee","I","A","A","B","+10% Attack Speed, -2% Damage."],
          ["Tentacle","II","A","A","B","+3% Crit Chance, 20% chance to heal 1 HP on a crit kill."],
          ["Insanity","I","A","B","C","+6% Crit Chance, -3% Damage."],
          ["Whetstone","II","A","A","B","+4% Life Steal, -3 Knockback."],
          ["Night Goggles","IV","—","A","A","+15% Crit Chance and +50 Range; -3 Max HP, -1 Armor."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Lantern (AT)","IV","—","A","S","+10% Damage, +50 Range, +15 Knockback and a knockback pulse every 3s."],
          ["Bloody Hand","IV","—","A","S","+10% Life Steal and +2% Damage per 1% Life Steal; 1 damage per second to you."],
          ["Silver Bullet","III","—","A","S","+25% damage against bosses and elites."],
          ["Jellyshield","III","B","A","A","Blocks projectiles."],
          ["Leather Vest, Gambling Token","II","C","C","C","Dodge items. You start at -30%, so a few points don't get you anywhere."]
        ] },
      fossilSection("Right Arm's Dodge cost hardly matters when Dodge starts at -30%.",
        {"Right Arm":"A: Max HP, and the Dodge cost is nearly free","Left Arm":"A: +3 Armor, +1 per fossil","Jaw":"A: Life Steal is Crazy's healing","Spine":"B: regen for -5% Damage",
         "Right Leg":"B: extra Range, though normal Range counts half on melee; -4% Attack Speed","Left Leg":"C: -3% Crit Chance cuts into the build","Tail":"C: Harvesting only","Tooth":"C: only to push the count"}),
      petSection("Crazy has -10 Ranged Damage, which weakens Ranged-scaling pets.",
        {"Jellyshield":"A: blocks projectiles","Scapegoat":"A: takes aggro","Doc Moth":"A: doubles your Life Steal","Mosquitor (PD)":"A: the 30% debuff, not its own shots",
         "Lootworm":"A in waves 1–6","Bonk Dog":"B","Catling Gun":"C: -10 Ranged Damage"}),
      { h:"DLC notes", notes: [
          "Abyssal Terrors: Ashes and Lantern both add Range and damage. Pearl (+1% Damage per 10 Luck) is weak here; Crazy has no Luck.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("Crazy", [["Brotato Wiki – Hunting Trophy", WIKI + "Hunting_Trophy"]])
  };

  D["Engineer"] = {
    lead: "Engineer starts with +10 Engineering and a Wrench, and every Engineering change counts 25% more. Structures spawn close together, so the turret cluster is your fort. All Damage changes are halved, which makes %Damage items poor value.",
    sections: [
      { h:"Weapons", p:"Tool weapons build structures. The wiki notes Engineer can also start with a Tier II Hammer, but its Blunt and Heavy classes steer the shop away from Engineering weapons.", head:WPN_HEAD,
        rows: [
          ["S","Wrench","Tool","I–IV","Spawns a Turret / Incendiary / Laser / Explosive Turret by tier. Its own swing is 12–24 damage (100% Melee), 1.70–1.49s; the turret is the point."],
          ["A","Screwdriver","Tool","I–IV","8–20 damage (50% Melee, 50–80% Engineering); drops a landmine every 12/9/6/3s for 10 (100% Engineering)."],
          ["A","Chain Gun","Legendary, Gun","IV only","2x3 damage (100% Ranged and 100% Engineering) every 0.073s."],
          ["A","Particle Accelerator","Heavy, Elemental","III–IV","60/120 damage (100% Elemental and 100% Engineering), burning, pierces, 800 range."],
          ["B","Plank","Explosive, Elemental","I–IV","10–30 damage scaling 60–90% with Melee, Elemental and Engineering; 25–50% chance to explode."],
          ["B","Hammer","Blunt, Heavy","II–IV","40/75/120 damage (150–200% Melee). Strong start, but changes which weapons the shop offers."]
        ],
        notes: [ "Wrench turrets upgrade with the Wrench's tier, so combine Wrenches rather than buying a seventh weapon." ] },
      { h:"Item ratings by wave", p:"Every structure and every Engineering item. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Turret","I","S","A","B","Structure: shoots for 10 (+80%)."],
          ["Landmines","I","A","B","C","A landmine every 12s for 10 (+100%)."],
          ["Incendiary Turret","II","S","A","B","Structure: flames for 8x5 (+33%)."],
          ["Pocket Factory","II","A","A","B","+2 Engineering; every tree you kill spawns a turret."],
          ["Laser Turret","III","A","S","A","Structure: piercing shots for 20 (+125%)."],
          ["Explosive Turret","IV","—","A","S","Structure: explosive shots for 25 (+150%) in an area."],
          ["Medical Turret","II","A","A","B","Heals you for 3 (+5%)."],
          ["Tyler","II","A","A","B","Fires 10 piercing lightning bolts for 12 (+90%+90%)."],
          ["Improved Tools","III","A","S","A","+10% Attack Speed, and structures attack faster."],
          ["Toolbox","III","A","A","A","+6 Engineering (7.5 with Engineer's bonus), -8% Attack Speed."],
          ["Nail","III","A","A","B","+5 Engineering; weapon damage also scales with 20% Engineering."],
          ["Robot Arm","IV","—","S","A","+3 Engineering and +3 Melee Damage each wave, -1 Max HP each wave. Engineer's win reward."],
          ["Diploma","IV","—","A","S","+10 Engineering, +50% XP Gain, -3 Max HP."],
          ["Wandering Bot","III","—","A","A","A bot that slows nearby enemies."],
          ["Lighthouse (AT)","III","A","B","C","+20 Engineering, but -1 for every structure you have. Best bought before your cluster grows."],
          ["Glass Cannon, Spider","III / IV","C","C","C","%Damage items; Engineer halves every Damage change."]
        ] },
      fossilSection("Fossils don't touch Engineering, so take the defensive ones that keep you alive next to the turrets.",
        {"Right Arm":"A: Max HP","Left Arm":"A: +3 Armor, +1 per fossil","Left Leg":"A: Speed for kiting around the cluster","Spine":"B: regen; the -5% Damage is halved anyway",
         "Right Leg":"C: Wrench swings don't need Range","Jaw":"C: Life Steal only works off your own hits","Tail":"C: Harvesting only","Tooth":"C: only to push the count"}),
      petSection("Bot-O-Mine is a structure, so it fits straight into Engineer's plan.",
        {"Bot-O-Mine":"S: a structure that shoots and drops mines","Scapegoat":"A: holds enemies near your turrets","Jellyshield":"A: blocks projectiles","Lootworm":"A in waves 1–6",
         "Mosquitor (PD)":"B: its +30% damage taken helps the turrets","Doc Moth":"B with Medical Turret","Catling Gun":"C: Ranged Damage scaling"}),
      { h:"DLC notes", notes: [
          "Abyssal Terrors: Lighthouse is front-loaded Engineering that shrinks as you build.",
          "Primal Dread: Plastic Boots (Tier III) stops oil and acid puddles from affecting you.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("Engineer", [["Brotato Wiki – Wrench", WIKI + "Wrench"], ["Brotato Wiki – Structures", WIKI + "Structure"]])
  };

  D["Demon"] = {
    lead: "Demon pays for items with Max HP. Shop prices convert at 20 materials to 1 Max HP, rounded up, and at the end of each wave half your materials become Max HP at 13 materials to 1. Every purchase lowers the health you start the next wave with.",
    sections: [
      { h:"Shopping, from the wiki", notes: [
          "An item costing 1–20 materials costs 1 HP, 21–40 costs 2 HP, and so on. Coupon still works: if it pushes a price under a 20-material step, the HP cost drops by 1.",
          "Early on, items that give more Max HP than they cost are free money: Cake (+3 Max HP for 1 HP), Broken Mouth (+5 for 2) and Acid (+8 for 4).",
          "Your starting 10 HP can be spent too. The wiki notes experienced players run the first 6–9 waves on 0–1 HP.",
          "Buying out the shop gives a free reroll, so buying a cheap weapon and recycling it can be worth it.",
          "Padding and Stone Skin add temporary HP that can't be spent. Handcuffs takes its cost from your HP first, then caps Max HP at the lower value."
        ] },
      { h:"Weapons", p:"Max HP is both Demon's currency and the best stat to scale damage from.", head:WPN_HEAD,
        rows: [
          ["S","Excalibur","Legendary, Blade","IV only","200 damage scaling with 200% Melee and 200% Max HP, 0.66s; -2 Armor per weapon you hold."],
          ["A","Ghost Scepter","Ethereal","I–IV","10–30 damage (100% Ranged), 300–450 range. +1 Max HP for every 20/18/16/12 kills in a wave with it: free currency."],
          ["A","Potato Thrower","Support","II–IV","3/5/10 damage (40% Ranged, 20% Max HP) every 0.45–0.28s, 500 range."],
          ["A","Spoon","Blunt","I–IV","10–25 damage (50% Melee, 15–25% Max HP), 1.06–0.86s."],
          ["A","Chopper","Blade","I–IV","6–30 damage (50% Melee, 15–30% Max HP), 0.99–0.89s."],
          ["B","Wand","Elemental","I–IV","Cheap starter: burning for 3x3 up to 12x9 (100% Elemental). At 10 materials it costs 1 HP."],
          ["B","Rock","Primitive, Blunt","I–IV","20–70 damage (100% Melee). Tier III adds +1 Armor and +2 Max HP; Tier IV +2 Armor and +2 Max HP."]
        ] },
      { h:"Item ratings by wave", p:"Early: items that give back more Max HP than they cost. Late: Tier IV items you can finally afford. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Cake","I","S","C","C","+3 Max HP for a 1 HP price; -1% Damage."],
          ["Broken Mouth","I","S","B","C","+5 Max HP for 2 HP; -1 HP Regen."],
          ["Acid","II","A","B","C","+8 Max HP for 4 HP; -2% Dodge."],
          ["Coupon","I","S","A","B","-5% prices; can drop an item below the next HP step."],
          ["Bag","I","S","B","C","+15 materials per crate, which turn into Max HP at wave end."],
          ["Wheelbarrow","II","A","A","B","+16 Harvesting, -1 Armor."],
          ["Piggy Bank","II","A","A","C","+20% of your materials at the start of each wave; stops at wave 20."],
          ["Panda","IV","—","A","A","+12 Max HP, +25 Luck, -5% Damage."],
          ["Octopus","IV","—","A","A","+12 Max HP, +5 HP Regen, +3% Life Steal, -8% Crit."],
          ["Potato","IV","—","A","A","+3 Max HP and small bonuses to nearly every stat."],
          ["Silver Bullet","III","—","A","S","+25% damage against bosses and elites."],
          ["Jellyshield","III","B","A","A","Blocks projectiles, so less of your currency gets shot off."],
          ["Padding, Stone Skin","II / III","B","B","C","Their bonus HP is temporary and can't be spent in the shop."],
          ["Handcuffs","III","C","C","C","+8 to each damage stat, but caps Max HP, which is Demon's money."]
        ] },
      fossilSection("Max HP fossils are doubly good on Demon: more health and more money.",
        {"Right Arm":"A: Max HP is your currency","Left Arm":"A: +3 Armor, +1 per fossil","Tail":"B: Harvesting turns into Max HP at wave end, minus 3 Max HP up front",
         "Spine":"B: regen for -5% Damage","Left Leg":"B: Speed","Right Leg":"B: Range for ranged builds","Jaw":"B: Life Steal","Tooth":"C: -2 Max HP"}),
      petSection("Lootworm doubles materials, which Demon turns into Max HP.",
        {"Lootworm":"S in waves 1–6: doubled materials are doubled HP","Hungry Hungry Dinosaur (PD)":"A: scales with Max HP","Jellyshield":"A: blocks projectiles",
         "Scapegoat":"A: takes aggro","Mosquitor (PD)":"B: the damage debuff","Doc Moth":"B","Catling Gun":"B for ranged builds"}),
      { h:"DLC notes", notes: [
          "Abyssal Terrors: Axolotl swaps your highest and lowest positive primary stats. On a Max HP-heavy Demon that can move most of your HP elsewhere; avoid it.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("Demon", [["Brotato Wiki – Ghost Scepter", WIKI + "Ghost_Scepter"], ["Brotato Wiki – Excalibur", WIKI + "Excalibur"]])
  };

  D["Buccaneer"] = {
    lead: "Buccaneer (Abyssal Terrors) makes every material you pick up reset the cooldown of all your weapons, and picked-up materials are worth +100%. In return: -100% Attack Speed, and enemies drop 50% fewer materials. Slow, hard-hitting weapons fire again with every pickup.",
    sections: [
      { h:"Weapons", p:"Long cooldowns and big hits. Attack Speed is dead, so fast weapons lose their only strength. The wiki's starting list doesn't include Blunderbuss or Mace; buy them from the shop.", head:WPN_HEAD,
        rows: [
          ["S","Blunderbuss","Naval, Gun","II–IV","22/45/70 damage (110/135/170% Ranged) on a 5.2s cooldown that already resets on pickup; pierces 2 (-25% per pierce)."],
          ["A","Laser Gun","Gun","I–IV","40–100 damage (400–600% Ranged), 1.98–1.65s, 500 range, pierces 1. A starting option."],
          ["A","Rocket Launcher","Heavy, Explosive","II–IV","30/50/80 damage (100% Ranged), explodes on hit, 500–600 range."],
          ["A","Nuclear Launcher","Heavy, Explosive","III–IV","60/120 damage (100% Ranged and Elemental), 2.12s, explodes, 800 range."],
          ["A","Sniper Gun","Gun, Precise","III–IV","50/80 damage, 2.4s, crits x3–x4, plus 5–8 splinters."],
          ["A","Mace","Heavy, Medieval","II–IV","40/60/100 damage (100% Melee) that also scales with -50/-75/-100% of Attack Speed, so a negative Attack Speed adds damage."],
          ["C","SMG","Gun","I–IV","3–8 damage per shot. With Attack Speed gone, nothing is left."]
        ],
        notes: [ "Walk through drops in the middle of a pack: each pickup is a free volley from every weapon." ] },
      { h:"Item ratings by wave", p:"Damage per hit and pierce. Skip Attack Speed and don't overstack Pickup Range (the guide explains why). S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Sharp Bullet","I","A","A","B","+1 pierce, -5% Damage."],
          ["Baby Elephant","I","A","B","C","25% chance to hit a random enemy on each material pickup."],
          ["Cyberball","II","A","B","C","25% chance on a kill to hit a random enemy."],
          ["Starfish (AT)","III","A","A","B","+20% materials dropped by enemies and +10 Harvesting, which offsets the -50%; +15% enemy damage."],
          ["Explosive Shells","IV","—","A","S","+60% Explosion Damage, +15% Explosion Size, -15% Damage. Launcher builds."],
          ["Ricochet","IV","—","A","A","+1 bounce, -25% Damage. Each reload volley hits more."],
          ["Ashes (AT)","IV","—","A","A","+20% Damage and +100 Range. The +20% Attack Speed is mostly wasted here."],
          ["Silver Bullet","III","—","A","S","+25% damage against bosses and elites."],
          ["Jellyshield","III","B","A","A","Blocks projectiles while you walk through packs."],
          ["Eyepatch (AT)","II","B","B","C","+1 pierce on crits, +3% Crit Chance, -10% Accuracy. Buccaneer's win reward."],
          ["Coffee, Small Magazine","I / II","C","C","C","Attack Speed items do nothing useful at -100%."]
        ] },
      fossilSection("Right Leg's Attack Speed cost is free for Buccaneer.",
        {"Right Leg":"A: +15 Range, +5 per fossil, and the -4% Attack Speed costs nothing","Right Arm":"A: Max HP","Left Arm":"A: +3 Armor, +1 per fossil",
         "Left Leg":"B: Speed to reach drops","Spine":"B: regen for -5% Damage","Jaw":"B: Life Steal on big hits","Tail":"B: Harvesting makes up for halved drops; -3 Max HP","Tooth":"C: only to push the count"}),
      petSection("Lootworm collects materials for you, which may take pickups (and reloads) away from you. That interaction isn't documented.",
        {"Jellyshield":"A: blocks projectiles","Scapegoat":"A: takes aggro","Mosquitor (PD)":"A: +30% damage taken on top of your big hits","Doc Moth":"B",
         "Catling Gun":"B: not affected by your Attack Speed penalty","Lootworm":"B: more materials, but possibly fewer reloads for you; untested"}),
      { h:"DLC notes", notes: [
          "Buccaneer is an Abyssal Terrors character. Blunderbuss and Anchor are AT Naval weapons that suit long cooldowns.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("Buccaneer", [["Brotato Wiki – Blunderbuss", WIKI + "Blunderbuss"], ["Brotato Wiki – Mace", WIKI + "Mace"], ["Brotato Wiki – Abyssal Terrors DLC", WIKI + "Abyssal_Terrors_DLC"]])
  };

  D["Artificer"] = {
    lead: "Artificer gets +175% Explosion Damage and +4% Explosion Size for every point of Elemental Damage. Tool weapons get +100% Damage, but all other Damage is -100%, and Armor changes are halved. The wiki notes turrets deal normal damage, and Tier IV Wrench turrets and landmines also get the explosion bonuses.",
    sections: [
      { h:"Weapons", p:"Explosive weapons and Tools. Anything else hits for almost nothing.", head:WPN_HEAD,
        rows: [
          ["S","Rocket Launcher","Heavy, Explosive","II–IV","30/50/80 damage (100% Ranged), every shot explodes, 1.78–1.03s, 500–600 range."],
          ["S","Nuclear Launcher","Heavy, Explosive","III–IV","60/120 damage (100% Ranged and Elemental), explodes, 800 range. The capstone."],
          ["A","Grenade Launcher","Heavy, Explosive","II–IV","12/18/30 damage, explodes and bounces once; every 2nd–4th shot has a 2.7–3.7s cooldown."],
          ["A","Shredder","Gun, Explosive","I–IV","5–25 damage, 50–100% chance to explode, pierces 3 at full damage. A starting option."],
          ["A","Plasma Sledge","Elemental, Explosive","III–IV","80/120 damage (150/200% Melee and Elemental), 25/50% chance to explode."],
          ["A","Fireball","Explosive, Elemental","II–IV","5/10/20 damage (25–75% Elemental), explodes on hit and burns."],
          ["B","Wrench","Tool","I–IV","Spawns turrets; Tier IV spawns an Explosive Turret that gets your explosion bonuses. A starting option."],
          ["B","Screwdriver","Tool","I–IV","Landmine every 12/9/6/3s; landmines get the explosion bonuses."],
          ["B","Plank","Explosive, Elemental","I–IV","25–50% chance to explode on hit. A starting option."]
        ] },
      { h:"Item ratings by wave", p:"Explosion Damage, then Elemental Damage for size. Defend with Max HP and Dodge, since Armor is halved. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Dynamite","I","S","A","B","+15% Explosion Damage."],
          ["Plastic Explosive","III","A","S","A","+25% Explosion Size."],
          ["Explosive Shells","IV","—","S","S","+60% Explosion Damage, +15% Explosion Size, -15% Damage. Artificer's win reward."],
          ["Explosive Turret","IV","—","A","S","Structure firing explosive shots for 25 (+150%)."],
          ["Rip and Tear","III","A","A","A","Enemies have a 20% chance to explode for 10 (+50%) on death."],
          ["Landmines","I","A","B","C","A landmine every 12s."],
          ["Wolf Helmet","IV","—","S","S","+10 Elemental Damage (+40% Explosion Size) and +20 Luck; -5 Engineering."],
          ["Fuel Tank","II","A","A","B","+4 Elemental Damage (+16% size). Its -1 Melee and Ranged barely matter."],
          ["Candle","III","A","A","B","+4 Elemental Damage, +1 HP Regen, -10% enemies, -5% Damage."],
          ["Energy Bracelet","II","A","B","B","+2 Elemental Damage, +4% Crit Chance, -2 Ranged Damage."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Silver Bullet","III","—","A","S","+25% damage against bosses and elites."],
          ["Jellyshield","III","B","A","A","Blocks projectiles."],
          ["Metal Plate, Helmet","II / I","C","C","C","Armor items: Artificer halves Armor gains."]
        ] },
      fossilSection("Max HP and Speed fossils suit Artificer's Dodge-and-HP defense; Armor is halved.",
        {"Right Arm":"A: Max HP","Left Leg":"B: Speed for kiting","Right Leg":"B: Range for launchers; -4% Attack Speed","Spine":"B: regen",
         "Left Arm":"C: Armor counts half","Jaw":"C: Life Steal off weak non-explosive hits","Tail":"C: Harvesting only","Tooth":"C: only to push the count"}),
      petSection("Pets aren't explosions, so most of them don't get Artificer's bonus.",
        {"Jellyshield":"A: blocks projectiles","Scapegoat":"A: takes aggro","Mosquitor (PD)":"A: +30% damage taken from your explosions","Lootworm":"A in waves 1–6",
         "Bonk Dog":"B: its dash is explosive damage; whether it gets your bonus isn't documented","Blazemander":"B: burning with Elemental Damage","Doc Moth":"B"}),
      { h:"DLC notes", notes: [
          "Abyssal Terrors: Kraken's Eye gives a 50% chance to explode for 10 (+500%) when you're hit, plus +15 Max HP, but also +15 Curse. Strong on Artificer if you can live with the Curse.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("Artificer", [["Brotato Wiki – Explosive Shells", WIKI + "Explosive_Shells"], ["Brotato Wiki – Rocket Launcher", WIKI + "Rocket_Launcher"]])
  };

  D["Diver"] = {
    lead: "Diver (Abyssal Terrors) starts with a Harpoon Gun, and more Harpoons cost nothing. Enemies hit by Ranged Damage take 300% more damage for 3 seconds, and Precise weapons get +200% Crit Damage, with Crit Chance changes boosted 25%. Each 2 Melee Damage also gives +1 HP Regen. The costs: -100 Ranged Damage and +250% enemy health.",
    sections: [
      { h:"Weapons", p:"The Harpoon marks targets; Precise melee crits do the killing.", head:WPN_HEAD,
        rows: [
          ["S","Harpoon Gun","Naval, Gun","II–IV","5/10/20 damage (100% Ranged and 100% Melee), 0.82–0.65s, 800–900 range; slows. Free for Diver. Keep one or two to mark targets."],
          ["S","Knife","Precise","I–IV","9–25 damage (80% Melee), crits x2.5–x4 at 20–50%, plus Diver's +200% Crit Damage."],
          ["A","Thief Dagger","Precise","I–IV","6–30 damage, 20–40% crit; crit kills can drop materials."],
          ["A","Claw","Unarmed, Precise","I–IV","5–25 damage scaling with Melee and Attack Speed, 0.78–0.61s."],
          ["A","Shuriken","Precise","I–IV","7–15 damage scaling with Melee, crits bounce 1–4 times. Whether its hits trigger the Ranged mark isn't documented."],
          ["B","Scissors","Medical, Precise","I–IV","5–20 damage with 40–60% lifesteal."],
          ["B","Sharp Tooth","Primitive, Precise","I–IV","Scales with Melee and Life Steal."]
        ],
        notes: [ "+250% enemy health means fights take longer. The +300% mark is what brings them back in line, so keep a Harpoon firing." ] },
      { h:"Item ratings by wave", p:"Melee Damage (it's also regen) and Crit Chance. Ranged Damage items can't dig you out of -100. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Hunting Trophy","III","S","A","B","33% chance to gain 1 material on a crit kill."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Coffee","I","A","A","B","+10% Attack Speed, -2% Damage."],
          ["Tentacle","II","A","A","B","+3% Crit Chance (boosted 25%), 20% chance to heal on a crit kill."],
          ["Insanity","I","A","B","C","+6% Crit Chance, -3% Damage."],
          ["Sunglasses","II","A","A","B","+10% Crit Chance, -1 Armor."],
          ["Whetstone","II","A","A","B","+4% Life Steal, -3 Knockback."],
          ["Night Goggles","IV","—","A","A","+15% Crit Chance, +50 Range; -3 Max HP, -1 Armor."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Silver Bullet","III","—","S","S","+25% against bosses and elites, who have +250% health too."],
          ["Bloody Hand","IV","—","A","S","+10% Life Steal and +2% Damage per 1% Life Steal."],
          ["Jellyshield","III","B","A","A","Blocks projectiles."],
          ["Scope, Small Magazine, Lens","II / II / I","C","C","C","Ranged Damage items. At -100 they change nothing."]
        ] },
      fossilSection("Left Leg's -3% Crit Chance works against Diver's main stat.",
        {"Right Arm":"A: Max HP","Left Arm":"A: +3 Armor, +1 per fossil","Jaw":"A: Life Steal on big crits","Spine":"B: stacks with your Melee-based regen",
         "Right Leg":"C: Harpoons already reach 800+","Left Leg":"C: -3% Crit Chance","Tail":"C: Harvesting only","Tooth":"C: only to push the count"}),
      petSection("Ranged-scaling pets hit for almost nothing at -100 Ranged Damage.",
        {"Jellyshield":"A: blocks projectiles","Scapegoat":"A: takes aggro","Doc Moth":"A: doubles the regen your Melee Damage gives","Lootworm":"A in waves 1–6",
         "Mosquitor (PD)":"B: its own shots scale with Ranged Damage, but the 30% debuff still applies","Bonk Dog":"B","Catling Gun":"C: -100 Ranged Damage"}),
      { h:"DLC notes", notes: [
          "Diver is an Abyssal Terrors character; its win reward is Starfish (+20% enemy drops, +10 Harvesting, +15% enemy damage).",
          "Pearl (AT) gives +1% Damage per 10 Luck; Diver has no Luck to feed it.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("Diver", [["Brotato Wiki – Harpoon Gun", WIKI + "Harpoon_Gun"], ["Brotato Wiki – Abyssal Terrors DLC", WIKI + "Abyssal_Terrors_DLC"]])
  };

  D["Explorer"] = {
    lead: "Explorer plays on a 33% bigger map with more trees, and starts with a Lumberjack Shirt, so trees die in one hit. +10% Speed and +50% pickup range help cover it. The costs: +25% enemies at +10% speed, enemies drop 50% fewer materials, and -40% Damage.",
    sections: [
      { h:"Weapons", p:"Wave clear first. Lumberjack Shirt already one-shots trees, so you don't need a tree weapon.", head:WPN_HEAD,
        rows: [
          ["S","Slingshot","Primitive","I–IV","10–20 damage (80% Ranged), bounces 1–4 times, 300 range."],
          ["A","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s, 400 range."],
          ["A","Flamethrower","Elemental, Heavy","II–IV","Pierces 99 enemies with burning. Late slots."],
          ["B","Crossbow","Precise, Medieval","I–IV","10–18 damage (50% Ranged, 10% Range), 350 range, pierces on crit. A starting option."],
          ["B","Hiking Pole","Support","I–IV","12–30 damage; +1 Range for every 70/60/50/40 steps. A big map means a lot of steps. A starting option."],
          ["B","Hatchet","Primitive","I–IV","7–45 damage (100% Melee, 20% Attack Speed), 0.68–0.63s. Take it for the swing, not for trees."]
        ] },
      { h:"Item ratings by wave", p:"Crates are your income because enemy drops are halved. Luck makes crates and trees give more. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bag","I","S","A","B","+15 materials per crate. Explorer opens a lot of crates."],
          ["Tree","I","S","A","B","More trees spawn."],
          ["Treasure Map (AT)","II","A","A","B","+20% chance of an extra item in a crate."],
          ["Garden","II","A","A","B","A fruit every 15 seconds."],
          ["Lucky Charm","III","A","A","B","+30 Luck; -2 Melee, -1 Ranged Damage."],
          ["Clover","III","A","A","B","+20 Luck, +6% Dodge, -2% Life Steal."],
          ["Wheelbarrow","II","A","A","B","+16 Harvesting, -1 Armor."],
          ["Baby Elephant","I","A","B","C","25% chance to hit a random enemy on each material pickup."],
          ["Cyberball","II","A","B","C","25% chance on a kill to hit a random enemy."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage helps undo the -40%."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Jellyshield","III","B","A","A","Blocks projectiles."],
          ["Gentle Alien, Mouse","I / III","C","C","C","Each adds more enemies on top of Explorer's +25%."]
        ] },
      fossilSection("Speed is worth more on the bigger map.",
        {"Left Leg":"A: Speed on a map 33% bigger","Right Arm":"A: Max HP","Left Arm":"A: +3 Armor, +1 per fossil","Tail":"B: Harvesting makes up for halved drops; -3 Max HP",
         "Spine":"B: regen","Right Leg":"B: Range for Slingshots","Jaw":"B: Life Steal","Tooth":"C: only to push the count"}),
      petSection("Lootworm breaks trees and collects materials, which is Explorer's whole economy.",
        {"Lootworm":"S: breaks trees and doubles materials","Jellyshield":"A: blocks projectiles","Scapegoat":"A: takes aggro from the extra enemies",
         "Mosquitor (PD)":"A: the damage debuff makes up for -40% Damage","Catling Gun":"B for ranged builds","Doc Moth":"B"}),
      { h:"DLC notes", notes: [
          "Abyssal Terrors: Treasure Map and Spyglass (+10 Range, -25% reroll price) both suit a crate economy.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("Explorer", [["Brotato Wiki – Trees", WIKI + "Trees"], ["Brotato Wiki – Compass", WIKI + "Compass"]])
  };

  D["Ranger"] = {
    lead: "Ranger starts with a Pistol and +50 Range, and every Ranged Damage change counts 50% more. Ranger can't equip melee weapons, and Max HP gains are cut by 25%, so defend with Armor, Dodge and Life Steal.",
    sections: [
      { h:"Weapons", p:"Any gun works. The wiki's Ranger notes: Pistols hit hard but struggle with crowds, SMGs are fast, Shredders clear hordes, and Crossbows scale with Range and crits rather than Ranged Damage.", head:WPN_HEAD,
        rows: [
          ["S","SMG","Gun","I–IV","3–8 damage (50–80% Ranged) every 0.17–0.15s, 400 range. Ranged Damage scaling on every bullet."],
          ["S","Chain Gun","Legendary, Gun","IV only","2x3 damage (100% Ranged and Engineering) every 0.073s. Buy on sight."],
          ["S","Gatling Laser","Legendary, Heavy","IV only","10 damage (100% Ranged) every 0.073s, pierces 3. Buy on sight."],
          ["A","Pistol","Gun","I–IV","12/20/30/50 damage (100% Ranged), 400 range, pierces 1. The starting weapon."],
          ["A","Minigun","Heavy, Gun","III–IV","2/5 damage (50/75% Ranged) every 0.09s, pierces 1/2."],
          ["A","Double Barrel Shotgun","Gun","I–IV","4 pellets of 3/6/9 (6 of 9 at Tier IV), each piercing 2–3."],
          ["B","Laser Gun","Gun","I–IV","40–100 damage at 400–600% Ranged, slow 1.98–1.65s."],
          ["B","Crossbow","Precise, Medieval","I–IV","Only 50% Ranged scaling; it gets more from Range and crits."]
        ],
        notes: [ "Primal Dread: Combat Shotgun (Tier II–IV, 7x6 to 10x8 pellets at 90–110% Ranged, 50–106 DPS) and Machine Gun (16–68 DPS, -3% Speed each), per the fandom wiki." ] },
      { h:"Item ratings by wave", p:"Ranged Damage counts 1.5x, so flat Ranged Damage items are worth more than usual. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Sharp Bullet","I","A","A","B","+1 pierce, -5% Damage."],
          ["Small Magazine","II","A","A","B","+2 Ranged Damage (3 for Ranger), +10% Attack Speed, -6% Damage."],
          ["Coffee","I","A","A","B","+10% Attack Speed, -2% Damage."],
          ["Scope","II","A","B","C","+2 Ranged Damage (3 for Ranger), +25 Range, -7% Attack Speed."],
          ["Heavy Bullets","IV","—","S","S","+5 Ranged Damage (7.5 for Ranger), +10% Damage, +10 Range; -5% Attack Speed and Crit."],
          ["Night Goggles","IV","—","A","A","+15% Crit Chance, +50 Range; -3 Max HP, -1 Armor. Ranger's win reward."],
          ["Ricochet","IV","—","A","A","+1 bounce, -25% Damage."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Seashell (AT)","IV","—","A","S","Every 5th projectile of each ranged weapon fires +3 more, -10% Damage."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Jellyshield","III","B","A","A","Blocks projectiles."],
          ["Big Arms, Riposte","IV / II","C","C","C","Melee items; Ranger can't use melee weapons."]
        ],
        notes: [ "Max HP items still help, just 25% less. Don't make them your only defense." ] },
      fossilSection("Right Leg's Range stacks with Ranger's +50.",
        {"Right Leg":"A: Range for every gun; -4% Attack Speed","Left Arm":"A: +3 Armor, +1 per fossil","Jaw":"A: Life Steal","Right Arm":"B: Max HP is cut 25% for Ranger",
         "Left Leg":"B: Speed for kiting","Spine":"B: regen for -5% Damage","Tail":"C: Harvesting only","Tooth":"C: only to push the count"}),
      petSection("Ranged-scaling pets get Ranger's 1.5x Ranged Damage.",
        {"Catling Gun":"A: scales with Ranged Damage","Mosquitor (PD)":"A: scales with Ranged Damage and adds +30% damage taken","Jellyshield":"A: blocks projectiles",
         "Scapegoat":"A: takes aggro","Lootworm":"A in waves 1–6","Doc Moth":"B with Life Steal","Bonk Dog":"C: melee-scaling pet"}),
      { h:"DLC notes", notes: [
          "Abyssal Terrors: Seashell and Ashes are Ranger's best DLC items.",
          "Primal Dread: Combat Shotgun and Mosquitor appear in the site's builds; both are early-rated.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("Ranger", [["Brotato Wiki – Night Goggles", WIKI + "Night_Goggles"], ["Brotato Wiki – SMG", WIKI + "SMG"]])
  };

  D["Knight"] = {
    lead: "Knight gets +2 Melee Damage for every point of Armor and starts with +3 Armor. Knight can only equip melee weapons of Tier II or higher. Attack Speed changes are halved, and Harvesting changes are cut by 80%.",
    sections: [
      { h:"Weapons", p:"Big hits and wide swings, since Attack Speed is halved. The wiki advises against starting with Torch (mostly Elemental) or Spiky Shield, which scales with Armor directly instead of using Knight's Melee Damage.", head:WPN_HEAD,
        rows: [
          ["S","Plasma Sledge","Elemental, Explosive","III–IV","80/120 damage (150/200% Melee and Elemental), 25/50% chance to explode. Knight's win reward."],
          ["S","Hammer","Blunt, Heavy","II–IV","40/75/120 damage (150–200% Melee), 1.67–1.50s, heavy knockback. A starting option."],
          ["A","Sword","Blade, Medieval","II–IV","30/45/65 damage (100% Melee), 1.28–0.98s, thrusts and sweeps."],
          ["A","Anchor","Naval, Heavy","II–IV","45/70/110 damage (100–150% Melee), 1.92–1.81s. A starting option (AT)."],
          ["A","Thunder Sword","Blade, Elemental","III–IV","40/75 damage (125/150% Melee and Elemental), fires 2/4 slowing projectiles."],
          ["B","Jousting Lance","Medieval","I–IV","20–50 damage (50% Melee, 30–50% Speed), 250 range; loses damage while you stand still."],
          ["B","Spiky Shield","Medieval, Blunt","I–IV","Scales with 100–200% Armor. Fine later, but the wiki says don't start with it."]
        ] },
      { h:"Item ratings by wave", p:"Armor everywhere: every point is +2 Melee Damage. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Helmet","I","S","A","B","+1 Armor (+2 Melee Damage), -2% Speed."],
          ["Leather Vest","II","A","A","B","+2 Armor, +6% Dodge, -3 Max HP."],
          ["Metal Plate","II","A","A","B","+2 Armor, -3% Damage."],
          ["Warrior Helmet","III","A","S","A","+3 Armor, +5 Max HP, -5% Speed."],
          ["Stone Skin","III","A","S","A","+1 Max HP per Armor, -6% Attack Speed (halved for Knight)."],
          ["Exoskeleton","IV","—","S","A","+3 Armor, +5% Crit, +5 Engineering, +5% Speed."],
          ["Sifd's Relic","IV","—","A","A","+3 Armor, and materials fly straight to you."],
          ["Big Arms","IV","—","A","A","+12 Melee Damage, +3 Knockback; -3% Attack Speed and Speed."],
          ["Bag","I","S","B","C","+15 materials per crate. Knight's Harvesting is nearly gone."],
          ["Lantern (AT)","IV","—","A","S","+10% Damage, +50 Range, +15 Knockback."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Ashes (AT)","IV","—","B","A","+20% Damage and Attack Speed, but -1 Armor every wave (-2 Melee Damage each time). Buy late or skip."],
          ["Glass Cannon, Jet Pack","III / IV","C","C","C","Each costs Armor, which is also your damage."],
          ["Coffee, Wheelbarrow","I / II","C","C","C","Attack Speed is halved and Harvesting cut 80%."]
        ] },
      fossilSection("Left Arm is the Knight fossil: each Armor point is also +2 Melee Damage.",
        {"Left Arm":"S: +3 Armor, +1 per fossil, each worth +2 Melee Damage","Right Arm":"A: Max HP","Jaw":"A: Life Steal on big swings","Spine":"B: regen for -5% Damage",
         "Left Leg":"B: Speed","Right Leg":"B: Range, which counts half on melee","Tail":"C: Harvesting is cut 80%","Tooth":"C: only to push the count"}),
      petSection("Melee pets suit Knight; Ranged-scaling pets don't.",
        {"Jellyshield":"A: blocks projectiles","Scapegoat":"A: takes aggro","Bonk Dog":"A: melee pet with an explosive dash","Mosquitor (PD)":"A: the damage debuff",
         "Lootworm":"A in waves 1–6, since Harvesting barely works","Doc Moth":"B with Life Steal","Catling Gun":"C: Ranged scaling"}),
      { h:"DLC notes", notes: [
          "Abyssal Terrors: Anchor is a Tier II+ Naval weapon Knight can start with. Ashes costs Armor every wave, which also costs Knight damage.",
          "Primal Dread launched November 2, 2026, so fossil and pet ratings are early." ] }
    ],
    sources: src("Knight", [["Brotato Wiki – Plasma Sledge", WIKI + "Plasma_Sledge"], ["Brotato Wiki – Hammer", WIKI + "Hammer"]])
  };

  // ---- B tier (Nov 17 2026) ----
  var EARLY = "Primal Dread launched November 2, 2026, so fossil and pet ratings are early.";
  var PD_SRC = [["Primal Dread character stats and unlocks","https://www.brotatoprimaldread-wiki.wiki/en/skills/brotato-primal-dread/brotato-primal-dread-character-unlocks"],
    ["Brotato Wiki – Items (effects, rarity)", WIKI + "Items"], ["Brotato Wiki – Weapons", WIKI + "Weapons"],
    ["Primal Dread guide (fossils)","https://dq7reimagined.com/brotato-primal-dread/"], ["Brotato Unpacked – Pet mechanics","https://brotato.unpacked.wiki/topics/pets/"]];
  function defFossils(extra){ var r = {"Right Arm":"B: +1 Max HP, +1 per fossil","Left Arm":"A: +3 Armor, +1 per fossil","Spine":"B: regen for -5% Damage","Left Leg":"B: Speed",
    "Right Leg":"B: Range; -4% Attack Speed","Jaw":"B: Life Steal","Tail":"C: Harvesting only; -3 Max HP","Tooth":"C: only to push the count"};
    for(var k in extra) r[k] = extra[k]; return r; }
  function defPets(extra){ var r = {"Jellyshield":"A: blocks projectiles","Scapegoat":"A: takes aggro","Mosquitor (PD)":"A: the 30% damage-taken debuff","Lootworm":"A in waves 1–6","Doc Moth":"B with regen or Life Steal"};
    for(var k in extra) r[k] = extra[k]; return r; }

  D["Masochist"] = {
    lead: "Masochist starts at -100% Damage but gains +5% Damage every time it takes damage, until the wave ends. It has +10 Max HP, +20 HP Regen and +8 Armor to soak the hits. The wiki works it out: 20 hits brings you back to zero, and every hit after that is pure bonus.",
    sections: [
      { h:"Weapons", p:"Anything works once the stacks build; turrets and mines ignore the Damage stat entirely, so they don't benefit.", head:WPN_HEAD,
        rows: [
          ["S","Spiky Shield","Medieval, Blunt","I–IV","10–30 damage scaling with 100–200% Armor, 1.16–1.01s. Masochist starts with 8 Armor. Its win reward."],
          ["A","Scissors","Medical, Precise","I–IV","5–20 damage, 40–60% lifesteal. Heals the hits you take on purpose."],
          ["A","Brick","Blunt","I–IV","30–120 damage (50–100% Melee and Engineering), 1.39s. Big hits once your Damage is positive."],
          ["B","Double Barrel Shotgun","Gun","I–IV","4–6 pellets that pierce. Ranged option."],
          ["C","Turrets and landmines","—","—","The wiki notes they don't use the Damage stat, so they skip both the -100% and the stacks."]
        ] },
      { h:"Item ratings by wave", p:"Small, frequent hits stack fastest. Armor and regen let you take them. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Blood Donation","III","S","S","A","+40 Harvesting and 1 damage per second. The wiki: that's +5% Damage every second, offset by your 20 regen."],
          ["Bloody Hand","IV","—","S","S","Same 1 damage per second, plus +10% Life Steal and +2% Damage per 1% Life Steal."],
          ["Helmet","I","S","A","B","+1 Armor, -2% Speed."],
          ["Stone Skin","III","A","S","A","+1 Max HP per Armor."],
          ["Metal Plate","II","A","A","B","+2 Armor, -3% Damage."],
          ["Warrior Helmet","III","A","A","A","+3 Armor, +5 Max HP, -5% Speed."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Leather Vest, Cape","II / IV","C","C","C","Dodge: a dodged hit gives no stack. The wiki says only add Dodge once Blood Donation is stacking for you."]
        ],
        notes: [ "A second Blood Donation doesn't stack faster; it doubles the damage to 2 per second for another +40 Harvesting." ] },
      fossilSection("Defensive fossils let you take more hits; Right Arm's Dodge cost even helps.",
        defFossils({"Right Arm":"S: Max HP, and losing Dodge means more stacks","Spine":"A: more regen to soak hits","Left Arm":"A: +3 Armor, +1 per fossil"})),
      petSection("Pets that pull enemies away cost you stacks.", defPets({"Scapegoat":"C: takes the hits you want","Jellyshield":"B: blocks projectiles, which are hits you could have stacked on","Doc Moth":"A: doubles your 20 regen"})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Kraken's Eye explodes for 10 (+500%) on 50% of hits you take, but adds +15 Curse.", EARLY ] }
    ],
    sources: src("Masochist", [["Brotato Wiki – Blood Donation", WIKI + "Blood_Donation"]])
  };

  D["Jack"] = {
    lead: "Jack faces 70% fewer enemies, gets +200% materials, and deals +125% damage to bosses and elites. Enemies have +175% health and +35% damage. The wiki notes that on higher Danger levels only elites spawn, never hordes.",
    sections: [
      { h:"Weapons", p:"Single-target damage per hit. Pierce and area are wasted on so few enemies.", head:WPN_HEAD,
        rows: [
          ["S","Revolver","Gun","I–IV","15–40 damage (100–200% Ranged), 0.43–0.38s with a long reload every 6th shot. A starting option."],
          ["S","Sniper Gun","Gun, Precise","III–IV","50/80 damage, crits x3–x4. Hunter's win reward."],
          ["A","Knife","Precise","I–IV","9–25 damage, crits x2.5–x4 at 20–50%."],
          ["A","Laser Gun","Gun","I–IV","40–100 damage at 400–600% Ranged, 1.98–1.65s. A starting option."],
          ["A","Crossbow","Precise, Medieval","I–IV","10–18 damage, 30–45% crit, 350 range. A starting option."],
          ["C","Slingshot, Shredder","—","—","Bounces and explosions need crowds Jack never sees."]
        ] },
      { h:"Item ratings by wave", p:"Every enemy is a tank. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Giant Belt","IV","—","S","S","Crits deal 10% of an enemy's current health (1% on bosses and elites). Jack's win reward."],
          ["Silver Bullet","III","A","S","S","+25% against bosses and elites, stacking with Jack's +125%."],
          ["Bag","I","S","B","C","+15 materials per crate (Jack triples materials)."],
          ["Coffee","I","A","A","B","+10% Attack Speed, -2% Damage."],
          ["Sunglasses","II","A","A","B","+10% Crit Chance, -1 Armor."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Warrior Helmet","III","A","A","A","+3 Armor, +5 Max HP: enemies hit 35% harder."],
          ["Ricochet, Sharp Bullet, Plastic Explosive","IV / I / III","C","C","C","Pierce, bounce and explosion size. The guide's Avoid list."]
        ] },
      fossilSection("Enemies hit 35% harder, so defense fossils matter.", defFossils({"Right Leg":"B: Range to shoot before tanks reach you"})),
      petSection("Pets chip at single targets for you.", defPets({"Mosquitor (PD)":"S: +30% damage taken on +175% health enemies","Catling Gun":"B"})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Ashes is the best general pick. Black Flag adds enemies, which Jack can actually use for income.", EARLY ] }
    ],
    sources: src("Jack", [["Brotato Wiki – Giant Belt", WIKI + "Giant_Belt"]])
  };

  D["Lucky"] = {
    lead: "Lucky has +100 Luck, every Luck change counts 25% more, and each material picked up has a 75% chance to deal 1 (+15% Luck) damage to a random enemy. The costs: -60% Attack Speed and -50% XP Gain.",
    sections: [
      { h:"Weapons", p:"Flute and Lute scale with Luck, and the wiki lists both as starting options.", head:WPN_HEAD,
        rows: [
          ["S","Flute","Musical","I–IV","6–15 damage (50% Ranged, 10–25% Luck), 1.03–0.78s, 300–375 range. Hits on enemies below 60–75% health can charm them."],
          ["A","Lute","Musical, Support","I–IV","4–16 damage (50% Melee, 10–25% Luck). Enemies hit take 10% more damage for 3s."],
          ["A","Slingshot","Primitive","I–IV","10–20 damage, bounces 1–4 times."],
          ["B","Pruner","Support","I–IV","Spawns a garden that makes fruit every 15/14/12/10 seconds."]
        ] },
      { h:"Item ratings by wave", p:"Luck everywhere: shops, crates, the pickup zap and your weapons. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Lucky Charm","III","S","S","A","+30 Luck (37.5 for Lucky); -2 Melee, -1 Ranged. Lucky's win reward."],
          ["Clover","III","A","A","B","+20 Luck, +6% Dodge."],
          ["Shady Potion","II","A","A","B","+20 Luck, -2 HP Regen."],
          ["Pearl (AT)","II","A","S","A","+1% Damage per 10 permanent Luck. At 100+ Luck that's +10% or more."],
          ["Baby Elephant","I","A","A","B","Another chance to zap on pickup."],
          ["Cyberball","II","A","A","B","25% chance on a kill to hit a random enemy."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Tree","I","A","B","C","More trees, more drops to pick up."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Coffee, Small Magazine","I / II","C","C","C","Buying back Attack Speed is what the guide says not to do."]
        ] },
      fossilSection("No fossil gives Luck; take the defensive ones.", defFossils({})),
      petSection("Lootworm doubles materials, and every pickup can zap.", defPets({"Lootworm":"S in waves 1–6: more materials, though whether its pickups trigger your zap isn't documented"})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Pearl turns Lucky's Luck into damage.", EARLY ] }
    ],
    sources: src("Lucky", [["Brotato Wiki – Flute", WIKI + "Flute"], ["Brotato Wiki – Lute", WIKI + "Lute"]])
  };

  D["Mutant"] = {
    lead: "Mutant needs 66% less XP to level, so level-up stats carry the run. Items cost 50% more; weapons don't. The wiki notes the 1.1 change made XP Gain items better for Mutant than before.",
    sections: [
      { h:"Weapons", p:"Weapons aren't marked up, so upgrade them freely.", head:WPN_HEAD,
        rows: [
          ["A","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s, 400 range."],
          ["A","Double Barrel Shotgun","Gun","I–IV","4–6 piercing pellets."],
          ["A","Quarterstaff","Primitive, Medieval","I–IV","10–30 damage plus +2/5/9/15% XP Gain. The wiki calls it a good Mutant weapon."],
          ["B","Revolver","Gun","I–IV","15–40 damage, fast with a reload every 6th shot."]
        ] },
      { h:"Item ratings by wave", p:"Buy effects a level-up can't give. Plain stat items cost 50% more for what a level gives free. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bean Teacher","III","S","A","B","+50% XP Gain, -2% Life Steal."],
          ["Diploma","IV","—","S","A","+50% XP Gain, +10 Engineering, -3 Max HP."],
          ["Scar","I","A","B","C","+20% XP Gain, -8 Range."],
          ["Octopus","IV","—","A","A","+12 Max HP, +5 HP Regen, +3% Life Steal. Mutant's win reward."],
          ["Ricochet","IV","—","A","A","+1 bounce, -25% Damage: an effect, not a stat."],
          ["Cyberball","II","A","A","B","A kill effect, not a stat."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Helmet, Coffee","I","C","C","C","Plain stats at +50% price; level-ups give these."]
        ] },
      fossilSection("Fossils are plain stats at +50% price; only take the strongest.", defFossils({"Left Arm":"B: Armor you could get from a level-up","Right Arm":"B: Max HP you could get from a level-up"})),
      petSection("Pets are effects, not stats, so they're fair buys at the markup.", defPets({})),
      { h:"DLC notes", notes: [ "Primal Dread mutations are a different system from Mutant's level-ups.", EARLY ] }
    ],
    sources: src("Mutant", [["Brotato Wiki – Quarterstaff", WIKI + "Quarterstaff"]])
  };

  D["Soldier"] = {
    lead: "Soldier gets +50% Damage and +50% Attack Speed while standing still, but can't attack while moving. +10% Speed, +200% pickup range and +15 Knockback help you stay planted.",
    sections: [
      { h:"Weapons", p:"Fast, long-range guns that make each stop count.", head:WPN_HEAD,
        rows: [
          ["S","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s, 400 range. A starting option."],
          ["S","Minigun","Heavy, Gun","III–IV","2/5 damage every 0.09s, pierces."],
          ["A","Nuclear Launcher","Heavy, Explosive","III–IV","60/120 damage, explodes, 800 range. Soldier's win reward."],
          ["A","Rocket Launcher","Heavy, Explosive","II–IV","30–80 damage, explodes."],
          ["S","Chain Gun","Legendary, Gun","IV only","2x3 damage every 0.073s."]
        ] },
      { h:"Item ratings by wave", p:"Stand-still items are made for Soldier. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Statue","III","A","S","S","+40% Attack Speed while standing still, -10% Speed."],
          ["Coral (AT)","II","A","A","B","+10 HP Regen while standing still, -10 Range."],
          ["Barricade","III","A","A","A","+8 Armor while standing still."],
          ["Chameleon","III","A","A","B","+20% Dodge while standing still."],
          ["Sharp Bullet","I","A","A","B","+1 pierce."],
          ["Ricochet","IV","—","A","A","+1 bounce, -25% Damage."],
          ["Explosive Shells","IV","—","A","S","For launcher builds."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."]
        ] },
      fossilSection("Speed fossils help you reposition between stops.", defFossils({"Left Leg":"A: Speed to reach the next spot","Right Leg":"A: Range to shoot from further away"})),
      petSection("Pets keep fighting while you move.", defPets({"Catling Gun":"A: faster while you stay close"})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Coral is a Soldier item; standing still is the whole plan.", EARLY ] }
    ],
    sources: src("Soldier", [["Brotato Wiki – Statue", WIKI + "Statue"]])
  };

  D["Cryptid"] = {
    lead: "Cryptid spawns 6 more trees. Each living tree pays 12 materials and XP at the end of the wave and gives +3 HP Regen while alive. Dodge caps at 70%, and every dodge adds +3 Attack Speed for the wave. The costs: -100% Life Steal, -100 Range, and enemies drop 50% fewer materials.",
    sections: [
      { h:"Weapons", p:"Short precise melee that won't hit your trees from across the map.", head:WPN_HEAD,
        rows: [
          ["S","Claw","Unarmed, Precise","I–IV","5–25 damage scaling with Melee and Attack Speed. Dodge-stacked Attack Speed feeds it. Cryptid's win reward."],
          ["A","Knife","Precise","I–IV","9–25 damage, crits x2.5–x4."],
          ["A","Fist","Unarmed","I–IV","8–64 damage, 150 range."],
          ["B","Thief Dagger","Precise","I–IV","Crit kills can drop materials, which offsets halved drops."],
          ["C","Explosive weapons","—","—","Explosions kill trees."]
        ] },
      { h:"Item ratings by wave", p:"Dodge toward 70% and more trees. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Tree","I","S","S","A","More trees spawn: more income, XP and regen."],
          ["Leather Vest","II","A","A","B","+6% Dodge, +2 Armor."],
          ["Blindfold","II","A","A","B","+5% Dodge, +5% Crit; its -15 Range barely matters at -100."],
          ["Adrenaline","III","A","A","B","+5% Dodge; 50% chance to heal 5 HP on a dodge."],
          ["Retromation's Hoodie","IV","—","S","S","+2% Attack Speed per 1% Dodge."],
          ["Cape","IV","—","A","A","+20% Dodge. Its Life Steal does nothing for Cryptid."],
          ["Ghost Outfit","III","—","B","B","+10% Dodge and a 70% cap, which Cryptid already has; -3 Armor."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Lumberjack Shirt, Bloody Hand","I / IV","C","C","C","One kills trees in a hit; the other's Life Steal is cut 100%."]
        ] },
      fossilSection("Right Arm costs Dodge, Cryptid's main defense.", defFossils({"Right Arm":"C: costs Dodge","Jaw":"C: Life Steal is -100%","Right Leg":"C: Range is -100 anyway"})),
      petSection("Lootworm breaks trees, which costs you their pay-out.", defPets({"Lootworm":"C: it breaks trees","Doc Moth":"A: doubles tree regen"})),
      { h:"DLC notes", notes: [ "Abyssal Terrors and Primal Dread maps add hazards; Plastic Boots (PD) stops oil and acid puddles.", EARLY ] }
    ],
    sources: src("Cryptid", [["Brotato Wiki – Trees", WIKI + "Trees"]])
  };

  D["Lich"] = {
    lead: "Lich has +10 HP Regen and +10% Life Steal, and every heal deals 10 damage (scaling with Max HP) to a random enemy. Damage changes are halved. You only heal while missing HP, so small hits keep the passive firing.",
    sections: [
      { h:"Weapons", p:"Fast weapons with lifesteal trigger the most heals.", head:WPN_HEAD,
        rows: [
          ["S","Scissors","Medical, Precise","I–IV","5–20 damage, 40–60% lifesteal, ~1s. A starting option."],
          ["S","Circular Saw","Blade, Medical","II–IV","10–25 damage, 0.72–0.62s, 45–60% lifesteal."],
          ["A","Medical Gun","Medical, Gun","I–IV","10–30 damage, 0.78–0.48s, 50–65% lifesteal, 400 range."],
          ["A","Sharp Tooth","Primitive, Precise","I–IV","Scales with 50–100% Life Steal."]
        ] },
      { h:"Item ratings by wave", p:"Max HP for the passive's damage, regen and Life Steal for its trigger rate. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Tentacle","II","A","S","A","+3% Crit; 20% chance to heal 1 on a crit kill (another trigger). Lich's win reward."],
          ["Octopus","IV","—","S","S","+12 Max HP, +5 HP Regen, +3% Life Steal."],
          ["Grind's Magical Leaf","IV","—","S","A","+3 Max HP, +1 Regen and +1% Life Steal every wave."],
          ["Padding","II","A","A","B","+3 Max HP, +1 per 80 materials."],
          ["Alien Magic","III","A","A","B","+8 Max HP, +3 HP Regen, -8 Luck."],
          ["Whetstone","II","A","A","B","+4% Life Steal."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Glass Cannon, Spider","III / IV","C","C","C","%Damage items are halved."]
        ] },
      fossilSection("Spine and Jaw both add healing triggers.", defFossils({"Spine":"S: regen, more heals","Jaw":"A: Life Steal, more heals","Right Arm":"S: Max HP scales the passive"})),
      petSection("Doc Moth doubles both of Lich's healing stats.", defPets({"Doc Moth":"S: doubles regen and Life Steal","Hungry Hungry Dinosaur (PD)":"B: scales with Max HP"})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Lich", [["Brotato Wiki – Tentacle", WIKI + "Tentacle"]])
  };

  D["Old"] = {
    lead: "Old slows enemies by 25% on a map 33% smaller, with 10% fewer enemies and +10 Harvesting. Old is also 10% slower.",
    sections: [
      { h:"Weapons", p:"The small map brings enemies to you. Engineering weapons are among Old's starting options.", head:WPN_HEAD,
        rows: [
          ["A","Chopper","Blade","I–IV","6–30 damage (50% Melee, 15–30% Max HP), 135–180 range."],
          ["A","Sickle","Support","I–IV","5–15 damage (80% Melee, 10–25% Harvesting); +20–50% damage to targets below 30% HP."],
          ["A","Double Barrel Shotgun","Gun","I–IV","4–6 piercing pellets for a crowded map."],
          ["A","Wrench","Tool","I–IV","Turrets cover most of a small map."],
          ["B","Sword","Blade, Medieval","II–IV","30–65 damage, thrust and sweep."]
        ] },
      { h:"Item ratings by wave", p:"Clear before enemies pile up; there's little room to run. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Snail","II","A","A","B","-8% enemy speed, -3% Speed. Old's win reward."],
          ["Turret","I","A","A","B","Structure: shoots for 10 (+80%)."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Lantern (AT)","IV","—","A","S","Knockback pulse every 3s keeps space on a small map."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Jellyshield","III","B","A","A","Blocks projectiles."],
          ["Jet Pack, Wings","IV / III","C","C","B","Speed for kiting, which the small map doesn't reward."]
        ] },
      fossilSection("Speed fossils help less on a small map.", defFossils({"Left Leg":"C: kiting room is limited"})),
      petSection("Scapegoat buys room on the small map.", defPets({})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Old", [["Brotato Wiki – Snail", WIKI + "Snail"]])
  };

  D["Builder"] = {
    lead: "Builder (Abyssal Terrors) starts with a Builder's Turret and can't have any other structure. Every 5 materials left on the ground at wave end give the turret +1% attack speed and +1 range. Engineering changes count 50% more, +20 Harvesting, -30% pickup range, and Damage changes are cut 75%.",
    sections: [
      { h:"How the turret works (wiki)", notes: [
          "The turret copies the base stats of your best ranged weapon: highest tier first, then most expensive, then most DPS. Then it scales with Engineering.",
          "It gains +1 projectile at +30, +150 and +300 structure range. That's 150 uncollected materials for the first upgrade, 600 more for the second, 750 more for the third.",
          "Wrench and other structure sources don't work for Builder."
        ] },
      { h:"Weapons", p:"Your best ranged weapon is the turret's template. Builder's starting list is mostly ranged.", head:WPN_HEAD,
        rows: [
          ["S","Laser Gun","Gun","I–IV","40–100 base damage, 1.98–1.65s, 500 range, pierces 1. A big template for the turret."],
          ["A","Medical Gun","Medical, Gun","I–IV","10–30 damage with 50–65% lifesteal keeps you alive."],
          ["A","Revolver","Gun","I–IV","15–40 damage, fast."],
          ["B","SMG","Gun","I–IV","Many weak shots; a weaker template than Laser Gun."]
        ] },
      { h:"Item ratings by wave", p:"Engineering, Harvesting and defense. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Improved Tools","III","S","S","A","+10% Attack Speed and faster structures."],
          ["Toolbox","III","A","A","A","+6 Engineering (9 for Builder), -8% Attack Speed."],
          ["Robot Arm","IV","—","S","A","+3 Engineering every wave."],
          ["Diploma","IV","—","A","S","+10 Engineering, +50% XP Gain."],
          ["Pile of Books","II","A","A","B","Structures can crit, +5% Crit, +3 Engineering."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Lighthouse (AT)","III","—","A","A","+20 Engineering, -1 per structure; Builder only ever has one. Builder's win reward."],
          ["Turret, Pocket Factory, Alien Tongue","I / II / I","C","C","C","Structures aren't allowed; pickup range eats the turret's materials."]
        ] },
      fossilSection("Defensive fossils keep you alive while the turret grows.", defFossils({"Tail":"B: Harvesting, and Builder banks on it"})),
      petSection("Lootworm picks up materials the turret wants.", defPets({"Lootworm":"C: collects the materials you leave for the turret","Bot-O-Mine":"C: a structure, which Builder can't have"})),
      { h:"DLC notes", notes: [ "Builder is an Abyssal Terrors character.", EARLY ] }
    ],
    sources: src("Builder", [["Brotato Wiki – Lighthouse", WIKI + "Lighthouse"], ["Brotato Wiki – Abyssal Terrors DLC", WIKI + "Abyssal_Terrors_DLC"]])
  };

  D["Curious"] = {
    lead: "Curious (Abyssal Terrors) starts with a Spyglass and gets 2 extra loot aliens every wave, which grow stronger each time you kill one. +2% XP Gain per different item, but -10% Damage per duplicate item or weapon, and enemies have +25% health.",
    sections: [
      { h:"Weapons", p:"Fast single-target damage to catch loot aliens. The wiki says duplicates include weapons, so six copies of one weapon cost 50% Damage.", head:WPN_HEAD,
        rows: [
          ["A","Pistol","Gun","I–IV","12–50 damage, 400 range. A starting option."],
          ["A","Double Barrel Shotgun","Gun","I–IV","4–6 piercing pellets. A starting option."],
          ["A","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s; buy from the shop."],
          ["B","Javelin","Primitive","I–IV","8–20 damage, pierces 2–5, guaranteed crit every 2nd–5th throw."]
        ],
        notes: [ "Mix weapon types to avoid duplicate penalties." ] },
      { h:"Item ratings by wave", p:"One of everything. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Any item you don't own","—","A","A","A","+2% XP Gain each."],
          ["Pearl (AT)","II","A","A","B","+1% Damage per 10 Luck. Curious's win reward."],
          ["Treasure Map (AT)","II","A","A","B","Extra items in crates; loot aliens drop crates."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Any duplicate","—","C","C","C","-10% Damage each."]
        ] },
      fossilSection("Each fossil is a different item, so +2% XP each.", defFossils({})),
      petSection("Each pet is another different item.", defPets({})),
      { h:"DLC notes", notes: [ "Curious is an Abyssal Terrors character.", EARLY ] }
    ],
    sources: src("Curious", [["Brotato Wiki – Abyssal Terrors DLC", WIKI + "Abyssal_Terrors_DLC"]])
  };

  D["Entrepreneur"] = {
    lead: "Entrepreneur pays 25% less for items, gets 25% more from recycling, and every Harvesting change counts 50% more. Materials reset to 0 at the start of each wave, and Damage changes are halved.",
    sections: [
      { h:"From the wiki", notes: [
          "The end-of-wave +5% Harvesting growth also counts as a modification, so it's 7.5% for Entrepreneur.",
          "Crown's extra +8% per wave becomes +12%, for 19.5% Harvesting growth per wave.",
          "Piggy Bank keeps 20% of leftover materials, but the wiki doesn't recommend it: spending everything is better."
        ] },
      { h:"Weapons", p:"Flat-scaling weapons, since %Damage is halved. The wiki suggests Hand and Taser early for the Support class Harvesting bonus.", head:WPN_HEAD,
        rows: [
          ["A","Hand","Unarmed, Support","I–IV","+3/+6/+12/+25 Harvesting (boosted 50%). Low damage."],
          ["A","Wrench","Tool","I–IV","Turrets scale with Engineering, not %Damage."],
          ["A","Pistol","Gun","I–IV","12–50 damage, 100% Ranged."],
          ["B","Thief Dagger","Precise","I–IV","Crit kills drop materials."]
        ] },
      { h:"Item ratings by wave", p:"Spend to zero every shop. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Crown","III","S","A","B","+8% Harvesting growth per wave (+12% for Entrepreneur)."],
          ["Wheelbarrow","II","A","A","B","+16 Harvesting (24)."],
          ["Bowler Hat","III","A","A","B","+15 Luck, +18 Harvesting (27). Entrepreneur's win reward."],
          ["Fertilizer","I","A","B","C","+8 Harvesting (12), -1 Melee."],
          ["Recycling Machine","II","A","A","B","+35% materials from recycling, on top of Entrepreneur's +25%."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Piggy Bank","II","C","C","C","The wiki says spend instead."],
          ["Glass Cannon, Spider","III / IV","C","C","C","%Damage is halved."]
        ] },
      fossilSection("Tail's Harvesting counts 50% more here.", defFossils({"Tail":"A: Harvesting boosted 50%"})),
      petSection("Lootworm doubles materials you spend anyway.", defPets({})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Entrepreneur", [["Brotato Wiki – Crown", WIKI + "Crown"]])
  };

  D["Mage"] = {
    lead: "Mage counts Elemental Damage changes 25% more and starts with a Snake and a Scared Sausage. Melee and Ranged Damage changes are cut 100%, Engineering changes 50%.",
    sections: [
      { h:"From the wiki", notes: [
          "Weapons that only scale with Melee or Ranged Damage stay at base damage. SMG and Double Barrel Shotgun can still spread burn through the Sausage.",
          "Extra Scared Sausages add +1 to the burn they cause, though the tooltip doesn't show it. Each Snake spreads fire to one more enemy."
        ] },
      { h:"Weapons", p:"Elemental weapons.", head:WPN_HEAD,
        rows: [
          ["S","Wand","Elemental","I–IV","Burning 3x3 to 12x9 (100% Elemental), 0.87–0.53s, pierces 1."],
          ["S","Thunder Sword","Blade, Elemental","III–IV","40/75 damage (125/150% Melee and Elemental), slowing projectiles. Mage's win reward."],
          ["A","Fireball","Explosive, Elemental","II–IV","Explodes and burns."],
          ["A","Taser","Support, Elemental","I–IV","Multiple slowing projectiles that spread burn."],
          ["A","Flamethrower","Elemental, Heavy","II–IV","Pierces 99 enemies with burning."],
          ["B","Lightning Shiv","Precise, Elemental","I–IV","Its lightning projectiles can burn since patch 1.0.1.3."]
        ] },
      { h:"Item ratings by wave", p:"Elemental Damage and burn spread. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Snake","I","S","A","B","Burning spreads to one more enemy."],
          ["Scared Sausage","I","A","A","B","25% chance to burn; extra copies add +1 burn."],
          ["Greek Fire","IV","—","S","S","Burning also deals 10% of current HP (1% on bosses)."],
          ["Wolf Helmet","IV","—","S","S","+10 Elemental (12.5), +20 Luck."],
          ["Fuel Tank","II","A","A","B","+4 Elemental (5); the Melee and Ranged cost means nothing."],
          ["Candle","III","A","A","B","+4 Elemental, +1 Regen."],
          ["Frozen Heart","III","A","A","B","+8 Elemental, +5% Crit, but burning activates 100% slower."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Big Arms, Scope","IV / II","C","C","C","Melee and Ranged items are cut 100%."]
        ] },
      fossilSection("No fossil adds Elemental Damage; take defense.", defFossils({})),
      petSection("Blazemander adds burning projectiles.", defPets({"Blazemander":"A: burning projectiles every 4s","Catling Gun":"C: Ranged scaling"})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Mage", [["Brotato Wiki – Scared Sausage", WIKI + "Scared_Sausage"], ["Brotato Wiki – Snake", WIKI + "Snake"]])
  };

  D["Chef"] = {
    lead: "Chef (Abyssal Terrors) has +35 Luck and deals +200% non-elemental damage to burning enemies. Consumables explode for 5x1 (+100%) burning damage when picked up, and Chef starts with a Scared Sausage. Enemies have +100% health, and Elemental Damage changes are cut 75%.",
    sections: [
      { h:"Weapons", p:"One burn source plus physical weapons. Chef's starting list is mostly melee, with Wand as the only ranged option.", head:WPN_HEAD,
        rows: [
          ["A","Knife","Precise","I–IV","9–25 damage, crits x2.5–x4: physical hits for the +200%."],
          ["A","Torch","Primitive, Elemental","I–IV","Burns 3x3 to 12x9. A cheap burn source."],
          ["A","Spoon","Blunt","I–IV","10–25 damage (50% Melee, 15–25% Max HP). Chef's win reward."],
          ["A","SMG","Gun","I–IV","Fast physical hits; buy from the shop."],
          ["B","Wand","Elemental","I–IV","A ranged burn source to start with."]
        ] },
      { h:"Item ratings by wave", p:"Burn on everything, then hit physically. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Scared Sausage","I","S","A","B","25% chance to burn on attack."],
          ["Snake","I","A","A","B","Burning spreads."],
          ["Coffee","I","A","A","B","+10% Attack Speed."],
          ["Fruit Basket","II","A","A","B","More fruit, so more consumable explosions; -3 HP Regen."],
          ["Lemonade","I","A","B","C","+1 HP from consumables."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Fuel Tank, Wolf Helmet","II / IV","C","C","C","Elemental Damage is cut 75%."]
        ] },
      fossilSection("Defensive fossils for a character whose enemies have double health.", defFossils({})),
      petSection("Blazemander lights enemies for your physical hits.", defPets({"Blazemander":"S: burning projectiles every 4s set up the +200%"})),
      { h:"DLC notes", notes: [ "Chef is an Abyssal Terrors character.", EARLY ] }
    ],
    sources: src("Chef", [["Brotato Wiki – Spoon", WIKI + "Spoon"], ["Brotato Wiki – Abyssal Terrors DLC", WIKI + "Abyssal_Terrors_DLC"]])
  };

  D["Beast Master"] = {
    lead: "Beast Master can't equip weapons. Pet damage also scales with Melee, Ranged, Elemental Damage and Engineering, and each permanent pet adds +2% Speed. Since update 1.2 it starts with an extra Rat pet.",
    sections: [
      { h:"Pets as weapons", p:"All four damage stats feed every pet. Attack Speed does nothing for pets.", head:["Tier","Pet","Rarity","Effect"],
        rows: [
          ["S","Bonk Dog","II","Hits for 10 (60%); dashes every 5s for 8 (+40%) explosive area damage."],
          ["S","Catling Gun","II","Shoots for 10 (+60%); twice as fast while you stay close."],
          ["A","Bot-O-Mine","II","A structure: shoots for 10 (+100%) and drops a landmine every 5s."],
          ["A","Blazemander","II","Burning projectiles every 4s; burn for 5x3 (+50%)."],
          ["A","Mosquitor (PD)","—","Shoots for 5 (+75%); hit enemies take 30% more damage for 5s."],
          ["B","Ratzilla","I","Hits for 5 (+10%)."],
          ["B","Hungry Hungry Dinosaur (PD)","—","12–14 (+25% Max HP), +5 per fruit eaten this wave."],
          ["A","Scapegoat","IV","Enemies target it instead of you. Beast Master's win reward."]
        ] },
      { h:"Item ratings by wave", p:"Flat damage stats of every kind, and survival. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Alloy","III","A","S","A","+3 to each of Melee, Ranged, Elemental and Engineering, +5% Crit. All four feed pets."],
          ["Big Arms","IV","—","A","A","+12 Melee, +6 Ranged."],
          ["Wolf Helmet","IV","—","A","A","+10 Elemental, +20 Luck, -5 Engineering."],
          ["Gnome","IV","—","A","A","+10 Melee, +10 Elemental; -20 Range, -20% pickup range."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Jellyshield","III","A","A","A","Blocks projectiles, and it's a permanent pet (+2% Speed)."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Coffee, Small Magazine","I / II","C","C","C","Attack Speed doesn't affect pets."]
        ] },
      fossilSection("Defensive fossils, since your pets do the fighting.", defFossils({"Right Leg":"C: Range doesn't help pets","Jaw":"C: you don't hit anything"})),
      { h:"DLC notes", notes: [ "Primal Dread adds Mosquitor, Hungry Hungry Dinosaur and Dino Egg, all pets.", EARLY ] }
    ],
    sources: src("Beast_Master", [["Brotato Wiki – Scapegoat", WIKI + "Scapegoat"]])
  };

  D["Cyborg"] = {
    lead: "Cyborg starts with a Minigun, and Ranged Damage changes count 200% more. Halfway through each wave, all Ranged Damage temporarily converts into Engineering at 1 to 2. Engineering changes are cut 75%, Melee and Elemental changes 100%.",
    sections: [
      { h:"Weapons", p:"Guns for the first half of each wave; turrets for the second.", head:WPN_HEAD,
        rows: [
          ["S","Minigun","Heavy, Gun","III–IV","2/5 damage every 0.09s, pierces. The starting weapon."],
          ["A","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s. A starting option."],
          ["A","Pistol","Gun","I–IV","12–50 damage, pierces 1."],
          ["A","Wrench","Tool","I–IV","Turrets for the second half of each wave."],
          ["A","Chain Gun","Legendary, Gun","IV only","Scales with Ranged and Engineering, so it's good in both halves."]
        ] },
      { h:"Item ratings by wave", p:"Ranged Damage only, plus structures. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Small Magazine","II","A","A","B","+2 Ranged Damage (6 for Cyborg), +10% Attack Speed."],
          ["Scope","II","A","A","B","+2 Ranged Damage (6), +25 Range."],
          ["Heavy Bullets","IV","—","S","S","+5 Ranged Damage (15)."],
          ["Turret","I","S","A","B","Structure for the second half."],
          ["Laser Turret","III","A","S","A","Piercing structure."],
          ["Improved Tools","III","A","S","A","Faster structures. Cyborg's win reward."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Toolbox, Nail","III","C","C","C","Engineering items are cut 75%."]
        ] },
      fossilSection("Fossils don't add Ranged Damage; take defense.", defFossils({"Right Leg":"A: Range for Miniguns"})),
      petSection("Catling Gun scales with Ranged Damage.", defPets({"Catling Gun":"A: scales with Ranged Damage","Bot-O-Mine":"A: a structure for the second half"})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Cyborg", [["Brotato Wiki – Minigun", WIKI + "Minigun"], ["Brotato Wiki – Improved Tools", WIKI + "Improved_Tools"]])
  };

  D["Gladiator"] = {
    lead: "Gladiator gets +20% Attack Speed for every different weapon and +5 Melee Damage, against -40% Attack Speed and -30 Luck. Gladiator can't equip ranged weapons. Six different weapons is +120%, a net +80%.",
    sections: [
      { h:"Weapons", p:"Six different strong melee weapons. Upgrades come from the shop offering higher tiers, not from combining.", head:WPN_HEAD,
        rows: [
          ["A","Spear","Primitive","I–IV","15–60 damage, 350–500 range. A starting option."],
          ["A","Sword","Blade, Medieval","II–IV","30–65 damage, thrust and sweep."],
          ["A","Hammer","Blunt, Heavy","II–IV","40–120 damage, heavy knockback."],
          ["A","Circular Saw","Blade, Medical","II–IV","Fast sweep with 45–60% lifesteal."],
          ["A","Thunder Sword","Blade, Elemental","III–IV","40/75 damage plus slowing projectiles."],
          ["B","Mace (AT)","Heavy, Medieval","II–IV","40–100 damage, but it scales with negative Attack Speed, which Gladiator works to remove."]
        ] },
      { h:"Item ratings by wave", p:"Melee Damage and defense. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Spider","IV","—","S","S","+12% Damage, +6% Attack Speed per different weapon. Gladiator's win reward."],
          ["Mastery","II","A","A","B","+6 Melee Damage, -3 Ranged."],
          ["Coffee","I","A","A","B","+10% Attack Speed."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Lantern (AT)","IV","—","A","S","+10% Damage, +50 Range, knockback pulse."],
          ["Scarf (AT)","III","—","A","B","+4 Melee, +4 HP Regen, +4% Speed."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Focus","IV","C","C","C","+30% Damage but -3% Attack Speed per different weapon: the opposite of Gladiator."]
        ] },
      fossilSection("Defensive fossils.", defFossils({"Jaw":"A: Life Steal on six weapons"})),
      petSection("Melee pets suit Gladiator.", defPets({"Bonk Dog":"B"})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Gladiator", [["Brotato Wiki – Spider", WIKI + "Spider"]])
  };

  D["Multitasker"] = {
    lead: "Multitasker can hold 12 weapons, with +20% Damage but -5% Damage per weapon. Twelve weapons is a net -40%. The wiki notes that class bonuses stop growing past 6 weapons of one class.",
    sections: [
      { h:"Weapons", p:"Quantity over quality.", head:WPN_HEAD,
        rows: [
          ["S","Stick","Primitive","I–IV","8–12 damage, +4/+6/+8/+10 base damage for every other Stick. Twelve Sticks get huge."],
          ["A","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s."],
          ["A","Wrench","Tool","I–IV","Twelve turrets."],
          ["A","Chopper","Blade","I–IV","Scales with Max HP. Multitasker's win reward."]
        ],
        notes: [ "Mixing two classes of 6 gets both class bonuses; 12 of one class doesn't give more than 6." ] },
      { h:"Item ratings by wave", p:"Flat damage matters more than %. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Mastery","II","A","A","B","+6 Melee Damage."],
          ["Alloy","III","A","A","A","+3 to every damage stat."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Focus","IV","C","C","C","-3% Attack Speed per different weapon."],
          ["Spider","IV","—","B","B","+6% Attack Speed per different weapon; twelve Sticks count as one."]
        ] },
      fossilSection("Defensive fossils.", defFossils({})),
      petSection("Pets add more bodies to the swarm.", defPets({})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Multitasker", [["Brotato Wiki – Stick", WIKI + "Stick"]])
  };

  D["Wildling"] = {
    lead: "Wildling gets +30% Life Steal with Primitive weapons and starts with a Stick, but can't equip weapons above Tier II. Both starting weapons are Primitive.",
    sections: [
      { h:"Weapons", p:"Primitive weapons only get the Life Steal. Late scaling comes from stats.", head:WPN_HEAD,
        rows: [
          ["S","Stick","Primitive","I–II","8–9 damage, +4/+6 for every other Stick."],
          ["A","Slingshot","Primitive","I–II","10–13 damage, bounces 1–2 times."],
          ["A","Spear","Primitive","I–II","15–25 damage, 350–375 range."],
          ["A","Hatchet","Primitive","I–II","7–11 damage, 0.68s. Wildling's win reward."],
          ["B","Javelin","Primitive","I–II","Pierces 2–3, crits every 4th–5th throw."]
        ] },
      { h:"Item ratings by wave", p:"Weapons stop at Tier II, so items and stats do the scaling. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Coffee","I","A","A","B","+10% Attack Speed."],
          ["Mastery","II","A","A","B","+6 Melee Damage."],
          ["Bloody Hand","IV","—","S","S","+10% Life Steal, +2% Damage per 1% Life Steal. Wildling's 30% feeds it."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Scarf (AT)","III","—","A","B","+4 Melee, +4 HP Regen, +4% Speed."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Anvil","IV","C","C","C","Upgrades weapons, which stop at Tier II."]
        ] },
      fossilSection("Jaw adds even more Life Steal.", defFossils({"Jaw":"A: more Life Steal"})),
      petSection("Doc Moth doubles Life Steal.", defPets({"Doc Moth":"A: doubles your Life Steal"})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Wildling", [["Brotato Wiki – Stick", WIKI + "Stick"]])
  };

  D["Bull"] = {
    lead: "Bull can't equip weapons and explodes for 30 damage every time it takes damage, with a 1.5x crit multiplier. +20 Max HP, +15 HP Regen, +10 Armor, and HP Regen changes count 50% more. The wiki: explosions scale with Melee, Ranged and Elemental Damage, but don't trigger Life Steal and ignore Range and Attack Speed.",
    sections: [
      { h:"From the wiki", notes: [
          "Blood Donation makes Bull explode every second for 1 damage. A second copy doubles the damage but not the explosions.",
          "Pick low-damage enemies to explode on. Elites and bosses hit hard; explode on enemies next to them instead.",
          "3 HP Regen heals about 16 HP over a 60-second wave, so regen beats the same amount of Max HP.",
          "Melee Damage is usually the cheapest of the three damage stats per point, and items like Alloy that add several pay twice."
        ] },
      { h:"Item ratings by wave", p:"Regen and Armor to keep exploding, then explosion damage and size. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Blood Donation","III","S","S","A","+40 Harvesting; an explosion every second."],
          ["Regeneration Potion","IV","—","S","S","+3 Regen, doubled below 50% HP."],
          ["Explosive Shells","IV","—","S","S","+60% Explosion Damage, +15% size, -15% Damage: a net +45% per the wiki."],
          ["Plastic Explosive","III","A","S","A","+25% explosion size."],
          ["Rip and Tear","III","A","A","A","Enemies explode on death and can chain."],
          ["Focus","IV","—","A","A","+30% Damage; Bull has no weapons for its penalty."],
          ["Alloy","III","A","A","A","+3 Melee, Ranged and Elemental."],
          ["Dynamite","I","A","A","B","+15% Explosion Damage."],
          ["Gnome","IV","—","A","A","+10 Melee, +10 Elemental. Bull's win reward."],
          ["Cape, Leather Vest","IV / II","C","C","C","Dodge means fewer explosions."]
        ] },
      fossilSection("Spine's regen is boosted 50% for Bull.", defFossils({"Spine":"S: regen boosted 50%","Right Arm":"S: Max HP, and losing Dodge means more explosions","Jaw":"C: explosions don't trigger Life Steal","Right Leg":"C: Range doesn't affect explosions"})),
      petSection("Doc Moth doubles your regen.", defPets({"Doc Moth":"S: doubles Bull's regen","Scapegoat":"C: takes the hits you want"})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Kraken's Eye adds another explosion when hit, plus +15 Max HP and +15 Curse.", EARLY ] }
    ],
    sources: src("Bull", [["Brotato Wiki – Blood Donation", WIKI + "Blood_Donation"], ["Brotato Wiki – Gnome", WIKI + "Gnome"]])
  };

  D["Hunter"] = {
    lead: "Hunter has +100 Range and gains +1% Damage per 10 Range. Crit Chance changes are boosted 25%. Harvesting changes are cut 100% and Max HP changes 33%.",
    sections: [
      { h:"Weapons", p:"Long-range crits.", head:WPN_HEAD,
        rows: [
          ["S","Crossbow","Precise, Medieval","I–IV","10–18 damage scaling with Range, 30–45% crit, pierces on crit. A starting option."],
          ["S","Sniper Gun","Gun, Precise","III–IV","50/80 damage, crits x3–x4, splinters scale with Range. Hunter's win reward."],
          ["A","Javelin","Primitive","I–IV","Pierces 2–5, guaranteed crits every 2nd–5th throw."],
          ["A","Pistol","Gun","I–IV","12–50 damage, 400 range."],
          ["B","Hiking Pole","Support","I–IV","Scales with Range and grows it as you walk."]
        ] },
      { h:"Item ratings by wave", p:"Range and Crit; income from kills. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Night Goggles","IV","—","S","S","+15% Crit (18.75), +50 Range."],
          ["Wings","III","A","A","A","+30 Range, +10% Speed."],
          ["Ashes (AT)","IV","—","S","S","+100 Range is +10% Damage on top of its own +20%."],
          ["Glasses","I","A","A","B","+20 Range."],
          ["Hunting Trophy","III","A","A","B","Crit kills drop materials, since Harvesting is gone."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Wheelbarrow, Head Injury, Scar","II / I / I","C","C","C","Harvesting is cut 100%; the others cost Range."]
        ] },
      fossilSection("Right Leg's Range is also damage for Hunter.", defFossils({"Right Leg":"S: Range, which is also +1% Damage per 10","Left Leg":"C: -3% Crit","Right Arm":"B: Max HP is cut 33%","Tail":"C: Harvesting is cut 100%"})),
      petSection("Catling Gun shoots from your side.", defPets({"Catling Gun":"B"})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Ashes and Spyglass (+10 Range) both add Range.", EARLY ] }
    ],
    sources: src("Hunter", [["Brotato Wiki – Sniper Gun", WIKI + "Sniper_Gun"]])
  };

  D["Captain"] = {
    lead: "Captain (Abyssal Terrors) gains +60% XP for every free weapon slot, and level-up stats count double, but levels need 200% more XP. Enemy health and damage rise 2% at the end of each wave.",
    sections: [
      { h:"Weapons", p:"One strong weapon early; fill slots once level-ups have built your stats. Sword isn't a starting option; Spear or Slingshot are.", head:WPN_HEAD,
        rows: [
          ["S","Captain's Sword","Naval, Blade","III–IV","50/80 damage, thrust and sweep, +25/+50 damage per free weapon slot. Captain's win reward."],
          ["A","Spear","Primitive","I–IV","15–60 damage, 350–500 range. A starting option."],
          ["A","Slingshot","Primitive","I–IV","10–20 damage, bounces. A starting option."],
          ["A","Sword","Blade, Medieval","II–IV","30–65 damage. Buy from the shop."],
          ["B","Quarterstaff","Primitive, Medieval","I–IV","+2–15% XP Gain on top."]
        ] },
      { h:"Item ratings by wave", p:"XP Gain early, then normal damage once slots fill. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bean Teacher","III","S","A","B","+50% XP Gain."],
          ["Diploma","IV","—","S","A","+50% XP Gain, +10 Engineering."],
          ["Scar","I","A","B","C","+20% XP Gain, -8 Range."],
          ["Barnacle (AT)","III","A","A","B","+35% stats from level-ups on top of Captain's double, +1 Curse per level."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites, which grow every wave."]
        ] },
      fossilSection("Defensive fossils; enemies get tougher every wave.", defFossils({})),
      petSection("Pets don't take weapon slots.", defPets({"Bonk Dog":"A: damage without a weapon slot","Catling Gun":"A: damage without a weapon slot"})),
      { h:"DLC notes", notes: [ "Captain is an Abyssal Terrors character.", EARLY ] }
    ],
    sources: src("Captain", [["Brotato Wiki – Abyssal Terrors DLC", WIKI + "Abyssal_Terrors_DLC"]])
  };

  D["Speedy"] = {
    lead: "Speedy has +30% Speed and +1 Melee Damage for every 2% Speed. Standing still costs 100 Armor, and Speedy starts at -3 Armor.",
    sections: [
      { h:"Weapons", p:"Never stop moving.", head:WPN_HEAD,
        rows: [
          ["S","Jousting Lance","Medieval","I–IV","20–50 damage (50% Melee, 30–50% Speed), 250 range, +2–5% Speed; loses damage while standing still."],
          ["A","Spear","Primitive","I–IV","15–60 damage, 350–500 range."],
          ["A","Hiking Pole","Support","I–IV","Gains Range the more you walk."],
          ["A","Javelin","Primitive","I–IV","Pierces, guaranteed crits."]
        ] },
      { h:"Item ratings by wave", p:"Speed is damage and defense. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Fin","III","A","S","A","+10% Speed (+5 Melee), +3% Life Steal. Speedy's win reward."],
          ["Power Generator","III","A","S","A","+1% Damage per 1% Speed."],
          ["Wings","III","A","A","A","+10% Speed, +30 Range."],
          ["Jet Pack","IV","—","A","A","+15% Speed, +10% Dodge; -5 Max HP, -1 Armor."],
          ["Beanie","I","A","B","C","+4% Speed, -6 Range."],
          ["Scarf (AT)","III","—","A","B","+4% Speed, +4 Melee, +4 Regen."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Statue, Coral (AT), Barricade","III / II / III","C","C","C","Stand-still items; standing still costs Speedy 100 Armor."]
        ] },
      fossilSection("Left Leg is Speedy's fossil.", defFossils({"Left Leg":"S: +3% Speed, +2% per fossil, and each 2% is +1 Melee","Left Arm":"C: -3% Speed","Right Arm":"B"})),
      petSection("Pets keep fighting while you run.", defPets({})),
      { h:"DLC notes", notes: [ "Primal Dread: Plastic Boots stops puddles, which you'll run through a lot.", EARLY ] }
    ],
    sources: src("Speedy", [["Brotato Wiki – Jousting Lance", WIKI + "Jousting_Lance"], ["Brotato Wiki – Fin", WIKI + "Fin"]])
  };

  D["Well Rounded"] = {
    lead: "Well Rounded has +5 Max HP, +5% Speed and +8 Harvesting, and no drawbacks or gimmick. Pick one damage type and commit.",
    sections: [
      { h:"Weapons", p:"Any mainstream weapon works.", head:WPN_HEAD,
        rows: [
          ["A","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s."],
          ["A","Slingshot","Primitive","I–IV","10–20 damage, bounces."],
          ["A","Double Barrel Shotgun","Gun","I–IV","4–6 piercing pellets."],
          ["A","Knife","Precise","I–IV","Melee crit option."]
        ] },
      { h:"Item ratings by wave", p:"Standard priorities. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Coupon","I","A","B","C","-5% prices."],
          ["Sharp Bullet","I","A","A","B","+1 pierce."],
          ["Ricochet","IV","—","A","A","+1 bounce, -25% Damage."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Potato","IV","—","A","A","Small bonuses to nearly every stat. Well Rounded's win reward."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."]
        ] },
      fossilSection("Standard fossil ratings.", defFossils({})),
      petSection("Standard pet ratings.", defPets({})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Well_Rounded", [["Brotato Wiki – Potato", WIKI + "Potato"]])
  };

  // ---- C tier (Nov 17 2026) ----
  D["One Armed"] = {
    lead: "One Armed has +200% Attack Speed and every Damage modification counts double, but can hold only one weapon. The wiki's starting picks are weapons that handle groups: Shredder, Double Barrel Shotgun and Lightning Shiv. Combine copies the moment you can, because one weapon has to carry the run.",
    sections: [
      { h:"Weapons", p:"Fist and Slingshot aren't on One Armed's starting list. Every option below is.", head:WPN_HEAD,
        rows: [
          ["S","Double Barrel Shotgun","Gun","I–IV","3x4 to 9x6 damage, 1.37–1.2s, 350 range. Four to six pellets clear crowds from one slot."],
          ["S","Shredder","Gun, Explosive","I–IV","5–25 damage (50% Ranged), 50–100% chance to explode, pierces 3, 450 range."],
          ["A","Lightning Shiv","Precise, Elemental","I–IV","3–15 damage (80% Melee), 1.01–0.78s. One of the wiki's crowd picks."],
          ["A","Claw","Unarmed, Precise","I–IV","5–25 damage, also scales with 15–30% of your Attack Speed, and you start with +200%."],
          ["B","Revolver, SMG","Gun","I–IV","Fast single-target fire. Fine against bosses, weaker in hordes."]
        ] },
      { h:"Item ratings by wave", p:"%Damage counts double. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Focus","IV","—","S","S","+30% Damage (doubled), -3% Attack Speed per different weapon. The wiki: the downside is tiny with one weapon. Your win reward."],
          ["Silver Bullet","III","A","S","S","+25% against bosses and elites. The wiki says One Armed doubles it to +50%."],
          ["Glass Cannon","III","A","S","A","+25% Damage, -3 Armor."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Cyclops Worm","II","A","A","B","+12% Damage, -12 Range."],
          ["Missile","II","A","A","B","+10% Damage, -4% Attack Speed."],
          ["Bag","I","S","B","C","+15 materials per crate, for buying weapon copies."],
          ["Coffee","I","B","B","C","+10% Attack Speed, -2% Damage. If drawbacks double too (the site's guess), that's -4%."],
          ["Knot (AT)","III","C","C","C","Weapons can no longer be upgraded. With one weapon that ends your scaling."]
        ] },
      fossilSection("Defense fossils; your one weapon does the rest.", defFossils({"Right Leg":"B: Range; the -4% Attack Speed barely dents +200%"})),
      petSection("A pet is a second source of damage that isn't a weapon.", defPets({"Catling Gun":"A: extra damage without a weapon slot","Mosquitor (PD)":"S: +30% damage taken, on top of your doubled %Damage"})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Ashes adds +20% Damage, doubled.", EARLY ] }
    ],
    sources: src("One_Armed", [["Brotato Wiki – Focus", WIKI + "Focus"]])
  };

  D["Ghost"] = {
    lead: "Ghost has +30% Dodge with a 90% cap, +10 Damage on Ethereal weapons, and -100 Armor. All three starting weapons are Ethereal and grow stronger with kills in a wave. You aim for 90% Dodge and enough Max HP to survive the one hit in ten that lands.",
    sections: [
      { h:"Weapons", p:"+10 flat damage matters most on weapons with low base damage. Ghost Flint goes from 6 to 16 at Tier I.", head:WPN_HEAD,
        rows: [
          ["S","Ghost Scepter","Ethereal","I–IV","10–30 damage (100% Ranged), 0.98–0.83s, 300–450 range. +1 Max HP per 20/18/16/12 kills in a wave."],
          ["A","Ghost Flint","Ethereal","I–IV","6–20 damage (100% Melee), 1.23–1.04s. +1% Attack Speed per 20/18/16/12 kills."],
          ["A","Ghost Axe","Ethereal","I–IV","12–40 damage (100% Melee), 1.73–1.51s. +1% Damage per 20/18/16/12 kills."],
          ["A","Scythe","Legendary, Ethereal","IV","150 damage (150% Melee, 100% Life Steal), 0.72s, but you take 3 damage per second."]
        ] },
      { h:"Item ratings by wave", p:"Dodge until the cap, then Max HP. Armor can't climb out of -100. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Cape","IV","—","S","S","+20% Dodge, +5% Life Steal, -2 to each damage stat."],
          ["Retromation's Hoodie","IV","—","S","S","+2% Attack Speed per 1% Dodge, -80 Range. At 90% Dodge that's +180%."],
          ["Leather Vest","II","S","A","B","+6% Dodge, +2 Armor, -3 Max HP."],
          ["Blindfold","II","S","A","B","+5% Dodge, +5% Crit Chance, -15 Range."],
          ["Clover","III","A","A","B","+6% Dodge, +20 Luck, -2% Life Steal."],
          ["Adrenaline","III","A","A","A","+5% Dodge, 50% chance to heal 5 HP on a dodge."],
          ["Riposte","II","A","A","B","+2 Melee Damage; every dodge hits back for 1 (300%)."],
          ["Tardigrade","III","A","A","A","Nullifies one hit each wave: one less of the hits you can't afford."],
          ["Helmet, Metal Plate","I / II","C","C","C","Armor. You start at -100, so a few points change nothing."]
        ] },
      fossilSection("Right Arm costs Dodge, which is Ghost's whole defense.", defFossils({"Right Arm":"C: costs Dodge","Left Arm":"C: Armor can't climb out of -100","Left Leg":"A: Speed to stay out of crowds","Spine":"A: regen between rare hits"})),
      petSection("Projectiles and crowds are what get through Dodge.", defPets({"Jellyshield":"S: a blocked projectile never rolls against Dodge","Scapegoat":"S: takes the aggro"})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Ashes' -1 Armor each wave costs you nothing extra.", EARLY ] }
    ],
    sources: src("Ghost")
  };

  D["Sick"] = {
    lead: "Sick has +12 Max HP and +25% Life Steal, but takes 1 damage every second (with no invulnerability time) and has -100 HP Regen. You heal only by hitting things. The wiki recommends Scissors and Medical Gun for their Life Steal, and SMG because it fires every 0.17s.",
    sections: [
      { h:"Weapons", p:"Faster attacks mean more Life Steal procs. The wiki's picks:", head:WPN_HEAD,
        rows: [
          ["S","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s. The wiki: rapid healing."],
          ["A","Sharp Tooth","Primitive, Precise","I–IV","5–15 damage that also scales with 50–100% of your Life Steal, and you start with 25%."],
          ["A","Scissors","Medical, Precise","I–IV","5–20 damage, 1.01–0.86s. The wiki lists it for its Life Steal."],
          ["A","Medical Gun","Medical, Gun","I–IV","10–30 damage, 0.78–0.48s. The same reason, at range."],
          ["B","Fist","Unarmed","I–IV","8–64 damage, 0.78–0.59s. Fast and on the starting list."]
        ] },
      { h:"Item ratings by wave", p:"Life Steal and attack speed are your healing. Regen is wasted. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bloody Hand","IV","—","S","S","+10% Life Steal and +2% Damage per 1% Life Steal. At 35% that's +70% Damage. It adds another 1 damage per second."],
          ["Whetstone","II","S","A","B","+4% Life Steal, -3 Knockback. Your win reward."],
          ["Cape","IV","—","A","A","+5% Life Steal, +20% Dodge."],
          ["Fin","III","A","A","B","+3% Life Steal, +10% Speed, -8 Luck."],
          ["Coffee","I","S","A","B","+10% Attack Speed, -2% Damage."],
          ["Medical Turret","II","A","A","B","Heals 3 (+5%) HP per shot. Healing that isn't regen."],
          ["Tentacle","II","A","B","B","+3% Crit Chance; 20% chance to heal 1 HP on a crit kill."],
          ["Octopus","IV","—","B","B","+12 Max HP and +3% Life Steal; the +5 Regen is wasted."],
          ["Mushroom, Shmoop","I / III","C","C","C","HP Regen. Sick has -100."]
        ] },
      fossilSection("Life Steal fossils help, regen fossils don't.", defFossils({"Jaw":"S: Life Steal is your healing","Spine":"C: +2 regen against -100"})),
      petSection("Doc Moth doubles Life Steal in its aura.", defPets({"Doc Moth":"A: doubles your Life Steal while you stand in it"})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Ashes adds the attack speed Sick heals with.", EARLY ] }
    ],
    sources: src("Sick", [["Brotato Wiki – Bloody Hand", WIKI + "Bloody_Hand"]])
  };

  D["Pacifist"] = {
    lead: "Pacifist has -100% Damage and -100 Engineering, but gains 0.65 materials and XP for every enemy alive at the end of a wave. The wiki adds the details: enemies that despawn during the wave also count, the screen holds 100 enemies at most, each enemy pays at most 1 material, and horde waves pay half. You start with a Lumberjack Shirt so trees still die.",
    sections: [
      { h:"Weapons", p:"Your weapons deal 1 damage per hit in most cases. Pick them for what they do besides damage.", head:WPN_HEAD,
        rows: [
          ["S","Hand","Unarmed, Support","I–IV","+3/+6/+12/+25 Harvesting. Income that doesn't need kills."],
          ["A","Taser","Support, Elemental","I–IV","Slows enemies around each projectile, so the crowd catches you less."],
          ["A","Pruner","Support","I–IV","Spawns a garden that makes a fruit every 15/14/12/10s: your healing."]
        ] },
      { h:"Item ratings by wave", p:"Stay alive inside a crowd. More enemies means more pay. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Gentle Alien","I","S","S","A","+5% Enemies (more pay), +2 Max HP. The +5% Damage does nothing for you."],
          ["Wandering Bot","III","A","S","A","Slows nearby enemies."],
          ["Snail","II","A","A","B","-8% Enemy Speed, -3% Speed."],
          ["Warrior Helmet","III","A","A","A","+3 Armor, +5 Max HP, -5% Speed."],
          ["Leather Vest","II","S","A","B","+2 Armor, +6% Dodge."],
          ["Tardigrade","III","A","A","A","Nullifies one hit each wave."],
          ["Panda","IV","—","A","A","+12 Max HP, +25 Luck. The -5% Damage costs nothing. Your win reward."],
          ["Lantern (AT)","IV","—","A","A","Knocks nearby enemies back every 3 seconds, +15 Knockback."],
          ["Wheelbarrow","II","A","A","B","+16 Harvesting, -1 Armor."],
          ["Turret, Landmines","I","C","C","C","Engineering is -100."]
        ] },
      fossilSection("Defense and Harvesting fossils both pay off.", defFossils({"Tail":"A: Harvesting, and you never need damage","Left Leg":"A: Speed to weave through the crowd","Right Arm":"A: Max HP"})),
      petSection("Pets that pull aggro keep you alive. Pets that kill cost you income.", defPets({"Scapegoat":"S: enemies chase it, not you","Jellyshield":"S: blocks projectiles","Mosquitor (PD)":"C: helps kill what you want alive","Catling Gun":"C: kills what you want alive"})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Lantern's knockback pulse buys space without killing.", "Update 1.1.0.0 removed Spiky Shield from Pacifist's starting weapons.", EARLY ] }
    ],
    sources: src("Pacifist")
  };

  D["Saver"] = {
    lead: "Saver has +15 Harvesting and +1% Damage per 25 materials held, and starts with a Piggy Bank. Everything costs 50% more. The wiki notes that Piggy Bank's +20% interest at the start of each wave (until wave 20) compounds both your bank and your Damage.",
    sections: [
      { h:"Weapons", p:"Cheap weapons that work at low tiers, so the bank keeps growing.", head:WPN_HEAD,
        rows: [
          ["A","Chopper","Blade","I–IV","6–30 damage, also scales with 15–30% of your Max HP."],
          ["A","Pistol","Gun","I–IV","12–50 damage (100% Ranged), crits 10–25%. Cheap single-target damage."],
          ["A","Sickle","Support","I–IV","5–15 damage plus 10–25% of your Harvesting. +20–50% against enemies below 30% HP."],
          ["B","Thief Dagger","Precise","I–IV","50–80% chance of 1 material on a crit kill."]
        ] },
      { h:"Item ratings by wave", p:"Every 25 materials spent is 1% Damage lost. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Padding","II","A","S","S","+3 Max HP, +1 Max HP per 80 materials held. Your win reward."],
          ["Crown","III","S","A","C","Harvesting grows an extra 8% each wave. Buy early or not at all."],
          ["Wheelbarrow","II","S","A","C","+16 Harvesting, -1 Armor."],
          ["Coupon","I","A","A","B","-5% item prices against your +50%."],
          ["Hunting Trophy","III","A","A","B","33% chance of 1 material on a crit kill."],
          ["Warrior Helmet","III","A","A","A","+3 Armor, +5 Max HP. Defense keeps you alive without spending on damage."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites. Worth spending on before wave 20."],
          ["Dangerous Bunny","II","B","B","C","+1 free reroll each shop. Paid rerolls drain the bank."]
        ] },
      fossilSection("Fossils cost materials you'd rather hold.", defFossils({"Tail":"A: Harvesting grows the bank"})),
      petSection("Lootworm doubles materials.", defPets({"Lootworm":"S: 10% chance to double each material"})),
      { h:"DLC notes", notes: [ "Piggy Bank stops working at wave 20. Spend down for the boss then.", EARLY ] }
    ],
    sources: src("Saver", [["Brotato Wiki – Piggy Bank", WIKI + "Piggy_Bank"]])
  };

  D["Streamer"] = {
    lead: "Streamer earns 3% of held materials every second while standing still (at least 1, at most 25 per second) and gets +40% Damage and Attack Speed while moving. Enemies drop 50% fewer materials. Holding materials costs 1% Damage per 15 and 1% Speed per 30. Each structure-spawning item or weapon gives +2 Armor.",
    sections: [
      { h:"Weapons", p:"The wiki's common picks are SMG or Slingshot, or Wrench for an Engineering run.", head:WPN_HEAD,
        rows: [
          ["S","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s, 400 range. Shoots while you move."],
          ["A","Wrench","Tool","I–IV","12–24 damage and spawns a turret: +2 Armor, and damage while you stand still."],
          ["A","Slingshot","Primitive","I–IV","10–20 damage that bounces, 300 range."],
          ["B","Shredder","Gun, Explosive","I–IV","Exploding, piercing shots."],
          ["C","Most melee","—","—","The wiki: hard to use when you have to stand still."]
        ] },
      { h:"Income table", p:"From the wiki. The 1-second timer resets every time you move.", head:["Materials held","Per second standing still"],
        rows: [ ["0–66","+1"], ["67","+2"], ["100","+3"], ["134","+4"], ["167","+5"], ["200","+6"], ["300","+9"], ["834","+25 (max)"] ] },
      { h:"Item ratings by wave", p:"Structures give Armor. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Turret","I","S","A","B","Shoots 10 (+80%) and gives +2 Armor."],
          ["Wandering Bot","III","A","S","A","Slows nearby enemies; the wiki confirms it counts for +2 Armor."],
          ["Landmines","I","A","A","B","+2 Armor for the item, not per mine (wiki)."],
          ["Laser Turret","III","A","S","A","20 (+125%) piercing shots, +2 Armor."],
          ["Chameleon","III","A","A","A","+20% Dodge while standing still, when you're earning."],
          ["Barricade","III","A","A","B","+8 Armor while standing still."],
          ["Community Support","III","—","A","A","+1% Attack Speed per living enemy, -2 Armor. Your win reward."],
          ["Statue","III","B","B","C","+40% Attack Speed standing still; you get more while moving."],
          ["Bag","I","A","B","C","+15 materials per crate, -1% Speed."]
        ] },
      fossilSection("Speed fossils offset the slow from holding materials.", defFossils({"Left Leg":"A: Speed against the held-materials slow"})),
      petSection("A pet that holds aggro gives you room to stand still.", defPets({"Scapegoat":"S: stand still while enemies chase it","Bot-O-Mine":"B: a structure; whether it counts for +2 Armor isn't documented"})),
      { h:"DLC notes", notes: [ "Update 1.1.0.0: the -50% materials now also applies to trees.", EARLY ] }
    ],
    sources: src("Streamer")
  };

  D["Baby"] = {
    lead: "Baby starts with one weapon slot and gains one per level-up instead of a stat upgrade, up to 24. Levels need 130% more XP, but Baby gets +12 Harvesting, -20% item prices and a weapon in every shop. Every stat comes from items.",
    sections: [
      { h:"Weapons", p:"Cheap weapons you can buy in bulk as slots open.", head:WPN_HEAD,
        rows: [
          ["A","Stick","Primitive","I–IV","8–12 damage, 1.29–1.09s. Cheap, and on the starting list."],
          ["A","Pistol","Gun","I–IV","12–50 damage. A starting option; buy SMGs as slots open."],
          ["A","Knife","Precise","I–IV","9–25 damage, crits x2.5–x4."],
          ["A","Wrench","Tool","I–IV","Each one spawns a turret."],
          ["B","Fist","Unarmed","I–IV","8–64 damage, 0.78–0.59s."]
        ] },
      { h:"Item ratings by wave", p:"XP Gain is weapon slots. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Diploma","IV","—","S","A","+50% XP Gain, +10 Engineering, -3 Max HP."],
          ["Celery Tea","II","A","A","C","+5% XP Gain each wave, +50% next wave, but +100% enemy health next wave. Your win reward."],
          ["Spider","IV","—","A","S","+12% Damage, +6% Attack Speed per different weapon."],
          ["Jelly","I","A","A","B","+1 Max HP per different weapon."],
          ["Potato","IV","—","A","A","A little of every stat. You get none from levels."],
          ["Medal","II","A","A","B","+3 Max HP, +3% Damage, +1 Armor, +3% Speed."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Focus","IV","C","C","C","-3% Attack Speed per different weapon."]
        ] },
      fossilSection("Fossils are a stat source that doesn't need levels.", defFossils({"Right Arm":"S: Max HP you can't get from levels","Left Arm":"S: Armor you can't get from levels"})),
      petSection("Standard pet ratings.", defPets({})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Baby")
  };

  D["Vampire"] = {
    lead: "Vampire gets +2% Damage per 1% missing HP, +1% Life Steal per 3%, and +1 Armor per 5%. It starts at -60% Damage with -100 HP Regen, no healing from consumables, and Max HP gains cut by 25%. At half HP that's +100% Damage (+40% net), +16% Life Steal and +10 Armor.",
    sections: [
      { h:"Weapons", p:"Fast weapons let Life Steal hold you at a low HP.", head:WPN_HEAD,
        rows: [
          ["S","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s."],
          ["A","Sharp Tooth","Primitive, Precise","I–IV","5–15 damage that scales with 50–100% of your Life Steal, which grows as HP falls."],
          ["A","Knife","Precise","I–IV","9–25 damage, crits x2.5–x4."],
          ["A","Spiky Shield","Medieval, Blunt","I–IV","Scales with 100–200% Armor, which Vampire gains at low HP."],
          ["B","Flamethrower","Elemental, Heavy","II–IV","Bought later. Pierces 99 and burns."]
        ] },
      { h:"Item ratings by wave", p:"Low HP is the plan. Healing items are wasted. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bloody Hand","IV","—","S","S","+10% Life Steal, +2% Damage per 1% Life Steal. The 1 damage per second keeps you low."],
          ["Sad Tomato","III","A","A","B","Start waves at -50% HP, where Vampire wants to be. The +8 Regen is cancelled by -100."],
          ["Tardigrade","III","A","S","S","Nullifies one hit each wave: insurance at low HP."],
          ["Cape","IV","—","S","S","+20% Dodge, +5% Life Steal."],
          ["Coffee","I","S","A","B","+10% Attack Speed."],
          ["Decomposing Flesh","II","A","B","C","+1% Life Steal and -1 Max HP each level-up. Your win reward."],
          ["Jellyshield","III","A","A","A","Blocks projectiles."],
          ["Weird Ghost","I","C","C","C","Starts the next wave at 1 HP. Too low."],
          ["Garden, Lemonade","II / I","C","C","C","Consumables heal 0."]
        ] },
      fossilSection("Life Steal fossils help; regen is cancelled.", defFossils({"Jaw":"S: Life Steal on top of the missing-HP bonus","Spine":"C: regen is -100","Right Arm":"B: Max HP is cut 25%"})),
      petSection("Pets that block hits matter at low HP.", defPets({"Doc Moth":"B: doubles Life Steal; the regen half does nothing","Jellyshield":"S: blocks projectiles"})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Ashes adds Damage and Attack Speed.", EARLY ] }
    ],
    sources: src("Vampire")
  };

  D["Chunky"] = {
    lead: "Chunky gets +25% from Max HP gains and +1% Damage per 3 Max HP, and heals +3 more from consumables (6 in total). Life Steal is -100%, HP Regen and Dodge gains are halved, and Speed can't change at all. The wiki's plan: Max HP and Armor, with fruit and Luck as the main healing.",
    sections: [
      { h:"Weapons", p:"Weapons that scale with Max HP, from the wiki's weapon notes.", head:WPN_HEAD,
        rows: [
          ["S","Potato Thrower","Support","II–IV","3–10 damage (40% Ranged, 20% Max HP), 0.45–0.28s, 500 range. Your win reward."],
          ["A","Chopper","Blade","I–IV","6–30 damage, also scales with 15–30% Max HP. The wiki notes it boosts consumable healing too."],
          ["A","Spoon","Blunt","I–IV","10–25 damage, also scales with 15–25% Max HP."],
          ["A","Spiky Shield","Medieval, Blunt","I–IV","Scales with Armor, which Chunky stacks."],
          ["B","Ghost Scepter","Ethereal","I–IV","+1 Max HP per 20/18/16/12 kills in a wave."],
          ["B","Rock, Cacti Club","Primitive","I–IV","Primitive class bonus is Max HP."]
        ] },
      { h:"Item ratings by wave", p:"Speed drawbacks are free. Speed bonuses are wasted. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Warrior Helmet","III","S","S","A","+3 Armor, +5 Max HP. The -5% Speed doesn't apply."],
          ["Stone Skin","III","A","S","S","+1 Max HP per permanent Armor."],
          ["Helmet","I","S","A","B","+1 Armor; the -2% Speed doesn't apply."],
          ["Lemonade, Weird Food","I","S","A","B","+1 / +2 HP from consumables. The wiki calls consumables your only reliable healing."],
          ["Tree, Garden","I / II","S","A","B","More fruit. Tree also means more item drops with high Luck."],
          ["Snail","II","A","A","B","-8% Enemy Speed. The wiki: slow enemies when you can't speed up."],
          ["Cute Monkey","I","A","A","B","The wiki: about 8 HP per 100 materials collected."],
          ["Padding","II","B","B","B","Max HP from Padding's ability doesn't add Damage (wiki)."],
          ["Torture","IV","—","B","B","+15 Max HP and 5 HP per second, but no other healing. The wiki warns it blocks consumables."],
          ["Esty's Couch","IV","C","C","C","The wiki: Speed can't drop, so it's just +5 Max HP."]
        ] },
      fossilSection("Max HP and Armor fossils. Speed, Life Steal and Dodge are cut.", defFossils({"Right Arm":"S: Max HP x1.25, and Dodge is halved anyway","Left Arm":"S: Armor; the -3% Speed doesn't apply","Left Leg":"C: Speed can't change","Jaw":"C: Life Steal is -100%","Spine":"B: regen is halved; the -5% Damage is real"})),
      petSection("Hungry Hungry Dinosaur scales with Max HP but eats your healing.", defPets({"Hungry Hungry Dinosaur (PD)":"B: scales with Max HP, but eats the fruit you heal with","Doc Moth":"C: Life Steal is gone and regen is halved"})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Chunky")
  };

  D["Generalist"] = {
    lead: "Generalist gets +2 Melee Damage per 1 Ranged Damage and +1 Ranged Damage per 2 Melee Damage, but can hold only 3 melee and 3 ranged weapons. Ranged Damage is the better buy, because each point adds 2 Melee.",
    sections: [
      { h:"Weapons", p:"Three of each. Weapons that scale with both stats double-dip.", head:WPN_HEAD,
        rows: [
          ["S","Harpoon Gun","Naval, Gun","II–IV","5–20 damage scaling with 100% Ranged and 100% Melee. Pierces 3–5, slows, 800–900 range."],
          ["A","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s."],
          ["A","Knife","Precise","I–IV","9–25 damage (80% Melee), crits x2.5–x4."],
          ["A","Spear","Primitive","I–IV","15–60 damage (100% Melee), 350–500 range."],
          ["B","Revolver","Gun","I–IV","15–40 damage, 100–200% Ranged scaling."]
        ] },
      { h:"Item ratings by wave", p:"Count the conversion before buying. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Big Arms","IV","—","S","S","+12 Melee, +6 Ranged (worth another +12 Melee). Your win reward."],
          ["Scope","II","S","A","B","+2 Ranged (+4 Melee), +25 Range, -7% Attack Speed."],
          ["Small Magazine","II","S","A","B","+2 Ranged, +10% Attack Speed, -6% Damage."],
          ["Lens","I","S","B","C","+1 Ranged (+2 Melee), -5 Range."],
          ["Handcuffs","III","—","A","S","+8 Melee, +8 Ranged, +8 Elemental, but Max HP is capped where it is."],
          ["Alloy","III","A","A","B","+3 to every damage stat, +5% Crit Chance, -6% Dodge."],
          ["Spider","IV","—","A","S","+12% Damage, +6% Attack Speed per different weapon (up to six)."],
          ["Mastery","II","C","C","C","+6 Melee, -3 Ranged. The -3 Ranged also removes 6 Melee, so it nets zero."]
        ] },
      fossilSection("Standard fossil ratings.", defFossils({})),
      petSection("Standard pet ratings.", defPets({})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Harpoon Gun is the best weapon for Generalist's split.", EARLY ] }
    ],
    sources: src("Generalist")
  };

  D["Farmer"] = {
    lead: "Farmer has +20 Harvesting, which grows an extra 3% at the end of each wave, and gets +1 Harvesting from each consumable eaten at full HP. Enemies drop 50% fewer materials, and since update 1.1.0.0 so do trees. Survive the early waves cheaply, then outspend the game.",
    sections: [
      { h:"Weapons", p:"Weapons that feed Harvesting or fruit early, then anything strong.", head:WPN_HEAD,
        rows: [
          ["S","Pruner","Support","I–IV","Spawns a garden that makes a fruit every 15–10s. Fruit at full HP is +1 Harvesting each."],
          ["A","Sickle","Support","I–IV","5–15 damage plus 10–25% of your Harvesting."],
          ["A","Hand","Unarmed, Support","I–IV","+3/+6/+12/+25 Harvesting."],
          ["B","Double Barrel Shotgun","Gun","I–IV","Wave clear once money comes in."]
        ] },
      { h:"Item ratings by wave", p:"Harvesting early, damage late. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Crown","III","S","A","C","Harvesting grows an extra 8% each wave, on top of your 3%."],
          ["Wheelbarrow","II","S","A","C","+16 Harvesting, -1 Armor."],
          ["Bowler Hat","III","A","A","C","+18 Harvesting, +15 Luck."],
          ["Garden","II","S","A","B","A fruit every 15s: Harvesting at full HP."],
          ["Fruit Basket","II","A","A","B","More fruit drops, -3 HP Regen."],
          ["Mushroom","I","A","B","C","+3 HP Regen to stay at full HP for the fruit bonus."],
          ["Wheat","III","A","A","B","+10 Harvesting, +4 Melee, +2 Ranged. Your win reward."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Fertilizer","I","A","B","C","+8 Harvesting, -1 Melee Damage."]
        ] },
      fossilSection("Tail is the one fossil that suits Farmer's economy.", defFossils({"Tail":"S: Harvesting early"})),
      petSection("Lootworm doubles materials.", defPets({"Lootworm":"S: 10% chance to double each material"})),
      { h:"DLC notes", notes: [ "Stop buying Harvesting around wave 12; there's no time left for it to pay back.", EARLY ] }
    ],
    sources: src("Farmer")
  };

  D["Fisherman"] = {
    lead: "Fisherman has +5 Max HP and +20 Harvesting. Every shop sells a free Bait, and each Bait gives +2 Harvesting on top of its own +8% Damage. But every Bait makes special enemies spawn in all future waves, and enemies drop 50% fewer materials.",
    sections: [
      { h:"Weapons", p:"Reach and range to deal with the special enemies.", head:WPN_HEAD,
        rows: [
          ["A","Spear","Primitive","I–IV","15–60 damage, 350–500 range."],
          ["A","Laser Gun","Gun","I–IV","40–100 damage (400–600% Ranged), 500 range."],
          ["A","Revolver","Gun","I–IV","15–40 damage, 0.43–0.38s."],
          ["B","Crossbow","Precise, Medieval","I–IV","10–18 damage, 30–45% crit."],
          ["B","Knife","Precise","I–IV","9–25 damage, crits x2.5–x4."]
        ] },
      { h:"Item ratings by wave", p:"Bait is free, but each one adds enemies forever. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bait","II","A","S","A","Free: +8% Damage and +2 Harvesting. Take one per shop only once your damage is ahead."],
          ["Lure","II","A","A","B","+2 HP Regen, 2 extra loot aliens next wave. Your win reward."],
          ["Crown","III","S","A","C","Harvesting grows an extra 8% each wave."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Warrior Helmet","III","A","A","A","+3 Armor, +5 Max HP."],
          ["Bag","I","S","B","C","+15 materials per crate."]
        ] },
      fossilSection("Standard fossil ratings.", defFossils({"Tail":"A: more Harvesting on top of the Bait"})),
      petSection("Standard pet ratings.", defPets({})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Fisherman", [["Brotato Wiki – Bait", WIKI + "Bait"]])
  };

  D["Dwarf"] = {
    lead: "Dwarf (Abyssal Terrors) gets +1 Engineering whenever one melee hit kills 6 or more enemies, and +1 Melee Damage per 2 permanent Engineering. It can't use ranged weapons, has -20% Dodge and -100% Attack Speed, and gets half the benefit from Attack Speed items. The wiki warns that explosion and structure kills don't count, so weapons like Plank can steal your kills.",
    sections: [
      { h:"Weapons", p:"Big, wide hits that kill six at once. Dwarf's full starting list is Hammer, Wrench, Brick and Mace.", head:WPN_HEAD,
        rows: [
          ["S","Hammer","Blunt, Heavy","II–IV","40–120 damage (150–200% Melee), 1.67–1.5s, +2/+4/+6 Knockback."],
          ["S","War Hammer","Blunt, Tool","III–IV","100/200 damage (150–200% Melee and Engineering), 2.11–1.95s. Your win reward."],
          ["A","Brick","Blunt","I–IV","30–120 damage (50–100% Melee and Engineering). 1% chance to break for 10–200 materials."],
          ["B","Mace","Heavy, Medieval","II–IV","40–100 damage. It scales negatively with Attack Speed, so -100% may add damage (the site's reading)."],
          ["B","Wrench","Tool","I–IV","Spawns a turret. Turret kills don't give Engineering."]
        ] },
      { h:"Item ratings by wave", p:"Engineering is also Melee Damage. Attack Speed is halved. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Robot Arm","IV","—","S","S","+3 Melee and +3 Engineering every wave, -1 Max HP."],
          ["Toolbox","III","S","A","B","+6 Engineering. The -8% Attack Speed is halved."],
          ["Cog","II","S","A","B","+4 Engineering, +1 Knockback, -4% Damage."],
          ["Mammoth","IV","—","S","S","+20 Melee Damage, +5 HP Regen."],
          ["Alloy","III","A","A","A","+3 Melee and +3 Engineering, +5% Crit Chance."],
          ["Exoskeleton","IV","—","A","A","+3 Armor, +5 Engineering, +5% Speed."],
          ["Lantern (AT)","IV","—","A","A","+10% Damage, +50 Range, a knockback pulse."],
          ["Coffee, Improved Tools","I / III","C","C","C","Attack Speed, halved."]
        ] },
      fossilSection("Right Leg's Range makes six-kill swings easier.", defFossils({"Right Leg":"A: Range; the Attack Speed drawback is halved","Left Leg":"B: Speed to herd packs"})),
      petSection("Pets that kill steal your six-kill hits.", defPets({"Catling Gun":"C: steals kills","Mosquitor (PD)":"A: weakens enemies, so more die to one swing"})),
      { h:"DLC notes", notes: [ "Dwarf is an Abyssal Terrors character.", EARLY ] }
    ],
    sources: src("Dwarf")
  };

  D["Druid"] = {
    lead: "Druid (Abyssal Terrors) has +5 Max HP and +15 Luck. Enemies drop more fruit, and each fruit has a 33% chance of +1 Luck. A third of fruit is poisoned and ignores Dodge and Armor, and you have no HP Regen or Life Steal. The wiki adds that the extra fruit is a 3% fallback chance, and poisoned fruit can still give Luck.",
    sections: [
      { h:"Weapons", p:"Weapons that scale with Luck.", head:WPN_HEAD,
        rows: [
          ["S","Flute","Musical","I–IV","6–15 damage (50% Ranged, 10–25% Luck), 1.03–0.78s."],
          ["A","Lute","Musical, Support","I–IV","4–16 damage (50% Melee, 10–25% Luck)."],
          ["A","Pruner","Support","I–IV","A garden that makes fruit every 15–10s: Luck and healing."],
          ["B","Slingshot","Primitive","I–IV","10–20 damage, bounces. The fallback without instruments."]
        ] },
      { h:"Item ratings by wave", p:"Fruit is your healing and your Luck. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Cauldron (AT)","II","S","A","B","+50% pickup range, +20% Damage for 2s after eating. The -2 Regen is free. Your win reward."],
          ["Pearl (AT)","II","A","S","S","+1% Damage per 10 permanent Luck."],
          ["Lucky Charm","III","A","S","A","+30 Luck, -2 Melee, -1 Ranged."],
          ["Panda","IV","—","A","A","+12 Max HP, +25 Luck."],
          ["Garden, Fruit Basket","II","S","A","B","More fruit. Fruit Basket's -3 Regen is free."],
          ["Lemonade, Weird Food","I","A","A","B","More HP from fruit."],
          ["Lucky Coin","IV","—","A","A","+2 Luck per 1% Crit Chance, -2 Armor."],
          ["Mushroom, Bloody Hand","I / IV","C","C","C","Regen and Life Steal are -100."]
        ] },
      fossilSection("Max HP and Armor fossils. Regen and Life Steal fossils are wasted.", defFossils({"Right Arm":"S: Max HP to survive poisoned fruit","Jaw":"C: Life Steal is -100%","Spine":"C: regen is -100"})),
      petSection("Hungry Hungry Dinosaur eats your fruit.", defPets({"Hungry Hungry Dinosaur (PD)":"C: eats your fruit","Doc Moth":"C: doubles nothing"})),
      { h:"DLC notes", notes: [ "Druid is an Abyssal Terrors character. Engineering items are halved.", EARLY ] }
    ],
    sources: src("Druid")
  };

  D["Hiker"] = {
    lead: "Hiker (Abyssal Terrors) earns 5 materials per 10 steps and +1 Max HP per 80 steps during a wave. Speed gains are boosted 10%, and enemies drop 50% fewer materials. The wiki has the numbers: about 3.33 steps a second at base Speed (3.17 with Hiker's -5%), more with Speed. Walking into a wall doesn't count.",
    sections: [
      { h:"Weapons", p:"Weapons that work while you keep moving.", head:WPN_HEAD,
        rows: [
          ["S","Jousting Lance","Medieval","I–IV","20–50 damage, also 30–50% of your Speed. +2–5% Speed, but -10–25% Damage standing still."],
          ["A","Hiking Pole","Support","I–IV","12–30 damage (50% Melee, 10–20% Range)."],
          ["B","Pistol","Gun","I–IV","12–50 damage. Ranged option."],
          ["B","Taser","Support, Elemental","I–IV","Slows enemies so you can circle them."]
        ] },
      { h:"Item ratings by wave", p:"Speed is income, Max HP and damage. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Power Generator","III","A","S","S","+1% Damage per permanent 1% Speed, -5% Damage."],
          ["Wings","III","S","A","A","+10% Speed, +30 Range."],
          ["Fin","III","A","A","B","+10% Speed, +3% Life Steal, -8 Luck."],
          ["Beanie","I","S","A","B","+4% Speed, -6 Range."],
          ["Scarf (AT)","III","A","A","B","+4% Speed, +4 Regen, +4 Melee, but +25% enemy speed next wave. Your win reward."],
          ["Medal","II","A","A","B","+3% Speed and a little of everything."],
          ["Statue, Barricade","III","C","C","C","Stand-still bonuses."],
          ["Esty's Couch","IV","C","C","C","-20% Speed."]
        ] },
      fossilSection("Left Leg's Speed is boosted 10% for Hiker.", defFossils({"Left Leg":"S: Speed, boosted 10%","Left Arm":"B: its -3% Speed costs steps"})),
      petSection("Standard pet ratings.", defPets({})),
      { h:"DLC notes", notes: [ "Hiker is an Abyssal Terrors character. Plastic Boots (PD) stops puddles on your path.", EARLY ] }
    ],
    sources: src("Hiker")
  };

  D["Renegade"] = {
    lead: "Renegade has +2 projectiles, +1 pierce and +10% Damage per different Tier I item. It starts at -400% Damage with -50% accuracy, can't use melee weapons, and gets only 20% of any %Damage. The wiki clarifies: the cut hits %Damage and Explosion Damage but not flat Ranged Damage, and each new Tier I item gives +2% after it. The shop marks Tier I items you don't own with Renegade's face.",
    sections: [
      { h:"Weapons", p:"The wiki's point: +2 projectiles triples a single-shot weapon, but a Double Barrel Shotgun only goes from 4 to 6 (+50%).", head:WPN_HEAD,
        rows: [
          ["S","Laser Gun","Gun","I–IV","40–100 damage with 400–600% Ranged scaling. Three beams, and flat Ranged isn't cut."],
          ["S","Revolver","Gun","I–IV","15–40 damage, 100–200% Ranged scaling, 0.43–0.38s."],
          ["A","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s, now three bullets at a time."],
          ["A","Medical Gun","Medical, Gun","I–IV","10–30 damage (100% Ranged)."],
          ["B","Double Barrel Shotgun","Gun","I–IV","Only +50% from the extra projectiles."]
        ] },
      { h:"Item ratings by wave", p:"Flat Ranged Damage and every new Tier I item. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Fairy","III","A","S","S","+1 HP Regen per different Tier I item, -3 per Tier IV. Your win reward."],
          ["Small Magazine","II","S","A","A","+2 Ranged, +10% Attack Speed. The -6% Damage is cut 80%."],
          ["Scope","II","S","A","B","+2 Ranged, +25 Range."],
          ["Lens, Mutation","I","S","A","B","+1 Ranged, and new Tier I items."],
          ["Any Tier I item you don't own","I","S","S","A","+2% Damage each after the cut, plus Fairy's regen."],
          ["Alloy","III","A","A","B","+3 Ranged, +5% Crit Chance."],
          ["Glass Cannon, Cyclops Worm","III / II","C","C","C","%Damage, cut 80%."]
        ] },
      fossilSection("Tooth is a Tier I fossil, so it may also count as a new Tier I item (not confirmed).", defFossils({"Tooth":"B: may count as a new Tier I item"})),
      petSection("Standard pet ratings.", defPets({})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Renegade")
  };

  D["Vagabond"] = {
    lead: "Vagabond can't hold two of the same weapon, but every equipped weapon counts toward the class bonuses of the others. Vagabond has -5 Armor and -5% Dodge, and gets half the benefit from Luck and Harvesting. The wiki lists a hidden bonus: shops never offer a lower tier of a weapon you hold, or that weapon at all once yours is Tier IV, so upgrades come faster.",
    sections: [
      { h:"Weapons", p:"Six different weapons. Since each counts for the others' classes, mixing classes is the point.", head:WPN_HEAD,
        rows: [
          ["A","Revolver","Gun","I–IV","15–40 damage, 100–200% Ranged scaling."],
          ["A","Laser Gun","Gun","I–IV","40–100 damage (400–600% Ranged)."],
          ["A","Crossbow","Precise, Medieval","I–IV","10–18 damage, 30–45% crit."],
          ["A","Spear","Primitive","I–IV","15–60 damage, 350–500 range."],
          ["B","Spiky Shield","Medieval, Blunt","I–IV","Scales with Armor; offsets the -5."]
        ] },
      { h:"Item ratings by wave", p:"Items that count different weapons are made for Vagabond. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Spider","IV","—","S","S","+12% Damage, +6% Attack Speed per different weapon: +36% with six."],
          ["Jelly","I","S","A","B","+1 Max HP per different weapon. Your win reward."],
          ["Warrior Helmet","III","A","A","A","+3 Armor, +5 Max HP."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Focus","IV","C","C","C","-3% Attack Speed per different weapon: -18%."],
          ["Lucky Charm, Wheelbarrow","III / II","C","C","C","Luck and Harvesting are halved."]
        ] },
      fossilSection("Armor fossils offset the -5.", defFossils({"Tail":"C: Harvesting is halved"})),
      petSection("Standard pet ratings.", defPets({})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Ashes helps any mixed loadout.", EARLY ] }
    ],
    sources: src("Vagabond")
  };

  D["Glutton"] = {
    lead: "Glutton has +50 Luck, and every consumable explodes for 10 (+500%) when picked up. Each one eaten at full HP adds +1% Explosion Damage. Items cost 25% more and XP Gain is -25%. The wiki's notes: Pickup Range doesn't pull fruit at full HP, so you walk onto it. Since update 1.1.9.0 the explosion crits with your Crit Chance.",
    sections: [
      { h:"Weapons", p:"Wave clear keeps you at full HP. The wiki calls Pruner quite powerful.", head:WPN_HEAD,
        rows: [
          ["S","Pruner","Support","I–IV","A garden that makes a fruit every 15–10s: more explosions."],
          ["A","Shredder","Gun, Explosive","I–IV","Exploding, piercing shots. Explosion Damage boosts it too."],
          ["A","Chopper","Blade","I–IV","6–30 damage plus 15–30% Max HP."],
          ["A","Lute, Flute","Musical","I–IV","10–25% Luck scaling, and you start with +50."],
          ["B","Plank","Explosive, Elemental","I–IV","Explosive class bonus."]
        ] },
      { h:"Item ratings by wave", p:"More fruit, bigger explosions, and staying at full HP. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Spicy Sauce","II","S","S","A","The wiki: it adds its damage to your explosion, triggers 100% of the time, and uses your bigger explosion. Your win reward."],
          ["Explosive Shells","IV","—","S","S","+60% Explosion Damage, +15% Explosion Size, -15% Damage."],
          ["Garden","II","S","A","B","A fruit every 15s."],
          ["Tree","I","S","A","B","More trees, more fruit (the wiki's suggestion)."],
          ["Plastic Explosive","III","A","A","A","+25% Explosion Size."],
          ["Lemonade, Weird Food","I","A","A","B","The wiki suggests them: more healing from all that fruit."],
          ["Mushroom, Shmoop","I / III","A","A","B","Regen keeps you at full HP for the bonus."],
          ["Fruit Basket","II","A","A","B","More fruit; the -3 Regen does hurt here."]
        ] },
      fossilSection("Regen and Max HP keep you at full HP.", defFossils({"Spine":"A: regen keeps you full"})),
      petSection("Hungry Hungry Dinosaur eats the fruit you explode.", defPets({"Hungry Hungry Dinosaur (PD)":"C: eats your fruit","Doc Moth":"A: doubles regen to stay full"})),
      { h:"DLC notes", notes: [ EARLY ] }
    ],
    sources: src("Glutton", [["Brotato Wiki – Spicy Sauce", WIKI + "Spicy_Sauce"]])
  };

  D["Arms Dealer"] = {
    lead: "Arms Dealer pays 95% less for weapons and gets +30 Harvesting, and Damage modifications count 33% more. Every shop sells a weapon, and you start with a Dangerous Bunny for a free reroll. The catch: all your weapons are destroyed when you enter a shop, so you rebuild six each wave. Pistol is the only starting weapon.",
    sections: [
      { h:"Weapons", p:"Whatever the shop shows. Buy the highest tiers, since you never combine.", head:WPN_HEAD,
        rows: [
          ["A","Highest-tier weapons on offer","—","—","At 5% of the price, a Tier IV weapon is cheap."],
          ["A","Sickle","Support","I–IV","Harvesting scaling suits +30 Harvesting. A common anchor."],
          ["B","Pistol","Gun","I–IV","The only starting weapon, and you lose it at the first shop."]
        ] },
      { h:"Item ratings by wave", p:"Items stay with you; weapons don't. %Damage counts a third more. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Glass Cannon","III","S","S","A","+25% Damage, boosted a third."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed, +100 Range."],
          ["Spyglass (AT)","II","S","A","B","-25% reroll price. More shop weapons to choose from."],
          ["Cyclops Worm, Missile","II","A","A","B","+12% / +10% Damage."],
          ["Anvil","IV","—","A","A","Upgrades a random weapon on shop entry, or +2 Armor with none. Your win reward. Whether it acts before the weapons vanish isn't documented."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Mastery, Scope","II","C","C","C","Stats for one weapon type before you know the next shop."],
          ["Recycling Machine","II","C","C","C","Weapons are destroyed, not recycled."]
        ] },
      fossilSection("Fossils are items, so they survive the shop.", defFossils({"Tail":"B: more Harvesting on top of +30"})),
      petSection("Pets are items too, so they persist.", defPets({"Catling Gun":"A: damage that survives every shop"})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Spyglass makes rerolling cheaper.", EARLY ] }
    ],
    sources: src("Arms_Dealer", [["Brotato Wiki – Anvil", WIKI + "Anvil"]])
  };

  D["Romantic"] = {
    lead: "Romantic (Abyssal Terrors) has a chance to charm an enemy below 25% HP on hit, for 8 seconds, and +50 Range on melee weapons. It gains +1 Curse every wave, and every 5 Curse costs 3% Damage and 1 Armor. The wiki's notes: burning and random-target effects like Cyberball don't charm, but structures and spawned projectiles do. Charmed enemies still drop materials, but those charmed at wave end drop no crates.",
    sections: [
      { h:"Weapons", p:"Sword isn't on Romantic's starting list. These are, apart from the shop buys.", head:WPN_HEAD,
        rows: [
          ["A","Hatchet","Primitive","I–IV","7–45 damage, 0.68–0.63s, +20% Attack Speed scaling. Lots of hits means lots of charm rolls."],
          ["A","Cacti Club","Primitive, Heavy","I–IV","Each hit spawns 3–6 projectiles, and spawned projectiles can charm."],
          ["A","Chopper","Blade","I–IV","6–30 damage plus 15–30% Max HP."],
          ["A","Flute","Musical","I–IV","Romantic's win reward, and also a starting option. 6–15 damage (50% Ranged, 10–25% Luck)."],
          ["B","Sword","Blade, Medieval","II–IV","Buy it later: 30–65 damage with your +50 Range."]
        ] },
      { h:"Item ratings by wave", p:"Keep Curse low. Structures can charm. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Turret","I","A","A","B","Turret hits can charm (wiki)."],
          ["Alien Eyes","II","A","A","B","Spawned projectiles can charm (wiki)."],
          ["Laser Turret","III","A","A","A","Piercing turret hits, which can charm."],
          ["Warrior Helmet","III","A","A","A","+3 Armor, +5 Max HP against the Armor loss."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Cyberball","II","C","C","C","Random-target damage doesn't charm."],
          ["Fish Hook (AT)","II","C","C","C","+1 Curse and curses locked items."]
        ] },
      fossilSection("Armor fossils offset the Curse.", defFossils({"Left Arm":"S: Armor the Curse takes away"})),
      petSection("Standard pet ratings.", defPets({})),
      { h:"DLC notes", notes: [ "Romantic is an Abyssal Terrors character. Cursed items add Curse, so pass on them.", EARLY ] }
    ],
    sources: src("Romantic")
  };

  // ---- D tier (Nov 17 2026) ----
  D["Gangster"] = {
    lead: "Gangster (Abyssal Terrors) can steal one item per shop, but can't lock items (they share a button) and pays 20% more. Stealing can spawn an extra elite next wave, and every elite or boss you kill makes all later ones stronger. The wiki adds that on higher Danger levels Gangster gets only elite waves, never hordes.",
    sections: [
      { h:"Stealing, from the wiki", notes: [
        "Chance an elite spawns: wave × item tier × item price ÷ 120, rounded to 0.1% and capped at 95%. Example (the site's sum): a Tier IV item priced 132 in wave 10 is a 44% risk.",
        "Price is in the formula, so Coupon lowers the risk.",
        "The caught elite comes in addition to the normal elite or bosses, so getting caught before wave 20 is the worst case.",
        "Each elite or boss you kill gives every later one +15% HP and +7.5% damage. Kill five before wave 20 and the bosses have +75% HP.",
        "Elites have only 50% HP in waves 1–8 and 75% in waves 9–12, which makes early steals safer to fight." ] },
      { h:"Weapons", p:"Single-target damage for the elites you'll keep meeting. All of these are on the starting list.", head:WPN_HEAD,
        rows: [
          ["A","Revolver","Gun","I–IV","15–40 damage (100–200% Ranged), 0.43–0.38s, 450 range."],
          ["A","Pistol","Gun","I–IV","12–50 damage, crits 10–25%, pierces 1."],
          ["A","Knife","Precise","I–IV","9–25 damage, crits x2.5–x4 at 20–50%."],
          ["B","Thief Dagger","Precise","I–IV","6–30 damage, 50–80% chance of 1 material on a crit kill."],
          ["B","Double Barrel Shotgun","Gun","I–IV","3x4 to 9x6 damage. Less needed with no hordes."],
          ["A","Grenade Launcher","Heavy, Explosive","II–IV","Your win reward. 12–30 damage, explodes and bounces."]
        ] },
      { h:"Item ratings by wave", p:"Steal early when the risk is low; buy damage against elites. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Silver Bullet","III","A","S","S","+25% against bosses and elites."],
          ["Coupon","I","S","A","B","-5% item prices, which also lowers the steal risk."],
          ["Giant Belt","IV","—","A","A","Crits deal 10% of current health, but only 1% on bosses and elites."],
          ["Sunglasses","II","A","A","B","+10% Crit Chance, -1 Armor."],
          ["Warrior Helmet","III","A","A","A","+3 Armor, +5 Max HP against elite hits."],
          ["Tardigrade","III","A","A","A","Nullifies one hit each wave."],
          ["Fish Hook (AT)","II","—","—","—","The wiki: Gangster can't find it (it needs locking)."]
        ] },
      fossilSection("Defense fossils for elite fights.", defFossils({})),
      petSection("Pets that pull aggro help in elite fights.", defPets({"Mosquitor (PD)":"S: +30% damage taken on elites","Scapegoat":"S: elites chase it"})),
      { h:"DLC notes", notes: [ "Gangster is an Abyssal Terrors character.", EARLY ] }
    ],
    sources: src("Gangster", [["Brotato Wiki – Enemies (elite HP by wave)", WIKI + "Enemies"]])
  };

  D["Sailor"] = {
    lead: "Sailor (Abyssal Terrors) deals +200% damage with Naval weapons against cursed enemies, and starts with +25 Curse and -25% Damage. Sailor can only equip Tier II weapons or better, Dodge caps at 20%, and Harvesting does nothing. The starting weapons are Anchor, Trident and Blunderbuss.",
    sections: [
      { h:"Weapons", p:"Naval weapons only get the +200%. Captain's Sword isn't a starting option; buy it later.", head:WPN_HEAD,
        rows: [
          ["S","Blunderbuss","Naval, Gun","II–IV","22–70 damage (110–170% Ranged), 5.2s, but the cooldown resets when you pick up a material. Pierces 2."],
          ["A","Anchor","Naval, Heavy","II–IV","45–110 damage (100–150% Melee plus another scaling), 1.92–1.81s, 175–225 range."],
          ["A","Trident","Naval, Medieval","II–IV","30–80 damage, 325 range. +30–50% against enemies above 80% HP."],
          ["A","Captain's Sword","Naval, Blade","III–IV","50/80 damage, +25/+50 per free weapon slot. Bought later."]
        ] },
      { h:"Item ratings by wave", p:"Curse makes more enemies cursed, and tougher. Harvesting is wasted. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Black Flag (AT)","III","A","S","A","+1 material per cursed kill, +5 Curse, but +10% enemies, health and damage."],
          ["Corrupted Shard (AT)","I","S","A","B","+3% Damage, +1 Curse, 12 materials."],
          ["Kraken's Eye (AT)","IV","—","A","A","+15 Max HP, +15 Curse, 50% chance to explode for 10 (+500%) when hit."],
          ["Seashell (AT)","IV","—","A","A","Every 5th ranged projectile gets +3 projectiles. For Blunderbuss."],
          ["Treasure Map (AT)","II","A","A","B","+20% chance of an extra item in a crate. Your win reward."],
          ["Warrior Helmet","III","A","A","A","+3 Armor, +5 Max HP. Dodge caps at 20%, so Armor carries defense."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Wheelbarrow, Crown","II / III","C","C","C","Harvesting changes are cut 100%."]
        ] },
      fossilSection("Tail's Harvesting is wasted; Armor and Max HP fossils carry defense.", defFossils({"Tail":"C: Harvesting is cut 100%","Right Arm":"S: Max HP; Dodge caps at 20% anyway"})),
      petSection("Standard pet ratings.", defPets({})),
      { h:"DLC notes", notes: [ "Sailor is an Abyssal Terrors character, unlocked by default with the DLC. Every Naval weapon is from the DLC.", EARLY ] }
    ],
    sources: src("Sailor", [["Brotato Wiki – Abyssal Terrors DLC", WIKI + "Abyssal_Terrors_DLC"]])
  };

  D["Ogre"] = {
    lead: "Ogre (Abyssal Terrors) makes an enemy explode for 10 damage plus scaling when one hit deals twice its max HP. It has +10 Melee Damage, but -50% Attack Speed and -10% Speed, and can't use ranged weapons. The wiki notes Ogre's first two special waves are always hordes.",
    sections: [
      { h:"Weapons", p:"Hammer isn't a starting option: start with Brick or Rock and buy Hammers from the shop.", head:WPN_HEAD,
        rows: [
          ["A","Brick","Blunt","I–IV","30–120 damage (50–100% Melee and Engineering), 1.39s. The biggest Tier I hit on Ogre's list."],
          ["A","Rock","Primitive, Blunt","I–IV","20–70 damage (100% Melee), crits 10–25%. Higher tiers add Armor and Max HP."],
          ["S","Hammer","Blunt, Heavy","II–IV","40–120 damage (150–200% Melee). Bought later."],
          ["A","Mace","Heavy, Medieval","II–IV","40–100 damage. Your win reward."],
          ["A","Plasma Sledge","Elemental, Explosive","III–IV","80/120 damage (150–200% Melee and Elemental), 25/50% chance to explode."],
          ["B","Spoon, Chopper","Blunt / Blade","I–IV","Scale with Max HP; lower per-hit damage."]
        ] },
      { h:"Item ratings by wave", p:"Damage per hit, not per second. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Mammoth","IV","—","S","S","+20 Melee Damage, +5 HP Regen, +5 Knockback."],
          ["Big Arms","IV","—","S","S","+12 Melee Damage, +6 Ranged, -3% Attack Speed."],
          ["Gnome","IV","—","S","A","+10 Melee, +10 Elemental, -20 Range."],
          ["Handcuffs","III","—","A","S","+8 Melee, Ranged and Elemental; Max HP capped where it is."],
          ["Explosive Shells","IV","—","A","S","+60% Explosion Damage, +15% Explosion Size. Boosts overkill explosions."],
          ["Plastic Explosive","III","A","A","A","+25% Explosion Size."],
          ["Night Goggles","IV","—","A","A","+15% Crit Chance, +50 Range. Crits help reach double damage."],
          ["Warrior Helmet","III","S","A","A","+3 Armor, +5 Max HP for the early hordes."],
          ["Coffee","I","C","C","C","Attack Speed matters less than hit size."]
        ] },
      fossilSection("Range fossils let a slow swing reach more enemies.", defFossils({"Right Leg":"A: Range for slow swings"})),
      petSection("Pets that clear small enemies cover your slow swings.", defPets({"Bonk Dog":"A: explosive area damage","Catling Gun":"A: clears what you miss"})),
      { h:"DLC notes", notes: [ "Ogre is an Abyssal Terrors character. Lantern (AT) adds +10% Damage and a knockback pulse.", EARLY ] }
    ],
    sources: src("Ogre")
  };

  D["Apprentice"] = {
    lead: "Apprentice gains +2 Melee, +1 Ranged, +1 Elemental and +1 Engineering every level, but loses 2 Max HP each time. By level 20 that's +40 Melee and -40 Max HP. Level fast, and buy Max HP from items to cover the loss.",
    sections: [
      { h:"Weapons", p:"Weapons that scale with several of the stats you gain.", head:WPN_HEAD,
        rows: [
          ["S","Plank","Explosive, Elemental","I–IV","10–30 damage scaling with 60–90% of Melee, Elemental and Engineering: three of your four level stats."],
          ["A","Quarterstaff","Primitive, Medieval","I–IV","10–30 damage, +2/+5/+9/+15% XP Gain. Your win reward."],
          ["A","Brick","Blunt","I–IV","30–120 damage (50–100% Melee and Engineering)."],
          ["A","Knife","Precise","I–IV","9–25 damage (80% Melee), crits x2.5–x4."],
          ["B","Wrench, Screwdriver","Tool","I–IV","Turrets that use your Engineering."]
        ] },
      { h:"Item ratings by wave", p:"XP Gain early, Max HP throughout. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Diploma","IV","—","S","A","+50% XP Gain, +10 Engineering, -3 Max HP."],
          ["Celery Tea","II","A","A","C","+50% XP Gain next wave, but +100% enemy health that wave."],
          ["Padding","II","A","S","S","+3 Max HP, +1 per 80 materials held."],
          ["Stone Skin","III","A","S","S","+1 Max HP per permanent Armor."],
          ["Warrior Helmet","III","S","A","A","+3 Armor, +5 Max HP."],
          ["Shmoop","III","A","A","B","+6 Max HP, +2 HP Regen."],
          ["Alloy","III","A","A","A","+3 to every damage stat and Engineering."],
          ["Barnacle (AT)","III","A","A","B","+35% stats from level upgrades. Whether it boosts Apprentice's own per-level stats isn't documented."],
          ["Handcuffs","III","C","C","C","Caps Max HP, which you keep losing."]
        ] },
      fossilSection("Right Arm's Max HP offsets the level loss.", defFossils({"Right Arm":"S: Max HP against -2 per level"})),
      petSection("Standard pet ratings.", defPets({})),
      { h:"DLC notes", notes: [ "Abyssal Terrors: Barnacle may scale your level-ups (not confirmed).", EARLY ] }
    ],
    sources: src("Apprentice")
  };

  D["Wounded"] = {
    lead: "Wounded dies in one hit. It has +5% Speed and +8 Harvesting, and shops and crates never offer items focused on Max HP, HP Regen, Life Steal or Armor. Wounded is unlocked by winning on Nightmare and unlocks Railgun, which is also on its starting list. The site's guide lists a starting Tardigrade; the wiki page doesn't mention it, so check in game.",
    sections: [
      { h:"Weapons", p:"Kill things before they reach you. Railgun is made for this character.", head:WPN_HEAD,
        rows: [
          ["S","Railgun","Gun, Heavy","I–IV","10–35 damage, also scales with 30–45% of your Dodge. +3–6 base damage every 5s until you're hit, and you never are. Pierces 1–3."],
          ["A","Slingshot","Primitive","I–IV","10–20 damage, bounces 1–4 times, 300 range."],
          ["A","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s, 400 range."],
          ["A","Icicle","Precise, Elemental","I–IV","10–40 damage, 400 range, pierces 1."],
          ["B","Taser","Support, Elemental","I–IV","Slows enemies around each projectile."],
          ["C","Melee","—","—","Getting close is how you die."]
        ] },
      { h:"Item ratings by wave", p:"Dodge, Speed and Range. Defensive items are removed. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Jellyshield","III","S","S","S","Blocks projectiles: each one is a run saved."],
          ["Cape","IV","—","S","S","+20% Dodge, and Railgun scales with Dodge."],
          ["Leather Vest","II","S","A","B","+6% Dodge."],
          ["Adrenaline","III","A","A","B","+5% Dodge; the heal does nothing."],
          ["Wings","III","S","A","A","+10% Speed, +30 Range."],
          ["Glasses","I","S","A","B","+20 Range."],
          ["Retromation's Hoodie","IV","—","A","A","+2% Attack Speed per 1% Dodge, but -80 Range."],
          ["Power Generator","III","A","A","A","+1% Damage per 1% Speed."],
          ["Statue","III","C","C","C","Standing still gets you hit."]
        ] },
      fossilSection("Max HP, regen, Life Steal and Armor are useless when one hit kills; those fossils are likely filtered out of shops anyway.", defFossils({"Right Arm":"C: Max HP is irrelevant","Left Arm":"C: Armor is irrelevant","Spine":"C: regen is irrelevant","Jaw":"C: Life Steal is irrelevant","Left Leg":"S: Speed","Right Leg":"A: Range"})),
      petSection("Pets that block or pull hits are worth everything.", defPets({"Jellyshield":"S: blocks projectiles","Scapegoat":"S: takes aggro","Doc Moth":"C: nothing to heal"})),
      { h:"DLC notes", notes: [ "Primal Dread: Plastic Boots (PD) stops ground puddles, which would kill you.", EARLY ] }
    ],
    sources: src("Wounded", [["Brotato Wiki – Railgun", WIKI + "Railgun"]])
  };

  // ---- Primal Dread, full dives (Nov 17 2026) ----
  // Character stats, starting weapons, restrictions, weapon and item numbers: brotato.fandom.com.
  // Ratings are site synthesis.
  var FW = "https://brotato.fandom.com/wiki/";
  function fsrc(name, extra){
    return [["Brotato Fandom Wiki – " + name.replace(/_/g, " "), FW + name],
      ["Brotato Fandom Wiki – Primal Dread (items, weapons, achievements)", FW + "Primal_Dread"]].concat(extra || [],
      [["Brotato Wiki – Items (base-game effects)", WIKI + "Items"], ["Brotato Unpacked – Pet mechanics","https://brotato.unpacked.wiki/topics/pets/"]]);
  }
  function pdWiki(facts, starters, extra){
    return { h:"From the fandom wiki", notes: facts.concat(["Starting weapons: " + starters + "."], extra || []) };
  }
  var PD_NOTE = "Primal Dread launched November 2, 2026. Stats, starting weapons and item effects here are from the fandom wiki; the ratings are the site's read and still early.";
  var WEB = "Fandom Wiki – ";

  D["Archaeologist"] = {
    lead: "Archaeologist (Primal Dread) spawns 4 dig sites each wave. Stand on one for 5–6 seconds to dig up a crate. Crates pay more: +75% materials from recycling them and +3% XP Gain each, plus +25% pickup range. In return enemies drop 50% fewer materials.",
    sections: [
      pdWiki(["Available from the start.", "Win reward: Dig Site (an extra dig site every 3 waves, -3 Luck)."],
        "Blowgun, Cacti Club, Carbon Bow, Chopper, Crowbar, Flail, Hatchet, Knife, Meat Tenderizer, Molotov Cocktail, Pan Flute, Quarterstaff, Rail Gun, Sharp Tooth, Shovel, Slingshot, Stick, Sticky Grenade, Taser, Tranq Rifle, Whip"),
      { h:"Weapons", p:"You have to stand still in contested ground, so pick a weapon that protects you while you dig.", head:WPN_HEAD,
        rows: [
          ["S","Meat Tenderizer (PD)","Blunt, Medical","I–IV","15–75 damage, scaling 100–150% with both Melee Damage and HP Regen, so the regen that keeps you alive on a site is also damage. A starter."],
          ["A","Shovel (PD)","Blunt, Tool","I–IV","12–68 damage with 15–30 knockback to push enemies off the site, and 0.5–2% of its kills dig up a crate. A starter."],
          ["A","Tranq Rifle (PD)","Gun, Precise","I–IV","15–60 damage at 500–800 range, and each hit slows enemies near the target by 50% for 2s. Good from a parked spot. A starter."],
          ["A","Crowbar (PD)","Tool","I–IV","Every 18 kills (12 at Tier IV) in a wave spawns a turret that keeps shooting while you dig. A starter."],
          ["B","Machine Gun (PD)","Gun, Heavy","I–IV","16–68 DPS, but not a starter and each one costs 3% Speed, which you need to reach all four sites."]
        ],
        notes: [ "Leaving a dig half-finished loses the progress, so clear first, then dig." ] },
      { h:"Item ratings by wave", p:"Stand-still items are rare elsewhere and exactly right here. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Coral (AT)","II","S","A","B","+10 HP Regen while standing still, -10 Range."],
          ["Barricade","III","A","S","A","+8 Armor while standing still, +3 Knockback, -5% Speed."],
          ["Statue","III","A","A","B","+40% Attack Speed while standing still, -10% Speed."],
          ["Bag","I","S","A","B","+15 materials per crate, and you open a lot of crates."],
          ["Treasure Map (AT)","II","A","A","B","+20% chance of an extra item in a crate."],
          ["Dig Site (PD)","II","A","B","C","One more dig site every 3 waves, -3 Luck. Worth more the earlier you buy it."],
          ["Plastic Boots (PD)","III","A","A","A","Puddles no longer affect you, -3% Speed. You can't always move off them."],
          ["Regeneration Potion","IV","—","A","A","+3 HP Regen, doubled below 50% HP."],
          ["Medikit","IV","—","A","A","+10 HP Regen, +2 more every 5 seconds this wave, -10 Luck."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Jellyshield","III","B","A","A","Blocks projectiles while you're parked."],
          ["Lost Organ (PD)","I","C","C","C","+6 Harvesting, but enemy drops are halved."]
        ] },
      fossilSection("Spine's regen keeps you alive on a dig site.",
        {"Spine":"S: regen while you stand still","Right Arm":"B: +1 Max HP, +1 per fossil","Left Arm":"A: +3 Armor, +1 per fossil","Left Leg":"A: Speed to reach all four sites",
         "Jaw":"B: Life Steal, but -3 regen","Right Leg":"B: Range to hit from the site","Skull":"A: +10% Damage, +3% per fossil","Tail":"C: Harvesting; drops are halved but crates pay well","Tooth":"C: only to push the count"}),
      petSection("Pets that fight or defend while you dig are worth the most.",
        {"Doc Moth":"A: doubles your regen; stand in its aura while digging","Jellyshield":"A: blocks projectiles","Scapegoat":"A: pulls enemies off the site",
         "Lootworm":"A in waves 1–6","Mosquitor (PD)":"B","Dino Egg (PD)":"B if bought by wave 10"}),
      { h:"DLC notes", notes: [ "Abyssal Terrors stand-still items (Coral) pair unusually well with this character.", PD_NOTE ] }
    ],
    sources: fsrc("Archaeologist", [[WEB + "Meat Tenderizer", FW + "Meat_Tenderizer"], [WEB + "Shovel", FW + "Shovel"]])
  };

  D["Survivor"] = {
    lead: "Survivor (Primal Dread) gets weapons only from crates: the shop sells none. It can hold up to 8 weapons and picks one extra starting weapon. More trees spawn and crates are 25% more likely, but enemies drop 25% fewer materials and consumables heal 2 less.",
    sections: [
      pdWiki(["Unlock: pick up 10 crates in one run.", "Win reward: Boomerang (6–17 damage; it flies back and hits again on the return)."],
        "Awl, Blowgun, Cacti Club, Carbon Bow, Chopper, Crowbar, Fist, Flail, Ghost Flint, Hatchet, Icicle, Knife, Lute, Meat Tenderizer, Molotov Cocktail, Pan Flute, Quarterstaff, Sharp Tooth, Shovel, Slingshot, Spiky Shield, Stick, Wand, Whip, Wrench"),
      { h:"Weapons", p:"Your two starters are the only weapons you choose, so pick ones that carry the early waves and keep helping later.", head:WPN_HEAD,
        rows: [
          ["S","Shovel (PD)","Blunt, Tool","I–IV","0.5–2% of its kills dig up a crate, and crates are your weapon source. 12–68 damage, scales with Luck too."],
          ["A","Meat Tenderizer (PD)","Blunt, Medical","I–IV","15–75 damage, the strongest raw starter on this list. Scales with Melee Damage and HP Regen."],
          ["A","Crowbar (PD)","Tool","I–IV","Turrets every 18–12 kills, and each turret hit makes enemies take 10% more damage (up to 30%)."],
          ["B","Carbon Bow (PD)","Precise","I–IV","30–45% crit, and each arrow picks one bonus (slow, pierce, burn or landmine), weighted to your highest stat."],
          ["?","Whatever crates give","—","—","You can't choose. Keep the best eight."]
        ] },
      { h:"Item ratings by wave", p:"General stats help whatever loadout the crates give you. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bag","I","S","A","B","+15 materials per crate, and crates are your weapon source."],
          ["Treasure Map (AT)","II","S","A","B","+20% chance of an extra item in a crate."],
          ["Tree","I","S","A","B","More trees, more crates."],
          ["Lumberjack Shirt","I","A","A","B","Trees die in one hit."],
          ["Dig Site (PD)","II","A","B","C","An extra dig site every 3 waves: one more crate."],
          ["Lucky Charm","III","A","A","B","+30 Luck for better crates."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage and Attack Speed help any weapon."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Cybernetic Arm (PD)","IV","—","B","B","+1 Weapon Slot. Whether it lifts Survivor's 8-weapon cap isn't documented."],
          ["Mastery, Scope","II","C","C","C","Stats tied to one weapon type before you know your loadout."]
        ] },
      fossilSection("General stats suit an unknown loadout.", defFossils({})),
      petSection("Lootworm breaks trees for crates.", defPets({"Lootworm":"S: breaks trees and collects materials"})),
      { h:"DLC notes", notes: [ PD_NOTE ] }
    ],
    sources: fsrc("Survivor", [[WEB + "Shovel", FW + "Shovel"], [WEB + "Boomerang", FW + "Boomerang"]])
  };

  D["Arsonist"] = {
    lead: "Arsonist (Primal Dread) turns explosions into fire puddles that scale with the explosion's size and deal 4x4 (+100% Elemental Damage) burning. Enemies that die burning have a 50% chance to leave one too. +5% Speed, but Melee, Ranged and Engineering changes are cut 100%.",
    sections: [
      pdWiki(["Unlock: have 12 fire puddles on the ground at once.", "Win reward: Magma Boots.",
        "Restrictions: Melee Damage and Ranged Damage items, and the matching level-up upgrades, don't appear."],
        "Lightning Shiv, Molotov Cocktail, Plank, Screwdriver, Shredder, Sticky Grenade, Torch, Wand"),
      { h:"Weapons", p:"Elemental Damage is your only damage stat, so the fire is the damage, not the weapon hit.", head:WPN_HEAD,
        rows: [
          ["S","Molotov Cocktail (PD)","Elemental","I–IV","4–12 damage, then a fire pool for 3–4.5s dealing 4x3 to 5x7 burning (+100% Elemental). A starter."],
          ["A","Sticky Grenade (PD)","Explosive","I–IV","Sticks to the target and explodes after 0.75s: every explosion is a puddle. Its hit scales with Ranged Damage, which you can't raise, but the puddle scales with Elemental. A starter."],
          ["A","Torch","Elemental","I–IV","The burning melee starter; burning kills leave puddles."],
          ["A","Flaming Brass Knuckles","Unarmed, Elemental","II–IV","20–80 damage plus 10x5 to 18x7 burning. Shop only."],
          ["A","Fireball","Explosive, Elemental","II–IV","Explodes and burns: puddles. Shop only."],
          ["A","Icicle","Precise, Elemental","I–IV","10–40 damage (100% Elemental). Shop only."]
        ] },
      { h:"Item ratings by wave", p:"Elemental Damage and more burning, in that order. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Snake","I","S","A","B","Burning spreads, so more burning deaths."],
          ["Scared Sausage","I","A","A","B","25% chance to burn."],
          ["Greek Fire","IV","—","S","S","Burning deals 10% of current HP."],
          ["Pyromaniac (PD)","IV","—","S","S","Burning from different weapons stacks instead of keeping only the strongest. -13% Crit Chance doesn't matter here."],
          ["Wolf Helmet","IV","—","S","S","+10 Elemental."],
          ["Explosive Shells","IV","—","A","S","More explosions to turn into puddles."],
          ["Plastic Explosive","III","A","A","A","+25% explosion size: bigger puddles."],
          ["Magma Boots (PD)","IV","—","A","A","A fire trail (5x3, +100% Elemental) and +9% Speed, but you take 1 damage per second."],
          ["Fried Rice","III","A","A","B","+1 HP Regen per burning enemy."],
          ["Exothermic Reaction (PD)","III","B","B","B","Evolved enemies have a 33% chance to explode on death, scaling with Evolution, not Elemental."]
        ],
        notes: [ "Melee and Ranged Damage items don't show up in Arsonist's shop, so there's nothing to skip there." ] },
      fossilSection("Defensive fossils.", defFossils({"Skull":"A: +10% Damage, +3% per fossil"})),
      petSection("Blazemander adds burning.", defPets({"Blazemander":"S: more burning deaths"})),
      { h:"DLC notes", notes: [ "Plastic Boots (PD) makes you immune to puddles; whether that includes your own fire isn't documented.", PD_NOTE ] }
    ],
    sources: fsrc("Arsonist", [[WEB + "Molotov Cocktail", FW + "Molotov_Cocktail"], [WEB + "Sticky Grenade", FW + "Sticky_Grenade"]])
  };

  D["Veteran"] = {
    lead: "Veteran (Primal Dread) gains +1% Damage for every 1% of missing HP, but HP isn't restored between waves and nothing heals you except fruit (-100 HP Regen, -100% Life Steal). +2 horde waves every 10 waves, and fruit isn't pulled in at wave end.",
    sections: [
      pdWiki(["Available from the start.", "Win reward: Carbon Bow.", "Restrictions: Life Steal and HP Regen items don't appear."],
        "Carbon Bow, Double Barrel Shotgun, Machine Gun, Molotov Cocktail, Rail Gun, SMG, Sticky Grenade, Tranq Rifle"),
      { h:"Weapons", p:"Wave clear for the extra hordes, from range, so you take fewer hits.", head:WPN_HEAD,
        rows: [
          ["A","Machine Gun (PD)","Gun, Heavy","I–IV","16–68 DPS. -3% Speed each, and you need Speed to reach fruit. A starter."],
          ["A","Double Barrel Shotgun","Gun","I–IV","4–6 piercing pellets. A starter; buy Combat Shotguns from Tier II."],
          ["A","Combat Shotgun (PD)","Gun","II–IV","7x6 to 10x8 pellets, 50–106 DPS. Sold from Tier II, so not a starter."],
          ["A","Tranq Rifle (PD)","Gun, Precise","I–IV","15–60 damage at 500–800 range; slows enemies near the target by 50%. A starter."],
          ["B","Carbon Bow (PD)","Precise","I–IV","30–45% crit, random bonus per arrow. A starter."]
        ] },
      { h:"Item ratings by wave", p:"Fruit is your healing; everything else keeps the last hit off you. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Pocket Watch (PD)","III","S","S","A","Once per wave, falling below 40% HP slows enemies and their shots by 75% for 5s. Veteran lives below 40%."],
          ["Garden","II","A","A","B","A fruit every 15s, your only healing."],
          ["Tree","I","A","A","B","Trees drop fruit."],
          ["Lemonade, Weird Food","I","A","A","B","+1 / +2 HP from fruit."],
          ["Tardigrade","III","A","A","A","Nullifies one hit each wave."],
          ["Sharp Bullet","I","A","A","B","+1 pierce."],
          ["Jellyshield","III","B","A","A","Blocks projectiles."],
          ["Mud Lover (PD)","IV","—","B","B","+60% Damage while in a puddle."],
          ["Hungry Hungry Dinosaur (PD)","III","C","C","C","Its pet eats the fruit you need to heal."],
          ["Predator’s Claw (PD), Lost Organ (PD)","II / I","C","C","C","Each makes consumables heal less."]
        ],
        notes: [ "Life Steal and HP Regen items don't show up in Veteran's shop." ] },
      fossilSection("Max HP and Armor fossils; regen and Life Steal fossils are wasted.", defFossils({"Spine":"C: regen is -100","Jaw":"C: Life Steal is -100%","Skull":"A: +10% Damage, +3% per fossil"})),
      petSection("Pets that block hits keep your HP where you want it.", defPets({"Doc Moth":"C: doubles nothing"})),
      { h:"DLC notes", notes: [ PD_NOTE ] }
    ],
    sources: fsrc("Veteran", [[WEB + "Machine Gun", FW + "Machine_Gun"], [WEB + "Pocket Watch", FW + "Pocket_Watch"]])
  };

  D["Poacher"] = {
    lead: "Poacher (Primal Dread) gets a hunting zone each wave, and enemies killed inside it drop 50% fewer materials. The site's guide also gives +3% Damage per 15 kills in the zone; the fandom wiki lists only the material cut, so that bonus is unconfirmed.",
    sections: [
      pdWiki(["Unlock: kill 20 different enemy types in the Jungle.", "Win reward: Mud Lover (+60% Damage while in a puddle)."],
        "Awl, Blowgun, Cacti Club, Carbon Bow, Chopper, Crowbar, Double Barrel Shotgun, Fist, Flail, Hatchet, Knife, Machine Gun, Meat Tenderizer, Molotov Cocktail, Pistol, Quarterstaff, SMG, Sharp Tooth, Shovel, Slingshot, Stick, Sticky Grenade, Taser, Tranq Rifle, Whip, Wrench"),
      { h:"Weapons", p:"Wave clear inside the zone.", head:WPN_HEAD,
        rows: [
          ["A","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s. A starter."],
          ["A","Slingshot","Primitive","I–IV","Bounces inside the zone. A starter."],
          ["A","Double Barrel Shotgun","Gun","I–IV","4–6 piercing pellets. A starter."],
          ["A","Combat Shotgun (PD)","Gun","II–IV","50–106 DPS. Sold from Tier II."],
          ["B","Blowgun (PD)","Precise, Primitive","I–IV","Hits make enemies take 20–50% more damage for 3s; 600 range. A starter."]
        ] },
      { h:"Item ratings by wave", p:"Make up the lost drops and keep killing in the zone. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Wheelbarrow","II","A","A","B","+16 Harvesting covers the lost drops."],
          ["Sharp Bullet","I","A","A","B","+1 pierce."],
          ["Smelly Rafflesia (PD)","III","A","A","A","Attacks have a 25% chance to make enemies take 25% more damage for 5s."],
          ["Ricochet","IV","—","A","A","+1 bounce."],
          ["Barricade","III","A","A","A","+8 Armor while standing still in the zone."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Mud Lover (PD)","IV","—","B","B","+60% Damage in a puddle, if the zone has one."]
        ] },
      fossilSection("Defensive fossils for holding the zone.", defFossils({"Tail":"B: Harvesting covers lost drops","Skull":"A: +10% Damage, +3% per fossil"})),
      petSection("Pets that hold ground help.", defPets({})),
      { h:"DLC notes", notes: [ PD_NOTE ] }
    ],
    sources: fsrc("Poacher", [[WEB + "Combat Shotgun", FW + "Combat_Shotgun"]])
  };

  D["Droid"] = {
    lead: "Droid (Primal Dread) loses materials instead of HP when hit, and dies at 0 materials. It can only evolve on the Mecha side, gets +1 Mecha part and +5% enemy damage per level-up instead of an upgrade, and +1 Evolution each wave.",
    sections: [
      pdWiki(["Available from the start.", "Win reward: Failsafe Core.",
        "Restrictions: about 40 healing and Max HP items never appear, among them Medikit, Regeneration Potion, Garden, Fruit Basket, Stone Skin, Octopus, Doc Moth, Barnacle and Failsafe Core."],
        "Carbon Bow, Double Barrel Shotgun, Laser Gun, Medical Gun, Pistol, Rail Gun, SMG, Screwdriver, Shredder, Tranq Rifle, Wrench"),
      { h:"Weapons", p:"Fast ranged weapons, and Mecha parts on one weapon type.", head:WPN_HEAD,
        rows: [
          ["A","SMG","Gun","I–IV","3–8 damage every 0.17–0.15s. A starter."],
          ["A","Double Barrel Shotgun","Gun","I–IV","4–6 piercing pellets. A starter."],
          ["A","Combat Shotgun (PD)","Gun","II–IV","50–106 DPS. Sold from Tier II: a good Mecha target."],
          ["A","Tranq Rifle (PD)","Gun, Precise","I–IV","Long range and slows; hits you avoid cost no materials. A starter."],
          ["B","Machine Gun (PD)","Gun, Heavy","I–IV","16–68 DPS, -3% Speed each. Shop only."]
        ] },
      { h:"Item ratings by wave", p:"Materials are your health: income is defense. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bag","I","S","A","B","+15 materials per crate: income and health."],
          ["Piggy Bank","II","S","A","B","+20% of your materials at wave start."],
          ["Wheelbarrow","II","A","A","B","+16 Harvesting."],
          ["Metal Detector","II","A","A","B","5% chance to double picked-up materials."],
          ["Jamming Backpack (PD)","II","A","A","B","+5 Evolution, and hitting Mecha enemies slows them 50% for 2s."],
          ["Gambling Token, Leather Vest","II","A","A","B","Dodge: hits you avoid cost no materials."],
          ["Lifeform Scanner (PD)","III","A","A","B","Turns the next planned elite into a horde: more drops, less burst."],
          ["Flare (PD)","III","B","B","C","+1 material per evolved kill, but +20% enemy damage and +10% enemies."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."]
        ],
        notes: [ "The healing and Max HP items Droid can't use don't show up in its shop." ] },
      fossilSection("Max HP and regen fossils do little for Droid.", defFossils({"Right Arm":"C: Max HP isn't your health","Spine":"C: regen isn't your health","Jaw":"C: Life Steal isn't your health","Tail":"A: Harvesting is income and health","Skull":"A: +10% Damage, +3% per fossil"})),
      petSection("Lootworm doubles materials, which are your health.", defPets({"Lootworm":"S: more materials means more health","Doc Moth":"—: not sold to Droid"})),
      { h:"DLC notes", notes: [ PD_NOTE ] }
    ],
    sources: fsrc("Droid", [[WEB + "Jamming Backpack", FW + "Jamming_Backpack"]])
  };

  D["Variant"] = {
    lead: "Variant (Primal Dread) can only evolve on the Mutant side. One item mutates at the end of each wave, with a 50% chance to be replaced by a mutated item of a better tier. -25% XP Gain.",
    sections: [
      pdWiki(["Available from the start.", "Win reward: Wildfire Mutation (+25% chance a mutating item upgrades a tier)."],
        "Awl, Blowgun, Carbon Bow, Crowbar, Double Barrel Shotgun, Flail, Ghost Flint, Icicle, Machine Gun, Meat Tenderizer, Molotov Cocktail, Pan Flute, Pistol, SMG, Shovel, Slingshot, Sticky Grenade, Taser, Tranq Rifle, Wand, Whip"),
      { h:"Weapons", p:"Steady weapons that don't depend on any one item, since items change under you.", head:WPN_HEAD,
        rows: [
          ["A","Meat Tenderizer (PD)","Blunt, Medical","I–IV","15–75 damage, scaling with Melee Damage and HP Regen. A starter."],
          ["A","Machine Gun (PD)","Gun, Heavy","I–IV","16–68 DPS, -3% Speed each. A starter; ranged option for acid-heavy waves."],
          ["A","Double Barrel Shotgun","Gun","I–IV","4–6 piercing pellets. A starter."],
          ["B","Flail (PD)","Medieval, Primitive","I–IV","11–27 damage; the tip always crits, x2.5 to x4. A starter."]
        ] },
      { h:"Item ratings by wave", p:"Own many cheap items so mutations have plenty to upgrade. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Bag","I","S","B","C","Cheap Tier I item: mutation fodder, plus materials."],
          ["Coupon","I","S","B","C","Cheap Tier I item."],
          ["Helmet, Coffee","I","A","B","C","Cheap Tier I items that may mutate upward."],
          ["Wildfire Mutation (PD)","IV","—","A","A","+25% chance a mutating item upgrades. How it adds to Variant's own 50% isn't documented."],
          ["Goldfish (AT)","III","A","A","B","Items one tier higher after the next reroll."],
          ["Boosted Mitosis (PD)","II","B","B","C","Mutated enemies 50% more likely to drop a mutation fruit; -1 Armor, -3 Evolution."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Jellyshield","III","B","A","A","Blocks projectiles."],
          ["Eldritch Figurine (PD)","II","C","C","C","-5 Evolution for a small heal on mutated kills."]
        ] },
      fossilSection("Any fossil may mutate away; don't build around one.", defFossils({})),
      petSection("Pets are items too, and may mutate.", defPets({})),
      { h:"DLC notes", notes: [ "Mutant enemies leave acid; Plastic Boots (PD) makes you immune to puddles for -3% Speed.", PD_NOTE ] }
    ],
    sources: fsrc("Variant", [[WEB + "Wildfire Mutation", FW + "Wildfire_Mutation"]])
  };

  D["Mad Scientist"] = {
    lead: "Mad Scientist (Primal Dread) counts every Evolution change as positive, feeding both the Mecha and Mutant sides, and gains +2 Evolution each wave. Enemies evolve down either path with equal chance. -5% XP Gain each wave.",
    sections: [
      pdWiki(["Unlock: win a run with Variant and a run with Droid.", "Win reward: Light Saber (Tier III–IV; deflects enemy projectiles at the nearest enemy)."],
        "Awl, Blowgun, Crowbar, Double Barrel Shotgun, Flail, Ghost Flint, Icicle, Machine Gun, Meat Tenderizer, Molotov Cocktail, Pistol, Rail Gun, SMG, Shovel, Sticky Grenade, Taser, Tranq Rifle, Wand, Wrench"),
      { h:"Weapons", p:"Pick one weapon type and keep putting Mecha upgrades on it.", head:WPN_HEAD,
        rows: [
          ["A","Double Barrel Shotgun","Gun","I–IV","4–6 piercing pellets. A starter; Combat Shotguns from Tier II."],
          ["A","Combat Shotgun (PD)","Gun","II–IV","50–106 DPS. Sold from Tier II."],
          ["A","Machine Gun (PD)","Gun, Heavy","I–IV","16–68 DPS, -3% Speed each. A starter."],
          ["A","Meat Tenderizer (PD)","Blunt, Medical","I–IV","15–75 damage with Melee Damage and HP Regen. A starter."],
          ["B","Crowbar (PD)","Tool","I–IV","Turrets every 18–12 kills; hits add up to 30% damage taken. A starter."]
        ] },
      { h:"Item ratings by wave", p:"Evolution items are better here than anywhere. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Jamming Backpack (PD)","II","S","A","B","+5 Evolution, and hitting Mecha enemies slows them 50% for 2s."],
          ["Exothermic Reaction (PD)","III","A","S","A","Evolved enemies have a 33% chance to explode on death for 10 (+100% Evolution). -4% Dodge."],
          ["Virus (PD)","III","A","A","A","25% chance to charm evolved enemies below 50% HP. -5% Attack Speed."],
          ["Plastic Boots (PD)","III","A","A","A","Immune to the acid puddles. -3% Speed."],
          ["Bag","I","S","B","C","+15 materials per crate."],
          ["Sharp Bullet","I","A","A","B","+1 pierce."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."],
          ["Jellyshield","III","B","A","A","Blocks the Mecha lasers."],
          ["Eldritch Figurine (PD), Boosted Mitosis (PD)","II","?","?","?","Both lower Evolution. Mad Scientist counts every change as positive, so they may help; not confirmed."]
        ] },
      fossilSection("Defensive fossils.", defFossils({"Skull":"A: +10% Damage, +3% per fossil"})),
      petSection("Standard pet ratings.", defPets({})),
      { h:"DLC notes", notes: [ "Expect both Mecha lasers and Mutant acid in the same wave.", PD_NOTE ] }
    ],
    sources: fsrc("Mad_Scientist", [[WEB + "Light Saber", FW + "Light_Saber"]])
  };

  D["Caveman"] = {
    lead: "Caveman (Primal Dread) fights in a fog that thickens every wave. Burning weapons improves visibility and gives Primitive weapons bonus damage by the burnt weapon's tier (1, 2, 4 or 8). Caveman can't equip ranged weapons.",
    sections: [
      pdWiki(["Unlock: equip 5 fossils in one run.", "Win reward: Blowgun, a ranged weapon Caveman himself can't use."],
        "Cacti Club, Hatchet, Quarterstaff, Rock, Sharp Tooth, Spear, Stick, Torch"),
      { h:"Weapons", p:"Primitive melee, so burning pays twice: light and damage.", head:WPN_HEAD,
        rows: [
          ["A","Spear","Primitive","I–IV","15–60 damage, 350–500 range. A starter."],
          ["A","Cacti Club","Primitive, Heavy","I–IV","Spawns projectiles on hit. A starter."],
          ["A","Hatchet","Primitive","I–IV","7–45 damage, 0.68–0.63s. A starter."],
          ["A","Flail (PD)","Medieval, Primitive","I–IV","11–27 damage; the tip always crits, x2.5 to x4. Shop only."],
          ["A","Whip (PD)","Primitive","I–IV","8–21 damage, 20–50% crit, slows 50% for 0.5–2s. Shop only."],
          ["B","Stick","Primitive","I–IV","Cheap: good for burning. A starter."]
        ],
        notes: [ "Boomerang (PD) is Primitive but scales with Melee Damage; whether Caveman counts it as ranged isn't documented." ] },
      { h:"Item ratings by wave", p:"Cheap weapons to burn, and defense for the hits you won't see coming. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Lantern (AT)","IV","—","S","S","The wiki: fog visibility +75% in Nightmare difficulty. Whether it helps Caveman's fog isn't documented."],
          ["Bag","I","S","A","B","Materials for cheap weapons to burn."],
          ["Warrior Helmet","III","A","A","A","+3 Armor, +5 Max HP."],
          ["Glasses","I","A","A","B","+20 Range."],
          ["Infected Skin (PD)","III","A","A","A","+3 Armor, and getting hit has a 33% chance to fire 8 spines scaling with Armor."],
          ["Raptor Eye (PD)","IV","—","A","A","+0.5x crit multiplier for -13 Luck; strong with Flail's guaranteed tip crits."],
          ["Silver Bullet","III","—","A","S","+25% against bosses and elites."]
        ] },
      fossilSection("Five fossils unlock Caveman, so you know them well.", defFossils({"Skull":"A: +10% Damage, +3% per fossil"})),
      petSection("Pets that hold aggro help when you can't see.", defPets({"Scapegoat":"S: takes aggro you can't see coming"})),
      { h:"DLC notes", notes: [ PD_NOTE ] }
    ],
    sources: fsrc("Caveman", [[WEB + "Flail", FW + "Flail"], [WEB + "Whip", FW + "Whip"]])
  };

  D["Time Shifter"] = {
    lead: "Time Shifter (Primal Dread) shifts time when hit, slowing everything but you. Some waves come out of order, though the first and final waves never move. +5% Speed, but Dodge changes are cut 100%. The shop favours Speed items.",
    sections: [
      pdWiki(["Available from the start.", "Win reward: Pocket Watch.", "Shop bias: Speed."],
        "Awl, Blowgun, Carbon Bow, Claw, Crowbar, Fist, Flail, Ghost Flint, Hiking Pole, Javelin, Jousting Lance, Knife, Machine Gun, Meat Tenderizer, Molotov Cocktail, Pruner, Quarterstaff, Screwdriver, Shovel, Shuriken, Spear, Stick, Sticky Grenade, Thief Dagger, Whip"),
      { h:"Weapons", p:"A hard wave can come early, so start with something that clears reliably.", head:WPN_HEAD,
        rows: [
          ["A","Boomerang (PD)","Primitive","I–IV","6–17 damage, +50–80% Melee Damage and +5–20% Speed, hits again on the way back. Not a starter; unlocks by winning with Survivor. The shop's Speed bias feeds it."],
          ["A","Spear","Primitive","I–IV","15–60 damage, 350–500 range. A starter."],
          ["A","Meat Tenderizer (PD)","Blunt, Medical","I–IV","15–75 damage with Melee Damage and HP Regen. A starter."],
          ["B","Machine Gun (PD)","Gun, Heavy","I–IV","16–68 DPS, but -3% Speed each works against your shop. A starter."]
        ] },
      { h:"Item ratings by wave", p:"Armor and Max HP are your only defenses. S = buy on sight, C = skip.", head:ITEM_HEAD,
        rows: [
          ["Warrior Helmet","III","S","A","A","+3 Armor, +5 Max HP."],
          ["Pocket Watch (PD)","III","A","S","A","Once per wave below 40% HP, slows enemies and their shots 75% for 5s. Its -4% Dodge costs you nothing."],
          ["Stone Skin","III","A","S","A","+1 Max HP per Armor."],
          ["Helmet","I","S","A","B","+1 Armor."],
          ["Predator’s Claw (PD)","II","A","A","B","+11% Attack Speed, +4% Speed."],
          ["Tardigrade","III","A","A","A","Nullifies one hit each wave."],
          ["Ashes (AT)","IV","—","S","S","+20% Damage, +20% Attack Speed."],
          ["Leather Vest, Cape","II / IV","C","C","C","Dodge is cut 100%."]
        ] },
      fossilSection("Fossils that cost Dodge are free for Time Shifter.", defFossils({"Skull":"S: +10% Damage, +3% per fossil; the Dodge cost is free","Right Arm":"A: Max HP, and the Dodge cost is free","Left Leg":"A: Speed"})),
      petSection("Standard pet ratings.", defPets({})),
      { h:"DLC notes", notes: [ PD_NOTE ] }
    ],
    sources: fsrc("Time_Shifter", [[WEB + "Boomerang", FW + "Boomerang"], [WEB + "Pocket Watch", FW + "Pocket_Watch"]])
  };
})();
