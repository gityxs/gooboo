export default {
    // Level 1 genes
    yield: {
        icon: 'mdi-sack',
        effect: [{name: 'farmCropGain', type: 'mult', value: 1.4}],
        upgrade: [{name: 'farmCropGain', type: 'mult', value: lvl => Math.pow(1.1, lvl)}]
    },
    gold: {
        icon: 'mdi-gold',
        effect: [{name: 'farmGoldChance', type: 'mult', value: 1.75}],
        upgrade: [{name: 'farmGoldChance', type: 'mult', value: lvl => Math.pow(1.12, lvl)}]
    },
    exp: {
        icon: 'mdi-star',
        effect: [{name: 'farmExperience', type: 'mult', value: 1.3}],
        upgrade: [{name: 'farmExperience', type: 'base', value: lvl => lvl * 0.15}]
    },
    rareDrop: {
        icon: 'mdi-dice-2',
        effect: [{name: 'farmRareDropChance', type: 'mult', value: 1.25}],
        upgrade: [{name: 'farmRareDropChance', type: 'mult', value: lvl => Math.pow(1.08, lvl)}]
    },

    // Level 5 genes
    grow: {
        icon: 'mdi-timer',
        effect: [{name: 'farmGrow', type: 'mult', value: 0.8}],
        upgrade: [{name: 'farmExperience', type: 'base', value: lvl => lvl * 0.12}]
    },
    overgrow: {
        icon: 'mdi-sprout',
        effect: [{name: 'farmOvergrow', type: 'mult', value: 2.5}],
        upgrade: [{name: 'farmOvergrow', type: 'base', value: lvl => lvl * 0.15}]
    },
    giant: {
        icon: 'mdi-numeric-5-box-multiple',
        effect: [
            {name: 'farmGrow', type: 'mult', value: 5},
            {name: 'farmAllGain', type: 'mult', value: 4}
        ],
        upgrade: [{name: 'farmCropGain', type: 'mult', value: lvl => Math.pow(1.08, lvl)}]
    },
    grass: {
        icon: 'mdi-grass',
        effect: [{name: 'farm_grass', type: 'addRareDrop', value: 8}],
        upgrade: [{name: 'farm_grass', type: 'addRareDropAmount', value: lvl => lvl}]
    },

    // Level 10 genes
    dna: {
        icon: 'mdi-dna',
        effect: [{name: 'farmUnlockDna', type: 'text'}],
        upgrade: []
    },
    gnome: {
        icon: 'mdi-human-child',
        effect: [{name: 'farmGnomeBoost', type: 'text'}],
        upgrade: [{name: 'farmGoldChance', type: 'mult', value: lvl => Math.pow(1.09, lvl)}]
    },
    lonely: {
        icon: 'mdi-circle-expand',
        effect: [{name: 'farmLonelyGrow', type: 'text'}],
        upgrade: [{name: 'farmOvergrow', type: 'base', value: lvl => lvl * 0.12}]
    },
    fertile: {
        icon: 'mdi-sack-percent',
        effect: [{name: 'farmFertileBoost', type: 'text'}],
        upgrade: [{name: 'farmAllGain', type: 'mult', value: lvl => lvl * 0.02 + 1}]
    },

    // Level 15 genes
    mystery: {
        icon: 'mdi-eye-circle-outline',
        effect: [{name: 'farm_mysteryStone', type: 'addRareDrop', value: 1}],
        upgrade: [{name: 'farmMystery', type: 'base', value: lvl => lvl}]
    },
    conversion: {
        icon: 'mdi-swap-horizontal',
        effect: [{name: 'farmYieldConversion', type: 'text'}],
        upgrade: [{name: 'farmCropGain', type: 'mult', value: lvl => Math.pow(1.07, lvl)}]
    },
    prestige: {
        icon: 'mdi-shimmer',
        effect: [{name: 'farmFastPrestige', type: 'text'}],
        upgrade: [{name: 'farmDnaNext', type: 'base', value: lvl => lvl * 10}]
    },
    rareDropChance: {
        icon: 'mdi-dice-multiple',
        effect: [{name: 'farmRareDropChance', type: 'base', value: 0.05}],
        upgrade: [{name: 'farmRareDropChance', type: 'base', value: lvl => lvl * 0.001}]
    },
}
