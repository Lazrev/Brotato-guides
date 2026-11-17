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
        ["?","Cestus (PD)","Not confirmed","—","New Primal Dread melee weapon; class not confirmed. If the tooltip says Unarmed, it fits."]
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
        ["Jaw","Life Steal","Not documented","A: on-hit healing on fast fists"],
        ["Left Leg","Speed","Crit Chance","A for Fist builds (Fist crit is only 1%), B for Claw"],
        ["Spine","+2 HP Regen, +1 per fossil","-5% Damage","B"],
        ["Right Arm","Max HP","Dodge","C: costs your main defense, unless you're over the 60% cap"],
        ["Tooth","Count only","-2 Max HP","C: only to push the count"],
        ["Right Leg, Tail, Left Arm, Skull","Not yet documented","—","Check in game"]
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
    ["TrueAchievements – Danger 5 dodge-tank build","https://trueachievements.com//a422858/danger-5-achievement"],
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
        ["Right Arm","II","Max HP","Dodge (amount not stated)","A: more HP for regen to work with"],
        ["Left Leg","II","Speed (+2 at 2 fossils)","Crit Chance","B: fits Power Generator and the speed target"],
        ["Jaw","II","Life Steal","Not documented","B: Medical weapons already carry 45–65% lifesteal"],
        ["Tooth","I","Counts toward the total only","-2 Max HP","C: only to push the count"],
        ["Right Leg, Tail","II","Not yet documented","—","Check in game"],
        ["Left Arm, Skull","III","Not yet documented","—","Check in game"]
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
