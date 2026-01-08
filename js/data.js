export const gameData = {
    professions: {
        warrior: {
            id: "warrior",
            name: "Warrior"
        },
        ranger: {
            id: "ranger",
            name: "Ranger"
        },
        monk: {
            id: "monk",
            name: "Monk"
        },
        necromancer: {
            id: "necromancer",
            name: "Necromancer"
        },
        mesmer: {
            id: "mesmer",
            name: "Mesmer"
        },
        elementalist: {
            id: "elementalist",
            name: "Elementalist"
        },
        ritualist: {
            id: "ritualist",
            name: "Ritualist"
        },
        assassin: {
            id: "assassin",
            name: "Assassin"
        },
        paragon: {
            id: "paragon",
            name: "Paragon"
        },
        dervish: {
            id: "dervish",
            name: "Dervish"
        }
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
        leatherSquare: {
            id: "leatherSquare",
            name: "Leather Square",
            rarity: "common",
            sources: ["expert salvage", "trader", "crafting"],
            wiki: "https://wiki.guildwars.com/wiki/Leather_Square"
        },
        bone: {
            id: "bone",
            name: "Bone",
            rarity: "common",
            sources: ["salvage", "trader", "mob drop"],
            wiki: "https://wiki.guildwars.com/wiki/Bone"
        }
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
        "ranger-rawhide": {
            id: "ranger-rawhide",
            name: "Rawhide Armor",
            profession: "ranger",
            campaign: "prophecies",
            cost: {
                gold: 4000,
                materials: {
                    tannedHideSquare: 175,
                    leatherSquare: 28
                }
            },
            wiki: "https://wiki.guildwars.com/wiki/Ranger_Rawhide_armor"
        },
        "ranger-krytan-armor": {
            id: "ranger-krytan-armor",
            name: "Krytan Armor",
            profession: "ranger",
            campaign: "prophecies",
            cost: {
                gold: 5000,
                materials: {
                    tannedHideSquare: 200,
                    bone: 200
                }
            },
            wiki: "https://wiki.guildwars.com/wiki/Ranger_Krytan_armor"
        }
    }
};