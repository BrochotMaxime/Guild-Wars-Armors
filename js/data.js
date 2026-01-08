export default gameData;

const gameData = {
    professions: {
        warrior: {
            id: "warrior",
            name: "Warrior"
        },
        ranger: {
            id: "ranger",
            name: "Ranger"
        },
        // More professions...
    },

    campaigns: {
        prophecies: {
            id: "prophecies",
            name: "Prophecies"
        },
        factions: {
            id: "factions",
            name: "Factions"
        },
        nighfall: {
            id: "nighfall",
            name: "Nightfall"
        },
        eyeOfTheNorth: {
            id: "eyeOfTheNorth",
            name: "Eye of the North"
        }
    },

    materials: {
        tannedHideSquare: {
            id: "tannedHideSquare",
            name: "Tanned Hide Square",
            rarity: "common",
            sources: ["salvage", "trader", "mob drop"],
            wiki: "https://wiki.guildwars.com/wiki/Tanned_Hide_Square"
        },
        ironIngot: {
            id: "ironIngot",
            name: "Iron Ingot",
            rarity: "common",
            sources: ["salvage", "trader"],
            wiki: "https://wiki.guildwars.com/wiki/Iron_Ingot"
        },
        steelIngot: {
            id: "steelIngot",
            name: "Steel Ingot",
            rarity: "rare",
            sources: ["expert salvage", "trader", "crafting", "hidden treasure drop"],
            wiki: "https://wiki.guildwars.com/wiki/Steel_Ingot"
        },
        // More materials...
    },

    armors: {
        "warrior-ascalon": {
            id: "warrior-ascalon",
            name: "Ascalon Armor",
            profession: "warrior",
            campaign: "prophecies",
            cost: {
                gold: 5000,
                materials: {
                    tannedHideSquare: 200,
                    steelIngot: 32
                }
            },
            wiki: "https://wiki.guildwars.com/wiki/Warrior_Ascalon_armor"
        },
        "warrior-krytan": {
            id: "warrior-krytan",
            name: "Krytan Armor",
            profession: "warrior",
            campaign: "prophecies",
            cost: {
                gold: 5000,
                materials: {
                    ironIngot: 200,
                    steelIngot: 32
                }
            },
            wiki: "https://wiki.guildwars.com/wiki/Warrior_Krytan_armor"
        },
        // More armor sets...
    }
};