const gameData = {
    professions: {
        warrior: {
            name: "Warrior",
            armorsByCampaign : {
                prophecies: ["warrior-ascalon", "warrior-krytan", "warrior-tyrian", "warrior-charr-hide", "warrior-gladiator", "warrior-wyvern", "warrior-platemail", "warrior-templar", "warrior-elite-charr-hide", "warrior-elite-gladiator", "warrior-elite-dragon", "warrior-elite-platemail", "warrior-elite-templar"],
                factions: [ ],
                nightfall: [ ],
                eyeOfTheNorth: [ ]
            }
        },
        ranger: {
            name: "Ranger",
            armorsByCampaign : {
                prophecies: [ ],
                factions: [ ],
                nightfall: [ ],
                eyeOfTheNorth: [ ]
            }
        },
        // More professions...
    },
    
    armors: {
        warrior: {
            "warrior-ascalon": {
                name: "Ascalon Armor",
                armorCost: {
                    goldCost: 5000,
                    materials: {
                        tannedHideSquare: 200,
                        steelIngot: 32
                    }
                },
                image: "...",
                wiki: "https://wiki.guildwars.com/wiki/Warrior_Ascalon_armor"
            },
            "warrior-krytan": {
                name: "Krytan Armor",
                armorCost: {
                    goldCost: 5000,
                    materials: {
                        ironIngot: 200,
                        steelIngot: 32
                    }
                },
                image: "...",
                wiki: "https://wiki.guildwars.com/wiki/Warrior_Krytan_armor"
            },
            "warrior-tyrian": {
                name: "Tyrian Armor",
                armorCost: {
                    goldCost: 5000,
                    materials: {
                        ironIngot: 200,
                        steelIngot: 32
                    }
                },
                image: "...",
                wiki: "https://wiki.guildwars.com/wiki/Warrior_Tyrian_armor"
            },
        // More armor sets...
        },
        ranger: {
            // Ranger armor sets...
        }
    },

    materials: {
        tannedHideSquare: {
            name: "Tanned Hide Square",
            rarity: "common",
            sources: ["salvage", "trader", "mob drop"],
            wiki: "https://wiki.guildwars.com/wiki/Tanned_Hide_Square"
        },
        ironIngot: {
            name: "Iron Ingot",
            rarity: "common",
            sources: ["salvage", "trader"],
            wiki: "https://wiki.guildwars.com/wiki/Iron_Ingot"
        },
        steelIngot: {
            name: "Steel Ingot",
            rarity: "rare",
            sources: [" expert salvage", "trader", "crafting", "hidden treasure drop"],
            wiki: "https://wiki.guildwars.com/wiki/Steel_Ingot"
        },
        // More materials...
    }
};