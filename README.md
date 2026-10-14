# Reverend Insanity RPG for Foundry 14

Version 1.4.0 provides Portuguese and English rules, sheets, compendiums, and maps for mortal Ranks 1–5. It uses the campaign's six revised books, with Persuasion and Commerce as separate skills.

## Installation and language

Close your world and extract the `reverend-insanity` folder from the distribution ZIP into your Foundry user data folder's `Data/systems` directory. Back up an existing installation before replacing it. Restart Foundry and create a world using Reverend Insanity RPG.

On the active GM's first entry, choose **Português (Brasil)** or **English**. Closing the prompt leaves the choice pending. You can change it later in **Configure Settings → Reverend Insanity RPG → Idioma do RPG / RPG language** and reload the world. This is a shared world setting; it does not change Foundry's own interface language or the language of third-party modules.

The system uses compendiums in the selected language. Both editions remain available in Compendium Packs; English packs carry `[EN]`. Changing the setting does not overwrite documents already imported into your world or translate your personal notes. Import a document from the other edition when you need a separate copy.

## New worlds and maps

The illustrated system cover is the default background for worlds without a custom background. A GM's custom background takes priority.

The first active GM's entry adds six reference scenes in the chosen language: World — Five Regions, Southern Border, Northern Plains, Western Desert, Eastern Sea, and Central Continent. These maps have no grid or token vision restrictions; their scale is illustrative. No scene is activated automatically.

Existing atlas scenes are preserved and are not duplicated. Once initialization is complete, scenes deleted by the GM stay deleted. You can import them again from the scenes compendium. Changing language preserves existing scenes; English and Portuguese map editions remain available for manual import.

## Character sheets

The seven icon tabs are Profile, Attributes and Skills, Aperture, Equipment, Backpack, Alchemy/Forge, and Effects. Hover over an icon to see its name. Portrait, Life, Essence, and Rank stay visible while the tab content scrolls.

Click an attribute or skill name to open a test with that choice selected. Check the other component, difficulty or opposition, and modifiers before rolling. Each d10 showing 7–10 yields one success. Success requires exceeding D; opposed ties favor the defender.

The Profile uses linked people and Dao items. Choose them with the profile controls or drag them from a compendium. The header reflects the selected people and present paths; clicking a card opens its rules. Each Dao records its own attainment and supporting discovery. There are no duplicate editable race or Dao fields, and no Languages field in the interface. Available development points are under Attributes and Skills.

The racial bonus control records a creation bonus once, up to the limit of 5. For legacy characters, the initial option indicates that the bonus is already included, preventing an accidental second award. A Dao grants no automatic dice. Changing the displayed people does not rebuild creation points; discuss a character rebuild with the GM.

The Aperture tab contains cultivation, Gu, recovery, and feeding. Enable a second Aperture when appropriate and choose the active reserve in the header. Costs are paid even when a test fails. Check special costs in the item description and adjust them before rolling.

Equipping an item moves it from Backpack to Equipment. Backpack tracks whole primeval stones and partially absorbed stones as integer quantities. Absorbing 1 Essence point from a whole stone leaves a partially absorbed stone; absorbing the second point turns it into an ordinary stone and removes it from the currency balance. Recovery uses partially absorbed stones first. A legacy balance of 3.5 converts to 3 whole and 1 partially absorbed stone.

Alchemy/Forge collects recipes and materials. Effects records active and disabled conditions and their modifiers. The sheet uses the book's light paper, dark ink, red headings, and ornamentation while retaining editable fields and icon navigation.

## Beasts and organizations

Beasts have Creature, Combat, Resources and Spoils, and Effects tabs, with portrait, Tier, and Life in the header. All 161 compendium creatures include their corresponding illustration and token image.

Organizations have identity, members and relationships, treasury and resources, and plans and records. Their sheets do not show a cultivator's Life, Essence, or Aperture.

## Included content

Each language has 12 compendiums containing 3,327 documents:

- 782 Gu and Rank variants
- 1,177 book and rules entries
- 35 equipment and provisions entries
- 281 materials and resources
- 798 recipes and formulas
- 161 beasts
- 6 manuals and techniques
- 53 peoples and paths
- 5 ready-made characters
- 8 atlas and adventure entries
- 15 conditions and treatments
- 6 world and regional scenes

The rules journals include text and tables; they do not reproduce every book illustration. The six English books are supplied separately from the Foundry system package.

## Automation and limits

The system calculates test pools and results, Essence capacity, maximum Life, Gu costs, recovery, and cultivation advancement. Changing permanent attributes preserves damage already suffered.

The GM handles target damage, specific Gu interpretations, contextual conditions, elapsed time, and ingredient consumption or production. Recording an effect duration does not make it expire automatically. Read each entry: its use button does not automate every exception or combination in the books.

## Optional modules

Carousel Combat Tracker 5.0.0, DFreds Droppables 6.2.0, Dice So Nice! 6.2.9, and Performance Optimizer 0.0.3 were tested together on Foundry 14.368 with system version 1.4.0 in the English Demo world. The check covered the English character sheet, a Body roll, folder-based token creation, initiative (310.7), Round 1, and Portuguese/English language selection. The automated suite also passes all 27 checks.

Carousel receives Life, the active Aperture's Essence, and Rank as default attributes. Beasts show Life and Tier; organizations have no cultivator reserves. Custom Carousel settings are preserved. Initiative uses Body, Mind, and the system's d10 tiebreaker.

Dice So Nice! receives tests and initiative through Foundry's normal roll mechanism without duplicate animation calls. DFreds Droppables can drop actor folders onto the map. Performance Optimizer retains control of each player's graphical preferences. Enable these optional modules through Module Management in each world; their files are not included or modified by this package.

The verification browser reported a Dice So Nice! `dicehit.mp3` audio loading error. Rolls and combat results worked; dice audio remains unverified in this browser. No third-party module files were modified.
